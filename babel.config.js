const { isTest } = require('./config')

module.exports = function (api) {
  api.cache(true)

  const presets = [['@babel/preset-env']]

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    [
      '@babel/proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/proposal-class-properties',
      {
        loose: true,
      },
    ],
  ]

  if (isTest) {
    plugins.push([
      'istanbul',
      {
        exclude: ['components/navbar/**/*', '**/doc/*', '**/tests/*', 'test/**/*'],
      },
    ])
  }

  return {
    presets,
    plugins,
  }
}
