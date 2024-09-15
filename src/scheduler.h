// Copyright 2023 Borys Boiko

#pragma once

#include "source_location.h"
#include <coroutine>

namespace coschedula {

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
