const path = require("path");

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
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".scss"],
    alias: {
      om: path.join(__dirname, "src/index.scss")
    }
  },
  externals: {
    react: "react"
  }
};
