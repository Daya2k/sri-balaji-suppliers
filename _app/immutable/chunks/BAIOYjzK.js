import{X as V,Y as N,Z as O,E as Y,_ as H,A as k,$ as T,m as M,a0 as $,O as q,a1 as E,q as g,s as A,n as C,t as p,v as j,a2 as z,a3 as B,J,z as W,a4 as X,i as Z,x as F,P as G,c as K,k as b,R as Q}from"./BCPvFnA0.js";import{b as U}from"./CihSryyq.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,D=new Set;function m(r){var S;var e=this,s=e.ownerDocument,c=r.type,o=((S=r.composedPath)==null?void 0:S.call(r))||[],t=o[0]||r.target,u=0,_=r.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;d<=h&&(u=d)}if(t=o[u]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=H,i=k;N(null),O(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!=null&&(!t.disabled||r.target===t))if(Y(l)){var[L,...P]=l;L.apply(t,[r,...P])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,N(w),O(i)}}}function nr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s+"")}function tr(r,e){return I(r,e)}function ir(r,e){T(),e.intro=e.intro??!1;const s=e.target,c=b,o=p;try{for(var t=M(s);t&&(t.nodeType!==8||t.data!==$);)t=q(t);if(!t)throw E;g(!0),A(t),C();const u=I(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==j)throw z(),E;return g(!1),u}catch(u){if(u===E)return e.recover===!1&&B(),T(),J(s),g(!1),tr(r,e);throw u}finally{g(c),A(o)}}const v=new Map;function I(r,{target:e,anchor:s,props:c={},events:o,context:t,intro:u=!0}){T();var _=new Set,d=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!_.has(n)){_.add(n);var f=rr(n);e.addEventListener(n,m,{passive:f});var l=v.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),v.set(n,1)):v.set(n,l+1)}}};d(W(er)),D.add(d);var h=void 0,w=X(()=>{var i=s??e.appendChild(Z());return F(()=>{if(t){G({});var a=K;a.c=t}o&&(c.$$events=o),b&&U(i,null),h=r(i,c)||{},b&&(k.nodes_end=p),t&&Q()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var n=v.get(a);--n===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,n)}D.delete(d),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return R.set(h,w),h}let R=new WeakMap;function or(r,e){const s=R.get(r);return s?(R.delete(r),s(e)):Promise.resolve()}export{ir as h,tr as m,nr as s,or as u};
