(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbfbc572"],{"42ad":function(e,t,s){"use strict";s("cd13")},"9f9d":function(e,t,s){"use strict";s("e1d3")},cd13:function(e,t,s){},d5c2:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("BookManage-Register")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"please input username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{ref:"password",attrs:{type:"password",placeholder:"please input password",name:"password",tabindex:"2","auto-complete":"on"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),s("el-form-item",{attrs:{prop:"repeat"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{ref:"repeat",attrs:{type:"password",placeholder:"please confirm password",name:"repeat",tabindex:"3","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleRight(t)}},model:{value:e.loginForm.repeat,callback:function(t){e.$set(e.loginForm,"repeat",t)},expression:"loginForm.repeat"}})],1),s("div",{staticStyle:{height:"40px","margin-bottom":"30px"}},[s("el-button",{staticStyle:{width:"48%",float:"left"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRight(t)}}},[e._v("confirm")]),s("el-button",{staticStyle:{width:"48%",float:"right"},attrs:{loading:e.loading,type:"success"},nativeOn:{click:function(t){return t.preventDefault(),e.handleBack(t)}}},[e._v("login")])],1)],1)],1)},n=[],r=s("c24f"),o={name:"Login",data:function(){var e=this,t=function(t,s,a){s!==e.loginForm.password?a(new Error("confirm password is not same as the password!")):a()};return{loginForm:{username:"",password:"",repeat:""},loginRules:{username:[{required:!0,message:"please input username",trigger:"blur"}],password:[{required:!0,message:"please input password",trigger:"blur"}],repeat:[{required:!0,message:"please input password again",trigger:"blur"},{trigger:"blur",validator:t}]},loading:!1}},methods:{handleRight:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("submit not allowed!"),!1;Object(r["j"])({username:e.loginForm.username,password:e.loginForm.password}).then((function(t){0===t?e.$message.error("failed:username duplicate!"):e.$message.success("register success")}))}))},handleBack:function(){this.$router.push("/login")}}},i=o,l=(s("9f9d"),s("42ad"),s("2877")),c=Object(l["a"])(i,a,n,!1,null,"2a9ce6f4",null);t["default"]=c.exports},e1d3:function(e,t,s){}}]);