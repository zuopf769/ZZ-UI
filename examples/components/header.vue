<template>
  <header class="header">
    <div class="header-nav">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link to="/components">组件</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/resource">代码仓库</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import '~components/theme-chalk/common/var.scss';
@import '../style/var.scss';

.header {
  display: block;
  background-color: $color-white;
  overflow: hidden;
  position: fixed;
  border-bottom: $border;
  width: 100%;
  background: transparent;
  z-index: $header-index;
  min-width: $min-width;

  .nav-list {
    float: right;
  }

  .header-nav {
    width: 100%;
    padding: $header-padding;
    height: $header-height;
    background: $color-white;
  }
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;

  &:before,
  &:after {
    display: table;
    content: ' ';
  }
  &:after {
    clear: both;
  }
}

.nav-list-item {
  float: left;
  padding: 10px 34px;
  line-height: 20px;
  color: darken($color-white, 10%);
  > a {
    text-decoration: none;
    font-family: PingFangSC-Regular;
    color: #1f1f1f;
    letter-spacing: 0;
    text-align: right;
  }
  .router-link-active {
    font-weight: 600;
    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background: $color-yellow;
      margin-right: 4px;
    }
  }
}

.nav-brand {
  // padding: 10px 10px 10px 0px;
  line-height: 20px;
  font-size: 18px;
  display: inline-block;
  vertical-align: middle;
  color: #333;
}
</style>
