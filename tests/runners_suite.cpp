// Copyright 2023 Borys Boiko

#include "../src/fs.h"
#include "../src/global_scheduler.h"
#include "../src/runners.h"
#include <gtest/gtest.h>
#include <list>
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
    auto runner = runners::concurrent([]() -> task<std::string> {
        co_await suspend{};
        auto runner = runners::concurrent([]() -> task<std::string> {
            co_await suspend{};
            co_await suspend{};
            co_await suspend{};
            co_return "ssss";
        });

        std::cout << "before inner proceed" << std::endl;
        runner.proceed();
        std::cout << "after inner proceed" << std::endl;

        co_await suspend{};
        std::cout << "before inner wait" << std::endl;
        auto r = std::move(runner).wait();
        std::cout << "after inner wait" << std::endl;
        co_await suspend{};

        std::cout << "before inner co_return" << std::endl;
        co_return r;
    });

    runner.proceed();

    ASSERT_EQ(std::move(runner).wait(), "ssss");
}

} // namespace coschedula::tests
