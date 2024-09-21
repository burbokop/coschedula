// Copyright 2023 Borys Boiko

#pragma once

#include <cassert>
#include <cstdlib>

namespace coschedula {

/**
 * @brief copy
 * Example:
 * ```
 * foo(T&&);
 * 
 * bar0(const T& v) {
 *     foo(v) // compilation error
 * }
 *
 * bar1(const T& v) {
 *     auto c = v;
 *     foo(std::move(c)) // may produce unoptimized bytecode (and also ugly)
 * }
 * 
 * bar2(const T& v) {
 *     foo(copy(v)) // OK
 * }
 * ```
 */
template<typename T>
#if __cpp_auto_cast >= 202110L
[[deprecated("Use auto{} instead")]]
#endif
T copy(const T& v)
{
    return v;
}

decltype(auto) deref_assert(auto&& v)
{
    assert(v);
    return *v;
}

#if __cpp_lib_unreachable >= 202202L
[[deprecated("Use std::unreachable instead")]]
#endif
[[noreturn]]
inline void unreachable()
{
    std::abort();
}

} // namespace coschedula
