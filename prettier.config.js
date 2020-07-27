module.exports = {
  eslintIntegration: true, //让prettier使用eslint的代码格式进行校验
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  singleQuote: true, // 使用单引号（默认false）
  semi: false, // 声明结尾使用分号(默认true)
  trailingComma: 'all', // 多行使用拖尾逗号（默认none）,可选 none|es5|all,es5包括es5中的数组、对象;all包括函数对象等所有可选
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）,true: { foo: bar } false: {foo: bar}
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
  htmlWhitespaceSensitivity: 'ignore', // https://zhuanlan.zhihu.com/p/64627216
}
