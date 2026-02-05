(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Pv(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var sh={exports:{}},yl={};var t_;function Ly(){if(t_)return yl;t_=1;var l=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,o){var u=null;if(o!==void 0&&(u=""+o),r.key!==void 0&&(u=""+r.key),"key"in r){o={};for(var f in r)f!=="key"&&(o[f]=r[f])}else o=r;return r=o.ref,{$$typeof:l,type:a,key:u,ref:r!==void 0?r:null,props:o}}return yl.Fragment=e,yl.jsx=n,yl.jsxs=n,yl}var n_;function Fy(){return n_||(n_=1,sh.exports=Ly()),sh.exports}var hn=Fy(),rh={exports:{}},mt={};var i_;function Py(){if(i_)return mt;i_=1;var l=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,x={};function A(z,ie,pe){this.props=z,this.context=ie,this.refs=x,this.updater=pe||y}A.prototype.isReactComponent={},A.prototype.setState=function(z,ie){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ie,"setState")},A.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function T(){}T.prototype=A.prototype;function w(z,ie,pe){this.props=z,this.context=ie,this.refs=x,this.updater=pe||y}var D=w.prototype=new T;D.constructor=w,E(D,A.prototype),D.isPureReactComponent=!0;var R=Array.isArray;function B(){}var b={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function C(z,ie,pe){var Me=pe.ref;return{$$typeof:l,type:z,key:ie,ref:Me!==void 0?Me:null,props:pe}}function U(z,ie){return C(z.type,ie,z.props)}function N(z){return typeof z=="object"&&z!==null&&z.$$typeof===l}function k(z){var ie={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(pe){return ie[pe]})}var X=/\/+/g;function W(z,ie){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):ie.toString(36)}function Q(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(B,B):(z.status="pending",z.then(function(ie){z.status==="pending"&&(z.status="fulfilled",z.value=ie)},function(ie){z.status==="pending"&&(z.status="rejected",z.reason=ie)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,ie,pe,Me,we){var $=typeof z;($==="undefined"||$==="boolean")&&(z=null);var ce=!1;if(z===null)ce=!0;else switch($){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(z.$$typeof){case l:case e:ce=!0;break;case m:return ce=z._init,P(ce(z._payload),ie,pe,Me,we)}}if(ce)return we=we(z),ce=Me===""?"."+W(z,0):Me,R(we)?(pe="",ce!=null&&(pe=ce.replace(X,"$&/")+"/"),P(we,ie,pe,"",function(Ue){return Ue})):we!=null&&(N(we)&&(we=U(we,pe+(we.key==null||z&&z.key===we.key?"":(""+we.key).replace(X,"$&/")+"/")+ce)),ie.push(we)),1;ce=0;var be=Me===""?".":Me+":";if(R(z))for(var Fe=0;Fe<z.length;Fe++)Me=z[Fe],$=be+W(Me,Fe),ce+=P(Me,ie,pe,$,we);else if(Fe=v(z),typeof Fe=="function")for(z=Fe.call(z),Fe=0;!(Me=z.next()).done;)Me=Me.value,$=be+W(Me,Fe++),ce+=P(Me,ie,pe,$,we);else if($==="object"){if(typeof z.then=="function")return P(Q(z),ie,pe,Me,we);throw ie=String(z),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(z,ie,pe){if(z==null)return z;var Me=[],we=0;return P(z,Me,"","",function($){return ie.call(pe,$,we++)}),Me}function Z(z){if(z._status===-1){var ie=z._result;ie=ie(),ie.then(function(pe){(z._status===0||z._status===-1)&&(z._status=1,z._result=pe)},function(pe){(z._status===0||z._status===-1)&&(z._status=2,z._result=pe)}),z._status===-1&&(z._status=0,z._result=ie)}if(z._status===1)return z._result.default;throw z._result}var re=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},he={map:H,forEach:function(z,ie,pe){H(z,function(){ie.apply(this,arguments)},pe)},count:function(z){var ie=0;return H(z,function(){ie++}),ie},toArray:function(z){return H(z,function(ie){return ie})||[]},only:function(z){if(!N(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return mt.Activity=g,mt.Children=he,mt.Component=A,mt.Fragment=n,mt.Profiler=r,mt.PureComponent=w,mt.StrictMode=a,mt.Suspense=d,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,mt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return b.H.useMemoCache(z)}},mt.cache=function(z){return function(){return z.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(z,ie,pe){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Me=E({},z.props),we=z.key;if(ie!=null)for($ in ie.key!==void 0&&(we=""+ie.key),ie)!O.call(ie,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ie.ref===void 0||(Me[$]=ie[$]);var $=arguments.length-2;if($===1)Me.children=pe;else if(1<$){for(var ce=Array($),be=0;be<$;be++)ce[be]=arguments[be+2];Me.children=ce}return C(z.type,we,Me)},mt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:o,_context:z},z},mt.createElement=function(z,ie,pe){var Me,we={},$=null;if(ie!=null)for(Me in ie.key!==void 0&&($=""+ie.key),ie)O.call(ie,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(we[Me]=ie[Me]);var ce=arguments.length-2;if(ce===1)we.children=pe;else if(1<ce){for(var be=Array(ce),Fe=0;Fe<ce;Fe++)be[Fe]=arguments[Fe+2];we.children=be}if(z&&z.defaultProps)for(Me in ce=z.defaultProps,ce)we[Me]===void 0&&(we[Me]=ce[Me]);return C(z,$,we)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(z){return{$$typeof:f,render:z}},mt.isValidElement=N,mt.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:Z}},mt.memo=function(z,ie){return{$$typeof:h,type:z,compare:ie===void 0?null:ie}},mt.startTransition=function(z){var ie=b.T,pe={};b.T=pe;try{var Me=z(),we=b.S;we!==null&&we(pe,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(B,re)}catch($){re($)}finally{ie!==null&&pe.types!==null&&(ie.types=pe.types),b.T=ie}},mt.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},mt.use=function(z){return b.H.use(z)},mt.useActionState=function(z,ie,pe){return b.H.useActionState(z,ie,pe)},mt.useCallback=function(z,ie){return b.H.useCallback(z,ie)},mt.useContext=function(z){return b.H.useContext(z)},mt.useDebugValue=function(){},mt.useDeferredValue=function(z,ie){return b.H.useDeferredValue(z,ie)},mt.useEffect=function(z,ie){return b.H.useEffect(z,ie)},mt.useEffectEvent=function(z){return b.H.useEffectEvent(z)},mt.useId=function(){return b.H.useId()},mt.useImperativeHandle=function(z,ie,pe){return b.H.useImperativeHandle(z,ie,pe)},mt.useInsertionEffect=function(z,ie){return b.H.useInsertionEffect(z,ie)},mt.useLayoutEffect=function(z,ie){return b.H.useLayoutEffect(z,ie)},mt.useMemo=function(z,ie){return b.H.useMemo(z,ie)},mt.useOptimistic=function(z,ie){return b.H.useOptimistic(z,ie)},mt.useReducer=function(z,ie,pe){return b.H.useReducer(z,ie,pe)},mt.useRef=function(z){return b.H.useRef(z)},mt.useState=function(z){return b.H.useState(z)},mt.useSyncExternalStore=function(z,ie,pe){return b.H.useSyncExternalStore(z,ie,pe)},mt.useTransition=function(){return b.H.useTransition()},mt.version="19.2.4",mt}var a_;function qp(){return a_||(a_=1,rh.exports=Py()),rh.exports}var Vi=qp();const Oy=Pv(Vi);var oh={exports:{}},El={},lh={exports:{}},ch={};var s_;function Ny(){return s_||(s_=1,(function(l){function e(P,H){var Z=P.length;P.push(H);e:for(;0<Z;){var re=Z-1>>>1,he=P[re];if(0<r(he,H))P[re]=H,P[Z]=he,Z=re;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var H=P[0],Z=P.pop();if(Z!==H){P[0]=Z;e:for(var re=0,he=P.length,z=he>>>1;re<z;){var ie=2*(re+1)-1,pe=P[ie],Me=ie+1,we=P[Me];if(0>r(pe,Z))Me<he&&0>r(we,pe)?(P[re]=we,P[Me]=Z,re=Me):(P[re]=pe,P[ie]=Z,re=ie);else if(Me<he&&0>r(we,Z))P[re]=we,P[Me]=Z,re=Me;else break e}}return H}function r(P,H){var Z=P.sortIndex-H.sortIndex;return Z!==0?Z:P.id-H.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;l.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();l.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,g=null,_=3,v=!1,y=!1,E=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var H=n(h);H!==null;){if(H.callback===null)a(h);else if(H.startTime<=P)a(h),H.sortIndex=H.expirationTime,e(d,H);else break;H=n(h)}}function R(P){if(E=!1,D(P),!y)if(n(d)!==null)y=!0,B||(B=!0,k());else{var H=n(h);H!==null&&Q(R,H.startTime-P)}}var B=!1,b=-1,O=5,C=-1;function U(){return x?!0:!(l.unstable_now()-C<O)}function N(){if(x=!1,B){var P=l.unstable_now();C=P;var H=!0;try{e:{y=!1,E&&(E=!1,T(b),b=-1),v=!0;var Z=_;try{t:{for(D(P),g=n(d);g!==null&&!(g.expirationTime>P&&U());){var re=g.callback;if(typeof re=="function"){g.callback=null,_=g.priorityLevel;var he=re(g.expirationTime<=P);if(P=l.unstable_now(),typeof he=="function"){g.callback=he,D(P),H=!0;break t}g===n(d)&&a(d),D(P)}else a(d);g=n(d)}if(g!==null)H=!0;else{var z=n(h);z!==null&&Q(R,z.startTime-P),H=!1}}break e}finally{g=null,_=Z,v=!1}H=void 0}}finally{H?k():B=!1}}}var k;if(typeof w=="function")k=function(){w(N)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,W=X.port2;X.port1.onmessage=N,k=function(){W.postMessage(null)}}else k=function(){A(N,0)};function Q(P,H){b=A(function(){P(l.unstable_now())},H)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(P){P.callback=null},l.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<P?Math.floor(1e3/P):5},l.unstable_getCurrentPriorityLevel=function(){return _},l.unstable_next=function(P){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var Z=_;_=H;try{return P()}finally{_=Z}},l.unstable_requestPaint=function(){x=!0},l.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=_;_=P;try{return H()}finally{_=Z}},l.unstable_scheduleCallback=function(P,H,Z){var re=l.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,P={id:m++,callback:H,priorityLevel:P,startTime:Z,expirationTime:he,sortIndex:-1},Z>re?(P.sortIndex=Z,e(h,P),n(d)===null&&P===n(h)&&(E?(T(b),b=-1):E=!0,Q(R,Z-re))):(P.sortIndex=he,e(d,P),y||v||(y=!0,B||(B=!0,k()))),P},l.unstable_shouldYield=U,l.unstable_wrapCallback=function(P){var H=_;return function(){var Z=_;_=H;try{return P.apply(this,arguments)}finally{_=Z}}}})(ch)),ch}var r_;function zy(){return r_||(r_=1,lh.exports=Ny()),lh.exports}var uh={exports:{}},jn={};var o_;function Hy(){if(o_)return jn;o_=1;var l=qp();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(d,h,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:h,implementation:m}}var u=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,jn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return o(d,h,null,m)},jn.flushSync=function(d){var h=u.T,m=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=h,a.p=m,a.d.f()}},jn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(d,h))},jn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},jn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:v}):m==="script"&&a.d.X(d,{crossOrigin:g,integrity:_,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},jn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(d)},jn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin);a.d.L(d,m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},jn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(d)},jn.requestFormReset=function(d){a.d.r(d)},jn.unstable_batchedUpdates=function(d,h){return d(h)},jn.useFormState=function(d,h,m){return u.H.useFormState(d,h,m)},jn.useFormStatus=function(){return u.H.useHostTransitionStatus()},jn.version="19.2.4",jn}var l_;function Gy(){if(l_)return uh.exports;l_=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}return l(),uh.exports=Hy(),uh.exports}var c_;function Vy(){if(c_)return El;c_=1;var l=zy(),e=qp(),n=Gy();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function o(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(o(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=o(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,c=i;;){var p=s.return;if(p===null)break;var S=p.alternate;if(S===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===S.child){for(S=p.child;S;){if(S===s)return d(p),t;if(S===c)return d(p),i;S=S.sibling}throw Error(a(188))}if(s.return!==c.return)s=p,c=S;else{for(var M=!1,L=p.child;L;){if(L===s){M=!0,s=p,c=S;break}if(L===c){M=!0,c=p,s=S;break}L=L.sibling}if(!M){for(L=S.child;L;){if(L===s){M=!0,s=S,c=p;break}if(L===c){M=!0,c=S,s=p;break}L=L.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function m(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=m(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var X=Symbol.for("react.client.reference");function W(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===X?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case A:return"Profiler";case x:return"StrictMode";case R:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case w:return t.displayName||"Context";case T:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case b:return i=t.displayName||null,i!==null?i:W(t.type)||"Memo";case O:i=t._payload,t=t._init;try{return W(t(i))}catch{}}return null}var Q=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},re=[],he=-1;function z(t){return{current:t}}function ie(t){0>he||(t.current=re[he],re[he]=null,he--)}function pe(t,i){he++,re[he]=t.current,t.current=i}var Me=z(null),we=z(null),$=z(null),ce=z(null);function be(t,i){switch(pe($,i),pe(we,t),pe(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?MS(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=MS(i),t=TS(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Me),pe(Me,t)}function Fe(){ie(Me),ie(we),ie($)}function Ue(t){t.memoizedState!==null&&pe(ce,t);var i=Me.current,s=TS(i,t.type);i!==s&&(pe(we,t),pe(Me,s))}function at(t){we.current===t&&(ie(Me),ie(we)),ce.current===t&&(ie(ce),_l._currentValue=Z)}var St,Je;function tt(t){if(St===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);St=i&&i[1]||"",Je=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+Je}var et=!1;function it(t,i){if(!t||et)return"";et=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ge){var de=ge}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ge){de=ge}t.call(ye.prototype)}}else{try{throw Error()}catch(ge){de=ge}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ge){if(ge&&de&&typeof ge.stack=="string")return[ge.stack,de.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var S=c.DetermineComponentFrameRoot(),M=S[0],L=S[1];if(M&&L){var Y=M.split(`
`),le=L.split(`
`);for(p=c=0;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;for(;p<le.length&&!le[p].includes("DetermineComponentFrameRoot");)p++;if(c===Y.length||p===le.length)for(c=Y.length-1,p=le.length-1;1<=c&&0<=p&&Y[c]!==le[p];)p--;for(;1<=c&&0<=p;c--,p--)if(Y[c]!==le[p]){if(c!==1||p!==1)do if(c--,p--,0>p||Y[c]!==le[p]){var _e=`
`+Y[c].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=c&&0<=p);break}}}finally{et=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?tt(s):""}function Rt(t,i){switch(t.tag){case 26:case 27:case 5:return tt(t.type);case 16:return tt("Lazy");case 13:return t.child!==i&&i!==null?tt("Suspense Fallback"):tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return it(t.type,!1);case 11:return it(t.type.render,!1);case 1:return it(t.type,!0);case 31:return tt("Activity");default:return""}}function q(t){try{var i="",s=null;do i+=Rt(t,s),s=t,t=t.return;while(t);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var xt=Object.prototype.hasOwnProperty,gt=l.unstable_scheduleCallback,Ut=l.unstable_cancelCallback,Qe=l.unstable_shouldYield,G=l.unstable_requestPaint,I=l.unstable_now,ee=l.unstable_getCurrentPriorityLevel,ve=l.unstable_ImmediatePriority,Te=l.unstable_UserBlockingPriority,Se=l.unstable_NormalPriority,je=l.unstable_LowPriority,Pe=l.unstable_IdlePriority,We=l.log,j=l.unstable_setDisableYieldValue,ue=null,Ee=null;function De(t){if(typeof We=="function"&&j(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ue,t)}catch{}}var Be=Math.clz32?Math.clz32:J,Le=Math.log,ut=Math.LN2;function J(t){return t>>>=0,t===0?32:31-(Le(t)/ut|0)|0}var ze=256,Re=262144,Oe=4194304;function Ce(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ae(t,i,s){var c=t.pendingLanes;if(c===0)return 0;var p=0,S=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var L=c&134217727;return L!==0?(c=L&~S,c!==0?p=Ce(c):(M&=L,M!==0?p=Ce(M):s||(s=L&~t,s!==0&&(p=Ce(s))))):(L=c&~S,L!==0?p=Ce(L):M!==0?p=Ce(M):s||(s=c&~t,s!==0&&(p=Ce(s)))),p===0?0:i!==0&&i!==p&&(i&S)===0&&(S=p&-p,s=i&-i,S>=s||S===32&&(s&4194048)!==0)?i:p}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ot(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(){var t=Oe;return Oe<<=1,(Oe&62914560)===0&&(Oe=4194304),t}function wt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Qn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ji(t,i,s,c,p,S){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var L=t.entanglements,Y=t.expirationTimes,le=t.hiddenUpdates;for(s=M&~s;0<s;){var _e=31-Be(s),ye=1<<_e;L[_e]=0,Y[_e]=-1;var de=le[_e];if(de!==null)for(le[_e]=null,_e=0;_e<de.length;_e++){var ge=de[_e];ge!==null&&(ge.lane&=-536870913)}s&=~ye}c!==0&&Yl(t,c,0),S!==0&&p===0&&t.tag!==0&&(t.suspendedLanes|=S&~(M&~i))}function Yl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var c=31-Be(i);t.entangledLanes|=i,t.entanglements[c]=t.entanglements[c]|1073741824|s&261930}function Do(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var c=31-Be(s),p=1<<c;p&i|t[c]&i&&(t[c]|=i),s&=~p}}function hr(t,i){var s=i&-i;return s=(s&42)!==0?1:Io(s),(s&(t.suspendedLanes|i))!==0?0:s}function Io(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Uo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:QS(t.type))}function ra(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var Ii=Math.random().toString(36).slice(2),An="__reactFiber$"+Ii,Fn="__reactProps$"+Ii,Ki="__reactContainer$"+Ii,mr="__reactEvents$"+Ii,gr="__reactListeners$"+Ii,Ql="__reactHandles$"+Ii,Bo="__reactResources$"+Ii,Ps="__reactMarker$"+Ii;function Lo(t){delete t[An],delete t[Fn],delete t[mr],delete t[gr],delete t[Ql]}function Ja(t){var i=t[An];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ki]||s[An]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=US(t);t!==null;){if(s=t[An])return s;t=US(t)}return i}t=s,s=t.parentNode}return null}function $a(t){if(t=t[An]||t[Ki]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Os(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function es(t){var i=t[Bo];return i||(i=t[Bo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function F(t){t[Ps]=!0}var te=new Set,me={};function fe(t,i){ae(t,i),ae(t+"Capture",i)}function ae(t,i){for(me[t]=i,t=0;t<i.length;t++)te.add(i[t])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xe={},Ge={};function qe(t){return xt.call(Ge,t)?!0:xt.call(Xe,t)?!1:He.test(t)?Ge[t]=!0:(Xe[t]=!0,!1)}function Ke(t,i,s){if(qe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function rt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ze(t,i,s,c){if(c===null)t.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+c)}}function lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ot(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function on(t,i,s){var c=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,S=c.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return p.call(this)},set:function(M){s=""+M,S.call(this,M)}}),Object.defineProperty(t,i,{enumerable:c.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tn(t){if(!t._valueTracker){var i=Ot(t)?"checked":"value";t._valueTracker=on(t,i,""+t[i])}}function Gt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return t&&(c=Ot(t)?t.checked?"true":"false":t.value),t=c,t!==s?(i.setValue(t),!0):!1}function nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function pt(t){return t.replace(Nt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Pn(t,i,s,c,p,S,M,L){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+lt(i)):t.value!==""+lt(i)&&(t.value=""+lt(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?On(t,M,lt(i)):s!=null?On(t,M,lt(s)):c!=null&&t.removeAttribute("value"),p==null&&S!=null&&(t.defaultChecked=!!S),p!=null&&(t.checked=p&&typeof p!="function"&&typeof p!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?t.name=""+lt(L):t.removeAttribute("name")}function Aa(t,i,s,c,p,S,M,L){if(S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.type=S),i!=null||s!=null){if(!(S!=="submit"&&S!=="reset"||i!=null)){tn(t);return}s=s!=null?""+lt(s):"",i=i!=null?""+lt(i):s,L||i===t.value||(t.value=i),t.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,t.checked=L?t.checked:!!c,t.defaultChecked=!!c,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),tn(t)}function On(t,i,s){i==="number"&&nt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ui(t,i,s,c){if(t=t.options,i){i={};for(var p=0;p<s.length;p++)i["$"+s[p]]=!0;for(s=0;s<t.length;s++)p=i.hasOwnProperty("$"+t[s].value),t[s].selected!==p&&(t[s].selected=p),p&&c&&(t[s].defaultSelected=!0)}else{for(s=""+lt(s),i=null,p=0;p<t.length;p++){if(t[p].value===s){t[p].selected=!0,c&&(t[p].defaultSelected=!0);return}i!==null||t[p].disabled||(i=t[p])}i!==null&&(i.selected=!0)}}function Xt(t,i,s){if(i!=null&&(i=""+lt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+lt(s):""}function Nn(t,i,s,c){if(i==null){if(c!=null){if(s!=null)throw Error(a(92));if(Q(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),i=s}s=lt(i),t.defaultValue=s,c=t.textContent,c===s&&c!==""&&c!==null&&(t.value=c),tn(t)}function Cn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var zn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hn(t,i,s){var c=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":c?t.setProperty(i,s):typeof s!="number"||s===0||zn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Sr(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?t.setProperty(c,""):c==="float"?t.cssFloat="":t[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&s[p]!==c&&Hn(t,p,c)}else for(var S in i)i.hasOwnProperty(S)&&Hn(t,S,i[S])}function Zi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var DA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),IA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(t){return IA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function xa(){}var tf=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,vr=null;function Em(t){var i=$a(t);if(i&&(t=i.stateNode)){var s=t[Fn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Pn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+pt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==t&&c.form===t.form){var p=c[Fn]||null;if(!p)throw Error(a(90));Pn(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<s.length;i++)c=s[i],c.form===t.form&&Gt(c)}break e;case"textarea":Xt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ui(t,!!s.multiple,i,!1)}}}var af=!1;function Mm(t,i,s){if(af)return t(i,s);af=!0;try{var c=t(i);return c}finally{if(af=!1,(_r!==null||vr!==null)&&(Pc(),_r&&(i=_r,t=vr,vr=_r=null,Em(i),t)))for(i=0;i<t.length;i++)Em(t[i])}}function Fo(t,i){var s=t.stateNode;if(s===null)return null;var c=s[Fn]||null;if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=!1;if(ya)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{sf=!1}var ts=null,rf=null,Kl=null;function Tm(){if(Kl)return Kl;var t,i=rf,s=i.length,c,p="value"in ts?ts.value:ts.textContent,S=p.length;for(t=0;t<s&&i[t]===p[t];t++);var M=s-t;for(c=1;c<=M&&i[s-c]===p[S-c];c++);return Kl=p.slice(t,1<c?1-c:void 0)}function Zl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Cm(){return!1}function oi(t){function i(s,c,p,S,M){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=S,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(S):S[L]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?Jl:Cm,this.isPropagationStopped=Cm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=oi(Ns),Oo=g({},Ns,{view:0,detail:0}),UA=oi(Oo),of,lf,No,ec=g({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(of=t.screenX-No.screenX,lf=t.screenY-No.screenY):lf=of=0,No=t),of)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),bm=oi(ec),BA=g({},ec,{dataTransfer:0}),LA=oi(BA),FA=g({},Oo,{relatedTarget:0}),cf=oi(FA),PA=g({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),OA=oi(PA),NA=g({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zA=oi(NA),HA=g({},Ns,{data:0}),Rm=oi(HA),GA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XA(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=kA[t])?!!i[t]:!1}function uf(){return XA}var WA=g({},Oo,{key:function(t){if(t.key){var i=GA[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qA=oi(WA),YA=g({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=oi(YA),QA=g({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),jA=oi(QA),KA=g({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZA=oi(KA),JA=g({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$A=oi(JA),ex=g({},Ns,{newState:0,oldState:0}),tx=oi(ex),nx=[9,13,27,32],ff=ya&&"CompositionEvent"in window,zo=null;ya&&"documentMode"in document&&(zo=document.documentMode);var ix=ya&&"TextEvent"in window&&!zo,Dm=ya&&(!ff||zo&&8<zo&&11>=zo),Im=" ",Um=!1;function Bm(t,i){switch(t){case"keyup":return nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function ax(t,i){switch(t){case"compositionend":return Lm(i);case"keypress":return i.which!==32?null:(Um=!0,Im);case"textInput":return t=i.data,t===Im&&Um?null:t;default:return null}}function sx(t,i){if(Ar)return t==="compositionend"||!ff&&Bm(t,i)?(t=Tm(),Kl=rf=ts=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dm&&i.locale!=="ko"?null:i.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!rx[t.type]:i==="textarea"}function Pm(t,i,s,c){_r?vr?vr.push(c):vr=[c]:_r=c,i=kc(i,"onChange"),0<i.length&&(s=new $l("onChange","change",null,s,c),t.push({event:s,listeners:i}))}var Ho=null,Go=null;function ox(t){_S(t,0)}function tc(t){var i=Os(t);if(Gt(i))return t}function Om(t,i){if(t==="change")return i}var Nm=!1;if(ya){var df;if(ya){var hf="oninput"in document;if(!hf){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),hf=typeof zm.oninput=="function"}df=hf}else df=!1;Nm=df&&(!document.documentMode||9<document.documentMode)}function Hm(){Ho&&(Ho.detachEvent("onpropertychange",Gm),Go=Ho=null)}function Gm(t){if(t.propertyName==="value"&&tc(Go)){var i=[];Pm(i,Go,t,nf(t)),Mm(ox,i)}}function lx(t,i,s){t==="focusin"?(Hm(),Ho=i,Go=s,Ho.attachEvent("onpropertychange",Gm)):t==="focusout"&&Hm()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(Go)}function ux(t,i){if(t==="click")return tc(i)}function fx(t,i){if(t==="input"||t==="change")return tc(i)}function dx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var _i=typeof Object.is=="function"?Object.is:dx;function Vo(t,i){if(_i(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!xt.call(i,p)||!_i(t[p],i[p]))return!1}return!0}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function km(t,i){var s=Vm(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=i&&c>=i)return{node:s,offset:i-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Vm(s)}}function Xm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=nt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=nt(t.document)}return i}function pf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var hx=ya&&"documentMode"in document&&11>=document.documentMode,xr=null,mf=null,ko=null,gf=!1;function qm(t,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gf||xr==null||xr!==nt(c)||(c=xr,"selectionStart"in c&&pf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ko&&Vo(ko,c)||(ko=c,c=kc(mf,"onSelect"),0<c.length&&(i=new $l("onSelect","select",null,i,s),t.push({event:i,listeners:c}),i.target=xr)))}function zs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var yr={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionrun:zs("Transition","TransitionRun"),transitionstart:zs("Transition","TransitionStart"),transitioncancel:zs("Transition","TransitionCancel"),transitionend:zs("Transition","TransitionEnd")},Sf={},Ym={};ya&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Hs(t){if(Sf[t])return Sf[t];if(!yr[t])return t;var i=yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ym)return Sf[t]=i[s];return t}var Qm=Hs("animationend"),jm=Hs("animationiteration"),Km=Hs("animationstart"),px=Hs("transitionrun"),mx=Hs("transitionstart"),gx=Hs("transitioncancel"),Zm=Hs("transitionend"),Jm=new Map,_f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_f.push("scrollEnd");function Ji(t,i){Jm.set(t,i),fe(i,[t])}var nc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Bi=[],Er=0,vf=0;function ic(){for(var t=Er,i=vf=Er=0;i<t;){var s=Bi[i];Bi[i++]=null;var c=Bi[i];Bi[i++]=null;var p=Bi[i];Bi[i++]=null;var S=Bi[i];if(Bi[i++]=null,c!==null&&p!==null){var M=c.pending;M===null?p.next=p:(p.next=M.next,M.next=p),c.pending=p}S!==0&&$m(s,p,S)}}function ac(t,i,s,c){Bi[Er++]=t,Bi[Er++]=i,Bi[Er++]=s,Bi[Er++]=c,vf|=c,t.lanes|=c,t=t.alternate,t!==null&&(t.lanes|=c)}function Af(t,i,s,c){return ac(t,i,s,c),sc(t)}function Gs(t,i){return ac(t,null,null,i),sc(t)}function $m(t,i,s){t.lanes|=s;var c=t.alternate;c!==null&&(c.lanes|=s);for(var p=!1,S=t.return;S!==null;)S.childLanes|=s,c=S.alternate,c!==null&&(c.childLanes|=s),S.tag===22&&(t=S.stateNode,t===null||t._visibility&1||(p=!0)),t=S,S=S.return;return t.tag===3?(S=t.stateNode,p&&i!==null&&(p=31-Be(s),t=S.hiddenUpdates,c=t[p],c===null?t[p]=[i]:c.push(i),i.lane=s|536870912),S):null}function sc(t){if(50<fl)throw fl=0,wd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Mr={};function Sx(t,i,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,i,s,c){return new Sx(t,i,s,c)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ea(t,i){var s=t.alternate;return s===null?(s=vi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function eg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function rc(t,i,s,c,p,S){var M=0;if(c=t,typeof t=="function")xf(t)&&(M=1);else if(typeof t=="string")M=yy(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=vi(31,s,i,p),t.elementType=C,t.lanes=S,t;case E:return Vs(s.children,p,S,i);case x:M=8,p|=24;break;case A:return t=vi(12,s,i,p|2),t.elementType=A,t.lanes=S,t;case R:return t=vi(13,s,i,p),t.elementType=R,t.lanes=S,t;case B:return t=vi(19,s,i,p),t.elementType=B,t.lanes=S,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case T:M=9;break e;case D:M=11;break e;case b:M=14;break e;case O:M=16,c=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),c=null}return i=vi(M,s,i,p),i.elementType=t,i.type=c,i.lanes=S,i}function Vs(t,i,s,c){return t=vi(7,t,c,i),t.lanes=s,t}function yf(t,i,s){return t=vi(6,t,null,i),t.lanes=s,t}function tg(t){var i=vi(18,null,null,0);return i.stateNode=t,i}function Ef(t,i,s){return i=vi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ng=new WeakMap;function Li(t,i){if(typeof t=="object"&&t!==null){var s=ng.get(t);return s!==void 0?s:(i={value:t,source:i,stack:q(i)},ng.set(t,i),i)}return{value:t,source:i,stack:q(i)}}var Tr=[],Cr=0,oc=null,Xo=0,Fi=[],Pi=0,ns=null,oa=1,la="";function Ma(t,i){Tr[Cr++]=Xo,Tr[Cr++]=oc,oc=t,Xo=i}function ig(t,i,s){Fi[Pi++]=oa,Fi[Pi++]=la,Fi[Pi++]=ns,ns=t;var c=oa;t=la;var p=32-Be(c)-1;c&=~(1<<p),s+=1;var S=32-Be(i)+p;if(30<S){var M=p-p%5;S=(c&(1<<M)-1).toString(32),c>>=M,p-=M,oa=1<<32-Be(i)+p|s<<p|c,la=S+t}else oa=1<<S|s<<p|c,la=t}function Mf(t){t.return!==null&&(Ma(t,1),ig(t,1,0))}function Tf(t){for(;t===oc;)oc=Tr[--Cr],Tr[Cr]=null,Xo=Tr[--Cr],Tr[Cr]=null;for(;t===ns;)ns=Fi[--Pi],Fi[Pi]=null,la=Fi[--Pi],Fi[Pi]=null,oa=Fi[--Pi],Fi[Pi]=null}function ag(t,i){Fi[Pi++]=oa,Fi[Pi++]=la,Fi[Pi++]=ns,oa=i.id,la=i.overflow,ns=t}var Gn=null,an=null,bt=!1,is=null,Oi=!1,Cf=Error(a(519));function as(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(Li(i,t)),Cf}function sg(t){var i=t.stateNode,s=t.type,c=t.memoizedProps;switch(i[An]=t,i[Fn]=c,s){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(s=0;s<hl.length;s++)Mt(hl[s],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),Aa(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Nn(i,c.value,c.defaultValue,c.children)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||c.suppressHydrationWarning===!0||yS(i.textContent,s)?(c.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),c.onScroll!=null&&Mt("scroll",i),c.onScrollEnd!=null&&Mt("scrollend",i),c.onClick!=null&&(i.onclick=xa),i=!0):i=!1,i||as(t,!0)}function rg(t){for(Gn=t.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Gn=Gn.return}}function br(t){if(t!==Gn)return!1;if(!bt)return rg(t),bt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Xd(t.type,t.memoizedProps)),s=!s),s&&an&&as(t),rg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));an=IS(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));an=IS(t)}else i===27?(i=an,_s(t.type)?(t=jd,jd=null,an=t):an=i):an=Gn?zi(t.stateNode.nextSibling):null;return!0}function ks(){an=Gn=null,bt=!1}function bf(){var t=is;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),is=null),t}function Wo(t){is===null?is=[t]:is.push(t)}var Rf=z(null),Xs=null,Ta=null;function ss(t,i,s){pe(Rf,i._currentValue),i._currentValue=s}function Ca(t){t._currentValue=Rf.current,ie(Rf)}function wf(t,i,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===s)break;t=t.return}}function Df(t,i,s,c){var p=t.child;for(p!==null&&(p.return=t);p!==null;){var S=p.dependencies;if(S!==null){var M=p.child;S=S.firstContext;e:for(;S!==null;){var L=S;S=p;for(var Y=0;Y<i.length;Y++)if(L.context===i[Y]){S.lanes|=s,L=S.alternate,L!==null&&(L.lanes|=s),wf(S.return,s,t),c||(M=null);break e}S=L.next}}else if(p.tag===18){if(M=p.return,M===null)throw Error(a(341));M.lanes|=s,S=M.alternate,S!==null&&(S.lanes|=s),wf(M,s,t),M=null}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===t){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}}function Rr(t,i,s,c){t=null;for(var p=i,S=!1;p!==null;){if(!S){if((p.flags&524288)!==0)S=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var M=p.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var L=p.type;_i(p.pendingProps.value,M.value)||(t!==null?t.push(L):t=[L])}}else if(p===ce.current){if(M=p.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}p=p.return}t!==null&&Df(i,t,s,c),i.flags|=262144}function lc(t){for(t=t.firstContext;t!==null;){if(!_i(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ws(t){Xs=t,Ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Vn(t){return og(Xs,t)}function cc(t,i){return Xs===null&&Ws(t),og(t,i)}function og(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ta===null){if(t===null)throw Error(a(308));Ta=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ta=Ta.next=i;return s}var _x=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,c){t.push(c)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},vx=l.unstable_scheduleCallback,Ax=l.unstable_NormalPriority,xn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function If(){return{controller:new _x,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&vx(Ax,function(){t.controller.abort()})}var Yo=null,Uf=0,wr=0,Dr=null;function xx(t,i){if(Yo===null){var s=Yo=[];Uf=0,wr=Fd(),Dr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Uf++,i.then(lg,lg),i}function lg(){if(--Uf===0&&Yo!==null){Dr!==null&&(Dr.status="fulfilled");var t=Yo;Yo=null,wr=0,Dr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function yx(t,i){var s=[],c={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return t.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<s.length;p++)(0,s[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),c}var cg=P.S;P.S=function(t,i){q0=I(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&xx(t,i),cg!==null&&cg(t,i)};var qs=z(null);function Bf(){var t=qs.current;return t!==null?t:en.pooledCache}function uc(t,i){i===null?pe(qs,qs.current):pe(qs,i.pool)}function ug(){var t=Bf();return t===null?null:{parent:xn._currentValue,pool:t}}var Ir=Error(a(460)),Lf=Error(a(474)),fc=Error(a(542)),dc={then:function(){}};function fg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(xa,xa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,pg(t),t;default:if(typeof i.status=="string")i.then(xa,xa);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,pg(t),t}throw Qs=i,Ir}}function Ys(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Qs=s,Ir):s}}var Qs=null;function hg(){if(Qs===null)throw Error(a(459));var t=Qs;return Qs=null,t}function pg(t){if(t===Ir||t===fc)throw Error(a(483))}var Ur=null,Qo=0;function hc(t){var i=Qo;return Qo+=1,Ur===null&&(Ur=[]),dg(Ur,t,i)}function jo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function pc(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function mg(t){function i(ne,K){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[K],ne.flags|=16):oe.push(K)}}function s(ne,K){if(!t)return null;for(;K!==null;)i(ne,K),K=K.sibling;return null}function c(ne){for(var K=new Map;ne!==null;)ne.key!==null?K.set(ne.key,ne):K.set(ne.index,ne),ne=ne.sibling;return K}function p(ne,K){return ne=Ea(ne,K),ne.index=0,ne.sibling=null,ne}function S(ne,K,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<K?(ne.flags|=67108866,K):oe):(ne.flags|=67108866,K)):(ne.flags|=1048576,K)}function M(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function L(ne,K,oe,xe){return K===null||K.tag!==6?(K=yf(oe,ne.mode,xe),K.return=ne,K):(K=p(K,oe),K.return=ne,K)}function Y(ne,K,oe,xe){var st=oe.type;return st===E?_e(ne,K,oe.props.children,xe,oe.key):K!==null&&(K.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===O&&Ys(st)===K.type)?(K=p(K,oe.props),jo(K,oe),K.return=ne,K):(K=rc(oe.type,oe.key,oe.props,null,ne.mode,xe),jo(K,oe),K.return=ne,K)}function le(ne,K,oe,xe){return K===null||K.tag!==4||K.stateNode.containerInfo!==oe.containerInfo||K.stateNode.implementation!==oe.implementation?(K=Ef(oe,ne.mode,xe),K.return=ne,K):(K=p(K,oe.children||[]),K.return=ne,K)}function _e(ne,K,oe,xe,st){return K===null||K.tag!==7?(K=Vs(oe,ne.mode,xe,st),K.return=ne,K):(K=p(K,oe),K.return=ne,K)}function ye(ne,K,oe){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=yf(""+K,ne.mode,oe),K.return=ne,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return oe=rc(K.type,K.key,K.props,null,ne.mode,oe),jo(oe,K),oe.return=ne,oe;case y:return K=Ef(K,ne.mode,oe),K.return=ne,K;case O:return K=Ys(K),ye(ne,K,oe)}if(Q(K)||k(K))return K=Vs(K,ne.mode,oe,null),K.return=ne,K;if(typeof K.then=="function")return ye(ne,hc(K),oe);if(K.$$typeof===w)return ye(ne,cc(ne,K),oe);pc(ne,K)}return null}function de(ne,K,oe,xe){var st=K!==null?K.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return st!==null?null:L(ne,K,""+oe,xe);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case v:return oe.key===st?Y(ne,K,oe,xe):null;case y:return oe.key===st?le(ne,K,oe,xe):null;case O:return oe=Ys(oe),de(ne,K,oe,xe)}if(Q(oe)||k(oe))return st!==null?null:_e(ne,K,oe,xe,null);if(typeof oe.then=="function")return de(ne,K,hc(oe),xe);if(oe.$$typeof===w)return de(ne,K,cc(ne,oe),xe);pc(ne,oe)}return null}function ge(ne,K,oe,xe,st){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return ne=ne.get(oe)||null,L(K,ne,""+xe,st);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case v:return ne=ne.get(xe.key===null?oe:xe.key)||null,Y(K,ne,xe,st);case y:return ne=ne.get(xe.key===null?oe:xe.key)||null,le(K,ne,xe,st);case O:return xe=Ys(xe),ge(ne,K,oe,xe,st)}if(Q(xe)||k(xe))return ne=ne.get(oe)||null,_e(K,ne,xe,st,null);if(typeof xe.then=="function")return ge(ne,K,oe,hc(xe),st);if(xe.$$typeof===w)return ge(ne,K,oe,cc(K,xe),st);pc(K,xe)}return null}function Ye(ne,K,oe,xe){for(var st=null,Bt=null,$e=K,vt=K=0,Ct=null;$e!==null&&vt<oe.length;vt++){$e.index>vt?(Ct=$e,$e=null):Ct=$e.sibling;var Lt=de(ne,$e,oe[vt],xe);if(Lt===null){$e===null&&($e=Ct);break}t&&$e&&Lt.alternate===null&&i(ne,$e),K=S(Lt,K,vt),Bt===null?st=Lt:Bt.sibling=Lt,Bt=Lt,$e=Ct}if(vt===oe.length)return s(ne,$e),bt&&Ma(ne,vt),st;if($e===null){for(;vt<oe.length;vt++)$e=ye(ne,oe[vt],xe),$e!==null&&(K=S($e,K,vt),Bt===null?st=$e:Bt.sibling=$e,Bt=$e);return bt&&Ma(ne,vt),st}for($e=c($e);vt<oe.length;vt++)Ct=ge($e,ne,vt,oe[vt],xe),Ct!==null&&(t&&Ct.alternate!==null&&$e.delete(Ct.key===null?vt:Ct.key),K=S(Ct,K,vt),Bt===null?st=Ct:Bt.sibling=Ct,Bt=Ct);return t&&$e.forEach(function(Es){return i(ne,Es)}),bt&&Ma(ne,vt),st}function ct(ne,K,oe,xe){if(oe==null)throw Error(a(151));for(var st=null,Bt=null,$e=K,vt=K=0,Ct=null,Lt=oe.next();$e!==null&&!Lt.done;vt++,Lt=oe.next()){$e.index>vt?(Ct=$e,$e=null):Ct=$e.sibling;var Es=de(ne,$e,Lt.value,xe);if(Es===null){$e===null&&($e=Ct);break}t&&$e&&Es.alternate===null&&i(ne,$e),K=S(Es,K,vt),Bt===null?st=Es:Bt.sibling=Es,Bt=Es,$e=Ct}if(Lt.done)return s(ne,$e),bt&&Ma(ne,vt),st;if($e===null){for(;!Lt.done;vt++,Lt=oe.next())Lt=ye(ne,Lt.value,xe),Lt!==null&&(K=S(Lt,K,vt),Bt===null?st=Lt:Bt.sibling=Lt,Bt=Lt);return bt&&Ma(ne,vt),st}for($e=c($e);!Lt.done;vt++,Lt=oe.next())Lt=ge($e,ne,vt,Lt.value,xe),Lt!==null&&(t&&Lt.alternate!==null&&$e.delete(Lt.key===null?vt:Lt.key),K=S(Lt,K,vt),Bt===null?st=Lt:Bt.sibling=Lt,Bt=Lt);return t&&$e.forEach(function(By){return i(ne,By)}),bt&&Ma(ne,vt),st}function Kt(ne,K,oe,xe){if(typeof oe=="object"&&oe!==null&&oe.type===E&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case v:e:{for(var st=oe.key;K!==null;){if(K.key===st){if(st=oe.type,st===E){if(K.tag===7){s(ne,K.sibling),xe=p(K,oe.props.children),xe.return=ne,ne=xe;break e}}else if(K.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===O&&Ys(st)===K.type){s(ne,K.sibling),xe=p(K,oe.props),jo(xe,oe),xe.return=ne,ne=xe;break e}s(ne,K);break}else i(ne,K);K=K.sibling}oe.type===E?(xe=Vs(oe.props.children,ne.mode,xe,oe.key),xe.return=ne,ne=xe):(xe=rc(oe.type,oe.key,oe.props,null,ne.mode,xe),jo(xe,oe),xe.return=ne,ne=xe)}return M(ne);case y:e:{for(st=oe.key;K!==null;){if(K.key===st)if(K.tag===4&&K.stateNode.containerInfo===oe.containerInfo&&K.stateNode.implementation===oe.implementation){s(ne,K.sibling),xe=p(K,oe.children||[]),xe.return=ne,ne=xe;break e}else{s(ne,K);break}else i(ne,K);K=K.sibling}xe=Ef(oe,ne.mode,xe),xe.return=ne,ne=xe}return M(ne);case O:return oe=Ys(oe),Kt(ne,K,oe,xe)}if(Q(oe))return Ye(ne,K,oe,xe);if(k(oe)){if(st=k(oe),typeof st!="function")throw Error(a(150));return oe=st.call(oe),ct(ne,K,oe,xe)}if(typeof oe.then=="function")return Kt(ne,K,hc(oe),xe);if(oe.$$typeof===w)return Kt(ne,K,cc(ne,oe),xe);pc(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,K!==null&&K.tag===6?(s(ne,K.sibling),xe=p(K,oe),xe.return=ne,ne=xe):(s(ne,K),xe=yf(oe,ne.mode,xe),xe.return=ne,ne=xe),M(ne)):s(ne,K)}return function(ne,K,oe,xe){try{Qo=0;var st=Kt(ne,K,oe,xe);return Ur=null,st}catch($e){if($e===Ir||$e===fc)throw $e;var Bt=vi(29,$e,null,ne.mode);return Bt.lanes=xe,Bt.return=ne,Bt}}}var js=mg(!0),gg=mg(!1),rs=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function os(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ls(t,i,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(zt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=sc(t),$m(t,null,s),i}return ac(t,c,i,s),sc(t)}function Ko(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,Do(t,s)}}function Of(t,i){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,S=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};S===null?p=S=M:S=S.next=M,s=s.next}while(s!==null);S===null?p=S=i:S=S.next=i}else p=S=i;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:S,shared:c.shared,callbacks:c.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Nf=!1;function Zo(){if(Nf){var t=Dr;if(t!==null)throw t}}function Jo(t,i,s,c){Nf=!1;var p=t.updateQueue;rs=!1;var S=p.firstBaseUpdate,M=p.lastBaseUpdate,L=p.shared.pending;if(L!==null){p.shared.pending=null;var Y=L,le=Y.next;Y.next=null,M===null?S=le:M.next=le,M=Y;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=le:L.next=le,_e.lastBaseUpdate=Y))}if(S!==null){var ye=p.baseState;M=0,_e=le=Y=null,L=S;do{var de=L.lane&-536870913,ge=de!==L.lane;if(ge?(Tt&de)===de:(c&de)===de){de!==0&&de===wr&&(Nf=!0),_e!==null&&(_e=_e.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});e:{var Ye=t,ct=L;de=i;var Kt=s;switch(ct.tag){case 1:if(Ye=ct.payload,typeof Ye=="function"){ye=Ye.call(Kt,ye,de);break e}ye=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=ct.payload,de=typeof Ye=="function"?Ye.call(Kt,ye,de):Ye,de==null)break e;ye=g({},ye,de);break e;case 2:rs=!0}}de=L.callback,de!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=p.callbacks,ge===null?p.callbacks=[de]:ge.push(de))}else ge={lane:de,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(le=_e=ge,Y=ye):_e=_e.next=ge,M|=de;if(L=L.next,L===null){if(L=p.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);_e===null&&(Y=ye),p.baseState=Y,p.firstBaseUpdate=le,p.lastBaseUpdate=_e,S===null&&(p.shared.lanes=0),hs|=M,t.lanes=M,t.memoizedState=ye}}function Sg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function _g(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Sg(s[t],i)}var Br=z(null),mc=z(0);function vg(t,i){t=Fa,pe(mc,t),pe(Br,i),Fa=t|i.baseLanes}function zf(){pe(mc,Fa),pe(Br,Br.current)}function Hf(){Fa=mc.current,ie(Br),ie(mc)}var Ai=z(null),Ni=null;function cs(t){var i=t.alternate;pe(gn,gn.current&1),pe(Ai,t),Ni===null&&(i===null||Br.current!==null||i.memoizedState!==null)&&(Ni=t)}function Gf(t){pe(gn,gn.current),pe(Ai,t),Ni===null&&(Ni=t)}function Ag(t){t.tag===22?(pe(gn,gn.current),pe(Ai,t),Ni===null&&(Ni=t)):us()}function us(){pe(gn,gn.current),pe(Ai,Ai.current)}function xi(t){ie(Ai),Ni===t&&(Ni=null),ie(gn)}var gn=z(0);function gc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Yd(s)||Qd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ba=0,_t=null,Qt=null,yn=null,Sc=!1,Lr=!1,Ks=!1,_c=0,$o=0,Fr=null,Ex=0;function pn(){throw Error(a(321))}function Vf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!_i(t[s],i[s]))return!1;return!0}function kf(t,i,s,c,p,S){return ba=S,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?i0:ad,Ks=!1,S=s(c,p),Ks=!1,Lr&&(S=yg(i,s,c,p)),xg(t),S}function xg(t){P.H=nl;var i=Qt!==null&&Qt.next!==null;if(ba=0,yn=Qt=_t=null,Sc=!1,$o=0,Fr=null,i)throw Error(a(300));t===null||En||(t=t.dependencies,t!==null&&lc(t)&&(En=!0))}function yg(t,i,s,c){_t=t;var p=0;do{if(Lr&&(Fr=null),$o=0,Lr=!1,25<=p)throw Error(a(301));if(p+=1,yn=Qt=null,t.updateQueue!=null){var S=t.updateQueue;S.lastEffect=null,S.events=null,S.stores=null,S.memoCache!=null&&(S.memoCache.index=0)}P.H=a0,S=i(s,c)}while(Lr);return S}function Mx(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?el(i):i,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(_t.flags|=1024),i}function Xf(){var t=_c!==0;return _c=0,t}function Wf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function qf(t){if(Sc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Sc=!1}ba=0,yn=Qt=_t=null,Lr=!1,$o=_c=0,Fr=null}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?_t.memoizedState=yn=t:yn=yn.next=t,yn}function Sn(){if(Qt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=yn===null?_t.memoizedState:yn.next;if(i!==null)yn=i,Qt=t;else{if(t===null)throw _t.alternate===null?Error(a(467)):Error(a(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},yn===null?_t.memoizedState=yn=t:yn=yn.next=t}return yn}function vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(t){var i=$o;return $o+=1,Fr===null&&(Fr=[]),t=dg(Fr,t,i),i=_t,(yn===null?i.memoizedState:yn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?i0:ad),t}function Ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return el(t);if(t.$$typeof===w)return Vn(t)}throw Error(a(438,String(t)))}function Yf(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var c=_t.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=vc(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),c=0;c<t;c++)s[c]=U;return i.index++,s}function Ra(t,i){return typeof i=="function"?i(t):i}function xc(t){var i=Sn();return Qf(i,Qt,t)}function Qf(t,i,s){var c=t.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var p=t.baseQueue,S=c.pending;if(S!==null){if(p!==null){var M=p.next;p.next=S.next,S.next=M}i.baseQueue=p=S,c.pending=null}if(S=t.baseState,p===null)t.memoizedState=S;else{i=p.next;var L=M=null,Y=null,le=i,_e=!1;do{var ye=le.lane&-536870913;if(ye!==le.lane?(Tt&ye)===ye:(ba&ye)===ye){var de=le.revertLane;if(de===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),ye===wr&&(_e=!0);else if((ba&de)===de){le=le.next,de===wr&&(_e=!0);continue}else ye={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},Y===null?(L=Y=ye,M=S):Y=Y.next=ye,_t.lanes|=de,hs|=de;ye=le.action,Ks&&s(S,ye),S=le.hasEagerState?le.eagerState:s(S,ye)}else de={lane:ye,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},Y===null?(L=Y=de,M=S):Y=Y.next=de,_t.lanes|=ye,hs|=ye;le=le.next}while(le!==null&&le!==i);if(Y===null?M=S:Y.next=L,!_i(S,t.memoizedState)&&(En=!0,_e&&(s=Dr,s!==null)))throw s;t.memoizedState=S,t.baseState=M,t.baseQueue=Y,c.lastRenderedState=S}return p===null&&(c.lanes=0),[t.memoizedState,c.dispatch]}function jf(t){var i=Sn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var c=s.dispatch,p=s.pending,S=i.memoizedState;if(p!==null){s.pending=null;var M=p=p.next;do S=t(S,M.action),M=M.next;while(M!==p);_i(S,i.memoizedState)||(En=!0),i.memoizedState=S,i.baseQueue===null&&(i.baseState=S),s.lastRenderedState=S}return[S,c]}function Eg(t,i,s){var c=_t,p=Sn(),S=bt;if(S){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!_i((Qt||p).memoizedState,s);if(M&&(p.memoizedState=s,En=!0),p=p.queue,Jf(Cg.bind(null,c,p,t),[t]),p.getSnapshot!==i||M||yn!==null&&yn.memoizedState.tag&1){if(c.flags|=2048,Pr(9,{destroy:void 0},Tg.bind(null,c,p,s,i),null),en===null)throw Error(a(349));S||(ba&127)!==0||Mg(c,i,s)}return s}function Mg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=vc(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Tg(t,i,s,c){i.value=s,i.getSnapshot=c,bg(i)&&Rg(t)}function Cg(t,i,s){return s(function(){bg(i)&&Rg(t)})}function bg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!_i(t,s)}catch{return!0}}function Rg(t){var i=Gs(t,2);i!==null&&di(i,t,2)}function Kf(t){var i=$n();if(typeof t=="function"){var s=t;if(t=s(),Ks){De(!0);try{s()}finally{De(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i}function wg(t,i,s,c){return t.baseState=s,Qf(t,Qt,typeof c=="function"?c:Ra)}function Tx(t,i,s,c,p){if(Mc(t))throw Error(a(485));if(t=i.action,t!==null){var S={payload:p,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){S.listeners.push(M)}};P.T!==null?s(!0):S.isTransition=!1,c(S),s=i.pending,s===null?(S.next=i.pending=S,Dg(i,S)):(S.next=s.next,i.pending=s.next=S)}}function Dg(t,i){var s=i.action,c=i.payload,p=t.state;if(i.isTransition){var S=P.T,M={};P.T=M;try{var L=s(p,c),Y=P.S;Y!==null&&Y(M,L),Ig(t,i,L)}catch(le){Zf(t,i,le)}finally{S!==null&&M.types!==null&&(S.types=M.types),P.T=S}}else try{S=s(p,c),Ig(t,i,S)}catch(le){Zf(t,i,le)}}function Ig(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Ug(t,i,c)},function(c){return Zf(t,i,c)}):Ug(t,i,s)}function Ug(t,i,s){i.status="fulfilled",i.value=s,Bg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Dg(t,s)))}function Zf(t,i,s){var c=t.pending;if(t.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=s,Bg(i),i=i.next;while(i!==c)}t.action=null}function Bg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Lg(t,i){return i}function Fg(t,i){if(bt){var s=en.formState;if(s!==null){e:{var c=_t;if(bt){if(an){t:{for(var p=an,S=Oi;p.nodeType!==8;){if(!S){p=null;break t}if(p=zi(p.nextSibling),p===null){p=null;break t}}S=p.data,p=S==="F!"||S==="F"?p:null}if(p){an=zi(p.nextSibling),c=p.data==="F!";break e}}as(c)}c=!1}c&&(i=s[0])}}return s=$n(),s.memoizedState=s.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lg,lastRenderedState:i},s.queue=c,s=e0.bind(null,_t,c),c.dispatch=s,c=Kf(!1),S=id.bind(null,_t,!1,c.queue),c=$n(),p={state:i,dispatch:null,action:t,pending:null},c.queue=p,s=Tx.bind(null,_t,p,S,s),p.dispatch=s,c.memoizedState=t,[i,s,!1]}function Pg(t){var i=Sn();return Og(i,Qt,t)}function Og(t,i,s){if(i=Qf(t,i,Lg)[0],t=xc(Ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=el(i)}catch(M){throw M===Ir?fc:M}else c=i;i=Sn();var p=i.queue,S=p.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,Pr(9,{destroy:void 0},Cx.bind(null,p,s),null)),[c,S,t]}function Cx(t,i){t.action=i}function Ng(t){var i=Sn(),s=Qt;if(s!==null)return Og(i,s,t);Sn(),i=i.memoizedState,s=Sn();var c=s.queue.dispatch;return s.memoizedState=t,[i,c,!1]}function Pr(t,i,s,c){return t={tag:t,create:s,deps:c,inst:i,next:null},i=_t.updateQueue,i===null&&(i=vc(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,i.lastEffect=t),t}function zg(){return Sn().memoizedState}function yc(t,i,s,c){var p=$n();_t.flags|=t,p.memoizedState=Pr(1|i,{destroy:void 0},s,c===void 0?null:c)}function Ec(t,i,s,c){var p=Sn();c=c===void 0?null:c;var S=p.memoizedState.inst;Qt!==null&&c!==null&&Vf(c,Qt.memoizedState.deps)?p.memoizedState=Pr(i,S,s,c):(_t.flags|=t,p.memoizedState=Pr(1|i,S,s,c))}function Hg(t,i){yc(8390656,8,t,i)}function Jf(t,i){Ec(2048,8,t,i)}function bx(t){_t.flags|=4;var i=_t.updateQueue;if(i===null)i=vc(),_t.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Gg(t){var i=Sn().memoizedState;return bx({ref:i,nextImpl:t}),function(){if((zt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Vg(t,i){return Ec(4,2,t,i)}function kg(t,i){return Ec(4,4,t,i)}function Xg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Wg(t,i,s){s=s!=null?s.concat([t]):null,Ec(4,4,Xg.bind(null,i,t),s)}function $f(){}function qg(t,i){var s=Sn();i=i===void 0?null:i;var c=s.memoizedState;return i!==null&&Vf(i,c[1])?c[0]:(s.memoizedState=[t,i],t)}function Yg(t,i){var s=Sn();i=i===void 0?null:i;var c=s.memoizedState;if(i!==null&&Vf(i,c[1]))return c[0];if(c=t(),Ks){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[c,i],c}function ed(t,i,s){return s===void 0||(ba&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Q0(),_t.lanes|=t,hs|=t,s)}function Qg(t,i,s,c){return _i(s,i)?s:Br.current!==null?(t=ed(t,s,c),_i(t,i)||(En=!0),t):(ba&42)===0||(ba&1073741824)!==0&&(Tt&261930)===0?(En=!0,t.memoizedState=s):(t=Q0(),_t.lanes|=t,hs|=t,i)}function jg(t,i,s,c,p){var S=H.p;H.p=S!==0&&8>S?S:8;var M=P.T,L={};P.T=L,id(t,!1,i,s);try{var Y=p(),le=P.S;if(le!==null&&le(L,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var _e=yx(Y,c);tl(t,i,_e,Mi(t))}else tl(t,i,c,Mi(t))}catch(ye){tl(t,i,{then:function(){},status:"rejected",reason:ye},Mi())}finally{H.p=S,M!==null&&L.types!==null&&(M.types=L.types),P.T=M}}function Rx(){}function td(t,i,s,c){if(t.tag!==5)throw Error(a(476));var p=Kg(t).queue;jg(t,p,i,Z,s===null?Rx:function(){return Zg(t),s(c)})}function Kg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:Z},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Zg(t){var i=Kg(t);i.next===null&&(i=t.alternate.memoizedState),tl(t,i.next.queue,{},Mi())}function nd(){return Vn(_l)}function Jg(){return Sn().memoizedState}function $g(){return Sn().memoizedState}function wx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Mi();t=os(s);var c=ls(i,t,s);c!==null&&(di(c,i,s),Ko(c,i,s)),i={cache:If()},t.payload=i;return}i=i.return}}function Dx(t,i,s){var c=Mi();s={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Mc(t)?t0(i,s):(s=Af(t,i,s,c),s!==null&&(di(s,t,c),n0(s,i,c)))}function e0(t,i,s){var c=Mi();tl(t,i,s,c)}function tl(t,i,s,c){var p={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Mc(t))t0(i,p);else{var S=t.alternate;if(t.lanes===0&&(S===null||S.lanes===0)&&(S=i.lastRenderedReducer,S!==null))try{var M=i.lastRenderedState,L=S(M,s);if(p.hasEagerState=!0,p.eagerState=L,_i(L,M))return ac(t,i,p,0),en===null&&ic(),!1}catch{}if(s=Af(t,i,p,c),s!==null)return di(s,t,c),n0(s,i,c),!0}return!1}function id(t,i,s,c){if(c={lane:2,revertLane:Fd(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Mc(t)){if(i)throw Error(a(479))}else i=Af(t,s,c,2),i!==null&&di(i,t,2)}function Mc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function t0(t,i){Lr=Sc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function n0(t,i,s){if((s&4194048)!==0){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,Do(t,s)}}var nl={readContext:Vn,use:Ac,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};nl.useEffectEvent=pn;var i0={readContext:Vn,use:Ac,useCallback:function(t,i){return $n().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:Hg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,yc(4194308,4,Xg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return yc(4194308,4,t,i)},useInsertionEffect:function(t,i){yc(4,2,t,i)},useMemo:function(t,i){var s=$n();i=i===void 0?null:i;var c=t();if(Ks){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[c,i],c},useReducer:function(t,i,s){var c=$n();if(s!==void 0){var p=s(i);if(Ks){De(!0);try{s(i)}finally{De(!1)}}}else p=i;return c.memoizedState=c.baseState=p,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:p},c.queue=t,t=t.dispatch=Dx.bind(null,_t,t),[c.memoizedState,t]},useRef:function(t){var i=$n();return t={current:t},i.memoizedState=t},useState:function(t){t=Kf(t);var i=t.queue,s=e0.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:$f,useDeferredValue:function(t,i){var s=$n();return ed(s,t,i)},useTransition:function(){var t=Kf(!1);return t=jg.bind(null,_t,t.queue,!0,!1),$n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var c=_t,p=$n();if(bt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),en===null)throw Error(a(349));(Tt&127)!==0||Mg(c,i,s)}p.memoizedState=s;var S={value:s,getSnapshot:i};return p.queue=S,Hg(Cg.bind(null,c,S,t),[t]),c.flags|=2048,Pr(9,{destroy:void 0},Tg.bind(null,c,S,s,i),null),s},useId:function(){var t=$n(),i=en.identifierPrefix;if(bt){var s=la,c=oa;s=(c&~(1<<32-Be(c)-1)).toString(32)+s,i="_"+i+"R_"+s,s=_c++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Ex++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:nd,useFormState:Fg,useActionState:Fg,useOptimistic:function(t){var i=$n();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=id.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:Yf,useCacheRefresh:function(){return $n().memoizedState=wx.bind(null,_t)},useEffectEvent:function(t){var i=$n(),s={impl:t};return i.memoizedState=s,function(){if((zt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},ad={readContext:Vn,use:Ac,useCallback:qg,useContext:Vn,useEffect:Jf,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:kg,useMemo:Yg,useReducer:xc,useRef:zg,useState:function(){return xc(Ra)},useDebugValue:$f,useDeferredValue:function(t,i){var s=Sn();return Qg(s,Qt.memoizedState,t,i)},useTransition:function(){var t=xc(Ra)[0],i=Sn().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:Eg,useId:Jg,useHostTransitionStatus:nd,useFormState:Pg,useActionState:Pg,useOptimistic:function(t,i){var s=Sn();return wg(s,Qt,t,i)},useMemoCache:Yf,useCacheRefresh:$g};ad.useEffectEvent=Gg;var a0={readContext:Vn,use:Ac,useCallback:qg,useContext:Vn,useEffect:Jf,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:kg,useMemo:Yg,useReducer:jf,useRef:zg,useState:function(){return jf(Ra)},useDebugValue:$f,useDeferredValue:function(t,i){var s=Sn();return Qt===null?ed(s,t,i):Qg(s,Qt.memoizedState,t,i)},useTransition:function(){var t=jf(Ra)[0],i=Sn().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:Eg,useId:Jg,useHostTransitionStatus:nd,useFormState:Ng,useActionState:Ng,useOptimistic:function(t,i){var s=Sn();return Qt!==null?wg(s,Qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Yf,useCacheRefresh:$g};a0.useEffectEvent=Gg;function sd(t,i,s,c){i=t.memoizedState,s=s(c,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var rd={enqueueSetState:function(t,i,s){t=t._reactInternals;var c=Mi(),p=os(c);p.payload=i,s!=null&&(p.callback=s),i=ls(t,p,c),i!==null&&(di(i,t,c),Ko(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var c=Mi(),p=os(c);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=ls(t,p,c),i!==null&&(di(i,t,c),Ko(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Mi(),c=os(s);c.tag=2,i!=null&&(c.callback=i),i=ls(t,c,s),i!==null&&(di(i,t,s),Ko(i,t,s))}};function s0(t,i,s,c,p,S,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,S,M):i.prototype&&i.prototype.isPureReactComponent?!Vo(s,c)||!Vo(p,S):!0}function r0(t,i,s,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==t&&rd.enqueueReplaceState(i,i.state,null)}function Zs(t,i){var s=i;if("ref"in i){s={};for(var c in i)c!=="ref"&&(s[c]=i[c])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var p in t)s[p]===void 0&&(s[p]=t[p])}return s}function o0(t){nc(t)}function l0(t){console.error(t)}function c0(t){nc(t)}function Tc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function u0(t,i,s){try{var c=t.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function od(t,i,s){return s=os(s),s.tag=3,s.payload={element:null},s.callback=function(){Tc(t,i)},s}function f0(t){return t=os(t),t.tag=3,t}function d0(t,i,s,c){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var S=c.value;t.payload=function(){return p(S)},t.callback=function(){u0(i,s,c)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){u0(i,s,c),typeof p!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var L=c.stack;this.componentDidCatch(c.value,{componentStack:L!==null?L:""})})}function Ix(t,i,s,c,p){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=s.alternate,i!==null&&Rr(i,s,p,!0),s=Ai.current,s!==null){switch(s.tag){case 31:case 13:return Ni===null?Oc():s.alternate===null&&mn===0&&(mn=3),s.flags&=-257,s.flags|=65536,s.lanes=p,c===dc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([c]):i.add(c),Ud(t,c,p)),!1;case 22:return s.flags|=65536,c===dc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([c]):s.add(c)),Ud(t,c,p)),!1}throw Error(a(435,s.tag))}return Ud(t,c,p),Oc(),!1}if(bt)return i=Ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==Cf&&(t=Error(a(422),{cause:c}),Wo(Li(t,s)))):(c!==Cf&&(i=Error(a(423),{cause:c}),Wo(Li(i,s))),t=t.current.alternate,t.flags|=65536,p&=-p,t.lanes|=p,c=Li(c,s),p=od(t.stateNode,c,p),Of(t,p),mn!==4&&(mn=2)),!1;var S=Error(a(520),{cause:c});if(S=Li(S,s),ul===null?ul=[S]:ul.push(S),mn!==4&&(mn=2),i===null)return!0;c=Li(c,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=p&-p,s.lanes|=t,t=od(s.stateNode,c,t),Of(s,t),!1;case 1:if(i=s.type,S=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ps===null||!ps.has(S))))return s.flags|=65536,p&=-p,s.lanes|=p,p=f0(p),d0(p,t,s,c),Of(s,p),!1}s=s.return}while(s!==null);return!1}var ld=Error(a(461)),En=!1;function kn(t,i,s,c){i.child=t===null?gg(i,null,s,c):js(i,t.child,s,c)}function h0(t,i,s,c,p){s=s.render;var S=i.ref;if("ref"in c){var M={};for(var L in c)L!=="ref"&&(M[L]=c[L])}else M=c;return Ws(i),c=kf(t,i,s,M,S,p),L=Xf(),t!==null&&!En?(Wf(t,i,p),wa(t,i,p)):(bt&&L&&Mf(i),i.flags|=1,kn(t,i,c,p),i.child)}function p0(t,i,s,c,p){if(t===null){var S=s.type;return typeof S=="function"&&!xf(S)&&S.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=S,m0(t,i,S,c,p)):(t=rc(s.type,null,c,i,i.mode,p),t.ref=i.ref,t.return=i,i.child=t)}if(S=t.child,!gd(t,p)){var M=S.memoizedProps;if(s=s.compare,s=s!==null?s:Vo,s(M,c)&&t.ref===i.ref)return wa(t,i,p)}return i.flags|=1,t=Ea(S,c),t.ref=i.ref,t.return=i,i.child=t}function m0(t,i,s,c,p){if(t!==null){var S=t.memoizedProps;if(Vo(S,c)&&t.ref===i.ref)if(En=!1,i.pendingProps=c=S,gd(t,p))(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,wa(t,i,p)}return cd(t,i,s,c,p)}function g0(t,i,s,c){var p=c.children,S=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(S=S!==null?S.baseLanes|s:s,t!==null){for(c=i.child=t.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~S}else c=0,i.child=null;return S0(t,i,S,s,c)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&uc(i,S!==null?S.cachePool:null),S!==null?vg(i,S):zf(),Ag(i);else return c=i.lanes=536870912,S0(t,i,S!==null?S.baseLanes|s:s,s,c)}else S!==null?(uc(i,S.cachePool),vg(i,S),us(),i.memoizedState=null):(t!==null&&uc(i,null),zf(),us());return kn(t,i,p,s),i.child}function il(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function S0(t,i,s,c,p){var S=Bf();return S=S===null?null:{parent:xn._currentValue,pool:S},i.memoizedState={baseLanes:s,cachePool:S},t!==null&&uc(i,null),zf(),Ag(i),t!==null&&Rr(t,i,c,!0),i.childLanes=p,null}function Cc(t,i){return i=Rc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function _0(t,i,s){return js(i,t.child,null,s),t=Cc(i,i.pendingProps),t.flags|=2,xi(i),i.memoizedState=null,t}function Ux(t,i,s){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(bt){if(c.mode==="hidden")return t=Cc(i,c),i.lanes=536870912,il(null,t);if(Gf(i),(t=an)?(t=DS(t,Oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ns!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},s=tg(t),s.return=i,i.child=s,Gn=i,an=null)):t=null,t===null)throw as(i);return i.lanes=536870912,null}return Cc(i,c)}var S=t.memoizedState;if(S!==null){var M=S.dehydrated;if(Gf(i),p)if(i.flags&256)i.flags&=-257,i=_0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(En||Rr(t,i,s,!1),p=(s&t.childLanes)!==0,En||p){if(c=en,c!==null&&(M=hr(c,s),M!==0&&M!==S.retryLane))throw S.retryLane=M,Gs(t,M),di(c,t,M),ld;Oc(),i=_0(t,i,s)}else t=S.treeContext,an=zi(M.nextSibling),Gn=i,bt=!0,is=null,Oi=!1,t!==null&&ag(i,t),i=Cc(i,c),i.flags|=4096;return i}return t=Ea(t.child,{mode:c.mode,children:c.children}),t.ref=i.ref,i.child=t,t.return=i,t}function bc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function cd(t,i,s,c,p){return Ws(i),s=kf(t,i,s,c,void 0,p),c=Xf(),t!==null&&!En?(Wf(t,i,p),wa(t,i,p)):(bt&&c&&Mf(i),i.flags|=1,kn(t,i,s,p),i.child)}function v0(t,i,s,c,p,S){return Ws(i),i.updateQueue=null,s=yg(i,c,s,p),xg(t),c=Xf(),t!==null&&!En?(Wf(t,i,S),wa(t,i,S)):(bt&&c&&Mf(i),i.flags|=1,kn(t,i,s,S),i.child)}function A0(t,i,s,c,p){if(Ws(i),i.stateNode===null){var S=Mr,M=s.contextType;typeof M=="object"&&M!==null&&(S=Vn(M)),S=new s(c,S),i.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,S.updater=rd,i.stateNode=S,S._reactInternals=i,S=i.stateNode,S.props=c,S.state=i.memoizedState,S.refs={},Ff(i),M=s.contextType,S.context=typeof M=="object"&&M!==null?Vn(M):Mr,S.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(sd(i,s,M,c),S.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(M=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),M!==S.state&&rd.enqueueReplaceState(S,S.state,null),Jo(i,c,S,p),Zo(),S.state=i.memoizedState),typeof S.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(t===null){S=i.stateNode;var L=i.memoizedProps,Y=Zs(s,L);S.props=Y;var le=S.context,_e=s.contextType;M=Mr,typeof _e=="object"&&_e!==null&&(M=Vn(_e));var ye=s.getDerivedStateFromProps;_e=typeof ye=="function"||typeof S.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,_e||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L||le!==M)&&r0(i,S,c,M),rs=!1;var de=i.memoizedState;S.state=de,Jo(i,c,S,p),Zo(),le=i.memoizedState,L||de!==le||rs?(typeof ye=="function"&&(sd(i,s,ye,c),le=i.memoizedState),(Y=rs||s0(i,s,Y,c,de,le,M))?(_e||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=le),S.props=c,S.state=le,S.context=M,c=Y):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{S=i.stateNode,Pf(t,i),M=i.memoizedProps,_e=Zs(s,M),S.props=_e,ye=i.pendingProps,de=S.context,le=s.contextType,Y=Mr,typeof le=="object"&&le!==null&&(Y=Vn(le)),L=s.getDerivedStateFromProps,(le=typeof L=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(M!==ye||de!==Y)&&r0(i,S,c,Y),rs=!1,de=i.memoizedState,S.state=de,Jo(i,c,S,p),Zo();var ge=i.memoizedState;M!==ye||de!==ge||rs||t!==null&&t.dependencies!==null&&lc(t.dependencies)?(typeof L=="function"&&(sd(i,s,L,c),ge=i.memoizedState),(_e=rs||s0(i,s,_e,c,de,ge,Y)||t!==null&&t.dependencies!==null&&lc(t.dependencies))?(le||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(c,ge,Y),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(c,ge,Y)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ge),S.props=c,S.state=ge,S.context=Y,c=_e):(typeof S.componentDidUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),c=!1)}return S=c,bc(t,i),c=(i.flags&128)!==0,S||c?(S=i.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:S.render(),i.flags|=1,t!==null&&c?(i.child=js(i,t.child,null,p),i.child=js(i,null,s,p)):kn(t,i,s,p),i.memoizedState=S.state,t=i.child):t=wa(t,i,p),t}function x0(t,i,s,c){return ks(),i.flags|=256,kn(t,i,s,c),i.child}var ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fd(t){return{baseLanes:t,cachePool:ug()}}function dd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ei),t}function y0(t,i,s){var c=i.pendingProps,p=!1,S=(i.flags&128)!==0,M;if((M=S)||(M=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),M&&(p=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(bt){if(p?cs(i):us(),(t=an)?(t=DS(t,Oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ns!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},s=tg(t),s.return=i,i.child=s,Gn=i,an=null)):t=null,t===null)throw as(i);return Qd(t)?i.lanes=32:i.lanes=536870912,null}var L=c.children;return c=c.fallback,p?(us(),p=i.mode,L=Rc({mode:"hidden",children:L},p),c=Vs(c,p,s,null),L.return=i,c.return=i,L.sibling=c,i.child=L,c=i.child,c.memoizedState=fd(s),c.childLanes=dd(t,M,s),i.memoizedState=ud,il(null,c)):(cs(i),hd(i,L))}var Y=t.memoizedState;if(Y!==null&&(L=Y.dehydrated,L!==null)){if(S)i.flags&256?(cs(i),i.flags&=-257,i=pd(t,i,s)):i.memoizedState!==null?(us(),i.child=t.child,i.flags|=128,i=null):(us(),L=c.fallback,p=i.mode,c=Rc({mode:"visible",children:c.children},p),L=Vs(L,p,s,null),L.flags|=2,c.return=i,L.return=i,c.sibling=L,i.child=c,js(i,t.child,null,s),c=i.child,c.memoizedState=fd(s),c.childLanes=dd(t,M,s),i.memoizedState=ud,i=il(null,c));else if(cs(i),Qd(L)){if(M=L.nextSibling&&L.nextSibling.dataset,M)var le=M.dgst;M=le,c=Error(a(419)),c.stack="",c.digest=M,Wo({value:c,source:null,stack:null}),i=pd(t,i,s)}else if(En||Rr(t,i,s,!1),M=(s&t.childLanes)!==0,En||M){if(M=en,M!==null&&(c=hr(M,s),c!==0&&c!==Y.retryLane))throw Y.retryLane=c,Gs(t,c),di(M,t,c),ld;Yd(L)||Oc(),i=pd(t,i,s)}else Yd(L)?(i.flags|=192,i.child=t.child,i=null):(t=Y.treeContext,an=zi(L.nextSibling),Gn=i,bt=!0,is=null,Oi=!1,t!==null&&ag(i,t),i=hd(i,c.children),i.flags|=4096);return i}return p?(us(),L=c.fallback,p=i.mode,Y=t.child,le=Y.sibling,c=Ea(Y,{mode:"hidden",children:c.children}),c.subtreeFlags=Y.subtreeFlags&65011712,le!==null?L=Ea(le,L):(L=Vs(L,p,s,null),L.flags|=2),L.return=i,c.return=i,c.sibling=L,i.child=c,il(null,c),c=i.child,L=t.child.memoizedState,L===null?L=fd(s):(p=L.cachePool,p!==null?(Y=xn._currentValue,p=p.parent!==Y?{parent:Y,pool:Y}:p):p=ug(),L={baseLanes:L.baseLanes|s,cachePool:p}),c.memoizedState=L,c.childLanes=dd(t,M,s),i.memoizedState=ud,il(t.child,c)):(cs(i),s=t.child,t=s.sibling,s=Ea(s,{mode:"visible",children:c.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function hd(t,i){return i=Rc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Rc(t,i){return t=vi(22,t,null,i),t.lanes=0,t}function pd(t,i,s){return js(i,t.child,null,s),t=hd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function E0(t,i,s){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),wf(t.return,i,s)}function md(t,i,s,c,p,S){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p,treeForkCount:S}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=c,M.tail=s,M.tailMode=p,M.treeForkCount=S)}function M0(t,i,s){var c=i.pendingProps,p=c.revealOrder,S=c.tail;c=c.children;var M=gn.current,L=(M&2)!==0;if(L?(M=M&1|2,i.flags|=128):M&=1,pe(gn,M),kn(t,i,c,s),c=bt?Xo:0,!L&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,s,i);else if(t.tag===19)E0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(p){case"forwards":for(s=i.child,p=null;s!==null;)t=s.alternate,t!==null&&gc(t)===null&&(p=s),s=s.sibling;s=p,s===null?(p=i.child,i.child=null):(p=s.sibling,s.sibling=null),md(i,!1,p,s,S,c);break;case"backwards":case"unstable_legacy-backwards":for(s=null,p=i.child,i.child=null;p!==null;){if(t=p.alternate,t!==null&&gc(t)===null){i.child=p;break}t=p.sibling,p.sibling=s,s=p,p=t}md(i,!0,s,null,S,c);break;case"together":md(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function wa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),hs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Rr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Ea(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Ea(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function gd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&lc(t)))}function Bx(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),ss(i,xn,t.memoizedState.cache),ks();break;case 27:case 5:Ue(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:ss(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Gf(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(cs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?y0(t,i,s):(cs(i),t=wa(t,i,s),t!==null?t.sibling:null);cs(i);break;case 19:var p=(t.flags&128)!==0;if(c=(s&i.childLanes)!==0,c||(Rr(t,i,s,!1),c=(s&i.childLanes)!==0),p){if(c)return M0(t,i,s);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),pe(gn,gn.current),c)break;return null;case 22:return i.lanes=0,g0(t,i,s,i.pendingProps);case 24:ss(i,xn,t.memoizedState.cache)}return wa(t,i,s)}function T0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)En=!0;else{if(!gd(t,s)&&(i.flags&128)===0)return En=!1,Bx(t,i,s);En=(t.flags&131072)!==0}else En=!1,bt&&(i.flags&1048576)!==0&&ig(i,Xo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(t=Ys(i.elementType),i.type=t,typeof t=="function")xf(t)?(c=Zs(t,c),i.tag=1,i=A0(null,i,t,c,s)):(i.tag=0,i=cd(null,i,t,c,s));else{if(t!=null){var p=t.$$typeof;if(p===D){i.tag=11,i=h0(null,i,t,c,s);break e}else if(p===b){i.tag=14,i=p0(null,i,t,c,s);break e}}throw i=W(t)||t,Error(a(306,i,""))}}return i;case 0:return cd(t,i,i.type,i.pendingProps,s);case 1:return c=i.type,p=Zs(c,i.pendingProps),A0(t,i,c,p,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(a(387));c=i.pendingProps;var S=i.memoizedState;p=S.element,Pf(t,i),Jo(i,c,null,s);var M=i.memoizedState;if(c=M.cache,ss(i,xn,c),c!==S.cache&&Df(i,[xn],s,!0),Zo(),c=M.element,S.isDehydrated)if(S={element:c,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=S,i.memoizedState=S,i.flags&256){i=x0(t,i,c,s);break e}else if(c!==p){p=Li(Error(a(424)),i),Wo(p),i=x0(t,i,c,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,an=zi(t.firstChild),Gn=i,bt=!0,is=null,Oi=!0,s=gg(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ks(),c===p){i=wa(t,i,s);break e}kn(t,i,c,s)}i=i.child}return i;case 26:return bc(t,i),t===null?(s=PS(i.type,null,i.pendingProps,null))?i.memoizedState=s:bt||(s=i.type,t=i.pendingProps,c=Xc($.current).createElement(s),c[An]=i,c[Fn]=t,Xn(c,s,t),F(c),i.stateNode=c):i.memoizedState=PS(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ue(i),t===null&&bt&&(c=i.stateNode=BS(i.type,i.pendingProps,$.current),Gn=i,Oi=!0,p=an,_s(i.type)?(jd=p,an=zi(c.firstChild)):an=p),kn(t,i,i.pendingProps.children,s),bc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&bt&&((p=c=an)&&(c=cy(c,i.type,i.pendingProps,Oi),c!==null?(i.stateNode=c,Gn=i,an=zi(c.firstChild),Oi=!1,p=!0):p=!1),p||as(i)),Ue(i),p=i.type,S=i.pendingProps,M=t!==null?t.memoizedProps:null,c=S.children,Xd(p,S)?c=null:M!==null&&Xd(p,M)&&(i.flags|=32),i.memoizedState!==null&&(p=kf(t,i,Mx,null,null,s),_l._currentValue=p),bc(t,i),kn(t,i,c,s),i.child;case 6:return t===null&&bt&&((t=s=an)&&(s=uy(s,i.pendingProps,Oi),s!==null?(i.stateNode=s,Gn=i,an=null,t=!0):t=!1),t||as(i)),null;case 13:return y0(t,i,s);case 4:return be(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=js(i,null,c,s):kn(t,i,c,s),i.child;case 11:return h0(t,i,i.type,i.pendingProps,s);case 7:return kn(t,i,i.pendingProps,s),i.child;case 8:return kn(t,i,i.pendingProps.children,s),i.child;case 12:return kn(t,i,i.pendingProps.children,s),i.child;case 10:return c=i.pendingProps,ss(i,i.type,c.value),kn(t,i,c.children,s),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,Ws(i),p=Vn(p),c=c(p),i.flags|=1,kn(t,i,c,s),i.child;case 14:return p0(t,i,i.type,i.pendingProps,s);case 15:return m0(t,i,i.type,i.pendingProps,s);case 19:return M0(t,i,s);case 31:return Ux(t,i,s);case 22:return g0(t,i,s,i.pendingProps);case 24:return Ws(i),c=Vn(xn),t===null?(p=Bf(),p===null&&(p=en,S=If(),p.pooledCache=S,S.refCount++,S!==null&&(p.pooledCacheLanes|=s),p=S),i.memoizedState={parent:c,cache:p},Ff(i),ss(i,xn,p)):((t.lanes&s)!==0&&(Pf(t,i),Jo(i,null,null,s),Zo()),p=t.memoizedState,S=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),ss(i,xn,c)):(c=S.cache,ss(i,xn,c),c!==p.cache&&Df(i,[xn],s,!0))),kn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Da(t){t.flags|=4}function Sd(t,i,s,c,p){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(p&335544128)===p)if(t.stateNode.complete)t.flags|=8192;else if(J0())t.flags|=8192;else throw Qs=dc,Lf}else t.flags&=-16777217}function C0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!GS(i))if(J0())t.flags|=8192;else throw Qs=dc,Lf}function wc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?kt():536870912,t.lanes|=i,Hr|=i)}function al(t,i){if(!bt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(i)for(var p=t.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=c,t.childLanes=s,i}function Lx(t,i,s){var c=i.pendingProps;switch(Tf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(i),null;case 1:return sn(i),null;case 3:return s=i.stateNode,c=null,t!==null&&(c=t.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Ca(xn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(br(i)?Da(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bf())),sn(i),null;case 26:var p=i.type,S=i.memoizedState;return t===null?(Da(i),S!==null?(sn(i),C0(i,S)):(sn(i),Sd(i,p,null,c,s))):S?S!==t.memoizedState?(Da(i),sn(i),C0(i,S)):(sn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==c&&Da(i),sn(i),Sd(i,p,t,c,s)),null;case 27:if(at(i),s=$.current,p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==c&&Da(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return sn(i),null}t=Me.current,br(i)?sg(i):(t=BS(p,c,s),i.stateNode=t,Da(i))}return sn(i),null;case 5:if(at(i),p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==c&&Da(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return sn(i),null}if(S=Me.current,br(i))sg(i);else{var M=Xc($.current);switch(S){case 1:S=M.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:S=M.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":S=M.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":S=M.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":S=M.createElement("div"),S.innerHTML="<script><\/script>",S=S.removeChild(S.firstChild);break;case"select":S=typeof c.is=="string"?M.createElement("select",{is:c.is}):M.createElement("select"),c.multiple?S.multiple=!0:c.size&&(S.size=c.size);break;default:S=typeof c.is=="string"?M.createElement(p,{is:c.is}):M.createElement(p)}}S[An]=i,S[Fn]=c;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)S.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=S;e:switch(Xn(S,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Da(i)}}return sn(i),Sd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==c&&Da(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(t=$.current,br(i)){if(t=i.stateNode,s=i.memoizedProps,c=null,p=Gn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}t[An]=i,t=!!(t.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||yS(t.nodeValue,s)),t||as(i,!0)}else t=Xc(t).createTextNode(c),t[An]=i,i.stateNode=t}return sn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(c=br(i),s!==null){if(t===null){if(!c)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[An]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;sn(i),t=!1}else s=bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(xi(i),i):(xi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return sn(i),null;case 13:if(c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(p=br(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[An]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;sn(i),p=!1}else p=bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(xi(i),i):(xi(i),null)}return xi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=c!==null,t=t!==null&&t.memoizedState!==null,s&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),S=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(S=c.memoizedState.cachePool.pool),S!==p&&(c.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),wc(i,i.updateQueue),sn(i),null);case 4:return Fe(),t===null&&zd(i.stateNode.containerInfo),sn(i),null;case 10:return Ca(i.type),sn(i),null;case 19:if(ie(gn),c=i.memoizedState,c===null)return sn(i),null;if(p=(i.flags&128)!==0,S=c.rendering,S===null)if(p)al(c,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=gc(t),S!==null){for(i.flags|=128,al(c,!1),t=S.updateQueue,i.updateQueue=t,wc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)eg(s,t),s=s.sibling;return pe(gn,gn.current&1|2),bt&&Ma(i,c.treeForkCount),i.child}t=t.sibling}c.tail!==null&&I()>Lc&&(i.flags|=128,p=!0,al(c,!1),i.lanes=4194304)}else{if(!p)if(t=gc(S),t!==null){if(i.flags|=128,p=!0,t=t.updateQueue,i.updateQueue=t,wc(i,t),al(c,!0),c.tail===null&&c.tailMode==="hidden"&&!S.alternate&&!bt)return sn(i),null}else 2*I()-c.renderingStartTime>Lc&&s!==536870912&&(i.flags|=128,p=!0,al(c,!1),i.lanes=4194304);c.isBackwards?(S.sibling=i.child,i.child=S):(t=c.last,t!==null?t.sibling=S:i.child=S,c.last=S)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=I(),t.sibling=null,s=gn.current,pe(gn,p?s&1|2:s&1),bt&&Ma(i,c.treeForkCount),t):(sn(i),null);case 22:case 23:return xi(i),Hf(),c=i.memoizedState!==null,t!==null?t.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(s&536870912)!==0&&(i.flags&128)===0&&(sn(i),i.subtreeFlags&6&&(i.flags|=8192)):sn(i),s=i.updateQueue,s!==null&&wc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048),t!==null&&ie(qs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ca(xn),sn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Fx(t,i){switch(Tf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ca(xn),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return at(i),null;case 31:if(i.memoizedState!==null){if(xi(i),i.alternate===null)throw Error(a(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(xi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(gn),null;case 4:return Fe(),null;case 10:return Ca(i.type),null;case 22:case 23:return xi(i),Hf(),t!==null&&ie(qs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ca(xn),null;case 25:return null;default:return null}}function b0(t,i){switch(Tf(i),i.tag){case 3:Ca(xn),Fe();break;case 26:case 27:case 5:at(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&xi(i);break;case 13:xi(i);break;case 19:ie(gn);break;case 10:Ca(i.type);break;case 22:case 23:xi(i),Hf(),t!==null&&ie(qs);break;case 24:Ca(xn)}}function sl(t,i){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var p=c.next;s=p;do{if((s.tag&t)===t){c=void 0;var S=s.create,M=s.inst;c=S(),M.destroy=c}s=s.next}while(s!==p)}}catch(L){qt(i,i.return,L)}}function fs(t,i,s){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var S=p.next;c=S;do{if((c.tag&t)===t){var M=c.inst,L=M.destroy;if(L!==void 0){M.destroy=void 0,p=i;var Y=s,le=L;try{le()}catch(_e){qt(p,Y,_e)}}}c=c.next}while(c!==S)}}catch(_e){qt(i,i.return,_e)}}function R0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{_g(i,s)}catch(c){qt(t,t.return,c)}}}function w0(t,i,s){s.props=Zs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(c){qt(t,i,c)}}function rl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var c=t.stateNode;break;case 30:c=t.stateNode;break;default:c=t.stateNode}typeof s=="function"?t.refCleanup=s(c):s.current=c}}catch(p){qt(t,i,p)}}function ca(t,i){var s=t.ref,c=t.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(p){qt(t,i,p)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){qt(t,i,p)}else s.current=null}function D0(t){var i=t.type,s=t.memoizedProps,c=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(p){qt(t,t.return,p)}}function _d(t,i,s){try{var c=t.stateNode;iy(c,t.type,s,i),c[Fn]=i}catch(p){qt(t,t.return,p)}}function I0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&_s(t.type)||t.tag===4}function vd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&_s(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=xa));else if(c!==4&&(c===27&&_s(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Ad(t,i,s),t=t.sibling;t!==null;)Ad(t,i,s),t=t.sibling}function Dc(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(c!==4&&(c===27&&_s(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Dc(t,i,s),t=t.sibling;t!==null;)Dc(t,i,s),t=t.sibling}function U0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var c=t.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Xn(i,c,s),i[An]=t,i[Fn]=s}catch(S){qt(t,t.return,S)}}var Ia=!1,Mn=!1,xd=!1,B0=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function Px(t,i){if(t=t.containerInfo,Vd=Zc,t=Wm(t),pf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{s.nodeType,S.nodeType}catch{s=null;break e}var M=0,L=-1,Y=-1,le=0,_e=0,ye=t,de=null;t:for(;;){for(var ge;ye!==s||p!==0&&ye.nodeType!==3||(L=M+p),ye!==S||c!==0&&ye.nodeType!==3||(Y=M+c),ye.nodeType===3&&(M+=ye.nodeValue.length),(ge=ye.firstChild)!==null;)de=ye,ye=ge;for(;;){if(ye===t)break t;if(de===s&&++le===p&&(L=M),de===S&&++_e===c&&(Y=M),(ge=ye.nextSibling)!==null)break;ye=de,de=ye.parentNode}ye=ge}s=L===-1||Y===-1?null:{start:L,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(kd={focusedElem:t,selectionRange:s},Zc=!1,Bn=i;Bn!==null;)if(i=Bn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Bn=t;else for(;Bn!==null;){switch(i=Bn,S=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)p=t[s],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&S!==null){t=void 0,s=i,p=S.memoizedProps,S=S.memoizedState,c=s.stateNode;try{var Ye=Zs(s.type,p);t=c.getSnapshotBeforeUpdate(Ye,S),c.__reactInternalSnapshotBeforeUpdate=t}catch(ct){qt(s,s.return,ct)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)qd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Bn=t;break}Bn=i.return}}function L0(t,i,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ba(t,s),c&4&&sl(5,s);break;case 1:if(Ba(t,s),c&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){qt(s,s.return,M)}else{var p=Zs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(p,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){qt(s,s.return,M)}}c&64&&R0(s),c&512&&rl(s,s.return);break;case 3:if(Ba(t,s),c&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{_g(t,i)}catch(M){qt(s,s.return,M)}}break;case 27:i===null&&c&4&&U0(s);case 26:case 5:Ba(t,s),i===null&&c&4&&D0(s),c&512&&rl(s,s.return);break;case 12:Ba(t,s);break;case 31:Ba(t,s),c&4&&O0(t,s);break;case 13:Ba(t,s),c&4&&N0(t,s),c&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Wx.bind(null,s),fy(t,s))));break;case 22:if(c=s.memoizedState!==null||Ia,!c){i=i!==null&&i.memoizedState!==null||Mn,p=Ia;var S=Mn;Ia=c,(Mn=i)&&!S?La(t,s,(s.subtreeFlags&8772)!==0):Ba(t,s),Ia=p,Mn=S}break;case 30:break;default:Ba(t,s)}}function F0(t){var i=t.alternate;i!==null&&(t.alternate=null,F0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Lo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,li=!1;function Ua(t,i,s){for(s=s.child;s!==null;)P0(t,i,s),s=s.sibling}function P0(t,i,s){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:Mn||ca(s,i),Ua(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||ca(s,i);var c=ln,p=li;_s(s.type)&&(ln=s.stateNode,li=!1),Ua(t,i,s),ml(s.stateNode),ln=c,li=p;break;case 5:Mn||ca(s,i);case 6:if(c=ln,p=li,ln=null,Ua(t,i,s),ln=c,li=p,ln!==null)if(li)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(S){qt(s,i,S)}else try{ln.removeChild(s.stateNode)}catch(S){qt(s,i,S)}break;case 18:ln!==null&&(li?(t=ln,RS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Qr(t)):RS(ln,s.stateNode));break;case 4:c=ln,p=li,ln=s.stateNode.containerInfo,li=!0,Ua(t,i,s),ln=c,li=p;break;case 0:case 11:case 14:case 15:fs(2,s,i),Mn||fs(4,s,i),Ua(t,i,s);break;case 1:Mn||(ca(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"&&w0(s,i,c)),Ua(t,i,s);break;case 21:Ua(t,i,s);break;case 22:Mn=(c=Mn)||s.memoizedState!==null,Ua(t,i,s),Mn=c;break;default:Ua(t,i,s)}}function O0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qr(t)}catch(s){qt(i,i.return,s)}}}function N0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qr(t)}catch(s){qt(i,i.return,s)}}function Ox(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new B0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new B0),i;default:throw Error(a(435,t.tag))}}function Ic(t,i){var s=Ox(t);i.forEach(function(c){if(!s.has(c)){s.add(c);var p=qx.bind(null,t,c);c.then(p,p)}})}function ci(t,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c],S=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 27:if(_s(L.type)){ln=L.stateNode,li=!1;break e}break;case 5:ln=L.stateNode,li=!1;break e;case 3:case 4:ln=L.stateNode.containerInfo,li=!0;break e}L=L.return}if(ln===null)throw Error(a(160));P0(S,M,p),ln=null,li=!1,S=p.alternate,S!==null&&(S.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)z0(i,t),i=i.sibling}var $i=null;function z0(t,i){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(i,t),ui(t),c&4&&(fs(3,t,t.return),sl(3,t),fs(5,t,t.return));break;case 1:ci(i,t),ui(t),c&512&&(Mn||s===null||ca(s,s.return)),c&64&&Ia&&(t=t.updateQueue,t!==null&&(c=t.callbacks,c!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var p=$i;if(ci(i,t),ui(t),c&512&&(Mn||s===null||ca(s,s.return)),c&4){var S=s!==null?s.memoizedState:null;if(c=t.memoizedState,s===null)if(c===null)if(t.stateNode===null){e:{c=t.type,s=t.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":S=p.getElementsByTagName("title")[0],(!S||S[Ps]||S[An]||S.namespaceURI==="http://www.w3.org/2000/svg"||S.hasAttribute("itemprop"))&&(S=p.createElement(c),p.head.insertBefore(S,p.querySelector("head > title"))),Xn(S,c,s),S[An]=t,F(S),c=S;break e;case"link":var M=zS("link","href",p).get(c+(s.href||""));if(M){for(var L=0;L<M.length;L++)if(S=M[L],S.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&S.getAttribute("rel")===(s.rel==null?null:s.rel)&&S.getAttribute("title")===(s.title==null?null:s.title)&&S.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(L,1);break t}}S=p.createElement(c),Xn(S,c,s),p.head.appendChild(S);break;case"meta":if(M=zS("meta","content",p).get(c+(s.content||""))){for(L=0;L<M.length;L++)if(S=M[L],S.getAttribute("content")===(s.content==null?null:""+s.content)&&S.getAttribute("name")===(s.name==null?null:s.name)&&S.getAttribute("property")===(s.property==null?null:s.property)&&S.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&S.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(L,1);break t}}S=p.createElement(c),Xn(S,c,s),p.head.appendChild(S);break;default:throw Error(a(468,c))}S[An]=t,F(S),c=S}t.stateNode=c}else HS(p,t.type,t.stateNode);else t.stateNode=NS(p,c,t.memoizedProps);else S!==c?(S===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):S.count--,c===null?HS(p,t.type,t.stateNode):NS(p,c,t.memoizedProps)):c===null&&t.stateNode!==null&&_d(t,t.memoizedProps,s.memoizedProps)}break;case 27:ci(i,t),ui(t),c&512&&(Mn||s===null||ca(s,s.return)),s!==null&&c&4&&_d(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ci(i,t),ui(t),c&512&&(Mn||s===null||ca(s,s.return)),t.flags&32){p=t.stateNode;try{Cn(p,"")}catch(Ye){qt(t,t.return,Ye)}}c&4&&t.stateNode!=null&&(p=t.memoizedProps,_d(t,p,s!==null?s.memoizedProps:p)),c&1024&&(xd=!0);break;case 6:if(ci(i,t),ui(t),c&4){if(t.stateNode===null)throw Error(a(162));c=t.memoizedProps,s=t.stateNode;try{s.nodeValue=c}catch(Ye){qt(t,t.return,Ye)}}break;case 3:if(Yc=null,p=$i,$i=Wc(i.containerInfo),ci(i,t),$i=p,ui(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(Ye){qt(t,t.return,Ye)}xd&&(xd=!1,H0(t));break;case 4:c=$i,$i=Wc(t.stateNode.containerInfo),ci(i,t),ui(t),$i=c;break;case 12:ci(i,t),ui(t);break;case 31:ci(i,t),ui(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Ic(t,c)));break;case 13:ci(i,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Bc=I()),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Ic(t,c)));break;case 22:p=t.memoizedState!==null;var Y=s!==null&&s.memoizedState!==null,le=Ia,_e=Mn;if(Ia=le||p,Mn=_e||Y,ci(i,t),Mn=_e,Ia=le,ui(t),c&8192)e:for(i=t.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(s===null||Y||Ia||Mn||Js(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){Y=s=i;try{if(S=Y.stateNode,p)M=S.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{L=Y.stateNode;var ye=Y.memoizedProps.style,de=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;L.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(Ye){qt(Y,Y.return,Ye)}}}else if(i.tag===6){if(s===null){Y=i;try{Y.stateNode.nodeValue=p?"":Y.memoizedProps}catch(Ye){qt(Y,Y.return,Ye)}}}else if(i.tag===18){if(s===null){Y=i;try{var ge=Y.stateNode;p?wS(ge,!0):wS(Y.stateNode,!1)}catch(Ye){qt(Y,Y.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=t.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Ic(t,s))));break;case 19:ci(i,t),ui(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,Ic(t,c)));break;case 30:break;case 21:break;default:ci(i,t),ui(t)}}function ui(t){var i=t.flags;if(i&2){try{for(var s,c=t.return;c!==null;){if(I0(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var p=s.stateNode,S=vd(t);Dc(t,S,p);break;case 5:var M=s.stateNode;s.flags&32&&(Cn(M,""),s.flags&=-33);var L=vd(t);Dc(t,L,M);break;case 3:case 4:var Y=s.stateNode.containerInfo,le=vd(t);Ad(t,le,Y);break;default:throw Error(a(161))}}catch(_e){qt(t,t.return,_e)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function H0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;H0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ba(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)L0(t,i.alternate,i),i=i.sibling}function Js(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:fs(4,i,i.return),Js(i);break;case 1:ca(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&w0(i,i.return,s),Js(i);break;case 27:ml(i.stateNode);case 26:case 5:ca(i,i.return),Js(i);break;case 22:i.memoizedState===null&&Js(i);break;case 30:Js(i);break;default:Js(i)}t=t.sibling}}function La(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=t,S=i,M=S.flags;switch(S.tag){case 0:case 11:case 15:La(p,S,s),sl(4,S);break;case 1:if(La(p,S,s),c=S,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(le){qt(c,c.return,le)}if(c=S,p=c.updateQueue,p!==null){var L=c.stateNode;try{var Y=p.shared.hiddenCallbacks;if(Y!==null)for(p.shared.hiddenCallbacks=null,p=0;p<Y.length;p++)Sg(Y[p],L)}catch(le){qt(c,c.return,le)}}s&&M&64&&R0(S),rl(S,S.return);break;case 27:U0(S);case 26:case 5:La(p,S,s),s&&c===null&&M&4&&D0(S),rl(S,S.return);break;case 12:La(p,S,s);break;case 31:La(p,S,s),s&&M&4&&O0(p,S);break;case 13:La(p,S,s),s&&M&4&&N0(p,S);break;case 22:S.memoizedState===null&&La(p,S,s),rl(S,S.return);break;case 30:break;default:La(p,S,s)}i=i.sibling}}function yd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&qo(s))}function Ed(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t))}function ea(t,i,s,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)G0(t,i,s,c),i=i.sibling}function G0(t,i,s,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:ea(t,i,s,c),p&2048&&sl(9,i);break;case 1:ea(t,i,s,c);break;case 3:ea(t,i,s,c),p&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t)));break;case 12:if(p&2048){ea(t,i,s,c),t=i.stateNode;try{var S=i.memoizedProps,M=S.id,L=S.onPostCommit;typeof L=="function"&&L(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Y){qt(i,i.return,Y)}}else ea(t,i,s,c);break;case 31:ea(t,i,s,c);break;case 13:ea(t,i,s,c);break;case 23:break;case 22:S=i.stateNode,M=i.alternate,i.memoizedState!==null?S._visibility&2?ea(t,i,s,c):ol(t,i):S._visibility&2?ea(t,i,s,c):(S._visibility|=2,Or(t,i,s,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&yd(M,i);break;case 24:ea(t,i,s,c),p&2048&&Ed(i.alternate,i);break;default:ea(t,i,s,c)}}function Or(t,i,s,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var S=t,M=i,L=s,Y=c,le=M.flags;switch(M.tag){case 0:case 11:case 15:Or(S,M,L,Y,p),sl(8,M);break;case 23:break;case 22:var _e=M.stateNode;M.memoizedState!==null?_e._visibility&2?Or(S,M,L,Y,p):ol(S,M):(_e._visibility|=2,Or(S,M,L,Y,p)),p&&le&2048&&yd(M.alternate,M);break;case 24:Or(S,M,L,Y,p),p&&le&2048&&Ed(M.alternate,M);break;default:Or(S,M,L,Y,p)}i=i.sibling}}function ol(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,c=i,p=c.flags;switch(c.tag){case 22:ol(s,c),p&2048&&yd(c.alternate,c);break;case 24:ol(s,c),p&2048&&Ed(c.alternate,c);break;default:ol(s,c)}i=i.sibling}}var ll=8192;function Nr(t,i,s){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)V0(t,i,s),t=t.sibling}function V0(t,i,s){switch(t.tag){case 26:Nr(t,i,s),t.flags&ll&&t.memoizedState!==null&&Ey(s,$i,t.memoizedState,t.memoizedProps);break;case 5:Nr(t,i,s);break;case 3:case 4:var c=$i;$i=Wc(t.stateNode.containerInfo),Nr(t,i,s),$i=c;break;case 22:t.memoizedState===null&&(c=t.alternate,c!==null&&c.memoizedState!==null?(c=ll,ll=16777216,Nr(t,i,s),ll=c):Nr(t,i,s));break;default:Nr(t,i,s)}}function k0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function cl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Bn=c,W0(c,t)}k0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X0(t),t=t.sibling}function X0(t){switch(t.tag){case 0:case 11:case 15:cl(t),t.flags&2048&&fs(9,t,t.return);break;case 3:cl(t);break;case 12:cl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Uc(t)):cl(t);break;default:cl(t)}}function Uc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Bn=c,W0(c,t)}k0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:fs(8,i,i.return),Uc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Uc(i));break;default:Uc(i)}t=t.sibling}}function W0(t,i){for(;Bn!==null;){var s=Bn;switch(s.tag){case 0:case 11:case 15:fs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:qo(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,Bn=c;else e:for(s=t;Bn!==null;){c=Bn;var p=c.sibling,S=c.return;if(F0(c),c===s){Bn=null;break e}if(p!==null){p.return=S,Bn=p;break e}Bn=S}}}var Nx={getCacheForType:function(t){var i=Vn(xn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Vn(xn).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,zt=0,en=null,Et=null,Tt=0,Wt=0,yi=null,ds=!1,zr=!1,Md=!1,Fa=0,mn=0,hs=0,$s=0,Td=0,Ei=0,Hr=0,ul=null,fi=null,Cd=!1,Bc=0,q0=0,Lc=1/0,Fc=null,ps=null,bn=0,ms=null,Gr=null,Pa=0,bd=0,Rd=null,Y0=null,fl=0,wd=null;function Mi(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:P.T!==null?Fd():Uo()}function Q0(){if(Ei===0)if((Tt&536870912)===0||bt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Ei=t}else Ei=536870912;return t=Ai.current,t!==null&&(t.flags|=32),Ei}function di(t,i,s){(t===en&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),gs(t,Tt,Ei,!1)),Qn(t,s),((zt&2)===0||t!==en)&&(t===en&&((zt&2)===0&&($s|=s),mn===4&&gs(t,Tt,Ei,!1)),ua(t))}function j0(t,i,s){if((zt&6)!==0)throw Error(a(327));var c=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),p=c?Vx(t,i):Id(t,i,!0),S=c;do{if(p===0){zr&&!c&&gs(t,i,0,!1);break}else{if(s=t.current.alternate,S&&!Hx(s)){p=Id(t,i,!1),S=!1;continue}if(p===2){if(S=i,t.errorRecoveryDisabledLanes&S)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var L=t;p=ul;var Y=L.current.memoizedState.isDehydrated;if(Y&&(Vr(L,M).flags|=256),M=Id(L,M,!1),M!==2){if(Md&&!Y){L.errorRecoveryDisabledLanes|=S,$s|=S,p=4;break e}S=fi,fi=p,S!==null&&(fi===null?fi=S:fi.push.apply(fi,S))}p=M}if(S=!1,p!==2)continue}}if(p===1){Vr(t,0),gs(t,i,0,!0);break}e:{switch(c=t,S=p,S){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:gs(c,i,Ei,!ds);break e;case 2:fi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=Bc+300-I(),10<p)){if(gs(c,i,Ei,!ds),Ae(c,0,!0)!==0)break e;Pa=i,c.timeoutHandle=CS(K0.bind(null,c,s,fi,Fc,Cd,i,Ei,$s,Hr,ds,S,"Throttled",-0,0),p);break e}K0(c,s,fi,Fc,Cd,i,Ei,$s,Hr,ds,S,null,-0,0)}}break}while(!0);ua(t)}function K0(t,i,s,c,p,S,M,L,Y,le,_e,ye,de,ge){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},V0(i,S,ye);var Ye=(S&62914560)===S?Bc-I():(S&4194048)===S?q0-I():0;if(Ye=My(ye,Ye),Ye!==null){Pa=S,t.cancelPendingCommit=Ye(aS.bind(null,t,i,S,s,c,p,M,L,Y,_e,ye,null,de,ge)),gs(t,S,M,!le);return}}aS(t,i,S,s,c,p,M,L,Y)}function Hx(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var p=s[c],S=p.getSnapshot;p=p.value;try{if(!_i(S(),p))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gs(t,i,s,c){i&=~Td,i&=~$s,t.suspendedLanes|=i,t.pingedLanes&=~i,c&&(t.warmLanes|=i),c=t.expirationTimes;for(var p=i;0<p;){var S=31-Be(p),M=1<<S;c[S]=-1,p&=~M}s!==0&&Yl(t,s,i)}function Pc(){return(zt&6)===0?(dl(0),!1):!0}function Dd(){if(Et!==null){if(Wt===0)var t=Et.return;else t=Et,Ta=Xs=null,qf(t),Ur=null,Qo=0,t=Et;for(;t!==null;)b0(t.alternate,t),t=t.return;Et=null}}function Vr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ry(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Pa=0,Dd(),en=t,Et=s=Ea(t.current,null),Tt=i,Wt=0,yi=null,ds=!1,zr=Ie(t,i),Md=!1,Hr=Ei=Td=$s=hs=mn=0,fi=ul=null,Cd=!1,(i&8)!==0&&(i|=i&32);var c=t.entangledLanes;if(c!==0)for(t=t.entanglements,c&=i;0<c;){var p=31-Be(c),S=1<<p;i|=t[p],c&=~S}return Fa=i,ic(),s}function Z0(t,i){_t=null,P.H=nl,i===Ir||i===fc?(i=hg(),Wt=3):i===Lf?(i=hg(),Wt=4):Wt=i===ld?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yi=i,Et===null&&(mn=1,Tc(t,Li(i,t.current)))}function J0(){var t=Ai.current;return t===null?!0:(Tt&4194048)===Tt?Ni===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Ni:!1}function $0(){var t=P.H;return P.H=nl,t===null?nl:t}function eS(){var t=P.A;return P.A=Nx,t}function Oc(){mn=4,ds||(Tt&4194048)!==Tt&&Ai.current!==null||(zr=!0),(hs&134217727)===0&&($s&134217727)===0||en===null||gs(en,Tt,Ei,!1)}function Id(t,i,s){var c=zt;zt|=2;var p=$0(),S=eS();(en!==t||Tt!==i)&&(Fc=null,Vr(t,i)),i=!1;var M=mn;e:do try{if(Wt!==0&&Et!==null){var L=Et,Y=yi;switch(Wt){case 8:Dd(),M=6;break e;case 3:case 2:case 9:case 6:Ai.current===null&&(i=!0);var le=Wt;if(Wt=0,yi=null,kr(t,L,Y,le),s&&zr){M=0;break e}break;default:le=Wt,Wt=0,yi=null,kr(t,L,Y,le)}}Gx(),M=mn;break}catch(_e){Z0(t,_e)}while(!0);return i&&t.shellSuspendCounter++,Ta=Xs=null,zt=c,P.H=p,P.A=S,Et===null&&(en=null,Tt=0,ic()),M}function Gx(){for(;Et!==null;)tS(Et)}function Vx(t,i){var s=zt;zt|=2;var c=$0(),p=eS();en!==t||Tt!==i?(Fc=null,Lc=I()+500,Vr(t,i)):zr=Ie(t,i);e:do try{if(Wt!==0&&Et!==null){i=Et;var S=yi;t:switch(Wt){case 1:Wt=0,yi=null,kr(t,i,S,1);break;case 2:case 9:if(fg(S)){Wt=0,yi=null,nS(i);break}i=function(){Wt!==2&&Wt!==9||en!==t||(Wt=7),ua(t)},S.then(i,i);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:fg(S)?(Wt=0,yi=null,nS(i)):(Wt=0,yi=null,kr(t,i,S,7));break;case 5:var M=null;switch(Et.tag){case 26:M=Et.memoizedState;case 5:case 27:var L=Et;if(M?GS(M):L.stateNode.complete){Wt=0,yi=null;var Y=L.sibling;if(Y!==null)Et=Y;else{var le=L.return;le!==null?(Et=le,Nc(le)):Et=null}break t}}Wt=0,yi=null,kr(t,i,S,5);break;case 6:Wt=0,yi=null,kr(t,i,S,6);break;case 8:Dd(),mn=6;break e;default:throw Error(a(462))}}kx();break}catch(_e){Z0(t,_e)}while(!0);return Ta=Xs=null,P.H=c,P.A=p,zt=s,Et!==null?0:(en=null,Tt=0,ic(),mn)}function kx(){for(;Et!==null&&!Qe();)tS(Et)}function tS(t){var i=T0(t.alternate,t,Fa);t.memoizedProps=t.pendingProps,i===null?Nc(t):Et=i}function nS(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=v0(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=v0(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:qf(i);default:b0(s,i),i=Et=eg(i,Fa),i=T0(s,i,Fa)}t.memoizedProps=t.pendingProps,i===null?Nc(t):Et=i}function kr(t,i,s,c){Ta=Xs=null,qf(i),Ur=null,Qo=0;var p=i.return;try{if(Ix(t,p,i,s,Tt)){mn=1,Tc(t,Li(s,t.current)),Et=null;return}}catch(S){if(p!==null)throw Et=p,S;mn=1,Tc(t,Li(s,t.current)),Et=null;return}i.flags&32768?(bt||c===1?t=!0:zr||(Tt&536870912)!==0?t=!1:(ds=t=!0,(c===2||c===9||c===3||c===6)&&(c=Ai.current,c!==null&&c.tag===13&&(c.flags|=16384))),iS(i,t)):Nc(i)}function Nc(t){var i=t;do{if((i.flags&32768)!==0){iS(i,ds);return}t=i.return;var s=Lx(i.alternate,i,Fa);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);mn===0&&(mn=5)}function iS(t,i){do{var s=Fx(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);mn=6,Et=null}function aS(t,i,s,c,p,S,M,L,Y){t.cancelPendingCommit=null;do zc();while(bn!==0);if((zt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(S=i.lanes|i.childLanes,S|=vf,ji(t,s,S,M,L,Y),t===en&&(Et=en=null,Tt=0),Gr=i,ms=t,Pa=s,bd=S,Rd=p,Y0=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Yx(Se,function(){return cS(),null})):(t.callbackNode=null,t.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=P.T,P.T=null,p=H.p,H.p=2,M=zt,zt|=4;try{Px(t,i,s)}finally{zt=M,H.p=p,P.T=c}}bn=1,sS(),rS(),oS()}}function sS(){if(bn===1){bn=0;var t=ms,i=Gr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var c=H.p;H.p=2;var p=zt;zt|=4;try{z0(i,t);var S=kd,M=Wm(t.containerInfo),L=S.focusedElem,Y=S.selectionRange;if(M!==L&&L&&L.ownerDocument&&Xm(L.ownerDocument.documentElement,L)){if(Y!==null&&pf(L)){var le=Y.start,_e=Y.end;if(_e===void 0&&(_e=le),"selectionStart"in L)L.selectionStart=le,L.selectionEnd=Math.min(_e,L.value.length);else{var ye=L.ownerDocument||document,de=ye&&ye.defaultView||window;if(de.getSelection){var ge=de.getSelection(),Ye=L.textContent.length,ct=Math.min(Y.start,Ye),Kt=Y.end===void 0?ct:Math.min(Y.end,Ye);!ge.extend&&ct>Kt&&(M=Kt,Kt=ct,ct=M);var ne=km(L,ct),K=km(L,Kt);if(ne&&K&&(ge.rangeCount!==1||ge.anchorNode!==ne.node||ge.anchorOffset!==ne.offset||ge.focusNode!==K.node||ge.focusOffset!==K.offset)){var oe=ye.createRange();oe.setStart(ne.node,ne.offset),ge.removeAllRanges(),ct>Kt?(ge.addRange(oe),ge.extend(K.node,K.offset)):(oe.setEnd(K.node,K.offset),ge.addRange(oe))}}}}for(ye=[],ge=L;ge=ge.parentNode;)ge.nodeType===1&&ye.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<ye.length;L++){var xe=ye[L];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Zc=!!Vd,kd=Vd=null}finally{zt=p,H.p=c,P.T=s}}t.current=i,bn=2}}function rS(){if(bn===2){bn=0;var t=ms,i=Gr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var c=H.p;H.p=2;var p=zt;zt|=4;try{L0(t,i.alternate,i)}finally{zt=p,H.p=c,P.T=s}}bn=3}}function oS(){if(bn===4||bn===3){bn=0,G();var t=ms,i=Gr,s=Pa,c=Y0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?bn=5:(bn=0,Gr=ms=null,lS(t,t.pendingLanes));var p=t.pendingLanes;if(p===0&&(ps=null),pr(s),i=i.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=P.T,p=H.p,H.p=2,P.T=null;try{for(var S=t.onRecoverableError,M=0;M<c.length;M++){var L=c[M];S(L.value,{componentStack:L.stack})}}finally{P.T=i,H.p=p}}(Pa&3)!==0&&zc(),ua(t),p=t.pendingLanes,(s&261930)!==0&&(p&42)!==0?t===wd?fl++:(fl=0,wd=t):fl=0,dl(0)}}function lS(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,qo(i)))}function zc(){return sS(),rS(),oS(),cS()}function cS(){if(bn!==5)return!1;var t=ms,i=bd;bd=0;var s=pr(Pa),c=P.T,p=H.p;try{H.p=32>s?32:s,P.T=null,s=Rd,Rd=null;var S=ms,M=Pa;if(bn=0,Gr=ms=null,Pa=0,(zt&6)!==0)throw Error(a(331));var L=zt;if(zt|=4,X0(S.current),G0(S,S.current,M,s),zt=L,dl(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ue,S)}catch{}return!0}finally{H.p=p,P.T=c,lS(t,i)}}function uS(t,i,s){i=Li(s,i),i=od(t.stateNode,i,2),t=ls(t,i,2),t!==null&&(Qn(t,2),ua(t))}function qt(t,i,s){if(t.tag===3)uS(t,t,s);else for(;i!==null;){if(i.tag===3){uS(i,t,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ps===null||!ps.has(c))){t=Li(s,t),s=f0(2),c=ls(i,s,2),c!==null&&(d0(s,c,i,t),Qn(c,2),ua(c));break}}i=i.return}}function Ud(t,i,s){var c=t.pingCache;if(c===null){c=t.pingCache=new zx;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(s)||(Md=!0,p.add(s),t=Xx.bind(null,t,i,s),i.then(t,t))}function Xx(t,i,s){var c=t.pingCache;c!==null&&c.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Tt&s)===s&&(mn===4||mn===3&&(Tt&62914560)===Tt&&300>I()-Bc?(zt&2)===0&&Vr(t,0):Td|=s,Hr===Tt&&(Hr=0)),ua(t)}function fS(t,i){i===0&&(i=kt()),t=Gs(t,i),t!==null&&(Qn(t,i),ua(t))}function Wx(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),fS(t,s)}function qx(t,i){var s=0;switch(t.tag){case 31:case 13:var c=t.stateNode,p=t.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=t.stateNode;break;case 22:c=t.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),fS(t,s)}function Yx(t,i){return gt(t,i)}var Hc=null,Xr=null,Bd=!1,Gc=!1,Ld=!1,Ss=0;function ua(t){t!==Xr&&t.next===null&&(Xr===null?Hc=Xr=t:Xr=Xr.next=t),Gc=!0,Bd||(Bd=!0,jx())}function dl(t,i){if(!Ld&&Gc){Ld=!0;do for(var s=!1,c=Hc;c!==null;){if(t!==0){var p=c.pendingLanes;if(p===0)var S=0;else{var M=c.suspendedLanes,L=c.pingedLanes;S=(1<<31-Be(42|t)+1)-1,S&=p&~(M&~L),S=S&201326741?S&201326741|1:S?S|2:0}S!==0&&(s=!0,mS(c,S))}else S=Tt,S=Ae(c,c===en?S:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(S&3)===0||Ie(c,S)||(s=!0,mS(c,S));c=c.next}while(s);Ld=!1}}function Qx(){dS()}function dS(){Gc=Bd=!1;var t=0;Ss!==0&&sy()&&(t=Ss);for(var i=I(),s=null,c=Hc;c!==null;){var p=c.next,S=hS(c,i);S===0?(c.next=null,s===null?Hc=p:s.next=p,p===null&&(Xr=s)):(s=c,(t!==0||(S&3)!==0)&&(Gc=!0)),c=p}bn!==0&&bn!==5||dl(t),Ss!==0&&(Ss=0)}function hS(t,i){for(var s=t.suspendedLanes,c=t.pingedLanes,p=t.expirationTimes,S=t.pendingLanes&-62914561;0<S;){var M=31-Be(S),L=1<<M,Y=p[M];Y===-1?((L&s)===0||(L&c)!==0)&&(p[M]=ot(L,i)):Y<=i&&(t.expiredLanes|=L),S&=~L}if(i=en,s=Tt,s=Ae(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c=t.callbackNode,s===0||t===i&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return c!==null&&c!==null&&Ut(c),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(c!==null&&Ut(c),pr(s)){case 2:case 8:s=Te;break;case 32:s=Se;break;case 268435456:s=Pe;break;default:s=Se}return c=pS.bind(null,t),s=gt(s,c),t.callbackPriority=i,t.callbackNode=s,i}return c!==null&&c!==null&&Ut(c),t.callbackPriority=2,t.callbackNode=null,2}function pS(t,i){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(zc()&&t.callbackNode!==s)return null;var c=Tt;return c=Ae(t,t===en?c:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c===0?null:(j0(t,c,i),hS(t,I()),t.callbackNode!=null&&t.callbackNode===s?pS.bind(null,t):null)}function mS(t,i){if(zc())return null;j0(t,i,!0)}function jx(){oy(function(){(zt&6)!==0?gt(ve,Qx):dS()})}function Fd(){if(Ss===0){var t=wr;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Ss=t}return Ss}function gS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jl(""+t)}function SS(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Kx(t,i,s,c,p){if(i==="submit"&&s&&s.stateNode===p){var S=gS((p[Fn]||null).action),M=c.submitter;M&&(i=(i=M[Fn]||null)?gS(i.formAction):M.getAttribute("formAction"),i!==null&&(S=i,M=null));var L=new $l("action","action",null,c,p);t.push({event:L,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ss!==0){var Y=M?SS(p,M):new FormData(p);td(s,{pending:!0,data:Y,method:p.method,action:S},null,Y)}}else typeof S=="function"&&(L.preventDefault(),Y=M?SS(p,M):new FormData(p),td(s,{pending:!0,data:Y,method:p.method,action:S},S,Y))},currentTarget:p}]})}}for(var Pd=0;Pd<_f.length;Pd++){var Od=_f[Pd],Zx=Od.toLowerCase(),Jx=Od[0].toUpperCase()+Od.slice(1);Ji(Zx,"on"+Jx)}Ji(Qm,"onAnimationEnd"),Ji(jm,"onAnimationIteration"),Ji(Km,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(px,"onTransitionRun"),Ji(mx,"onTransitionStart"),Ji(gx,"onTransitionCancel"),Ji(Zm,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function _S(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],p=c.event;c=c.listeners;e:{var S=void 0;if(i)for(var M=c.length-1;0<=M;M--){var L=c[M],Y=L.instance,le=L.currentTarget;if(L=L.listener,Y!==S&&p.isPropagationStopped())break e;S=L,p.currentTarget=le;try{S(p)}catch(_e){nc(_e)}p.currentTarget=null,S=Y}else for(M=0;M<c.length;M++){if(L=c[M],Y=L.instance,le=L.currentTarget,L=L.listener,Y!==S&&p.isPropagationStopped())break e;S=L,p.currentTarget=le;try{S(p)}catch(_e){nc(_e)}p.currentTarget=null,S=Y}}}}function Mt(t,i){var s=i[mr];s===void 0&&(s=i[mr]=new Set);var c=t+"__bubble";s.has(c)||(vS(i,t,2,!1),s.add(c))}function Nd(t,i,s){var c=0;i&&(c|=4),vS(s,t,c,i)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function zd(t){if(!t[Vc]){t[Vc]=!0,te.forEach(function(s){s!=="selectionchange"&&($x.has(s)||Nd(s,!1,t),Nd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Vc]||(i[Vc]=!0,Nd("selectionchange",!1,i))}}function vS(t,i,s,c){switch(QS(i)){case 2:var p=by;break;case 8:p=Ry;break;default:p=eh}s=p.bind(null,i,s,t),p=void 0,!sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?t.addEventListener(i,s,{capture:!0,passive:p}):t.addEventListener(i,s,!0):p!==void 0?t.addEventListener(i,s,{passive:p}):t.addEventListener(i,s,!1)}function Hd(t,i,s,c,p){var S=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var L=c.stateNode.containerInfo;if(L===p)break;if(M===4)for(M=c.return;M!==null;){var Y=M.tag;if((Y===3||Y===4)&&M.stateNode.containerInfo===p)return;M=M.return}for(;L!==null;){if(M=Ja(L),M===null)return;if(Y=M.tag,Y===5||Y===6||Y===26||Y===27){c=S=M;continue e}L=L.parentNode}}c=c.return}Mm(function(){var le=S,_e=nf(s),ye=[];e:{var de=Jm.get(t);if(de!==void 0){var ge=$l,Ye=t;switch(t){case"keypress":if(Zl(s)===0)break e;case"keydown":case"keyup":ge=qA;break;case"focusin":Ye="focus",ge=cf;break;case"focusout":Ye="blur",ge=cf;break;case"beforeblur":case"afterblur":ge=cf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=LA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=jA;break;case Qm:case jm:case Km:ge=OA;break;case Zm:ge=ZA;break;case"scroll":case"scrollend":ge=UA;break;case"wheel":ge=$A;break;case"copy":case"cut":case"paste":ge=zA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=wm;break;case"toggle":case"beforetoggle":ge=tx}var ct=(i&4)!==0,Kt=!ct&&(t==="scroll"||t==="scrollend"),ne=ct?de!==null?de+"Capture":null:de;ct=[];for(var K=le,oe;K!==null;){var xe=K;if(oe=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||oe===null||ne===null||(xe=Fo(K,ne),xe!=null&&ct.push(pl(K,xe,oe))),Kt)break;K=K.return}0<ct.length&&(de=new ge(de,Ye,null,s,_e),ye.push({event:de,listeners:ct}))}}if((i&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",de&&s!==tf&&(Ye=s.relatedTarget||s.fromElement)&&(Ja(Ye)||Ye[Ki]))break e;if((ge||de)&&(de=_e.window===_e?_e:(de=_e.ownerDocument)?de.defaultView||de.parentWindow:window,ge?(Ye=s.relatedTarget||s.toElement,ge=le,Ye=Ye?Ja(Ye):null,Ye!==null&&(Kt=o(Ye),ct=Ye.tag,Ye!==Kt||ct!==5&&ct!==27&&ct!==6)&&(Ye=null)):(ge=null,Ye=le),ge!==Ye)){if(ct=bm,xe="onMouseLeave",ne="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(ct=wm,xe="onPointerLeave",ne="onPointerEnter",K="pointer"),Kt=ge==null?de:Os(ge),oe=Ye==null?de:Os(Ye),de=new ct(xe,K+"leave",ge,s,_e),de.target=Kt,de.relatedTarget=oe,xe=null,Ja(_e)===le&&(ct=new ct(ne,K+"enter",Ye,s,_e),ct.target=oe,ct.relatedTarget=Kt,xe=ct),Kt=xe,ge&&Ye)t:{for(ct=ey,ne=ge,K=Ye,oe=0,xe=ne;xe;xe=ct(xe))oe++;xe=0;for(var st=K;st;st=ct(st))xe++;for(;0<oe-xe;)ne=ct(ne),oe--;for(;0<xe-oe;)K=ct(K),xe--;for(;oe--;){if(ne===K||K!==null&&ne===K.alternate){ct=ne;break t}ne=ct(ne),K=ct(K)}ct=null}else ct=null;ge!==null&&AS(ye,de,ge,ct,!1),Ye!==null&&Kt!==null&&AS(ye,Kt,Ye,ct,!0)}}e:{if(de=le?Os(le):window,ge=de.nodeName&&de.nodeName.toLowerCase(),ge==="select"||ge==="input"&&de.type==="file")var Bt=Om;else if(Fm(de))if(Nm)Bt=fx;else{Bt=cx;var $e=lx}else ge=de.nodeName,!ge||ge.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?le&&Zi(le.elementType)&&(Bt=Om):Bt=ux;if(Bt&&(Bt=Bt(t,le))){Pm(ye,Bt,s,_e);break e}$e&&$e(t,de,le),t==="focusout"&&le&&de.type==="number"&&le.memoizedProps.value!=null&&On(de,"number",de.value)}switch($e=le?Os(le):window,t){case"focusin":(Fm($e)||$e.contentEditable==="true")&&(xr=$e,mf=le,ko=null);break;case"focusout":ko=mf=xr=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,qm(ye,s,_e);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":qm(ye,s,_e)}var vt;if(ff)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Ar?Bm(t,s)&&(Ct="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ct="onCompositionStart");Ct&&(Dm&&s.locale!=="ko"&&(Ar||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Ar&&(vt=Tm()):(ts=_e,rf="value"in ts?ts.value:ts.textContent,Ar=!0)),$e=kc(le,Ct),0<$e.length&&(Ct=new Rm(Ct,t,null,s,_e),ye.push({event:Ct,listeners:$e}),vt?Ct.data=vt:(vt=Lm(s),vt!==null&&(Ct.data=vt)))),(vt=ix?ax(t,s):sx(t,s))&&(Ct=kc(le,"onBeforeInput"),0<Ct.length&&($e=new Rm("onBeforeInput","beforeinput",null,s,_e),ye.push({event:$e,listeners:Ct}),$e.data=vt)),Kx(ye,t,le,s,_e)}_S(ye,i)})}function pl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function kc(t,i){for(var s=i+"Capture",c=[];t!==null;){var p=t,S=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||S===null||(p=Fo(t,s),p!=null&&c.unshift(pl(t,p,S)),p=Fo(t,i),p!=null&&c.push(pl(t,p,S))),t.tag===3)return c;t=t.return}return[]}function ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function AS(t,i,s,c,p){for(var S=i._reactName,M=[];s!==null&&s!==c;){var L=s,Y=L.alternate,le=L.stateNode;if(L=L.tag,Y!==null&&Y===c)break;L!==5&&L!==26&&L!==27||le===null||(Y=le,p?(le=Fo(s,S),le!=null&&M.unshift(pl(s,le,Y))):p||(le=Fo(s,S),le!=null&&M.push(pl(s,le,Y)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function xS(t){return(typeof t=="string"?t:""+t).replace(ty,`
`).replace(ny,"")}function yS(t,i){return i=xS(i),xS(t)===i}function jt(t,i,s,c,p,S){switch(s){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Cn(t,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Cn(t,""+c);break;case"className":rt(t,"class",c);break;case"tabIndex":rt(t,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(t,s,c);break;case"style":Sr(t,c,S);break;case"data":if(i!=="object"){rt(t,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=jl(""+c),t.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof S=="function"&&(s==="formAction"?(i!=="input"&&jt(t,i,"name",p.name,p,null),jt(t,i,"formEncType",p.formEncType,p,null),jt(t,i,"formMethod",p.formMethod,p,null),jt(t,i,"formTarget",p.formTarget,p,null)):(jt(t,i,"encType",p.encType,p,null),jt(t,i,"method",p.method,p,null),jt(t,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(s);break}c=jl(""+c),t.setAttribute(s,c);break;case"onClick":c!=null&&(t.onclick=xa);break;case"onScroll":c!=null&&Mt("scroll",t);break;case"onScrollEnd":c!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":t.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){t.removeAttribute("xlink:href");break}s=jl(""+c),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""+c):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":c===!0?t.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(s,c):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?t.setAttribute(s,c):t.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?t.removeAttribute(s):t.setAttribute(s,c);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ke(t,"popover",c);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ke(t,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=DA.get(s)||s,Ke(t,s,c))}}function Gd(t,i,s,c,p,S){switch(s){case"style":Sr(t,c,S);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof c=="string"?Cn(t,c):(typeof c=="number"||typeof c=="bigint")&&Cn(t,""+c);break;case"onScroll":c!=null&&Mt("scroll",t);break;case"onScrollEnd":c!=null&&Mt("scrollend",t);break;case"onClick":c!=null&&(t.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!me.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),i=s.slice(2,p?s.length-7:void 0),S=t[Fn]||null,S=S!=null?S[s]:null,typeof S=="function"&&t.removeEventListener(i,S,p),typeof c=="function")){typeof S!="function"&&S!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,c,p);break e}s in t?t[s]=c:c===!0?t.setAttribute(s,""):Ke(t,s,c)}}}function Xn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var c=!1,p=!1,S;for(S in s)if(s.hasOwnProperty(S)){var M=s[S];if(M!=null)switch(S){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:jt(t,i,S,M,s,null)}}p&&jt(t,i,"srcSet",s.srcSet,s,null),c&&jt(t,i,"src",s.src,s,null);return;case"input":Mt("invalid",t);var L=S=M=p=null,Y=null,le=null;for(c in s)if(s.hasOwnProperty(c)){var _e=s[c];if(_e!=null)switch(c){case"name":p=_e;break;case"type":M=_e;break;case"checked":Y=_e;break;case"defaultChecked":le=_e;break;case"value":S=_e;break;case"defaultValue":L=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,i));break;default:jt(t,i,c,_e,s,null)}}Aa(t,S,L,Y,le,M,p,!1);return;case"select":Mt("invalid",t),c=M=S=null;for(p in s)if(s.hasOwnProperty(p)&&(L=s[p],L!=null))switch(p){case"value":S=L;break;case"defaultValue":M=L;break;case"multiple":c=L;default:jt(t,i,p,L,s,null)}i=S,s=M,t.multiple=!!c,i!=null?Ui(t,!!c,i,!1):s!=null&&Ui(t,!!c,s,!0);return;case"textarea":Mt("invalid",t),S=p=c=null;for(M in s)if(s.hasOwnProperty(M)&&(L=s[M],L!=null))switch(M){case"value":c=L;break;case"defaultValue":p=L;break;case"children":S=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:jt(t,i,M,L,s,null)}Nn(t,c,p,S);return;case"option":for(Y in s)s.hasOwnProperty(Y)&&(c=s[Y],c!=null)&&(Y==="selected"?t.selected=c&&typeof c!="function"&&typeof c!="symbol":jt(t,i,Y,c,s,null));return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(c=0;c<hl.length;c++)Mt(hl[c],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in s)if(s.hasOwnProperty(le)&&(c=s[le],c!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:jt(t,i,le,c,s,null)}return;default:if(Zi(i)){for(_e in s)s.hasOwnProperty(_e)&&(c=s[_e],c!==void 0&&Gd(t,i,_e,c,s,void 0));return}}for(L in s)s.hasOwnProperty(L)&&(c=s[L],c!=null&&jt(t,i,L,c,s,null))}function iy(t,i,s,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,S=null,M=null,L=null,Y=null,le=null,_e=null;for(ge in s){var ye=s[ge];if(s.hasOwnProperty(ge)&&ye!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":Y=ye;default:c.hasOwnProperty(ge)||jt(t,i,ge,null,c,ye)}}for(var de in c){var ge=c[de];if(ye=s[de],c.hasOwnProperty(de)&&(ge!=null||ye!=null))switch(de){case"type":S=ge;break;case"name":p=ge;break;case"checked":le=ge;break;case"defaultChecked":_e=ge;break;case"value":M=ge;break;case"defaultValue":L=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:ge!==ye&&jt(t,i,de,ge,c,ye)}}Pn(t,M,L,Y,le,_e,S,p);return;case"select":ge=M=L=de=null;for(S in s)if(Y=s[S],s.hasOwnProperty(S)&&Y!=null)switch(S){case"value":break;case"multiple":ge=Y;default:c.hasOwnProperty(S)||jt(t,i,S,null,c,Y)}for(p in c)if(S=c[p],Y=s[p],c.hasOwnProperty(p)&&(S!=null||Y!=null))switch(p){case"value":de=S;break;case"defaultValue":L=S;break;case"multiple":M=S;default:S!==Y&&jt(t,i,p,S,c,Y)}i=L,s=M,c=ge,de!=null?Ui(t,!!s,de,!1):!!c!=!!s&&(i!=null?Ui(t,!!s,i,!0):Ui(t,!!s,s?[]:"",!1));return;case"textarea":ge=de=null;for(L in s)if(p=s[L],s.hasOwnProperty(L)&&p!=null&&!c.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:jt(t,i,L,null,c,p)}for(M in c)if(p=c[M],S=s[M],c.hasOwnProperty(M)&&(p!=null||S!=null))switch(M){case"value":de=p;break;case"defaultValue":ge=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==S&&jt(t,i,M,p,c,S)}Xt(t,de,ge);return;case"option":for(var Ye in s)de=s[Ye],s.hasOwnProperty(Ye)&&de!=null&&!c.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:jt(t,i,Ye,null,c,de));for(Y in c)de=c[Y],ge=s[Y],c.hasOwnProperty(Y)&&de!==ge&&(de!=null||ge!=null)&&(Y==="selected"?t.selected=de&&typeof de!="function"&&typeof de!="symbol":jt(t,i,Y,de,c,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)de=s[ct],s.hasOwnProperty(ct)&&de!=null&&!c.hasOwnProperty(ct)&&jt(t,i,ct,null,c,de);for(le in c)if(de=c[le],ge=s[le],c.hasOwnProperty(le)&&de!==ge&&(de!=null||ge!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:jt(t,i,le,de,c,ge)}return;default:if(Zi(i)){for(var Kt in s)de=s[Kt],s.hasOwnProperty(Kt)&&de!==void 0&&!c.hasOwnProperty(Kt)&&Gd(t,i,Kt,void 0,c,de);for(_e in c)de=c[_e],ge=s[_e],!c.hasOwnProperty(_e)||de===ge||de===void 0&&ge===void 0||Gd(t,i,_e,de,c,ge);return}}for(var ne in s)de=s[ne],s.hasOwnProperty(ne)&&de!=null&&!c.hasOwnProperty(ne)&&jt(t,i,ne,null,c,de);for(ye in c)de=c[ye],ge=s[ye],!c.hasOwnProperty(ye)||de===ge||de==null&&ge==null||jt(t,i,ye,de,c,ge)}function ES(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ay(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),c=0;c<s.length;c++){var p=s[c],S=p.transferSize,M=p.initiatorType,L=p.duration;if(S&&L&&ES(M)){for(M=0,L=p.responseEnd,c+=1;c<s.length;c++){var Y=s[c],le=Y.startTime;if(le>L)break;var _e=Y.transferSize,ye=Y.initiatorType;_e&&ES(ye)&&(Y=Y.responseEnd,M+=_e*(Y<L?1:(L-le)/(Y-le)))}if(--c,i+=8*(S+M)/(p.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vd=null,kd=null;function Xc(t){return t.nodeType===9?t:t.ownerDocument}function MS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TS(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Xd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wd=null;function sy(){var t=window.event;return t&&t.type==="popstate"?t===Wd?!1:(Wd=t,!0):(Wd=null,!1)}var CS=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,bS=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof bS<"u"?function(t){return bS.resolve(null).then(t).catch(ly)}:CS;function ly(t){setTimeout(function(){throw t})}function _s(t){return t==="head"}function RS(t,i){var s=i,c=0;do{var p=s.nextSibling;if(t.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"||s==="/&"){if(c===0){t.removeChild(p),Qr(i);return}c--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")c++;else if(s==="html")ml(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ml(s);for(var S=s.firstChild;S;){var M=S.nextSibling,L=S.nodeName;S[Ps]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&S.rel.toLowerCase()==="stylesheet"||s.removeChild(S),S=M}}else s==="body"&&ml(t.ownerDocument.body);s=p}while(s);Qr(i)}function wS(t,i){var s=t;t=0;do{var c=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=c}while(s)}function qd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":qd(s),Lo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function cy(t,i,s,c){for(;t.nodeType===1;){var p=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(c){if(!t[Ps])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(S=t.getAttribute("rel"),S==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(S!==p.rel||t.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||t.getAttribute("title")!==(p.title==null?null:p.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(S=t.getAttribute("src"),(S!==(p.src==null?null:p.src)||t.getAttribute("type")!==(p.type==null?null:p.type)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&S&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var S=p.name==null?null:""+p.name;if(p.type==="hidden"&&t.getAttribute("name")===S)return t}else return t;if(t=zi(t.nextSibling),t===null)break}return null}function uy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=zi(t.nextSibling),t===null))return null;return t}function DS(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=zi(t.nextSibling),t===null))return null;return t}function Yd(t){return t.data==="$?"||t.data==="$~"}function Qd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fy(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var c=function(){i(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),t._reactRetry=c}}function zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var jd=null;function IS(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return zi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function US(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function BS(t,i,s){switch(i=Xc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Lo(t)}var Hi=new Map,LS=new Set;function Wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oa=H.d;H.d={f:dy,r:hy,D:py,C:my,L:gy,m:Sy,X:vy,S:_y,M:Ay};function dy(){var t=Oa.f(),i=Pc();return t||i}function hy(t){var i=$a(t);i!==null&&i.tag===5&&i.type==="form"?Zg(i):Oa.r(t)}var Wr=typeof document>"u"?null:document;function FS(t,i,s){var c=Wr;if(c&&typeof i=="string"&&i){var p=pt(i);p='link[rel="'+t+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),LS.has(p)||(LS.add(p),t={rel:t,crossOrigin:s,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),Xn(i,"link",t),F(i),c.head.appendChild(i)))}}function py(t){Oa.D(t),FS("dns-prefetch",t,null)}function my(t,i){Oa.C(t,i),FS("preconnect",t,i)}function gy(t,i,s){Oa.L(t,i,s);var c=Wr;if(c&&t&&i){var p='link[rel="preload"][as="'+pt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+pt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+pt(s.imageSizes)+'"]')):p+='[href="'+pt(t)+'"]';var S=p;switch(i){case"style":S=qr(t);break;case"script":S=Yr(t)}Hi.has(S)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Hi.set(S,t),c.querySelector(p)!==null||i==="style"&&c.querySelector(gl(S))||i==="script"&&c.querySelector(Sl(S))||(i=c.createElement("link"),Xn(i,"link",t),F(i),c.head.appendChild(i)))}}function Sy(t,i){Oa.m(t,i);var s=Wr;if(s&&t){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+pt(c)+'"][href="'+pt(t)+'"]',S=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":S=Yr(t)}if(!Hi.has(S)&&(t=g({rel:"modulepreload",href:t},i),Hi.set(S,t),s.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Sl(S)))return}c=s.createElement("link"),Xn(c,"link",t),F(c),s.head.appendChild(c)}}}function _y(t,i,s){Oa.S(t,i,s);var c=Wr;if(c&&t){var p=es(c).hoistableStyles,S=qr(t);i=i||"default";var M=p.get(S);if(!M){var L={loading:0,preload:null};if(M=c.querySelector(gl(S)))L.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Hi.get(S))&&Kd(t,s);var Y=M=c.createElement("link");F(Y),Xn(Y,"link",t),Y._p=new Promise(function(le,_e){Y.onload=le,Y.onerror=_e}),Y.addEventListener("load",function(){L.loading|=1}),Y.addEventListener("error",function(){L.loading|=2}),L.loading|=4,qc(M,i,c)}M={type:"stylesheet",instance:M,count:1,state:L},p.set(S,M)}}}function vy(t,i){Oa.X(t,i);var s=Wr;if(s&&t){var c=es(s).hoistableScripts,p=Yr(t),S=c.get(p);S||(S=s.querySelector(Sl(p)),S||(t=g({src:t,async:!0},i),(i=Hi.get(p))&&Zd(t,i),S=s.createElement("script"),F(S),Xn(S,"link",t),s.head.appendChild(S)),S={type:"script",instance:S,count:1,state:null},c.set(p,S))}}function Ay(t,i){Oa.M(t,i);var s=Wr;if(s&&t){var c=es(s).hoistableScripts,p=Yr(t),S=c.get(p);S||(S=s.querySelector(Sl(p)),S||(t=g({src:t,async:!0,type:"module"},i),(i=Hi.get(p))&&Zd(t,i),S=s.createElement("script"),F(S),Xn(S,"link",t),s.head.appendChild(S)),S={type:"script",instance:S,count:1,state:null},c.set(p,S))}}function PS(t,i,s,c){var p=(p=$.current)?Wc(p):null;if(!p)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=qr(s.href),s=es(p).hoistableStyles,c=s.get(i),c||(c={type:"style",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=qr(s.href);var S=es(p).hoistableStyles,M=S.get(t);if(M||(p=p.ownerDocument||p,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},S.set(t,M),(S=p.querySelector(gl(t)))&&!S._p&&(M.instance=S,M.state.loading=5),Hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Hi.set(t,s),S||xy(p,t,s,M.state))),i&&c===null)throw Error(a(528,""));return M}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Yr(s),s=es(p).hoistableScripts,c=s.get(i),c||(c={type:"script",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function qr(t){return'href="'+pt(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function OS(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function xy(t,i,s,c){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=t.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Xn(i,"link",s),F(i),t.head.appendChild(i))}function Yr(t){return'[src="'+pt(t)+'"]'}function Sl(t){return"script[async]"+t}function NS(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var c=t.querySelector('style[data-href~="'+pt(s.href)+'"]');if(c)return i.instance=c,F(c),c;var p=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(t.ownerDocument||t).createElement("style"),F(c),Xn(c,"style",p),qc(c,s.precedence,t),i.instance=c;case"stylesheet":p=qr(s.href);var S=t.querySelector(gl(p));if(S)return i.state.loading|=4,i.instance=S,F(S),S;c=OS(s),(p=Hi.get(p))&&Kd(c,p),S=(t.ownerDocument||t).createElement("link"),F(S);var M=S;return M._p=new Promise(function(L,Y){M.onload=L,M.onerror=Y}),Xn(S,"link",c),i.state.loading|=4,qc(S,s.precedence,t),i.instance=S;case"script":return S=Yr(s.src),(p=t.querySelector(Sl(S)))?(i.instance=p,F(p),p):(c=s,(p=Hi.get(S))&&(c=g({},s),Zd(c,p)),t=t.ownerDocument||t,p=t.createElement("script"),F(p),Xn(p,"link",c),t.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,qc(c,s.precedence,t));return i.instance}function qc(t,i,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,S=p,M=0;M<c.length;M++){var L=c[M];if(L.dataset.precedence===i)S=L;else if(S!==p)break}S?S.parentNode.insertBefore(t,S.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Kd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Zd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Yc=null;function zS(t,i,s){if(Yc===null){var c=new Map,p=Yc=new Map;p.set(s,c)}else p=Yc,c=p.get(s),c||(c=new Map,p.set(s,c));if(c.has(t))return c;for(c.set(t,null),s=s.getElementsByTagName(t),p=0;p<s.length;p++){var S=s[p];if(!(S[Ps]||S[An]||t==="link"&&S.getAttribute("rel")==="stylesheet")&&S.namespaceURI!=="http://www.w3.org/2000/svg"){var M=S.getAttribute(i)||"";M=t+M;var L=c.get(M);L?L.push(S):c.set(M,[S])}}return c}function HS(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function yy(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function GS(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ey(t,i,s,c){if(s.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var p=qr(c.href),S=i.querySelector(gl(p));if(S){i=S._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Qc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=S,F(S);return}S=i.ownerDocument||i,c=OS(c),(p=Hi.get(p))&&Kd(c,p),S=S.createElement("link"),F(S);var M=S;M._p=new Promise(function(L,Y){M.onload=L,M.onerror=Y}),Xn(S,"link",c),s.instance=S}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Qc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Jd=0;function My(t,i){return t.stylesheets&&t.count===0&&Kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var c=setTimeout(function(){if(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend){var S=t.unsuspend;t.unsuspend=null,S()}},6e4+i);0<t.imgBytes&&Jd===0&&(Jd=62500*ay());var p=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend)){var S=t.unsuspend;t.unsuspend=null,S()}},(t.imgBytes>Jd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jc=null;function Kc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jc=new Map,i.forEach(Ty,t),jc=null,Qc.call(t))}function Ty(t,i){if(!(i.state.loading&4)){var s=jc.get(t);if(s)var c=s.get(null);else{s=new Map,jc.set(t,s);for(var p=t.querySelectorAll("link[data-precedence],style[data-precedence]"),S=0;S<p.length;S++){var M=p[S];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),c=M)}c&&s.set(null,c)}p=i.instance,M=p.getAttribute("data-precedence"),S=s.get(M)||c,S===c&&s.set(null,p),s.set(M,p),this.count++,c=Qc.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),S?S.parentNode.insertBefore(p,S.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(p,t.firstChild)),i.state.loading|=4}}var _l={$$typeof:w,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Cy(t,i,s,c,p,S,M,L,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=S,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function VS(t,i,s,c,p,S,M,L,Y,le,_e,ye){return t=new Cy(t,i,s,M,Y,le,_e,ye,L),i=1,S===!0&&(i|=24),S=vi(3,null,null,i),t.current=S,S.stateNode=t,i=If(),i.refCount++,t.pooledCache=i,i.refCount++,S.memoizedState={element:c,isDehydrated:s,cache:i},Ff(S),t}function kS(t){return t?(t=Mr,t):Mr}function XS(t,i,s,c,p,S){p=kS(p),c.context===null?c.context=p:c.pendingContext=p,c=os(i),c.payload={element:s},S=S===void 0?null:S,S!==null&&(c.callback=S),s=ls(t,c,i),s!==null&&(di(s,t,i),Ko(s,t,i))}function WS(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function $d(t,i){WS(t,i),(t=t.alternate)&&WS(t,i)}function qS(t){if(t.tag===13||t.tag===31){var i=Gs(t,67108864);i!==null&&di(i,t,67108864),$d(t,67108864)}}function YS(t){if(t.tag===13||t.tag===31){var i=Mi();i=Io(i);var s=Gs(t,i);s!==null&&di(s,t,i),$d(t,i)}}var Zc=!0;function by(t,i,s,c){var p=P.T;P.T=null;var S=H.p;try{H.p=2,eh(t,i,s,c)}finally{H.p=S,P.T=p}}function Ry(t,i,s,c){var p=P.T;P.T=null;var S=H.p;try{H.p=8,eh(t,i,s,c)}finally{H.p=S,P.T=p}}function eh(t,i,s,c){if(Zc){var p=th(c);if(p===null)Hd(t,i,c,Jc,s),jS(t,c);else if(Dy(p,t,i,s,c))c.stopPropagation();else if(jS(t,c),i&4&&-1<wy.indexOf(t)){for(;p!==null;){var S=$a(p);if(S!==null)switch(S.tag){case 3:if(S=S.stateNode,S.current.memoizedState.isDehydrated){var M=Ce(S.pendingLanes);if(M!==0){var L=S;for(L.pendingLanes|=2,L.entangledLanes|=2;M;){var Y=1<<31-Be(M);L.entanglements[1]|=Y,M&=~Y}ua(S),(zt&6)===0&&(Lc=I()+500,dl(0))}}break;case 31:case 13:L=Gs(S,2),L!==null&&di(L,S,2),Pc(),$d(S,2)}if(S=th(c),S===null&&Hd(t,i,c,Jc,s),S===p)break;p=S}p!==null&&c.stopPropagation()}else Hd(t,i,c,null,s)}}function th(t){return t=nf(t),nh(t)}var Jc=null;function nh(t){if(Jc=null,t=Ja(t),t!==null){var i=o(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Jc=t,null}function QS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case ve:return 2;case Te:return 8;case Se:case je:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var ih=!1,vs=null,As=null,xs=null,vl=new Map,Al=new Map,ys=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jS(t,i){switch(t){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":vl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(i.pointerId)}}function xl(t,i,s,c,p,S){return t===null||t.nativeEvent!==S?(t={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:S,targetContainers:[p]},i!==null&&(i=$a(i),i!==null&&qS(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),t)}function Dy(t,i,s,c,p){switch(i){case"focusin":return vs=xl(vs,t,i,s,c,p),!0;case"dragenter":return As=xl(As,t,i,s,c,p),!0;case"mouseover":return xs=xl(xs,t,i,s,c,p),!0;case"pointerover":var S=p.pointerId;return vl.set(S,xl(vl.get(S)||null,t,i,s,c,p)),!0;case"gotpointercapture":return S=p.pointerId,Al.set(S,xl(Al.get(S)||null,t,i,s,c,p)),!0}return!1}function KS(t){var i=Ja(t.target);if(i!==null){var s=o(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ra(t.priority,function(){YS(s)});return}}else if(i===31){if(i=f(s),i!==null){t.blockedOn=i,ra(t.priority,function(){YS(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $c(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=th(t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);tf=c,s.target.dispatchEvent(c),tf=null}else return i=$a(s),i!==null&&qS(i),t.blockedOn=s,!1;i.shift()}return!0}function ZS(t,i,s){$c(t)&&s.delete(i)}function Iy(){ih=!1,vs!==null&&$c(vs)&&(vs=null),As!==null&&$c(As)&&(As=null),xs!==null&&$c(xs)&&(xs=null),vl.forEach(ZS),Al.forEach(ZS)}function eu(t,i){t.blockedOn===i&&(t.blockedOn=null,ih||(ih=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Iy)))}var tu=null;function JS(t){tu!==t&&(tu=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var i=0;i<t.length;i+=3){var s=t[i],c=t[i+1],p=t[i+2];if(typeof c!="function"){if(nh(c||s)===null)continue;break}var S=$a(s);S!==null&&(t.splice(i,3),i-=3,td(S,{pending:!0,data:p,method:s.method,action:c},c,p))}}))}function Qr(t){function i(Y){return eu(Y,t)}vs!==null&&eu(vs,t),As!==null&&eu(As,t),xs!==null&&eu(xs,t),vl.forEach(i),Al.forEach(i);for(var s=0;s<ys.length;s++){var c=ys[s];c.blockedOn===t&&(c.blockedOn=null)}for(;0<ys.length&&(s=ys[0],s.blockedOn===null);)KS(s),s.blockedOn===null&&ys.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var p=s[c],S=s[c+1],M=p[Fn]||null;if(typeof S=="function")M||JS(s);else if(M){var L=null;if(S&&S.hasAttribute("formAction")){if(p=S,M=S[Fn]||null)L=M.formAction;else if(nh(p)!==null)continue}else L=M.action;typeof L=="function"?s[c+1]=L:(s.splice(c,3),c-=3),JS(s)}}}function $S(){function t(S){S.canIntercept&&S.info==="react-transition"&&S.intercept({handler:function(){return new Promise(function(M){return p=M})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(s,20)}function s(){if(!c&&!navigation.transition){var S=navigation.currentEntry;S&&S.url!=null&&navigation.navigate(S.url,{state:S.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){c=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function ah(t){this._internalRoot=t}nu.prototype.render=ah.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,c=Mi();XS(s,c,t,i,null,null)},nu.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;XS(t.current,2,null,t,null,null),Pc(),i[Ki]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Uo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ys.length&&i!==0&&i<ys[s].priority;s++);ys.splice(s,0,t),s===0&&KS(t)}};var e_=e.version;if(e_!=="19.2.4")throw Error(a(527,e_,"19.2.4"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Uy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{ue=iu.inject(Uy),Ee=iu}catch{}}return El.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,c="",p=o0,S=l0,M=c0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(S=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=VS(t,1,!1,null,null,s,c,null,p,S,M,$S),t[Ki]=i.current,zd(t),new ah(i)},El.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var c=!1,p="",S=o0,M=l0,L=c0,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(S=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(L=s.onRecoverableError),s.formState!==void 0&&(Y=s.formState)),i=VS(t,1,!0,i,s??null,c,p,Y,S,M,L,$S),i.context=kS(null),s=i.current,c=Mi(),c=Io(c),p=os(c),p.callback=null,ls(s,p,c),s=c,i.current.lanes=s,Qn(i,s),ua(i),t[Ki]=i.current,zd(t),new nu(i)},El.version="19.2.4",El}var u_;function ky(){if(u_)return oh.exports;u_=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}return l(),oh.exports=Vy(),oh.exports}var Xy=ky();const Wy=Pv(Xy);const Yp="182",Xi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qy=0,f_=1,Yy=2,Bu=1,Qy=2,Il=3,Sa=0,gi=1,qi=2,ja=0,Ls=1,d_=2,h_=3,p_=4,Ov=5,rr=100,jy=101,Ky=102,Zy=103,Jy=104,$y=200,eE=201,tE=202,nE=203,Nl=204,zl=205,iE=206,aE=207,sE=208,rE=209,oE=210,lE=211,cE=212,uE=213,fE=214,Jh=0,$h=1,ep=2,Ao=3,tp=4,np=5,ip=6,ap=7,Nv=0,dE=1,hE=2,ga=0,zv=1,Hv=2,Gv=3,Vv=4,kv=5,Xv=6,Wv=7,qv=300,fr=301,xo=302,sp=303,rp=304,Qu=306,op=1e3,Qa=1001,lp=1002,Yn=1003,pE=1004,au=1005,Jn=1006,fh=1007,lr=1008,wi=1009,Yv=1010,Qv=1011,Hl=1012,Qp=1013,ni=1014,Yi=1015,_a=1016,jp=1017,Kp=1018,Gl=1020,jv=35902,Kv=35899,Zv=1021,Jv=1022,ii=1023,va=1026,cr=1027,$v=1028,ju=1029,yo=1030,Zp=1031,mo=1033,Lu=33776,Fu=33777,Pu=33778,Ou=33779,cp=35840,up=35841,fp=35842,dp=35843,hp=36196,pp=37492,mp=37496,gp=37488,Sp=37489,_p=37490,vp=37491,Ap=37808,xp=37809,yp=37810,Ep=37811,Mp=37812,Tp=37813,Cp=37814,bp=37815,Rp=37816,wp=37817,Dp=37818,Ip=37819,Up=37820,Bp=37821,Lp=36492,Fp=36494,Pp=36495,Op=36283,Np=36284,zp=36285,Hp=36286,mE=3200,gE=0,SE=1,Is="",ki="srgb",Eo="srgb-linear",Hu="linear",Yt="srgb",jr=7680,m_=519,_E=512,vE=513,AE=514,Jp=515,xE=516,yE=517,$p=518,EE=519,g_=35044,ME=35048,S_="300 es",ha=2e3,Gu=2001;function eA(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function Vu(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function TE(){const l=Vu("canvas");return l.style.display="block",l}const __={};function v_(...l){const e="THREE."+l.shift();console.log(e,...l)}function ht(...l){const e="THREE."+l.shift();console.warn(e,...l)}function Pt(...l){const e="THREE."+l.shift();console.error(e,...l)}function Vl(...l){const e=l.join(" ");e in __||(__[e]=!0,ht(...l))}function CE(l,e,n){return new Promise(function(a,r){function o(){switch(l.clientWaitSync(e,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:r();break;case l.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:a()}}setTimeout(o,n)})}class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let o=0,u=r.length;o<u;o++)r[o].call(this,e);e.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=Math.PI/180,Gp=180/Math.PI;function Wl(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Kn[l&255]+Kn[l>>8&255]+Kn[l>>16&255]+Kn[l>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[n&63|128]+Kn[n>>8&255]+"-"+Kn[n>>16&255]+Kn[n>>24&255]+Kn[a&255]+Kn[a>>8&255]+Kn[a>>16&255]+Kn[a>>24&255]).toLowerCase()}function yt(l,e,n){return Math.max(e,Math.min(n,l))}function bE(l,e){return(l%e+e)%e}function dh(l,e,n){return(1-n)*l+n*e}function Ml(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function hi(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const em={DEG2RAD:Nu};class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(yt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),o=this.x-e.x,u=this.y-e.y;return this.x=o*a-u*r+e.x,this.y=o*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,o,u,f){let d=a[r+0],h=a[r+1],m=a[r+2],g=a[r+3],_=o[u+0],v=o[u+1],y=o[u+2],E=o[u+3];if(f<=0){e[n+0]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g;return}if(f>=1){e[n+0]=_,e[n+1]=v,e[n+2]=y,e[n+3]=E;return}if(g!==E||d!==_||h!==v||m!==y){let x=d*_+h*v+m*y+g*E;x<0&&(_=-_,v=-v,y=-y,E=-E,x=-x);let A=1-f;if(x<.9995){const T=Math.acos(x),w=Math.sin(T);A=Math.sin(A*T)/w,f=Math.sin(f*T)/w,d=d*A+_*f,h=h*A+v*f,m=m*A+y*f,g=g*A+E*f}else{d=d*A+_*f,h=h*A+v*f,m=m*A+y*f,g=g*A+E*f;const T=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=T,h*=T,m*=T,g*=T}}e[n]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,r,o,u){const f=a[r],d=a[r+1],h=a[r+2],m=a[r+3],g=o[u],_=o[u+1],v=o[u+2],y=o[u+3];return e[n]=f*y+m*g+d*v-h*_,e[n+1]=d*y+m*_+h*g-f*v,e[n+2]=h*y+m*v+f*_-d*g,e[n+3]=m*y-f*g-d*_-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,o=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(a/2),m=f(r/2),g=f(o/2),_=d(a/2),v=d(r/2),y=d(o/2);switch(u){case"XYZ":this._x=_*m*g+h*v*y,this._y=h*v*g-_*m*y,this._z=h*m*y+_*v*g,this._w=h*m*g-_*v*y;break;case"YXZ":this._x=_*m*g+h*v*y,this._y=h*v*g-_*m*y,this._z=h*m*y-_*v*g,this._w=h*m*g+_*v*y;break;case"ZXY":this._x=_*m*g-h*v*y,this._y=h*v*g+_*m*y,this._z=h*m*y+_*v*g,this._w=h*m*g-_*v*y;break;case"ZYX":this._x=_*m*g-h*v*y,this._y=h*v*g+_*m*y,this._z=h*m*y-_*v*g,this._w=h*m*g+_*v*y;break;case"YZX":this._x=_*m*g+h*v*y,this._y=h*v*g+_*m*y,this._z=h*m*y-_*v*g,this._w=h*m*g-_*v*y;break;case"XZY":this._x=_*m*g-h*v*y,this._y=h*v*g-_*m*y,this._z=h*m*y+_*v*g,this._w=h*m*g+_*v*y;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],o=n[8],u=n[1],f=n[5],d=n[9],h=n[2],m=n[6],g=n[10],_=a+f+g;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(m-d)*v,this._y=(o-h)*v,this._z=(u-r)*v}else if(a>f&&a>g){const v=2*Math.sqrt(1+a-f-g);this._w=(m-d)/v,this._x=.25*v,this._y=(r+u)/v,this._z=(o+h)/v}else if(f>g){const v=2*Math.sqrt(1+f-a-g);this._w=(o-h)/v,this._x=(r+u)/v,this._y=.25*v,this._z=(d+m)/v}else{const v=2*Math.sqrt(1+g-a-f);this._w=(u-r)/v,this._x=(o+h)/v,this._y=(d+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,o=e._z,u=e._w,f=n._x,d=n._y,h=n._z,m=n._w;return this._x=a*m+u*f+r*h-o*d,this._y=r*m+u*d+o*f-a*h,this._z=o*m+u*h+a*d-r*f,this._w=u*m-a*f-r*d-o*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,r=e._y,o=e._z,u=e._w,f=this.dot(e);f<0&&(a=-a,r=-r,o=-o,u=-u,f=-f);let d=1-n;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,n=Math.sin(n*h)/m,this._x=this._x*d+a*n,this._y=this._y*d+r*n,this._z=this._z*d+o*n,this._w=this._w*d+u*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+r*n,this._z=this._z*d+o*n,this._w=this._w*d+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),o=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,a=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(A_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6]*r,this.y=o[1]*n+o[4]*a+o[7]*r,this.z=o[2]*n+o[5]*a+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,o=e.elements,u=1/(o[3]*n+o[7]*a+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*a+o[8]*r+o[12])*u,this.y=(o[1]*n+o[5]*a+o[9]*r+o[13])*u,this.z=(o[2]*n+o[6]*a+o[10]*r+o[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,o=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*r-f*a),m=2*(f*n-o*r),g=2*(o*a-u*n);return this.x=n+d*h+u*g-f*m,this.y=a+d*m+f*h-o*g,this.z=r+d*g+o*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*a+o[8]*r,this.y=o[1]*n+o[5]*a+o[9]*r,this.z=o[2]*n+o[6]*a+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,o=e.z,u=n.x,f=n.y,d=n.z;return this.x=r*d-o*f,this.y=o*u-a*d,this.z=a*f-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(yt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new V,A_=new nn;class ft{constructor(e,n,a,r,o,u,f,d,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,o,u,f,d,h)}set(e,n,a,r,o,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=f,m[3]=n,m[4]=o,m[5]=d,m[6]=a,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,o=this.elements,u=a[0],f=a[3],d=a[6],h=a[1],m=a[4],g=a[7],_=a[2],v=a[5],y=a[8],E=r[0],x=r[3],A=r[6],T=r[1],w=r[4],D=r[7],R=r[2],B=r[5],b=r[8];return o[0]=u*E+f*T+d*R,o[3]=u*x+f*w+d*B,o[6]=u*A+f*D+d*b,o[1]=h*E+m*T+g*R,o[4]=h*x+m*w+g*B,o[7]=h*A+m*D+g*b,o[2]=_*E+v*T+y*R,o[5]=_*x+v*w+y*B,o[8]=_*A+v*D+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return n*u*m-n*f*h-a*o*m+a*f*d+r*o*h-r*u*d}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*u-f*h,_=f*d-m*o,v=h*o-u*d,y=n*g+a*_+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=g*E,e[1]=(r*h-m*a)*E,e[2]=(f*a-r*u)*E,e[3]=_*E,e[4]=(m*n-r*d)*E,e[5]=(r*o-f*n)*E,e[6]=v*E,e[7]=(a*d-h*n)*E,e[8]=(u*n-a*o)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,o,u,f){const d=Math.cos(o),h=Math.sin(o);return this.set(a*d,a*h,-a*(d*u+h*f)+u+e,-r*h,r*d,-r*(-h*u+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(ph.makeScale(e,n)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,n){return this.premultiply(ph.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new ft,x_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RE(){const l={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(r,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Yt&&(r.r=Ka(r.r),r.g=Ka(r.g),r.b=Ka(r.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Is?Hu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,u){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return l.define({[Eo]:{primaries:e,whitePoint:a,transfer:Hu,toXYZ:x_,fromXYZ:y_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ki},outputColorSpaceConfig:{drawingBufferColorSpace:ki}},[ki]:{primaries:e,whitePoint:a,transfer:Yt,toXYZ:x_,fromXYZ:y_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ki}}}),l}const Dt=RE();function Ka(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function go(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Kr;class wE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Kr===void 0&&(Kr=Vu("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Kr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vu("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),o=r.data;for(let u=0;u<o.length;u++)o[u]=Ka(o[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ka(n[a]/255)*255):n[a]=Ka(n[a]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DE=0;class tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Wl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?o.push(mh(r[u].image)):o.push(mh(r[u]))}else o=mh(r);a.url=o}return n||(e.images[this.uuid]=a),a}}function mh(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?wE.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let IE=0;const gh=new V;class ai extends Fs{constructor(e=ai.DEFAULT_IMAGE,n=ai.DEFAULT_MAPPING,a=Qa,r=Qa,o=Jn,u=lr,f=ii,d=wi,h=ai.DEFAULT_ANISOTROPY,m=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Wl(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case op:e.x=e.x-Math.floor(e.x);break;case Qa:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case op:e.y=e.y-Math.floor(e.y);break;case Qa:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=qv;ai.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,n=0,a=0,r=1){fn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,o=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*o,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*o,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*o,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,o;const d=e.elements,h=d[0],m=d[4],g=d[8],_=d[1],v=d[5],y=d[9],E=d[2],x=d[6],A=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(y-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(y+x)<.1&&Math.abs(h+v+A-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,D=(v+1)/2,R=(A+1)/2,B=(m+_)/4,b=(g+E)/4,O=(y+x)/4;return w>D&&w>R?w<.01?(a=0,r=.707106781,o=.707106781):(a=Math.sqrt(w),r=B/a,o=b/a):D>R?D<.01?(a=.707106781,r=0,o=.707106781):(r=Math.sqrt(D),a=B/r,o=O/r):R<.01?(a=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),a=b/o,r=O/o),this.set(a,r,o,n),this}let T=Math.sqrt((x-y)*(x-y)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(T)<.001&&(T=1),this.x=(x-y)/T,this.y=(g-E)/T,this.z=(_-m)/T,this.w=Math.acos((h+v+A-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UE extends Fs{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n);const r={width:e,height:n,depth:a.depth},o=new ai(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new tm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends UE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class tA extends ai{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Qa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends ai{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Qa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ta.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ta.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ta.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const o=a.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ta):ta.fromBufferAttribute(o,u),ta.applyMatrix4(e.matrixWorld),this.expandByPoint(ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),su.copy(a.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const r=e.children;for(let o=0,u=r.length;o<u;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ta),ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),ru.subVectors(this.max,Tl),Zr.subVectors(e.a,Tl),Jr.subVectors(e.b,Tl),$r.subVectors(e.c,Tl),Ms.subVectors(Jr,Zr),Ts.subVectors($r,Jr),er.subVectors(Zr,$r);let n=[0,-Ms.z,Ms.y,0,-Ts.z,Ts.y,0,-er.z,er.y,Ms.z,0,-Ms.x,Ts.z,0,-Ts.x,er.z,0,-er.x,-Ms.y,Ms.x,0,-Ts.y,Ts.x,0,-er.y,er.x,0];return!Sh(n,Zr,Jr,$r,ru)||(n=[1,0,0,0,1,0,0,0,1],!Sh(n,Zr,Jr,$r,ru))?!1:(ou.crossVectors(Ms,Ts),n=[ou.x,ou.y,ou.z],Sh(n,Zr,Jr,$r,ru))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new V,new V,new V,new V,new V,new V,new V,new V],ta=new V,su=new pa,Zr=new V,Jr=new V,$r=new V,Ms=new V,Ts=new V,er=new V,Tl=new V,ru=new V,ou=new V,tr=new V;function Sh(l,e,n,a,r){for(let o=0,u=l.length-3;o<=u;o+=3){tr.fromArray(l,o);const f=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),d=e.dot(tr),h=n.dot(tr),m=a.dot(tr);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const LE=new pa,Cl=new V,_h=new V;class nm{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):LE.setFromPoints(e).getCenter(a);let r=0;for(let o=0,u=e.length;o<u;o++)r=Math.max(r,a.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const n=Cl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Cl,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(_h)),this.expandByPoint(Cl.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const za=new V,vh=new V,lu=new V,Cs=new V,Ah=new V,cu=new V,xh=new V;let im=class{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,za)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=za.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(za.copy(this.origin).addScaledVector(this.direction,n),za.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){vh.copy(e).add(n).multiplyScalar(.5),lu.copy(n).sub(e).normalize(),Cs.copy(this.origin).sub(vh);const o=e.distanceTo(n)*.5,u=-this.direction.dot(lu),f=Cs.dot(this.direction),d=-Cs.dot(lu),h=Cs.lengthSq(),m=Math.abs(1-u*u);let g,_,v,y;if(m>0)if(g=u*d-f,_=u*f-d,y=o*m,g>=0)if(_>=-y)if(_<=y){const E=1/m;g*=E,_*=E,v=g*(g+u*_+2*f)+_*(u*g+_+2*d)+h}else _=o,g=Math.max(0,-(u*_+f)),v=-g*g+_*(_+2*d)+h;else _=-o,g=Math.max(0,-(u*_+f)),v=-g*g+_*(_+2*d)+h;else _<=-y?(g=Math.max(0,-(-u*o+f)),_=g>0?-o:Math.min(Math.max(-o,-d),o),v=-g*g+_*(_+2*d)+h):_<=y?(g=0,_=Math.min(Math.max(-o,-d),o),v=_*(_+2*d)+h):(g=Math.max(0,-(u*o+f)),_=g>0?o:Math.min(Math.max(-o,-d),o),v=-g*g+_*(_+2*d)+h);else _=u>0?-o:o,g=Math.max(0,-(u*_+f)),v=-g*g+_*(_+2*d)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(vh).addScaledVector(lu,_),v}intersectSphere(e,n){za.subVectors(e.center,this.origin);const a=za.dot(this.direction),r=za.dot(za)-a*a,o=e.radius*e.radius;if(r>o)return null;const u=Math.sqrt(o-r),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,o,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(a=(e.min.x-_.x)*h,r=(e.max.x-_.x)*h):(a=(e.max.x-_.x)*h,r=(e.min.x-_.x)*h),m>=0?(o=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(o=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),a>u||o>r||((o>a||isNaN(a))&&(a=o),(u<r||isNaN(r))&&(r=u),g>=0?(f=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(f=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),a>d||f>r)||((f>a||a!==a)&&(a=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,za)!==null}intersectTriangle(e,n,a,r,o){Ah.subVectors(n,e),cu.subVectors(a,e),xh.crossVectors(Ah,cu);let u=this.direction.dot(xh),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Cs.subVectors(this.origin,e);const d=f*this.direction.dot(cu.crossVectors(Cs,cu));if(d<0)return null;const h=f*this.direction.dot(Ah.cross(Cs));if(h<0||d+h>u)return null;const m=-f*Cs.dot(xh);return m<0?null:this.at(m/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class dt{constructor(e,n,a,r,o,u,f,d,h,m,g,_,v,y,E,x){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,o,u,f,d,h,m,g,_,v,y,E,x)}set(e,n,a,r,o,u,f,d,h,m,g,_,v,y,E,x){const A=this.elements;return A[0]=e,A[4]=n,A[8]=a,A[12]=r,A[1]=o,A[5]=u,A[9]=f,A[13]=d,A[2]=h,A[6]=m,A[10]=g,A[14]=_,A[3]=v,A[7]=y,A[11]=E,A[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,r=1/eo.setFromMatrixColumn(e,0).length(),o=1/eo.setFromMatrixColumn(e,1).length(),u=1/eo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*o,n[5]=a[5]*o,n[6]=a[6]*o,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,o=e.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(r),h=Math.sin(r),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=u*m,v=u*g,y=f*m,E=f*g;n[0]=d*m,n[4]=-d*g,n[8]=h,n[1]=v+y*h,n[5]=_-E*h,n[9]=-f*d,n[2]=E-_*h,n[6]=y+v*h,n[10]=u*d}else if(e.order==="YXZ"){const _=d*m,v=d*g,y=h*m,E=h*g;n[0]=_+E*f,n[4]=y*f-v,n[8]=u*h,n[1]=u*g,n[5]=u*m,n[9]=-f,n[2]=v*f-y,n[6]=E+_*f,n[10]=u*d}else if(e.order==="ZXY"){const _=d*m,v=d*g,y=h*m,E=h*g;n[0]=_-E*f,n[4]=-u*g,n[8]=y+v*f,n[1]=v+y*f,n[5]=u*m,n[9]=E-_*f,n[2]=-u*h,n[6]=f,n[10]=u*d}else if(e.order==="ZYX"){const _=u*m,v=u*g,y=f*m,E=f*g;n[0]=d*m,n[4]=y*h-v,n[8]=_*h+E,n[1]=d*g,n[5]=E*h+_,n[9]=v*h-y,n[2]=-h,n[6]=f*d,n[10]=u*d}else if(e.order==="YZX"){const _=u*d,v=u*h,y=f*d,E=f*h;n[0]=d*m,n[4]=E-_*g,n[8]=y*g+v,n[1]=g,n[5]=u*m,n[9]=-f*m,n[2]=-h*m,n[6]=v*g+y,n[10]=_-E*g}else if(e.order==="XZY"){const _=u*d,v=u*h,y=f*d,E=f*h;n[0]=d*m,n[4]=-g,n[8]=h*m,n[1]=_*g+E,n[5]=u*m,n[9]=v*g-y,n[2]=y*g-v,n[6]=f*m,n[10]=E*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,PE)}lookAt(e,n,a){const r=this.elements;return Ti.subVectors(e,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),bs.crossVectors(a,Ti),bs.lengthSq()===0&&(Math.abs(a.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),bs.crossVectors(a,Ti)),bs.normalize(),uu.crossVectors(Ti,bs),r[0]=bs.x,r[4]=uu.x,r[8]=Ti.x,r[1]=bs.y,r[5]=uu.y,r[9]=Ti.y,r[2]=bs.z,r[6]=uu.z,r[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,o=this.elements,u=a[0],f=a[4],d=a[8],h=a[12],m=a[1],g=a[5],_=a[9],v=a[13],y=a[2],E=a[6],x=a[10],A=a[14],T=a[3],w=a[7],D=a[11],R=a[15],B=r[0],b=r[4],O=r[8],C=r[12],U=r[1],N=r[5],k=r[9],X=r[13],W=r[2],Q=r[6],P=r[10],H=r[14],Z=r[3],re=r[7],he=r[11],z=r[15];return o[0]=u*B+f*U+d*W+h*Z,o[4]=u*b+f*N+d*Q+h*re,o[8]=u*O+f*k+d*P+h*he,o[12]=u*C+f*X+d*H+h*z,o[1]=m*B+g*U+_*W+v*Z,o[5]=m*b+g*N+_*Q+v*re,o[9]=m*O+g*k+_*P+v*he,o[13]=m*C+g*X+_*H+v*z,o[2]=y*B+E*U+x*W+A*Z,o[6]=y*b+E*N+x*Q+A*re,o[10]=y*O+E*k+x*P+A*he,o[14]=y*C+E*X+x*H+A*z,o[3]=T*B+w*U+D*W+R*Z,o[7]=T*b+w*N+D*Q+R*re,o[11]=T*O+w*k+D*P+R*he,o[15]=T*C+w*X+D*H+R*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],o=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],_=e[10],v=e[14],y=e[3],E=e[7],x=e[11],A=e[15],T=d*v-h*_,w=f*v-h*g,D=f*_-d*g,R=u*v-h*m,B=u*_-d*m,b=u*g-f*m;return n*(E*T-x*w+A*D)-a*(y*T-x*R+A*B)+r*(y*w-E*R+A*b)-o*(y*D-E*B+x*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],_=e[10],v=e[11],y=e[12],E=e[13],x=e[14],A=e[15],T=g*x*h-E*_*h+E*d*v-f*x*v-g*d*A+f*_*A,w=y*_*h-m*x*h-y*d*v+u*x*v+m*d*A-u*_*A,D=m*E*h-y*g*h+y*f*v-u*E*v-m*f*A+u*g*A,R=y*g*d-m*E*d-y*f*_+u*E*_+m*f*x-u*g*x,B=n*T+a*w+r*D+o*R;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/B;return e[0]=T*b,e[1]=(E*_*o-g*x*o-E*r*v+a*x*v+g*r*A-a*_*A)*b,e[2]=(f*x*o-E*d*o+E*r*h-a*x*h-f*r*A+a*d*A)*b,e[3]=(g*d*o-f*_*o-g*r*h+a*_*h+f*r*v-a*d*v)*b,e[4]=w*b,e[5]=(m*x*o-y*_*o+y*r*v-n*x*v-m*r*A+n*_*A)*b,e[6]=(y*d*o-u*x*o-y*r*h+n*x*h+u*r*A-n*d*A)*b,e[7]=(u*_*o-m*d*o+m*r*h-n*_*h-u*r*v+n*d*v)*b,e[8]=D*b,e[9]=(y*g*o-m*E*o-y*a*v+n*E*v+m*a*A-n*g*A)*b,e[10]=(u*E*o-y*f*o+y*a*h-n*E*h-u*a*A+n*f*A)*b,e[11]=(m*f*o-u*g*o-m*a*h+n*g*h+u*a*v-n*f*v)*b,e[12]=R*b,e[13]=(m*E*r-y*g*r+y*a*_-n*E*_-m*a*x+n*g*x)*b,e[14]=(y*f*r-u*E*r-y*a*d+n*E*d+u*a*x-n*f*x)*b,e[15]=(u*g*r-m*f*r+m*a*d-n*g*d-u*a*_+n*f*_)*b,this}scale(e){const n=this.elements,a=e.x,r=e.y,o=e.z;return n[0]*=a,n[4]*=r,n[8]*=o,n[1]*=a,n[5]*=r,n[9]*=o,n[2]*=a,n[6]*=r,n[10]*=o,n[3]*=a,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),o=1-a,u=e.x,f=e.y,d=e.z,h=o*u,m=o*f;return this.set(h*u+a,h*f-r*d,h*d+r*f,0,h*f+r*d,m*f+a,m*d-r*u,0,h*d-r*f,m*d+r*u,o*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,o,u){return this.set(1,a,o,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,o=n._x,u=n._y,f=n._z,d=n._w,h=o+o,m=u+u,g=f+f,_=o*h,v=o*m,y=o*g,E=u*m,x=u*g,A=f*g,T=d*h,w=d*m,D=d*g,R=a.x,B=a.y,b=a.z;return r[0]=(1-(E+A))*R,r[1]=(v+D)*R,r[2]=(y-w)*R,r[3]=0,r[4]=(v-D)*B,r[5]=(1-(_+A))*B,r[6]=(x+T)*B,r[7]=0,r[8]=(y+w)*b,r[9]=(x-T)*b,r[10]=(1-(_+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let o=eo.set(r[0],r[1],r[2]).length();const u=eo.set(r[4],r[5],r[6]).length(),f=eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),na.copy(this);const h=1/o,m=1/u,g=1/f;return na.elements[0]*=h,na.elements[1]*=h,na.elements[2]*=h,na.elements[4]*=m,na.elements[5]*=m,na.elements[6]*=m,na.elements[8]*=g,na.elements[9]*=g,na.elements[10]*=g,n.setFromRotationMatrix(na),a.x=o,a.y=u,a.z=f,this}makePerspective(e,n,a,r,o,u,f=ha,d=!1){const h=this.elements,m=2*o/(n-e),g=2*o/(a-r),_=(n+e)/(n-e),v=(a+r)/(a-r);let y,E;if(d)y=o/(u-o),E=u*o/(u-o);else if(f===ha)y=-(u+o)/(u-o),E=-2*u*o/(u-o);else if(f===Gu)y=-u/(u-o),E=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,r,o,u,f=ha,d=!1){const h=this.elements,m=2/(n-e),g=2/(a-r),_=-(n+e)/(n-e),v=-(a+r)/(a-r);let y,E;if(d)y=1/(u-o),E=u/(u-o);else if(f===ha)y=-2/(u-o),E=-(u+o)/(u-o);else if(f===Gu)y=-1/(u-o),E=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const eo=new V,na=new dt,FE=new V(0,0,0),PE=new V(1,1,1),bs=new V,uu=new V,Ti=new V,E_=new dt,M_=new nn;class Za{constructor(e=0,n=0,a=0,r=Za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,o=r[0],u=r[4],f=r[8],d=r[1],h=r[5],m=r[9],g=r[2],_=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-m,v),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return E_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return M_.setFromEuler(this),this.setFromQuaternion(M_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Za.DEFAULT_ORDER="XYZ";class nA{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OE=0;const T_=new V,to=new nn,Ha=new dt,fu=new V,bl=new V,NE=new V,zE=new nn,C_=new V(1,0,0),b_=new V(0,1,0),R_=new V(0,0,1),w_={type:"added"},HE={type:"removed"},no={type:"childadded",child:null},yh={type:"childremoved",child:null};class Dn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new V,n=new Za,a=new nn,r=new V(1,1,1);function o(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(o),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ft}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(b_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,n){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(b_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ha.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?fu.copy(e):fu.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ha.lookAt(bl,fu,this.up):Ha.lookAt(fu,bl,this.up),this.quaternion.setFromRotationMatrix(Ha),r&&(Ha.extractRotation(r.matrixWorld),to.setFromRotationMatrix(Ha),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w_),no.child=e,this.dispatchEvent(no),no.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HE),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w_),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,zE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(o(e.materials,this.material[d]));r.material=f}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(o(e.animations,d))}}if(n){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),_=u(e.skeletons),v=u(e.animations),y=u(e.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),g.length>0&&(a.shapes=g),_.length>0&&(a.skeletons=_),v.length>0&&(a.animations=v),y.length>0&&(a.nodes=y)}return a.object=r,a;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new V(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ia=new V,Ga=new V,Eh=new V,Va=new V,io=new V,ao=new V,D_=new V,Mh=new V,Th=new V,Ch=new V,bh=new fn,Rh=new fn,wh=new fn;class aa{constructor(e=new V,n=new V,a=new V){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),ia.subVectors(e,n),r.cross(ia);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,a,r,o){ia.subVectors(r,n),Ga.subVectors(a,n),Eh.subVectors(e,n);const u=ia.dot(ia),f=ia.dot(Ga),d=ia.dot(Eh),h=Ga.dot(Ga),m=Ga.dot(Eh),g=u*h-f*f;if(g===0)return o.set(0,0,0),null;const _=1/g,v=(h*d-f*m)*_,y=(u*m-f*d)*_;return o.set(1-v-y,y,v)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,Va)===null?!1:Va.x>=0&&Va.y>=0&&Va.x+Va.y<=1}static getInterpolation(e,n,a,r,o,u,f,d){return this.getBarycoord(e,n,a,r,Va)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Va.x),d.addScaledVector(u,Va.y),d.addScaledVector(f,Va.z),d)}static getInterpolatedAttribute(e,n,a,r,o,u){return bh.setScalar(0),Rh.setScalar(0),wh.setScalar(0),bh.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,a),wh.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(bh,o.x),u.addScaledVector(Rh,o.y),u.addScaledVector(wh,o.z),u}static isFrontFacing(e,n,a,r){return ia.subVectors(a,n),Ga.subVectors(e,n),ia.cross(Ga).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),Ga.subVectors(this.a,this.b),ia.cross(Ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return aa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,o){return aa.getInterpolation(e,this.a,this.b,this.c,n,a,r,o)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,o=this.c;let u,f;io.subVectors(r,a),ao.subVectors(o,a),Mh.subVectors(e,a);const d=io.dot(Mh),h=ao.dot(Mh);if(d<=0&&h<=0)return n.copy(a);Th.subVectors(e,r);const m=io.dot(Th),g=ao.dot(Th);if(m>=0&&g<=m)return n.copy(r);const _=d*g-m*h;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),n.copy(a).addScaledVector(io,u);Ch.subVectors(e,o);const v=io.dot(Ch),y=ao.dot(Ch);if(y>=0&&v<=y)return n.copy(o);const E=v*h-d*y;if(E<=0&&h>=0&&y<=0)return f=h/(h-y),n.copy(a).addScaledVector(ao,f);const x=m*y-v*g;if(x<=0&&g-m>=0&&v-y>=0)return D_.subVectors(o,r),f=(g-m)/(g-m+(v-y)),n.copy(r).addScaledVector(D_,f);const A=1/(x+E+_);return u=E*A,f=_*A,n.copy(a).addScaledVector(io,u).addScaledVector(ao,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},du={h:0,s:0,l:0};function Dh(l,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(e-l)*6*n:n<1/2?e:n<2/3?l+(e-l)*6*(2/3-n):l}class It{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Dt.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=Dt.workingColorSpace){if(e=bE(e,1),n=yt(n,0,1),a=yt(a,0,1),n===0)this.r=this.g=this.b=a;else{const o=a<=.5?a*(1+n):a+n-a*n,u=2*a-o;this.r=Dh(u,o,e+1/3),this.g=Dh(u,o,e),this.b=Dh(u,o,e-1/3)}return Dt.colorSpaceToWorking(this,r),this}setStyle(e,n=ki){function a(o){o!==void 0&&parseFloat(o)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(o,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ki){const a=iA[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ki){return Dt.workingToColorSpace(Zn.copy(this),e),Math.round(yt(Zn.r*255,0,255))*65536+Math.round(yt(Zn.g*255,0,255))*256+Math.round(yt(Zn.b*255,0,255))}getHexString(e=ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Zn.copy(this),n);const a=Zn.r,r=Zn.g,o=Zn.b,u=Math.max(a,r,o),f=Math.min(a,r,o);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const g=u-f;switch(h=m<=.5?g/(u+f):g/(2-u-f),u){case a:d=(r-o)/g+(r<o?6:0);break;case r:d=(o-a)/g+2;break;case o:d=(a-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Zn.copy(this),n),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=ki){Dt.workingToColorSpace(Zn.copy(this),e);const n=Zn.r,a=Zn.g,r=Zn.b;return e!==ki?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+n,Rs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Rs),e.getHSL(du);const a=dh(Rs.h,du.h,n),r=dh(Rs.s,du.s,n),o=dh(Rs.l,du.l,n);return this.setHSL(a,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*a+o[6]*r,this.g=o[1]*n+o[4]*a+o[7]*r,this.b=o[2]*n+o[5]*a+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new It;It.NAMES=iA;let GE=0;class Ku extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Wl(),this.name="",this.type="Material",this.blending=Ls,this.side=Sa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=zl,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(a.blending=this.blending),this.side!==Sa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Nl&&(a.blendSrc=this.blendSrc),this.blendDst!==zl&&(a.blendDst=this.blendDst),this.blendEquation!==rr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(o){const u=[];for(const f in o){const d=o[f];delete d.metadata,u.push(d)}return u}if(n){const o=r(e.textures),u=r(e.images);o.length>0&&(a.textures=o),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let o=0;o!==r;++o)a[o]=n[o].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dr extends Ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Za,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ya=VE();function VE(){const l=new ArrayBuffer(4),e=new Float32Array(l),n=new Uint32Array(l),a=new Uint32Array(512),r=new Uint32Array(512);for(let d=0;d<256;++d){const h=d-127;h<-27?(a[d]=0,a[d|256]=32768,r[d]=24,r[d|256]=24):h<-14?(a[d]=1024>>-h-14,a[d|256]=1024>>-h-14|32768,r[d]=-h-1,r[d|256]=-h-1):h<=15?(a[d]=h+15<<10,a[d|256]=h+15<<10|32768,r[d]=13,r[d|256]=13):h<128?(a[d]=31744,a[d|256]=64512,r[d]=24,r[d|256]=24):(a[d]=31744,a[d|256]=64512,r[d]=13,r[d|256]=13)}const o=new Uint32Array(2048),u=new Uint32Array(64),f=new Uint32Array(64);for(let d=1;d<1024;++d){let h=d<<13,m=0;for(;(h&8388608)===0;)h<<=1,m-=8388608;h&=-8388609,m+=947912704,o[d]=h|m}for(let d=1024;d<2048;++d)o[d]=939524096+(d-1024<<13);for(let d=1;d<31;++d)u[d]=d<<23;u[31]=1199570944,u[32]=2147483648;for(let d=33;d<63;++d)u[d]=2147483648+(d-32<<23);u[63]=3347054592;for(let d=1;d<64;++d)d!==32&&(f[d]=1024);return{floatView:e,uint32View:n,baseTable:a,shiftTable:r,mantissaTable:o,exponentTable:u,offsetTable:f}}function kE(l){Math.abs(l)>65504&&ht("DataUtils.toHalfFloat(): Value out of range."),l=yt(l,-65504,65504),Ya.floatView[0]=l;const e=Ya.uint32View[0],n=e>>23&511;return Ya.baseTable[n]+((e&8388607)>>Ya.shiftTable[n])}function XE(l){const e=l>>10;return Ya.uint32View[0]=Ya.mantissaTable[Ya.offsetTable[e]+(l&1023)]+Ya.exponentTable[e],Ya.floatView[0]}class kl{static toHalfFloat(e){return kE(e)}static fromHalfFloat(e){return XE(e)}}const Tn=new V,hu=new ke;let WE=0;class Qi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=g_,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)hu.fromBufferAttribute(this,n),hu.applyMatrix3(e),this.setXY(n,hu.x,hu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix3(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix4(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyNormalMatrix(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.transformDirection(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=hi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=hi(n,this.array),a=hi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=hi(n,this.array),a=hi(a,this.array),r=hi(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,o){return e*=this.itemSize,this.normalized&&(n=hi(n,this.array),a=hi(a,this.array),r=hi(r,this.array),o=hi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}}class aA extends Qi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class sA extends Qi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class si extends Qi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let qE=0;const Gi=new dt,Ih=new Dn,so=new V,Ci=new pa,Rl=new pa,Ln=new V;class Si extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eA(e)?sA:aA)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const o=new ft().getNormalMatrix(e);a.applyNormalMatrix(o),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,n,a){return Gi.makeTranslation(e,n,a),this.applyMatrix4(Gi),this}scale(e,n,a){return Gi.makeScale(e,n,a),this.applyMatrix4(Gi),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,o=e.length;r<o;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new si(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const o=n[a];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const a=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),n)for(let o=0,u=n.length;o<u;o++){const f=n[o];Rl.setFromBufferAttribute(f),this.morphTargetsRelative?(Ln.addVectors(Ci.min,Rl.min),Ci.expandByPoint(Ln),Ln.addVectors(Ci.max,Rl.max),Ci.expandByPoint(Ln)):(Ci.expandByPoint(Rl.min),Ci.expandByPoint(Rl.max))}Ci.getCenter(a);let r=0;for(let o=0,u=e.count;o<u;o++)Ln.fromBufferAttribute(e,o),r=Math.max(r,a.distanceToSquared(Ln));if(n)for(let o=0,u=n.length;o<u;o++){const f=n[o],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Ln.fromBufferAttribute(f,h),d&&(so.fromBufferAttribute(e,h),Ln.add(so)),r=Math.max(r,a.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let O=0;O<a.count;O++)f[O]=new V,d[O]=new V;const h=new V,m=new V,g=new V,_=new ke,v=new ke,y=new ke,E=new V,x=new V;function A(O,C,U){h.fromBufferAttribute(a,O),m.fromBufferAttribute(a,C),g.fromBufferAttribute(a,U),_.fromBufferAttribute(o,O),v.fromBufferAttribute(o,C),y.fromBufferAttribute(o,U),m.sub(h),g.sub(h),v.sub(_),y.sub(_);const N=1/(v.x*y.y-y.x*v.y);isFinite(N)&&(E.copy(m).multiplyScalar(y.y).addScaledVector(g,-v.y).multiplyScalar(N),x.copy(g).multiplyScalar(v.x).addScaledVector(m,-y.x).multiplyScalar(N),f[O].add(E),f[C].add(E),f[U].add(E),d[O].add(x),d[C].add(x),d[U].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,C=T.length;O<C;++O){const U=T[O],N=U.start,k=U.count;for(let X=N,W=N+k;X<W;X+=3)A(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new V,D=new V,R=new V,B=new V;function b(O){R.fromBufferAttribute(r,O),B.copy(R);const C=f[O];w.copy(C),w.sub(R.multiplyScalar(R.dot(C))).normalize(),D.crossVectors(B,C);const N=D.dot(d[O])<0?-1:1;u.setXYZW(O,w.x,w.y,w.z,N)}for(let O=0,C=T.length;O<C;++O){const U=T[O],N=U.start,k=U.count;for(let X=N,W=N+k;X<W;X+=3)b(e.getX(X+0)),b(e.getX(X+1)),b(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,v=a.count;_<v;_++)a.setXYZ(_,0,0,0);const r=new V,o=new V,u=new V,f=new V,d=new V,h=new V,m=new V,g=new V;if(e)for(let _=0,v=e.count;_<v;_+=3){const y=e.getX(_+0),E=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),m.subVectors(u,o),g.subVectors(r,o),m.cross(g),f.fromBufferAttribute(a,y),d.fromBufferAttribute(a,E),h.fromBufferAttribute(a,x),f.add(m),d.add(m),h.add(m),a.setXYZ(y,f.x,f.y,f.z),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,v=n.count;_<v;_+=3)r.fromBufferAttribute(n,_+0),o.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),m.subVectors(u,o),g.subVectors(r,o),m.cross(g),a.setXYZ(_+0,m.x,m.y,m.z),a.setXYZ(_+1,m.x,m.y,m.z),a.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Ln.fromBufferAttribute(e,n),Ln.normalize(),e.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,_=new h.constructor(d.length*m);let v=0,y=0;for(let E=0,x=d.length;E<x;E++){f.isInterleavedBufferAttribute?v=d[E]*f.data.stride+f.offset:v=d[E]*m;for(let A=0;A<m;A++)_[y++]=h[v++]}return new Qi(_,m,g)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,a=this.index.array,r=this.attributes;for(const f in r){const d=r[f],h=e(d,a);n.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const d=[],h=o[f];for(let m=0,g=h.length;m<g;m++){const _=h[m],v=e(_,a);d.push(v)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const h=a[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,_=h.length;g<_;g++){const v=h[g];m.push(v.toJSON(e.data))}m.length>0&&(r[d]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(n))}const o=e.morphAttributes;for(const h in o){const m=[],g=o[h];for(let _=0,v=g.length;_<v;_++)m.push(g[_].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new dt,nr=new im,pu=new nm,U_=new V,mu=new V,gu=new V,Su=new V,Uh=new V,_u=new V,B_=new V,vu=new V;class _n extends Dn{constructor(e=new Si,n=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=r.length;o<u;o++){const f=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,o=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(o&&f){_u.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const m=f[d],g=o[d];m!==0&&(Uh.fromBufferAttribute(g,e),u?_u.addScaledVector(Uh,m):_u.addScaledVector(Uh.sub(n),m))}n.add(_u)}return n}raycast(e,n){const a=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),pu.copy(a.boundingSphere),pu.applyMatrix4(o),nr.copy(e.ray).recast(e.near),!(pu.containsPoint(nr.origin)===!1&&(nr.intersectSphere(pu,U_)===null||nr.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(I_.copy(o).invert(),nr.copy(e.ray).applyMatrix4(I_),!(a.boundingBox!==null&&nr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,a){let r;const o=this.geometry,u=this.material,f=o.index,d=o.attributes.position,h=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,_=o.groups,v=o.drawRange;if(f!==null)if(Array.isArray(u))for(let y=0,E=_.length;y<E;y++){const x=_[y],A=u[x.materialIndex],T=Math.max(x.start,v.start),w=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let D=T,R=w;D<R;D+=3){const B=f.getX(D),b=f.getX(D+1),O=f.getX(D+2);r=Au(this,A,e,a,h,m,g,B,b,O),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,v.start),E=Math.min(f.count,v.start+v.count);for(let x=y,A=E;x<A;x+=3){const T=f.getX(x),w=f.getX(x+1),D=f.getX(x+2);r=Au(this,u,e,a,h,m,g,T,w,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let y=0,E=_.length;y<E;y++){const x=_[y],A=u[x.materialIndex],T=Math.max(x.start,v.start),w=Math.min(d.count,Math.min(x.start+x.count,v.start+v.count));for(let D=T,R=w;D<R;D+=3){const B=D,b=D+1,O=D+2;r=Au(this,A,e,a,h,m,g,B,b,O),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let x=y,A=E;x<A;x+=3){const T=x,w=x+1,D=x+2;r=Au(this,u,e,a,h,m,g,T,w,D),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function YE(l,e,n,a,r,o,u,f){let d;if(e.side===gi?d=a.intersectTriangle(u,o,r,!0,f):d=a.intersectTriangle(r,o,u,e.side===Sa,f),d===null)return null;vu.copy(f),vu.applyMatrix4(l.matrixWorld);const h=n.ray.origin.distanceTo(vu);return h<n.near||h>n.far?null:{distance:h,point:vu.clone(),object:l}}function Au(l,e,n,a,r,o,u,f,d,h){l.getVertexPosition(f,mu),l.getVertexPosition(d,gu),l.getVertexPosition(h,Su);const m=YE(l,e,n,a,mu,gu,Su,B_);if(m){const g=new V;aa.getBarycoord(B_,mu,gu,Su,g),r&&(m.uv=aa.getInterpolatedAttribute(r,f,d,h,g,new ke)),o&&(m.uv1=aa.getInterpolatedAttribute(o,f,d,h,g,new ke)),u&&(m.normal=aa.getInterpolatedAttribute(u,f,d,h,g,new V),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:h,normal:new V,materialIndex:0};aa.getNormal(mu,gu,Su,_.normal),m.face=_,m.barycoord=g}return m}class Ro extends Si{constructor(e=1,n=1,a=1,r=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:o,depthSegments:u};const f=this;r=Math.floor(r),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],m=[],g=[];let _=0,v=0;y("z","y","x",-1,-1,a,n,e,u,o,0),y("z","y","x",1,-1,a,n,-e,u,o,1),y("x","z","y",1,1,e,a,n,r,u,2),y("x","z","y",1,-1,e,a,-n,r,u,3),y("x","y","z",1,-1,e,n,a,r,o,4),y("x","y","z",-1,-1,e,n,-a,r,o,5),this.setIndex(d),this.setAttribute("position",new si(h,3)),this.setAttribute("normal",new si(m,3)),this.setAttribute("uv",new si(g,2));function y(E,x,A,T,w,D,R,B,b,O,C){const U=D/b,N=R/O,k=D/2,X=R/2,W=B/2,Q=b+1,P=O+1;let H=0,Z=0;const re=new V;for(let he=0;he<P;he++){const z=he*N-X;for(let ie=0;ie<Q;ie++){const pe=ie*U-k;re[E]=pe*T,re[x]=z*w,re[A]=W,h.push(re.x,re.y,re.z),re[E]=0,re[x]=0,re[A]=B>0?1:-1,m.push(re.x,re.y,re.z),g.push(ie/b),g.push(1-he/O),H+=1}}for(let he=0;he<O;he++)for(let z=0;z<b;z++){const ie=_+z+Q*he,pe=_+z+Q*(he+1),Me=_+(z+1)+Q*(he+1),we=_+(z+1)+Q*he;d.push(ie,pe,we),d.push(pe,Me,we),Z+=6}f.addGroup(v,Z,C),v+=Z,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(l){const e={};for(const n in l){e[n]={};for(const a in l[n]){const r=l[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function ei(l){const e={};for(let n=0;n<l.length;n++){const a=Mo(l[n]);for(const r in a)e[r]=a[r]}return e}function QE(l){const e=[];for(let n=0;n<l.length;n++)e.push(l[n].clone());return e}function rA(l){const e=l.getRenderTarget();return e===null?l.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const jE={clone:Mo,merge:ei};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class oA extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=ha,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ws=new V,L_=new ke,F_=new ke;class Ri extends oA{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gp*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,n){return this.getViewBounds(e,L_,F_),n.subVectors(F_,L_)}setViewOffset(e,n,a,r,o,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nu*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,o=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*r/d,n-=u.offsetY*a/h,r*=u.width/d,a*=u.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ro=-90,oo=1;class JE extends Dn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ri(ro,oo,e,n);r.layers=this.layers,this.add(r);const o=new Ri(ro,oo,e,n);o.layers=this.layers,this.add(o);const u=new Ri(ro,oo,e,n);u.layers=this.layers,this.add(u);const f=new Ri(ro,oo,e,n);f.layers=this.layers,this.add(f);const d=new Ri(ro,oo,e,n);d.layers=this.layers,this.add(d);const h=new Ri(ro,oo,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,o,u,f,d]=n;for(const h of n)this.remove(h);if(e===ha)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Gu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,d,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,o),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,f),e.setRenderTarget(a,3,r),e.render(n,d),e.setRenderTarget(a,4,r),e.render(n,h),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,r),e.render(n,m),e.setRenderTarget(g,_,v),e.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class lA extends ai{constructor(e=[],n=fr,a,r,o,u,f,d,h,m){super(e,n,a,r,o,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cA extends sa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new lA(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ro(5,5,5),o=new ri({name:"CubemapFromEquirect",uniforms:Mo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:gi,blending:ja});o.uniforms.tEquirect.value=n;const u=new _n(r,o),f=n.minFilter;return n.minFilter===lr&&(n.minFilter=Jn),new JE(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(o)}}class xu extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $E={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,o=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,a),A=this._getHandJoint(h,E);x!==null&&(A.matrix.fromArray(x.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=x.radius),A.visible=x!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),v=.02,y=.005;h.inputState.pinching&&_>v+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=v-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,a),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&o!==null&&(r=o),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent($E)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new xu;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class uA extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Za,this.environmentIntensity=1,this.environmentRotation=new Za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Xa extends ai{constructor(e=null,n=1,a=1,r,o,u,f,d,h=Yn,m=Yn,g,_){super(null,u,f,d,h,m,r,o,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eM extends Qi{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lh=new V,tM=new V,nM=new ft;class Wa{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=Lh.subVectors(a,n).cross(tM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Lh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(a,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||nM.getNormalMatrix(e),r=this.coplanarPoint(Lh).applyMatrix4(e),o=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new nm,iM=new ke(.5,.5),yu=new V;class fA{constructor(e=new Wa,n=new Wa,a=new Wa,r=new Wa,o=new Wa,u=new Wa){this.planes=[e,n,a,r,o,u]}set(e,n,a,r,o,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(o),f[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ha,a=!1){const r=this.planes,o=e.elements,u=o[0],f=o[1],d=o[2],h=o[3],m=o[4],g=o[5],_=o[6],v=o[7],y=o[8],E=o[9],x=o[10],A=o[11],T=o[12],w=o[13],D=o[14],R=o[15];if(r[0].setComponents(h-u,v-m,A-y,R-T).normalize(),r[1].setComponents(h+u,v+m,A+y,R+T).normalize(),r[2].setComponents(h+f,v+g,A+E,R+w).normalize(),r[3].setComponents(h-f,v-g,A-E,R-w).normalize(),a)r[4].setComponents(d,_,x,D).normalize(),r[5].setComponents(h-d,v-_,A-x,R-D).normalize();else if(r[4].setComponents(h-d,v-_,A-x,R-D).normalize(),n===ha)r[5].setComponents(h+d,v+_,A+x,R+D).normalize();else if(n===Gu)r[5].setComponents(d,_,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);const n=iM.distanceTo(e.center);return ir.radius=.7071067811865476+n,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(yu.x=r.normal.x>0?e.max.x:e.min.x,yu.y=r.normal.y>0?e.max.y:e.min.y,yu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class To extends ai{constructor(e,n,a=ni,r,o,u,f=Yn,d=Yn,h,m=va,g=1){if(m!==va&&m!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,r,o,u,f,d,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class aM extends To{constructor(e,n=ni,a=fr,r,o,u=Yn,f=Yn,d,h=va){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,n,a,r,o,u,f,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dA extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xl extends Si{constructor(e=1,n=1,a=1,r=32,o=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:r,heightSegments:o,openEnded:u,thetaStart:f,thetaLength:d};const h=this;r=Math.floor(r),o=Math.floor(o);const m=[],g=[],_=[],v=[];let y=0;const E=[],x=a/2;let A=0;T(),u===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(v,2));function T(){const D=new V,R=new V;let B=0;const b=(n-e)/a;for(let O=0;O<=o;O++){const C=[],U=O/o,N=U*(n-e)+e;for(let k=0;k<=r;k++){const X=k/r,W=X*d+f,Q=Math.sin(W),P=Math.cos(W);R.x=N*Q,R.y=-U*a+x,R.z=N*P,g.push(R.x,R.y,R.z),D.set(Q,b,P).normalize(),_.push(D.x,D.y,D.z),v.push(X,1-U),C.push(y++)}E.push(C)}for(let O=0;O<r;O++)for(let C=0;C<o;C++){const U=E[C][O],N=E[C+1][O],k=E[C+1][O+1],X=E[C][O+1];(e>0||C!==0)&&(m.push(U,N,X),B+=3),(n>0||C!==o-1)&&(m.push(N,k,X),B+=3)}h.addGroup(A,B,0),A+=B}function w(D){const R=y,B=new ke,b=new V;let O=0;const C=D===!0?e:n,U=D===!0?1:-1;for(let k=1;k<=r;k++)g.push(0,x*U,0),_.push(0,U,0),v.push(.5,.5),y++;const N=y;for(let k=0;k<=r;k++){const W=k/r*d+f,Q=Math.cos(W),P=Math.sin(W);b.x=C*P,b.y=x*U,b.z=C*Q,g.push(b.x,b.y,b.z),_.push(0,U,0),B.x=Q*.5+.5,B.y=P*.5*U+.5,v.push(B.x,B.y),y++}for(let k=0;k<r;k++){const X=R+k,W=N+k;D===!0?m.push(W,W+1,X):m.push(W+1,W,X),O+=3}h.addGroup(A,O,D===!0?1:2),A+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class am extends Xl{constructor(e=1,n=1,a=32,r=1,o=!1,u=0,f=Math.PI*2){super(0,e,n,a,r,o,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:a,heightSegments:r,openEnded:o,thetaStart:u,thetaLength:f}}static fromJSON(e){return new am(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends Si{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const o=e/2,u=n/2,f=Math.floor(a),d=Math.floor(r),h=f+1,m=d+1,g=e/f,_=n/d,v=[],y=[],E=[],x=[];for(let A=0;A<m;A++){const T=A*_-u;for(let w=0;w<h;w++){const D=w*g-o;y.push(D,-T,0),E.push(0,0,1),x.push(w/f),x.push(1-A/d)}}for(let A=0;A<d;A++)for(let T=0;T<f;T++){const w=T+h*A,D=T+h*(A+1),R=T+1+h*(A+1),B=T+1+h*A;v.push(w,D,B),v.push(D,R,B)}this.setIndex(v),this.setAttribute("position",new si(y,3)),this.setAttribute("normal",new si(E,3)),this.setAttribute("uv",new si(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}class ku extends Si{constructor(e=1,n=32,a=16,r=0,o=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:r,phiLength:o,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let h=0;const m=[],g=new V,_=new V,v=[],y=[],E=[],x=[];for(let A=0;A<=a;A++){const T=[],w=A/a;let D=0;A===0&&u===0?D=.5/n:A===a&&d===Math.PI&&(D=-.5/n);for(let R=0;R<=n;R++){const B=R/n;g.x=-e*Math.cos(r+B*o)*Math.sin(u+w*f),g.y=e*Math.cos(u+w*f),g.z=e*Math.sin(r+B*o)*Math.sin(u+w*f),y.push(g.x,g.y,g.z),_.copy(g).normalize(),E.push(_.x,_.y,_.z),x.push(B+D,1-w),T.push(h++)}m.push(T)}for(let A=0;A<a;A++)for(let T=0;T<n;T++){const w=m[A][T+1],D=m[A][T],R=m[A+1][T],B=m[A+1][T+1];(A!==0||u>0)&&v.push(w,D,B),(A!==a-1||d<Math.PI)&&v.push(D,R,B)}this.setIndex(v),this.setAttribute("position",new si(y,3)),this.setAttribute("normal",new si(E,3)),this.setAttribute("uv",new si(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sM extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rM extends Ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oM extends Ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zu extends oA{constructor(e=-1,n=1,a=1,r=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=a-e,u=a+e,f=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lM extends Si{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class cM extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xu{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uM extends Fs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function P_(l,e,n,a){const r=fM(a);switch(n){case Zv:return l*e;case $v:return l*e/r.components*r.byteLength;case ju:return l*e/r.components*r.byteLength;case yo:return l*e*2/r.components*r.byteLength;case Zp:return l*e*2/r.components*r.byteLength;case Jv:return l*e*3/r.components*r.byteLength;case ii:return l*e*4/r.components*r.byteLength;case mo:return l*e*4/r.components*r.byteLength;case Lu:case Fu:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*8;case Pu:case Ou:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case up:case dp:return Math.max(l,16)*Math.max(e,8)/4;case cp:case fp:return Math.max(l,8)*Math.max(e,8)/2;case hp:case pp:case gp:case Sp:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*8;case mp:case _p:case vp:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((l+4)/5)*Math.floor((e+3)/4)*16;case yp:return Math.floor((l+4)/5)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((l+5)/6)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((l+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((l+7)/8)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((l+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((l+7)/8)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((l+9)/10)*Math.floor((e+4)/5)*16;case wp:return Math.floor((l+9)/10)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((l+9)/10)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((l+9)/10)*Math.floor((e+9)/10)*16;case Up:return Math.floor((l+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((l+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Fp:case Pp:return Math.ceil(l/4)*Math.ceil(e/4)*16;case Op:case Np:return Math.ceil(l/4)*Math.ceil(e/4)*8;case zp:case Hp:return Math.ceil(l/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fM(l){switch(l){case wi:case Yv:return{byteLength:1,components:1};case Hl:case Qv:case _a:return{byteLength:2,components:1};case jp:case Kp:return{byteLength:2,components:4};case ni:case Qp:case Yi:return{byteLength:4,components:1};case jv:case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);function hA(){let l=null,e=!1,n=null,a=null;function r(o,u){n(o,u),a=l.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=l.requestAnimationFrame(r),e=!0)},stop:function(){l.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){l=o}}}function dM(l){const e=new WeakMap;function n(f,d){const h=f.array,m=f.usage,g=h.byteLength,_=l.createBuffer();l.bindBuffer(d,_),l.bufferData(d,h,m),f.onUploadCallback();let v;if(h instanceof Float32Array)v=l.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=l.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?v=l.HALF_FLOAT:v=l.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=l.SHORT;else if(h instanceof Uint32Array)v=l.UNSIGNED_INT;else if(h instanceof Int32Array)v=l.INT;else if(h instanceof Int8Array)v=l.BYTE;else if(h instanceof Uint8Array)v=l.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,h){const m=d.array,g=d.updateRanges;if(l.bindBuffer(h,f),g.length===0)l.bufferSubData(h,0,m);else{g.sort((v,y)=>v.start-y.start);let _=0;for(let v=1;v<g.length;v++){const y=g[_],E=g[v];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++_,g[_]=E)}g.length=_+1;for(let v=0,y=g.length;v<y;v++){const E=g[v];l.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(l.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,d),h.version=f.version}}return{get:r,remove:o,update:u}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`#ifdef USE_BATCHING
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
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CM=`#ifdef USE_IRIDESCENCE
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
#endif`,bM=`#ifdef USE_BUMPMAP
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PM=`#define PI 3.141592653589793
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
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
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
}`,tT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aT=`uniform bool receiveShadow;
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
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
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
#endif`,fT=`uniform sampler2D dfgLUT;
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
}`,dT=`
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
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
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yT=`#if defined( USE_POINTS_UV )
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
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
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
#endif`,wT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZT=`float getShadowMask() {
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
}`,JT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,eC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tC=`#ifdef USE_SKINNING
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
#endif`,nC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rC=`#ifdef USE_TRANSMISSION
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
#endif`,oC=`#ifdef USE_TRANSMISSION
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
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hC=`uniform sampler2D t2D;
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
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`#include <common>
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
}`,vC=`#if DEPTH_PACKING == 3200
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
}`,AC=`#define DISTANCE
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
}`,xC=`#define DISTANCE
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
}`,yC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MC=`uniform float scale;
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
}`,TC=`uniform vec3 diffuse;
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
}`,CC=`#include <common>
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
}`,bC=`uniform vec3 diffuse;
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
}`,RC=`#define LAMBERT
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
}`,wC=`#define LAMBERT
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
}`,DC=`#define MATCAP
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
}`,IC=`#define MATCAP
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
}`,UC=`#define NORMAL
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
}`,BC=`#define NORMAL
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
}`,LC=`#define PHONG
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
}`,FC=`#define PHONG
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
}`,PC=`#define STANDARD
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
}`,OC=`#define STANDARD
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
}`,NC=`#define TOON
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
}`,zC=`#define TOON
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
}`,HC=`uniform float size;
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
}`,GC=`uniform vec3 diffuse;
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
}`,VC=`#include <common>
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
}`,kC=`uniform vec3 color;
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
}`,XC=`uniform float rotation;
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
}`,WC=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:SM,alphatest_pars_fragment:_M,aomap_fragment:vM,aomap_pars_fragment:AM,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:EM,beginnormal_vertex:MM,bsdfs:TM,iridescence_fragment:CM,bumpmap_pars_fragment:bM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:IM,color_fragment:UM,color_pars_fragment:BM,color_pars_vertex:LM,color_vertex:FM,common:PM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:NM,displacementmap_pars_vertex:zM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:kM,colorspace_pars_fragment:XM,envmap_fragment:WM,envmap_common_pars_fragment:qM,envmap_pars_fragment:YM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:sT,envmap_vertex:jM,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:eT,lightmap_pars_fragment:tT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:aT,lights_toon_fragment:rT,lights_toon_pars_fragment:oT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:fT,lights_fragment_begin:dT,lights_fragment_maps:hT,lights_fragment_end:pT,logdepthbuf_fragment:mT,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:ST,logdepthbuf_vertex:_T,map_fragment:vT,map_pars_fragment:AT,map_particle_fragment:xT,map_particle_pars_fragment:yT,metalnessmap_fragment:ET,metalnessmap_pars_fragment:MT,morphinstance_vertex:TT,morphcolor_vertex:CT,morphnormal_vertex:bT,morphtarget_pars_vertex:RT,morphtarget_vertex:wT,normal_fragment_begin:DT,normal_fragment_maps:IT,normal_pars_fragment:UT,normal_pars_vertex:BT,normal_vertex:LT,normalmap_pars_fragment:FT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:zT,opaque_fragment:HT,packing:GT,premultiplied_alpha_fragment:VT,project_vertex:kT,dithering_fragment:XT,dithering_pars_fragment:WT,roughnessmap_fragment:qT,roughnessmap_pars_fragment:YT,shadowmap_pars_fragment:QT,shadowmap_pars_vertex:jT,shadowmap_vertex:KT,shadowmask_pars_fragment:ZT,skinbase_vertex:JT,skinning_pars_vertex:$T,skinning_vertex:eC,skinnormal_vertex:tC,specularmap_fragment:nC,specularmap_pars_fragment:iC,tonemapping_fragment:aC,tonemapping_pars_fragment:sC,transmission_fragment:rC,transmission_pars_fragment:oC,uv_pars_fragment:lC,uv_pars_vertex:cC,uv_vertex:uC,worldpos_vertex:fC,background_vert:dC,background_frag:hC,backgroundCube_vert:pC,backgroundCube_frag:mC,cube_vert:gC,cube_frag:SC,depth_vert:_C,depth_frag:vC,distance_vert:AC,distance_frag:xC,equirect_vert:yC,equirect_frag:EC,linedashed_vert:MC,linedashed_frag:TC,meshbasic_vert:CC,meshbasic_frag:bC,meshlambert_vert:RC,meshlambert_frag:wC,meshmatcap_vert:DC,meshmatcap_frag:IC,meshnormal_vert:UC,meshnormal_frag:BC,meshphong_vert:LC,meshphong_frag:FC,meshphysical_vert:PC,meshphysical_frag:OC,meshtoon_vert:NC,meshtoon_frag:zC,points_vert:HC,points_frag:GC,shadow_vert:VC,shadow_frag:kC,sprite_vert:XC,sprite_frag:WC},Ve={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},da={basic:{uniforms:ei([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ei([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ei([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ei([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ei([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ei([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ei([Ve.points,Ve.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ei([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ei([Ve.common,Ve.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ei([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:ei([Ve.sprite,Ve.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:ei([Ve.common,Ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:ei([Ve.lights,Ve.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};da.physical={uniforms:ei([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Eu={r:0,b:0,g:0},ar=new Za,qC=new dt;function YC(l,e,n,a,r,o,u){const f=new It(0);let d=o===!0?0:1,h,m,g=null,_=0,v=null;function y(w){let D=w.isScene===!0?w.background:null;return D&&D.isTexture&&(D=(w.backgroundBlurriness>0?n:e).get(D)),D}function E(w){let D=!1;const R=y(w);R===null?A(f,d):R&&R.isColor&&(A(R,1),D=!0);const B=l.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(l.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function x(w,D){const R=y(D);R&&(R.isCubeTexture||R.mapping===Qu)?(m===void 0&&(m=new _n(new Ro(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Mo(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,b,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ar.copy(D.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qC.makeRotationFromEuler(ar)),m.material.toneMapped=Dt.getTransfer(R.colorSpace)!==Yt,(g!==R||_!==R.version||v!==l.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,v=l.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new _n(new Co(2,2),new ri({name:"BackgroundMaterial",uniforms:Mo(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:Sa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(R.colorSpace)!==Yt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||v!==l.toneMapping)&&(h.material.needsUpdate=!0,g=R,_=R.version,v=l.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function A(w,D){w.getRGB(Eu,rA(l)),a.buffers.color.setClear(Eu.r,Eu.g,Eu.b,D,u)}function T(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,D=1){f.set(w),d=D,A(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,A(f,d)},render:E,addToRenderList:x,dispose:T}}function QC(l,e){const n=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},r=_(null);let o=r,u=!1;function f(U,N,k,X,W){let Q=!1;const P=g(X,k,N);o!==P&&(o=P,h(o.object)),Q=v(U,X,k,W),Q&&y(U,X,k,W),W!==null&&e.update(W,l.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,D(U,N,k,X),W!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return l.createVertexArray()}function h(U){return l.bindVertexArray(U)}function m(U){return l.deleteVertexArray(U)}function g(U,N,k){const X=k.wireframe===!0;let W=a[U.id];W===void 0&&(W={},a[U.id]=W);let Q=W[N.id];Q===void 0&&(Q={},W[N.id]=Q);let P=Q[X];return P===void 0&&(P=_(d()),Q[X]=P),P}function _(U){const N=[],k=[],X=[];for(let W=0;W<n;W++)N[W]=0,k[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:X,object:U,attributes:{},index:null}}function v(U,N,k,X){const W=o.attributes,Q=N.attributes;let P=0;const H=k.getAttributes();for(const Z in H)if(H[Z].location>=0){const he=W[Z];let z=Q[Z];if(z===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),he===void 0||he.attribute!==z||z&&he.data!==z.data)return!0;P++}return o.attributesNum!==P||o.index!==X}function y(U,N,k,X){const W={},Q=N.attributes;let P=0;const H=k.getAttributes();for(const Z in H)if(H[Z].location>=0){let he=Q[Z];he===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));const z={};z.attribute=he,he&&he.data&&(z.data=he.data),W[Z]=z,P++}o.attributes=W,o.attributesNum=P,o.index=X}function E(){const U=o.newAttributes;for(let N=0,k=U.length;N<k;N++)U[N]=0}function x(U){A(U,0)}function A(U,N){const k=o.newAttributes,X=o.enabledAttributes,W=o.attributeDivisors;k[U]=1,X[U]===0&&(l.enableVertexAttribArray(U),X[U]=1),W[U]!==N&&(l.vertexAttribDivisor(U,N),W[U]=N)}function T(){const U=o.newAttributes,N=o.enabledAttributes;for(let k=0,X=N.length;k<X;k++)N[k]!==U[k]&&(l.disableVertexAttribArray(k),N[k]=0)}function w(U,N,k,X,W,Q,P){P===!0?l.vertexAttribIPointer(U,N,k,W,Q):l.vertexAttribPointer(U,N,k,X,W,Q)}function D(U,N,k,X){E();const W=X.attributes,Q=k.getAttributes(),P=N.defaultAttributeValues;for(const H in Q){const Z=Q[H];if(Z.location>=0){let re=W[H];if(re===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){const he=re.normalized,z=re.itemSize,ie=e.get(re);if(ie===void 0)continue;const pe=ie.buffer,Me=ie.type,we=ie.bytesPerElement,$=Me===l.INT||Me===l.UNSIGNED_INT||re.gpuType===Qp;if(re.isInterleavedBufferAttribute){const ce=re.data,be=ce.stride,Fe=re.offset;if(ce.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Z.locationSize;Ue++)A(Z.location+Ue,ce.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ue=0;Ue<Z.locationSize;Ue++)x(Z.location+Ue);l.bindBuffer(l.ARRAY_BUFFER,pe);for(let Ue=0;Ue<Z.locationSize;Ue++)w(Z.location+Ue,z/Z.locationSize,Me,he,be*we,(Fe+z/Z.locationSize*Ue)*we,$)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)A(Z.location+ce,re.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<Z.locationSize;ce++)x(Z.location+ce);l.bindBuffer(l.ARRAY_BUFFER,pe);for(let ce=0;ce<Z.locationSize;ce++)w(Z.location+ce,z/Z.locationSize,Me,he,z*we,z/Z.locationSize*ce*we,$)}}else if(P!==void 0){const he=P[H];if(he!==void 0)switch(he.length){case 2:l.vertexAttrib2fv(Z.location,he);break;case 3:l.vertexAttrib3fv(Z.location,he);break;case 4:l.vertexAttrib4fv(Z.location,he);break;default:l.vertexAttrib1fv(Z.location,he)}}}}T()}function R(){O();for(const U in a){const N=a[U];for(const k in N){const X=N[k];for(const W in X)m(X[W].object),delete X[W];delete N[k]}delete a[U]}}function B(U){if(a[U.id]===void 0)return;const N=a[U.id];for(const k in N){const X=N[k];for(const W in X)m(X[W].object),delete X[W];delete N[k]}delete a[U.id]}function b(U){for(const N in a){const k=a[N];if(k[U.id]===void 0)continue;const X=k[U.id];for(const W in X)m(X[W].object),delete X[W];delete k[U.id]}}function O(){C(),u=!0,o!==r&&(o=r,h(o.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:O,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:B,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:x,disableUnusedAttributes:T}}function jC(l,e,n){let a;function r(h){a=h}function o(h,m){l.drawArrays(a,h,m),n.update(m,a,1)}function u(h,m,g){g!==0&&(l.drawArraysInstanced(a,h,m,g),n.update(m,a,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,g);let v=0;for(let y=0;y<g;y++)v+=m[y];n.update(v,a,1)}function d(h,m,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<h.length;y++)u(h[y],m[y],_[y]);else{v.multiDrawArraysInstancedWEBGL(a,h,0,m,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=m[E]*_[E];n.update(y,a,1)}}this.setMode=r,this.render=o,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function KC(l,e,n,a){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=l.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(b){return!(b!==ii&&a.convert(b)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(b){const O=b===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wi&&a.convert(b)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Yi&&!O)}function d(b){if(b==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const m=d(h);m!==h&&(ht("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),y=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_TEXTURE_SIZE),x=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),A=l.getParameter(l.MAX_VERTEX_ATTRIBS),T=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),w=l.getParameter(l.MAX_VARYING_VECTORS),D=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),R=l.getParameter(l.MAX_SAMPLES),B=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:x,maxAttributes:A,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:D,maxSamples:R,samples:B}}function ZC(l){const e=this;let n=null,a=0,r=!1,o=!1;const u=new Wa,f=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const v=g.length!==0||_||a!==0||r;return r=_,a=g.length,v},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){n=m(g,_,0)},this.setState=function(g,_,v){const y=g.clippingPlanes,E=g.clipIntersection,x=g.clipShadows,A=l.get(g);if(!r||y===null||y.length===0||o&&!x)o?m(null):h();else{const T=o?0:a,w=T*4;let D=A.clippingState||null;d.value=D,D=m(y,_,w,v);for(let R=0;R!==w;++R)D[R]=n[R];A.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function m(g,_,v,y){const E=g!==null?g.length:0;let x=null;if(E!==0){if(x=d.value,y!==!0||x===null){const A=v+E*4,T=_.matrixWorldInverse;f.getNormalMatrix(T),(x===null||x.length<A)&&(x=new Float32Array(A));for(let w=0,D=v;w!==E;++w,D+=4)u.copy(g[w]).applyMatrix4(T,f),u.normal.toArray(x,D),x[D+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function JC(l){let e=new WeakMap;function n(u,f){return f===sp?u.mapping=fr:f===rp&&(u.mapping=xo),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===sp||f===rp)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new cA(d.height);return h.fromEquirectangularTexture(l,u),e.set(u,h),u.addEventListener("dispose",r),n(h.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function o(){e=new WeakMap}return{get:a,dispose:o}}const Us=4,O_=[.125,.215,.35,.446,.526,.582],or=20,$C=256,wl=new Zu,N_=new It;let Fh=null,Ph=0,Oh=0,Nh=!1;const eb=new V;class z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,r=100,o={}){const{size:u=256,position:f=eb}=o;Fh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,r,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fh,Ph,Oh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fr||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:_a,format:ii,colorSpace:Eo,depthBuffer:!1},r=H_(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(e,n,a);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tb(o)),this._blurMaterial=ib(o,e,n),this._ggxMaterial=nb(o,e,n)}return r}_compileMaterial(e){const n=new _n(new Si,e);this._renderer.compile(n,wl)}_sceneToCubeUV(e,n,a,r,o){const d=new Ri(90,1,n,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(N_),g.toneMapping=ga,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Ro,new dr({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let A=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,A=!0):(x.color.copy(N_),A=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(d.up.set(0,h[w],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+m[w],o.y,o.z)):D===1?(d.up.set(0,0,h[w]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+m[w],o.z)):(d.up.set(0,h[w],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+m[w]));const R=this._cubeSize;lo(r,D*R,w>2?R:0,R,R),g.setRenderTarget(r),A&&g.render(E,d),g.render(e,d)}g.toneMapping=v,g.autoClear=_,e.background=T}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===fr||e.mapping===xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const o=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=e;const d=this._cubeSize;lo(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,wl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=a}_applyGGXFilter(e,n,a){const r=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const d=u.uniforms,h=a/(this._lodMeshes.length-1),m=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),_=0+h*1.25,v=g*_,{_lodMax:y}=this,E=this._sizeLods[a],x=3*E*(a>y-Us?a-y+Us:0),A=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=v,d.mipInt.value=y-n,lo(o,x,A,3*E,2*E),r.setRenderTarget(o),r.render(f,wl),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=y-a,lo(e,x,A,3*E,2*E),r.setRenderTarget(e),r.render(f,wl)}_blur(e,n,a,r,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",o),this._halfBlur(u,e,a,a,r,"longitudinal",o)}_halfBlur(e,n,a,r,o,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[r];g.material=h;const _=h.uniforms,v=this._sizeLods[a]-1,y=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*or-1),E=o/y,x=isFinite(o)?1+Math.floor(m*E):or;x>or&&ht(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${or}`);const A=[];let T=0;for(let b=0;b<or;++b){const O=b/E,C=Math.exp(-O*O/2);A.push(C),b===0?T+=C:b<x&&(T+=2*C)}for(let b=0;b<A.length;b++)A[b]=A[b]/T;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=A,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:w}=this;_.dTheta.value=y,_.mipInt.value=w-a;const D=this._sizeLods[r],R=3*D*(r>w-Us?r-w+Us:0),B=4*(this._cubeSize-D);lo(n,R,B,3*D,2*D),d.setRenderTarget(n),d.render(g,wl)}}function tb(l){const e=[],n=[],a=[];let r=l;const o=l-Us+1+O_.length;for(let u=0;u<o;u++){const f=Math.pow(2,r);e.push(f);let d=1/f;u>l-Us?d=O_[u-l+Us-1]:u===0&&(d=0),n.push(d);const h=1/(f-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,y=6,E=3,x=2,A=1,T=new Float32Array(E*y*v),w=new Float32Array(x*y*v),D=new Float32Array(A*y*v);for(let B=0;B<v;B++){const b=B%3*2/3-1,O=B>2?0:-1,C=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];T.set(C,E*y*B),w.set(_,x*y*B);const U=[B,B,B,B,B,B];D.set(U,A*y*B)}const R=new Si;R.setAttribute("position",new Qi(T,E)),R.setAttribute("uv",new Qi(w,x)),R.setAttribute("faceIndex",new Qi(D,A)),a.push(new _n(R,null)),r>Us&&r--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function H_(l,e,n){const a=new sa(l,e,n);return a.texture.mapping=Qu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function lo(l,e,n,a,r){l.viewport.set(e,n,a,r),l.scissor.set(e,n,a,r)}function nb(l,e,n){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$C,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function ib(l,e,n){const a=new Float32Array(or),r=new V(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function G_(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function V_(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}function ab(l){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,h=d===sp||d===rp,m=d===fr||d===xo;if(h||m){let g=e.get(f);const _=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new z_(l)),g=h?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return h&&v&&v.height>0||m&&v&&r(v)?(n===null&&(n=new z_(l)),g=h?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",o),g.texture):null}}}return f}function r(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function o(f){const d=f.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function sb(l){const e={};function n(a){if(e[a]!==void 0)return e[a];const r=l.getExtension(a);return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Vl("WebGLRenderer: "+a+" extension not supported."),r}}}function rb(l,e,n,a){const r={},o=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const y in _.attributes)e.remove(_.attributes[y]);_.removeEventListener("dispose",u),delete r[_.id];const v=o.get(_);v&&(e.remove(v),o.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(g,_){return r[_.id]===!0||(_.addEventListener("dispose",u),r[_.id]=!0,n.memory.geometries++),_}function d(g){const _=g.attributes;for(const v in _)e.update(_[v],l.ARRAY_BUFFER)}function h(g){const _=[],v=g.index,y=g.attributes.position;let E=0;if(v!==null){const T=v.array;E=v.version;for(let w=0,D=T.length;w<D;w+=3){const R=T[w+0],B=T[w+1],b=T[w+2];_.push(R,B,B,b,b,R)}}else if(y!==void 0){const T=y.array;E=y.version;for(let w=0,D=T.length/3-1;w<D;w+=3){const R=w+0,B=w+1,b=w+2;_.push(R,B,B,b,b,R)}}else return;const x=new(eA(_)?sA:aA)(_,1);x.version=E;const A=o.get(g);A&&e.remove(A),o.set(g,x)}function m(g){const _=o.get(g);if(_){const v=g.index;v!==null&&_.version<v.version&&h(g)}else h(g);return o.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function ob(l,e,n){let a;function r(_){a=_}let o,u;function f(_){o=_.type,u=_.bytesPerElement}function d(_,v){l.drawElements(a,v,o,_*u),n.update(v,a,1)}function h(_,v,y){y!==0&&(l.drawElementsInstanced(a,v,o,_*u,y),n.update(v,a,y))}function m(_,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,o,_,0,y);let x=0;for(let A=0;A<y;A++)x+=v[A];n.update(x,a,1)}function g(_,v,y,E){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let A=0;A<_.length;A++)h(_[A]/u,v[A],E[A]);else{x.multiDrawElementsInstancedWEBGL(a,v,0,o,_,0,E,0,y);let A=0;for(let T=0;T<y;T++)A+=v[T]*E[T];n.update(A,a,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function lb(l){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(o,u,f){switch(n.calls++,u){case l.TRIANGLES:n.triangles+=f*(o/3);break;case l.LINES:n.lines+=f*(o/2);break;case l.LINE_STRIP:n.lines+=f*(o-1);break;case l.LINE_LOOP:n.lines+=f*o;break;case l.POINTS:n.points+=f*o;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function cb(l,e,n){const a=new WeakMap,r=new fn;function o(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let _=a.get(f);if(_===void 0||_.count!==g){let U=function(){O.dispose(),a.delete(f),f.removeEventListener("dispose",U)};var v=U;_!==void 0&&_.texture.dispose();const y=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let D=0;y===!0&&(D=1),E===!0&&(D=2),x===!0&&(D=3);let R=f.attributes.position.count*D,B=1;R>e.maxTextureSize&&(B=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*B*4*g),O=new tA(b,R,B,g);O.type=Yi,O.needsUpdate=!0;const C=D*4;for(let N=0;N<g;N++){const k=A[N],X=T[N],W=w[N],Q=R*B*4*N;for(let P=0;P<k.count;P++){const H=P*C;y===!0&&(r.fromBufferAttribute(k,P),b[Q+H+0]=r.x,b[Q+H+1]=r.y,b[Q+H+2]=r.z,b[Q+H+3]=0),E===!0&&(r.fromBufferAttribute(X,P),b[Q+H+4]=r.x,b[Q+H+5]=r.y,b[Q+H+6]=r.z,b[Q+H+7]=0),x===!0&&(r.fromBufferAttribute(W,P),b[Q+H+8]=r.x,b[Q+H+9]=r.y,b[Q+H+10]=r.z,b[Q+H+11]=W.itemSize===4?r.w:1)}}_={count:g,texture:O,size:new ke(R,B)},a.set(f,_),f.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(l,"morphTexture",u.morphTexture,n);else{let y=0;for(let x=0;x<h.length;x++)y+=h[x];const E=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(l,"morphTargetBaseInfluence",E),d.getUniforms().setValue(l,"morphTargetInfluences",h)}d.getUniforms().setValue(l,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(l,"morphTargetsTextureSize",_.size)}return{update:o}}function ub(l,e,n,a){let r=new WeakMap;function o(d){const h=a.render.frame,m=d.geometry,g=e.get(d,m);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==h&&(n.update(d.instanceMatrix,l.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,l.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==h&&(_.update(),r.set(_,h))}return g}function u(){r=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:u}}const fb={[zv]:"LINEAR_TONE_MAPPING",[Hv]:"REINHARD_TONE_MAPPING",[Gv]:"CINEON_TONE_MAPPING",[Vv]:"ACES_FILMIC_TONE_MAPPING",[Xv]:"AGX_TONE_MAPPING",[Wv]:"NEUTRAL_TONE_MAPPING",[kv]:"CUSTOM_TONE_MAPPING"};function db(l,e,n,a,r){const o=new sa(e,n,{type:l,depthBuffer:a,stencilBuffer:r}),u=new sa(e,n,{type:_a,depthBuffer:!1,stencilBuffer:!1}),f=new Si;f.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new si([0,2,0,0,2,0],2));const d=new sM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new _n(f,d),m=new Zu(-1,1,1,-1,0,1);let g=null,_=null,v=!1,y,E=null,x=[],A=!1;this.setSize=function(T,w){o.setSize(T,w),u.setSize(T,w);for(let D=0;D<x.length;D++){const R=x[D];R.setSize&&R.setSize(T,w)}},this.setEffects=function(T){x=T,A=x.length>0&&x[0].isRenderPass===!0;const w=o.width,D=o.height;for(let R=0;R<x.length;R++){const B=x[R];B.setSize&&B.setSize(w,D)}},this.begin=function(T,w){if(v||T.toneMapping===ga&&x.length===0)return!1;if(E=w,w!==null){const D=w.width,R=w.height;(o.width!==D||o.height!==R)&&this.setSize(D,R)}return A===!1&&T.setRenderTarget(o),y=T.toneMapping,T.toneMapping=ga,!0},this.hasRenderPass=function(){return A},this.end=function(T,w){T.toneMapping=y,v=!0;let D=o,R=u;for(let B=0;B<x.length;B++){const b=x[B];if(b.enabled!==!1&&(b.render(T,R,D,w),b.needsSwap!==!1)){const O=D;D=R,R=O}}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,d.defines={},Dt.getTransfer(g)===Yt&&(d.defines.SRGB_TRANSFER="");const B=fb[_];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(E),T.render(h,m),E=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),u.dispose(),f.dispose(),d.dispose()}}const pA=new ai,Vp=new To(1,1),mA=new tA,gA=new BE,SA=new lA,k_=[],X_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function wo(l,e,n){const a=l[0];if(a<=0||a>0)return l;const r=e*n;let o=k_[r];if(o===void 0&&(o=new Float32Array(r),k_[r]=o),e!==0){a.toArray(o,0);for(let u=1,f=0;u!==e;++u)f+=n,l[u].toArray(o,f)}return o}function In(l,e){if(l.length!==e.length)return!1;for(let n=0,a=l.length;n<a;n++)if(l[n]!==e[n])return!1;return!0}function Un(l,e){for(let n=0,a=e.length;n<a;n++)l[n]=e[n]}function $u(l,e){let n=X_[e];n===void 0&&(n=new Int32Array(e),X_[e]=n);for(let a=0;a!==e;++a)n[a]=l.allocateTextureUnit();return n}function hb(l,e){const n=this.cache;n[0]!==e&&(l.uniform1f(this.addr,e),n[0]=e)}function pb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;l.uniform2fv(this.addr,e),Un(n,e)}}function mb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(In(n,e))return;l.uniform3fv(this.addr,e),Un(n,e)}}function gb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;l.uniform4fv(this.addr,e),Un(n,e)}}function Sb(l,e){const n=this.cache,a=e.elements;if(a===void 0){if(In(n,e))return;l.uniformMatrix2fv(this.addr,!1,e),Un(n,e)}else{if(In(n,a))return;Y_.set(a),l.uniformMatrix2fv(this.addr,!1,Y_),Un(n,a)}}function _b(l,e){const n=this.cache,a=e.elements;if(a===void 0){if(In(n,e))return;l.uniformMatrix3fv(this.addr,!1,e),Un(n,e)}else{if(In(n,a))return;q_.set(a),l.uniformMatrix3fv(this.addr,!1,q_),Un(n,a)}}function vb(l,e){const n=this.cache,a=e.elements;if(a===void 0){if(In(n,e))return;l.uniformMatrix4fv(this.addr,!1,e),Un(n,e)}else{if(In(n,a))return;W_.set(a),l.uniformMatrix4fv(this.addr,!1,W_),Un(n,a)}}function Ab(l,e){const n=this.cache;n[0]!==e&&(l.uniform1i(this.addr,e),n[0]=e)}function xb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;l.uniform2iv(this.addr,e),Un(n,e)}}function yb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(In(n,e))return;l.uniform3iv(this.addr,e),Un(n,e)}}function Eb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;l.uniform4iv(this.addr,e),Un(n,e)}}function Mb(l,e){const n=this.cache;n[0]!==e&&(l.uniform1ui(this.addr,e),n[0]=e)}function Tb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;l.uniform2uiv(this.addr,e),Un(n,e)}}function Cb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(In(n,e))return;l.uniform3uiv(this.addr,e),Un(n,e)}}function bb(l,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;l.uniform4uiv(this.addr,e),Un(n,e)}}function Rb(l,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r);let o;this.type===l.SAMPLER_2D_SHADOW?(Vp.compareFunction=n.isReversedDepthBuffer()?$p:Jp,o=Vp):o=pA,n.setTexture2D(e||o,r)}function wb(l,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||gA,r)}function Db(l,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||SA,r)}function Ib(l,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||mA,r)}function Ub(l){switch(l){case 5126:return hb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return Sb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return Ab;case 35667:case 35671:return xb;case 35668:case 35672:return yb;case 35669:case 35673:return Eb;case 5125:return Mb;case 36294:return Tb;case 36295:return Cb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Ib}}function Bb(l,e){l.uniform1fv(this.addr,e)}function Lb(l,e){const n=wo(e,this.size,2);l.uniform2fv(this.addr,n)}function Fb(l,e){const n=wo(e,this.size,3);l.uniform3fv(this.addr,n)}function Pb(l,e){const n=wo(e,this.size,4);l.uniform4fv(this.addr,n)}function Ob(l,e){const n=wo(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function Nb(l,e){const n=wo(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function zb(l,e){const n=wo(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function Hb(l,e){l.uniform1iv(this.addr,e)}function Gb(l,e){l.uniform2iv(this.addr,e)}function Vb(l,e){l.uniform3iv(this.addr,e)}function kb(l,e){l.uniform4iv(this.addr,e)}function Xb(l,e){l.uniform1uiv(this.addr,e)}function Wb(l,e){l.uniform2uiv(this.addr,e)}function qb(l,e){l.uniform3uiv(this.addr,e)}function Yb(l,e){l.uniform4uiv(this.addr,e)}function Qb(l,e,n){const a=this.cache,r=e.length,o=$u(n,r);In(a,o)||(l.uniform1iv(this.addr,o),Un(a,o));let u;this.type===l.SAMPLER_2D_SHADOW?u=Vp:u=pA;for(let f=0;f!==r;++f)n.setTexture2D(e[f]||u,o[f])}function jb(l,e,n){const a=this.cache,r=e.length,o=$u(n,r);In(a,o)||(l.uniform1iv(this.addr,o),Un(a,o));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||gA,o[u])}function Kb(l,e,n){const a=this.cache,r=e.length,o=$u(n,r);In(a,o)||(l.uniform1iv(this.addr,o),Un(a,o));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||SA,o[u])}function Zb(l,e,n){const a=this.cache,r=e.length,o=$u(n,r);In(a,o)||(l.uniform1iv(this.addr,o),Un(a,o));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||mA,o[u])}function Jb(l){switch(l){case 5126:return Bb;case 35664:return Lb;case 35665:return Fb;case 35666:return Pb;case 35674:return Ob;case 35675:return Nb;case 35676:return zb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Vb;case 35669:case 35673:return kb;case 5125:return Xb;case 36294:return Wb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Zb}}class $b{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Ub(n.type)}}class e1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jb(n.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let o=0,u=r.length;o!==u;++o){const f=r[o];f.setValue(e,n[f.id],a)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function Q_(l,e){l.seq.push(e),l.map[e.id]=e}function n1(l,e,n){const a=l.name,r=a.length;for(zh.lastIndex=0;;){const o=zh.exec(a),u=zh.lastIndex;let f=o[1];const d=o[2]==="]",h=o[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===r){Q_(n,h===void 0?new $b(f,l,e):new e1(f,l,e));break}else{let g=n.map[f];g===void 0&&(g=new t1(f),Q_(n,g)),n=g}}}class zu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=e.getActiveUniform(n,u),d=e.getUniformLocation(n,f.name);n1(f,d,this)}const r=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):o.push(u);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,a,r){const o=this.map[n];o!==void 0&&o.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let o=0,u=n.length;o!==u;++o){const f=n[o],d=a[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,o=e.length;r!==o;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function j_(l,e,n){const a=l.createShader(e);return l.shaderSource(a,n),l.compileShader(a),a}const i1=37297;let a1=0;function s1(l,e){const n=l.split(`
`),a=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let u=r;u<o;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const K_=new ft;function r1(l){Dt._getMatrix(K_,Dt.workingColorSpace,l);const e=`mat3( ${K_.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(l)){case Hu:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",l),[e,"LinearTransferOETF"]}}function Z_(l,e,n){const a=l.getShaderParameter(e,l.COMPILE_STATUS),o=(l.getShaderInfoLog(e)||"").trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+s1(l.getShaderSource(e),f)}else return o}function o1(l,e){const n=r1(e);return[`vec4 ${l}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const l1={[zv]:"Linear",[Hv]:"Reinhard",[Gv]:"Cineon",[Vv]:"ACESFilmic",[Xv]:"AgX",[Wv]:"Neutral",[kv]:"Custom"};function c1(l,e){const n=l1[e];return n===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mu=new V;function u1(){Dt.getLuminanceCoefficients(Mu);const l=Mu.x.toFixed(4),e=Mu.y.toFixed(4),n=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f1(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ul).join(`
`)}function d1(l){const e=[];for(const n in l){const a=l[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function h1(l,e){const n={},a=l.getProgramParameter(e,l.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const o=l.getActiveAttrib(e,r),u=o.name;let f=1;o.type===l.FLOAT_MAT2&&(f=2),o.type===l.FLOAT_MAT3&&(f=3),o.type===l.FLOAT_MAT4&&(f=4),n[u]={type:o.type,location:l.getAttribLocation(e,u),locationSize:f}}return n}function Ul(l){return l!==""}function J_(l,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $_(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(l){return l.replace(p1,g1)}const m1=new Map;function g1(l,e){let n=At[e];if(n===void 0){const a=m1.get(e);if(a!==void 0)n=At[a],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return kp(n)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(l){return l.replace(S1,_1)}function _1(l,e,n,a){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function tv(l){let e=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const v1={[Bu]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function A1(l){return v1[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const x1={[fr]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[Qu]:"ENVMAP_TYPE_CUBE_UV"};function y1(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":x1[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const E1={[xo]:"ENVMAP_MODE_REFRACTION"};function M1(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":E1[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const T1={[Nv]:"ENVMAP_BLENDING_MULTIPLY",[dE]:"ENVMAP_BLENDING_MIX",[hE]:"ENVMAP_BLENDING_ADD"};function C1(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":T1[l.combine]||"ENVMAP_BLENDING_NONE"}function b1(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function R1(l,e,n,a){const r=l.getContext(),o=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=A1(n),h=y1(n),m=M1(n),g=C1(n),_=b1(n),v=f1(n),y=d1(o),E=r.createProgram();let x,A,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ul).join(`
`),x.length>0&&(x+=`
`),A=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ul).join(`
`),A.length>0&&(A+=`
`)):(x=[tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ul).join(`
`),A=[tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ga?"#define TONE_MAPPING":"",n.toneMapping!==ga?At.tonemapping_pars_fragment:"",n.toneMapping!==ga?c1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,o1("linearToOutputTexel",n.outputColorSpace),u1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ul).join(`
`)),u=kp(u),u=J_(u,n),u=$_(u,n),f=kp(f),f=J_(f,n),f=$_(f,n),u=ev(u),f=ev(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,A=["#define varying in",n.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const w=T+x+u,D=T+A+f,R=j_(r,r.VERTEX_SHADER,w),B=j_(r,r.FRAGMENT_SHADER,D);r.attachShader(E,R),r.attachShader(E,B),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function b(N){if(l.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(B)||"",Q=k.trim(),P=X.trim(),H=W.trim();let Z=!0,re=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Z=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(r,E,R,B);else{const he=Z_(r,R,"vertex"),z=Z_(r,B,"fragment");Pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Q+`
`+he+`
`+z)}else Q!==""?ht("WebGLProgram: Program Info Log:",Q):(P===""||H==="")&&(re=!1);re&&(N.diagnostics={runnable:Z,programLog:Q,vertexShader:{log:P,prefix:x},fragmentShader:{log:H,prefix:A}})}r.deleteShader(R),r.deleteShader(B),O=new zu(r,E),C=h1(r,E)}let O;this.getUniforms=function(){return O===void 0&&b(this),O};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(E,i1)),U},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=a1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=B,this}let w1=0;class D1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new I1(e),n.set(e,a)),a}}class I1{constructor(e){this.id=w1++,this.code=e,this.usedTimes=0}}function U1(l,e,n,a,r,o,u){const f=new nA,d=new D1,h=new Set,m=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,U,N,k,X){const W=k.fog,Q=X.geometry,P=C.isMeshStandardMaterial?k.environment:null,H=(C.isMeshStandardMaterial?n:e).get(C.envMap||P),Z=H&&H.mapping===Qu?H.image.height:null,re=y[C.type];C.precision!==null&&(v=r.getMaxPrecision(C.precision),v!==C.precision&&ht("WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,z=he!==void 0?he.length:0;let ie=0;Q.morphAttributes.position!==void 0&&(ie=1),Q.morphAttributes.normal!==void 0&&(ie=2),Q.morphAttributes.color!==void 0&&(ie=3);let pe,Me,we,$;if(re){const wt=da[re];pe=wt.vertexShader,Me=wt.fragmentShader}else pe=C.vertexShader,Me=C.fragmentShader,d.update(C),we=d.getVertexShaderID(C),$=d.getFragmentShaderID(C);const ce=l.getRenderTarget(),be=l.state.buffers.depth.getReversed(),Fe=X.isInstancedMesh===!0,Ue=X.isBatchedMesh===!0,at=!!C.map,St=!!C.matcap,Je=!!H,tt=!!C.aoMap,et=!!C.lightMap,it=!!C.bumpMap,Rt=!!C.normalMap,q=!!C.displacementMap,xt=!!C.emissiveMap,gt=!!C.metalnessMap,Ut=!!C.roughnessMap,Qe=C.anisotropy>0,G=C.clearcoat>0,I=C.dispersion>0,ee=C.iridescence>0,ve=C.sheen>0,Te=C.transmission>0,Se=Qe&&!!C.anisotropyMap,je=G&&!!C.clearcoatMap,Pe=G&&!!C.clearcoatNormalMap,We=G&&!!C.clearcoatRoughnessMap,j=ee&&!!C.iridescenceMap,ue=ee&&!!C.iridescenceThicknessMap,Ee=ve&&!!C.sheenColorMap,De=ve&&!!C.sheenRoughnessMap,Be=!!C.specularMap,Le=!!C.specularColorMap,ut=!!C.specularIntensityMap,J=Te&&!!C.transmissionMap,ze=Te&&!!C.thicknessMap,Re=!!C.gradientMap,Oe=!!C.alphaMap,Ce=C.alphaTest>0,Ae=!!C.alphaHash,Ie=!!C.extensions;let ot=ga;C.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ot=l.toneMapping);const kt={shaderID:re,shaderType:C.type,shaderName:C.name,vertexShader:pe,fragmentShader:Me,defines:C.defines,customVertexShaderID:we,customFragmentShaderID:$,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Ue,batchingColor:Ue&&X._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&X.instanceColor!==null,instancingMorph:Fe&&X.morphTexture!==null,outputColorSpace:ce===null?l.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Eo,alphaToCoverage:!!C.alphaToCoverage,map:at,matcap:St,envMap:Je,envMapMode:Je&&H.mapping,envMapCubeUVHeight:Z,aoMap:tt,lightMap:et,bumpMap:it,normalMap:Rt,displacementMap:q,emissiveMap:xt,normalMapObjectSpace:Rt&&C.normalMapType===SE,normalMapTangentSpace:Rt&&C.normalMapType===gE,metalnessMap:gt,roughnessMap:Ut,anisotropy:Qe,anisotropyMap:Se,clearcoat:G,clearcoatMap:je,clearcoatNormalMap:Pe,clearcoatRoughnessMap:We,dispersion:I,iridescence:ee,iridescenceMap:j,iridescenceThicknessMap:ue,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Be,specularColorMap:Le,specularIntensityMap:ut,transmission:Te,transmissionMap:J,thicknessMap:ze,gradientMap:Re,opaque:C.transparent===!1&&C.blending===Ls&&C.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Ce,alphaHash:Ae,combine:C.combine,mapUv:at&&E(C.map.channel),aoMapUv:tt&&E(C.aoMap.channel),lightMapUv:et&&E(C.lightMap.channel),bumpMapUv:it&&E(C.bumpMap.channel),normalMapUv:Rt&&E(C.normalMap.channel),displacementMapUv:q&&E(C.displacementMap.channel),emissiveMapUv:xt&&E(C.emissiveMap.channel),metalnessMapUv:gt&&E(C.metalnessMap.channel),roughnessMapUv:Ut&&E(C.roughnessMap.channel),anisotropyMapUv:Se&&E(C.anisotropyMap.channel),clearcoatMapUv:je&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:De&&E(C.sheenRoughnessMap.channel),specularMapUv:Be&&E(C.specularMap.channel),specularColorMapUv:Le&&E(C.specularColorMap.channel),specularIntensityMapUv:ut&&E(C.specularIntensityMap.channel),transmissionMapUv:J&&E(C.transmissionMap.channel),thicknessMapUv:ze&&E(C.thicknessMap.channel),alphaMapUv:Oe&&E(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Rt||Qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(at||Oe),fog:!!W,useFog:C.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:be,skinning:X.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ie,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:l.shadowMap.enabled&&N.length>0,shadowMapType:l.shadowMap.type,toneMapping:ot,decodeVideoTexture:at&&C.map.isVideoTexture===!0&&Dt.getTransfer(C.map.colorSpace)===Yt,decodeVideoTextureEmissive:xt&&C.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(C.emissiveMap.colorSpace)===Yt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===qi,flipSided:C.side===gi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ie&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&C.extensions.multiDraw===!0||Ue)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return kt.vertexUv1s=h.has(1),kt.vertexUv2s=h.has(2),kt.vertexUv3s=h.has(3),h.clear(),kt}function A(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)U.push(N),U.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(T(U,C),w(U,C),U.push(l.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function T(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function w(C,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),C.push(f.mask)}function D(C){const U=y[C.type];let N;if(U){const k=da[U];N=jE.clone(k.uniforms)}else N=C.uniforms;return N}function R(C,U){let N=g.get(U);return N!==void 0?++N.usedTimes:(N=new R1(l,U,C,o),m.push(N),g.set(U,N)),N}function B(C){if(--C.usedTimes===0){const U=m.indexOf(C);m[U]=m[m.length-1],m.pop(),g.delete(C.cacheKey),C.destroy()}}function b(C){d.remove(C)}function O(){d.dispose()}return{getParameters:x,getProgramCacheKey:A,getUniforms:D,acquireProgram:R,releaseProgram:B,releaseShaderCache:b,programs:m,dispose:O}}function B1(){let l=new WeakMap;function e(u){return l.has(u)}function n(u){let f=l.get(u);return f===void 0&&(f={},l.set(u,f)),f}function a(u){l.delete(u)}function r(u,f,d){l.get(u)[f]=d}function o(){l=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:o}}function L1(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function nv(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function iv(){const l=[];let e=0;const n=[],a=[],r=[];function o(){e=0,n.length=0,a.length=0,r.length=0}function u(g,_,v,y,E,x){let A=l[e];return A===void 0?(A={id:g.id,object:g,geometry:_,material:v,groupOrder:y,renderOrder:g.renderOrder,z:E,group:x},l[e]=A):(A.id=g.id,A.object=g,A.geometry=_,A.material=v,A.groupOrder=y,A.renderOrder=g.renderOrder,A.z=E,A.group=x),e++,A}function f(g,_,v,y,E,x){const A=u(g,_,v,y,E,x);v.transmission>0?a.push(A):v.transparent===!0?r.push(A):n.push(A)}function d(g,_,v,y,E,x){const A=u(g,_,v,y,E,x);v.transmission>0?a.unshift(A):v.transparent===!0?r.unshift(A):n.unshift(A)}function h(g,_){n.length>1&&n.sort(g||L1),a.length>1&&a.sort(_||nv),r.length>1&&r.sort(_||nv)}function m(){for(let g=e,_=l.length;g<_;g++){const v=l[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:a,transparent:r,init:o,push:f,unshift:d,finish:m,sort:h}}function F1(){let l=new WeakMap;function e(a,r){const o=l.get(a);let u;return o===void 0?(u=new iv,l.set(a,[u])):r>=o.length?(u=new iv,o.push(u)):u=o[r],u}function n(){l=new WeakMap}return{get:e,dispose:n}}function P1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new It};break;case"SpotLight":n={position:new V,direction:new V,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new It,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new It,groundColor:new It};break;case"RectAreaLight":n={color:new It,position:new V,halfWidth:new V,halfHeight:new V};break}return l[e.id]=n,n}}}function O1(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=n,n}}}let N1=0;function z1(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function H1(l){const e=new P1,n=O1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new V);const r=new V,o=new dt,u=new dt;function f(h){let m=0,g=0,_=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let v=0,y=0,E=0,x=0,A=0,T=0,w=0,D=0,R=0,B=0,b=0;h.sort(z1);for(let C=0,U=h.length;C<U;C++){const N=h[C],k=N.color,X=N.intensity,W=N.distance;let Q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===yo?Q=N.shadow.map.texture:Q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)m+=k.r*X,g+=k.g*X,_+=k.b*X;else if(N.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(N.sh.coefficients[P],X);b++}else if(N.isDirectionalLight){const P=e.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const H=N.shadow,Z=n.get(N);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,a.directionalShadow[v]=Z,a.directionalShadowMap[v]=Q,a.directionalShadowMatrix[v]=N.shadow.matrix,T++}a.directional[v]=P,v++}else if(N.isSpotLight){const P=e.get(N);P.position.setFromMatrixPosition(N.matrixWorld),P.color.copy(k).multiplyScalar(X),P.distance=W,P.coneCos=Math.cos(N.angle),P.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),P.decay=N.decay,a.spot[E]=P;const H=N.shadow;if(N.map&&(a.spotLightMap[R]=N.map,R++,H.updateMatrices(N),N.castShadow&&B++),a.spotLightMatrix[E]=H.matrix,N.castShadow){const Z=n.get(N);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,a.spotShadow[E]=Z,a.spotShadowMap[E]=Q,D++}E++}else if(N.isRectAreaLight){const P=e.get(N);P.color.copy(k).multiplyScalar(X),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),a.rectArea[x]=P,x++}else if(N.isPointLight){const P=e.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity),P.distance=N.distance,P.decay=N.decay,N.castShadow){const H=N.shadow,Z=n.get(N);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,a.pointShadow[y]=Z,a.pointShadowMap[y]=Q,a.pointShadowMatrix[y]=N.shadow.matrix,w++}a.point[y]=P,y++}else if(N.isHemisphereLight){const P=e.get(N);P.skyColor.copy(N.color).multiplyScalar(X),P.groundColor.copy(N.groundColor).multiplyScalar(X),a.hemi[A]=P,A++}}x>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ve.LTC_FLOAT_1,a.rectAreaLTC2=Ve.LTC_FLOAT_2):(a.rectAreaLTC1=Ve.LTC_HALF_1,a.rectAreaLTC2=Ve.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=g,a.ambient[2]=_;const O=a.hash;(O.directionalLength!==v||O.pointLength!==y||O.spotLength!==E||O.rectAreaLength!==x||O.hemiLength!==A||O.numDirectionalShadows!==T||O.numPointShadows!==w||O.numSpotShadows!==D||O.numSpotMaps!==R||O.numLightProbes!==b)&&(a.directional.length=v,a.spot.length=E,a.rectArea.length=x,a.point.length=y,a.hemi.length=A,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=D+R-B,a.spotLightMap.length=R,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=b,O.directionalLength=v,O.pointLength=y,O.spotLength=E,O.rectAreaLength=x,O.hemiLength=A,O.numDirectionalShadows=T,O.numPointShadows=w,O.numSpotShadows=D,O.numSpotMaps=R,O.numLightProbes=b,a.version=N1++)}function d(h,m){let g=0,_=0,v=0,y=0,E=0;const x=m.matrixWorldInverse;for(let A=0,T=h.length;A<T;A++){const w=h[A];if(w.isDirectionalLight){const D=a.directional[g];D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),g++}else if(w.isSpotLight){const D=a.spot[v];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(x),v++}else if(w.isRectAreaLight){const D=a.rectArea[y];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(x),u.identity(),o.copy(w.matrixWorld),o.premultiply(x),u.extractRotation(o),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),y++}else if(w.isPointLight){const D=a.point[_];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(x),_++}else if(w.isHemisphereLight){const D=a.hemi[E];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(x),E++}}}return{setup:f,setupView:d,state:a}}function av(l){const e=new H1(l),n=[],a=[];function r(m){h.camera=m,n.length=0,a.length=0}function o(m){n.push(m)}function u(m){a.push(m)}function f(){e.setup(n)}function d(m){e.setupView(n,m)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:d,pushLight:o,pushShadow:u}}function G1(l){let e=new WeakMap;function n(r,o=0){const u=e.get(r);let f;return u===void 0?(f=new av(l),e.set(r,[f])):o>=u.length?(f=new av(l),u.push(f)):f=u[o],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k1=`uniform sampler2D shadow_pass;
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
}`,X1=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],W1=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],sv=new dt,Dl=new V,Hh=new V;function q1(l,e,n){let a=new fA;const r=new ke,o=new ke,u=new fn,f=new rM,d=new oM,h={},m=n.maxTextureSize,g={[Sa]:gi,[gi]:Sa,[qi]:qi},_=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:V1,fragmentShader:k1}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const y=new Si;y.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _n(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let A=this.type;this.render=function(B,b,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;B.type===Qy&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Bu);const C=l.getRenderTarget(),U=l.getActiveCubeFace(),N=l.getActiveMipmapLevel(),k=l.state;k.setBlending(ja),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=A!==this.type;X&&b.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Q=B.length;W<Q;W++){const P=B[W],H=P.shadow;if(H===void 0){ht("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Z=H.getFrameExtents();if(r.multiply(Z),o.copy(H.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/Z.x),r.x=o.x*Z.x,H.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/Z.y),r.y=o.y*Z.y,H.mapSize.y=o.y)),H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Il){if(P.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new sa(r.x,r.y,{format:yo,type:_a,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new To(r.x,r.y,Yi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=va,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Yn,H.map.depthTexture.magFilter=Yn}else{P.isPointLight?(H.map=new cA(r.x),H.map.depthTexture=new aM(r.x,ni)):(H.map=new sa(r.x,r.y),H.map.depthTexture=new To(r.x,r.y,ni)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=va;const he=l.state.buffers.depth.getReversed();this.type===Bu?(H.map.depthTexture.compareFunction=he?$p:Jp,H.map.depthTexture.minFilter=Jn,H.map.depthTexture.magFilter=Jn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Yn,H.map.depthTexture.magFilter=Yn)}H.camera.updateProjectionMatrix()}const re=H.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<re;he++){if(H.map.isWebGLCubeRenderTarget)l.setRenderTarget(H.map,he),l.clear();else{he===0&&(l.setRenderTarget(H.map),l.clear());const z=H.getViewport(he);u.set(o.x*z.x,o.y*z.y,o.x*z.z,o.y*z.w),k.viewport(u)}if(P.isPointLight){const z=H.camera,ie=H.matrix,pe=P.distance||z.far;pe!==z.far&&(z.far=pe,z.updateProjectionMatrix()),Dl.setFromMatrixPosition(P.matrixWorld),z.position.copy(Dl),Hh.copy(z.position),Hh.add(X1[he]),z.up.copy(W1[he]),z.lookAt(Hh),z.updateMatrixWorld(),ie.makeTranslation(-Dl.x,-Dl.y,-Dl.z),sv.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sv,z.coordinateSystem,z.reversedDepth)}else H.updateMatrices(P);a=H.getFrustum(),D(b,O,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===Il&&T(H,O),H.needsUpdate=!1}A=this.type,x.needsUpdate=!1,l.setRenderTarget(C,U,N)};function T(B,b){const O=e.update(E);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,v.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new sa(r.x,r.y,{format:yo,type:_a})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,l.setRenderTarget(B.mapPass),l.clear(),l.renderBufferDirect(b,null,O,_,E,null),v.uniforms.shadow_pass.value=B.mapPass.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,l.setRenderTarget(B.map),l.clear(),l.renderBufferDirect(b,null,O,v,E,null)}function w(B,b,O,C){let U=null;const N=O.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)U=N;else if(U=O.isPointLight===!0?d:f,l.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=U.uuid,X=b.uuid;let W=h[k];W===void 0&&(W={},h[k]=W);let Q=W[X];Q===void 0&&(Q=U.clone(),W[X]=Q,b.addEventListener("dispose",R)),U=Q}if(U.visible=b.visible,U.wireframe=b.wireframe,C===Il?U.side=b.shadowSide!==null?b.shadowSide:b.side:U.side=b.shadowSide!==null?b.shadowSide:g[b.side],U.alphaMap=b.alphaMap,U.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,U.map=b.map,U.clipShadows=b.clipShadows,U.clippingPlanes=b.clippingPlanes,U.clipIntersection=b.clipIntersection,U.displacementMap=b.displacementMap,U.displacementScale=b.displacementScale,U.displacementBias=b.displacementBias,U.wireframeLinewidth=b.wireframeLinewidth,U.linewidth=b.linewidth,O.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const k=l.properties.get(U);k.light=O}return U}function D(B,b,O,C,U){if(B.visible===!1)return;if(B.layers.test(b.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===Il)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,B.matrixWorld);const X=e.update(B),W=B.material;if(Array.isArray(W)){const Q=X.groups;for(let P=0,H=Q.length;P<H;P++){const Z=Q[P],re=W[Z.materialIndex];if(re&&re.visible){const he=w(B,re,C,U);B.onBeforeShadow(l,B,b,O,X,he,Z),l.renderBufferDirect(O,null,X,he,B,Z),B.onAfterShadow(l,B,b,O,X,he,Z)}}}else if(W.visible){const Q=w(B,W,C,U);B.onBeforeShadow(l,B,b,O,X,Q,null),l.renderBufferDirect(O,null,X,Q,B,null),B.onAfterShadow(l,B,b,O,X,Q,null)}}const k=B.children;for(let X=0,W=k.length;X<W;X++)D(k[X],b,O,C,U)}function R(B){B.target.removeEventListener("dispose",R);for(const O in h){const C=h[O],U=B.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}const Y1={[Jh]:$h,[ep]:ip,[tp]:ap,[Ao]:np,[$h]:Jh,[ip]:ep,[ap]:tp,[np]:Ao};function Q1(l,e){function n(){let J=!1;const ze=new fn;let Re=null;const Oe=new fn(0,0,0,0);return{setMask:function(Ce){Re!==Ce&&!J&&(l.colorMask(Ce,Ce,Ce,Ce),Re=Ce)},setLocked:function(Ce){J=Ce},setClear:function(Ce,Ae,Ie,ot,kt){kt===!0&&(Ce*=ot,Ae*=ot,Ie*=ot),ze.set(Ce,Ae,Ie,ot),Oe.equals(ze)===!1&&(l.clearColor(Ce,Ae,Ie,ot),Oe.copy(ze))},reset:function(){J=!1,Re=null,Oe.set(-1,0,0,0)}}}function a(){let J=!1,ze=!1,Re=null,Oe=null,Ce=null;return{setReversed:function(Ae){if(ze!==Ae){const Ie=e.get("EXT_clip_control");Ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ze=Ae;const ot=Ce;Ce=null,this.setClear(ot)}},getReversed:function(){return ze},setTest:function(Ae){Ae?ce(l.DEPTH_TEST):be(l.DEPTH_TEST)},setMask:function(Ae){Re!==Ae&&!J&&(l.depthMask(Ae),Re=Ae)},setFunc:function(Ae){if(ze&&(Ae=Y1[Ae]),Oe!==Ae){switch(Ae){case Jh:l.depthFunc(l.NEVER);break;case $h:l.depthFunc(l.ALWAYS);break;case ep:l.depthFunc(l.LESS);break;case Ao:l.depthFunc(l.LEQUAL);break;case tp:l.depthFunc(l.EQUAL);break;case np:l.depthFunc(l.GEQUAL);break;case ip:l.depthFunc(l.GREATER);break;case ap:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Oe=Ae}},setLocked:function(Ae){J=Ae},setClear:function(Ae){Ce!==Ae&&(ze&&(Ae=1-Ae),l.clearDepth(Ae),Ce=Ae)},reset:function(){J=!1,Re=null,Oe=null,Ce=null,ze=!1}}}function r(){let J=!1,ze=null,Re=null,Oe=null,Ce=null,Ae=null,Ie=null,ot=null,kt=null;return{setTest:function(wt){J||(wt?ce(l.STENCIL_TEST):be(l.STENCIL_TEST))},setMask:function(wt){ze!==wt&&!J&&(l.stencilMask(wt),ze=wt)},setFunc:function(wt,Qn,ji){(Re!==wt||Oe!==Qn||Ce!==ji)&&(l.stencilFunc(wt,Qn,ji),Re=wt,Oe=Qn,Ce=ji)},setOp:function(wt,Qn,ji){(Ae!==wt||Ie!==Qn||ot!==ji)&&(l.stencilOp(wt,Qn,ji),Ae=wt,Ie=Qn,ot=ji)},setLocked:function(wt){J=wt},setClear:function(wt){kt!==wt&&(l.clearStencil(wt),kt=wt)},reset:function(){J=!1,ze=null,Re=null,Oe=null,Ce=null,Ae=null,Ie=null,ot=null,kt=null}}}const o=new n,u=new a,f=new r,d=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,v=[],y=null,E=!1,x=null,A=null,T=null,w=null,D=null,R=null,B=null,b=new It(0,0,0),O=0,C=!1,U=null,N=null,k=null,X=null,W=null;const Q=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const Z=l.getParameter(l.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=H>=2);let re=null,he={};const z=l.getParameter(l.SCISSOR_BOX),ie=l.getParameter(l.VIEWPORT),pe=new fn().fromArray(z),Me=new fn().fromArray(ie);function we(J,ze,Re,Oe){const Ce=new Uint8Array(4),Ae=l.createTexture();l.bindTexture(J,Ae),l.texParameteri(J,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(J,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let Ie=0;Ie<Re;Ie++)J===l.TEXTURE_3D||J===l.TEXTURE_2D_ARRAY?l.texImage3D(ze,0,l.RGBA,1,1,Oe,0,l.RGBA,l.UNSIGNED_BYTE,Ce):l.texImage2D(ze+Ie,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Ce);return Ae}const $={};$[l.TEXTURE_2D]=we(l.TEXTURE_2D,l.TEXTURE_2D,1),$[l.TEXTURE_CUBE_MAP]=we(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[l.TEXTURE_2D_ARRAY]=we(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),$[l.TEXTURE_3D]=we(l.TEXTURE_3D,l.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(l.DEPTH_TEST),u.setFunc(Ao),it(!1),Rt(f_),ce(l.CULL_FACE),tt(ja);function ce(J){m[J]!==!0&&(l.enable(J),m[J]=!0)}function be(J){m[J]!==!1&&(l.disable(J),m[J]=!1)}function Fe(J,ze){return g[J]!==ze?(l.bindFramebuffer(J,ze),g[J]=ze,J===l.DRAW_FRAMEBUFFER&&(g[l.FRAMEBUFFER]=ze),J===l.FRAMEBUFFER&&(g[l.DRAW_FRAMEBUFFER]=ze),!0):!1}function Ue(J,ze){let Re=v,Oe=!1;if(J){Re=_.get(ze),Re===void 0&&(Re=[],_.set(ze,Re));const Ce=J.textures;if(Re.length!==Ce.length||Re[0]!==l.COLOR_ATTACHMENT0){for(let Ae=0,Ie=Ce.length;Ae<Ie;Ae++)Re[Ae]=l.COLOR_ATTACHMENT0+Ae;Re.length=Ce.length,Oe=!0}}else Re[0]!==l.BACK&&(Re[0]=l.BACK,Oe=!0);Oe&&l.drawBuffers(Re)}function at(J){return y!==J?(l.useProgram(J),y=J,!0):!1}const St={[rr]:l.FUNC_ADD,[jy]:l.FUNC_SUBTRACT,[Ky]:l.FUNC_REVERSE_SUBTRACT};St[Zy]=l.MIN,St[Jy]=l.MAX;const Je={[$y]:l.ZERO,[eE]:l.ONE,[tE]:l.SRC_COLOR,[Nl]:l.SRC_ALPHA,[oE]:l.SRC_ALPHA_SATURATE,[sE]:l.DST_COLOR,[iE]:l.DST_ALPHA,[nE]:l.ONE_MINUS_SRC_COLOR,[zl]:l.ONE_MINUS_SRC_ALPHA,[rE]:l.ONE_MINUS_DST_COLOR,[aE]:l.ONE_MINUS_DST_ALPHA,[lE]:l.CONSTANT_COLOR,[cE]:l.ONE_MINUS_CONSTANT_COLOR,[uE]:l.CONSTANT_ALPHA,[fE]:l.ONE_MINUS_CONSTANT_ALPHA};function tt(J,ze,Re,Oe,Ce,Ae,Ie,ot,kt,wt){if(J===ja){E===!0&&(be(l.BLEND),E=!1);return}if(E===!1&&(ce(l.BLEND),E=!0),J!==Ov){if(J!==x||wt!==C){if((A!==rr||D!==rr)&&(l.blendEquation(l.FUNC_ADD),A=rr,D=rr),wt)switch(J){case Ls:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case d_:l.blendFunc(l.ONE,l.ONE);break;case h_:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case p_:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:Pt("WebGLState: Invalid blending: ",J);break}else switch(J){case Ls:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case d_:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case h_:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",J);break}T=null,w=null,R=null,B=null,b.set(0,0,0),O=0,x=J,C=wt}return}Ce=Ce||ze,Ae=Ae||Re,Ie=Ie||Oe,(ze!==A||Ce!==D)&&(l.blendEquationSeparate(St[ze],St[Ce]),A=ze,D=Ce),(Re!==T||Oe!==w||Ae!==R||Ie!==B)&&(l.blendFuncSeparate(Je[Re],Je[Oe],Je[Ae],Je[Ie]),T=Re,w=Oe,R=Ae,B=Ie),(ot.equals(b)===!1||kt!==O)&&(l.blendColor(ot.r,ot.g,ot.b,kt),b.copy(ot),O=kt),x=J,C=!1}function et(J,ze){J.side===qi?be(l.CULL_FACE):ce(l.CULL_FACE);let Re=J.side===gi;ze&&(Re=!Re),it(Re),J.blending===Ls&&J.transparent===!1?tt(ja):tt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),o.setMask(J.colorWrite);const Oe=J.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(J.stencilWriteMask),f.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),f.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),xt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ce(l.SAMPLE_ALPHA_TO_COVERAGE):be(l.SAMPLE_ALPHA_TO_COVERAGE)}function it(J){U!==J&&(J?l.frontFace(l.CW):l.frontFace(l.CCW),U=J)}function Rt(J){J!==qy?(ce(l.CULL_FACE),J!==N&&(J===f_?l.cullFace(l.BACK):J===Yy?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):be(l.CULL_FACE),N=J}function q(J){J!==k&&(P&&l.lineWidth(J),k=J)}function xt(J,ze,Re){J?(ce(l.POLYGON_OFFSET_FILL),(X!==ze||W!==Re)&&(l.polygonOffset(ze,Re),X=ze,W=Re)):be(l.POLYGON_OFFSET_FILL)}function gt(J){J?ce(l.SCISSOR_TEST):be(l.SCISSOR_TEST)}function Ut(J){J===void 0&&(J=l.TEXTURE0+Q-1),re!==J&&(l.activeTexture(J),re=J)}function Qe(J,ze,Re){Re===void 0&&(re===null?Re=l.TEXTURE0+Q-1:Re=re);let Oe=he[Re];Oe===void 0&&(Oe={type:void 0,texture:void 0},he[Re]=Oe),(Oe.type!==J||Oe.texture!==ze)&&(re!==Re&&(l.activeTexture(Re),re=Re),l.bindTexture(J,ze||$[J]),Oe.type=J,Oe.texture=ze)}function G(){const J=he[re];J!==void 0&&J.type!==void 0&&(l.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function I(){try{l.compressedTexImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ee(){try{l.compressedTexImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ve(){try{l.texSubImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Te(){try{l.texSubImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Se(){try{l.compressedTexSubImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function je(){try{l.compressedTexSubImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Pe(){try{l.texStorage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function We(){try{l.texStorage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function j(){try{l.texImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ue(){try{l.texImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Ee(J){pe.equals(J)===!1&&(l.scissor(J.x,J.y,J.z,J.w),pe.copy(J))}function De(J){Me.equals(J)===!1&&(l.viewport(J.x,J.y,J.z,J.w),Me.copy(J))}function Be(J,ze){let Re=h.get(ze);Re===void 0&&(Re=new WeakMap,h.set(ze,Re));let Oe=Re.get(J);Oe===void 0&&(Oe=l.getUniformBlockIndex(ze,J.name),Re.set(J,Oe))}function Le(J,ze){const Oe=h.get(ze).get(J);d.get(ze)!==Oe&&(l.uniformBlockBinding(ze,Oe,J.__bindingPointIndex),d.set(ze,Oe))}function ut(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),u.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),m={},re=null,he={},g={},_=new WeakMap,v=[],y=null,E=!1,x=null,A=null,T=null,w=null,D=null,R=null,B=null,b=new It(0,0,0),O=0,C=!1,U=null,N=null,k=null,X=null,W=null,pe.set(0,0,l.canvas.width,l.canvas.height),Me.set(0,0,l.canvas.width,l.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:ce,disable:be,bindFramebuffer:Fe,drawBuffers:Ue,useProgram:at,setBlending:tt,setMaterial:et,setFlipSided:it,setCullFace:Rt,setLineWidth:q,setPolygonOffset:xt,setScissorTest:gt,activeTexture:Ut,bindTexture:Qe,unbindTexture:G,compressedTexImage2D:I,compressedTexImage3D:ee,texImage2D:j,texImage3D:ue,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:Pe,texStorage3D:We,texSubImage2D:ve,texSubImage3D:Te,compressedTexSubImage2D:Se,compressedTexSubImage3D:je,scissor:Ee,viewport:De,reset:ut}}function j1(l,e,n,a,r,o,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,m=new WeakMap;let g;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(G,I){return v?new OffscreenCanvas(G,I):Vu("canvas")}function E(G,I,ee){let ve=1;const Te=Qe(G);if((Te.width>ee||Te.height>ee)&&(ve=ee/Math.max(Te.width,Te.height)),ve<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const Se=Math.floor(ve*Te.width),je=Math.floor(ve*Te.height);g===void 0&&(g=y(Se,je));const Pe=I?y(Se,je):g;return Pe.width=Se,Pe.height=je,Pe.getContext("2d").drawImage(G,0,0,Se,je),ht("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Se+"x"+je+")."),Pe}else return"data"in G&&ht("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),G;return G}function x(G){return G.generateMipmaps}function A(G){l.generateMipmap(G)}function T(G){return G.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?l.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function w(G,I,ee,ve,Te=!1){if(G!==null){if(l[G]!==void 0)return l[G];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Se=I;if(I===l.RED&&(ee===l.FLOAT&&(Se=l.R32F),ee===l.HALF_FLOAT&&(Se=l.R16F),ee===l.UNSIGNED_BYTE&&(Se=l.R8)),I===l.RED_INTEGER&&(ee===l.UNSIGNED_BYTE&&(Se=l.R8UI),ee===l.UNSIGNED_SHORT&&(Se=l.R16UI),ee===l.UNSIGNED_INT&&(Se=l.R32UI),ee===l.BYTE&&(Se=l.R8I),ee===l.SHORT&&(Se=l.R16I),ee===l.INT&&(Se=l.R32I)),I===l.RG&&(ee===l.FLOAT&&(Se=l.RG32F),ee===l.HALF_FLOAT&&(Se=l.RG16F),ee===l.UNSIGNED_BYTE&&(Se=l.RG8)),I===l.RG_INTEGER&&(ee===l.UNSIGNED_BYTE&&(Se=l.RG8UI),ee===l.UNSIGNED_SHORT&&(Se=l.RG16UI),ee===l.UNSIGNED_INT&&(Se=l.RG32UI),ee===l.BYTE&&(Se=l.RG8I),ee===l.SHORT&&(Se=l.RG16I),ee===l.INT&&(Se=l.RG32I)),I===l.RGB_INTEGER&&(ee===l.UNSIGNED_BYTE&&(Se=l.RGB8UI),ee===l.UNSIGNED_SHORT&&(Se=l.RGB16UI),ee===l.UNSIGNED_INT&&(Se=l.RGB32UI),ee===l.BYTE&&(Se=l.RGB8I),ee===l.SHORT&&(Se=l.RGB16I),ee===l.INT&&(Se=l.RGB32I)),I===l.RGBA_INTEGER&&(ee===l.UNSIGNED_BYTE&&(Se=l.RGBA8UI),ee===l.UNSIGNED_SHORT&&(Se=l.RGBA16UI),ee===l.UNSIGNED_INT&&(Se=l.RGBA32UI),ee===l.BYTE&&(Se=l.RGBA8I),ee===l.SHORT&&(Se=l.RGBA16I),ee===l.INT&&(Se=l.RGBA32I)),I===l.RGB&&(ee===l.UNSIGNED_INT_5_9_9_9_REV&&(Se=l.RGB9_E5),ee===l.UNSIGNED_INT_10F_11F_11F_REV&&(Se=l.R11F_G11F_B10F)),I===l.RGBA){const je=Te?Hu:Dt.getTransfer(ve);ee===l.FLOAT&&(Se=l.RGBA32F),ee===l.HALF_FLOAT&&(Se=l.RGBA16F),ee===l.UNSIGNED_BYTE&&(Se=je===Yt?l.SRGB8_ALPHA8:l.RGBA8),ee===l.UNSIGNED_SHORT_4_4_4_4&&(Se=l.RGBA4),ee===l.UNSIGNED_SHORT_5_5_5_1&&(Se=l.RGB5_A1)}return(Se===l.R16F||Se===l.R32F||Se===l.RG16F||Se===l.RG32F||Se===l.RGBA16F||Se===l.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function D(G,I){let ee;return G?I===null||I===ni||I===Gl?ee=l.DEPTH24_STENCIL8:I===Yi?ee=l.DEPTH32F_STENCIL8:I===Hl&&(ee=l.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ni||I===Gl?ee=l.DEPTH_COMPONENT24:I===Yi?ee=l.DEPTH_COMPONENT32F:I===Hl&&(ee=l.DEPTH_COMPONENT16),ee}function R(G,I){return x(G)===!0||G.isFramebufferTexture&&G.minFilter!==Yn&&G.minFilter!==Jn?Math.log2(Math.max(I.width,I.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?I.mipmaps.length:1}function B(G){const I=G.target;I.removeEventListener("dispose",B),O(I),I.isVideoTexture&&m.delete(I)}function b(G){const I=G.target;I.removeEventListener("dispose",b),U(I)}function O(G){const I=a.get(G);if(I.__webglInit===void 0)return;const ee=G.source,ve=_.get(ee);if(ve){const Te=ve[I.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&C(G),Object.keys(ve).length===0&&_.delete(ee)}a.remove(G)}function C(G){const I=a.get(G);l.deleteTexture(I.__webglTexture);const ee=G.source,ve=_.get(ee);delete ve[I.__cacheKey],u.memory.textures--}function U(G){const I=a.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),a.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(I.__webglFramebuffer[ve]))for(let Te=0;Te<I.__webglFramebuffer[ve].length;Te++)l.deleteFramebuffer(I.__webglFramebuffer[ve][Te]);else l.deleteFramebuffer(I.__webglFramebuffer[ve]);I.__webglDepthbuffer&&l.deleteRenderbuffer(I.__webglDepthbuffer[ve])}else{if(Array.isArray(I.__webglFramebuffer))for(let ve=0;ve<I.__webglFramebuffer.length;ve++)l.deleteFramebuffer(I.__webglFramebuffer[ve]);else l.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&l.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&l.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ve=0;ve<I.__webglColorRenderbuffer.length;ve++)I.__webglColorRenderbuffer[ve]&&l.deleteRenderbuffer(I.__webglColorRenderbuffer[ve]);I.__webglDepthRenderbuffer&&l.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const ee=G.textures;for(let ve=0,Te=ee.length;ve<Te;ve++){const Se=a.get(ee[ve]);Se.__webglTexture&&(l.deleteTexture(Se.__webglTexture),u.memory.textures--),a.remove(ee[ve])}a.remove(G)}let N=0;function k(){N=0}function X(){const G=N;return G>=r.maxTextures&&ht("WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+r.maxTextures),N+=1,G}function W(G){const I=[];return I.push(G.wrapS),I.push(G.wrapT),I.push(G.wrapR||0),I.push(G.magFilter),I.push(G.minFilter),I.push(G.anisotropy),I.push(G.internalFormat),I.push(G.format),I.push(G.type),I.push(G.generateMipmaps),I.push(G.premultiplyAlpha),I.push(G.flipY),I.push(G.unpackAlignment),I.push(G.colorSpace),I.join()}function Q(G,I){const ee=a.get(G);if(G.isVideoTexture&&gt(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&ee.__version!==G.version){const ve=G.image;if(ve===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{$(ee,G,I);return}}else G.isExternalTexture&&(ee.__webglTexture=G.sourceTexture?G.sourceTexture:null);n.bindTexture(l.TEXTURE_2D,ee.__webglTexture,l.TEXTURE0+I)}function P(G,I){const ee=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&ee.__version!==G.version){$(ee,G,I);return}else G.isExternalTexture&&(ee.__webglTexture=G.sourceTexture?G.sourceTexture:null);n.bindTexture(l.TEXTURE_2D_ARRAY,ee.__webglTexture,l.TEXTURE0+I)}function H(G,I){const ee=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&ee.__version!==G.version){$(ee,G,I);return}n.bindTexture(l.TEXTURE_3D,ee.__webglTexture,l.TEXTURE0+I)}function Z(G,I){const ee=a.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&ee.__version!==G.version){ce(ee,G,I);return}n.bindTexture(l.TEXTURE_CUBE_MAP,ee.__webglTexture,l.TEXTURE0+I)}const re={[op]:l.REPEAT,[Qa]:l.CLAMP_TO_EDGE,[lp]:l.MIRRORED_REPEAT},he={[Yn]:l.NEAREST,[pE]:l.NEAREST_MIPMAP_NEAREST,[au]:l.NEAREST_MIPMAP_LINEAR,[Jn]:l.LINEAR,[fh]:l.LINEAR_MIPMAP_NEAREST,[lr]:l.LINEAR_MIPMAP_LINEAR},z={[_E]:l.NEVER,[EE]:l.ALWAYS,[vE]:l.LESS,[Jp]:l.LEQUAL,[AE]:l.EQUAL,[$p]:l.GEQUAL,[xE]:l.GREATER,[yE]:l.NOTEQUAL};function ie(G,I){if(I.type===Yi&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Jn||I.magFilter===fh||I.magFilter===au||I.magFilter===lr||I.minFilter===Jn||I.minFilter===fh||I.minFilter===au||I.minFilter===lr)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(G,l.TEXTURE_WRAP_S,re[I.wrapS]),l.texParameteri(G,l.TEXTURE_WRAP_T,re[I.wrapT]),(G===l.TEXTURE_3D||G===l.TEXTURE_2D_ARRAY)&&l.texParameteri(G,l.TEXTURE_WRAP_R,re[I.wrapR]),l.texParameteri(G,l.TEXTURE_MAG_FILTER,he[I.magFilter]),l.texParameteri(G,l.TEXTURE_MIN_FILTER,he[I.minFilter]),I.compareFunction&&(l.texParameteri(G,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(G,l.TEXTURE_COMPARE_FUNC,z[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Yn||I.minFilter!==au&&I.minFilter!==lr||I.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||a.get(I).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");l.texParameterf(G,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),a.get(I).__currentAnisotropy=I.anisotropy}}}function pe(G,I){let ee=!1;G.__webglInit===void 0&&(G.__webglInit=!0,I.addEventListener("dispose",B));const ve=I.source;let Te=_.get(ve);Te===void 0&&(Te={},_.set(ve,Te));const Se=W(I);if(Se!==G.__cacheKey){Te[Se]===void 0&&(Te[Se]={texture:l.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),Te[Se].usedTimes++;const je=Te[G.__cacheKey];je!==void 0&&(Te[G.__cacheKey].usedTimes--,je.usedTimes===0&&C(I)),G.__cacheKey=Se,G.__webglTexture=Te[Se].texture}return ee}function Me(G,I,ee){return Math.floor(Math.floor(G/ee)/I)}function we(G,I,ee,ve){const Se=G.updateRanges;if(Se.length===0)n.texSubImage2D(l.TEXTURE_2D,0,0,0,I.width,I.height,ee,ve,I.data);else{Se.sort((ue,Ee)=>ue.start-Ee.start);let je=0;for(let ue=1;ue<Se.length;ue++){const Ee=Se[je],De=Se[ue],Be=Ee.start+Ee.count,Le=Me(De.start,I.width,4),ut=Me(Ee.start,I.width,4);De.start<=Be+1&&Le===ut&&Me(De.start+De.count-1,I.width,4)===Le?Ee.count=Math.max(Ee.count,De.start+De.count-Ee.start):(++je,Se[je]=De)}Se.length=je+1;const Pe=l.getParameter(l.UNPACK_ROW_LENGTH),We=l.getParameter(l.UNPACK_SKIP_PIXELS),j=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,I.width);for(let ue=0,Ee=Se.length;ue<Ee;ue++){const De=Se[ue],Be=Math.floor(De.start/4),Le=Math.ceil(De.count/4),ut=Be%I.width,J=Math.floor(Be/I.width),ze=Le,Re=1;l.pixelStorei(l.UNPACK_SKIP_PIXELS,ut),l.pixelStorei(l.UNPACK_SKIP_ROWS,J),n.texSubImage2D(l.TEXTURE_2D,0,ut,J,ze,Re,ee,ve,I.data)}G.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,Pe),l.pixelStorei(l.UNPACK_SKIP_PIXELS,We),l.pixelStorei(l.UNPACK_SKIP_ROWS,j)}}function $(G,I,ee){let ve=l.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ve=l.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ve=l.TEXTURE_3D);const Te=pe(G,I),Se=I.source;n.bindTexture(ve,G.__webglTexture,l.TEXTURE0+ee);const je=a.get(Se);if(Se.version!==je.__version||Te===!0){n.activeTexture(l.TEXTURE0+ee);const Pe=Dt.getPrimaries(Dt.workingColorSpace),We=I.colorSpace===Is?null:Dt.getPrimaries(I.colorSpace),j=I.colorSpace===Is||Pe===We?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,I.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,I.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ue=E(I.image,!1,r.maxTextureSize);ue=Ut(I,ue);const Ee=o.convert(I.format,I.colorSpace),De=o.convert(I.type);let Be=w(I.internalFormat,Ee,De,I.colorSpace,I.isVideoTexture);ie(ve,I);let Le;const ut=I.mipmaps,J=I.isVideoTexture!==!0,ze=je.__version===void 0||Te===!0,Re=Se.dataReady,Oe=R(I,ue);if(I.isDepthTexture)Be=D(I.format===cr,I.type),ze&&(J?n.texStorage2D(l.TEXTURE_2D,1,Be,ue.width,ue.height):n.texImage2D(l.TEXTURE_2D,0,Be,ue.width,ue.height,0,Ee,De,null));else if(I.isDataTexture)if(ut.length>0){J&&ze&&n.texStorage2D(l.TEXTURE_2D,Oe,Be,ut[0].width,ut[0].height);for(let Ce=0,Ae=ut.length;Ce<Ae;Ce++)Le=ut[Ce],J?Re&&n.texSubImage2D(l.TEXTURE_2D,Ce,0,0,Le.width,Le.height,Ee,De,Le.data):n.texImage2D(l.TEXTURE_2D,Ce,Be,Le.width,Le.height,0,Ee,De,Le.data);I.generateMipmaps=!1}else J?(ze&&n.texStorage2D(l.TEXTURE_2D,Oe,Be,ue.width,ue.height),Re&&we(I,ue,Ee,De)):n.texImage2D(l.TEXTURE_2D,0,Be,ue.width,ue.height,0,Ee,De,ue.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){J&&ze&&n.texStorage3D(l.TEXTURE_2D_ARRAY,Oe,Be,ut[0].width,ut[0].height,ue.depth);for(let Ce=0,Ae=ut.length;Ce<Ae;Ce++)if(Le=ut[Ce],I.format!==ii)if(Ee!==null)if(J){if(Re)if(I.layerUpdates.size>0){const Ie=P_(Le.width,Le.height,I.format,I.type);for(const ot of I.layerUpdates){const kt=Le.data.subarray(ot*Ie/Le.data.BYTES_PER_ELEMENT,(ot+1)*Ie/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Ce,0,0,ot,Le.width,Le.height,1,Ee,kt)}I.clearLayerUpdates()}else n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Ce,0,0,0,Le.width,Le.height,ue.depth,Ee,Le.data)}else n.compressedTexImage3D(l.TEXTURE_2D_ARRAY,Ce,Be,Le.width,Le.height,ue.depth,0,Le.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Re&&n.texSubImage3D(l.TEXTURE_2D_ARRAY,Ce,0,0,0,Le.width,Le.height,ue.depth,Ee,De,Le.data):n.texImage3D(l.TEXTURE_2D_ARRAY,Ce,Be,Le.width,Le.height,ue.depth,0,Ee,De,Le.data)}else{J&&ze&&n.texStorage2D(l.TEXTURE_2D,Oe,Be,ut[0].width,ut[0].height);for(let Ce=0,Ae=ut.length;Ce<Ae;Ce++)Le=ut[Ce],I.format!==ii?Ee!==null?J?Re&&n.compressedTexSubImage2D(l.TEXTURE_2D,Ce,0,0,Le.width,Le.height,Ee,Le.data):n.compressedTexImage2D(l.TEXTURE_2D,Ce,Be,Le.width,Le.height,0,Le.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Re&&n.texSubImage2D(l.TEXTURE_2D,Ce,0,0,Le.width,Le.height,Ee,De,Le.data):n.texImage2D(l.TEXTURE_2D,Ce,Be,Le.width,Le.height,0,Ee,De,Le.data)}else if(I.isDataArrayTexture)if(J){if(ze&&n.texStorage3D(l.TEXTURE_2D_ARRAY,Oe,Be,ue.width,ue.height,ue.depth),Re)if(I.layerUpdates.size>0){const Ce=P_(ue.width,ue.height,I.format,I.type);for(const Ae of I.layerUpdates){const Ie=ue.data.subarray(Ae*Ce/ue.data.BYTES_PER_ELEMENT,(Ae+1)*Ce/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,Ae,ue.width,ue.height,1,Ee,De,Ie)}I.clearLayerUpdates()}else n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)}else n.texImage3D(l.TEXTURE_2D_ARRAY,0,Be,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(I.isData3DTexture)J?(ze&&n.texStorage3D(l.TEXTURE_3D,Oe,Be,ue.width,ue.height,ue.depth),Re&&n.texSubImage3D(l.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)):n.texImage3D(l.TEXTURE_3D,0,Be,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(I.isFramebufferTexture){if(ze)if(J)n.texStorage2D(l.TEXTURE_2D,Oe,Be,ue.width,ue.height);else{let Ce=ue.width,Ae=ue.height;for(let Ie=0;Ie<Oe;Ie++)n.texImage2D(l.TEXTURE_2D,Ie,Be,Ce,Ae,0,Ee,De,null),Ce>>=1,Ae>>=1}}else if(ut.length>0){if(J&&ze){const Ce=Qe(ut[0]);n.texStorage2D(l.TEXTURE_2D,Oe,Be,Ce.width,Ce.height)}for(let Ce=0,Ae=ut.length;Ce<Ae;Ce++)Le=ut[Ce],J?Re&&n.texSubImage2D(l.TEXTURE_2D,Ce,0,0,Ee,De,Le):n.texImage2D(l.TEXTURE_2D,Ce,Be,Ee,De,Le);I.generateMipmaps=!1}else if(J){if(ze){const Ce=Qe(ue);n.texStorage2D(l.TEXTURE_2D,Oe,Be,Ce.width,Ce.height)}Re&&n.texSubImage2D(l.TEXTURE_2D,0,0,0,Ee,De,ue)}else n.texImage2D(l.TEXTURE_2D,0,Be,Ee,De,ue);x(I)&&A(ve),je.__version=Se.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function ce(G,I,ee){if(I.image.length!==6)return;const ve=pe(G,I),Te=I.source;n.bindTexture(l.TEXTURE_CUBE_MAP,G.__webglTexture,l.TEXTURE0+ee);const Se=a.get(Te);if(Te.version!==Se.__version||ve===!0){n.activeTexture(l.TEXTURE0+ee);const je=Dt.getPrimaries(Dt.workingColorSpace),Pe=I.colorSpace===Is?null:Dt.getPrimaries(I.colorSpace),We=I.colorSpace===Is||je===Pe?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,I.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,I.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const j=I.isCompressedTexture||I.image[0].isCompressedTexture,ue=I.image[0]&&I.image[0].isDataTexture,Ee=[];for(let Ae=0;Ae<6;Ae++)!j&&!ue?Ee[Ae]=E(I.image[Ae],!0,r.maxCubemapSize):Ee[Ae]=ue?I.image[Ae].image:I.image[Ae],Ee[Ae]=Ut(I,Ee[Ae]);const De=Ee[0],Be=o.convert(I.format,I.colorSpace),Le=o.convert(I.type),ut=w(I.internalFormat,Be,Le,I.colorSpace),J=I.isVideoTexture!==!0,ze=Se.__version===void 0||ve===!0,Re=Te.dataReady;let Oe=R(I,De);ie(l.TEXTURE_CUBE_MAP,I);let Ce;if(j){J&&ze&&n.texStorage2D(l.TEXTURE_CUBE_MAP,Oe,ut,De.width,De.height);for(let Ae=0;Ae<6;Ae++){Ce=Ee[Ae].mipmaps;for(let Ie=0;Ie<Ce.length;Ie++){const ot=Ce[Ie];I.format!==ii?Be!==null?J?Re&&n.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,0,0,ot.width,ot.height,Be,ot.data):n.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,ut,ot.width,ot.height,0,ot.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Re&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,0,0,ot.width,ot.height,Be,Le,ot.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,ut,ot.width,ot.height,0,Be,Le,ot.data)}}}else{if(Ce=I.mipmaps,J&&ze){Ce.length>0&&Oe++;const Ae=Qe(Ee[0]);n.texStorage2D(l.TEXTURE_CUBE_MAP,Oe,ut,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ue){J?Re&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ee[Ae].width,Ee[Ae].height,Be,Le,Ee[Ae].data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Ee[Ae].width,Ee[Ae].height,0,Be,Le,Ee[Ae].data);for(let Ie=0;Ie<Ce.length;Ie++){const kt=Ce[Ie].image[Ae].image;J?Re&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,0,0,kt.width,kt.height,Be,Le,kt.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,ut,kt.width,kt.height,0,Be,Le,kt.data)}}else{J?Re&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Be,Le,Ee[Ae]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Be,Le,Ee[Ae]);for(let Ie=0;Ie<Ce.length;Ie++){const ot=Ce[Ie];J?Re&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,0,0,Be,Le,ot.image[Ae]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,ut,Be,Le,ot.image[Ae])}}}x(I)&&A(l.TEXTURE_CUBE_MAP),Se.__version=Te.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function be(G,I,ee,ve,Te,Se){const je=o.convert(ee.format,ee.colorSpace),Pe=o.convert(ee.type),We=w(ee.internalFormat,je,Pe,ee.colorSpace),j=a.get(I),ue=a.get(ee);if(ue.__renderTarget=I,!j.__hasExternalTextures){const Ee=Math.max(1,I.width>>Se),De=Math.max(1,I.height>>Se);Te===l.TEXTURE_3D||Te===l.TEXTURE_2D_ARRAY?n.texImage3D(Te,Se,We,Ee,De,I.depth,0,je,Pe,null):n.texImage2D(Te,Se,We,Ee,De,0,je,Pe,null)}n.bindFramebuffer(l.FRAMEBUFFER,G),xt(I)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,ve,Te,ue.__webglTexture,0,q(I)):(Te===l.TEXTURE_2D||Te>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,ve,Te,ue.__webglTexture,Se),n.bindFramebuffer(l.FRAMEBUFFER,null)}function Fe(G,I,ee){if(l.bindRenderbuffer(l.RENDERBUFFER,G),I.depthBuffer){const ve=I.depthTexture,Te=ve&&ve.isDepthTexture?ve.type:null,Se=D(I.stencilBuffer,Te),je=I.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;xt(I)?f.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,q(I),Se,I.width,I.height):ee?l.renderbufferStorageMultisample(l.RENDERBUFFER,q(I),Se,I.width,I.height):l.renderbufferStorage(l.RENDERBUFFER,Se,I.width,I.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,je,l.RENDERBUFFER,G)}else{const ve=I.textures;for(let Te=0;Te<ve.length;Te++){const Se=ve[Te],je=o.convert(Se.format,Se.colorSpace),Pe=o.convert(Se.type),We=w(Se.internalFormat,je,Pe,Se.colorSpace);xt(I)?f.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,q(I),We,I.width,I.height):ee?l.renderbufferStorageMultisample(l.RENDERBUFFER,q(I),We,I.width,I.height):l.renderbufferStorage(l.RENDERBUFFER,We,I.width,I.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ue(G,I,ee){const ve=I.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(l.FRAMEBUFFER,G),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=a.get(I.depthTexture);if(Te.__renderTarget=I,(!Te.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),ve){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,I.depthTexture.addEventListener("dispose",B)),Te.__webglTexture===void 0){Te.__webglTexture=l.createTexture(),n.bindTexture(l.TEXTURE_CUBE_MAP,Te.__webglTexture),ie(l.TEXTURE_CUBE_MAP,I.depthTexture);const j=o.convert(I.depthTexture.format),ue=o.convert(I.depthTexture.type);let Ee;I.depthTexture.format===va?Ee=l.DEPTH_COMPONENT24:I.depthTexture.format===cr&&(Ee=l.DEPTH24_STENCIL8);for(let De=0;De<6;De++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ee,I.width,I.height,0,j,ue,null)}}else Q(I.depthTexture,0);const Se=Te.__webglTexture,je=q(I),Pe=ve?l.TEXTURE_CUBE_MAP_POSITIVE_X+ee:l.TEXTURE_2D,We=I.depthTexture.format===cr?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(I.depthTexture.format===va)xt(I)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,We,Pe,Se,0,je):l.framebufferTexture2D(l.FRAMEBUFFER,We,Pe,Se,0);else if(I.depthTexture.format===cr)xt(I)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,We,Pe,Se,0,je):l.framebufferTexture2D(l.FRAMEBUFFER,We,Pe,Se,0);else throw new Error("Unknown depthTexture format")}function at(G){const I=a.get(G),ee=G.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==G.depthTexture){const ve=G.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ve){const Te=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ve.removeEventListener("dispose",Te)};ve.addEventListener("dispose",Te),I.__depthDisposeCallback=Te}I.__boundDepthTexture=ve}if(G.depthTexture&&!I.__autoAllocateDepthBuffer)if(ee)for(let ve=0;ve<6;ve++)Ue(I.__webglFramebuffer[ve],G,ve);else{const ve=G.texture.mipmaps;ve&&ve.length>0?Ue(I.__webglFramebuffer[0],G,0):Ue(I.__webglFramebuffer,G,0)}else if(ee){I.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(l.FRAMEBUFFER,I.__webglFramebuffer[ve]),I.__webglDepthbuffer[ve]===void 0)I.__webglDepthbuffer[ve]=l.createRenderbuffer(),Fe(I.__webglDepthbuffer[ve],G,!1);else{const Te=G.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer[ve];l.bindRenderbuffer(l.RENDERBUFFER,Se),l.framebufferRenderbuffer(l.FRAMEBUFFER,Te,l.RENDERBUFFER,Se)}}else{const ve=G.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(l.FRAMEBUFFER,I.__webglFramebuffer[0]):n.bindFramebuffer(l.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=l.createRenderbuffer(),Fe(I.__webglDepthbuffer,G,!1);else{const Te=G.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Se=I.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,Se),l.framebufferRenderbuffer(l.FRAMEBUFFER,Te,l.RENDERBUFFER,Se)}}n.bindFramebuffer(l.FRAMEBUFFER,null)}function St(G,I,ee){const ve=a.get(G);I!==void 0&&be(ve.__webglFramebuffer,G,G.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),ee!==void 0&&at(G)}function Je(G){const I=G.texture,ee=a.get(G),ve=a.get(I);G.addEventListener("dispose",b);const Te=G.textures,Se=G.isWebGLCubeRenderTarget===!0,je=Te.length>1;if(je||(ve.__webglTexture===void 0&&(ve.__webglTexture=l.createTexture()),ve.__version=I.version,u.memory.textures++),Se){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(I.mipmaps&&I.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let We=0;We<I.mipmaps.length;We++)ee.__webglFramebuffer[Pe][We]=l.createFramebuffer()}else ee.__webglFramebuffer[Pe]=l.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<I.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=l.createFramebuffer()}else ee.__webglFramebuffer=l.createFramebuffer();if(je)for(let Pe=0,We=Te.length;Pe<We;Pe++){const j=a.get(Te[Pe]);j.__webglTexture===void 0&&(j.__webglTexture=l.createTexture(),u.memory.textures++)}if(G.samples>0&&xt(G)===!1){ee.__webglMultisampledFramebuffer=l.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(l.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Te.length;Pe++){const We=Te[Pe];ee.__webglColorRenderbuffer[Pe]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const j=o.convert(We.format,We.colorSpace),ue=o.convert(We.type),Ee=w(We.internalFormat,j,ue,We.colorSpace,G.isXRRenderTarget===!0),De=q(G);l.renderbufferStorageMultisample(l.RENDERBUFFER,De,Ee,G.width,G.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Pe,l.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}l.bindRenderbuffer(l.RENDERBUFFER,null),G.depthBuffer&&(ee.__webglDepthRenderbuffer=l.createRenderbuffer(),Fe(ee.__webglDepthRenderbuffer,G,!0)),n.bindFramebuffer(l.FRAMEBUFFER,null)}}if(Se){n.bindTexture(l.TEXTURE_CUBE_MAP,ve.__webglTexture),ie(l.TEXTURE_CUBE_MAP,I);for(let Pe=0;Pe<6;Pe++)if(I.mipmaps&&I.mipmaps.length>0)for(let We=0;We<I.mipmaps.length;We++)be(ee.__webglFramebuffer[Pe][We],G,I,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We);else be(ee.__webglFramebuffer[Pe],G,I,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(I)&&A(l.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Pe=0,We=Te.length;Pe<We;Pe++){const j=Te[Pe],ue=a.get(j);let Ee=l.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ee=G.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(Ee,ue.__webglTexture),ie(Ee,j),be(ee.__webglFramebuffer,G,j,l.COLOR_ATTACHMENT0+Pe,Ee,0),x(j)&&A(Ee)}n.unbindTexture()}else{let Pe=l.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Pe=G.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(Pe,ve.__webglTexture),ie(Pe,I),I.mipmaps&&I.mipmaps.length>0)for(let We=0;We<I.mipmaps.length;We++)be(ee.__webglFramebuffer[We],G,I,l.COLOR_ATTACHMENT0,Pe,We);else be(ee.__webglFramebuffer,G,I,l.COLOR_ATTACHMENT0,Pe,0);x(I)&&A(Pe),n.unbindTexture()}G.depthBuffer&&at(G)}function tt(G){const I=G.textures;for(let ee=0,ve=I.length;ee<ve;ee++){const Te=I[ee];if(x(Te)){const Se=T(G),je=a.get(Te).__webglTexture;n.bindTexture(Se,je),A(Se),n.unbindTexture()}}}const et=[],it=[];function Rt(G){if(G.samples>0){if(xt(G)===!1){const I=G.textures,ee=G.width,ve=G.height;let Te=l.COLOR_BUFFER_BIT;const Se=G.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,je=a.get(G),Pe=I.length>1;if(Pe)for(let j=0;j<I.length;j++)n.bindFramebuffer(l.FRAMEBUFFER,je.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+j,l.RENDERBUFFER,null),n.bindFramebuffer(l.FRAMEBUFFER,je.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+j,l.TEXTURE_2D,null,0);n.bindFramebuffer(l.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const We=G.texture.mipmaps;We&&We.length>0?n.bindFramebuffer(l.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):n.bindFramebuffer(l.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let j=0;j<I.length;j++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Te|=l.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Te|=l.STENCIL_BUFFER_BIT)),Pe){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,je.__webglColorRenderbuffer[j]);const ue=a.get(I[j]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,ue,0)}l.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,Te,l.NEAREST),d===!0&&(et.length=0,it.length=0,et.push(l.COLOR_ATTACHMENT0+j),G.depthBuffer&&G.resolveDepthBuffer===!1&&(et.push(Se),it.push(Se),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,it)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(l.READ_FRAMEBUFFER,null),n.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Pe)for(let j=0;j<I.length;j++){n.bindFramebuffer(l.FRAMEBUFFER,je.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+j,l.RENDERBUFFER,je.__webglColorRenderbuffer[j]);const ue=a.get(I[j]).__webglTexture;n.bindFramebuffer(l.FRAMEBUFFER,je.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+j,l.TEXTURE_2D,ue,0)}n.bindFramebuffer(l.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&d){const I=G.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[I])}}}function q(G){return Math.min(r.maxSamples,G.samples)}function xt(G){const I=a.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function gt(G){const I=u.render.frame;m.get(G)!==I&&(m.set(G,I),G.update())}function Ut(G,I){const ee=G.colorSpace,ve=G.format,Te=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||ee!==Eo&&ee!==Is&&(Dt.getTransfer(ee)===Yt?(ve!==ii||Te!==wi)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ee)),I}function Qe(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(h.width=G.naturalWidth||G.width,h.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(h.width=G.displayWidth,h.height=G.displayHeight):(h.width=G.width,h.height=G.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=St,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _A(l,e){function n(a,r=Is){let o;const u=Dt.getTransfer(r);if(a===wi)return l.UNSIGNED_BYTE;if(a===jp)return l.UNSIGNED_SHORT_4_4_4_4;if(a===Kp)return l.UNSIGNED_SHORT_5_5_5_1;if(a===jv)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===Kv)return l.UNSIGNED_INT_10F_11F_11F_REV;if(a===Yv)return l.BYTE;if(a===Qv)return l.SHORT;if(a===Hl)return l.UNSIGNED_SHORT;if(a===Qp)return l.INT;if(a===ni)return l.UNSIGNED_INT;if(a===Yi)return l.FLOAT;if(a===_a)return l.HALF_FLOAT;if(a===Zv)return l.ALPHA;if(a===Jv)return l.RGB;if(a===ii)return l.RGBA;if(a===va)return l.DEPTH_COMPONENT;if(a===cr)return l.DEPTH_STENCIL;if(a===$v)return l.RED;if(a===ju)return l.RED_INTEGER;if(a===yo)return l.RG;if(a===Zp)return l.RG_INTEGER;if(a===mo)return l.RGBA_INTEGER;if(a===Lu||a===Fu||a===Pu||a===Ou)if(u===Yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Lu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Fu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Pu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Lu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Fu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Pu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ou)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===cp||a===up||a===fp||a===dp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===cp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===up)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===fp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===dp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===hp||a===pp||a===mp||a===gp||a===Sp||a===_p||a===vp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===hp||a===pp)return u===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===mp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(a===gp)return o.COMPRESSED_R11_EAC;if(a===Sp)return o.COMPRESSED_SIGNED_R11_EAC;if(a===_p)return o.COMPRESSED_RG11_EAC;if(a===vp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Ap||a===xp||a===yp||a===Ep||a===Mp||a===Tp||a===Cp||a===bp||a===Rp||a===wp||a===Dp||a===Ip||a===Up||a===Bp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Ap)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===yp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ep)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Cp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===bp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===wp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Dp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ip)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Up)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Bp)return u===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Lp||a===Fp||a===Pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Lp)return u===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Fp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Op||a===Np||a===zp||a===Hp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Op)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Np)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===zp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Hp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Gl?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:n}}const K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
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

}`;class J1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new dA(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ri({vertexShader:K1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new Co(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $1 extends Fs{constructor(e,n){super();const a=this;let r=null,o=1,u=null,f="local-floor",d=1,h=null,m=null,g=null,_=null,v=null,y=null;const E=typeof XRWebGLBinding<"u",x=new J1,A={},T=n.getContextAttributes();let w=null,D=null;const R=[],B=[],b=new ke;let O=null;const C=new Ri;C.viewport=new fn;const U=new Ri;U.viewport=new fn;const N=[C,U],k=new cM;let X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=R[$];return ce===void 0&&(ce=new Bh,R[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=R[$];return ce===void 0&&(ce=new Bh,R[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=R[$];return ce===void 0&&(ce=new Bh,R[$]=ce),ce.getHandSpace()};function Q($){const ce=B.indexOf($.inputSource);if(ce===-1)return;const be=R[ce];be!==void 0&&(be.update($.inputSource,$.frame,h||u),be.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",H);for(let $=0;$<R.length;$++){const ce=B[$];ce!==null&&(B[$]=null,R[$].disconnect(ce))}X=null,W=null,x.reset();for(const $ in A)delete A[$];e.setRenderTarget(w),v=null,_=null,g=null,r=null,D=null,we.stop(),a.isPresenting=!1,e.setPixelRatio(O),e.setSize(b.width,b.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,a.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,a.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",P),r.addEventListener("inputsourceschange",H),T.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(b),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,Ue=null;T.depth&&(Ue=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=T.stencil?cr:va,Fe=T.stencil?Gl:ni);const at={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:o};g=this.getBinding(),_=g.createProjectionLayer(at),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new sa(_.textureWidth,_.textureHeight,{format:ii,type:wi,depthTexture:new To(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const be={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),D=new sa(v.framebufferWidth,v.framebufferHeight,{format:ii,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(f),we.setContext(r),we.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H($){for(let ce=0;ce<$.removed.length;ce++){const be=$.removed[ce],Fe=B.indexOf(be);Fe>=0&&(B[Fe]=null,R[Fe].disconnect(be))}for(let ce=0;ce<$.added.length;ce++){const be=$.added[ce];let Fe=B.indexOf(be);if(Fe===-1){for(let at=0;at<R.length;at++)if(at>=B.length){B.push(be),Fe=at;break}else if(B[at]===null){B[at]=be,Fe=at;break}if(Fe===-1)break}const Ue=R[Fe];Ue&&Ue.connect(be)}}const Z=new V,re=new V;function he($,ce,be){Z.setFromMatrixPosition(ce.matrixWorld),re.setFromMatrixPosition(be.matrixWorld);const Fe=Z.distanceTo(re),Ue=ce.projectionMatrix.elements,at=be.projectionMatrix.elements,St=Ue[14]/(Ue[10]-1),Je=Ue[14]/(Ue[10]+1),tt=(Ue[9]+1)/Ue[5],et=(Ue[9]-1)/Ue[5],it=(Ue[8]-1)/Ue[0],Rt=(at[8]+1)/at[0],q=St*it,xt=St*Rt,gt=Fe/(-it+Rt),Ut=gt*-it;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ut),$.translateZ(gt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Qe=St+gt,G=Je+gt,I=q-Ut,ee=xt+(Fe-Ut),ve=tt*Je/G*Qe,Te=et*Je/G*Qe;$.projectionMatrix.makePerspective(I,ee,ve,Te,Qe,G),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function z($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ce=$.near,be=$.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(be=x.depthFar)),k.near=U.near=C.near=ce,k.far=U.far=C.far=be,(X!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,W=k.far),k.layers.mask=$.layers.mask|6,C.layers.mask=k.layers.mask&3,U.layers.mask=k.layers.mask&5;const Fe=$.parent,Ue=k.cameras;z(k,Fe);for(let at=0;at<Ue.length;at++)z(Ue[at],Fe);Ue.length===2?he(k,C,U):k.projectionMatrix.copy(C.projectionMatrix),ie($,k,Fe)};function ie($,ce,be){be===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&v===null))return d},this.setFoveation=function($){d=$,_!==null&&(_.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function($){return A[$]};let pe=null;function Me($,ce){if(m=ce.getViewerPose(h||u),y=ce,m!==null){const be=m.views;v!==null&&(e.setRenderTargetFramebuffer(D,v.framebuffer),e.setRenderTarget(D));let Fe=!1;be.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let Je=0;Je<be.length;Je++){const tt=be[Je];let et=null;if(v!==null)et=v.getViewport(tt);else{const Rt=g.getViewSubImage(_,tt);et=Rt.viewport,Je===0&&(e.setRenderTargetTextures(D,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(D))}let it=N[Je];it===void 0&&(it=new Ri,it.layers.enable(Je),it.viewport=new fn,N[Je]=it),it.matrix.fromArray(tt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(tt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(et.x,et.y,et.width,et.height),Je===0&&(k.matrix.copy(it.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(it)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const Je=g.getDepthInformation(be[0]);Je&&Je.isValid&&Je.texture&&x.init(Je,r.renderState)}if(Ue&&Ue.includes("camera-access")&&E){e.state.unbindTexture(),g=a.getBinding();for(let Je=0;Je<be.length;Je++){const tt=be[Je].camera;if(tt){let et=A[tt];et||(et=new dA,A[tt]=et);const it=g.getCameraImage(tt);et.sourceTexture=it}}}}for(let be=0;be<R.length;be++){const Fe=B[be],Ue=R[be];Fe!==null&&Ue!==void 0&&Ue.update(Fe,ce,h||u)}pe&&pe($,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),y=null}const we=new hA;we.setAnimationLoop(Me),this.setAnimationLoop=function($){pe=$},this.dispose=function(){}}}const sr=new Za,eR=new dt;function tR(l,e){function n(x,A){x.matrixAutoUpdate===!0&&x.updateMatrix(),A.value.copy(x.matrix)}function a(x,A){A.color.getRGB(x.fogColor.value,rA(l)),A.isFog?(x.fogNear.value=A.near,x.fogFar.value=A.far):A.isFogExp2&&(x.fogDensity.value=A.density)}function r(x,A,T,w,D){A.isMeshBasicMaterial||A.isMeshLambertMaterial?o(x,A):A.isMeshToonMaterial?(o(x,A),g(x,A)):A.isMeshPhongMaterial?(o(x,A),m(x,A)):A.isMeshStandardMaterial?(o(x,A),_(x,A),A.isMeshPhysicalMaterial&&v(x,A,D)):A.isMeshMatcapMaterial?(o(x,A),y(x,A)):A.isMeshDepthMaterial?o(x,A):A.isMeshDistanceMaterial?(o(x,A),E(x,A)):A.isMeshNormalMaterial?o(x,A):A.isLineBasicMaterial?(u(x,A),A.isLineDashedMaterial&&f(x,A)):A.isPointsMaterial?d(x,A,T,w):A.isSpriteMaterial?h(x,A):A.isShadowMaterial?(x.color.value.copy(A.color),x.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function o(x,A){x.opacity.value=A.opacity,A.color&&x.diffuse.value.copy(A.color),A.emissive&&x.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(x.map.value=A.map,n(A.map,x.mapTransform)),A.alphaMap&&(x.alphaMap.value=A.alphaMap,n(A.alphaMap,x.alphaMapTransform)),A.bumpMap&&(x.bumpMap.value=A.bumpMap,n(A.bumpMap,x.bumpMapTransform),x.bumpScale.value=A.bumpScale,A.side===gi&&(x.bumpScale.value*=-1)),A.normalMap&&(x.normalMap.value=A.normalMap,n(A.normalMap,x.normalMapTransform),x.normalScale.value.copy(A.normalScale),A.side===gi&&x.normalScale.value.negate()),A.displacementMap&&(x.displacementMap.value=A.displacementMap,n(A.displacementMap,x.displacementMapTransform),x.displacementScale.value=A.displacementScale,x.displacementBias.value=A.displacementBias),A.emissiveMap&&(x.emissiveMap.value=A.emissiveMap,n(A.emissiveMap,x.emissiveMapTransform)),A.specularMap&&(x.specularMap.value=A.specularMap,n(A.specularMap,x.specularMapTransform)),A.alphaTest>0&&(x.alphaTest.value=A.alphaTest);const T=e.get(A),w=T.envMap,D=T.envMapRotation;w&&(x.envMap.value=w,sr.copy(D),sr.x*=-1,sr.y*=-1,sr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),x.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(sr)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=A.reflectivity,x.ior.value=A.ior,x.refractionRatio.value=A.refractionRatio),A.lightMap&&(x.lightMap.value=A.lightMap,x.lightMapIntensity.value=A.lightMapIntensity,n(A.lightMap,x.lightMapTransform)),A.aoMap&&(x.aoMap.value=A.aoMap,x.aoMapIntensity.value=A.aoMapIntensity,n(A.aoMap,x.aoMapTransform))}function u(x,A){x.diffuse.value.copy(A.color),x.opacity.value=A.opacity,A.map&&(x.map.value=A.map,n(A.map,x.mapTransform))}function f(x,A){x.dashSize.value=A.dashSize,x.totalSize.value=A.dashSize+A.gapSize,x.scale.value=A.scale}function d(x,A,T,w){x.diffuse.value.copy(A.color),x.opacity.value=A.opacity,x.size.value=A.size*T,x.scale.value=w*.5,A.map&&(x.map.value=A.map,n(A.map,x.uvTransform)),A.alphaMap&&(x.alphaMap.value=A.alphaMap,n(A.alphaMap,x.alphaMapTransform)),A.alphaTest>0&&(x.alphaTest.value=A.alphaTest)}function h(x,A){x.diffuse.value.copy(A.color),x.opacity.value=A.opacity,x.rotation.value=A.rotation,A.map&&(x.map.value=A.map,n(A.map,x.mapTransform)),A.alphaMap&&(x.alphaMap.value=A.alphaMap,n(A.alphaMap,x.alphaMapTransform)),A.alphaTest>0&&(x.alphaTest.value=A.alphaTest)}function m(x,A){x.specular.value.copy(A.specular),x.shininess.value=Math.max(A.shininess,1e-4)}function g(x,A){A.gradientMap&&(x.gradientMap.value=A.gradientMap)}function _(x,A){x.metalness.value=A.metalness,A.metalnessMap&&(x.metalnessMap.value=A.metalnessMap,n(A.metalnessMap,x.metalnessMapTransform)),x.roughness.value=A.roughness,A.roughnessMap&&(x.roughnessMap.value=A.roughnessMap,n(A.roughnessMap,x.roughnessMapTransform)),A.envMap&&(x.envMapIntensity.value=A.envMapIntensity)}function v(x,A,T){x.ior.value=A.ior,A.sheen>0&&(x.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),x.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(x.sheenColorMap.value=A.sheenColorMap,n(A.sheenColorMap,x.sheenColorMapTransform)),A.sheenRoughnessMap&&(x.sheenRoughnessMap.value=A.sheenRoughnessMap,n(A.sheenRoughnessMap,x.sheenRoughnessMapTransform))),A.clearcoat>0&&(x.clearcoat.value=A.clearcoat,x.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(x.clearcoatMap.value=A.clearcoatMap,n(A.clearcoatMap,x.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,n(A.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(x.clearcoatNormalMap.value=A.clearcoatNormalMap,n(A.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===gi&&x.clearcoatNormalScale.value.negate())),A.dispersion>0&&(x.dispersion.value=A.dispersion),A.iridescence>0&&(x.iridescence.value=A.iridescence,x.iridescenceIOR.value=A.iridescenceIOR,x.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(x.iridescenceMap.value=A.iridescenceMap,n(A.iridescenceMap,x.iridescenceMapTransform)),A.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=A.iridescenceThicknessMap,n(A.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),A.transmission>0&&(x.transmission.value=A.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),A.transmissionMap&&(x.transmissionMap.value=A.transmissionMap,n(A.transmissionMap,x.transmissionMapTransform)),x.thickness.value=A.thickness,A.thicknessMap&&(x.thicknessMap.value=A.thicknessMap,n(A.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=A.attenuationDistance,x.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(x.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(x.anisotropyMap.value=A.anisotropyMap,n(A.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=A.specularIntensity,x.specularColor.value.copy(A.specularColor),A.specularColorMap&&(x.specularColorMap.value=A.specularColorMap,n(A.specularColorMap,x.specularColorMapTransform)),A.specularIntensityMap&&(x.specularIntensityMap.value=A.specularIntensityMap,n(A.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,A){A.matcap&&(x.matcap.value=A.matcap)}function E(x,A){const T=e.get(A).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function nR(l,e,n,a){let r={},o={},u=[];const f=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,w){const D=w.program;a.uniformBlockBinding(T,D)}function h(T,w){let D=r[T.id];D===void 0&&(y(T),D=m(T),r[T.id]=D,T.addEventListener("dispose",x));const R=w.program;a.updateUBOMapping(T,R);const B=e.render.frame;o[T.id]!==B&&(_(T),o[T.id]=B)}function m(T){const w=g();T.__bindingPointIndex=w;const D=l.createBuffer(),R=T.__size,B=T.usage;return l.bindBuffer(l.UNIFORM_BUFFER,D),l.bufferData(l.UNIFORM_BUFFER,R,B),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,w,D),D}function g(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(T){const w=r[T.id],D=T.uniforms,R=T.__cache;l.bindBuffer(l.UNIFORM_BUFFER,w);for(let B=0,b=D.length;B<b;B++){const O=Array.isArray(D[B])?D[B]:[D[B]];for(let C=0,U=O.length;C<U;C++){const N=O[C];if(v(N,B,C,R)===!0){const k=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let Q=0;Q<X.length;Q++){const P=X[Q],H=E(P);typeof P=="number"||typeof P=="boolean"?(N.__data[0]=P,l.bufferSubData(l.UNIFORM_BUFFER,k+W,N.__data)):P.isMatrix3?(N.__data[0]=P.elements[0],N.__data[1]=P.elements[1],N.__data[2]=P.elements[2],N.__data[3]=0,N.__data[4]=P.elements[3],N.__data[5]=P.elements[4],N.__data[6]=P.elements[5],N.__data[7]=0,N.__data[8]=P.elements[6],N.__data[9]=P.elements[7],N.__data[10]=P.elements[8],N.__data[11]=0):(P.toArray(N.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,k,N.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function v(T,w,D,R){const B=T.value,b=w+"_"+D;if(R[b]===void 0)return typeof B=="number"||typeof B=="boolean"?R[b]=B:R[b]=B.clone(),!0;{const O=R[b];if(typeof B=="number"||typeof B=="boolean"){if(O!==B)return R[b]=B,!0}else if(O.equals(B)===!1)return O.copy(B),!0}return!1}function y(T){const w=T.uniforms;let D=0;const R=16;for(let b=0,O=w.length;b<O;b++){const C=Array.isArray(w[b])?w[b]:[w[b]];for(let U=0,N=C.length;U<N;U++){const k=C[U],X=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Q=X.length;W<Q;W++){const P=X[W],H=E(P),Z=D%R,re=Z%H.boundary,he=Z+re;D+=re,he!==0&&R-he<H.storage&&(D+=R-he),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=D,D+=H.storage}}}const B=D%R;return B>0&&(D+=R-B),T.__size=D,T.__cache={},this}function E(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",T),w}function x(T){const w=T.target;w.removeEventListener("dispose",x);const D=u.indexOf(w.__bindingPointIndex);u.splice(D,1),l.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function A(){for(const T in r)l.deleteBuffer(r[T]);u=[],r={},o={}}return{bind:d,update:h,dispose:A}}const iR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fa=null;function aR(){return fa===null&&(fa=new Xa(iR,16,16,yo,_a),fa.name="DFG_LUT",fa.minFilter=Jn,fa.magFilter=Jn,fa.wrapS=Qa,fa.wrapT=Qa,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class vA{constructor(e={}){const{canvas:n=TE(),context:a=null,depth:r=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:v=wi}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=v,x=new Set([mo,Zp,ju]),A=new Set([wi,ni,Hl,Gl,jp,Kp]),T=new Uint32Array(4),w=new Int32Array(4);let D=null,R=null;const B=[],b=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=ki;let N=0,k=0,X=null,W=-1,Q=null;const P=new fn,H=new fn;let Z=null;const re=new It(0);let he=0,z=n.width,ie=n.height,pe=1,Me=null,we=null;const $=new fn(0,0,z,ie),ce=new fn(0,0,z,ie);let be=!1;const Fe=new fA;let Ue=!1,at=!1;const St=new dt,Je=new V,tt=new fn,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Rt(){return X===null?pe:1}let q=a;function xt(F,te){return n.getContext(F,te)}try{const F={alpha:!0,depth:r,stencil:o,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yp}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",kt,!1),n.addEventListener("webglcontextcreationerror",wt,!1),q===null){const te="webgl2";if(q=xt(te,F),q===null)throw xt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw Pt("WebGLRenderer: "+F.message),F}let gt,Ut,Qe,G,I,ee,ve,Te,Se,je,Pe,We,j,ue,Ee,De,Be,Le,ut,J,ze,Re,Oe,Ce;function Ae(){gt=new sb(q),gt.init(),Re=new _A(q,gt),Ut=new KC(q,gt,e,Re),Qe=new Q1(q,gt),Ut.reversedDepthBuffer&&_&&Qe.buffers.depth.setReversed(!0),G=new lb(q),I=new B1,ee=new j1(q,gt,Qe,I,Ut,Re,G),ve=new JC(C),Te=new ab(C),Se=new dM(q),Oe=new QC(q,Se),je=new rb(q,Se,G,Oe),Pe=new ub(q,je,Se,G),ut=new cb(q,Ut,ee),De=new ZC(I),We=new U1(C,ve,Te,gt,Ut,Oe,De),j=new tR(C,I),ue=new F1,Ee=new G1(gt),Le=new YC(C,ve,Te,Qe,Pe,y,d),Be=new q1(C,Pe,Ut),Ce=new nR(q,G,Ut,Qe),J=new jC(q,gt,G),ze=new ob(q,gt,G),G.programs=We.programs,C.capabilities=Ut,C.extensions=gt,C.properties=I,C.renderLists=ue,C.shadowMap=Be,C.state=Qe,C.info=G}Ae(),E!==wi&&(O=new db(E,n.width,n.height,r,o));const Ie=new $1(C,q);this.xr=Ie,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const F=gt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=gt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(F){F!==void 0&&(pe=F,this.setSize(z,ie,!1))},this.getSize=function(F){return F.set(z,ie)},this.setSize=function(F,te,me=!0){if(Ie.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}z=F,ie=te,n.width=Math.floor(F*pe),n.height=Math.floor(te*pe),me===!0&&(n.style.width=F+"px",n.style.height=te+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,F,te)},this.getDrawingBufferSize=function(F){return F.set(z*pe,ie*pe).floor()},this.setDrawingBufferSize=function(F,te,me){z=F,ie=te,pe=me,n.width=Math.floor(F*me),n.height=Math.floor(te*me),this.setViewport(0,0,F,te)},this.setEffects=function(F){if(E===wi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let te=0;te<F.length;te++)if(F[te].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(P)},this.getViewport=function(F){return F.copy($)},this.setViewport=function(F,te,me,fe){F.isVector4?$.set(F.x,F.y,F.z,F.w):$.set(F,te,me,fe),Qe.viewport(P.copy($).multiplyScalar(pe).round())},this.getScissor=function(F){return F.copy(ce)},this.setScissor=function(F,te,me,fe){F.isVector4?ce.set(F.x,F.y,F.z,F.w):ce.set(F,te,me,fe),Qe.scissor(H.copy(ce).multiplyScalar(pe).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(F){Qe.setScissorTest(be=F)},this.setOpaqueSort=function(F){Me=F},this.setTransparentSort=function(F){we=F},this.getClearColor=function(F){return F.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(F=!0,te=!0,me=!0){let fe=0;if(F){let ae=!1;if(X!==null){const He=X.texture.format;ae=x.has(He)}if(ae){const He=X.texture.type,Xe=A.has(He),Ge=Le.getClearColor(),qe=Le.getClearAlpha(),Ke=Ge.r,rt=Ge.g,Ze=Ge.b;Xe?(T[0]=Ke,T[1]=rt,T[2]=Ze,T[3]=qe,q.clearBufferuiv(q.COLOR,0,T)):(w[0]=Ke,w[1]=rt,w[2]=Ze,w[3]=qe,q.clearBufferiv(q.COLOR,0,w))}else fe|=q.COLOR_BUFFER_BIT}te&&(fe|=q.DEPTH_BUFFER_BIT),me&&(fe|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",wt,!1),Le.dispose(),ue.dispose(),Ee.dispose(),I.dispose(),ve.dispose(),Te.dispose(),Pe.dispose(),Oe.dispose(),Ce.dispose(),We.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",pr),Ie.removeEventListener("sessionend",Uo),ra.stop()};function ot(F){F.preventDefault(),v_("WebGLRenderer: Context Lost."),U=!0}function kt(){v_("WebGLRenderer: Context Restored."),U=!1;const F=G.autoReset,te=Be.enabled,me=Be.autoUpdate,fe=Be.needsUpdate,ae=Be.type;Ae(),G.autoReset=F,Be.enabled=te,Be.autoUpdate=me,Be.needsUpdate=fe,Be.type=ae}function wt(F){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Qn(F){const te=F.target;te.removeEventListener("dispose",Qn),ji(te)}function ji(F){Yl(F),I.remove(F)}function Yl(F){const te=I.get(F).programs;te!==void 0&&(te.forEach(function(me){We.releaseProgram(me)}),F.isShaderMaterial&&We.releaseShaderCache(F))}this.renderBufferDirect=function(F,te,me,fe,ae,He){te===null&&(te=et);const Xe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ge=Ps(F,te,me,fe,ae);Qe.setMaterial(fe,Xe);let qe=me.index,Ke=1;if(fe.wireframe===!0){if(qe=je.getWireframeAttribute(me),qe===void 0)return;Ke=2}const rt=me.drawRange,Ze=me.attributes.position;let lt=rt.start*Ke,Ot=(rt.start+rt.count)*Ke;He!==null&&(lt=Math.max(lt,He.start*Ke),Ot=Math.min(Ot,(He.start+He.count)*Ke)),qe!==null?(lt=Math.max(lt,0),Ot=Math.min(Ot,qe.count)):Ze!=null&&(lt=Math.max(lt,0),Ot=Math.min(Ot,Ze.count));const on=Ot-lt;if(on<0||on===1/0)return;Oe.setup(ae,fe,Ge,me,qe);let tn,Gt=J;if(qe!==null&&(tn=Se.get(qe),Gt=ze,Gt.setIndex(tn)),ae.isMesh)fe.wireframe===!0?(Qe.setLineWidth(fe.wireframeLinewidth*Rt()),Gt.setMode(q.LINES)):Gt.setMode(q.TRIANGLES);else if(ae.isLine){let nt=fe.linewidth;nt===void 0&&(nt=1),Qe.setLineWidth(nt*Rt()),ae.isLineSegments?Gt.setMode(q.LINES):ae.isLineLoop?Gt.setMode(q.LINE_LOOP):Gt.setMode(q.LINE_STRIP)}else ae.isPoints?Gt.setMode(q.POINTS):ae.isSprite&&Gt.setMode(q.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)Vl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Gt.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const nt=ae._multiDrawStarts,Nt=ae._multiDrawCounts,pt=ae._multiDrawCount,Pn=qe?Se.get(qe).bytesPerElement:1,Aa=I.get(fe).currentProgram.getUniforms();for(let On=0;On<pt;On++)Aa.setValue(q,"_gl_DrawID",On),Gt.render(nt[On]/Pn,Nt[On])}else if(ae.isInstancedMesh)Gt.renderInstances(lt,on,ae.count);else if(me.isInstancedBufferGeometry){const nt=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Nt=Math.min(me.instanceCount,nt);Gt.renderInstances(lt,on,Nt)}else Gt.render(lt,on)};function Do(F,te,me){F.transparent===!0&&F.side===qi&&F.forceSinglePass===!1?(F.side=gi,F.needsUpdate=!0,gr(F,te,me),F.side=Sa,F.needsUpdate=!0,gr(F,te,me),F.side=qi):gr(F,te,me)}this.compile=function(F,te,me=null){me===null&&(me=F),R=Ee.get(me),R.init(te),b.push(R),me.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(R.pushLight(ae),ae.castShadow&&R.pushShadow(ae))}),F!==me&&F.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(R.pushLight(ae),ae.castShadow&&R.pushShadow(ae))}),R.setupLights();const fe=new Set;return F.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const He=ae.material;if(He)if(Array.isArray(He))for(let Xe=0;Xe<He.length;Xe++){const Ge=He[Xe];Do(Ge,me,ae),fe.add(Ge)}else Do(He,me,ae),fe.add(He)}),R=b.pop(),fe},this.compileAsync=function(F,te,me=null){const fe=this.compile(F,te,me);return new Promise(ae=>{function He(){if(fe.forEach(function(Xe){I.get(Xe).currentProgram.isReady()&&fe.delete(Xe)}),fe.size===0){ae(F);return}setTimeout(He,10)}gt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let hr=null;function Io(F){hr&&hr(F)}function pr(){ra.stop()}function Uo(){ra.start()}const ra=new hA;ra.setAnimationLoop(Io),typeof self<"u"&&ra.setContext(self),this.setAnimationLoop=function(F){hr=F,Ie.setAnimationLoop(F),F===null?ra.stop():ra.start()},Ie.addEventListener("sessionstart",pr),Ie.addEventListener("sessionend",Uo),this.render=function(F,te){if(te!==void 0&&te.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const me=Ie.enabled===!0&&Ie.isPresenting===!0,fe=O!==null&&(X===null||me)&&O.begin(C,X);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(te),te=Ie.getCamera()),F.isScene===!0&&F.onBeforeRender(C,F,te,X),R=Ee.get(F,b.length),R.init(te),b.push(R),St.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Fe.setFromProjectionMatrix(St,ha,te.reversedDepth),at=this.localClippingEnabled,Ue=De.init(this.clippingPlanes,at),D=ue.get(F,B.length),D.init(),B.push(D),Ie.enabled===!0&&Ie.isPresenting===!0){const Xe=C.xr.getDepthSensingMesh();Xe!==null&&Ii(Xe,te,-1/0,C.sortObjects)}Ii(F,te,0,C.sortObjects),D.finish(),C.sortObjects===!0&&D.sort(Me,we),it=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,it&&Le.addToRenderList(D,F),this.info.render.frame++,Ue===!0&&De.beginShadows();const ae=R.state.shadowsArray;if(Be.render(ae,F,te),Ue===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe&&O.hasRenderPass())===!1){const Xe=D.opaque,Ge=D.transmissive;if(R.setupLights(),te.isArrayCamera){const qe=te.cameras;if(Ge.length>0)for(let Ke=0,rt=qe.length;Ke<rt;Ke++){const Ze=qe[Ke];Fn(Xe,Ge,F,Ze)}it&&Le.render(F);for(let Ke=0,rt=qe.length;Ke<rt;Ke++){const Ze=qe[Ke];An(D,F,Ze,Ze.viewport)}}else Ge.length>0&&Fn(Xe,Ge,F,te),it&&Le.render(F),An(D,F,te)}X!==null&&k===0&&(ee.updateMultisampleRenderTarget(X),ee.updateRenderTargetMipmap(X)),fe&&O.end(C),F.isScene===!0&&F.onAfterRender(C,F,te),Oe.resetDefaultState(),W=-1,Q=null,b.pop(),b.length>0?(R=b[b.length-1],Ue===!0&&De.setGlobalState(C.clippingPlanes,R.state.camera)):R=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function Ii(F,te,me,fe){if(F.visible===!1)return;if(F.layers.test(te.layers)){if(F.isGroup)me=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(te);else if(F.isLight)R.pushLight(F),F.castShadow&&R.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Fe.intersectsSprite(F)){fe&&tt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(St);const Xe=Pe.update(F),Ge=F.material;Ge.visible&&D.push(F,Xe,Ge,me,tt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Fe.intersectsObject(F))){const Xe=Pe.update(F),Ge=F.material;if(fe&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),tt.copy(F.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),tt.copy(Xe.boundingSphere.center)),tt.applyMatrix4(F.matrixWorld).applyMatrix4(St)),Array.isArray(Ge)){const qe=Xe.groups;for(let Ke=0,rt=qe.length;Ke<rt;Ke++){const Ze=qe[Ke],lt=Ge[Ze.materialIndex];lt&&lt.visible&&D.push(F,Xe,lt,me,tt.z,Ze)}}else Ge.visible&&D.push(F,Xe,Ge,me,tt.z,null)}}const He=F.children;for(let Xe=0,Ge=He.length;Xe<Ge;Xe++)Ii(He[Xe],te,me,fe)}function An(F,te,me,fe){const{opaque:ae,transmissive:He,transparent:Xe}=F;R.setupLightsView(me),Ue===!0&&De.setGlobalState(C.clippingPlanes,me),fe&&Qe.viewport(P.copy(fe)),ae.length>0&&Ki(ae,te,me),He.length>0&&Ki(He,te,me),Xe.length>0&&Ki(Xe,te,me),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Fn(F,te,me,fe){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[fe.id]===void 0){const lt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[fe.id]=new sa(1,1,{generateMipmaps:!0,type:lt?_a:wi,minFilter:lr,samples:Ut.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const He=R.state.transmissionRenderTarget[fe.id],Xe=fe.viewport||P;He.setSize(Xe.z*C.transmissionResolutionScale,Xe.w*C.transmissionResolutionScale);const Ge=C.getRenderTarget(),qe=C.getActiveCubeFace(),Ke=C.getActiveMipmapLevel();C.setRenderTarget(He),C.getClearColor(re),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),it&&Le.render(me);const rt=C.toneMapping;C.toneMapping=ga;const Ze=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),R.setupLightsView(fe),Ue===!0&&De.setGlobalState(C.clippingPlanes,fe),Ki(F,me,fe),ee.updateMultisampleRenderTarget(He),ee.updateRenderTargetMipmap(He),gt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ot=0,on=te.length;Ot<on;Ot++){const tn=te[Ot],{object:Gt,geometry:nt,material:Nt,group:pt}=tn;if(Nt.side===qi&&Gt.layers.test(fe.layers)){const Pn=Nt.side;Nt.side=gi,Nt.needsUpdate=!0,mr(Gt,me,fe,nt,Nt,pt),Nt.side=Pn,Nt.needsUpdate=!0,lt=!0}}lt===!0&&(ee.updateMultisampleRenderTarget(He),ee.updateRenderTargetMipmap(He))}C.setRenderTarget(Ge,qe,Ke),C.setClearColor(re,he),Ze!==void 0&&(fe.viewport=Ze),C.toneMapping=rt}function Ki(F,te,me){const fe=te.isScene===!0?te.overrideMaterial:null;for(let ae=0,He=F.length;ae<He;ae++){const Xe=F[ae],{object:Ge,geometry:qe,group:Ke}=Xe;let rt=Xe.material;rt.allowOverride===!0&&fe!==null&&(rt=fe),Ge.layers.test(me.layers)&&mr(Ge,te,me,qe,rt,Ke)}}function mr(F,te,me,fe,ae,He){F.onBeforeRender(C,te,me,fe,ae,He),F.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ae.onBeforeRender(C,te,me,fe,F,He),ae.transparent===!0&&ae.side===qi&&ae.forceSinglePass===!1?(ae.side=gi,ae.needsUpdate=!0,C.renderBufferDirect(me,te,fe,ae,F,He),ae.side=Sa,ae.needsUpdate=!0,C.renderBufferDirect(me,te,fe,ae,F,He),ae.side=qi):C.renderBufferDirect(me,te,fe,ae,F,He),F.onAfterRender(C,te,me,fe,ae,He)}function gr(F,te,me){te.isScene!==!0&&(te=et);const fe=I.get(F),ae=R.state.lights,He=R.state.shadowsArray,Xe=ae.state.version,Ge=We.getParameters(F,ae.state,He,te,me),qe=We.getProgramCacheKey(Ge);let Ke=fe.programs;fe.environment=F.isMeshStandardMaterial?te.environment:null,fe.fog=te.fog,fe.envMap=(F.isMeshStandardMaterial?Te:ve).get(F.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&F.envMap===null?te.environmentRotation:F.envMapRotation,Ke===void 0&&(F.addEventListener("dispose",Qn),Ke=new Map,fe.programs=Ke);let rt=Ke.get(qe);if(rt!==void 0){if(fe.currentProgram===rt&&fe.lightsStateVersion===Xe)return Bo(F,Ge),rt}else Ge.uniforms=We.getUniforms(F),F.onBeforeCompile(Ge,C),rt=We.acquireProgram(Ge,qe),Ke.set(qe,rt),fe.uniforms=Ge.uniforms;const Ze=fe.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ze.clippingPlanes=De.uniform),Bo(F,Ge),fe.needsLights=Ja(F),fe.lightsStateVersion=Xe,fe.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMap.value=ae.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotShadowMap.value=ae.state.spotShadowMap,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMap.value=ae.state.pointShadowMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),fe.currentProgram=rt,fe.uniformsList=null,rt}function Ql(F){if(F.uniformsList===null){const te=F.currentProgram.getUniforms();F.uniformsList=zu.seqWithValue(te.seq,F.uniforms)}return F.uniformsList}function Bo(F,te){const me=I.get(F);me.outputColorSpace=te.outputColorSpace,me.batching=te.batching,me.batchingColor=te.batchingColor,me.instancing=te.instancing,me.instancingColor=te.instancingColor,me.instancingMorph=te.instancingMorph,me.skinning=te.skinning,me.morphTargets=te.morphTargets,me.morphNormals=te.morphNormals,me.morphColors=te.morphColors,me.morphTargetsCount=te.morphTargetsCount,me.numClippingPlanes=te.numClippingPlanes,me.numIntersection=te.numClipIntersection,me.vertexAlphas=te.vertexAlphas,me.vertexTangents=te.vertexTangents,me.toneMapping=te.toneMapping}function Ps(F,te,me,fe,ae){te.isScene!==!0&&(te=et),ee.resetTextureUnits();const He=te.fog,Xe=fe.isMeshStandardMaterial?te.environment:null,Ge=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Eo,qe=(fe.isMeshStandardMaterial?Te:ve).get(fe.envMap||Xe),Ke=fe.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,rt=!!me.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Ze=!!me.morphAttributes.position,lt=!!me.morphAttributes.normal,Ot=!!me.morphAttributes.color;let on=ga;fe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(on=C.toneMapping);const tn=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Gt=tn!==void 0?tn.length:0,nt=I.get(fe),Nt=R.state.lights;if(Ue===!0&&(at===!0||F!==Q)){const zn=F===Q&&fe.id===W;De.setState(fe,F,zn)}let pt=!1;fe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Nt.state.version||nt.outputColorSpace!==Ge||ae.isBatchedMesh&&nt.batching===!1||!ae.isBatchedMesh&&nt.batching===!0||ae.isBatchedMesh&&nt.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&nt.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&nt.instancing===!1||!ae.isInstancedMesh&&nt.instancing===!0||ae.isSkinnedMesh&&nt.skinning===!1||!ae.isSkinnedMesh&&nt.skinning===!0||ae.isInstancedMesh&&nt.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&nt.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&nt.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&nt.instancingMorph===!1&&ae.morphTexture!==null||nt.envMap!==qe||fe.fog===!0&&nt.fog!==He||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==De.numPlanes||nt.numIntersection!==De.numIntersection)||nt.vertexAlphas!==Ke||nt.vertexTangents!==rt||nt.morphTargets!==Ze||nt.morphNormals!==lt||nt.morphColors!==Ot||nt.toneMapping!==on||nt.morphTargetsCount!==Gt)&&(pt=!0):(pt=!0,nt.__version=fe.version);let Pn=nt.currentProgram;pt===!0&&(Pn=gr(fe,te,ae));let Aa=!1,On=!1,Ui=!1;const Xt=Pn.getUniforms(),Nn=nt.uniforms;if(Qe.useProgram(Pn.program)&&(Aa=!0,On=!0,Ui=!0),fe.id!==W&&(W=fe.id,On=!0),Aa||Q!==F){Qe.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),Xt.setValue(q,"projectionMatrix",F.projectionMatrix),Xt.setValue(q,"viewMatrix",F.matrixWorldInverse);const Hn=Xt.map.cameraPosition;Hn!==void 0&&Hn.setValue(q,Je.setFromMatrixPosition(F.matrixWorld)),Ut.logarithmicDepthBuffer&&Xt.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Xt.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),Q!==F&&(Q=F,On=!0,Ui=!0)}if(nt.needsLights&&(Nt.state.directionalShadowMap.length>0&&Xt.setValue(q,"directionalShadowMap",Nt.state.directionalShadowMap,ee),Nt.state.spotShadowMap.length>0&&Xt.setValue(q,"spotShadowMap",Nt.state.spotShadowMap,ee),Nt.state.pointShadowMap.length>0&&Xt.setValue(q,"pointShadowMap",Nt.state.pointShadowMap,ee)),ae.isSkinnedMesh){Xt.setOptional(q,ae,"bindMatrix"),Xt.setOptional(q,ae,"bindMatrixInverse");const zn=ae.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Xt.setValue(q,"boneTexture",zn.boneTexture,ee))}ae.isBatchedMesh&&(Xt.setOptional(q,ae,"batchingTexture"),Xt.setValue(q,"batchingTexture",ae._matricesTexture,ee),Xt.setOptional(q,ae,"batchingIdTexture"),Xt.setValue(q,"batchingIdTexture",ae._indirectTexture,ee),Xt.setOptional(q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Xt.setValue(q,"batchingColorTexture",ae._colorsTexture,ee));const Cn=me.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ut.update(ae,me,Pn),(On||nt.receiveShadow!==ae.receiveShadow)&&(nt.receiveShadow=ae.receiveShadow,Xt.setValue(q,"receiveShadow",ae.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Nn.envMap.value=qe,Nn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&te.environment!==null&&(Nn.envMapIntensity.value=te.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=aR()),On&&(Xt.setValue(q,"toneMappingExposure",C.toneMappingExposure),nt.needsLights&&Lo(Nn,Ui),He&&fe.fog===!0&&j.refreshFogUniforms(Nn,He),j.refreshMaterialUniforms(Nn,fe,pe,ie,R.state.transmissionRenderTarget[F.id]),zu.upload(q,Ql(nt),Nn,ee)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(zu.upload(q,Ql(nt),Nn,ee),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Xt.setValue(q,"center",ae.center),Xt.setValue(q,"modelViewMatrix",ae.modelViewMatrix),Xt.setValue(q,"normalMatrix",ae.normalMatrix),Xt.setValue(q,"modelMatrix",ae.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const zn=fe.uniformsGroups;for(let Hn=0,Sr=zn.length;Hn<Sr;Hn++){const Zi=zn[Hn];Ce.update(Zi,Pn),Ce.bind(Zi,Pn)}}return Pn}function Lo(F,te){F.ambientLightColor.needsUpdate=te,F.lightProbe.needsUpdate=te,F.directionalLights.needsUpdate=te,F.directionalLightShadows.needsUpdate=te,F.pointLights.needsUpdate=te,F.pointLightShadows.needsUpdate=te,F.spotLights.needsUpdate=te,F.spotLightShadows.needsUpdate=te,F.rectAreaLights.needsUpdate=te,F.hemisphereLights.needsUpdate=te}function Ja(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(F,te,me){const fe=I.get(F);fe.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),I.get(F.texture).__webglTexture=te,I.get(F.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:me,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,te){const me=I.get(F);me.__webglFramebuffer=te,me.__useDefaultFramebuffer=te===void 0};const $a=q.createFramebuffer();this.setRenderTarget=function(F,te=0,me=0){X=F,N=te,k=me;let fe=null,ae=!1,He=!1;if(F){const Ge=I.get(F);if(Ge.__useDefaultFramebuffer!==void 0){Qe.bindFramebuffer(q.FRAMEBUFFER,Ge.__webglFramebuffer),P.copy(F.viewport),H.copy(F.scissor),Z=F.scissorTest,Qe.viewport(P),Qe.scissor(H),Qe.setScissorTest(Z),W=-1;return}else if(Ge.__webglFramebuffer===void 0)ee.setupRenderTarget(F);else if(Ge.__hasExternalTextures)ee.rebindTextures(F,I.get(F.texture).__webglTexture,I.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const rt=F.depthTexture;if(Ge.__boundDepthTexture!==rt){if(rt!==null&&I.has(rt)&&(F.width!==rt.image.width||F.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(F)}}const qe=F.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(He=!0);const Ke=I.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ke[te])?fe=Ke[te][me]:fe=Ke[te],ae=!0):F.samples>0&&ee.useMultisampledRTT(F)===!1?fe=I.get(F).__webglMultisampledFramebuffer:Array.isArray(Ke)?fe=Ke[me]:fe=Ke,P.copy(F.viewport),H.copy(F.scissor),Z=F.scissorTest}else P.copy($).multiplyScalar(pe).floor(),H.copy(ce).multiplyScalar(pe).floor(),Z=be;if(me!==0&&(fe=$a),Qe.bindFramebuffer(q.FRAMEBUFFER,fe)&&Qe.drawBuffers(F,fe),Qe.viewport(P),Qe.scissor(H),Qe.setScissorTest(Z),ae){const Ge=I.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ge.__webglTexture,me)}else if(He){const Ge=te;for(let qe=0;qe<F.textures.length;qe++){const Ke=I.get(F.textures[qe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+qe,Ke.__webglTexture,me,Ge)}}else if(F!==null&&me!==0){const Ge=I.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ge.__webglTexture,me)}W=-1},this.readRenderTargetPixels=function(F,te,me,fe,ae,He,Xe,Ge=0){if(!(F&&F.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=I.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){Qe.bindFramebuffer(q.FRAMEBUFFER,qe);try{const Ke=F.textures[Ge],rt=Ke.format,Ze=Ke.type;if(!Ut.textureFormatReadable(rt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Ze)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=F.width-fe&&me>=0&&me<=F.height-ae&&(F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ge),q.readPixels(te,me,fe,ae,Re.convert(rt),Re.convert(Ze),He))}finally{const Ke=X!==null?I.get(X).__webglFramebuffer:null;Qe.bindFramebuffer(q.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(F,te,me,fe,ae,He,Xe,Ge=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=I.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(te>=0&&te<=F.width-fe&&me>=0&&me<=F.height-ae){Qe.bindFramebuffer(q.FRAMEBUFFER,qe);const Ke=F.textures[Ge],rt=Ke.format,Ze=Ke.type;if(!Ut.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,lt),q.bufferData(q.PIXEL_PACK_BUFFER,He.byteLength,q.STREAM_READ),F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ge),q.readPixels(te,me,fe,ae,Re.convert(rt),Re.convert(Ze),0);const Ot=X!==null?I.get(X).__webglFramebuffer:null;Qe.bindFramebuffer(q.FRAMEBUFFER,Ot);const on=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await CE(q,on,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,lt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,He),q.deleteBuffer(lt),q.deleteSync(on),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,te=null,me=0){const fe=Math.pow(2,-me),ae=Math.floor(F.image.width*fe),He=Math.floor(F.image.height*fe),Xe=te!==null?te.x:0,Ge=te!==null?te.y:0;ee.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,me,0,0,Xe,Ge,ae,He),Qe.unbindTexture()};const Os=q.createFramebuffer(),es=q.createFramebuffer();this.copyTextureToTexture=function(F,te,me=null,fe=null,ae=0,He=null){He===null&&(ae!==0?(Vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),He=ae,ae=0):He=0);let Xe,Ge,qe,Ke,rt,Ze,lt,Ot,on;const tn=F.isCompressedTexture?F.mipmaps[He]:F.image;if(me!==null)Xe=me.max.x-me.min.x,Ge=me.max.y-me.min.y,qe=me.isBox3?me.max.z-me.min.z:1,Ke=me.min.x,rt=me.min.y,Ze=me.isBox3?me.min.z:0;else{const Cn=Math.pow(2,-ae);Xe=Math.floor(tn.width*Cn),Ge=Math.floor(tn.height*Cn),F.isDataArrayTexture?qe=tn.depth:F.isData3DTexture?qe=Math.floor(tn.depth*Cn):qe=1,Ke=0,rt=0,Ze=0}fe!==null?(lt=fe.x,Ot=fe.y,on=fe.z):(lt=0,Ot=0,on=0);const Gt=Re.convert(te.format),nt=Re.convert(te.type);let Nt;te.isData3DTexture?(ee.setTexture3D(te,0),Nt=q.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(ee.setTexture2DArray(te,0),Nt=q.TEXTURE_2D_ARRAY):(ee.setTexture2D(te,0),Nt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const pt=q.getParameter(q.UNPACK_ROW_LENGTH),Pn=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Aa=q.getParameter(q.UNPACK_SKIP_PIXELS),On=q.getParameter(q.UNPACK_SKIP_ROWS),Ui=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,tn.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,tn.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Ke),q.pixelStorei(q.UNPACK_SKIP_ROWS,rt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ze);const Xt=F.isDataArrayTexture||F.isData3DTexture,Nn=te.isDataArrayTexture||te.isData3DTexture;if(F.isDepthTexture){const Cn=I.get(F),zn=I.get(te),Hn=I.get(Cn.__renderTarget),Sr=I.get(zn.__renderTarget);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,Hn.__webglFramebuffer),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Zi=0;Zi<qe;Zi++)Xt&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(F).__webglTexture,ae,Ze+Zi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(te).__webglTexture,He,on+Zi)),q.blitFramebuffer(Ke,rt,Xe,Ge,lt,Ot,Xe,Ge,q.DEPTH_BUFFER_BIT,q.NEAREST);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||F.isRenderTargetTexture||I.has(F)){const Cn=I.get(F),zn=I.get(te);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,Os),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,es);for(let Hn=0;Hn<qe;Hn++)Xt?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Cn.__webglTexture,ae,Ze+Hn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Cn.__webglTexture,ae),Nn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,zn.__webglTexture,He,on+Hn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,zn.__webglTexture,He),ae!==0?q.blitFramebuffer(Ke,rt,Xe,Ge,lt,Ot,Xe,Ge,q.COLOR_BUFFER_BIT,q.NEAREST):Nn?q.copyTexSubImage3D(Nt,He,lt,Ot,on+Hn,Ke,rt,Xe,Ge):q.copyTexSubImage2D(Nt,He,lt,Ot,Ke,rt,Xe,Ge);Qe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Nn?F.isDataTexture||F.isData3DTexture?q.texSubImage3D(Nt,He,lt,Ot,on,Xe,Ge,qe,Gt,nt,tn.data):te.isCompressedArrayTexture?q.compressedTexSubImage3D(Nt,He,lt,Ot,on,Xe,Ge,qe,Gt,tn.data):q.texSubImage3D(Nt,He,lt,Ot,on,Xe,Ge,qe,Gt,nt,tn):F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,He,lt,Ot,Xe,Ge,Gt,nt,tn.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,He,lt,Ot,tn.width,tn.height,Gt,tn.data):q.texSubImage2D(q.TEXTURE_2D,He,lt,Ot,Xe,Ge,Gt,nt,tn);q.pixelStorei(q.UNPACK_ROW_LENGTH,pt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pn),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Aa),q.pixelStorei(q.UNPACK_SKIP_ROWS,On),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ui),He===0&&te.generateMipmaps&&q.generateMipmap(Nt),Qe.unbindTexture()},this.initRenderTarget=function(F){I.get(F).__webglFramebuffer===void 0&&ee.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?ee.setTextureCube(F,0):F.isData3DTexture?ee.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?ee.setTexture2DArray(F,0):ee.setTexture2D(F,0),Qe.unbindTexture()},this.resetState=function(){N=0,k=0,X=null,Qe.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}const rv={type:"change"},sm={type:"start"},AA={type:"end"},Tu=new im,ov=new Wa,sR=Math.cos(70*em.DEG2RAD),Rn=new V,pi=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gh=1e-6;let rR=class extends uM{constructor(e,n=null){super(e,n),this.state=$t.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new nn,this._lastTargetPosition=new V,this._quat=new nn().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xu,this._sphericalDelta=new Xu,this._scale=1,this._panOffset=new V,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new V,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lR.bind(this),this._onPointerDown=oR.bind(this),this._onPointerUp=cR.bind(this),this._onContextMenu=gR.bind(this),this._onMouseWheel=dR.bind(this),this._onKeyDown=hR.bind(this),this._onTouchStart=pR.bind(this),this._onTouchMove=mR.bind(this),this._onMouseDown=uR.bind(this),this._onMouseMove=fR.bind(this),this._interceptControlDown=SR.bind(this),this._interceptControlUp=_R.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rv),this.update(),this.state=$t.NONE}update(e=null){const n=this.object.position;Rn.copy(n).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=pi:a>Math.PI&&(a-=pi),r<-Math.PI?r+=pi:r>Math.PI&&(r-=pi),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=u!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=Rn.length();u=this._clampDistance(f*this._scale);const d=f-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const f=new V(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(f),this.object.updateMatrixWorld(),u=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Tu.origin.copy(this.object.position),Tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tu.direction))<sR?this.object.lookAt(this.target):(ov.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tu.intersectPlane(ov,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gh||this._lastTargetPosition.distanceToSquared(this.target)>Gh?(this.dispatchEvent(rv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pi/60*this.autoRotateSpeed*e:pi/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Rn.setFromMatrixColumn(n,0),Rn.multiplyScalar(-e),this._panOffset.add(Rn)}_panUp(e,n){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(n,1):(Rn.setFromMatrixColumn(n,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(e),this._panOffset.add(Rn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rn.copy(r).sub(this.target);let o=Rn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/a.clientHeight,this.object.matrix),this._panUp(2*n*o/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=e-a.left,o=n-a.top,u=a.width,f=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(o/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/n.clientHeight),this._rotateUp(pi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(a,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(a*a+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),o=.5*(e.pageY+a.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/n.clientHeight),this._rotateUp(pi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ke,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}};function oR(l){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(l.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(l)&&(this._addPointer(l),l.pointerType==="touch"?this._onTouchStart(l):this._onMouseDown(l)))}function lR(l){this.enabled!==!1&&(l.pointerType==="touch"?this._onTouchMove(l):this._onMouseMove(l))}function cR(l){switch(this._removePointer(l),this._pointers.length){case 0:this.domElement.releasePointerCapture(l.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(AA),this.state=$t.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function uR(l){let e;switch(l.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(l),this.state=$t.DOLLY;break;case Xi.ROTATE:if(l.ctrlKey||l.metaKey||l.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(l),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(l),this.state=$t.ROTATE}break;case Xi.PAN:if(l.ctrlKey||l.metaKey||l.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(l),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(l),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(sm)}function fR(l){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(l);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(l);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(l);break}}function dR(l){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(l.preventDefault(),this.dispatchEvent(sm),this._handleMouseWheel(this._customWheelEvent(l)),this.dispatchEvent(AA))}function hR(l){this.enabled!==!1&&this._handleKeyDown(l)}function pR(l){switch(this._trackPointer(l),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(l),this.state=$t.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(l),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(l),this.state=$t.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(l),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(sm)}function mR(l){switch(this._trackPointer(l),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(l),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(l),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(l),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(l),this.update();break;default:this.state=$t.NONE}}function gR(l){this.enabled!==!1&&l.preventDefault()}function SR(l){l.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _R(l){l.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Bs{static idGen=0;constructor(e,n){let a,r;this.promise=new Promise((h,m)=>{a=h,r=m});const o=a.bind(this),u=r.bind(this),f=(...h)=>{o(...h)},d=h=>{u(h)};e(f.bind(this),d.bind(this)),this.abortHandler=n,this.id=Bs.idGen++}then(e){return new Bs((n,a)=>{this.promise=this.promise.then((...r)=>{const o=e(...r);o instanceof Promise||o instanceof Bs?o.then((...u)=>{n(...u)}):n(o)}).catch(r=>{a(r)})},this.abortHandler)}catch(e){return new Bs(n=>{this.promise=this.promise.then((...a)=>{n(...a)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}}class xA extends Error{constructor(e){super(e)}}(function(){const l=new Float32Array(1),e=new Int32Array(l.buffer);return function(n){l[0]=n;const a=e[0];let r=a>>16&32768,o=a>>12&2047;const u=a>>23&255;return u<103?r:u>142?(r|=31744,r|=(u==255?0:1)&&a&8388607,r):u<113?(o|=2048,r|=(o>>114-u)+(o>>113-u&1),r):(r|=u-112<<10|o>>1,r+=o&1,r)}})();const Vh=(function(){const l=new Float32Array(1),e=new Int32Array(l.buffer);return function(n){return l[0]=n,e[0]}})(),vR=function(l,e){return l[e]+(l[e+1]<<8)+(l[e+2]<<16)+(l[e+3]<<24)},ef=function(l,e,n=!0,a){const r=new AbortController,o=r.signal;let u=!1;const f=m=>{r.abort(m),u=!0};let d=!1;const h=(m,g,_,v)=>{e&&!d&&(e(m,g,_,v),m===100&&(d=!0))};return new Bs((m,g)=>{const _={signal:o};a&&(_.headers=a),fetch(l,_).then(async v=>{if(!v.ok){const w=await v.text();g(new Error(`Fetch failed: ${v.status} ${v.statusText} ${w}`));return}const y=v.body.getReader();let E=0,x=v.headers.get("Content-Length"),A=x?parseInt(x):void 0;const T=[];for(;!u;)try{const{value:w,done:D}=await y.read();if(D){if(h(100,"100%",w,A),n){const b=new Blob(T).arrayBuffer();m(b)}else m();break}E+=w.length;let R,B;A!==void 0&&(R=E/A*100,B=`${R.toFixed(2)}%`),n&&T.push(w),h(R,B,w,A)}catch(w){g(w);return}}).catch(v=>{g(new xA(v))})},f)},un=function(l,e,n){return Math.max(Math.min(l,n),e)},co=function(){return performance.now()/1e3},ho=l=>{if(l.geometry&&(l.geometry.dispose(),l.geometry=null),l.material&&(l.material.dispose(),l.material=null),l.children)for(let e of l.children)ho(e)},Di=(l,e)=>new Promise(n=>{window.setTimeout(()=>{n(l?l():void 0)},e?1:50)}),So=(l=0)=>{let e=0;if(l===1)e=9;else if(l===2)e=24;else if(l===3)e=45;else if(l>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},rm=()=>{let l,e;return{promise:new Promise((a,r)=>{l=a,e=r}),resolve:l,reject:e}},kh=l=>{let e,n;return l||(l=()=>{}),{promise:new Bs((r,o)=>{e=r,n=o},l),resolve:e,reject:n}};class AR{constructor(e,n,a){this.major=e,this.minor=n,this.patch=a}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function om(){const l=navigator.userAgent;return l.indexOf("iPhone")>0||l.indexOf("iPad")>0}function yA(){if(om()){const l=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new AR(parseInt(l[1]||0,10),parseInt(l[2]||0,10),parseInt(l[3]||0,10))}else return null}const xR=14;class Ne{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=So(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+xR,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const n=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let a=So(e);for(let r=0;r<a;r++)n.push(0);return n}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=Ne.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,n,a,r,o,u,f,d,h,m,g,_,v,y,...E){const x=[e,n,a,r,o,u,f,d,h,m,g,_,v,y,...this.defaultSphericalHarmonics];for(let A=0;A<E.length&&A<this.sphericalHarmonicsCount;A++)x[A]=E[A];return this.addSplat(x),x}addSplatFromArray(e,n){const a=e.splats[n],r=Ne.createSplat(this.sphericalHarmonicsDegree);for(let o=0;o<this.componentCount&&o<a.length;o++)r[o]=a[o];this.addSplat(r)}}class Jt{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3}const yR=Jt.SphericalHarmonics8BitCompressionRange,Ds=yR/2,wn=kl.toHalfFloat.bind(kl),lm=kl.fromHalfFloat.bind(kl),cn=(l,e,n=!1,a,r)=>{if(e===0)return l;if(e===1||e===2&&!n)return kl.fromHalfFloat(l);if(e===2)return cm(l,a,r)},Bl=(l,e,n)=>{l=un(l,e,n);const a=n-e;return un(Math.floor((l-e)/a*255),0,255)},cm=(l,e,n)=>{const a=n-e;return l/255*a+e},EA=(l,e,n)=>Bl(lm(l,e,n)),ER=(l,e,n)=>wn(cm(l,e,n)),Vt=(l,e,n,a=!1)=>n===0?l.getFloat32(e*4,!0):n===1||n===2&&!a?l.getUint16(e*2,!0):l.getUint8(e,!0),MR=(function(){const l=e=>e;return function(e,n,a,r=!1){if(n===a)return e;let o=l;return n===2&&r?a===1?o=ER:a==0&&(o=cm):n===2||n===1?a===0?o=lm:a==2&&(r?o=EA:o=l):n===0&&(a===1?o=wn:a==2&&(r?o=Bl:o=wn)),o(e)}})(),uo=(l,e,n,a,r=0)=>{const o=new Uint8Array(l,e),u=new Uint8Array(n,a);for(let f=0;f<r;f++)u[f]=o[f]};class se{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,n=!0){this.constructFromBuffer(e,n)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let n=0;n<this.sections.length;n++){const a=this.sections[n];(n===0||a.sphericalHarmonicsDegree<e)&&(e=a.sphericalHarmonicsDegree)}return e}getBucketIndex(e,n){let a;const r=e.fullBucketCount*e.bucketSize;if(n<r)a=Math.floor(n/e.bucketSize);else{let o=r;a=e.fullBucketCount;let u=0;for(;o<e.splatCount;){let f=e.partiallyFilledBucketLengths[u];if(n>=o&&n<o+f)break;o+=f,a++,u++}}return a}getSplatCenter(e,n,a){const r=this.globalSplatIndexToSectionMap[e],o=this.sections[r],u=e-o.splatCountOffset,f=o.bytesPerSplat*u,d=new DataView(this.bufferData,o.dataBase+f),h=Vt(d,0,this.compressionLevel),m=Vt(d,1,this.compressionLevel),g=Vt(d,2,this.compressionLevel);if(this.compressionLevel>=1){const v=this.getBucketIndex(o,u)*se.BucketStorageSizeFloats,y=o.compressionScaleFactor,E=o.compressionScaleRange;n.x=(h-E)*y+o.bucketArray[v],n.y=(m-E)*y+o.bucketArray[v+1],n.z=(g-E)*y+o.bucketArray[v+2]}else n.x=h,n.y=m,n.z=g;a&&n.applyMatrix4(a)}getSplatScaleAndRotation=(function(){const e=new dt,n=new dt,a=new dt,r=new V,o=new V,u=new nn;return function(f,d,h,m,g){const _=this.globalSplatIndexToSectionMap[f],v=this.sections[_],y=f-v.splatCountOffset,E=v.bytesPerSplat*y+se.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,x=new DataView(this.bufferData,v.dataBase+E);o.set(cn(Vt(x,0,this.compressionLevel),this.compressionLevel),cn(Vt(x,1,this.compressionLevel),this.compressionLevel),cn(Vt(x,2,this.compressionLevel),this.compressionLevel)),g&&(g.x!==void 0&&(o.x=g.x),g.y!==void 0&&(o.y=g.y),g.z!==void 0&&(o.z=g.z)),u.set(cn(Vt(x,4,this.compressionLevel),this.compressionLevel),cn(Vt(x,5,this.compressionLevel),this.compressionLevel),cn(Vt(x,6,this.compressionLevel),this.compressionLevel),cn(Vt(x,3,this.compressionLevel),this.compressionLevel)),m?(e.makeScale(o.x,o.y,o.z),n.makeRotationFromQuaternion(u),a.copy(e).multiply(n).multiply(m),a.decompose(r,h,d)):(d.copy(o),h.copy(u))}})();getSplatColor(e,n){const a=this.globalSplatIndexToSectionMap[e],r=this.sections[a],o=e-r.splatCountOffset,u=r.bytesPerSplat*o+se.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,r.dataBase+u,4);n.set(f[0],f[1],f[2],f[3])}fillSplatCenterArray(e,n,a,r,o){const u=this.splatCount;a=a||0,r=r||u-1,o===void 0&&(o=a);const f=new V;for(let d=a;d<=r;d++){const h=this.globalSplatIndexToSectionMap[d],m=this.sections[h],g=d-m.splatCountOffset,_=(d-a+o)*se.CenterComponentCount,v=m.bytesPerSplat*g,y=new DataView(this.bufferData,m.dataBase+v),E=Vt(y,0,this.compressionLevel),x=Vt(y,1,this.compressionLevel),A=Vt(y,2,this.compressionLevel);if(this.compressionLevel>=1){const w=this.getBucketIndex(m,g)*se.BucketStorageSizeFloats,D=m.compressionScaleFactor,R=m.compressionScaleRange;f.x=(E-R)*D+m.bucketArray[w],f.y=(x-R)*D+m.bucketArray[w+1],f.z=(A-R)*D+m.bucketArray[w+2]}else f.x=E,f.y=x,f.z=A;n&&f.applyMatrix4(n),e[_]=f.x,e[_+1]=f.y,e[_+2]=f.z}}fillSplatScaleRotationArray=(function(){const e=new dt,n=new dt,a=new dt,r=new V,o=new nn,u=new V,f=d=>{const h=d.w<0?-1:1;d.x*=h,d.y*=h,d.z*=h,d.w*=h};return function(d,h,m,g,_,v,y,E){const x=this.splatCount;g=g||0,_=_||x-1,v===void 0&&(v=g);const A=(T,w)=>MR(T,w,y);for(let T=g;T<=_;T++){const w=this.globalSplatIndexToSectionMap[T],D=this.sections[w],R=T-D.splatCountOffset,B=D.bytesPerSplat*R+se.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,b=(T-g+v)*se.ScaleComponentCount,O=(T-g+v)*se.RotationComponentCount,C=new DataView(this.bufferData,D.dataBase+B),U=E&&E.x!==void 0?E.x:Vt(C,0,this.compressionLevel),N=E&&E.y!==void 0?E.y:Vt(C,1,this.compressionLevel),k=E&&E.z!==void 0?E.z:Vt(C,2,this.compressionLevel),X=Vt(C,3,this.compressionLevel),W=Vt(C,4,this.compressionLevel),Q=Vt(C,5,this.compressionLevel),P=Vt(C,6,this.compressionLevel);r.set(cn(U,this.compressionLevel),cn(N,this.compressionLevel),cn(k,this.compressionLevel)),o.set(cn(W,this.compressionLevel),cn(Q,this.compressionLevel),cn(P,this.compressionLevel),cn(X,this.compressionLevel)).normalize(),m&&(u.set(0,0,0),e.makeScale(r.x,r.y,r.z),n.makeRotationFromQuaternion(o),a.identity().premultiply(e).premultiply(n),a.premultiply(m),a.decompose(u,o,r),o.normalize()),f(o),d&&(d[b]=A(r.x,0),d[b+1]=A(r.y,0),d[b+2]=A(r.z,0)),h&&(h[O]=A(o.x,0),h[O+1]=A(o.y,0),h[O+2]=A(o.z,0),h[O+3]=A(o.w,0))}}})();static computeCovariance=(function(){const e=new dt,n=new ft,a=new ft,r=new ft,o=new ft,u=new ft,f=new ft;return function(d,h,m,g,_=0,v){e.makeScale(d.x,d.y,d.z),n.setFromMatrix4(e),e.makeRotationFromQuaternion(h),a.setFromMatrix4(e),r.copy(a).multiply(n),o.copy(r).transpose().premultiply(r),m&&(u.setFromMatrix4(m),f.copy(u).transpose(),o.multiply(f),o.premultiply(u)),v>=1?(g[_]=wn(o.elements[0]),g[_+1]=wn(o.elements[3]),g[_+2]=wn(o.elements[6]),g[_+3]=wn(o.elements[4]),g[_+4]=wn(o.elements[7]),g[_+5]=wn(o.elements[8])):(g[_]=o.elements[0],g[_+1]=o.elements[3],g[_+2]=o.elements[6],g[_+3]=o.elements[4],g[_+4]=o.elements[7],g[_+5]=o.elements[8])}})();fillSplatCovarianceArray(e,n,a,r,o,u){const f=this.splatCount,d=new V,h=new nn;a=a||0,r=r||f-1,o===void 0&&(o=a);for(let m=a;m<=r;m++){const g=this.globalSplatIndexToSectionMap[m],_=this.sections[g],v=m-_.splatCountOffset,y=(m-a+o)*se.CovarianceComponentCount,E=_.bytesPerSplat*v+se.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,x=new DataView(this.bufferData,_.dataBase+E);d.set(cn(Vt(x,0,this.compressionLevel),this.compressionLevel),cn(Vt(x,1,this.compressionLevel),this.compressionLevel),cn(Vt(x,2,this.compressionLevel),this.compressionLevel)),h.set(cn(Vt(x,4,this.compressionLevel),this.compressionLevel),cn(Vt(x,5,this.compressionLevel),this.compressionLevel),cn(Vt(x,6,this.compressionLevel),this.compressionLevel),cn(Vt(x,3,this.compressionLevel),this.compressionLevel)),se.computeCovariance(d,h,n,e,y,u)}}fillSplatColorArray(e,n,a,r,o){const u=this.splatCount;a=a||0,r=r||u-1,o===void 0&&(o=a);for(let f=a;f<=r;f++){const d=this.globalSplatIndexToSectionMap[f],h=this.sections[d],m=f-h.splatCountOffset,g=(f-a+o)*se.ColorComponentCount,_=h.bytesPerSplat*m+se.CompressionLevels[this.compressionLevel].ColorOffsetBytes,v=new Uint8Array(this.bufferData,h.dataBase+_);let y=v[3];y=y>=n?y:0,e[g]=v[0],e[g+1]=v[1],e[g+2]=v[2],e[g+3]=y}}fillSphericalHarmonicsArray=(function(){for(let W=0;W<15;W++)new V;const e=new ft,n=new dt,a=new V,r=new V,o=new nn,u=[],f=[],d=[],h=[],m=[],g=[],_=[],v=[],y=[],E=[],x=[],A=[],T=[],w=[],D=[],R=[],B=[],b=[],O=W=>W,C=(W,Q,P,H)=>{W[0]=Q,W[1]=P,W[2]=H},U=(W,Q,P,H,Z)=>{W[0]=Vt(Q,H,Z,!0),W[1]=Vt(Q,H+P,Z,!0),W[2]=Vt(Q,H+P+P,Z,!0)},N=(W,Q)=>{Q[0]=W[0],Q[1]=W[1],Q[2]=W[2]},k=(W,Q,P,H)=>{Q[P]=H(W[0]),Q[P+1]=H(W[1]),Q[P+2]=H(W[2])},X=(W,Q,P,H,Z)=>(Q[0]=cn(W[0],P,!0,H,Z),Q[1]=cn(W[1],P,!0,H,Z),Q[2]=cn(W[2],P,!0,H,Z),Q);return function(W,Q,P,H,Z,re,he){const z=this.splatCount;H=H||0,Z=Z||z-1,re===void 0&&(re=H),P&&Q>=1&&(n.copy(P),n.decompose(a,o,r),o.normalize(),n.makeRotationFromQuaternion(o),e.setFromMatrix4(n),C(u,e.elements[4],-e.elements[7],e.elements[1]),C(f,-e.elements[5],e.elements[8],-e.elements[2]),C(d,e.elements[3],-e.elements[6],e.elements[0]));const ie=Me=>EA(Me,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),pe=Me=>Bl(Me,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Me=H;Me<=Z;Me++){const we=this.globalSplatIndexToSectionMap[Me],$=this.sections[we];Q=Math.min(Q,$.sphericalHarmonicsDegree);const ce=So(Q),be=Me-$.splatCountOffset,Fe=$.bytesPerSplat*be+se.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Ue=new DataView(this.bufferData,$.dataBase+Fe),at=(Me-H+re)*ce;let St=P?0:this.compressionLevel,Je=O;St!==he&&(St===1?he===0?Je=lm:he==2&&(Je=ie):St===0&&(he===1?Je=wn:he==2&&(Je=pe)));const tt=this.minSphericalHarmonicsCoeff,et=this.maxSphericalHarmonicsCoeff;Q>=1&&(U(y,Ue,3,0,this.compressionLevel),U(E,Ue,3,1,this.compressionLevel),U(x,Ue,3,2,this.compressionLevel),P?(X(y,y,this.compressionLevel,tt,et),X(E,E,this.compressionLevel,tt,et),X(x,x,this.compressionLevel,tt,et),se.rotateSphericalHarmonics3(y,E,x,u,f,d,w,D,R)):(N(y,w),N(E,D),N(x,R)),k(w,W,at,Je),k(D,W,at+3,Je),k(R,W,at+6,Je),Q>=2&&(U(y,Ue,5,9,this.compressionLevel),U(E,Ue,5,10,this.compressionLevel),U(x,Ue,5,11,this.compressionLevel),U(A,Ue,5,12,this.compressionLevel),U(T,Ue,5,13,this.compressionLevel),P?(X(y,y,this.compressionLevel,tt,et),X(E,E,this.compressionLevel,tt,et),X(x,x,this.compressionLevel,tt,et),X(A,A,this.compressionLevel,tt,et),X(T,T,this.compressionLevel,tt,et),se.rotateSphericalHarmonics5(y,E,x,A,T,u,f,d,h,m,g,_,v,w,D,R,B,b)):(N(y,w),N(E,D),N(x,R),N(A,B),N(T,b)),k(w,W,at+9,Je),k(D,W,at+12,Je),k(R,W,at+15,Je),k(B,W,at+18,Je),k(b,W,at+21,Je)))}}})();static dot3=(e,n,a,r,o)=>{o[0]=o[1]=o[2]=0;const u=r[0],f=r[1],d=r[2];se.addInto3(e[0]*u,e[1]*u,e[2]*u,o),se.addInto3(n[0]*f,n[1]*f,n[2]*f,o),se.addInto3(a[0]*d,a[1]*d,a[2]*d,o)};static addInto3=(e,n,a,r)=>{r[0]=r[0]+e,r[1]=r[1]+n,r[2]=r[2]+a};static dot5=(e,n,a,r,o,u,f)=>{f[0]=f[1]=f[2]=0;const d=u[0],h=u[1],m=u[2],g=u[3],_=u[4];se.addInto3(e[0]*d,e[1]*d,e[2]*d,f),se.addInto3(n[0]*h,n[1]*h,n[2]*h,f),se.addInto3(a[0]*m,a[1]*m,a[2]*m,f),se.addInto3(r[0]*g,r[1]*g,r[2]*g,f),se.addInto3(o[0]*_,o[1]*_,o[2]*_,f)};static rotateSphericalHarmonics3=(e,n,a,r,o,u,f,d,h)=>{se.dot3(e,n,a,r,f),se.dot3(e,n,a,o,d),se.dot3(e,n,a,u,h)};static rotateSphericalHarmonics5=(e,n,a,r,o,u,f,d,h,m,g,_,v,y,E,x,A,T)=>{const w=Math.sqrt(.25),D=Math.sqrt(3/4),R=Math.sqrt(1/3),B=Math.sqrt(4/3),b=Math.sqrt(1/12);h[0]=w*(d[2]*u[0]+d[0]*u[2]+(u[2]*d[0]+u[0]*d[2])),h[1]=d[1]*u[0]+u[1]*d[0],h[2]=D*(d[1]*u[1]+u[1]*d[1]),h[3]=d[1]*u[2]+u[1]*d[2],h[4]=w*(d[2]*u[2]-d[0]*u[0]+(u[2]*d[2]-u[0]*d[0])),se.dot5(e,n,a,r,o,h,y),m[0]=w*(f[2]*u[0]+f[0]*u[2]+(u[2]*f[0]+u[0]*f[2])),m[1]=f[1]*u[0]+u[1]*f[0],m[2]=D*(f[1]*u[1]+u[1]*f[1]),m[3]=f[1]*u[2]+u[1]*f[2],m[4]=w*(f[2]*u[2]-f[0]*u[0]+(u[2]*f[2]-u[0]*f[0])),se.dot5(e,n,a,r,o,m,E),g[0]=R*(f[2]*f[0]+f[0]*f[2])+-b*(d[2]*d[0]+d[0]*d[2]+(u[2]*u[0]+u[0]*u[2])),g[1]=B*f[1]*f[0]+-R*(d[1]*d[0]+u[1]*u[0]),g[2]=f[1]*f[1]+-w*(d[1]*d[1]+u[1]*u[1]),g[3]=B*f[1]*f[2]+-R*(d[1]*d[2]+u[1]*u[2]),g[4]=R*(f[2]*f[2]-f[0]*f[0])+-b*(d[2]*d[2]-d[0]*d[0]+(u[2]*u[2]-u[0]*u[0])),se.dot5(e,n,a,r,o,g,x),_[0]=w*(f[2]*d[0]+f[0]*d[2]+(d[2]*f[0]+d[0]*f[2])),_[1]=f[1]*d[0]+d[1]*f[0],_[2]=D*(f[1]*d[1]+d[1]*f[1]),_[3]=f[1]*d[2]+d[1]*f[2],_[4]=w*(f[2]*d[2]-f[0]*d[0]+(d[2]*f[2]-d[0]*f[0])),se.dot5(e,n,a,r,o,_,A),v[0]=w*(d[2]*d[0]+d[0]*d[2]-(u[2]*u[0]+u[0]*u[2])),v[1]=d[1]*d[0]-u[1]*u[0],v[2]=D*(d[1]*d[1]-u[1]*u[1]),v[3]=d[1]*d[2]-u[1]*u[2],v[4]=w*(d[2]*d[2]-d[0]*d[0]-(u[2]*u[2]-u[0]*u[0])),se.dot5(e,n,a,r,o,v,T)};static parseHeader(e){const n=new Uint8Array(e,0,se.HeaderSizeBytes),a=new Uint16Array(e,0,se.HeaderSizeBytes/2),r=new Uint32Array(e,0,se.HeaderSizeBytes/4),o=new Float32Array(e,0,se.HeaderSizeBytes/4),u=n[0],f=n[1],d=r[1],h=r[2],m=r[3],g=r[4],_=a[10],v=new V(o[6],o[7],o[8]),y=o[9]||-Ds,E=o[10]||Ds;return{versionMajor:u,versionMinor:f,maxSectionCount:d,sectionCount:h,maxSplatCount:m,splatCount:g,compressionLevel:_,sceneCenter:v,minSphericalHarmonicsCoeff:y,maxSphericalHarmonicsCoeff:E}}static writeHeaderCountsToBuffer(e,n,a){const r=new Uint32Array(a,0,se.HeaderSizeBytes/4);r[2]=e,r[4]=n}static writeHeaderToBuffer(e,n){const a=new Uint8Array(n,0,se.HeaderSizeBytes),r=new Uint16Array(n,0,se.HeaderSizeBytes/2),o=new Uint32Array(n,0,se.HeaderSizeBytes/4),u=new Float32Array(n,0,se.HeaderSizeBytes/4);a[0]=e.versionMajor,a[1]=e.versionMinor,a[2]=0,a[3]=0,o[1]=e.maxSectionCount,o[2]=e.sectionCount,o[3]=e.maxSplatCount,o[4]=e.splatCount,r[10]=e.compressionLevel,u[6]=e.sceneCenter.x,u[7]=e.sceneCenter.y,u[8]=e.sceneCenter.z,u[9]=e.minSphericalHarmonicsCoeff||-Ds,u[10]=e.maxSphericalHarmonicsCoeff||Ds}static parseSectionHeaders(e,n,a=0,r){const o=e.compressionLevel,u=e.maxSectionCount,f=new Uint16Array(n,a,u*se.SectionHeaderSizeBytes/2),d=new Uint32Array(n,a,u*se.SectionHeaderSizeBytes/4),h=new Float32Array(n,a,u*se.SectionHeaderSizeBytes/4),m=[];let g=0,_=g/2,v=g/4,y=se.HeaderSizeBytes+e.maxSectionCount*se.SectionHeaderSizeBytes,E=0;for(let x=0;x<u;x++){const A=d[v+1],T=d[v+2],w=d[v+3],D=h[v+4],R=D/2,B=f[_+10],b=d[v+6]||se.CompressionLevels[o].ScaleRange,O=d[v+8],C=d[v+9],U=C*4,N=B*w+U,k=f[_+20],{bytesPerSplat:X}=se.calculateComponentStorage(o,k),W=X*A,Q=W+N,P={bytesPerSplat:X,splatCountOffset:E,splatCount:r?A:0,maxSplatCount:A,bucketSize:T,bucketCount:w,bucketBlockSize:D,halfBucketBlockSize:R,bucketStorageSizeBytes:B,bucketsStorageSizeBytes:N,splatDataStorageSizeBytes:W,storageSizeBytes:Q,compressionScaleRange:b,compressionScaleFactor:R/b,base:y,bucketsBase:y+U,dataBase:y+N,fullBucketCount:O,partiallyFilledBucketCount:C,sphericalHarmonicsDegree:k};m[x]=P,y+=Q,g+=se.SectionHeaderSizeBytes,_=g/2,v=g/4,E+=A}return m}static writeSectionHeaderToBuffer(e,n,a,r=0){const o=new Uint16Array(a,r,se.SectionHeaderSizeBytes/2),u=new Uint32Array(a,r,se.SectionHeaderSizeBytes/4),f=new Float32Array(a,r,se.SectionHeaderSizeBytes/4);u[0]=e.splatCount,u[1]=e.maxSplatCount,u[2]=n>=1?e.bucketSize:0,u[3]=n>=1?e.bucketCount:0,f[4]=n>=1?e.bucketBlockSize:0,o[10]=n>=1?se.BucketStorageSizeBytes:0,u[6]=n>=1?e.compressionScaleRange:0,u[7]=e.storageSizeBytes,u[8]=n>=1?e.fullBucketCount:0,u[9]=n>=1?e.partiallyFilledBucketCount:0,o[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,n,a=0){const r=new Uint32Array(n,a,se.SectionHeaderSizeBytes/4);r[0]=e}constructFromBuffer(e,n){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const a=se.parseHeader(this.bufferData);this.versionMajor=a.versionMajor,this.versionMinor=a.versionMinor,this.maxSectionCount=a.maxSectionCount,this.sectionCount=n?a.maxSectionCount:0,this.maxSplatCount=a.maxSplatCount,this.splatCount=n?a.maxSplatCount:0,this.compressionLevel=a.compressionLevel,this.sceneCenter=new V().copy(a.sceneCenter),this.minSphericalHarmonicsCoeff=a.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=a.maxSphericalHarmonicsCoeff,this.sections=se.parseSectionHeaders(a,this.bufferData,se.HeaderSizeBytes,n),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,n){const a=se.CompressionLevels[e].BytesPerCenter,r=se.CompressionLevels[e].BytesPerScale,o=se.CompressionLevels[e].BytesPerRotation,u=se.CompressionLevels[e].BytesPerColor,f=So(n),d=se.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*f,h=a+r+o+u+d;return{bytesPerCenter:a,bytesPerScale:r,bytesPerRotation:o,bytesPerColor:u,sphericalHarmonicsComponentsPerSplat:f,sphericalHarmonicsBytesPerSplat:d,bytesPerSplat:h}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const n=this.sections[e];n.bucketArray=new Float32Array(this.bufferData,n.bucketsBase,n.bucketCount*se.BucketStorageSizeFloats),n.partiallyFilledBucketCount>0&&(n.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,n.base,n.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let n=0;n<this.maxSectionCount;n++){const a=this.sections[n];for(let r=0;r<a.maxSplatCount;r++){const o=e+r;this.globalSplatIndexToLocalSplatIndexMap[o]=r,this.globalSplatIndexToSectionMap[o]=n}e+=a.maxSplatCount}}updateLoadedCounts(e,n){se.writeHeaderCountsToBuffer(e,n,this.bufferData),this.sectionCount=e,this.splatCount=n}updateSectionLoadedCounts(e,n){const a=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*e;se.writeSectionHeaderSplatCountToBuffer(n,this.bufferData,a),this.sections[e].splatCount=n}static writeSplatDataToSectionBuffer=(function(){const e=new ArrayBuffer(12),n=new ArrayBuffer(12),a=new ArrayBuffer(16),r=new ArrayBuffer(4),o=new ArrayBuffer(256),u=new nn,f=new V,d=new V,{X:h,Y:m,Z:g,SCALE0:_,SCALE1:v,SCALE2:y,ROTATION0:E,ROTATION1:x,ROTATION2:A,ROTATION3:T,FDC0:w,FDC1:D,FDC2:R,OPACITY:B,FRC0:b,FRC9:O}=Ne.OFFSET,C=(U,N,k)=>{const X=k*2+1;return U=Math.round(U*N)+k,un(U,0,X)};return function(U,N,k,X,W,Q,P,H,Z=-Ds,re=Ds){const he=So(W),z=se.CompressionLevels[X].BytesPerCenter,ie=se.CompressionLevels[X].BytesPerScale,pe=se.CompressionLevels[X].BytesPerRotation,Me=se.CompressionLevels[X].BytesPerColor,we=k,$=we+z,ce=$+ie,be=ce+pe,Fe=be+Me;if(U[E]!==void 0?(u.set(U[E],U[x],U[A],U[T]),u.normalize()):u.set(1,0,0,0),U[_]!==void 0?f.set(U[_]||0,U[v]||0,U[y]||0):f.set(0,0,0),X===0){const at=new Float32Array(N,we,se.CenterComponentCount),St=new Float32Array(N,ce,se.RotationComponentCount),Je=new Float32Array(N,$,se.ScaleComponentCount);if(St.set([u.x,u.y,u.z,u.w]),Je.set([f.x,f.y,f.z]),at.set([U[h],U[m],U[g]]),W>0){const tt=new Float32Array(N,Fe,he);if(W>=1){for(let et=0;et<9;et++)tt[et]=U[b+et]||0;if(W>=2)for(let et=0;et<15;et++)tt[et+9]=U[O+et]||0}}}else{const at=new Uint16Array(e,0,se.CenterComponentCount),St=new Uint16Array(a,0,se.RotationComponentCount),Je=new Uint16Array(n,0,se.ScaleComponentCount);if(St.set([wn(u.x),wn(u.y),wn(u.z),wn(u.w)]),Je.set([wn(f.x),wn(f.y),wn(f.z)]),d.set(U[h],U[m],U[g]).sub(Q),d.x=C(d.x,P,H),d.y=C(d.y,P,H),d.z=C(d.z,P,H),at.set([d.x,d.y,d.z]),W>0){const tt=X===1?Uint16Array:Uint8Array,et=X===1?2:1,it=new tt(o,0,he);if(W>=1){for(let q=0;q<9;q++){const xt=U[b+q]||0;it[q]=X===1?wn(xt):Bl(xt,Z,re)}const Rt=9*et;if(uo(it.buffer,0,N,Fe,Rt),W>=2){for(let q=0;q<15;q++){const xt=U[O+q]||0;it[q+9]=X===1?wn(xt):Bl(xt,Z,re)}uo(it.buffer,Rt,N,Fe+Rt,15*et)}}}uo(at.buffer,0,N,we,6),uo(Je.buffer,0,N,$,6),uo(St.buffer,0,N,ce,8)}const Ue=new Uint8ClampedArray(r,0,4);Ue.set([U[w]||0,U[D]||0,U[R]||0]),Ue[3]=U[B]||0,uo(Ue.buffer,0,N,be,4)}})();static generateFromUncompressedSplatArrays(e,n,a,r,o,u,f=[]){let d=0;for(let R=0;R<e.length;R++){const B=e[R];d=Math.max(B.sphericalHarmonicsDegree,d)}let h,m;for(let R=0;R<e.length;R++){const B=e[R];for(let b=0;b<B.splats.length;b++){const O=B.splats[b];for(let C=Ne.OFFSET.FRC0;C<Ne.OFFSET.FRC23&&C<O.length;C++)(!h||O[C]<h)&&(h=O[C]),(!m||O[C]>m)&&(m=O[C])}}h=h||-Ds,m=m||Ds;const{bytesPerSplat:g}=se.calculateComponentStorage(a,d),_=se.CompressionLevels[a].ScaleRange,v=[],y=[];let E=0;for(let R=0;R<e.length;R++){const B=e[R],b=new Ne(d);for(let we=0;we<B.splatCount;we++){const $=B.splats[we];($[Ne.OFFSET.OPACITY]||0)>=n&&b.addSplat($)}const O=f[R]||{},C=(O.blockSizeFactor||1)*(o||se.BucketBlockSize),U=Math.ceil((O.bucketSizeFactor||1)*(u||se.BucketSize)),N=se.computeBucketsForUncompressedSplatArray(b,C,U),k=N.fullBuckets.length,X=N.partiallyFullBuckets.map(we=>we.splats.length),W=X.length,Q=[...N.fullBuckets,...N.partiallyFullBuckets],P=b.splats.length*g,H=W*4,Z=a>=1?Q.length*se.BucketStorageSizeBytes+H:0,re=P+Z,he=new ArrayBuffer(re),z=_/(C*.5),ie=new V;let pe=0;for(let we=0;we<Q.length;we++){const $=Q[we];ie.fromArray($.center);for(let ce=0;ce<$.splats.length;ce++){let be=$.splats[ce];const Fe=b.splats[be],Ue=Z+pe*g;se.writeSplatDataToSectionBuffer(Fe,he,Ue,a,d,ie,z,_,h,m),pe++}}if(E+=pe,a>=1){const we=new Uint32Array(he,0,X.length*4);for(let ce=0;ce<X.length;ce++)we[ce]=X[ce];const $=new Float32Array(he,H,Q.length*se.BucketStorageSizeFloats);for(let ce=0;ce<Q.length;ce++){const be=Q[ce],Fe=ce*3;$[Fe]=be.center[0],$[Fe+1]=be.center[1],$[Fe+2]=be.center[2]}}v.push(he);const Me=new ArrayBuffer(se.SectionHeaderSizeBytes);se.writeSectionHeaderToBuffer({maxSplatCount:pe,splatCount:pe,bucketSize:U,bucketCount:Q.length,bucketBlockSize:C,compressionScaleRange:_,storageSizeBytes:re,fullBucketCount:k,partiallyFilledBucketCount:W,sphericalHarmonicsDegree:d},a,Me,0),y.push(Me)}let x=0;for(let R of v)x+=R.byteLength;const A=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*v.length+x,T=new ArrayBuffer(A);se.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:v.length,sectionCount:v.length,maxSplatCount:E,splatCount:E,compressionLevel:a,sceneCenter:r,minSphericalHarmonicsCoeff:h,maxSphericalHarmonicsCoeff:m},T);let w=se.HeaderSizeBytes;for(let R of y)new Uint8Array(T,w,se.SectionHeaderSizeBytes).set(new Uint8Array(R)),w+=se.SectionHeaderSizeBytes;for(let R of v)new Uint8Array(T,w,R.byteLength).set(new Uint8Array(R)),w+=R.byteLength;return new se(T)}static computeBucketsForUncompressedSplatArray(e,n,a){let r=e.splatCount;const o=n/2,u=new V,f=new V;for(let E=0;E<r;E++){const x=e.splats[E],A=[x[Ne.OFFSET.X],x[Ne.OFFSET.Y],x[Ne.OFFSET.Z]];(E===0||A[0]<u.x)&&(u.x=A[0]),(E===0||A[0]>f.x)&&(f.x=A[0]),(E===0||A[1]<u.y)&&(u.y=A[1]),(E===0||A[1]>f.y)&&(f.y=A[1]),(E===0||A[2]<u.z)&&(u.z=A[2]),(E===0||A[2]>f.z)&&(f.z=A[2])}const d=new V().copy(f).sub(u),h=Math.ceil(d.y/n),m=Math.ceil(d.z/n),g=new V,_=[],v={};for(let E=0;E<r;E++){const x=e.splats[E],A=[x[Ne.OFFSET.X],x[Ne.OFFSET.Y],x[Ne.OFFSET.Z]],T=Math.floor((A[0]-u.x)/n),w=Math.floor((A[1]-u.y)/n),D=Math.floor((A[2]-u.z)/n);g.x=T*n+u.x+o,g.y=w*n+u.y+o,g.z=D*n+u.z+o;const R=T*(h*m)+w*m+D;let B=v[R];B||(v[R]=B={splats:[],center:g.toArray()}),B.splats.push(E),B.splats.length>=a&&(_.push(B),v[R]=null)}const y=[];for(let E in v)if(v.hasOwnProperty(E)){const x=v[E];x&&y.push(x)}return{fullBuckets:_,partiallyFullBuckets:y}}static preallocateUncompressed(e,n){const a=se.CompressionLevels[0].SphericalHarmonicsDegrees[n],r=se.HeaderSizeBytes+se.SectionHeaderSizeBytes,o=r+a.BytesPerSplat*e,u=new ArrayBuffer(o);return se.writeHeaderToBuffer({versionMajor:se.CurrentMajorVersion,versionMinor:se.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new V},u),se.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:n},0,u,se.HeaderSizeBytes),{splatBuffer:new se(u,!0),splatBufferDataOffsetBytes:r}}}const lv=new Uint8Array([112,108,121,10]),cv=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Xh="end_header",Wh=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),ma=(l,e)=>{const n=(1<<e)-1;return(l&n)/n},uv=(l,e)=>{l.x=ma(e>>>21,11),l.y=ma(e>>>11,10),l.z=ma(e,11)},TR=(l,e)=>{l.x=ma(e>>>24,8),l.y=ma(e>>>16,8),l.z=ma(e>>>8,8),l.w=ma(e,8)},CR=(l,e)=>{const n=1/(Math.sqrt(2)*.5),a=(ma(e>>>20,10)-.5)*n,r=(ma(e>>>10,10)-.5)*n,o=(ma(e,10)-.5)*n,u=Math.sqrt(1-(a*a+r*r+o*o));switch(e>>>30){case 0:l.set(u,a,r,o);break;case 1:l.set(a,u,r,o);break;case 2:l.set(a,r,u,o);break;case 3:l.set(a,r,o,u);break}},ka=(l,e,n)=>l*(1-n)+e*n,dn=(l,e)=>l.properties.find(n=>n.name===e&&n.storage)?.storage;class Ft{static decodeHeaderText(e){let n,a,r,o;const u=e.split(`
`).filter(g=>!g.startsWith("comment "));let f=0,d=!1;for(let g=1;g<u.length;++g){const _=u[g].split(" ");switch(_[0]){case"format":if(_[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":n={name:_[1],count:parseInt(_[2],10),properties:[],storageSizeBytes:0},n.name==="chunk"?a=n:n.name==="vertex"?r=n:n.name==="sh"&&(o=n);break;case"property":{if(!Wh.has(_[1]))throw new Error(`Unrecognized property data type '${_[1]}' in ply header`);const v=Wh.get(_[1]),y=v.BYTES_PER_ELEMENT*n.count;n.name==="vertex"&&(f+=v.BYTES_PER_ELEMENT),n.properties.push({type:_[1],name:_[2],storage:null,byteSize:v.BYTES_PER_ELEMENT,storageSizeByes:y}),n.storageSizeBytes+=y;break}case Xh:d=!0;break;default:throw new Error(`Unrecognized header value '${_[0]}' in ply header`)}if(d)break}let h=0,m=0;return o&&(m=o.properties.length,o.properties.length>=45?h=3:o.properties.length>=24?h=2:o.properties.length>=9&&(h=1)),{chunkElement:a,vertexElement:r,shElement:o,bytesPerSplat:f,headerSizeBytes:e.indexOf(Xh)+Xh.length+1,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:m}}static decodeHeader(e){const n=(v,y)=>{const E=v.length-y.length;let x,A;for(x=0;x<=E;++x){for(A=0;A<y.length&&v[x+A]===y[A];++A);if(A===y.length)return x}return-1},a=(v,y)=>{if(v.length<y.length)return!1;for(let E=0;E<y.length;++E)if(v[E]!==y[E])return!1;return!0};let r=new Uint8Array(e),o;if(r.length>=lv.length&&!a(r,lv))throw new Error("Invalid PLY header");if(o=n(r,cv),o===-1)throw new Error("End of PLY header not found");const u=new TextDecoder("ascii").decode(r.slice(0,o)),{chunkElement:f,vertexElement:d,shElement:h,sphericalHarmonicsDegree:m,sphericalHarmonicsPerSplat:g,bytesPerSplat:_}=Ft.decodeHeaderText(u);return{headerSizeBytes:o+cv.length,bytesPerSplat:_,chunkElement:f,vertexElement:d,shElement:h,sphericalHarmonicsDegree:m,sphericalHarmonicsPerSplat:g}}static readElementData(e,n,a,r,o,u=null){let f=n instanceof DataView?n:new DataView(n);r=r||0,o=o||e.count-1;for(let d=r;d<=o;++d)for(let h=0;h<e.properties.length;++h){const m=e.properties[h],g=Wh.get(m.type),_=g.BYTES_PER_ELEMENT*e.count;if((!m.storage||m.storage.byteLength<_)&&(!u||u(m.name))&&(m.storage=new g(e.count)),m.storage)switch(m.type){case"char":m.storage[d]=f.getInt8(a);break;case"uchar":m.storage[d]=f.getUint8(a);break;case"short":m.storage[d]=f.getInt16(a,!0);break;case"ushort":m.storage[d]=f.getUint16(a,!0);break;case"int":m.storage[d]=f.getInt32(a,!0);break;case"uint":m.storage[d]=f.getUint32(a,!0);break;case"float":m.storage[d]=f.getFloat32(a,!0);break;case"double":m.storage[d]=f.getFloat64(a,!0);break}a+=m.byteSize}return a}static readPly(e,n=null){const a=Ft.decodeHeader(e);let r=Ft.readElementData(a.chunkElement,e,a.headerSizeBytes,null,null,n);return r=Ft.readElementData(a.vertexElement,e,r,null,null,n),Ft.readElementData(a.shElement,e,r,null,null,n),{chunkElement:a.chunkElement,vertexElement:a.vertexElement,shElement:a.shElement,sphericalHarmonicsDegree:a.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:a.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,n,a){const r={};if(n){const o=dn(e,"min_r"),u=dn(e,"min_g"),f=dn(e,"min_b"),d=dn(e,"max_r"),h=dn(e,"max_g"),m=dn(e,"max_b"),g=dn(e,"min_x"),_=dn(e,"min_y"),v=dn(e,"min_z"),y=dn(e,"max_x"),E=dn(e,"max_y"),x=dn(e,"max_z"),A=dn(e,"min_scale_x"),T=dn(e,"min_scale_y"),w=dn(e,"min_scale_z"),D=dn(e,"max_scale_x"),R=dn(e,"max_scale_y"),B=dn(e,"max_scale_z"),b=dn(n,"packed_position"),O=dn(n,"packed_rotation"),C=dn(n,"packed_scale"),U=dn(n,"packed_color");r.colorExtremes={minR:o,maxR:d,minG:u,maxG:h,minB:f,maxB:m},r.positionExtremes={minX:g,maxX:y,minY:_,maxY:E,minZ:v,maxZ:x},r.scaleExtremes={minScaleX:A,maxScaleX:D,minScaleY:T,maxScaleY:R,minScaleZ:w,maxScaleZ:B},r.position=b,r.rotation=O,r.scale=C,r.color=U}if(a){const o={};for(let u=0;u<45;u++){const f=`f_rest_${u}`,d=dn(a,f);if(d)o[f]=d;else break}r.sh=o}return r}static decompressBaseSplat=(function(){const e=new V,n=new nn,a=new V,r=new fn,o=Ne.OFFSET;return function(u,f,d,h,m,g,_,v,y,E){E=E||Ne.createSplat();const x=Math.floor((f+u)/256);return uv(e,d[u]),CR(n,_[u]),uv(a,m[u]),TR(r,y[u]),E[o.X]=ka(h.minX[x],h.maxX[x],e.x),E[o.Y]=ka(h.minY[x],h.maxY[x],e.y),E[o.Z]=ka(h.minZ[x],h.maxZ[x],e.z),E[o.ROTATION0]=n.x,E[o.ROTATION1]=n.y,E[o.ROTATION2]=n.z,E[o.ROTATION3]=n.w,E[o.SCALE0]=Math.exp(ka(g.minScaleX[x],g.maxScaleX[x],a.x)),E[o.SCALE1]=Math.exp(ka(g.minScaleY[x],g.maxScaleY[x],a.y)),E[o.SCALE2]=Math.exp(ka(g.minScaleZ[x],g.maxScaleZ[x],a.z)),v.minR&&v.maxR?E[o.FDC0]=un(Math.round(ka(v.minR[x],v.maxR[x],r.x)*255),0,255):E[o.FDC0]=un(Math.floor(r.x*255),0,255),v.minG&&v.maxG?E[o.FDC1]=un(Math.round(ka(v.minG[x],v.maxG[x],r.y)*255),0,255):E[o.FDC1]=un(Math.floor(r.y*255),0,255),v.minB&&v.maxB?E[o.FDC2]=un(Math.round(ka(v.minB[x],v.maxB[x],r.z)*255),0,255):E[o.FDC2]=un(Math.floor(r.z*255),0,255),E[o.OPACITY]=un(Math.floor(r.w*255),0,255),E}})();static decompressSphericalHarmonics=(function(){const e=[0,3,8,15],n=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(a,r,o,u,f){f=f||Ne.createSplat();let d=e[o],h=e[u];for(let m=0;m<3;++m)for(let g=0;g<15;++g){const _=n[m*15+g];g<d&&g<h&&(f[Ne.OFFSET.FRC0+_]=r[m*h+g][a]*(8/255)-4)}return f}})();static parseToUncompressedSplatBufferSection(e,n,a,r,o,u,f,d,h=null){Ft.readElementData(n,u,0,a,r,h);const m=se.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:g,scaleExtremes:_,colorExtremes:v,position:y,rotation:E,scale:x,color:A}=Ft.getElementStorageArrays(e,n),T=Ne.createSplat();for(let w=a;w<=r;++w){Ft.decompressBaseSplat(w,o,y,g,x,_,E,v,A,T);const D=w*m+d;se.writeSplatDataToSectionBuffer(T,f,D,0,0)}}static parseToUncompressedSplatArraySection(e,n,a,r,o,u,f,d=null){Ft.readElementData(n,u,0,a,r,d);const{positionExtremes:h,scaleExtremes:m,colorExtremes:g,position:_,rotation:v,scale:y,color:E}=Ft.getElementStorageArrays(e,n);for(let x=a;x<=r;++x){const A=Ne.createSplat();Ft.decompressBaseSplat(x,o,_,h,y,m,v,g,E,A),f.addSplat(A)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,n,a,r,o,u,f,d,h,m=null){Ft.readElementData(n,o,u,a,r,m);const{sh:g}=Ft.getElementStorageArrays(e,void 0,n),_=Object.values(g);for(let v=a;v<=r;++v)Ft.decompressSphericalHarmonics(v,_,f,d,h.splats[v])}static parseToUncompressedSplatArray(e,n){const{chunkElement:a,vertexElement:r,shElement:o,sphericalHarmonicsDegree:u}=Ft.readPly(e);n=Math.min(n,u);const f=new Ne(n),{positionExtremes:d,scaleExtremes:h,colorExtremes:m,position:g,rotation:_,scale:v,color:y}=Ft.getElementStorageArrays(a,r);let E;if(n>0){const{sh:x}=Ft.getElementStorageArrays(a,void 0,o);E=Object.values(x)}for(let x=0;x<r.count;++x){f.addDefaultSplat();const A=f.getSplat(f.splatCount-1);Ft.decompressBaseSplat(x,0,g,d,v,h,_,m,y,A),n>0&&Ft.decompressSphericalHarmonics(x,E,n,u,A)}return f}static parseToUncompressedSplatBuffer(e,n){const{chunkElement:a,vertexElement:r,shElement:o,sphericalHarmonicsDegree:u}=Ft.readPly(e);n=Math.min(n,u);const{splatBuffer:f,splatBufferDataOffsetBytes:d}=se.preallocateUncompressed(r.count,n),{positionExtremes:h,scaleExtremes:m,colorExtremes:g,position:_,rotation:v,scale:y,color:E}=Ft.getElementStorageArrays(a,r);let x;if(n>0){const{sh:w}=Ft.getElementStorageArrays(a,void 0,o);x=Object.values(w)}const A=se.CompressionLevels[0].SphericalHarmonicsDegrees[n].BytesPerSplat,T=Ne.createSplat(n);for(let w=0;w<r.count;++w){Ft.decompressBaseSplat(w,0,_,h,y,m,v,g,E,T),n>0&&Ft.decompressSphericalHarmonics(w,x,n,u,T);const D=w*A+d;se.writeSplatDataToSectionBuffer(T,f.bufferData,D,0,n)}return f}}const ti={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[MA,um,fm,dm,hm,pm,mm]=[0,1,2,3,4,5,6],fv={double:MA,int:um,uint:fm,float:dm,short:hm,ushort:pm,uchar:mm},bR={[MA]:8,[um]:4,[fm]:4,[dm]:4,[hm]:2,[pm]:2,[mm]:1};class Ht{static HeaderEndToken="end_header";static decodeSectionHeader(e,n,a=0){const r=[];let o=!1,u=-1,f=0,d=!1,h=null;const m=[],g=[],_=[],v={};for(let A=a;A<e.length;A++){const T=e[A].trim();if(T.startsWith("element"))if(o){u--;break}else{o=!0,a=A,u=A;const w=T.split(" ");let D=0;for(let R of w){const B=R.trim();B.length>0&&(D++,D===2?h=B:D===3&&(f=parseInt(B)))}}else if(T.startsWith("property")){const w=T.match(/(\w+)\s+(\w+)\s+(\w+)/);if(w){const D=w[2],R=w[3];_.push(R);const B=n[R];v[R]=D;const b=fv[D];B!==void 0&&(m.push(B),g[B]=b)}}if(T===Ht.HeaderEndToken){d=!0;break}o&&(r.push(T),u++)}const y=[];let E=0;for(let A of _){const T=v[A];if(v.hasOwnProperty(A)){const w=n[A];w!==void 0&&(y[w]=E)}E+=bR[fv[T]]}const x=Ht.decodeSphericalHarmonicsFromSectionHeader(_,n);return{headerLines:r,headerStartLine:a,headerEndLine:u,fieldTypes:g,fieldIds:m,fieldOffsets:y,bytesPerVertex:E,vertexCount:f,dataSizeBytes:E*f,endOfHeader:d,sectionName:h,sphericalHarmonicsDegree:x.degree,sphericalHarmonicsCoefficientsPerChannel:x.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:x.degree1Fields,sphericalHarmonicsDegree2Fields:x.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,n){let a=0,r=0;for(let d of e)d.startsWith("f_rest")&&a++;r=a/3;let o=0;r>=3&&(o=1),r>=8&&(o=2);let u=[],f=[];for(let d=0;d<3;d++){if(o>=1)for(let h=0;h<3;h++)u.push(n["f_rest_"+(h+r*d)]);if(o>=2)for(let h=0;h<5;h++)f.push(n["f_rest_"+(h+r*d+3)])}return{degree:o,coefficientsPerChannel:r,degree1Fields:u,degree2Fields:f}}static getHeaderSectionNames(e){const n=[];for(let a of e)if(a.startsWith("element")){const r=a.split(" ");let o=0;for(let u of r){const f=u.trim();f.length>0&&(o++,o===2&&n.push(f))}}return n}static checkTextForEndHeader(e){return!!e.includes(Ht.HeaderEndToken)}static checkBufferForEndHeader(e,n,a,r){const o=new Uint8Array(e,Math.max(0,n-a),a),u=r.decode(o);return Ht.checkTextForEndHeader(u)}static extractHeaderFromBufferToText(e){const n=new TextDecoder;let a=0,r="";const o=100;for(;;){if(a+o>=e.byteLength)throw new Error("End of file reached while searching for end of header");const u=new Uint8Array(e,a,o);if(r+=n.decode(u),a+=o,Ht.checkBufferForEndHeader(e,a,o*2,n))break}return r}static readHeaderFromBuffer(e){const n=new TextDecoder;let a=0,r="";const o=100;for(;;){if(a+o>=e.byteLength)throw new Error("End of file reached while searching for end of header");const u=new Uint8Array(e,a,o);if(r+=n.decode(u),a+=o,Ht.checkBufferForEndHeader(e,a,o*2,n))break}return r}static convertHeaderTextToLines(e){const n=e.split(`
`),a=[];for(let r=0;r<n.length;r++){const o=n[r].trim();if(a.push(o),o===Ht.HeaderEndToken)break}return a}static determineHeaderFormatFromHeaderText(e){const n=Ht.convertHeaderTextToLines(e);let a=ti.INRIAV1;for(let r=0;r<n.length;r++){const o=n[r].trim();if(o.startsWith("element chunk")||o.match(/[A-Za-z]*packed_[A-Za-z]*/))a=ti.PlayCanvasCompressed;else if(o.startsWith("element codebook_centers"))a=ti.INRIAV2;else if(o===Ht.HeaderEndToken)break}return a}static determineHeaderFormatFromPlyBuffer(e){const n=Ht.extractHeaderFromBufferToText(e);return Ht.determineHeaderFormatFromHeaderText(n)}static readVertex(e,n,a,r,o,u,f=!0){const d=a*n.bytesPerVertex+r,h=n.fieldOffsets,m=n.fieldTypes;for(let g of o){const _=m[g];_===dm?u[g]=e.getFloat32(d+h[g],!0):_===hm?u[g]=e.getInt16(d+h[g],!0):_===pm?u[g]=e.getUint16(d+h[g],!0):_===um?u[g]=e.getInt32(d+h[g],!0):_===fm?u[g]=e.getUint32(d+h[g],!0):_===mm&&(f?u[g]=e.getUint8(d+h[g])/255:u[g]=e.getUint8(d+h[g]))}}}const TA=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],RR=TA.map((l,e)=>e),[dv,wR,DR,IR,UR,BR,LR,FR,PR,OR,hv,NR,zR,pv,mv,HR,GR,VR]=RR;class qn{static decodeHeaderLines(e){let n=0;e.forEach(m=>{m.includes("f_rest_")&&n++});let a=0;n>=45?a=45:n>=24?a=24:n>=9&&(a=9);let o=Array.from(Array(Math.max(a-1,0))).map((m,g)=>`f_rest_${g+1}`);const u=[...TA,...o],f=u.map((m,g)=>g),d=f.reduce((m,g)=>(m[u[g]]=g,m),{}),h=Ht.decodeSectionHeader(e,d,0);return h.splatCount=h.vertexCount,h.bytesPerSplat=h.bytesPerVertex,h.fieldsToReadIndexes=f,h}static decodeHeaderText(e){const n=Ht.convertHeaderTextToLines(e),a=qn.decodeHeaderLines(n);return a.headerText=e,a.headerSizeBytes=e.indexOf(Ht.HeaderEndToken)+Ht.HeaderEndToken.length+1,a}static decodeHeaderFromBuffer(e){const n=Ht.readHeaderFromBuffer(e);return qn.decodeHeaderText(n)}static findSplatData(e,n){return new DataView(e,n.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,n,a,r,o,u,f,d=0){d=Math.min(d,e.sphericalHarmonicsDegree);const h=se.CompressionLevels[0].SphericalHarmonicsDegrees[d].BytesPerSplat;for(let m=n;m<=a;m++){const g=qn.parseToUncompressedSplat(r,m,e,o,d),_=m*h+f;se.writeSplatDataToSectionBuffer(g,u,_,0,d)}}static parseToUncompressedSplatArraySection(e,n,a,r,o,u,f=0){f=Math.min(f,e.sphericalHarmonicsDegree);for(let d=n;d<=a;d++){const h=qn.parseToUncompressedSplat(r,d,e,o,f);u.addSplat(h)}}static decodeSectionSplatData(e,n,a,r,o=!0){if(r=Math.min(r,a.sphericalHarmonicsDegree),o){const u=new Ne(r);for(let f=0;f<n;f++){const d=qn.parseToUncompressedSplat(e,f,a,0,r);u.addSplat(d)}return u}else{const{splatBuffer:u,splatBufferDataOffsetBytes:f}=se.preallocateUncompressed(n,r);return qn.parseToUncompressedSplatBufferSection(a,0,n-1,e,0,u.bufferData,f,r),u}}static parseToUncompressedSplat=(function(){let e=[];const n=new nn,a=Ne.OFFSET.X,r=Ne.OFFSET.Y,o=Ne.OFFSET.Z,u=Ne.OFFSET.SCALE0,f=Ne.OFFSET.SCALE1,d=Ne.OFFSET.SCALE2,h=Ne.OFFSET.ROTATION0,m=Ne.OFFSET.ROTATION1,g=Ne.OFFSET.ROTATION2,_=Ne.OFFSET.ROTATION3,v=Ne.OFFSET.FDC0,y=Ne.OFFSET.FDC1,E=Ne.OFFSET.FDC2,x=Ne.OFFSET.OPACITY,A=[];for(let T=0;T<45;T++)A[T]=Ne.OFFSET.FRC0+T;return function(T,w,D,R=0,B=0){B=Math.min(B,D.sphericalHarmonicsDegree),qn.readSplat(T,D,w,R,e);const b=Ne.createSplat(B);if(e[dv]!==void 0?(b[u]=Math.exp(e[dv]),b[f]=Math.exp(e[wR]),b[d]=Math.exp(e[DR])):(b[u]=.01,b[f]=.01,b[d]=.01),e[hv]!==void 0){const O=.28209479177387814;b[v]=(.5+O*e[hv])*255,b[y]=(.5+O*e[NR])*255,b[E]=(.5+O*e[zR])*255}else e[mv]!==void 0?(b[v]=e[mv]*255,b[y]=e[HR]*255,b[E]=e[GR]*255):(b[v]=0,b[y]=0,b[E]=0);if(e[pv]!==void 0&&(b[x]=1/(1+Math.exp(-e[pv]))*255),b[v]=un(Math.floor(b[v]),0,255),b[y]=un(Math.floor(b[y]),0,255),b[E]=un(Math.floor(b[E]),0,255),b[x]=un(Math.floor(b[x]),0,255),B>=1&&e[VR]!==void 0){for(let O=0;O<9;O++)b[A[O]]=e[D.sphericalHarmonicsDegree1Fields[O]];if(B>=2)for(let O=0;O<15;O++)b[A[9+O]]=e[D.sphericalHarmonicsDegree2Fields[O]]}return n.set(e[IR],e[UR],e[BR],e[LR]),n.normalize(),b[h]=n.x,b[m]=n.y,b[g]=n.z,b[_]=n.w,b[a]=e[FR],b[r]=e[PR],b[o]=e[OR],b}})();static readSplat(e,n,a,r,o){return Ht.readVertex(e,n,a,r,n.fieldsToReadIndexes,o,!0)}static parseToUncompressedSplatArray(e,n=0){const{header:a,splatCount:r,splatData:o}=gv(e);return qn.decodeSectionSplatData(o,r,a,n,!0)}static parseToUncompressedSplatBuffer(e,n=0){const{header:a,splatCount:r,splatData:o}=gv(e);return qn.decodeSectionSplatData(o,r,a,n,!1)}}function gv(l){const e=qn.decodeHeaderFromBuffer(l),n=e.splatCount,a=qn.findSplatData(l,e);return{header:e,splatCount:n,splatData:a}}const CA=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Cu=CA.map((l,e)=>e),[bu,kR,XR,Sv,Ru,WR,qh]=[0,1,4,16,17,18,19],bA=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Xp=bA.map((l,e)=>e),[_v,qR,YR,QR,jR,KR,ZR,JR,$R,ew,Wp,RA,wA,vv]=Xp,Av=Wp,tw=RA,nw=wA,wu=l=>{const e=(31744&l)>>10,n=1023&l;return(l>>15?-1:1)*(e?e===31?n?NaN:1/0:Math.pow(2,e-15)*(1+n/1024):n/1024*6103515625e-14)};class bi{static decodeSectionHeadersFromHeaderLines(e){const n=Xp.reduce((m,g)=>(m[bA[g]]=g,m),{}),a=Cu.reduce((m,g)=>(m[CA[g]]=g,m),{}),r=Ht.getHeaderSectionNames(e);let o;for(let m=0;m<r.length;m++)r[m]==="codebook_centers"&&(o=m);let u=0,f=!1;const d=[];let h=0;for(;!f;){let m;h===o?m=Ht.decodeSectionHeader(e,a,u):m=Ht.decodeSectionHeader(e,n,u),f=m.endOfHeader,u=m.headerEndLine+1,f||(m.splatCount=m.vertexCount,m.bytesPerSplat=m.bytesPerVertex),d.push(m),h++}return d}static decodeSectionHeadersFromHeaderText(e){const n=Ht.convertHeaderTextToLines(e);return bi.decodeSectionHeadersFromHeaderLines(n)}static getSplatCountFromSectionHeaders(e){let n=0;for(let a of e)a.sectionName!=="codebook_centers"&&(n+=a.vertexCount);return n}static decodeHeaderFromHeaderText(e){const n=e.indexOf(Ht.HeaderEndToken)+Ht.HeaderEndToken.length+1,a=bi.decodeSectionHeadersFromHeaderText(e),r=bi.getSplatCountFromSectionHeaders(a);return{headerSizeBytes:n,sectionHeaders:a,splatCount:r}}static decodeHeaderFromBuffer(e){const n=Ht.readHeaderFromBuffer(e);return bi.decodeHeaderFromHeaderText(n)}static findVertexData(e,n,a){let r=n.headerSizeBytes;for(let o=0;o<a&&o<n.sectionHeaders.length;o++){const u=n.sectionHeaders[o];r+=u.dataSizeBytes}return new DataView(e,r,n.sectionHeaders[a].dataSizeBytes)}static decodeCodeBook(e,n){const a=[],r=[];for(let o=0;o<n.vertexCount;o++){Ht.readVertex(e,n,o,0,Cu,a);for(let u of Cu){const f=Cu[u];let d=r[f];d||(r[f]=d=[]),d.push(a[u])}}for(let o=0;o<r.length;o++){const u=r[o],f=.28209479177387814;for(let d=0;d<u.length;d++){const h=wu(u[d]);o===Sv?u[d]=Math.round(1/(1+Math.exp(-h))*255):o===bu?u[d]=Math.round((.5+f*h)*255):o===Ru?u[d]=Math.exp(h):u[d]=h}}return r}static decodeSectionSplatData(e,n,a,r,o){o=Math.min(o,a.sphericalHarmonicsDegree);const u=new Ne(o);for(let f=0;f<n;f++){const d=bi.parseToUncompressedSplat(e,f,a,r,0,o);u.addSplat(d)}return u}static parseToUncompressedSplat=(function(){let e=[];const n=new nn,a=Ne.OFFSET.X,r=Ne.OFFSET.Y,o=Ne.OFFSET.Z,u=Ne.OFFSET.SCALE0,f=Ne.OFFSET.SCALE1,d=Ne.OFFSET.SCALE2,h=Ne.OFFSET.ROTATION0,m=Ne.OFFSET.ROTATION1,g=Ne.OFFSET.ROTATION2,_=Ne.OFFSET.ROTATION3,v=Ne.OFFSET.FDC0,y=Ne.OFFSET.FDC1,E=Ne.OFFSET.FDC2,x=Ne.OFFSET.OPACITY,A=[];for(let T=0;T<45;T++)A[T]=Ne.OFFSET.FRC0+T;return function(T,w,D,R,B=0,b=0){b=Math.min(b,D.sphericalHarmonicsDegree),bi.readSplat(T,D,w,B,e);const O=Ne.createSplat(b);if(e[_v]!==void 0?(O[u]=R[Ru][e[_v]],O[f]=R[Ru][e[qR]],O[d]=R[Ru][e[YR]]):(O[u]=.01,O[f]=.01,O[d]=.01),e[Wp]!==void 0?(O[v]=R[bu][e[Wp]],O[y]=R[bu][e[RA]],O[E]=R[bu][e[wA]]):e[Av]!==void 0?(O[v]=e[Av]*255,O[y]=e[tw]*255,O[E]=e[nw]*255):(O[v]=0,O[y]=0,O[E]=0),e[vv]!==void 0&&(O[x]=R[Sv][e[vv]]),O[v]=un(Math.floor(O[v]),0,255),O[y]=un(Math.floor(O[y]),0,255),O[E]=un(Math.floor(O[E]),0,255),O[x]=un(Math.floor(O[x]),0,255),b>=1&&D.sphericalHarmonicsDegree>=1){for(let X=0;X<9;X++){const W=R[kR+X%3];O[A[X]]=W[e[D.sphericalHarmonicsDegree1Fields[X]]]}if(b>=2&&D.sphericalHarmonicsDegree>=2)for(let X=0;X<15;X++){const W=R[XR+X%5];O[A[9+X]]=W[e[D.sphericalHarmonicsDegree2Fields[X]]]}}const C=R[WR][e[QR]],U=R[qh][e[jR]],N=R[qh][e[KR]],k=R[qh][e[ZR]];return n.set(C,U,N,k),n.normalize(),O[h]=n.x,O[m]=n.y,O[g]=n.z,O[_]=n.w,O[a]=wu(e[JR]),O[r]=wu(e[$R]),O[o]=wu(e[ew]),O}})();static readSplat(e,n,a,r,o){return Ht.readVertex(e,n,a,r,Xp,o,!1)}static parseToUncompressedSplatArray(e,n=0){const a=[],r=bi.decodeHeaderFromBuffer(e,n);let o;for(let f=0;f<r.sectionHeaders.length;f++){const d=r.sectionHeaders[f];if(d.sectionName==="codebook_centers"){const h=bi.findVertexData(e,r,f);o=bi.decodeCodeBook(h,d)}}for(let f=0;f<r.sectionHeaders.length;f++){const d=r.sectionHeaders[f];if(d.sectionName!=="codebook_centers"){const h=d.vertexCount,m=bi.findVertexData(e,r,f),g=bi.decodeSectionSplatData(m,h,d,o,n);a.push(g)}}const u=new Ne(n);for(let f of a)for(let d of f.splats)u.addSplat(d);return u}}class xv{static parseToUncompressedSplatArray(e,n=0){const a=Ht.determineHeaderFormatFromPlyBuffer(e);if(a===ti.PlayCanvasCompressed)return Ft.parseToUncompressedSplatArray(e,n);if(a===ti.INRIAV1)return qn.parseToUncompressedSplatArray(e,n);if(a===ti.INRIAV2)return bi.parseToUncompressedSplatArray(e,n)}static parseToUncompressedSplatBuffer(e,n=0){const a=Ht.determineHeaderFormatFromPlyBuffer(e);if(a===ti.PlayCanvasCompressed)return Ft.parseToUncompressedSplatBuffer(e,n);if(a===ti.INRIAV1)return qn.parseToUncompressedSplatBuffer(e,n);if(a===ti.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class gm{constructor(e,n,a,r){this.sectionCount=e,this.sectionFilters=n,this.groupingParameters=a,this.partitionGenerator=r}partitionUncompressedSplatArray(e){let n,a,r;if(this.partitionGenerator){const u=this.partitionGenerator(e);n=u.groupingParameters,a=u.sectionCount,r=u.sectionFilters}else n=this.groupingParameters,a=this.sectionCount,r=this.sectionFilters;const o=[];for(let u=0;u<a;u++){const f=new Ne(e.sphericalHarmonicsDegree),d=r[u];for(let h=0;h<e.splatCount;h++)d(h)&&f.addSplat(e.splats[h]);o.push(f)}return{splatArrays:o,parameters:n}}static getStandardPartitioner(e=0,n=new V,a=se.BucketBlockSize,r=se.BucketSize){const o=u=>{const f=Ne.OFFSET.X,d=Ne.OFFSET.Y,h=Ne.OFFSET.Z;e<=0&&(e=u.splatCount);const m=new V,g=.5,_=A=>{A.x=Math.floor(A.x/g)*g,A.y=Math.floor(A.y/g)*g,A.z=Math.floor(A.z/g)*g};u.splats.forEach(A=>{m.set(A[f],A[d],A[h]).sub(n),_(m),A.centerDist=m.lengthSq()}),u.splats.sort((A,T)=>{let w=A.centerDist,D=T.centerDist;return w>D?1:-1});const v=[],y=[];e=Math.min(u.splatCount,e);const E=Math.ceil(u.splatCount/e);let x=0;for(let A=0;A<E;A++){let T=x;v.push(w=>w>=T&&w<T+e),y.push({blocksSize:a,bucketSize:r}),x+=e}return{sectionCount:v.length,sectionFilters:v,groupingParameters:y}};return new gm(void 0,void 0,void 0,o)}}class ql{constructor(e,n,a,r,o,u,f){this.splatPartitioner=e,this.alphaRemovalThreshold=n,this.compressionLevel=a,this.sectionSize=r,this.sceneCenter=o?new V().copy(o):void 0,this.blockSize=u,this.bucketSize=f}generateFromUncompressedSplatArray(e){const n=this.splatPartitioner.partitionUncompressedSplatArray(e);return se.generateFromUncompressedSplatArrays(n.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,n.parameters)}static getStandardGenerator(e=1,n=1,a=0,r=new V,o=se.BucketBlockSize,u=se.BucketSize){const f=gm.getStandardPartitioner(a,r,o,u);return new ql(f,e,n,a,r,o,u)}}const vn={Downloading:0,Processing:1,Done:2};class Wu extends Error{constructor(e){super(e)}}const rn={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function yv(l,e){let n=0;for(let r of l)n+=r.sizeBytes;(!e||e.byteLength<n)&&(e=new ArrayBuffer(n));let a=0;for(let r of l)new Uint8Array(e,a,r.sizeBytes).set(r.data),a+=r.sizeBytes;return e}function Ev(l,e,n,a,r,o,u,f){return e?ql.getStandardGenerator(n,a,r,o,u,f).generateFromUncompressedSplatArray(l):se.generateFromUncompressedSplatArrays([l],n,0,new V)}class Sm{static loadFromURL(e,n,a,r,o,u,f=!0,d=0,h,m,g,_,v){let y;!a&&!f?y=rn.DownloadBeforeProcessing:f?y=rn.ProgressiveToSplatArray:y=rn.ProgressiveToSplatBuffer;const E=Jt.ProgressiveLoadSectionSize,x=se.HeaderSizeBytes+se.SectionHeaderSizeBytes,A=1;let T,w,D,R,B,b=0,O=0,C=0,U=!1,N=!1,k=!1;const X=rm();let W=0,Q=0,P=0,H=0,Z="",re=null,he=[],z;const ie=new TextDecoder,pe=(Me,we,$)=>{const ce=Me>=100;if($&&(he.push({data:$,sizeBytes:$.byteLength,startBytes:P,endBytes:P+$.byteLength}),P+=$.byteLength),y===rn.DownloadBeforeProcessing)ce&&X.resolve(he);else{if(U){if(T===ti.PlayCanvasCompressed&&!N){const be=re.headerSizeBytes+re.chunkElement.storageSizeBytes;B=yv(he,B),B.byteLength>=be&&(Ft.readElementData(re.chunkElement,B,re.headerSizeBytes),W=be,Q=be,N=!0)}}else if(Z+=ie.decode($),Ht.checkTextForEndHeader(Z)){if(T=Ht.determineHeaderFormatFromHeaderText(Z),T===ti.INRIAV1)re=qn.decodeHeaderText(Z),d=Math.min(d,re.sphericalHarmonicsDegree),b=re.splatCount,N=!0,H=re.headerSizeBytes+re.bytesPerSplat*b;else if(T===ti.PlayCanvasCompressed){if(re=Ft.decodeHeaderText(Z),d=Math.min(d,re.sphericalHarmonicsDegree),y===rn.ProgressiveToSplatBuffer&&d>0)throw new Wu("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");b=re.vertexElement.count,H=re.headerSizeBytes+re.bytesPerSplat*b+re.chunkElement.storageSizeBytes}else{if(y===rn.ProgressiveToSplatBuffer)throw new Wu("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");y=rn.DownloadBeforeProcessing;return}if(y===rn.ProgressiveToSplatBuffer){const be=se.CompressionLevels[0].SphericalHarmonicsDegrees[d],Fe=x+be.BytesPerSplat*b;D=new ArrayBuffer(Fe),se.writeHeaderToBuffer({versionMajor:se.CurrentMajorVersion,versionMinor:se.CurrentMinorVersion,maxSectionCount:A,sectionCount:A,maxSplatCount:b,splatCount:0,compressionLevel:0,sceneCenter:new V},D)}else z=new Ne(d);W=re.headerSizeBytes,Q=re.headerSizeBytes,U=!0}if(U&&N&&he.length>0&&(w=yv(he,w),P-W>E||P>=H&&!k||ce)){const Fe=k?re.sphericalHarmonicsPerSplat:re.bytesPerSplat,at=(k?P:Math.min(H,P))-Q,St=Math.floor(at/Fe),Je=St*Fe,tt=P-Q-Je,et=Q-he[0].startBytes,it=new DataView(w,et,Je);if(k)T===ti.PlayCanvasCompressed&&y===rn.ProgressiveToSplatArray&&(Ft.parseSphericalHarmonicsToUncompressedSplatArraySection(re.chunkElement,re.shElement,C,C+St-1,it,0,d,re.sphericalHarmonicsDegree,z),C+=St);else{if(y===rn.ProgressiveToSplatBuffer){const Rt=se.CompressionLevels[0].SphericalHarmonicsDegrees[d],q=O*Rt.BytesPerSplat+x;T===ti.PlayCanvasCompressed?Ft.parseToUncompressedSplatBufferSection(re.chunkElement,re.vertexElement,0,St-1,O,it,D,q):qn.parseToUncompressedSplatBufferSection(re,0,St-1,it,0,D,q,d)}else T===ti.PlayCanvasCompressed?Ft.parseToUncompressedSplatArraySection(re.chunkElement,re.vertexElement,0,St-1,O,it,z):qn.parseToUncompressedSplatArraySection(re,0,St-1,it,0,z,d);O+=St,y===rn.ProgressiveToSplatBuffer&&(R||(se.writeSectionHeaderToBuffer({maxSplatCount:b,splatCount:O,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:d},0,D,se.HeaderSizeBytes),R=new se(D,!1)),R.updateLoadedCounts(1,O)),P>=H&&(k=!0)}if(tt===0)he=[];else{let Rt=[],q=0;for(let xt=he.length-1;xt>=0;xt--){const gt=he[xt];if(q+=gt.sizeBytes,Rt.unshift(gt),q>=tt)break}he=Rt}W+=E,Q+=Je}r&&R&&r(R,ce),ce&&(y===rn.ProgressiveToSplatBuffer?X.resolve(R):X.resolve(z))}n&&n(Me,we,vn.Downloading)};return n&&n(0,"0%",vn.Downloading),ef(e,pe,!1,h).then(()=>(n&&n(0,"0%",vn.Processing),X.promise.then(Me=>{if(n&&n(100,"100%",vn.Done),y===rn.DownloadBeforeProcessing){const we=he.map($=>$.data);return new Blob(we).arrayBuffer().then($=>Sm.loadFromFileData($,o,u,f,d,m,g,_,v))}else return y===rn.ProgressiveToSplatBuffer?Me:Di(()=>Ev(Me,f,o,u,m,g,_,v))})))}static loadFromFileData(e,n,a,r,o=0,u,f,d,h){return r?Di(()=>xv.parseToUncompressedSplatArray(e,o)).then(m=>Ev(m,r,n,a,u,f,d,h)):Di(()=>xv.parseToUncompressedSplatBuffer(e,o))}}const iw=l=>new ReadableStream({async start(e){e.enqueue(l),e.close()}});async function aw(l){try{const e=iw(l);if(!e)throw new Error("Failed to create stream from data");return await sw(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function sw(l){const e=l.pipeThrough(new DecompressionStream("gzip")),a=await new Response(e).arrayBuffer();return new Uint8Array(a)}const rw=1347635022,ow=1,lw=.15;function cw(l){const e=l>>15&1,n=l>>10&31,a=l&1023,r=e===1?-1:1;return n===0?r*Math.pow(2,-14)*a/1024:n===31?a!==0?NaN:r*(1/0):r*Math.pow(2,n-15)*(1+a/1024)}function uw(l){return(l-128)/128}function ur(l){switch(l){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${l}`),0}}const fw=(function(){let l=[];const e=new nn,n=Ne.OFFSET.X,a=Ne.OFFSET.Y,r=Ne.OFFSET.Z,o=Ne.OFFSET.SCALE0,u=Ne.OFFSET.SCALE1,f=Ne.OFFSET.SCALE2,d=Ne.OFFSET.ROTATION0,h=Ne.OFFSET.ROTATION1,m=Ne.OFFSET.ROTATION2,g=Ne.OFFSET.ROTATION3,_=Ne.OFFSET.FDC0,v=Ne.OFFSET.FDC1,y=Ne.OFFSET.FDC2,E=Ne.OFFSET.OPACITY,x=[ur(0),ur(1),ur(2),ur(3)],A=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(T,w,D){D=Math.min(w,D);const R=Ne.createSplat(D);T.scale[0]!==void 0?(R[o]=T.scale[0],R[u]=T.scale[1],R[f]=T.scale[2]):(R[o]=.01,R[u]=.01,R[f]=.01),T.color[0]!==void 0?(R[_]=T.color[0],R[v]=T.color[1],R[y]=T.color[2]):l[RED]!==void 0?(R[_]=l[RED]*255,R[v]=l[GREEN]*255,R[y]=l[BLUE]*255):(R[_]=0,R[v]=0,R[y]=0),T.alpha!==void 0&&(R[E]=T.alpha),R[_]=un(Math.floor(R[_]),0,255),R[v]=un(Math.floor(R[v]),0,255),R[y]=un(Math.floor(R[y]),0,255),R[E]=un(Math.floor(R[E]),0,255);let B=x[D],b=x[w];for(let O=0;O<3;++O)for(let C=0;C<15;++C){const U=A[O*15+C];C<B&&C<b&&(R[Ne.OFFSET.FRC0+U]=T.sh[O*b+C])}return e.set(T.rotation[3],T.rotation[0],T.rotation[1],T.rotation[2]),e.normalize(),R[d]=e.x,R[h]=e.y,R[m]=e.z,R[g]=e.w,R[n]=T.position[0],R[a]=T.position[1],R[r]=T.position[2],R}})();function dw(l,e,n,a){return!(l.positions.length!==e*3*(a?2:3)||l.scales.length!==e*3||l.rotations.length!==e*3||l.alphas.length!==e||l.colors.length!==e*3||l.sh.length!==e*n*3)}function Mv(l,e,n,a,r){e=Math.min(e,l.shDegree);const o=l.numPoints,u=ur(l.shDegree),f=l.positions.length===o*3*2;if(!dw(l,o,u,f))return null;const d={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let h;f&&(h=new Uint16Array(l.positions.buffer,l.positions.byteOffset,o*3));const m=1/(1<<l.fractionalBits),g=ur(l.shDegree),_=.28209479177387814;for(let v=0;v<o;v++){if(f)for(let T=0;T<3;T++)d.position[T]=cw(h[v*3+T]);else for(let T=0;T<3;T++){const w=v*9+T*3;let D=l.positions[w];D|=l.positions[w+1]<<8,D|=l.positions[w+2]<<16,D|=D&8388608?4278190080:0,d.position[T]=D*m}for(let T=0;T<3;T++)d.scale[T]=Math.exp(l.scales[v*3+T]/16-10);const y=l.rotations.subarray(v*3,v*3+3),E=[y[0]/127.5-1,y[1]/127.5-1,y[2]/127.5-1];d.rotation[0]=E[0],d.rotation[1]=E[1],d.rotation[2]=E[2];const x=E[0]*E[0]+E[1]*E[1]+E[2]*E[2];d.rotation[3]=Math.sqrt(Math.max(0,1-x)),d.alpha=Math.floor(l.alphas[v]);for(let T=0;T<3;T++)d.color[T]=Math.floor(((l.colors[v*3+T]/255-.5)/lw*_+.5)*255);for(let T=0;T<3;T++)for(let w=0;w<g;w++)d.sh[T*g+w]=uw(l.sh[g*3*v+w*3+T]);const A=fw(d,l.shDegree,e);if(n){const T=se.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,w=v*T+r;se.writeSplatDataToSectionBuffer(A,a,w,0,e)}else a.addSplat(A)}}const hw=16,pw=1e7;function mw(l){const e=new DataView(l);let n=0;const a={magic:e.getUint32(n,!0),version:e.getUint32(n+4,!0),numPoints:e.getUint32(n+8,!0),shDegree:e.getUint8(n+12),fractionalBits:e.getUint8(n+13),flags:e.getUint8(n+14),reserved:e.getUint8(n+15)};if(n+=hw,a.magic!==rw)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(a.version<1||a.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${a.version}`),null;if(a.numPoints>pw)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${a.numPoints}`),null;if(a.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${a.shDegree}`),null;const r=a.numPoints,o=ur(a.shDegree),u=a.version===1,f={numPoints:r,shDegree:a.shDegree,fractionalBits:a.fractionalBits,antialiased:(a.flags&ow)!==0,positions:new Uint8Array(r*3*(u?2:3)),scales:new Uint8Array(r*3),rotations:new Uint8Array(r*3),alphas:new Uint8Array(r),colors:new Uint8Array(r*3),sh:new Uint8Array(r*o*3)};try{const d=new Uint8Array(l);let h=f.positions.length,m=n;if(f.positions.set(d.slice(m,m+h)),m+=h,f.alphas.set(d.slice(m,m+f.alphas.length)),m+=f.alphas.length,f.colors.set(d.slice(m,m+f.colors.length)),m+=f.colors.length,f.scales.set(d.slice(m,m+f.scales.length)),m+=f.scales.length,f.rotations.set(d.slice(m,m+f.rotations.length)),m+=f.rotations.length,f.sh.set(d.slice(m,m+f.sh.length)),m+f.sh.length!==l.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(d){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",d),null}return f}async function gw(l){try{const e=await aw(l);return mw(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class _m{static loadFromURL(e,n,a,r,o=!0,u=0,f,d,h,m,g){return n&&n(0,"0%",vn.Downloading),ef(e,n,!0,f).then(_=>(n&&n(0,"0%",vn.Processing),_m.loadFromFileData(_,a,r,o,u,d,h,m,g)))}static async loadFromFileData(e,n,a,r,o=0,u,f,d,h){await Di();const m=await gw(e);o=Math.min(m.shDegree,o);const g=new Ne(o);if(r)return Mv(m,o,!1,g,0),ql.getStandardGenerator(n,a,u,f,d,h).generateFromUncompressedSplatArray(g);{const{splatBuffer:_,splatBufferDataOffsetBytes:v}=se.preallocateUncompressed(m.numPoints,o);return Mv(m,o,!0,_.bufferData,v),_}}}class Zt{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,n,a,r,o,u){const f=se.CompressionLevels[0].BytesPerCenter,d=se.CompressionLevels[0].BytesPerScale,h=se.CompressionLevels[0].BytesPerRotation,m=se.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let g=e;g<=n;g++){const _=g*Zt.RowSizeBytes+r,v=new Float32Array(a,_,3),y=new Float32Array(a,_+Zt.CenterSizeBytes,3),E=new Uint8Array(a,_+Zt.CenterSizeBytes+Zt.ScaleSizeBytes,4),x=new Uint8Array(a,_+Zt.CenterSizeBytes+Zt.ScaleSizeBytes+Zt.RotationSizeBytes,4),A=new nn((x[1]-128)/128,(x[2]-128)/128,(x[3]-128)/128,(x[0]-128)/128);A.normalize();const T=g*m+u,w=new Float32Array(o,T,3),D=new Float32Array(o,T+f,3),R=new Float32Array(o,T+f+d,4),B=new Uint8Array(o,T+f+d+h,4);w[0]=v[0],w[1]=v[1],w[2]=v[2],D[0]=y[0],D[1]=y[1],D[2]=y[2],R[0]=A.w,R[1]=A.x,R[2]=A.y,R[3]=A.z,B[0]=E[0],B[1]=E[1],B[2]=E[2],B[3]=E[3]}}static parseToUncompressedSplatArraySection(e,n,a,r,o){for(let u=e;u<=n;u++){const f=u*Zt.RowSizeBytes+r,d=new Float32Array(a,f,3),h=new Float32Array(a,f+Zt.CenterSizeBytes,3),m=new Uint8Array(a,f+Zt.CenterSizeBytes+Zt.ScaleSizeBytes,4),g=new Uint8Array(a,f+Zt.CenterSizeBytes+Zt.ScaleSizeBytes+Zt.RotationSizeBytes,4),_=new nn((g[1]-128)/128,(g[2]-128)/128,(g[3]-128)/128,(g[0]-128)/128);_.normalize(),o.addSplatFromComonents(d[0],d[1],d[2],h[0],h[1],h[2],_.w,_.x,_.y,_.z,m[0],m[1],m[2],m[3])}}static parseStandardSplatToUncompressedSplatArray(e){const n=e.byteLength/Zt.RowSizeBytes,a=new Ne;for(let r=0;r<n;r++){const o=r*Zt.RowSizeBytes,u=new Float32Array(e,o,3),f=new Float32Array(e,o+Zt.CenterSizeBytes,3),d=new Uint8Array(e,o+Zt.CenterSizeBytes+Zt.ScaleSizeBytes,4),h=new Uint8Array(e,o+Zt.CenterSizeBytes+Zt.ScaleSizeBytes+Zt.ColorSizeBytes,4),m=new nn((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);m.normalize(),a.addSplatFromComonents(u[0],u[1],u[2],f[0],f[1],f[2],m.w,m.x,m.y,m.z,d[0],d[1],d[2],d[3])}return a}}function Tv(l,e,n,a,r,o,u,f){return e?ql.getStandardGenerator(n,a,r,o,u,f).generateFromUncompressedSplatArray(l):se.generateFromUncompressedSplatArrays([l],n,0,new V)}class vm{static loadFromURL(e,n,a,r,o,u,f=!0,d,h,m,g,_){let v=a?rn.ProgressiveToSplatBuffer:rn.ProgressiveToSplatArray;f&&(v=rn.ProgressiveToSplatArray);const y=se.HeaderSizeBytes+se.SectionHeaderSizeBytes,E=Jt.ProgressiveLoadSectionSize,x=1;let A,T,w,D=0,R=0,B;const b=rm();let O=0,C=0,U=[];const N=(k,X,W,Q)=>{const P=k>=100;if(W&&U.push(W),v===rn.DownloadBeforeProcessing){P&&b.resolve(U);return}if(!Q){if(a)throw new Wu("Cannon directly load .splat because no file size info is available.");v=rn.DownloadBeforeProcessing;return}if(!A){D=Q/Zt.RowSizeBytes,A=new ArrayBuffer(Q);const H=se.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,Z=y+H*D;v===rn.ProgressiveToSplatBuffer?(T=new ArrayBuffer(Z),se.writeHeaderToBuffer({versionMajor:se.CurrentMajorVersion,versionMinor:se.CurrentMinorVersion,maxSectionCount:x,sectionCount:x,maxSplatCount:D,splatCount:R,compressionLevel:0,sceneCenter:new V},T)):B=new Ne(0)}if(W){new Uint8Array(A,C,W.byteLength).set(new Uint8Array(W)),C+=W.byteLength;const H=C-O;if(H>E||P){const re=(P?H:E)/Zt.RowSizeBytes,he=R+re;v===rn.ProgressiveToSplatBuffer?Zt.parseToUncompressedSplatBufferSection(R,he-1,A,0,T,y):Zt.parseToUncompressedSplatArraySection(R,he-1,A,0,B),R=he,v===rn.ProgressiveToSplatBuffer&&(w||(se.writeSectionHeaderToBuffer({maxSplatCount:D,splatCount:R,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,T,se.HeaderSizeBytes),w=new se(T,!1)),w.updateLoadedCounts(1,R),r&&r(w,P)),O+=E}}P&&(v===rn.ProgressiveToSplatBuffer?b.resolve(w):b.resolve(B)),n&&n(k,X,vn.Downloading)};return n&&n(0,"0%",vn.Downloading),ef(e,N,!1,d).then(()=>(n&&n(0,"0%",vn.Processing),b.promise.then(k=>(n&&n(100,"100%",vn.Done),v===rn.DownloadBeforeProcessing?new Blob(U).arrayBuffer().then(X=>vm.loadFromFileData(X,o,u,f,h,m,g,_)):v===rn.ProgressiveToSplatBuffer?k:Di(()=>Tv(k,f,o,u,h,m,g,_))))))}static loadFromFileData(e,n,a,r,o,u,f,d){return Di(()=>{const h=Zt.parseStandardSplatToUncompressedSplatArray(e);return Tv(h,r,n,a,o,u,f,d)})}}class Ll{static checkVersion(e){const n=se.CurrentMajorVersion,a=se.CurrentMinorVersion,r=se.parseHeader(e);if(r.versionMajor===n&&r.versionMinor>=a||r.versionMajor>n)return!0;throw new Error(`KSplat version not supported: v${r.versionMajor}.${r.versionMinor}. Minimum required: v${n}.${a}`)}static loadFromURL(e,n,a,r,o){let u,f,d,h,m=!1,g=!1,_,v=[],y=!1,E=!1,x=0,A=0,T=0,w=!1,D=!1,R=!1,B=[];const b=rm(),O=()=>{!m&&!g&&x>=se.HeaderSizeBytes&&(g=!0,new Blob(B).arrayBuffer().then(Q=>{d=new ArrayBuffer(se.HeaderSizeBytes),new Uint8Array(d).set(new Uint8Array(Q,0,se.HeaderSizeBytes)),Ll.checkVersion(d),g=!1,m=!0,h=se.parseHeader(d),window.setTimeout(()=>{N()},1)}))};let C=0;const U=()=>{C===0&&(C++,window.setTimeout(()=>{C--,k()},1))},N=()=>{const W=()=>{E=!0,new Blob(B).arrayBuffer().then(P=>{E=!1,y=!0,_=new ArrayBuffer(h.maxSectionCount*se.SectionHeaderSizeBytes),new Uint8Array(_).set(new Uint8Array(P,se.HeaderSizeBytes,h.maxSectionCount*se.SectionHeaderSizeBytes)),v=se.parseSectionHeaders(h,_,0,!1);let H=0;for(let re=0;re<h.maxSectionCount;re++)H+=v[re].storageSizeBytes;const Z=se.HeaderSizeBytes+h.maxSectionCount*se.SectionHeaderSizeBytes+H;if(!u){u=new ArrayBuffer(Z);let re=0;for(let he=0;he<B.length;he++){const z=B[he];new Uint8Array(u,re,z.byteLength).set(new Uint8Array(z)),re+=z.byteLength}}T=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*h.maxSectionCount;for(let re=0;re<=v.length&&re<h.maxSectionCount;re++)T+=v[re].storageSizeBytes;U()})};!E&&!y&&m&&x>=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*h.maxSectionCount&&W()},k=()=>{if(R)return;R=!0;const W=()=>{if(R=!1,y){if(D)return;if(w=x>=T,x-A>Jt.ProgressiveLoadSectionSize||w){A+=Jt.ProgressiveLoadSectionSize,D=A>=T,f||(f=new se(u,!1));const P=se.HeaderSizeBytes+se.SectionHeaderSizeBytes*h.maxSectionCount;let H=0,Z=0,re=0;for(let ie=0;ie<h.maxSectionCount;ie++){const pe=v[ie],Me=H+pe.partiallyFilledBucketCount*4+pe.bucketStorageSizeBytes*pe.bucketCount,we=P+Me;if(A>=we){Z++;const $=A-we,Fe=se.CompressionLevels[h.compressionLevel].SphericalHarmonicsDegrees[pe.sphericalHarmonicsDegree].BytesPerSplat;let Ue=Math.floor($/Fe);Ue=Math.min(Ue,pe.maxSplatCount),re+=Ue,f.updateLoadedCounts(Z,re),f.updateSectionLoadedCounts(ie,Ue)}else break;H+=pe.storageSizeBytes}r(f,D);const he=A/T*100,z=he.toFixed(2)+"%";n&&n(he,z,vn.Downloading),D?b.resolve(f):k()}}};window.setTimeout(W,Jt.ProgressiveLoadSectionDelayDuration)};return ef(e,(W,Q,P)=>{P&&(B.push(P),u&&new Uint8Array(u,x,P.byteLength).set(new Uint8Array(P)),x+=P.byteLength),a?(O(),N(),k()):n&&n(W,Q,vn.Downloading)},!a,o).then(W=>(n&&n(0,"0%",vn.Processing),(a?b.promise:Ll.loadFromFileData(W)).then(P=>(n&&n(100,"100%",vn.Done),P))))}static loadFromFileData(e){return Di(()=>(Ll.checkVersion(e),new se(e)))}static downloadFile=(function(){let e;return function(n,a){const r=new Blob([n.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=a,e.href=URL.createObjectURL(r),e.click()}})()}const mi={Splat:0,KSplat:1,Ply:2,Spz:3},Cv=l=>l.endsWith(".ply")?mi.Ply:l.endsWith(".splat")?mi.Splat:l.endsWith(".ksplat")?mi.KSplat:l.endsWith(".spz")?mi.Spz:null,bv={type:"change"},Yh={type:"start"},Rv={type:"end"},Du=new im,wv=new Wa,Sw=Math.cos(70*em.DEG2RAD);class Iu extends Fs{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(j){j.addEventListener("keydown",I),this._domElementKeyEvents=j},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",I),this._domElementKeyEvents=null},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,this.clearDampedRotation(),this.clearDampedPan(),a.object.updateProjectionMatrix(),a.dispatchEvent(bv),a.update(),o=r.NONE},this.clearDampedRotation=function(){d.theta=0,d.phi=0},this.clearDampedPan=function(){m.set(0,0,0)},this.update=(function(){const j=new V,ue=new nn().setFromUnitVectors(e.up,new V(0,1,0)),Ee=ue.clone().invert(),De=new V,Be=new nn,Le=new V,ut=2*Math.PI;return function(){ue.setFromUnitVectors(e.up,new V(0,1,0)),Ee.copy(ue).invert();const ze=a.object.position;j.copy(ze).sub(a.target),j.applyQuaternion(ue),f.setFromVector3(j),a.autoRotate&&o===r.NONE&&N(C()),a.enableDamping?(f.theta+=d.theta*a.dampingFactor,f.phi+=d.phi*a.dampingFactor):(f.theta+=d.theta,f.phi+=d.phi);let Re=a.minAzimuthAngle,Oe=a.maxAzimuthAngle;isFinite(Re)&&isFinite(Oe)&&(Re<-Math.PI?Re+=ut:Re>Math.PI&&(Re-=ut),Oe<-Math.PI?Oe+=ut:Oe>Math.PI&&(Oe-=ut),Re<=Oe?f.theta=Math.max(Re,Math.min(Oe,f.theta)):f.theta=f.theta>(Re+Oe)/2?Math.max(Re,f.theta):Math.min(Oe,f.theta)),f.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,f.phi)),f.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(m,a.dampingFactor):a.target.add(m),a.zoomToCursor&&B||a.object.isOrthographicCamera?f.radius=re(f.radius):f.radius=re(f.radius*h),j.setFromSpherical(f),j.applyQuaternion(Ee),ze.copy(a.target).add(j),a.object.lookAt(a.target),a.enableDamping===!0?(d.theta*=1-a.dampingFactor,d.phi*=1-a.dampingFactor,m.multiplyScalar(1-a.dampingFactor)):(d.set(0,0,0),m.set(0,0,0));let Ce=!1;if(a.zoomToCursor&&B){let Ae=null;if(a.object.isPerspectiveCamera){const Ie=j.length();Ae=re(Ie*h);const ot=Ie-Ae;a.object.position.addScaledVector(D,ot),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const Ie=new V(R.x,R.y,0);Ie.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/h)),a.object.updateProjectionMatrix(),Ce=!0;const ot=new V(R.x,R.y,0);ot.unproject(a.object),a.object.position.sub(ot).add(Ie),a.object.updateMatrixWorld(),Ae=j.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(Ae).add(a.object.position):(Du.origin.copy(a.object.position),Du.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(Du.direction))<Sw?e.lookAt(a.target):(wv.setFromNormalAndCoplanarPoint(a.object.up,a.target),Du.intersectPlane(wv,a.target))))}else a.object.isOrthographicCamera&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/h)),a.object.updateProjectionMatrix(),Ce=!0);return h=1,B=!1,Ce||De.distanceToSquared(a.object.position)>u||8*(1-Be.dot(a.object.quaternion))>u||Le.distanceToSquared(a.target)>0?(a.dispatchEvent(bv),De.copy(a.object.position),Be.copy(a.object.quaternion),Le.copy(a.target),Ce=!1,!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",Te),a.domElement.removeEventListener("pointerdown",q),a.domElement.removeEventListener("pointercancel",gt),a.domElement.removeEventListener("wheel",G),a.domElement.removeEventListener("pointermove",xt),a.domElement.removeEventListener("pointerup",gt),a._domElementKeyEvents!==null&&(a._domElementKeyEvents.removeEventListener("keydown",I),a._domElementKeyEvents=null)};const a=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const u=1e-6,f=new Xu,d=new Xu;let h=1;const m=new V,g=new ke,_=new ke,v=new ke,y=new ke,E=new ke,x=new ke,A=new ke,T=new ke,w=new ke,D=new V,R=new ke;let B=!1;const b=[],O={};function C(){return 2*Math.PI/60/60*a.autoRotateSpeed}function U(){return Math.pow(.95,a.zoomSpeed)}function N(j){d.theta-=j}function k(j){d.phi-=j}const X=(function(){const j=new V;return function(Ee,De){j.setFromMatrixColumn(De,0),j.multiplyScalar(-Ee),m.add(j)}})(),W=(function(){const j=new V;return function(Ee,De){a.screenSpacePanning===!0?j.setFromMatrixColumn(De,1):(j.setFromMatrixColumn(De,0),j.crossVectors(a.object.up,j)),j.multiplyScalar(Ee),m.add(j)}})(),Q=(function(){const j=new V;return function(Ee,De){const Be=a.domElement;if(a.object.isPerspectiveCamera){const Le=a.object.position;j.copy(Le).sub(a.target);let ut=j.length();ut*=Math.tan(a.object.fov/2*Math.PI/180),X(2*Ee*ut/Be.clientHeight,a.object.matrix),W(2*De*ut/Be.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(X(Ee*(a.object.right-a.object.left)/a.object.zoom/Be.clientWidth,a.object.matrix),W(De*(a.object.top-a.object.bottom)/a.object.zoom/Be.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function P(j){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?h/=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function H(j){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?h*=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function Z(j){if(!a.zoomToCursor)return;B=!0;const ue=a.domElement.getBoundingClientRect(),Ee=j.clientX-ue.left,De=j.clientY-ue.top,Be=ue.width,Le=ue.height;R.x=Ee/Be*2-1,R.y=-(De/Le)*2+1,D.set(R.x,R.y,1).unproject(e).sub(e.position).normalize()}function re(j){return Math.max(a.minDistance,Math.min(a.maxDistance,j))}function he(j){g.set(j.clientX,j.clientY)}function z(j){Z(j),A.set(j.clientX,j.clientY)}function ie(j){y.set(j.clientX,j.clientY)}function pe(j){_.set(j.clientX,j.clientY),v.subVectors(_,g).multiplyScalar(a.rotateSpeed);const ue=a.domElement;N(2*Math.PI*v.x/ue.clientHeight),k(2*Math.PI*v.y/ue.clientHeight),g.copy(_),a.update()}function Me(j){T.set(j.clientX,j.clientY),w.subVectors(T,A),w.y>0?P(U()):w.y<0&&H(U()),A.copy(T),a.update()}function we(j){E.set(j.clientX,j.clientY),x.subVectors(E,y).multiplyScalar(a.panSpeed),Q(x.x,x.y),y.copy(E),a.update()}function $(j){Z(j),j.deltaY<0?H(U()):j.deltaY>0&&P(U()),a.update()}function ce(j){let ue=!1;switch(j.code){case a.keys.UP:j.ctrlKey||j.metaKey||j.shiftKey?k(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(0,a.keyPanSpeed),ue=!0;break;case a.keys.BOTTOM:j.ctrlKey||j.metaKey||j.shiftKey?k(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(0,-a.keyPanSpeed),ue=!0;break;case a.keys.LEFT:j.ctrlKey||j.metaKey||j.shiftKey?N(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(a.keyPanSpeed,0),ue=!0;break;case a.keys.RIGHT:j.ctrlKey||j.metaKey||j.shiftKey?N(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):Q(-a.keyPanSpeed,0),ue=!0;break}ue&&(j.preventDefault(),a.update())}function be(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const j=.5*(b[0].pageX+b[1].pageX),ue=.5*(b[0].pageY+b[1].pageY);g.set(j,ue)}}function Fe(){if(b.length===1)y.set(b[0].pageX,b[0].pageY);else{const j=.5*(b[0].pageX+b[1].pageX),ue=.5*(b[0].pageY+b[1].pageY);y.set(j,ue)}}function Ue(){const j=b[0].pageX-b[1].pageX,ue=b[0].pageY-b[1].pageY,Ee=Math.sqrt(j*j+ue*ue);A.set(0,Ee)}function at(){a.enableZoom&&Ue(),a.enablePan&&Fe()}function St(){a.enableZoom&&Ue(),a.enableRotate&&be()}function Je(j){if(b.length==1)_.set(j.pageX,j.pageY);else{const Ee=We(j),De=.5*(j.pageX+Ee.x),Be=.5*(j.pageY+Ee.y);_.set(De,Be)}v.subVectors(_,g).multiplyScalar(a.rotateSpeed);const ue=a.domElement;N(2*Math.PI*v.x/ue.clientHeight),k(2*Math.PI*v.y/ue.clientHeight),g.copy(_)}function tt(j){if(b.length===1)E.set(j.pageX,j.pageY);else{const ue=We(j),Ee=.5*(j.pageX+ue.x),De=.5*(j.pageY+ue.y);E.set(Ee,De)}x.subVectors(E,y).multiplyScalar(a.panSpeed),Q(x.x,x.y),y.copy(E)}function et(j){const ue=We(j),Ee=j.pageX-ue.x,De=j.pageY-ue.y,Be=Math.sqrt(Ee*Ee+De*De);T.set(0,Be),w.set(0,Math.pow(T.y/A.y,a.zoomSpeed)),P(w.y),A.copy(T)}function it(j){a.enableZoom&&et(j),a.enablePan&&tt(j)}function Rt(j){a.enableZoom&&et(j),a.enableRotate&&Je(j)}function q(j){a.enabled!==!1&&(b.length===0&&(a.domElement.setPointerCapture(j.pointerId),a.domElement.addEventListener("pointermove",xt),a.domElement.addEventListener("pointerup",gt)),Se(j),j.pointerType==="touch"?ee(j):Ut(j))}function xt(j){a.enabled!==!1&&(j.pointerType==="touch"?ve(j):Qe(j))}function gt(j){je(j),b.length===0&&(a.domElement.releasePointerCapture(j.pointerId),a.domElement.removeEventListener("pointermove",xt),a.domElement.removeEventListener("pointerup",gt)),a.dispatchEvent(Rv),o=r.NONE}function Ut(j){let ue;switch(j.button){case 0:ue=a.mouseButtons.LEFT;break;case 1:ue=a.mouseButtons.MIDDLE;break;case 2:ue=a.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Xi.DOLLY:if(a.enableZoom===!1)return;z(j),o=r.DOLLY;break;case Xi.ROTATE:if(j.ctrlKey||j.metaKey||j.shiftKey){if(a.enablePan===!1)return;ie(j),o=r.PAN}else{if(a.enableRotate===!1)return;he(j),o=r.ROTATE}break;case Xi.PAN:if(j.ctrlKey||j.metaKey||j.shiftKey){if(a.enableRotate===!1)return;he(j),o=r.ROTATE}else{if(a.enablePan===!1)return;ie(j),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&a.dispatchEvent(Yh)}function Qe(j){switch(o){case r.ROTATE:if(a.enableRotate===!1)return;pe(j);break;case r.DOLLY:if(a.enableZoom===!1)return;Me(j);break;case r.PAN:if(a.enablePan===!1)return;we(j);break}}function G(j){a.enabled===!1||a.enableZoom===!1||o!==r.NONE||(j.preventDefault(),a.dispatchEvent(Yh),$(j),a.dispatchEvent(Rv))}function I(j){a.enabled===!1||a.enablePan===!1||ce(j)}function ee(j){switch(Pe(j),b.length){case 1:switch(a.touches.ONE){case Wi.ROTATE:if(a.enableRotate===!1)return;be(),o=r.TOUCH_ROTATE;break;case Wi.PAN:if(a.enablePan===!1)return;Fe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(a.touches.TWO){case Wi.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;at(),o=r.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;St(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&a.dispatchEvent(Yh)}function ve(j){switch(Pe(j),o){case r.TOUCH_ROTATE:if(a.enableRotate===!1)return;Je(j),a.update();break;case r.TOUCH_PAN:if(a.enablePan===!1)return;tt(j),a.update();break;case r.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;it(j),a.update();break;case r.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Rt(j),a.update();break;default:o=r.NONE}}function Te(j){a.enabled!==!1&&j.preventDefault()}function Se(j){b.push(j)}function je(j){delete O[j.pointerId];for(let ue=0;ue<b.length;ue++)if(b[ue].pointerId==j.pointerId){b.splice(ue,1);return}}function Pe(j){let ue=O[j.pointerId];ue===void 0&&(ue=new ke,O[j.pointerId]=ue),ue.set(j.pageX,j.pageY)}function We(j){const ue=j.pointerId===b[0].pointerId?b[1]:b[0];return O[ue.pointerId]}a.domElement.addEventListener("contextmenu",Te),a.domElement.addEventListener("pointerdown",q),a.domElement.addEventListener("pointercancel",gt),a.domElement.addEventListener("wheel",G,{passive:!1}),this.update()}}const _w=(l,e,n,a,r)=>{const o=performance.now();let u=l.style.display==="none"?0:parseFloat(l.style.opacity);isNaN(u)&&(u=1);const f=window.setInterval(()=>{const h=performance.now()-o;let m=Math.min(h/a,1);m>.999&&(m=1);let g;e?(g=(1-m)*u,g<1e-4&&(g=0)):g=(1-u)*m+u,g>0?(l.style.display=n,l.style.opacity=g):l.style.display="none",m>=1&&(r&&r(),window.clearInterval(f))},16);return f},vw=500;class Am{static elementIDGen=0;constructor(e,n){this.taskIDGen=0,this.elementID=Am.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=n||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const a=document.createElement("style");a.innerHTML=`

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

        `,this.spinnerContainerOuter.appendChild(a),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const n={message:e,id:this.taskIDGen++};return this.tasks.push(n),this.update(),n.id}removeTask(e){let n=0;for(let a of this.tasks){if(a.id===e){this.tasks.splice(n,1);break}n++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,n){for(let a of this.tasks)if(a.id===e){a.message=n;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,n){const a=(r,o,u,f,d)=>{u?r.style.display=o?f:"none":this.fadeTransitions[d]=_w(r,!o,f,vw,()=>{this.fadeTransitions[d]=null})};a(this.spinnerContainerPrimary,!e,n,"block",0),a(this.spinnerContainerMin,e,n,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}}class Aw{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const n=document.createElement("style");n.innerHTML=`

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

        `,this.progressBarContainerOuter.appendChild(n),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class xw{constructor(e){this.container=e||document.body,this.infoCells={};const n=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const a=document.createElement("style");a.innerHTML=`

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

        `,this.infoPanelContainer.append(a),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const r=document.createElement("div");r.style.display="table";for(let o of n){const u=document.createElement("div");u.style.display="table-row",u.className="info-panel-row";const f=document.createElement("div");f.style.display="table-cell",f.innerHTML=`${o[0]}: `,f.classList.add("info-panel-cell","label-cell");const d=document.createElement("div");d.style.display="table-cell",d.style.width="10px",d.innerHTML=" ",d.className="info-panel-cell";const h=document.createElement("div");h.style.display="table-cell",h.innerHTML="",h.className="info-panel-cell",this.infoCells[o[1]]=h,u.appendChild(f),u.appendChild(d),u.appendChild(h),r.appendChild(u)}this.infoPanel.appendChild(r),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,n,a,r,o,u,f,d,h,m,g,_,v,y){const E=`${n.x.toFixed(5)}, ${n.y.toFixed(5)}, ${n.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==E&&(this.infoCells.cameraPosition.innerHTML=E),a){const A=a,T=`${A.x.toFixed(5)}, ${A.y.toFixed(5)}, ${A.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==T&&(this.infoCells.cameraLookAt.innerHTML=T)}const x=`${r.x.toFixed(5)}, ${r.y.toFixed(5)}, ${r.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==x&&(this.infoCells.cameraUp.innerHTML=x),this.infoCells.orthographicCamera.innerHTML=o?"Orthographic":"Perspective",u){const A=u,T=`${A.x.toFixed(5)}, ${A.y.toFixed(5)}, ${A.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=T}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=f,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${h} splats out of ${d} (${m.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${g.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${_.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${v.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${y}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const Dv=new V;class yw extends Dn{constructor(e=new V(0,0,1),n=new V(0,0,0),a=1,r=.1,o=16776960,u=a*.2,f=u*.2){super(),this.type="ArrowHelper";const d=new Xl(r,r,a,32);d.translate(0,a/2,0);const h=new Xl(0,f,u,32);h.translate(0,a,0),this.position.copy(n),this.line=new _n(d,new dr({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _n(h,new dr({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Dv.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Dv,n)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Fl{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,n){this.destroySplatRendertarget(),this.splatRenderTarget=new sa(e,n,{format:ii,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new To(e,n),this.splatRenderTarget.depthTexture.format=va,this.splatRenderTarget.depthTexture.type=ni}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},n=new ri({vertexShader:`
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
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Ov,blendSrc:Nl,blendSrcAlpha:Nl,blendDst:zl,blendDstAlpha:zl});n.extensions.fragDepth=!0,this.renderTargetCopyQuad=new _n(new Co(2,2),n),this.renderTargetCopyCamera=new Zu(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(ho(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new am(.5,1.5,32),n=new dr({color:16777215}),a=new _n(e,n);a.rotation.set(0,0,Math.PI),a.position.set(0,1,0);const r=new _n(e,n);r.position.set(0,-1,0);const o=new _n(e,n);o.rotation.set(0,0,Math.PI/2),o.position.set(1,0,0);const u=new _n(e,n);u.rotation.set(0,0,-Math.PI/2),u.position.set(-1,0,0),this.meshCursor=new Dn,this.meshCursor.add(a),this.meshCursor.add(r),this.meshCursor.add(o),this.meshCursor.add(u),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(ho(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,n){this.meshCursor.position.copy(e),this.meshCursor.up.copy(n.up),this.meshCursor.lookAt(n.position)}setupFocusMarker(){if(!this.focusMarker){const e=new ku(.5,32,32),n=Fl.buildFocusMarkerMaterial();n.depthTest=!1,n.depthWrite=!1,n.transparent=!0,this.focusMarker=new _n(e,n)}}destroyFocusMarker(){this.focusMarker&&(ho(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){const e=new V,n=new dt,a=new V;return function(r,o,u){n.copy(o.matrixWorld).invert(),e.copy(r).applyMatrix4(n),e.normalize().multiplyScalar(10),e.applyMatrix4(o.matrixWorld),a.copy(o.position).sub(r);const f=a.length();this.focusMarker.position.copy(r),this.focusMarker.scale.set(f,f,f),this.focusMarker.material.uniforms.realFocusPosition.value.copy(r),this.focusMarker.material.uniforms.viewport.value.copy(u),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Co(1,1);e.rotateX(-Math.PI/2);const n=new dr({color:16777215});n.transparent=!0,n.opacity=.6,n.depthTest=!1,n.depthWrite=!1,n.side=qi;const a=new _n(e,n),r=new V(0,1,0);r.normalize();const o=new V(0,0,0),u=.5,f=.01,d=56576,h=new yw(r,o,u,f,d,.1,.03);this.controlPlane=new Dn,this.controlPlane.add(a),this.controlPlane.add(h)}}destroyControlPlane(){this.controlPlane&&(ho(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){const e=new nn,n=new V(0,1,0);return function(a,r){e.setFromUnitVectors(n,r),this.controlPlane.position.copy(a),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(ho(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const n=new ku(1,32,32),a=new Dn,r=(o,u)=>{let f=new _n(n,Fl.buildDebugMaterial(o));f.renderOrder=e,a.add(f),f.position.fromArray(u)};return r(16711680,[-50,0,0]),r(16711680,[50,0,0]),r(65280,[0,0,-50]),r(65280,[0,0,50]),r(16755200,[5,0,5]),a}createSecondaryDebugMeshes(e){const n=new Ro(3,3,3),a=new Dn;let r=12303291;const o=f=>{let d=new _n(n,Fl.buildDebugMaterial(r));d.renderOrder=e,a.add(d),d.position.fromArray(f)};let u=10;return o([-u,0,-u]),o([-u,0,u]),o([u,0,-u]),o([u,0,u]),a}static buildDebugMaterial(e){const n=`
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
        `,r={color:{type:"v3",value:new It(e)}},o=new ri({uniforms:r,vertexShader:n,fragmentShader:a,transparent:!1,depthTest:!0,depthWrite:!0,side:Sa});return o.extensions.fragDepth=!0,o}static buildFocusMarkerMaterial(e){const n=`
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
        `,r={color:{type:"v3",value:new It(e)},realFocusPosition:{type:"v3",value:new V},viewport:{type:"v2",value:new ke},opacity:{value:0}};return new ri({uniforms:r,vertexShader:n,fragmentShader:a,transparent:!0,depthTest:!1,depthWrite:!1,side:Sa})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const Ew=new V(1,0,0),Mw=new V(0,1,0),Tw=new V(0,0,1);class Qh{constructor(e=new V,n=new V){this.origin=new V,this.direction=new V,this.setParameters(e,n)}setParameters(e,n){this.origin.copy(e),this.direction.copy(n).normalize()}boxContainsPoint(e,n,a){return!(n.x<e.min.x-a||n.x>e.max.x+a||n.y<e.min.y-a||n.y>e.max.y+a||n.z<e.min.z-a||n.z>e.max.z+a)}intersectBox=(function(){const e=new V,n=[],a=[],r=[];return function(o,u){if(a[0]=this.origin.x,a[1]=this.origin.y,a[2]=this.origin.z,r[0]=this.direction.x,r[1]=this.direction.y,r[2]=this.direction.z,this.boxContainsPoint(o,this.origin,1e-4))return u&&(u.origin.copy(this.origin),u.normal.set(0,0,0),u.distance=-1),!0;for(let f=0;f<3;f++){if(r[f]==0)continue;const d=f==0?Ew:f==1?Mw:Tw,h=r[f]<0?o.max:o.min;let m=-Math.sign(r[f]);n[0]=f==0?h.x:f==1?h.y:h.z;let g=n[0]-a[f];if(g*m<0){const _=(f+1)%3,v=(f+2)%3;if(n[2]=r[_]/r[f]*g+a[_],n[1]=r[v]/r[f]*g+a[v],e.set(n[f],n[v],n[_]),this.boxContainsPoint(o,e,1e-4))return u&&(u.origin.copy(e),u.normal.copy(d).multiplyScalar(m),u.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){const e=new V;return function(n,a,r){e.copy(n).sub(this.origin);const o=e.dot(this.direction),u=o*o,d=e.dot(e)-u,h=a*a;if(d>h)return!1;const m=Math.sqrt(h-d),g=o-m,_=o+m;if(_<0)return!1;let v=g<0?_:g;return r&&(r.origin.copy(this.origin).addScaledVector(this.direction,v),r.normal.copy(r.origin).sub(n).normalize(),r.distance=v),!0}})()}class xm{constructor(){this.origin=new V,this.normal=new V,this.distance=0,this.splatIndex=0}set(e,n,a,r){this.origin.copy(e),this.normal.copy(n),this.distance=a,this.splatIndex=r}clone(){const e=new xm;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const qa={ThreeD:0,TwoD:1};class Cw{constructor(e,n,a=!1){this.ray=new Qh(e,n),this.raycastAgainstTrueSplatEllipsoid=a}setFromCameraAndScreenPosition=(function(){const e=new ke;return function(n,a,r){if(e.x=a.x/r.x*2-1,e.y=(r.y-a.y)/r.y*2-1,n.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n;else if(n.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){const e=new dt,n=new dt,a=new dt,r=new Qh,o=new V;return function(u,f=[]){const d=u.getSplatTree();if(d){for(let h=0;h<d.subTrees.length;h++){const m=d.subTrees[h];n.copy(u.matrixWorld),u.dynamicMode&&(u.getSceneTransform(h,a),n.multiply(a)),e.copy(n).invert(),r.origin.copy(this.ray.origin).applyMatrix4(e),r.direction.copy(this.ray.origin).add(this.ray.direction),r.direction.applyMatrix4(e).sub(r.origin).normalize();const g=[];m.rootNode&&this.castRayAtSplatTreeNode(r,d,m.rootNode,g),g.forEach(_=>{_.origin.applyMatrix4(n),_.normal.applyMatrix4(n).normalize(),_.distance=o.copy(_.origin).sub(this.ray.origin).length()}),f.push(...g)}return f.sort((h,m)=>h.distance>m.distance?1:-1),f}}})();castRayAtSplatTreeNode=(function(){const e=new fn,n=new V,a=new V,r=new nn,o=new xm,u=1e-7,f=new V(0,0,0),d=new dt,h=new dt,m=new dt,g=new dt,_=new dt,v=new Qh;return function(y,E,x,A=[]){if(y.intersectBox(x.boundingBox)){if(x.data&&x.data.indexes&&x.data.indexes.length>0)for(let T=0;T<x.data.indexes.length;T++){const w=x.data.indexes[T],D=E.splatMesh.getSceneIndexForSplat(w);if(E.splatMesh.getScene(D).visible&&(E.splatMesh.getSplatColor(w,e),E.splatMesh.getSplatCenter(w,n),E.splatMesh.getSplatScaleAndRotation(w,a,r),!(a.x<=u||a.y<=u||E.splatMesh.splatRenderMode===qa.ThreeD&&a.z<=u)))if(this.raycastAgainstTrueSplatEllipsoid){h.makeScale(a.x,a.y,a.z),m.makeRotationFromQuaternion(r);const B=Math.log10(e.w)*2;if(d.makeScale(B,B,B),_.copy(d).multiply(m).multiply(h),g.copy(_).invert(),v.origin.copy(y.origin).sub(n).applyMatrix4(g),v.direction.copy(y.origin).add(y.direction).sub(n),v.direction.applyMatrix4(g).sub(v.origin).normalize(),v.intersectSphere(f,1,o)){const b=o.clone();b.splatIndex=w,b.origin.applyMatrix4(_).add(n),A.push(b)}}else{let B=a.x+a.y,b=2;if(E.splatMesh.splatRenderMode===qa.ThreeD&&(B+=a.z,b=3),B=B/b,y.intersectSphere(n,B,o)){const O=o.clone();O.splatIndex=w,A.push(O)}}}if(x.children&&x.children.length>0)for(let T of x.children)this.castRayAtSplatTreeNode(y,E,T,A);return A}}})()}class _o{static buildVertexShaderBase(e=!1,n=!1,a=0,r=""){let o=`
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
    `;return n&&(o+=`
            uniform float sceneOpacity[${Jt.MaxScenes}];
            uniform int sceneVisibility[${Jt.MaxScenes}];
        `),e&&(o+=`
            uniform highp mat4 transforms[${Jt.MaxScenes}];
        `),o+=`
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
        uniform float sphericalHarmonics8BitCompressionRangeMin[${Jt.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${Jt.MaxScenes}];

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
            `,n&&(o+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?o+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:o+="mat4 transformModelViewMatrix = modelViewMatrix;",o+=`
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
        `,a>=1&&(o+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?o+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:o+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,o+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,a>=2&&(o+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),a===1?o+=`
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
                `:a===2&&(o+=`
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
                `),o+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,a>=2&&(o+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,a===2&&(o+=`
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
                    `),o+=`
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
                `),o+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),o}static getVertexShaderFadeIn(){return`
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
        `}static getUniforms(e=!1,n=!1,a=0,r=1,o=!1){const u={sceneCenter:{type:"v3",value:new V},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new ke},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new ke},basisViewport:{type:"v2",value:new ke},debugColor:{type:"v3",value:new It},centersColorsTextureSize:{type:"v2",value:new ke(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:a},sphericalHarmonicsTextureSize:{type:"v2",value:new ke(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:r},pointCloudModeEnabled:{type:"i",value:o?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new ke(1024,1024)},sceneCount:{type:"i",value:1}};for(let f=0;f<Jt.MaxScenes;f++)u.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),u.sphericalHarmonics8BitCompressionRangeMax.value.push(Jt.SphericalHarmonics8BitCompressionRange/2);if(n){const f=[];for(let h=0;h<Jt.MaxScenes;h++)f.push(1);u.sceneOpacity={type:"f",value:f};const d=[];for(let h=0;h<Jt.MaxScenes;h++)d.push(1);u.sceneVisibility={type:"i",value:d}}if(e){const f=[];for(let d=0;d<Jt.MaxScenes;d++)f.push(new dt);u.transforms={type:"mat4",value:f}}return u}}class qu{static build(e=!1,n=!1,a=!1,r=2048,o=1,u=!1,f=0,d=.3){let m=_o.buildVertexShaderBase(e,n,f,`
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
        `);m+=qu.buildVertexShaderProjection(a,n,r,d);const g=qu.buildFragmentShader(),_=_o.getUniforms(e,n,f,o,u);return _.covariancesTextureSize={type:"v2",value:new ke(1024,1024)},_.covariancesTexture={type:"t",value:null},_.covariancesTextureHalfFloat={type:"t",value:null},_.covariancesAreHalfFloat={type:"i",value:0},new ri({uniforms:_,vertexShader:m,fragmentShader:g,transparent:!0,alphaTest:1,blending:Ls,depthTest:!0,depthWrite:!1,side:qi})}static buildVertexShaderProjection(e,n,a,r){let o=`

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
            `;return e?o+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:o+=`
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
            `,o+=`

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
            `,n&&(o+=`
                vColor.a *= splatOpacityFromScene;
            `),o+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,o+=_o.getVertexShaderFadeIn(),o+="}",o}static buildFragmentShader(){let e=`
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
        `,e}}class Yu{static build(e=!1,n=!1,a=1,r=!1,o=0){let f=_o.buildVertexShaderBase(e,n,o,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);f+=Yu.buildVertexShaderProjection();const d=Yu.buildFragmentShader(),h=_o.getUniforms(e,n,o,a,r);return h.scaleRotationsTexture={type:"t",value:null},h.scaleRotationsTextureSize={type:"v2",value:new ke(1024,1024)},new ri({uniforms:h,vertexShader:f,fragmentShader:d,transparent:!0,alphaTest:1,blending:Ls,depthTest:!0,depthWrite:!1,side:qi})}static buildVertexShaderProjection(){let e=`

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
        `}}class bw{static build(e){const n=new Si;n.setIndex([0,1,2,0,2,3]);const a=new Float32Array(12),r=new Qi(a,3);n.setAttribute("position",r),r.setXYZ(0,-1,-1,0),r.setXYZ(1,-1,1,0),r.setXYZ(2,1,1,0),r.setXYZ(3,1,-1,0),r.needsUpdate=!0;const o=new lM().copy(n),u=new Uint32Array(e),f=new eM(u,1,!1);return f.setUsage(ME),o.setAttribute("splatIndex",f),o.instanceCount=0,o}}class Rw extends Dn{constructor(e,n=new V,a=new nn,r=new V(1,1,1),o=1,u=1,f=!0){super(),this.splatBuffer=e,this.position.copy(n),this.quaternion.copy(a),this.scale.copy(r),this.transform=new dt,this.minimumAlpha=o,this.opacity=u,this.visible=f}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}class ym{static idGen=0;constructor(e,n,a,r){this.min=new V().copy(e),this.max=new V().copy(n),this.boundingBox=new pa(this.min,this.max),this.center=new V().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=a,this.children=[],this.data=null,this.id=r||ym.idGen++}}class Pl{constructor(e,n){this.maxDepth=e,this.maxCentersPerNode=n,this.sceneDimensions=new V,this.sceneMin=new V,this.sceneMax=new V,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const n=new V().fromArray(e.min),a=new V().fromArray(e.max),r=new ym(n,a,e.depth,e.id);if(e.data.indexes){r.data={indexes:[]};for(let o of e.data.indexes)r.data.indexes.push(o)}if(e.children)for(let o of e.children)r.children.push(Pl.convertWorkerSubTreeNode(o));return r}static convertWorkerSubTree(e,n){const a=new Pl(e.maxDepth,e.maxCentersPerNode);a.sceneMin=new V().fromArray(e.sceneMin),a.sceneMax=new V().fromArray(e.sceneMax),a.splatMesh=n,a.rootNode=Pl.convertWorkerSubTreeNode(e.rootNode);const r=(o,u)=>{o.children.length===0&&u(o);for(let f of o.children)r(f,u)};return a.nodesWithIndexes=[],r(a.rootNode,o=>{o.data&&o.data.indexes&&o.data.indexes.length>0&&a.nodesWithIndexes.push(o)}),a}}function ww(l){let e=0;class n{constructor(d,h){this.min=[d[0],d[1],d[2]],this.max=[h[0],h[1],h[2]]}containsPoint(d){return d[0]>=this.min[0]&&d[0]<=this.max[0]&&d[1]>=this.min[1]&&d[1]<=this.max[1]&&d[2]>=this.min[2]&&d[2]<=this.max[2]}}class a{constructor(d,h){this.maxDepth=d,this.maxCentersPerNode=h,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class r{constructor(d,h,m,g){this.min=[d[0],d[1],d[2]],this.max=[h[0],h[1],h[2]],this.center=[(h[0]-d[0])*.5+d[0],(h[1]-d[1])*.5+d[1],(h[2]-d[2])*.5+d[2]],this.depth=m,this.children=[],this.data=null,this.id=g||e++}}processSplatTreeNode=function(f,d,h,m){const g=d.data.indexes.length;if(g<f.maxCentersPerNode||d.depth>f.maxDepth){const T=[];for(let w=0;w<d.data.indexes.length;w++)f.addedIndexes[d.data.indexes[w]]||(T.push(d.data.indexes[w]),f.addedIndexes[d.data.indexes[w]]=!0);d.data.indexes=T,d.data.indexes.sort((w,D)=>w>D?1:-1),f.nodesWithIndexes.push(d);return}const _=[d.max[0]-d.min[0],d.max[1]-d.min[1],d.max[2]-d.min[2]],v=[_[0]*.5,_[1]*.5,_[2]*.5],y=[d.min[0]+v[0],d.min[1]+v[1],d.min[2]+v[2]],E=[new n([y[0]-v[0],y[1],y[2]-v[2]],[y[0],y[1]+v[1],y[2]]),new n([y[0],y[1],y[2]-v[2]],[y[0]+v[0],y[1]+v[1],y[2]]),new n([y[0],y[1],y[2]],[y[0]+v[0],y[1]+v[1],y[2]+v[2]]),new n([y[0]-v[0],y[1],y[2]],[y[0],y[1]+v[1],y[2]+v[2]]),new n([y[0]-v[0],y[1]-v[1],y[2]-v[2]],[y[0],y[1],y[2]]),new n([y[0],y[1]-v[1],y[2]-v[2]],[y[0]+v[0],y[1],y[2]]),new n([y[0],y[1]-v[1],y[2]],[y[0]+v[0],y[1],y[2]+v[2]]),new n([y[0]-v[0],y[1]-v[1],y[2]],[y[0],y[1],y[2]+v[2]])],x=[];for(let T=0;T<E.length;T++)x[T]=[];const A=[0,0,0];for(let T=0;T<g;T++){const w=d.data.indexes[T],D=h[w];A[0]=m[D],A[1]=m[D+1],A[2]=m[D+2];for(let R=0;R<E.length;R++)E[R].containsPoint(A)&&x[R].push(w)}for(let T=0;T<E.length;T++){const w=new r(E[T].min,E[T].max,d.depth+1);w.data={indexes:x[T]},d.children.push(w)}d.data={};for(let T of d.children)processSplatTreeNode(f,T,h,m)};const o=(f,d,h)=>{const m=[0,0,0],g=[0,0,0],_=[],v=Math.floor(f.length/4);for(let E=0;E<v;E++){const x=E*4,A=f[x],T=f[x+1],w=f[x+2],D=Math.round(f[x+3]);(E===0||A<m[0])&&(m[0]=A),(E===0||A>g[0])&&(g[0]=A),(E===0||T<m[1])&&(m[1]=T),(E===0||T>g[1])&&(g[1]=T),(E===0||w<m[2])&&(m[2]=w),(E===0||w>g[2])&&(g[2]=w),_.push(D)}const y=new a(d,h);return y.sceneMin=m,y.sceneMax=g,y.rootNode=new r(y.sceneMin,y.sceneMax,0),y.rootNode.data={indexes:_},y};function u(f,d,h){const m=[];for(let _ of f){const v=Math.floor(_.length/4);for(let y=0;y<v;y++){const E=y*4,x=Math.round(_[E+3]);m[x]=E}}const g=[];for(let _ of f){const v=o(_,d,h);g.push(v),processSplatTreeNode(v,v.rootNode,m,_)}l.postMessage({subTrees:g})}l.onmessage=f=>{f.data.process&&u(f.data.process.centers,f.data.process.maxDepth,f.data.process.maxCentersPerNode)}}function Dw(l,e,n,a,r){l.postMessage({process:{centers:e,maxDepth:a,maxCentersPerNode:r}},n)}function Iw(){return new Worker(URL.createObjectURL(new Blob(["(",ww.toString(),")(self)"],{type:"application/javascript"})))}class Uw{constructor(e,n){this.maxDepth=e,this.maxCentersPerNode=n,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,n=()=>!0,a,r){this.splatTreeWorker||(this.splatTreeWorker=Iw()),this.splatMesh=e,this.subTrees=[];const o=new V,u=(f,d)=>{const h=new Float32Array(d*4);let m=0;for(let g=0;g<d;g++){const _=g+f;if(n(_)){e.getSplatCenter(_,o);const v=m*4;h[v]=o.x,h[v+1]=o.y,h[v+2]=o.z,h[v+3]=_,m++}}return h};return new Promise(f=>{const d=()=>this.disposed?(this.diposeSplatTreeWorker(),f(),!0):!1;a&&a(!1),Di(()=>{if(d())return;const h=[];if(e.dynamicMode){let m=0;for(let g=0;g<e.scenes.length;g++){const v=e.getScene(g).splatBuffer.getSplatCount(),y=u(m,v);h.push(y),m+=v}}else{const m=u(0,e.getSplatCount());h.push(m)}this.splatTreeWorker.onmessage=m=>{d()||m.data.subTrees&&(r&&r(!1),Di(()=>{if(!d()){for(let g of m.data.subTrees){const _=Pl.convertWorkerSubTree(g,e);this.subTrees.push(_)}this.diposeSplatTreeWorker(),r&&r(!0),Di(()=>{f()})}}))},Di(()=>{if(d())return;a&&a(!0);const m=h.map(g=>g.buffer);Dw(this.splatTreeWorker,h,m,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const n=(a,r)=>{a.children.length===0&&r(a);for(let o of a.children)n(o,r)};for(let a of this.subTrees)n(a.rootNode,e)}}function Bw(l){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=l.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(a){a.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(a){const r=n(a);return r===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function Lw(l,e,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");a=l.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(b){if(b==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&l.constructor.name==="WebGL2RenderingContext";let f=n.precision!==void 0?n.precision:"highp";const d=o(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const h=u||e.has("WEBGL_draw_buffers"),m=n.logarithmicDepthBuffer===!0,g=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),_=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=l.getParameter(l.MAX_TEXTURE_SIZE),y=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),E=l.getParameter(l.MAX_VERTEX_ATTRIBS),x=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),A=l.getParameter(l.MAX_VARYING_VECTORS),T=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,D=u||e.has("OES_texture_float"),R=w&&D,B=u?l.getParameter(l.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:f,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:x,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:w,floatFragmentTextures:D,floatVertexTextures:R,maxSamples:B}}const Ol={Default:0,Instant:2},vo={None:0,Info:3},Iv=new Si,Fw=new dr,Uu=6,Pw=4,Ow=4,Nw=4,zw=6,Hw=8,jh=4,Kh=4,Uv=1,Gw=.012,Vw=.003,Bv=1,Lv=16777216;class Wn extends _n{constructor(e=qa.ThreeD,n=!1,a=!1,r=!1,o=1,u=!0,f=!1,d=!1,h=1024,m=vo.None,g=0,_=1,v=.3){super(Iv,Fw),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=n,this.enableOptionalEffects=a,this.halfPrecisionCovariancesOnGPU=r,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=u,this.integerBasedDistancesComputation=f,this.antialiased=d,this.kernel2DSize=v,this.maxScreenSpaceSplatSize=h,this.logLevel=m,this.sphericalHarmonicsDegree=g,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=_,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new pa,this.calculatedSceneCenter=new V,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,n,a){const r=[];r.length=n.length;for(let o=0;o<n.length;o++){const u=n[o],f=a[o]||{};let d=f.position||[0,0,0],h=f.rotation||[0,0,0,1],m=f.scale||[1,1,1];const g=new V().fromArray(d),_=new nn().fromArray(h),v=new V().fromArray(m),y=Wn.createScene(u,g,_,v,f.splatAlphaRemovalThreshold||1,f.opacity,f.visible);e.add(y),r[o]=y}return r}static createScene(e,n,a,r,o,u=1,f=!0){return new Rw(e,n,a,r,o,u,f)}static buildSplatIndexMaps(e){const n=[],a=[];let r=0;for(let o=0;o<e.length;o++){const f=e[o].getMaxSplatCount();for(let d=0;d<f;d++)n[r]=d,a[r]=o,r++}return{localSplatIndexMap:n,sceneIndexMap:a}}buildSplatTree=function(e=[],n,a){return new Promise(r=>{this.disposeSplatTree(),this.baseSplatTree=new Uw(8,1e3);const o=performance.now(),u=new fn;this.baseSplatTree.processSplatMesh(this,f=>{this.getSplatColor(f,u);const d=this.getSceneIndexForSplat(f),h=e[d]||1;return u.w>=h},n,a).then(()=>{const f=performance.now()-o;if(this.logLevel>=vo.Info&&console.log("SplatTree build: "+f+" ms"),this.disposed)r();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let d=0,h=0,m=0;this.splatTree.visitLeaves(g=>{const _=g.data.indexes.length;_>0&&(h+=_,m++,d++)}),this.logLevel>=vo.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${d}`),h=h/m,console.log(`Avg splat count per node: ${h}`),console.log(`Total splat count: ${this.getSplatCount()}`)),r()}})})};build(e,n,a=!0,r=!1,o,u,f=!0){this.sceneOptions=n,this.finalBuild=r;const d=Wn.getTotalMaxSplatCountForSplatBuffers(e),h=Wn.buildScenes(this,e,n);if(a)for(let E=0;E<this.scenes.length&&E<h.length;E++){const x=h[E],A=this.getScene(E);x.copyTransformData(A)}this.scenes=h;let m=3;for(let E of e){const x=E.getMinSphericalHarmonicsDegree();x<m&&(m=x)}this.minSphericalHarmonicsDegree=Math.min(m,this.sphericalHarmonicsDegree);let g=!1;if(e.length!==this.lastBuildScenes.length)g=!0;else for(let E=0;E<e.length;E++)if(e[E]!==this.lastBuildScenes[E].splatBuffer){g=!0;break}let _=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==d||g)&&(_=!1),!_){this.boundingBox=new pa,f||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=bw.build(d),this.splatRenderMode===qa.ThreeD?this.material=qu.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=Yu.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const E=Wn.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=E.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=E.sceneIndexMap}const v=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const y=this.refreshGPUDataFromSplatBuffers(_);for(let E=0;E<this.scenes.length;E++)this.lastBuildScenes[E]=this.scenes[E];return this.lastBuildSplatCount=v,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,r&&this.scenes.length>0&&this.buildSplatTree(n.map(E=>E.splatAlphaRemovalThreshold||1),o,u).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,y}freeIntermediateSplatData(){const e=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{e(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new pa,this.calculatedSceneCenter=new V,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==Iv&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){const n=this.splatDataTextures[e];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,n){const a=this.integerBasedDistancesComputation?this.getIntegerCenters(e,n,!0):this.getFloatCenters(e,n,!0),r=this.getSceneIndexes(e,n);return{centers:a,sceneIndexes:r}}refreshGPUDataFromSplatBuffers(e){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);const a=e?this.lastBuildSplatCount:0,{centers:r,sceneIndexes:o}=this.getDataForDistancesComputation(a,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(r,o,e),{from:a,to:n-1,count:n-a,centers:r,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(e,n,a=!1){const r=a?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(a,e,r),this.updateGPUTransformIndexesBufferForDistancesComputation(a,n,r)}refreshDataTexturesFromSplatBuffers(e){const n=this.getSplatCount(!0),a=this.lastBuildSplatCount,r=n-1;e?this.updateBaseDataFromSplatBuffers(a,r):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(a,r),this.updateVisibleRegion(e)}setupDataTextures(){const e=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const a=(b,O)=>{const C=new ke(4096,1024);for(;C.x*C.y*b<e*O;)C.y*=2;return C},r=b=>b>=1?zw:Ow,o=b=>{const O=r(b),C=a(O,6);return{elementsPerTexelStored:O,texSize:C}};let u=this.getTargetCovarianceCompressionLevel();const f=0,d=this.getTargetSphericalHarmonicsCompressionLevel();let h,m,g;if(this.splatRenderMode===qa.ThreeD){const b=o(u);b.texSize.x*b.texSize.y>Lv&&u===0&&(u=1),h=new Float32Array(e*Uu)}else m=new Float32Array(e*3),g=new Float32Array(e*4);const _=new Float32Array(e*3),v=new Uint8Array(e*4);let y=Float32Array;d===1?y=Uint16Array:d===2&&(y=Uint8Array);const E=So(this.minSphericalHarmonicsDegree),x=this.minSphericalHarmonicsDegree?new y(e*E):void 0,A=a(Kh,4),T=new Uint32Array(A.x*A.y*Kh);Wn.updateCenterColorsPaddedData(0,n-1,_,v,T);const w=new Xa(T,A.x,A.y,mo,ni);if(w.internalFormat="RGBA32UI",w.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=w,this.material.uniforms.centersColorsTextureSize.value.copy(A),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:h,scales:m,rotations:g,centers:_,colors:v,sphericalHarmonics:x},centerColors:{data:T,texture:w,size:A}},this.splatRenderMode===qa.ThreeD){const b=o(u),O=b.elementsPerTexelStored,C=b.texSize;let U=u>=1?Uint32Array:Float32Array;const N=u>=1?Hw:Nw,k=new U(C.x*C.y*N);u===0?k.set(h):Wn.updatePaddedCompressedCovariancesTextureData(h,k,0,0,h.length);let X;if(u>=1)X=new Xa(k,C.x,C.y,mo,ni),X.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=X;else{X=new Xa(k,C.x,C.y,ii,Yi),this.material.uniforms.covariancesTexture.value=X;const W=new Xa(new Uint32Array(32),2,2,mo,ni);W.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=W,W.needsUpdate=!0}X.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=u>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(C),this.splatDataTextures.covariances={data:k,texture:X,size:C,compressionLevel:u,elementsPerTexelStored:O,elementsPerTexelAllocated:N}}else{const O=a(jh,6);let C=Float32Array,U=Yi;const N=new C(O.x*O.y*jh);Wn.updateScaleRotationsPaddedData(0,n-1,m,g,N);const k=new Xa(N,O.x,O.y,ii,U);k.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=k,this.material.uniforms.scaleRotationsTextureSize.value.copy(O),this.splatDataTextures.scaleRotations={data:N,texture:k,size:O,compressionLevel:f}}if(x){const b=d===2?wi:_a;let O=E;O%2!==0&&O++;const C=4,U=ii;let N=a(C,O);if(N.x*N.y<=Lv){const k=N.x*N.y*C,X=new y(k);for(let Q=0;Q<n;Q++){const P=E*Q,H=O*Q;for(let Z=0;Z<E;Z++)X[H+Z]=x[P+Z]}const W=new Xa(X,N.x,N.y,U,b);W.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=W,this.splatDataTextures.sphericalHarmonics={componentCount:E,paddedComponentCount:O,data:X,textureCount:1,texture:W,size:N,compressionLevel:d,elementsPerTexel:C}}else{const k=E/3;O=k,O%2!==0&&O++,N=a(C,O);const X=N.x*N.y*C,W=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],Q=[],P=[];for(let H=0;H<3;H++){const Z=new y(X);Q.push(Z);for(let he=0;he<n;he++){const z=E*he,ie=O*he;if(k>=3){for(let pe=0;pe<3;pe++)Z[ie+pe]=x[z+H*3+pe];if(k>=8)for(let pe=0;pe<5;pe++)Z[ie+3+pe]=x[z+9+H*5+pe]}}const re=new Xa(Z,N.x,N.y,U,b);P.push(re),re.needsUpdate=!0,W[H].value=re}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:E,componentCountPerChannel:k,paddedComponentCount:O,data:Q,textureCount:3,textures:P,size:N,compressionLevel:d,elementsPerTexel:C}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(N),this.material.uniforms.sphericalHarmonics8BitMode.value=d===2?1:0;for(let k=0;k<this.scenes.length;k++){const X=this.scenes[k].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[k]=X.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[k]=X.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const D=a(Uv,4),R=new Uint32Array(D.x*D.y*Uv);for(let b=0;b<n;b++)R[b]=this.globalSplatIndexToSceneIndexMap[b];const B=new Xa(R,D.x,D.y,ju,ni);B.internalFormat="R32UI",B.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=B,this.material.uniforms.sceneIndexesTextureSize.value.copy(D),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:R,texture:B,size:D},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,n){const a=this.splatDataTextures.covariances,r=a?a.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,u=o?o.compressionLevel:void 0,f=this.splatDataTextures.sphericalHarmonics,d=f?f.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,r,u,d,e,n,e)}updateDataTexturesFromBaseData(e,n){const a=this.splatDataTextures.covariances,r=a?a.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,u=o?o.compressionLevel:void 0,f=this.splatDataTextures.sphericalHarmonics,d=f?f.compressionLevel:0,h=this.splatDataTextures.centerColors,m=h.data,g=h.texture;Wn.updateCenterColorsPaddedData(e,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,m);const _=this.renderer?this.renderer.properties.get(g):null;if(!_||!_.__webglTexture?g.needsUpdate=!0:this.updateDataTexture(m,h.texture,h.size,_,Kh,Pw,4,e,n),a){const T=a.texture,w=e*Uu,D=n*Uu;if(r===0)for(let B=w;B<=D;B++){const b=this.splatDataTextures.baseData.covariances[B];a.data[B]=b}else Wn.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,a.data,e*a.elementsPerTexelAllocated,w,D);const R=this.renderer?this.renderer.properties.get(T):null;!R||!R.__webglTexture?T.needsUpdate=!0:r===0?this.updateDataTexture(a.data,a.texture,a.size,R,a.elementsPerTexelStored,Uu,4,e,n):this.updateDataTexture(a.data,a.texture,a.size,R,a.elementsPerTexelAllocated,a.elementsPerTexelAllocated,2,e,n)}if(o){const T=o.data,w=o.texture,D=6,R=u===0?4:2;Wn.updateScaleRotationsPaddedData(e,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,T);const B=this.renderer?this.renderer.properties.get(w):null;!B||!B.__webglTexture?w.needsUpdate=!0:this.updateDataTexture(T,o.texture,o.size,B,jh,D,R,e,n)}const v=this.splatDataTextures.baseData.sphericalHarmonics;if(v){let T=4;d===1?T=2:d===2&&(T=1);const w=(B,b,O,C,U)=>{const N=this.renderer?this.renderer.properties.get(B):null;!N||!N.__webglTexture?B.needsUpdate=!0:this.updateDataTexture(C,B,b,N,O,U,T,e,n)},D=f.componentCount,R=f.paddedComponentCount;if(f.textureCount===1){const B=f.data;for(let b=e;b<=n;b++){const O=D*b,C=R*b;for(let U=0;U<D;U++)B[C+U]=v[O+U]}w(f.texture,f.size,f.elementsPerTexel,B,R)}else{const B=f.componentCountPerChannel;for(let b=0;b<3;b++){const O=f.data[b];for(let C=e;C<=n;C++){const U=D*C,N=R*C;if(B>=3){for(let k=0;k<3;k++)O[N+k]=v[U+b*3+k];if(B>=8)for(let k=0;k<5;k++)O[N+3+k]=v[U+9+b*5+k]}}w(f.textures[b],f.size,f.elementsPerTexel,O,R)}}}const y=this.splatDataTextures.sceneIndexes,E=y.data;for(let T=this.lastBuildSplatCount;T<=n;T++)E[T]=this.globalSplatIndexToSceneIndexMap[T];const x=y.texture,A=this.renderer?this.renderer.properties.get(x):null;!A||!A.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(E,y.texture,y.size,A,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel>e)&&(e=r.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).splatBuffer;(n===0||r.compressionLevel<e)&&(e=r.compressionLevel)}return e}static computeTextureUpdateRegion(e,n,a,r,o){const u=o/r,f=e*u,d=Math.floor(f/a),h=d*a*r,m=n*u,g=Math.floor(m/a),_=g*a*r+a*r;return{dataStart:h,dataEnd:_,startRow:d,endRow:g}}updateDataTexture(e,n,a,r,o,u,f,d,h){const m=this.renderer.getContext(),g=Wn.computeTextureUpdateRegion(d,h,a.x,o,u),_=g.dataEnd-g.dataStart,v=new e.constructor(e.buffer,g.dataStart*f,_),y=g.endRow-g.startRow+1,E=this.webGLUtils.convert(n.type),x=this.webGLUtils.convert(n.format,n.colorSpace),A=m.getParameter(m.TEXTURE_BINDING_2D);m.bindTexture(m.TEXTURE_2D,r.__webglTexture),m.texSubImage2D(m.TEXTURE_2D,0,0,g.startRow,a.x,y,x,E,v),m.bindTexture(m.TEXTURE_2D,A)}static updatePaddedCompressedCovariancesTextureData(e,n,a,r,o){let u=new DataView(n.buffer),f=a,d=0;for(let h=r;h<=o;h+=2)u.setUint16(f*2,e[h],!0),u.setUint16(f*2+2,e[h+1],!0),f+=2,d++,d>=3&&(f+=2,d=0)}static updateCenterColorsPaddedData(e,n,a,r,o){for(let u=e;u<=n;u++){const f=u*4,d=u*3,h=u*4;o[h]=vR(r,f),o[h+1]=Vh(a[d]),o[h+2]=Vh(a[d+1]),o[h+3]=Vh(a[d+2])}}static updateScaleRotationsPaddedData(e,n,a,r,o){for(let f=e;f<=n;f++){const d=f*3,h=f*4,m=f*6;o[m]=a[d],o[m+1]=a[d+1],o[m+2]=a[d+2],o[m+3]=r[h],o[m+4]=r[h+1],o[m+5]=r[h+2]}}updateVisibleRegion(e){const n=this.getSplatCount(!0),a=new V;if(!e){const o=new V;this.scenes.forEach(u=>{o.add(u.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const r=e?this.lastBuildSplatCount:0;for(let o=r;o<n;o++){this.getSplatCenter(o,a,!0);const u=a.sub(this.calculatedSceneCenter).length();u>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=u)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Bv&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Bv,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=Ol.Default){const n=Gw*this.sceneFadeInRateMultiplier,a=Vw*this.sceneFadeInRateMultiplier,r=this.finalBuild?n:a,o=e===Ol.Default?r:a;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const f=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,d=f||e===Ol.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=d,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!f}updateRenderIndexes(e,n){const a=this.geometry;a.attributes.splatIndex.set(e),a.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),a.instanceCount=n,a.setDrawRange(0,n)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){const e=new ke;return function(n,a,r,o,u,f){if(this.getSplatCount()>0){if(e.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(a,r),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=u,this.material.uniforms.inverseFocalAdjustment.value=f,this.dynamicMode)for(let h=0;h<this.scenes.length;h++)this.material.uniforms.transforms.value[h].copy(this.getScene(h).transform);if(this.enableOptionalEffects)for(let h=0;h<this.scenes.length;h++)this.material.uniforms.sceneOpacity.value[h]=un(this.getScene(h).opacity,0,1),this.material.uniforms.sceneVisibility.value[h]=this.getScene(h).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?Wn.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let n=0;for(let a of e)a&&a.splatBuffer&&(n+=a.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(e){let n=0;for(let a of e)n+=a.getSplatCount();return n}getMaxSplatCount(){return Wn.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let n=0;for(let a of e)a&&a.splatBuffer&&(n+=a.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(e){let n=0;for(let a of e)n+=a.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;const n=this.renderer.getContext(),a=new Bw(n),r=new Lw(n,a,{});if(a.init(r),this.webGLUtils=new _A(n,a),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:u}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,u)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const a=this.lastRenderer!==this.renderer,r=e!==n;if(!a&&!r)return;a?this.disposeDistancesComputationGPUResources():r&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),u=(_,v,y)=>{const E=_.createShader(v);if(!E)return console.error("Fatal error: gl could not create a shader object."),null;if(_.shaderSource(E,y),_.compileShader(E),!_.getShaderParameter(E,_.COMPILE_STATUS)){let A="unknown";v===_.VERTEX_SHADER?A="vertex shader":v===_.FRAGMENT_SHADER&&(A="fragement shader");const T=_.getShaderInfoLog(E);return console.error("Failed to compile "+A+" with these errors:"+T),_.deleteShader(E),null}return E};let f;this.integerBasedDistancesComputation?(f=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?f+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${Jt.MaxScenes}];
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
                        uniform mat4 transforms[${Jt.MaxScenes}];
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
            `,h=o.getParameter(o.VERTEX_ARRAY_BINDING),m=o.getParameter(o.CURRENT_PROGRAM),g=m?o.getProgramParameter(m,o.DELETE_STATUS):!1;if(a&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),a){const _=o.createProgram(),v=u(o,o.VERTEX_SHADER,f),y=u(o,o.FRAGMENT_SHADER,d);if(!v||!y)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(_,v),o.attachShader(_,y),o.transformFeedbackVaryings(_,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(_),!o.getProgramParameter(_,o.LINK_STATUS)){const x=o.getProgramInfoLog(_);throw console.error("Fatal error: Failed to link program: "+x),o.deleteProgram(_),o.deleteShader(y),o.deleteShader(v),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=_,this.distancesTransformFeedback.vertexShader=v,this.distancesTransformFeedback.vertexShader=y}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let _=0;_<this.scenes.length;_++)this.distancesTransformFeedback.transformsLocs[_]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${_}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(a||r)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(a||r)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,n*4,o.STATIC_READ),a&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),m&&g!==!0&&o.useProgram(m),h&&o.bindVertexArray(h),this.lastRenderer=this.renderer,e=n}})();updateGPUCentersBufferForDistancesComputation(e,n,a){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const u=this.integerBasedDistancesComputation?Uint32Array:Float32Array,f=16,d=a*f;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)r.bufferSubData(r.ARRAY_BUFFER,d,n);else{const h=new u(this.getMaxSplatCount()*f);h.set(n),r.bufferData(r.ARRAY_BUFFER,h,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(e,n,a){if(!this.renderer||!this.dynamicMode)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao);const u=a*4;if(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)r.bufferSubData(r.ARRAY_BUFFER,u,n);else{const f=new Uint32Array(this.getMaxSplatCount()*4);f.set(n),r.bufferData(r.ARRAY_BUFFER,f,r.STATIC_DRAW)}r.bindBuffer(r.ARRAY_BUFFER,null),o&&r.bindVertexArray(o)}getSceneIndexes(e,n){let a;const r=n-e+1;a=new Uint32Array(r);for(let o=e;o<=n;o++)a[o]=this.globalSplatIndexToSceneIndexMap[o];return a}fillTransformsArray=(function(){const e=[];return function(n){e.length!==n.length&&(e.length=n.length);for(let a=0;a<this.scenes.length;a++){const o=this.getScene(a).transform.elements;for(let u=0;u<16;u++)e[a*16+u]=o[u]}n.set(e)}})();computeDistancesOnGPU=(function(){const e=new dt;return function(n,a){if(!this.renderer)return;const r=this.renderer.getContext(),o=r.getParameter(r.VERTEX_ARRAY_BINDING),u=r.getParameter(r.CURRENT_PROGRAM),f=u?r.getProgramParameter(u,r.DELETE_STATUS):!1;if(r.bindVertexArray(this.distancesTransformFeedback.vao),r.useProgram(this.distancesTransformFeedback.program),r.enable(r.RASTERIZER_DISCARD),this.dynamicMode)for(let m=0;m<this.scenes.length;m++)if(e.copy(this.getScene(m).transform),e.premultiply(n),this.integerBasedDistancesComputation){const g=Wn.getIntegerMatrixArray(e),_=[g[2],g[6],g[10],g[14]];r.uniform4i(this.distancesTransformFeedback.transformsLocs[m],_[0],_[1],_[2],_[3])}else r.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[m],!1,e.elements);else if(this.integerBasedDistancesComputation){const m=Wn.getIntegerMatrixArray(n),g=[m[2],m[6],m[10]];r.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,g[0],g[1],g[2])}else{const m=[n.elements[2],n.elements[6],n.elements[10]];r.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,m[0],m[1],m[2])}r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0)),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),r.beginTransformFeedback(r.POINTS),r.drawArrays(r.POINTS,0,this.getSplatCount()),r.endTransformFeedback(),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,null),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),r.disable(r.RASTERIZER_DISCARD);const d=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);r.flush();const h=new Promise(m=>{const g=()=>{if(this.disposed)m();else switch(r.clientWaitSync(d,0,0)){case r.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(g),this.computeDistancesOnGPUSyncTimeout;case r.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,r.deleteSync(d);const E=r.getParameter(r.VERTEX_ARRAY_BINDING);r.bindVertexArray(this.distancesTransformFeedback.vao),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.getBufferSubData(r.ARRAY_BUFFER,0,a),r.bindBuffer(r.ARRAY_BUFFER,null),E&&r.bindVertexArray(E),m()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(g)});return u&&f!==!0&&r.useProgram(u),o&&r.bindVertexArray(o),h}})();getLocalSplatParameters(e,n,a){a==null&&(a=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(e),n.localIndex=this.getSplatLocalIndex(e),n.sceneTransform=a?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,n,a,r,o,u,f,d=0,h=0,m=1,g,_,v=0,y){const E=new V;E.x=void 0,E.y=void 0,this.splatRenderMode===qa.ThreeD?E.z=void 0:E.z=1;const x=new dt;let A=0,T=this.scenes.length-1;y!=null&&y>=0&&y<=this.scenes.length&&(A=y,T=y);for(let w=A;w<=T;w++){f==null&&(f=!this.dynamicMode);const D=this.getScene(w),R=D.splatBuffer;let B;if(f&&(this.getSceneTransform(w,x),B=x),e&&R.fillSplatCovarianceArray(e,B,g,_,v,d),n||a){if(!n||!a)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');R.fillSplatScaleRotationArray(n,a,B,g,_,v,h,E)}r&&R.fillSplatCenterArray(r,B,g,_,v),o&&R.fillSplatColorArray(o,D.minimumAlpha,g,_,v),u&&R.fillSphericalHarmonicsArray(u,this.minSphericalHarmonicsDegree,B,g,_,v,m),v+=R.getSplatCount()}}getIntegerCenters(e,n,a=!1){const r=n-e+1,o=new Float32Array(r*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,e);let u,f=a?4:3;u=new Int32Array(r*f);for(let d=0;d<r;d++){for(let h=0;h<3;h++)u[d*f+h]=Math.round(o[d*3+h]*1e3);a&&(u[d*f+3]=1e3)}return u}getFloatCenters(e,n,a=!1){const r=n-e+1,o=new Float32Array(r*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,e),!a)return o;let u=new Float32Array(r*4);for(let f=0;f<r;f++){for(let d=0;d<3;d++)u[f*4+d]=o[f*3+d];u[f*4+3]=1}return u}getSplatCenter=(function(){const e={};return function(n,a,r){this.getLocalSplatParameters(n,e,r),e.splatBuffer.getSplatCenter(e.localIndex,a,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){const e={},n=new V;return function(a,r,o,u){this.getLocalSplatParameters(a,e,u),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===qa.TwoD&&(n.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,r,o,e.sceneTransform,n)}})();getSplatColor=(function(){const e={};return function(n,a){this.getLocalSplatParameters(n,e),e.splatBuffer.getSplatColor(e.localIndex,a)}})();getSceneTransform(e,n){const a=this.getScene(e);a.updateTransform(this.dynamicMode),n.copy(a.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){const n=e.elements,a=[];for(let r=0;r<16;r++)a[r]=Math.round(n[r]*1e3);return a}computeBoundingBox(e=!1,n){let a=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");a=this.scenes[n].splatBuffer.getSplatCount()}const r=new Float32Array(a*3);this.fillSplatDataArrays(null,null,null,r,null,null,e,void 0,void 0,void 0,void 0,n);const o=new V,u=new V;for(let f=0;f<a;f++){const d=f*3,h=r[d],m=r[d+1],g=r[d+2];(f===0||h<o.x)&&(o.x=h),(f===0||m<o.y)&&(o.y=m),(f===0||g<o.z)&&(o.z=g),(f===0||h>u.x)&&(u.x=h),(f===0||m>u.y)&&(u.y=m),(f===0||g>u.z)&&(u.z=g)}return new pa(o,u)}}var kw="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Fv="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",Xw="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",Ww="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function qw(l){let e,n,a,r,o,u,f,d,h,m,g,_,v,y,E,x,A,T,w,D;function R(B,b,O,C,U,N,k){const X=performance.now();if(!a&&(new Uint32Array(n,f,U.byteLength/D.BytesPerInt).set(U),new Float32Array(n,m,k.byteLength/D.BytesPerFloat).set(k),C)){let Z;r?Z=new Int32Array(n,g,N.byteLength/D.BytesPerInt):Z=new Float32Array(n,g,N.byteLength/D.BytesPerFloat),Z.set(N)}x||(x=new Uint32Array(T)),new Float32Array(n,E,16).set(O),new Uint32Array(n,v,T).set(x),e.exports.sortIndexes(f,y,g,_,v,E,d,h,m,T,B,b,u,C,r,o);const W={sortDone:!0,splatSortCount:B,splatRenderCount:b,sortTime:0};if(!a){const P=new Uint32Array(n,d,b);(!A||A.length<b)&&(A=new Uint32Array(b)),A.set(P),W.sortedIndexes=A}const Q=performance.now();W.sortTime=Q-X,l.postMessage(W)}l.onmessage=B=>{if(B.data.centers)centers=B.data.centers,sceneIndexes=B.data.sceneIndexes,r?new Int32Array(n,y+B.data.range.from*D.BytesPerInt*4,B.data.range.count*4).set(new Int32Array(centers)):new Float32Array(n,y+B.data.range.from*D.BytesPerFloat*4,B.data.range.count*4).set(new Float32Array(centers)),o&&new Uint32Array(n,h+B.data.range.from*4,B.data.range.count).set(new Uint32Array(sceneIndexes)),w=B.data.range.from+B.data.range.count;else if(B.data.sort){const b=Math.min(B.data.sort.splatRenderCount||0,w),O=Math.min(B.data.sort.splatSortCount||0,w),C=B.data.sort.usePrecomputedDistances;let U,N,k;a||(U=B.data.sort.indexesToSort,k=B.data.sort.transforms,C&&(N=B.data.sort.precomputedDistances)),R(O,b,B.data.sort.modelViewProj,C,U,N,k)}else if(B.data.init){D=B.data.init.Constants,u=B.data.init.splatCount,a=B.data.init.useSharedMemory,r=B.data.init.integerBasedSort,o=B.data.init.dynamicMode,T=B.data.init.distanceMapRange,w=0;const b=r?D.BytesPerInt*4:D.BytesPerFloat*4,O=new Uint8Array(B.data.init.sorterWasmBytes),C=16*D.BytesPerFloat,U=u*D.BytesPerInt,N=u*b,k=C,X=r?u*D.BytesPerInt:u*D.BytesPerFloat,W=u*D.BytesPerInt,Q=u*D.BytesPerInt,P=r?T*D.BytesPerInt*2:T*D.BytesPerFloat*2,H=o?u*D.BytesPerInt:0,Z=o?D.MaxScenes*C:0,re=D.MemoryPageSize*32,he=U+N+k+X+W+P+Q+H+Z+re,z=Math.floor(he/D.MemoryPageSize)+1,ie={module:{},env:{memory:new WebAssembly.Memory({initial:z,maximum:z,shared:!0})}};WebAssembly.compile(O).then(pe=>WebAssembly.instantiate(pe,ie)).then(pe=>{e=pe,f=0,y=f+U,E=y+N,g=E+k,_=g+X,v=_+W,d=v+P,h=d+Q,m=h+H,n=ie.env.memory.buffer,a?l.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:n,indexesToSortOffset:f,sortedIndexesBuffer:n,sortedIndexesOffset:d,precomputedDistancesBuffer:n,precomputedDistancesOffset:g,transformsBuffer:n,transformsOffset:m}):l.postMessage({sortSetupPhase1Complete:!0})})}}}function Yw(l,e,n,a,r,o=Jt.DefaultSplatSortDistanceMapPrecision){const u=new Worker(URL.createObjectURL(new Blob(["(",qw.toString(),")(self)"],{type:"application/javascript"})));let f=kw;const d=om()?yA():null;!n&&!e?(f=Fv,d&&d.major<=16&&d.minor<4&&(f=Ww)):n?e||d&&d.major<=16&&d.minor<4&&(f=Xw):f=Fv;const h=atob(f),m=new Uint8Array(h.length);for(let g=0;g<h.length;g++)m[g]=h.charCodeAt(g);return u.postMessage({init:{sorterWasmBytes:m.buffer,splatCount:l,useSharedMemory:e,integerBasedSort:a,dynamicMode:r,distanceMapRange:1<<o,Constants:{BytesPerFloat:Jt.BytesPerFloat,BytesPerInt:Jt.BytesPerInt,MemoryPageSize:Jt.MemoryPageSize,MaxScenes:Jt.MaxScenes}}}),u}const fo={None:0,VR:1,AR:2};class bo{static createButton(e,n={}){const a=document.createElement("button");function r(){let h=null;async function m(v){v.addEventListener("end",g),await e.xr.setSession(v),a.textContent="EXIT VR",h=v}function g(){h.removeEventListener("end",g),a.textContent="ENTER VR",h=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="ENTER VR";const _={...n,optionalFeatures:["local-floor","bounded-floor","layers",...n.optionalFeatures||[]]};a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){h===null?navigator.xr.requestSession("immersive-vr",_).then(m):(h.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",_).then(m).catch(v=>{console.warn(v)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",_).then(m).catch(v=>{console.warn(v)})}function o(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function u(){o(),a.textContent="VR NOT SUPPORTED"}function f(h){o(),console.warn("Exception when trying to call xr.isSessionSupported",h),a.textContent="VR NOT ALLOWED"}function d(h){h.style.position="absolute",h.style.bottom="20px",h.style.padding="12px 6px",h.style.border="1px solid #fff",h.style.borderRadius="4px",h.style.background="rgba(0,0,0,0.1)",h.style.color="#fff",h.style.font="normal 13px sans-serif",h.style.textAlign="center",h.style.opacity="0.5",h.style.outline="none",h.style.zIndex="999"}if("xr"in navigator)return a.id="VRButton",a.style.display="none",d(a),navigator.xr.isSessionSupported("immersive-vr").then(function(h){h?r():u(),h&&bo.xrSessionIsGranted&&a.click()}).catch(f),a;{const h=document.createElement("a");return window.isSecureContext===!1?(h.href=document.location.href.replace(/^http:/,"https:"),h.innerHTML="WEBXR NEEDS HTTPS"):(h.href="https://immersiveweb.dev/",h.innerHTML="WEBXR NOT AVAILABLE"),h.style.left="calc(50% - 90px)",h.style.width="180px",h.style.textDecoration="none",d(h),h}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{bo.xrSessionIsGranted=!0})}}}bo.xrSessionIsGranted=!1;bo.registerSessionGrantedListener();class Qw{static createButton(e,n={}){const a=document.createElement("button");function r(){if(n.domOverlay===void 0){const _=document.createElement("div");_.style.display="none",document.body.appendChild(_);const v=document.createElementNS("http://www.w3.org/2000/svg","svg");v.setAttribute("width",38),v.setAttribute("height",38),v.style.position="absolute",v.style.right="20px",v.style.top="20px",v.addEventListener("click",function(){h.end()}),_.appendChild(v);const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),y.setAttribute("stroke","#fff"),y.setAttribute("stroke-width",2),v.appendChild(y),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:_}}let h=null;async function m(_){_.addEventListener("end",g),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(_),a.textContent="STOP AR",n.domOverlay.root.style.display="",h=_}function g(){h.removeEventListener("end",g),a.textContent="START AR",n.domOverlay.root.style.display="none",h=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START AR",a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){h===null?navigator.xr.requestSession("immersive-ar",n).then(m):(h.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(m).catch(_=>{console.warn(_)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(m).catch(_=>{console.warn(_)})}function o(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function u(){o(),a.textContent="AR NOT SUPPORTED"}function f(h){o(),console.warn("Exception when trying to call xr.isSessionSupported",h),a.textContent="AR NOT ALLOWED"}function d(h){h.style.position="absolute",h.style.bottom="20px",h.style.padding="12px 6px",h.style.border="1px solid #fff",h.style.borderRadius="4px",h.style.background="rgba(0,0,0,0.1)",h.style.color="#fff",h.style.font="normal 13px sans-serif",h.style.textAlign="center",h.style.opacity="0.5",h.style.outline="none",h.style.zIndex="999"}if("xr"in navigator)return a.id="ARButton",a.style.display="none",d(a),navigator.xr.isSessionSupported("immersive-ar").then(function(h){h?r():u()}).catch(f),a;{const h=document.createElement("a");return window.isSecureContext===!1?(h.href=document.location.href.replace(/^http:/,"https:"),h.innerHTML="WEBXR NEEDS HTTPS"):(h.href="https://immersiveweb.dev/",h.innerHTML="WEBXR NOT AVAILABLE"),h.style.left="calc(50% - 90px)",h.style.width="180px",h.style.textDecoration="none",d(h),h}}}const Zh={Always:0,Never:2},jw=50,Kw=.75,Zw=15e5,Jw=10,$w=2.5,e2=60;class po{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new V().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new V().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new V().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||fo.None,this.webXRMode!==fo.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||Zh.Always,this.sceneRevealMode=e.sceneRevealMode||Ol.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||vo.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,om()){const a=yA();a.major<17&&(this.enableSIMDInSort=!1),a.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=qa.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||Jt.DefaultSplatSortDistanceMapPrecision;const n=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=un(this.splatSortDistanceMapPrecision,10,n),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new Cw,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new V,this.nextCameraTarget=new V,this.mousePosition=new ke,this.mouseDownPosition=new ke,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new Am(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new Aw(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new xw(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Wn(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new uA,this.sceneHelper=new Fl(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new ke;this.getRenderDimensions(e),this.perspectiveCamera=new Ri(jw,e.x/e.y,.1,1e3),this.orthographicCamera=new Zu(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new ke;this.getRenderDimensions(e),this.renderer=new vA({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new It(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===fo.VR?this.rootElement.appendChild(bo.createButton(this.renderer,e)):this.webXRMode===fo.AR&&this.rootElement.appendChild(Qw.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",n=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",n=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===fo.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Iu(this.camera,this.renderer.domElement):this.perspectiveControls=new Iu(this.camera,this.renderer.domElement):(this.perspectiveControls=new Iu(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Iu(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===fo.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){const e=new V,n=new dt,a=new dt;return function(r){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),n.makeRotationAxis(e,Math.PI/128),a.makeRotationAxis(e,-Math.PI/128),r.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(n);break;case"ArrowRight":this.camera.up.transformDirection(a);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=co()}onMouseUp=(function(){const e=new ke;return function(n){e.copy(this.mousePosition).sub(this.mouseDownPosition),co()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(n)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){const e=new ke,n=new V,a=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),a.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,a),a.length>0)){const o=a[0].origin;n.copy(o).sub(this.camera.position),n.length()>Kw&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(o),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=co())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const n=this.camera,a=e?this.orthographicCamera:this.perspectiveCamera;if(a.position.copy(n.position),a.up.copy(n.up),a.rotation.copy(n.rotation),a.quaternion.copy(n.quaternion),a.matrix.copy(n.matrix),this.camera=a,this.controls){const r=f=>{f.saveState(),f.reset()},o=this.controls,u=e?this.orthographicControls:this.perspectiveControls;r(u),r(o),u.target.copy(o.target),e?po.setCameraZoomFromPosition(a,n,o):po.setCameraPositionFromZoom(a,n,u),this.controls=u,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){const e=new V;return function(n,a,r){const o=1/(a.zoom*.001);e.copy(r.target).sub(n.position).normalize().multiplyScalar(o).negate(),n.position.copy(r.target).add(e)}})();static setCameraZoomFromPosition=(function(){const e=new V;return function(n,a,r){const o=e.copy(r.target).sub(a.position).length();n.zoom=1/(o*.001)}})();updateSplatMesh=(function(){const e=new ke;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const a=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,r=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,o=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,u=this.focalAdjustment*o,f=1/u;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,a*u,r*u,this.camera.isOrthographicCamera,this.camera.zoom||1,f)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const a=this.renderer.xr.getCamera().projectionMatrix.elements[0],r=this.camera.projectionMatrix.elements[0];e.x*=r/a}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,n={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");n.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),n.progressiveLoad=!1);const a=n.format!==void 0&&n.format!==null?n.format:Cv(e),r=po.isProgressivelyLoadable(a)&&n.progressiveLoad,o=n.showLoadingUI!==void 0&&n.showLoadingUI!==null?n.showLoadingUI:!0;let u=null;o&&(this.loadingSpinner.removeAllTasks(),u=this.loadingSpinner.addTask("Downloading..."));const f=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},d=(E,x,A)=>{if(o)if(A===vn.Downloading)if(E==100)this.loadingSpinner.setMessageForTask(u,"Download complete!");else if(r)this.loadingSpinner.setMessageForTask(u,"Downloading splats...");else{const T=x?`: ${x}`:"...";this.loadingSpinner.setMessageForTask(u,`Downloading${T}`)}else A===vn.Processing&&this.loadingSpinner.setMessageForTask(u,"Processing splats...")};let h=!1,m=0;const g=(E,x)=>{o&&((E&&r||x&&!r)&&(this.loadingSpinner.removeTask(u),!x&&!h&&this.loadingProgressBar.show()),r&&(x?(h=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(m)))},_=(E,x,A)=>{m=E,d(E,x,A),n.onProgress&&n.onProgress(E,x,A)},v=(E,x,A)=>{!r&&n.onProgress&&n.onProgress(0,"0%",vn.Processing);const T={rotation:n.rotation||n.orientation,position:n.position,scale:n.scale,splatAlphaRemovalThreshold:n.splatAlphaRemovalThreshold};return this.addSplatBuffers([E],[T],A,x&&o,o,r,r).then(()=>{!r&&n.onProgress&&n.onProgress(100,"100%",vn.Processing),g(x,A)})};return(r?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,a,n.splatAlphaRemovalThreshold,v.bind(this),_,f.bind(this),n.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,n,a,r,o,u,f){const d=this.downloadSplatSceneToSplatBuffer(e,a,o,!1,void 0,n,f),h=kh(d.abortHandler);return d.then(m=>(this.removeSplatSceneDownloadPromise(d),r(m,!0,!0).then(()=>{h.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(m=>{u&&u(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d),h.reject(this.updateError(m,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(h.promise),h.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,n,a,r,o,u,f){let d=0,h=!1;const m=[],g=()=>{if(m.length>0&&!h&&!this.isDisposingOrDisposed()){h=!0;const x=m.shift();r(x.splatBuffer,x.firstBuild,x.finalBuild).then(()=>{h=!1,x.firstBuild?y.resolve():x.finalBuild&&(E.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),m.length>0&&Di(()=>g())})}},_=(x,A)=>{this.isDisposingOrDisposed()||(A||m.length===0||x.getSplatCount()>m[0].splatBuffer.getSplatCount())&&(m.push({splatBuffer:x,firstBuild:d===0,finalBuild:A}),d++,g())},v=this.downloadSplatSceneToSplatBuffer(e,a,o,!0,_,n,f),y=kh(v.abortHandler),E=kh();return this.addSplatSceneDownloadPromise(v),this.setSplatSceneDownloadAndBuildPromise(E.promise),v.then(()=>{this.removeSplatSceneDownloadPromise(v)}).catch(x=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(v);const A=this.updateError(x,"Viewer::addSplatScene -> Could not load one or more scenes");y.reject(A),u&&u(A)}),y.promise}addSplatScenes(e,n=!0,a=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const r=e.length,o=[];let u;n&&(this.loadingSpinner.removeAllTasks(),u=this.loadingSpinner.addTask("Downloading..."));const f=(g,_,v,y)=>{o[g]=_;let E=0;for(let x=0;x<r;x++)E+=o[x]||0;E=E/r,v=`${E.toFixed(2)}%`,n&&y===vn.Downloading&&this.loadingSpinner.setMessageForTask(u,E==100?"Download complete!":`Downloading: ${v}`),a&&a(E,v,y)},d=[],h=[];for(let g=0;g<e.length;g++){const _=e[g],v=_.format!==void 0&&_.format!==null?_.format:Cv(_.path),y=this.downloadSplatSceneToSplatBuffer(_.path,_.splatAlphaRemovalThreshold,f.bind(this,g),!1,void 0,v,_.headers);d.push(y),h.push(y.promise)}const m=new Bs((g,_)=>{Promise.all(h).then(v=>{n&&this.loadingSpinner.removeTask(u),a&&a(0,"0%",vn.Processing),this.addSplatBuffers(v,e,!0,n,n,!1,!1).then(()=>{a&&a(100,"100%",vn.Processing),this.clearSplatSceneDownloadAndBuildPromise(),g()})}).catch(v=>{n&&this.loadingSpinner.removeTask(u),this.clearSplatSceneDownloadAndBuildPromise(),_(this.updateError(v,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(m)})},g=>{for(let _ of d)_.abort(g)});return this.addSplatSceneDownloadPromise(m),this.setSplatSceneDownloadAndBuildPromise(m),m}downloadSplatSceneToSplatBuffer(e,n=1,a=void 0,r=!1,o=void 0,u,f){try{if(u===mi.Splat||u===mi.KSplat||u===mi.Ply){const d=r?!1:this.optimizeSplatData;if(u===mi.Splat)return vm.loadFromURL(e,a,r,o,n,this.inMemoryCompressionLevel,d,f);if(u===mi.KSplat)return Ll.loadFromURL(e,a,r,o,f);if(u===mi.Ply)return Sm.loadFromURL(e,a,r,o,n,this.inMemoryCompressionLevel,d,this.sphericalHarmonicsDegree,f)}else if(u===mi.Spz)return _m.loadFromURL(e,a,n,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,f)}catch(d){throw this.updateError(d,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===mi.Splat||e===mi.KSplat||e===mi.Ply}addSplatBuffers=(function(){return function(e,n=[],a=!0,r=!0,o=!0,u=!1,f=!1,d=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let h=null;const m=()=>{h!==null&&(this.loadingSpinner.removeTask(h),h=null)};return this.splatRenderReady=!1,new Promise(g=>{r&&(h=this.loadingSpinner.addTask("Processing splats...")),Di(()=>{if(this.isDisposingOrDisposed())g();else{const _=this.addSplatBuffersToMesh(e,n,a,o,u,d),v=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==v&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:_.centers.buffer,sceneIndexes:_.sceneIndexes.buffer,range:{from:_.from,to:_.to,count:_.count}}),(!this.sortWorker&&v>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(E=>{!this.sortWorker||!E?(this.splatRenderReady=!0,m(),g()):(f?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{m(),g()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(n,a,r=!0,o=!1,u=!1,f=!0){if(this.isDisposingOrDisposed())return;let d=[],h=[];u||(d=this.splatMesh.scenes.map(v=>v.splatBuffer)||[],h=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(v=>v):[]),d.push(...n),h.push(...a),this.renderer&&this.splatMesh.setRenderer(this.renderer);const m=v=>{if(this.isDisposingOrDisposed())return;const y=this.splatMesh.getSplatCount();o&&y>=Zw&&!v&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},g=v=>{this.isDisposingOrDisposed()||v&&e&&(this.loadingSpinner.removeTask(e),e=null)},_=this.splatMesh.build(d,h,!0,r,m,g,f);return r&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),_}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(n=>{const a=this.integerBasedSort?Int32Array:Float32Array,r=e.getSplatCount(),o=e.getMaxSplatCount();this.sortWorker=Yw(o,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=u=>{if(u.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,u.data.splatRenderCount);else{const f=new Uint32Array(u.data.sortedIndexes.buffer,0,u.data.splatRenderCount);this.splatMesh.updateRenderIndexes(f,u.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=u.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(f=>{f()}),this.runAfterNextSort.length=0)}else if(u.data.sortCanceled)this.sortRunning=!1;else if(u.data.sortSetupPhase1Complete){this.logLevel>=vo.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(u.data.sortedIndexesBuffer,u.data.sortedIndexesOffset,o),this.sortWorkerIndexesToSort=new Uint32Array(u.data.indexesToSortBuffer,u.data.indexesToSortOffset,o),this.sortWorkerPrecomputedDistances=new a(u.data.precomputedDistancesBuffer,u.data.precomputedDistancesOffset,o),this.sortWorkerTransforms=new Float32Array(u.data.transformsBuffer,u.data.transformsOffset,Jt.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(o),this.sortWorkerPrecomputedDistances=new a(o),this.sortWorkerTransforms=new Float32Array(Jt.MaxScenes*16));for(let f=0;f<r;f++)this.sortWorkerIndexesToSort[f]=f;if(this.sortWorker.maxSplatCount=o,this.logLevel>=vo.Info){console.log("Sorting web worker ready.");const f=this.splatMesh.getSplatDataTextures(),d=f.covariances.size,h=f.centerColors.size;console.log("Covariances texture size: "+d.x+" x "+d.y),console.log("Centers/colors texture size: "+h.x+" x "+h.y)}n()}}})}updateError(e,n){return e instanceof xA?e:e instanceof Wu?new Error("File type or server does not support progressive loading."):n?new Error(n):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,n=!0){return this.removeSplatScenes([e],n)}removeSplatScenes(e,n=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let a;return this.splatSceneRemovalPromise=new Promise((r,o)=>{let u;n&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),u=this.loadingSpinner.addTask("Removing splat scene..."));const f=()=>{n&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(u))},d=m=>{f(),this.splatSceneRemovalPromise=null,m?o(m):r()},h=()=>this.isDisposingOrDisposed()?(d(),!0):!1;a=this.sortPromise||Promise.resolve(),a.then(()=>{if(h())return;const m=[],g=[],_=[];for(let v=0;v<this.splatMesh.scenes.length;v++){let y=!1;for(let E of e)if(E===v){y=!0;break}if(!y){const E=this.splatMesh.scenes[v];m.push(E.splatBuffer),g.push(this.splatMesh.sceneOptions[v]),_.push({position:E.position.clone(),quaternion:E.quaternion.clone(),scale:E.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Ol.Instant,this.createSplatMesh(),this.addSplatBuffers(m,g,!0,!1,!0).then(()=>{h()||(f(),this.splatMesh.scenes.forEach((v,y)=>{v.position.copy(_[y].position),v.quaternion.copy(_[y].quaternion),v.scale.copy(_[y].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(h()){this.splatRenderReady=!0;return}a=this.sortPromise||Promise.resolve(),a.then(()=>{this.splatRenderReady=!0,d()})}))}).catch(v=>{d(v)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],n=[];for(let a in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(a)){const r=this.splatSceneDownloadPromises[a];n.push(r),e.push(r.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),n.forEach(a=>{a.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0;const n=new V,a=new nn,r=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let o=!1,u=!1;if(this.camera){const f=this.camera.position,d=this.camera.quaternion;u=Math.abs(f.x-n.x)>r||Math.abs(f.y-n.y)>r||Math.abs(f.z-n.z)>r||Math.abs(d.x-a.x)>r||Math.abs(d.y-a.y)>r||Math.abs(d.z-a.z)>r||Math.abs(d.w-a.w)>r}return o=this.renderMode!==Zh.Never&&(e===0||this.splatMesh.visibleRegionChanging||u||this.renderMode===Zh.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(n.copy(this.camera.position),a.copy(this.camera.quaternion)),e++,o}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=a=>{for(let r of a.children)if(r.visible)return!0;return!1},n=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=n}})();update(e,n){this.dropInMode&&this.updateForDropInMode(e,n),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&po.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,n){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=n,this.controls&&(this.controls.object=n),this.init()}updateFPS=(function(){let e=co(),n=0;return function(){if(this.consecutiveRenderFrames>e2){const a=co();a-e>=1?(this.currentFPS=n,n=0,e=a):n++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){const e=new ke,n=new ke;let a;return function(){this.usingExternalCamera||(this.renderer.getSize(n),(a===void 0||a!==this.camera.isOrthographicCamera||n.x!==e.x||n.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-n.x/2,this.camera.right=n.x/2,this.camera.top=n.y/2,this.camera.bottom=-n.y/2):this.camera.aspect=n.x/n.y,this.camera.updateProjectionMatrix(),e.copy(n),a=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){const n=co();e||(e=n);const a=n-e;this.updateCameraTransition(n),this.updateFocusMarker(a),e=n}})();updateCameraTransition=(function(){let e=new V,n=new V,a=new V;return function(r){if(this.transitioningCameraTarget){n.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),a.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const o=Math.acos(n.dot(a)),f=(o/(Math.PI/3)*.65+.3)/o*(r-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,f),this.camera.lookAt(e),this.controls.target.copy(e),f>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){const e=new ke;let n=!1;return function(a){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const r=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let o=Math.min(r+Jw*a,1);this.sceneHelper.setFocusMarkerOpacity(o),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),n=!0,this.forceRenderNextFrame()}else{let r;if(n?r=1:r=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),r>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let o=Math.max(r-$w*a,0);this.sceneHelper.setFocusMarkerOpacity(o),o===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}r>0&&this.forceRenderNextFrame(),n=!1}}})();updateMeshCursor=(function(){const e=[],n=new ke;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(n),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,n),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){const e=new ke;return function(){if(!this.showInfo)return;const n=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const a=this.controls?this.controls.target:null,r=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,o=n>0?this.splatRenderCount/n*100:0;this.infoPanel.update(e,this.camera.position,a,this.camera.up,this.camera.isOrthographicCamera,r,this.currentFPS||"N/A",n,this.splatRenderCount,o,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){const e=new dt,n=[],a=new V(0,0,-1),r=new V(0,0,-1),o=new V,u=new V,f=[],d=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(h=!1,m=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let g=0,_=0,v=!1,y=!1;if(r.set(0,0,-1).applyQuaternion(this.camera.quaternion),g=r.dot(a),_=u.copy(this.camera.position).sub(o).length(),!h&&!this.splatMesh.dynamicMode&&f.length===0&&(g<=.99&&(v=!0),_>=1&&(y=!0),!v&&!y))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:E,shouldSortAll:x}=this.gatherSceneNodesForSort();x=x||m,this.splatRenderCount=E,e.copy(this.camera.matrixWorld).invert();const A=this.perspectiveCamera||this.camera;e.premultiply(A.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let T=Promise.resolve(!0);return this.gpuAcceleratedSort&&(f.length<=1||f.length%2===0)&&(T=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),T.then(()=>{if(f.length===0)if(this.splatMesh.dynamicMode||x)f.push(this.splatRenderCount);else{for(let R of d)if(g<R.angleThreshold){for(let B of R.sortFractions)f.push(Math.floor(this.splatRenderCount*B));break}f.push(this.splatRenderCount)}let w=Math.min(f.shift(),this.splatRenderCount);this.splatSortCount=w,n[0]=this.camera.position.x,n[1]=this.camera.position.y,n[2]=this.camera.position.z;const D={modelViewProj:e.elements,cameraPosition:n,splatRenderCount:this.splatRenderCount,splatSortCount:w,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(D.indexesToSort=this.sortWorkerIndexesToSort,D.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(D.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(R=>{this.sortPromiseResolver=R}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(R=>{this.sortWorker.postMessage(R)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:D}),f.length===0&&(o.copy(this.camera.position),a.copy(r)),!0}),T}})();gatherSceneNodesForSort=(function(){const e=[];let n=null;const a=new V,r=new V,o=new V,u=new dt,f=new dt,d=new dt,h=new V,m=new V(0,0,-1),g=new V,_=v=>g.copy(v.max).sub(v.min).length();return function(v=!1){this.getRenderDimensions(h);const y=h.y/2/Math.tan(this.camera.fov/2*em.DEG2RAD),E=Math.atan(h.x/2/y),x=Math.atan(h.y/2/y),A=Math.cos(E),T=Math.cos(x),w=this.splatMesh.getSplatTree();if(w){f.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||f.multiply(this.splatMesh.matrixWorld);let D=0,R=0;for(let b=0;b<w.subTrees.length;b++){const O=w.subTrees[b];u.copy(f),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(b,d),u.multiply(d));const C=O.nodesWithIndexes.length;for(let U=0;U<C;U++){const N=O.nodesWithIndexes[U];if(!N.data||!N.data.indexes||N.data.indexes.length===0)continue;o.copy(N.center).applyMatrix4(u);const k=o.length();o.normalize(),a.copy(o).setX(0).normalize(),r.copy(o).setY(0).normalize();const X=m.dot(r),W=m.dot(a),Q=_(N),P=W<T-.6,H=X<A-.6;!v&&(H||P)&&k>Q||(R+=N.data.indexes.length,e[D]=N,N.data.distanceToNode=k,D++)}}e.length=D,e.sort((b,O)=>b.data.distanceToNode<O.data.distanceToNode?-1:1);let B=R*Jt.BytesPerInt;for(let b=0;b<D;b++){const O=e[b],C=O.data.indexes.length,U=C*Jt.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,B-U,C).set(O.data.indexes),B-=U}return{splatRenderCount:R,shouldSortAll:!1}}else{const D=this.splatMesh.getSplatCount();if(!n||n.length!==D){n=new Uint32Array(D);for(let R=0;R<D;R++)n[R]=R}return this.sortWorkerIndexesToSort.set(n),{splatRenderCount:D,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}}function t2(){const l=Vi.useRef(null),e=Vi.useRef(null),n=Vi.useRef(null),a=Vi.useRef(null),r=Vi.useRef(null),o=Vi.useRef(null),[u,f]=Vi.useState(!1),[d,h]=Vi.useState(0),[m,g]=Vi.useState(0),[_,v]=Vi.useState(0);Vi.useEffect(()=>{if(!l.current||o.current)return;const x=new uA;x.background=new It("#001524");const A=new Ri(65,window.innerWidth/window.innerHeight,.1,1e3);A.position.set(0,2,5),r.current=A;const T=new vA({antialias:!0});T.setSize(window.innerWidth,window.innerHeight),T.setPixelRatio(window.devicePixelRatio),l.current.appendChild(T.domElement),o.current=T;const w=new rR(A,T.domElement);w.enableDamping=!0,w.dampingFactor=.05,w.screenSpacePanning=!1,w.minDistance=.1,w.maxDistance=500,a.current=w;const D=new po({selfDrivenMode:!1,renderer:T,camera:A,threeScene:x,useBuiltInControls:!1,ignoreDevicePixelRatio:!1});n.current=D;let R=performance.now(),B=0;const b=()=>{e.current=requestAnimationFrame(b);const U=performance.now();B++,U-R>=1e3&&(v(B),B=0,R=U,n.current&&g(n.current.getSplatCount())),w.update(),D.update(),D.render()};b(),(async()=>{f(!0);try{await D.addSplatScene("https://raw.githubusercontent.com/mkkellogg/GaussianSplats3D/main/docs/assets/data/garden.ply",{showLoadingUI:!1,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],onProgress:(U,N)=>{h(U)}}),console.log("Splat scene loaded"),g(D.getSplatCount())}catch(U){console.error("Error loading splat scene:",U)}f(!1)})();const C=()=>{if(!r.current||!o.current)return;const U=window.innerWidth,N=window.innerHeight;r.current.aspect=U/N,r.current.updateProjectionMatrix(),o.current.setSize(U,N),n.current&&n.current.resize()};return window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C),e.current&&cancelAnimationFrame(e.current),n.current&&n.current.dispose(),T.dispose(),l.current&&(l.current.innerHTML=""),o.current=null}},[]);const y=()=>{a.current&&r.current&&(a.current.reset(),r.current.position.set(0,2,5),a.current.target.set(0,0,0),a.current.update())},E=()=>{a.current&&r.current&&(r.current.position.set(-2,1.5,-3),a.current.target.set(0,1,0),a.current.update())};return hn.jsxs("div",{className:"relative w-screen h-screen bg-[#001524] overflow-hidden font-mono text-white",children:[hn.jsx("div",{ref:l,className:"absolute inset-0 z-0"}),u&&hn.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm",children:[hn.jsx("div",{className:"text-2xl font-bold mb-4 text-cyan-400 animate-pulse",children:"Loading Scene..."}),hn.jsx("div",{className:"w-64 h-2 bg-gray-700 rounded-full overflow-hidden",children:hn.jsx("div",{className:"h-full bg-cyan-500 transition-all duration-200 ease-out",style:{width:`${d}%`}})}),hn.jsxs("div",{className:"mt-2 text-sm text-cyan-200",children:[Math.round(d),"%"]})]}),hn.jsxs("div",{className:"absolute top-4 left-4 z-10 p-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl min-w-[200px]",children:[hn.jsx("h2",{className:"text-xs uppercase tracking-wider text-slate-400 mb-2 border-b border-slate-700 pb-1",children:"Renderer Stats"}),hn.jsxs("div",{className:"flex justify-between items-center mb-1",children:[hn.jsx("span",{className:"text-sm text-slate-300",children:"FPS"}),hn.jsx("span",{className:"text-sm font-bold text-emerald-400",children:_})]}),hn.jsxs("div",{className:"flex justify-between items-center",children:[hn.jsx("span",{className:"text-sm text-slate-300",children:"Splats"}),hn.jsx("span",{className:"text-sm font-bold text-cyan-400",children:m.toLocaleString()})]})]}),hn.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4 p-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-700/50 shadow-2xl",children:[hn.jsx("button",{onClick:y,className:"px-6 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full transition-all hover:shadow-lg border border-slate-600 hover:border-cyan-500/50 active:scale-95",children:"Reset View"}),hn.jsx("button",{onClick:E,className:"px-6 py-2 text-sm font-medium bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95",children:"Frame Scene"})]}),hn.jsxs("div",{className:"absolute top-4 right-4 z-10 text-right pointer-events-none",children:[hn.jsx("h1",{className:"text-xl font-bold text-white/90",children:"Gaussian Splat Viewer"}),hn.jsx("p",{className:"text-xs text-white/40",children:"v1.0.0 • THREE.js • Vite"})]})]})}Wy.createRoot(document.getElementById("root")).render(hn.jsx(Oy.StrictMode,{children:hn.jsx(t2,{})}));
