import { createSSRApp } from "vue";
import App from "./App.vue";
import "@draken-design/mini-common/styles/index.dist.css";
import "./less/common/often-use.less";
import "./less/dr-noticebar.less";
import "./less/dr-progress.less";
import "./less/dr-tabs.less";
import "./less/dr-tag-filter.less";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
