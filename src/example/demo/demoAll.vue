<template>
<div>
   <iframe id="demoIframeID" name="demoIframeID" src="/tinymce/indexall.html" frameborder="0" scrolling="no" width="100%" :height="iframeHight"></iframe>
</div>
</template>

<script>
export default {
  name: 'DemoAllIframe',
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
      let frame =document.getElementById('demoIframeID')
       if(frame.contentWindow){
          that.iframeHight = frame.contentWindow.document.body.scrollHeight
          clearInterval(timeID)
       }
    },1800)
           
    }
  }
}
</script>

<style>

</style>