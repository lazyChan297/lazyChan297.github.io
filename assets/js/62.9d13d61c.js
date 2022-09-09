(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{414:function(t,a,n){"use strict";n.r(a);var s=n(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),n("p",[t._v("css3新特性中transition、animation、transform属性")]),t._v(" "),n("h2",{attrs:{id:"transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),n("p",[t._v("在引用该属性前，css是没有时间轴的所有状态的变化都是即时完成，增加该属性后可以为状态的变化增加过渡效果")]),t._v(" "),n("p",[n("strong",[t._v("属性值说明")])]),t._v(" "),n("ul",[n("li",[t._v("transition-property 过渡效果的属性")]),t._v(" "),n("li",[t._v("transition-duration 过渡时间")]),t._v(" "),n("li",[t._v("transition-delay 延迟时间")]),t._v(" "),n("li",[t._v("transition-timing-function 速度变化函数\n"),n("ul",[n("li",[t._v("linear 匀速")]),t._v(" "),n("li",[t._v("ease-in 加速")]),t._v(" "),n("li",[t._v("ease-out 减速")]),t._v(" "),n("li",[t._v("cubic-bezier自定义速度")])])])]),t._v(" "),n("p",[n("strong",[t._v("使用限制")])]),t._v(" "),n("ul",[n("li",[t._v("需要事件触发，无法在网页加载是自动发生")]),t._v(" "),n("li",[t._v("是一次性的，不能重复发生，除非重复触发")]),t._v(" "),n("li",[t._v("只能定义两个状态，即开始和结束")]),t._v(" "),n("li",[t._v("一条过渡效果规则只能定义一个属性变化")])]),t._v(" "),n("h2",{attrs:{id:"animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" Animation")]),t._v(" "),n("p",[t._v("Animation可以解决transition属性的使用限制问题")]),t._v(" "),n("p",[n("code",[t._v("animation: 动画名 持续时间 速度变化函数 延迟时间 播放次数 播放方向（状态1->状态n) 动画播放结束后停留位置")])]),t._v(" "),n("ul",[n("li",[t._v("animation-name | 动画名")]),t._v(" "),n("li",[t._v("animation-duration 持续时间 | 数值+秒")]),t._v(" "),n("li",[t._v("animation-timing-function 速度变化函数 与transition一致")]),t._v(" "),n("li",[t._v("animation-delay 延迟时间")]),t._v(" "),n("li",[t._v("animation-iteration-count 播放次数 | "),n("code",[t._v("infinite无限循环")])]),t._v(" "),n("li",[t._v("animation-direction 播放方向\n"),n("ul",[n("li",[n("code",[t._v("normal")]),t._v(" 播放结束后回到起点重新开始")]),t._v(" "),n("li",[n("code",[t._v("alternate")]),t._v(" 交替运行 起点->终点->终点->起点")]),t._v(" "),n("li",[n("code",[t._v("reverse")]),t._v(" 终点->起点")]),t._v(" "),n("li",[n("code",[t._v("alternate-reverse")]),t._v(" 终点->起点->起点->终点")])])]),t._v(" "),n("li",[t._v("animation-fill-mode 动画播放结束后停留位置\n"),n("ul",[n("li",[n("code",[t._v("none")]),t._v(" 播放结束后回到无动画状态")]),t._v(" "),n("li",[n("code",[t._v("forwards")]),t._v(" 播放结束后停留最后一个状态")]),t._v(" "),n("li",[n("code",[t._v("backwards")]),t._v(" 播放结束后回到第一帧")]),t._v(" "),n("li",[n("code",[t._v("both")]),t._v(" 根据animation-direction轮流应用forwards和backwards规则")])])])]),t._v(" "),n("p",[n("strong",[t._v("创建动画")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".animationNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyAnimation 10s linear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" MyAnimation")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200px 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"transform"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transform"}},[t._v("#")]),t._v(" transform")]),t._v(" "),n("p",[t._v("支持"),n("code",[t._v("rotate(旋转)")]),t._v("，"),n("code",[t._v("scale(缩放)")]),t._v("，"),n("code",[t._v("translate(移动)")]),t._v("，"),n("code",[t._v("skew(倾斜)")]),t._v("四个值实现动画，如果想要定义多个值可以排列书写，变化的属性顺序和书写的顺序一致，"),n("br"),t._v(" "),n("strong",[t._v("需要注意的是，当"),n("code",[t._v("rotate")]),t._v("后，元素的坐标轴也会随着旋转，如果还需要对该元素位移，那么位移的方向也是随着旋转后的坐标轴移动，如果位移的方向不想随着坐标轴旋转，那么记得要先位移，再旋转")])]),t._v(" "),n("h2",{attrs:{id:"动画性能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画性能"}},[t._v("#")]),t._v(" 动画性能")]),t._v(" "),n("p",[t._v("使用以下属性不会引起浏览器回流和重绘，而是开启GPU线程绘制，对渲染性能有了很大的提升")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("transform")])]),t._v(" "),n("li",[n("code",[t._v("opacity")])]),t._v(" "),n("li",[n("code",[t._v("filter（滤镜）")]),t._v("，属性值："),n("code",[t._v("blur() - 模糊")]),t._v(" "),n("code",[t._v("brightness() - 亮度")]),t._v(" "),n("br"),t._v(" "),n("code",[t._v("contrast() - 对比度")]),t._v(" "),n("code",[t._v("drop-shadow() - 阴影")]),t._v(" "),n("code",[t._v("grayscale() - 灰度")]),t._v(" "),n("br"),t._v(" "),n("code",[t._v("hue-rotate() - 色相旋转")]),t._v(" "),n("code",[t._v("invert() - 反色")]),t._v(" "),n("code",[t._v("opacity() - 透明度")]),t._v(" "),n("br"),t._v(" "),n("code",[t._v("saturate() - 饱和度")]),t._v(" "),n("code",[t._v("sepia() - 褐色")])])]),t._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"http://www.ayqy.net/blog/css%E5%8A%A8%E7%94%BB%E4%B8%8Egpu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS动画与GPU"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://sy-tang.github.io/2014/05/14/CSS%20animations%20and%20transitions%20performance-%20looking%20inside%20the%20browser/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浏览器理解CSS animations 和 transitions的性能问题"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);