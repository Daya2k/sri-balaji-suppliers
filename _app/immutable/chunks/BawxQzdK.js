import{t as y,Z as L,H as k,M as H,_ as P,$ as R,a0 as A,G as $,a1 as B,o as I,a2 as E,D as j,N as q,a3 as S,K as T,B as D,F,L as p,a4 as G,a5 as K,x as Q,a6 as W,n as Z,a7 as x,i as z,m as J,Q as U,c as X,S as aa}from"./DlMOZqmS.js";import{d as ra}from"./CHpo1fI1.js";const ta=["touchstart","touchmove"];function ea(a){return ta.includes(a)}function ua(a,r,e){return(...o)=>{const s=a(...o);var t=y?s:s.nodeType===11?s.firstChild:s;return C(t,r,e),s}}function sa(a,r,e){a.__svelte_meta={loc:{file:r,line:e[0],column:e[1]}},e[2]&&C(a.firstChild,r,e[2])}function C(a,r,e){for(var o=0,s=0;a&&o<e.length;){if(y&&a.nodeType===8){var t=a;t.data===L||t.data===k?s+=1:t.data[0]===H&&(s-=1)}s===0&&a.nodeType===1&&sa(a,r,e[o++]),a=a.nextSibling}}const ia=new Set,O=new Set;function m(a){var N;var r=this,e=r.ownerDocument,o=a.type,s=((N=a.composedPath)==null?void 0:N.call(a))||[],t=s[0]||a.target,d=0,c=a.__root;if(c){var l=s.indexOf(c);if(l!==-1&&(r===document||r===window)){a.__root=r;return}var h=s.indexOf(r);if(h===-1)return;l<=h&&(d=l)}if(t=s[d]||a.target,t!==r){P(a,"currentTarget",{configurable:!0,get(){return t||e}});var w=B,f=I;R(null),A(null);try{for(var i,n=[];t!==null;){var u=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+o];if(_!=null&&(!t.disabled||a.target===t))if($(_)){var[V,...Y]=_;V.apply(t,[a,...Y])}else _.call(t,a)}catch(g){i?n.push(g):i=g}if(a.cancelBubble||u===r||u===null)break;t=u}if(i){for(let g of n)queueMicrotask(()=>{throw g});throw i}}finally{a.__root=r,delete a.currentTarget,R(w),A(f)}}}function da(a,r){var e=r==null?"":typeof r=="object"?r+"":r;e!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=e,a.nodeValue=e+"")}function na(a,r){return M(a,r)}function la(a,r){E(),r.intro=r.intro??!1;const e=r.target,o=y,s=p;try{for(var t=j(e);t&&(t.nodeType!==8||t.data!==L);)t=q(t);if(!t)throw S;T(!0),D(t),F();const d=M(a,{...r,anchor:t});if(p===null||p.nodeType!==8||p.data!==H)throw G(),S;return T(!1),d}catch(d){if(d===S)return r.recover===!1&&K(),E(),Q(e),T(!1),na(a,r);throw d}finally{T(o),D(s)}}const v=new Map;function M(a,{target:r,anchor:e,props:o={},events:s,context:t,intro:d=!0}){E();var c=new Set,l=f=>{for(var i=0;i<f.length;i++){var n=f[i];if(!c.has(n)){c.add(n);var u=ea(n);r.addEventListener(n,m,{passive:u});var _=v.get(n);_===void 0?(document.addEventListener(n,m,{passive:u}),v.set(n,1)):v.set(n,_+1)}}};l(Z(ia)),O.add(l);var h=void 0,w=x(()=>{var f=e??r.appendChild(z());return J(()=>{if(t){U({});var i=X;i.c=t}s&&(o.$$events=s),y&&ra(f,null),h=a(f,o)||{},y&&(I.nodes_end=p),t&&aa()}),()=>{var u;for(var i of c){r.removeEventListener(i,m);var n=v.get(i);--n===0?(document.removeEventListener(i,m),v.delete(i)):v.set(i,n)}O.delete(l),f!==e&&((u=f.parentNode)==null||u.removeChild(f))}});return b.set(h,w),h}let b=new WeakMap;function _a(a,r){const e=b.get(a);return e?(b.delete(a),e(r)):(W(),Promise.resolve())}export{ua as a,la as h,na as m,da as s,_a as u};
