cmake_minimum_required(VERSION 3.5)

project(coschedula_tests LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if(POLICY CMP0135)
  cmake_policy(SET CMP0135 NEW)
endif()

if(POLICY CMP0091)
  cmake_policy(SET CMP0091 NEW)
endif()

enable_testing()

add_executable(${PROJECT_NAME} global_scheduler_suite.cpp fs_suite.cpp
                               per_thread_scheduler_suite.cpp
                               runners_suite.cpp
                               async_suite.cpp
                               utils.h)

include(3rdparty_googletest.cmake)

target_link_libraries(${PROJECT_NAME} coschedula)
target_link_google_test(${PROJECT_NAME})
