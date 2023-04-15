<template>
  <view id="drDropDown" class="dr_drop_down">
    <view
      class="dr_drop_down_model"
      :style="`height:${selectIndex > -1 ? drDropDownModelHeight : 'auto'}`"
    >
      <view class="dr_drop_down_content">
        <view class="dr_drop_down_val_option"
          ><view
            v-for="(item, index) in renderValList"
            :key="index"
            class="dr_drop_down_value"
            :style="{
              color: item.isActive ? getValueColor(index) : '',
            }"
            @tap="selectIndex = selectIndex === index ? -1 : index"
          >
            {{ item.name || "请选择" }}
            <dr-icons
              name="up_s"
              :class="[
                'dr_drop_down_arrow',
                { dr_drop_down_down: selectIndex === index },
              ]"
            /> </view
        ></view>
        <view class="dr_drop_down_option">
          <view
            v-for="(item, index) in props.optionList[selectIndex] || []"
            :key="item.key"
          >
            <dr-cell :title="item.name" @tap="optionClick(item, index)">
              <template #arrowIcon>
                <icon
                  size="16"
                  type="success_no_circle"
                  :color="getIconColor(item, index)"
                />
              </template>
            </dr-cell>
          </view>
        </view>
      </view>
      <view class="dr_drop_down_mosk" @tap="maskClick"></view>
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-drop-down">
import { withDefaults, ref, onMounted, getCurrentInstance } from "vue";
import DrIcons from "../icons/index.vue";
import DrCell from "../cell/index.vue";
export interface DrDropDownOption {
  key: string;
  name: string;
}
export interface DrDrDropDownProps {
  /**
   * @description 点中颜色
   */
  activeColor?: string | string[];
  /**
   * @description 默认选中
   */
  defaultValue?: string[];
  /**
   * @description 配置列表
   */
  optionList: DrDropDownOption[][];
}
interface Val extends DrDropDownOption {
  isActive: boolean;
}
const props = withDefaults(defineProps<DrDrDropDownProps>(), {
  activeColor: "",
  defaultValue: () => [],
});
const emits = defineEmits(["maskClick", "valueChange"]);
const selectIndex = ref<number>(-1);
const listIndex: number[] = [];
const drDropDownModelHeight = ref<string>("100vh");
const renderValList = ref<Val[]>(
  props.optionList.map((ele, idx) => {
    const key = props.defaultValue[idx];
    if (key) {
      const index = ele.findIndex((item) => item.key === key);
      if (index >= 0) {
        listIndex[idx] = index;
        return {
          ...ele[index],
          isActive: true,
        };
      }
    }
    listIndex[idx] = -1;
    return { name: "", key: "", isActive: false };
  })
);
/**
 * @description 设置字体颜色
 */
const getValueColor = (idx: number): string => {
  if (typeof props.activeColor === "string") {
    return props.activeColor || "#169be8";
  }
  return props.activeColor[idx] || "#169be8";
};
/**
 * @description 得到icon颜色
 */
const getIconColor = (item: DrDropDownOption, index: number): string => {
  let color = getValueColor(index);
  const isSelect =
    item.key === renderValList.value[selectIndex.value].key &&
    renderValList.value[selectIndex.value].isActive;
  return isSelect ? color : "transparent";
};
/**
 * @description option点击事件
 */
const optionClick = (item: DrDropDownOption, index: number) => {
  let isActive = renderValList.value[selectIndex.value].isActive;
  if (listIndex[selectIndex.value] === index) {
    isActive = !isActive;
  } else {
    listIndex[selectIndex.value] = index;
    isActive = true;
  }
  const obj = {
    name: isActive ? item.name : "",
    key: isActive ? item.key : "",
    isActive,
  };
  renderValList.value[selectIndex.value] = obj;
  emits(
    "valueChange",
    renderValList.value.map((item) => {
      return item.isActive ? item.key : "";
    })
  );
};
/**
 * @description 遮罩层点击事件
 */
const maskClick = () => {
  selectIndex.value = -1;
  emits("maskClick");
};
onMounted(() => {
  globalThis.wx
    .createSelectorQuery()
    .in(getCurrentInstance())
    .select("#drDropDown")
    .boundingClientRect((rect: any) => {
      drDropDownModelHeight.value = `calc(100vh - ${rect.top}px)`;
    })
    .exec();
});
</script>
