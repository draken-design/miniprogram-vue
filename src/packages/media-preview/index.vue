<template>
  <view class="dr_media_preview" :style="{ gridTemplateColumns }">
    <view
      v-for="(item, index) in renderList"
      :key="index"
      class="dr_media_item"
      :style="`height: ${itemHeight}`"
    >
      <image
        v-if="item.type === 'add'"
        mode="widthFix"
        src="https://img2.baidu.com/it/u=1233420926,747420744&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
        @tap="choome"
      >
      </image>
      <image
        v-else-if="item.type === 'image'"
        class="dr_media_item_img"
        mode="widthFix"
        src="https://img2.baidu.com/it/u=3608044123,2583872343&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
      />
    </view>
  </view>
</template>
<script setup lang="ts" name="dr-media-preview">
import { withDefaults, computed } from 'vue';
export interface MediaPreviewProps {
  /**
   * @description 是否显示添加按钮
   */
  isAddBtn?: boolean;
  /**
   * @description 预览的media宽度 默认50px
   */
  mediaItemSize?: number;
  /**
   * @description 一排几个 默认 5个
   */
  rows?: number;
  /**
   * @description 媒体预览列表
   */
  mediaList?: any[];
}
const props = withDefaults(defineProps<MediaPreviewProps>(), {
  isAddBtn: false,
  mediaItemSize: 70,
  mediaList: () => [],
  rows: 5,
});
const gridTemplateColumns = computed(() => {
  let str = '';
  for (let index = 0; index < props.rows - 1; index++) {
    str += `${props.mediaItemSize}px auto `;
  }
  return str + props.mediaItemSize + 'px';
});
const renderList = computed<any[]>(() => {
  let arr: any[] = [];
  if (props.isAddBtn) arr.push({ type: 'add' }, { type: 'space' });
  const columnsNum = props.rows * 2 - 1;
  for (let i = 0; i < props.mediaList.length; i++) {
    const ele = props.mediaList[i];
    arr.push(ele);
    if (!(arr.length % columnsNum) && i > 0) continue;
    arr.push({ type: 'space' });
  }
  return arr;
});
const itemHeight = computed(() => {
  return props.mediaItemSize + 'px';
});
const choome = () => {
  globalThis.wx.chooseMedia({
    success: (res) => {
      console.log(res.tempFiles);
    },
  });
  // globalThis.wx.chooseImage({
  //   success(res) {
  //     console.log(res);
  //   },
  //   fail(err) {
  //     console.log(err);
  //   },
  // });
};
</script>
