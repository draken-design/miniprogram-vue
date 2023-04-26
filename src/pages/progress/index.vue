<template>
  <view style="padding: 20px">
    <view style="margin: 10px 0">更改尺寸</view>
    <dr-progress :percentage="30" :stroke-size="10" />
    <view style="margin: 10px 0">更改背景颜色</view>
    <dr-progress :percentage="30" strokebg-color="yellow" />
    <view style="margin: 10px 0">更改进度颜色</view>
    <dr-progress :percentage="30" fill-color="red" />
    <view style="margin: 10px 0">显示文字进度</view>
    <dr-progress :percentage="percentage" :show-text="true" />
    <view style="margin: 10px 0">更改文字颜色</view>
    <dr-progress :percentage="30" text-color="red" :show-text="true" />
    <view style="margin: 10px 0">显示进度条动画</view>
    <dr-progress
      :percentage="percentage"
      :show-text="true"
      :in-progress="true"
    />
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import DrProgress from "../../packages/progress/index.vue";
const percentage = ref(10);
let time: any = setInterval(() => {
  percentage.value = percentage.value + Math.floor(Math.random() * 10);
  if (percentage.value >= 100) {
    time && clearInterval(time);
    time = null;
  }
}, 3000);
</script>
