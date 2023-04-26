<template>
  <view class="dr_avatar">
    <image class="dr_avatar_img" :src="props.src" :mode="props.mode" />
  </view>
</template>
<script setup lang="ts" name="dr-cell">
import { withDefaults } from "vue";
export interface DrAvatarProps {
  /**
   * @description 头像加载地址
   */
  src: string;
  /**
   * @description 头像大小
   */
  size?: number | "mini" | "extra-small" | "small" | "medium" | "large";
  /**
   * @description 头像形状
   */
  shape?: "circle" | "square" | "squircle";
  /**
   * @description 头像图片加载中或失败时的兜底文案
   */
  alt?: string;
  /**
   * 头像图片加载中或失败时的兜底图片
   */
  defaultSrc?: string;
  mode?:
    | "scaleToFill"
    | "aspectFit"
    | "aspectFill"
    | "widthFix"
    | "top"
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right";
}

const props = withDefaults(defineProps<DrAvatarProps>(), {
  src: "",
  shape: "circle",
  asterisk: false,
});
</script>
