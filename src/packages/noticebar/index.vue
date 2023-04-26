<template>
  <view class="dr_noticebar">
    <view class="dr_noticebar_content">
      <view
        :class="[
          'dr_noticebar_content_text',
          {
            dr_text_overflow: props.singleRow && !props.isRoll,
            dr_noticebar_roll: props.isRoll,
          },
        ]"
      >
        <slot />
      </view>
      <view class="dr_noticebar_icon">
        <slot name="noticeIcon" />
      </view>
      <view v-if="props.showMore && !props.isRoll" class="dr_noticebar_more"
        >查看</view
      >
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-noticebar">
import { withDefaults } from "vue";
export interface DrNoticebarProps {
  /**
   * @description 是否需要关闭按钮
   */
  close?: boolean;
  /**
   * @description 显示几行
   */
  singleRow?: boolean;
  /**
   * @description 内容是否滚动
   */
  isRoll?: boolean;
  /**
   * @description 滚动速度
   */
  rollSpeed?: number;
  /**
   * @description 是否显示更多
   */
  showMore?: boolean;
}
const props = withDefaults(defineProps<DrNoticebarProps>(), {
  close: false,
  singleRow: true,
  isRoll: false,
  rollSpeed: 100,
  showMore: false,
});
</script>
