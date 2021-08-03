## ExtendGroups

### 如何引入使用

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "extendgroups",
    toolbar: 'mygroups'
    extend_groups: {
         mygroups: {
            icon: 'mygroupsicon',
            tooltip: 'mygroups',
            isSelect: true,
            type: 'togglemenuitem',
            items: [{
                type: 'selectItem',
                icon: 'fontsizeselect',
                text: '字体',
                value: '12px 14px 16px 18px 24px 36px 48px 56px 72px'
                },
                {
                type: 'togglechoiceitem'
                icon: 'underline',
                text: '下划线',
                value: 'underline',
                styleSelector: 'text-decoration'
                },
                {
                type: 'togglechoiceitem'
                icon: 'bold',
                text: '加粗',
                value: 'bold',
                selector: 'strong'
                },
                {
                type: 'togglechoiceitem'
                icon: 'italic',
                text: '斜体',
                value: 'italic',
                selector: 'em'
                },
          ]
      }
    },
    extend_groups_addicon: {
        mygroupsicon: '<img src="https://avatars.githubusercontent.com/u/43601963?s=48&v=4">' //可 <img > <svg> ...
    }

   });
```


### 命令对应表

撒大苏打
### 配置参数说明

参数名称                |    参数说明   |   参数类型
-|-|-:
`extend_groups`           |   必要参数|  Object
`extend_groups_addicon`   |   按需增加`ICON` | String

 ### 扩展Groups类型说明( `extend_groups` )
|类型名称  |type / 子类型配置参数|参数说明|参数类型|
|-|-|-|-:|
|单项选择       |  **choiceitem**        | 单项选择类型 只能组合同系列 如 对齐方式 可以组合 居中对齐 两端对齐 居左对齐| -|
|————|  <i> icon </i>       | 配置该类型的图标名称 已存在 |String|
|切换选择       |  **togglechoiceitem**    | 切换选择类型 可以当多项选择使用。 斜体（italic）、加粗（bold）、|
|————|      选择项目 selectItem       |
 选择项目       |  selectItem    | 切换选择类型 可以当多项选择使用。 斜体（italic）、加粗（bold）、|



功能名称|功能cmd|
-----------|----------
居左对齐|  justifyleft
居中对齐|  justifycenter
居右对齐|  justifyright
两端对齐|  justifyfull
下划线  |  underline
斜体  |  italic
字体  |  fontsize

[t5](http://skin.tiny.cloud/t5/)