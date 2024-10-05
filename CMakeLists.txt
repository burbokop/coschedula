cmake_minimum_required(VERSION 3.27.1)

project(
    coschedula
    LANGUAGES CXX
    VERSION 0.0.12
    DESCRIPTION "Asynchronous computations library based on coroutines"
    HOMEPAGE_URL "https://github.com/burbokop/coschedula")

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

option(ENABLE_STATIC_BUILD "Build as static library" OFF)
option(ENABLE_TESTS "Enable tests" ON)
option(ENABLE_PEDANTIC_DIAGNOSTIC
       "Enable all compiler warnings. Treat warnings as errors" ON)

option(
    SANITIZER_BUNDLE
    "Possible values [nosan - no sanitizer, asan - address leak and others, tsan - thread and others]"
    "nosan")

if(MSVC)
    option(ENABLE_BENCHMARKS "Enable benchmarks (TODO: fix for msvc)" OFF)
else()
    option(ENABLE_BENCHMARKS "Enable benchmarks" ON)
endif()

if(MSVC)
    set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")
endif()

find_program(CPPLINT_EXISTS "cpplint")
if(CPPLINT_EXISTS)
    set(CMAKE_CXX_CPPLINT "cpplint")
endif()

set(CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS ON)
include(GNUInstallDirs)

if(ENABLE_STATIC_BUILD)
    add_library(${PROJECT_NAME} STATIC)
else()
    add_library(${PROJECT_NAME} SHARED)
endif()

function(target_pedantic_diagnostic TARGET)
    if((CMAKE_CXX_COMPILER_ID STREQUAL "Clang") OR (CMAKE_CXX_COMPILER_ID
                                                    STREQUAL "GNU"))
        set(CLANG_OR_GCC ON)
    endif()

    if(ENABLE_PEDANTIC_DIAGNOSTIC)
        if(CLANG_OR_GCC)
            target_compile_options(
                ${TARGET}
                PRIVATE -Wall
                        -Wextra
                        -Wconversion
                        -Wpedantic
                        -Werror
                        -Wno-error=deprecated
                        -Wno-error=deprecated-declarations)
            # if(CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
            # target_compile_options(${TARGET} PRIVATE -fanalyzer) else()
            # target_compile_options(${TARGET} PRIVATE --analyze) endif()
        elseif(CMAKE_CXX_COMPILER_ID STREQUAL "MSVC")
            target_compile_options(${TARGET} PRIVATE /W4 /WX /analyze)
        endif()
    endif()

    message("SANITIZER_BUNDLE: ${SANITIZER_BUNDLE}")

    if((NOT SANITIZER_BUNDLE STREQUAL "nosan")
       AND (NOT SANITIZER_BUNDLE STREQUAL "asan")
       AND (NOT SANITIZER_BUNDLE STREQUAL "tsan"))
        message(
            FATAL_ERROR
                "SANITIZER_BUNDLE can be set only to \"nosan\" - no sanitizer, \"asan\" - address leak and others or \"tsan\" - thread and others"
        )
    endif()

    set(OTHER_CLANG_AND_GCC_SANITIZERS
        -fsanitize=undefined
        -fsanitize=null
        -fsanitize=return
        -fsanitize=unreachable
        -fsanitize=integer-divide-by-zero
        -fsanitize=signed-integer-overflow
        -fsanitize=shift
        -fsanitize=vla-bound
        -fsanitize=bounds
        -fsanitize=bounds-strict
        -fsanitize=alignment
        -fsanitize=object-size
        -fsanitize=float-divide-by-zero
        -fsanitize=float-cast-overflow
        -fsanitize=nonnull-attribute
        -fsanitize=returns-nonnull-attribute
        -fsanitize=bool
        -fsanitize=enum
        -fsanitize=vptr
        -fsanitize=pointer-overflow
        -fsanitize=builtin)

    set(OTHER_CLANG_AND_GCC_SANITIZERS_LIBS ubsan)

    if(SANITIZER_BUNDLE STREQUAL "asan")
        if(CLANG_OR_GCC)
            target_compile_options(
                ${TARGET} PRIVATE -fsanitize=address -fsanitize=leak
                                  ${OTHER_CLANG_AND_GCC_SANITIZERS})
            target_link_libraries(
                ${TARGET} PRIVATE asan ${OTHER_CLANG_AND_GCC_SANITIZERS_LIBS})
        elseif()
            message(FATAL_ERROR "TODO")
        endif()
    elseif(SANITIZER_BUNDLE STREQUAL "tsan")
        if(CLANG_OR_GCC)
            target_compile_options(
                ${TARGET} PRIVATE -fsanitize=thread
                                  ${OTHER_CLANG_AND_GCC_SANITIZERS})
            target_link_libraries(
                ${TARGET} PRIVATE tsan ${OTHER_CLANG_AND_GCC_SANITIZERS_LIBS})
        elseif()
            message(FATAL_ERROR "TODO")
        endif()
    endif()
endfunction()

target_pedantic_diagnostic(${PROJECT_NAME})

add_subdirectory(src)

if(ENABLE_TESTS)
    enable_testing()
    add_subdirectory(tests)
endif()

if(ENABLE_BENCHMARKS)
    add_subdirectory(benchmarks)
endif()

target_include_directories(
    ${PROJECT_NAME}
    INTERFACE $<BUILD_INTERFACE:${${PROJECT_NAME}_SOURCE_DIR}/include>
              $<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>)

install(
    TARGETS ${PROJECT_NAME}
    EXPORT ${PROJECT_NAME}_targets
    ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
    PUBLIC_HEADER DESTINATION ${CMAKE_INSTALL_INCLUDEDIR})

install(
    DIRECTORY "${CMAKE_CURRENT_LIST_DIR}/src/"
    DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/${PROJECT_NAME}"
    FILES_MATCHING
    PATTERN "*.h")

include(CMakePackageConfigHelpers)
write_basic_package_version_file(
    "${PROJECT_NAME}ConfigVersion.cmake"
    VERSION ${PROJECT_VERSION}
    COMPATIBILITY SameMinorVersion)

configure_package_config_file(
    "${PROJECT_SOURCE_DIR}/cmake/${PROJECT_NAME}Config.cmake.in"
    "${PROJECT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
    INSTALL_DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/${PROJECT_NAME}/cmake)

install(
    EXPORT ${PROJECT_NAME}_targets
    FILE ${PROJECT_NAME}Targets.cmake
    NAMESPACE ${PROJECT_NAME}::
    DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/${PROJECT_NAME}/cmake)

install(FILES "${PROJECT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
              "${PROJECT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake"
        DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/${PROJECT_NAME}/cmake)

set(CPACK_RESOURCE_FILE_LICENSE "${PROJECT_SOURCE_DIR}/LICENSE")

if(UNIX)
    set(CPACK_GENERATOR "DEB;STGZ")
elseif(WIN32)
    set(CPACK_GENERATOR ZIP)
endif()

set(CPACK_PACKAGE_NAME "lib${PROJECT_NAME}")
set(CPACK_PACKAGE_CONTACT "io.github.burbokop")
include(CPack)
