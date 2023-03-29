File Icon Font
===

[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/file-icons.svg?style=flat)](https://www.npmjs.com/package/@uiw/file-icons)
[![jsDelivr CDN](https://data.jsdelivr.com/v1/package/npm/@uiw/file-icons/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@uiw/file-icons)
[![releases version](https://img.shields.io/github/release/uiwjs/file-icons.svg)](https://github.com/uiwjs/file-icons/releases)
[![LICENSE](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/uiwjs/file-icons)
[![NPM Version](https://img.shields.io/npm/v/@uiw/file-icons.svg)](https://www.npmjs.com/package/@uiw/file-icons)

File icons in the file tree using [vscode-material-icon-theme](https://github.com/PKief/vscode-material-icon-theme).

Visit **[https://uiwjs.github.io/file-icons/](https://uiwjs.github.io/file-icons/index.html)** and check out the search feature, which has keywords identifying common icon names and styles. For example, if you search for "swift" we call up every icon that could possibly be used as an arrow. We've also included each icon's class name for easy copy/pasting when you're developing!

They are free to use and licensed under [MIT](https://opensource.org/licenses/MIT). Use them wherever you see fit, personal or commercial. 

<p align="center">
  <a href="https://uiwjs.github.io/file-icons">
    <img src="https://github.com/uiwjs/file-icons/raw/master/assets/file-icons.png">
  </a>
</p>

## Install

```bash
npm install @uiw/file-icons --save
```

## Usage

You can use [https://uiwjs.github.io/file-icons/](https://uiwjs.github.io/file-icons/index.html) to easily find the icon you want to use. Once you've copied the desired icon's CSS classname, simply add the icon and icon's classname, such as `apple` to an HTML element.

Suppose the font name is defined as `ffont`, The default home page is `unicode`, Will generate: 

```bash
font-class.html
index.html
symbol.html
react
ffont.json
ffont.css
ffont.eot
ffont.less
ffont.svg
ffont.symbol.svg
ffont.ttf
ffont.woff
ffont.woff2
```

Preview demo `font-class.html`, `symbol.html` annd `index.html`. Automatically generated style `ffont.css` and `ffont.less`.

### symbol svg

```xml
<svg class="icon" aria-hidden="true">
  <use xlink:href="node_modules/@uiw/file-icons/fonts/ffont.symbol.svg#ffont-javascript"></use>
</svg>
```

### Unicode

```html
<style>
.iconfont {
  font-family: "ffont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<span class="iconfont">&#59907;</span>
```

### Class Name

Support for `.less` and `.css` styles references.

```html
<link rel="stylesheet" type="text/css" href="node_modules/@uiw/file-icons/fonts/ffont.css">
<i class="ffont-javascript"></i>
```

## Used in React

Icons are used as components. `v1.3.0+` support.

```jsx
import { Android } from '@uiw/file-icons';
// Or
import { Android } from '@uiw/file-icons/Alipay';

<Android style={{ fill: 'red' }} />
<Android height="36" />
```

To use SVG images as React components directly, webpack loader support is required.

Install dependencies:

```bash
yarn add @svgr/webpack file-loader
```

Configure webpack loader:

```js
// webpack.config.js
{
  test: /\.svg$/,
  use: [
    {
      loader: require.resolve('@svgr/webpack'),
      options: {
        prettier: false,
        svgo: false,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
        ref: true,
      },
    },
    {
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash].[ext]',
      },
    },
  ],
  issuer: {
    and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
  },
},
```

You can then import the SVG as a React component like this:

```javascript
import { ReactComponent as ComLogo } from '@uiw/icons/icon/android.svg';

<ComLogo />
```

**Custom Icon Component**

Create an `Icon` component.

```jsx
import React from 'react';
import svgPaths from '@uiw/file-icons/fonts/ffont.json';

const renderSvgPaths = (type) => {
  const pathStrings = svgPaths[type];
  if (pathStrings == null) {
    return null
  }
  return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />)
}

export default class Icon extends React.PureComponent {
  render() {
    const { type, color } = this.props;
    if (type == null || typeof type === "boolean") {
      return null;
    }
    return (
      <svg fill={color} viewBox={`0 0 24 24`}>{this.renderSvgPaths(type)}</svg>
    );
  }
}
```

Use the `Icon` component:

```jsx
const demo = () => {
  return (
    <Icon type="android" />
  )
}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/file-icons/graphs/contributors">
  <img src="https://uiwjs.github.io/file-icons/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Created By [svgtofont](https://github.com/jaywcjlove/svgtofont), Licensed under the [MIT License](https://opensource.org/licenses/MIT).
