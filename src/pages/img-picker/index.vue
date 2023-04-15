<template>
  <view class="home">
    <dr-img-picker :image-list="list" @on-change="change"></dr-img-picker>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DrImgPicker, { ImageList } from "../../packages/img-picker/index.vue";
const list = ref<ImageList[]>([
  {
    linkPath:
      "https://img2.baidu.com/it/u=3608044123,2583872343&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  },
  {
    linkPath:
      "https://img0.baidu.com/it/u=1877014320,1660843769&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  },
  {
    linkPath:
      "https://img2.baidu.com/it/u=2641557360,4120958594&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082",
  },
  {
    linkPath:
      "https://img2.baidu.com/it/u=1374093313,1479217338&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
  },
  {
    linkPath:
      "https://img1.baidu.com/it/u=1430321447,2576130886&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=648",
  },
  {
    linkPath:
      "https://img0.baidu.com/it/u=626354588,3241967495&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=749",
  },
  {
    linkPath:
      "https://img2.baidu.com/it/u=3608044123,2583872343&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  },
]);
const change = (imageList: ImageList[], addList: ImageList[]) => {
  console.log(imageList, addList);
  list.value = imageList;
};
</script>

<style lang="less"></style>
