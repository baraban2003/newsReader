"use strict";(self.webpackChunknewsReader=self.webpackChunknewsReader||[]).push([[710],{710:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var n,i,a=r(439),s=r(791),l="NewsItemList_list__kxEoh",o="NewsItemList_listItem__vdsdG",c=r(457),u=r(87),d=r(689),h={imageBox:"NewsItemSmall_imageBox__-fv7u",li:"NewsItemSmall_li__WeJT-"},m=["title","titleId"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function x(e,t){var r=e.title,a=e.titleId,l=f(e,m);return s.createElement("svg",p({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),r?s.createElement("title",{id:a},r):null,n||(n=s.createElement("g",{opacity:.6,clipPath:"url(#clip0_466_269)"},s.createElement("path",{d:"M12 2.66675H3.99998C2.52722 2.66675 1.33331 3.86066 1.33331 5.33341V12.0001C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12.0001V5.33341C14.6666 3.86066 13.4727 2.66675 12 2.66675Z",stroke:"#363636",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M5.33331 1.33337V4.00004",stroke:"#363636",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M10.6666 1.33337V4.00004",stroke:"#363636",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M1.33331 6.66675H14.6666",stroke:"#363636",strokeLinecap:"round",strokeLinejoin:"round"}))),i||(i=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_466_269"},s.createElement("rect",{width:16,height:16,fill:"white"})))))}var j=s.forwardRef(x),v=(r.p,r(603)),_=r(184);function g(e){var t=e.img,r=e.title,n=e.date,i=e.description,a=e.id,s=e.alt,l=(0,d.TH)(),o=(0,v.ZP)(n,"mmmm dS, yyyy");return(0,_.jsxs)("li",{className:h.li,children:[(0,_.jsx)("div",{className:h.imageBox,children:(0,_.jsx)("img",{src:t,alt:s,className:h.image})}),(0,_.jsxs)("div",{className:h.bebe,children:[(0,_.jsx)(j,{}),(0,_.jsx)("p",{children:o})]}),(0,_.jsx)("h2",{children:r}),(0,_.jsx)("p",{children:i}),(0,_.jsx)(u.rU,{to:{pathname:"/".concat(a)},state:{from:l.pathname},children:"Read more \u2192"})]},a)}var b=r(701),w={searchBlock:"SearchForm_searchBlock__v7nWI",searchInput:"SearchForm_searchInput__h6REp",SearchForm:"SearchForm_SearchForm__jbIQn"};function k(e){var t=e.handleMoviesSubmit;return(0,_.jsx)(b.Z,{className:w.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search news",onChange:function(e){e.preventDefault(),t(e.currentTarget.value)}})}var y=r(263),C=r.n(y),E="ResultsCounter_counter__EG6xf";function S(e){var t=e.count;return(0,_.jsxs)("p",{className:E,children:["Results: ",t]})}var N="Button_buttonCenter__HCDFl",I="Button_button__wiIYs";function O(e){var t=e.loadMore;return(0,_.jsx)("div",{className:N,children:(0,_.jsx)("button",{className:I,type:"button",onClick:function(){return t()},children:"Load more"})})}function L(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],n=t[1],i=(0,s.useState)(18),u=(0,a.Z)(i,2),d=u[0],h=u[1],m=(0,s.useState)(""),p=(0,a.Z)(m,2),f=p[0],x=p[1];(0,s.useEffect)((function(){c.a(d).then(n)}),[d]);var j=function(e){return!(f.length>0&&""!==f)||f.split(" ").some((function(t){return e.title.toUpperCase().indexOf(t.toUpperCase())>0||e.summary.toUpperCase().indexOf(t.toUpperCase())>0}))},v=function(e){return(0,_.jsx)(C(),{highlightClassName:"YourHighlightClass",searchWords:f.split(" "),autoEscape:!0,textToHighlight:e})};return(0,_.jsxs)("div",{children:[(0,_.jsx)(k,{handleMoviesSubmit:function(e){x(e)}}),(0,_.jsx)(S,{count:r.filter(j).length}),(0,_.jsx)("ul",{className:l,children:r.filter(j).map((function(e){return(0,_.jsx)("div",{className:o,children:(0,_.jsx)(g,{id:e.id,img:e.imageUrl,date:e.updatedAt,title:v(e.title),description:v(e.summary),alt:e.title},e.id)},e.id)}))}),0!==r.length&&(0,_.jsx)(O,{loadMore:function(){return h((function(e){return e+18}))}})]})}function B(){return(0,_.jsx)("div",{children:(0,_.jsx)(L,{})})}}}]);
//# sourceMappingURL=710.c52b156e.chunk.js.map