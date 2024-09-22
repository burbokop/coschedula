# CoSchedula

[![Build & Test on multiple platforms](https://github.com/burbokop/coschedula/actions/workflows/cmake-multi-platform.yml/badge.svg?event=push)](https://github.com/burbokop/coschedula/actions/workflows/cmake-multi-platform.yml)

Asynchronous computations library which uses c++20 coroutines as interface. Experience when using this library is similar to using  **async/await** in languages like **js** or **rust**

Features:
* Running multiple concurrent tasks (coroutines) on one thread
* Ability to set custom scheduling algorithm
* Precise cpu quants control with `conschedula::runners::concurent`
* Running multiple tasks in multiple threads
* Recursive runners with different scheduling algorithms
* `subscriber`-s system which allow to monitor tasks state. (useful for debugging, logging or some **gui task monitor**)

# Add CoSchedula to your CMake project
```cmake
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

# Examples of what you can do with this lib

### Execute coroutines with runners

```cpp
coschedula::task<std::string> task()
{
    // ...
    co_return "10";
};

int main()
{
    auto result = coschedula::runners::block_on(task);
    assert(result == "10");
    return 0;
}
```

### Use `co_await` to wait for result of a subtask (Does not block thread)

```cpp
coschedula::task<std::string> task0()
{
    // ...
    co_return "10";
};

coschedula::task<std::string> task1(int x, int y)
{
    // ...
    co_return "20";
};

int main()
{
    auto result = coschedula::runners::block_on([]() -> coschedula::task<std::string> {
        const auto d0 = task0();
        const auto d1 = task1(1, 3);
        const auto dep0_res = co_await d0;
        const auto dep1_res = co_await d1;
        co_return dep0_res + dep1_res;
    });
    assert(result == "1020");
    return 0;
}
```

### Use `coschedula::suspend` in expensive algorithms or when working with IO

```cpp
coschedula::task<std::vector<std::byte>> do_expensive_computations(std::vector<std::byte> bytes)
{
    for (auto &b : bytes) {
        b = expensive_func(b);
        // Tell dispatcher to give cpu time to another task
        // Execution will be resumed automatically when scheduler decide
        co_await coschedula::suspend{};
    }
    co_return bytes;
};
```

### Apply your own scheduling algorithm to a runner

```cpp
class my_scheduler : public coschedula::scheduler {
    // scheduler interface
public:
    virtual std::size_t select(std::size_t current, std::span<coschedula::task_info> tasks) override {
        return (current + 1) % tasks.size();
    }
};

coschedula::runners::block_on(
    std::make_shared<my_scheduler>(),
    {},
    []() -> coschedula::task<void> { co_return; });
```

### Subscribe on events inside runner

```cpp
class my_subscriber : public coschedula::subscriber {
    // subscriber interface
public:
    virtual void task_started(
        const coschedula::dispatcher &,
        std::size_t task_index,
        const coschedula::task_info &) override { /* ... */ }

    virtual void task_finished(
        const coschedula::dispatcher &,
        std::size_t task_index,
        const coschedula::task_info &) override { /* ... */ }

    virtual void task_suspended(
        const coschedula::dispatcher &,
        std::size_t task_index,
        const coschedula::task_info &) override { /* ... */ }

    virtual void task_resumed(
        const coschedula::dispatcher &,
        std::size_t task_index,
        const coschedula::task_info &) override { /* ... */ }
};

coschedula::runners::block_on(
    coschedula::schedulers::rr::create(),
    { std::make_shared<my_subscriber>() },
    []() -> coschedula::task<void> { co_return; });
```

### Run different tasks in different threads

```cpp
coschedula::runners::block_on([]() -> coschedula::task<int> {
    // This subtask is and all its subtasks are executed in another thread with seperate dispatcher
    // but with the same scheduler and subscribers set
    const auto subtask = coschedula::async([]() -> coschedula::task<int> {
        /* ... */
        co_return 10000;
    });
    /* ... */
    co_return co_await subtask;
});

coschedula::runners::block_on([]() -> coschedula::task<int> {
    // Also has overload for simple functions
    const auto subtask = coschedula::async([]() -> int {
        /* ... */
        return 10000;
    });
    /* ... */
    co_return co_await subtask;
});

```


### Flexible concurrent execution

```cpp
// Executes in this thread and you control when to give it cpu time
auto runner = coschedula::runners::concurrent([]() -> coschedula::task<int> {
    /* ... */
    co_return 1000;
});
SomeOtherFramework::Timer timer;
timer.connect([&timer, &runner]() {
    if (!runner.proceed()) {
        timer.stop();
        // Just returns value if all tasks are already done
        const auto result = std::move(runner).wait();
        report_result_somewhere(result);
    }
});
timer.start(10ms);
```

