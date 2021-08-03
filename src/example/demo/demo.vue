<template>
<div>
   <iframe id="demoIframeID" name="demoIframeID" src="/tinymce/index.html" frameborder="0" scrolling="no" width="100%" :height="iframeHight"></iframe>
</div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'DemoIframe',
    data(){
    return {
       iframeHight: '300'
    }
  },
  created(){
    this.info()
   
  },
  methods:{
    info(){
      let that = this
    let timeID = setInterval(()=>{
       if(document.getElementById('demoIframeID').contentWindow){
          that.iframeHight = document.getElementById('demoIframeID').contentWindow.document.body.scrollHeight
          clearInterval(timeID)
       }
    },1000)
           
    }
  }
})
</script>

<style>

</style>