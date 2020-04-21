const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './index.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/i,
        use: [
          ...(process.env.NODE_ENV === 'production'
            ? [{ loader: ExtractCssChunks.loader }]
            : ['style-loader']),
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss'],
    alias: {
      om: path.join(__dirname, 'src/index.scss'),
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
  },
  plugins: [
    new ExtractCssChunks({
      filename: 'styles.css',
      ignoreOrder: false,
    }),
  ],
};
