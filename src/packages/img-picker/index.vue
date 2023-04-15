<template>
  <view id="drImgPicker" class="dr_img_picker" :style="{ gridTemplateColumns }">
    <view
      v-for="(item, index) in previewList"
      :key="index"
      :class="item.type !== 'space' && 'dr_img_item'"
      :style="`height: ${props.itemSize * 2}rpx`"
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
        :src="item.linkPath || item.tempPath"
        @tap="previewImage(item)"
      />
      <dr-icons
        v-if="item.type === 'image' && props.showAddBtn"
        name="clear_circle"
        class="dr_img_picker_del"
        color="#999"
        @tap="delImg(item.originIndex as number)"
      />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-img-picker">
import { withDefaults, computed, ref, watch } from "vue";
import DrIcons from "../icons/index.vue";
export interface ImageList {
  /**
   * @description 图片预览路径类型
   */
  type?: "add" | "space" | "image";
  /**
   * @description 本地临时路径
   */
  tempPath?: string;
  /**
   * @description 在线路径
   */
  linkPath?: string;
  /**
   * @description file 对象
   */
  file?: File;
  /**
   * @description 原数组索引对象
   */
  originIndex?: number;
}
export interface ImgPickerProps {
  /**
   * @description 是否显示添加按钮
   */
  showAddBtn?: boolean;
  /**
   * @description 预览的图片宽度 默认100
   */
  itemSize?: number;
  /**
   * @description 一排几个 默认3个 3-10 的范围
   */
  rows?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * @description 图片预览列表
   */
  imageList?: ImageList[];
  /**
   * @description 图片预览模式 详见小程序image组件预览模式
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
  showAddBtn: false,
  itemSize: 120,
  imageList: () => [],
  rows: 3,
  previewMode: "widthFix",
  layoutMode: "around",
});
/**
 * @description 计算所需视图
 */
const computeRender = (imageList: ImageList[]): ImageList[] => {
  let arr: ImageList[] = [{ type: "space" }];
  const columnsNum = props.rows * 2 + 1;
  if (props.showAddBtn) {
    arr.push({ type: "add" }, { type: "space" });
  }
  imageList.forEach((ele, index) => {
    arr.push({
      ...ele,
      type: "image",
      originIndex: index,
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
let tempImageList: ImageList[] = JSON.parse(JSON.stringify(props.imageList));
const previewList = ref<ImageList[]>(computeRender(tempImageList));
const emits = defineEmits(["onChange"]);
watch(
  () => props.imageList,
  (val) => {
    tempImageList = JSON.parse(JSON.stringify(val));
    previewList.value = computeRender(val);
  },
  {
    deep: true,
  }
);
/**
 * @description 计算表格占用空间
 */
const gridTemplateColumns = computed(() => {
  // let length = props.rows + (props.model === 'around' ? 0 : -1)
  let str = "";
  for (let index = 0; index < props.rows; index++) {
    str += `auto ${props.itemSize * 2}rpx `;
  }
  return str + "auto";
});
/**
 * @description 预览图片
 */
const previewImage = (item: ImageList) => {
  globalThis.wx.previewImage({
    current: item.tempPath || item.linkPath,
    urls: tempImageList.map((ele) => {
      return ele.tempPath || ele.linkPath;
    }),
  });
};
/**
 * @description 选择图片
 */
const choome = () => {
  globalThis.wx.chooseImage({
    success(res) {
      res.tempFiles.forEach((ele) => {
        tempImageList.unshift({
          tempPath: ele.path,
          file: ele,
        });
      });
      emits("onChange", tempImageList, res.tempFiles);
    },
    fail(err) {
      console.log(err);
    },
  });
};
/**
 * @description 删除图片
 */
const delImg = (index: number) => {
  tempImageList.splice(index, 1);
  emits("onChange", tempImageList, []);
};
</script>
