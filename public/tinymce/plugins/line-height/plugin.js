
 /**
 * line-height 1.0v 2021-07-18
 * The tinymce-plugins is used to set the line spacing
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2021, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
tinymce.PluginManager.add('line-height', function(editor, url) {
    var pluginName='设置行高';
    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    var lineheight_val = editor.getParam('line-height_val', '1 1.5 1.6 1.75 1.8 2 3 4 5');
    
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

    editor.on('init', function() {
        editor.formatter.register({
            "line-height": {
                selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table',
                styles: { 'line-height': '%value' }
            }
        });
    });
    var doAct = function (value) {
        editor.undoManager.transact(function(){
          editor.focus();
          editor.formatter.apply('line-height', { value: value });
       })
    };
    editor.ui.registry.getAll().icons['line-height'] || editor.ui.registry.addIcon('line-height','<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.984 12.984v-1.969h12v1.969h-12zM9.984 18.984v-1.969h12v1.969h-12zM9.984 5.016h12v1.969h-12v-1.969zM6 6.984v10.031h2.484l-3.469 3.469-3.516-3.469h2.484v-10.031h-2.484l3.516-3.469 3.469 3.469h-2.484z"></path></svg>');
    
    
    var _items = lineheight_val.split(' ');

    var getDefaultItems = function (_items) {
        return _items.length > 0 ? _items[0] : '';
      };
    var defaultSelection = Cell(getDefaultItems(_items));
  
    editor.ui.registry.addSplitButton('line-height', {
        icon: 'line-height',
        tooltip: pluginName,
        select: function (value) {
            return value === defaultSelection.get();
        },
        fetch: function (done) {
            var _dom = editor.dom;
            var _block = editor.selection.getSelectedBlocks();
            var lhv = -1;
                // _block = getChildren(_block,'span')
                if(lhv==-1){
                    lhv = _dom.getStyle(_block,'line-height') ? _dom.getStyle(_block,'line-height') : getDefaultItems(_items);
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

    editor.ui.registry.addNestedMenuItem('line-height', {
        text: pluginName,
        icon: 'line-height',
        getSubmenuItems: function(){
            var _dom = editor.dom;
            var _block = editor.selection.getSelectedBlocks();
            var lhv = -1;
                if(lhv==-1){
                    lhv = _dom.getStyle(_block,'line-height') ? _dom.getStyle(_block,'line-height') : '';
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
