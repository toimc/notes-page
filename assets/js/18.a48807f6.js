(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1195:function(t,a,e){"use strict";e.r(a);var s=e(34),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"发布上线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布上线"}},[t._v("#")]),t._v(" 发布上线")]),t._v(" "),s("h2",{attrs:{id:"分包机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包机制"}},[t._v("#")]),t._v(" 分包机制")]),t._v(" "),s("p",[t._v("某些情况下，开发者需要将小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(969),alt:"image-20210818000627795"}})]),t._v(" "),s("h3",{attrs:{id:"普通分包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通分包"}},[t._v("#")]),t._v(" 普通分包")]),t._v(" "),s("p",[t._v("在构建小程序分包项目时，构建会输出一个或多个分包。")]),t._v(" "),s("p",[t._v("每个使用分包小程序必定含有一个"),s("strong",[t._v("主包")]),t._v("。")]),t._v(" "),s("p",[t._v("所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而"),s("strong",[t._v("分包")]),t._v("则是根据开发者的配置进行划分。")]),t._v(" "),s("p",[t._v("在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。")]),t._v(" "),s("p",[t._v("目前小程序分包大小有以下限制：")]),t._v(" "),s("ul",[s("li",[t._v("整个小程序所有分包大小不超过 20M")]),t._v(" "),s("li",[t._v("单个分包/主包大小不能超过 2M")])]),t._v(" "),s("p",[t._v("对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。")]),t._v(" "),s("h3",{attrs:{id:"独立分包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#独立分包"}},[t._v("#")]),t._v(" 独立分包")]),t._v(" "),s("p",[t._v("独立分包是小程序中一种特殊类型的分包，可以独立于主包和其他分包运行。从独立分包中页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内页面时，主包才会被下载。")]),t._v(" "),s("p",[t._v("独立分包属于分包的一种，普通分包的所有限制都对独立分包有效（2M大小）。独立分包中插件、自定义组件的处理方式同普通分包。")]),t._v(" "),s("p",[t._v("此外，使用独立分包时要注意：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("独立分包中不能依赖主包和其他分包中的内容")]),t._v("，包括 js 文件、template、wxss、自定义组件、插件等。")])]),t._v(" "),s("li",[s("p",[t._v("主包中的 "),s("code",[t._v("app.wxss")]),t._v(" 对独立分包无效，应避免在独立分包页面中使用 "),s("code",[t._v("app.wxss")]),t._v(" 中的样式；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App")]),t._v(" 只能在主包内定义，独立分包中不能定义 "),s("code",[t._v("App")]),t._v("，会造成无法预期的行为；")]),t._v(" "),s("p",[t._v("与普通分包不同，独立分包运行时，"),s("code",[t._v("App")]),t._v(" 并不一定被注册，因此 "),s("code",[t._v("getApp()")]),t._v(" 也不一定可以获得 "),s("code",[t._v("App")]),t._v(" 对象；")])]),t._v(" "),s("li",[s("p",[t._v("独立分包中暂时不支持使用插件。")])]),t._v(" "),s("li",[s("p",[t._v("由于独立分包中无法定义 "),s("code",[t._v("App")]),t._v("，小程序生命周期的监听可以使用 "),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.onAppShow"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.onAppHide"),s("OutboundLink")],1),t._v(" 完成。")]),t._v(" "),s("p",[s("code",[t._v("App")]),t._v(" 上的其他事件可以使用 "),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.onError"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.onPageNotFound"),s("OutboundLink")],1),t._v(" 监听。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("应用场景：活动页面、登录注册相关页面...")]),t._v(" "),s("p",[t._v("大多数独立分包的场景，使用分包也可以很好的完成对应的功能，而且可以共享主包的样式。")])]),t._v(" "),s("h3",{attrs:{id:"分包预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包预加载"}},[t._v("#")]),t._v(" 分包预加载")]),t._v(" "),s("p",[t._v("开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。")]),t._v(" "),s("p",[t._v("预下载分包行为在进入某个页面时触发，通过在 "),s("code",[t._v("app.json")]),t._v(" 增加 "),s("code",[t._v("preloadRule")]),t._v(" 配置来控制。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"preloadRule"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"进入的页面"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"network"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"packages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"加载的包中的页面"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"或者加载整个目录"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sub1/index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"packages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sub3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sub3/index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"packages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"indep/index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"packages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__APP__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("preloadRule")]),t._v(" 中，"),s("code",[t._v("key")]),t._v(" 是页面路径，"),s("code",[t._v("value")]),t._v(" 是进入此页面的预下载配置，每个配置有以下几项：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("字段")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("packages")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("StringArray")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("进入页面后预下载分包的 "),s("code",[t._v("root")]),t._v(" 或 "),s("code",[t._v("name")]),t._v("。"),s("code",[t._v("__APP__")]),t._v(" 表示主包。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("network")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("wifi")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在指定网络下预下载，可选值为： "),s("code",[t._v("all")]),t._v(": 不限网络 "),s("code",[t._v("wifi")]),t._v(": 仅wifi下预下载")])])])]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("network")]),t._v("建议使用"),s("code",[t._v("all")]),t._v("；")]),t._v(" "),s("li",[t._v("所有预下载的分包的总体积要小于2m，限额会打包自动校验；")])]),t._v(" "),s("blockquote",[s("p",[t._v("不是必要，不是非常影响用户的交互体验，不要占用预下载分包的份额，不要使用大于40k的图片与资源。")])]),t._v(" "),s("h3",{attrs:{id:"检查分包大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查分包大小"}},[t._v("#")]),t._v(" 检查分包大小")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用HBuilder中的发布方式打包；")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(970),alt:"image-20210818001350889"}})]),t._v(" "),s("li",[s("p",[t._v("在详情中进行查看：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(971),alt:"image-20210818001509762"}}),t._v(" "),s("p",[t._v("点击查看详情，用于排查哪些比较大的资源：")]),t._v(" "),s("p",[s("img",{attrs:{src:e(972),alt:"image-20210818001614038"}})])])]),t._v(" "),s("h2",{attrs:{id:"基本流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本流程"}},[t._v("#")]),t._v(" 基本流程")]),t._v(" "),s("p",[s("img",{attrs:{src:e(973),alt:"img"}})]),t._v(" "),s("ul",[s("li",[t._v("测试-检查-打包-配置")]),t._v(" "),s("li",[t._v("在开发工具中上传")]),t._v(" "),s("li",[t._v("管理后台中，提交审核，通过后发布")])]),t._v(" "),s("h3",{attrs:{id:"成员说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成员说明"}},[t._v("#")]),t._v(" 成员说明")]),t._v(" "),s("p",[t._v("小程序成员管理包括对小程序项目成员及体验成员的管理。")]),t._v(" "),s("ul",[s("li",[t._v("项目成员：表示参与小程序开发、运营的成员，可登录小程序管理后台，包括运营者、开发者及数据分析者。管理员可在“成员管理”中添加、删除项目成员，并设置项目成员的角色。")]),t._v(" "),s("li",[t._v("体验成员：表示参与小程序内测体验的成员，可使用体验版小程序，但不属于项目成员。管理员及项目成员均可添加、删除体验成员。")])]),t._v(" "),s("p",[t._v("不同项目成员拥有不同的权限，从而保证小程序开发安全有序。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("权限")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("运营者")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("开发者")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("数据分析者")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("开发者权限")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("体验者权限")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("登录")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("数据分析")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("微信支付")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("推广")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("开发管理")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("开发设置")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("暂停服务")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("解除关联公众号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("腾讯云管理")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("小程序插件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("游戏运营管理")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("p",[t._v("配置路径：登录https://mp.weixin.qq.com/，选择管理 -> 成员管理 -> 添加项目成员，最多100个；体验成员->最多100个（已认证）；")]),t._v(" "),s("p",[s("img",{attrs:{src:e(974),alt:"image-20210818123401415"}})]),t._v(" "),s("h3",{attrs:{id:"版本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本说明"}},[t._v("#")]),t._v(" 版本说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("权限")])]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("开发版本")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("使用开发者工具，可将代码上传到开发版本中。 开发版本只保留每人最新的一份上传的代码。 点击提交审核，可将代码提交审核。开发版本可删除，不影响线上版本和审核中版本的代码。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("体验版本")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可以选择某个开发版本作为体验版，并且选取一份体验版。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("审核中版本")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("只能有一份代码处于审核中。有审核结果后可以发布到线上，也可直接重新提交审核，覆盖原审核版本。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("线上版本")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("线上所有用户使用的代码版本，该版本代码在新版本代码发布后被覆盖更新。")])])])]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("h3",{attrs:{id:"配置baseurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置baseurl"}},[t._v("#")]),t._v(" 配置BaseURL")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baseUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://192.168.31.132:3000'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://yourdomain.com'")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("uniapp内置的打包工具即是webpack")])]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("uniapp中，使用发布方式打包，即"),s("code",[t._v("process.env.NODE_ENV")]),t._v("会自动设置成"),s("code",[t._v("production")]),t._v("；")])]),t._v(" "),s("li",[s("p",[t._v("在上线之前，请确保配置了api后台项目，并申请了域名，配置好了HTTPS服务；")])]),t._v(" "),s("li",[s("p",[t._v("在小程序后台中，添加安全域名：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(975),alt:"image-20210818124432904"}})])]),t._v(" "),s("h3",{attrs:{id:"使用hbuilder生产打包方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用hbuilder生产打包方式"}},[t._v("#")]),t._v(" 使用HBuilder生产打包方式")]),t._v(" "),s("p",[t._v("一定要注意，在uniapp中开发的时候，启动的是调试进程，这时的代码中有很多调试代码，也未进行压缩。")]),t._v(" "),s("p",[t._v("步骤：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("打开项目的"),s("code",[t._v("pages.json")]),t._v("文件；")])]),t._v(" "),s("li",[s("p",[t._v("点击顶部的菜单："),s("code",[t._v("发行")]),t._v("-> "),s("code",[t._v("小程序-微信")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(976),alt:"image-20210818124620714"}})])]),t._v(" "),s("h2",{attrs:{id:"打包上线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包上线"}},[t._v("#")]),t._v(" 打包上线")]),t._v(" "),s("h3",{attrs:{id:"小程序打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序打包"}},[t._v("#")]),t._v(" 小程序打包")]),t._v(" "),s("p",[t._v("见 "),s("a",{attrs:{href:"#%E6%A3%80%E6%9F%A5%E5%88%86%E5%8C%85%E5%A4%A7%E5%B0%8F"}},[t._v("检查分包大小")]),t._v("，注意这里的项目名称并非小程序的项目名称。")]),t._v(" "),s("blockquote",[s("p",[t._v("小程序的名称在注册小程序的时候，就已经确定下来了，这里只是一个项目别名。")])]),t._v(" "),s("p",[t._v("请检查小程序的AppID。")]),t._v(" "),s("h3",{attrs:{id:"上传代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传代码"}},[t._v("#")]),t._v(" 上传代码")]),t._v(" "),s("p",[s("img",{attrs:{src:e(977),alt:"image-20210818123801710"}})]),t._v(" "),s("p",[t._v("上传代码是用于提交体验或者审核使用的。")]),t._v(" "),s("p",[t._v("点击开发者工具顶部操作栏的上传按钮，填写版本号以及项目备注，需要注意的是，这里版本号以及项目备注是为了方便管理员检查版本使用的，开发者可以根据自己的实际要求来填写这两个字段。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(978),alt:"image-20210818124047238"}}),t._v(" "),s("h2",{attrs:{id:"审核与发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审核与发布"}},[t._v("#")]),t._v(" 审核与发布")]),t._v(" "),s("h3",{attrs:{id:"审核版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审核版本"}},[t._v("#")]),t._v(" 审核版本")]),t._v(" "),s("p",[t._v("上传成功之后，登录"),s("a",{attrs:{href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序管理后台"),s("OutboundLink")],1),t._v(" - 开发管理 - 开发版本 就可以找到刚提交上传的版本了。")]),t._v(" "),s("p",[t._v("可以将这个版本设置 体验版 或者是 提交审核。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(979),alt:"image-20210818124719121"}})]),t._v(" "),s("p",[t._v("然后点击下一步：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(980),alt:"image-20210818124806867"}}),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("加急的情况：与用户的钱有关，与平台的稳定有关，与自身的利益有关，才加急——慎用；")]),t._v(" "),s("li",[t._v("上面一般要写一个注释，说明版本的升级情况；")])]),t._v(" "),s("p",[t._v("审核中：")]),t._v(" "),s("p",[s("img",{attrs:{src:e(981),alt:"image-20210818125910968"}})]),t._v(" "),s("h3",{attrs:{id:"关于灰度发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于灰度发布"}},[t._v("#")]),t._v(" 关于灰度发布")]),t._v(" "),s("p",[t._v("审核通过后，需要在页面中点击发布，选择全量发布或者指定用户进行发布（灰度测试）。")]),t._v(" "),s("p",[t._v("点击发布后，即可发布小程序。小程序提供了两种发布模式：全量发布和分阶段发布。全量发布是指当点击发布之后，所有用户访问小程序时都会使用当前最新的发布版本。")]),t._v(" "),s("p",[t._v("分阶段发布是指分不同时间段来控制部分用户使用最新的发布版本，分阶段发布我们也称为灰度发布。一般来说，普通小程序发布时采用全量发布即可，当小程序承载的功能越来越多，使用的用户数越来越多时，采用分阶段发布是一个非常好的控制风险的办法。")])])}),[],!1,null,null,null);a.default=v.exports},969:function(t,a,e){t.exports=e.p+"assets/img/image-20210818000627795.e1b5dd91.png"},970:function(t,a,e){t.exports=e.p+"assets/img/image-20210818001350889.871aa5b5.png"},971:function(t,a,e){t.exports=e.p+"assets/img/image-20210818001509762.26781f4c.png"},972:function(t,a,e){t.exports=e.p+"assets/img/image-20210818001614038.b58d4f6c.png"},973:function(t,a,e){t.exports=e.p+"assets/img/5.2.ac870e6c.ac870e6c.png"},974:function(t,a,e){t.exports=e.p+"assets/img/image-20210818123401415.973c514f.png"},975:function(t,a,e){t.exports=e.p+"assets/img/image-20210818124432904.4d5003c6.png"},976:function(t,a,e){t.exports=e.p+"assets/img/image-20210818124620714.aa9036c3.png"},977:function(t,a,e){t.exports=e.p+"assets/img/image-20210818123801710.34fb94d4.png"},978:function(t,a,e){t.exports=e.p+"assets/img/image-20210818124047238.169f3490.png"},979:function(t,a,e){t.exports=e.p+"assets/img/image-20210818124719121.d35f55fa.png"},980:function(t,a,e){t.exports=e.p+"assets/img/image-20210818124806867.cce75ad9.png"},981:function(t,a,e){t.exports=e.p+"assets/img/image-20210818125910968.f62dbdcc.png"}}]);