module.exports = () => ({
  test: /\.ts|\.tsx$/,
  exclude: /node_modules/,
  enforce: 'pre',
  use: [
    {
      loader: 'awesome-typescript-loader',
    },
  ],
});
