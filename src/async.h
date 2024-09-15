// Copyright 2023 Borys Boiko

#pragma once

#include "task.h"
#include <future>

namespace coschedula {

/// impl struct exists to be able to add it as friend to another internal components
struct async_impl
{
    template<typename T, std::derived_from<dispatcher> D, typename... Args>
    static task<T, D> async(auto&& f, Args&&... args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<T>;
        }
    {
        auto future = std::async(std::launch::async, f, std::forward<Args>(args)...);
        while (future.wait_for(std::chrono::seconds(0)) != std::future_status::ready) {
            co_await suspend{};
        }
        co_return future.get();
    }

    template<typename T = void, std::derived_from<dispatcher> D, typename... Args>
    static task<T, D> async(auto&& f, Args&&... args)
        requires requires {
            { f(std::forward<Args>(args)...) } -> std::same_as<task<T, D>>;
        }
    {
        auto future = std::async(
            std::launch::async,
            [scheduler = dispatcher_selector<D>::current_scheduler(), f = std::move(f)](Args&&... args) mutable -> T {
                shared<D> dispatcher = std::make_shared<D>(
                    std::move(scheduler),
                    dispatcher_selector<D>::enter_coro_context,
                    dispatcher_selector<D>::leave_coro_context);

                auto task = dispatcher_selector<D>::bind(copy(dispatcher), std::move(f), std::forward<Args>(args)...);
                while (dispatcher->proceed()) {
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

}; // namespace async_impl

/**
 * @brief async - call function in another thread and motitor its completion
 * @param f - function to call
 * @param args - args passed to `f`
 * @return result of `f`
 */
template<std::derived_from<dispatcher> D = default_dispatcher, typename F, typename... Args>
auto async(F&& f, Args&&... args) -> task<decltype(f(std::forward<Args>(args)...)), D>
    requires requires {
        {
            f(std::forward<Args>(args)...)
        } -> std::convertible_to<decltype(f(std::forward<Args>(args)...))>;
    } && (!task_with_scheduler<decltype(f(std::forward<Args>(args)...)), D>)
{

    return async_impl::async<decltype(f(std::forward<Args>(args)...)), D, Args...>(
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

/**
 * @brief create thread and runs seperate scheduler in it and current coroutine awaits it
 */
template<std::derived_from<dispatcher> D = default_dispatcher, typename F, typename... Args>
auto async(F&& f, Args&&... args) -> task<result_type<decltype(f(std::forward<Args>(args)...)), D>, D>
    requires requires {
        {
            f(std::forward<Args>(args)...)
        } -> std::same_as<task<result_type<decltype(f(std::forward<Args>(args)...)), D>, D>>;
    }
{
    return async_impl::async<result_type<decltype(f(std::forward<Args>(args)...)), D>, D, Args...>(
        std::forward<F>(f),
        std::forward<Args>(args)...);
}

} // namespace coschedula
