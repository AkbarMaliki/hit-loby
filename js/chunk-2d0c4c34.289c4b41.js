(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4c34"],{"3be4":function(e,t,n){"use strict";var a=n("53ca"),r=n("1da1"),o=n("d4ec"),c=n("bee2"),i=n("ade3"),p=(n("96cf"),n("b64b"),n("4160"),n("159b"),n("5319"),n("ac1f"),n("d3b7"),n("25f0"),n("0d03"),n("4795"),n("4627")),s=n("bc3a"),u=n.n(s),l=(n("6821"),n("3452"),n("8aa5")),d=n.n(l),h="borneojs",m=!1,g=!1,f=!0,b=!0,k="php",v=0,y="https://apis2.draesthetic.id",w=y+"/apis.php",x=y+"/upload1.php",S=function(){function e(){Object(o["a"])(this,e),Object(i["a"])(this,"table",""),Object(i["a"])(this,"id","")}return Object(c["a"])(e,[{key:"collection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return b=t,this.table=e,this}},{key:"doc",value:function(e){return e&&(this.id=e),this}},{key:"set",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,o,c,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=function(e){return Object.keys(e)},b&&E(),a=new FormData,r=Object.keys(t),r.forEach((function(e){"string"==typeof t[e]&&(t[e]=t[e].replace(/'/g,"\\'"),t[e]=t[e].replace(/"/g,'"'))})),n&&(g=n),g&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),e.next=9,O();case 9:return o=e.sent,a.append("api-token",L(h)),a.append("se-token",o),a.append("5e19fb19a0aa66a0",L(g.toString())),a.append("t-bl",L(this.table)),a.append("backend",L(k)),f?(a.append("scramble",f),a.append("data",L(JSON.stringify(t)))):a.append("data",JSON.stringify(t)),a.append("key-z-token",L("set")),a.append("key",c(t)),setTimeout((function(){}),4e3),e.next=21,u.a.post("laravel"!=k?w:y+"/api/set/data",a).then((function(e){return b&&(j("Proses Data Berhasil!","bg-green-400"),A()),e.data}))["catch"]((function(e){b&&(j("Error Proses Gagal!","bg-red-600"),A()),v++,v<2&&i.set(t)}));case 21:return e.abrupt("return",e.sent);case 22:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("t-bl",L(this.table)),r.append("backend",L(k)),e.next=5,O();case 5:return o=e.sent,r.append("api-token",L(h)),r.append("se-token",o),a&&(g=a),g&&(r.append("header",localStorage.getItem("auth._token.local")),r.append("key-h",localStorage.getItem("auth._token.local"))),r.append("5e19fb19a0aa66a0",L(g.toString())),f?(r.append("scramble",f),r.append("sd28(#092/sd",L(t)),r.append("23*(kdj",L(n))):(r.append("sd28(#092/sd",t),r.append("23*(kdj",n)),""!=this.id.length&&r.append("id","".concat(this.id)),r.append("key-z-token",L("get")),e.next=16,u.a.post("laravel"!=k?w:y+"/api/get/data",r).then((function(e){return e.data}))["catch"]((function(e){b&&j("Error Proses Gagal!","bg-red-600")}));case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,f&&a.append("scramble",f),t&&(g=t),g&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),a.append("t-bl",L(this.table)),e.next=7,O();case 7:return r=e.sent,a.append("api-token",L(h)),a.append("se-token",r),a.append("5e19fb19a0aa66a0",L(g.toString())),a.append("backend",L(k)),a.append("sd28(#092/sd",n),""!=this.id.length&&a.append("id","".concat(this.id)),a.append("key-z-token",L("delete")),b&&j("Delete Data Berhasil!","bg-red-400"),e.next=18,u.a.post("laravel"!=k?w:y+"/api/delete/data",a).then((function(e){return e.data}))["catch"]((function(e){b&&j("Error Proses Gagal!","bg-red-600")}));case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"select",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,e.next=3,O();case 3:return r=e.sent,a.append("se-token",r),n&&(g=n),g&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),a.append("t-bl",L(this.table)),a.append("api-token",L(h)),a.append("5e19fb19a0aa66a0",L(g.toString())),a.append("backend",L(k)),f?(a.append("scramble",f),a.append("sd28(#092/sd",L(t))):a.append("sd28(#092/sd",t),""!=this.id.length&&a.append("id","".concat(this.id)),a.append("key-z-token",L("select")),e.next=16,u.a.post("laravel"!=k?w:y+"/api/select/data",a).then((function(e){return e.data}))["catch"]((function(e){b&&j("Error Proses Gagal!","bg-red-600")}));case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"login2",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,a,r){var o,c,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new FormData,e.next=3,O();case 3:return c=e.sent,o.append("se-token",c),o.append("api-token",L(h)),o.append("token-u",L(t.username)),o.append("token-p",L(t.password)),e.next=10,u.a.post("laravel"!=k?y+"/auth/login.php":y+"/api/login/data",o).then((function(e){localStorage.setItem("auth._token.local",L(e.data.token)),localStorage.setItem("auth.local",L(e.data.token));var t=new FormData;t.append("api-token",L(h)),t.append("se-token",c),t.append("key-h",localStorage.getItem("auth._token.local")),t.append("key-z-token",L("getuser")),u.a.post("laravel"!=k?y+"/apis.php":y+"/api/getuser/data",t,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){i.Oauth=!0,n&&n.commit("changeUsers",e.data),localStorage.setItem("users",JSON.stringify(e.data)),r&&a&&a.push(r)}))}))["catch"]((function(e){b&&j("Username atau Password salah!","bg-red-600")}));case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"register",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,e.next=3,O();case 3:return a=e.sent,n.append("se-token",a),n.append("api-token",L(h)),n.append("token-u",L(t.username)),n.append("token-p",L(t.password)),e.next=10,u.a.post("laravel"!=k?y+"/auth/register.php":y+"/api/register/data",n).then((function(e){return e.data}));case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"ceklogin",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,e.next=3,O();case 3:return o=e.sent,r.append("api-token",L(h)),r.append("se-token",o),r.append("backend",L(k)),r.append("key-z-token",L("getuser")),r.append("key-h",localStorage.getItem("auth._token.local")),e.next=11,u.a.post("laravel"!=k?y+"/apis.php":y+"/api/getuser/data",r,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){if("object"==Object(a["a"])(e.data))return t&&t.commit("changeUsers",e.data),localStorage.setItem("users",JSON.stringify(e.data)),e;throw Error}))["catch"]((function(e){throw Error}));case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(e,t){console.log(e),e.$store.state.user=!1,e.$store.state.users=!1,localStorage.setItem("expireDate",null),localStorage.setItem("auth._token.local",!1),localStorage.setItem("auth.local",!1),localStorage.setItem("data-persist",null),d.a.auth().signOut().then((function(){e.$store.state.isAuth=!1,window.location.reload(),e.$router.push(t)}))}},{key:"getuser",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,e.next=3,O();case 3:return a=e.sent,n.append("se-token",a),n.append("api-token",L(h)),n.append("backend",L(k)),n.append("key-z-token",L("getuser")),n.append("key-h",localStorage.getItem("auth._token.local")),e.next=11,u.a.post("laravel"!=k?y+"/apis.php":y+"/api/getuser/data",n,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){return t&&t.commit("changeUsers",e.data[0]),localStorage.setItem("users",JSON.stringify(e.data[0])),e.data[0]}));case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"upload",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this,n=t,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.prev=3,a=n.files[0],r=new FormData,e.next=8,O();case 8:return o=e.sent,r.append("api-token",L(h)),r.append("se-token",o),r.append("file",a),r.append("data","select * from tbuser"),r.append("secret","dsdxxoi4#$(*#sdsaaada@#"),g&&(r.append("header",localStorage.getItem("auth._token.local")),r.append("key-h",localStorage.getItem("auth._token.local"))),e.next=17,u.a.post("laravel"!=k?x:y+"/api/upload/data",r).then((function(e){return e.data}));case 17:return e.abrupt("return",e.sent);case 20:e.prev=20,e.t0=e["catch"](3),b&&j("Error Proses Gagal!","bg-red-600");case 23:case"end":return e.stop()}}),e,this,[[3,20]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"upload2",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this,n={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.prev=2,a=new FormData,e.next=6,Object(p["a"])(t,n);case 6:return r=e.sent,console.log("compressFile",r),e.next=10,O();case 10:return o=e.sent,a.append("api-token",L(h)),a.append("se-token",o),a.append("file",r),a.append("data","select * from tbuser"),a.append("secret","dsdxxoi4#$(*#sdsaaada@#"),g&&(a.append("header",localStorage.getItem("auth._token.local")),a.append("key-h",localStorage.getItem("auth._token.local"))),e.next=19,u.a.post(y+"/upload2.php",a).then((function(e){return e.data}));case 19:return e.abrupt("return",e.sent);case 22:e.prev=22,e.t0=e["catch"](2),b&&j("Error Proses Gagal!","bg-red-600");case 25:case"end":return e.stop()}}),e,this,[[2,22]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"alert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-red-600";j(e,t)}},{key:"confirm",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.length>1&&void 0!==n[1]?n[1]:"bg-red-600",e.next=3,new Promise((function(e,n){R(t,e)}));case 3:return z(),e.abrupt("return",m);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadingOn",value:function(){E()}},{key:"loadingOff",value:function(){A()}},{key:"scramble",value:function(e){var t=L(e);return t}}]),e}();function O(){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="kinonotabi",e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function j(e,t){var n=document.createElement("div");n.setAttribute("id","popup-msg"),n.setAttribute("style","position:fixed;top:30px;right:30px;z-index:10000;"),n.setAttribute("class","rounded-lg shadow ".concat(t," text-white animated fadeInDown p-3")),n.addEventListener("click",(function(e){console.log(e.target.remove())})),n.innerHTML=e,document.querySelector("body").appendChild(n),setTimeout((function(){document.querySelector("#popup-msg").classList.remove("fadeInDown"),document.querySelector("#popup-msg").classList.add("fadeOutUp"),setTimeout((function(){document.querySelector("#popup-msg").remove()}),1e3)}),2e3)}function E(e,t){var n=document.createElement("div"),a=document.createElement("div");n.addEventListener("click",(function(){setTimeout((function(){A(),j("Refresh apabila loading terlalu lama dan data tidak terupdate!","bg-red-400")}),500)})),n.setAttribute("id","loadingScreen"),n.setAttribute("style","position:fixed;top:0;left:0;z-index:10000;height:100vh;width:100vw;background:rgb(0,0,0,0.5)"),n.setAttribute("class"," animated fadeIn d-flex justify-content-center align-items-center"),a.setAttribute("id","loadingScreen2"),a.setAttribute("class","text-xl text-white font-bold text-center italic lds-ripple"),a.innerHTML='<div class=""></div><br><br><br><p class="text-center"> Loading </p>',n.appendChild(a),document.querySelector("body").appendChild(n)}function A(){document.querySelector("#loadingScreen").classList.remove("fadeIn"),document.querySelector("#loadingScreen").classList.add("fadeOut"),setTimeout((function(){document.querySelector("#loadingScreen").remove()}),500)}function R(e,t,n){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o,c,i,p,s,u,l,d,h,g,f,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),p=document.createElement("div"),s=document.createElement("div"),u=document.createElement("div"),l=document.createElement("div"),d=document.createElement("button"),h=document.createElement("button"),g=document.createElement("button"),f=document.createElement("p"),b=document.createElement("hr"),r.setAttribute("id","confirmScreen"),r.setAttribute("style","position:fixed;top:0;left:0;z-index:10000;height:100vh;width:100vw;background:rgb(0,0,0,0.5)"),r.setAttribute("class"," animated fadeIn d-flex justify-content-center align-items-center"),o.setAttribute("id","confirmScreen2"),o.setAttribute("class",""),c.setAttribute("class","row justify-content-center"),c.setAttribute("style","width:100vw;"),i.setAttribute("class","row justify-content-between"),p.setAttribute("class","animate__animated animate__backInDown bg-white rounded-lg p-3 shadow col-10 col-sm-6"),p.setAttribute("style","min-height:35h;"),s.setAttribute("class","offset-2 col-4"),u.setAttribute("class","col-4"),l.setAttribute("class","col-2"),d.setAttribute("class","btn btn-sm btn-dark  float-right"),d.innerHTML="x",h.setAttribute("class","btn btn-sm btn-success  btn-block"),h.innerHTML='<span class="typcn typcn-tick"></span> Yes',g.setAttribute("class","btn btn-sm btn-danger  btn-block"),g.innerHTML='<span class="typcn typcn-cancel"></span> No',f.setAttribute("class","font-semibold text-xl"),f.innerHTML="".concat(t),u.appendChild(g),s.appendChild(h),i.appendChild(s),i.appendChild(u),i.appendChild(l),p.appendChild(d),p.appendChild(f),p.appendChild(b),p.appendChild(i),c.appendChild(p),o.appendChild(c),r.appendChild(o),d.addEventListener("click",(function(){m=!1,n("no")})),h.addEventListener("click",(function(){m=!0,n("yes")})),g.addEventListener("click",(function(){m=!1,n("no")})),document.querySelector("body").appendChild(r);case 50:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function z(){document.querySelector("#confirmScreen").classList.remove("fadeIn"),document.querySelector("#confirmScreen").classList.add("fadeOut"),setTimeout((function(){document.querySelector("#confirmScreen").remove()}),1e3)}function L(e){for(var t="",n="",a=0;a<e.length;a++)t="",t=e.charAt(a),"a"==t?t=t.replace("a","x"):"b"==t?t=t.replace("b","v"):"c"==t?t=t.replace("c","u"):"d"==t?t=t.replace("d","w"):"e"==t?t=t.replace("e","y"):"f"==t?t=t.replace("f","z"):"g"==t?t=t.replace("g","t"):"h"==t?t=t.replace("h","s"):"i"==t?t=t.replace("i","r"):"j"==t?t=t.replace("j","q"):"k"==t?t=t.replace("k","p"):"l"==t?t=t.replace("l","o"):"m"==t?t=t.replace("m","n"):"z"==t?t=t.replace("z","f"):"y"==t?t=t.replace("y","e"):"x"==t?t=t.replace("x","a"):"w"==t?t=t.replace("w","d"):"v"==t?t=t.replace("v","b"):"u"==t?t=t.replace("u","c"):"t"==t?t=t.replace("t","g"):"s"==t?t=t.replace("s","h"):"r"==t?t=t.replace("r","i"):"q"==t?t=t.replace("q","j"):"p"==t?t=t.replace("p","k"):"o"==t?t=t.replace("o","l"):"n"==t?t=t.replace("n","m"):"1"==t?t=t.replace("1","0"):"2"==t?t=t.replace("2","8"):"3"==t?t=t.replace("3","9"):"4"==t?t=t.replace("4","7"):"5"==t?t=t.replace("5","6"):"0"==t?t=t.replace("0","1"):"8"==t?t=t.replace("8","2"):"9"==t?t=t.replace("9","3"):"7"==t?t=t.replace("7","4"):"6"==t?t=t.replace("6","5"):" "==t?t=t.replace(" ","_"):"_"==t?t=t.replace("_"," "):"*"==t?t=t.replace("*","/"):"/"==t?t=t.replace("/","*"):","==t?t=t.replace(",","^"):"^"==t&&(t=t.replace("^",",")),n+=t;return n}var D=document.createElement("style");D.innerHTML="\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n",document.head.appendChild(D),t["a"]=S}}]);
//# sourceMappingURL=chunk-2d0c4c34.289c4b41.js.map