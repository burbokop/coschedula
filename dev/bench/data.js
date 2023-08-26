window.BENCHMARK_DATA = {
  "lastUpdate": 1693075560386,
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
      },
      {
        "commit": {
          "author": {
            "email": "burbokop@gmail.com",
            "name": "Borys Boiko",
            "username": "burbokop"
          },
          "committer": {
            "email": "burbokop@gmail.com",
            "name": "Borys Boiko",
            "username": "burbokop"
          },
          "distinct": true,
          "id": "0e95ee81a2f8ac070725f92a2b237d984295c2d5",
          "message": "permissions given for workflow",
          "timestamp": "2023-08-21T22:41:25+03:00",
          "tree_id": "bece72532790f8aec26c3b27499fb578a7412227",
          "url": "https://github.com/burbokop/coschedula/commit/0e95ee81a2f8ac070725f92a2b237d984295c2d5"
        },
        "date": 1692647051512,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 13593798.725490643,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 13569641.176470589 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 11523635.679244515,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 11522050.94339623 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 18657289.146341465,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 18650263.41463415 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 19578549.05555539,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 19577575 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 9943676.115942279,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 9905924.637681156 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 26500322.50000086,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 26499388.461538456 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 26372861.11110968,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 26369018.518518534 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 31393915.826087143,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 31382882.60869565 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 31359836.181818224,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31348963.636363603 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 24118686.37931085,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 23178051.72413793 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1470.5992768001734,
            "unit": "ns/iter",
            "extra": "iterations: 462666\ncpu: 1470.1975074892039 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 3452.788494545142,
            "unit": "ns/iter",
            "extra": "iterations: 202756\ncpu: 3452.377241610607 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 8568.873859661502,
            "unit": "ns/iter",
            "extra": "iterations: 81774\ncpu: 8568.260082666851 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 23268.796982715226,
            "unit": "ns/iter",
            "extra": "iterations: 30027\ncpu: 23266.4335431445 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 70854.98226950713,
            "unit": "ns/iter",
            "extra": "iterations: 9870\ncpu: 70843.14083080042 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 200306.26029748577,
            "unit": "ns/iter",
            "extra": "iterations: 3496\ncpu: 200286.2700228836 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 756432.2448537622,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 756321.8851570965 ns\nthreads: 1"
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
            "value": 141029.24717969025,
            "unit": "ns/iter",
            "extra": "iterations: 4964\ncpu: 141021.59548751003 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 339247.1342054494,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 339228.0523255816 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 934552.3190921168,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 934505.740987985 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2619850.2134830835,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 2619686.5168539374 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7983715.528735439,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 7983104.597701126 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 26222218.666665263,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 26220037.0370371 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 95619194.57143274,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 95611971.42857125 ns\nthreads: 1"
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
            "email": "burbokop@gmail.com",
            "name": "Borys Boiko",
            "username": "burbokop"
          },
          "committer": {
            "email": "burbokop@gmail.com",
            "name": "Borys Boiko",
            "username": "burbokop"
          },
          "distinct": true,
          "id": "0e95ee81a2f8ac070725f92a2b237d984295c2d5",
          "message": "permissions given for workflow",
          "timestamp": "2023-08-21T22:41:25+03:00",
          "tree_id": "bece72532790f8aec26c3b27499fb578a7412227",
          "url": "https://github.com/burbokop/coschedula/commit/0e95ee81a2f8ac070725f92a2b237d984295c2d5"
        },
        "date": 1692647057740,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 15787381.822221708,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15784702.222222222 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 14375030.531914247,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 14374010.638297874 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 21334621.999998987,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 21285930.303030293 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 20382775.23529493,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20376597.058823533 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 12174162.807016991,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 12127189.47368421 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 31950817.999999844,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31927281.81818184 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 30181092.54166509,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 30176300.00000001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 37888749.1111123,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 37867677.777777776 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 35243557.199999034,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 35225975 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 28005568.45833313,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 27932587.499999974 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1234.1244899219691,
            "unit": "ns/iter",
            "extra": "iterations: 566825\ncpu: 1234.076655052263 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2928.2943302009526,
            "unit": "ns/iter",
            "extra": "iterations: 239109\ncpu: 2928.080917071295 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 7648.638660521761,
            "unit": "ns/iter",
            "extra": "iterations: 91349\ncpu: 7648.009283079187 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 21612.136129529405,
            "unit": "ns/iter",
            "extra": "iterations: 32425\ncpu: 21609.375481881285 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 70414.70407649773,
            "unit": "ns/iter",
            "extra": "iterations: 9935\ncpu: 70408.38449924513 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 205132.14917936127,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 205110.19929660007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 690912.7265548084,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 690808.2922013823 ns\nthreads: 1"
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
            "value": 96580.60441989156,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 96576.64364640851 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 272381.18457944086,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 272360.55295950186 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 783528.2272727087,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 783466.9318181786 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2357818.188552255,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 2357535.0168350153 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7254950.873684002,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 7254278.947368413 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 24693420.071427245,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 24689907.14285711 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 90277699.749997,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 90269087.49999985 ns\nthreads: 1"
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
          "id": "4da5c5eb44b3c1f805c44314e024337c62655a6c",
          "message": "Err fixed: The dependency target \"GoogleTest\" of target \"coschedula_b…",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/5/commits/4da5c5eb44b3c1f805c44314e024337c62655a6c"
        },
        "date": 1693075559711,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 12661058.945452003,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 12646432.72727273 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 12033830.99999559,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 12031962.711864404 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 17582444.179483082,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17581882.051282056 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 16402777.71428243,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16396307.142857151 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 9716689.802817328,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9696301.4084507 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 25286735.857142568,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 25219042.85714286 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 23939254.399995964,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 23935979.99999999 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 32723161.49999907,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 32109127.272727266 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 29710464.91304309,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 29707517.391304325 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 24057185.67857613,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 23460160.714285664 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1026.7331105838064,
            "unit": "ns/iter",
            "extra": "iterations: 682380\ncpu: 1026.6448313256546 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2427.212385697807,
            "unit": "ns/iter",
            "extra": "iterations: 288381\ncpu: 2427.041656697218 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 6298.5126180275765,
            "unit": "ns/iter",
            "extra": "iterations: 111309\ncpu: 6298.12054730525 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 18119.661509405676,
            "unit": "ns/iter",
            "extra": "iterations: 38651\ncpu: 18118.59977749607 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 58662.35924525883,
            "unit": "ns/iter",
            "extra": "iterations: 11925\ncpu: 58659.672955974915 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 170750.5086648352,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170744.1786673176 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 576739.7535037807,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 576698.2687551533 ns\nthreads: 1"
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
            "value": 80412.42505716636,
            "unit": "ns/iter",
            "extra": "iterations: 8740\ncpu: 80405.60640732267 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 214563.67608229295,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 214550.19957015736 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 659514.3785047202,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 659482.8971962607 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 1960744.9638884747,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 1960723.8888888923 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 6097881.16522079,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 6097405.217391313 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 20681489.882342838,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20680570.588235334 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 75061637.77775833,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 75055566.66666675 ns\nthreads: 1"
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