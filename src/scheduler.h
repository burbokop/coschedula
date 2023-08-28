// Copyright 2023 Borys Boiko

#pragma once

#include "source_location.h"
#include <cassert>
#include <coroutine>
#include <functional>
#include <optional>
#include <ostream>
#include <set>
#include <sstream>

namespace coschedula {

template<typename T>
concept stream_printer = requires(T v, std::ostream &s) { v(s); };

/**
 * @brief The scheduler class - provides scheduling mechanism for all task related to it
 * The scheduler has single active instance for specific type derived from `scheduler` held in `scheduler::instance`
 * @note To create some bunch of coroutines working with one scheduler instance and another bunch with second instance you need to create two different types derived from `scheduler`
 */
struct scheduler
{
    scheduler() = default;
    scheduler(const scheduler &) = delete;
    scheduler(scheduler &&) = delete;

    using logger = std::function<void(source_location loc, const std::string &)>;

    template<std::derived_from<scheduler> S>
    inline static S instance;

    struct task_info
    {
        std::coroutine_handle<> h;
        bool suspended;
        source_location loc;
        std::optional<std::coroutine_handle<>> dep;
    };

    class subscriber
    {
    public:
        subscriber() = default;
        virtual ~subscriber() = default;

        subscriber(const subscriber &) = delete;
        subscriber(subscriber &&) = delete;

        virtual void task_started(const task_info &) = 0;
        virtual void task_finished(const task_info &) = 0;
        virtual void task_suspended(const task_info &) = 0;
        virtual void task_resumed(const task_info &) = 0;

    private:
    };

    void add_initialy_suspended(std::coroutine_handle<> h,
                                source_location loc = source_location::current())
    {
        m_tasks.push_back({.h = h, .suspended = true, .loc = loc, .dep = std::nullopt});
        log([](std::ostream &stream) -> std::ostream & { return stream << "ADDED AND SUSPENDED"; },
            loc);

        for (const auto &s : m_subscribers) {
            s->task_started(m_tasks.back());
        }
    }

    bool resume(std::size_t i)
    {
        assert(i < m_tasks.size());
        if (m_tasks[i].suspended && !m_tasks[i].dep) {
            m_tasks[i].suspended = false;
            log([](std::ostream &stream) -> std::ostream & { return stream << "RESUMED"; },
                m_tasks[i].loc);

            for (const auto &s : m_subscribers) {
                s->task_resumed(m_tasks[i]);
            }
            m_tasks[i].h.resume();
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
                s->task_suspended(m_tasks[i]);
            }

            return true;
        }
        return false;
    }

    std::optional<std::size_t> indexOf(std::coroutine_handle<> h)
    {
        for (std::size_t i = 0; i < m_tasks.size(); ++i) {
            if (m_tasks[i].h == h) {
                return i;
            }
        }
        return std::nullopt;
    }

    bool remove_if_done(std::size_t i)
    {
        assert(i < m_tasks.size());
        if (m_tasks[i].h.done()) {
            log([](std::ostream &stream) -> std::ostream & { return stream << "DONE"; },
                m_tasks[i].loc);

            for (std::size_t j = 0; j < m_tasks.size(); ++j) {
                if (m_tasks[j].dep == m_tasks[i].h) {
                    log([](std::ostream &stream) -> std::ostream & { return stream << "DEP SOLVED"; },
                        m_tasks[i].loc);
                    m_tasks[j].dep = std::nullopt;
                    break;
                }
            }

            for (const auto &s : m_subscribers) {
                s->task_finished(m_tasks[i]);
            }

            m_tasks.erase(m_tasks.begin() + i);
            if (m_i >= m_tasks.size())
                m_i = 0;
            return true;
        }
        return false;
    }

    /**
     * @brief proceed - do one cicle of scheduling
     * Can be called in while:
     * ```
     * while(scheduler::instance<scheduler>::proceed()){}
     * ```
     * or in some timer if using with some frameworks
     * @return true if all tasks completed
     */
    bool proceed()
    {
        if (m_tasks.empty()) {
            m_i = 0;
            return false;
        }

        if (remove_if_done(m_i)) {
            return true;
        }

        resume(m_i);

        m_i = next(m_i);
        return true;
    }

    /**
     * @brief proceed_until_empty - block current thread untill all tasks done
     * @return true if any task was executed
     */
    bool proceed_until_empty()
    {
        if (m_tasks.empty()) {
            return false;
        }
        while (proceed()) {
        }
        return true;
    }

    /**
     * @brief installLogger - set logger
     * @default logs disabled
     * @param logger
     */
    void install_logger(logger logger) { m_logger = logger; }

    bool install_subscriber(subscriber &s) { return m_subscribers.insert(&s).second; }
    bool deinstall_subscriber(subscriber &s) { return m_subscribers.erase(&s) != 0; }

    /**
     * @brief tasks - current running tasks
     */
    const std::vector<task_info> &tasks() const { return m_tasks; };

protected:
    /**
     * @brief next - calculate next task to give control
     * @param current - current running task
     * @note override if you want to specify another scheduling rule
     */
    virtual std::size_t next(std::size_t current) { return (current + 1) % m_tasks.size(); }

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
    std::size_t m_i = 0;
    std::vector<task_info> m_tasks;
    logger m_logger;
    std::set<subscriber *> m_subscribers;
};

/**
 * @brief The suspend class - suspends current coroutine and ask scheduler to give controls to another
 * Example:
 * ```
 * co_await coschedula::suspend{};
 * ```
 */
class suspend
{
public:
    auto operator co_await() { return awaiter{}; }

private:
    struct awaiter
    {
        constexpr bool await_ready() const noexcept { return false; }

        template<typename P>
        void await_suspend(std::coroutine_handle<P> h) const noexcept
        {
            auto &s = scheduler::instance<typename P::related_scheduler>;
            if (auto i = s.indexOf(h)) {
                const auto ok = s.mark_suspended(*i);
                assert(ok);
            }
        }

        void await_resume() const noexcept {}
    };
};

} // namespace coschedula
