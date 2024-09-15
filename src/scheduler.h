// Copyright 2023 Borys Boiko

#pragma once

#include "source_location.h"
#include <coroutine>
#include <optional>
#include <span>

namespace coschedula {

struct task_info
{
    std::coroutine_handle<> h;
    bool suspended;
    source_location loc;
    std::optional<std::coroutine_handle<>> dep;
};

class scheduler
{
public:
    scheduler() = default;
    virtual ~scheduler() = default;

    scheduler(const scheduler&) = delete;
    scheduler(scheduler &&) = delete;
    scheduler &operator=(const scheduler &) = delete;
    scheduler &operator=(scheduler &&) = delete;

    // Interface
public:
    virtual std::size_t select(std::size_t current, std::span<task_info>) = 0;
};

namespace schedulers {

/**
 * @brief The rr class - Round robin algorithm
 */
class rr : public scheduler {
    // scheduler interface
public:
    virtual std::size_t select(std::size_t current, std::span<task_info> tasks) override
    {
        return (current + 1) % tasks.size();
    }
};

};

class dispatcher
{
public:
    dispatcher() = default;
    virtual ~dispatcher() = default;

    dispatcher(const dispatcher&) = delete;
    dispatcher(dispatcher &&) = delete;
    dispatcher &operator=(const dispatcher &) = delete;
    dispatcher &operator=(dispatcher &&) = delete;

    // Interface
public:
    virtual void add_initialy_suspended(std::coroutine_handle<> handle, source_location loc) noexcept = 0;
    virtual void suspend(std::coroutine_handle<> handle) noexcept = 0;
    virtual void await_suspend(std::coroutine_handle<> handle, std::coroutine_handle<> dep) noexcept = 0;
    virtual bool proceed(scheduler&) noexcept = 0;
};

} // namespace coschedula
