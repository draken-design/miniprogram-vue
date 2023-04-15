<template>
  <view class="dr_steps">
    <view
      class="dr_steps_item"
      v-for="(item, index) in props.stepList"
      :key="index"
    >
      <view class="dr_steps_item_wrap">
        <view
          v-if="index !== 0"
          class="dr_steps_wrap_line dr_steps_wrap_line_left"
        />
        <dr-icons
          v-if="item.icon"
          :name="item.icon.name"
          :color="props.currentNode >= index ? '#0081ff' : item.icon.color"
          :size="item.icon.size"
        />
        <view
          v-else
          :class="[
            'dr_steps_figure',
            { dr_steps_figure_active: props.currentNode >= index },
          ]"
        >
          {{ index + 1 }}
        </view>
        <view
          v-if="index !== props.stepList.length - 1"
          class="dr_steps_wrap_line dr_steps_wrap_line_right"
        />
      </view>
      <view class="dr_steps_title">{{ item.title }}</view>
      <view class="dr_steps_desc">{{ item.desc }}</view>
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-steps">
import { withDefaults } from "vue";
import DrIcons from "../icons/index.vue";
import type { Iconprops } from "../icons/index.vue";
export interface StepListItem {
  title: string;
  desc: string;
  icon?: Iconprops;
}
export interface DrStepsProps {
  currentNode?: number;
  stepList: StepListItem[];
}
const props = withDefaults(defineProps<DrStepsProps>(), {
  currentNode: 0,
  stepList: () => [],
});
</script>
