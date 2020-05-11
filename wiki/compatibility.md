## 兼容性

### 浏览器兼容性

现代浏览器及 IE 10+。

**对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 [babel-preset-env](https://babeljs.io/docs/en/next/babel-preset-env.html) 来解决浏览器兼容问题。**

主要 API 列表:

- [Array.prototype.every](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.prototype.findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Array.prototype.reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) <small>备注: 0.3.2 版本起移除此 API 使用</small>
- [Array.prototype.some](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### Vue 版本兼容

Vue 2.5.0+
主要 API 列表:

- [provide / inject](https://cn.vuejs.org/v2/api/#provide-inject) <small>备注: 由于需要支持可选项，故最低版本在 2.5.0+</small>
- [inheritAttrs](https://cn.vuejs.org/v2/api/#inheritAttrs)
- [\$scopedSlots](https://cn.vuejs.org/v2/api/#vm-scopedSlots)
- [\$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)
- [\$attrs](https://cn.vuejs.org/v2/api/#vm-attrs)
