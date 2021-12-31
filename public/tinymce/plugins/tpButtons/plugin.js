tinymce.PluginManager.add('tpButtons', function (editor, url) {
  var pluginName = 'Buttons';
  var registryName = 'tpButtons';
  var tp$collapseCss = ''
  var global$11 = tinymce.util.Tools.resolve('tinymce.util.I18n');
  var global$6 = tinymce.util.Tools.resolve('tinymce.util.XHR');
  var buttonsToolbar = editor.getParam('tpButtons_toolbar', '|tpalignleft tpaligncenter tpalignright', "String");
  const tp$Tools = editor.tp$.Tools;
  const tp$Component = editor.tp$.Component;
  var indent2em_val = editor.getParam('tpButtons', null, 'Object');
  // indent2em_val ? tp$Component.createCustomTags('tabs', indent2em_val, editor) : ''

  global$6.send({
    url: '/tinymce/plugins/tpButtons/tpButtons.css',
    async: false,
    dataType: "text",
    success: function (text) {
   text.split('/***').forEach(_text=>{
     if(_text){
       let styleName = _text.match(/^\[([\w\W]+)\]\*\//)
       styleName ? tp$Component.setStyleSheetList('buttons', styleName[1], _text, editor) : ''
     }
   })
    },
    error: function (_) {

    }
  });

  var cmd = function (command) {
    return function () {
      return editor.execCommand(command);
    };
  };
  var getButtonsAttribute = function (data) {

    let _attribute = 'style="' + tp$Tools.getFormatStyle({
      width: tp$Tools.autoToPX(data.width),
      padding: tp$Tools.autoToPX(data.padding),
      margin: tp$Tools.autoToPX(data.margin) || '0 auto',
      background: data.backgroundColor,
      "border-color": data.borderColor,
      "border-style": data.borderStyle,
      "border-width": tp$Tools.autoToPX(data.borderWidth),
      "border-radius": tp$Tools.autoToPX(data.borderRadius),

    }) + '" '
    return _attribute
  }
  
  var doAct = function (data, oldData, tp$inputId) {
    editor.undoManager.transact(function () {
      editor.focus();
      if (!oldData) {
        editor.insertContent('<tp-buttons  class="tp-buttons" data-mce-tp-component="buttons" data-id="' + tp$inputId + '" data-tp-style="'+data.styleTemplates+'" '+ getButtonsAttribute(data) +'><a>21dsdsdsd3dsfsdf132</a></span>');
      } else {
        editor.dom.setStyles(oldData, { padding: tp$Tools.autoToPX(data.padding),  "border-style": data.borderStyle, "border-color": data.borderColor,  background: data.backgroundColor, "border-width": tp$Tools.autoToPX(data.borderWidth), margin: tp$Tools.autoToPX(data.margin), 'border-radius': tp$Tools.autoToPX(data.borderRadius), })
        editor.dom.setAttrib(oldData, 'data-tp-style', data.styleTemplates)
        // let newMain = {
        //   // 'max-height': tp$Tools.autoToPX(data.mainHeight),
        //   padding: tp$Tools.autoToPX(data.mainPadding),
        //   background: data.mainBackgroundColor,
        //   "border-width": tp$Tools.autoToPX(data.mainBorderWidth),
        //   "border-style": data.mainBorderStyle,
        //   "border-color": data.mainBorderColor,
        // }
        // editor.dom.setStyles(oldData.lastChild, newMain)
        // _data.
         oldData.tpComponentCmd('upData',{editor:editor, styleName: data.styleTemplates} )
      }
    })
  };
  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    return {
      get: get,
      set: set
    };
  };

  var getTabsValue = function () {
    return editor.dom.getParent(editor.selection.getNode(), 'tp-buttons')
  };

  var buttonFrom = function (list, pattern, maxResults) {
    var matches = [];
    // var lowerCasePattern = pattern.toLowerCase();
    // var reachedLimit = maxResults.fold(function () {
    //   return never;
    // },
    // for (var i = 0; i < list.length; i++) {
    //   if () {
        matches.push({
          value: 'LHl',
          text: '按s钮',
          icon: '<a style="color: red">LHLasddddddddddddd</a>'
        });
        matches.push({
          value: 'LHl',
          text: '按s钮2',
          icon: '<a>L2HLasddddddddddddddasdasdasd</a>'
        })
        matches.push({
          value: 'LHl',
          text: '按s钮2',
          icon: '<a>L2HLasddddddddddddddasdasdasd</a>'
        })
        matches.push({
          value: 'LHl',
          text: '按s钮2',
          icon: '<a>L2HLasddddddddddddddasdasdasd</a>'
        })
        matches.push({
          value: 'LHl',
          text: '按s钮2',
          icon: '<a>L2HLasddddddddddddddasdasdasd</a>'
        })
        matches.push({
          value: 'LHl',
          text: '按s钮2',
          icon: '<a>L2HLasddddddddddddddasdasdasd</a>'
        })
        matches.push({
          value: 'LHl',
          text: '按s钮2',
          icon: '<a>L2HLasddddddddddddddasdasdasd</a>'
        })
        matches.push({
          value: 'LHl',
          text: '按s钮2',
          icon: '<a>L2HLasddddddddddddddasdasdasd</a>'
        })
        // if (reachedLimit(matches.length)) {
        //   break;
        // }
      // }
    // }
    return matches;
  };
  let tp$ID = ''
  !window.tp$State && (window.tp$State = { hhh:0 })
  window.tp$State['buttonsStyle'] = {}
 
  var tab$advanced = {
    type: 'panel',
    title: 'Advanced',
    items: [
      {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [
        {
          type: 'input', // component type
          name: 'margin', // identifier
          label: 'Margin' // text for the label
        }, {
          name: 'padding',
          type: 'input',
          label: 'Padding'
        },{
          name: 'backgroundColor',
          type: 'colorinput',
          label: 'Background color'
        },{
          type: 'input', // component type
          name: 'borderRadius', // identifier
          label: 'border Radius' // text for the label
        }
        ]
      },
      {
        type: 'grid', // component type
        columns: 3, // number of columns
        items: [
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
  };
  var tp$tabs = [];
  tp$tabs.push(tab$advanced);

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

  var tp$open = function () {
    let oldData = getTabsValue() ;
     tp$ID = oldData && oldData.getAttribute('data-id') ? oldData.getAttribute('data-id') : ('tp-buttonsID' + new Date().getTime()) 
    let _initialData = getInitialData(oldData)
    oldData && oldData.getAttribute('data-tp-style') ? window.tp$State['buttonsStyle'][tp$ID] = oldData.getAttribute('data-tp-style') : ''
    var dialogConfig = {
      title: pluginName,
      // size: 'medium',
      body: {
        type: 'tabpanel',
        tabs: [{
          type: 'panel',
          title: 'General',
          items: [
                {
                  type: 'htmlpanel', // component type
                  html: tp$Component.createHtmlPanel(editor, tp$ID)
                }
          ]
        },...tp$tabs] 
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
        data.styleTemplates = window.tp$State['buttonsStyle'][tp$ID]
        console.log(data);
        doAct(data, oldData, tp$ID);
        api.close();
      }
    };

    editor.windowManager.open(dialogConfig);
  }
  var tp$getControlSelection = function (node) {
    // console.log(node);
    // console.log(editor.selection.select(editor.dom.getParent(node, 'div[class="tp-collapse_main"]').children[0]))
    // editor.selection(editor.dom.getParent(node, 'div[class="tp-collapse_main"]').children[0])
  }
  var stateSelectorAdapter = function (editor, selector) {
    return function (buttonApi) {
      let tp$buttonApi = function (state, node) {
        buttonApi.setActive(state)
        tp$getControlSelection(node.node)
      }
      return editor.selection.selectorChangedWithUnbind(selector.join(','), tp$buttonApi).unbind;
    }
  };
  let StateCell = function () {
    var get = function () {
      return getTabsValue().tp$state.count > 2 ? 0 : 1;
    };
    return {
      get: get,
    };
  }

  // let stateToDisable = StateCell()
  // let SelectionTargets = {
  //   onSetup: function (api) {
  //     api.setDisabled(stateToDisable.get())
  //   }
  // }

  editor.ui.registry.addToggleButton(registryName, {
    icon: registryName,
    tooltip: pluginName,
    onAction: function () {
      tp$open()
       
    },
    onSetup: stateSelectorAdapter(editor, [tp$Tools.namingFormat.toHyphen(registryName)])
  });
  editor.ui.registry.addMenuItem(registryName, {
    text: pluginName,
    icon: registryName,
    onSetup: function () {
      setupStyle();
    },
    onAction: function () {
      editor.windowManager.open(dialogConfig);
    }
  });


  if (buttonsToolbar.length > 0) {
    var isButtons = function (buttons) {
      return editor.dom.is(buttons, 'tp-buttons') && editor.getBody().contains(buttons);
    };
    editor.ui.registry.addContextToolbar(registryName, {
      predicate: isButtons,
      items: buttonsToolbar,
      scope: 'node',
      position: 'node'
    });
  }
 return {
    getMetadata: function () {
      return {
        name: pluginName,
        url: "https://github.com/Five-great/tinymce-plugins",
      };
    }
  };
});


