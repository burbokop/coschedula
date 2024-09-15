// Copyright 2023 Borys Boiko

#pragma once

#include "execution.h"
#include "expected.h"
#include "task.h"
#include <cstring>
#include <filesystem>
#include <fstream>
#include <thread>

namespace coschedula::fs {

class error
{
public:
    enum class operation {
        open,
        read,
        write,
    };

    error(operation op, int eno)
        : m_op(op)
        , m_eno(eno)
    {}

    auto op() const { return m_op; }
    int eno() const { return m_eno; }

    inline friend std::ostream &operator<<(std::ostream &stream, const error &err)
    {
        switch (err.m_op) {
        case error::operation::open:
            return stream << "Can not open stream: " << std::strerror(err.m_eno);
        case error::operation::read:
            return stream << "Can read stream: " << std::strerror(err.m_eno);
        case error::operation::write:
            return stream << "Can write to stream: " << std::strerror(err.m_eno);
        }
        return stream;
    }

    bool operator==(const error &) const = default;
    auto operator<=>(const error &) const = default;

private:
    operation m_op;
    int m_eno;
};

/**
 * @brief read - read whole file according to execution policy `exec`
 * @param path - path to file
 * @return file as std::string with char `C`
 */
template<typename C = std::string::value_type,
    execution exec = execution::seq,
    std::derived_from<dispatcher> D = default_dispatcher>
[[nodiscard]] task<expected<std::basic_string<C>, error>, D> read(const std::filesystem::path path)
{
    if constexpr (exec == execution::par) {
        std::atomic_bool done = false;
        expected<std::basic_string<C>, error> result = "";

        std::thread thread = std::thread([&done, &result, path = std::move(path)]() {
            std::ifstream stream(std::move(path));
            if (stream.is_open()) {
                result = std::basic_string<C>((std::istreambuf_iterator<C>(stream)),
                                              std::istreambuf_iterator<C>());
            } else {
                result = unexpected(error(error::operation::open, errno));
            }
            done = true;
        });
        thread.detach();
        while (!done) {
            co_await suspend{};
        }
        co_return result;
    } else if constexpr (exec == execution::seq) {
        std::ifstream stream(std::move(path));
        if (!stream.is_open()) {
            co_return unexpected(error(error::operation::open, errno));
        }
        co_return std::basic_string<C>((std::istreambuf_iterator<C>(stream)),
                                       std::istreambuf_iterator<C>());
    } else if constexpr (exec == execution::seq_async) {
        std::ifstream stream(std::move(path));
        if (!stream.is_open()) {
            co_return unexpected(error(error::operation::open, errno));
        }
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

template<std::derived_from<dispatcher> D = default_dispatcher, std::ranges::range R>
[[nodiscard]] task<expected<void, error>, D> write(const std::filesystem::path path, R&& range)
    requires(std::is_same_v<std::ranges::range_value_t<R>, std::byte>)
{
    std::ofstream stream(path, std::ios::binary);
    if (!stream.is_open()) {
        co_return unexpected(error(error::operation::open, errno));
    }
    for (std::size_t i = 0; const std::byte b : range) {
        stream.write(reinterpret_cast<const char *>(&b), 1);
        if (i++ > 1024 * 1024 /* Mb */) {
            co_await suspend{};
            i = 0;
        }
    }
    co_return {};
}

template<std::derived_from<dispatcher> D = default_dispatcher, std::ranges::range R>
[[nodiscard]] task<expected<void, std::string>, D> write(const std::filesystem::path path, R&& range)
    requires(std::is_same_v<std::ranges::range_value_t<R>, char>)
{
    std::ofstream stream(path);
    if (!stream.is_open()) {
        co_return unexpected(error(error::operation::open, errno));
    }
    for (std::size_t i = 0; const std::byte b : range) {
        stream.write(reinterpret_cast<const char *>(&b), 1);
        if (i++ > 1024 * 1024 /* Mb */) {
            co_await suspend{};
            i = 0;
        }
    }
    co_return {};
}

} // namespace coschedula::fs
