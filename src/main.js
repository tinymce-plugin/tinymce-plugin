import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Preview from "./views/Preview/Preview.vue";
import "./views/Preview/prism.css";
import "./views/Preview/prism.js";
window.Prism.plugins.NormalizeWhitespace.setDefaults({
    indent: 0,
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
    "remove-initial-line-feed": false,
    "tabs-to-spaces": 2,
});
const app = createApp(App);
app.component("Preview", Preview);
app.use(router).mount("#app");
