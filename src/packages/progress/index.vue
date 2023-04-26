<template>
  <view class="dr_progress">
    <view
      class="dr_progress_stroke"
      :style="{
        backgroundColor: props.strokebgColor,
        height: props.strokeSize + 'px',
        borderRadius,
      }"
    >
      <view
        :class="{
          dr_progress_percentage: true,
          dr_progress_percentage_inProgress: props.inProgress,
        }"
        :style="{
          backgroundColor: props.fillColor,
          width: percentage,
          borderRadius,
        }"
      />
    </view>
    <view
      v-if="props.showText"
      class="dr_progress_text"
      :style="{
        fontSize: props.strokeSize * 2 + 'px',
        lineHeight: props.strokeSize * 2 + 'px',
        color: props.textColor,
      }"
    >
      {{ percentage }}
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-progress">
import { withDefaults, computed } from "vue";
interface DrProgressProps {
  /**
   * @description 进度条百分比
   */
  percentage: number;
  /**
   * @description 进度条大小
   */
  strokeSize?: number;
  /**
   * 进度条背景颜色
   */
  strokebgColor?: string;
  /**
   * @description 进度条填充颜色
   */
  fillColor?: string;
  /**
   * @description 是否显示进度文字
   */
  showText?: boolean;
  /**
   * @description 文字颜色
   */
  textColor?: string;
  /**
   * @description 进度条动画
   */
  inProgress?: boolean;
}
const props = withDefaults(defineProps<DrProgressProps>(), {
  percentage: 0,
  strokeSize: 4,
  strokebgColor: "#dee0e3",
  fillColor: "#0081ff",
  showText: false,
  textColor: "#8f959e",
  inProgress: false,
});
const percentage = computed<string>(() => {
  return (props.percentage >= 100 ? 100 : props.percentage) + "%";
});
const borderRadius = computed<string>(() => {
  return props.strokeSize + "px";
});
</script>
