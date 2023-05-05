<template>
  <view
    :class="['dr_radio', { dr_radio_disabled: isDisabled }]"
    :style="{ flexDirection: isLabelRight ? 'row' : 'row-reverse' }"
    @tap="click"
  >
    <view
      :class="[
        'dr_radio_icon',
        { dr_radio_icon_active: isSelect },
        { dr_radio_icon_disabled: isDisabled },
      ]"
      :style="{ alignSelf: props.align }"
    />
    <view
      class="dr_radio_right"
      :style="{
        flex: isLabelRight ? 'auto' : 1,
        marginLeft: isLabelRight ? 12 : 0,
      }"
    >
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-radio">
import { ref, inject, computed } from "vue";
import type {
  DrRadioGroupProps,
  DrRadioGroupParent,
} from "../radio-group/index.vue";
export interface DrRadioProps {
  /**
   * @description 值
   */
  value: string | boolean;
  /**
   * @description 是否禁止
   */
  disabled?: boolean;
  /**
   * @description 图标位置
   */
  align?: "center" | "flex-start";
  /**
   * @description 文本位置
   */
  labelPosition?: "left" | "right";
}
const props = withDefaults(defineProps<DrRadioProps>(), {
  align: "flex-start",
  disabled: false,
  labelPosition: "right",
});
const emits = defineEmits(["onChange"]);
const parent = inject<DrRadioGroupParent>("drRadioGroup", {
  existParent: false,
  props: {} as DrRadioGroupProps,
  change: () => {},
});
const val = ref<boolean>(props.value as boolean);
const isSelect = computed(() => {
  if (parent.existParent) {
    return parent.props.value === props.value;
  }
  return val.value;
});
const isDisabled = computed(() => {
  return (parent.existParent && parent.props.disabled) || props.disabled;
});
const isLabelRight = computed(() => {
  return props.labelPosition === "right";
});
const click = () => {
  if (isDisabled.value) return;
  if (parent.existParent) {
    if (props.value !== parent.props.value) parent.change(props.value);
  } else {
    val.value = !val.value;
    emits("onChange", val.value);
  }
};
</script>
