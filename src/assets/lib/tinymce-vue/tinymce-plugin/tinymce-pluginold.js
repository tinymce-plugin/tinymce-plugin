import { assign } from "markdown-it/lib/common/utils";

!function(tp$tinymce){
    'use strict';
    if(typeof tp$tinymce === "undefined" ){
      throw new Error('tinymce undefined');
    }
    console.log(tp$tinymce);
 
    let global$1 = tp$tinymce.util.Tools
    let global$7 = tp$tinymce.html.Node;
    let global$4 = tp$tinymce.html.Schema;
    let global$6 = tp$tinymce.util.XHR;
    var global$11 = tp$tinymce.util.I18n;
    let flag = false;
  
    var keys = Object.keys;
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
    var hasOwnProperty = Object.hasOwnProperty;
    var isNullable = function (a) {
      return a === null || a === undefined;
    };
    var isNonNullable = function (a) {
      return !isNullable(a);
    };
    var has = function (obj, key) {
      return hasOwnProperty.call(obj, key);
    };
  
    var getDimension = function (node, styles, dimension, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }
      var value = node.attr(dimension);
      if (isNonNullable(value)) {
        return value;
      } else if (!has(styles, dimension)) {
        return defaultValue;
      } else {
        return null;
      }
    };
  
    /**
     * .tp-tabs > .tp-tabs_top > .tp-tabs_label.checked { } 
     *             ↓
     * .tp-tabs > input:nth-child(1):checked ~ .tp-tabs_top > .tp-tabs_label:nth-child(1) {}
     * .tp-tabs > input:nth-child(1):checked ~ .tp-tabs_top > .tp-tabs_label:nth-child(2) {}
     * @param {String} className - Converted style class name | 转换的样式类名
     * @param {String} styleValue - Converted styles | 转换的样式
     * @param {Number} length - Converted styles quantity | 转换的样式数量
     * 
     */
    let styleCheckedConvert = (className, styleValue, quantity) => {
        let _output = '\n';
        for(let i = 0 ;i< quantity; i++){
            _output += `.tp-tabs > input:nth-child(${i+1}):checked ~ .tp-tabs_top > .tp-tabs_label:nth-child(${i+1}){${styleValue}}\n
                 .tp-tabs > input:nth-child(${i+1}):checked ~ .tp-tabs_main > .tp-tab_main:nth-child(${i+1}){ max-height: 10000px; }\n
              ` 
        }
        return _output
    }
    /**
     * 
     * @param {Editor} editor - editor | 编辑器实例
     * @param {Element} _self -   | 节点实例
     * @param {String} cmd - Converted styles quantity | 转换的样式数量
     * @param {Object} _customTag - Converted styles quantity | 转换的样式数量
     * 
     */

    let tp$SetSpecialStyle = function(editor, _self, specialStyleClass,  specialStyleValue){
        if(editor.tp$Style.mapping && editor.tp$Style.mapping[''+_self.getAttribute('data-id')]){
            editor.tp$Style.mapping[''+_self.getAttribute('data-id')].specialStyle[''+specialStyleClass] = specialStyleValue
        } 
    }
    /**
     * 
     * @param {Editor} editor - editor | 编辑器实例
     * @param {Element} _self -   | 节点实例
     * @param {String} cmd - Converted styles quantity | 转换的样式数量
     * @param {Object} _customTag - Converted styles quantity | 转换的样式数量
     * 
     */
    let tp$ComponentSetStyleMapping = function(editor, _self, cmd, _customTag) {
        !editor.tp$Style.mapping ? editor.tp$Style.mapping = {} : ''
        !editor.tp$Style.mapping[''+_self.getAttribute('data-id')] ? editor.tp$Style.mapping[''+_self.getAttribute('data-id')] = {
            styleCustomTags: _customTag.name,
            stylePath: _customTag.name ==='buttons' ? 'styleSheetList' : 'styleSheetLoadList' ,
            styleTemplate: _self.getAttribute('data-style') || 'default',
            quantity: (_self.children.length-1),
            specialStyle: {

            }
         }: __assign(editor.tp$Style.mapping[''+_self.getAttribute('data-id')], {  styleTemplate: _self.getAttribute('data-tp-style') || 'default', quantity: (_self.children.length-1), })
       
    }
 
    const  tp$getStyleValue = function( key, str ) { 
        var m = str ? str.match( new RegExp(key + ':(.+?)"?[;}]') ): '';
        return m ? m[ 1 ] : false;
    }
    let tp$Component = {
          customTags: {
            tabs:{
                name: 'tabs',
                styleSheet:{
                    selector : 'default',
                    styleSheetList: {
                        default: {
                          'tp-tabs': ``,
                          'tp-tabs_top': ``,
                          'tp-tabs_label.checked': ` `,
                          'tp-tabs_main': ` `,
                          'tp-tab_main.checked': ` `,
  
                        }
                    }
                    
                },
                styleSheetLoadList: {
  
                },
                styleFn: () => {
  
  
                },
                state: {
                   count: 0
                },
                tpComponentDeleteFn: function(){
                    console.log(this);
                },
                tpComponentMonitorCmd: () =>{
  
                },
                tpComponentCmdFn:{
                   tabAdd: (_self, _props) => {
                     let partitionEditableWrapper = document.createElement('div');
                     partitionEditableWrapper.setAttribute('contenteditable', false);
                     partitionEditableWrapper.setAttribute('class', 'tp-partition tp-tabs_label');
                     partitionEditableWrapper.setAttribute('data-idx', _self.tp$state.count);
                     let partitionEditableWrapperChlid = document.createElement('p');
                     partitionEditableWrapperChlid.setAttribute('class', 'tp-component_inline');
                     partitionEditableWrapperChlid.setAttribute('data-idx', _self.tp$state.count);
                     partitionEditableWrapperChlid.setAttribute('contenteditable',true);
                     partitionEditableWrapperChlid.innerHTML = _props.title;
                     partitionEditableWrapper.appendChild(partitionEditableWrapperChlid);
                     _self.insertBefore( partitionEditableWrapper,_self.lastChild);
                     let partitionEditableMain = document.createElement('div');
                     partitionEditableMain.setAttribute('class', 'tp-tab_main')
                     partitionEditableMain.setAttribute('style', 'overflow: hidden; max-height: 0; transition: all 0s')
                     partitionEditableMain.innerHTML = _props.content;
                     _self.lastChild.appendChild(partitionEditableMain)
                     _self.tp$state.count++;
                     
                  },
                  tabDelete: (_self, _props)=>{
                    _self.children[(--_self.tp$state.count)].remove()
                    _self.lastChild.lastChild.remove()
                  },
                  delete: (_self, _props) => {
                    _self.remove()
                  },
                  getStyle: (_self, _props) =>{
                      
                  },
                  setStyle: (_self, _props ) =>{``
                    //   console.dir();
                    console.log(_self.querySelector('.tp-tabs_top'));
                    _self.setAttribute('data-top-style', _props['tp-tabs_top'] )
                    _self.shadowRoot.querySelector('.tp-tabs_top').setAttribute('style', _props['tp-tabs_top'] ) 
                    //   _self.shadowRoot.children['tpComponentStyle_' + _self.getAttribute('data-id')].innerText?
                    //   _self.shadowRoot.children['tpComponentStyle_' + _self.getAttribute('data-id')].innerText = _self.shadowRoot.children['tpComponentStyle_' + _self.getAttribute('data-id')].innerText + ':host { border-radius: 26px 26px 0 0}'
                    //   :''
                    //   console.log(_props);
                  }
                },
                template: {
                  innerHTML: `
              <div class="tp-tabs">
                <div class="tp-tabs_top" id="headerID">
                    <slot></slot>
                </div>
                <div class="tp-tabs_main">
                    <slot name="content" ></slot>
                </div>
              </div>
                  `,
                },
                connectedCallback: (shadowRoot, dom) =>{
                    // console.log('sdsd');
                    let isChecked = (ele) =>{
                        return ele.className && ele.className.indexOf("tp-partition tp-tabs_label") !== -1 ||
                               ele.parentNode && (ele.parentNode.className  && ele.parentNode.className.indexOf("tp-partition tp-tabs_label") !== -1 || 
                               ele.parentNode.parentNode && ele.parentNode.parentNode.className && ele.parentNode.parentNode.className.indexOf("tp-partition tp-tabs_label") !== -1 )
                    }
                    shadowRoot.getElementById('headerID').addEventListener('click', function(e){
                       if(isChecked( e.target)){
                        //    console.log(e.target);
                           let _idex = e.target.getAttribute('data-idx') || e.target.parentNode.getAttribute('data-idx') || '0'; 
                           let _tabsToplist =  dom.querySelectorAll('div.tp-partition.tp-tabs_label');
                           let  oldSelectTopDom = dom.querySelector('div.tp-partition.tp-tabs_label.checked');
                           oldSelectTopDom ? oldSelectTopDom.setAttribute('class','tp-partition tp-tabs_label') : '';
                           let newSelectTopDom = _tabsToplist[_idex];
                           newSelectTopDom ? newSelectTopDom.setAttribute('class','tp-partition tp-tabs_label checked') : '';
                           let _tabslist =  dom.querySelectorAll('div.tp-tab_main');
                           let  oldSelectDom = dom.querySelector('div.tp-tab_main[contenteditable=true]');
                           oldSelectDom ? oldSelectDom.setAttribute('contenteditable',false) ||  (oldSelectDom.style.maxHeight = '0px')  : '';
                           let newSelectDom = _tabslist[_idex];
                           newSelectDom ? newSelectDom.setAttribute('contenteditable',true) || (newSelectDom.style.maxHeight = '10000px') : '';
                       }
                    });
                },
                isContentEditable: true,
                contentEditableFn: (_self, _isEditable, _customtag) => {
                  // console.log(_self);
                    if(_self.lastChild && _self.lastChild.className === 'tp-' +_customtag + '_main'){
                        const partitionEditableWrapper = document.createElement('div');
                        partitionEditableWrapper.setAttribute('contenteditable', false);
                        partitionEditableWrapper.setAttribute('class','tp-partition tp-tabs_main');
                        partitionEditableWrapper.setAttribute('slot', 'content');
                        
                        if(_self.lastChild.firstChild){
                            _self.lastChild.firstChild.setAttribute('class', 'tp-tab_main')
                            _self.lastChild.firstChild.setAttribute('style', 'overflow: hidden; max-height: 10000px; transition: all 0s')
                            _isEditable ? _self.lastChild.firstChild.setAttribute('contenteditable', true) : '';
                            partitionEditableWrapper.setAttribute('style', _self.lastChild.getAttribute('style'));
                            partitionEditableWrapper.appendChild(_self.lastChild.firstChild)
                        }
                        while (_self.lastChild.firstChild) {
                          _self.lastChild.firstChild.setAttribute('class', 'tp-tab_main')
                          _self.lastChild.firstChild.setAttribute('style', 'overflow: hidden; max-height: 0; transition: all 0s')
                          partitionEditableWrapper.appendChild(_self.lastChild.firstChild)
                       }
                    _self.removeChild(_self.lastChild);
                    _self.appendChild(partitionEditableWrapper);
                  }
                },
                isHeaderEditable: true,
                headerEditableFn: (_self, _isEditable, _customtag) => {
                    let _len = _self.children.length;
                    let _for = _self.getAttribute("data-id")
                  _self.shadowRoot.querySelector('#headerID.tp-tabs_top').setAttribute('style',( _self.getAttribute("data-top-style") ? _self.getAttribute("data-top-style") : ''));
                    for(let i = _len-2; i>=0;i--){
                            _self.tp$state.count ++;
                        // if( _self.children[i].className !== 'tp-' +_customtag + '_main'){
                            _self.children[i].setAttribute('contenteditable', false);
                            _self.children[i].setAttribute('class', 'tp-partition tp-' +_customtag + '_label'+( i=== 0 ? ' checked': '' ) );
                            _self.children[i].setAttribute('data-idx', i);
                            _self.children[i].firstChild.setAttribute('class', 'tp-component_inline');
                            _self.children[i].firstChild.setAttribute('data-idx', i);
                            _isEditable ? _self.children[i].firstChild.setAttribute('contenteditable', true) : '';
                        // }
                    }
                },
                parserFn: (node, customtag) => { //解析组件标签
                    node.attr({
                      'data-tp-component': null,
                      'data-mce-tp-component': customtag,
                      'data-top-style': node.firstChild.attr('style')
                    });
                    while ( node.firstChild.name === 'input') {
                        node.firstChild.remove()
                    }
                    let _node = node.firstChild.firstChild;
                    while (_node && _node.name ==='label') {
                          let _nextNode = _node.next;
                          let placeTop = new global$7('div', 1);
                          _node.name = 'p';
                          _node.wrap(placeTop)  
                          _node = _nextNode;
                    }
                    node.firstChild.unwrap()
                    // node.lastChild.prev.remove();
                    // node.lastChild.attr('class', 'tp-' + customtag + '_main');
                    node.type = 1;
                    node.name = 'tp-' + customtag;
                  //   console.log(node);
                },
                serializerFn: (node, customtag ) => { //序列化组件标签
                  node.attr({
                      'data-mce-tp-component': null, 
                      'data-tp-component': customtag,
                      'contenteditable': null,
                      'class': 'tp-' + customtag,
                  })
                let placeTop = new global$7('div', 1);
                placeTop.attr("class", 'tp-tabs_top')
                placeTop.attr("style", node.attr('data-top-style'))
                node.attr('data-top-style', null)
                let _node = node.firstChild;
                while (_node.attr('data-idx')) {
                    let _nextNode = _node.next;
                    _node.firstChild.name = "label"
                    _node.firstChild.attr({
                        contenteditable: null,
                        'data-idx': null,
                        class: 'tp-' + customtag+ '_label',
                        for: node.attr('data-id') + 'tab' + _node.attr('data-idx')
                    })
                    placeTop.append(_node.firstChild)
                    _node.remove();
                    _node = _nextNode;
                }
                let _lastNode = node.lastChild.firstChild;
                let _count = 0;
                while (_lastNode && _lastNode.attr('class')==='tp-tab_main') {
                    let _nextNode = _lastNode.next;
                    let placeInput = new global$7('input', 1);
                    placeInput.shortEnded = true;
                    placeInput.attr({ id:  node.attr('data-id') + 'tab' + _count, type: 'radio', name: node.attr('data-id') })
                    _count==0 ? placeInput.attr('checked','') : '';
                    node.append(placeInput)
                    _lastNode.attr({
                     contenteditable: null,
                     style: null
                    })
                    _count++;
                    _lastNode = _nextNode;
                }
                node.append(placeTop)
                node.firstChild.attr({
                    contenteditable: null,
                    class: 'tp-tabs_main'
                })
                node.append(node.firstChild)
                  node.type = 1;
                //   node.attr('data-id', null)
                  node.name = 'div';
            
                }
            },
             collapse: {
              name: 'collapse',
              template: {
                innerHTML: `
           <div class="tp-collapse">
            <div class="header" id="headerID">
              <slot name="header"></slot>
            </div>
            <div class="tp-collapse_mainBox">
                <slot></slot>
            </div>
            </div>
                `,
              },
              isContentEditable: true,
              connectedCallback: ()=>{

              },
              tpComponentCmdFn:{
                upData: (_self, _props) => {
                    let _style  = _props.style
                    let padding_style = tp$getStyleValue('padding',_style)
                    let border_style = tp$getStyleValue('border',_style)
                    let borderWidth_style = tp$getStyleValue('border-width',_style)
                     tp$SetSpecialStyle( _props.editor, _self,'tp-collapse_main', (padding_style ? 'padding: '+padding_style+'!important; ':'' )+ (border_style ? 'border: '+border_style+'!important;':'') + (borderWidth_style ? 'border-width: '+ borderWidth_style+'!important;':'')) 
                }
              },
              contentEditableFn: (_self, _isEditable, _customtag, editor) => {
                  const partitionEditableWrapper = document.createElement('div');
                  partitionEditableWrapper.setAttribute('contenteditable', false);
                  partitionEditableWrapper.setAttribute('class','tp-partition tp-collapse_main');
                  _isEditable ? _self.lastChild.setAttribute('contenteditable', true): '';
                //   console.log(_self.lastChild.getAttribute('class'));
                  if( _self.lastChild.getAttribute('class') === 'tp-collapse_main'){
                    let _style  =   _self.lastChild.getAttribute('style')
                    let padding_style = tp$getStyleValue('padding',_style)
                    let border_style = tp$getStyleValue('border',_style)
                    let borderWidth_style = tp$getStyleValue('border-width',_style)
                    tp$SetSpecialStyle(editor, _self,'tp-collapse_main', (padding_style ? 'padding: '+padding_style+'!important; ':'' )+ (border_style ? 'border: '+border_style+'!important;':'') + (borderWidth_style ? 'border-width: '+ borderWidth_style+'!important;':'')) 
                  }
                 partitionEditableWrapper.appendChild(_self.lastChild)
                  _self.appendChild(partitionEditableWrapper);
              
              },
              isHeaderEditable: true,
              headerEditableFn: (_self, _isEditable, _customtag , editor) => {
                if(_self.firstChild.contenteditable !== 'true'){
                    const headerWrapper = document.createElement('div');
                    _isEditable ? headerWrapper.setAttribute('contenteditable', true) : '';
                    headerWrapper.setAttribute('slot', 'header');
                    headerWrapper.setAttribute('class', 'tp-collapse_label');
                    headerWrapper.setAttribute('style', 'min-height: 20px; '+ _self.getAttribute('data-top-style'));
                   
                    while ( _self.firstChild && _self.firstChild.className !== 'tp-'+ _customtag + '_main' ) {
                      headerWrapper.appendChild( _self.firstChild)
                    }
                    _self.insertBefore(headerWrapper, _self.firstChild)
                }
               
              },
              parserFn: (node, customtag) => { //解析组件标签
                  node.attr({
                    'data-tp-component': null,
                    'data-mce-tp-component': customtag
                  });
                  // let placeP = new global$7('p', 1);
                  // node.firstChild.name === 'le' ? node.firstChild.wrap(placeP) : ''
                  node.attr('data-id', node.firstChild.attr('id'));
                  node.firstChild.remove();
                  node.lastChild.attr('class', 'tp-' + customtag + '_main');
                  node.type = 1;
                  node.name = 'tp-' + customtag;
                //   console.log(node);
              },
              serializerFn: (node, customtag ) => { //序列化组件标签
                node.attr({
                    'data-mce-tp-component': null, 
                    'data-tp-component': customtag,
                    'contenteditable': null,
                    'class': 'tp-' + customtag,
                })
                // node.firstChild
                node.firstChild.type = 1;
                node.firstChild.name = "label";
                node.firstChild.attr({
                  contenteditable: null,
                  for: node.attr('data-id')
                })
                let mainStyle = node.lastChild.attr('style')
                node.lastChild.unwrap();
                node.lastChild.attr({
                  contenteditable: null,
                  class: 'tp-'+customtag+'_main',
                  style: mainStyle
                })
                let placeInput = new global$7('input', 1);
                placeInput.shortEnded = true;
                placeInput.attr({ id: node.attr('data-id'), type: 'checkbox'})
                node.insert(placeInput, node.firstChild, true)
                node.attr('data-id', null)
                node.type = 1;
                node.name = 'div';
              }
            },
            buttons: {
              name: 'buttons',
              template: {
                innerHTML: `
           <div class="tp-buttons">
            <div class="tp-buttons_main">
                <slot></slot>
            </div>
            </div>
                `,
              },
                styleSheetList: {
                    default: {
                      'tp-buttons': `

                      display: inline-block;
                      background: rgb(179, 70, 70);
                      padding: 14px 25px;
                      color: #333;
                      border-radius: 8px;
                      -webkit-transition: all .2s ease-in-out;
                      transition: all .2s ease-in-out;
                      border: 1px solid transparent;
                      box-sizing: border-box;
                      word-wrap: break-word;
                      cursor: pointer;
                      text-decoration: none;`,
                       'tp-buttons:hover': `
                       color: rgb(179, 70, 70) ;
                       background: transparent;
                       border-color: rgb(179, 70, 70) ;
                       `,
                      'tp-buttons::before': ` `,
                      'tp-buttons::after': ` `,
                    }
              },
              isContentEditable: true,
              connectedCallback: ()=>{

              },
              tpComponentCmdFn:{
                upData: (_self, _props) => {
                   _self.shadowRoot.children[1].textContent = getButtonsStyle(_props.editor.tp$CustomTags.buttons.styleSheetList[_props.styleName], _props.styleName).replace(/\[data-tp-style=(.*?)\]/g, '').replace(/>/g,' ').replace(/.tp-buttons\s*\{/g,':host   {').replace(/.tp-buttons:hover\s*\{/g,':host(:hover)   {').replace(/.tp-buttons::before\s*\{/g,':host(::before)   {').replace(/.tp-buttons::after\s*\{/g,':host(::after)   {');
                    // let _style  = _props.style
                    // let padding_style = tp$getStyleValue('padding',_style)
                    // let border_style = tp$getStyleValue('border',_style)
                    // let borderWidth_style = tp$getStyleValue('border-width',_style)
                    //  tp$SetSpecialStyle( _props.editor, _self,'tp-collapse_main', (padding_style ? 'padding: '+padding_style+'!important; ':'' )+ (border_style ? 'border: '+border_style+'!important;':'') + (borderWidth_style ? 'border-width: '+ borderWidth_style+'!important;':'')) 
                }
              },
              contentEditableFn: (_self, _isEditable, _customtag, editor) => {
                  console.log(_self);
                    if(_self.firstChild && _self.firstChild.tagName === 'A'){
                      const Wrapper = document.createElement('p');
                      Wrapper.setAttribute('contenteditable', true)
                      Wrapper.setAttribute('class', 'tp-component_inline')
                      _self.firstChild.innerHTML = '<span>'+ _self.firstChild.innerHTML+'</span>'
                      _self.firstChild.setAttribute('href','javascript:;')
                     
                      Wrapper.appendChild(_self.firstChild)
                    
                      _self.appendChild(Wrapper)
                      // _self.firstChild.setAttribute('contenteditable', true)
                      // _self.firstChild.setAttribute('class', 'tp-component_inline')
                    }
              },
              isHeaderEditable: true,
              // headerEditableFn: (_self, _isEditable, _customtag , editor) => {
              //   // if(_self.firstChild.contenteditable !== 'true'){
              //   //     const headerWrapper = document.createElement('div');
              //   //     _isEditable ? headerWrapper.setAttribute('contenteditable', true) : '';
              //   //     headerWrapper.setAttribute('slot', 'header');
              //   //     headerWrapper.setAttribute('class', 'tp-collapse_label');
              //   //     headerWrapper.setAttribute('style', 'min-height: 20px; '+ _self.getAttribute('data-top-style'));
                   
              //   //     while ( _self.firstChild && _self.firstChild.className !== 'tp-'+ _customtag + '_main' ) {
              //   //       headerWrapper.appendChild( _self.firstChild)
              //   //     }
              //   //     _self.insertBefore(headerWrapper, _self.firstChild)
              //   // }
               
              // },
              parserFn: (node, customtag, editor) => { //解析组件标签
                  node.attr({
                    'data-tp-component': null,
                    // 'data-mce-tp-component': customtag
                  });

                  let _text = node.attr('style')
                  let placeDivStyle = { }
                  let _tem = ''
                  _tem = tp$getStyleValue('margin', _text)
                  _tem && (placeDivStyle.margin = _tem) 
                  _tem = tp$getStyleValue('padding', _text)
                  _tem && (placeDivStyle.padding = _tem) 
                  _tem = tp$getStyleValue('border', _text)
                  _tem && (placeDivStyle.border = _tem) 
                  _tem = tp$getStyleValue('background', _text)
                  _tem && (placeDivStyle['background'] = _tem) 
                  _tem = tp$getStyleValue('border-radius', _text)
                  _tem && (placeDivStyle['border-radius'] = _tem) 
                  _tem = tp$getStyleValue('border-width', _text)
                  _tem && (placeDivStyle['border-width'] = _tem) 
                  _tem = tp$getStyleValue('border-style', _text)
                  _tem && (placeDivStyle['border-style'] = _tem) 
                  _tem = tp$getStyleValue('border-color', _text)
                  _tem && (placeDivStyle['border-color'] = _tem) 
                  // let placeP = new global$7('p', 1);
                    // placeP.attr('contenteditable', true)
                  let placeDiv = new global$7('div', 1);
                  placeDiv.type = 1;
                  placeDiv.attr({
                    'is': 'tp-buttons',
                    'data-mce-tp-component': customtag,
                    'data-tp-style': node.attr('data-tp-style') || 'default',
                    'style': getFormatStyle(placeDivStyle) || null,
                    'data-id': node.attr("data-id")
                  })
                  node.attr('class') && placeDiv.attr('class',node.attr('class'))
                  !editor.tp$Style.mapping ? editor.tp$Style.mapping = {} : ''
                  !editor.tp$Style.mapping[''+ node.attr("data-id")] ? editor.tp$Style.mapping[''+ node.attr("data-id")] = {
                      styleCustomTags:'buttons',
                      stylePath:  'styleSheetList',
                      styleTemplate: node.attr('data-tp-style')|| 'default',
                      specialStyle: {
          
                      }
                   }: __assign(editor.tp$Style.mapping[''+node.attr("data-id")], {  styleTemplate: node.attr('data-tp-style') || 'default'})


                  node.attr('style', getFormatStyle(__assign(getObjStyle(node.attr('style'))|| {},{margin: '', padding: '',background: '','border-style': '' , 'border-color': '','border-width': '','border-radius': '', border: ''}))|| null) 
                  // console.log(node.attr('style'));
                  node.attr("data-id", null)
                  node.attr("data-mce-style", null)
                  node.wrap(placeDiv)
                  placeDiv.name = 'span'
                  node.name == 'span' &&  node.unwrap()
                  // console.log(placeDiv);/
                 
              },
              serializerFn: (node, customtag ) => { //序列化组件标签
                let ATags = node
               
                // console.log( new tinymce.html.Serializer().serialize());
                //firstChild && node.firstChild.firstChild && node.firstChild.firstChild.name === 'a';
                while (ATags.name !== 'a' &&ATags.firstChild&& ATags.firstChild.name!=='#text') {
                     ATags = ATags.firstChild
                }
              
                node.attr({
                    'data-mce-tp-component': null, 
                    'data-tp-component': customtag,
                    'contenteditable': null,
                    'class': 'tp-' + customtag,
                    'data-tp-style': node.attr('data-tp-style') || 'default',
                     'href': ATags && ATags.attr('href') ? ATags.attr('href') : null,
                     'style': ATags && ATags.attr('style') ? getFormatStyle( __assign(getObjStyle(node.attr('style'))|| {},getObjStyle(ATags.attr('style'))||{})) : node.attr('style') ,
                     'target': ATags && ATags.attr('target') ? ATags.attr('target') : null,
                     'rel': ATags && ATags.attr('rel') ? ATags.attr('rel') : null,
                     'title': ATags && ATags.attr('title') ? ATags.attr('title') : null
                })
                // node.firstChild && node.firstChild.unwrap()
                ATags&&ATags.unwrap()
                node.name = 'a';
                console.log(new tinymce.html.Serializer().serialize(node));
               
                // console.log(node);
              }
            }
          }
      }

      /**
     * 
     * @param {Element} _block 
     * @param {String} _styleName 
     * 
     * */   
     let tp$getFirstStyleValue = (_block, _styleName)=>{
      let _resValue = ''
      if(!_block) return ''
      _styleName = toHump(_styleName)
      while(_block.nodeName && _block.nodeName.toLowerCase() !== '#text'){
         _resValue =  _block.style[_styleName]
         _block = _block.firstChild
      }
      return _resValue
     }
   /**
     * @param {Editor} editor 
     * @param {Number} value  -
     * @param {Element} blocks 
     * 
     * */   
    let  toUpdateIndent2em = (editor, value, blocks)=>{
        blocks =  blocks || editor.selection.getSelectedBlocks();
        global$1.each(blocks, function(block){
          if(editor.dom.getStyle(block,'text-indent') || value){
              let kv = "";
              let kl = "";
               if(value==='remove'){ 
                (-parseInt(editor.dom.getStyle(block,'text-indent')))== parseInt(editor.dom.getStyle(block,'margin-left')) && editor.dom.setStyle(block, 'margin-left', null)
                 editor.dom.setStyle(block, 'text-indent', null);
               } else {
                value = parseInt(value) || 2;
                if(block&& block.firstChild){
                  kv =  tp$getFirstStyleValue( block, 'font-size');
                  kl =  tp$getFirstStyleValue( block, 'letter-spacing');
                  if(kv) {kv=(parseInt(kv)+parseInt((kl?kl:0)))*value+'px';}
                  else kv=(parseInt((kl?kl:0))+16)*value+'px';
                }
                value > 0 && (-parseInt(editor.dom.getStyle(block,'text-indent'))) == parseInt(editor.dom.getStyle(block,'margin-left')) && editor.dom.setStyle(block, 'margin-left', null)
                editor.dom.setStyle(block, 'text-indent', kv?kv: value+'em');
                value < 0 && editor.dom.setStyle(block, 'margin-left', kv? kv.replace(/^-/, '') : (-value+'em'));
               }
            
          }
       })

    }
    /**
     * @param {String} fnName - Converted style class name | 转换的样式类名
     * @param {String} styleValue - Converted styles | 转换的样式
     * @param {Number} length - Converted styles quantity | 转换的样式数量
     * 
     * */   
      let getTp$ComponentFn = function( customTag , fnName){
       if( typeof customTag[fnName] === 'function') return _customTag[fnName]
       if( typeof  tp$Component.customTags[customTag.name][fnName] === 'function') return tp$Component.customTags[customTag.name][fnName]
       return function(){};
      }
      let tp$createSpecialStyle = (_output, classNameMapping) => {
          let styleStr = ''
        keys( _output.specialStyle ).forEach( _obj =>{
            // console.log(_obj);
            styleStr += _output.specialStyle[_obj] ?  '\n '+classNameMapping[_obj] +' { '+ _output.specialStyle[_obj]+'} ' : ''
           
        }) 
        return styleStr;
      }
      let getButtonsStyle = ( _obj, _style ) => {
        let _styleStr = ''
        _styleStr +=  _obj['tp-buttons'] ? '.tp-buttons[data-tp-style="'+ _style +'"] {'+ _obj['tp-buttons'] +'}\n' : ''
        _styleStr +=  _obj['tp-buttons:hover'] ? '.tp-buttons[data-tp-style="'+ _style +'"]:hover {'+ _obj['tp-buttons:hover'] +'}\n' : ''
        _styleStr +=  _obj['tp-buttons::before'] ? '.tp-buttons[data-tp-style="'+ _style +'"]::before {'+ _obj['tp-buttons::before'] +'}\n' : ''
        _styleStr +=  _obj['tp-buttons::after'] ? '.tp-buttons[data-tp-style="'+ _style +'"]::after {'+ _obj['tp-buttons::after'] +'}\n' : ''
        // console.log(_obj);
        // console.log(_style);
       
         return  _styleStr;
      }
      let createTpComponentStyleSheet = (editor) =>{
        //.replace(/.tp-tabs\s*\{/g,':host   {').replace(/.tp-tabs_label\b\s/g,'::slotted(.tp-tabs_label)   ').replace(/.tp-tabs_label:hover\b\s/g,'::slotted(.tp-tabs_label:hover)   ').replace(/.tp-tabs_label.checked\b\s/g,'::slotted(.tp-tabs_label.checked)   ')
        // editor.tp$Style.mapping = { 
        //     'tpComponentStyle_tp$tabsID1629518201020': {
        //         styleCustomTags: 'tabs',
        //         stylePath: 'styleSheetLoadList',
        //         styleTemplate: 'default'
        //     }
        // }
       editor.tp$OutputStyle = ''
    //    console.log(editor.tp$Style);
       let temStyle = {
       }
       let tagsStyle = ''
       let maxQuantity = 2 
       let _outputStyle = ''
       let _outputButtonsStyle = ''
       let _outputCollapseStyle = '' 
       let _outputCollapseSpecialStyle = ''
       let _outputTabsList = {}
       let _outputCollapseList = {}
       let _buttonsStyleList = {}
       if( editor.tp$Style && editor.tp$Style.mapping){
        keys( editor.tp$Style.mapping).forEach( obj =>{
            let _output = editor.tp$Style.mapping[obj]
            // console.log(_output);
            if( _output.styleCustomTags === 'tabs' ){
              if(!_outputTabsList[_output.styleTemplate]){
                _outputStyle = editor.tp$CustomTags[ _output.styleCustomTags][_output.stylePath][_output.styleTemplate];
                _outputTabsList[_output.styleTemplate] = true;
              }
              
                maxQuantity < _output.quantity ?  maxQuantity = _output.quantity : ''
            }
           if( _output.styleCustomTags === 'collapse' ){
             if(!_outputCollapseList[_output.styleTemplate]){
              _outputCollapseStyle += editor.tp$CustomTags[ _output.styleCustomTags][_output.stylePath][_output.styleTemplate];
              _outputCollapseList[_output.styleTemplate] = true;
             }
            _outputCollapseSpecialStyle += _output.specialStyle ? tp$createSpecialStyle(_output, {'tp-collapse_main':'.tp-collapse > input[id="'+obj+'"]:checked + .tp-collapse_label + .tp-collapse_main'}) : ''
           }
           if(_output.styleCustomTags === 'buttons' && !_buttonsStyleList[_output.styleTemplate]){
            //  console.log( editor.tp$CustomTags);
            _outputButtonsStyle += getButtonsStyle( editor.tp$CustomTags[ _output.styleCustomTags][_output.stylePath][_output.styleTemplate], _output.styleTemplate)
            _buttonsStyleList[_output.styleTemplate] = true
           }
        })
      }
      let _getChecked = ''
      let _outputChecked = ''
      if(_outputStyle){
      _outputStyle =   (_outputStyle.replace(/.tp-tabs\s*{/g,'div.tp-tabs[data-id] {').replace(/\n.tp-tabs\s/g,'\n.tp-tabs[data-id] ')+'.tp-tabs[data-id] > input { display: none;} \n .tp-tabs .tp-tabs_main .tp-tab_main { overflow: hidden;max-height: 0px;}') ;
        _getChecked = _outputStyle.match(/.tp-tabs_label.checked\s*{\n([\s\S]+)\n}/)[1]
       _outputChecked = _getChecked ? styleCheckedConvert('tabs', _getChecked, maxQuantity) : ''
     }
    //  if(temStyle['collapse']){
  
    //  }
   
      
      editor.tp$OutputStyle =( _outputButtonsStyle?`@font-face {
        font-family: "iconfont"; /* Project id 2627438 */
        src: url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff2?t=1630480852428') format('woff2'),
             url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff?t=1630480852428') format('woff'),
             url('//at.alicdn.com/t/font_2627438_tl87y8epxj.ttf?t=1630480852428') format('truetype');
      }`: '') +  _outputButtonsStyle + _outputCollapseStyle +_outputCollapseSpecialStyle+ _outputStyle + _outputChecked
        // console.log(editor); 
      
       
    
        // console.log();
      }

      const createTpComponent = (win, doc, editor , _customTag, _tagName) => {
        const template = doc.createElement('template');
        const staticStyle = document.createElement('style');
        const customStyle = document.createElement('style');
        staticStyle.textContent =  `body{
            padding: 0;
            margin: 0;
        }
        :host {
            overflow: hidden;
            display: block; 
        }` ;
     
        template.innerHTML =  _customTag.template.innerHTML
        // Create the conditional block custom element.
        // Familiarize yourself with web components and custom elements here:
        // https://developer.mozilla.org/en-US/docs/Web/Web_Components
        class TpComponent extends win.HTMLElement {
            constructor() {
                super();
                this.setAttribute('contenteditable', false);
                this.setAttribute('data-mce-tp-component', _tagName);
                 // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
                const shadow = this.attachShadow({mode: 'open'});//closed
                 this.tp$state = typeof _customTag.state === 'object' ? JSON.parse(JSON.stringify(_customTag.state)) : { } ; 
                 tp$ComponentSetStyleMapping(editor, this, 'init', _customTag) 
                this.tpComponentDelete =  typeof _customTag.tpComponentDelete === 'function' ? _customTag.tpComponentDelete.bind(this) : ()=>{this.remove()}
                this.tpComponentCmd = typeof _customTag.tpComponentCmdFn === 'object' ? 
                JSON.stringify(_customTag.tpComponentCmdFn) !== '{}' ? 
                ( cmd, props) =>{  _customTag.tpComponentCmdFn[cmd](this, props) ; tp$ComponentSetStyleMapping(editor, this, cmd, _customTag)  } :
                ( cmd, props) =>{   tp$Component.customTags[_tagName].tpComponentCmdFn[cmd](this, props); tp$ComponentSetStyleMapping(editor, this, cmd, _customTag) } :
                 ()=>{ console.log('无可用cmd'); }
                 customStyle.id = 'tpComponentStyle_' + this.getAttribute('data-id');
                // Attach the html template to the web components shadow DOM
                // console.dir(template);
                // this.shadowRoot.appendChild(staticStyle);
                // this.shadowRoot.appendChild(customStyle);
                if(_tagName == 'tabs' ){
                  customStyle.textContent =  _customTag.styleSheetLoadList && _customTag.styleSheetLoadList[this.getAttribute('data-tp-style') || 'default'] ? _customTag.styleSheetLoadList[this.getAttribute('data-tp-style')||'default'].replace(/.tp-tabs\s*\{/g,':host   {').replace(/.tp-tabs_label\b\s/g,'::slotted(.tp-tabs_label)   ').replace(/.tp-tabs_label:hover\b\s/g,'::slotted(.tp-tabs_label:hover)   ').replace(/.tp-tabs_label.checked\b\s/g,'::slotted(.tp-tabs_label.checked)   ') : ''
                }
                if(_tagName == 'collapse' ){
                    customStyle.textContent =  _customTag.styleSheetLoadList && _customTag.styleSheetLoadList[this.getAttribute('data-tp-style') || 'default']  ? _customTag.styleSheetLoadList[this.getAttribute('data-tp-style') || 'default'].replace(/>/g,' ').replace(/.tp-collapse\s*\{/g,':host   {').replace(/label.tp-collapse_label\b\s/g,'::slotted(.tp-collapse_label)   ').replace(/label.tp-collapse_label::/g,'::slotted(.tp-collapse_label)::').replace(/.tp-tabs_label:hover\b\s/g,'::slotted(.tp-tabs_label:hover)   ').replace(/.tp-tabs_label.checked\b\s/g,'::slotted(.tp-tabs_label.checked)   ') : ''
                }
                template.content.prepend(customStyle)
                template.content.prepend(staticStyle)   
                this.shadowRoot.appendChild(template.content.cloneNode(true));
                // console.dir(this.shadowRoot.children.tpComponentStyle_tp$tabsID1629518201020.innerText);
            }
    
            connectedCallback() {
               
                getTp$ComponentFn( _customTag , 'headerEditableFn')(this,_customTag.isHeaderEditable, _tagName, editor);
                getTp$ComponentFn( _customTag, 'contentEditableFn')(this, _customTag.isContentEditable, _tagName, editor); 
                // Open the edit dialog
                // const editConditionalBlock = () => {
                //    this.firstChild.style.maxHeight == '10000px' ? this.firstChild.style.maxHeight = '0' : this.firstChild.style.maxHeight = '10000px' 
                //     // dialogManager(this, editor);
                //     return false;
                // }
                getTp$ComponentFn( _customTag, 'connectedCallback')(this.shadowRoot, this)
                // typeof _customTag.connectedCallback === 'function' && _customTag.connectedCallback;
                // this.shadowRoot.getElementById('btn').addEventListener('click', editConditionalBlock);
            }
    
            // Everytime a custom element's attributes is added, changed or removed
            // the `attributeChangedCallback` method is invoked. Which attributes are
            // observed is defined by the `observedAttributes` method.
            // attributeChangedCallback(name, oldValue, newValue) {
            //     // console.dir(this.shadowRoot);
            //     // if (name === 'data-top-bg') {
            //     //     this.shadowRoot.getElementById('headerID').style.backgroundColor = newValue;
            //     // }
            //     // else if (name === 'data-operator') {
            //     //     this.shadowRoot.getElementById('operator').textContent = newValue;
            //     // }
            //     // else if (name === 'data-value') {
            //     //     this.shadowRoot.getElementById('value').textContent = newValue;
            //     // }
            
            // }
           
            static get observedAttributes() { return ['data-top-bg', 'data-mce-tp-component', 'data-value']; }
            static tp$Delete() { console.log(this); }
    
        }
        // Register our web component to the tag we want to use it as
        // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
        
        win.customElements.define('tp-' + _tagName, TpComponent);
      }
  
      const createTpSpanComponent = (win, doc, editor , _customTag, _tagName) => {
        const template = doc.createElement('template');
        const staticStyle = document.createElement('style');
        const customStyle = document.createElement('style');
        staticStyle.textContent =  `body{
            padding: 0;
            margin: 0;
        }
        :host {
            overflow: hidden;
            display: block; 
        }` ;
     
        template.innerHTML =  _customTag.template.innerHTML
        // Create the conditional block custom element.
        // Familiarize yourself with web components and custom elements here:
        // https://developer.mozilla.org/en-US/docs/Web/Web_Components
        class TpSpanComponent extends win.HTMLSpanElement{
            constructor() {
                super();
                this.setAttribute('contenteditable', false);
                this.setAttribute('data-mce-tp-component', _tagName);
                this.setAttribute('is','tp-' + _tagName);
                // console.log('dsd');
                 // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
                const shadow = this.attachShadow({mode: 'open'});//closed
                 this.tp$state = typeof _customTag.state === 'object' ? JSON.parse(JSON.stringify(_customTag.state)) : { } ; 
                 tp$ComponentSetStyleMapping(editor, this, 'init', _customTag) 
                this.tpComponentDelete =  typeof _customTag.tpComponentDelete === 'function' ? _customTag.tpComponentDelete.bind(this) : ()=>{this.remove()}
                this.tpComponentCmd = typeof _customTag.tpComponentCmdFn === 'object' ? 
                JSON.stringify(_customTag.tpComponentCmdFn) !== '{}' ? 
                ( cmd, props) =>{  _customTag.tpComponentCmdFn[cmd](this, props) ; tp$ComponentSetStyleMapping(editor, this, cmd, _customTag)  } :
                ( cmd, props) =>{   tp$Component.customTags[_tagName].tpComponentCmdFn[cmd](this, props); tp$ComponentSetStyleMapping(editor, this, cmd, _customTag) } :
                 ()=>{ console.log('无可用cmd'); }
                 customStyle.id = 'tpComponentStyle_' + this.getAttribute('data-id');
                // Attach the html template to the web components shadow DOM
                // console.dir(template);
                // this.shadowRoot.appendChild(staticStyle);
                // this.shadowRoot.appendChild(customStyle);
                if(_tagName == 'buttons'){
                  customStyle.textContent =  _customTag.styleSheetList && _customTag.styleSheetList[this.getAttribute('data-tp-style') || 'default']  ? getButtonsStyle( _customTag.styleSheetList[this.getAttribute('data-tp-style') || 'default'], this.getAttribute('data-tp-style') || 'default' ).replace(/\[data-tp-style=(.*?)\]/g, '').replace(/>/g,' ').replace(/.tp-buttons\s*\{/g,':host   {').replace(/.tp-buttons:hover\s*\{/g,':host(:hover)   {').replace(/.tp-buttons::before\s*\{/g,':host(.tp-buttons)::before   {').replace(/.tp-buttons::after\s*\{/g,':host(.tp-buttons)::after   {') : ''
                }
                template.content.prepend(customStyle)
                template.content.prepend(staticStyle)   
                this.shadowRoot.appendChild(template.content.cloneNode(true));
                // console.dir(this.shadowRoot.children.tpComponentStyle_tp$tabsID1629518201020.innerText);
            }
    
            connectedCallback() {
               
                getTp$ComponentFn( _customTag , 'headerEditableFn')(this,_customTag.isHeaderEditable, _tagName, editor);
                getTp$ComponentFn( _customTag, 'contentEditableFn')(this, _customTag.isContentEditable, _tagName, editor); 
                // Open the edit dialog
                // const editConditionalBlock = () => {
                //    this.firstChild.style.maxHeight == '10000px' ? this.firstChild.style.maxHeight = '0' : this.firstChild.style.maxHeight = '10000px' 
                //     // dialogManager(this, editor);
                //     return false;
                // }
                getTp$ComponentFn( _customTag, 'connectedCallback')(this.shadowRoot, this)
                // typeof _customTag.connectedCallback === 'function' && _customTag.connectedCallback;
                // this.shadowRoot.getElementById('btn').addEventListener('click', editConditionalBlock);
            }
    
            static get observedAttributes() { return ['data-top-bg', 'data-mce-tp-component', 'data-value']; }
    
        }
        // Register our web component to the tag we want to use it as
        // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
        win.customElements.define('tp-' + _tagName, TpSpanComponent,{ extends: 'span' });
      }

      const setupWebComponent = (win, doc, editor , _customTag, _tagName) => {
        _tagName !== 'buttons'? createTpComponent(win, doc, editor, _customTag, _tagName) :
        createTpSpanComponent(win, doc, editor, _customTag, _tagName)
        // const template = doc.createElement('template');
        // const staticStyle = document.createElement('style');
        // const customStyle = document.createElement('style');
        // staticStyle.textContent =  `body{
        //     padding: 0;
        //     margin: 0;
        // }
        // :host {
        //     overflow: hidden;
        //     display: block; 
        // }` ;
     
        // template.innerHTML =  _customTag.template.innerHTML
        // // Create the conditional block custom element.
        // // Familiarize yourself with web components and custom elements here:
        // // https://developer.mozilla.org/en-US/docs/Web/Web_Components
        // class TpComponent extends win.HTMLElement {
        //     constructor() {
        //         super();
        //         this.setAttribute('contenteditable', false);
        //         this.setAttribute('data-mce-tp-component', _tagName);
        //          // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
        //         const shadow = this.attachShadow({mode: 'open'});//closed
        //          this.tp$state = typeof _customTag.state === 'object' ? JSON.parse(JSON.stringify(_customTag.state)) : { } ; 
        //          tp$ComponentSetStyleMapping(editor, this, 'init', _customTag) 
        //         this.tpComponentDelete =  typeof _customTag.tpComponentDelete === 'function' ? _customTag.tpComponentDelete.bind(this) : ()=>{this.remove()}
        //         this.tpComponentCmd = typeof _customTag.tpComponentCmdFn === 'object' ? 
        //         JSON.stringify(_customTag.tpComponentCmdFn) !== '{}' ? 
        //         ( cmd, props) =>{  _customTag.tpComponentCmdFn[cmd](this, props) ; tp$ComponentSetStyleMapping(editor, this, cmd, _customTag)  } :
        //         ( cmd, props) =>{   tp$Component.customTags[_tagName].tpComponentCmdFn[cmd](this, props); tp$ComponentSetStyleMapping(editor, this, cmd, _customTag) } :
        //          ()=>{ console.log('无可用cmd'); }
        //          customStyle.id = 'tpComponentStyle_' + this.getAttribute('data-id');
        //         // Attach the html template to the web components shadow DOM
        //         // console.dir(template);
        //         // this.shadowRoot.appendChild(staticStyle);
        //         // this.shadowRoot.appendChild(customStyle);
        //         if(_tagName == 'tabs' ){
        //           customStyle.textContent =  _customTag.styleSheetLoadList && _customTag.styleSheetLoadList[this.getAttribute('data-tp-style') || 'default'] ? _customTag.styleSheetLoadList[this.getAttribute('data-tp-style')||'default'].replace(/.tp-tabs\s*\{/g,':host   {').replace(/.tp-tabs_label\b\s/g,'::slotted(.tp-tabs_label)   ').replace(/.tp-tabs_label:hover\b\s/g,'::slotted(.tp-tabs_label:hover)   ').replace(/.tp-tabs_label.checked\b\s/g,'::slotted(.tp-tabs_label.checked)   ') : ''
        //         }
        //         if(_tagName == 'collapse' ){
        //             customStyle.textContent =  _customTag.styleSheetLoadList && _customTag.styleSheetLoadList[this.getAttribute('data-tp-style') || 'default']  ? _customTag.styleSheetLoadList[this.getAttribute('data-tp-style') || 'default'].replace(/>/g,' ').replace(/.tp-collapse\s*\{/g,':host   {').replace(/label.tp-collapse_label\b\s/g,'::slotted(.tp-collapse_label)   ').replace(/label.tp-collapse_label::/g,'::slotted(.tp-collapse_label)::').replace(/.tp-tabs_label:hover\b\s/g,'::slotted(.tp-tabs_label:hover)   ').replace(/.tp-tabs_label.checked\b\s/g,'::slotted(.tp-tabs_label.checked)   ') : ''
        //         }
        //         if(_tagName == 'buttons'){
        //           customStyle.textContent =  _customTag.styleSheetList && _customTag.styleSheetList[this.getAttribute('data-tp-style') || 'default']  ? getButtonsStyle( _customTag.styleSheetList[this.getAttribute('data-tp-style') || 'default'], this.getAttribute('data-tp-style') || 'default' ).replace(/\[data-tp-style=(.*?)\]/g, '').replace(/>/g,' ').replace(/.tp-buttons\s*\{/g,':host   {').replace(/.tp-buttons:hover\s*\{/g,':host(:hover)   {').replace(/.tp-buttons::before\s*\{/g,':host(.tp-buttons)::before   {').replace(/.tp-buttons::after\s*\{/g,':host(.tp-buttons)::after   {') : ''
        //         }
        //         template.content.prepend(customStyle)
        //         template.content.prepend(staticStyle)
        //         this.shadowRoot.appendChild(template.content.cloneNode(true));
        //         // console.dir(this.shadowRoot.children.tpComponentStyle_tp$tabsID1629518201020.innerText);
        //     }
    
        //     connectedCallback() {
               
        //         getTp$ComponentFn( _customTag , 'headerEditableFn')(this,_customTag.isHeaderEditable, _tagName, editor);
        //         getTp$ComponentFn( _customTag, 'contentEditableFn')(this, _customTag.isContentEditable, _tagName, editor); 
        //         // Open the edit dialog
        //         // const editConditionalBlock = () => {
        //         //    this.firstChild.style.maxHeight == '10000px' ? this.firstChild.style.maxHeight = '0' : this.firstChild.style.maxHeight = '10000px' 
        //         //     // dialogManager(this, editor);
        //         //     return false;
        //         // }
        //         getTp$ComponentFn( _customTag, 'connectedCallback')(this.shadowRoot, this)
        //         // typeof _customTag.connectedCallback === 'function' && _customTag.connectedCallback;
        //         // this.shadowRoot.getElementById('btn').addEventListener('click', editConditionalBlock);
        //     }
    
        //     // Everytime a custom element's attributes is added, changed or removed
        //     // the `attributeChangedCallback` method is invoked. Which attributes are
        //     // observed is defined by the `observedAttributes` method.
        //     // attributeChangedCallback(name, oldValue, newValue) {
        //     //     // console.dir(this.shadowRoot);
        //     //     // if (name === 'data-top-bg') {
        //     //     //     this.shadowRoot.getElementById('headerID').style.backgroundColor = newValue;
        //     //     // }
        //     //     // else if (name === 'data-operator') {
        //     //     //     this.shadowRoot.getElementById('operator').textContent = newValue;
        //     //     // }
        //     //     // else if (name === 'data-value') {
        //     //     //     this.shadowRoot.getElementById('value').textContent = newValue;
        //     //     // }
            
        //     // }
           
        //     static get observedAttributes() { return ['data-top-bg', 'data-mce-tp-component', 'data-value']; }
        //     static tp$Delete() { console.log(this); }
    
        // }
        // // Register our web component to the tag we want to use it as
        // // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
        // win.customElements.define('tp-' + _tagName, TpComponent);
    }
    const tp$RegisterCommand = (editor) => {
      var cmd = function (command) {
        return function () {
          return editor.execCommand(command);
        };
      };
      editor.addCommand("tpLetterspacing", function ( ui, value ){
          editor.formatter.apply('tpLetterspacing', { value: value });
          toUpdateIndent2em(editor)
        })
      editor.addCommand("tpIndent", function ( ui, value ){
        toUpdateIndent2em(editor, value || 2)
      })
      editor.addCommand("mceTpAlignleft", function ( ui, value ){
         let _dom  = editor.dom.getParent(editor.selection.getNode(), 'tp-tabs,span.tp-buttons,tp-collapse')
         editor.dom.setStyle(_dom, 'float','left')
      })
      editor.addCommand("mceTpAlignright", function ( ui, value ){
        let _dom  = editor.dom.getParent(editor.selection.getNode(), 'tp-tabs,span.tp-buttons,tp-collapse')
        editor.dom.setStyle(_dom, 'float','right')
      })
      editor.addCommand("mceTpAligncenter", function ( ui, value ){
        let _dom  = editor.dom.getParent(editor.selection.getNode(), 'tp-tabs,span.tp-buttons,tp-collapse')
        editor.dom.setStyle(_dom, 'float',null)
        editor.dom.setStyle(_dom, 'margin-left','auto')
        editor.dom.setStyle(_dom, 'margin-right','auto')
      })
      editor.ui.registry.addButton('tpalignleft', {
        tooltip: 'Align left',
        onAction:  cmd('mceTpAlignleft'),
        icon: 'align-left',
      });
      editor.ui.registry.addButton('tpalignright', {
        tooltip: 'Align right',
        onAction:  cmd('mceTpAlignright'),
        icon: 'align-right',
      });
      editor.ui.registry.addButton('tpaligncenter', {
        tooltip: 'Align center',
        onAction:  cmd('mceTpAligncenter'),
        icon: 'align-center',
      });
    
    }
    const tp$RegisterFormatter = (editor) => {
          editor.formatter.register({
            alignleft: [
              {
                selector: 'figure.image',
                collapsed: false,
                classes: 'align-left',
                ceFalseOverride: true,
                preview: 'font-family font-size'
              },
              {
                selector: 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li',
                styles: { textAlign: 'left' },
                inherit: false,
                preview: false,
                defaultBlock: 'div'
              },
              {
                selector: 'img,table,audio,video,tp-buttons,tp-tabs',
                collapsed: false,
                styles: { float: 'left' },
                preview: 'font-family font-size'
              }
            ],
            aligncenter: [
              {
                selector: 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li',
                styles: { textAlign: 'center' },
                inherit: false,
                preview: 'font-family font-size',
                defaultBlock: 'div'
              },
              {
                selector: 'figure.image',
                collapsed: false,
                classes: 'align-center',
                ceFalseOverride: true,
                preview: 'font-family font-size'
              },
              {
                selector: 'img,audio,video',
                collapsed: false,
                styles: {
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                },
                preview: false
              },
              {
                selector: 'table,tp-buttons,tp-tabs',
                collapsed: false,
                styles: {
                  marginLeft: 'auto',
                  marginRight: 'auto'
                },
                preview: 'font-family font-size'
              }
            ],
            alignright: [
              {
                selector: 'figure.image',
                collapsed: false,
                classes: 'align-right',
                ceFalseOverride: true,
                preview: 'font-family font-size'
              },
              {
                selector: 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li',
                styles: { textAlign: 'right' },
                inherit: false,
                preview: 'font-family font-size',
                defaultBlock: 'div'
              },
              {
                selector: 'img,table,audio,video,tp-buttons,tp-tabs',
                collapsed: false,
                styles: { float: 'right' },
                preview: 'font-family font-size'
              }
            ],
            afterParagraph: {
              selector: 'p,ul,ol,dl,li,table',
              defaultBlock: 'p',
              deep: false,
              styles: { 'margin-bottom': '%value' },
            },
            beforeParagraph: {
              selector: 'p,ul,ol,dl,li,table',
              defaultBlock: 'p',
              deep: false,
              styles: { 'margin-top': '%value' },
          },
          borderParagraph: {
            selector: 'p,ul,ol,dl,li,table',
            defaultBlock: 'p',
            deep: false,
            styles: { 'border-width': '%valueW' ,'border-style': '%valueS','border-color': '%valueC'},
        },
        paddingParagraph: {
          selector: 'p,ul,ol,dl,li,table',
          defaultBlock: 'p',
          deep: false,
          styles: { 'padding': '%value'},
        },
        tpParagraph: {
          selector: 'p,ul,ol,dl,li,table',
          defaultBlock: 'p',
          deep: false,
          styles: { 'background': '%background', 'text-indent': '%indent'},
        },
        tpLetterspacing: {
          inline: 'span',
          remove_similar: true,
          styles: { 'letter-spacing': '%value' },
        },
        // tpIndent: {
        //   selector: 'p,dl,li',
        //   defaultBlock: 'p',
        //   deep: false,
        //   styles: { 'text-indent': '%value'},
        // }
      });
      editor.on('ExecCommand',function(cmd) {
          cmd.command === 'FontSize' && toUpdateIndent2em(editor)
      })
    }
      const createComponentsCustomTag = (editor) => {
        const win = editor.getWin();
        const doc = editor.getDoc();
        let _timeOutID = ''
        global$6.send({
          url: '/tinymce/plugins/tpIconlists/tpIconlists.css',
          async: false,
          dataType: "text",
          success: function (text) {
          // console.log(editor);
                 editor.dom.addStyle(text)
          },
          
        });
        global$6.send({
          url: '/tinymce/css/iconfont.css',
          async: false,
          dataType: "text",
          success: function (text) {
          // console.log(editor);
                 editor.dom.addStyle(text)
          },
          
        });
        tp$RegisterFormatter(editor)
        tp$RegisterCommand(editor)
       
        const tpComponentStyle =   `.mce-content-body [data-mce-tp-component][contenteditable=false][data-mce-selected] {
            outline: none;
            cursor: default;
            box-shadow: 0 0 0 2px #b4d7ff;
            position: relative;
            z-index:999;
            border-color: #B4D7FF;
            border-style: solid;
        }
        .mce-content-body .tp-partition[contentEditable=false],
        .mce-content-body .tp-partition[contentEditable=false]:focus,
        .mce-content-body .tp-partition[contentEditable=false]:hover{
          outline: none!important;
          box-shadow: none!important;
        }
        .mce-content-body tp-buttons .tp-component_inline>a{
             color: inherit;
             font:inherit;
             text-decoration: none;
             
        }
        .mce-content-body .tp-collapse .tp-collapse_label>p:first-child{
            display: inline-block;
        }
        .mce-content-body tp-collapse{
          display: inline-block;
        }
        .mce-content-body .tp-component_inline{display: table-cell; margin: 0 }
        .mce-content-body *[contentEditable=false] *[contentEditable=true]:focus {
            outline: none!important;
        }
        .mce-content-body img{
            max-width: 100%;
        }
        .mce-content-body [data-mce-tp-component]{
            border: 1px dashed #bbb;
        }
        .mce-content-body *[contentEditable=false] *[contentEditable=true]:hover {
            outline: none!important;
        }`
    
        editor.dom.addStyle(tpComponentStyle)
  
        editor.tp$Style = {
            //   tabs: {
            //       styleSheetList:{
            //           name: 'fivbe'
            //       },
            //       mapping: {
  
            //       },
                  
            //   }
             
        }
        editor.getTpStyle = (args)=>{
            // console.log(args);
           
            return '<style>'+ editor.tp$OutputStyle +' </style>'
        }
        let componentList = editor.tp$CustomTags || tp$Component.customTags;
       
        global$1.each(componentList, function(_item, key){
          setupWebComponent(win, doc, editor, _item, key);
       })
       editor.parser.addAttributeFilter('data-tp-component', (nodes)=>{
        console.log(nodes);
          nodes.forEach((node)=>{
              let customtag = node.attr('data-tp-component');
              componentList[customtag] ? getTp$ComponentFn(componentList[customtag] , 'parserFn')(node, customtag, editor) : ''
              // typeof componentList[customtag].parserFn === 'function'?
              //  componentList[customtag].parserFn(node, customtag) :
              //  tp$Component.customTags[customtag].parserFn(node, customtag) : ''
          })
    });
      editor.serializer.addAttributeFilter('data-mce-tp-component',(nodes)=>{
        // console.log(nodes);
          nodes.forEach((node)=>{
              let customtag = node.attr('data-mce-tp-component');
               
              componentList[customtag] ? getTp$ComponentFn(componentList[customtag], 'serializerFn')(node, customtag, editor) : ' ' 
                // typeof componentList[customtag].serializerFn === 'function' ? 
                //   componentList[customtag].serializerFn(node, customtag) :
                //   tp$Component.customTags[customtag].serializerFn(node, customtag) : ''
                if(customtag === 'buttons' ){
                  console.log(new tinymce.html.Serializer().serialize(node));
                }
          })
    
      })
       editor.setContent( editor.getContent({ source_view: true }))
      }
      const getStyleSheetClass = (_className , content) =>{
        const result = content.match(new RegExp(`.${_className}\\s*\\{([\\s\\S]+)\\}`));
        return result && result[1] ? result[1].replace(/\}([\s\S]+)/,'').trim() : "";
      }
   const setStyleSheetList = (customTag ,styleName, text, editor) => {
    // text = text.replace()
      setCustomTags('buttons', 'styleSheetList', { [styleName]: {
      'tp-buttons': getStyleSheetClass('tp-buttons', text ),
      'tp-buttons:hover':  getStyleSheetClass('tp-buttons:hover', text ),
      'tp-buttons::before':  getStyleSheetClass('tp-buttons::before', text ),
      'tp-buttons::after':  getStyleSheetClass('tp-buttons::after', text )


    }  }, editor, true)

   }
   const setCustomTags = (customTag, setAttribute , setValue , editor, isAssign) => {
    if( editor){
      !editor.tp$CustomTags && (editor.tp$CustomTags = JSON.parse(JSON.stringify(tp$Component.customTags)))
      isAssign ?  __assign( editor.tp$CustomTags[customTag][setAttribute], setValue):
      editor.tp$CustomTags[customTag][setAttribute] = setValue
    }else{
      isAssign ? __assign(tp$Component.customTags[customTag][setAttribute], setValue) :
      tp$Component.customTags[customTag][setAttribute] = setValue
    }
   }
  const createCustomTags = (customTag, init, editor ) => {
    if( editor){
      !editor.tp$CustomTags && (editor.tp$CustomTags = JSON.parse(JSON.stringify(tp$Component.customTags)))
       editor.tp$CustomTags[customTag] = init
     }else{
       tp$Component.customTags[customTag] = init
     }
  }
  
   const getFormatStyle = ( _style ) =>{
         if( typeof _style === 'object'){
            return JSON.stringify(_style).replace(/"([-A-Za-z]+?)":""[,}]/g,'').replace(/,/gi,';').replace(/{/gi,'').replace(/}/gi,'').replace(/"/gi,'')
         }
   }
  const getObjStyle = (_style) => {
    if( typeof _style ==="string" && _style!=='{}'){
      // console.log(JSON.stringify(_style));
      _style = JSON.stringify(_style)
      // console.log(('{' + _style.replace(/:/g,'": "').replace(/;\s/g,'","') + '}').replace(/,\"\"\}$/,'}'));
      return JSON.parse(('{' + _style.replace(/:/g,'": "').replace(/;\s*/g,'","') + '}').replace(/,\"\"\}$/,'}'))
   }
   return _style
  }
  const toHump = (name) =>{
    return name.replace(/[-|\_](\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
  }
  // 驼峰转换下划线
  const toLine = (name) =>{
  return name.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/\-/g,"_");
  }
  const toHyphen = (name) =>{
    return name.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/\_/g,"-");
  }
  var getCurrentValue = function (_block, _styleName) {
    let _resValue = ''
    if(!_block) return ''
    _styleName = toHump(_styleName)
    while(_block.nodeName !== 'P' && _block.nodeName !== 'LI' && _block.nodeName !== 'DIV' && _block.nodeName !== 'BODY'){
       if(_block.style[_styleName]){
          _resValue =  _block.style[_styleName]
           break
       }
       _block = _block.parentNode
    }
    return _resValue
    
}
  const tp$PanelComponents = {
    iframeLayout: `
     <style>
     .iframeLayout .iframeLayout_margin {
        border: 1px dashed #333;
        background: #F9CC9D;
        position: relative;
        margin: 0;
        padding: 0;
        font-size: 0;
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_border {
        margin: 39px;
        background: #FDDD9B;
        border: 1px solid #333;
        position: relative;
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding {
        margin: 39px;
        background: #c3d08b;
        border: 1px dashed #333;
        position: relative;
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding .iframeLayout_size{
        min-height: 40px;
        position: relative;
        text-align: center;
        line-height: 40px;
        margin: 39px;
        border: 1px solid #333;
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding .iframeLayout_size span {
        font-size: 20px;
        color: #666;
        display: inline-block;
        vertical-align: middle;
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding .iframeLayout_size input {
        position: relative;
        display: inline-block;
        vertical-align: middle;
      }
      .iframeLayout .iframeLayout_margin label {
        font-size: 20px;
        color: #000;
        position: absolute;
        top: 2px;
        left: 2px;
      }
      .iframeLayout .iframeLayout_margin input {
        position: absolute;
        width: 31px;
        height: 31px;
        display: block;
        margin: 0 auto;
        text-align: center;
        line-height: 31px;
        font-size: 12px;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 3px;
        overflow: hidden;
        padding: 1px;
      }
      .iframeLayout .iframeLayout_margin input:focus {
        outline: none;
        border-color: #1f81c3;
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_top {
        top: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_right {
        top: 50%;
        right: 2px;
        transform: translateY(-50%);
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_bottom {
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
      .iframeLayout .iframeLayout_margin .iframeLayout_left {
        top: 50%;
        left: 2px;
        transform: translateY(-50%);
      }
     
     </style>
    <div class="iframeLayout">
    <div class="iframeLayout_margin">
         <label for=""> margin </label>
            <input type="text" class="margin iframeLayout_top" placeholder="-" id="ifrLayoutMagrginTop" >
            <input type="text" class="margin iframeLayout_right" placeholder="-" id="ifrLayoutMagrginRight" >
            <input type="text" class="margin iframeLayout_bottom" placeholder="-" id="ifrLayoutMagrginBottom" >
            <input type="text" class="margin iframeLayout_left" placeholder="-" id="ifrLayoutMagrginLeft" >
         <div class="iframeLayout_border">
           <label for=""> border </label>
            <input type="text" class="border iframeLayout_top" placeholder="-" id="ifrLayoutBorderTop" >
            <input type="text" class="border iframeLayout_right" placeholder="-" id="ifrLayoutBorderRight" >
            <input type="text" class="border iframeLayout_bottom" placeholder="-" id="ifrLayoutBorderBottom" >
            <input type="text" class="border iframeLayout_left" placeholder="-" id="ifrLayoutBorderLeft" >
       
           <div class="iframeLayout_padding">
             <label for=""> padding </label>
                <input type="text" class="padding iframeLayout_top" placeholder="-" id="ifrLayoutPaddingTop" >
                <input type="text" class="padding iframeLayout_right" placeholder="-" id="ifrLayoutPaddingRight" >
                <input type="text" class="padding iframeLayout_bottom" placeholder="-" id="ifrLayoutPaddingBottom" >
                <input type="text" class="padding iframeLayout_left" placeholder="-" id="ifrLayoutPaddingLeft" >
                <div class="iframeLayout_size">
                    <input type="text" class="size"  id="ifrLayoutWidth" >
                    <span>X</span>
                    <input type="text" class="size"  id="ifrLayoutHeight" >
                </div>
           </div>
        </div>
    </div>
  </div>
    <script>
     console.log(this)
    
    </script>
    
    `
  }
  window.tp$State = {sdsd:0}
  /**
  * 
  * @param {String} type  | 获取面板组件的类型 iframeLayout
  */   
  const getComponents = (type) => {
    return tp$PanelComponents[type]
  }
  const autoToPX = (data, noPerCent) => {
      if(!noPerCent) {
        //   console.log(data);
        //   console.log(typeof data === 'string' && data.length>0 && data.match(/^[0-9]{1,8}$/)? data + 'px' : data);
        return  typeof data === 'string' && data.length>0 && data.match(/^[0-9]{1,8}$/)? data + 'px' : data;
      }else{
        return  typeof data === 'string' && !data.match(/\s/) && data.length>0 ? parseInt(data) + 'px': data;
      }
        
  }
   window.tp$HtmlPanelFn = function(e, _id, styleName){
        window.tp$State['buttonsStyle'] &&  (window.tp$State['buttonsStyle'][_id] = styleName)
        document.querySelector('#'+ _id +'_StyleID').innerHTML = e.nextElementSibling.innerHTML
   }
   const tp$Translate =  (text)=>{
    let textList = text.split('_')
    return textList.length > 1 ? global$11.translate([textList[0] + ' {0}',textList[1]]) : global$11.translate(text)
   }
  const createHtmlPanel = (_editor, panelID, dataList) => {
    
    let buttonsStyleName = '';
    buttonsStyleName = window.tp$State['buttonsStyle'] && window.tp$State['buttonsStyle'][panelID]
    !dataList ? dataList = keys(_editor.tp$CustomTags.buttons.styleSheetList) : ''
    if(!buttonsStyleName){
      buttonsStyleName = window.tp$State['buttonsStyle'] &&  (window.tp$State['buttonsStyle'][panelID] =  dataList[0] )
    }
    let panelStr = ''
    let buttonsStyleInit = ''
    let buttonsStyleStr = ''
    dataList.forEach((styleName, idx)=>{
       styleName === buttonsStyleName ? buttonsStyleInit = `<span class="tp-buttons" data-tp-style="${styleName}">${tp$Translate(styleName)}</span>` : ''
      panelStr += `<li ><input id="${panelID + '_' + idx}" type="radio" name="${panelID}" ${ buttonsStyleName === styleName ? ' checked ' : ''}  onclick="tp$HtmlPanelFn(this,'${panelID}','${styleName}')"> <label for="${panelID + '_' + idx}" > <span class="tp-buttons" data-tp-style="${styleName}">${tp$Translate(styleName) }</span></label></li>\n`
      buttonsStyleStr += getButtonsStyle(_editor.tp$CustomTags.buttons.styleSheetList[styleName], styleName)
    })
    return `<div style="width: 100%; position: relative; " >
   
    <style>
    .tox .tox-dialog__body-content ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: 0;
      margin: 0;
      max-height:160px;
      overflow: auto;
      border-top: 1px solid #ccc;

    }
    .tox .tox-dialog__body-content ul input{
      display: none;
    }
    .tox .tox-dialog__body-content ul label{
      border: 2px solid transparent;
      display: inline-block;
      position: relative;
      padding: 2px;
      cursor: pointer;
      
    }
    .tox .tox-dialog__body-content ul label::after{
      content:"✔";
      font-size: 20px;
      border-radius: 15px;
      width: 22px;
      height: 22px;
      display: none;
      color:  #fff;
      background:  #1C6CA1;
      border: 2px solid #1C6CA1;
      position: absolute;
      text-align: center;
      line-height: 20px;
      z-index: 9;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      
    }
    .tox .tox-dialog__body-content ul input:checked + label::after{
      display: block;
    }
    .tox .tox-dialog__body-content ul input:checked + label{
    
      pointer-events: none;
     
    }
    .tox .tox-dialog__body-content ul input:checked + label>span{
      opacity: 0.5;
    }
    .tox .tox-dialog__body-content .showStyle{
      display: block;
      position: absolute;
      right: 20px;
      top: 30px;
      -webkit-transform: translatY(-50%);
      transform: translateY(-50%);

    }
    .tox .tox-dialog__body-content .tox-form__group h2.title_h2{
      margin: 0;
      padding: 0;
      margin-top: -20px;
      min-height: 60px;
      line-height:60px;
    }
    .tox .tox-dialog__body-content li{
      line-style:none;
      display: inline-block;
      margin: 0 4px;
      margin-top: 5px;
    }
      ${buttonsStyleStr.replace(/.tp-buttons/g,'.tox .tox-dialog__body-content .tp-buttons')}
       </style>
       <div class="showStyle" id="${panelID+'_StyleID'}">${buttonsStyleInit}</div>
       <h2 class="title_h2">${global$11.translate('Select tmplate')}:</h2>
       <ul>
        ${panelStr}
       </ul>
       </div>
       `

  }
    tp$tinymce.Editor.prototype.tp$ = {
      Component: { // 组件APi
        custom_elements: '',
        setCustomTags: setCustomTags, //设置tags
        createHtmlPanel: createHtmlPanel, //设置
        createCustomTags: createCustomTags,
        setStyleSheetList: setStyleSheetList,
      },
      Node:{ //node APi
        getDimension: getDimension,
      },
      Tools:{
        getFormatStyle: getFormatStyle,
        autoToPX: autoToPX,
        getCurrentValue: getCurrentValue,
        namingFormat: {
          toHump: toHump,
          toLine: toLine,
          toHyphen: toHyphen,
         
        }
      },
      PanelComponents: {
        getComponents:  getComponents 
     }
     
    }
    // tp$tinymce.Editor.prototype.setTpContent = (content, args) => {
    //    this.setContent(content, args)
    // }
    // console.log(tp$tinymce.init);
    tp$tinymce.init = function (_init) {
        return  function (){
          arguments[0].custom_elements = ( arguments[0].custom_elements ? arguments[0].custom_elements+',': '') + 'tp-collapse,tp-tabs';
          return new Promise((resolve)=>{
            _init.apply(this, arguments).then((editor)=>{
                // resolve(editor)
                resolve(editor)
                if(editor[0]) {
                    createComponentsCustomTag(editor[0]);
                 //   console.log(editor[0]);
                     editor[0].getTpContent = (args) =>{
                      // console.log();
                      // console.log(editor[0].getContent(args).match(/<p class=\"tp-component_inline\" contenteditable=\"true\">(<a class=\"tp-buttons\" data-tp-style=.+?<\/a>)<\/p>\n/g));
                     return editor[0].getTpStyle(args) + editor[0].getContent(args).replace(/<p class=\"tp-component_inline\" contenteditable=\"true\">(<a.+?<\/a>)<\/p>\n/gi, '$1');
                     };
                     editor[0].on('BeforeGetContent',e =>{
                        !e.source_view ? createTpComponentStyleSheet(e.target) : ''
                     })
                    //  editor[0].on('copy',event =>{
                    //   console.log(event);
                    //   // const selection = document.getSelection();
                    //   // console.log(selection);
                     
                    //   let tp$inputId = 'tp$collapseID'+ new Date().getTime()
                    //   console.log( editor[0].dom.getParent(editor[0].selection.getNode(), 'tp-tabs'));
                    //   event.clipboardData.setData('text/html', editor[0].dom.getParent(editor[0].selection.getNode(), 'tp-tabs').outerHTML );
                    // //  let paste = (event.clipboardData || window.clipboardData).getData('text');
                    // //  // paste = paste.toUpperCase();
                    // //  const selection = window.getSelection();
                    // //  if (!selection.rangeCount) return false;
                    // //  selection.deleteFromDocument();
                    // //  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
                 
                    //  event.preventDefault();
                    // })
                    //  editor[0].on('paste',event =>{
                      
                    //   let paste = (event.clipboardData || window.clipboardData).getData('text/html');
                    //   console.log(paste);
                    //   // // paste = paste.toUpperCase();
                    //   // const selection = window.getSelection();
                    //   // if (!selection.rangeCount) return false;
                    //   // selection.deleteFromDocument();
                    //   // selection.getRangeAt(0).insertNode(document.createTextNode(paste));
                  
                    //   // event.preventDefault();
                    //  })
                   }else {
                     let _Interal = setInterval(()=>{
                        //  _Interal
                        if(editor[0]) {
                           clearInterval(_Interal);
                           createComponentsCustomTag(editor[0]);
                        //   console.log(editor[0]);
                            editor[0].getTpContent = (args) =>{
                            return editor[0].getTpStyle(args) + editor[0].getContent(args);
                            };
                            editor[0].on('BeforeGetContent',e =>{
                              // console.log(e);
                               !e.source_view ? createTpComponentStyleSheet(e.target) : ''
                            })
                            // editor[0].on('copy',event =>{
                            //         // console.log(event);
                            //         const selection = document.getSelection();
                            //         event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
                            //         event.preventDefault();
                            // })
                           
                           
                          }
                     }, 50) 
                }
             
          })
        }) 
       }
    }(tp$tinymce.init);
    let tp$IconManager = {
        default: {
            icons: {
              'tp-tab-add': '<svg t="1629385862141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7236" width="24" height="24"><path d="M714.27370623 141.21142578h67.41385716c27.91277775 0 51.74690871 9.88762917 71.49250467 29.66288824C872.91577659 190.6396849 882.78363013 214.42932121 882.78363013 242.33221152V309.79550667c0 9.2696528-3.26291773 17.20447542-9.88762917 23.78963631-6.56044191 6.59010498-14.51504016 9.88762917-23.81435532 9.88762989-9.29931517 0-17.27368832-3.29752417-23.83413096-9.88762989-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78963631V242.3371556c0-9.26470871-3.26291773-17.19458725-9.88762918-23.78469295-6.56538599-6.59010498-14.51504016-9.88762917-23.83907504-9.88762918H714.19954925c-9.29931517 0-17.24402596-3.29752417-23.82424278-9.88762915s-9.87774172-14.51998353-9.87774171-23.88851305c0-9.2696528 3.29752417-17.20447542 9.87774171-23.78963633 6.58021754-6.59010498 14.52492761-9.88762917 23.82918686-9.88762916h0.0692129zM444.60344607 141.21142578h134.80793941c9.31414671 0 17.23413778 3.29752417 23.8687374 9.98650588 6.55055444 6.49122901 9.87774172 14.52492761 9.87774171 23.78963633 0 9.2696528-3.32718727 17.20447542-9.87774171 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29752417-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78963632 0-9.26470871 3.28269263-17.30335141 9.89751734-23.78469297C427.35942084 144.50894996 435.30413091 141.21142578 444.60344607 141.21142578z m404.47819957 269.60599063c9.29931517 0 17.25391343 3.39640089 23.81435532 9.88762917 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.88851303v134.80793942c0 9.26470871-3.26291773 17.19458725-9.88762917 23.78469223-6.56044191 6.59504907-14.51504016 9.88762917-23.81435532 9.88762916-9.29931517 0-17.27368832-3.29258081-23.83413096-9.88762916-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78469223V444.59355861c0-9.36852878 3.29258081-17.29840732 9.89751661-23.88851303 6.56044191-6.49122901 14.53481506-9.88762917 23.82918687-9.88762918z m0 269.60599063c9.29931517 0 17.25391343 3.29752417 23.81435532 9.88762989 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.8934564v67.34958763c0 27.90783367-9.86785426 51.79634669-29.60356207 71.57160502-19.74559598 19.6664949-43.5797262 29.55412407-71.49250466 29.55412407h-67.41385717c-9.32403415 0-17.25391343-3.29258081-23.85390586-9.88762916-6.56538599-6.59010498-9.86785426-14.51998353-9.86785426-23.78469223 0-9.37347288 3.30246827-17.30335141 9.86785426-23.89345641 6.59999243-6.59010498 14.53481506-9.88762917 23.85390586-9.8876299h67.41385717c9.29931517 0 17.25391343-3.29258081 23.80446786-9.88762916 6.63459962-6.59010498 9.89751734-14.51998353 9.89751734-23.78469223V714.10067325c0-9.2696528 3.30741236-17.19953134 9.89751663-23.78963632 6.59504907-6.59010498 14.53481506-9.88762917 23.8440184-9.88762989h-0.04943799zM242.37670615 141.21142578H309.79550667c9.30920334 0 17.21930624 3.29752417 23.82918686 9.98650588 6.58516089 6.49122901 9.8826858 14.52492761 9.8826858 23.78963633 0 9.2696528-3.29752417 17.20447542-9.87774172 23.78963632-6.61482398 6.59010498-14.52492761 9.88762917-23.83413094 9.88762916H242.38164951c-9.31414671 0-17.27368832 3.29752417-23.83413023 9.88762918-6.61482398 6.59010498-9.90246071 14.51998353-9.9024607 23.88851303V309.79550667c0 9.37347288-3.28269263 17.20447542-9.89751736 23.8934564-6.56044191 6.48628492-14.52492761 9.88762917-23.82424277 9.88762989-9.30920334 0-17.25391343-3.40134426-23.8242435-9.88762989-6.6098799-6.69392507-9.88762917-14.51998353-9.88762917-23.8934564V242.44097568C141.21142578 214.42932121 151.07928004 190.64957307 170.83476348 170.97319c19.74559598-19.77525907 43.56983876-29.66288824 71.48756058-29.66288823l0.05932545-0.09887599z m202.22673992 674.01497657h134.80793941c9.31414671 0 17.23413778 3.29752417 23.86873739 9.8876299 6.55055444 6.59010498 9.87774172 14.51998353 9.87774172 23.89345641 0 9.26470871-3.32718727 17.19458725-9.87774172 23.78469223-6.63459962 6.59504907-14.55459069 9.88762917-23.86873739 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29258081-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78469223 0-9.37347288 3.28269263-17.30335141 9.89751734-23.89345641 6.58021754-6.59010498 14.52492761-9.88762917 23.82424277-9.8876299z m-269.61587808-404.40404185c9.29931517 0 17.23908188 3.3914568 23.79952377 9.88268508 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.88851304v134.8079394c0 9.26470871-3.26291773 17.19458725-9.90246072 23.78469224-6.56044191 6.59504907-14.50020861 9.88762917-23.79952377 9.88762916-9.31414671 0-17.27368832-3.29258081-23.83413096-9.88762916C144.53861305 596.59608526 141.25097633 588.66620673 141.25097633 579.40149802V444.59355861c0-9.36852878 3.28763673-17.29840732 9.9024607-23.88851303 6.56044191-6.49122901 14.51998353-9.88762917 23.82918686-9.88762918z m0 269.60104654c9.29931517 0 17.23908188 3.29752417 23.79952377 9.88762989 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.8934564v67.34958763c0 9.36852878 3.29258081 17.30335141 9.89751734 23.88851231 6.59010498 6.59010498 14.53481506 9.88762917 23.83413024 9.88762917h67.41385715c9.31414671 0 17.25391343 3.29752417 23.85390586 9.88762989 6.56538599 6.59010498 9.87774172 14.51998353 9.87774243 23.78963633 0 9.36852878-3.31235572 17.19458725-9.87774243 23.8885123-6.59999243 6.49122901-14.53975915 9.88762917-23.85390587 9.88762917H242.42120006c-27.91277775 0-51.72713307-9.88762917-71.49250396-29.66288823-19.75548343-19.77031497-29.63322515-43.55500721-29.63322515-71.46284086V714.19954925c0-9.2696528 3.28269263-17.20447542 9.89751662-23.78963633 6.59010498-6.59010498 14.53481506-9.88762917 23.83413095-9.88762916l-0.03955053-0.09887672z m337.02973524-336.95557825c9.31414671 0 17.23413778 3.29752417 23.8687374 9.88762917 6.55055444 6.59010498 9.86291017 14.51998353 9.86291017 23.78963632v101.12572983h101.13067391c9.29931517 0 17.22919442 3.29752417 23.82918687 9.88762917 6.56538599 6.59010498 9.87279762 14.51998353 9.87279762 23.78963632 0 9.36852878-3.30741236 17.30335141-9.86785427 23.88851304-6.60493653 6.59010498-14.53481506 9.88762917-23.83413022 9.88762916H545.7489508v101.12572983c0 9.2696528-3.31235572 17.20447542-9.86291017 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762917-9.29931517 0-17.22919442-3.29752417-23.82424278-9.88762917-6.59010498-6.59010498-9.87774172-14.51998353-9.87774171-23.78963632V545.72423181H377.18958892c-9.30425926 0-17.22425033-3.29752417-23.85390588-9.88762918-6.56538599-6.59010498-9.87774172-14.51998353-9.87774171-23.88851303 0-9.2696528 3.31235572-17.20447542 9.87774171-23.78963632 6.62965553-6.59010498 14.5496466-9.88762917 23.85390588-9.88762917h101.12572982V377.14509429c0-9.2696528 3.28763673-17.20447542 9.8777417-23.78963633 6.59504907-6.59010498 14.52492761-9.88762917 23.82918688-9.88762918z" p-id="7237"></path></svg>'
              ,'tp-tab-delete': '<svg t="1629436983964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17120" width="20" height="20"><path d="M950.857143 0H73.142857C31.695238 0 0 31.695238 0 73.142857v877.714286c0 41.447619 31.695238 73.142857 73.142857 73.142857h877.714286c41.447619 0 73.142857-31.695238 73.142857-73.142857V73.142857c0-41.447619-31.695238-73.142857-73.142857-73.142857z m-24.380953 926.47619H97.52381V97.52381h828.95238v828.95238z"  p-id="17121"></path><path d="M316.952381 560.761905h390.095238c26.819048 0 48.761905-21.942857 48.761905-48.761905s-21.942857-48.761905-48.761905-48.761905H316.952381c-26.819048 0-48.761905 21.942857-48.761905 48.761905s21.942857 48.761905 48.761905 48.761905z" p-id="17122"></path></svg>'
              ,'tpButtons':'<svg t="1630068696978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21708" width="28" height="28"><path d="M800 256h-64a32 32 0 0 0-31.84-32H159.84C142.4 224 128 238.432 128 256.224v415.552A32 32 0 0 0 159.84 704H160v64H128c-35.328 0-64-28.48-64-63.904V223.904C64 188.608 92.864 160 128 160h608c35.328 0 64 28.48 64 63.904V256zM192 351.84A64 64 0 0 1 256.16 288h639.68A64 64 0 0 1 960 351.84v448.32A64 64 0 0 1 895.84 864H256.16A64 64 0 0 1 192 800.16v-448.32z m64 32.384v383.552A31.968 31.968 0 0 0 287.744 800h576.512c17.184 0 31.744-14.4 31.744-32.224V384.224A31.968 31.968 0 0 0 864.256 352H287.744C270.56 352 256 366.4 256 384.224z" p-id="21709"></path><path  transform="scale(0.45) translate(280, 780)" d="M393.944329 226.04293h185.769284c115.432212 0 203.353552 33.325024 203.353552 137.979782 0 51.618335-28.361723 104.796566-76.576651 121.388173v3.828832c60.694087 14.180861 105.3638 56.723446 105.3638 132.732863 0 113.446891-94.019111 165.348844-217.676222 165.348844H393.944329zM571.488713 453.787564c70.904307 0 102.385819-28.361723 102.38582-73.59867 0-49.349398-33.466833-69.060795-100.967733-69.060795h-66.650049V453.787564z m12.904584 246.463371c76.576651 0 118.268384-27.227254 118.268384-85.085168 0-54.596316-40.982689-77.427503-118.268384-77.427504H506.256751v163.079906zM908.284171 638.138762V450.525966h-59.985043v-82.674422l65.231962-5.246919 12.904584-113.446891h93.310068v113.446891h104.796565v87.921341h-104.796565V638.138762c0 48.498546 19.711397 70.904307 57.716105 70.904307a124.366154 124.366154 0 0 0 41.691733-9.21756l18.151502 81.256336a276.101371 276.101371 0 0 1-89.481235 15.882564c-100.825924 0.99266-139.539676-62.679407-139.539676-158.825647zM1210.903753 362.604625h91.04113l7.657665 56.014403h2.977981c37.153857-36.303005 80.405484-66.650048 138.12159-66.650049 91.750173 0 131.172968 63.672068 131.172968 170.170337v265.182108h-111.461571v-251.001247c0-65.231962-18.151503-88.772192-59.985043-88.772192-34.884919 0-56.723446 16.591608-88.772193 47.789503v291.983936h-110.752527z"></path></svg>'
              ,'tpIconlists':'<svg t="1630921705647" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8438" width="20" height="20"><path d="M944.384 591.36 375.36 591.36c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 432.512 1024.064 468.096 1024.064 511.936 1024.064 555.776 988.416 591.36 944.384 591.36L944.384 591.36zM944.384 273.664 375.36 273.664c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 114.816 1024.064 150.336 1024.064 194.24 1024.064 238.08 988.416 273.664 944.384 273.664L944.384 273.664zM166.464 861.376l12.032 60.416c0.064 0.576 0.128 1.344 0.128 2.432 0 1.728-0.384 3.136-1.28 4.288-0.896 1.152-2.176 1.792-3.968 1.792-1.664 0-3.392-0.448-5.248-1.408l-58.752-27.904-57.984 29.248c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.624-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672-47.936-42.304C1.216 818.24 0.064 816.384 0.064 814.656c-0.064-2.944 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424c1.6-3.328 3.712-4.992 6.272-5.056 2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.704 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 861.376 166.464 861.376zM166.464 532.352l12.032 60.416C178.56 593.28 178.624 594.112 178.624 595.2c0 1.728-0.384 3.136-1.28 4.288C176.448 600.64 175.104 601.28 173.376 601.28c-1.664 0-3.392-0.448-5.248-1.408L109.44 572.032 51.456 601.28C49.6 602.24 47.872 602.752 46.272 602.752c-1.856 0-3.2-0.512-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.448 0.064-1.28 0.256-2.432l10.368-60.672L3.392 491.392C1.216 489.216 0.064 487.296 0.064 485.632c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 411.584 104.576 409.92 107.136 409.856c2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 532.352 166.464 532.352zM166.464 214.656l12.032 60.416C178.56 275.584 178.624 276.416 178.624 277.44c0 1.664-0.384 3.136-1.28 4.288C176.448 282.944 175.104 283.584 173.376 283.584c-1.664 0-3.392-0.448-5.248-1.408L109.44 254.336 51.456 283.584c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672L3.392 173.696C1.216 171.52 0.064 169.6 0.064 167.872c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 93.888 104.576 92.224 107.136 92.16c2.624 0 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 214.656 166.464 214.656zM375.36 761.536l569.088 0c43.968 0 79.68 35.584 79.68 79.424 0 43.84-35.648 79.424-79.68 79.424L375.36 920.384c-43.968 0-79.68-35.584-79.68-79.424C295.68 797.12 331.328 761.536 375.36 761.536L375.36 761.536zM375.36 761.536" p-id="8439"></path></svg>'
              ,'list-bull-tp-iconlists_tick':'<div style="width: 45px"><p style="height: 20px"><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span><p  style="height: 20px" ><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span></p></div>'
              ,'tpParagraph':'<svg t="1631187903361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1637" width="24" height="24"><path d="M122.368 165.888h778.24c-9.216 0-16.384-7.168-16.384-16.384v713.728c0-9.216 7.168-16.384 16.384-16.384h-778.24c9.216 0 16.384 7.168 16.384 16.384V150.016c0 8.192-6.656 15.872-16.384 15.872z m-32.768 684.544c0 26.112 20.992 47.104 47.104 47.104h750.08c26.112 0 47.104-20.992 47.104-47.104V162.304c0-26.112-20.992-47.104-47.104-47.104H136.704c-26.112 0-47.104 20.992-47.104 47.104v688.128z" p-id="1638"></path><path d="M597.504 300.544h230.912v49.152h-230.912zM596.992 437.76h230.912v49.152h-230.912zM210.432 574.976h617.984v49.152H210.432zM210.432 712.192h617.984v49.152H210.432zM246.784 296.448h88.064V501.76h-29.184v29.184h117.248V501.76h-29.696V296.448H481.28v29.184h29.184V238.08H217.6v87.552h29.184z" p-id="1639"></path></svg>'
              ,'tpColumns':'<svg t="1631064221790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26578" width="20" height="20"><path d="M416 64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704zM896 64H608c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H640c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704z"></path></svg>'
              ,'tpLetterspacing':'<svg t="1610616201691" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="969" width="24" height="24"><path d="M682.666667 704l128 106.666667-128 106.666666v-85.333333H341.333333v85.333333L213.333333 810.666667l128-106.666667v85.333333h341.333334v-85.333333zM170.666667 170.666667v682.666666H85.333333V170.666667h85.333334z m768 0v682.666666h-85.333334V170.666667h85.333334z m-394.666667 0l202.666667 469.333333h-89.6l-38.4-93.866667h-213.333334L366.933333 640H277.333333l202.666667-469.333333h64zM512 255.146667L432.213333 469.333333h159.573334L512 255.146667z" p-id="970" fill="#222f3e"></path></svg>'
              ,'tpIndent2em':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M170.666667 563.2v-102.4H887.466667v102.4zM170.666667 836.266667v-102.4H887.466667v102.4zM512 290.133333v-102.4H887.466667v102.4zM238.933333 341.333333V136.533333l204.8 102.4z"  p-id="5210"></path></svg>'
              ,'tpIconfont':'<svg t="1631797032825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16487" width="30" height="30"><path d="M805.096727 186.810182H218.903273c-17.687273 0-32.116364 14.405818-32.116364 32.116363v586.170182c0 17.687273 14.429091 32.116364 32.116364 32.116364h586.193454c17.687273 0 32.116364-14.429091 32.116364-32.116364V218.903273c0-17.687273-14.429091-32.116364-32.116364-32.116364z m0-46.545455a78.685091 78.685091 0 0 1 78.661818 78.661818v586.170182a78.685091 78.685091 0 0 1-78.661818 78.661818H218.903273a78.685091 78.685091 0 0 1-78.661818-78.661818V218.903273a78.685091 78.685091 0 0 1 78.661818-78.661818h586.193454z"  p-id="16488"></path><path d="M581.818182 465.454545h162.909091v-162.90909h-162.909091v162.90909z m-23.272727-186.181818h209.454545v209.454546h-209.454545v-209.454546zM372.363636 744.727273c51.386182 0 93.090909-41.751273 93.090909-93.090909 0-51.386182-41.751273-93.090909-93.090909-93.090909-51.386182 0-93.090909 41.751273-93.090909 93.090909 0 51.386182 41.751273 93.090909 93.090909 93.090909z m0 23.272727c-64.116364 0-116.363636-52.037818-116.363636-116.363636 0-64.116364 52.037818-116.363636 116.363636-116.363637 64.116364 0 116.363636 52.037818 116.363637 116.363637 0 64.116364-52.037818 116.363636-116.363637 116.363636zM736.907636 721.454545l-80.663272-139.636363-80.663273 139.636363h161.326545zM535.272727 744.727273l120.971637-209.454546 120.971636 209.454546H535.272727zM417.093818 393.774545l44.776727-43.52-61.812363-8.96L372.363636 285.253818l-27.694545 56.040727-61.905455 8.983273 44.683637 43.52-10.519273 61.672727 55.226182-29.090909 55.458909 29.137455-10.519273-61.742546z m24.994909 8.145455l16.384 96.116364-86.318545-45.381819-86.109091 45.381819 16.407273-96.116364L232.727273 334.010182l96.488727-13.963637L372.363636 232.727273l43.147637 87.296 96.488727 13.963636-69.911273 67.956364z"  ></path></svg>'
              ,'tp-columns-default':'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>'
              ,'tp-columns-columns-2':'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>'
              ,'tp-columns-columns-3':'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="40" height="40"><path d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path><path d="M938.666667 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333334-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z" p-id="27034"></path></svg>'
            }
        }
    }
    let tp$addI18n = {
        'zh_CN':{
            "Collapse": "折叠面板",
            "Write here": "在这里写入内容",
            "Tabs": "标签面板",
            "Panel head": '板头',
            "Panel main": '板体',
            "Padding": '内边距',
            "Margin": '外边距',
            "border Radius": '边框圆角',
            "Templates Style": '模板样式',
            "Buttons": '按钮组件',
            "Icon List": '图标列表',
            "Icon Library": '图标库',
            "Horizontal columns": '水平分列',
            "Style {0}": '样式 {0}',
            "Select tmplate": "选择模板样式",
            "Letter spacing": "字母间距",
            "Picture background fill": "图片背景填充",
            "Spacing before paragraph": "段前距",
            "Spacing after paragraph": "段后距",
            "First line indent": "首行缩进",
            "Hanging Indent": "悬挂缩进",
            "Indent mode": "悬挂方式",
            "Iconfont Size": "图标大小",
            "Iconfont Color": "图标颜色",
  
        }
    }
    tp$tinymce.addI18n = function(_i18n){
        return function(){
            __assign(arguments[1], tp$addI18n[arguments[0]])
            _i18n.apply(this, arguments);
        }
    }(tp$tinymce.addI18n)
  
    tp$tinymce.IconManager.add = function(_icon){
        return function () {
            __assign(arguments[1].icons, tp$IconManager[arguments[0]].icons)
            _icon.apply(this, arguments);
          }
    }(tp$tinymce.IconManager.add);
     let getContentStyle = function(content) {
         
        return new Promise((resolve, reject)=>{
            let result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
            // console.log(res);
            resolve (result && result[2] ? result[2].trim() : "")
        })
    }
    tp$tinymce.Editor.prototype.setTpContent = function(content, args){
        // console.log(content);
    //    let result = ;
        // return result && result[2] ? result[2].trim() : "";
        getContentStyle(content).then((res)=>{
        //    console.log(this);
            
        })
    
       return  this.setContent(content, args)
    };
  
   var  tinymcePlugin = {
        global$1: global$1,
        global$7: global$7,
        Component: { // 组件APi
            custom_elements: '',
            setCustomTags: setCustomTags, //设置
            createCustomTags: createCustomTags,
        },
        Node:{ //node APi
            getDimension: getDimension,
        },
        Tools:{
            getFormatStyle: getFormatStyle,
            namingFormat: {
            toHump: toHump,
            toLine: toLine,
            toHyphen: toHyphen
            } 
        },
        Icon:{
  
        }
    }
    var exportToModuleLoaders = function (tinymcePlugin) {
        if (typeof module === 'object') {
          try {
            module.exports = tinymcePlugin;
          } catch (_) {
          }
        }
      };
      var exportToWindowGlobal = function (tinymcePlugin) {
        window.tinymcePlugin = tinymcePlugin;
        window.tinymcePlugin = tinymcePlugin;
      };
      exportToWindowGlobal(tinymcePlugin);
      exportToModuleLoaders(tinymcePlugin);
      
  }(tinymce)

  export default tinymcePlugin