var fn=Array.isArray,un=Array.prototype.indexOf,$n=Array.from,Wn=Object.defineProperty,G=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,St=Object.getPrototypeOf,Dt=Object.isExtensible;const Xn=()=>{};function zn(t){return t()}function Ct(t){for(var n=0;n<t.length;n++)t[n]()}const b=2,Ft=4,it=8,mt=16,I=32,H=64,et=128,x=256,rt=512,m=1024,S=2048,U=4096,L=8192,ot=16384,vn=32768,Mt=65536,Jn=1<<17,hn=1<<19,qt=1<<20,dt=1<<21,K=Symbol("$state"),Qn=Symbol("legacy props");function jt(t){return t===this.v}function pn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Lt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function En(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function te(){throw new Error("https://svelte.dev/e/hydration_failed")}function ne(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function ee(){_t=!0}const re=1,le=2,ae=16,se=1,fe=2,ue=4,ie=8,oe=16,_e=1,ce=2,xn="[",An="[!",Rn="]",Yt={},E=Symbol();function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let d=null;function It(t){d=t}function ve(t,n=!1,e){var r=d={p:d,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!n&&(d.l={s:null,u:null,r1:[],r2:Tt(!1)}),Nn(()=>{r.d=!0})}function he(t){const n=d;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var a=0;a<_.length;a++){var l=_[a];st(l.effect),Y(l.reaction),$t(l.fn)}}finally{st(e),Y(r)}}d=n.p,n.m=!0}return{}}function ct(){return!_t||d!==null&&d.l===null}function j(t,n){if(typeof t!="object"||t===null||K in t)return t;const e=St(t);if(e!==_n&&e!==cn)return t;var r=new Map,a=fn(t),l=k(0),_=v,c=u=>{var s=v;Y(_);var f;return f=u(),Y(s),f};return a&&r.set("length",k(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&gn();var i=r.get(s);return i===void 0?(i=c(()=>k(f.value)),r.set(s,i)):N(i,c(()=>j(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>k(E)));else{if(a&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&N(i,o)}N(f,E),Ot(l)}return!0},get(u,s,f){var O;if(s===K)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(O=G(u,s))!=null&&O.writable)&&(i=c(()=>k(j(o?u[s]:E))),r.set(s,i)),i!==void 0){var p=V(i);return p===E?void 0:p}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=V(i))}else if(f===void 0){var o=r.get(s),p=o==null?void 0:o.v;if(o!==void 0&&p!==E)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,s){var p;if(s===K)return!0;var f=r.get(s),i=f!==void 0&&f.v!==E||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(p=G(u,s))!=null&&p.writable)){f===void 0&&(f=c(()=>k(i?j(u[s]):E)),r.set(s,f));var o=V(f);if(o===E)return!1}return i},set(u,s,f,i){var bt;var o=r.get(s),p=s in u;if(a&&s==="length")for(var O=f;O<o.v;O+=1){var Q=r.get(O+"");Q!==void 0?N(Q,E):O in u&&(Q=c(()=>k(E)),r.set(O+"",Q))}o===void 0?(!p||(bt=G(u,s))!=null&&bt.writable)&&(o=c(()=>k(void 0)),N(o,c(()=>j(f))),r.set(s,o)):(p=o.v!==E,N(o,c(()=>j(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(i,f),!p){if(a&&typeof s=="string"){var Rt=r.get("length"),pt=Number(s);Number.isInteger(pt)&&pt>=Rt.v&&N(Rt,pt+1)}Ot(l)}return!0},ownKeys(u){V(l);var s=Reflect.ownKeys(u).filter(o=>{var p=r.get(o);return p===void 0||p.v!==E});for(var[f,i]of r)i.v!==E&&!(f in u)&&s.push(f);return s},setPrototypeOf(){mn()}})}function Ot(t,n=1){N(t,t.v+n)}const $=new Map;function Tt(t,n){var e={f:0,v:t,reactions:null,equals:jt,rv:0,wv:0};return e}function k(t,n){const e=Tt(t);return nn(e),e}function pe(t,n=!1){var r;const e=Tt(t);return n||(e.equals=Lt),_t&&d!==null&&d.l!==null&&((r=d.l).s??(r.s=[])).push(e),e}function N(t,n,e=!1){v!==null&&!R&&ct()&&(v.f&(b|mt))!==0&&!(y!=null&&y.includes(t))&&Tn();let r=e?j(n):n;return bn(t,r)}function bn(t,n){if(!t.equals(n)){var e=t.v;z?$.set(t,n):$.set(t,e),t.v=n,t.wv=rn(),Ut(t,S),ct()&&h!==null&&(h.f&m)!==0&&(h.f&(I|H))===0&&(T===null?Ln([t]):T.push(t))}return n}function Ut(t,n){var e=t.reactions;if(e!==null)for(var r=ct(),a=e.length,l=0;l<a;l++){var _=e[l],c=_.f;(c&S)===0&&(!r&&_===h||(D(_,n),(c&(m|x))!==0&&((c&b)!==0?Ut(_,U):ht(_))))}}let F=!1;function de(t){F=t}let A;function W(t){if(t===null)throw Ht(),Yt;return A=t}function we(){return W(q(A))}function ye(t){if(F){if(q(A)!==null)throw Ht(),Yt;A=t}}function Ee(t=1){if(F){for(var n=t,e=A;n--;)e=q(e);A=e}}function ge(){for(var t=0,n=A;;){if(n.nodeType===8){var e=n.data;if(e===Rn){if(t===0)return n;t-=1}else(e===xn||e===An)&&(t+=1)}var r=q(n);n.remove(),n=r}}var kt,Dn,Bt,Vt;function me(){if(kt===void 0){kt=window,Dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Bt=G(n,"firstChild").get,Vt=G(n,"nextSibling").get,Dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Dt(e)&&(e.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function yt(t){return Bt.call(t)}function q(t){return Vt.call(t)}function Te(t,n){if(!F)return yt(t);var e=yt(A);if(e===null)e=A.appendChild(wt());else if(n&&e.nodeType!==3){var r=wt();return e==null||e.before(r),W(r),r}return W(e),e}function xe(t,n){if(!F){var e=yt(t);return e instanceof Comment&&e.data===""?q(e):e}return A}function Ae(t,n=1,e=!1){let r=F?A:t;for(var a;n--;)a=r,r=q(r);if(!F)return r;var l=r==null?void 0:r.nodeType;if(e&&l!==3){var _=wt();return r===null?a==null||a.after(_):r.before(_),W(_),_}return W(r),r}function Re(t){t.textContent=""}function xt(t){var n=b|S,e=v!==null&&(v.f&b)!==0?v:null;return h===null||e!==null&&(e.f&x)!==0?n|=x:h.f|=qt,{ctx:d,deps:null,effects:null,equals:jt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function be(t){const n=xt(t);return nn(n),n}function De(t){const n=xt(t);return n.equals=Lt,n}function Gt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)M(n[e])}}function In(t){for(var n=t.parent;n!==null;){if((n.f&b)===0)return n;n=n.parent}return null}function On(t){var n,e=h;st(In(t));try{Gt(t),n=an(t)}finally{st(e)}return n}function Kt(t){var n=On(t),e=(P||(t.f&x)!==0)&&t.deps!==null?U:m;D(t,e),t.equals(n)||(t.v=n,t.wv=rn())}function Zt(t){h===null&&v===null&&yn(),v!==null&&(v.f&x)!==0&&h===null&&wn(),z&&dn()}function kn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function B(t,n,e,r=!0){var a=h,l={ctx:d,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(e)try{At(l),l.f|=vn}catch(u){throw M(l),u}else n!==null&&ht(l);var _=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(qt|et))===0;if(!_&&r&&(a!==null&&kn(l,a),v!==null&&(v.f&b)!==0)){var c=v;(c.effects??(c.effects=[])).push(l)}return l}function Nn(t){const n=B(it,null,!1);return D(n,m),n.teardown=t,n}function Ie(t){Zt();var n=h!==null&&(h.f&I)!==0&&d!==null&&!d.m;if(n){var e=d;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=$t(t);return r}}function Oe(t){return Zt(),Pn(t)}function ke(t){const n=B(H,t,!0);return(e={})=>new Promise(r=>{e.outro?Fn(n,()=>{M(n),r(void 0)}):(M(n),r(void 0))})}function $t(t){return B(Ft,t,!1)}function Pn(t){return B(it,t,!0)}function Ne(t,n=[],e=xt){const r=n.map(e);return Sn(()=>t(...r.map(V)))}function Sn(t,n=0){return B(it|mt|n,t,!0)}function Pe(t,n=!0){return B(it|I,t,!0,n)}function Wt(t){var n=t.teardown;if(n!==null){const e=z,r=v;Pt(!0),Y(null);try{n.call(null)}finally{Pt(e),Y(r)}}}function Xt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&H)!==0?e.parent=null:M(e,n),e=r}}function Cn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&I)===0&&M(n),n=e}}function M(t,n=!0){var e=!1;if((n||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:q(r);r.remove(),r=l}e=!0}Xt(t,n&&!e),ut(t,0),D(t,ot);var _=t.transitions;if(_!==null)for(const u of _)u.stop();Wt(t);var c=t.parent;c!==null&&c.first!==null&&zt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function zt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Fn(t,n){var e=[];Jt(t,e,!0),Mn(e,()=>{M(t),n&&n()})}function Mn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var a of t)a.out(r)}else n()}function Jt(t,n,e){if((t.f&L)===0){if(t.f^=L,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Mt)!==0||(r.f&I)!==0;Jt(r,n,l?e:!1),r=a}}}function Se(t){Qt(t,!0)}function Qt(t,n){if((t.f&L)!==0){t.f^=L,(t.f&m)===0&&(t.f^=m),J(t)&&(D(t,S),ht(t));for(var e=t.first;e!==null;){var r=e.next,a=(e.f&Mt)!==0||(e.f&I)!==0;Qt(e,a?n:!1),e=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let X=[],Et=[];function tn(){var t=X;X=[],Ct(t)}function qn(){var t=Et;Et=[],Ct(t)}function Ce(t){X.length===0&&queueMicrotask(tn),X.push(t)}function Nt(){X.length>0&&tn(),Et.length>0&&qn()}let nt=!1,lt=!1,at=null,C=!1,z=!1;function Pt(t){z=t}let Z=[];let v=null,R=!1;function Y(t){v=t}let h=null;function st(t){h=t}let y=null;function jn(t){y=t}function nn(t){v!==null&&v.f&dt&&(y===null?jn([t]):y.push(t))}let w=null,g=0,T=null;function Ln(t){T=t}let en=1,ft=0,P=!1;function rn(){return++en}function J(t){var i;var n=t.f;if((n&S)!==0)return!0;if((n&U)!==0){var e=t.deps,r=(n&x)!==0;if(e!==null){var a,l,_=(n&rt)!==0,c=r&&h!==null&&!P,u=e.length;if(_||c){var s=t,f=s.parent;for(a=0;a<u;a++)l=e[a],(_||!((i=l==null?void 0:l.reactions)!=null&&i.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);_&&(s.f^=rt),c&&f!==null&&(f.f&x)===0&&(s.f^=x)}for(a=0;a<u;a++)if(l=e[a],J(l)&&Kt(l),l.wv>t.wv)return!0}(!r||h!==null&&!P)&&D(t,m)}return!1}function Yn(t,n){for(var e=n;e!==null;){if((e.f&et)!==0)try{e.fn(t);return}catch{e.f^=et}e=e.parent}throw nt=!1,t}function Hn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,n,e,r){if(nt){if(e===null&&(nt=!1),Hn(n))throw t;return}e!==null&&(nt=!0);{Yn(t,n);return}}function ln(t,n,e=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];y!=null&&y.includes(t)||((l.f&b)!==0?ln(l,n,!1):n===l&&(e?D(l,S):(l.f&m)!==0&&D(l,U),ht(l)))}}function an(t){var p;var n=w,e=g,r=T,a=v,l=P,_=y,c=d,u=R,s=t.f;w=null,g=0,T=null,P=(s&x)!==0&&(R||!C||v===null),v=(s&(I|H))===0?t:null,y=null,It(t.ctx),R=!1,ft++,t.f|=dt;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ut(t,g),i!==null&&g>0)for(i.length=g+w.length,o=0;o<w.length;o++)i[g+o]=w[o];else t.deps=i=w;if(!P)for(o=g;o<i.length;o++)((p=i[o]).reactions??(p.reactions=[])).push(t)}else i!==null&&g<i.length&&(ut(t,g),i.length=g);if(ct()&&T!==null&&!R&&i!==null&&(t.f&(b|U|S))===0)for(o=0;o<T.length;o++)ln(T[o],t);return a!==null&&(ft++,T!==null&&(r===null?r=T:r.push(...T))),f}finally{w=n,g=e,T=r,v=a,P=l,y=_,It(c),R=u,t.f^=dt}}function Un(t,n){let e=n.reactions;if(e!==null){var r=un.call(e,t);if(r!==-1){var a=e.length-1;a===0?e=n.reactions=null:(e[r]=e[a],e.pop())}}e===null&&(n.f&b)!==0&&(w===null||!w.includes(n))&&(D(n,U),(n.f&(x|rt))===0&&(n.f^=rt),Gt(n),ut(n,0))}function ut(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Un(t,e[r])}function At(t){var n=t.f;if((n&ot)===0){D(t,m);var e=h,r=d,a=C;h=t,C=!0;try{(n&mt)!==0?Cn(t):Xt(t),Wt(t);var l=an(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var _=t.deps,c}catch(u){vt(u,t,e,r||t.ctx)}finally{C=a,h=e}}}function Bn(){try{En()}catch(t){if(at!==null)vt(t,at,null);else throw t}}function sn(){var t=C;try{var n=0;for(C=!0;Z.length>0;){n++>1e3&&Bn();var e=Z,r=e.length;Z=[];for(var a=0;a<r;a++){var l=Gn(e[a]);Vn(l)}}}finally{lt=!1,C=t,at=null,$.clear()}}function Vn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(ot|L))===0)try{J(r)&&(At(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?zt(r):r.fn=null))}catch(a){vt(a,r,null,r.ctx)}}}function ht(t){lt||(lt=!0,queueMicrotask(sn));for(var n=at=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(H|I))!==0){if((e&m)===0)return;n.f^=m}}Z.push(n)}function Gn(t){for(var n=[],e=t;e!==null;){var r=e.f,a=(r&(I|H))!==0,l=a&&(r&m)!==0;if(!l&&(r&L)===0){if((r&Ft)!==0)n.push(e);else if(a)e.f^=m;else{var _=v;try{v=e,J(e)&&At(e)}catch(s){vt(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var u=e.parent;for(e=e.next;e===null&&u!==null;)e=u.next,u=u.parent}return n}function Kn(t){var n;for(Nt();Z.length>0;)lt=!0,sn(),Nt();return n}async function Fe(){await Promise.resolve(),Kn()}function V(t){var n=t.f,e=(n&b)!==0;if(v!==null&&!R){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,w===null&&r!==null&&r[g]===t?g++:w===null?w=[t]:(!P||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&x)===0&&(a.f^=x)}return e&&(a=t,J(a)&&Kt(a)),z&&$.has(t)?$.get(t):t.v}function Me(t){var n=R;try{return R=!0,t()}finally{R=n}}const Zn=-7169;function D(t,n){t.f=t.f&Zn|n}function qe(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)gt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&K in e&&gt(e)}}}function gt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],n)}catch{}const e=St(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=on(e);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{xe as $,Re as A,Mn as B,M as C,re as D,le as E,ae as F,q as G,An as H,L as I,fn as J,Ae as K,Te as L,ye as M,Ee as N,Ne as O,Wn as P,Y as Q,st as R,v as S,me as T,xn as U,Yt as V,Ht as W,te as X,ke as Y,ve as Z,he as _,Me as a,Oe as a0,Ct as a1,zn as a2,qe as a3,xt as a4,Dn as a5,_e as a6,ce as a7,Mt as a8,E as a9,$t as aa,Pn as ab,Ce as ac,K as ad,G as ae,ne as af,Jn as ag,ue as ah,Lt as ai,j as aj,N as ak,ie as al,Qn as am,fe as an,se as ao,oe as ap,Kn as aq,k as ar,Fe as as,be as at,Xn as au,pn as av,wt as b,d as c,Sn as d,ee as e,we as f,yt as g,F as h,V as i,De as j,de as k,_t as l,A as m,Rn as n,Se as o,Pe as p,Fn as q,ge as r,W as s,$n as t,Ie as u,h as v,bn as w,pe as x,Tt as y,Jt as z};
