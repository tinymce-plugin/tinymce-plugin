
!function(tp$tinymce){
  'use strict';
  if(typeof tp$tinymce === "undefined" ){
    throw new Error('tinymce undefined');
  }
  console.log(tp$tinymce);
  let global$1 = tp$tinymce.util.Tools
  let global$7 = tp$tinymce.html.Node;
  let global$4 = tp$tinymce.html.Schema;
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
   * @param {Editor} editor - editor | 转换的样式类名
   * @param {Element} _self - Converted styles | 转换的样式
   * @param {String} cmd - Converted styles quantity | 转换的样式数量
   * @param {String} cmd - Converted styles quantity | 转换的样式数量
   * 
   */
  let tp$ComponentSetStyleMapping = function(editor, _self, cmd, _customTag) {
      !editor.tp$Style.mapping ? editor.tp$Style.mapping = {} : ''
       editor.tp$Style.mapping[''+_self.getAttribute('data-id')] = {
          styleCustomTags: _customTag.name,
          stylePath: 'styleSheetLoadList',
          styleTemplate: 'default',
          quantity: (_self.children.length-1)
       }
     
  }
  // let createTpStyle = (editor)=>{
  //     editor.tp$Style
  // }
  /**
   * 
   * 
   * 
   * */ 
  const setStyleMapping = function(){

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
                  if( _self.lastChild.className === 'tp-' +_customtag + '_main'){
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
            contentEditableFn: (_self, _isEditable) => {
                const partitionEditableWrapper = document.createElement('div');
                partitionEditableWrapper.setAttribute('contenteditable', false);
                partitionEditableWrapper.setAttribute('class','tp-partition tp-collapse_main');
                _isEditable ? _self.lastChild.setAttribute('contenteditable', true): '';
                partitionEditableWrapper.appendChild(_self.lastChild)
                _self.appendChild(partitionEditableWrapper);
            
            },
            isHeaderEditable: true,
            headerEditableFn: (_self, _isEditable, _customtag) => {
              if(_self.firstChild.contenteditable !== 'true'){
                  const headerWrapper = document.createElement('div');
                  _isEditable ? headerWrapper.setAttribute('contenteditable', true) : '';
                  headerWrapper.setAttribute('slot', 'header');
                  headerWrapper.setAttribute('class', 'tp-collapse_label');
                  headerWrapper.setAttribute('style', 'min-height: 20px; '+_self.getAttribute('data-top-style'));
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
          }
        }
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
     let _outputCollapseStyle = '' 
     if( editor.tp$Style && editor.tp$Style.mapping){
      keys( editor.tp$Style.mapping).forEach( obj =>{
          let _output = editor.tp$Style.mapping[obj]
           _output.styleCustomTags === 'tabs' ? _outputStyle = editor.tp$CustomTags[ _output.styleCustomTags][_output.stylePath][_output.styleTemplate] : ''
           _output.styleCustomTags === 'collapse' ?  _outputCollapseStyle = editor.tp$CustomTags[ _output.styleCustomTags][_output.stylePath][_output.styleTemplate] : ''
          maxQuantity < _output.quantity ?  maxQuantity = _output.quantity : ''
      })
    }
    let _getChecked = ''
    let _outputChecked = ''
    if(_outputStyle){
    _outputStyle =   (_outputStyle.replace(/.tp-tabs\s*{/g,'div.tp-tabs[data-id] {').replace(/\n.tp-tabs\s/g,'\n.tp-tabs[data-id] ')+'.tp-tabs[data-id] > input { display: none;} \n .tp-tabs .tp-tabs_main .tp-tab_main { overflow: hidden;max-height: 0px;}') ;
      _getChecked = _outputStyle.match(/.tp-tabs_label.checked\s*{\n([\s\S]+)\n}/)[1]
     _outputChecked = _getChecked ? styleCheckedConvert('tabs', _getChecked, maxQuantity) : ''
   }
   if(temStyle['collapse']){

   }
    
    editor.tp$OutputStyle = _outputCollapseStyle + _outputStyle + _outputChecked
      // console.log(editor); 
    
     
  
      // console.log();
    }
    const setupWebComponent = (win, doc, editor , _customTag, _tagName) => {
      
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
      if(_tagName == 'tabs' ){
        customStyle.textContent =  _customTag.styleSheetLoadList && _customTag.styleSheetLoadList['default'] ? _customTag.styleSheetLoadList['default'].replace(/.tp-tabs\s*\{/g,':host   {').replace(/.tp-tabs_label\b\s/g,'::slotted(.tp-tabs_label)   ').replace(/.tp-tabs_label:hover\b\s/g,'::slotted(.tp-tabs_label:hover)   ').replace(/.tp-tabs_label.checked\b\s/g,'::slotted(.tp-tabs_label.checked)   ') : ''
      }
      if(_tagName == 'collapse' ){
          customStyle.textContent =  _customTag.styleSheetLoadList && _customTag.styleSheetLoadList['default']  ? _customTag.styleSheetLoadList['default'].replace(/>/g,' ').replace(/.tp-collapse\s*\{/g,':host   {').replace(/label.tp-collapse_label\b\s/g,'::slotted(.tp-collapse_label)   ').replace(/label.tp-collapse_label::/g,'::slotted(.tp-collapse_label)::').replace(/.tp-tabs_label:hover\b\s/g,'::slotted(.tp-tabs_label:hover)   ').replace(/.tp-tabs_label.checked\b\s/g,'::slotted(.tp-tabs_label.checked)   ') : ''
      }
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
              template.content.prepend(customStyle)
              template.content.prepend(staticStyle)
              this.shadowRoot.appendChild(template.content.cloneNode(true));
              // console.dir(this.shadowRoot.children.tpComponentStyle_tp$tabsID1629518201020.innerText);
          }
  
          connectedCallback() {
             
              getTp$ComponentFn( _customTag , 'headerEditableFn')(this,_customTag.isHeaderEditable, _tagName);
              getTp$ComponentFn( _customTag, 'contentEditableFn')(this, _customTag.isContentEditable, _tagName); 
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
          attributeChangedCallback(name, oldValue, newValue) {
              // console.dir(this.shadowRoot);
              if (name === 'data-top-bg') {
                  this.shadowRoot.getElementById('headerID').style.backgroundColor = newValue;
              }
              else if (name === 'data-operator') {
                  this.shadowRoot.getElementById('operator').textContent = newValue;
              }
              else if (name === 'data-value') {
                  this.shadowRoot.getElementById('value').textContent = newValue;
              }
          
          }
         
          static get observedAttributes() { return ['data-top-bg', 'data-mce-tp-component', 'data-value']; }
          static tp$Delete() { console.log(this); }
  
      }
      // Register our web component to the tag we want to use it as
      // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
      win.customElements.define('tp-' + _tagName, TpComponent);
  }
    const createComponentsCustomTag = (editor) => {
      const win = editor.getWin();
      const doc = editor.getDoc();
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
        // console.log(nodes);
          nodes.forEach((node)=>{
              let customtag = node.attr('data-tp-component');
              componentList[customtag] ? getTp$ComponentFn(componentList[customtag] , 'parserFn')(node, customtag) : ''
              // typeof componentList[customtag].parserFn === 'function'?
              //  componentList[customtag].parserFn(node, customtag) :
              //  tp$Component.customTags[customtag].parserFn(node, customtag) : ''
          })
    });

    editor.serializer.addAttributeFilter('data-mce-tp-component',(nodes)=>{
        nodes.forEach((node)=>{
            let customtag = node.attr('data-mce-tp-component');
            
            componentList[customtag] ? getTp$ComponentFn(componentList[customtag], 'serializerFn')(node, customtag) : ' ' 
              // typeof componentList[customtag].serializerFn === 'function' ? 
              //   componentList[customtag].serializerFn(node, customtag) :
              //   tp$Component.customTags[customtag].serializerFn(node, customtag) : ''
        })
  
    })
    
    }
 const setCustomTags = (customTag, setAttribute , setValue , editor) => {
  if( editor){
    !editor.tp$CustomTags && (editor.tp$CustomTags = JSON.parse(JSON.stringify(tp$Component.customTags)))
    editor.tp$CustomTags[customTag][setAttribute] = setValue
  }else{
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
          return JSON.stringify(_style).replace(/,/gi,';').replace(/{/gi,'').replace(/}/gi,'').replace(/"/gi,'')
       }
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
        console.log(data);
        console.log(typeof data === 'string' && data.length>0 && data.match(/^[0-9]{1,8}$/)? data + 'px' : data);
      return  typeof data === 'string' && data.length>0 && data.match(/^[0-9]{1,8}$/)? data + 'px' : data;
    }else{
      return  typeof data === 'string' && !data.match(/\s/) && data.length>0? parseInt(data) + 'px': data;
    }
      
}
  tp$tinymce.Editor.prototype.tp$ = {
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
      autoToPX: autoToPX,
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
                   return editor[0].getTpStyle(args) + editor[0].getContent(args);
                   };
                   editor[0].on('BeforeGetContent',e =>{
                      !e.source_view ? createTpComponentStyleSheet(e.target) : ''
                   })
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
                             !e.source_view ? createTpComponentStyleSheet(e.target) : ''
                          })
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
          "Templates Style": '模板样式',
          "Picture background fill": "图片背景填充",

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