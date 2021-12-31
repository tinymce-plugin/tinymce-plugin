/**
 * extendgroups ( 0.0.1v)
* 
* https://github.com/Five-great/tinymce-plugins
* 
* Copyright 2021, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
*
* Licensed under MIT
*/
 (function () {
    'use strict';
   var Qedotor = null
    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');
    if(typeof Object.assign != 'function') {
      (function() {
          Object.assign = function(target) {
              'use strict';
              if(target === undefined || target === null) {
                  throw new TypeError('Cannot convert undefined or null to object');
              }
              var output = Object(target);
              for(var index = 1; index < arguments.length; index++) {
                  var source = arguments[index];
                  if(source !== undefined && source !== null) {
                      for(var nextKey in source) {
                          if(source.hasOwnProperty(nextKey)) {
                              output[nextKey] = source[nextKey];
                          }
                      }
                  }
              }
              return output;
          };
      })();
  }
    var getextendGroupsList  = function(editor){
      return Object.assign({ 
        alignmentdrop: {
          icon: 'align-left',
          tooltip: 'alignment',
          isSelect: true,
          type: 'choiceitem',
          styleSelector: 'text-align',
          onAction: function(editor,value){
            editor.formatter.apply('align' + value);
          },
          items: [{
              icon: 'align-left',
              text: '居左对齐',
              value: 'left',
            },
            {
              icon: 'align-center',
              text: '居中对齐',
              value: 'center',
             
            },
            {
              icon: 'align-right',
              text: '居右对齐',
              value: 'right',
            },
            {
              icon: 'align-justify',
              text: '两端对齐',
              value: 'justify',
            }]}}, editor.getParam('extend_groups',{},Object))
    };
    var getextendGroupsAddIcon = function(editor) {
        return editor.getParam('extend_groups_addicon',{},Object)
    }
      // editor.getParam('extend_groups',{},Object)
    var getDefaultItems = function (_items) {
      return _items.length > 0 ? typeof _items[0] === 'string'? _items[0] : _items[0].value : '';
    };
    var _$state = { isActive: false }
    var _$api = {
      createState: function( _item ){
        var _id = new Date().getTime()
         _$state[_id] = [ ]
         _item.stateId = _id
      },
      setState: function( id , v ) {
        _$state[_id] = v
      },
      getState: function( id ) {
        return _$state[_id]
      }
    }

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
    var doAct = function (editor,value,callback) {
      editor.undoManager.transact(function(){
        editor.focus();
        callback(editor,value)
      })
    };
    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    var commandFn = function (editor, cmd, val) {editor.execCommand(cmd,val)};
    var registerChoiceitem = function (editor ,registerName, registerObj){
      var items = registerObj.items;
      var defaultVal = Cell(getDefaultItems(registerObj.items));
      // registerObj.
      editor.ui.registry.addSplitButton(registerName, {
        icon: registerObj.icon,
        tooltip: registerObj.tooltip,
        select: function (value) {
          return registerObj.isSelect ? value === defaultVal.get() : false;
        },
        fetch: function (done) {
          done(global$1.map(items, function (item, index) {
            _$state[registerObj.stateId][index].get()? defaultVal.set(item.value) : ''
            return {
              type: 'choiceitem',
              icon: item.icon,
              text: item.text,
              value: item.value
            };
          }));
         
        },
        onAction: typeof registerObj.onAction === 'function' ? function(_api) {
          doAct(editor, defaultVal.getAction(), registerObj.onAction);
        } : function (_api) {
          choiceitemSelectFn(editor, defaultVal.getAction());
        },
        onItemAction: typeof registerObj.onAction === 'function' ? function(_api, value) {
          defaultVal.set(value, value);
          doAct(editor, value, registerObj.onAction);
        } :  function (_api, value) {
          defaultVal.set(value, value);
          choiceitemSelectFn(editor, value);
        }
      });
      var choiceitemSelectFn = function (editor, cmd) {editor.execCommand(cmd)};
    }
    var registerTogglemenuitem = function (editor ,registerName, registerObj) {
      var items = registerObj.items;
      var defaultVal = Cell(getDefaultItems(registerObj.items));
      editor.ui.registry.addMenuButton(registerName, {
        icon: registerObj.icon,
        tooltip: registerObj.tooltip,
        fetch: function (done) {
          done(global$1.map(items, function (item) {
            switch(item.type){
               case 'selectItem':
                      return createSelectItem(editor, item)
                      break;
               default:
                      return createTogglemenuitem(editor, item)
            }
          }));
         
        }
      });
      var createSelectItem = function(editor, _item) {
        var _items = _item.value.split(' ');
        var _createSelectItem = {
                type: 'nestedmenuitem',
                text: _item.text || '',
                getSubmenuItems: function () {
                return global$1.map(_items, function (item, index) {
                  return {
                    type: 'togglemenuitem',
                    text: item,
                    value: item,
                    active:  _$state[_item.stateId][index].get(),
                    onAction: function(_api) {
                      doAct(editor, item, _item.onAction);
                    },
                  };
            })
          }
        }
        _item.icon? _createSelectItem.icon = _item.icon : ''
        return _createSelectItem;
      };
      var createTogglemenuitem = function(editor, _item) {
        _item.buttonApi && _item.buttonApi.setActive ? '' :
        _item.buttonApi = {
          isActive: function (){
            return false;
          },
          setActive: ''
        };
       _item.isActive = false
       return !( _item.selector || _item.styleSelector ) ? {
          type: 'togglemenuitem',
          icon: _item.icon || '',
          text: _item.text,
          value: _item.value,
          active: _item.isActive,
          onAction: function(_api) {
            _item.isActive = !_item.isActive
              commandFn(editor,_item.value)
          }
       } : {
        type: 'togglemenuitem',
        icon: _item.icon||'',
        text: _item.text,
        value: _item.value,
        active: _item.buttonApi.isActive(),
        onAction: function(_api) {
            commandFn(editor,_item.value)
        },
        onSetup: _item.buttonApi.setActive ? function () {}: stateSelectorAdapter(editor,setSelectorAdapter(_item) , _item)
       };
      }
      var stateSelectorAdapter = function (editor, selector, _item) {
        if( _item.buttonApi.setActive ) {
          return {}
        }else{
          return function (buttonApi) {
            _item.buttonApi = buttonApi
           return editor.selection.selectorChangedWithUnbind(selector.join(','),buttonApi.setActive).bind;
          }
        }
      };
    }
 
    var register$1 = function (editor ,registerName, registerObj) {
        switch(registerObj.type){ 
           case 'choiceitem':
              registerChoiceitem(editor ,registerName, registerObj)
              break;
           case 'togglemenuitem': 
              registerTogglemenuitem(editor ,registerName, registerObj)  
              break;
        }
    };
    var setSelectorAdapter = function( _item , _val) {
      return !_item.selector ? [
             '*[style*="'+( _val ? ( _item.styleSelector +': '+ _val):_item.styleSelector)+'"]',
             '*[data-mce-style*="'+( _val ? ( _item.styleSelector +': '+ _val):_item.styleSelector)+'"]'
            ] : [ ''+_item.selector ]
    
    }
    var createStateSelectItem = function(_item) {
      var _items = _item.value.split(' ');
          _$api.createState(_item)
         global$1.map(_items, function (item, index) {
            _$state[_item.stateId].push(Cell(false))
            setTimeout(function(){
              Qedotor.selection.selectorChangedWithUnbind(setSelectorAdapter(_item,item).join(','),_$state[_item.stateId][index].set).unbind
            },2000)
         })
    }
    var createStateTogglemenuitem = function (params) {
        
    }
    var registerStateTogglemenuitem = function (editor ,registerName, registerObj) {
          var items = registerObj.items;
          global$1.map(items, function (item) {
          switch(item.type){
              case 'selectItem':
                  createStateSelectItem( item)
                  break;
              default:
                  createStateTogglemenuitem(item)
          }
        })
    }
    var registerStateChoiceitem = function(editor ,registerName, registerObj){
      var items = registerObj.items;
      if(registerObj.styleSelector){
        _$api.createState(registerObj)
        global$1.map(items, function (item, index) {
          _$state[registerObj.stateId].push(Cell(false))
          setTimeout(function(){
            Qedotor.selection.selectorChangedWithUnbind(setSelectorAdapter(registerObj, item.value).join(','),_$state[registerObj.stateId][index].set).unbind
          },2000)
        })
      }
    }
    var register$State = function(editor ,registerName, registerObj) {
      switch(registerObj.type){ 
        case 'choiceitem':
           registerStateChoiceitem(editor ,registerName, registerObj);
           break;
        case 'togglemenuitem': 
           registerStateTogglemenuitem(editor ,registerName, registerObj)  
           break;
     }
    }
    function Plugin () {
      global.add('extendgroups', function (editor) {
        Qedotor = editor
        var  list  = getextendGroupsList(editor)
        var  listAddIcon = getextendGroupsAddIcon(editor)
          global$1.each(list, function(_item, key){
            register$1(editor,key,_item);
            register$State(editor,key,_item)
          })
           global$1.each(listAddIcon, function(_item, key){
            editor.ui.registry.addIcon(key,_item);
          })
      });
    }
  
    Plugin();
}());
