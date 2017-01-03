var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const node_modules = path.resolve(__dirname, 'node_modules');
const bootstrap = path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css');
const fontAwesome = path.resolve(__dirname, 'node_modules/font-awesome/css/font-awesome.css');

let config = {
  entry: {
    index: ['./main.js'],
    vendors: ['react','react-dom','webpack-hot-middleware/client',bootstrap,fontAwesome]
  },

  output: {
    path: path.resolve(__dirname,'./public/assets/'),
    filename: '[name].js'
  },

  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: ['babel'],
        query: {
          presets: ['es2015','react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=8129&name=images/[name].[ext]'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'url-loader?limit=8129&name=fonts/[name].[ext]'
      }
    ]
  },

  devtool: "#cheap-module-eval-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./index.html'),
      title: "react-demo",
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js'),
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.json', '.css']
  }
};

module.exports =  config;