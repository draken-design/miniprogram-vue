<template>
  <dr-tag :plain="false" size="large" @tap="a">点击全屏loading</dr-tag>
  <dr-tag :plain="false" size="large" @tap="params.loading = true"
    >点击局部loading</dr-tag
  >
  <dr-loading :loading="params.fullLoading" :full="true" tips="3秒后自动关闭" />
  <dr-loading :loading="params.loading"
    ><view style="width: 100px; height: 100px; background-color: red"
  /></dr-loading>
</template>

<script setup lang="ts">
import DrLoading from "../../packages/loading/index.vue";
import DrTag from "../../packages/tag/index.vue";
import { reactive } from "vue";
const params = reactive({
  fullLoading: false,
  loading: false,
});
const a = () => {
  params.fullLoading = true;
  setTimeout(() => {
    params.fullLoading = false;
  }, 3000);
};
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
