const path = require('path');
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin');

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
  webpackFinal: config => ({
    ...config,
    resolve: {
      ...config.resolve,
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
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    },
    plugins: [...config.plugins, new IgnoreNotFoundExportPlugin()]
  })
};
