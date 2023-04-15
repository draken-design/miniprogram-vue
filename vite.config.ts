import { defineConfig, Plugin } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
function rollupVueName(): Plugin {
  const Reg = /(&name=)(\S{1,})&/;
  const replaceReg = /__name:(\s)?('|")index('|"),/;
  return {
    name: "rollup-vue-name",
    load(id, options) {
      console.log(id);
    },
    // transform: (code, id) => {
    //   const regArr = id.match(Reg);
    //   if (id.includes("/packages/accordion/index.vue")) {
    //     console.log(id);
    //     console.log(code);
    //   }
    //   if (regArr && regArr[2]) {
    //     return {
    //       code: code.replace(replaceReg, `__name: '${regArr[2]}',`),
    //       map: { mappings: "" },
    //     };
    //   }
    // },
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
});
