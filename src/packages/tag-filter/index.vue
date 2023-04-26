<template>
  <scroll-view :scroll-x="true">
    <view :class="props.column ? 'dr_tag_filter_column' : 'dr_tag_filter'">
      <view
        v-for="(item, index) in renderList"
        :class="[
          'dr_tag_filter_item',
          itemClass,
          { dr_tag_filter_item_active: item.isSelect },
          item.isSelect && props.itemActiveClass,
        ]"
        @tap="() => itemClick(index)"
      >
        {{ item.text }}
      </view>
    </view>
  </scroll-view>
</template>
<script setup lang="ts" name="dr-tag-filter">
import { ref } from "vue";
import { withDefaults } from "vue";
export interface TagList {
  key: string;
  text: string;
}
export interface TagFilterProps {
  /**
   * @description 标签数据数组
   */
  tagList: TagList[];
  /**
   * @description 标签列数，其中0为列数自适应，最多展示四列
   */
  column?: number;
  /**
   * @description 标签选中个数
   */
  selectNumber?: "all" | number;
  /**
   * @description 标签样式
   */
  itemClass?: string;
  /**
   * @description 选中标签class样式
   */
  itemActiveClass?: string;
  /**
   * @description 默认选中
   */
  defaultVal?: string[];
}
interface renderList extends TagList {
  isSelect?: boolean;
}
const props = withDefaults(defineProps<TagFilterProps>(), {
  selectNumber: 1,
  itemClass: "",
});
console.log(props);
const emits = defineEmits(["onChange"]);
const renderList = ref<renderList[]>(JSON.parse(JSON.stringify(props.tagList)));
let selectList: TagList[] = [];
const itemClick = (index: number) => {
  if (renderList.value[index].isSelect) {
    renderList.value[index].isSelect = false;
  } else if (
    props.selectNumber === "all" ||
    props.selectNumber > selectList.length
  ) {
    renderList.value[index].isSelect = true;
  } else return;
  selectList = [];
  renderList.value.forEach((ele) => {
    ele.isSelect && selectList.push({ key: ele.key, text: ele.text });
  });
  emits("onChange", selectList);
};
</script>
