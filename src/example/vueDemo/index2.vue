<template>
<div>
    <div class="vueDemo2">
      <tinymce-vue v-model="content2"  :options="vueDemoOpt2" ></tinymce-vue>
    </div>
    <h1>展示显示2</h1>
    <div v-html="content2"></div>
    <h1>插件demo展示区域</h1>
    <div class="vueDemo">
      <tinymce-vue v-model="content" :options="vueDemoOpt" ></tinymce-vue>
    </div>
    <h1>展示显示</h1>
    <div v-html="content"></div>
     <div class="tp-tabs">
       <div class="tp-tabs_top" >
           <!-- <a > -->
              <a href="#test11">dfdfdfdfdffd</a>
             <input href="#test11" type="radio" id="test1" name="yyyy" >
             <label for="test1">sadasdas</label>
           <!-- </a> -->
            <a href="#test12">
             <input type="radio" id="test2" name="yyyy" >
             <label for="test2">哈哈时候</label>
            </a>
       </div>
       <div class="tp-tabs_main">
          <div class="tp-tab_main" id="test11" >ashdjhasjd</div>
          <div class="tp-tab_main" id="test12">ashdjhssssssssssssssssssasjd</div>
       </div>
 <input type="file" id="fileID" >
  <div @click.stop="upfileUp">sdjksjkfjsdkf</div>
  <input @change="upfileFun($event)" type="file"  webkitdirectory />
     </div>
    <PagesRouter pagesName="vuedemo" />
</div>
</template>

<script>
import tinymce from "../../assets/lib/tinymce-vue/tinymce";
import tinymcePlugin from "../../assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";
import TinymceVue from "./Tinymce-vue.vue";
// import  ConvertAPI from 'convertapi-js';
import "../../../public/tinymce/langs/tp-zh_CN"
import "../../../public/tinymce/plugins/tpCollapse/plugin"
import "../../../public/tinymce/plugins/tpCollapse/collapse.css"
import "../../../public/tinymce/plugins/tpTabs/tpTabs.css"

