// Copyright 2023 Borys Boiko

#pragma once

#include "scheduler.h"
#include <utility>

namespace coschedula {

template<typename T, std::derived_from<scheduler> S = scheduler>
struct task
{
    struct init_suspend
    {
        constexpr bool await_ready() const noexcept { return false; }
        template<typename P>
        void await_suspend(std::coroutine_handle<P> h,
                           std::source_location loc = std::source_location::current()) const noexcept
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
            scheduler::instance<S>.add_initialy_suspended(h, loc);
        }

        void await_resume() const noexcept
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
        }
    };

    struct base_promise_type
    {
        using related_scheduler = S;

        base_promise_type()
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
        }
        ~base_promise_type()
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
        }

        init_suspend initial_suspend() noexcept
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
            return {};
        };
        std::suspend_always final_suspend() noexcept
        {
            // std::cout << __PRETTY_FUNCTION__ << std::endl;
            return {};
        };

        void unhandled_exception() {}
    };

    struct void_promise_type : base_promise_type
    {
        task get_return_object() noexcept { return {*this}; }

        void return_void() noexcept
            requires std::is_same<T, void>::value

        {
            result_received = true;
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
        }

        bool result_received = false;
    };

    struct value_promise_type : base_promise_type
    {
        task get_return_object() noexcept { return {*this}; }

        void return_value(T v) noexcept
        {
            result = std::move(v);
            //std::cout << __PRETTY_FUNCTION__ << " " << *result << std::endl;
        }

        std::optional<T> result;
    };

    using promise_type =
        typename std::conditional<std::is_same_v<T, void>, void_promise_type, value_promise_type>::type;

    task(promise_type &p)
        : m_handle(std::coroutine_handle<promise_type>::from_promise(p))
    {
        //std::cout << __PRETTY_FUNCTION__ << std::endl;
    }
    task(task &&c)
        : m_handle(std::exchange(c.handle, nullptr))
    {}
    task(const task &p) = delete;

    ~task()
    {
        if (m_handle && m_handle.done()) {
            m_handle.destroy();
        }
        // std::cout << __PRETTY_FUNCTION__ << std::endl;
    }

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
                    //std::cout << __PRETTY_FUNCTION__ << " 2" << std::endl;
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
                //std::cout << __PRETTY_FUNCTION__ << std::endl;
            }
        };
        return awaiter{m_handle.promise()};
    }

    std::optional<T> result() const
        requires(!std::is_same_v<T, void>)
    {
        return m_handle.promise().result;
    }

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
