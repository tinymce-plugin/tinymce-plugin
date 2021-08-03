<template>
<div class="sidebar-Box">
   <search-box/>
   <ul class="sidebar-ul">
      <li v-for="(item, index) in sidebarList" :key="index" class="sidebar-li">
           <div v-if="item.children">
              <router-link :to="item.path" class="sidebar-title">{{ item.meta ? item.meta.title : item.name }}</router-link>
               <ul class="sidebar-cUl" >
                   <li v-for="( cItem, cIndex ) in item.children" :key="cIndex" class="sidebar-cLi" >
                       <router-link :to="item.path +'/'+ cItem.path" class="sidebar-cTitle"> {{ cItem.meta ? cItem.meta.title : cItem.name }} </router-link>
                   </li>
               </ul>
           </div>
           <router-link class="sidebar-title" v-else :to='item.path'>{{ item.meta ? item.meta.title : item.name }}</router-link>
      </li>
   </ul>
</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import {routes} from "../../router/index"
import SearchBox from "../Search/SearchBox.vue";
export default defineComponent({
  components: { SearchBox },
     name:'Sidebar',
     data(){
        return {
            sidebarList:[]
        }
     },
     created(){
         console.log(routes);
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
}
</style>