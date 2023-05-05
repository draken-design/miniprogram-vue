<template>
  <dr-popup
    :visible="props.popupProps.visible"
    :contentStyle="props.popupProps.contentStyle"
    @on-cancel="() => emits('onCancel')"
  >
    <template #header>
      <view className="dr_date_picker_top">
        <view className="dr_picker_button" @tap="() => emits('onCancel')">
          取消
        </view>
        <view
          className="dr_picker_button dr_button_blue"
          @tap="() => emits('onConfrom')"
        >
          完成
        </view>
      </view>
    </template>
    <picker-view
      indicatorStyle="height: 50px;"
      style="width: 100%; height: 246px"
      :value="pickerIndex"
      @change="pickerChange"
    >
      <picker-view-column
        v-for="(item, index) in props.mode"
        :key="item + index"
      >
        <view
          v-for="ele in dateRender[item]"
          :key="ele"
          class="dr_date_picker_text"
        >
          {{ ele }}
        </view>
      </picker-view-column>
    </picker-view>
  </dr-popup>
</template>
<script setup lang="ts" name="dr-date-picker">
import DrPopup from "../popup/index.vue";
import type { DrPopupProps } from "../popup/index.vue";
import { isArray, isNumber, getDateMargin } from "../../utils";
import { reactive, ref } from "vue";
type DatePickerMode = "year" | "month" | "date" | "hour" | "minute";
export interface DrDatePickerProps {
  popupProps: DrPopupProps;
  /**
   * @description 时间选择器格式
   */
  mode?: DatePickerMode[];
  /**
   * @description 日期范围选择 [2022-10， 2023-10] 为number时 时间戳
   */
  dateSelectRange?: number[] | number;
  /**
   * @description 默认选中日期
   */
  defaultDate?: number;
}
const props = withDefaults<DrDatePickerProps, any>(
  defineProps<DrDatePickerProps>(),
  {
    mode: ["year", "month", "date", "hour", "minute"],
    dateSelectRange: new Date().getTime() + 31536000000,
    defaultDate: new Date().getTime(),
  }
);
const emits = defineEmits(["onCancel", "onConfrom"]);
const pickerIndex = ref<number[]>([]);
const defaultDateTime = props.defaultDate || 0;
let dateSelectRange: number[] = [];
if (isNumber(props.dateSelectRange)) {
  dateSelectRange.push(defaultDateTime);
  let method: "unshift" | "push" =
    props.dateSelectRange < defaultDateTime ? "unshift" : "push";
  dateSelectRange[method](props.dateSelectRange);
} else if (isArray(props.dateSelectRange)) {
  dateSelectRange = props.dateSelectRange;
} else {
  throw new Error("dateSelectRange 是数组或者number值");
}
const dateRender = reactive<Record<DatePickerMode, Array<number>>>({
  year: [],
  month: [],
  date: [],
  hour: [],
  minute: [],
});
enum DateEnum {
  year = "getFullYear",
  month = "getMonth",
  date = "getDate",
  hour = "getHours",
  minute = "getMinutes",
}
const computedDateRange = (time: number) => {
  const obj = getDateMargin(time, dateSelectRange, props.mode || []);
  let arr = [];
  const date = new Date(time);
  for (const key in obj) {
    const ele = key as DatePickerMode;
    dateRender[ele] = obj[ele];
    let current = date[DateEnum[ele]]();
    if (ele === "month") current = current + 1;
    const index = obj[ele].findIndex((item) => {
      return item === current;
    });
    arr.push(index);
  }
  pickerIndex.value = arr;
};

computedDateRange(defaultDateTime);
const pickerChange = (e: any) => {
  const [year, month, date, hour, minute] = e.detail.value;
  let currentTime = new Date(
    dateRender.year[year],
    month || 0,
    date ? date + 1 : 1,
    hour ? hour + 1 : 1,
    minute || 0
  ).getTime();
  if (currentTime <= dateSelectRange[0]) {
    currentTime = dateSelectRange[0];
  } else if (currentTime >= dateSelectRange[1]) {
    currentTime = dateSelectRange[1];
  }
  computedDateRange(currentTime);
};
</script>
