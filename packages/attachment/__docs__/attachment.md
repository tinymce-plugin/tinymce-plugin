# `attachment`
```bash
 yarn add -D tinymce-plugin
# or
 npm i -D tinymce-plugin
```

:::tinymce-vue2 df
```html
<template>
<div>
    <h1>插件demo展示区域</h1>
    <div class="vueDemo">
      <tinymce-vue v-model="content" ></tinymce-vue>
    </div>
    <h1>展示显示</h1>
    <div v-html="content"></div>
</div>
</template>
<script lang="ts">
tinymce.init({
    selector: '#tinydemo',
    plugins: "importword",
    toolbar: "importword",
    importword_handler: function(editor,files,next){
                var file_name = files[0].name
                if(file_name.substr(file_name.lastIndexOf(".")+1)=='docx'){
                    editor.notificationManager.open({
                        text: '正在转换中...',
                        type: 'info',
                        closeButton: false,
                    });
                     next(files);
                }else{
                    editor.notificationManager.open({
                        text: '目前仅支持docx文件格式，若为doc111，请将扩展名改为docx',
                        type: 'warning',
                    });
                }
              
    }
    importword_filter: function(result,insert,message){ 
      insert(result) 
    }
});
</script>
```
:::

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
:::tinymce-vue2  sds 
```vue
<template>
<div>
 <h1>插件demo展示区域</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
   <h1>展示显示</h1>
    <div v-html="content"></div>
</div>
</template>
<script lang="js">
// import tinymce from "/@/assets/lib/tinymce-vue/tinymce";
// import tp$ from "/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin";
// import TinymceVue2 from "/@/example/vueDemo/Tinymce-vue2.vue";
export default{
name: 'domeVue2',
// components: { TinymceVue },
data(){
    return {
        content: 'dsdsdssfddddddsddddddddddddddddddddddddddddddddddsd',
        tinymceOptions:{
                min_height: 200,
                max_height: 700,
                base_url:'/tinymce',
                plugins: 'tp code  indent2em autoresize tpCollapse tpTabs tpButtons   preview',
                toolbar: ['|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w'],
             
        }
    }
  }
}
</script>
```
:::


[tinymce-plugin](https://tinymce-plugin.github.io)


| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

:::tip
## tip
ysdsd sldsld角度考虑是否加快了速度放缓的设计开发和的话十分艰苦坎坷的身份几乎都是尽快发货会计师大后方健康和速度加快恢复健康说的话发会计核算的尽快回复即可获胜的尽快发货接受电话分机扣税的空间帆帆帆帆帆帆帆帆帆帆帆帆帆帆还是雕刻技法速度加快恢复说的福克斯的回访客户尽快核实的接口返回深刻的回复卡死的回复看似简单发货可接受的
:::

:::warning
## 警告
ysdsd sldsld
:::
:::info
info
:::
:::danger
sdsd
:::


# ddd
sdsddsdsd
`sjdkas`
dfsafasd