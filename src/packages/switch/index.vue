<template>
  <view
    :class="[
      'dr_switch',
      {
        dr_switch_active: switchVal,
        dr_switch_disabled: props.disabled || loading,
      },
    ]"
    @tap="switchChange"
  >
    <view :class="['dr_switch_round', { dr_switch_round_loading: loading }]" />
  </view>
</template>
<script setup lang="ts" name="dr-switch">
import { ref, computed } from "vue";
export interface DrSwitchProps {
  value: boolean;
  disabled?: boolean;
  loading?: boolean;
}
const props = defineProps<DrSwitchProps>();
const emits = defineEmits(["change"]);
const switchVal = ref<boolean>(props.value);
const loading = computed(() => {
  console.log(props.loading);
  return props.loading;
});
const switchChange = () => {
  if (props.disabled) return;
  if (props.loading) return;
  switchVal.value = !switchVal.value;
  emits("change", switchVal.value);
};
</script>
