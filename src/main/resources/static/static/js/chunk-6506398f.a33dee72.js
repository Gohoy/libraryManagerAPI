(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6506398f"],{"579d":function(e,t,a){},6724:function(e,t,a){"use strict";a("8d41");var r="@@wavesContext";function n(e,t){function a(a){var r=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),i=n.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var l=i.getBoundingClientRect(),s=i.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(l.width,l.height)+"px",i.appendChild(s)),n.type){case"center":s.style.top=l.height/2-s.offsetHeight/2+"px",s.style.left=l.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-l.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-l.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=n.color,s.className="waves-ripple z-active",!1}}return e[r]?e[r].removeHandle=a:e[r]={removeHandle:a},a}var i={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[r].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[r].removeHandle,!1),e[r]=null,delete e[r]}},l=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(l)),i.install=l;t["a"]=i},"81d8":function(e,t,a){"use strict";a("579d")},"8d41":function(e,t,a){},a434:function(e,t,a){"use strict";var r=a("23e7"),n=a("23cb"),i=a("a691"),l=a("50c4"),s=a("7b0b"),o=a("65f0"),c=a("8418"),u=a("1dde"),m=a("ae40"),d=u("splice"),p=m("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!p},{splice:function(e,t){var a,r,u,m,d,p,y=s(this),v=l(y.length),w=n(e,v),x=arguments.length;if(0===x?a=r=0:1===x?(a=0,r=v-w):(a=x-2,r=h(f(i(t),0),v-w)),v+a-r>g)throw TypeError(b);for(u=o(y,r),m=0;m<r;m++)d=w+m,d in y&&c(u,m,y[d]);if(u.length=r,a<r){for(m=w;m<v-r;m++)d=m+r,p=m+a,d in y?y[p]=y[d]:delete y[p];for(m=v;m>v-r+a;m--)delete y[m-1]}else if(a>r)for(m=v-r;m>w;m--)d=m+r-1,p=m+a-1,d in y?y[p]=y[d]:delete y[p];for(m=0;m<a;m++)y[m+w]=arguments[m+2];return y.length=v-r+a,u}})},e382:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"15px"}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"username"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}}),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" search ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleShowAll}},[e._v(" listAll ")]),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" addUser ")])],1),a("el-dialog",{attrs:{title:e.formTitle,visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"username",prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"password",prop:"userpassword"}},[a("el-input",{model:{value:e.form.userpassword,callback:function(t){e.$set(e.form,"userpassword",t)},expression:"form.userpassword"}})],1),a("el-form-item",{attrs:{label:"role",prop:"isadmin"}},[a("el-radio",{attrs:{label:1},model:{value:e.form.isadmin,callback:function(t){e.$set(e.form,"isadmin",t)},expression:"form.isadmin"}},[e._v("admin")]),a("el-radio",{attrs:{label:0},model:{value:e.form.isadmin,callback:function(t){e.$set(e.form,"isadmin",t)},expression:"form.isadmin"}},[e._v("user")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("confirm")])],1)],1),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",type:"selection",width:"55"}}),a("el-table-column",{attrs:{fixed:"",prop:"userid",label:"id",width:"100"}}),a("el-table-column",{attrs:{prop:"username",label:"username","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"userpassword",label:"password","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"role","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.isadmin?a("el-tag",{attrs:{type:"warning"}},[e._v("admin")]):a("el-tag",{attrs:{type:"success"}},[e._v("user")])]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"action",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.handleDelete(t.row,t.$index)}}},[e._v("delete")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"15px"},attrs:{background:"","current-page":e.queryParam.page,"page-sizes":[5,10,20,50],"page-size":e.queryParam.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.recordTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.queryParam,"page",t)},"update:current-page":function(t){return e.$set(e.queryParam,"page",t)}}})],1)},n=[],i=a("5530"),l=(a("a434"),a("2f62")),s=a("6724"),o=a("c24f"),c={name:"Bookinfo",directives:{waves:s["a"]},created:function(){var e=this;Object(o["i"])(this.queryParam).then((function(t){console.log("首页数据获取成功",t),e.tableData=t.data,e.recordTotal=t.count}))},methods:{handleSizeChange:function(e){var t=this,a=this.queryParam;a.limit=e,Object(o["i"])(a).then((function(e){console.log("分页数据获取成功",e),t.tableData=e.data,t.recordTotal=e.count}))},handleCurrentChange:function(e){var t=this,a=this.queryParam;a.page=e,Object(o["i"])(a).then((function(e){console.log("分页数据获取成功",e),t.tableData=e.data,t.recordTotal=e.count}))},handleFilter:function(){var e=this;this.queryParam.page=1,Object(o["i"])(this.queryParam).then((function(t){0===t.code&&(e.tableData=t.data,e.recordTotal=t.count)}))},handleShowAll:function(){var e=this;this.queryParam.page=1,this.queryParam.username=null,Object(o["i"])(this.queryParam).then((function(t){0===t.code&&(e.tableData=t.data,e.recordTotal=t.count)}))},handleCreate:function(){this.formType=0,this.form={userid:null,username:"王鹏",userpassword:"123456",isadmin:1},this.dialogFormVisible=!0},handleUpdate:function(e){this.formType=1,this.form={userid:e.userid,username:e.username,userpassword:e.userpassword,isadmin:e.isadmin},this.dialogFormVisible=!0},submitForm:function(){var e=this;0===this.formType?Object(o["a"])(this.form).then((function(t){1===t?(e.$message.success("添加记录成功"),Object(o["d"])().then((function(t){e.recordTotal=t,e.queryParam.page=Math.ceil(e.recordTotal/e.queryParam.limit),e.handleCurrentChange(e.queryParam.page)}))):e.$message.error("添加记录失败"),e.dialogFormVisible=!1})):1===this.formType&&Object(o["k"])(this.form).then((function(t){1===t?(e.$message.success("更新记录成功"),e.handleCurrentChange(e.queryParam.page)):e.$message.error("更新记录失败"),e.dialogFormVisible=!1}))},handleDelete:function(e,t){var a=this;this.$confirm("确定要删除该条记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["b"])(e).then((function(e){1===e?(a.$message.success("删除记录成功"),a.tableData.splice(t,1),0===a.tableData.length&&(a.queryParam.page=a.queryParam.page-1,a.handleCurrentChange(a.queryParam.page))):a.$message.error("删除记录失败")}))}))},handleDeleteSome:function(){var e=this;this.$confirm("确定要删除这些记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=e.$refs.multipleTable.selection;Object(o["c"])(t).then((function(t){t>0?(e.$message.success("删除"+t+"条记录成功"),e.tableData.length===t&&0!==e.queryParam.page&&(e.queryParam.page=e.queryParam.page-1),e.handleCurrentChange(e.queryParam.page)):e.$message.error("删除记录失败")}))}))}},data:function(){return{tableData:[],recordTotal:0,queryParam:{page:1,limit:10,username:null},dialogFormVisible:!1,formType:0,form:{userid:null,username:"",userpassword:"",isadmin:1},rules:{username:[{required:!0,message:"please input username",trigger:"blur"}],userpassword:[{required:!0,message:"please input password",trigger:"blur"}]}}},computed:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["id","name","roles"])),{},{formTitle:function(){return 0===this.formType?"添加记录":"修改记录"}})},u=c,m=(a("81d8"),a("2877")),d=Object(m["a"])(u,r,n,!1,null,"12588a86",null);t["default"]=d.exports}}]);