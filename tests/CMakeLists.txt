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

include(ExternalProject)
set(THIRD_PARTY_PREFIX ${CMAKE_CURRENT_BINARY_DIR}/third_party)
ExternalProject_Add(
  GoogleTest
  URL "https://github.com/google/googletest/archive/refs/tags/v1.14.0.zip"
  CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${CMAKE_TOOLCHAIN_FILE}
             -DCMAKE_INSTALL_PREFIX=${THIRD_PARTY_PREFIX}
             -DMSVC_RUNTIME_LIBRARY=${MSVC_RUNTIME_LIBRARY})

enable_testing()

add_executable(${PROJECT_NAME} task_suite.cpp)
if(MSVC)
  set_property(TARGET ${PROJECT_NAME} PROPERTY MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")
endif()

add_dependencies(${PROJECT_NAME} GoogleTest)

target_include_directories(${PROJECT_NAME}
                           PRIVATE ${THIRD_PARTY_PREFIX}/include)
target_link_directories(${PROJECT_NAME} PRIVATE ${THIRD_PARTY_PREFIX}/lib)
target_link_libraries(${PROJECT_NAME} gtest gtest_main)

target_link_libraries(${PROJECT_NAME} coschedula ${GTEST_LIBRARY})

include(GoogleTest)
gtest_discover_tests(${PROJECT_NAME})
