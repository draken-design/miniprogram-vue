<template>
  <view
    :class="[
      'dr_tag',
      'dr_tag_type_' + props.type,
      'dr_tag_size_' + props.size,
      { ['dr_tag_' + props.type + '_plain']: props.plain },
      { dr_tag_plain: props.plain },
      { dr_tag_round: props.round },
    ]"
    :style="{ background: props.bgColor, color: props.color }"
  >
    <text class="dr_tag_children">
      <slot></slot>
    </text>
  </view>
</template>
<script setup lang="ts" name="dr-tag">
import { withDefaults } from 'vue'
export interface TagProps {
  /**
   * @description 类型
   */
  type?: 'primary' | 'success' | 'error' | 'warning' | 'info'
  /**
   * @description 圆角标签
   */
  round?: boolean
  /**
   * @description 标签大小
   */
  size?: 'medium' | 'large' | 'small' | 'default'
  /**
   * @description 文字颜色
   */
  color?: string
  /**
   * @description 背景颜色
   */
  bgColor?: string
  /**
   * @description 朴素标签
   */
  plain?: boolean
}
const props = withDefaults(defineProps<TagProps>(), {
  color: '',
  type: 'primary',
  bgColor: '',
  round: true,
  size: 'default',
  plain: true,
})
</script>
