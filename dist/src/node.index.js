!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("objer",[],e):"object"==typeof exports?exports.objer=e():r.objer=e()}(global,function(){return function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){"use strict";function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function o(r,e,t){var o=r,a=j(e);if(0===a.length)return t;for(var u=0;u<a.length;u+=1){var i=a[u];""!==i&&(u!==a.length-1?(null!==o[i]&&"object"===n(o[i])||(o[i]={}),o=o[i]):o[i]=t)}return r}function a(r){var e=P(r);if("object"===e||"array"===e){if(void 0!==Object.keys)return Object.keys(r);var t=[];for(var n in r)r.hasOwnProperty(n)&&t.push(n);return t}return[]}function u(r){var e=P(r);if("object"===e){for(var t in r)if(r.hasOwnProperty(t))return t}else if("array"===e&&r.length>0)return 0;return null}function i(r){var e=P(r);if("object"===e||"array"===e)return r[u(r)]}function f(r){var e=P(r);if("object"===e){var t=null;for(var n in r)r.hasOwnProperty(n)&&(t=n);return t}return"array"===e&&r.length>0?r.length-1:null}function l(r){var e=P(r);if("object"===e||"array"===e)return r[f(r)]}function c(r,e){var t={};if(!e)return t;for(var n=void 0,a=0;a<e.length;a+=1)p(r,n=e[a])&&o(t,n,b(r,n));return t}function s(r,e){var t=j(e);if(t.length>0){var n=t.slice(0,t.length-1);if(p(r,n)||0===n.length){var o=b(r,n),a=P(o),u=t[t.length-1];"object"===a?delete o[u]:"array"===a&&"number"==typeof u&&o.splice(u,1)}}return r}function g(r){var e=P(r);if("object"===e){for(var t=a(r),n={},o=0;o<t.length;o+=1)n[t[o]]=g(r[t[o]]);return n}if("array"===e){for(var u=r.length,i=[],f=0;f<u;f+=1)i.push(g(r[f]));return i}return r}function h(r,e){if(!e)return r;for(var t=g(r),n=0;n<e.length;n+=1)s(t,e[n]);return t}function v(r){var e=P(r);if("object"===e){for(var t=a(r),n=[],o=0;o<t.length;o+=1)n.push(r[t[o]]);return n}return"array"===e?r:[]}function p(r,e){var t=r,n=j(e);if(0===n.length)return!1;for(var o=0;o<n.length;o+=1){var a=n[o];if(!y(t,a))return!1;t=t[a]}return!0}function y(r,e){return null!==r&&"object"===n(r)&&e in r}function b(r,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=r,o=j(e),a=0;a<o.length;a+=1){var u=o[a];if(""!==u){if(!y(n,u))return t;n=n[u]}}return n}function d(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=P(e);if("string"!==n&&"array"!==n&&"number"!==n)return t;for(var o=r,a=j(e),u=0;u<a.length;u+=1){var i=a[u];if(""!==i){if(!y(o,i))return t;o=o[i]}}return o}function j(r){var e=P(r);if("array"===e)return r;if("string"!==e)return"number"===e?[r]:[];for(var t=!1,n=0,o=!1,a=!1,u=r.length,i=[],f=0;f<u+1;f+=1){var l=r[f];if(t&&!a?"]"===l&&(a=!0):"."===l?o=!0:"["===l&&(o=!0,t=!0),o||f===u){var c=r.substr(n,f-n-(a?1:0));if(t){var s=parseInt(c,10);isNaN(s)||(c=s)}i.push(c),n=f+1,o=!1,a&&(t=!1),a=!1}}return i}function m(r){var e=P(r);return"array"!==e?"string"===e?r:"number"===e?"[".concat(r,"]"):"":r.reduce(function(r,e,t){return"number"===P(e)?"".concat(r,"[").concat(e,"]"):r+(t>0?".":"")+e},"")}function O(r,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=j(e),o=r,a=0;a<n.length;a+=1){var u=n[a];if(!y(o,u)){var i=a===n.length-1?null:n[a+1];null===i?o[u]=t:"number"===P(i)?o[u]=[]:o[u]={}}o=o[u]}return o}function P(r){var e=n(r);if("object"===e){if(null===r)return"null";var t=toString.apply(r);if(t.length>2&&"["===t[0]&&"]"===t[t.length-1]){var o=t.substr(1,t.length-2).split(" ");if(o.length>1)return o.slice(1).join(" ").toLowerCase()}return"unknown"}return"number"===e&&isNaN(r)?"nan":e}function S(r,e){var t=P(r);if(t!==P(e))return!1;if("nan"===t)return!0;if("object"===t){if(r===e)return!0;var n=a(r).sort();if(!S(n,a(e).sort()))return!1;for(var o=0;o<n.length;o+=1)if(!S(r[n[o]],e[n[o]]))return!1;return!0}if("array"===t){if(r===e)return!0;if(r.length!==e.length)return!1;for(var u=0;u<r.length;u+=1)if(!S(r[u],e[u]))return!1;return!0}return r===e}function k(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=[],o=P(r);if(o!==P(e))return[{change:"type",path:t,original:r,incoming:e}];if("nan"===o)return[];if("object"===o){if(r===e)return[];var u=a(r).sort(),i=a(e).sort(),f=[];if(S(u,i))f=u;else{for(var l=u.length-1;l>=0;l-=1)for(var c=u[l],s=i.length-1;s>=0;s-=1)if(c===i[s]){f.push(c),u.splice(l,1),i.splice(s,1);break}for(var g=0;g<u.length;g+=1)n.push({change:"delete",path:t,key:u[g],original:r[u[g]]});for(var h=0;h<i.length;h+=1)n.push({change:"add",path:t,key:i[h],incoming:e[i[h]]})}for(var v=0;v<f.length;v+=1)n=n.concat(k(r[f[v]],e[f[v]],t.concat(f[v])))}else{if("array"!==o)return r===e?[]:[{change:"value",path:t,original:r,incoming:e}];if(r===e)return[];var p=r.length;r.length!==e.length&&(r.length>e.length?(p=e.length,n.push({change:"shrink",path:t,original:r.slice(e.length)})):n.push({change:"grow",path:t,incoming:e.slice(r.length)}));for(var y=0;y<p;y+=1)n=n.concat(k(r[y],e[y],t.concat(y)))}return n}function w(r,e,t){var n=P(r);if(!r||"object"!==n&&"array"!==n)throw new TypeError("Cannot execute subAssign on a non-object or array");return O(r,e,{}),o(r,e,Object.assign(b(r,e,{}),t)),r}function x(r,e,t){for(var n=a(e),o=t?function(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}({},t,[]):{},u=0;u<n.length;u+=1)o[n[u]]=[];for(var i=0;i<r.length;i+=1){for(var f=r[i],l=!1,c=0;c<n.length;c+=1){var s=n[c];e[s](f,i,r)&&(o[s].push(f),l=!0)}t&&!l&&o[t].push(f)}return o}function _(r,e){return a(r).reduce(function(t,n,o){return t[n]=e(r[n],n,o),t},{})}Object.defineProperty(e,"__esModule",{value:!0}),e.set=o,e.keys=a,e.firstKey=u,e.firstValue=i,e.lastKey=f,e.lastValue=l,e.pick=c,e.assassinate=s,e.clone=g,e.omit=h,e.values=v,e.has=p,e.hasRoot=y,e.get=b,e.yank=d,e.getObjectPath=j,e.getStringPathForArray=m,e.assurePathExists=O,e.getTypeString=P,e.deepEq=S,e.shallowDiff=k,e.subAssign=w,e.partition=x,e.mapObject=_,e.default=void 0;var A={assassinate:s,assurePathExists:O,clone:g,deepEq:S,firstKey:u,firstValue:i,get:b,getObjectPath:j,getStringPathForArray:m,getTypeString:P,has:p,hasRoot:y,keys:a,lastKey:f,lastValue:l,mapObject:_,omit:h,partition:x,pick:c,set:o,shallowDiff:k,subAssign:w,values:v,yank:d};e.default=A}])});