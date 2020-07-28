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
// 2.0
const icons2 = [
  'avatar-fill',
  'avatar-o',
  'avatar-group-fill',
  'avatar-group',
  'avatar-add',
  'avatar-add-fill',

  'align-justify',
  'align-center',
  'align-right',
  'align-left',

  'arrow-up',
  'arrow-right',
  'arrow-down',
  'arrow-left',

  'up',
  'right',
  'down',
  'left',

  'up-thick',
  'right-thick',
  'down-thick',
  'left-thick',
  'fast-backward',
  'fast-forward',

  'triangle-left',
  'triangle-down',
  'triangle-up',
  'triangle-right',

  'meh-o',
  'meh',
  'sad-o',
  'sad',
  'smile-o',
  'smile',

  'checkbox-unchecked',
  'checkbox-checked-o',
  'checkbox-checked',

  'add',
  'check',
  'close',
  'customer-o',
  'share-o',
  'code-on',
  'delete-o',
  'ellipsis',
  'copy-o',
  'cloud-o',
  'filter-o',
  'download-o',
  'error-o',
  'error-circle',
  'error',
  'success-circle',
  'success-o',
  'question-mark',
  'question-circle',
  'question-circle-o',
  'warning',
  'warning-circle',
  'warning-circle-o',
  'info-circle-o',



  'list-view',
  'mail-o',
  'home-o',
  'bell-o',
  'code-off',
  'edit-o',
  'remove',
  'refresh-o',
  'sortupanddown-o',
  'share-2',
  'theme-o',

  'link-o',
  'wifi-o',

  'time-o',
  'lock-o',
  'menus-o',
  'star-o',
  'setting',
  'visibility-on-o',


  'database-o',
  'import-export-o',
  'exit-fullscreen-o',
  'fullscreen-o',
  'hierarchy-o',
  'drill-down-o',
  'cart-o',
  'invoice-o',
  'paste-code-o',
  'export-o',
  'save-o',
  'undo-o',
  'visibility-off-o',
  'location-o',
  'calculator-o',

  'file-o',
  'bell',
  'location',
  'share',
  'home',
  'filter',

  'cart',
  'save',

  'calculator',
  'time',
  'theme',
  'star',

  'refresh',
  'calendar',
  'calendar-o',
  'file-add',
  'file-add-o',

  'areachart',
  'areachart-o',
  'barschart',
  'barschart-o',
  'piechart',
  'piechart-o',


  'minus',
  'camera-fill',
  'contacts-fill',
  'cloud-fill',
  'customer',
  'drill-down-fill',
  'fabulous-fill',

  'database-fill',
  'file-export-fill',
  'file-send-fill',
  'file-fill',
  'lock-fill',
  'invoice-fill',
  'hierarchy-fill',
  'lookup-fill',
  'mail-fill',
  'picture-fill',
  'paste-code-fill',
  'printing-fill',
  'schedule-fill',
  'setting-fill',
  'telephone-fill',
  'star-half',
  'play-fill',

  'cleaner-format',
  'delete-selectedcolumn',
  'formatbold',
  'delete-selected-row',
  'form',
  'color-fill',
  'list-bulleted',
  'italic',
  'list-numbered',
  'serikeethrough',
  'paint',
  'unmerge-cells',
  'merge-cells',
  'underlined',
  'toc',
  'colorfont',
  'comment-fill',
  'fabulous',
  'camera',

  'contacts',
  'folder-fill',
  'mosaic',
  'file',
  'file-send',
  'file-export',
  'play',
  'lookup',
  'rotate',
  'tailoring',
  'folder',
  'shape',
  'schedule',
  'picture',
  'comment',
  'telephone',
  'load',
  'add-square-o',
  'checkbox-indetermina-o',
  'checkbox-indetermina',
  'add-square-fill',
  'info-circle',
  'bankcard',

  'delete',
  'copy',
  'visibility-on-fill',
  'invoice',
  'bank-card-fill',
  'h1',
  'h2',
  'sort',
  'file-import',
  'file-import-fill',

  'insert-row-up',
  'insert-row-down',
  'insert-column-left',
  'insert-column-right',
  'header-line',
  'header-column',

  'enlarge',
  'search',
  'micrify',
  'more',
  'radio-unchecked',
  'top',
  'edit',
  'printing',
  'template',
  'unlock',
  'redo',
  'originalsize',
  'unlock-fill',
  'history',
  'newfolde',

  'check-thick',
  'point',
  'handle',
  'warningmini',
  'closemini',
  'questionmini',
  'checkmini',
  'compress',
  'collapse',
  'expand',
  'like',
  'like-fill',
  'quote',
  'annex',
  'at',
  'bar-chart-fill',
  'alphabetically',
  'bell-slash-fill',
  'bar-chart',
  'demonstration',
  'funnel-chart-fill',
  'adaptation-screen',
  'floor-fill',
  'education',
  'nosign',
  'funnel-chart',
  'laser-pen',
  'education-fill',
  'log-out',
  'paperplane',
  'globe',
  'keyboard',
  'paperplane-fill',
  'shield',
  'id-card',
  'shield-fill',
  'shield-success-fill',
  'shield-success',
  'floor',
  'qrcode',
  'table',
  'monitor',
  'original',
  'square-stack-up-fill',
  'phone',
  'table-fill',
  'slider-settings',
  'square-stack-up',
  'trophy',
  'trophy-fill',
  'jigsaw-fill',
  'jigsaw',
  'bolt-fill',
  'bolt',
  'badge',
  'flame-fill',
  'flame',
  'add-message',
  'add-message-fill',

  'cancel-circle',
  'more-circle',
];
export default {
  data () {
    return {
      icons: icons,
    };
  },
}
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
