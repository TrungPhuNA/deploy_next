(window.webpackJsonp=window.webpackJsonp||[]).push([["1d8b"],{"5pKv":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,t,n){e.exports=n("uekQ")},Sc2W:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),s=n("6BQ9"),o=n.n(s),c=n("O40h"),u=n("0iUn"),i=n("sLSF"),l=n("MI3g"),p=n("a7VT"),d=n("Tit0"),f=n("E3bc"),m=n("YFqc"),h=n.n(m),g=n("q1tI"),v=n.n(g),E=n("nOHt"),w=n.n(E),x=n("m/Pd"),b=n.n(x),k=n("zgjP"),P=n.n(k),j=function(e){function t(){return Object(u.default)(this,t),Object(l.default)(this,Object(p.default)(t).apply(this,arguments))}return Object(d.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this;return v.a.createElement(f.a,null,v.a.createElement(b.a,null,v.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),v.a.createElement("title",null,"Đây là tran danh sách sản phẩm")),v.a.createElement("div",{className:"title"},v.a.createElement("h1",null,"Đây là trang danh sách sản phẩm"),v.a.createElement("div",{className:"product_list"},this.props.data.cards.map(function(e,t){return v.a.createElement("div",{key:t,className:"product_list_item"},v.a.createElement("div",{className:"product_avatar"},v.a.createElement("img",{src:e.imageUrl})),v.a.createElement("div",{className:"product_info"},v.a.createElement("h3",null,v.a.createElement(h.a,{href:"product/detail?id=".concat(e.id),as:"san-pham/".concat(e.id)},v.a.createElement("a",null,e.name))),v.a.createElement("p",null,e.artist)))}),v.a.createElement("button",{onClick:function(){return w.a.push("/product?page=".concat(e.props.page-1))},disabled:this.props.page<=1},"PREV"),v.a.createElement("p",null,"Đang ở page ",this.props.page),v.a.createElement("button",{onClick:function(){return w.a.push("/product?page=".concat(e.props.page+1))}},"NEXT"))))}}],[{key:"getInitialProps",value:function(){var e=Object(c.default)(a.a.mark(function e(t){var n,r,s,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=1,n.page&&o()(n.page)&&(r=n.page),e.next=5,P()("https://api.pokemontcg.io/v1/cards?pages=".concat(r,"&pageSize=12"));case 5:return s=e.sent,e.next=8,s.json();case 8:return c=e.sent,console.log(r),e.abrupt("return",{data:c,page:r});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(v.a.Component);t.default=j},XWtR:function(e,t,n){var r=n("5T2Y").parseInt,a=n("oc46").trim,s=n("5pKv"),o=/^[-+]?0[xX]/;e.exports=8!==r(s+"08")||22!==r(s+"0x16")?function(e,t){var n=a(String(e),3);return r(n,t>>>0||(o.test(n)?16:10))}:r},dEVD:function(e,t,n){var r=n("Y7ZC"),a=n("XWtR");r(r.G+r.F*(parseInt!=a),{parseInt:a})},fjR6:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){var e=n("Sc2W");return{page:e.default||e}}])},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,s=[],o=[],c={},u=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:u,headers:{keys:function(){return s},entries:function(){return o},get:function(e){return c[e.toLowerCase()]},has:function(e){return e.toLowerCase()in c}}}};for(var i in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){s.push(t=t.toLowerCase()),o.push([t,n]),c[t]=c[t]?c[t]+","+n:n}),n(u())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(i,t.headers[i]);a.send(t.body||null)})}},oc46:function(e,t,n){var r=n("Y7ZC"),a=n("Jes0"),s=n("KUxP"),o=n("5pKv"),c="["+o+"]",u=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),l=function(e,t,n){var a={},c=s(function(){return!!o[e]()||"​"!="​"[e]()}),u=a[e]=c?t(p):o[e];n&&(a[n]=u),r(r.P+r.F*c,"String",a)},p=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(i,"")),e};e.exports=l},uekQ:function(e,t,n){n("dEVD"),e.exports=n("WEpk").parseInt},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["fjR6","5d41","9da1"]]]);