(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-548bd3bf"],{"257b":function(e,t,r){"use strict";var n=r("4846"),s=r.n(n);s.a},4846:function(e,t,r){},"77c5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"content"},[e.newUser?e._e():r("div",[r("h1",[e._v("Login")]),r("v-form",[r("v-text-field",{attrs:{placeholder:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{type:"password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{color:"#6060ff",outlined:""},on:{click:e.submitLogin}},[e._v("Login")]),r("v-btn",{staticStyle:{margin:"0 10px"},attrs:{color:"#6060ff",outlined:""},on:{click:e.swapUser}},[e._v(e._s(e.buttonName))])],1)],1),e.newUser?r("div",[r("h1",[e._v("New User")]),r("v-form",[r("v-text-field",{attrs:{placeholder:"Full Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{placeholder:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{placeholder:"Email@example.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{type:"password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{color:"#6060ff",outlined:""},on:{click:e.addUser}},[e._v("Submit")]),r("v-btn",{staticStyle:{margin:"0 10px"},attrs:{color:"#6060ff",outlined:""},on:{click:e.swapUser}},[e._v(e._s(e.buttonName))])],1)],1):e._e()])},s=[],a=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("ade3")),o=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"cp-login",data:function(){return{email:"",password:"",name:"",username:"",newUser:!1,buttonName:"New User"}},methods:i({},Object(o["b"])("users",["login","createUser"]),{swapUser:function(){this.newUser?(this.newUser=!1,this.buttonName="New User"):(this.newUser=!0,this.buttonName="Returning User")},submitLogin:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={username:this.username,password:this.password},t.next=4,regeneratorRuntime.awrap(this.login(e));case 4:this.$router.push("/profile"),t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0;case 10:case"end":return t.stop()}}),null,this,[[0,7]])},addUser:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={name:this.name,username:this.username,email:this.email,password:this.password},t.next=4,regeneratorRuntime.awrap(this.createUser(e));case 4:this.$router.push("/profile"),t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0;case 10:case"end":return t.stop()}}),null,this,[[0,7]])}})},u=l,p=(r("257b"),r("2877")),d=r("6544"),m=r.n(d),b=r("8336"),f=r("a75b"),w=r("4bd4"),h=r("8654"),v=Object(p["a"])(u,n,s,!1,null,"b9a7d44e",null);t["default"]=v.exports;m()(v,{VBtn:b["a"],VContent:f["a"],VForm:w["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=chunk-548bd3bf.1af5ed9e.js.map