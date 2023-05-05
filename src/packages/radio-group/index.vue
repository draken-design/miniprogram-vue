<template>
  <view class="dr_radio_group">
    <slot />
  </view>
</template>

<script lang="ts" setup name="dr-radio-group">
import { provide } from "vue";
export interface DrRadioGroupProps {
  value: string | boolean;
  disabled?: boolean;
}
export interface DrRadioGroupParent {
  existParent: boolean;
  props: DrRadioGroupProps;
  change: (val: string | boolean) => void;
}
const props = withDefaults(defineProps<DrRadioGroupProps>(), {
  disabled: false,
});
const emits = defineEmits(["onChange"]);
const change = (val: string | boolean) => {
  emits("onChange", val);
};
provide<DrRadioGroupParent>("drRadioGroup", {
  existParent: true,
  props,
  change,
});
</script>
