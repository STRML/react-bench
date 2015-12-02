var benchmarks = require('./benchmarks');
process.env.NODE_ENV = 'development';

const ITERATIONS = 50000;
const PRODUCTION_BENCH = './benchmarks/3_production';
const RAW_OBJ_BENCH = './benchmarks/4_production_raw_obj';
const FIX_BENCH = './benchmarks/6_hoist_const';

// Run benches
benchmarks.forEach(function(benchFileName) {
  prepareBench(benchFileName);
  var bench = require(benchFileName);
  var benchName = bench.name;
  var benchFn = bench.bench;

  // Warmup for v8
  for (var i = 0; i < 100; i++) { benchFn(); }

  console.time(ITERATIONS + ' iterations of ' + benchName);
  for (var i = 0; i < ITERATIONS; i++) { benchFn(); }
  console.timeEnd(ITERATIONS + ' iterations of ' + benchName);

  finishBench(benchFileName);
});

function prepareBench(benchName) {
  if (benchName === PRODUCTION_BENCH || benchName === FIX_BENCH) {
    process.env.NODE_ENV = 'production';
  } else if (benchName === RAW_OBJ_BENCH) {
    originalEnv = process.env;
    process.env = {NODE_ENV: 'production'};
  }
}

function finishBench(benchName) {
  if (benchName === PRODUCTION_BENCH || benchName === FIX_BENCH) {
    process.env.NODE_ENV = 'development';
  } else if (benchName === RAW_OBJ_BENCH) {
    process.env = originalEnv;
  }
}
