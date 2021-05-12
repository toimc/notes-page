(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{381:function(t,s,e){t.exports=e.p+"assets/img/front-end-notes.285b0b41.png"},382:function(t,s,e){t.exports=e.p+"assets/img/fork.237e4b0c.png"},383:function(t,s,e){t.exports=e.p+"assets/img/git-clone.068cfb9c.png"},384:function(t,s,e){t.exports=e.p+"assets/img/index.884d47cf.png"},385:function(t,s,e){t.exports=e.p+"assets/img/pull-request.0ec85cef.png"},386:function(t,s,e){t.exports=e.p+"assets/img/create-pull-request.7fcac903.png"},485:function(t,s,e){"use strict";e.r(s);var n=e(26),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"pull-request流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pull-request流程"}},[t._v("#")]),t._v(" Pull Request流程")]),t._v(" "),n("p",[t._v("本章节将从项目准备到内容创作到最后的提交PR，来指导大家如何正确提交PR，为项目贡献内容。")]),t._v(" "),n("h2",{attrs:{id:"项目准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目准备"}},[t._v("#")]),t._v(" 项目准备")]),t._v(" "),n("ol",[n("li",[t._v("打开"),n("a",{attrs:{href:"https://github.com/toimc-team",target:"_blank",rel:"noopener noreferrer"}},[t._v("toimc team的GitHub地址"),n("OutboundLink")],1),t._v("，登录你的GitHub账号，找到"),n("code",[t._v("front-end-notes")])])]),t._v(" "),n("p",[n("img",{attrs:{src:e(381),alt:"front-end-notes"}})]),t._v(" "),n("p",[t._v("进入项目，点击右上角的"),n("code",[t._v("Fork")]),t._v("到自己仓库。")]),t._v(" "),n("p",[n("img",{attrs:{src:e(382),alt:"fork"}})]),t._v(" "),n("p",[t._v("打开自己仓库里的"),n("code",[t._v("front-end-notes")]),t._v("，点击"),n("code",[t._v("Code")]),t._v("获得地址，")]),t._v(" "),n("p",[n("img",{attrs:{src:e(383),alt:"git clone"}})]),t._v(" "),n("p",[t._v("打开命令行，输入以下命令")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码，首次使用GitHub拉取代码需要输入GitHub的账号和密码")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 你复制的clone地址\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" front-end-notes\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装项目依赖")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待依赖安装完成，运行项目")]),t._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n\n")])])]),n("p",[t._v("等待项目启动完成，浏览器输入"),n("code",[t._v("localhost:8080")]),t._v("，即可访问项目。")]),t._v(" "),n("p",[n("img",{attrs:{src:e(384),alt:"index"}})]),t._v(" "),n("h2",{attrs:{id:"内容创作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容创作"}},[t._v("#")]),t._v(" 内容创作")]),t._v(" "),n("p",[t._v("参与内容创作前，你需要先了解"),n("RouterLink",{attrs:{to:"/course/vuepress/"}},[t._v("VuePress")]),t._v("以及"),n("a",{attrs:{href:"https://toimc-team.github.io/notes-page/course/vuepress/#md%E8%BD%AF%E4%BB%B6%E4%B8%8B%E8%BD%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora相关的配置"),n("OutboundLink")],1),t._v("。")],1),t._v(" "),n("p",[t._v("做完以上配置后，你需要了解大前端电子书开源项目的文档"),n("RouterLink",{attrs:{to:"/course/notes/01-编写规范.html"}},[t._v("编写规范")]),t._v("。")],1),t._v(" "),n("p",[t._v("使用Vscode或WebStorm打开项目，按照"),n("a",{attrs:{href:"https://toimc-team.github.io/notes-page/course/notes/#%E8%B4%A1%E7%8C%AE%E6%B5%81%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("贡献流程"),n("OutboundLink")],1),t._v("在项目中添加或修改内容，完成内容创作后，接下来就可以准备提交PR啦。")]),t._v(" "),n("h2",{attrs:{id:"提交pr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交pr"}},[t._v("#")]),t._v(" 提交PR")]),t._v(" "),n("p",[t._v("在提交PR前，我希望同学们先了解以下三个文档：")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/course/notes/"}},[t._v("贡献规范")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/course/vuepress/02-commit规范.html"}},[t._v("Commit 规范")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/course/vuepress/03-PR规范.html"}},[t._v("Pull Request规范")])],1)]),t._v(" "),n("p",[t._v("打开命令行，关联upstream原仓库，")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/toimc-team/front-end-notes.git\n")])])]),n("p",[t._v("内容创作完成后，执行下面的命令，")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全量提交")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or 提交某个文件")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 文件名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit，添加commit信息")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# push推送到fork远程仓库")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),n("p",[t._v("完成推送后，打开大前端电子书项目GitHub地址，选择"),n("code",[t._v("Pull requests")]),t._v("，点击"),n("code",[t._v("New pull request")]),t._v("。\n"),n("img",{attrs:{src:e(385),alt:"pull-request"}})]),t._v(" "),n("p",[t._v("按照规范填写title及备注信息，点击"),n("code",[t._v("Create pull request")]),t._v("即可完成提交。\n"),n("img",{attrs:{src:e(386),alt:"create-pull-request"}})]),t._v(" "),n("p",[t._v("最后等待审核者审核即可。")])])}),[],!1,null,null,null);s.default=a.exports}}]);