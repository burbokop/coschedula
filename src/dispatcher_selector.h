// Copyright 2023 Borys Boiko

#pragma once

#include "nonull.h"
#include "scheduler.h"
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

class coroutine_outside_of_context : std::exception {
public:
    // exception interface
public:
    const char* what() const noexcept override
    {
        return "Coroutine is called outside of runner's context";
    }
};

/**
 * @brief The scheduler_selector class - selects current active scheduler
 * @threadsafe
 */
template<std::derived_from<dispatcher> D>
class dispatcher_selector {
    template<typename, std::derived_from<dispatcher>>
    friend class runners::concurrent_runner;
    template<typename, std::derived_from<dispatcher>>
    friend class coschedula::task;

    friend async_impl;
    friend runners::impl;
    friend coschedula::suspend;

private:
    struct stack_frame
    {
        shared<D> dispatcher;
        shared<scheduler> sched;

        stack_frame(shared<D>&& dispatcher, shared<scheduler>&& sched)
            : dispatcher(std::move(dispatcher))
            , sched(std::move(sched))
        {
        }
    };

public:
    /**
     * @brief current_dispatcher
     * @return nullopt if outside of runner context
     */
    [[nodiscard]] static std::optional<shared<const D>> current_dispatcher() noexcept
    {
        if (s_stack.empty()) {
            return std::nullopt;
        } else {
            return stack_frame().dispatcher;
        }
    }

    /**
     * @brief current_scheduler
     * @return nullopt if outside of runner context
     */
    [[nodiscard]] static std::optional<shared<scheduler>> current_scheduler() noexcept
    {
        if (s_stack.empty()) {
            return std::nullopt;
        } else {
            return stack_frame().sched;
        }
    }

    [[nodiscard]] static std::size_t stack_depth() noexcept { return s_stack.size(); }

private:
    dispatcher_selector() = delete;

    /// should be called from runner
    template<typename... Args>
    static decltype(auto) bind(shared<D>&& dispatcher, shared<scheduler>&&, Args&&... args) noexcept
    {
        assert(!s_next);
        s_next = dispatcher;
        return std::invoke(std::forward<Args>(args)...);
    }

    /// should be called from dispatcher
    static void enter_coro_context(shared<D>&& dispatcher, shared<scheduler>&& scheduler) noexcept
    {
        s_stack.emplace(std::move(dispatcher), std::move(scheduler));
    }

    /// should be called from dispatcher
    static void leave_coro_context(shared<D>&& dispatcher, shared<scheduler>&& scheduler) noexcept
    {
        assert(stack_frame().dispatcher == dispatcher);
        assert(stack_frame().sched == scheduler);
        static_cast<void>(dispatcher);
        static_cast<void>(scheduler);
        s_stack.pop();
    }

    /// should be called from task
    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc)
    {
        if (s_next) {
            /// if root task
            assert((*s_next)->tasks().empty());
            (*std::exchange(s_next, std::nullopt))->add_initialy_suspended(h, loc);
        } else if (!s_stack.empty()) {
            /// if subtask
            assert(!stack_frame().dispatcher->tasks().empty());
            stack_frame().dispatcher->add_initialy_suspended(h, loc);
        } else {
            throw coroutine_outside_of_context();
        }
    }

    /// should be called from suspend
    static void suspend(std::coroutine_handle<> h) noexcept
    {
        stack_frame().dispatcher->suspend(h);
    }

    /// should be called from task
    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        stack_frame().dispatcher->await_suspend(current, dep);
    }

    static struct stack_frame& stack_frame() noexcept
    {
        assert(!s_stack.empty());
        return s_stack.top();
    }

private:
    inline static thread_local std::optional<shared<D>> s_next;
    inline static thread_local std::stack<struct stack_frame> s_stack;
};

} // namespace coschedula
