# fody-html-layout

Simple extensible html layout for React App

```js
import render from 'fody';
import Html from 'fody-html-layout';

// ...

render({ context, Component, data, Html });
```


### Extends Layout

```js
import React, { Component } from 'react';
import Html from 'fody-html-layout';

export default class HtmlLayout extends Component {
    render() {
        return <Html preBody={<div />} postBody={<div />} {...this.props} />;
    }
}

```
