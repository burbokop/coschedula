window.BENCHMARK_DATA = {
  "lastUpdate": 1692644148302,
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
      },
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
        "date": 1692644147323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 17200303.204545394,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 17077179.545454547 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 17055686.750000183,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 17052252.272727277 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 21476164.419354863,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 21460319.354838703 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 20515966.705882333,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20513573.52941176 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 12567290.607142821,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 12526733.928571438 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 31352245.13636362,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31345063.63636365 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 29161300.749999937,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29158062.49999997 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 36581338.10526315,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 36577684.210526295 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 34272312.14999864,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 34266694.99999999 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 26426930.08333315,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 26354129.166666612 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1191.3076364933581,
            "unit": "ns/iter",
            "extra": "iterations: 582977\ncpu: 1191.1833571478828 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2966.1601538052637,
            "unit": "ns/iter",
            "extra": "iterations: 233282\ncpu: 2965.8713488396065 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 7342.406257615391,
            "unit": "ns/iter",
            "extra": "iterations: 94381\ncpu: 7341.362138566023 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 21044.670755481126,
            "unit": "ns/iter",
            "extra": "iterations: 33343\ncpu: 21041.124074018524 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 67575.73924553407,
            "unit": "ns/iter",
            "extra": "iterations: 10577\ncpu: 67565.75588541164 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 200174.9118644068,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 200139.26553672337 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 667712.6427184229,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 667630.1941747566 ns\nthreads: 1"
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
            "value": 94053.21403789974,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 94042.63410728572 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 246972.73193717562,
            "unit": "ns/iter",
            "extra": "iterations: 2865\ncpu: 246956.1605584637 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 737208.5783783798,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 737112.4324324329 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2209706.2798742014,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2209344.0251572332 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 6988285.8099998655,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6987203.000000016 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 23890696.206896383,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 23886862.068965405 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 87491346.75000292,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 87480162.4999999 ns\nthreads: 1"
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