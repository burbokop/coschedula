// Copyright 2023 Borys Boiko

#pragma once

#include "nonull.h"
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
class per_thread_scheduler
{
public:
    per_thread_scheduler() = delete;

    static void *ptr()
    {
        return (s_registries[std::this_thread::get_id()].empty()
                    ? reinterpret_cast<void *>(0)
                    : reinterpret_cast<void *>(&*registry()));
    }

    static void push_runner(shared<R> &&runner)
    {
        std::lock_guard g(s_mutex);

        const auto size_before = s_registries[std::this_thread::get_id()].size();
        const auto ptr_before = ptr();
        s_registries[std::this_thread::get_id()].push(std::move(runner));
        const auto size_after = s_registries[std::this_thread::get_id()].size();
        const auto ptr_after = ptr();

        std::cout << "push_runner           : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void about_to_resume(shared<R> &&runner)
    {
        std::lock_guard g(s_mutex);
        const auto size_before = s_registries[std::this_thread::get_id()].size();
        const auto ptr_before = ptr();
        if (s_registries[std::this_thread::get_id()].empty()
            || s_registries[std::this_thread::get_id()].top() != runner) {
            s_registries[std::this_thread::get_id()].push(std::move(runner));
        }
        const auto size_after = s_registries[std::this_thread::get_id()].size();
        const auto ptr_after = ptr();

        std::cout << "resume                : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void pop_runner()
    {
        std::lock_guard g(s_mutex);
        const auto size_before = s_registries[std::this_thread::get_id()].size();
        const auto ptr_before = ptr();
        s_registries[std::this_thread::get_id()].pop();
        const auto size_after = s_registries[std::this_thread::get_id()].size();
        const auto ptr_after = ptr();

        std::cout << "pop_runner            : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept
    {
        std::lock_guard g(s_mutex);
        registry(std::this_thread::get_id())->add_initialy_suspended(h, loc);

        const auto size_before = s_registries[std::this_thread::get_id()].size();
        const auto ptr_before = ptr();
        // s_registries[std::this_thread::get_id()].pop();
        const auto size_after = s_registries[std::this_thread::get_id()].size();
        const auto ptr_after = ptr();

        std::cout << "add_initialy_suspended: " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void suspend(std::coroutine_handle<> h) noexcept
    {
        std::lock_guard g(s_mutex);
        registry(std::this_thread::get_id())->suspend(h);

        const auto size_before = s_registries[std::this_thread::get_id()].size();
        const auto ptr_before = ptr();
        s_registries[std::this_thread::get_id()].pop();
        const auto size_after = s_registries[std::this_thread::get_id()].size();
        const auto ptr_after = ptr();

        std::cout << "suspend                : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        std::lock_guard g(s_mutex);
        registry(std::this_thread::get_id())->await_suspend(current, dep);

        const auto size_before = s_registries[std::this_thread::get_id()].size();
        const auto ptr_before = ptr();
        s_registries[std::this_thread::get_id()].pop();
        const auto size_after = s_registries[std::this_thread::get_id()].size();
        const auto ptr_after = ptr();

        std::cout << "await_suspend           : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static std::size_t stack_pos() { return s_registries[std::this_thread::get_id()].size(); }

    // static bool proceed()
    // {
    //     std::cout << "proceed: " << s_registries[std::this_thread::get_id()].size() << std::endl;
    //     return registry(std::this_thread::get_id())->proceed();
    // }

    static const shared<R> &registry() { return registry(std::this_thread::get_id()); }

private:
    static const shared<R> &registry(std::thread::id id)
    {
        std::lock_guard g(s_mutex);
        auto &stack = s_registries[id];
        assert(!stack.empty());
        return stack.top();
    }

private:
    inline static std::recursive_mutex s_mutex;
    inline static std::map<std::thread::id, std::stack<shared<R>>> s_registries;
};

} // namespace coschedula
