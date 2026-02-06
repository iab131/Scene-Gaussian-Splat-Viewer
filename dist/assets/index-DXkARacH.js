(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function z_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lh={exports:{}},Ml={};var nv;function Oy(){if(nv)return Ml;nv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:l}}return Ml.Fragment=e,Ml.jsx=n,Ml.jsxs=n,Ml}var iv;function Ny(){return iv||(iv=1,lh.exports=Oy()),lh.exports}var et=Ny(),ch={exports:{}},gt={};var av;function zy(){if(av)return gt;av=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,x={};function A(z,ie,pe){this.props=z,this.context=ie,this.refs=x,this.updater=pe||y}A.prototype.isReactComponent={},A.prototype.setState=function(z,ie){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ie,"setState")},A.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function T(){}T.prototype=A.prototype;function w(z,ie,pe){this.props=z,this.context=ie,this.refs=x,this.updater=pe||y}var D=w.prototype=new T;D.constructor=w,E(D,A.prototype),D.isPureReactComponent=!0;var b=Array.isArray;function L(){}var R={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function C(z,ie,pe){var Me=pe.ref;return{$$typeof:o,type:z,key:ie,ref:Me!==void 0?Me:null,props:pe}}function U(z,ie){return C(z.type,ie,z.props)}function N(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function k(z){var ie={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(pe){return ie[pe]})}var X=/\/+/g;function W(z,ie){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):ie.toString(36)}function Q(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(L,L):(z.status="pending",z.then(function(ie){z.status==="pending"&&(z.status="fulfilled",z.value=ie)},function(ie){z.status==="pending"&&(z.status="rejected",z.reason=ie)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function O(z,ie,pe,Me,we){var $=typeof z;($==="undefined"||$==="boolean")&&(z=null);var ce=!1;if(z===null)ce=!0;else switch($){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(z.$$typeof){case o:case e:ce=!0;break;case m:return ce=z._init,O(ce(z._payload),ie,pe,Me,we)}}if(ce)return we=we(z),ce=Me===""?"."+W(z,0):Me,b(we)?(pe="",ce!=null&&(pe=ce.replace(X,"$&/")+"/"),O(we,ie,pe,"",function(Ue){return Ue})):we!=null&&(N(we)&&(we=U(we,pe+(we.key==null||z&&z.key===we.key?"":(""+we.key).replace(X,"$&/")+"/")+ce)),ie.push(we)),1;ce=0;var be=Me===""?".":Me+":";if(b(z))for(var Fe=0;Fe<z.length;Fe++)Me=z[Fe],$=be+W(Me,Fe),ce+=O(Me,ie,pe,$,we);else if(Fe=_(z),typeof Fe=="function")for(z=Fe.call(z),Fe=0;!(Me=z.next()).done;)Me=Me.value,$=be+W(Me,Fe++),ce+=O(Me,ie,pe,$,we);else if($==="object"){if(typeof z.then=="function")return O(Q(z),ie,pe,Me,we);throw ie=String(z),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ce}function G(z,ie,pe){if(z==null)return z;var Me=[],we=0;return O(z,Me,"","",function($){return ie.call(pe,$,we++)}),Me}function Z(z){if(z._status===-1){var ie=z._result;ie=ie(),ie.then(function(pe){(z._status===0||z._status===-1)&&(z._status=1,z._result=pe)},function(pe){(z._status===0||z._status===-1)&&(z._status=2,z._result=pe)}),z._status===-1&&(z._status=0,z._result=ie)}if(z._status===1)return z._result.default;throw z._result}var re=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},he={map:G,forEach:function(z,ie,pe){G(z,function(){ie.apply(this,arguments)},pe)},count:function(z){var ie=0;return G(z,function(){ie++}),ie},toArray:function(z){return G(z,function(ie){return ie})||[]},only:function(z){if(!N(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return gt.Activity=g,gt.Children=he,gt.Component=A,gt.Fragment=n,gt.Profiler=r,gt.PureComponent=w,gt.StrictMode=a,gt.Suspense=d,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,gt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return R.H.useMemoCache(z)}},gt.cache=function(z){return function(){return z.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(z,ie,pe){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Me=E({},z.props),we=z.key;if(ie!=null)for($ in ie.key!==void 0&&(we=""+ie.key),ie)!P.call(ie,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ie.ref===void 0||(Me[$]=ie[$]);var $=arguments.length-2;if($===1)Me.children=pe;else if(1<$){for(var ce=Array($),be=0;be<$;be++)ce[be]=arguments[be+2];Me.children=ce}return C(z.type,we,Me)},gt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},gt.createElement=function(z,ie,pe){var Me,we={},$=null;if(ie!=null)for(Me in ie.key!==void 0&&($=""+ie.key),ie)P.call(ie,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(we[Me]=ie[Me]);var ce=arguments.length-2;if(ce===1)we.children=pe;else if(1<ce){for(var be=Array(ce),Fe=0;Fe<ce;Fe++)be[Fe]=arguments[Fe+2];we.children=be}if(z&&z.defaultProps)for(Me in ce=z.defaultProps,ce)we[Me]===void 0&&(we[Me]=ce[Me]);return C(z,$,we)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(z){return{$$typeof:f,render:z}},gt.isValidElement=N,gt.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:Z}},gt.memo=function(z,ie){return{$$typeof:h,type:z,compare:ie===void 0?null:ie}},gt.startTransition=function(z){var ie=R.T,pe={};R.T=pe;try{var Me=z(),we=R.S;we!==null&&we(pe,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(L,re)}catch($){re($)}finally{ie!==null&&pe.types!==null&&(ie.types=pe.types),R.T=ie}},gt.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},gt.use=function(z){return R.H.use(z)},gt.useActionState=function(z,ie,pe){return R.H.useActionState(z,ie,pe)},gt.useCallback=function(z,ie){return R.H.useCallback(z,ie)},gt.useContext=function(z){return R.H.useContext(z)},gt.useDebugValue=function(){},gt.useDeferredValue=function(z,ie){return R.H.useDeferredValue(z,ie)},gt.useEffect=function(z,ie){return R.H.useEffect(z,ie)},gt.useEffectEvent=function(z){return R.H.useEffectEvent(z)},gt.useId=function(){return R.H.useId()},gt.useImperativeHandle=function(z,ie,pe){return R.H.useImperativeHandle(z,ie,pe)},gt.useInsertionEffect=function(z,ie){return R.H.useInsertionEffect(z,ie)},gt.useLayoutEffect=function(z,ie){return R.H.useLayoutEffect(z,ie)},gt.useMemo=function(z,ie){return R.H.useMemo(z,ie)},gt.useOptimistic=function(z,ie){return R.H.useOptimistic(z,ie)},gt.useReducer=function(z,ie,pe){return R.H.useReducer(z,ie,pe)},gt.useRef=function(z){return R.H.useRef(z)},gt.useState=function(z){return R.H.useState(z)},gt.useSyncExternalStore=function(z,ie,pe){return R.H.useSyncExternalStore(z,ie,pe)},gt.useTransition=function(){return R.H.useTransition()},gt.version="19.2.4",gt}var sv;function Yp(){return sv||(sv=1,ch.exports=zy()),ch.exports}var yt=Yp();const Hy=z_(yt);var uh={exports:{}},Tl={},fh={exports:{}},dh={};var rv;function Gy(){return rv||(rv=1,(function(o){function e(O,G){var Z=O.length;O.push(G);e:for(;0<Z;){var re=Z-1>>>1,he=O[re];if(0<r(he,G))O[re]=G,O[Z]=he,Z=re;else break e}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var G=O[0],Z=O.pop();if(Z!==G){O[0]=Z;e:for(var re=0,he=O.length,z=he>>>1;re<z;){var ie=2*(re+1)-1,pe=O[ie],Me=ie+1,we=O[Me];if(0>r(pe,Z))Me<he&&0>r(we,pe)?(O[re]=we,O[Me]=Z,re=Me):(O[re]=pe,O[ie]=Z,re=ie);else if(Me<he&&0>r(we,Z))O[re]=we,O[Me]=Z,re=Me;else break e}}return G}function r(O,G){var Z=O.sortIndex-G.sortIndex;return Z!==0?Z:O.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,g=null,v=3,_=!1,y=!1,E=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var G=n(h);G!==null;){if(G.callback===null)a(h);else if(G.startTime<=O)a(h),G.sortIndex=G.expirationTime,e(d,G);else break;G=n(h)}}function b(O){if(E=!1,D(O),!y)if(n(d)!==null)y=!0,L||(L=!0,k());else{var G=n(h);G!==null&&Q(b,G.startTime-O)}}var L=!1,R=-1,P=5,C=-1;function U(){return x?!0:!(o.unstable_now()-C<P)}function N(){if(x=!1,L){var O=o.unstable_now();C=O;var G=!0;try{e:{y=!1,E&&(E=!1,T(R),R=-1),_=!0;var Z=v;try{t:{for(D(O),g=n(d);g!==null&&!(g.expirationTime>O&&U());){var re=g.callback;if(typeof re=="function"){g.callback=null,v=g.priorityLevel;var he=re(g.expirationTime<=O);if(O=o.unstable_now(),typeof he=="function"){g.callback=he,D(O),G=!0;break t}g===n(d)&&a(d),D(O)}else a(d);g=n(d)}if(g!==null)G=!0;else{var z=n(h);z!==null&&Q(b,z.startTime-O),G=!1}}break e}finally{g=null,v=Z,_=!1}G=void 0}}finally{G?k():L=!1}}}var k;if(typeof w=="function")k=function(){w(N)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,W=X.port2;X.port1.onmessage=N,k=function(){W.postMessage(null)}}else k=function(){A(N,0)};function Q(O,G){R=A(function(){O(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var Z=v;v=G;try{return O()}finally{v=Z}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=v;v=O;try{return G()}finally{v=Z}},o.unstable_scheduleCallback=function(O,G,Z){var re=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,O){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,O={id:m++,callback:G,priorityLevel:O,startTime:Z,expirationTime:he,sortIndex:-1},Z>re?(O.sortIndex=Z,e(h,O),n(d)===null&&O===n(h)&&(E?(T(R),R=-1):E=!0,Q(b,Z-re))):(O.sortIndex=he,e(d,O),y||_||(y=!0,L||(L=!0,k()))),O},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(O){var G=v;return function(){var Z=v;v=G;try{return O.apply(this,arguments)}finally{v=Z}}}})(dh)),dh}var ov;function Vy(){return ov||(ov=1,fh.exports=Gy()),fh.exports}var hh={exports:{}},Kn={};var lv;function ky(){if(lv)return Kn;lv=1;var o=Yp();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,h,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:h,implementation:m}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(d,h,null,m)},Kn.flushSync=function(d){var h=u.T,m=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=h,a.p=m,a.d.f()}},Kn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(d,h))},Kn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Kn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:_}):m==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Kn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(d)},Kn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin);a.d.L(d,m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Kn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(d)},Kn.requestFormReset=function(d){a.d.r(d)},Kn.unstable_batchedUpdates=function(d,h){return d(h)},Kn.useFormState=function(d,h,m){return u.H.useFormState(d,h,m)},Kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Kn.version="19.2.4",Kn}var cv;function Xy(){if(cv)return hh.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=ky(),hh.exports}var uv;function Wy(){if(uv)return Tl;uv=1;var o=Vy(),e=Yp(),n=Xy();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(l(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=l(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,c=i;;){var p=s.return;if(p===null)break;var S=p.alternate;if(S===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===S.child){for(S=p.child;S;){if(S===s)return d(p),t;if(S===c)return d(p),i;S=S.sibling}throw Error(a(188))}if(s.return!==c.return)s=p,c=S;else{for(var M=!1,B=p.child;B;){if(B===s){M=!0,s=p,c=S;break}if(B===c){M=!0,c=p,s=S;break}B=B.sibling}if(!M){for(B=S.child;B;){if(B===s){M=!0,s=S,c=p;break}if(B===c){M=!0,c=S,s=p;break}B=B.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function m(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=m(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var X=Symbol.for("react.client.reference");function W(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===X?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case A:return"Profiler";case x:return"StrictMode";case b:return"Suspense";case L:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case w:return t.displayName||"Context";case T:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return i=t.displayName||null,i!==null?i:W(t.type)||"Memo";case P:i=t._payload,t=t._init;try{return W(t(i))}catch{}}return null}var Q=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},re=[],he=-1;function z(t){return{current:t}}function ie(t){0>he||(t.current=re[he],re[he]=null,he--)}function pe(t,i){he++,re[he]=t.current,t.current=i}var Me=z(null),we=z(null),$=z(null),ce=z(null);function be(t,i){switch(pe($,i),pe(we,t),pe(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?TS(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=TS(i),t=CS(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Me),pe(Me,t)}function Fe(){ie(Me),ie(we),ie($)}function Ue(t){t.memoizedState!==null&&pe(ce,t);var i=Me.current,s=CS(i,t.type);i!==s&&(pe(we,t),pe(Me,s))}function st(t){we.current===t&&(ie(Me),ie(we)),ce.current===t&&(ie(ce),Al._currentValue=Z)}var vt,Je;function nt(t){if(vt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);vt=i&&i[1]||"",Je=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+Je}var tt=!1;function at(t,i){if(!t||tt)return"";tt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ge){var de=ge}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ge){de=ge}t.call(ye.prototype)}}else{try{throw Error()}catch(ge){de=ge}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ge){if(ge&&de&&typeof ge.stack=="string")return[ge.stack,de.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var S=c.DetermineComponentFrameRoot(),M=S[0],B=S[1];if(M&&B){var Y=M.split(`
`),le=B.split(`
`);for(p=c=0;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;for(;p<le.length&&!le[p].includes("DetermineComponentFrameRoot");)p++;if(c===Y.length||p===le.length)for(c=Y.length-1,p=le.length-1;1<=c&&0<=p&&Y[c]!==le[p];)p--;for(;1<=c&&0<=p;c--,p--)if(Y[c]!==le[p]){if(c!==1||p!==1)do if(c--,p--,0>p||Y[c]!==le[p]){var ve=`
`+Y[c].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=c&&0<=p);break}}}finally{tt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?nt(s):""}function Dt(t,i){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return t.child!==i&&i!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return nt("Activity");default:return""}}function q(t){try{var i="",s=null;do i+=Dt(t,s),s=t,t=t.return;while(t);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Mt=Object.prototype.hasOwnProperty,St=o.unstable_scheduleCallback,Bt=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,V=o.unstable_requestPaint,I=o.unstable_now,ee=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,Te=o.unstable_UserBlockingPriority,Se=o.unstable_NormalPriority,je=o.unstable_LowPriority,Pe=o.unstable_IdlePriority,We=o.log,j=o.unstable_setDisableYieldValue,ue=null,Ee=null;function De(t){if(typeof We=="function"&&j(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ue,t)}catch{}}var Le=Math.clz32?Math.clz32:J,Be=Math.log,ft=Math.LN2;function J(t){return t>>>=0,t===0?32:31-(Be(t)/ft|0)|0}var ze=256,Re=262144,Oe=4194304;function Ce(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ae(t,i,s){var c=t.pendingLanes;if(c===0)return 0;var p=0,S=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var B=c&134217727;return B!==0?(c=B&~S,c!==0?p=Ce(c):(M&=B,M!==0?p=Ce(M):s||(s=B&~t,s!==0&&(p=Ce(s))))):(B=c&~S,B!==0?p=Ce(B):M!==0?p=Ce(M):s||(s=c&~t,s!==0&&(p=Ce(s)))),p===0?0:i!==0&&i!==p&&(i&S)===0&&(S=p&-p,s=i&-i,S>=s||S===32&&(s&4194048)!==0)?i:p}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function lt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(){var t=Oe;return Oe<<=1,(Oe&62914560)===0&&(Oe=4194304),t}function It(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function jn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ji(t,i,s,c,p,S){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var B=t.entanglements,Y=t.expirationTimes,le=t.hiddenUpdates;for(s=M&~s;0<s;){var ve=31-Le(s),ye=1<<ve;B[ve]=0,Y[ve]=-1;var de=le[ve];if(de!==null)for(le[ve]=null,ve=0;ve<de.length;ve++){var ge=de[ve];ge!==null&&(ge.lane&=-536870913)}s&=~ye}c!==0&&Kl(t,c,0),S!==0&&p===0&&t.tag!==0&&(t.suspendedLanes|=S&~(M&~i))}function Kl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var c=31-Le(i);t.entangledLanes|=i,t.entanglements[c]=t.entanglements[c]|1073741824|s&261930}function Uo(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var c=31-Le(s),p=1<<c;p&i|t[c]&i&&(t[c]|=i),s&=~p}}function hr(t,i){var s=i&-i;return s=(s&42)!==0?1:Lo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Lo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:jS(t.type))}function ra(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Ui=Math.random().toString(36).slice(2),xn="__reactFiber$"+Ui,Pn="__reactProps$"+Ui,Ki="__reactContainer$"+Ui,mr="__reactEvents$"+Ui,gr="__reactListeners$"+Ui,Zl="__reactHandles$"+Ui,Fo="__reactResources$"+Ui,Ps="__reactMarker$"+Ui;function Po(t){delete t[xn],delete t[Pn],delete t[mr],delete t[gr],delete t[Zl]}function Ja(t){var i=t[xn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ki]||s[xn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=LS(t);t!==null;){if(s=t[xn])return s;t=LS(t)}return i}t=s,s=t.parentNode}return null}function $a(t){if(t=t[xn]||t[Ki]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Os(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function es(t){var i=t[Fo];return i||(i=t[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function F(t){t[Ps]=!0}var te=new Set,me={};function fe(t,i){ae(t,i),ae(t+"Capture",i)}function ae(t,i){for(me[t]=i,t=0;t<i.length;t++)te.add(i[t])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xe={},Ge={};function qe(t){return Mt.call(Ge,t)?!0:Mt.call(Xe,t)?!1:He.test(t)?Ge[t]=!0:(Xe[t]=!0,!1)}function Ke(t,i,s){if(qe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ot(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ze(t,i,s,c){if(c===null)t.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+c)}}function ct(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function cn(t,i,s){var c=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,S=c.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return p.call(this)},set:function(M){s=""+M,S.call(this,M)}}),Object.defineProperty(t,i,{enumerable:c.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function an(t){if(!t._valueTracker){var i=zt(t)?"checked":"value";t._valueTracker=cn(t,i,""+t[i])}}function kt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return t&&(c=zt(t)?t.checked?"true":"false":t.value),t=c,t!==s?(i.setValue(t),!0):!1}function it(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function mt(t){return t.replace(Ht,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function On(t,i,s,c,p,S,M,B){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ct(i)):t.value!==""+ct(i)&&(t.value=""+ct(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Nn(t,M,ct(i)):s!=null?Nn(t,M,ct(s)):c!=null&&t.removeAttribute("value"),p==null&&S!=null&&(t.defaultChecked=!!S),p!=null&&(t.checked=p&&typeof p!="function"&&typeof p!="symbol"),B!=null&&typeof B!="function"&&typeof B!="symbol"&&typeof B!="boolean"?t.name=""+ct(B):t.removeAttribute("name")}function xa(t,i,s,c,p,S,M,B){if(S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.type=S),i!=null||s!=null){if(!(S!=="submit"&&S!=="reset"||i!=null)){an(t);return}s=s!=null?""+ct(s):"",i=i!=null?""+ct(i):s,B||i===t.value||(t.value=i),t.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,t.checked=B?t.checked:!!c,t.defaultChecked=!!c,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),an(t)}function Nn(t,i,s){i==="number"&&it(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Li(t,i,s,c){if(t=t.options,i){i={};for(var p=0;p<s.length;p++)i["$"+s[p]]=!0;for(s=0;s<t.length;s++)p=i.hasOwnProperty("$"+t[s].value),t[s].selected!==p&&(t[s].selected=p),p&&c&&(t[s].defaultSelected=!0)}else{for(s=""+ct(s),i=null,p=0;p<t.length;p++){if(t[p].value===s){t[p].selected=!0,c&&(t[p].defaultSelected=!0);return}i!==null||t[p].disabled||(i=t[p])}i!==null&&(i.selected=!0)}}function qt(t,i,s){if(i!=null&&(i=""+ct(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ct(s):""}function zn(t,i,s,c){if(i==null){if(c!=null){if(s!=null)throw Error(a(92));if(Q(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),i=s}s=ct(i),t.defaultValue=s,c=t.textContent,c===s&&c!==""&&c!==null&&(t.value=c),an(t)}function bn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Hn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gn(t,i,s){var c=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":c?t.setProperty(i,s):typeof s!="number"||s===0||Hn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Sr(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?t.setProperty(c,""):c==="float"?t.cssFloat="":t[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&s[p]!==c&&Gn(t,p,c)}else for(var S in i)i.hasOwnProperty(S)&&Gn(t,S,i[S])}function Zi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var LA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),BA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(t){return BA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ya(){}var sf=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vr=null,_r=null;function Mm(t){var i=$a(t);if(i&&(t=i.stateNode)){var s=t[Pn]||null;e:switch(t=i.stateNode,i.type){case"input":if(On(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+mt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==t&&c.form===t.form){var p=c[Pn]||null;if(!p)throw Error(a(90));On(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<s.length;i++)c=s[i],c.form===t.form&&kt(c)}break e;case"textarea":qt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Li(t,!!s.multiple,i,!1)}}}var of=!1;function Tm(t,i,s){if(of)return t(i,s);of=!0;try{var c=t(i);return c}finally{if(of=!1,(vr!==null||_r!==null)&&(zc(),vr&&(i=vr,t=_r,_r=vr=null,Mm(i),t)))for(i=0;i<t.length;i++)Mm(t[i])}}function Oo(t,i){var s=t.stateNode;if(s===null)return null;var c=s[Pn]||null;if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(Ea)try{var No={};Object.defineProperty(No,"passive",{get:function(){lf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{lf=!1}var ts=null,cf=null,$l=null;function Cm(){if($l)return $l;var t,i=cf,s=i.length,c,p="value"in ts?ts.value:ts.textContent,S=p.length;for(t=0;t<s&&i[t]===p[t];t++);var M=s-t;for(c=1;c<=M&&i[s-c]===p[S-c];c++);return $l=p.slice(t,1<c?1-c:void 0)}function ec(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function bm(){return!1}function ui(t){function i(s,c,p,S,M){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=S,this.target=M,this.currentTarget=null;for(var B in t)t.hasOwnProperty(B)&&(s=t[B],this[B]=s?s(S):S[B]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?tc:bm,this.isPropagationStopped=bm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=ui(Ns),zo=g({},Ns,{view:0,detail:0}),FA=ui(zo),uf,ff,Ho,ic=g({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(uf=t.screenX-Ho.screenX,ff=t.screenY-Ho.screenY):ff=uf=0,Ho=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Rm=ui(ic),PA=g({},ic,{dataTransfer:0}),OA=ui(PA),NA=g({},zo,{relatedTarget:0}),df=ui(NA),zA=g({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),HA=ui(zA),GA=g({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VA=ui(GA),kA=g({},Ns,{data:0}),wm=ui(kA),XA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YA(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qA[t])?!!i[t]:!1}function hf(){return YA}var QA=g({},zo,{key:function(t){if(t.key){var i=XA[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jA=ui(QA),KA=g({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=ui(KA),ZA=g({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),JA=ui(ZA),$A=g({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=ui($A),tx=g({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=ui(tx),ix=g({},Ns,{newState:0,oldState:0}),ax=ui(ix),sx=[9,13,27,32],pf=Ea&&"CompositionEvent"in window,Go=null;Ea&&"documentMode"in document&&(Go=document.documentMode);var rx=Ea&&"TextEvent"in window&&!Go,Im=Ea&&(!pf||Go&&8<Go&&11>=Go),Um=" ",Lm=!1;function Bm(t,i){switch(t){case"keyup":return sx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function ox(t,i){switch(t){case"compositionend":return Fm(i);case"keypress":return i.which!==32?null:(Lm=!0,Um);case"textInput":return t=i.data,t===Um&&Lm?null:t;default:return null}}function lx(t,i){if(Ar)return t==="compositionend"||!pf&&Bm(t,i)?(t=Cm(),$l=cf=ts=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Im&&i.locale!=="ko"?null:i.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!cx[t.type]:i==="textarea"}function Om(t,i,s,c){vr?_r?_r.push(c):_r=[c]:vr=c,i=qc(i,"onChange"),0<i.length&&(s=new nc("onChange","change",null,s,c),t.push({event:s,listeners:i}))}var Vo=null,ko=null;function ux(t){_S(t,0)}function ac(t){var i=Os(t);if(kt(i))return t}function Nm(t,i){if(t==="change")return i}var zm=!1;if(Ea){var mf;if(Ea){var gf="oninput"in document;if(!gf){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),gf=typeof Hm.oninput=="function"}mf=gf}else mf=!1;zm=mf&&(!document.documentMode||9<document.documentMode)}function Gm(){Vo&&(Vo.detachEvent("onpropertychange",Vm),ko=Vo=null)}function Vm(t){if(t.propertyName==="value"&&ac(ko)){var i=[];Om(i,ko,t,rf(t)),Tm(ux,i)}}function fx(t,i,s){t==="focusin"?(Gm(),Vo=i,ko=s,Vo.attachEvent("onpropertychange",Vm)):t==="focusout"&&Gm()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(ko)}function hx(t,i){if(t==="click")return ac(i)}function px(t,i){if(t==="input"||t==="change")return ac(i)}function mx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var _i=typeof Object.is=="function"?Object.is:mx;function Xo(t,i){if(_i(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!Mt.call(i,p)||!_i(t[p],i[p]))return!1}return!0}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,i){var s=km(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=i&&c>=i)return{node:s,offset:i-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=km(s)}}function Wm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=it(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=it(t.document)}return i}function Sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var gx=Ea&&"documentMode"in document&&11>=document.documentMode,xr=null,vf=null,Wo=null,_f=!1;function Ym(t,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;_f||xr==null||xr!==it(c)||(c=xr,"selectionStart"in c&&Sf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Wo&&Xo(Wo,c)||(Wo=c,c=qc(vf,"onSelect"),0<c.length&&(i=new nc("onSelect","select",null,i,s),t.push({event:i,listeners:c}),i.target=xr)))}function zs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var yr={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionrun:zs("Transition","TransitionRun"),transitionstart:zs("Transition","TransitionStart"),transitioncancel:zs("Transition","TransitionCancel"),transitionend:zs("Transition","TransitionEnd")},Af={},Qm={};Ea&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Hs(t){if(Af[t])return Af[t];if(!yr[t])return t;var i=yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Qm)return Af[t]=i[s];return t}var jm=Hs("animationend"),Km=Hs("animationiteration"),Zm=Hs("animationstart"),Sx=Hs("transitionrun"),vx=Hs("transitionstart"),_x=Hs("transitioncancel"),Jm=Hs("transitionend"),$m=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function Ji(t,i){$m.set(t,i),fe(i,[t])}var sc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Bi=[],Er=0,yf=0;function rc(){for(var t=Er,i=yf=Er=0;i<t;){var s=Bi[i];Bi[i++]=null;var c=Bi[i];Bi[i++]=null;var p=Bi[i];Bi[i++]=null;var S=Bi[i];if(Bi[i++]=null,c!==null&&p!==null){var M=c.pending;M===null?p.next=p:(p.next=M.next,M.next=p),c.pending=p}S!==0&&eg(s,p,S)}}function oc(t,i,s,c){Bi[Er++]=t,Bi[Er++]=i,Bi[Er++]=s,Bi[Er++]=c,yf|=c,t.lanes|=c,t=t.alternate,t!==null&&(t.lanes|=c)}function Ef(t,i,s,c){return oc(t,i,s,c),lc(t)}function Gs(t,i){return oc(t,null,null,i),lc(t)}function eg(t,i,s){t.lanes|=s;var c=t.alternate;c!==null&&(c.lanes|=s);for(var p=!1,S=t.return;S!==null;)S.childLanes|=s,c=S.alternate,c!==null&&(c.childLanes|=s),S.tag===22&&(t=S.stateNode,t===null||t._visibility&1||(p=!0)),t=S,S=S.return;return t.tag===3?(S=t.stateNode,p&&i!==null&&(p=31-Le(s),t=S.hiddenUpdates,c=t[p],c===null?t[p]=[i]:c.push(i),i.lane=s|536870912),S):null}function lc(t){if(50<hl)throw hl=0,Ud=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Mr={};function Ax(t,i,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(t,i,s,c){return new Ax(t,i,s,c)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ma(t,i){var s=t.alternate;return s===null?(s=Ai(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function tg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function cc(t,i,s,c,p,S){var M=0;if(c=t,typeof t=="function")Mf(t)&&(M=1);else if(typeof t=="string")M=Ty(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Ai(31,s,i,p),t.elementType=C,t.lanes=S,t;case E:return Vs(s.children,p,S,i);case x:M=8,p|=24;break;case A:return t=Ai(12,s,i,p|2),t.elementType=A,t.lanes=S,t;case b:return t=Ai(13,s,i,p),t.elementType=b,t.lanes=S,t;case L:return t=Ai(19,s,i,p),t.elementType=L,t.lanes=S,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case T:M=9;break e;case D:M=11;break e;case R:M=14;break e;case P:M=16,c=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),c=null}return i=Ai(M,s,i,p),i.elementType=t,i.type=c,i.lanes=S,i}function Vs(t,i,s,c){return t=Ai(7,t,c,i),t.lanes=s,t}function Tf(t,i,s){return t=Ai(6,t,null,i),t.lanes=s,t}function ng(t){var i=Ai(18,null,null,0);return i.stateNode=t,i}function Cf(t,i,s){return i=Ai(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ig=new WeakMap;function Fi(t,i){if(typeof t=="object"&&t!==null){var s=ig.get(t);return s!==void 0?s:(i={value:t,source:i,stack:q(i)},ig.set(t,i),i)}return{value:t,source:i,stack:q(i)}}var Tr=[],Cr=0,uc=null,qo=0,Pi=[],Oi=0,ns=null,oa=1,la="";function Ta(t,i){Tr[Cr++]=qo,Tr[Cr++]=uc,uc=t,qo=i}function ag(t,i,s){Pi[Oi++]=oa,Pi[Oi++]=la,Pi[Oi++]=ns,ns=t;var c=oa;t=la;var p=32-Le(c)-1;c&=~(1<<p),s+=1;var S=32-Le(i)+p;if(30<S){var M=p-p%5;S=(c&(1<<M)-1).toString(32),c>>=M,p-=M,oa=1<<32-Le(i)+p|s<<p|c,la=S+t}else oa=1<<S|s<<p|c,la=t}function bf(t){t.return!==null&&(Ta(t,1),ag(t,1,0))}function Rf(t){for(;t===uc;)uc=Tr[--Cr],Tr[Cr]=null,qo=Tr[--Cr],Tr[Cr]=null;for(;t===ns;)ns=Pi[--Oi],Pi[Oi]=null,la=Pi[--Oi],Pi[Oi]=null,oa=Pi[--Oi],Pi[Oi]=null}function sg(t,i){Pi[Oi++]=oa,Pi[Oi++]=la,Pi[Oi++]=ns,oa=i.id,la=i.overflow,ns=t}var Vn=null,rn=null,wt=!1,is=null,Ni=!1,wf=Error(a(519));function as(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yo(Fi(i,t)),wf}function rg(t){var i=t.stateNode,s=t.type,c=t.memoizedProps;switch(i[xn]=t,i[Pn]=c,s){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(s=0;s<ml.length;s++)Ct(ml[s],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Ct("invalid",i),xa(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ct("invalid",i);break;case"textarea":Ct("invalid",i),zn(i,c.value,c.defaultValue,c.children)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||c.suppressHydrationWarning===!0||ES(i.textContent,s)?(c.popover!=null&&(Ct("beforetoggle",i),Ct("toggle",i)),c.onScroll!=null&&Ct("scroll",i),c.onScrollEnd!=null&&Ct("scrollend",i),c.onClick!=null&&(i.onclick=ya),i=!0):i=!1,i||as(t,!0)}function og(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Vn=Vn.return}}function br(t){if(t!==Vn)return!1;if(!wt)return og(t),wt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Yd(t.type,t.memoizedProps)),s=!s),s&&rn&&as(t),og(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));rn=US(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));rn=US(t)}else i===27?(i=rn,vs(t.type)?(t=Jd,Jd=null,rn=t):rn=i):rn=Vn?Hi(t.stateNode.nextSibling):null;return!0}function ks(){rn=Vn=null,wt=!1}function Df(){var t=is;return t!==null&&(pi===null?pi=t:pi.push.apply(pi,t),is=null),t}function Yo(t){is===null?is=[t]:is.push(t)}var If=z(null),Xs=null,Ca=null;function ss(t,i,s){pe(If,i._currentValue),i._currentValue=s}function ba(t){t._currentValue=If.current,ie(If)}function Uf(t,i,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===s)break;t=t.return}}function Lf(t,i,s,c){var p=t.child;for(p!==null&&(p.return=t);p!==null;){var S=p.dependencies;if(S!==null){var M=p.child;S=S.firstContext;e:for(;S!==null;){var B=S;S=p;for(var Y=0;Y<i.length;Y++)if(B.context===i[Y]){S.lanes|=s,B=S.alternate,B!==null&&(B.lanes|=s),Uf(S.return,s,t),c||(M=null);break e}S=B.next}}else if(p.tag===18){if(M=p.return,M===null)throw Error(a(341));M.lanes|=s,S=M.alternate,S!==null&&(S.lanes|=s),Uf(M,s,t),M=null}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===t){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}}function Rr(t,i,s,c){t=null;for(var p=i,S=!1;p!==null;){if(!S){if((p.flags&524288)!==0)S=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var M=p.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var B=p.type;_i(p.pendingProps.value,M.value)||(t!==null?t.push(B):t=[B])}}else if(p===ce.current){if(M=p.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(t!==null?t.push(Al):t=[Al])}p=p.return}t!==null&&Lf(i,t,s,c),i.flags|=262144}function fc(t){for(t=t.firstContext;t!==null;){if(!_i(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ws(t){Xs=t,Ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return lg(Xs,t)}function dc(t,i){return Xs===null&&Ws(t),lg(t,i)}function lg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ca===null){if(t===null)throw Error(a(308));Ca=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ca=Ca.next=i;return s}var xx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,c){t.push(c)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},yx=o.unstable_scheduleCallback,Ex=o.unstable_NormalPriority,yn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bf(){return{controller:new xx,data:new Map,refCount:0}}function Qo(t){t.refCount--,t.refCount===0&&yx(Ex,function(){t.controller.abort()})}var jo=null,Ff=0,wr=0,Dr=null;function Mx(t,i){if(jo===null){var s=jo=[];Ff=0,wr=Nd(),Dr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Ff++,i.then(cg,cg),i}function cg(){if(--Ff===0&&jo!==null){Dr!==null&&(Dr.status="fulfilled");var t=jo;jo=null,wr=0,Dr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Tx(t,i){var s=[],c={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return t.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<s.length;p++)(0,s[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),c}var ug=O.S;O.S=function(t,i){Y0=I(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Mx(t,i),ug!==null&&ug(t,i)};var qs=z(null);function Pf(){var t=qs.current;return t!==null?t:nn.pooledCache}function hc(t,i){i===null?pe(qs,qs.current):pe(qs,i.pool)}function fg(){var t=Pf();return t===null?null:{parent:yn._currentValue,pool:t}}var Ir=Error(a(460)),Of=Error(a(474)),pc=Error(a(542)),mc={then:function(){}};function dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ya,ya),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,mg(t),t;default:if(typeof i.status=="string")i.then(ya,ya);else{if(t=nn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,mg(t),t}throw Qs=i,Ir}}function Ys(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Qs=s,Ir):s}}var Qs=null;function pg(){if(Qs===null)throw Error(a(459));var t=Qs;return Qs=null,t}function mg(t){if(t===Ir||t===pc)throw Error(a(483))}var Ur=null,Ko=0;function gc(t){var i=Ko;return Ko+=1,Ur===null&&(Ur=[]),hg(Ur,t,i)}function Zo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Sc(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function gg(t){function i(ne,K){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[K],ne.flags|=16):oe.push(K)}}function s(ne,K){if(!t)return null;for(;K!==null;)i(ne,K),K=K.sibling;return null}function c(ne){for(var K=new Map;ne!==null;)ne.key!==null?K.set(ne.key,ne):K.set(ne.index,ne),ne=ne.sibling;return K}function p(ne,K){return ne=Ma(ne,K),ne.index=0,ne.sibling=null,ne}function S(ne,K,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<K?(ne.flags|=67108866,K):oe):(ne.flags|=67108866,K)):(ne.flags|=1048576,K)}function M(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function B(ne,K,oe,xe){return K===null||K.tag!==6?(K=Tf(oe,ne.mode,xe),K.return=ne,K):(K=p(K,oe),K.return=ne,K)}function Y(ne,K,oe,xe){var rt=oe.type;return rt===E?ve(ne,K,oe.props.children,xe,oe.key):K!==null&&(K.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===P&&Ys(rt)===K.type)?(K=p(K,oe.props),Zo(K,oe),K.return=ne,K):(K=cc(oe.type,oe.key,oe.props,null,ne.mode,xe),Zo(K,oe),K.return=ne,K)}function le(ne,K,oe,xe){return K===null||K.tag!==4||K.stateNode.containerInfo!==oe.containerInfo||K.stateNode.implementation!==oe.implementation?(K=Cf(oe,ne.mode,xe),K.return=ne,K):(K=p(K,oe.children||[]),K.return=ne,K)}function ve(ne,K,oe,xe,rt){return K===null||K.tag!==7?(K=Vs(oe,ne.mode,xe,rt),K.return=ne,K):(K=p(K,oe),K.return=ne,K)}function ye(ne,K,oe){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Tf(""+K,ne.mode,oe),K.return=ne,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case _:return oe=cc(K.type,K.key,K.props,null,ne.mode,oe),Zo(oe,K),oe.return=ne,oe;case y:return K=Cf(K,ne.mode,oe),K.return=ne,K;case P:return K=Ys(K),ye(ne,K,oe)}if(Q(K)||k(K))return K=Vs(K,ne.mode,oe,null),K.return=ne,K;if(typeof K.then=="function")return ye(ne,gc(K),oe);if(K.$$typeof===w)return ye(ne,dc(ne,K),oe);Sc(ne,K)}return null}function de(ne,K,oe,xe){var rt=K!==null?K.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return rt!==null?null:B(ne,K,""+oe,xe);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case _:return oe.key===rt?Y(ne,K,oe,xe):null;case y:return oe.key===rt?le(ne,K,oe,xe):null;case P:return oe=Ys(oe),de(ne,K,oe,xe)}if(Q(oe)||k(oe))return rt!==null?null:ve(ne,K,oe,xe,null);if(typeof oe.then=="function")return de(ne,K,gc(oe),xe);if(oe.$$typeof===w)return de(ne,K,dc(ne,oe),xe);Sc(ne,oe)}return null}function ge(ne,K,oe,xe,rt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return ne=ne.get(oe)||null,B(K,ne,""+xe,rt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case _:return ne=ne.get(xe.key===null?oe:xe.key)||null,Y(K,ne,xe,rt);case y:return ne=ne.get(xe.key===null?oe:xe.key)||null,le(K,ne,xe,rt);case P:return xe=Ys(xe),ge(ne,K,oe,xe,rt)}if(Q(xe)||k(xe))return ne=ne.get(oe)||null,ve(K,ne,xe,rt,null);if(typeof xe.then=="function")return ge(ne,K,oe,gc(xe),rt);if(xe.$$typeof===w)return ge(ne,K,oe,dc(K,xe),rt);Sc(K,xe)}return null}function Ye(ne,K,oe,xe){for(var rt=null,Ft=null,$e=K,At=K=0,Rt=null;$e!==null&&At<oe.length;At++){$e.index>At?(Rt=$e,$e=null):Rt=$e.sibling;var Pt=de(ne,$e,oe[At],xe);if(Pt===null){$e===null&&($e=Rt);break}t&&$e&&Pt.alternate===null&&i(ne,$e),K=S(Pt,K,At),Ft===null?rt=Pt:Ft.sibling=Pt,Ft=Pt,$e=Rt}if(At===oe.length)return s(ne,$e),wt&&Ta(ne,At),rt;if($e===null){for(;At<oe.length;At++)$e=ye(ne,oe[At],xe),$e!==null&&(K=S($e,K,At),Ft===null?rt=$e:Ft.sibling=$e,Ft=$e);return wt&&Ta(ne,At),rt}for($e=c($e);At<oe.length;At++)Rt=ge($e,ne,At,oe[At],xe),Rt!==null&&(t&&Rt.alternate!==null&&$e.delete(Rt.key===null?At:Rt.key),K=S(Rt,K,At),Ft===null?rt=Rt:Ft.sibling=Rt,Ft=Rt);return t&&$e.forEach(function(Es){return i(ne,Es)}),wt&&Ta(ne,At),rt}function ut(ne,K,oe,xe){if(oe==null)throw Error(a(151));for(var rt=null,Ft=null,$e=K,At=K=0,Rt=null,Pt=oe.next();$e!==null&&!Pt.done;At++,Pt=oe.next()){$e.index>At?(Rt=$e,$e=null):Rt=$e.sibling;var Es=de(ne,$e,Pt.value,xe);if(Es===null){$e===null&&($e=Rt);break}t&&$e&&Es.alternate===null&&i(ne,$e),K=S(Es,K,At),Ft===null?rt=Es:Ft.sibling=Es,Ft=Es,$e=Rt}if(Pt.done)return s(ne,$e),wt&&Ta(ne,At),rt;if($e===null){for(;!Pt.done;At++,Pt=oe.next())Pt=ye(ne,Pt.value,xe),Pt!==null&&(K=S(Pt,K,At),Ft===null?rt=Pt:Ft.sibling=Pt,Ft=Pt);return wt&&Ta(ne,At),rt}for($e=c($e);!Pt.done;At++,Pt=oe.next())Pt=ge($e,ne,At,Pt.value,xe),Pt!==null&&(t&&Pt.alternate!==null&&$e.delete(Pt.key===null?At:Pt.key),K=S(Pt,K,At),Ft===null?rt=Pt:Ft.sibling=Pt,Ft=Pt);return t&&$e.forEach(function(Py){return i(ne,Py)}),wt&&Ta(ne,At),rt}function Jt(ne,K,oe,xe){if(typeof oe=="object"&&oe!==null&&oe.type===E&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case _:e:{for(var rt=oe.key;K!==null;){if(K.key===rt){if(rt=oe.type,rt===E){if(K.tag===7){s(ne,K.sibling),xe=p(K,oe.props.children),xe.return=ne,ne=xe;break e}}else if(K.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===P&&Ys(rt)===K.type){s(ne,K.sibling),xe=p(K,oe.props),Zo(xe,oe),xe.return=ne,ne=xe;break e}s(ne,K);break}else i(ne,K);K=K.sibling}oe.type===E?(xe=Vs(oe.props.children,ne.mode,xe,oe.key),xe.return=ne,ne=xe):(xe=cc(oe.type,oe.key,oe.props,null,ne.mode,xe),Zo(xe,oe),xe.return=ne,ne=xe)}return M(ne);case y:e:{for(rt=oe.key;K!==null;){if(K.key===rt)if(K.tag===4&&K.stateNode.containerInfo===oe.containerInfo&&K.stateNode.implementation===oe.implementation){s(ne,K.sibling),xe=p(K,oe.children||[]),xe.return=ne,ne=xe;break e}else{s(ne,K);break}else i(ne,K);K=K.sibling}xe=Cf(oe,ne.mode,xe),xe.return=ne,ne=xe}return M(ne);case P:return oe=Ys(oe),Jt(ne,K,oe,xe)}if(Q(oe))return Ye(ne,K,oe,xe);if(k(oe)){if(rt=k(oe),typeof rt!="function")throw Error(a(150));return oe=rt.call(oe),ut(ne,K,oe,xe)}if(typeof oe.then=="function")return Jt(ne,K,gc(oe),xe);if(oe.$$typeof===w)return Jt(ne,K,dc(ne,oe),xe);Sc(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,K!==null&&K.tag===6?(s(ne,K.sibling),xe=p(K,oe),xe.return=ne,ne=xe):(s(ne,K),xe=Tf(oe,ne.mode,xe),xe.return=ne,ne=xe),M(ne)):s(ne,K)}return function(ne,K,oe,xe){try{Ko=0;var rt=Jt(ne,K,oe,xe);return Ur=null,rt}catch($e){if($e===Ir||$e===pc)throw $e;var Ft=Ai(29,$e,null,ne.mode);return Ft.lanes=xe,Ft.return=ne,Ft}}}var js=gg(!0),Sg=gg(!1),rs=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function os(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ls(t,i,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Gt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=lc(t),eg(t,null,s),i}return oc(t,c,i,s),lc(t)}function Jo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,Uo(t,s)}}function Hf(t,i){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,S=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};S===null?p=S=M:S=S.next=M,s=s.next}while(s!==null);S===null?p=S=i:S=S.next=i}else p=S=i;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:S,shared:c.shared,callbacks:c.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Gf=!1;function $o(){if(Gf){var t=Dr;if(t!==null)throw t}}function el(t,i,s,c){Gf=!1;var p=t.updateQueue;rs=!1;var S=p.firstBaseUpdate,M=p.lastBaseUpdate,B=p.shared.pending;if(B!==null){p.shared.pending=null;var Y=B,le=Y.next;Y.next=null,M===null?S=le:M.next=le,M=Y;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,B=ve.lastBaseUpdate,B!==M&&(B===null?ve.firstBaseUpdate=le:B.next=le,ve.lastBaseUpdate=Y))}if(S!==null){var ye=p.baseState;M=0,ve=le=Y=null,B=S;do{var de=B.lane&-536870913,ge=de!==B.lane;if(ge?(bt&de)===de:(c&de)===de){de!==0&&de===wr&&(Gf=!0),ve!==null&&(ve=ve.next={lane:0,tag:B.tag,payload:B.payload,callback:null,next:null});e:{var Ye=t,ut=B;de=i;var Jt=s;switch(ut.tag){case 1:if(Ye=ut.payload,typeof Ye=="function"){ye=Ye.call(Jt,ye,de);break e}ye=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=ut.payload,de=typeof Ye=="function"?Ye.call(Jt,ye,de):Ye,de==null)break e;ye=g({},ye,de);break e;case 2:rs=!0}}de=B.callback,de!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=p.callbacks,ge===null?p.callbacks=[de]:ge.push(de))}else ge={lane:de,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ve===null?(le=ve=ge,Y=ye):ve=ve.next=ge,M|=de;if(B=B.next,B===null){if(B=p.shared.pending,B===null)break;ge=B,B=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);ve===null&&(Y=ye),p.baseState=Y,p.firstBaseUpdate=le,p.lastBaseUpdate=ve,S===null&&(p.shared.lanes=0),hs|=M,t.lanes=M,t.memoizedState=ye}}function vg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function _g(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)vg(s[t],i)}var Lr=z(null),vc=z(0);function Ag(t,i){t=Pa,pe(vc,t),pe(Lr,i),Pa=t|i.baseLanes}function Vf(){pe(vc,Pa),pe(Lr,Lr.current)}function kf(){Pa=vc.current,ie(Lr),ie(vc)}var xi=z(null),zi=null;function cs(t){var i=t.alternate;pe(Sn,Sn.current&1),pe(xi,t),zi===null&&(i===null||Lr.current!==null||i.memoizedState!==null)&&(zi=t)}function Xf(t){pe(Sn,Sn.current),pe(xi,t),zi===null&&(zi=t)}function xg(t){t.tag===22?(pe(Sn,Sn.current),pe(xi,t),zi===null&&(zi=t)):us()}function us(){pe(Sn,Sn.current),pe(xi,xi.current)}function yi(t){ie(xi),zi===t&&(zi=null),ie(Sn)}var Sn=z(0);function _c(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Kd(s)||Zd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ra=0,_t=null,Kt=null,En=null,Ac=!1,Br=!1,Ks=!1,xc=0,tl=0,Fr=null,Cx=0;function mn(){throw Error(a(321))}function Wf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!_i(t[s],i[s]))return!1;return!0}function qf(t,i,s,c,p,S){return Ra=S,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?a0:od,Ks=!1,S=s(c,p),Ks=!1,Br&&(S=Eg(i,s,c,p)),yg(t),S}function yg(t){O.H=al;var i=Kt!==null&&Kt.next!==null;if(Ra=0,En=Kt=_t=null,Ac=!1,tl=0,Fr=null,i)throw Error(a(300));t===null||Mn||(t=t.dependencies,t!==null&&fc(t)&&(Mn=!0))}function Eg(t,i,s,c){_t=t;var p=0;do{if(Br&&(Fr=null),tl=0,Br=!1,25<=p)throw Error(a(301));if(p+=1,En=Kt=null,t.updateQueue!=null){var S=t.updateQueue;S.lastEffect=null,S.events=null,S.stores=null,S.memoCache!=null&&(S.memoCache.index=0)}O.H=s0,S=i(s,c)}while(Br);return S}function bx(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?nl(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(_t.flags|=1024),i}function Yf(){var t=xc!==0;return xc=0,t}function Qf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function jf(t){if(Ac){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ac=!1}Ra=0,En=Kt=_t=null,Br=!1,tl=xc=0,Fr=null}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?_t.memoizedState=En=t:En=En.next=t,En}function vn(){if(Kt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=En===null?_t.memoizedState:En.next;if(i!==null)En=i,Kt=t;else{if(t===null)throw _t.alternate===null?Error(a(467)):Error(a(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},En===null?_t.memoizedState=En=t:En=En.next=t}return En}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(t){var i=tl;return tl+=1,Fr===null&&(Fr=[]),t=hg(Fr,t,i),i=_t,(En===null?i.memoizedState:En.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?a0:od),t}function Ec(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nl(t);if(t.$$typeof===w)return kn(t)}throw Error(a(438,String(t)))}function Kf(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var c=_t.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=yc(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),c=0;c<t;c++)s[c]=U;return i.index++,s}function wa(t,i){return typeof i=="function"?i(t):i}function Mc(t){var i=vn();return Zf(i,Kt,t)}function Zf(t,i,s){var c=t.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var p=t.baseQueue,S=c.pending;if(S!==null){if(p!==null){var M=p.next;p.next=S.next,S.next=M}i.baseQueue=p=S,c.pending=null}if(S=t.baseState,p===null)t.memoizedState=S;else{i=p.next;var B=M=null,Y=null,le=i,ve=!1;do{var ye=le.lane&-536870913;if(ye!==le.lane?(bt&ye)===ye:(Ra&ye)===ye){var de=le.revertLane;if(de===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),ye===wr&&(ve=!0);else if((Ra&de)===de){le=le.next,de===wr&&(ve=!0);continue}else ye={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},Y===null?(B=Y=ye,M=S):Y=Y.next=ye,_t.lanes|=de,hs|=de;ye=le.action,Ks&&s(S,ye),S=le.hasEagerState?le.eagerState:s(S,ye)}else de={lane:ye,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},Y===null?(B=Y=de,M=S):Y=Y.next=de,_t.lanes|=ye,hs|=ye;le=le.next}while(le!==null&&le!==i);if(Y===null?M=S:Y.next=B,!_i(S,t.memoizedState)&&(Mn=!0,ve&&(s=Dr,s!==null)))throw s;t.memoizedState=S,t.baseState=M,t.baseQueue=Y,c.lastRenderedState=S}return p===null&&(c.lanes=0),[t.memoizedState,c.dispatch]}function Jf(t){var i=vn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var c=s.dispatch,p=s.pending,S=i.memoizedState;if(p!==null){s.pending=null;var M=p=p.next;do S=t(S,M.action),M=M.next;while(M!==p);_i(S,i.memoizedState)||(Mn=!0),i.memoizedState=S,i.baseQueue===null&&(i.baseState=S),s.lastRenderedState=S}return[S,c]}function Mg(t,i,s){var c=_t,p=vn(),S=wt;if(S){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!_i((Kt||p).memoizedState,s);if(M&&(p.memoizedState=s,Mn=!0),p=p.queue,td(bg.bind(null,c,p,t),[t]),p.getSnapshot!==i||M||En!==null&&En.memoizedState.tag&1){if(c.flags|=2048,Pr(9,{destroy:void 0},Cg.bind(null,c,p,s,i),null),nn===null)throw Error(a(349));S||(Ra&127)!==0||Tg(c,i,s)}return s}function Tg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=yc(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Cg(t,i,s,c){i.value=s,i.getSnapshot=c,Rg(i)&&wg(t)}function bg(t,i,s){return s(function(){Rg(i)&&wg(t)})}function Rg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!_i(t,s)}catch{return!0}}function wg(t){var i=Gs(t,2);i!==null&&mi(i,t,2)}function $f(t){var i=ti();if(typeof t=="function"){var s=t;if(t=s(),Ks){De(!0);try{s()}finally{De(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i}function Dg(t,i,s,c){return t.baseState=s,Zf(t,Kt,typeof c=="function"?c:wa)}function Rx(t,i,s,c,p){if(bc(t))throw Error(a(485));if(t=i.action,t!==null){var S={payload:p,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){S.listeners.push(M)}};O.T!==null?s(!0):S.isTransition=!1,c(S),s=i.pending,s===null?(S.next=i.pending=S,Ig(i,S)):(S.next=s.next,i.pending=s.next=S)}}function Ig(t,i){var s=i.action,c=i.payload,p=t.state;if(i.isTransition){var S=O.T,M={};O.T=M;try{var B=s(p,c),Y=O.S;Y!==null&&Y(M,B),Ug(t,i,B)}catch(le){ed(t,i,le)}finally{S!==null&&M.types!==null&&(S.types=M.types),O.T=S}}else try{S=s(p,c),Ug(t,i,S)}catch(le){ed(t,i,le)}}function Ug(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Lg(t,i,c)},function(c){return ed(t,i,c)}):Lg(t,i,s)}function Lg(t,i,s){i.status="fulfilled",i.value=s,Bg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Ig(t,s)))}function ed(t,i,s){var c=t.pending;if(t.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=s,Bg(i),i=i.next;while(i!==c)}t.action=null}function Bg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Fg(t,i){return i}function Pg(t,i){if(wt){var s=nn.formState;if(s!==null){e:{var c=_t;if(wt){if(rn){t:{for(var p=rn,S=Ni;p.nodeType!==8;){if(!S){p=null;break t}if(p=Hi(p.nextSibling),p===null){p=null;break t}}S=p.data,p=S==="F!"||S==="F"?p:null}if(p){rn=Hi(p.nextSibling),c=p.data==="F!";break e}}as(c)}c=!1}c&&(i=s[0])}}return s=ti(),s.memoizedState=s.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fg,lastRenderedState:i},s.queue=c,s=t0.bind(null,_t,c),c.dispatch=s,c=$f(!1),S=rd.bind(null,_t,!1,c.queue),c=ti(),p={state:i,dispatch:null,action:t,pending:null},c.queue=p,s=Rx.bind(null,_t,p,S,s),p.dispatch=s,c.memoizedState=t,[i,s,!1]}function Og(t){var i=vn();return Ng(i,Kt,t)}function Ng(t,i,s){if(i=Zf(t,i,Fg)[0],t=Mc(wa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=nl(i)}catch(M){throw M===Ir?pc:M}else c=i;i=vn();var p=i.queue,S=p.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,Pr(9,{destroy:void 0},wx.bind(null,p,s),null)),[c,S,t]}function wx(t,i){t.action=i}function zg(t){var i=vn(),s=Kt;if(s!==null)return Ng(i,s,t);vn(),i=i.memoizedState,s=vn();var c=s.queue.dispatch;return s.memoizedState=t,[i,c,!1]}function Pr(t,i,s,c){return t={tag:t,create:s,deps:c,inst:i,next:null},i=_t.updateQueue,i===null&&(i=yc(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,i.lastEffect=t),t}function Hg(){return vn().memoizedState}function Tc(t,i,s,c){var p=ti();_t.flags|=t,p.memoizedState=Pr(1|i,{destroy:void 0},s,c===void 0?null:c)}function Cc(t,i,s,c){var p=vn();c=c===void 0?null:c;var S=p.memoizedState.inst;Kt!==null&&c!==null&&Wf(c,Kt.memoizedState.deps)?p.memoizedState=Pr(i,S,s,c):(_t.flags|=t,p.memoizedState=Pr(1|i,S,s,c))}function Gg(t,i){Tc(8390656,8,t,i)}function td(t,i){Cc(2048,8,t,i)}function Dx(t){_t.flags|=4;var i=_t.updateQueue;if(i===null)i=yc(),_t.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Vg(t){var i=vn().memoizedState;return Dx({ref:i,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function kg(t,i){return Cc(4,2,t,i)}function Xg(t,i){return Cc(4,4,t,i)}function Wg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qg(t,i,s){s=s!=null?s.concat([t]):null,Cc(4,4,Wg.bind(null,i,t),s)}function nd(){}function Yg(t,i){var s=vn();i=i===void 0?null:i;var c=s.memoizedState;return i!==null&&Wf(i,c[1])?c[0]:(s.memoizedState=[t,i],t)}function Qg(t,i){var s=vn();i=i===void 0?null:i;var c=s.memoizedState;if(i!==null&&Wf(i,c[1]))return c[0];if(c=t(),Ks){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[c,i],c}function id(t,i,s){return s===void 0||(Ra&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=j0(),_t.lanes|=t,hs|=t,s)}function jg(t,i,s,c){return _i(s,i)?s:Lr.current!==null?(t=id(t,s,c),_i(t,i)||(Mn=!0),t):(Ra&42)===0||(Ra&1073741824)!==0&&(bt&261930)===0?(Mn=!0,t.memoizedState=s):(t=j0(),_t.lanes|=t,hs|=t,i)}function Kg(t,i,s,c,p){var S=G.p;G.p=S!==0&&8>S?S:8;var M=O.T,B={};O.T=B,rd(t,!1,i,s);try{var Y=p(),le=O.S;if(le!==null&&le(B,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var ve=Tx(Y,c);il(t,i,ve,Ti(t))}else il(t,i,c,Ti(t))}catch(ye){il(t,i,{then:function(){},status:"rejected",reason:ye},Ti())}finally{G.p=S,M!==null&&B.types!==null&&(M.types=B.types),O.T=M}}function Ix(){}function ad(t,i,s,c){if(t.tag!==5)throw Error(a(476));var p=Zg(t).queue;Kg(t,p,i,Z,s===null?Ix:function(){return Jg(t),s(c)})}function Zg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:Z},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Jg(t){var i=Zg(t);i.next===null&&(i=t.alternate.memoizedState),il(t,i.next.queue,{},Ti())}function sd(){return kn(Al)}function $g(){return vn().memoizedState}function e0(){return vn().memoizedState}function Ux(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ti();t=os(s);var c=ls(i,t,s);c!==null&&(mi(c,i,s),Jo(c,i,s)),i={cache:Bf()},t.payload=i;return}i=i.return}}function Lx(t,i,s){var c=Ti();s={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},bc(t)?n0(i,s):(s=Ef(t,i,s,c),s!==null&&(mi(s,t,c),i0(s,i,c)))}function t0(t,i,s){var c=Ti();il(t,i,s,c)}function il(t,i,s,c){var p={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(bc(t))n0(i,p);else{var S=t.alternate;if(t.lanes===0&&(S===null||S.lanes===0)&&(S=i.lastRenderedReducer,S!==null))try{var M=i.lastRenderedState,B=S(M,s);if(p.hasEagerState=!0,p.eagerState=B,_i(B,M))return oc(t,i,p,0),nn===null&&rc(),!1}catch{}if(s=Ef(t,i,p,c),s!==null)return mi(s,t,c),i0(s,i,c),!0}return!1}function rd(t,i,s,c){if(c={lane:2,revertLane:Nd(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},bc(t)){if(i)throw Error(a(479))}else i=Ef(t,s,c,2),i!==null&&mi(i,t,2)}function bc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function n0(t,i){Br=Ac=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function i0(t,i,s){if((s&4194048)!==0){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,Uo(t,s)}}var al={readContext:kn,use:Ec,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};al.useEffectEvent=mn;var a0={readContext:kn,use:Ec,useCallback:function(t,i){return ti().memoizedState=[t,i===void 0?null:i],t},useContext:kn,useEffect:Gg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Tc(4194308,4,Wg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Tc(4194308,4,t,i)},useInsertionEffect:function(t,i){Tc(4,2,t,i)},useMemo:function(t,i){var s=ti();i=i===void 0?null:i;var c=t();if(Ks){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[c,i],c},useReducer:function(t,i,s){var c=ti();if(s!==void 0){var p=s(i);if(Ks){De(!0);try{s(i)}finally{De(!1)}}}else p=i;return c.memoizedState=c.baseState=p,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:p},c.queue=t,t=t.dispatch=Lx.bind(null,_t,t),[c.memoizedState,t]},useRef:function(t){var i=ti();return t={current:t},i.memoizedState=t},useState:function(t){t=$f(t);var i=t.queue,s=t0.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:nd,useDeferredValue:function(t,i){var s=ti();return id(s,t,i)},useTransition:function(){var t=$f(!1);return t=Kg.bind(null,_t,t.queue,!0,!1),ti().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var c=_t,p=ti();if(wt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),nn===null)throw Error(a(349));(bt&127)!==0||Tg(c,i,s)}p.memoizedState=s;var S={value:s,getSnapshot:i};return p.queue=S,Gg(bg.bind(null,c,S,t),[t]),c.flags|=2048,Pr(9,{destroy:void 0},Cg.bind(null,c,S,s,i),null),s},useId:function(){var t=ti(),i=nn.identifierPrefix;if(wt){var s=la,c=oa;s=(c&~(1<<32-Le(c)-1)).toString(32)+s,i="_"+i+"R_"+s,s=xc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Cx++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:sd,useFormState:Pg,useActionState:Pg,useOptimistic:function(t){var i=ti();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=rd.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:Kf,useCacheRefresh:function(){return ti().memoizedState=Ux.bind(null,_t)},useEffectEvent:function(t){var i=ti(),s={impl:t};return i.memoizedState=s,function(){if((Gt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},od={readContext:kn,use:Ec,useCallback:Yg,useContext:kn,useEffect:td,useImperativeHandle:qg,useInsertionEffect:kg,useLayoutEffect:Xg,useMemo:Qg,useReducer:Mc,useRef:Hg,useState:function(){return Mc(wa)},useDebugValue:nd,useDeferredValue:function(t,i){var s=vn();return jg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Mc(wa)[0],i=vn().memoizedState;return[typeof t=="boolean"?t:nl(t),i]},useSyncExternalStore:Mg,useId:$g,useHostTransitionStatus:sd,useFormState:Og,useActionState:Og,useOptimistic:function(t,i){var s=vn();return Dg(s,Kt,t,i)},useMemoCache:Kf,useCacheRefresh:e0};od.useEffectEvent=Vg;var s0={readContext:kn,use:Ec,useCallback:Yg,useContext:kn,useEffect:td,useImperativeHandle:qg,useInsertionEffect:kg,useLayoutEffect:Xg,useMemo:Qg,useReducer:Jf,useRef:Hg,useState:function(){return Jf(wa)},useDebugValue:nd,useDeferredValue:function(t,i){var s=vn();return Kt===null?id(s,t,i):jg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Jf(wa)[0],i=vn().memoizedState;return[typeof t=="boolean"?t:nl(t),i]},useSyncExternalStore:Mg,useId:$g,useHostTransitionStatus:sd,useFormState:zg,useActionState:zg,useOptimistic:function(t,i){var s=vn();return Kt!==null?Dg(s,Kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Kf,useCacheRefresh:e0};s0.useEffectEvent=Vg;function ld(t,i,s,c){i=t.memoizedState,s=s(c,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var cd={enqueueSetState:function(t,i,s){t=t._reactInternals;var c=Ti(),p=os(c);p.payload=i,s!=null&&(p.callback=s),i=ls(t,p,c),i!==null&&(mi(i,t,c),Jo(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var c=Ti(),p=os(c);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=ls(t,p,c),i!==null&&(mi(i,t,c),Jo(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ti(),c=os(s);c.tag=2,i!=null&&(c.callback=i),i=ls(t,c,s),i!==null&&(mi(i,t,s),Jo(i,t,s))}};function r0(t,i,s,c,p,S,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,S,M):i.prototype&&i.prototype.isPureReactComponent?!Xo(s,c)||!Xo(p,S):!0}function o0(t,i,s,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==t&&cd.enqueueReplaceState(i,i.state,null)}function Zs(t,i){var s=i;if("ref"in i){s={};for(var c in i)c!=="ref"&&(s[c]=i[c])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var p in t)s[p]===void 0&&(s[p]=t[p])}return s}function l0(t){sc(t)}function c0(t){console.error(t)}function u0(t){sc(t)}function Rc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function f0(t,i,s){try{var c=t.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function ud(t,i,s){return s=os(s),s.tag=3,s.payload={element:null},s.callback=function(){Rc(t,i)},s}function d0(t){return t=os(t),t.tag=3,t}function h0(t,i,s,c){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var S=c.value;t.payload=function(){return p(S)},t.callback=function(){f0(i,s,c)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){f0(i,s,c),typeof p!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var B=c.stack;this.componentDidCatch(c.value,{componentStack:B!==null?B:""})})}function Bx(t,i,s,c,p){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=s.alternate,i!==null&&Rr(i,s,p,!0),s=xi.current,s!==null){switch(s.tag){case 31:case 13:return zi===null?Hc():s.alternate===null&&gn===0&&(gn=3),s.flags&=-257,s.flags|=65536,s.lanes=p,c===mc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([c]):i.add(c),Fd(t,c,p)),!1;case 22:return s.flags|=65536,c===mc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([c]):s.add(c)),Fd(t,c,p)),!1}throw Error(a(435,s.tag))}return Fd(t,c,p),Hc(),!1}if(wt)return i=xi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==wf&&(t=Error(a(422),{cause:c}),Yo(Fi(t,s)))):(c!==wf&&(i=Error(a(423),{cause:c}),Yo(Fi(i,s))),t=t.current.alternate,t.flags|=65536,p&=-p,t.lanes|=p,c=Fi(c,s),p=ud(t.stateNode,c,p),Hf(t,p),gn!==4&&(gn=2)),!1;var S=Error(a(520),{cause:c});if(S=Fi(S,s),dl===null?dl=[S]:dl.push(S),gn!==4&&(gn=2),i===null)return!0;c=Fi(c,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=p&-p,s.lanes|=t,t=ud(s.stateNode,c,t),Hf(s,t),!1;case 1:if(i=s.type,S=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ps===null||!ps.has(S))))return s.flags|=65536,p&=-p,s.lanes|=p,p=d0(p),h0(p,t,s,c),Hf(s,p),!1}s=s.return}while(s!==null);return!1}var fd=Error(a(461)),Mn=!1;function Xn(t,i,s,c){i.child=t===null?Sg(i,null,s,c):js(i,t.child,s,c)}function p0(t,i,s,c,p){s=s.render;var S=i.ref;if("ref"in c){var M={};for(var B in c)B!=="ref"&&(M[B]=c[B])}else M=c;return Ws(i),c=qf(t,i,s,M,S,p),B=Yf(),t!==null&&!Mn?(Qf(t,i,p),Da(t,i,p)):(wt&&B&&bf(i),i.flags|=1,Xn(t,i,c,p),i.child)}function m0(t,i,s,c,p){if(t===null){var S=s.type;return typeof S=="function"&&!Mf(S)&&S.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=S,g0(t,i,S,c,p)):(t=cc(s.type,null,c,i,i.mode,p),t.ref=i.ref,t.return=i,i.child=t)}if(S=t.child,!_d(t,p)){var M=S.memoizedProps;if(s=s.compare,s=s!==null?s:Xo,s(M,c)&&t.ref===i.ref)return Da(t,i,p)}return i.flags|=1,t=Ma(S,c),t.ref=i.ref,t.return=i,i.child=t}function g0(t,i,s,c,p){if(t!==null){var S=t.memoizedProps;if(Xo(S,c)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=c=S,_d(t,p))(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Da(t,i,p)}return dd(t,i,s,c,p)}function S0(t,i,s,c){var p=c.children,S=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(S=S!==null?S.baseLanes|s:s,t!==null){for(c=i.child=t.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~S}else c=0,i.child=null;return v0(t,i,S,s,c)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&hc(i,S!==null?S.cachePool:null),S!==null?Ag(i,S):Vf(),xg(i);else return c=i.lanes=536870912,v0(t,i,S!==null?S.baseLanes|s:s,s,c)}else S!==null?(hc(i,S.cachePool),Ag(i,S),us(),i.memoizedState=null):(t!==null&&hc(i,null),Vf(),us());return Xn(t,i,p,s),i.child}function sl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function v0(t,i,s,c,p){var S=Pf();return S=S===null?null:{parent:yn._currentValue,pool:S},i.memoizedState={baseLanes:s,cachePool:S},t!==null&&hc(i,null),Vf(),xg(i),t!==null&&Rr(t,i,c,!0),i.childLanes=p,null}function wc(t,i){return i=Ic({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function _0(t,i,s){return js(i,t.child,null,s),t=wc(i,i.pendingProps),t.flags|=2,yi(i),i.memoizedState=null,t}function Fx(t,i,s){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(wt){if(c.mode==="hidden")return t=wc(i,c),i.lanes=536870912,sl(null,t);if(Xf(i),(t=rn)?(t=IS(t,Ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ns!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},s=ng(t),s.return=i,i.child=s,Vn=i,rn=null)):t=null,t===null)throw as(i);return i.lanes=536870912,null}return wc(i,c)}var S=t.memoizedState;if(S!==null){var M=S.dehydrated;if(Xf(i),p)if(i.flags&256)i.flags&=-257,i=_0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Mn||Rr(t,i,s,!1),p=(s&t.childLanes)!==0,Mn||p){if(c=nn,c!==null&&(M=hr(c,s),M!==0&&M!==S.retryLane))throw S.retryLane=M,Gs(t,M),mi(c,t,M),fd;Hc(),i=_0(t,i,s)}else t=S.treeContext,rn=Hi(M.nextSibling),Vn=i,wt=!0,is=null,Ni=!1,t!==null&&sg(i,t),i=wc(i,c),i.flags|=4096;return i}return t=Ma(t.child,{mode:c.mode,children:c.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Dc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function dd(t,i,s,c,p){return Ws(i),s=qf(t,i,s,c,void 0,p),c=Yf(),t!==null&&!Mn?(Qf(t,i,p),Da(t,i,p)):(wt&&c&&bf(i),i.flags|=1,Xn(t,i,s,p),i.child)}function A0(t,i,s,c,p,S){return Ws(i),i.updateQueue=null,s=Eg(i,c,s,p),yg(t),c=Yf(),t!==null&&!Mn?(Qf(t,i,S),Da(t,i,S)):(wt&&c&&bf(i),i.flags|=1,Xn(t,i,s,S),i.child)}function x0(t,i,s,c,p){if(Ws(i),i.stateNode===null){var S=Mr,M=s.contextType;typeof M=="object"&&M!==null&&(S=kn(M)),S=new s(c,S),i.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,S.updater=cd,i.stateNode=S,S._reactInternals=i,S=i.stateNode,S.props=c,S.state=i.memoizedState,S.refs={},Nf(i),M=s.contextType,S.context=typeof M=="object"&&M!==null?kn(M):Mr,S.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(ld(i,s,M,c),S.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(M=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),M!==S.state&&cd.enqueueReplaceState(S,S.state,null),el(i,c,S,p),$o(),S.state=i.memoizedState),typeof S.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(t===null){S=i.stateNode;var B=i.memoizedProps,Y=Zs(s,B);S.props=Y;var le=S.context,ve=s.contextType;M=Mr,typeof ve=="object"&&ve!==null&&(M=kn(ve));var ye=s.getDerivedStateFromProps;ve=typeof ye=="function"||typeof S.getSnapshotBeforeUpdate=="function",B=i.pendingProps!==B,ve||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(B||le!==M)&&o0(i,S,c,M),rs=!1;var de=i.memoizedState;S.state=de,el(i,c,S,p),$o(),le=i.memoizedState,B||de!==le||rs?(typeof ye=="function"&&(ld(i,s,ye,c),le=i.memoizedState),(Y=rs||r0(i,s,Y,c,de,le,M))?(ve||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=le),S.props=c,S.state=le,S.context=M,c=Y):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{S=i.stateNode,zf(t,i),M=i.memoizedProps,ve=Zs(s,M),S.props=ve,ye=i.pendingProps,de=S.context,le=s.contextType,Y=Mr,typeof le=="object"&&le!==null&&(Y=kn(le)),B=s.getDerivedStateFromProps,(le=typeof B=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(M!==ye||de!==Y)&&o0(i,S,c,Y),rs=!1,de=i.memoizedState,S.state=de,el(i,c,S,p),$o();var ge=i.memoizedState;M!==ye||de!==ge||rs||t!==null&&t.dependencies!==null&&fc(t.dependencies)?(typeof B=="function"&&(ld(i,s,B,c),ge=i.memoizedState),(ve=rs||r0(i,s,ve,c,de,ge,Y)||t!==null&&t.dependencies!==null&&fc(t.dependencies))?(le||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(c,ge,Y),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(c,ge,Y)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ge),S.props=c,S.state=ge,S.context=Y,c=ve):(typeof S.componentDidUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),c=!1)}return S=c,Dc(t,i),c=(i.flags&128)!==0,S||c?(S=i.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:S.render(),i.flags|=1,t!==null&&c?(i.child=js(i,t.child,null,p),i.child=js(i,null,s,p)):Xn(t,i,s,p),i.memoizedState=S.state,t=i.child):t=Da(t,i,p),t}function y0(t,i,s,c){return ks(),i.flags|=256,Xn(t,i,s,c),i.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pd(t){return{baseLanes:t,cachePool:fg()}}function md(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Mi),t}function E0(t,i,s){var c=i.pendingProps,p=!1,S=(i.flags&128)!==0,M;if((M=S)||(M=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),M&&(p=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(p?cs(i):us(),(t=rn)?(t=IS(t,Ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ns!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},s=ng(t),s.return=i,i.child=s,Vn=i,rn=null)):t=null,t===null)throw as(i);return Zd(t)?i.lanes=32:i.lanes=536870912,null}var B=c.children;return c=c.fallback,p?(us(),p=i.mode,B=Ic({mode:"hidden",children:B},p),c=Vs(c,p,s,null),B.return=i,c.return=i,B.sibling=c,i.child=B,c=i.child,c.memoizedState=pd(s),c.childLanes=md(t,M,s),i.memoizedState=hd,sl(null,c)):(cs(i),gd(i,B))}var Y=t.memoizedState;if(Y!==null&&(B=Y.dehydrated,B!==null)){if(S)i.flags&256?(cs(i),i.flags&=-257,i=Sd(t,i,s)):i.memoizedState!==null?(us(),i.child=t.child,i.flags|=128,i=null):(us(),B=c.fallback,p=i.mode,c=Ic({mode:"visible",children:c.children},p),B=Vs(B,p,s,null),B.flags|=2,c.return=i,B.return=i,c.sibling=B,i.child=c,js(i,t.child,null,s),c=i.child,c.memoizedState=pd(s),c.childLanes=md(t,M,s),i.memoizedState=hd,i=sl(null,c));else if(cs(i),Zd(B)){if(M=B.nextSibling&&B.nextSibling.dataset,M)var le=M.dgst;M=le,c=Error(a(419)),c.stack="",c.digest=M,Yo({value:c,source:null,stack:null}),i=Sd(t,i,s)}else if(Mn||Rr(t,i,s,!1),M=(s&t.childLanes)!==0,Mn||M){if(M=nn,M!==null&&(c=hr(M,s),c!==0&&c!==Y.retryLane))throw Y.retryLane=c,Gs(t,c),mi(M,t,c),fd;Kd(B)||Hc(),i=Sd(t,i,s)}else Kd(B)?(i.flags|=192,i.child=t.child,i=null):(t=Y.treeContext,rn=Hi(B.nextSibling),Vn=i,wt=!0,is=null,Ni=!1,t!==null&&sg(i,t),i=gd(i,c.children),i.flags|=4096);return i}return p?(us(),B=c.fallback,p=i.mode,Y=t.child,le=Y.sibling,c=Ma(Y,{mode:"hidden",children:c.children}),c.subtreeFlags=Y.subtreeFlags&65011712,le!==null?B=Ma(le,B):(B=Vs(B,p,s,null),B.flags|=2),B.return=i,c.return=i,c.sibling=B,i.child=c,sl(null,c),c=i.child,B=t.child.memoizedState,B===null?B=pd(s):(p=B.cachePool,p!==null?(Y=yn._currentValue,p=p.parent!==Y?{parent:Y,pool:Y}:p):p=fg(),B={baseLanes:B.baseLanes|s,cachePool:p}),c.memoizedState=B,c.childLanes=md(t,M,s),i.memoizedState=hd,sl(t.child,c)):(cs(i),s=t.child,t=s.sibling,s=Ma(s,{mode:"visible",children:c.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function gd(t,i){return i=Ic({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Ic(t,i){return t=Ai(22,t,null,i),t.lanes=0,t}function Sd(t,i,s){return js(i,t.child,null,s),t=gd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function M0(t,i,s){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Uf(t.return,i,s)}function vd(t,i,s,c,p,S){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p,treeForkCount:S}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=c,M.tail=s,M.tailMode=p,M.treeForkCount=S)}function T0(t,i,s){var c=i.pendingProps,p=c.revealOrder,S=c.tail;c=c.children;var M=Sn.current,B=(M&2)!==0;if(B?(M=M&1|2,i.flags|=128):M&=1,pe(Sn,M),Xn(t,i,c,s),c=wt?qo:0,!B&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,s,i);else if(t.tag===19)M0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(p){case"forwards":for(s=i.child,p=null;s!==null;)t=s.alternate,t!==null&&_c(t)===null&&(p=s),s=s.sibling;s=p,s===null?(p=i.child,i.child=null):(p=s.sibling,s.sibling=null),vd(i,!1,p,s,S,c);break;case"backwards":case"unstable_legacy-backwards":for(s=null,p=i.child,i.child=null;p!==null;){if(t=p.alternate,t!==null&&_c(t)===null){i.child=p;break}t=p.sibling,p.sibling=s,s=p,p=t}vd(i,!0,s,null,S,c);break;case"together":vd(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Da(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),hs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Rr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Ma(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Ma(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function _d(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&fc(t)))}function Px(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),ss(i,yn,t.memoizedState.cache),ks();break;case 27:case 5:Ue(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:ss(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Xf(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(cs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?E0(t,i,s):(cs(i),t=Da(t,i,s),t!==null?t.sibling:null);cs(i);break;case 19:var p=(t.flags&128)!==0;if(c=(s&i.childLanes)!==0,c||(Rr(t,i,s,!1),c=(s&i.childLanes)!==0),p){if(c)return T0(t,i,s);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),pe(Sn,Sn.current),c)break;return null;case 22:return i.lanes=0,S0(t,i,s,i.pendingProps);case 24:ss(i,yn,t.memoizedState.cache)}return Da(t,i,s)}function C0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mn=!0;else{if(!_d(t,s)&&(i.flags&128)===0)return Mn=!1,Px(t,i,s);Mn=(t.flags&131072)!==0}else Mn=!1,wt&&(i.flags&1048576)!==0&&ag(i,qo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(t=Ys(i.elementType),i.type=t,typeof t=="function")Mf(t)?(c=Zs(t,c),i.tag=1,i=x0(null,i,t,c,s)):(i.tag=0,i=dd(null,i,t,c,s));else{if(t!=null){var p=t.$$typeof;if(p===D){i.tag=11,i=p0(null,i,t,c,s);break e}else if(p===R){i.tag=14,i=m0(null,i,t,c,s);break e}}throw i=W(t)||t,Error(a(306,i,""))}}return i;case 0:return dd(t,i,i.type,i.pendingProps,s);case 1:return c=i.type,p=Zs(c,i.pendingProps),x0(t,i,c,p,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(a(387));c=i.pendingProps;var S=i.memoizedState;p=S.element,zf(t,i),el(i,c,null,s);var M=i.memoizedState;if(c=M.cache,ss(i,yn,c),c!==S.cache&&Lf(i,[yn],s,!0),$o(),c=M.element,S.isDehydrated)if(S={element:c,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=S,i.memoizedState=S,i.flags&256){i=y0(t,i,c,s);break e}else if(c!==p){p=Fi(Error(a(424)),i),Yo(p),i=y0(t,i,c,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,rn=Hi(t.firstChild),Vn=i,wt=!0,is=null,Ni=!0,s=Sg(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ks(),c===p){i=Da(t,i,s);break e}Xn(t,i,c,s)}i=i.child}return i;case 26:return Dc(t,i),t===null?(s=OS(i.type,null,i.pendingProps,null))?i.memoizedState=s:wt||(s=i.type,t=i.pendingProps,c=Yc($.current).createElement(s),c[xn]=i,c[Pn]=t,Wn(c,s,t),F(c),i.stateNode=c):i.memoizedState=OS(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ue(i),t===null&&wt&&(c=i.stateNode=BS(i.type,i.pendingProps,$.current),Vn=i,Ni=!0,p=rn,vs(i.type)?(Jd=p,rn=Hi(c.firstChild)):rn=p),Xn(t,i,i.pendingProps.children,s),Dc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((p=c=rn)&&(c=dy(c,i.type,i.pendingProps,Ni),c!==null?(i.stateNode=c,Vn=i,rn=Hi(c.firstChild),Ni=!1,p=!0):p=!1),p||as(i)),Ue(i),p=i.type,S=i.pendingProps,M=t!==null?t.memoizedProps:null,c=S.children,Yd(p,S)?c=null:M!==null&&Yd(p,M)&&(i.flags|=32),i.memoizedState!==null&&(p=qf(t,i,bx,null,null,s),Al._currentValue=p),Dc(t,i),Xn(t,i,c,s),i.child;case 6:return t===null&&wt&&((t=s=rn)&&(s=hy(s,i.pendingProps,Ni),s!==null?(i.stateNode=s,Vn=i,rn=null,t=!0):t=!1),t||as(i)),null;case 13:return E0(t,i,s);case 4:return be(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=js(i,null,c,s):Xn(t,i,c,s),i.child;case 11:return p0(t,i,i.type,i.pendingProps,s);case 7:return Xn(t,i,i.pendingProps,s),i.child;case 8:return Xn(t,i,i.pendingProps.children,s),i.child;case 12:return Xn(t,i,i.pendingProps.children,s),i.child;case 10:return c=i.pendingProps,ss(i,i.type,c.value),Xn(t,i,c.children,s),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,Ws(i),p=kn(p),c=c(p),i.flags|=1,Xn(t,i,c,s),i.child;case 14:return m0(t,i,i.type,i.pendingProps,s);case 15:return g0(t,i,i.type,i.pendingProps,s);case 19:return T0(t,i,s);case 31:return Fx(t,i,s);case 22:return S0(t,i,s,i.pendingProps);case 24:return Ws(i),c=kn(yn),t===null?(p=Pf(),p===null&&(p=nn,S=Bf(),p.pooledCache=S,S.refCount++,S!==null&&(p.pooledCacheLanes|=s),p=S),i.memoizedState={parent:c,cache:p},Nf(i),ss(i,yn,p)):((t.lanes&s)!==0&&(zf(t,i),el(i,null,null,s),$o()),p=t.memoizedState,S=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),ss(i,yn,c)):(c=S.cache,ss(i,yn,c),c!==p.cache&&Lf(i,[yn],s,!0))),Xn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ia(t){t.flags|=4}function Ad(t,i,s,c,p){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(p&335544128)===p)if(t.stateNode.complete)t.flags|=8192;else if($0())t.flags|=8192;else throw Qs=mc,Of}else t.flags&=-16777217}function b0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!VS(i))if($0())t.flags|=8192;else throw Qs=mc,Of}function Uc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Wt():536870912,t.lanes|=i,Hr|=i)}function rl(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function on(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(i)for(var p=t.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=c,t.childLanes=s,i}function Ox(t,i,s){var c=i.pendingProps;switch(Rf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(i),null;case 1:return on(i),null;case 3:return s=i.stateNode,c=null,t!==null&&(c=t.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),ba(yn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(br(i)?Ia(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Df())),on(i),null;case 26:var p=i.type,S=i.memoizedState;return t===null?(Ia(i),S!==null?(on(i),b0(i,S)):(on(i),Ad(i,p,null,c,s))):S?S!==t.memoizedState?(Ia(i),on(i),b0(i,S)):(on(i),i.flags&=-16777217):(t=t.memoizedProps,t!==c&&Ia(i),on(i),Ad(i,p,t,c,s)),null;case 27:if(st(i),s=$.current,p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==c&&Ia(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return on(i),null}t=Me.current,br(i)?rg(i):(t=BS(p,c,s),i.stateNode=t,Ia(i))}return on(i),null;case 5:if(st(i),p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==c&&Ia(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return on(i),null}if(S=Me.current,br(i))rg(i);else{var M=Yc($.current);switch(S){case 1:S=M.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:S=M.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":S=M.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":S=M.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":S=M.createElement("div"),S.innerHTML="<script><\/script>",S=S.removeChild(S.firstChild);break;case"select":S=typeof c.is=="string"?M.createElement("select",{is:c.is}):M.createElement("select"),c.multiple?S.multiple=!0:c.size&&(S.size=c.size);break;default:S=typeof c.is=="string"?M.createElement(p,{is:c.is}):M.createElement(p)}}S[xn]=i,S[Pn]=c;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)S.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=S;e:switch(Wn(S,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Ia(i)}}return on(i),Ad(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==c&&Ia(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(t=$.current,br(i)){if(t=i.stateNode,s=i.memoizedProps,c=null,p=Vn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}t[xn]=i,t=!!(t.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||ES(t.nodeValue,s)),t||as(i,!0)}else t=Yc(t).createTextNode(c),t[xn]=i,i.stateNode=t}return on(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(c=br(i),s!==null){if(t===null){if(!c)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[xn]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;on(i),t=!1}else s=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(yi(i),i):(yi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return on(i),null;case 13:if(c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(p=br(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[xn]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;on(i),p=!1}else p=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(yi(i),i):(yi(i),null)}return yi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=c!==null,t=t!==null&&t.memoizedState!==null,s&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),S=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(S=c.memoizedState.cachePool.pool),S!==p&&(c.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Uc(i,i.updateQueue),on(i),null);case 4:return Fe(),t===null&&Vd(i.stateNode.containerInfo),on(i),null;case 10:return ba(i.type),on(i),null;case 19:if(ie(Sn),c=i.memoizedState,c===null)return on(i),null;if(p=(i.flags&128)!==0,S=c.rendering,S===null)if(p)rl(c,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=_c(t),S!==null){for(i.flags|=128,rl(c,!1),t=S.updateQueue,i.updateQueue=t,Uc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)tg(s,t),s=s.sibling;return pe(Sn,Sn.current&1|2),wt&&Ta(i,c.treeForkCount),i.child}t=t.sibling}c.tail!==null&&I()>Oc&&(i.flags|=128,p=!0,rl(c,!1),i.lanes=4194304)}else{if(!p)if(t=_c(S),t!==null){if(i.flags|=128,p=!0,t=t.updateQueue,i.updateQueue=t,Uc(i,t),rl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!S.alternate&&!wt)return on(i),null}else 2*I()-c.renderingStartTime>Oc&&s!==536870912&&(i.flags|=128,p=!0,rl(c,!1),i.lanes=4194304);c.isBackwards?(S.sibling=i.child,i.child=S):(t=c.last,t!==null?t.sibling=S:i.child=S,c.last=S)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=I(),t.sibling=null,s=Sn.current,pe(Sn,p?s&1|2:s&1),wt&&Ta(i,c.treeForkCount),t):(on(i),null);case 22:case 23:return yi(i),kf(),c=i.memoizedState!==null,t!==null?t.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(s&536870912)!==0&&(i.flags&128)===0&&(on(i),i.subtreeFlags&6&&(i.flags|=8192)):on(i),s=i.updateQueue,s!==null&&Uc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048),t!==null&&ie(qs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ba(yn),on(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Nx(t,i){switch(Rf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ba(yn),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return st(i),null;case 31:if(i.memoizedState!==null){if(yi(i),i.alternate===null)throw Error(a(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(yi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(Sn),null;case 4:return Fe(),null;case 10:return ba(i.type),null;case 22:case 23:return yi(i),kf(),t!==null&&ie(qs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ba(yn),null;case 25:return null;default:return null}}function R0(t,i){switch(Rf(i),i.tag){case 3:ba(yn),Fe();break;case 26:case 27:case 5:st(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&yi(i);break;case 13:yi(i);break;case 19:ie(Sn);break;case 10:ba(i.type);break;case 22:case 23:yi(i),kf(),t!==null&&ie(qs);break;case 24:ba(yn)}}function ol(t,i){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var p=c.next;s=p;do{if((s.tag&t)===t){c=void 0;var S=s.create,M=s.inst;c=S(),M.destroy=c}s=s.next}while(s!==p)}}catch(B){Qt(i,i.return,B)}}function fs(t,i,s){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var S=p.next;c=S;do{if((c.tag&t)===t){var M=c.inst,B=M.destroy;if(B!==void 0){M.destroy=void 0,p=i;var Y=s,le=B;try{le()}catch(ve){Qt(p,Y,ve)}}}c=c.next}while(c!==S)}}catch(ve){Qt(i,i.return,ve)}}function w0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{_g(i,s)}catch(c){Qt(t,t.return,c)}}}function D0(t,i,s){s.props=Zs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(c){Qt(t,i,c)}}function ll(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var c=t.stateNode;break;case 30:c=t.stateNode;break;default:c=t.stateNode}typeof s=="function"?t.refCleanup=s(c):s.current=c}}catch(p){Qt(t,i,p)}}function ca(t,i){var s=t.ref,c=t.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(p){Qt(t,i,p)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){Qt(t,i,p)}else s.current=null}function I0(t){var i=t.type,s=t.memoizedProps,c=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(p){Qt(t,t.return,p)}}function xd(t,i,s){try{var c=t.stateNode;ry(c,t.type,s,i),c[Pn]=i}catch(p){Qt(t,t.return,p)}}function U0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&vs(t.type)||t.tag===4}function yd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&vs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ya));else if(c!==4&&(c===27&&vs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Ed(t,i,s),t=t.sibling;t!==null;)Ed(t,i,s),t=t.sibling}function Lc(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(c!==4&&(c===27&&vs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Lc(t,i,s),t=t.sibling;t!==null;)Lc(t,i,s),t=t.sibling}function L0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var c=t.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Wn(i,c,s),i[xn]=t,i[Pn]=s}catch(S){Qt(t,t.return,S)}}var Ua=!1,Tn=!1,Md=!1,B0=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function zx(t,i){if(t=t.containerInfo,Wd=eu,t=qm(t),Sf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{s.nodeType,S.nodeType}catch{s=null;break e}var M=0,B=-1,Y=-1,le=0,ve=0,ye=t,de=null;t:for(;;){for(var ge;ye!==s||p!==0&&ye.nodeType!==3||(B=M+p),ye!==S||c!==0&&ye.nodeType!==3||(Y=M+c),ye.nodeType===3&&(M+=ye.nodeValue.length),(ge=ye.firstChild)!==null;)de=ye,ye=ge;for(;;){if(ye===t)break t;if(de===s&&++le===p&&(B=M),de===S&&++ve===c&&(Y=M),(ge=ye.nextSibling)!==null)break;ye=de,de=ye.parentNode}ye=ge}s=B===-1||Y===-1?null:{start:B,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(qd={focusedElem:t,selectionRange:s},eu=!1,Bn=i;Bn!==null;)if(i=Bn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Bn=t;else for(;Bn!==null;){switch(i=Bn,S=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)p=t[s],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&S!==null){t=void 0,s=i,p=S.memoizedProps,S=S.memoizedState,c=s.stateNode;try{var Ye=Zs(s.type,p);t=c.getSnapshotBeforeUpdate(Ye,S),c.__reactInternalSnapshotBeforeUpdate=t}catch(ut){Qt(s,s.return,ut)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)jd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Bn=t;break}Bn=i.return}}function F0(t,i,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ba(t,s),c&4&&ol(5,s);break;case 1:if(Ba(t,s),c&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Qt(s,s.return,M)}else{var p=Zs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(p,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Qt(s,s.return,M)}}c&64&&w0(s),c&512&&ll(s,s.return);break;case 3:if(Ba(t,s),c&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{_g(t,i)}catch(M){Qt(s,s.return,M)}}break;case 27:i===null&&c&4&&L0(s);case 26:case 5:Ba(t,s),i===null&&c&4&&I0(s),c&512&&ll(s,s.return);break;case 12:Ba(t,s);break;case 31:Ba(t,s),c&4&&N0(t,s);break;case 13:Ba(t,s),c&4&&z0(t,s),c&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Qx.bind(null,s),py(t,s))));break;case 22:if(c=s.memoizedState!==null||Ua,!c){i=i!==null&&i.memoizedState!==null||Tn,p=Ua;var S=Tn;Ua=c,(Tn=i)&&!S?Fa(t,s,(s.subtreeFlags&8772)!==0):Ba(t,s),Ua=p,Tn=S}break;case 30:break;default:Ba(t,s)}}function P0(t){var i=t.alternate;i!==null&&(t.alternate=null,P0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Po(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,fi=!1;function La(t,i,s){for(s=s.child;s!==null;)O0(t,i,s),s=s.sibling}function O0(t,i,s){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:Tn||ca(s,i),La(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Tn||ca(s,i);var c=un,p=fi;vs(s.type)&&(un=s.stateNode,fi=!1),La(t,i,s),Sl(s.stateNode),un=c,fi=p;break;case 5:Tn||ca(s,i);case 6:if(c=un,p=fi,un=null,La(t,i,s),un=c,fi=p,un!==null)if(fi)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(s.stateNode)}catch(S){Qt(s,i,S)}else try{un.removeChild(s.stateNode)}catch(S){Qt(s,i,S)}break;case 18:un!==null&&(fi?(t=un,wS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Qr(t)):wS(un,s.stateNode));break;case 4:c=un,p=fi,un=s.stateNode.containerInfo,fi=!0,La(t,i,s),un=c,fi=p;break;case 0:case 11:case 14:case 15:fs(2,s,i),Tn||fs(4,s,i),La(t,i,s);break;case 1:Tn||(ca(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"&&D0(s,i,c)),La(t,i,s);break;case 21:La(t,i,s);break;case 22:Tn=(c=Tn)||s.memoizedState!==null,La(t,i,s),Tn=c;break;default:La(t,i,s)}}function N0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qr(t)}catch(s){Qt(i,i.return,s)}}}function z0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qr(t)}catch(s){Qt(i,i.return,s)}}function Hx(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new B0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new B0),i;default:throw Error(a(435,t.tag))}}function Bc(t,i){var s=Hx(t);i.forEach(function(c){if(!s.has(c)){s.add(c);var p=jx.bind(null,t,c);c.then(p,p)}})}function di(t,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c],S=t,M=i,B=M;e:for(;B!==null;){switch(B.tag){case 27:if(vs(B.type)){un=B.stateNode,fi=!1;break e}break;case 5:un=B.stateNode,fi=!1;break e;case 3:case 4:un=B.stateNode.containerInfo,fi=!0;break e}B=B.return}if(un===null)throw Error(a(160));O0(S,M,p),un=null,fi=!1,S=p.alternate,S!==null&&(S.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)H0(i,t),i=i.sibling}var $i=null;function H0(t,i){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:di(i,t),hi(t),c&4&&(fs(3,t,t.return),ol(3,t),fs(5,t,t.return));break;case 1:di(i,t),hi(t),c&512&&(Tn||s===null||ca(s,s.return)),c&64&&Ua&&(t=t.updateQueue,t!==null&&(c=t.callbacks,c!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var p=$i;if(di(i,t),hi(t),c&512&&(Tn||s===null||ca(s,s.return)),c&4){var S=s!==null?s.memoizedState:null;if(c=t.memoizedState,s===null)if(c===null)if(t.stateNode===null){e:{c=t.type,s=t.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":S=p.getElementsByTagName("title")[0],(!S||S[Ps]||S[xn]||S.namespaceURI==="http://www.w3.org/2000/svg"||S.hasAttribute("itemprop"))&&(S=p.createElement(c),p.head.insertBefore(S,p.querySelector("head > title"))),Wn(S,c,s),S[xn]=t,F(S),c=S;break e;case"link":var M=HS("link","href",p).get(c+(s.href||""));if(M){for(var B=0;B<M.length;B++)if(S=M[B],S.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&S.getAttribute("rel")===(s.rel==null?null:s.rel)&&S.getAttribute("title")===(s.title==null?null:s.title)&&S.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(B,1);break t}}S=p.createElement(c),Wn(S,c,s),p.head.appendChild(S);break;case"meta":if(M=HS("meta","content",p).get(c+(s.content||""))){for(B=0;B<M.length;B++)if(S=M[B],S.getAttribute("content")===(s.content==null?null:""+s.content)&&S.getAttribute("name")===(s.name==null?null:s.name)&&S.getAttribute("property")===(s.property==null?null:s.property)&&S.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&S.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(B,1);break t}}S=p.createElement(c),Wn(S,c,s),p.head.appendChild(S);break;default:throw Error(a(468,c))}S[xn]=t,F(S),c=S}t.stateNode=c}else GS(p,t.type,t.stateNode);else t.stateNode=zS(p,c,t.memoizedProps);else S!==c?(S===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):S.count--,c===null?GS(p,t.type,t.stateNode):zS(p,c,t.memoizedProps)):c===null&&t.stateNode!==null&&xd(t,t.memoizedProps,s.memoizedProps)}break;case 27:di(i,t),hi(t),c&512&&(Tn||s===null||ca(s,s.return)),s!==null&&c&4&&xd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(di(i,t),hi(t),c&512&&(Tn||s===null||ca(s,s.return)),t.flags&32){p=t.stateNode;try{bn(p,"")}catch(Ye){Qt(t,t.return,Ye)}}c&4&&t.stateNode!=null&&(p=t.memoizedProps,xd(t,p,s!==null?s.memoizedProps:p)),c&1024&&(Md=!0);break;case 6:if(di(i,t),hi(t),c&4){if(t.stateNode===null)throw Error(a(162));c=t.memoizedProps,s=t.stateNode;try{s.nodeValue=c}catch(Ye){Qt(t,t.return,Ye)}}break;case 3:if(Kc=null,p=$i,$i=Qc(i.containerInfo),di(i,t),$i=p,hi(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(Ye){Qt(t,t.return,Ye)}Md&&(Md=!1,G0(t));break;case 4:c=$i,$i=Qc(t.stateNode.containerInfo),di(i,t),hi(t),$i=c;break;case 12:di(i,t),hi(t);break;case 31:di(i,t),hi(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Bc(t,c)));break;case 13:di(i,t),hi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Pc=I()),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Bc(t,c)));break;case 22:p=t.memoizedState!==null;var Y=s!==null&&s.memoizedState!==null,le=Ua,ve=Tn;if(Ua=le||p,Tn=ve||Y,di(i,t),Tn=ve,Ua=le,hi(t),c&8192)e:for(i=t.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(s===null||Y||Ua||Tn||Js(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){Y=s=i;try{if(S=Y.stateNode,p)M=S.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{B=Y.stateNode;var ye=Y.memoizedProps.style,de=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;B.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(Ye){Qt(Y,Y.return,Ye)}}}else if(i.tag===6){if(s===null){Y=i;try{Y.stateNode.nodeValue=p?"":Y.memoizedProps}catch(Ye){Qt(Y,Y.return,Ye)}}}else if(i.tag===18){if(s===null){Y=i;try{var ge=Y.stateNode;p?DS(ge,!0):DS(Y.stateNode,!1)}catch(Ye){Qt(Y,Y.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=t.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Bc(t,s))));break;case 19:di(i,t),hi(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Bc(t,c)));break;case 30:break;case 21:break;default:di(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{for(var s,c=t.return;c!==null;){if(U0(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var p=s.stateNode,S=yd(t);Lc(t,S,p);break;case 5:var M=s.stateNode;s.flags&32&&(bn(M,""),s.flags&=-33);var B=yd(t);Lc(t,B,M);break;case 3:case 4:var Y=s.stateNode.containerInfo,le=yd(t);Ed(t,le,Y);break;default:throw Error(a(161))}}catch(ve){Qt(t,t.return,ve)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function G0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;G0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ba(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)F0(t,i.alternate,i),i=i.sibling}function Js(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:fs(4,i,i.return),Js(i);break;case 1:ca(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&D0(i,i.return,s),Js(i);break;case 27:Sl(i.stateNode);case 26:case 5:ca(i,i.return),Js(i);break;case 22:i.memoizedState===null&&Js(i);break;case 30:Js(i);break;default:Js(i)}t=t.sibling}}function Fa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=t,S=i,M=S.flags;switch(S.tag){case 0:case 11:case 15:Fa(p,S,s),ol(4,S);break;case 1:if(Fa(p,S,s),c=S,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(le){Qt(c,c.return,le)}if(c=S,p=c.updateQueue,p!==null){var B=c.stateNode;try{var Y=p.shared.hiddenCallbacks;if(Y!==null)for(p.shared.hiddenCallbacks=null,p=0;p<Y.length;p++)vg(Y[p],B)}catch(le){Qt(c,c.return,le)}}s&&M&64&&w0(S),ll(S,S.return);break;case 27:L0(S);case 26:case 5:Fa(p,S,s),s&&c===null&&M&4&&I0(S),ll(S,S.return);break;case 12:Fa(p,S,s);break;case 31:Fa(p,S,s),s&&M&4&&N0(p,S);break;case 13:Fa(p,S,s),s&&M&4&&z0(p,S);break;case 22:S.memoizedState===null&&Fa(p,S,s),ll(S,S.return);break;case 30:break;default:Fa(p,S,s)}i=i.sibling}}function Td(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Qo(s))}function Cd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Qo(t))}function ea(t,i,s,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)V0(t,i,s,c),i=i.sibling}function V0(t,i,s,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:ea(t,i,s,c),p&2048&&ol(9,i);break;case 1:ea(t,i,s,c);break;case 3:ea(t,i,s,c),p&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Qo(t)));break;case 12:if(p&2048){ea(t,i,s,c),t=i.stateNode;try{var S=i.memoizedProps,M=S.id,B=S.onPostCommit;typeof B=="function"&&B(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Y){Qt(i,i.return,Y)}}else ea(t,i,s,c);break;case 31:ea(t,i,s,c);break;case 13:ea(t,i,s,c);break;case 23:break;case 22:S=i.stateNode,M=i.alternate,i.memoizedState!==null?S._visibility&2?ea(t,i,s,c):cl(t,i):S._visibility&2?ea(t,i,s,c):(S._visibility|=2,Or(t,i,s,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Td(M,i);break;case 24:ea(t,i,s,c),p&2048&&Cd(i.alternate,i);break;default:ea(t,i,s,c)}}function Or(t,i,s,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var S=t,M=i,B=s,Y=c,le=M.flags;switch(M.tag){case 0:case 11:case 15:Or(S,M,B,Y,p),ol(8,M);break;case 23:break;case 22:var ve=M.stateNode;M.memoizedState!==null?ve._visibility&2?Or(S,M,B,Y,p):cl(S,M):(ve._visibility|=2,Or(S,M,B,Y,p)),p&&le&2048&&Td(M.alternate,M);break;case 24:Or(S,M,B,Y,p),p&&le&2048&&Cd(M.alternate,M);break;default:Or(S,M,B,Y,p)}i=i.sibling}}function cl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,c=i,p=c.flags;switch(c.tag){case 22:cl(s,c),p&2048&&Td(c.alternate,c);break;case 24:cl(s,c),p&2048&&Cd(c.alternate,c);break;default:cl(s,c)}i=i.sibling}}var ul=8192;function Nr(t,i,s){if(t.subtreeFlags&ul)for(t=t.child;t!==null;)k0(t,i,s),t=t.sibling}function k0(t,i,s){switch(t.tag){case 26:Nr(t,i,s),t.flags&ul&&t.memoizedState!==null&&Cy(s,$i,t.memoizedState,t.memoizedProps);break;case 5:Nr(t,i,s);break;case 3:case 4:var c=$i;$i=Qc(t.stateNode.containerInfo),Nr(t,i,s),$i=c;break;case 22:t.memoizedState===null&&(c=t.alternate,c!==null&&c.memoizedState!==null?(c=ul,ul=16777216,Nr(t,i,s),ul=c):Nr(t,i,s));break;default:Nr(t,i,s)}}function X0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function fl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Bn=c,q0(c,t)}X0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)W0(t),t=t.sibling}function W0(t){switch(t.tag){case 0:case 11:case 15:fl(t),t.flags&2048&&fs(9,t,t.return);break;case 3:fl(t);break;case 12:fl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Fc(t)):fl(t);break;default:fl(t)}}function Fc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Bn=c,q0(c,t)}X0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:fs(8,i,i.return),Fc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Fc(i));break;default:Fc(i)}t=t.sibling}}function q0(t,i){for(;Bn!==null;){var s=Bn;switch(s.tag){case 0:case 11:case 15:fs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Qo(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,Bn=c;else e:for(s=t;Bn!==null;){c=Bn;var p=c.sibling,S=c.return;if(P0(c),c===s){Bn=null;break e}if(p!==null){p.return=S,Bn=p;break e}Bn=S}}}var Gx={getCacheForType:function(t){var i=kn(yn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return kn(yn).controller.signal}},Vx=typeof WeakMap=="function"?WeakMap:Map,Gt=0,nn=null,Tt=null,bt=0,Yt=0,Ei=null,ds=!1,zr=!1,bd=!1,Pa=0,gn=0,hs=0,$s=0,Rd=0,Mi=0,Hr=0,dl=null,pi=null,wd=!1,Pc=0,Y0=0,Oc=1/0,Nc=null,ps=null,Rn=0,ms=null,Gr=null,Oa=0,Dd=0,Id=null,Q0=null,hl=0,Ud=null;function Ti(){return(Gt&2)!==0&&bt!==0?bt&-bt:O.T!==null?Nd():Bo()}function j0(){if(Mi===0)if((bt&536870912)===0||wt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Mi=t}else Mi=536870912;return t=xi.current,t!==null&&(t.flags|=32),Mi}function mi(t,i,s){(t===nn&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),gs(t,bt,Mi,!1)),jn(t,s),((Gt&2)===0||t!==nn)&&(t===nn&&((Gt&2)===0&&($s|=s),gn===4&&gs(t,bt,Mi,!1)),ua(t))}function K0(t,i,s){if((Gt&6)!==0)throw Error(a(327));var c=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),p=c?Wx(t,i):Bd(t,i,!0),S=c;do{if(p===0){zr&&!c&&gs(t,i,0,!1);break}else{if(s=t.current.alternate,S&&!kx(s)){p=Bd(t,i,!1),S=!1;continue}if(p===2){if(S=i,t.errorRecoveryDisabledLanes&S)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var B=t;p=dl;var Y=B.current.memoizedState.isDehydrated;if(Y&&(Vr(B,M).flags|=256),M=Bd(B,M,!1),M!==2){if(bd&&!Y){B.errorRecoveryDisabledLanes|=S,$s|=S,p=4;break e}S=pi,pi=p,S!==null&&(pi===null?pi=S:pi.push.apply(pi,S))}p=M}if(S=!1,p!==2)continue}}if(p===1){Vr(t,0),gs(t,i,0,!0);break}e:{switch(c=t,S=p,S){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:gs(c,i,Mi,!ds);break e;case 2:pi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=Pc+300-I(),10<p)){if(gs(c,i,Mi,!ds),Ae(c,0,!0)!==0)break e;Oa=i,c.timeoutHandle=bS(Z0.bind(null,c,s,pi,Nc,wd,i,Mi,$s,Hr,ds,S,"Throttled",-0,0),p);break e}Z0(c,s,pi,Nc,wd,i,Mi,$s,Hr,ds,S,null,-0,0)}}break}while(!0);ua(t)}function Z0(t,i,s,c,p,S,M,B,Y,le,ve,ye,de,ge){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},k0(i,S,ye);var Ye=(S&62914560)===S?Pc-I():(S&4194048)===S?Y0-I():0;if(Ye=by(ye,Ye),Ye!==null){Oa=S,t.cancelPendingCommit=Ye(sS.bind(null,t,i,S,s,c,p,M,B,Y,ve,ye,null,de,ge)),gs(t,S,M,!le);return}}sS(t,i,S,s,c,p,M,B,Y)}function kx(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var p=s[c],S=p.getSnapshot;p=p.value;try{if(!_i(S(),p))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gs(t,i,s,c){i&=~Rd,i&=~$s,t.suspendedLanes|=i,t.pingedLanes&=~i,c&&(t.warmLanes|=i),c=t.expirationTimes;for(var p=i;0<p;){var S=31-Le(p),M=1<<S;c[S]=-1,p&=~M}s!==0&&Kl(t,s,i)}function zc(){return(Gt&6)===0?(pl(0),!1):!0}function Ld(){if(Tt!==null){if(Yt===0)var t=Tt.return;else t=Tt,Ca=Xs=null,jf(t),Ur=null,Ko=0,t=Tt;for(;t!==null;)R0(t.alternate,t),t=t.return;Tt=null}}function Vr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,cy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Oa=0,Ld(),nn=t,Tt=s=Ma(t.current,null),bt=i,Yt=0,Ei=null,ds=!1,zr=Ie(t,i),bd=!1,Hr=Mi=Rd=$s=hs=gn=0,pi=dl=null,wd=!1,(i&8)!==0&&(i|=i&32);var c=t.entangledLanes;if(c!==0)for(t=t.entanglements,c&=i;0<c;){var p=31-Le(c),S=1<<p;i|=t[p],c&=~S}return Pa=i,rc(),s}function J0(t,i){_t=null,O.H=al,i===Ir||i===pc?(i=pg(),Yt=3):i===Of?(i=pg(),Yt=4):Yt=i===fd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ei=i,Tt===null&&(gn=1,Rc(t,Fi(i,t.current)))}function $0(){var t=xi.current;return t===null?!0:(bt&4194048)===bt?zi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===zi:!1}function eS(){var t=O.H;return O.H=al,t===null?al:t}function tS(){var t=O.A;return O.A=Gx,t}function Hc(){gn=4,ds||(bt&4194048)!==bt&&xi.current!==null||(zr=!0),(hs&134217727)===0&&($s&134217727)===0||nn===null||gs(nn,bt,Mi,!1)}function Bd(t,i,s){var c=Gt;Gt|=2;var p=eS(),S=tS();(nn!==t||bt!==i)&&(Nc=null,Vr(t,i)),i=!1;var M=gn;e:do try{if(Yt!==0&&Tt!==null){var B=Tt,Y=Ei;switch(Yt){case 8:Ld(),M=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(i=!0);var le=Yt;if(Yt=0,Ei=null,kr(t,B,Y,le),s&&zr){M=0;break e}break;default:le=Yt,Yt=0,Ei=null,kr(t,B,Y,le)}}Xx(),M=gn;break}catch(ve){J0(t,ve)}while(!0);return i&&t.shellSuspendCounter++,Ca=Xs=null,Gt=c,O.H=p,O.A=S,Tt===null&&(nn=null,bt=0,rc()),M}function Xx(){for(;Tt!==null;)nS(Tt)}function Wx(t,i){var s=Gt;Gt|=2;var c=eS(),p=tS();nn!==t||bt!==i?(Nc=null,Oc=I()+500,Vr(t,i)):zr=Ie(t,i);e:do try{if(Yt!==0&&Tt!==null){i=Tt;var S=Ei;t:switch(Yt){case 1:Yt=0,Ei=null,kr(t,i,S,1);break;case 2:case 9:if(dg(S)){Yt=0,Ei=null,iS(i);break}i=function(){Yt!==2&&Yt!==9||nn!==t||(Yt=7),ua(t)},S.then(i,i);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:dg(S)?(Yt=0,Ei=null,iS(i)):(Yt=0,Ei=null,kr(t,i,S,7));break;case 5:var M=null;switch(Tt.tag){case 26:M=Tt.memoizedState;case 5:case 27:var B=Tt;if(M?VS(M):B.stateNode.complete){Yt=0,Ei=null;var Y=B.sibling;if(Y!==null)Tt=Y;else{var le=B.return;le!==null?(Tt=le,Gc(le)):Tt=null}break t}}Yt=0,Ei=null,kr(t,i,S,5);break;case 6:Yt=0,Ei=null,kr(t,i,S,6);break;case 8:Ld(),gn=6;break e;default:throw Error(a(462))}}qx();break}catch(ve){J0(t,ve)}while(!0);return Ca=Xs=null,O.H=c,O.A=p,Gt=s,Tt!==null?0:(nn=null,bt=0,rc(),gn)}function qx(){for(;Tt!==null&&!Qe();)nS(Tt)}function nS(t){var i=C0(t.alternate,t,Pa);t.memoizedProps=t.pendingProps,i===null?Gc(t):Tt=i}function iS(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=A0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=A0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:jf(i);default:R0(s,i),i=Tt=tg(i,Pa),i=C0(s,i,Pa)}t.memoizedProps=t.pendingProps,i===null?Gc(t):Tt=i}function kr(t,i,s,c){Ca=Xs=null,jf(i),Ur=null,Ko=0;var p=i.return;try{if(Bx(t,p,i,s,bt)){gn=1,Rc(t,Fi(s,t.current)),Tt=null;return}}catch(S){if(p!==null)throw Tt=p,S;gn=1,Rc(t,Fi(s,t.current)),Tt=null;return}i.flags&32768?(wt||c===1?t=!0:zr||(bt&536870912)!==0?t=!1:(ds=t=!0,(c===2||c===9||c===3||c===6)&&(c=xi.current,c!==null&&c.tag===13&&(c.flags|=16384))),aS(i,t)):Gc(i)}function Gc(t){var i=t;do{if((i.flags&32768)!==0){aS(i,ds);return}t=i.return;var s=Ox(i.alternate,i,Pa);if(s!==null){Tt=s;return}if(i=i.sibling,i!==null){Tt=i;return}Tt=i=t}while(i!==null);gn===0&&(gn=5)}function aS(t,i){do{var s=Nx(t.alternate,t);if(s!==null){s.flags&=32767,Tt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=s}while(t!==null);gn=6,Tt=null}function sS(t,i,s,c,p,S,M,B,Y){t.cancelPendingCommit=null;do Vc();while(Rn!==0);if((Gt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(S=i.lanes|i.childLanes,S|=yf,ji(t,s,S,M,B,Y),t===nn&&(Tt=nn=null,bt=0),Gr=i,ms=t,Oa=s,Dd=S,Id=p,Q0=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Kx(Se,function(){return uS(),null})):(t.callbackNode=null,t.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=O.T,O.T=null,p=G.p,G.p=2,M=Gt,Gt|=4;try{zx(t,i,s)}finally{Gt=M,G.p=p,O.T=c}}Rn=1,rS(),oS(),lS()}}function rS(){if(Rn===1){Rn=0;var t=ms,i=Gr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var c=G.p;G.p=2;var p=Gt;Gt|=4;try{H0(i,t);var S=qd,M=qm(t.containerInfo),B=S.focusedElem,Y=S.selectionRange;if(M!==B&&B&&B.ownerDocument&&Wm(B.ownerDocument.documentElement,B)){if(Y!==null&&Sf(B)){var le=Y.start,ve=Y.end;if(ve===void 0&&(ve=le),"selectionStart"in B)B.selectionStart=le,B.selectionEnd=Math.min(ve,B.value.length);else{var ye=B.ownerDocument||document,de=ye&&ye.defaultView||window;if(de.getSelection){var ge=de.getSelection(),Ye=B.textContent.length,ut=Math.min(Y.start,Ye),Jt=Y.end===void 0?ut:Math.min(Y.end,Ye);!ge.extend&&ut>Jt&&(M=Jt,Jt=ut,ut=M);var ne=Xm(B,ut),K=Xm(B,Jt);if(ne&&K&&(ge.rangeCount!==1||ge.anchorNode!==ne.node||ge.anchorOffset!==ne.offset||ge.focusNode!==K.node||ge.focusOffset!==K.offset)){var oe=ye.createRange();oe.setStart(ne.node,ne.offset),ge.removeAllRanges(),ut>Jt?(ge.addRange(oe),ge.extend(K.node,K.offset)):(oe.setEnd(K.node,K.offset),ge.addRange(oe))}}}}for(ye=[],ge=B;ge=ge.parentNode;)ge.nodeType===1&&ye.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof B.focus=="function"&&B.focus(),B=0;B<ye.length;B++){var xe=ye[B];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}eu=!!Wd,qd=Wd=null}finally{Gt=p,G.p=c,O.T=s}}t.current=i,Rn=2}}function oS(){if(Rn===2){Rn=0;var t=ms,i=Gr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var c=G.p;G.p=2;var p=Gt;Gt|=4;try{F0(t,i.alternate,i)}finally{Gt=p,G.p=c,O.T=s}}Rn=3}}function lS(){if(Rn===4||Rn===3){Rn=0,V();var t=ms,i=Gr,s=Oa,c=Q0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,Gr=ms=null,cS(t,t.pendingLanes));var p=t.pendingLanes;if(p===0&&(ps=null),pr(s),i=i.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=O.T,p=G.p,G.p=2,O.T=null;try{for(var S=t.onRecoverableError,M=0;M<c.length;M++){var B=c[M];S(B.value,{componentStack:B.stack})}}finally{O.T=i,G.p=p}}(Oa&3)!==0&&Vc(),ua(t),p=t.pendingLanes,(s&261930)!==0&&(p&42)!==0?t===Ud?hl++:(hl=0,Ud=t):hl=0,pl(0)}}function cS(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Qo(i)))}function Vc(){return rS(),oS(),lS(),uS()}function uS(){if(Rn!==5)return!1;var t=ms,i=Dd;Dd=0;var s=pr(Oa),c=O.T,p=G.p;try{G.p=32>s?32:s,O.T=null,s=Id,Id=null;var S=ms,M=Oa;if(Rn=0,Gr=ms=null,Oa=0,(Gt&6)!==0)throw Error(a(331));var B=Gt;if(Gt|=4,W0(S.current),V0(S,S.current,M,s),Gt=B,pl(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ue,S)}catch{}return!0}finally{G.p=p,O.T=c,cS(t,i)}}function fS(t,i,s){i=Fi(s,i),i=ud(t.stateNode,i,2),t=ls(t,i,2),t!==null&&(jn(t,2),ua(t))}function Qt(t,i,s){if(t.tag===3)fS(t,t,s);else for(;i!==null;){if(i.tag===3){fS(i,t,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ps===null||!ps.has(c))){t=Fi(s,t),s=d0(2),c=ls(i,s,2),c!==null&&(h0(s,c,i,t),jn(c,2),ua(c));break}}i=i.return}}function Fd(t,i,s){var c=t.pingCache;if(c===null){c=t.pingCache=new Vx;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(s)||(bd=!0,p.add(s),t=Yx.bind(null,t,i,s),i.then(t,t))}function Yx(t,i,s){var c=t.pingCache;c!==null&&c.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,nn===t&&(bt&s)===s&&(gn===4||gn===3&&(bt&62914560)===bt&&300>I()-Pc?(Gt&2)===0&&Vr(t,0):Rd|=s,Hr===bt&&(Hr=0)),ua(t)}function dS(t,i){i===0&&(i=Wt()),t=Gs(t,i),t!==null&&(jn(t,i),ua(t))}function Qx(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),dS(t,s)}function jx(t,i){var s=0;switch(t.tag){case 31:case 13:var c=t.stateNode,p=t.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=t.stateNode;break;case 22:c=t.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),dS(t,s)}function Kx(t,i){return St(t,i)}var kc=null,Xr=null,Pd=!1,Xc=!1,Od=!1,Ss=0;function ua(t){t!==Xr&&t.next===null&&(Xr===null?kc=Xr=t:Xr=Xr.next=t),Xc=!0,Pd||(Pd=!0,Jx())}function pl(t,i){if(!Od&&Xc){Od=!0;do for(var s=!1,c=kc;c!==null;){if(t!==0){var p=c.pendingLanes;if(p===0)var S=0;else{var M=c.suspendedLanes,B=c.pingedLanes;S=(1<<31-Le(42|t)+1)-1,S&=p&~(M&~B),S=S&201326741?S&201326741|1:S?S|2:0}S!==0&&(s=!0,gS(c,S))}else S=bt,S=Ae(c,c===nn?S:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(S&3)===0||Ie(c,S)||(s=!0,gS(c,S));c=c.next}while(s);Od=!1}}function Zx(){hS()}function hS(){Xc=Pd=!1;var t=0;Ss!==0&&ly()&&(t=Ss);for(var i=I(),s=null,c=kc;c!==null;){var p=c.next,S=pS(c,i);S===0?(c.next=null,s===null?kc=p:s.next=p,p===null&&(Xr=s)):(s=c,(t!==0||(S&3)!==0)&&(Xc=!0)),c=p}Rn!==0&&Rn!==5||pl(t),Ss!==0&&(Ss=0)}function pS(t,i){for(var s=t.suspendedLanes,c=t.pingedLanes,p=t.expirationTimes,S=t.pendingLanes&-62914561;0<S;){var M=31-Le(S),B=1<<M,Y=p[M];Y===-1?((B&s)===0||(B&c)!==0)&&(p[M]=lt(B,i)):Y<=i&&(t.expiredLanes|=B),S&=~B}if(i=nn,s=bt,s=Ae(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c=t.callbackNode,s===0||t===i&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return c!==null&&c!==null&&Bt(c),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(c!==null&&Bt(c),pr(s)){case 2:case 8:s=Te;break;case 32:s=Se;break;case 268435456:s=Pe;break;default:s=Se}return c=mS.bind(null,t),s=St(s,c),t.callbackPriority=i,t.callbackNode=s,i}return c!==null&&c!==null&&Bt(c),t.callbackPriority=2,t.callbackNode=null,2}function mS(t,i){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Vc()&&t.callbackNode!==s)return null;var c=bt;return c=Ae(t,t===nn?c:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c===0?null:(K0(t,c,i),pS(t,I()),t.callbackNode!=null&&t.callbackNode===s?mS.bind(null,t):null)}function gS(t,i){if(Vc())return null;K0(t,i,!0)}function Jx(){uy(function(){(Gt&6)!==0?St(_e,Zx):hS()})}function Nd(){if(Ss===0){var t=wr;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Ss=t}return Ss}function SS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jl(""+t)}function vS(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function $x(t,i,s,c,p){if(i==="submit"&&s&&s.stateNode===p){var S=SS((p[Pn]||null).action),M=c.submitter;M&&(i=(i=M[Pn]||null)?SS(i.formAction):M.getAttribute("formAction"),i!==null&&(S=i,M=null));var B=new nc("action","action",null,c,p);t.push({event:B,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ss!==0){var Y=M?vS(p,M):new FormData(p);ad(s,{pending:!0,data:Y,method:p.method,action:S},null,Y)}}else typeof S=="function"&&(B.preventDefault(),Y=M?vS(p,M):new FormData(p),ad(s,{pending:!0,data:Y,method:p.method,action:S},S,Y))},currentTarget:p}]})}}for(var zd=0;zd<xf.length;zd++){var Hd=xf[zd],ey=Hd.toLowerCase(),ty=Hd[0].toUpperCase()+Hd.slice(1);Ji(ey,"on"+ty)}Ji(jm,"onAnimationEnd"),Ji(Km,"onAnimationIteration"),Ji(Zm,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Sx,"onTransitionRun"),Ji(vx,"onTransitionStart"),Ji(_x,"onTransitionCancel"),Ji(Jm,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function _S(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],p=c.event;c=c.listeners;e:{var S=void 0;if(i)for(var M=c.length-1;0<=M;M--){var B=c[M],Y=B.instance,le=B.currentTarget;if(B=B.listener,Y!==S&&p.isPropagationStopped())break e;S=B,p.currentTarget=le;try{S(p)}catch(ve){sc(ve)}p.currentTarget=null,S=Y}else for(M=0;M<c.length;M++){if(B=c[M],Y=B.instance,le=B.currentTarget,B=B.listener,Y!==S&&p.isPropagationStopped())break e;S=B,p.currentTarget=le;try{S(p)}catch(ve){sc(ve)}p.currentTarget=null,S=Y}}}}function Ct(t,i){var s=i[mr];s===void 0&&(s=i[mr]=new Set);var c=t+"__bubble";s.has(c)||(AS(i,t,2,!1),s.add(c))}function Gd(t,i,s){var c=0;i&&(c|=4),AS(s,t,c,i)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[Wc]){t[Wc]=!0,te.forEach(function(s){s!=="selectionchange"&&(ny.has(s)||Gd(s,!1,t),Gd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Wc]||(i[Wc]=!0,Gd("selectionchange",!1,i))}}function AS(t,i,s,c){switch(jS(i)){case 2:var p=Dy;break;case 8:p=Iy;break;default:p=ih}s=p.bind(null,i,s,t),p=void 0,!lf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?t.addEventListener(i,s,{capture:!0,passive:p}):t.addEventListener(i,s,!0):p!==void 0?t.addEventListener(i,s,{passive:p}):t.addEventListener(i,s,!1)}function kd(t,i,s,c,p){var S=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var B=c.stateNode.containerInfo;if(B===p)break;if(M===4)for(M=c.return;M!==null;){var Y=M.tag;if((Y===3||Y===4)&&M.stateNode.containerInfo===p)return;M=M.return}for(;B!==null;){if(M=Ja(B),M===null)return;if(Y=M.tag,Y===5||Y===6||Y===26||Y===27){c=S=M;continue e}B=B.parentNode}}c=c.return}Tm(function(){var le=S,ve=rf(s),ye=[];e:{var de=$m.get(t);if(de!==void 0){var ge=nc,Ye=t;switch(t){case"keypress":if(ec(s)===0)break e;case"keydown":case"keyup":ge=jA;break;case"focusin":Ye="focus",ge=df;break;case"focusout":Ye="blur",ge=df;break;case"beforeblur":case"afterblur":ge=df;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=OA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=JA;break;case jm:case Km:case Zm:ge=HA;break;case Jm:ge=ex;break;case"scroll":case"scrollend":ge=FA;break;case"wheel":ge=nx;break;case"copy":case"cut":case"paste":ge=VA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Dm;break;case"toggle":case"beforetoggle":ge=ax}var ut=(i&4)!==0,Jt=!ut&&(t==="scroll"||t==="scrollend"),ne=ut?de!==null?de+"Capture":null:de;ut=[];for(var K=le,oe;K!==null;){var xe=K;if(oe=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||oe===null||ne===null||(xe=Oo(K,ne),xe!=null&&ut.push(gl(K,xe,oe))),Jt)break;K=K.return}0<ut.length&&(de=new ge(de,Ye,null,s,ve),ye.push({event:de,listeners:ut}))}}if((i&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",de&&s!==sf&&(Ye=s.relatedTarget||s.fromElement)&&(Ja(Ye)||Ye[Ki]))break e;if((ge||de)&&(de=ve.window===ve?ve:(de=ve.ownerDocument)?de.defaultView||de.parentWindow:window,ge?(Ye=s.relatedTarget||s.toElement,ge=le,Ye=Ye?Ja(Ye):null,Ye!==null&&(Jt=l(Ye),ut=Ye.tag,Ye!==Jt||ut!==5&&ut!==27&&ut!==6)&&(Ye=null)):(ge=null,Ye=le),ge!==Ye)){if(ut=Rm,xe="onMouseLeave",ne="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(ut=Dm,xe="onPointerLeave",ne="onPointerEnter",K="pointer"),Jt=ge==null?de:Os(ge),oe=Ye==null?de:Os(Ye),de=new ut(xe,K+"leave",ge,s,ve),de.target=Jt,de.relatedTarget=oe,xe=null,Ja(ve)===le&&(ut=new ut(ne,K+"enter",Ye,s,ve),ut.target=oe,ut.relatedTarget=Jt,xe=ut),Jt=xe,ge&&Ye)t:{for(ut=iy,ne=ge,K=Ye,oe=0,xe=ne;xe;xe=ut(xe))oe++;xe=0;for(var rt=K;rt;rt=ut(rt))xe++;for(;0<oe-xe;)ne=ut(ne),oe--;for(;0<xe-oe;)K=ut(K),xe--;for(;oe--;){if(ne===K||K!==null&&ne===K.alternate){ut=ne;break t}ne=ut(ne),K=ut(K)}ut=null}else ut=null;ge!==null&&xS(ye,de,ge,ut,!1),Ye!==null&&Jt!==null&&xS(ye,Jt,Ye,ut,!0)}}e:{if(de=le?Os(le):window,ge=de.nodeName&&de.nodeName.toLowerCase(),ge==="select"||ge==="input"&&de.type==="file")var Ft=Nm;else if(Pm(de))if(zm)Ft=px;else{Ft=dx;var $e=fx}else ge=de.nodeName,!ge||ge.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?le&&Zi(le.elementType)&&(Ft=Nm):Ft=hx;if(Ft&&(Ft=Ft(t,le))){Om(ye,Ft,s,ve);break e}$e&&$e(t,de,le),t==="focusout"&&le&&de.type==="number"&&le.memoizedProps.value!=null&&Nn(de,"number",de.value)}switch($e=le?Os(le):window,t){case"focusin":(Pm($e)||$e.contentEditable==="true")&&(xr=$e,vf=le,Wo=null);break;case"focusout":Wo=vf=xr=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Ym(ye,s,ve);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Ym(ye,s,ve)}var At;if(pf)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else Ar?Bm(t,s)&&(Rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(Im&&s.locale!=="ko"&&(Ar||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&Ar&&(At=Cm()):(ts=ve,cf="value"in ts?ts.value:ts.textContent,Ar=!0)),$e=qc(le,Rt),0<$e.length&&(Rt=new wm(Rt,t,null,s,ve),ye.push({event:Rt,listeners:$e}),At?Rt.data=At:(At=Fm(s),At!==null&&(Rt.data=At)))),(At=rx?ox(t,s):lx(t,s))&&(Rt=qc(le,"onBeforeInput"),0<Rt.length&&($e=new wm("onBeforeInput","beforeinput",null,s,ve),ye.push({event:$e,listeners:Rt}),$e.data=At)),$x(ye,t,le,s,ve)}_S(ye,i)})}function gl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function qc(t,i){for(var s=i+"Capture",c=[];t!==null;){var p=t,S=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||S===null||(p=Oo(t,s),p!=null&&c.unshift(gl(t,p,S)),p=Oo(t,i),p!=null&&c.push(gl(t,p,S))),t.tag===3)return c;t=t.return}return[]}function iy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xS(t,i,s,c,p){for(var S=i._reactName,M=[];s!==null&&s!==c;){var B=s,Y=B.alternate,le=B.stateNode;if(B=B.tag,Y!==null&&Y===c)break;B!==5&&B!==26&&B!==27||le===null||(Y=le,p?(le=Oo(s,S),le!=null&&M.unshift(gl(s,le,Y))):p||(le=Oo(s,S),le!=null&&M.push(gl(s,le,Y)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var ay=/\r\n?/g,sy=/\u0000|\uFFFD/g;function yS(t){return(typeof t=="string"?t:""+t).replace(ay,`
`).replace(sy,"")}function ES(t,i){return i=yS(i),yS(t)===i}function Zt(t,i,s,c,p,S){switch(s){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||bn(t,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&bn(t,""+c);break;case"className":ot(t,"class",c);break;case"tabIndex":ot(t,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(t,s,c);break;case"style":Sr(t,c,S);break;case"data":if(i!=="object"){ot(t,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=Jl(""+c),t.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof S=="function"&&(s==="formAction"?(i!=="input"&&Zt(t,i,"name",p.name,p,null),Zt(t,i,"formEncType",p.formEncType,p,null),Zt(t,i,"formMethod",p.formMethod,p,null),Zt(t,i,"formTarget",p.formTarget,p,null)):(Zt(t,i,"encType",p.encType,p,null),Zt(t,i,"method",p.method,p,null),Zt(t,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=Jl(""+c),t.setAttribute(s,c);break;case"onClick":c!=null&&(t.onclick=ya);break;case"onScroll":c!=null&&Ct("scroll",t);break;case"onScrollEnd":c!=null&&Ct("scrollend",t);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":t.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){t.removeAttribute("xlink:href");break}s=Jl(""+c),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""+c):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":c===!0?t.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,c):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?t.setAttribute(s,c):t.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?t.removeAttribute(s):t.setAttribute(s,c);break;case"popover":Ct("beforetoggle",t),Ct("toggle",t),Ke(t,"popover",c);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ke(t,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=LA.get(s)||s,Ke(t,s,c))}}function Xd(t,i,s,c,p,S){switch(s){case"style":Sr(t,c,S);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof c=="string"?bn(t,c):(typeof c=="number"||typeof c=="bigint")&&bn(t,""+c);break;case"onScroll":c!=null&&Ct("scroll",t);break;case"onScrollEnd":c!=null&&Ct("scrollend",t);break;case"onClick":c!=null&&(t.onclick=ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!me.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),i=s.slice(2,p?s.length-7:void 0),S=t[Pn]||null,S=S!=null?S[s]:null,typeof S=="function"&&t.removeEventListener(i,S,p),typeof c=="function")){typeof S!="function"&&S!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,c,p);break e}s in t?t[s]=c:c===!0?t.setAttribute(s,""):Ke(t,s,c)}}}function Wn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",t),Ct("load",t);var c=!1,p=!1,S;for(S in s)if(s.hasOwnProperty(S)){var M=s[S];if(M!=null)switch(S){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(t,i,S,M,s,null)}}p&&Zt(t,i,"srcSet",s.srcSet,s,null),c&&Zt(t,i,"src",s.src,s,null);return;case"input":Ct("invalid",t);var B=S=M=p=null,Y=null,le=null;for(c in s)if(s.hasOwnProperty(c)){var ve=s[c];if(ve!=null)switch(c){case"name":p=ve;break;case"type":M=ve;break;case"checked":Y=ve;break;case"defaultChecked":le=ve;break;case"value":S=ve;break;case"defaultValue":B=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,i));break;default:Zt(t,i,c,ve,s,null)}}xa(t,S,B,Y,le,M,p,!1);return;case"select":Ct("invalid",t),c=M=S=null;for(p in s)if(s.hasOwnProperty(p)&&(B=s[p],B!=null))switch(p){case"value":S=B;break;case"defaultValue":M=B;break;case"multiple":c=B;default:Zt(t,i,p,B,s,null)}i=S,s=M,t.multiple=!!c,i!=null?Li(t,!!c,i,!1):s!=null&&Li(t,!!c,s,!0);return;case"textarea":Ct("invalid",t),S=p=c=null;for(M in s)if(s.hasOwnProperty(M)&&(B=s[M],B!=null))switch(M){case"value":c=B;break;case"defaultValue":p=B;break;case"children":S=B;break;case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(91));break;default:Zt(t,i,M,B,s,null)}zn(t,c,p,S);return;case"option":for(Y in s)s.hasOwnProperty(Y)&&(c=s[Y],c!=null)&&(Y==="selected"?t.selected=c&&typeof c!="function"&&typeof c!="symbol":Zt(t,i,Y,c,s,null));return;case"dialog":Ct("beforetoggle",t),Ct("toggle",t),Ct("cancel",t),Ct("close",t);break;case"iframe":case"object":Ct("load",t);break;case"video":case"audio":for(c=0;c<ml.length;c++)Ct(ml[c],t);break;case"image":Ct("error",t),Ct("load",t);break;case"details":Ct("toggle",t);break;case"embed":case"source":case"link":Ct("error",t),Ct("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in s)if(s.hasOwnProperty(le)&&(c=s[le],c!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(t,i,le,c,s,null)}return;default:if(Zi(i)){for(ve in s)s.hasOwnProperty(ve)&&(c=s[ve],c!==void 0&&Xd(t,i,ve,c,s,void 0));return}}for(B in s)s.hasOwnProperty(B)&&(c=s[B],c!=null&&Zt(t,i,B,c,s,null))}function ry(t,i,s,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,S=null,M=null,B=null,Y=null,le=null,ve=null;for(ge in s){var ye=s[ge];if(s.hasOwnProperty(ge)&&ye!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":Y=ye;default:c.hasOwnProperty(ge)||Zt(t,i,ge,null,c,ye)}}for(var de in c){var ge=c[de];if(ye=s[de],c.hasOwnProperty(de)&&(ge!=null||ye!=null))switch(de){case"type":S=ge;break;case"name":p=ge;break;case"checked":le=ge;break;case"defaultChecked":ve=ge;break;case"value":M=ge;break;case"defaultValue":B=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:ge!==ye&&Zt(t,i,de,ge,c,ye)}}On(t,M,B,Y,le,ve,S,p);return;case"select":ge=M=B=de=null;for(S in s)if(Y=s[S],s.hasOwnProperty(S)&&Y!=null)switch(S){case"value":break;case"multiple":ge=Y;default:c.hasOwnProperty(S)||Zt(t,i,S,null,c,Y)}for(p in c)if(S=c[p],Y=s[p],c.hasOwnProperty(p)&&(S!=null||Y!=null))switch(p){case"value":de=S;break;case"defaultValue":B=S;break;case"multiple":M=S;default:S!==Y&&Zt(t,i,p,S,c,Y)}i=B,s=M,c=ge,de!=null?Li(t,!!s,de,!1):!!c!=!!s&&(i!=null?Li(t,!!s,i,!0):Li(t,!!s,s?[]:"",!1));return;case"textarea":ge=de=null;for(B in s)if(p=s[B],s.hasOwnProperty(B)&&p!=null&&!c.hasOwnProperty(B))switch(B){case"value":break;case"children":break;default:Zt(t,i,B,null,c,p)}for(M in c)if(p=c[M],S=s[M],c.hasOwnProperty(M)&&(p!=null||S!=null))switch(M){case"value":de=p;break;case"defaultValue":ge=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==S&&Zt(t,i,M,p,c,S)}qt(t,de,ge);return;case"option":for(var Ye in s)de=s[Ye],s.hasOwnProperty(Ye)&&de!=null&&!c.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:Zt(t,i,Ye,null,c,de));for(Y in c)de=c[Y],ge=s[Y],c.hasOwnProperty(Y)&&de!==ge&&(de!=null||ge!=null)&&(Y==="selected"?t.selected=de&&typeof de!="function"&&typeof de!="symbol":Zt(t,i,Y,de,c,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in s)de=s[ut],s.hasOwnProperty(ut)&&de!=null&&!c.hasOwnProperty(ut)&&Zt(t,i,ut,null,c,de);for(le in c)if(de=c[le],ge=s[le],c.hasOwnProperty(le)&&de!==ge&&(de!=null||ge!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:Zt(t,i,le,de,c,ge)}return;default:if(Zi(i)){for(var Jt in s)de=s[Jt],s.hasOwnProperty(Jt)&&de!==void 0&&!c.hasOwnProperty(Jt)&&Xd(t,i,Jt,void 0,c,de);for(ve in c)de=c[ve],ge=s[ve],!c.hasOwnProperty(ve)||de===ge||de===void 0&&ge===void 0||Xd(t,i,ve,de,c,ge);return}}for(var ne in s)de=s[ne],s.hasOwnProperty(ne)&&de!=null&&!c.hasOwnProperty(ne)&&Zt(t,i,ne,null,c,de);for(ye in c)de=c[ye],ge=s[ye],!c.hasOwnProperty(ye)||de===ge||de==null&&ge==null||Zt(t,i,ye,de,c,ge)}function MS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),c=0;c<s.length;c++){var p=s[c],S=p.transferSize,M=p.initiatorType,B=p.duration;if(S&&B&&MS(M)){for(M=0,B=p.responseEnd,c+=1;c<s.length;c++){var Y=s[c],le=Y.startTime;if(le>B)break;var ve=Y.transferSize,ye=Y.initiatorType;ve&&MS(ye)&&(Y=Y.responseEnd,M+=ve*(Y<B?1:(B-le)/(Y-le)))}if(--c,i+=8*(S+M)/(p.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wd=null,qd=null;function Yc(t){return t.nodeType===9?t:t.ownerDocument}function TS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function CS(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Yd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qd=null;function ly(){var t=window.event;return t&&t.type==="popstate"?t===Qd?!1:(Qd=t,!0):(Qd=null,!1)}var bS=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,RS=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof RS<"u"?function(t){return RS.resolve(null).then(t).catch(fy)}:bS;function fy(t){setTimeout(function(){throw t})}function vs(t){return t==="head"}function wS(t,i){var s=i,c=0;do{var p=s.nextSibling;if(t.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"||s==="/&"){if(c===0){t.removeChild(p),Qr(i);return}c--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")c++;else if(s==="html")Sl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Sl(s);for(var S=s.firstChild;S;){var M=S.nextSibling,B=S.nodeName;S[Ps]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&S.rel.toLowerCase()==="stylesheet"||s.removeChild(S),S=M}}else s==="body"&&Sl(t.ownerDocument.body);s=p}while(s);Qr(i)}function DS(t,i){var s=t;t=0;do{var c=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=c}while(s)}function jd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":jd(s),Po(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function dy(t,i,s,c){for(;t.nodeType===1;){var p=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(c){if(!t[Ps])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(S=t.getAttribute("rel"),S==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(S!==p.rel||t.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||t.getAttribute("title")!==(p.title==null?null:p.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(S=t.getAttribute("src"),(S!==(p.src==null?null:p.src)||t.getAttribute("type")!==(p.type==null?null:p.type)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&S&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var S=p.name==null?null:""+p.name;if(p.type==="hidden"&&t.getAttribute("name")===S)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function hy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hi(t.nextSibling),t===null))return null;return t}function IS(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Hi(t.nextSibling),t===null))return null;return t}function Kd(t){return t.data==="$?"||t.data==="$~"}function Zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function py(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var c=function(){i(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),t._reactRetry=c}}function Hi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Jd=null;function US(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Hi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function LS(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function BS(t,i,s){switch(i=Yc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Sl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Po(t)}var Gi=new Map,FS=new Set;function Qc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Na=G.d;G.d={f:my,r:gy,D:Sy,C:vy,L:_y,m:Ay,X:yy,S:xy,M:Ey};function my(){var t=Na.f(),i=zc();return t||i}function gy(t){var i=$a(t);i!==null&&i.tag===5&&i.type==="form"?Jg(i):Na.r(t)}var Wr=typeof document>"u"?null:document;function PS(t,i,s){var c=Wr;if(c&&typeof i=="string"&&i){var p=mt(i);p='link[rel="'+t+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),FS.has(p)||(FS.add(p),t={rel:t,crossOrigin:s,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),Wn(i,"link",t),F(i),c.head.appendChild(i)))}}function Sy(t){Na.D(t),PS("dns-prefetch",t,null)}function vy(t,i){Na.C(t,i),PS("preconnect",t,i)}function _y(t,i,s){Na.L(t,i,s);var c=Wr;if(c&&t&&i){var p='link[rel="preload"][as="'+mt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+mt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+mt(s.imageSizes)+'"]')):p+='[href="'+mt(t)+'"]';var S=p;switch(i){case"style":S=qr(t);break;case"script":S=Yr(t)}Gi.has(S)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Gi.set(S,t),c.querySelector(p)!==null||i==="style"&&c.querySelector(vl(S))||i==="script"&&c.querySelector(_l(S))||(i=c.createElement("link"),Wn(i,"link",t),F(i),c.head.appendChild(i)))}}function Ay(t,i){Na.m(t,i);var s=Wr;if(s&&t){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+mt(c)+'"][href="'+mt(t)+'"]',S=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":S=Yr(t)}if(!Gi.has(S)&&(t=g({rel:"modulepreload",href:t},i),Gi.set(S,t),s.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(S)))return}c=s.createElement("link"),Wn(c,"link",t),F(c),s.head.appendChild(c)}}}function xy(t,i,s){Na.S(t,i,s);var c=Wr;if(c&&t){var p=es(c).hoistableStyles,S=qr(t);i=i||"default";var M=p.get(S);if(!M){var B={loading:0,preload:null};if(M=c.querySelector(vl(S)))B.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Gi.get(S))&&$d(t,s);var Y=M=c.createElement("link");F(Y),Wn(Y,"link",t),Y._p=new Promise(function(le,ve){Y.onload=le,Y.onerror=ve}),Y.addEventListener("load",function(){B.loading|=1}),Y.addEventListener("error",function(){B.loading|=2}),B.loading|=4,jc(M,i,c)}M={type:"stylesheet",instance:M,count:1,state:B},p.set(S,M)}}}function yy(t,i){Na.X(t,i);var s=Wr;if(s&&t){var c=es(s).hoistableScripts,p=Yr(t),S=c.get(p);S||(S=s.querySelector(_l(p)),S||(t=g({src:t,async:!0},i),(i=Gi.get(p))&&eh(t,i),S=s.createElement("script"),F(S),Wn(S,"link",t),s.head.appendChild(S)),S={type:"script",instance:S,count:1,state:null},c.set(p,S))}}function Ey(t,i){Na.M(t,i);var s=Wr;if(s&&t){var c=es(s).hoistableScripts,p=Yr(t),S=c.get(p);S||(S=s.querySelector(_l(p)),S||(t=g({src:t,async:!0,type:"module"},i),(i=Gi.get(p))&&eh(t,i),S=s.createElement("script"),F(S),Wn(S,"link",t),s.head.appendChild(S)),S={type:"script",instance:S,count:1,state:null},c.set(p,S))}}function OS(t,i,s,c){var p=(p=$.current)?Qc(p):null;if(!p)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=qr(s.href),s=es(p).hoistableStyles,c=s.get(i),c||(c={type:"style",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=qr(s.href);var S=es(p).hoistableStyles,M=S.get(t);if(M||(p=p.ownerDocument||p,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},S.set(t,M),(S=p.querySelector(vl(t)))&&!S._p&&(M.instance=S,M.state.loading=5),Gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gi.set(t,s),S||My(p,t,s,M.state))),i&&c===null)throw Error(a(528,""));return M}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Yr(s),s=es(p).hoistableScripts,c=s.get(i),c||(c={type:"script",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function qr(t){return'href="'+mt(t)+'"'}function vl(t){return'link[rel="stylesheet"]['+t+"]"}function NS(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function My(t,i,s,c){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=t.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Wn(i,"link",s),F(i),t.head.appendChild(i))}function Yr(t){return'[src="'+mt(t)+'"]'}function _l(t){return"script[async]"+t}function zS(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var c=t.querySelector('style[data-href~="'+mt(s.href)+'"]');if(c)return i.instance=c,F(c),c;var p=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(t.ownerDocument||t).createElement("style"),F(c),Wn(c,"style",p),jc(c,s.precedence,t),i.instance=c;case"stylesheet":p=qr(s.href);var S=t.querySelector(vl(p));if(S)return i.state.loading|=4,i.instance=S,F(S),S;c=NS(s),(p=Gi.get(p))&&$d(c,p),S=(t.ownerDocument||t).createElement("link"),F(S);var M=S;return M._p=new Promise(function(B,Y){M.onload=B,M.onerror=Y}),Wn(S,"link",c),i.state.loading|=4,jc(S,s.precedence,t),i.instance=S;case"script":return S=Yr(s.src),(p=t.querySelector(_l(S)))?(i.instance=p,F(p),p):(c=s,(p=Gi.get(S))&&(c=g({},s),eh(c,p)),t=t.ownerDocument||t,p=t.createElement("script"),F(p),Wn(p,"link",c),t.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,jc(c,s.precedence,t));return i.instance}function jc(t,i,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,S=p,M=0;M<c.length;M++){var B=c[M];if(B.dataset.precedence===i)S=B;else if(S!==p)break}S?S.parentNode.insertBefore(t,S.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function $d(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function eh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Kc=null;function HS(t,i,s){if(Kc===null){var c=new Map,p=Kc=new Map;p.set(s,c)}else p=Kc,c=p.get(s),c||(c=new Map,p.set(s,c));if(c.has(t))return c;for(c.set(t,null),s=s.getElementsByTagName(t),p=0;p<s.length;p++){var S=s[p];if(!(S[Ps]||S[xn]||t==="link"&&S.getAttribute("rel")==="stylesheet")&&S.namespaceURI!=="http://www.w3.org/2000/svg"){var M=S.getAttribute(i)||"";M=t+M;var B=c.get(M);B?B.push(S):c.set(M,[S])}}return c}function GS(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Ty(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function VS(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Cy(t,i,s,c){if(s.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var p=qr(c.href),S=i.querySelector(vl(p));if(S){i=S._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Zc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=S,F(S);return}S=i.ownerDocument||i,c=NS(c),(p=Gi.get(p))&&$d(c,p),S=S.createElement("link"),F(S);var M=S;M._p=new Promise(function(B,Y){M.onload=B,M.onerror=Y}),Wn(S,"link",c),s.instance=S}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Zc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var th=0;function by(t,i){return t.stylesheets&&t.count===0&&$c(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var c=setTimeout(function(){if(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend){var S=t.unsuspend;t.unsuspend=null,S()}},6e4+i);0<t.imgBytes&&th===0&&(th=62500*oy());var p=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend)){var S=t.unsuspend;t.unsuspend=null,S()}},(t.imgBytes>th?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function Zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jc=null;function $c(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jc=new Map,i.forEach(Ry,t),Jc=null,Zc.call(t))}function Ry(t,i){if(!(i.state.loading&4)){var s=Jc.get(t);if(s)var c=s.get(null);else{s=new Map,Jc.set(t,s);for(var p=t.querySelectorAll("link[data-precedence],style[data-precedence]"),S=0;S<p.length;S++){var M=p[S];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),c=M)}c&&s.set(null,c)}p=i.instance,M=p.getAttribute("data-precedence"),S=s.get(M)||c,S===c&&s.set(null,p),s.set(M,p),this.count++,c=Zc.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),S?S.parentNode.insertBefore(p,S.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(p,t.firstChild)),i.state.loading|=4}}var Al={$$typeof:w,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function wy(t,i,s,c,p,S,M,B,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=It(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.hiddenUpdates=It(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=S,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function kS(t,i,s,c,p,S,M,B,Y,le,ve,ye){return t=new wy(t,i,s,M,Y,le,ve,ye,B),i=1,S===!0&&(i|=24),S=Ai(3,null,null,i),t.current=S,S.stateNode=t,i=Bf(),i.refCount++,t.pooledCache=i,i.refCount++,S.memoizedState={element:c,isDehydrated:s,cache:i},Nf(S),t}function XS(t){return t?(t=Mr,t):Mr}function WS(t,i,s,c,p,S){p=XS(p),c.context===null?c.context=p:c.pendingContext=p,c=os(i),c.payload={element:s},S=S===void 0?null:S,S!==null&&(c.callback=S),s=ls(t,c,i),s!==null&&(mi(s,t,i),Jo(s,t,i))}function qS(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function nh(t,i){qS(t,i),(t=t.alternate)&&qS(t,i)}function YS(t){if(t.tag===13||t.tag===31){var i=Gs(t,67108864);i!==null&&mi(i,t,67108864),nh(t,67108864)}}function QS(t){if(t.tag===13||t.tag===31){var i=Ti();i=Lo(i);var s=Gs(t,i);s!==null&&mi(s,t,i),nh(t,i)}}var eu=!0;function Dy(t,i,s,c){var p=O.T;O.T=null;var S=G.p;try{G.p=2,ih(t,i,s,c)}finally{G.p=S,O.T=p}}function Iy(t,i,s,c){var p=O.T;O.T=null;var S=G.p;try{G.p=8,ih(t,i,s,c)}finally{G.p=S,O.T=p}}function ih(t,i,s,c){if(eu){var p=ah(c);if(p===null)kd(t,i,c,tu,s),KS(t,c);else if(Ly(p,t,i,s,c))c.stopPropagation();else if(KS(t,c),i&4&&-1<Uy.indexOf(t)){for(;p!==null;){var S=$a(p);if(S!==null)switch(S.tag){case 3:if(S=S.stateNode,S.current.memoizedState.isDehydrated){var M=Ce(S.pendingLanes);if(M!==0){var B=S;for(B.pendingLanes|=2,B.entangledLanes|=2;M;){var Y=1<<31-Le(M);B.entanglements[1]|=Y,M&=~Y}ua(S),(Gt&6)===0&&(Oc=I()+500,pl(0))}}break;case 31:case 13:B=Gs(S,2),B!==null&&mi(B,S,2),zc(),nh(S,2)}if(S=ah(c),S===null&&kd(t,i,c,tu,s),S===p)break;p=S}p!==null&&c.stopPropagation()}else kd(t,i,c,null,s)}}function ah(t){return t=rf(t),sh(t)}var tu=null;function sh(t){if(tu=null,t=Ja(t),t!==null){var i=l(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return tu=t,null}function jS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case _e:return 2;case Te:return 8;case Se:case je:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var rh=!1,_s=null,As=null,xs=null,xl=new Map,yl=new Map,ys=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function KS(t,i){switch(t){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":xl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(i.pointerId)}}function El(t,i,s,c,p,S){return t===null||t.nativeEvent!==S?(t={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:S,targetContainers:[p]},i!==null&&(i=$a(i),i!==null&&YS(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),t)}function Ly(t,i,s,c,p){switch(i){case"focusin":return _s=El(_s,t,i,s,c,p),!0;case"dragenter":return As=El(As,t,i,s,c,p),!0;case"mouseover":return xs=El(xs,t,i,s,c,p),!0;case"pointerover":var S=p.pointerId;return xl.set(S,El(xl.get(S)||null,t,i,s,c,p)),!0;case"gotpointercapture":return S=p.pointerId,yl.set(S,El(yl.get(S)||null,t,i,s,c,p)),!0}return!1}function ZS(t){var i=Ja(t.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ra(t.priority,function(){QS(s)});return}}else if(i===31){if(i=f(s),i!==null){t.blockedOn=i,ra(t.priority,function(){QS(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ah(t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);sf=c,s.target.dispatchEvent(c),sf=null}else return i=$a(s),i!==null&&YS(i),t.blockedOn=s,!1;i.shift()}return!0}function JS(t,i,s){nu(t)&&s.delete(i)}function By(){rh=!1,_s!==null&&nu(_s)&&(_s=null),As!==null&&nu(As)&&(As=null),xs!==null&&nu(xs)&&(xs=null),xl.forEach(JS),yl.forEach(JS)}function iu(t,i){t.blockedOn===i&&(t.blockedOn=null,rh||(rh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,By)))}var au=null;function $S(t){au!==t&&(au=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){au===t&&(au=null);for(var i=0;i<t.length;i+=3){var s=t[i],c=t[i+1],p=t[i+2];if(typeof c!="function"){if(sh(c||s)===null)continue;break}var S=$a(s);S!==null&&(t.splice(i,3),i-=3,ad(S,{pending:!0,data:p,method:s.method,action:c},c,p))}}))}function Qr(t){function i(Y){return iu(Y,t)}_s!==null&&iu(_s,t),As!==null&&iu(As,t),xs!==null&&iu(xs,t),xl.forEach(i),yl.forEach(i);for(var s=0;s<ys.length;s++){var c=ys[s];c.blockedOn===t&&(c.blockedOn=null)}for(;0<ys.length&&(s=ys[0],s.blockedOn===null);)ZS(s),s.blockedOn===null&&ys.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var p=s[c],S=s[c+1],M=p[Pn]||null;if(typeof S=="function")M||$S(s);else if(M){var B=null;if(S&&S.hasAttribute("formAction")){if(p=S,M=S[Pn]||null)B=M.formAction;else if(sh(p)!==null)continue}else B=M.action;typeof B=="function"?s[c+1]=B:(s.splice(c,3),c-=3),$S(s)}}}function ev(){function t(S){S.canIntercept&&S.info==="react-transition"&&S.intercept({handler:function(){return new Promise(function(M){return p=M})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(s,20)}function s(){if(!c&&!navigation.transition){var S=navigation.currentEntry;S&&S.url!=null&&navigation.navigate(S.url,{state:S.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){c=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function oh(t){this._internalRoot=t}su.prototype.render=oh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,c=Ti();WS(s,c,t,i,null,null)},su.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;WS(t.current,2,null,t,null,null),zc(),i[Ki]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var i=Bo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ys.length&&i!==0&&i<ys[s].priority;s++);ys.splice(s,0,t),s===0&&ZS(t)}};var tv=e.version;if(tv!=="19.2.4")throw Error(a(527,tv,"19.2.4"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ue=ru.inject(Fy),Ee=ru}catch{}}return Tl.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,c="",p=l0,S=c0,M=u0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(S=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=kS(t,1,!1,null,null,s,c,null,p,S,M,ev),t[Ki]=i.current,Vd(t),new oh(i)},Tl.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var c=!1,p="",S=l0,M=c0,B=u0,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(S=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(B=s.onRecoverableError),s.formState!==void 0&&(Y=s.formState)),i=kS(t,1,!0,i,s??null,c,p,Y,S,M,B,ev),i.context=XS(null),s=i.current,c=Ti(),c=Lo(c),p=os(c),p.callback=null,ls(s,p,c),s=c,i.current.lanes=s,jn(i,s),ua(i),t[Ki]=i.current,Vd(t),new su(i)},Tl.version="19.2.4",Tl}var fv;function qy(){if(fv)return uh.exports;fv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uh.exports=Wy(),uh.exports}var Yy=qy();const Qy=z_(Yy);const Qp="182",Xi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jy=0,dv=1,Ky=2,Pu=1,Zy=2,Ul=3,Sa=0,Si=1,qi=2,Ka=0,Bs=1,hv=2,pv=3,mv=4,H_=5,rr=100,Jy=101,$y=102,eE=103,tE=104,nE=200,iE=201,aE=202,sE=203,Gl=204,Vl=205,rE=206,oE=207,lE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,ep=0,tp=1,np=2,xo=3,ip=4,ap=5,sp=6,rp=7,G_=0,mE=1,gE=2,ga=0,V_=1,k_=2,X_=3,W_=4,q_=5,Y_=6,Q_=7,j_=300,fr=301,yo=302,op=303,lp=304,Ku=306,cp=1e3,ja=1001,up=1002,Qn=1003,SE=1004,ou=1005,ei=1006,ph=1007,lr=1008,Di=1009,K_=1010,Z_=1011,kl=1012,jp=1013,si=1014,Yi=1015,va=1016,Kp=1017,Zp=1018,Xl=1020,J_=35902,$_=35899,eA=1021,tA=1022,ri=1023,_a=1026,cr=1027,nA=1028,Zu=1029,Eo=1030,Jp=1031,go=1033,Ou=33776,Nu=33777,zu=33778,Hu=33779,fp=35840,dp=35841,hp=35842,pp=35843,mp=36196,gp=37492,Sp=37496,vp=37488,_p=37489,Ap=37490,xp=37491,yp=37808,Ep=37809,Mp=37810,Tp=37811,Cp=37812,bp=37813,Rp=37814,wp=37815,Dp=37816,Ip=37817,Up=37818,Lp=37819,Bp=37820,Fp=37821,Pp=36492,Op=36494,Np=36495,zp=36283,Hp=36284,Gp=36285,Vp=36286,vE=3200,_E=0,AE=1,Is="",ki="srgb",Mo="srgb-linear",Vu="linear",jt="srgb",jr=7680,gv=519,xE=512,yE=513,EE=514,$p=515,ME=516,TE=517,em=518,CE=519,Sv=35044,bE=35048,vv="300 es",ha=2e3,ku=2001;function iA(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Xu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function RE(){const o=Xu("canvas");return o.style.display="block",o}const _v={};function Av(...o){const e="THREE."+o.shift();console.log(e,...o)}function ht(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Nt(...o){const e="THREE."+o.shift();console.error(e,...o)}function Wl(...o){const e=o.join(" ");e in _v||(_v[e]=!0,ht(...o))}function wE(o,e,n){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xv=1234567;const Bl=Math.PI/180,ql=180/Math.PI;function wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Zn[o&255]+Zn[o>>8&255]+Zn[o>>16&255]+Zn[o>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]).toLowerCase()}function Et(o,e,n){return Math.max(e,Math.min(n,o))}function tm(o,e){return(o%e+e)%e}function DE(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function IE(o,e,n){return o!==e?(n-o)/(e-o):0}function Fl(o,e,n){return(1-n)*o+n*e}function UE(o,e,n,a){return Fl(o,e,1-Math.exp(-n*a))}function LE(o,e=1){return e-Math.abs(tm(o,e*2)-e)}function BE(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function FE(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function PE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function OE(o,e){return o+Math.random()*(e-o)}function NE(o){return o*(.5-Math.random())}function zE(o){o!==void 0&&(xv=o);let e=xv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HE(o){return o*Bl}function GE(o){return o*ql}function VE(o){return(o&o-1)===0&&o!==0}function kE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function XE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function WE(o,e,n,a,r){const l=Math.cos,u=Math.sin,f=l(n/2),d=u(n/2),h=l((e+a)/2),m=u((e+a)/2),g=l((e-a)/2),v=u((e-a)/2),_=l((a-e)/2),y=u((a-e)/2);switch(r){case"XYX":o.set(f*m,d*g,d*v,f*h);break;case"YZY":o.set(d*v,f*m,d*g,f*h);break;case"ZXZ":o.set(d*g,d*v,f*m,f*h);break;case"XZX":o.set(f*m,d*y,d*_,f*h);break;case"YXY":o.set(d*_,f*m,d*y,f*h);break;case"ZYZ":o.set(d*y,d*_,f*m,f*h);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ho(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ni(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ju={DEG2RAD:Bl,RAD2DEG:ql,generateUUID:wo,clamp:Et,euclideanModulo:tm,mapLinear:DE,inverseLerp:IE,lerp:Fl,damp:UE,pingpong:LE,smoothstep:BE,smootherstep:FE,randInt:PE,randFloat:OE,randFloatSpread:NE,seededRandom:zE,degToRad:HE,radToDeg:GE,isPowerOfTwo:VE,ceilPowerOfTwo:kE,floorPowerOfTwo:XE,setQuaternionFromProperEuler:WE,normalize:ni,denormalize:ho};class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*r+e.x,this.y=l*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sn{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,l,u,f){let d=a[r+0],h=a[r+1],m=a[r+2],g=a[r+3],v=l[u+0],_=l[u+1],y=l[u+2],E=l[u+3];if(f<=0){e[n+0]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g;return}if(f>=1){e[n+0]=v,e[n+1]=_,e[n+2]=y,e[n+3]=E;return}if(g!==E||d!==v||h!==_||m!==y){let x=d*v+h*_+m*y+g*E;x<0&&(v=-v,_=-_,y=-y,E=-E,x=-x);let A=1-f;if(x<.9995){const T=Math.acos(x),w=Math.sin(T);A=Math.sin(A*T)/w,f=Math.sin(f*T)/w,d=d*A+v*f,h=h*A+_*f,m=m*A+y*f,g=g*A+E*f}else{d=d*A+v*f,h=h*A+_*f,m=m*A+y*f,g=g*A+E*f;const T=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=T,h*=T,m*=T,g*=T}}e[n]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,r,l,u){const f=a[r],d=a[r+1],h=a[r+2],m=a[r+3],g=l[u],v=l[u+1],_=l[u+2],y=l[u+3];return e[n]=f*y+m*g+d*_-h*v,e[n+1]=d*y+m*v+h*g-f*_,e[n+2]=h*y+m*_+f*v-d*g,e[n+3]=m*y-f*g-d*v-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(a/2),m=f(r/2),g=f(l/2),v=d(a/2),_=d(r/2),y=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*_*y,this._y=h*_*g-v*m*y,this._z=h*m*y+v*_*g,this._w=h*m*g-v*_*y;break;case"YXZ":this._x=v*m*g+h*_*y,this._y=h*_*g-v*m*y,this._z=h*m*y-v*_*g,this._w=h*m*g+v*_*y;break;case"ZXY":this._x=v*m*g-h*_*y,this._y=h*_*g+v*m*y,this._z=h*m*y+v*_*g,this._w=h*m*g-v*_*y;break;case"ZYX":this._x=v*m*g-h*_*y,this._y=h*_*g+v*m*y,this._z=h*m*y-v*_*g,this._w=h*m*g+v*_*y;break;case"YZX":this._x=v*m*g+h*_*y,this._y=h*_*g+v*m*y,this._z=h*m*y-v*_*g,this._w=h*m*g-v*_*y;break;case"XZY":this._x=v*m*g-h*_*y,this._y=h*_*g-v*m*y,this._z=h*m*y+v*_*g,this._w=h*m*g+v*_*y;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],l=n[8],u=n[1],f=n[5],d=n[9],h=n[2],m=n[6],g=n[10],v=a+f+g;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(m-d)*_,this._y=(l-h)*_,this._z=(u-r)*_}else if(a>f&&a>g){const _=2*Math.sqrt(1+a-f-g);this._w=(m-d)/_,this._x=.25*_,this._y=(r+u)/_,this._z=(l+h)/_}else if(f>g){const _=2*Math.sqrt(1+f-a-g);this._w=(l-h)/_,this._x=(r+u)/_,this._y=.25*_,this._z=(d+m)/_}else{const _=2*Math.sqrt(1+g-a-f);this._w=(u-r)/_,this._x=(l+h)/_,this._y=(d+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,l=e._z,u=e._w,f=n._x,d=n._y,h=n._z,m=n._w;return this._x=a*m+u*f+r*h-l*d,this._y=r*m+u*d+l*f-a*h,this._z=l*m+u*h+a*d-r*f,this._w=u*m-a*f-r*d-l*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,r=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(a=-a,r=-r,l=-l,u=-u,f=-f);let d=1-n;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,n=Math.sin(n*h)/m,this._x=this._x*d+a*n,this._y=this._y*d+r*n,this._z=this._z*d+l*n,this._w=this._w*d+u*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+r*n,this._z=this._z*d+l*n,this._w=this._w*d+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,a=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=e.elements,u=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*r-f*a),m=2*(f*n-l*r),g=2*(l*a-u*n);return this.x=n+d*h+u*g-f*m,this.y=a+d*m+f*h-l*g,this.z=r+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,l=e.z,u=n.x,f=n.y,d=n.z;return this.x=r*d-l*f,this.y=l*u-a*d,this.z=a*f-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new H,yv=new sn;class dt{constructor(e,n,a,r,l,u,f,d,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,u,f,d,h)}set(e,n,a,r,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=f,m[3]=n,m[4]=l,m[5]=d,m[6]=a,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,u=a[0],f=a[3],d=a[6],h=a[1],m=a[4],g=a[7],v=a[2],_=a[5],y=a[8],E=r[0],x=r[3],A=r[6],T=r[1],w=r[4],D=r[7],b=r[2],L=r[5],R=r[8];return l[0]=u*E+f*T+d*b,l[3]=u*x+f*w+d*L,l[6]=u*A+f*D+d*R,l[1]=h*E+m*T+g*b,l[4]=h*x+m*w+g*L,l[7]=h*A+m*D+g*R,l[2]=v*E+_*T+y*b,l[5]=v*x+_*w+y*L,l[8]=v*A+_*D+y*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return n*u*m-n*f*h-a*l*m+a*f*d+r*l*h-r*u*d}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*u-f*h,v=f*d-m*l,_=h*l-u*d,y=n*g+a*v+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=g*E,e[1]=(r*h-m*a)*E,e[2]=(f*a-r*u)*E,e[3]=v*E,e[4]=(m*n-r*d)*E,e[5]=(r*l-f*n)*E,e[6]=_*E,e[7]=(a*d-h*n)*E,e[8]=(u*n-a*l)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(a*d,a*h,-a*(d*u+h*f)+u+e,-r*h,r*d,-r*(-h*u+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(gh.makeScale(e,n)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,n){return this.premultiply(gh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new dt,Ev=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qE(){const o={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===jt&&(r.r=Za(r.r),r.g=Za(r.g),r.b=Za(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===jt&&(r.r=So(r.r),r.g=So(r.g),r.b=So(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Is?Vu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Wl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Wl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Mo]:{primaries:e,whitePoint:a,transfer:Vu,toXYZ:Ev,fromXYZ:Mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ki},outputColorSpaceConfig:{drawingBufferColorSpace:ki}},[ki]:{primaries:e,whitePoint:a,transfer:jt,toXYZ:Ev,fromXYZ:Mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ki}}}),o}const Ut=qE();function Za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function So(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class YE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Kr===void 0&&(Kr=Xu("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Kr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xu("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Za(l[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Za(n[a]/255)*255):n[a]=Za(n[a]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QE=0;class nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(Sh(r[u].image)):l.push(Sh(r[u]))}else l=Sh(r);a.url=l}return n||(e.images[this.uuid]=a),a}}function Sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?YE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let jE=0;const vh=new H;class oi extends Fs{constructor(e=oi.DEFAULT_IMAGE,n=oi.DEFAULT_MAPPING,a=ja,r=ja,l=ei,u=lr,f=ri,d=Di,h=oi.DEFAULT_ANISOTROPY,m=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=wo(),this.name="",this.source=new nm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cp:e.x=e.x-Math.floor(e.x);break;case ja:e.x=e.x<0?0:1;break;case up:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cp:e.y=e.y-Math.floor(e.y);break;case ja:e.y=e.y<0?0:1;break;case up:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=j_;oi.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,n=0,a=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],_=d[5],y=d[9],E=d[2],x=d[6],A=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(y-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(y+x)<.1&&Math.abs(h+_+A-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,D=(_+1)/2,b=(A+1)/2,L=(m+v)/4,R=(g+E)/4,P=(y+x)/4;return w>D&&w>b?w<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(w),r=L/a,l=R/a):D>b?D<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(D),a=L/r,l=P/r):b<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(b),a=R/l,r=P/l),this.set(a,r,l,n),this}let T=Math.sqrt((x-y)*(x-y)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(T)<.001&&(T=1),this.x=(x-y)/T,this.y=(g-E)/T,this.z=(v-m)/T,this.w=Math.acos((h+_+A-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KE extends Fs{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new hn(0,0,e,n),this.scissorTest=!1,this.viewport=new hn(0,0,e,n);const r={width:e,height:n,depth:a.depth},l=new oi(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends KE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class aA extends oi{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZE extends oi{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ta.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ta.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ta.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ta):ta.fromBufferAttribute(l,u),ta.applyMatrix4(e.matrixWorld),this.expandByPoint(ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),lu.copy(a.boundingBox)),lu.applyMatrix4(e.matrixWorld),this.union(lu)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ta),ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),cu.subVectors(this.max,Cl),Zr.subVectors(e.a,Cl),Jr.subVectors(e.b,Cl),$r.subVectors(e.c,Cl),Ms.subVectors(Jr,Zr),Ts.subVectors($r,Jr),er.subVectors(Zr,$r);let n=[0,-Ms.z,Ms.y,0,-Ts.z,Ts.y,0,-er.z,er.y,Ms.z,0,-Ms.x,Ts.z,0,-Ts.x,er.z,0,-er.x,-Ms.y,Ms.x,0,-Ts.y,Ts.x,0,-er.y,er.x,0];return!_h(n,Zr,Jr,$r,cu)||(n=[1,0,0,0,1,0,0,0,1],!_h(n,Zr,Jr,$r,cu))?!1:(uu.crossVectors(Ms,Ts),n=[uu.x,uu.y,uu.z],_h(n,Zr,Jr,$r,cu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const za=[new H,new H,new H,new H,new H,new H,new H,new H],ta=new H,lu=new pa,Zr=new H,Jr=new H,$r=new H,Ms=new H,Ts=new H,er=new H,Cl=new H,cu=new H,uu=new H,tr=new H;function _h(o,e,n,a,r){for(let l=0,u=o.length-3;l<=u;l+=3){tr.fromArray(o,l);const f=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),d=e.dot(tr),h=n.dot(tr),m=a.dot(tr);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const JE=new pa,bl=new H,Ah=new H;class im{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):JE.setFromPoints(e).getCenter(a);let r=0;for(let l=0,u=e.length;l<u;l++)r=Math.max(r,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const n=bl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(bl,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(Ah)),this.expandByPoint(bl.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ha=new H,xh=new H,fu=new H,Cs=new H,yh=new H,du=new H,Eh=new H;let am=class{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ha)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ha.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ha.copy(this.origin).addScaledVector(this.direction,n),Ha.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){xh.copy(e).add(n).multiplyScalar(.5),fu.copy(n).sub(e).normalize(),Cs.copy(this.origin).sub(xh);const l=e.distanceTo(n)*.5,u=-this.direction.dot(fu),f=Cs.dot(this.direction),d=-Cs.dot(fu),h=Cs.lengthSq(),m=Math.abs(1-u*u);let g,v,_,y;if(m>0)if(g=u*d-f,v=u*f-d,y=l*m,g>=0)if(v>=-y)if(v<=y){const E=1/m;g*=E,v*=E,_=g*(g+u*v+2*f)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+f)),_=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+f)),_=-g*g+v*(v+2*d)+h;else v<=-y?(g=Math.max(0,-(-u*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),_=-g*g+v*(v+2*d)+h):v<=y?(g=0,v=Math.min(Math.max(-l,-d),l),_=v*(v+2*d)+h):(g=Math.max(0,-(u*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),_=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+f)),_=-g*g+v*(v+2*d)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(xh).addScaledVector(fu,v),_}intersectSphere(e,n){Ha.subVectors(e.center,this.origin);const a=Ha.dot(this.direction),r=Ha.dot(Ha)-a*a,l=e.radius*e.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(a=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(a=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),a>d||f>r)||((f>a||a!==a)&&(a=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,Ha)!==null}intersectTriangle(e,n,a,r,l){yh.subVectors(n,e),du.subVectors(a,e),Eh.crossVectors(yh,du);let u=this.direction.dot(Eh),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Cs.subVectors(this.origin,e);const d=f*this.direction.dot(du.crossVectors(Cs,du));if(d<0)return null;const h=f*this.direction.dot(yh.cross(Cs));if(h<0||d+h>u)return null;const m=-f*Cs.dot(Eh);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class pt{constructor(e,n,a,r,l,u,f,d,h,m,g,v,_,y,E,x){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,l,u,f,d,h,m,g,v,_,y,E,x)}set(e,n,a,r,l,u,f,d,h,m,g,v,_,y,E,x){const A=this.elements;return A[0]=e,A[4]=n,A[8]=a,A[12]=r,A[1]=l,A[5]=u,A[9]=f,A[13]=d,A[2]=h,A[6]=m,A[10]=g,A[14]=v,A[3]=_,A[7]=y,A[11]=E,A[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,r=1/eo.setFromMatrixColumn(e,0).length(),l=1/eo.setFromMatrixColumn(e,1).length(),u=1/eo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,_=u*g,y=f*m,E=f*g;n[0]=d*m,n[4]=-d*g,n[8]=h,n[1]=_+y*h,n[5]=v-E*h,n[9]=-f*d,n[2]=E-v*h,n[6]=y+_*h,n[10]=u*d}else if(e.order==="YXZ"){const v=d*m,_=d*g,y=h*m,E=h*g;n[0]=v+E*f,n[4]=y*f-_,n[8]=u*h,n[1]=u*g,n[5]=u*m,n[9]=-f,n[2]=_*f-y,n[6]=E+v*f,n[10]=u*d}else if(e.order==="ZXY"){const v=d*m,_=d*g,y=h*m,E=h*g;n[0]=v-E*f,n[4]=-u*g,n[8]=y+_*f,n[1]=_+y*f,n[5]=u*m,n[9]=E-v*f,n[2]=-u*h,n[6]=f,n[10]=u*d}else if(e.order==="ZYX"){const v=u*m,_=u*g,y=f*m,E=f*g;n[0]=d*m,n[4]=y*h-_,n[8]=v*h+E,n[1]=d*g,n[5]=E*h+v,n[9]=_*h-y,n[2]=-h,n[6]=f*d,n[10]=u*d}else if(e.order==="YZX"){const v=u*d,_=u*h,y=f*d,E=f*h;n[0]=d*m,n[4]=E-v*g,n[8]=y*g+_,n[1]=g,n[5]=u*m,n[9]=-f*m,n[2]=-h*m,n[6]=_*g+y,n[10]=v-E*g}else if(e.order==="XZY"){const v=u*d,_=u*h,y=f*d,E=f*h;n[0]=d*m,n[4]=-g,n[8]=h*m,n[1]=v*g+E,n[5]=u*m,n[9]=_*g-y,n[2]=y*g-_,n[6]=f*m,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,eM)}lookAt(e,n,a){const r=this.elements;return Ci.subVectors(e,n),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),bs.crossVectors(a,Ci),bs.lengthSq()===0&&(Math.abs(a.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),bs.crossVectors(a,Ci)),bs.normalize(),hu.crossVectors(Ci,bs),r[0]=bs.x,r[4]=hu.x,r[8]=Ci.x,r[1]=bs.y,r[5]=hu.y,r[9]=Ci.y,r[2]=bs.z,r[6]=hu.z,r[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,l=this.elements,u=a[0],f=a[4],d=a[8],h=a[12],m=a[1],g=a[5],v=a[9],_=a[13],y=a[2],E=a[6],x=a[10],A=a[14],T=a[3],w=a[7],D=a[11],b=a[15],L=r[0],R=r[4],P=r[8],C=r[12],U=r[1],N=r[5],k=r[9],X=r[13],W=r[2],Q=r[6],O=r[10],G=r[14],Z=r[3],re=r[7],he=r[11],z=r[15];return l[0]=u*L+f*U+d*W+h*Z,l[4]=u*R+f*N+d*Q+h*re,l[8]=u*P+f*k+d*O+h*he,l[12]=u*C+f*X+d*G+h*z,l[1]=m*L+g*U+v*W+_*Z,l[5]=m*R+g*N+v*Q+_*re,l[9]=m*P+g*k+v*O+_*he,l[13]=m*C+g*X+v*G+_*z,l[2]=y*L+E*U+x*W+A*Z,l[6]=y*R+E*N+x*Q+A*re,l[10]=y*P+E*k+x*O+A*he,l[14]=y*C+E*X+x*G+A*z,l[3]=T*L+w*U+D*W+b*Z,l[7]=T*R+w*N+D*Q+b*re,l[11]=T*P+w*k+D*O+b*he,l[15]=T*C+w*X+D*G+b*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],_=e[14],y=e[3],E=e[7],x=e[11],A=e[15],T=d*_-h*v,w=f*_-h*g,D=f*v-d*g,b=u*_-h*m,L=u*v-d*m,R=u*g-f*m;return n*(E*T-x*w+A*D)-a*(y*T-x*b+A*L)+r*(y*w-E*b+A*R)-l*(y*D-E*L+x*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],_=e[11],y=e[12],E=e[13],x=e[14],A=e[15],T=g*x*h-E*v*h+E*d*_-f*x*_-g*d*A+f*v*A,w=y*v*h-m*x*h-y*d*_+u*x*_+m*d*A-u*v*A,D=m*E*h-y*g*h+y*f*_-u*E*_-m*f*A+u*g*A,b=y*g*d-m*E*d-y*f*v+u*E*v+m*f*x-u*g*x,L=n*T+a*w+r*D+l*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=T*R,e[1]=(E*v*l-g*x*l-E*r*_+a*x*_+g*r*A-a*v*A)*R,e[2]=(f*x*l-E*d*l+E*r*h-a*x*h-f*r*A+a*d*A)*R,e[3]=(g*d*l-f*v*l-g*r*h+a*v*h+f*r*_-a*d*_)*R,e[4]=w*R,e[5]=(m*x*l-y*v*l+y*r*_-n*x*_-m*r*A+n*v*A)*R,e[6]=(y*d*l-u*x*l-y*r*h+n*x*h+u*r*A-n*d*A)*R,e[7]=(u*v*l-m*d*l+m*r*h-n*v*h-u*r*_+n*d*_)*R,e[8]=D*R,e[9]=(y*g*l-m*E*l-y*a*_+n*E*_+m*a*A-n*g*A)*R,e[10]=(u*E*l-y*f*l+y*a*h-n*E*h-u*a*A+n*f*A)*R,e[11]=(m*f*l-u*g*l-m*a*h+n*g*h+u*a*_-n*f*_)*R,e[12]=b*R,e[13]=(m*E*r-y*g*r+y*a*v-n*E*v-m*a*x+n*g*x)*R,e[14]=(y*f*r-u*E*r-y*a*d+n*E*d+u*a*x-n*f*x)*R,e[15]=(u*g*r-m*f*r+m*a*d-n*g*d-u*a*v+n*f*v)*R,this}scale(e){const n=this.elements,a=e.x,r=e.y,l=e.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+a,h*f-r*d,h*d+r*f,0,h*f+r*d,m*f+a,m*d-r*u,0,h*d-r*f,m*d+r*u,l*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,l,u){return this.set(1,a,l,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,l=n._x,u=n._y,f=n._z,d=n._w,h=l+l,m=u+u,g=f+f,v=l*h,_=l*m,y=l*g,E=u*m,x=u*g,A=f*g,T=d*h,w=d*m,D=d*g,b=a.x,L=a.y,R=a.z;return r[0]=(1-(E+A))*b,r[1]=(_+D)*b,r[2]=(y-w)*b,r[3]=0,r[4]=(_-D)*L,r[5]=(1-(v+A))*L,r[6]=(x+T)*L,r[7]=0,r[8]=(y+w)*R,r[9]=(x-T)*R,r[10]=(1-(v+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let l=eo.set(r[0],r[1],r[2]).length();const u=eo.set(r[4],r[5],r[6]).length(),f=eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),na.copy(this);const h=1/l,m=1/u,g=1/f;return na.elements[0]*=h,na.elements[1]*=h,na.elements[2]*=h,na.elements[4]*=m,na.elements[5]*=m,na.elements[6]*=m,na.elements[8]*=g,na.elements[9]*=g,na.elements[10]*=g,n.setFromRotationMatrix(na),a.x=l,a.y=u,a.z=f,this}makePerspective(e,n,a,r,l,u,f=ha,d=!1){const h=this.elements,m=2*l/(n-e),g=2*l/(a-r),v=(n+e)/(n-e),_=(a+r)/(a-r);let y,E;if(d)y=l/(u-l),E=u*l/(u-l);else if(f===ha)y=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===ku)y=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,r,l,u,f=ha,d=!1){const h=this.elements,m=2/(n-e),g=2/(a-r),v=-(n+e)/(n-e),_=-(a+r)/(a-r);let y,E;if(d)y=1/(u-l),E=u/(u-l);else if(f===ha)y=-2/(u-l),E=-(u+l)/(u-l);else if(f===ku)y=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const eo=new H,na=new pt,$E=new H(0,0,0),eM=new H(1,1,1),bs=new H,hu=new H,Ci=new H,Tv=new pt,Cv=new sn;class Aa{constructor(e=0,n=0,a=0,r=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,l=r[0],u=r[4],f=r[8],d=r[1],h=r[5],m=r[9],g=r[2],v=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,_),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cv.setFromEuler(this),this.setFromQuaternion(Cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class sA{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const bv=new H,to=new sn,Ga=new pt,pu=new H,Rl=new H,nM=new H,iM=new sn,Rv=new H(1,0,0),wv=new H(0,1,0),Dv=new H(0,0,1),Iv={type:"added"},aM={type:"removed"},no={type:"childadded",child:null},Mh={type:"childremoved",child:null};class In extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new H,n=new Aa,a=new sn,r=new H(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new dt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Rv,e)}rotateY(e){return this.rotateOnAxis(wv,e)}rotateZ(e){return this.rotateOnAxis(Dv,e)}translateOnAxis(e,n){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rv,e)}translateY(e){return this.translateOnAxis(wv,e)}translateZ(e){return this.translateOnAxis(Dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ga.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?pu.copy(e):pu.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ga.lookAt(Rl,pu,this.up):Ga.lookAt(pu,Rl,this.up),this.quaternion.setFromRotationMatrix(Ga),r&&(Ga.extractRotation(r.matrixWorld),to.setFromRotationMatrix(Ga),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iv),no.child=e,this.dispatchEvent(no),no.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aM),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iv),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));r.material=f}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(e.animations,d))}}if(n){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),_=u(e.animations),y=u(e.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),_.length>0&&(a.animations=_),y.length>0&&(a.nodes=y)}return a.object=r,a;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}In.DEFAULT_UP=new H(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ia=new H,Va=new H,Th=new H,ka=new H,io=new H,ao=new H,Uv=new H,Ch=new H,bh=new H,Rh=new H,wh=new hn,Dh=new hn,Ih=new hn;class aa{constructor(e=new H,n=new H,a=new H){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),ia.subVectors(e,n),r.cross(ia);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,n,a,r,l){ia.subVectors(r,n),Va.subVectors(a,n),Th.subVectors(e,n);const u=ia.dot(ia),f=ia.dot(Va),d=ia.dot(Th),h=Va.dot(Va),m=Va.dot(Th),g=u*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,_=(h*d-f*m)*v,y=(u*m-f*d)*v;return l.set(1-_-y,y,_)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,ka)===null?!1:ka.x>=0&&ka.y>=0&&ka.x+ka.y<=1}static getInterpolation(e,n,a,r,l,u,f,d){return this.getBarycoord(e,n,a,r,ka)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ka.x),d.addScaledVector(u,ka.y),d.addScaledVector(f,ka.z),d)}static getInterpolatedAttribute(e,n,a,r,l,u){return wh.setScalar(0),Dh.setScalar(0),Ih.setScalar(0),wh.fromBufferAttribute(e,n),Dh.fromBufferAttribute(e,a),Ih.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(wh,l.x),u.addScaledVector(Dh,l.y),u.addScaledVector(Ih,l.z),u}static isFrontFacing(e,n,a,r){return ia.subVectors(a,n),Va.subVectors(e,n),ia.cross(Va).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),Va.subVectors(this.a,this.b),ia.cross(Va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return aa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,l){return aa.getInterpolation(e,this.a,this.b,this.c,n,a,r,l)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,l=this.c;let u,f;io.subVectors(r,a),ao.subVectors(l,a),Ch.subVectors(e,a);const d=io.dot(Ch),h=ao.dot(Ch);if(d<=0&&h<=0)return n.copy(a);bh.subVectors(e,r);const m=io.dot(bh),g=ao.dot(bh);if(m>=0&&g<=m)return n.copy(r);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),n.copy(a).addScaledVector(io,u);Rh.subVectors(e,l);const _=io.dot(Rh),y=ao.dot(Rh);if(y>=0&&_<=y)return n.copy(l);const E=_*h-d*y;if(E<=0&&h>=0&&y<=0)return f=h/(h-y),n.copy(a).addScaledVector(ao,f);const x=m*y-_*g;if(x<=0&&g-m>=0&&_-y>=0)return Uv.subVectors(l,r),f=(g-m)/(g-m+(_-y)),n.copy(r).addScaledVector(Uv,f);const A=1/(x+E+v);return u=E*A,f=v*A,n.copy(a).addScaledVector(io,u).addScaledVector(ao,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},mu={h:0,s:0,l:0};function Uh(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Lt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=a,Ut.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=Ut.workingColorSpace){if(e=tm(e,1),n=Et(n,0,1),a=Et(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=Uh(u,l,e+1/3),this.g=Uh(u,l,e),this.b=Uh(u,l,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,n=ki){function a(l){l!==void 0&&parseFloat(l)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ki){const a=rA[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ki){return Ut.workingToColorSpace(Jn.copy(this),e),Math.round(Et(Jn.r*255,0,255))*65536+Math.round(Et(Jn.g*255,0,255))*256+Math.round(Et(Jn.b*255,0,255))}getHexString(e=ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.workingToColorSpace(Jn.copy(this),n);const a=Jn.r,r=Jn.g,l=Jn.b,u=Math.max(a,r,l),f=Math.min(a,r,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const g=u-f;switch(h=m<=.5?g/(u+f):g/(2-u-f),u){case a:d=(r-l)/g+(r<l?6:0);break;case r:d=(l-a)/g+2;break;case l:d=(a-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,n=Ut.workingColorSpace){return Ut.workingToColorSpace(Jn.copy(this),n),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=ki){Ut.workingToColorSpace(Jn.copy(this),e);const n=Jn.r,a=Jn.g,r=Jn.b;return e!==ki?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+n,Rs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Rs),e.getHSL(mu);const a=Fl(Rs.h,mu.h,n),r=Fl(Rs.s,mu.s,n),l=Fl(Rs.l,mu.l,n);return this.setHSL(a,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Lt;Lt.NAMES=rA;let sM=0;class $u extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=Bs,this.side=Sa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Vl,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(a.blending=this.blending),this.side!==Sa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Gl&&(a.blendSrc=this.blendSrc),this.blendDst!==Vl&&(a.blendDst=this.blendDst),this.blendEquation!==rr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(n){const l=r(e.textures),u=r(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dr extends $u{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qa=rM();function rM(){const o=new ArrayBuffer(4),e=new Float32Array(o),n=new Uint32Array(o),a=new Uint32Array(512),r=new Uint32Array(512);for(let d=0;d<256;++d){const h=d-127;h<-27?(a[d]=0,a[d|256]=32768,r[d]=24,r[d|256]=24):h<-14?(a[d]=1024>>-h-14,a[d|256]=1024>>-h-14|32768,r[d]=-h-1,r[d|256]=-h-1):h<=15?(a[d]=h+15<<10,a[d|256]=h+15<<10|32768,r[d]=13,r[d|256]=13):h<128?(a[d]=31744,a[d|256]=64512,r[d]=24,r[d|256]=24):(a[d]=31744,a[d|256]=64512,r[d]=13,r[d|256]=13)}const l=new Uint32Array(2048),u=new Uint32Array(64),f=new Uint32Array(64);for(let d=1;d<1024;++d){let h=d<<13,m=0;for(;(h&8388608)===0;)h<<=1,m-=8388608;h&=-8388609,m+=947912704,l[d]=h|m}for(let d=1024;d<2048;++d)l[d]=939524096+(d-1024<<13);for(let d=1;d<31;++d)u[d]=d<<23;u[31]=1199570944,u[32]=2147483648;for(let d=33;d<63;++d)u[d]=2147483648+(d-32<<23);u[63]=3347054592;for(let d=1;d<64;++d)d!==32&&(f[d]=1024);return{floatView:e,uint32View:n,baseTable:a,shiftTable:r,mantissaTable:l,exponentTable:u,offsetTable:f}}function oM(o){Math.abs(o)>65504&&ht("DataUtils.toHalfFloat(): Value out of range."),o=Et(o,-65504,65504),Qa.floatView[0]=o;const e=Qa.uint32View[0],n=e>>23&511;return Qa.baseTable[n]+((e&8388607)>>Qa.shiftTable[n])}function lM(o){const e=o>>10;return Qa.uint32View[0]=Qa.mantissaTable[Qa.offsetTable[e]+(o&1023)]+Qa.exponentTable[e],Qa.floatView[0]}class Yl{static toHalfFloat(e){return oM(e)}static fromHalfFloat(e){return lM(e)}}const Cn=new H,gu=new ke;let cM=0;class Qi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Sv,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)gu.fromBufferAttribute(this,n),gu.applyMatrix3(e),this.setXY(n,gu.x,gu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix3(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix4(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyNormalMatrix(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.transformDirection(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=ho(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=ni(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array),r=ni(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,l){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array),r=ni(r,this.array),l=ni(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sv&&(e.usage=this.usage),e}}class oA extends Qi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class lA extends Qi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class li extends Qi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let uM=0;const Vi=new pt,Lh=new In,so=new H,bi=new pa,wl=new pa,Fn=new H;class vi extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iA(e)?lA:oA)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new dt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,n,a){return Vi.makeTranslation(e,n,a),this.applyMatrix4(Vi),this}scale(e,n,a){return Vi.makeScale(e,n,a),this.applyMatrix4(Vi),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new li(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];bi.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new im);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const a=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];wl.setFromBufferAttribute(f),this.morphTargetsRelative?(Fn.addVectors(bi.min,wl.min),bi.expandByPoint(Fn),Fn.addVectors(bi.max,wl.max),bi.expandByPoint(Fn)):(bi.expandByPoint(wl.min),bi.expandByPoint(wl.max))}bi.getCenter(a);let r=0;for(let l=0,u=e.count;l<u;l++)Fn.fromBufferAttribute(e,l),r=Math.max(r,a.distanceToSquared(Fn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Fn.fromBufferAttribute(f,h),d&&(so.fromBufferAttribute(e,h),Fn.add(so)),r=Math.max(r,a.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let P=0;P<a.count;P++)f[P]=new H,d[P]=new H;const h=new H,m=new H,g=new H,v=new ke,_=new ke,y=new ke,E=new H,x=new H;function A(P,C,U){h.fromBufferAttribute(a,P),m.fromBufferAttribute(a,C),g.fromBufferAttribute(a,U),v.fromBufferAttribute(l,P),_.fromBufferAttribute(l,C),y.fromBufferAttribute(l,U),m.sub(h),g.sub(h),_.sub(v),y.sub(v);const N=1/(_.x*y.y-y.x*_.y);isFinite(N)&&(E.copy(m).multiplyScalar(y.y).addScaledVector(g,-_.y).multiplyScalar(N),x.copy(g).multiplyScalar(_.x).addScaledVector(m,-y.x).multiplyScalar(N),f[P].add(E),f[C].add(E),f[U].add(E),d[P].add(x),d[C].add(x),d[U].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,C=T.length;P<C;++P){const U=T[P],N=U.start,k=U.count;for(let X=N,W=N+k;X<W;X+=3)A(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new H,D=new H,b=new H,L=new H;function R(P){b.fromBufferAttribute(r,P),L.copy(b);const C=f[P];w.copy(C),w.sub(b.multiplyScalar(b.dot(C))).normalize(),D.crossVectors(L,C);const N=D.dot(d[P])<0?-1:1;u.setXYZW(P,w.x,w.y,w.z,N)}for(let P=0,C=T.length;P<C;++P){const U=T[P],N=U.start,k=U.count;for(let X=N,W=N+k;X<W;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,_=a.count;v<_;v++)a.setXYZ(v,0,0,0);const r=new H,l=new H,u=new H,f=new H,d=new H,h=new H,m=new H,g=new H;if(e)for(let v=0,_=e.count;v<_;v+=3){const y=e.getX(v+0),E=e.getX(v+1),x=e.getX(v+2);r.fromBufferAttribute(n,y),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),m.subVectors(u,l),g.subVectors(r,l),m.cross(g),f.fromBufferAttribute(a,y),d.fromBufferAttribute(a,E),h.fromBufferAttribute(a,x),f.add(m),d.add(m),h.add(m),a.setXYZ(y,f.x,f.y,f.z),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(x,h.x,h.y,h.z)}else for(let v=0,_=n.count;v<_;v+=3)r.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),m.subVectors(u,l),g.subVectors(r,l),m.cross(g),a.setXYZ(v+0,m.x,m.y,m.z),a.setXYZ(v+1,m.x,m.y,m.z),a.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Fn.fromBufferAttribute(e,n),Fn.normalize(),e.setXYZ(n,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(d.length*m);let _=0,y=0;for(let E=0,x=d.length;E<x;E++){f.isInterleavedBufferAttribute?_=d[E]*f.data.stride+f.offset:_=d[E]*m;for(let A=0;A<m;A++)v[y++]=h[_++]}return new Qi(v,m,g)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vi,a=this.index.array,r=this.attributes;for(const f in r){const d=r[f],h=e(d,a);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],_=e(v,a);d.push(_)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const h=a[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const _=h[g];m.push(_.toJSON(e.data))}m.length>0&&(r[d]=m,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(n))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,_=g.length;v<_;v++)m.push(g[v].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lv=new pt,nr=new am,Su=new im,Bv=new H,vu=new H,_u=new H,Au=new H,Bh=new H,xu=new H,Fv=new H,yu=new H;class _n extends In{constructor(e=new vi,n=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(l&&f){xu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(Bh.fromBufferAttribute(g,e),u?xu.addScaledVector(Bh,m):xu.addScaledVector(Bh.sub(n),m))}n.add(xu)}return n}raycast(e,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere),Su.applyMatrix4(l),nr.copy(e.ray).recast(e.near),!(Su.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Su,Bv)===null||nr.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(Lv.copy(l).invert(),nr.copy(e.ray).applyMatrix4(Lv),!(a.boundingBox!==null&&nr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,a){let r;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(u))for(let y=0,E=v.length;y<E;y++){const x=v[y],A=u[x.materialIndex],T=Math.max(x.start,_.start),w=Math.min(f.count,Math.min(x.start+x.count,_.start+_.count));for(let D=T,b=w;D<b;D+=3){const L=f.getX(D),R=f.getX(D+1),P=f.getX(D+2);r=Eu(this,A,e,a,h,m,g,L,R,P),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,_.start),E=Math.min(f.count,_.start+_.count);for(let x=y,A=E;x<A;x+=3){const T=f.getX(x),w=f.getX(x+1),D=f.getX(x+2);r=Eu(this,u,e,a,h,m,g,T,w,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let y=0,E=v.length;y<E;y++){const x=v[y],A=u[x.materialIndex],T=Math.max(x.start,_.start),w=Math.min(d.count,Math.min(x.start+x.count,_.start+_.count));for(let D=T,b=w;D<b;D+=3){const L=D,R=D+1,P=D+2;r=Eu(this,A,e,a,h,m,g,L,R,P),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,_.start),E=Math.min(d.count,_.start+_.count);for(let x=y,A=E;x<A;x+=3){const T=x,w=x+1,D=x+2;r=Eu(this,u,e,a,h,m,g,T,w,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function fM(o,e,n,a,r,l,u,f){let d;if(e.side===Si?d=a.intersectTriangle(u,l,r,!0,f):d=a.intersectTriangle(r,l,u,e.side===Sa,f),d===null)return null;yu.copy(f),yu.applyMatrix4(o.matrixWorld);const h=n.ray.origin.distanceTo(yu);return h<n.near||h>n.far?null:{distance:h,point:yu.clone(),object:o}}function Eu(o,e,n,a,r,l,u,f,d,h){o.getVertexPosition(f,vu),o.getVertexPosition(d,_u),o.getVertexPosition(h,Au);const m=fM(o,e,n,a,vu,_u,Au,Fv);if(m){const g=new H;aa.getBarycoord(Fv,vu,_u,Au,g),r&&(m.uv=aa.getInterpolatedAttribute(r,f,d,h,g,new ke)),l&&(m.uv1=aa.getInterpolatedAttribute(l,f,d,h,g,new ke)),u&&(m.normal=aa.getInterpolatedAttribute(u,f,d,h,g,new H),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new H,materialIndex:0};aa.getNormal(vu,_u,Au,v.normal),m.face=v,m.barycoord=g}return m}class Do extends vi{constructor(e=1,n=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,_=0;y("z","y","x",-1,-1,a,n,e,u,l,0),y("z","y","x",1,-1,a,n,-e,u,l,1),y("x","z","y",1,1,e,a,n,r,u,2),y("x","z","y",1,-1,e,a,-n,r,u,3),y("x","y","z",1,-1,e,n,a,r,l,4),y("x","y","z",-1,-1,e,n,-a,r,l,5),this.setIndex(d),this.setAttribute("position",new li(h,3)),this.setAttribute("normal",new li(m,3)),this.setAttribute("uv",new li(g,2));function y(E,x,A,T,w,D,b,L,R,P,C){const U=D/R,N=b/P,k=D/2,X=b/2,W=L/2,Q=R+1,O=P+1;let G=0,Z=0;const re=new H;for(let he=0;he<O;he++){const z=he*N-X;for(let ie=0;ie<Q;ie++){const pe=ie*U-k;re[E]=pe*T,re[x]=z*w,re[A]=W,h.push(re.x,re.y,re.z),re[E]=0,re[x]=0,re[A]=L>0?1:-1,m.push(re.x,re.y,re.z),g.push(ie/R),g.push(1-he/P),G+=1}}for(let he=0;he<P;he++)for(let z=0;z<R;z++){const ie=v+z+Q*he,pe=v+z+Q*(he+1),Me=v+(z+1)+Q*(he+1),we=v+(z+1)+Q*he;d.push(ie,pe,we),d.push(pe,Me,we),Z+=6}f.addGroup(_,Z,C),_+=Z,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function ii(o){const e={};for(let n=0;n<o.length;n++){const a=To(o[n]);for(const r in a)e[r]=a[r]}return e}function dM(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function cA(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const hM={clone:To,merge:ii};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends $u{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class uA extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ha,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ws=new H,Pv=new ke,Ov=new ke;class wi extends uA{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ql*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,n){return this.getViewBounds(e,Pv,Ov),n.subVectors(Ov,Pv)}setViewOffset(e,n,a,r,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bl*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*r/d,n-=u.offsetY*a/h,r*=u.width/d,a*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ro=-90,oo=1;class gM extends In{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(ro,oo,e,n);r.layers=this.layers,this.add(r);const l=new wi(ro,oo,e,n);l.layers=this.layers,this.add(l);const u=new wi(ro,oo,e,n);u.layers=this.layers,this.add(u);const f=new wi(ro,oo,e,n);f.layers=this.layers,this.add(f);const d=new wi(ro,oo,e,n);d.layers=this.layers,this.add(d);const h=new wi(ro,oo,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,l,u,f,d]=n;for(const h of n)this.remove(h);if(e===ha)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ku)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,l),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,f),e.setRenderTarget(a,3,r),e.render(n,d),e.setRenderTarget(a,4,r),e.render(n,h),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,r),e.render(n,m),e.setRenderTarget(g,v,_),e.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class fA extends oi{constructor(e=[],n=fr,a,r,l,u,f,d,h,m){super(e,n,a,r,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dA extends sa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new fA(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Do(5,5,5),l=new ci({name:"CubemapFromEquirect",uniforms:To(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Si,blending:Ka});l.uniforms.tEquirect.value=n;const u=new _n(r,l),f=n.minFilter;return n.minFilter===lr&&(n.minFilter=ei),new gM(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(l)}}class Mu extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,a),A=this._getHandJoint(h,E);x!==null&&(A.matrix.fromArray(x.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=x.radius),A.visible=x!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),_=.02,y=.005;h.inputState.pinching&&v>_+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=_-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Mu;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class hA extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Wa extends oi{constructor(e=null,n=1,a=1,r,l,u,f,d,h=Qn,m=Qn,g,v){super(null,u,f,d,h,m,r,l,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vM extends Qi{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ph=new H,_M=new H,AM=new dt;class qa{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=Ph.subVectors(a,n).cross(_M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Ph),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||AM.getNormalMatrix(e),r=this.coplanarPoint(Ph).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new im,xM=new ke(.5,.5),Tu=new H;class pA{constructor(e=new qa,n=new qa,a=new qa,r=new qa,l=new qa,u=new qa){this.planes=[e,n,a,r,l,u]}set(e,n,a,r,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ha,a=!1){const r=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],g=l[5],v=l[6],_=l[7],y=l[8],E=l[9],x=l[10],A=l[11],T=l[12],w=l[13],D=l[14],b=l[15];if(r[0].setComponents(h-u,_-m,A-y,b-T).normalize(),r[1].setComponents(h+u,_+m,A+y,b+T).normalize(),r[2].setComponents(h+f,_+g,A+E,b+w).normalize(),r[3].setComponents(h-f,_-g,A-E,b-w).normalize(),a)r[4].setComponents(d,v,x,D).normalize(),r[5].setComponents(h-d,_-v,A-x,b-D).normalize();else if(r[4].setComponents(h-d,_-v,A-x,b-D).normalize(),n===ha)r[5].setComponents(h+d,_+v,A+x,b+D).normalize();else if(n===ku)r[5].setComponents(d,v,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);const n=xM.distanceTo(e.center);return ir.radius=.7071067811865476+n,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Tu.x=r.normal.x>0?e.max.x:e.min.x,Tu.y=r.normal.y>0?e.max.y:e.min.y,Tu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Co extends oi{constructor(e,n,a=si,r,l,u,f=Qn,d=Qn,h,m=_a,g=1){if(m!==_a&&m!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,r,l,u,f,d,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yM extends Co{constructor(e,n=si,a=fr,r,l,u=Qn,f=Qn,d,h=_a){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,n,a,r,l,u,f,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mA extends oi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ql extends vi{constructor(e=1,n=1,a=1,r=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const h=this;r=Math.floor(r),l=Math.floor(l);const m=[],g=[],v=[],_=[];let y=0;const E=[],x=a/2;let A=0;T(),u===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(v,3)),this.setAttribute("uv",new li(_,2));function T(){const D=new H,b=new H;let L=0;const R=(n-e)/a;for(let P=0;P<=l;P++){const C=[],U=P/l,N=U*(n-e)+e;for(let k=0;k<=r;k++){const X=k/r,W=X*d+f,Q=Math.sin(W),O=Math.cos(W);b.x=N*Q,b.y=-U*a+x,b.z=N*O,g.push(b.x,b.y,b.z),D.set(Q,R,O).normalize(),v.push(D.x,D.y,D.z),_.push(X,1-U),C.push(y++)}E.push(C)}for(let P=0;P<r;P++)for(let C=0;C<l;C++){const U=E[C][P],N=E[C+1][P],k=E[C+1][P+1],X=E[C][P+1];(e>0||C!==0)&&(m.push(U,N,X),L+=3),(n>0||C!==l-1)&&(m.push(N,k,X),L+=3)}h.addGroup(A,L,0),A+=L}function w(D){const b=y,L=new ke,R=new H;let P=0;const C=D===!0?e:n,U=D===!0?1:-1;for(let k=1;k<=r;k++)g.push(0,x*U,0),v.push(0,U,0),_.push(.5,.5),y++;const N=y;for(let k=0;k<=r;k++){const W=k/r*d+f,Q=Math.cos(W),O=Math.sin(W);R.x=C*O,R.y=x*U,R.z=C*Q,g.push(R.x,R.y,R.z),v.push(0,U,0),L.x=Q*.5+.5,L.y=O*.5*U+.5,_.push(L.x,L.y),y++}for(let k=0;k<r;k++){const X=b+k,W=N+k;D===!0?m.push(W,W+1,X):m.push(W+1,W,X),P+=3}h.addGroup(A,P,D===!0?1:2),A+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sm extends Ql{constructor(e=1,n=1,a=32,r=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,a,r,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:a,heightSegments:r,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new sm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends vi{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const l=e/2,u=n/2,f=Math.floor(a),d=Math.floor(r),h=f+1,m=d+1,g=e/f,v=n/d,_=[],y=[],E=[],x=[];for(let A=0;A<m;A++){const T=A*v-u;for(let w=0;w<h;w++){const D=w*g-l;y.push(D,-T,0),E.push(0,0,1),x.push(w/f),x.push(1-A/d)}}for(let A=0;A<d;A++)for(let T=0;T<f;T++){const w=T+h*A,D=T+h*(A+1),b=T+1+h*(A+1),L=T+1+h*A;_.push(w,D,L),_.push(D,b,L)}this.setIndex(_),this.setAttribute("position",new li(y,3)),this.setAttribute("normal",new li(E,3)),this.setAttribute("uv",new li(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wu extends vi{constructor(e=1,n=32,a=16,r=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let h=0;const m=[],g=new H,v=new H,_=[],y=[],E=[],x=[];for(let A=0;A<=a;A++){const T=[],w=A/a;let D=0;A===0&&u===0?D=.5/n:A===a&&d===Math.PI&&(D=-.5/n);for(let b=0;b<=n;b++){const L=b/n;g.x=-e*Math.cos(r+L*l)*Math.sin(u+w*f),g.y=e*Math.cos(u+w*f),g.z=e*Math.sin(r+L*l)*Math.sin(u+w*f),y.push(g.x,g.y,g.z),v.copy(g).normalize(),E.push(v.x,v.y,v.z),x.push(L+D,1-w),T.push(h++)}m.push(T)}for(let A=0;A<a;A++)for(let T=0;T<n;T++){const w=m[A][T+1],D=m[A][T],b=m[A+1][T],L=m[A+1][T+1];(A!==0||u>0)&&_.push(w,D,L),(A!==a-1||d<Math.PI)&&_.push(D,b,L)}this.setIndex(_),this.setAttribute("position",new li(y,3)),this.setAttribute("normal",new li(E,3)),this.setAttribute("uv",new li(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class EM extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MM extends $u{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TM extends $u{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ef extends uA{constructor(e=-1,n=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class CM extends vi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class bM extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qu{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Et(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class RM extends Fs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Nv(o,e,n,a){const r=wM(a);switch(n){case eA:return o*e;case nA:return o*e/r.components*r.byteLength;case Zu:return o*e/r.components*r.byteLength;case Eo:return o*e*2/r.components*r.byteLength;case Jp:return o*e*2/r.components*r.byteLength;case tA:return o*e*3/r.components*r.byteLength;case ri:return o*e*4/r.components*r.byteLength;case go:return o*e*4/r.components*r.byteLength;case Ou:case Nu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:case pp:return Math.max(o,16)*Math.max(e,8)/4;case fp:case hp:return Math.max(o,8)*Math.max(e,8)/2;case mp:case gp:case vp:case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sp:case Ap:case xp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Up:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Pp:case Op:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*16;case zp:case Hp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gp:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wM(o){switch(o){case Di:case K_:return{byteLength:1,components:1};case kl:case Z_:case va:return{byteLength:2,components:1};case Kp:case Zp:return{byteLength:2,components:4};case si:case jp:case Yi:return{byteLength:4,components:1};case J_:case $_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);function gA(){let o=null,e=!1,n=null,a=null;function r(l,u){n(l,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function DM(o){const e=new WeakMap;function n(f,d){const h=f.array,m=f.usage,g=h.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,h,m),f.onUploadCallback();let _;if(h instanceof Float32Array)_=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=o.HALF_FLOAT:_=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=o.SHORT;else if(h instanceof Uint32Array)_=o.UNSIGNED_INT;else if(h instanceof Int32Array)_=o.INT;else if(h instanceof Int8Array)_=o.BYTE;else if(h instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,h){const m=d.array,g=d.updateRanges;if(o.bindBuffer(h,f),g.length===0)o.bufferSubData(h,0,m);else{g.sort((_,y)=>_.start-y.start);let v=0;for(let _=1;_<g.length;_++){const y=g[v],E=g[_];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++v,g[v]=E)}g.length=v+1;for(let _=0,y=g.length;_<y;_++){const E=g[_];o.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(o.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,d),h.version=f.version}}return{get:r,remove:l,update:u}}var IM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",lT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ST=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ET=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_C=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$C=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:IM,alphahash_pars_fragment:UM,alphamap_fragment:LM,alphamap_pars_fragment:BM,alphatest_fragment:FM,alphatest_pars_fragment:PM,aomap_fragment:OM,aomap_pars_fragment:NM,batching_pars_vertex:zM,batching_vertex:HM,begin_vertex:GM,beginnormal_vertex:VM,bsdfs:kM,iridescence_fragment:XM,bumpmap_pars_fragment:WM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:jM,color_fragment:KM,color_pars_fragment:ZM,color_pars_vertex:JM,color_vertex:$M,common:eT,cube_uv_reflection_fragment:tT,defaultnormal_vertex:nT,displacementmap_pars_vertex:iT,displacementmap_vertex:aT,emissivemap_fragment:sT,emissivemap_pars_fragment:rT,colorspace_fragment:oT,colorspace_pars_fragment:lT,envmap_fragment:cT,envmap_common_pars_fragment:uT,envmap_pars_fragment:fT,envmap_pars_vertex:dT,envmap_physical_pars_fragment:ET,envmap_vertex:hT,fog_vertex:pT,fog_pars_vertex:mT,fog_fragment:gT,fog_pars_fragment:ST,gradientmap_pars_fragment:vT,lightmap_pars_fragment:_T,lights_lambert_fragment:AT,lights_lambert_pars_fragment:xT,lights_pars_begin:yT,lights_toon_fragment:MT,lights_toon_pars_fragment:TT,lights_phong_fragment:CT,lights_phong_pars_fragment:bT,lights_physical_fragment:RT,lights_physical_pars_fragment:wT,lights_fragment_begin:DT,lights_fragment_maps:IT,lights_fragment_end:UT,logdepthbuf_fragment:LT,logdepthbuf_pars_fragment:BT,logdepthbuf_pars_vertex:FT,logdepthbuf_vertex:PT,map_fragment:OT,map_pars_fragment:NT,map_particle_fragment:zT,map_particle_pars_fragment:HT,metalnessmap_fragment:GT,metalnessmap_pars_fragment:VT,morphinstance_vertex:kT,morphcolor_vertex:XT,morphnormal_vertex:WT,morphtarget_pars_vertex:qT,morphtarget_vertex:YT,normal_fragment_begin:QT,normal_fragment_maps:jT,normal_pars_fragment:KT,normal_pars_vertex:ZT,normal_vertex:JT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:eC,clearcoat_normal_fragment_maps:tC,clearcoat_pars_fragment:nC,iridescence_pars_fragment:iC,opaque_fragment:aC,packing:sC,premultiplied_alpha_fragment:rC,project_vertex:oC,dithering_fragment:lC,dithering_pars_fragment:cC,roughnessmap_fragment:uC,roughnessmap_pars_fragment:fC,shadowmap_pars_fragment:dC,shadowmap_pars_vertex:hC,shadowmap_vertex:pC,shadowmask_pars_fragment:mC,skinbase_vertex:gC,skinning_pars_vertex:SC,skinning_vertex:vC,skinnormal_vertex:_C,specularmap_fragment:AC,specularmap_pars_fragment:xC,tonemapping_fragment:yC,tonemapping_pars_fragment:EC,transmission_fragment:MC,transmission_pars_fragment:TC,uv_pars_fragment:CC,uv_pars_vertex:bC,uv_vertex:RC,worldpos_vertex:wC,background_vert:DC,background_frag:IC,backgroundCube_vert:UC,backgroundCube_frag:LC,cube_vert:BC,cube_frag:FC,depth_vert:PC,depth_frag:OC,distance_vert:NC,distance_frag:zC,equirect_vert:HC,equirect_frag:GC,linedashed_vert:VC,linedashed_frag:kC,meshbasic_vert:XC,meshbasic_frag:WC,meshlambert_vert:qC,meshlambert_frag:YC,meshmatcap_vert:QC,meshmatcap_frag:jC,meshnormal_vert:KC,meshnormal_frag:ZC,meshphong_vert:JC,meshphong_frag:$C,meshphysical_vert:eb,meshphysical_frag:tb,meshtoon_vert:nb,meshtoon_frag:ib,points_vert:ab,points_frag:sb,shadow_vert:rb,shadow_frag:ob,sprite_vert:lb,sprite_frag:cb},Ve={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},da={basic:{uniforms:ii([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ii([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ii([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ii([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ii([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ii([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ii([Ve.points,Ve.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ii([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ii([Ve.common,Ve.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ii([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ii([Ve.sprite,Ve.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:ii([Ve.common,Ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:ii([Ve.lights,Ve.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};da.physical={uniforms:ii([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Cu={r:0,b:0,g:0},ar=new Aa,ub=new pt;function fb(o,e,n,a,r,l,u){const f=new Lt(0);let d=l===!0?0:1,h,m,g=null,v=0,_=null;function y(w){let D=w.isScene===!0?w.background:null;return D&&D.isTexture&&(D=(w.backgroundBlurriness>0?n:e).get(D)),D}function E(w){let D=!1;const b=y(w);b===null?A(f,d):b&&b.isColor&&(A(b,1),D=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?a.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(w,D){const b=y(D);b&&(b.isCubeTexture||b.mapping===Ku)?(m===void 0&&(m=new _n(new Do(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:To(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ar.copy(D.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(ub.makeRotationFromEuler(ar)),m.material.toneMapped=Ut.getTransfer(b.colorSpace)!==jt,(g!==b||v!==b.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,g=b,v=b.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new _n(new bo(2,2),new ci({name:"BackgroundMaterial",uniforms:To(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:Sa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Ut.getTransfer(b.colorSpace)!==jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||v!==b.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,g=b,v=b.version,_=o.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function A(w,D){w.getRGB(Cu,cA(o)),a.buffers.color.setClear(Cu.r,Cu.g,Cu.b,D,u)}function T(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,D=1){f.set(w),d=D,A(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,A(f,d)},render:E,addToRenderList:x,dispose:T}}function db(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,u=!1;function f(U,N,k,X,W){let Q=!1;const O=g(X,k,N);l!==O&&(l=O,h(l.object)),Q=_(U,X,k,W),Q&&y(U,X,k,W),W!==null&&e.update(W,o.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,D(U,N,k,X),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return o.createVertexArray()}function h(U){return o.bindVertexArray(U)}function m(U){return o.deleteVertexArray(U)}function g(U,N,k){const X=k.wireframe===!0;let W=a[U.id];W===void 0&&(W={},a[U.id]=W);let Q=W[N.id];Q===void 0&&(Q={},W[N.id]=Q);let O=Q[X];return O===void 0&&(O=v(d()),Q[X]=O),O}function v(U){const N=[],k=[],X=[];for(let W=0;W<n;W++)N[W]=0,k[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:X,object:U,attributes:{},index:null}}function _(U,N,k,X){const W=l.attributes,Q=N.attributes;let O=0;const G=k.getAttributes();for(const Z in G)if(G[Z].location>=0){const he=W[Z];let z=Q[Z];if(z===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),he===void 0||he.attribute!==z||z&&he.data!==z.data)return!0;O++}return l.attributesNum!==O||l.index!==X}function y(U,N,k,X){const W={},Q=N.attributes;let O=0;const G=k.getAttributes();for(const Z in G)if(G[Z].location>=0){let he=Q[Z];he===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));const z={};z.attribute=he,he&&he.data&&(z.data=he.data),W[Z]=z,O++}l.attributes=W,l.attributesNum=O,l.index=X}function E(){const U=l.newAttributes;for(let N=0,k=U.length;N<k;N++)U[N]=0}function x(U){A(U,0)}function A(U,N){const k=l.newAttributes,X=l.enabledAttributes,W=l.attributeDivisors;k[U]=1,X[U]===0&&(o.enableVertexAttribArray(U),X[U]=1),W[U]!==N&&(o.vertexAttribDivisor(U,N),W[U]=N)}function T(){const U=l.newAttributes,N=l.enabledAttributes;for(let k=0,X=N.length;k<X;k++)N[k]!==U[k]&&(o.disableVertexAttribArray(k),N[k]=0)}function w(U,N,k,X,W,Q,O){O===!0?o.vertexAttribIPointer(U,N,k,W,Q):o.vertexAttribPointer(U,N,k,X,W,Q)}function D(U,N,k,X){E();const W=X.attributes,Q=k.getAttributes(),O=N.defaultAttributeValues;for(const G in Q){const Z=Q[G];if(Z.location>=0){let re=W[G];if(re===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){const he=re.normalized,z=re.itemSize,ie=e.get(re);if(ie===void 0)continue;const pe=ie.buffer,Me=ie.type,we=ie.bytesPerElement,$=Me===o.INT||Me===o.UNSIGNED_INT||re.gpuType===jp;if(re.isInterleavedBufferAttribute){const ce=re.data,be=ce.stride,Fe=re.offset;if(ce.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Z.locationSize;Ue++)A(Z.location+Ue,ce.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ue=0;Ue<Z.locationSize;Ue++)x(Z.location+Ue);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let Ue=0;Ue<Z.locationSize;Ue++)w(Z.location+Ue,z/Z.locationSize,Me,he,be*we,(Fe+z/Z.locationSize*Ue)*we,$)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)A(Z.location+ce,re.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<Z.locationSize;ce++)x(Z.location+ce);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let ce=0;ce<Z.locationSize;ce++)w(Z.location+ce,z/Z.locationSize,Me,he,z*we,z/Z.locationSize*ce*we,$)}}else if(O!==void 0){const he=O[G];if(he!==void 0)switch(he.length){case 2:o.vertexAttrib2fv(Z.location,he);break;case 3:o.vertexAttrib3fv(Z.location,he);break;case 4:o.vertexAttrib4fv(Z.location,he);break;default:o.vertexAttrib1fv(Z.location,he)}}}}T()}function b(){P();for(const U in a){const N=a[U];for(const k in N){const X=N[k];for(const W in X)m(X[W].object),delete X[W];delete N[k]}delete a[U]}}function L(U){if(a[U.id]===void 0)return;const N=a[U.id];for(const k in N){const X=N[k];for(const W in X)m(X[W].object),delete X[W];delete N[k]}delete a[U.id]}function R(U){for(const N in a){const k=a[N];if(k[U.id]===void 0)continue;const X=k[U.id];for(const W in X)m(X[W].object),delete X[W];delete k[U.id]}}function P(){C(),u=!0,l!==r&&(l=r,h(l.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:P,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:x,disableUnusedAttributes:T}}function hb(o,e,n){let a;function r(h){a=h}function l(h,m){o.drawArrays(a,h,m),n.update(m,a,1)}function u(h,m,g){g!==0&&(o.drawArraysInstanced(a,h,m,g),n.update(m,a,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,g);let _=0;for(let y=0;y<g;y++)_+=m[y];n.update(_,a,1)}function d(h,m,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<h.length;y++)u(h[y],m[y],v[y]);else{_.multiDrawArraysInstancedWEBGL(a,h,0,m,0,v,0,g);let y=0;for(let E=0;E<g;E++)y+=m[E]*v[E];n.update(y,a,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function pb(o,e,n,a){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(R){return!(R!==ri&&a.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(R){const P=R===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Di&&a.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yi&&!P)}function d(R){if(R==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const m=d(h);m!==h&&(ht("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),A=o.getParameter(o.MAX_VERTEX_ATTRIBS),T=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),b=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:_,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:x,maxAttributes:A,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:D,maxSamples:b,samples:L}}function mb(o){const e=this;let n=null,a=0,r=!1,l=!1;const u=new qa,f=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const _=g.length!==0||v||a!==0||r;return r=v,a=g.length,_},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=m(g,v,0)},this.setState=function(g,v,_){const y=g.clippingPlanes,E=g.clipIntersection,x=g.clipShadows,A=o.get(g);if(!r||y===null||y.length===0||l&&!x)l?m(null):h();else{const T=l?0:a,w=T*4;let D=A.clippingState||null;d.value=D,D=m(y,v,w,_);for(let b=0;b!==w;++b)D[b]=n[b];A.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function m(g,v,_,y){const E=g!==null?g.length:0;let x=null;if(E!==0){if(x=d.value,y!==!0||x===null){const A=_+E*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(x===null||x.length<A)&&(x=new Float32Array(A));for(let w=0,D=_;w!==E;++w,D+=4)u.copy(g[w]).applyMatrix4(T,f),u.normal.toArray(x,D),x[D+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function gb(o){let e=new WeakMap;function n(u,f){return f===op?u.mapping=fr:f===lp&&(u.mapping=yo),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===op||f===lp)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new dA(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),n(h.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const Us=4,zv=[.125,.215,.35,.446,.526,.582],or=20,Sb=256,Dl=new ef,Hv=new Lt;let Oh=null,Nh=0,zh=0,Hh=!1;const vb=new H;class Gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,r=100,l={}){const{size:u=256,position:f=vb}=l;Oh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,r,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Nh,zh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fr||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:va,format:ri,colorSpace:Mo,depthBuffer:!1},r=Vv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vv(e,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_b(l)),this._blurMaterial=xb(l,e,n),this._ggxMaterial=Ab(l,e,n)}return r}_compileMaterial(e){const n=new _n(new vi,e);this._renderer.compile(n,Dl)}_sceneToCubeUV(e,n,a,r,l){const d=new wi(90,1,n,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(Hv),g.toneMapping=ga,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Do,new dr({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let A=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,A=!0):(x.color.copy(Hv),A=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(d.up.set(0,h[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[w],l.y,l.z)):D===1?(d.up.set(0,0,h[w]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[w],l.z)):(d.up.set(0,h[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[w]));const b=this._cubeSize;lo(r,D*b,w>2?b:0,b,b),g.setRenderTarget(r),A&&g.render(E,d),g.render(e,d)}g.toneMapping=_,g.autoClear=v,e.background=T}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===fr||e.mapping===yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const l=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;lo(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,Dl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=a}_applyGGXFilter(e,n,a){const r=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const d=u.uniforms,h=a/(this._lodMeshes.length-1),m=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),v=0+h*1.25,_=g*v,{_lodMax:y}=this,E=this._sizeLods[a],x=3*E*(a>y-Us?a-y+Us:0),A=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=y-n,lo(l,x,A,3*E,2*E),r.setRenderTarget(l),r.render(f,Dl),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=y-a,lo(e,x,A,3*E,2*E),r.setRenderTarget(e),r.render(f,Dl)}_blur(e,n,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",l),this._halfBlur(u,e,a,a,r,"longitudinal",l)}_halfBlur(e,n,a,r,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[r];g.material=h;const v=h.uniforms,_=this._sizeLods[a]-1,y=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*or-1),E=l/y,x=isFinite(l)?1+Math.floor(m*E):or;x>or&&ht(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${or}`);const A=[];let T=0;for(let R=0;R<or;++R){const P=R/E,C=Math.exp(-P*P/2);A.push(C),R===0?T+=C:R<x&&(T+=2*C)}for(let R=0;R<A.length;R++)A[R]=A[R]/T;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=A,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=y,v.mipInt.value=w-a;const D=this._sizeLods[r],b=3*D*(r>w-Us?r-w+Us:0),L=4*(this._cubeSize-D);lo(n,b,L,3*D,2*D),d.setRenderTarget(n),d.render(g,Dl)}}function _b(o){const e=[],n=[],a=[];let r=o;const l=o-Us+1+zv.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);e.push(f);let d=1/f;u>o-Us?d=zv[u-o+Us-1]:u===0&&(d=0),n.push(d);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,y=6,E=3,x=2,A=1,T=new Float32Array(E*y*_),w=new Float32Array(x*y*_),D=new Float32Array(A*y*_);for(let L=0;L<_;L++){const R=L%3*2/3-1,P=L>2?0:-1,C=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];T.set(C,E*y*L),w.set(v,x*y*L);const U=[L,L,L,L,L,L];D.set(U,A*y*L)}const b=new vi;b.setAttribute("position",new Qi(T,E)),b.setAttribute("uv",new Qi(w,x)),b.setAttribute("faceIndex",new Qi(D,A)),a.push(new _n(b,null)),r>Us&&r--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Vv(o,e,n){const a=new sa(o,e,n);return a.texture.mapping=Ku,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function lo(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function Ab(o,e,n){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function xb(o,e,n){const a=new Float32Array(or),r=new H(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function kv(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Xv(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function tf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yb(o){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,h=d===op||d===lp,m=d===fr||d===yo;if(h||m){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Gv(o)),g=h?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const _=f.image;return h&&_&&_.height>0||m&&_&&r(_)?(n===null&&(n=new Gv(o)),g=h?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function Eb(o){const e={};function n(a){if(e[a]!==void 0)return e[a];const r=o.getExtension(a);return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Wl("WebGLRenderer: "+a+" extension not supported."),r}}}function Mb(o,e,n,a){const r={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);v.removeEventListener("dispose",u),delete r[v.id];const _=l.get(v);_&&(e.remove(_),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const _ in v)e.update(v[_],o.ARRAY_BUFFER)}function h(g){const v=[],_=g.index,y=g.attributes.position;let E=0;if(_!==null){const T=_.array;E=_.version;for(let w=0,D=T.length;w<D;w+=3){const b=T[w+0],L=T[w+1],R=T[w+2];v.push(b,L,L,R,R,b)}}else if(y!==void 0){const T=y.array;E=y.version;for(let w=0,D=T.length/3-1;w<D;w+=3){const b=w+0,L=w+1,R=w+2;v.push(b,L,L,R,R,b)}}else return;const x=new(iA(v)?lA:oA)(v,1);x.version=E;const A=l.get(g);A&&e.remove(A),l.set(g,x)}function m(g){const v=l.get(g);if(v){const _=g.index;_!==null&&v.version<_.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function Tb(o,e,n){let a;function r(v){a=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,_){o.drawElements(a,_,l,v*u),n.update(_,a,1)}function h(v,_,y){y!==0&&(o.drawElementsInstanced(a,_,l,v*u,y),n.update(_,a,y))}function m(v,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,l,v,0,y);let x=0;for(let A=0;A<y;A++)x+=_[A];n.update(x,a,1)}function g(v,_,y,E){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let A=0;A<v.length;A++)h(v[A]/u,_[A],E[A]);else{x.multiDrawElementsInstancedWEBGL(a,_,0,l,v,0,E,0,y);let A=0;for(let T=0;T<y;T++)A+=_[T]*E[T];n.update(A,a,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function Cb(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function bb(o,e,n){const a=new WeakMap,r=new hn;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let U=function(){P.dispose(),a.delete(f),f.removeEventListener("dispose",U)};var _=U;v!==void 0&&v.texture.dispose();const y=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let D=0;y===!0&&(D=1),E===!0&&(D=2),x===!0&&(D=3);let b=f.attributes.position.count*D,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*L*4*g),P=new aA(R,b,L,g);P.type=Yi,P.needsUpdate=!0;const C=D*4;for(let N=0;N<g;N++){const k=A[N],X=T[N],W=w[N],Q=b*L*4*N;for(let O=0;O<k.count;O++){const G=O*C;y===!0&&(r.fromBufferAttribute(k,O),R[Q+G+0]=r.x,R[Q+G+1]=r.y,R[Q+G+2]=r.z,R[Q+G+3]=0),E===!0&&(r.fromBufferAttribute(X,O),R[Q+G+4]=r.x,R[Q+G+5]=r.y,R[Q+G+6]=r.z,R[Q+G+7]=0),x===!0&&(r.fromBufferAttribute(W,O),R[Q+G+8]=r.x,R[Q+G+9]=r.y,R[Q+G+10]=r.z,R[Q+G+11]=W.itemSize===4?r.w:1)}}v={count:g,texture:P,size:new ke(b,L)},a.set(f,v),f.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let y=0;for(let x=0;x<h.length;x++)y+=h[x];const E=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function Rb(o,e,n,a){let r=new WeakMap;function l(d){const h=a.render.frame,m=d.geometry,g=e.get(d,m);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==h&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return g}function u(){r=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:u}}const wb={[V_]:"LINEAR_TONE_MAPPING",[k_]:"REINHARD_TONE_MAPPING",[X_]:"CINEON_TONE_MAPPING",[W_]:"ACES_FILMIC_TONE_MAPPING",[Y_]:"AGX_TONE_MAPPING",[Q_]:"NEUTRAL_TONE_MAPPING",[q_]:"CUSTOM_TONE_MAPPING"};function Db(o,e,n,a,r){const l=new sa(e,n,{type:o,depthBuffer:a,stencilBuffer:r}),u=new sa(e,n,{type:va,depthBuffer:!1,stencilBuffer:!1}),f=new vi;f.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new li([0,2,0,0,2,0],2));const d=new EM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new _n(f,d),m=new ef(-1,1,1,-1,0,1);let g=null,v=null,_=!1,y,E=null,x=[],A=!1;this.setSize=function(T,w){l.setSize(T,w),u.setSize(T,w);for(let D=0;D<x.length;D++){const b=x[D];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){x=T,A=x.length>0&&x[0].isRenderPass===!0;const w=l.width,D=l.height;for(let b=0;b<x.length;b++){const L=x[b];L.setSize&&L.setSize(w,D)}},this.begin=function(T,w){if(_||T.toneMapping===ga&&x.length===0)return!1;if(E=w,w!==null){const D=w.width,b=w.height;(l.width!==D||l.height!==b)&&this.setSize(D,b)}return A===!1&&T.setRenderTarget(l),y=T.toneMapping,T.toneMapping=ga,!0},this.hasRenderPass=function(){return A},this.end=function(T,w){T.toneMapping=y,_=!0;let D=l,b=u;for(let L=0;L<x.length;L++){const R=x[L];if(R.enabled!==!1&&(R.render(T,b,D,w),R.needsSwap!==!1)){const P=D;D=b,b=P}}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,d.defines={},Ut.getTransfer(g)===jt&&(d.defines.SRGB_TRANSFER="");const L=wb[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(E),T.render(h,m),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),d.dispose()}}const SA=new oi,kp=new Co(1,1),vA=new aA,_A=new ZE,AA=new fA,Wv=[],qv=[],Yv=new Float32Array(16),Qv=new Float32Array(9),jv=new Float32Array(4);function Io(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let l=Wv[r];if(l===void 0&&(l=new Float32Array(r),Wv[r]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,o[u].toArray(l,f)}return l}function Un(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function Ln(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function nf(o,e){let n=qv[e];n===void 0&&(n=new Int32Array(e),qv[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function Ib(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function Ub(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;o.uniform2fv(this.addr,e),Ln(n,e)}}function Lb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Un(n,e))return;o.uniform3fv(this.addr,e),Ln(n,e)}}function Bb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;o.uniform4fv(this.addr,e),Ln(n,e)}}function Fb(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(Un(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,a))return;jv.set(a),o.uniformMatrix2fv(this.addr,!1,jv),Ln(n,a)}}function Pb(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(Un(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,a))return;Qv.set(a),o.uniformMatrix3fv(this.addr,!1,Qv),Ln(n,a)}}function Ob(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(Un(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,a))return;Yv.set(a),o.uniformMatrix4fv(this.addr,!1,Yv),Ln(n,a)}}function Nb(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function zb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;o.uniform2iv(this.addr,e),Ln(n,e)}}function Hb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;o.uniform3iv(this.addr,e),Ln(n,e)}}function Gb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;o.uniform4iv(this.addr,e),Ln(n,e)}}function Vb(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function kb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;o.uniform2uiv(this.addr,e),Ln(n,e)}}function Xb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;o.uniform3uiv(this.addr,e),Ln(n,e)}}function Wb(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;o.uniform4uiv(this.addr,e),Ln(n,e)}}function qb(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(kp.compareFunction=n.isReversedDepthBuffer()?em:$p,l=kp):l=SA,n.setTexture2D(e||l,r)}function Yb(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||_A,r)}function Qb(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||AA,r)}function jb(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||vA,r)}function Kb(o){switch(o){case 5126:return Ib;case 35664:return Ub;case 35665:return Lb;case 35666:return Bb;case 35674:return Fb;case 35675:return Pb;case 35676:return Ob;case 5124:case 35670:return Nb;case 35667:case 35671:return zb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return kb;case 36295:return Xb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return jb}}function Zb(o,e){o.uniform1fv(this.addr,e)}function Jb(o,e){const n=Io(e,this.size,2);o.uniform2fv(this.addr,n)}function $b(o,e){const n=Io(e,this.size,3);o.uniform3fv(this.addr,n)}function e1(o,e){const n=Io(e,this.size,4);o.uniform4fv(this.addr,n)}function t1(o,e){const n=Io(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function n1(o,e){const n=Io(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function i1(o,e){const n=Io(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function a1(o,e){o.uniform1iv(this.addr,e)}function s1(o,e){o.uniform2iv(this.addr,e)}function r1(o,e){o.uniform3iv(this.addr,e)}function o1(o,e){o.uniform4iv(this.addr,e)}function l1(o,e){o.uniform1uiv(this.addr,e)}function c1(o,e){o.uniform2uiv(this.addr,e)}function u1(o,e){o.uniform3uiv(this.addr,e)}function f1(o,e){o.uniform4uiv(this.addr,e)}function d1(o,e,n){const a=this.cache,r=e.length,l=nf(n,r);Un(a,l)||(o.uniform1iv(this.addr,l),Ln(a,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=kp:u=SA;for(let f=0;f!==r;++f)n.setTexture2D(e[f]||u,l[f])}function h1(o,e,n){const a=this.cache,r=e.length,l=nf(n,r);Un(a,l)||(o.uniform1iv(this.addr,l),Ln(a,l));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||_A,l[u])}function p1(o,e,n){const a=this.cache,r=e.length,l=nf(n,r);Un(a,l)||(o.uniform1iv(this.addr,l),Ln(a,l));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||AA,l[u])}function m1(o,e,n){const a=this.cache,r=e.length,l=nf(n,r);Un(a,l)||(o.uniform1iv(this.addr,l),Ln(a,l));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||vA,l[u])}function g1(o){switch(o){case 5126:return Zb;case 35664:return Jb;case 35665:return $b;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return a1;case 35667:case 35671:return s1;case 35668:case 35672:return r1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class S1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Kb(n.type)}}class v1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=g1(n.type)}}class _1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(e,n[f.id],a)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Kv(o,e){o.seq.push(e),o.map[e.id]=e}function A1(o,e,n){const a=o.name,r=a.length;for(Gh.lastIndex=0;;){const l=Gh.exec(a),u=Gh.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===r){Kv(n,h===void 0?new S1(f,o,e):new v1(f,o,e));break}else{let g=n.map[f];g===void 0&&(g=new _1(f),Kv(n,g)),n=g}}}class Gu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=e.getActiveUniform(n,u),d=e.getUniformLocation(n,f.name);A1(f,d,this)}const r=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):l.push(u);r.length>0&&(this.seq=r.concat(l))}setValue(e,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let l=0,u=n.length;l!==u;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,l=e.length;r!==l;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function Zv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const x1=37297;let y1=0;function E1(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=r;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const Jv=new dt;function M1(o){Ut._getMatrix(Jv,Ut.workingColorSpace,o);const e=`mat3( ${Jv.elements.map(n=>n.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Vu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function $v(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+E1(o.getShaderSource(e),f)}else return l}function T1(o,e){const n=M1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const C1={[V_]:"Linear",[k_]:"Reinhard",[X_]:"Cineon",[W_]:"ACESFilmic",[Y_]:"AgX",[Q_]:"Neutral",[q_]:"Custom"};function b1(o,e){const n=C1[e];return n===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bu=new H;function R1(){Ut.getLuminanceCoefficients(bu);const o=bu.x.toFixed(4),e=bu.y.toFixed(4),n=bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function D1(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function I1(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(e,r),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return n}function Ll(o){return o!==""}function e_(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(o){return o.replace(U1,B1)}const L1=new Map;function B1(o,e){let n=xt[e];if(n===void 0){const a=L1.get(e);if(a!==void 0)n=xt[a],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Xp(n)}const F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(o){return o.replace(F1,P1)}function P1(o,e,n,a){let r="";for(let l=parseInt(e);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function i_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const O1={[Pu]:"SHADOWMAP_TYPE_PCF",[Ul]:"SHADOWMAP_TYPE_VSM"};function N1(o){return O1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z1={[fr]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[Ku]:"ENVMAP_TYPE_CUBE_UV"};function H1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":z1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const G1={[yo]:"ENVMAP_MODE_REFRACTION"};function V1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":G1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const k1={[G_]:"ENVMAP_BLENDING_MULTIPLY",[mE]:"ENVMAP_BLENDING_MIX",[gE]:"ENVMAP_BLENDING_ADD"};function X1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":k1[o.combine]||"ENVMAP_BLENDING_NONE"}function W1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function q1(o,e,n,a){const r=o.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=N1(n),h=H1(n),m=V1(n),g=X1(n),v=W1(n),_=w1(n),y=D1(l),E=r.createProgram();let x,A,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ll).join(`
`),x.length>0&&(x+=`
`),A=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ll).join(`
`),A.length>0&&(A+=`
`)):(x=[i_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),A=[i_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ga?"#define TONE_MAPPING":"",n.toneMapping!==ga?xt.tonemapping_pars_fragment:"",n.toneMapping!==ga?b1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,T1("linearToOutputTexel",n.outputColorSpace),R1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ll).join(`
`)),u=Xp(u),u=e_(u,n),u=t_(u,n),f=Xp(f),f=e_(f,n),f=t_(f,n),u=n_(u),f=n_(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,A=["#define varying in",n.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const w=T+x+u,D=T+A+f,b=Zv(r,r.VERTEX_SHADER,w),L=Zv(r,r.FRAGMENT_SHADER,D);r.attachShader(E,b),r.attachShader(E,L),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(N){if(o.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(b)||"",W=r.getShaderInfoLog(L)||"",Q=k.trim(),O=X.trim(),G=W.trim();let Z=!0,re=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,b,L);else{const he=$v(r,b,"vertex"),z=$v(r,L,"fragment");Nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Q+`
`+he+`
`+z)}else Q!==""?ht("WebGLProgram: Program Info Log:",Q):(O===""||G==="")&&(re=!1);re&&(N.diagnostics={runnable:Z,programLog:Q,vertexShader:{log:O,prefix:x},fragmentShader:{log:G,prefix:A}})}r.deleteShader(b),r.deleteShader(L),P=new Gu(r,E),C=I1(r,E)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(E,x1)),U},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=L,this}let Y1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new j1(e),n.set(e,a)),a}}class j1{constructor(e){this.id=Y1++,this.code=e,this.usedTimes=0}}function K1(o,e,n,a,r,l,u){const f=new sA,d=new Q1,h=new Set,m=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,U,N,k,X){const W=k.fog,Q=X.geometry,O=C.isMeshStandardMaterial?k.environment:null,G=(C.isMeshStandardMaterial?n:e).get(C.envMap||O),Z=G&&G.mapping===Ku?G.image.height:null,re=y[C.type];C.precision!==null&&(_=r.getMaxPrecision(C.precision),_!==C.precision&&ht("WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));const he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,z=he!==void 0?he.length:0;let ie=0;Q.morphAttributes.position!==void 0&&(ie=1),Q.morphAttributes.normal!==void 0&&(ie=2),Q.morphAttributes.color!==void 0&&(ie=3);let pe,Me,we,$;if(re){const It=da[re];pe=It.vertexShader,Me=It.fragmentShader}else pe=C.vertexShader,Me=C.fragmentShader,d.update(C),we=d.getVertexShaderID(C),$=d.getFragmentShaderID(C);const ce=o.getRenderTarget(),be=o.state.buffers.depth.getReversed(),Fe=X.isInstancedMesh===!0,Ue=X.isBatchedMesh===!0,st=!!C.map,vt=!!C.matcap,Je=!!G,nt=!!C.aoMap,tt=!!C.lightMap,at=!!C.bumpMap,Dt=!!C.normalMap,q=!!C.displacementMap,Mt=!!C.emissiveMap,St=!!C.metalnessMap,Bt=!!C.roughnessMap,Qe=C.anisotropy>0,V=C.clearcoat>0,I=C.dispersion>0,ee=C.iridescence>0,_e=C.sheen>0,Te=C.transmission>0,Se=Qe&&!!C.anisotropyMap,je=V&&!!C.clearcoatMap,Pe=V&&!!C.clearcoatNormalMap,We=V&&!!C.clearcoatRoughnessMap,j=ee&&!!C.iridescenceMap,ue=ee&&!!C.iridescenceThicknessMap,Ee=_e&&!!C.sheenColorMap,De=_e&&!!C.sheenRoughnessMap,Le=!!C.specularMap,Be=!!C.specularColorMap,ft=!!C.specularIntensityMap,J=Te&&!!C.transmissionMap,ze=Te&&!!C.thicknessMap,Re=!!C.gradientMap,Oe=!!C.alphaMap,Ce=C.alphaTest>0,Ae=!!C.alphaHash,Ie=!!C.extensions;let lt=ga;C.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(lt=o.toneMapping);const Wt={shaderID:re,shaderType:C.type,shaderName:C.name,vertexShader:pe,fragmentShader:Me,defines:C.defines,customVertexShaderID:we,customFragmentShaderID:$,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,batching:Ue,batchingColor:Ue&&X._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&X.instanceColor!==null,instancingMorph:Fe&&X.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Mo,alphaToCoverage:!!C.alphaToCoverage,map:st,matcap:vt,envMap:Je,envMapMode:Je&&G.mapping,envMapCubeUVHeight:Z,aoMap:nt,lightMap:tt,bumpMap:at,normalMap:Dt,displacementMap:q,emissiveMap:Mt,normalMapObjectSpace:Dt&&C.normalMapType===AE,normalMapTangentSpace:Dt&&C.normalMapType===_E,metalnessMap:St,roughnessMap:Bt,anisotropy:Qe,anisotropyMap:Se,clearcoat:V,clearcoatMap:je,clearcoatNormalMap:Pe,clearcoatRoughnessMap:We,dispersion:I,iridescence:ee,iridescenceMap:j,iridescenceThicknessMap:ue,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Le,specularColorMap:Be,specularIntensityMap:ft,transmission:Te,transmissionMap:J,thicknessMap:ze,gradientMap:Re,opaque:C.transparent===!1&&C.blending===Bs&&C.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Ce,alphaHash:Ae,combine:C.combine,mapUv:st&&E(C.map.channel),aoMapUv:nt&&E(C.aoMap.channel),lightMapUv:tt&&E(C.lightMap.channel),bumpMapUv:at&&E(C.bumpMap.channel),normalMapUv:Dt&&E(C.normalMap.channel),displacementMapUv:q&&E(C.displacementMap.channel),emissiveMapUv:Mt&&E(C.emissiveMap.channel),metalnessMapUv:St&&E(C.metalnessMap.channel),roughnessMapUv:Bt&&E(C.roughnessMap.channel),anisotropyMapUv:Se&&E(C.anisotropyMap.channel),clearcoatMapUv:je&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:De&&E(C.sheenRoughnessMap.channel),specularMapUv:Le&&E(C.specularMap.channel),specularColorMapUv:Be&&E(C.specularColorMap.channel),specularIntensityMapUv:ft&&E(C.specularIntensityMap.channel),transmissionMapUv:J&&E(C.transmissionMap.channel),thicknessMapUv:ze&&E(C.thicknessMap.channel),alphaMapUv:Oe&&E(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Dt||Qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(st||Oe),fog:!!W,useFog:C.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:X.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ie,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:lt,decodeVideoTexture:st&&C.map.isVideoTexture===!0&&Ut.getTransfer(C.map.colorSpace)===jt,decodeVideoTextureEmissive:Mt&&C.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(C.emissiveMap.colorSpace)===jt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===qi,flipSided:C.side===Si,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ie&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&C.extensions.multiDraw===!0||Ue)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Wt.vertexUv1s=h.has(1),Wt.vertexUv2s=h.has(2),Wt.vertexUv3s=h.has(3),h.clear(),Wt}function A(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)U.push(N),U.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(T(U,C),w(U,C),U.push(o.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function T(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function w(C,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),C.push(f.mask)}function D(C){const U=y[C.type];let N;if(U){const k=da[U];N=hM.clone(k.uniforms)}else N=C.uniforms;return N}function b(C,U){let N=g.get(U);return N!==void 0?++N.usedTimes:(N=new q1(o,U,C,l),m.push(N),g.set(U,N)),N}function L(C){if(--C.usedTimes===0){const U=m.indexOf(C);m[U]=m[m.length-1],m.pop(),g.delete(C.cacheKey),C.destroy()}}function R(C){d.remove(C)}function P(){d.dispose()}return{getParameters:x,getProgramCacheKey:A,getUniforms:D,acquireProgram:b,releaseProgram:L,releaseShaderCache:R,programs:m,dispose:P}}function Z1(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function r(u,f,d){o.get(u)[f]=d}function l(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:l}}function J1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function a_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function s_(){const o=[];let e=0;const n=[],a=[],r=[];function l(){e=0,n.length=0,a.length=0,r.length=0}function u(g,v,_,y,E,x){let A=o[e];return A===void 0?(A={id:g.id,object:g,geometry:v,material:_,groupOrder:y,renderOrder:g.renderOrder,z:E,group:x},o[e]=A):(A.id=g.id,A.object=g,A.geometry=v,A.material=_,A.groupOrder=y,A.renderOrder=g.renderOrder,A.z=E,A.group=x),e++,A}function f(g,v,_,y,E,x){const A=u(g,v,_,y,E,x);_.transmission>0?a.push(A):_.transparent===!0?r.push(A):n.push(A)}function d(g,v,_,y,E,x){const A=u(g,v,_,y,E,x);_.transmission>0?a.unshift(A):_.transparent===!0?r.unshift(A):n.unshift(A)}function h(g,v){n.length>1&&n.sort(g||J1),a.length>1&&a.sort(v||a_),r.length>1&&r.sort(v||a_)}function m(){for(let g=e,v=o.length;g<v;g++){const _=o[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:f,unshift:d,finish:m,sort:h}}function $1(){let o=new WeakMap;function e(a,r){const l=o.get(a);let u;return l===void 0?(u=new s_,o.set(a,[u])):r>=l.length?(u=new s_,l.push(u)):u=l[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function eR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Lt};break;case"SpotLight":n={position:new H,direction:new H,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":n={color:new Lt,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=n,n}}}function tR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let nR=0;function iR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function aR(o){const e=new eR,n=tR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new H);const r=new H,l=new pt,u=new pt;function f(h){let m=0,g=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let _=0,y=0,E=0,x=0,A=0,T=0,w=0,D=0,b=0,L=0,R=0;h.sort(iR);for(let C=0,U=h.length;C<U;C++){const N=h[C],k=N.color,X=N.intensity,W=N.distance;let Q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Eo?Q=N.shadow.map.texture:Q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)m+=k.r*X,g+=k.g*X,v+=k.b*X;else if(N.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(N.sh.coefficients[O],X);R++}else if(N.isDirectionalLight){const O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,Z=n.get(N);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,a.directionalShadow[_]=Z,a.directionalShadowMap[_]=Q,a.directionalShadowMatrix[_]=N.shadow.matrix,T++}a.directional[_]=O,_++}else if(N.isSpotLight){const O=e.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(k).multiplyScalar(X),O.distance=W,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,a.spot[E]=O;const G=N.shadow;if(N.map&&(a.spotLightMap[b]=N.map,b++,G.updateMatrices(N),N.castShadow&&L++),a.spotLightMatrix[E]=G.matrix,N.castShadow){const Z=n.get(N);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,a.spotShadow[E]=Z,a.spotShadowMap[E]=Q,D++}E++}else if(N.isRectAreaLight){const O=e.get(N);O.color.copy(k).multiplyScalar(X),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),a.rectArea[x]=O,x++}else if(N.isPointLight){const O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),O.distance=N.distance,O.decay=N.decay,N.castShadow){const G=N.shadow,Z=n.get(N);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,a.pointShadow[y]=Z,a.pointShadowMap[y]=Q,a.pointShadowMatrix[y]=N.shadow.matrix,w++}a.point[y]=O,y++}else if(N.isHemisphereLight){const O=e.get(N);O.skyColor.copy(N.color).multiplyScalar(X),O.groundColor.copy(N.groundColor).multiplyScalar(X),a.hemi[A]=O,A++}}x>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ve.LTC_FLOAT_1,a.rectAreaLTC2=Ve.LTC_FLOAT_2):(a.rectAreaLTC1=Ve.LTC_HALF_1,a.rectAreaLTC2=Ve.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=g,a.ambient[2]=v;const P=a.hash;(P.directionalLength!==_||P.pointLength!==y||P.spotLength!==E||P.rectAreaLength!==x||P.hemiLength!==A||P.numDirectionalShadows!==T||P.numPointShadows!==w||P.numSpotShadows!==D||P.numSpotMaps!==b||P.numLightProbes!==R)&&(a.directional.length=_,a.spot.length=E,a.rectArea.length=x,a.point.length=y,a.hemi.length=A,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=D+b-L,a.spotLightMap.length=b,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=R,P.directionalLength=_,P.pointLength=y,P.spotLength=E,P.rectAreaLength=x,P.hemiLength=A,P.numDirectionalShadows=T,P.numPointShadows=w,P.numSpotShadows=D,P.numSpotMaps=b,P.numLightProbes=R,a.version=nR++)}function d(h,m){let g=0,v=0,_=0,y=0,E=0;const x=m.matrixWorldInverse;for(let A=0,T=h.length;A<T;A++){const w=h[A];if(w.isDirectionalLight){const D=a.directional[g];D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),g++}else if(w.isSpotLight){const D=a.spot[_];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),_++}else if(w.isRectAreaLight){const D=a.rectArea[y];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(x),u.identity(),l.copy(w.matrixWorld),l.premultiply(x),u.extractRotation(l),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),y++}else if(w.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(x),v++}else if(w.isHemisphereLight){const D=a.hemi[E];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(x),E++}}}return{setup:f,setupView:d,state:a}}function r_(o){const e=new aR(o),n=[],a=[];function r(m){h.camera=m,n.length=0,a.length=0}function l(m){n.push(m)}function u(m){a.push(m)}function f(){e.setup(n)}function d(m){e.setupView(n,m)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function sR(o){let e=new WeakMap;function n(r,l=0){const u=e.get(r);let f;return u===void 0?(f=new r_(o),e.set(r,[f])):l>=u.length?(f=new r_(o),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lR=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],cR=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],o_=new pt,Il=new H,Vh=new H;function uR(o,e,n){let a=new pA;const r=new ke,l=new ke,u=new hn,f=new MM,d=new TM,h={},m=n.maxTextureSize,g={[Sa]:Si,[Si]:Sa,[qi]:qi},v=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:rR,fragmentShader:oR}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const y=new vi;y.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _n(y,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let A=this.type;this.render=function(L,R,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;L.type===Zy&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Pu);const C=o.getRenderTarget(),U=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),k=o.state;k.setBlending(Ka),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=A!==this.type;X&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Q=L.length;W<Q;W++){const O=L[W],G=O.shadow;if(G===void 0){ht("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Z=G.getFrameExtents();if(r.multiply(Z),l.copy(G.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(l.x=Math.floor(m/Z.x),r.x=l.x*Z.x,G.mapSize.x=l.x),r.y>m&&(l.y=Math.floor(m/Z.y),r.y=l.y*Z.y,G.mapSize.y=l.y)),G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ul){if(O.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new sa(r.x,r.y,{format:Eo,type:va,minFilter:ei,magFilter:ei,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new Co(r.x,r.y,Yi),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=_a,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qn,G.map.depthTexture.magFilter=Qn}else{O.isPointLight?(G.map=new dA(r.x),G.map.depthTexture=new yM(r.x,si)):(G.map=new sa(r.x,r.y),G.map.depthTexture=new Co(r.x,r.y,si)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=_a;const he=o.state.buffers.depth.getReversed();this.type===Pu?(G.map.depthTexture.compareFunction=he?em:$p,G.map.depthTexture.minFilter=ei,G.map.depthTexture.magFilter=ei):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qn,G.map.depthTexture.magFilter=Qn)}G.camera.updateProjectionMatrix()}const re=G.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<re;he++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,he),o.clear();else{he===0&&(o.setRenderTarget(G.map),o.clear());const z=G.getViewport(he);u.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),k.viewport(u)}if(O.isPointLight){const z=G.camera,ie=G.matrix,pe=O.distance||z.far;pe!==z.far&&(z.far=pe,z.updateProjectionMatrix()),Il.setFromMatrixPosition(O.matrixWorld),z.position.copy(Il),Vh.copy(z.position),Vh.add(lR[he]),z.up.copy(cR[he]),z.lookAt(Vh),z.updateMatrixWorld(),ie.makeTranslation(-Il.x,-Il.y,-Il.z),o_.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(o_,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(O);a=G.getFrustum(),D(R,P,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Ul&&T(G,P),G.needsUpdate=!1}A=this.type,x.needsUpdate=!1,o.setRenderTarget(C,U,N)};function T(L,R){const P=e.update(E);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new sa(r.x,r.y,{format:Eo,type:va})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(R,null,P,v,E,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(R,null,P,_,E,null)}function w(L,R,P,C){let U=null;const N=P.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)U=N;else if(U=P.isPointLight===!0?d:f,o.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=U.uuid,X=R.uuid;let W=h[k];W===void 0&&(W={},h[k]=W);let Q=W[X];Q===void 0&&(Q=U.clone(),W[X]=Q,R.addEventListener("dispose",b)),U=Q}if(U.visible=R.visible,U.wireframe=R.wireframe,C===Ul?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:g[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,P.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const k=o.properties.get(U);k.light=P}return U}function D(L,R,P,C,U){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&U===Ul)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,L.matrixWorld);const X=e.update(L),W=L.material;if(Array.isArray(W)){const Q=X.groups;for(let O=0,G=Q.length;O<G;O++){const Z=Q[O],re=W[Z.materialIndex];if(re&&re.visible){const he=w(L,re,C,U);L.onBeforeShadow(o,L,R,P,X,he,Z),o.renderBufferDirect(P,null,X,he,L,Z),L.onAfterShadow(o,L,R,P,X,he,Z)}}}else if(W.visible){const Q=w(L,W,C,U);L.onBeforeShadow(o,L,R,P,X,Q,null),o.renderBufferDirect(P,null,X,Q,L,null),L.onAfterShadow(o,L,R,P,X,Q,null)}}const k=L.children;for(let X=0,W=k.length;X<W;X++)D(k[X],R,P,C,U)}function b(L){L.target.removeEventListener("dispose",b);for(const P in h){const C=h[P],U=L.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}const fR={[ep]:tp,[np]:sp,[ip]:rp,[xo]:ap,[tp]:ep,[sp]:np,[rp]:ip,[ap]:xo};function dR(o,e){function n(){let J=!1;const ze=new hn;let Re=null;const Oe=new hn(0,0,0,0);return{setMask:function(Ce){Re!==Ce&&!J&&(o.colorMask(Ce,Ce,Ce,Ce),Re=Ce)},setLocked:function(Ce){J=Ce},setClear:function(Ce,Ae,Ie,lt,Wt){Wt===!0&&(Ce*=lt,Ae*=lt,Ie*=lt),ze.set(Ce,Ae,Ie,lt),Oe.equals(ze)===!1&&(o.clearColor(Ce,Ae,Ie,lt),Oe.copy(ze))},reset:function(){J=!1,Re=null,Oe.set(-1,0,0,0)}}}function a(){let J=!1,ze=!1,Re=null,Oe=null,Ce=null;return{setReversed:function(Ae){if(ze!==Ae){const Ie=e.get("EXT_clip_control");Ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ze=Ae;const lt=Ce;Ce=null,this.setClear(lt)}},getReversed:function(){return ze},setTest:function(Ae){Ae?ce(o.DEPTH_TEST):be(o.DEPTH_TEST)},setMask:function(Ae){Re!==Ae&&!J&&(o.depthMask(Ae),Re=Ae)},setFunc:function(Ae){if(ze&&(Ae=fR[Ae]),Oe!==Ae){switch(Ae){case ep:o.depthFunc(o.NEVER);break;case tp:o.depthFunc(o.ALWAYS);break;case np:o.depthFunc(o.LESS);break;case xo:o.depthFunc(o.LEQUAL);break;case ip:o.depthFunc(o.EQUAL);break;case ap:o.depthFunc(o.GEQUAL);break;case sp:o.depthFunc(o.GREATER);break;case rp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Oe=Ae}},setLocked:function(Ae){J=Ae},setClear:function(Ae){Ce!==Ae&&(ze&&(Ae=1-Ae),o.clearDepth(Ae),Ce=Ae)},reset:function(){J=!1,Re=null,Oe=null,Ce=null,ze=!1}}}function r(){let J=!1,ze=null,Re=null,Oe=null,Ce=null,Ae=null,Ie=null,lt=null,Wt=null;return{setTest:function(It){J||(It?ce(o.STENCIL_TEST):be(o.STENCIL_TEST))},setMask:function(It){ze!==It&&!J&&(o.stencilMask(It),ze=It)},setFunc:function(It,jn,ji){(Re!==It||Oe!==jn||Ce!==ji)&&(o.stencilFunc(It,jn,ji),Re=It,Oe=jn,Ce=ji)},setOp:function(It,jn,ji){(Ae!==It||Ie!==jn||lt!==ji)&&(o.stencilOp(It,jn,ji),Ae=It,Ie=jn,lt=ji)},setLocked:function(It){J=It},setClear:function(It){Wt!==It&&(o.clearStencil(It),Wt=It)},reset:function(){J=!1,ze=null,Re=null,Oe=null,Ce=null,Ae=null,Ie=null,lt=null,Wt=null}}}const l=new n,u=new a,f=new r,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,_=[],y=null,E=!1,x=null,A=null,T=null,w=null,D=null,b=null,L=null,R=new Lt(0,0,0),P=0,C=!1,U=null,N=null,k=null,X=null,W=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=G>=2);let re=null,he={};const z=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),pe=new hn().fromArray(z),Me=new hn().fromArray(ie);function we(J,ze,Re,Oe){const Ce=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(J,Ae),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ie=0;Ie<Re;Ie++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(ze,0,o.RGBA,1,1,Oe,0,o.RGBA,o.UNSIGNED_BYTE,Ce):o.texImage2D(ze+Ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ce);return Ae}const $={};$[o.TEXTURE_2D]=we(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=we(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=we(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=we(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(o.DEPTH_TEST),u.setFunc(xo),at(!1),Dt(dv),ce(o.CULL_FACE),nt(Ka);function ce(J){m[J]!==!0&&(o.enable(J),m[J]=!0)}function be(J){m[J]!==!1&&(o.disable(J),m[J]=!1)}function Fe(J,ze){return g[J]!==ze?(o.bindFramebuffer(J,ze),g[J]=ze,J===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=ze),J===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=ze),!0):!1}function Ue(J,ze){let Re=_,Oe=!1;if(J){Re=v.get(ze),Re===void 0&&(Re=[],v.set(ze,Re));const Ce=J.textures;if(Re.length!==Ce.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,Ie=Ce.length;Ae<Ie;Ae++)Re[Ae]=o.COLOR_ATTACHMENT0+Ae;Re.length=Ce.length,Oe=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,Oe=!0);Oe&&o.drawBuffers(Re)}function st(J){return y!==J?(o.useProgram(J),y=J,!0):!1}const vt={[rr]:o.FUNC_ADD,[Jy]:o.FUNC_SUBTRACT,[$y]:o.FUNC_REVERSE_SUBTRACT};vt[eE]=o.MIN,vt[tE]=o.MAX;const Je={[nE]:o.ZERO,[iE]:o.ONE,[aE]:o.SRC_COLOR,[Gl]:o.SRC_ALPHA,[uE]:o.SRC_ALPHA_SATURATE,[lE]:o.DST_COLOR,[rE]:o.DST_ALPHA,[sE]:o.ONE_MINUS_SRC_COLOR,[Vl]:o.ONE_MINUS_SRC_ALPHA,[cE]:o.ONE_MINUS_DST_COLOR,[oE]:o.ONE_MINUS_DST_ALPHA,[fE]:o.CONSTANT_COLOR,[dE]:o.ONE_MINUS_CONSTANT_COLOR,[hE]:o.CONSTANT_ALPHA,[pE]:o.ONE_MINUS_CONSTANT_ALPHA};function nt(J,ze,Re,Oe,Ce,Ae,Ie,lt,Wt,It){if(J===Ka){E===!0&&(be(o.BLEND),E=!1);return}if(E===!1&&(ce(o.BLEND),E=!0),J!==H_){if(J!==x||It!==C){if((A!==rr||D!==rr)&&(o.blendEquation(o.FUNC_ADD),A=rr,D=rr),It)switch(J){case Bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hv:o.blendFunc(o.ONE,o.ONE);break;case pv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Nt("WebGLState: Invalid blending: ",J);break}else switch(J){case Bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case pv:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mv:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",J);break}T=null,w=null,b=null,L=null,R.set(0,0,0),P=0,x=J,C=It}return}Ce=Ce||ze,Ae=Ae||Re,Ie=Ie||Oe,(ze!==A||Ce!==D)&&(o.blendEquationSeparate(vt[ze],vt[Ce]),A=ze,D=Ce),(Re!==T||Oe!==w||Ae!==b||Ie!==L)&&(o.blendFuncSeparate(Je[Re],Je[Oe],Je[Ae],Je[Ie]),T=Re,w=Oe,b=Ae,L=Ie),(lt.equals(R)===!1||Wt!==P)&&(o.blendColor(lt.r,lt.g,lt.b,Wt),R.copy(lt),P=Wt),x=J,C=!1}function tt(J,ze){J.side===qi?be(o.CULL_FACE):ce(o.CULL_FACE);let Re=J.side===Si;ze&&(Re=!Re),at(Re),J.blending===Bs&&J.transparent===!1?nt(Ka):nt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),l.setMask(J.colorWrite);const Oe=J.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(J.stencilWriteMask),f.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),f.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Mt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):be(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(J){U!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),U=J)}function Dt(J){J!==jy?(ce(o.CULL_FACE),J!==N&&(J===dv?o.cullFace(o.BACK):J===Ky?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):be(o.CULL_FACE),N=J}function q(J){J!==k&&(O&&o.lineWidth(J),k=J)}function Mt(J,ze,Re){J?(ce(o.POLYGON_OFFSET_FILL),(X!==ze||W!==Re)&&(o.polygonOffset(ze,Re),X=ze,W=Re)):be(o.POLYGON_OFFSET_FILL)}function St(J){J?ce(o.SCISSOR_TEST):be(o.SCISSOR_TEST)}function Bt(J){J===void 0&&(J=o.TEXTURE0+Q-1),re!==J&&(o.activeTexture(J),re=J)}function Qe(J,ze,Re){Re===void 0&&(re===null?Re=o.TEXTURE0+Q-1:Re=re);let Oe=he[Re];Oe===void 0&&(Oe={type:void 0,texture:void 0},he[Re]=Oe),(Oe.type!==J||Oe.texture!==ze)&&(re!==Re&&(o.activeTexture(Re),re=Re),o.bindTexture(J,ze||$[J]),Oe.type=J,Oe.texture=ze)}function V(){const J=he[re];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function I(){try{o.compressedTexImage2D(...arguments)}catch(J){Nt("WebGLState:",J)}}function ee(){try{o.compressedTexImage3D(...arguments)}catch(J){Nt("WebGLState:",J)}}function _e(){try{o.texSubImage2D(...arguments)}catch(J){Nt("WebGLState:",J)}}function Te(){try{o.texSubImage3D(...arguments)}catch(J){Nt("WebGLState:",J)}}function Se(){try{o.compressedTexSubImage2D(...arguments)}catch(J){Nt("WebGLState:",J)}}function je(){try{o.compressedTexSubImage3D(...arguments)}catch(J){Nt("WebGLState:",J)}}function Pe(){try{o.texStorage2D(...arguments)}catch(J){Nt("WebGLState:",J)}}function We(){try{o.texStorage3D(...arguments)}catch(J){Nt("WebGLState:",J)}}function j(){try{o.texImage2D(...arguments)}catch(J){Nt("WebGLState:",J)}}function ue(){try{o.texImage3D(...arguments)}catch(J){Nt("WebGLState:",J)}}function Ee(J){pe.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),pe.copy(J))}function De(J){Me.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),Me.copy(J))}function Le(J,ze){let Re=h.get(ze);Re===void 0&&(Re=new WeakMap,h.set(ze,Re));let Oe=Re.get(J);Oe===void 0&&(Oe=o.getUniformBlockIndex(ze,J.name),Re.set(J,Oe))}function Be(J,ze){const Oe=h.get(ze).get(J);d.get(ze)!==Oe&&(o.uniformBlockBinding(ze,Oe,J.__bindingPointIndex),d.set(ze,Oe))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},re=null,he={},g={},v=new WeakMap,_=[],y=null,E=!1,x=null,A=null,T=null,w=null,D=null,b=null,L=null,R=new Lt(0,0,0),P=0,C=!1,U=null,N=null,k=null,X=null,W=null,pe.set(0,0,o.canvas.width,o.canvas.height),Me.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ce,disable:be,bindFramebuffer:Fe,drawBuffers:Ue,useProgram:st,setBlending:nt,setMaterial:tt,setFlipSided:at,setCullFace:Dt,setLineWidth:q,setPolygonOffset:Mt,setScissorTest:St,activeTexture:Bt,bindTexture:Qe,unbindTexture:V,compressedTexImage2D:I,compressedTexImage3D:ee,texImage2D:j,texImage3D:ue,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:We,texSubImage2D:_e,texSubImage3D:Te,compressedTexSubImage2D:Se,compressedTexSubImage3D:je,scissor:Ee,viewport:De,reset:ft}}function hR(o,e,n,a,r,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,m=new WeakMap;let g;const v=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(V,I){return _?new OffscreenCanvas(V,I):Xu("canvas")}function E(V,I,ee){let _e=1;const Te=Qe(V);if((Te.width>ee||Te.height>ee)&&(_e=ee/Math.max(Te.width,Te.height)),_e<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const Se=Math.floor(_e*Te.width),je=Math.floor(_e*Te.height);g===void 0&&(g=y(Se,je));const Pe=I?y(Se,je):g;return Pe.width=Se,Pe.height=je,Pe.getContext("2d").drawImage(V,0,0,Se,je),ht("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Se+"x"+je+")."),Pe}else return"data"in V&&ht("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),V;return V}function x(V){return V.generateMipmaps}function A(V){o.generateMipmap(V)}function T(V){return V.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?o.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(V,I,ee,_e,Te=!1){if(V!==null){if(o[V]!==void 0)return o[V];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Se=I;if(I===o.RED&&(ee===o.FLOAT&&(Se=o.R32F),ee===o.HALF_FLOAT&&(Se=o.R16F),ee===o.UNSIGNED_BYTE&&(Se=o.R8)),I===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(Se=o.R8UI),ee===o.UNSIGNED_SHORT&&(Se=o.R16UI),ee===o.UNSIGNED_INT&&(Se=o.R32UI),ee===o.BYTE&&(Se=o.R8I),ee===o.SHORT&&(Se=o.R16I),ee===o.INT&&(Se=o.R32I)),I===o.RG&&(ee===o.FLOAT&&(Se=o.RG32F),ee===o.HALF_FLOAT&&(Se=o.RG16F),ee===o.UNSIGNED_BYTE&&(Se=o.RG8)),I===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(Se=o.RG8UI),ee===o.UNSIGNED_SHORT&&(Se=o.RG16UI),ee===o.UNSIGNED_INT&&(Se=o.RG32UI),ee===o.BYTE&&(Se=o.RG8I),ee===o.SHORT&&(Se=o.RG16I),ee===o.INT&&(Se=o.RG32I)),I===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(Se=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(Se=o.RGB16UI),ee===o.UNSIGNED_INT&&(Se=o.RGB32UI),ee===o.BYTE&&(Se=o.RGB8I),ee===o.SHORT&&(Se=o.RGB16I),ee===o.INT&&(Se=o.RGB32I)),I===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(Se=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(Se=o.RGBA16UI),ee===o.UNSIGNED_INT&&(Se=o.RGBA32UI),ee===o.BYTE&&(Se=o.RGBA8I),ee===o.SHORT&&(Se=o.RGBA16I),ee===o.INT&&(Se=o.RGBA32I)),I===o.RGB&&(ee===o.UNSIGNED_INT_5_9_9_9_REV&&(Se=o.RGB9_E5),ee===o.UNSIGNED_INT_10F_11F_11F_REV&&(Se=o.R11F_G11F_B10F)),I===o.RGBA){const je=Te?Vu:Ut.getTransfer(_e);ee===o.FLOAT&&(Se=o.RGBA32F),ee===o.HALF_FLOAT&&(Se=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(Se=je===jt?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT_4_4_4_4&&(Se=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(Se=o.RGB5_A1)}return(Se===o.R16F||Se===o.R32F||Se===o.RG16F||Se===o.RG32F||Se===o.RGBA16F||Se===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function D(V,I){let ee;return V?I===null||I===si||I===Xl?ee=o.DEPTH24_STENCIL8:I===Yi?ee=o.DEPTH32F_STENCIL8:I===kl&&(ee=o.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===si||I===Xl?ee=o.DEPTH_COMPONENT24:I===Yi?ee=o.DEPTH_COMPONENT32F:I===kl&&(ee=o.DEPTH_COMPONENT16),ee}function b(V,I){return x(V)===!0||V.isFramebufferTexture&&V.minFilter!==Qn&&V.minFilter!==ei?Math.log2(Math.max(I.width,I.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?I.mipmaps.length:1}function L(V){const I=V.target;I.removeEventListener("dispose",L),P(I),I.isVideoTexture&&m.delete(I)}function R(V){const I=V.target;I.removeEventListener("dispose",R),U(I)}function P(V){const I=a.get(V);if(I.__webglInit===void 0)return;const ee=V.source,_e=v.get(ee);if(_e){const Te=_e[I.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&C(V),Object.keys(_e).length===0&&v.delete(ee)}a.remove(V)}function C(V){const I=a.get(V);o.deleteTexture(I.__webglTexture);const ee=V.source,_e=v.get(ee);delete _e[I.__cacheKey],u.memory.textures--}function U(V){const I=a.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),a.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(I.__webglFramebuffer[_e]))for(let Te=0;Te<I.__webglFramebuffer[_e].length;Te++)o.deleteFramebuffer(I.__webglFramebuffer[_e][Te]);else o.deleteFramebuffer(I.__webglFramebuffer[_e]);I.__webglDepthbuffer&&o.deleteRenderbuffer(I.__webglDepthbuffer[_e])}else{if(Array.isArray(I.__webglFramebuffer))for(let _e=0;_e<I.__webglFramebuffer.length;_e++)o.deleteFramebuffer(I.__webglFramebuffer[_e]);else o.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&o.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&o.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let _e=0;_e<I.__webglColorRenderbuffer.length;_e++)I.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(I.__webglColorRenderbuffer[_e]);I.__webglDepthRenderbuffer&&o.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const ee=V.textures;for(let _e=0,Te=ee.length;_e<Te;_e++){const Se=a.get(ee[_e]);Se.__webglTexture&&(o.deleteTexture(Se.__webglTexture),u.memory.textures--),a.remove(ee[_e])}a.remove(V)}let N=0;function k(){N=0}function X(){const V=N;return V>=r.maxTextures&&ht("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),N+=1,V}function W(V){const I=[];return I.push(V.wrapS),I.push(V.wrapT),I.push(V.wrapR||0),I.push(V.magFilter),I.push(V.minFilter),I.push(V.anisotropy),I.push(V.internalFormat),I.push(V.format),I.push(V.type),I.push(V.generateMipmaps),I.push(V.premultiplyAlpha),I.push(V.flipY),I.push(V.unpackAlignment),I.push(V.colorSpace),I.join()}function Q(V,I){const ee=a.get(V);if(V.isVideoTexture&&St(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&ee.__version!==V.version){const _e=V.image;if(_e===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{$(ee,V,I);return}}else V.isExternalTexture&&(ee.__webglTexture=V.sourceTexture?V.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+I)}function O(V,I){const ee=a.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&ee.__version!==V.version){$(ee,V,I);return}else V.isExternalTexture&&(ee.__webglTexture=V.sourceTexture?V.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+I)}function G(V,I){const ee=a.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&ee.__version!==V.version){$(ee,V,I);return}n.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+I)}function Z(V,I){const ee=a.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&ee.__version!==V.version){ce(ee,V,I);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+I)}const re={[cp]:o.REPEAT,[ja]:o.CLAMP_TO_EDGE,[up]:o.MIRRORED_REPEAT},he={[Qn]:o.NEAREST,[SE]:o.NEAREST_MIPMAP_NEAREST,[ou]:o.NEAREST_MIPMAP_LINEAR,[ei]:o.LINEAR,[ph]:o.LINEAR_MIPMAP_NEAREST,[lr]:o.LINEAR_MIPMAP_LINEAR},z={[xE]:o.NEVER,[CE]:o.ALWAYS,[yE]:o.LESS,[$p]:o.LEQUAL,[EE]:o.EQUAL,[em]:o.GEQUAL,[ME]:o.GREATER,[TE]:o.NOTEQUAL};function ie(V,I){if(I.type===Yi&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===ei||I.magFilter===ph||I.magFilter===ou||I.magFilter===lr||I.minFilter===ei||I.minFilter===ph||I.minFilter===ou||I.minFilter===lr)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(V,o.TEXTURE_WRAP_S,re[I.wrapS]),o.texParameteri(V,o.TEXTURE_WRAP_T,re[I.wrapT]),(V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY)&&o.texParameteri(V,o.TEXTURE_WRAP_R,re[I.wrapR]),o.texParameteri(V,o.TEXTURE_MAG_FILTER,he[I.magFilter]),o.texParameteri(V,o.TEXTURE_MIN_FILTER,he[I.minFilter]),I.compareFunction&&(o.texParameteri(V,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(V,o.TEXTURE_COMPARE_FUNC,z[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Qn||I.minFilter!==ou&&I.minFilter!==lr||I.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||a.get(I).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");o.texParameterf(V,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),a.get(I).__currentAnisotropy=I.anisotropy}}}function pe(V,I){let ee=!1;V.__webglInit===void 0&&(V.__webglInit=!0,I.addEventListener("dispose",L));const _e=I.source;let Te=v.get(_e);Te===void 0&&(Te={},v.set(_e,Te));const Se=W(I);if(Se!==V.__cacheKey){Te[Se]===void 0&&(Te[Se]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),Te[Se].usedTimes++;const je=Te[V.__cacheKey];je!==void 0&&(Te[V.__cacheKey].usedTimes--,je.usedTimes===0&&C(I)),V.__cacheKey=Se,V.__webglTexture=Te[Se].texture}return ee}function Me(V,I,ee){return Math.floor(Math.floor(V/ee)/I)}function we(V,I,ee,_e){const Se=V.updateRanges;if(Se.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,I.width,I.height,ee,_e,I.data);else{Se.sort((ue,Ee)=>ue.start-Ee.start);let je=0;for(let ue=1;ue<Se.length;ue++){const Ee=Se[je],De=Se[ue],Le=Ee.start+Ee.count,Be=Me(De.start,I.width,4),ft=Me(Ee.start,I.width,4);De.start<=Le+1&&Be===ft&&Me(De.start+De.count-1,I.width,4)===Be?Ee.count=Math.max(Ee.count,De.start+De.count-Ee.start):(++je,Se[je]=De)}Se.length=je+1;const Pe=o.getParameter(o.UNPACK_ROW_LENGTH),We=o.getParameter(o.UNPACK_SKIP_PIXELS),j=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,I.width);for(let ue=0,Ee=Se.length;ue<Ee;ue++){const De=Se[ue],Le=Math.floor(De.start/4),Be=Math.ceil(De.count/4),ft=Le%I.width,J=Math.floor(Le/I.width),ze=Be,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,J),n.texSubImage2D(o.TEXTURE_2D,0,ft,J,ze,Re,ee,_e,I.data)}V.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Pe),o.pixelStorei(o.UNPACK_SKIP_PIXELS,We),o.pixelStorei(o.UNPACK_SKIP_ROWS,j)}}function $(V,I,ee){let _e=o.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),I.isData3DTexture&&(_e=o.TEXTURE_3D);const Te=pe(V,I),Se=I.source;n.bindTexture(_e,V.__webglTexture,o.TEXTURE0+ee);const je=a.get(Se);if(Se.version!==je.__version||Te===!0){n.activeTexture(o.TEXTURE0+ee);const Pe=Ut.getPrimaries(Ut.workingColorSpace),We=I.colorSpace===Is?null:Ut.getPrimaries(I.colorSpace),j=I.colorSpace===Is||Pe===We?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,I.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,I.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ue=E(I.image,!1,r.maxTextureSize);ue=Bt(I,ue);const Ee=l.convert(I.format,I.colorSpace),De=l.convert(I.type);let Le=w(I.internalFormat,Ee,De,I.colorSpace,I.isVideoTexture);ie(_e,I);let Be;const ft=I.mipmaps,J=I.isVideoTexture!==!0,ze=je.__version===void 0||Te===!0,Re=Se.dataReady,Oe=b(I,ue);if(I.isDepthTexture)Le=D(I.format===cr,I.type),ze&&(J?n.texStorage2D(o.TEXTURE_2D,1,Le,ue.width,ue.height):n.texImage2D(o.TEXTURE_2D,0,Le,ue.width,ue.height,0,Ee,De,null));else if(I.isDataTexture)if(ft.length>0){J&&ze&&n.texStorage2D(o.TEXTURE_2D,Oe,Le,ft[0].width,ft[0].height);for(let Ce=0,Ae=ft.length;Ce<Ae;Ce++)Be=ft[Ce],J?Re&&n.texSubImage2D(o.TEXTURE_2D,Ce,0,0,Be.width,Be.height,Ee,De,Be.data):n.texImage2D(o.TEXTURE_2D,Ce,Le,Be.width,Be.height,0,Ee,De,Be.data);I.generateMipmaps=!1}else J?(ze&&n.texStorage2D(o.TEXTURE_2D,Oe,Le,ue.width,ue.height),Re&&we(I,ue,Ee,De)):n.texImage2D(o.TEXTURE_2D,0,Le,ue.width,ue.height,0,Ee,De,ue.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){J&&ze&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,Le,ft[0].width,ft[0].height,ue.depth);for(let Ce=0,Ae=ft.length;Ce<Ae;Ce++)if(Be=ft[Ce],I.format!==ri)if(Ee!==null)if(J){if(Re)if(I.layerUpdates.size>0){const Ie=Nv(Be.width,Be.height,I.format,I.type);for(const lt of I.layerUpdates){const Wt=Be.data.subarray(lt*Ie/Be.data.BYTES_PER_ELEMENT,(lt+1)*Ie/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ce,0,0,lt,Be.width,Be.height,1,Ee,Wt)}I.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ce,0,0,0,Be.width,Be.height,ue.depth,Ee,Be.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ce,Le,Be.width,Be.height,ue.depth,0,Be.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Re&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Ce,0,0,0,Be.width,Be.height,ue.depth,Ee,De,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Ce,Le,Be.width,Be.height,ue.depth,0,Ee,De,Be.data)}else{J&&ze&&n.texStorage2D(o.TEXTURE_2D,Oe,Le,ft[0].width,ft[0].height);for(let Ce=0,Ae=ft.length;Ce<Ae;Ce++)Be=ft[Ce],I.format!==ri?Ee!==null?J?Re&&n.compressedTexSubImage2D(o.TEXTURE_2D,Ce,0,0,Be.width,Be.height,Ee,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,Ce,Le,Be.width,Be.height,0,Be.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Re&&n.texSubImage2D(o.TEXTURE_2D,Ce,0,0,Be.width,Be.height,Ee,De,Be.data):n.texImage2D(o.TEXTURE_2D,Ce,Le,Be.width,Be.height,0,Ee,De,Be.data)}else if(I.isDataArrayTexture)if(J){if(ze&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,Le,ue.width,ue.height,ue.depth),Re)if(I.layerUpdates.size>0){const Ce=Nv(ue.width,ue.height,I.format,I.type);for(const Ae of I.layerUpdates){const Ie=ue.data.subarray(Ae*Ce/ue.data.BYTES_PER_ELEMENT,(Ae+1)*Ce/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ae,ue.width,ue.height,1,Ee,De,Ie)}I.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(I.isData3DTexture)J?(ze&&n.texStorage3D(o.TEXTURE_3D,Oe,Le,ue.width,ue.height,ue.depth),Re&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)):n.texImage3D(o.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(I.isFramebufferTexture){if(ze)if(J)n.texStorage2D(o.TEXTURE_2D,Oe,Le,ue.width,ue.height);else{let Ce=ue.width,Ae=ue.height;for(let Ie=0;Ie<Oe;Ie++)n.texImage2D(o.TEXTURE_2D,Ie,Le,Ce,Ae,0,Ee,De,null),Ce>>=1,Ae>>=1}}else if(ft.length>0){if(J&&ze){const Ce=Qe(ft[0]);n.texStorage2D(o.TEXTURE_2D,Oe,Le,Ce.width,Ce.height)}for(let Ce=0,Ae=ft.length;Ce<Ae;Ce++)Be=ft[Ce],J?Re&&n.texSubImage2D(o.TEXTURE_2D,Ce,0,0,Ee,De,Be):n.texImage2D(o.TEXTURE_2D,Ce,Le,Ee,De,Be);I.generateMipmaps=!1}else if(J){if(ze){const Ce=Qe(ue);n.texStorage2D(o.TEXTURE_2D,Oe,Le,Ce.width,Ce.height)}Re&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,De,ue)}else n.texImage2D(o.TEXTURE_2D,0,Le,Ee,De,ue);x(I)&&A(_e),je.__version=Se.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function ce(V,I,ee){if(I.image.length!==6)return;const _e=pe(V,I),Te=I.source;n.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+ee);const Se=a.get(Te);if(Te.version!==Se.__version||_e===!0){n.activeTexture(o.TEXTURE0+ee);const je=Ut.getPrimaries(Ut.workingColorSpace),Pe=I.colorSpace===Is?null:Ut.getPrimaries(I.colorSpace),We=I.colorSpace===Is||je===Pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,I.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,I.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const j=I.isCompressedTexture||I.image[0].isCompressedTexture,ue=I.image[0]&&I.image[0].isDataTexture,Ee=[];for(let Ae=0;Ae<6;Ae++)!j&&!ue?Ee[Ae]=E(I.image[Ae],!0,r.maxCubemapSize):Ee[Ae]=ue?I.image[Ae].image:I.image[Ae],Ee[Ae]=Bt(I,Ee[Ae]);const De=Ee[0],Le=l.convert(I.format,I.colorSpace),Be=l.convert(I.type),ft=w(I.internalFormat,Le,Be,I.colorSpace),J=I.isVideoTexture!==!0,ze=Se.__version===void 0||_e===!0,Re=Te.dataReady;let Oe=b(I,De);ie(o.TEXTURE_CUBE_MAP,I);let Ce;if(j){J&&ze&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ft,De.width,De.height);for(let Ae=0;Ae<6;Ae++){Ce=Ee[Ae].mipmaps;for(let Ie=0;Ie<Ce.length;Ie++){const lt=Ce[Ie];I.format!==ri?Le!==null?J?Re&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,0,0,lt.width,lt.height,Le,lt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,ft,lt.width,lt.height,0,lt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,0,0,lt.width,lt.height,Le,Be,lt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,ft,lt.width,lt.height,0,Le,Be,lt.data)}}}else{if(Ce=I.mipmaps,J&&ze){Ce.length>0&&Oe++;const Ae=Qe(Ee[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ft,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ue){J?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ee[Ae].width,Ee[Ae].height,Le,Be,Ee[Ae].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ft,Ee[Ae].width,Ee[Ae].height,0,Le,Be,Ee[Ae].data);for(let Ie=0;Ie<Ce.length;Ie++){const Wt=Ce[Ie].image[Ae].image;J?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,0,0,Wt.width,Wt.height,Le,Be,Wt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,ft,Wt.width,Wt.height,0,Le,Be,Wt.data)}}else{J?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Le,Be,Ee[Ae]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ft,Le,Be,Ee[Ae]);for(let Ie=0;Ie<Ce.length;Ie++){const lt=Ce[Ie];J?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,0,0,Le,Be,lt.image[Ae]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,ft,Le,Be,lt.image[Ae])}}}x(I)&&A(o.TEXTURE_CUBE_MAP),Se.__version=Te.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function be(V,I,ee,_e,Te,Se){const je=l.convert(ee.format,ee.colorSpace),Pe=l.convert(ee.type),We=w(ee.internalFormat,je,Pe,ee.colorSpace),j=a.get(I),ue=a.get(ee);if(ue.__renderTarget=I,!j.__hasExternalTextures){const Ee=Math.max(1,I.width>>Se),De=Math.max(1,I.height>>Se);Te===o.TEXTURE_3D||Te===o.TEXTURE_2D_ARRAY?n.texImage3D(Te,Se,We,Ee,De,I.depth,0,je,Pe,null):n.texImage2D(Te,Se,We,Ee,De,0,je,Pe,null)}n.bindFramebuffer(o.FRAMEBUFFER,V),Mt(I)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,Te,ue.__webglTexture,0,q(I)):(Te===o.TEXTURE_2D||Te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,Te,ue.__webglTexture,Se),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(V,I,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,V),I.depthBuffer){const _e=I.depthTexture,Te=_e&&_e.isDepthTexture?_e.type:null,Se=D(I.stencilBuffer,Te),je=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Mt(I)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,q(I),Se,I.width,I.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,q(I),Se,I.width,I.height):o.renderbufferStorage(o.RENDERBUFFER,Se,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,V)}else{const _e=I.textures;for(let Te=0;Te<_e.length;Te++){const Se=_e[Te],je=l.convert(Se.format,Se.colorSpace),Pe=l.convert(Se.type),We=w(Se.internalFormat,je,Pe,Se.colorSpace);Mt(I)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,q(I),We,I.width,I.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,q(I),We,I.width,I.height):o.renderbufferStorage(o.RENDERBUFFER,We,I.width,I.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ue(V,I,ee){const _e=I.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,V),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=a.get(I.depthTexture);if(Te.__renderTarget=I,(!Te.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),_e){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,I.depthTexture.addEventListener("dispose",L)),Te.__webglTexture===void 0){Te.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,Te.__webglTexture),ie(o.TEXTURE_CUBE_MAP,I.depthTexture);const j=l.convert(I.depthTexture.format),ue=l.convert(I.depthTexture.type);let Ee;I.depthTexture.format===_a?Ee=o.DEPTH_COMPONENT24:I.depthTexture.format===cr&&(Ee=o.DEPTH24_STENCIL8);for(let De=0;De<6;De++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ee,I.width,I.height,0,j,ue,null)}}else Q(I.depthTexture,0);const Se=Te.__webglTexture,je=q(I),Pe=_e?o.TEXTURE_CUBE_MAP_POSITIVE_X+ee:o.TEXTURE_2D,We=I.depthTexture.format===cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(I.depthTexture.format===_a)Mt(I)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,We,Pe,Se,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,We,Pe,Se,0);else if(I.depthTexture.format===cr)Mt(I)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,We,Pe,Se,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,We,Pe,Se,0);else throw new Error("Unknown depthTexture format")}function st(V){const I=a.get(V),ee=V.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==V.depthTexture){const _e=V.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),_e){const Te=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,_e.removeEventListener("dispose",Te)};_e.addEventListener("dispose",Te),I.__depthDisposeCallback=Te}I.__boundDepthTexture=_e}if(V.depthTexture&&!I.__autoAllocateDepthBuffer)if(ee)for(let _e=0;_e<6;_e++)Ue(I.__webglFramebuffer[_e],V,_e);else{const _e=V.texture.mipmaps;_e&&_e.length>0?Ue(I.__webglFramebuffer[0],V,0):Ue(I.__webglFramebuffer,V,0)}else if(ee){I.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(o.FRAMEBUFFER,I.__webglFramebuffer[_e]),I.__webglDepthbuffer[_e]===void 0)I.__webglDepthbuffer[_e]=o.createRenderbuffer(),Fe(I.__webglDepthbuffer[_e],V,!1);else{const Te=V.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,Se),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,Se)}}else{const _e=V.texture.mipmaps;if(_e&&_e.length>0?n.bindFramebuffer(o.FRAMEBUFFER,I.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=o.createRenderbuffer(),Fe(I.__webglDepthbuffer,V,!1);else{const Te=V.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Se),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,Se)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(V,I,ee){const _e=a.get(V);I!==void 0&&be(_e.__webglFramebuffer,V,V.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&st(V)}function Je(V){const I=V.texture,ee=a.get(V),_e=a.get(I);V.addEventListener("dispose",R);const Te=V.textures,Se=V.isWebGLCubeRenderTarget===!0,je=Te.length>1;if(je||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=I.version,u.memory.textures++),Se){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(I.mipmaps&&I.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let We=0;We<I.mipmaps.length;We++)ee.__webglFramebuffer[Pe][We]=o.createFramebuffer()}else ee.__webglFramebuffer[Pe]=o.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<I.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(je)for(let Pe=0,We=Te.length;Pe<We;Pe++){const j=a.get(Te[Pe]);j.__webglTexture===void 0&&(j.__webglTexture=o.createTexture(),u.memory.textures++)}if(V.samples>0&&Mt(V)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Te.length;Pe++){const We=Te[Pe];ee.__webglColorRenderbuffer[Pe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const j=l.convert(We.format,We.colorSpace),ue=l.convert(We.type),Ee=w(We.internalFormat,j,ue,We.colorSpace,V.isXRRenderTarget===!0),De=q(V);o.renderbufferStorageMultisample(o.RENDERBUFFER,De,Ee,V.width,V.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}o.bindRenderbuffer(o.RENDERBUFFER,null),V.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(ee.__webglDepthRenderbuffer,V,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Se){n.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),ie(o.TEXTURE_CUBE_MAP,I);for(let Pe=0;Pe<6;Pe++)if(I.mipmaps&&I.mipmaps.length>0)for(let We=0;We<I.mipmaps.length;We++)be(ee.__webglFramebuffer[Pe][We],V,I,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We);else be(ee.__webglFramebuffer[Pe],V,I,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(I)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Pe=0,We=Te.length;Pe<We;Pe++){const j=Te[Pe],ue=a.get(j);let Ee=o.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Ee=V.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ee,ue.__webglTexture),ie(Ee,j),be(ee.__webglFramebuffer,V,j,o.COLOR_ATTACHMENT0+Pe,Ee,0),x(j)&&A(Ee)}n.unbindTexture()}else{let Pe=o.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Pe=V.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Pe,_e.__webglTexture),ie(Pe,I),I.mipmaps&&I.mipmaps.length>0)for(let We=0;We<I.mipmaps.length;We++)be(ee.__webglFramebuffer[We],V,I,o.COLOR_ATTACHMENT0,Pe,We);else be(ee.__webglFramebuffer,V,I,o.COLOR_ATTACHMENT0,Pe,0);x(I)&&A(Pe),n.unbindTexture()}V.depthBuffer&&st(V)}function nt(V){const I=V.textures;for(let ee=0,_e=I.length;ee<_e;ee++){const Te=I[ee];if(x(Te)){const Se=T(V),je=a.get(Te).__webglTexture;n.bindTexture(Se,je),A(Se),n.unbindTexture()}}}const tt=[],at=[];function Dt(V){if(V.samples>0){if(Mt(V)===!1){const I=V.textures,ee=V.width,_e=V.height;let Te=o.COLOR_BUFFER_BIT;const Se=V.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=a.get(V),Pe=I.length>1;if(Pe)for(let j=0;j<I.length;j++)n.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+j,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+j,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const We=V.texture.mipmaps;We&&We.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let j=0;j<I.length;j++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(Te|=o.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(Te|=o.STENCIL_BUFFER_BIT)),Pe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[j]);const ue=a.get(I[j]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ue,0)}o.blitFramebuffer(0,0,ee,_e,0,0,ee,_e,Te,o.NEAREST),d===!0&&(tt.length=0,at.length=0,tt.push(o.COLOR_ATTACHMENT0+j),V.depthBuffer&&V.resolveDepthBuffer===!1&&(tt.push(Se),at.push(Se),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,at)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Pe)for(let j=0;j<I.length;j++){n.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+j,o.RENDERBUFFER,je.__webglColorRenderbuffer[j]);const ue=a.get(I[j]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+j,o.TEXTURE_2D,ue,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&d){const I=V.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[I])}}}function q(V){return Math.min(r.maxSamples,V.samples)}function Mt(V){const I=a.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function St(V){const I=u.render.frame;m.get(V)!==I&&(m.set(V,I),V.update())}function Bt(V,I){const ee=V.colorSpace,_e=V.format,Te=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||ee!==Mo&&ee!==Is&&(Ut.getTransfer(ee)===jt?(_e!==ri||Te!==Di)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",ee)),I}function Qe(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(h.width=V.naturalWidth||V.width,h.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(h.width=V.displayWidth,h.height=V.displayHeight):(h.width=V.width,h.height=V.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=vt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xA(o,e){function n(a,r=Is){let l;const u=Ut.getTransfer(r);if(a===Di)return o.UNSIGNED_BYTE;if(a===Kp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Zp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===J_)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===$_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===K_)return o.BYTE;if(a===Z_)return o.SHORT;if(a===kl)return o.UNSIGNED_SHORT;if(a===jp)return o.INT;if(a===si)return o.UNSIGNED_INT;if(a===Yi)return o.FLOAT;if(a===va)return o.HALF_FLOAT;if(a===eA)return o.ALPHA;if(a===tA)return o.RGB;if(a===ri)return o.RGBA;if(a===_a)return o.DEPTH_COMPONENT;if(a===cr)return o.DEPTH_STENCIL;if(a===nA)return o.RED;if(a===Zu)return o.RED_INTEGER;if(a===Eo)return o.RG;if(a===Jp)return o.RG_INTEGER;if(a===go)return o.RGBA_INTEGER;if(a===Ou||a===Nu||a===zu||a===Hu)if(u===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Ou)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Nu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Hu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Ou)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Nu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Hu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fp||a===dp||a===hp||a===pp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===fp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===dp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===hp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===pp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===mp||a===gp||a===Sp||a===vp||a===_p||a===Ap||a===xp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===mp||a===gp)return u===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Sp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===vp)return l.COMPRESSED_R11_EAC;if(a===_p)return l.COMPRESSED_SIGNED_R11_EAC;if(a===Ap)return l.COMPRESSED_RG11_EAC;if(a===xp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===yp||a===Ep||a===Mp||a===Tp||a===Cp||a===bp||a===Rp||a===wp||a===Dp||a===Ip||a===Up||a===Lp||a===Bp||a===Fp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===yp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ep)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Mp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Tp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Cp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===bp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Rp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Dp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ip)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Up)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Lp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Bp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Fp)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Pp||a===Op||a===Np)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Pp)return u===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Op)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Np)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===zp||a===Hp||a===Gp||a===Vp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===zp)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Hp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Gp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Vp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Xl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const pR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new mA(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ci({vertexShader:pR,fragmentShader:mR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new bo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SR extends Fs{constructor(e,n){super();const a=this;let r=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,g=null,v=null,_=null,y=null;const E=typeof XRWebGLBinding<"u",x=new gR,A={},T=n.getContextAttributes();let w=null,D=null;const b=[],L=[],R=new ke;let P=null;const C=new wi;C.viewport=new hn;const U=new wi;U.viewport=new hn;const N=[C,U],k=new bM;let X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=b[$];return ce===void 0&&(ce=new Fh,b[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=b[$];return ce===void 0&&(ce=new Fh,b[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=b[$];return ce===void 0&&(ce=new Fh,b[$]=ce),ce.getHandSpace()};function Q($){const ce=L.indexOf($.inputSource);if(ce===-1)return;const be=b[ce];be!==void 0&&(be.update($.inputSource,$.frame,h||u),be.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",G);for(let $=0;$<b.length;$++){const ce=L[$];ce!==null&&(L[$]=null,b[$].disconnect(ce))}X=null,W=null,x.reset();for(const $ in A)delete A[$];e.setRenderTarget(w),_=null,v=null,g=null,r=null,D=null,we.stop(),a.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,a.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,a.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",O),r.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,Ue=null;T.depth&&(Ue=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=T.stencil?cr:_a,Fe=T.stencil?Xl:si);const st={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(st),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new sa(v.textureWidth,v.textureHeight,{format:ri,type:Di,depthTexture:new Co(v.textureWidth,v.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new sa(_.framebufferWidth,_.framebufferHeight,{format:ri,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(f),we.setContext(r),we.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G($){for(let ce=0;ce<$.removed.length;ce++){const be=$.removed[ce],Fe=L.indexOf(be);Fe>=0&&(L[Fe]=null,b[Fe].disconnect(be))}for(let ce=0;ce<$.added.length;ce++){const be=$.added[ce];let Fe=L.indexOf(be);if(Fe===-1){for(let st=0;st<b.length;st++)if(st>=L.length){L.push(be),Fe=st;break}else if(L[st]===null){L[st]=be,Fe=st;break}if(Fe===-1)break}const Ue=b[Fe];Ue&&Ue.connect(be)}}const Z=new H,re=new H;function he($,ce,be){Z.setFromMatrixPosition(ce.matrixWorld),re.setFromMatrixPosition(be.matrixWorld);const Fe=Z.distanceTo(re),Ue=ce.projectionMatrix.elements,st=be.projectionMatrix.elements,vt=Ue[14]/(Ue[10]-1),Je=Ue[14]/(Ue[10]+1),nt=(Ue[9]+1)/Ue[5],tt=(Ue[9]-1)/Ue[5],at=(Ue[8]-1)/Ue[0],Dt=(st[8]+1)/st[0],q=vt*at,Mt=vt*Dt,St=Fe/(-at+Dt),Bt=St*-at;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(St),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Qe=vt+St,V=Je+St,I=q-Bt,ee=Mt+(Fe-Bt),_e=nt*Je/V*Qe,Te=tt*Je/V*Qe;$.projectionMatrix.makePerspective(I,ee,_e,Te,Qe,V),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function z($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ce=$.near,be=$.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(be=x.depthFar)),k.near=U.near=C.near=ce,k.far=U.far=C.far=be,(X!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,W=k.far),k.layers.mask=$.layers.mask|6,C.layers.mask=k.layers.mask&3,U.layers.mask=k.layers.mask&5;const Fe=$.parent,Ue=k.cameras;z(k,Fe);for(let st=0;st<Ue.length;st++)z(Ue[st],Fe);Ue.length===2?he(k,C,U):k.projectionMatrix.copy(C.projectionMatrix),ie($,k,Fe)};function ie($,ce,be){be===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ql*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&_===null))return d},this.setFoveation=function($){d=$,v!==null&&(v.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function($){return A[$]};let pe=null;function Me($,ce){if(m=ce.getViewerPose(h||u),y=ce,m!==null){const be=m.views;_!==null&&(e.setRenderTargetFramebuffer(D,_.framebuffer),e.setRenderTarget(D));let Fe=!1;be.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let Je=0;Je<be.length;Je++){const nt=be[Je];let tt=null;if(_!==null)tt=_.getViewport(nt);else{const Dt=g.getViewSubImage(v,nt);tt=Dt.viewport,Je===0&&(e.setRenderTargetTextures(D,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(D))}let at=N[Je];at===void 0&&(at=new wi,at.layers.enable(Je),at.viewport=new hn,N[Je]=at),at.matrix.fromArray(nt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(nt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(tt.x,tt.y,tt.width,tt.height),Je===0&&(k.matrix.copy(at.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(at)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const Je=g.getDepthInformation(be[0]);Je&&Je.isValid&&Je.texture&&x.init(Je,r.renderState)}if(Ue&&Ue.includes("camera-access")&&E){e.state.unbindTexture(),g=a.getBinding();for(let Je=0;Je<be.length;Je++){const nt=be[Je].camera;if(nt){let tt=A[nt];tt||(tt=new mA,A[nt]=tt);const at=g.getCameraImage(nt);tt.sourceTexture=at}}}}for(let be=0;be<b.length;be++){const Fe=L[be],Ue=b[be];Fe!==null&&Ue!==void 0&&Ue.update(Fe,ce,h||u)}pe&&pe($,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),y=null}const we=new gA;we.setAnimationLoop(Me),this.setAnimationLoop=function($){pe=$},this.dispose=function(){}}}const sr=new Aa,vR=new pt;function _R(o,e){function n(x,A){x.matrixAutoUpdate===!0&&x.updateMatrix(),A.value.copy(x.matrix)}function a(x,A){A.color.getRGB(x.fogColor.value,cA(o)),A.isFog?(x.fogNear.value=A.near,x.fogFar.value=A.far):A.isFogExp2&&(x.fogDensity.value=A.density)}function r(x,A,T,w,D){A.isMeshBasicMaterial||A.isMeshLambertMaterial?l(x,A):A.isMeshToonMaterial?(l(x,A),g(x,A)):A.isMeshPhongMaterial?(l(x,A),m(x,A)):A.isMeshStandardMaterial?(l(x,A),v(x,A),A.isMeshPhysicalMaterial&&_(x,A,D)):A.isMeshMatcapMaterial?(l(x,A),y(x,A)):A.isMeshDepthMaterial?l(x,A):A.isMeshDistanceMaterial?(l(x,A),E(x,A)):A.isMeshNormalMaterial?l(x,A):A.isLineBasicMaterial?(u(x,A),A.isLineDashedMaterial&&f(x,A)):A.isPointsMaterial?d(x,A,T,w):A.isSpriteMaterial?h(x,A):A.isShadowMaterial?(x.color.value.copy(A.color),x.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function l(x,A){x.opacity.value=A.opacity,A.color&&x.diffuse.value.copy(A.color),A.emissive&&x.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(x.map.value=A.map,n(A.map,x.mapTransform)),A.alphaMap&&(x.alphaMap.value=A.alphaMap,n(A.alphaMap,x.alphaMapTransform)),A.bumpMap&&(x.bumpMap.value=A.bumpMap,n(A.bumpMap,x.bumpMapTransform),x.bumpScale.value=A.bumpScale,A.side===Si&&(x.bumpScale.value*=-1)),A.normalMap&&(x.normalMap.value=A.normalMap,n(A.normalMap,x.normalMapTransform),x.normalScale.value.copy(A.normalScale),A.side===Si&&x.normalScale.value.negate()),A.displacementMap&&(x.displacementMap.value=A.displacementMap,n(A.displacementMap,x.displacementMapTransform),x.displacementScale.value=A.displacementScale,x.displacementBias.value=A.displacementBias),A.emissiveMap&&(x.emissiveMap.value=A.emissiveMap,n(A.emissiveMap,x.emissiveMapTransform)),A.specularMap&&(x.specularMap.value=A.specularMap,n(A.specularMap,x.specularMapTransform)),A.alphaTest>0&&(x.alphaTest.value=A.alphaTest);const T=e.get(A),w=T.envMap,D=T.envMapRotation;w&&(x.envMap.value=w,sr.copy(D),sr.x*=-1,sr.y*=-1,sr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),x.envMapRotation.value.setFromMatrix4(vR.makeRotationFromEuler(sr)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=A.reflectivity,x.ior.value=A.ior,x.refractionRatio.value=A.refractionRatio),A.lightMap&&(x.lightMap.value=A.lightMap,x.lightMapIntensity.value=A.lightMapIntensity,n(A.lightMap,x.lightMapTransform)),A.aoMap&&(x.aoMap.value=A.aoMap,x.aoMapIntensity.value=A.aoMapIntensity,n(A.aoMap,x.aoMapTransform))}function u(x,A){x.diffuse.value.copy(A.color),x.opacity.value=A.opacity,A.map&&(x.map.value=A.map,n(A.map,x.mapTransform))}function f(x,A){x.dashSize.value=A.dashSize,x.totalSize.value=A.dashSize+A.gapSize,x.scale.value=A.scale}function d(x,A,T,w){x.diffuse.value.copy(A.color),x.opacity.value=A.opacity,x.size.value=A.size*T,x.scale.value=w*.5,A.map&&(x.map.value=A.map,n(A.map,x.uvTransform)),A.alphaMap&&(x.alphaMap.value=A.alphaMap,n(A.alphaMap,x.alphaMapTransform)),A.alphaTest>0&&(x.alphaTest.value=A.alphaTest)}function h(x,A){x.diffuse.value.copy(A.color),x.opacity.value=A.opacity,x.rotation.value=A.rotation,A.map&&(x.map.value=A.map,n(A.map,x.mapTransform)),A.alphaMap&&(x.alphaMap.value=A.alphaMap,n(A.alphaMap,x.alphaMapTransform)),A.alphaTest>0&&(x.alphaTest.value=A.alphaTest)}function m(x,A){x.specular.value.copy(A.specular),x.shininess.value=Math.max(A.shininess,1e-4)}function g(x,A){A.gradientMap&&(x.gradientMap.value=A.gradientMap)}function v(x,A){x.metalness.value=A.metalness,A.metalnessMap&&(x.metalnessMap.value=A.metalnessMap,n(A.metalnessMap,x.metalnessMapTransform)),x.roughness.value=A.roughness,A.roughnessMap&&(x.roughnessMap.value=A.roughnessMap,n(A.roughnessMap,x.roughnessMapTransform)),A.envMap&&(x.envMapIntensity.value=A.envMapIntensity)}function _(x,A,T){x.ior.value=A.ior,A.sheen>0&&(x.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),x.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(x.sheenColorMap.value=A.sheenColorMap,n(A.sheenColorMap,x.sheenColorMapTransform)),A.sheenRoughnessMap&&(x.sheenRoughnessMap.value=A.sheenRoughnessMap,n(A.sheenRoughnessMap,x.sheenRoughnessMapTransform))),A.clearcoat>0&&(x.clearcoat.value=A.clearcoat,x.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(x.clearcoatMap.value=A.clearcoatMap,n(A.clearcoatMap,x.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,n(A.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(x.clearcoatNormalMap.value=A.clearcoatNormalMap,n(A.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Si&&x.clearcoatNormalScale.value.negate())),A.dispersion>0&&(x.dispersion.value=A.dispersion),A.iridescence>0&&(x.iridescence.value=A.iridescence,x.iridescenceIOR.value=A.iridescenceIOR,x.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(x.iridescenceMap.value=A.iridescenceMap,n(A.iridescenceMap,x.iridescenceMapTransform)),A.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=A.iridescenceThicknessMap,n(A.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),A.transmission>0&&(x.transmission.value=A.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),A.transmissionMap&&(x.transmissionMap.value=A.transmissionMap,n(A.transmissionMap,x.transmissionMapTransform)),x.thickness.value=A.thickness,A.thicknessMap&&(x.thicknessMap.value=A.thicknessMap,n(A.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=A.attenuationDistance,x.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(x.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(x.anisotropyMap.value=A.anisotropyMap,n(A.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=A.specularIntensity,x.specularColor.value.copy(A.specularColor),A.specularColorMap&&(x.specularColorMap.value=A.specularColorMap,n(A.specularColorMap,x.specularColorMapTransform)),A.specularIntensityMap&&(x.specularIntensityMap.value=A.specularIntensityMap,n(A.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,A){A.matcap&&(x.matcap.value=A.matcap)}function E(x,A){const T=e.get(A).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function AR(o,e,n,a){let r={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,w){const D=w.program;a.uniformBlockBinding(T,D)}function h(T,w){let D=r[T.id];D===void 0&&(y(T),D=m(T),r[T.id]=D,T.addEventListener("dispose",x));const b=w.program;a.updateUBOMapping(T,b);const L=e.render.frame;l[T.id]!==L&&(v(T),l[T.id]=L)}function m(T){const w=g();T.__bindingPointIndex=w;const D=o.createBuffer(),b=T.__size,L=T.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,b,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,D),D}function g(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const w=r[T.id],D=T.uniforms,b=T.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let L=0,R=D.length;L<R;L++){const P=Array.isArray(D[L])?D[L]:[D[L]];for(let C=0,U=P.length;C<U;C++){const N=P[C];if(_(N,L,C,b)===!0){const k=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let Q=0;Q<X.length;Q++){const O=X[Q],G=E(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,k+W,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):(O.toArray(N.__data,W),W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(T,w,D,b){const L=T.value,R=w+"_"+D;if(b[R]===void 0)return typeof L=="number"||typeof L=="boolean"?b[R]=L:b[R]=L.clone(),!0;{const P=b[R];if(typeof L=="number"||typeof L=="boolean"){if(P!==L)return b[R]=L,!0}else if(P.equals(L)===!1)return P.copy(L),!0}return!1}function y(T){const w=T.uniforms;let D=0;const b=16;for(let R=0,P=w.length;R<P;R++){const C=Array.isArray(w[R])?w[R]:[w[R]];for(let U=0,N=C.length;U<N;U++){const k=C[U],X=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Q=X.length;W<Q;W++){const O=X[W],G=E(O),Z=D%b,re=Z%G.boundary,he=Z+re;D+=re,he!==0&&b-he<G.storage&&(D+=b-he),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=D,D+=G.storage}}}const L=D%b;return L>0&&(D+=b-L),T.__size=D,T.__cache={},this}function E(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",T),w}function x(T){const w=T.target;w.removeEventListener("dispose",x);const D=u.indexOf(w.__bindingPointIndex);u.splice(D,1),o.deleteBuffer(r[w.id]),delete r[w.id],delete l[w.id]}function A(){for(const T in r)o.deleteBuffer(r[T]);u=[],r={},l={}}return{bind:d,update:h,dispose:A}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fa=null;function yR(){return fa===null&&(fa=new Wa(xR,16,16,Eo,va),fa.name="DFG_LUT",fa.minFilter=ei,fa.magFilter=ei,fa.wrapS=ja,fa.wrapT=ja,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class yA{constructor(e={}){const{canvas:n=RE(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:_=Di}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=_,x=new Set([go,Jp,Zu]),A=new Set([Di,si,kl,Xl,Kp,Zp]),T=new Uint32Array(4),w=new Int32Array(4);let D=null,b=null;const L=[],R=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=ki;let N=0,k=0,X=null,W=-1,Q=null;const O=new hn,G=new hn;let Z=null;const re=new Lt(0);let he=0,z=n.width,ie=n.height,pe=1,Me=null,we=null;const $=new hn(0,0,z,ie),ce=new hn(0,0,z,ie);let be=!1;const Fe=new pA;let Ue=!1,st=!1;const vt=new pt,Je=new H,nt=new hn,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Dt(){return X===null?pe:1}let q=a;function Mt(F,te){return n.getContext(F,te)}try{const F={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qp}`),n.addEventListener("webglcontextlost",lt,!1),n.addEventListener("webglcontextrestored",Wt,!1),n.addEventListener("webglcontextcreationerror",It,!1),q===null){const te="webgl2";if(q=Mt(te,F),q===null)throw Mt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw Nt("WebGLRenderer: "+F.message),F}let St,Bt,Qe,V,I,ee,_e,Te,Se,je,Pe,We,j,ue,Ee,De,Le,Be,ft,J,ze,Re,Oe,Ce;function Ae(){St=new Eb(q),St.init(),Re=new xA(q,St),Bt=new pb(q,St,e,Re),Qe=new dR(q,St),Bt.reversedDepthBuffer&&v&&Qe.buffers.depth.setReversed(!0),V=new Cb(q),I=new Z1,ee=new hR(q,St,Qe,I,Bt,Re,V),_e=new gb(C),Te=new yb(C),Se=new DM(q),Oe=new db(q,Se),je=new Mb(q,Se,V,Oe),Pe=new Rb(q,je,Se,V),ft=new bb(q,Bt,ee),De=new mb(I),We=new K1(C,_e,Te,St,Bt,Oe,De),j=new _R(C,I),ue=new $1,Ee=new sR(St),Be=new fb(C,_e,Te,Qe,Pe,y,d),Le=new uR(C,Pe,Bt),Ce=new AR(q,V,Bt,Qe),J=new hb(q,St,V),ze=new Tb(q,St,V),V.programs=We.programs,C.capabilities=Bt,C.extensions=St,C.properties=I,C.renderLists=ue,C.shadowMap=Le,C.state=Qe,C.info=V}Ae(),E!==Di&&(P=new Db(E,n.width,n.height,r,l));const Ie=new SR(C,q);this.xr=Ie,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const F=St.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=St.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(F){F!==void 0&&(pe=F,this.setSize(z,ie,!1))},this.getSize=function(F){return F.set(z,ie)},this.setSize=function(F,te,me=!0){if(Ie.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}z=F,ie=te,n.width=Math.floor(F*pe),n.height=Math.floor(te*pe),me===!0&&(n.style.width=F+"px",n.style.height=te+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,F,te)},this.getDrawingBufferSize=function(F){return F.set(z*pe,ie*pe).floor()},this.setDrawingBufferSize=function(F,te,me){z=F,ie=te,pe=me,n.width=Math.floor(F*me),n.height=Math.floor(te*me),this.setViewport(0,0,F,te)},this.setEffects=function(F){if(E===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let te=0;te<F.length;te++)if(F[te].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(O)},this.getViewport=function(F){return F.copy($)},this.setViewport=function(F,te,me,fe){F.isVector4?$.set(F.x,F.y,F.z,F.w):$.set(F,te,me,fe),Qe.viewport(O.copy($).multiplyScalar(pe).round())},this.getScissor=function(F){return F.copy(ce)},this.setScissor=function(F,te,me,fe){F.isVector4?ce.set(F.x,F.y,F.z,F.w):ce.set(F,te,me,fe),Qe.scissor(G.copy(ce).multiplyScalar(pe).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(F){Qe.setScissorTest(be=F)},this.setOpaqueSort=function(F){Me=F},this.setTransparentSort=function(F){we=F},this.getClearColor=function(F){return F.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(F=!0,te=!0,me=!0){let fe=0;if(F){let ae=!1;if(X!==null){const He=X.texture.format;ae=x.has(He)}if(ae){const He=X.texture.type,Xe=A.has(He),Ge=Be.getClearColor(),qe=Be.getClearAlpha(),Ke=Ge.r,ot=Ge.g,Ze=Ge.b;Xe?(T[0]=Ke,T[1]=ot,T[2]=Ze,T[3]=qe,q.clearBufferuiv(q.COLOR,0,T)):(w[0]=Ke,w[1]=ot,w[2]=Ze,w[3]=qe,q.clearBufferiv(q.COLOR,0,w))}else fe|=q.COLOR_BUFFER_BIT}te&&(fe|=q.DEPTH_BUFFER_BIT),me&&(fe|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",lt,!1),n.removeEventListener("webglcontextrestored",Wt,!1),n.removeEventListener("webglcontextcreationerror",It,!1),Be.dispose(),ue.dispose(),Ee.dispose(),I.dispose(),_e.dispose(),Te.dispose(),Pe.dispose(),Oe.dispose(),Ce.dispose(),We.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",pr),Ie.removeEventListener("sessionend",Bo),ra.stop()};function lt(F){F.preventDefault(),Av("WebGLRenderer: Context Lost."),U=!0}function Wt(){Av("WebGLRenderer: Context Restored."),U=!1;const F=V.autoReset,te=Le.enabled,me=Le.autoUpdate,fe=Le.needsUpdate,ae=Le.type;Ae(),V.autoReset=F,Le.enabled=te,Le.autoUpdate=me,Le.needsUpdate=fe,Le.type=ae}function It(F){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function jn(F){const te=F.target;te.removeEventListener("dispose",jn),ji(te)}function ji(F){Kl(F),I.remove(F)}function Kl(F){const te=I.get(F).programs;te!==void 0&&(te.forEach(function(me){We.releaseProgram(me)}),F.isShaderMaterial&&We.releaseShaderCache(F))}this.renderBufferDirect=function(F,te,me,fe,ae,He){te===null&&(te=tt);const Xe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ge=Ps(F,te,me,fe,ae);Qe.setMaterial(fe,Xe);let qe=me.index,Ke=1;if(fe.wireframe===!0){if(qe=je.getWireframeAttribute(me),qe===void 0)return;Ke=2}const ot=me.drawRange,Ze=me.attributes.position;let ct=ot.start*Ke,zt=(ot.start+ot.count)*Ke;He!==null&&(ct=Math.max(ct,He.start*Ke),zt=Math.min(zt,(He.start+He.count)*Ke)),qe!==null?(ct=Math.max(ct,0),zt=Math.min(zt,qe.count)):Ze!=null&&(ct=Math.max(ct,0),zt=Math.min(zt,Ze.count));const cn=zt-ct;if(cn<0||cn===1/0)return;Oe.setup(ae,fe,Ge,me,qe);let an,kt=J;if(qe!==null&&(an=Se.get(qe),kt=ze,kt.setIndex(an)),ae.isMesh)fe.wireframe===!0?(Qe.setLineWidth(fe.wireframeLinewidth*Dt()),kt.setMode(q.LINES)):kt.setMode(q.TRIANGLES);else if(ae.isLine){let it=fe.linewidth;it===void 0&&(it=1),Qe.setLineWidth(it*Dt()),ae.isLineSegments?kt.setMode(q.LINES):ae.isLineLoop?kt.setMode(q.LINE_LOOP):kt.setMode(q.LINE_STRIP)}else ae.isPoints?kt.setMode(q.POINTS):ae.isSprite&&kt.setMode(q.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)Wl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))kt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const it=ae._multiDrawStarts,Ht=ae._multiDrawCounts,mt=ae._multiDrawCount,On=qe?Se.get(qe).bytesPerElement:1,xa=I.get(fe).currentProgram.getUniforms();for(let Nn=0;Nn<mt;Nn++)xa.setValue(q,"_gl_DrawID",Nn),kt.render(it[Nn]/On,Ht[Nn])}else if(ae.isInstancedMesh)kt.renderInstances(ct,cn,ae.count);else if(me.isInstancedBufferGeometry){const it=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ht=Math.min(me.instanceCount,it);kt.renderInstances(ct,cn,Ht)}else kt.render(ct,cn)};function Uo(F,te,me){F.transparent===!0&&F.side===qi&&F.forceSinglePass===!1?(F.side=Si,F.needsUpdate=!0,gr(F,te,me),F.side=Sa,F.needsUpdate=!0,gr(F,te,me),F.side=qi):gr(F,te,me)}this.compile=function(F,te,me=null){me===null&&(me=F),b=Ee.get(me),b.init(te),R.push(b),me.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(b.pushLight(ae),ae.castShadow&&b.pushShadow(ae))}),F!==me&&F.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(b.pushLight(ae),ae.castShadow&&b.pushShadow(ae))}),b.setupLights();const fe=new Set;return F.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const He=ae.material;if(He)if(Array.isArray(He))for(let Xe=0;Xe<He.length;Xe++){const Ge=He[Xe];Uo(Ge,me,ae),fe.add(Ge)}else Uo(He,me,ae),fe.add(He)}),b=R.pop(),fe},this.compileAsync=function(F,te,me=null){const fe=this.compile(F,te,me);return new Promise(ae=>{function He(){if(fe.forEach(function(Xe){I.get(Xe).currentProgram.isReady()&&fe.delete(Xe)}),fe.size===0){ae(F);return}setTimeout(He,10)}St.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let hr=null;function Lo(F){hr&&hr(F)}function pr(){ra.stop()}function Bo(){ra.start()}const ra=new gA;ra.setAnimationLoop(Lo),typeof self<"u"&&ra.setContext(self),this.setAnimationLoop=function(F){hr=F,Ie.setAnimationLoop(F),F===null?ra.stop():ra.start()},Ie.addEventListener("sessionstart",pr),Ie.addEventListener("sessionend",Bo),this.render=function(F,te){if(te!==void 0&&te.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const me=Ie.enabled===!0&&Ie.isPresenting===!0,fe=P!==null&&(X===null||me)&&P.begin(C,X);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(te),te=Ie.getCamera()),F.isScene===!0&&F.onBeforeRender(C,F,te,X),b=Ee.get(F,R.length),b.init(te),R.push(b),vt.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Fe.setFromProjectionMatrix(vt,ha,te.reversedDepth),st=this.localClippingEnabled,Ue=De.init(this.clippingPlanes,st),D=ue.get(F,L.length),D.init(),L.push(D),Ie.enabled===!0&&Ie.isPresenting===!0){const Xe=C.xr.getDepthSensingMesh();Xe!==null&&Ui(Xe,te,-1/0,C.sortObjects)}Ui(F,te,0,C.sortObjects),D.finish(),C.sortObjects===!0&&D.sort(Me,we),at=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,at&&Be.addToRenderList(D,F),this.info.render.frame++,Ue===!0&&De.beginShadows();const ae=b.state.shadowsArray;if(Le.render(ae,F,te),Ue===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe&&P.hasRenderPass())===!1){const Xe=D.opaque,Ge=D.transmissive;if(b.setupLights(),te.isArrayCamera){const qe=te.cameras;if(Ge.length>0)for(let Ke=0,ot=qe.length;Ke<ot;Ke++){const Ze=qe[Ke];Pn(Xe,Ge,F,Ze)}at&&Be.render(F);for(let Ke=0,ot=qe.length;Ke<ot;Ke++){const Ze=qe[Ke];xn(D,F,Ze,Ze.viewport)}}else Ge.length>0&&Pn(Xe,Ge,F,te),at&&Be.render(F),xn(D,F,te)}X!==null&&k===0&&(ee.updateMultisampleRenderTarget(X),ee.updateRenderTargetMipmap(X)),fe&&P.end(C),F.isScene===!0&&F.onAfterRender(C,F,te),Oe.resetDefaultState(),W=-1,Q=null,R.pop(),R.length>0?(b=R[R.length-1],Ue===!0&&De.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?D=L[L.length-1]:D=null};function Ui(F,te,me,fe){if(F.visible===!1)return;if(F.layers.test(te.layers)){if(F.isGroup)me=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(te);else if(F.isLight)b.pushLight(F),F.castShadow&&b.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Fe.intersectsSprite(F)){fe&&nt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(vt);const Xe=Pe.update(F),Ge=F.material;Ge.visible&&D.push(F,Xe,Ge,me,nt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Fe.intersectsObject(F))){const Xe=Pe.update(F),Ge=F.material;if(fe&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),nt.copy(F.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),nt.copy(Xe.boundingSphere.center)),nt.applyMatrix4(F.matrixWorld).applyMatrix4(vt)),Array.isArray(Ge)){const qe=Xe.groups;for(let Ke=0,ot=qe.length;Ke<ot;Ke++){const Ze=qe[Ke],ct=Ge[Ze.materialIndex];ct&&ct.visible&&D.push(F,Xe,ct,me,nt.z,Ze)}}else Ge.visible&&D.push(F,Xe,Ge,me,nt.z,null)}}const He=F.children;for(let Xe=0,Ge=He.length;Xe<Ge;Xe++)Ui(He[Xe],te,me,fe)}function xn(F,te,me,fe){const{opaque:ae,transmissive:He,transparent:Xe}=F;b.setupLightsView(me),Ue===!0&&De.setGlobalState(C.clippingPlanes,me),fe&&Qe.viewport(O.copy(fe)),ae.length>0&&Ki(ae,te,me),He.length>0&&Ki(He,te,me),Xe.length>0&&Ki(Xe,te,me),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Pn(F,te,me,fe){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[fe.id]===void 0){const ct=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[fe.id]=new sa(1,1,{generateMipmaps:!0,type:ct?va:Di,minFilter:lr,samples:Bt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const He=b.state.transmissionRenderTarget[fe.id],Xe=fe.viewport||O;He.setSize(Xe.z*C.transmissionResolutionScale,Xe.w*C.transmissionResolutionScale);const Ge=C.getRenderTarget(),qe=C.getActiveCubeFace(),Ke=C.getActiveMipmapLevel();C.setRenderTarget(He),C.getClearColor(re),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),at&&Be.render(me);const ot=C.toneMapping;C.toneMapping=ga;const Ze=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),b.setupLightsView(fe),Ue===!0&&De.setGlobalState(C.clippingPlanes,fe),Ki(F,me,fe),ee.updateMultisampleRenderTarget(He),ee.updateRenderTargetMipmap(He),St.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let zt=0,cn=te.length;zt<cn;zt++){const an=te[zt],{object:kt,geometry:it,material:Ht,group:mt}=an;if(Ht.side===qi&&kt.layers.test(fe.layers)){const On=Ht.side;Ht.side=Si,Ht.needsUpdate=!0,mr(kt,me,fe,it,Ht,mt),Ht.side=On,Ht.needsUpdate=!0,ct=!0}}ct===!0&&(ee.updateMultisampleRenderTarget(He),ee.updateRenderTargetMipmap(He))}C.setRenderTarget(Ge,qe,Ke),C.setClearColor(re,he),Ze!==void 0&&(fe.viewport=Ze),C.toneMapping=ot}function Ki(F,te,me){const fe=te.isScene===!0?te.overrideMaterial:null;for(let ae=0,He=F.length;ae<He;ae++){const Xe=F[ae],{object:Ge,geometry:qe,group:Ke}=Xe;let ot=Xe.material;ot.allowOverride===!0&&fe!==null&&(ot=fe),Ge.layers.test(me.layers)&&mr(Ge,te,me,qe,ot,Ke)}}function mr(F,te,me,fe,ae,He){F.onBeforeRender(C,te,me,fe,ae,He),F.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ae.onBeforeRender(C,te,me,fe,F,He),ae.transparent===!0&&ae.side===qi&&ae.forceSinglePass===!1?(ae.side=Si,ae.needsUpdate=!0,C.renderBufferDirect(me,te,fe,ae,F,He),ae.side=Sa,ae.needsUpdate=!0,C.renderBufferDirect(me,te,fe,ae,F,He),ae.side=qi):C.renderBufferDirect(me,te,fe,ae,F,He),F.onAfterRender(C,te,me,fe,ae,He)}function gr(F,te,me){te.isScene!==!0&&(te=tt);const fe=I.get(F),ae=b.state.lights,He=b.state.shadowsArray,Xe=ae.state.version,Ge=We.getParameters(F,ae.state,He,te,me),qe=We.getProgramCacheKey(Ge);let Ke=fe.programs;fe.environment=F.isMeshStandardMaterial?te.environment:null,fe.fog=te.fog,fe.envMap=(F.isMeshStandardMaterial?Te:_e).get(F.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&F.envMap===null?te.environmentRotation:F.envMapRotation,Ke===void 0&&(F.addEventListener("dispose",jn),Ke=new Map,fe.programs=Ke);let ot=Ke.get(qe);if(ot!==void 0){if(fe.currentProgram===ot&&fe.lightsStateVersion===Xe)return Fo(F,Ge),ot}else Ge.uniforms=We.getUniforms(F),F.onBeforeCompile(Ge,C),ot=We.acquireProgram(Ge,qe),Ke.set(qe,ot),fe.uniforms=Ge.uniforms;const Ze=fe.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ze.clippingPlanes=De.uniform),Fo(F,Ge),fe.needsLights=Ja(F),fe.lightsStateVersion=Xe,fe.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMap.value=ae.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotShadowMap.value=ae.state.spotShadowMap,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMap.value=ae.state.pointShadowMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),fe.currentProgram=ot,fe.uniformsList=null,ot}function Zl(F){if(F.uniformsList===null){const te=F.currentProgram.getUniforms();F.uniformsList=Gu.seqWithValue(te.seq,F.uniforms)}return F.uniformsList}function Fo(F,te){const me=I.get(F);me.outputColorSpace=te.outputColorSpace,me.batching=te.batching,me.batchingColor=te.batchingColor,me.instancing=te.instancing,me.instancingColor=te.instancingColor,me.instancingMorph=te.instancingMorph,me.skinning=te.skinning,me.morphTargets=te.morphTargets,me.morphNormals=te.morphNormals,me.morphColors=te.morphColors,me.morphTargetsCount=te.morphTargetsCount,me.numClippingPlanes=te.numClippingPlanes,me.numIntersection=te.numClipIntersection,me.vertexAlphas=te.vertexAlphas,me.vertexTangents=te.vertexTangents,me.toneMapping=te.toneMapping}function Ps(F,te,me,fe,ae){te.isScene!==!0&&(te=tt),ee.resetTextureUnits();const He=te.fog,Xe=fe.isMeshStandardMaterial?te.environment:null,Ge=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Mo,qe=(fe.isMeshStandardMaterial?Te:_e).get(fe.envMap||Xe),Ke=fe.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,ot=!!me.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Ze=!!me.morphAttributes.position,ct=!!me.morphAttributes.normal,zt=!!me.morphAttributes.color;let cn=ga;fe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(cn=C.toneMapping);const an=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,kt=an!==void 0?an.length:0,it=I.get(fe),Ht=b.state.lights;if(Ue===!0&&(st===!0||F!==Q)){const Hn=F===Q&&fe.id===W;De.setState(fe,F,Hn)}let mt=!1;fe.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ht.state.version||it.outputColorSpace!==Ge||ae.isBatchedMesh&&it.batching===!1||!ae.isBatchedMesh&&it.batching===!0||ae.isBatchedMesh&&it.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&it.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&it.instancing===!1||!ae.isInstancedMesh&&it.instancing===!0||ae.isSkinnedMesh&&it.skinning===!1||!ae.isSkinnedMesh&&it.skinning===!0||ae.isInstancedMesh&&it.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&it.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&it.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&it.instancingMorph===!1&&ae.morphTexture!==null||it.envMap!==qe||fe.fog===!0&&it.fog!==He||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==De.numPlanes||it.numIntersection!==De.numIntersection)||it.vertexAlphas!==Ke||it.vertexTangents!==ot||it.morphTargets!==Ze||it.morphNormals!==ct||it.morphColors!==zt||it.toneMapping!==cn||it.morphTargetsCount!==kt)&&(mt=!0):(mt=!0,it.__version=fe.version);let On=it.currentProgram;mt===!0&&(On=gr(fe,te,ae));let xa=!1,Nn=!1,Li=!1;const qt=On.getUniforms(),zn=it.uniforms;if(Qe.useProgram(On.program)&&(xa=!0,Nn=!0,Li=!0),fe.id!==W&&(W=fe.id,Nn=!0),xa||Q!==F){Qe.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),qt.setValue(q,"projectionMatrix",F.projectionMatrix),qt.setValue(q,"viewMatrix",F.matrixWorldInverse);const Gn=qt.map.cameraPosition;Gn!==void 0&&Gn.setValue(q,Je.setFromMatrixPosition(F.matrixWorld)),Bt.logarithmicDepthBuffer&&qt.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&qt.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),Q!==F&&(Q=F,Nn=!0,Li=!0)}if(it.needsLights&&(Ht.state.directionalShadowMap.length>0&&qt.setValue(q,"directionalShadowMap",Ht.state.directionalShadowMap,ee),Ht.state.spotShadowMap.length>0&&qt.setValue(q,"spotShadowMap",Ht.state.spotShadowMap,ee),Ht.state.pointShadowMap.length>0&&qt.setValue(q,"pointShadowMap",Ht.state.pointShadowMap,ee)),ae.isSkinnedMesh){qt.setOptional(q,ae,"bindMatrix"),qt.setOptional(q,ae,"bindMatrixInverse");const Hn=ae.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),qt.setValue(q,"boneTexture",Hn.boneTexture,ee))}ae.isBatchedMesh&&(qt.setOptional(q,ae,"batchingTexture"),qt.setValue(q,"batchingTexture",ae._matricesTexture,ee),qt.setOptional(q,ae,"batchingIdTexture"),qt.setValue(q,"batchingIdTexture",ae._indirectTexture,ee),qt.setOptional(q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&qt.setValue(q,"batchingColorTexture",ae._colorsTexture,ee));const bn=me.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&ft.update(ae,me,On),(Nn||it.receiveShadow!==ae.receiveShadow)&&(it.receiveShadow=ae.receiveShadow,qt.setValue(q,"receiveShadow",ae.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(zn.envMap.value=qe,zn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&te.environment!==null&&(zn.envMapIntensity.value=te.environmentIntensity),zn.dfgLUT!==void 0&&(zn.dfgLUT.value=yR()),Nn&&(qt.setValue(q,"toneMappingExposure",C.toneMappingExposure),it.needsLights&&Po(zn,Li),He&&fe.fog===!0&&j.refreshFogUniforms(zn,He),j.refreshMaterialUniforms(zn,fe,pe,ie,b.state.transmissionRenderTarget[F.id]),Gu.upload(q,Zl(it),zn,ee)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Gu.upload(q,Zl(it),zn,ee),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&qt.setValue(q,"center",ae.center),qt.setValue(q,"modelViewMatrix",ae.modelViewMatrix),qt.setValue(q,"normalMatrix",ae.normalMatrix),qt.setValue(q,"modelMatrix",ae.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Hn=fe.uniformsGroups;for(let Gn=0,Sr=Hn.length;Gn<Sr;Gn++){const Zi=Hn[Gn];Ce.update(Zi,On),Ce.bind(Zi,On)}}return On}function Po(F,te){F.ambientLightColor.needsUpdate=te,F.lightProbe.needsUpdate=te,F.directionalLights.needsUpdate=te,F.directionalLightShadows.needsUpdate=te,F.pointLights.needsUpdate=te,F.pointLightShadows.needsUpdate=te,F.spotLights.needsUpdate=te,F.spotLightShadows.needsUpdate=te,F.rectAreaLights.needsUpdate=te,F.hemisphereLights.needsUpdate=te}function Ja(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(F,te,me){const fe=I.get(F);fe.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),I.get(F.texture).__webglTexture=te,I.get(F.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:me,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,te){const me=I.get(F);me.__webglFramebuffer=te,me.__useDefaultFramebuffer=te===void 0};const $a=q.createFramebuffer();this.setRenderTarget=function(F,te=0,me=0){X=F,N=te,k=me;let fe=null,ae=!1,He=!1;if(F){const Ge=I.get(F);if(Ge.__useDefaultFramebuffer!==void 0){Qe.bindFramebuffer(q.FRAMEBUFFER,Ge.__webglFramebuffer),O.copy(F.viewport),G.copy(F.scissor),Z=F.scissorTest,Qe.viewport(O),Qe.scissor(G),Qe.setScissorTest(Z),W=-1;return}else if(Ge.__webglFramebuffer===void 0)ee.setupRenderTarget(F);else if(Ge.__hasExternalTextures)ee.rebindTextures(F,I.get(F.texture).__webglTexture,I.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const ot=F.depthTexture;if(Ge.__boundDepthTexture!==ot){if(ot!==null&&I.has(ot)&&(F.width!==ot.image.width||F.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(F)}}const qe=F.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(He=!0);const Ke=I.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ke[te])?fe=Ke[te][me]:fe=Ke[te],ae=!0):F.samples>0&&ee.useMultisampledRTT(F)===!1?fe=I.get(F).__webglMultisampledFramebuffer:Array.isArray(Ke)?fe=Ke[me]:fe=Ke,O.copy(F.viewport),G.copy(F.scissor),Z=F.scissorTest}else O.copy($).multiplyScalar(pe).floor(),G.copy(ce).multiplyScalar(pe).floor(),Z=be;if(me!==0&&(fe=$a),Qe.bindFramebuffer(q.FRAMEBUFFER,fe)&&Qe.drawBuffers(F,fe),Qe.viewport(O),Qe.scissor(G),Qe.setScissorTest(Z),ae){const Ge=I.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ge.__webglTexture,me)}else if(He){const Ge=te;for(let qe=0;qe<F.textures.length;qe++){const Ke=I.get(F.textures[qe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+qe,Ke.__webglTexture,me,Ge)}}else if(F!==null&&me!==0){const Ge=I.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ge.__webglTexture,me)}W=-1},this.readRenderTargetPixels=function(F,te,me,fe,ae,He,Xe,Ge=0){if(!(F&&F.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=I.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){Qe.bindFramebuffer(q.FRAMEBUFFER,qe);try{const Ke=F.textures[Ge],ot=Ke.format,Ze=Ke.type;if(!Bt.textureFormatReadable(ot)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ze)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=F.width-fe&&me>=0&&me<=F.height-ae&&(F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ge),q.readPixels(te,me,fe,ae,Re.convert(ot),Re.convert(Ze),He))}finally{const Ke=X!==null?I.get(X).__webglFramebuffer:null;Qe.bindFramebuffer(q.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(F,te,me,fe,ae,He,Xe,Ge=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=I.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(te>=0&&te<=F.width-fe&&me>=0&&me<=F.height-ae){Qe.bindFramebuffer(q.FRAMEBUFFER,qe);const Ke=F.textures[Ge],ot=Ke.format,Ze=Ke.type;if(!Bt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ct),q.bufferData(q.PIXEL_PACK_BUFFER,He.byteLength,q.STREAM_READ),F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ge),q.readPixels(te,me,fe,ae,Re.convert(ot),Re.convert(Ze),0);const zt=X!==null?I.get(X).__webglFramebuffer:null;Qe.bindFramebuffer(q.FRAMEBUFFER,zt);const cn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await wE(q,cn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ct),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,He),q.deleteBuffer(ct),q.deleteSync(cn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,te=null,me=0){const fe=Math.pow(2,-me),ae=Math.floor(F.image.width*fe),He=Math.floor(F.image.height*fe),Xe=te!==null?te.x:0,Ge=te!==null?te.y:0;ee.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,me,0,0,Xe,Ge,ae,He),Qe.unbindTexture()};const Os=q.createFramebuffer(),es=q.createFramebuffer();this.copyTextureToTexture=function(F,te,me=null,fe=null,ae=0,He=null){He===null&&(ae!==0?(Wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),He=ae,ae=0):He=0);let Xe,Ge,qe,Ke,ot,Ze,ct,zt,cn;const an=F.isCompressedTexture?F.mipmaps[He]:F.image;if(me!==null)Xe=me.max.x-me.min.x,Ge=me.max.y-me.min.y,qe=me.isBox3?me.max.z-me.min.z:1,Ke=me.min.x,ot=me.min.y,Ze=me.isBox3?me.min.z:0;else{const bn=Math.pow(2,-ae);Xe=Math.floor(an.width*bn),Ge=Math.floor(an.height*bn),F.isDataArrayTexture?qe=an.depth:F.isData3DTexture?qe=Math.floor(an.depth*bn):qe=1,Ke=0,ot=0,Ze=0}fe!==null?(ct=fe.x,zt=fe.y,cn=fe.z):(ct=0,zt=0,cn=0);const kt=Re.convert(te.format),it=Re.convert(te.type);let Ht;te.isData3DTexture?(ee.setTexture3D(te,0),Ht=q.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(ee.setTexture2DArray(te,0),Ht=q.TEXTURE_2D_ARRAY):(ee.setTexture2D(te,0),Ht=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const mt=q.getParameter(q.UNPACK_ROW_LENGTH),On=q.getParameter(q.UNPACK_IMAGE_HEIGHT),xa=q.getParameter(q.UNPACK_SKIP_PIXELS),Nn=q.getParameter(q.UNPACK_SKIP_ROWS),Li=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,an.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,an.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Ke),q.pixelStorei(q.UNPACK_SKIP_ROWS,ot),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ze);const qt=F.isDataArrayTexture||F.isData3DTexture,zn=te.isDataArrayTexture||te.isData3DTexture;if(F.isDepthTexture){const bn=I.get(F),Hn=I.get(te),Gn=I.get(bn.__renderTarget),Sr=I.get(Hn.__renderTarget);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Zi=0;Zi<qe;Zi++)qt&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(F).__webglTexture,ae,Ze+Zi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(te).__webglTexture,He,cn+Zi)),q.blitFramebuffer(Ke,ot,Xe,Ge,ct,zt,Xe,Ge,q.DEPTH_BUFFER_BIT,q.NEAREST);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||F.isRenderTargetTexture||I.has(F)){const bn=I.get(F),Hn=I.get(te);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,Os),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,es);for(let Gn=0;Gn<qe;Gn++)qt?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bn.__webglTexture,ae,Ze+Gn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bn.__webglTexture,ae),zn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Hn.__webglTexture,He,cn+Gn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Hn.__webglTexture,He),ae!==0?q.blitFramebuffer(Ke,ot,Xe,Ge,ct,zt,Xe,Ge,q.COLOR_BUFFER_BIT,q.NEAREST):zn?q.copyTexSubImage3D(Ht,He,ct,zt,cn+Gn,Ke,ot,Xe,Ge):q.copyTexSubImage2D(Ht,He,ct,zt,Ke,ot,Xe,Ge);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else zn?F.isDataTexture||F.isData3DTexture?q.texSubImage3D(Ht,He,ct,zt,cn,Xe,Ge,qe,kt,it,an.data):te.isCompressedArrayTexture?q.compressedTexSubImage3D(Ht,He,ct,zt,cn,Xe,Ge,qe,kt,an.data):q.texSubImage3D(Ht,He,ct,zt,cn,Xe,Ge,qe,kt,it,an):F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,He,ct,zt,Xe,Ge,kt,it,an.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,He,ct,zt,an.width,an.height,kt,an.data):q.texSubImage2D(q.TEXTURE_2D,He,ct,zt,Xe,Ge,kt,it,an);q.pixelStorei(q.UNPACK_ROW_LENGTH,mt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,On),q.pixelStorei(q.UNPACK_SKIP_PIXELS,xa),q.pixelStorei(q.UNPACK_SKIP_ROWS,Nn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Li),He===0&&te.generateMipmaps&&q.generateMipmap(Ht),Qe.unbindTexture()},this.initRenderTarget=function(F){I.get(F).__webglFramebuffer===void 0&&ee.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?ee.setTextureCube(F,0):F.isData3DTexture?ee.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?ee.setTexture2DArray(F,0):ee.setTexture2D(F,0),Qe.unbindTexture()},this.resetState=function(){N=0,k=0,X=null,Qe.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ut._getUnpackColorSpace()}}const l_={type:"change"},rm={type:"start"},EA={type:"end"},Ru=new am,c_=new qa,ER=Math.cos(70*Ju.DEG2RAD),wn=new H,gi=2*Math.PI,tn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kh=1e-6;let MR=class extends RM{constructor(e,n=null){super(e,n),this.state=tn.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new sn,this._lastTargetPosition=new H,this._quat=new sn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qu,this._sphericalDelta=new qu,this._scale=1,this._panOffset=new H,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new H,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CR.bind(this),this._onPointerDown=TR.bind(this),this._onPointerUp=bR.bind(this),this._onContextMenu=BR.bind(this),this._onMouseWheel=DR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=UR.bind(this),this._onTouchMove=LR.bind(this),this._onMouseDown=RR.bind(this),this._onMouseMove=wR.bind(this),this._interceptControlDown=FR.bind(this),this._interceptControlUp=PR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(l_),this.update(),this.state=tn.NONE}update(e=null){const n=this.object.position;wn.copy(n).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===tn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=gi:a>Math.PI&&(a-=gi),r<-Math.PI?r+=gi:r>Math.PI&&(r-=gi),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),n.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=wn.length();u=this._clampDistance(f*this._scale);const d=f-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(f),this.object.updateMatrixWorld(),u=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ru.origin.copy(this.object.position),Ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ru.direction))<ER?this.object.lookAt(this.target):(c_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ru.intersectPlane(c_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kh||this._lastTargetPosition.distanceToSquared(this.target)>kh?(this.dispatchEvent(l_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gi/60*this.autoRotateSpeed*e:gi/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wn.setFromMatrixColumn(n,0),wn.multiplyScalar(-e),this._panOffset.add(wn)}_panUp(e,n){this.screenSpacePanning===!0?wn.setFromMatrixColumn(n,1):(wn.setFromMatrixColumn(n,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(e),this._panOffset.add(wn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wn.copy(r).sub(this.target);let l=wn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*n*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=e-a.left,l=n-a.top,u=a.width,f=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/n.clientHeight),this._rotateUp(gi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(a,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,l=Math.sqrt(a*a+r*r);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(r,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/n.clientHeight),this._rotateUp(gi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,l=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ke,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}};function TR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function CR(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function bR(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(EA),this.state=tn.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function RR(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=tn.DOLLY;break;case Xi.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=tn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=tn.ROTATE}break;case Xi.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=tn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=tn.PAN}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(rm)}function wR(o){switch(this.state){case tn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case tn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function DR(o){this.enabled===!1||this.enableZoom===!1||this.state!==tn.NONE||(o.preventDefault(),this.dispatchEvent(rm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(EA))}function IR(o){this.enabled!==!1&&this._handleKeyDown(o)}function UR(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=tn.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=tn.TOUCH_PAN;break;default:this.state=tn.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=tn.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=tn.TOUCH_DOLLY_ROTATE;break;default:this.state=tn.NONE}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(rm)}function LR(o){switch(this._trackPointer(o),this.state){case tn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case tn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case tn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case tn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=tn.NONE}}function BR(o){this.enabled!==!1&&o.preventDefault()}function FR(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PR(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ls{static idGen=0;constructor(e,n){let a,r;this.promise=new Promise((h,m)=>{a=h,r=m});const l=a.bind(this),u=r.bind(this),f=(...h)=>{l(...h)},d=h=>{u(h)};e(f.bind(this),d.bind(this)),this.abortHandler=n,this.id=Ls.idGen++}then(e){return new Ls((n,a)=>{this.promise=this.promise.then((...r)=>{const l=e(...r);l instanceof Promise||l instanceof Ls?l.then((...u)=>{n(...u)}):n(l)}).catch(r=>{a(r)})},this.abortHandler)}catch(e){return new Ls(n=>{this.promise=this.promise.then((...a)=>{n(...a)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}}class MA extends Error{constructor(e){super(e)}}(function(){const o=new Float32Array(1),e=new Int32Array(o.buffer);return function(n){o[0]=n;const a=e[0];let r=a>>16&32768,l=a>>12&2047;const u=a>>23&255;return u<103?r:u>142?(r|=31744,r|=(u==255?0:1)&&a&8388607,r):u<113?(l|=2048,r|=(l>>114-u)+(l>>113-u&1),r):(r|=u-112<<10|l>>1,r+=l&1,r)}})();const Xh=(function(){const o=new Float32Array(1),e=new Int32Array(o.buffer);return function(n){return o[0]=n,e[0]}})(),OR=function(o,e){return o[e]+(o[e+1]<<8)+(o[e+2]<<16)+(o[e+3]<<24)},af=function(o,e,n=!0,a){const r=new AbortController,l=r.signal;let u=!1;const f=m=>{r.abort(m),u=!0};let d=!1;const h=(m,g,v,_)=>{e&&!d&&(e(m,g,v,_),m===100&&(d=!0))};return new Ls((m,g)=>{const v={signal:l};a&&(v.headers=a),fetch(o,v).then(async _=>{if(!_.ok){const w=await _.text();g(new Error(`Fetch failed: ${_.status} ${_.statusText} ${w}`));return}const y=_.body.getReader();let E=0,x=_.headers.get("Content-Length"),A=x?parseInt(x):void 0;const T=[];for(;!u;)try{const{value:w,done:D}=await y.read();if(D){if(h(100,"100%",w,A),n){const R=new Blob(T).arrayBuffer();m(R)}else m();break}E+=w.length;let b,L;A!==void 0&&(b=E/A*100,L=`${b.toFixed(2)}%`),n&&T.push(w),h(b,L,w,A)}catch(w){g(w);return}}).catch(_=>{g(new MA(_))})},f)},dn=function(o,e,n){return Math.max(Math.min(o,n),e)},co=function(){return performance.now()/1e3},po=o=>{if(o.geometry&&(o.geometry.dispose(),o.geometry=null),o.material&&(o.material.dispose(),o.material=null),o.children)for(let e of o.children)po(e)},Ii=(o,e)=>new Promise(n=>{window.setTimeout(()=>{n(o?o():void 0)},e?1:50)}),vo=(o=0)=>{let e=0;if(o===1)e=9;else if(o===2)e=24;else if(o===3)e=45;else if(o>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},om=()=>{let o,e;return{promise:new Promise((a,r)=>{o=a,e=r}),resolve:o,reject:e}},Wh=o=>{let e,n;return o||(o=()=>{}),{promise:new Ls((r,l)=>{e=r,n=l},o),resolve:e,reject:n}};class NR{constructor(e,n,a){this.major=e,this.minor=n,this.patch=a}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function lm(){const o=navigator.userAgent;return o.indexOf("iPhone")>0||o.indexOf("iPad")>0}function TA(){if(lm()){const o=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new NR(parseInt(o[1]||0,10),parseInt(o[2]||0,10),parseInt(o[3]||0,10))}else return null}const zR=14;class Ne{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=vo(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+zR,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const n=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let a=vo(e);for(let r=0;r<a;r++)n.push(0);return n}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=Ne.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,n,a,r,l,u,f,d,h,m,g,v,_,y,...E){const x=[e,n,a,r,l,u,f,d,h,m,g,v,_,y,...this.defaultSphericalHarmonics];for(let A=0;A<E.length&&A<this.sphericalHarmonicsCount;A++)x[A]=E[A];return this.addSplat(x),x}addSplatFromArray(e,n){const a=e.splats[n],r=Ne.createSplat(this.sphericalHarmonicsDegree);for(let l=0;l<this.componentCount&&l<a.length;l++)r[l]=a[l];this.addSplat(r)}}class en{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3}const HR=en.SphericalHarmonics8BitCompressionRange,Ds=HR/2,Dn=Yl.toHalfFloat.bind(Yl),cm=Yl.fromHalfFloat.bind(Yl),fn=(o,e,n=!1,a,r)=>{if(e===0)return o;if(e===1||e===2&&!n)return Yl.fromHalfFloat(o);if(e===2)return um(o,a,r)},Pl=(o,e,n)=>{o=dn(o,e,n);const a=n-e;return dn(Math.floor((o-e)/a*255),0,255)},um=(o,e,n)=>{const a=n-e;return o/255*a+e},CA=(o,e,n)=>Pl(cm(o,e,n)),GR=(o,e,n)=>Dn(um(o,e,n)),Xt=(o,e,n,a=!1)=>n===0?o.getFloat32(e*4,!0):n===1||n===2&&!a?o.getUint16(e*2,!0):o.getUint8(e,!0),VR=(function(){const o=e=>e;return function(e,n,a,r=!1){if(n===a)return e;let l=o;return n===2&&r?a===1?l=GR:a==0&&(l=um):n===2||n===1?a===0?l=cm:a==2&&(r?l=CA:l=o):n===0&&(a===1?l=Dn:a==2&&(r?l=Pl:l=Dn)),l(e)}})(),uo=(o,e,n,a,r=0)=>{const l=new Uint8Array(o,e),u=new Uint8Array(n,a);for(let f=0;f<r;f++)u[f]=l[f]};class se{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,n=!0){this.constructFromBuffer(e,n)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let n=0;n<this.sections.length;n++){const a=this.sections[n];(n===0||a.sphericalHarmonicsDegree<e)&&(e=a.sphericalHarmonicsDegree)}return e}getBucketIndex(e,n){let a;const r=e.fullBucketCount*e.bucketSize;if(n<r)a=Math.floor(n/e.bucketSize);else{let l=r;a=e.fullBucketCount;let u=0;for(;l<e.splatCount;){let f=e.partiallyFilledBucketLengths[u];if(n>=l&&n<l+f)break;l+=f,a++,u++}}return a}getSplatCenter(e,n,a){const r=this.globalSplatIndexToSectionMap[e],l=this.sections[r],u=e-l.splatCountOffset,f=l.bytesPerSplat*u,d=new DataView(this.bufferData,l.dataBase+f),h=Xt(d,0,this.compressionLevel),m=Xt(d,1,this.compressionLevel),g=Xt(d,2,this.compressionLevel);if(this.compressionLevel>=1){const _=this.getBucketIndex(l,u)*se.BucketStorageSizeFloats,y=l.compressionScaleFactor,E=l.compressionScaleRange;n.x=(h-E)*y+l.bucketArray[_],n.y=(m-E)*y+l.bucketArray[_+1],n.z=(g-E)*y+l.bucketArray[_+2]}else n.x=h,n.y=m,n.z=g;a&&n.applyMatrix4(a)}getSplatScaleAndRotation=(function(){const e=new pt,n=new pt,a=new pt,r=new H,l=new H,u=new sn;return function(f,d,h,m,g){const v=this.globalSplatIndexToSectionMap[f],_=this.sections[v],y=f-_.splatCountOffset,E=_.bytesPerSplat*y+se.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,x=new DataView(this.bufferData,_.dataBase+E);l.set(fn(Xt(x,0,this.compressionLevel),this.compressionLevel),fn(Xt(x,1,this.compressionLevel),this.compressionLevel),fn(Xt(x,2,this.compressionLevel),this.compressionLevel)),g&&(g.x!==void 0&&(l.x=g.x),g.y!==void 0&&(l.y=g.y),g.z!==void 0&&(l.z=g.z)),u.set(fn(Xt(x,4,this.compressionLevel),this.compressionLevel),fn(Xt(x,5,this.compressionLevel),this.compressionLevel),fn(Xt(x,6,this.compressionLevel),this.compressionLevel),fn(Xt(x,3,this.compressionLevel),this.compressionLevel)),m?(e.makeScale(l.x,l.y,l.z),n.makeRotationFromQuaternion(u),a.copy(e).multiply(n).multiply(m),a.decompose(r,h,d)):(d.copy(l),h.copy(u))}})();getSplatColor(e,n){const a=this.globalSplatIndexToSectionMap[e],r=this.sections[a],l=e-r.splatCountOffset,u=r.bytesPerSplat*l+se.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,r.dataBase+u,4);n.set(f[0],f[1],f[2],f[3])}fillSplatCenterArray(e,n,a,r,l){const u=this.splatCount;a=a||0,r=r||u-1,l===void 0&&(l=a);const f=new H;for(let d=a;d<=r;d++){const h=this.globalSplatIndexToSectionMap[d],m=this.sections[h],g=d-m.splatCountOffset,v=(d-a+l)*se.CenterComponentCount,_=m.bytesPerSplat*g,y=new DataView(this.bufferData,m.dataBase+_),E=Xt(y,0,this.compressionLevel),x=Xt(y,1,this.compressionLevel),A=Xt(y,2,this.compressionLevel);if(this.compressionLevel>=1){const w=this.getBucketIndex(m,g)*se.BucketStorageSizeFloats,D=m.compressionScaleFactor,b=m.compressionScaleRange;f.x=(E-b)*D+m.bucketArray[w],f.y=(x-b)*D+m.bucketArray[w+1],f.z=(A-b)*D+m.bucketArray[w+2]}else f.x=E,f.y=x,f.z=A;n&&f.applyMatrix4(n),e[v]=f.x,e[v+1]=f.y,e[v+2]=f.z}}fillSplatScaleRotationArray=(function(){const e=new pt,n=new pt,a=new pt,r=new H,l=new sn,u=new H,f=d=>{const h=d.w<0?-1:1;d.x*=h,d.y*=h,d.z*=h,d.w*=h};return function(d,h,m,g,v,_,y,E){const x=this.splatCount;g=g||0,v=v||x-1,_===void 0&&(_=g);const A=(T,w)=>VR(T,w,y);for(let T=g;T<=v;T++){const w=this.globalSplatIndexToSectionMap[T],D=this.sections[w],b=T-D.splatCountOffset,L=D.bytesPerSplat*b+se.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,R=(T-g+_)*se.ScaleComponentCount,P=(T-g+_)*se.RotationComponentCount,C=new DataView(this.bufferData,D.dataBase+L),U=E&&E.x!==void 0?E.x:Xt(C,0,this.compressionLevel),N=E&&E.y!==void 0?E.y:Xt(C,1,this.compressionLevel),k=E&&E.z!==void 0?E.z:Xt(C,2,this.compressionLevel),X=Xt(C,3,this.compressionLevel),W=Xt(C,4,this.compressionLevel),Q=Xt(C,5,this.compressionLevel),O=Xt(C,6,this.compressionLevel);r.set(fn(U,this.compressionLevel),fn(N,this.compressionLevel),fn(k,this.compressionLevel)),l.set(fn(W,this.compressionLevel),fn(Q,this.compressionLevel),fn(O,this.compressionLevel),fn(X,this.compressionLevel)).normalize(),m&&(u.set(0,0,0),e.makeScale(r.x,r.y,r.z),n.makeRotationFromQuaternion(l),a.identity().premultiply(e).premultiply(n),a.premultiply(m),a.decompose(u,l,r),l.normalize()),f(l),d&&(d[R]=A(r.x,0),d[R+1]=A(r.y,0),d[R+2]=A(r.z,0)),h&&(h[P]=A(l.x,0),h[P+1]=A(l.y,0),h[P+2]=A(l.z,0),h[P+3]=A(l.w,0))}}})();static computeCovariance=(function(){const e=new pt,n=new dt,a=new dt,r=new dt,l=new dt,u=new dt,f=new dt;return function(d,h,m,g,v=0,_){e.makeScale(d.x,d.y,d.z),n.setFromMatrix4(e),e.makeRotationFromQuaternion(h),a.setFromMatrix4(e),r.copy(a).multiply(n),l.copy(r).transpose().premultiply(r),m&&(u.setFromMatrix4(m),f.copy(u).transpose(),l.multiply(f),l.premultiply(u)),_>=1?(g[v]=Dn(l.elements[0]),g[v+1]=Dn(l.elements[3]),g[v+2]=Dn(l.elements[6]),g[v+3]=Dn(l.elements[4]),g[v+4]=Dn(l.elements[7]),g[v+5]=Dn(l.elements[8])):(g[v]=l.elements[0],g[v+1]=l.elements[3],g[v+2]=l.elements[6],g[v+3]=l.elements[4],g[v+4]=l.elements[7],g[v+5]=l.elements[8])}})();fillSplatCovarianceArray(e,n,a,r,l,u){const f=this.splatCount,d=new H,h=new sn;a=a||0,r=r||f-1,l===void 0&&(l=a);for(let m=a;m<=r;m++){const g=this.globalSplatIndexToSectionMap[m],v=this.sections[g],_=m-v.splatCountOffset,y=(m-a+l)*se.CovarianceComponentCount,E=v.bytesPerSplat*_+se.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,x=new DataView(this.bufferData,v.dataBase+E);d.set(fn(Xt(x,0,this.compressionLevel),this.compressionLevel),fn(Xt(x,1,this.compressionLevel),this.compressionLevel),fn(Xt(x,2,this.compressionLevel),this.compressionLevel)),h.set(fn(Xt(x,4,this.compressionLevel),this.compressionLevel),fn(Xt(x,5,this.compressionLevel),this.compressionLevel),fn(Xt(x,6,this.compressionLevel),this.compressionLevel),fn(Xt(x,3,this.compressionLevel),this.compressionLevel)),se.computeCovariance(d,h,n,e,y,u)}}fillSplatColorArray(e,n,a,r,l){const u=this.splatCount;a=a||0,r=r||u-1,l===void 0&&(l=a);for(let f=a;f<=r;f++){const d=this.globalSplatIndexToSectionMap[f],h=this.sections[d],m=f-h.splatCountOffset,g=(f-a+l)*se.ColorComponentCount,v=h.bytesPerSplat*m+se.CompressionLevels[this.compressionLevel].ColorOffsetBytes,_=new Uint8Array(this.bufferData,h.dataBase+v);let y=_[3];y=y>=n?y:0,e[g]=_[0],e[g+1]=_[1],e[g+2]=_[2],e[g+3]=y}}fillSphericalHarmonicsArray=(function(){for(let W=0;W<15;W++)new H;const e=new dt,n=new pt,a=new H,r=new H,l=new sn,u=[],f=[],d=[],h=[],m=[],g=[],v=[],_=[],y=[],E=[],x=[],A=[],T=[],w=[],D=[],b=[],L=[],R=[],P=W=>W,C=(W,Q,O,G)=>{W[0]=Q,W[1]=O,W[2]=G},U=(W,Q,O,G,Z)=>{W[0]=Xt(Q,G,Z,!0),W[1]=Xt(Q,G+O,Z,!0),W[2]=Xt(Q,G+O+O,Z,!0)},N=(W,Q)=>{Q[0]=W[0],Q[1]=W[1],Q[2]=W[2]},k=(W,Q,O,G)=>{Q[O]=G(W[0]),Q[O+1]=G(W[1]),Q[O+2]=G(W[2])},X=(W,Q,O,G,Z)=>(Q[0]=fn(W[0],O,!0,G,Z),Q[1]=fn(W[1],O,!0,G,Z),Q[2]=fn(W[2],O,!0,G,Z),Q);return function(W,Q,O,G,Z,re,he){const z=this.splatCount;G=G||0,Z=Z||z-1,re===void 0&&(re=G),O&&Q>=1&&(n.copy(O),n.decompose(a,l,r),l.normalize(),n.makeRotationFromQuaternion(l),e.setFromMatrix4(n),C(u,e.elements[4],-e.elements[7],e.elements[1]),C(f,-e.elements[5],e.elements[8],-e.elements[2]),C(d,e.elements[3],-e.elements[6],e.elements[0]));const ie=Me=>CA(Me,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),pe=Me=>Pl(Me,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Me=G;Me<=Z;Me++){const we=this.globalSplatIndexToSectionMap[Me],$=this.sections[we];Q=Math.min(Q,$.sphericalHarmonicsDegree);const ce=vo(Q),be=Me-$.splatCountOffset,Fe=$.bytesPerSplat*be+se.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Ue=new DataView(this.bufferData,$.dataBase+Fe),st=(Me-G+re)*ce;let vt=O?0:this.compressionLevel,Je=P;vt!==he&&(vt===1?he===0?Je=cm:he==2&&(Je=ie):vt===0&&(he===1?Je=Dn:he==2&&(Je=pe)));const nt=this.minSphericalHarmonicsCoeff,tt=this.maxSphericalHarmonicsCoeff;Q>=1&&(U(y,Ue,3,0,this.compressionLevel),U(E,Ue,3,1,this.compressionLevel),U(x,Ue,3,2,this.compressionLevel),O?(X(y,y,this.compressionLevel,nt,tt),X(E,E,this.compressionLevel,nt,tt),X(x,x,this.compressionLevel,nt,tt),se.rotateSphericalHarmonics3(y,E,x,u,f,d,w,D,b)):(N(y,w),N(E,D),N(x,b)),k(w,W,st,Je),k(D,W,st+3,Je),k(b,W,st+6,Je),Q>=2&&(U(y,Ue,5,9,this.compressionLevel),U(E,Ue,5,10,this.compressionLevel),U(x,Ue,5,11,this.compressionLevel),U(A,Ue,5,12,this.compressionLevel),U(T,Ue,5,13,this.compressionLevel),O?(X(y,y,this.compressionLevel,nt,tt),X(E,E,this.compressionLevel,nt,tt),X(x,x,this.compressionLevel,nt,tt),X(A,A,this.compressionLevel,nt,tt),X(T,T,this.compressionLevel,nt,tt),se.rotateSphericalHarmonics5(y,E,x,A,T,u,f,d,h,m,g,v,_,w,D,b,L,R)):(N(y,w),N(E,D),N(x,b),N(A,L),N(T,R)),k(w,W,st+9,Je),k(D,W,st+12,Je),k(b,W,st+15,Je),k(L,W,st+18,Je),k(R,W,st+21,Je)))}}})();static dot3=(e,n,a,r,l)=>{l[0]=l[1]=l[2]=0;const u=r[0],f=r[1],d=r[2];se.addInto3(e[0]*u,e[1]*u,e[2]*u,l),se.addInto3(n[0]*f,n[1]*f,n[2]*f,l),se.addInto3(a[0]*d,a[1]*d,a[2]*d,l)};static addInto3=(e,n,a,r)=>{r[0]=r[0]+e,r[1]=r[1]+n,r[2]=r[2]+a};static dot5=(e,n,a,r,l,u,f)=>{f[0]=f[1]=f[2]=0;const d=u[0],h=u[1],m=u[2],g=u[3],v=u[4];se.addInto3(e[0]*d,e[1]*d,e[2]*d,f),se.addInto3(n[0]*h,n[1]*h,n[2]*h,f),se.addInto3(a[0]*m,a[1]*m,a[2]*m,f),se.addInto3(r[0]*g,r[1]*g,r[2]*g,f),se.addInto3(l[0]*v,l[1]*v,l[2]*v,f)};static rotateSphericalHarmonics3=(e,n,a,r,l,u,f,d,h)=>{se.dot3(e,n,a,r,f),se.dot3(e,n,a,l,d),se.dot3(e,n,a,u,h)};static rotateSphericalHarmonics5=(e,n,a,r,l,u,f,d,h,m,g,v,_,y,E,x,A,T)=>{const w=Math.sqrt(.25),D=Math.sqrt(3/4),b=Math.sqrt(1/3),L=Math.sqrt(4/3),R=Math.sqrt(1/12);h[0]=w*(d[2]*u[0]+d[0]*u[2]+(u[2]*d[0]+u[0]*d[2])),h[1]=d[1]*u[0]+u[1]*d[0],h[2]=D*(d[1]*u[1]+u[1]*d[1]),h[3]=d[1]*u[2]+u[1]*d[2],h[4]=w*(d[2]*u[2]-d[0]*u[0]+(u[2]*d[2]-u[0]*d[0])),se.dot5(e,n,a,r,l,h,y),m[0]=w*(f[2]*u[0]+f[0]*u[2]+(u[2]*f[0]+u[0]*f[2])),m[1]=f[1]*u[0]+u[1]*f[0],m[2]=D*(f[1]*u[1]+u[1]*f[1]),m[3]=f[1]*u[2]+u[1]*f[2],m[4]=w*(f[2]*u[2]-f[0]*u[0]+(u[2]*f[2]-u[0]*f[0])),se.dot5(e,n,a,r,l,m,E),g[0]=b*(f[2]*f[0]+f[0]*f[2])+-R*(d[2]*d[0]+d[0]*d[2]+(u[2]*u[0]+u[0]*u[2])),g[1]=L*f[1]*f[0]+-b*(d[1]*d[0]+u[1]*u[0]),g[2]=f[1]*f[1]+-w*(d[1]*d[1]+u[1]*u[1]),g[3]=L*f[1]*f[2]+-b*(d[1]*d[2]+u[1]*u[2]),g[4]=b*(f[2]*f[2]-f[0]*f[0])+-R*(d[2]*d[2]-d[0]*d[0]+(u[2]*u[2]-u[0]*u[0])),se.dot5(e,n,a,r,l,g,x),v[0]=w*(f[2]*d[0]+f[0]*d[2]+(d[2]*f[0]+d[0]*f[2])),v[1]=f[1]*d[0]+d[1]*f[0],v[2]=D*(f[1]*d[1]+d[1]*f[1]),v[3]=f[1]*d[2]+d[1]*f[2],v[4]=w*(f[2]*d[2]-f[0]*d[0]+(d[2]*f[2]-d[0]*f[0])),se.dot5(e,n,a,r,l,v,A),_[0]=w*(d[2]*d[0]+d[0]*d[2]-(u[2]*u[0]+u[0]*u[2])),_[1]=d[1]*d[0]-u[1]*u[0],_[2]=D*(d[1]*d[1]-u[1]*u[1]),_[3]=d[1]*d[2]-u[1]*u[2],_[4]=w*(d[2]*d[2]-d[0]*d[0]-(u[2]*u[2]-u[0]*u[0])),se.dot5(e,n,a,r,l,_,T)};static parseHeader(e){const n=new Uint8Array(e,0,se.HeaderSizeBytes),a=new Uint16Array(e,0,se.HeaderSizeBytes/2),r=new Uint32Array(e,0,se.HeaderSizeBytes/4),l=new Float32Array(e,0,se.HeaderSizeBytes/4),u=n[0],f=n[1],d=r[1],h=r[2],m=r[3],g=r[4],v=a[10],_=new H(l[6],l[7],l[8]),y=l[9]||-Ds,E=l[10]||Ds;return{versionMajor:u,versionMinor:f,maxSectionCount:d,sectionCount:h,maxSplatCount:m,splatCount:g,compressionLevel:v,sceneCenter:_,minSphericalHarmonicsCoeff:y,maxSphericalHarmonicsCoeff:E}}static writeHeaderCountsToBuffer(e,n,a){const r=new Uint32Array(a,0,se.HeaderSizeBytes/4);r[2]=e,r[4]=n}static writeHeaderToBuffer(e,n){const a=new Uint8Array(n,0,se.HeaderSizeBytes),r=new Uint16Array(n,0,se.HeaderSizeBytes/2),l=new Uint32Array(n,0,se.HeaderSizeBytes/4),u=new Float32Array(n,0,se.HeaderSizeBytes/4);a[0]=e.versionMajor,a[1]=e.versionMinor,a[2]=0,a[3]=0,l[1]=e.maxSectionCount,l[2]=e.sectionCount,l[3]=e.maxSplatCount,l[4]=e.splatCount,r[10]=e.compressionLevel,u[6]=e.sceneCenter.x,u[7]=e.sceneCenter.y,u[8]=e.sceneCenter.z,u[9]=e.minSphericalHarmonicsCoeff||-Ds,u[10]=e.maxSphericalHarmonicsCoeff||Ds}static parseSectionHeaders(e,n,a=0,r){const l=e.compressionLevel,u=e.maxSectionCount,f=new Uint16Array(n,a,u*se.SectionHeaderSizeBytes/2),d=new Uint32Array(n,a,u*se.SectionHeaderSizeBytes/4),h=new Float32Array(n,a,u*se.SectionHeaderSizeBytes/4),m=[];let g=0,v=g/2,_=g/4,y=se.HeaderSizeBytes+e.maxSectionCount*se.SectionHeaderSizeBytes,E=0;for(let x=0;x<u;x++){const A=d[_+1],T=d[_+2],w=d[_+3],D=h[_+4],b=D/2,L=f[v+10],R=d[_+6]||se.CompressionLevels[l].ScaleRange,P=d[_+8],C=d[_+9],U=C*4,N=L*w+U,k=f[v+20],{bytesPerSplat:X}=se.calculateComponentStorage(l,k),W=X*A,Q=W+N,O={bytesPerSplat:X,splatCountOffset:E,splatCount:r?A:0,maxSplatCount:A,bucketSize:T,bucketCount:w,bucketBlockSize:D,halfBucketBlockSize:b,bucketStorageSizeBytes:L,bucketsStorageSizeBytes:N,splatDataStorageSizeBytes:W,storageSizeBytes:Q,compressionScaleRange:R,compressionScaleFactor:b/R,base:y,bucketsBase:y+U,dataBase:y+N,fullBucketCount:P,partiallyFilledBucketCount:C,sphericalHarmonicsDegree:k};m[x]=O,y+=Q,g+=se.SectionHeaderSizeBytes,v=g/2,_=g/4,E+=A}return m}static writeSectionHeaderToBuffer(e,n,a,r=0){const l=new Uint16Array(a,r,se.SectionHeaderSizeBytes/2),u=new Uint32Array(a,r,se.SectionHeaderSizeBytes/4),f=new Float32Array(a,r,se.SectionHeaderSizeBytes/4);u[0]=e.splatCount,u[1]=e.maxSplatCount,u[2]=n>=1?e.bucketSize:0,u[3]=n>=1?e.bucketCount:0,f[4]=n>=1?e.bucketBlockSize:0,l[10]=n>=1?se.BucketStorageSizeBytes:0,u[6]=n>=1?e.compressionScaleRange:0,u[7]=e.storageSizeBytes,u[8]=n>=1?e.fullBucketCount:0,u[9]=n>=1?e.partiallyFilledBucketCount:0,l[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,n,a=0){const r=new Uint32Array(n,a,se.SectionHeaderSizeBytes/4);r[0]=e}constructFromBuffer(e,n){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const a=se.parseHeader(this.bufferData);this.versionMajor=a.versionMajor,this.versionMinor=a.versionMinor,this.maxSectionCount=a.maxSectionCount,this.sectionCount=n?a.maxSectionCount:0,this.maxSplatCount=a.maxSplatCount,this.splatCount=n?a.maxSplatCount:0,this.compressionLevel=a.compressionLevel,this.sceneCenter=new H().copy(a.sceneCenter),this.minSphericalHarmonicsCoeff=a.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=a.maxSphericalHarmonicsCoeff,this.sections=se.parseSectionHeaders(a,this.bufferData,se.HeaderSizeBytes,n),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,n){const a=se.CompressionLevels[e].BytesPerCenter,r=se.CompressionLevels[e].BytesPerScale,l=se.CompressionLevels[e].BytesPerRotation,u=se.CompressionLevels[e].BytesPerColor,f=vo(n),d=se.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*f,h=a+r+l+u+d;return{bytesPerCenter:a,bytesPerScale:r,bytesPerRotation:l,bytesPerColor:u,sphericalHarmonicsComponentsPerSplat:f,sphericalHarmonicsBytesPerSplat:d,bytesPerSplat:h}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const n=this.sections[e];n.bucketArray=new Float32Array(this.bufferData,n.bucketsBase,n.bucketCount*se.BucketStorageSizeFloats),n.partiallyFilledBucketCount>0&&(n.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,n.base,n.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let n=0;n<this.maxSectionCount;n++){const a=this.sections[n];for(let r=0;r<a.maxSplatCount;r++){const l=e+r;this.globalSplatIndexToLocalSplatIndexMap[l]=r,this.globalSplatIndexToSectionMap[l]=n}e+=a.maxSplatCount}}updateLoadedCounts(e,n){se.writeHeaderCountsToBuffer(e,n,this.bufferData),this.sectionCount=e,this.splatCount=n}updateSectionLoadedCounts(e,n){const a=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*e;se.writeSectionHeaderSplatCountToBuffer(n,this.bufferData,a),this.sections[e].splatCount=n}static writeSplatDataToSectionBuffer=(function(){const e=new ArrayBuffer(12),n=new ArrayBuffer(12),a=new ArrayBuffer(16),r=new ArrayBuffer(4),l=new ArrayBuffer(256),u=new sn,f=new H,d=new H,{X:h,Y:m,Z:g,SCALE0:v,SCALE1:_,SCALE2:y,ROTATION0:E,ROTATION1:x,ROTATION2:A,ROTATION3:T,FDC0:w,FDC1:D,FDC2:b,OPACITY:L,FRC0:R,FRC9:P}=Ne.OFFSET,C=(U,N,k)=>{const X=k*2+1;return U=Math.round(U*N)+k,dn(U,0,X)};return function(U,N,k,X,W,Q,O,G,Z=-Ds,re=Ds){const he=vo(W),z=se.CompressionLevels[X].BytesPerCenter,ie=se.CompressionLevels[X].BytesPerScale,pe=se.CompressionLevels[X].BytesPerRotation,Me=se.CompressionLevels[X].BytesPerColor,we=k,$=we+z,ce=$+ie,be=ce+pe,Fe=be+Me;if(U[E]!==void 0?(u.set(U[E],U[x],U[A],U[T]),u.normalize()):u.set(1,0,0,0),U[v]!==void 0?f.set(U[v]||0,U[_]||0,U[y]||0):f.set(0,0,0),X===0){const st=new Float32Array(N,we,se.CenterComponentCount),vt=new Float32Array(N,ce,se.RotationComponentCount),Je=new Float32Array(N,$,se.ScaleComponentCount);if(vt.set([u.x,u.y,u.z,u.w]),Je.set([f.x,f.y,f.z]),st.set([U[h],U[m],U[g]]),W>0){const nt=new Float32Array(N,Fe,he);if(W>=1){for(let tt=0;tt<9;tt++)nt[tt]=U[R+tt]||0;if(W>=2)for(let tt=0;tt<15;tt++)nt[tt+9]=U[P+tt]||0}}}else{const st=new Uint16Array(e,0,se.CenterComponentCount),vt=new Uint16Array(a,0,se.RotationComponentCount),Je=new Uint16Array(n,0,se.ScaleComponentCount);if(vt.set([Dn(u.x),Dn(u.y),Dn(u.z),Dn(u.w)]),Je.set([Dn(f.x),Dn(f.y),Dn(f.z)]),d.set(U[h],U[m],U[g]).sub(Q),d.x=C(d.x,O,G),d.y=C(d.y,O,G),d.z=C(d.z,O,G),st.set([d.x,d.y,d.z]),W>0){const nt=X===1?Uint16Array:Uint8Array,tt=X===1?2:1,at=new nt(l,0,he);if(W>=1){for(let q=0;q<9;q++){const Mt=U[R+q]||0;at[q]=X===1?Dn(Mt):Pl(Mt,Z,re)}const Dt=9*tt;if(uo(at.buffer,0,N,Fe,Dt),W>=2){for(let q=0;q<15;q++){const Mt=U[P+q]||0;at[q+9]=X===1?Dn(Mt):Pl(Mt,Z,re)}uo(at.buffer,Dt,N,Fe+Dt,15*tt)}}}uo(st.buffer,0,N,we,6),uo(Je.buffer,0,N,$,6),uo(vt.buffer,0,N,ce,8)}const Ue=new Uint8ClampedArray(r,0,4);Ue.set([U[w]||0,U[D]||0,U[b]||0]),Ue[3]=U[L]||0,uo(Ue.buffer,0,N,be,4)}})();static generateFromUncompressedSplatArrays(e,n,a,r,l,u,f=[]){let d=0;for(let b=0;b<e.length;b++){const L=e[b];d=Math.max(L.sphericalHarmonicsDegree,d)}let h,m;for(let b=0;b<e.length;b++){const L=e[b];for(let R=0;R<L.splats.length;R++){const P=L.splats[R];for(let C=Ne.OFFSET.FRC0;C<Ne.OFFSET.FRC23&&C<P.length;C++)(!h||P[C]<h)&&(h=P[C]),(!m||P[C]>m)&&(m=P[C])}}h=h||-Ds,m=m||Ds;const{bytesPerSplat:g}=se.calculateComponentStorage(a,d),v=se.CompressionLevels[a].ScaleRange,_=[],y=[];let E=0;for(let b=0;b<e.length;b++){const L=e[b],R=new Ne(d);for(let we=0;we<L.splatCount;we++){const $=L.splats[we];($[Ne.OFFSET.OPACITY]||0)>=n&&R.addSplat($)}const P=f[b]||{},C=(P.blockSizeFactor||1)*(l||se.BucketBlockSize),U=Math.ceil((P.bucketSizeFactor||1)*(u||se.BucketSize)),N=se.computeBucketsForUncompressedSplatArray(R,C,U),k=N.fullBuckets.length,X=N.partiallyFullBuckets.map(we=>we.splats.length),W=X.length,Q=[...N.fullBuckets,...N.partiallyFullBuckets],O=R.splats.length*g,G=W*4,Z=a>=1?Q.length*se.BucketStorageSizeBytes+G:0,re=O+Z,he=new ArrayBuffer(re),z=v/(C*.5),ie=new H;let pe=0;for(let we=0;we<Q.length;we++){const $=Q[we];ie.fromArray($.center);for(let ce=0;ce<$.splats.length;ce++){let be=$.splats[ce];const Fe=R.splats[be],Ue=Z+pe*g;se.writeSplatDataToSectionBuffer(Fe,he,Ue,a,d,ie,z,v,h,m),pe++}}if(E+=pe,a>=1){const we=new Uint32Array(he,0,X.length*4);for(let ce=0;ce<X.length;ce++)we[ce]=X[ce];const $=new Float32Array(he,G,Q.length*se.BucketStorageSizeFloats);for(let ce=0;ce<Q.length;ce++){const be=Q[ce],Fe=ce*3;$[Fe]=be.center[0],$[Fe+1]=be.center[1],$[Fe+2]=be.center[2]}}_.push(he);const Me=new ArrayBuffer(se.SectionHeaderSizeBytes);se.writeSectionHeaderToBuffer({maxSplatCount:pe,splatCount:pe,bucketSize:U,bucketCount:Q.length,bucketBlockSize:C,compressionScaleRange:v,storageSizeBytes:re,fullBucketCount:k,partiallyFilledBucketCount:W,sphericalHarmonicsDegree:d},a,Me,0),y.push(Me)}let x=0;for(let b of _)x+=b.byteLength;const A=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*_.length+x,T=new ArrayBuffer(A);se.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:_.length,sectionCount:_.length,maxSplatCount:E,splatCount:E,compressionLevel:a,sceneCenter:r,minSphericalHarmonicsCoeff:h,maxSphericalHarmonicsCoeff:m},T);let w=se.HeaderSizeBytes;for(let b of y)new Uint8Array(T,w,se.SectionHeaderSizeBytes).set(new Uint8Array(b)),w+=se.SectionHeaderSizeBytes;for(let b of _)new Uint8Array(T,w,b.byteLength).set(new Uint8Array(b)),w+=b.byteLength;return new se(T)}static computeBucketsForUncompressedSplatArray(e,n,a){let r=e.splatCount;const l=n/2,u=new H,f=new H;for(let E=0;E<r;E++){const x=e.splats[E],A=[x[Ne.OFFSET.X],x[Ne.OFFSET.Y],x[Ne.OFFSET.Z]];(E===0||A[0]<u.x)&&(u.x=A[0]),(E===0||A[0]>f.x)&&(f.x=A[0]),(E===0||A[1]<u.y)&&(u.y=A[1]),(E===0||A[1]>f.y)&&(f.y=A[1]),(E===0||A[2]<u.z)&&(u.z=A[2]),(E===0||A[2]>f.z)&&(f.z=A[2])}const d=new H().copy(f).sub(u),h=Math.ceil(d.y/n),m=Math.ceil(d.z/n),g=new H,v=[],_={};for(let E=0;E<r;E++){const x=e.splats[E],A=[x[Ne.OFFSET.X],x[Ne.OFFSET.Y],x[Ne.OFFSET.Z]],T=Math.floor((A[0]-u.x)/n),w=Math.floor((A[1]-u.y)/n),D=Math.floor((A[2]-u.z)/n);g.x=T*n+u.x+l,g.y=w*n+u.y+l,g.z=D*n+u.z+l;const b=T*(h*m)+w*m+D;let L=_[b];L||(_[b]=L={splats:[],center:g.toArray()}),L.splats.push(E),L.splats.length>=a&&(v.push(L),_[b]=null)}const y=[];for(let E in _)if(_.hasOwnProperty(E)){const x=_[E];x&&y.push(x)}return{fullBuckets:v,partiallyFullBuckets:y}}static preallocateUncompressed(e,n){const a=se.CompressionLevels[0].SphericalHarmonicsDegrees[n],r=se.HeaderSizeBytes+se.SectionHeaderSizeBytes,l=r+a.BytesPerSplat*e,u=new ArrayBuffer(l);return se.writeHeaderToBuffer({versionMajor:se.CurrentMajorVersion,versionMinor:se.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new H},u),se.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:n},0,u,se.HeaderSizeBytes),{splatBuffer:new se(u,!0),splatBufferDataOffsetBytes:r}}}const u_=new Uint8Array([112,108,121,10]),f_=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),qh="end_header",Yh=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),ma=(o,e)=>{const n=(1<<e)-1;return(o&n)/n},d_=(o,e)=>{o.x=ma(e>>>21,11),o.y=ma(e>>>11,10),o.z=ma(e,11)},kR=(o,e)=>{o.x=ma(e>>>24,8),o.y=ma(e>>>16,8),o.z=ma(e>>>8,8),o.w=ma(e,8)},XR=(o,e)=>{const n=1/(Math.sqrt(2)*.5),a=(ma(e>>>20,10)-.5)*n,r=(ma(e>>>10,10)-.5)*n,l=(ma(e,10)-.5)*n,u=Math.sqrt(1-(a*a+r*r+l*l));switch(e>>>30){case 0:o.set(u,a,r,l);break;case 1:o.set(a,u,r,l);break;case 2:o.set(a,r,u,l);break;case 3:o.set(a,r,l,u);break}},Xa=(o,e,n)=>o*(1-n)+e*n,pn=(o,e)=>o.properties.find(n=>n.name===e&&n.storage)?.storage;class Ot{static decodeHeaderText(e){let n,a,r,l;const u=e.split(`
`).filter(g=>!g.startsWith("comment "));let f=0,d=!1;for(let g=1;g<u.length;++g){const v=u[g].split(" ");switch(v[0]){case"format":if(v[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":n={name:v[1],count:parseInt(v[2],10),properties:[],storageSizeBytes:0},n.name==="chunk"?a=n:n.name==="vertex"?r=n:n.name==="sh"&&(l=n);break;case"property":{if(!Yh.has(v[1]))throw new Error(`Unrecognized property data type '${v[1]}' in ply header`);const _=Yh.get(v[1]),y=_.BYTES_PER_ELEMENT*n.count;n.name==="vertex"&&(f+=_.BYTES_PER_ELEMENT),n.properties.push({type:v[1],name:v[2],storage:null,byteSize:_.BYTES_PER_ELEMENT,storageSizeByes:y}),n.storageSizeBytes+=y;break}case qh:d=!0;break;default:throw new Error(`Unrecognized header value '${v[0]}' in ply header`)}if(d)break}let h=0,m=0;return l&&(m=l.properties.length,l.properties.length>=45?h=3:l.properties.length>=24?h=2:l.properties.length>=9&&(h=1)),{chunkElement:a,vertexElement:r,shElement:l,bytesPerSplat:f,headerSizeBytes:e.indexOf(qh)+qh.length+1,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:m}}static decodeHeader(e){const n=(_,y)=>{const E=_.length-y.length;let x,A;for(x=0;x<=E;++x){for(A=0;A<y.length&&_[x+A]===y[A];++A);if(A===y.length)return x}return-1},a=(_,y)=>{if(_.length<y.length)return!1;for(let E=0;E<y.length;++E)if(_[E]!==y[E])return!1;return!0};let r=new Uint8Array(e),l;if(r.length>=u_.length&&!a(r,u_))throw new Error("Invalid PLY header");if(l=n(r,f_),l===-1)throw new Error("End of PLY header not found");const u=new TextDecoder("ascii").decode(r.slice(0,l)),{chunkElement:f,vertexElement:d,shElement:h,sphericalHarmonicsDegree:m,sphericalHarmonicsPerSplat:g,bytesPerSplat:v}=Ot.decodeHeaderText(u);return{headerSizeBytes:l+f_.length,bytesPerSplat:v,chunkElement:f,vertexElement:d,shElement:h,sphericalHarmonicsDegree:m,sphericalHarmonicsPerSplat:g}}static readElementData(e,n,a,r,l,u=null){let f=n instanceof DataView?n:new DataView(n);r=r||0,l=l||e.count-1;for(let d=r;d<=l;++d)for(let h=0;h<e.properties.length;++h){const m=e.properties[h],g=Yh.get(m.type),v=g.BYTES_PER_ELEMENT*e.count;if((!m.storage||m.storage.byteLength<v)&&(!u||u(m.name))&&(m.storage=new g(e.count)),m.storage)switch(m.type){case"char":m.storage[d]=f.getInt8(a);break;case"uchar":m.storage[d]=f.getUint8(a);break;case"short":m.storage[d]=f.getInt16(a,!0);break;case"ushort":m.storage[d]=f.getUint16(a,!0);break;case"int":m.storage[d]=f.getInt32(a,!0);break;case"uint":m.storage[d]=f.getUint32(a,!0);break;case"float":m.storage[d]=f.getFloat32(a,!0);break;case"double":m.storage[d]=f.getFloat64(a,!0);break}a+=m.byteSize}return a}static readPly(e,n=null){const a=Ot.decodeHeader(e);let r=Ot.readElementData(a.chunkElement,e,a.headerSizeBytes,null,null,n);return r=Ot.readElementData(a.vertexElement,e,r,null,null,n),Ot.readElementData(a.shElement,e,r,null,null,n),{chunkElement:a.chunkElement,vertexElement:a.vertexElement,shElement:a.shElement,sphericalHarmonicsDegree:a.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:a.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,n,a){const r={};if(n){const l=pn(e,"min_r"),u=pn(e,"min_g"),f=pn(e,"min_b"),d=pn(e,"max_r"),h=pn(e,"max_g"),m=pn(e,"max_b"),g=pn(e,"min_x"),v=pn(e,"min_y"),_=pn(e,"min_z"),y=pn(e,"max_x"),E=pn(e,"max_y"),x=pn(e,"max_z"),A=pn(e,"min_scale_x"),T=pn(e,"min_scale_y"),w=pn(e,"min_scale_z"),D=pn(e,"max_scale_x"),b=pn(e,"max_scale_y"),L=pn(e,"max_scale_z"),R=pn(n,"packed_position"),P=pn(n,"packed_rotation"),C=pn(n,"packed_scale"),U=pn(n,"packed_color");r.colorExtremes={minR:l,maxR:d,minG:u,maxG:h,minB:f,maxB:m},r.positionExtremes={minX:g,maxX:y,minY:v,maxY:E,minZ:_,maxZ:x},r.scaleExtremes={minScaleX:A,maxScaleX:D,minScaleY:T,maxScaleY:b,minScaleZ:w,maxScaleZ:L},r.position=R,r.rotation=P,r.scale=C,r.color=U}if(a){const l={};for(let u=0;u<45;u++){const f=`f_rest_${u}`,d=pn(a,f);if(d)l[f]=d;else break}r.sh=l}return r}static decompressBaseSplat=(function(){const e=new H,n=new sn,a=new H,r=new hn,l=Ne.OFFSET;return function(u,f,d,h,m,g,v,_,y,E){E=E||Ne.createSplat();const x=Math.floor((f+u)/256);return d_(e,d[u]),XR(n,v[u]),d_(a,m[u]),kR(r,y[u]),E[l.X]=Xa(h.minX[x],h.maxX[x],e.x),E[l.Y]=Xa(h.minY[x],h.maxY[x],e.y),E[l.Z]=Xa(h.minZ[x],h.maxZ[x],e.z),E[l.ROTATION0]=n.x,E[l.ROTATION1]=n.y,E[l.ROTATION2]=n.z,E[l.ROTATION3]=n.w,E[l.SCALE0]=Math.exp(Xa(g.minScaleX[x],g.maxScaleX[x],a.x)),E[l.SCALE1]=Math.exp(Xa(g.minScaleY[x],g.maxScaleY[x],a.y)),E[l.SCALE2]=Math.exp(Xa(g.minScaleZ[x],g.maxScaleZ[x],a.z)),_.minR&&_.maxR?E[l.FDC0]=dn(Math.round(Xa(_.minR[x],_.maxR[x],r.x)*255),0,255):E[l.FDC0]=dn(Math.floor(r.x*255),0,255),_.minG&&_.maxG?E[l.FDC1]=dn(Math.round(Xa(_.minG[x],_.maxG[x],r.y)*255),0,255):E[l.FDC1]=dn(Math.floor(r.y*255),0,255),_.minB&&_.maxB?E[l.FDC2]=dn(Math.round(Xa(_.minB[x],_.maxB[x],r.z)*255),0,255):E[l.FDC2]=dn(Math.floor(r.z*255),0,255),E[l.OPACITY]=dn(Math.floor(r.w*255),0,255),E}})();static decompressSphericalHarmonics=(function(){const e=[0,3,8,15],n=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(a,r,l,u,f){f=f||Ne.createSplat();let d=e[l],h=e[u];for(let m=0;m<3;++m)for(let g=0;g<15;++g){const v=n[m*15+g];g<d&&g<h&&(f[Ne.OFFSET.FRC0+v]=r[m*h+g][a]*(8/255)-4)}return f}})();static parseToUncompressedSplatBufferSection(e,n,a,r,l,u,f,d,h=null){Ot.readElementData(n,u,0,a,r,h);const m=se.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:g,scaleExtremes:v,colorExtremes:_,position:y,rotation:E,scale:x,color:A}=Ot.getElementStorageArrays(e,n),T=Ne.createSplat();for(let w=a;w<=r;++w){Ot.decompressBaseSplat(w,l,y,g,x,v,E,_,A,T);const D=w*m+d;se.writeSplatDataToSectionBuffer(T,f,D,0,0)}}static parseToUncompressedSplatArraySection(e,n,a,r,l,u,f,d=null){Ot.readElementData(n,u,0,a,r,d);const{positionExtremes:h,scaleExtremes:m,colorExtremes:g,position:v,rotation:_,scale:y,color:E}=Ot.getElementStorageArrays(e,n);for(let x=a;x<=r;++x){const A=Ne.createSplat();Ot.decompressBaseSplat(x,l,v,h,y,m,_,g,E,A),f.addSplat(A)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,n,a,r,l,u,f,d,h,m=null){Ot.readElementData(n,l,u,a,r,m);const{sh:g}=Ot.getElementStorageArrays(e,void 0,n),v=Object.values(g);for(let _=a;_<=r;++_)Ot.decompressSphericalHarmonics(_,v,f,d,h.splats[_])}static parseToUncompressedSplatArray(e,n){const{chunkElement:a,vertexElement:r,shElement:l,sphericalHarmonicsDegree:u}=Ot.readPly(e);n=Math.min(n,u);const f=new Ne(n),{positionExtremes:d,scaleExtremes:h,colorExtremes:m,position:g,rotation:v,scale:_,color:y}=Ot.getElementStorageArrays(a,r);let E;if(n>0){const{sh:x}=Ot.getElementStorageArrays(a,void 0,l);E=Object.values(x)}for(let x=0;x<r.count;++x){f.addDefaultSplat();const A=f.getSplat(f.splatCount-1);Ot.decompressBaseSplat(x,0,g,d,_,h,v,m,y,A),n>0&&Ot.decompressSphericalHarmonics(x,E,n,u,A)}return f}static parseToUncompressedSplatBuffer(e,n){const{chunkElement:a,vertexElement:r,shElement:l,sphericalHarmonicsDegree:u}=Ot.readPly(e);n=Math.min(n,u);const{splatBuffer:f,splatBufferDataOffsetBytes:d}=se.preallocateUncompressed(r.count,n),{positionExtremes:h,scaleExtremes:m,colorExtremes:g,position:v,rotation:_,scale:y,color:E}=Ot.getElementStorageArrays(a,r);let x;if(n>0){const{sh:w}=Ot.getElementStorageArrays(a,void 0,l);x=Object.values(w)}const A=se.CompressionLevels[0].SphericalHarmonicsDegrees[n].BytesPerSplat,T=Ne.createSplat(n);for(let w=0;w<r.count;++w){Ot.decompressBaseSplat(w,0,v,h,y,m,_,g,E,T),n>0&&Ot.decompressSphericalHarmonics(w,x,n,u,T);const D=w*A+d;se.writeSplatDataToSectionBuffer(T,f.bufferData,D,0,n)}return f}}const ai={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[bA,fm,dm,hm,pm,mm,gm]=[0,1,2,3,4,5,6],h_={double:bA,int:fm,uint:dm,float:hm,short:pm,ushort:mm,uchar:gm},WR={[bA]:8,[fm]:4,[dm]:4,[hm]:4,[pm]:2,[mm]:2,[gm]:1};class Vt{static HeaderEndToken="end_header";static decodeSectionHeader(e,n,a=0){const r=[];let l=!1,u=-1,f=0,d=!1,h=null;const m=[],g=[],v=[],_={};for(let A=a;A<e.length;A++){const T=e[A].trim();if(T.startsWith("element"))if(l){u--;break}else{l=!0,a=A,u=A;const w=T.split(" ");let D=0;for(let b of w){const L=b.trim();L.length>0&&(D++,D===2?h=L:D===3&&(f=parseInt(L)))}}else if(T.startsWith("property")){const w=T.match(/(\w+)\s+(\w+)\s+(\w+)/);if(w){const D=w[2],b=w[3];v.push(b);const L=n[b];_[b]=D;const R=h_[D];L!==void 0&&(m.push(L),g[L]=R)}}if(T===Vt.HeaderEndToken){d=!0;break}l&&(r.push(T),u++)}const y=[];let E=0;for(let A of v){const T=_[A];if(_.hasOwnProperty(A)){const w=n[A];w!==void 0&&(y[w]=E)}E+=WR[h_[T]]}const x=Vt.decodeSphericalHarmonicsFromSectionHeader(v,n);return{headerLines:r,headerStartLine:a,headerEndLine:u,fieldTypes:g,fieldIds:m,fieldOffsets:y,bytesPerVertex:E,vertexCount:f,dataSizeBytes:E*f,endOfHeader:d,sectionName:h,sphericalHarmonicsDegree:x.degree,sphericalHarmonicsCoefficientsPerChannel:x.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:x.degree1Fields,sphericalHarmonicsDegree2Fields:x.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,n){let a=0,r=0;for(let d of e)d.startsWith("f_rest")&&a++;r=a/3;let l=0;r>=3&&(l=1),r>=8&&(l=2);let u=[],f=[];for(let d=0;d<3;d++){if(l>=1)for(let h=0;h<3;h++)u.push(n["f_rest_"+(h+r*d)]);if(l>=2)for(let h=0;h<5;h++)f.push(n["f_rest_"+(h+r*d+3)])}return{degree:l,coefficientsPerChannel:r,degree1Fields:u,degree2Fields:f}}static getHeaderSectionNames(e){const n=[];for(let a of e)if(a.startsWith("element")){const r=a.split(" ");let l=0;for(let u of r){const f=u.trim();f.length>0&&(l++,l===2&&n.push(f))}}return n}static checkTextForEndHeader(e){return!!e.includes(Vt.HeaderEndToken)}static checkBufferForEndHeader(e,n,a,r){const l=new Uint8Array(e,Math.max(0,n-a),a),u=r.decode(l);return Vt.checkTextForEndHeader(u)}static extractHeaderFromBufferToText(e){const n=new TextDecoder;let a=0,r="";const l=100;for(;;){if(a+l>=e.byteLength)throw new Error("End of file reached while searching for end of header");const u=new Uint8Array(e,a,l);if(r+=n.decode(u),a+=l,Vt.checkBufferForEndHeader(e,a,l*2,n))break}return r}static readHeaderFromBuffer(e){const n=new TextDecoder;let a=0,r="";const l=100;for(;;){if(a+l>=e.byteLength)throw new Error("End of file reached while searching for end of header");const u=new Uint8Array(e,a,l);if(r+=n.decode(u),a+=l,Vt.checkBufferForEndHeader(e,a,l*2,n))break}return r}static convertHeaderTextToLines(e){const n=e.split(`
`),a=[];for(let r=0;r<n.length;r++){const l=n[r].trim();if(a.push(l),l===Vt.HeaderEndToken)break}return a}static determineHeaderFormatFromHeaderText(e){const n=Vt.convertHeaderTextToLines(e);let a=ai.INRIAV1;for(let r=0;r<n.length;r++){const l=n[r].trim();if(l.startsWith("element chunk")||l.match(/[A-Za-z]*packed_[A-Za-z]*/))a=ai.PlayCanvasCompressed;else if(l.startsWith("element codebook_centers"))a=ai.INRIAV2;else if(l===Vt.HeaderEndToken)break}return a}static determineHeaderFormatFromPlyBuffer(e){const n=Vt.extractHeaderFromBufferToText(e);return Vt.determineHeaderFormatFromHeaderText(n)}static readVertex(e,n,a,r,l,u,f=!0){const d=a*n.bytesPerVertex+r,h=n.fieldOffsets,m=n.fieldTypes;for(let g of l){const v=m[g];v===hm?u[g]=e.getFloat32(d+h[g],!0):v===pm?u[g]=e.getInt16(d+h[g],!0):v===mm?u[g]=e.getUint16(d+h[g],!0):v===fm?u[g]=e.getInt32(d+h[g],!0):v===dm?u[g]=e.getUint32(d+h[g],!0):v===gm&&(f?u[g]=e.getUint8(d+h[g])/255:u[g]=e.getUint8(d+h[g]))}}}const RA=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],qR=RA.map((o,e)=>e),[p_,YR,QR,jR,KR,ZR,JR,$R,ew,tw,m_,nw,iw,g_,S_,aw,sw,rw]=qR;class Yn{static decodeHeaderLines(e){let n=0;e.forEach(m=>{m.includes("f_rest_")&&n++});let a=0;n>=45?a=45:n>=24?a=24:n>=9&&(a=9);let l=Array.from(Array(Math.max(a-1,0))).map((m,g)=>`f_rest_${g+1}`);const u=[...RA,...l],f=u.map((m,g)=>g),d=f.reduce((m,g)=>(m[u[g]]=g,m),{}),h=Vt.decodeSectionHeader(e,d,0);return h.splatCount=h.vertexCount,h.bytesPerSplat=h.bytesPerVertex,h.fieldsToReadIndexes=f,h}static decodeHeaderText(e){const n=Vt.convertHeaderTextToLines(e),a=Yn.decodeHeaderLines(n);return a.headerText=e,a.headerSizeBytes=e.indexOf(Vt.HeaderEndToken)+Vt.HeaderEndToken.length+1,a}static decodeHeaderFromBuffer(e){const n=Vt.readHeaderFromBuffer(e);return Yn.decodeHeaderText(n)}static findSplatData(e,n){return new DataView(e,n.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,n,a,r,l,u,f,d=0){d=Math.min(d,e.sphericalHarmonicsDegree);const h=se.CompressionLevels[0].SphericalHarmonicsDegrees[d].BytesPerSplat;for(let m=n;m<=a;m++){const g=Yn.parseToUncompressedSplat(r,m,e,l,d),v=m*h+f;se.writeSplatDataToSectionBuffer(g,u,v,0,d)}}static parseToUncompressedSplatArraySection(e,n,a,r,l,u,f=0){f=Math.min(f,e.sphericalHarmonicsDegree);for(let d=n;d<=a;d++){const h=Yn.parseToUncompressedSplat(r,d,e,l,f);u.addSplat(h)}}static decodeSectionSplatData(e,n,a,r,l=!0){if(r=Math.min(r,a.sphericalHarmonicsDegree),l){const u=new Ne(r);for(let f=0;f<n;f++){const d=Yn.parseToUncompressedSplat(e,f,a,0,r);u.addSplat(d)}return u}else{const{splatBuffer:u,splatBufferDataOffsetBytes:f}=se.preallocateUncompressed(n,r);return Yn.parseToUncompressedSplatBufferSection(a,0,n-1,e,0,u.bufferData,f,r),u}}static parseToUncompressedSplat=(function(){let e=[];const n=new sn,a=Ne.OFFSET.X,r=Ne.OFFSET.Y,l=Ne.OFFSET.Z,u=Ne.OFFSET.SCALE0,f=Ne.OFFSET.SCALE1,d=Ne.OFFSET.SCALE2,h=Ne.OFFSET.ROTATION0,m=Ne.OFFSET.ROTATION1,g=Ne.OFFSET.ROTATION2,v=Ne.OFFSET.ROTATION3,_=Ne.OFFSET.FDC0,y=Ne.OFFSET.FDC1,E=Ne.OFFSET.FDC2,x=Ne.OFFSET.OPACITY,A=[];for(let T=0;T<45;T++)A[T]=Ne.OFFSET.FRC0+T;return function(T,w,D,b=0,L=0){L=Math.min(L,D.sphericalHarmonicsDegree),Yn.readSplat(T,D,w,b,e);const R=Ne.createSplat(L);if(e[p_]!==void 0?(R[u]=Math.exp(e[p_]),R[f]=Math.exp(e[YR]),R[d]=Math.exp(e[QR])):(R[u]=.01,R[f]=.01,R[d]=.01),e[m_]!==void 0){const P=.28209479177387814;R[_]=(.5+P*e[m_])*255,R[y]=(.5+P*e[nw])*255,R[E]=(.5+P*e[iw])*255}else e[S_]!==void 0?(R[_]=e[S_]*255,R[y]=e[aw]*255,R[E]=e[sw]*255):(R[_]=0,R[y]=0,R[E]=0);if(e[g_]!==void 0&&(R[x]=1/(1+Math.exp(-e[g_]))*255),R[_]=dn(Math.floor(R[_]),0,255),R[y]=dn(Math.floor(R[y]),0,255),R[E]=dn(Math.floor(R[E]),0,255),R[x]=dn(Math.floor(R[x]),0,255),L>=1&&e[rw]!==void 0){for(let P=0;P<9;P++)R[A[P]]=e[D.sphericalHarmonicsDegree1Fields[P]];if(L>=2)for(let P=0;P<15;P++)R[A[9+P]]=e[D.sphericalHarmonicsDegree2Fields[P]]}return n.set(e[jR],e[KR],e[ZR],e[JR]),n.normalize(),R[h]=n.x,R[m]=n.y,R[g]=n.z,R[v]=n.w,R[a]=e[$R],R[r]=e[ew],R[l]=e[tw],R}})();static readSplat(e,n,a,r,l){return Vt.readVertex(e,n,a,r,n.fieldsToReadIndexes,l,!0)}static parseToUncompressedSplatArray(e,n=0){const{header:a,splatCount:r,splatData:l}=v_(e);return Yn.decodeSectionSplatData(l,r,a,n,!0)}static parseToUncompressedSplatBuffer(e,n=0){const{header:a,splatCount:r,splatData:l}=v_(e);return Yn.decodeSectionSplatData(l,r,a,n,!1)}}function v_(o){const e=Yn.decodeHeaderFromBuffer(o),n=e.splatCount,a=Yn.findSplatData(o,e);return{header:e,splatCount:n,splatData:a}}const wA=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],wu=wA.map((o,e)=>e),[Du,ow,lw,__,Iu,cw,Qh]=[0,1,4,16,17,18,19],DA=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Wp=DA.map((o,e)=>e),[A_,uw,fw,dw,hw,pw,mw,gw,Sw,vw,qp,IA,UA,x_]=Wp,y_=qp,_w=IA,Aw=UA,Uu=o=>{const e=(31744&o)>>10,n=1023&o;return(o>>15?-1:1)*(e?e===31?n?NaN:1/0:Math.pow(2,e-15)*(1+n/1024):n/1024*6103515625e-14)};class Ri{static decodeSectionHeadersFromHeaderLines(e){const n=Wp.reduce((m,g)=>(m[DA[g]]=g,m),{}),a=wu.reduce((m,g)=>(m[wA[g]]=g,m),{}),r=Vt.getHeaderSectionNames(e);let l;for(let m=0;m<r.length;m++)r[m]==="codebook_centers"&&(l=m);let u=0,f=!1;const d=[];let h=0;for(;!f;){let m;h===l?m=Vt.decodeSectionHeader(e,a,u):m=Vt.decodeSectionHeader(e,n,u),f=m.endOfHeader,u=m.headerEndLine+1,f||(m.splatCount=m.vertexCount,m.bytesPerSplat=m.bytesPerVertex),d.push(m),h++}return d}static decodeSectionHeadersFromHeaderText(e){const n=Vt.convertHeaderTextToLines(e);return Ri.decodeSectionHeadersFromHeaderLines(n)}static getSplatCountFromSectionHeaders(e){let n=0;for(let a of e)a.sectionName!=="codebook_centers"&&(n+=a.vertexCount);return n}static decodeHeaderFromHeaderText(e){const n=e.indexOf(Vt.HeaderEndToken)+Vt.HeaderEndToken.length+1,a=Ri.decodeSectionHeadersFromHeaderText(e),r=Ri.getSplatCountFromSectionHeaders(a);return{headerSizeBytes:n,sectionHeaders:a,splatCount:r}}static decodeHeaderFromBuffer(e){const n=Vt.readHeaderFromBuffer(e);return Ri.decodeHeaderFromHeaderText(n)}static findVertexData(e,n,a){let r=n.headerSizeBytes;for(let l=0;l<a&&l<n.sectionHeaders.length;l++){const u=n.sectionHeaders[l];r+=u.dataSizeBytes}return new DataView(e,r,n.sectionHeaders[a].dataSizeBytes)}static decodeCodeBook(e,n){const a=[],r=[];for(let l=0;l<n.vertexCount;l++){Vt.readVertex(e,n,l,0,wu,a);for(let u of wu){const f=wu[u];let d=r[f];d||(r[f]=d=[]),d.push(a[u])}}for(let l=0;l<r.length;l++){const u=r[l],f=.28209479177387814;for(let d=0;d<u.length;d++){const h=Uu(u[d]);l===__?u[d]=Math.round(1/(1+Math.exp(-h))*255):l===Du?u[d]=Math.round((.5+f*h)*255):l===Iu?u[d]=Math.exp(h):u[d]=h}}return r}static decodeSectionSplatData(e,n,a,r,l){l=Math.min(l,a.sphericalHarmonicsDegree);const u=new Ne(l);for(let f=0;f<n;f++){const d=Ri.parseToUncompressedSplat(e,f,a,r,0,l);u.addSplat(d)}return u}static parseToUncompressedSplat=(function(){let e=[];const n=new sn,a=Ne.OFFSET.X,r=Ne.OFFSET.Y,l=Ne.OFFSET.Z,u=Ne.OFFSET.SCALE0,f=Ne.OFFSET.SCALE1,d=Ne.OFFSET.SCALE2,h=Ne.OFFSET.ROTATION0,m=Ne.OFFSET.ROTATION1,g=Ne.OFFSET.ROTATION2,v=Ne.OFFSET.ROTATION3,_=Ne.OFFSET.FDC0,y=Ne.OFFSET.FDC1,E=Ne.OFFSET.FDC2,x=Ne.OFFSET.OPACITY,A=[];for(let T=0;T<45;T++)A[T]=Ne.OFFSET.FRC0+T;return function(T,w,D,b,L=0,R=0){R=Math.min(R,D.sphericalHarmonicsDegree),Ri.readSplat(T,D,w,L,e);const P=Ne.createSplat(R);if(e[A_]!==void 0?(P[u]=b[Iu][e[A_]],P[f]=b[Iu][e[uw]],P[d]=b[Iu][e[fw]]):(P[u]=.01,P[f]=.01,P[d]=.01),e[qp]!==void 0?(P[_]=b[Du][e[qp]],P[y]=b[Du][e[IA]],P[E]=b[Du][e[UA]]):e[y_]!==void 0?(P[_]=e[y_]*255,P[y]=e[_w]*255,P[E]=e[Aw]*255):(P[_]=0,P[y]=0,P[E]=0),e[x_]!==void 0&&(P[x]=b[__][e[x_]]),P[_]=dn(Math.floor(P[_]),0,255),P[y]=dn(Math.floor(P[y]),0,255),P[E]=dn(Math.floor(P[E]),0,255),P[x]=dn(Math.floor(P[x]),0,255),R>=1&&D.sphericalHarmonicsDegree>=1){for(let X=0;X<9;X++){const W=b[ow+X%3];P[A[X]]=W[e[D.sphericalHarmonicsDegree1Fields[X]]]}if(R>=2&&D.sphericalHarmonicsDegree>=2)for(let X=0;X<15;X++){const W=b[lw+X%5];P[A[9+X]]=W[e[D.sphericalHarmonicsDegree2Fields[X]]]}}const C=b[cw][e[dw]],U=b[Qh][e[hw]],N=b[Qh][e[pw]],k=b[Qh][e[mw]];return n.set(C,U,N,k),n.normalize(),P[h]=n.x,P[m]=n.y,P[g]=n.z,P[v]=n.w,P[a]=Uu(e[gw]),P[r]=Uu(e[Sw]),P[l]=Uu(e[vw]),P}})();static readSplat(e,n,a,r,l){return Vt.readVertex(e,n,a,r,Wp,l,!1)}static parseToUncompressedSplatArray(e,n=0){const a=[],r=Ri.decodeHeaderFromBuffer(e,n);let l;for(let f=0;f<r.sectionHeaders.length;f++){const d=r.sectionHeaders[f];if(d.sectionName==="codebook_centers"){const h=Ri.findVertexData(e,r,f);l=Ri.decodeCodeBook(h,d)}}for(let f=0;f<r.sectionHeaders.length;f++){const d=r.sectionHeaders[f];if(d.sectionName!=="codebook_centers"){const h=d.vertexCount,m=Ri.findVertexData(e,r,f),g=Ri.decodeSectionSplatData(m,h,d,l,n);a.push(g)}}const u=new Ne(n);for(let f of a)for(let d of f.splats)u.addSplat(d);return u}}class E_{static parseToUncompressedSplatArray(e,n=0){const a=Vt.determineHeaderFormatFromPlyBuffer(e);if(a===ai.PlayCanvasCompressed)return Ot.parseToUncompressedSplatArray(e,n);if(a===ai.INRIAV1)return Yn.parseToUncompressedSplatArray(e,n);if(a===ai.INRIAV2)return Ri.parseToUncompressedSplatArray(e,n)}static parseToUncompressedSplatBuffer(e,n=0){const a=Vt.determineHeaderFormatFromPlyBuffer(e);if(a===ai.PlayCanvasCompressed)return Ot.parseToUncompressedSplatBuffer(e,n);if(a===ai.INRIAV1)return Yn.parseToUncompressedSplatBuffer(e,n);if(a===ai.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class Sm{constructor(e,n,a,r){this.sectionCount=e,this.sectionFilters=n,this.groupingParameters=a,this.partitionGenerator=r}partitionUncompressedSplatArray(e){let n,a,r;if(this.partitionGenerator){const u=this.partitionGenerator(e);n=u.groupingParameters,a=u.sectionCount,r=u.sectionFilters}else n=this.groupingParameters,a=this.sectionCount,r=this.sectionFilters;const l=[];for(let u=0;u<a;u++){const f=new Ne(e.sphericalHarmonicsDegree),d=r[u];for(let h=0;h<e.splatCount;h++)d(h)&&f.addSplat(e.splats[h]);l.push(f)}return{splatArrays:l,parameters:n}}static getStandardPartitioner(e=0,n=new H,a=se.BucketBlockSize,r=se.BucketSize){const l=u=>{const f=Ne.OFFSET.X,d=Ne.OFFSET.Y,h=Ne.OFFSET.Z;e<=0&&(e=u.splatCount);const m=new H,g=.5,v=A=>{A.x=Math.floor(A.x/g)*g,A.y=Math.floor(A.y/g)*g,A.z=Math.floor(A.z/g)*g};u.splats.forEach(A=>{m.set(A[f],A[d],A[h]).sub(n),v(m),A.centerDist=m.lengthSq()}),u.splats.sort((A,T)=>{let w=A.centerDist,D=T.centerDist;return w>D?1:-1});const _=[],y=[];e=Math.min(u.splatCount,e);const E=Math.ceil(u.splatCount/e);let x=0;for(let A=0;A<E;A++){let T=x;_.push(w=>w>=T&&w<T+e),y.push({blocksSize:a,bucketSize:r}),x+=e}return{sectionCount:_.length,sectionFilters:_,groupingParameters:y}};return new Sm(void 0,void 0,void 0,l)}}class jl{constructor(e,n,a,r,l,u,f){this.splatPartitioner=e,this.alphaRemovalThreshold=n,this.compressionLevel=a,this.sectionSize=r,this.sceneCenter=l?new H().copy(l):void 0,this.blockSize=u,this.bucketSize=f}generateFromUncompressedSplatArray(e){const n=this.splatPartitioner.partitionUncompressedSplatArray(e);return se.generateFromUncompressedSplatArrays(n.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,n.parameters)}static getStandardGenerator(e=1,n=1,a=0,r=new H,l=se.BucketBlockSize,u=se.BucketSize){const f=Sm.getStandardPartitioner(a,r,l,u);return new jl(f,e,n,a,r,l,u)}}const An={Downloading:0,Processing:1,Done:2};class Yu extends Error{constructor(e){super(e)}}const ln={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function M_(o,e){let n=0;for(let r of o)n+=r.sizeBytes;(!e||e.byteLength<n)&&(e=new ArrayBuffer(n));let a=0;for(let r of o)new Uint8Array(e,a,r.sizeBytes).set(r.data),a+=r.sizeBytes;return e}function T_(o,e,n,a,r,l,u,f){return e?jl.getStandardGenerator(n,a,r,l,u,f).generateFromUncompressedSplatArray(o):se.generateFromUncompressedSplatArrays([o],n,0,new H)}class vm{static loadFromURL(e,n,a,r,l,u,f=!0,d=0,h,m,g,v,_){let y;!a&&!f?y=ln.DownloadBeforeProcessing:f?y=ln.ProgressiveToSplatArray:y=ln.ProgressiveToSplatBuffer;const E=en.ProgressiveLoadSectionSize,x=se.HeaderSizeBytes+se.SectionHeaderSizeBytes,A=1;let T,w,D,b,L,R=0,P=0,C=0,U=!1,N=!1,k=!1;const X=om();let W=0,Q=0,O=0,G=0,Z="",re=null,he=[],z;const ie=new TextDecoder,pe=(Me,we,$)=>{const ce=Me>=100;if($&&(he.push({data:$,sizeBytes:$.byteLength,startBytes:O,endBytes:O+$.byteLength}),O+=$.byteLength),y===ln.DownloadBeforeProcessing)ce&&X.resolve(he);else{if(U){if(T===ai.PlayCanvasCompressed&&!N){const be=re.headerSizeBytes+re.chunkElement.storageSizeBytes;L=M_(he,L),L.byteLength>=be&&(Ot.readElementData(re.chunkElement,L,re.headerSizeBytes),W=be,Q=be,N=!0)}}else if(Z+=ie.decode($),Vt.checkTextForEndHeader(Z)){if(T=Vt.determineHeaderFormatFromHeaderText(Z),T===ai.INRIAV1)re=Yn.decodeHeaderText(Z),d=Math.min(d,re.sphericalHarmonicsDegree),R=re.splatCount,N=!0,G=re.headerSizeBytes+re.bytesPerSplat*R;else if(T===ai.PlayCanvasCompressed){if(re=Ot.decodeHeaderText(Z),d=Math.min(d,re.sphericalHarmonicsDegree),y===ln.ProgressiveToSplatBuffer&&d>0)throw new Yu("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");R=re.vertexElement.count,G=re.headerSizeBytes+re.bytesPerSplat*R+re.chunkElement.storageSizeBytes}else{if(y===ln.ProgressiveToSplatBuffer)throw new Yu("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");y=ln.DownloadBeforeProcessing;return}if(y===ln.ProgressiveToSplatBuffer){const be=se.CompressionLevels[0].SphericalHarmonicsDegrees[d],Fe=x+be.BytesPerSplat*R;D=new ArrayBuffer(Fe),se.writeHeaderToBuffer({versionMajor:se.CurrentMajorVersion,versionMinor:se.CurrentMinorVersion,maxSectionCount:A,sectionCount:A,maxSplatCount:R,splatCount:0,compressionLevel:0,sceneCenter:new H},D)}else z=new Ne(d);W=re.headerSizeBytes,Q=re.headerSizeBytes,U=!0}if(U&&N&&he.length>0&&(w=M_(he,w),O-W>E||O>=G&&!k||ce)){const Fe=k?re.sphericalHarmonicsPerSplat:re.bytesPerSplat,st=(k?O:Math.min(G,O))-Q,vt=Math.floor(st/Fe),Je=vt*Fe,nt=O-Q-Je,tt=Q-he[0].startBytes,at=new DataView(w,tt,Je);if(k)T===ai.PlayCanvasCompressed&&y===ln.ProgressiveToSplatArray&&(Ot.parseSphericalHarmonicsToUncompressedSplatArraySection(re.chunkElement,re.shElement,C,C+vt-1,at,0,d,re.sphericalHarmonicsDegree,z),C+=vt);else{if(y===ln.ProgressiveToSplatBuffer){const Dt=se.CompressionLevels[0].SphericalHarmonicsDegrees[d],q=P*Dt.BytesPerSplat+x;T===ai.PlayCanvasCompressed?Ot.parseToUncompressedSplatBufferSection(re.chunkElement,re.vertexElement,0,vt-1,P,at,D,q):Yn.parseToUncompressedSplatBufferSection(re,0,vt-1,at,0,D,q,d)}else T===ai.PlayCanvasCompressed?Ot.parseToUncompressedSplatArraySection(re.chunkElement,re.vertexElement,0,vt-1,P,at,z):Yn.parseToUncompressedSplatArraySection(re,0,vt-1,at,0,z,d);P+=vt,y===ln.ProgressiveToSplatBuffer&&(b||(se.writeSectionHeaderToBuffer({maxSplatCount:R,splatCount:P,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:d},0,D,se.HeaderSizeBytes),b=new se(D,!1)),b.updateLoadedCounts(1,P)),O>=G&&(k=!0)}if(nt===0)he=[];else{let Dt=[],q=0;for(let Mt=he.length-1;Mt>=0;Mt--){const St=he[Mt];if(q+=St.sizeBytes,Dt.unshift(St),q>=nt)break}he=Dt}W+=E,Q+=Je}r&&b&&r(b,ce),ce&&(y===ln.ProgressiveToSplatBuffer?X.resolve(b):X.resolve(z))}n&&n(Me,we,An.Downloading)};return n&&n(0,"0%",An.Downloading),af(e,pe,!1,h).then(()=>(n&&n(0,"0%",An.Processing),X.promise.then(Me=>{if(n&&n(100,"100%",An.Done),y===ln.DownloadBeforeProcessing){const we=he.map($=>$.data);return new Blob(we).arrayBuffer().then($=>vm.loadFromFileData($,l,u,f,d,m,g,v,_))}else return y===ln.ProgressiveToSplatBuffer?Me:Ii(()=>T_(Me,f,l,u,m,g,v,_))})))}static loadFromFileData(e,n,a,r,l=0,u,f,d,h){return r?Ii(()=>E_.parseToUncompressedSplatArray(e,l)).then(m=>T_(m,r,n,a,u,f,d,h)):Ii(()=>E_.parseToUncompressedSplatBuffer(e,l))}}const xw=o=>new ReadableStream({async start(e){e.enqueue(o),e.close()}});async function yw(o){try{const e=xw(o);if(!e)throw new Error("Failed to create stream from data");return await Ew(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function Ew(o){const e=o.pipeThrough(new DecompressionStream("gzip")),a=await new Response(e).arrayBuffer();return new Uint8Array(a)}const Mw=1347635022,Tw=1,Cw=.15;function bw(o){const e=o>>15&1,n=o>>10&31,a=o&1023,r=e===1?-1:1;return n===0?r*Math.pow(2,-14)*a/1024:n===31?a!==0?NaN:r*(1/0):r*Math.pow(2,n-15)*(1+a/1024)}function Rw(o){return(o-128)/128}function ur(o){switch(o){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${o}`),0}}const ww=(function(){let o=[];const e=new sn,n=Ne.OFFSET.X,a=Ne.OFFSET.Y,r=Ne.OFFSET.Z,l=Ne.OFFSET.SCALE0,u=Ne.OFFSET.SCALE1,f=Ne.OFFSET.SCALE2,d=Ne.OFFSET.ROTATION0,h=Ne.OFFSET.ROTATION1,m=Ne.OFFSET.ROTATION2,g=Ne.OFFSET.ROTATION3,v=Ne.OFFSET.FDC0,_=Ne.OFFSET.FDC1,y=Ne.OFFSET.FDC2,E=Ne.OFFSET.OPACITY,x=[ur(0),ur(1),ur(2),ur(3)],A=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(T,w,D){D=Math.min(w,D);const b=Ne.createSplat(D);T.scale[0]!==void 0?(b[l]=T.scale[0],b[u]=T.scale[1],b[f]=T.scale[2]):(b[l]=.01,b[u]=.01,b[f]=.01),T.color[0]!==void 0?(b[v]=T.color[0],b[_]=T.color[1],b[y]=T.color[2]):o[RED]!==void 0?(b[v]=o[RED]*255,b[_]=o[GREEN]*255,b[y]=o[BLUE]*255):(b[v]=0,b[_]=0,b[y]=0),T.alpha!==void 0&&(b[E]=T.alpha),b[v]=dn(Math.floor(b[v]),0,255),b[_]=dn(Math.floor(b[_]),0,255),b[y]=dn(Math.floor(b[y]),0,255),b[E]=dn(Math.floor(b[E]),0,255);let L=x[D],R=x[w];for(let P=0;P<3;++P)for(let C=0;C<15;++C){const U=A[P*15+C];C<L&&C<R&&(b[Ne.OFFSET.FRC0+U]=T.sh[P*R+C])}return e.set(T.rotation[3],T.rotation[0],T.rotation[1],T.rotation[2]),e.normalize(),b[d]=e.x,b[h]=e.y,b[m]=e.z,b[g]=e.w,b[n]=T.position[0],b[a]=T.position[1],b[r]=T.position[2],b}})();function Dw(o,e,n,a){return!(o.positions.length!==e*3*(a?2:3)||o.scales.length!==e*3||o.rotations.length!==e*3||o.alphas.length!==e||o.colors.length!==e*3||o.sh.length!==e*n*3)}function C_(o,e,n,a,r){e=Math.min(e,o.shDegree);const l=o.numPoints,u=ur(o.shDegree),f=o.positions.length===l*3*2;if(!Dw(o,l,u,f))return null;const d={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let h;f&&(h=new Uint16Array(o.positions.buffer,o.positions.byteOffset,l*3));const m=1/(1<<o.fractionalBits),g=ur(o.shDegree),v=.28209479177387814;for(let _=0;_<l;_++){if(f)for(let T=0;T<3;T++)d.position[T]=bw(h[_*3+T]);else for(let T=0;T<3;T++){const w=_*9+T*3;let D=o.positions[w];D|=o.positions[w+1]<<8,D|=o.positions[w+2]<<16,D|=D&8388608?4278190080:0,d.position[T]=D*m}for(let T=0;T<3;T++)d.scale[T]=Math.exp(o.scales[_*3+T]/16-10);const y=o.rotations.subarray(_*3,_*3+3),E=[y[0]/127.5-1,y[1]/127.5-1,y[2]/127.5-1];d.rotation[0]=E[0],d.rotation[1]=E[1],d.rotation[2]=E[2];const x=E[0]*E[0]+E[1]*E[1]+E[2]*E[2];d.rotation[3]=Math.sqrt(Math.max(0,1-x)),d.alpha=Math.floor(o.alphas[_]);for(let T=0;T<3;T++)d.color[T]=Math.floor(((o.colors[_*3+T]/255-.5)/Cw*v+.5)*255);for(let T=0;T<3;T++)for(let w=0;w<g;w++)d.sh[T*g+w]=Rw(o.sh[g*3*_+w*3+T]);const A=ww(d,o.shDegree,e);if(n){const T=se.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,w=_*T+r;se.writeSplatDataToSectionBuffer(A,a,w,0,e)}else a.addSplat(A)}}const Iw=16,Uw=1e7;function Lw(o){const e=new DataView(o);let n=0;const a={magic:e.getUint32(n,!0),version:e.getUint32(n+4,!0),numPoints:e.getUint32(n+8,!0),shDegree:e.getUint8(n+12),fractionalBits:e.getUint8(n+13),flags:e.getUint8(n+14),reserved:e.getUint8(n+15)};if(n+=Iw,a.magic!==Mw)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(a.version<1||a.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${a.version}`),null;if(a.numPoints>Uw)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${a.numPoints}`),null;if(a.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${a.shDegree}`),null;const r=a.numPoints,l=ur(a.shDegree),u=a.version===1,f={numPoints:r,shDegree:a.shDegree,fractionalBits:a.fractionalBits,antialiased:(a.flags&Tw)!==0,positions:new Uint8Array(r*3*(u?2:3)),scales:new Uint8Array(r*3),rotations:new Uint8Array(r*3),alphas:new Uint8Array(r),colors:new Uint8Array(r*3),sh:new Uint8Array(r*l*3)};try{const d=new Uint8Array(o);let h=f.positions.length,m=n;if(f.positions.set(d.slice(m,m+h)),m+=h,f.alphas.set(d.slice(m,m+f.alphas.length)),m+=f.alphas.length,f.colors.set(d.slice(m,m+f.colors.length)),m+=f.colors.length,f.scales.set(d.slice(m,m+f.scales.length)),m+=f.scales.length,f.rotations.set(d.slice(m,m+f.rotations.length)),m+=f.rotations.length,f.sh.set(d.slice(m,m+f.sh.length)),m+f.sh.length!==o.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(d){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",d),null}return f}async function Bw(o){try{const e=await yw(o);return Lw(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class _m{static loadFromURL(e,n,a,r,l=!0,u=0,f,d,h,m,g){return n&&n(0,"0%",An.Downloading),af(e,n,!0,f).then(v=>(n&&n(0,"0%",An.Processing),_m.loadFromFileData(v,a,r,l,u,d,h,m,g)))}static async loadFromFileData(e,n,a,r,l=0,u,f,d,h){await Ii();const m=await Bw(e);l=Math.min(m.shDegree,l);const g=new Ne(l);if(r)return C_(m,l,!1,g,0),jl.getStandardGenerator(n,a,u,f,d,h).generateFromUncompressedSplatArray(g);{const{splatBuffer:v,splatBufferDataOffsetBytes:_}=se.preallocateUncompressed(m.numPoints,l);return C_(m,l,!0,v.bufferData,_),v}}}class $t{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,n,a,r,l,u){const f=se.CompressionLevels[0].BytesPerCenter,d=se.CompressionLevels[0].BytesPerScale,h=se.CompressionLevels[0].BytesPerRotation,m=se.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let g=e;g<=n;g++){const v=g*$t.RowSizeBytes+r,_=new Float32Array(a,v,3),y=new Float32Array(a,v+$t.CenterSizeBytes,3),E=new Uint8Array(a,v+$t.CenterSizeBytes+$t.ScaleSizeBytes,4),x=new Uint8Array(a,v+$t.CenterSizeBytes+$t.ScaleSizeBytes+$t.RotationSizeBytes,4),A=new sn((x[1]-128)/128,(x[2]-128)/128,(x[3]-128)/128,(x[0]-128)/128);A.normalize();const T=g*m+u,w=new Float32Array(l,T,3),D=new Float32Array(l,T+f,3),b=new Float32Array(l,T+f+d,4),L=new Uint8Array(l,T+f+d+h,4);w[0]=_[0],w[1]=_[1],w[2]=_[2],D[0]=y[0],D[1]=y[1],D[2]=y[2],b[0]=A.w,b[1]=A.x,b[2]=A.y,b[3]=A.z,L[0]=E[0],L[1]=E[1],L[2]=E[2],L[3]=E[3]}}static parseToUncompressedSplatArraySection(e,n,a,r,l){for(let u=e;u<=n;u++){const f=u*$t.RowSizeBytes+r,d=new Float32Array(a,f,3),h=new Float32Array(a,f+$t.CenterSizeBytes,3),m=new Uint8Array(a,f+$t.CenterSizeBytes+$t.ScaleSizeBytes,4),g=new Uint8Array(a,f+$t.CenterSizeBytes+$t.ScaleSizeBytes+$t.RotationSizeBytes,4),v=new sn((g[1]-128)/128,(g[2]-128)/128,(g[3]-128)/128,(g[0]-128)/128);v.normalize(),l.addSplatFromComonents(d[0],d[1],d[2],h[0],h[1],h[2],v.w,v.x,v.y,v.z,m[0],m[1],m[2],m[3])}}static parseStandardSplatToUncompressedSplatArray(e){const n=e.byteLength/$t.RowSizeBytes,a=new Ne;for(let r=0;r<n;r++){const l=r*$t.RowSizeBytes,u=new Float32Array(e,l,3),f=new Float32Array(e,l+$t.CenterSizeBytes,3),d=new Uint8Array(e,l+$t.CenterSizeBytes+$t.ScaleSizeBytes,4),h=new Uint8Array(e,l+$t.CenterSizeBytes+$t.ScaleSizeBytes+$t.ColorSizeBytes,4),m=new sn((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);m.normalize(),a.addSplatFromComonents(u[0],u[1],u[2],f[0],f[1],f[2],m.w,m.x,m.y,m.z,d[0],d[1],d[2],d[3])}return a}}function b_(o,e,n,a,r,l,u,f){return e?jl.getStandardGenerator(n,a,r,l,u,f).generateFromUncompressedSplatArray(o):se.generateFromUncompressedSplatArrays([o],n,0,new H)}class Am{static loadFromURL(e,n,a,r,l,u,f=!0,d,h,m,g,v){let _=a?ln.ProgressiveToSplatBuffer:ln.ProgressiveToSplatArray;f&&(_=ln.ProgressiveToSplatArray);const y=se.HeaderSizeBytes+se.SectionHeaderSizeBytes,E=en.ProgressiveLoadSectionSize,x=1;let A,T,w,D=0,b=0,L;const R=om();let P=0,C=0,U=[];const N=(k,X,W,Q)=>{const O=k>=100;if(W&&U.push(W),_===ln.DownloadBeforeProcessing){O&&R.resolve(U);return}if(!Q){if(a)throw new Yu("Cannon directly load .splat because no file size info is available.");_=ln.DownloadBeforeProcessing;return}if(!A){D=Q/$t.RowSizeBytes,A=new ArrayBuffer(Q);const G=se.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,Z=y+G*D;_===ln.ProgressiveToSplatBuffer?(T=new ArrayBuffer(Z),se.writeHeaderToBuffer({versionMajor:se.CurrentMajorVersion,versionMinor:se.CurrentMinorVersion,maxSectionCount:x,sectionCount:x,maxSplatCount:D,splatCount:b,compressionLevel:0,sceneCenter:new H},T)):L=new Ne(0)}if(W){new Uint8Array(A,C,W.byteLength).set(new Uint8Array(W)),C+=W.byteLength;const G=C-P;if(G>E||O){const re=(O?G:E)/$t.RowSizeBytes,he=b+re;_===ln.ProgressiveToSplatBuffer?$t.parseToUncompressedSplatBufferSection(b,he-1,A,0,T,y):$t.parseToUncompressedSplatArraySection(b,he-1,A,0,L),b=he,_===ln.ProgressiveToSplatBuffer&&(w||(se.writeSectionHeaderToBuffer({maxSplatCount:D,splatCount:b,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,T,se.HeaderSizeBytes),w=new se(T,!1)),w.updateLoadedCounts(1,b),r&&r(w,O)),P+=E}}O&&(_===ln.ProgressiveToSplatBuffer?R.resolve(w):R.resolve(L)),n&&n(k,X,An.Downloading)};return n&&n(0,"0%",An.Downloading),af(e,N,!1,d).then(()=>(n&&n(0,"0%",An.Processing),R.promise.then(k=>(n&&n(100,"100%",An.Done),_===ln.DownloadBeforeProcessing?new Blob(U).arrayBuffer().then(X=>Am.loadFromFileData(X,l,u,f,h,m,g,v)):_===ln.ProgressiveToSplatBuffer?k:Ii(()=>b_(k,f,l,u,h,m,g,v))))))}static loadFromFileData(e,n,a,r,l,u,f,d){return Ii(()=>{const h=$t.parseStandardSplatToUncompressedSplatArray(e);return b_(h,r,n,a,l,u,f,d)})}}class Ol{static checkVersion(e){const n=se.CurrentMajorVersion,a=se.CurrentMinorVersion,r=se.parseHeader(e);if(r.versionMajor===n&&r.versionMinor>=a||r.versionMajor>n)return!0;throw new Error(`KSplat version not supported: v${r.versionMajor}.${r.versionMinor}. Minimum required: v${n}.${a}`)}static loadFromURL(e,n,a,r,l){let u,f,d,h,m=!1,g=!1,v,_=[],y=!1,E=!1,x=0,A=0,T=0,w=!1,D=!1,b=!1,L=[];const R=om(),P=()=>{!m&&!g&&x>=se.HeaderSizeBytes&&(g=!0,new Blob(L).arrayBuffer().then(Q=>{d=new ArrayBuffer(se.HeaderSizeBytes),new Uint8Array(d).set(new Uint8Array(Q,0,se.HeaderSizeBytes)),Ol.checkVersion(d),g=!1,m=!0,h=se.parseHeader(d),window.setTimeout(()=>{N()},1)}))};let C=0;const U=()=>{C===0&&(C++,window.setTimeout(()=>{C--,k()},1))},N=()=>{const W=()=>{E=!0,new Blob(L).arrayBuffer().then(O=>{E=!1,y=!0,v=new ArrayBuffer(h.maxSectionCount*se.SectionHeaderSizeBytes),new Uint8Array(v).set(new Uint8Array(O,se.HeaderSizeBytes,h.maxSectionCount*se.SectionHeaderSizeBytes)),_=se.parseSectionHeaders(h,v,0,!1);let G=0;for(let re=0;re<h.maxSectionCount;re++)G+=_[re].storageSizeBytes;const Z=se.HeaderSizeBytes+h.maxSectionCount*se.SectionHeaderSizeBytes+G;if(!u){u=new ArrayBuffer(Z);let re=0;for(let he=0;he<L.length;he++){const z=L[he];new Uint8Array(u,re,z.byteLength).set(new Uint8Array(z)),re+=z.byteLength}}T=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*h.maxSectionCount;for(let re=0;re<=_.length&&re<h.maxSectionCount;re++)T+=_[re].storageSizeBytes;U()})};!E&&!y&&m&&x>=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*h.maxSectionCount&&W()},k=()=>{if(b)return;b=!0;const W=()=>{if(b=!1,y){if(D)return;if(w=x>=T,x-A>en.ProgressiveLoadSectionSize||w){A+=en.ProgressiveLoadSectionSize,D=A>=T,f||(f=new se(u,!1));const O=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*h.maxSectionCount;let G=0,Z=0,re=0;for(let ie=0;ie<h.maxSectionCount;ie++){const pe=_[ie],Me=G+pe.partiallyFilledBucketCount*4+pe.bucketStorageSizeBytes*pe.bucketCount,we=O+Me;if(A>=we){Z++;const $=A-we,Fe=se.CompressionLevels[h.compressionLevel].SphericalHarmonicsDegrees[pe.sphericalHarmonicsDegree].BytesPerSplat;let Ue=Math.floor($/Fe);Ue=Math.min(Ue,pe.maxSplatCount),re+=Ue,f.updateLoadedCounts(Z,re),f.updateSectionLoadedCounts(ie,Ue)}else break;G+=pe.storageSizeBytes}r(f,D);const he=A/T*100,z=he.toFixed(2)+"%";n&&n(he,z,An.Downloading),D?R.resolve(f):k()}}};window.setTimeout(W,en.ProgressiveLoadSectionDelayDuration)};return af(e,(W,Q,O)=>{O&&(L.push(O),u&&new Uint8Array(u,x,O.byteLength).set(new Uint8Array(O)),x+=O.byteLength),a?(P(),N(),k()):n&&n(W,Q,An.Downloading)},!a,l).then(W=>(n&&n(0,"0%",An.Processing),(a?R.promise:Ol.loadFromFileData(W)).then(O=>(n&&n(100,"100%",An.Done),O))))}static loadFromFileData(e){return Ii(()=>(Ol.checkVersion(e),new se(e)))}static downloadFile=(function(){let e;return function(n,a){const r=new Blob([n.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=a,e.href=URL.createObjectURL(r),e.click()}})()}const $n={Splat:0,KSplat:1,Ply:2,Spz:3},R_=o=>o.endsWith(".ply")?$n.Ply:o.endsWith(".splat")?$n.Splat:o.endsWith(".ksplat")?$n.KSplat:o.endsWith(".spz")?$n.Spz:null,w_={type:"change"},jh={type:"start"},D_={type:"end"},Lu=new am,I_=new qa,Fw=Math.cos(70*Ju.DEG2RAD);class Bu extends Fs{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(j){j.addEventListener("keydown",I),this._domElementKeyEvents=j},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",I),this._domElementKeyEvents=null},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,this.clearDampedRotation(),this.clearDampedPan(),a.object.updateProjectionMatrix(),a.dispatchEvent(w_),a.update(),l=r.NONE},this.clearDampedRotation=function(){d.theta=0,d.phi=0},this.clearDampedPan=function(){m.set(0,0,0)},this.update=(function(){const j=new H,ue=new sn().setFromUnitVectors(e.up,new H(0,1,0)),Ee=ue.clone().invert(),De=new H,Le=new sn,Be=new H,ft=2*Math.PI;return function(){ue.setFromUnitVectors(e.up,new H(0,1,0)),Ee.copy(ue).invert();const ze=a.object.position;j.copy(ze).sub(a.target),j.applyQuaternion(ue),f.setFromVector3(j),a.autoRotate&&l===r.NONE&&N(C()),a.enableDamping?(f.theta+=d.theta*a.dampingFactor,f.phi+=d.phi*a.dampingFactor):(f.theta+=d.theta,f.phi+=d.phi);let Re=a.minAzimuthAngle,Oe=a.maxAzimuthAngle;isFinite(Re)&&isFinite(Oe)&&(Re<-Math.PI?Re+=ft:Re>Math.PI&&(Re-=ft),Oe<-Math.PI?Oe+=ft:Oe>Math.PI&&(Oe-=ft),Re<=Oe?f.theta=Math.max(Re,Math.min(Oe,f.theta)):f.theta=f.theta>(Re+Oe)/2?Math.max(Re,f.theta):Math.min(Oe,f.theta)),f.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,f.phi)),f.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(m,a.dampingFactor):a.target.add(m),a.zoomToCursor&&L||a.object.isOrthographicCamera?f.radius=re(f.radius):f.radius=re(f.radius*h),j.setFromSpherical(f),j.applyQuaternion(Ee),ze.copy(a.target).add(j),a.object.lookAt(a.target),a.enableDamping===!0?(d.theta*=1-a.dampingFactor,d.phi*=1-a.dampingFactor,m.multiplyScalar(1-a.dampingFactor)):(d.set(0,0,0),m.set(0,0,0));let Ce=!1;if(a.zoomToCursor&&L){let Ae=null;if(a.object.isPerspectiveCamera){const Ie=j.length();Ae=re(Ie*h);const lt=Ie-Ae;a.object.position.addScaledVector(D,lt),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const Ie=new H(b.x,b.y,0);Ie.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/h)),a.object.updateProjectionMatrix(),Ce=!0;const lt=new H(b.x,b.y,0);lt.unproject(a.object),a.object.position.sub(lt).add(Ie),a.object.updateMatrixWorld(),Ae=j.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(Ae).add(a.object.position):(Lu.origin.copy(a.object.position),Lu.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(Lu.direction))<Fw?e.lookAt(a.target):(I_.setFromNormalAndCoplanarPoint(a.object.up,a.target),Lu.intersectPlane(I_,a.target))))}else a.object.isOrthographicCamera&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/h)),a.object.updateProjectionMatrix(),Ce=!0);return h=1,L=!1,Ce||De.distanceToSquared(a.object.position)>u||8*(1-Le.dot(a.object.quaternion))>u||Be.distanceToSquared(a.target)>0?(a.dispatchEvent(w_),De.copy(a.object.position),Le.copy(a.object.quaternion),Be.copy(a.target),Ce=!1,!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",Te),a.domElement.removeEventListener("pointerdown",q),a.domElement.removeEventListener("pointercancel",St),a.domElement.removeEventListener("wheel",V),a.domElement.removeEventListener("pointermove",Mt),a.domElement.removeEventListener("pointerup",St),a._domElementKeyEvents!==null&&(a._domElementKeyEvents.removeEventListener("keydown",I),a._domElementKeyEvents=null)};const a=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=r.NONE;const u=1e-6,f=new qu,d=new qu;let h=1;const m=new H,g=new ke,v=new ke,_=new ke,y=new ke,E=new ke,x=new ke,A=new ke,T=new ke,w=new ke,D=new H,b=new ke;let L=!1;const R=[],P={};function C(){return 2*Math.PI/60/60*a.autoRotateSpeed}function U(){return Math.pow(.95,a.zoomSpeed)}function N(j){d.theta-=j}function k(j){d.phi-=j}const X=(function(){const j=new H;return function(Ee,De){j.setFromMatrixColumn(De,0),j.multiplyScalar(-Ee),m.add(j)}})(),W=(function(){const j=new H;return function(Ee,De){a.screenSpacePanning===!0?j.setFromMatrixColumn(De,1):(j.setFromMatrixColumn(De,0),j.crossVectors(a.object.up,j)),j.multiplyScalar(Ee),m.add(j)}})(),Q=(function(){const j=new H;return function(Ee,De){const Le=a.domElement;if(a.object.isPerspectiveCamera){const Be=a.object.position;j.copy(Be).sub(a.target);let ft=j.length();ft*=Math.tan(a.object.fov/2*Math.PI/180),X(2*Ee*ft/Le.clientHeight,a.object.matrix),W(2*De*ft/Le.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(X(Ee*(a.object.right-a.object.left)/a.object.zoom/Le.clientWidth,a.object.matrix),W(De*(a.object.top-a.object.bottom)/a.object.zoom/Le.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function O(j){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?h/=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function G(j){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?h*=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function Z(j){if(!a.zoomToCursor)return;L=!0;const ue=a.domElement.getBoundingClientRect(),Ee=j.clientX-ue.left,De=j.clientY-ue.top,Le=ue.width,Be=ue.height;b.x=Ee/Le*2-1,b.y=-(De/Be)*2+1,D.set(b.x,b.y,1).unproject(e).sub(e.position).normalize()}function re(j){return Math.max(a.minDistance,Math.min(a.maxDistance,j))}function he(j){g.set(j.clientX,j.clientY)}function z(j){Z(j),A.set(j.clientX,j.clientY)}function ie(j){y.set(j.clientX,j.clientY)}function pe(j){v.set(j.clientX,j.clientY),_.subVectors(v,g).multiplyScalar(a.rotateSpeed);const ue=a.domElement;N(2*Math.PI*_.x/ue.clientHeight),k(2*Math.PI*_.y/ue.clientHeight),g.copy(v),a.update()}function Me(j){T.set(j.clientX,j.clientY),w.subVectors(T,A),w.y>0?O(U()):w.y<0&&G(U()),A.copy(T),a.update()}function we(j){E.set(j.clientX,j.clientY),x.subVectors(E,y).multiplyScalar(a.panSpeed),Q(x.x,x.y),y.copy(E),a.update()}function $(j){Z(j),j.deltaY<0?G(U()):j.deltaY>0&&O(U()),a.update()}function ce(j){let ue=!1;switch(j.code){case a.keys.UP:j.ctrlKey||j.metaKey||j.shiftKey?k(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(0,a.keyPanSpeed),ue=!0;break;case a.keys.BOTTOM:j.ctrlKey||j.metaKey||j.shiftKey?k(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(0,-a.keyPanSpeed),ue=!0;break;case a.keys.LEFT:j.ctrlKey||j.metaKey||j.shiftKey?N(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(a.keyPanSpeed,0),ue=!0;break;case a.keys.RIGHT:j.ctrlKey||j.metaKey||j.shiftKey?N(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(-a.keyPanSpeed,0),ue=!0;break}ue&&(j.preventDefault(),a.update())}function be(){if(R.length===1)g.set(R[0].pageX,R[0].pageY);else{const j=.5*(R[0].pageX+R[1].pageX),ue=.5*(R[0].pageY+R[1].pageY);g.set(j,ue)}}function Fe(){if(R.length===1)y.set(R[0].pageX,R[0].pageY);else{const j=.5*(R[0].pageX+R[1].pageX),ue=.5*(R[0].pageY+R[1].pageY);y.set(j,ue)}}function Ue(){const j=R[0].pageX-R[1].pageX,ue=R[0].pageY-R[1].pageY,Ee=Math.sqrt(j*j+ue*ue);A.set(0,Ee)}function st(){a.enableZoom&&Ue(),a.enablePan&&Fe()}function vt(){a.enableZoom&&Ue(),a.enableRotate&&be()}function Je(j){if(R.length==1)v.set(j.pageX,j.pageY);else{const Ee=We(j),De=.5*(j.pageX+Ee.x),Le=.5*(j.pageY+Ee.y);v.set(De,Le)}_.subVectors(v,g).multiplyScalar(a.rotateSpeed);const ue=a.domElement;N(2*Math.PI*_.x/ue.clientHeight),k(2*Math.PI*_.y/ue.clientHeight),g.copy(v)}function nt(j){if(R.length===1)E.set(j.pageX,j.pageY);else{const ue=We(j),Ee=.5*(j.pageX+ue.x),De=.5*(j.pageY+ue.y);E.set(Ee,De)}x.subVectors(E,y).multiplyScalar(a.panSpeed),Q(x.x,x.y),y.copy(E)}function tt(j){const ue=We(j),Ee=j.pageX-ue.x,De=j.pageY-ue.y,Le=Math.sqrt(Ee*Ee+De*De);T.set(0,Le),w.set(0,Math.pow(T.y/A.y,a.zoomSpeed)),O(w.y),A.copy(T)}function at(j){a.enableZoom&&tt(j),a.enablePan&&nt(j)}function Dt(j){a.enableZoom&&tt(j),a.enableRotate&&Je(j)}function q(j){a.enabled!==!1&&(R.length===0&&(a.domElement.setPointerCapture(j.pointerId),a.domElement.addEventListener("pointermove",Mt),a.domElement.addEventListener("pointerup",St)),Se(j),j.pointerType==="touch"?ee(j):Bt(j))}function Mt(j){a.enabled!==!1&&(j.pointerType==="touch"?_e(j):Qe(j))}function St(j){je(j),R.length===0&&(a.domElement.releasePointerCapture(j.pointerId),a.domElement.removeEventListener("pointermove",Mt),a.domElement.removeEventListener("pointerup",St)),a.dispatchEvent(D_),l=r.NONE}function Bt(j){let ue;switch(j.button){case 0:ue=a.mouseButtons.LEFT;break;case 1:ue=a.mouseButtons.MIDDLE;break;case 2:ue=a.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Xi.DOLLY:if(a.enableZoom===!1)return;z(j),l=r.DOLLY;break;case Xi.ROTATE:if(j.ctrlKey||j.metaKey||j.shiftKey){if(a.enablePan===!1)return;ie(j),l=r.PAN}else{if(a.enableRotate===!1)return;he(j),l=r.ROTATE}break;case Xi.PAN:if(j.ctrlKey||j.metaKey||j.shiftKey){if(a.enableRotate===!1)return;he(j),l=r.ROTATE}else{if(a.enablePan===!1)return;ie(j),l=r.PAN}break;default:l=r.NONE}l!==r.NONE&&a.dispatchEvent(jh)}function Qe(j){switch(l){case r.ROTATE:if(a.enableRotate===!1)return;pe(j);break;case r.DOLLY:if(a.enableZoom===!1)return;Me(j);break;case r.PAN:if(a.enablePan===!1)return;we(j);break}}function V(j){a.enabled===!1||a.enableZoom===!1||l!==r.NONE||(j.preventDefault(),a.dispatchEvent(jh),$(j),a.dispatchEvent(D_))}function I(j){a.enabled===!1||a.enablePan===!1||ce(j)}function ee(j){switch(Pe(j),R.length){case 1:switch(a.touches.ONE){case Wi.ROTATE:if(a.enableRotate===!1)return;be(),l=r.TOUCH_ROTATE;break;case Wi.PAN:if(a.enablePan===!1)return;Fe(),l=r.TOUCH_PAN;break;default:l=r.NONE}break;case 2:switch(a.touches.TWO){case Wi.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;st(),l=r.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;vt(),l=r.TOUCH_DOLLY_ROTATE;break;default:l=r.NONE}break;default:l=r.NONE}l!==r.NONE&&a.dispatchEvent(jh)}function _e(j){switch(Pe(j),l){case r.TOUCH_ROTATE:if(a.enableRotate===!1)return;Je(j),a.update();break;case r.TOUCH_PAN:if(a.enablePan===!1)return;nt(j),a.update();break;case r.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;at(j),a.update();break;case r.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Dt(j),a.update();break;default:l=r.NONE}}function Te(j){a.enabled!==!1&&j.preventDefault()}function Se(j){R.push(j)}function je(j){delete P[j.pointerId];for(let ue=0;ue<R.length;ue++)if(R[ue].pointerId==j.pointerId){R.splice(ue,1);return}}function Pe(j){let ue=P[j.pointerId];ue===void 0&&(ue=new ke,P[j.pointerId]=ue),ue.set(j.pageX,j.pageY)}function We(j){const ue=j.pointerId===R[0].pointerId?R[1]:R[0];return P[ue.pointerId]}a.domElement.addEventListener("contextmenu",Te),a.domElement.addEventListener("pointerdown",q),a.domElement.addEventListener("pointercancel",St),a.domElement.addEventListener("wheel",V,{passive:!1}),this.update()}}const Pw=(o,e,n,a,r)=>{const l=performance.now();let u=o.style.display==="none"?0:parseFloat(o.style.opacity);isNaN(u)&&(u=1);const f=window.setInterval(()=>{const h=performance.now()-l;let m=Math.min(h/a,1);m>.999&&(m=1);let g;e?(g=(1-m)*u,g<1e-4&&(g=0)):g=(1-u)*m+u,g>0?(o.style.display=n,o.style.opacity=g):o.style.display="none",m>=1&&(r&&r(),window.clearInterval(f))},16);return f},Ow=500;class xm{static elementIDGen=0;constructor(e,n){this.taskIDGen=0,this.elementID=xm.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=n||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const a=document.createElement("style");a.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(a),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const n={message:e,id:this.taskIDGen++};return this.tasks.push(n),this.update(),n.id}removeTask(e){let n=0;for(let a of this.tasks){if(a.id===e){this.tasks.splice(n,1);break}n++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,n){for(let a of this.tasks)if(a.id===e){a.message=n;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,n){const a=(r,l,u,f,d)=>{u?r.style.display=l?f:"none":this.fadeTransitions[d]=Pw(r,!l,f,Ow,()=>{this.fadeTransitions[d]=null})};a(this.spinnerContainerPrimary,!e,n,"block",0),a(this.spinnerContainerMin,e,n,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}}class Nw{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const n=document.createElement("style");n.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(n),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class zw{constructor(e){this.container=e||document.body,this.infoCells={};const n=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const a=document.createElement("style");a.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(a),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const r=document.createElement("div");r.style.display="table";for(let l of n){const u=document.createElement("div");u.style.display="table-row",u.className="info-panel-row";const f=document.createElement("div");f.style.display="table-cell",f.innerHTML=`${l[0]}: `,f.classList.add("info-panel-cell","label-cell");const d=document.createElement("div");d.style.display="table-cell",d.style.width="10px",d.innerHTML=" ",d.className="info-panel-cell";const h=document.createElement("div");h.style.display="table-cell",h.innerHTML="",h.className="info-panel-cell",this.infoCells[l[1]]=h,u.appendChild(f),u.appendChild(d),u.appendChild(h),r.appendChild(u)}this.infoPanel.appendChild(r),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,n,a,r,l,u,f,d,h,m,g,v,_,y){const E=`${n.x.toFixed(5)}, ${n.y.toFixed(5)}, ${n.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==E&&(this.infoCells.cameraPosition.innerHTML=E),a){const A=a,T=`${A.x.toFixed(5)}, ${A.y.toFixed(5)}, ${A.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==T&&(this.infoCells.cameraLookAt.innerHTML=T)}const x=`${r.x.toFixed(5)}, ${r.y.toFixed(5)}, ${r.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==x&&(this.infoCells.cameraUp.innerHTML=x),this.infoCells.orthographicCamera.innerHTML=l?"Orthographic":"Perspective",u){const A=u,T=`${A.x.toFixed(5)}, ${A.y.toFixed(5)}, ${A.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=T}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=f,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${h} splats out of ${d} (${m.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${g.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${v.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${_.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${y}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const U_=new H;class Hw extends In{constructor(e=new H(0,0,1),n=new H(0,0,0),a=1,r=.1,l=16776960,u=a*.2,f=u*.2){super(),this.type="ArrowHelper";const d=new Ql(r,r,a,32);d.translate(0,a/2,0);const h=new Ql(0,f,u,32);h.translate(0,a,0),this.position.copy(n),this.line=new _n(d,new dr({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _n(h,new dr({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{U_.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(U_,n)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Nl{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,n){this.destroySplatRendertarget(),this.splatRenderTarget=new sa(e,n,{format:ri,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Co(e,n),this.splatRenderTarget.depthTexture.format=_a,this.splatRenderTarget.depthTexture.type=si}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},n=new ci({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:H_,blendSrc:Gl,blendSrcAlpha:Gl,blendDst:Vl,blendDstAlpha:Vl});n.extensions.fragDepth=!0,this.renderTargetCopyQuad=new _n(new bo(2,2),n),this.renderTargetCopyCamera=new ef(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(po(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new sm(.5,1.5,32),n=new dr({color:16777215}),a=new _n(e,n);a.rotation.set(0,0,Math.PI),a.position.set(0,1,0);const r=new _n(e,n);r.position.set(0,-1,0);const l=new _n(e,n);l.rotation.set(0,0,Math.PI/2),l.position.set(1,0,0);const u=new _n(e,n);u.rotation.set(0,0,-Math.PI/2),u.position.set(-1,0,0),this.meshCursor=new In,this.meshCursor.add(a),this.meshCursor.add(r),this.meshCursor.add(l),this.meshCursor.add(u),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(po(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,n){this.meshCursor.position.copy(e),this.meshCursor.up.copy(n.up),this.meshCursor.lookAt(n.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Wu(.5,32,32),n=Nl.buildFocusMarkerMaterial();n.depthTest=!1,n.depthWrite=!1,n.transparent=!0,this.focusMarker=new _n(e,n)}}destroyFocusMarker(){this.focusMarker&&(po(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){const e=new H,n=new pt,a=new H;return function(r,l,u){n.copy(l.matrixWorld).invert(),e.copy(r).applyMatrix4(n),e.normalize().multiplyScalar(10),e.applyMatrix4(l.matrixWorld),a.copy(l.position).sub(r);const f=a.length();this.focusMarker.position.copy(r),this.focusMarker.scale.set(f,f,f),this.focusMarker.material.uniforms.realFocusPosition.value.copy(r),this.focusMarker.material.uniforms.viewport.value.copy(u),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new bo(1,1);e.rotateX(-Math.PI/2);const n=new dr({color:16777215});n.transparent=!0,n.opacity=.6,n.depthTest=!1,n.depthWrite=!1,n.side=qi;const a=new _n(e,n),r=new H(0,1,0);r.normalize();const l=new H(0,0,0),u=.5,f=.01,d=56576,h=new Hw(r,l,u,f,d,.1,.03);this.controlPlane=new In,this.controlPlane.add(a),this.controlPlane.add(h)}}destroyControlPlane(){this.controlPlane&&(po(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){const e=new sn,n=new H(0,1,0);return function(a,r){e.setFromUnitVectors(n,r),this.controlPlane.position.copy(a),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(po(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const n=new Wu(1,32,32),a=new In,r=(l,u)=>{let f=new _n(n,Nl.buildDebugMaterial(l));f.renderOrder=e,a.add(f),f.position.fromArray(u)};return r(16711680,[-50,0,0]),r(16711680,[50,0,0]),r(65280,[0,0,-50]),r(65280,[0,0,50]),r(16755200,[5,0,5]),a}createSecondaryDebugMeshes(e){const n=new Do(3,3,3),a=new In;let r=12303291;const l=f=>{let d=new _n(n,Nl.buildDebugMaterial(r));d.renderOrder=e,a.add(d),d.position.fromArray(f)};let u=10;return l([-u,0,-u]),l([-u,0,u]),l([u,0,-u]),l([u,0,u]),a}static buildDebugMaterial(e){const n=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,a=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,r={color:{type:"v3",value:new Lt(e)}},l=new ci({uniforms:r,vertexShader:n,fragmentShader:a,transparent:!1,depthTest:!0,depthWrite:!0,side:Sa});return l.extensions.fragDepth=!0,l}static buildFocusMarkerMaterial(e){const n=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,a=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,r={color:{type:"v3",value:new Lt(e)},realFocusPosition:{type:"v3",value:new H},viewport:{type:"v2",value:new ke},opacity:{value:0}};return new ci({uniforms:r,vertexShader:n,fragmentShader:a,transparent:!0,depthTest:!1,depthWrite:!1,side:Sa})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const Gw=new H(1,0,0),Vw=new H(0,1,0),kw=new H(0,0,1);class Kh{constructor(e=new H,n=new H){this.origin=new H,this.direction=new H,this.setParameters(e,n)}setParameters(e,n){this.origin.copy(e),this.direction.copy(n).normalize()}boxContainsPoint(e,n,a){return!(n.x<e.min.x-a||n.x>e.max.x+a||n.y<e.min.y-a||n.y>e.max.y+a||n.z<e.min.z-a||n.z>e.max.z+a)}intersectBox=(function(){const e=new H,n=[],a=[],r=[];return function(l,u){if(a[0]=this.origin.x,a[1]=this.origin.y,a[2]=this.origin.z,r[0]=this.direction.x,r[1]=this.direction.y,r[2]=this.direction.z,this.boxContainsPoint(l,this.origin,1e-4))return u&&(u.origin.copy(this.origin),u.normal.set(0,0,0),u.distance=-1),!0;for(let f=0;f<3;f++){if(r[f]==0)continue;const d=f==0?Gw:f==1?Vw:kw,h=r[f]<0?l.max:l.min;let m=-Math.sign(r[f]);n[0]=f==0?h.x:f==1?h.y:h.z;let g=n[0]-a[f];if(g*m<0){const v=(f+1)%3,_=(f+2)%3;if(n[2]=r[v]/r[f]*g+a[v],n[1]=r[_]/r[f]*g+a[_],e.set(n[f],n[_],n[v]),this.boxContainsPoint(l,e,1e-4))return u&&(u.origin.copy(e),u.normal.copy(d).multiplyScalar(m),u.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){const e=new H;return function(n,a,r){e.copy(n).sub(this.origin);const l=e.dot(this.direction),u=l*l,d=e.dot(e)-u,h=a*a;if(d>h)return!1;const m=Math.sqrt(h-d),g=l-m,v=l+m;if(v<0)return!1;let _=g<0?v:g;return r&&(r.origin.copy(this.origin).addScaledVector(this.direction,_),r.normal.copy(r.origin).sub(n).normalize(),r.distance=_),!0}})()}class ym{constructor(){this.origin=new H,this.normal=new H,this.distance=0,this.splatIndex=0}set(e,n,a,r){this.origin.copy(e),this.normal.copy(n),this.distance=a,this.splatIndex=r}clone(){const e=new ym;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Ya={ThreeD:0,TwoD:1};class Xw{constructor(e,n,a=!1){this.ray=new Kh(e,n),this.raycastAgainstTrueSplatEllipsoid=a}setFromCameraAndScreenPosition=(function(){const e=new ke;return function(n,a,r){if(e.x=a.x/r.x*2-1,e.y=(r.y-a.y)/r.y*2-1,n.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n;else if(n.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){const e=new pt,n=new pt,a=new pt,r=new Kh,l=new H;return function(u,f=[]){const d=u.getSplatTree();if(d){for(let h=0;h<d.subTrees.length;h++){const m=d.subTrees[h];n.copy(u.matrixWorld),u.dynamicMode&&(u.getSceneTransform(h,a),n.multiply(a)),e.copy(n).invert(),r.origin.copy(this.ray.origin).applyMatrix4(e),r.direction.copy(this.ray.origin).add(this.ray.direction),r.direction.applyMatrix4(e).sub(r.origin).normalize();const g=[];m.rootNode&&this.castRayAtSplatTreeNode(r,d,m.rootNode,g),g.forEach(v=>{v.origin.applyMatrix4(n),v.normal.applyMatrix4(n).normalize(),v.distance=l.copy(v.origin).sub(this.ray.origin).length()}),f.push(...g)}return f.sort((h,m)=>h.distance>m.distance?1:-1),f}}})();castRayAtSplatTreeNode=(function(){const e=new hn,n=new H,a=new H,r=new sn,l=new ym,u=1e-7,f=new H(0,0,0),d=new pt,h=new pt,m=new pt,g=new pt,v=new pt,_=new Kh;return function(y,E,x,A=[]){if(y.intersectBox(x.boundingBox)){if(x.data&&x.data.indexes&&x.data.indexes.length>0)for(let T=0;T<x.data.indexes.length;T++){const w=x.data.indexes[T],D=E.splatMesh.getSceneIndexForSplat(w);if(E.splatMesh.getScene(D).visible&&(E.splatMesh.getSplatColor(w,e),E.splatMesh.getSplatCenter(w,n),E.splatMesh.getSplatScaleAndRotation(w,a,r),!(a.x<=u||a.y<=u||E.splatMesh.splatRenderMode===Ya.ThreeD&&a.z<=u)))if(this.raycastAgainstTrueSplatEllipsoid){h.makeScale(a.x,a.y,a.z),m.makeRotationFromQuaternion(r);const L=Math.log10(e.w)*2;if(d.makeScale(L,L,L),v.copy(d).multiply(m).multiply(h),g.copy(v).invert(),_.origin.copy(y.origin).sub(n).applyMatrix4(g),_.direction.copy(y.origin).add(y.direction).sub(n),_.direction.applyMatrix4(g).sub(_.origin).normalize(),_.intersectSphere(f,1,l)){const R=l.clone();R.splatIndex=w,R.origin.applyMatrix4(v).add(n),A.push(R)}}else{let L=a.x+a.y,R=2;if(E.splatMesh.splatRenderMode===Ya.ThreeD&&(L+=a.z,R=3),L=L/R,y.intersectSphere(n,L,l)){const P=l.clone();P.splatIndex=w,A.push(P)}}}if(x.children&&x.children.length>0)for(let T of x.children)this.castRayAtSplatTreeNode(y,E,T,A);return A}}})()}class _o{static buildVertexShaderBase(e=!1,n=!1,a=0,r=""){let l=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return n&&(l+=`
            uniform float sceneOpacity[${en.MaxScenes}];
            uniform int sceneVisibility[${en.MaxScenes}];
        `),e&&(l+=`
            uniform highp mat4 transforms[${en.MaxScenes}];
        `),l+=`
        ${r}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${en.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${en.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,n&&(l+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?l+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:l+="mat4 transformModelViewMatrix = modelViewMatrix;",l+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,a>=1&&(l+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?l+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:l+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,l+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,a>=2&&(l+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),a===1?l+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:a===2&&(l+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),l+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,a>=2&&(l+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,a===2&&(l+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),l+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),l+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),l}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,n=!1,a=0,r=1,l=!1){const u={sceneCenter:{type:"v3",value:new H},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new ke},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new ke},basisViewport:{type:"v2",value:new ke},debugColor:{type:"v3",value:new Lt},centersColorsTextureSize:{type:"v2",value:new ke(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:a},sphericalHarmonicsTextureSize:{type:"v2",value:new ke(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:r},pointCloudModeEnabled:{type:"i",value:l?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new ke(1024,1024)},sceneCount:{type:"i",value:1}};for(let f=0;f<en.MaxScenes;f++)u.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),u.sphericalHarmonics8BitCompressionRangeMax.value.push(en.SphericalHarmonics8BitCompressionRange/2);if(n){const f=[];for(let h=0;h<en.MaxScenes;h++)f.push(1);u.sceneOpacity={type:"f",value:f};const d=[];for(let h=0;h<en.MaxScenes;h++)d.push(1);u.sceneVisibility={type:"i",value:d}}if(e){const f=[];for(let d=0;d<en.MaxScenes;d++)f.push(new pt);u.transforms={type:"mat4",value:f}}return u}}class Qu{static build(e=!1,n=!1,a=!1,r=2048,l=1,u=!1,f=0,d=.3){let m=_o.buildVertexShaderBase(e,n,f,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);m+=Qu.buildVertexShaderProjection(a,n,r,d);const g=Qu.buildFragmentShader(),v=_o.getUniforms(e,n,f,l,u);return v.covariancesTextureSize={type:"v2",value:new ke(1024,1024)},v.covariancesTexture={type:"t",value:null},v.covariancesTextureHalfFloat={type:"t",value:null},v.covariancesAreHalfFloat={type:"i",value:0},new ci({uniforms:v,vertexShader:m,fragmentShader:g,transparent:!0,alphaTest:1,blending:Bs,depthTest:!0,depthWrite:!1,side:qi})}static buildVertexShaderProjection(e,n,a,r){let l=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?l+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:l+=`
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
            `,l+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(a)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(a)}.0);
            `,n&&(l+=`
                vColor.a *= splatOpacityFromScene;
            `),l+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,l+=_o.getVertexShaderFadeIn(),l+="}",l}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class ju{static build(e=!1,n=!1,a=1,r=!1,l=0){let f=_o.buildVertexShaderBase(e,n,l,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);f+=ju.buildVertexShaderProjection();const d=ju.buildFragmentShader(),h=_o.getUniforms(e,n,l,a,r);return h.scaleRotationsTexture={type:"t",value:null},h.scaleRotationsTextureSize={type:"v2",value:new ke(1024,1024)},new ci({uniforms:h,vertexShader:f,fragmentShader:d,transparent:!0,alphaTest:1,blending:Bs,depthTest:!0,depthWrite:!1,side:qi})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=_o.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class Ww{static build(e){const n=new vi;n.setIndex([0,1,2,0,2,3]);const a=new Float32Array(12),r=new Qi(a,3);n.setAttribute("position",r),r.setXYZ(0,-1,-1,0),r.setXYZ(1,-1,1,0),r.setXYZ(2,1,1,0),r.setXYZ(3,1,-1,0),r.needsUpdate=!0;const l=new CM().copy(n),u=new Uint32Array(e),f=new vM(u,1,!1);return f.setUsage(bE),l.setAttribute("splatIndex",f),l.instanceCount=0,l}}class qw extends In{constructor(e,n=new H,a=new sn,r=new H(1,1,1),l=1,u=1,f=!0){super(),this.splatBuffer=e,this.position.copy(n),this.quaternion.copy(a),this.scale.copy(r),this.transform=new pt,this.minimumAlpha=l,this.opacity=u,this.visible=f}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}class Em{static idGen=0;constructor(e,n,a,r){this.min=new H().copy(e),this.max=new H().copy(n),this.boundingBox=new pa(this.min,this.max),this.center=new H().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=a,this.children=[],this.data=null,this.id=r||Em.idGen++}}class zl{constructor(e,n){this.maxDepth=e,this.maxCentersPerNode=n,this.sceneDimensions=new H,this.sceneMin=new H,this.sceneMax=new H,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const n=new H().fromArray(e.min),a=new H().fromArray(e.max),r=new Em(n,a,e.depth,e.id);if(e.data.indexes){r.data={indexes:[]};for(let l of e.data.indexes)r.data.indexes.push(l)}if(e.children)for(let l of e.children)r.children.push(zl.convertWorkerSubTreeNode(l));return r}static convertWorkerSubTree(e,n){const a=new zl(e.maxDepth,e.maxCentersPerNode);a.sceneMin=new H().fromArray(e.sceneMin),a.sceneMax=new H().fromArray(e.sceneMax),a.splatMesh=n,a.rootNode=zl.convertWorkerSubTreeNode(e.rootNode);const r=(l,u)=>{l.children.length===0&&u(l);for(let f of l.children)r(f,u)};return a.nodesWithIndexes=[],r(a.rootNode,l=>{l.data&&l.data.indexes&&l.data.indexes.length>0&&a.nodesWithIndexes.push(l)}),a}}function Yw(o){let e=0;class n{constructor(d,h){this.min=[d[0],d[1],d[2]],this.max=[h[0],h[1],h[2]]}containsPoint(d){return d[0]>=this.min[0]&&d[0]<=this.max[0]&&d[1]>=this.min[1]&&d[1]<=this.max[1]&&d[2]>=this.min[2]&&d[2]<=this.max[2]}}class a{constructor(d,h){this.maxDepth=d,this.maxCentersPerNode=h,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class r{constructor(d,h,m,g){this.min=[d[0],d[1],d[2]],this.max=[h[0],h[1],h[2]],this.center=[(h[0]-d[0])*.5+d[0],(h[1]-d[1])*.5+d[1],(h[2]-d[2])*.5+d[2]],this.depth=m,this.children=[],this.data=null,this.id=g||e++}}processSplatTreeNode=function(f,d,h,m){const g=d.data.indexes.length;if(g<f.maxCentersPerNode||d.depth>f.maxDepth){const T=[];for(let w=0;w<d.data.indexes.length;w++)f.addedIndexes[d.data.indexes[w]]||(T.push(d.data.indexes[w]),f.addedIndexes[d.data.indexes[w]]=!0);d.data.indexes=T,d.data.indexes.sort((w,D)=>w>D?1:-1),f.nodesWithIndexes.push(d);return}const v=[d.max[0]-d.min[0],d.max[1]-d.min[1],d.max[2]-d.min[2]],_=[v[0]*.5,v[1]*.5,v[2]*.5],y=[d.min[0]+_[0],d.min[1]+_[1],d.min[2]+_[2]],E=[new n([y[0]-_[0],y[1],y[2]-_[2]],[y[0],y[1]+_[1],y[2]]),new n([y[0],y[1],y[2]-_[2]],[y[0]+_[0],y[1]+_[1],y[2]]),new n([y[0],y[1],y[2]],[y[0]+_[0],y[1]+_[1],y[2]+_[2]]),new n([y[0]-_[0],y[1],y[2]],[y[0],y[1]+_[1],y[2]+_[2]]),new n([y[0]-_[0],y[1]-_[1],y[2]-_[2]],[y[0],y[1],y[2]]),new n([y[0],y[1]-_[1],y[2]-_[2]],[y[0]+_[0],y[1],y[2]]),new n([y[0],y[1]-_[1],y[2]],[y[0]+_[0],y[1],y[2]+_[2]]),new n([y[0]-_[0],y[1]-_[1],y[2]],[y[0],y[1],y[2]+_[2]])],x=[];for(let T=0;T<E.length;T++)x[T]=[];const A=[0,0,0];for(let T=0;T<g;T++){const w=d.data.indexes[T],D=h[w];A[0]=m[D],A[1]=m[D+1],A[2]=m[D+2];for(let b=0;b<E.length;b++)E[b].containsPoint(A)&&x[b].push(w)}for(let T=0;T<E.length;T++){const w=new r(E[T].min,E[T].max,d.depth+1);w.data={indexes:x[T]},d.children.push(w)}d.data={};for(let T of d.children)processSplatTreeNode(f,T,h,m)};const l=(f,d,h)=>{const m=[0,0,0],g=[0,0,0],v=[],_=Math.floor(f.length/4);for(let E=0;E<_;E++){const x=E*4,A=f[x],T=f[x+1],w=f[x+2],D=Math.round(f[x+3]);(E===0||A<m[0])&&(m[0]=A),(E===0||A>g[0])&&(g[0]=A),(E===0||T<m[1])&&(m[1]=T),(E===0||T>g[1])&&(g[1]=T),(E===0||w<m[2])&&(m[2]=w),(E===0||w>g[2])&&(g[2]=w),v.push(D)}const y=new a(d,h);return y.sceneMin=m,y.sceneMax=g,y.rootNode=new r(y.sceneMin,y.sceneMax,0),y.rootNode.data={indexes:v},y};function u(f,d,h){const m=[];for(let v of f){const _=Math.floor(v.length/4);for(let y=0;y<_;y++){const E=y*4,x=Math.round(v[E+3]);m[x]=E}}const g=[];for(let v of f){const _=l(v,d,h);g.push(_),processSplatTreeNode(_,_.rootNode,m,v)}o.postMessage({subTrees:g})}o.onmessage=f=>{f.data.process&&u(f.data.process.centers,f.data.process.maxDepth,f.data.process.maxCentersPerNode)}}function Qw(o,e,n,a,r){o.postMessage({process:{centers:e,maxDepth:a,maxCentersPerNode:r}},n)}function jw(){return new Worker(URL.createObjectURL(new Blob(["(",Yw.toString(),")(self)"],{type:"application/javascript"})))}class Kw{constructor(e,n){this.maxDepth=e,this.maxCentersPerNode=n,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,n=()=>!0,a,r){this.splatTreeWorker||(this.splatTreeWorker=jw()),this.splatMesh=e,this.subTrees=[];const l=new H,u=(f,d)=>{const h=new Float32Array(d*4);let m=0;for(let g=0;g<d;g++){const v=g+f;if(n(v)){e.getSplatCenter(v,l);const _=m*4;h[_]=l.x,h[_+1]=l.y,h[_+2]=l.z,h[_+3]=v,m++}}return h};return new Promise(f=>{const d=()=>this.disposed?(this.diposeSplatTreeWorker(),f(),!0):!1;a&&a(!1),Ii(()=>{if(d())return;const h=[];if(e.dynamicMode){let m=0;for(let g=0;g<e.scenes.length;g++){const _=e.getScene(g).splatBuffer.getSplatCount(),y=u(m,_);h.push(y),m+=_}}else{const m=u(0,e.getSplatCount());h.push(m)}this.splatTreeWorker.onmessage=m=>{d()||m.data.subTrees&&(r&&r(!1),Ii(()=>{if(!d()){for(let g of m.data.subTrees){const v=zl.convertWorkerSubTree(g,e);this.subTrees.push(v)}this.diposeSplatTreeWorker(),r&&r(!0),Ii(()=>{f()})}}))},Ii(()=>{if(d())return;a&&a(!0);const m=h.map(g=>g.buffer);Qw(this.splatTreeWorker,h,m,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const n=(a,r)=>{a.children.length===0&&r(a);for(let l of a.children)n(l,r)};for(let a of this.subTrees)n(a.rootNode,e)}}function Zw(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(a){a.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(a){const r=n(a);return r===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function Jw(o,e,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function l(R){if(R==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let f=n.precision!==void 0?n.precision:"highp";const d=l(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const h=u||e.has("WEBGL_draw_buffers"),m=n.logarithmicDepthBuffer===!0,g=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),A=o.getParameter(o.MAX_VARYING_VECTORS),T=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,D=u||e.has("OES_texture_float"),b=w&&D,L=u?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:l,precision:f,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:x,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:w,floatFragmentTextures:D,floatVertexTextures:b,maxSamples:L}}const Hl={Default:0,Instant:2},Ao={None:0,Info:3},L_=new vi,$w=new dr,Fu=6,e2=4,t2=4,n2=4,i2=6,a2=8,Zh=4,Jh=4,B_=1,s2=.012,r2=.003,F_=1,P_=16777216;class qn extends _n{constructor(e=Ya.ThreeD,n=!1,a=!1,r=!1,l=1,u=!0,f=!1,d=!1,h=1024,m=Ao.None,g=0,v=1,_=.3){super(L_,$w),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=n,this.enableOptionalEffects=a,this.halfPrecisionCovariancesOnGPU=r,this.devicePixelRatio=l,this.enableDistancesComputationOnGPU=u,this.integerBasedDistancesComputation=f,this.antialiased=d,this.kernel2DSize=_,this.maxScreenSpaceSplatSize=h,this.logLevel=m,this.sphericalHarmonicsDegree=g,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=v,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new pa,this.calculatedSceneCenter=new H,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,n,a){const r=[];r.length=n.length;for(let l=0;l<n.length;l++){const u=n[l],f=a[l]||{};let d=f.position||[0,0,0],h=f.rotation||[0,0,0,1],m=f.scale||[1,1,1];const g=new H().fromArray(d),v=new sn().fromArray(h),_=new H().fromArray(m),y=qn.createScene(u,g,v,_,f.splatAlphaRemovalThreshold||1,f.opacity,f.visible);e.add(y),r[l]=y}return r}static createScene(e,n,a,r,l,u=1,f=!0){return new qw(e,n,a,r,l,u,f)}static buildSplatIndexMaps(e){const n=[],a=[];let r=0;for(let l=0;l<e.length;l++){const f=e[l].getMaxSplatCount();for(let d=0;d<f;d++)n[r]=d,a[r]=l,r++}return{localSplatIndexMap:n,sceneIndexMap:a}}buildSplatTree=function(e=[],n,a){return new Promise(r=>{this.disposeSplatTree(),this.baseSplatTree=new Kw(8,1e3);const l=performance.now(),u=new hn;this.baseSplatTree.processSplatMesh(this,f=>{this.getSplatColor(f,u);const d=this.getSceneIndexForSplat(f),h=e[d]||1;return u.w>=h},n,a).then(()=>{const f=performance.now()-l;if(this.logLevel>=Ao.Info&&console.log("SplatTree build: "+f+" ms"),this.disposed)r();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let d=0,h=0,m=0;this.splatTree.visitLeaves(g=>{const v=g.data.indexes.length;v>0&&(h+=v,m++,d++)}),this.logLevel>=Ao.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${d}`),h=h/m,console.log(`Avg splat count per node: ${h}`),console.log(`Total splat count: ${this.getSplatCount()}`)),r()}})})};build(e,n,a=!0,r=!1,l,u,f=!0){this.sceneOptions=n,this.finalBuild=r;const d=qn.getTotalMaxSplatCountForSplatBuffers(e),h=qn.buildScenes(this,e,n);if(a)for(let E=0;E<this.scenes.length&&E<h.length;E++){const x=h[E],A=this.getScene(E);x.copyTransformData(A)}this.scenes=h;let m=3;for(let E of e){const x=E.getMinSphericalHarmonicsDegree();x<m&&(m=x)}this.minSphericalHarmonicsDegree=Math.min(m,this.sphericalHarmonicsDegree);let g=!1;if(e.length!==this.lastBuildScenes.length)g=!0;else for(let E=0;E<e.length;E++)if(e[E]!==this.lastBuildScenes[E].splatBuffer){g=!0;break}let v=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==d||g)&&(v=!1),!v){this.boundingBox=new pa,f||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=Ww.build(d),this.splatRenderMode===Ya.ThreeD?this.material=Qu.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=ju.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const E=qn.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=E.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=E.sceneIndexMap}const _=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const y=this.refreshGPUDataFromSplatBuffers(v);for(let E=0;E<this.scenes.length;E++)this.lastBuildScenes[E]=this.scenes[E];return this.lastBuildSplatCount=_,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,r&&this.scenes.length>0&&this.buildSplatTree(n.map(E=>E.splatAlphaRemovalThreshold||1),l,u).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,y}freeIntermediateSplatData(){const e=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{e(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new pa,this.calculatedSceneCenter=new H,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==L_&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){const n=this.splatDataTextures[e];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,n){const a=this.integerBasedDistancesComputation?this.getIntegerCenters(e,n,!0):this.getFloatCenters(e,n,!0),r=this.getSceneIndexes(e,n);return{centers:a,sceneIndexes:r}}refreshGPUDataFromSplatBuffers(e){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);const a=e?this.lastBuildSplatCount:0,{centers:r,sceneIndexes:l}=this.getDataForDistancesComputation(a,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(r,l,e),{from:a,to:n-1,count:n-a,centers:r,sceneIndexes:l}}refreshGPUBuffersForDistancesComputation(e,n,a=!1){const r=a?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(a,e,r),this.updateGPUTransformIndexesBufferForDistancesComputation(a,n,r)}refreshDataTexturesFromSplatBuffers(e){const n=this.getSplatCount(!0),a=this.lastBuildSplatCount,r=n-1;e?this.updateBaseDataFromSplatBuffers(a,r):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(a,r),this.updateVisibleRegion(e)}setupDataTextures(){const e=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const a=(R,P)=>{const C=new ke(4096,1024);for(;C.x*C.y*R<e*P;)C.y*=2;return C},r=R=>R>=1?i2:t2,l=R=>{const P=r(R),C=a(P,6);return{elementsPerTexelStored:P,texSize:C}};let u=this.getTargetCovarianceCompressionLevel();const f=0,d=this.getTargetSphericalHarmonicsCompressionLevel();let h,m,g;if(this.splatRenderMode===Ya.ThreeD){const R=l(u);R.texSize.x*R.texSize.y>P_&&u===0&&(u=1),h=new Float32Array(e*Fu)}else m=new Float32Array(e*3),g=new Float32Array(e*4);const v=new Float32Array(e*3),_=new Uint8Array(e*4);let y=Float32Array;d===1?y=Uint16Array:d===2&&(y=Uint8Array);const E=vo(this.minSphericalHarmonicsDegree),x=this.minSphericalHarmonicsDegree?new y(e*E):void 0,A=a(Jh,4),T=new Uint32Array(A.x*A.y*Jh);qn.updateCenterColorsPaddedData(0,n-1,v,_,T);const w=new Wa(T,A.x,A.y,go,si);if(w.internalFormat="RGBA32UI",w.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=w,this.material.uniforms.centersColorsTextureSize.value.copy(A),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:h,scales:m,rotations:g,centers:v,colors:_,sphericalHarmonics:x},centerColors:{data:T,texture:w,size:A}},this.splatRenderMode===Ya.ThreeD){const R=l(u),P=R.elementsPerTexelStored,C=R.texSize;let U=u>=1?Uint32Array:Float32Array;const N=u>=1?a2:n2,k=new U(C.x*C.y*N);u===0?k.set(h):qn.updatePaddedCompressedCovariancesTextureData(h,k,0,0,h.length);let X;if(u>=1)X=new Wa(k,C.x,C.y,go,si),X.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=X;else{X=new Wa(k,C.x,C.y,ri,Yi),this.material.uniforms.covariancesTexture.value=X;const W=new Wa(new Uint32Array(32),2,2,go,si);W.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=W,W.needsUpdate=!0}X.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=u>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(C),this.splatDataTextures.covariances={data:k,texture:X,size:C,compressionLevel:u,elementsPerTexelStored:P,elementsPerTexelAllocated:N}}else{const P=a(Zh,6);let C=Float32Array,U=Yi;const N=new C(P.x*P.y*Zh);qn.updateScaleRotationsPaddedData(0,n-1,m,g,N);const k=new Wa(N,P.x,P.y,ri,U);k.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=k,this.material.uniforms.scaleRotationsTextureSize.value.copy(P),this.splatDataTextures.scaleRotations={data:N,texture:k,size:P,compressionLevel:f}}if(x){const R=d===2?Di:va;let P=E;P%2!==0&&P++;const C=4,U=ri;let N=a(C,P);if(N.x*N.y<=P_){const k=N.x*N.y*C,X=new y(k);for(let Q=0;Q<n;Q++){const O=E*Q,G=P*Q;for(let Z=0;Z<E;Z++)X[G+Z]=x[O+Z]}const W=new Wa(X,N.x,N.y,U,R);W.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=W,this.splatDataTextures.sphericalHarmonics={componentCount:E,paddedComponentCount:P,data:X,textureCount:1,texture:W,size:N,compressionLevel:d,elementsPerTexel:C}}else{const k=E/3;P=k,P%2!==0&&P++,N=a(C,P);const X=N.x*N.y*C,W=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],Q=[],O=[];for(let G=0;G<3;G++){const Z=new y(X);Q.push(Z);for(let he=0;he<n;he++){const z=E*he,ie=P*he;if(k>=3){for(let pe=0;pe<3;pe++)Z[ie+pe]=x[z+G*3+pe];if(k>=8)for(let pe=0;pe<5;pe++)Z[ie+3+pe]=x[z+9+G*5+pe]}}const re=new Wa(Z,N.x,N.y,U,R);O.push(re),re.needsUpdate=!0,W[G].value=re}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:E,componentCountPerChannel:k,paddedComponentCount:P,data:Q,textureCount:3,textures:O,size:N,compressionLevel:d,elementsPerTexel:C}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(N),this.material.uniforms.sphericalHarmonics8BitMode.value=d===2?1:0;for(let k=0;k<this.scenes.length;k++){const X=this.scenes[k].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[k]=X.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[k]=X.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const D=a(B_,4),b=new Uint32Array(D.x*D.y*B_);for(let R=0;R<n;R++)b[R]=this.globalSplatIndexToSceneIndexMap[R];const L=new Wa(b,D.x,D.y,Zu,si);L.internalFormat="R32UI",L.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=L,this.material.uniforms.sceneIndexesTextureSize.value.copy(D),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:b,texture:L,size:D},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,n){const a=this.splatDataTextures.covariances,r=a?a.compressionLevel:void 0,l=this.splatDataTextures.scaleRotations,u=l?l.compressionLevel:void 0,f=this.splatDataTextures.sphericalHarmonics,d=f?f.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,r,u,d,e,n,e)}updateDataTexturesFromBaseData(e,n){const a=this.splatDataTextures.covariances,r=a?a.compressionLevel:void 0,l=this.splatDataTextures.scaleRotations,u=l?l.compressionLevel:void 0,f=this.splatDataTextures.sphericalHarmonics,d=f?f.compressionLevel:0,h=this.splatDataTextures.centerColors,m=h.data,g=h.texture;qn.updateCenterColorsPaddedData(e,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,m);const v=this.renderer?this.renderer.properties.get(g):null;if(!v||!v.__webglTexture?g.needsUpdate=!0:this.updateDataTexture(m,h.texture,h.size,v,Jh,e2,4,e,n),a){const T=a.texture,w=e*Fu,D=n*Fu;if(r===0)for(let L=w;L<=D;L++){const R=this.splatDataTextures.baseData.covariances[L];a.data[L]=R}else qn.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,a.data,e*a.elementsPerTexelAllocated,w,D);const b=this.renderer?this.renderer.properties.get(T):null;!b||!b.__webglTexture?T.needsUpdate=!0:r===0?this.updateDataTexture(a.data,a.texture,a.size,b,a.elementsPerTexelStored,Fu,4,e,n):this.updateDataTexture(a.data,a.texture,a.size,b,a.elementsPerTexelAllocated,a.elementsPerTexelAllocated,2,e,n)}if(l){const T=l.data,w=l.texture,D=6,b=u===0?4:2;qn.updateScaleRotationsPaddedData(e,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,T);const L=this.renderer?this.renderer.properties.get(w):null;!L||!L.__webglTexture?w.needsUpdate=!0:this.updateDataTexture(T,l.texture,l.size,L,Zh,D,b,e,n)}const _=this.splatDataTextures.baseData.sphericalHarmonics;if(_){let T=4;d===1?T=2:d===2&&(T=1);const w=(L,R,P,C,U)=>{const N=this.renderer?this.renderer.properties.get(L):null;!N||!N.__webglTexture?L.needsUpdate=!0:this.updateDataTexture(C,L,R,N,P,U,T,e,n)},D=f.componentCount,b=f.paddedComponentCount;if(f.textureCount===1){const L=f.data;for(let R=e;R<=n;R++){const P=D*R,C=b*R;for(let U=0;U<D;U++)L[C+U]=_[P+U]}w(f.texture,f.size,f.elementsPerTexel,L,b)}else{const L=f.componentCountPerChannel;for(let R=0;R<3;R++){const P=f.data[R];for(let C=e;C<=n;C++){const U=D*C,N=b*C;if(L>=3){for(let k=0;k<3;k++)P[N+k]=_[U+R*3+k];if(L>=8)for(let k=0;k<5;k++)P[N+3+k]=_[U+9+R*5+k]}}w(f.textures[R],f.size,f.elementsPerTexel,P,b)}}}const y=this.splatDataTextures.sceneIndexes,E=y.data;for(let T=this.lastBuildSplatCount;T<=n;T++)E[T]=this.globalSplatIndexToSceneIndexMap[T];const x=y.texture,A=this.renderer?this.renderer.properties.get(x):null;!A||!A.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(E,y.texture,y.size,A,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel>e)&&(e=r.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel<e)&&(e=r.compressionLevel)}return e}static computeTextureUpdateRegion(e,n,a,r,l){const u=l/r,f=e*u,d=Math.floor(f/a),h=d*a*r,m=n*u,g=Math.floor(m/a),v=g*a*r+a*r;return{dataStart:h,dataEnd:v,startRow:d,endRow:g}}updateDataTexture(e,n,a,r,l,u,f,d,h){const m=this.renderer.getContext(),g=qn.computeTextureUpdateRegion(d,h,a.x,l,u),v=g.dataEnd-g.dataStart,_=new e.constructor(e.buffer,g.dataStart*f,v),y=g.endRow-g.startRow+1,E=this.webGLUtils.convert(n.type),x=this.webGLUtils.convert(n.format,n.colorSpace),A=m.getParameter(m.TEXTURE_BINDING_2D);m.bindTexture(m.TEXTURE_2D,r.__webglTexture),m.texSubImage2D(m.TEXTURE_2D,0,0,g.startRow,a.x,y,x,E,_),m.bindTexture(m.TEXTURE_2D,A)}static updatePaddedCompressedCovariancesTextureData(e,n,a,r,l){let u=new DataView(n.buffer),f=a,d=0;for(let h=r;h<=l;h+=2)u.setUint16(f*2,e[h],!0),u.setUint16(f*2+2,e[h+1],!0),f+=2,d++,d>=3&&(f+=2,d=0)}static updateCenterColorsPaddedData(e,n,a,r,l){for(let u=e;u<=n;u++){const f=u*4,d=u*3,h=u*4;l[h]=OR(r,f),l[h+1]=Xh(a[d]),l[h+2]=Xh(a[d+1]),l[h+3]=Xh(a[d+2])}}static updateScaleRotationsPaddedData(e,n,a,r,l){for(let f=e;f<=n;f++){const d=f*3,h=f*4,m=f*6;l[m]=a[d],l[m+1]=a[d+1],l[m+2]=a[d+2],l[m+3]=r[h],l[m+4]=r[h+1],l[m+5]=r[h+2]}}updateVisibleRegion(e){const n=this.getSplatCount(!0),a=new H;if(!e){const l=new H;this.scenes.forEach(u=>{l.add(u.splatBuffer.sceneCenter)}),l.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(l),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const r=e?this.lastBuildSplatCount:0;for(let l=r;l<n;l++){this.getSplatCenter(l,a,!0);const u=a.sub(this.calculatedSceneCenter).length();u>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=u)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>F_&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-F_,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=Hl.Default){const n=s2*this.sceneFadeInRateMultiplier,a=r2*this.sceneFadeInRateMultiplier,r=this.finalBuild?n:a,l=e===Hl.Default?r:a;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*l+this.visibleRegionFadeStartRadius;const f=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,d=f||e===Hl.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=d,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!f}updateRenderIndexes(e,n){const a=this.geometry;a.attributes.splatIndex.set(e),a.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),a.instanceCount=n,a.setDrawRange(0,n)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){const e=new ke;return function(n,a,r,l,u,f){if(this.getSplatCount()>0){if(e.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(a,r),this.material.uniforms.orthographicMode.value=l?1:0,this.material.uniforms.orthoZoom.value=u,this.material.uniforms.inverseFocalAdjustment.value=f,this.dynamicMode)for(let h=0;h<this.scenes.length;h++)this.material.uniforms.transforms.value[h].copy(this.getScene(h).transform);if(this.enableOptionalEffects)for(let h=0;h<this.scenes.length;h++)this.material.uniforms.sceneOpacity.value[h]=dn(this.getScene(h).opacity,0,1),this.material.uniforms.sceneVisibility.value[h]=this.getScene(h).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?qn.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let n=0;for(let a of e)a&&a.splatBuffer&&(n+=a.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(e){let n=0;for(let a of e)n+=a.getSplatCount();return n}getMaxSplatCount(){return qn.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let n=0;for(let a of e)a&&a.splatBuffer&&(n+=a.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(e){let n=0;for(let a of e)n+=a.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;const n=this.renderer.getContext(),a=new Zw(n),r=new Jw(n,a,{});if(a.init(r),this.webGLUtils=new xA(n,a),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:l,sceneIndexes:u}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(l,u)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const a=this.lastRenderer!==this.renderer,r=e!==n;if(!a&&!r)return;a?this.disposeDistancesComputationGPUResources():r&&this.disposeDistancesComputationGPUBufferResources();const l=this.renderer.getContext(),u=(v,_,y)=>{const E=v.createShader(_);if(!E)return console.error("Fatal error: gl could not create a shader object."),null;if(v.shaderSource(E,y),v.compileShader(E),!v.getShaderParameter(E,v.COMPILE_STATUS)){let A="unknown";_===v.VERTEX_SHADER?A="vertex shader":_===v.FRAGMENT_SHADER&&(A="fragement shader");const T=v.getShaderInfoLog(E);return console.error("Failed to compile "+A+" with these errors:"+T),v.deleteShader(E),null}return E};let f;this.integerBasedDistancesComputation?(f=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?f+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${en.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:f+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(f=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?f+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${en.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:f+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const d=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,h=l.getParameter(l.VERTEX_ARRAY_BINDING),m=l.getParameter(l.CURRENT_PROGRAM),g=m?l.getProgramParameter(m,l.DELETE_STATUS):!1;if(a&&(this.distancesTransformFeedback.vao=l.createVertexArray()),l.bindVertexArray(this.distancesTransformFeedback.vao),a){const v=l.createProgram(),_=u(l,l.VERTEX_SHADER,f),y=u(l,l.FRAGMENT_SHADER,d);if(!_||!y)throw new Error("Could not compile shaders for distances computation on GPU.");if(l.attachShader(v,_),l.attachShader(v,y),l.transformFeedbackVaryings(v,["distance"],l.SEPARATE_ATTRIBS),l.linkProgram(v),!l.getProgramParameter(v,l.LINK_STATUS)){const x=l.getProgramInfoLog(v);throw console.error("Fatal error: Failed to link program: "+x),l.deleteProgram(v),l.deleteShader(y),l.deleteShader(_),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=v,this.distancesTransformFeedback.vertexShader=_,this.distancesTransformFeedback.vertexShader=y}if(l.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=l.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=l.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let v=0;v<this.scenes.length;v++)this.distancesTransformFeedback.transformsLocs[v]=l.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${v}]`)}else this.distancesTransformFeedback.modelViewProjLoc=l.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(a||r)&&(this.distancesTransformFeedback.centersBuffer=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),l.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?l.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,l.INT,0,0):l.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,l.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),l.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),l.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,l.UNSIGNED_INT,0,0))),(a||r)&&(this.distancesTransformFeedback.outDistancesBuffer=l.createBuffer()),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),l.bufferData(l.ARRAY_BUFFER,n*4,l.STATIC_READ),a&&(this.distancesTransformFeedback.id=l.createTransformFeedback()),l.bindTransformFeedback(l.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),l.bindBufferBase(l.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),m&&g!==!0&&l.useProgram(m),h&&l.bindVertexArray(h),this.lastRenderer=this.renderer,e=n}})();updateGPUCentersBufferForDistancesComputation(e,n,a){if(!this.renderer)return;const r=this.renderer.getContext(),l=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const u=this.integerBasedDistancesComputation?Uint32Array:Float32Array,f=16,d=a*f;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)r.bufferSubData(r.ARRAY_BUFFER,d,n);else{const h=new u(this.getMaxSplatCount()*f);h.set(n),r.bufferData(r.ARRAY_BUFFER,h,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),l&&r.bindVertexArray(l)}updateGPUTransformIndexesBufferForDistancesComputation(e,n,a){if(!this.renderer||!this.dynamicMode)return;const r=this.renderer.getContext(),l=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const u=a*4;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)r.bufferSubData(r.ARRAY_BUFFER,u,n);else{const f=new Uint32Array(this.getMaxSplatCount()*4);f.set(n),r.bufferData(r.ARRAY_BUFFER,f,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),l&&r.bindVertexArray(l)}getSceneIndexes(e,n){let a;const r=n-e+1;a=new Uint32Array(r);for(let l=e;l<=n;l++)a[l]=this.globalSplatIndexToSceneIndexMap[l];return a}fillTransformsArray=(function(){const e=[];return function(n){e.length!==n.length&&(e.length=n.length);for(let a=0;a<this.scenes.length;a++){const l=this.getScene(a).transform.elements;for(let u=0;u<16;u++)e[a*16+u]=l[u]}n.set(e)}})();computeDistancesOnGPU=(function(){const e=new pt;return function(n,a){if(!this.renderer)return;const r=this.renderer.getContext(),l=r.getParameter(r.VERTEX_ARRAY_BINDING),u=r.getParameter(r.CURRENT_PROGRAM),f=u?r.getProgramParameter(u,r.DELETE_STATUS):!1;if(r.bindVertexArray(this.distancesTransformFeedback.vao),r.useProgram(this.distancesTransformFeedback.program),r.enable(r.RASTERIZER_DISCARD),this.dynamicMode)for(let m=0;m<this.scenes.length;m++)if(e.copy(this.getScene(m).transform),e.premultiply(n),this.integerBasedDistancesComputation){const g=qn.getIntegerMatrixArray(e),v=[g[2],g[6],g[10],g[14]];r.uniform4i(this.distancesTransformFeedback.transformsLocs[m],v[0],v[1],v[2],v[3])}else r.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[m],!1,e.elements);else if(this.integerBasedDistancesComputation){const m=qn.getIntegerMatrixArray(n),g=[m[2],m[6],m[10]];r.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,g[0],g[1],g[2])}else{const m=[n.elements[2],n.elements[6],n.elements[10]];r.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,m[0],m[1],m[2])}r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0)),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),r.beginTransformFeedback(r.POINTS),r.drawArrays(r.POINTS,0,this.getSplatCount()),r.endTransformFeedback(),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,null),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),r.disable(r.RASTERIZER_DISCARD);const d=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);r.flush();const h=new Promise(m=>{const g=()=>{if(this.disposed)m();else switch(r.clientWaitSync(d,0,0)){case r.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(g),this.computeDistancesOnGPUSyncTimeout;case r.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,r.deleteSync(d);const E=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.getBufferSubData(r.ARRAY_BUFFER,0,a),r.bindBuffer(r.ARRAY_BUFFER,null),E&&r.bindVertexArray(E),m()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(g)});return u&&f!==!0&&r.useProgram(u),l&&r.bindVertexArray(l),h}})();getLocalSplatParameters(e,n,a){a==null&&(a=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(e),n.localIndex=this.getSplatLocalIndex(e),n.sceneTransform=a?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,n,a,r,l,u,f,d=0,h=0,m=1,g,v,_=0,y){const E=new H;E.x=void 0,E.y=void 0,this.splatRenderMode===Ya.ThreeD?E.z=void 0:E.z=1;const x=new pt;let A=0,T=this.scenes.length-1;y!=null&&y>=0&&y<=this.scenes.length&&(A=y,T=y);for(let w=A;w<=T;w++){f==null&&(f=!this.dynamicMode);const D=this.getScene(w),b=D.splatBuffer;let L;if(f&&(this.getSceneTransform(w,x),L=x),e&&b.fillSplatCovarianceArray(e,L,g,v,_,d),n||a){if(!n||!a)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');b.fillSplatScaleRotationArray(n,a,L,g,v,_,h,E)}r&&b.fillSplatCenterArray(r,L,g,v,_),l&&b.fillSplatColorArray(l,D.minimumAlpha,g,v,_),u&&b.fillSphericalHarmonicsArray(u,this.minSphericalHarmonicsDegree,L,g,v,_,m),_+=b.getSplatCount()}}getIntegerCenters(e,n,a=!1){const r=n-e+1,l=new Float32Array(r*3);this.fillSplatDataArrays(null,null,null,l,null,null,void 0,void 0,void 0,void 0,e);let u,f=a?4:3;u=new Int32Array(r*f);for(let d=0;d<r;d++){for(let h=0;h<3;h++)u[d*f+h]=Math.round(l[d*3+h]*1e3);a&&(u[d*f+3]=1e3)}return u}getFloatCenters(e,n,a=!1){const r=n-e+1,l=new Float32Array(r*3);if(this.fillSplatDataArrays(null,null,null,l,null,null,void 0,void 0,void 0,void 0,e),!a)return l;let u=new Float32Array(r*4);for(let f=0;f<r;f++){for(let d=0;d<3;d++)u[f*4+d]=l[f*3+d];u[f*4+3]=1}return u}getSplatCenter=(function(){const e={};return function(n,a,r){this.getLocalSplatParameters(n,e,r),e.splatBuffer.getSplatCenter(e.localIndex,a,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){const e={},n=new H;return function(a,r,l,u){this.getLocalSplatParameters(a,e,u),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===Ya.TwoD&&(n.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,r,l,e.sceneTransform,n)}})();getSplatColor=(function(){const e={};return function(n,a){this.getLocalSplatParameters(n,e),e.splatBuffer.getSplatColor(e.localIndex,a)}})();getSceneTransform(e,n){const a=this.getScene(e);a.updateTransform(this.dynamicMode),n.copy(a.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){const n=e.elements,a=[];for(let r=0;r<16;r++)a[r]=Math.round(n[r]*1e3);return a}computeBoundingBox(e=!1,n){let a=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");a=this.scenes[n].splatBuffer.getSplatCount()}const r=new Float32Array(a*3);this.fillSplatDataArrays(null,null,null,r,null,null,e,void 0,void 0,void 0,void 0,n);const l=new H,u=new H;for(let f=0;f<a;f++){const d=f*3,h=r[d],m=r[d+1],g=r[d+2];(f===0||h<l.x)&&(l.x=h),(f===0||m<l.y)&&(l.y=m),(f===0||g<l.z)&&(l.z=g),(f===0||h>u.x)&&(u.x=h),(f===0||m>u.y)&&(u.y=m),(f===0||g>u.z)&&(u.z=g)}return new pa(l,u)}}var o2="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",O_="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",l2="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",c2="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function u2(o){let e,n,a,r,l,u,f,d,h,m,g,v,_,y,E,x,A,T,w,D;function b(L,R,P,C,U,N,k){const X=performance.now();if(!a&&(new Uint32Array(n,f,U.byteLength/D.BytesPerInt).set(U),new Float32Array(n,m,k.byteLength/D.BytesPerFloat).set(k),C)){let Z;r?Z=new Int32Array(n,g,N.byteLength/D.BytesPerInt):Z=new Float32Array(n,g,N.byteLength/D.BytesPerFloat),Z.set(N)}x||(x=new Uint32Array(T)),new Float32Array(n,E,16).set(P),new Uint32Array(n,_,T).set(x),e.exports.sortIndexes(f,y,g,v,_,E,d,h,m,T,L,R,u,C,r,l);const W={sortDone:!0,splatSortCount:L,splatRenderCount:R,sortTime:0};if(!a){const O=new Uint32Array(n,d,R);(!A||A.length<R)&&(A=new Uint32Array(R)),A.set(O),W.sortedIndexes=A}const Q=performance.now();W.sortTime=Q-X,o.postMessage(W)}o.onmessage=L=>{if(L.data.centers)centers=L.data.centers,sceneIndexes=L.data.sceneIndexes,r?new Int32Array(n,y+L.data.range.from*D.BytesPerInt*4,L.data.range.count*4).set(new Int32Array(centers)):new Float32Array(n,y+L.data.range.from*D.BytesPerFloat*4,L.data.range.count*4).set(new Float32Array(centers)),l&&new Uint32Array(n,h+L.data.range.from*4,L.data.range.count).set(new Uint32Array(sceneIndexes)),w=L.data.range.from+L.data.range.count;else if(L.data.sort){const R=Math.min(L.data.sort.splatRenderCount||0,w),P=Math.min(L.data.sort.splatSortCount||0,w),C=L.data.sort.usePrecomputedDistances;let U,N,k;a||(U=L.data.sort.indexesToSort,k=L.data.sort.transforms,C&&(N=L.data.sort.precomputedDistances)),b(P,R,L.data.sort.modelViewProj,C,U,N,k)}else if(L.data.init){D=L.data.init.Constants,u=L.data.init.splatCount,a=L.data.init.useSharedMemory,r=L.data.init.integerBasedSort,l=L.data.init.dynamicMode,T=L.data.init.distanceMapRange,w=0;const R=r?D.BytesPerInt*4:D.BytesPerFloat*4,P=new Uint8Array(L.data.init.sorterWasmBytes),C=16*D.BytesPerFloat,U=u*D.BytesPerInt,N=u*R,k=C,X=r?u*D.BytesPerInt:u*D.BytesPerFloat,W=u*D.BytesPerInt,Q=u*D.BytesPerInt,O=r?T*D.BytesPerInt*2:T*D.BytesPerFloat*2,G=l?u*D.BytesPerInt:0,Z=l?D.MaxScenes*C:0,re=D.MemoryPageSize*32,he=U+N+k+X+W+O+Q+G+Z+re,z=Math.floor(he/D.MemoryPageSize)+1,ie={module:{},env:{memory:new WebAssembly.Memory({initial:z,maximum:z,shared:!0})}};WebAssembly.compile(P).then(pe=>WebAssembly.instantiate(pe,ie)).then(pe=>{e=pe,f=0,y=f+U,E=y+N,g=E+k,v=g+X,_=v+W,d=_+O,h=d+Q,m=h+G,n=ie.env.memory.buffer,a?o.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:n,indexesToSortOffset:f,sortedIndexesBuffer:n,sortedIndexesOffset:d,precomputedDistancesBuffer:n,precomputedDistancesOffset:g,transformsBuffer:n,transformsOffset:m}):o.postMessage({sortSetupPhase1Complete:!0})})}}}function f2(o,e,n,a,r,l=en.DefaultSplatSortDistanceMapPrecision){const u=new Worker(URL.createObjectURL(new Blob(["(",u2.toString(),")(self)"],{type:"application/javascript"})));let f=o2;const d=lm()?TA():null;!n&&!e?(f=O_,d&&d.major<=16&&d.minor<4&&(f=c2)):n?e||d&&d.major<=16&&d.minor<4&&(f=l2):f=O_;const h=atob(f),m=new Uint8Array(h.length);for(let g=0;g<h.length;g++)m[g]=h.charCodeAt(g);return u.postMessage({init:{sorterWasmBytes:m.buffer,splatCount:o,useSharedMemory:e,integerBasedSort:a,dynamicMode:r,distanceMapRange:1<<l,Constants:{BytesPerFloat:en.BytesPerFloat,BytesPerInt:en.BytesPerInt,MemoryPageSize:en.MemoryPageSize,MaxScenes:en.MaxScenes}}}),u}const fo={None:0,VR:1,AR:2};class Ro{static createButton(e,n={}){const a=document.createElement("button");function r(){let h=null;async function m(_){_.addEventListener("end",g),await e.xr.setSession(_),a.textContent="EXIT VR",h=_}function g(){h.removeEventListener("end",g),a.textContent="ENTER VR",h=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="ENTER VR";const v={...n,optionalFeatures:["local-floor","bounded-floor","layers",...n.optionalFeatures||[]]};a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){h===null?navigator.xr.requestSession("immersive-vr",v).then(m):(h.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",v).then(m).catch(_=>{console.warn(_)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",v).then(m).catch(_=>{console.warn(_)})}function l(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function u(){l(),a.textContent="VR NOT SUPPORTED"}function f(h){l(),console.warn("Exception when trying to call xr.isSessionSupported",h),a.textContent="VR NOT ALLOWED"}function d(h){h.style.position="absolute",h.style.bottom="20px",h.style.padding="12px 6px",h.style.border="1px solid #fff",h.style.borderRadius="4px",h.style.background="rgba(0,0,0,0.1)",h.style.color="#fff",h.style.font="normal 13px sans-serif",h.style.textAlign="center",h.style.opacity="0.5",h.style.outline="none",h.style.zIndex="999"}if("xr"in navigator)return a.id="VRButton",a.style.display="none",d(a),navigator.xr.isSessionSupported("immersive-vr").then(function(h){h?r():u(),h&&Ro.xrSessionIsGranted&&a.click()}).catch(f),a;{const h=document.createElement("a");return window.isSecureContext===!1?(h.href=document.location.href.replace(/^http:/,"https:"),h.innerHTML="WEBXR NEEDS HTTPS"):(h.href="https://immersiveweb.dev/",h.innerHTML="WEBXR NOT AVAILABLE"),h.style.left="calc(50% - 90px)",h.style.width="180px",h.style.textDecoration="none",d(h),h}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ro.xrSessionIsGranted=!0})}}}Ro.xrSessionIsGranted=!1;Ro.registerSessionGrantedListener();class d2{static createButton(e,n={}){const a=document.createElement("button");function r(){if(n.domOverlay===void 0){const v=document.createElement("div");v.style.display="none",document.body.appendChild(v);const _=document.createElementNS("http://www.w3.org/2000/svg","svg");_.setAttribute("width",38),_.setAttribute("height",38),_.style.position="absolute",_.style.right="20px",_.style.top="20px",_.addEventListener("click",function(){h.end()}),v.appendChild(_);const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),y.setAttribute("stroke","#fff"),y.setAttribute("stroke-width",2),_.appendChild(y),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:v}}let h=null;async function m(v){v.addEventListener("end",g),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(v),a.textContent="STOP AR",n.domOverlay.root.style.display="",h=v}function g(){h.removeEventListener("end",g),a.textContent="START AR",n.domOverlay.root.style.display="none",h=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START AR",a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){h===null?navigator.xr.requestSession("immersive-ar",n).then(m):(h.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(m).catch(v=>{console.warn(v)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(m).catch(v=>{console.warn(v)})}function l(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function u(){l(),a.textContent="AR NOT SUPPORTED"}function f(h){l(),console.warn("Exception when trying to call xr.isSessionSupported",h),a.textContent="AR NOT ALLOWED"}function d(h){h.style.position="absolute",h.style.bottom="20px",h.style.padding="12px 6px",h.style.border="1px solid #fff",h.style.borderRadius="4px",h.style.background="rgba(0,0,0,0.1)",h.style.color="#fff",h.style.font="normal 13px sans-serif",h.style.textAlign="center",h.style.opacity="0.5",h.style.outline="none",h.style.zIndex="999"}if("xr"in navigator)return a.id="ARButton",a.style.display="none",d(a),navigator.xr.isSessionSupported("immersive-ar").then(function(h){h?r():u()}).catch(f),a;{const h=document.createElement("a");return window.isSecureContext===!1?(h.href=document.location.href.replace(/^http:/,"https:"),h.innerHTML="WEBXR NEEDS HTTPS"):(h.href="https://immersiveweb.dev/",h.innerHTML="WEBXR NOT AVAILABLE"),h.style.left="calc(50% - 90px)",h.style.width="180px",h.style.textDecoration="none",d(h),h}}}const $h={Always:0,Never:2},h2=50,p2=.75,m2=15e5,g2=10,S2=2.5,v2=60;class mo{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new H().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new H().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new H().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||fo.None,this.webXRMode!==fo.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||$h.Always,this.sceneRevealMode=e.sceneRevealMode||Hl.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Ao.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,lm()){const a=TA();a.major<17&&(this.enableSIMDInSort=!1),a.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Ya.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||en.DefaultSplatSortDistanceMapPrecision;const n=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=dn(this.splatSortDistanceMapPrecision,10,n),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new Xw,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new H,this.nextCameraTarget=new H,this.mousePosition=new ke,this.mouseDownPosition=new ke,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new xm(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new Nw(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new zw(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new qn(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new hA,this.sceneHelper=new Nl(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new ke;this.getRenderDimensions(e),this.perspectiveCamera=new wi(h2,e.x/e.y,.1,1e3),this.orthographicCamera=new ef(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new ke;this.getRenderDimensions(e),this.renderer=new yA({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Lt(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===fo.VR?this.rootElement.appendChild(Ro.createButton(this.renderer,e)):this.webXRMode===fo.AR&&this.rootElement.appendChild(d2.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",n=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",n=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===fo.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Bu(this.camera,this.renderer.domElement):this.perspectiveControls=new Bu(this.camera,this.renderer.domElement):(this.perspectiveControls=new Bu(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Bu(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===fo.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){const e=new H,n=new pt,a=new pt;return function(r){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),n.makeRotationAxis(e,Math.PI/128),a.makeRotationAxis(e,-Math.PI/128),r.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(n);break;case"ArrowRight":this.camera.up.transformDirection(a);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=co()}onMouseUp=(function(){const e=new ke;return function(n){e.copy(this.mousePosition).sub(this.mouseDownPosition),co()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(n)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){const e=new ke,n=new H,a=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),a.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,a),a.length>0)){const l=a[0].origin;n.copy(l).sub(this.camera.position),n.length()>p2&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(l),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=co())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const n=this.camera,a=e?this.orthographicCamera:this.perspectiveCamera;if(a.position.copy(n.position),a.up.copy(n.up),a.rotation.copy(n.rotation),a.quaternion.copy(n.quaternion),a.matrix.copy(n.matrix),this.camera=a,this.controls){const r=f=>{f.saveState(),f.reset()},l=this.controls,u=e?this.orthographicControls:this.perspectiveControls;r(u),r(l),u.target.copy(l.target),e?mo.setCameraZoomFromPosition(a,n,l):mo.setCameraPositionFromZoom(a,n,u),this.controls=u,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){const e=new H;return function(n,a,r){const l=1/(a.zoom*.001);e.copy(r.target).sub(n.position).normalize().multiplyScalar(l).negate(),n.position.copy(r.target).add(e)}})();static setCameraZoomFromPosition=(function(){const e=new H;return function(n,a,r){const l=e.copy(r.target).sub(a.position).length();n.zoom=1/(l*.001)}})();updateSplatMesh=(function(){const e=new ke;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const a=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,r=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,l=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,u=this.focalAdjustment*l,f=1/u;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,a*u,r*u,this.camera.isOrthographicCamera,this.camera.zoom||1,f)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const a=this.renderer.xr.getCamera().projectionMatrix.elements[0],r=this.camera.projectionMatrix.elements[0];e.x*=r/a}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,n={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");n.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),n.progressiveLoad=!1);const a=n.format!==void 0&&n.format!==null?n.format:R_(e),r=mo.isProgressivelyLoadable(a)&&n.progressiveLoad,l=n.showLoadingUI!==void 0&&n.showLoadingUI!==null?n.showLoadingUI:!0;let u=null;l&&(this.loadingSpinner.removeAllTasks(),u=this.loadingSpinner.addTask("Downloading..."));const f=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},d=(E,x,A)=>{if(l)if(A===An.Downloading)if(E==100)this.loadingSpinner.setMessageForTask(u,"Download complete!");else if(r)this.loadingSpinner.setMessageForTask(u,"Downloading splats...");else{const T=x?`: ${x}`:"...";this.loadingSpinner.setMessageForTask(u,`Downloading${T}`)}else A===An.Processing&&this.loadingSpinner.setMessageForTask(u,"Processing splats...")};let h=!1,m=0;const g=(E,x)=>{l&&((E&&r||x&&!r)&&(this.loadingSpinner.removeTask(u),!x&&!h&&this.loadingProgressBar.show()),r&&(x?(h=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(m)))},v=(E,x,A)=>{m=E,d(E,x,A),n.onProgress&&n.onProgress(E,x,A)},_=(E,x,A)=>{!r&&n.onProgress&&n.onProgress(0,"0%",An.Processing);const T={rotation:n.rotation||n.orientation,position:n.position,scale:n.scale,splatAlphaRemovalThreshold:n.splatAlphaRemovalThreshold};return this.addSplatBuffers([E],[T],A,x&&l,l,r,r).then(()=>{!r&&n.onProgress&&n.onProgress(100,"100%",An.Processing),g(x,A)})};return(r?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,a,n.splatAlphaRemovalThreshold,_.bind(this),v,f.bind(this),n.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,n,a,r,l,u,f){const d=this.downloadSplatSceneToSplatBuffer(e,a,l,!1,void 0,n,f),h=Wh(d.abortHandler);return d.then(m=>(this.removeSplatSceneDownloadPromise(d),r(m,!0,!0).then(()=>{h.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(m=>{u&&u(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d),h.reject(this.updateError(m,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(h.promise),h.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,n,a,r,l,u,f){let d=0,h=!1;const m=[],g=()=>{if(m.length>0&&!h&&!this.isDisposingOrDisposed()){h=!0;const x=m.shift();r(x.splatBuffer,x.firstBuild,x.finalBuild).then(()=>{h=!1,x.firstBuild?y.resolve():x.finalBuild&&(E.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),m.length>0&&Ii(()=>g())})}},v=(x,A)=>{this.isDisposingOrDisposed()||(A||m.length===0||x.getSplatCount()>m[0].splatBuffer.getSplatCount())&&(m.push({splatBuffer:x,firstBuild:d===0,finalBuild:A}),d++,g())},_=this.downloadSplatSceneToSplatBuffer(e,a,l,!0,v,n,f),y=Wh(_.abortHandler),E=Wh();return this.addSplatSceneDownloadPromise(_),this.setSplatSceneDownloadAndBuildPromise(E.promise),_.then(()=>{this.removeSplatSceneDownloadPromise(_)}).catch(x=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(_);const A=this.updateError(x,"Viewer::addSplatScene -> Could not load one or more scenes");y.reject(A),u&&u(A)}),y.promise}addSplatScenes(e,n=!0,a=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const r=e.length,l=[];let u;n&&(this.loadingSpinner.removeAllTasks(),u=this.loadingSpinner.addTask("Downloading..."));const f=(g,v,_,y)=>{l[g]=v;let E=0;for(let x=0;x<r;x++)E+=l[x]||0;E=E/r,_=`${E.toFixed(2)}%`,n&&y===An.Downloading&&this.loadingSpinner.setMessageForTask(u,E==100?"Download complete!":`Downloading: ${_}`),a&&a(E,_,y)},d=[],h=[];for(let g=0;g<e.length;g++){const v=e[g],_=v.format!==void 0&&v.format!==null?v.format:R_(v.path),y=this.downloadSplatSceneToSplatBuffer(v.path,v.splatAlphaRemovalThreshold,f.bind(this,g),!1,void 0,_,v.headers);d.push(y),h.push(y.promise)}const m=new Ls((g,v)=>{Promise.all(h).then(_=>{n&&this.loadingSpinner.removeTask(u),a&&a(0,"0%",An.Processing),this.addSplatBuffers(_,e,!0,n,n,!1,!1).then(()=>{a&&a(100,"100%",An.Processing),this.clearSplatSceneDownloadAndBuildPromise(),g()})}).catch(_=>{n&&this.loadingSpinner.removeTask(u),this.clearSplatSceneDownloadAndBuildPromise(),v(this.updateError(_,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(m)})},g=>{for(let v of d)v.abort(g)});return this.addSplatSceneDownloadPromise(m),this.setSplatSceneDownloadAndBuildPromise(m),m}downloadSplatSceneToSplatBuffer(e,n=1,a=void 0,r=!1,l=void 0,u,f){try{if(u===$n.Splat||u===$n.KSplat||u===$n.Ply){const d=r?!1:this.optimizeSplatData;if(u===$n.Splat)return Am.loadFromURL(e,a,r,l,n,this.inMemoryCompressionLevel,d,f);if(u===$n.KSplat)return Ol.loadFromURL(e,a,r,l,f);if(u===$n.Ply)return vm.loadFromURL(e,a,r,l,n,this.inMemoryCompressionLevel,d,this.sphericalHarmonicsDegree,f)}else if(u===$n.Spz)return _m.loadFromURL(e,a,n,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,f)}catch(d){throw this.updateError(d,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===$n.Splat||e===$n.KSplat||e===$n.Ply}addSplatBuffers=(function(){return function(e,n=[],a=!0,r=!0,l=!0,u=!1,f=!1,d=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let h=null;const m=()=>{h!==null&&(this.loadingSpinner.removeTask(h),h=null)};return this.splatRenderReady=!1,new Promise(g=>{r&&(h=this.loadingSpinner.addTask("Processing splats...")),Ii(()=>{if(this.isDisposingOrDisposed())g();else{const v=this.addSplatBuffersToMesh(e,n,a,l,u,d),_=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==_&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:v.centers.buffer,sceneIndexes:v.sceneIndexes.buffer,range:{from:v.from,to:v.to,count:v.count}}),(!this.sortWorker&&_>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(E=>{!this.sortWorker||!E?(this.splatRenderReady=!0,m(),g()):(f?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{m(),g()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(n,a,r=!0,l=!1,u=!1,f=!0){if(this.isDisposingOrDisposed())return;let d=[],h=[];u||(d=this.splatMesh.scenes.map(_=>_.splatBuffer)||[],h=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(_=>_):[]),d.push(...n),h.push(...a),this.renderer&&this.splatMesh.setRenderer(this.renderer);const m=_=>{if(this.isDisposingOrDisposed())return;const y=this.splatMesh.getSplatCount();l&&y>=m2&&!_&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},g=_=>{this.isDisposingOrDisposed()||_&&e&&(this.loadingSpinner.removeTask(e),e=null)},v=this.splatMesh.build(d,h,!0,r,m,g,f);return r&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),v}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(n=>{const a=this.integerBasedSort?Int32Array:Float32Array,r=e.getSplatCount(),l=e.getMaxSplatCount();this.sortWorker=f2(l,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=u=>{if(u.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,u.data.splatRenderCount);else{const f=new Uint32Array(u.data.sortedIndexes.buffer,0,u.data.splatRenderCount);this.splatMesh.updateRenderIndexes(f,u.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=u.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(f=>{f()}),this.runAfterNextSort.length=0)}else if(u.data.sortCanceled)this.sortRunning=!1;else if(u.data.sortSetupPhase1Complete){this.logLevel>=Ao.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(u.data.sortedIndexesBuffer,u.data.sortedIndexesOffset,l),this.sortWorkerIndexesToSort=new Uint32Array(u.data.indexesToSortBuffer,u.data.indexesToSortOffset,l),this.sortWorkerPrecomputedDistances=new a(u.data.precomputedDistancesBuffer,u.data.precomputedDistancesOffset,l),this.sortWorkerTransforms=new Float32Array(u.data.transformsBuffer,u.data.transformsOffset,en.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(l),this.sortWorkerPrecomputedDistances=new a(l),this.sortWorkerTransforms=new Float32Array(en.MaxScenes*16));for(let f=0;f<r;f++)this.sortWorkerIndexesToSort[f]=f;if(this.sortWorker.maxSplatCount=l,this.logLevel>=Ao.Info){console.log("Sorting web worker ready.");const f=this.splatMesh.getSplatDataTextures(),d=f.covariances.size,h=f.centerColors.size;console.log("Covariances texture size: "+d.x+" x "+d.y),console.log("Centers/colors texture size: "+h.x+" x "+h.y)}n()}}})}updateError(e,n){return e instanceof MA?e:e instanceof Yu?new Error("File type or server does not support progressive loading."):n?new Error(n):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,n=!0){return this.removeSplatScenes([e],n)}removeSplatScenes(e,n=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let a;return this.splatSceneRemovalPromise=new Promise((r,l)=>{let u;n&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),u=this.loadingSpinner.addTask("Removing splat scene..."));const f=()=>{n&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(u))},d=m=>{f(),this.splatSceneRemovalPromise=null,m?l(m):r()},h=()=>this.isDisposingOrDisposed()?(d(),!0):!1;a=this.sortPromise||Promise.resolve(),a.then(()=>{if(h())return;const m=[],g=[],v=[];for(let _=0;_<this.splatMesh.scenes.length;_++){let y=!1;for(let E of e)if(E===_){y=!0;break}if(!y){const E=this.splatMesh.scenes[_];m.push(E.splatBuffer),g.push(this.splatMesh.sceneOptions[_]),v.push({position:E.position.clone(),quaternion:E.quaternion.clone(),scale:E.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Hl.Instant,this.createSplatMesh(),this.addSplatBuffers(m,g,!0,!1,!0).then(()=>{h()||(f(),this.splatMesh.scenes.forEach((_,y)=>{_.position.copy(v[y].position),_.quaternion.copy(v[y].quaternion),_.scale.copy(v[y].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(h()){this.splatRenderReady=!0;return}a=this.sortPromise||Promise.resolve(),a.then(()=>{this.splatRenderReady=!0,d()})}))}).catch(_=>{d(_)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],n=[];for(let a in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(a)){const r=this.splatSceneDownloadPromises[a];n.push(r),e.push(r.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),n.forEach(a=>{a.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0;const n=new H,a=new sn,r=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let l=!1,u=!1;if(this.camera){const f=this.camera.position,d=this.camera.quaternion;u=Math.abs(f.x-n.x)>r||Math.abs(f.y-n.y)>r||Math.abs(f.z-n.z)>r||Math.abs(d.x-a.x)>r||Math.abs(d.y-a.y)>r||Math.abs(d.z-a.z)>r||Math.abs(d.w-a.w)>r}return l=this.renderMode!==$h.Never&&(e===0||this.splatMesh.visibleRegionChanging||u||this.renderMode===$h.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(n.copy(this.camera.position),a.copy(this.camera.quaternion)),e++,l}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=a=>{for(let r of a.children)if(r.visible)return!0;return!1},n=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=n}})();update(e,n){this.dropInMode&&this.updateForDropInMode(e,n),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&mo.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,n){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=n,this.controls&&(this.controls.object=n),this.init()}updateFPS=(function(){let e=co(),n=0;return function(){if(this.consecutiveRenderFrames>v2){const a=co();a-e>=1?(this.currentFPS=n,n=0,e=a):n++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){const e=new ke,n=new ke;let a;return function(){this.usingExternalCamera||(this.renderer.getSize(n),(a===void 0||a!==this.camera.isOrthographicCamera||n.x!==e.x||n.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-n.x/2,this.camera.right=n.x/2,this.camera.top=n.y/2,this.camera.bottom=-n.y/2):this.camera.aspect=n.x/n.y,this.camera.updateProjectionMatrix(),e.copy(n),a=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){const n=co();e||(e=n);const a=n-e;this.updateCameraTransition(n),this.updateFocusMarker(a),e=n}})();updateCameraTransition=(function(){let e=new H,n=new H,a=new H;return function(r){if(this.transitioningCameraTarget){n.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),a.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const l=Math.acos(n.dot(a)),f=(l/(Math.PI/3)*.65+.3)/l*(r-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,f),this.camera.lookAt(e),this.controls.target.copy(e),f>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){const e=new ke;let n=!1;return function(a){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const r=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let l=Math.min(r+g2*a,1);this.sceneHelper.setFocusMarkerOpacity(l),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),n=!0,this.forceRenderNextFrame()}else{let r;if(n?r=1:r=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),r>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let l=Math.max(r-S2*a,0);this.sceneHelper.setFocusMarkerOpacity(l),l===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}r>0&&this.forceRenderNextFrame(),n=!1}}})();updateMeshCursor=(function(){const e=[],n=new ke;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(n),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,n),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){const e=new ke;return function(){if(!this.showInfo)return;const n=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const a=this.controls?this.controls.target:null,r=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,l=n>0?this.splatRenderCount/n*100:0;this.infoPanel.update(e,this.camera.position,a,this.camera.up,this.camera.isOrthographicCamera,r,this.currentFPS||"N/A",n,this.splatRenderCount,l,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){const e=new pt,n=[],a=new H(0,0,-1),r=new H(0,0,-1),l=new H,u=new H,f=[],d=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(h=!1,m=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let g=0,v=0,_=!1,y=!1;if(r.set(0,0,-1).applyQuaternion(this.camera.quaternion),g=r.dot(a),v=u.copy(this.camera.position).sub(l).length(),!h&&!this.splatMesh.dynamicMode&&f.length===0&&(g<=.99&&(_=!0),v>=1&&(y=!0),!_&&!y))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:E,shouldSortAll:x}=this.gatherSceneNodesForSort();x=x||m,this.splatRenderCount=E,e.copy(this.camera.matrixWorld).invert();const A=this.perspectiveCamera||this.camera;e.premultiply(A.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let T=Promise.resolve(!0);return this.gpuAcceleratedSort&&(f.length<=1||f.length%2===0)&&(T=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),T.then(()=>{if(f.length===0)if(this.splatMesh.dynamicMode||x)f.push(this.splatRenderCount);else{for(let b of d)if(g<b.angleThreshold){for(let L of b.sortFractions)f.push(Math.floor(this.splatRenderCount*L));break}f.push(this.splatRenderCount)}let w=Math.min(f.shift(),this.splatRenderCount);this.splatSortCount=w,n[0]=this.camera.position.x,n[1]=this.camera.position.y,n[2]=this.camera.position.z;const D={modelViewProj:e.elements,cameraPosition:n,splatRenderCount:this.splatRenderCount,splatSortCount:w,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(D.indexesToSort=this.sortWorkerIndexesToSort,D.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(D.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(b=>{this.sortPromiseResolver=b}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(b=>{this.sortWorker.postMessage(b)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:D}),f.length===0&&(l.copy(this.camera.position),a.copy(r)),!0}),T}})();gatherSceneNodesForSort=(function(){const e=[];let n=null;const a=new H,r=new H,l=new H,u=new pt,f=new pt,d=new pt,h=new H,m=new H(0,0,-1),g=new H,v=_=>g.copy(_.max).sub(_.min).length();return function(_=!1){this.getRenderDimensions(h);const y=h.y/2/Math.tan(this.camera.fov/2*Ju.DEG2RAD),E=Math.atan(h.x/2/y),x=Math.atan(h.y/2/y),A=Math.cos(E),T=Math.cos(x),w=this.splatMesh.getSplatTree();if(w){f.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||f.multiply(this.splatMesh.matrixWorld);let D=0,b=0;for(let R=0;R<w.subTrees.length;R++){const P=w.subTrees[R];u.copy(f),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(R,d),u.multiply(d));const C=P.nodesWithIndexes.length;for(let U=0;U<C;U++){const N=P.nodesWithIndexes[U];if(!N.data||!N.data.indexes||N.data.indexes.length===0)continue;l.copy(N.center).applyMatrix4(u);const k=l.length();l.normalize(),a.copy(l).setX(0).normalize(),r.copy(l).setY(0).normalize();const X=m.dot(r),W=m.dot(a),Q=v(N),O=W<T-.6,G=X<A-.6;!_&&(G||O)&&k>Q||(b+=N.data.indexes.length,e[D]=N,N.data.distanceToNode=k,D++)}}e.length=D,e.sort((R,P)=>R.data.distanceToNode<P.data.distanceToNode?-1:1);let L=b*en.BytesPerInt;for(let R=0;R<D;R++){const P=e[R],C=P.data.indexes.length,U=C*en.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,L-U,C).set(P.data.indexes),L-=U}return{splatRenderCount:b,shouldSortAll:!1}}else{const D=this.splatMesh.getSplatCount();if(!n||n.length!==D){n=new Uint32Array(D);for(let b=0;b<D;b++)n[b]=b}return this.sortWorkerIndexesToSort.set(n),{splatRenderCount:D,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}}function _2(o,{setFps:e,setSplatCount:n}){const a=yt.useRef(null),r=yt.useRef(null),l=yt.useRef(null),u=yt.useRef(null),f=yt.useRef(null),d=yt.useRef(null),h=yt.useRef(3),m=yt.useRef({forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1});return yt.useEffect(()=>{if(!o.current)return;f.current&&(f.current.dispose(),o.current.innerHTML="");const g=new hA;g.background=new Lt("#001524"),d.current=g;const v=new wi(65,window.innerWidth/window.innerHeight,.01,1e4);v.position.set(0,1,1),u.current=v;const _=new yA({antialias:!0,preserveDrawingBuffer:!0});_.setSize(window.innerWidth,window.innerHeight),_.setPixelRatio(window.devicePixelRatio),o.current.appendChild(_.domElement),f.current=_;const y=new MR(v,_.domElement);y.enableDamping=!0,l.current=y;const E=new mo({selfDrivenMode:!1,useBuiltInControls:!1,renderer:_,camera:v,threeScene:g,showControlPlane:!1,gpuAcceleratedSort:!1});r.current=E,window.viewer=E;let x=performance.now(),A=0,T=performance.now();const w=()=>{a.current=requestAnimationFrame(w);const b=performance.now();A++,b-x>=1e3&&(e(A),A=0,x=b,r.current&&r.current.getSplatMesh()&&n(r.current.getSplatMesh().getSplatCount()));const L=(b-T)/1e3;if(T=b,document.pointerLockElement===_.domElement&&u.current){const R=u.current,P=h.current*L,C=m.current,U=new H;R.getWorldDirection(U),U.y=0,U.normalize();const N=new H;N.crossVectors(U,new H(0,1,0)).normalize();const k=new H;C.forward&&k.add(U.clone().multiplyScalar(P)),C.backward&&k.add(U.clone().multiplyScalar(-P)),C.right&&k.add(N.clone().multiplyScalar(P)),C.left&&k.add(N.clone().multiplyScalar(-P)),C.up&&(k.y+=P),C.down&&(k.y-=P),R.position.add(k)}l.current&&document.pointerLockElement!==_.domElement&&l.current.update(),r.current&&(r.current.update(),r.current.render())};w();const D=()=>{const b=window.innerWidth,L=window.innerHeight;u.current.aspect=b/L,u.current.updateProjectionMatrix(),f.current.setSize(b,L),r.current.updateView()};return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),a.current&&cancelAnimationFrame(a.current),_.dispose()}},[o,e,n]),{requestRef:a,viewerRef:r,controlsRef:l,cameraRef:u,rendererRef:f,sceneRef:d,walkSpeedRef:h,keysPressed:m}}const A2=-Math.PI/2+.1,x2=Math.PI/2-.1;function y2({cameraRef:o,controlsRef:e,rendererRef:n,keysPressed:a}){const[r,l]=yt.useState("orbit"),[u,f]=yt.useState(!1),d=yt.useRef(new Aa(0,0,0,"YXZ")),h=yt.useRef(.002),m=yt.useCallback(()=>{a.current={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1}},[a]);yt.useEffect(()=>{const v=()=>{const _=document.pointerLockElement===n.current?.domElement;if(f(_),!_&&r==="walk"){if(l("orbit"),e.current){e.current.enabled=!0;const y=o.current;if(y){const E=new H;y.getWorldDirection(E),e.current.target.copy(y.position).add(E.multiplyScalar(5)),e.current.update()}}m()}};return document.addEventListener("pointerlockchange",v),()=>document.removeEventListener("pointerlockchange",v)},[r,o,e,n,m]),yt.useEffect(()=>{const v=_=>{if(!u||!o.current)return;const y=o.current,E=_.movementX||0,x=_.movementY||0;d.current.setFromQuaternion(y.quaternion),d.current.y-=E*h.current,d.current.x-=x*h.current,d.current.x=Math.max(A2,Math.min(x2,d.current.x)),y.quaternion.setFromEuler(d.current)};return document.addEventListener("mousemove",v),()=>document.removeEventListener("mousemove",v)},[u,o]),yt.useEffect(()=>{const v=y=>{if(u)switch(y.code){case"KeyW":a.current.forward=!0;break;case"KeyS":a.current.backward=!0;break;case"KeyA":a.current.left=!0;break;case"KeyD":a.current.right=!0;break;case"KeyE":a.current.up=!0;break;case"KeyQ":a.current.down=!0;break}},_=y=>{switch(y.code){case"KeyW":a.current.forward=!1;break;case"KeyS":a.current.backward=!1;break;case"KeyA":a.current.left=!1;break;case"KeyD":a.current.right=!1;break;case"KeyE":a.current.up=!1;break;case"KeyQ":a.current.down=!1;break}};return document.addEventListener("keydown",v),document.addEventListener("keyup",_),()=>{document.removeEventListener("keydown",v),document.removeEventListener("keyup",_)}},[u,a]),yt.useEffect(()=>{const v=E=>{u&&(E.button===0?a.current.up=!0:E.button===2&&(a.current.down=!0))},_=E=>{E.button===0?a.current.up=!1:E.button===2&&(a.current.down=!1)},y=E=>{u&&E.preventDefault()};return document.addEventListener("mousedown",v),document.addEventListener("mouseup",_),document.addEventListener("contextmenu",y),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("mouseup",_),document.removeEventListener("contextmenu",y)}},[u,a]);const g=yt.useCallback(()=>{if(!n.current||!o.current||!e.current)return;if(!(document.pointerLockElement===n.current.domElement))l("walk"),e.current.enabled=!1,d.current.setFromQuaternion(o.current.quaternion),n.current.domElement.requestPointerLock().catch(_=>{console.warn("Pointer lock request failed:",_),l("orbit"),e.current.enabled=!0});else{l("orbit"),document.exitPointerLock(),e.current.enabled=!0;const _=o.current,y=new H;_.getWorldDirection(y),e.current.target.copy(_.position).add(y.multiplyScalar(5)),e.current.update(),m()}},[o,e,n,m]);return{cameraMode:r,isPointerLocked:u,toggleCameraMode:g}}function E2({viewerRef:o,sceneRef:e,onLoadComplete:n}){const[a,r]=yt.useState(!1),[l,u]=yt.useState(0),[f,d]=yt.useState(!1),[h,m]=yt.useState(!1),g=yt.useCallback(async x=>{const A=URL.createObjectURL(x);r(!0);try{const T=o.current.getSceneCount();for(let b=T-1;b>=0;b--)await o.current.removeSplatScene(b);const w=x.name.toLowerCase().endsWith(".ply")?$n.Ply:$n.KSplat;await o.current.addSplatScene(A,{format:w,showLoadingUI:!1,progressiveLoad:!1,onProgress:b=>u(b)});const D=o.current.getSplatMesh();D&&e.current&&e.current.add(D),d(!0),setTimeout(()=>{n&&n()},200)}catch(T){console.error("Loader Error:",T)}finally{r(!1)}},[o,e,n]),v=yt.useCallback(x=>{const A=x.target.files[0];A&&g(A)},[g]),_=yt.useCallback(x=>{x.preventDefault(),m(!0)},[]),y=yt.useCallback(x=>{x.preventDefault(),m(!1)},[]),E=yt.useCallback(x=>{x.preventDefault(),m(!1);const A=x.dataTransfer.files[0];A&&A.name.toLowerCase().endsWith(".ply")?g(A):alert("Please drop a valid .ply file.")},[g]);return{loading:a,progress:l,hasScene:f,isDragging:h,loadFile:g,handleFileChange:v,onDragOver:_,onDragLeave:y,onDrop:E}}function M2({fps:o,splatCount:e}){return et.jsxs("div",{className:"absolute top-4 left-4 z-10 p-4 bg-slate-900/80 border border-slate-700/50 rounded-lg shadow-xl min-w-[200px]",children:[et.jsx("h2",{className:"text-xs uppercase tracking-wider text-slate-400 mb-2 border-b border-slate-700 pb-1",children:"Renderer Stats"}),et.jsxs("div",{className:"flex justify-between items-center mb-1",children:[et.jsx("span",{className:"text-sm text-slate-300",children:"FPS"}),et.jsx("span",{className:"text-sm font-bold text-emerald-400",children:o})]}),et.jsxs("div",{className:"flex justify-between items-center",children:[et.jsx("span",{className:"text-sm text-slate-300",children:"Splats"}),et.jsx("span",{className:"text-sm font-bold text-cyan-400",children:e.toLocaleString()})]})]})}function T2({isLoading:o,isExporting:e,progress:n,exportProgress:a}){if(!o&&!e)return null;const r=e?a:n,l=e?"Rendering MP4...":"Loading Scene...";return et.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60",children:[et.jsx("div",{className:"text-2xl font-bold mb-4 text-cyan-400 animate-pulse",children:l}),et.jsx("div",{className:"w-64 h-2 bg-gray-700 rounded-full overflow-hidden",children:et.jsx("div",{className:"h-full bg-cyan-500 transition-all duration-200 ease-out",style:{width:`${r}%`}})}),et.jsxs("div",{className:"mt-2 text-sm text-cyan-200",children:[Math.round(r),"%"]})]})}function C2({onSelectFile:o}){return et.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#001524]/80",children:et.jsxs("div",{className:"text-center p-8 border border-white/10 rounded-2xl bg-white/5 shadow-2xl max-w-md",children:[et.jsx("h1",{className:"text-3xl font-bold mb-2 text-cyan-400",children:"Gaussian Viewer"}),et.jsxs("p",{className:"text-slate-400 mb-8",children:["Drag & Drop a ",et.jsx("strong",{children:".ply"})," file here",et.jsx("br",{}),"or click below to browse."]}),et.jsx("button",{onClick:o,className:"px-8 py-3 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] active:scale-95",children:"Select .PLY File"})]})})}function b2({isVisible:o}){return o?et.jsxs("div",{className:"absolute top-4 right-4 z-10 p-4 bg-orange-900/80 border border-orange-500/50 rounded-lg shadow-xl backdrop-blur-sm",children:[et.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[et.jsx("div",{className:"w-2 h-2 bg-orange-400 rounded-full animate-pulse"}),et.jsx("span",{className:"text-sm font-bold text-orange-300",children:"WALK MODE"})]}),et.jsxs("div",{className:"text-xs text-orange-200/80 space-y-1",children:[et.jsxs("div",{children:[et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100",children:"W"}),et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1",children:"S"})," ","Forward / Back"]}),et.jsxs("div",{children:[et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100",children:"A"}),et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1",children:"D"})," ","Strafe L / R"]}),et.jsxs("div",{children:[et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100",children:"Q"}),et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1",children:"E"})," ","Down / Up"]}),et.jsxs("div",{children:[et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100",children:"LMB"})," ","Up"," ",et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1",children:"RMB"})," ","Down"]}),et.jsxs("div",{className:"pt-1 border-t border-orange-600/50 mt-1",children:[et.jsx("kbd",{className:"px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100",children:"ESC"})," ","Exit Walk Mode"]})]})]}):null}function R2({isDragging:o}){return o?et.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-cyan-500/20 border-4 border-cyan-400 border-dashed m-4 rounded-xl pointer-events-none",children:et.jsx("div",{className:"text-4xl font-bold text-cyan-200 drop-shadow-lg",children:"Drop .PLY File Here"})}):null}function w2({hasScene:o,cameraMode:e,onResetView:n,onFrameScene:a,onToggleCameraMode:r,onLoadFile:l,onExport:u}){return et.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4 p-2 bg-slate-900/80 rounded-full border border-slate-700/50 shadow-2xl pointer-events-auto",children:[et.jsx("button",{onClick:n,disabled:!o,className:"px-6 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-200 rounded-full transition-all hover:shadow-lg border border-slate-600 hover:border-cyan-500/50 active:scale-95",children:"Reset View"}),et.jsx("button",{onClick:a,disabled:!o,className:"px-6 py-2 text-sm font-medium bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95",children:"Frame Scene"}),et.jsx("button",{onClick:r,disabled:!o,className:`px-6 py-2 text-sm font-medium rounded-full transition-all active:scale-95 flex items-center gap-2 ${e==="walk"?"bg-orange-600 hover:bg-orange-500 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]":"bg-violet-600 hover:bg-violet-500 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"} disabled:opacity-50 disabled:cursor-not-allowed`,children:et.jsx("span",{children:e==="orbit"?"🚶 Walk Mode":"🌍 Orbit Mode"})}),et.jsx("div",{className:"w-px h-8 bg-slate-700 mx-2 self-center"}),et.jsx("button",{onClick:l,className:"px-6 py-2 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95",children:"Load .PLY"}),et.jsx("button",{onClick:u,disabled:!o,className:"px-6 py-2 text-sm font-medium bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] active:scale-95 flex items-center gap-2",children:et.jsx("span",{children:"Export MP4"})})]})}function D2(o,e,n){if(!o||!e||!n)return;const a=o.center?.clone()??new H,r=o.radius??5,l=Ju.degToRad(e.fov),u=r/Math.tan(l/2)*1.8,f=new H;e.getWorldDirection(f),e.position.copy(a).sub(f.multiplyScalar(u)),e.near=Math.max(.01,u/100),e.far=u*100,e.updateProjectionMatrix(),n.target.copy(a),n.update()}function N_(o,e){!o||!e||(o.position.set(0,1,1),o.lookAt(0,0,0),o.updateProjectionMatrix(),e.target.set(0,1,0),e.update())}async function I2({cameraRef:o,controlsRef:e,rendererRef:n,viewerRef:a,requestRef:r,setExportProgress:l,setIsExporting:u}){if(!(!n.current||!a.current||!window.confirm("Start MP4 export? This will capture a 360 orbit."))){u(!0),l(0);try{if(!(await fetch("http://localhost:5000/start-export",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fps:30,filename:`render_${Date.now()}.mp4`})})).ok)throw new Error("Failed to start export server session");const h=150,m=o.current.position.clone(),g=Math.sqrt(m.x**2+m.z**2),v=m.y;r.current&&cancelAnimationFrame(r.current);for(let _=0;_<h;_++){const y=_/h*Math.PI*2,E=Math.sin(y)*g,x=Math.cos(y)*g;o.current.position.set(E,v,x),o.current.lookAt(0,0,0),o.current.updateMatrixWorld(),a.current.update(),a.current.render();const A=n.current.domElement.toDataURL("image/jpeg",.9);await fetch("http://localhost:5000/export-frame",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:A})}),l((_+1)/h*100),await new Promise(T=>setTimeout(T,10))}await fetch("http://localhost:5000/finalize-video",{method:"POST"}),alert("Export Complete!"),o.current.position.copy(m),e.current.update()}catch(d){console.error("Export failed:",d),alert("Export failed: "+d.message),window.location.reload()}finally{u(!1);const d=()=>{r.current=requestAnimationFrame(d),e.current&&e.current.update(),a.current&&(a.current.update(),a.current.render())};d()}}}function U2(){const o=yt.useRef(null),e=yt.useRef(null),[n,a]=yt.useState(0),[r,l]=yt.useState(0),[u,f]=yt.useState(!1),[d,h]=yt.useState(0),{requestRef:m,viewerRef:g,controlsRef:v,cameraRef:_,rendererRef:y,sceneRef:E,keysPressed:x}=_2(o,{setFps:a,setSplatCount:l}),{loading:A,progress:T,hasScene:w,isDragging:D,handleFileChange:b,onDragOver:L,onDragLeave:R,onDrop:P}=E2({viewerRef:g,sceneRef:E,onLoadComplete:()=>N_(_.current,v.current)}),{cameraMode:C,isPointerLocked:U,toggleCameraMode:N}=y2({cameraRef:_,controlsRef:v,rendererRef:y,keysPressed:x}),k=yt.useCallback(()=>{N_(_.current,v.current)},[_,v]),X=yt.useCallback(()=>{g.current?.getSplatMesh()&&D2(g.current.getSplatMesh(),_.current,v.current)},[g,_,v]),W=yt.useCallback(async()=>{u||!w||await I2({cameraRef:_,controlsRef:v,rendererRef:y,viewerRef:g,requestRef:m,setExportProgress:h,setIsExporting:f})},[u,w,_,v,y,g,m]),Q=yt.useCallback(()=>{e.current?.click()},[]);return et.jsxs("div",{className:"relative w-screen h-screen bg-[#001524] overflow-hidden font-mono text-white",onDragOver:L,onDragLeave:R,onDrop:P,children:[et.jsx("div",{ref:o,className:"absolute inset-0 z-0"}),et.jsx("input",{type:"file",ref:e,onChange:b,accept:".ply",className:"hidden"}),et.jsx(R2,{isDragging:D}),!w&&!A&&!D&&et.jsx(C2,{onSelectFile:Q}),et.jsx(T2,{isLoading:A,isExporting:u,progress:T,exportProgress:d}),et.jsx(M2,{fps:n,splatCount:r}),et.jsx(b2,{isVisible:U}),et.jsx(w2,{hasScene:w,cameraMode:C,onResetView:k,onFrameScene:X,onToggleCameraMode:N,onLoadFile:Q,onExport:W})]})}Qy.createRoot(document.getElementById("root")).render(et.jsx(Hy.StrictMode,{children:et.jsx(U2,{})}));
