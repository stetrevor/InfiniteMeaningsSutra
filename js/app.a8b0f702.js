(function(e){function t(t){for(var n,o,s=t[0],u=t[1],i=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a5150":"149ad094","chunk-2d0abc5b":"e232e43f","chunk-2d0ae969":"bbf9ebdf","chunk-2d0ae98a":"45952b49","chunk-2d0aeb55":"7b17089a","chunk-2d0b15bb":"ed5906e7","chunk-2d0bd95a":"cc4f20d7","chunk-2d0c04d4":"d1d9f2a4","chunk-2d0d5b95":"8b783b1f","chunk-2d0e4bcf":"d569fe39","chunk-2d0e9966":"064d7d9c","chunk-2d217a99":"5b20a87b","chunk-2d225282":"f94735b9","chunk-2d228900":"3dfde9c5","chunk-2d229965":"69c9fe59","chunk-2d229dab":"919c3c2a","chunk-2d22c887":"7bcb38bc","chunk-2d230bdd":"10da6e4f"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var i=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",i.name="ChunkLoadError",i.type=n,i.request=c,r[1](i)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"10c7":function(e,t,r){"use strict";var n=r("261d"),a=r.n(n);a.a},"21bb":function(e,t,r){"use strict";var n=r("2dad"),a=r.n(n);a.a},"261d":function(e,t,r){},"2dad":function(e,t,r){},3511:function(e,t,r){"use strict";var n=r("7c72"),a=r.n(n);a.a},"46d4":function(e,t,r){},5033:function(e){e.exports=JSON.parse('{"b":["德行品第一","说法品第二","十功德品第三"],"a":"无量义经"}')},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),e.prompt?r("snackbar",{attrs:{message:"New version found. Refresh to upgrade?","accept-text":"Update","cancel-text":"later"},on:{"snackbar-accept":e.reload,"snackbar-cancel":function(t){e.prompt=!1}}}):e._e()],1)},c=[],o=(r("96cf"),r("c964")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"snackbar"},[r("div",{staticClass:"snackbar__message"},[e._v(e._s(e.message))]),r("div",{staticClass:"snackbar__button snackbar__button--accept",on:{click:function(t){return e.$emit("snackbar-accept")}}},[e._v(" "+e._s(e.acceptText)+" ")]),r("div",{staticClass:"snackbar__button snackbar__button--cancel",on:{click:function(t){return e.$emit("snackbar-cancel")}}},[e._v(" "+e._s(e.cancelText)+" ")])])},u=[],i={props:{message:{type:String,required:!0},acceptText:{type:String,default:"ok"},cancelText:{type:String,default:"cancel"}}},d=i,l=(r("584f"),r("2877")),p=Object(l["a"])(d,s,u,!1,null,null,null),h=p.exports,m={components:{Snackbar:h},created:function(){var e=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){e.prompt=!0}))},methods:{reload:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.prompt=!1,t.next=3,e.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return t.stop()}}),t)})))()}},data:function(){return{prompt:!1}}},f=m,b=(r("5c0b"),Object(l["a"])(f,a,c,!1,null,null,null)),k=b.exports,v=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",{staticClass:"home__title"},[e._v(e._s(e.sutraName))]),r("TableOfContents"),e.chapterNum?r("div",{staticClass:"home__continue-reading"},[r("router-link",{attrs:{to:"/chapter/"+e.chapterNum+"?Y="+e.bookmarkY}},[e._v("Continue reading ...")])],1):e._e()],1)},g=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",{staticClass:"table-of-contents"},e._l(e.chapters,(function(t,n){return r("li",{key:n,staticClass:"table-of-contents__item"},[r("router-link",{attrs:{to:t.route}},[e._v(e._s(t.title))])],1)})),0)},y=[],C=(r("d81d"),r("5033")),x={data:function(){return{chapters:C["b"].map((function(e,t){return{route:"/chapter/".concat(t+1),title:e}}))}}},O=x,M=(r("10c7"),Object(l["a"])(O,w,y,!1,null,null,null)),S=M.exports,N={getChapter:function(){return window.localStorage.getItem("bookmark.chapter")},setChapter:function(e){window.localStorage.setItem("bookmark.chapter",e)},getY:function(){return window.localStorage.getItem("bookmark.Y")},setY:function(e){window.localStorage.setItem("bookmark.Y",e)}},j={getDarkModeSetting:function(){return Boolean(window.localStorage.getItem("darkMode"))},setDarkModeSetting:function(e){var t=e?"true":"";window.localStorage.setItem("darkMode",t)}},T={name:"home",components:{TableOfContents:S},data:function(){return{chapterNum:N.getChapter(),bookmarkY:N.getY(),sutraName:C["a"]}}},$=T,E=(r("21bb"),Object(l["a"])($,_,g,!1,null,null,null)),D=E.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chapter"},[r("div",{staticClass:"chapter__nav"},[e.chapterNum>1?r("router-link",{attrs:{to:"/chapter/"+(e.chapterNum-1)}},[e._v("上一章")]):e._e(),r("router-link",{attrs:{to:"/"}},[e._v("目录")]),e.chapterNum<e.chapterCount?r("router-link",{attrs:{to:"/chapter/"+(e.chapterNum+1)}},[e._v("下一章")]):e._e()],1),r("base-chapter",{attrs:{"chapter-num":e.chapterNum}}),r("div",{staticClass:"chapter__nav"},[e.chapterNum>1?r("router-link",{attrs:{to:"/chapter/"+(e.chapterNum-1)}},[e._v("上一章")]):e._e(),r("router-link",{attrs:{to:"/"}},[e._v("目录")]),e.chapterNum<e.chapterCount?r("router-link",{attrs:{to:"/chapter/"+(e.chapterNum+1)}},[e._v("下一章")]):e._e()],1)],1)},Y=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"base-chapter"},[r("div",{staticClass:"base-chapter__content",domProps:{innerHTML:e._s(e.content)}}),r("div",{staticClass:"base-chapter__reading-progress"},[r("div",{staticClass:"base-chapter__text-hint"},[r("div",{staticClass:"base-chapter__progress"},[e._v(e._s(e.progress))]),r("button",{staticClass:"base-chapter__toggle-dark-mode",on:{click:e.toggleDarkMode}},[e._v(" "+e._s(e.darkModeButtonText)+" ")]),r("div",{staticClass:"base-chapter__read-time"},[e._v(e._s(e.readMinutes))])]),r("div",{staticClass:"base-chapter__progress-bar"})])])},B=[];r("a9e3"),r("d3b7");function I(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments),window.requestAnimationFrame((function(){t=!1})))}}var q={props:{chapterNum:{type:[Number,String],required:!0}},watch:{chapterNum:{handler:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r("99c7")("./chapter-".concat(e,".md"));case 2:a=n.sent,t.content=a.default,t.$nextTick((function(){var e=t.$el.querySelector(".base-chapter__content");t.readMinutes="".concat(Math.round(e.textContent.length/250)," min read"),window.scrollTo(0,t.$route.query.Y||0)}));case 5:case"end":return n.stop()}}),n)})))()},immediate:!0}},data:function(){return{content:"",progress:"0%",readMinutes:"",darkModeButtonText:j.getDarkModeSetting()?"Dark mode is ON":"Dark mode is OFF"}},methods:{updateProgress:function(){var e=document.documentElement,t=e.scrollTop,r=e.scrollHeight-e.clientHeight,n=t/r*100;this.$el.querySelector(".base-chapter__progress-bar").style.setProperty("--scroll",n+"%"),this.progress=Math.min(Math.ceil(n),100)+"%"},saveBookmarkY:function(){N.setY(window.scrollY)},toggleDarkMode:function(){var e=j.getDarkModeSetting();this.$setDarkMode(!e),this.darkModeButtonText=j.getDarkModeSetting()?"Dark mode is ON":"Dark mode is OFF"}},mounted:function(){document.addEventListener("scroll",I(this.updateProgress),{passive:!0}),document.addEventListener("scroll",I(this.saveBookmarkY),{passive:!0})},beforeDestroy:function(){document.removeEventListener("scroll",I(this.updateProgress)),document.removeEventListener("scroll",I(this.saveBookmarkY))}},R=q,F=(r("3511"),Object(l["a"])(R,L,B,!1,null,null,null)),U=F.exports,A={name:"chapter",components:{BaseChapter:U},computed:{chapterNum:function(){return parseInt(this.$route.params.chapter_num)}},methods:{saveBookmarkChapter:function(e){N.setChapter(e)}},beforeRouteEnter:function(e,t,r){r((function(t){return t.saveBookmarkChapter(e.params.chapter_num)}))},beforeRouteUpdate:function(e,t,r){this.saveBookmarkChapter(e.params.chapter_num),r()},data:function(){return{chapterCount:C["b"].length}}},H=A,J=(r("e311"),Object(l["a"])(H,P,Y,!1,null,null,null)),W=J.exports;n["a"].use(v["a"]);var G,K=new v["a"]({routes:[{path:"/",name:"home",component:D},{path:"/chapter/:chapter_num",name:"chapter",component:W}]}),z=r("acfa");"serviceWorker"in navigator?(G=new z["a"]("".concat("","service-worker.js")),G.addEventListener("controlling",(function(){return window.location.reload()})),G.register()):G=null;var Q=G;n["a"].config.productionTip=!1,n["a"].prototype.$workbox=Q;var V=function(e){e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),j.setDarkModeSetting(e)};V(j.getDarkModeSetting()),n["a"].prototype.$setDarkMode=V,new n["a"]({router:K,render:function(e){return e(k)}}).$mount("#app")},"584f":function(e,t,r){"use strict";var n=r("dd7c"),a=r.n(n);a.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"7c72":function(e,t,r){},"99c7":function(e,t,r){var n={"./chapter-1.md":["c84b","chunk-2d217a99"],"./chapter-14.md":["e2cb","chunk-2d225282"],"./chapter-15.md":["dee9","chunk-2d229dab"],"./chapter-16.md":["9200","chunk-2d0e4bcf"],"./chapter-17.md":["7006","chunk-2d0d5b95"],"./chapter-18.md":["da5b","chunk-2d228900"],"./chapter-19.md":["f447","chunk-2d22c887"],"./chapter-2.md":["0b79","chunk-2d0ae98a"],"./chapter-20.md":["2d2d","chunk-2d0bd95a"],"./chapter-21.md":["2007","chunk-2d0b15bb"],"./chapter-22.md":["8dbf","chunk-2d0e9966"],"./chapter-23.md":["0ae3","chunk-2d0aeb55"],"./chapter-24.md":["08d6","chunk-2d0a5150"],"./chapter-25.md":["1765","chunk-2d0abc5b"],"./chapter-26.md":["ee29","chunk-2d230bdd"],"./chapter-27.md":["dda0","chunk-2d229965"],"./chapter-28.md":["0b67","chunk-2d0ae969"],"./chapter-3.md":["40ce","chunk-2d0c04d4"]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r.t(a,7)}))}a.keys=function(){return Object.keys(n)},a.id="99c7",e.exports=a},"9c0c":function(e,t,r){},dd7c:function(e,t,r){},e311:function(e,t,r){"use strict";var n=r("46d4"),a=r.n(n);a.a}});
//# sourceMappingURL=app.a8b0f702.js.map