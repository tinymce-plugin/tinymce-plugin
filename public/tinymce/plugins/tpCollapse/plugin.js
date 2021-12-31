


tinymce.PluginManager.add('tpCollapse', function(editor, url) {
    var pluginName = 'collapse';
    var tp$collapseCss = ''
    var global$11 = tinymce.util.Tools.resolve('tinymce.util.I18n');
    var global$6 = tinymce.util.Tools.resolve('tinymce.util.XHR');
    const tp$Tools = editor.tp$.Tools
    const tp$Component = editor.tp$.Component;
    const tp$PanelComponents = editor.tp$.PanelComponents;
    global$6.send({
        url: '/tinymce/plugins/tpCollapse/collapse.css',
        async: false,
        dataType: "text",
        success: function (text) {
            // tp$collapseCss = text
            tp$Component.setCustomTags('collapse','styleSheetLoadList',{ default: text }, editor)
        },
        error: function (_) {
        
        }
      });
   var setupStyle = function(){
      var dom = editor.dom;
    //   console.log(tp$collapseCss);
           
             
    // mainBackgroundColor: ""
    // mainBorderColor: ""
    // mainBorderStyle: ""
    // mainBorderWidth: ""
    // mainHeight: ""
    // mainPadding: ""
    // margin: ""
    // styleTemplates: "default"
    // topBackgroundColor: ""
    // topBorderColor: ""
    // topBorderStyle: ""
    // topBorderWidth: ""
    // topHeight: ""
    // topPadding: ""
               
              
      // var tp$collapseStyle = '#tinymce.mce-content-body .tp-collapse{ border:1px dashed #eee; } #tinymce.mce-content-body .tp-collapse .tp-collapse_main{overflow: visible!important; max-height: none!important;  }' + tp$collapseCss
      // dom.addStyle(tp$collapseStyle)
    }
    var getCollapseAttribute = function(data){
    
        let _attribute = 'style="' + tp$Tools.getFormatStyle({
          width: tp$Tools.autoToPX(data.width),
          "border-radius": tp$Tools.autoToPX(data.borderRadius),
          // height: tp$Tools.autoToPX(data.Size.height),
          margin: tp$Tools.autoToPX(data.margin) || '0 auto',
          background: data.BackgroundColor,
      
         })+'" '
        return _attribute
    }
    var getCollapseMainAttribute = function(data){
    //  let _attribute = ''
      let _attribute = 'style="' + tp$Tools.getFormatStyle({
      //  'max-height': tp$Tools.autoToPX(data.mainHeight),
        padding:  tp$Tools.autoToPX(data.mainPadding),
        background: data.mainBackgroundColor,
        "border-width": tp$Tools.autoToPX(data.mainBorderWidth),
        "border-style": data.mainBorderStyle,
        "border-color": data.mainBorderColor,
       })+'" '
      //  data.Size.width ? _attribute += (' width=" ' + data.Size.width + '" ') : '';
      //  data.Size.height ? _attribute += (' height="' + data.Size.height + '" ') : '';
      return _attribute
  }
  var getCollapseTopAttribute = function(data){
    //  let _attribute = ''
      let _attribute = 'data-top-style="' + tp$Tools.getFormatStyle({
        // height: tp$Tools.autoToPX(data.Size.height),
        padding:  tp$Tools.autoToPX(data.topPadding) || '1px 40px',
        background: data.topBackgroundColor,
        "border-width": tp$Tools.autoToPX(data.topBorderWidth),
        "border-style": data.topBorderStyle,
        "border-color": data.topBorderColor,
       })+'" '
      //  data.Size.width ? _attribute += (' width=" ' + data.Size.width + '" ') : '';
      //  data.Size.height ? _attribute += (' height="' + data.Size.height + '" ') : '';
      return _attribute + (data.styleTemplates && 'data-template="'+ data.styleTemplates +'"')
  }
    var doAct = function (data, oldData) {
        editor.undoManager.transact(function(){
            editor.focus();
            if(!oldData){
              var tp$inputId = 'tp$collapseID'+ new Date().getTime()
              editor.insertContent('<tp-collapse data-id="'+tp$inputId+'" '+ getCollapseAttribute(data) +' '+getCollapseTopAttribute(data)+' ><p>'+global$11.translate("Title")+' </p><div class="tp-collapse_main"  '+ getCollapseMainAttribute(data) + ' ><p>'+global$11.translate("Write here")+'</p></div></tp-collapse>');
            }else{
               editor.dom.setStyles(oldData, { width: tp$Tools.autoToPX(data.width),  margin: tp$Tools.autoToPX(data.margin), 'border-radius': tp$Tools.autoToPX(data.borderRadius),})
               editor.dom.setStyles(oldData.firstChild, {
                // height: tp$Tools.autoToPX(data.Size.height),
                padding:  tp$Tools.autoToPX(data.topPadding) || '1px 0',
                background: data.topBackgroundColor,
                "border-width": tp$Tools.autoToPX(data.topBorderWidth),
                "border-style": data.topBorderStyle,
                "border-color": data.topBorderColor,
               })
               editor.dom.setAttrib(oldData, 'data-top-style' , tp$Tools.getFormatStyle({
                // height: tp$Tools.autoToPX(data.Size.height),
                padding:  tp$Tools.autoToPX(data.topPadding) || '1px 0',
                background: data.topBackgroundColor,
                "border-width": tp$Tools.autoToPX(data.topBorderWidth),
                "border-style": data.topBorderStyle,
                "border-color": data.topBorderColor,
               }))
               let  newMain = {   
                // 'max-height': tp$Tools.autoToPX(data.mainHeight),
                padding:  tp$Tools.autoToPX(data.mainPadding),
                background: data.mainBackgroundColor,
                "border-width": tp$Tools.autoToPX(data.mainBorderWidth),
                "border-style": data.mainBorderStyle,
                "border-color": data.mainBorderColor,
               }
               editor.dom.setStyles(oldData.lastChild.firstChild, newMain)
               oldData.tpComponentCmd('upData', {editor: editor ,style: tp$Tools.getFormatStyle(newMain)})
               
            }
        })
    };
    editor.ui.registry.getAll().icons.tpCollapse || editor.ui.registry.addIcon('tpCollapse','<svg t="1628739072141" class="icon" width="24px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2771" width="200" height="200"><path d="M384 620.032c0 5.376-1.984 10.048-5.952 14.08C374.08 638.08 369.344 640 364.032 640L83.968 640c-5.376 0-10.112-1.92-14.08-5.952C65.92 630.08 64 625.344 64 620.032s1.92-10.048 5.952-14.08L209.92 465.984C213.888 462.016 218.624 460.032 224 460.032s10.048 1.984 14.08 6.016l140.032 139.968C382.016 609.92 384 614.656 384 620.032zM960 352C960 369.664 945.664 384 928 384l-448 0C462.336 384 448 369.664 448 352l0 0C448 334.336 462.336 320 480 320l448 0C945.664 320 960 334.336 960 352L960 352zM960 480C960 497.664 945.664 512 928 512l-448 0C462.336 512 448 497.664 448 480l0 0C448 462.336 462.336 448 480 448l448 0C945.664 448 960 462.336 960 480L960 480zM960 608c0 17.6-14.336 32-32 32l-448 0C462.336 640 448 625.6 448 608l0 0C448 590.272 462.336 576 480 576l448 0C945.664 576 960 590.272 960 608L960 608zM960 736c0 17.6-14.336 32-32 32l-448 0C462.336 768 448 753.6 448 736l0 0C448 718.272 462.336 704 480 704l448 0C945.664 704 960 718.272 960 736L960 736z" p-id="2772"></path></svg>');
   
  
    var getCollapseValue = function () {

        return editor.dom.getParent(editor.selection.getNode(), 'tp-collapse')
    };
    var tab$head = {
      type: 'panel',
      title: 'Panel head',
      items: [
      {
        type: 'htmlpanel', // component type
        html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;"> '+global$11.translate("Collapse")+' '+global$11.translate("Panel head")+'</div>'
      },
      {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [{
          type: 'input',
          name: 'topPadding',
          label: 'Padding'
        },
        {
         type: 'colorinput', // component type
         name: 'topBackgroundColor', // identifier
         label: 'Background Color' // text for the label
        }]
        },{
          type: 'grid', // component type
          columns: 2, // number of columns
          items: [
            {
              type: 'input', // component type
              name: 'topBorderWidth', // identifier
              label: 'Border Width' // text for the label
            },{
              name: 'topBorderStyle',
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
            },
          ]
        },{
          type: 'grid', // component type
          columns: 2, // number of columns
          items: [{
            type: 'colorinput', // component type
            name: 'topBorderColor', // identifier
            label: 'Border color' // text for the label
           }
          ]
          }

      ]
    }
    var tab$main = {
      type: 'panel',
      title: 'Panel main',
    items:[
      {
        type: 'htmlpanel', // component type
        html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;"> '+global$11.translate("Collapse")+' '+global$11.translate("Panel main")+'</div>'
      },
      {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [
          // {
          //   type: 'input', // component type
          //   name: 'mainHeight', // identifier
          //   label: 'Height' // text for the label
          //  },
          {
            type: 'input', // component type
            name: 'mainPadding', // identifier
            label: 'Padding' // text for the label
          }, {
            type: 'colorinput', // component type
            name: 'mainBackgroundColor', // identifier
            label: 'Background Color' // text for the label
           }
      ]
      },{
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [
          {
            type: 'input', // component type
            name: 'mainBorderWidth', // identifier
            label: 'Border Width' // text for the label
          },{
            name: 'mainBorderStyle',
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
          },
        ]
      },
      {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [{
          type: 'colorinput', // component type
          name: 'mainBorderColor', // identifier
          label: 'Border color' // text for the label
         },
        
        ]
        }
  ]
    }
    var tab$general = {
        type: 'panel',
        title: 'General',
            items: [
            //   {
            //   type: 'htmlpanel', // component type
            //   html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 10px;"> '+global$11.translate("Collapse")+'</div>'
            // },
           {
                type: 'grid', // component type
                columns: 2, // number of columns
                items: [  {
                  type: 'input',
                  name: 'width', 
                  label: 'Width',
                   //   disabled: true 
                },
                  {
                   type: 'input', // component type
                   name: 'margin', // identifier
                   label: 'Margin' // text for the label
                 },
                 
                  ]
                }, {
                type: 'grid', // component type
                columns: 2, // number of columns
                items: [
                 {
                  type: 'input', // component type
                  name: 'borderRadius', // identifier
                  label: 'border Radius' // text for the label
                },{
                  name: 'styleTemplates',
                  type: 'listbox',
                  label: 'Templates Style',
                  items: [
                    {
                      text: 'Select...',
                      value: 'default'
                    },
                ]
              }, 
                    // {边框圆角
                    //   text: 'Default',
                    //   value: 'default'
                    // },
                  ]
                },
          ]
    };
    var tab$advanced = {
        type: 'panel',
        title: 'Advanced',
        items:[
          {
            type: 'htmlpanel', // component type
            html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;">'+global$11.translate("Please waiting...")+' </div>'
          },
          ]
          
    };
    var tp$tabs = [];
    tp$tabs.push(tab$general);
    tp$tabs.push(tab$head);
    tp$tabs.push(tab$main);
    tp$tabs.push(tab$advanced);
  
    !window.tp$State && (window.tp$State = { hhh:0 })
    window.tp$State['iframeLayout'] = {
      margin: '2px',
      padding: '2px'
    }
    var getInitialData = function(data){
      // console.dir(data.lastChild.firstChild);
      return  data ? {
       width: editor.dom.getSize(data).w + 'px'  ,
       margin: editor.dom.getStyle(data, 'margin'), 
       styleTemplates: "default", 
       borderRadius: editor.dom.getStyle(data, 'border-radius'),
       topPadding: editor.dom.getStyle(data.firstChild, 'padding'),
       topBackgroundColor: editor.dom.toHex(editor.dom.getStyle(data.firstChild, 'background-color')),
       topBorderColor: editor.dom.toHex(editor.dom.getStyle(data.firstChild, 'border-color')),
       topBorderStyle: editor.dom.getStyle(data.firstChild, 'border-style'),
       topBorderWidth:  editor.dom.getStyle(data.firstChild, 'border-width')+'',
       mainPadding: editor.dom.getStyle(data.lastChild.firstChild, 'padding'),
       mainBackgroundColor: editor.dom.toHex(editor.dom.getStyle(data.lastChild.firstChild, 'background-color')),
       mainBorderColor: editor.dom.toHex(editor.dom.getStyle(data.lastChild.firstChild, 'border-color')),
       mainBorderStyle: editor.dom.getStyle(data.lastChild.firstChild, 'border-style'),
       mainBorderWidth:  editor.dom.getStyle(data.lastChild.firstChild, 'border-width')+'',
      } 
       : {
       width: (((editor.dom.doc.body.clientWidth - 6)/editor.dom.doc.body.clientWidth)*100).toFixed(2) +'%' ,
       styleTemplates: "default", 
     }
    }
    // console.log(tp$PanelComponents);
//  var iframeCode = tp$PanelComponents.getComponents('iframeLayout')
    var tp$open = function(data){
        let oldData = getCollapseValue()
        let _initialData = getInitialData(oldData)
        // getStyle
         
        var dialogConfig =  {
            title: pluginName,
            // size: 'medium',
            // height: '800',
            body: {
              type: 'tabpanel',
              tabs: tp$tabs
            },
            buttons: [
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
            initialData: _initialData, 
            onSubmit: function (api) {
              var data = api.getData();
              console.log(data);
              doAct(data, oldData);
              api.close();
            }
          };

          editor.windowManager.open(dialogConfig);
    }
    var tp$getControlSelection = function(node){
        // console.log(editor.selection.select(editor.dom.getParent(node, 'div[class="tp-collapse_main"]').children[0]))
        // editor.selection(editor.dom.getParent(node, 'div[class="tp-collapse_main"]').children[0])
    }
    var stateSelectorAdapter = function (editor, selector, buttonApi) {
        const tp$buttonApi = function(state, node){
            buttonApi.setActive(state)
            tp$getControlSelection(node.node) 
         }
        return editor.selection.selectorChangedWithUnbind(selector.join(','), tp$buttonApi).unbind;
    };


    editor.ui.registry.addToggleButton('tpCollapse', {
        icon: 'tpCollapse',
        tooltip: pluginName,
        onAction: function () {
           console.log(editor.selection)
             tp$open()
        
        },
        onSetup: function(api){
            setupStyle();
            stateSelectorAdapter(editor, [
                  'tp-collapse'
                ],api)
        },
        // onSetup: stateSelectorAdapter(editor, [
        //   '*[style*="text-indent"]',
        //   '*[data-mce-style*="text-indent"]',
        // ])
    });
    editor.ui.registry.addMenuItem('tpCollapse', {
        text: pluginName,
        icon: 'tpCollapse',
        onSetup: function(){
            setupStyle();
        },
        onAction: function() {
            editor.windowManager.open(dialogConfig);
        }
    });
    editor.addCommand('tpCollapse', doAct  );
    return {
        getMetadata: function () {
            return  {
                name: pluginName,
                url: "https://github.com/Five-great/tinymce-plugins",
            };
        }
    };
});


