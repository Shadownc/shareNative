webpackJsonp([2],{"3KNR":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("mt-button",{attrs:{type:"default"},nativeOn:{click:function(e){t.handleClick(e)}}},[t._v("跳转商品详情页")]),t._v(" "),n("router-link",{attrs:{to:{name:"Lists"}}},[n("mt-button",{staticClass:"mt-20",attrs:{type:"primary"}},[t._v("跳转列表页")])],1)],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},Fs8J:function(t,e,n){"use strict";e.a={name:"",data:function(){return{}},mounted:function(){},methods:{shareApp:function(){var t=new NativeShare,e={title:"Shadow",desc:"Shadow分享",link:"https://shadownc.github.io/shareNative/",icon:"http://img3.imgtn.bdimg.com/it/u=3647609273,686575484&fm=27&gp=0.jpg",success:function(){alert("success")},fail:function(){alert("fail")}};t.setShareData(e);try{t.call()}catch(t){alert(t.message)}},handleClick:function(t){var e=this;console.log(t.y),this.$messagebox.confirm("确定跳转吗").then(function(t){if("confirm"!=t)return!1;e.$router.push({name:"ShareDetail"})})}}}},JQK2:function(t,e,n){var a=n("Mz/g");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("33b6ee9d",a,!0)},"Mz/g":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".mt-20[data-v-1fef3a6b]{margin-top:80px!important}","",{version:3,sources:["E:/Git project/NewShare/src/components/Home.vue"],names:[],mappings:"AACA,wBACE,yBAA4B,CAC7B",file:"Home.vue",sourcesContent:["\n.mt-20[data-v-1fef3a6b] {\n  margin-top: 80px !important;\n}\n"],sourceRoot:""}])},lO7g:function(t,e,n){"use strict";function a(t){n("JQK2")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("Fs8J"),s=n("3KNR"),o=n("VU/8"),r=a,c=o(i.a,s.a,r,"data-v-1fef3a6b",null);e.default=c.exports}});
//# sourceMappingURL=2.3e7a1a22e5576657c166.js.map