const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry : {
    app :  [
      "webpack-dev-server/client?http://localhost:8080/",
      "webpack/hot/dev-server",
      "./src/app.js"
    ]
  },
  //devtool: "source-map",

  devtool : "eval",
  output: {
    path: path.join(__dirname, "out"),
    filename: "bundle.js",
    publicPath : "http://localhost:8080/"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {test: /\.js$/,include:path.join(__dirname,"src"),
        loaders: ["react-hot","babel-loader"]},
      {test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

  plugins : [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template : "./src/index.html",
    inject: true
  }),
  new webpack.DefinePlugin({
    __DEV__ : true
  })
  ]
};