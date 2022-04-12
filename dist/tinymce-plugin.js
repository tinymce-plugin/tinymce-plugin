/*! 
*  @plugin tinymce-plugin
*  @version 0.0.9 (2022-4-11)
*  @description tinymce-plugin
*  @copyright (2022) Five(Li Hailong) https://github.com/tinymce-plugintinymce-plugin
*/

(function(g,d){typeof exports=="object"&&typeof module!="undefined"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(g=typeof globalThis!="undefined"?globalThis:g||self,d(g["tinymce-plugin"]={}))})(this,function(g){"use strict";let d=tinymce,F=d.util.Tools,x=d.html.Node;d.html.Schema;let T=d.util.XHR,S=d.util.I18n,J=new d.html.Serializer().serialize,X=new d.html.DomParser().parse,f={};window.tp$State=f;let c=(t,e)=>{let n=e?e.match(new RegExp(t+':(.+?)"?[;}]')):"";return n?n[1]:!1};function H(t,e,n,a){t.tp$Style.mapping&&t.tp$Style.mapping[""+e.getAttribute("data-id")]&&(t.tp$Style.mapping[""+e.getAttribute("data-id")].specialStyle[""+n]=a)}let u={customTags:{}},L=Object.keys,h=function(){return h=Object.assign||function(e){for(var n,a=1,l=arguments.length;a<l;a++){n=arguments[a];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},h.apply(this,arguments)},G=Object.hasOwnProperty;var Y=function(t){return t==null},Z=function(t){return!Y(t)};const k=t=>{if(typeof t=="object")return JSON.stringify(t).replace(/"([-A-Za-z]+?)":""[,}]/g,"").replace(/,/gi,";").replace(/{/gi,"").replace(/}/gi,"").replace(/"/gi,"")},z=t=>typeof t=="string"&&t!=="{}"?(t=JSON.stringify(t),JSON.parse(("{"+t.replace(/:/g,'": "').replace(/;\s*/g,'","')+"}").replace(/,\"\"\}$/,"}"))):t,w=(t,e)=>{const n=e.match(new RegExp(`.${t}\\s*\\{([\\s\\S]+)\\}`));return n&&n[1]?n[1].replace(/\}([\s\S]+)/,"").trim():""};var Q=function(t,e){return G.call(t,e)},K=function(t,e,n,a){a===void 0&&(a=null);var l=t.attr(n);return Z(l)?l:Q(e,n)?null:a};const $=t=>t.replace(/[-|\_](\w)/g,function(e,n){return n.toUpperCase()}),tt=t=>t.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/\-/g,"_"),et=t=>t.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/\_/g,"-");var at=function(t,e){let n="";if(!t)return"";for(e=$(e);t.nodeName!=="P"&&t.nodeName!=="LI"&&t.nodeName!=="DIV"&&t.nodeName!=="BODY";){if(t.style[e]){n=t.style[e];break}t=t.parentNode}return n};let C=(t,e)=>{let n="";return n+=t["tp-buttons"]?'.tp-buttons[data-tp-style="'+e+'"] {'+t["tp-buttons"]+`}
`:"",n+=t["tp-buttons:hover"]?'.tp-buttons[data-tp-style="'+e+'"]:hover {'+t["tp-buttons:hover"]+`}
`:"",n+=t["tp-buttons::before"]?'.tp-buttons[data-tp-style="'+e+'"]::before {'+t["tp-buttons::before"]+`}
`:"",n+=t["tp-buttons::after"]?'.tp-buttons[data-tp-style="'+e+'"]::after {'+t["tp-buttons::after"]+`}
`:"",n};const nt=(t,e,n)=>{!n&&(n=e*100);let a={id:null,outTime:n,outId:null};a.id=setInterval(l=>{t(()=>{clearTimeout(l.outId),clearInterval(l.id)})},e,a),a.outId=setTimeout(()=>{a.id&&clearInterval(a.id)},a.outTime)};let v=function(t,e){return typeof t[e]=="function"?t[e]:typeof u.customTags[t.name][e]=="function"?u.customTags[t.name][e]:function(){}};const lt=(t,e)=>e?typeof t=="string"&&!t.match(/\s/)&&t.length>0?parseInt(t)+"px":t:typeof t=="string"&&t.length>0&&t.match(/^[0-9]{1,8}$/)?t+"px":t,M=t=>{let e=t.split("_");return e.length>1?S.translate([e[0]+" {0}",e[1]]):S.translate(t)};tinymce.tp$HtmlPanelFn=window.tp$HtmlPanelFn=function(t,e,n){f.buttonsStyle&&(f.buttonsStyle[e]=n),document.querySelector("#"+e+"_StyleID").innerHTML=t.nextElementSibling.innerHTML};const st={count:0},ot=t=>{let e=new Date().getTime()+"-"+st.count++,n=`
  <div id="${e}" class="skt skt-loading" data-v-e3347e98=""><div class="skt-tox-tinymce" data-v-e3347e98="" style="height: 200px;"><div class="skt-tox-editor-container" data-v-e3347e98=""><div class="skt-tox-editor-header" data-v-e3347e98=""><div class="skt-tox-menubar" data-v-e3347e98=""><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">File</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Edit</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">View</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Format</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Tools</span></button></div><div class="skt-tox-toolbar-overlord" data-v-e3347e98=""><div class="skt-tox-toolbar" data-v-e3347e98=""><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div></div></div><div class="skt-tox-anchorbar" data-v-e3347e98=""></div></div><div class="skt-tox-sidebar-wrap-box" data-v-e3347e98=""><p class="skeleton" data-v-e3347e98=""> &nbsp; </p><p class="skeleton" data-v-e3347e98="">&nbsp; </p><p class="skeleton" data-v-e3347e98=""></p></div></div><div class="skt-tox-statusbar" data-v-e3347e98=""><div class="skeleton" data-v-e3347e98=""> PP </div><span class="skeleton" data-v-e3347e98="" style="margin-left: calc(100% - 120px);">Powered by Five </span></div></div></div>
