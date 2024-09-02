(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1040:function(e,a,s){"use strict";s.r(a);var t=s(11),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"homebrew-macos包管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-macos包管理工具"}},[e._v("#")]),e._v(" homebrew(macOS包管理工具)")]),e._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),a("p",[a("code",[e._v("Homebrew")]),e._v("是一款包管理工具，目前支持"),a("code",[e._v("macOS")]),e._v("和"),a("code",[e._v("Linux")]),e._v("系统。主要有四个部分组成: "),a("code",[e._v("brew")]),e._v("、"),a("code",[e._v("homebrew-core")]),e._v(" 、"),a("code",[e._v("homebrew-cask")]),e._v("、"),a("code",[e._v("homebrew-bottles")]),e._v("。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("名称")]),e._v(" "),a("th",[e._v("说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("brew")]),e._v(" "),a("td",[e._v("Homebrew 源代码仓库")])]),e._v(" "),a("tr",[a("td",[e._v("homebrew-core")]),e._v(" "),a("td",[e._v("Homebrew 核心源")])]),e._v(" "),a("tr",[a("td",[e._v("homebrew-cask")]),e._v(" "),a("td",[e._v("提供 macOS 应用和大型二进制文件的安装")])]),e._v(" "),a("tr",[a("td",[e._v("homebrew-bottles")]),e._v(" "),a("td",[e._v("预编译二进制软件包")])])])]),e._v(" "),a("p",[e._v("brew官网："),a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://brew.sh/"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"brew安装-卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brew安装-卸载"}},[e._v("#")]),e._v(" brew安装&卸载")]),e._v(" "),a("p",[e._v("推荐安装脚本")]),e._v(" "),a("p",[e._v("项目地址1："),a("a",{attrs:{href:"https://gitee.com/cunkai/HomebrewCN",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitee.com/cunkai/HomebrewCN"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("项目地址2："),a("a",{attrs:{href:"https://brew.idayer.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://brew.idayer.com/"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("p",[e._v("苹果电脑标准安装脚本：（推荐 优点全面 缺点慢一点）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"\n')])])]),a("p",[e._v("苹果电脑极速安装脚本：（优点安装速度快 缺点update功能需要命令修复 ）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed\n')])])]),a("p",[e._v("Linux 标准安装脚本：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh\n")])])]),a("h3",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[e._v("#")]),e._v(" 卸载")]),e._v(" "),a("p",[e._v("苹果电脑卸载脚本：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"\n')])])]),a("p",[e._v("Linux卸载脚本：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh\n")])])]),a("h2",{attrs:{id:"brew使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brew使用"}},[e._v("#")]),e._v(" brew使用")]),e._v(" "),a("h2",{attrs:{id:"手动设置镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动设置镜像"}},[e._v("#")]),e._v(" 手动设置镜像")]),e._v(" "),a("h3",{attrs:{id:"中科大源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中科大源"}},[e._v("#")]),e._v(" 中科大源")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://mirrors.ustc.edu.cn/brew.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),e._v(" homebrew/core"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),e._v(" homebrew/cask"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git\n\nbrew update\n")])])]),a("h3",{attrs:{id:"清华大学源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清华大学源"}},[e._v("#")]),e._v(" 清华大学源")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),e._v(" homebrew/core"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),e._v(" homebrew/cask"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git\n\nbrew update\n")])])]),a("h3",{attrs:{id:"设置-bottles-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-bottles-镜像"}},[e._v("#")]),e._v(" 设置 bottles 镜像")]),e._v(" "),a("p",[e._v("设置环境变量需要注意终端的类型，可以先通过以下方式获取：")]),e._v(" "),a("p",[e._v("执行命令"),a("code",[e._v("echo $SHELL")]),e._v("，根据结果判断：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("/bin/zsh")]),e._v(" => "),a("code",[e._v("zsh")]),e._v(" => "),a("code",[e._v(".zprofile")])]),e._v(" "),a("li",[a("code",[e._v("/bin/bash")]),e._v(" => "),a("code",[e._v("bash")]),e._v(" => "),a("code",[e._v(".bash_profile")])])]),e._v(" "),a("p",[e._v("然后继续正式操作，以"),a("strong",[e._v("中科大源")]),e._v("为例：")]),e._v(" "),a("p",[e._v("从"),a("code",[e._v("macOS Catalina")]),e._v("(10.15.x) 版开始，"),a("code",[e._v("Mac")]),e._v("使用"),a("code",[e._v("zsh")]),e._v("作为默认"),a("code",[e._v("Shell")]),e._v("，对应文件是"),a("code",[e._v(".zprofile")]),e._v("，所以命令为：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/bottles'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.zprofile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" ~/.zprofile\n")])])]),a("p",[e._v("如果是"),a("code",[e._v("macOS Mojave")]),e._v(" 及更低版本，并且没有自己配置过"),a("code",[e._v("zsh")]),e._v("，对应文件则是"),a("code",[e._v(".bash_profile")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/bottles'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" ~/.bash_profile\n")])])]),a("blockquote",[a("p",[e._v("注意：上述区别仅仅是"),a("code",[e._v(".zprofile")]),e._v("和"),a("code",[e._v(".bash_profile")]),e._v("不同，上下文如有再次提及编辑"),a("code",[e._v(".zprofile")]),e._v("，均按此方法判断具体操作的文件。")])]),e._v(" "),a("p",[e._v("至此，安装和设置操作都完成了。")]),e._v(" "),a("h3",{attrs:{id:"恢复默认源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复默认源"}},[e._v("#")]),e._v(" 恢复默认源")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://github.com/Homebrew/brew.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),e._v(" homebrew/core"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://github.com/Homebrew/homebrew-core.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-C")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--repo")]),e._v(" homebrew/cask"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" remote set-url origin https://github.com/Homebrew/homebrew-cask.git\n\nbrew update\n")])])]),a("p",[a("code",[e._v("homebrew-bottles")]),e._v("配置只能手动删除，将 "),a("code",[e._v("~/.zprofile")]),e._v(" 文件中的 "),a("code",[e._v("HOMEBREW_BOTTLE_DOMAIN=https://mirrors.xxx.com")]),e._v("内容删除，并执行 "),a("code",[e._v("source ~/.zprofile")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"cask相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cask相关"}},[e._v("#")]),e._v(" cask相关")]),e._v(" "),a("p",[e._v("目前"),a("code",[e._v("cask")]),e._v("是从"),a("code",[e._v("GitHub")]),e._v("上读取软件源，而"),a("code",[e._v("GitHub Api")]),e._v("对访问有限制，如果使用比较频繁的话，可以申请"),a("code",[e._v("Api Token")]),e._v("，然后在环境变量中配置到"),a("code",[e._v("HOMEBREW_GITHUB_API_TOKEN")]),e._v("。")]),e._v(" "),a("p",[e._v("在"),a("code",[e._v(".zprofile")]),e._v("中追加，注意替换"),a("code",[e._v("yourtoken")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export HOMEBREW_GITHUB_API_TOKEN=yourtoken'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.zprofile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" ~/.zprofile\n")])])]),a("p",[e._v("注意：因为"),a("code",[e._v("cask")]),e._v("是从"),a("code",[e._v("GitHub")]),e._v("下载软件，所以目前是无法加速的。")])])}),[],!1,null,null,null);a.default=r.exports}}]);