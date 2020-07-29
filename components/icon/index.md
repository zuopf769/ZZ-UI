<script>
const icons = [
  'areachart',
  'arrow-up',
  'arrow-right',
  'arrow-down',
  'arrow-left',
  'add',
  'add-thick',
  'avatar-o',
  'barschart',
  'bell',
  'bell-o',
  'calculator-o',
  'calendar',
  'calculator',
  'calendar-o',
  'cards-view',
  'checkbox-checked',
  'check-thick',
  'cart',
  'checkbox-indetermina',
  'checkbox-unchecked',
  'cart-o',
  'close',
  'close-thick',
  'code',
  'code-off',
  'copy-o',
  'copy',
  'customer',
  'customer-o',
  'delete',
  'database-o',
  'delete-o',
  'download-o',
  'edit-o',
  'drill-down-o',
  'edit',
  'ellipsis',
  'error-circle',
  'error-circle-thick-o',
  'export-o',
  'exit-fullscreen-o',
  'fast-backward',
  'fast-forward',
  'file-add-o',
  'file-add',
  'filter-o',
  'filter',
  'fullscreen-o',
  'home',
  'home-o',
  'hierarchy-o',
  'info-circle',
  'info-circle-o',
  'up',
  'up-thick',
  'right',
  'right-thick',
  'down',
  'down-thick',
  'left',
  'left-thick',
  'link-o',
  'link',
  'list-view',
  'loading',
  'location-o',
  'location',
  'paste-code-o',
  'paste-o',
  'menus-o',
  'piechart',
  'paste',
  'question-circle-o',
  'question-circle',
  'question-mark',
  'refresh-o',
  'save',
  'save-o',
  'search',
  'share',
  'share-o',
  'smile',
  'smile-o',
  'star',
  'star-o',
  'success-circle-thick',
  'success-o',
  'success-circle',
  'theme',
  'theme-o',
  'time',
  'time-o',
  'triangle',
  'triangle-down',
  'triangle-right',
  'undo-o',
  'undo',
  'warning',
  'warning-circle-o',
  'warning-circle',
  'visibility-off-o',
  'visibility-off',
  'wifi-o',
  'remove',
  'collapse',
  'expand',
];
export default {
  data () {
    return {
      icons: icons,
    };
  },
};
</script>
<style lang="scss">
  .demo-icon{
    .source > i{
      font-size: 24px;
      margin: 0 20px;
    }
  }
</style>

# 图标 / Icon

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`（实心） 和 `question-circle-o`（描线）；

命名顺序：`[图标名]-[形状?]-[描线?]-[方向?]`。

> `?`为可选参数

## 基础样式

直接通过设置类名为 `mtdicon-iconName` 来使用即可。例如：
:::demo

```html
<i class="mtdicon mtdicon-question-circle-o"></i>
<i class="mtdicon mtdicon-bell-o"></i>
<i class="mtdicon mtdicon-calculator-o"></i>
<i class="mtdicon mtdicon-cart-o"></i>
```

:::

### 图标集合

**注: 更多的图标资源**

<ul class='icon-list'>
  <li v-for='icon in icons' :key='icon' class='icon-item'>
    <i class='mtdicon' :class='`mtdicon-${icon}`'></i>
    <span class='icon-name'>mtdicon-{{icon}}</span>
  </li>
</ul>

<style>
  .icon-list{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .icon-item{
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    width: 25%;
    text-align: center;
    margin-bottom: 10px;
    padding: 20px;
  }
  .icon-item .mtdicon{
    font-size: 32px;
    margin-bottom: 20px;
  }
  .icon-name{
    display: block;
  }
  .demo-icon .source >i {
    font-size: 24px;
    margin: 0px 20px;
  }
</style>
