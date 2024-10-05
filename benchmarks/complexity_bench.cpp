// Copyright 2023 Borys Boiko

#include "../src/runners.h"
#include "../src/task.h"
#include <benchmark/benchmark.h>

namespace coschedula::benchmarks::complexity {

namespace {

void num_of_tasks(benchmark::State &state)
{
    const auto &&task_coro = []() -> ::coschedula::task<std::size_t> {
        std::size_t sum = 0;
        for (std::size_t i = 0; i < 256; ++i) {
            sum += 1;
        }
        co_return sum;
    };

    for (auto _ : state) {
        (void) _;
        benchmark::DoNotOptimize(runners::block_on([&state, &task_coro]() -> task<std::size_t> {
            std::vector<::coschedula::task<std::size_t>> tasks;
            tasks.reserve(static_cast<std::size_t>(state.range(0)));
            for (std::int64_t i = 0; i < state.range(0); ++i) {
                tasks.push_back(task_coro());
            }

            std::size_t r = 0;
            for (const auto &t : tasks) {
                r += co_await t;
            }
            co_return r;
        }));
    }
    state.SetComplexityN(state.range(0));
}

void num_of_tasks_async(benchmark::State &state)
{
    const auto &&task_coro = []() -> ::coschedula::task<std::size_t> {
        std::size_t sum = 0;
        for (std::size_t i = 0; i < 256; ++i) {
            sum += 1;
            co_await suspend{};
        }
        co_return sum;
    };

    for (auto _ : state) {
        (void) _;
        benchmark::DoNotOptimize(runners::block_on([&state, &task_coro]() -> task<std::size_t> {
            std::vector<::coschedula::task<std::size_t>> tasks;
            tasks.reserve(static_cast<std::size_t>(state.range(0)));
            for (std::int64_t i = 0; i < state.range(0); ++i) {
                tasks.push_back(task_coro());
            }

            std::size_t r = 0;
            for (const auto &t : tasks) {
                r += co_await t;
            }
            co_return r;
        }));
    }
    state.SetComplexityN(state.range(0));
}

} // namespace
} // namespace coschedula::benchmarks::complexity

BENCHMARK(coschedula::benchmarks::complexity::num_of_tasks)
    ->RangeMultiplier(2)
    ->Range(1 << 4, 1 << 10)
    ->Complexity();

BENCHMARK(coschedula::benchmarks::complexity::num_of_tasks_async)
    ->RangeMultiplier(2)
    ->Range(1 << 4, 1 << 10)
    ->Complexity();
