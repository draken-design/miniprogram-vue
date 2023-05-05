<template>
  <dr-check-box :value="true">单个</dr-check-box>
  <dr-check-box-group :value="val" @change="change">
    <dr-check-box :value="1">1</dr-check-box>
    <dr-check-box :value="2">2</dr-check-box>
    <dr-check-box :value="3">3</dr-check-box>
  </dr-check-box-group>
  <dr-check-box-group :value="val" :disabled="true" @change="change">
    <dr-check-box :value="1">1</dr-check-box>
    <dr-check-box :value="2">2</dr-check-box>
    <dr-check-box :value="3">3</dr-check-box>
  </dr-check-box-group>
  <dr-check-box :value="true" :disabled="true">单个</dr-check-box>
  <dr-check-box :value="false" :disabled="true">单个</dr-check-box>
</template>
<script setup lang="ts">
import DrCheckBox from "@/packages/check-box/index.vue";
import DrCheckBoxGroup from "@/packages/check-box-group/index.vue";
import { ref } from "vue";
const val = ref([1]);
const change = (e) => {
  val.value = e;
  console.log(e);
};
</script>
