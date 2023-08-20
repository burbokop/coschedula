#pragma once

#include <random>

namespace coschedula::benchmarks::utils {

template<typename T>
T gen_num()
{
    std::random_device rd;
    std::uniform_int_distribution<T> dist(std::numeric_limits<T>::min(),
                                          std::numeric_limits<T>::max());
    return dist(rd);
}

inline std::string gen_string(std::size_t len)
{
    std::string result;
    result.reserve(len);
    for (std::size_t i = 0; i < len; ++i) {
        std::random_device rd;
        std::uniform_int_distribution<std::uint16_t> dist('a', 'z');
        result += static_cast<std::string::value_type>(dist(rd));
    }
    return result;
}

inline std::string gen_text(std::size_t word_len, std::size_t count)
{
    std::string result;
    result.reserve(word_len * count);
    for (std::size_t i = 0; i < count; ++i) {
        result += word_len;
        if (i < count - 1) {
            result += ' ';
        }
    }
    return result;
}

} // namespace coschedula::benchmarks::utils
