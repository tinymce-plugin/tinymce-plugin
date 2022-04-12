/*! 
*  @plugin @tinymce-plugin/tp-indent2em
*  @version 0.0.9 (2022-4-7)
*  @description 导入word文档
*  @copyright (2022) Five(Li Hailong) https://github.com/tinymce-plugin/tp-indent2em
*/

(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["tp-indent2em"] = factory());
})(this, function() {
  "use strict";
  var stateSelectorAdapter = function(editor, selector) {
    return function(buttonApi) {
      return editor.selection.selectorChangedWithUnbind(selector.join(","), function(o, v) {
        buttonApi.setActive(parseInt(editor.dom.getStyle(editor.dom.getParent(v.node, "li,p,div"), "text-indent")) > 0 && o);
      }).unbind;
    };
  };
  var create = function(editor, data) {
    editor.undoManager.transact(function() {
      editor.focus();
      var _block = editor.selection.getStart();
      while (_block.nodeName !== "LI" && _block.nodeName !== "P" && _block.nodeName !== "DIV" && _block.nodeName !== "BODY") {
        _block = _block.parentNode;
      }
      editor.dom.getStyle(_block, "text-indent") ? editor.execCommand("tpIndent", false, "remove") : editor.execCommand("tpIndent");
    });
  };
  var setup = function(editor, opt2) {
    if (!editor.ui.registry.getAll().icons[opt2.registryName]) {
      editor.ui.registry.addIcon(opt2.registryName, opt2.icon);
    }
    editor.ui.registry.addToggleButton(opt2.registryName, {
      icon: opt2.registryName,
      tooltip: opt2.title,
      onAction: function() {
        return create(editor);
      },
      onSetup: stateSelectorAdapter(editor, [
        '*[style*="text-indent"]',
        '*[data-mce-style*="text-indent"]'
      ])
    });
    editor.ui.registry.addMenuItem(opt2.registryName, {
      icon: opt2.registryName,
      text: opt2.title,
      onAction: function() {
        return create(editor);
      }
    });
  };
  var register = function(editor, opt2) {
    editor.addCommand("mce".concat(opt2.registryName.substring(0, 1).toUpperCase() + opt2.registryName.substring(1)), function() {
      create(editor);
    });
  };
  var Plugin = function(opt2) {
    tinymce.PluginManager.add(opt2.registryName, function(editor, url) {
      setup(editor, opt2);
      register(editor, opt2);
      return {
        getMetadata: function() {
          return {
            name: opt2.name,
            url: opt2.repo
          };
        }
      };
    });
  };
  var opt = {
    name: "Indent2em",
    registryName: "tpIndent2em",
    title: "First line indent",
    repo: "https://github.com/tinymce-plugin/tp-indent2em",
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M170.666667 563.2v-102.4H887.466667v102.4zM170.666667 836.266667v-102.4H887.466667v102.4zM512 290.133333v-102.4H887.466667v102.4zM238.933333 341.333333V136.533333l204.8 102.4z"  p-id="5210"></path></svg>'
  };
  Plugin(opt);
  var main = {
    opt
  };
  return main;
});
