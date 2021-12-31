import { createRouter, createWebHistory} from "vue-router";
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

const routes = [
    {
      path: "/",
      name: "introduction",
      component: () => import("../markdown/introduction.md"),
      // component: (): Component => import("../../packages/alert/__docs__/alert.md"),
      meta: {
        title: '前言',
      },
    },
    {
      path: "/quickStart",
      name: "quickStart",
      component: () => import("../markdown/quickStart.md"),
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
          pluginName: 'upimgs'

        },
        component: () => import("../../packages/axupimgs/__docs__/axupimgs.md")
      },{
        path: "attachment",
        name: "attachment",
        meta: {
          title: '附件上传',
          pluginName: 'attachment'
        },
        component: () => import("../../packages/attachment/__docs__/attachment.md")
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
        component: () => import("../example/demo/demo.vue")
      },{
        path: "demoall",
        name: "demoall",
        meta: {
          title: '全部Demo',
        },
        component: () => import("../example/demo/demoAll.vue")
      },{
        path: "vuedemo",
        name: "vuedemo",
        meta: {
          title: 'vueDemo',
        },
        component: () => import("../example/vueDemo/index.vue")
      },
      {
        path: "vuedemo2",
        name: "vuedemo2",
        meta: {
          title: 'vueDemo2',
        },
        component: () => import("../example/vueDemo/index2.vue")
      }
    ],
    }
  ];
 
  // writeFs('./router.js',routes)
 const _$routes =JSON.parse(JSON.stringify(routes))
var pagesObj:any = {"_pagesPrev": {}}
var pagesPrev = '_pagesPrev'
var routesList = _$routes
routesList.forEach((ele)=>{
 if(ele.children){
    ele.children.forEach((e)=>{
      e.path = ele.path + '/'+ e.path.replace('/','')
      pagesObj[pagesPrev]['pagesNext'] = e.name
      e.pagesPrev = pagesPrev
      pagesPrev = e.name
      pagesObj[e.name] = e
    })
 }else{
   pagesObj[pagesPrev]['pagesNext'] = ele.name
   ele.pagesPrev = pagesPrev
   pagesObj[ele.name] = ele
   pagesPrev = ele.name
 }
})
pagesObj[pagesPrev]['pagesNext'] = '_pagesPrev'
  const _$pages = pagesObj;
  const router = createRouter({
    history: createWebHistory(''),
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
        }
      }
    }
  });

  export default router;
  export { router,routes, _$routes, _$pages};