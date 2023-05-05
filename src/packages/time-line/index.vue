<template>
  <view class="dr_time_line">
    <view
      v-for="(item, index) in props.items"
      class="dr_time_line_progress"
      :key="item.title + index"
    >
      <view class="dr_time_line_progress_left">
        <dr-icons
          v-if="item.icon"
          :name="item.icon.name"
          :color="item.icon.color"
          :size="item.icon.size"
          class="dr_time_line_progress_icon"
        />
        <view
          v-else
          class="dr_time_line_progress_round"
          :style="computedColor(item)"
        />
        <view class="dr_time_line_border" :style="computedColor(item)" />
      </view>
      <view class="dr_time_line_progress_right">
        <view class="dr_time_line_title" :style="{ color: item.color }">
          {{ item.title }}
        </view>
        <view class="dr_time_line_desc">
          {{ item.desc }}
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-time-line">
import DrIcons from "../icons/index.vue";
import type { Iconprops } from "../icons/index.vue";
export interface DrTimeLineProgress {
  /**
   * @description 节点标题
   */
  title: string;
  /**
   * @description 辅助信息
   */
  desc?: string;
  icon?: Iconprops;
  color?: string;
}
export interface DrTimeLineProps {
  items: DrTimeLineProgress[];
}
const props = defineProps<DrTimeLineProps>();
const computedColor = (data: DrTimeLineProgress) => {
  const color = data.color || "#1f232926";
  return {
    color,
    backgroundColor: color,
  };
};
</script>
