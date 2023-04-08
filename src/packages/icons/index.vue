<template>
  <view
    :style="{ color: props.color, 'font-size': props.size || 26 + 'px' }"
    class="dr_icon"
    :class="'dr_icon-' + props.name"
  />
</template>
<script setup lang="ts" name="dr-loading">
export interface Iconprops {
  size?: number;
  name: string;
  color?: string;
}
const props = defineProps<Iconprops>();
</script>
<style>
@font-face {
  font-family: 'dr-icon';
  src: url('@draken-design/mini-common/font/dr-icon.woff2') format('woff2'),
    url('@draken-design/mini-common/font/dr-icon.woff') format('woff'),
    url('@draken-design/mini-common/font/dr-icon.ttf') format('truetype');
}
</style>
