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
  context: PropTypes.object.isRequired,
};

export default function Html(props) {
  let moduleIdentifier = props.moduleDescriptor && props.moduleDescriptor.identifier;
  const { context, initialBrowserContext } = props;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="/index.css" />
        <style id="css" dangerouslySetInnerHTML={{ __html: props.css }} />
        <script defer src={`/${props.scriptName || 'bundle'}.js`} />
        <script
          dangerouslySetInnerHTML={{ __html:
          (moduleIdentifier ? `window.MODULE_IDENTIFIER = '${moduleIdentifier}';` : '')
          + `window.VERSION = '${context.config.get('version')}';`
          + (initialBrowserContext ? (
            `window.initialBrowserContext = ${uneval(initialBrowserContext)};`
          ) : '')
          + `window.initialData = ${uneval(props.initialData)}`,
          }}
        />
      </head>
      <body>
        {props.preBody}
        <div id="app" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBody}
      </body>
    </html>
  );
}
