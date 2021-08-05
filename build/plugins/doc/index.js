import { Plugin } from "vite";
import path from "path";
import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";
// import icon from "../../assets/icon.json";

const docRule = /^\/@docs\/(.*?).md$/;

const demoContainer = (md, callback) => ({
  validate(params) {
    return params.trim().match(/^demo\s*(.*)$/);
  },
  render(tokens, idx) {
    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
    if (tokens[idx].nesting === 1) {
      const description = m && m.length > 1 ? m[1] : "";
      description && callback(md.render(description));
      return "";
    }
    return "";
  },
});


function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  const code = result && result[2] ? result[2].trim() : "";
  return code;
}

function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
}

function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, "").trim();
}

export function createVuedcoPlugin(options) {
  const { docsPath , root} = options;
  const docDir = docsPath?docsPath(root) :'' || root;
  const docLoadRule = new RegExp(`/(.*?).md$`)
  return {
    name: 'md-to-vue-plugin', // 必须
    transform(src, id) {
        if (docLoadRule.test(id)) {
            const fileName = id.split("/").pop().split(".")[0]
            const demos = [];
              let currentDescription = "";
              const md = new MarkdownIt("default", {
                html: true,
                linkify: true,
                typographer: true,
                highlight: function (code, lang) {
                  if (lang === "html") {
                    const id = `Demo${demos.length}`;
                    const stript = (stripScript(code) || "export default {}").replace(
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
                        if (${id}.methods) {
                          ${id}.methods.source = function () {
                            return ${JSON.stringify(code)}
                          }
                        } else {
                          ${id}.methods = {
                            source() {
                              return ${JSON.stringify(code)}
                            },
                          }
                        }`,
                        `
                        if (${id}.methods) {
                          ${id}.methods.source = function () {
                            return ${JSON.stringify(code)}
                          }
                        } else {
                          ${id}.methods = {
                            source() {
                              return ${JSON.stringify(code)}
                            },
                          }
                        }`,
                        `${id}.template = ${JSON.stringify(
                          `<Preview class="demo-${fileName}" :source="source()">
                            <template v-slot:demo>${template}</template>
                            ${
                              currentDescription &&
                              `<template v-slot:description>${currentDescription}</template>`
                            }
                          </Preview>`,
                        )}`,
                      ].join("\n"),
                    });
                    return `<pre></pre><${id} />`;
                  }
                  return "";
                },
              });
              md.use(
                mdContainer,
                "demo",
                demoContainer(md, (description) => {
                  currentDescription = description;
                }),
              );
              md.use(mdContainer, "tip");
              md.use(mdContainer, "warning");
              const context = md.render(src, {});
              const docComponent = `
                      ${demos.map((demo) => demo.component).join("")}
                      const __script = {
                        components: {
                            ${demos.map((demo) => demo.id).join(",")}
                        },
                        template: ${JSON.stringify(context)}
                      };
                      export default __script;`;
          return {
            code: docComponent,
            map: null // 如果可行将提供 source map
          }
        }
      }
  };
}


