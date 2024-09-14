cmake_policy(SET CMP0076 NEW)

if(NOT DEFINED CMAKE_INSTALL_INCLUDEDIR)
  message(FATAL_ERROR "CMAKE_INSTALL_INCLUDEDIR must be defined")
endif()

set(INSTALLDIR ${CMAKE_INSTALL_INCLUDEDIR}/${PROJECT_NAME})

target_sources(
  ${PROJECT_NAME}
  PUBLIC $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/source_location.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/source_location.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/task.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/task.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/scheduler.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/scheduler.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/per_thread_scheduler.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/per_thread_scheduler.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/default_scheduler.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/default_scheduler.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/default_task_registry.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/default_task_registry.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/execution.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/execution.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/async.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/async.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/fs.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/fs.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/runners.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/runners.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/utils.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/utils.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/expected.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/expected.h>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/nonull.h>
         $<INSTALL_INTERFACE:${INSTALLDIR}/nonull.h>
  PRIVATE fs.cpp)
