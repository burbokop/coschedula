#pragma once

#include "../src/default_scheduler.h"

namespace coschedula::tests {

template<std::derived_from<task_registry> R>
bool proceed_until_empty(R &r)
{
    bool any_done = false;
    while (r.proceed()) {
        any_done = true;
        std::this_thread::yield();
    }
    return any_done;
}

} // namespace coschedula::tests
