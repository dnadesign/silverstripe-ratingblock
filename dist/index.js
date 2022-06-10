/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@material-ui/core"),require("@material-ui/lab"),require("react")):"function"==typeof define&&define.amd?define("silverstripe-react-ratingblock",["@material-ui/core","@material-ui/lab","React"],t):"object"==typeof exports?exports["silverstripe-react-ratingblock"]=t(require("@material-ui/core"),require("@material-ui/lab"),require("react")):e["silverstripe-react-ratingblock"]=t(e["@material-ui/core"],e["@material-ui/lab"],e.React)}(self,(function(e,t,n){return function(){var r={184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},670:function(t){"use strict";t.exports=e},588:function(e){"use strict";e.exports=t},639:function(e){"use strict";e.exports=n}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function n(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.r(o),i.d(o,{RateComponent:function(){return v},default:function(){return v}});var a=i(639),l=i.n(a),c=i(588),u=i(184),s=i.n(u);function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i(670),d=["showImmediately","classes"],g=function(e){e.showImmediately;var t=e.classes,n=m(e,d),i=r((0,a.useState)(!1),2),o=i[0],c=i[1];return(0,a.useEffect)((function(){if(!e.showImmediately){var t=setTimeout((function(){c(!0)}),750);return function(){return clearTimeout(t)}}c(!0)}),[e.showImmediately]),l().createElement("div",{className:"loading ".concat(t||"")},o&&l().createElement(f.CircularProgress,Object.assign({disableShrink:!0,size:40},n)),l().createElement("span",{className:"sr-only"},"Please wait"))},p=function(e){return l().createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 21 20"},l().createElement("path",{d:"M18.7801293,8.27466498 L12.8268001,7.76130418 L10.5003474,2.28047975 L8.17320044,7.77122151 L2.22308341,8.27602977 L6.74248862,12.1911922 L5.38513229,18.0096159 L10.5,14.922487 L15.6167758,18.0107676 L14.267429,12.1911921 L18.7801293,8.27466498 Z",stroke:e.stroke?e.stroke:"#fff",strokeWidth:"0.75px",fill:e.fill?e.fill:"none"}))},b=function(e){var t=e.label,n=e.onChange,a=e.disabled,i=e.active,o=r(l().useState(!1),2),c=o[0],u=o[1];return l().useEffect((function(){e.active&&u(!0)}),[e.active]),l().createElement("div",{key:"tag__".concat(t),id:"tag__".concat(t),value:t,className:"tag__item ".concat(a?"tag__disabled":"")},l().createElement("input",{id:"tag__input__".concat(t),type:"checkbox",defaultChecked:a?i:c,onChange:n,onClick:function(){return u(!c)}}),l().createElement("label",{htmlFor:"tag__input__".concat(t)},t))},v=(0,a.forwardRef)((function(e,t){var i=e.expandCommentOnRate,o=e.setCommentsValue,u=e.setRatingValue,m=e.setTagsValue,f=e.onSubmit,d=e.stars,v=e.enabled,y=e.name,_=e.errors,h=e.loading,E=e.form,S=e.page,x=e.value||0,k=e.previouslyRated||!1,N=r((0,a.useState)(x),2),O=N[0],j=N[1],w=r((0,a.useState)([]),2),I=w[0],C=w[1],T=r((0,a.useState)(E.comments.value),2),A=T[0],L=T[1],R=r((0,a.useState)(E.comments.expanded),2),M=R[0],P=R[1],q=r((0,a.useState)(!1),2),F=q[0],H=q[1],V=k||h||E.submitted,B=(0,a.useRef)(!0),D=(0,a.useRef)(),z=(0,a.useRef)(),U=(0,a.useRef)(),W=(0,a.useRef)(),Z=(0,a.useRef)(),$=s()({rating:!0,"rating--disabled":V,"rating--expanded":M,rating__rated:O>0&&!k}),G=function(e){var t=E.tags&&E.tags.split(",");return O>0&&d&&d.Tags&&d.Tags.length>0&&l().createElement("div",{className:"rating__tags",ref:W},Object.values(d.Tags[O-1]).map((function(r){var a=t.includes(r);return l().createElement(b,{key:"tag_".concat(r).concat(a),label:r,active:a,disabled:e,onChange:function(e){return function(e,t){if(F||H(!0),e.currentTarget.checked)C([].concat(n(I),[t])),!M&&P(!0);else{var r=n(I),a=r.indexOf(t);a>-1&&(r.splice(a,1),C(r),0===I.length&&P(!1))}}(e,r)}})})),l().createElement("input",{type:"hidden",name:"input_tags",id:"input_tags",value:I}))};return(0,a.useEffect)((function(){if(B.current)return B.current=!1,void(S.name=S.name||"unknown");i&&P(O>0)}),[O]),(0,a.useEffect)((function(){m(n(I).join(","))}),[I]),(0,a.useImperativeHandle)(t,(function(){return{focusCheckedStar:function(){D.current.querySelector("input:checked").focus()},get stars(){return D.current},get commentInput(){return z.current},get commentButton(){return U.current},get tags(){return W.current},get ratingSubmit(){return Z.current}}})),v?l().createElement("div",{ref:t,className:$,"data-rating-enabled":!0,"data-rating-name":y},_&&_.response?l().createElement("div",{className:"rating__message"},l().createElement("p",null,"An errors occurred",l().createElement("br",null),"Please try again later")):l().createElement("form",{className:"rating__form"},l().createElement("h3",{className:"rating__title"},E.title||"Rate this page"),function(e,t){return e?l().createElement("div",{className:"rating__loading"},l().createElement(g,{id:"rating-loading",showImmediately:!0})):t?l().createElement(l().Fragment,null,E.successMessage?l().createElement("div",{className:"rating__result",dangerouslySetInnerHTML:{__html:E.successMessage}}):l().createElement("div",{className:"rating__result"},l().createElement("p",null,"Thank you for your submission"))):k?l().createElement("div",null):E.intro?l().createElement("div",{className:"rating__into",dangerouslySetInnerHTML:{__html:E.intro}}):l().createElement("div",null)}(h,E.submitted),function(e){var t=s()({rating__description:!0,"rating__description--disabled":0===O}),n=r((0,a.useState)(-1),2),i=n[0],o=n[1];return d&&d.Max>0&&l().createElement("div",{className:"rating__stars"},l().createElement(c.Rating,{ref:D,name:"rating-".concat(y),emptyIcon:l().createElement(p,{stroke:"#fff"}),icon:l().createElement(p,{stroke:"#fff",fill:"#fff"}),value:parseInt(O,10),max:d.Max,onChange:function(e,t){u(t),j(t||0),C(""),G()},onChangeActive:function(e,t){o(t)},disabled:e}),null!==O&&d.Labels&&Object.keys(d.Labels).length>0&&l().createElement("p",{className:t},d.Labels[-1!==i?i:O]),_.rating&&l().createElement("p",{className:"rating__error"},"Please select a rating"))}(V),G(V),!k&&l().createElement(l().Fragment,null,function(t,n){var r=s()({rating__comments:!0,"rating__comments--expanded":M}),a=e.errors,i=e.stars;return E.comments.enabled?l().createElement("div",{className:"rating__comments-outer"},i&&(!i.Tags||0===i.Tags.length)&&l().createElement("label",{ref:U,className:"rating__comments-toggle",onClick:function(){return P(!M)},"aria-controls":"ratingcomments","aria-expanded":M,id:"rating_commnets_expand",disabled:t||n}," Add a comment "),l().createElement("div",{className:r,id:"ratingcomments","aria-hidden":!M,"aria-expanded":M},l().createElement("div",{className:"rating__comments-field"},l().createElement("label",{className:"sr-only",htmlFor:e.CommentsID},"Additional comments"),l().createElement("textarea",{ref:z,rows:5,readOnly:n,disabled:t||n||!M,value:A,placeholder:E.comments.placeholder,onChange:function(e){o(e.target.value),L(e.target.value)},name:E.comments.name,"aria-hidden":!M}),a.comments&&l().createElement("p",{className:"rating__error"},a.comments)))):null}(V,E.submitted),function(e){var t=!d.Tags||0===I.length||e;return O>0&&F&&l().createElement(l().Fragment,null,l().createElement("input",{type:"hidden",name:"pageName",value:S.name}),l().createElement("input",{type:"hidden",name:"pageID",value:S.id}),l().createElement("button",{ref:Z,id:"rating_submit",type:"submit",className:"button button--primary button--small button--cta button--rating rating__action","aria-disabled":t,disabled:t,onClick:function(e){f(e)}},"Submit"))}(V)))):l().createElement("div",{"data-rating-disabled":!0})}))}(),o}()}));
//# sourceMappingURL=index.js.map