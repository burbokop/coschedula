// Copyright 2023 Borys Boiko

#include "../src/async.h"
#include "../src/global_scheduler.h"
#include "../src/runners.h"
#include "../src/task.h"
#include "../src/utils.h"
#include "random_gen.h"
#include "word_iterator.h"
#include <benchmark/benchmark.h>
#include <iostream>
#include <list>
#include <random>
#include <string>

namespace coschedula::benchmarks::task {

namespace {

constexpr std::size_t word_len = 16;
constexpr std::size_t word_count = 1024 * 256;

namespace separate_words {

auto without_coroutines(const auto &words)
{
    return std::vector<std::string>(benchmarks::utils::word_iterator<std::string>(words),
                                    benchmarks::utils::word_iterator<std::string>());
}

auto without_coroutines_manual_loop(const auto &words)
{
    std::vector<std::string> result;
    for (benchmarks::utils::word_iterator<std::string> it(words);
         it != benchmarks::utils::word_iterator<std::string>();
         ++it) {
        result.push_back(*it);
    }
    return result;
}

template<scheduler S = global_scheduler<default_task_registry>>
::coschedula::task<std::vector<std::string>, S> seq(const std::string &words)
{
    co_return std::vector<std::string>(benchmarks::utils::word_iterator<std::string>(words),
                                       benchmarks::utils::word_iterator<std::string>());
};

template<scheduler S = global_scheduler<default_task_registry>>
::coschedula::task<std::vector<std::string>, S> seq_async(const std::string &words)
{
    std::vector<std::string> result;
    std::size_t i = 0;
    for (benchmarks::utils::word_iterator<std::string> it(words);
         it != benchmarks::utils::word_iterator<std::string>();
         ++it) {
        result.push_back(*it);
        if (i > 1024) {
            co_await suspend{};
        }
    }
    co_return result;
};

template<scheduler S = global_scheduler<default_task_registry>>
::coschedula::task<std::vector<std::string>, S> par(const std::string &words)
{
    return ::coschedula::async<S>(
        [](const std::string &words) {
            return std::vector<std::string>(benchmarks::utils::word_iterator<std::string>(words),
                                            benchmarks::utils::word_iterator<std::string>());
        },
        words);
};

} // namespace separate_words

void without_coroutines(benchmark::State &state)
{
    const auto words = benchmarks::utils::gen_text(word_len, word_count);
    for (auto _ : state) {
        (void) _;
        benchmark::DoNotOptimize(separate_words::without_coroutines(words));
    }
}

void without_coroutines_manual_loop(benchmark::State &state)
{
    const auto words = benchmarks::utils::gen_text(word_len, word_count);
    for (auto _ : state) {
        (void) _;
        benchmark::DoNotOptimize(separate_words::without_coroutines_manual_loop(words));
    }
}

void seq(benchmark::State &state)
{
    struct s : public default_task_registry
    {
        s(function<void(shared<s> &&)> &&about_to_resume)
            : default_task_registry([](shared<default_task_registry> &&r) {
                global_scheduler<s>::about_to_resume(
                    std::move(std::dynamic_pointer_cast<s>(r.nullable())));
            })
        {}
    };
    const auto words = benchmarks::utils::gen_text(word_len, word_count);

    for (auto _ : state) {
        (void) _;
        benchmark::DoNotOptimize(
            runners::block_on<global_scheduler<s>, s>(separate_words::seq<global_scheduler<s>>,
                                                      words));
    }
}

void seq_async(benchmark::State &state)
{
    struct s : public default_task_registry
    {
        s(function<void(shared<s> &&)> &&about_to_resume)
            : default_task_registry([](shared<default_task_registry> &&r) {
                global_scheduler<s>::about_to_resume(
                    std::move(std::dynamic_pointer_cast<s>(r.nullable())));
            })
        {}
    };
    const auto words = benchmarks::utils::gen_text(word_len, word_count);

    for (auto _ : state) {
        (void) _;

        benchmark::DoNotOptimize(
            runners::block_on<global_scheduler<s>, s>(separate_words::seq_async<global_scheduler<s>>,
                                                      words));
    }
}

void par(benchmark::State &state)
{
    struct s : public default_task_registry
    {
        s(function<void(shared<s> &&)> &&about_to_resume)
            : default_task_registry([](shared<default_task_registry> &&r) {
                global_scheduler<s>::about_to_resume(
                    std::move(std::dynamic_pointer_cast<s>(r.nullable())));
            })
        {}
    };
    const auto words = benchmarks::utils::gen_text(word_len, word_count);

    for (auto _ : state) {
        (void) _;

        benchmark::DoNotOptimize(
            runners::block_on<global_scheduler<s>, s>(separate_words::par<global_scheduler<s>>,
                                                      words));
    }
}

void two_tasks_without_coroutines(benchmark::State &state)
{
    const auto words = benchmarks::utils::gen_text(word_len, word_count);
    for (auto _ : state) {
        (void) _;
        benchmark::DoNotOptimize(separate_words::without_coroutines(words));
        benchmark::DoNotOptimize(separate_words::without_coroutines(words));
    }
}

void two_tasks_without_coroutines_manual_loop(benchmark::State &state)
{
    const auto words = benchmarks::utils::gen_text(word_len, word_count);
    for (auto _ : state) {
        (void) _;
        benchmark::DoNotOptimize(separate_words::without_coroutines_manual_loop(words));
        benchmark::DoNotOptimize(separate_words::without_coroutines_manual_loop(words));
    }
}

void two_tasks_seq(benchmark::State &state)
{
    struct s : public default_task_registry
    {
        s(function<void(shared<s> &&)> &&about_to_resume)
            : default_task_registry([](shared<default_task_registry> &&r) {
                global_scheduler<s>::about_to_resume(
                    std::move(std::dynamic_pointer_cast<s>(r.nullable())));
            })
        {}
    };
    const auto words = benchmarks::utils::gen_text(word_len, word_count);

    for (auto _ : state) {
        (void) _;
        runners::block_on<global_scheduler<s>, s>(
            [&words]() -> ::coschedula::task<void, global_scheduler<s>> {
                const auto t0 = separate_words::seq<global_scheduler<s>>(words);
                const auto t1 = separate_words::seq<global_scheduler<s>>(words);
                benchmark::DoNotOptimize(co_await t0);
                benchmark::DoNotOptimize(co_await t1);
            });
    }
}

void two_tasks_seq_async(benchmark::State &state)
{
    struct s : public default_task_registry
    {
        s(function<void(shared<s> &&)> &&about_to_resume)
            : default_task_registry([](shared<default_task_registry> &&r) {
                global_scheduler<s>::about_to_resume(
                    std::move(std::dynamic_pointer_cast<s>(r.nullable())));
            })
        {}
    };
    const auto words = benchmarks::utils::gen_text(word_len, word_count);

    for (auto _ : state) {
        (void) _;
        runners::block_on<global_scheduler<s>, s>(
            [&words]() -> ::coschedula::task<void, global_scheduler<s>> {
                const auto t0 = separate_words::seq_async<global_scheduler<s>>(words);
                const auto t1 = separate_words::seq_async<global_scheduler<s>>(words);
                benchmark::DoNotOptimize(co_await t0);
                benchmark::DoNotOptimize(co_await t1);
            });
    }
}

void two_tasks_par(benchmark::State &state)
{
    struct s : public default_task_registry
    {
        s(function<void(shared<s> &&)> &&about_to_resume)
            : default_task_registry([](shared<default_task_registry> &&r) {
                global_scheduler<s>::about_to_resume(
                    std::move(std::dynamic_pointer_cast<s>(r.nullable())));
            })
        {}
    };

    const auto words = benchmarks::utils::gen_text(word_len, word_count);

    for (auto _ : state) {
        (void) _;
        runners::block_on<global_scheduler<s>, s>(
            [&words]() -> ::coschedula::task<void, global_scheduler<s>> {
                const auto t0 = separate_words::par<global_scheduler<s>>(words);
                const auto t1 = separate_words::par<global_scheduler<s>>(words);
                benchmark::DoNotOptimize(co_await t0);
                benchmark::DoNotOptimize(co_await t1);
            });
    }
}

} // namespace

} // namespace coschedula::benchmarks::task

BENCHMARK(coschedula::benchmarks::task::without_coroutines);
BENCHMARK(coschedula::benchmarks::task::without_coroutines_manual_loop);
BENCHMARK(coschedula::benchmarks::task::seq);
BENCHMARK(coschedula::benchmarks::task::seq_async);
BENCHMARK(coschedula::benchmarks::task::par);

BENCHMARK(coschedula::benchmarks::task::two_tasks_without_coroutines);
BENCHMARK(coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop);
BENCHMARK(coschedula::benchmarks::task::two_tasks_seq);
BENCHMARK(coschedula::benchmarks::task::two_tasks_seq_async);
BENCHMARK(coschedula::benchmarks::task::two_tasks_par);
