(this["webpackJsonpfirst-tast-api-img"]=this["webpackJsonpfirst-tast-api-img"]||[]).push([[0],{60:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),s=c(28),r=c.n(s),i=c(9),o=c(10),j=c.n(o),l=c(12),u=c(14),d=c(13),p=c.n(d),h=c(1),b=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],a=e[1];function s(){return(s=Object(l.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://jsonplaceholder.typicode.com/albums");case 2:e=t.sent,a(e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()})),Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("h1",{children:"Image Gallery"}),Object(h.jsx)("div",{className:"container",children:c.map((function(t){return Object(h.jsx)("div",{className:"col-2",children:Object(h.jsx)(i.b,{to:"/imageshow/".concat(t.id),children:t.title})})}))})]})},m=(c(59),c(60),c(2)),f=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],a=e[1],s=Object(m.f)().id;function r(){return(r=Object(l.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://jsonplaceholder.typicode.com/photos?albumId=".concat(s));case 2:e=t.sent,a(e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){r.apply(this,arguments)}()})),Object(h.jsxs)("div",{className:"container p-4",children:[Object(h.jsx)("h1",{children:"Images"}),Object(h.jsx)("div",{className:"row",children:c.map((function(t){return Object(h.jsx)("img",{src:t.url,alt:t.title,className:"col-sm-6 col-md-4 col-lg-3 mt-2"})}))})]})};var O=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{exact:!0,path:"/",component:b}),Object(h.jsx)(m.a,{path:"/imageshow/:id",component:f})]})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(O,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.e1e4bb3b.chunk.js.map