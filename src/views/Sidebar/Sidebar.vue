<template>
<div class="sidebar-Box">
   <!-- <search-box/> -->
   <ul class="sidebar-ul">
      <li v-for="(item , index) in sidebarList" :key="index" class="sidebar-li">
           <div v-if="item.children && item.children.length>0">
              <router-link :to="item.path" class="sidebar-title">{{ item.meta ? item.meta.title : item.name }}</router-link>
               <ul class="sidebar-cUl">
                   <li v-for="( cItem, cIndex ) in item.children" :key="cIndex" class="sidebar-cLi" >
                       <router-link :to="item.path +'/'+ cItem.path" class="sidebar-cTitle"><span>{{ cItem.meta ? cItem.meta.title : cItem.name }}</span><em>{{ cItem.meta && cItem.meta.pluginName ? ' | '+cItem.meta.pluginName : '' }}</em> </router-link>
                   </li>
               </ul>
           </div>
           <router-link class="sidebar-title" v-else :to='item.path'>{{ item.meta ? item.meta.title : item.name }}</router-link>
      </li>
   </ul>
   <!-- <ul class="sidebar-bottom">
       <li><a href="https://github.com/tinymce-plugin"><em><img src="https://avatars.githubusercontent.com/u/87648636?s=200&v=4" width="25"></em><span>github仓库地址</span></a></li>
   </ul> -->
</div>
</template>

<script lang="ts">
import {routes} from "../../router/index"
import { defineComponent } from "vue";
// import SearchBox from "../Search/SearchBox.vue";
export default defineComponent({
//   components: { SearchBox },
     name:'Sidebar',
     data(){
        return {
            sidebarList: []
        }
     },
     created(){
        //  console.log(routes);
         this.sidebarList = routes
     }
})
</script>

<style lang="scss" scoped>
.sidebar-Box{
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    
    padding-top: 1px;
    ul.sidebar-ul{
      margin: 0;
      padding-left:15px;
      padding-right:15px;
      .sidebar-li{
          list-style: none;
          margin: 10px 0;
          .router-link-active{ color: $themeBrightColor!important;}
           .router-link-exact-active { text-shadow: 0 1px 2px $themeBrightColor; }
           .sidebar-cUl{
               padding-left:20px;
            .sidebar-cLi{
                margin: 8px 0;
                list-style: none;
                .sidebar-cTitle{
                    text-decoration: none;
                    color: $fontColor;
                    em{
                        font-size: 0.5em;
                    }
                }
            }
           }
         .sidebar-title { 
             text-decoration: none;
             font-size: 20px;
             letter-spacing: 2px;
             font-weight: bold;
             color: $fontColor;
            
         }
      }
    }
    ul.sidebar-bottom{
        padding-left: 15px;
        padding-top: 15px;
        border-top: 1px solid #eee;
        li{
            list-style: none;
            a{
             text-decoration: none;
             font-size: 20px;
             font-weight: bold;
             color: $fontColor;
             span,em{
                 display: inline-block;
                 vertical-align: middle;
                 height: 100%;
             }
             em{
                 font-size: 0;
             }
             
            }
        }
    }
}
</style>