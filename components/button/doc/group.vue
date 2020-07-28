<template>
  <div class="demo-btn-group" style="">
    <zz-button-group>
      <zz-button type="text" icon="mtdicon mtdicon-file-add-o">添加</zz-button>
      <zz-button type="text" icon="mtdicon mtdicon-delete-o">删除</zz-button>
      <zz-button type="text" icon="mtdicon mtdicon-edit-o">编辑</zz-button>
    </zz-button-group>
  </div>
</template>
<style lang="scss" scoped>
.demo-btn-group {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .zz-btn {
    margin-left: 0;
  }
}
</style>
