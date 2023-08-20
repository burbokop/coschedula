include(ExternalProject)
set(GOOGLE_BENCHMARK_INSTALL_PREFIX
    ${CMAKE_CURRENT_BINARY_DIR}/google_benchmark_install_prefix)
ExternalProject_Add(
  GoogleBenchmark
  URL "https://github.com/google/benchmark/archive/refs/tags/v1.8.2.zip"
  CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${CMAKE_TOOLCHAIN_FILE}
             -DCMAKE_INSTALL_PREFIX=${GOOGLE_BENCHMARK_INSTALL_PREFIX}
             -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE}
             -DCMAKE_MSVC_RUNTIME_LIBRARY=${CMAKE_MSVC_RUNTIME_LIBRARY}
             -DWINDOWS_EXPORT_ALL_SYMBOLS=ON
             -DBENCHMARK_ENABLE_GTEST_TESTS=OFF)

function(target_link_google_benchmark TARGET)
  add_dependencies(${TARGET} GoogleTest)
  target_include_directories(${TARGET}
                             PRIVATE ${GOOGLE_BENCHMARK_INSTALL_PREFIX}/include)
  target_link_directories(${TARGET} PRIVATE
                          ${GOOGLE_BENCHMARK_INSTALL_PREFIX}/lib)
  target_link_libraries(${TARGET} benchmark benchmark_main)
endfunction()
