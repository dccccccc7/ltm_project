(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-471e6a7b"],{"1bab":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("d3b7");var n=a("bc3a"),i=a.n(n);function r(t){return new Promise((function(e,a){var n=i.a.create({timeout:3e3});n(t).then((function(t){e(t)})).catch((function(t){a(t)}))}))}},dcef:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%",height:"80%"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{id:"theMainTable",data:t.tableData,"highlight-current-row":"",stripe:""}},[a("el-table-column",{attrs:{prop:"verify",label:"申请类型"}}),a("el-table-column",{attrs:{prop:"created_time",label:"申请时间"}}),a("el-table-column",{attrs:{prop:"created_by",label:"申请人"}}),a("el-table-column",{attrs:{prop:"workshop_id",label:"车间编号"}}),a("el-table-column",{attrs:{prop:"line_id",label:"产线编号"}}),a("el-table-column",{attrs:{fixed:"right",label:"查看详情",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:{path:"/work/apply/info",query:{type:e.row.verify,workshop_id:e.row.workshop_id,line_id:e.row.line_id,id:null}}}},[a("el-button",{staticStyle:{padding:"8px"},attrs:{type:"text"}},[t._v("查看")])],1)]}}])})],1),a("div",{staticClass:"block",staticStyle:{padding:"10px"}},[a("el-pagination",{attrs:{"hide-on-single-page":!0,total:t.total,background:"",layout:"total,prev, pager, next, jumper","page-size":t.page.pages},on:{"prev-click":t.preclick,"next-click":t.nextclick,"current-change":t.curChange}})],1)],1)},i=[],r=a("1bab"),l={name:"applyLine",data:function(){return{loading:!1,page:{pages:15,current:1},tableData:[],total:1}},created:function(){this.getData()},activated:function(){this.$router.push(this.path)},beforeRouteLeave:function(t,e,a){this.path=this.$route.path,a()},methods:{getData:function(){var t=this;console.log(this.page.current);var e={current:this.page.current,pages:this.page.pages};Object(r["a"])({url:"line/applyLine",method:"get",params:e}).then((function(e){t.total=e.data.result.total,t.tableData=e.data.result.records})).catch((function(t){}))},preclick:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},nextclick:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},curChange:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)}}},o=l,c=a("2877"),u=Object(c["a"])(o,n,i,!1,null,"45655f5f",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-471e6a7b.a041e896.js.map