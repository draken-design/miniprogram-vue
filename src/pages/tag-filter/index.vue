<template>
  <view style="margin: 10px 0">普通</view>
  <dr-tag-filter :tag-list="list" @on-change="change"></dr-tag-filter>
  <view style="margin: 10px 0">选择2个</view>
  <dr-tag-filter :tag-list="list" :select-number="2" @on-change="change" />
  <view style="margin: 10px 0">全选</view>
  <dr-tag-filter :tag-list="list" select-number="all" @on-change="change" />
  <view style="margin: 10px 0">通栏</view>
  <dr-tag-filter
    :tag-list="list"
    select-number="all"
    :column="1"
    @on-change="change"
  />
  <view style="margin: 10px 0">2栏</view>
  <dr-tag-filter
    :tag-list="list"
    select-number="all"
    :column="2"
    @on-change="change"
  />
  <view style="margin: 10px 0">3栏</view>
  <dr-tag-filter
    :tag-list="list"
    select-number="all"
    :column="3"
    @on-change="change"
  />
  <view style="margin: 10px 0">4栏</view>
  <dr-tag-filter
    :tag-list="list"
    select-number="all"
    :column="4"
    @on-change="change"
  />
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
