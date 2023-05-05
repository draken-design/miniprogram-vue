<template>
  <view>
    <dr-noticebar>
      <template #noticeIcon><dr-icons name="clear" /></template>
      [单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
    </dr-noticebar>
    <br />
    <dr-noticebar :show-more="true" :singleRow="false" :is-roll="true"
      ><template #noticeIcon><dr-icons name="clear" /></template>[多行]
      这是NoticeBar通告栏，阿森纳懂啊谁弄的耐温viu玩弄收到女哦爱上弄哦去女哦i微风i哦几哦奋斗前进哦iv我诶澳is京东i我v哦为i</dr-noticebar
    >
  </view>
</template>
<script setup lang="ts" name="dr-noticebar">
import DrNoticebar from "../../packages/noticebar/index.vue";
import DrIcons from "../../packages/icons/index.vue";
</script>
