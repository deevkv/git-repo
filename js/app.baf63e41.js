(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},i=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0240":function(t,e,a){"use strict";var o=a("c6fb"),n=a.n(o);n.a},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.9ace65d6.svg"},"1e22":function(t,e,a){t.exports=a.p+"img/photo.bc14b8c4.jpg"},"287a":function(t,e,a){t.exports=a.p+"img/meduzaos.d1bf8bc0.jpg"},"50c47":function(t,e,a){"use strict";var o=a("657c"),n=a.n(o);n.a},"51ac":function(t,e,a){"use strict";var o=a("7ee9"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{staticClass:"navigation-drawer",attrs:{app:"",dark:"",temporary:"",color:"#1a1a1a",width:"180"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.links,(function(e){return o("v-list-item",{key:e.title,staticClass:"navigation-drawer__list",attrs:{to:e.url}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),o("v-app-bar",{staticClass:"app-bar",attrs:{app:"",dark:"",height:"48px",color:"#141414"}},[o("div",{staticClass:"app-bar__title-wrapper"},[o("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up app-bar__nav-icon",on:{click:function(e){t.drawer=!t.drawer}}}),o("v-toolbar-title",{staticClass:"app-bar__title"},[o("router-link",{attrs:{to:"/",tag:"span"}},[o("img",{attrs:{src:a("1ae4"),alt:"Logo"}}),o("span",{staticClass:"app-bar__title-description"},[t._v("Frontend developer")])])],1)],1),o("v-toolbar-items",{staticClass:"hidden-sm-and-down app-bar__links"},t._l(t.links,(function(e){return o("v-btn",{key:e.title,staticClass:"app-bar__button",attrs:{to:e.url,text:""}},[t._v("/"+t._s(e.title))])})),1)],1),o("v-content",[o("router-view")],1),o("v-footer",{attrs:{dark:"",color:"#000"}},[o("v-spacer"),o("div",{staticClass:"footer-title"},[t._v("Beta 1.0")])],1)],1)},i=[],s={data:function(){return{drawer:!1,links:[{title:"Portfolio",url:"/portfolio"},{title:"About",url:"/about"},{title:"Contacts",url:"/contacts"}]}}},r=s,c=(a("5c0b"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),v=a("5bc1"),f=a("8336"),m=a("a75b"),_=a("553a"),b=a("8860"),g=a("da13"),h=a("5d23"),C=a("f774"),w=a("2fa4"),x=a("2a7f"),y=Object(c["a"])(r,n,i,!1,null,null,null),k=y.exports;u()(y,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VContent:m["a"],VFooter:_["a"],VList:b["a"],VListItem:g["a"],VListItemContent:h["a"],VListItemTitle:h["b"],VNavigationDrawer:C["a"],VSpacer:w["a"],VToolbarItems:x["a"],VToolbarTitle:x["b"]});var V=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home"},[a("v-container",{staticClass:"home__container"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12","offset-xl":"2"}},[a("h1",{staticClass:"home__title"},[t._v("frontend development."),a("br"),t._v("ui prototyping.")])])],1),a("v-row",{staticClass:"home___card-wrapper",attrs:{justify:"center",align:"center"}},[a("v-col",[a("v-card",{ref:"windowHome",staticClass:"mx-auto elevation-10 home__card",attrs:{dark:"",tile:"","max-width":"700","min-height":"250",color:"#141414"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[a("v-system-bar",{class:{active:t.hover},attrs:{color:"#434343",dark:""},on:{mousedown:t.draggable}},[a("v-spacer"),a("button",{staticClass:"home__card-button-close",on:{click:t.closeWindowHome}})],1),a("div",{staticClass:"px-3 py-4 home__card-title-wrapper"},[a("h2",{staticClass:"pb-1 home__card-title"},[t._v("Truevers:"),a("span",{staticClass:"home__card-description",attrs:{id:"typingTextHome"}})]),a("div",{staticClass:"px-0 home__card-button-block"},t._l(t.links,(function(e){return a("router-link",{key:e.title,attrs:{to:e.url,tag:"span"}},[a("button",{staticClass:"home__card-button",attrs:{text:""}},[t._v("/"+t._s(e.title))])])})),1)])],1)],1)],1)],1)],1)},S=[],j=(a("9911"),{data:function(){return{hover:!1,links:[{title:"Portfolio",url:"/portfolio"},{title:"About",url:"/about"},{title:"Contacts",url:"/contacts"}]}},methods:{draggable:function(t){var e=this.$refs.windowHome.$refs.link,a=t.clientX-e.getBoundingClientRect().left,o=t.clientY-e.getBoundingClientRect().top;function n(t,n){e.style.left=t-a+"px",e.style.top=n-o-48+"px"}function i(t){n(t.pageX,t.pageY)}function s(){document.removeEventListener("mousemove",i),e.onmouseup=null}e.style.width=getComputedStyle(e).width,e.style.position="absolute",e.style.zIndex=1e3,n(t.pageX,t.pageY),document.addEventListener("mousemove",i),document.addEventListener("mouseup",s),e.ondragstart=function(){return!1}},textAnimation:function(t){var e=["Welcome to the website. I'm in the  frontend development. You can find examples of works in the section of the portfolio."];function a(t,e){e<t.length&&(document.getElementById("typingTextHome").innerHTML=t.substring(0,e+1)+'<span aria-hidden="true"></span>',setTimeout((function(){a(t,e+1)}),20))}t<e[t].length&&a(e[t],0)},closeWindowHome:function(){alert("This function is in development.")}},mounted:function(){this.textAnimation(0)}}),O=j,L=(a("dbc2"),a("b0af")),A=a("62ad"),I=a("a523"),H=a("0fd9"),E=a("afd9"),M=Object(c["a"])(O,T,S,!1,null,null,null),P=M.exports;u()(M,{VCard:L["a"],VCol:A["a"],VContainer:I["a"],VRow:H["a"],VSpacer:w["a"],VSystemBar:E["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"portfolio"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",xl:"8","offset-xl":"2"}},[a("section",{staticClass:"portfolio-toolbar"},[a("h1",{staticClass:"pb-5 px-4 portfolio-toolbar__title"},[t._v("Truevers: "),a("span",{staticClass:"portfolio-toolbar__description",attrs:{id:"typingText"}})]),a("div",[a("v-btn",{staticClass:"subtitle-1 portfolio-toolbar__button",attrs:{text:"",tile:""},on:{click:function(e){t.searchName=""}}},[t._v("All works /")]),a("v-btn",{staticClass:"subtitle-1 portfolio-toolbar__button",attrs:{text:"",tile:""},on:{click:function(e){t.searchName="web_sites"}}},[t._v(" Web sites /")]),a("v-btn",{staticClass:"subtitle-1 portfolio-toolbar__button",attrs:{text:"",tile:""},on:{click:function(e){t.searchName="lending_page"}}},[t._v("Lending page /")]),a("v-btn",{staticClass:"subtitle-1 portfolio-toolbar__button",attrs:{disabled:"",text:"",tile:""},on:{click:function(e){t.searchName="online_store"}}},[t._v("Online store /")]),a("v-btn",{staticClass:"subtitle-1 portfolio-toolbar__button",attrs:{disabled:"",text:"",tile:""},on:{click:function(e){t.searchName="Portals_and_web_services"}}},[t._v("Portals and web services /")])],1)])])],1),a("v-row",t._l(t.filteredNames,(function(e){return a("v-col",{key:e.name,staticClass:"pb-10 pb-sm-6 pb-md-2",attrs:{cols:"12",xl:"8","offset-xl":"2"}},[a("v-card",{staticClass:"mx-auto elevation-3 portfolio-card",attrs:{dark:"",color:"#141414","min-height":"160"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-7 portfolio-card__description-block"},[a("v-card-title",{staticClass:"pa-0 pt-2 pb-1 portfolio-card__title"},[t._v(t._s(e.name))]),a("v-card-text",{staticClass:"pa-0 subtitle-1 portfolio__discription"},[a("span",[t._v(t._s(e.description))])])],1),a("v-col",{staticClass:"pa-7 d-flex align-center",attrs:{cols:"12",sm:"5",md:"5",lg:"5"}},[a("ul",{staticClass:"portfolio-card__data-block"},[a("li",{staticClass:"portfolio-card__item"},[t._v("Stack:"),a("span",[t._v(t._s(e.stack))])]),a("li",{staticClass:"portfolio-card__item"},[t._v("Design:"),a("span",[t._v(t._s(e.design))])]),a("li",{staticClass:"portfolio-card__item"},[t._v("Data:"),a("span",[t._v(t._s(e.data))])]),a("li",{staticClass:"portfolio-card__item"},[t._v("Github:"),a("a",{staticClass:"portfolio-card__github-link",attrs:{href:e.github,target:"_blank"}},[t._v(t._s("~"+e.github.slice(e.github.lastIndexOf("/"))))])])])]),a("v-col",{attrs:{"сlass":"portfolio-card__image-block",cols:"12",sm:"12",md:"3",lg:"3"}},[a("v-img",{staticClass:"portfolio-card__image",attrs:{src:e.imageSrc,position:"top"}},[a("a",{staticClass:"portfolio-card__image-link",attrs:{href:e.src,target:"_blank"}})])],1)],1)],1)],1)})),1)],1)],1)},N=[],$=(a("4de4"),a("c975"),{data:function(){return{searchName:"",portfolio:[{name:"Meduza OS",description:"Linux distribution web site.",stack:"HTML, CSS, JS",design:"Kirill Deev",data:"2019",github:"https://github.com/deevkv/meduzaos",imageSrc:a("287a"),src:"https://deevkv.github.io/meduzaos",category:"web_sites"},{name:"Truevers Music",description:"Composer's website with the ability to listen to music",stack:"HTML, CSS, JS",design:"Kirill Deev",data:"2019",github:"https://github.com/deevkv/truevers_music",imageSrc:a("9526"),src:"https://deevkv.github.io/truevers_music",category:"web_sites"},{name:"Tatoo Studio",description:"Landing Page tattoo studio",stack:"HTML, CSS, JS",design:"Kirill Deev",data:"2019",github:"https://github.com/deevkv/tattoo",imageSrc:a("fc3b"),src:"https://deevkv.github.io/tattoo",category:"lending_page"},{name:"Portfolio",description:"The site you are currently on",stack:"Vue.js, Vuetify",design:"Kirill Deev",data:"2020",github:"https://github.com/deevkv/portfolio",imageSrc:a("63b5"),src:"https://deevkv.github.io",category:"web_sites"}]}},methods:{textAnimation:function(t){var e=["All below are works with exclusive design and meet the requirements of modern web development."];function a(t,e){e<t.length&&(document.getElementById("typingText").innerHTML=t.substring(0,e+1)+'<span aria-hidden="true"></span>',setTimeout((function(){a(t,e+1)}),10))}t<e[t].length&&a(e[t],0)}},mounted:function(){this.textAnimation(0)},computed:{filteredNames:function(){var t=this;return this.portfolio.filter((function(e){return-1!==e.category.indexOf(t.searchName)}))}}}),D=$,J=(a("0240"),a("99d9")),R=a("adda"),z=Object(c["a"])(D,B,N,!1,null,null,null),W=z.exports;u()(z,{VBtn:f["a"],VCard:L["a"],VCardText:J["a"],VCardTitle:J["b"],VCol:A["a"],VContainer:I["a"],VImg:R["a"],VRow:H["a"]});var K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"about"},[o("v-container",{staticClass:"about__container"},[o("v-row",{attrs:{justify:"center"}},[o("v-col",[o("v-card",{ref:"windowHome",staticClass:"mx-auto about__card ",attrs:{dark:"",outlined:"",color:"transparent",border:"none"}},[o("h1",{staticClass:"pt-4 pb-6 about__card-title"},[t._v("Truevers: "),o("span",{staticClass:"about__card-description",attrs:{id:"typingTextAbout"}})]),o("img",{staticClass:"mx-auto elevation-5 about-card__image",attrs:{width:"643",height:"523",src:a("c215")}})])],1)],1)],1)],1)},X=[],Y={data:function(){return{}},methods:{textAnimation:function(t){var e=["I design UX interfaces, adaptive and responsive layout. I have extensive knowledge of front-end JavaScript, and also have experience working with the popular Vue.js. My stack:"];function a(t,e){e<t.length&&(document.getElementById("typingTextAbout").innerHTML=t.substring(0,e+1)+'<span aria-hidden="true"></span>',setTimeout((function(){a(t,e+1)}),10))}t<e[t].length&&a(e[t],0)}},mounted:function(){this.textAnimation(0)}},F=Y,q=(a("50c47"),Object(c["a"])(F,K,X,!1,null,null,null)),G=q.exports;u()(q,{VCard:L["a"],VCol:A["a"],VContainer:I["a"],VRow:H["a"]});var U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"contacts"},[o("v-container",{staticClass:"contacts__container"},[o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",[o("div",{ref:"windowWrapper",staticClass:"contacts__wraper-card"},[o("v-card",{ref:"windowHome",staticClass:"mx-auto elevation-5 contacts__card",attrs:{dark:"","min-height":"250",color:"#141414"}},[o("v-container",{staticClass:"px-7 py-7"},[o("v-row",[o("v-col",{staticClass:"pt-3",attrs:{cols:"12"}},[o("h1",{staticClass:"px-sm-2 contacts__card-title"},[t._v("Truevers: "),o("span",{staticClass:"contacts__card-description",attrs:{id:"typingTextContacts"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, expedita. ")])])])],1),o("v-row",{staticClass:"pt-4"},[o("v-col",{staticClass:"pl-6 pt-0 pb-9 d-flex align-center",attrs:{cols:"12",sm:"7",md:"7",lg:"7"}},[o("a",{staticClass:"contacts__card-email",attrs:{href:"mailto:deev.kv@gmail.com"}},[t._v("Email:"),o("span",[t._v("deev.kv@gmail.com")])])]),o("v-col",{staticClass:"pt-0 pb-0 d-flex justify-center",attrs:{cols:"12",sm:"5",md:"5",lg:"5"}},[o("v-img",{staticClass:"contacts-card__image",attrs:{"max-width":"",src:a("1e22")}})],1)],1)],1)],1)],1)])],1)],1)],1)},Q=[],Z={data:function(){return{}},methods:{textAnimation:function(t){var e=["If you want to collaborate or simply just say hello don't hesitate to reach out!"];function a(t,e){e<t.length&&(document.getElementById("typingTextContacts").innerHTML=t.substring(0,e+1)+'<span aria-hidden="true"></span>',setTimeout((function(){a(t,e+1)}),10))}t<e[t].length&&a(e[t],0)}},mounted:function(){this.textAnimation(0)}},tt=Z,et=(a("51ac"),Object(c["a"])(tt,U,Q,!1,null,null,null)),at=et.exports;u()(et,{VCard:L["a"],VCol:A["a"],VContainer:I["a"],VImg:R["a"],VRow:H["a"]}),o["a"].use(V["a"]);var ot=[{path:"/",name:"home",component:P},{path:"/portfolio",name:"portfolio",component:W},{path:"/about",name:"about",component:G},{path:"/contacts",name:"contacts",component:at}],nt=new V["a"]({mode:"history",routes:ot}),it=nt,st=a("f309");o["a"].use(st["a"]);var rt=new st["a"]({});a("6aaa");o["a"].config.productionTip=!1,new o["a"]({router:it,vuetify:rt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("7694"),n=a.n(o);n.a},"63b5":function(t,e,a){t.exports=a.p+"img/portfolio.b9b8e4b7.jpg"},"657c":function(t,e,a){},"6aaa":function(t,e,a){},7694:function(t,e,a){},"7ee9":function(t,e,a){},9526:function(t,e,a){t.exports=a.p+"img/truevers_music.25643a14.jpg"},c215:function(t,e,a){t.exports=a.p+"img/stack.09f22444.svg"},c6fb:function(t,e,a){},dbc2:function(t,e,a){"use strict";var o=a("dcc5"),n=a.n(o);n.a},dcc5:function(t,e,a){},fc3b:function(t,e,a){t.exports=a.p+"img/tatoo.ce7d6e1e.jpg"}});
//# sourceMappingURL=app.baf63e41.js.map