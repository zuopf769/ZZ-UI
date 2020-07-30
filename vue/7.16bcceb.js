(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{"./wiki/getting-started.md":function(e,r,t){"use strict";t.r(r);var n=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),p=Object(n.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("h1",[e._v("如何使用")]),t("p",[e._v("使用 npm 的方式安装。")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm i @zz/zz-ui\n")])]),t("p",[e._v("在项目代码中引入组件和样式")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("// 引入 样式\nimport '@zz/zz-ui/lib/theme-chalk/index.css'\n\n// 引入组件库\nimport Vue from 'vue'\nimport ZZUI from '@zz/zz-ui'\n\nVue.use(ZZUI)\n\n")])]),t("h2",[e._v("开发调试")]),t("p",[e._v("启动调试，访问 "),t("a",{attrs:{href:"http://localhost:8081",target:"_blank"}},[e._v("localhost:8081")]),e._v(" 查看效果")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm start\n")])]),t("p",[e._v("启动单元测试，查看单元测试结果")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm run unit\n// or\nnpm run unit:watch\n")])]),t("h2",[e._v("构建部署")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm run build\n")])]),t("p",[e._v("编译后文件会放在"),t("code",{pre:!0},[e._v("lib")]),e._v("文件夹中")]),t("h2",[e._v("按需加载")]),t("p",[t("strong",[e._v("注意，按需加载时样式文件会存在重复的样式，可使用 cssmin 来消除重复")])]),t("p",[e._v("你可以手动 \b 通过以下写法来实现按需加载")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("\n")])]),t("p",[e._v("如果使用"),t("code",{pre:!0},[e._v("babel")]),e._v(",也可以通过 "),t("a",{attrs:{href:"https://github.com/ElementUI/babel-plugin-component",target:"_blank"}},[e._v("babel-plugin-component")]),e._v(" 插件来实现按需加载\n在 "),t("code",{pre:!0},[e._v(".babelrc")]),e._v(" 中加入这个插件")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v('{\n  "plugins": [\n    [\n      "component",\n      {\n        "libraryName": "@zz/zz-ui",\n        "styleLibraryName": "theme-chalk"\n      }\n    ]\n  ]\n}\n')])]),t("p",[e._v("之后你仍可以这样写，达到按需加载")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("import { Button } from '@zz/zz-ui'\n")])]),t("h2",[e._v("兼容性")]),t("p",[e._v("现代浏览器及 IE 10+。")]),t("p",[e._v("对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 "),t("a",{attrs:{href:"https://babeljs.io/docs/en/babel-polyfill",target:"_blank"}},[e._v("babel-preset-env")]),e._v(" 来解决浏览器兼容问题。")])])}],!1,null,null,null);r.default=p.exports}}]);
//# sourceMappingURL=7.16bcceb.js.map