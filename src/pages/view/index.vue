<template>
  <view class="home">
    <view class="text">视图</view>
    <dr-cell
      v-for="item in data"
      :title="item.name"
      :open-arrow="true"
      :key="item.name"
      @tap="click(item)"
    />
  </view>
</template>

<script setup lang="ts">
import { DrCell } from "../../packages";
interface Item {
  name: string;
  tips: string;
  url: string;
}
const click = (item: Item) => {
  uni.navigateTo({
    url: item.url,
    success: (res) => {
      console.log(res);
    },
    fail: (err) => {
      console.log(err);
    },
  });
};
const data: Item[] = [
  {
    name: "Tag标签",
    tips: "",
    url: "../tag/index",
  },
  {
    name: "popup蒙层",
    tips: "",
    url: "../popup/index",
  },
  {
    name: "加载",
    tips: "",
    url: "../loading/index",
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
