// Copyright 2023 Borys Boiko

#include "test.h"

#include "async.h"
#include "fs.h"
#include <iostream>
#include <string>
#include <utility>

namespace std {

template<typename T>
std::ostream &operator<<(std::ostream &stream, const std::optional<T> &o)
{
    if (o) {
        return stream << *o;
    } else {
        return stream << "std::nullopt";
    }
}

template<typename L, typename R>
std::ostream &operator<<(std::ostream &stream, const std::pair<L, R> &o)
{
    return stream << "{ " << o.first << ", " << o.second << " }";
}

} // namespace std

coschedula::task<int, coschedula::scheduler> threadTask(std::chrono::seconds sec, int num)
{
    std::cout << __FUNCTION__ << " begin " << num << std::endl;
    volatile bool done = false;
    std::thread thread = std::thread([&done, num, sec]() {
        std::this_thread::sleep_for(sec);
        done = true;
    });
    thread.detach();
    while (!done) {
        co_await coschedula::suspend{};
    }
    std::cout << __FUNCTION__ << " end " << num << std::endl;
    co_return num * 10;
}

template<typename S>
class word_iterator
{
public:
    using source_iterator = typename S::const_iterator;
    using value_type = S;

    word_iterator() = default;

    word_iterator(const S &source)
        : m_it(source.begin())
        , m_end(source.end())
    {
        m_v = next_word();
    }

    auto &operator++()
    {
        m_v = next_word();
        return *this;
    }

    const value_type &operator*() const { return m_v; }

    bool operator==(const word_iterator &other) const { return eof() == other.eof(); }
    bool operator!=(const word_iterator &other) const { return !operator==(other); }

private:
    bool eof() const { return m_v.empty() && m_it == m_end; }

    auto next_word()
    {
        value_type result;

        const auto &&is_space = [](typename S::value_type t) {
            return t == ' ' || t == '\n' || t == '\t';
        };
        for (; m_it != m_end && is_space(*m_it); m_it++) {
        }

        for (; m_it != m_end && !is_space(*m_it); ++m_it) {
            result += *m_it;
        }
        return result;
    }

private:
    source_iterator m_it;
    source_iterator m_end;
    value_type m_v;
};

std::size_t count_similar_words_impl(const std::string &data0, const std::string &data1)
{
    std::size_t result = 0;
    std::size_t i = 0;
    for (word_iterator it0(data0); it0 != word_iterator<std::string>(); ++it0) {
        for (word_iterator it1(data1); it1 != word_iterator<std::string>(); ++it1) {
            if (*it0 == *it1) {
                ++result;
            }
            if (i++ > 3000000)
                return result;
        }
    }
    return result;
}

coschedula::task<std::size_t, coschedula::scheduler> count_similar_words(const std::string &data0,
                                                                         const std::string &data1)
{
    return coschedula::async<std::size_t>(count_similar_words_impl, data0, data0);
}

bool are_numbers_similar(const std::string &str0, const std::string &str1)
{
    try {
        return std::stoi(str0) == std::stoi(str1);
    } catch (...) {
        return false;
    }
}

std::size_t count_similar_numbers_impl(const std::string &data0, const std::string &data1)
{
    std::size_t result = 0;
    std::size_t i = 0;
    for (word_iterator it0(data0); it0 != word_iterator<std::string>(); ++it0) {
        for (word_iterator it1(data1); it1 != word_iterator<std::string>(); ++it1) {
            if (are_numbers_similar(*it0, *it1)) {
                ++result;
            }
            if (i++ > 3000000)
                return result;
        }
    }
    return result;
}

coschedula::task<std::size_t, coschedula::scheduler> count_similar_numbers(const std::string &data0,
                                                                           const std::string &data1)
{
    return coschedula::async<std::size_t>(count_similar_numbers_impl, data0, data1);
}

coschedula::task<std::string, coschedula::scheduler> wholeTask()
{
    using std::chrono::seconds;

    std::cout << __FUNCTION__ << " begin " << std::endl;
    const auto result1 = threadTask(seconds(2), 1);

    const auto a = co_await threadTask(seconds(1), 2);

    std::cout << __FUNCTION__ << " 4: " << a << std::endl;
    const auto content = co_await coschedula::fs::read<char, coschedula::execution::seq_async>(
        "/home/borys/projects/cpp/some_package/CMakeLists.txt");

    std::cout << __FUNCTION__ << " 5: " << content.size() << std::endl;

    threadTask(seconds(1), 3);

    std::cout << __FUNCTION__ << " end " << std::endl;
    co_await coschedula::suspend{};
    co_return "gogadoda";
}

template<coschedula::execution exec>
coschedula::task<std::pair<std::size_t, std::size_t>, coschedula::scheduler>
count_similar_words_and_numbers_slow(const std::filesystem::path &p0,
                                     const std::filesystem::path &p1)
{
    const auto c0 = co_await coschedula::fs::read<char, exec>(p0);
    const auto c1 = co_await coschedula::fs::read<char, exec>(p1);

    const auto similar_words = co_await count_similar_words(c0, c1);
    const auto similar_numbers = co_await count_similar_numbers(c0, c1);

    co_return {similar_words, similar_numbers};
}

