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
import DrCell from "../../packages/cell/index.vue";
interface Item {
  name: string;
  tips: string;
  url: string;
}
const click = (item: Item) => {
  uni.navigateTo({
    url: item.url,
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
  {
    name: "下拉菜单drop-down",
    tips: "",
    url: "../drop-down/index",
  },
  {
    name: "图片预览-img-picker",
    tips: "",
    url: "../img-picker/index",
  },
  {
    name: "步骤条-steps",
    tips: "",
    url: "../steps/index",
  },
  {
    name: "手风琴-accordion",
    tips: "",
    url: "../accordion/index",
  },
  {
    name: "通知栏-noticebar",
    tips: "",
    url: "../noticebar/index",
  },
  {
    name: "进度条-progress",
    tips: "",
    url: "../progress/index",
  },
  {
    name: "标签页-tabs",
    tips: "",
    url: "../tabs/index",
  },
  {
    name: "标签筛选器-tag-filter",
    tips: "",
    url: "../tag-filter/index",
  },
  {
    name: "弹窗-toast",
    tips: "",
    url: "../toast/index",
  },
  {
    name: "单选-radio",
    tips: "",
    url: "../radio/index",
  },
  {
    name: "时间轴-time-line",
    tips: "",
    url: "../time-line/index",
  },
  {
    name: "选择时间日期-date-picker",
    tips: "",
    url: "../date-picker/index",
  },
  {
    name: "开关-switch",
    tips: "",
    url: "../switch/index",
  },
  {
    name: "复选框-check-box",
    tips: "",
    url: "../check-box/index",
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
