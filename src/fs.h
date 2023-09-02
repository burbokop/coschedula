// Copyright 2023 Borys Boiko

#pragma once

#include "execution.h"
#include "task.h"
#include <filesystem>
#include <fstream>
#include <thread>

namespace coschedula::fs {

/**
 * @brief read - read whole file according to execution policy `exec`
 * @param path - path to file
 * @return file as std::string with char `C`
 */
template<typename C = std::string::value_type,
         execution exec = execution::seq,
         std::derived_from<scheduler> S = scheduler>
task<std::basic_string<C>, S> read(const std::filesystem::path path)
{
    if constexpr (exec == execution::par) {
        volatile bool done = false;
        std::basic_string<C> result;

        std::thread thread = std::thread([&done, &result, path = std::move(path)]() {
            std::ifstream stream(std::move(path));
            result = std::basic_string<C>((std::istreambuf_iterator<C>(stream)),
                                          std::istreambuf_iterator<C>());
            done = true;
        });
        thread.detach();
        while (!done) {
            co_await suspend{};
        }
        co_return result;
    } else if constexpr (exec == execution::seq) {
        std::ifstream stream(std::move(path));
        co_return std::basic_string<C>((std::istreambuf_iterator<C>(stream)),
                                       std::istreambuf_iterator<C>());
    } else if constexpr (exec == execution::seq_async) {
        std::ifstream stream(std::move(path));
        std::basic_string<C> result;
        std::size_t i = 0;
        for (std::istreambuf_iterator<C> it(stream); it != std::istreambuf_iterator<C>(); ++it) {
            result += *it;
            if (i++ > 1024 * 1024 / sizeof(C) /* Mb */) {
                co_await suspend{};
                i = 0;
            }
        }
        co_return result;
    } else {
        static_assert(exec != exec, "unknown execution");
    }
}

} // namespace coschedula::fs
