import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuedcoPlugin } from "./build/plugins/doc/index";
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";
const pathResolve = (pathStr:string) => {
  return path.resolve(__dirname, pathStr);
};
// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=>{
  return {
    server: {
      host: '0.0.0.0',
      port: 8999,
      // 是否开启 https
      https: false,
    },
    resolve:{
      alias: {
        '/@docs/': pathResolve('../packages/'),
        vue: "vue/dist/vue.esm-bundler.js",
        '/@': pathResolve('src'),
      },
      extensions:[ '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json','.md']
    },
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
    },
    plugins: [
      createVuedcoPlugin({
        docsPath(root) {
          return path.join(root, "./packages/");
        },
        // command: command,
        mode: mode,
        root: path.join(__dirname)
        }),
      vue(),vueJsx()]
  }
  
})