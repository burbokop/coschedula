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
    template<scheduler S, std::derived_from<task_registry> R>
    static std::thread thread(auto &&f)
        requires requires {
            { f() } -> std::same_as<task<void, S>>;
        }
    {
        return std::thread([f = std::move(f)] {
            const shared<R> rt = std::make_shared<R>(function<void(shared<R> &&)>(
                [](shared<R> &&r) { S::about_to_resume(std::move(r)); }));

            runner_guard<S, R> g(rt);
            auto task = f();
            while (rt->proceed()) {
                std::this_thread::yield();
            }
        });
    }

    template<typename T, scheduler S, std::derived_from<task_registry> R, typename... Args>
    static std::future<T> async(auto &&f, Args &&...args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<task<T, S>>;
        }
    {
        return std::async(
            std::launch::async,
            [f = std::move(f)](Args &&...args) {
                shared<R> r = std::make_shared<R>(function<void(shared<R> &&)>(
                    [](shared<R> &&r) { S::about_to_resume(std::move(r)); }));
                runner_guard<S, R> g(r);
                auto task = f(std::forward<Args>(args)...);
                while (r->proceed()) {
                    std::this_thread::yield();
                }
                if constexpr (!std::is_same_v<T, void>) {
                    auto result = std::move(task).release_result().value();
                    return result;
                }
            },
            std::forward<Args>(args)...);
    }

    template<typename T, scheduler S, std::derived_from<task_registry> R, typename... Args>
    static T block_on(auto &&f, Args &&...args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<task<T, S>>;
        }
    {
        shared<R> r = std::make_shared<R>(
            function<void(shared<R> &&)>([](shared<R> &&r) { S::about_to_resume(std::move(r)); }));
        runner_guard<S, R> g(r);
        auto task = f(std::forward<Args>(args)...);
        while (r->proceed()) {
            std::this_thread::yield();
        }
        if constexpr (!std::is_same_v<T, void>) {
            auto result = std::move(task).release_result().value();
            return result;
        }
    }
};

/**
 * @brief async - run coroutine in new thread which is not compleated until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler, std::derived_from<task_registry> R = default_task_registry>
std::thread thread(auto &&f)
    requires requires {
        {
            f()
        } -> std::same_as<task<void, S>>;
    }
{
    return impl::thread<S, R>(f);
}

/**
 * @brief async - run coroutine in std::async which is not compleated until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler,
         std::derived_from<task_registry> R = default_task_registry,
         typename F,
         typename... Args>
auto async(F &&f,
           Args &&...args) -> std::future<result_type<decltype(f(std::forward<Args>(args)...)), S>>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::async<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, R, Args...>(
        std::move(f), std::forward<Args>(args)...);
}

/**
 * @brief block_on - run coroutine in current thread until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler,
         std::derived_from<task_registry> R = default_task_registry,
         typename F,
         typename... Args>
auto block_on(F &&f, Args &&...args) -> result_type<decltype(f(std::forward<Args>(args)...)), S>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    return impl::block_on<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, R, Args...>(
        std::move(f), std::forward<Args>(args)...);
}

template<typename T, scheduler S, std::derived_from<task_registry> R>
class concurrent_runner
{
public:
    concurrent_runner(const concurrent_runner &) = delete;
    concurrent_runner &operator=(const concurrent_runner &) = delete;
    concurrent_runner(concurrent_runner &&) = default;
    concurrent_runner &operator=(concurrent_runner &&) = default;

    concurrent_runner(shared<R> &&r, runner_guard<S, R> &&g, task<T, S> &&task)
        : m_r(std::move(r))
        , m_g(std::move(g))
        , m_task(std::move(task))
    {}

    /**
     * @brief proceed
     * @return true if still has some work to do 
     */
    bool proceed()
    {
        assert(!m_g.moved());
        return m_r->proceed();
    }

    /**
     * @brief done
     * @return true if all task done
     * @note can be false when root task is done
     */
    bool done() const
    {
        assert(!m_g.moved());
        return m_r->tasks().empty();
    }

    /**
     * @brief wait - Block current thread until completed. Just return result if already completed
     * @return 
     */
    T wait() &&
    {
        std::size_t i = 0;

        assert(!m_g.moved());
        std::cout << "wait_0: " << S::stack_pos() << " " << &*m_r << std::endl;
        while (m_r->proceed()) {
            std::this_thread::yield();

            if (i++ > 20)
                std::abort();
        }
        std::cout << "wait_1: " << S::stack_pos() << " " << &*m_r << std::endl;

        const auto result = std::move(m_task).release_result().value();
        auto g = std::move(m_g);
        return result;
    }

private:
    shared<R> m_r;
    runner_guard<S, R> m_g;
    task<T, S> m_task;
};

/**
 * @brief concurrent - run coroutine in current thread without blocking thread
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<scheduler S = default_scheduler,
         std::derived_from<task_registry> R = default_task_registry,
         typename F,
         typename... Args>
auto concurrent(F &&f, Args &&...args)
    -> concurrent_runner<result_type<decltype(f(std::forward<Args>(args)...)), S>, S, R>
    requires requires {
        { f(std::forward<Args>(args)...) } -> task_with_scheduler<S>;
    }
{
    shared<R> r = std::make_shared<R>(
        function<void(shared<R> &&)>([](shared<R> &&r) { S::about_to_resume(std::move(r)); }));
    runner_guard<S, R> g(r);
    return concurrent_runner(std::move(r), std::move(g), f(std::forward<Args>(args)...));
}

} // namespace coschedula::runners
