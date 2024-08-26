// Copyright 2023 Borys Boiko

#pragma once

#include "default_task_registry.h"
#include "per_thread_scheduler.h"

namespace coschedula {

// TODO add option to cmake defining default scheduler and add ability to disable specific schedulers on compile time
using default_scheduler = per_thread_scheduler<default_task_registry>;

} // namespace coschedula
