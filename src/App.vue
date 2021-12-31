<template>
  <div class="appBox" @click.stop="closeMenu">
    <!-- <Header :dWidth="_resize" /> -->
    <div class="menu_icon" @click.stop="openMenu = !openMenu">
      <svg
        class="icon"
        t="1628149369842"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4051"
        width="30"
        height="30"
      >
        <path
          d="M789.12 210.56H42.88a35.2 35.2 0 0 1-35.2-35.2 35.2 35.2 0 0 1 35.2-34.56h746.24a34.56 34.56 0 0 1 35.2 34.56 35.2 35.2 0 0 1-35.2 35.2zM981.12 544.64H42.88a35.2 35.2 0 1 1 0-69.76h938.24a35.2 35.2 0 1 1 0 69.76zM981.12 878.72H42.88a35.2 35.2 0 0 1-35.2-34.56 35.2 35.2 0 0 1 35.2-35.2h938.24a35.2 35.2 0 0 1 35.2 35.2 35.2 35.2 0 0 1-35.2 34.56z"
          p-id="4052"
        ></path>
        <path
          d="M949.12 175.36m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
          p-id="4053"
        ></path>
      </svg>
    </div>
    <aside :class="[openMenu ? 'openMenu' : '']"><Sidebar></Sidebar></aside>
    <main @click.stop="listenerFun"><router-view></router-view></main>
  </div>
</template>
 
 <script  lang="ts" >
import { defineComponent } from "vue";
import Header from "./views/Header/Header.vue";
import Sidebar from "./views/Sidebar/Sidebar.vue";
import "./assets/css/markdown.css";
export default defineComponent({
  components: { Header, Sidebar },
  data() {
    return {
      _resize: document.documentElement.clientWidth,
      openMenu: false,
    };
  },
  name: "App",
  created() {
    window.addEventListener("resize", this.resizeFun, false);
  },
  methods: {
    resizeFun(e: any) {
      this._resize = document.documentElement.clientWidth;
      //  console.log();
    },
    closeMenu() {
      this._resize < 959 ? (this.openMenu = false) : "";
    },
    listenerFun(e: any) {
      if (e.target.className === "hljs fv-hljs") {
        let input: any = document.getElementById("inputCopy");
        input.value =
          e.target.children[0].tagName === "CODE"
            ? e.target.children[0].innerText
            : e.target.children[1].innerText;
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        this.showTips("复制代码成功", "ok", 60, 3);
      }
    },
    showTips(content: any, message: any, height: any, time: number) {
      let docTips: any = document.getElementById("tips");
      docTips.innerHTML =
        '<div class="tipsClass ' + message + '"><i></i>' + content + "</div>";
      this._resize < 750
        ? (height = height / 100 + "rem")
        : (height = height + "px");
      docTips.children[0].style.top = height;
      docTips.children[0].style.display = "block";
      setTimeout(function () {
        docTips.children[0].style.display = "none";
      }, time * 1000);
    },
  },
  destroy() {
    window.removeEventListener("resize", this.resizeFun);
  },
});
</script>
 <style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 1px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
  height: 100%;
}
.appBox {
  width: 100%;
  height: 100%;
  text-align: left;
}
.menu_icon {
  position: fixed;
  z-index: 199;
  bottom: 20px;
  left: 10px;
  width: 30px;
  padding: 10px;
  height: 30px;
  border-radius: 20px;
  background: #fff;
  color: rgb(75, 140, 224);
  display: none;
}
.menu_icon svg {
  fill: rgb(75, 140, 224);
}

aside {
  /* width: 3%; */
  background: #fff;
  max-width: 300px;
  min-width: 12%;
  height: 100%;
  top: 0px;
  padding-top: 165px;
  position: fixed;
  z-index: 90;
  border-right: 1px solid #eee;
  transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
}
aside.openMenu {
  transform: translateX(0);
}
main {
  width: 73%;
  padding-top: 2%;
  min-height: 60%;
  padding-left: 21%;
  padding-right: 6%;
  margin: 0 auto;
}
@media only screen and (min-width: 1200px) and (max-width: 1500px) {
  main {
    width: 75%;
    padding-top: 2%;
    min-height: 60%;
    padding-left: 22%;
    padding-right: 3%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 959px) and (max-width: 1199px) {
  main {
    width: 72%;
    padding-top: 2%;
    min-height: 60%;
    padding-left: 26%;
    padding-right: 2%;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 959px) {
  aside {
    transform: translateX(-100%);
  }
  .menu_icon {
    display: block;
  }
  main {
    width: 94%;
    padding-left: 0%;
    padding-right: 0%;
    padding-top: 2%;
    min-height: 60%;
    margin: 0 auto;
  }
}
/* 弹出框 */
.tipsClass {
  position: fixed;
  letter-spacing: 2px;
  border-radius: 10px;
  text-align: justify;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  border: 1px solid #ebeef5;
  min-width: 280px;
  padding: 15px 15px 15px 20px;
  display: flex;
  animation: upshow 0.3s ease-out;
  align-items: center;
  z-index: 99999;
}
@keyframes upshow {
  0% {
    top: 20%;
  }
  90% {
    top: 9%;
  }
  100% {
    top: 10%;
  }
}
.tipsClass.ok {
  background: #f0f9eb;
  color: #67c23a;
  font-weight: bold;
}
.tipsClass > i {
  position: relative;
  margin-right: 30px;
  line-height: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font: normal normal normal 14px/1 FontAwesome;
  text-rendering: auto;
}
.tipsClass.ok > i:before {
  content: "✔";
  color: #fff;
  display: block;
}
.tipsClass.ok > i:after {
  display: block;
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #67c23a;
  left: -5px;
  top: -3px;
  border-radius: 50%;
  text-align: center;
  z-index: -1;
}
.tipsClass.err {
  border-color: #fde2e2;
  background-color: #fef0f0;
  font-weight: bold;
  color: #f56c6c;
}
.tipsClass.err > i:before {
  content: "×";
  color: #fff;
  display: block;
}
.tipsClass.err > i:after {
  display: block;
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #f56c6c;
  left: -5px;
  top: -3px;
  border-radius: 50%;
  text-align: center;
  z-index: -1;
}
.tipsClass.warn {
  border-color: #faecd8;
  background-color: #fdf6ec;
  color: #e6a23c;
}
.tipsClass.warn > i:before {
  content: "!";
  color: #fff;
  font-weight: bold;
  display: block;
}
.tipsClass.warn > i:after {
  display: block;
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #e6a23c;
  left: -8px;
  top: -3px;
  border-radius: 50%;
  text-align: center;
  z-index: -1;
}
</style>