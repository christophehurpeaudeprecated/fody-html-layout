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

/* eslint-disable jsx-a11y/html-has-lang, prefer-template, react/forbid-prop-types */
Html.propTypes = {
  title: _react.PropTypes.string,
  description: _react.PropTypes.string,
  css: _react.PropTypes.string,
  body: _react.PropTypes.string.isRequired,
  scriptName: _react.PropTypes.string,
  styleName: _react.PropTypes.string,
  preBody: _react.PropTypes.element,
  postBody: _react.PropTypes.element,
  initialData: _react.PropTypes.object.isRequired,
  initialBrowserContext: _react.PropTypes.object,
  moduleDescriptor: _react.PropTypes.object,
  context: _react.PropTypes.object.isRequired
};

var assetUrl = function assetUrl(asset, version) {
  return '/' + version + '/' + asset;
};

function Html(props) {
  var moduleIdentifier = props.moduleDescriptor && props.moduleDescriptor.identifier;
  var context = props.context;
  var initialBrowserContext = props.initialBrowserContext;

  var version = context.config.get('version');

  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
      _react2.default.createElement(
        'title',
        null,
        props.title
      ),
      _react2.default.createElement('meta', { name: 'description', content: props.description }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css' }),
      _react2.default.createElement('link', { rel: 'stylesheet', href: assetUrl((props.styleName || 'index') + '.css', version) }),
      _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: props.css } }),
      _react2.default.createElement('script', { defer: true, src: assetUrl((props.scriptName || 'bundle') + '.js', version) }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: { __html: (moduleIdentifier ? 'window.MODULE_IDENTIFIER=\'' + moduleIdentifier + '\';' : '') + ('window.VERSION=\'' + version + '\';') + (!initialBrowserContext ? '' : 'window.initialBrowserContext=' + (0, _uneval2.default)(initialBrowserContext) + ';') + ('window.initialData=' + (0, _uneval2.default)(props.initialData))
        }
      })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement(
        'div',
        { id: 'loading-bar', className: 'loading-bar' },
        _react2.default.createElement('div', { className: 'progress' })
      ),
      props.preBody,
      _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: props.body } }),
      props.postBody
    )
  );
}
//# sourceMappingURL=index.js.map