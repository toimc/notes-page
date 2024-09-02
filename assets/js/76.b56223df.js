(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1066:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"点击劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[a("strong",[t._v("点击劫持")]),t._v("（clickjacking）是一种在网页中将恶意代码等隐藏在看似无害的内容（如按钮）之下，并诱使用户点击的手段。")]),t._v(" "),a("p",[a("strong",[t._v("原理")])]),t._v(" "),a("p",[t._v("我们以 baidu 为例，解释点击劫持是如何完成的：")]),t._v(" "),a("ol",[a("li",[t._v("访问者被恶意页面吸引。怎样吸引的不重要。")]),t._v(" "),a("li",[t._v("页面上有一个看起来无害的链接（例如：“变得富有”或者“点我，看美女！”）。")]),t._v(" "),a("li",[t._v("恶意页面在该链接上方放置了一个透明的 "),a("code",[t._v("<iframe>")]),t._v("，其 "),a("code",[t._v("src")]),t._v(" 来自于 baidu.com，这使得“搜索”按钮恰好位于该链接上面。这通常是通过 "),a("code",[t._v("z-index")]),t._v(" 实现的。")]),t._v(" "),a("li",[t._v("用户尝试点击该链接时，实际上点击的是“搜索”按钮。")])]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("p",[t._v("这是恶意页面看起来的样子。为了清楚起见，我们将 "),a("code",[t._v("<iframe>")]),t._v(" 设置成了半透明的（在真正的恶意页面中，它是全透明的）：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("iframe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 来自受害网站的 iframe */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("-20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 在实际中为 opacity:0 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点击即可变得富有："),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 来自受害网站的 url --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/clickjacking/baidu.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点这里，看美女！"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Cool guy！"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:s(502),alt:"image-20211202175330775"}})]),t._v(" "),a("p",[t._v("在上面这个示例中，我们有一个半透明的 "),a("code",[t._v('<iframe src="facebook.html">')]),t._v("，我们可以看到，它位于按钮之上。点击按钮实际上会点击在 iframe 上，但这对用户不可见，因为 iframe 是透明的。")]),t._v(" "),a("p",[t._v("结果，如果访问者登陆了 Facebook（“记住我”通常是打开的），那么这个行为就会点一个“赞”。Twitter 上是 “Follow” 按钮。")]),t._v(" "),a("p",[t._v("下面是相同的示例，但 "),a("code",[t._v("iframe")]),t._v(" 的透明度设置为了 "),a("code",[t._v("opacity:0")]),t._v("，更符合实际情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:s(503),alt:"image-20211202175407959"}})]),t._v(" "),a("p",[t._v("我们进行攻击所需要做的 —— 就是将 "),a("code",[t._v("<iframe>")]),t._v(" 放置在恶意页面中，使得按钮恰好位于链接的正上方。这样当用户点击链接时，他们实际上点击的是按钮。这通常可以通过 CSS 实现。")]),t._v(" "),a("h2",{attrs:{id:"预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[t._v("#")]),t._v(" 预防")]),t._v(" "),a("h3",{attrs:{id:"方法一-传统防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-传统防御"}},[t._v("#")]),t._v(" "),a("strong",[t._v("方法一：传统防御")])]),t._v(" "),a("p",[t._v("最古老的防御措施是一段用于禁止在 frame 中打开页面的 JavaScript 代码（所谓的 “framebusting”）。")]),t._v(" "),a("p",[t._v("它看起来像这样：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("意思是说：如果 window 发现它不在顶部，那么它将自动使其自身位于顶部。")]),t._v(" "),a("p",[t._v("这个方法并不可靠，因为有许多方式可以绕过这个限制。下面我们就介绍几个。")]),t._v(" "),a("h3",{attrs:{id:"方法二-阻止顶级导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-阻止顶级导航"}},[t._v("#")]),t._v(" "),a("strong",[t._v("方法二：阻止顶级导航")])]),t._v(" "),a("p",[t._v("我们可以阻止因更改beforeunload事件处理程序中的 "),a("code",[t._v("top.location")]),t._v(" 而引起的过渡（transition）。")]),t._v(" "),a("p",[t._v("顶级页面（从属于黑客）在 "),a("code",[t._v("beforeunload")]),t._v(" 上设置了一个用于阻止的处理程序，像这样：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onbeforeunload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当 "),a("code",[t._v("iframe")]),t._v(" 试图更改 "),a("code",[t._v("top.location")]),t._v(" 时，访问者会收到一条消息，询问他们是否要离开页面。")]),t._v(" "),a("p",[t._v("在大多数情况下，访问者会做出否定的回答，因为他们并不知道还有这么一个 iframe，他们所看到的只有顶级页面，他们没有理由离开。所以 "),a("code",[t._v("top.location")]),t._v(" 不会变化！")]),t._v(" "),a("h3",{attrs:{id:"方法三-sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法三-sandbox"}},[t._v("#")]),t._v(" "),a("strong",[t._v("方法三：sandbox")])]),t._v(" "),a("p",[a("code",[t._v("sandbox")]),t._v(" 特性的限制之一就是导航。沙箱化的 iframe 不能更改 "),a("code",[t._v("top.location")]),t._v("。")]),t._v(" "),a("p",[t._v("但我们可以添加具有 "),a("code",[t._v('sandbox="allow-scripts allow-forms"')]),t._v(" 的 iframe。从而放开限制，允许脚本和表单。但我们没添加 "),a("code",[t._v("allow-top-navigation")]),t._v("，因此更改 "),a("code",[t._v("top.location")]),t._v(" 是被禁止的。")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-markup extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markup"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sandbox")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("allow-scripts allow-forms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("facebook.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("还有其他方式可以绕过这个弱鸡防御。")]),t._v(" "),a("h3",{attrs:{id:"方法四-x-frame-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法四-x-frame-options"}},[t._v("#")]),t._v(" "),a("strong",[t._v("方法四：X-Frame-Options")])]),t._v(" "),a("p",[t._v("服务器端 header "),a("code",[t._v("X-Frame-Options")]),t._v(" 可以允许或禁止在 frame 中显示页面。")]),t._v(" "),a("p",[t._v("它必须被完全作为 HTTP-header 发送：如果浏览器在 HTML "),a("code",[t._v("<meta>")]),t._v(" 标签中找到它，则会忽略它。因此，"),a("code",[t._v('<meta http-equiv="X-Frame-Options"...>')]),t._v(" 没有任何作用。")]),t._v(" "),a("p",[t._v("这个 header 可能包含 3 个值：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("DENY")])]),t._v(" "),a("p",[t._v("始终禁止在 frame 中显示此页面。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("SAMEORIGIN")])]),t._v(" "),a("p",[t._v("允许在和父文档同源的 frame 中显示此页面。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ALLOW-FROM domain")])]),t._v(" "),a("p",[t._v("允许在来自给定域的父文档的 frame 中显示此页面。")])])]),t._v(" "),a("p",[t._v("例如，Twitter 使用的是 "),a("code",[t._v("X-Frame-Options: SAMEORIGIN")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"方法五-显示禁用的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法五-显示禁用的功能"}},[t._v("#")]),t._v(" "),a("strong",[t._v("方法五：显示禁用的功能")])]),t._v(" "),a("p",[a("code",[t._v("X-Frame-Options")]),t._v(" 有一个副作用。其他的网站即使有充分的理由也无法在 frame 中显示我们的页面。")]),t._v(" "),a("p",[t._v("因此，还有其他解决方案……例如，我们可以用一个样式为 "),a("code",[t._v("height: 100%; width: 100%;")]),t._v(" 的 "),a("code",[t._v("<div>")]),t._v(" “覆盖”页面，这样它就能拦截所有点击。如果 "),a("code",[t._v("window == top")]),t._v(" 或者我们确定不需要保护时，再将该 "),a("code",[t._v("<div>")]),t._v(" 移除。")]),t._v(" "),a("p",[t._v("像这样：")]),t._v(" "),a("div",{staticClass:"language-markup extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markup"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#protector")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 99999999"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("protector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_blank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("前往网站"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果顶级窗口来自其他源，这里则会出现一个 error")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是在本例中没有问题")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    protector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"方法六-samesite-cookie-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法六-samesite-cookie-特性"}},[t._v("#")]),t._v(" "),a("strong",[t._v("方法六：Samesite cookie 特性")])]),t._v(" "),a("p",[a("code",[t._v("samesite")]),t._v(" cookie 特性也可以阻止点击劫持攻击。")]),t._v(" "),a("p",[t._v("具有 "),a("code",[t._v("samesite")]),t._v(" 特性的 cookie 仅在网站是通过直接方式打开（而不是通过 frame 或其他方式）的情况下才发送到网站。")]),t._v(" "),a("p",[t._v("如果网站，例如 Facebook，在其身份验证 cookie 中具有 "),a("code",[t._v("samesite")]),t._v(" 特性，像这样：")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("authorization=secret; samesite")])]),t._v("\n")])])]),a("p",[t._v("……那么，当在另一个网站中的 iframe 中打开 Facebook 时，此类 cookie 将不会被发送。因此，攻击将失败。")]),t._v(" "),a("p",[t._v("当不使用 cookie 时，"),a("code",[t._v("samesite")]),t._v(" cookie 特性将不会有任何影响。这可以使其他网站能够轻松地在 iframe 中显示我们公开的、未进行身份验证的页面。")]),t._v(" "),a("p",[t._v("然而，这也可能会使得劫持攻击在少数情况下起作用。例如，通过检查 IP 地址来防止重复投票的匿名投票网站仍然会受到点击劫持的攻击，因为它不使用 cookie 对用户身份进行验证。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("点击劫持是一种“诱骗”用户在不知情的情况下点击恶意网站的方式。如果是重要的点击操作，这是非常危险的。")]),t._v(" "),a("p",[t._v("黑客可以通过信息发布指向他的恶意页面的链接，或者通过某些手段引诱访问者访问他的页面。当然还有很多其他变体。")]),t._v(" "),a("p",[t._v("一方面 —— 这种攻击方式是“浅层”的：黑客所做的只是拦截一次点击。但另一方面，如果黑客知道在点击之后将出现另一个控件，则他们可能还会使用狡猾的消息来迫使用户也点击它们。")]),t._v(" "),a("p",[t._v("这种攻击相当危险，因为在设计交互界面时，我们通常不会考虑到可能会有黑客代表用户点击界面。所以，在许多意想不到的地方可能发现攻击漏洞。")]),t._v(" "),a("ul",[a("li",[t._v("建议在那些不希望被在 frame 中查看的页面上（或整个网站上）使用 "),a("code",[t._v("X-Frame-Options: SAMEORIGIN")]),t._v("。")]),t._v(" "),a("li",[t._v("如果我们希望允许在 frame 中显示我们的页面，那我们使用一个 "),a("code",[t._v("<div>")]),t._v(" 对整个页面进行遮盖，这样也是安全的。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zh.javascript.info/clickjacking",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击劫持攻击"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports},502:function(t,a,s){t.exports=s.p+"assets/img/image-20211202175330775.d390c85c.png"},503:function(t,a,s){t.exports=s.p+"assets/img/image-20211202175407959.0b7ea2fb.png"}}]);