// Copyright 2023 Borys Boiko

#pragma once

#include "default_scheduler.h"
#include <utility>

namespace coschedula {

namespace tests {
class single_thread_suite;
class per_thread_scheduler_suite;
class fs_suite;
} // namespace tests

namespace runners {
struct impl;
template<typename T, std::derived_from<task_registry> R>
class concurrent_runner;
} // namespace runners

struct async_impl;

/**
 * @brief The task class - holds coroutine handle and connects it to related scheduler `S`
 * Simple example:
 * ```
 * struct my_scheduler : public coschedula::scheduler{};
 * 
 * task<int, my_scheduler> do_simple_job() {
 *     co_return 10;
 * }
 * ```
 * Complex example:
 * ```
 * task<int, my_scheduler> do_complex_job() {
 *     // long loop
 *     const auto my_another_task = another_coroutine();
 *     for(int i = 0; i < 10000000; ++i) {
 *         co_await coschedula::suspend{};
 *     }
 *     // await for another task completed
 *     const auto res = co_await my_another_task;
 *     co_return res + 10;
 * }
 * ```
 */
template<typename T = void, std::derived_from<task_registry> R = default_task_registry>
class task
{
    friend tests::single_thread_suite;
    friend tests::per_thread_scheduler_suite;
    friend tests::fs_suite;
    friend async_impl;
    friend runners::impl;
    template<typename, std::derived_from<task_registry>>
    friend class runners::concurrent_runner;

    struct init_suspend
    {
        constexpr bool await_ready() const noexcept { return false; }
        template<typename P>
        void await_suspend(std::coroutine_handle<P> h,
                           source_location loc = source_location::current()) const noexcept
        {
            task::add_initialy_suspended(h, loc);
        }

        void await_resume() const noexcept {}
    };

    struct base_promise_type
    {
        using related_scheduler = R;

        init_suspend initial_suspend() noexcept { return {}; };
        std::suspend_always final_suspend() noexcept { return {}; };
        void unhandled_exception() {}
    };

    struct void_promise_type : base_promise_type
    {
        task get_return_object() noexcept { return {*this}; }

        void return_void() noexcept
            requires std::is_same<T, void>::value
        {
            result_received = true;
        }

        bool result_received = false;
    };

    struct value_promise_type : base_promise_type
    {
        task get_return_object() noexcept { return {*this}; }

        void return_value(T v) noexcept { result = std::move(v); }

        std::optional<T> result = std::nullopt;
    };

public:
    using promise_type
        = std::conditional_t<std::is_same_v<T, void>, void_promise_type, value_promise_type>;

    task(promise_type &p)
        : m_handle(std::coroutine_handle<promise_type>::from_promise(p))
    {}

    task(task &&c)
        : m_handle(std::exchange(c.m_handle, nullptr))
    {}

    task(const task &p) = delete;

    ~task()
    {
        if (m_handle && m_handle.done()) {
            m_handle.destroy();
        }
    }

    /// Take control from coroutine where operator called and prevent it from resume until this task is done
    auto operator co_await() const
    {
        struct awaiter
        {
            promise_type &p;

            constexpr bool await_ready() const noexcept { return false; }
            void await_suspend(std::coroutine_handle<> h) const noexcept
            {
                task::await_suspend(h, std::coroutine_handle<promise_type>::from_promise(p));
            }

            T await_resume() const noexcept
            {
                if constexpr (!std::is_same_v<T, void>) {
                    assert(p.result);
                    return *p.result;
                }
            }
        };
        return awaiter{m_handle.promise()};
    }

    /**
     * @return true if task is completed
     */
    bool done() const { return m_handle.done(); }

private:
    static void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept
    {
        impl::scheduler_selector<R>::add_initialy_suspended(h, loc);
    }

    static void await_suspend(std::coroutine_handle<> current, std::coroutine_handle<> dep) noexcept
    {
        impl::scheduler_selector<R>::await_suspend(current, dep);
    }

    /**
     * @return result of task returned by **co_return** or std::nullopt if task not yet done
     */
    std::optional<T> result() const
        requires(!std::is_same_v<T, void>)
    {
        return m_handle.done() ? m_handle.promise().result : std::nullopt;
    }

    std::optional<T> release_result() &&
        requires(!std::is_same_v<T, void>)
    {
        return m_handle.done() ? std::exchange(m_handle, nullptr).promise().result : std::nullopt;
    }

private:
    std::coroutine_handle<promise_type> m_handle;
};

/**
 * @brief The suspend class - suspends current coroutine and ask scheduler to give controls to another
 * Example:
 * ```
 * co_await coschedula::suspend{};
 * ```
 */
class suspend
{
public:
    auto operator co_await() { return awaiter{}; }

private:
    struct awaiter
    {
        constexpr bool await_ready() const noexcept { return false; }

        template<typename P>
        void await_suspend(std::coroutine_handle<P> h) const noexcept
            requires(std::derived_from<typename P::related_scheduler, task_registry>)
        {
            suspend::suspend_impl<typename P::related_scheduler>(h);
        }

        void await_resume() const noexcept {}
    };

    template<std::derived_from<task_registry> S>
    static void suspend_impl(std::coroutine_handle<> h) noexcept
    {
        impl::scheduler_selector<S>::suspend(h);
    }
};

namespace concepts_impl {

template<typename T, std::derived_from<task_registry> S>
constexpr bool is_task_with_scheduler = false;

template<typename T, std::derived_from<task_registry> S>
constexpr bool is_task_with_scheduler<task<T, S>, S> = true;

template<typename T, std::derived_from<task_registry> S>
struct result_type
{};

template<typename T, std::derived_from<task_registry> S>
struct result_type<task<T, S>, S>
{
    using type = T;
};

} // namespace concepts_impl

template<typename T, typename S>
concept task_with_scheduler = concepts_impl::is_task_with_scheduler<T, S>;

template<typename T, std::derived_from<task_registry> S>
using result_type = typename concepts_impl::result_type<T, S>::type;

} // namespace coschedula
