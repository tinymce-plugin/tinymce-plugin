<template>
<div>
    <div class="tinymceVue">
      <div :id="tinymceID"></div>
   </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import tinymce from "../../assets/lib/tinymce-vue/tinymce";
// import '../../assets/lib/tinymce-vue/plugins/tp-lineheight/plugin'
export default defineComponent({
    name: 'TinymceVue',
    props:{
      modelValue: {
          type: [String,Number],
          default: 'dsd'
          },
     tinymcePlugins: {
         type : String,
         default: 'print preview extendgroups clearhtml searchreplace insertdatetime autolink layout fullscreen line-height tp-lineheight image upfile link media autosave code  table  advlist lists  emoticons autosave bdmap indent2em   axupimgs  letterspacing imagetools quickbars attachment wordcount  autoresize importword'
     },
      tinymceToolbar: {
        type: [String, Array],
        default:()=>['|code formatselect fontselect  fontsizeselect   forecolor backcolor bold italic underline strikethrough link alignment alignmentdrop undo redo  restoredraft| ','layout upfile importword lineheight letterspacing line-height indent2em table image imagetools emoticons mygroups preview tp-lineheight']
      }
    },
    emits:['update:modelValue'],
    data(){
        return {
          tinymceID: 'tinymce-'+ new Date().getTime(),
        }
    },
    computed: {
        value: {
        get():any {
            return this.modelValue
        },
        set(value: any) { 
            this.$emit('update:modelValue', value)
        }
    }
  },
  created(){
      setTimeout(()=>{
       this.init()
       if(typeof tinymce === "undefined") throw new Error('tinymce undefined');
      },1000)
    
     
  },
  methods: {
        init(){
            let options = {
                selector: '#' + this.tinymceID,
                base_url:'./tinymce',
                 toolbar_groups: {
                        formatting: {
                            text: '文字格式',
                            tooltip: 'Formatting',
                            items: 'bold italic underline | superscript subscript',
                        },
                        alignment: {
                            icon: 'align-left',
                            tooltip: 'alignment',
                            items: 'alignleft aligncenter alignright alignjustify',
                        }
                 },
                 extend_groups_addicon:{
                    mygroupsicon: '<img  src="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" style="width:20px;" >'
                 },
                extend_groups: {
                    mygroups: {
                        icon: 'mygroupsicon',
                        tooltip: 'mygroupsicon',
                        isSelect: true,
                        type: 'togglemenuitem',
                        items: [
                          {
                            type: 'selectItem',
                            text: '字体',
                            value: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                            default: '16px',
                            styleSelector: 'font-size',
                            onAction: function(editor:any, value:any){
                               editor.formatter.apply('fontsize', { value: value });
                            }
                          },
                          {
                            icon: 'underline',
                            text: '下划线',
                            value: 'underline',
                            styleSelector: 'text-decoration'
                          },
                          {
                            icon: 'bold',
                            text: '加粗',
                            value: 'bold',
                            selector: 'strong'
                          },
                          {
                            icon: 'italic',
                            text: '斜体',
                            value: 'italic',
                            selector: 'em'
                          },
                          ]
                          
                    }
                },
                plugins: this.tinymcePlugins,
                toolbar: this.tinymceToolbar,
                branding: false,
                language:'zh_CN',
                schema: 'html5',
                min_height:400,
                max_height: 700,
                fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                setup: (editor:any)=> {
                  editor.on('init', ()=>{
                        // console.log('init', this.content);
                        // editor.on('keyup input', e=>{ //只在编辑器中打字才会触发
                        //         console.log(editor)
                        // }) 
                        editor.setContent(this.value)
                        editor.on('SetContent', e=>{ //编辑器在插入图片和撤销/重做时触发，组件content更新数据也会导致触发
                            // this.changedLog(e, this.status, editor.getContent(), "--")
                            console.log(e)
                        })
                        editor.on('Blur', ()=>{
                              
                        })
                        editor.on('input NodeChange', ()=>{
                            this.$emit('update:modelValue', editor.getContent());
                        })
                    });
                }
            }
            tinymce.init(options)
        }
  }
})
</script>
