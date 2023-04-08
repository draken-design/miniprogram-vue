<template>
  <view class="dr_cell" @click="cellClick">
    <slot name="leftIcon"></slot>
    <view class="dr_cell_content">
      <view class="dr_cell_content_top">
        <view class="dr_cell_left">
          <slot name="titleIcon"></slot>
          <text :class="['dr_cell_title', { dr_cell_asterisk: props.asterisk }]">
            {{ props.title }}
          </text>
          <tag v-if="props.titleTag" :style="props.titleTagStyle">{{ props.titleTag }}</tag>
        </view>
        <view class="dr_cell_left">
          <text v-if="props.rightTag" class="dr_cell_title" :style="props.rightTagStyle">
            {{ props.rightTag }}
          </text>
        </view>
      </view>
      <slot></slot>
    </view>
    <view :class="['dr_cell_arrow_right', props.defaultArrowClass]">
      <slot name="arrowIcon"></slot>
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-cell">
import tag from '../tag/index.vue';
import { CSSProperties, withDefaults } from 'vue';
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
  defaultArrowClass?: string;
  /**
   * @description 标红 默认不显示
   */
  asterisk?: boolean;
}
const props = withDefaults(defineProps<CellProps>(), {
  title: '',
  openArrow: true,
  asterisk: false,
});
const emits = defineEmits(['click']);
let cellClick = () => emits('click');
</script>
