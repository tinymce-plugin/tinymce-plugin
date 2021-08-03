import { RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router";
import {Component} from "vue"
const Plugins = {
  template: '<div class="plugins" ><router-view></router-view></div>',
}
const Examples = {
  template: '<div class="examples" ><router-view></router-view></div>',
}
// const Empty = defineComponent({
     
// })
// import axupimgs from "../../packages/axupimgs/axupimgs.md"
// import attachment from "../../packages/attachment/attachment.md"

const routes: RouteRecordRaw[] = [
    {
      path: "/",
      name: "introduction",
      component: (): Component => import("../markdown/introduction.md"),
      // component: (): Component => import("../../packages/alert/__docs__/alert.md"),
      meta: {
        title: '前言',
      },
    },
    {
      path: "/quickStart",
      name: "quickStart",
      component: (): Component => import("../markdown/quickStart.md"),
      // component: (): Component => import("../../packages/alert/__docs__/alert.md"),
      meta: {
        title: '快速上手',
      },
    },
    {
      path: "/plugins",
      name: "plugins",
      component: Plugins,
      meta: {
        title: '插件',
      },
      children:[{
        path: "axupimgs",
        name: "axupimgs",
        meta: {
          title: '多图上传',
        },
        component: (): Component => import("/@docs/axupimgs/__docs__/axupimgs.md")
      },{
        path: "attachment",
        name: "attachment",
        meta: {
          title: '附件上传',
        },
        component: (): Component => import("/@docs/attachment/__docs__/attachment.md")
      }
    ],
    },
    {
      path: "/examples",
      name: "Examples",
      component: Examples,
      meta: {
        title: '样例',
      },
      children:[{
        path: "demo",
        name: "demo",
        meta: {
          title: '插件Demo',
        },
        component: (): Component => import("../example/demo/demo.vue")
      },{
        path: "demoall",
        name: "demoall",
        meta: {
          title: '全部Demo',
        },
        component: (): Component => import("../example/demo/demoAll.vue")
      },{
        path: "vueDemo",
        name: "vueDemo",
        meta: {
          title: 'vueDemo',
        },
        component: (): Component => import("../example/vueDemo/index.vue")
      }
    ],
    }
  ];
  
  const router = createRouter({
    history: createWebHashHistory(''),
    routes,
  });
  
  export default router;
  export { routes };