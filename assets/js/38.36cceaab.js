(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{543:function(t,e,s){t.exports=s.p+"assets/img/image-20210730134531546.2c58a2a5.png"},544:function(t,e,s){t.exports=s.p+"assets/img/20210324155532109.41af86c2.png"},545:function(t,e,s){t.exports=s.p+"assets/img/20210324155546563.7d26e8cb.png"},546:function(t,e,s){t.exports=s.p+"assets/img/image-20210730134650240.dc2f93d3.png"},547:function(t,e,s){t.exports=s.p+"assets/img/20210324160013818.f1ac911f.png"},991:function(t,e,s){"use strict";s.r(e);var a=s(10),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[t._v("#")]),t._v(" 权限管理")]),t._v(" "),e("p",[t._v("权限管理的作用是给用户分配权限，方便多用户协作。")]),t._v(" "),e("p",[t._v("首先我们来安装以下插件帮助我们管理安全配置：")]),t._v(" "),e("ul",[e("li",[t._v("PAM Authentication plugin")]),t._v(" "),e("li",[t._v("Matrix Authorization Strategy Plugin 对应下面的安全矩阵 -> 需要安装插件"),e("a",{attrs:{href:"https://plugins.jenkins.io/matrix-auth/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jenkins.io/matrix-auth/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Role-based Authorization Strategy(推荐) -> 需要安装插件"),e("a",{attrs:{href:"https://plugins.jenkins.io/role-strategy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jenkins.io/role-strategy/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("LDAP Plugin")])]),t._v(" "),e("p",[t._v("安装完成重启Jenkins后生效。")]),t._v(" "),e("h2",{attrs:{id:"基于角色安全管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于角色安全管理"}},[t._v("#")]),t._v(" 基于角色安全管理")]),t._v(" "),e("p",[t._v("使用步骤：")]),t._v(" "),e("ul",[e("li",[t._v("安装Role-based插件")]),t._v(" "),e("li",[t._v("在系统安全中，设置插件激活状态")]),t._v(" "),e("li",[t._v("配置角色 -> 配置权限")]),t._v(" "),e("li",[t._v("分配角色权限到用户")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(543),alt:"image-20210730134531546"}})]),t._v(" "),e("p",[t._v("点击[系统管理] > [安全] > [全局安全配置] > [授权策略]，选择 "),e("code",[t._v("Role-Based Strategy")]),t._v("，然后保存，再回退到[系统管理] > [安全]，可以看到多出了一个菜单：")]),t._v(" "),e("img",{staticStyle:{width:"900px"},attrs:{src:s(544),alt:"角色安全"}}),t._v(" "),e("img",{staticStyle:{width:"900px"},attrs:{src:s(545),alt:"角色安全"}}),t._v(" "),e("p",[t._v("如下，创建了一个三个角色：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Annoymous")]),t._v("：未登录用户")]),t._v(" "),e("li",[e("code",[t._v("dev")]),t._v("：开发用户")]),t._v(" "),e("li",[e("code",[t._v("admin")]),t._v("：管理员用户")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(546),alt:"image-20210730134650240"}})]),t._v(" "),e("blockquote",[e("p",[t._v("开发与设置小技巧：可以开一个chrome和另一个浏览器，使用两边登录不同的账号进行测试角色与权限的设置；")])]),t._v(" "),e("h2",{attrs:{id:"基于安全矩阵"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于安全矩阵"}},[t._v("#")]),t._v(" 基于安全矩阵")]),t._v(" "),e("p",[t._v("在[授权策略]中选择"),e("code",[t._v("安全矩阵")]),t._v("，这个是基于用户的权限配置，这里需要注意的是需要吧管理员添加进来，如果没有添加是没有权限做任何事的，切记！！！")]),t._v(" "),e("p",[e("img",{attrs:{src:s(547),alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);