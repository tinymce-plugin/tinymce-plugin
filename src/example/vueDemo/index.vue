<template>
<div>
    <h1>插件demo展示区域</h1>
    <div class="vueDemo">
      <tinymce-vue v-model="content" ></tinymce-vue>
    </div>
    <h1>展示显示</h1>
    <div v-html="content"></div>
</div>
</template>

<script>
import TinymceVue from "./Tinymce-vue.vue";
// import "webvite/lib/tp-lineheight"
export default{
  components: { TinymceVue },
    name: 'vueDemo',
    data(){
        return {
           content: 'dsdsdsdsd'
        }
    },
  created(){
      
  }
}
</script>
<style lang="scss" scoped>
 .vueDemo{
     padding-right: 5%;
 }
</style>
