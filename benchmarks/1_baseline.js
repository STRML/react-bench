'use strict';

var React = require('react');
var ReactDOMServer = require('react-dom/server');
module.exports.bench = require('./.render.js')(React, ReactDOMServer);
module.exports.name = 'Baseline';
