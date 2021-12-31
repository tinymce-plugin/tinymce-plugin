/*!
 * Tiny Page Embed plugin
 *
 * Copyright 2010-2021 Tiny Technologies, Inc. All rights reserved.
 *
 * Version: 1.1.0-38
 */
!function(i){"use strict";function r(e){return parseInt(e,10)}function s(e,n){var r=e-n;return 0==r?0:0<r?1:-1}function t(e,n,r){return{major:e,minor:n,patch:r}}function o(e){var n=/([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(e);return n?t(r(n[1]),r(n[2]),r(n[3])):t(0,0,0)}function a(e,n){return!!e&&-1===function(e,n){var r=s(e.major,n.major);if(0!==r)return r;var t=s(e.minor,n.minor);if(0!==t)return t;var o=s(e.patch,n.patch);return 0!==o?o:0}(o([(r=e).majorVersion,r.minorVersion].join(".").split(".").slice(0,3).join(".")),o(n));var r}function y(e){return function(){return e}}function e(){return l}var n,u=y(!1),c=y(!0),l=(n={fold:function(e,n){return e()},is:u,isSome:u,isNone:c,getOr:m,getOrThunk:d,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:y(null),getOrUndefined:y(void 0),or:m,orThunk:d,map:e,each:function(){},bind:e,exists:u,forall:c,filter:e,equals:f,equals_:f,toArray:function(){return[]},toString:y("none()")},Object.freeze&&Object.freeze(n),n);function f(e){return e.isNone()}function d(e){return e()}function m(e){return e}function p(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"==n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===n}}function v(e,n){return r=e,t=n,-1<ie.call(r,t);var r,t}function g(e,n){for(var r=e.length,t=new Array(r),o=0;o<r;o++){var i=e[o];t[o]=n(i,o)}return t}function h(e,n){for(var r=0,t=e.length;r<t;r++){n(e[r],r)}}function b(e,n){for(var r=[],t=0,o=e.length;t<o;t++){var i=e[t];n(i,t)&&r.push(i)}return r}function S(e){for(var n=[],r=0,t=e.length;r<t;++r){if(!ee(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e);se.apply(n,e[r])}return n}function w(e,n){return S(g(e,n))}function x(e,n){for(var r=ae(e),t=0,o=r.length;t<o;t++){var i=r[t];n(e[i],i)}}function O(e,n,r){!function(e,n,r){if(!(Z(r)||ne(r)||te(r)))throw i.console.error("Invalid call to Attr.set. Key ",n,":: Value ",r,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(n,r+"")}(e.dom(),n,r)}function N(e,n){var r=e.dom().getAttribute(n);return null===r?void 0:r}function E(e,n){return $.from(N(e,n))}function T(e,n,r){return 0!=(e.compareDocumentPosition(n)&r)}function C(e,n){var r=function(e,n){for(var r=0;r<e.length;r++){var t=e[r];if(t.test(n))return t}}(e,n);if(!r)return{major:0,minor:0};function t(e){return Number(n.replace(r,"$"+e))}return ve(t(1),t(2))}function A(e,n){return function(){return n===e}}function D(e,n){return function(){return n===e}}function _(e,n){var r=String(n).toLowerCase();return function(e,n){for(var r=0,t=e.length;r<t;r++){var o=e[r];if(n(o,r))return $.some(o)}return $.none()}(e,function(e){return e.search(r)})}function R(e,n){return-1!==e.indexOf(n)}function I(n){return function(e){return R(e,n)}}function P(e){return e.nodeType!==Le&&e.nodeType!==je||0===e.childElementCount}function L(e){return n=0,r=e.dom().childNodes,$.from(r[n]).map(Q.fromDom);var n,r}function j(e,n,r){var t,o=(void 0===(t=N(e,n))||""===t?[]:t.split(" ")).concat([r]);return O(e,n,o.join(" ")),!0}function k(e){return void 0!==e.dom().classList}function M(e,n){k(e)?e.dom().classList.add(n):j(e,"class",n)}function U(e,n){return k(e)&&e.dom().classList.contains(n)}function F(e){return U(e,ke)}function z(e){var n=e.attr("class");return n&&R(" "+n+" "," "+ke+" ")}function B(s,a,u){return $.from(s).map(Q.fromDom).filter(F).bind(L).filter(function(e){return"iframe"===e.dom().nodeName.toLowerCase()}).fold(function(){return a},function(e){function n(e,n,r){return $.from(N(e,n)).getOr(r)}var r,t,o,i;return{source:{value:n(e,"src",a.source.value)},size:(r=s,i=Q.fromDom(r),t=function(e,n){return U(i,n.value)?n.value:e},o="inline",h(u,function(e){o=t(o,e)}),o),dimensions:{width:n(e,"width",a.dimensions.width),height:n(e,"height",a.dimensions.height)},name:n(e,"name",a.name),title:n(e,"title",a.title),descriptionUrl:{value:n(e,"longdesc",a.descriptionUrl.value)},showBorder:E(e,"frameborder").map(function(e){return"0"!==e.toLowerCase()}).getOr(a.showBorder),scrollbar:E(e,"scrolling").map(function(e){return"yes"===e.toLowerCase()}).getOr(a.scrollbar)}})}function K(e,n){e.dom().appendChild(n.dom())}function V(e,n){return r=n,o=void 0===(t=e)?i.document:t.dom(),P(o)?[]:g(o.querySelectorAll(r),Q.fromDom);var r,t,o}function q(e,n,r){if(!Z(r))throw i.console.error("Invalid call to CSS.set. Property ",n,":: Value ",r,":: Element ",e),new Error("CSS value must be a string: "+r);var t;void 0!==(t=e).style&&re(t.style.getPropertyValue)&&e.style.setProperty(n,r)}var W,H,X,Y,G=function(r){function e(){return o}function n(e){return e(r)}var t=y(r),o={fold:function(e,n){return n(r)},is:function(e){return r===e},isSome:c,isNone:u,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(e){return G(e(r))},each:function(e){e(r)},bind:n,exists:n,forall:n,filter:function(e){return e(r)?o:l},toArray:function(){return[r]},toString:function(){return"some("+r+")"},equals:function(e){return e.is(r)},equals_:function(e,n){return e.fold(u,function(e){return n(r,e)})}};return o},$={some:G,none:e,from:function(e){return null==e?l:G(e)}},J=function(e){if(null==e)throw new Error("Node cannot be null or undefined");return{dom:y(e)}},Q={fromHtml:function(e,n){var r=(n||i.document).createElement("div");if(r.innerHTML=e,!r.hasChildNodes()||1<r.childNodes.length)throw i.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return J(r.childNodes[0])},fromTag:function(e,n){var r=(n||i.document).createElement(e);return J(r)},fromText:function(e,n){var r=(n||i.document).createTextNode(e);return J(r)},fromDom:J,fromPoint:function(e,n,r){var t=e.dom();return $.from(t.elementFromPoint(n,r)).map(J)}},Z=p("string"),ee=p("array"),ne=p("boolean"),re=p("function"),te=p("number"),oe=Array.prototype.slice,ie=Array.prototype.indexOf,se=Array.prototype.push,ae=(re(Array.from)&&Array.from,Object.keys),ue=Object.hasOwnProperty,ce=function(e,n){return ue.call(e,n)},le=(i.Node.ATTRIBUTE_NODE,i.Node.CDATA_SECTION_NODE,i.Node.COMMENT_NODE,i.Node.DOCUMENT_NODE),fe=(i.Node.DOCUMENT_TYPE_NODE,i.Node.DOCUMENT_FRAGMENT_NODE,i.Node.ELEMENT_NODE),de=(i.Node.TEXT_NODE,i.Node.PROCESSING_INSTRUCTION_NODE,i.Node.ENTITY_REFERENCE_NODE,i.Node.ENTITY_NODE,i.Node.NOTATION_NODE,void 0!==i.window?i.window:Function("return this;")(),function(e,n){return T(e,n,i.Node.DOCUMENT_POSITION_CONTAINED_BY)}),me=function(e){function n(){return r}var r=e;return{get:n,set:function(e){r=e},clone:function(){return me(r)}}},pe=function(){return ve(0,0)},ve=function(e,n){return{major:e,minor:n}},ge={nu:ve,detect:function(e,n){var r=String(n).toLowerCase();return 0===e.length?pe():C(e,r)},unknown:pe},he="Firefox",ye=function(e){var n=e.current;return{current:n,version:e.version,isEdge:A("Edge",n),isChrome:A("Chrome",n),isIE:A("IE",n),isOpera:A("Opera",n),isFirefox:A(he,n),isSafari:A("Safari",n)}},be={unknown:function(){return ye({current:void 0,version:ge.unknown()})},nu:ye,edge:y("Edge"),chrome:y("Chrome"),ie:y("IE"),opera:y("Opera"),firefox:y(he),safari:y("Safari")},Se="Windows",we="Android",xe="Solaris",Oe="FreeBSD",Ne="ChromeOS",Ee=function(e){var n=e.current;return{current:n,version:e.version,isWindows:D(Se,n),isiOS:D("iOS",n),isAndroid:D(we,n),isOSX:D("OSX",n),isLinux:D("Linux",n),isSolaris:D(xe,n),isFreeBSD:D(Oe,n),isChromeOS:D(Ne,n)}},Te={unknown:function(){return Ee({current:void 0,version:ge.unknown()})},nu:Ee,windows:y(Se),ios:y("iOS"),android:y(we),linux:y("Linux"),osx:y("OSX"),solaris:y(xe),freebsd:y(Oe),chromeos:y(Ne)},Ce=function(e,r){return _(e,r).map(function(e){var n=ge.detect(e.versionRegexes,r);return{current:e.name,version:n}})},Ae=function(e,r){return _(e,r).map(function(e){var n=ge.detect(e.versionRegexes,r);return{current:e.name,version:n}})},De=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,_e=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return R(e,"edge/")&&R(e,"chrome")&&R(e,"safari")&&R(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,De],search:function(e){return R(e,"chrome")&&!R(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return R(e,"msie")||R(e,"trident")}},{name:"Opera",versionRegexes:[De,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:I("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:I("firefox")},{name:"Safari",versionRegexes:[De,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(R(e,"safari")||R(e,"mobile/"))&&R(e,"applewebkit")}}],Re=[{name:"Windows",search:I("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return R(e,"iphone")||R(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:I("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:I("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:I("linux"),versionRegexes:[]},{name:"Solaris",search:I("sunos"),versionRegexes:[]},{name:"FreeBSD",search:I("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:I("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Ie={browsers:y(_e),oses:y(Re)},Pe=me(function(e,n){var r,t,o,i,s,a,u,c,l,f,d,m,p=Ie.browsers(),v=Ie.oses(),g=Ce(p,e).fold(be.unknown,be.nu),h=Ae(v,e).fold(Te.unknown,Te.nu);return{browser:g,os:h,deviceType:(t=g,o=e,i=n,s=(r=h).isiOS()&&!0===/ipad/i.test(o),a=r.isiOS()&&!s,u=r.isiOS()||r.isAndroid(),c=u||i("(pointer:coarse)"),l=s||!a&&u&&i("(min-device-width:768px)"),f=a||u&&!l,d=t.isSafari()&&r.isiOS()&&!1===/safari/i.test(o),m=!f&&!l&&!d,{isiPad:y(s),isiPhone:y(a),isTablet:y(l),isPhone:y(f),isTouch:y(c),isAndroid:r.isAndroid,isiOS:r.isiOS,isWebView:y(d),isDesktop:y(m)})}}(i.navigator.userAgent,function(e){return i.window.matchMedia(e).matches})),Le=fe,je=le,ke=(Pe.get().browser.isIE(),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),"tiny-pageembed"),Me=function(e){var n=e.dom().styleSheets;return Array.prototype.slice.call(n)},Ue={},Fe={exports:Ue};H=Ue,X=Fe,Y=W=void 0,function(e){if("object"==typeof H&&void 0!==X)X.exports=e();else if("function"==typeof W&&W.amd)W([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=e()}}(function(){return function i(s,a,u){function c(n,e){if(!a[n]){if(!s[n]){var r="function"==typeof Y&&Y;if(!e&&r)return r(n,!0);if(l)return l(n,!0);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}var o=a[n]={exports:{}};s[n][0].call(o.exports,function(e){return c(s[n][1][e]||e)},o,o.exports,i,s,a,u)}return a[n].exports}for(var l="function"==typeof Y&&Y,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,n,r){var t,s,o=(t=function(e){var n,r,t,o,i=[];for(t=0,o=(n=e.split(",")).length;t<o;t+=1)0<(r=n[t]).length&&i.push(s(r));return i},s=function(u){var e,n,c=u,l={a:0,b:0,c:0},f=[];function r(e){var n,r,t,o;if(e.test(c))for(r=0,t=(n=c.match(e)).length;r<t;r+=1)o=n[r],c=c.replace(o,Array(o.length+1).join("A"))}return e=function(e,n){var r,t,o,i,s,a;if(e.test(c))for(t=0,o=(r=c.match(e)).length;t<o;t+=1)l[n]+=1,i=r[t],s=c.indexOf(i),a=i.length,f.push({selector:u.substr(s,a),type:n,index:s,length:a}),c=c.replace(i,Array(a+1).join(" "))},r(/\\[0-9A-Fa-f]{6}\s?/g),r(/\\[0-9A-Fa-f]{1,5}\s/g),r(/\\./g),(n=/:not\(([^\)]*)\)/g).test(c)&&(c=c.replace(n,"     $1 ")),function(){var e,n,r,t,o=/{[^]*/gm;if(o.test(c))for(n=0,r=(e=c.match(o)).length;n<r;n+=1)t=e[n],c=c.replace(t,Array(t.length+1).join(" "))}(),e(/(\[[^\]]+\])/g,"b"),e(/(#[^\#\s\+>~\.\[:]+)/g,"a"),e(/(\.[^\s\+>~\.\[:]+)/g,"b"),e(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,"c"),e(/(:[\w-]+\([^\)]*\))/gi,"b"),e(/(:[^\s\+>~\.\[:]+)/g,"b"),c=(c=c.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," "),e(/([^\s\+>~\.\[:]+)/g,"c"),f.sort(function(e,n){return e.index-n.index}),{selector:u,specificity:"0,"+l.a.toString()+","+l.b.toString()+","+l.c.toString(),specificityArray:[0,l.a,l.b,l.c],parts:f}},{calculate:t,compare:function(e,n){var r,t,o;if("string"==typeof e){if(-1!==e.indexOf(","))throw"Invalid CSS selector";r=s(e).specificityArray}else{if(!Array.isArray(e))throw"Invalid CSS selector or specificity array";if(4!==e.filter(function(e){return"number"==typeof e}).length)throw"Invalid specificity array";r=e}if("string"==typeof n){if(-1!==n.indexOf(","))throw"Invalid CSS selector";t=s(n).specificityArray}else{if(!Array.isArray(n))throw"Invalid CSS selector or specificity array";if(4!==n.filter(function(e){return"number"==typeof e}).length)throw"Invalid specificity array";t=n}for(o=0;o<4;o+=1){if(r[o]<t[o])return-1;if(r[o]>t[o])return 1}return 0}});void 0!==r&&(r.calculate=o.calculate,r.compare=o.compare)},{}],2:[function(e,n,r){var t=e("specificity");n.exports={boltExport:t}},{specificity:1}]},{},[2])(2)});function ze(e){return w(e,tn)}function Be(n,e,r){var t=w(e,function(a){var e=V(n,a.selector);return h(e,function(e){var r,t,o,n,i,s=(r=a.raw,t=e,o={},h(r,function(e){if(void 0!==r[e]){var n=t.dom().style;v(n,e)||(o[e]=r[e])}}),o);n=s,i=e.dom(),x(n,function(e,n){q(i,n,e)})}),e});r&&h(t,function(e){var n;n="class",e.dom().removeAttribute(n)})}function Ke(e,n,r){function t(e){return-1!==e.selector.indexOf(",")}var o=w(b(e,t),function(n){var e=n.selector.split(",");return g(e,function(e){return{selector:e.trim(),raw:n.raw}})}),i=b(e,function(e){return!t(e)}).concat(o);i.sort(function(e,n){return rn.compare(e.selector,n.selector)}).reverse(),Be(n,i,r)}function Ve(e,n,r,t){var o=Me(e),i=ze(o).map(function(e){var n=e.selector;return{selector:r.hasOwnProperty(n)?r[n]:n,raw:e.raw}});Ke(i,n,t)}function qe(e,n,i,r){var t=Me(e),o=ze(t),s=b(o,function(e){return n=e.selector,r=n,o=0,""===(t=i)||!(r.length<t.length)&&r.substr(o,o+t.length)===t;var n,r,t,o});Ke(s,n,r)}function We(e,n,r,t){var o=Me(e),i=ze(o),s=b(i,function(e){return v(r,e.selector)});Ke(s,n,t)}function He(e,n,r){0<r.trim().length&&O(e,n,r)}function Xe(e,n,r,t){var o,i,s,a,u,c,l,f=(o=e,i=Q.fromTag("div"),O(i,"contentEditable","false"),M(i,ke),"inline"!==o.size&&M(i,o.size),i),d=Q.fromTag("iframe");return He(d,"src",e.source.value),He(d,"title",e.title),He(d,"name",e.name),He(d,"longdesc",e.descriptionUrl.value),(ce(s=e,a="dimensions")?$.from(s[a]):$.none()).each(function(e){He(d,"width",e.width),He(d,"height",e.height)}),e.showBorder||O(d,"frameborder","0"),O(d,"scrolling",e.scrollbar?"yes":"no"),K(f,d),n()&&function(e,n,r){var t=Q.fromTag("div");K(t,n);var o=e();r().fold(function(){sn.inlinePrefixedStylesKeepClasses(o,t,".tiny-pageembed")},function(e){var n=g(e,function(e){return"."+e});sn.inlineSelectorsStylesKeepClasses(o,t,n)});var i=V(t,"*[style]");h(i,function(e){var n=N(e,"style");O(e,"data-mce-style",n)})}(r,f,t),u=f,c=Q.fromTag("div"),l=Q.fromDom(u.dom().cloneNode(!0)),K(c,l),c.dom().innerHTML}function Ye(e){return void 0!==e.tiny_pageembed_classes}function Ge(e){return e.tiny_pageembed_classes}function $e(t){var n=[{text:"Inline Value",value:"inline"}].concat(Ye(t.settings)?Ge(t.settings):an),r=function(e){return{title:"Insert/Edit Iframe",body:{type:"tabpanel",tabs:[{title:"General",items:S([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],1<n.length?[{label:"Size",type:"selectbox",name:"size",items:n}]:[],"inline"===e.size?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[]])},{title:"Advanced",items:[{name:"name",type:"input",label:"Name"},{name:"title",type:"input",label:"Title"},{name:"descriptionUrl",type:"urlinput",label:"Long description URL"},{type:"label",label:"Border",items:[{type:"checkbox",name:"showBorder",label:"Show iframe border"}]},{type:"label",label:"Scrollbar",items:[{type:"checkbox",name:"scrollbar",label:"Enable scrollbar"}]}]}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"submit",text:"Save",primary:!0}],onChange:function(e,n){"size"===n.name&&(e.redial(r(e.getData())),e.focus("size"))},onSubmit:function(e){var n=e.getData();if(0<n.source.value.length){var r=Xe(n,function(){return!!t.settings.tiny_pageembed_inline_styles},function(){return Q.fromDom(t.getDoc())},function(){if(Ye(t.settings)){var e=Ge(t.settings);return $.some(g(e,function(e){return e.value}))}return $.none()});t.insertContent(r),t.nodeChanged()}e.close()},initialData:e}},e=t.selection.getNode(),o=B(e,{source:{value:""},size:"inline",dimensions:{width:"350px",height:"260px"},name:"",title:"",descriptionUrl:{value:""},showBorder:!0,scrollbar:!1},n);t.windowManager.open(r(o))}function Je(r){r.ui.registry.addToggleButton("pageembed",{icon:"embed-page",tooltip:"Embed iframe",onAction:function(e){$e(r)},onSetup:function(n){function e(e){return n.setActive(!r.readonly&&e.element.classList.contains(ke))}return r.on("nodechange",e),function(){return r.off("nodechange",e)}}}),r.ui.registry.addMenuItem("pageembed",{text:"Insert/edit iframe",icon:"embed-page",onAction:function(e){$e(r)}})}function Qe(e){h(e,function(e){if(z(e)){var n=new tinymce.html.Node("span",1);n.attr("class","mce-shim"),n.attr("data-mce-bogus","1"),e.append(n),e.attr("contenteditable","false")}})}function Ze(e){h(e,function(e){z(e)&&e.attr("contenteditable",null)})}function en(e){e.on("click keyup touchend",function(){$.from(e.selection.getNode()).map(Q.fromDom).each(function(e){var n,r;F(e)&&(n="data-mce-selected",(r=e.dom())&&r.hasAttribute&&r.hasAttribute(n)&&O(e,"data-mce-selected","2"))})}),e.on("PreInit",function(){e.parser.addNodeFilter("div",Qe),e.serializer.addNodeFilter("div",Ze)})}function nn(n,e){if(a(tinymce,"5.0.0"))return i.console.error("The pageembed plugin requires at least 5.0.0 of TinyMCE"),{};en(n),Je(n);var r=n.settings.tiny_pageembed_css_url,t=r||e+"/css/empa30.css";return n.on("init",function(e){n.dom.loadCSS(t)}),{}}var rn=Fe.exports.boltExport,tn=function(e){var n=e.cssRules;return w(n,function(e){return e.type===i.CSSRule.IMPORT_RULE?tn(e.styleSheet):e.type===i.CSSRule.STYLE_RULE?[function(e){var n=e.selectorText,r=e.style.cssText;if(void 0===r)throw new Error("WARNING: Browser does not support cssText property");return{selector:n,style:r,raw:e.style}}(e)]:[]})},on={inlineStyles:function(e,n,r){Ve(e,n,r,!0)},inlineStylesKeepClasses:function(e,n,r){Ve(e,n,r,!1)},inlinePrefixedStyles:function(e,n,r){qe(e,n,r,!0)},inlinePrefixedStylesKeepClasses:function(e,n,r){qe(e,n,r,!1)},inlineSelectorsStyles:function(e,n,r){We(e,n,r,!0)},inlineSelectorsStylesKeepClasses:function(e,n,r){We(e,n,r,!1)}},sn={inlineStyles:on.inlineStyles,inlineStylesKeepClasses:on.inlineStylesKeepClasses,inlinePrefixedStyles:on.inlinePrefixedStyles,inlinePrefixedStylesKeepClasses:on.inlinePrefixedStylesKeepClasses,inlineSelectorsStyles:on.inlineSelectorsStyles,inlineSelectorsStylesKeepClasses:on.inlineSelectorsStylesKeepClasses},an=[{text:"Responsive - 21x9",value:"tiny-pageembed--21by9"},{text:"Responsive - 16x9",value:"tiny-pageembed--16by9"},{text:"Responsive - 4x3",value:"tiny-pageembed--4by3"},{text:"Responsive - 1x1",value:"tiny-pageembed--1by1"}];tinymce.PluginManager.add("pageembed",nn)}(window);