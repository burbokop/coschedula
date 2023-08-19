// Copyright 2023 Borys Boiko

#pragma once

#include "execution.h"
#include "task.h"
#include <filesystem>
#include <fstream>
#include <thread>

namespace coschedula::fs {

template<typename C = std::string::value_type,
         execution exec = execution::seq,
         std::derived_from<scheduler> S = scheduler>
task<std::basic_string<C>, S> read(const std::filesystem::path &path)
{
    if constexpr (exec == execution::par) {
        volatile bool done = false;
        std::basic_string<C> result;

        std::thread thread = std::thread([&done, &result, &path]() {
            std::ifstream stream(path);
            result = std::basic_string<C>((std::istreambuf_iterator<C>(stream)),
                                          std::istreambuf_iterator<C>());
            done = true;
        });
        thread.detach();
        co_await suspend{};
        while (!done) {
            co_await suspend{};
        }
        co_return result;
    } else if constexpr (exec == execution::seq) {
        co_await suspend{};
        std::ifstream stream(path);
        co_return std::basic_string<C>((std::istreambuf_iterator<C>(stream)),
                                       std::istreambuf_iterator<C>());
    } else if constexpr (exec == execution::seq_async) {
        co_await suspend{};
        std::ifstream stream(path);
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
