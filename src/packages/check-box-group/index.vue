<template>
  <view>
    <slot />
  </view>
</template>
<script setup lang="ts" name="dr-check-box-group">
import { provide } from "vue";
type A = Array<string | number | boolean>;
export interface DrCheckBoxGroupProps {
  value: A;
  disabled?: boolean;
}
export interface DrCheckBoxGroupParent {
  existParent: boolean;
  props: DrCheckBoxGroupProps;
  change: (val: string | number | boolean) => void;
}
const props = withDefaults(defineProps<DrCheckBoxGroupProps>(), {
  disabled: false,
});
const emits = defineEmits(["change"]);
const change = (val: string | number | boolean) => {
  const propVal = JSON.parse(JSON.stringify(props.value));
  let index = propVal.findIndex(
    (ele: string | number | boolean) => ele === val
  );
  index === -1 ? propVal.push(val) : propVal.splice(index, 1);
  emits("change", propVal);
};
provide<DrCheckBoxGroupParent>("drCheckboxGroup", {
  existParent: true,
  props,
  change,
});
</script>
