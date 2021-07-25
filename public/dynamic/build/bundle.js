var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t){return""===t?null:+t}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $(t,n){t.value=null==n?"":n}let g;function v(t){g=t}function y(){if(!g)throw new Error("Function called outside component initialization");return g}function b(){const t=y();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}const k=[],x=[],_=[],w=[],E=Promise.resolve();let C=!1;function N(t){_.push(t)}let S=!1;const A=new Set;function M(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];v(n),T(n.$$)}for(v(null),k.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];A.has(n)||(A.add(n),n())}_.length=0}while(k.length);for(;w.length;)w.pop()();C=!1,S=!1,A.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const j=new Set;let L;function O(){L={r:0,c:[],p:L}}function P(){L.r||o(L.c),L=L.p}function q(t,n){t&&t.i&&(j.delete(t),t.i(n))}function I(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),L.c.push((()=>{j.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function R(t,n){t.d(1),n.delete(t.key)}function z(t,n){I(t,1,1,(()=>{n.delete(t.key)}))}function B(t,n,e,o,r,l,u,c,s,a,i,f){let d=t.length,p=l.length,m=d;const h={};for(;m--;)h[t[m].key]=m;const $=[],g=new Map,v=new Map;for(m=p;m--;){const t=f(r,l,m),c=e(t);let s=u.get(c);s?o&&s.p(t,n):(s=a(c,t),s.c()),g.set(c,$[m]=s),c in h&&v.set(c,Math.abs(m-h[c]))}const y=new Set,b=new Set;function k(t){q(t,1),t.m(c,i),u.set(t.key,t),i=t.first,p--}for(;d&&p;){const n=$[p-1],e=t[d-1],o=n.key,r=e.key;n===e?(i=n.first,d--,p--):g.has(r)?!u.has(o)||y.has(o)?k(n):b.has(r)?d--:v.get(o)>v.get(r)?(b.add(o),k(n)):(y.add(r),d--):(s(e,u),d--)}for(;d--;){const n=t[d];g.has(n.key)||s(n,u)}for(;p;)k($[p-1]);return $}function F(t,e,l,u){const{fragment:c,on_mount:s,on_destroy:a,after_update:i}=t.$$;c&&c.m(e,l),u||N((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(N)}function U(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function D(t,n){-1===t.$$.dirty[0]&&(k.push(t),C||(C=!0,E.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function G(n,r,l,u,c,a,i,f=[-1]){const d=g;v(n);const p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};i&&i(p.root);let m=!1;if(p.ctx=l?l(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&D(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&q(n.$$.fragment),F(n,r.target,r.anchor,r.customElement),M()}v(d)}class H{$destroy(){U(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(n){let e,r,l,g,v,y,b,k,x,_,w=n[1]+1+"";return{c(){e=a("main"),r=a("div"),l=a("h3"),g=i("Parameter "),v=i(w),y=f(),b=a("input"),p(b,"type","number"),p(b,"name",k=`param${n[1]}`),p(r,"class","card svelte-16e0qnc")},m(t,o){c(t,e,o),u(e,r),u(r,l),u(l,g),u(l,v),u(r,y),u(r,b),$(b,n[0]),x||(_=[d(b,"input",n[4]),d(b,"keyup",n[2]),d(b,"change",n[3])],x=!0)},p(t,[n]){2&n&&w!==(w=t[1]+1+"")&&h(v,w),2&n&&k!==(k=`param${t[1]}`)&&p(b,"name",k),1&n&&m(b.value)!==t[0]&&$(b,t[0])},i:t,o:t,d(t){t&&s(e),x=!1,o(_)}}}function K(t,n,e){const o=b();let{paramNo:r}=n,{value:l}=n;function u(){o("change",{paramNo:r,value:l})}return t.$$set=t=>{"paramNo"in t&&e(1,r=t.paramNo),"value"in t&&e(0,l=t.value)},[l,r,function(){u()},u,function(){l=m(this.value),e(0,l)}]}class Q extends H{constructor(t){super(),G(this,t,K,J,l,{paramNo:1,value:0})}}function V(t,n,e){const o=t.slice();return o[9]=n[e],o}function W(t,n,e){const o=t.slice();return o[12]=n[e],o}function X(n){let e;return{c(){e=a("p"),e.textContent="Loading..."},m(t,n){c(t,e,n)},p:t,d(t){t&&s(e)}}}function Y(t){let n,e=[],o=new Map,r=t[1];const l=t=>t[12].name;for(let n=0;n<r.length;n+=1){let u=W(t,r,n),c=l(u);o.set(c,e[n]=Z(c,u))}return{c(){n=a("ul");for(let t=0;t<e.length;t+=1)e[t].c();p(n,"id","operations-list"),p(n,"class","svelte-726m1u")},m(t,o){c(t,n,o);for(let t=0;t<e.length;t+=1)e[t].m(n,null)},p(t,u){18&u&&(r=t[1],e=B(e,u,l,1,t,r,o,n,R,Z,null,W))},d(t){t&&s(n);for(let t=0;t<e.length;t+=1)e[t].d()}}}function Z(t,n){let e,o,l,f,m=n[12].name+"";return{key:t,first:null,c(){e=a("li"),o=i(m),p(e,"class","svelte-726m1u"),this.first=e},m(t,s){c(t,e,s),u(e,o),l||(f=d(e,"click",(function(){r(n[4](n[12]))&&n[4](n[12]).apply(this,arguments)})),l=!0)},p(t,e){n=t,2&e&&m!==(m=n[12].name+"")&&h(o,m)},d(t){t&&s(e),l=!1,f()}}}function tt(t){let n,e,o,r,l,i,d=[],m=new Map,h=t[3];const $=t=>t[9];for(let n=0;n<h.length;n+=1){let e=V(t,h,n),o=$(e);m.set(o,d[n]=nt(o,e))}let g=t[2]&&et(t);return{c(){n=a("div"),e=a("div"),o=a("h2"),o.textContent="Input Parameters",r=f();for(let t=0;t<d.length;t+=1)d[t].c();l=f(),g&&g.c(),p(o,"class","svelte-726m1u"),p(e,"id","params-pane"),p(e,"class","svelte-726m1u"),p(n,"id","right-side"),p(n,"class","svelte-726m1u")},m(t,s){c(t,n,s),u(n,e),u(e,o),u(e,r);for(let t=0;t<d.length;t+=1)d[t].m(e,null);u(n,l),g&&g.m(n,null),i=!0},p(t,o){40&o&&(h=t[3],O(),d=B(d,o,$,1,t,h,m,e,z,nt,null,V),P()),t[2]?g?g.p(t,o):(g=et(t),g.c(),g.m(n,null)):g&&(g.d(1),g=null)},i(t){if(!i){for(let t=0;t<h.length;t+=1)q(d[t]);i=!0}},o(t){for(let t=0;t<d.length;t+=1)I(d[t]);i=!1},d(t){t&&s(n);for(let t=0;t<d.length;t+=1)d[t].d();g&&g.d()}}}function nt(t,n){let e,o,r;return o=new Q({props:{paramNo:n[9]}}),o.$on("change",n[5]),{key:t,first:null,c(){var t;e=i(""),(t=o.$$.fragment)&&t.c(),this.first=e},m(t,n){c(t,e,n),F(o,t,n),r=!0},p(t,e){n=t;const r={};8&e&&(r.paramNo=n[9]),o.$set(r)},i(t){r||(q(o.$$.fragment,t),r=!0)},o(t){I(o.$$.fragment,t),r=!1},d(t){t&&s(e),U(o,t)}}}function et(t){let n,e,o,r,l,d,m,$=t[2].opStr+"",g=t[2].result+"";return{c(){n=a("div"),e=a("h2"),e.textContent="Result",o=f(),r=a("p"),l=i($),d=i(" = "),m=i(g),p(e,"class","svelte-726m1u"),p(n,"id","result-pane"),p(n,"class","svelte-726m1u")},m(t,s){c(t,n,s),u(n,e),u(n,o),u(n,r),u(r,l),u(r,d),u(r,m)},p(t,n){4&n&&$!==($=t[2].opStr+"")&&h(l,$),4&n&&g!==(g=t[2].result+"")&&h(m,g)},d(t){t&&s(n)}}}function ot(t){let n,e,o,r,l,i,d,m,h;function $(t,n){return t[1]?Y:X}let g=$(t),v=g(t),y=t[0]&&tt(t);return{c(){n=a("main"),e=a("h1"),e.textContent="Advanced Calculation",o=f(),r=a("div"),l=a("div"),i=a("h2"),i.textContent="Select Operation",d=f(),v.c(),m=f(),y&&y.c(),p(e,"class","svelte-726m1u"),p(i,"class","svelte-726m1u"),p(l,"id","operation-selector"),p(l,"class","svelte-726m1u"),p(r,"id","splitview"),p(r,"class","svelte-726m1u"),p(n,"class","svelte-726m1u")},m(t,s){c(t,n,s),u(n,e),u(n,o),u(n,r),u(r,l),u(l,i),u(l,d),v.m(l,null),u(r,m),y&&y.m(r,null),h=!0},p(t,[n]){g===(g=$(t))&&v?v.p(t,n):(v.d(1),v=g(t),v&&(v.c(),v.m(l,null))),t[0]?y?(y.p(t,n),1&n&&q(y,1)):(y=tt(t),y.c(),q(y,1),y.m(r,null)):y&&(O(),I(y,1,1,(()=>{y=null})),P())},i(t){h||(q(y),h=!0)},o(t){I(y),h=!1},d(t){t&&s(n),v.d(),y&&y.d()}}}function rt(t,n,e){let o;var r;r=()=>{fetch("/api/ops").then((t=>t.json())).then((t=>{"ok"===t.status&&e(1,l=t.ops)}))},y().$$.on_mount.push(r);let l=null,u=null,c=[],s=null;const a=function(t,n){let e=null;return function(){const o=arguments;e&&clearTimeout(e),e=setTimeout((()=>{t.apply(null,o)}),n)}}((()=>{const t=new URL(`/api/calculate/${u.name}`,globalThis.location);c.forEach(((n,e)=>{t.searchParams.set(`param${e}`,n.toString())})),fetch(t.toString()).then((t=>t.json())).then((t=>{e(2,s={result:t.result,opStr:t.opStr})}))}),200);return t.$$.update=()=>{t.$$.dirty,1&t.$$.dirty&&e(3,o=u?Array(u.args).fill(null).map(((t,n)=>n)):null)},[u,l,s,o,function(t){e(0,u=t),c=Array(u.args).fill(null),setTimeout((()=>{}),0)},function(t){console.log(`paramChanged: ${t}`);const{paramNo:n,value:o}=t.detail;c[n]=parseInt(o),c.some((t=>!t&&0!==t))||(e(2,s=null),a())}]}return new class extends H{constructor(t){super(),G(this,t,rt,ot,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map