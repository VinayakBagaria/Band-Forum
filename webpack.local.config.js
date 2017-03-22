var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')

config.devtool = "#eval-source-map"


config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-local.json'}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
])

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: [//'react-hot'
   'babel'] }
)

module.exports = config

var ip = 'localhost'
        config.entry = {
          App1: [
            'webpack-dev-server/client?http://' + ip + ':3000',
            'webpack/hot/only-dev-server',
            './static/js/indexReact',
          ],
        }
      config.output.publicPath = 'http://' + ip + ':3000' + '/static/bundles/'
