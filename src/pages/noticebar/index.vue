<template>
  <view>
    <dr-noticebar>
      <template #noticeIcon><dr-icons name="clear" /></template>
      [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
    </dr-noticebar>
    <br />
    <dr-noticebar :show-more="true" :singleRow="false" :is-roll="true"
      ><template #noticeIcon><dr-icons name="clear" /></template>[多行]
      这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[多行]
      这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[多行]
      这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</dr-noticebar
    >
  </view>
</template>
<script setup lang="ts" name="dr-noticebar">
import DrNoticebar from "../../packages/noticebar/index.vue";
import DrIcons from "../../packages/icons/index.vue";
</script>
