<template>
  <dr-steps :step-list="a" :current-node="currentNode"></dr-steps>
  <button @tap="setSteps('add')">步骤加</button>
  <button @tap="setSteps('del')">步骤减</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DrSteps, { StepListItem } from "../../packages/steps/index.vue";
const currentNode = ref(0);
const setSteps = (type: string) => {
  if (type === "add") {
    if (currentNode.value < 2) {
      currentNode.value++;
    }
  } else {
    if (currentNode.value > 0) {
      currentNode.value--;
    }
  }
};
const a = ref<StepListItem[]>([
  {
    title: "步骤一",
    desc: "步骤一描述",
    icon: {
      name: "checkbox-circle-line",
      size: 24,
    },
  },
  {
    title: "步骤二",
    desc: "步骤二描述",
  },
  {
    title: "步骤三",
    desc: "步骤三描述",
  },
]);
</script>

<style>
.name {
  font-size: 16px;
  font-weight: bold;
  margin: 20px;
}
.tags {
  margin-left: 10px;
}
.tag {
  margin-left: 10px;
}
</style>
