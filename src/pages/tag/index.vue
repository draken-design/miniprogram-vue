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
  <!-- <dr-tag>primary</dr-tag>
  <dr-tag :plain="false">primary</dr-tag>
  <dr-tag type="success">success</dr-tag>
  <dr-tag type="success" :plain="false">success</dr-tag>
  <dr-tag type="info">info</dr-tag>
  <dr-tag type="info" :plain="false">info</dr-tag>
  <dr-tag type="error">error</dr-tag>
  <dr-tag type="error" :plain="false">error</dr-tag>
  <dr-tag type="warning">warning</dr-tag>
  <dr-tag type="warning" :plain="false">warning</dr-tag>
  <dr-tag size="large">large</dr-tag>
  <dr-tag size="medium">medium</dr-tag>
  <dr-tag round>primary</dr-tag>
  <dr-tag size="small">small</dr-tag> -->
</template>

<script setup lang="ts">
import { DrTag } from "../../packages";
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
