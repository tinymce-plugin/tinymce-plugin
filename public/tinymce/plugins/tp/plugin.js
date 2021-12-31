// (function () {
//     'use strict';
//    var Qedotor = null
//     var global = tinymce.util.Tools.resolve('tinymce.PluginManager');
//     var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
//     var global$7 = tinymce.util.Tools.resolve('tinymce.html.Node');
//     var global$4 = tinymce.util.Tools.resolve('tinymce.html.Schema');
//     if(typeof Object.assign != 'function') {
//       (function() {
//           Object.assign = function(target) {
//               'use strict';
//               if(target === undefined || target === null) {
//                   throw new TypeError('Cannot convert undefined or null to object');
//               }
//               var output = Object(target);
//               for(var index = 1; index < arguments.length; index++) {
//                   var source = arguments[index];
//                   if(source !== undefined && source !== null) {
//                       for(var nextKey in source) {
//                           if(source.hasOwnProperty(nextKey)) {
//                               output[nextKey] = source[nextKey];
//                           }
//                       }
//                   }
//               }
//               return output;
//           };
//       })();
//   }
// //     const tp$Component = {
// //         customTags: {
// //             'collapse': {
// //             name: 'collapse',
// //             template:{
// //               innerHTML: ` <style>
// //               :host {
// //                   display: block; /* Required to get block behavior inside TinyMCE */
// //                   background-color: rgba(240, 210, 140, .20);
// //                   border-radius: 6px;
// //               }
  
// //               header {
// //                   display: flex;
// //                   padding: 4px 6px;
// //                   margin: 0;
// //                   background-color: rgba(240, 210, 140, .20);
// //                   border-radius: 6px 6px 0 0;
// //               }
  
// //               header p {
// //                   margin: 0;
// //                   line-height: 24px;
// //                   font-size: 14px;
// //                   color: #B7974C;
// //               }
  
// //               header > svg {
// //                   fill: #B7974C;
// //                   margin-right: 6px;
// //               }
  
// //               span#property {
// //                   font-weight: bold;
// //               }
  
// //               span#value {
// //                   font-weight: bold;
// //               }
  
// //               button {
// //                   background: rgba(240, 210, 140, .5);
// //                   border: 0;
// //                   outline: 0;
// //                   -webkit-tap-highlight-color: rgba(0,0,0,0);
// //                   -webkit-user-select: none;
// //                   user-select: none;
// //                   font-weight: normal;
// //                   padding: 6px;
// //                   margin: 0 0 0 10px;
// //                   border-radius: 6px;
// //               }
  
// //               button svg {
// //                   fill: #B7974C;
// //                   display: block;
// //               }
  
// //               button:hover {
// //                   background-color: rgba(240, 210, 140, .75);
// //               }
  
// //               .content {
// //                   margin: 0 6px;
// //                   box-sizing: border-box;
// //                   padding-bottom: 2px;
// //               }
// //           </style>
// //           <header>
// //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 4a2 2 0 1 1-1.854 2.751L15 6.75c-1.239 0-1.85.61-2.586 2.31l-.3.724c-.42 1.014-.795 1.738-1.246 2.217.406.43.751 1.06 1.12 1.92l.426 1.018c.704 1.626 1.294 2.256 2.428 2.307l.158.004h2.145a2 2 0 1 1 0 1.501L15 18.75l-.219-.004c-1.863-.072-2.821-1.086-3.742-3.208l-.49-1.17c-.513-1.163-.87-1.57-1.44-1.614L9 12.75l-2.146.001a2 2 0 1 1 0-1.501H9c.636 0 1.004-.383 1.548-1.619l.385-.92c.955-2.291 1.913-3.382 3.848-3.457L15 5.25h2.145A2 2 0 0 1 19 4z" fill-rule="evenodd"/></svg>
  
// //               <p>Show block if <span id="property"></span>&nbsp;<span id="operator">&nbsp;</span>&nbsp;<span id="value"></span></p>
  
// //               <button type="button" id="btn">
// //                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M0 9.502v2.5h2.5l7.373-7.374-2.5-2.5L0 9.502zm11.807-6.807c.26-.26.26-.68 0-.94l-1.56-1.56a.664.664 0 0 0-.94 0l-1.22 1.22 2.5 2.5 1.22-1.22z"/></svg>
// //               </button>
// //           </header>
// //           <div class="content">
// //               <slot></slot>
// //           </div>
// //               `,
// //             },
// //             parserFn: (node, customtag) => {
// //                 node.attr('data-tp-component', null);
// //                 node.attr('data-mce-tp-component', customtag);
// //                 node.lastChild.remove()
// //                 node.firstChild.unwrap()
// //                 let _context =  node.firstChild
// //                 console.log(_context);
// //                 node.firstChild.remove()
// //                 node.type = 1;
// //                 node.name = 'tp-'+ tp$Component.customTags[customtag].name;
// //                 console.log(node);
// //             },
// //             serializerFn: (node, customtag ) => { //序列化组件标签
// //               node.attr('data-mce-tp-component', null);
// //               node.attr('data-tp-component', customtag);
// //               node.attr('contenteditable', null);
// //               node.firstChild.attr('contenteditable', null)
// //               let placeInput = new global$7('input', 1);
// //               placeInput.shortEnded = true;
// //               placeInput.attr({ id: node.attr('data-id'), type: 'checkbox'})
// //               let placeLabel = new global$7('label', 1);
// //               let placeTitle = new global$7('span', 1);
// //               let placeTitleValue = new global$7('#text', 3);
// //               placeTitleValue.value = 'tp-FV哈哈是的'
// //               placeTitle.attr('class','tp-collapse-title')
// //               placeTitle.append(placeTitleValue)
// //               placeLabel.append(placeTitle)
// //               node.append(placeInput) 
// //               placeLabel.next = node.firstChild.firstChild
// //               node.firstChild.firstChild.prev = placeLabel
// //               node.firstChild.firstChild = placeLabel
// //               node.type = 1;
// //               node.name = 'div';
// //             }
// //           }
// //         }
// //     }


    
// //   const setupWebComponent = (win, doc, editor , _customTag, _tagName) => {
 
