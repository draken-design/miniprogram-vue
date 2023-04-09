<template>
  <view class="dr_cell">
    <slot name="leftIcon"></slot>
    <view class="dr_cell_content">
      <view class="dr_cell_content_top">
        <view class="dr_cell_left">
          <slot name="titleIcon"></slot>
          <text
            :class="['dr_cell_title', { dr_cell_asterisk: props.asterisk }]"
          >
            {{ props.title }}
          </text>
          <dr-tag v-if="props.titleTag" :style="props.titleTagStyle">{{
            props.titleTag
          }}</dr-tag>
        </view>
        <view class="dr_cell_left">
          <text
            v-if="props.rightTag"
            class="dr_cell_title"
            :style="props.rightTagStyle"
          >
            {{ props.rightTag }}
          </text>
        </view>
      </view>
      <slot></slot>
    </view>
    <view :class="['dr_cell_arrow_right', props.arrowClass]">
      <slot v-if="slots.arrowIcon" name="arrowIcon"></slot>
      <dr-icons v-else name="forward" />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-cell">
import { DrTag, DrIcons } from "../";
import { CSSProperties, withDefaults, useSlots } from "vue";
export interface CellProps {
  /**
   * @description cell标题
   */
  title?: string;
  /**
   * @description 标题左侧tag
   */
  titleTag?: string;
  /**
   * @description 标题左侧tag 样式
   */
  titleTagStyle?: CSSProperties;
  /**
   * @description 标题右侧tag
   */
  rightTag?: string;
  /**
   * @description 标题右侧tag 样式
   */
  rightTagStyle?: CSSProperties;
  /**
   * @description 右边箭头 默认打开
   */
  openArrow?: boolean;
  /**
   * @description 右侧箭头class
   */
  arrowClass?: string;
  /**
   * @description 标红 默认不显示
   */
  asterisk?: boolean;
}
const props = withDefaults(defineProps<CellProps>(), {
  title: "",
  openArrow: true,
  asterisk: false,
});
const slots = useSlots();
</script>
