const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        exclude: /node_modules/,
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:3000'
    },
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300
    }
  }
}