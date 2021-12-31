<template>
  <div class="preview vue2 demo-block">
    <div class="preview__card">
      <div class="preview__demo source">
        <div :id="demoID" ></div>
        <!-- <div><slot name="demo1" ></slot></div> -->
        <!-- <div><slot name="demo" ></slot></div> -->
      </div>
      <div :style='{height: `${state.codeHeight}px`}' class="preview__code meta">
        <div ref='codeRef' class="preview__coderef">
            <div v-if="slotDescription" class="preview__description description">
                <slot name="description" ></slot>
            </div>
           <div class="preview__coder highlight" v-html= 'source'></div>
        </div>
      </div>
      <div class="preview__footer demo-block-control"   @click.stop='toggleCode'>
        {{ state.codeHeight > 0 ? "隐藏代码" : "显示代码" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import tinymce from "/@/assets/lib/tinymce-vue/tinymce";
import tp$ from "/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";  
// import TinymceVue from "/@/example/vueDemo/Tinymce-vue2.vue";
import {
    reactive,
    ref,
    defineComponent,
    onMounted,
    nextTick,
    createApp
  } from "vue"

  export default defineComponent( {
    name: "PreviewVue2",
    props: {
      source: {
        type: String,
        default: ""
      },
      template:{
        type: String,
        default: ''
      },
      demoID:{
        type: String,
        default: 'demoVue2'+new Date().getTime()+Math.round(Math.random()*10)
      }
    },
    created(){
    this.init()
    },
    methods:{
      init(){
      let TinymceVue =  this.$Vue2.component('TinymceVue',{
          props:{
            value: {
                type: [String,Number],
                default: 'dsd'
            },
            show:{
              type: Boolean,
              default: false
            },
            options:{
              type: Object,
              default: {}
            },
          },
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
         created(){
          const defaultOpt =
     
        setTimeout(()=>{
          if(typeof tinymce === "undefined"){ 
              clearInterval(this.tinymceTimerID)
              throw new Error('tinymce undefined');
          }
        },3000)
        this.tinymceTimerID = setInterval(()=>{
            if(typeof tinymce !== "undefined"&&tinymce.tinymcePlugin){
              
              this.init(JSON.stringify({
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
            }))
              clearInterval(this.tinymceTimerID)
            }
        },200)

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
        init(defaultOpt){
          let that = this
         let defaultOptions = JSON.parse(defaultOpt)
          defaultOptions.selector = '#' + that.tinymceID;
          defaultOptions.setup =  (editor)=> {
                  that.editorFn = editor
                  editor.on('init', ()=>{
                        setTimeout(()=>{
                         that.tinymce_loading = '';
                        
                        },200)
                         editor.setTpContent(that.value)
                        tinymce.activeEditor.setProgressState(false,50); 
                       
                    });
                  editor.on('input NodeChange', ()=>{
                     that.$emit('input',editor.getTpContent());
                  })
                }
             Object.assign(defaultOptions, this.options || {})
             that.tinymce_height = defaultOptions.min_height
            tinymce.init(defaultOptions)
        }
  },
          template: ` <div>
                    <div :class="tinymce_loading" :style="{ width: tinymce_width, 'min-height': tinymce_height}">
                        <div class="tinymceVue">
                        <div :id="tinymceID"></div>
                    </div>
                    <div class="tinymce_loading"></div>
                    </div>
                </div>
                `
        })
       let sourceCode = this.$parent.sourceCode()
       sourceCode.components['TinymceVue'] = TinymceVue
       let Vue2Demo = new this.$Vue2({
          template: this.template,
          ...sourceCode
        })
      
      // let  Vue2DemoTinner = setInterval(()=>{
      //   console.log(document.getElementById(this.demoID));
      //    if(document.getElementById(this.demoID)){
      //      clearInterval(Vue2DemoTinner)
       
      //    }
         
        
      //  },0)
    console.log();
    
      console.log(Vue2Demo);
      
       setTimeout(()=>{
          Vue2Demo.$mount('#'+this.demoID)
         },10)
      
     
  // console.log();
  
        // new Vue2Demo().$mount('#'+this.demoID) 
        // console.log()
      }
    },
    setup(props, {slots, attrs }) {
      const codeRef = ref<HTMLElement>()
      const demoVueRef = ref<HTMLElement>()
      const state = reactive({
        codeHeight: 0
      })
      // demoVueRef.value.innerHTML
      // console.log(slots);
      // console.log(Vue2);
      // const cVue2 = (window:any).Vue2
     
  //     new cVue2({render: function (createElement) {
  //   return createElement(
  //     'h' + this.level,   // 标签名称
  //     this.$slots.default // 子节点数组
  //   )
  // }})
      const slotDescription = slots.description ? true : false
      const toggleCode = () => {
        if (state.codeHeight === 0) {
          state.codeHeight = codeRef.value?.offsetHeight || 0
        } else {
          state.codeHeight = 0
        }
      }
      return {
        toggleCode,
        slots,
        state,
        codeRef,
        demoVueRef,
        slotDescription
      }
    }
  })

  
</script>

<style lang="scss" scoped>
.preview {
  text-align: left;
  &__description {
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
  }
  &__title {
    font-size: 18px;
    margin: 30px 0 20px 0;
  }
  &__card {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;

    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
  }
  &__demo {
    padding: 20px;
    background-color: #fff;
  }
  &__code {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    // transition: height 0.3s;
  }
  &__coderef {
    overflow: hidden;
    > pre {
      padding: 10px 0;
    }
  }
  &__coder {
    .language-markup {
      border: none;
      padding: 0 20px;
      font-size: 12px;
    }
  }
  &__comment {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px 10px 0 10px;
    background-color: #fff;
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }
  &__footer {
    font-size: 12px;
    border-top: 1px solid #eaeefb;
    height: 44px;
    line-height: 43px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    transition: color .3s,background-color .3s;
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }
  }
  .row-mb-20 {
    margin-bottom: 20px;
  }
  .ml-10 {
    margin-left: 10px;
  }
   .preview__coder ::v-deep(.hljs){
     border-radius: 0!important;
   }
}
</style>


