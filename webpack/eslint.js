module.exports = () => ({
  test: /\.(ts|tsx)$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: [
    {
      loader: 'tslint-loader',
      options: {
        configFile: './tslint.json',
        emitWarning: true,
      },
    },
  ],
});
