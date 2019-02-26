const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const babel = require('./webpack/babel');
const devServer = require('./webpack/dev-server');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const html = require('./webpack/html');
const optimization = require('./webpack/optimization');
const eslint = require('./webpack/eslint');
const ts = require('./webpack/ts');

const isProd = process.env.NODE_ENV === 'production';

const PATH = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const plugins = [
  new HtmlWebPackPlugin({
    template: `${PATH.src}/index.ejs`,
    title: 'Alex',
    favicon: `${PATH.src}/img/favicon.ico`,
  }),
];

const rules = [babel(), html(), fonts(), images(), ts(), eslint()];

const common = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: PATH.build,
    filename: 'bundle.[hash].js',
    chunkFilename: '[name].chunk.[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules,
  },
  plugins,
};

const prodConf = merge([common, optimization()]);
const devConf = merge([
  common,
  {
    devtool: 'cheap-module-source-map',
    optimization: {
      namedModules: true,
    },
    performance: {
      hints: false,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  devServer(),
]);

module.exports = () => (isProd ? prodConf : devConf);
