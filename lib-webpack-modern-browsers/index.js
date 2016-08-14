/* eslint jsx-a11y/html-has-lang: "off", prefer-template: "off" */
import React, { Component, PropTypes } from 'react';
import uneval from './uneval';

export default class Html extends Component {

    render() {
        var moduleIdentifier = this.props.moduleDescriptor && this.props.moduleDescriptor.identifier;
        var _props = this.props;
        var context = _props.context;
        var initialContextState = _props.initialContextState;


        return React.createElement(
            'html',
            null,
            React.createElement(
                'head',
                null,
                React.createElement('meta', { charSet: 'utf-8' }),
                React.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
                React.createElement(
                    'title',
                    null,
                    this.props.title
                ),
                React.createElement('meta', { name: 'description', content: this.props.description }),
                React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
                React.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css' }),
                React.createElement('link', { rel: 'stylesheet', href: '/index.css' }),
                React.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } }),
                React.createElement('script', { defer: true, src: `/${ this.props.scriptName || 'bundle' }.js` }),
                React.createElement('script', {
                    dangerouslySetInnerHTML: { __html: (moduleIdentifier ? `window.MODULE_IDENTIFIER = '${ moduleIdentifier }';` : '') + `window.VERSION = '${ context.config.get('version') }';` + (initialContextState ? `window.initialContextState = ${ uneval(initialContextState) };` : '') + `window.initialData = ${ uneval(this.props.initialData) }`
                    }
                })
            ),
            React.createElement(
                'body',
                null,
                this.props.preBody,
                React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
                this.props.postBody
            )
        );
    }
}
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
//# sourceMappingURL=index.js.map