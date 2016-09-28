'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'index.jsx'; /* eslint jsx-a11y/html-has-lang: "off", prefer-template: "off", react/forbid-prop-types: "off" */

exports.default = Html;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uneval = require('./uneval');

var _uneval2 = _interopRequireDefault(_uneval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const assetUrl = (asset, version) => `/${ asset }?${ version }`;

function Html(props) {
  let moduleIdentifier = props.moduleDescriptor && props.moduleDescriptor.identifier;
  const context = props.context;
  const initialBrowserContext = props.initialBrowserContext;

  const version = context.config.get('version');

  return _react2.default.createElement(
    'html',
    {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    },
    _react2.default.createElement(
      'head',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      _react2.default.createElement('meta', { charSet: 'utf-8', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }),
      _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }),
      _react2.default.createElement(
        'title',
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        props.title
      ),
      _react2.default.createElement('meta', { name: 'description', content: props.description, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }),
      _react2.default.createElement('link', { rel: 'stylesheet', href: assetUrl('index.css', version), __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }),
      _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: props.css }, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }),
      _react2.default.createElement('script', { defer: true, src: assetUrl(`${ props.scriptName || 'bundle' }.js`, version), __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: { __html: (moduleIdentifier ? `window.MODULE_IDENTIFIER = '${ moduleIdentifier }';` : '') + `window.VERSION = '${ version }';` + (initialBrowserContext ? `window.initialBrowserContext = ${ (0, _uneval2.default)(initialBrowserContext) };` : '') + `window.initialData = ${ (0, _uneval2.default)(props.initialData) }`
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })
    ),
    _react2.default.createElement(
      'body',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      },
      _react2.default.createElement(
        'div',
        { id: 'loading-bar', className: 'loading-bar', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        },
        _react2.default.createElement('div', { className: 'progress', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })
      ),
      props.preBody,
      _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: props.body }, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }),
      props.postBody
    )
  );
}
//# sourceMappingURL=index.js.map