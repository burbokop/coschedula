// Copyright 2023 Borys Boiko

#pragma once

#include "task.h"
#include <future>

namespace coschedula {

/**
 * @brief async - call function in another thread and motitor its completion
 * @param f - function to call
 * @param args - args passed to `f`
 * @return result of `f`
 */
template<typename T, scheduler S = default_scheduler, typename... Args>
task<T, S> async(auto &&f, Args &&...args)
    requires requires {
        {
            f(std::forward<Args>(args)...)
        } -> std::same_as<T>;
    }
{
    auto future = std::async(std::launch::async, f, std::forward<Args>(args)...);
    while (future.wait_for(std::chrono::seconds(0)) != std::future_status::ready) {
        co_await suspend{};
    }
    co_return future.get();
}

/**
 * @brief create thread and runs seperate scheduler in it and current coroutine awaits it
 */
template<typename T = void, scheduler S = default_scheduler, typename... Args>
task<T, S> async(auto &&f, Args &&...args)
    requires requires {
        {
            f(std::forward<Args>(args)...)
        } -> std::same_as<task<T, S>>;
    }
{
    auto future = std::async(
        std::launch::async,
        [f = std::move(f)](Args &&...args) {
            auto task = f(std::forward<Args>(args)...);
            while (S::proceed()) {
                std::this_thread::yield();
            }
            if constexpr (!std::is_same_v<T, void>) {
                return task.result().value();
            }
        },
        std::forward<Args>(args)...);
    while (future.wait_for(std::chrono::seconds(0)) != std::future_status::ready) {
        co_await suspend{};
    }
    co_return future.get();
}

} // namespace coschedula
