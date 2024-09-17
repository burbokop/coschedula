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

template<typename T, std::derived_from<dispatcher> D, typename F>
class concurrent_runner {
public:
    concurrent_runner(const concurrent_runner&) = delete;
    concurrent_runner& operator=(const concurrent_runner&) = delete;
    concurrent_runner(concurrent_runner&&) = delete;
    concurrent_runner& operator=(concurrent_runner&&) = delete;

    template<typename ...Args>
    concurrent_runner(shared<D>&& dispatcher, shared<scheduler>&& scheduler, F&&f, Args&& ...args)
        : m_dispatcher(std::move(dispatcher))
        , m_scheduler(std::move(scheduler))
        , m_f(std::move(f))
        , m_task(dispatcher_selector<D>::bind(copy(m_dispatcher), copy(m_scheduler), m_f, std::forward<Args>(args)...))
    {
    }

    /**
     * @brief proceed
     * @return true if still has some work to do
     */
    bool proceed() { return m_dispatcher->proceed(*m_scheduler); }

    /**
     * @brief done
     * @return true if all task done
     * @note can be false when root task is done
     */
    bool done() const { return m_dispatcher->tasks().empty(); }

    /**
     * @brief wait - Block current thread until completed. Just return result if already completed
     * @return
     */
    T wait() &&
    {
        auto dispatcher = std::move(m_dispatcher);
        auto scheduler = std::move(m_scheduler);

        while (dispatcher->proceed(*scheduler)) {
            std::this_thread::yield();
        }

        return std::move(m_task).release_result().value();
    }

private:
    shared<D> m_dispatcher;
    shared<scheduler> m_scheduler;
    F m_f;
    task<T, D> m_task;
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
                [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::enter_coro_context(std::move(dispatcher), copy(scheduler)); },
                [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::leave_coro_context(std::move(dispatcher), copy(scheduler)); });

            auto task = dispatcher_selector<D>::bind(copy(dispatcher), copy(scheduler), std::move(f));
            while (dispatcher->proceed(*scheduler)) {
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
                    [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::enter_coro_context(std::move(dispatcher), copy(scheduler)); },
                    [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::leave_coro_context(std::move(dispatcher), copy(scheduler)); });

                auto task = dispatcher_selector<D>::bind(copy(dispatcher), copy(scheduler), std::move(f), std::forward<Args>(args)...);
                while (dispatcher->proceed(*scheduler)) {
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
            [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::enter_coro_context(std::move(dispatcher), copy(scheduler)); },
            [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::leave_coro_context(std::move(dispatcher), copy(scheduler)); });

        auto task = dispatcher_selector<D>::bind(copy(dispatcher), copy(scheduler), std::move(f), std::forward<Args>(args)...);
        while (dispatcher->proceed(*scheduler)) {
            std::this_thread::yield();
        }
        if constexpr (!std::is_same_v<T, void>) {
            auto result = std::move(task).release_result().value();
            return result;
        }
    }

    template<typename T, std::derived_from<dispatcher> D, typename F, typename... Args>
    static auto concurrent(shared<scheduler>&& scheduler, F&& f, Args&&... args) -> concurrent_runner<T, D, F>
        requires requires {
            { f(std::forward<Args>(args)...) } -> task_with_scheduler<D>;
        }
    {
        shared<D> dispatcher = std::make_shared<D>(
            [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::enter_coro_context(std::move(dispatcher), copy(scheduler)); },
            [scheduler](shared<D>&& dispatcher) { dispatcher_selector<D>::leave_coro_context(std::move(dispatcher), copy(scheduler)); });

        return concurrent_runner<T, D, F>(
            std::move(dispatcher),
            std::move(scheduler),
            std::forward<F>(f),
            std::forward<Args>(args)...);
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
    -> concurrent_runner<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, F>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::concurrent<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, F, Args...>(
        std::move(scheduler),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

/**
 * @brief concurrent - run coroutine in current thread without blocking thread
 */
template<std::derived_from<dispatcher> S = default_dispatcher, typename F, typename... Args>
auto concurrent(F&& f, Args&&... args)
    -> concurrent_runner<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, F>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::concurrent<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, F, Args...>(
        std::make_shared<schedulers::rr>(),
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

} // namespace coschedula::runners
