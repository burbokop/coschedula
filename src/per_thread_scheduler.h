// Copyright 2023 Borys Boiko

#pragma once

#include "scheduler.h"
#include <iostream>
#include <map>
#include <mutex>
#include <stack>
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

    static void push_runner()
    {
        std::lock_guard g(s_mutex);
        s_registries[std::this_thread::get_id()].emplace();
        std::cout << "push_runner: " << s_registries[std::this_thread::get_id()].size()
                  << std::endl;
    }

    static void pop_runner()
    {
        std::lock_guard g(s_mutex);
        std::cout << "pop_runner: " << s_registries[std::this_thread::get_id()].size() << std::endl;
        s_registries[std::this_thread::get_id()].pop();
    }

    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept
    {
        std::cout << "add_initialy_suspended: " << s_registries[std::this_thread::get_id()].size()
                  << std::endl;
        registry(std::this_thread::get_id()).add_initialy_suspended(h, loc);
    }

    static void suspend(std::coroutine_handle<> h) noexcept
    {
        std::cout << "suspend: " << s_registries[std::this_thread::get_id()].size() << std::endl;
        registry(std::this_thread::get_id()).suspend(h);
    }

    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        std::cout << "await_suspend: " << s_registries[std::this_thread::get_id()].size()
                  << std::endl;
        registry(std::this_thread::get_id()).await_suspend(current, dep);
    }

    static std::size_t stack_pos() { return s_registries[std::this_thread::get_id()].size(); }

    static bool proceed()
    {
        std::cout << "proceed: " << s_registries[std::this_thread::get_id()].size() << std::endl;
        return registry(std::this_thread::get_id()).proceed();
    }

    static R &registry() { return registry(std::this_thread::get_id()); }

private:
    static R &registry(std::thread::id id)
    {
        std::lock_guard g(s_mutex);
        auto &stack = s_registries[id];
        assert(!stack.empty());
        return stack.top();
    }

private:
    inline static std::recursive_mutex s_mutex;
    inline static std::map<std::thread::id, std::stack<R>> s_registries;
};

} // namespace coschedula
