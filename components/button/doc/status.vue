<template>
  <zz-row>
    <zz-col :span="12">
      <zz-button type="primary">基础按钮</zz-button>
      <zz-button type="primary" loading>基础按钮</zz-button>
      <zz-button type="primary" disabled>基础按钮</zz-button>
    </zz-col>
    <zz-col :span="12">
      <zz-button>次要按钮</zz-button>
      <zz-button loading>次要按钮</zz-button>
      <zz-button disabled>次要按钮</zz-button>
    </zz-col>
    <zz-col :span="12" style="margin-top: 40px;">
      <zz-button type="text-primary">文字按钮</zz-button>
      <zz-button type="text-primary" loading>文字按钮</zz-button>
      <zz-button type="text-primary" disabled>文字按钮</zz-button>
    </zz-col>
  </zz-row>
</template>
