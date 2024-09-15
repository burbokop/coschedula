// Copyright 2023 Borys Boiko

#pragma once

#include "nonull.h"
#include "scheduler.h"
#include <iostream>
#include <optional>
#include <stack>

namespace coschedula {

namespace runners {
struct impl;
template<typename, std::derived_from<dispatcher>>
class concurrent_runner;
} // namespace runners

struct async_impl;
class suspend;

template<typename, std::derived_from<dispatcher>>
class task;

/**
 * @brief The scheduler_selector class - selects current active scheduler
 * @threadsafe
 */
template<std::derived_from<dispatcher> D>
class dispatcher_selector {
    friend async_impl;
    friend runners::impl;
    template<typename, std::derived_from<dispatcher>>
    friend class runners::concurrent_runner;

    template<typename, std::derived_from<dispatcher>>
    friend class coschedula::task;
    friend coschedula::suspend;

private:
    struct stack_frame
    {
        shared<D> dispatcher;
        shared<scheduler> sch;
    };

public:
    static shared<const D> current_dispatcher()
    {
        return stack_frame().dispatcher;
    }

    static shared<scheduler> current_scheduler()
    {
        return stack_frame().sch;
    }

    static std::size_t stack_depth() { return s_stack.size(); }

private:
    dispatcher_selector() = delete;

    [[deprecated("Debug info")]] static void* ptr()
    {
        return (s_stack.empty() ? reinterpret_cast<void*>(0)
                                : reinterpret_cast<void*>(&*stack_frame().dispatcher));
    }

    template<typename... Args>
    static decltype(auto) bind(shared<D>&& dispatcher, shared<scheduler>&&, Args&&... args)
    {
        push_runner(std::move(dispatcher));
        return std::invoke(std::forward<Args>(args)...);
    }

    static void push_runner(shared<D>&& dispatcher)
    {
        assert(!s_next);
        s_next = dispatcher;

        const auto size_before = s_stack.size();
        const auto ptr_before = ptr();
        // s_stack.emplace(std::move(registry), false);
        const auto size_after = s_stack.size();
        const auto ptr_after = ptr();

        std::cout << "start_runner           : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void enter_coro_context(shared<D>&& dispatcher, shared<scheduler>&& scheduler)
    {
        const auto size_before = s_stack.size();
        const auto ptr_before = ptr();

        s_stack.emplace(std::move(dispatcher), std::move(scheduler));

        const auto size_after = s_stack.size();
        const auto ptr_after = ptr();

        std::cout << "enter_coro_context     : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void leave_coro_context(shared<D>&& dispatcher, shared<scheduler>&& scheduler)
    {
        const auto size_before = s_stack.size();
        const auto ptr_before = ptr();

        assert(stack_frame().dispatcher == dispatcher);
        assert(stack_frame().sch == scheduler);
        s_stack.pop();

        const auto size_after = s_stack.size();
        const auto ptr_after = ptr();

        std::cout << "leave_coro_context     : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void pop_runner()
    {
        const auto size_before = s_stack.size();
        const auto ptr_before = ptr();
        // s_stack.pop();
        const auto size_after = s_stack.size();
        const auto ptr_after = ptr();

        std::cout << "end_runner            : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept
    {
        if (s_next) {
            // if root task of this sheduler
            assert((*s_next)->tasks().empty());
            (*s_next)->add_initialy_suspended(h, loc);
            s_next.reset();
        } else {
            // if inner task of this sheduler
            assert(!stack_frame().dispatcher->tasks().empty());
            stack_frame().dispatcher->add_initialy_suspended(h, loc);
        }

        const auto size_before = s_stack.size();
        const auto ptr_before = ptr();
        // stack_frame().root_task_initiated = true;
        const auto size_after = s_stack.size();
        const auto ptr_after = ptr();

        std::cout << "add_initialy_suspended: " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void suspend(std::coroutine_handle<> h) noexcept
    {
        stack_frame().dispatcher->suspend(h);

        const auto size_before = s_stack.size();
        const auto ptr_before = ptr();
        // s_stack.pop();
        const auto size_after = s_stack.size();
        const auto ptr_after = ptr();

        std::cout << "suspend                : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        stack_frame().dispatcher->await_suspend(current, dep);

        const auto size_before = s_stack.size();
        const auto ptr_before = ptr();
        // s_stack.pop();
        const auto size_after = s_stack.size();
        const auto ptr_after = ptr();

        std::cout << "await_suspend           : " << std::dec << size_before << " (" << std::hex
                  << ptr_before << ") -> " << std::dec << size_after << " (" << std::hex
                  << ptr_after << ")" << std::endl;
    }

    // static bool proceed()
    // {
    //     std::cout << "proceed: " << s_registries[std::this_thread::get_id()].size() << std::endl;
    //     return registry(std::this_thread::get_id())->proceed();
    // }

    static struct stack_frame& stack_frame()
    {
        assert(!s_stack.empty());
        return s_stack.top();
    }

private:
    inline static thread_local std::optional<shared<D>> s_next;
    inline static thread_local std::stack<struct stack_frame> s_stack;
};

} // namespace coschedula
