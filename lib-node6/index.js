'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uneval = require('./uneval');

var _uneval2 = _interopRequireDefault(_uneval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Html extends _react.Component {

    render() {
        let moduleIdentifier = this.props.moduleDescriptor && this.props.moduleDescriptor.identifier;
        var _props = this.props;
        const context = _props.context;
        const initialContextState = _props.initialContextState;


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
                _react2.default.createElement('script', { defer: true, src: `/${ this.props.scriptName || 'bundle' }.js` }),
                _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: (moduleIdentifier ? `window.MODULE_IDENTIFIER = '${ moduleIdentifier }';` : '') + `window.VERSION = '${ context.config.get('version') }';` + (initialContextState ? `window.initialContextState = ${ (0, _uneval2.default)(initialContextState) };` : '') + `window.initialData = ${ (0, _uneval2.default)(this.props.initialData) }`
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
}
exports.default = Html;
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
//# sourceMappingURL=index.js.map