`;return document.querySelector(t.selector).outerHTML=n+document.querySelector(t.selector).outerHTML,e},it=(t,e,n)=>{let a="";a=f.buttonsStyle&&f.buttonsStyle[e],n||(n=L(t.tp$CustomTags.buttons.styleSheetList)),a||(a=f.buttonsStyle&&(f.buttonsStyle[e]=n[0]));let l="",s="",o="";return n.forEach((i,r)=>{i===a&&(s=`<span class="tp-buttons" data-tp-style="${i}">${M(i)}</span>`),l+=`<li ><input id="${e+"_"+r}" type="radio" name="${e}" ${a===i?" checked ":""}  onclick="tinymce.tp$HtmlPanelFn(this,'${e}','${i}')"> <label for="${e+"_"+r}" > <span class="tp-buttons" data-tp-style="${i}">${M(i)}</span></label></li>
`,o+=C(t.tp$CustomTags.buttons.styleSheetList[i],i)}),`<div style="width: 100%; position: relative; " >
 
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
    content:"\u2714";
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
    ${o.replace(/.tp-buttons/g,".tox .tox-dialog__body-content .tp-buttons")}
     </style>
     <div class="showStyle" id="${e+"_StyleID"}">${s}</div>
     <h2 class="title_h2">${S.translate("Select tmplate")}:</h2>
     <ul>
      ${l}
     </ul>
     </div>
     `};let B=(t,e)=>{let n="";if(!t)return"";for(e=$(e);t.nodeName&&t.nodeName.toLowerCase()!=="#text";)n=t.style[e],t=t.firstChild;return n};const A=(t,e,n)=>{n=n||t.selection.getSelectedBlocks(),F.each(n,function(a){if(t.dom.getStyle(a,"text-indent")||e){let l="",s="";e==="remove"?(-parseInt(t.dom.getStyle(a,"text-indent"))==parseInt(t.dom.getStyle(a,"margin-left"))&&t.dom.setStyle(a,"margin-left",null),t.dom.setStyle(a,"text-indent",null)):(e=parseInt(e)||2,a&&a.firstChild&&(l=B(a,"font-size"),s=B(a,"letter-spacing"),l?l=(parseInt(l)+parseInt(s||0))*e+"px":l=(parseInt(s||0)+16)*e+"px"),e>0&&-parseInt(t.dom.getStyle(a,"text-indent"))==parseInt(t.dom.getStyle(a,"margin-left"))&&t.dom.setStyle(a,"margin-left",null),t.dom.setStyle(a,"text-indent",l||e+"em"),e<0&&t.dom.setStyle(a,"margin-left",l?l.replace(/^-/,""):-e+"em"))}})},rt=t=>{var e=function(n){return function(){return t.execCommand(n)}};t.addCommand("tpLetterspacing",function(n,a){t.formatter.apply("tpLetterspacing",{value:a}),A(t)}),t.addCommand("tpIndent",function(n,a){A(t,a||2)}),t.addCommand("mceTpAlignleft",function(n,a){let l=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(l,"float","left")}),t.addCommand("mceTpAlignright",function(n,a){let l=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(l,"float","right")}),t.addCommand("mceTpAligncenter",function(n,a){let l=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(l,"float",null),t.dom.setStyle(l,"margin-left","auto"),t.dom.setStyle(l,"margin-right","auto")}),t.ui.registry.addButton("tpalignleft",{tooltip:"Align left",onAction:e("mceTpAlignleft"),icon:"align-left"}),t.ui.registry.addButton("tpalignright",{tooltip:"Align right",onAction:e("mceTpAlignright"),icon:"align-right"}),t.ui.registry.addButton("tpaligncenter",{tooltip:"Align center",onAction:e("mceTpAligncenter"),icon:"align-center"})},pt=t=>{t.formatter.register({alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table,tp-buttons,tp-tabs",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],afterParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-bottom":"%value"}},beforeParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-top":"%value"}},borderParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"border-width":"%valueW","border-style":"%valueS","border-color":"%valueC"}},paddingParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{padding:"%value"}},tpParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{background:"%background","text-indent":"%indent"}},tpLetterspacing:{inline:"span",remove_similar:!0,styles:{"letter-spacing":"%value"}}}),t.on("ExecCommand",function(e){e.command==="FontSize"&&A(t)})};let E=function(t,e,n,a){t.tp$Style.mapping||(t.tp$Style.mapping={}),t.tp$Style.mapping[""+e.getAttribute("data-id")]?h(t.tp$Style.mapping[""+e.getAttribute("data-id")],{styleTemplate:e.getAttribute("data-tp-style")||"default",quantity:e.children.length-1}):t.tp$Style.mapping[""+e.getAttribute("data-id")]={styleCustomTags:a.name,stylePath:a.name==="buttons"?"styleSheetList":"styleSheetLoadList",styleTemplate:e.getAttribute("data-style")||"default",quantity:e.children.length-1,specialStyle:{}}};const dt=(t,e,n,a,l)=>{const s=e.createElement("template"),o=document.createElement("style"),i=document.createElement("style");o.textContent=`body{
      padding: 0;
      margin: 0;
  }
  :host {
      overflow: hidden;
      display: block; 
  }`,s.innerHTML=a.template.innerHTML;class r extends t.HTMLElement{constructor(){super();this.setAttribute("contenteditable",!1),this.setAttribute("data-mce-tp-component",l),this.attachShadow({mode:"open"}),this.tp$state=typeof a.state=="object"?JSON.parse(JSON.stringify(a.state)):{},E(n,this,"init",a),this.tpComponentDelete=typeof a.tpComponentDelete=="function"?a.tpComponentDelete.bind(this):()=>{this.remove()},this.tpComponentCmd=typeof a.tpComponentCmdFn=="object"?JSON.stringify(a.tpComponentCmdFn)!=="{}"?(b,y)=>{a.tpComponentCmdFn[b](this,y),E(n,this,b,a)}:(b,y)=>{u.customTags[l].tpComponentCmdFn[b](this,y),E(n,this,b,a)}:()=>{console.log("\u65E0\u53EF\u7528cmd")},i.id="tpComponentStyle_"+this.getAttribute("data-id"),l=="tabs"&&(i.textContent=a.styleSheetLoadList&&a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/.tp-tabs\s*\{/g,":host   {").replace(/.tp-tabs_label\b\s/g,"::slotted(.tp-tabs_label)   ").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),l=="collapse"&&(i.textContent=a.styleSheetLoadList&&a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/>/g," ").replace(/.tp-collapse\s*\{/g,":host   {").replace(/label.tp-collapse_label\b\s/g,"::slotted(.tp-collapse_label)   ").replace(/label.tp-collapse_label::/g,"::slotted(.tp-collapse_label)::").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),l=="buttons"&&(i.textContent=a.styleSheetList&&a.styleSheetList[this.getAttribute("data-tp-style")||"default"]?C(a.styleSheetList[this.getAttribute("data-tp-style")||"default"],this.getAttribute("data-tp-style")||"default").replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(.tp-buttons)::before   {").replace(/.tp-buttons::after\s*\{/g,":host(.tp-buttons)::after   {"):""),s.content.prepend(i),s.content.prepend(o),this.shadowRoot.appendChild(s.content.cloneNode(!0))}connectedCallback(){v(a,"headerEditableFn")(this,a.isHeaderEditable,l,n),v(a,"contentEditableFn")(this,a.isContentEditable,l,n),v(a,"connectedCallback")(this.shadowRoot,this)}static get observedAttributes(){return["data-top-bg","data-mce-tp-component","data-value"]}static tp$Delete(){console.log(this)}}try{t.customElements.define("tp-"+l,r)}catch{}},ct=t=>{const e=t.getWin(),n=t.getDoc();T.send({url:"/tinymce/plugins/tpIconlists/tpIconlists.css",async:!1,dataType:"text",success:function(s){t.dom.addStyle(s)}}),T.send({url:"/tinymce/css/iconfont.css",async:!1,dataType:"text",success:function(s){t.dom.addStyle(s)}}),pt(t),rt(t);const a=`.mce-content-body [data-mce-tp-component][contenteditable=false][data-mce-selected] {
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
  .mce-content-body .tp-component_inline{display: table-cell; margin: 0 }
  .mce-content-body *[contentEditable=false] *[contentEditable=true]:focus {
      outline: none!important;
  }
  .mce-content-body tp-buttons{
    display: inline-block;
    vertical-align: middle;
  }
  .mce-content-body img{
      max-width: 100%;
  }
  .mce-content-body [data-mce-tp-component]{
      border: 1px dashed #bbb;
  }
  .mce-content-body *[contentEditable=false] *[contentEditable=true]:hover {
      outline: none!important;
  }`;t.dom.addStyle(a),t.tp$Style={},t.getTpStyle=s=>"<style>"+t.tp$OutputStyle+" </style>";let l=t.tp$CustomTags||u.customTags;F.each(l,function(s,o){dt(e,n,t,s,o)}),t.parser.addAttributeFilter("data-tp-component",s=>{s.forEach(o=>{let i=o.attr("data-tp-component");l[i]&&v(l[i],"parserFn")(o,i,t)})}),t.serializer.addAttributeFilter("data-mce-tp-component",s=>{s.forEach(o=>{let i=o.attr("data-mce-tp-component");l[i]&&v(l[i],"serializerFn")(o,i,t)})}),t.setContent(t.getContent({source_view:!0}))},V=(t,e,n,a,l)=>{a?(!a.tp$CustomTags&&(a.tp$CustomTags=JSON.parse(JSON.stringify(u.customTags))),l?h(a.tp$CustomTags[t][e],n):a.tp$CustomTags[t][e]=n):l?h(u.customTags[t][e],n):u.customTags[t][e]=n},D={custom_elements:"",setCustomTags:V,createCustomTags:(t,e,n)=>{n?(!n.tp$CustomTags&&(n.tp$CustomTags=JSON.parse(JSON.stringify(u.customTags))),n.tp$CustomTags[t]=e):u.customTags[t]=e},setStyleSheetList:(t,e,n,a)=>{V("buttons","styleSheetList",{[e]:{"tp-buttons":w("tp-buttons",n),"tp-buttons:hover":w("tp-buttons:hover",n),"tp-buttons::before":w("tp-buttons::before",n),"tp-buttons::after":w("tp-buttons::after",n)}},a,!0)},createHtmlPanel:it};var P={name:"tabs",styleSheet:{selector:"default",styleSheetList:{default:{"tp-tabs":"","tp-tabs_top":"","tp-tabs_label.checked":" ","tp-tabs_main":" ","tp-tab_main.checked":" "}}},styleSheetLoadList:{},styleFn:()=>{},state:{count:0},tpComponentDeleteFn:function(){console.log(this)},tpComponentMonitorCmd:()=>{},tpComponentCmdFn:{tabAdd:(t,e)=>{let n=document.createElement("div");n.setAttribute("contenteditable",!1),n.setAttribute("class","tp-partition tp-tabs_label"),n.setAttribute("data-idx",t.tp$state.count);let a=document.createElement("p");a.setAttribute("class","tp-component_inline"),a.setAttribute("data-idx",t.tp$state.count),a.setAttribute("contenteditable",!0),a.innerHTML=e.title,n.appendChild(a),t.insertBefore(n,t.lastChild);let l=document.createElement("div");l.setAttribute("class","tp-tab_main"),l.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),l.innerHTML=e.content,t.lastChild.appendChild(l),t.tp$state.count++},tabDelete:(t,e)=>{t.children[--t.tp$state.count].remove(),t.lastChild.lastChild.remove()},delete:(t,e)=>{t.remove()},getStyle:(t,e)=>{},setStyle:(t,e)=>{console.log(t.querySelector(".tp-tabs_top")),t.setAttribute("data-top-style",e["tp-tabs_top"]),t.shadowRoot.querySelector(".tp-tabs_top").setAttribute("style",e["tp-tabs_top"])}},template:{innerHTML:`
<div class="tp-tabs">
  <div class="tp-tabs_top" id="headerID">
      <slot></slot>
  </div>
  <div class="tp-tabs_main">
      <slot name="content" ></slot>
  </div>
</div>
    `},connectedCallback:(t,e)=>{let n=a=>a.className&&a.className.indexOf("tp-partition tp-tabs_label")!==-1||a.parentNode&&(a.parentNode.className&&a.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1||a.parentNode.parentNode&&a.parentNode.parentNode.className&&a.parentNode.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1);t.getElementById("headerID").addEventListener("click",function(a){if(n(a.target)){let l=a.target.getAttribute("data-idx")||a.target.parentNode.getAttribute("data-idx")||"0",s=e.querySelectorAll("div.tp-partition.tp-tabs_label"),o=e.querySelector("div.tp-partition.tp-tabs_label.checked");o&&o.setAttribute("class","tp-partition tp-tabs_label");let i=s[l];i&&i.setAttribute("class","tp-partition tp-tabs_label checked");let r=e.querySelectorAll("div.tp-tab_main"),m=e.querySelector("div.tp-tab_main[contenteditable=true]");m&&(m.setAttribute("contenteditable",!1)||(m.style.maxHeight="0px"));let b=r[l];b&&(b.setAttribute("contenteditable",!0)||(b.style.maxHeight="10000px"))}})},isContentEditable:!0,contentEditableFn:(t,e,n)=>{if(t.lastChild&&t.lastChild.className==="tp-"+n+"_main"){const a=document.createElement("div");for(a.setAttribute("contenteditable",!1),a.setAttribute("class","tp-partition tp-tabs_main"),a.setAttribute("slot","content"),t.lastChild.firstChild&&(t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 10000px; transition: all 0s"),e&&t.lastChild.firstChild.setAttribute("contenteditable",!0),a.setAttribute("style",t.lastChild.getAttribute("style")),a.appendChild(t.lastChild.firstChild));t.lastChild.firstChild;)t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),a.appendChild(t.lastChild.firstChild);t.removeChild(t.lastChild),t.appendChild(a)}},isHeaderEditable:!0,headerEditableFn:(t,e,n)=>{let a=t.children.length;t.getAttribute("data-id"),t.shadowRoot.querySelector("#headerID.tp-tabs_top").setAttribute("style",t.getAttribute("data-top-style")?t.getAttribute("data-top-style"):"");for(let l=a-2;l>=0;l--)t.tp$state.count++,t.children[l].setAttribute("contenteditable",!1),t.children[l].setAttribute("class","tp-partition tp-"+n+"_label"+(l===0?" checked":"")),t.children[l].setAttribute("data-idx",l),t.children[l].firstChild.setAttribute("class","tp-component_inline"),t.children[l].firstChild.setAttribute("data-idx",l),e&&t.children[l].firstChild.setAttribute("contenteditable",!0)},parserFn:(t,e)=>{for(t.attr({"data-tp-component":null,"data-mce-tp-component":e,"data-top-style":t.firstChild.attr("style")});t.firstChild.name==="input";)t.firstChild.remove();let n=t.firstChild.firstChild;for(;n&&n.name==="label";){let a=n.next,l=new x("div",1);n.name="p",n.wrap(l),n=a}t.firstChild.unwrap(),t.type=1,t.name="tp-"+e},serializerFn:(t,e)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":e,contenteditable:null,class:"tp-"+e});let n=new x("div",1);n.attr("class","tp-tabs_top"),n.attr("style",t.attr("data-top-style")),t.attr("data-top-style",null);let a=t.firstChild,l=[];for(;a.attr("data-idx");){let i=a.next;a.firstChild.name="label",a.firstChild.attr({contenteditable:null,"data-idx":null,class:"tp-"+e+"_label",for:t.attr("data-id")+"tab"+a.attr("data-idx")}),l.push(J(a.firstChild)),n.append(a.firstChild),a.remove(),a=i}let s=t.lastChild.firstChild,o=0;for(;s&&s.attr("class")==="tp-tab_main";){let i=s.next,r=new x("input",1);r.shortEnded=!0,r.attr({id:t.attr("data-id")+"tab"+o,type:"radio",name:t.attr("data-id")}),o==0&&r.attr("checked",""),t.append(r),s.attr({contenteditable:null,style:null,class:"tp-tab_main tp-tab_main_"+o}),t.lastChild.insert(X(l[o]),s,!0),o++,s=i}t.append(n),t.firstChild.attr({contenteditable:null,class:"tp-tabs_main"}),t.append(t.firstChild),t.type=1,t.name="div"}},N={name:"buttons",template:{innerHTML:`
<div class="tp-buttons">
<div class="tp-buttons_main">
    <slot></slot>
</div>
</div>
    `},styleSheetList:{default:{"tp-buttons":`

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
          text-decoration: none;`,"tp-buttons:hover":`
           color: rgb(179, 70, 70) ;
           background: transparent;
           border-color: rgb(179, 70, 70) ;
           `,"tp-buttons::before":" ","tp-buttons::after":" "}},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,e)=>{t.shadowRoot.children[1].textContent=C(e.editor.tp$CustomTags.buttons.styleSheetList[e.styleName],e.styleName).replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(::before)   {").replace(/.tp-buttons::after\s*\{/g,":host(::after)   {")}},contentEditableFn:(t,e,n,a)=>{if(t.firstChild&&t.firstChild.tagName==="A"){const l=document.createElement("p");l.setAttribute("contenteditable",!0),l.setAttribute("class","tp-component_inline"),t.firstChild.innerHTML="<span>"+t.firstChild.innerHTML+"</span>",t.firstChild.setAttribute("href","javascript:;"),l.appendChild(t.firstChild),t.appendChild(l)}},isHeaderEditable:!0,parserFn:(t,e,n)=>{t.attr({"data-tp-component":null});let a=t.attr("style"),l={},s="";s=c("margin",a),s&&(l.margin=s),s=c("padding",a),s&&(l.padding=s),s=c("border",a),s&&(l.border=s),s=c("background",a),s&&(l.background=s),s=c("border-radius",a),s&&(l["border-radius"]=s),s=c("border-width",a),s&&(l["border-width"]=s),s=c("border-style",a),s&&(l["border-style"]=s),s=c("border-color",a),s&&(l["border-color"]=s);let o=new x("div",1);o.type=1,o.attr({"data-mce-tp-component":e,"data-tp-style":t.attr("data-tp-style")||"default",style:k(l)||null,"data-id":t.attr("data-id")}),t.attr("class")&&o.attr("class",t.attr("class")),n.tp$Style.mapping||(n.tp$Style.mapping={}),n.tp$Style.mapping[""+t.attr("data-id")]?h(n.tp$Style.mapping[""+t.attr("data-id")],{styleTemplate:t.attr("data-tp-style")||"default"}):n.tp$Style.mapping[""+t.attr("data-id")]={styleCustomTags:"buttons",stylePath:"styleSheetList",styleTemplate:t.attr("data-tp-style")||"default",specialStyle:{}},t.attr("style",k(h(z(t.attr("style"))||{},{margin:"",padding:"",background:"","border-style":"","border-color":"","border-width":"","border-radius":"",border:""}))||null),t.attr("data-id",null),t.attr("data-mce-style",null),t.wrap(o),o.name="tp-"+e},serializerFn:(t,e)=>{let n=t;for(;n.name!=="a"&&n.firstChild.name!=="#text";)n=n.firstChild;t.attr({"data-mce-tp-component":null,"data-tp-component":e,contenteditable:null,"data-tp-style":t.attr("data-tp-style")||"default",href:n&&n.attr("href")?n.attr("href"):null,style:n&&n.attr("style")?k(h(z(t.attr("style"))||{},z(n.attr("style"))||{})):t.attr("style"),target:n&&n.attr("target")?n.attr("target"):null,rel:n&&n.attr("rel")?n.attr("rel"):null,title:n&&n.attr("title")?n.attr("title"):null}),t.firstChild.unwrap(),n&&n.unwrap(),t.name="a"}},I={name:"collapse",template:{innerHTML:`
<div class="tp-collapse">
<div class="header" id="headerID">
  <slot name="header"></slot>
</div>
<div class="tp-collapse_mainBox">
    <slot></slot>
</div>
</div>
    `},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,e)=>{let n=e.style,a=c("padding",n),l=c("border",n),s=c("border-width",n);H(e.editor,t,"tp-collapse_main",(a?"padding: "+a+"!important; ":"")+(l?"border: "+l+"!important;":"")+(s?"border-width: "+s+"!important;":""))}},contentEditableFn:(t,e,n,a)=>{const l=document.createElement("div");if(l.setAttribute("contenteditable",!1),l.setAttribute("class","tp-partition tp-collapse_main"),e&&t.lastChild.setAttribute("contenteditable",!0),t.lastChild.getAttribute("class")==="tp-collapse_main"){let s=t.lastChild.getAttribute("style"),o=c("padding",s),i=c("border",s),r=c("border-width",s);H(a,t,"tp-collapse_main",(o?"padding: "+o+"!important; ":"")+(i?"border: "+i+"!important;":"")+(r?"border-width: "+r+"!important;":""))}l.appendChild(t.lastChild),t.appendChild(l)},isHeaderEditable:!0,headerEditableFn:(t,e,n,a)=>{if(t.firstChild.contenteditable!=="true"){const l=document.createElement("div");for(e&&l.setAttribute("contenteditable",!0),l.setAttribute("slot","header"),l.setAttribute("class","tp-collapse_label"),l.setAttribute("style","min-height: 20px; "+t.getAttribute("data-top-style"));t.firstChild&&t.firstChild.className!=="tp-"+n+"_main";)l.appendChild(t.firstChild);t.insertBefore(l,t.firstChild)}},parserFn:(t,e)=>{t.attr({"data-tp-component":null,"data-mce-tp-component":e}),t.attr("data-id",t.firstChild.attr("id")),t.firstChild.remove(),t.lastChild.attr("class","tp-"+e+"_main"),t.type=1,t.name="tp-"+e},serializerFn:(t,e)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":e,contenteditable:null,class:"tp-"+e}),t.firstChild.type=1,t.firstChild.name="label",t.firstChild.attr({contenteditable:null,for:t.attr("data-id")});let n=t.lastChild.attr("style");t.lastChild.unwrap(),t.lastChild.attr({contenteditable:null,class:"tp-"+e+"_main",style:n});let a=new x("input",1);a.shortEnded=!0,a.attr({id:t.attr("data-id"),type:"checkbox"}),t.insert(a,t.firstChild,!0),t.attr("data-id",null),t.type=1,t.name="div"}};const O=t=>/select$/.test(t),q={forecolor:!0,backcolor:!0,tpLetterspacing:!0,tpIconlists:!0,tpColumns:!0,table:!0},_={title:{file:{zh_CN:"\u6587\u4EF6",en_US:"File"},edit:{zh_CN:"\u7F16\u8F91",en_US:"Edit"},view:{zh_CN:"\u89C6\u56FE",en_US:"View"},insert:{zh_CN:"\u63D2\u5165",en_US:"Insert"},format:{zh_CN:"\u683C\u5F0F",en_US:"Format"},table:{zh_CN:"\u8868\u683C",en_US:"Table"},tools:{zh_CN:"\u5DE5\u5177",en_US:"Tools"},help:{zh_CN:"\u5E2E\u52A9",en_US:"Help"}},items:{code:"tools",spellchecker:"tools",spellcheckerlanguage:"tools",wordcount:"tools",image:"insert",link:"insert",media:"insert",hr:"insert",template:"insert",codesample:"insert",charmap:"insert",inserttable:"table",emoticons:"insert",pagebreak:"insert",nonbreaking:"insert",anchor:"insert",toc:"insert",insertdatetime:"insert",bold:"format",italic:"format",underline:"format",strikethrough:"format",blockquote:"format",subscript:"format",superscript:"format",removeformat:"format",formatselect:"format",fontselect:"format",fontsizes:"format",forecolor:"format",backcolor:"format",fontformats:"format",blockformats:"format",codeformat:"format",align:"format",table:"table",lineheight:"format",help:"help"}},R={file:!0,view:!0,edit:!0},W=t=>{let e=[];return t.split("|").forEach(a=>{let l=a.split(" "),s=[];l.forEach(o=>{o&&s.push({isSelect:O(o),name:o}),o&&_.items[o]&&(R[_.items[o]]=!0)}),s.length>0&&e.push(s)}),e},ut=t=>{let e=[];return t.split("|").forEach(a=>{let l=a.split(" "),s=[];l.forEach(o=>{o&&s.push({isSelect:O(o),name:o})}),e.push(s)}),e},U=()=>`.skt-tox-tinymce{

    border: 1px solid #ccc;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    overflow: hidden;
    position: relative;
    visibility: inherit!important;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    vertical-align: initial;
    white-space: normal;
        height: 200px;
  }
  
  .skt-tox-editor-container{
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    overflow: hidden;
  }
  .skt-tox-editor-header{
     box-shadow: none;
     transition: box-shadow .5s;
         z-index: 1;
  }
  .skt-tox-anchorbar{
    display: flex;
    flex: 0 0 auto;
     border-top: 1px solid #ccc;
  }
  .skt-tox-tinymce .skt-tox-statusbar{
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #ccc;
    color: rgba(34,47,62,.7);
    display: flex;
    flex: 0 0 auto;
    font-size: 12px;
    font-weight: 400;
    height: 18px;
    overflow: hidden;
    padding: 0 8px;
    position: relative;
    text-transform: uppercase;
  
  }
  .skt-tox-tinymce .skt-tox-toolbar,.skt-tox-tinymce .skt-tox-menubar{
   background:url("data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23cccccc'/%3E%3C/svg%3E") left 0 top 0 #fff;
     background-color: #fff;
    display: flex;
    flex: 0 0 auto;
    flex-shrink: 0;
    flex-wrap: wrap;
    padding: 0 0;
   
  }
  .skt-tox-mbtn{
   align-items: center;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    box-shadow: none;
    color: #222f3e;
    display: flex;
    flex: 0 0 auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 34px;
    justify-content: center;
    margin: 2px 0 3px 0;
    outline: 0;
    overflow: hidden;
    padding: 0 4px;
    text-transform: none;
    width: auto;
  }
  .skt-tox-mbtn__select-label {
    cursor: default;
    font-weight: 400;
    margin: 0 4px;
  }
  .skt-tox-tbtn.skt-tox-split-button{
    border: 0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    width: 50px;
    margin: 2px 0 3px 0;
    overflow: hidden;
  }
  .skt-tox-split-button .skt-tox-tbtn__select-chevron{
    margin-left: 5px;
  
  }
  .skt-tox-toolbar__group{
    border-right:1px solid #ccc;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0;
    padding: 0 4px 0 4px;
  }
  .skt-tox-toolbar__group:last-child {
  border-right: 0px;
  }
  .skt-tox-sidebar-wrap-box{
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .skt-tox-sidebar-wrap-box p{
     height: 16px;
     width: calc(100% - 40px);
     margin: 5px 20px;
  }
  .skt-tox-sidebar-wrap-box p:first-child{
    width: calc(100% - 74px)!important;
    margin-top: 20px;
    margin-left: 54px!important;
  }
  
  .skt-tox-sidebar-wrap-box p:nth-child(3n+2){
    width: 90%;
    margin-right:8%;
  }
  .skt-tox-sidebar-wrap-box p:nth-child(3n+3){
    width: calc(100% - 74px);
    margin-left: 54px
  }
  .skt-tox-sidebar-wrap-box p:nth-child(3n+1){
    width: 75%;
    margin-right:8%;
  }
  .skt-tox-sidebar-wrap-box p:last-child{
    width: 65%!important;
    margin-left: 20px;
  }
  .skt-tox-tbtn{
    align-items: center;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    box-shadow: none;
    color: #222f3e;
    display: flex;
    flex: 0 0 auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 34px;
    justify-content: center;
    margin: 2px 0 3px 0;
    outline: 0;
    overflow: hidden;
    padding: 0;
    text-transform: none;
    width: 34px;
  }
  .skt-tox-tbtn--select{
    margin: 2px 0 3px 0;
    padding: 0 4px;
    padding-right: 3px;
    width: auto;
  }
  .skt-tox-tbtn__select-label{ 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7em;
    font-weight: 400;
    margin: 0 4px;
  }
  .skt-tox-tbtn__select-chevron{
    align-items: center;
    display: flex;
    justify-content: center;
    width: 10px;
    height: 14px;
  }
  .skt-tox-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
  
  @-webkit-keyframes skeleton-ani {
  0% {
    left: -90%
  }
  
  to {
    left: 120%
  }
  }
  
  @keyframes skeleton-ani {
  0% {
    left: -90%
  }
  
  to {
    left: 120%
  }
  }
  .skt{
    display: none;
    width: 100%;
    top:0;
    position: absolute;
    z-index: 99;
    background: #fff;
  }
  .skt.skt-loading{
   display: block;
  }
  .skt-loading .skeleton {
  position: relative;
  overflow: hidden;
  border: none !important;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0) !important;
  background-image: none !important;
  pointer-events: none;
  }
  
  .skt-loading .skeleton:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: #ebf1f8;
  display: block
  }
  
  .skt-loading .skeleton:not(.not-round):after {
  border-radius: 4px
  }
  .skt-loading .tox-tbtn__select-chevron{
  display: inline-block;
  width: 8px;
  height: 18px;
  }
  .skt-loading .tox-icon { display: inline-block; width: 24px; height: 24px;}
  .skt-loading .skeleton:not(.not-before):before {
  position: absolute;
  top: 0;
  width: 30%;
  height: 100%;
  content: "";
  background: -webkit-gradient(linear, left top, right top, color-stop(0, hsla(0, 0%, 100%, 0)), color-stop(50%, hsla(0, 0%, 100%, .3)), to(hsla(0, 0%, 100%, 0)));
  background: -o-linear-gradient(left, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, .3) 50%, hsla(0, 0%, 100%, 0) 100%);
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, .3) 50%, hsla(0, 0%, 100%, 0));
  -webkit-transform: skewX(-45deg);
  -ms-transform: skewX(-45deg);
  transform: skewX(-45deg);
  z-index: 99;
  -webkit-animation: skeleton-ani 1s ease infinite;
  animation: skeleton-ani 1s ease infinite;
  display: block
  }
  .skt-loading .skeleton.badge:after {
  background-color: #f8fafc
  }`,bt=t=>{if(!document.querySelector("style#skt-tox-style")){let r=document.createElement("style");r.type="text/css",r.id="skt-tox-style";try{r.appendChild(document.createTextNode(U()))}catch{r.styleSheet.cssText=U()}document.getElementsByTagName("head")[0].appendChild(r)}let e=[];typeof t.toolbar=="string"?e=W(t.toolbar):Array.isArray(t.toolbar)&&t.toolbar.forEach(r=>{e.push(...W(r))});let n=[];if(t.menubar!==!1)if(typeof t.menubar=="string")n=ut(t.menubar);else for(let r in _.title)R[r]&&n.push(_.title[r][t.language||"en_US"]);let a=t.min_height||t.height||200,l=[],s=a-150;for(let r=0;r<s;r+=50)l.push("1");let o=t.selector?document.querySelector(t.selector).parentNode:t.target.parentNode,i=document.createElement("div");return i.className="skt skt-loading",i.innerHTML=ft({selector:t.selector,toolbar:e,menubar:n,branding:t.branding!==!1,placeholderList:l,height:a}),o.style.position="relative",o.style.minHeight=a+"px",o.append(i),i},ht=t=>{let e="";return t.forEach(n=>{e+='<button  class="skt-tox-mbtn skt-tox-mbtn--select"><span class="skt-tox-mbtn__select-label skeleton">'+n+`</span></button>
