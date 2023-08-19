cmake_minimum_required(VERSION 3.5)

project(coschedula_tests LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

cmake_policy(SET CMP0135 NEW)

include(FetchContent)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/03597a01ee50ed33e9dfd640b249b4be3799d395.zip
)
set(gtest_force_shared_crt
    ON
    CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(googletest)

enable_testing()

add_executable(${PROJECT_NAME} ${CMAKE_CURRENT_LIST_DIR}/src/tests.cpp)

target_link_libraries(${PROJECT_NAME} coschedula GTest::gtest_main)

include(GoogleTest)
gtest_discover_tests(${PROJECT_NAME})
