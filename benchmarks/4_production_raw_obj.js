'use strict';

module.exports.bench = require('./1_baseline').bench;
// process.env is set to {NODE_ENV: 'production'} in server.js before all runs
module.exports.name = 'Production (raw obj process.env)';
