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
tinymce.PluginManager.add('tpIndent2em', function(editor, url) {
    var pluginName='First line indent';
    var indent2em_val = editor.getParam('indent2em_val', '2em');
    var doAct = function () {
        editor.undoManager.transact(function(){
            editor.focus();
            var _block = editor.selection.getStart();
            while(_block.nodeName !== 'LI'&&_block.nodeName !== 'P'&& _block.nodeName !== 'DIV' &&_block.nodeName !== 'BODY'){
                _block = _block.parentNode
            }
            editor.dom.getStyle(_block,'text-indent') ? editor.execCommand('tpIndent',false,'remove'):editor.execCommand('tpIndent')
            
        });
    };
    var stateSelectorAdapter = function (editor, selector) {
      return function (buttonApi) {
        return editor.selection.selectorChangedWithUnbind(selector.join(','),function (o, v) {
          buttonApi.setActive(parseInt(editor.dom.getStyle(editor.dom.getParent(v.node, 'li,p,div'), 'text-indent')) > 0 && o)
        } ).unbind;
      };
    };
 
    editor.ui.registry.addToggleButton('tpIndent2em', {
        icon: 'tpIndent2em',
        tooltip: pluginName,
        onAction: function () {
            doAct();
        },
        onSetup: stateSelectorAdapter(editor, [
          '*[style*="text-indent"]',
          '*[data-mce-style*="text-indent"]',
        ])
    });
    editor.ui.registry.addMenuItem('tpIndent2em', {
        text: pluginName,
        icon: 'indent2em',
        onAction: function() {
            doAct();
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
