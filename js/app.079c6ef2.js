(function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5883d030"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/farm-page/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"80c4":function(e,t,r){},"9c0c":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"registerServiceWorker",(function(){return F}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=(r("d3b7"),r("8c4f")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},c=[],s=r("d4ec"),u=r("262e"),l=r("2caf"),p=r("9ab4"),f=r("1b40"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return r}(f["c"]);Object(p["a"])([Object(f["b"])()],d.prototype,"msg",void 0),d=Object(p["a"])([f["a"]],d);var g=d,b=g,m=(r("ef92"),r("2877")),_=Object(m["a"])(b,v,h,!1,null,"036fd72f",null),w=_.exports,j=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return r}(f["c"]);j=Object(p["a"])([Object(f["a"])({components:{HelloWorld:w}})],j);var k=j,y=k,O=Object(m["a"])(y,i,c,!1,null,null,null),E=O.exports;o["a"].use(a["a"]);var S,P=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],T=new a["a"]({mode:"history",base:"/farm-page/",routes:P}),x=T,A=(r("96cf"),r("1da1")),L=r("bee2"),$=r("dba1"),I=r("2bd2"),N=r("3e18"),R=r("9483"),C=function(){function e(){var t=this;Object(s["a"])(this,e),this._ready$=new $["a"](!1),this._installPrompt$=new $["a"](void 0),this._initiation$=new I["a"],this._initiation$.pipe(Object(N["a"])(Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.initiation();case 3:window.addEventListener("appinstalled",(function(e){console.log("👍","appinstalled",e),t._installPrompt$.next(void 0)})),t.ready$.next(!0),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))))).subscribe(),this._initiation$.next()}return Object(L["a"])(e,[{key:"initiation",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("serviceWorker"in navigator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,new Promise((function(e,t){Object(R["a"])("".concat("/farm-page/","service-worker.js"),{registrationOptions:{scope:"".concat("/farm-page/")},ready:function(){return console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),e()},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){return console.error("Error during service worker registration:",e),t(e)}})}));case 4:window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),t._installPrompt$.next(e)}));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"ready$",get:function(){return this._ready$}},{key:"installPrompt$",get:function(){return this._installPrompt$}}]),e}(),W=new C,M=r("2f62");(function(e){e["SET_READY"]="SET_READY",e["SET_INSTALL_PROMPT"]="SET_INSTALL_PROMPT",e["SET_CAN_INSTALL"]="SET_CAN_INSTALL"})(S||(S={}));var D,F=function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,"serviceWorker"in navigator){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,new Promise((function(e,t){Object(R["a"])("".concat("/farm-page/","service-worker.js"),{ready:function(){return console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),r(S.SET_READY,!0),e()},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){return console.error("Error during service worker registration:",e),t(e)}})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y={ready:!1,canInstall:!1,installPrompt:void 0},H={SET_READY:function(e,t){e.ready=t},SET_CAN_INSTALL:function(e,t){e.canInstall=t},SET_INSTALL_PROMPT:function(e,t){e.installPrompt=t}},q={setReady:function(e,t){var r=e.commit;r(S.SET_READY,t)},setCanInstall:function(e,t){var r=e.commit;r(S.SET_CAN_INSTALL,t)},setInstallPrompt:function(e,t){var r=e.commit;r(S.SET_INSTALL_PROMPT,t)}},B={ready:function(e){return e.ready},canInstall:function(e){return e.canInstall},installPrompt:function(e){return e.installPrompt}},J={state:Y,mutations:H,actions:q,getters:B};(function(e){e["registerServiceWorker"]="registerServiceWorker"})(D||(D={})),o["a"].use(M["a"]);var V=new M["a"].Store({actions:n,modules:{serviceWorker:J}}),z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e.canInstall?r("button",{on:{click:e.install}},[e._v("Install")]):e._e()],1),r("router-view")],1)},G=[],K=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.apply(this,arguments),e.canInstall=!1,e}return Object(L["a"])(r,[{key:"created",value:function(){var e=this;W.installPrompt$.pipe(Object(N["a"])(function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.canInstall=!!r;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).subscribe()}},{key:"install",value:function(){if(this.canInstall){var e=W.installPrompt$.value;e.prompt()}}}]),r}(f["c"]);K=Object(p["a"])([Object(f["a"])({})],K);var Q=K,U=Q,X=(r("5c0b"),Object(m["a"])(U,z,G,!1,null,null,null)),Z=X.exports;o["a"].config.productionTip=!1,new o["a"]({router:x,store:V,render:function(e){return e(Z)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},ef92:function(e,t,r){"use strict";r("80c4")}});
//# sourceMappingURL=app.079c6ef2.js.map