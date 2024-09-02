(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1054:function(t,a,v){"use strict";v.r(a);var _=v(11),s=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"复制集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制集"}},[t._v("#")]),t._v(" 复制集")]),t._v(" "),a("h2",{attrs:{id:"复制集的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制集的作用"}},[t._v("#")]),t._v(" 复制集的作用")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB 复制集的主要意义在于实现服务高可用")]),t._v(" "),a("li",[t._v("它的现实依赖于两个方面的功能\n"),a("ul",[a("li",[t._v("数据写入时将数据迅速复制到另一个独立节点上")]),t._v(" "),a("li",[t._v("在接受写入的节点发生故障是自动选举出一个新的替代节点")])])]),t._v(" "),a("li",[t._v("在实现高可用的同事，复制集实现了其他几个附加作用\n"),a("ul",[a("li",[t._v("数据分发：将数据从一个区域复制到另一个区域，减少另一个区域的读延迟")]),t._v(" "),a("li",[t._v("读写分离：不同类型的压力分别在不同的节点上执行")]),t._v(" "),a("li",[t._v("异地容灾：在数据中心发生故障的时候快速切换到异地")])])])]),t._v(" "),a("h2",{attrs:{id:"典型复制集结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#典型复制集结构"}},[t._v("#")]),t._v(" 典型复制集结构")]),t._v(" "),a("ul",[a("li",[t._v("一个典型的复制集由 3 个以上具有投票权的节点组成，包括：\n"),a("ul",[a("li",[t._v("一个节点（PRIMARY）：接受读入操作和选举时投票")]),t._v(" "),a("li",[t._v("连个（或多个）从节点(SECONDERY)：复制节点上的新数据和选举时投票")]),t._v(" "),a("li",[t._v("不推荐使用 Arbiter（投票节点）")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:v(426),alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"数据是如何复制的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据是如何复制的"}},[t._v("#")]),t._v(" 数据是如何复制的？")]),t._v(" "),a("ul",[a("li",[t._v("当一个修改操作，无论是插入、更新或者删除，达到主节点时，它对数据的操作将被记录下来（经过一系列必要的转换），这些记录被称为 "),a("code",[t._v("oplog")])]),t._v(" "),a("li",[t._v("从节点通过在主节点上打开一个 "),a("code",[t._v("tailable")]),t._v(" 游标不断获取新进入直接点的 "),a("code",[t._v("oplog")]),t._v("，并在自己的数据上回放，一次保持跟主节点的数据一致性")])]),t._v(" "),a("p",[a("img",{attrs:{src:v(427),alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"选举时如何完成故障恢复的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选举时如何完成故障恢复的"}},[t._v("#")]),t._v(" 选举时如何完成故障恢复的？")]),t._v(" "),a("ul",[a("li",[t._v("具有投票权的节点之间凉凉相互发送心跳")]),t._v(" "),a("li",[t._v("当 5 次心跳未收到时判断为节点失联（宕机、断网......）")]),t._v(" "),a("li",[t._v("如果失联的是主节点，从节点会发起选举，选出新的主节点")]),t._v(" "),a("li",[t._v("如果失恋的是从节点则不会产生新的选举")]),t._v(" "),a("li",[t._v("选举基于"),a("a",{attrs:{href:"https://raft.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RAFT 一致性算法"),a("OutboundLink")],1),t._v("实现，选举成功的必要条件是大多数投票节点存活")]),t._v(" "),a("li",[t._v("复制集中最多可以有 50 个节点，但具有投票权的节点最多 7 个")])]),t._v(" "),a("h2",{attrs:{id:"影响选举的因素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响选举的因素"}},[t._v("#")]),t._v(" 影响选举的因素")]),t._v(" "),a("ul",[a("li",[t._v("整个集群必须有大多数节点存活")]),t._v(" "),a("li",[t._v("被选举为主节点的节点必须\n"),a("ul",[a("li",[t._v("能够与多数节点建立连接")]),t._v(" "),a("li",[t._v("具有较新的 "),a("code",[t._v("oplog")]),t._v("（操作日志）")]),t._v(" "),a("li",[t._v("具有较高的优先级（如果有配置）")])])])]),t._v(" "),a("h2",{attrs:{id:"常见选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见选项"}},[t._v("#")]),t._v(" 常见选项")]),t._v(" "),a("ul",[a("li",[t._v("复制及节点有以下常见的选置项：\n"),a("ul",[a("li",[t._v("是否具有投票权（v 参数）：有则参与投票（默认都有投票权）")]),t._v(" "),a("li",[t._v("优先级（priority 参数）：优先级越高的节点越优先成为主节点；优先级为 0 的节点无法成为主节点")]),t._v(" "),a("li",[t._v("隐藏（hidden 参数）：复制数据，但对应不可见；隐藏节点可以具有投票权，但优先级必须为 0")]),t._v(" "),a("li",[t._v("延迟（slaveDelay）：复制 n 秒之前的数据，保持与主节点的时间差")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:v(428),alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"复制集注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制集注意事项"}},[t._v("#")]),t._v(" 复制集注意事项")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("关于硬件")]),t._v(" "),a("ul",[a("li",[t._v("因为正常的复制集节点都有可能成为主节点，他们的地位是一样的，因此硬件配置上必须一致")]),t._v(" "),a("li",[t._v("为例保证节点不会同时宕机，各节点使用的硬件必须具有独立性")])])]),t._v(" "),a("li",[a("p",[t._v("关于软件")]),t._v(" "),a("ul",[a("li",[t._v("复制集各节点软件版本必须一致，以避免出现不可预知的问题")])])]),t._v(" "),a("li",[a("p",[t._v("增加节点不会增加系统写性能")])])]),t._v(" "),a("h2",{attrs:{id:"atlas-mongodb-公有云托管服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atlas-mongodb-公有云托管服务"}},[t._v("#")]),t._v(" Atlas-MongoDB 公有云托管服务")]),t._v(" "),a("p",[a("img",{attrs:{src:v(340),alt:"image.png"}})])])}),[],!1,null,null,null);a.default=s.exports},340:function(t,a,v){t.exports=v.p+"assets/img/1616739691929-b7144c9f-c48e-451a-bae6-b9f2bb8e2f11.1f7ae431.png"},426:function(t,a,v){t.exports=v.p+"assets/img/1616727985993-8c80b589-0adb-468a-b1b1-e9444e0d9998.5c7435b7.png"},427:function(t,a,v){t.exports=v.p+"assets/img/1616736435076-19160d34-62df-4528-9260-d5e68a4773e6.b0fe1c86.png"},428:function(t,a,v){t.exports=v.p+"assets/img/1616737227979-ce259f0d-c75f-41ba-ae0e-63b358176af5.43ea6425.png"}}]);