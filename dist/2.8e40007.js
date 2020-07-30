(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{"./components/button/api.json":function(t){t.exports=JSON.parse('{"props":[{"name":"size","desc":"大小,注意 icon 类型的 button 不支持","type":"string","optionalValue":["small","不设置","large"],"default":"","version":""},{"name":"html-type","desc":"设置 button 原生的 type 类型","type":"string","optionalValue":["button","submit","reset"],"default":"button","version":""},{"name":"loading","desc":"是否加载中状态","type":"boolean","optionalValue":"","default":"false","version":""},{"name":"disabled","desc":"是否是禁用状态","type":"boolean","optionalValue":"","default":"false","version":""},{"name":"icon","desc":"设置按钮左侧图标类型","type":"string","optionalValue":"","default":"","version":""},{"name":"type","desc":"类型","type":"string","optionalValue":["primary","text","text-primary","success","warning","danger","不设置"],"default":"","version":""},{"name":"dashed","desc":"是否是虚线边框","type":"boolean","optionalValue":"","default":"false","version":""},{"name":"ghost","desc":"幽灵属性，使按钮背景透明","type":"boolean","optionalValue":"","default":"false","version":"0.1.40"},{"name":"href","desc":"点击跳转的地址，指定此属性将用 a 标签渲染组件","type":"string","optionalValue":"","default":"","version":"0.3.8"},{"name":"target","desc":"相当于 a 链接的 target 属性，href 存在时生效","type":"string","optionalValue":"","default":"","version":"0.3.8"},{"name":"to","desc":"同 router-link 组件 <a href=\'https://router.vuejs.org/zh/api/#to\' target=\'_blank\'>to 属性</a>，指定此属性将使用 router-link 渲染组件","type":["string","object"],"optionalValue":"","default":"","version":"0.3.8"}],"events":[{"name":"click","desc":"click 事件 handler","signature":"function (event: Event)","args":"点击事件对象"}],"slots":[{"name":"icon","desc":"同 icon 属性"}],"methods":[{"name":"focus()","desc":"使 button 获取焦点","args":""},{"name":"blur()","desc":"使 button 失去焦点","args":""}]}')},"./components/button/doc/group.vue?vue&type=style&index=0&id=db85b302&lang=scss&scoped=true&":function(t,e,o){"use strict";var n=o("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./build/source-doc-loader/index.js!./components/button/doc/group.vue?vue&type=style&index=0&id=db85b302&lang=scss&scoped=true&");o.n(n).a},"./components/button/index.md":function(t,e,o){"use strict";o.r(e);var n=o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),s=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("zz-button",{attrs:{type:"primary"}},[this._v("\n    基础按钮\n  ")])]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <zz-button type="primary">\n    基础按钮\n  </zz-button>\n</template>\n')])])],1)}),[],!1,null,null,null).exports,i=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("div",[e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"primary",size:"small"}},[this._v("表内按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"primary"}},[this._v("基础按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"primary",size:"large"}},[this._v("重要按钮")])],1)]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <div>\n    <zz-button class="btn-demo-item" type="primary" size="small">表内按钮</zz-button>\n    <zz-button class="btn-demo-item" type="primary">基础按钮</zz-button>\n    <zz-button class="btn-demo-item" type="primary" size="large">重要按钮</zz-button>\n  </div>\n</template>\n')])])],1)}),[],!1,null,null,null).exports,l=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("div",[e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"primary"}},[this._v("基础按钮")]),e("zz-button",{staticClass:"btn-demo-item"},[this._v("次要按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"text-primary"}},[this._v("文字按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{dashed:""}},[this._v("虚线按钮")])],1)]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <div>\n    <zz-button class="btn-demo-item" type="primary">基础按钮</zz-button>\n    <zz-button class="btn-demo-item">次要按钮</zz-button>\n    <zz-button class="btn-demo-item" type="text-primary">文字按钮</zz-button>\n    <zz-button class="btn-demo-item" dashed>虚线按钮</zz-button>\n  </div>\n</template>\n')])])],1)}),[],!1,null,null,null).exports,a=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("demo-block",[o("div",{attrs:{slot:"source"},slot:"source"},[[o("div",[o("zz-button",{attrs:{type:"primary"}},[t._v("基础按钮")]),o("zz-button",{attrs:{type:"primary",loading:""}},[t._v("基础按钮")]),o("zz-button",{attrs:{type:"primary",disabled:""}},[t._v("基础按钮")]),o("zz-button",[t._v("次要按钮")]),o("zz-button",{attrs:{loading:""}},[t._v("次要按钮")]),o("zz-button",{attrs:{disabled:""}},[t._v("次要按钮")]),o("zz-button",{attrs:{type:"text-primary"}},[t._v("文字按钮")]),o("zz-button",{attrs:{type:"text-primary",loading:""}},[t._v("文字按钮")]),o("zz-button",{attrs:{type:"text-primary",disabled:""}},[t._v("文字按钮")]),o("div")],1)]],2),o("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[o("pre",[t._v('<template>\n  <div>\n    <zz-button type="primary">基础按钮</zz-button>\n    <zz-button type="primary" loading>基础按钮</zz-button>\n    <zz-button type="primary" disabled>基础按钮</zz-button>\n\n    <zz-button>次要按钮</zz-button>\n    <zz-button loading>次要按钮</zz-button>\n    <zz-button disabled>次要按钮</zz-button>\n\n    <zz-button type="text-primary">文字按钮</zz-button>\n    <zz-button type="text-primary" loading>文字按钮</zz-button>\n    <zz-button type="text-primary" disabled>文字按钮</zz-button>\n    <div></div>\n  </div>\n</template>\n')])])],1)}),[],!1,null,null,null).exports,d=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("div",[e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"primary"}},[this._v("基础按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"success"}},[this._v("成功按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"warning"}},[this._v("警告按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"danger"}},[this._v("危险按钮")])],1)]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <div>\n    <zz-button class="btn-demo-item" type="primary">基础按钮</zz-button>\n    <zz-button class="btn-demo-item" type="success">成功按钮</zz-button>\n    <zz-button class="btn-demo-item" type="warning">警告按钮</zz-button>\n    <zz-button class="btn-demo-item" type="danger">危险按钮</zz-button>\n  </div>\n</template>\n')])])],1)}),[],!1,null,null,null).exports,r=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("div",[e("zz-button",{staticClass:"btn-demo-item",attrs:{ghost:"",type:"primary"}},[this._v("基础按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{ghost:"",type:"success"}},[this._v("成功按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{ghost:"",type:"warning"}},[this._v("警告按钮")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{ghost:"",type:"danger"}},[this._v("危险按钮")])],1)]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <div>\n    <zz-button class="btn-demo-item" ghost type="primary">基础按钮</zz-button>\n    <zz-button class="btn-demo-item" ghost type="success">成功按钮</zz-button>\n    <zz-button class="btn-demo-item" ghost type="warning">警告按钮</zz-button>\n    <zz-button class="btn-demo-item" ghost type="danger">危险按钮</zz-button>\n  </div>\n</template>\n')])])],1)}),[],!1,null,null,null).exports,u=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("div",[e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"text",icon:"mtdicon mtdicon-theme-o"}},[this._v("主题")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"text",icon:"mtdicon mtdicon-export-o"}},[this._v("导出")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"primary",icon:"mtdicon mtdicon-calendar-o"}},[this._v("日期")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{type:"primary",icon:"mtdicon mtdicon-visibility-off"}},[this._v("隐藏")]),e("zz-button",{staticClass:"btn-demo-item",attrs:{icon:"mtdicon mtdicon-cart-o"}},[this._v("加入购物车")])],1)]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <div>\n    <zz-button class="btn-demo-item" type="text" icon="mtdicon mtdicon-theme-o">主题</zz-button>\n    <zz-button class="btn-demo-item" type="text" icon="mtdicon mtdicon-export-o">导出</zz-button>\n    <zz-button class="btn-demo-item" type="primary" icon="mtdicon mtdicon-calendar-o">日期</zz-button>\n    <zz-button class="btn-demo-item" type="primary" icon="mtdicon mtdicon-visibility-off">隐藏</zz-button>\n    <zz-button class="btn-demo-item" icon="mtdicon mtdicon-cart-o">加入购物车</zz-button>\n  </div>\n</template>\n')])])],1)}),[],!1,null,null,null).exports,c=(o("./components/button/doc/group.vue?vue&type=style&index=0&id=db85b302&lang=scss&scoped=true&"),{components:{demoDocBase:s,demoDocSize:i,demoDocType:l,demoDocStatus:a,demoDocColor:d,demoDocGhost:r,demoDocText:u,demoDocGroup:Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("div",{staticClass:"demo-btn-group"},[e("zz-button-group",[e("zz-button",{attrs:{type:"text",icon:"mtdicon mtdicon-file-add-o"}},[this._v("添加")]),e("zz-button",{attrs:{type:"text",icon:"mtdicon mtdicon-delete-o"}},[this._v("删除")]),e("zz-button",{attrs:{type:"text",icon:"mtdicon mtdicon-edit-o"}},[this._v("编辑")])],1)],1)]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <div class="demo-btn-group" style="">\n    <zz-button-group>\n      <zz-button type="text" icon="mtdicon mtdicon-file-add-o">添加</zz-button>\n      <zz-button type="text" icon="mtdicon mtdicon-delete-o">删除</zz-button>\n      <zz-button type="text" icon="mtdicon mtdicon-edit-o">编辑</zz-button>\n    </zz-button-group>\n  </div>\n</template>\n<style lang="scss" scoped>\n.demo-btn-group {\n  text-align: left;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  .zz-btn {\n    margin-left: 0;\n  }\n}\n</style>\n')])])],1)}),[],!1,null,"db85b302",null).exports,demoDocLink:Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("div",[e("zz-button",{attrs:{type:"primary",to:"/components/icon"}},[this._v("路由链接")]),e("zz-button",{attrs:{type:"primary",href:"/",target:"_blank"}},[this._v("外部链接")])],1)]],2),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("pre",[this._v('<template>\n  <div>\n    <zz-button type="primary" to="/components/icon">路由链接</zz-button>\n    <zz-button type="primary" href="/" target="_blank">外部链接</zz-button>\n  </div>\n</template>\n')])])],1)}),[],!1,null,null,null).exports}}),m=(o("./components/button/index.md?vue&type=style&index=0&lang=scss&"),Object(n.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("按钮 / Button")]),n("p",[t._v("是用于触发一个行动并形成决策的组件。")]),n("h2",[t._v("基础样式")]),n("demoDocBase"),n("h2",[t._v("类型与用法")]),n("h3",[t._v("大小 "),n("design-tag")],1),n("demoDocSize"),n("h3",[t._v("类型 "),n("design-tag")],1),n("p",[t._v("根据场景的需要，不同按钮类型可表达操作的重要程度等级。")]),n("demoDocType"),n("blockquote",[n("p",[t._v("文字按钮的形式和链接的形式非常像但用法不同,请参考 "),n("router-link",{attrs:{to:"/components/icon"}},[t._v("链接/Link "),n("i",{staticClass:"mtdicon mtdicon-link-o"})])],1)]),n("h3",[t._v("状态 "),n("design-tag")],1),n("p",[t._v("以常规按钮为例，按钮状态有正常状态、hover 状态、激活状态、禁用状态、加载状态。")]),n("demoDocStatus"),n("h3",[t._v("颜色")]),n("p",[t._v("可以通过颜色，潜示状态。")]),n("demoDocColor"),n("h3",[t._v("幽灵按钮")]),n("demoDocGhost"),n("h3",[t._v("图标 + 文字")]),n("p",[t._v("当图标的表意不是很明确或者需要强调操作时可以图标结合文字一起使用。")]),n("demoDocText"),n("h3",[t._v("按钮组")]),n("p",[t._v("一组相关联的操作聚合在一起成为按钮组，方便快捷操作。")]),n("demoDocGroup"),n("h3",[t._v("链接型")]),n("p",[t._v("以链接的形式渲染按钮")]),n("demoDocLink"),n("h2",[t._v("API")]),n("p",[n("api-doc",{attrs:{name:"Button",doc:o("./components/button/api.json")}})],1)],1)}),[],!1,null,null,null));e.default=m.exports},"./components/button/index.md?vue&type=style&index=0&lang=scss&":function(t,e,o){"use strict";var n=o("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?!./components/button/index.md?vue&type=style&index=0&lang=scss&");o.n(n).a},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?!./components/button/index.md?vue&type=style&index=0&lang=scss&":function(t,e,o){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./build/source-doc-loader/index.js!./components/button/doc/group.vue?vue&type=style&index=0&id=db85b302&lang=scss&scoped=true&":function(t,e,o){}}]);
//# sourceMappingURL=2.8e40007.js.map