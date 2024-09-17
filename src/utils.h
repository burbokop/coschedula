// Copyright 2023 Borys Boiko

#pragma once

#include <cassert>

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
#if __cplusplus >= 202302L
[[deprecated("Use auto{} instead")]]
#endif
T copy(const T &v)
{
    return v;
}

decltype(auto) deref_assert(auto&& v)
{
    assert(v);
    return *v;
}

} // namespace coschedula
