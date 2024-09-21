// Copyright 2023 Borys Boiko

#pragma once

#include "nonull.h"
#include "source_location.h"
#include <coroutine>
#include <optional>
#include <span>

namespace coschedula {

struct task_info {
    std::coroutine_handle<> handle;
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
public:
    static shared<rr> create()
    {
        return std::make_shared<rr>();
    }

    // scheduler interface
public:
    virtual std::size_t select(std::size_t current, std::span<task_info> tasks) override
    {
        return (current + 1) % tasks.size();
    }
};

};

class dispatcher;

/// Can subscribe to dispatchers events
/// @note You must protect internal data of your implementation with mutex because all virtual functions may be called from different threads
class subscriber {
public:
    subscriber() = default;
    virtual ~subscriber() = default;

    subscriber(const subscriber&) = delete;
    subscriber(subscriber&&) = delete;

    virtual void task_started(const dispatcher&, std::size_t task_index, const task_info&) = 0;
    virtual void task_finished(const dispatcher&, std::size_t task_index, const task_info&) = 0;
    virtual void task_suspended(const dispatcher&, std::size_t task_index, const task_info&) = 0;
    virtual void task_resumed(const dispatcher&, std::size_t task_index, const task_info&) = 0;

private:
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
    virtual bool install_subscriber(shared<subscriber>&& s) = 0;
    virtual bool deinstall_subscriber(shared<subscriber>&& s) = 0;
    /// true if there is no work to do at the time
    virtual bool empty() = 0;
};

} // namespace coschedula
