include(ExternalProject)
set(GOOGLE_TEST_INSTALL_PREFIX
    ${CMAKE_CURRENT_BINARY_DIR}/google_test_install_prefix)
ExternalProject_Add(
  GoogleTest
  URL "https://github.com/google/googletest/archive/refs/tags/v1.14.0.zip"
  CMAKE_ARGS -DCMAKE_TOOLCHAIN_FILE=${CMAKE_TOOLCHAIN_FILE}
             -DCMAKE_INSTALL_PREFIX=${GOOGLE_TEST_INSTALL_PREFIX}
             -DCMAKE_MSVC_RUNTIME_LIBRARY=${CMAKE_MSVC_RUNTIME_LIBRARY}
             -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE})

function(target_link_google_test TARGET)
  add_dependencies(${TARGET} GoogleTest)
  target_include_directories(${TARGET}
                             PRIVATE ${GOOGLE_TEST_INSTALL_PREFIX}/include)
  target_link_directories(${TARGET} PRIVATE ${GOOGLE_TEST_INSTALL_PREFIX}/lib)
  target_link_libraries(${TARGET} gtest gtest_main)
  include(GoogleTest)
  gtest_discover_tests(${TARGET})
endfunction()
