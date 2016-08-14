'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uneval = require('./uneval');

var _uneval2 = _interopRequireDefault(_uneval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Html = function (_Component) {
    _inherits(Html, _Component);

    function Html() {
        _classCallCheck(this, Html);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Html).apply(this, arguments));
    }

    _createClass(Html, [{
        key: 'render',
        value: function render() {
            var moduleIdentifier = this.props.moduleDescriptor && this.props.moduleDescriptor.identifier;
            var _props = this.props;
            var context = _props.context;
            var initialContextState = _props.initialContextState;


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
                        this.props.title
                    ),
                    _react2.default.createElement('meta', { name: 'description', content: this.props.description }),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
                    _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', href: '/index.css' }),
                    _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } }),
                    _react2.default.createElement('script', { defer: true, src: '/' + (this.props.scriptName || 'bundle') + '.js' }),
                    _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: (moduleIdentifier ? 'window.MODULE_IDENTIFIER = \'' + moduleIdentifier + '\';' : '') + ('window.VERSION = \'' + context.config.get('version') + '\';') + (initialContextState ? 'window.initialContextState = ' + (0, _uneval2.default)(initialContextState) + ';' : '') + ('window.initialData = ' + (0, _uneval2.default)(this.props.initialData))
                        }
                    })
                ),
                _react2.default.createElement(
                    'body',
                    null,
                    this.props.preBody,
                    _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
                    this.props.postBody
                )
            );
        }
    }]);

    return Html;
}(_react.Component);

Html.propTypes = {
    title: _react.PropTypes.string,
    description: _react.PropTypes.string,
    css: _react.PropTypes.string,
    body: _react.PropTypes.string.isRequired,
    scriptName: _react.PropTypes.string,
    preBody: _react.PropTypes.element,
    postBody: _react.PropTypes.element,
    initialData: _react.PropTypes.object.isRequired,
    initialContextState: _react.PropTypes.object,
    moduleDescriptor: _react.PropTypes.object,
    context: _react.PropTypes.object.isRequired
};
Html.defaultProps = {
    title: '',
    description: ''
};
exports.default = Html;
//# sourceMappingURL=index.js.map