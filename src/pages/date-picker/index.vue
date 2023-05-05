<template>
  <button @tap="openDate">打开时间日期</button>
  <dr-date-picker
    :popup-props="popupProps"
    :mode="['year', 'month', 'date', 'hour', 'minute']"
    :date-select-range="[
      new Date().getTime() - 31536000000,
      new Date().getTime() + 31536000000,
    ]"
  ></dr-date-picker>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import DrDatePicker from "../../packages/date-picker/index.vue";
const popupProps = reactive({
  visible: false,
  contentStyle: { height: "300px" },
});
const openDate = () => {
  popupProps.visible = true;
};
</script>
