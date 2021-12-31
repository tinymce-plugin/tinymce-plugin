import fs from "fs";
import MarkdownIt from "markdown-it";
import mdContainer from "../markdown-it-container";
import mdAnchor from "../markdown-it-anchor";

// import _G from '../../../global'
// import _routes from "../../../src/router/routers"
import hljs from '../../../public/highlight/highlight.js';
var docSite:any = {TimeID: new Date().getTime(),dataList:[]};
const docRule = /^\/@docs\/(.*?).md$/;


function writeFs(path: string,content: { TimeID: number; dataList: never[]; }){
  return new Promise(function(resolve:Function,reject){
    fs.writeFile(path,JSON.stringify(content, null , 2), "utf-8",function(err: any){ 
      if(err){
        reject(err)
      }else{
        resolve()
      } 
    })
  })
}

// fs.unlink('docSite.json', (err) => {
//   if (err) throw err;
// });

const demoContainer = (md: { render: (arg0: any) => any; }, callback: (arg0: any) => any) => ({
 
  validate(params: string) {
    return params.trim().match(/^demo\s*(.*)$/);
  },
  render(tokens:any, idx: string | number) {
    //   console.log(tokens[idx].type);
    //  if(tokens[idx].type === 'code_inline' ){
       
    //     tokens[idx].attrPush(["name",'fv-code'])
    //  }
    // console.log(idx);
    if (tokens[idx].nesting === 1) {
      // console.log(tokens);
      // tokens[idx].attrPush(["class",'fv-demo'])
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      docSite.dataList.push(tokens)
      docSite.dataList.push(m)
      const description = m && m.length > 1 ? m[1] : "";
      description && callback(md.render(description));
      return "";
    }
    return "";
  },
});

const demoTinymceVue3Container =  (md: { render: (arg0: any) => any; }, callback: { (description: any): void; (arg0: any): any; }) => ({
 
  validate(params: string) {
    
    
    return params.trim().match(/^tinymce-vue3\s*(.*)$/);
  },
  render(tokens: any, idx: string | number) {
    //   console.log(tokens[idx].type);
    //  if(tokens[idx].type === 'code_inline' ){
       
    //     tokens[idx].attrPush(["name",'fv-code'])
    //  }
    // console.log(idx);
    if (tokens[idx].nesting === 1) {
      // console.log(tokens);
      // tokens[idx].attrPush(["class",'fv-demo'])
      const m = tokens[idx].info.trim().match(/^tinymce-vue3\s*(.*)$/);
      docSite.dataList.push(tokens)
      docSite.dataList.push(m)
      const description = m && m.length > 1 ? m[1] : "";
      description && callback(md.render(description));
      return "";
    }
    return "";
  },
});

const demoTinymceVue2Container =  (md: { render: (arg0: any) => any; }, callback: (arg0: any) => any) => ({
 
  validate(params: string) {
    return params.trim().match(/^tinymce-vue2\s*(.*)$/);
  },
  render(tokens: { [x: string]: { info: string; nesting:any }; }, idx: string | number) {
    //   console.log(tokens[idx].type);
    //  if(tokens[idx].type === 'code_inline' ){
       
    //     tokens[idx].attrPush(["name",'fv-code'])
    //  }
    // console.log(idx);
    if (tokens[idx].nesting === 1) {
      // console.log(tokens);
      // tokens[idx].attrPush(["class",'fv-demo'])
      const m = tokens[idx].info.trim().match(/^tinymce-vue2\s*(.*)$/);
      docSite.dataList.push(tokens)
      docSite.dataList.push(m)
      // console.log(m);
      // console.log(tokens[idx]);
      
      const description = m && m.length > 1 ? m[1] : "";
      console.log(description);
      description && callback(md.render(description));
      return "";
    }
    return "";
  },
});

const demoTinymceReactContainer =  (md: { render: (arg0: any) => any; }, callback: (arg0: any) => any) => ({
 
  validate(params: string) {
    return params.trim().match(/^tinymce-react\s*(.*)$/);
  },
  render(tokens: { [x: string]: { info: string; nesting:any }; }, idx: string | number) {
    //   console.log(tokens[idx].type);
    //  if(tokens[idx].type === 'code_inline' ){
       
    //     tokens[idx].attrPush(["name",'fv-code'])
    //  }
    // console.log(idx);
    if (tokens[idx].nesting === 1) {
      // console.log(tokens);
      // tokens[idx].attrPush(["class",'fv-demo'])
      const m = tokens[idx].info.trim().match(/^tinymce-react\s*(.*)$/);
      docSite.dataList.push(tokens)
      docSite.dataList.push(m)
      // console.log(m);
      // console.log(tokens[idx]);
      
      const description = m && m.length > 1 ? m[1] : "";
      console.log(description);
      description && callback(md.render(description));
      return "";
    }
    return "";
  },
});