`}),e},mt=t=>{let e="";return t.forEach(n=>{e+=`<div class="skt-tox-toolbar__group">
`,n.forEach(a=>{e+='<button class="skt-tox-tbtn '+(a.isSelect?" skt-tox-tbtn--select":"")+(q[a.name]?" skt-tox-split-button":"")+'"><span class="'+(a.isSelect?"skt-tox-tbtn__select-label skt-tox-tbtn--select":"skt-tox-icon tox-tbtn__icon-wrap")+' skeleton">'+a.name+"</span>"+(a.isSelect||q[a.name]?'<div class="skt-tox-tbtn__select-chevron skeleton"></div>':"")+`</button>
`}),e+=`</div>
`}),e},gt=t=>{let e="";return t.forEach(n=>{e+=`<p class="skeleton"></p>
`}),e},ft=t=>`
<div class="skt-tox-tinymce"  style="height: ${t.height}px" >
<div class="skt-tox-editor-container">
    <div class="skt-tox-editor-header">
<div  class="skt-tox-menubar">
     ${ht(t.menubar)} 
</div>
    <div class="skt-tox-toolbar-overlord">
    <div class="skt-tox-toolbar">
     ${mt(t.toolbar)}
    </div>
    </div>
    <div class="skt-tox-anchorbar"></div>
