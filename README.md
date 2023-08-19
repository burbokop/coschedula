# CoSchedula

[![Build & Test on multiple platforms](https://github.com/burbokop/coschedula/actions/workflows/cmake-multi-platform.yml/badge.svg?event=push)](https://github.com/burbokop/coschedula/actions/workflows/cmake-multi-platform.yml)

Asynchronous computations library based on coroutines

### Add CoSchedula to your CMake project
```
set(DEPENDENCIES_PREFIX ${CMAKE_CURRENT_BINARY_DIR}/dependencies_prefix)
ExternalProject_Add(
  CoSchedula
  GIT_REPOSITORY https://github.com/burbokop/coschedula.git
  GIT_TAG=v0.0.12
  CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${CMAKE_TOOLCHAIN_FILE}
             -DCMAKE_INSTALL_PREFIX=${DEPENDENCIES_PREFIX}
             -DENABLE_TESTS=OFF
             -DENABLE_STATIC_BUILD=OFF)

add_dependencies(your_target CoSchedula)

target_include_directories(your_target PRIVATE ${DEPENDENCIES_PREFIX}/include)
target_link_directories(your_target PRIVATE ${DEPENDENCIES_PREFIX}/lib)
target_link_libraries(your_target coschedula)
```
