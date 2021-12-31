tinymce.PluginManager.add('tpTabs', function (editor, url) {
  var pluginName = 'Tabs';
  var registryName = 'tpTabs';
  var tp$collapseCss = ''
  var global$11 = tinymce.util.Tools.resolve('tinymce.util.I18n');
  var global$6 = tinymce.util.Tools.resolve('tinymce.util.XHR');
  const tp$Tools = editor.tp$.Tools;
  const tp$Component = editor.tp$.Component;
  let _$ = tinymce.dom.DomQuery;
  var tabsToolbar = editor.getParam('tpTabs_toolbar', ' tptabdelete tptabsadd tptabsprops tptabsdelete |tpalignleft tpaligncenter tpalignright', "String");
  var indent2em_val = editor.getParam('tpTabs', null, 'Object');
  indent2em_val ? tp$Component.createCustomTags('tabs', indent2em_val, editor) : ''

  global$6.send({
    url: '/tinymce/plugins/tpTabs/tpTabs.css',
    async: false,
    dataType: "text",
    success: function (text) {
      // tp$collapseCss = 
      tp$Component.setCustomTags('tabs', 'styleSheetLoadList', { default: text }, editor)
      // console.log(tp$collapseCss);
    },
    error: function (_) {

    }
  });

  var cmd = function (command) {
    return function () {
      return editor.execCommand(command);
    };
  };
  var getTabsAttribute = function (data) {

    let _attribute = 'style="' + tp$Tools.getFormatStyle({
      width: tp$Tools.autoToPX(data.width),
      "border-radius": tp$Tools.autoToPX(data.borderRadius),
      // height: tp$Tools.autoToPX(data.Size.height),
      margin: tp$Tools.autoToPX(data.margin) || '0 auto',
      background: data.BackgroundColor,

    }) + '" '
    return _attribute
  }
  var getTabsMainAttribute = function (data) {

    let _attribute = 'style="' + tp$Tools.getFormatStyle({
      padding: tp$Tools.autoToPX(data.mainPadding),
          background: data.mainBackgroundColor,
          "border-width": tp$Tools.autoToPX(data.mainBorderWidth),
          "border-style": data.mainBorderStyle,
          "border-color": data.mainBorderColor,
    }) + '" '
    //    data.Size.width ? _attribute += (' width=" ' + data.Size.width + '" ') : '';
    //    data.Size.height ? _attribute += (' height="' + data.Size.height + '" ') : '';
    return _attribute
  }
  var doAct = function (data, oldData) {
    editor.undoManager.transact(function () {
      editor.focus();
      if (!oldData) {
        var tp$inputId = 'tp$tabsID' + new Date().getTime()
        editor.insertContent('<tp-tabs data-id="' + tp$inputId + '" ' + getTabsAttribute(data) + '  ><div><p contenteditable="true">' + global$11.translate("Title")  + ' 1 </p></div><div><p contenteditable= "true" >' + global$11.translate("Title") + ' 2 </p></div><div class="tp-tabs_main" ' + getTabsMainAttribute(data) + ' ><div>' + global$11.translate("Write here 1") + '</div><div>' + global$11.translate("Write here 2") + '</div></div></tp-tabs> <br>');
      } else {
        editor.dom.setStyles(oldData, { width: tp$Tools.autoToPX(data.width), margin: tp$Tools.autoToPX(data.margin), 'border-radius': tp$Tools.autoToPX(data.borderRadius), })
        let newMain = {
          // 'max-height': tp$Tools.autoToPX(data.mainHeight),
          padding: tp$Tools.autoToPX(data.mainPadding),
          background: data.mainBackgroundColor,
          "border-width": tp$Tools.autoToPX(data.mainBorderWidth),
          "border-style": data.mainBorderStyle,
          "border-color": data.mainBorderColor,
        }
        editor.dom.setStyles(oldData.lastChild, newMain)
        // _data.
        // _data.tpComponentCmd('setStyle', { 'tp-tabs_top': 'background: ' + data.TopBackgroundColor })?
      }
    })
  };
  editor.ui.registry.getAll().icons.tpCollapse || editor.ui.registry.addIcon(registryName, '<svg t="1629266532615" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2544" width="18" height="18"><path d="M387.1 35c0-19.3-15.7-35-35-35H35C15.7 0 0 15.7 0 35v954c0 19.3 15.7 35 35 35h954c19.3 0 35-15.7 35-35V105c0-19.3-15.7-35-35-35H422.1c-19.3 0-35-15.7-35-35z m248.8 140v70c0 19.3-15.7 35-35 35H422.1c-19.3 0-35-15.7-35-35v-70c0-19.3 15.7-35 35-35h178.8c19.3 0 35 15.7 35 35zM918 953H106c-19.3 0-35-15.7-35-35V106c0-19.3 15.7-35 35-35h175.1c19.3 0 35 15.7 35 35v210c0 19.3 15.7 35 35 35H918c19.3 0 35 15.7 35 35v532c0 19.3-15.7 35-35 35zM705.9 245v-70c0-19.3 15.7-35 35-35H919c19.3 0 35 15.7 35 35v70c0 19.3-15.7 35-35 35H740.9c-19.3 0-35-15.7-35-35z" p-id="2545"></path><path d="M382.4 800.8h-2.8c-21.4 1.7-29.7-6.7-24.7-25.1 0-0.1 0.1-0.2 0.1-0.3l42.6-241.8c0.4-2.1 2.2-3.7 4.4-3.7h35.8c0.3 0 0.5 0 0.8-0.1 21.5-4 31.6 7.8 30.2 35.3-0.1 2.5 1.9 4.7 4.4 4.7h4.5c2.3 0 4.2-1.8 4.4-4l5.1-55c0.2-2.6-1.8-4.9-4.4-4.9h-5.3c-1.1 0-2.1 0.4-2.9 1.1-5 4.5-10.2 6.3-15.7 5.6H296.6c-0.3 0-0.5 0-0.8 0.1-4.4 0.8-7.3 0.3-8.7-1.4-1.9-0.7-3.4-1.8-4.6-3.5-0.8-1.2-2.2-1.9-3.6-1.9h-4.8c-2 0-3.8 1.3-4.3 3.3l-15.4 55c-0.8 2.8 1.3 5.7 4.3 5.7h5.3c2 0 3.8-1.4 4.3-3.3 7.4-28.5 21.3-40.7 41.7-36.7 0.3 0.1 0.5 0.1 0.8 0.1h35.5c2.8 0 4.9 2.5 4.4 5.2l-42.4 240.5c-3.1 17.8-13.5 26.2-31.1 25.3H269c-2.2 0-4 1.6-4.4 3.7l-0.8 4.4c-0.5 2.7 1.6 5.2 4.4 5.2h113.4c2.2 0 4-1.6 4.4-3.7l0.8-4.4c0.5-2.9-1.6-5.4-4.4-5.4zM560.4 790.3c-2.1 1.2-4 1.7-5.5 1.3-0.4-0.1-0.7-0.1-1.1-0.1-5 0.4-6.1-4.9-3.3-15.9 0-0.1 0-0.2 0.1-0.3l11.2-63.5c0-0.1 0-0.3 0.1-0.4 2.1-22.8-13.9-36.5-48.2-41-0.3 0-0.6-0.1-1 0-24.9 1.8-44.6 8.5-58.9 19.9-8.7 6.8-13.4 15.8-13.9 27-0.2 3.1 2.9 5.4 5.8 4.4l32.2-10.5c1.7-0.6 2.9-2.1 3.1-4 1.1-14.7 8.2-22.5 21.3-23.6h1.1c11.6 1.9 17.2 9.3 16.8 22.2 0 0.2 0 0.4-0.1 0.7l-2 11.2c-0.2 1.2-0.9 2.2-1.8 2.9-11 7.5-25.4 13.8-43.3 18.9-15 4.5-25.1 8.9-30.3 13.3-8.5 8-13.7 17.3-15.6 27.9-2.9 21.3 8 32.4 32.7 33.3 13.1 0 26.5-4.7 39.9-14.2 2.4-1.7 5.9-0.6 6.8 2.2 2.2 7.2 8.7 11.1 19.5 11.9h0.7c12.4-0.9 25.3-6.4 38.6-16.3 1.7-1.3 2.3-3.6 1.3-5.5-1.1-2.2-4-3-6.2-1.8z m-47-46.1l-6.7 37.8c-0.2 1-0.7 1.9-1.4 2.5-10.1 9.1-18 13.1-23.8 12.3-11.4-0.9-15.8-8.4-13.3-22.6 1.4-13.2 10.1-22.5 25.9-27.8 0.2-0.1 0.4-0.1 0.6-0.2 4.5-2.3 8.5-4.5 12.1-6.5 3.3-2 7.3 0.8 6.6 4.5zM731 670.4h-0.6c-16.1 0.1-33.7 7.1-52.8 21-3.3 2.4-7.7-0.4-7-4.4l17-96.5c0.5-2.7-1.6-5.2-4.4-5.2h-4.7c-0.4 0-0.8 0.1-1.2 0.2l-51.4 15c-1.6 0.5-2.8 1.8-3.1 3.5l-0.3 1.9c-0.4 2 0.7 4 2.5 4.8l5.3 2.5c0.1 0.1 0.3 0.1 0.4 0.2 8.2 2.7 10.9 9.7 8 21.1 0 0.1 0 0.2-0.1 0.2L609 802.1c-0.4 2.3 1.1 4.5 3.3 5.1 11.9 2.9 23 4.8 33.2 5.6h0.4c10.5 0 20 0.4 28.6 1.3h0.6c52.3-1.9 85.2-27.9 98.6-78.1 0.1-0.3 0.1-0.6 0.1-0.8 3.3-39.5-10.9-61.1-42.8-64.8z m-2.4 79.6c0 0.2-0.1 0.4-0.1 0.5-7.8 33.6-23.6 50.8-47.7 51.6-21.4 0.9-28.9-14.6-22.4-46.6l7-39.9c0.2-0.9 0.6-1.7 1.2-2.3 9.5-9.9 20.2-15.3 32.2-16.3h1c23.2 2.9 32.7 20.6 28.8 53z" p-id="2546"></path></svg>');
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
    return editor.dom.getParent(editor.selection.getNode(), 'tp-tabs')
  };
  var tab$head = {
    type: 'panel',
    title: 'Panel head',
    items: [
      {
        type: 'htmlpanel', // component type
        html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;"> ' + global$11.translate("Tabs") + ' ' + global$11.translate("Panel head") + '</div>'
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
      }, {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [
          {
            type: 'input', // component type
            name: 'topBorderWidth', // identifier
            label: 'Border Width' // text for the label
          }, {
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
      }, {
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
    items: [
      {
        type: 'htmlpanel', // component type
        html: '<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;"> ' + global$11.translate("Tabs") + ' ' + global$11.translate("Panel main") + '</div>'
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
      }, {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [
          {
            type: 'input', // component type
            name: 'mainBorderWidth', // identifier
            label: 'Border Width' // text for the label
          }, {
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
        items: [{
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
          }, {
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
        ]
      },
    ]
  };
  var tab$advanced = {
    type: 'panel',
    title: 'Advanced',
    items: [
      {
        name: 'borderstyle',
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
      {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [{
          name: 'bordercolor',
          type: 'colorinput',
          label: 'Border color'
        },
        {
          name: 'backgroundcolor',
          type: 'colorinput',
          label: 'Background color'
        }]
      },

    ]
  };
  var tp$tabs = [];
  tp$tabs.push(tab$general);
  tp$tabs.push(tab$head);
  tp$tabs.push(tab$main);
  tp$tabs.push(tab$advanced);

  var getInitialData = function (data) {
    console.dir(data);
    return data ? {
      width: editor.dom.getSize(data).w + 'px',
      margin: editor.dom.getStyle(data, 'margin'),
      styleTemplates: "default",
      borderRadius: editor.dom.getStyle(data, 'border-radius'),
      topPadding: editor.dom.getStyle(data.firstChild, 'padding'),
      topBackgroundColor: editor.dom.toHex(editor.dom.getStyle(data.firstChild, 'background-color')),
      topBorderColor: editor.dom.toHex(editor.dom.getStyle(data.firstChild, 'border-color')),
      topBorderStyle: editor.dom.getStyle(data.firstChild, 'border-style'),
      topBorderWidth: editor.dom.getStyle(data.firstChild, 'border-width') + '',
      mainPadding: editor.dom.getStyle(data.lastChild, 'padding'),
      mainBackgroundColor: editor.dom.toHex(editor.dom.getStyle(data.lastChild, 'background-color')),
      mainBorderColor: editor.dom.toHex(editor.dom.getStyle(data.lastChild, 'border-color')),
      mainBorderStyle: editor.dom.getStyle(data.lastChild, 'border-style'),
      mainBorderWidth: editor.dom.getStyle(data.lastChild, 'border-width') + '',
    }
      : {
        width: (((editor.dom.doc.body.clientWidth - 6) / editor.dom.doc.body.clientWidth) * 100).toFixed(2) + '%',
        styleTemplates: "default",
      }
  }
  var tp$open = function () {
    let oldData = getTabsValue();
    let _initialData = getInitialData(oldData)
    var dialogConfig = {
      title: pluginName,
      // size: 'medium',
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
        // console.log(data);
        doAct(data, oldData);
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

  let stateToDisable = StateCell()
  let SelectionTargets = {
    onSetup: function (api) {
      api.setDisabled(stateToDisable.get())
    }
  }

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
  editor.ui.registry.addButton('tptabsdelete', {
    tooltip: 'Delete tabs',
    onAction: cmd('mceTpTabsDelete'),
    icon: 'table-delete-table',
  });
  editor.ui.registry.addButton('tptabsprops', {
    tooltip: 'Tabs props',
    onAction: cmd('mceTpTabs'),
    icon: registryName,
  });
  editor.ui.registry.addButton('tptabsadd', {
    tooltip: 'Tabs add',
    onAction: cmd('mceTpTabAdd'),
    icon: 'tp-tab-add',
    // onSetup: function(e){
    //     // console.log(e);
    // }
  });

  editor.ui.registry.addButton('tptabdelete', {
    tooltip: 'Delete Tab',
    onAction: cmd('mceTpTabDelete'),
    icon: 'tp-tab-delete',
    onSetup: SelectionTargets.onSetup
  });

  if (tabsToolbar.length > 0) {
    var isTabs = function (tabs) {
      return editor.dom.is(tabs, 'tp-tabs') && editor.getBody().contains(tabs);
    };
    editor.ui.registry.addContextToolbar(registryName, {
      predicate: isTabs,
      items: tabsToolbar,
      scope: 'node',
      position: 'node'
    });
  }
  editor.addCommand('mceTpTabs', tp$open);
  editor.addCommand('mceTpTabsDelete', function () { getTabsValue().tpComponentCmd('delete') });
  editor.addCommand('mceTpTabAdd', function () { let _tpTabs = getTabsValue(); _tpTabs.tpComponentCmd('tabAdd', { title: global$11.translate("Title")+ ' ' + (_tpTabs.tp$state.count + 1), content: '<p>内容' + (_tpTabs.tp$state.count + 1) + '</p>' }) });
  editor.addCommand('mceTpTabDelete', function () { getTabsValue().tpComponentCmd('tabDelete') });
  return {
    getMetadata: function () {
      return {
        name: pluginName,
        url: "https://github.com/Five-great/tinymce-plugins",
      };
    }
  };
});


