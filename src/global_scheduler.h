// Copyright 2023 Borys Boiko

#pragma once

#include "scheduler.h"
#include <mutex>

namespace coschedula {

/**
 * @brief The global_scheduler class - all tasks in application associated with specific task_registry type are executad by single task_registry
 * @threadsafe
 * @note Thread safe but blocks all thread except one at a time when used in multiple thread. Use `coschedula::per_thread_scheduler` to have actual asynchronous multithreaded behaviour
 */
template<std::derived_from<task_registry> R>
    requires std::is_default_constructible_v<R>
class global_scheduler
{
public:
    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept
    {
        std::lock_guard g(s_mutes);
        s_task_registry.add_initialy_suspended(h, loc);
    }

    static void suspend(std::coroutine_handle<> h) noexcept
    {
        std::lock_guard g(s_mutes);
        s_task_registry.suspend(h);
    }

    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        std::lock_guard g(s_mutes);
        s_task_registry.await_suspend(current, dep);
    }

    static bool proceed()
    {
        std::lock_guard g(s_mutes);
        return s_task_registry.proceed();
    }

    static R &task_registry() { return s_task_registry; }

private:
    inline static std::mutex s_mutes;
    inline static R s_task_registry;
};

} // namespace coschedula
