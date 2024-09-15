// Copyright 2023 Borys Boiko

#pragma once

#include "default_task_registry.h"
#include "scheduler_selector.h"

namespace coschedula {

// TODO add option to cmake defining default scheduler and add ability to disable specific schedulers on compile time
using default_scheduler = impl::scheduler_selector<default_task_registry>;

} // namespace coschedula
