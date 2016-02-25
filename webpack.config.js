var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, './client'),
  entry: [ './index.js' ],
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
