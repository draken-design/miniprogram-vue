<template>
  <view v-for="item in data" :key="item.name">
    <view class="name">{{ item.name }}</view>
    <view class="tags">
      <dr-tag
        v-for="ele in item.arr"
        :type="ele.type"
        class="tag"
        :size="ele.size"
        :round="ele.round"
        :plain="ele.plain"
        >标签</dr-tag
      >
    </view>
  </view>
</template>

<script setup lang="ts">
import DrTag from "../../packages/tag/index.vue";
const data: any[] = [
  {
    name: "空心标签",
    arr: [
      {
        type: "primary",
        size: "large",
      },
      {
        type: "success",
        size: "large",
      },
      {
        type: "info",
        size: "large",
      },
      {
        type: "warning",
        size: "large",
        round: false,
      },
      {
        type: "error",
        size: "large",
        round: false,
      },
    ],
  },
  {
    name: "实心标签",
    arr: [
      {
        type: "primary",
        size: "large",
        plain: false,
      },
      {
        type: "success",
        size: "large",
        plain: false,
      },
      {
        type: "info",
        size: "large",
        plain: false,
      },
      {
        type: "warning",
        size: "large",
        round: false,
        plain: false,
      },
      {
        type: "error",
        size: "large",
        plain: false,
      },
    ],
  },
  {
    name: "小标签",
    arr: [
      {
        type: "primary",
        size: "small",
        plain: false,
      },
      {
        type: "success",
        size: "small",
        plain: false,
      },
      {
        type: "info",
        size: "small",
        plain: false,
      },
      {
        type: "warning",
        size: "small",
        round: false,
        plain: false,
      },
      {
        type: "error",
        size: "small",
        plain: false,
      },
    ],
  },
];
</script>

<style>
.name {
  font-size: 16px;
  font-weight: bold;
  margin: 20px;
}
.tags {
  margin-left: 10px;
}
.tag {
  margin-left: 10px;
}
</style>
