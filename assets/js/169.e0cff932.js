(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1055:function(e,t,r){"use strict";r.r(t);var i=r(11),a=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器篇"}},[e._v("#")]),e._v(" 浏览器篇")]),e._v(" "),t("h2",{attrs:{id:"_1-一个页面从输入url到页面加载显示完成-这个过程中都发生了什么-中级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-一个页面从输入url到页面加载显示完成-这个过程中都发生了什么-中级"}},[e._v("#")]),e._v(" 1. 一个页面从输入URL到页面加载显示完成，这个过程中都发生了什么？（中级）")]),e._v(" "),t("p",[e._v("分为4个步骤：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("当发送一个URL请求时，不管这个URL是Web页面的URL还是Web页面上每个资源的URL，浏览器都会开启一个线程来处理这个请求，同时在远程DNS服务器上启动一个DNS查询。这能使浏览器获得请求对应的IP地址。")])]),e._v(" "),t("li",[t("p",[e._v("浏览器与远程 Web 服务器通过 TCP 三次握手协商来建立一个 TCP/IP 连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报文在浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。")])]),e._v(" "),t("li",[t("p",[e._v("一旦 TCP/IP 连接建立，浏览器会通过该连接向远程服务器发送 HTTP 的 GET 请求。远程服务器找到资源并使用HTTP响应返回该资源，值为200的HTTP响应状态表示一个正确的响应。")])]),e._v(" "),t("li",[t("p",[e._v("此时， Web 服务器提供资源服务，客户端开始下载资源。请求返回后，便进入了我们关注的前端模块简单来说，浏览器会解析 HTML 生成 DOM Tree ，其次会根据CSS生成CSS Rule Tree，而 javascript 又可以根据 DOM API 操作 DOM")])])]),e._v(" "),t("h2",{attrs:{id:"_2-ie各版本和chrome可以并行下载多少个资源-初级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-ie各版本和chrome可以并行下载多少个资源-初级"}},[e._v("#")]),e._v(" 2. ie各版本和chrome可以并行下载多少个资源（初级）")]),e._v(" "),t("p",[e._v("IE6 两个并发，iE7升级之后的6个并发，之后版本也是6个\nFirefox，chrome也是6个")]),e._v(" "),t("h2",{attrs:{id:"_3-列举ie与其他浏览器不一样的特性-中级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-列举ie与其他浏览器不一样的特性-中级"}},[e._v("#")]),e._v(" 3. 列举IE与其他浏览器不一样的特性？（中级）")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("IE支持currentStyle，FIrefox使用getComputStyle")])]),e._v(" "),t("li",[t("p",[e._v("IE 使用innerText，Firefox使用textContent")])]),e._v(" "),t("li",[t("p",[e._v("滤镜方面：IE:filter:alpha(opacity= num)；Firefox：-moz-opacity:num")])]),e._v(" "),t("li",[t("p",[e._v("事件方面：IE：attachEvent：火狐是addEventListener")])]),e._v(" "),t("li",[t("p",[e._v("鼠标位置：IE是event.clientX；火狐是event.pageX")])]),e._v(" "),t("li",[t("p",[e._v("IE使用event.srcElement；Firefox使用event.target")])]),e._v(" "),t("li",[t("p",[e._v("IE中消除list的原点仅需margin:0即可达到最终效果；FIrefox需要设置margin:0;padding:0以及list")])]),e._v(" "),t("li",[t("p",[e._v("style:none")])]),e._v(" "),t("li",[t("p",[e._v("CSS圆角：ie7以下不支持圆角")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);