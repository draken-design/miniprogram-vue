<template>
  <view class="padding">
    <view style="margin: 10px 0">普通</view>
    <dr-tabs :tab-list="tabList"></dr-tabs>
    <view style="margin: 10px 0">滚动</view>
    <dr-tabs :tab-list="tabList2" :is-roll="true"></dr-tabs>
  </view>
</template>
<script setup lang="ts">
import DrTabs from "../../packages/tabs/index.vue";
const tabList = [
  {
    key: "1",
    title: "标签1",
  },
  {
    key: "2",
    title: "标签2",
  },
  {
    key: "3",
    title: "标签3",
  },
  {
    key: "4",
    title: "标签4",
  },
];
const tabList2 = [
  {
    key: "1",
    title: "标签1",
  },
  {
    key: "2",
    title: "标签2",
  },
  {
    key: "3",
    title: "标签3",
  },
  {
    key: "4",
    title: "标签4",
  },
  {
    key: "5",
    title: "标签1",
  },
  {
    key: "6",
    title: "标签2",
  },
  {
    key: "7",
    title: "标签3",
  },
  {
    key: "8",
    title: "标签4",
  },
];
</script>
