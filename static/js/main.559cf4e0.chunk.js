(this["webpackJsonpanime-quote"]=this["webpackJsonpanime-quote"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),l=a.n(n),i=(a(12),a(2)),r=(a(13),a(0)),o=function(e){var t=Object(c.useState)(null),a=Object(i.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),d=o[0],b=o[1],j=Object(c.useState)([]),h=Object(i.a)(j,2),u=h[0],x=h[1],m=Object(c.useState)("https://animechan.vercel.app/api/quotes"),p=Object(i.a)(m,2),O=p[0],g=p[1];return Object(c.useEffect)((function(){""===e.link?g("https://animechan.vercel.app/api/quotes"):g("https://animechan.vercel.app/api/quotes/anime?title=".concat(e.link)),console.log(O),fetch(O).then((function(e){return e.json()})).then((function(e){b(!0),x(e)}),(function(e){b(!0),n(e)}))}),[e,O]),s?Object(r.jsxs)("div",{children:["Error: ",s.message]}):d?Object(r.jsx)("ul",{children:Object(r.jsx)("div",{class:"container",children:Object(r.jsx)("div",{id:"rower",class:"row gy-3 justify-content-around",children:u.map((function(e){return Object(r.jsx)("div",{class:"p-2 card text-danger text-opacity-75 border-danger col-lg-3\r col-md-4\r col-sm-6\r col-xs-12","data-aos":"flip-right","data-aos-easing":"ease-out-cubic",children:Object(r.jsxs)("div",{class:"card-body",children:[Object(r.jsx)("h4",{class:"card-title text-center mb-2 ",children:e.character}),Object(r.jsx)("h6",{class:"card-subtitle mb-4 text-center",children:Object(r.jsx)("small",{children:e.anime})}),Object(r.jsx)("hr",{}),Object(r.jsx)("cite",{class:"card-text mb-5",children:e.quote})]})})}))})})}):Object(r.jsx)("div",{children:"Loading..."})},d=function(){return Object(r.jsx)("div",{class:"modal fade",id:"modalabout",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(r.jsx)("div",{class:"modal-dialog",children:Object(r.jsxs)("div",{class:"modal-content",children:[Object(r.jsxs)("div",{class:"modal-header",children:[Object(r.jsx)("h5",{class:"modal-title text-danger text-opacity-75",id:"exampleModalLabel",children:"About"}),Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsxs)("div",{class:"modal-body text-danger text-opacity-75",children:["This web is for you who want get some motivation in the life from anime. ",Object(r.jsx)("br",{})," The quotes get from"," ",Object(r.jsx)("a",{href:"https://animechan.vercel.app/guide",children:"animechan"})," ",Object(r.jsx)("br",{}),"Wallpaper from"," ",Object(r.jsx)("a",{href:"https://pngtree.com/free-backgrounds",children:"free background photos from pngtree.com"})," ",Object(r.jsx)("br",{}),"Chino and Her friend wallpaper from"," ",Object(r.jsx)("a",{href:"https://gochiusa.com/bloom/",children:"Gochiusa"})," ",Object(r.jsx)("br",{}),"I hope you enjoy it ",Object(r.jsx)("br",{}),"\uff3c(\uff3e\u25bd\uff3e)\uff0f"]})]})})})},b=function(){return Object(r.jsx)("div",{class:"modal fade",id:"modalteam",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(r.jsx)("div",{class:"modal-dialog",children:Object(r.jsxs)("div",{class:"modal-content",children:[Object(r.jsxs)("div",{class:"modal-header",children:[Object(r.jsx)("h5",{class:"modal-title text-danger text-opacity-75",id:"exampleModalLabel",children:"Team"}),Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsxs)("div",{class:"modal-body text-danger text-opacity-75",children:["Just ",Object(r.jsx)("b",{children:"M. Zhafran Bahij"})," and his inner self. (\u14c0 \u14c0)"]})]})})})},j=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),s=a[0],n=a[1];return Object(r.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-danger bg-opacity-50",children:Object(r.jsxs)("div",{class:"container-fluid",children:[Object(r.jsx)("a",{class:"navbar-brand",href:"#",children:"QuoteNime"}),Object(r.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{class:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:[Object(r.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{class:"nav-link",href:"#","data-bs-toggle":"modal","data-bs-target":"#modalabout",children:"About"})}),Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{class:"nav-link",href:"#","data-bs-toggle":"modal","data-bs-target":"#modalteam",children:"Team"})})]}),Object(r.jsxs)("form",{class:"d-flex",onSubmit:function(t){t.preventDefault(),e.addLink(s.replace(" ","%20"))},children:[Object(r.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"anime title","aria-label":"Search",onChange:function(e){n(e.target.value)},value:s}),Object(r.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})},h=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{addLink:e.addLink}),Object(r.jsx)(d,{}),Object(r.jsx)(b,{})]})},u=[{name:"Chino",img:a.p+"static/media/Chinochan.3697f49c.jpg",call:"Welcome Back, Master!",call2:"I hope you have more energy to do some work today",class:"carousel-item active"},{name:"Rize",img:a.p+"static/media/Rizesan.484ae56b.jpg",call:"Are You Tired, Master?",call2:"There are more quotes below this picture",class:"carousel-item"},{name:"Syaro",img:a.p+"static/media/Syaro.0b9bd234.jpg",call:"Wink!",call2:"Do you need more sweet thing?",class:"carousel-item"}],x=function(){return Object(r.jsxs)("div",{id:"carouselExampleControls",class:"carousel slide carousel-fade mb-5","data-bs-ride":"carousel",children:[Object(r.jsx)("div",{class:"carousel-inner",children:u.map((function(e){return Object(r.jsxs)("div",{class:e.class,children:[Object(r.jsx)("img",{src:e.img,class:"d-block w-100",alt:e.name}),Object(r.jsxs)("div",{class:"carousel-caption d-none d-sm-block bg-danger bg-opacity-75",children:[Object(r.jsx)("h5",{children:e.call}),Object(r.jsx)("p",{children:e.call2})]})]})}))}),Object(r.jsxs)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[Object(r.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(r.jsx)("span",{class:"visually-hidden",children:"Previous"})]}),Object(r.jsxs)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[Object(r.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(r.jsx)("span",{class:"visually-hidden",children:"Next"})]})]})},m=function(){return Object(r.jsx)("footer",{class:"mt-5 bg-danger bg-opacity-50 text-white text-opacity-75",children:Object(r.jsx)("div",{class:"container",children:"Created by Zhafran Bahij"})})},p=function(){var e=Object(c.useState)("https://animechan.vercel.app/api/quotes"),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),l=Object(i.a)(n,2),d=l[0],b=l[1];return Object(c.useEffect)((function(){s(""===d?"https://animechan.vercel.app/api/quotes":"https://animechan.vercel.app/api/quotes/anime?title=".concat(d))}),[d,a]),Object(r.jsxs)("div",{children:[Object(r.jsx)(h,{addLink:function(e){b(e)}}),Object(r.jsx)(x,{}),Object(r.jsx)(o,{link:d}),Object(r.jsx)(m,{})]})};var O=function(){return Object(r.jsx)(p,{})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};a(15),a(37);l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),g()}},[[38,1,2]]]);
//# sourceMappingURL=main.559cf4e0.chunk.js.map