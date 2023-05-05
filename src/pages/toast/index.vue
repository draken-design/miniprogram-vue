<template>
  <dr-toast v-model:visible="visible.successVis" type="success">
    你送我捏愤怒为奴无人阿牛为u额北极光i红景天你送我捏愤怒为奴无人你送我捏愤怒为奴无人
  </dr-toast>
  <dr-toast v-model:visible="visible.errorVis" type="error">
    你送我捏愤怒为奴无人阿牛为u额北极光i红景天你送我捏愤怒为奴无人你送我捏愤怒为奴无人
  </dr-toast>
  <dr-toast v-model:visible="visible.loadingVis" type="loading">
    你送我捏愤怒为奴无人阿牛为u额北极光i红景天你送我捏愤怒为奴无人你送我捏愤怒为奴无人
  </dr-toast>
  <button @tap="changeVis('successVis')">successToast</button>
  <button @tap="changeVis('errorVis')">errorToast</button>
  <button @tap="changeVis('loadingVis')">loadingToast</button>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import DrToast from "../../packages/toast/index.vue";
const visible = reactive({
  successVis: false,
  errorVis: false,
  loadingVis: false,
});
const changeVis = (key: string) => {
  visible[key] = !visible[key];
};
</script>
