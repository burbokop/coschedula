#include "../src/global_scheduler.h"
#include "../src/task.h"
#include "random_gen.h"
#include <benchmark/benchmark.h>

namespace coschedula::benchmarks::complexity {

namespace {

void num_of_tasks(benchmark::State &state)
{
    struct s : default_task_registry
    {};

    const auto &&task_coro = []() -> ::coschedula::task<std::size_t, global_scheduler<s>> {
        std::size_t sum = 0;
        for (std::size_t i = 0; i < 256; ++i) {
            sum += 1;
        }
        co_return sum;
    };

    for (auto _ : state) {
        (void) _;
        std::vector<::coschedula::task<std::size_t, global_scheduler<s>>> tasks;
        tasks.reserve(state.range(0));
        for (std::size_t i = 0; i < state.range(0); ++i) {
            tasks.push_back(task_coro());
        }

        coschedula::global_scheduler<s>::task_registry().proceed_until_empty();
    }
    state.SetComplexityN(state.range(0));
}

void num_of_tasks_async(benchmark::State &state)
{
    struct s : default_task_registry
    {};

    const auto &&task_coro = []() -> ::coschedula::task<std::size_t, global_scheduler<s>> {
        std::size_t sum = 0;
        for (std::size_t i = 0; i < 256; ++i) {
            sum += 1;
            co_await suspend{};
        }
        co_return sum;
    };

    for (auto _ : state) {
        (void) _;
        std::vector<::coschedula::task<std::size_t, global_scheduler<s>>> tasks;
        tasks.reserve(state.range(0));
        for (std::size_t i = 0; i < state.range(0); ++i) {
            tasks.push_back(task_coro());
        }

        coschedula::global_scheduler<s>::task_registry().proceed_until_empty();
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
