/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@material-ui/core"),require("@material-ui/lab"),require("react")):"function"==typeof define&&define.amd?define("silverstripe-react-ratingblock",["@material-ui/core","@material-ui/lab","React"],t):"object"==typeof exports?exports["silverstripe-react-ratingblock"]=t(require("@material-ui/core"),require("@material-ui/lab"),require("react")):e["silverstripe-react-ratingblock"]=t(e["@material-ui/core"],e["@material-ui/lab"],e.React)}(self,(function(e,t,n){return function(){var r={184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},670:function(t){"use strict";t.exports=e},588:function(e){"use strict";e.exports=t},639:function(e){"use strict";e.exports=n}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function n(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.r(o),i.d(o,{RateComponent:function(){return h},default:function(){return h}});var a=i(639),l=i.n(a),c=i(184),s=i.n(c);function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i(670),f=["showImmediately","classes"],d=function(e){e.showImmediately;var t=e.classes,n=u(e,f),i=r((0,a.useState)(!1),2),o=i[0],c=i[1];return(0,a.useEffect)((function(){if(!e.showImmediately){var t=setTimeout((function(){c(!0)}),750);return function(){return clearTimeout(t)}}c(!0)}),[e.showImmediately]),l().createElement("div",{className:"loading ".concat(t||"")},o&&l().createElement(m.CircularProgress,Object.assign({disableShrink:!0,size:40},n)),l().createElement("span",{className:"sr-only"},"Please wait"))},g=i(588),p=function(e){return l().createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 21 20"},l().createElement("path",{d:"M18.7801293,8.27466498 L12.8268001,7.76130418 L10.5003474,2.28047975 L8.17320044,7.77122151 L2.22308341,8.27602977 L6.74248862,12.1911922 L5.38513229,18.0096159 L10.5,14.922487 L15.6167758,18.0107676 L14.267429,12.1911921 L18.7801293,8.27466498 Z",stroke:e.stroke?e.stroke:"#fff",strokeWidth:"0.75px",fill:e.fill?e.fill:"none"}))},b=(0,a.forwardRef)((function(e,t){var n=e.stars,i=e.name,o=e.value,c=e.disabled,u=e.onChange,m=e.onChangeActive,f=e.errors,d=s()({rating__description:!0,"rating__description--disabled":0===o}),b=r((0,a.useState)(-1),2),v=b[0],y=b[1];return n&&n.Max>0&&l().createElement("div",{className:"rating__stars"},l().createElement(g.Rating,{ref:t,name:"rating-".concat(i),emptyIcon:l().createElement(p,{stroke:"#fff"}),icon:l().createElement(p,{stroke:"#fff",fill:"#fff"}),value:parseInt(o,10),max:n.Max,onChange:u,onChangeActive:m||function(e,t){y(t)},disabled:c}),null!==o&&n.Labels&&Object.keys(n.Labels).length>0&&l().createElement("p",{className:d},n.Labels[-1!==v?v:o]),f.rating&&l().createElement("p",{className:"rating__error"},"Please select a rating"))||null})),v=function(e){var t=e.label,n=e.onChange,i=e.disabled,o=e.active,c=r(l().useState(!1),2),s=c[0],u=c[1];return(0,a.useEffect)((function(){e.active&&u(!0)}),[o]),l().createElement("div",{key:"tag__".concat(t),id:"tag__".concat(t),value:t,className:"tag__item ".concat(i?"tag__disabled":"")},l().createElement("input",{id:"tag__input__".concat(t),type:"checkbox",checked:i?o:s,onChange:n,onClick:function(){return u(!s)}}),l().createElement("label",{htmlFor:"tag__input__".concat(t)},t))},y=(0,a.forwardRef)((function(e,t){var n=e.tags,r=e.activeTags,a=e.disabled,i=e.onChange;return l().createElement("div",{className:"rating__tags",ref:t},Object.values(n).map((function(e){var t=r.includes(e);return l().createElement(v,{key:"tag_".concat(e).concat(t?"_checked":""),label:e,active:t,disabled:a,onChange:function(t){return i(t,e)}})})),l().createElement("input",{type:"hidden",name:"input_tags",id:"input_tags",value:n}))})),h=(0,a.forwardRef)((function(e,t){var i=e.expandCommentOnRate,o=e.setCommentsValue,c=e.setRatingValue,u=e.setTagsValue,m=e.onSubmit,f=e.stars,g=e.enabled,p=e.name,v=e.errors,h=e.loading,_=e.form,E=e.page,S=e.hasTags,x=void 0===S||S,k=e.value||0,w=e.previouslyRated||!1,N=r((0,a.useState)(!1),2),O=(N[0],N[1]),j=r((0,a.useState)(k),2),C=j[0],T=j[1],I=r((0,a.useState)([]),2),R=I[0],A=I[1],L=r((0,a.useState)(_.comments.value),2),M=L[0],P=L[1],q=r((0,a.useState)(_.comments.expanded),2),F=q[0],H=q[1],V=r((0,a.useState)(!1),2),B=V[0],D=V[1],z=w||h||_.submitted,U=(0,a.useRef)(!0),W=(0,a.useRef)(),Z=(0,a.useRef)(),$=(0,a.useRef)(),G=(0,a.useRef)(),J=(0,a.useRef)(),K=s()({rating:!0,"rating--disabled":z,"rating--expanded":F,rating__rated:C>0&&!w}),Q=function(e,t){if(B||D(!0),e.currentTarget.checked)A((function(e){return[].concat(n(e),[t])})),!F&&H(!0);else{var r=n(R),a=r.indexOf(t);a>-1&&(r.splice(a,1),A(r),0===R.length&&H(!1))}},X=function(e){return C>0&&f&&f.Tags&&f.Tags.length>0&&l().createElement(y,{ref:G,tags:f.Tags[C-1],activeTags:R,onChange:Q,disabled:e})};return(0,a.useEffect)((function(){if(U.current)return U.current=!1,void(E.name=E.name||"unknown");i&&H(C>0)}),[C]),(0,a.useEffect)((function(){u(n(R).join(","))}),[R]),(0,a.useImperativeHandle)(t,(function(){return{focusCheckedStar:function(){W.current.querySelector("input:checked").focus()},get stars(){return W.current},get commentInput(){return Z.current},get commentButton(){return $.current},get tags(){return G?G.current:[]},get ratingSubmit(){return J.current}}})),g?l().createElement("div",{ref:t,className:K,"data-rating-enabled":!0,"data-rating-name":p},v&&v.response?l().createElement("div",{className:"rating__message"},l().createElement("p",null,"An errors occurred",l().createElement("br",null),"Please try again later")):l().createElement("form",{className:"rating__form"},l().createElement("h3",{className:"rating__title"},_.title||"Rate this page"),function(e,t){return e?l().createElement("div",{className:"rating__loading"},l().createElement(d,{id:"rating-loading",showImmediately:!0})):t?l().createElement(l().Fragment,null,_.successMessage?l().createElement("div",{className:"rating__result",dangerouslySetInnerHTML:{__html:_.successMessage}}):l().createElement("div",{className:"rating__result"},l().createElement("p",null,"Thank you for your submission"))):w?l().createElement("div",null):_.intro?l().createElement("div",{className:"rating__into",dangerouslySetInnerHTML:{__html:_.intro}}):l().createElement("div",null)}(h,_.submitted),function(e){return l().createElement(b,{ref:W,name:p,value:C,stars:f,onChange:function(e,t){c(t),T(t||0),A(""),X(),!x&&D(!0)},disabled:e,errors:v})}(z),x&&X(z),!w&&l().createElement(l().Fragment,null,function(t,n){var r=s()({rating__comments:!0,"rating__comments--expanded":F}),a=e.errors,i=e.stars;return _.comments.enabled?l().createElement("div",{className:"rating__comments-outer"},i&&(!i.Tags||0===i.Tags.length)&&l().createElement("label",{ref:$,className:"rating__comments-toggle",onClick:function(){return H(!F)},"aria-controls":"ratingcomments","aria-expanded":F,id:"rating_commnets_expand",disabled:t||n}," Add a comment "),l().createElement("div",{className:r,id:"ratingcomments","aria-hidden":!F,"aria-expanded":F},l().createElement("div",{className:"rating__comments-field"},l().createElement("label",{className:"sr-only",htmlFor:e.CommentsID},"Additional comments"),l().createElement("textarea",{ref:Z,rows:5,readOnly:n,disabled:t||n||!F,value:M,placeholder:_.comments.placeholder,onChange:function(e){o(e.target.value),P(e.target.value)},name:_.comments.name,"aria-hidden":!F}),a.comments&&l().createElement("p",{className:"rating__error"},a.comments)))):null}(z,_.submitted),function(t){var n=e.hasTags&&(!f.Tags||0===R.length)||t;return C>0&&B&&l().createElement(l().Fragment,null,l().createElement("input",{type:"hidden",name:"pageName",value:E.name}),l().createElement("input",{type:"hidden",name:"pageID",value:E.id}),l().createElement("button",{ref:J,id:"rating_submit",type:"submit",className:"button button--primary button--small button--cta button--rating rating__action","aria-disabled":n,disabled:n,onClick:function(e){m(e)&&O(!0)}},"Submit"))}(z)))):l().createElement("div",{"data-rating-disabled":!0})}))}(),o}()}));
//# sourceMappingURL=index.js.map