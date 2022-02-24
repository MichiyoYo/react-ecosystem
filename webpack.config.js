const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        /**
         * this rule finds all the js or jsx files, excludes the node_modules folder,
         * uses babel-loader as loader with the options to use the presets @babel-loader
         */
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        /**
         * this rule finds all the css files and uses the style-loader and css-loader
         * to allow us to import styles in our js files
         */
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    // contentBase: path.join(__dirname, "public/"),
    // port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    // hot: true,
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 3000,
    devMiddleware: {
      publicPath: "https://localhost:3000/dist/",
    },
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
