<template>
 <!-- <input type="button" @click="importantFn" value="928392893" /> -->
<div :class="tinymce_loading" :style="{ width: tinymce_width, 'min-height': tinymce_height}">
    <div class="tinymceVue">
      <div :id="tinymceID"></div>
   </div>
   <div class="tinymce_loading"></div>
</div>
</template>

<script>

// import '../../assets/lib/tinymce-vue/plugins/tp-lineheight/plugin'
const defaultOpt =JSON.stringify({
                base_url:'/tinymce',
                branding: false,
                language:'zh_CN',
                menubar: false,
                schema: 'html5',
                plugins: 'tp code hr',
                table_default_attributes: {
                    'border': '1'
                },
                table_default_styles: {
                    'border-collapse': 'collapse',
                    'width': '100%'
                },
                table_header_type: 'sectionCells',
                table_responsive_width: true,
                file_picker_types: 'file img media',
                fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
})
export default {
    name: 'TinymceVue',
    props:{
      modelValue: {
          type: [String,Number],
          default: 'dsd'
      },
      options:{
         type: Object,
         default: {}
      },
    },
    emits:['update:modelValue'],
    data(){
        return {
          tinymceID: 'tinymce-'+ new Date().getTime()+Math.floor(Math.random()*10)+Math.floor(Math.random()*10),
          tinymceTimerID: null,
          tinymce_width: '100%',
          tinymce_height: 400,
          tinymce_loading: 'loading',
          editorFn: ''
        }
    },
    computed: {
        value: {
        get() {
            return this.modelValue
        },
        set(value) { 
            this.$emit('update:modelValue', value)
        }
    }
  },
  created(){
      setTimeout(()=>{
       if(typeof tinymce === "undefined"){ 
           clearInterval(this.tinymceTimerID)
           throw new Error('tinymce undefined');
        }
      },3000)
     this.tinymceTimerID = setInterval(()=>{
          if(typeof tinymce !== "undefined"){
            this.init()
            clearInterval(this.tinymceTimerID)
          }
     },1000)

  },
  methods: {
       importantFn(){
            this.editor.execCommand('mceImportword')
      },
      xhrOnProgress(fun) {
          this.xhrOnProgress.onprogress = fun;
          return function () {
              var xhr = this.createXHR();
              if (typeof xhrOnProgress.onprogress !== 'function')
                  return xhr;
              if (xhrOnProgress.onprogress && xhr.upload) {
                  xhr.upload.onprogress = xhrOnProgress.onprogress;
              }
              return xhr;
          }
        },
       createXHR(){
          if(window.XMLHttpRequest) {
           return new XMLHttpRequest(); //要是支持XMLHttpRequest的则采用XMLHttpRequest生成对象
          }
          else if(window.ActiveXobiect){ //要是支持win的ActiveXobiect则采用ActiveXobiect生成对象。
           return new ActiveXobiect('Microsoft.XMLHTTP');
          }
         return '';
        },
        init(){
          let that = this
         let defaultOptions = JSON.parse(defaultOpt)
          defaultOptions.selector = '#' + that.tinymceID;
          defaultOptions.setup =  (editor)=> {
                  that.editorFn = editor
                  editor.on('init', ()=>{
                        // console.log('init', this.content);
                        // editor.on('keyup input', e=>{ //只在编辑器中打字才会触发
                        //         console.log(editor)
                        // }) 
                        setTimeout(()=>{
                         that.tinymce_loading = '';
                      
                        },200)
                         editor.setTpContent(that.value)
                        tinymce.activeEditor.setProgressState(false,50); 
                 
                       
                    });
                    editor.on('setContent', (e)=>{
                        let _Interval = setInterval(()=>{
                        if(typeof editor.getTpContent === "function"){
                            clearInterval(_Interval)
                                that.$emit('update:modelValue',editor.getTpContent());
                            }
                        },200)
                    })
                    editor.on('input  focus focusin click focusout drop ObjectResized keydown paste ExecCommand ObjectSelected', ()=>{
                        that.$emit('update:modelValue',editor.getTpContent());
                    })
                }
             Object.assign(defaultOptions, this.options || {})
             that.tinymce_height = defaultOptions.min_height
            tinymce.init(defaultOptions)
        }
  }
}
</script>
<style scoped>
 .loading{
    position: relative;
 }
 .tinymce_loading{
     position:absolute;
     top: 0;
     left: 0;
     background: rgba(0,0,0,0.6);
     z-index: 99999;
     opacity: 0;
     pointer-events: none;
     /* transition: all 0.3s; */
     width: 100%;
     height: 100%;
 }
 .loading .tinymce_loading{
     opacity: 1;
 }
</style>
