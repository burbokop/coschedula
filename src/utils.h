// Copyright 2023 Borys Boiko

#pragma once

#include "default_scheduler.h"
#include <thread>

namespace coschedula {

template<scheduler S = default_scheduler>
bool proceed_until_empty()
{
    bool any_done = false;
    while (S::proceed()) {
        any_done = true;
        std::this_thread::yield();
    }
    return any_done;
}

} // namespace coschedula
