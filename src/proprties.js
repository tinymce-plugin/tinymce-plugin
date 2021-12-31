
import axios from 'axios'
/**
 * Install plugin
 * @param app
 * @param tp$pages
 */
 function plugin(app, tp$pages) {
   const _axios = axios.create({
        withCredentials: true,
        // headers:{
        //     'X-Requested-With': 'XMLHttpRequest'
        // },
        onUploadProgress: p => { return 100 * ( p.loaded / p.total ) },
        onDownloadProgress: p => { return 100 * ( p.loaded / p.total ) }
    })
     _axios.interceptors.response.use(function(response){
        return(response.data);//response里有很多值，选择data即可
     })
      app.config.globalProperties.tp$pages =  tp$pages
      app.config.globalProperties.axios = _axios;
      app.config.globalProperties.$http = _axios;
      app.config.globalProperties.$Vue2 = window.Vue2
      app.config.globalProperties.$ReactDOM = window.ReactDOM
      app.config.globalProperties.$React= window.React
// Vue2.config.productionTip = false
// var vm2 = new Vue2({ el:'#appVue2' });
// (window as any).vue2 = vm2

      //https://s12.aconvert.com/convert/p3r68-cdx67/ap9r2-nsw6b.html
      var baseUrl=["https://tsdcake-admin.fivecc.cn/","https://admin2.fivecc.cn/"];
      var t = new Date().getHours()<=10? 1:0;  
      var baseInit = [{
        appId: 'EP3f9yGusi4xzlXE4jzuRJJH-gzGzoHsz',
        appKey: 'bjW6N0jbEieK3JFMAVpG2HOq'      
    },{
        appId: 'oq2VPjPw3kdjGibR5BTdvg9g-gzGzoHsz',//2
        appKey: '0I6RmFuM46IrWgc9QOAKeat6'
    }]
    app.config.globalProperties.$api =  function(dataObj) {
      // console.log('sdsd');
      return $.ajax({
        url: 'https://web.hope55.com/api/uploadfolder',
        method: 'POST',
        processData: false,
        contentType: false,
        // header: {
        // 'Content-Type': 'application/json',
        // },
        // header: {
        //      "Content-Type": "multipart/form-data"
        //   },
        data: dataObj.data
    })
      
    }
      app.config.globalProperties.$proxyServer = function(dataObj, query, _method){
       let data = new FormData()
    //    data.append('fileUrl',dataObj.fileUrl)
    
       return $.ajax({
            url: 'http://web.hope55.com/api/importfiles',
            method: _method || 'POST',
            // processData: false,
            // contentType: false,
            // header: {
            // 'Content-Type': 'application/json',
            // },
            data: dataObj
        })
      }
      
  }
  export default plugin;