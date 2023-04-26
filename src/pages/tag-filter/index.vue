<template>
  <view style="margin: 10px 0">普通</view>
  <dr-tag-filter :tag-list="list" @on-change="change"></dr-tag-filter>
  <view style="margin: 10px 0">选择多个</view>
  <dr-tag-filter
    :tag-list="list"
    :select-number="2"
    @on-change="change"
  ></dr-tag-filter>
</template>
<script setup lang="ts">
import DrTagFilter, { TagList } from "../../packages/tag-filter/index.vue";
const list = [
  { key: "1", text: "选项 A" },
  { key: "2", text: "选项 B" },
  { key: "3", text: "选项 C" },
  { key: "4", text: "选项 D" },
  { key: "5", text: "选项 E" },
];
const change = (val: TagList[]) => {
  console.log(val);
};
</script>
