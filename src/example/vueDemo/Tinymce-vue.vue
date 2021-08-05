<template>
<div>
    <div class="tinymceVue">
      <div :id="tinymceID"></div>
   </div>
</div>
</template>

<script>
import tinymce from "../../assets/lib/tinymce-vue/tinymce";
// import '../../assets/lib/tinymce-vue/plugins/tp-lineheight/plugin'
export default {
    name: 'TinymceVue',
    props:{
      modelValue: {
          type: [String,Number],
          default: 'dsd'
          },
     tinymcePlugins: {
         type : String,
         default: 'print preview extendgroups clearhtml searchreplace insertdatetime autolink layout fullscreen line-height image upfile link media autosave code  table  advlist lists  emoticons autosave bdmap indent2em   axupimgs  letterspacing  quickbars attachment wordcount  autoresize importword'
     },
      tinymceToolbar: {
        type: [String, Array],
        default:()=>['|code formatselect fontselect  fontsizeselect   forecolor backcolor bold italic underline strikethrough link alignment alignmentdrop undo redo  restoredraft| ','layout upfile importword lineheight letterspacing line-height indent2em table image  emoticons mygroups preview']
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
       this.init()
       if(typeof tinymce === "undefined") throw new Error('tinymce undefined');
      },1000)
    
     
  },
  methods: {
      xhrOnProgress(fun) {
          xhrOnProgress.onprogress = fun;
          return function () {
              var xhr = $.ajaxSettings.xhr();
              if (typeof xhrOnProgress.onprogress !== 'function')
                  return xhr;
              if (xhrOnProgress.onprogress && xhr.upload) {
                  xhr.upload.onprogress = xhrOnProgress.onprogress;
              }
              return xhr;
          }
        },
        init(){
          let that = this
            let options = {
                selector: '#' + that.tinymceID,
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
                            onAction: function(editor, value){
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
                file_picker_types: 'media',
                images_upload_handler: function (blobInfo, succFun, failFun) {//自定义插入图片函数  blobInfo: 本地图片blob对象, succFun(url|string)： 成功回调（插入图片链接到文本中）, failFun(string)：失败回调
                    var file = blobInfo.blob();
                    var reader = new FileReader();
                    reader.onload = function(e){
                     succFun(e.target.result)
                    }
                   reader.readAsDataURL(file)
                 },
                  file_picker_callback: function (succFun, value, meta) { //自定义文件上传函数 
                    var filetype = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4';
                    var input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', filetype);
                    input.click();
                    input.onchange = function () {
                        var file = this.files[0];
                        var data = new FormData();
                         data.append("file", file);
                        $.ajax({
                            data: data,
                            type: 'GET',
                            url: './api/file.json',
                            header:{'Content-Type':'multipart/form-data'},
                            cache: false,
                            contentType: false,
                            processData: false,
                            dataType: 'json',
                            xhr: that.xhrOnProgress(function (e) {
                                const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                                // console.log(percent);
                                progressCallback(percent);
                  
                            }),
                        }).then(function (data) {
                            if ( data.code== 200) {
                                succFun(data.data,{ text: data.data });
                            }
                        }).fail(function (error) {
                            failFun('上传失败:' + error.message)
                        });
                    }
                 },
                 file_callback: function (file, succFun) { //文件上传  file:文件对象 succFun(url|string,obj) 成功回调
                    var data = new FormData();
                    data.append("file", file);
                    $.ajax({
                        data: data,
                        type: 'GET',
                        url: './api/file.json',
                        cache: false,
                        contentType: false,
                        processData: false,
                        header:{'Content-Type':'multipart/form-data'},
                        dataType: 'json',
                        xhr: xhrOnProgress(function (e) {
                            const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                            progressCallback(percent);
                        }),
                    }).then(function (data) {
                        if ( data.code== 200) {
                            succFun(data.data,{text: file.name});
                        } 
                    }).fail(function (error) {
                        // failFun('上传失败:' + error.message)
                    });
                 },
                   attachment_upload_handler: function (file, succFun, failFun, progressCallback) {
                    var data = new FormData();
                    data.append("file", file);
                    $.ajax({
                        data: data,
                        type: 'GET',
                        url: './api/file.json',
                        cache: false,
                        contentType: false,
                        processData: false,
                        header:{'Content-Type':'multipart/form-data'},
                        dataType: 'json',
                        xhr: xhrOnProgress(function (e) {
                            const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                            progressCallback(percent);
                        }),
                    }).then(function (data) {
                        if ( data.code== 200) {
                            succFun(data.data);
                        } else {
                           failFun('上传失败:' + data.data);
                        }
                    }).fail(function (error) {
                        failFun('上传失败:' + error.message)
                    });
                },
                 attachment_max_size: 5009715200,
                fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                setup: (editor)=> {
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
}
</script>
