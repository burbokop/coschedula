// Copyright 2023 Borys Boiko

#pragma once

#include <cassert>
#include <coroutine>
#include <functional>
#include <optional>
#include <ostream>
#include <source_location>
#include <sstream>

namespace coschedula {

template<typename T>
concept stream_printer = requires(T v, std::ostream &s) { v(s); };

struct scheduler
{
    scheduler() = default;
    scheduler(const scheduler &) = delete;
    scheduler(scheduler &&) = delete;

    using Logger = std::function<void(std::source_location loc, const std::string &)>;

    template<std::derived_from<scheduler> S>
    inline static S instance;

    struct task_info
    {
        std::coroutine_handle<> h;
        bool suspended;
        std::source_location loc;
        std::optional<std::coroutine_handle<>> dep;
    };

    void add_initialy_suspended(std::coroutine_handle<> h,
                                std::source_location loc = std::source_location::current())
    {
        m_tasks.push_back({.h = h, .suspended = true, .loc = loc, .dep = std::nullopt});
        log([](std::ostream &stream) -> std::ostream & { return stream << "ADDED AND SUSPENDED"; },
            loc);
    }

    bool resume(std::size_t i)
    {
        assert(i < m_tasks.size());
        if (m_tasks[i].suspended && !m_tasks[i].dep) {
            m_tasks[i].suspended = false;
            log([](std::ostream &stream) -> std::ostream & { return stream << "RESUMED"; },
                m_tasks[i].loc);
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

            m_tasks.erase(m_tasks.begin() + i);
            if (m_i >= m_tasks.size())
                m_i = 0;
            return true;
        }
        return false;
    }

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

    bool proceed_until_empty()
    {
        if (m_tasks.empty()) {
            return false;
        }
        while (proceed()) {
        }
        return true;
    }

    void installLogger(Logger logger) { m_logger = logger; }

    const std::vector<task_info> &tasks() const { return m_tasks; };

protected:
    virtual std::size_t next(std::size_t current) { return (current + 1) % m_tasks.size(); }

    template<stream_printer P>
    void log(P &&printer, std::source_location loc = std::source_location::current())
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
    Logger m_logger;
};

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
