// Copyright 2023 Borys Boiko

#pragma once

#include "source_location.h"
#include <coroutine>
#include <utility>

namespace coschedula {

/**
 * @brief The scheduler - provides scheduling mechanism for all task related to it
 * @note does not contain actual information about tasks. this functionality is delegated to `coschedula::task_registry`
 */
template<typename T>
concept scheduler = requires(std::coroutine_handle<> handle,
                             std::coroutine_handle<> dep,
                             source_location loc) {
    { T::push_runner() } -> std::same_as<void>;
    { T::pop_runner() } -> std::same_as<void>;
    { T::add_initialy_suspended(handle, loc) } noexcept -> std::same_as<void>;
    { T::suspend(handle) } noexcept -> std::same_as<void>;
    { T::await_suspend(handle, dep) } noexcept -> std::same_as<void>;
    { T::proceed() } -> std::same_as<bool>;
};

template<scheduler S>
class runner_guard
{
public:
    runner_guard(const runner_guard &) = delete;
    runner_guard &operator=(const runner_guard &) = delete;
    runner_guard &operator=(runner_guard &&) = delete;

    runner_guard(runner_guard &&v)
        : m_moved(std::exchange(v.m_moved, true))
    {}

    runner_guard() { S::push_runner(); }
    ~runner_guard()
    {
        if (!m_moved) {
            S::pop_runner();
        }
    }

private:
    bool m_moved = false;
};

/**
 * @brief The task_registry class - which hold imformation about tasks
 */
class task_registry
{
public:
    task_registry() = default;
    task_registry(const task_registry &) = delete;
    task_registry(task_registry &&) = delete;
    task_registry &operator=(const task_registry &) = delete;
    task_registry &operator=(task_registry &&) = delete;

    virtual void add_initialy_suspended(std::coroutine_handle<> handle, source_location loc) noexcept
        = 0;
    virtual void suspend(std::coroutine_handle<> handle) noexcept = 0;
    virtual void await_suspend(std::coroutine_handle<> handle, std::coroutine_handle<> dep) noexcept
        = 0;

    virtual bool proceed() noexcept = 0;
};

} // namespace coschedula
