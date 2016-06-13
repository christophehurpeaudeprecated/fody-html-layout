import React, { Component, PropTypes } from 'react';

export default class Html extends Component {
    static propTypes = {
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
        context: PropTypes.object.isRequired,
    };

    static defaultProps = {
        title: '',
        description: '',
    };

    render() {
        let moduleIdentifier = this.props.moduleDescriptor && this.props.moduleDescriptor.identifier;
        const { context, initialContextState } = this.props;

        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>{this.props.title}</title>
                    <meta name="description" content={this.props.description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100,500italic,400italic,700italic" rel="stylesheet" type="text/css" />
                    <link rel="stylesheet" href="/index.css" />
                    <style id="css" dangerouslySetInnerHTML={{ __html: this.props.css }} />
                    <script defer src={`/${this.props.scriptName || 'bundle'}.js`}></script>
                    <script dangerouslySetInnerHTML={{ __html:
                        (moduleIdentifier ? `window.MODULE_IDENTIFIER = '${moduleIdentifier}';` : '')
                        + `window.VERSION = '${context.config.get('version')}';`
                        + (initialContextState ? `window.initialContextState = ${JSON.stringify(initialContextState)};` : '')
                        + `window.initialData = ${JSON.stringify(this.props.initialData)}`,
                        }}
                    ></script>
                </head>
                <body>
                    {this.props.preBody}
                    <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    {this.props.postBody}
                </body>
            </html>
        );
    }
}
