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
       <div class="iframeLayout">
            <div class="iframeLayout_margin">
                 <label for=""> margin </label>
                    <input type="text" class="margin iframeLayout_top" placeholder="-" id="ifrLayoutMagrginTop" >
                    <input type="text" class="margin iframeLayout_right" placeholder="-" id="ifrLayoutMagrginRight" >
                    <input type="text" class="margin iframeLayout_bottom" placeholder="-" id="ifrLayoutMagrginBottom" >
                    <input type="text" class="margin iframeLayout_left" placeholder="-" id="ifrLayoutMagrginLeft" >
                 <div class="iframeLayout_border">
                   <label for=""> border </label>
                    <input type="text" class="border iframeLayout_top" placeholder="-" id="ifrLayoutBorderTop" >
                    <input type="text" class="border iframeLayout_right" placeholder="-" id="ifrLayoutBorderRight" >
                    <input type="text" class="border iframeLayout_bottom" placeholder="-" id="ifrLayoutBorderBottom" >
                    <input type="text" class="border iframeLayout_left" placeholder="-" id="ifrLayoutBorderLeft" >
               
                   <div class="iframeLayout_padding">
                     <label for=""> padding </label>
                        <input type="text" class="padding iframeLayout_top" placeholder="-" id="ifrLayoutPaddingTop" >
                        <input type="text" class="padding iframeLayout_right" placeholder="-" id="ifrLayoutPaddingRight" >
                        <input type="text" class="padding iframeLayout_bottom" placeholder="-" id="ifrLayoutPaddingBottom" >
                        <input type="text" class="padding iframeLayout_left" placeholder="-" id="ifrLayoutPaddingLeft" >
                        <div class="iframeLayout_size">
                            <input type="text" class="size"  id="ifrLayoutWidth" >
                            <span>X</span>
                            <input type="text" class="size"  id="ifrLayoutHeight" >
                        </div>
                   </div>
                </div>
            </div>
       </div>
 
     </div>
       <button @click="important()"></button>
    <PagesRouter pagesName="vuedemo" />
</div>
</template>

<script>
import tinymce from "../../assets/lib/tinymce-vue/tinymce";
// import tp$ from "convertapi/tinymce-plugin/index";
import tp$ from "/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";
import TinymceVue from "/@/example/vueDemo/Tinymce-vue.vue";
import "../../../public/tinymce/langs/tp-zh_CN"
import "../../../public/tinymce/plugins/tpCollapse/plugin"
import "../../../public/tinymce/plugins/tpIconlists/tpIconlists.css"
import '../../../public/tinymce/css/iconfont.css'
// import "../../../public/tinymce/plugins/tpTabs/tpTabs.css"


