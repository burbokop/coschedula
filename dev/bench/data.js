window.BENCHMARK_DATA = {
  "lastUpdate": 1724871074109,
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
        "date": 1693075585843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9055659.675324295,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9045151.94805195 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8982450.894736728,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 8858543.42105263 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 13476839.941175763,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 13476541.176470585 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 13956248.299999742,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 13952006 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 7647863.612902788,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7624712.903225807 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 18095750.25000072,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 18089939.999999993 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 17637946.825000484,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17637150.00000001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 25803603.962963786,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 25800796.296296295 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 25849368.21428739,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 25842528.57142858 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 21172961.343749464,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21102840.625000007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1508.515931451744,
            "unit": "ns/iter",
            "extra": "iterations: 463674\ncpu: 1508.457450708904 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 3462.0704481208077,
            "unit": "ns/iter",
            "extra": "iterations: 200928\ncpu: 3461.7136486701675 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 8713.785802078319,
            "unit": "ns/iter",
            "extra": "iterations: 80547\ncpu: 8713.164984419018 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 23497.267646367844,
            "unit": "ns/iter",
            "extra": "iterations: 29737\ncpu: 23496.126038268798 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 70005.1176002369,
            "unit": "ns/iter",
            "extra": "iterations: 10051\ncpu: 69996.12973833442 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 197619.13955455332,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 197605.44121793075 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 751137.6294691492,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 751073.4561213433 ns\nthreads: 1"
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
            "value": 140275.53552790283,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 140268.4865515857 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 337320.96703296463,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 337289.4887720978 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 916372.7665369723,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 916294.0337224376 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2568543.6802973524,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 2568328.624535307 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7922350.98863614,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 7921825.000000019 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 25144143.851851672,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 25142937.037037008 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 91497882.12499744,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 91486049.99999988 ns\nthreads: 1"
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
          "id": "7118fa506b520bd32bdfebfd795468eee7d369c2",
          "message": "Err fixed: The dependency target \"GoogleTest\" of target \"coschedula_benchmarks\" does   not exist.",
          "timestamp": "2023-08-26T21:48:47+03:00",
          "tree_id": "fde0ffee02935be8b7853b2210a0b3a76bb75c44",
          "url": "https://github.com/burbokop/coschedula/commit/7118fa506b520bd32bdfebfd795468eee7d369c2"
        },
        "date": 1693075861647,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9065154.324675431,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9064383.116883118 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8987846.873417657,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 8986489.873417724 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 13340439.274509877,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 13339064.705882356 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 13574127.843137197,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 13549252.941176469 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6561140.583333408,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6538226.85185185 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 18085838.684210163,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18084610.526315782 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 17646398.90000055,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17644392.500000007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 24526559.464286532,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 24520782.142857153 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 24396543.896551553,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24394041.379310332 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 18744753.08571521,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 18695405.71428574 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1391.487105954601,
            "unit": "ns/iter",
            "extra": "iterations: 503178\ncpu: 1391.4022473160585 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2817.740143470108,
            "unit": "ns/iter",
            "extra": "iterations: 248414\ncpu: 2817.6527892952877 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 7131.9305388973125,
            "unit": "ns/iter",
            "extra": "iterations: 98386\ncpu: 7131.4556949159505 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 19342.736539365073,
            "unit": "ns/iter",
            "extra": "iterations: 36161\ncpu: 19341.464561267687 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 58732.76023490043,
            "unit": "ns/iter",
            "extra": "iterations: 11920\ncpu: 58729.26174496643 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 166383.75005939818,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166373.5091470659 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 628360.8230008536,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 628337.6460017975 ns\nthreads: 1"
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
            "value": 117217.73028628787,
            "unit": "ns/iter",
            "extra": "iterations: 5973\ncpu: 117211.73614599029 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 279458.0447105821,
            "unit": "ns/iter",
            "extra": "iterations: 2505\ncpu: 279445.0299401198 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 765003.9399563008,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 764953.7117903947 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2151728.257668741,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2151579.4478527596 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 6590494.084906166,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 6590134.905660391 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 21699075.968749426,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21697606.250000056 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 78341893.11111256,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 78340033.33333328 ns\nthreads: 1"
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
          "id": "7118fa506b520bd32bdfebfd795468eee7d369c2",
          "message": "Err fixed: The dependency target \"GoogleTest\" of target \"coschedula_benchmarks\" does   not exist.",
          "timestamp": "2023-08-26T21:48:47+03:00",
          "tree_id": "fde0ffee02935be8b7853b2210a0b3a76bb75c44",
          "url": "https://github.com/burbokop/coschedula/commit/7118fa506b520bd32bdfebfd795468eee7d369c2"
        },
        "date": 1693075893739,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 13808947.040815862,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 13801136.734693877 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 12706738.91666642,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 12702706.666666664 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 18291153.79487179,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 18272458.974358972 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 17676328.70731665,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17673382.92682927 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 12125753.43859662,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 12095808.771929815 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 26354709.571428712,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26347842.857142866 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 24646954.964286543,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 24645625.000000004 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 35325912.599999756,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 35301979.99999998 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 34492370.190475546,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 34486461.90476192 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 26724548.962963328,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 26353348.1481481 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1156.1661216900434,
            "unit": "ns/iter",
            "extra": "iterations: 623880\ncpu: 1156.096204398283 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2648.96640243561,
            "unit": "ns/iter",
            "extra": "iterations: 269335\ncpu: 2640.452224924354 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 6803.409190351295,
            "unit": "ns/iter",
            "extra": "iterations: 104675\ncpu: 6802.527824217818 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 18048.98103352829,
            "unit": "ns/iter",
            "extra": "iterations: 41547\ncpu: 18000.57043829881 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 56830.635248858765,
            "unit": "ns/iter",
            "extra": "iterations: 12477\ncpu: 56827.41043520077 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 174224.49489247028,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 174206.58602150533 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 589981.24232083,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 589869.9658703066 ns\nthreads: 1"
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
            "value": 92576.02427877657,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 92574.12167951984 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 277277.6745937433,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 277227.3087594142 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 787721.8572961548,
            "unit": "ns/iter",
            "extra": "iterations: 932\ncpu: 787705.0429184574 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2315037.2774194335,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2314756.774193545 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7044788.333333387,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7043966.666666657 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 23727094.724138014,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 23724582.7586207 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 85627365.74999975,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 85617312.50000015 ns\nthreads: 1"
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
          "id": "c4c09e20319dff11d7536c4dbc4c062c5de53a96",
          "message": "Scheduler subscriber added",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/6/commits/c4c09e20319dff11d7536c4dbc4c062c5de53a96"
        },
        "date": 1693248525487,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 10802619.343750041,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10794750 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 10070970.347826097,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10070427.536231885 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 14848536.270833416,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 14847518.750000002 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 14205982.57999984,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 14205068 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 8355660.104651306,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 8320013.953488372 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 21628205.593749784,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21626515.625000007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 20195098.571429074,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 20190202.857142862 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 26285513.5185189,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 26284037.037037034 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 25196915.857143104,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 25195242.85714286 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 21388610.484848414,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 21335012.12121211 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 896.7615703591955,
            "unit": "ns/iter",
            "extra": "iterations: 772664\ncpu: 896.716166406098 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2208.437360921464,
            "unit": "ns/iter",
            "extra": "iterations: 316368\ncpu: 2208.315632428054 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 5402.857475276341,
            "unit": "ns/iter",
            "extra": "iterations: 128925\ncpu: 5402.787667248401 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 15024.137911721096,
            "unit": "ns/iter",
            "extra": "iterations: 46421\ncpu: 15023.513065207588 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 48421.62931754866,
            "unit": "ns/iter",
            "extra": "iterations: 14360\ncpu: 48420.99582172708 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 1369151.8943248524,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1369064.1878669283 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 6612032.30188682,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 6611564.150943384 ns\nthreads: 1"
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
            "value": 71605.51372950875,
            "unit": "ns/iter",
            "extra": "iterations: 9760\ncpu: 71601.38319672136 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 189411.1608448439,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189401.38099106442 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 578788.1042183642,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 578777.9983457407 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2171146.6304347604,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2171076.70807453 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7584795.750000054,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7584477.173913075 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 29008395.500000004,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29006504.166666653 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 111508405.16666941,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 111502866.6666665 ns\nthreads: 1"
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
          "id": "c4c09e20319dff11d7536c4dbc4c062c5de53a96",
          "message": "Scheduler subscriber added",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/6/commits/c4c09e20319dff11d7536c4dbc4c062c5de53a96"
        },
        "date": 1693248553647,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 12605167.545454647,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 12602921.818181818 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 11501284.596774088,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11498109.677419355 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 17932355.763158035,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 17916421.052631576 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 18095887.894736804,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18087286.84210526 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 8786755.597560821,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 8756845.121951226 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 24986111.586206686,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24981706.896551713 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 24091815.172414105,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24082520.68965516 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 31400673.40909137,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31394895.454545442 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 30725273.086955972,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30719917.391304333 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 23405603.517240815,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 23333703.44827589 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1683.6926256499098,
            "unit": "ns/iter",
            "extra": "iterations: 417569\ncpu: 1683.4084905728141 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 3448.3651819009538,
            "unit": "ns/iter",
            "extra": "iterations: 204342\ncpu: 3447.8369596069333 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 8665.980765407226,
            "unit": "ns/iter",
            "extra": "iterations: 80480\ncpu: 8664.603628230632 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 23292.95538971237,
            "unit": "ns/iter",
            "extra": "iterations: 29881\ncpu: 23288.993005588803 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 71068.04569810964,
            "unit": "ns/iter",
            "extra": "iterations: 9891\ncpu: 71060.5499949449 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 200776.82922636575,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 200753.55300859574 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 754771.1425462485,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 754660.718171925 ns\nthreads: 1"
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
            "value": 140043.4167664683,
            "unit": "ns/iter",
            "extra": "iterations: 5010\ncpu: 140020.3592814367 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 348560.4020926781,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 348503.08918784175 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 977860.310055872,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 977689.6648044726 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2922257.170833357,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 2919376.250000013 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 9771382.095890399,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 9768249.315068476 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 35060986.000000104,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 35054242.857142985 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 122395605.16666377,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 122374050.00000004 ns\nthreads: 1"
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
          "id": "9cbdc76e5c448b27e9dc552ddb7cd7b886b2a16a",
          "message": "Scheduler subscriber added",
          "timestamp": "2023-08-28T21:50:48+03:00",
          "tree_id": "785cfa1749fb4ee411f74ffded76439ccc999c18",
          "url": "https://github.com/burbokop/coschedula/commit/9cbdc76e5c448b27e9dc552ddb7cd7b886b2a16a"
        },
        "date": 1693248786856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 12282322.446424132,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 12281583.92857143 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 11384489.741937114,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11374050 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 16804042.674425017,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16802111.627906978 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 15756810.11110848,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15754864.444444442 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 9474818.000005659,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9455267.567567565 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 24202994.9310469,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24199610.344827577 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 21980350.838710424,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 21977609.67741935 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 30939224.181813847,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 30930204.545454558 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 28572654.458344,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 28566683.333333343 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 23752621.034481276,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 21161379.31034478 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1069.8699758785267,
            "unit": "ns/iter",
            "extra": "iterations: 663300\ncpu: 1055.3055932458935 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2492.2803171837427,
            "unit": "ns/iter",
            "extra": "iterations: 280468\ncpu: 2492.198753511984 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 6445.533519656926,
            "unit": "ns/iter",
            "extra": "iterations: 108414\ncpu: 6444.862287158482 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 18366.865578150042,
            "unit": "ns/iter",
            "extra": "iterations: 38156\ncpu: 18350.18607820526 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 59115.00734735472,
            "unit": "ns/iter",
            "extra": "iterations: 11841\ncpu: 59109.636010472066 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 171456.04995103192,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 171438.27130264448 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 578494.8975206661,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 578466.7768595049 ns\nthreads: 1"
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
            "value": 81574.03100045347,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 81564.51385627057 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 210262.52770278812,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 210243.09673554963 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 634731.5509087407,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 634663.3636363627 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 1848320.8944592308,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 1848152.7704485457 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 5906434.495798504,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 5905913.445378155 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 20387780.26469438,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20385870.588235274 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 74971333.88889982,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 74967999.99999994 ns\nthreads: 1"
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
          "id": "9cbdc76e5c448b27e9dc552ddb7cd7b886b2a16a",
          "message": "Scheduler subscriber added",
          "timestamp": "2023-08-28T21:50:48+03:00",
          "tree_id": "785cfa1749fb4ee411f74ffded76439ccc999c18",
          "url": "https://github.com/burbokop/coschedula/commit/9cbdc76e5c448b27e9dc552ddb7cd7b886b2a16a"
        },
        "date": 1693248827189,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 15015121.25531932,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 15009442.553191492 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 13667369.319999807,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 13596630.000000002 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 19979682.942857023,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 19978157.142857138 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 19529671.083333254,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 19522005.555555563 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 9964402.528571067,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 9921665.714285715 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 27303044.653846286,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 27295957.692307714 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 26545441.076922752,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 26539526.92307692 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 32481765.04545535,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 32477909.090909064 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 31187066.363637492,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31183004.545454517 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 25244810.321428955,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 24098828.571428627 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1780.1387176425005,
            "unit": "ns/iter",
            "extra": "iterations: 371784\ncpu: 1779.8993501603059 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 3640.4018940514898,
            "unit": "ns/iter",
            "extra": "iterations: 192603\ncpu: 3640.09750626937 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 9183.262775742664,
            "unit": "ns/iter",
            "extra": "iterations: 75886\ncpu: 9182.236512663729 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 24742.156800339286,
            "unit": "ns/iter",
            "extra": "iterations: 28278\ncpu: 24740.593394158037 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 74131.67016428028,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 74124.21833598292 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 210291.36429215825,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 210280.07213706037 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 793451.3163265157,
            "unit": "ns/iter",
            "extra": "iterations: 882\ncpu: 793416.7800453509 ns\nthreads: 1"
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
            "value": 146503.67155118627,
            "unit": "ns/iter",
            "extra": "iterations: 4777\ncpu: 146486.76993929234 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 355596.8139298509,
            "unit": "ns/iter",
            "extra": "iterations: 1967\ncpu: 355578.3934926281 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 1036113.2352071203,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1035978.846153846 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 3059514.1965065966,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 3059303.9301310135 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 9741467.527777873,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 9740406.944444422 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 33631363.476190686,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33629047.61904756 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 124233417.66666834,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 124220933.3333335 ns\nthreads: 1"
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
          "id": "e56db3a455ac8c8c43cf53ed00ffe3322c9b2189",
          "message": "fs::read empty return fixed",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/7/commits/e56db3a455ac8c8c43cf53ed00ffe3322c9b2189"
        },
        "date": 1693682398172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9899119.812499357,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 9815835.9375 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 9363502.77333304,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9362170.666666666 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 14229761.44680859,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 14227712.765957441 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 14169236.81632648,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 14159632.653061222 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 8898845.162500635,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 8873308.749999996 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 19931047.939394377,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 19927275.75757575 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 19080597.56756855,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 19078137.837837826 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 26248540.285712756,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26241689.285714306 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 25673803.035713505,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 25666714.28571429 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 22501128.096775442,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22381064.516129047 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1428.8344833686838,
            "unit": "ns/iter",
            "extra": "iterations: 497376\ncpu: 1428.6787058482926 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 3246.311226924194,
            "unit": "ns/iter",
            "extra": "iterations: 215865\ncpu: 3245.8721886364137 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 8299.531759310681,
            "unit": "ns/iter",
            "extra": "iterations: 85471\ncpu: 8298.580805185395 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 24605.14445180907,
            "unit": "ns/iter",
            "extra": "iterations: 28667\ncpu: 24603.006941779797 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 73931.69124278799,
            "unit": "ns/iter",
            "extra": "iterations: 9535\ncpu: 73929.35500786577 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 247899.61929118852,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 247897.11362805992 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1024216.6113475316,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1024100.5673758861 ns\nthreads: 1"
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
            "value": 126162.63756708275,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 125631.37745974958 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 297369.0817555933,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 297341.17900172184 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 809010.9161747323,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 808949.4687131025 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2351965.7272727685,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 2351674.025974028 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7259610.545454875,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7258801.010100998 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 24507291.172412727,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24504258.62068967 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 95614892.42857338,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 95611514.28571436 ns\nthreads: 1"
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
          "id": "e56db3a455ac8c8c43cf53ed00ffe3322c9b2189",
          "message": "fs::read empty return fixed",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/7/commits/e56db3a455ac8c8c43cf53ed00ffe3322c9b2189"
        },
        "date": 1693682417984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 14812168.26086967,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 14767593.47826087 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 14138646.779999817,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 14135161.999999998 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 20983304.823529385,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20977147.058823522 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 21022463.82352913,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20993038.235294122 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 14427432.499999782,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 14390009.259259256 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 30286797.260869056,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30252056.521739155 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 29714183.374998983,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29706841.66666663 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 40482629.588235095,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 40478870.58823525 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 39097786.88888979,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 39095311.11111115 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 28638096.480000287,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 28569392.000000067 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1267.0988341779976,
            "unit": "ns/iter",
            "extra": "iterations: 575388\ncpu: 1267.0224266060486 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2899.0001555738227,
            "unit": "ns/iter",
            "extra": "iterations: 244257\ncpu: 2898.8888752420626 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 7124.2170436918595,
            "unit": "ns/iter",
            "extra": "iterations: 96059\ncpu: 7123.359601911316 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 19499.2022254871,
            "unit": "ns/iter",
            "extra": "iterations: 36756\ncpu: 19496.993688105347 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 60840.09959402184,
            "unit": "ns/iter",
            "extra": "iterations: 11577\ncpu: 60825.74933056931 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 188655.56314534976,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 188635.6897008207 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 611663.2193548293,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 611650.5069124436 ns\nthreads: 1"
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
            "value": 106021.79167299115,
            "unit": "ns/iter",
            "extra": "iterations: 6581\ncpu: 106013.4478042853 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 266497.77760315343,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 266476.30648330133 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 823358.5962441744,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 823217.9577464816 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2401500.1627118425,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 2401283.0508474526 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 7637421.855670207,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 7635912.371134015 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 25824075.777778592,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 25821418.518518552 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 91999384.50000644,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 91983712.49999982 ns\nthreads: 1"
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
          "id": "919eeb701b9b4dd3503c76613fa7d210b7d59692",
          "message": "fs::read empty return fixed",
          "timestamp": "2023-09-02T22:21:05+03:00",
          "tree_id": "15f6bc37bf1cb7f337903705188e1b16a0b3af04",
          "url": "https://github.com/burbokop/coschedula/commit/919eeb701b9b4dd3503c76613fa7d210b7d59692"
        },
        "date": 1693682628002,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 14492638.510204164,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 14487985.714285715 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 13423200.037735496,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 13416671.698113207 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 20502521.59999997,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 20492902.85714286 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 19298290.18918959,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 19295105.405405402 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 11618857.186440688,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 11587284.745762711 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 28539396.833333325,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 28533329.166666657 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 26890348.703703795,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 26880111.111111134 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 36216905.68421119,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 36210936.84210523 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 33507106.80000048,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 33499789.99999998 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 27171265.14285744,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 27100503.57142852 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1244.476854153649,
            "unit": "ns/iter",
            "extra": "iterations: 561159\ncpu: 1244.2250770280802 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2828.194762611465,
            "unit": "ns/iter",
            "extra": "iterations: 247948\ncpu: 2827.7800183909535 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 7416.346349277267,
            "unit": "ns/iter",
            "extra": "iterations: 94269\ncpu: 7414.48090040205 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 20108.01261675506,
            "unit": "ns/iter",
            "extra": "iterations: 34795\ncpu: 20102.03190113525 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 63133.807306265066,
            "unit": "ns/iter",
            "extra": "iterations: 11059\ncpu: 63122.3347499774 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 173073.20656226634,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 173046.65672383772 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 559768.1158487697,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 559699.4368463386 ns\nthreads: 1"
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
            "value": 116390.90196078346,
            "unit": "ns/iter",
            "extra": "iterations: 6018\ncpu: 116370.88733798568 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 291748.059069958,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 291704.2731462086 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 857379.153186258,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 857288.357843136 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2676588.274809107,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 2676331.2977099246 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 8868414.835442929,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 8867677.215189848 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 31250121.22727226,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31246254.54545454 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 117196914.83333369,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 117182083.33333339 ns\nthreads: 1"
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
          "id": "919eeb701b9b4dd3503c76613fa7d210b7d59692",
          "message": "fs::read empty return fixed",
          "timestamp": "2023-09-02T22:21:05+03:00",
          "tree_id": "15f6bc37bf1cb7f337903705188e1b16a0b3af04",
          "url": "https://github.com/burbokop/coschedula/commit/919eeb701b9b4dd3503c76613fa7d210b7d59692"
        },
        "date": 1693682640241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 11729088.42105252,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 11720608.771929825 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 11419327.901639694,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 11409511.475409834 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 16830382.50000095,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 16827077.500000007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 16268579.999999993,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16266548.837209297 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 8036169.367816085,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8009731.034482756 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 22579843.387096655,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22576990.322580658 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 22091723.000000842,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22087487.500000004 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 29079209.125001173,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29074620.833333302 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 28460005.291667774,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 28457233.333333313 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 22670426.300000675,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 22593929.999999966 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 1701.559262070845,
            "unit": "ns/iter",
            "extra": "iterations: 410988\ncpu: 1701.3851985946076 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 3618.896669711797,
            "unit": "ns/iter",
            "extra": "iterations: 193767\ncpu: 3618.499538105039 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 8674.423597583034,
            "unit": "ns/iter",
            "extra": "iterations: 80593\ncpu: 8674.22853101386 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 23747.103386264935,
            "unit": "ns/iter",
            "extra": "iterations: 29472\ncpu: 23745.75529315958 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 70738.9585691178,
            "unit": "ns/iter",
            "extra": "iterations: 9896\ncpu: 70736.91390460789 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 200554.26281134592,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 200533.03750357823 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 759830.9544468363,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 759770.1735357903 ns\nthreads: 1"
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
            "value": 141879.67167207788,
            "unit": "ns/iter",
            "extra": "iterations: 4928\ncpu: 141869.3384740263 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 368584.68229714024,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 368558.4826132773 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 1005118.8522237624,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005049.3543758983 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2945333.075630316,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 2945087.8151260484 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 9330486.839999897,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9329645.333333332 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 32233873.9090898,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 32229236.363636363 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 118963513.83333582,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 118962299.99999975 ns\nthreads: 1"
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
          "id": "b73f87ecef355c47b5b97860677b3e88695a1a09",
          "message": "8 add per thread scheduler",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/b73f87ecef355c47b5b97860677b3e88695a1a09"
        },
        "date": 1724627324557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 7492806.473118391,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7492509.989247312 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7719896.032967056,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7719867.109890109 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 9323835.864865035,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9323312.878378376 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 9941199.197183076,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9940975.126760565 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 4703104.089041084,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 4693279.520547947 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15779800.34090907,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15779591.409090899 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15130893.28260882,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15130695.673913037 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 15498992.711110936,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15498937.04444446 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 16944544.097560626,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16940797.073170736 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 7710645.065933939,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7675866.505494505 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 954.0832236434547,
            "unit": "ns/iter",
            "extra": "iterations: 734647\ncpu: 954.0701125846822 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2204.5614012935903,
            "unit": "ns/iter",
            "extra": "iterations: 316793\ncpu: 2204.5809629632017 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 5741.832360491194,
            "unit": "ns/iter",
            "extra": "iterations: 122322\ncpu: 5741.8830382106225 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 17929.04494613164,
            "unit": "ns/iter",
            "extra": "iterations: 38891\ncpu: 17929.056182664346 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 59472.89095225918,
            "unit": "ns/iter",
            "extra": "iterations: 11793\ncpu: 59472.03883659793 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 193216.35169956222,
            "unit": "ns/iter",
            "extra": "iterations: 3648\ncpu: 193218.0841557018 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 663949.2000000036,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 663945.6227488158 ns\nthreads: 1"
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
            "value": 97456.1739764136,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 97355.92977341979 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 240464.0953642362,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 240460.10894039707 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 689986.0439024473,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 689987.038048781 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 2067199.526470631,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2067147.2500000019 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 6823386.077669941,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 6823351.640776682 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 24306688.86206839,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 24306904.41379309 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 90356226.74999999,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 90355184.49999991 ns\nthreads: 1"
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
          "id": "b73f87ecef355c47b5b97860677b3e88695a1a09",
          "message": "8 add per thread scheduler",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/b73f87ecef355c47b5b97860677b3e88695a1a09"
        },
        "date": 1724627326286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9541890.376623712,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9541203.714285716 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8370060.941176154,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 8368479.635294116 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10846073.29230756,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10845254.646153843 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10208356.101449443,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10207167.20289855 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 5858419.116666862,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 5848208.141666667 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 17424221.25000047,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17422598.77500001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 16355209.906976143,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16354366.813953502 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 18536003.756755568,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18535005.62162162 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 17302421.87804889,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17300956.219512194 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 10844740.923076957,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10808734.16923076 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 898.5037364601984,
            "unit": "ns/iter",
            "extra": "iterations: 778812\ncpu: 898.4921919538984 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2027.4099880763292,
            "unit": "ns/iter",
            "extra": "iterations: 345532\ncpu: 2027.3437424030208 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 4996.085712853507,
            "unit": "ns/iter",
            "extra": "iterations: 139629\ncpu: 4996.035859312886 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 13555.069727923294,
            "unit": "ns/iter",
            "extra": "iterations: 51787\ncpu: 13554.862262730032 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 43111.8884721822,
            "unit": "ns/iter",
            "extra": "iterations: 16265\ncpu: 43111.5561020596 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 126982.78009426709,
            "unit": "ns/iter",
            "extra": "iterations: 5516\ncpu: 126979.84572153744 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 422447.9446471876,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 422445.83150851575 ns\nthreads: 1"
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
            "value": 108476.34458203959,
            "unit": "ns/iter",
            "extra": "iterations: 6460\ncpu: 108474.88204334344 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 260832.72354050184,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 260822.94425612112 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 689126.2649140846,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 689122.5530839227 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 1797742.777499991,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 1797707.7774999994 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 5308348.170731778,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 5308228.284552845 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 15726093.177777834,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15725232.155555505 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 52065755.50000382,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 52062763.21428583 ns\nthreads: 1"
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
          "id": "f52bc724a2900d8b487ded361be10be56d7d7660",
          "message": "8 add per thread scheduler",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/f52bc724a2900d8b487ded361be10be56d7d7660"
        },
        "date": 1724654081223,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8102492.045977095,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8102331.298850576 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7682365.120879089,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7681743.087912086 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10160962.77941154,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10160952.367647065 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 9460775.506849201,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 9459989.054794516 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 4862084.787233964,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 4853229.75177305 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15122834.260869635,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15121188.39130436 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15647602.727272866,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15643500.159090905 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 17108094.707317024,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17106427.43902438 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 15733655.000000173,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15732590.522727262 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 8035721.556818229,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 7986262.238636371 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19588.42292500997,
            "unit": "ns/iter",
            "extra": "iterations: 36205\ncpu: 19587.908907609457 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38813.099147948524,
            "unit": "ns/iter",
            "extra": "iterations: 18074\ncpu: 38813.10108443065 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 77496.89352888546,
            "unit": "ns/iter",
            "extra": "iterations: 8932\ncpu: 77493.6621137484 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 159472.96798886626,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 159470.0925539314 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 344062.6396039783,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 344057.5574257428 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 763678.1749999832,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 763662.4684782613 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1814710.2532300493,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 1814613.5994832048 ns\nthreads: 1"
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
            "value": 2454105.052083359,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 2454019.7534722215 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5017811.71999994,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5017737.72 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10170973.536231564,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10170720.94202898 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20749555.121212915,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 20748986 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 45508859.50000147,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 45507841.0714285 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 99010390.28570883,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 99008537.28571439 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 241170104.33333993,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 241159914.33333287 ns\nthreads: 1"
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
          "id": "f52bc724a2900d8b487ded361be10be56d7d7660",
          "message": "8 add per thread scheduler",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/f52bc724a2900d8b487ded361be10be56d7d7660"
        },
        "date": 1724654095200,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9349759.653333269,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9348972.666666668 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 9132436.554053996,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9132294.905405406 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 12154582.203390103,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 12153098.644067796 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 11580394.500000088,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 11579757.999999996 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6900403.855769246,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 6881441.249999996 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 18890113.918919146,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18888095.837837853 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 17983641.923076622,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17981245.564102575 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 19963137.62857166,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 19962836.17142855 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 18950447.3333323,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 18946396.222222224 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 12585505.714286325,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 12544820.678571418 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19079.131715914136,
            "unit": "ns/iter",
            "extra": "iterations: 36313\ncpu: 19079.211081430873 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38710.937359688854,
            "unit": "ns/iter",
            "extra": "iterations: 18263\ncpu: 38709.63850407926 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 77764.77133744104,
            "unit": "ns/iter",
            "extra": "iterations: 9092\ncpu: 77763.61130664332 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 158178.24994213827,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 158177.2594306874 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 330462.31226237764,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 330459.870247148 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 701773.6319999698,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 701209.4280000003 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1594968.1876429908,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 1594973.8581235704 ns\nthreads: 1"
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
            "value": 2482440.797152865,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 2482273.7188612097 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5046166.971428485,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 5046009.514285719 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10157996.614286244,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 10157656.985714272 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20600586.02941193,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20600228.61764712 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 42754646.05882461,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 42752937.647058785 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 90732653.75000261,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 90728368.37500021 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 203653544.99998984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 203650280.00000033 ns\nthreads: 1"
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
          "id": "62086e9cb579d111b90d6ee2276e5299751f8802",
          "message": "Trash removed",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/11/commits/62086e9cb579d111b90d6ee2276e5299751f8802"
        },
        "date": 1724654634981,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 7549166.021276736,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 7548737.691489362 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7603884.538461536,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7603088.780219779 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 9271718.960526323,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9271060.723684208 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 9940685.239436554,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9939358.197183099 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 4738278.959459423,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 4729062.358108111 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15801714.70454546,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15800782.340909101 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15149474.58695652,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15148750.89130434 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 16544134.999999674,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16542632.738095235 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 15477359.666666897,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15475813.444444438 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 7204400.714285827,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 7169632.2142857155 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 820.2267663168888,
            "unit": "ns/iter",
            "extra": "iterations: 854589\ncpu: 820.1821542285239 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 1930.6173076286505,
            "unit": "ns/iter",
            "extra": "iterations: 362372\ncpu: 1930.5477768701755 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 5164.495898599528,
            "unit": "ns/iter",
            "extra": "iterations: 136173\ncpu: 5164.206024689179 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 16672.08355103813,
            "unit": "ns/iter",
            "extra": "iterations: 42106\ncpu: 16671.749631881423 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 57626.23694183489,
            "unit": "ns/iter",
            "extra": "iterations: 12138\ncpu: 57623.33399242038 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 184883.85695399297,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 184876.12030671598 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 647119.5889513078,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 647094.8071161056 ns\nthreads: 1"
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
            "value": 70741.04108896056,
            "unit": "ns/iter",
            "extra": "iterations: 9881\ncpu: 70737.44641230653 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 186971.32018128893,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 186966.25113303104 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 574662.7529313356,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 574623.4983249569 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 1863534.9281914823,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 1863466.2446808587 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 6391387.155963509,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6391093.4128440255 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 23419245.266667116,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 23416909.56666665 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 88825947.62500063,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 88820592.75000031 ns\nthreads: 1"
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
          "id": "62086e9cb579d111b90d6ee2276e5299751f8802",
          "message": "Trash removed",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/11/commits/62086e9cb579d111b90d6ee2276e5299751f8802"
        },
        "date": 1724654645463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8951402.794871854,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 8950015.333333334 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8501488.987804936,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 8500999.890243903 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 11219250.096774105,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11218175.032258065 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10606807.119403137,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10605381.835820893 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6419834.384615251,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 6407559.500000001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 18097118.333333842,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 18095711.615384605 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 17074084.9047619,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 17072954.71428573 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 18961800.29729681,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18960482.297297295 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 17891595.61538411,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17890262.589743607 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 11414487.327869449,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 11380344.901639348 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 680.0043348798916,
            "unit": "ns/iter",
            "extra": "iterations: 1030017\ncpu: 679.9845070518257 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 1577.996021285878,
            "unit": "ns/iter",
            "extra": "iterations: 444616\ncpu: 1577.9522824189858 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 3992.1768409812403,
            "unit": "ns/iter",
            "extra": "iterations: 172313\ncpu: 3992.0871263340578 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 11391.10818391088,
            "unit": "ns/iter",
            "extra": "iterations: 61682\ncpu: 11391.087740345647 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 38704.88656916342,
            "unit": "ns/iter",
            "extra": "iterations: 17914\ncpu: 38702.56263257789 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 116907.25480047405,
            "unit": "ns/iter",
            "extra": "iterations: 5989\ncpu: 116907.14125897488 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 405090.7358381496,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 405074.4098265894 ns\nthreads: 1"
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
            "value": 56748.31526379131,
            "unit": "ns/iter",
            "extra": "iterations: 12415\ncpu: 56748.24631494171 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 152396.4640666092,
            "unit": "ns/iter",
            "extra": "iterations: 4564\ncpu: 152387.64723926387 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 497693.2217484002,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 497692.2871357502 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 1545047.2799999362,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1544997.9111111152 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 5169559.169117707,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 5169317.286764684 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 18283449.23684187,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18282072.71052634 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 68460041.70000128,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68455482.30000028 ns\nthreads: 1"
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
          "id": "52d48a6b270b39fa7e12cde029faf3dd03bf80c4",
          "message": "8 add per thread scheduler",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/52d48a6b270b39fa7e12cde029faf3dd03bf80c4"
        },
        "date": 1724655212721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8066583.090908999,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 8065799.568181819 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7598513.967390931,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7597770.880434782 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10074158.385714326,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 10073303.714285713 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 9249370.96052615,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 9248688.67105263 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 4728396.662162257,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 4719984.283783786 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15024432.255319078,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 15024116.829787217 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15441642.55555466,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15441383.955555545 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 16547838.761904847,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16546700.76190475 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 15443899.199999578,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15443442.93333333 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 8140696.602272871,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 8110267.170454548 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19113.244160301205,
            "unit": "ns/iter",
            "extra": "iterations: 36132\ncpu: 19113.003625595036 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38701.638272211545,
            "unit": "ns/iter",
            "extra": "iterations: 18243\ncpu: 38700.6211697637 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 78103.28671645127,
            "unit": "ns/iter",
            "extra": "iterations: 8838\ncpu: 78101.67843403482 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 161148.44805491826,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 161146.3592677345 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 345570.4921182379,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 345567.80788177345 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 762167.7116228268,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 762133.3695175424 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1838756.301837206,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 1838696.9055118114 ns\nthreads: 1"
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
            "value": 2591056.156583674,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 2590923.387900357 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5056929.521739152,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 5056644.347826094 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10270611.194444414,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 10270355.888888855 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20749542.17647139,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20749038.47058822 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 44061501.81250013,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 44060589.999999955 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 99916778.14286147,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 99914067.42857173 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 241179289.99999094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 241158427.66666636 ns\nthreads: 1"
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
          "id": "52d48a6b270b39fa7e12cde029faf3dd03bf80c4",
          "message": "8 add per thread scheduler",
          "timestamp": "2023-08-21T19:08:54Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/52d48a6b270b39fa7e12cde029faf3dd03bf80c4"
        },
        "date": 1724655231487,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9060292.430380246,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 9059846.696202533 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8270466.365853675,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 8269880.841463413 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10817660.538461601,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10817153.907692311 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10652783.029850377,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10652139.716417914 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6325216.778846036,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 6315065.509615385 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 17786609.62499998,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17783671.050000004 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 16607557.285713678,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16607033.88095239 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 19019767.702703834,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 19018365.567567572 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 18012129.82051317,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 18011636.94871794 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 12220253.859649539,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 12185698.684210522 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19126.849732299135,
            "unit": "ns/iter",
            "extra": "iterations: 36608\ncpu: 19126.377786276225 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38206.60231786383,
            "unit": "ns/iter",
            "extra": "iterations: 18379\ncpu: 38204.432830948426 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 77275.41674770847,
            "unit": "ns/iter",
            "extra": "iterations: 9255\ncpu: 77275.2094003242 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 158673.60133333682,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 158670.82511111104 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 331600.5434469639,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 331586.2918867026 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 702492.2920353827,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 702490.1828908542 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1613547.089086832,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 1613459.6169265057 ns\nthreads: 1"
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
            "value": 2534030.711678769,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 2533957.5948905116 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 4934767.235714129,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 4934483.114285726 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10048641.304348147,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10048605.3188406 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20508094.600000147,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 20507787.31428571 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 42156286.64705746,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 42155172.9999999 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 90476240.00000098,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 90474348.62500037 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 205003693.33332932,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 205003314.00000012 ns\nthreads: 1"
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
          "id": "8408b4d542b50a3f05f2a906fb552ae5c9cb7e99",
          "message": "Trash removed\n\nTask: #10",
          "timestamp": "2024-08-26T08:56:19+02:00",
          "tree_id": "0007ea746fd3897e8cd17c6cc23a25b54f9aa7aa",
          "url": "https://github.com/burbokop/coschedula/commit/8408b4d542b50a3f05f2a906fb552ae5c9cb7e99"
        },
        "date": 1724655489725,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 7425567.419354581,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7425035.623655915 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7659758.054348023,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7659721.989130435 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 9410264.148648841,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9410127.540540539 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 9939183.58571396,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 9939031.071428569 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 4748252.53061234,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 4739173.163265304 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15827037.454544974,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15826620.636363631 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15503866.652174426,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15503314.086956516 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 16681684.857143776,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16681585.976190468 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 15571669.755555224,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15570555.822222233 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 7189217.346938895,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 7146186.224489793 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 891.4169470520908,
            "unit": "ns/iter",
            "extra": "iterations: 784337\ncpu: 891.3792272964289 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 2040.8813100257603,
            "unit": "ns/iter",
            "extra": "iterations: 341520\ncpu: 2040.8419448348532 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 5322.239225927339,
            "unit": "ns/iter",
            "extra": "iterations: 132494\ncpu: 5322.297960662369 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 16911.685888738073,
            "unit": "ns/iter",
            "extra": "iterations: 41272\ncpu: 16911.882244621058 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 57611.13496175639,
            "unit": "ns/iter",
            "extra": "iterations: 12159\ncpu: 57608.091372645766 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 185164.06555201733,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 185157.65658174094 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 647631.3231763524,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 647610.289935365 ns\nthreads: 1"
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
            "value": 70676.70032115522,
            "unit": "ns/iter",
            "extra": "iterations: 9964\ncpu: 70672.88659173019 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 186770.50412344304,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 186768.37190742182 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 585949.2676174762,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 585926.6199664434 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 1859428.5066313662,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 1859340.864721481 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 6360578.605504381,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6360358.229357805 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 23338552.43333384,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 23337484.699999914 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 88599006.87500045,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 88593164.12500018 ns\nthreads: 1"
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
          "id": "8408b4d542b50a3f05f2a906fb552ae5c9cb7e99",
          "message": "Trash removed\n\nTask: #10",
          "timestamp": "2024-08-26T08:56:19+02:00",
          "tree_id": "0007ea746fd3897e8cd17c6cc23a25b54f9aa7aa",
          "url": "https://github.com/burbokop/coschedula/commit/8408b4d542b50a3f05f2a906fb552ae5c9cb7e99"
        },
        "date": 1724655495894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8794785.448717682,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 8794914.294871794 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8605847.678571384,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 8605868.404761903 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10782943.661537886,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10782674.138461536 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10203597.941176835,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10203455.676470585 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6254782.688073512,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6244575.256880736 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 17503683.700000748,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17503345.150000006 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 16644732.902438879,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16643486.43902438 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 18445939.18420999,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18446214.78947368 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 17608689.70000047,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17607625.34999998 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 11409969.403225953,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 11376392.629032256 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 685.3841529847583,
            "unit": "ns/iter",
            "extra": "iterations: 1028913\ncpu: 685.363703247992 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 1567.1210193935026,
            "unit": "ns/iter",
            "extra": "iterations: 446540\ncpu: 1567.1245868231283 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 3950.537580295064,
            "unit": "ns/iter",
            "extra": "iterations: 176848\ncpu: 3950.5140516149386 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 11327.588893692677,
            "unit": "ns/iter",
            "extra": "iterations: 62451\ncpu: 11327.535059486641 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 38950.413110766836,
            "unit": "ns/iter",
            "extra": "iterations: 18092\ncpu: 38950.30571523324 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 117264.02176095989,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 117261.89537997988 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 404400.8131868072,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 404396.5454019659 ns\nthreads: 1"
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
            "value": 58446.36147257841,
            "unit": "ns/iter",
            "extra": "iterations: 12142\ncpu: 58443.98221050895 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 153769.445756787,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153770.25568678894 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 493749.10633802507,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 493744.2197183103 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 1541420.1528383829,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1541414.5633187818 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 5156427.867647002,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 5156300.852941165 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 18290142.94736752,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18290394.92105257 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 68640869.19999863,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68638902.49999969 ns\nthreads: 1"
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
          "id": "74ac75358cc5e033e3bd25beaf7b8ea8d1c6f588",
          "message": "8 add per thread scheduler",
          "timestamp": "2024-08-26T06:56:22Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/74ac75358cc5e033e3bd25beaf7b8ea8d1c6f588"
        },
        "date": 1724656620289,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 7411270.602150523,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7411094.215053763 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7640899.402173997,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7640701.717391305 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 9419199.05333331,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9419104.506666664 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10042617.594203018,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10042358.405797105 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 4764192.285714243,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 4755320.591836733 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15934277.568181766,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15933645.68181819 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15748233.456521446,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15747716.152173895 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 15503563.586956596,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15502815.586956514 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 16902824.476190403,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16900731.142857146 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 8272419.356321681,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8239250.885057455 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19658.32456930665,
            "unit": "ns/iter",
            "extra": "iterations: 36627\ncpu: 19657.5337046441 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38254.417013812286,
            "unit": "ns/iter",
            "extra": "iterations: 18244\ncpu: 38253.67742819553 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 78792.88112194666,
            "unit": "ns/iter",
            "extra": "iterations: 9127\ncpu: 78790.9246192614 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 160426.81238230274,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 160424.5430790962 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 343051.6192549594,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 343048.3555878079 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 763935.3665595026,
            "unit": "ns/iter",
            "extra": "iterations: 933\ncpu: 763915.0117899256 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1791525.7212275614,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 1791458.2148337564 ns\nthreads: 1"
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
            "value": 2412377.276816618,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 2412318.716262971 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5003770.430000145,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5003583.73000001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 9922612.63888889,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 9922422.8611111 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20584503.794117548,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20584114.088235237 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 43818420.875000544,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 43817543.062500075 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 97944476.71428739,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 97942962.14285682 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 238680383.00000194,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 238678032.99999937 ns\nthreads: 1"
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
          "id": "74ac75358cc5e033e3bd25beaf7b8ea8d1c6f588",
          "message": "8 add per thread scheduler",
          "timestamp": "2024-08-26T06:56:22Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/74ac75358cc5e033e3bd25beaf7b8ea8d1c6f588"
        },
        "date": 1724656620273,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 6724334.184465957,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 6723980.116504854 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 6094937.736842093,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 6094616.289473684 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 7965914.750000152,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 7965523.875000001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 7919229.999999803,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 7918586.545454546 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6566136.907407417,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6552586.407407409 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 13660493.215686707,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 13660003.33333334 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 12368711.553571744,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 12367961.98214285 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 15395595.555555828,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15395253.222222216 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 14503570.124999734,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 14502950.895833328 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 12133639.724137781,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 12101565.06896553 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 18948.59166323846,
            "unit": "ns/iter",
            "extra": "iterations: 36465\ncpu: 18947.70744549567 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 37847.296051227546,
            "unit": "ns/iter",
            "extra": "iterations: 18740\ncpu: 37845.561099252925 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 77016.54956580572,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 77013.92759670684 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 155785.3926052554,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 155778.35862363764 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 333032.7638632179,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 333018.8327171902 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 694087.9970326287,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 694034.8100890197 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1563742.9361233278,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 1563688.2092510995 ns\nthreads: 1"
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
            "value": 2492606.140350817,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 2492567.1578947357 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 4921087.177305009,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 4920995.453900725 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 9859584.7464791,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9859501.197183067 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20484914.944443885,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 20484624.555555537 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 42904450.470587105,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 42903077.58823531 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 88091362.25000103,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 88090403.37499985 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 198673488.33333647,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 198668169 ns\nthreads: 1"
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
          "id": "6111f9a7bc38774c7f073ff2c1aa94ee3b5b91bd",
          "message": "8 add per thread scheduler",
          "timestamp": "2024-08-26T06:56:22Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/6111f9a7bc38774c7f073ff2c1aa94ee3b5b91bd"
        },
        "date": 1724674072404,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8078679.193181867,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 8077788.363636365 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7651908.175824366,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7650902.164835165 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 9875202.90277762,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 9874421.61111111 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10793071.712120993,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 10792786.909090906 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 5027903.579999986,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5017795.37 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15489148.800000092,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15488564.31111111 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15531733.555555625,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15531232.422222214 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 16486713.511627985,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16485077.046511637 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 17787870.51282084,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17786949.256410263 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 8649906.841463363,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 8616984.01219512 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19361.40376621569,
            "unit": "ns/iter",
            "extra": "iterations: 35845\ncpu: 19360.81174501322 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38992.916437904045,
            "unit": "ns/iter",
            "extra": "iterations: 18214\ncpu: 38992.39228066327 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 78842.93847352003,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 78839.48809523818 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 161823.8700669226,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 161819.07523655647 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 348853.48511468404,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 348832.7964860912 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 764716.9900552569,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 764704.8077348061 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1805774.7814909443,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 1805698.3419023145 ns\nthreads: 1"
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
            "value": 2542154.813186777,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 2542066.597069595 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5142632.902255658,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 5142532.969924817 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10529390.522387799,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10529023.119402973 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 21784367.909091454,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 21783727.181818143 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 45931615.133334465,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45930638.46666657 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 103367736.42857061,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 103364653.28571416 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 249615726.00000182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249608669.33333275 ns\nthreads: 1"
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
          "id": "19c87c178ddb6d5b2a653044678872125e9dcdbf",
          "message": "8 add per thread scheduler",
          "timestamp": "2024-08-26T06:56:22Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/19c87c178ddb6d5b2a653044678872125e9dcdbf"
        },
        "date": 1724788510807,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 7625891.849462125,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7624918.236559141 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7829178.05494495,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7829005.857142857 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 9918249.420289807,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 9917805.362318838 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10066578.6571426,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 10066385.457142856 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 4931512.828571474,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 4921391.32142857 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 16097887.227272427,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 16096611.477272725 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15204760.826086927,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15204157.73913044 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 16870799.48780479,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16867484.780487794 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 17540768.80487787,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17540023.121951215 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 7460726.873684185,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 7426534.526315786 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19644.78957854019,
            "unit": "ns/iter",
            "extra": "iterations: 35638\ncpu: 19644.60842359284 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 40965.78803670496,
            "unit": "ns/iter",
            "extra": "iterations: 17654\ncpu: 40964.06310184656 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 80958.94757789522,
            "unit": "ns/iter",
            "extra": "iterations: 8794\ncpu: 80957.7957698431 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 165376.94859038197,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 165370.4212271973 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 343044.5460030251,
            "unit": "ns/iter",
            "extra": "iterations: 1989\ncpu: 343042.43388637586 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 768192.8004246263,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 768155.9755838643 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1803893.8463541174,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 1803860.3697916644 ns\nthreads: 1"
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
            "value": 2537908.181159392,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2537862.5181159396 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5131362.503649586,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 5131163.124087604 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10596212.507691951,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10596070.78461538 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 21576244.68750008,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21574851.0624999 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 46617684.73333344,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 46617687.40000009 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 101677914.14285634,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 101675180.28571466 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 248223051.3333358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 248220620.00000027 ns\nthreads: 1"
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
          "id": "47c9103715af2af546969183f47cad4e48bc3e48",
          "message": "8 add per thread scheduler",
          "timestamp": "2024-08-26T06:56:22Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/47c9103715af2af546969183f47cad4e48bc3e48"
        },
        "date": 1724788667541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8155758.406976977,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 8155578.5581395365 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7770677.250000125,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 7770069.023809524 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 9759189.222222235,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 9758681.319444444 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10753068.3692311,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10752006.430769237 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 5089416.539007126,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 5077934.836879432 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 15370915.543478556,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15370379.695652174 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15831665.431817818,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15831120.068181831 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 16126276.883721063,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16126228.534883719 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 18182420.00000001,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18179040.13157894 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 7394932.311828086,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7359882.903225809 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19277.92520522936,
            "unit": "ns/iter",
            "extra": "iterations: 36179\ncpu: 19277.378617429997 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38497.12208543839,
            "unit": "ns/iter",
            "extra": "iterations: 17627\ncpu: 38495.61717819255 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 78420.19302010506,
            "unit": "ns/iter",
            "extra": "iterations: 8854\ncpu: 78418.91077479105 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 162341.1874422893,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 162335.9381348108 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 346889.96377875935,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 346872.86147821875 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 765797.895586666,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 765776.4607104405 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1807499.50899741,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 1807495.9742930625 ns\nthreads: 1"
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
            "value": 2553182.2690908774,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 2553144.636363643 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5128335.102941025,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 5128183.713235286 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10441555.393939413,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 10440821.757575795 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 21715449.406249475,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21714859.062499925 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 45843834.4000001,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45842586.59999989 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 103215718.57143195,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 103212318.14285676 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 249083691.3333396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249075411.66666648 ns\nthreads: 1"
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
          "id": "47c9103715af2af546969183f47cad4e48bc3e48",
          "message": "8 add per thread scheduler",
          "timestamp": "2024-08-26T06:56:22Z",
          "url": "https://github.com/burbokop/coschedula/pull/9/commits/47c9103715af2af546969183f47cad4e48bc3e48"
        },
        "date": 1724788678548,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8604298.777777752,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 8604081.28395062 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8170504.31764682,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 8170189.235294118 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10868947.508196726,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 10868343.950819675 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10269724.808823187,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10269131.16176471 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6045597.854700854,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 6035619.974358972 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 17196644.024999585,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17196288.950000007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 16215781.761904474,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16215012.595238095 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 18323998.73684216,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18323511.684210528 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 13335567.69230772,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 13334481.076923074 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 10320670.072463762,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10288386.507246392 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19734.145269720553,
            "unit": "ns/iter",
            "extra": "iterations: 36890\ncpu: 19733.05586879914 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38307.39651890104,
            "unit": "ns/iter",
            "extra": "iterations: 18385\ncpu: 38306.04802828401 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 77350.55299238343,
            "unit": "ns/iter",
            "extra": "iterations: 9190\ncpu: 77347.3940152339 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 158445.29738267127,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 158434.91719314066 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 326935.07797087054,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 326918.78205730364 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 688740.1015779108,
            "unit": "ns/iter",
            "extra": "iterations: 1014\ncpu: 688728.4220907302 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1582026.546948378,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 1582020.5657277014 ns\nthreads: 1"
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
            "value": 2464691.092198543,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 2464628.4716312075 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 4963324.737588586,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 4963077.063829789 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 9989568.11594222,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 9989093.623188416 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20359200.52941181,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20358979.617647007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 42263908.93749965,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 42263154.68750008 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 92285454.75000161,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 92285216.62499967 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 204881550.99999973,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 204871037.6666669 ns\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b97a7ae0c00f2f23941122f3b5553176263db4b4",
          "message": "8 add per thread scheduler (#9)\n\n* class `scheduler` seperated into `per_thread_scheduler` & `global_scheduler`\r\n\r\nTask: #8\r\n\r\n* conschedula::async owerload added to accept another coroutine\r\n\r\nTask: #8\r\n\r\n* Runners added\r\n\r\nTask: #8\r\n\r\n* Test & Benchmarks fixed\r\n\r\nTask: #8\r\n\r\n* New tests added\r\n\r\nTask: #8\r\n\r\n* Fix windows build\r\n\r\nTask: #8\r\n\r\n* Default scheduler added\r\n\r\nTask: #8\r\n\r\n* Runners modified and tested\r\n\r\nTask: #8",
          "timestamp": "2024-08-27T22:00:02+02:00",
          "tree_id": "fa3c94b9c0f33770e75b90d516779c48f946b545",
          "url": "https://github.com/burbokop/coschedula/commit/b97a7ae0c00f2f23941122f3b5553176263db4b4"
        },
        "date": 1724788918438,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8985830.386666672,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 8985202.346666666 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8110838.839080503,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8110230.402298852 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10628319.09230751,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10627930.78461539 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10257968.942028953,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10257958.594202897 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6029346.521367505,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 6021060.367521369 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 17459475.675000392,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17459240.725 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 16182831.581395501,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16182083.209302317 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 18425286.184210382,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18423741.02631579 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 13388288.11538443,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 13387887.807692306 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 10064057.085714191,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 10031369.599999987 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 18647.143532861468,
            "unit": "ns/iter",
            "extra": "iterations: 36152\ncpu: 18646.93134543036 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38512.98310534669,
            "unit": "ns/iter",
            "extra": "iterations: 18349\ncpu: 38512.51130851822 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 75976.05551203107,
            "unit": "ns/iter",
            "extra": "iterations: 8935\ncpu: 75974.80223838838 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 156236.45433893136,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 156229.93775556577 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 329113.11882572103,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 329102.94687791215 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 704696.5905044421,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 704673.8476755687 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1582911.3348624131,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 1582838.2798165109 ns\nthreads: 1"
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
            "value": 2467693.134751787,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 2467559.08510638 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 4936656.084507103,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 4936458.246478877 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 9986070.957746478,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9985691.014084492 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20435114.400000233,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 20434302.771428544 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 42544639.05882363,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 42543020.23529424 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 91127025.8750001,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 91123707.87500001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 205284943.6666596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 205282684.66666687 ns\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b97a7ae0c00f2f23941122f3b5553176263db4b4",
          "message": "8 add per thread scheduler (#9)\n\n* class `scheduler` seperated into `per_thread_scheduler` & `global_scheduler`\r\n\r\nTask: #8\r\n\r\n* conschedula::async owerload added to accept another coroutine\r\n\r\nTask: #8\r\n\r\n* Runners added\r\n\r\nTask: #8\r\n\r\n* Test & Benchmarks fixed\r\n\r\nTask: #8\r\n\r\n* New tests added\r\n\r\nTask: #8\r\n\r\n* Fix windows build\r\n\r\nTask: #8\r\n\r\n* Default scheduler added\r\n\r\nTask: #8\r\n\r\n* Runners modified and tested\r\n\r\nTask: #8",
          "timestamp": "2024-08-27T22:00:02+02:00",
          "tree_id": "fa3c94b9c0f33770e75b90d516779c48f946b545",
          "url": "https://github.com/burbokop/coschedula/commit/b97a7ae0c00f2f23941122f3b5553176263db4b4"
        },
        "date": 1724788929800,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 7519823.369564882,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7519331.195652174 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 7789406.296703523,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7789114.923076923 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10044925.59420224,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10044498.34782609 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10203036.642857503,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 10202436.94285714 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 5045364.929999892,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5032212.189999999 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 16323744.093023546,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16322371.906976745 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 15654737.977777382,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15653665.155555569 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 17560653.641024917,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17559805.94871796 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 17753040.153846856,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17751882.384615373 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 7627667.613636323,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 7590879.227272731 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19222.029823341312,
            "unit": "ns/iter",
            "extra": "iterations: 35945\ncpu: 19221.81891779106 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38768.55172413712,
            "unit": "ns/iter",
            "extra": "iterations: 18299\ncpu: 38767.761134488304 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 79999.1289577861,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 79998.89182058032 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 162054.71617544664,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 162049.24135530283 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 345898.57833088055,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 345894.41825280664 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 755590.06413042,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 755545.8000000011 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1810448.730569884,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 1810391.87046632 ns\nthreads: 1"
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
            "value": 2536137.087912056,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 2535947.776556782 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5154354.471014614,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 5154152.043478278 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10529545.805970646,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10529349.611940311 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 22851706.249999993,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22851296.000000022 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 45831118.06666693,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45829711.13333324 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 102955238.57142338,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 102952256.85714269 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 256849849.33333984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 256842989.66666695 ns\nthreads: 1"
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
          "id": "b2f6d91c604b88cba6bec4c4a2f61d850f007a41",
          "message": "Add lightweight expected for error handling",
          "timestamp": "2024-08-27T20:00:05Z",
          "url": "https://github.com/burbokop/coschedula/pull/17/commits/b2f6d91c604b88cba6bec4c4a2f61d850f007a41"
        },
        "date": 1724870095832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9594672.972972652,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9593854.22972973 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 9032350.435897266,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 9032036.602564102 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 12092904.672414307,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 12092775.775862072 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 11527340.245901333,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 11526970.327868858 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6525125.906542306,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 6508391.140186916 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 19573899.108107723,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 19571889.918918908 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 21742653.31579088,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 21740381.71052631 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 20530719.529410686,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20527319.852941167 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 14794464.893616641,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 14792727.595744686 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 10415508.597015472,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10373227.641791042 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19324.215426996983,
            "unit": "ns/iter",
            "extra": "iterations: 36300\ncpu: 19323.548044077146 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 39280.94135090534,
            "unit": "ns/iter",
            "extra": "iterations: 18210\ncpu: 39279.61433278416 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 79940.34259051041,
            "unit": "ns/iter",
            "extra": "iterations: 8894\ncpu: 79939.5220373285 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 161342.13240971122,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 161327.71701112887 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 341486.3122586921,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 341482.7972972968 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 713394.4281377,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 713364.0526315788 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1599088.9517241358,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 1599016.0000000014 ns\nthreads: 1"
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
            "value": 2517522.160583818,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 2517265.8175182506 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5098775.304347832,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 5098321.869565215 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10295183.869564828,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10294883.391304325 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20836801.5882356,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20835836.029411808 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 43460156.750001036,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 43457873.687499985 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 91426195.62499732,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 91421499.62500001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 205769619.99999335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 205767505.3333341 ns\nthreads: 1"
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
          "id": "b2f6d91c604b88cba6bec4c4a2f61d850f007a41",
          "message": "Add lightweight expected for error handling",
          "timestamp": "2024-08-27T20:00:05Z",
          "url": "https://github.com/burbokop/coschedula/pull/17/commits/b2f6d91c604b88cba6bec4c4a2f61d850f007a41"
        },
        "date": 1724870121467,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 7854356.63636362,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 7853632.715909091 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8126880.123456802,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 8126733.555555556 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10667243.104477681,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10666040.641791046 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10585000.854838941,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 10584284.741935484 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 5131968.429629473,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 5118562.000000001 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 16712797.309524031,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16711677.21428571 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 16081924.642857563,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16081254.666666677 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 17510512.65000001,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17509068.375000015 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 17614195.350000728,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17613830.000000007 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 7604239.849461963,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7568056.548387106 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19127.79117817453,
            "unit": "ns/iter",
            "extra": "iterations: 36251\ncpu: 19127.71669747042 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38738.08928571421,
            "unit": "ns/iter",
            "extra": "iterations: 18088\ncpu: 38737.064904909355 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 78769.30263452024,
            "unit": "ns/iter",
            "extra": "iterations: 8958\ncpu: 78766.7714891717 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 162624.67018284503,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 162607.31340834493 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 342683.510223949,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 342672.51557935745 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 762002.0862619864,
            "unit": "ns/iter",
            "extra": "iterations: 939\ncpu: 761974.4984025547 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1799448.181347238,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 1799442.4870466352 ns\nthreads: 1"
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
            "value": 2520815.5183825493,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2520749.8749999963 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5101511.954887199,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 5101159.015037582 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10335001.69117641,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10334977.205882356 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 21578771.75757462,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 21578038.454545442 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 46436538.06666634,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 46436366.46666683 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 101789941.42857586,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 101785372.14285706 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 245894974.33333918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 245893963.66666588 ns\nthreads: 1"
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
          "id": "bdaac4a24a8dc7cdb68e67c73a2ca4d442678c2b",
          "message": "Disable benchmarks upload for non-master\n\n#14",
          "timestamp": "2024-08-28T20:42:36+02:00",
          "tree_id": "cf1157db21775c76679ce6cf4afc38af294cfb03",
          "url": "https://github.com/burbokop/coschedula/commit/bdaac4a24a8dc7cdb68e67c73a2ca4d442678c2b"
        },
        "date": 1724870703108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 9757291.864864605,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9756389.932432434 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 9031525.493506327,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9030890.7012987 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 12117560.779660923,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 12116980.813559324 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 11972202.881356314,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 11971028.050847452 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6818609.77142849,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 6802004.104761901 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 19202118.80555516,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 19199824.02777778 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 17995412.07692265,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17992039.589743607 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 20552946.05882389,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20550916.41176471 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 14830900.85106381,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 14829362.170212766 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 10851544.575757543,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 10804281.393939398 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 19018.417695305205,
            "unit": "ns/iter",
            "extra": "iterations: 36699\ncpu: 19017.460339518773 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 38497.12744937486,
            "unit": "ns/iter",
            "extra": "iterations: 18321\ncpu: 38496.37765405812 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 77205.56846382082,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 77202.32820906986 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 156765.01053339223,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 156764.8325862841 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 331687.5695110351,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 331671.66107382555 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 709967.9293139485,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 709946.762993763 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1619218.4709976634,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 1619103.7981438513 ns\nthreads: 1"
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
            "value": 2489183.531690081,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 2489079.507042256 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 5006777.586956446,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 5006631.724637688 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 10158455.371428333,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 10157884.142857146 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20381031.823529337,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20381014.76470586 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 42730716.93750019,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 42727170.062500045 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 91962060.42857316,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 91962000.14285694 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 212686836.3333377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 212679572.33333233 ns\nthreads: 1"
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
          "id": "5c8380a9a6aafb2c1657a5efa60023610cd4796b",
          "message": "Add lightweight expected for error handling\n\nTask: #12",
          "timestamp": "2024-08-28T20:48:46+02:00",
          "tree_id": "334aa9f9a450aa74cfeffb0371e12474440b6d2c",
          "url": "https://github.com/burbokop/coschedula/commit/5c8380a9a6aafb2c1657a5efa60023610cd4796b"
        },
        "date": 1724871073244,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "coschedula::benchmarks::task::without_coroutines",
            "value": 8796308.062499847,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 8796106.35 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::without_coroutines_manual_loop",
            "value": 8213556.292683088,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 8213031.439024391 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq",
            "value": 10939396.640624821,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10938900.718749998 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::seq_async",
            "value": 10308850.00000002,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10307768.072463764 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::par",
            "value": 6009548.666666794,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 5998294.777777778 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines",
            "value": 17026632.238095574,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 17025394.666666664 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_without_coroutines_manual_loop",
            "value": 16288519.534883738,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16287512.697674433 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq",
            "value": 18251400.736841705,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18250669.842105277 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_seq_async",
            "value": 13230016.115384795,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 13229947.500000002 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::task::two_tasks_par",
            "value": 9991655.749999888,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 9957896.13888889 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/16",
            "value": 18568.25796069127,
            "unit": "ns/iter",
            "extra": "iterations: 37905\ncpu: 18567.703785780242 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/32",
            "value": 37055.481775903376,
            "unit": "ns/iter",
            "extra": "iterations: 18492\ncpu: 37054.68835171962 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/64",
            "value": 75950.11503466104,
            "unit": "ns/iter",
            "extra": "iterations: 9232\ncpu: 75948.18035095317 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/128",
            "value": 155140.3837630473,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 155133.14702748755 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/256",
            "value": 329402.8768014843,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 329393.23895862413 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/512",
            "value": 692842.7289811998,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 692833.6468842737 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks/1024",
            "value": 1546394.8866666518,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1546360.9600000004 ns\nthreads: 1"
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
            "value": 2449284.5516014965,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 2449204.348754447 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/32",
            "value": 4889997.916666802,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 4889873.416666666 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/64",
            "value": 9853314.04054041,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9853054.27027025 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/128",
            "value": 20082838.55882349,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20082520.676470578 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/256",
            "value": 42122199.70588147,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 42120757.94117647 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/512",
            "value": 90250815.75000016,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 90249541.24999996 ns\nthreads: 1"
          },
          {
            "name": "coschedula::benchmarks::complexity::num_of_tasks_async/1024",
            "value": 202874004.5000035,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 202864872.49999928 ns\nthreads: 1"
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