import{c as f,h as l,v as u,a8 as h,a9 as E,aa as g,i as c,A as o,w as y,t as T,ab as w,R as x,ac as M,K as _,ad as N}from"./Dxgu9ruF.js";function $(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function r(e,n){var t=l;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function b(e,n){var t=(n&E)!==0,d=(n&g)!==0,a,i=!e.startsWith("<!>");return()=>{if(c)return r(o,null),o;a===void 0&&(a=$(i?e:"<!>"+e),t||(a=u(a)));var s=d||h?document.importNode(a,!0):a.cloneNode(!0);if(t){var p=u(s),v=s.lastChild;r(p,v)}else r(s,s);return s}}function I(e=""){if(!c){var n=f(e+"");return r(n,n),n}var t=o;return t.nodeType!==3&&(t.before(t=f()),T(t)),r(t,t),t}function P(){if(c)return r(o,null),o;var e=document.createDocumentFragment(),n=document.createComment(""),t=f();return e.append(n,t),r(n,t),e}function R(e,n){if(c){l.nodes_end=o,y();return}e!==null&&e.before(n)}function S(e){e&&w(e[_]??"a component",e.name)}function C(){var t;const e=(t=x)==null?void 0:t.function;function n(d){var i;const a=((i=M())==null?void 0:i[_])??"Something";N(a,d,e[_])}return{$destroy:()=>n("$destroy()"),$on:()=>n("$on(...)"),$set:()=>n("$set(...)")}}const A="5";var m;typeof window<"u"&&((m=window.__svelte??(window.__svelte={})).v??(m.v=new Set)).add(A);export{R as a,P as b,S as c,r as d,I as e,C as l,b as t};