function removeDocSiteFn() {
  fs.unlink('docSite.json', (err: any) => {
  if (err) throw err;
  });
}
function stripScript(content: string) {
  const result = content.match(/<script.*>([\s\S]+)<\/script>/);
  const code = result && result[1] ? result[1].trim() : "";
  // code.replace(/import [\s\S]+ from [\s\S]+;/g,'')
  // console.log(result);
  return code;
}

function stripStyle(content: string) {
  const result = content.match(/<style.*>([\s\S]+)<\/style>/);
  return result && result[2] ? result[2].trim() : "";
}
function getHighlightCode (code: { match: (arg0: RegExp) => { (): any; new(): any; length: any; }; }, lang: string, langText: string){
  try {
    let numberStr = '';
    let numberLen = code.match(/\n/ig).length
     for(let i =0; i<numberLen&&numberLen>5; i++) numberStr +='<li>'+(i+1)+'</li>'
    
    return '<pre class="hljs fv-hljs">'+( numberStr? '<ul class="highlight-line-number" >'+numberStr+'</ul>':'')+'<code class=" hljs hljs-'+lang+'" @click.stop="()=>{}">' +
       hljs.highlight(lang,code,true).value +
           '</code><div class="language-text" >'+ langText +'</div></pre>';
  } catch (__) {}
  return ''
}
function stripTemplate(content: string) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<template>/, '').replace(/<\/template>/, '').trim();
}

