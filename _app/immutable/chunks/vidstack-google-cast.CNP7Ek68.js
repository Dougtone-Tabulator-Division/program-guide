var At=Object.defineProperty;var Z=d=>{throw TypeError(d)};var St=(d,t,s)=>t in d?At(d,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[t]=s;var G=(d,t,s)=>St(d,typeof t!="symbol"?t+"":t,s),O=(d,t,s)=>t.has(d)||Z("Cannot "+s);var e=(d,t,s)=>(O(d,t,"read from private field"),s?s.call(d):t.get(d)),T=(d,t,s)=>t.has(d)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(d):t.set(d,s),l=(d,t,s,i)=>(O(d,t,"write to private field"),i?i.call(d,s):t.set(d,s),s),r=(d,t,s)=>(O(d,t,"access private method"),s);import{y as It,A as L,J as tt,x as Rt,D as et,d as V,l as st,e as bt,K as Mt,L as wt}from"./Video.CN-VjULV.js";import{R as _t}from"./vidstack-DSYpsFWk.DZ1MEfIH.js";import{g as Dt,a as Pt,b as rt,h as it,l as Nt,c as xt}from"./vidstack-kV1-bfkY.BkKCqHaY.js";var g,N,nt;class Gt{constructor(t){T(this,N);T(this,g);l(this,g,new chrome.cast.media.MediaInfo(t.src,t.type))}build(){return e(this,g)}setStreamType(t){return t.includes("live")?e(this,g).streamType=chrome.cast.media.StreamType.LIVE:e(this,g).streamType=chrome.cast.media.StreamType.BUFFERED,this}setTracks(t){return e(this,g).tracks=t.map(r(this,N,nt)),this}setMetadata(t,s){return e(this,g).metadata=new chrome.cast.media.GenericMediaMetadata,e(this,g).metadata.title=t,e(this,g).metadata.images=[{url:s}],this}}g=new WeakMap,N=new WeakSet,nt=function(t,s){const i=new chrome.cast.media.Track(s,chrome.cast.media.TrackType.TEXT);return i.name=t.label,i.trackContentId=t.src,i.trackContentType="text/vtt",i.language=t.language,i.subtype=t.kind.toUpperCase(),i};const $=chrome.cast.media.TrackType.TEXT,at=chrome.cast.media.TrackType.AUDIO;var p,k,w,c,H,S,ot,ht,ct,U,P,F;class Ot{constructor(t,s,i){T(this,c);T(this,p);T(this,k);T(this,w);l(this,p,t),l(this,k,s),l(this,w,i)}setup(){const t=this.syncRemoteActiveIds.bind(this);st(e(this,k).audioTracks,"change",t),st(e(this,k).textTracks,"mode-change",t),bt(r(this,c,ht).bind(this))}getLocalTextTracks(){return e(this,k).$state.textTracks().filter(t=>t.src&&t.type==="vtt")}syncRemoteTracks(t){if(!e(this,p).isMediaLoaded)return;const s=r(this,c,H).call(this),i=this.getLocalTextTracks(),n=r(this,c,S).call(this,at),m=r(this,c,S).call(this,$);for(const u of n){if(r(this,c,U).call(this,s,u))continue;const M={id:u.trackId.toString(),label:u.name,language:u.language,kind:u.subtype??"main",selected:!1};e(this,k).audioTracks[wt.add](M,t)}for(const u of m){if(r(this,c,U).call(this,i,u))continue;const M={id:u.trackId.toString(),src:u.trackContentId,label:u.name,language:u.language,kind:u.subtype.toLowerCase()};e(this,k).textTracks.add(M,t)}}syncRemoteActiveIds(t){if(!e(this,p).isMediaLoaded)return;const s=r(this,c,ot).call(this),i=new chrome.cast.media.EditTracksInfoRequest(s);r(this,c,ct).call(this,i).catch(n=>{})}}p=new WeakMap,k=new WeakMap,w=new WeakMap,c=new WeakSet,H=function(){return e(this,k).$state.audioTracks()},S=function(t){var i;const s=((i=e(this,p).mediaInfo)==null?void 0:i.tracks)??[];return t?s.filter(n=>n.type===t):s},ot=function(){const t=[],s=r(this,c,H).call(this).find(n=>n.selected),i=this.getLocalTextTracks().filter(n=>n.mode==="showing");if(s){const n=r(this,c,S).call(this,at),m=r(this,c,P).call(this,n,s);m&&t.push(m.trackId)}if(i!=null&&i.length){const n=r(this,c,S).call(this,$);if(n.length)for(const m of i){const u=r(this,c,P).call(this,n,m);u&&t.push(u.trackId)}}return t},ht=function(){const t=this.getLocalTextTracks();if(!e(this,p).isMediaLoaded)return;const s=r(this,c,S).call(this,$);for(const i of t)if(!r(this,c,P).call(this,s,i)){Mt(()=>{var m;return(m=e(this,w))==null?void 0:m.call(this)});break}},ct=function(t){const s=rt();return new Promise((i,n)=>s==null?void 0:s.editTracksInfo(t,i,n))},U=function(t,s){return t.find(i=>r(this,c,F).call(this,i,s))},P=function(t,s){return t.find(i=>r(this,c,F).call(this,s,i))},F=function(t,s){return s.name===t.label&&s.language===t.language&&s.subtype.toLowerCase()===t.kind.toLowerCase()};var o,h,C,E,_,I,v,A,R,D,f,b,a,dt,ut,q,lt,K,mt,Tt,ft,Y,B,X,J,gt,kt,yt,j,pt,z,Ct,Q,y,Et,Lt,W,vt;class Ft{constructor(t,s){T(this,a);G(this,"$$PROVIDER_TYPE","GOOGLE_CAST");G(this,"scope",It());T(this,o);T(this,h);T(this,C);T(this,E,null);T(this,_,"disconnected");T(this,I,0);T(this,v,0);T(this,A,new L(0,0));T(this,R,new _t(r(this,a,Tt).bind(this)));T(this,D);T(this,f,null);T(this,b,!1);l(this,o,t),l(this,h,s),l(this,C,new Ot(t,s,r(this,a,vt).bind(this)))}get type(){return"google-cast"}get currentSrc(){return e(this,E)}get player(){return e(this,o)}get cast(){return Dt()}get session(){return Pt()}get media(){return rt()}get hasActiveSession(){return it(e(this,E))}setup(){r(this,a,dt).call(this),r(this,a,ut).call(this),e(this,C).setup(),e(this,h).notify("provider-setup",this)}async play(){var t;if(!(!e(this,o).isPaused&&!e(this,b))){if(e(this,b)){await r(this,a,W).call(this,!1,0);return}(t=e(this,o).controller)==null||t.playOrPause()}}async pause(){var t;e(this,o).isPaused||(t=e(this,o).controller)==null||t.playOrPause()}getMediaStatus(t){return new Promise((s,i)=>{var n;(n=this.media)==null||n.getStatus(t,s,i)})}setMuted(t){var i;(t&&!e(this,o).isMuted||!t&&e(this,o).isMuted)&&((i=e(this,o).controller)==null||i.muteOrUnmute())}setCurrentTime(t){var s;e(this,o).currentTime=t,e(this,h).notify("seeking",t),(s=e(this,o).controller)==null||s.seek()}setVolume(t){var s;e(this,o).volumeLevel=t,(s=e(this,o).controller)==null||s.setVolumeLevel()}async loadSource(t){var n;if(((n=e(this,f))==null?void 0:n.src)!==t&&l(this,f,null),it(t)){r(this,a,lt).call(this),l(this,E,t);return}e(this,h).notify("load-start");const s=r(this,a,Lt).call(this,t),i=await this.session.loadMedia(s);if(i){l(this,E,null),e(this,h).notify("error",Error(xt(i)));return}l(this,E,t)}destroy(){r(this,a,q).call(this),r(this,a,K).call(this)}}o=new WeakMap,h=new WeakMap,C=new WeakMap,E=new WeakMap,_=new WeakMap,I=new WeakMap,v=new WeakMap,A=new WeakMap,R=new WeakMap,D=new WeakMap,f=new WeakMap,b=new WeakMap,a=new WeakSet,dt=function(){Nt(cast.framework.CastContextEventType.CAST_STATE_CHANGED,r(this,a,Y).bind(this))},ut=function(){const t=cast.framework.RemotePlayerEventType,s={[t.IS_CONNECTED_CHANGED]:r(this,a,Y),[t.IS_MEDIA_LOADED_CHANGED]:r(this,a,B),[t.CAN_CONTROL_VOLUME_CHANGED]:r(this,a,X),[t.CAN_SEEK_CHANGED]:r(this,a,J),[t.DURATION_CHANGED]:r(this,a,yt),[t.IS_MUTED_CHANGED]:r(this,a,j),[t.VOLUME_LEVEL_CHANGED]:r(this,a,j),[t.IS_PAUSED_CHANGED]:r(this,a,pt),[t.LIVE_SEEKABLE_RANGE_CHANGED]:r(this,a,z),[t.PLAYER_STATE_CHANGED]:r(this,a,Ct)};l(this,D,s);const i=r(this,a,ft).bind(this);for(const n of tt(s))e(this,o).controller.addEventListener(n,i);Rt(()=>{for(const n of tt(s))e(this,o).controller.removeEventListener(n,i)})},q=function(){e(this,f)||(l(this,v,0),l(this,A,new L(0,0))),e(this,R).stop(),l(this,I,0),l(this,f,null)},lt=function(){const t=new et("resume-session",{detail:this.session});r(this,a,B).call(this,t);const{muted:s,volume:i,savedState:n}=e(this,h).$state,m=n();this.setCurrentTime(Math.max(e(this,o).currentTime,(m==null?void 0:m.currentTime)??0)),this.setMuted(s()),this.setVolume(i()),(m==null?void 0:m.paused)===!1&&this.play()},K=function(){this.cast.endCurrentSession(!0);const{remotePlaybackLoader:t}=e(this,h).$state;t.set(null)},mt=function(){const{savedState:t}=e(this,h).$state;t.set({paused:e(this,o).isPaused,currentTime:e(this,o).currentTime}),r(this,a,K).call(this)},Tt=function(){r(this,a,kt).call(this)},ft=function(t){e(this,D)[t.type].call(this,t)},Y=function(t){const s=this.cast.getCastState(),i=s===cast.framework.CastState.CONNECTED?"connected":s===cast.framework.CastState.CONNECTING?"connecting":"disconnected";if(e(this,_)===i)return;const n={type:"google-cast",state:i},m=r(this,a,y).call(this,t);l(this,_,i),e(this,h).notify("remote-playback-change",n,m),i==="disconnected"&&r(this,a,mt).call(this)},B=function(t){if(!!!e(this,o).isMediaLoaded)return;const i=V(e(this,h).$state.source);Promise.resolve().then(()=>{if(i!==V(e(this,h).$state.source)||!e(this,o).isMediaLoaded)return;r(this,a,q).call(this);const n=e(this,o).duration;l(this,A,new L(0,n));const m={provider:this,duration:n,buffered:new L(0,0),seekable:r(this,a,Q).call(this)},u=r(this,a,y).call(this,t);e(this,h).notify("loaded-metadata",void 0,u),e(this,h).notify("loaded-data",void 0,u),e(this,h).notify("can-play",m,u),r(this,a,X).call(this),r(this,a,J).call(this,t);const{volume:x,muted:M}=e(this,h).$state;this.setVolume(x()),this.setMuted(M()),e(this,R).start(),e(this,C).syncRemoteTracks(u),e(this,C).syncRemoteActiveIds(u)})},X=function(){e(this,h).$state.canSetVolume.set(e(this,o).canControlVolume)},J=function(t){const s=r(this,a,y).call(this,t);e(this,h).notify("stream-type-change",r(this,a,gt).call(this),s)},gt=function(){var s;return((s=e(this,o).mediaInfo)==null?void 0:s.streamType)===chrome.cast.media.StreamType.LIVE?e(this,o).canSeek?"live:dvr":"live":"on-demand"},kt=function(){if(e(this,f))return;const t=e(this,o).currentTime;t!==e(this,I)&&(e(this,h).notify("time-change",t),t>e(this,v)&&(l(this,v,t),r(this,a,z).call(this)),e(this,h).$state.seeking()&&e(this,h).notify("seeked",t),l(this,I,t))},yt=function(t){if(!e(this,o).isMediaLoaded||e(this,f))return;const s=e(this,o).duration,i=r(this,a,y).call(this,t);l(this,A,new L(0,s)),e(this,h).notify("duration-change",s,i)},j=function(t){if(!e(this,o).isMediaLoaded)return;const s={muted:e(this,o).isMuted,volume:e(this,o).volumeLevel},i=r(this,a,y).call(this,t);e(this,h).notify("volume-change",s,i)},pt=function(t){const s=r(this,a,y).call(this,t);e(this,o).isPaused?e(this,h).notify("pause",void 0,s):e(this,h).notify("play",void 0,s)},z=function(t){const s={seekable:r(this,a,Q).call(this),buffered:new L(0,e(this,v))},i=t?r(this,a,y).call(this,t):void 0;e(this,h).notify("progress",s,i)},Ct=function(t){const s=e(this,o).playerState,i=chrome.cast.media.PlayerState;if(l(this,b,s===i.IDLE),s===i.PAUSED)return;const n=r(this,a,y).call(this,t);switch(s){case i.PLAYING:e(this,h).notify("playing",void 0,n);break;case i.BUFFERING:e(this,h).notify("waiting",void 0,n);break;case i.IDLE:e(this,R).stop(),e(this,h).notify("pause"),e(this,h).notify("end");break}},Q=function(){return e(this,o).liveSeekableRange?new L(e(this,o).liveSeekableRange.start,e(this,o).liveSeekableRange.end):e(this,A)},y=function(t){return t instanceof Event?t:new et(t.type,{detail:t})},Et=function(t){const{streamType:s,title:i,poster:n}=e(this,h).$state;return new Gt(t).setMetadata(i(),n()).setStreamType(s()).setTracks(e(this,C).getLocalTextTracks()).build()},Lt=function(t){var m,u;const s=r(this,a,Et).call(this,t),i=new chrome.cast.media.LoadRequest(s),n=e(this,h).$state.savedState();return i.autoplay=(((m=e(this,f))==null?void 0:m.paused)??(n==null?void 0:n.paused))===!1,i.currentTime=((u=e(this,f))==null?void 0:u.time)??(n==null?void 0:n.currentTime)??0,i},W=async function(t,s){const i=V(e(this,h).$state.source);l(this,f,{src:i,paused:t,time:s}),await this.loadSource(i)},vt=function(){r(this,a,W).call(this,e(this,o).isPaused,e(this,o).currentTime).catch(t=>{})};export{Ft as GoogleCastProvider};
