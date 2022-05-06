(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1007:function(t,s,a){t.exports=a.p+"assets/img/image-20220129152708976.49576442.png"},1008:function(t,s,a){t.exports=a.p+"assets/img/image-20220129155002896.84f79c84.png"},1009:function(t,s,a){t.exports=a.p+"assets/img/image-20220129155149555.0c8f0b51.png"},1010:function(t,s,a){t.exports=a.p+"assets/img/image-20220129160143003.979ee377.png"},1370:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"错误日志收集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错误日志收集"}},[t._v("#")]),t._v(" 错误日志收集")]),t._v(" "),n("h2",{attrs:{id:"集成sentry日志收集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成sentry日志收集"}},[t._v("#")]),t._v(" 集成sentry日志收集")]),t._v(" "),n("p",[t._v("注册sentry，官方地址："),n("a",{attrs:{href:"https://sentry.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sentry.io/"),n("OutboundLink")],1),t._v("，注册完成之后，就可以创建Flutter的项目了：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1007),alt:"image-20220129152708976"}})]),t._v(" "),n("h3",{attrs:{id:"安装依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[t._v("dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  sentry_flutter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.2")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\n")])])]),n("p",[t._v("使用"),n("code",[t._v("flutter pub get")]),t._v("安装依赖。")]),t._v(" "),n("h3",{attrs:{id:"配置sentry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置sentry"}},[t._v("#")]),t._v(" 配置sentry")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:flutter/widgets.dart'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:sentry_flutter/sentry_flutter.dart'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Future")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryFlutter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dsn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://f8ec7ac644ac4d749ee18ac058bed41b@o1050376.ingest.sentry.io/6173778'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We recommend adjusting this value in production.")]),t._v("\n      options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tracesSampleRate "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以修改这个函数，加入初始化应用，比如getIt")]),t._v("\n    appRunner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("runApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or define SENTRY_DSN via Dart environment variable (--dart-define)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),n("p",[t._v("收集错误：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:sentry/sentry.dart'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("aMethodThatMightFail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stackTrace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sentry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    stackTrace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stackTrace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个可以放到dio_error_interceptor中")]),t._v("\n")])])]),n("h2",{attrs:{id:"集成bugly日志收集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成bugly日志收集"}},[t._v("#")]),t._v(" 集成Bugly日志收集")]),t._v(" "),n("p",[t._v("在Bugly官方"),n("a",{attrs:{href:"https://bugly.qq.com/v2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bugly.qq.com/v2/"),n("OutboundLink")],1),t._v("注册账号。")]),t._v(" "),n("p",[t._v("新增产品（iOS与Android）：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1008),alt:"image-20220129155002896"}})]),t._v(" "),n("p",[t._v("选择平台与分类，创建完成。")]),t._v(" "),n("p",[t._v("点选产品，选择设置：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1009),alt:"image-20220129155149555"}})]),t._v(" "),n("h3",{attrs:{id:"安装依赖-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖-2"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flutter_bugly")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.4.3\n")])])]),n("p",[t._v("使用"),n("code",[t._v("flutter pub get")]),t._v("安装依赖。")]),t._v(" "),n("h3",{attrs:{id:"配置bugly"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置bugly"}},[t._v("#")]),t._v(" 配置Bugly")]),t._v(" "),n("p",[t._v("调整"),n("code",[t._v("main.dart")]),t._v("文件")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bugly")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlutterBugly")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postCatchedException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GetStorage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setupGetIt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotificationsUtils")]),t._v(" notificationsUtils "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getIt"),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotificationsUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求消息权限")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Timer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" notificationsUtils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIOSPermissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" notificationsUtils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initNotifications")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("runApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里特别说明一下，如果开发模式没有收到错误日志，是因为没有设置debugUpload")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// debugUpload: true,")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatefulWidget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Key")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_MyAppState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" _MyAppState "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里初始化")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlutterBugly")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("androidAppId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b3ca88f6d5"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iOSAppId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7b10e672ce"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),n("p",[t._v("调整dio的error拦截器：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ErrorInterceptor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Interceptor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ErrorInterceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DioError")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ErrorInterceptorHandler")]),t._v(" handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// print('onError: $err');")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 401 -> refreshToken")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpException")]),t._v(" httpException "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4xx 5xx -> parseException -> 日志 -> 本地数据库&缓存")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送错误日志的请求")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlutterBugly")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploadException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackTrace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        requestOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        statusCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpException"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpException"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string-literal"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpException"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// super.onError(err, handler);")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("bugly错误：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1010),alt:"image-20220129160143003"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);