<template>
 <div class="appBox">
    <Header :dWidth="_resize" />
    <aside>
      <Sidebar/>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './views/Header/Header.vue'
import Sidebar from './views/Sidebar/Sidebar.vue'
export default defineComponent({
  components: { Header, Sidebar },
  data(){
     return{
       _resize: document.documentElement.clientWidth
     }
  },
  name: 'App',
  created(){
     window.addEventListener('resize',this.resizeFun, false);
  },
  methods:{
     resizeFun(e:any){
       this._resize = document.documentElement.clientWidth
        //  console.log();
     },
  },
  destroy(){
    window.removeEventListener("resize",this.resizeFun)
  }
})
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
aside{
  /* width: 3%; */
  background: #fff;
  max-width: 300px;
  min-width: 12%;
  height: 100%;
  top:0px;
  padding-top:165px;
  position: fixed;
  border-right: 1px solid #eee ;
}
main{
  width: 84%;
  padding-top:2%;
  min-height: 60%;
  padding-left:15%;
  padding-right:1%;
  margin: 0 auto;
}
</style>
