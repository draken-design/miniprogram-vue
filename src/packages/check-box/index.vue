<template>
  <view class="dr_check_box" @tap="click">
    <view
      :class="['dr_check_box_icon', { dr_check_box_icon_active: !isSelect }]"
      :style="{ borderColor: getColor }"
    >
      <dr-icons
        v-if="isSelect"
        name="checkbox-circle-line"
        :color="getColor"
        :size="22"
      />
    </view>
    <view
      class="dr_check_box_right"
      :style="{ color: isDisabled ? getColor : '' }"
    >
      <slot />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-check-box">
import { ref, computed, inject } from "vue";
import DrIcons from "../icons/index.vue";
import type {
  DrCheckBoxGroupParent,
  DrCheckBoxGroupProps,
} from "../check-box-group/index.vue";
export interface DrCheckBoxProps {
  value: any;
  color?: string;
  disabled?: boolean;
}
const props = withDefaults(defineProps<DrCheckBoxProps>(), {
  color: "#3370ff",
});
const emits = defineEmits(["change"]);
const val = ref<boolean>(props.value as boolean);
const parent = inject<DrCheckBoxGroupParent>("drCheckboxGroup", {
  existParent: false,
  props: {} as DrCheckBoxGroupProps,
  change: () => {},
});
const isSelect = computed(() => {
  if (parent.existParent) {
    return parent.props.value.includes(val.value);
  }
  return val.value;
});
const isDisabled = computed(() => {
  return (parent.existParent && parent.props.disabled) || props.disabled;
});
const getColor = computed(() => {
  if (isDisabled.value) return "#bbbfc4";
  return props.color;
});
const click = () => {
  if (isDisabled.value) return;
  if (parent.existParent) {
    parent.change(props.value);
  } else {
    val.value = !val.value;
    emits("change", val.value);
  }
};
</script>
