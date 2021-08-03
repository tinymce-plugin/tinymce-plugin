import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuedcoPlugin } from "./build/plugins/doc/index";
import path from "path";
import Markdown from 'vite-plugin-md'
const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};
const config: UserConfig = {
  alias: {
    "/@/": pathResolve("./examples/src"),
    vue: "vue/dist/vue.esm-bundler.js",
  },
  plugins: [
    createVuedcoPlugin({
      docsPath(root: string) {
        return path.join(root, "./packages/");
      },
      root: path.join(__dirname)
    }),
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` 
         $fontColor: #333;
         $themeColor: #35495E;
         $themeBrightColor: #43B984;
         `
      }
    }
  }
};
module.exports = config;