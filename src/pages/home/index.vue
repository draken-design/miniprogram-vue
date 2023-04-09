<template>
  <view class="home">
    <view class="top">
      <image class="icon" src="../../static/pkg.png"></image>
    </view>
    <view class="text">draken-design</view>
    <dr-cell
      v-for="item in data"
      :title="item.name"
      :open-arrow="true"
      :key="item.name"
      @click="a(item)"
    >
      <view>{{ item.tips }}</view>
    </dr-cell>
  </view>
</template>

<script setup lang="ts">
import { DrCell } from "../../packages";
interface Item {
  name: string;
  tips: string;
  url: string;
}
const a = (item: Item) => {
  console.log(item);
  uni.navigateTo({
    url: item.url,
    success: (res) => {
      console.log(res);
    },
  });
};
const data: Item[] = [
  {
    name: "基础",
    tips: "包含颜色、文本、图标等",
    url: "../base/index",
  },
  {
    name: "视图",
    tips: "包含标签、步骤条、通告栏等",
    url: "../view/index",
  },
  {
    name: "操作反馈",
    tips: "包含颜色、文本、图标等",
    url: "",
  },
  {
    name: "表单",
    tips: "包含颜色、文本、图标等",
    url: "base",
  },
  {
    name: "布局",
    tips: "包含颜色、文本、图标等",
    url: "base",
  },
  {
    name: "导航",
    tips: "包含颜色、文本、图标等",
    url: "base",
  },
];
</script>

<style lang="less">
.home {
  .top {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .text {
    text-align: center;
    margin: 20px 0;
  }
  .icon {
    width: 80px;
    height: 80px;
  }
}
</style>
