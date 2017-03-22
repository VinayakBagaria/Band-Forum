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

var port = (process.env.PORT || 3000)

var ip = 'cryptic-ravine-26247.herokuapp.com/'
        config.entry = {
          App1: [
            'webpack-dev-server/client?https://' + ip,
            'webpack/hot/only-dev-server',
            './static/js/indexReact',
          ],
        }
      config.output.publicPath = 'https://' + ip + '/static/bundles/'
