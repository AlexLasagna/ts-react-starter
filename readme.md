# React boilerplate

Fast builder for your SPA projects.

<p>
	<img src="https://readmeimgs-dbetwjhldo.now.sh/react_ts.png" alt="React ts starter pack">
</p>

Easily configure and add webpack modules and style your app without any stress with [styled-components](https://www.styled-components.com/)

## Navigation

- [Installation](#installation)
- [Boilerplate concept](#concept)
- [File location](#file-location)
- [Build production](#build-production)
- [Aliases](#aliases)
- [Used plugins](#used-plugins)
- [The idea behind the example](#the-idea-behind-the-example)

## Installation

0) Clone the branch you need

1) `cd` to react-starter folder.

2) Install webpack dependencies via npm `npm i` or yarn `yarn install`.

3) Start your web server `yarn start` || `npm run start`.

## Concept

All your webpack modules are in [webpack](https://github.com/AlexLms/ts-react-starter/tree/master/webpack) folder. You can easily call the module you need in `webpack.config.js` file.

```javascript
const rules = [babel(), images(), fonts(), anyOtherModule()];

const common = merge([
  {
    // ...
    module: {
      rules,
    },
  }
]);
```

There are 2 modes you can work with: `production` and `development` which are declared in `package.json` file.

## File location

    .
    ├── src/                    # App folder with all developer stuff
    │   ├── components/         # All components used in the project
    │   ├── index.ejs           # Used as a html template
    │   └── ...
    ├── webpack/                # Modules you can easily add to config
    ├── webpack.config.js       # All webpack settings
    ├── prettierrc              # Prettier rules to make your code look better
    ├── tscongig.json           # Rules for typescript
    ├── tslint.json             # Linter for typescript projects
    └── ...


## Build production

To build a production version of your app you need to type

`npm run build` || `yarn build`

This will create dist folder where everything will be compressed and minified.

## Aliases

If you need to configure your custom aliases you don't need .env file or something like eslint-import-resolver-babel-root-import. All you need is set aliases in `webpack.config.js` file.

```javascript

// webpack.config.js
const common = merge([
  {
    entry: {
      index: './src/index.js',
    },
    // ...
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
  }
]);

import actionName from 'src/actions';

const MyComponent = () => ();
```

## Used plugins

- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin)
- [HotModuleReplacementPlugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/)
- [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)

## The idea behind the example

Show one of the possible webpack typescript configurations

Also remind me stuff :D