<template>
  <view class="dr_drop_down">
    <view class="dr_drop_popup" :style="`height：${selectIndex === -1 ? 'auth' : '100vh'}`"></view>
  </view>
</template>
<script setup lang="ts" name="dr-drop-down">
import { withDefaults, ref, computed } from 'vue';
interface DropDownOption {
  key: string;
  name: string;
}
interface DrDropDownProps {
  /**
   * @description 点中颜色
   */
  activeColor?: string;
  /**
   * @description 默认选中
   */
  defaultValue?: string[];
  /**
   * @description 配置列表
   */
  optionList: DropDownOption[];
}
const props = withDefaults(defineProps<DrDropDownProps>(), {
  activeColor: '',
  defaultValue: () => [],
});
const selectIndex = ref<number>(-1);
</script>
