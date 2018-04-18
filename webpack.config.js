const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const extractSass = new MiniCssExtractPlugin({
//   filename: "[name].css",
//   chunkFilename: "[id].css"
// })

module.exports = {
  entry: "./src/js/index.js",
  output: {
    // path: resolve(__dirname, "dist"),
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['react', 'es2015'],
            plugins: ['transform-class-properties']
          }
        },
      }, {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader'

          // MiniCssExtractPlugin.loader, {
          //   loader: "css-loader",
          //   options: {
          //     modules: true,
          //     camelCase: true,
          //     sourceMap: true
          //   }
          // }, {
          //   loader: "sass-loader",
          //   options: {
          //     sourceMap: true,
          //     precision: 8,
          //     data: "$ENV: " + "PRODUCTION" + ";"
          //   }
          // }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Appgrade",
      template: resolve("public", "index.html"),
      favicon: resolve("public", "favicon.ico")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })

  ]
};
