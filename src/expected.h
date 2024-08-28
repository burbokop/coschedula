// Copyright 2023 Borys Boiko

#pragma once

#include <optional>
#include <sstream>
#include <string>
#include <utility>
#include <variant>

namespace coschedula {

template<typename E>
class unexpected
{
public:
    explicit unexpected(E &&value)
        : m_value(std::move(value))
    {}

    explicit unexpected(const E &value)
        : m_value(value)
    {}

    const E &value() const { return m_value; }
    E release() && { return std::move(m_value); }

private:
    E m_value;
};

template<typename E>
unexpected(const E[]) -> unexpected<const E *>;

template<typename E>
class unexpected_exception : public std::exception
{
public:
    explicit unexpected_exception(E &&value)
        : m_value(std::move(value))
    {}

    explicit unexpected_exception(const E &value)
        : m_value(value)
    {}

    const E &value() const { return m_value; }

    const char *what() const noexcept override
    {
        if (!m_what) {
            if constexpr (requires(std::ostream &s) { s << m_value; }) {
                std::ostringstream ss;
                ss << "Trying to get value of unexpected: " << m_value;
                m_what = std::move(ss).str();
            } else {
                m_what = "Trying to get value of unexpected";
            }
        }
        return m_what->c_str();
    }

private:
    mutable std::optional<std::string> m_what;
    E m_value;
};

template<typename T, typename E>
class expected
{
    using actual_stored_type = std::conditional_t<std::is_same_v<T, void>, std::monostate, T>;

public:
    template<std::convertible_to<T> T0>
    expected(T0 &&v)
        requires(!std::is_same_v<T, void>)
        : m_data(v)
    {}

    expected()
        requires(std::is_same_v<T, void>)
        : m_data(std::monostate{})
    {}

    template<std::convertible_to<E> E0>
    expected(unexpected<E0> &&u)
        : m_data(std::move(u).release())
    {}

    template<std::convertible_to<E> E0>
    expected(const unexpected<E0> &u)
        : m_data(u.value())
    {}

    operator bool() const noexcept { return m_data.index() == 0; }

    const actual_stored_type &operator*() const noexcept
        requires(!std::is_same_v<T, void>)
    {
        return std::get<0>(m_data);
    }

    actual_stored_type &operator*() noexcept
        requires(!std::is_same_v<T, void>)
    {
        return std::get<0>(m_data);
    }

    const actual_stored_type *operator->() const noexcept
        requires(!std::is_same_v<T, void>)
    {
        return &std::get<0>(m_data);
    }

    actual_stored_type &operator->() noexcept
        requires(!std::is_same_v<T, void>)
    {
        return &std::get<0>(m_data);
    }

    const actual_stored_type &value() const
        requires(!std::is_same_v<T, void>)
    {
        if (!*this) {
            throw unexpected_exception(error());
        }
        return std::get<0>(m_data);
    }

    actual_stored_type &value()
        requires(!std::is_same_v<T, void>)
    {
        if (!*this) {
            throw unexpected_exception(error());
        }
        return std::get<0>(m_data);
    }

    const E &error() const noexcept { return std::get<1>(m_data); }
    E &error() noexcept { return std::get<1>(m_data); }

    bool operator==(const expected &) const = default;
    auto operator<=>(const expected &) const = default;

private:
    std::variant<actual_stored_type, E> m_data;
};

} // namespace coschedula
