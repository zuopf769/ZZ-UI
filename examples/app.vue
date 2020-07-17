<template>
  <div class="app">
    <Header />
    <div class="page">
      <Sidebar />
      <div class="page-content">
        <div class="mk-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from './components/header.vue'
import Sidebar from './components/sidebar.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Header,
    Sidebar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~components/theme-chalk/index.scss';
@import '~components/theme-chalk/common/var.scss';
@import './style/var.scss';

html,
body {
  min-width: $min-width;
}

.app {
  overflow-x: hidden;
}

.page {
  min-height: 100%;
  max-height: 100vh;
  padding-top: $header-height;
  overflow: auto;
}

.page-content {
  height: 100%;
  margin-left: $sidebar-width + 15px;
}

.mk-content {
  width: $content-width;
  padding: 0 0 20px 0;
  margin: 0 auto;
  box-sizing: content-box;
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-top: 0;
  }
  h1 {
    font-size: 30px;
    position: relative;
    margin-bottom: 40px;
    margin-top: 32px;
    &:after {
      content: ' ';
      display: inline-block;
      height: 4px;
      width: 30px;
      background-color: $color-primary;
      left: 0;
      bottom: -8px;
      position: absolute;
    }
  }
  h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 12px;
  }
  .demo-table {
    p {
      margin: 10px 0px 5px 0px;
      text-align: left;
    }
  }
  pre code {
    display: block;
    padding: 20px;
    background-color: #f8f9fc;
    color: $color-text-2;
  }
  blockquote {
    margin: 0;
    padding-left: 10px;
    border-left: 3px solid $color-line-2;

    margin-top: -30px;
    margin-bottom: 40px;
    color: #969cae;
    line-height: 24px;
    a {
      // &:after {
      //   content: '\e988';
      //   font-family: mtdicon;
      //   display: inline-block;
      //   font-size: 12px;
      // }
    }
  }
  p + blockquote {
    margin-top: 0;
  }
  // a{
  //   text-decoration: none;
  // }
  .table {
    width: 100%;
    // table-layout: fixed;
    border-collapse: collapse;
    margin-bottom: 45px;
    color: #333;
    th {
      text-align: left;
      padding: 20px 32px;
      line-height: 20px;
      border-bottom: $border;
      color: $color-text-4;
      font-weight: $font-weight-medium;
      white-space: nowrap;
    }
    td {
      padding: 20px 32px;
      line-height: 20px;
      border-bottom: $border;
      max-width: 200px;
    }
  }
  .mtdicon-link {
    font-size: 12px;
  }
}

h1,
h2,
h3 {
  font-weight: $font-weight-medium;
  color: $text-title-color;
  line-height: 1.5;
}

::-webkit-scrollbar {
  background-color: transparent;
  z-index: 11;

  &:horizontal {
    height: 6px;
  }

  &:vertical {
    width: 6px;
  }

  &-thumb {
    background-color: #edf0f7;
    border-radius: 1px;
  }

  &-corner {
    background: transparent;
  }

  &-track {
    background: transparent;
    &-piece {
      background: transparent;
      width: 6px;
    }
  }
}
</style>
