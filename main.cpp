#include <algorithm>
#include <coroutine>
#include <functional>
#include <iostream>

#include <assert.h>
#include <concepts>
#include <list>
#include <optional>
#include <source_location>
#include <utility>
#include <vector>

constexpr const char *Black = "\x1B[30m";
constexpr const char *Red = "\x1B[31m";
constexpr const char *Green = "\x1B[32m";
constexpr const char *Yellow = "\x1B[33m";
constexpr const char *Blue = "\x1B[34m";
constexpr const char *Magenta = "\x1B[35m";
constexpr const char *Cyan = "\x1B[36m";
constexpr const char *White = "\x1B[37m";
constexpr const char *BrightBlack = "\x1B[90m";
constexpr const char *BrightRed = "\x1B[91m";
constexpr const char *BrightGreen = "\x1B[92m";
constexpr const char *BrightYellow = "\x1B[93m";
constexpr const char *BrightBlue = "\x1B[94m";
constexpr const char *BrightMagenta = "\x1B[95m";
constexpr const char *BrightCyan = "\x1B[96m";
constexpr const char *BrightWhite = "\x1B[97m";

constexpr const char *Reset = "\033[0m";

std::function<std::ostream &(std::ostream &)> print(std::source_location loc)
{
    return [loc](std::ostream &s) -> std::ostream & {
        return s << "file://" << loc.file_name() << ":" << loc.line() << " " << loc.function_name();
    };
}
std::ostream &operator<<(std::ostream &stream,
                         const std::function<std::ostream &(std::ostream &)> &f)
{
    return f(stream);
}

struct scheduler
{
    scheduler() = default;
    scheduler(const scheduler &) = delete;
    scheduler(scheduler &&) = delete;

    template<std::derived_from<scheduler> S>
    inline static S instance;

    struct task
    {
        std::coroutine_handle<> h;
        bool suspended;
        std::source_location loc;
        std::optional<std::coroutine_handle<>> dep;
    };

    bool resume(std::size_t i)
    {
        assert(i < tasks.size());
        if (tasks[i].suspended && !tasks[i].dep) {
            tasks[i].suspended = false;
            std::cout << Yellow << "RESUMED: " << print(tasks[i].loc) << Reset << std::endl;
            tasks[i].h.resume();
            return true;
        }
        return false;
    }

    bool mark_suspended(std::size_t i, std::optional<std::coroutine_handle<>> dep = std::nullopt)
    {
        assert(i < tasks.size());
        if (!tasks[i].suspended) {
            if (dep) {
                if (dep->done()) {
                    std::cout << Yellow << "SUSPENDED. DEP ALREADY DONE" << print(tasks[i].loc)
                              << Reset << std::endl;
                } else {
                    std::cout << Yellow << "SUSPENDED BY DEP" << print(tasks[i].loc) << Reset
                              << std::endl;
                }
            } else {
                std::cout << Yellow << "SUSPENDED: " << print(tasks[i].loc) << Reset << std::endl;
            }

            tasks[i].suspended = true;
            if (!dep->done()) {
                assert(!tasks[i].dep);
                tasks[i].dep = dep;
            }
            return true;
        }
        return false;
    }

    std::optional<std::size_t> indexOf(std::coroutine_handle<> h)
    {
        for (std::size_t i = 0; i < tasks.size(); ++i) {
            if (tasks[i].h == h) {
                return i;
            }
        }
        return std::nullopt;
    }

    auto suspend()
    {
        struct awaiter
        {
            scheduler &s;
            constexpr bool await_ready() const noexcept { return false; }

            void await_suspend(std::coroutine_handle<> h) const noexcept
            {
                //std::cout << __PRETTY_FUNCTION__ << std::endl;
                if (auto i = s.indexOf(h)) {
                    //std::cout << __PRETTY_FUNCTION__ << " 2" << std::endl;
                    const auto ok = s.mark_suspended(*i);
                    assert(ok);
                }
                //std::cout << __PRETTY_FUNCTION__ << " 3" << std::endl;
            }

            void await_resume() const noexcept
            {
                //std::cout << __PRETTY_FUNCTION__ << std::endl;
            }
        };
        return awaiter{*this};
    }

