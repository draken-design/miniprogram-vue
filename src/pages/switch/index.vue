<template>
  <view class="padding">
    <dr-switch :value="false">普通</dr-switch>
    <dr-switch :value="true">普通</dr-switch>
    <dr-switch :value="true" :disabled="true">禁止状态</dr-switch>
    <dr-switch :value="false" :disabled="true">禁止状态2</dr-switch>
    <dr-switch :value="false" :loading="loading">loading状态</dr-switch>
  </view>
</template>
<script setup lang="ts">
import DrSwitch from "@/packages/switch/index.vue";
import { ref } from "vue";
const loading = ref<boolean>(false);
setTimeout(() => {
  loading.value = true;
}, 3000);
</script>
