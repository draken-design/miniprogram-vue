<template>
  <view :class="['dr_loading', { dr_loading_full: full }]">
    <view class="dr_loading_content">
      <view v-if="!full" :style="{ opacity: loading ? props.opacity : 1 }"><slot /></view>
      <view v-else-if="tips" class="loading_tips">{{ tips }}</view>
      <view
        v-if="props.loading"
        class="loading"
        :style="{
          width: size,
          height: size,
          ...position,
        }"
      />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-loading">
import { computed, withDefaults } from 'vue';
export interface LoadingProps {
  loading?: boolean;
  full?: boolean;
  tips?: string;
  size?: number;
  opacity?: number;
}
const props = withDefaults(defineProps<LoadingProps>(), {
  tips: '',
  full: false,
  size: 30,
  loading: true,
  opacity: 0.5,
});
const size = computed(() => props.size + 'px');
const position = computed(() => {
  const px = `calc(50% - ${props.size / 2}px)`;
  if (props.full) {
    return {
      left: px,
      top: '-110%',
    };
  }
  return {
    left: px,
    top: px,
  };
});
// const isFull = ref<boolean>(false)
// const slots = useSlots()
// console.log(slots, 's')
// if (slots && slots.default) {
//   if ((slots.default().length < 0)) {
//   }
//   console.log(slots.default().length)
// }
// if (!slots) {
//   isFull.value = true
//   console.log('全屏loading')
// }
</script>
