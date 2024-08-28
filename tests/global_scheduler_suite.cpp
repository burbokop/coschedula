// Copyright 2023 Borys Boiko

#include "../src/global_scheduler.h"
#include "../src/task.h"
#include "../src/utils.h"
#include <gtest/gtest.h>
#include <string>

namespace coschedula::tests {

class global_scheduler_suite : public ::testing::Test
{
protected:
    template<typename T, typename S>
    static std::optional<T> result(const task<T, S> &t)
    {
        return t.result();
    }

    template<typename T, typename S>
    static bool done(const task<T, S> &t)
    {
        return t.done();
    }
};

TEST_F(global_scheduler_suite, void_task)
{
    struct s : public default_task_registry
    {};
    runner_guard<global_scheduler<s>> g;

    bool entered = false;
    const auto &&void_task_coro = [&entered]() -> task<void, global_scheduler<s>> {
        entered = true;
        co_return;
    };
    const auto t = void_task_coro();
    ASSERT_FALSE(entered);
    ASSERT_FALSE(done(t));
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_TRUE(entered);
    ASSERT_TRUE(done(t));
}

TEST_F(global_scheduler_suite, int_value_task)
{
    struct s : public default_task_registry
    {};
    runner_guard<global_scheduler<s>> g;

    bool entered = false;
    const auto &&value_task_coro = [&entered]() -> task<int, global_scheduler<s>> {
        entered = true;
        co_return 10;
    };
    const auto t = value_task_coro();
    ASSERT_FALSE(entered);
    ASSERT_FALSE(done(t));
    ASSERT_FALSE(result(t));
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_TRUE(entered);
    ASSERT_TRUE(done(t));
    ASSERT_EQ(result(t), 10);
}

TEST_F(global_scheduler_suite, string_value_task)
{
    struct s : public default_task_registry
    {};
    runner_guard<global_scheduler<s>> g;

    bool entered = false;
    const auto &&value_task_coro = [&entered]() -> task<std::string, global_scheduler<s>> {
        entered = true;
        co_return "10";
    };
    const auto t = value_task_coro();
    ASSERT_FALSE(entered);
    ASSERT_FALSE(done(t));
    ASSERT_FALSE(result(t));
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_TRUE(entered);
    ASSERT_TRUE(done(t));
    ASSERT_EQ(result(t), "10");
}

TEST_F(global_scheduler_suite, two_tasks)
{
    struct s : public default_task_registry
    {};
    runner_guard<global_scheduler<s>> g;

    std::vector<std::size_t> seq;
    const auto &&task_coro0 = [&seq]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(0);
        co_return "10";
    };
    const auto &&task_coro1 = [&seq]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(1);
        co_return "20";
    };

    const auto t0 = task_coro0();
    const auto t1 = task_coro1();
    ASSERT_EQ(seq, std::vector<std::size_t>{});
    ASSERT_FALSE(done(t0));
    ASSERT_FALSE(done(t1));
    ASSERT_FALSE(result(t0));
    ASSERT_FALSE(result(t1));
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_EQ(seq[0], 0);
    ASSERT_EQ(seq[1], 1);
    ASSERT_TRUE(done(t0));
    ASSERT_TRUE(done(t1));
    ASSERT_TRUE(result(t0));
    ASSERT_TRUE(result(t1));
    ASSERT_EQ(result(t0), "10");
    ASSERT_EQ(result(t1), "20");
}

