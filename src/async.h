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
template<typename T, std::derived_from<scheduler> S = scheduler, typename... Args>
task<T, S> async(auto &&f, Args &&...args)
{
    auto future = std::async(std::launch::async, f, std::forward<Args>(args)...);
    while (future.wait_for(std::chrono::seconds(0)) != std::future_status::ready) {
        co_await suspend{};
    }
    co_return future.get();
}

} // namespace coschedula
