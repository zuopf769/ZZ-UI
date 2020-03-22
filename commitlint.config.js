
const types = [
  'feat', // 新功能
  'fix', // 修复问题
  'docs', // 修改文档
  'style', // 修改代码格式(不影响逻辑功能，比如格式化、补充分号等等)
  'refactor', // 重构代码(fix bug或增加新功能不属于此范围)
  'perf', // 提升页面性能
  'test', // 增加/修改测试用例
  'chore', // 修改工具相关（包括但不限于文档、代码生成等, 比如修改了README，webpack配置文件等等）
  'build', // 构建
  'release', // 发版
  'revert', // 回滚
  'deps'// 升级依赖
];


/**
 * https://commitlint.js.org/#/reference-rules
 *
 * rule配置说明:
 * rule由name和配置数组组成
 * 1、数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error
 * 2、第二位为应用与否，可选always|never
 * 3、第三位该rule的值
 */
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'type-case': [0],
    'scope-empty': [0],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};
