var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import uneval from './uneval';

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


            return React.createElement(
                'html',
                {
                    __self: this
                },
                React.createElement(
                    'head',
                    {
                        __self: this
                    },
                    React.createElement('meta', { charSet: 'utf-8', __self: this
                    }),
                    React.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __self: this
                    }),
                    React.createElement(
                        'title',
                        {
                            __self: this
                        },
                        this.props.title
                    ),
                    React.createElement('meta', { name: 'description', content: this.props.description, __self: this
                    }),
                    React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __self: this
                    }),
                    React.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css', __self: this
                    }),
                    React.createElement('link', { rel: 'stylesheet', href: '/index.css', __self: this
                    }),
                    React.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css }, __self: this
                    }),
                    React.createElement('script', { defer: true, src: '/' + (this.props.scriptName || 'bundle') + '.js', __self: this
                    }),
                    React.createElement('script', { dangerouslySetInnerHTML: { __html: (moduleIdentifier ? 'window.MODULE_IDENTIFIER = \'' + moduleIdentifier + '\';' : '') + ('window.VERSION = \'' + context.config.get('version') + '\';') + (initialContextState ? 'window.initialContextState = ' + uneval(initialContextState) + ';' : '') + ('window.initialData = ' + uneval(this.props.initialData))
                        },
                        __self: this
                    })
                ),
                React.createElement(
                    'body',
                    {
                        __self: this
                    },
                    this.props.preBody,
                    React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body }, __self: this
                    }),
                    this.props.postBody
                )
            );
        }
    }]);

    return Html;
}(Component);

Html.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
    scriptName: PropTypes.string,
    preBody: PropTypes.element,
    postBody: PropTypes.element,
    initialData: PropTypes.object.isRequired,
    initialContextState: PropTypes.object,
    moduleDescriptor: PropTypes.object,
    context: PropTypes.object.isRequired
};
Html.defaultProps = {
    title: '',
    description: ''
};
export default Html;
//# sourceMappingURL=index.js.map