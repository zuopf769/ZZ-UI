'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')
const fs = require('fs')
const Components = require('../components.json')
const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

// components externals
const { fullName } = config
const externals = {}
Object.keys(Components).forEach(key => {
  externals[`@components/${key}`] = `${fullName}/lib/${key}`
})

// src externals
const utilsList = fs.readdirSync(resolve('src/utils'))
const mixinsList = fs.readdirSync(resolve('src/mixins'))
const transitionList = fs.readdirSync(resolve('src/transitions'))

utilsList.forEach(function (file) {
  file = path.basename(file, '.js')
  externals[`@/utils/${file}`] = `${fullName}/lib/utils/${file}`
})
mixinsList.forEach(function (file) {
  file = path.basename(file, '.js')
  externals[`@/mixins/${file}`] = `${fullName}/lib/mixins/${file}`
})
transitionList.forEach(function (file) {
  file = path.basename(file, '.js')
  externals[`@/transitions/${file}`] = `${fullName}/lib/transitions/${file}`
})

// webpack config
module.exports = merge(baseWebpackConfig, {
  entry: Components,
  output: {
    path: resolve('lib'),
    filename: '[name].js',
    publicPath: '/',
    globalObject: 'this',
    libraryTarget: 'commonjs2',
  },
  externals: externals,
})
