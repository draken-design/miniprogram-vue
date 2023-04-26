<template>
  <dr-tag>default</dr-tag>
  <dr-tag :plain="false">default</dr-tag>
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
  <dr-tag round>default</dr-tag>
  <dr-tag size="small">small</dr-tag>
  <!-- <dr-loading tips="加载中" :full="true" /> -->
  <dr-loading
    ><view style="width: 100px; height: 100px; background-color: red"
  /></dr-loading>
  <dr-loading :loading="false">
    <view style="width: 100px; height: 100px; background-color: red" />
  </dr-loading>
  <dr-cell
    title="title"
    :asterisk="true"
    titleTag="titleTag"
    rightTag="rightTag"
    @tap="cellClick"
  >
    <template v-slot:titleIcon><dr-loading /></template>
    <template v-slot:leftIcon><dr-loading /></template>
    <template v-slot:arrowIcon><dr-loading /></template>
    <view style="width: 100px; height: 100px; background-color: red" />
  </dr-cell>
  <dr-popup
    :visible="params.popupVis"
    @on-cancel="params.popupVis = false"
    @on-confirm="params.popupVis = false"
    :footer-options="{
      okText: '确定',
      cancelText: '取消',
    }"
  >
    <template #header>asdad</template>
    <view style="height: 700px; background-color: antiquewhite"></view>
  </dr-popup>
  <dr-media-preview
    :is-add-btn="true"
    :rows="4"
    :media-list="[
      { type: 'image' },
      { type: 'image' },
      { type: 'image' },
      { type: 'image' },
      { type: 'image' },
      { type: 'image' },
      { type: 'image' },
    ]"
  />
  <dr-icons name="download" color="red"></dr-icons>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  DrCell,
  DrDropDown,
  DrIcons,
  DrLoading,
  DrMediaPreview,
  DrPopup,
  DrTag,
} from "../../packages";

const params = reactive({
  popupVis: false,
});
const cellClick = () => {
  params.popupVis = true;
};
</script>

<style></style>