TEST_F(global_scheduler_suite, suspend)
{
    struct s : public default_task_registry
    {};
    runner_guard<global_scheduler<s>> g;

    std::vector<std::size_t> seq;
    const auto &&task_coro0 = [&seq]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(0);
        co_await suspend{};
        seq.push_back(1);
        co_return "10";
    };
    const auto &&task_coro1 = [&seq]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(2);
        co_await suspend{};
        seq.push_back(3);
        co_return "20";
    };

    const auto t0 = task_coro0();
    const auto t1 = task_coro1();
    ASSERT_EQ(seq, std::vector<std::size_t>{});
    ASSERT_FALSE(done(t0));
    ASSERT_FALSE(done(t1));
    ASSERT_FALSE(result(t0));
    ASSERT_FALSE(result(t1));
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_EQ(seq[0], 0);
    ASSERT_EQ(seq[1], 2);
    ASSERT_EQ(seq[2], 1);
    ASSERT_EQ(seq[3], 3);
    ASSERT_TRUE(done(t0));
    ASSERT_TRUE(done(t1));
    ASSERT_TRUE(result(t0));
    ASSERT_TRUE(result(t1));
    ASSERT_EQ(result(t0), "10");
    ASSERT_EQ(result(t1), "20");
}

TEST_F(global_scheduler_suite, dep)
{
    struct s : public default_task_registry
    {};
    runner_guard<global_scheduler<s>> g;

    std::vector<std::size_t> seq;
    const auto &&dep_task_coro = [&seq]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(0);
        co_await suspend{};
        seq.push_back(1);
        co_await suspend{};
        seq.push_back(2);
        co_return "10";
    };
    bool dep_done_before_await = false;
    bool dep_done_after_await = false;
    const auto &&task_coro = [&seq,
                              &dep_task_coro,
                              &dep_done_before_await,
                              &dep_done_after_await]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(3);
        const auto d = dep_task_coro();
        seq.push_back(4);
        dep_done_before_await = done(d);
        const auto dep_res = co_await d;
        seq.push_back(5);
        dep_done_after_await = done(d);
        co_return dep_res + "20";
    };

    const auto t = task_coro();
    ASSERT_EQ(seq, std::vector<std::size_t>{});
    ASSERT_FALSE(done(t));
    ASSERT_FALSE(result(t));
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_EQ(seq[0], 3);
    ASSERT_EQ(seq[1], 4);
    ASSERT_EQ(seq[2], 0);
    ASSERT_EQ(seq[3], 1);
    ASSERT_EQ(seq[4], 2);
    ASSERT_EQ(seq[5], 5);
    ASSERT_TRUE(done(t));
    ASSERT_EQ(result(t), "1020");
    ASSERT_FALSE(dep_done_before_await);
    ASSERT_TRUE(dep_done_after_await);
}

TEST_F(global_scheduler_suite, two_dep)
{
    struct s : public default_task_registry
    {};
    runner_guard<global_scheduler<s>> g;

    std::vector<std::size_t> seq;
    const auto &&dep_task_coro0 = [&seq]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(0);
        co_await suspend{};
        seq.push_back(1);
        co_await suspend{};
        seq.push_back(2);
        co_return "10";
    };
    const auto &&dep_task_coro1 = [&seq]() -> task<std::string, global_scheduler<s>> {
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
                              &dep1_done_after_await]() -> task<std::string, global_scheduler<s>> {
        seq.push_back(6);
        const auto d0 = dep_task_coro0();
        seq.push_back(7);
        const auto d1 = dep_task_coro1();
        seq.push_back(8);
        dep0_done_before_await = done(d0);
        dep1_done_before_await = done(d1);
        const auto dep0_res = co_await d0;
        seq.push_back(9);
        const auto dep1_res = co_await d1;
        seq.push_back(10);
        dep0_done_after_await = done(d0);
        dep1_done_after_await = done(d1);
        co_return dep0_res + dep1_res + "30";
    };

    const auto t = task_coro();
    ASSERT_EQ(seq, std::vector<std::size_t>{});
    ASSERT_FALSE(done(t));
    ASSERT_FALSE(result(t));
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
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
    ASSERT_TRUE(done(t));
    ASSERT_EQ(result(t), "102030");
    ASSERT_FALSE(dep0_done_before_await);
    ASSERT_TRUE(dep0_done_after_await);
    ASSERT_FALSE(dep1_done_before_await);
    ASSERT_TRUE(dep1_done_after_await);
}

} // namespace coschedula::tests
