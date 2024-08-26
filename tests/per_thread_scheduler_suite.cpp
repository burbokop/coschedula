// Copyright 2023 Borys Boiko

#include "../src/task.h"
#include "../src/utils.h"
#include <gtest/gtest.h>
#include <array>

namespace coschedula::tests {

using sch = per_thread_scheduler<default_task_registry>;

TEST(per_thread_scheduler_suite, void_task)
{
    bool entered = false;
    const auto &&void_task_coro = [&entered]() -> task<void, sch> {
        entered = true;
        co_return;
    };
    const auto t = void_task_coro();
    ASSERT_FALSE(entered);
    ASSERT_FALSE(t.done());
    ASSERT_TRUE(coschedula::proceed_until_empty<sch>());
    ASSERT_TRUE(entered);
    ASSERT_TRUE(t.done());
}

TEST(per_thread_scheduler_suite, two_dep)
{
    std::vector<std::size_t> seq;
    const auto &&dep_task_coro0 = [&seq]() -> task<std::string, sch> {
        seq.push_back(0);
        co_await suspend{};
        seq.push_back(1);
        co_await suspend{};
        seq.push_back(2);
        co_return "10";
    };
    const auto &&dep_task_coro1 = [&seq]() -> task<std::string, sch> {
        seq.push_back(3);
        co_await suspend{};
        seq.push_back(4);
        co_await suspend{};
        seq.push_back(5);
        co_return "20";
    };
    bool dep0_done_before_await = false;
    bool dep0_done_after_await = false;
    bool dep1_done_before_await = false;
    bool dep1_done_after_await = false;
    const auto &&task_coro = [&seq,
                              &dep_task_coro0,
                              &dep_task_coro1,
                              &dep0_done_before_await,
                              &dep0_done_after_await,
                              &dep1_done_before_await,
                              &dep1_done_after_await]() -> task<std::string, sch> {
        seq.push_back(6);
        const auto d0 = dep_task_coro0();
        seq.push_back(7);
        const auto d1 = dep_task_coro1();
        seq.push_back(8);
        dep0_done_before_await = d0.done();
        dep1_done_before_await = d1.done();
        const auto dep0_res = co_await d0;
        seq.push_back(9);
        const auto dep1_res = co_await d1;
        seq.push_back(10);
        dep0_done_after_await = d0.done();
        dep1_done_after_await = d1.done();
        co_return dep0_res + dep1_res + "30";
    };

    const auto t = task_coro();
    ASSERT_EQ(seq, std::vector<std::size_t>{});
    ASSERT_FALSE(t.done());
    ASSERT_FALSE(t.result());
    ASSERT_TRUE(coschedula::proceed_until_empty<sch>());
    ASSERT_EQ(seq[0], 6);
    ASSERT_EQ(seq[1], 7);
    ASSERT_EQ(seq[2], 8);
    ASSERT_EQ(seq[3], 0);
    ASSERT_EQ(seq[4], 3);
    ASSERT_EQ(seq[5], 1);
    ASSERT_EQ(seq[6], 4);
    ASSERT_EQ(seq[7], 2);
    ASSERT_EQ(seq[8], 5);
    ASSERT_EQ(seq[9], 9);
    ASSERT_EQ(seq[10], 10);
    ASSERT_TRUE(t.done());
    ASSERT_EQ(t.result(), "102030");
    ASSERT_FALSE(dep0_done_before_await);
    ASSERT_TRUE(dep0_done_after_await);
    ASSERT_FALSE(dep1_done_before_await);
    ASSERT_TRUE(dep1_done_after_await);
}

TEST(per_thread_scheduler_suite, parallel)
{
    using std::chrono::operator""us;

    struct ctx
    {
        std::atomic_bool entered = false;
        std::atomic_bool done = false;
        std::atomic<task_registry *> reg = nullptr;
    };

    std::array<ctx, 2> ctxs;

    auto t0 = std::thread{[&ctxs] {
        const auto &&t = [&ctxs]() -> task<void, sch> {
            ctxs[0].entered = true;
            for (std::size_t i = 0; i < 100; ++i) {
                std::this_thread::sleep_for(100us);
                co_await suspend{};
            }
            ctxs[0].done = true;
            co_return;
        }();
        ctxs[0].reg = &sch::registry();
        ASSERT_TRUE(coschedula::proceed_until_empty<sch>());
    }};

    auto t1 = std::thread{[&ctxs] {
        const auto &&t = [&ctxs]() -> task<void, sch> {
            ctxs[1].entered = true;
            for (std::size_t i = 0; i < 100; ++i) {
                std::this_thread::sleep_for(100us);
                co_await suspend{};
            }
            ctxs[1].done = true;
            co_return;
        }();
        ctxs[1].reg = &sch::registry();
        ASSERT_TRUE(coschedula::proceed_until_empty<sch>());
    }};

    t0.join(), t1.join();

    ASSERT_FALSE(coschedula::proceed_until_empty<sch>());
    ASSERT_TRUE(ctxs[0].entered);
    ASSERT_TRUE(ctxs[1].entered);
    ASSERT_TRUE(ctxs[0].done);
    ASSERT_TRUE(ctxs[1].done);
    ASSERT_TRUE(ctxs[0].reg != ctxs[1].reg && ctxs[0].reg != &sch::registry()
                && ctxs[1].reg != &sch::registry());
}

} // namespace coschedula::tests
