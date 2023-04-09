<template>
  <view
    :class="['dr_popup', visible ? 'dr_popup_show' : 'dr_popup_hide']"
    :style="{ zIndex: nextZIndex }"
  >
    <view
      class="dr_popup_top"
      @tap="props.maskCancel && emits('onCancel')"
    ></view>
    <view class="dr_content_height" :style="contentStyle">
      <view v-if="props.title" class="dr_popup_title" :style="props.titleStyle">
        {{ props.title }}
        <svg
          class="dr_popup_img"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.45219 5.73217L13.0501 0.134246C13.2128 -0.0284726 13.4767 -0.0284726 13.6394 0.134246L14.2286 0.723502C14.3913 0.88622 14.3913 1.15004 14.2286 1.31276L8.6307 6.91069L14.2286 12.5086C14.3913 12.6713 14.3913 12.9352 14.2286 13.0979L13.6394 13.6871C13.4767 13.8498 13.2128 13.8498 13.0501 13.6871L7.45219 8.0892L1.85426 13.6871C1.69154 13.8498 1.42772 13.8498 1.26501 13.6871L0.67575 13.0979C0.513031 12.9352 0.513031 12.6713 0.67575 12.5086L6.27368 6.91069L0.67575 1.31276C0.513031 1.15004 0.513031 0.88622 0.67575 0.723502L1.26501 0.134246C1.42772 -0.0284726 1.69154 -0.0284726 1.85426 0.134246L7.45219 5.73217Z"
            fill="#646A73"
          />
        </svg>
      </view>
      <view v-else-if="slots.header" class="dr_content_header">
        <slot name="header"></slot>
      </view>
      <view
        class="dr_content_scorll"
        :style="{ height: computedContentHeight }"
      >
        <slot></slot>
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
export interface popupProps {
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
const nextZIndex = useZIndex()();
const props = withDefaults(defineProps<popupProps>(), {
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
