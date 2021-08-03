import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuedcoPlugin } from "./build/plugins/doc/index";
import path from "path";
const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr);
};
// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '/@docs/': pathResolve('../packages/'),
    vue: "vue/dist/vue.esm-bundler.js",
  },
  plugins: [ createVuedcoPlugin({
    docsPath(root) {
      return path.join(root, "./packages/");
    },
    root: path.join(__dirname)
    }),vue()
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
})
