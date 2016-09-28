/* eslint jsx-a11y/html-has-lang: "off", prefer-template: "off", react/forbid-prop-types: "off" */
import React, { PropTypes } from 'react';
import uneval from './uneval';

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  css: PropTypes.string,
  body: PropTypes.string.isRequired,
  scriptName: PropTypes.string,
  preBody: PropTypes.element,
  postBody: PropTypes.element,
  initialData: PropTypes.object.isRequired,
  initialBrowserContext: PropTypes.object,
  moduleDescriptor: PropTypes.object,
  context: PropTypes.object.isRequired
};

var assetUrl = function assetUrl(asset, version) {
  return '/' + version + '/' + asset;
};

export default function Html(props) {
  var moduleIdentifier = props.moduleDescriptor && props.moduleDescriptor.identifier;
  var context = props.context;
  var initialBrowserContext = props.initialBrowserContext;

  var version = context.config.get('version');

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
        props.title
      ),
      React.createElement('meta', { name: 'description', content: props.description }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      React.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css' }),
      React.createElement('link', { rel: 'stylesheet', href: assetUrl('index.css', version) }),
      React.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: props.css } }),
      React.createElement('script', { defer: true, src: assetUrl((props.scriptName || 'bundle') + '.js', version) }),
      React.createElement('script', {
        dangerouslySetInnerHTML: { __html: (moduleIdentifier ? 'window.MODULE_IDENTIFIER = \'' + moduleIdentifier + '\';' : '') + ('window.VERSION = \'' + version + '\';') + (initialBrowserContext ? 'window.initialBrowserContext = ' + uneval(initialBrowserContext) + ';' : '') + ('window.initialData = ' + uneval(props.initialData))
        }
      })
    ),
    React.createElement(
      'body',
      null,
      React.createElement(
        'div',
        { id: 'loading-bar', className: 'loading-bar' },
        React.createElement('div', { className: 'progress' })
      ),
      props.preBody,
      React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: props.body } }),
      props.postBody
    )
  );
}
//# sourceMappingURL=index.js.map