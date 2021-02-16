const path = require('path');
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin');

module.exports = ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    extensions: [...config.resolve.extensions, '.tsx', '.ts', '.jsx', '.js', '.scss'],
    alias: {
      ...config.resolve.alias,
      om: path.join(__dirname, '../src/index.scss')
    }
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  // Webpack doesn't export type definitions so any types we choose to export
  // which are actually built using `tsc` can be ignored in this webpack configuration
  plugins: [...config.plugins, new IgnoreNotFoundExportPlugin()]
});
