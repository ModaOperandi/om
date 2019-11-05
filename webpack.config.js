const path = require("path");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "hidden-source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./index.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: "babel-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/i,
        use: [{ loader: ExtractCssChunks.loader }, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  externals: {
    react: "react"
  },
  plugins: [
    new ExtractCssChunks({
      filename: "index.css",
      ignoreOrder: false
    })
  ]
};
