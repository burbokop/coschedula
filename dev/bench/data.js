window.BENCHMARK_DATA = {
  "lastUpdate": 1692644141070,
  "repoUrl": "https://github.com/burbokop/coschedula",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "burbokop",
            "username": "burbokop"
          },
          "committer": {
            "name": "burbokop",
            "username": "burbokop"
          },
          "id": "27a01ec25177a3867fe3122b7d836c8da9733864",
          "message": "Google Benchmarks added",
          "timestamp": "2023-08-19T07:33:43Z",
          "url": "https://github.com/burbokop/coschedula/pull/4/commits/27a01ec25177a3867fe3122b7d836c8da9733864"
        },
        "date": 1692644140336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 10373096.602941114,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10313194.117647061 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 10180207.212121585,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 10178971.212121213 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 15883279.340425331,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 15878878.723404255 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 15365320.749999968,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15364195.454545463 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 7830174.290697697,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 7804506.976744187 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 21669786.374999944,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21666971.874999996 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 20338330.235294595,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20334558.823529407 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 27637664.119999953,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 27634368.00000001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 28443588.791666012,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 28426487.499999985 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 22744194.499999538,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22674725.000000007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1425.1450644885747,
            "unit": "ns/iter",
            "extra": "iterations: 495359\ncpu: 1425.0101441580773 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 3254.1070914504094,
            "unit": "ns/iter",
            "extra": "iterations: 213285\ncpu: 3253.851419462216 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 8275.470512820679,
            "unit": "ns/iter",
            "extra": "iterations: 85800\ncpu: 8275.060606060602 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 22628.777316914347,
            "unit": "ns/iter",
            "extra": "iterations: 30860\ncpu: 22627.864549578735 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 67153.2069699911,
            "unit": "ns/iter",
            "extra": "iterations: 10330\ncpu: 67152.14908034858 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 194338.5140629364,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 194289.8913951544 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 722852.3775933551,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 722798.5477178418 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/16",
            "value": 136844.69562635437,
            "unit": "ns/iter",
            "extra": "iterations: 5053\ncpu: 136834.4349891155 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 322145.1287981939,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 322120.95238095144 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 883922.8413097817,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 883868.8916876573 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2520364.226950399,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 2520206.737588655 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7754443.344444755,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 7754271.1111111455 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 25693767.392855953,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 25692807.1428572 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 91170409.12499875,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 91168300.00000009 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      }
    ]
  }
}