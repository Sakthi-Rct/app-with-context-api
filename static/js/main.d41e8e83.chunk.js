(this["webpackJsonpapp-with-context-api"]=this["webpackJsonpapp-with-context-api"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),r=n.n(i),s=(n(12),n(13),n(2)),j=n(0),o=Object(c.createContext)(),u=function(e){var t=Object(c.useState)([{name:"Harry Potter",price:"10",id:12351},{name:"Game of Thrones",price:"12",id:12352},{name:"Inception",price:"15",id:12354}]),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(j.jsx)(o.Provider,{value:[a,i],children:e.children})};var b=function(){var e=Object(c.useContext)(o),t=Object(s.a)(e,2),n=t[0];return t[1],Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{className:"header__container",children:Object(j.jsxs)("div",{className:"header__wrap",children:[Object(j.jsx)("h1",{children:"Pico Zen Movies"}),Object(j.jsxs)("p",{children:["List of Movies: ",n.length]})]})})})};var d=function(e){var t=e.name,n=e.price;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsxs)("p",{children:[n,"$"]})]})};var O=function(){var e=Object(c.useContext)(o),t=Object(s.a)(e,2),n=t[0];return t[1],Object(j.jsx)("div",{className:"movieList",children:n.map((function(e){return Object(j.jsx)(d,{name:e.name,price:e.price},e.id)}))})},l=n(7);var h=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),u=r[0],b=r[1],d=Object(c.useContext)(o),O=Object(s.a)(d,2),h=(O[0],O[1]);return Object(j.jsx)("div",{className:"addMovies",children:Object(j.jsxs)("form",{className:"addMovies__form",onSubmit:function(e){e.preventDefault(),h((function(e){return[].concat(Object(l.a)(e),[{name:n,price:u}])}))},children:[Object(j.jsx)("input",{type:"text",name:"name",value:n,onChange:function(e){a(e.target.value)}}),Object(j.jsx)("input",{type:"text",name:"price",value:u,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("button",{children:"Submit"})]})})};var p=function(){return Object(j.jsx)(u,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(h,{}),Object(j.jsx)(O,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.d41e8e83.chunk.js.map