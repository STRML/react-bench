'use strict';

var props = {
  title: 'React Helper',
  message: 'This was rendered with the react helper.'
};

module.exports = function (React, ReactDOMServer) {
  var Page = React.createClass({
    displayName: 'Page',

    render: function render() {
      return React.createElement(
        'html',
        null,
        React.createElement(
          'head',
          null,
          React.createElement(
            'title',
            null,
            this.props.title
          )
        ),
        React.createElement(
          'body',
          null,
          React.createElement(
            'h1',
            null,
            this.props.title
          ),
          React.createElement(
            'p',
            null,
            this.props.message
          )
        )
      );
    }

  });
  return function() {
    var content = React.createElement(Page, props);
    ReactDOMServer.renderToString(content);
  };
};
