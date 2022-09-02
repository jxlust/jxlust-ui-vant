import{o as c,a as i,d as l,u as r}from"./vue-libs.cca4001e.js";const y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(a){if(a.ep)return;a.ep=!0;const d=e(a);fetch(a.href,d)}};y();var ls=(t,s)=>{const e=t.__vccOpts||t;for(const[n,a]of s)e[n]=a;return e};const x="modulepreload",u={},w="/site-dist/",ds=function(s,e){return!e||e.length===0?s():Promise.all(e.map(n=>{if(n=`${w}${n}`,n in u)return;u[n]=!0;const a=n.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${d}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":x,a||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),a)return new Promise((_,b)=>{o.addEventListener("load",_),o.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>s())},q={class:"van-doc-markdown-body"},k=l("h1",null,"\u4ECB\u7ECD",-1),S=l("div",{class:"van-doc-card"},[l("h3",{id:"guan-yu",tabindex:"-1"},"\u5173\u4E8E"),l("p",null,"\u8FD9\u662F\u4E00\u6BB5\u7EC4\u4EF6\u5E93\u7684\u4ECB\u7ECD")],-1),E=l("div",{class:"van-doc-card"},[l("h3",{id:"te-xing",tabindex:"-1"},"\u7279\u6027"),l("ul",null,[l("li",null,"\u7279\u6027\u4E00"),l("li",null,"\u7279\u6027\u4E8C"),l("li",null,"\u7279\u6027\u4E09")])],-1),$=[k,S,E],R={__name:"home",setup(t,{expose:s}){return s({frontmatter:{}}),(n,a)=>(c(),i("div",q,$))}},L={class:"van-doc-markdown-body"},C=r(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><div class="van-doc-card"><h3 id="an-zhuang" tabindex="-1">\u5B89\u88C5</h3><pre><code class="language-bash"><span class="hljs-comment"># \u901A\u8FC7 npm</span>
npm i <span class="hljs-built_in">test</span>

<span class="hljs-comment"># \u901A\u8FC7 yarn</span>
yarn add <span class="hljs-built_in">test</span>

<span class="hljs-comment"># \u901A\u8FC7 pnpm</span>
pnpm add <span class="hljs-built_in">test</span>
</code></pre></div>`,2),A=[C],I={__name:"quickstart",setup(t,{expose:s}){return s({frontmatter:{}}),(n,a)=>(c(),i("div",L,A))}},D={class:"van-doc-markdown-body"},P=r(`<h1>DemoButton \u6309\u94AE</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>DemoButton \u662F\u4E00\u4E2A\u793A\u4F8B\u6309\u94AE\u7EC4\u4EF6</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DemoButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;jxlust-ui-vant&#39;</span>;

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DemoButton</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">demo-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B</td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td>color <code>1.0.0</code></td><td>\u6309\u94AE\u989C\u8272</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table></div>`,9),T=[P],B={__name:"README",setup(t,{expose:s}){return s({frontmatter:{}}),(n,a)=>(c(),i("div",D,T))}},U={class:"van-doc-markdown-body"},M=r(`<h1>Internationalization</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Vant uses Chinese as the default language. If you want to use other languages, please follow the instructions below.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="switch-languages" tabindex="-1">Switch languages</h3><p>Vant supports multiple languages with the Locale component, and the <code>Locale.use</code> method allows you to switch to different languages.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Locale</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant/es/locale/lang/en-US&#39;</span>;

<span class="hljs-title class_">Locale</span>.<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;en-US&#39;</span>, enUS);
</code></pre></div><div class="van-doc-card"><h3 id="override-default-configs" tabindex="-1">Override default configs</h3><p>Use <code>Locale.add</code> method to modify the default configs.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Locale</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> messages = {
  <span class="hljs-string">&#39;en-US&#39;</span>: {
    <span class="hljs-attr">vanPicker</span>: {
      <span class="hljs-attr">confirm</span>: <span class="hljs-string">&#39;Close&#39;</span>,
    },
  },
};

<span class="hljs-title class_">Locale</span>.<span class="hljs-title function_">add</span>(messages);
</code></pre></div><div class="van-doc-card"><h3 id="config-files" tabindex="-1">Config files</h3><p>Current supported languages:</p><table><thead><tr><th>Language</th><th>Filename</th><th>Version</th></tr></thead><tbody><tr><td>Bulgarian</td><td>bg-BG</td><td><code>v3.5.0</code></td></tr><tr><td>Bangla (Bangladesh)</td><td>bn-BD</td><td><code>v3.4.5</code></td></tr><tr><td>Danish</td><td>da-DK</td><td><code>v3.4.8</code></td></tr><tr><td>German</td><td>de-DE</td><td>-</td></tr><tr><td>German (formal)</td><td>de-DE-formal</td><td>-</td></tr><tr><td>Greek</td><td>el-GR</td><td><code>v3.5.0</code></td></tr><tr><td>English</td><td>en-US</td><td>-</td></tr><tr><td>Spanish (Spain)</td><td>es-ES</td><td>-</td></tr><tr><td>Farsi</td><td>fa-IR</td><td><code>v3.5.0</code></td></tr><tr><td>French</td><td>fr-FR</td><td>-</td></tr><tr><td>Hebrew</td><td>he-IL</td><td><code>v3.5.0</code></td></tr><tr><td>Hindi</td><td>hi-IN</td><td><code>v3.4.3</code></td></tr><tr><td>Indonesian</td><td>id-ID</td><td><code>v3.4.5</code></td></tr><tr><td>Icelandic</td><td>is-IS</td><td><code>v3.4.7</code></td></tr><tr><td>Italian</td><td>it-IT</td><td><code>v3.4.5</code></td></tr><tr><td>Japanese</td><td>ja-JP</td><td>-</td></tr><tr><td>Korean</td><td>ko-KR</td><td><code>v3.4.3</code></td></tr><tr><td>Lao</td><td>la-LA</td><td><code>v3.4.7</code></td></tr><tr><td>Norwegian</td><td>nb-NO</td><td>-</td></tr><tr><td>Portuguese (Brazil)</td><td>pt-BR</td><td><code>v3.3.3</code></td></tr><tr><td>Romanian</td><td>ro-RO</td><td>-</td></tr><tr><td>Russian</td><td>ru-RU</td><td><code>v3.1.5</code></td></tr><tr><td>Swedish</td><td>sv-SE</td><td><code>v3.4.7</code></td></tr><tr><td>Turkish</td><td>tr-TR</td><td>-</td></tr><tr><td>Thai</td><td>th-TH</td><td>-</td></tr><tr><td>Ukrainian</td><td>uk-UA</td><td><code>v3.4.5</code></td></tr><tr><td>Vietnamese</td><td>vi-VN</td><td><code>v3.4.5</code></td></tr><tr><td>Chinese</td><td>zh-CN</td><td>-</td></tr><tr><td>Traditional Chinese (HK)</td><td>zh-HK</td><td>-</td></tr><tr><td>Traditional Chinese (TW)</td><td>zh-TW</td><td>-</td></tr></tbody></table><blockquote><p>View all language configs <a href="https://github.com/vant-ui/vant/tree/dev/packages/vant/src/locale/lang" target="_blank">Here</a>.</p></blockquote></div><div class="van-doc-card"><h3 id="add-new-language" tabindex="-1">Add new language</h3><p>If you can\u2019t find the language you need, please send us a Pull Request to add the new language pack, you can refer to <a href="https://github.com/vant-ui/vant/pull/7245" target="_blank">Add German language pack</a> PR.</p></div>`,7),N=[M],z={__name:"README",setup(t,{expose:s}){return s({frontmatter:{}}),(n,a)=>(c(),i("div",U,N))}},V={class:"van-doc-markdown-body"},H=l("h1",null,"tttt",-1),O=[H],K={__name:"README",setup(t,{expose:s}){return s({frontmatter:{}}),(n,a)=>(c(),i("div",V,O))}},F={class:"van-doc-markdown-body"},G=r(`<h1>Built-in Style</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>jxlt contains some common styles that can be used directly by the className.</p></div><div class="van-doc-card"><h3 id="text-ellipsis" tabindex="-1">Text ellipsis</h3><p>When the text content length exceeds the maximum container width, the excess text is automatically omitted.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-ellipsis&quot;</span>&gt;</span>
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-multi-ellipsis--l2&quot;</span>&gt;</span>
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-multi-ellipsis--l3&quot;</span>&gt;</span>
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hairline" tabindex="-1">Hairline</h3><p>Add 1px border under the Retina screen for the element, based on a pseudo element.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- border top --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-hairline--top&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border bottom --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-hairline--bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border left --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-hairline--left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border right --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-hairline--right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border top &amp; bottom --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-hairline--top-bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- full border --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-hairline--surround&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="safe-area" tabindex="-1">Safe Area</h3><p>Enable safe area.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- top --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-safe-area-top&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- bottom --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;jxl-safe-area-bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="animation" tabindex="-1">Animation</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- fade in  --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;jxl-fade&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Fade<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide up --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;jxl-slide-up&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Up<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide down --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;jxl-slide-down&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Down<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide left --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;jxl-slide-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Left<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide right --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;jxl-slide-right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Right<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
</code></pre></div>`,6),W=[G],Z={__name:"README",setup(t,{expose:s}){return s({frontmatter:{}}),(n,a)=>(c(),i("div",F,W))}},J={class:"van-doc-markdown-body"},Q=l("h1",null,"TriggerInput \u6587\u672C\u6846",-1),Y=l("div",{class:"van-doc-card"},[l("h3",{id:"jie-shao",tabindex:"-1"},"\u4ECB\u7ECD"),l("p",null,"\u5173\u952E\u5B57\u89E6\u53D1\u5BF9\u5E94 popview,\u9009\u62E9\u6216\u8005\u64CD\u4F5C")],-1),X=[Q,Y],ss={__name:"README",setup(t,{expose:s}){return s({frontmatter:{}}),(n,a)=>(c(),i("div",J,X))}},g={name:"jxlust-ui",build:{css:{base:"style/base.scss",preprocessor:"sass"},site:{publicPath:"site-dist"},packageManager:"pnpm"},site:{title:"jxlust-ui",logo:"https://xxxxxx/assets/logo.png",nav:[{title:"\u5F00\u53D1\u6307\u5357",items:[{path:"home",title:"\u4ECB\u7ECD"},{path:"quickstart",title:"\u5FEB\u901F\u4E0A\u624B"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"demo-button",title:"DemoButton \u6309\u94AE"},{path:"my-text",title:"text \u6587\u672C\u5C55\u793A"},{path:"trigger-input",title:"\u89E6\u53D1\u6587\u672C\u6846"},{path:"style",title:"Built-in style"}]}]}},os={Home:R,Quickstart:I,DemoButton:B,Locale:z,MyText:K,Style:Z,TriggerInput:ss},cs="0.0.1",ts=navigator.userAgent.toLowerCase(),is=/ios|iphone|ipod|ipad|android/.test(ts);function ps(t,s="-"){return t.replace(/([a-z\d])([A-Z])/g,"$1"+s+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+s+"$2").toLowerCase()}function rs(t){const s=document.createElement("textarea");s.value=t,s.setAttribute("readonly",""),s.style.position="absolute",s.style.left="-9999px",document.body.appendChild(s);const e=document.getSelection();if(!e)return;const n=e.rangeCount>0?e.getRangeAt(0):!1;s.select(),document.execCommand("copy"),document.body.removeChild(s),n&&(e.removeAllRanges(),e.addRange(n))}const m="zh-CN",as="en-US",j="vant-cli-lang";let p=m;function hs(){return p}function us(t){p=t,localStorage.setItem(j,t)}function gs(t){const s=localStorage.getItem(j);if(s){p=s;return}if(navigator.language&&navigator.language.indexOf("zh-")!==-1){p=m;return}p=t||as}let h=[],v=!1;function ns(t){v?t():h.push(t)}window.top===window?window.addEventListener("message",t=>{t.data.type==="iframeReady"&&(v=!0,h.forEach(s=>s()),h=[])}):window.top.postMessage({type:"iframeReady"},"*");function f(){var e,n;const t=window.vueRouter,{path:s}=t.currentRoute.value;return(e=g.site.simulator)!=null&&e.routeMapper?(n=g.site.simulator)==null?void 0:n.routeMapper(s):s}function ms(){window.top.postMessage({type:"replacePath",value:f()},"*")}function js(){const t=document.querySelector("iframe");t&&ns(()=>{t.contentWindow.postMessage({type:"replacePath",value:f()},"*")})}function vs(t){window.addEventListener("message",s=>{var n,a;if(((n=s.data)==null?void 0:n.type)!=="replacePath")return;const e=((a=s.data)==null?void 0:a.value)||"";t.currentRoute.value.path!==e&&t.replace(e).catch(()=>{})})}export{ls as _,ds as a,g as b,rs as c,gs as d,os as e,js as f,ps as g,hs as h,is as i,ms as j,vs as l,cs as p,us as s};