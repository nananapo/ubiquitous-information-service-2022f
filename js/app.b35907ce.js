(function(t){function n(n){for(var o,u,a=n[0],i=n[1],s=n[2],l=0,f=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);p&&p(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],o=!0,a=1;a<e.length;a++){var i=e[a];0!==r[i]&&(o=!1)}o&&(c.splice(n--,1),t=u(u.s=e[0]))}return t}var o={},r={app:0},c=[];function u(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=o,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)u.d(e,o,function(n){return t[n]}.bind(null,o));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var p=i;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0493":function(t,n,e){"use strict";e("0f3a")},"0f3a":function(t,n,e){},5551:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var o=e("2b0e"),r=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("Counter")],1)},c=[],u=function(){var t=this,n=t._self._c;return n("div",{staticClass:"hello"},[n("div",[t._v(t._s(t.count))]),n("button",{on:{click:t.countup}},[t._v("増やす")]),n("button",{on:{click:t.countdown}},[t._v("減らす")])])},a=[],i=e("7c01"),s={name:"Counter",data(){return{count:0}},methods:{countup:function(){const t=Object(i["a"])(),n=Object(i["c"])(t,"counter");Object(i["d"])(n,this.count+1)},countdown:function(){const t=Object(i["a"])(),n=Object(i["c"])(t,"counter");Object(i["d"])(n,this.count-1)}},mounted:function(){const t=Object(i["a"])(),n=Object(i["c"])(t,"counter");Object(i["b"])(n,t=>{const n=t.val();this.count=n})}},p=s,l=(e("0493"),e("2877")),f=Object(l["a"])(p,u,a,!1,null,"4c1c9e81",null),d=f.exports,b={name:"App",components:{Counter:d}},v=b,h=(e("58dc"),Object(l["a"])(v,r,c,!1,null,null,null)),O=h.exports,j=e("bc7b");o["a"].config.productionTip=!1;const y={apiKey:"AIzaSyBMsA945bwuLITrAoDDQ2s8VinB5lXuaFM",authDomain:"uniq-soft.firebaseapp.com",databaseURL:"https://uniq-soft-default-rtdb.firebaseio.com",projectId:"uniq-soft",storageBucket:"uniq-soft.appspot.com",messagingSenderId:"582485444700",appId:"1:582485444700:web:be5a6735979a57d5c7be99"};Object(j["a"])(y),new o["a"]({render:t=>t(O)}).$mount("#app")},"58dc":function(t,n,e){"use strict";e("5551")}});
//# sourceMappingURL=app.b35907ce.js.map