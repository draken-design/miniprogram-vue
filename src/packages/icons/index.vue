<template>
  <view
    :style="{ color: props.color, 'font-size': props.size + 'px' }"
    class="dr_icon"
    :class="'dr_icon-' + props.name"
  />
</template>
<script setup lang="ts" name="dr-loading">
import { withDefaults } from "vue";
export interface Iconprops {
  /**
   * @description 尺寸
   */
  size?: number;
  /**
   * @description icon名称
   */
  name: string;
  /**
   * @description icon颜色
   */
  color?: string;
}
const props = withDefaults(defineProps<Iconprops>(), {
  size: 26,
});
</script>
<style>
@font-face {
  font-family: "dr-icon";
  src: url("@draken-design/mini-common/font/dr-icon.woff2") format("woff2"),
    url("@draken-design/mini-common/font/dr-icon.woff") format("woff"),
    url("@draken-design/mini-common/font/dr-icon.ttf") format("truetype");
}
</style>
