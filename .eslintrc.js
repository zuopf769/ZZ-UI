module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    env: {
      es6: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier', 'vue', '@typescript-eslint'],
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended', // 使用prettier中的样式规范
    'prettier/@typescript-eslint', // 使@typescript-eslint中的样式规范失效,遵循prettier中的样式规范
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'array-bracket-spacing': 2,
    // prettier方法名后面会自动去掉空格，为了避免冲突只能
    'space-before-function-paren': 0,
    'no-var': 2,
    'no-eval': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'key-spacing': 2,
    'brace-style': 2,
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-spacing': [2, 'always'],
    'vue/camelcase': 2,
    'vue/require-component-is': 0,
    'vue/require-default-prop': 0,
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 设置 typescript-eslint 规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-non-null-assertion': 0, // 允许非空断言运算符
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [0, { args: 'none' }], // TODO 后期逐步替换
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 0, // TODO
  },
}
