(this["webpackJsonpre-go"]=this["webpackJsonpre-go"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(8),a=r.n(s),o=(r(14),r(2)),i=r(3),j=r(5),l=r(4),b=r.p+"static/media/gopher.3d30abfb.jpg",u=r(0),d=function(e){Object(j.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:this.props.title}),Object(u.jsx)("img",{src:b,alt:"golang-gopher"}),Object(u.jsxs)("p",{className:"credit",children:["work in progress:"," ",Object(u.jsx)("a",{href:"https://twitter.com/imcdt",target:"_blank",rel:"noreferrer",children:"me"})," ","|"," ",Object(u.jsx)("a",{href:"https://github.com/christiandavidturner/Go-News-Aggregator",target:"_blank",rel:"noreferrer",children:"repo"})]})]})}}]),r}(n.a.Component),h=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("svg",{width:"100%",height:"200px",fill:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsxs)("linearGradient",{id:"grad1",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Object(u.jsx)("stop",{offset:"100%",stopColor:"#6eb6e5"}),Object(u.jsx)("stop",{offset:"100%",stopColor:"#6eb6e5"}),Object(u.jsx)("stop",{offset:"100%",stopColor:"#6eb6e5"})]}),Object(u.jsx)("path",{fill:"url(#grad1)",d:" M0 67 C 273,183 822,-40 1920.00,106  V 359  H 0  V 67 Z",children:Object(u.jsx)("animate",{repeatCount:"indefinite",fill:"url(#grad1)",attributeName:"d",dur:"50s",attributeType:"XML",values:" M0 77  C 473,283 822,-40 1920,116  V 359  H 0  V 67  Z;  M0 77  C 473,-40 1222,283 1920,136  V 359  H 0  V 67  Z;  M0 77  C 973,260 1722,-53 1920,120  V 359  H 0  V 67  Z;  M0 77  C 473,283 822,-40 1920,116  V 359  H 0  V 67  Z "})})]})})},p=r(7),O=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("li",{className:"story-title",children:e.title}),Object(u.jsx)("li",{className:"story-body",children:e.category})]})},f=r(9),g=r.n(f),x=function(e){var t=e.type,r=e.color;return Object(u.jsx)(g.a,{type:t,color:r,height:667,width:150,className:"loading"})};function m(){var e=Object(c.useState)(null),t=Object(p.a)(e,2),r=t[0],n=(t[1],Object(c.useState)(null)),s=Object(p.a)(n,2),a=s[0],o=s[1];return Object(c.useEffect)((function(){fetch("https://api.mediastack.com/v1/news?languages=en&access_key=09b9953aea9691c46007f0daa2be4fa4").then((function(e){return e.json()})).then((function(e){setTimeout((function(){return o(e)}),2e3),console.log("Success ",e)})).catch((function(e){console.log("Error",e)}))}),[]),r?Object(u.jsxs)("div",{children:["Error: ",r.message]}):a?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{className:"stories",children:a.data.map((function(e){return Object(u.jsx)(O,{title:e.title,category:e.category})}))})}):Object(u.jsx)(x,{type:"cylon",color:"#6eb6e5"})}r(16);var y=function(e){Object(j.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{title:"Golang News Aggregator"}),Object(u.jsx)(h,{}),Object(u.jsx)(m,{})]})}}]),r}(n.a.Component);a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2e392596.chunk.js.map