    bool remove_if_done(std::size_t i)
    {
        assert(i < tasks.size());
        if (tasks[i].h.done()) {
            std::cout << Yellow << "DONE: " << print(tasks[i].loc) << Reset << std::endl;

            for (std::size_t j = 0; j < tasks.size(); ++j) {
                if (tasks[j].dep == tasks[i].h) {
                    std::cout << Yellow << "DEP SOLVED" << Reset << std::endl;
                    tasks[j].dep = std::nullopt;
                }
            }

            tasks.erase(tasks.begin() + i);
            if (this->i >= tasks.size())
                this->i = 0;
            return true;
        }
        return false;
    }

    bool proceed()
    {
        if (tasks.empty())
            return false;

        if (remove_if_done(i)) {
            return true;
        }

        resume(i);

        i = (i + 1) % tasks.size();
        return true;
    }

    std::size_t i = 0;
    std::vector<task> tasks;
};

template<std::derived_from<scheduler> S>
struct suspend
{
    auto operator co_await() { return scheduler::instance<S>.suspend(); }
};

template<std::derived_from<scheduler> S>
struct cora
{
    struct init_suspend
    {
        constexpr bool await_ready() const noexcept { return false; }
        template<typename P>
        void await_suspend(std::coroutine_handle<P> h,
                           std::source_location loc = std::source_location::current()) const noexcept
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
            auto &sch = scheduler::instance<S>;
            sch.tasks.push_back({.h = h, .suspended = true, .loc = loc, .dep = std::nullopt});
            std::cout << Yellow << "ADDED AND SUSPENDED: " << print(loc) << Reset << std::endl;
        }

        void await_resume() const noexcept
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
        }
    };

    auto operator co_await()
    {
        struct awaiter
        {
            promise_type &p;

            constexpr bool await_ready() const noexcept { return false; }
            void await_suspend(std::coroutine_handle<promise_type> h) const noexcept
            {
                auto &sch = scheduler::instance<S>;
                if (auto i = sch.indexOf(h)) {
                    //std::cout << __PRETTY_FUNCTION__ << " 2" << std::endl;
                    const auto ok
                        = sch.mark_suspended(*i,
                                             std::coroutine_handle<promise_type>::from_promise(p));
                    assert(ok);
                }
            }

            void await_resume() const noexcept
            { //std::cout << __PRETTY_FUNCTION__ << std::endl;
            }
        };
        return awaiter{handle.promise()};
    }

    struct promise_type
    {
        promise_type()
        { //std::cout << __PRETTY_FUNCTION__ << std::endl;
        }
        ~promise_type()
        { //std::cout << __PRETTY_FUNCTION__ << std::endl;
        }

        cora get_return_object() noexcept
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
            return {*this};
        }
        init_suspend initial_suspend() noexcept
        {
            //std::cout << __PRETTY_FUNCTION__ << std::endl;
            return {};
        };
        std::suspend_always final_suspend() noexcept
        {
            // std::cout << __PRETTY_FUNCTION__ << std::endl;
            return {};
        };
        //void return_void() noexcept { std::cout << __PRETTY_FUNCTION__ << std::endl; }
        void return_value(int v) noexcept
        {
            std::cout << __PRETTY_FUNCTION__ << " " << v << std::endl;
        }
        void unhandled_exception() { std::cout << __PRETTY_FUNCTION__ << std::endl; }
    };

    cora(promise_type &p)
        : handle(std::coroutine_handle<promise_type>::from_promise(p))
    {
        //std::cout << __PRETTY_FUNCTION__ << std::endl;
    }
    cora(cora &&c)
        : handle(std::exchange(c.handle, nullptr))
    {}
    cora(const cora &p) = delete;

    ~cora()
    {
        if (handle && handle.done()) {
            handle.destroy();
        }
        // std::cout << __PRETTY_FUNCTION__ << std::endl;
    }

    std::coroutine_handle<promise_type> handle;
};

cora<scheduler> foo()
{
    co_await suspend<scheduler>{};
    co_await suspend<scheduler>{};
    co_await suspend<scheduler>{};

    co_return 10;
}

cora<scheduler> gog()
{
    co_await suspend<scheduler>{};

    co_return 5;
}

cora<scheduler> bar()
{
    auto f = foo();
    auto g = gog();

    co_await f;
    co_await g;

    co_return 12;
}

int main()
{
    //aaa<int>();

    //auto a = foo();
    auto b = bar();

    while (scheduler::instance<scheduler>.proceed()) {
    }

    std::cout << "Hello World!" << std::endl;
    return 0;
}
