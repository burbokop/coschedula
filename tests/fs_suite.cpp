// Copyright 2023 Borys Boiko

#include "../src/fs.h"
#include <gtest/gtest.h>
#include <list>
#include <string>

namespace coschedula::tests {

TEST(fs_suite, read_seq)
{
    struct s : public scheduler
    {};

    const auto path = "fs_suite_read_seq_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto t = fs::read<std::string::value_type, execution::seq, s>(path);

    ASSERT_FALSE(t.done());
    ASSERT_TRUE(scheduler::instance<s>.proceed_until_empty());
    ASSERT_TRUE(t.done());
    ASSERT_EQ(t.result(), content);
}

TEST(fs_suite, read_seq_async)
{
    struct s : public scheduler
    {};

    const auto path = "fs_suite_read_seq_async_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto t = fs::read<std::string::value_type, execution::seq_async, s>(path);

    ASSERT_FALSE(t.done());
    ASSERT_TRUE(scheduler::instance<s>.proceed_until_empty());
    ASSERT_TRUE(t.done());
    ASSERT_EQ(t.result(), content);
}

TEST(fs_suite, read_par)
{
    struct s : public scheduler
    {};

    const auto path = "fs_suite_read_par_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto t = fs::read<std::string::value_type, execution::par, s>(path);

    ASSERT_FALSE(t.done());
    ASSERT_TRUE(scheduler::instance<s>.proceed_until_empty());
    ASSERT_TRUE(t.done());
    ASSERT_EQ(t.result(), content);
}

} // namespace coschedula::tests
