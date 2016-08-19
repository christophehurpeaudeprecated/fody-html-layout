'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Html;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uneval = require('./uneval');

var _uneval2 = _interopRequireDefault(_uneval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint jsx-a11y/html-has-lang: "off", prefer-template: "off" */
Html.propTypes = {
  title: _react.PropTypes.string,
  description: _react.PropTypes.string,
  css: _react.PropTypes.string,
  body: _react.PropTypes.string.isRequired,
  scriptName: _react.PropTypes.string,
  preBody: _react.PropTypes.element,
  postBody: _react.PropTypes.element,
  initialData: _react.PropTypes.object.isRequired,
  initialBrowserContext: _react.PropTypes.object,
  moduleDescriptor: _react.PropTypes.object,
  context: _react.PropTypes.object.isRequired
};

function Html(props) {
  let moduleIdentifier = props.moduleDescriptor && props.moduleDescriptor.identifier;
  const context = props.context;
  const initialBrowserContext = props.initialBrowserContext;


  return _react2.default.createElement(
    'html',
    {
      __self: this
    },
    _react2.default.createElement(
      'head',
      {
        __self: this
      },
      _react2.default.createElement('meta', { charSet: 'utf-8', __self: this
      }),
      _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __self: this
      }),
      _react2.default.createElement(
        'title',
        {
          __self: this
        },
        props.title
      ),
      _react2.default.createElement('meta', { name: 'description', content: props.description, __self: this
      }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __self: this
      }),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css', __self: this
      }),
      _react2.default.createElement('link', { rel: 'stylesheet', href: '/index.css', __self: this
      }),
      _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: props.css }, __self: this
      }),
      _react2.default.createElement('script', { defer: true, src: `/${ props.scriptName || 'bundle' }.js`, __self: this
      }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: { __html: (moduleIdentifier ? `window.MODULE_IDENTIFIER = '${ moduleIdentifier }';` : '') + `window.VERSION = '${ context.config.get('version') }';` + (initialBrowserContext ? `window.initialBrowserContext = ${ (0, _uneval2.default)(initialBrowserContext) };` : '') + `window.initialData = ${ (0, _uneval2.default)(props.initialData) }`
        },
        __self: this
      })
    ),
    _react2.default.createElement(
      'body',
      {
        __self: this
      },
      _react2.default.createElement(
        'div',
        { id: 'loading-bar', className: 'loading-bar', __self: this
        },
        _react2.default.createElement('div', { className: 'progress', __self: this
        })
      ),
      props.preBody,
      _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: props.body }, __self: this
      }),
      props.postBody
    )
  );
}
//# sourceMappingURL=index.js.map