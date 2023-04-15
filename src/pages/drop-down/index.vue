<template>
  <view class="">
    <dr-drop-down
      @value-change="b"
      @mask-click="a"
      :default-value="['b']"
      :option-list="[
        [
          {
            key: 'a',
            name: '测试a',
          },
          {
            key: 'b',
            name: '测试b',
          },
          {
            key: 'c',
            name: '测试c',
          },
        ],
        [
          {
            key: 'a',
            name: '测试a',
          },
          {
            key: 'b',
            name: '测试b',
          },
          {
            key: 'c',
            name: '测试c',
          },
        ],
        [
          {
            key: 'a',
            name: '测试a',
          },
          {
            key: 'b',
            name: '测试b',
          },
          {
            key: 'c',
            name: '测试c',
          },
        ],
      ]"
    ></dr-drop-down>
  </view>
</template>

<script setup lang="ts">
import DrDropDown from "../../packages/drop-down/index.vue";
const a = (data: string[]) => {
  console.log(data);
};
const b = (data: string[]) => {
  console.log(data);
};
</script>

<style lang="less">
.drop_down_page {
  padding: 0 12px;
}
</style>
