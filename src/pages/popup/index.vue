<template>
  <dr-tag :plain="false" size="large" @tap="params.popupVis = true"
    >点击弹出</dr-tag
  >
  <dr-popup
    :visible="params.popupVis"
    @on-cancel="params.popupVis = false"
    @on-confirm="params.popupVis = false"
    :footer-options="{
      okText: '确定',
      cancelText: '取消',
    }"
    title="asdas"
  >
    <template #header>asdad</template>
    <view style="height: 700px; background-color: antiquewhite" />
  </dr-popup>
</template>

<script setup lang="ts">
import DrPopup from "../../packages/popup/index.vue";
import DrTag from "../../packages/tag/index.vue";
import { reactive } from "vue";
const params = reactive({
  popupVis: false,
});
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
