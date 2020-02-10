!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SvelteTable=t()}(this,(function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n,l){if(e){const o=s(e,t,n,l);return e[0](o)}}function s(e,t,n,l){return e[1]&&l?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](l(t))):n.ctx}function i(e,t,n,l){if(e[2]&&l){const o=e[2](l(n));if("object"==typeof t.dirty){const e=[],n=Math.max(t.dirty.length,o.length);for(let l=0;l<n;l+=1)e[l]=t.dirty[l]|o[l];return e}return t.dirty|o}return t.dirty}function u(e){return null==e?"":e}function f(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function y(){return p(" ")}function g(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}let b;function k(e){b=e}function _(){const e=function(){if(!b)throw new Error("Function called outside component initialization");return b}();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const o=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);l.slice().forEach(t=>{t.call(e,o)})}}}const N=[],O=[],x=[],T=[],E=Promise.resolve();let C=!1;function S(e){x.push(e)}function A(){const e=new Set;do{for(;N.length;){const e=N.shift();k(e),B(e.$$)}for(;O.length;)O.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];e.has(n)||(n(),e.add(n))}x.length=0}while(N.length);for(;T.length;)T.pop()();C=!1}function B(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const j=new Set;let V;function R(e,t){e&&e.i&&(j.delete(e),e.i(t))}function D(e,t,n,l){if(e&&e.o){if(j.has(e))return;j.add(e),V.c.push(()=>{j.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function L(e,t){-1===e.$$.dirty[0]&&(N.push(e),C||(C=!0,E.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(r,c,s,i,u,f,a=[-1]){const d=b;k(r);const m=c.props||{},h=r.$$={fragment:null,ctx:null,props:f,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:a};let p=!1;h.ctx=s?s(r,m,(e,t,n=t)=>(h.ctx&&u(h.ctx[e],h.ctx[e]=n)&&(h.bound[e]&&h.bound[e](n),p&&L(r,e)),t)):[],h.update(),p=!0,l(h.before_update),h.fragment=!!i&&i(h.ctx),c.target&&(c.hydrate?h.fragment&&h.fragment.l(function(e){return Array.from(e.childNodes)}(c.target)):h.fragment&&h.fragment.c(),c.intro&&R(r.$$.fragment),function(e,n,r){const{fragment:c,on_mount:s,on_destroy:i,after_update:u}=e.$$;c&&c.m(n,r),S(()=>{const n=s.map(t).filter(o);i?i.push(...n):l(n),e.$$.on_mount=[]}),u.forEach(S)}(r,c.target,c.anchor),A()),k(d)}class q{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function H(e,t,n){const l=e.slice();return l[34]=t[n],l}const z=e=>({row:8192&e[0]}),F=e=>({row:e[31],n:e[33]});function I(e,t,n){const l=e.slice();return l[31]=t[n],l[33]=n,l}function P(e,t,n){const l=e.slice();return l[34]=t[n],l}const G=e=>({sortOrder:2&e[0],sortBy:1&e[0]}),J=e=>({sortOrder:e[1],sortBy:e[0]});function K(e,t,n){const l=e.slice();return l[41]=t[n],l}function Q(e,t,n){const l=e.slice();return l[34]=t[n],l}function U(e){let t,n,l,o,r=e[11][e[34].key],c=[];for(let t=0;t<r.length;t+=1)c[t]=W(K(e,r,t));function s(){e[27].call(t,e[34])}return{c(){t=h("select"),n=h("option");for(let e=0;e<c.length;e+=1)c[e].c();n.__value=void 0,n.value=n.__value,v(t,"class",l=u(e[15](e[8]))+" svelte-w7dofd"),void 0===e[12][e[34].key]&&S(s),o=g(t,"change",s)},m(l,o){a(l,t,o),f(t,n);for(let e=0;e<c.length;e+=1)c[e].m(t,null);w(t,e[12][e[34].key])},p(n,o){if(e=n,2052&o[0]){let n;for(r=e[11][e[34].key],n=0;n<r.length;n+=1){const l=K(e,r,n);c[n]?c[n].p(l,o):(c[n]=W(l),c[n].c(),c[n].m(t,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}256&o[0]&&l!==(l=u(e[15](e[8]))+" svelte-w7dofd")&&v(t,"class",l),4100&o[0]&&w(t,e[12][e[34].key])},d(e){e&&d(t),m(c,e),o()}}}function W(e){let t,n,l,o=e[41].name+"";return{c(){t=h("option"),n=p(o),t.__value=l=e[41].value,t.value=t.__value},m(e,l){a(e,t,l),f(t,n)},p(e,r){2052&r[0]&&o!==(o=e[41].name+"")&&$(n,o),2052&r[0]&&l!==(l=e[41].value)&&(t.__value=l),t.value=t.__value},d(e){e&&d(t)}}}function X(e){let t,n,l=void 0!==e[11][e[34].key]&&U(e);return{c(){t=h("th"),l&&l.c(),n=y()},m(e,o){a(e,t,o),l&&l.m(t,null),f(t,n)},p(e,o){void 0!==e[11][e[34].key]?l?l.p(e,o):(l=U(e),l.c(),l.m(t,n)):l&&(l.d(1),l=null)},d(e){e&&d(t),l&&l.d()}}}function Y(e){let t,n=(1===e[1]?e[3]:e[4])+"";return{c(){t=p(n)},m(e,n){a(e,t,n)},p(e,l){26&l[0]&&n!==(n=(1===e[1]?e[3]:e[4])+"")&&$(t,n)},d(e){e&&d(t)}}}function Z(e){let t,n,l,o,r,c,s=e[34].title+"",i=e[0]===e[34].key&&Y(e);function m(...t){return e[28](e[34],...t)}return{c(){t=h("th"),n=p(s),l=y(),i&&i.c(),o=y(),v(t,"class",r=u(e[15]([e[34].sortable?"isSortable":null,e[34].headerClass]))+" svelte-w7dofd"),c=g(t,"click",m)},m(e,r){a(e,t,r),f(t,n),f(t,l),i&&i.m(t,null),f(t,o)},p(l,c){e=l,4&c[0]&&s!==(s=e[34].title+"")&&$(n,s),e[0]===e[34].key?i?i.p(e,c):(i=Y(e),i.c(),i.m(t,o)):i&&(i.d(1),i=null),4&c[0]&&r!==(r=u(e[15]([e[34].sortable?"isSortable":null,e[34].headerClass]))+" svelte-w7dofd")&&v(t,"class",r)},d(e){e&&d(t),i&&i.d(),c()}}}function ee(e){let t,n,l,o=(e[34].renderValue?e[34].renderValue(e[31]):e[34].value(e[31]))+"";function r(...t){return e[29](e[31],e[34],...t)}return{c(){t=h("td"),v(t,"class",n=u(e[15]([e[34].class,e[10]]))+" svelte-w7dofd"),l=g(t,"click",r)},m(e,n){a(e,t,n),t.innerHTML=o},p(l,r){e=l,8196&r[0]&&o!==(o=(e[34].renderValue?e[34].renderValue(e[31]):e[34].value(e[31]))+"")&&(t.innerHTML=o),1028&r[0]&&n!==(n=u(e[15]([e[34].class,e[10]]))+" svelte-w7dofd")&&v(t,"class",n)},d(e){e&&d(t),l()}}}function te(e){let t,n,l,o,r;const f=e[26].row,p=c(f,e,e[25],F);let $=e[2],w=[];for(let t=0;t<$.length;t+=1)w[t]=ee(H(e,$,t));function b(...t){return e[30](e[31],...t)}return{c(){if(!p){t=h("tr");for(let e=0;e<w.length;e+=1)w[e].c();l=y()}p&&p.c(),p||(v(t,"class",n=u(e[15](e[9]))+" svelte-w7dofd"),o=g(t,"click",b))},m(e,n){if(!p){a(e,t,n);for(let e=0;e<w.length;e+=1)w[e].m(t,null);a(e,l,n)}p&&p.m(e,n),r=!0},p(l,o){if(e=l,!p){if(304132&o[0]){let n;for($=e[2],n=0;n<$.length;n+=1){const l=H(e,$,n);w[n]?w[n].p(l,o):(w[n]=ee(l),w[n].c(),w[n].m(t,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=$.length}(!r||512&o[0]&&n!==(n=u(e[15](e[9]))+" svelte-w7dofd"))&&v(t,"class",n)}p&&p.p&&33562624&o[0]&&p.p(s(f,e,e[25],F),i(f,e[25],o,z))},i(e){r||(R(p,e),r=!0)},o(e){D(p,e),r=!1},d(e){p||(e&&d(t),m(w,e),e&&d(l),o()),p&&p.d(e)}}}function ne(e){let t,n,o,r,p,g,$,w,b,k,_=e[14]&&function(e){let t,n=e[2],l=[];for(let t=0;t<n.length;t+=1)l[t]=X(Q(e,n,t));return{c(){t=h("tr");for(let e=0;e<l.length;e+=1)l[e].c();v(t,"class","svelte-w7dofd")},m(e,n){a(e,t,n);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(e,o){if(39172&o[0]){let r;for(n=e[2],r=0;r<n.length;r+=1){const c=Q(e,n,r);l[r]?l[r].p(c,o):(l[r]=X(c),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(e){e&&d(t),m(l,e)}}}(e);const N=e[26].header,O=c(N,e,e[25],J);let x=e[2],T=[];for(let t=0;t<x.length;t+=1)T[t]=Z(P(e,x,t));let E=e[13],C=[];for(let t=0;t<E.length;t+=1)C[t]=te(I(e,E,t));const S=e=>D(C[e],1,1,()=>{C[e]=null});return{c(){if(t=h("table"),n=h("thead"),_&&_.c(),o=y(),!O){r=h("tr");for(let e=0;e<T.length;e+=1)T[e].c()}O&&O.c(),g=y(),$=h("tbody");for(let e=0;e<C.length;e+=1)C[e].c();v(n,"class",p=u(e[15](e[6]))+" svelte-w7dofd"),v($,"class",w=u(e[15](e[7]))+" svelte-w7dofd"),v(t,"class",b=u(e[15](e[5]))+" svelte-w7dofd")},m(e,l){if(a(e,t,l),f(t,n),_&&_.m(n,null),f(n,o),!O){f(n,r);for(let e=0;e<T.length;e+=1)T[e].m(r,null)}O&&O.m(n,null),f(t,g),f(t,$);for(let e=0;e<C.length;e+=1)C[e].m($,null);k=!0},p(e,o){if(e[14]&&_.p(e,o),!O&&98335&o[0]){let t;for(x=e[2],t=0;t<x.length;t+=1){const n=P(e,x,t);T[t]?T[t].p(n,o):(T[t]=Z(n),T[t].c(),T[t].m(r,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=x.length}if(O&&O.p&&33554435&o[0]&&O.p(s(N,e,e[25],J),i(N,e[25],o,G)),(!k||64&o[0]&&p!==(p=u(e[15](e[6]))+" svelte-w7dofd"))&&v(n,"class",p),33990148&o[0]){let t;for(E=e[13],t=0;t<E.length;t+=1){const n=I(e,E,t);C[t]?(C[t].p(n,o),R(C[t],1)):(C[t]=te(n),C[t].c(),R(C[t],1),C[t].m($,null))}for(V={r:0,c:[],p:V},t=E.length;t<C.length;t+=1)S(t);V.r||l(V.c),V=V.p}(!k||128&o[0]&&w!==(w=u(e[15](e[7]))+" svelte-w7dofd"))&&v($,"class",w),(!k||32&o[0]&&b!==(b=u(e[15](e[5]))+" svelte-w7dofd"))&&v(t,"class",b)},i(e){if(!k){R(O,e);for(let e=0;e<E.length;e+=1)R(C[e]);k=!0}},o(e){D(O,e),C=C.filter(Boolean);for(let e=0;e<C.length;e+=1)D(C[e]);k=!1},d(e){e&&d(t),_&&_.d(),O||m(T,e),O&&O.d(e),m(C,e)}}}function le(e,t,n){const l=_();let{columns:o}=t,{rows:r}=t,{sortBy:c=""}=t,{sortOrder:s=1}=t,{iconAsc:i="▲"}=t,{iconDesc:u="▼"}=t,{classNameTable:f=""}=t,{classNameThead:a=""}=t,{classNameTbody:d=""}=t,{classNameSelect:m=""}=t,{classNameRow:h=""}=t,{classNameCell:p=""}=t,y=()=>"",g=o.some(e=>void 0!==e.filterOptions),v={},$={},w={};o.forEach(e=>{n(21,w[e.key]=e,w)});const b=()=>{n(11,v={}),o.forEach(e=>{"function"==typeof e.filterOptions?n(11,v[e.key]=e.filterOptions(r),v):Array.isArray(e.filterOptions)&&n(11,v[e.key]=e.filterOptions.map(e=>({name:e,value:e})),v)})},k=e=>{n(1,s=e===c&&1===s?-1:1)},N=e=>{k(e.key),n(0,c=e.key),l("clickCol",{key:e.key})},O=e=>{l("clickRow",{row:e})},x=(e,t)=>{l("clickCell",{row:e,key:t})};g&&b();let{$$slots:T={},$$scope:E}=t;let C;return e.$set=e=>{"columns"in e&&n(2,o=e.columns),"rows"in e&&n(19,r=e.rows),"sortBy"in e&&n(0,c=e.sortBy),"sortOrder"in e&&n(1,s=e.sortOrder),"iconAsc"in e&&n(3,i=e.iconAsc),"iconDesc"in e&&n(4,u=e.iconDesc),"classNameTable"in e&&n(5,f=e.classNameTable),"classNameThead"in e&&n(6,a=e.classNameThead),"classNameTbody"in e&&n(7,d=e.classNameTbody),"classNameSelect"in e&&n(8,m=e.classNameSelect),"classNameRow"in e&&n(9,h=e.classNameRow),"classNameCell"in e&&n(10,p=e.classNameCell),"$$scope"in e&&n(25,E=e.$$scope)},e.$$.update=()=>{if(2097153&e.$$.dirty[0]){let e=w[c];void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&n(20,y=t=>e.value(t))}3674114&e.$$.dirty[0]&&n(13,C=r.filter(e=>Object.keys($).every(t=>{return void 0===$[t]||$[t]===("function"==typeof w[t].filterValue?w[t].filterValue(e):w[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:y(e)})).sort((e,t)=>e.$sortOn>t.$sortOn?s:e.$sortOn<t.$sortOn?-s:0))},[c,s,o,i,u,f,a,d,m,h,p,v,$,C,g,e=>[].concat(e).filter(e=>"string"==typeof e),N,O,x,r,y,w,l,b,k,E,T,function(e){$[e.key]=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(12,$),n(2,o),n(11,v)},e=>N(e),(e,t)=>{x(e,t.key)},e=>{O(e)}]}return class extends q{constructor(e){var t;super(),document.getElementById("svelte-w7dofd-style")||((t=h("style")).id="svelte-w7dofd-style",t.textContent="table.svelte-w7dofd.svelte-w7dofd{width:100%}.isSortable.svelte-w7dofd.svelte-w7dofd{cursor:pointer}tr.svelte-w7dofd th select.svelte-w7dofd{width:100%}",f(document.head,t)),M(this,e,le,ne,r,{columns:2,rows:19,sortBy:0,sortOrder:1,iconAsc:3,iconDesc:4,classNameTable:5,classNameThead:6,classNameTbody:7,classNameSelect:8,classNameRow:9,classNameCell:10},[-1,-1])}}}));
//# sourceMappingURL=SvelteTable.js.map
