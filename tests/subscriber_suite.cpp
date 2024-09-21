// Copyright 2023 Borys Boiko

#include "../src/async.h"
#include "../src/runners.h"
#include "../src/utils.h"
#include <gtest/gtest.h>
#include <list>
#include <string>

namespace coschedula::tests {

class recorder : public subscriber {
public:
    enum class event_type {
        task_started,
        task_finished,
        task_suspended,
        task_resumed,
    };

    friend std::ostream& operator<<(std::ostream& stream, const event_type& e)
    {
        switch (e) {
        case recorder::event_type::task_started:
            return stream << "task_started";
        case recorder::event_type::task_finished:
            return stream << "task_finished";
        case recorder::event_type::task_suspended:
            return stream << "task_suspended";
        case recorder::event_type::task_resumed:
            return stream << "task_resumed";
        }
        unreachable();
    }

    struct event {
        std::size_t dispatcher_index;
        std::size_t task_index;
        event_type type;

        bool operator==(const event&) const = default;

        friend std::ostream& operator<<(std::ostream& stream, const event& e)
        {
            return stream << "{ " << e.dispatcher_index << ", " << e.task_index << ", " << e.type << " }";
        }
    };

    static shared<recorder> create()
    {
        return std::make_shared<recorder>();
    }

    const auto& log() const
    {
        return m_log;
    }

    // subscriber interface
public:
    void task_started(const dispatcher& d, std::size_t task_index, const task_info&) override
    {
        std::lock_guard g(m_mutex);
        m_log.push_back({ .dispatcher_index = dispatcher_index(d), .task_index = task_index, .type = event_type::task_started });
    }

    void task_finished(const dispatcher& d, std::size_t task_index, const task_info&) override
    {
        std::lock_guard g(m_mutex);
        m_log.push_back({ .dispatcher_index = dispatcher_index(d), .task_index = task_index, .type = event_type::task_finished });
    }

    void task_suspended(const dispatcher& d, std::size_t task_index, const task_info&) override
    {
        std::lock_guard g(m_mutex);
        m_log.push_back({ .dispatcher_index = dispatcher_index(d), .task_index = task_index, .type = event_type::task_suspended });
    }

    void task_resumed(const dispatcher& d, std::size_t task_index, const task_info&) override
    {
        std::lock_guard g(m_mutex);
        m_log.push_back({ .dispatcher_index = dispatcher_index(d), .task_index = task_index, .type = event_type::task_resumed });
    }

private:
    std::size_t dispatcher_index(const dispatcher& d)
    {
        auto it = m_dispatcher_indices.find(&d);
        if (it == m_dispatcher_indices.end()) {
            it = m_dispatcher_indices.insert(it, { &d, m_next_dispatcher_index++ });
        }
        return it->second;
    }

private:
    std::recursive_mutex m_mutex;
    std::map<ptr<const dispatcher>, std::size_t> m_dispatcher_indices;
    std::size_t m_next_dispatcher_index = 0;
    std::list<event> m_log;
};

TEST(subscriber_suite, thread)
{
    const auto rec = recorder::create();

    runners::thread(schedulers::rr::create(), { rec }, []() -> task<void> {
        co_await suspend {};
        co_await suspend {};
    }).join();

    using enum recorder::event_type;
    const std::list expected = {
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_started },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_finished },
    };
    ASSERT_EQ(rec->log(), expected);
}

TEST(subscriber_suite, async)
{
    const auto rec = recorder::create();

    runners::async(schedulers::rr::create(), { rec }, []() -> task<std::string> {
        co_await suspend {};
        co_await suspend {};
        co_return "ssss";
    }).wait();

    using enum recorder::event_type;
    const std::list expected = {
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_started },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_finished },
    };
    ASSERT_EQ(rec->log(), expected);
}

TEST(subscriber_suite, block_on)
{
    const auto rec = recorder::create();

    const auto v = runners::block_on(schedulers::rr::create(), { rec }, []() -> task<std::string> {
        co_await suspend {};
        co_await suspend {};
        co_return "ssss";
    });

    using enum recorder::event_type;
    const std::list expected = {
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_started },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_finished },
    };
    ASSERT_EQ(rec->log(), expected);
}

TEST(subscriber_suite, concurrent)
{
    const auto rec = recorder::create();

    runners::concurrent(schedulers::rr::create(), { rec }, []() -> task<std::string> {
        co_await suspend {};
        co_await suspend {};
        co_return "ssss";
    }).wait();

    using enum recorder::event_type;
    const std::list expected = {
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_started },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_finished },
    };
    ASSERT_EQ(rec->log(), expected);
}

TEST(subscriber_suite, two_tasks)
{
    const auto rec = recorder::create();

    runners::block_on(schedulers::rr::create(), { rec }, []() -> task<std::string> {
        co_await suspend {};
        const auto t = []() -> task<void> {
            co_await suspend {};
        }();
        co_await suspend {};
        co_await t;
        co_await suspend {};
        co_return "ssss";
    });

    using enum recorder::event_type;
    const std::list expected = {
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_started },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 1, .type = task_started },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 1, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 1, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 1, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 1, .type = task_finished },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_suspended },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_resumed },
        recorder::event { .dispatcher_index = 0, .task_index = 0, .type = task_finished },
    };
    ASSERT_EQ(rec->log(), expected);
}

} // namespace coschedula::tests
