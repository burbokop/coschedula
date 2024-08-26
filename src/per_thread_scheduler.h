// Copyright 2023 Borys Boiko

#pragma once

#include "scheduler.h"
#include <map>
#include <thread>

namespace coschedula {

/**
 * @brief The per_thread_scheduler class - one task_registry per thread allows executing multiple coroutines in different threads
 * @threadsafe
 */
template<std::derived_from<task_registry> R>
    requires std::is_default_constructible_v<R>
class per_thread_scheduler
{
public:
    per_thread_scheduler() = delete;

    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept
    {
        registry(std::this_thread::get_id()).add_initialy_suspended(h, loc);
    }

    static void suspend(std::coroutine_handle<> h) noexcept
    {
        registry(std::this_thread::get_id()).suspend(h);
    }

    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        registry(std::this_thread::get_id()).await_suspend(current, dep);
    }

    static bool proceed() { return registry(std::this_thread::get_id()).proceed(); }

    static R &registry() { return registry(std::this_thread::get_id()); }

private:
    static R &registry(std::thread::id id)
    {
        std::lock_guard g(s_mutex);
        return s_registries[id];
    }

private:
    inline static std::mutex s_mutex;
    inline static std::map<std::thread::id, R> s_registries;
};

} // namespace coschedula
