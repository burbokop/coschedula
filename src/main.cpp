// Copyright 2023 Borys Boiko

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

#include "task.h"
#include "test.h"

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

std::function<std::ostream &(std::ostream &)> print(coschedula::source_location loc)
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

coschedula::task<int> foo()
{
    co_await coschedula::suspend{};
    co_await coschedula::suspend{};
    co_await coschedula::suspend{};

    co_return 10;
}

coschedula::task<int> gog()
{
    co_await coschedula::suspend{};

    co_return 5;
}

coschedula::task<std::string> bar()
{
    const auto f = foo();
    const auto g = gog();

    const auto fv = co_await f;
    const auto gv = co_await g;

    co_return std::to_string(fv) + ":" + std::to_string(gv);
}

int main()
{
    coschedula::scheduler::instance<coschedula::scheduler>.install_logger(
        [](coschedula::source_location loc, const std::string &message) {
            std::cout << Yellow << print(loc) << ": " << message << Reset << std::endl;
        });

    test();

    //aaa<int>();

    //auto a = foo();
    auto b = bar();

    while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
    }

    std::cout << "Hello World! " << b.result().value() << std::endl;
    return 0;
}
