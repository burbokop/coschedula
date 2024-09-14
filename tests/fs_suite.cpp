// Copyright 2023 Borys Boiko

#include "../src/fs.h"
#include "../src/runners.h"
#include <gtest/gtest.h>
#include <string>

namespace coschedula::tests {

TEST(fs_suite, read_seq)
{
    const auto path = "fs_suite_read_seq_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto result = runners::block_on(fs::read<std::string::value_type, execution::seq>, path);
    ASSERT_EQ(result, content);
}

TEST(fs_suite, read_seq_async)
{
    const auto path = "fs_suite_read_seq_async_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto result = runners::block_on(fs::read<std::string::value_type, execution::seq_async>,
                                          path);
    ASSERT_EQ(result, content);
}

TEST(fs_suite, read_par)
{
    const auto path = "fs_suite_read_par_test_data.txt";
    const auto content = "some_content";

    {
        std::ofstream(path) << content;
    }

    const auto result = runners::block_on(fs::read<std::string::value_type, execution::par>, path);
    ASSERT_EQ(result, content);
}

} // namespace coschedula::tests
