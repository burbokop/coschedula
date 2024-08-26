#pragma once

#include "task.h"
#include <future>

/**
 * @brief - runners run :) passed coroutine and start scheduler which manages not only that coroutine but all invoked from it
 * @details Basically runners switch normal c++ context to asynchronous coroutines context
 */
namespace coschedula::runners {

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
    return std::thread([f = std::move(f)] {
        auto task = f();
        while (S::proceed()) {
            std::this_thread::yield();
        }
    });
}

/**
 * @brief async - run coroutine in std::async which is not compleated until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<typename T = void, scheduler S = default_scheduler, typename... Args>
std::future<T> async(auto &&f, Args &&...args)
    requires requires {
        {
            f(std::forward<Args>(args)...)
        } -> std::same_as<task<void, S>>;
    }
{
    return std::async(
        std::launch::async,
        [f = std::move(f)](Args &&...args) {
            auto task = f(std::forward<Args>(args)...);
            while (S::proceed()) {
                std::this_thread::yield();
            }
            return task.result();
        },
        std::forward<Args>(args)...);
}

/**
 * @brief block_on - run coroutine in current thread until all coroutines managed by scheduler `S` are done
 * @note not suggested to use with global_scheduler because it may cause thread to run coroutines from another threads
 */
template<typename T = void, scheduler S = default_scheduler, typename... Args>
T block_on(auto &&f, Args &&...args)
    requires requires {
        {
            f(std::forward<Args>(args)...)
        } -> std::same_as<task<void, S>>;
    }
{
    auto task = f(std::forward<Args>(args)...);
    while (S::proceed()) {
        std::this_thread::yield();
    }
    return task.result();
}

} // namespace coschedula::runners
