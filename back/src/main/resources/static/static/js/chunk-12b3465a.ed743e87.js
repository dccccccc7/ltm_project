(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12b3465a"],{4791:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a("d3b7"),a("4f6c");var n=a("bc3a"),o=a.n(n);function l(t){return new Promise((function(e,a){var n=o.a.create({timeout:45e3});n(t).then((function(t){console.log("成功"),e(t)})).catch((function(t){console.log("失败"),a(t)}))}))}},"4f6c":function(t,e,a){"use strict"},"794a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"30px"}},[[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"workshop_id",label:"车间编号"}}),a("el-table-column",{attrs:{prop:"goods_id",label:"物品编号"}}),a("el-table-column",{attrs:{prop:"goods_name",label:"物品名称"}}),a("el-table-column",{attrs:{prop:"quantity",label:"申请数量"}}),a("el-table-column",{attrs:{prop:"created_time",label:"申请时间"}}),a("el-table-column",{attrs:{prop:"created_by",label:"申请人"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[""===e.row.location|null===e.row.location?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.searchQuantity(e.$index,e.row)}}},[t._v("查询库存")]):a("el-button",{attrs:{disabled:e.row.location<e.row.quantity,type:"text",size:"small"},on:{click:function(a){return t.inOutApply(e.$index,e.row)}}},[t._v("出库申请")])]}}])}),a("el-table-column",{staticStyle:{width:"1px"},attrs:{fixed:"right",prop:"location",label:"库存数量"}})],1)],a("div",{staticClass:"block",staticStyle:{padding:"10px","margin-top":"10px"}},[a("el-pagination",{attrs:{"hide-on-single-page":!0,total:t.total,background:"",layout:"total,prev, pager, next, jumper","page-size":t.page.pages},on:{"prev-click":t.preclick,"next-click":t.nextclick,"current-change":t.curChange}})],1)],2)},o=[],l=a("4791"),r={name:"itemRequest",data:function(){return{enough:!0,input:"",tableData:[],loading:!1,total:1,page:{pages:13,current:1}}},created:function(){this.getData()},methods:{preclick:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},nextclick:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},curChange:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},getData:function(){var t=this,e={current:this.page.current,pages:this.page.pages};Object(l["a"])({url:"goods/applyItem",method:"get",params:e}).then((function(e){console.log(e),!0===e.data.success?(t.tableData=e.data.result.records,t.total=e.data.result.total):t.$message.error("查询异常")})).catch((function(e){console.log("请求数据getdata的返回值err:",e),t.$message.error("服务器异常")}))},searchQuantity:function(t,e){var a=this,n={good_id:e.goods_id,type:e.types};console.log("查询数量的req:",n),Object(l["a"])({url:"goods/searchQuantity",params:n,method:"get"}).then((function(e){console.log("给我卡卡库存数量:",e),!0===e.data.success?(a.tableData[t].location=e.data.result,console.log(a.tableData)):a.$message.error("查询失败")})).catch((function(t){a.$message.error("服务器异常")}))},inOutApply:function(t,e){var a=this,n={uuid:e.uuid,user:this.$store.getters.userinfo.id};console.log("申请出库的req",n),Object(l["a"])({url:"goods/setApply",params:n,method:"get"}).then((function(t){console.log("发出出库申请的res",t),!0===t.data.success?a.$message({type:"success",message:"申请成功"}):a.$message.error("申请失败")})).catch((function(t){a.$message.error("服务器异常")}))}}},c=r,s=(a("7c26"),a("2877")),i=Object(s["a"])(c,n,o,!1,null,"7595bd9f",null);e["default"]=i.exports},"7c26":function(t,e,a){"use strict";var n=a("cde8"),o=a.n(n);o.a},cde8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-12b3465a.ed743e87.js.map