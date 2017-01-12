const webpack = require('webpack')
const path = require('path')
const publicPath = 'http://localhost:8080/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=false'
module.exports = {
  entry: ['./index.js', hotMiddlewareScript],
  output: {
    filename: './index.min.js',
    path: path.resolve('./dist'),
    publicPath: publicPath
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:  ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
