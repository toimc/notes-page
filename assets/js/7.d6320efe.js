(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{430:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));n(55),n(86),n(434),n(439),n(228),n(85),n(126),n(127),n(38),n(131),n(219);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function c(t){return s.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(c(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return a.test(r)?t:r+".html"+n}function p(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function d(t,e,n){if(c(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:h(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var r=n.pages,a=n.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return m(t);var o=s.sidebar||a.sidebar;if(o){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=c.base,u=c.config;return"auto"===u?m(t):u?u.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function m(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},440:function(t,e,n){},443:function(t,e,n){},447:function(t,e,n){},448:function(t,e,n){},449:function(t,e,n){},450:function(t,e,n){},451:function(t,e,n){},453:function(t,e,n){},454:function(t,e,n){},455:function(t,e,n){},456:function(t,e,n){},457:function(t,e,n){},458:function(t,e,n){},471:function(t,e,n){"use strict";n.r(e);n(123);var i=n(430),r={name:"SidebarGroup",components:{DropdownTransition:n(472).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(471).default},methods:{isActive:i.e}},a=(n(493),n(34)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(494),n(85);function o(t,e,n,i,r){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(a.style={"padding-left":r+"rem"}),t("RouterLink",a,n)}function c(t,e,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l,e.level-1),c(t,e.children,n,r,a,s+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,l=n.$themeLocaleConfig,u=e.props,h=u.item,p=u.sidebarDepth,d=Object(i.e)(a,h.path),f="auto"===h.type?d||h.children.some((function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)})):d,m="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),g=[r.frontmatter.sidebarDepth,p,l.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),v=l.displayAllHeaders||s.displayAllHeaders;return"auto"===h.type?[m,c(t,h.children,h.basePath,a,g)]:(f||v)&&h.headers&&!i.d.test(h.path)?[m,c(t,Object(i.c)(h.headers),h.path,a,g)]:m}};n(495);function u(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),r=e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||r}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(a.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},472:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(485),n(34)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},476:function(t,e,n){"use strict";n(440)},480:function(t,e,n){"use strict";n(443)},484:function(t,e,n){"use strict";n(447)},485:function(t,e,n){"use strict";n(448)},486:function(t,e,n){"use strict";n(449)},487:function(t,e,n){"use strict";n(450)},488:function(t,e,n){"use strict";n(451)},489:function(t,e,n){"use strict";n(453)},491:function(t,e,n){"use strict";n(454)},492:function(t,e,n){"use strict";n(455)},493:function(t,e,n){"use strict";n(456)},495:function(t,e,n){"use strict";n(457)},496:function(t,e,n){"use strict";n(458)},842:function(t,e,n){"use strict";n.r(e);var i=n(431),r=n(23),a=(n(56),n(473),n(123),n(125),n(430)),s={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(a.g)(this.link)||Object(a.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(a.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(a.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},o=n(34),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,l={name:"Home",components:{NavLink:c},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(476),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),h=(n(435),n(120));n(13),n(16),n(21),n(441),n(55),n(86),n(85);var p={name:"AlgoliaSearchBox",props:["options"],watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang)},methods:{getRelativePath:function(t){var e=new URL(t),n=e.pathname,i=e.hash;return n.replace(this.$site.base,"/")+i},initialize:function(t,e){var i=this;Promise.all([Promise.all([n.e(0),n.e(3)]).then(n.bind(null,838)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,839,7))]).then((function(e){var n=Object(h.a)(e,1)[0];(n=n.default)(Object.assign({placeholder:i.$site.themeConfig.searchPlaceholder},t,{container:"#docsearch",searchParameters:Object.assign({},t.searchParameters),navigator:{navigate:function(t){var e=t.suggestionUrl,n=new URL(window.location.origin+e).pathname;i.$router.history.current.path===n?window.location.assign(window.location.origin+e):i.$router.push(e)}},transformItems:function(t){return t.map((function(t){return Object.assign({},t,{url:i.getRelativePath(t.url)})}))},hitComponent:function(t){var e=t.hit,n=t.children;return{type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:e.url,onClick:function(t){if(!function(t){return 1===t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}(t)&&i.$router.history.current.fullPath!==e.url){var n=new URL(window.location.origin+e.url).pathname;i.$router.history.current.path!==n&&t.preventDefault(),i.$router.push(e.url)}},children:n}}}}))}))},update:function(t,e){this.$el.innerHTML='<div id="docsearch"></div>',this.initialize(t,e)}}},d=(n(480),Object(o.a)(p,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"docsearch"}})}),[],!1,null,null,null).exports),f=n(836),m=(n(484),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),g=n(53),v=(n(235),n(434),n(444),n(445),n(472)),b=n(237),k=n.n(b),_={name:"DropdownLink",components:{NavLink:c,DropdownTransition:v.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return k()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},$=(n(486),Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports),C=n(89),x={name:"NavLinks",components:{NavLink:c,DropdownLink:$},mounted:function(){},computed:Object(i.a)(Object(i.a)(Object(i.a)({},Object(C.e)(["userInfo"])),Object(C.c)(["isLogin"])),{},{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var s,o=e[a],c=r[a]&&r[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===s}))||(s=a)),{text:c,link:s}}))};return[].concat(Object(g.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}),methods:Object(i.a)(Object(i.a)({},Object(C.d)(["setToken","setRefreshToken","setUserInfo"])),{},{quit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$confirm("您已登录，需要退出吗");case 3:e.sent&&(t.setUserInfo({}),t.setToken(""),t.setRefreshToken(""),sessionStorage.clear()),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}})},L=(n(487),Object(o.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n      "+t._s(t.repoLabel)+"\n      "),n("OutboundLink")],1):t._e(),t._v(" "),t.isLogin?n("div",{staticClass:"nav-item",on:{click:function(e){return t.quit()}}},[t._v("\n      "+t._s(t.userInfo.name)+"\n    ")]):n("div",{staticClass:"nav-item"},[n("div",{staticClass:"btn login",on:{click:function(e){return t.$store.commit("setCodeShow",!0)}}},[t._v("\n        快速登录\n      ")])])],2):t._e()])}),[],!1,null,null,null).exports);function O(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var w={name:"Navbar",components:{SidebarButton:m,NavLinks:L,SearchBox:f.a,AlgoliaSearchBox:d},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(O(this.$el,"paddingLeft"))+parseInt(O(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},y=(n(488),Object(o.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),j=(n(437),n(452)),S=n.n(j),I={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=S()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,a=e.docsBranch,s=void 0===a?"master":a,o=e.docsRepo,c=void 0===o?n:o;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,r,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(a.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r:(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r}}},T=(n(489),Object(o.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),A=n(490),N=n.n(A),P={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return E(R.PREV,this)},next:function(){return E(R.NEXT,this)}}};var R={NEXT:{resolveLink:function(t,e){return U(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return U(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function E(t,e){var n=e.$themeConfig,i=e.$page,r=e.$route,s=e.$site,o=e.sidebarItems,c=t.resolveLink,l=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=l(n),p=u(i),d=S()(p)?h:p;if(!1!==d)return N()(d)?Object(a.k)(s.pages,d,r.path):c(i,o)}function U(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var D=P,H=(n(491),Object(o.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),B=n(121),G={components:{PageEdit:T,PageNav:H},props:["sidebarItems"],data:function(){return{isAuth:!1,needCheck:!1,show:!1,dialogVisible:!1,form:{coupon:""},rules:{coupon:[{validator:function(t,e,n){""!==e.trim()&&/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(e)?n():n(Error("输入的格式有误，请检查!"))},trigger:"change"}]}}},updated:function(){this.check()},computed:Object(i.a)({},Object(C.e)(["token"])),watch:{token:function(t){t||(this.isAuth=!1)}},methods:Object(i.a)(Object(i.a)({},Object(C.b)(["getAuth"])),{},{submitForm:function(){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var i,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return e.next=3,Object(B.a)({code:t.form.coupon});case 3:i=e.sent,r=i.code,a=i.msg,200===r?(t.$message({message:"兑换成功，马上为您跳转",type:"success"}),t.dialogVisible=!1,t.check(!0)):t.$alert(a||"请求失败，请稍后重试");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},confirmLogin:function(t,e){this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e&&e()})).catch((function(){}))},check:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var i,r,a,s,o,c,l,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(i=t.length>0&&void 0!==t[0]&&t[0])||e.token){n.next=4;break}return e.confirmLogin("您没有访问权限，请登录",(function(){e.$store.commit("setCodeShow",!0)})),n.abrupt("return");case 4:return r=e.$page,a=r.path,s=r.frontmatter,o=s.auth,e.needCheck=o||!1,n.prev=7,n.next=10,e.getAuth({path:a,frontmatter:s});case 10:c=n.sent,l=c.code,u=c.data,200===l&&"{}"!==JSON.stringify(u)?e.isAuth=u.all:(e.isAuth=!1,i&&e.confirmLogin("您未获得授权，兑换成为VIP继续阅读",(function(){e.dialogVisible=!0}))),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(7),i&&e.confirmLogin("您没有访问权限，请登录",(function(){e.$store.commit("setCodeShow",!0)}));case 19:case"end":return n.stop()}}),n,null,[[7,16]])})))()}})},W=(n(492),Object(o.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),t.isAuth?n("Content",{staticClass:"theme-custom-content",attrs:{"slot-key":"auth"}}):!t.isAuth&&t.needCheck?n("NoAuth",{on:{click:function(e){return t.check(!0)}}}):t._e(),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom"),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible,width:"420px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":"60px"}},[n("el-form-item",{attrs:{label:"兑换码",prop:"coupon"}},[n("el-input",{attrs:{placeholder:"请输入兑换码进行兑换..."},model:{value:t.form.coupon,callback:function(e){t.$set(t.form,"coupon",e)},expression:"form.coupon"}})],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)],2)}),[],!1,null,null,null).exports),V={name:"Sidebar",components:{SidebarLinks:n(471).default,NavLinks:L},props:["items"]},M=(n(496),Object(o.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),F=n(81),z={name:"Layout",components:{Home:u,Page:W,Sidebar:M,Navbar:y},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$router.afterEach((function(){t.isSidebarOpen=!1})),(n=F.b.getItem("userInfo"))&&t.setUserInfo(JSON.parse(n)),i=t.$route.query,r=i.token,a=i.refreshToken,r&&t.setToken(r),a&&t.setRefreshToken(a),e.next=8,t.getUserInfo();case 8:case"end":return e.stop()}}),e)})))()},methods:Object(i.a)(Object(i.a)(Object(i.a)({},Object(C.d)(["setToken","setRefreshToken","setUserInfo"])),Object(C.b)(["getUserInfo"])),{},{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}})},q=Object(o.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),n("ClientOnly",[n("AuthQrCode")],1)],1)}),[],!1,null,null,null);e.default=q.exports}}]);