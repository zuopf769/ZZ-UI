# 如何使用

使用 npm 的方式安装。

```
npm i @zz/zz-ui
```

在项目代码中引入组件和样式

```
// 引入 样式
import '@zz/zz-ui/lib/theme-chalk/index.css'

// 引入组件库
import Vue from 'vue'
import ZZUI from '@zz/zz-ui'

Vue.use(ZZUI)

```

## 开发调试

启动调试，访问 [localhost:8081](http://localhost:8081) 查看效果

```
npm start
```

启动单元测试，查看单元测试结果

```
npm run unit
// or
npm run unit:watch
```

## 构建部署

```
npm run build
```

编译后文件会放在`lib`文件夹中

## 按需加载

**注意，按需加载时样式文件会存在重复的样式，可使用 cssmin 来消除重复**

你可以手动  通过以下写法来实现按需加载

```

```

如果使用`babel`,也可以通过 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) 插件来实现按需加载
在 `.babelrc` 中加入这个插件

```
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "@zz/zz-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

之后你仍可以这样写，达到按需加载

```
import { Button } from '@zz/zz-ui'
```

## 兼容性

现代浏览器及 IE 10+。

对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 [babel-preset-env](https://babeljs.io/docs/en/babel-polyfill) 来解决浏览器兼容问题。