export default{
  components: { TinymceVue },
    name: 'vueDemo',
    data(){
        return {
            editor: '',
           content: 'dsdsdsdsd',
           content2: `<div class="tp-tabs" style="width: 100%;" data-id="tp$tabsID1629518201020" data-tp-component="tabs"><input id="tp$tabsID1629518201020tab0" checked="" name="tp$tabsID1629518201020" type="radio" /><input id="tp$tabsID1629518201020tab1" name="tp$tabsID1629518201020" type="radio" />
<div class="tp-tabs_top"><label class="tp-tabs_label" for="tp$tabsID1629518201020tab0">Title {1}</label><label class="tp-tabs_label" for="tp$tabsID1629518201020tab1">Title {1}</label></div>
<div class="tp-tabs_main">
<div class="tp-tab_main">Write here 1</div>
<div class="tp-tab_main">Write here 2</div>
</div>
</div>
<p style="margin-top: 0px;">偶u都很符合速度发货速度v现场v现场就会发觉卡死的回复几乎都是开发&nbsp;</p>
<p style="margin-top: 0px;">啊实打实阿松大挨打挨打挨打</p>
<a class="tp-buttons" style="margin: 0 auto;" href="http://127.0.0.1:3000/examples/" data-tp-style="style_2" data-id="tp-buttonsID1631194286931" data-tp-component="buttons">213dsfsdf132</a>
<ul class=" tp-iconlists tp-iconlists_tick" style="list-style-type: tp-iconlists_tick;">
<li><span style="font-size: 16px;">的是否会舒服第四u对付i淑妃为更好认为人u爱上对啊回复啊是否速度法双方的的顺丰到付速度法速度法速度法 的护身符i还是短发</span></li>
<li><span style="font-size: 16px;">士大夫精神的回复哈市大家发货的健身房</span></li>
</ul>
<p style="margin-top: 0px;">&rsquo;</p>
<table style="border-collapse: collapse; width: 99.8301%; height: 466px;" border="1">
<tbody>
<tr style="height: 22px;">
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">士大夫撒旦</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.1064%; height: 22px;">&nbsp;</td>
</tr>
<tr style="height: 422px;">
<td style="width: 13.0997%; height: 422px;">速度法速度法</td>
<td style="width: 13.0997%; height: 422px;">倒是发生的f</td>
<td style="width: 13.0997%; height: 422px;">速度法的撒法</td>
<td style="width: 13.0997%; height: 422px;">速度法速度法舒服</td>
<td style="width: 13.0997%; height: 422px;">sd速度法速度法</td>
<td style="width: 13.0997%; height: 422px;">地方速度法</td>
<td style="width: 13.1064%; height: 422px;">速度法速度法速度法速度法速度法</td>
</tr>
<tr style="height: 22px;">
<td style="width: 13.0997%; height: 22px;">倒是覅第三方速度法</td>
<td style="width: 13.0997%; height: 22px;">的撒法的撒法</td>
<td style="width: 13.0997%; height: 22px;">速度法速度法sd</td>
<td style="width: 13.0997%; height: 22px;">撒的覅第三方</td>
<td style="width: 13.0997%; height: 22px;">士大夫撒旦的撒法sdf</td>
<td style="width: 13.0997%; height: 22px;">的撒法速度法</td>
<td style="width: 13.1064%; height: 22px;">速度法速度法速度法</td>
</tr>
</tbody>
</table>
<p style="margin-top: 0px;">的发挥邸</p>
<div class="tp-tabs" style="width: 99.50%; margin: 0 auto;" data-id="tp$tabsID1631194293489" data-tp-component="tabs"><input id="tp$tabsID1631194293489tab0" checked="" name="tp$tabsID1631194293489" type="radio" /><input id="tp$tabsID1631194293489tab1" name="tp$tabsID1631194293489" type="radio" />
<div class="tp-tabs_top"><label class="tp-tabs_label" for="tp$tabsID1631194293489tab0">标题 1</label><label class="tp-tabs_label" for="tp$tabsID1631194293489tab1">标题 2</label></div>
<div class="tp-tabs_main">
<div class="tp-tab_main">Write here 1</div>
<div class="tp-tab_main">Write here 2</div>
</div>
</div>
<p style="margin-top: 0px;">的撒发射点根深蒂固发士大夫速度法的撒法撒的速度法速度法速度法速度法速度法速度法的撒法</p>
<div class="tp-collapse" style="width: 99.50%; margin: 0 auto;" data-top-style="padding:1px 40px;" data-template="default" data-tp-component="collapse"><input id="tp$collapseID1631194297628" type="checkbox" /><label class="tp-collapse_label" style="min-height: 20px; padding: 1px 40px;" for="tp$collapseID1631194297628">
<p>标题</p>
</label>
<div class="tp-collapse_main">
<p>在这里写入内容</p>
</div>
</div>
<p style="margin-top: 0px;">啊士大夫艰苦哈数据返回的是伏虎的爽肤水u啊士大夫喀什肯德基哈萨克接电话看撒可见度贺卡收到尽快哈撒可见度v吧啊就是贷记卡和数据库大苏打 kjahscjkhaxjzcb阿斯蒂芬拉萨xcasdfdsfdsf</p>`,
           vueDemoOpt: '',
            vueDemoOpt2:{
                // custom_elements: 'tp-collapse',
                min_height: 200,
                max_height: 700,
                base_url:'/tinymce',
                plugins: 'tp code  tpIndent2em tpLetterspacing autoresize tpCollapse tpTabs tpButtons lists tpIconlists  tpColumns tpParagraph  tpIconfont preview',
                toolbar: ['|code formatselect fontselect  fontsizeselect   forecolor backcolor bold italic underline strikethrough tpIndent2em tpLetterspacing  tpCollapse tpTabs tpButtons tpIconlists  tpColumns tpParagraph tpIconfont | Preview | w'],
             
        }
     }
       
    },
  methods:{
     important(){
tinyMCE.activeEditor.execCommand('mceImportword')
     },
      init(){
        let that = this;
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
                plugins:  'print tp preview extendgroups clearhtml searchreplace  insertdatetime autolink layout fullscreen line-height image imagetools media upfile link   autosave code  table  advlist lists checklist hr emoticons autosave bdmap indent2em   axupimgs  letterspacing  quickbars attachment wordcount template  autoresize importword searchreplace pagebreak pageembed  tpCollapse tpTabs tpButtons tpIconlists',
                toolbar: ['|code formatselect fontselect  fontsizeselect   forecolor backcolor bold italic underline strikethrough link alignment alignmentdrop undo redo  restoredraft  | ','layout upfile importword hr lineheight letterspacing line-height indent2em table bdmap image media attachment outdent indent blockquote subscript superscript  emoticons mygroups  preview searchreplace pagebreak template pageembed bullist numlist checklist tpCollapse tpTabs tpButtons tpIconlists'],
                branding: false,
                menubar: true,
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
                        type: 'GET',
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
 .iframeLayout{
     .iframeLayout_margin{
         border: 1px dashed #333;
         background: #F9CC9D;
         position: relative;
         margin: 0;
         padding: 0;
         font-size: 0;
         .iframeLayout_border{
            //  min-height: 120px;
             margin: 39px ;
             background: #FDDD9B;
             border: 1px solid #333;
             position: relative;
             .iframeLayout_padding{
                margin: 39px ;
                background: rgb(195,208,139);
                border: 1px  dashed #333;
                position: relative;
                .iframeLayout_size{
                    min-height: 40px;
                    position: relative;
                    text-align: center;
                    line-height: 40px;
                    margin: 39px;
                     border: 1px solid #333;
                     span{
                         font-size: 20px;
                         color: #666;
                          display: inline-block;
                          vertical-align: middle;
                        //  line-height: 40px;
                     }
                    input{
                        position: relative;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
             }
         }
         label{
             font-size: 20px;
             color: #000;
             position: absolute;
             top:2px;
             left: 2px;
         }
         
         input{
             position: absolute;
             width: 31px;
             height: 31px;
             display: block;
              margin: 0 auto;
             text-align: center;
             line-height: 31px;
             font-size: 12px;
             border: 1px solid #ccc;
             background: #fff;
             border-radius:3px;
             overflow: hidden;
             padding: 1px;
            //  background: transparent;
             &:focus{
                 outline:none;
                 border-color: #1f81c3;
             }
         }
         .iframeLayout_top{
             top: 2px;
             left: 50%;
             transform: translateX(-50%);
         }
         .iframeLayout_right{
             top: 50%;
             right: 2px;
             transform: translateY(-50%);
         }
         .iframeLayout_bottom{
             bottom: 2px;
             left: 50%;
             transform: translateX(-50%);
         }
         .iframeLayout_left{
             top: 50%;
             left: 2px;
             transform: translateY(-50%);
         }

     }
 }
</style>