

tinymce.PluginManager.add('tpParagraph', function (editor, url) {
  var pluginName = 'Paragraph';
  var registryName = 'tpParagraph';
  const tp$Tools = editor.tp$.Tools;
  const tp$Component = editor.tp$.Component;
  var letterspacing_val = editor.getParam('tp-letterspacing', '0px 1px 2px 4px 6px 8px 10px 20px 40px');
  // indent2em_val ? tp$Component.createCustomTags('tabs', indent2em_val, editor) : ''
  letterspacingList = [{
    text: 'Select...',
    value: ''
  }]
  letterspacing_val.split(' ').forEach( val => {
    letterspacingList.push({ 
      text: val,
      value: val
    })
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

  var getBlocksList = function(params) {
    return  editor.selection.getSelectedBlocks()
  }              
  
  var setBeforeParagraph = function (value) {
    editor.formatter.apply('beforeParagraph', { value: value || '20px' });
  }
  var setAfterParagraph = function (value) {
    editor.formatter.apply('afterParagraph', { value: value || '20px' });
  }
  var setBorderParagraph = function(valueW, valueS, valueC ) {
    editor.formatter.apply('borderParagraph', { valueW: valueW, valueS: valueS , valueC: valueC});
  }
  var setPaddingParagraph = function (value) {
    editor.formatter.apply('paddingParagraph', { value: value || '20px' });
  }
  var setTpParagraph = function(background, indent) {
    
    editor.formatter.apply('tpParagraph', { background: background});

  }
  var setTpIndent = function(value) {
    editor.execCommand('tpIndent', false, value );
  }
  var setTpLetterspacing = function (value) {
    editor.execCommand('tpLetterspacing', false, value );
  }
  var doAct = function (data, oldData, tp$inputId) {
    editor.undoManager.transact(function () {
      editor.focus();
      // let blocksList = getBlocksList()
      data.marginTop && setBeforeParagraph(tp$Tools.autoToPX(data.marginTop));
      data.marginBottom && setAfterParagraph(tp$Tools.autoToPX(data.marginBottom));
      data.borderWidth && data.borderStyle && data.borderColor && setBorderParagraph(tp$Tools.autoToPX(data.borderWidth), data.borderStyle, data.borderColor);
      data.padding && setPaddingParagraph(tp$Tools.autoToPX(data.padding))
      // setTpParagraph(data.backgroundColor)
      data.letterspacing && setTpLetterspacing(data.letterspacing)
      data.indent && setTpIndent( data.indent) 
      // if (!oldData) {
      //   editor.insertContent('<tp-buttons data-id="' + tp$inputId + '" data-tp-style="'+data.styleTemplates+'" '+ getButtonsAttribute(data) +'><a><span>213dsfsdf132</span></a></tp-buttons>');
      // } else {
      //   editor.dom.setStyles(oldData, { padding: tp$Tools.autoToPX(data.padding),  "border-style": data.borderStyle, "border-color": data.borderColor,  background: data.backgroundColor, "border-width": tp$Tools.autoToPX(data.borderWidth), margin: tp$Tools.autoToPX(data.margin), 'border-radius': tp$Tools.autoToPX(data.borderRadius), })
      //   editor.dom.setAttrib(oldData, 'data-tp-style', data.styleTemplates)
      //    oldData.tpComponentCmd('upData',{editor:editor, styleName: data.styleTemplates} )
      // }
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
  var tab$general = {
    type: 'panel',
    title: 'General',
    items: [
      {
        type: 'grid', // component type
        columns: 2, // number of columns
        items: [
        {
          type: 'input', // component type
          name: 'marginTop', // identifier
          label: 'Spacing before paragraph' // text for the label
        }, {
          name: 'marginBottom',
          type: 'input',
          label: 'Spacing after paragraph'
        },{
          name: 'indent',
          type: 'listbox',
          label: 'Indent mode',
          items: [
            {
              text: 'Select...',
              value: ''
            }, {
              text: 'First line indent',
              value: ' 2em'
            },
            {
              text: 'Hanging Indent',
              value: '-2em'
            },
          
          ]
        },{
          name: 'letterspacing',
          type: 'listbox',
          label: 'Letter spacing',
          items: letterspacingList
         }
        ]
      },
    ]
  };
  var tab$advanced = {
    type: 'panel',
    title: 'Advanced',
    items: [
    
      {
        type: 'grid', // component type
        columns: 3, // number of columns
        items: [
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
  };
  var tp$tabs = [];
  tp$tabs.push(tab$general);
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

    var dialogConfig = {
      title: pluginName,
      // size: 'medium',
      body: {
        type: 'tabpanel',
        tabs:  tp$tabs
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
      // initialData: _initialData,
      onSubmit: function (api) {
        var data = api.getData();
        console.log(data);
        doAct(data);
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
    onAction: function () {
      editor.windowManager.open(dialogConfig);
    }
  });
 return {
    getMetadata: function () {
      return {
        name: pluginName,
        url: "https://github.com/Five-great/tinymce-plugins",
      };
    }
  };
});


