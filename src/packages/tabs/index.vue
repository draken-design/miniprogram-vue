<template>
  <scroll-view class="dr_tabs" :scroll-x="true">
    <view class="dr_tabs_nav">
      <view
        v-for="(item, index) in props.tabList"
        :key="item.key + index"
        :class="[
          'dr_tabs_item',
          { dr_tabs_item_roll: props.isRoll },
          { dr_tabs_item_line: val === item.key && props.isShowScrollbar },
        ]"
        @tap="itemClick(item)"
      >
        {{ item.title }}
      </view>
    </view>
  </scroll-view>
</template>
<script setup lang="ts" name="dr-tabs">
import { withDefaults, ref } from "vue";
export interface DrTabList {
  title: string;
  key: string;
}
export interface DrTabsProps {
  /**
   * @description tab 列表
   */
  tabList: DrTabList[];
  /**
   * @description 默认选中
   */
  defaultVal?: string;
  /**
   * @description 是否滚动
   */
  isRoll?: boolean;
  /**
   * @description 是否显示下面的线
   */
  isShowScrollbar?: boolean;
}
const props = withDefaults(defineProps<DrTabsProps>(), {
  isShowScrollbar: true,
  isRoll: false,
});
const val = ref<string>(props.defaultVal || props.tabList[0].key);
const emits = defineEmits(["itemChange"]);
const itemClick = (item: DrTabList) => {
  val.value = item.key;
  emits("itemChange", item);
};
</script>
