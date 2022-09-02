import{_ as g,g as K,a as D,d as V,l as F,h as H,j as z}from"./iframe-router.5eba7a64.js";import{a as l,t as $,f as P,i as E,o as r,n as j,d as h,F as O,b as C,c as k,w as b,h as X,e as T,r as y,l as Y,m as I,x as q,q as W,j as G,v as J,y as Q,K as U,s as Z}from"./vue-libs.cca4001e.js";const ee={name:"DemoBlock",props:{card:Boolean,title:String}},te={class:"van-doc-demo-block"},ne={key:0,class:"van-doc-demo-block__title"},oe={key:1,class:"van-doc-demo-block__card"};function se(e,a,o,s,i,n){return r(),l("div",te,[o.title?(r(),l("h2",ne,$(o.title),1)):P("v-if",!0),o.card?(r(),l("div",oe,[E(e.$slots,"default")])):E(e.$slots,"default",{key:2})])}var S=g(ee,[["render",se]]);const ce={name:"DemoSection",computed:{demoName(){const{meta:e}=this.$route||{};return e&&e.name?`demo-${K(e.name)}`:""}}};function re(e,a,o,s,i,n){return r(),l("section",{class:j(["van-doc-demo-section",n.demoName])},[E(e.$slots,"default")],2)}var R=g(ce,[["render",re]]);const ae=()=>D(()=>import("./index.fadd78ef.js"),["assets/index.fadd78ef.js","assets/index.b7ef9c9b.js","assets/vue-libs.cca4001e.js","assets/with-install.1d22c664.js"]),ie=()=>D(()=>import("./index.26740f12.js"),["assets/index.26740f12.js","assets/index.b7ef9c9b.js","assets/vue-libs.cca4001e.js","assets/with-install.1d22c664.js"]),ue=()=>D(()=>import("./index.d985027f.js"),["assets/index.d985027f.js","assets/iframe-router.5eba7a64.js","assets/vue-libs.cca4001e.js"]),le=()=>D(()=>import("./index.acea7169.js"),["assets/index.acea7169.js","assets/index.56dd7b24.css","assets/index.b7ef9c9b.js","assets/vue-libs.cca4001e.js"]),L={DemoButton:ae,MyText:ie,Style:ue,TriggerInput:le},B={name:"jxlust-ui",build:{css:{base:"style/base.scss",preprocessor:"sass"},site:{publicPath:"site-dist"},packageManager:"pnpm"},site:{title:"jxlust-ui",logo:"https://xxxxxx/assets/logo.png",nav:[{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"demo-button",title:"DemoButton \u6309\u94AE"},{path:"my-text",title:"text \u6587\u672C\u5C55\u793A"},{path:"trigger-input",title:"\u89E6\u53D1\u6587\u672C\u6846"},{path:"style",title:"Built-in style"}]}]}},_e={},me={viewBox:"0 0 1024 1024"},de=h("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),he=h("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1),pe=[de,he];function fe(e,a){return r(),l("svg",me,pe)}var ve=g(_e,[["render",fe]]);const ge={components:{ArrowRight:ve},props:{lang:String,group:Object},data(){return{active:[]}},computed:{base(){return this.lang?`/${this.lang}`:""}}},ye={class:"demo-home-nav"},$e={class:"demo-home-nav__title"},we={class:"demo-home-nav__group"};function xe(e,a,o,s,i,n){const m=y("arrow-right"),p=y("router-link");return r(),l("div",ye,[h("div",$e,$(o.group.title),1),h("div",we,[(r(!0),l(O,null,C(o.group.items,_=>(r(),k(p,{class:"demo-home-nav__block",key:_.path,to:`${n.base}/${_.path}`},{default:b(()=>[X($(_.title)+" ",1),T(m,{class:"demo-home-nav__icon"})]),_:2},1032,["to"]))),128))])])}var Te=g(ge,[["render",xe]]);const ke={components:{DemoHomeNav:Te},computed:{lang(){const{lang:e}=this.$route.meta;return e},config(){const{locales:e}=B.site;return e?e[this.lang]:B.site},smallTitle(){return this.config.title.length>=8}}},De={class:"demo-home"},Le=["src"],Ee={key:0,class:"demo-home__desc"};function be(e,a,o,s,i,n){const m=y("demo-home-nav");return r(),l("div",De,[h("h1",{class:j(["demo-home__title",{"demo-home__title--small":n.smallTitle}])},[h("img",{src:n.config.logo},null,8,Le),h("span",null,$(n.config.title),1)],2),n.config.description?(r(),l("h2",Ee,$(n.config.description),1)):P("v-if",!0),(r(!0),l(O,null,C(n.config.nav,(p,_)=>(r(),k(m,{key:_,lang:n.lang,group:p},null,8,["lang","group"]))),128))])}var A=g(ke,[["render",be]]);const{locales:N,defaultLang:Be}=B.site;V(Be);function Ne(e){const a=e.path.split("/")[1];return Object.keys(N).indexOf(a)!==-1?a:H()}function Oe(){const e=[],a=Object.keys(L),o=N?Object.keys(N):[];return o.length?(e.push({name:"NotFound",path:"/:path(.*)+",redirect:s=>({name:Ne(s)})}),o.forEach(s=>{e.push({name:s,path:`/${s}`,component:A,meta:{lang:s}})})):(e.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),e.push({name:"home",path:"/",component:A})),a.forEach(s=>{const i=K(s);o.length?o.forEach(n=>{e.push({name:`${n}/${i}`,path:`/${n}/${i}`,component:L[s],meta:{name:s,lang:n}})}):e.push({name:i,path:`/${i}`,component:L[s],meta:{name:s}})}),e}const w=Y({history:I(),routes:Oe(),scrollBehavior:(e,a,o)=>o||{x:0,y:0}});q(w.currentRoute,()=>{w.currentRoute.value.redirectedFrom||W(z)});F(w);window.vueRouter=w;const Se={data(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title(){const{name:e}=this.$route.meta||{};return e?e.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}},Re={class:"demo-nav"},Ae={class:"demo-nav__title"},Ke=["d"];function Pe(e,a,o,s,i,n){return G((r(),l("div",Re,[h("div",Ae,$(n.title),1),(r(),l("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:a[0]||(a[0]=(...m)=>n.onBack&&n.onBack(...m))},[h("path",{fill:"#969799","fill-rule":"evenodd",d:i.path},null,8,Ke)]))],512)),[[J,n.title]])}var je=g(Se,[["render",Pe]]);const Ce={components:{DemoNav:je}};function Me(e,a,o,s,i,n){const m=y("demo-nav"),p=y("demo-section"),_=y("router-view");return r(),l(O,null,[T(m),T(_,null,{default:b(({Component:x})=>[(r(),k(U,null,[T(p,null,{default:b(()=>[(r(),k(Q(x)))]),_:2},1024)],1024))]),_:1})],64)}var Ve=g(Ce,[["render",Me]]);(function(){if(typeof window=="undefined")return;var e,a="ontouchstart"in window;document.createTouch||(document.createTouch=function(c,t,u,d,f,v,M){return new o(t,u,{pageX:d,pageY:f,screenX:v,screenY:M,clientX:d-window.pageXOffset,clientY:f-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var c=s(),t=0;t<arguments.length;t++)c[t]=arguments[t];return c.length=arguments.length,c}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(c){var t=this;do{if(t.matches(c))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null});var o=function(t,u,d,f,v){f=f||0,v=v||0,this.identifier=u,this.target=t,this.clientX=d.clientX+f,this.clientY=d.clientY+v,this.screenX=d.screenX+f,this.screenY=d.screenY+v,this.pageX=d.pageX+f,this.pageY=d.pageY+v};function s(){var c=[];return c.item=function(t){return this[t]||null},c.identifiedTouch=function(t){return this[t+1]||null},c}var i=!1;function n(c){return function(t){t.type==="mousedown"&&(i=!0),t.type==="mouseup"&&(i=!1),!(t.type==="mousemove"&&!i)&&((t.type==="mousedown"||!e||e&&!e.dispatchEvent)&&(e=t.target),e.closest("[data-no-touch-simulate]")==null&&m(c,t),t.type==="mouseup"&&(e=null))}}function m(c,t){var u=document.createEvent("Event");u.initEvent(c,!0,!0),u.altKey=t.altKey,u.ctrlKey=t.ctrlKey,u.metaKey=t.metaKey,u.shiftKey=t.shiftKey,u.touches=_(t),u.targetTouches=_(t),u.changedTouches=p(t),e.dispatchEvent(u)}function p(c){var t=s();return t.push(new o(e,1,c,0,0)),t}function _(c){return c.type==="mouseup"?s():p(c)}function x(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}x.multiTouchOffset=75,a||new x})();window.app=Z(Ve).use(w).component(S.name,S).component(R.name,R);setTimeout(()=>{window.app.mount("#app")},0);