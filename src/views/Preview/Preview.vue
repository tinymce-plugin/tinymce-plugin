<template>
  <div class="preview demo-block">
    <div class="preview__card">
      <div class="preview__demo source">
        <div><slot name="demo" ></slot></div>
      </div>
      <div :style='{height: `${state.codeHeight}px`}' class="preview__code meta">
        <div ref='codeRef' class="preview__coderef">
              <div class="preview__description description">
                 <slot name="description" ></slot>
              </div>
         
          <pre class="preview__coder highlight">
            <code class="language-markup">{{source}}</code>
          </pre>
        </div>
      </div>
      <div class="preview__footer demo-block-control"   @click.stop='toggleCode'>
        {{ state.codeHeight > 0 ? "隐藏代码" : "显示代码" }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
    defineComponent,
    reactive,
    ref,
    onMounted,
    nextTick
  } from "vue"
  export default defineComponent({
    name: "Preview",
    props: {
      source: {
        type: String,
        default: ""
      }
    },
    setup(props, {slots, attrs }) {
      const codeRef = ref<HTMLDivElement>()
      const state = reactive({
        codeHeight: 0
      })
      const highlightAll = () => {
        nextTick(() => {
          (window as any).Prism.highlightAll()
        })
      }
      const toggleCode = () => {
        if (state.codeHeight === 0) {
          // console.log(state.codeHeight)
          state.codeHeight = codeRef.value?.offsetHeight || 0
        } else {
          state.codeHeight = 0
        }
      }
      onMounted(() => {
        highlightAll()
      })
      return {
        toggleCode,
        slots,
        state,
        codeRef

      }
    }
  })

</script>

<style lang="scss" scoped>
.preview {
  text-align: left;
  &__description {
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
  }
  &__title {
    font-size: 18px;
    margin: 30px 0 20px 0;
  }
  &__card {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;

    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
  }
  &__demo {
    padding: 20px;
    background-color: #fff;
  }
  &__code {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    // transition: height 0.3s;
  }
  &__coderef {
    overflow: hidden;
    > pre {
      padding: 10px 0;
    }
  }
  &__coder {
    .language-markup {
      border: none;
      padding: 0 20px;
      font-size: 12px;
    }
  }
  &__comment {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px 10px 0 10px;
    background-color: #fff;
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }
  &__footer {
    font-size: 12px;
    border-top: 1px solid #eaeefb;
    height: 44px;
    line-height: 43px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    transition: color .3s,background-color .3s;
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }
  }
  .row-mb-20 {
    margin-bottom: 20px;
  }
  .ml-10 {
    margin-left: 10px;
  }
}
</style>


