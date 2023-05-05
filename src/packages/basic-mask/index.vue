<template>
  <view
    :class="[
      'dr_basic_mask',
      props.visible ? 'dr_basic_mask_show' : 'dr_basic_mask_hide',
    ]"
    :style="{ zIndex, backgroundColor: bgColor }"
  >
    <slot />
  </view>
</template>
<script setup lang="ts">
import { useZIndex } from "../../hooks/use-z-index";
export interface DrBasicMaskProps {
  visible: boolean;
  bgColor?: string;
}
const zIndex = useZIndex();
const props = withDefaults(defineProps<DrBasicMaskProps>(), {
  bgColor: "rgba(0, 0, 0, 0.5)",
});
</script>
