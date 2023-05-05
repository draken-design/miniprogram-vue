import { createSSRApp } from "vue";
import App from "./App.vue";
import "@draken-design/mini-common/styles/dr-accordion.css";
import "@draken-design/mini-common/styles/dr-cell.css";
import "@draken-design/mini-common/styles/dr-drop-down.css";
import "@draken-design/mini-common/styles/dr-loading.css";
import "@draken-design/mini-common/styles/dr-media-preview.css";
import "@draken-design/mini-common/styles/dr-tag.css";
import "@draken-design/mini-common/styles/common/dr-icon.css";

import "./less/common/often-use.less";
import "./less/dr-noticebar.less";
import "./less/dr-progress.less";
import "./less/dr-tabs.less";
import "./less/dr-tag-filter.less";
import "./less/dr-basic-mask.less";
import "./less/dr-popup.less";
import "./less/dr-toast.less";
import "./less/dr-radio.less";
import "./less/dr-time-line.less";
import "./less/dr-date-picker.less";
import "./less/dr-switch.less";
import "./less/dr-check-box.less";
import "./a.css";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
