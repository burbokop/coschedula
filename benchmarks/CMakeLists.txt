cmake_minimum_required(VERSION 3.5)

project(coschedula_benchmarks LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if(POLICY CMP0135)
  cmake_policy(SET CMP0135 NEW)
endif()

if(POLICY CMP0091)
  cmake_policy(SET CMP0091 NEW)
endif()

include(3rdparty_googlebenchmark.cmake)

add_executable(${PROJECT_NAME} task_bench.cpp word_iterator.h random_gen.h
                               complexity_bench.cpp)
if(MSVC)
  set_property(
    TARGET ${PROJECT_NAME} PROPERTY MSVC_RUNTIME_LIBRARY
                                    "MultiThreaded$<$<CONFIG:Debug>:Debug>")
endif()

add_dependencies(${PROJECT_NAME} GoogleBenchmark)

target_link_libraries(${PROJECT_NAME} coschedula)
target_link_google_benchmark(${PROJECT_NAME})