export default{
  components: { TinymceVue },
    name: 'vueDemo',
    data(){
        return {

           content: 'dsdsdsdsd',
           content2: 'dsdsddddddddddddddsdsd',
           vueDemoOpt: '',
            vueDemoOpt2:{
                // custom_elements: 'tp-collapse',
                min_height: 200,
                max_height: 700,
                base_url:'/tinymce',
                plugins: 'tp code  indent2em autoresize tpCollapse tpTabs',
                toolbar: ['|code indent2em  tpCollapse tpTabs'],
               toolbar_sticky: true,
                
         }
        }
    },
  methods:{

      upfileFun(event){
        //   console.log(event);
          let that = this;
          let data = new FormData()
           data.append('dirPath','public')
          console.log(event.target.files);
          let flieList = event.target.files
          for(let i = 0 ; i< flieList.length; i++){
              flieList[i].orginalname = flieList[i].webkitRelativePath
            let _filename = flieList[i].webkitRelativePath.split("/");
            _filename.pop()
            data.append(_filename.join('/'),flieList[i])
          }
         
            

            //   that.$http({
            //             data: data,
            //             method:'POST',
            //             url: 'http://web.hope55.com/api/upload',
            //             processData : false,
		    //             contentType : false,
            //             // header:{'Content-Type':'multipart/form-data'},
            //         }).then(function (res) {
            //             console.log(res)
            //             if ( res.code== 200) {
                           
            //             } 
            //         }).catch(function (error) {
            //             // failFun('上传失败:' + error.message)
            //         });
                that.$api({data:data}).then((res)=>{
                    console.log(res);
                })
      },
      upfileUp(){
              let that = this;
  
             that.$proxyServer({
                        fileUrl: 'http://base.hope55.com/UploadFile/2021/8/25/5933e7aa-01dc-43dc-b99d-a2ad7e826921.docx',
                        timeout: 840000
                }).then((res)=>{
                    console.log(res);
                })
      },
      init(){
      
         
        let that = this;
        // let convertApi = ConvertApi.auth({secret: 'rQAkjv5IKSbcsatM'})
        // let params = convertApi.createParams()
        // setTimeout(()=>{
        //    .addEventListener('click',(e)=>{
        //       console.log(e.target.files[0])
            
        //    })
        //   },2000)
        that.vueDemoOpt = {
              base_url:'/tinymce',
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
                 toolbar_sticky: true,
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
                plugins:  'print tp preview extendgroups clearhtml searchreplace  insertdatetime autolink layout fullscreen line-height image imagetools media upfile link   autosave code  table  advlist lists checklist hr emoticons autosave bdmap indent2em   axupimgs  letterspacing  quickbars attachment wordcount template  autoresize importword searchreplace pagebreak pageembed  tpCollapse tpTabs',
                toolbar: ['|code formatselect fontselect  fontsizeselect   forecolor backcolor bold italic underline strikethrough link alignment alignmentdrop undo redo  restoredraft  | ','layout upfile importword hr lineheight letterspacing line-height indent2em table bdmap image media attachment emoticons mygroups  preview searchreplace pagebreak template pageembed bullist numlist checklist tpCollapse tpTabs removeformat'],
                branding: false,
                menubar: true,
                image_caption: true,
                language:'zh_CN',
                schema: 'html5',
                min_height:400,
                max_height: 700,
                template_replace_values: {
                    username: 'Jack Black',
                    staffid: '991234',
                    inboth_username: 'Famous Person',
                    inboth_staffid: '2213',
                },
                template_preview_replace_values: {
                    preview_username: 'Jack Black',
                    preview_staffid: '991234',
                    inboth_username: 'Famous Person',
                    inboth_staffid: '2213',
                },
                templates : [
                    {
                    title: 'Date modified example',
                    description: 'Adds a timestamp indicating the last time the document modified.',
                    content: '<p>Last Modified: <time class="mdate">This will be replaced with the date modified.</time></p>'
                    },
                    {
                    title: 'Replace values example',
                    description: 'These values will be replaced when the template is inserted into the editor content.',
                    content: '<p>Name: {$username}, StaffID: {$staffid}</p>'
                    },
                    {
                    title: 'Replace values preview example',
                    description: 'These values are replaced in the preview, but not when inserted into the editor content.',
                    content: '<p>Name: {$preview_username}, StaffID: {$preview_staffid}</p>'
                    },
                    {
                    title: 'Replace values preview and content example',
                    description: 'These values are replaced in the preview, and in the content.',
                    content: '<p>Name: {$inboth_username}, StaffID: {$inboth_staffid}</p>'
                    }
                ],
                table_default_attributes: {
                    'border': '1'
                },
                table_default_styles: {
                    'border-collapse': 'collapse',
                    'width': '100%'
                },
                table_header_type: 'sectionCells',
                table_responsive_width: true,
                images_upload_handler: function (blobInfo, succFun, failFun, progressCallback) {//自定义插入图片函数  blobInfo: 本地图片blob对象, succFun(url|string)： 成功回调（插入图片链接到文本中）, failFun(string)：失败回调
                    var file = blobInfo.blob();
                    var reader = new FileReader();
                    var _result=''
                    reader.onload = function(e){
                        _result = e.target.result
                    }
                    
                     var data = new FormData();
                     data.append("file", file);
                     that.$http({
                        data: data,
                        type: 'GET',
                        url: '/tinymce/api/file.json',
                        header:{'Content-Type':'multipart/form-data'},
                        //  xhr: that.xhrOnProgress(function (e) {
                        //         const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                        //         progressCallback(percent);
                        // })
                        onUploadProgress (progress){
                           
                            progressCallback(progress+'%')
                        },
                    }).then(function (res) {
                          
                        if ( res.code== 200) {
                             succFun(_result)
                            
                        } else {
                           failFun('上传失败:' + data.data);
                        }
                    }).catch(function (error) {
                        failFun('上传失败:' + error.message)
                    });
                   
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
                         that.$http.get({
                            data: data, 
                            url: './api/file.json', 
                            header:{'Content-Type':'multipart/form-data'},
                            xhr: that.xhrOnProgress(function (e) {
                                const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                                progressCallback(percent);
                            }),
                         }).then(res=>{
                            succFun(res.data,{ text: res.data });
                         }).catch(function(error){
                            failFun('上传失败:' + error.message)
                         })
                    }
                 },
                 file_callback: function (file, succFun) { //文件上传  file:文件对象 succFun(url|string,obj) 成功回调
                    var data = new FormData();
                    data.append("file", file);
                    console.log(file)
                    that.$http({
                        data: data,
                        method:'POST',
                        url: '/tinymce/api/file.json',
                        header:{'Content-Type':'multipart/form-data'},
                    }).then(function (res) {
                        console.log(res)
                        if ( res.code== 200) {
                            succFun(res.data,{text: file.name});
                        } 
                    }).catch(function (error) {
                        // failFun('上传失败:' + error.message)
                    });
                 },
                 tp_attachment_assets_path: './plugins/attachment/icons',
                 tp_attachment_icons_path: 'https://unpkg.com/@npkg/tinymce-plugins/plugins/attachment/icons',
                 tp_attachment_upload_handler: function (file, succFun, failFun, progressCallback) {
                    var data = new FormData();
                    data.append("file", file);
                    that.$http({
                        data: data,
                        type: 'GET',
                        url: '/tinymce/api/file.json',
                        header:{'Content-Type':'multipart/form-data'},
                         xhr: that.xhrOnProgress(function (e) {
                                const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                                progressCallback(percent);
                        })
                        // onUploadProgress (progress){
                        //     progressCallback(progress+'%')
                        // },
                    }).then(function (data) {
                        // console.log(data)
                        if ( data.code== 200) {
                            succFun(data.data);
                        } else {
                           failFun('上传失败:' + data.data);
                        }
                    }).catch(function (error) {
                        failFun('上传失败:' + error.message)
                    });
                },
                 attachment_max_size: 5009715200,
           }
      }

      
  },
  created(){
        this.init()
  }
}
</script>
<style lang="scss" scoped>
</style>
