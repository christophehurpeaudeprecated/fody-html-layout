/* eslint jsx-a11y/html-has-lang: "off", prefer-template: "off" */
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

export default function Html(props) {
  var moduleIdentifier = props.moduleDescriptor && props.moduleDescriptor.identifier;
  var context = props.context;
  var initialBrowserContext = props.initialBrowserContext;


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
        props.title
      ),
      React.createElement('meta', { name: 'description', content: props.description, __self: this
      }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __self: this
      }),
      React.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css', __self: this
      }),
      React.createElement('link', { rel: 'stylesheet', href: '/index.css', __self: this
      }),
      React.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: props.css }, __self: this
      }),
      React.createElement('script', { defer: true, src: `/${ props.scriptName || 'bundle' }.js`, __self: this
      }),
      React.createElement('script', {
        dangerouslySetInnerHTML: { __html: (moduleIdentifier ? `window.MODULE_IDENTIFIER = '${ moduleIdentifier }';` : '') + `window.VERSION = '${ context.config.get('version') }';` + (initialBrowserContext ? `window.initialBrowserContext = ${ uneval(initialBrowserContext) };` : '') + `window.initialData = ${ uneval(props.initialData) }`
        },
        __self: this
      })
    ),
    React.createElement(
      'body',
      {
        __self: this
      },
      React.createElement(
        'div',
        { id: 'loading-bar', className: 'loading-bar', __self: this
        },
        React.createElement('div', { className: 'progress', __self: this
        })
      ),
      props.preBody,
      React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: props.body }, __self: this
      }),
      props.postBody
    )
  );
}
//# sourceMappingURL=index.js.map