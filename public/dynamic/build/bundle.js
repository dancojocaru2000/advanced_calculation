var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let v;function y(t){v=t}function k(){if(!v)throw new Error("Function called outside component initialization");return v}function b(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const l=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,l)}))}}}const x=[],_=[],w=[],E=[],N=Promise.resolve();let C=!1;function S(t){w.push(t)}let A=!1;const T=new Set;function j(){if(!A){A=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];y(e),M(e.$$)}for(y(null),x.length=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];T.has(e)||(T.add(e),e())}w.length=0}while(x.length);for(;E.length;)E.pop()();C=!1,A=!1,T.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const L=new Set;let O;function P(){O={r:0,c:[],p:O}}function q(){O.r||o(O.c),O=O.p}function B(t,e){t&&t.i&&(L.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),O.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function R(t,e){t.d(1),e.delete(t.key)}function z(t,n,r,c){const{fragment:u,on_mount:s,on_destroy:a,after_update:i}=t.$$;u&&u.m(n,r),c||S((()=>{const n=s.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(S)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,N.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,l,r,c,u,s,i,f=[-1]){const p=v;y(e);const d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:l.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:l.target||p.$$.root};i&&i(d.root);let m=!1;if(d.ctx=r?r(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return d.ctx&&u(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),m&&U(e,t)),n})):[],d.update(),m=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();l.intro&&B(e.$$.fragment),z(e,l.target,l.anchor,l.customElement),j()}y(p)}class G{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n,l,r,c,v,y,k,b,x,_,w=e[1]+1+"";return{c(){n=i("main"),l=i("div"),r=i("h3"),c=f("Parameter "),v=f(w),y=p(),k=i("input"),m(k,"type","number"),m(k,"name",b=`param${e[1]}`),m(l,"class","card svelte-16e0qnc")},m(t,o){s(t,n,o),u(n,l),u(l,r),u(r,c),u(r,v),u(l,y),u(l,k),$(k,e[0]),x||(_=[d(k,"input",e[4]),d(k,"keyup",e[2]),d(k,"change",e[3])],x=!0)},p(t,[e]){2&e&&w!==(w=t[1]+1+"")&&h(v,w),2&e&&b!==(b=`param${t[1]}`)&&m(k,"name",b),1&e&&g(k.value)!==t[0]&&$(k,t[0])},i:t,o:t,d(t){t&&a(n),x=!1,o(_)}}}function J(t,e,n){const o=b();let{paramNo:l}=e,{value:r}=e;function c(){o("change",{paramNo:l,value:r})}return t.$$set=t=>{"paramNo"in t&&n(1,l=t.paramNo),"value"in t&&n(0,r=t.value)},[r,l,function(){c()},c,function(){r=g(this.value),n(0,r)}]}class K extends G{constructor(t){super(),D(this,t,J,H,r,{paramNo:1,value:0})}}function Q(t,e,n){const o=t.slice();return o[8]=e[n],o}function V(t,e,n){const o=t.slice();return o[11]=e[n],o}function W(e){let n;return{c(){n=i("p"),n.textContent="Loading..."},m(t,e){s(t,n,e)},p:t,d(t){t&&a(n)}}}function X(t){let e,n=[],o=new Map,l=t[1];const r=t=>t[11].name;for(let e=0;e<l.length;e+=1){let c=V(t,l,e),u=r(c);o.set(u,n[e]=Y(u,c))}return{c(){e=i("ul");for(let t=0;t<n.length;t+=1)n[t].c();m(e,"id","operations-list"),m(e,"class","svelte-1pgkeg5")},m(t,o){s(t,e,o);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,c){19&c&&(l=t[1],n=function(t,e,n,o,l,r,c,u,s,a,i,f){let p=t.length,d=r.length,m=p;const g={};for(;m--;)g[t[m].key]=m;const h=[],$=new Map,v=new Map;for(m=d;m--;){const t=f(l,r,m),u=n(t);let s=c.get(u);s?o&&s.p(t,e):(s=a(u,t),s.c()),$.set(u,h[m]=s),u in g&&v.set(u,Math.abs(m-g[u]))}const y=new Set,k=new Set;function b(t){B(t,1),t.m(u,i),c.set(t.key,t),i=t.first,d--}for(;p&&d;){const e=h[d-1],n=t[p-1],o=e.key,l=n.key;e===n?(i=e.first,p--,d--):$.has(l)?!c.has(o)||y.has(o)?b(e):k.has(l)?p--:v.get(o)>v.get(l)?(k.add(o),b(e)):(y.add(l),p--):(s(n,c),p--)}for(;p--;){const e=t[p];$.has(e.key)||s(e,c)}for(;d;)b(h[d-1]);return h}(n,c,r,1,t,l,o,e,R,Y,null,V))},d(t){t&&a(e);for(let t=0;t<n.length;t+=1)n[t].d()}}}function Y(t,e){let n,o,r,p,g,$,v=e[11].name+"";return{key:t,first:null,c(){n=i("li"),o=f(v),m(n,"id",r=`op-${e[11].name}`),m(n,"class",p=c(e[0]===e[11]?"selected":"")+" svelte-1pgkeg5"),this.first=n},m(t,r){s(t,n,r),u(n,o),g||($=d(n,"click",(function(){l(e[4](e[11]))&&e[4](e[11]).apply(this,arguments)})),g=!0)},p(t,l){e=t,2&l&&v!==(v=e[11].name+"")&&h(o,v),2&l&&r!==(r=`op-${e[11].name}`)&&m(n,"id",r),3&l&&p!==(p=c(e[0]===e[11]?"selected":"")+" svelte-1pgkeg5")&&m(n,"class",p)},d(t){t&&a(n),g=!1,$()}}}function Z(t){let e,n,o,l,r,c,f=t[3],d=[];for(let e=0;e<f.length;e+=1)d[e]=et(Q(t,f,e));const g=t=>F(d[t],1,1,(()=>{d[t]=null}));let h=t[2]&&nt(t);return{c(){e=i("div"),n=i("div"),o=i("h2"),o.textContent="Input Parameters",l=p();for(let t=0;t<d.length;t+=1)d[t].c();r=p(),h&&h.c(),m(o,"class","svelte-1pgkeg5"),m(n,"id","params-pane"),m(n,"class","svelte-1pgkeg5"),m(e,"id","right-side"),m(e,"class","svelte-1pgkeg5")},m(t,a){s(t,e,a),u(e,n),u(n,o),u(n,l);for(let t=0;t<d.length;t+=1)d[t].m(n,null);u(e,r),h&&h.m(e,null),c=!0},p(t,o){if(40&o){let e;for(f=t[3],e=0;e<f.length;e+=1){const l=Q(t,f,e);d[e]?(d[e].p(l,o),B(d[e],1)):(d[e]=et(l),d[e].c(),B(d[e],1),d[e].m(n,null))}for(P(),e=f.length;e<d.length;e+=1)g(e);q()}t[2]?h?h.p(t,o):(h=nt(t),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},i(t){if(!c){for(let t=0;t<f.length;t+=1)B(d[t]);c=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)F(d[t]);c=!1},d(t){t&&a(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(d,t),h&&h.d()}}}function tt(t){let e,n;return e=new K({props:{paramNo:t[8],value:""}}),e.$on("change",t[5]),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){z(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.paramNo=t[8]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function et(e){let n,o,l=e[0],c=tt(e);return{c(){c.c(),n=f("")},m(t,e){c.m(t,e),s(t,n,e),o=!0},p(e,o){1&o&&r(l,l=e[0])?(P(),F(c,1,1,t),q(),c=tt(e),c.c(),B(c),c.m(n.parentNode,n)):c.p(e,o)},i(t){o||(B(c),o=!0)},o(t){F(c),o=!1},d(t){t&&a(n),c.d(t)}}}function nt(t){let e,n,o,l,r,c,d,g=t[2].opStr+"",$=t[2].result+"";return{c(){e=i("div"),n=i("h2"),n.textContent="Result",o=p(),l=i("p"),r=f(g),c=f(" = "),d=f($),m(n,"class","svelte-1pgkeg5"),m(e,"id","result-pane"),m(e,"class","svelte-1pgkeg5")},m(t,a){s(t,e,a),u(e,n),u(e,o),u(e,l),u(l,r),u(l,c),u(l,d)},p(t,e){4&e&&g!==(g=t[2].opStr+"")&&h(r,g),4&e&&$!==($=t[2].result+"")&&h(d,$)},d(t){t&&a(e)}}}function ot(t){let e,n,o,l,r,c,f,d,g;function h(t,e){return t[1]?X:W}let $=h(t),v=$(t),y=t[0]&&Z(t);return{c(){e=i("main"),n=i("h1"),n.textContent="Advanced Calculation",o=p(),l=i("div"),r=i("div"),c=i("h2"),c.textContent="Select Operation",f=p(),v.c(),d=p(),y&&y.c(),m(n,"class","svelte-1pgkeg5"),m(c,"class","svelte-1pgkeg5"),m(r,"id","operation-selector"),m(r,"class","svelte-1pgkeg5"),m(l,"id","splitview"),m(l,"class","svelte-1pgkeg5"),m(e,"class","svelte-1pgkeg5")},m(t,a){s(t,e,a),u(e,n),u(e,o),u(e,l),u(l,r),u(r,c),u(r,f),v.m(r,null),u(l,d),y&&y.m(l,null),g=!0},p(t,[e]){$===($=h(t))&&v?v.p(t,e):(v.d(1),v=$(t),v&&(v.c(),v.m(r,null))),t[0]?y?(y.p(t,e),1&e&&B(y,1)):(y=Z(t),y.c(),B(y,1),y.m(l,null)):y&&(P(),F(y,1,1,(()=>{y=null})),q())},i(t){g||(B(y),g=!0)},o(t){F(y),g=!1},d(t){t&&a(e),v.d(),y&&y.d()}}}function lt(t,e,n){let o;var l;l=()=>{fetch("/api/ops").then((t=>t.json())).then((t=>{"ok"===t.status&&n(1,r=t.ops)}))},k().$$.on_mount.push(l);let r=null,c=null,u=[],s=null;const a=function(t,e){let n=null;return function(){const o=arguments;n&&clearTimeout(n),n=setTimeout((()=>{t.apply(null,o)}),e)}}((()=>{const t=new URL(`/api/calculate/${c.name}`,globalThis.location);u.forEach(((e,n)=>{t.searchParams.set(`param${n}`,e.toString())})),fetch(t.toString()).then((t=>t.json())).then((t=>{n(2,s={result:t.result,opStr:t.opStr})}))}),200);return t.$$.update=()=>{1&t.$$.dirty&&n(3,o=c?Array(c.args).fill(null).map(((t,e)=>e)):null)},[c,r,s,o,function(t){n(0,c=t),u=Array(c.args).fill(null),n(2,s=null),setTimeout((()=>{}),0)},function(t){console.log(`paramChanged: ${t}`);const{paramNo:e,value:o}=t.detail;u[e]=parseFloat(o),u.some((t=>!t&&0!==t))?n(2,s=null):a()}]}return new class extends G{constructor(t){super(),D(this,t,lt,ot,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
