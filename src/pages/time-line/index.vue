<template>
  <view class="padding">
    <dr-time-line
      :items="[
        {
          title: '第一次',
          desc: '第一次',
          icon: {
            name: 'help',
            size: 16,
          },
        },
        {
          title: '第2次',
          desc: '第2次',
          icon: {
            name: 'help',
            size: 16,
          },
        },
        {
          title: '第3次',
          desc: '第3次',
          color: '#f54a45',
        },
      ]"
    />
  </view>
</template>
<script setup lang="ts">
import DrTimeLine from "../../packages/time-line/index.vue";
</script>
