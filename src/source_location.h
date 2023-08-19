#pragma once

#if __has_include(<source_location>)
#include <source_location>
#ifdef __cpp_lib_source_location
#define coschedula_use_stl_source_location
namespace coschedula {
using source_location = std::source_location;
}

#endif
#endif

#ifndef coschedula_use_stl_source_location
#include <cstdint>

namespace coschedula {
/// Plug
class source_location
{
public:
    constexpr static auto current() noexcept { return source_location{}; }
    constexpr const char *file_name() const noexcept { return ""; }
    constexpr const char *function_name() const noexcept { return ""; }
    constexpr std::uint_least32_t line() const noexcept { return 0; }
    constexpr std::uint_least32_t column() const noexcept { return 0; }

private:
    constexpr source_location() {}
};
} // namespace coschedula
#endif
