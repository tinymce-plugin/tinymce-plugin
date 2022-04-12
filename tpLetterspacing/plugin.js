
 /**
 * letterspacing 1.7v 2021-07-18
 * The tinymce-plugins is used to set the word spacing
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2020, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
tinymce.PluginManager.add('tpLetterspacing', function(editor, url) {
    var pluginName='Letter spacing';
    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    const tp$Tools = editor.tp$.Tools;
    var letterspacing_val = editor.getParam('tp-letterspacing', '0px 1px 2px 4px 6px 8px 10px 20px 40px');
    var doAct = function (value) {
        editor.undoManager.transact(function(){
            editor.focus();
            editor.execCommand('tpLetterspacing', false, value );
        })
    };
    var Cell = function (initial) {
        var value = initial;
        var action = initial;
        var get = function () {
          return value ;
        };
        var getAction = function(){
            return action
        }
        var set = function (v,s) {
          value = v;
          s ? action = s : '';
        };
        return {
          get: get,
          set: set,
          getAction: getAction
        };
      };
 
    var getDefaultItems = function (_items) {
        return _items.length > 0 ? _items[0] : '';
      };

    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    var _items = letterspacing_val.split(' ');
    var defaultSelection = Cell(getDefaultItems(_items));
        editor.ui.registry.addSplitButton('tpLetterspacing', {
            icon: 'tpLetterspacing',
            tooltip: pluginName,
            select: function (value) {
                return value === defaultSelection.get();
            },
            fetch: function (done) {
                var _block = editor.selection.getStart();
             
                var lhv = -1;
                    if(lhv==-1){
                       let _value = tp$Tools.getCurrentValue(_block, 'letter-spacing')
                        lhv = _value ? _value : getDefaultItems(_items);
                    }
                done(global$1.map(_items, function (item) {
                    lhv == item ? defaultSelection.set(item) : '';
                  return {
                    type: 'choiceitem',
                    text: item,
                    value: item
                  };
                }));
               
            },
            onAction: function (_api) {
              doAct(defaultSelection.getAction());
            },
            onItemAction: function (_api, value) {
               defaultSelection.set(value,value);
               doAct(value);
            }
        });

    editor.ui.registry.addNestedMenuItem('tpLetterspacing', {
        text: pluginName,
        icon: 'tpLetterspacing',
        getSubmenuItems: function(){
            var _block = editor.selection.getStart();
            var lhv = -1;
            if(lhv==-1){
                let _value = tp$Tools.getCurrentValue(_block, 'letter-spacing')
                lhv = _value ? _value : getDefaultItems(_items);
            }
           return global$1.map(_items, function (item) {
                return {
                    type: 'togglemenuitem',
                    text: item,
                    active : lhv===item ? true :false,
                    onAction: function() {
                        defaultSelection.set(item, item) 
                        doAct(item);
                    }
                };
          })
        },
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
