<template>
  <view class="dr_img_picker" :style="{ gridTemplateColumns }">
    <view
      v-for="(item, index) in previewList"
      :key="index"
      :class="item.type !== 'space' && 'dr_img_item'"
      :style="`height: ${props.mediaItemSize}px`"
    >
      <dr-icons
        name="iosplusempty"
        :size="50"
        v-if="item.type === 'add'"
        @tap="choome"
      />
      <image
        v-else-if="item.type === 'image'"
        class="dr_img_item_img"
        :mode="props.previewMode"
        :src="item.filePath || item.tempFilePath"
        @tap="previewImage(item)"
      />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-img-preview">
import { withDefaults, computed, ref } from "vue";
import DrIcons from "../icons/index.vue";
export interface ImageList {
  /**
   * @description 图片预览路径类型
   */
  type?: "add" | "space" | "image";
  /**
   * @description 本地临时路径
   */
  tempFilePath?: string;
  /**
   * @description 在线路径
   */
  filePath?: string;
}
export interface ImgPickerProps {
  /**
   * @description 是否显示添加按钮
   */
  isAddBtn?: boolean;
  /**
   * @description 预览的图片宽度 默认100
   */
  mediaItemSize?: number;
  /**
   * @description 一排几个 默认3个 3-10 的范围
   */
  rows?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * @description 图片预览列表
   */
  imageList?: ImageList[];
  /**
   * 图片预览模式 详见小程序image组件预览模式
   */
  previewMode?:
    | "scaleToFill"
    | "aspectFit"
    | "aspectFill"
    | "widthFix"
    | "top"
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right";
  /**
   * @description 排版模式 justify-content: space-between | space-around 两种 排版模式 默认around
   */
  layoutMode?: "around" | "between";
}
const props = withDefaults(defineProps<ImgPickerProps>(), {
  isAddBtn: false,
  mediaItemSize: 100,
  imageList: () => [],
  rows: 3,
  previewMode: "aspectFill",
  layoutMode: "around",
});
/**
 * @description 计算所需视图
 */
const computeRender = (): ImageList[] => {
  let arr: ImageList[] = [{ type: "space" }];
  const columnsNum = props.rows * 2 + 1;
  if (props.isAddBtn) {
    arr.push({ type: "add" }, { type: "space" });
  }
  props.imageList.forEach((ele) => {
    arr.push({
      ...ele,
      type: "image",
    });
    arr.push({ type: "space" });
    if (arr.length % columnsNum === 0) {
      arr.push({ type: "space" });
      return;
    }
  });
  // const columnsNum = props.rows * 2 - 1;
  // for (let i = 0; i < props.imageList.length; i++) {
  //   const ele = props.imageList[i];
  //   arr.push(ele);
  //   if (!(arr.length % columnsNum) && i > 0) continue;
  //   arr.push({ type: "space" });
  // }
  return arr;
};
const previewList = ref<ImageList[]>(computeRender());
/**
 * @description 计算表格占用空间
 */
const gridTemplateColumns = computed(() => {
  // let length = props.rows + (props.model === 'around' ? 0 : -1)
  let str = "";
  for (let index = 0; index < props.rows; index++) {
    str += `auto ${props.mediaItemSize}px `;
  }
  return str + "auto";
});
/**
 * @description 预览图片
 */
const previewImage = (item: ImageList) => {
  globalThis.wx.previewImage({
    current: item.tempFilePath || item.filePath,
    urls: props.imageList.map((ele) => {
      return ele.tempFilePath || ele.filePath;
    }),
  });
};
const choome = () => {
  globalThis.wx.chooseImage({
    success(res) {
      if (typeof res.tempFiles === "object") {
      }
    },
    fail(err) {
      console.log(err);
    },
  });
};
</script>