</div>
<div class="skt-tox-sidebar-wrap-box">

    <p  class="skeleton"> &nbsp; </p>
      ${gt(t.placeholderList)}
    <p class="skeleton"> </p>
</div>
</div> 
<div class="skt-tox-statusbar">
 <div class="skeleton">
      PP
  </div> 
  ${t.branding?'<span class="skeleton" style="margin-left: calc(100% - 120px)">Powered by Five </span>':""}
 </div>
</div>`;u.customTags[P.name]=P,u.customTags[N.name]=N,u.customTags[I.name]=I;let yt=(t,e,n)=>{let a=`
`;for(let l=0;l<n;l++)a+=`.tp-${t} > input:nth-child(${l+1}):checked ~ .tp-${t}_top > .tp-${t}_label:nth-child(${l+1}){${e}}

               .tp-${t} > input:nth-child(${l+1}):checked ~ .tp-${t}_main  .tp-tab_main_${l}{ max-height: 10000px; }

            `;return a},xt=(t,e)=>{let n="";return L(t.specialStyle).forEach(a=>{n+=t.specialStyle[a]?`
 `+e[a]+" { "+t.specialStyle[a]+"} ":""}),n},vt=t=>{t.tp$OutputStyle="";let e=2,n="",a="",l="",s="",o={},i={},r={};t.tp$Style&&t.tp$Style.mapping&&(!t.tp$CustomTags&&(t.tp$CustomTags=JSON.parse(JSON.stringify(u.customTags))),L(t.tp$Style.mapping).forEach(y=>{let p=t.tp$Style.mapping[y];p.styleCustomTags==="tabs"&&(o[p.styleTemplate]||(n=t.tp$CustomTags[p.styleCustomTags][p.stylePath][p.styleTemplate],o[p.styleTemplate]=!0),e<p.quantity&&(e=p.quantity)),p.styleCustomTags==="collapse"&&(i[p.styleTemplate]||(l+=t.tp$CustomTags[p.styleCustomTags][p.stylePath][p.styleTemplate],i[p.styleTemplate]=!0),s+=p.specialStyle?xt(p,{"tp-collapse_main":'.tp-collapse > input[id="'+y+'"]:checked + .tp-collapse_label + .tp-collapse_main'}):""),p.styleCustomTags==="buttons"&&!r[p.styleTemplate]&&(a+=C(t.tp$CustomTags[p.styleCustomTags][p.stylePath][p.styleTemplate],p.styleTemplate),r[p.styleTemplate]=!0)}));let m="",b="";n&&(n=n.replace(/.tp-tabs\s*{/g,"div.tp-tabs[data-id] {").replace(/\n.tp-tabs\s/g,`
