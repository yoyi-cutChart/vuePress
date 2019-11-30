(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript基础")]),t._v(" "),a("h2",{attrs:{id:"js数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" js数据类型")]),t._v(" "),a("p",[t._v("分为两种：值类型和引用类型")]),t._v(" "),a("ol",[a("li",[t._v("值类型\n"),a("ul",[a("li",[t._v("值类型的特点：单一、独立，每一个变量都是相互独立 互不影响的")]),t._v(" "),a("li",[t._v("值类型有："),a("code",[t._v("Number")]),t._v(" "),a("code",[t._v("String")]),t._v(" "),a("code",[t._v("Boolean")]),t._v(" "),a("code",[t._v("undefined")])])])]),t._v(" "),a("li",[t._v("引用类型\n"),a("ul",[a("li",[t._v("引用类型的特点： 它引用的同一个地址且引用类型可以添加不同的属性")]),t._v(" "),a("li",[t._v("引用类型有： "),a("code",[t._v("Array")]),t._v(" "),a("code",[t._v("Object")]),t._v(" "),a("code",[t._v("Function")])])])])]),t._v(" "),a("h2",{attrs:{id:"单线程和异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程和异步","aria-hidden":"true"}},[t._v("#")]),t._v(" 单线程和异步")]),t._v(" "),a("p",[t._v("js是一种弱类型语言且只有一条主线程(单线程)，但js的宿主环境(如浏览器, node )是多线程的，宿主环境通过某种方式使得js具备了异步的属性。")]),t._v(" "),a("h3",{attrs:{id:"先来说说浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先来说说浏览器","aria-hidden":"true"}},[t._v("#")]),t._v(" 先来说说浏览器")]),t._v(" "),a("p",[t._v("js是单线程语言，浏览器只分配给js一个主线程，用来执行任务（函数），但一次只能执行一行代码，后面的代码必须得等到之前的代码执行完毕才能执行，这些任务形成一个任务队列排队等候执行，但我们业务中某些任务是非常耗时的比如网络请求，定时器和事件监听，如果让他们和别的任务一样都排队等待执行的话，执行效率会非常的低，甚至导致页面的假死。所以浏览器为这些耗时任务开辟了另外的线程，主要包括http请求线程，浏览器定时触发器，浏览器事件触发线程，这些任务是异步的。")]),t._v(" "),a("h3",{attrs:{id:"再说说任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再说说任务队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 再说说任务队列")]),t._v(" "),a("p",[t._v("刚才说到浏览器为网络请求这样的异步任务单独开了一个线程，那么问题来了，这些异步任务完成后，主线程怎么知道呢？答案就是回调函数，整个程序是事件驱动的，每个事件都会绑定相应的回调函数，举个栗子，有段代码设置了一个定时器")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的永远是4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("执行这段代码的时候，浏览器异步执行计时操作，过了1秒后，会触发定时事件，这时候就会把回调函数放到任务队列里而这个 for 循环4次可能只需要几毫秒的时间，等真正执行到setTimeout回调函数的时候i就已经是4了。")]),t._v(" "),a("ul",[a("li",[t._v("js一直在做一个工作，就是从任务队列里提取任务，放到主线程里执行")])])])},[],!1,null,null,null);s.default=e.exports}}]);