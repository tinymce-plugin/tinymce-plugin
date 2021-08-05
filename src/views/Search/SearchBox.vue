<template>
  <div class="search-box">
    <input
      ref="input"
      aria-label="Search"
      :value="query"
      :class="{ 'focused': focused }"
      :placeholder="placeholder"
      autocomplete="off"
      spellcheck="false"
      @input="query = $event.target.value"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    >
    <ul
      v-if="showSuggestions"
      class="suggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        v-for="(s, i) in suggestions"
        :key="i"
        class="suggestion"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a
          :href="s.path"
          @click.prevent
        >
          <span class="page-title">{{ s.title || s.path }}</span>
          <span
            v-if="s.header"
            class="header"
          >&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'
import matchQuery from './match-query'

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
export default defineComponent({
  name: 'SearchBox',

  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0,
      placeholder: undefined
    }
  },

  computed: {
    showSuggestions () {
      return (
        this.focused
        && this.suggestions
        && this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const pages  =[{
    title: 'HoMe PaGe',
    path: '/plugins/attachment',
    headers:[{"level": 2, "title": "使用说明", "slug": "使用说明" }],
    relativePath: 'attachment.md',
    frontmatter: {
      tags: ['attachment', 'test', '说明    AwEsOme']
    }
  }, {title: 'hahah',
    path: '/plugins/axupimgs',
     headers:[{"level": 2, "title": "dd", "slug": "dd" }],
    frontmatter: {
      tags: [ '多图上传','多图']
    }
  }]
      const max = 5 || SEARCH_MAX_SUGGESTIONS
      const localePath = '/' || ''
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
      // console.log(pages);
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }

        if (matchQuery(query, p)) {
         
          if (p.headers) {
            for (let j = 0; j < p.headers.length; j++) {
              if (res.length >= max) break
              const h = p.headers[j]
              if (h.title && matchQuery(query, p, h.title)) {
                res.push(Object.assign({}, p, {
                  path: p.path + '#' + h.slug,
                  header: h
                }))
              }
            }
          } else{
             res.push(p)
          }
        } 
      }
      console.log(res)
      return res
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = ( [] || []).length
      // const repo = 0 || this.$site.repo ? 1 : 0
      const repo = 3
      return navCount + repo <= 2
    }
  },

  mounted () {
    this.placeholder =  ''
    document.addEventListener('keydown', this.onHotkey)
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.onHotkey)
  },

  methods: {
    getPageLocalePath (page) {
      for (const localePath in {} || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable (page) {
      let searchPaths = null

      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    onHotkey (event) {
      if (event.srcElement === document.body && ['s', '/'].includes(event.key)) {
        this.$refs.input.focus()
        event.preventDefault()
      }
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    }
  }
})
</script>
<style scoped>
.search-box {
    display: inline-block;
    position: relative;
    z-index: 999;
    margin-right: 1rem
}

.search-box input {
    cursor: text;
    width: 10rem;
    height: 2rem;
    color: #4e6e8e;
    display: inline-block;
    border: 1px solid #cfd4db;
    border-radius: 2rem;
    font-size: .9rem;
    line-height: 2rem;
    padding: 0 .5rem 0 2rem;
    outline: none;
    transition: all .2s ease;
    background: #fff url('./search.svg') .6rem .5rem no-repeat;
    background-size: 1rem
}

.search-box input:focus {
    cursor: auto;
    border-color: #3eaf7c
}

.search-box .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 2rem;
    border: 1px solid #cfd4db;
    border-radius: 6px;
    padding: .4rem;
    list-style-type: none
}

.search-box .suggestions.align-right {
    right: 0
}

.search-box .suggestion {
    line-height: 1.4;
    padding: .4rem .6rem;
    border-radius: 4px;
    cursor: pointer
}

.search-box .suggestion a {
    white-space: normal;
    color: #5d82a6
}

.search-box .suggestion a .page-title {
    font-weight: 600
}

.search-box .suggestion a .header {
    font-size: .9em;
    margin-left: .25em
}

.search-box .suggestion.focused {
    background-color: #f3f4f5
}

.search-box .suggestion.focused a {
    color: #3eaf7c
}

/* @media (max-width: 959px) {
    .search-box input {
        cursor:pointer;
        width: 0;
        border-color: transparent;
        position: relative
    }

    .search-box input:focus {
        cursor: text;
        left: 0;
        width: 10rem
    }
} */

@media (-ms-high-contrast:none) {
    .search-box input {
        height: 2rem
    }
}

@media (max-width: 959px) and (min-width:719px) {
    .search-box .suggestions {
        left:0
    }
}

@media (max-width: 719px) {
    .search-box {
        margin-right:0
    }

    .search-box input {
        left: 1rem
    }

    .search-box .suggestions {
        right: 0
    }
}

@media (max-width: 419px) {
    .search-box .suggestions {
        width:calc(100vw - 4rem)
    }

    .search-box input:focus {
        width: 8rem
    }
}
</style>
