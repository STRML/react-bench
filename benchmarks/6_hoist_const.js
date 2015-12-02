'use strict';

var React = require('../react/build/packages/react');
var ReactDOMServer = React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
module.exports.bench = require('./.render.js')(React, ReactDOMServer);
module.exports.name = "Proposed fix (hoist const)";
