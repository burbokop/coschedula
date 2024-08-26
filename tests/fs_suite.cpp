// Copyright 2023 Borys Boiko

#include "../src/fs.h"
#include "../src/global_scheduler.h"
#include "../src/utils.h"
#include <gtest/gtest.h>
#include <list>
#include <string>

namespace coschedula::tests {

TEST(fs_suite, read_seq)
{
    struct s : public default_task_registry
    {};

    const auto path = "fs_suite_read_seq_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto t = fs::read<std::string::value_type, execution::seq, global_scheduler<s>>(path);

    ASSERT_FALSE(t.done());
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_TRUE(t.done());
    ASSERT_EQ(t.result(), content);
}

TEST(fs_suite, read_seq_async)
{
    struct s : public default_task_registry
    {};

    const auto path = "fs_suite_read_seq_async_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto t = fs::read<std::string::value_type, execution::seq_async, global_scheduler<s>>(
        path);

    ASSERT_FALSE(t.done());
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_TRUE(t.done());
    ASSERT_EQ(t.result(), content);
}

TEST(fs_suite, read_par)
{
    struct s : public default_task_registry
    {};

    const auto path = "fs_suite_read_par_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto t = fs::read<std::string::value_type, execution::par, global_scheduler<s>>(path);

    ASSERT_FALSE(t.done());
    ASSERT_TRUE(proceed_until_empty<global_scheduler<s>>());
    ASSERT_TRUE(t.done());
    ASSERT_EQ(t.result(), content);
}

} // namespace coschedula::tests
