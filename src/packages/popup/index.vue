<template>
  <dr-basic-mask :visible="props.visible">
    <view class="dr_popup">
      <view
        class="dr_popup_top"
        @tap="() => props.maskCancel && emits('onCancel')"
      />
      <view class="dr_content_height" :style="contentStyle">
        <view
          v-if="props.title"
          class="dr_popup_title"
          :style="props.titleStyle"
        >
          {{ props.title }}
          <dr-icons
            name="clear"
            class="dr_popup_icon"
            @tap="() => emits('onCancel')"
          />
        </view>
        <view v-else-if="slots.header" class="dr_content_header">
          <slot name="header" />
        </view>
        <view
          class="dr_content_scorll"
          :style="{ height: computedContentHeight }"
        >
          <slot />
        </view>
        <view v-if="props.footerOptions" class="dr_popup_footer">
          <button
            v-if="props.footerOptions.okText"
            :class="[
              'dr_popup_button',
              'dr_popup_ok',
              props.footerOptions.okClass,
            ]"
            @tap="emits('onConfirm')"
          >
            {{ props.footerOptions.okText }}
          </button>
          <button
            v-if="props.footerOptions.cancelText"
            :class="[
              'dr_popup_button',
              'dr_popup_cancel',
              props.footerOptions.cancelClass,
            ]"
            @tap="emits('onCancel')"
          >
            {{ props.footerOptions.cancelText }}
          </button>
        </view>
      </view>
    </view>
  </dr-basic-mask>
</template>

<script setup lang="ts" name="dr-popup">
import {
  withDefaults,
  computed,
  watch,
  ref,
  CSSProperties,
  useSlots,
} from "vue";
import DrIcons from "../icons/index.vue";
import DrBasicMask from "../basic-mask/index.vue";
import { useZIndex } from "../../hooks/use-z-index";
export interface FooterOptions {
  /**
   * @description 底部取消文字
   */
  cancelText?: string;
  cancelClass?: string;
  /**
   * @description 底部确认文字
   */
  okText: string;
  okClass?: string;
}
export interface DrPopupProps {
  /**
   * @description 控制显示隐藏
   */
  visible?: boolean;
  /**
   * @description 范围样式
   */
  contentStyle?: CSSProperties;
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 标题样式
   */
  titleStyle?: string;
  /**
   * @description 蒙层点击
   */
  maskCancel?: boolean;
  /**
   * @description buttons 配置
   */
  footerOptions?: FooterOptions;
}
const nextZIndex = useZIndex();
const props = withDefaults(defineProps<DrPopupProps>(), {
  visible: true,
  title: "",
  maskCancel: true,
  contentStyle() {
    return {
      height: "70vh",
    };
  },
});
const emits = defineEmits(["onCancel", "onConfirm"]);
const visible = ref<boolean>(props.visible);
watch(
  () => props.visible,
  (val) => {
    if (val) visible.value = true;
    else visible.value = false;
  }
);
const slots = useSlots();
const computedContentHeight = computed(() => {
  let height = 0;
  if (props.title || slots.header) {
    height = height + 52;
  }
  if (props.footerOptions) {
    height = height + 86;
  }
  return `calc(${props.contentStyle.height} - ${height}px)`;
});
</script>
