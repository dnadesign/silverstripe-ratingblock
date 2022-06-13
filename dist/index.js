/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@material-ui/core"),require("@material-ui/lab"),require("react")):"function"==typeof define&&define.amd?define("silverstripe-react-ratingblock",["@material-ui/core","@material-ui/lab","React"],t):"object"==typeof exports?exports["silverstripe-react-ratingblock"]=t(require("@material-ui/core"),require("@material-ui/lab"),require("react")):e["silverstripe-react-ratingblock"]=t(e["@material-ui/core"],e["@material-ui/lab"],e.React)}(self,(function(e,t,n){return function(){var r={184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},670:function(t){"use strict";t.exports=e},588:function(e){"use strict";e.exports=t},639:function(e){"use strict";e.exports=n}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function n(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.r(o),i.d(o,{RateComponent:function(){return _},default:function(){return _}});var a=i(639),l=i.n(a),c=i(184),s=i.n(c);function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i(670),f=["showImmediately","classes"],d=function(e){e.showImmediately;var t=e.classes,n=u(e,f),i=r((0,a.useState)(!1),2),o=i[0],c=i[1];return(0,a.useEffect)((function(){if(!e.showImmediately){var t=setTimeout((function(){c(!0)}),750);return function(){return clearTimeout(t)}}c(!0)}),[e.showImmediately]),l().createElement("div",{className:"loading ".concat(t||"")},o&&l().createElement(m.CircularProgress,Object.assign({disableShrink:!0,size:40},n)),l().createElement("span",{className:"sr-only"},"Please wait"))},g=i(588),p=function(e){return l().createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 21 20"},l().createElement("path",{d:"M18.7801293,8.27466498 L12.8268001,7.76130418 L10.5003474,2.28047975 L8.17320044,7.77122151 L2.22308341,8.27602977 L6.74248862,12.1911922 L5.38513229,18.0096159 L10.5,14.922487 L15.6167758,18.0107676 L14.267429,12.1911921 L18.7801293,8.27466498 Z",stroke:e.stroke?e.stroke:"#fff",strokeWidth:"0.75px",fill:e.fill?e.fill:"none"}))},b=(0,a.forwardRef)((function(e,t){var n=e.stars,i=e.name,o=e.value,c=e.disabled,u=e.onChange,m=e.onChangeActive,f=e.errors,d=s()({rating__description:!0,"rating__description--disabled":0===o}),b=r((0,a.useState)(-1),2),v=b[0],y=b[1];return n&&n.Max>0&&l().createElement("div",{className:"rating__stars"},l().createElement(g.Rating,{ref:t,name:"rating-".concat(i),emptyIcon:l().createElement(p,{stroke:"#fff"}),icon:l().createElement(p,{stroke:"#fff",fill:"#fff"}),value:parseInt(o,10),max:n.Max,onChange:u,onChangeActive:m||function(e,t){y(t)},disabled:c}),null!==o&&n.Labels&&Object.keys(n.Labels).length>0&&l().createElement("p",{className:d},n.Labels[-1!==v?v:o]),f.rating&&l().createElement("p",{className:"rating__error"},"Please select a rating"))||null})),v=function(e){var t=e.label,n=e.onChange,i=e.disabled,o=e.active,c=r(l().useState(!1),2),s=c[0],u=c[1];return(0,a.useEffect)((function(){e.active&&u(!0)}),[o]),l().createElement("div",{key:"tag__".concat(t),id:"tag__".concat(t),value:t,className:"tag__item ".concat(i?"tag__disabled":"")},l().createElement("input",{id:"tag__input__".concat(t),type:"checkbox",checked:i?o:s,onChange:n,onClick:function(){return u(!s)}}),l().createElement("label",{htmlFor:"tag__input__".concat(t)},t))},y=(0,a.forwardRef)((function(e,t){var n=e.tags,r=e.activeTags,a=e.disabled,i=e.onChange;return l().createElement("div",{className:"rating__tags",ref:t},Object.values(n).map((function(e){var t=r.includes(e);return l().createElement(v,{key:"tag_".concat(e).concat(t?"_checked":""),label:e,active:t,disabled:a,onChange:function(t){return i(t,e)}})})),l().createElement("input",{type:"hidden",name:"input_tags",id:"input_tags",value:n}))})),_=(0,a.forwardRef)((function(e,t){var i=e.expandCommentOnRate,o=e.setCommentsValue,c=e.setRatingValue,u=e.setTagsValue,m=e.onSubmit,f=e.stars,g=e.enabled,p=e.name,v=e.errors,_=e.loading,h=e.form,E=e.page,S=e.value||0,x=e.previouslyRated||!1,k=r((0,a.useState)(!1),2),w=(k[0],k[1]),N=r((0,a.useState)(S),2),O=N[0],j=N[1],C=r((0,a.useState)([]),2),I=C[0],T=C[1],R=r((0,a.useState)(h.comments.value),2),A=R[0],L=R[1],M=r((0,a.useState)(h.comments.expanded),2),P=M[0],q=M[1],F=r((0,a.useState)(!1),2),H=F[0],V=F[1],B=x||_||h.submitted,D=(0,a.useRef)(!0),z=(0,a.useRef)(),U=(0,a.useRef)(),W=(0,a.useRef)(),Z=(0,a.useRef)(),$=(0,a.useRef)(),G=s()({rating:!0,"rating--disabled":B,"rating--expanded":P,rating__rated:O>0&&!x}),J=function(e,t){if(H||V(!0),e.currentTarget.checked)T((function(e){return[].concat(n(e),[t])})),!P&&q(!0);else{var r=n(I),a=r.indexOf(t);a>-1&&(r.splice(a,1),T(r),0===I.length&&q(!1))}},K=function(e){return O>0&&f&&f.Tags&&f.Tags.length>0&&l().createElement(y,{ref:Z,tags:f.Tags[O-1],activeTags:I,onChange:J,disabled:e})};return(0,a.useEffect)((function(){if(D.current)return D.current=!1,void(E.name=E.name||"unknown");i&&q(O>0)}),[O]),(0,a.useEffect)((function(){u(n(I).join(","))}),[I]),(0,a.useImperativeHandle)(t,(function(){return{focusCheckedStar:function(){z.current.querySelector("input:checked").focus()},get stars(){return z.current},get commentInput(){return U.current},get commentButton(){return W.current},get tags(){return Z.current},get ratingSubmit(){return $.current}}})),g?l().createElement("div",{ref:t,className:G,"data-rating-enabled":!0,"data-rating-name":p},v&&v.response?l().createElement("div",{className:"rating__message"},l().createElement("p",null,"An errors occurred",l().createElement("br",null),"Please try again later")):l().createElement("form",{className:"rating__form"},l().createElement("h3",{className:"rating__title"},h.title||"Rate this page"),function(e,t){return e?l().createElement("div",{className:"rating__loading"},l().createElement(d,{id:"rating-loading",showImmediately:!0})):t?l().createElement(l().Fragment,null,h.successMessage?l().createElement("div",{className:"rating__result",dangerouslySetInnerHTML:{__html:h.successMessage}}):l().createElement("div",{className:"rating__result"},l().createElement("p",null,"Thank you for your submission"))):x?l().createElement("div",null):h.intro?l().createElement("div",{className:"rating__into",dangerouslySetInnerHTML:{__html:h.intro}}):l().createElement("div",null)}(_,h.submitted),function(e){return l().createElement(b,{ref:z,name:p,value:O,stars:f,onChange:function(e,t){c(t),j(t||0),T(""),K()},disabled:e,errors:v})}(B),K(B),!x&&l().createElement(l().Fragment,null,function(t,n){var r=s()({rating__comments:!0,"rating__comments--expanded":P}),a=e.errors,i=e.stars;return h.comments.enabled?l().createElement("div",{className:"rating__comments-outer"},i&&(!i.Tags||0===i.Tags.length)&&l().createElement("label",{ref:W,className:"rating__comments-toggle",onClick:function(){return q(!P)},"aria-controls":"ratingcomments","aria-expanded":P,id:"rating_commnets_expand",disabled:t||n}," Add a comment "),l().createElement("div",{className:r,id:"ratingcomments","aria-hidden":!P,"aria-expanded":P},l().createElement("div",{className:"rating__comments-field"},l().createElement("label",{className:"sr-only",htmlFor:e.CommentsID},"Additional comments"),l().createElement("textarea",{ref:U,rows:5,readOnly:n,disabled:t||n||!P,value:A,placeholder:h.comments.placeholder,onChange:function(e){o(e.target.value),L(e.target.value)},name:h.comments.name,"aria-hidden":!P}),a.comments&&l().createElement("p",{className:"rating__error"},a.comments)))):null}(B,h.submitted),function(e){var t=!f.Tags||0===I.length||e;return O>0&&H&&l().createElement(l().Fragment,null,l().createElement("input",{type:"hidden",name:"pageName",value:E.name}),l().createElement("input",{type:"hidden",name:"pageID",value:E.id}),l().createElement("button",{ref:$,id:"rating_submit",type:"submit",className:"button button--primary button--small button--cta button--rating rating__action","aria-disabled":t,disabled:t,onClick:function(e){m(e)&&w(!0)}},"Submit"))}(B)))):l().createElement("div",{"data-rating-disabled":!0})}))}(),o}()}));
//# sourceMappingURL=index.js.map