// //     // settings.custom_elements += ' tp-'+ _tagName;
// //     const template = doc.createElement('template');
// //     template.innerHTML = _customTag.template.innerHTML
// //     // Create the conditional block custom element.
// //     // Familiarize yourself with web components and custom elements here:
// //     // https://developer.mozilla.org/en-US/docs/Web/Web_Components
// //     class TpComponent extends win.HTMLElement {
// //         constructor() {
// //             super();
// //             // During the creation of the web component we set contenteditable false
// //             // on the web component to make it behave like a noneditable-but-selectable
// //             // element inside TinyMCE.
// //             this.setAttribute('contenteditable', false);
// //             this.setAttribute('data-mce-tp-component', _tagName);
// //             // this.setAttribute('tp-component', true);
// //             // Attach the shadow DOM to the element
// //             // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
// //             const shadow = this.attachShadow({mode: 'open'});//closed

// //             // Attach the html template to the web components shadow DOM
// //             this.shadowRoot.appendChild(template.content.cloneNode(true));
// //         }

// //         connectedCallback() {
// //             // Make the content within <conditional-block> editable by wrapping the
// //             // content in a <div> with contenteditable on it.
// //             const cleanupContentEditable = () => {
// //                 if (this.firstChild.contentEditable !== 'true') {
// //                     const editableWrapper = document.createElement('div');
// //                     editableWrapper.setAttribute('contenteditable', true);
// //                     editableWrapper.setAttribute('style','overflow:hidden;max-height: 10000px');
// //                     while (this.firstChild) {
// //                         editableWrapper.appendChild(this.firstChild)
// //                     }

// //                     this.appendChild(editableWrapper);
// //                 }
// //             }
// //             cleanupContentEditable();

// //             // Open the edit dialog
// //             const editConditionalBlock = () => {
// //                this.firstChild.style.maxHeight == '10000px' ? this.firstChild.style.maxHeight = '0' : this.firstChild.style.maxHeight = '10000px' 
// //                 // dialogManager(this, editor);
// //                 return false;
// //             }
// //             this.shadowRoot.getElementById('btn').addEventListener('click', editConditionalBlock);
// //         }

// //         // Everytime a custom element's attributes is added, changed or removed
// //         // the `attributeChangedCallback` method is invoked. Which attributes are
// //         // observed is defined by the `observedAttributes` method.
// //         attributeChangedCallback(name, oldValue, newValue) {
// //             if (name === 'data-property') {
// //                 this.shadowRoot.getElementById('property').textContent = newValue;
// //             }
// //             else if (name === 'data-operator') {
// //                 this.shadowRoot.getElementById('operator').textContent = newValue;
// //             }
// //             else if (name === 'data-value') {
// //                 this.shadowRoot.getElementById('value').textContent = newValue;
// //             }
// //         }

// //         static get observedAttributes() { return ['data-property', 'data-operator', 'data-value']; }

// //     }
// //     // Register our web component to the tag we want to use it as
// //     // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
// //     win.customElements.define('tp-' + _tagName, TpComponent);
// // }

   
// //    var createComponentsCustomTag = function(editor, settings){
// //     const win = editor.getWin();
// //     const doc = editor.getDoc();
// //     const tpComponentStyle =   `.mce-content-body [data-mce-tp-component][contenteditable=false][data-mce-selected] {
// //         outline: none;
// //         cursor: default;
// //         box-shadow: 0 0 0 3px #b4d7ff;
// //     }

// //     .mce-content-body *[contentEditable=false] *[contentEditable=true]:focus {
// //         outline: none!important;
// //     }

// //     .mce-content-body *[contentEditable=false] *[contentEditable=true]:hover {
// //         outline: none!important;
// //     }`

// //     editor.dom.addStyle(tpComponentStyle)
// //     global$1.each(tp$Component.customTags, function(_item, key){
// //         setupWebComponent(win, doc, editor, _item, key);
// //     })
// //     editor.parser.addAttributeFilter('data-tp-component', (nodes)=>{
// //         // console.log(nodes);
// //           nodes.forEach((node)=>{
// //               let customtag = node.attr('data-tp-component');
// //               tp$Component.customTags[customtag] ? tp$Component.customTags[customtag].parserFn(node, customtag) : ''
// //           })
// //     });

// //     editor.serializer.addAttributeFilter('data-mce-tp-component',(nodes)=>{
// //         nodes.forEach((node)=>{
// //             let customtag = node.attr('data-mce-tp-component');
// //             tp$Component.customTags[customtag] ? tp$Component.customTags[customtag].serializerFn(node, customtag) : ''
           
// //         })
  
// //     })
// //    }
// //    tinymce.PluginManager.tp$ = tp$
//     function Plugin () {
//       global.add('tp', function (editor) {
//         Qedotor = editor
//         console.log(editor)
//         // editor.on('PreInit', (e) => {
//         //     // createComponentsCustomTag(editor)//创建组件自动定义标签
//         //     // console.log(e)
//         // })
//       })
//     }
  
//     Plugin();
// }());

