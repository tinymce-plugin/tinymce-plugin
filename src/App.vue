<template>
 <div class="appBox" @click.stop='closeMenu'>
    <Header :dWidth="_resize" />
    <div class="menu_icon"  @click.stop="openMenu=!openMenu">
      <svg t="1628149369842" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4051" width="30" height="30">
        <path d="M789.12 210.56H42.88a35.2 35.2 0 0 1-35.2-35.2 35.2 35.2 0 0 1 35.2-34.56h746.24a34.56 34.56 0 0 1 35.2 34.56 35.2 35.2 0 0 1-35.2 35.2zM981.12 544.64H42.88a35.2 35.2 0 1 1 0-69.76h938.24a35.2 35.2 0 1 1 0 69.76zM981.12 878.72H42.88a35.2 35.2 0 0 1-35.2-34.56 35.2 35.2 0 0 1 35.2-35.2h938.24a35.2 35.2 0 0 1 35.2 35.2 35.2 35.2 0 0 1-35.2 34.56z"  p-id="4052"></path>
        <path d="M949.12 175.36m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="4053"></path>
      </svg>
   </div>
    <aside :class="[openMenu ? 'openMenu': '']" >
      <Sidebar/>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

import Header from './views/Header/Header.vue'
import Sidebar from './views/Sidebar/Sidebar.vue'
export default {
  components: { Header, Sidebar },
  data(){
     return{
       _resize: document.documentElement.clientWidth,
       openMenu: false
     }
  },
  name: 'App',
  created(){
     window.addEventListener('resize',this.resizeFun, false);
  },
  methods:{
     resizeFun(e){
       this._resize = document.documentElement.clientWidth
        //  console.log();
     },
     closeMenu(){
      this._resize < 959?  this.openMenu = false : ''
     }
  },
  destroy(){
    window.removeEventListener("resize",this.resizeFun)
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-top:1px;
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
.appBox{
  width: 100%;
  height: 100%;
  text-align: left;
}
.menu_icon{
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
 .menu_icon svg{
   fill: rgb(75, 140, 224) 
 }
 
aside{
  /* width: 3%; */
  background: #fff;
  max-width: 300px;
  min-width: 12%;
  height: 100%;
  top:0px;
  padding-top:165px;
  position: fixed;
  z-index: 90;
  border-right: 1px solid #eee ;
  transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
}
aside.openMenu{
  transform: translateX(0);
}
main{
  width: 73%;
  padding-top:2%;
  min-height: 60%;
  padding-left:21%;
  padding-right:6%;
  margin: 0 auto;
}
@media only screen and (min-width: 1200px) and (max-width: 1500px) {
 main{
  width: 75%;
  padding-top:2%;
  min-height: 60%;
  padding-left:22%;
  padding-right:3%;
  margin: 0 auto;
}
}
@media only screen and (min-width:  959px) and (max-width: 1199px) {
 main{
  width: 72%;
  padding-top:2%;
  min-height: 60%;
  padding-left:26%;
  padding-right:2%;
  margin: 0 auto;
}
}
@media only screen and (max-width:  959px){
  aside{
     transform: translateX(-100%);
  }
  .menu_icon{
    display: block;
  }
  main{
  width: 94%;
  padding-left: 0%;
  padding-right: 0%;
  padding-top:2%;
  min-height: 60%;
  margin: 0 auto;
}
}
</style>
