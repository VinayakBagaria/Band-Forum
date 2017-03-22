var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')
var os = require("os")
var hostname = os.hostname();

config.devtool = "#eval-source-map"


config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-local.json'}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
])

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
)

module.exports = config

var port = (3000 || process.env.PORT)

var ip = hostname
        config.entry = {
          App1: [
            'webpack-dev-server/client?http://' + ip + ':' + port.toString(),
            'webpack/hot/only-dev-server',
            './static/js/indexReact',
          ],
        }
      config.output.publicPath = 'http://' + ip + ':' + port.toString() + '/static/bundles/'
