'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')
const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: resolve('lib'),
    publicPath: '/',
    filename: `${config.pkgName}.common.js`,
    chunkFilename: '[id].js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
    library: 'ZZ',
  },
  devtool: false,
  optimization: {
    minimize: false,
  },
})
