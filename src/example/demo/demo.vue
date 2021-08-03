<template>
<div>
   <iframe id="demoIframeID" name="demoIframeID" src="/tinymce/index.html" frameborder="0" scrolling="no" width="100%" :height="iframeHight"></iframe>
</div>
</template>

<script>
export default {
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
      let frame =document.getElementById('demoIframeID')
       if(frame.contentWindow ){
          that.iframeHight = frame.contentWindow.document.body.scrollHeight
          clearInterval(timeID)
       }
    },1000)
           
    }
  }
}
</script>

<style>

</style>