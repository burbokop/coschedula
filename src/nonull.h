// Copyright 2023 Borys Boiko

#pragma once

#include <cassert>
#include <concepts>
#include <functional>
#include <memory>
#include <utility>

namespace coschedula {

/// Can only be null when moved
template<typename T>
class nonull
{
public:
    nonull() = delete;
    nonull(std::nullptr_t) = delete;

    nonull(T v) noexcept(std::is_nothrow_move_constructible_v<T>)
        : m_v(std::move(v))
    {
        assert(m_v);
    }

    template<std::convertible_to<T> O>
    nonull(O v) noexcept(std::is_nothrow_move_constructible_v<T>)
        : m_v(std::move(v))
    {
        assert(m_v);
    }

    template<std::convertible_to<T> O>
    constexpr nonull(nonull<O> v) noexcept(std::is_nothrow_move_constructible_v<T>)
        : m_v(std::move(v.nullable()))
    {
        assert(m_v);
    }

    nonull(const nonull &) = default;
    nonull &operator=(const nonull &o) = default;

    nonull(nonull &&o) noexcept(std::is_nothrow_move_constructible_v<T>)
        : m_v(std::exchange(o.m_v, nullptr))
    {
        assert(m_v);
    }

    nonull &operator=(nonull &&o)
    {
        m_v = std::exchange(o.m_v, nullptr);
        assert(m_v);
        return *this;
    }

    decltype(auto) operator->()
        requires requires(T v) { v.operator->(); }
    {
        assert(m_v);
        return m_v.operator->();
    }

    decltype(auto) operator->() const
        requires requires(const T v) { v.operator->(); }
    {
        assert(m_v);
        return m_v.operator->();
    }

    decltype(auto) operator*()
        requires requires(T v) { v.operator*(); }
    {
        assert(m_v);
        return *m_v;
    }

    decltype(auto) operator*() const
        requires requires(const T v) { v.operator*(); }
    {
        assert(m_v);
        return *m_v;
    }

    template<typename... Args>
    decltype(auto) operator()(Args &&...args)
        requires requires(T v) { v(std::forward<Args>(args)...); }
    {
        assert(m_v);
        return m_v(std::forward<Args>(args)...);
    }

    template<typename... Args>
    decltype(auto) operator()(Args &&...args) const
        requires requires(const T v) { v(std::forward<Args>(args)...); }
    {
        assert(m_v);
        return m_v(std::forward<Args>(args)...);
    }

    constexpr T &nullable() &
    {
        assert(m_v);
        return m_v;
    }

    // version of value for const lvalues
    constexpr T const &nullable() const &
    {
        assert(m_v);
        return m_v;
    }

    // version of value for non-const rvalues... are you bored yet?
    constexpr T &&nullable() &&
    {
        assert(m_v);
        return m_v;
    }

    // you sure are by this point
    constexpr T const &&nullable() const &&
    {
        assert(m_v);
        return m_v;
    }

    constexpr auto operator<=>(const nonull &) const = default;

private:
    T m_v;
};

template<typename T>
using unique = nonull<std::unique_ptr<T>>;

template<typename T>
using shared = nonull<std::shared_ptr<T>>;

template<typename T>
using ptr = nonull<T *>;

template<typename T>
using function = nonull<std::function<T>>;

} // namespace coschedula
