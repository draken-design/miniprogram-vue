import { defineConfig, Plugin } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
function transformVBind(): Plugin {
  const a = new RegExp("/tag/index.vue");
  const c = new RegExp("/tag/");
  const b = new RegExp("&name=tag&lang.ts");
  return {
    name: "transform-v-binds",
    enforce: "pre",
    config(config, env) {
      console.log(config.plugins ? config.plugins[1] : 0);
    },

    transform(code, id) {
      if (c.test(id)) {
        let str = code;
        // while (/v\-bind=("|')([\s\S]+)("|')/g.test(str)) {
        //   const match = code.match(/v\-bind=("|')([\s\S]+)("|')/)
        //   match?.index
        //   str = match? match[2] || ''
        // }
        // if (code.match(/v\-bind=("|')([\s\S]+)("|')/)) console.log('id', id)
        // console.log('code', code)
      }
    },
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
});
