(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{389:function(e,n,t){"use strict";t.r(n);var x=t(45),a=Object(x.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("div",{staticClass:"language-mermaid extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("\tgraph TD\n\tA(对比新旧节点)--\x3eB1(新节点存在旧节点不存在)\n\tA--\x3eB2(旧节点存在新节点不存在)\n    A--\x3eB3(新旧节点同时存在)\n\tB1--\x3eC1(新增节点)\n\tB2--\x3eC2(删除节点)\n\tB3--\x3eC3(对比新旧节点)\n    C3--\x3eD1(新旧节点相同)\n    C3--\x3eD2(新旧节点不相同)\n    D1--\x3eE1(patch新旧节点VNode)\n    D2--\x3eE2(替换节点)\n    E1--\x3eF1(新旧节点vnode的key&tag&isComment相同)\n    E1--\x3eF4(新旧节点子节点同时存在且不相同)\n    F4--\x3eG4(更新子节点)\n    G4--\x3eH3(遍历新旧子节点头尾对比)\n    G4--\x3eH4(根据旧子节点列表生成map)\n    H4--\x3eI5(新子节点存在key且map.key不为空)\n    I5--\x3eJ2(对比新旧子节点key相同的节点vnode)\n    H4--\x3eI6(新子节点key不存在map对象)\n    I6--\x3eJ3(新增子节点)\n    H3--\x3eI1(新首与旧首相等)\n    H3--\x3eI2(新尾与旧尾相等)\n    H3--\x3eI3(新首与旧尾相等)\n    H3--\x3eI4(新尾与旧首相等)\n    I1--\x3eJ1(patchVnode)\n    I2--\x3eJ1(patchVnode)\n    I3--\x3eJ1(patchVnode)\n    I4--\x3eJ1(patchVnode)\n    E1--\x3eF5(只有新节点存在子节点)\n    F5--\x3eG5(新增子节点)\n    E1--\x3eF6(只要旧节点存在子节点)\n    F6--\x3eG6(删除子节点)\n    E1--\x3eF3(新节点是文本节点)\n    F3--\x3eG3(替换文本)\n    G3--\x3eH1(patch结束)\n    E1--\x3eF2(新旧节点同为静态节点&新旧节点key完全相同)\n    F2--\x3eG1(直接将旧节点元素赋值给新节点)\n    F1--\x3eH1(patch结束)\n    G1--\x3eH1(patch结束)\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);