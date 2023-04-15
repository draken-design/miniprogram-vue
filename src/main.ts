import { createSSRApp } from "vue";
import App from "./App.vue";
import "@draken-design/mini-common/styles/index.dist.css";
import "./less/dr-drop-down.less";
import "./less/dr-img-picker.less";
import "./less/dr-steps.less";
import "./less/dr-accordion.less";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
