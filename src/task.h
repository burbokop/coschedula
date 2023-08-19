// Copyright 2023 Borys Boiko

#pragma once

#include "scheduler.h"
#include <utility>

namespace coschedula {

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
template<typename T, std::derived_from<scheduler> S = scheduler>
struct task
{
    struct init_suspend
    {
        constexpr bool await_ready() const noexcept { return false; }
        template<typename P>
        void await_suspend(std::coroutine_handle<P> h,
                           source_location loc = source_location::current()) const noexcept
        {
            scheduler::instance<S>.add_initialy_suspended(h, loc);
        }

        void await_resume() const noexcept {}
    };

    struct base_promise_type
    {
        using related_scheduler = S;

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

        void return_value(T v) noexcept
        {
            result = std::move(v);
        }

        std::optional<T> result;
    };

    using promise_type =
        typename std::conditional<std::is_same_v<T, void>, void_promise_type, value_promise_type>::type;

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
                auto &sch = scheduler::instance<S>;
                if (auto i = sch.indexOf(h)) {
                    const auto ok
                        = sch.mark_suspended(*i,
                                             std::coroutine_handle<promise_type>::from_promise(p));
                    assert(ok);
                }
            }

            T await_resume() const noexcept
            {
                assert(p.result);
                return *p.result;
            }
        };
        return awaiter{m_handle.promise()};
    }

    /**
     * @return result of task returned by **co_return** or std::nullopt if task not yet done
     */
    std::optional<T> result() const
        requires(!std::is_same_v<T, void>)
    {
        return m_handle.promise().result;
    }

    /**
     * @return true if task is completed
     */
    bool done() const
    {
        if constexpr (std::is_same_v<T, void>) {
            return m_handle.promise().result_received;
        } else {
            return m_handle.promise().result.has_value();
        }
    }

private:
    std::coroutine_handle<promise_type> m_handle;
};

} // namespace coschedula
