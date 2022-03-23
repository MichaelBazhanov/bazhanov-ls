(window.webpackJsonp=window.webpackJsonp||[]).push([[7,13,17],{106:function(t,e,i){},120:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar-component",style:this.measures},[e("img",this._b({staticClass:"image",attrs:{alt:"user picture"}},"img",this.$attrs,!1))])};r._withStripped=!0;var n={props:{size:{type:String,default:"3"}},computed:{measures:function(){var t=Number(this.size);return{width:"".concat(t,"rem"),height:"".concat(t,"rem"),"min-width":"".concat(t,"rem"),"min-height":"".concat(t,"rem")}}}},s=(i(97),i(20)),a=Object(s.a)(n,r,[],!1,null,"3142f16f",null);a.options.__file="src/admin/components/avatar/avatar.vue";var o=a.exports},125:function(t,e,i){"use strict";i.r(e);var r=i(3),n=i.n(r),s=i(5),a=i.n(s);e.default={namespaced:!0,state:{data:[]},mutations:{SET_REVIEWS:function(t,e){return t.data=e},ADD_REVIEW:function(t,e){return t.data.unshift(e)},EDIT_REVIEW:function(t,e){t.data=t.data.map((function(t){return t.id==e.id?e:t}))},REMOVE_REVIEW:function(t,e){t.data=t.data.filter((function(t){return t.id!=e.id}))}},actions:{fetch:function(t){var e=this;return a()(n.a.mark((function i(){var r,s;return n.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,r=t.rootGetters["user/userId"],i.next=4,e.$axios.get("/reviews/".concat(r));case 4:(s=i.sent).data.forEach((function(t){t.photo=e.$axios.defaults.baseURL+"/"+t.photo})),t.commit("SET_REVIEWS",s.data.reverse()),i.next=12;break;case 9:i.prev=9,i.t0=i.catch(0),console.error(i.t0);case 12:case"end":return i.stop()}}),i,null,[[0,9]])})))()},add:function(t,e){var i=this;return a()(n.a.mark((function r(){var s,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=new FormData,Object.keys(e).forEach((function(t){s.append(t,e[t])})),r.prev=2,r.next=5,i.$axios.post("/reviews",s);case 5:(a=r.sent).data.photo=i.$axios.defaults.baseURL+"/"+a.data.photo,t.commit("ADD_REVIEW",a.data),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},edit:function(t,e){var i=this;return a()(n.a.mark((function r(){var s,a,o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=new FormData,Object.keys(e).forEach((function(t){s.append(t,e[t])})),r.prev=2,r.next=5,i.$axios.post("/reviews/".concat(e.id),s);case 5:a=r.sent,o=a.data,e.photo=i.$axios.defaults.baseURL+"/"+o.review.photo,t.commit("EDIT_REVIEW",e),r.next=14;break;case 11:throw r.prev=11,r.t0=r.catch(2),new Error(r.t0);case 14:case"end":return r.stop()}}),r,null,[[2,11]])})))()},remove:function(t,e){var i=this;return a()(n.a.mark((function r(){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.$axios.delete("/reviews/".concat(e.id));case 3:s=r.sent,s.data,t.commit("REMOVE_REVIEW",e),r.next=11;break;case 8:throw r.prev=8,r.t0=r.catch(0),new Error(error);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}}},134:function(t,e,i){"use strict";var r=i(106);i.n(r).a},153:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return g}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reviews-page-component"},[i("div",{staticClass:"page-content"},[i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.editNewReview||t.editOldReview?i("div",{staticClass:"review-edit"},[i("card",{attrs:{title:"Новый отзыв"}},[i("div",{staticClass:"review",attrs:{slot:"content"},slot:"content"},[i("div",{staticClass:"review-left review-item"},[i("dnd",{attrs:{imgSrc_:t.review.photo,not_dnd:"",errorMessage:t.validation.firstError("review.photo")},on:{onLoadFile:function(e){t.file=e},onLoadImg:function(e){t.review.photo=e},onError:function(e){return t.onError(e)}}})],1),t._v(" "),i("div",{staticClass:"review-right review-item"},[i("div",{staticClass:"review-inp-group"},[i("app-input",{staticClass:"review-inp",attrs:{title:"Имя автора",errorMessage:t.validation.firstError("review.author")},model:{value:t.review.author,callback:function(e){t.$set(t.review,"author",e)},expression:"review.author"}}),t._v(" "),i("app-input",{staticClass:"review-inp",attrs:{title:"Титул автора",errorMessage:t.validation.firstError("review.occ")},model:{value:t.review.occ,callback:function(e){t.$set(t.review,"occ",e)},expression:"review.occ"}})],1),t._v(" "),i("app-input",{staticClass:"review-area",attrs:{title:"Отзыв",fieldType:"textarea",errorMessage:t.validation.firstError("review.text")},model:{value:t.review.text,callback:function(e){t.$set(t.review,"text",e)},expression:"review.text"}}),t._v(" "),i("div",{staticClass:"review-btns"},[i("appButton",{attrs:{title:"Отмена",plain:""},on:{click:t.reviewNo}}),t._v(" "),i("appButton",{attrs:{title:"СОХРАНИТЬ"},on:{click:t.reviewYes}})],1)],1)])])],1):t._e()]),t._v(" "),i("div",{staticClass:"reviews"},[i("div",{staticClass:"reviews-wrap"},[i("div",{staticClass:"reviews-item"},[i("squareButton",{attrs:{type:"square",title:"Добавить работу"},on:{click:t.addReview}})],1)]),t._v(" "),t._l(t.reviews,(function(e){return i("div",{key:e.id,staticClass:"reviews-wrap"},[i("card",{staticClass:"reviews-item"},[i("div",{staticClass:"item-user",attrs:{slot:"title"},slot:"title"},[i("avatar",{staticClass:"item-img",attrs:{size:"3.4",src:e.photo}}),t._v(" "),i("div",{staticClass:"item-content"},[i("h2",{staticClass:"item-author"},[t._v(t._s(e.author))]),t._v(" "),i("h4",{staticClass:"item-occ"},[t._v(t._s(e.occ))])])],1),t._v(" "),i("div",{staticClass:"item-wrap",attrs:{slot:"content"},slot:"content"},[i("p",{staticClass:"item-text"},[t._v(t._s(e.text))]),t._v(" "),i("div",{staticClass:"item-btns"},[i("icon",{attrs:{title:"Править",symbol:"pencil"},on:{click:function(i){return t.editReview(e)}}}),t._v(" "),i("icon",{attrs:{title:"Удалить",symbol:"cross"},on:{click:function(i){return t.deleteReview(e)}}})],1)])])],1)}))],2)],1)])])};r._withStripped=!0;var n=i(3),s=i.n(n),a=i(5),o=i.n(a),c=i(9),u=i.n(c),v=i(95),l=i(121),d=i(87),p=i(96),w=i(88),f=i(89),h=i(120),m=i(45),_=i(7),b=i(125);function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach((function(e){u()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var E={mixins:[m.mixin],validators:{"review.author":function(t){return m.Validator.value(t).required("Введите имя автора!")},"review.occ":function(t){return m.Validator.value(t).required("Введите титул автора!")},"review.text":function(t){return m.Validator.value(t).required("Введите отзыв!")},"review.photo":function(t){return m.Validator.custom((function(){return!(t.length>0)}))}},components:{card:v.a,appButton:d.a,appInput:w.default,squareButton:p.default,icon:f.default,dnd:l.a,avatar:h.a},created:function(){this.$store.registerModule("reviews",b.default),this.fetchReviewsAction()},destroyed:function(){this.$store.unregisterModule("reviews")},computed:R({},Object(_.c)("reviews",{reviews:function(t){return t.data}})),data:function(){return{file:{},editNewReview:!1,editOldReview:!1,review:{photo:"",author:"",occ:"",text:""}}},methods:R(R({},Object(_.b)({showTooltip:"tooltips/show",fetchReviewsAction:"reviews/fetch",addReviewAction:"reviews/add",editReviewAction:"reviews/edit",removeReviewAction:"reviews/remove"})),{},{reviewYes:function(){var t=this;return o()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validate();case 2:if(e.t0=e.sent,0!=e.t0){e.next=5;break}return e.abrupt("return");case 5:if(!t.editNewReview){e.next=11;break}return t.editNewReview=!1,e.next=9,t.addReviewAction(R(R({},t.review),{},{photo:t.file}));case 9:t.file={},t.showTooltip({text:"Добавлен новый отзыв от ".concat(t.review.author),type:"success"});case 11:if(!t.editOldReview){e.next=17;break}return t.editOldReview=!1,e.next=15,t.editReviewAction(R(R({},t.review),{},{photo:t.file}));case 15:t.file={},t.showTooltip({text:"Изменен старый отзыв от ".concat(t.review.author),type:"success"});case 17:t.clearCurrentReview();case 18:case"end":return e.stop()}}),e)})))()},reviewNo:function(){this.editNewReview&&(this.editNewReview=!1,this.file={},this.showTooltip({text:"Отменено сохранение изменений в новом отзыве",type:"success"})),this.editOldReview&&(this.editOldReview=!1,this.file={},this.showTooltip({text:"Отменено сохранение изменений в старом отзыве",type:"success"})),this.clearCurrentReview()},addReview:function(){this.editNewReview=!0,this.clearCurrentReview()},editReview:function(t){this.editOldReview=!0,this.review=R({},t)},deleteReview:function(t){var e=this;return o()(s.a.mark((function i(){return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e.editNewReview=!1,e.editOldReview=!1,i.next=4,e.removeReviewAction(t);case 4:e.showTooltip({text:"Удаление отзыва автора ".concat(t.author),type:"success"}),e.clearCurrentReview();case 6:case"end":return i.stop()}}),i)})))()},onLoadFile:function(){},onLoadImg:function(){},clearCurrentReview:function(){var t=this;Object.keys(this.review).forEach((function(e){return t.review[e]=""}))},onError:function(t){this.showTooltip({text:"".concat(t.text),type:"".concat(t.type)})}})},y=(i(134),i(20)),C=Object(y.a)(E,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[this._v('Блок "Отзывы"')])])}],!1,null,"2c7c3bd3",null);C.options.__file="src/admin/pages/reviews/reviews.vue";var g=C.exports},84:function(t,e,i){},86:function(t,e,i){},89:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return o}));var r=function(){var t=this.$createElement;return(this._self._c||t)("button",this._g({class:["icon-component",this.iconClass,{grayscale:this.grayscale},{"no-words":!1==!!this.title}],attrs:{"data-text":this.title,type:"button"}},this.$listeners))};r._withStripped=!0;var n={props:{symbol:{type:String,default:"pencil",validator:function(t){return["pencil","cross","tick","trash"].includes(t)}},grayscale:{type:Boolean},title:{type:String,default:""}},computed:{iconClass:function(){return"is-".concat(this.symbol)}}},s=(i(92),i(20)),a=Object(s.a)(n,r,[],!1,null,"325d0eef",null);a.options.__file="src/admin/components/icon/icon.vue";var o=a.exports},90:function(t,e,i){},92:function(t,e,i){"use strict";var r=i(84);i.n(r).a},94:function(t,e,i){"use strict";var r=i(86);i.n(r).a},96:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return o}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("button",this._g({staticClass:"square-btn-component",attrs:{type:"button"}},this.$listeners),[e("div",{staticClass:"text"},[e("div",{staticClass:"sign"}),this._v(" "),e("div",{staticClass:"title"},[this._v(this._s(this.title))])])])};r._withStripped=!0;var n={props:{title:{type:String,default:"Добавить работу"}}},s=(i(94),i(20)),a=Object(s.a)(n,r,[],!1,null,"00e96a68",null);a.options.__file="src/admin/components/button/types/squareBtn/squareBtn.vue";var o=a.exports},97:function(t,e,i){"use strict";var r=i(90);i.n(r).a}}]);