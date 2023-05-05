<template>
  <dr-basic-mask :visible="props.visible">
    <view class="dr_toast" :style="toastPos">
      <view :class="['dr_toast_type', 'dr_toast_type_' + props.type]"></view>
      <view class="dr_toast_text"><slot /></view>
    </view>
  </dr-basic-mask>
</template>
<script setup lang="ts" name="dr-toast">
import { computed, watch } from "vue";
import DrBasicMask from "../basic-mask/index.vue";
export interface DrToastProps {
  /**
   * @description 显示文本
   */
  visible: boolean;
  /**
   * @description 显示时间
   */
  duration?: number;
  /**
   * @description toast 类型
   */
  type?: "default" | "success" | "error" | "loading";
  /**
   * @description toast 位置
   */
  position?: "top" | "middle" | "bottom";
  /**
   *
   */
  fill?: "auto" | "max-content";
}
const props = withDefaults(defineProps<DrToastProps>(), {
  duration: 1500,
  position: "bottom",
  type: "default",
  fill: "max-content",
});
let timer = null;
const emits = defineEmits(["update:visible"]);
watch(
  () => props.visible,
  (val) => {
    if (val && props.type !== "loading") {
      timer = setTimeout(() => {
        timer = null;
        emits("update:visible", false);
      }, props.duration);
    }
  }
);
const toastPos = computed(() => {
  if (props.position === "middle") {
    return {
      top: "50%",
      transform: "translateY(-50%)",
    };
  }
  return {
    [props.position]: "50px",
  };
});
</script>
