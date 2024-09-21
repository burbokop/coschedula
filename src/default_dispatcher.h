// Copyright 2023 Borys Boiko

#pragma once

#include "nonull.h"
#include "scheduler.h"
#include <cassert>
#include <functional>
#include <memory>
#include <optional>
#include <ostream>
#include <set>
#include <sstream>

namespace coschedula {

template<typename T>
concept stream_printer = requires(T v, std::ostream &s) { v(s); };

/**
 * @brief The default_task_registry class - holds tasks info and manages it by round robin algorithm
 * @note default_task_registry::next can be overrided to use another algorithm of choosing next task to resume
 */
class default_dispatcher : public dispatcher,
                           public std::enable_shared_from_this<default_dispatcher> {
public:
    default_dispatcher(
        function<void(shared<default_dispatcher>&&)>&& enter_coro_context,
        function<void(shared<default_dispatcher>&&)>&& leave_coro_context)
        : m_enter_coro_context(std::move(enter_coro_context))
        , m_leave_coro_context(std::move(leave_coro_context))
    {}

    default_dispatcher(const default_dispatcher&) = delete;
    default_dispatcher(default_dispatcher&&) = delete;

    using logger = std::function<void(source_location loc, const std::string &)>;

    /**
     * @brief installLogger - set logger
     * @default logs disabled
     * @param logger
     */
    void install_logger(logger logger) { m_logger = logger; }

    // dispatcher interface
public:
    void add_initialy_suspended(std::coroutine_handle<> h, source_location loc) noexcept override
    {
        m_tasks.push_back({ .handle = h, .suspended = true, .loc = loc, .dep = std::nullopt });
        log([](std::ostream& stream) -> std::ostream& { return stream << "ADDED AND SUSPENDED"; },
            loc);

        for (const auto& s : m_subscribers) {
            s->task_started(*this, m_tasks.size() - 1, m_tasks.back());
        }
    }

    void suspend(std::coroutine_handle<> h) noexcept override
    {
        if (const auto i = index_of(h)) {
            const auto ok = mark_suspended(*i);
            assert(ok);
            static_cast<void>(ok);
        }
    }

    void await_suspend(std::coroutine_handle<> current,
                       std::coroutine_handle<> dep) noexcept override
    {
        if (const auto i = index_of(current)) {
            const auto ok = mark_suspended(*i, dep);
            assert(ok);
            static_cast<void>(ok);
        }
    }

    /**
     * @brief proceed - do one cicle of scheduling
     * Can be called in while:
     * ```
     * while(scheduler::instance<scheduler>::proceed()){}
     * ```
     * or in some timer if using with some frameworks
     * @return true if still has some work to do
     */
    bool proceed(scheduler& scheduler) noexcept override
    {
        if (m_tasks.empty()) {
            m_i = 0;
            return false;
        }

        if (remove_if_done(m_i)) {
            if (m_tasks.empty()) {
                m_i = 0;
                return false;
            }
            return true;
        }

        resume(m_i);

        m_i = scheduler.select(m_i, m_tasks);
        return true;
    }

    bool install_subscriber(shared<subscriber>&& s) override { return m_subscribers.insert(std::move(s)).second; }
    bool deinstall_subscriber(shared<subscriber>&& s) override { return m_subscribers.erase(std::move(s)) != 0; }

    virtual bool empty() override
    {
        return m_tasks.empty();
    }

private:
    bool resume(std::size_t i)
    {
        assert(i < m_tasks.size());
        if (m_tasks[i].suspended && !m_tasks[i].dep) {
            m_tasks[i].suspended = false;
            log([](std::ostream &stream) -> std::ostream & { return stream << "RESUMED"; },
                m_tasks[i].loc);

            for (const auto &s : m_subscribers) {
                s->task_resumed(*this, i, m_tasks[i]);
            }
            m_enter_coro_context(shared_from_this());
            m_tasks[i].handle.resume();
            m_leave_coro_context(shared_from_this());
            return true;
        }
        return false;
    }

    bool mark_suspended(std::size_t i, std::optional<std::coroutine_handle<>> dep = std::nullopt)
    {
        assert(i < m_tasks.size());
        if (!m_tasks[i].suspended) {
            log(
                [&dep](std::ostream &stream) -> std::ostream & {
                    if (dep) {
                        if (dep->done()) {
                            return stream << "SUSPENDED. DEP ALREADY DONE";
                        }
                        return stream << "SUSPENDED BY DEP";
                    }
                    return stream << "SUSPENDED";
                },
                m_tasks[i].loc);

            m_tasks[i].suspended = true;
            assert(!m_tasks[i].dep);
            if (dep && !dep->done()) {
                m_tasks[i].dep = dep;
            }

            for (const auto &s : m_subscribers) {
                s->task_suspended(*this, i, m_tasks[i]);
            }

            return true;
        }
        return false;
    }

    std::optional<std::size_t> index_of(std::coroutine_handle<> h) const
    {
        for (std::size_t i = 0; i < m_tasks.size(); ++i) {
            if (m_tasks[i].handle == h) {
                return i;
            }
        }
        return std::nullopt;
    }

    bool remove_if_done(std::size_t i)
    {
        assert(i < m_tasks.size());
        if (m_tasks[i].handle.done()) {
            log([](std::ostream &stream) -> std::ostream & { return stream << "DONE"; },
                m_tasks[i].loc);

            for (std::size_t j = 0; j < m_tasks.size(); ++j) {
                if (m_tasks[j].dep == m_tasks[i].handle) {
                    log([](std::ostream &stream) -> std::ostream & { return stream << "DEP SOLVED"; },
                        m_tasks[i].loc);
                    m_tasks[j].dep = std::nullopt;
                    break;
                }
            }

            for (const auto &s : m_subscribers) {
                s->task_finished(*this, i, m_tasks[i]);
            }

            m_tasks.erase(m_tasks.begin() + i);
            if (m_i >= m_tasks.size())
                m_i = 0;
            return true;
        }
        return false;
    }

protected:
    /**
     * @brief log - print logs
     * @param printer - stream printer functor `(std::stream&) -> std::stream&`
     * @param loc - code location
     */
    template<stream_printer P>
    void log(P &&printer, source_location loc = source_location::current())
    {
        if (m_logger) {
            std::ostringstream ss;
            printer(ss);
            m_logger(loc, ss.str());
        }
    }

private:
    function<void(shared<default_dispatcher>&&)> m_enter_coro_context;
    function<void(shared<default_dispatcher>&&)> m_leave_coro_context;
    std::size_t m_i = 0;
    std::vector<task_info> m_tasks;
    logger m_logger;
    std::set<shared<subscriber>> m_subscribers;
};

} // namespace coschedula
