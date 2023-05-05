<template>
  <view class="padding">
    组包裹
    <dr-radio-group :value="val" @on-change="changeTwo">
      <dr-radio value="1"> true </dr-radio>
      <dr-radio value="2"> false </dr-radio>
    </dr-radio-group>
    单个
    <dr-radio :value="singleVal" @on-change="change"> 单个 </dr-radio>
    禁止状态
    <dr-radio-group :value="'1'" @on-change="changeTwo" :disabled="true">
      <dr-radio value="1"> true </dr-radio>
      <dr-radio value="2"> false </dr-radio>
    </dr-radio-group>
    <dr-radio :value="singleVal" label-position="left"> 反转 </dr-radio>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import DrRadio from "../../packages/radio/index.vue";
import DrRadioGroup from "../../packages/radio-group/index.vue";
const change = (e: string | boolean) => {
  console.log(e);
};
const changeTwo = (e: string) => {
  val.value = e;
};
const val = ref<string>("1");
const singleVal = ref<boolean>(false);
</script>
