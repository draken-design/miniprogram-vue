<template>
  <view
    :class="['dr_loading', { dr_loading_full: full }]"
    :style="{
      zIndex: props.loading ? nextZIndex : -10000,
    }"
  >
    <view class="dr_loading_content">
      <view
        v-if="!full"
        :style="{ opacity: props.loading ? props.opacity : 1 }"
      >
        <slot></slot>
      </view>
      <view
        v-else-if="props.tips"
        class="loading_tips"
        :style="{ opacity: props.loading ? 1 : 0 }"
        >{{ props.tips }}</view
      >
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
import { computed, withDefaults } from "vue";
import { useZIndex } from "../../hooks/use-z-index";
export interface LoadingProps {
  loading?: boolean;
  full?: boolean;
  tips?: string;
  size?: number;
  opacity?: number;
}
const nextZIndex = useZIndex()();
const props = withDefaults(defineProps<LoadingProps>(), {
  tips: "",
  full: false,
  size: 30,
  loading: true,
  opacity: 0.5,
});
const size = computed(() => props.size + "px");
const position = computed(() => {
  const px = `calc(50% - ${props.size / 2}px)`;
  if (props.full) {
    return {
      left: px,
      top: "-110%",
    };
  }
  return {
    left: px,
    top: px,
  };
});
</script>
<style></style>