interface createVuedcoPlugin {
  docsPath?: (root: string) => string | undefined;
  root?: string | undefined;
  plugins?: any[];
}
export function createVuedcoPlugin(options: { docsPath: any; mode?: any; root?: any; }) {
  const { docsPath , root, mode} = options;
  mode === 'production' ? removeDocSiteFn(): ""
  const docDir = docsPath?docsPath(root) :'' || root;
 
  const docLoadRule = new RegExp(`/(.*?).md$`)
  return {
    name: 'md-to-vue-plugin', // 必须
    buildEnd(error: any){
      if (error) throw error;
      writeFs('docSite.json',docSite)
    },
    transform(src: any, id: any) {
      // console.log(id);
        if (docLoadRule.test(id)) {
        
            const fileName:any = id.split("/").pop().split(".")[0]
            const demos: { id: string; component: string; }[] = [];
            const filePath = 'https://github.com/tinymce-plugin/tinymce-plugin/edit/main'+id.replace(root.replace(/\\/g,'/'),'')
              let currentDescription = "";
              let currentType = '';
              const md = new MarkdownIt("default", {
                html: true,
                linkify: true,
                langPrefix:   'language-', 
                typographer: true,
                highlight: function (code: any, lang: string) {
                  const id = `Demo${demos.length}`;
                  let langText = lang;
                  lang === 'vue' ? lang = 'js': ''
                  if (langText === "vue") {
                   
                    const stript = ((currentType ==='vue2'?'':stripScript(code)) || "export default {}").replace(
                      "export default",
                      `const ${id} =`,
                    );
                    const template = stripTemplate(code);
                    // console.log(stript);
                    demos.push({
                      id: id,
                      component: [
                        "",
                        stript,
                        `
                        if (${id}.methods) {
                          ${id}.methods.source = function () {
                            return ${JSON.stringify(getHighlightCode(code, lang, langText))}
                          }
                          ${currentType ==='vue2' ? ` ${id}.methods.template= function () {
                            return ${JSON.stringify(template)}
                            }
                            ${id}.methods.sourceCode = function(){
                              return ${stripScript(code).replace(/import(.*);\n/gi,'').split("export default")[1].replace(/data\(\)/,'data: function()')}
                            }
                            `:''}
                        } else {
                          ${id}.methods = {
                            ${currentType ==='vue2'?`template(){
                            return ${JSON.stringify(template)}
                            },sourceCode(){
                              return ${stripScript(code).replace(/import(.*);\n/gi,'').split("export default")[1].replace(/data\(\)/,'data: function()')}
                            },`:''}
                            source() {
                              return ${JSON.stringify(getHighlightCode(code, lang, langText))}
                            },
                          }
                        }`,
                        `${id}.template = ${JSON.stringify(
                          currentType ==='vue2'?
                            `<PreviewVue2 class="demo-${fileName}"  :template="template()"  :source="source()">
                              ${
                                currentDescription &&
                                `<template v-slot:description>${currentDescription}</template>`
                              }
                            </PreviewVue2>`:
                            `<Preview class="demo-${fileName}" :source="source()">
                                <template v-slot:demo>${template}</template>'
                                ${
                                  currentDescription &&
                                  `<template v-slot:description>${currentDescription}</template>`
                                } 
                              </Preview>`
                        )}`,
                      ].join("\n"),
                    });
                    return '<'+id+' />'
                  }else if(currentType =='react'){
                 
                    const stript = "export default {}".replace(
                      "export default",
                      `const ${id} =`,
                    );
                    
                    const template = stripTemplate(code);
                 
                    demos.push({
                      id: id,
                      component: [
                        "",
                        stript,
                        `
                          ${id}.methods = {
                            source() {
                              return ${JSON.stringify(getHighlightCode(code, lang, langText))}
                            },
                            sourceCode(React,ReactDOM,Editor,DomeID){
                                ${code.replace(/import(.*);\n/gi,'').replace(/document\.getElementById\(([A-Za-z0-9'"^%&',;=?$]+)\)/,'DomeID').replace(/ReactDOM\.render/,'return ReactDOM.render')}
                            }
                          }
                       `,
                        `${id}.template = ${JSON.stringify(
                            `<PreviewReact class="demo-${fileName}"  :source="source()">
                              ${
                                currentDescription &&
                                `<template v-slot:description>${currentDescription}</template>`
                              }
                            </PreviewReact>`
                          
                        )}`,
                      ].join("\n"),
                    });
                    return '<'+id+' />'
                  } else if (lang && hljs.getLanguage(lang)){
                    try {
                      let numberStr = '';
                      let numberLen = code.match(/\n/ig).length
                       for(let i =0; i<numberLen&&numberLen>5; i++) numberStr +='<li>'+(i+1)+'</li>'
                      
                      return '<pre class="hljs fv-hljs">'+( numberStr? '<ul class="highlight-line-number" >'+numberStr+'</ul>':'')+'<code class=" hljs hljs-'+lang+'" @click.stop="()=>{}">' +
                         hljs.highlight(lang,code,true).value +
                             '</code><div class="language-text" >'+ langText +'</div></pre>';
                    } catch (__) {}
                  }
                  return '';
                },
              });
              const default_code_inline =  md.renderer.rules.code_inline;
              md.renderer.rules.code_inline = function(tokens: { [x: string]: { attrSet: (arg0: string, arg1: string) => void; }; }, idx: string | number, options: any, env: any, self: any) {
                tokens[idx].attrSet('class','fv-code_inline')
                return default_code_inline(tokens, idx, options, env, self)
              }
              md.use(
                mdContainer,
                "tinymce-vue3",
                demoTinymceVue3Container(md, (description: string) => {
                  currentType = 'vue'
                  currentDescription = description;
                }),
              );
              md.use(
                mdContainer,
                "tinymce-vue2",
                demoTinymceVue2Container(md, (description) => {
                 
                  currentType = 'vue2'
                  currentDescription = description;
                }),
              );
              md.use(
                mdContainer,
                "tinymce-react",
                demoTinymceReactContainer(md, (description) => {
                  // console.log(description);
                  currentType = 'react'
                  console.log(currentType);
                  currentDescription = description;
                }),
              );

           
              md.use(mdContainer, "tip");
              md.use(mdContainer, "danger");
              md.use(mdContainer, "info");
              md.use(mdContainer, "warning");
              md.use(mdAnchor,{  permalinkSymbol:'#',level: [1,2,3], permalink: true , permalinkBefore:true, callback:  function(value: any){ mode === 'production' ? docSite.dataList.push(value) : ''} })
              const context = md.render(src, {});
              const docComponent = `
                    import { createApp, defineComponent } from 'vue';
                      ${demos.map((demo) => demo.component).join("")}
                      const __script = defineComponent({
                        components: {
                            ${demos.map((demo) => demo.id).join(",")}
                        },
                        template: '<div class="fv-mardown-html">'+${JSON.stringify('<div class="fv-mardown-main">'+context+'</div>'+`<div class="edit-page"><a href="${filePath}" target="_blank" ><span>在Github上编辑此页</span><svg class="icon outbound icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" data-v-1501f284=""><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></div>`)}+'</div><PagesRouter pagesName="${fileName}" />'
                      });
                      export default __script;`;
          return {
            code: docComponent,
            map: null, // 如果可行将提供 source map
          }
        }
      },
  };
}