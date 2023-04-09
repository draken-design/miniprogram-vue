import { createSSRApp } from "vue";
import App from "./App.vue";
import "@draken-design/mini-common/styles/index.dist.css";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
