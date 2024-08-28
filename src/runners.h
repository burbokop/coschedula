#pragma once

#include "task.h"
#include <future>

/**
 * @brief - runners run :) passed coroutine and start scheduler which manages not only that coroutine but all invoked from it
 * @details Basically runners switch normal c++ context to asynchronous coroutines context
 */
namespace coschedula::runners {

/// impl struct exists to be able to add it as friend to another internal components
struct impl
{
    template<scheduler S>
    static std::thread thread(auto &&f)
        requires requires {
            { f() } -> std::same_as<task<void, S>>;
        }
    {
        return std::thread([f = std::move(f)] {
            runner_guard<S> g;
            auto task = f();
            while (S::proceed()) {
                std::this_thread::yield();
            }
        });
    }

    template<typename T, scheduler S, typename... Args>
    static std::future<T> async(auto &&f, Args &&...args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<task<T, S>>;
        }
    {
        return std::async(
            std::launch::async,
            [f = std::move(f)](Args &&...args) {
                runner_guard<S> g;
                auto task = f(std::forward<Args>(args)...);
                while (S::proceed()) {
                    std::this_thread::yield();
                }
                if constexpr (!std::is_same_v<T, void>) {
                    auto result = task.result().value();
                    return result;
                }
            },
            std::forward<Args>(args)...);
    }

    template<typename T, scheduler S, typename... Args>
    static T block_on(auto &&f, Args &&...args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<task<T, S>>;
        }
    {
        runner_guard<S> g;
        auto task = f(std::forward<Args>(args)...);
        while (S::proceed()) {
            std::this_thread::yield();
        }
        if constexpr (!std::is_same_v<T, void>) {
            auto result = task.result().value();
            return result;
        }
    }
};

/**
 * @brief async - run coroutine in new thread which is not compleated until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler>
std::thread thread(auto &&f)
    requires requires {
        {
            f()
        } -> std::same_as<task<void, S>>;
    }
{
    return impl::thread<S>(f);
}

/**
 * @brief async - run coroutine in std::async which is not compleated until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler, typename F, typename... Args>
auto async(F &&f,
           Args &&...args) -> std::future<result_type<decltype(f(std::forward<Args>(args)...)), S>>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::async<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::move(f), std::forward<Args>(args)...);
}

/**
 * @brief block_on - run coroutine in current thread until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler, typename F, typename... Args>
auto block_on(F &&f, Args &&...args) -> result_type<decltype(f(std::forward<Args>(args)...)), S>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::block_on<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::move(f), std::forward<Args>(args)...);
}

template<typename T, scheduler S>
class concurrent_runner
{
public:
    concurrent_runner(const concurrent_runner &) = delete;
    concurrent_runner &operator=(const concurrent_runner &) = delete;
    concurrent_runner(concurrent_runner &&) = default;
    concurrent_runner &operator=(concurrent_runner &&) = default;

    concurrent_runner(runner_guard<S> &&g, task<T, S> &&task)
        : m_g(std::move(g))
        , m_task(std::move(task))
    {}

    bool proceed() { return S::proceed(); }
    T wait() &&
    {
        while (S::proceed()) {
            std::this_thread::yield();
        }
        return m_task.result().value();
    }

private:
    runner_guard<S> m_g;
    task<T, S> m_task;
};

/**
 * @brief concurrent - run coroutine in current thread without blocking thread
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler, typename F, typename... Args>
auto concurrent(F &&f, Args &&...args)
    -> concurrent_runner<result_type<decltype(f(std::forward<Args>(args)...)), S>, S>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    runner_guard<S> g;
    return concurrent_runner(std::move(g), f(std::forward<Args>(args)...));
}

} // namespace coschedula::runners
