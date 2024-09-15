// Copyright 2023 Borys Boiko

#pragma once

#include "task.h"
#include "utils.h"
#include <future>

/**
 * @brief - runners run :) passed coroutine and start scheduler which manages not only that coroutine but all invoked from it
 * @details Basically runners switch normal c++ context to asynchronous coroutines context
 */
namespace coschedula::runners {

template<typename T, std::derived_from<dispatcher> S>
class concurrent_runner {
public:
    concurrent_runner(const concurrent_runner&) = delete;
    concurrent_runner& operator=(const concurrent_runner&) = delete;
    concurrent_runner(concurrent_runner&&) = default;
    concurrent_runner& operator=(concurrent_runner&&) = default;

    concurrent_runner(shared<S>&& r, task<T, S>&& task)
        : m_r(std::move(r))
        , m_task(std::move(task))
    {
    }

    /**
     * @brief proceed
     * @return true if still has some work to do
     */
    bool proceed() { return m_r->proceed(); }

    /**
     * @brief done
     * @return true if all task done
     * @note can be false when root task is done
     */
    bool done() const { return m_r->tasks().empty(); }

    /**
     * @brief wait - Block current thread until completed. Just return result if already completed
     * @return
     */
    T wait() &&
    {
        std::size_t i = 0;

        auto r = std::move(m_r);

        // std::cout << "wait_0: " << S::stack_pos() << " " << &*m_r << std::endl;
        while (r->proceed()) {
            std::this_thread::yield();

            if (i++ > 20)
                std::abort();
        }
        // std::cout << "wait_1: " << S::stack_pos() << " " << &*m_r << std::endl;

        return std::move(m_task).release_result().value();
    }

private:
    shared<S> m_r;
    task<T, S> m_task;
};

/// impl struct exists to be able to add it as friend to another internal components
struct impl
{
    template<std::derived_from<dispatcher> D>
    static std::thread thread(shared<scheduler>&& scheduler, auto&& f)
        requires requires {
            { f() } -> std::same_as<task<void, D>>;
        }
    {
        return std::thread([scheduler = std::move(scheduler), f = std::move(f)]() mutable {
            const shared<D> dispatcher = std::make_shared<D>(
                std::move(scheduler),
                dispatcher_selector<D>::enter_coro_context,
                dispatcher_selector<D>::leave_coro_context);

            auto task = dispatcher_selector<D>::bind(copy(dispatcher), std::move(f));
            while (dispatcher->proceed()) {
                std::this_thread::yield();
            }
        });
    }

    template<typename T, std::derived_from<dispatcher> D, typename... Args>
    static std::future<T> async(shared<scheduler>&& scheduler, auto&& f, Args&&... args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<task<T, D>>;
        }
    {
        return std::async(
            std::launch::async,
            [scheduler = std::move(scheduler), f = std::move(f)](Args&&... args) mutable {
                const shared<D> dispatcher = std::make_shared<D>(
                    std::move(scheduler),
                    dispatcher_selector<D>::enter_coro_context,
                    dispatcher_selector<D>::leave_coro_context);

                auto task = dispatcher_selector<D>::bind(copy(dispatcher), std::move(f), std::forward<Args>(args)...);
                while (dispatcher->proceed()) {
                    std::this_thread::yield();
                }
                if constexpr (!std::is_same_v<T, void>) {
                    auto result = std::move(task).release_result().value();
                    return result;
                }
            },
            std::forward<Args>(args)...);
    }

    template<typename T, std::derived_from<dispatcher> D, typename... Args>
    static T block_on(shared<scheduler>&& scheduler, auto&& f, Args&&... args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<task<T, D>>;
        }
    {
        const shared<D> dispatcher = std::make_shared<D>(
            std::move(scheduler),
            dispatcher_selector<D>::enter_coro_context,
            dispatcher_selector<D>::leave_coro_context);

        auto task = dispatcher_selector<D>::bind(copy(dispatcher), std::move(f), std::forward<Args>(args)...);
        while (dispatcher->proceed()) {
            std::this_thread::yield();
        }
        if constexpr (!std::is_same_v<T, void>) {
            auto result = std::move(task).release_result().value();
            return result;
        }
    }

