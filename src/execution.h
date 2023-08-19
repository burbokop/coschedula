// Copyright 2023 Borys Boiko

#pragma once

namespace coschedula {

/**
 * @brief The execution enum
 * @value par - execute in another thread
 * @value seq - block current thread until job done
 * @value seq_async - execute job by portions and periodically ask scheduler to change context
 */
enum class execution { par, seq, seq_async };
}
