// Copyright 2023 Borys Boiko

#include "../src/runners.h"
#include "../src/task.h"
#include <array>
#include <gtest/gtest.h>

namespace coschedula::tests {

TEST(multi_thread_suite, two_threads)
{
    using std::chrono::operator""us;

    struct ctx
    {
        void *ptr = nullptr;
        void *stack_ptr = nullptr;
        std::atomic_bool entered = false;
        std::atomic_bool done = false;
    };

    std::array<ctx, 2> ctxs;

    auto t0 = runners::thread([&ctxs]() -> task<void> {
        ctxs[0].entered = true;
        for (std::size_t i = 0; i < 100; ++i) {
            std::this_thread::sleep_for(100us);
            co_await suspend{};
        }
        ctxs[0].done = true;
        ctxs[0].ptr = default_scheduler::ptr();
        ctxs[0].stack_ptr = default_scheduler::stack_ptr();
        co_return;
    });

    auto t1 = runners::thread([&ctxs]() -> task<void> {
        ctxs[1].entered = true;
        for (std::size_t i = 0; i < 100; ++i) {
            std::this_thread::sleep_for(100us);
            co_await suspend{};
        }
        ctxs[1].done = true;
        ctxs[1].ptr = default_scheduler::ptr();
        ctxs[1].stack_ptr = default_scheduler::stack_ptr();
        co_return;
    });

    t0.join(), t1.join();

    ASSERT_TRUE(ctxs[0].entered);
    ASSERT_TRUE(ctxs[1].entered);
    ASSERT_TRUE(ctxs[0].done);
    ASSERT_TRUE(ctxs[1].done);
    ASSERT_NE(ctxs[0].ptr, ctxs[1].ptr);
    ASSERT_NE(ctxs[0].stack_ptr, ctxs[1].stack_ptr);
}

} // namespace coschedula::tests
