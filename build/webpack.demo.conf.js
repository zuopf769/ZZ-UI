'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const portfinder = require('portfinder')

const md = require('markdown-it')()

function wrap(render) {
  return function () {
    return render
      .apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

function getComponentName(path) {
  const pathName = path
    .replace(/\.[a-z]+$/, '') // 移除后缀
    .match(/\w+/g)
    .join('-')
  if (!pathName.includes('demo')) {
    return camelCase(`demo-${pathName}`)
  }
  return camelCase(pathName)
}

function camelCase(str) {
  let strArr = str.split('-')
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
  }
  strArr = strArr.join('').split('/')
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
  }
  return strArr.join('')
}

function parseRef(str) {
  const result = str[1].match(/([@_a-zA-Z]+)(\s+|=|$)("[^"]+"*|\d+|true|false)?/g)
  const ret = {}
  if (result.length) {
    result.forEach(item => {
      const r = item.split('=')
      ret[r[0]] = r.length > 1 ? eval(r[1]) : true
    })
  }
  return ret
}

function attrRemove(token, attrName) {
  const index = token.attrIndex(attrName)
  if (index > -1) {
    token.attrs.splice(index, 1)
  }
  return token
}

const resolveMds = {}

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const overrideEntryConfig = Object.assign({}, baseWebpackConfig, {
  externals: {},
})

const demoWebpackConfig = merge(overrideEntryConfig, {
  entry: {
    docs: resolve('examples/index.ts'),
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[hash:7].js',
    chunkFilename: config.isProd ? '[name].[hash:7].js' : '[name].js',
    publicPath: isProd ? '/mtd/vue/' : '/',
  },
  module: {
    rules: [
      ...utils.styleLoaders({
        sourceMap: config.cssSourceMap,
        usePostCSS: true,
        extract: config.extract,
      }),
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true,
              preventExtract: true,
              use: [
                [
                  require('markdown-it-container'),
                  'demo',
                  {
                    // ::: demo :::语法会进入自定义渲染方法
                    validate(params) {
                      return params.trim().match(/^demo\s*(.*)$/)
                    },
                    render(tokens, idx) {
                      const token = tokens[idx]
                      // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
                      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/) || ''
                      const description = m && m.length > 1 ? m[1] : ''
                      const descriptionHTML = description ? md.render(description) : ''
                      // nesting === 1表示标签开始
                      if (token.nesting === 1) {
                        // 获取::: demo之间的具体内容
                        const content = tokens[idx + 1].content
                        return `<demo-block>
                                  <div slot='source' class='source'>${content}</div>
                                    ${descriptionHTML}
                                  <div slot='highlight' class='highlight'>
                                `
                      }
                      // highlight中间的内容不经过这里处理，会填到这里
                      return '</div></demo-block>\n'
                    },
                  },
                ],
                [
                  require('markdown-it-container'),
                  'include',
                  {
                    // ::: include :::语法会进入自定义渲染方法
                    validate: function validate(params) {
                      return params.trim().match(/^include\s*(.*)$/)
                    },
                    render: function render(tokens, idx) {
                      const curToken = tokens[idx]
                      const m = curToken.info.trim()
                      const paramText = m.match(/^include\s*\(([^()]*?)\)/) || ''
                      if (curToken.nesting === 1) {
                        let params = {}
                        if (paramText && paramText.length > 1) {
                          params = parseRef(paramText)
                        }
                        if (params.src) {
                          const mdcname = getComponentName(params.src)
                          return `<${mdcname}></${mdcname}>`
                        } else {
                          throw new Error('include container must has src param')
                        }
                      }
                      return ''
                    },
                  },
                ],
              ],
              preprocess: function preprocess(MarkdownIt, source) {
                MarkdownIt.renderer.rules.table_open = () => '<table class="table">'
                MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
                MarkdownIt.renderer.rules.link_open = function (tokens, idx, options, env, self) {
                  const token = tokens[idx]
                  const href = token.attrGet('href')
                  if (/^[http|https]/.test(href) || /^\/\//.test(href)) {
                    // abs path
                    token.attrPush(['target', '_blank'])
                  } else if (/^\//.test(href)) {
                    // relative path
                    attrRemove(token, 'href')
                    token.attrPush(['to', href])
                    token.tag = 'router-link'
                  } else if (/^#/.test(href)) {
                    // anchor
                    attrRemove(token, 'href')
                    token.attrPush([':to', `{ ...$route, hash: "${href}" }`])
                    token.tag = 'router-link'
                  }
                  return self.renderToken(tokens, idx, options)
                }
                // MarkdownIt.renderer.rules.link_close = function (tokens, idx, options, env, self) {

                // }
                const resourcePath = this.resourcePath
                if (resolveMds[resourcePath]) {
                  return source
                }
                const filePath = resourcePath.replace(/\/?[^/]*$/, '')
                const matches = source.match(/:::\s*include\s*\(([^()]*?)\)[\s\S]*?:::/g) || ''
                const scripts = []
                const components = []
                if (matches) {
                  matches.forEach((match, index) => {
                    const _match = match.match(/:::\s*include\s*\(([^()]*?)\)/) || ''
                    const params = parseRef(_match)
                    if (params.src) {
                      const mdcname = getComponentName(params.src)
                      const mdpath = path.join(filePath, params.src)
                      resolveMds[mdpath] = true
                      source = source.replace(
                        match,
                        match.replace(/(:::\s*include\s*\(([^()]*?)\)[\s\S]*?)(:::)/, function (s, a, b, c) {
                          return a.replace(b, `${b} resolve="${mdpath}"`) + c
                        }),
                      )
                      scripts.push(`import ${mdcname} from "${path.join(filePath, params.src)}"`)
                      components.push(mdcname)
                    }
                  })
                }

                source =
                  (scripts.length
                    ? `<script>
                        ${scripts.join('\n')};
                        export default {
                          components: {${components.length && components.join(',')}},
                        }
                      </script>\n`
                    : '') + source
                return source
              },
            },
          },
        ],
      },
    ],
  },
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join(config.dev.assetsPublicPath, 'index.html'),
        },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('examples/index.html'),
      inject: true,
    }),
  ],
  optimization: {},
  devtool: config.devtool,
})

if (config.isProd) {
  demoWebpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].[contenthash:7].css',
      chunkFilename: '[id].[contenthash:7].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  )

  demoWebpackConfig.optimization = {
    //取代 new UglifyJsPlugin
    minimize: true,
    // 识别package.json中的sideEffects以剔除无用的模块，用来做tree-shake
    // 依赖于optimization.providedExports和optimization.usedExports
    sideEffects: true,
    // 取代 new webpack.optimize.ModuleConcatenationPlugin()
    concatenateModules: true,
    // 取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          minChunks: 2,
          test: /[\\/]node_modules[\\/]/,
          // 可选 'initial | async | all'，
          // 分别代表，初始化时加载、异步加载、两者皆使用
          chunks: 'initial',
          // 代表权重值，值越大，打包优先级越高
          priority: 10,
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors',
        },
      },
    },
    // webpack 相关代码打包到一个文件
    // 新模块加入给新模块加一个id
    // 规避长缓存问题
    runtimeChunk: {
      name: 'runtime',
    },
  }
}

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      demoWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      demoWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${demoWebpackConfig.devServer.host}:${port}`],
          },
          onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined,
        }),
      )
      resolve(demoWebpackConfig)
    }
  })
})
