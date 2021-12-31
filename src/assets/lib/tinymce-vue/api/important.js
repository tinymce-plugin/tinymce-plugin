let target = 'https://s12.aconvert.com/convert/convert-batch-win.php'

var request = require('request');
let requestData = {
    file: 'http://base.hope55.com/UploadFile/2021/8/25/23e6dd1d-48df-4e6f-acf9-92c2d43cc154.docx',
    targetformat: 'html',
    code: '86000',
    filelocation: 'online',
    oAuthToken: '',
    parseInt
}
request({
    url: target,
    method: "POST",
    // json: true,
    headers: {
        "authority": "s2.aconvert.com",
        "path": "/convert/convert-batch-win.php",
        'Content-Type':'multipart/form-data',
        "origin": "https://www.aconvert.com",
        "referer": "https://www.aconvert.com/"
    },
    formData: requestData
}, function(error, response, body) {
    console.log(response);
    if (!error && response.statusCode == 200) {
    }
}); 
// const fs = require('fs')

// const url_info = require('url').parse(target,true)

// //定义配置选项

// let options = {

// hostname: url_info.hostname,//要请求的接口的域名

// // port: url_info.port||80,

// path: url_info.pathname,
// header:{'Content-Type':'multipart/form-data'},
// method: 'POST',
// // type: multipart/form-data;
// data: {
//     // file: (binary),
//     // targetformat: "html",
//     // code: "86000",
//     // filelocation: "local"
//     file: 'http://base.hope55.com/UploadFile/2021/8/25/23e6dd1d-48df-4e6f-acf9-92c2d43cc154.docx',
// targetformat: 'html',
// code: '86000',
// filelocation: 'online',
// oAuthToken: '',
// }

// };

// //创建一个请求的对象

// var req = http.request(options, function(res) {//回调函数能接收到响应对象

// //状态码 res.statusCode

// //响应头 res.headers

// res.setEncoding('utf8');//设置字符编码

// let result = ''

// res.on('data', function (chunk) {//通过data事件来接收数据
// console.log(chunk);
// result+=chunk

// });

// res.on('end', function () {//接收完成后触发
// console.log(req.path);
// // console.log(res);
// fs.writeFileSync('./movie.json',res)

// });

// });

// //绑定error事件，如果出错会执行

// req.on('error', function(e) {

// console.log('problem with request: ' + e.message);

// });

//标识请求完成

// req.end();