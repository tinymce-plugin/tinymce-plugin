
<template>
  <div class="pages-router">
      <div class="pages-prev" v-if="pagesPrev.path"> <router-link :to="pagesPrev.path"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-prev" data-v-01ae7502=""><path d="M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"></path></svg><span>{{(pagesPrev.meta ? pagesPrev.meta.title : pagesPrev.name)}}</span></router-link></div>
      <div class="pages-next" v-if="pagesNext.path" > <router-link :to="pagesNext.path"><span>{{(pagesNext.meta ? pagesNext.meta.title : pagesNext.name)}}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-next" data-v-01ae7502=""><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg></router-link></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "PagesRouter",
    props:{
        pagesName:{
            type: String ,
            default: ''
        }
    },
    data(){
     return {
        pagesNext:{
          
        },
        pagesPrev: {
        }
     }
    },
    mounted(){
        let pagesObj = this.tp$pages.pages;
        let _next = pagesObj[this.pagesName].pagesNext;
        let _prev = pagesObj[this.pagesName].pagesPrev;
        this.pagesNext = pagesObj[_next]
        this.pagesPrev= pagesObj[_prev]
    }
  })
</script>

<style lang="scss" scoped>
.pages-router{
    padding-top:20px;
    margin-top:30px;
    border-top: 2px solid $themeColor;
    max-width: 1300px;
    .pages-prev{
        float: left;
    }
    .pages-next{
        float: right;
    }
    .pages-prev ,.pages-next{
       
        a{
            svg{
              display: inline-block;
              width: 1em; 
              vertical-align: middle;
              fill: $themeBrightColor;
             }
            span{
              display: inline-block;
              vertical-align: middle;
               transition: all 0.3s;
            }
            font-size: 1.2em;
            height: 2em;
            line-height: 2em;
            color: $themeBrightColor;
            text-decoration: none;
           
            &:hover{
               span{
                   margin:0 10px;
               }  
            }
        }
    
    }
}
</style>


