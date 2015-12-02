'use strict';

var React = require('react/dist/react.min');
// Fire me... otherwise we can't get minified anymore as react-dom requires 'react'
var ReactDOMServer = React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
module.exports.bench = require('./.render.js')(React, ReactDOMServer);
module.exports.name = "Minified React (dist/react.min)";
