// Copyright 2023 Borys Boiko

#pragma once

#include "scheduler.h"
#include <cassert>
#include <mutex>
#include <optional>

namespace coschedula {

/**
 * @brief The global_scheduler class - all tasks in application associated with specific task_registry type are executad by single task_registry
 * @threadsafe
 * @note Thread safe but blocks all thread except one at a time when used in multiple thread. Use `coschedula::per_thread_scheduler` to have actual asynchronous multithreaded behaviour
 */
template<std::derived_from<task_registry> R>
class global_scheduler
{
public:
    global_scheduler() = delete;

    static void push_runner(shared<R> &&runner)
    {
        assert(!s_task_registry);
        s_task_registry = std::move(runner);
    }

    static void pop_runner()
    {
        assert(s_task_registry);
        s_task_registry.reset();
    }

    static void about_to_resume(shared<R> &&runner) { s_task_registry = std::move(runner); }

    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept
    {
        std::lock_guard g(s_mutes);
        assert(s_task_registry);
        (*s_task_registry)->add_initialy_suspended(h, loc);
    }

    static void suspend(std::coroutine_handle<> h) noexcept
    {
        std::lock_guard g(s_mutes);
        assert(s_task_registry);
        (*s_task_registry)->suspend(h);
    }

    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        std::lock_guard g(s_mutes);
        assert(s_task_registry);
        (*s_task_registry)->await_suspend(current, dep);
    }

    // static bool proceed()
    // {
    //     std::lock_guard g(s_mutes);
    //     assert(s_task_registry);
    //     return s_task_registry->proceed();
    // }

    static auto use_registry(auto &&f)
    {
        std::lock_guard g(s_mutes);
        assert(s_task_registry);
        return f(*s_task_registry);
    }

private:
    inline static std::recursive_mutex s_mutes;
    inline static std::optional<shared<R>> s_task_registry;
};

} // namespace coschedula
