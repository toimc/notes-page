(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1069:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原生应用通知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生应用通知"}},[t._v("#")]),t._v(" 原生应用通知")]),t._v(" "),s("p",[t._v("对于渲染进程，Electron 方便地允许开发者使用 "),s("a",{attrs:{href:"https://notifications.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 通知 API"),s("OutboundLink")],1),t._v(" 发送通知，然后使用当前运行中的系统的原生通知 API 来进行显示。")]),t._v(" "),s("p",[t._v("要在主进程中显示通知，您需要使用 "),s("a",{attrs:{href:"https://www.electronjs.org/zh/docs/latest/api/notification",target:"_blank",rel:"noopener noreferrer"}},[t._v("Notification"),s("OutboundLink")],1),t._v(" 模块。")]),t._v(" "),s("h2",{attrs:{id:"弹出通知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹出通知"}},[t._v("#")]),t._v(" 弹出通知")]),t._v(" "),s("h3",{attrs:{id:"渲染进程中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程中"}},[t._v("#")]),t._v(" 渲染进程中")]),t._v(" "),s("p",[t._v("官方示例渲染进程中设置通知，修改"),s("code",[t._v("renderer.js")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOTIFICATION_TITLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Title'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOTIFICATION_BODY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Notification from the Renderer process. Click to log to console.'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLICK_MESSAGE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Notification clicked!'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Notification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOTIFICATION_TITLE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOTIFICATION_BODY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLICK_MESSAGE")]),t._v("\n")])])]),s("h3",{attrs:{id:"主进程中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主进程中"}},[t._v("#")]),t._v(" 主进程中")]),t._v(" "),s("p",[t._v("给扫码登录的用户加入扫码登录成功的通知：")]),t._v(" "),s("p",[t._v("修改文件"),s("code",[t._v("pacakges/main/src/index.ts")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Notification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'登录成功'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'登录时间'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dayjs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-10-01'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD hh:mm:ss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("silent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置系统通知声音为静音")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("详细代码见"),s("RouterLink",{attrs:{to:"/project/community-electron/04-第三方登录扫码登录.html"}},[t._v("第三方登录扫码登录")])],1),t._v(" "),s("p",[t._v("官方文档："),s("a",{attrs:{href:"https://www.electronjs.org/zh/docs/latest/tutorial/notifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.electronjs.org/zh/docs/latest/tutorial/notifications"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"通知声音"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通知声音"}},[t._v("#")]),t._v(" 通知声音")]),t._v(" "),s("p",[t._v("如何定制消息通知的声音？")]),t._v(" "),s("p",[t._v("思路：通过Notification的options设置表单，同时通过 "),s("code",[t._v("show()")]),t._v(" 方法回调的时候进行声音的播放。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("new Notification([options])")]),t._v("其中的options选项：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("title")]),t._v(" String (可选) - 通知的标题，将在通知窗口的顶部显示。")]),t._v(" "),s("li",[s("code",[t._v("subtitle")]),t._v("String (可选) 通知的副标题, 显示在标题下面。 "),s("em",[t._v("macOS")])]),t._v(" "),s("li",[s("code",[t._v("body")]),t._v(" String (可选) - 通知的正文文本，将显示在标题或副标题下面。")]),t._v(" "),s("li",[s("code",[t._v("silent")]),t._v("Boolean (可选) "),s("strong",[t._v("在显示通知时是否发出系统提示音。")])]),t._v(" "),s("li",[s("code",[t._v("icon")]),t._v("(String | "),s("a",{attrs:{href:"https://www.electronjs.org/zh/docs/latest/api/native-image",target:"_blank",rel:"noopener noreferrer"}},[t._v("NativeImage "),s("OutboundLink")],1),t._v(") (可选) 用于在该通知上显示的图标。")]),t._v(" "),s("li",[s("code",[t._v("hasReply")]),t._v("Boolean (可选) 是否在通知中添加一个答复选项。 "),s("em",[t._v("macOS")])]),t._v(" "),s("li",[s("code",[t._v("timeoutType")]),t._v(" String (可选) "),s("em",[t._v("Linux")]),t._v(" "),s("em",[t._v("Windows")]),t._v(" - 通知的超时持续时间 可以是 'default' 或 'never'.")]),t._v(" "),s("li",[s("code",[t._v("replyPlaceholder")]),t._v("String (可选) 答复输入框中的占位符。 "),s("em",[t._v("macOS")])]),t._v(" "),s("li",[s("code",[t._v("sound")]),t._v("String (可选) 显示通知时播放的声音文件的名称。 "),s("em",[t._v("macOS")])]),t._v(" "),s("li",[s("code",[t._v("urgency")]),t._v(" String (可选) "),s("em",[t._v("Linux")]),t._v(" - 通知的紧急级别。 可以是 'normal', 'critical', 或者 'low'")]),t._v(" "),s("li",[s("code",[t._v("actions")]),t._v(" [NotificationAction"),s("a",{attrs:{href:"https://www.electronjs.org/zh/docs/latest/api/structures/notification-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("]"),s("OutboundLink")],1),t._v(" (可选) "),s("em",[t._v("macOS")]),t._v(" - 要添加到通知中的操作 请阅读 "),s("code",[t._v("NotificationAction")]),t._v("文档来了解可用的操作和限制。")]),t._v(" "),s("li",[s("code",[t._v("closeButtonText")]),t._v(" String (可选) "),s("em",[t._v("macOS")]),t._v(" - 自定义关闭按钮提示内容。 空字符串将替换为默认的本地化文本。")]),t._v(" "),s("li",[s("code",[t._v("toastXml")]),t._v(" String (可选) "),s("em",[t._v("Windows")]),t._v(" - 自定义的窗口通知描述可取代上面所有属性。 提供完全自定义的设计和通知行为。")])])]),t._v(" "),s("p",[t._v("在Electron播放声音需要借助到第三方插件"),s("code",[t._v("sound-play")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install sound"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("play\n\nor\n\nyarn add sound"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("play\n")])])]),s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sound "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sound-play"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file.mp3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置声音大小")]),t._v("\nvolume "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file.mp3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" volume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在使用的时候，需要注意音频文件的路径")]),t._v("\ninstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'show'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test.wav'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);