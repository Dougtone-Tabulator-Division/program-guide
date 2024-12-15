import{s as Jl,k as Ql,w as Zl,e as l,a as r,t as Xe,c as s,b as c,q as h,g as i,f as u,d as je,m as e,z as hl,B as m,E as jl,i as Gl,h as t,F as yt,r as b,G as Ne,v as $l,H as ql,I as Rl}from"../chunks/scheduler.Bh2TjGwV.js";import{S as es,i as ts,b as ls,d as ss,m as as,t as ns,a as os,e as rs}from"../chunks/index.TvtXsUKR.js";import{t as pl,i as is}from"../chunks/tv-state.D_n5rjyU.js";import{D as us}from"../chunks/Desktop.B7YvdOi9.js";function Fl(n){let f,o,p,a,k="Automatically Scale Picture",x,Le;return{c(){f=l("label"),o=l("input"),p=r(),a=l("span"),a.textContent=k,this.h()},l(I){f=s(I,"LABEL",{class:!0,for:!0});var g=c(f);o=s(g,"INPUT",{type:!0,id:!0,class:!0}),p=i(g),a=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),h(a)!=="svelte-1l0nxvx"&&(a.textContent=k),g.forEach(u),this.h()},h(){e(o,"type","checkbox"),e(o,"id","manualAutoScale"),e(o,"class","svelte-66zrsz"),e(a,"class","option-text"),e(f,"class","form-control"),e(f,"for","manualAutoScale")},m(I,g){Gl(I,f,g),t(f,o),o.checked=n[0].manualAutoScale,t(f,p),t(f,a),x||(Le=b(o,"change",n[11]),x=!0)},p(I,g){g&1&&(o.checked=I[0].manualAutoScale)},d(I){I&&u(f),x=!1,Le()}}}function cs(n){let f,o,p="Setup",a,k,x,Le="Television Simulator '99",I,g,w,K,st="Configuration",Qe,z,ve,W,at="TV",Ze,_e,X,nt="Examples",$e,be,j,ot="Help",et,E,me,He,vl="Visual Effects",xt,v,q,R,Et,Ae,_l="Disable Blur",Tt,F,G,It,Be,bl="Disable Noise",wt,J,Q,zt,Pe,ml="Disable Scanlines",Nt,Z,$,Lt,De,Cl="Disable Shadow Mask",Ht,ee,te,At,Ue,gl="Override Auto Picture Scaling",Bt,rt,le,Me,kl="Shadow Mask Type:",Pt,y,se,Sl="Configuration Default",ae,yl="Aperture Grille",ne,xl="Slot Mask",oe,El="Dot Mask",it,Dt,re,ie,Ut,Oe,Tl="Disable Screen Bezel",Mt,ue,Ve,Il="Bezel Type:",Ot,T,ce,wl="Configuration Default",de,zl="Cylindrical",fe,Nl="Flat",ut,Vt,he,Ye,Ll="Border Image:",Yt,P,Kt,D,Ke,Hl="Dimensions",Wt,Ce,Al='<div class="ico-exclamation"></div> Be careful when changing these values. I&#39;ve only tested on a 640x480 resolution.',Xt,N,ge,jt,L,qt,ke,Rt,H,Ft,Se,Gt,A,Jt,ye,Qt,B,Zt,U,We,Bl="Integrations",$t,xe,el,M,tl,O,ll,pe,Pl="Remote",sl,V,al,Ee,Te,Dl="Save",nl,Ie,Ul="Cancel",ol,qe,we,Ml="Reset to default",rl,Ol,S=n[0].autoScaleManuallySet&&Fl(n);return{c(){f=l("div"),o=l("div"),o.textContent=p,a=r(),k=l("div"),x=l("p"),x.textContent=Le,I=r(),g=l("div"),w=l("div"),K=l("div"),K.textContent=st,Qe=r(),z=l("ul"),ve=l("li"),W=l("button"),W.textContent=at,Ze=r(),_e=l("li"),X=l("button"),X.textContent=nt,$e=r(),be=l("li"),j=l("button"),j.textContent=ot,et=r(),E=l("div"),me=l("div"),He=l("div"),He.textContent=vl,xt=r(),v=l("div"),q=l("label"),R=l("input"),Et=r(),Ae=l("span"),Ae.textContent=_l,Tt=r(),F=l("label"),G=l("input"),It=r(),Be=l("span"),Be.textContent=bl,wt=r(),J=l("label"),Q=l("input"),zt=r(),Pe=l("span"),Pe.textContent=ml,Nt=r(),Z=l("label"),$=l("input"),Lt=r(),De=l("span"),De.textContent=Cl,Ht=r(),ee=l("label"),te=l("input"),At=r(),Ue=l("span"),Ue.textContent=gl,Bt=r(),S&&S.c(),rt=r(),le=l("label"),Me=l("div"),Me.textContent=kl,Pt=r(),y=l("select"),se=l("option"),se.textContent=Sl,ae=l("option"),ae.textContent=yl,ne=l("option"),ne.textContent=xl,oe=l("option"),oe.textContent=El,Dt=r(),re=l("label"),ie=l("input"),Ut=r(),Oe=l("span"),Oe.textContent=Tl,Mt=r(),ue=l("label"),Ve=l("div"),Ve.textContent=Il,Ot=r(),T=l("select"),ce=l("option"),ce.textContent=wl,de=l("option"),de.textContent=zl,fe=l("option"),fe.textContent=Nl,Vt=r(),he=l("label"),Ye=l("dfn"),Ye.textContent=Ll,Yt=r(),P=l("input"),Kt=r(),D=l("div"),Ke=l("div"),Ke.textContent=Hl,Wt=r(),Ce=l("div"),Ce.innerHTML=Al,Xt=r(),N=l("div"),ge=l("label"),jt=Xe(`Scale X:\r
                                    `),L=l("input"),qt=r(),ke=l("label"),Rt=Xe(`Scale Y:\r
                                    `),H=l("input"),Ft=r(),Se=l("label"),Gt=Xe(`Screen Width:\r
                                    `),A=l("input"),Jt=r(),ye=l("label"),Qt=Xe(`Screen Height:\r
                                    `),B=l("input"),Zt=r(),U=l("div"),We=l("div"),We.textContent=Bl,$t=r(),xe=l("label"),el=Xe("YouTube API Key: "),M=l("input"),tl=r(),O=l("label"),ll=Xe("Public URL for "),pe=l("a"),pe.textContent=Pl,sl=Xe(": "),V=l("input"),al=r(),Ee=l("div"),Te=l("button"),Te.textContent=Dl,nl=r(),Ie=l("button"),Ie.textContent=Ul,ol=r(),qe=l("div"),we=l("button"),we.textContent=Ml,this.h()},l(d){f=s(d,"DIV",{class:!0});var _=c(f);o=s(_,"DIV",{class:!0,"data-svelte-h":!0}),h(o)!=="svelte-fpaxqg"&&(o.textContent=p),a=i(_),k=s(_,"DIV",{class:!0});var ct=c(k);x=s(ct,"P",{class:!0,style:!0,"data-svelte-h":!0}),h(x)!=="svelte-19w0srs"&&(x.textContent=Le),I=i(ct),g=s(ct,"DIV",{class:!0});var Vl=c(g);w=s(Vl,"DIV",{class:!0,style:!0});var Re=c(w);K=s(Re,"DIV",{class:!0,"data-svelte-h":!0}),h(K)!=="svelte-2fldvb"&&(K.textContent=st),Qe=i(Re),z=s(Re,"UL",{class:!0});var Fe=c(z);ve=s(Fe,"LI",{class:!0});var Yl=c(ve);W=s(Yl,"BUTTON",{"data-svelte-h":!0}),h(W)!=="svelte-21oi3v"&&(W.textContent=at),Yl.forEach(u),Ze=i(Fe),_e=s(Fe,"LI",{class:!0});var Kl=c(_e);X=s(Kl,"BUTTON",{"data-svelte-h":!0}),h(X)!=="svelte-q742bj"&&(X.textContent=nt),Kl.forEach(u),$e=i(Fe),be=s(Fe,"LI",{class:!0});var Wl=c(be);j=s(Wl,"BUTTON",{"data-svelte-h":!0}),h(j)!=="svelte-davqpv"&&(j.textContent=ot),Wl.forEach(u),Fe.forEach(u),et=i(Re),E=s(Re,"DIV",{class:!0});var Y=c(E);me=s(Y,"DIV",{class:!0});var dt=c(me);He=s(dt,"DIV",{class:!0,"data-svelte-h":!0}),h(He)!=="svelte-17u4tsd"&&(He.textContent=vl),xt=i(dt),v=s(dt,"DIV",{class:!0});var C=c(v);q=s(C,"LABEL",{class:!0,for:!0});var ft=c(q);R=s(ft,"INPUT",{type:!0,id:!0,class:!0}),Et=i(ft),Ae=s(ft,"SPAN",{class:!0,"data-svelte-h":!0}),h(Ae)!=="svelte-g8j6ur"&&(Ae.textContent=_l),ft.forEach(u),Tt=i(C),F=s(C,"LABEL",{class:!0,for:!0});var ht=c(F);G=s(ht,"INPUT",{type:!0,id:!0,class:!0}),It=i(ht),Be=s(ht,"SPAN",{class:!0,"data-svelte-h":!0}),h(Be)!=="svelte-1p92s8k"&&(Be.textContent=bl),ht.forEach(u),wt=i(C),J=s(C,"LABEL",{class:!0,for:!0});var pt=c(J);Q=s(pt,"INPUT",{type:!0,id:!0,class:!0}),zt=i(pt),Pe=s(pt,"SPAN",{class:!0,"data-svelte-h":!0}),h(Pe)!=="svelte-1nhilwe"&&(Pe.textContent=ml),pt.forEach(u),Nt=i(C),Z=s(C,"LABEL",{class:!0,for:!0});var vt=c(Z);$=s(vt,"INPUT",{type:!0,id:!0,class:!0}),Lt=i(vt),De=s(vt,"SPAN",{class:!0,"data-svelte-h":!0}),h(De)!=="svelte-5y589e"&&(De.textContent=Cl),vt.forEach(u),Ht=i(C),ee=s(C,"LABEL",{class:!0,for:!0});var _t=c(ee);te=s(_t,"INPUT",{type:!0,id:!0,class:!0}),At=i(_t),Ue=s(_t,"SPAN",{class:!0,"data-svelte-h":!0}),h(Ue)!=="svelte-xmbk8u"&&(Ue.textContent=gl),_t.forEach(u),Bt=i(C),S&&S.l(C),rt=i(C),le=s(C,"LABEL",{class:!0,for:!0});var bt=c(le);Me=s(bt,"DIV",{class:!0,"data-svelte-h":!0}),h(Me)!=="svelte-1v12jgo"&&(Me.textContent=kl),Pt=i(bt),y=s(bt,"SELECT",{id:!0});var tt=c(y);se=s(tt,"OPTION",{"data-svelte-h":!0}),h(se)!=="svelte-aushaz"&&(se.textContent=Sl),ae=s(tt,"OPTION",{"data-svelte-h":!0}),h(ae)!=="svelte-41giy7"&&(ae.textContent=yl),ne=s(tt,"OPTION",{"data-svelte-h":!0}),h(ne)!=="svelte-21b7v9"&&(ne.textContent=xl),oe=s(tt,"OPTION",{"data-svelte-h":!0}),h(oe)!=="svelte-x9f25j"&&(oe.textContent=El),tt.forEach(u),bt.forEach(u),Dt=i(C),re=s(C,"LABEL",{class:!0,for:!0});var mt=c(re);ie=s(mt,"INPUT",{type:!0,id:!0,class:!0}),Ut=i(mt),Oe=s(mt,"SPAN",{class:!0,"data-svelte-h":!0}),h(Oe)!=="svelte-71gmge"&&(Oe.textContent=Tl),mt.forEach(u),Mt=i(C),ue=s(C,"LABEL",{class:!0,for:!0});var Ct=c(ue);Ve=s(Ct,"DIV",{class:!0,"data-svelte-h":!0}),h(Ve)!=="svelte-t0e3cg"&&(Ve.textContent=Il),Ot=i(Ct),T=s(Ct,"SELECT",{id:!0});var gt=c(T);ce=s(gt,"OPTION",{"data-svelte-h":!0}),h(ce)!=="svelte-aushaz"&&(ce.textContent=wl),de=s(gt,"OPTION",{"data-svelte-h":!0}),h(de)!=="svelte-1ndyy46"&&(de.textContent=zl),fe=s(gt,"OPTION",{"data-svelte-h":!0}),h(fe)!=="svelte-dllxpm"&&(fe.textContent=Nl),gt.forEach(u),Ct.forEach(u),Vt=i(C),he=s(C,"LABEL",{class:!0,for:!0});var kt=c(he);Ye=s(kt,"DFN",{title:!0,"data-svelte-h":!0}),h(Ye)!=="svelte-1hsoby9"&&(Ye.textContent=Ll),Yt=i(kt),P=s(kt,"INPUT",{type:!0,id:!0,class:!0}),kt.forEach(u),C.forEach(u),dt.forEach(u),Kt=i(Y),D=s(Y,"DIV",{class:!0});var Ge=c(D);Ke=s(Ge,"DIV",{class:!0,"data-svelte-h":!0}),h(Ke)!=="svelte-11zac5w"&&(Ke.textContent=Hl),Wt=i(Ge),Ce=s(Ge,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),h(Ce)!=="svelte-5tw24f"&&(Ce.innerHTML=Al),Xt=i(Ge),N=s(Ge,"DIV",{class:!0});var ze=c(N);ge=s(ze,"LABEL",{class:!0,for:!0});var il=c(ge);jt=je(il,`Scale X:\r
                                    `),L=s(il,"INPUT",{type:!0,id:!0,min:!0,step:!0,class:!0}),il.forEach(u),qt=i(ze),ke=s(ze,"LABEL",{class:!0,for:!0});var ul=c(ke);Rt=je(ul,`Scale Y:\r
                                    `),H=s(ul,"INPUT",{type:!0,id:!0,min:!0,step:!0,class:!0}),ul.forEach(u),Ft=i(ze),Se=s(ze,"LABEL",{class:!0,for:!0});var cl=c(Se);Gt=je(cl,`Screen Width:\r
                                    `),A=s(cl,"INPUT",{type:!0,id:!0,min:!0,step:!0,class:!0}),cl.forEach(u),Jt=i(ze),ye=s(ze,"LABEL",{class:!0,for:!0});var dl=c(ye);Qt=je(dl,`Screen Height:\r
                                    `),B=s(dl,"INPUT",{type:!0,id:!0,min:!0,step:!0,class:!0}),dl.forEach(u),ze.forEach(u),Ge.forEach(u),Zt=i(Y),U=s(Y,"DIV",{class:!0});var Je=c(U);We=s(Je,"DIV",{class:!0,"data-svelte-h":!0}),h(We)!=="svelte-ykpc2"&&(We.textContent=Bl),$t=i(Je),xe=s(Je,"LABEL",{class:!0,for:!0});var fl=c(xe);el=je(fl,"YouTube API Key: "),M=s(fl,"INPUT",{type:!0,id:!0,class:!0}),fl.forEach(u),tl=i(Je),O=s(Je,"LABEL",{class:!0,for:!0});var lt=c(O);ll=je(lt,"Public URL for "),pe=s(lt,"A",{href:!0,class:!0,target:!0,"data-svelte-h":!0}),h(pe)!=="svelte-jyts80"&&(pe.textContent=Pl),sl=je(lt,": "),V=s(lt,"INPUT",{type:!0,id:!0,class:!0}),lt.forEach(u),Je.forEach(u),al=i(Y),Ee=s(Y,"DIV",{class:!0});var St=c(Ee);Te=s(St,"BUTTON",{class:!0,"data-svelte-h":!0}),h(Te)!=="svelte-90ne3f"&&(Te.textContent=Dl),nl=i(St),Ie=s(St,"BUTTON",{class:!0,"data-svelte-h":!0}),h(Ie)!=="svelte-19u663z"&&(Ie.textContent=Ul),St.forEach(u),ol=i(Y),qe=s(Y,"DIV",{class:!0});var Xl=c(qe);we=s(Xl,"BUTTON",{class:!0,"data-svelte-h":!0}),h(we)!=="svelte-1obor4v"&&(we.textContent=Ml),Xl.forEach(u),Y.forEach(u),Re.forEach(u),Vl.forEach(u),ct.forEach(u),_.forEach(u),this.h()},h(){e(o,"class","title-bar"),e(x,"class","text-4xl text-white font-bold italic lg:absolute z-10 pb-2"),hl(x,"text-shadow","3px 3px black"),e(K,"class","title-bar"),e(ve,"class","menu-item"),e(_e,"class","menu-item"),e(be,"class","menu-item"),e(z,"class","menu-bar min-h-6"),e(He,"class","frame-title"),e(R,"type","checkbox"),e(R,"id","isBlurHidden"),e(R,"class","svelte-66zrsz"),e(Ae,"class","option-text"),e(q,"class","form-control"),e(q,"for","isBlurHidden"),e(G,"type","checkbox"),e(G,"id","isNoiseHidden"),e(G,"class","svelte-66zrsz"),e(Be,"class","option-text"),e(F,"class","form-control"),e(F,"for","isNoiseHidden"),e(Q,"type","checkbox"),e(Q,"id","areScanlinesHidden"),e(Q,"class","svelte-66zrsz"),e(Pe,"class","option-text"),e(J,"class","form-control"),e(J,"for","areScanlinesHidden"),e($,"type","checkbox"),e($,"id","isShadowMaskHidden"),e($,"class","svelte-66zrsz"),e(De,"class","option-text"),e(Z,"class","form-control"),e(Z,"for","isShadowMaskHidden"),e(te,"type","checkbox"),e(te,"id","autoScaleManuallySet"),e(te,"class","svelte-66zrsz"),e(Ue,"class","option-text"),e(ee,"class","form-control"),e(ee,"for","autoScaleManuallySet"),e(Me,"class","option-text"),se.__value="",m(se,se.__value),ae.__value="aperture-grille",m(ae,ae.__value),ne.__value="slot-mask",m(ne,ne.__value),oe.__value="dot-mask",m(oe,oe.__value),e(y,"id","shadowMaskType"),y.disabled=it=n[0].isShadowMaskHidden,n[0].shadowMaskType===void 0&&jl(()=>n[12].call(y)),e(le,"class","form-control"),e(le,"for","shadowMaskType"),e(ie,"type","checkbox"),e(ie,"id","isBevelHidden"),e(ie,"class","svelte-66zrsz"),e(Oe,"class","option-text"),e(re,"class","form-control"),e(re,"for","isBevelHidden"),e(Ve,"class","option-text"),ce.__value="",m(ce,ce.__value),de.__value="cylindrical",m(de,de.__value),fe.__value="flat",m(fe,fe.__value),e(T,"id","bezelType"),T.disabled=ut=n[0].isBezelHidden,n[0].bezelType===void 0&&jl(()=>n[14].call(T)),e(ue,"class","form-control"),e(ue,"for","bezelType"),e(Ye,"title","Repeating image that replaces black background around the edges of the screen."),e(P,"type","text"),e(P,"id","border"),e(P,"class","w-full svelte-66zrsz"),e(he,"class","form-control"),e(he,"for","border"),e(v,"class","form-group"),e(me,"class","frame"),e(Ke,"class","frame-title"),e(Ce,"class","pt-2 grid leading-4 pb-2"),hl(Ce,"grid-template-columns","40px auto"),e(L,"type","number"),e(L,"id","scaleX"),e(L,"min","0"),e(L,"step","1"),e(L,"class","svelte-66zrsz"),e(ge,"class","form-control"),e(ge,"for","scaleX"),e(H,"type","number"),e(H,"id","scaleY"),e(H,"min","0"),e(H,"step","1"),e(H,"class","svelte-66zrsz"),e(ke,"class","form-control"),e(ke,"for","scaleY"),e(A,"type","number"),e(A,"id","screenWidth"),e(A,"min","0"),e(A,"step","1"),e(A,"class","svelte-66zrsz"),e(Se,"class","form-control"),e(Se,"for","screenWidth"),e(B,"type","number"),e(B,"id","screenHeight"),e(B,"min","0"),e(B,"step","1"),e(B,"class","svelte-66zrsz"),e(ye,"class","form-control"),e(ye,"for","screenHeight"),e(N,"class","form-group grid grid-cols-2"),e(D,"class","frame"),e(We,"class","frame-title"),e(M,"type","text"),e(M,"id","youtubeApiKey"),e(M,"class","w-full svelte-66zrsz"),e(xe,"class","form-control"),e(xe,"for","youtubeApiKey"),e(pe,"href","https://greenhillplaza.notion.site/Using-the-remote-d011d2a459564cabb34d596f1513a702"),e(pe,"class","font-generic"),e(pe,"target","_blank"),e(V,"type","text"),e(V,"id","baseUrl"),e(V,"class","w-full svelte-66zrsz"),e(O,"class","form-control"),e(O,"for","baseUrl"),e(U,"class","frame"),e(Te,"class","btn btn-preferred"),e(Ie,"class","btn"),e(Ee,"class","pt-2"),e(we,"class","btn"),e(qe,"class","pt-2"),e(E,"class","p-2"),e(w,"class","window active w-[360px] z-20"),hl(w,"margin","auto"),e(g,"class","lg:flex justify-center items-center h-full w-full"),e(k,"class","bg-gradient-to-b from-blue-800 to-black h-full w-full pt-2 pl-2 overflow-auto"),e(f,"class","window workspace active absolute top-2 bottom-2 left-2 right-2")},m(d,_){Gl(d,f,_),t(f,o),t(f,a),t(f,k),t(k,x),t(k,I),t(k,g),t(g,w),t(w,K),t(w,Qe),t(w,z),t(z,ve),t(ve,W),t(z,Ze),t(z,_e),t(_e,X),t(z,$e),t(z,be),t(be,j),t(w,et),t(w,E),t(E,me),t(me,He),t(me,xt),t(me,v),t(v,q),t(q,R),R.checked=n[0].isBlurHidden,t(q,Et),t(q,Ae),t(v,Tt),t(v,F),t(F,G),G.checked=n[0].isNoiseHidden,t(F,It),t(F,Be),t(v,wt),t(v,J),t(J,Q),Q.checked=n[0].areScanlinesHidden,t(J,zt),t(J,Pe),t(v,Nt),t(v,Z),t(Z,$),$.checked=n[0].isShadowMaskHidden,t(Z,Lt),t(Z,De),t(v,Ht),t(v,ee),t(ee,te),te.checked=n[0].autoScaleManuallySet,t(ee,At),t(ee,Ue),t(v,Bt),S&&S.m(v,null),t(v,rt),t(v,le),t(le,Me),t(le,Pt),t(le,y),t(y,se),t(y,ae),t(y,ne),t(y,oe),yt(y,n[0].shadowMaskType,!0),t(v,Dt),t(v,re),t(re,ie),ie.checked=n[0].isBevelHidden,t(re,Ut),t(re,Oe),t(v,Mt),t(v,ue),t(ue,Ve),t(ue,Ot),t(ue,T),t(T,ce),t(T,de),t(T,fe),yt(T,n[0].bezelType,!0),t(v,Vt),t(v,he),t(he,Ye),t(he,Yt),t(he,P),m(P,n[0].border),t(E,Kt),t(E,D),t(D,Ke),t(D,Wt),t(D,Ce),t(D,Xt),t(D,N),t(N,ge),t(ge,jt),t(ge,L),m(L,n[0].scaleX),t(N,qt),t(N,ke),t(ke,Rt),t(ke,H),m(H,n[0].scaleY),t(N,Ft),t(N,Se),t(Se,Gt),t(Se,A),m(A,n[0].screenWidth),t(N,Jt),t(N,ye),t(ye,Qt),t(ye,B),m(B,n[0].screenHeight),t(E,Zt),t(E,U),t(U,We),t(U,$t),t(U,xe),t(xe,el),t(xe,M),m(M,n[0].youtubeApiKey),t(U,tl),t(U,O),t(O,ll),t(O,pe),t(O,sl),t(O,V),m(V,n[0].baseUrl),t(E,al),t(E,Ee),t(Ee,Te),t(Ee,nl),t(Ee,Ie),t(E,ol),t(E,qe),t(qe,we),rl||(Ol=[b(W,"click",n[3]),b(X,"click",n[4]),b(j,"click",n[5]),b(R,"change",n[6]),b(G,"change",n[7]),b(Q,"change",n[8]),b($,"change",n[9]),b(te,"change",n[10]),b(y,"change",n[12]),b(ie,"change",n[13]),b(T,"change",n[14]),b(P,"input",n[15]),b(L,"input",n[16]),b(H,"input",n[17]),b(A,"input",n[18]),b(B,"input",n[19]),b(M,"input",n[20]),b(V,"input",n[21]),b(Te,"click",n[1]),b(Ie,"click",fs),b(we,"click",n[2])],rl=!0)},p(d,_){_&1&&(R.checked=d[0].isBlurHidden),_&1&&(G.checked=d[0].isNoiseHidden),_&1&&(Q.checked=d[0].areScanlinesHidden),_&1&&($.checked=d[0].isShadowMaskHidden),_&1&&(te.checked=d[0].autoScaleManuallySet),d[0].autoScaleManuallySet?S?S.p(d,_):(S=Fl(d),S.c(),S.m(v,rt)):S&&(S.d(1),S=null),_&1&&it!==(it=d[0].isShadowMaskHidden)&&(y.disabled=it),_&1&&yt(y,d[0].shadowMaskType),_&1&&(ie.checked=d[0].isBevelHidden),_&1&&ut!==(ut=d[0].isBezelHidden)&&(T.disabled=ut),_&1&&yt(T,d[0].bezelType),_&1&&P.value!==d[0].border&&m(P,d[0].border),_&1&&Ne(L.value)!==d[0].scaleX&&m(L,d[0].scaleX),_&1&&Ne(H.value)!==d[0].scaleY&&m(H,d[0].scaleY),_&1&&Ne(A.value)!==d[0].screenWidth&&m(A,d[0].screenWidth),_&1&&Ne(B.value)!==d[0].screenHeight&&m(B,d[0].screenHeight),_&1&&M.value!==d[0].youtubeApiKey&&m(M,d[0].youtubeApiKey),_&1&&V.value!==d[0].baseUrl&&m(V,d[0].baseUrl)},d(d){d&&u(f),S&&S.d(),rl=!1,$l(Ol)}}}function ds(n){let f,o;return f=new us({props:{theme:"pastel",$$slots:{default:[cs]},$$scope:{ctx:n}}}),{c(){ls(f.$$.fragment)},l(p){ss(f.$$.fragment,p)},m(p,a){as(f,p,a),o=!0},p(p,[a]){const k={};a&8388609&&(k.$$scope={dirty:a,ctx:p}),f.$set(k)},i(p){o||(ns(f.$$.fragment,p),o=!0)},o(p){os(f.$$.fragment,p),o=!1},d(p){rs(f,p)}}}function fs(){window.location.href="../"}function hs(n,f,o){let p;Ql(n,pl,et=>o(22,p=et));let a={};Zl(()=>{o(0,a=JSON.parse(JSON.stringify(p)))});function k(){ql(pl,p=a,p),window.location.href="../"}function x(){ql(pl,p=is,p),window.location.href="../"}const Le=()=>{window.location.href="../"},I=()=>{window.location.href="../examples"},g=()=>{window.location.href="../help"};function w(){a.isBlurHidden=this.checked,o(0,a)}function K(){a.isNoiseHidden=this.checked,o(0,a)}function st(){a.areScanlinesHidden=this.checked,o(0,a)}function Qe(){a.isShadowMaskHidden=this.checked,o(0,a)}function z(){a.autoScaleManuallySet=this.checked,o(0,a)}function ve(){a.manualAutoScale=this.checked,o(0,a)}function W(){a.shadowMaskType=Rl(this),o(0,a)}function at(){a.isBevelHidden=this.checked,o(0,a)}function Ze(){a.bezelType=Rl(this),o(0,a)}function _e(){a.border=this.value,o(0,a)}function X(){a.scaleX=Ne(this.value),o(0,a)}function nt(){a.scaleY=Ne(this.value),o(0,a)}function $e(){a.screenWidth=Ne(this.value),o(0,a)}function be(){a.screenHeight=Ne(this.value),o(0,a)}function j(){a.youtubeApiKey=this.value,o(0,a)}function ot(){a.baseUrl=this.value,o(0,a)}return[a,k,x,Le,I,g,w,K,st,Qe,z,ve,W,at,Ze,_e,X,nt,$e,be,j,ot]}class ms extends es{constructor(f){super(),ts(this,f,hs,ds,Jl,{})}}export{ms as component};