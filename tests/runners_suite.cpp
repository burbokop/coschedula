// Copyright 2023 Borys Boiko

#include "../src/runners.h"
#include <gtest/gtest.h>
#include <string>

namespace coschedula::tests {

TEST(runners_suite, thread)
{
    runners::thread([]() -> task<void> {
        co_await suspend{};
        co_await suspend{};
        co_await suspend{};
    }).join();
}

TEST(runners_suite, thread_recursive)
{
    runners::thread([]() -> task<void> {
        co_await suspend{};
        runners::thread([]() -> task<void> {
            co_await suspend{};
            co_await suspend{};
            co_await suspend{};
        }).join();
        co_await suspend{};
    }).join();
}

TEST(runners_suite, async)
{
    auto f = runners::async([]() -> task<std::string> {
        co_await suspend{};
        co_await suspend{};
        co_await suspend{};
        co_return "ssss";
    });

    f.wait();
    ASSERT_EQ(f.get(), "ssss");
}

TEST(runners_suite, async_recursive)
{
    auto f = runners::async([]() -> task<std::string> {
        co_await suspend{};
        auto f = runners::async([]() -> task<std::string> {
            co_await suspend{};
            co_await suspend{};
            co_await suspend{};
            co_return "ssss";
        });
        co_await suspend{};
        f.wait();
        co_return f.get();
    });

    f.wait();
    ASSERT_EQ(f.get(), "ssss");
}

TEST(runners_suite, block_on)
{
    const auto v = runners::block_on([]() -> task<std::string> {
        co_await suspend{};
        co_await suspend{};
        co_await suspend{};
        co_return "ssss";
    });

    ASSERT_EQ(v, "ssss");
}

TEST(runners_suite, block_on_void)
{
    runners::block_on([]() -> task<> {
        co_await suspend{};
        co_await suspend{};
        co_await suspend{};
        co_return;
    });
}

TEST(runners_suite, block_on_inside_block_on)
{
    runners::block_on([]() -> task<> {
        co_await suspend{};
        runners::block_on([]() -> task<> {
            co_await suspend{};
            runners::block_on([]() -> task<> {
                co_await suspend{};
                co_return;
            });
            co_await suspend{};
            co_return;
        });
        co_await suspend{};
        co_return;
    });
}

TEST(runners_suite, concurrent)
{
    auto runner = runners::concurrent([]() -> task<std::string> {
        co_await suspend{};
        co_await suspend{};
        co_await suspend{};
        co_return "ssss";
    });

    runner.proceed();

    ASSERT_EQ(std::move(runner).wait(), "ssss");
}

TEST(runners_suite, concurrent_recursive)
{
    ASSERT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 0u);

    auto runner = runners::concurrent([]() -> task<std::string> {
        EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 1u);
        co_await suspend{};
        EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 1u);
        auto runner = runners::concurrent([]() -> task<std::string> {
            EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 2u);
            co_await suspend{};
            EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 2u);
            co_await suspend{};
            EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 2u);
            co_await suspend{};
            EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 2u);
            co_return "ssss";
        });
        EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 1u);
        runner.proceed();
        EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 1u);
        co_await suspend{};
        EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 1u);
        auto r = std::move(runner).wait();
        EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 1u);
        co_await suspend{};
        EXPECT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 1u);
        co_return r;
    });

    ASSERT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 0u);
    runner.proceed();
    ASSERT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 0u);
    ASSERT_EQ(std::move(runner).wait(), "ssss");
    ASSERT_EQ(dispatcher_selector<default_dispatcher>::stack_depth(), 0u);
}

} // namespace coschedula::tests
