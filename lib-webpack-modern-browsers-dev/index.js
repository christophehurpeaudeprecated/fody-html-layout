var _jsxFileName = 'index.jsx';
/* eslint-disable jsx-a11y/html-has-lang, prefer-template, react/forbid-prop-types */
import React, { PropTypes } from 'react';
import uneval from './uneval';

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  css: PropTypes.string,
  body: PropTypes.string.isRequired,
  scriptName: PropTypes.string,
  styleName: PropTypes.string,
  preBody: PropTypes.element,
  postBody: PropTypes.element,
  initialData: PropTypes.object.isRequired,
  initialBrowserContext: PropTypes.object,
  moduleDescriptor: PropTypes.object,
  context: PropTypes.object.isRequired
};

var assetUrl = (asset, version) => `/${ asset }?${ version }`;

export default function Html(props) {
  var moduleIdentifier = props.moduleDescriptor && props.moduleDescriptor.identifier;
  var context = props.context;
  var initialBrowserContext = props.initialBrowserContext;

  var version = context.config.get('version');

  return React.createElement(
    'html',
    {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    },
    React.createElement(
      'head',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      React.createElement('meta', { charSet: 'utf-8', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }),
      React.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }),
      React.createElement(
        'title',
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        props.title
      ),
      React.createElement('meta', { name: 'description', content: props.description, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }),
      React.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic', rel: 'stylesheet', type: 'text/css', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }),
      React.createElement('link', { rel: 'stylesheet', href: assetUrl(`${ props.styleName || 'index' }.css`, version), __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }),
      React.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: props.css }, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }),
      React.createElement('script', { defer: true, src: assetUrl(`${ props.scriptName || 'bundle' }.js`, version), __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }),
      React.createElement('script', {
        dangerouslySetInnerHTML: { __html: (moduleIdentifier ? `window.MODULE_IDENTIFIER='${ moduleIdentifier }';` : '') + `window.VERSION='${ version }';` + (!initialBrowserContext ? '' : `window.initialBrowserContext=${ uneval(initialBrowserContext) };`) + `window.initialData=${ uneval(props.initialData) }`
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })
    ),
    React.createElement(
      'body',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      },
      React.createElement(
        'div',
        { id: 'loading-bar', className: 'loading-bar', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        React.createElement('div', { className: 'progress', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        })
      ),
      props.preBody,
      React.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: props.body }, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }),
      props.postBody
    )
  );
}
//# sourceMappingURL=index.js.map