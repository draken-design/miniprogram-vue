<template>
  <view class="dr_accordion">
    <view class="dr_accordion_header" @tap="click">
      <view class="dr_accordion_header_title">
        {{ props.title }}
      </view>
      <dr-icons
        name="up_s"
        color="#ccc"
        :class="[{ dr_accordion_icon_rotate: guardVal() }, 'dr_accordion_icon']"
      />
    </view>
    <view
      class="dr_accordion_content"
      :style="`height: ${getVal() ? 'auto' : '0px'}`"
    >
      <view
        class="dr_accordion_guard"
        :style="`height: ${guardVal() ? '0px' : '100%'}`"
      />
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-accordion">
import { useState } from "../../hooks/use-state";
import DrIcons from "../../packages/icons/index.vue";
export interface DrAccordionProps {
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 是否默认打开
   */
  open?: boolean;
  /**
   * @description 描述
   */
  desc?: string;
}
const props = defineProps<DrAccordionProps>();
const [getVal, setVal] = useState<boolean>(props.open);
const [guardVal, setGuardVal] = useState<boolean>(props.open);
let temp = false;
const click = () => {
  if (temp) return;
  temp = true;
  setGuardVal(!guardVal());
  if (getVal()) {
    setTimeout(() => {
      temp = false;
      setVal(false);
    }, 500);
    return;
  }
  setVal(true);
  setTimeout(() => {
    temp = false;
  }, 500);
};
</script>
