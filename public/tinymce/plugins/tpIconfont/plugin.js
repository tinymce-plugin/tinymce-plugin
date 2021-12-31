 /**
 * indent2em (Enhancement 1.5v) 2021-01-13
 * The tinymce-plugins is used to set the first line indent (Enhancement)
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2020, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
  tinymce.PluginManager.add('tpIconfont', function(editor, url) {
    var global$6 = tinymce.util.Tools.resolve('tinymce.util.XHR');
    var global$11 = tinymce.util.Tools.resolve('tinymce.util.I18n');
    const tp$Tools = editor.tp$.Tools
    const tp$Component = editor.tp$.Component;
    const tp$PanelComponents = editor.tp$.PanelComponents;
    let fontList = [{
        text: 'Select...',
        value: ''}]
    var getFontList = function() {
        editor.getParam('fontsize_formats', '12px 14px 16px 18px 24px 36px 48px 56px 72px').split(' ').forEach( val => {
            fontList.push({ 
              text: val,
              value: val
            })
          });
    }
    getFontList();
    let iconListForm = []
    global$6.send({
        url: '/tinymce/css/iconfont.css',
        async: false,
        dataType: "text",
        success: function (text) {
            // tp$collapseCss = text
            // 'sadad'.match
           text.match(/\.icon-([-A-Za-z0-9_]+)/gi).forEach(i => {
               i= i.replace(/^\./,'')
                iconListForm.push({
                    value: i,
                    text: i.replace(/\.icon-/i,''),
                    icon: `<i class="iconfont ${i}"  ></i>`,
                })
            });
           
  
            // console.log( );
        },
        error: function (_) {
        
        }
      });
    var pluginName='Icon Library';



    var getIconfontStyle = function (data) {
        let _style =  tp$Tools.getFormatStyle({
              padding: tp$Tools.autoToPX(data.padding),
              "font-size": tp$Tools.autoToPX(data.fontSize),
              background: data.backgroundColor,
              "border-radius": tp$Tools.autoToPX(data.borderRadius),
              "border-width": tp$Tools.autoToPX(data.borderWidth),
              "border-style": data.borderStyle,
              "border-color": data.borderColor,
              "color": data.color,
        })
        //    data.Size.width ? _attribute += (' width=" ' + data.Size.width + '" ') : '';
        //    data.Size.height ? _attribute += (' height="' + data.Size.height + '" ') : '';
        return _style
      }
    var doAct = function (data) {
      
        editor.undoManager.transact(function(){
            editor.insertContent('<span contenteditable="false" class="tpIconfont-box" > <i style="'+getIconfontStyle(data)+'" class="tpIconfont '+data.iconfontVal+'">&nbsp;</i><span>')
            editor.focus();
        });
    };
    var stateSelectorAdapter = function (editor, selector) {
      return function (buttonApi) {
        return editor.selection.selectorChangedWithUnbind(selector.join(','),function (o, v) {
          buttonApi.setActive(parseInt(editor.dom.getStyle(editor.dom.getParent(v.node, 'li,p,div'), 'text-indent')) > 0 && o)
        } ).unbind;
      };
    };
    var tab$page1 = {
        type: 'panel',
        items: [{
            type: 'htmlpanel', // component type
            html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 0px 0; margin-bottom: 5px; margin-top: -15px;"></div><style>.tox-form__group[aria-disabled=true]{display: none; } .tox-form__group--collection .tox-collection__item>.tox-collection__item-icon{overflow: hidden;}.tox-form__group--collection .tox-collection__item:hover>.tox-collection__item-icon{overflow: visible;}</style>'
          },{
            type: 'input', // component type
            name: 'iconValue',
            label: 'iconValue',
            disabled: true
          },
          {
              type: 'collection', // component type
              name: 'iconListForm', // identifier
            //   label: 'icon List' // text for the label
            }]
         
      };
    

    var setTp$Page2 = function(dialog) {
       let _data = dialog.getData();
    //    console.log('sdsd');
       _data = _data.iconValue || _data.iconListForm[0];
         let page2Config =  {
                title: pluginName,
                body:{
                    type: 'panel',
                    items: [
                    {
                        type: 'htmlpanel', // component type
                        html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 0px 0; margin-bottom: 5px; margin-top: -15px;"></div><style>.tox-form__group.tox-form__group--collection{display:none}.tox-form__group .iconfont-preview_box{display: flex;justify-content: space-evenly; }</style><div class="iconfont-preview_box" ><i class="iconfont '+_data+'" ></i> </div>'
                    },
                    {
                        type: 'collection', // component type
                        name: 'previewStyle', // identifier
                    },
                    {
                        type: 'grid', // component type
                        columns: 3, // number of columns
                        items: [
                            {
                                name: 'fontSize',
                                type: 'listbox',
                                label: 'Iconfont Size',
                                items: fontList
                            },  {
                                name: 'color',
                                type: 'colorinput',
                                label: 'Iconfont Color'
                            },
                        {
                            name: 'backgroundColor',
                            type: 'colorinput',
                            label: 'Background color'
                        },{
                            type: 'input', // component type
                            name: 'padding', // identifier
                            label: 'Padding' // text for the label
                        },{
                            type: 'input', // component type
                            name: 'borderRadius', // identifier
                            label: 'border Radius' // text for the label
                        },
                        
                        {
                            type: 'input', // component type
                            name: 'borderWidth', // identifier
                            label: 'Border Width' // text for the label
                        },{
                            name: 'borderStyle',
                            type: 'listbox',
                            label: 'Border style',
                            items: [
                            {
                                text: 'Select...',
                                value: ''
                            },
                            {
                                text: 'Solid',
                                value: 'solid'
                            },
                            {
                                text: 'Dotted',
                                value: 'dotted'
                            },
                            {
                                text: 'Dashed',
                                value: 'dashed'
                            },
                            {
                                text: 'Double',
                                value: 'double'
                            },
                            {
                                text: 'Groove',
                                value: 'groove'
                            },
                            {
                                text: 'Ridge',
                                value: 'ridge'
                            },
                            {
                                text: 'Inset',
                                value: 'inset'
                            },
                            {
                                text: 'Outset',
                                value: 'outset'
                            },
                            {
                                text: 'None',
                                value: 'none'
                            },
                            {
                                text: 'Hidden',
                                value: 'hidden'
                            }
                            ]
                        },{
                            name: 'borderColor',
                            type: 'colorinput',
                            label: 'Border color'
                        }
                        ]
                    }
                    ]
                },
                initialData: {
                    previewStyle :[{
                        text: '',
                        value: '',
                        icon: '<style> </style>',
                    },{
                        text: '',
                        value: '',
                        icon: '',
                    }]
                },
                buttons: [
                    {
                        type: 'custom',
                        name: 'doesnothing',
                        text: 'Previous',
                        // disabled: true
                    },
                    {
                        type: 'cancel',
                        name: 'closeButton',
                        text: 'Cancel'
                    },
                    {
                      type: 'submit',//custom
                      name: 'Save',
                      text: 'Save',
                      primary: true
                    }
                ],
                onTabChange: function(params) {
                  console.log(params);  
                },
                onChange: function(dialogApi, actionData) {
                   let data = dialogApi.getData()
                //    console.log(actionData.name);
                //    console.log(data);
                   if((actionData.name === 'backgroundColor' || actionData.name === 'borderColor'  || actionData.name === 'color' ) &&data.previewStyle[1].icon === data.color&& data.previewStyle[1].text === data.backgroundColor && data.previewStyle[1].value === data.borderColor){
                       return
                   }
                    dialogApi.setData({previewStyle: [{ icon: "<style> .tox .tox-dialog__body-content .iconfont-preview_box > i {"+getIconfontStyle(data)+"}</style>", text: '', value: '' },{icon:  data.color, text: data.backgroundColor, value: data.borderColor }] })
             
                 },
                onAction: function (dialogApi, actionData) {
                    console.log(dialogApi);
                  if (actionData.name === 'doesnothing') {
                    //   console.log('sdsd');
                    tp$open(dialogApi)
                  }
                },
                onSubmit: function (api) {
                    var data = api.getData();
                    data.iconfontVal = _data
                    console.log(data);
                    doAct(data);
                    api.close();
                  }
            }
        dialog.redial(page2Config);
        
    }
      var getInitialData = function (data) {
       
        return data ? {
          margin: editor.dom.getStyle(data, 'margin'),
          // styleTemplates: "default",
          borderRadius: editor.dom.getStyle(data, 'border-radius'),
          padding: editor.dom.getStyle(data, 'padding'),
          backgroundColor: editor.dom.toHex(editor.dom.getStyle(data, 'background-color')),
          borderColor: editor.dom.toHex(editor.dom.getStyle(data, 'border-color')),
          borderStyle: editor.dom.getStyle(data, 'border-style'),
          borderWidth: editor.dom.getStyle(data, 'border-width') + '',
        
        }
          : {
            
          }
      }
    
      var tp$open = function (dialog) {
    
        var dialogConfig = {
          title: pluginName,
          // size: 'medium',
          body: tab$page1,
          buttons: [
             {
                type: 'cancel',
                name: 'closeButton',
                text: 'Cancel'
            },
            {
                type: 'custom',
                name: 'uniquename',
                text: 'Next',
                // icon: ''
                primary: true,
                // borderless: false,
                disabled: true
            }
          ],
          initialData:{
            iconListForm: iconListForm,
            iconValue: ''
          },
        //   onTabChange: function (dialogApi, details) {
        //       console.log(dialogApi);
        //       console.log(details);
        //     // currentTab.set(details.newTabName);
        //     // updateFilter.throttle(dialogApi);
        //   },
        //   onChange: function(api) {
        //       console.log(api);
        //   },
        //  onChange: function (dialogApi, details) {
        //      console.log(dialogApi);
        //     var data = dialogApi.getData();
        //     var toggle = data.anyterms ? dialogApi.enable : dialogApi.disable;
        //     toggle('uniquename');
        //   },
          onAction: function (dialogApi, actionData) {
            if (actionData.name === 'iconListForm') {
                dialogApi.setData({iconValue: actionData.value }) 
                var toggle = actionData.value ? dialogApi.enable : dialogApi.disable;
                 toggle('uniquename');
                //  setTp$Page2(dialogApi)
            }else if(actionData.name === 'uniquename'){
                setTp$Page2(dialogApi)
            }
          },
        };
        dialog ? dialog.redial(dialogConfig) : editor.windowManager.open(dialogConfig);
      }
    editor.ui.registry.addToggleButton('tpIconfont', {
        icon: 'tpIconfont',
        tooltip: pluginName,
        onAction: function () {
            tp$open();
        },
        onSetup: stateSelectorAdapter(editor, [
          '*[style*="text-indent"]',
          '*[data-mce-style*="text-indent"]',
        ])
    });
    editor.ui.registry.addMenuItem('tpIconfont', {
        text: pluginName,
        icon: 'tpIconfont',
        onAction: function() {
            tp$open();
        }
    });
    return {
        getMetadata: function () {
            return  {
                name: pluginName,
                url: "https://github.com/Five-great/tinymce-plugins",
            };
        }
    };
});