    template<typename T, std::derived_from<dispatcher> D, typename... Args>
    static auto concurrent(shared<scheduler>&& scheduler, auto&& f, Args&&... args) -> concurrent_runner<T, D>
        requires requires {
            { f(std::forward<Args>(args)...) } -> task_with_scheduler<D>;
        }
    {
        shared<D> dispatcher = std::make_shared<D>(
            std::move(scheduler),
            dispatcher_selector<D>::enter_coro_context,
            dispatcher_selector<D>::leave_coro_context);

        auto task = dispatcher_selector<D>::bind(copy(dispatcher), std::move(f), std::forward<Args>(args)...);

        return concurrent_runner<T, D>(
            std::move(dispatcher),
            std::move(task));
    }
};

/**
 * @brief thread - run coroutine in new thread which is not compleated until all coroutines managed by its dispatcher are done
 */
template<std::derived_from<dispatcher> D = default_dispatcher, typename F>
std::thread thread(shared<scheduler>&& scheduler, F&& f)
    requires requires {
        {
            f()
        } -> std::same_as<task<void, D>>;
    }
{
    return impl::thread<D>(std::move(scheduler), std::forward<F>(f));
}

/**
 * @brief thread - run coroutine in new thread which is not compleated until all coroutines managed by its dispatcher are done
 */
template<std::derived_from<dispatcher> D = default_dispatcher, typename F>
std::thread thread(F&& f)
    requires requires {
        {
            f()
        } -> std::same_as<task<void, D>>;
    }
{
    return impl::thread<D>(std::make_shared<schedulers::rr>(), std::forward<F>(f));
}

/**
 * @brief async - run coroutine in std::async which is not compleated until all coroutines managed by scheduler `S` are done
 */
template<std::derived_from<dispatcher> S = default_dispatcher, typename F, typename... Args>
auto async(shared<scheduler>&& scheduler, F&& f, Args&&... args) -> std::future<result_type<decltype(f(std::forward<Args>(args)...)), S>>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::async<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::move(scheduler),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

/**
 * @brief async - run coroutine in std::async which is not compleated until all coroutines managed by scheduler `S` are done
 */
template<std::derived_from<dispatcher> S = default_dispatcher, typename F, typename... Args>
auto async(F&& f, Args&&... args) -> std::future<result_type<decltype(f(std::forward<Args>(args)...)), S>>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::async<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::make_shared<schedulers::rr>(),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

/**
 * @brief block_on - run coroutine in current thread until all coroutines managed by scheduler `S` are done
 */
template<std::derived_from<dispatcher> S = default_dispatcher, typename F, typename... Args>
auto block_on(shared<scheduler>&& scheduler, F&& f, Args&&... args) -> result_type<decltype(f(std::forward<Args>(args)...)), S>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::block_on<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::move(scheduler),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

/**
 * @brief block_on - run coroutine in current thread until all coroutines managed by scheduler `S` are done
 */
template<std::derived_from<dispatcher> S = default_dispatcher, typename F, typename... Args>
auto block_on(F&& f, Args&&... args) -> result_type<decltype(f(std::forward<Args>(args)...)), S>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::block_on<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::make_shared<schedulers::rr>(),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

/**
 * @brief concurrent - run coroutine in current thread without blocking thread
 */
template<std::derived_from<dispatcher> S = default_dispatcher, typename F, typename... Args>
auto concurrent(shared<scheduler>&& scheduler, F&& f, Args&&... args)
    -> concurrent_runner<result_type<decltype(f(std::forward<Args>(args)...)), S>, S>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::concurrent<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::move(scheduler),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

/**
 * @brief concurrent - run coroutine in current thread without blocking thread
 */
template<std::derived_from<dispatcher> S = default_dispatcher, typename F, typename... Args>
auto concurrent(F&& f, Args&&... args)
    -> concurrent_runner<result_type<decltype(f(std::forward<Args>(args)...)), S>, S>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::concurrent<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, Args...>(
        std::make_shared<schedulers::rr>(),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

} // namespace coschedula::runners
