(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c17b1dc"],{"2ffa":function(n,t,i){},"766e":function(n,t,i){n.exports=i.p+"img/livebanner.9d32afff.jpg"},"8d67":function(n,t,i){"use strict";var e=i("2ffa"),a=i.n(e);a.a},"9d10":function(n,t,i){"use strict";i.r(t);var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"live"},[i("div",{staticClass:"banner"},[i("div",{staticClass:"banner_wh"},[i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},n._l(n.dataBanner,function(n,t){return i("div",{key:t,staticClass:"swiper-slide"},[i("img",{attrs:{src:n.imgUrl,alt:""}})])}),0),i("div",{staticClass:"swiper-pagination"})])])]),i("div",{staticClass:"inner"},[i("div",{staticClass:"inner_wh"},n._l(n.dataList,function(t,e){return i("div",{key:e,staticClass:"innerimg"},[i("img",{attrs:{src:"/img/fishing/"+t.name+".png"}}),i("div",{staticClass:"modal"}),i("button",{on:{click:function(i){return n.openGame(t)}}},[n._v(n._s(t.text))])])}),0)])])},a=[],s=i("41d6"),r=i("b421"),o={name:"fish",data:function(){return{type:"fish",elHight:document.documentElement.clientHeight}},computed:{dataList:function(){return this.currentGame.list},currentGame:function(){return r["a"][this.type]},dataBanner:function(){return this.currentGame.banner}},mounted:function(){var n=this;window.onresize=function(){n.elHight=document.documentElement.clientHeight}},methods:{openGame:function(n){r["a"].loginGame(n)}}},c={name:"Fish",mixins:[o],data:function(){return{swiper:[{img:i("766e")},{img:i("766e")},{img:i("766e")}]}},mounted:function(){},methods:{initswiper:function(){new s["a"](".swiper-container",{direction:"horizontal",loop:!0,loopFillGroupWithBlank:!0,observer:!0,observeParents:!0,paginationClickable:!0,pagination:{el:".swiper-pagination"},autoplay:{disableOnInteraction:!1},navigation:{nextEl:".video_left",prevEl:".video_right"},autoplayDisableOnInteraction:!0})}}},l=c,u=(i("8d67"),i("2877")),d=Object(u["a"])(l,e,a,!1,null,"4e367579",null);t["default"]=d.exports}}]);