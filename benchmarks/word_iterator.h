#pragma once

#include <iterator>

namespace coschedula::benchmarks::utils {

template<typename S>
class word_iterator
{
public:
    using iterator_category = std::input_iterator_tag;
    using difference_type = std::ptrdiff_t;
    using value_type = S;
    using pointer = value_type *;
    using reference = value_type &;

    using source_iterator = typename S::const_iterator;

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

} // namespace coschedula::benchmarks::utils
