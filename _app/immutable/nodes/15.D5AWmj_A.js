import{s as q,y as b,e as h,a as y,c as m,b as $,q as D,g as E,f as g,m as p,i as I,h as v,A as T}from"../chunks/scheduler.Bh2TjGwV.js";import{S,i as k,f as C,b as x,d as A,m as P,t as W,a as j,e as z}from"../chunks/index.TvtXsUKR.js";import{T as B}from"../chunks/Tv.fWbvuyUr.js";function F(i){let s,a,t,l="Windowed TV",r,e,d,u,f;function w(n){i[1](n)}function V(n){i[2](n)}let _={};return i[0]!==void 0&&(_.config=i[0]),i[0].channels!==void 0&&(_.channels=i[0].channels),e=new B({props:_}),b.push(()=>C(e,"config",w)),b.push(()=>C(e,"channels",V)),{c(){s=h("div"),a=h("div"),t=h("div"),t.textContent=l,r=y(),x(e.$$.fragment),this.h()},l(n){s=m(n,"DIV",{class:!0});var c=$(s);a=m(c,"DIV",{class:!0});var o=$(a);t=m(o,"DIV",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-1470x8o"&&(t.textContent=l),r=E(o),A(e.$$.fragment,o),o.forEach(g),c.forEach(g),this.h()},h(){p(t,"class","title-bar"),p(a,"class","window active absolute"),p(s,"class","container mx-auto grid grid-cols-2 gap-4")},m(n,c){I(n,s,c),v(s,a),v(a,t),v(a,r),P(e,a,null),f=!0},p(n,[c]){const o={};!d&&c&1&&(d=!0,o.config=n[0],T(()=>d=!1)),!u&&c&1&&(u=!0,o.channels=n[0].channels,T(()=>u=!1)),e.$set(o)},i(n){f||(W(e.$$.fragment,n),f=!0)},o(n){j(e.$$.fragment,n),f=!1},d(n){n&&g(s),z(e)}}}function G(i,s,a){var t={channels:{1:{name:"Test",number:1,abbr:"TEST",engine:"generator",hasContent:!0}}};function l(e){t=e,a(0,t)}function r(e){i.$$.not_equal(t.channels,e)&&(t.channels=e,a(0,t))}return[t,l,r]}class L extends S{constructor(s){super(),k(this,s,G,F,q,{})}}export{L as component};