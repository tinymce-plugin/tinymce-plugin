
 tinymce.PluginManager.add('axupimgs', function(editor, url) {
	var pluginName='Ax多图片上传';
	window.axupimgs={}; //扔外部公共变量，也可以扔一个自定义的位置
    axupimgs.images_upload_handler = editor.getParam('images_upload_handler', undefined, 'function');
    axupimgs.images_upload_base_path = editor.getParam('images_upload_base_path', '', 'string');
    axupimgs.axupimgs_filetype = editor.getParam('axupimgs_filetype', '.png,.gif,.jpg,.jpeg', 'string');
	axupimgs.res=[];
	var openDialog = function() {
		return editor.windowManager.open({
			title: pluginName,
			size: 'large',
			body: {
                type: 'panel', // The root body type - a Panel or TabPanel
                items: [ // A list of panel components
                    {
                        type: 'iframe', // component type
                        name: 'iframe_axupimgs', // identifier
                        label: '   ', // text for the iframe's title attribute
                        sandboxed: true,
                     }
                ]
			},
			initialData: {
				iframe_axupimgs: `<!doctype html>
				<html>
				<head>
				<meta charset="utf-8" />
				<title>axupimgs</title>
				<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<meta name="format-detection" content="telephone=no">
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<style>
					html,body{height:100%;margin:0;padding:0;background:#fff;}
					ul{margin:0;padding:0;list-style:none;}
					#wrap{padding:10px;}
					#topbar{padding:10px 0;border-bottom:1px solid #ccc;text-align:right;}
					#topbar button {margin:0;margin-left:5px;outline:none;padding: 4px 16px;box-sizing: border-box;
						display:inline-block;border:none;border-radius:3px;text-align:center;cursor:pointer;
						font-size:14px;line-height:1.5;background-color:#f0f0f0;color:#223;
					}
					#topbar button.primary{background-color:#3d97d4;color:#fff;}
					#topbar button:hover{background-color:#207ab7;color:#fff;}
					#topbar button.removeall{float:left}
					#file_list {display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));padding-top:10px;}
					#file_list:empty:after{content:'可以直接拖拽文件到这里';color:#777;font-size:0.8em;}
					#file_list li{position:relative;display:block;vertical-align:top;padding:5px 5px;border-radius:5px;}
					#file_list li.up-over {}
					#file_list li.up-now {}
					#file_list li.up-now:after{content:'';position:absolute;top:0;left:0;display:block;width:100%;height:100%;background:rgba(255,255,255,0.8) url(loading.gif) center center no-repeat;border-radius:5px;z-index:999;}
					#file_list li:hover{background-color:#ddd;}
					#file_list li .picbox {display:flex;flex:0 0 auto;justify-content:center;overflow:hidden;position:relative;width:100%;padding-top:100%;align-items:center;}
					#file_list li .picbox img {display:block;max-width:100%;max-height:100%;position:absolute;
						top:50%;left:50%;transform:translateX(-50%) translateY(-50%);}
					#file_list li.up-over .picbox:after{content:url('data:image/svg+xml;%20charset=utf8,%3Csvg%20viewBox%3D%220%200%201024%201024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M512%200C229.376%200%200%20229.376%200%20512s229.376%20512%20512%20512%20512-229.376%20512-512S794.624%200%20512%200z%22%20fill%3D%22%234AC711%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M855.552%20394.752l-358.4%20358.4a50.9952%2050.9952%200%200%201-72.192%200l-204.8-204.8c-18.944-19.968-18.944-51.2%200-71.168a50.5344%2050.5344%200%200%201%2072.192-1.024L460.8%20644.608l322.048-322.048c19.968-18.944%2051.2-18.944%2071.168%200%2020.48%2019.456%2020.992%2051.712%201.536%2072.192z%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');position:absolute;bottom:2px;right:2px;z-index:9;}
					#file_list li .tools {display:none;position:absolute;bottom:5px;right:5px;z-index:99;}
					#file_list li:hover .tools {display:block;}
					#file_list li .tools .remove{cursor:pointer;}
					#file_list li .tools .remove:after{content:url('data:image/svg+xml;%20charset=utf8,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M17%206h3a1%201%200%200%201%200%202h-1v11a3%203%200%200%201-3%203H8a3%203%200%200%201-3-3V8H4a1%201%200%201%201%200-2h3V5a3%203%200%200%201%203-3h4a3%203%200%200%201%203%203v1zm-2%200V5a1%201%200%200%200-1-1h-4a1%201%200%200%200-1%201v1h6zm2%202H7v11a1%201%200%200%200%201%201h8a1%201%200%200%200%201-1V8zm-8%203a1%201%200%200%201%202%200v6a1%201%200%200%201-2%200v-6zm4%200a1%201%200%200%201%202%200v6a1%201%200%200%201-2%200v-6z%22%3E%3C/path%3E%3C/svg%3E');}
					#file_list li .namebox {font-size:14px;line-height:20px;max-height:40px;overflow:hidden;padding:5px 10px;text-align:center;display:flex;justify-content:center;align-items:flex-start;}
					#file_list li .namebox span{word-break:break-all;vertical-align:top;}
				</style>
				
				</head>
				<body>
				<div id="wrap">
					<div id="topbar"><button class="addfile primary" >+ 添加文件</button><button class="upall primary">全部上传</button><button class="removeall">清空列表</button></div>
					<ul id="file_list"></ul>
				</div>
				
				<script>
					var editor=parent.tinymce.activeEditor;
					var axupimgs=parent.axupimgs;
					axupimgs.res = []; //存放本地文件的数组
					var blobInfo = {file:null}
					blobInfo.blob = function(){return this.file;}
					var upload_handler = axupimgs.images_upload_handler;
					var upload_base_path = axupimgs.images_upload_base_path;
				
					//为列表添加排序
					function reSort(){
						document.querySelectorAll('#file_list li').forEach((el,i)=>{
							el.setAttribute('data-num',i);
						});
					}
				
					function addList(files){
						var files_sum = files.length;
						var vDom = document.createDocumentFragment();
						for(let i=0;i<files_sum;i++){
							let file = files[i];
							let blobUrl = window.URL.createObjectURL(file)
							axupimgs.res.push({file:file,blobUrl:blobUrl,url:''});
							let li = document.createElement('li');
							li.setAttribute('class','up-no');
							li.setAttribute('data-time',file.lastModified);
							li.innerHTML='<div class="picbox"><img src="'+blobUrl+'"></div><div class="namebox"><span>'+file.name+'</span></div><div class="tools"><a class="remove"></a></div>';
							vDom.appendChild(li);
						}
						document.querySelector('#file_list').appendChild(vDom);
						//reSort();
					}
				
				
					//清空列表
					document.querySelector('#topbar .removeall').addEventListener('click',function(){
						axupimgs.res = []
						document.querySelectorAll('#file_list li').forEach(function(el,i){
							el.parentNode.removeChild(el)
						});
					});
					//拖拽添加
					document.addEventListener('dragover', function(e){
						e.stopPropagation();
						e.preventDefault();
						e.dataTransfer.dropEffect = 'copy';
					});
					document.addEventListener('drop', function(e){
						e.stopPropagation();
						e.preventDefault();
						if(!e.dataTransfer.files){return false;}
						var dropfiles = e.dataTransfer.files;
						if(!(dropfiles.length>0)){return false;}
						var exts=axupimgs.axupimgs_filetype.replace(/(\s)+/g,'').toLowerCase().split(',');
						var files=[];
						for( let file of dropfiles ){
							ext = file.name.split('.');
							ext = '.'+ext[ext.length-1];
							for(let s of exts){
								if(s==ext){
									files.push(file);
									break;
								}
							}
						}
						if(files.length>0){ addList(files) }
					});
					var global$1 = upfile.tinymce.util.Tools.resolve('tinymce.util.Promise');var global$2 = upfile.tinymce.util.Tools.resolve('tinymce.Env');var global$3 = upfile.tinymce.util.Tools.resolve('tinymce.util.Delay');
					var pickFile=function(a){return new global$1(function(e){var c=document.createElement("input");c.type="file";c.setAttribute('multiple', 'multiple');c.style.position="fixed";c.style.left="0";c.style.top="0";c.style.opacity="0.001";document.body.appendChild(c);var b=function(f){e(Array.prototype.slice.call(f.target.files))};c.addEventListener("change",b);var d=function(g){var f=function(){e([]);c.parentNode.removeChild(c)};if(global$2.os.isAndroid()&&g.type!=="remove"){global$3.setEditorTimeout(a,f,0)}else{f()}a.off("focusin remove",d)};a.on("focusin remove",d);c.click()})};
				 
					//添加文件
					document.querySelector('#topbar .addfile').addEventListener('click',function(){
						pickFile(editor).then(function(files){
							addList(files);
						})
					});
				
					var file_i = 0;
				
					function upAllFiles(n){
						var len = axupimgs.res.length;
						file_i = n;
						if(len == n){
							file_i=0;
							document.querySelector('#topbar .upall').innerText='全部上传';
							return true;
						}
						if( axupimgs.res[n].url!='' ){
							n++;
							upAllFiles(n)
						}else{
							blobInfo.file=axupimgs.res[n].file;
							upload_handler(blobInfo,function(url){
								if(upload_base_path){
									
									if(upload_base_path.slice(-1)=='/' && url.substr(0,1)=='/' ){
										url = upload_base_path + url.slice(1);
									}else if(upload_base_path.slice(-1)!='/' && url.substr(0,1)!='/' ){
										url = upload_base_path + '/' + url;
									}else{
										url = upload_base_path + url;
									}
								}
								axupimgs.res[file_i].url = url;
								filename = url.split('/').pop();
								var li = document.querySelectorAll('#file_list li')[file_i];
								li.setAttribute('class','up-over');
								li.querySelector('.namebox span').innerText = filename;
								n++
								upAllFiles(n);
							},function(err){
								document.querySelector('#topbar .upall').innerText='全部上传';
								document.querySelectorAll('#file_list li.up-now').forEach((el,i)=>{
									el.setAttribute('class','up-no');
								});
								alert(err);
							});
						}
						
					}
				
					document.querySelector('#topbar .upall').addEventListener('click',(e)=>{
						if(e.target.innerText!='全部上传'){return false;}
						if(axupimgs.res.length>0){
							document.querySelectorAll('#file_list li.up-no').forEach((el,i)=>{
								el.classList ? el.classList.add('up-now') : el.className+=' up-now';
							});
							e.target.innerText='上传中...';
							upAllFiles(0);
						}
					});
				
					var observ_flist = new MutationObserver( (muList,observe)=>{
						if(muList[0].addedNodes.length>0){
							muList[0].addedNodes.forEach((el)=>{
								el.querySelector('.remove').addEventListener('click',(e)=>{
									var li = e.target.parentNode.parentNode;
									var n = li.getAttribute('data-num');
									var el = document.querySelectorAll('#file_list li')[n];
									el.parentNode.removeChild(el);
									axupimgs.res.splice(n,1);
								});
							});
						}
						reSort();
					});
					observ_flist.observe(document.querySelector('#file_list'),{childList:true});
				
				</script>
				</body>
				</html>				
				`
			},
			buttons: [
				{
					type: 'cancel',
					text: 'Close'
				},
				{
					type: 'custom',
					text: 'Save',
					name: 'save',
					primary: true
				},
			],
			onAction: function (api, details) {
				switch (details.name) {
					case 'save':
						var html = '';
						var imgs = axupimgs.res;
						var len = imgs.length;
						for(let i=0;i<len;i++){
							if( imgs[i].url ){
								html += '<img src="'+imgs[i].url+'" />';
							}
						}
						editor.insertContent(html);
						axupimgs.res=[];
						api.close();
						break;
					default:
						break;
				}
				
			}
		});
	};

	editor.ui.registry.getAll().icons.axupimgs || editor.ui.registry.addIcon('axupimgs','<svg viewBox="0 0 1280 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M1126.2,779.8V87.6c0-24-22.6-86.9-83.5-86.9H83.5C14.7,0.7,0,63.7,0,87.7v692c0,36.2,29.2,89.7,83.5,89.7l959.3-1.3c51.7,0,83.5-42.5,83.5-88.3zm-1044,4V86.3h961.6V783.7H82.2v0.1z" fill="#53565A"/><path d="M603,461.6L521.1,366.3,313,629.8,227.2,546.8,102.4,716.8H972.8v-170L768.2,235.2,603.1,461.6zM284.6,358.4a105.4,105.4,0,0,0,73.5-30c19.5-19.1,30.3-45,30.2-71.8,0-56.8-45.9-103-102.4-103-56.6,0-102.4,46.1-102.4,103C183.4,313.5,228,358.4,284.6,358.4z" fill="#9598A0"/><path d="M1197.7,153.6l-0.3,669.3s13.5,113.9-67.4,113.9H153.6c0,24.1,23.9,87.2,83.5,87.2h959.3c58.3,0,83.6-49.5,83.6-89.9V240.8c-0.1-41.8-44.9-87.2-82.3-87.2z" fill="#53565A"/></svg>');
	
	editor.ui.registry.addButton('axupimgs', {
		icon: 'axupimgs',
        tooltip: pluginName,
		onAction: function() {
			openDialog();
			document.querySelector('.tox-dialog__body-content').style.padding=0;
		}
	});
	editor.ui.registry.addMenuItem('axupimgs', {
		icon: 'axupimgs',
		text: '图片批量上传...',
		onAction: function() {
			openDialog();
			document.querySelector('.tox-dialog__body-content').style.padding=0;
		}
	});
	return {
		getMetadata: function() {
			return  {
				name: pluginName,
				url: "https://github.com/Five-great/tinymce-plugins",
			};
		}
	};
});
