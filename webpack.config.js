const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

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
          loader: "babel-loader"
        }
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              precision: 8,
              data: "$ENV: " + "PRODUCTION" + ";"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: port
  },
  devtool: 'inline-source-map',
  plugins: [
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
