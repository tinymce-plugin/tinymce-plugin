# 前言

:::tinymce-vue3 哈市大家啊实打实大苏打好看就好看啊速度很快按时打卡实打实哈开始大师的话看阿松大啊大苏打
```vue
<template>
<div>
 <h1>插件demo展示区域</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
</div>
</template>

<script lang="ts">
import tinymce from "/@/assets/lib/tinymce-vue/tinymce";
import tp$ from "/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";
import TinymceVue from "/@/example/vueDemo/Tinymce-vue.vue";
export default{
name: 'domeVue3',
components: { TinymceVue },
data(){
    return {
        content: 'dsdsdssfdddddddddddddddddddsd',
        tinymceOptions:{
                // custom_elements: 'tp-collapse',
                min_height: 200,
                max_height: 700,
                base_url:'/tinymce',
                plugins: 'tp code  indent2em autoresize tpCollapse tpTabs tpButtons  preview',
                toolbar: ['|code indent2em  tpCollapse tpTabs tpButtons   | Preview |'],
             
        }
    }
  }
}
</script>

```
:::

```js
import React from 'react';
import tinymce from "/@/assets/lib/tinymce-vue/tinymce";
import tp$ from "/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";
import { Editor } from '@tinymce/tinymce-react';
```
:::tinymce-react sdsd  
```js
//https://babeljs.io/repl/
import React from 'react';
import tinymce from "/@/assets/lib/tinymce-vue/tinymce";
import tp$ from "/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";
import { Editor } from '@tinymce/tinymce-react';

     class reactDemo extends React.Component{
       constructor(props) {
         super(props);
           this.reactDemoInit = {
                    height: 500,
                    base_url:'/tinymce',
                    branding: false,
                    language:'zh_CN',
                    menubar: false,
                    plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons', 'insertdatetime media table paste code help wordcount'],
                    toolbar: 'undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image | ' + 'bold italic backcolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
             };
           this.reactDemoInitialValue ="<p>这是一个REactDemo</p>"
        }
      render() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "tinymce demo"), /*#__PURE__*/React.createElement(Editor, {
                  initialValue: this.reactDemoInitialValue,
                  init: this.reactDemoInit
          }));
        }
    }

   ReactDOM.render(React.createElement(reactDemo,null), document.getElementById('ReactRootID'));

```
:::





    

:::tinymce-vue2  sds 
```vue
<template>
<div>
 <h1>插件demo展示区域</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
</div>
</template>

<script lang="js">
// import tinymce from "/@/assets/lib/tinymce-vue/tinymce";
// import tp$ from "/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";
// import TinymceVue2 from "/@/example/vueDemo/Tinymce-vue2.vue";
export default{
name: 'domeVue2',
components: { TinymceVue },
data(){
    return {
        content: 'fivesdsdsd',
        tinymceOptions:{
                min_height: 200,
                max_height: 700,
                base_url:'/tinymce',
                plugins: 'tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview',
                toolbar: ['|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w'],
             
        }
    }
  }
}
</script>
```
:::
