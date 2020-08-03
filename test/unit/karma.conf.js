// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig(config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // 设置默认打开的浏览器
    browsers: ['Chrome'],
    // 选择测试套件库和断言
    frameworks: ['mocha', 'sinon-chai'],
    // 设置测试覆盖率输出插件
    reporters: ['spec', 'coverage'],
    // 测试入口文件
    files: ['./index.js'],
    // 用webpack解析，同时显示测试文件路径
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    // 是否打印webpack打包信息
    webpackMiddleware: {
      noInfo: true,
    },
    // karma-coverage配置，配置测试覆盖率的输出目录及格式
    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }],
    },
  })
}
