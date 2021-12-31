import { createApp } from 'vue'
import App from './App.vue'
import { router, _$routes ,_$pages}from "./router";
import Preview from "./views/Preview/Preview.vue";
import PreviewVue2 from "./views/Preview/PreviewVue2.vue";
import PreviewReact from "./views/Preview/PreviewReact.vue";
import PagesRouter from "./views/PagesRouter/PagesRouter.vue"
import Proprties from './proprties'
// const Vue2  = (window as any).Vue2 
// Vue2.config.productionTip = false
// var vm2 = new Vue2({ el:'#appVue2' });
// (window as any).vue2 = vm2



const app = createApp(App);
app.component("Preview", Preview);
app.component("PreviewVue2", PreviewVue2);
app.component("PreviewReact", PreviewReact);
app.component("PagesRouter", PagesRouter);
app.use(router).use(Proprties,{routes: _$routes, pages: _$pages }).mount("#app");
