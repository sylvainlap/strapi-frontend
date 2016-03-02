const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');

module.exports = {
  context: path.join(__dirname, './client'),
  entry: ['./index.jsx'],
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style/useable!css?sourceMap!autoprefixer?browsers=last 2 version!less-loader?sourceMap=true',
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'file',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
};
