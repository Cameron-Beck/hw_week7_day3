(function(t){function e(e){for(var r,c,i=e[0],l=e[1],s=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);a&&a(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var a=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",[t._v("Countries List")]),n("countries-list",{attrs:{countries:t.countries}}),n("country-detail",{attrs:{country:t.selectedCountry}})],1)},u=[],c=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.countries,(function(t,e){return n("list-item",{key:e,attrs:{country:t}})})),1)}),i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{on:{click:t.handleClick}},[t._v(t._s(t.country.name))])},s=[],a={name:"list-item",props:["country"],methods:{handleClick:function(){S.$emit("country-selected",this.country)}}},p=a,f=n("2877"),d=Object(f["a"])(p,l,s,!1,null,"c503e404",null),y=d.exports,h={name:"countries-list",props:["countries"],components:{"list-item":y}},v=h,b=Object(f["a"])(v,c,i,!1,null,"45ebaa27",null),m=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.country?n("div",{},[n("h3",[t._v(t._s(t.country.name))]),n("p",[t._v(t._s(t.country.capital))]),n("img",{attrs:{src:t.country.flag,alt:""}})]):t._e()},O=[],g={name:"country-detail",props:["country"]},j=g,w=Object(f["a"])(j,_,O,!1,null,"3cdc71b6",null),x=w.exports,k={name:"app",data:function(){return{countries:[],selectedCountry:null}},mounted:function(){var t=this;fetch("https://restcountries.eu/rest/v2/all").then((function(t){return t.json()})).then((function(e){return t.countries=e})),S.$on("country-selected",(function(e){t.selectedCountry=e}))},components:{"countries-list":m,"country-detail":x}},P=k,$=Object(f["a"])(P,o,u,!1,null,"d38f13e8",null),C=$.exports;n.d(e,"eventBus",(function(){return S}));var S=new r["a"];r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.a009b9e4.js.map