/**
 * upfile 1.1v
 * The tinymce-plugins is used to upfile
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2020, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
 tinymce.PluginManager.add('upfile', function(editor, url) {
	var pluginName='上传文件';
	window.upfile={}; //扔外部公共变量，也可以扔一个自定义的位置

	var baseURL=tinymce.baseURL||'.';
	var iframe1 = baseURL+'/plugins/upfile/upfiles.html';
    upfile.file_callback = editor.getParam('file_callback', undefined, 'function');
    // upfile.file_callback = editor.getParam('download_text', String, 'function');
	upfile.tinymce = tinymce;
    upfile.res={};
	var openDialog = function() {
		return editor.windowManager.openUrl({
	  title: pluginName,
      size: 'large',
      width: 450,
      height: 450,
			url:iframe1,
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
						var res = upfile.res;
						var html = '<span  class="upfile" contenteditable="false"><a href="'+res.url+'" target="_blank" title="'+res.text+'" >'+res.text+'<a></span>';
						editor.insertContent(html);
						upfile.res={};
						api.close();
						break;
					default:
						break;
				}
				
			}
		});
	};

	editor.ui.registry.getAll().icons.upfile || editor.ui.registry.addIcon('upfile','<svg t="1603858123045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="24" height="24"><path fill-rule="evenodd" fill="#000" d="M909 897H115a50 50 0 0 1-50-50V177a50 50 0 0 1 50-50h370a50 50 0 0 1 50 50v62a10 10 0 0 0 10 10h241a50 50 0 0 1 50 50v58h73a50 50 0 0 1 50 50v440a50 50 0 0 1-50 50zM505 309a30 30 0 0 1-30-30v-72a20 20 0 0 0-20-20H145a20 20 0 0 0-20 20v610c0 11.046 9.377 20 20.422 20H209a20 20 0 0 0 20-20V407a50 50 0 0 1 50-50h497v-28a20 20 0 0 0-20-20H535m364 128a20 20 0 0 0-20-20H309a20 20 0 0 0-20 20v400h590a20 20 0 0 0 20-20V437zM650.659 615.8l-26.618-26.53V737a30 30 0 0 1-30 30h-0.113a30 30 0 0 1-30-30V589.275L537.309 615.8a30.006 30.006 0 0 1-42.509-42.36l77.928-77.669a30.127 30.127 0 0 1 42.506 0l77.929 77.669a30.007 30.007 0 0 1-42.504 42.36z" p-id="2813"></path></svg>');
	
	editor.ui.registry.addButton('upfile', {
		icon: 'upfile',
    tooltip: pluginName,
		onAction: function() {
			openDialog();
		}
	});
	function createHref(e) {
		var t = document.createElement("a");
		t.target = "_blank", t.href = e, t.rel = "noreferrer noopener";
		var n, i, o = document.createEvent("MouseEvents");
		o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n = t, i = o, document.body.appendChild(n), n.dispatchEvent(i), document.body.removeChild(n)
	}
	  function getParent(e, t) {
		return t = t || e.selection.getNode(), e.dom.getParent(t, 'span[class="upfile"]')
	};
	editor.ui.registry.addButton("upfile-download", {
		text: "下载",
		onAction: function() {
			return e = function(e) {
				for (var t = 0, n = e.selection.getNode().children; t < n.length; t++) {
					var i = n[t];
					if (i.hasAttribute("href")) return i.getAttribute("href")
				}
				return "#"
			}(editor), void createHref(e);
		}
	})
	editor.ui.registry.addContextToolbar("upfile", {
		predicate: function(e) {
			return !!getParent(editor, e)
		},
		items: "upfile-download",
		position: "node",
		scope: "node"
	})
	editor.ui.registry.addMenuItem('upfile', {
		icon: 'upfile',
		text: '图片上传...',
		onAction: function() {
			openDialog();
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
