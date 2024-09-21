// Copyright 2023 Borys Boiko

#include "../src/async.h"
#include "../src/runners.h"
#include <gtest/gtest.h>

namespace coschedula::tests {

task<int> sum_coro(int a, int b)
{
    co_await suspend {};
    co_await suspend {};
    co_return a + b;
}

int sum_fun(int a, int b)
{
    return a + b;
}

TEST(async_suite, non_coro_context)
{
    const auto res = runners::block_on(
        []() -> task<int> { co_return co_await coschedula::async(sum_fun, 1, 2); });
    ASSERT_EQ(res, 3);
}

TEST(async_suite, coro_context)
{
    const auto res = runners::block_on(
        []() -> task<int> { co_return co_await coschedula::async(sum_coro, 1, 2); });
    ASSERT_EQ(res, 3);
}

TEST(async_suite, non_coro_context_lambda)
{
    const auto res = runners::block_on([]() -> task<int> {
        const int z = 4;
        co_return co_await coschedula::async([](int x, int y) { return x + y + z; }, 1, 2);
    });
    ASSERT_EQ(res, 7);
}

TEST(async_suite, coro_context_lambda)
{
    const auto res = runners::block_on([]() -> task<int> {
        const int z = 4;
        co_return co_await coschedula::async([](int x, int y) -> task<int> { co_return x + y + z; }, 1, 2);
    });
    ASSERT_EQ(res, 7);
}

} // namespace coschedula::tests
