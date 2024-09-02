(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1022:function(t,e,n){"use strict";n.r(e);var i=n(336),s={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=n(11),r=Object(a.a)(s,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:r},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(367),Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,i){return e("div",{key:i,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports);n(339),n(138);var c={name:"AlgoliaSearchBox",props:["options"],watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang)},methods:{getRelativePath(t){const{pathname:e,hash:n}=new URL(t);return e.replace(this.$site.base,"/")+n},initialize(t,e){Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.bind(null,1018)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,1019,7))]).then(([e])=>{(e=e.default)(Object.assign({placeholder:this.$site.themeConfig.searchPlaceholder},t,{container:"#docsearch",searchParameters:Object.assign({},t.searchParameters),navigator:{navigate:({suggestionUrl:t})=>{const{pathname:e}=new URL(window.location.origin+t);this.$router.history.current.path===e?window.location.assign(window.location.origin+t):this.$router.push(t)}},transformItems:t=>t.map(t=>Object.assign({},t,{url:this.getRelativePath(t.url)})),hitComponent:({hit:t,children:e})=>({type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:t.url,onClick:e=>{if(function(t){return 1===t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}(e))return;if(this.$router.history.current.fullPath===t.url)return;const{pathname:n}=new URL(window.location.origin+t.url);this.$router.history.current.path!==n&&e.preventDefault(),this.$router.push(t.url)},children:e}})}))})},update(t,e){this.$el.innerHTML='<div id="docsearch"></div>',this.initialize(t,e)}}},u=(n(368),Object(a.a)(c,(function(){return(0,this._self._c)("div",{attrs:{id:"docsearch"}})}),[],!1,null,null,null).exports),h=n(150),p=n.n(h),d=(t,e,n=null)=>{let i=p()(e,"title","");return p()(e,"frontmatter.tags")&&(i+=" "+e.frontmatter.tags.join(" ")),n&&(i+=" "+n),f(t,i)};const f=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),i=new RegExp("[^\0-]"),s=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(i.test(t))return s.some(t=>e.toLowerCase().indexOf(t)>-1);{const i=t.endsWith(" ");return new RegExp(s.map((t,e)=>s.length!==e+1||i?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var g={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,s=[];for(let a=0;a<e.length&&!(s.length>=n);a++){const r=e[a];if(this.getPageLocalePath(r)===i&&this.isSearchable(r))if(d(t,r))s.push(r);else if(r.headers)for(let e=0;e<r.headers.length&&!(s.length>=n);e++){const n=r.headers[e];n.title&&d(t,r,n.title)&&s.push(Object.assign({},r,{path:r.path+"#"+n.slug,header:n}))}}return s},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},m=(n(369),Object(a.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,i){return e("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),b=(n(370),Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=n(366),k=n(151),_=n.n(k),C={name:"DropdownLink",components:{NavLink:r,DropdownTransition:v.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>_()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},x=(n(372),Object(a.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports),$=n(39),y={name:"NavLinks",components:{NavLink:r,DropdownLink:x},mounted(){},computed:{...Object($.e)(["userInfo"]),...Object($.c)(["isLogin"]),userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(s=>{const a=t[s],r=i[s]&&i[s].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,s),n.some(t=>t.path===o)||(o=s)),{text:r,link:o}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}},methods:{...Object($.d)(["setToken","setRefreshToken","setUserInfo"]),async quit(){try{await this.$confirm("您已登录，需要退出吗")&&(this.setUserInfo({}),this.setToken(""),this.setRefreshToken(""),sessionStorage.clear())}catch(t){}}}},L=(n(373),Object(a.a)(y,(function(){var t=this,e=t._self._c;return e("ClientOnly",[t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n      "+t._s(t.repoLabel)+"\n      "),e("OutboundLink")],1):t._e(),t._v(" "),t.isLogin?e("div",{staticClass:"nav-item",on:{click:function(e){return t.quit()}}},[t._v("\n      "+t._s(t.userInfo.name)+"\n    ")]):e("div",{staticClass:"nav-item"},[e("div",{staticClass:"btn login",on:{click:function(e){return t.$store.commit("setCodeShow",!0)}}},[t._v("\n        快速登录\n      ")])])],2):t._e()])}),[],!1,null,null,null).exports);function w(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var O={name:"Navbar",components:{SidebarButton:b,NavLinks:L,SearchBox:m,AlgoliaSearchBox:u},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(w(this.$el,"paddingLeft"))+parseInt(w(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},S=(n(374),Object(a.a)(O,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),I=(n(146),n(349)),j=n.n(I),T={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=j()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:i="master",docsRepo:s=e}=this.$site.themeConfig;return t&&s&&this.$page.relativePath?this.createEditLink(e,s,n,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,s,a){if(/bitbucket.org/.test(e)){return e.replace(i.a,"")+"/src"+`/${s}/`+(n?n.replace(i.a,"")+"/":"")+a+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(i.a,"")+"/-/edit"+`/${s}/`+(n?n.replace(i.a,"")+"/":"")+a}return(i.i.test(e)?e:"https://github.com/"+e).replace(i.a,"")+"/edit"+`/${s}/`+(n?n.replace(i.a,"")+"/":"")+a}}},A=(n(375),Object(a.a)(T,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),P=n(376),N=n.n(P),U={name:"PageNav",props:["sidebarItems"],computed:{prev(){return D(R.PREV,this)},next(){return D(R.NEXT,this)}}};const R={NEXT:{resolveLink:function(t,e){return E(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return E(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function D(t,{$themeConfig:e,$page:n,$route:s,$site:a,sidebarItems:r}){const{resolveLink:o,getThemeLinkConfig:l,getPageLinkConfig:c}=t,u=l(e),h=c(n),p=j()(h)?u:h;if(!1!==p)return N()(p)?Object(i.k)(a.pages,p,s.path):o(n,r)}function E(t,e,n){const i=[];!function t(e,n){for(let i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const s=i[e];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[e+n]}}var H=U,B=(n(377),Object(a.a)(H,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),G=n(70),W={components:{PageEdit:A,PageNav:B},props:["sidebarItems"],data:()=>({isAuth:!1,needCheck:!1,show:!1,dialogVisible:!1,form:{coupon:""},rules:{coupon:[{validator:(t,e,n)=>{""!==e.trim()&&/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(e)?n():n(Error("输入的格式有误，请检查!"))},trigger:"change"}]}}),updated(){this.check()},computed:{...Object($.e)(["token"])},watch:{token(t){t||(this.isAuth=!1)}},methods:{...Object($.b)(["getAuth"]),submitForm(){this.$refs.ruleForm.validate(async t=>{if(t){const{code:t,msg:e}=await Object(G.a)({code:this.form.coupon});200===t?(this.$message({message:"兑换成功，马上为您跳转",type:"success"}),this.dialogVisible=!1,this.check(!0)):this.$alert(e||"请求失败，请稍后重试")}})},confirmLogin(t,e){this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{e&&e()}).catch(()=>{})},async check(t=!1){if(t&&!this.token)return void this.confirmLogin("您没有访问权限，请登录",()=>{this.$store.commit("setCodeShow",!0)});const{path:e,frontmatter:n}=this.$page,{auth:i}=n;this.needCheck=i||!1;try{const{code:i,data:s}=await this.getAuth({path:e,frontmatter:n});200===i&&"{}"!==JSON.stringify(s)?this.isAuth=s.all:(this.isAuth=!1,t&&this.confirmLogin("您未获得授权，兑换成为VIP继续阅读",()=>{this.dialogVisible=!0}))}catch(e){t&&this.confirmLogin("您没有访问权限，请登录",()=>{this.$store.commit("setCodeShow",!0)})}}}},V=(n(378),Object(a.a)(W,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),t.isAuth?e("Content",{staticClass:"theme-custom-content",attrs:{"slot-key":"auth"}}):!t.isAuth&&t.needCheck?e("NoAuth",{on:{click:function(e){return t.check(!0)}}}):t._e(),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom"),t._v(" "),e("el-dialog",{attrs:{visible:t.dialogVisible,width:"420px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":"60px"}},[e("el-form-item",{attrs:{label:"兑换码",prop:"coupon"}},[e("el-input",{attrs:{placeholder:"请输入兑换码进行兑换..."},model:{value:t.form.coupon,callback:function(e){t.$set(t.form,"coupon",e)},expression:"form.coupon"}})],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)],2)}),[],!1,null,null,null).exports),M={name:"Sidebar",components:{SidebarLinks:n(365).default,NavLinks:L},props:["items"]},q=(n(381),Object(a.a)(M,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),z=n(33),F={name:"Layout",components:{Home:l,Page:V,Sidebar:q,Navbar:S},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},async mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1});const t=z.b.getItem("userInfo");t&&this.setUserInfo(JSON.parse(t));const{token:e,refreshToken:n}=this.$route.query;e&&this.setToken(e),n&&this.setRefreshToken(n),await this.getUserInfo()},methods:{...Object($.d)(["setToken","setRefreshToken","setUserInfo"]),...Object($.b)(["getUserInfo"]),toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},K=Object(a.a)(F,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),e("ClientOnly",[e("AuthQrCode")],1)],1)}),[],!1,null,null,null);e.default=K.exports},336:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return b}));n(138);const i=/#.*$/,s=/\.(md|html)$/,a=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+n}function p(t,e){const n=decodeURIComponent(t.hash),s=function(t){const e=t.match(i);if(e)return e[0]}(e);if(s&&n!==s)return!1;return o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,n,i){const{pages:s,themeConfig:a}=n,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return g(t);const o=r.sidebar||a.sidebar;if(o){const{base:n,config:i}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return"auto"===i?g(t):i?i.map(t=>function t(e,n,i,s=1){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});{const a=e.children||[];return 0===a.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map(e=>t(e,n,i,s+1)),collapsable:!1!==e.collapsable}}}(t,s,n)):[]}return[]}function g(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},338:function(t,e,n){var i=n(139),s=n(20);t.exports=function(t,e,n){return n.get&&i(n.get,e,{getter:!0}),n.set&&i(n.set,e,{setter:!0}),s.f(t,e,n)}},339:function(t,e,n){"use strict";var i=n(7),s=n(3),a=n(338),r=URLSearchParams.prototype,o=s(r.forEach);i&&!("size"in r)&&a(r,"size",{get:function(){var t=0;return o(this,(function(){t++})),t},configurable:!0,enumerable:!0})},341:function(t,e,n){},342:function(t,e,n){},343:function(t,e,n){},344:function(t,e,n){},345:function(t,e,n){},346:function(t,e,n){},347:function(t,e,n){},348:function(t,e,n){},349:function(t,e){t.exports=function(t){return null==t}},350:function(t,e,n){},351:function(t,e,n){},352:function(t,e,n){},353:function(t,e,n){},354:function(t,e,n){},355:function(t,e,n){},365:function(t,e,n){"use strict";n.r(e);var i=n(336),s={name:"SidebarGroup",components:{DropdownTransition:n(366).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(365).default},methods:{isActive:i.e}},a=(n(379),n(11)),r=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,n,i,s){const a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return s>2&&(a.style={"padding-left":s+"rem"}),t("RouterLink",a,n)}function l(t,e,n,s,a,r=1){return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,s,a,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:s,$themeConfig:a,$themeLocaleConfig:r},props:{item:c,sidebarDepth:u}}){const h=Object(i.e)(s,c.path),p="auto"===c.type?h||c.children.some(t=>Object(i.e)(s,c.basePath+"#"+t.slug)):h,d="external"===c.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,c.path,c.title||c.path):o(t,c.path,c.title||c.path,p),f=[e.frontmatter.sidebarDepth,u,r.sidebarDepth,a.sidebarDepth,1].find(t=>void 0!==t),g=r.displayAllHeaders||a.displayAllHeaders;if("auto"===c.type)return[d,l(t,c.children,c.basePath,s,f)];if((p||g)&&c.headers&&!i.d.test(c.path)){return[d,l(t,Object(i.c)(c.headers),c.path,s,f)]}return d}};n(380);function u(t,e){if("group"===e.type){const n=e.path&&Object(i.e)(t,e.path),s=e.children.some(e=>"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path));return n||s}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(a.a)(h,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,i){return e("li",{key:i},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:i===t.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},366:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},s=(n(371),n(11)),a=Object(s.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},367:function(t,e,n){"use strict";n(341)},368:function(t,e,n){"use strict";n(342)},369:function(t,e,n){"use strict";n(343)},370:function(t,e,n){"use strict";n(344)},371:function(t,e,n){"use strict";n(345)},372:function(t,e,n){"use strict";n(346)},373:function(t,e,n){"use strict";n(347)},374:function(t,e,n){"use strict";n(348)},375:function(t,e,n){"use strict";n(350)},376:function(t,e,n){var i=n(18),s=n(8),a=n(16);t.exports=function(t){return"string"==typeof t||!s(t)&&a(t)&&"[object String]"==i(t)}},377:function(t,e,n){"use strict";n(351)},378:function(t,e,n){"use strict";n(352)},379:function(t,e,n){"use strict";n(353)},380:function(t,e,n){"use strict";n(354)},381:function(t,e,n){"use strict";n(355)}}]);