template<coschedula::execution exec>
coschedula::task<std::pair<std::size_t, std::size_t>, coschedula::scheduler>
count_similar_words_and_numbers_fast(const std::filesystem::path &p0,
                                     const std::filesystem::path &p1)
{
    auto c0task = coschedula::fs::read<char, exec>(p0);
    auto c1task = coschedula::fs::read<char, exec>(p1);

    const auto c0 = co_await c0task;
    const auto c1 = co_await c1task;

    const auto similar_words = co_await count_similar_words(c0, c1);
    const auto similar_numbers = co_await count_similar_numbers(c0, c1);

    co_return {similar_words, similar_numbers};
}

template<coschedula::execution exec>
coschedula::task<std::pair<std::size_t, std::size_t>, coschedula::scheduler>
count_similar_words_and_numbers_fast2(const std::filesystem::path &p0,
                                      const std::filesystem::path &p1)
{
    auto c0task = coschedula::fs::read<char, exec>(p0);
    auto c1task = coschedula::fs::read<char, exec>(p1);

    const auto c0 = co_await c0task;
    const auto c1 = co_await c1task;

    auto similar_words_task = count_similar_words(c0, c1);
    auto similar_numbers_task = count_similar_numbers(c0, c1);

    const auto similar_words = co_await similar_words_task;
    const auto similar_numbers = co_await similar_numbers_task;

    co_return {similar_words, similar_numbers};
}

void count_time(const std::string &name, auto &&f)
{
    const auto begin = std::chrono::high_resolution_clock::now();
    const auto res = f(name);
    const auto dur = std::chrono::high_resolution_clock::now() - begin;
    std::cout << name << " -> "
              << std::chrono::duration_cast<std::chrono::milliseconds>(dur).count()
              << " (res: " << res << ")" << std::endl;
}

template<typename C = std::string::value_type>
auto simple_read(const std::filesystem::path &path)
{
    std::ifstream stream(path);
    return std::basic_string<C>((std::istreambuf_iterator<C>(stream)),
                                std::istreambuf_iterator<C>());
}

void test()
{
    const std::filesystem::path file0 = "~/datasets/large_text_files/bigfile0.txt";
    const std::filesystem::path file1 = "~/datasets/large_text_files/bigfile1.txt";

    {
        count_time("count_similar_words_and_numbers(simple)", [&file0, &file1](auto name) {
            const auto c0 = simple_read(file0);
            const auto c1 = simple_read(file1);

            const auto similar_words = count_similar_words_impl(c0, c1);
            const auto similar_numbers = count_similar_numbers_impl(c0, c1);

            return std::pair<std::size_t, std::size_t>{similar_words, similar_numbers};
        });
    }

    {
        count_time("count_similar_words_and_numbers_slow(seq)", [&file0, &file1](auto name) {
            auto task = count_similar_words_and_numbers_slow<coschedula::execution::seq>(file0,
                                                                                         file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });
        count_time("count_similar_words_and_numbers_slow(seq_async)", [&file0, &file1](auto name) {
            auto task
                = count_similar_words_and_numbers_slow<coschedula::execution::seq_async>(file0,
                                                                                         file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });
        count_time("count_similar_words_and_numbers_slow(par)", [&file0, &file1](auto name) {
            auto task = count_similar_words_and_numbers_slow<coschedula::execution::par>(file0,
                                                                                         file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });
    }
    {
        count_time("count_similar_words_and_numbers_fast(seq)", [&file0, &file1](auto name) {
            auto task = count_similar_words_and_numbers_fast<coschedula::execution::seq>(file0,
                                                                                         file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });

        count_time("count_similar_words_and_numbers_fast(seq_async)", [&file0, &file1](auto name) {
            auto task
                = count_similar_words_and_numbers_fast<coschedula::execution::seq_async>(file0,
                                                                                         file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });

        count_time("count_similar_words_and_numbers_fast(par)", [&file0, &file1](auto name) {
            auto task = count_similar_words_and_numbers_fast<coschedula::execution::par>(file0,
                                                                                         file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });
    }
    {
        count_time("count_similar_words_and_numbers_fast2(seq)", [&file0, &file1](auto name) {
            auto task = count_similar_words_and_numbers_fast2<coschedula::execution::seq>(file0,
                                                                                          file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });

        count_time("count_similar_words_and_numbers_fast2(seq_async)", [&file0, &file1](auto name) {
            auto task
                = count_similar_words_and_numbers_fast2<coschedula::execution::seq_async>(file0,
                                                                                          file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });

        count_time("count_similar_words_and_numbers_fast2(par)", [&file0, &file1](auto name) {
            auto task = count_similar_words_and_numbers_fast2<coschedula::execution::par>(file0,
                                                                                          file1);
            while (coschedula::scheduler::instance<coschedula::scheduler>.proceed()) {
            }
            return task.result();
        });
    }
}
