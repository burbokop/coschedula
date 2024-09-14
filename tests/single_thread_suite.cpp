// Copyright 2023 Borys Boiko

#include "../src/runners.h"
#include "../src/task.h"
#include <gtest/gtest.h>
#include <string>

namespace coschedula::tests {

TEST(single_thread_suite, void_task)
{
    bool entered = false;
    auto runner = runners::concurrent([&entered]() -> task<void> {
        entered = true;
        co_return;
    });

    ASSERT_FALSE(entered);
    ASSERT_TRUE(runner.proceed()); // resumes task
    ASSERT_TRUE(entered);
    ASSERT_FALSE(runner.proceed()); // deletes task
    ASSERT_TRUE(entered);
}

TEST(single_thread_suite, int_value_task)
{
    bool entered = false;
    auto runner = runners::concurrent([&entered]() -> task<int> {
        entered = true;
        co_return 10;
    });

    ASSERT_FALSE(entered);
    ASSERT_TRUE(runner.proceed()); // resumes task
    ASSERT_TRUE(entered);
    ASSERT_FALSE(runner.proceed()); // deletes task
    ASSERT_TRUE(entered);
    ASSERT_EQ(std::move(runner).wait(), 10);
}

TEST(single_thread_suite, string_value_task)
{
    bool entered = false;
    auto runner = runners::concurrent([&entered]() -> task<std::string> {
        entered = true;
        co_return "10";
    });
    ASSERT_FALSE(runner.done());
    ASSERT_FALSE(entered);
    ASSERT_TRUE(runner.proceed()); // resumes task
    ASSERT_FALSE(runner.done());
    ASSERT_TRUE(entered);
    ASSERT_FALSE(runner.proceed()); // deletes task
    ASSERT_TRUE(runner.done());
    ASSERT_TRUE(entered);
    ASSERT_EQ(std::move(runner).wait(), "10");
}

TEST(single_thread_suite, suspend)
{
    std::vector<std::size_t> seq;
    auto runner = runners::concurrent([&seq]() -> task<std::string> {
        seq.push_back(0);
        co_await suspend{};
        seq.push_back(1);
        co_await suspend{};
        seq.push_back(2);
        co_return "10";
    });

    ASSERT_FALSE(runner.done());
    ASSERT_EQ(seq, std::vector<std::size_t>({}));
    ASSERT_TRUE(runner.proceed()); // resumes initially suspened
    ASSERT_FALSE(runner.done());
    ASSERT_EQ(seq, std::vector<std::size_t>({0}));
    ASSERT_TRUE(runner.proceed()); // suspends & resumes
    ASSERT_FALSE(runner.done());
    ASSERT_EQ(seq, std::vector<std::size_t>({0, 1}));
    ASSERT_TRUE(runner.proceed()); // suspends & resumes
    ASSERT_FALSE(runner.done());
    ASSERT_EQ(seq, std::vector<std::size_t>({0, 1, 2}));
    ASSERT_FALSE(runner.proceed()); // deletes task
    ASSERT_TRUE(runner.done());
    ASSERT_EQ(std::move(runner).wait(), "10");
}

TEST(single_thread_suite, task_inside_task)
{
    std::vector<std::size_t> seq;
    const auto &&dep_task_coro = [&seq]() -> task<std::string> {
        seq.push_back(0);
        co_await suspend{};
        seq.push_back(1);
        co_await suspend{};
        seq.push_back(2);
        co_return "10";
    };
    bool dep_done_before_await = false;
    bool dep_done_after_await = false;
    auto runner = runners::concurrent(
        [&seq, &dep_task_coro, &dep_done_before_await, &dep_done_after_await]() -> task<std::string> {
            seq.push_back(3);
            const auto d = dep_task_coro();
            seq.push_back(4);
            dep_done_before_await = d.done();
            const auto dep_res = co_await d;
            seq.push_back(5);
            dep_done_after_await = d.done();
            co_return dep_res + "20";
        });

    ASSERT_EQ(seq, std::vector<std::size_t>{});
    ASSERT_FALSE(runner.done());
    const auto result = std::move(runner).wait();
    ASSERT_EQ(seq, std::vector<std::size_t>({3, 4, 0, 1, 2, 5}));
    ASSERT_EQ(result, "1020");
    ASSERT_FALSE(dep_done_before_await);
    ASSERT_TRUE(dep_done_after_await);
}

TEST(single_thread_suite, two_dep)
{
    std::vector<std::size_t> seq;
    const auto &&dep_task_coro0 = [&seq]() -> task<std::string> {
        seq.push_back(0);
        co_await suspend{};
        seq.push_back(1);
        co_await suspend{};
        seq.push_back(2);
        co_return "10";
    };
    const auto &&dep_task_coro1 = [&seq]() -> task<std::string> {
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
    auto runner = runners::concurrent([&seq,
                                       &dep_task_coro0,
                                       &dep_task_coro1,
                                       &dep0_done_before_await,
                                       &dep0_done_after_await,
                                       &dep1_done_before_await,
                                       &dep1_done_after_await]() -> task<std::string> {
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
    });

    ASSERT_EQ(seq, std::vector<std::size_t>{});
    ASSERT_FALSE(runner.done());
    const auto result = std::move(runner).wait();
    ASSERT_EQ(seq, std::vector<std::size_t>({6, 7, 8, 0, 3, 1, 4, 2, 5, 9, 10}));
    ASSERT_EQ(result, "102030");
    ASSERT_FALSE(dep0_done_before_await);
    ASSERT_TRUE(dep0_done_after_await);
    ASSERT_FALSE(dep1_done_before_await);
    ASSERT_TRUE(dep1_done_after_await);
}

} // namespace coschedula::tests
