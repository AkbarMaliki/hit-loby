(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={"app~3d9b8e9e":0},o={"app~3d9b8e9e":0},c=[];function i(e){return s.p+"js/"+({"page-index~31ecd969":"page-index~31ecd969"}[e]||e)+"."+{"chunk-05188b0a":"f8541cd5","chunk-3a262288":"c988dc06","chunk-57d74725":"f9db1797","chunk-148950ff":"98f32aa4","chunk-76704c0f":"15edcbc1","chunk-2df1052a":"479700fd","chunk-72d79ac8":"d37cbf94","chunk-873601d4":"c9f08bfc","chunk-001f6fd2":"056e9d81","chunk-729237fc":"46beb90d","chunk-29d0cf97":"32ad3f51","chunk-5570bd3f":"ccc2b6b3","chunk-2d0c4c34":"289c4b41","chunk-5b079534":"f274be65","chunk-ad1757c0":"859a5700","chunk-4db036db":"752e5760","chunk-af48f40c":"387fd810","page-index~31ecd969":"77949cd9"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-5b079534":1,"chunk-ad1757c0":1,"chunk-4db036db":1,"chunk-af48f40c":1,"page-index~31ecd969":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"page-index~31ecd969":"page-index~31ecd969"}[e]||e)+"."+{"chunk-05188b0a":"31d6cfe0","chunk-3a262288":"31d6cfe0","chunk-57d74725":"31d6cfe0","chunk-148950ff":"31d6cfe0","chunk-76704c0f":"31d6cfe0","chunk-2df1052a":"31d6cfe0","chunk-72d79ac8":"31d6cfe0","chunk-873601d4":"31d6cfe0","chunk-001f6fd2":"31d6cfe0","chunk-729237fc":"31d6cfe0","chunk-29d0cf97":"31d6cfe0","chunk-5570bd3f":"31d6cfe0","chunk-2d0c4c34":"31d6cfe0","chunk-5b079534":"43902ec4","chunk-ad1757c0":"ed68d0b8","chunk-4db036db":"c878a23c","chunk-af48f40c":"30a57960","page-index~31ecd969":"a69dd9f0"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],p.parentNode.removeChild(p),n(c)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;c.push([0,"chunk-vendors~0f485567","chunk-vendors~7ffa8a2f","chunk-vendors~a61ebcbd","chunk-vendors~1fb195ae","chunk-vendors~c1554789","chunk-vendors~f1715247","chunk-vendors~0f08bdbc","chunk-vendors~a6cd21c3","chunk-vendors~e041e925","chunk-vendors~8aaa0a96","chunk-vendors~8a297923","chunk-vendors~b1c93edb","chunk-vendors~e4173fa2","chunk-vendors~18eda011","chunk-vendors~23981fed","chunk-vendors~73081ec5","chunk-vendors~670e76f6","chunk-vendors~074dc65d","chunk-vendors~9c4131f8","chunk-vendors~678675a8","chunk-vendors~987e6011","chunk-vendors~b5906859","chunk-vendors~1f20a385","chunk-vendors~690b702c","chunk-vendors~77bf5e45","chunk-vendors~1c3a2c3f","chunk-vendors~fdc6512a","chunk-vendors~5068d5f8","chunk-vendors~205977d4","chunk-vendors~6ff199a4","chunk-vendors~daa565d3","app~d0ae3f07","app~f71cff67","app~8fbddef4","app~5a7d26d4","app~2c95bef1","app~775b1b3a","app~a8bb89d7","app~8cc1942a","app~4e7b3c05","app~a8f7caed"]),n()})({"2c3c":function(e,t,n){"use strict";var a=n("53ca"),r=n("1da1"),o=n("d4ec"),c=n("bee2"),i=n("ade3"),s=(n("96cf"),n("b64b"),n("4160"),n("159b"),n("5319"),n("ac1f"),n("d3b7"),n("25f0"),n("0d03"),n("4795"),"borneojs"),u=!1,l=!1,d=!0,p=!0,h="php",f=0,g="https://apis2.draesthetic.id",m=function(){function e(){Object(o["a"])(this,e),Object(i["a"])(this,"url",g),Object(i["a"])(this,"urlBASE",g+"/api/asdsad"),Object(i["a"])(this,"urlupload",g+"/upload1.php"),Object(i["a"])(this,"table",""),Object(i["a"])(this,"id","")}return Object(c["a"])(e,[{key:"collection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n){var a=["user","profile","post","berita","galery","host","Intinction","random","login","register","signin","signout","logout","news","info","pengumuman","notification"];this.url=n,this.urlBASE=this.url+"/api/".concat(a[Math.floor(Math.random()*a.length)]),this.urlupload=this.url+"/upload1.php"}else this.url=g;return p=t,this.table=e,this}},{key:"doc",value:function(e){return e&&(this.id=e),this}},{key:"set",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,o,c,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=function(e){return Object.keys(e)},p&&v(),a=new FormData,r=Object.keys(t),r.forEach((function(e){"string"==typeof t[e]&&(t[e]=t[e].replace(/'/g,"\\'"),t[e]=t[e].replace(/"/g,'"'))})),n&&(l=n),l&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),e.next=9,this.verifyEnc();case 9:return o=e.sent,a.append("api-token",S(s)),a.append("se-token",o),a.append("5e19fb19a0aa66a0",S(l.toString())),a.append("t-bl",S(this.table)),a.append("backend",S(h)),d?(a.append("scramble",d),a.append("data",S(JSON.stringify(t)))):a.append("data",JSON.stringify(t)),a.append("key-z-token",S("set")),a.append("key",c(t)),e.next=20,axios.post("laravel"!=h?this.urlBASE:this.url+"/api/set/data",a).then((function(e){return p&&(b("Proses Data Berhasil!","bg-green-400"),k()),e.data}))["catch"]((function(e){p&&(b("Error Proses Gagal!","bg-red-600"),k()),f++,f<2&&i.set(t)}));case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("t-bl",S(this.table)),r.append("backend",S(h)),e.next=5,this.verifyEnc();case 5:return o=e.sent,r.append("api-token",S(s)),r.append("se-token",o),a&&(l=a),l&&(r.append("header",localStorage.getItem("auth._token.local")),r.append("key-h",localStorage.getItem("auth._token.local"))),r.append("5e19fb19a0aa66a0",S(l.toString())),d?(r.append("scramble",d),r.append("sd28(#092/sd",S(t)),r.append("23*(kdj",S(n))):(r.append("sd28(#092/sd",t),r.append("23*(kdj",n)),""!=this.id.length&&r.append("id","".concat(this.id)),r.append("key-z-token",S("get")),e.next=16,axios.post("laravel"!=h?this.urlBASE:this.url+"/api/get/data",r).then((function(e){return e.data}))["catch"]((function(e){p&&b("Error Proses Gagal!","bg-red-600")}));case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,d&&a.append("scramble",d),t&&(l=t),l&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),a.append("t-bl",S(this.table)),e.next=7,this.verifyEnc();case 7:return r=e.sent,a.append("api-token",S(s)),a.append("se-token",r),a.append("5e19fb19a0aa66a0",S(l.toString())),a.append("backend",S(h)),a.append("sd28(#092/sd",n),""!=this.id.length&&a.append("id","".concat(this.id)),a.append("key-z-token",S("delete")),p&&b("Delete Data Berhasil!","bg-red-400"),e.next=18,axios.post("laravel"!=h?this.urlBASE:this.url+"/api/delete/data",a).then((function(e){return e.data}))["catch"]((function(e){p&&b("Error Proses Gagal!","bg-red-600")}));case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"select",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,e.next=3,this.verifyEnc();case 3:return r=e.sent,a.append("se-token",r),n&&(l=n),l&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),a.append("t-bl",S(this.table)),a.append("api-token",S(s)),a.append("5e19fb19a0aa66a0",S(l.toString())),a.append("backend",S(h)),d?(a.append("scramble",d),a.append("sd28(#092/sd",S(t))):a.append("sd28(#092/sd",t),""!=this.id.length&&a.append("id","".concat(this.id)),a.append("key-z-token",S("select")),e.next=16,axios.post("laravel"!=h?this.urlBASE:this.url+"/api/select/data",a).then((function(e){return e.data}))["catch"]((function(e){p&&b("Error Proses Gagal!","bg-red-600")}));case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"select2",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,e.next=3,this.verifyEnc();case 3:return r=e.sent,a.append("se-token",r),n&&(l=n),l&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),a.append("t-bl",S(this.table)),a.append("api-token",S(s)),a.append("5e19fb19a0aa66a0",S(l.toString())),a.append("backend",S(h)),d?(a.append("scramble",d),a.append("sd28(#092/sd",S(t))):a.append("sd28(#092/sd",t),""!=this.id.length&&a.append("id","".concat(this.id)),a.append("key-z-token",S("select")),e.next=16,axios.post("laravel"!=h?this.urlBASE:this.url+"/api/select/data",a).then((function(e){return e.data}))["catch"]((function(e){}));case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"login2",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,a,r){var o,c,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new FormData,e.next=3,this.verifyEnc();case 3:return c=e.sent,o.append("se-token",c),o.append("api-token",S(s)),o.append("token-u",S(t.username)),o.append("token-p",S(t.password)),e.next=10,axios.post("laravel"!=h?this.url+"/auth/login.php":this.url+"/api/login/data",o).then((function(e){localStorage.setItem("auth._token.local",S(e.data.token)),localStorage.setItem("auth.local",S(e.data.token));var t=new FormData;t.append("api-token",S(s)),t.append("se-token",c),t.append("key-h",localStorage.getItem("auth._token.local")),t.append("key-z-token",S("getuser")),axios.post("laravel"!=h?i.url+"/apis.php":i.url+"/api/getuser/data",t,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){i.Oauth=!0,n&&n.commit("changeUsers",e.data),localStorage.setItem("users",JSON.stringify(e.data)),r&&a&&a.push(r)}))}))["catch"]((function(e){p&&b("Username atau Password salah!","bg-red-600")}));case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e,this)})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"register",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,e.next=3,this.verifyEnc();case 3:return a=e.sent,n.append("se-token",a),n.append("api-token",S(s)),n.append("token-u",S(t.username)),n.append("token-p",S(t.password)),e.next=10,axios.post("laravel"!=h?this.url+"/auth/register.php":this.url+"/api/register/data",n).then((function(e){return e.data}));case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"ceklogin",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,e.next=3,this.verifyEnc();case 3:return o=e.sent,r.append("api-token",S(s)),r.append("se-token",o),r.append("backend",S(h)),r.append("key-z-token",S("getuser")),r.append("key-h",localStorage.getItem("auth._token.local")),e.next=11,axios.post("laravel"!=h?this.url+"/apis.php":this.url+"/api/getuser/data",r,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){if("object"==Object(a["a"])(e.data))return t&&t.commit("changeUsers",e.data),localStorage.setItem("users",JSON.stringify(e.data)),e;throw Error}))["catch"]((function(e){throw Error}));case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(e,t){console.log(e),e.$store.state.user=!1,e.$store.state.users=!1,localStorage.setItem("expireDate",null),localStorage.setItem("auth._token.local",!1),localStorage.setItem("auth.local",!1),localStorage.setItem("data-persist",null)}},{key:"getuser",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,e.next=3,this.verifyEnc();case 3:return a=e.sent,n.append("se-token",a),n.append("api-token",S(s)),n.append("backend",S(h)),n.append("key-z-token",S("getuser")),n.append("key-h",localStorage.getItem("auth._token.local")),e.next=11,axios.post("laravel"!=h?this.url+"/apis.php":this.url+"/api/getuser/data",n,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){return t&&t.commit("changeUsers",e.data[0]),localStorage.setItem("users",JSON.stringify(e.data[0])),e.data[0]}));case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"upload",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,o,c,i,u,d,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=f.length>1&&void 0!==f[1]&&f[1],a=!(f.length>2&&void 0!==f[2])||f[2],this,r=t,o={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.prev=5,c=r.files[0],i=new FormData,!n){e.next=17;break}return e.next=11,E("https://cdn.jsdelivr.net/npm/browser-image-compression@1.0.14/dist/browser-image-compression.min.js");case 11:return e.next=13,imageCompression(c,o);case 13:u=e.sent,i.append("file",u),e.next=18;break;case 17:i.append("file",c);case 18:return e.next=20,this.verifyEnc();case 20:return d=e.sent,i.append("api-token",S(s)),i.append("se-token",d),a?i.append("scramble","true"):i.append("scramble","false"),i.append("data","select * from tbuser"),i.append("secret","dsdxxoi4#$(*#sdsaaada@#"),l&&(i.append("header",localStorage.getItem("auth._token.local")),i.append("key-h",localStorage.getItem("auth._token.local"))),e.next=29,axios.post("laravel"!=h?this.urlupload:this.url+"/api/upload/data",i).then((function(e){return e.data}));case 29:return e.abrupt("return",e.sent);case 32:e.prev=32,e.t0=e["catch"](5),p&&b("Error Proses Gagal!","bg-red-600");case 35:case"end":return e.stop()}}),e,this,[[5,32]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"upload2",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this,n={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.prev=2,a=new FormData,e.next=6,imageCompression(t,n);case 6:return r=e.sent,console.log("compressFile",r),e.next=10,this.verifyEnc();case 10:return o=e.sent,a.append("api-token",S(s)),a.append("se-token",o),a.append("file",r),a.append("data","select * from tbuser"),a.append("secret","dsdxxoi4#$(*#sdsaaada@#"),l&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),e.next=19,axios.post(this.url+"/upload2.php",a).then((function(e){return e.data}));case 19:return e.abrupt("return",e.sent);case 22:e.prev=22,e.t0=e["catch"](2),p&&b("Error Proses Gagal!","bg-red-600");case 25:case"end":return e.stop()}}),e,this,[[2,22]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"alert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-red-600";b(e,t)}},{key:"confirm",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.length>1&&void 0!==n[1]?n[1]:"bg-red-600",e.next=3,new Promise((function(e,n){y(t,e)}));case 3:return w(),e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadingOn",value:function(){v()}},{key:"loadingOff",value:function(){k()}},{key:"scramble",value:function(e){var t=S(e);return t}},{key:"verifyEnc",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="kinonotabi",e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}();function b(e,t){var n=document.createElement("div");n.setAttribute("id","popup-msg"),n.setAttribute("style","position:fixed;top:30px;right:30px;z-index:10000;"),n.setAttribute("class","rounded-lg shadow ".concat(t," text-white animated fadeInDown p-3")),n.addEventListener("click",(function(e){console.log(e.target.remove())})),n.innerHTML=e,document.querySelector("body").appendChild(n),setTimeout((function(){document.querySelector("#popup-msg").classList.remove("fadeInDown"),document.querySelector("#popup-msg").classList.add("fadeOutUp"),setTimeout((function(){document.querySelector("#popup-msg").remove()}),1e3)}),2e3)}function v(e,t){var n=document.createElement("div"),a=document.createElement("div");n.addEventListener("click",(function(){setTimeout((function(){k(),b("Refresh apabila loading terlalu lama dan data tidak terupdate!","bg-red-400")}),500)})),n.setAttribute("id","loadingScreen"),n.setAttribute("style","position:fixed;top:0;left:0;z-index:10000;height:100vh;width:100vw;background:rgb(0,0,0,0.5)"),n.setAttribute("class"," animated fadeIn d-flex justify-content-center align-items-center"),a.setAttribute("id","loadingScreen2"),a.setAttribute("class","text-xl text-white font-bold text-center italic lds-ripple"),a.innerHTML='<div class=""></div><br><br><br><p class="text-center"> Loading </p>',n.appendChild(a),document.querySelector("body").appendChild(n)}function k(){document.querySelector("#loadingScreen").classList.remove("fadeIn"),document.querySelector("#loadingScreen").classList.add("fadeOut"),setTimeout((function(){document.querySelector("#loadingScreen").remove()}),500)}function y(e,t,n){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o,c,i,s,l,d,p,h,f,g,m,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),p=document.createElement("div"),h=document.createElement("button"),f=document.createElement("button"),g=document.createElement("button"),m=document.createElement("p"),b=document.createElement("hr"),r.setAttribute("id","confirmScreen"),r.setAttribute("style","position:fixed;top:0;left:0;z-index:10000;height:100vh;width:100vw;background:rgb(0,0,0,0.5)"),r.setAttribute("class"," animated fadeIn d-flex justify-content-center align-items-center"),o.setAttribute("id","confirmScreen2"),o.setAttribute("class",""),c.setAttribute("class","row justify-content-center"),c.setAttribute("style","width:100vw;"),i.setAttribute("class","row justify-content-between"),s.setAttribute("class","animate__animated animate__backInDown bg-white rounded-lg p-3 shadow col-10 col-sm-6"),s.setAttribute("style","min-height:35h;"),l.setAttribute("class","offset-2 col-4"),d.setAttribute("class","col-4"),p.setAttribute("class","col-2"),h.setAttribute("class","btn btn-sm btn-dark  float-right"),h.innerHTML="x",f.setAttribute("class","btn btn-sm btn-success  btn-block"),f.innerHTML='<span class="typcn typcn-tick"></span> Yes',g.setAttribute("class","btn btn-sm btn-danger  btn-block"),g.innerHTML='<span class="typcn typcn-cancel"></span> No',m.setAttribute("class","font-semibold text-xl"),m.innerHTML="".concat(t),d.appendChild(g),l.appendChild(f),i.appendChild(l),i.appendChild(d),i.appendChild(p),s.appendChild(h),s.appendChild(m),s.appendChild(b),s.appendChild(i),c.appendChild(s),o.appendChild(c),r.appendChild(o),h.addEventListener("click",(function(){u=!1,n("no")})),f.addEventListener("click",(function(){u=!0,n("yes")})),g.addEventListener("click",(function(){u=!1,n("no")})),document.querySelector("body").appendChild(r);case 50:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function w(){document.querySelector("#confirmScreen").classList.remove("fadeIn"),document.querySelector("#confirmScreen").classList.add("fadeOut"),setTimeout((function(){document.querySelector("#confirmScreen").remove()}),1e3)}function S(e){for(var t="",n="",a=0;a<e.length;a++)t="",t=e.charAt(a),"a"==t?t=t.replace("a","x"):"b"==t?t=t.replace("b","v"):"c"==t?t=t.replace("c","u"):"d"==t?t=t.replace("d","w"):"e"==t?t=t.replace("e","y"):"f"==t?t=t.replace("f","z"):"g"==t?t=t.replace("g","t"):"h"==t?t=t.replace("h","s"):"i"==t?t=t.replace("i","r"):"j"==t?t=t.replace("j","q"):"k"==t?t=t.replace("k","p"):"l"==t?t=t.replace("l","o"):"m"==t?t=t.replace("m","n"):"z"==t?t=t.replace("z","f"):"y"==t?t=t.replace("y","e"):"x"==t?t=t.replace("x","a"):"w"==t?t=t.replace("w","d"):"v"==t?t=t.replace("v","b"):"u"==t?t=t.replace("u","c"):"t"==t?t=t.replace("t","g"):"s"==t?t=t.replace("s","h"):"r"==t?t=t.replace("r","i"):"q"==t?t=t.replace("q","j"):"p"==t?t=t.replace("p","k"):"o"==t?t=t.replace("o","l"):"n"==t?t=t.replace("n","m"):"1"==t?t=t.replace("1","0"):"2"==t?t=t.replace("2","8"):"3"==t?t=t.replace("3","9"):"4"==t?t=t.replace("4","7"):"5"==t?t=t.replace("5","6"):"0"==t?t=t.replace("0","1"):"8"==t?t=t.replace("8","2"):"9"==t?t=t.replace("9","3"):"7"==t?t=t.replace("7","4"):"6"==t?t=t.replace("6","5"):" "==t?t=t.replace(" ","_"):"_"==t?t=t.replace("_"," "):"*"==t?t=t.replace("*","/"):"/"==t?t=t.replace("/","*"):","==t?t=t.replace(",","^"):"^"==t&&(t=t.replace("^",",")),n+=t;return n}function E(e){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=document.createElement("script");a.src=t,document.body.appendChild(a),setTimeout((function(){e()}),1e3)})));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}var O=document.createElement("style");O.innerHTML="\n.lds-ripple {\ndisplay: inline-block;\nposition: relative;\nwidth: 80px;\nheight: 80px;\n}\n.lds-ripple div {\nposition: absolute;\nborder: 4px solid #fff;\nopacity: 1;\nborder-radius: 50%;\nanimation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\nanimation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n0% {\n  top: 36px;\n  left: 36px;\n  width: 0;\n  height: 0;\n  opacity: 1;\n}\n100% {\n  top: 0px;\n  left: 0px;\n  width: 72px;\n  height: 72px;\n  opacity: 0;\n}\n}\n",document.head.appendChild(O),t["a"]=m},4360:function(e,t,n){"use strict";n("b64b"),n("4160"),n("159b"),n("a434"),n("0d03"),n("9911"),n("d3b7");var a=n("a026"),r=n("2f62"),o=n("8aa5"),c=n.n(o),i=n("a18c"),s=n("bc3a"),u=n.n(s),l=n("2c3c"),d=n("bfa9"),p=new l["a"];new d["a"]({storage:window.localStorage});a["a"].use(r["a"]);var h=function(){return new r["a"].Store({modules:{},state:{data:{listfavorites:[],menu:0},name:"",keranjang:0,mediaQ:"XL",users:null,nossr:!1,busy:!1,isAuth:!1},mutations:{goAuth:function(e){e.auth.isAuth=!0},vuex:function(e){localStorage.setItem("vuex",JSON.stringify(e))},xeuv:function(e){for(var t in e)"user"!=t&&(e[t]=JSON.parse(localStorage.getItem("vuex"))[t])},changeUser:function(e,t){e.user=t},changeUsers:function(e,t){e.users=t},busy:function(e,t){e.busy=t},mediaQueries:function(e,t){e.mediaQ=t},nossr:function(e,t){e.nossr=t},editData:function(e,t){var n=t.index;delete t.index;var a=Object.keys(t);a.forEach((function(a){e.users[n][a]=t[a]})),console.log(e.users)},saveData:function(e,t){var n={},a=Object.keys(e.users[0]);a.forEach((function(e){n[e]=t[e]?t[e]:"null"})),e.users.push(n)},deleteData:function(e,t){e.users.splice(t,1)},refreshData:function(e,t){e.auth.user=t.users,e.auth.user.picture=t.users.picture,e.user=t.users,e.kategori=t.kategoris},logout:function(e){e.user=!1,e.users=!1,e.data={listfavorites:[]},window.location.reload()},refreshUser:function(e,t){e.user=t}},actions:{getData:function(e,t){localStorage.getItem("data-persist")&&(e.state.data=JSON.parse(localStorage.getItem("data-persist")))},updateData:function(e){localStorage.setItem("data-persist",JSON.stringify(e.state.data))},auth:function(){"false"==localStorage.getItem("auth._token.local")&&"false"==localStorage.getItem("auth.local")&&i["a"].push("/")},notifikasi:function(e,t){console.log("datas",t),t.createdAt=new Date,t.dibaca=!1,p.collection("tbuser",!1).doc().select("select id,fcm from tbuser where id='".concat(t.to.id,"'")).then((function(e){console.log("cekfcm",e);var n=e[0].fcm,a={data:{title:t.title,body:t.body,surveyID:"ewtawgreg-gragrag-rgarhthgbad",sound:!0,ledColor:[255,255,128,16],vibrationPattern:[250,1e3,250,500],link:t.link,android_channel_id:"test-channel"},to:t.to?n:"-",priority:"high",content_available:!0};console.log("data",a),t.id_user=t.to.id,a=JSON.stringify(a),t.to=t.to?t.to:"",p.collection("notifikasi").doc().set({title:t.title,body:t.body,link:t.link,createdAt:t.createdAt,dibaca:!1,id_user:t.id_user}).then((function(e){})),c.a.database().ref("/notif/sintal").set({id:t.id_user,tanggal:(new Date).getTime()}),u.a.post("https://onesignal.com/api/v1/notifications",{app_id:"7d2f0b7a-c95b-47ef-be05-6215a554d49c",include_player_ids:[t.to?n:"-"],contents:{en:t.body},android_channel_id:"9db143e1-f1a7-4909-86e9-26da7dd34813",headings:{en:t.title},data:{"custom-data":"data1"},chrome_web_image:"https://balangankab.go.id/icon.png"},{headers:{Authorization:"Basic NzA0NDU4ZGItMTBlMC00NTZlLWEyYTMtMTAxNjJkMjg2N2Fm","Content-Type":"application/json"}}).then((function(e){}))}))},ceklogin:function(e,t){var n=e.commit;return n("changebusy",!0),new Promise((function(e,a){c.a.auth().onAuthStateChanged((function(a){a?(console.log(a.uid),c.a.firestore().collection("users").doc(a.uid).get().then((function(a){console.log(a.data()),n("changeUsers",a.data()),localStorage.setItem("users",JSON.stringify(a.data())),t&&(1==t["true"]?n("changebusy",!1):(n("changebusy",!1),i["a"].push(t["true"]))),e()}))):(console.log("user tidak ada"),t["false"]?(n("changebusy",!1),i["a"].push(t["false"])):n("changebusy",!1))}))}))},logout:function(e){e.commit("changegps",!1),c.a.auth().signOut().then((function(){localStorage.setItem("expireDate",null),localStorage.setItem("auth._token.local",!1),localStorage.setItem("auth.local",!1),navigator.geolocation.clearWatch(e.state.watchgps),e.state.isAuth=!1,e.commit("logout",!1),i["a"].push("/login")})),"dekstop"!=e.state.device&&this.$auth.logout()},refreshUser:function(e){this.$axios.get("/api/auth/user").then((function(t){console.log(t.data),e.commit("refreshUser",t.data.user)}))},userRefresh:function(e){e.commit("refreshUser",this.$auth.user)}}})};t["a"]=h},"547d":function(e,t,n){"use strict";var a=n("a026"),r=n("2169"),o=n("f92d"),c=n.n(o),i=n("96e4"),s=n.n(i),u=n("0a63"),l=n.n(u),d=(n("0808"),n("6944")),p=n.n(d),h=n("289d"),f=(n("5abe"),n("1321")),g=n.n(f),m=n("4a7a"),b=n.n(m),v=(n("6dfc"),n("5b6c")),k=n.n(v),y=n("c986"),x=n.n(y),w=n("f2d9"),S=n("49ab"),E=n.n(S),j=n("b76a"),O=n.n(j);a["a"].use(r["a"]),//! https://github.com/egoist/vue-no-ssr
a["a"].component("no-ssr",c.a),a["a"].use(s.a),a["a"].use(l.a),a["a"].use(p.a),a["a"].use(h["a"]),a["a"].use(g.a),a["a"].component("apexchart",g.a),a["a"].component("v-select",b.a),a["a"].use(k.a),a["a"].use(x.a,"vac"),a["a"].component("vueJsonExcel",w["a"]),a["a"].use(E.a),
//! =========================================
a["a"].component("draggable",O.a)},"88e5":function(e,t,n){"use strict";n("466d"),n("ac1f"),n("4160"),n("159b"),n("4795");var a=n("a026");a["a"].directive("focus",{bind:function(){var e=this.el;a["a"].nextTick((function(){e.focus()}))}}),a["a"].directive("lazys",{bind:function(e){var t=e.src;e.classList.toggle("deactive",!0),e.addEventListener("load",(function n(){console.log("loaded"),console.log("nama image",e.src),e.src.match(/nofound.png/g)?console.log("error2"):(e.src=t,e.classList.toggle("deactive",!1)),e.removeEventListener("load",n)})),e.addEventListener("error",(function t(){e.src="/nofound.png",console.log("error"),console.log(e.src.match(/nofound.png/g)),e.removeEventListener("error",t)}))},update:function(e){console.log("update");var t=e.src;console.log(t),e.src=t}}),a["a"].directive("imgs",{bind:function(e,t){var n=e.src;e.src="/loading.gif",e.addEventListener("load",(function a(){if(console.log("loaded"),console.log("nama image",e.src),e.src.match(/nofound.png/g))console.log("error2");else{e.src=n;var r=[];e.classList.contains("myimagegroup")?t.context.$el.querySelectorAll(".myimagegroup img").forEach((function(e,n){e.style.cursor="pointer",e.onclick=function(){t.context.$nuxt.$emit("myimageactive",n)},r.push(e.src)})):t.context.$el.querySelectorAll(".myimage").forEach((function(e,n){e.style.cursor="pointer",e.onclick=function(){t.context.$nuxt.$emit("myimageactive",n)},r.push(e.src)})),t.context.$nuxt.$emit("myimage",r)}e.removeEventListener("load",a)})),e.addEventListener("error",(function t(){e.src="/nofound.png",console.log("error"),console.log(e.src.match(/nofound.png/g)),e.removeEventListener("error",t)}))},update:function(e){console.log("update");var t=e.src;console.log(t),e.src=t}}),a["a"].directive("reload",{bind:function(e,t,n){n.context.$route.hash&&setTimeout((function(){n.elm.querySelectorAll("a").forEach((function(e){e.hash==n.context.$route.hash&&e.click()}))}),2e3)}}),a["a"].directive("myimage",{bind:function(e,t,n){var a=[];setTimeout((function(){n.context.$el.querySelectorAll(".myimage").length>0&&n.context.$el.querySelectorAll(".myimage").forEach((function(e,t){e.style.cursor="pointer",a.push(e.src),e.addEventListener("click",(function(){n.context.$nuxt.$emit("myimageactive",t),n.context.$nuxt.$emit("myimage",a)}))}))}),2e3)}}),a["a"].directive("top",{bind:function(e){setTimeout((function(){console.log("hello"),e.context.$root.$el.querySelector("#top").click()}),0)}})},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("a026"),r=n("8c4f"),o=n("db39"),c=n("58ca"),i=n("aecd");a["a"].use(c["a"]),a["a"].use(r["a"]);var s=Object(i["a"])((function(e){return n("a449")("./"+e+".vue")}));t["a"]=new r["a"]({mode:"hash",base:"",routes:[{path:"/",component:s,children:o["a"]}]})},db01:function(e,t,n){"use strict";n("7a82"),n("d3b7"),n("5319"),n("ac1f");var a=n("a026"),r=n("2ef0"),o=n.n(r),c=n("340b"),i=n.n(c),s=n("cc98"),u=n.n(s);Object.defineProperty(a["a"].prototype,"$_",{value:o.a}),Object.defineProperty(a["a"].prototype,"$datefns",{value:i.a}),Object.defineProperty(a["a"].prototype,"$uniqid",{value:u.a});var l=new a["a"];Object.defineProperty(a["a"].prototype,"$nuxt",{value:l});var d=function(e,t,n){return fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){return new File([e],t,{type:n})}))};Object.defineProperty(a["a"].prototype,"$urltofile",{value:d}),Object.defineProperty(a["a"].prototype,"$scramble",{value:function(e){for(var t="",n="",a=0;a<e.length;a++)t="",t=e.charAt(a),"a"==t?t=t.replace("a","x"):"b"==t?t=t.replace("b","v"):"c"==t?t=t.replace("c","u"):"d"==t?t=t.replace("d","w"):"e"==t?t=t.replace("e","y"):"f"==t?t=t.replace("f","z"):"g"==t?t=t.replace("g","t"):"h"==t?t=t.replace("h","s"):"i"==t?t=t.replace("i","r"):"j"==t?t=t.replace("j","q"):"k"==t?t=t.replace("k","p"):"l"==t?t=t.replace("l","o"):"m"==t?t=t.replace("m","n"):"z"==t?t=t.replace("z","f"):"y"==t?t=t.replace("y","e"):"x"==t?t=t.replace("x","a"):"w"==t?t=t.replace("w","d"):"v"==t?t=t.replace("v","b"):"u"==t?t=t.replace("u","c"):"t"==t?t=t.replace("t","g"):"s"==t?t=t.replace("s","h"):"r"==t?t=t.replace("r","i"):"q"==t?t=t.replace("q","j"):"p"==t?t=t.replace("p","k"):"o"==t?t=t.replace("o","l"):"n"==t?t=t.replace("n","m"):"1"==t?t=t.replace("1","0"):"2"==t?t=t.replace("2","8"):"3"==t?t=t.replace("3","9"):"4"==t?t=t.replace("4","7"):"5"==t?t=t.replace("5","6"):"0"==t?t=t.replace("0","1"):"8"==t?t=t.replace("8","2"):"9"==t?t=t.replace("9","3"):"7"==t?t=t.replace("7","4"):"6"==t?t=t.replace("6","5"):" "==t?t=t.replace(" ","_"):"_"==t?t=t.replace("_"," "):"*"==t?t=t.replace("*","/"):"/"==t?t=t.replace("/","*"):","==t?t=t.replace(",","^"):"^"==t&&(t=t.replace("^",",")),n+=t;return n}})},ddb8:function(e,t,n){"use strict";var a=n("9483");Object(a["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){if(window.confirm("Ada Versi Aplikasi Terbaru, Update sekarang?")){var t=e.waiting;t.postMessage({action:"SKIP_WAITING"}),window.alert("Update Berhasil Silahkan Reload/Refresh!"),window.location.reload()}},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})}});
//# sourceMappingURL=app~3d9b8e9e.4e6a4843.js.map