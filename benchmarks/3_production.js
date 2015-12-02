'use strict';

module.exports.bench = require('./1_baseline').bench;
// NODE_ENV is set to 'production' in server.js before all runs
module.exports.name = 'Production';