.tp-tabs[data-id] `)+`.tp-tabs[data-id] > input { display: none;} 
 .tp-tabs .tp-tabs_main .tp-tab_main { overflow: hidden;max-height: 0px;}`,m=n.match(/.tp-tabs_label.checked\s*{\n([\s\S]+)\n}/)[1],b=m?yt("tabs",m,e):""),t.tp$OutputStyle=(a?`@font-face {
  font-family: "iconfont"; /* Project id 2627438 */
  src: url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff2?t=1630480852428') format('woff2'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff?t=1630480852428') format('woff'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.ttf?t=1630480852428') format('truetype');
}`:"")+a+l+s+n+b};const kt={iframeLayout:`
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
  
  <\/script>
  
  `},wt=t=>kt[t];d.Editor.prototype.tp$={Components:D,Node:{getDimension:K},Tools:{getFormatStyle:k,autoToPX:lt,getCurrentValue:at,namingFormat:{toHump:$,toLine:tt,toHyphen:et}},PanelComponents:{getComponents:wt}},d.init=function(t){return function(){let e="";arguments[0].skeletonScreen&&(e=bt(arguments[0])),arguments[0].custom_elements=(arguments[0].custom_elements?arguments[0].custom_elements+",":"")+"tp-collapse,tp-tabs,tp-buttons";const n=t.apply(this,arguments);return n.then(a=>{let l=()=>{e&&e.remove(),ct(a[0]),a[0].getTpContent=s=>a[0].getTpStyle(s)+a[0].getContent(s),a[0].on("BeforeGetContent",s=>{s.source_view||vt(s.target)})};a[0]?l():nt(s=>{a[0]&&(s(),l())},20)}),n}}(d.init);let Ct={default:{icons:{"tp-tab-add":'<svg t="1629385862141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7236" width="24" height="24"><path d="M714.27370623 141.21142578h67.41385716c27.91277775 0 51.74690871 9.88762917 71.49250467 29.66288824C872.91577659 190.6396849 882.78363013 214.42932121 882.78363013 242.33221152V309.79550667c0 9.2696528-3.26291773 17.20447542-9.88762917 23.78963631-6.56044191 6.59010498-14.51504016 9.88762917-23.81435532 9.88762989-9.29931517 0-17.27368832-3.29752417-23.83413096-9.88762989-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78963631V242.3371556c0-9.26470871-3.26291773-17.19458725-9.88762918-23.78469295-6.56538599-6.59010498-14.51504016-9.88762917-23.83907504-9.88762918H714.19954925c-9.29931517 0-17.24402596-3.29752417-23.82424278-9.88762915s-9.87774172-14.51998353-9.87774171-23.88851305c0-9.2696528 3.29752417-17.20447542 9.87774171-23.78963633 6.58021754-6.59010498 14.52492761-9.88762917 23.82918686-9.88762916h0.0692129zM444.60344607 141.21142578h134.80793941c9.31414671 0 17.23413778 3.29752417 23.8687374 9.98650588 6.55055444 6.49122901 9.87774172 14.52492761 9.87774171 23.78963633 0 9.2696528-3.32718727 17.20447542-9.87774171 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29752417-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78963632 0-9.26470871 3.28269263-17.30335141 9.89751734-23.78469297C427.35942084 144.50894996 435.30413091 141.21142578 444.60344607 141.21142578z m404.47819957 269.60599063c9.29931517 0 17.25391343 3.39640089 23.81435532 9.88762917 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.88851303v134.80793942c0 9.26470871-3.26291773 17.19458725-9.88762917 23.78469223-6.56044191 6.59504907-14.51504016 9.88762917-23.81435532 9.88762916-9.29931517 0-17.27368832-3.29258081-23.83413096-9.88762916-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78469223V444.59355861c0-9.36852878 3.29258081-17.29840732 9.89751661-23.88851303 6.56044191-6.49122901 14.53481506-9.88762917 23.82918687-9.88762918z m0 269.60599063c9.29931517 0 17.25391343 3.29752417 23.81435532 9.88762989 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.8934564v67.34958763c0 27.90783367-9.86785426 51.79634669-29.60356207 71.57160502-19.74559598 19.6664949-43.5797262 29.55412407-71.49250466 29.55412407h-67.41385717c-9.32403415 0-17.25391343-3.29258081-23.85390586-9.88762916-6.56538599-6.59010498-9.86785426-14.51998353-9.86785426-23.78469223 0-9.37347288 3.30246827-17.30335141 9.86785426-23.89345641 6.59999243-6.59010498 14.53481506-9.88762917 23.85390586-9.8876299h67.41385717c9.29931517 0 17.25391343-3.29258081 23.80446786-9.88762916 6.63459962-6.59010498 9.89751734-14.51998353 9.89751734-23.78469223V714.10067325c0-9.2696528 3.30741236-17.19953134 9.89751663-23.78963632 6.59504907-6.59010498 14.53481506-9.88762917 23.8440184-9.88762989h-0.04943799zM242.37670615 141.21142578H309.79550667c9.30920334 0 17.21930624 3.29752417 23.82918686 9.98650588 6.58516089 6.49122901 9.8826858 14.52492761 9.8826858 23.78963633 0 9.2696528-3.29752417 17.20447542-9.87774172 23.78963632-6.61482398 6.59010498-14.52492761 9.88762917-23.83413094 9.88762916H242.38164951c-9.31414671 0-17.27368832 3.29752417-23.83413023 9.88762918-6.61482398 6.59010498-9.90246071 14.51998353-9.9024607 23.88851303V309.79550667c0 9.37347288-3.28269263 17.20447542-9.89751736 23.8934564-6.56044191 6.48628492-14.52492761 9.88762917-23.82424277 9.88762989-9.30920334 0-17.25391343-3.40134426-23.8242435-9.88762989-6.6098799-6.69392507-9.88762917-14.51998353-9.88762917-23.8934564V242.44097568C141.21142578 214.42932121 151.07928004 190.64957307 170.83476348 170.97319c19.74559598-19.77525907 43.56983876-29.66288824 71.48756058-29.66288823l0.05932545-0.09887599z m202.22673992 674.01497657h134.80793941c9.31414671 0 17.23413778 3.29752417 23.86873739 9.8876299 6.55055444 6.59010498 9.87774172 14.51998353 9.87774172 23.89345641 0 9.26470871-3.32718727 17.19458725-9.87774172 23.78469223-6.63459962 6.59504907-14.55459069 9.88762917-23.86873739 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29258081-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78469223 0-9.37347288 3.28269263-17.30335141 9.89751734-23.89345641 6.58021754-6.59010498 14.52492761-9.88762917 23.82424277-9.8876299z m-269.61587808-404.40404185c9.29931517 0 17.23908188 3.3914568 23.79952377 9.88268508 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.88851304v134.8079394c0 9.26470871-3.26291773 17.19458725-9.90246072 23.78469224-6.56044191 6.59504907-14.50020861 9.88762917-23.79952377 9.88762916-9.31414671 0-17.27368832-3.29258081-23.83413096-9.88762916C144.53861305 596.59608526 141.25097633 588.66620673 141.25097633 579.40149802V444.59355861c0-9.36852878 3.28763673-17.29840732 9.9024607-23.88851303 6.56044191-6.49122901 14.51998353-9.88762917 23.82918686-9.88762918z m0 269.60104654c9.29931517 0 17.23908188 3.29752417 23.79952377 9.88762989 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.8934564v67.34958763c0 9.36852878 3.29258081 17.30335141 9.89751734 23.88851231 6.59010498 6.59010498 14.53481506 9.88762917 23.83413024 9.88762917h67.41385715c9.31414671 0 17.25391343 3.29752417 23.85390586 9.88762989 6.56538599 6.59010498 9.87774172 14.51998353 9.87774243 23.78963633 0 9.36852878-3.31235572 17.19458725-9.87774243 23.8885123-6.59999243 6.49122901-14.53975915 9.88762917-23.85390587 9.88762917H242.42120006c-27.91277775 0-51.72713307-9.88762917-71.49250396-29.66288823-19.75548343-19.77031497-29.63322515-43.55500721-29.63322515-71.46284086V714.19954925c0-9.2696528 3.28269263-17.20447542 9.89751662-23.78963633 6.59010498-6.59010498 14.53481506-9.88762917 23.83413095-9.88762916l-0.03955053-0.09887672z m337.02973524-336.95557825c9.31414671 0 17.23413778 3.29752417 23.8687374 9.88762917 6.55055444 6.59010498 9.86291017 14.51998353 9.86291017 23.78963632v101.12572983h101.13067391c9.29931517 0 17.22919442 3.29752417 23.82918687 9.88762917 6.56538599 6.59010498 9.87279762 14.51998353 9.87279762 23.78963632 0 9.36852878-3.30741236 17.30335141-9.86785427 23.88851304-6.60493653 6.59010498-14.53481506 9.88762917-23.83413022 9.88762916H545.7489508v101.12572983c0 9.2696528-3.31235572 17.20447542-9.86291017 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762917-9.29931517 0-17.22919442-3.29752417-23.82424278-9.88762917-6.59010498-6.59010498-9.87774172-14.51998353-9.87774171-23.78963632V545.72423181H377.18958892c-9.30425926 0-17.22425033-3.29752417-23.85390588-9.88762918-6.56538599-6.59010498-9.87774172-14.51998353-9.87774171-23.88851303 0-9.2696528 3.31235572-17.20447542 9.87774171-23.78963632 6.62965553-6.59010498 14.5496466-9.88762917 23.85390588-9.88762917h101.12572982V377.14509429c0-9.2696528 3.28763673-17.20447542 9.8777417-23.78963633 6.59504907-6.59010498 14.52492761-9.88762917 23.82918688-9.88762918z" p-id="7237"></path></svg>',"tp-tab-delete":'<svg t="1629436983964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17120" width="20" height="20"><path d="M950.857143 0H73.142857C31.695238 0 0 31.695238 0 73.142857v877.714286c0 41.447619 31.695238 73.142857 73.142857 73.142857h877.714286c41.447619 0 73.142857-31.695238 73.142857-73.142857V73.142857c0-41.447619-31.695238-73.142857-73.142857-73.142857z m-24.380953 926.47619H97.52381V97.52381h828.95238v828.95238z"  p-id="17121"></path><path d="M316.952381 560.761905h390.095238c26.819048 0 48.761905-21.942857 48.761905-48.761905s-21.942857-48.761905-48.761905-48.761905H316.952381c-26.819048 0-48.761905 21.942857-48.761905 48.761905s21.942857 48.761905 48.761905 48.761905z" p-id="17122"></path></svg>',tpButtons:'<svg t="1630068696978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21708" width="28" height="28"><path d="M800 256h-64a32 32 0 0 0-31.84-32H159.84C142.4 224 128 238.432 128 256.224v415.552A32 32 0 0 0 159.84 704H160v64H128c-35.328 0-64-28.48-64-63.904V223.904C64 188.608 92.864 160 128 160h608c35.328 0 64 28.48 64 63.904V256zM192 351.84A64 64 0 0 1 256.16 288h639.68A64 64 0 0 1 960 351.84v448.32A64 64 0 0 1 895.84 864H256.16A64 64 0 0 1 192 800.16v-448.32z m64 32.384v383.552A31.968 31.968 0 0 0 287.744 800h576.512c17.184 0 31.744-14.4 31.744-32.224V384.224A31.968 31.968 0 0 0 864.256 352H287.744C270.56 352 256 366.4 256 384.224z" p-id="21709"></path><path  transform="scale(0.45) translate(280, 780)" d="M393.944329 226.04293h185.769284c115.432212 0 203.353552 33.325024 203.353552 137.979782 0 51.618335-28.361723 104.796566-76.576651 121.388173v3.828832c60.694087 14.180861 105.3638 56.723446 105.3638 132.732863 0 113.446891-94.019111 165.348844-217.676222 165.348844H393.944329zM571.488713 453.787564c70.904307 0 102.385819-28.361723 102.38582-73.59867 0-49.349398-33.466833-69.060795-100.967733-69.060795h-66.650049V453.787564z m12.904584 246.463371c76.576651 0 118.268384-27.227254 118.268384-85.085168 0-54.596316-40.982689-77.427503-118.268384-77.427504H506.256751v163.079906zM908.284171 638.138762V450.525966h-59.985043v-82.674422l65.231962-5.246919 12.904584-113.446891h93.310068v113.446891h104.796565v87.921341h-104.796565V638.138762c0 48.498546 19.711397 70.904307 57.716105 70.904307a124.366154 124.366154 0 0 0 41.691733-9.21756l18.151502 81.256336a276.101371 276.101371 0 0 1-89.481235 15.882564c-100.825924 0.99266-139.539676-62.679407-139.539676-158.825647zM1210.903753 362.604625h91.04113l7.657665 56.014403h2.977981c37.153857-36.303005 80.405484-66.650048 138.12159-66.650049 91.750173 0 131.172968 63.672068 131.172968 170.170337v265.182108h-111.461571v-251.001247c0-65.231962-18.151503-88.772192-59.985043-88.772192-34.884919 0-56.723446 16.591608-88.772193 47.789503v291.983936h-110.752527z"></path></svg>',tpIconlists:'<svg t="1630921705647" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8438" width="20" height="20"><path d="M944.384 591.36 375.36 591.36c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 432.512 1024.064 468.096 1024.064 511.936 1024.064 555.776 988.416 591.36 944.384 591.36L944.384 591.36zM944.384 273.664 375.36 273.664c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 114.816 1024.064 150.336 1024.064 194.24 1024.064 238.08 988.416 273.664 944.384 273.664L944.384 273.664zM166.464 861.376l12.032 60.416c0.064 0.576 0.128 1.344 0.128 2.432 0 1.728-0.384 3.136-1.28 4.288-0.896 1.152-2.176 1.792-3.968 1.792-1.664 0-3.392-0.448-5.248-1.408l-58.752-27.904-57.984 29.248c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.624-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672-47.936-42.304C1.216 818.24 0.064 816.384 0.064 814.656c-0.064-2.944 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424c1.6-3.328 3.712-4.992 6.272-5.056 2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.704 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 861.376 166.464 861.376zM166.464 532.352l12.032 60.416C178.56 593.28 178.624 594.112 178.624 595.2c0 1.728-0.384 3.136-1.28 4.288C176.448 600.64 175.104 601.28 173.376 601.28c-1.664 0-3.392-0.448-5.248-1.408L109.44 572.032 51.456 601.28C49.6 602.24 47.872 602.752 46.272 602.752c-1.856 0-3.2-0.512-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.448 0.064-1.28 0.256-2.432l10.368-60.672L3.392 491.392C1.216 489.216 0.064 487.296 0.064 485.632c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 411.584 104.576 409.92 107.136 409.856c2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 532.352 166.464 532.352zM166.464 214.656l12.032 60.416C178.56 275.584 178.624 276.416 178.624 277.44c0 1.664-0.384 3.136-1.28 4.288C176.448 282.944 175.104 283.584 173.376 283.584c-1.664 0-3.392-0.448-5.248-1.408L109.44 254.336 51.456 283.584c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672L3.392 173.696C1.216 171.52 0.064 169.6 0.064 167.872c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 93.888 104.576 92.224 107.136 92.16c2.624 0 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 214.656 166.464 214.656zM375.36 761.536l569.088 0c43.968 0 79.68 35.584 79.68 79.424 0 43.84-35.648 79.424-79.68 79.424L375.36 920.384c-43.968 0-79.68-35.584-79.68-79.424C295.68 797.12 331.328 761.536 375.36 761.536L375.36 761.536zM375.36 761.536" p-id="8439"></path></svg>',"list-bull-tp-iconlists_tick":'<div style="width: 45px"><p style="height: 20px"><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span><p  style="height: 20px" ><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span></p></div>',tpParagraph:'<svg t="1631187903361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1637" width="24" height="24"><path d="M122.368 165.888h778.24c-9.216 0-16.384-7.168-16.384-16.384v713.728c0-9.216 7.168-16.384 16.384-16.384h-778.24c9.216 0 16.384 7.168 16.384 16.384V150.016c0 8.192-6.656 15.872-16.384 15.872z m-32.768 684.544c0 26.112 20.992 47.104 47.104 47.104h750.08c26.112 0 47.104-20.992 47.104-47.104V162.304c0-26.112-20.992-47.104-47.104-47.104H136.704c-26.112 0-47.104 20.992-47.104 47.104v688.128z" p-id="1638"></path><path d="M597.504 300.544h230.912v49.152h-230.912zM596.992 437.76h230.912v49.152h-230.912zM210.432 574.976h617.984v49.152H210.432zM210.432 712.192h617.984v49.152H210.432zM246.784 296.448h88.064V501.76h-29.184v29.184h117.248V501.76h-29.696V296.448H481.28v29.184h29.184V238.08H217.6v87.552h29.184z" p-id="1639"></path></svg>',tpColumns:'<svg t="1631064221790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26578" width="20" height="20"><path d="M416 64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704zM896 64H608c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H640c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704z"></path></svg>',tpLetterspacing:'<svg t="1610616201691" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="969" width="24" height="24"><path d="M682.666667 704l128 106.666667-128 106.666666v-85.333333H341.333333v85.333333L213.333333 810.666667l128-106.666667v85.333333h341.333334v-85.333333zM170.666667 170.666667v682.666666H85.333333V170.666667h85.333334z m768 0v682.666666h-85.333334V170.666667h85.333334z m-394.666667 0l202.666667 469.333333h-89.6l-38.4-93.866667h-213.333334L366.933333 640H277.333333l202.666667-469.333333h64zM512 255.146667L432.213333 469.333333h159.573334L512 255.146667z" p-id="970" fill="#222f3e"></path></svg>',tpIndent2em:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M170.666667 563.2v-102.4H887.466667v102.4zM170.666667 836.266667v-102.4H887.466667v102.4zM512 290.133333v-102.4H887.466667v102.4zM238.933333 341.333333V136.533333l204.8 102.4z"  p-id="5210"></path></svg>',tpIconfont:'<svg t="1631797032825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16487" width="30" height="30"><path d="M805.096727 186.810182H218.903273c-17.687273 0-32.116364 14.405818-32.116364 32.116363v586.170182c0 17.687273 14.429091 32.116364 32.116364 32.116364h586.193454c17.687273 0 32.116364-14.429091 32.116364-32.116364V218.903273c0-17.687273-14.429091-32.116364-32.116364-32.116364z m0-46.545455a78.685091 78.685091 0 0 1 78.661818 78.661818v586.170182a78.685091 78.685091 0 0 1-78.661818 78.661818H218.903273a78.685091 78.685091 0 0 1-78.661818-78.661818V218.903273a78.685091 78.685091 0 0 1 78.661818-78.661818h586.193454z"  p-id="16488"></path><path d="M581.818182 465.454545h162.909091v-162.90909h-162.909091v162.90909z m-23.272727-186.181818h209.454545v209.454546h-209.454545v-209.454546zM372.363636 744.727273c51.386182 0 93.090909-41.751273 93.090909-93.090909 0-51.386182-41.751273-93.090909-93.090909-93.090909-51.386182 0-93.090909 41.751273-93.090909 93.090909 0 51.386182 41.751273 93.090909 93.090909 93.090909z m0 23.272727c-64.116364 0-116.363636-52.037818-116.363636-116.363636 0-64.116364 52.037818-116.363636 116.363636-116.363637 64.116364 0 116.363636 52.037818 116.363637 116.363637 0 64.116364-52.037818 116.363636-116.363637 116.363636zM736.907636 721.454545l-80.663272-139.636363-80.663273 139.636363h161.326545zM535.272727 744.727273l120.971637-209.454546 120.971636 209.454546H535.272727zM417.093818 393.774545l44.776727-43.52-61.812363-8.96L372.363636 285.253818l-27.694545 56.040727-61.905455 8.983273 44.683637 43.52-10.519273 61.672727 55.226182-29.090909 55.458909 29.137455-10.519273-61.742546z m24.994909 8.145455l16.384 96.116364-86.318545-45.381819-86.109091 45.381819 16.407273-96.116364L232.727273 334.010182l96.488727-13.963637L372.363636 232.727273l43.147637 87.296 96.488727 13.963636-69.911273 67.956364z"  ></path></svg>',"tp-columns-default":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-2":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-3":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="40" height="40"><path d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path><path d="M938.666667 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333334-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z" p-id="27034"></path></svg>'}}},_t={zh_CN:{Collapse:"\u6298\u53E0\u9762\u677F","Write here":"\u5728\u8FD9\u91CC\u5199\u5165\u5185\u5BB9",Tabs:"\u6807\u7B7E\u9762\u677F","Panel head":"\u677F\u5934","Panel main":"\u677F\u4F53",Padding:"\u5185\u8FB9\u8DDD",Margin:"\u5916\u8FB9\u8DDD","border Radius":"\u8FB9\u6846\u5706\u89D2","Templates Style":"\u6A21\u677F\u6837\u5F0F",Buttons:"\u6309\u94AE\u7EC4\u4EF6","Icon List":"\u56FE\u6807\u5217\u8868","Icon Library":"\u56FE\u6807\u5E93","Horizontal columns":"\u6C34\u5E73\u5206\u5217","Style {0}":"\u6837\u5F0F {0}","Select tmplate":"\u9009\u62E9\u6A21\u677F\u6837\u5F0F","Letter spacing":"\u5B57\u6BCD\u95F4\u8DDD","Picture background fill":"\u56FE\u7247\u80CC\u666F\u586B\u5145","Spacing before paragraph":"\u6BB5\u524D\u8DDD","Spacing after paragraph":"\u6BB5\u540E\u8DDD","First line indent":"\u9996\u884C\u7F29\u8FDB","Hanging Indent":"\u60AC\u6302\u7F29\u8FDB","Indent mode":"\u60AC\u6302\u65B9\u5F0F","Iconfont Size":"\u56FE\u6807\u5927\u5C0F","Iconfont Color":"\u56FE\u6807\u989C\u8272"}};d.addI18n=function(t){return function(){h(arguments[1],_t[arguments[0]]),t.apply(this,arguments)}}(d.addI18n),d.IconManager.add=function(t){return function(){h(arguments[1].icons,Ct[arguments[0]].icons),t.apply(this,arguments)}}(d.IconManager.add);let St=function(t){return new Promise((e,n)=>{let a=t.match(/<(style)\s*>([\s\S]+)<\/\1>/);e(a&&a[2]?a[2].trim():"")})};d.Editor.prototype.setTpContent=function(t,e){return St(t).then(n=>{}),this.setContent(t,e)};const j={global$1:tinymce.util.Tools,global$7:tinymce.html.Node,componentsApi:D,createSkt:ot};g.default=j,g.tinymcePlugin=j,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
