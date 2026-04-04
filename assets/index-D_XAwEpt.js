var e=Object.defineProperty,t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return re(e.type,t,e.props)}function C(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(C(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function w(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:w,forEach:function(e,t,n){w(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return w(e,function(){t++}),t},toArray:function(e){return w(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return re(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return re(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=C,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.4`})),i=t(((e,t)=>{t.exports=r()})),a=t((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,C());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,te=-1,S=5,ne=-1;function re(){return g?!0:!(e.unstable_now()-ne<S)}function ie(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?C():ee=!1}}}var C;if(typeof y==`function`)C=function(){y(ie)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=ie,C=function(){oe.postMessage(null)}}else C=function(){_(ie,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,C()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),o=t(((e,t)=>{t.exports=a()})),s=t((e=>{var t=i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.4`})),c=t(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=t((e=>{var t=o(),n=i(),r=c();function a(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(a(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return f(i),e;if(o===r)return f(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),C=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function w(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?w(e.type)||`Memo`:t;case C:t=e._payload,e=e._init;try{return w(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function k(e){e[Ct]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(ue(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(a(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(a(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=_i(31,n,t,i),e.elementType=ae,e.lanes=o,e;case y:return Si(n.children,i,o,t);case b:s=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=o,e;case ne:return e=_i(13,n,t,i),e.elementType=ne,e.lanes=o,e;case re:return e=_i(19,n,t,i),e.elementType=re,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case ie:s=14;break a;case C:s=16,r=null;break a}s=29,n=Error(a(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-qe(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(a(519));function Ki(e){throw Qi(Di(Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,D($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(a(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function oa(e,t,n,r){e=null;for(var i=t,o=!1;i!==null;){if(!o){if(i.flags&524288)o=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(a(387));if(s=s.memoizedProps,s!==null){var c=i.type;jr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(s=i.alternate,s===null)throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(a(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(a(460)),Aa=Error(a(474)),ja=Error(a(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(a(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(a(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===C&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case C:return t=Fa(t),f(e,t,n)}if(ue(t)||ce(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===te)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case C:return n=Fa(n),p(e,t,n,r)}if(ue(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===te)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case C:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===te)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,s,c,l){if(c==null)throw Error(a(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===C&&Fa(l)===r.type){n(e,r.sibling),c=i(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=i(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case C:return o=Fa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(a(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===te)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(a(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,D(ao),D(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){D(uo),fo===e&&(fo=null),D(N)}var N=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(a(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(a(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(a(301));if(i+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(a(467)):Error(a(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===te)return la(e)}throw Error(a(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);jr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,i=R(),o=j;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var s=!jr((F||i).memoizedState,n);if(s&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(a(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(a(476));var i=As(e).queue;Ds(e,i,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(a(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),G===null)throw Error(a(349));q&127||Go(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(a(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(a(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(a(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(a(520),{cause:r});if(o=Di(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(a(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(a(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===S){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===ie){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=w(e)||e,Error(a(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,M,r),r!==o.cache&&aa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(a(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),k(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),xe(t),i=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(i,o)?r=null:s!==null&&Ud(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,o=ha(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,o=t.memoizedState,i.parent===r?(r=o.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return B(t),null}if(o=he.current,Yi(t))qi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(557));e[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(a(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(a(317));i[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(D(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,o=r.rendering,o===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return B(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=N.current,O(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(a(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&D(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:D(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&D(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(a(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(a(160));fl(o,s,i),U=null,ul=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:o=i.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,k(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,i).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=i.createElement(r),Pd(o,r,n),i.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=i.createElement(r),Pd(o,r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[gt]=e,k(o),r=o}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,i)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(a(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(a(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),o=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){i=Ou(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,i=4;break a}o=Ql,Ql=i,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=i,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(a(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,o|=ci,st(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(a(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=fi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,i),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:$(e,t,o,s,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(a(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(a(91));break;default:$(e,t,s,c,n,null)}$t(e,r,i,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(a(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,i);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(i in r)if(o=r[i],l=n[i],r.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,i,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(a(91));break;default:i!==o&&$(e,t,s,i,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(a(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(a(452));return e;case`head`:if(e=t.head,!e)throw Error(a(453));return e;case`body`:if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),k(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);k(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(a(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(i,e,n,s.state))),t&&r===null)throw Error(a(528,``));return s}if(t&&r!==null)throw Error(a(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),k(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,k(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),k(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var o=e.querySelector(jf(i));if(o)return t.state.loading|=4,t.instance=o,k(o),o;r=Mf(n),(i=mf.get(i))&&Rf(r,i),o=(e.ownerDocument||e).createElement(`link`),k(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(i=e.querySelector(Ff(o)))?(t.instance=i,k(i),i):(r=n,(i=mf.get(o))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),k(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(a(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,k(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),k(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(a(527,Lp,`19.2.4`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!s(e))throw Error(a(299));var n=!1,r=``,i=Qs,o=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,o,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),u=t(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=l()})),d=i(),f=u(),p=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),m=t(((e,t)=>{t.exports=p()})),h=m(),g=`grade2026`;function _({onLogin:e}){let[t,n]=(0,d.useState)(``),[r,i]=(0,d.useState)(``),[a,o]=(0,d.useState)(!1),[s,c]=(0,d.useState)(!1),l=(0,d.useRef)(null),u=(0,d.useCallback)(r=>{if(r.preventDefault(),!t.trim()){i(`パスワードを入力してください`),l.current?.focus();return}t===g?(c(!0),i(``),setTimeout(()=>e(),300)):(i(`パスワードが正しくありません`),o(!0),n(``),setTimeout(()=>{o(!1),l.current?.focus()},500))},[t,e]);return(0,h.jsxs)(`div`,{className:`min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4`,children:[(0,h.jsxs)(`div`,{className:`absolute inset-0 overflow-hidden pointer-events-none`,children:[(0,h.jsx)(`div`,{className:`absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl`}),(0,h.jsx)(`div`,{className:`absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl`})]}),(0,h.jsxs)(`div`,{className:`relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl transition-all duration-300 ${a?`animate-shake`:``} ${s?`scale-95 opacity-80`:``}`,children:[(0,h.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,h.jsx)(`div`,{className:`w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25`,children:(0,h.jsx)(`svg`,{className:`w-10 h-10 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253`})})}),(0,h.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-2 tracking-tight`,children:`INGUIDE`}),(0,h.jsxs)(`p`,{className:`text-blue-200/60 text-sm`,children:[`学習コンテンツにアクセスするには`,(0,h.jsx)(`br`,{}),`パスワードを入力してください`]})]}),(0,h.jsxs)(`form`,{onSubmit:u,className:`space-y-5`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`label`,{htmlFor:`password`,className:`block text-sm font-medium text-blue-200/80 mb-2`,children:`パスワード`}),(0,h.jsxs)(`div`,{className:`relative`,children:[(0,h.jsx)(`div`,{className:`absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none`,children:(0,h.jsx)(`svg`,{className:`w-4 h-4 text-white/30`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`})})}),(0,h.jsx)(`input`,{ref:l,id:`password`,type:`password`,value:t,onChange:e=>{n(e.target.value),r&&i(``)},placeholder:`パスワードを入力`,disabled:s,className:`w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400/40 transition-all disabled:opacity-50`,autoFocus:!0,autoComplete:`current-password`})]})]}),r&&(0,h.jsxs)(`div`,{className:`flex items-center gap-2 bg-red-500/15 border border-red-400/25 rounded-lg px-4 py-2.5`,children:[(0,h.jsx)(`svg`,{className:`w-4 h-4 text-red-300 shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z`})}),(0,h.jsx)(`p`,{className:`text-red-200 text-sm`,children:r})]}),(0,h.jsx)(`button`,{type:`submit`,disabled:s,className:`w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2`,children:s?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin`}),`ログイン中...`]}):`ログイン`})]}),(0,h.jsx)(`p`,{className:`text-center text-white/20 text-xs mt-6`,children:`INGUIDE Learning Platform`})]}),(0,h.jsx)(`style`,{children:`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `})]})}function v({section:e,selectedSection:t,selectedSubSection:n,onSelect:r}){let i=t===e.id,[a,o]=(0,d.useState)(i);(0,d.useEffect)(()=>{i&&e.subSections?.length&&o(!0)},[i,e.subSections]);let s=(0,d.useCallback)(()=>{e.subSections?.length&&o(e=>!e),r(e.id)},[e.id,e.subSections,r]),c=(0,d.useCallback)(t=>{r(e.id,t)},[e.id,r]);return(0,h.jsxs)(`div`,{className:`mb-0.5`,children:[(0,h.jsxs)(`button`,{onClick:s,className:`
          w-full text-left px-3 py-2.5 text-sm flex items-center justify-between gap-2
          transition-all duration-150 rounded-lg cursor-pointer group
          ${i?`bg-blue-50 text-blue-700 font-semibold shadow-sm shadow-blue-100`:`text-slate-600 hover:bg-slate-50 hover:text-slate-900`}
        `,children:[(0,h.jsxs)(`span`,{className:`flex items-center gap-2.5 min-w-0`,children:[(0,h.jsx)(`span`,{className:`text-base shrink-0`,children:e.icon||`📄`}),(0,h.jsx)(`span`,{className:`leading-snug line-clamp-2`,children:e.title})]}),e.subSections?.length>0&&(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 shrink-0 transition-transform duration-200 text-slate-400 group-hover:text-slate-600 ${a?`rotate-90`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]}),a&&e.subSections?.length>0&&(0,h.jsx)(`div`,{className:`ml-5 mt-0.5 border-l-2 border-slate-200 pl-3 py-0.5 space-y-0.5`,children:e.subSections.map(r=>(0,h.jsx)(`button`,{onClick:()=>c(r.id),className:`
                w-full text-left px-3 py-1.5 text-xs rounded-md transition-all duration-150 cursor-pointer
                ${n===r.id&&t===e.id?`bg-blue-50 text-blue-600 font-medium`:`text-slate-500 hover:bg-slate-50 hover:text-slate-700`}
              `,children:(0,h.jsx)(`span`,{className:`line-clamp-2`,children:r.title})},r.id))})]})}var y=(0,d.memo)(v);function b({sections:e,selectedSection:t,selectedSubSection:n,onSelect:r}){let i=(0,d.useMemo)(()=>{let t=[],n=null,r=null;for(let i of e){let e=i.moduleNumber??-1;e!==n&&(n=e,r={moduleNumber:e,label:e===0?null:`Module ${e}`,sections:[]},t.push(r)),r.sections.push(i)}return t},[e]);return(0,h.jsxs)(`nav`,{className:`py-2 px-2`,children:[(0,h.jsx)(`div`,{className:`px-3 py-2 mb-1`,children:(0,h.jsx)(`p`,{className:`text-[11px] font-semibold text-slate-400 uppercase tracking-wider`,children:`目次`})}),i.map((e,i)=>(0,h.jsxs)(`div`,{children:[e.label&&(0,h.jsx)(`div`,{className:`px-3 pt-4 pb-1.5`,children:(0,h.jsx)(`p`,{className:`text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-1`,children:e.label})}),e.sections.map(e=>(0,h.jsx)(y,{section:e,selectedSection:t,selectedSubSection:n,onSelect:r},e.id))]},i))]})}var x=(0,d.memo)(b),ee=`\r
\r
# INGUIDE Level 1: Module 01 日本語解説コンテンツ\r
\r
---\r
\r
## ドキュメント概要\r
\r
本ドキュメントは、INGUIDE（International Guideline Development）プログラム Level 1: Module 01 の学習資料を日本語化した完成原稿です。\r
\r
INGUIDEプログラムは、Guidelines International Network（GIN）とMcMaster大学GRADEセンター（McGRADE）の共同により開発された、ガイドライン開発の資格認定・認証プログラムです。Level 1は「ガイドラインパネルメンバー（ガイドライン開発グループメンバー）」の役割に焦点を当てたコースです。\r
\r
Module 01は3つのパートで構成されています：\r
\r
- **パート1：学習目標と概要** — ガイドラインの定義、推奨の構造、信頼性の高いガイドラインの6原則、GIN-McMasterチェックリストの紹介\r
- **パート2：ガイドラインプロセス** — ガイドラインプロセスに関わる人々、グループメンバーシップ、グループプロセスの確立、エビデンスと意見の区別、対象読者の特定\r
- **パート3：消費者・ステークホルダーの関与と利益相反への配慮** — ステークホルダーの関与、利益相反の定義・申告・管理、GINの9つの原則\r
\r
**学習目標：**\r
- ガイドラインパネルメンバーまたはガイドライン開発グループメンバーの視点から、健康ガイドラインの作成に有意義に参加できるよう準備する\r
- ガイドラインパネルメンバーに関連するガイドライン開発プロセスの具体的なステップを適用できるようになる\r
- GIN-McMasterのガイドライン開発アプローチを理解する\r
\r
---\r
\r
# 目次\r
\r
- INGUIDE Level 1: Module 01\r
- 目次\r
- インストラクター紹介\r
  - インストラクター：Dr. Holger Schünemann\r
  - 開示事項\r
- パート1：学習目標と概要\r
  - コースの目標\r
  - 診療ガイドライン\r
  - 推奨とは何か？\r
  - ガイドラインの構造\r
  - 信頼性が高く質の高いガイドラインの6原則\r
  - 補足情報\r
  - ガイドライン開発に通常関与する組織\r
  - GIN-McMasterガイドライン開発チェックリスト\r
  - ガイドラインチェックリストのコンピテンシー\r
  - パート1完了\r
- パート2：ガイドラインプロセス\r
  - ガイドラインプロセスに関わる人々 — ガイドラインパネル\r
  - ガイドラインプロセスに関わるその他の人々 — パネル以外\r
  - ガイドライン開発の最初のステップ\r
  - ガイドライングループメンバーシップ — 選定と関与する人々\r
  - ガイドライングループメンバーシップ — パネルメンバー\r
  - グループプロセスの確立\r
  - ガイドライングループプロセスの確立 — コミットメント\r
  - エキスパートとは何か？\r
  - ガイドラインにおけるエビデンスと意見の区別 — パート1\r
  - ガイドラインにおけるエビデンスと意見の区別 — パート2\r
  - 対象読者の特定とトピックの理解\r
  - パート2完了\r
- パート3：消費者・ステークホルダーの関与と利益相反への配慮\r
  - 消費者・ステークホルダーの関与\r
  - 利益相反 — 定義\r
  - 利益相反 — 申告と管理\r
  - 利益相反 — GIN原則 パート1\r
  - 利益相反 — GIN原則 パート2\r
  - 利益相反 — GIN原則 パート3\r
  - 利益相反 — GIN原則 パート4\r
  - 利益相反 — GIN原則 パート5\r
  - 利益相反 — GIN原則 パート6\r
  - 利益相反 — GIN原則 パート7\r
  - 利益相反 — GIN原則 パート8\r
  - 利益相反 — GIN原則 パート9\r
  - パート3完了\r
- 付録：GIN-McMaster ガイドライン開発チェックリスト\r
\r
---\r
\r
# インストラクター紹介\r
\r
## インストラクター：Dr. Holger Schünemann\r
\r
### Module 1 インストラクター\r
\r
Dr. Holger Schünemann\r
\r
【図】figure_4.jpeg（元のファイル名: image71.jpeg）— Dr. Holger Schünemannの顔写真\r
\r
こんにちは、私はHolger Schünemannです。ガイドライン資格認定・認証プログラムの最初のコースのインストラクターを務めます。\r
\r
このプログラムは、Guidelines International Network（GINとも呼ばれます）とMcMaster大学GRADEセンター（McGRADEとも呼ばれます）の貢献により開発されました。\r
\r
このコースでは、ガイドライン開発グループまたはガイドラインパネルメンバーの役割に焦点を当てます。\r
\r
>>>補足【GINとMcMaster大学について】\r
**Guidelines International Network（GIN）** は、ガイドライン開発、適応、実装に関わる組織や個人の国際的なネットワークです。世界各国のガイドライン開発団体、研究者、臨床家などが参加しています。\r
\r
**McMaster大学** はカナダ・オンタリオ州ハミルトンにある大学で、エビデンスに基づく医療（EBM）の発祥地として知られています。McMaster大学のGRADEセンター（McGRADE）は、GRADEシステムの開発と普及に中心的な役割を果たしています。\r
<<<\r
\r
---\r
\r
## 開示事項\r
\r
【図】figure_2.jpg（元のファイル名: image69.jpg）— 開示事項のスライド\r
【図】figure_3.jpg（元のファイル名: image70.jpg）— 開示事項のスライド（重複）\r
\r
- Cochrane Canada — ディレクター\r
- GRADE Working Group — 共同議長\r
- Guidelines International Network — 理事会メンバー\r
\r
開示事項として、私はこのコースを通じて繰り返し言及されるグループにおいて様々な役割を担っています。\r
\r
これらのグループには、Cochrane、GRADEワーキンググループ、およびGuidelines International Networkが含まれます。\r
\r
>>>補足【Cochraneについて】\r
**Cochrane（コクラン）** は、医療における意思決定に役立つ質の高いエビデンスを提供することを目的とした国際的な非営利組織です。Cochraneは特にシステマティックレビューの作成で世界的に知られており、医療ガイドライン開発の基盤となるエビデンスの提供に大きく貢献しています。\r
\r
**GRADE Working Group** は、エビデンスの確実性を評価し推奨の強さを決定するための国際的に広く使用されているアプローチ（GRADEシステム）を開発・維持しているグループです。\r
<<<\r
\r
---\r
\r
# パート1：学習目標と概要\r
\r
国際ガイドライン開発\r
\r
【図】figure_5.jpg（元のファイル名: image72.jpg）— パート1タイトルスライド\r
\r
---\r
\r
## コースの目標\r
\r
【図】figure_6.jpg（元のファイル名: image73.jpg）— コースの目標スライド\r
\r
コースの目標\r
\r
- ガイドラインパネルまたはガイドライン開発グループメンバーの視点から、健康ガイドラインの作成に有意義に参加できるよう準備する\r
- ガイドラインパネルメンバーに関連するガイドライン開発プロセスの具体的なステップを適用できるようになる\r
- GIN-McMasterのガイドライン開発アプローチを理解する\r
\r
このコースの修了時には、学習者はガイドラインパネルまたはガイドライン開発グループメンバーの視点から、健康ガイドラインの作成に有意義に参加できるよう準備が整います。これらの用語は互換的に使用します。\r
\r
さらに、学習者はガイドラインパネルメンバーに関連するガイドライン開発プロセスの具体的なステップを適用できるようになります。\r
\r
また、学習者はGIN-McMasterのガイドライン開発アプローチで概説されている方法論についても理解を深めます。\r
\r
---\r
\r
## 診療ガイドライン\r
\r
【図】figure_7.jpg（元のファイル名: image74.jpg）— 診療ガイドラインのスライド\r
【図】figure_70.jpeg（元のファイル名: image1.jpeg）— 診療ガイドラインに関する参考画像\r
\r
### 診療ガイドライン\r
\r
- 医療提供者、受益者、その他のステークホルダーが適切な健康介入について情報に基づいた意思決定を行うことを可能にする、系統的に開発されたエビデンスに基づく声明\r
- 健康介入には、臨床手技、公衆衛生上の行動、および政策が含まれる（WHO、IOM）\r
- 健康または医療を最適化することを目的とした推奨を含む声明\r
- エビデンスのシステマティックレビューと、代替選択肢の望ましい結果と望ましくない結果の評価に基づいて作成される\r
\r
参考文献：Ann Intern Medicine. https://doi.org/10.7326/M18-3445\r
\r
ガイドラインとは何でしょうか？ ガイドラインとは、医療提供者、受益者、その他のステークホルダーが適切な健康介入について情報に基づいた意思決定を行うことを可能にする、系統的に開発されたエビデンスに基づく声明です。健康介入は、臨床手技、公衆衛生上の行動、および政策を含む広い概念として定義されます。\r
\r
健康ガイドラインとは、エビデンスのシステマティックレビューと代替選択肢の望ましい結果と望ましくない結果の評価に基づいて作成された、健康または医療を最適化することを目的とした推奨を含む声明です。\r
\r
>>>補足【システマティックレビューについて】\r
**システマティックレビュー（systematic review）** とは、特定の臨床疑問に対して、明確な方法論に基づいて網羅的に文献を検索・選択・評価し、結果を統合する研究手法です。個々の研究のバイアスを最小限にし、利用可能なエビデンスの全体像を提示することを目的としています。ガイドライン開発において、推奨の根拠となるエビデンスはシステマティックレビューによって収集・評価されることが国際的な標準となっています。\r
\r
日本では、**Minds（Medical Information Network Distribution Service）** が「Minds診療ガイドライン作成マニュアル」を公開しており、日本語でのガイドライン開発方法論の標準を示しています。\r
<<<\r
\r
---\r
\r
## 推奨とは何か？\r
\r
【図】figure_8.jpg（元のファイル名: image75.jpg）— 推奨とは何かのスライド\r
【図】figure_71.jpeg（元のファイル名: image2.jpeg）— ガイドラインの推奨例\r
\r
- 推奨とは、具体的で実行可能な声明である\r
- ガイドラインは1つまたは多数の推奨を含む\r
- 右の画像は、ガイドライン中の多数の推奨のうちの1つの例を示している\r
- 推奨の数を決定する要因には、時間、利用可能なリソース、および優先事項の数が含まれる\r
\r
参考文献：https://www.dropbox.com/s/9ucbc6fagih0x2f/Schunemann%20-\r
\r
推奨とは何でしょうか？ 推奨とは、具体的で実行可能な声明です。曖昧すぎて実施できない声明や、非効率的または逆効果な行動につながりかねない声明は避けるべきです。ガイドラインは1つまたは複数の推奨を含みます。ここに示されているのは、ガイドライン中の多数の推奨のうちの1つの例です。ガイドラインにおける推奨の数は、トピックや優先事項、利用可能な時間やリソースなど、多くの要因によって決定されます。\r
\r
>>>補足【推奨の構成要素について】\r
ガイドラインにおける推奨は通常、以下の要素を含みます：\r
- **推奨の方向性**：介入を「行うこと」を推奨するか、「行わないこと」を推奨するか\r
- **推奨の強さ**：「強い推奨」か「弱い推奨（条件付き推奨）」か\r
- **エビデンスの確実性**：推奨を支持するエビデンスがどの程度信頼できるか\r
\r
例えば「急性期の内科入院患者に対して、薬理学的VTE予防として低分子ヘパリンの使用を推奨する（強い推奨、中程度の確実性のエビデンス）」のような形で記述されます。\r
<<<\r
\r
---\r
\r
## ガイドラインの構造\r
\r
【図】figure_9.jpg（元のファイル名: image76.jpg）— ガイドラインの構造スライド\r
\r
### ガイドラインの構造\r
\r
- ガイドラインは、科学雑誌の論文として、または組織のウェブサイト上で公開される場合がある\r
- 通常、主要な推奨とその推奨の簡潔な根拠を含むエグゼクティブサマリーが含まれる\r
\r
ガイドラインは、科学雑誌の論文として、組織のウェブサイト上で、またはアプリなどその他の手段を通じて公開される場合があります。\r
\r
通常、主要な推奨とその推奨の簡潔な根拠を含むエグゼクティブサマリーが含まれます。\r
\r
---\r
\r
## 信頼性が高く質の高いガイドラインの6原則\r
\r
【図】figure_10.jpg（元のファイル名: image77.jpg）— 6原則のスライド\r
【図】figure_1.jpg（元のファイル名: image68.jpg）— 6原則の詳細表示\r
【図】figure_11.jpg（元のファイル名: image78.jpg）— 6原則の詳細表示（追加）\r
\r
### 信頼性が高く質の高いガイドラインの6原則\r
\r
表示されるロゴ：\r
\r
- 世界保健機関（WHO）\r
- 米国国立科学アカデミー\r
- Guidelines International Network\r
- AGREEコンソーシアム\r
- RIGHTワーキンググループ\r
\r
1. システマティックレビューの方法論を用いた最良のエビデンスに基づいている\r
2. 知識豊富な多職種の専門家パネルと主要な影響を受けるグループの多様な代表者によって開発されている\r
3. ガイドラインの影響を受ける人々の価値観と選好に焦点を当てている\r
4. 代替選択肢と健康アウトカムの関係を明確に説明し、エビデンスの確実性と推奨の強さの評価を提供している\r
5. 重要な新しいエビデンスが推奨の修正を正当化する場合に適切に再検討・改訂される\r
6. 歪み、バイアス、利益相反を最小化する明示的で透明性のあるプロセスに基づいている\r
\r
多くの専門家グループの作業は、信頼性の高いガイドラインのためのいくつかの中核的原則について一致しています。\r
\r
これらのグループには、世界保健機関（WHO）、米国国立科学アカデミー、Guidelines International Network、AGREEコンソーシアム、およびRIGHTワーキンググループが含まれます。\r
\r
ガイドラインが信頼性が高く質の高いものとなるために満たすべき原則は少なくとも6つあります。\r
\r
1. システマティックレビューの方法論を用いた最良のエビデンスに基づいていること\r
2. 知識豊富な多職種の専門家パネルと主要な影響を受けるグループの多様な代表者によって開発されていること\r
3. ガイドラインの影響を受ける人々にとって重要なことに焦点を当てていること。健康ガイドラインの文脈では、これは価値観と選好を考慮に入れることを意味します\r
4. 代替選択肢と健康アウトカムの関係を明確に説明し、エビデンスの確実性と推奨の強さの両方の評価を提供していること\r
5. 重要な新しいエビデンスが推奨の修正を正当化する場合に適切に再検討・改訂されること\r
6. そして最後に、歪み、バイアス、利益相反を最小化するための明示的で透明性のあるプロセスに基づいていること\r
\r
>>>補足【AGREEとRIGHTについて】\r
**AGREE II（Appraisal of Guidelines for Research and Evaluation II）** は、ガイドラインの質を評価するための国際的に広く使用されているツールです。ガイドラインの「対象と目的」「ステークホルダーの参加」「開発の厳密さ」「提示の明確さ」「適用可能性」「編集の独立性」の6つの領域で評価を行います。\r
\r
**RIGHT（Reporting Items for practice Guidelines in HealThcare）** は、ガイドラインの報告の質を標準化するためのチェックリストです。ガイドラインの報告に含めるべき項目を網羅的にリスト化しています。\r
\r
日本でもMindsがAGREE IIの日本語版を提供しており、ガイドラインの質評価に活用されています。\r
<<<\r
\r
---\r
\r
## 補足情報\r
\r
【図】figure_12.jpg（元のファイル名: image79.jpg）— 補足情報のスライド\r
\r
### 補足情報\r
\r
- 推奨は以下によって支持される：\r
  - 解説的注釈\r
  - 背景情報\r
  - サブグループの考慮事項\r
  - 正当化の根拠\r
  - 他の推奨との関連性\r
\r
- 完全な透明性のために、推奨に影響を与えたすべての基準とガイドラインパネルが検討した事項が含まれる場合がある\r
- ガイドラインパネルメンバーは、推奨に影響を与えた考慮事項に貢献する\r
\r
理想的には、推奨は解説的注釈、背景情報、サブグループの考慮事項、正当化の根拠によって支持され、場合によっては他の推奨と関連付けられます。完全な透明性のために、推奨に影響を与えたすべての基準とガイドラインパネルが検討した事項が含まれる場合があります。推奨に影響を与えた考慮事項に貢献することは、ガイドラインパネルメンバーの役割です。\r
\r
---\r
\r
## ガイドライン開発に通常関与する組織\r
\r
【図】figure_13.jpg（元のファイル名: image80.jpg）— 関与する組織のスライド\r
\r
### ガイドライン開発に通常関与する組織\r
\r
- 政府の保健部門\r
- 専門職団体\r
- 非政府系保健組織\r
\r
- これらの組織は通常、監督的役割を担い、グループを任命する\r
- ガイドライン開発に関与できる個人は、様々な背景から来ることができる\r
\r
ガイドライン開発のイニシアチブはどの組織からでも生まれ得ますが、通常は政府の保健部門（例：保健省）、特定の保健分野を代表する専門職団体（例：米国血液学会）、または非政府系保健組織（例：世界保健機関）が関与します。\r
\r
これらの組織は通常、監督的役割を担い、ガイドライン開発グループまたはパネルを任命します。\r
\r
ガイドライン開発に関与する個人は、臨床医、公衆衛生担当者、医療専門職、医療政策立案者、ならびに患者または疾患を持つ人々とその代表者を含む様々な背景から来ることができます。\r
\r
>>>補足【日本におけるガイドライン開発組織】\r
日本では、**日本医療機能評価機構** がMinds（Medical Information Network Distribution Service）を運営し、ガイドライン作成の方法論的支援と情報提供を行っています。また、各学会（例：日本循環器学会、日本癌治療学会など）がそれぞれの専門領域でガイドラインを開発しています。厚生労働省も政策的な観点からガイドライン作成に関与することがあります。\r
<<<\r
\r
---\r
\r
## GIN-McMasterガイドライン開発チェックリスト\r
\r
【図】figure_14.jpg（元のファイル名: image81.jpg）— GIN-McMasterチェックリストのスライド\r
\r
### GIN-McMasterガイドライン開発チェックリストを確認しましょう\r
\r
このコースは主に、GIN-McMasterチェックリストおよびガイドライン開発ツールボックスによって定義されたガイドライン開発の概念的記述を使用しています。ここに示されているのは、GIN-McMasterチェックリストの模式的な表示です。\r
\r
これらの各構成要素とステップは、このコースの中で、ガイドラインパネルメンバーに関連するものに重点を置いて議論されます。\r
\r
>>>補足【GIN-McMasterチェックリストについて】\r
GIN-McMasterガイドライン開発チェックリストは、ガイドライン開発の全プロセスを18のステップに分けて体系的に整理したものです。各ステップには具体的なチェック項目が含まれており、ガイドライン開発者がプロセスの計画と追跡、ステップの見落とし防止に活用できます。このチェックリストは2013年12月に公開され、国際的に広く参照されています。付録にチェックリストの全18ステップの概要を掲載しています。\r
<<<\r
\r
---\r
\r
## ガイドラインチェックリストのコンピテンシー\r
\r
【図】figure_15.jpg（元のファイル名: image82.jpg）— チェックリストコンピテンシーのスライド\r
【図】figure_16.jpg（元のファイル名: image83.jpg）— チェックリストコンピテンシーのスライド（追加）\r
\r
### ガイドラインチェックリストのコンピテンシー\r
\r
ガイドライン開発資格認定インストラクターコース\r
\r
- ガイドライングループまたはパネルメンバーコース\r
- ガイドライン方法論者コース\r
- マスターガイドライン開発者および議長コース\r
\r
1. 組織、予算、計画およびトレーニング\r
2. 優先順位の設定\r
3. ガイドライングループメンバーシップ\r
4. ガイドライングループプロセスの確立\r
5. 対象読者の特定とトピックの選定\r
6. 消費者とステークホルダーの関与\r
7. 利益相反への配慮\r
8. （PICO）クエスチョンの作成\r
9. アウトカムと介入の重要性、価値観、選好、効用の検討\r
10. どのエビデンスを含めるかの決定とエビデンスの検索\r
11. エビデンスの要約と追加情報の検討\r
12. エビデンスの質、強さ、または確実性の判定\r
13. 推奨の作成とその強さの決定\r
14. 推奨の文言ならびに実施、実現可能性、公平性の考慮事項\r
15. 報告とピアレビュー\r
16. 普及と実装\r
17. 評価と使用\r
18. 更新\r
\r
GIN-McMasterアプローチは、GIN-McMasterガイドライン開発チェックリストにおいてステップバイステップで示されています。\r
\r
ガイドライン開発チェックリストプロジェクトは、INGUIDEプログラムと同様に、Guidelines International Network（GIN）とMcMaster大学のパートナーシップです。\r
\r
このチェックリストは、ガイドライン開発者がガイドライン開発のプロセスを計画・追跡し、ステップの見落としがないようにするために使用することを意図しています。また、個々のステップとトピックに関する重要なリソースも提供します。\r
\r
ガイドライン開発グループメンバーとして、あなたはチェックリストに記載されている多くのステップに精通していくことになります。\r
\r
>>>補足【PICOについて】\r
**PICO** は、臨床疑問を構造化するためのフレームワークで、以下の4要素から構成されます：\r
- **P（Population/Patient）**：対象となる患者集団\r
- **I（Intervention）**：評価する介入\r
- **C（Comparison/Comparator）**：比較対照\r
- **O（Outcome）**：評価するアウトカム\r
\r
例えば、「2型糖尿病の成人患者（P）において、メトホルミン（I）はプラセボ（C）と比較して、HbA1cの改善（O）に有効か？」のように構造化します。このフレームワークは、ガイドライン開発においてエビデンスを検索・評価する際の基盤となります。\r
<<<\r
\r
---\r
\r
## パート1完了\r
\r
パート1を完了しました！\r
\r
パート2ではガイドラインプロセスについて説明します。\r
\r
パート1を完了しました！\r
\r
パート2ではガイドラインプロセスについて説明します。\r
\r
**パート1完了**\r
\r
---\r
\r
# パート2：ガイドラインプロセス\r
\r
【図】figure_17.jpg（元のファイル名: image84.jpg）— パート2タイトルスライド\r
\r
---\r
\r
## ガイドラインプロセスに関わる人々 — ガイドラインパネル\r
\r
【チェックリスト対応】ステップ3：ガイドライングループメンバーシップ\r
【チェックリスト対応】ステップ4：ガイドライングループプロセスの確立\r
\r
【図】figure_18.jpg（元のファイル名: image85.jpg）— ガイドラインパネルのスライド\r
\r
### ガイドラインプロセスに関わる人々 — ガイドラインパネル\r
\r
ガイドラインパネルメンバーとして、あなたは推奨を決定するプロセスの一部となります\r
\r
ガイドライングループメンバーシップとプロセス：\r
\r
- 消費者とステークホルダー\r
- ガイドラインパネル\r
- ワーキンググループ\r
- 監督委員会\r
\r
ガイドラインパネルメンバーとして、あなたは推奨を決定するプロセスの一部となります\r
\r
ここでは、ガイドラインプロセスに関わる人々を見ることができます。ガイドラインパネルメンバーとして、あなたは私たちが話してきた推奨を決定するプロセスの一部となります。\r
\r
---\r
\r
## ガイドラインプロセスに関わるその他の人々 — パネル以外\r
\r
【図】figure_19.jpg（元のファイル名: image86.jpg）— パネル以外の関与者スライド\r
【図】figure_20.jpg（元のファイル名: image87.jpg）— 監督委員会の図\r
\r
### ガイドラインプロセスに関わるその他の人々 — パネル以外\r
\r
**監督委員会：**\r
- ガイドラインプロセス全体に責任を持ち、ガイドラインコーディネーターが含まれる場合がある。また、委員会はガイドライン開発の提案の承認と完成したガイドラインの承認を担当する場合もある\r
- 例えば、WHOにはガイドラインレビュー委員会があり、WHOのガイドラインがWHOガイドライン開発ハンドブックに従っていることを確認している\r
\r
**ガイドラインパネル：**\r
- 関心のある領域に専門知識を持つ個人のグループで、1名以上の議長のリーダーシップのもとで推奨を作成する\r
\r
**消費者・ステークホルダー：**\r
- 外部または内部からの意見を提供し、ガイドラインパネルのメンバーである場合もある\r
- ピアレビューの段階やガイドラインプロセスの様々な段階でフィードバックを提供するために関与する場合がある\r
\r
**ワーキンググループ：**\r
- 例えば、文献レビューを実施するグループや特定のトピックの技術的専門家として役割を果たすグループ\r
\r
次に、プロセスに関わるグループと人々に焦点を当てましょう。前述のとおり、この図は全体的なプロセスを説明しています。関わる主要な人々は以下に分類できます：\r
\r
**監督委員会**は通常、ガイドラインプロセス全体に責任を持ち、ガイドラインコーディネーター（ガイドラインを作成する多くの専門学会にはプロセスを管理するコーディネーターがいることが多く、WHOではテクニカルオフィサーがいます）が含まれる場合があります。また、委員会はガイドライン開発の提案の承認と、最終的には完成したガイドラインの承認を担当する場合もあります。\r
\r
例えば、WHOまたは世界保健機関にはガイドラインレビュー委員会があり、WHOが作成するガイドラインがWHOガイドライン開発ハンドブックに従っていることを確認しています。\r
\r
**ガイドラインパネル**は一般的に、患者や一般市民の代表を含む、関心のある領域に専門知識を持つ個人のグループであり、1名以上の議長のリーダーシップのもとで推奨を作成します。\r
\r
**消費者とステークホルダー**は外部または内部からの意見を提供し、ガイドラインパネルのメンバーである場合もあります。ただし、ピアレビューの段階のみに関与したり、ガイドラインプロセスの様々な段階でフィードバックを提供するために関与する場合もあります。例えば、質問の優先順位付けやアウトカムのランキングの際などです。\r
\r
最後に、文献レビューを実施するグループや特定のトピックの技術的専門家として役割を果たすグループなど、**ワーキンググループ**が存在することがよくあります。\r
\r
---\r
\r
## ガイドライン開発の最初のステップ\r
\r
【チェックリスト対応】ステップ1：組織、予算、計画およびトレーニング\r
【チェックリスト対応】ステップ2：優先順位の設定\r
\r
【図】figure_21.jpg（元のファイル名: image88.jpg）— 最初のステップのスライド\r
\r
### ガイドライン開発の最初のステップ\r
\r
ガイドラインパネルメンバーとして、ステップが適切に遵守されていることを確認したいと考えるでしょうが、その多くについてはあなたが責任を負うわけではありません\r
\r
**ステップ1**\r
\r
- ガイドラインの組織\r
- 予算\r
- 計画\r
- トレーニング\r
\r
ガイドラインパネルメンバーは、監督委員会の一員でない限り、通常このステップには関与しません\r
\r
**ステップ2**\r
\r
- メイントピックの優先順位設定\r
- 実務者、患者、政策立案者を含む主要なステークホルダーにとっての重要性の基準を使用\r
\r
ガイドラインパネルメンバーとして、ステップが適切に遵守されていることを確認したいと考えるでしょうが、その多くについてはあなたが責任を負うわけではありません。\r
\r
GIN-McMasterチェックリストの最初のステップは、ガイドラインの組織、予算、計画、トレーニングに関するものです。ガイドラインを開発する組織が、経験豊富なガイドライン開発者からの意見を得て、主にこのステップを決定します。\r
\r
前述のとおり、ガイドラインパネルメンバーは、監督委員会の一員でない限り、通常このステップには関与しません。ただし、このステップが成功裏に行われたかどうかを確認することはできます。例えば、プロジェクトに資金があるかどうか、またはガイドライン開発中に資金が枯渇するリスクがあるかどうかなどです。\r
\r
2番目のステップは、実務者、患者、政策立案者を含む主要なステークホルダーにとっての重要性の基準を使用して、メイントピック（例えば、乳がんスクリーニングやガイドラインが必要な希少疾患）の優先順位を設定することです。\r
\r
この段階では、ガイドラインパネルメンバーはまだパネルメンバーとしての作業を開始していません。トピックの優先順位を設定するための協議プロセスには参加する場合がありますが、通常はまだパネルメンバーの役割ではありません。\r
\r
---\r
\r
## ガイドライングループメンバーシップ — 選定と関与する人々\r
\r
【チェックリスト対応】ステップ3：ガイドライングループメンバーシップ\r
\r
【図】figure_22.jpg（元のファイル名: image89.jpg）— グループメンバーシップ選定のスライド\r
\r
### ガイドライングループメンバーシップ — 選定と関与する人々\r
\r
- ガイドライングループメンバーは通常、グループメンバーの選定プロセスには参加しない\r
- パネルメンバーが認識しておくべき主な考慮事項がある\r
- 主要なステークホルダーのすべてのグループの代表者を含む、バランスのとれた多職種構成を持つ\r
- ガイドラインパネル内にはいくつかの潜在的な役割がある\r
- ガイドライングループリーダーとメンバーの招待は、通常、主導組織が監督委員会と協力して行う\r
- 役割と期待は最初に概説されるべきであり、適切なリーダーを選定する必要がある\r
- 選定プロセス全体と役割の説明は透明性を確保するために文書化されるべきである\r
\r
ガイドライングループメンバーは通常、議長の任命を含むグループメンバーの選定プロセスには参加しません。それは通常、ガイドラインに責任を持つ組織によって行われます。\r
\r
それでも、適切なパネルを構成するために何が必要かを理解するために、パネルメンバーが認識しておくべきいくつかの主な考慮事項があります。\r
\r
ガイドライングループまたはパネルが、主要なステークホルダーのすべてのグループの代表者を含む、バランスのとれた多職種構成を持つことが極めて重要です。これには、ガイドラインが対象とする読者からのメンバー、患者とその代表者、医療提供者、コンテンツの専門家、方法論の専門家、医療経済学者、政策立案者が含まれます。その他の関連する考慮事項には、例えばジェンダー、人種、地理的代表性のバランスが含まれます。技術的専門家、システマティックレビュー著者、オブザーバー、技術スタッフなど、ガイドラインパネル内にはいくつかの潜在的な役割もあります。\r
\r
ガイドライングループリーダーとメンバーの招待は、通常、主導組織が監督委員会と協力して行いますが、他のアプローチも可能です。\r
\r
役割と期待は最初に概説されるべきであり、適切なリーダーを選定する必要があります。\r
\r
選定プロセス全体と役割の説明は透明性を確保するために文書化されるべきであり、ガイドライン利用者が懸念事項の有無を判断できるようにします。\r
\r
---\r
\r
## ガイドライングループメンバーシップ — パネルメンバー\r
\r
【図】figure_23.jpg（元のファイル名: image90.jpg）— パネルメンバーのスライド\r
\r
### ガイドライングループメンバーシップ — パネルメンバー\r
\r
- ガイドライン参加者ツールはガイドラインパネルのメンバーに情報を提供する\r
- 追加の役割がパネルメンバーに割り当てられる場合がある\r
- 一部のグループでは専門家にエビデンスの提供を求める\r
\r
**パネルメンバーの責任：**\r
\r
- ガイドラインのための質問の優先順位付け\r
- グループ会議への参加\r
- エビデンスと文脈的要因に関する意見の提供\r
- エビデンスの要約のレビュー\r
- 提示されたエビデンスに基づく判断と推奨の策定\r
- 最終ガイドライン報告書のレビューと執筆\r
- ガイドラインの普及の支援\r
\r
ガイドラインパネルでは、すべての正規メンバーは平等な発言権を持ちます。通常、パネルメンバーは以下の責任を負います：\r
\r
- ガイドラインのための質問の優先順位付け\r
- グループ会議への参加（対面、ウェブ会議、または電話会議が可能）\r
- エビデンスと文脈的要因に関する意見の提供\r
- エビデンスの要約のレビュー\r
- 提示されたエビデンスに基づく判断の実施と推奨の策定\r
- 最終ガイドライン報告書のレビューと執筆\r
- そして最後に、ガイドラインの普及の支援\r
\r
多くのガイドライン開発者は、ガイドラインパネルのメンバーに情報を提供するために、ガイドライン参加者ツールなどのツールを使用しています。\r
\r
追加の役割がパネルメンバーに割り当てられる場合があります。例えば、患者とその代表者は、患者または当事者の視点から具体的な情報を提供するよう求められる場合があります。また、研究方法論者は、エビデンスの質を詳細に批判的にレビューするよう招かれる場合があります。\r
\r
一部のグループでは、特にエビデンスが乏しい場合に、専門家にエビデンスの提供を求めたり、エビデンス統合プロセスへの支援を求めたりすることがあります。\r
\r
---\r
\r
## グループプロセスの確立\r
\r
【チェックリスト対応】ステップ4：ガイドライングループプロセスの確立\r
\r
【図】figure_24.jpg（元のファイル名: image91.jpg）— グループプロセスの確立スライド\r
\r
### グループプロセスの確立\r
\r
**パネルメンバー：**\r
\r
- 開発プロセスが始まる前に、あなたの任務、義務、権利を理解する\r
- 異なる声からの意見に平等な機会を確立することを目的とした多職種パネル\r
\r
**コミュニケーションのルール：**\r
\r
- コミュニケーションの頻度と方法、トレーニングとサポート、議論とフィードバックの機会、文書の共有に関するルールを事前に確立する\r
- 会議の議事録を記録し、常にアクセス可能とする\r
\r
**投票：**\r
\r
- 投票するパネルメンバーは以下を認識しておく必要がある：\r
  - 議長や他のパネルメンバーとの関わり方\r
  - 期待される判断\r
  - コンセンサスに達するためのルール\r
  - 対立や紛争の処理プロセス\r
\r
パネルメンバーとして、開発プロセスが始まる前に、あなたの任務、義務、権利を理解しておくべきです。全体として、多職種パネルの目的は、異なる声からの意見に平等な機会を確立することであるべきです。\r
\r
コミュニケーションの頻度と方法、トレーニングとサポート、議論とフィードバックの機会、文書の共有に関するルールは事前に確立されます。会議の議事録は記録され、内部のみ、または内部と外部の両方で常にアクセス可能である必要があります。\r
\r
投票するパネルメンバーは、議長や他のパネルメンバーとどのように関わることが期待されているか、どのような判断が期待されているか、コンセンサスに達するためのルールは何か、対立や紛争に対処するプロセスは何か（例えば、匿名投票の使用や、推奨を策定するための定足数など）についても認識しておく必要があります。\r
\r
>>>補足【コンセンサス方法について】\r
ガイドライン開発で使用される主な合意形成方法には以下があります：\r
\r
**Delphi法（デルファイ法）**：専門家に匿名でアンケートを行い、結果をフィードバックした上で再度意見を求めるプロセスを繰り返す方法です。対面での議論による影響（権威への追従など）を回避できる利点があります。\r
\r
**名目集団法（Nominal Group Technique）**：参加者が個別に意見を出し、それをグループで共有した後、各自が順位付けまたは投票する方法です。すべての参加者に平等な発言機会を保証できます。\r
\r
**投票**：単純多数決や特定の割合（例：75%）の賛成を必要とする方法など、様々な形態があります。\r
<<<\r
\r
---\r
\r
## ガイドライングループプロセスの確立 — コミットメント\r
\r
【図】figure_25.jpg（元のファイル名: image92.jpg）— コミットメントのスライド\r
【図】figure_26.jpg（元のファイル名: image93.jpg）— コミットメントのスライド（追加）\r
\r
### ガイドライングループプロセスの確立 — コミットメント\r
\r
- 異なる組織のアプローチがパネルメンバーに情報を提供しトレーニングを行う\r
- ここでは、ガイドライン参加者ツールからの概念を提供することで、これがどのように行われるかの説明的な例を示す\r
- ガイドライン開発の取り組みに参加する際に、あなたに何が期待されているかについての情報を求めるべきである\r
\r
表の出典：リンク（https://heigrade.mcmaster.ca/guideline-development/guidelineparticipants）\r
\r
組織は、パネルメンバーに情報を提供しトレーニングするために異なるアプローチを使用しています。ガイドライン参加者ツールからの概念を提供することで、これがどのように行われるかの説明的な例を使用しますが、代替的な方法も一般的に使用されています。重要な点は、ガイドライン開発の取り組みに参加する際に、あなたに何が期待されているかについての情報を求めるべきだということです。\r
\r
概念的には、参加者が準備段階、ガイドライングループ会議中、および会議後に検討すべきまたは取るべきステップを分けて考えることが有用です。このコースの残りの部分では、ガイドライン開発グループまたはパネルに参加する人々の役割と責任に関する詳細な情報を提供します。\r
\r
---\r
\r
## エキスパートとは何か？\r
\r
【図】figure_27.jpeg（元のファイル名: image94.jpeg）— エキスパートとは何かのスライド\r
\r
### エキスパートとは何か？\r
\r
- 特定の分野について非常に知識が豊富であるか、熟練した人\r
- エキスパートはエビデンスを解釈するためにしばしば必要とされるが、エキスパートの意見とエビデンスは同じものではない\r
- 疾患を経験することによる専門知識と洞察を持つ患者および患者代表者を含む\r
\r
エキスパートを定義することは重要であり、特にパネルに患者メンバーがいる場合にそうです。私たちはエキスパートを、特定の分野について非常に知識が豊富であるか、熟練した人として非常に広く定義しています。\r
\r
これには、医療専門家が持っていない疾患を経験することについての専門知識と洞察を持つ患者および患者代表者が含まれます。\r
\r
これらのエキスパートはエビデンスを解釈するために必要です。エキスパートの意見をエビデンスと見なす人もいますが、エキスパートの意見とエビデンスは同じものではありません。\r
\r
---\r
\r
## ガイドラインにおけるエビデンスと意見の区別 — パート1\r
\r
【図】figure_28.jpg（元のファイル名: image95.jpg）— エビデンスと意見の区別パート1のスライド\r
\r
### ガイドラインにおけるエビデンスと意見の区別 — パート1\r
\r
ガイドラインにおけるエビデンスと意見の区別\r
\r
「この文脈でのエビデンスは、結論を支持するために使用することを意図した事実（実際のまたは主張された）と定義できます。意見とは、必ずしも事実に基づかない、あることについて形成された見解や判断です。例えば、患者は次のように言うかもしれません：『前立腺特異抗原（PSA）スクリーニングで前立腺がんが検出され、10年後に生きている。』これはエビデンスです。『PSAスクリーニングが私の命を救った。』と言うのとは異なります。これは意見です。同様に、臨床の専門家は次のように言うかもしれません：『前立腺がんの患者100人を手術し、誰も前立腺がんで死亡しなかった。』これはエビデンスです。『前立腺摘除術は有効である。』と言うのとは異なります。これは意見です。いずれの場合も、意見はそのエビデンスに基づいているかもしれませんが、エビデンスは明らかに結論と同じではありません。」\r
\r
ガイドラインにおけるエビデンスと意見には大きな違いがあります。画面に表示されているのは出版物からのものであり、意見をその意見に影響を与えた可能性のあるエビデンスまたはそうでないものと区別するものが何であるかについての理解を提供しています。段落を読んで、議論の中で意見とエビデンスを認識するための戦略を考えてください。\r
\r
>>>補足【エビデンスと意見の違いの重要性】\r
ガイドライン開発において、エビデンスと意見を区別することは極めて重要です。エビデンスとは観察された事実やデータであり、意見とはそれらの事実から導き出された解釈や結論です。\r
\r
この区別が重要な理由は、ガイドラインの推奨はエビデンスに基づくべきであり、特定の個人の意見だけに基づくべきではないからです。エキスパートの経験は貴重ですが、それは多くの場合、制御されていない観察に基づいており、バイアスの影響を受けやすいものです。\r
\r
例えば、「この治療法は効果がある」という専門家の意見は、その専門家の限られた経験に基づいている可能性があり、ランダム化比較試験のエビデンスとは質的に異なります。ガイドラインパネルメンバーは、議論の中でこの区別を常に意識する必要があります。\r
<<<\r
\r
---\r
\r
## ガイドラインにおけるエビデンスと意見の区別 — パート2\r
\r
【図】figure_29.jpg（元のファイル名: image96.jpg）— エビデンスと意見の区別パート2のスライド\r
\r
### ガイドラインにおけるエビデンスと意見の区別 — パート2\r
\r
議論には公平かつ衡平な方法で貢献することが重要です。簡潔で率直に、常に他者を敬意を持って接してください。スケジュールに注意を払い、プロセス全体を通じてパネルの議長を支援してください。\r
\r
簡潔に、率直に、他者を敬意を持って、注意深く、プロセスに協力的であれ！\r
\r
簡潔に、率直に、他者を敬意を持って、注意深く、プロセスに協力的であれ！\r
\r
議論には公平かつ衡平な方法で貢献することが重要です。簡潔で率直に貢献し、常に他者を敬意を持って接してください。他のメンバーのスケジュールに注意を払い、プロセス全体を通じてパネルの議長を支援してください。\r
\r
---\r
\r
## 対象読者の特定とトピックの理解\r
\r
【チェックリスト対応】ステップ5：対象読者の特定とトピックの選定\r
\r
【図】figure_30.jpg（元のファイル名: image97.jpg）— 対象読者の特定スライド\r
\r
### 対象読者の特定とトピックの理解\r
\r
- ガイドラインのために選定された最終的なトピックに精通する\r
  - 要請があれば意見を提供する\r
- ガイドラインの主要な対象読者と潜在的な二次的対象読者は誰か\r
  - 情報の提示において何を考慮すべきかに影響する（例：患者 — 患者用決定支援ツールや患者版を検討する）\r
- どのような視点が取られているかを理解する（例：集団、個人、公衆衛生、医療制度）\r
  - 推奨を作成する際にどの基準が使用され、どのように考慮されるかに影響する\r
- 対処すべき質問のリストを生成し優先順位付けするための方法と基準を理解する（例：エビデンスが最も混乱しているまたは議論を呼んでいる場所、現在の実践に不確実性や一貫性のない場所、スクリーニング、診断、または治療に関する質問）\r
\r
ガイドラインパネルメンバーとして、通常、参加を依頼した組織によって選定された、ガイドラインのための最終的なトピックに精通しておくべきです。意見を求められる場合があります。\r
\r
また、ガイドラインが誰を対象としているかについても考えるべきです。主要な対象読者は、例えば、患者、プライマリケア医、公衆衛生プログラム管理者などです。これは、情報の提示において何を考慮すべきかに影響します。例えば、患者が主要な対象読者である場合、患者用決定支援ツールに関連する情報を強調することが価値あることかもしれません。\r
\r
ガイドラインパネルはまた、どのような視点を取るべきかについて合意するか、助言を受けるべきです。例えば、集団の視点、個人の視点、公衆衛生の視点、または医療制度の視点です。これは、推奨を検討・作成する際にどの基準が使用され、どのように使用されるかに影響します。\r
\r
あなたはガイドライン内で推奨を通じて対処すべき質問の候補リストの生成と優先順位付けに貢献できるはずです。例えば、エビデンスが最も混乱しているまたは議論を呼んでいる場所、現在の実践に不確実性や一貫性のない場所、スクリーニング、診断、治療に関する質問などです。\r
\r
---\r
\r
## パート2完了\r
\r
パート2を完了しました！\r
\r
パート3では消費者とステークホルダーの関与について説明します。\r
\r
パート2を完了しました！\r
\r
パート3では消費者とステークホルダーの関与について説明します。\r
\r
**パート2完了**\r
\r
---\r
\r
# パート3：消費者・ステークホルダーの関与と利益相反への配慮\r
\r
国際ガイドライン開発\r
\r
【図】figure_31.jpg（元のファイル名: image98.jpg）— パート3タイトルスライド\r
\r
---\r
\r
## 消費者・ステークホルダーの関与\r
\r
【チェックリスト対応】ステップ6：消費者とステークホルダーの関与\r
\r
【図】figure_32.jpg（元のファイル名: image99.jpg）— 消費者・ステークホルダーの関与スライド\r
\r
### 消費者・ステークホルダーの関与\r
\r
- ガイドライン開発に関与し協議すべき適切なステークホルダーを特定する\r
- ガイドラインパネルメンバーは通常、このステップに直接関与しない\r
- 潜在的な消費者やステークホルダーが平等な投票権を持つパネルメンバーになり得ることを認識することが重要である\r
- パネルに参加していないステークホルダーからの有用なフィードバックは有益なフィードバックを生み出す可能性がある\r
\r
ガイドラインの影響を受ける可能性のあるすべての人々の見解を取り入れるために、ガイドラインの開発に関与し協議すべき適切なステークホルダーを特定する必要があります。ガイドラインパネルメンバーは通常、適切なステークホルダーを特定するための戦略の策定プロセスには直接関与しません。\r
\r
しかし、潜在的なステークホルダーが平等な投票権を持つパネルメンバーになり得ること、そして適切なトレーニングを受けることを認識することは重要です。さらに、パネルに参加していないステークホルダーからのフィードバックは、実装プロセスの開発において有用なフィードバックを生み出す可能性があります。\r
\r
>>>補足【消費者とステークホルダーの区別】\r
ガイドライン開発の文脈では、以下のように区別されます：\r
\r
**消費者（Consumer）**：個々の患者、患者に対して未報酬のケアや支援を提供するケア提供者、潜在的な患者としてまた課税を通じた医療の資金提供者としての一般市民、患者の利益を代表するコミュニティ組織や擁護団体を含みます。\r
\r
**ステークホルダー（Stakeholder）**：専門職団体、医療管理者、政策立案者、産業界の代表者など、ガイドラインの影響を受ける可能性のあるすべてのグループを含みます。\r
\r
日本のガイドライン開発においても、患者・市民参画（PPI: Patient and Public Involvement）の重要性が認識されつつあり、Mindsガイドライン作成マニュアルでも患者の視点の取り込みが推奨されています。\r
<<<\r
\r
---\r
\r
## 利益相反 — 定義\r
\r
【チェックリスト対応】ステップ7：利益相反への配慮\r
\r
【図】figure_33.jpg（元のファイル名: image100.jpg）— 利益相反の定義スライド\r
\r
### 利益相反 — 定義\r
\r
- 主導組織は、利害関係の申告を標準化し、潜在的な利益相反を透明性のある方法で管理するための方針を提供すべきである\r
- 利益相反とは、個人の私的な利害とその専門的義務との間の乖離であり、独立した観察者が、その個人の専門的行動や意思決定が個人的利益によって動機付けられているのではないかと合理的に疑問を呈し得るものである\r
\r
利益相反（COI）は、ガイドライン開発プロセスと推奨にバイアスをもたらす可能性があります。主導組織は、利害関係の申告を標準化し、潜在的な利益相反を透明性のある方法で管理するための方針を提供すべきです。\r
\r
利益相反には多くの定義があります。Guidelines International Networkは「利害関係の開示と利益相反の管理に関する原則」を公表し、利益相反を以下のように説明しています。直接的な経済的利益相反は、ガイドラインのトピックに直接関連する製品やサービスへの投資を有する組織との経済的関係を指し、間接的な利益相反は、学術的昇進、臨床収入源、地域社会での地位などの問題に関連します。\r
\r
直接的な経済的利益相反には、サービスに対する直接的な支払いやストックオプション、関連する技術や介入のメーカーからのコンサルタント料、理事会メンバーシップ、または研究助成金の形が含まれます。知的利益相反には、特定の観点への愛着を生む可能性のあるアイデアや学術活動への愛着が含まれ、最終的には臨床収入や給与に関連する間接的な経済的利益、または学術的昇進やより良い地域社会での地位による他の利益につながる可能性があります。\r
\r
より簡潔な説明は、利益相反とは個人の私的な利害とその専門的義務との間の乖離であり、独立した観察者が、その個人の専門的行動や意思決定が個人的利益によって動機付けられているのではないかと合理的に疑問を呈し得るものです。\r
\r
>>>補足【利益相反の種類】\r
利益相反は大きく以下のように分類されます：\r
\r
**直接的な経済的利益相反（Direct Financial COI）**：\r
- 製薬企業や医療機器メーカーからのコンサルタント料、講演料、研究助成金\r
- 関連企業の株式保有\r
- 関連企業の理事会メンバーシップ\r
\r
**間接的な利益相反（Indirect COI）**：\r
- **知的利益相反**：特定の治療法や理論に対する学術的立場（自分の過去の研究結果への愛着など）\r
- **学術的利益相反**：学術的昇進に関連する利害\r
- **臨床的利益相反**：特定の推奨が自身の臨床収入に影響する可能性\r
\r
日本でも、診療ガイドライン作成において利益相反の管理は重要視されており、各学会が独自の利益相反管理方針を策定しています。\r
<<<\r
\r
---\r
\r
## 利益相反 — 申告と管理\r
\r
【図】figure_34.jpg（元のファイル名: image101.jpg）— 利益相反の申告と管理スライド\r
【図】figure_35.jpeg（元のファイル名: image102.jpeg）— 利益相反のウェイト付けの表（Table A1）\r
【図】figure_36.jpeg（元のファイル名: image103.jpeg）— トピックとの関連性の表（Table A2）\r
\r
### 利益相反 — 申告と管理\r
\r
パネルメンバーへのキーメッセージ：\r
\r
すべての利害関係を組織が要求するとおりに申告してください\r
\r
あなたの利害関係と潜在的な利益相反は公開される可能性があります\r
\r
パネルメンバーへのキーメッセージは、ガイドラインを開発する組織が要求するすべての利害関係を申告すること、それを誠実に行うこと、およびガイドライン開発の過程で利害関係に変更があった場合に他のメンバーに知らせることです。また、あなたの利害関係と潜在的な利益相反は公開される可能性があることにも注意してください。\r
\r
組織があなたの申告した利害関係がガイドラインにとって潜在的な利益相反であるかどうかをどのように判定するかを理解するために、ここに米国胸部学会の例を示します。表A1は、潜在的な利益相反がどのようにウェイト付けされるかを示しており、より大きなウェイトは利益相反である可能性がより高いことを意味します。さらに、表A2は、潜在的な利益相反がガイドラインのトピックに関連しているかどうかをどのように判定するかを示しています。これはあくまで一つの組織のアプローチであり、他の組織は異なる手順を持っている場合があります。\r
\r
次に、Guidelines International Networkが利害関係の申告と利益相反の管理のために公表した9つの包括的原則について説明します。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート1\r
\r
【図】figure_37.jpg（元のファイル名: image104.jpg）— GIN原則1のスライド\r
\r
### 利益相反 — GIN原則 — パート1\r
\r
**原則1**\r
\r
ガイドライン開発者は、直接的な経済的利益相反または関連する間接的な利益相反を持つメンバーを除外するためにあらゆる努力をすべきである\r
\r
直接的および間接的な利益相反は申告される必要がある\r
\r
GINは、これが現実的でない場合の例外の必要性を認識しているが、そのような問題がこの原則の重要性を損なうべきではない\r
\r
利益相反を持つメンバーを含める場合の透明性の必要性 — 彼らはガイドラインパネルの少数派を占めるべきである\r
\r
GIN原則1。ガイドライン開発者は、直接的な経済的利益相反または関連する間接的な利益相反を持つメンバーを含めないようにあらゆる可能な努力をすべきです。通常、標準化されたフォームを使用して、ガイドライン開発グループのすべてのメンバーに適用される利益相反の標準的な定義とともに、直接的および間接的な利益相反を申告するよう求められます。ガイドライン開発プロセスの開始前にこれを要求することで、ガイドライン開発組織は、直接的または間接的な利益相反を持つパネルの議長やメンバーを含めないよう努力することができます。しかし、これが現実的でない場合の例外の必要性がある場合もありますが、そのような問題がこの原則の重要性を損なうべきではありません。\r
\r
パネルメンバーが利益相反を持つ状況では、利益相反を持つメンバーはガイドラインパネルの少数派を占めるべきであり、ガイドライン開発者は利益相反を持つメンバーを含めた理由と利益相反の管理について透明性を確保すべきです。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート2\r
\r
【図】figure_38.jpg（元のファイル名: image105.jpg）— GIN原則2のスライド\r
\r
### 利益相反 — GIN原則 — パート2\r
\r
**原則2**\r
\r
利益相反の定義とその管理は、ガイドライン開発グループのすべてのパネルメンバーに適用される：\r
\r
- パネルが構成される前に決定されるべきである — 代表する専門分野やステークホルダーに関係なく\r
\r
GIN原則2。利益相反の定義とその管理は、代表する専門分野やステークホルダーに関係なく、ガイドライン開発グループのすべてのパネルメンバーに適用され、これはパネルが構成される前に決定されるべきです。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート3\r
\r
【図】figure_39.jpg（元のファイル名: image106.jpg）— GIN原則3のスライド\r
【図】figure_40.jpg（元のファイル名: image107.jpg）— GIN原則3のスライド（追加全画面表示）\r
\r
### 利益相反 — GIN原則 — パート3\r
\r
**原則3**\r
\r
ガイドライン開発グループは、利害関係の開示に標準化されたフォームを使用すべきである：\r
\r
- すべてのメンバーが同じ領域に関連する利害関係を申告する\r
- 潜在的な利益相反の評価者に関連情報が利用可能となる\r
\r
GIN原則3。ガイドライン開発グループは、すべてのメンバーが同じ領域に関連する利害関係を申告し、利害関係を潜在的な利益相反について評価する担当者が関連情報を利用できるように、利害関係の開示に標準化されたフォームを使用すべきです。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート4\r
\r
【図】figure_41.jpg（元のファイル名: image108.jpg）— GIN原則4のスライド\r
\r
### 利益相反 — GIN原則 — パート4\r
\r
**原則4**\r
\r
ガイドライン開発グループは、すべての直接的な経済的利益相反および間接的な利益相反を含め、利害関係を公開すべきである\r
\r
- 情報はガイドライン利用者が容易にアクセスできるようにする\r
- 具体的な金額を開示する\r
\r
GIN原則4。ガイドライン開発グループは、すべての直接的な経済的利益相反および間接的な利益相反を含め、利害関係を公開すべきです。これらはガイドライン利用者が容易にアクセスできるようにすべきです。例えば、開示事項の登録簿を通じて行いますが、他の方法も使用される場合があります。実際のまたはおおよその金額を提供することで透明性が向上するため、具体的な金額を開示すべきです。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート5\r
\r
【図】figure_42.jpg（元のファイル名: image109.jpg）— GIN原則5のスライド\r
\r
### 利益相反 — GIN原則 — パート5\r
\r
**原則5**\r
\r
ガイドライン開発グループのすべてのメンバーは、グループの各会議および定期的な間隔で、利害関係の変更を申告し更新すべきである\r
\r
- 例えば、常設のガイドライン開発グループの場合は年1回\r
\r
GIN原則5。ガイドライン開発グループのすべてのメンバーは、グループの各会議および定期的な間隔で、利害関係の変更を申告し更新すべきです。例えば、常設のガイドライン開発グループの場合、グループメンバーは年1回利害関係を更新するよう求められる場合があります。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート6\r
\r
【図】figure_43.jpg（元のファイル名: image110.jpg）— GIN原則6のスライド\r
\r
### 利益相反 — GIN原則 — パート6\r
\r
**原則6**\r
\r
ガイドライン開発グループの議長は、直接的な経済的利益相反または関連する間接的な利益相反を持つべきではない。\r
\r
- 議長の直接的または間接的な利益相反が避けられない場合、利益相反のない共同議長がガイドラインパネルを率いるよう任命されるべきである\r
- 関連する利益相反は、推奨の方向性または強さに影響する場合に存在することを覚えておくことが重要である\r
\r
GIN原則6。ガイドライングループの議長は、直接的な経済的利益相反または関連する間接的な利益相反を持つべきではありません。これが避けられない場合は、利益相反のない共同議長がガイドラインパネルを率いるよう任命されるべきです。\r
\r
関連する利益相反は、推奨の方向性または強さに影響する場合に存在することを覚えておくことが重要です。そのような利益相反のない共同議長の例として、推奨の方向性や強さに関連する利害関係を持たない方法論者が挙げられます。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート7\r
\r
【図】figure_44.jpg（元のファイル名: image111.jpg）— GIN原則7のスライド\r
\r
### 利益相反 — GIN原則 — パート7\r
\r
**原則7**\r
\r
関連する利益相反と特定の知識または専門知識を持つ専門家は、個々のトピックの議論に参加することを許可される場合がある\r
\r
意見を提供する者の間で適切な意見のバランスが必要である\r
\r
場合によっては、この役割を果たす者は専門家アドバイザーと見なされることがある — 彼らはガイドライン開発グループの投票メンバーでも非投票メンバーでもない\r
\r
GIN原則7。関連する利益相反と特定の知識または専門知識を持つ専門家は、個々のトピックの議論に参加することを許可される場合がありますが、意見の提供を求められる者の間で適切な意見のバランスがあるべきです。場合によっては、この役割を果たす者は、ガイドライン開発グループの投票メンバーでも非投票メンバーでもなく、ガイドライン開発グループの外部からガイドライン開発に参加する専門家アドバイザーと見なされることがあります。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート8\r
\r
【図】figure_45.jpg（元のファイル名: image112.jpg）— GIN原則8のスライド\r
\r
### 利益相反 — GIN原則 — パート8\r
\r
**原則8**\r
\r
推奨の方向性または強さについて決定するガイドライン開発グループのメンバーは、直接的な経済的利益相反を持つべきではない\r
\r
- ガイドライン開発のこの段階に参加すべきではない\r
- 推奨の方向性と強さに関する議論から物理的に不在となるよう求められることがある\r
\r
GIN原則8。推奨の方向性または強さについて決定するガイドライン開発グループのメンバーは、直接的な経済的利益相反を持つべきではありません。\r
\r
これらのメンバーは、ガイドライン開発のこの段階に参加すべきではありません。推奨の方向性と強さに関する議論から物理的に不在となるよう求められることがあります。\r
\r
---\r
\r
## 利益相反 — GIN原則 パート9\r
\r
【図】figure_46.jpg（元のファイル名: image113.jpg）— GIN原則9のスライド\r
\r
### 利益相反 — GIN原則 — パート9\r
\r
**原則9**\r
\r
監督委員会は、利益相反に関連するルールの策定と実施に責任を負うべきである。\r
\r
監督委員会は、紛争の問題に対処し、誰が投票メンバーまたは非投票メンバーであり、誰が専門家アドバイザーとして指定されるべきかの決定について、ガイドライン開発グループの議長に助言すべきである。\r
\r
GIN原則9。監督委員会は、利益相反に関連するルールの策定と実施に責任を負うべきです。\r
\r
監督委員会は、紛争の問題に対処し、誰が投票メンバーまたは非投票メンバーであり、誰が専門家アドバイザーとして指定されるべきかの決定について、ガイドライン開発グループの議長に助言すべきです。\r
\r
>>>補足【GIN 9原則のまとめ】\r
GINの利益相反に関する9つの原則を整理すると：\r
\r
1. **除外の努力**：利益相反を持つメンバーを可能な限り除外する\r
2. **普遍的適用**：利益相反の定義と管理はすべてのメンバーに適用する\r
3. **標準化**：標準化されたフォームで申告する\r
4. **公開**：利害関係を公開し、金額も開示する\r
5. **更新**：定期的に利害関係を更新する\r
6. **議長の要件**：議長は利益相反を持つべきではない\r
7. **専門家の参加**：利益相反を持つ専門家はアドバイザーとして参加可能\r
8. **投票からの排除**：直接的経済的利益相反を持つメンバーは推奨の決定に参加しない\r
9. **監督委員会の責任**：利益相反ルールの策定と実施は監督委員会が担当\r
\r
これらの原則は、ガイドラインの信頼性を確保するための国際的な標準として広く参照されています。\r
<<<\r
\r
---\r
\r
## パート3完了\r
\r
パート3を完了しました！\r
\r
Level 1コースのModule 2に進んでください。\r
\r
パート3を完了しました！\r
\r
Level 1コースのModule 2に進んでください。\r
\r
**パート3完了**\r
\r
---\r
\r
# 付録：GIN-McMaster ガイドライン開発チェックリスト\r
\r
以下は、GIN-McMaster ガイドライン開発チェックリスト（Version: 2013年12月16日）の18ステップの概要です。添付資料のPDF文書に基づいています。\r
\r
---\r
\r
## ガイドライン開発チェックリスト概要\r
\r
ガイドライン開発チェックリスト（GDC）\r
\r
以下のトピックリストのタイトルをクリックするか、ブックマークを表示して、チェックリストの特定のトピックに移動できます。チェックリスト内のトピックタイトルをクリックすると、このページのトピックリストに戻ります。ガイドライン開発プロセスの進行に合わせて、完了した項目または該当しない項目を追跡するためのチェックボックスとメモのセクションが各項目に提供されています。\r
\r
GDC全体で使用されるガイドライン開発のトピック、用語、略語の定義については、用語集をダウンロードしてください。\r
\r
---\r
\r
### ステップ1：組織、予算、計画およびトレーニング\r
\r
1. ガイドライン開発グループの構造を確立し、関与する様々なグループ間の役割、タスク、関係を決定する（例：ガイドラインのトピック選定とグループメンバーシップを指示する監督委員会/機関、エビデンスを統合する専門家と方法論者からなるワーキンググループ、管理的支援を提供する事務局、推奨を作成するガイドラインパネル、協議のためのステークホルダーと消費者）。（トピック3、4、6も参照）\r
\r
2. ガイドライン開発グループに関する財務的および実現可能性の問題について、提案されたガイドライン開発プロジェクトの徹底的な評価を行う（例：プロジェクトを完了するためのリソースの利用可能性、ガイドラインパネルとスタッフからの期待されるコミットメントなど）。ガイドラインプロジェクトを進めるための組織的承認を得る。\r
\r
3. ガイドラインの開発に関する予算を作成し、各ステップの推定コストを概説する（例：ワーキンググループとスタッフの報酬、外部組織やグループへの特定のタスクのアウトソーシング、旅費、出版と普及の費用など）。\r
\r
4. ガイドラインパネルメンバーが時間に対する支払いまたは報酬を受けるか、ボランティアとして作業するかを決定する。\r
\r
5. 利益相反への配慮に注意しながら、ガイドライン開発のための資金を取得または確保する。（トピック7も参照）\r
\r
6. ガイドライン開発プロセスを促進するために必要な管理的支援を概説し手配する（例：利害関係の申告を整理・取得し、グループ会議を手配するワーキンググループの事務局など）。\r
\r
7. ガイドライン開発プロセスに関与する人々に必要なトレーニングとサポートを計画・準備する（例：ガイドラインパネルメンバーのための利益相反関連の教育やトレーニング、ガイドライングループに参加する患者のための研修セッションなど）。（トピック4、6も参照）\r
\r
8. ガイドラインの完成とガイドライン開発プロセスのマイルストーン完了の目標日のタイムラインを設定する。\r
\r
9. 計画されたガイドラインに関連する法的考慮事項があるかどうかを決定する（例：オーファンドラッグの償還政策）。\r
\r
10. プロジェクトの進行に合わせて完成できるガイドライン全体のプロトコルを作成する。これには、ガイドラインの全体的な目標と目的の概要、タイムライン、タスクの割り当て、意思決定の文書化が必要なステップ、すべてのステップの提案された方法論（例：ガイドライングループの形成方法、ガイドラインで扱うトピックの選定、コンセンサス方法、協議方法、エビデンスの検索と選定方法など）が含まれる。\r
\r
---\r
\r
### ステップ2：優先順位の設定\r
\r
1. ガイドラインのトピックの優先順位設定のプロセスを決定し、プロセスの指揮に責任を持つ者を決定する（例：スポンサー組織の本部の監督委員会による優先順位設定、政府の保健省や専門学会からの照会による優先順位設定）。\r
\r
2. 優先順位設定中のガイドラインのトピック提案に対する特定の基準を用いた系統的で透明性のあるプロセスを適用する（例：高い有病率と疾病負荷、回避可能な死亡率と罹患率、高コスト、新興疾患や新興の治療選択肢、臨床実践の変動、急速に変化するエビデンスなど）。\r
\r
3. 優先順位設定プロセスとガイドラインのトピック選定に適切なステークホルダーを関与させる（例：臨床医、専門学会、政策立案者、支払者、一般市民）。（トピック6も参照）\r
\r
4. ガイドラインの推奨を実施するために必要な重要性とリソースに関する異なる視点をどのように考慮するかを検討・決定する（例：患者、支払者、臨床医、公衆衛生プログラム）。（トピック11も参照）\r
\r
5. 提案されたトピックをカバーする既存の最新のガイドラインを検索し、その信頼性を評価する（例：AGREE II）。既存のガイドラインを適応できるか、完全に新しいガイドラインを開発すべきかを決定する。（トピック10も参照）\r
\r
6. ガイドラインの開発または一部について共同的な取り組みを求めるかどうかを決定するために、ガイドラインを開発する他の組織とのパートナーシップの必要性や機会を議論する。\r
\r
7. 実施上の問題と変革の障壁に関して、提案されたガイドラインのトピックのスコーピング演習を行う（例：開発されたガイドラインが健康アウトカムを改善する可能性がある場合、医療推奨の実施が実現可能な場合、リソースが利用可能な場合など）。\r
\r
8. 設定された優先順位と選定されたガイドラインのトピックに合意するために使用されるコンセンサス方法を選択または提供する（例：投票、Delphiコンセンサス）。（トピック4も参照）\r
\r
9. 透明性を確保するために、優先順位設定プロセスと選定されたガイドラインのトピックを文書化する。\r
\r
---\r
\r
### ステップ3：ガイドライングループメンバーシップ\r
\r
1. ワーキンググループ、ガイドラインパネルなど、必要な役割を果たすために、対象読者からのメンバー、患者とケア提供者、最前線の臨床医、コンテンツの専門家、方法論の専門家、医療経済学の専門家を含む、ガイドライン開発グループの多職種代表性を求める。（トピック6も参照）\r
\r
2. ガイドライン開発グループのメンバーの募集と登録の方法を決定する（例：ポストの広範な広告、面接による競争的任命など）。\r
\r
3. ガイドラインパネルのためにトピックに適切な専門知識のバランスと適切な代表性を達成する（例：対象読者を構成する専門家とプライマリケア医、パネルメンバーのジェンダーと地理的分布）。ガイドラインの対象読者とトピックが洗練されるにつれて追加メンバーが必要な場合は反復的であり得る。（トピック5も参照）\r
\r
4. ガイドライン開発グループ、特にガイドラインパネルの最適なグループサイズを検討する（例：小さすぎるグループは十分な経験、コンテンツの専門知識、広い代表性を欠く可能性があり、大きすぎるグループは凝集性と効果的なグループ相互作用を欠く可能性がある）。\r
\r
5. ガイドライングループメンバーの役割と責任を負うタスクを概説する（例：執筆チームの形成、会議の議事録を取り意思決定を文書化するグループ報告者、方法論的助言の提供、システマティックレビューの実施とその他のエビデンスの取得、患者の視点の提供、専門臨床医の視点の提供など）。\r
\r
6. グループの進行、建設的なダイナミクスの維持、対立の特定と解決、中立性と客観性の維持に経験があり、方法論的専門知識とコンテンツの専門知識を有するグループリーダーまたは議長を選定する。\r
\r
7. 透明性を確保するために、ガイドライングループメンバーの選定プロセスと役割を文書化する。\r
\r
---\r
\r
### ステップ4：ガイドライングループプロセスの確立\r
\r
1. ガイドラインパネルメンバーや他のグループとのコミュニケーションの方法と頻度を確立し、手配の責任者を決定し、このアプローチから逸脱すべき場合を検討する。\r
\r
2. ガイドライン開発グループメンバーのための紹介、トレーニング、サポートを通じて、グループプロセスの期待と認識を設定する（例：グループの議論と意思決定のための理想的な条件の設定）。\r
\r
3. ガイドライン開発グループのトレーニングの一環として、グループメンバーがプロセスと提案された方法が何であるかを理解し、それを遵守する必要があることを確認する（例：使用される可能性のあるコンセンサス方法、匿名または非匿名の投票、エビデンスの評価、グループの議論とアイデアの提供）。\r
\r
4. グループメンバーが貢献する平等な機会を提供され、アイデアと議論が適切に考慮される最適な条件を設定することを目指す（例：グループの議論、意思決定、推奨の策定中）。\r
\r
5. グループメンバー間の対立や紛争、グループプロセスの機能不全に対処するための方法を確立する。\r
\r
6. ガイドライン開発プロジェクト全体を通じて、グループプロセスに関する議論とフィードバックの機会を提供する。\r
\r
7. ガイドライン開発で使用・作成された文書の構造化された適時の配布とアーカイブの方法を確立する。\r
\r
8. 会議の定足数を設定する（例：グループの75%がガイドライン推奨を策定するために出席しなければならない）が、すべてのグループメンバーが可能な限りすべての会議に出席することを期待する。\r
\r
9. 会議の時間と場所（バーチャルまたは対面）を事前に設定または計画し、各会議の範囲と具体的な議題を準備する。\r
\r
10. すべての会議の議事録を記録し、それを公開するか内部のみで利用可能にするかを決定する（例：誰が出席したか、議題は何であったか、どのような決定が行われたか、次のステップは何か）。\r
\r
---\r
\r
### ステップ5：対象読者の特定とトピックの選定\r
\r
1. ガイドラインの主要な対象読者（例：プライマリケア医、保健プログラム管理者）と二次的対象読者（例：病院管理者）を特定、定義、および/またはレビューし、ガイドラインで対処できる対象読者の数を決定する。\r
\r
2. 特定された対象読者がガイドラインのトピックに適用可能であり、関連する対象読者が見落とされていないことを確認するために、適切なステークホルダーに相談する。（トピック6も参照）\r
\r
3. ガイドライン内で対処すべきトピックの候補リストを生成し優先順位付けするための方法と基準を確立する（例：エビデンスが最も混乱しているまたは議論を呼んでいる場所、現在の実践に不確実性や一貫性がない場所、スクリーニング、診断、治療に関する質問など）。\r
\r
4. ガイドラインのすべての関連トピックが特定され、対象読者のニーズを満たすことを確認するために、適切なステークホルダーに相談する。（トピック6も参照）\r
\r
5. ガイドライン内で対処される最終トピックに合意するためにグループが使用するコンセンサス開発方法を選択または提供する（例：Delphi法、名目集団法）。\r
\r
6. 透明性を確保するために、対象読者の特定プロセスとガイドラインのトピック選定を文書化する。\r
\r
---\r
\r
### ステップ6：消費者とステークホルダーの関与\r
\r
1. ガイドラインの影響を受ける可能性のあるすべての人々の見解を取り入れるために、ガイドラインの開発に関与し協議すべき適切なステークホルダーを特定する（例：専門職グループ、保健管理者、政策立案者、産業界の代表者）。\r
\r
2. ガイドラインの開発に関与し協議すべき適切な消費者を特定する（例：個々の患者、患者に対して未報酬のケアや支援を提供するケア提供者、潜在的な患者としてまた課税を通じた医療の資金提供者としての一般市民、患者の利益を代表するコミュニティ組織、患者とケア提供者の利益を代表する擁護団体）。\r
\r
3. 消費者とステークホルダーの関与のための方法を確立し、ガイドラインのステークホルダーの登録簿を維持する（例：ガイドラインパネルに直接参加する消費者とステークホルダーメンバーの登録、個別の消費者とステークホルダー会議やワークショップの開催の告知、文書の電子配布とフィードバック、文書のレビューとフィードバックのための公開期間）。\r
\r
4. 役割を明確にし貢献を最大化するために、ガイドラインパネルに直接関与する消費者とステークホルダーに情報を提供する（例：トレーニングおよび導入セッション）（例：エビデンスを客観的に評価すること、自己利益に基づく推奨を避けること）。\r
\r
5. ガイドラインパネルに直接参加していない消費者とステークホルダーとの協議の役割、タスク、タイミングを決定する（例：優先順位設定へのコメント、ガイドラインのトピック、対象読者の特定、患者にとって重要なアウトカムの特定、追加エビデンスの特定、パネルが考慮していない結果の指摘、最終ガイドラインドラフトのレビューなどの機会を含む、ガイドライン開発プロセスの特定のマイルストーンにおいて）。\r
\r
6. 効果的なインプットを確保するために、消費者とステークホルダーのインプットとコメントのための標準テンプレートを開発または採用し、明確な指示またはトレーニングモジュールを添える。\r
\r
7. 消費者とステークホルダーのフィードバックと協議のための十分な時間を提供する。\r
\r
8. 消費者とステークホルダーのフィードバックを処理し、異なる視点に対処するための方針とプロセスを設定する（例：意思決定において多様な視点が考慮されることを確認する、判断に対する透明性のある根拠を提供する、ステークホルダーのための異議申立プロセスを提供する、協議コメントとガイドライン開発パネルの回答を公開する）。\r
\r
9. 透明性のある方法を確保するために、ガイドラインパネルのための消費者とステークホルダーの登録と選定、およびその他すべての消費者とステークホルダーとの関与と協議を文書化する。\r
\r
---\r
\r
### ステップ7：利益相反（COI）への配慮\r
\r
1. 個々の参加者のプロジェクトへの参加時における利害関係の申告（DOI）に関する方針を設定する。これには、関与前の潜在的なガイドラインパネルメンバーが含まれる（例：開示すべき利害関係は何か、経済的、知的、学術的/臨床的、専門学会の競争的利害関係）。\r
\r
2. 利益相反（COI）の判定に関する方針と、COI申告の収集・更新のアプローチを設定する（例：経済的利害関係のレベルをどのように開示すべきか、開示がカバーすべき期間はどの程度か、何が利益相反を構成するかを誰が判断するか）。\r
\r
3. 潜在的なガイドライングループメンバーに対して、COI開示の記入方法について明確な指示とトレーニングを提供する。これには、COIを申告しなければならないメンバーのリストと、例を含む申告すべき利害関係の種類が含まれる。\r
\r
4. COI管理に関する方針を設定する（例：COIを持つ個人はガイドライン開発から一律に除外されないが、利益相反の領域に関連する特定の推奨への投票からは除外される、議長はCOIを持つべきではない、エビデンスの要約は利益相反のない方法論者が作成する）。\r
\r
5. ガイドライン開発活動の資金に関するCOI管理の方針を設定する（例：公的資金を提唱する、商業的スポンサーシップを受けない、ガイドラインのトピックと無関係な組織からの商業的スポンサーシップ、翻訳などの非直接的活動のための商業的支援、単一の資金源スポンサーを避ける）。\r
\r
6. 資金源を開示・公開し、ガイドライン開発のためのスポンサーの役割と提供された支援を記述する。\r
\r
7. ガイドライングループメンバーの利益相反を明示的に開示・公開・記述する。特に利益相反が特定の推奨に関係する場合。\r
\r
---\r
\r
### ステップ8：（PICO）クエスチョンの作成\r
\r
1. ガイドラインの質問を生成し、質問の優先順位付けを行い、アウトカムの選択とランキングを行うための方法を確立する。\r
\r
2. ガイドラインで回答すべき主要な質問（例：臨床、健康、政策、費用対効果）を標準フォーマット（例：PICO）を使用して生成・文書化し、すべての質問に回答することが不可能な場合に生成された質問が優先順位付けされる基準を決定する（例：ガイドラインパネルメンバーの調査、ステークホルダーの調査）。\r
\r
3. ガイドラインが適用される対象集団を明示的に記述する。集団の特定の特性を考慮に入れる。例えば、集団における複数の併存疾患の有病率、地理的設定、公平性の問題（例：不利な集団と有利な集団にわたる差別的な相対効果を予想する妥当な理由）。\r
\r
4. 介入を検討する際に規制上の承認が要件であるかどうかを決定する（例：国際ガイドラインの場合、すべての対象国で規制上の承認が存在しない可能性があるため、これは関連しない場合がある）。\r
\r
5. ガイドラインで検討される介入と比較対照を明示的に記述し、介入とアウトカムの関係を描写する分析的フレームワークを開発する。複数の（治療）比較を含めるべきかどうかを特定する。\r
\r
6. 重要なアウトカムを特定する（例：臨床経路に沿ったアウトカム；罹患率、生活の質、死亡率）。望ましい効果（例：利益、負担の軽減、節約）と望ましくない効果（例：害、負担、コスト、患者の自律性の低下）の両方を含む。エビデンスが不足している可能性のある重要なアウトカムを無視しない。\r
\r
7. セッティング（例：国、病院）を決定するか、集団の考慮事項に含める（すなわち、三次医療病院でケアを受ける集団）。\r
\r
8. 代理のアウトカムや間接的なアウトカムよりも患者にとって重要なアウトカムを優先するよう義務付ける。患者にとって重要なアウトカムのデータが不足している場合に、因果経路に沿った代理アウトカムの適切性を検討する。\r
\r
9. 対象集団の価値観と選好を考慮に入れて、アウトカムの相対的重要性をランク付けする。\r
\r
10. 対象集団にとって重要と判断される個々のアウトカムの効果の大きさを事前に決定するか、決定するためのプロセスを開発する。\r
\r
11. すべてのガイドライングループメンバーを関与させ、消費者とステークホルダーに相談して、質問の生成と重要なアウトカムの選択・評価において対象集団からの幅広い代表性を確保する。\r
\r
12. 質問の生成と優先順位付け、アウトカムの選択とランキング、ステークホルダーと消費者の協議の方法が明示的かつ透明性のあるものとなるよう文書化する。\r
\r
13. ガイドラインのプロトコルがエビデンスレビューの方向付けに役立つよう、対象集団、対象疾患、アウトカム、検討された主要な質問を概説していることを確認する。\r
\r
---\r
\r
### ステップ9：アウトカムと介入の重要性、価値観、選好、効用の検討\r
\r
1. ガイドライン開発中の意思決定と審議に情報を提供するための、消費者とステークホルダー（例：患者と対象読者）のアウトカムと介入の相対的重要性、価値観、選好、効用を間接的に取得するか直接的に取得するかを決定する（例：公表された文献のレビュー対消費者との協議）。\r
\r
2. アウトカムと介入の相対的重要性、価値観、選好、効用に関する情報を消費者とステークホルダーから取得するための方法を確立する（例：ガイドラインパネルへの消費者の参加、より広い消費者の代表による調査またはフォーカスグループ）。\r
\r
3. 取得した重要性評価、価値観、選好、効用の確信度を評価するための構造化されたアプローチ（すなわち、それらのエビデンスの質）を使用するかどうかを決定する。\r
\r
4. アウトカムと介入の相対的重要性、価値観、選好、効用を統合するためにモデリングを使用するかどうか、およびモデリングの方法を決定する。\r
\r
5. アウトカムと介入の相対的重要性、価値観、選好、効用に関する情報を取得する際、および意思決定や推奨の策定の際にどの視点を考慮するかを決定する（例：患者、一般市民、社会、臨床医）。\r
\r
6. アウトカムと介入の相対的重要性評価、価値観、選好、効用が矛盾する場合の対処方法を検討し文書化する（例：患者対ケア提供者、患者対一般市民）。\r
\r
7. アウトカムと介入の相対的重要性、価値観、選好、効用に関する情報の取得方法が明示的かつ透明性のあるものとなるよう文書化する。\r
\r
8. 推奨が特定の患者グループや状態に特別な配慮をすべきかどうかなど、倫理的考慮事項を文書化する（例：高齢者、希少疾患、健康格差の影響を受ける人々）。\r
\r
9. 医療推奨を行う際に倫理的または道徳的価値をどのように考慮するかを決定する（例：宗教的、社会的、文化的信念を考慮して）。\r
\r
---\r
\r
### ステップ10：どのエビデンスを含めるかの決定とエビデンスの検索\r
\r
1. システマティックレビュー方法（トピックと組織のフレームワークに応じて、フルシステマティックレビューまたは迅速システマティックレビュー）に従うか、これを行わない場合はその理由を提供する。\r
\r
2. エビデンスの特定、選択、統合のためのプロトコルを開発し（例：既存のシステマティックレビューの検索の実施、新しいシステマティックレビューとグレイリテラチャーの検索）、含めるエビデンスの種類を決定する（例：検索するデータベース、研究の種類、包含・除外基準、有害作用に関する特定の研究の検索、または利益に関する研究から有害作用に関する情報を抽出することを決定する）。\r
\r
3. 検索戦略を開発し、エビデンスの検索と選択を行う担当者を決定する（例：ガイドライン開発グループのワーキンググループ、外部機関へのアウトソーシング、ガイドライン開発グループと外部機関のガイドライン開発の協力関係の形成）。\r
\r
4. 含めるために選択された既存のシステマティックレビューを、検証済みのツール（例：AMSTAR）を使用して批判的に評価し、十分な質でありガイドラインでの使用に適切であることを確認する。\r
\r
5. 既存のシステマティックレビューの更新が必要な場合、新しいエビデンスをどのように含めるか、およびレビューを実施した者にどのように連絡し更新に関与させるかを決定する。\r
\r
6. 新しいシステマティックレビューが必要な場合、フルシステマティックレビューを実施するための十分なリソース（例：時間と資金）が利用可能かどうかを評価する。\r
\r
7. リソースが限られている場合、迅速評価方法論の適用を検討し、方法論を明示的に記述し、重要な限界、不確実性、およびフルシステマティックレビューを実施する必要性と緊急性を記載する。\r
\r
8. 追加のエビデンスと未公表データを特定するための方法を確立する（例：ガイドラインパネルメンバーからの提案、ステークホルダーとの協議）。\r
\r
9. エキスパートの意見の取り扱いに関する方針を設定する（すなわち、エキスパートの意見はそれ自体ではエビデンスではなく、エビデンスとして使用すべきではない。むしろ、エキスパートの意見を支持する経験や観察は、体系的かつ透明性のある方法で記述、特定、可能であれば概念的フレームワークの中で評価されるべきである）。\r
\r
10. エビデンスの検索と選択、適格性の判断、含まれたエビデンスの範囲、使用された検索戦略を文書化・公開し、方法が明示的かつ透明性のあるものとなるようにする。\r
\r
---\r
\r
### ステップ11：エビデンスの要約と追加情報の検討\r
\r
1. 診断検査の精度、予想される利益、害、リソース（コスト）、エビデンスの質の評価、各アウトカムの相対的および絶対的結果/効果推定の要約を含む、各重要なアウトカムに対する最良の利用可能なエビデンスの簡潔な要約（例：エビデンステーブル、エビデンスプロファイル、またはfindings表）を使用してエビデンスを要約する。\r
\r
2. 推奨に情報を提供するために必要な追加情報の要約を提供する（例：質的ナラティブ要約、エビデンステーブル）。これには価値観と選好、期待される効果を修正する可能性のある要因、ニーズ（有病率、ベースラインリスク、または状態）、公平性への影響、実現可能性、リソースの利用可能性が含まれる。\r
\r
3. リソースの使用とコストに関する情報を取得するための方法を確立する（例：既存の経済評価の検索、経済モデルの開発、費用対効果分析の実施）。\r
\r
4. コスト、リソースの使用、および該当する場合は費用対効果を特定し、コストの性質（患者、コミュニティ、社会）を記述する（例：アフォーダビリティの考慮、介入の利益と害のエビデンスに対して直接的に比較検討されるリソースの使用と取得コストの推定）。\r
\r
5. 追加情報が統合されたエビデンスとどのように組み合わされるかの方法を文書化し、透明性を確保する（例：患者の価値観に関する正式なコンセンサス、公平性の問題に関するコンセンサス、正式な経済分析、分解されたリソース使用データの質的な方法での検討）。\r
\r
6. エビデンステーブルの使用に関するトレーニングと議論の機会を提供し、ガイドラインパネルのすべてのメンバーがテーブルに精通し、適切な方法で使用することを確認する。\r
\r
7. エビデンスの要約に加えて、ガイドラインパネルの審議に情報を提供するために、フルシステマティックレビュー、原著研究、その他のエビデンスのソースを利用可能にする（例：共同ウェブサイトの設定、および/または会議と電子コミュニケーションを通じて利用可能にする）。\r
\r
---\r
\r
### ステップ12：エビデンスの質、強さ、または確実性の判定\r
\r
1. エビデンスの質を評価する際に考慮すべき基準を概説するフレームワークを選択する（例：GRADE、USPSTF）。評価ツールの修正を避ける。\r
\r
2. エビデンスの質を評価する責任者を決定する（例：ワーキンググループに参加する利益相反のない方法論者）。\r
\r
3. 各重要なアウトカムに対するエビデンスの質を評価する。\r
\r
4. エビデンスの全体的な質を評価する（例：最も重要またはクリティカルと評価されたアウトカムからの最低の質のエビデンス、またはすべてのアウトカムが同じ方向を指す場合は最高の質のエビデンス）。\r
\r
5. アウトカムとエビデンスの本体について評価されたエビデンスの質を報告する。\r
\r
6. エビデンスの質の評価で行われた判断を文書化し、透明性と明示性を確保する。\r
\r
>>>補足【GRADEシステムについて】\r
**GRADE（Grading of Recommendations Assessment, Development and Evaluation）** は、エビデンスの確実性を評価し推奨の強さを決定するための国際的に最も広く使用されているシステムです。\r
\r
GRADEではエビデンスの確実性を4段階で評価します：\r
- **高（High）**：真の効果が効果推定値に近いという強い確信がある\r
- **中（Moderate）**：効果推定値に対して中程度の確信がある\r
- **低（Low）**：効果推定値に対する確信は限られている\r
- **非常に低（Very Low）**：効果推定値に対してほとんど確信がない\r
\r
エビデンスの確実性は、バイアスのリスク、非一貫性、非直接性、不精確さ、出版バイアスの5つの要因によって下げられ、効果の大きさ、用量反応関係、交絡因子の3つの要因によって上げられる可能性があります。\r
\r
日本のMindsガイドライン作成マニュアルでもGRADEシステムの活用が推奨されています。\r
<<<\r
\r
---\r
\r
### ステップ13：推奨の作成とその強さの決定\r
\r
1. 推奨に到達するために考慮すべき要因を概説するフレームワークを適用する。\r
\r
2. 推奨が策定されるコンセンサス会議の物流の詳細を計画し参加者と共有する。これには会議に必要な文書の配布（例：エビデンスの要約、エビデンスから推奨への表）、会議の議題の設定、判断について合意するためにグループが使用するコンセンサス開発方法の選択（例：Delphi法、名目集団法）が含まれる。\r
\r
3. 推奨に影響するフレームワークの要因をレビューする。これには方向性と強さが含まれる（例：望ましい結果と望ましくない結果のバランスに焦点を当てた分析に関連するエビデンスと情報の種類、エビデンスの質、利益と害の差の大きさ、価値観と選好の確実性または変動性、リソースの使用、公平性、その他の要因）。\r
\r
4. 該当する場合、エビデンスが不十分またはエビデンスの質が非常に低い状況での推奨策定の準備を行う（例：判断を透明性をもって示した条件付き推奨、ガイドラインパネルが意思決定が間違っている可能性が相当あると感じる場合は推奨なし、さらなる研究が利用可能になるまでの最良の管理選択肢のガイダンスを補完する研究の文脈での介入使用の推奨）。\r
\r
5. 研究推奨の策定の準備を行い、それらをどこに報告するかを決定する（例：ガイドラインの付録において、具体的な研究質問、測定すべき具体的な患者にとって重要なアウトカム、介入の利益および/または望ましくないデメリットに関する不確実性を軽減するために必要な研究のその他の関連側面を示唆する）。\r
\r
6. 推奨を策定し、各推奨の根拠を要約する（例：ナラティブまたは表で）。グループが行った判断の詳細と、推奨とそれを支持するエビデンスの間の明示的なリンクを含む。\r
\r
7. ガイドラインの対象読者にその推奨に従うことについてのガイドライングループの確信度を伝えるための、策定された推奨の強さを評価する方法を選択する。\r
\r
8. 推奨の強さを評価するためにグループが使用するコンセンサス開発方法を選択する（例：Delphi法、名目集団法、投票）。\r
\r
9. 推奨がパフォーマンス指標/質の基準として適切かどうかについての提案を行う（例：高い質または中程度の質のエビデンスに基づく強い推奨に関連する管理選択肢は、質の基準の特に良い候補である。推奨が弱い場合、代替的な管理戦略の相対的なメリットについて患者と議論し、その相互作用の適切な文書化が質の基準となり得る）。\r
\r
10. 推奨の策定と強さの決定で行われた判断を文書化し、透明性と明示性を確保する。\r
\r
---\r
\r
### ステップ14：推奨の文言ならびに実施、実現可能性、公平性の考慮事項\r
\r
1. ガイドライン全体を通じて明確性を確保し一貫性を維持するために、推奨文に使用する標準化された文言を決定する。曖昧で非特異的な文言を避ける。\r
\r
2. ガイドライン利用者が推奨を理解するために他の資料を参照する必要がないよう、十分な情報を含む実行可能な形で推奨を記述する。\r
\r
3. 臨床医、患者、政策立案者、その他の対象読者グループに対する推奨の強さの含意を記述するための明確な方向性または解釈の手引きを提供する。\r
\r
4. 推奨文において、推奨が意図される集団、推奨される介入、代替的なアプローチまたは介入を示す。\r
\r
5. 推奨の文脈、実現可能性、適用可能性を記述する注釈を含め、公平性の問題や推奨に適用される可能性のある特定の条件などの主要な考慮事項を強調する（例：条件が特定のサブポピュレーション、特定の種類の介入、特定の価値観と選好、特定のリソースが利用可能な場合に適用されるかどうか）。\r
\r
6. 推奨文の近くにエビデンスの質と推奨の強さを報告する。\r
\r
7. 推奨文の最終的な文言に合意するためにグループが使用する方法を確立する（例：レビューと承認、正式なコンセンサス）。\r
\r
8. 推奨を理解しやすく目に見える形で報告する（例：長い段落の中に推奨を埋め込まない、推奨をサマリーセクションにまとめる）。\r
\r
---\r
\r
### ステップ15：報告とピアレビュー\r
\r
1. ガイドラインの報告のための標準化されたフォーマットを、特定の構造、見出し、内容で開発または採用する。\r
\r
2. 普及計画に対応するガイドライン製品の形式を決定する（例：フルガイドライン、技術報告書/システマティックレビュー付きフルガイドライン、臨床医や政策立案者向けの簡潔なガイドライン、患者向け消費者版）。（トピック16も参照）\r
\r
3. ガイドライン製品の執筆責任者を決定し（例：ガイドラインワーキンググループの小委員会）、著者を決定する（例：個人の著者、組織を著者とする、ワーキンググループを著者とする）。（トピック1も参照）\r
\r
4. ガイドライン報告書の最終ドラフトをガイドライン開発グループの全メンバーによるレビューにかけ、フィードバック、編集、修正のための十分な機会を提供する。\r
\r
5. 最終文書についてガイドライン開発グループの全メンバーの承認を得る。\r
\r
6. 組織的（すなわち内部の）ピアレビューを開始する。\r
\r
7. 外部ピアレビューの方法を決定する。最終文書の正確性、実用性、明確性、構成、推奨の有用性をレビューし、ガイドライングループが網羅しなかったより広い重要な視点からの意見を確保する（例：招待によるピアレビュー、ガイドライン開発グループからのフィードバックと回答を組み込んだパブリックコンサルテーション期間、査読付き出版物への投稿）。\r
\r
8. 内部および外部のピアレビュープロセスを文書化し、該当する場合は協議コメントとガイドライン開発グループの回答を公開する。\r
\r
---\r
\r
### ステップ16：普及と実装\r
\r
1. ガイドラインの採用を促進するための様々なアプローチによる能動的な普及計画を準備する（例：ガイドラインをオンラインで利用可能にする、ガイドラインの普及と実装に責任を持つ医療制度の関係者と正式な関係を構築してガイドラインの採用を支援する、記者会見、ソーシャルメディア戦略、専門学会の会議での普及、対象読者がアクセスするジャーナルでガイドラインを公表する）。\r
\r
2. 推奨を実践に実装する方法についてのガイダンスを提供するためのツール、サポート、派生製品を開発または適応する（例：モバイルアプリケーション、臨床意思決定支援システムとの統合、対象読者のための教育リソースとしてガイドラインを適応可能にする）。\r
\r
3. ガイドラインの適応に関する考慮を行い、他の文脈にガイドラインを適応したい対象エンドユーザーが体系的かつ透明性のある方法でそれを行う方法についての具体的な指示を提供する（例：地域のリソースとベースラインリスクに基づく推奨の修正、ガイドラインパネルが行った判断から逸脱する含意）。\r
\r
4. ガイドラインの他言語への翻訳に関するルールと規制を設定する（例：ガイドライングループの承認を得た上で第三者組織による翻訳を許可する、翻訳担当スタッフをガイドラインワーキンググループに含める）。\r
\r
---\r
\r
### ステップ17：評価と使用\r
\r
1. ガイドライン開発プロセスの内部評価（すなわち自己評価）を実施する。推奨を策定するために開催されたガイドラインパネル会議を含め、ガイドライングループメンバーにフィードバックを求める。\r
\r
2. 対象エンドユーザーによるガイドラインのパイロットテストを検討する（例：ガイドライン開発グループに参加した対象読者とステークホルダーのメンバーと）。\r
\r
3. 対象エンドユーザーがガイドライン推奨の実施と使用を監視・監査するための基準とツールを提供する（例：実施により変化するべきアウトカムを特定し、アウトカムを測定するための方法を提案する）。\r
\r
4. 実施後のガイドラインの有効性を判定するための前向き評価のためのサポートとツールを提供する（例：可能な場合はランダム化評価を使用する、実施の効果に関する不確実性のため前後比較評価は慎重に使用する）。\r
\r
5. ガイドラインの前向き評価へのガイドライン開発グループの潜在的な関与を検討する（例：ガイドラインを実施する組織とのパートナーシップにより評価研究を計画する）。\r
\r
6. ガイドラインの後続バージョンにおける推奨の固有の実装可能性をどのように改善するかを特定するために、ユーザーからのフィードバックと評価を収集することを計画する。\r
\r
---\r
\r
### ステップ18：更新\r
\r
1. ガイドラインの更新が必要かどうかを定期的に監視・レビューするための方針、手順、タイムラインを設定する（例：新しいエビデンスが利用可能かどうかを判定するために3年ごとにシステマティックレビューを更新する）。\r
\r
2. 文献を定期的に監視し、新しい重要なエビデンスが利用可能かどうかを評価する責任者を決定する（例：ガイドライン開発グループに以前関与していなかった専門家がガイドラインを定期的にレビューすることへの関与を検討する）。\r
\r
3. ガイドラインの部分的または完全な更新が必要とされる条件を設定する（例：特定の推奨文のみ更新が必要な場合、多くの推奨が時代遅れでガイドライン全体が無効となる場合、新たに利用可能となった治療法のための推奨が必要な場合）。\r
\r
4. ガイドライン完了後のガイドライングループメンバーシップと参加の手配を行う（例：1〜2年ごとのメンバー交代、更新時の新グループの選定、ガイドラインパネル議長の継続参加）。\r
\r
5. 将来のガイドライン更新のための資金と物流を計画する（例：継続的な資金の確保、更新プロセスを監督する常設の監督委員会）。\r
\r
6. 更新の計画と提案された方法を文書化し、それらが遵守されることを確保する。\r
\r
---\r
\r
### 参考文献\r
\r
チェックリストは67件の参考文献に基づいています。主要な参考文献には以下が含まれます：\r
\r
- WHO「ガイドライン開発ハンドブック」\r
- NICE「ガイドラインマニュアル」\r
- SIGN「SIGN 50: ガイドライン開発者のハンドブック」\r
- IOM「信頼できる臨床診療ガイドライン」\r
- ACCF/AHA「プラクティスガイドラインタスクフォースの方法論マニュアルと方針」\r
- GRADE関連の一連の出版物（Health Research Policy and Systems誌）\r
- ATS/ERS COPDガイドライン開発ワークショップ報告書シリーズ（Proceedings of the American Thoracic Society誌）\r
- AGREE II関連文献\r
- その他多数\r
\r
（完全な参考文献リストについては、原文のチェックリスト文書の25〜31ページを参照してください。）\r
\r
---\r
\r
**付録完了**`,te=`\r
\r
# INGUIDE Level 1: Module 02 日本語解説コンテンツ\r
\r
---\r
\r
## ドキュメント概要\r
\r
本ドキュメントは、INGUIDE（International Guideline Development）プログラム Level 1: Module 02 の学習資料を日本語化した完成原稿です。\r
\r
Module 02は、ガイドライン開発プロセスにおける「クエスチョン（質問）の作成」と「アウトカムの選定」に焦点を当てたモジュールです。Module 01でガイドライン開発の全体像、グループプロセス、利益相反について学んだことを踏まえ、本モジュールでは実際にガイドラインの推奨を導くための質問をどのように構造化するか、そしてどのアウトカムを評価すべきかについて詳しく学びます。\r
\r
Module 02は2つのパートで構成されています：\r
\r
- **パート1：ガイドライン開発プロセス** — ガイドラインとクエスチョンの関係、適切なクエスチョンの作成方法、トピック・ガイドラインクエスチョン・エビデンスレビュークエスチョン・推奨の区別、PICOフレームワークの活用、クエスチョン作成の落とし穴\r
- **パート2：アウトカム** — アウトカムの考え方、望ましい効果と望ましくない効果のバランス、アウトカムの相対的重要性、アウトカムの評価アプローチ、アウトカムの階層構造、クエスチョンの枠組みとアウトカムの選定\r
\r
**学習目標：**\r
- PICOフレームワークを用いたガイドラインクエスチョンの構造化方法を理解する\r
- トピック、ガイドラインクエスチョン、エビデンスレビュークエスチョン、推奨の関係を区別できるようになる\r
- 意思決定にとって重要なアウトカムを選定し、その重要性を評価する方法を習得する\r
- 望ましい効果と望ましくない効果のバランスの概念を理解する\r
\r
---\r
\r
# 目次\r
\r
- INGUIDE Level 1: Module 02\r
- 目次\r
- パート1：ガイドライン開発プロセス\r
  - GIN-McMasterガイドライン開発チェックリスト\r
  - ガイドラインとクエスチョン\r
  - ガイドライン推奨のための適切なクエスチョンの作成\r
  - トピック、ガイドラインクエスチョン、エビデンスレビュークエスチョン、推奨\r
  - クエスチョンが重要であるかどうかに影響する要因\r
  - クエスチョンの種類\r
  - クエスチョンの定式化\r
  - 典型的なガイドラインクエスチョン\r
  - ガイドラインとエビデンスレビュークエスチョン\r
  - PICOクエスチョン作成 — 落とし穴\r
  - パート1完了\r
- パート2：アウトカム\r
  - アウトカム\r
  - どのアウトカムを検討すべきか？\r
  - 望ましい健康効果と望ましくない健康効果のバランス\r
  - 利益と害\r
  - アウトカムの相対的重要性\r
  - アウトカム評価のアプローチ\r
  - アウトカムの階層構造\r
  - アウトカムは意思決定にとって重要であるべき\r
  - クエスチョンの枠組みとアウトカムの選定\r
  - パート2完了\r
\r
---\r
\r
# パート1：ガイドライン開発プロセス\r
\r
国際ガイドライン開発資格認定・認証プログラム\r
\r
【図】figure_2.jpeg（元のファイル名: image1.jpeg）— パート1タイトルスライド（INGUIDE Level 1, Module 2, Part 1: (PICO) Question Generation）\r
\r
---\r
\r
## GIN-McMasterガイドライン開発チェックリスト\r
\r
【チェックリスト対応】ステップ8：（PICO）クエスチョンの作成\r
\r
【図】figure_1.jpg（元のファイル名: image12.jpg）— GIN-McMasterガイドライン開発チェックリストの全体図（Level 1: Module 2: Part 1, Slide 1 of 10）\r
\r
オンラインで確認：GIN — McMasterガイドライン開発チェックリスト\r
\r
ここで、ガイドライン開発プロセスのこの概要に立ち返ります。特に、クエスチョンの作成に焦点を当てていきます。\r
\r
>>>補足【Module 01との関連】\r
Module 01では、ガイドライン開発の全体プロセス、ガイドラインパネルメンバーの役割、グループプロセスの確立、利益相反の管理について学びました。Module 02では、その知識を基盤として、実際のガイドライン開発作業の中核をなす「クエスチョンの作成」と「アウトカムの選定」について学びます。GIN-McMasterチェックリストの18ステップのうち、主にステップ8（PICOクエスチョンの作成）とステップ9（アウトカムと介入の重要性、価値観、選好、効用の検討）に対応する内容です。\r
<<<\r
\r
---\r
\r
## ガイドラインとクエスチョン\r
\r
【図】figure_4.jpg（元のファイル名: image106.jpg）— ガイドラインとクエスチョンのスライド\r
\r
### ガイドラインとクエスチョン\r
\r
- ガイドラインは以下に関するクエスチョンに回答する方法である：\r
  - 臨床的介入\r
  - コミュニケーション介入\r
  - 組織的介入\r
  - 政策的介入\r
- 医療または保健政策の改善を目指して\r
\r
**注：** したがって、関連するアウトカムに焦点を当てた回答可能なクエスチョンの形でガイドラインを構造化することが有用です\r
\r
ガイドラインは、医療や保健政策の改善を期待して、臨床的、コミュニケーション、組織的、または政策的介入に関するクエスチョンに回答する方法です。\r
\r
>>>補足【介入の種類について】\r
ガイドラインが扱う「介入」は、薬物治療や手術などの臨床的介入に限りません。\r
\r
**臨床的介入**：薬物療法、手術、リハビリテーション、診断検査など\r
**コミュニケーション介入**：患者教育、健康リテラシー向上プログラム、医療者間の情報共有方法など\r
**組織的介入**：病院の運営体制の変更、チーム医療の導入、電子カルテシステムの活用など\r
**政策的介入**：予防接種プログラム、健康保険制度の変更、公衆衛生施策など\r
\r
これらすべての種類の介入について、ガイドラインは「何をすべきか」に関するクエスチョンを設定し、エビデンスに基づいた推奨を提供します。\r
<<<\r
\r
---\r
\r
## ガイドライン推奨のための適切なクエスチョンの作成\r
\r
【図】figure_5.jpg（元のファイル名: image107.jpg）— 適切なクエスチョンの作成スライド\r
\r
### ガイドライン推奨のための適切なクエスチョンの作成\r
\r
良いクエスチョンは良い推奨につながる\r
\r
- 注意\r
- 主要な構成要素の理解\r
\r
良いクエスチョンは良い推奨につながる\r
\r
重要なメッセージは、良いクエスチョンが良い推奨につながるということです。\r
\r
したがって、クエスチョン開発のプロセスには、良いガイドラインクエスチョンにつながる主要な構成要素への注意と理解が必要です。\r
\r
---\r
\r
## トピック、ガイドラインクエスチョン、エビデンスレビュークエスチョン、推奨\r
\r
【チェックリスト対応】ステップ8：（PICO）クエスチョンの作成\r
\r
【図】figure_6.jpg（元のファイル名: image2.jpg）— トピック、ガイドラインクエスチョン、エビデンスレビュークエスチョン、推奨のスライド\r
\r
### トピック、ガイドラインクエスチョン、エビデンスレビュークエスチョン、推奨\r
\r
- **トピック**\r
- **ガイドラインクエスチョン**\r
- **エビデンスレビュークエスチョン**\r
- **結果としての推奨**\r
\r
- トピックはガイドラインの一般的な領域を記述する\r
  - 例：乳がんのスクリーニングと診断（乳がんケアのすべてとは異なり）\r
\r
- ガイドラインクエスチョン — 「〜すべきか」という質問 — 集団、介入、比較\r
  - 例：Xの人々にはAまたはBを使用すべきか？\r
\r
- エビデンス（システマティック）レビュー — 集団、介入、比較、アウトカム（PICO）のクエスチョン\r
  - Xの人々において、アウトカム1、2、3に対するBと比較したAの影響は何か？\r
  - Xの人々はアウトカム1、2、3にどのような価値を置くか？\r
  - Xの人々において、介入Aは介入Bと比較してどの程度費用対効果が高いか？\r
  - Xの人々において、介入Aは介入Bと比較して実施可能か？\r
\r
- 推奨 — 「〜すべきか」のクエスチョンへの回答を提供する\r
  - Xの人々において、ガイドラインパネルはBよりもAの使用を推奨する/提案する\r
\r
トピック、ガイドラインクエスチョン、エビデンスレビュークエスチョン、そして結果としての推奨を区別することが有用です。トピックはガイドラインの一般的な領域を記述します。例えば、乳がんケアのすべての側面ではなく、乳がんのスクリーニングと診断に焦点を当てるといったことです。ガイドラインクエスチョンは通常「〜すべきか」というクエスチョンです。例えば、Xの人々にはAまたはBを使用すべきか、というものです。\r
\r
これらのクエスチョンは、集団、介入、比較を定義します。\r
\r
エビデンスレビューまたはシステマティックレビューのクエスチョンも集団、介入、比較に焦点を当てますが、アウトカムにも大いに注意を払います。例えば、Xの人々において、アウトカム1、2、3などに対するBと比較したAの影響は何か、というものです。エビデンスレビューとガイドラインは、介入がアウトカムに及ぼす影響に関するクエスチョンだけでなく、推奨を行うために関連する他の側面にも焦点を当てることに注意することが重要です。例えば、状態Xの人々はアウトカム1、2、3などにどのような価値を置くか、というものです。\r
\r
あるいは、Xの人々において、介入Aは介入Bと比較してどの程度費用対効果が高いか。あるいは、Xの人々において、介入Aは介入Bと比較して実施可能か、というものです。\r
\r
本質的に、ガイドラインと推奨において検討されるすべてのエビデンスは、システマティックレビューを通じた体系的な評価を受けることができます。\r
\r
最後に、推奨は「〜すべきか」のクエスチョンに対する回答を提供します。例えば、Xの人々において、ガイドラインパネルは介入Bよりも介入Aの使用を推奨するまたは提案する、というものです。\r
\r
>>>補足【トピック・ガイドラインクエスチョン・エビデンスレビュークエスチョン・推奨の関係】\r
これら4つの概念の関係を整理すると：\r
\r
1. **トピック**（最も広い概念）：ガイドラインが扱う全体的な主題領域\r
   例：「子宮頸がんのスクリーニング」\r
\r
2. **ガイドラインクエスチョン**（「〜すべきか」の問い）：推奨を導くための具体的な質問\r
   例：「20〜60歳の女性に対して、子宮頸がんスクリーニングにHPV検査を使用すべきか？」\r
\r
3. **エビデンスレビュークエスチョン**（PICOに基づく詳細な問い）：エビデンスを検索・評価するための構造化された質問。ガイドラインクエスチョンに加えて、具体的なアウトカムも含む\r
   例：「20〜60歳の女性において、HPV検査は細胞診と比較して、子宮頸がんの死亡率、罹患率、偽陽性率にどのような影響を与えるか？」\r
\r
4. **推奨**（回答）：エビデンスの評価に基づいた具体的な行動指針\r
   例：「20〜60歳の女性に対して、子宮頸がんスクリーニングにはHPV検査の使用を推奨する（強い推奨、中程度の確実性のエビデンス）」\r
\r
この4段階の構造を理解することは、ガイドラインパネルメンバーとして効果的に貢献するための基盤となります。\r
<<<\r
\r
---\r
\r
## クエスチョンが重要であるかどうかに影響する要因\r
\r
【図】figure_7.jpeg（元のファイル名: image3.jpeg）— クエスチョンの重要性に影響する要因のスライド\r
\r
### クエスチョンが重要であるかどうかに影響する要因\r
\r
1. 実践で一般的なクエスチョンか？\r
2. 実践に不確実性があるか？\r
3. 検討すべき新しいエビデンスがあるか？\r
4. 実践にばらつきがあるか？\r
5. リソースの使用/コストに対する影響があるか？\r
6. 以前に取り上げられていない、または十分に取り上げられていないか？\r
\r
クエスチョンの重要性と、回答すべきクエスチョンを決定する際に、クエスチョンが本当に重要なものであるかどうかに影響する、6つのより広いカテゴリーがあります。\r
\r
- そのクエスチョンは実践で一般的なものか？\r
- 実践に不確実性があるか？\r
- そのクエスチョンはすでに提起されたが、検討すべき多くの新しいエビデンスがあるか？\r
- 実践に大きなばらつきがあるか？これは正当なばらつきである可能性がありますが、推奨に関する情報が明確に提供されていないことを意味する場合もあります。\r
- リソースやコストに対する大きな影響があるか？\r
- そして最後に、そのクエスチョンが以前に取り上げられていない、または十分に取り上げられていない場合、それはクエスチョンを優先すべき理由となります。\r
\r
>>>補足【クエスチョンの優先順位付けの実際】\r
限られた時間とリソースの中で、ガイドラインパネルはすべてのクエスチョンに回答することはできません。したがって、上記の6つの基準を用いてクエスチョンの優先順位を付けることが重要です。\r
\r
例えば、ある治療法について実践に大きなばらつきがあり（基準4）、最近大規模なランダム化比較試験の結果が公表された（基準3）場合、このクエスチョンは優先度が高いと判断されます。\r
\r
一方、すでに確立された実践で広くコンセンサスが得られており、新しいエビデンスもない場合は、優先度は低くなります。パネルメンバーは、自身の臨床経験や専門知識を活かして、これらの基準に基づくクエスチョンの優先順位付けに貢献することが期待されます。\r
<<<\r
\r
---\r
\r
## クエスチョンの種類\r
\r
【図】figure_8.jpg（元のファイル名: image4.jpg）— クエスチョンの種類のスライド\r
\r
### クエスチョンの種類\r
\r
**背景クエスチョン**\r
\r
- 定義：子宮頸がんとは何か？\r
- メカニズム：ヒトパピローマウイルスはどのようなメカニズムで子宮頸がんを引き起こすか？\r
\r
**前景ガイドラインクエスチョン**\r
\r
- 介入：20歳から60歳の女性において、子宮頸がんに対するヒトパピローマウイルスのスクリーニングを使用すべきか？\r
\r
ガイドライン開発プロセスの一部として問われ得る多くの異なるクエスチョンがあります。以下を区別することが重要です：\r
\r
- 状態や疾患の背景を説明するため、あるいは状態や疾患がどのように発生するか、または治療できるかに関連するメカニズムを説明するためのクエスチョン。\r
- 行動指向のガイドライン推奨を通じて回答できる前景ガイドラインクエスチョンと呼ばれるクエスチョン。\r
\r
例えば、子宮頸がんに関するガイドラインは、子宮頸がんの定義やがんがヒトパピローマウイルスによって引き起こされる仕組みを記述する場合があります。これはガイドラインの利用者にとって興味深いかもしれませんが、これらのクエスチョンはいずれも推奨のような行動指向の声明にはつながりません。一方、前景クエスチョンである「20歳から60歳の女性において、子宮頸がんに対するヒトパピローマウイルスのスクリーニングを使用すべきか？」は、このコースの焦点となる審議プロセスの結果として、スクリーニングに賛成または反対の推奨につながります。\r
\r
>>>補足【背景クエスチョンと前景クエスチョンの区別】\r
**背景クエスチョン（Background Questions）** は、疾患や介入に関する基本的な知識を提供するためのクエスチョンです。「何であるか」「なぜ起きるか」「どのように作用するか」といった形式をとります。ガイドラインの背景セクションで扱われますが、推奨にはつながりません。\r
\r
**前景クエスチョン（Foreground Questions）** は、具体的な臨床上の意思決定に直結するクエスチョンです。「〜すべきか」という形式をとり、PICOフレームワークで構造化されます。ガイドラインの推奨は、この前景クエスチョンに対する回答として策定されます。\r
\r
ガイドラインパネルメンバーの主な役割は、前景クエスチョンに関する審議と推奨の策定に貢献することです。\r
<<<\r
\r
---\r
\r
## クエスチョンの定式化\r
\r
【図】figure_9.jpg（元のファイル名: image5.jpg）— クエスチョンの定式化のスライド\r
\r
### クエスチョンの定式化\r
\r
- Xの人々にAまたはBを使用すべきか？\r
- Xの人々に薬剤Aまたは薬剤Bを使用すべきか？\r
- Xの人々にプログラムAまたはプログラムBを使用すべきか？\r
- Xの人々に検査A（と治療）または検査B（と治療）を使用すべきか？\r
\r
クエスチョンを定式化する際の主要な問題点について説明します。クエスチョンの単純な形式は「状態Xの人々または患者にAまたはBを使用すべきか」というものです。例えば、薬剤について話す場合、クエスチョンは「ある状態の人々に薬剤Aまたは薬剤Bを使用すべきか？」となります。しかし、教育プログラムや保健政策的介入を対象集団における他のものと比較するタイプのものでもあり得ます。検査について考える場合、クエスチョンは「特定の対象集団に検査Aまたは検査Bを使用すべきか？」となります。\r
\r
ただし、検査を使用するかどうか、またはある検査と別の検査についてクエスチョンを定式化する際に注意すべきことは、通常、検査のために検査をするのではないということです。代わりに、ある治療やその他の選択肢を実施または提案するかどうかを決定するために、ある検査を使用すべきか、別の検査を使用すべきか、または使用しないべきかを知りたいのです。つまり、クエスチョンは依然として「検査Aまたは検査Bを使用すべきか？」ですが、その検査の結果に基づく治療やその他の選択肢の後に起こり得るアウトカムについて考える必要があります。\r
\r
>>>補足【検査に関するクエスチョンの特殊性】\r
検査に関するガイドラインクエスチョンは、治療に関するクエスチョンとは異なる特殊性があります。検査それ自体は患者のアウトカムを直接変えるわけではなく、検査の結果に基づいて行われる治療が最終的にアウトカムに影響します。\r
\r
したがって、「検査Aを使用すべきか？」というクエスチョンは、実質的には「検査Aの結果に基づく治療戦略は、検査Bの結果に基づく治療戦略（または検査なしの戦略）と比較して、患者のアウトカムを改善するか？」というクエスチョンと同義です。\r
\r
この考え方は「検査-治療（test-treat）の経路」と呼ばれ、GRADEシステムでも診断検査のエビデンス評価において重要な概念として位置づけられています。\r
<<<\r
\r
---\r
\r
## 典型的なガイドラインクエスチョン\r
\r
【図】figure_10.jpeg（元のファイル名: image6.jpeg）— 典型的なガイドラインクエスチョンのスライド\r
【図】figure_11.jpg（元のファイル名: image7.jpg）— 典型的なガイドラインクエスチョンのスライド（追加）\r
\r
### 典型的なガイドラインクエスチョン\r
\r
- 牛乳アレルギーの小児において、すべての免疫療法と比較して経口免疫療法を使用すべきか？\r
- がん患者に低分子量ヘパリンを使用すべきか？\r
- 子宮頸がんのスクリーニングにヒトパピローマウイルス検査または酢酸による視覚検査を使用すべきか？\r
\r
典型的なガイドラインクエスチョンは以下のようになります：牛乳アレルギーの小児において、すべての免疫療法と比較して経口免疫療法を使用すべきか？これは小児の一般的な状態です。\r
\r
あるいは、がん患者に低分子量ヘパリンを使用すべきか？あるいは、子宮頸がんのスクリーニングにヒトパピローマウイルス検査または酢酸による視覚検査を使用すべきか？\r
\r
---\r
\r
## ガイドラインとエビデンスレビュークエスチョン\r
\r
【チェックリスト対応】ステップ8：（PICO）クエスチョンの作成\r
\r
【図】figure_12.jpg（元のファイル名: image8.jpg）— ガイドラインとエビデンスレビュークエスチョンのスライド\r
\r
### ガイドラインとエビデンスレビュークエスチョン\r
\r
集団、介入、比較、アウトカム（PICO）\r
\r
- **集団（Population）**：推奨に必要な限り詳細に集団を記述する（例：年齢、性別、併存疾患、入院中かどうかなど）。ガイドラインクエスチョンのため\r
  - エビデンスレビューの場合は、含める集団がどの程度狭いまたは広いかを定義すべきである\r
\r
- **介入（Intervention）**：1つ以上の介入を必要な限り詳細に記述する（例：どの薬剤か、どのプログラムか、検査はどのように行われるか）\r
\r
- **比較対照（Comparator）**：代替案を記述する（例：積極的治療なし、別の治療、異なる検査、代替プログラム）\r
\r
- **アウトカム（Outcomes）**：介入に関する意思決定を決定する主要なアウトカムを記述する（例：死亡率、罹患率、生活の質）\r
\r
あなたはPICOフレームワークに基づいてガイドラインのエビデンスレビュークエスチョンを特定する手助けを求められます。これは単純な作業ではなく、パネルメンバー、パネルの議長、その他の関与するグループの間での非常に慎重な検討と緊密な相互作用がしばしば必要です。クエスチョンの定式化プロセスは以下の記述を含みます：\r
\r
**集団**：推奨に必要な限り詳細に集団を記述する手助けを求められます。\r
\r
探される特性は、年齢、性別、併存疾患、入院中か外来かに関連する場合があります。これにより、エビデンスレビューチームが、クエスチョンがエビデンスによって情報提供されることを確保するために、狭いまたはより広い包含基準を適用する手助けとなります。\r
\r
**介入**：実務者にとって関心のある介入を、必要な限り詳細に記述する手助けを求められます。例えば、どの薬剤か、どのプログラムか、または関心のある検査はどのようなものか、などです。\r
\r
**比較対照**：介入の代替案を詳細に記述するよう求められる場合があります。\r
\r
これは、多くの薬剤の場合に該当しプラセボで最もよく代表される積極的治療なし、別の治療、異なる検査、または代替プログラムである可能性があります。\r
\r
**アウトカム**：クエスチョンに適切に回答するために、推奨の方向性や強さを決定する単一のアウトカムはほとんどありません。介入に関する意思決定を決定する主要なアウトカムを記述する手助けを求められます。例えば、これには死亡率、罹患率、生活の質、有害なアウトカムなどが含まれる場合があります。\r
\r
>>>補足【PICOの各要素の詳細な考え方】\r
PICOフレームワークの各要素について、実際のガイドライン開発ではさらに詳細な検討が必要です。\r
\r
**P（集団）の考慮事項：**\r
- ガイドラインクエスチョンでの集団の定義は推奨の適用範囲を決定します\r
- エビデンスレビューでの集団の定義は検索・選択基準を決定します\r
- 両者は必ずしも一致しません（例：推奨は「65歳以上の高齢者」を対象とするが、エビデンスレビューでは「60歳以上」の研究も含める場合がある）\r
\r
**I（介入）の考慮事項：**\r
- 用量、投与経路、期間など具体的な詳細が重要\r
- 複数の介入を比較する場合（ネットワークメタアナリシス）もある\r
\r
**C（比較対照）の考慮事項：**\r
- 「何もしない」「プラセボ」「標準治療」「別の介入」など、比較対照の選択は推奨の解釈に大きく影響する\r
- 比較対照の設定は実臨床での意思決定の状況を反映すべき\r
\r
**O（アウトカム）の考慮事項：**\r
- 患者にとって重要なアウトカムを優先する\r
- 望ましいアウトカムと望ましくないアウトカムの両方を含める\r
- アウトカムの測定時点も考慮する（短期 vs 長期）\r
<<<\r
\r
---\r
\r
## PICOクエスチョン作成 — 落とし穴\r
\r
【図】figure_13.jpg（元のファイル名: image9.jpg）— PICOクエスチョン作成の落とし穴のスライド\r
\r
### PICOクエスチョン作成 — 落とし穴\r
\r
ガイドラインパネルメンバーが通常関与するステップ：\r
\r
- 他のパネルメンバーと独立して、または協力して、潜在的に重要なクエスチョンの完全なリストを作成する\r
- 潜在的なクエスチョンの完全なリストの相対的重要性を独立して評価する\r
- クエスチョンの重要性評価について議論し合意する\r
- 選定されたクエスチョンの健康上の利益と害を判定するための主要なアウトカムを選定する\r
\r
潜在的な落とし穴：\r
\r
- PICOフレームワークを厳密に遵守しないこと\r
- 異なる視点から重要であるクエスチョンの大きなリストを実行可能なリストに絞り込むこと\r
- コンセンサスに達するための明確なプロセスがないこと\r
\r
ガイドラインパネルメンバーは通常、ガイドラインのクエスチョンを選定するための以下のステップに関与します：\r
\r
- 集団、介入、比較対照、アウトカムのアプローチを使用して、独立して、または他のパネルメンバーと協力して、潜在的に重要なクエスチョンの完全なリストを作成する。\r
- PICOアプローチを使用して、他のパネルメンバーとは独立して、潜在的なクエスチョンの完全なリストの相対的重要性を評価する。\r
\r
クエスチョンの最終リストについてコンセンサスに達するために、パネルとクエスチョンの重要性評価について議論し合意する。\r
\r
- そして、主要なアウトカムを選定する。例えば、選定されたクエスチョンの健康上の利益と害を判定し、PICOフレームワークを完成させるための、クリティカルなアウトカムと重要なアウトカムを選定する。\r
\r
ガイドラインパネルはしばしば限られた時間とリソースを持っており、最も重要なPICOクエスチョンの実行可能なリストに焦点を当てることが不可欠です。パネルメンバーはこのプロセスにおいて重要な役割を果たします。\r
\r
このプロセスにおける潜在的な落とし穴には以下が含まれます：\r
\r
- PICOフレームワークを厳密に遵守しないこと、異なる視点から重要であるクエスチョンの大きなリストを実行可能なリストに絞り込むこと、そしてコンセンサスに達するための明確なプロセスがないこと。\r
\r
>>>補足【クエスチョンの優先順位付けの実践的なコツ】\r
クエスチョンの優先順位付けでよく使用される方法には以下があります：\r
\r
**独立した評価**：各パネルメンバーが他のメンバーの意見に影響されることなく、各クエスチョンの重要性を個別に評価します。これにより、権威ある意見に引きずられるリスクを回避できます。\r
\r
**リッカート尺度の使用**：例えば1〜9の尺度でクエスチョンの重要性を評価し、その後グループで議論します。\r
\r
**段階的な絞り込み**：最初に広範なリストを作成し、次に独立した評価を行い、最後にグループ討議で最終リストを確定するという段階的なアプローチが推奨されます。\r
\r
**実行可能性の考慮**：理想的にはすべての重要なクエスチョンに回答したいところですが、利用可能な時間、資金、人的リソースを考慮して現実的なクエスチョン数に絞り込む必要があります。通常、1つのガイドラインで10〜20のPICOクエスチョンが管理可能な範囲です。\r
<<<\r
\r
---\r
\r
## パート1完了\r
\r
パート1を完了しました！\r
\r
パート2ではアウトカムについてレビューします。\r
\r
パート1を完了しました！\r
\r
パート2ではアウトカムについてレビューします。\r
\r
**パート1完了**\r
\r
---\r
\r
# パート2：アウトカム\r
\r
【図】figure_14.jpg（元のファイル名: image10.jpg）— パート2タイトルスライド（INGUIDE Level 1, Module 2, Part 2: The Outcomes）\r
\r
---\r
\r
## アウトカム\r
\r
【チェックリスト対応】ステップ8：（PICO）クエスチョンの作成\r
【チェックリスト対応】ステップ9：アウトカムと介入の重要性、価値観、選好、効用の検討\r
\r
【図】figure_15.jpg（元のファイル名: image11.jpg）— アウトカムのスライド\r
\r
### アウトカム\r
\r
PICO、害、利益\r
\r
- 健康上の利益と害のバランスが対象となる介入を支持するかどうかを判定できるべきである\r
- アウトカムを選定する前に集団、介入、比較対照を知る必要がある\r
- パネルは、利益と害を反映する意思決定のための重要なアウトカムについて考え始めるべきである\r
\r
また、選定されたすべてのアウトカムにおいて、介入に関連する可能性のある負担を含む健康上の利益と害のバランスが、対象となる介入を支持するかどうかを判定できるべきであるということも考慮する必要があります。これは、アウトカムを選定する前に集団、介入、比較対照を知る必要があることを意味します。\r
\r
前述のクエスチョン選定プロセスの間に、パネルは利益と害を反映する意思決定のための潜在的に重要なアウトカムについて考え始めるべきです。\r
\r
---\r
\r
## どのアウトカムを検討すべきか？\r
\r
【図】figure_16.jpg（元のファイル名: image27.jpg）— どのアウトカムを検討すべきかのスライド\r
\r
### どのアウトカムを検討すべきか？\r
\r
重要なものすべてが測定されているわけではなく、測定されているものすべてが重要であるわけではない\r
\r
重要なものすべてが測定されているわけではなく、測定されているものすべてが重要であるわけではない\r
\r
どのアウトカムを検討すべきかという問題に戻ります。以下の文がそれを説明しています。重要なものすべてが測定されているわけではなく、測定されているものすべてが実際に意思決定にとって重要であるわけではありません。\r
\r
>>>補足【この原則の実践的意味】\r
この「重要なものすべてが測定されているわけではなく、測定されているものすべてが重要であるわけではない」という原則は、ガイドライン開発において極めて重要な考え方です。\r
\r
**「重要なものすべてが測定されているわけではない」の意味：**\r
例えば、ある治療法の患者の生活の質への影響は非常に重要なアウトカムですが、多くの臨床試験ではこのアウトカムが測定されていない場合があります。エビデンスがないからといってそのアウトカムを無視すべきではありません。むしろ、エビデンスの欠如自体を明示的に認識し、エビデンスの確実性の評価に反映させるべきです。\r
\r
**「測定されているものすべてが重要であるわけではない」の意味：**\r
研究者が測定・報告するアウトカムの中には、臨床的な意思決定にとってはあまり重要でないものもあります。例えば、ある薬剤の血中濃度の変化は研究者にとっては興味深いかもしれませんが、患者にとっては症状の改善や副作用の有無の方がはるかに重要です。\r
\r
したがって、アウトカムの選定は「どのようなエビデンスが利用可能か」ではなく「何が意思決定にとって重要か」に基づいて行うべきです。\r
<<<\r
\r
---\r
\r
## 望ましい健康効果と望ましくない健康効果のバランス\r
\r
【図】figure_17.jpg（元のファイル名: image13.jpg）— 望ましい効果と望ましくない効果のバランスのスライド\r
\r
### 望ましい健康効果と望ましくない健康効果のバランス\r
\r
状態\r
\r
賛成 対 反対：効果 × 金額 × 価値観（重要性）\r
\r
条件付き 対 強い：効果 × 金額 × 価値観（重要性）\r
\r
望ましい効果と望ましくない効果のバランスは、介入の効果がどの程度大きいか、そしてアウトカムがどの程度重要であるかによって決定されます。アウトカムがより重要であり、それらが介入によってより多く回避または引き起こされるほど、全体的な効果は大きくなります。悪いアウトカムが重要でない場合、たとえその多くが予防されたとしても、それが重要である場合よりも有益な効果は小さくなります。さらに、非常に重要であるが少数の悪いアウトカムが回避される方が、それらが重要でない場合よりも、正味の望ましい健康効果がより大きくなる場合があります。\r
\r
>>>補足【利益と害のバランスの概念】\r
ガイドラインの推奨は、介入の利益と害のバランスに基づいて決定されます。このバランスは、以下の2つの要素の掛け算で理解できます：\r
\r
**バランス = 効果の大きさ × アウトカムの重要性（価値観）**\r
\r
例えば：\r
- 薬剤Aが死亡率を2%低下させる（効果小×重要性最高）→ 大きな正味の利益\r
- 薬剤Aが軽度の頭痛を20%増加させる（効果大×重要性低）→ 小さな正味の害\r
\r
このバランスの結果は、推奨の**方向性**（介入に賛成か反対か）と**強さ**（強い推奨か条件付き推奨か）の両方に影響します。\r
\r
- バランスが明確に一方に傾いている場合 → **強い推奨**\r
- バランスが微妙で不確実な場合 → **条件付き（弱い）推奨**\r
<<<\r
\r
---\r
\r
## 利益と害\r
\r
【図】figure_18.jpg（元のファイル名: image14.jpg）— 利益と害のスライド\r
\r
### 利益と害\r
\r
**望ましいアウトカム**\r
\r
- 低い死亡率\r
- 入院期間の短縮\r
- 疾患期間の短縮\r
- 生活の質や症状の改善\r
\r
**望ましくないアウトカム**\r
\r
- 高い死亡率\r
- 有害反応\r
- 耐性の発現\r
- 生活の質や症状の悪化\r
\r
すべての決定には望ましい健康アウトカムと望ましくない健康アウトカムが伴う\r
\r
- 推奨の作成には、望ましいアウトカムと望ましくないアウトカムの考慮、およびアウトカムに対する介入の効果に関する我々の確信度を含めなければならない\r
\r
医療における介入や選択肢は、直接的な利益と害を引き起こします。通常、望ましい健康アウトカムと望ましくない健康アウトカムを区別します。望ましいアウトカムの例としては、死亡率の低下、入院期間や在院期間の短縮、疾患期間の短縮、生活の質や症状の改善があります。望ましくない健康アウトカムの例としては、高い死亡率、有害反応、抗菌薬耐性の発現、生活の質の悪化、症状の悪化があります。すべての決定には望ましい健康アウトカムと望ましくない健康アウトカムが伴い、推奨の作成にはこれらのアウトカムに関する考慮と、これらのアウトカムに対する介入の効果にどの程度確信を持てるかを含めなければなりません。\r
\r
---\r
\r
## アウトカムの相対的重要性\r
\r
【図】figure_19.jpg（元のファイル名: image15.jpg）— アウトカムの相対的重要性のスライド\r
\r
### アウトカムの相対的重要性\r
\r
- 意思決定者（およびガイドライン著者）は、推奨を行うためにこれらのアウトカムのバランスを取る際に、アウトカムの相対的重要性を考慮する必要がある\r
- 相対的重要性は集団によって異なる\r
- 相対的重要性は同じ集団内の患者グループによって異なる場合がある\r
- アウトカムがクリティカルと考えられる場合 — 評価に含める\r
\r
望ましい健康アウトカムと望ましくない健康アウトカムにウェイトを付けるために、意思決定者とガイドライン著者はこれらのアウトカムの相対的重要性を考慮する必要があります。アウトカムの相対的重要性は集団によって異なる場合があり、同じ集団内の患者によって異なる場合があります。しかし、アウトカムが意思決定にとってクリティカルと考えられる場合はいつでも、利益と害のバランスにおいて評価されるべきです。\r
\r
>>>補足【アウトカムの重要性が異なる例】\r
アウトカムの相対的重要性が集団や患者グループによって異なることの具体例を示します：\r
\r
**集団による違い：**\r
- 高齢者は、若年者と比べて「入院期間の短縮」により大きな価値を置く傾向がある（自宅復帰への希望が強い）\r
- 就労世代は「職場復帰までの期間」を重視する傾向がある\r
\r
**同じ集団内の違い：**\r
- がん患者の中でも、延命を最優先する患者もいれば、生活の質を最も重視する患者もいる\r
- 同じ疾患でも、症状の重症度によって患者が重視するアウトカムが異なる\r
\r
このような違いがあるため、ガイドラインパネルは多様な視点を代表するメンバーで構成される必要があり、特に患者や市民の代表の参加が重要です。\r
<<<\r
\r
---\r
\r
## アウトカム評価のアプローチ\r
\r
【図】figure_20.jpeg（元のファイル名: image16.jpeg）— アウトカム評価のアプローチのスライド\r
\r
### アウトカム評価のアプローチ\r
\r
- 意思決定にとってクリティカルまたは重要なアウトカムに焦点を当てる\r
- 理想的にはアウトカムは7つ以下\r
\r
1〜3 → 意思決定にとって重要性が低い\r
\r
4〜6 → 重要であるが、意思決定にとってクリティカルではない\r
\r
7〜9 → 意思決定にとってクリティカル\r
\r
通常、ガイドラインパネルメンバーが意思決定で扱えるアウトカムの数には限りがあり、意思決定にとってクリティカルまたは重要なアウトカムに本当に焦点を絞ることを推奨します。これは通常7つ以下のアウトカムです。アウトカムの重要性に対処するための1つのアプローチは、ここに示されているような評価を実施することです。例えば、意思決定にとってクリティカル、意思決定にとって重要であるがクリティカルではない、意思決定にとって重要性が低いなどの情報を提供するアンカーを持つ1から9の評価尺度を使用します。\r
\r
>>>補足【GRADEのアウトカム重要性評価尺度】\r
GRADEシステムでは、アウトカムの重要性を1〜9の尺度で評価します：\r
\r
**1〜3（重要性が低い）**：意思決定にはあまり関連しないアウトカム。エビデンスの要約には含めない場合がある。\r
\r
**4〜6（重要であるがクリティカルではない）**：意思決定に関連するが、推奨の方向性を決定する主要因ではないアウトカム。エビデンスの要約に含めるが、推奨の全体的な評価への影響は限定的。\r
\r
**7〜9（クリティカル）**：意思決定にとって不可欠なアウトカム。これらのアウトカムのエビデンスは必ず評価し、推奨の方向性と強さの決定に直接影響する。\r
\r
この評価は通常、ガイドライン開発の早い段階で行われ、どのアウトカムについてエビデンスを検索・評価するかを決定するために使用されます。各パネルメンバーが独立して評価し、その後グループで議論してコンセンサスを形成します。\r
\r
**重要な注意点**：アウトカムの重要性評価はエビデンスの検索「前」に行うべきです。エビデンスが利用可能かどうかではなく、意思決定にとっての重要性に基づいて評価すべきです。\r
<<<\r
\r
---\r
\r
## アウトカムの階層構造\r
\r
【図】figure_21.jpg（元のファイル名: image17.jpg）— アウトカムの階層構造のスライド\r
\r
### アウトカムの階層構造\r
\r
インフルエンザを予防するための予防接種の効果を評価するための重要性に基づく階層\r
\r
1〜3（悪心） → 意思決定にとって重要性が低い\r
\r
4〜6（皮膚反応 — そう痒感） → 重要であるが、意思決定にとってクリティカルではない\r
\r
7（肺炎）、8（入院、アレルギー反応）、9（死亡率） → 意思決定にとってクリティカル\r
\r
ここにインフルエンザを予防するための予防接種の効果についての例があります。死亡率、入院、アレルギー反応、および肺炎がクリティカルなアウトカムである可能性があり、副作用としての皮膚反応やそう痒感は重要であるがクリティカルではない可能性があります。悪心は重要性が低い可能性があります。これは、意思決定におけるクリティカル、重要、非重要なアウトカムの区別を例示しています。\r
\r
>>>補足【アウトカムの階層構造の実践的活用】\r
この例を用いて、アウトカムの重要性評価が推奨にどのように影響するかを説明します。\r
\r
**インフルエンザワクチンの場合：**\r
- クリティカルなアウトカム（7-9点）：死亡率、入院、アレルギー反応、肺炎\r
  → これらのアウトカムのエビデンスが推奨の方向性を主に決定する\r
- 重要だがクリティカルではないアウトカム（4-6点）：皮膚反応、そう痒感\r
  → エビデンスの要約には含めるが、推奨を大きく左右はしない\r
- 重要性が低いアウトカム（1-3点）：悪心\r
  → エビデンスの要約から除外される場合がある\r
\r
もし、ワクチンが死亡率と入院を大幅に減少させるが、軽度の皮膚反応を増加させるエビデンスがある場合、クリティカルなアウトカムにおける利益が、重要だがクリティカルではないアウトカムにおける害を上回るため、ワクチン接種を「推奨する」方向の推奨が導かれます。\r
<<<\r
\r
---\r
\r
## アウトカムは意思決定にとって重要であるべき\r
\r
【図】figure_22.jpg（元のファイル名: image18.jpg）— アウトカムは意思決定にとって重要であるべきスライド\r
\r
### アウトカムは意思決定にとって重要であるべき\r
\r
通常最大7つのアウトカム\r
\r
アウトカム1\r
アウトカム2\r
アウトカム3\r
アウトカム4 — エビデンスがないため代理アウトカムを使用\r
アウトカム5\r
アウトカム6\r
アウトカム7\r
\r
**アウトカムは、利用可能と予想されるエビデンスによってではなく、重要性によって決定されるべきである**\r
\r
アウトカム1\r
アウトカム2\r
アウトカム3\r
アウトカム4\r
アウトカム5\r
アウトカム6\r
アウトカム7\r
\r
潜在的な落とし穴と課題\r
\r
- 検討中のアウトカムの定義を明示的に提供しないこと\r
- 異なる視点から重要と考えられるアウトカムの大きなリストを適切なリストに絞り込むこと\r
- コンセンサスが必要であり、通常はプロセスを導く人々によって達成される\r
\r
各クエスチョンに対するアウトカムの最終リストは意思決定にとって重要であるべきであり、それは人々（例えば、公衆衛生の問題において）または患者にとって重要であることを意味します。\r
\r
通常、頭の中で、または分析モデルにおいてさえも検討できるアウトカムの数には限りがあり、含めるアウトカムは通常7つ以下が推奨されます。選定されたアウトカムが研究において適切に測定または報告されていない場合、検討のために適切な代理アウトカムを事前に指定することができます。これらの代理アウトカムは通常、エビデンスの確実性を低下させます。さらに、クエスチョンのエビデンスを議論する際には、そのようなエビデンスの欠如を含め、選定されたすべてのアウトカムを明示的に検討すべきです。\r
\r
このプロセスにおける潜在的な落とし穴と課題は以下のとおりです：\r
\r
- 検討中のアウトカムの定義を明示的に提供しないこと。\r
- 異なる視点から重要と考えられる可能性のあるアウトカムの大きなリストを、適切で実行可能なリストに絞り込むこと。\r
- そして、コンセンサスが必要であり、それは通常プロセスを導く人々によって達成されます。\r
\r
どのアウトカムを検討すべきかの決定はしばしば複雑です。パネルメンバーとしてこのプロセスに貢献することができます。実際、あなたの貢献はクリティカルです。最初のルールは、アウトカムは利用可能と予想されるエビデンスによってではなく、その重要性によって駆動されるべきであるということです。\r
\r
>>>補足【代理アウトカム（サロゲートアウトカム）について】\r
**代理アウトカム（surrogate outcome）** とは、真に患者にとって重要なアウトカム（例：死亡率、生活の質）の代わりに使用される、より測定しやすいアウトカムのことです。\r
\r
**代理アウトカムの例：**\r
- HbA1c（糖尿病の場合：真のアウトカムは心血管イベント、腎不全など）\r
- 血圧値（高血圧の場合：真のアウトカムは脳卒中、心筋梗塞など）\r
- 腫瘍の縮小（がんの場合：真のアウトカムは全生存期間、生活の質など）\r
\r
代理アウトカムを使用する場合、以下の点に注意が必要です：\r
1. 代理アウトカムと真のアウトカムの間の因果関係が十分に確立されているか\r
2. 代理アウトカムの改善が必ずしも患者にとって重要なアウトカムの改善に直結するとは限らない\r
3. GRADEシステムでは、代理アウトカムの使用は「非直接性」として評価され、エビデンスの確実性を下げる要因となる\r
\r
したがって、可能な限り患者にとって直接重要なアウトカムを選定し、代理アウトカムはそのようなアウトカムのエビデンスが存在しない場合の代替として位置づけるべきです。\r
<<<\r
\r
---\r
\r
## クエスチョンの枠組みとアウトカムの選定\r
\r
【図】figure_23.jpg（元のファイル名: image19.jpg）— クエスチョンの枠組みとアウトカムの選定のスライド\r
\r
### クエスチョンの枠組みとアウトカムの選定\r
\r
利益と害に対応する一連のアウトカムを含める\r
\r
- ガイドラインパネルは、代理によって対処される場合でも、意思決定のためのすべてのアウトカムを検討する必要がある\r
- 介入に関連する害などの主要なアウトカムに対処しなければならない\r
\r
ガイドラインパネルは、患者にとって重要なすべてのアウトカムに焦点を当てるべきである\r
\r
- 意思決定にとっての重要性に関してアウトカムを分類する（クリティカル、重要であるがクリティカルではない、重要性が限られている）\r
- 他の人々にとって重要なアウトカムの考慮（第三者が支払うリソース、公平性の考慮、患者のケアをする人々への影響、公衆衛生への影響）\r
\r
**ガイドライン開発者は、測定されているアウトカムではなく、何が重要であるかに基づいてアウトカムの選択を行わなければならない**\r
\r
推奨は単一のアウトカムに関する情報に基づいて行うことはできず、意思決定は常に健康上の利益と害のバランスを伴うため、システマティックレビューの著者は、医療における意思決定を可能にするアウトカムの包括的な範囲を検討することで、レビューをより有用なものにします。多くの、おそらく大多数のシステマティックレビューは、特に介入に関連する害など、いくつかの主要なアウトカムに対処していません。\r
\r
逆に、合理的な推奨を行うために、ガイドラインパネルは患者や人々の意思決定にとって重要またはクリティカルなすべてのアウトカムを検討しなければなりません。さらに、第三者が支払うリソースの使用、公平性の考慮、患者のケアをする人々への影響、感染症や抗菌薬耐性の蔓延などの公衆衛生への影響を含む、他の人々にとって重要なアウトカムの検討も必要とする場合があります。\r
\r
ガイドライン開発者は、測定されているアウトカムやエビデンスが利用可能なアウトカムではなく、何が重要であるかに基づいてアウトカムの選択を行わなければなりません。重要なアウトカムについてエビデンスが不足している場合は、そのアウトカムを無視するのではなく、それを認識すべきです。大多数のシステマティックレビューはすべての重要なアウトカムについてエビデンスを要約していないため、ガイドラインパネルはしばしば、異なるソースからの複数のシステマティックレビューを使用するか、独自のシステマティックレビューを実施するか、既存のレビューを更新する必要があります。\r
\r
>>>補足【アウトカム選定の原則のまとめ】\r
Module 02で学んだアウトカム選定に関する主要な原則をまとめます：\r
\r
1. **重要性に基づく選定**：利用可能なエビデンスではなく、意思決定にとっての重要性に基づいてアウトカムを選定する\r
\r
2. **包括性**：望ましいアウトカム（利益）と望ましくないアウトカム（害）の両方を含める\r
\r
3. **患者中心**：患者にとって直接重要なアウトカムを優先する（代理アウトカムは補助的に使用）\r
\r
4. **分類**：クリティカル（7-9点）、重要だがクリティカルではない（4-6点）、重要性が低い（1-3点）に分類する\r
\r
5. **数の制限**：理想的には7つ以下に絞り込む\r
\r
6. **エビデンスの欠如の認識**：重要なアウトカムについてエビデンスが存在しない場合でも、そのアウトカムを無視せず、エビデンスの欠如を明示的に報告する\r
\r
7. **多角的な視点**：患者だけでなく、リソースの使用、公平性、公衆衛生への影響なども考慮する\r
\r
8. **透明性**：アウトカムの選定プロセスと根拠を文書化する\r
\r
これらの原則は、Module 03以降で学ぶエビデンスの評価と推奨の策定の基盤となります。\r
<<<\r
\r
---\r
\r
## パート2完了\r
\r
パート2を完了しました！\r
\r
Level 1コースのModule 3に進んでください。\r
\r
パート2を完了しました！\r
\r
Level 1コースのModule 3に進んでください。\r
\r
**パート2完了**\r
\r
---\r
\r
# 付録：Module 02で参照されるGIN-McMasterチェックリスト関連ステップ\r
\r
Module 02の内容は、GIN-McMasterガイドライン開発チェックリストの主に以下のステップに対応しています。\r
\r
---\r
\r
### ステップ8：（PICO）クエスチョンの作成（概要）\r
\r
このステップでは、ガイドラインの質問を生成し、質問の優先順位付けを行い、アウトカムの選択とランキングを行うための方法を確立します。主要な項目には以下が含まれます：\r
\r
- ガイドラインで回答すべき主要な質問を標準フォーマット（PICO）を使用して生成・文書化する\r
- ガイドラインが適用される対象集団を明示的に記述する\r
- 介入と比較対照を明示的に記述し、介入とアウトカムの関係を描写する分析的フレームワークを開発する\r
- 重要なアウトカムを特定する（望ましい効果と望ましくない効果の両方を含む）\r
- 代理アウトカムよりも患者にとって重要なアウトカムを優先する\r
- アウトカムの相対的重要性をランク付けする\r
- すべてのガイドライングループメンバーを関与させ、消費者とステークホルダーに相談する\r
- 方法を文書化し、透明性を確保する\r
\r
（完全な詳細については、Module 01の付録に掲載されているチェックリストのステップ8を参照してください。）\r
\r
---\r
\r
### ステップ9：アウトカムと介入の重要性、価値観、選好、効用の検討（概要）\r
\r
このステップでは、消費者とステークホルダーのアウトカムと介入の相対的重要性、価値観、選好、効用を間接的または直接的に取得するかを決定し、それらを推奨の策定に活用します。主要な項目には以下が含まれます：\r
\r
- 消費者とステークホルダーから情報を取得するための方法を確立する\r
- 取得した情報の確信度を評価するアプローチを決定する\r
- 誰の視点を考慮するかを決定する\r
- 矛盾する重要性評価への対処方法を文書化する\r
- 倫理的考慮事項を文書化する\r
\r
（完全な詳細については、Module 01の付録に掲載されているチェックリストのステップ9を参照してください。）\r
\r
---\r
\r
**付録完了**`,S=`# INGUIDE Level 1: Module 03 – エビデンスの検索と評価（日本語解説コンテンツ完成原稿）\r
\r
---\r
\r
## ドキュメント概要\r
\r
本資料は、INGUIDE（International Guideline Development）プログラム Level 1 の **Module 03** に対応する日本語解説コンテンツです。\r
\r
Module 03 は、ガイドライン開発プロセスにおける「エビデンスの検索と評価」に焦点を当てています。具体的には、ガイドラインを裏付けるエビデンスをどのように体系的に検索・収集し、その質（確実性）をどのように評価するかを学びます。\r
\r
**本モジュールの学習目標：**\r
\r
- ガイドライン開発におけるエビデンス検索の原則と方法を理解する\r
- システマティックレビューの役割と活用方法を理解する\r
- 研究デザインの種類とバイアスのリスクを理解する\r
- GRADEアプローチによるエビデンスの確実性評価の枠組みを習得する\r
- エビデンスの確実性を下げる5つの要因（バイアスのリスク、非直接性、非一貫性、不精確さ、出版バイアス）を理解する\r
- エビデンスの確実性を上げる3つの要因を理解する\r
- エビデンスプロファイルとSoF（Summary of Findings）テーブルの読み方・活用方法を理解する\r
\r
**GIN-McMaster チェックリストとの対応：**\r
本モジュールは主にステップ 10（エビデンスの特定と検索）、ステップ 11（エビデンスの要約と評価）に対応します。\r
\r
---\r
\r
# パート1：エビデンスの検索と収集\r
\r
【チェックリスト対応】ステップ10：システマティックレビューの決定とエビデンスの検索（Deciding about the use of existing systematic reviews; Identifying and appraising evidence）\r
\r
---\r
\r
## Module 3: エビデンスの検索と評価\r
\r
【図】figure_1.jpg（モジュール3 タイトルスライド）\r
\r
### 学習目標\r
\r
このモジュールを完了すると、以下のことができるようになります：\r
\r
- ガイドラインのためにエビデンスを検索する方法を説明する\r
- ガイドラインのためにエビデンスを集める方法を説明する\r
- GRADE（Grading of Recommendations Assessment, Development and Evaluation）の枠組みを使用してエビデンスの確実性を評価する方法を説明する\r
\r
【図】figure_2.jpg（学習目標スライド）\r
\r
>>>補足【GRADEについて】\r
GRADE（Grading of Recommendations Assessment, Development and Evaluation）は、エビデンスの確実性（質）を評価し、推奨の強さを決定するための国際的な枠組みです。2000年代初頭にGRADE Working Groupによって開発され、現在ではWHO、Cochrane、世界100以上の組織で採用されています。日本でも「Minds診療ガイドライン作成マニュアル」でGRADEアプローチが推奨されています。\r
<<<\r
\r
---\r
\r
## このモジュールでカバーする内容\r
\r
エビデンスの検索と評価に関して：\r
\r
- エビデンスの検索と収集\r
- エビデンスの評価\r
- エビデンスのプレゼンテーション\r
\r
【図】figure_3.jpg（モジュール内容概要スライド）\r
\r
---\r
\r
## ガイドライン開発の全体像\r
\r
以下のステップは、ガイドライン開発における主要なステップを示しています。\r
\r
- 組織・予算・計画\r
- グループの構成・利益相反の管理\r
- ガイドラインの範囲決定・質問の策定\r
- **エビデンスの検索と評価** ← 本モジュールの対象\r
- 推奨の策定\r
- 品質保証／ピアレビュー／利害関係者の協議\r
- 普及・実施・評価・更新\r
\r
このモジュールで学ぶ内容は、上記のステップの中で太字で示した部分に該当します。ガイドラインを裏付けるエビデンスの検索、収集、評価、そして提示方法について取り扱います。\r
\r
【図】figure_4.jpg（ガイドライン開発プロセス全体図スライド）\r
\r
>>>補足【ガイドライン開発プロセスにおける位置づけ】\r
Module 01では全体像（組織・計画）、Module 02ではスコープと質問策定を学びました。Module 03は、策定した質問に対してエビデンスを体系的に検索・評価する段階です。このステップの質が、次のModule 04で扱う「推奨の策定」の基盤となります。エビデンスの検索・評価が不十分であれば、推奨の信頼性も損なわれるため、ガイドライン開発の中核的プロセスといえます。\r
<<<\r
\r
---\r
\r
## パート1：エビデンスの検索と収集\r
\r
【図】figure_5.jpg（パート1タイトルスライド）\r
\r
---\r
\r
## エビデンスの特定\r
\r
ガイドライン開発の方法論的な原則として、ガイドラインの推奨は、**システマティックレビュー**によって裏付けられるべきとされています。推奨のためのエビデンスの特定には、利用可能なシステマティックレビューを探すか、新たにシステマティックレビューを実施するかが必要です。\r
\r
エビデンスの特定のために、ガイドライン開発者は以下の2つの選択肢のいずれかを選ぶことができます：\r
\r
1. **既存のシステマティックレビューを探す**\r
2. **新規にシステマティックレビューを実施する**\r
\r
いずれにしても、ガイドラインの推奨は個々の研究のみではなく、最良の入手可能なエビデンスの体系的な要約に基づくべきです。\r
\r
【図】figure_6.jpg（エビデンスの特定スライド）\r
\r
>>>補足【システマティックレビューとは】\r
システマティックレビュー（Systematic Review: SR）とは、特定の臨床疑問に対して、あらかじめ定められた適格基準に基づき、関連する研究を網羅的に検索・収集し、個々の研究の質を批判的に評価したうえで、結果を統合する研究手法です。個々の研究のみに依存するよりも、バイアスを最小限に抑え、より信頼性の高い結論を導くことができます。Cochraneライブラリーは世界最大のシステマティックレビューのデータベースとして知られています。\r
<<<\r
\r
---\r
\r
## エビデンスの特定：3つのアプローチ\r
\r
エビデンスの特定には、3つの可能なアプローチがあります：\r
\r
**アプローチ1：新規にシステマティックレビューを実施する**\r
- このアプローチが最も多くの時間とリソースを必要とします。\r
\r
**アプローチ2：既存のシステマティックレビューを使用する**\r
- 適切な既存のシステマティックレビューを探し、その質を評価して利用します。\r
\r
**アプローチ3：既存のガイドラインを出発点として使用する**\r
- 以前に作成されたガイドラインからエビデンスを活用します。\r
\r
【図】figure_7.jpg（3つのアプローチスライド）\r
\r
各アプローチにはそれぞれ利点と欠点があり、ガイドライン開発グループの状況やリソースに応じて適切なアプローチを選択します。\r
\r
---\r
\r
## アプローチ1：新規にシステマティックレビューを実施する\r
\r
ガイドラインを裏付けるエビデンスを得るために、**新規にシステマティックレビューを実施する**方法は、実際には非常に一般的なアプローチです。\r
\r
このアプローチには以下の**利点**があります：\r
\r
- 各ガイドラインの質問に対して直接的に対応するレビューが得られる\r
- 最新のエビデンスを取り込むことができる\r
- レビューの質を完全にコントロールできる\r
\r
一方で、以下の**欠点**があります：\r
\r
- 時間がかかる\r
- リソース（資金、人材、専門知識）が必要\r
- すべてのガイドライングループが自前でシステマティックレビューを実施する能力を持っているわけではない\r
\r
新規にレビューを実施する場合、**レビューチーム**はガイドラインパネルとは別に組織されるべきです。レビューチームは方法論の専門知識を持ち、レビューの実施に責任を負います。\r
\r
【図】figure_8.jpg（アプローチ1スライド）\r
\r
---\r
\r
## アプローチ2：既存のシステマティックレビューを使用する\r
\r
既存のシステマティックレビューの活用は、時間とリソースを節約する方法です。\r
\r
以下のステップに従います：\r
\r
1. **検索**：関連する既存のシステマティックレビューを検索する\r
2. **評価**：見つかったレビューの質と関連性を評価する\r
3. **判断**：レビューが利用可能かどうか判断する\r
\r
既存のレビューを使用する場合の**利点**：\r
\r
- 時間とリソースの節約\r
- 質の高いレビューが既に存在していれば、効率的\r
\r
**欠点**：\r
\r
- 既存のレビューがガイドラインの質問に完全に一致しない場合がある\r
- レビューの質にばらつきがある\r
- 最新のエビデンスが含まれていない場合がある\r
\r
【図】figure_9.jpg（アプローチ2スライド）\r
\r
>>>補足【既存のシステマティックレビューの質の評価】\r
既存のシステマティックレビューを利用する場合、その質を評価するためのツールとして**AMSTAR 2**（A MeaSurement Tool to Assess systematic Reviews 2）や**ROBIS**（Risk Of Bias In Systematic reviews）があります。これらのツールは、レビューの方法論的な厳密性を評価するための標準的な基準を提供します。質の低いレビューをそのまま使用すると、ガイドラインの推奨の信頼性が損なわれるため、慎重な評価が不可欠です。\r
<<<\r
\r
---\r
\r
## アプローチ3：既存のガイドラインを出発点として使用する\r
\r
3つ目のアプローチは、**既存のガイドラインをエビデンスの出発点として利用する**方法です。\r
\r
他の組織が作成した既存のガイドラインが、自分たちのガイドラインと類似した質問を扱っている場合、そのガイドラインで使用されたエビデンスを出発点として利用できます。\r
\r
このアプローチには以下の**利点**があります：\r
\r
- 既にまとめられたエビデンスを効率的に活用できる\r
- 時間とリソースの大幅な節約\r
\r
**欠点**：\r
\r
- 既存のガイドラインの質と方法論的な厳密さに依存する\r
- 元のガイドラインの質問やPICOが自分たちのものと異なる場合がある\r
- 元のガイドラインのエビデンス検索が古い場合がある\r
- 文脈（人口特性、医療システム、価値観など）が異なる場合がある\r
\r
>>>補足【ガイドラインアダプテーション】\r
既存のガイドラインを別の文脈で利用するプロセスは「ガイドラインアダプテーション（適応）」と呼ばれます。ADAPTE frameworkは、このプロセスを体系的に行うための枠組みとして広く知られています。日本においても、海外のガイドラインを日本の文脈に適応させる際にこのアプローチが活用されることがあります。\r
<<<\r
\r
---\r
\r
## どのアプローチを選ぶべきか\r
\r
ガイドライングループは、利用可能なリソース、時間枠、既存のエビデンスの有無と質を考慮して、どのアプローチを使用するか決定します。\r
\r
多くの場合、これらのアプローチの**組み合わせ**が使用されます。例えば：\r
\r
- 一部の質問については既存のシステマティックレビューを使用する\r
- 他の質問については新規にシステマティックレビューを実施する\r
- 以前のガイドラインのエビデンスを出発点として、更新検索を行う\r
\r
重要なのは、どのアプローチを選択したかに関わらず、**エビデンスの検索と評価のプロセスが透明で、再現可能であること**です。\r
\r
【図】figure_10.jpg（アプローチ選択スライド）\r
\r
---\r
\r
## エビデンス検索の原則\r
\r
エビデンスの検索には以下の原則が適用されます：\r
\r
- **体系的**であること：あらかじめ定められた検索戦略に基づいて行う\r
- **包括的**であること：関連するすべてのエビデンスを網羅する\r
- **透明**であること：検索プロセスが再現可能であるよう文書化する\r
- **最新**であること：利用可能な最新のエビデンスを含む\r
\r
効果的なエビデンス検索を行うためには：\r
\r
- 明確に定義されたPICO質問が必要\r
- 適切なデータベースの選択が必要（例：MEDLINE、Embase、CENTRAL、CINAHL など）\r
- 検索フィルター（研究デザインフィルターなど）の適切な使用\r
- 情報専門家（図書館員、情報スペシャリスト）の協力が推奨される\r
\r
【図】figure_11.jpg（エビデンス検索の原則スライド）\r
\r
>>>補足【医学文献データベース】\r
主要な医学文献データベースには以下のものがあります：**MEDLINE**（PubMed経由でアクセス可能な最大の生物医学文献データベース）、**Embase**（特にヨーロッパの文献やファーマコロジーに強い）、**CENTRAL**（Cochrane Central Register of Controlled Trials、臨床試験に特化）、**CINAHL**（看護・アライドヘルス分野に特化）。日本語の文献については**医中誌Web**（医学中央雑誌）が主要なデータベースです。ガイドライン開発のための検索では、複数のデータベースを組み合わせて使用することが推奨されています。\r
<<<\r
\r
---\r
\r
## システマティックレビュー\r
\r
システマティックレビューは、特定の研究質問に回答するために、**すべての利用可能なエビデンスを体系的に特定し、評価し、統合する**研究手法です。\r
\r
システマティックレビューの主要な特徴：\r
\r
- 明確に定義された研究質問\r
- 包括的な文献検索戦略\r
- あらかじめ定められた適格基準（組み入れ基準と除外基準）\r
- 特定された研究の体系的な選択\r
- 含まれる研究の質の批判的評価\r
- 結果の体系的な統合（可能であれば**メタアナリシス**を含む）\r
\r
システマティックレビューは、ガイドライン開発においてエビデンスの基盤となるものであり、推奨を作成するための最も信頼性の高いエビデンスの要約を提供します。\r
\r
>>>補足【メタアナリシスとは】\r
メタアナリシス（Meta-analysis）は、複数の研究結果を統計学的に統合する手法です。個々の研究の結果を数量的に統合することで、より精度の高い効果推定値を得ることができます。ただし、すべてのシステマティックレビューがメタアナリシスを含むわけではありません。研究間の異質性が高い場合や、統合が不適切と判断される場合には、結果を定性的にまとめる（ナラティブ統合）ことがあります。\r
<<<\r
\r
---\r
\r
## 最良のエビデンスを探す方法\r
\r
それでは、実際にガイドラインを裏付けるエビデンスを探す方法について説明します。\r
\r
最良のエビデンスを探すために、以下の段階的なアプローチが推奨されます：\r
\r
1. **まずシステマティックレビューを探す**\r
   - Cochrane Library、PubMed、その他の関連データベースで検索\r
   - 質が高く、最新で、関連性のあるシステマティックレビューを優先\r
\r
2. **適切なシステマティックレビューが見つからない場合、個々の研究を検索する**\r
   - PICO質問に基づいた検索戦略を策定\r
   - 適切なデータベースで検索を実施\r
\r
3. **検索結果のスクリーニング**\r
   - タイトルと抄録のスクリーニング\r
   - 全文のスクリーニング\r
   - 適格基準に基づく研究の選択\r
\r
【図】figure_12.jpg（最良のエビデンスを探す方法スライド）\r
\r
---\r
\r
## エビデンスの種類と研究デザイン\r
\r
ガイドライン開発で使用されるエビデンスには、さまざまな種類があります。ガイドラインの質問の種類に応じて、適切な研究デザインが異なります。\r
\r
**介入（治療）に関する質問：**\r
- ランダム化比較試験（RCT）が最も信頼性の高い研究デザイン\r
- 観察研究（コホート研究、ケースコントロール研究など）も利用される\r
\r
**診断に関する質問：**\r
- 横断的研究（cross-sectional study）\r
- コホート研究\r
\r
**予後に関する質問：**\r
- コホート研究が最も適切\r
\r
**病因（害）に関する質問：**\r
- 観察研究（コホート研究、ケースコントロール研究）\r
\r
研究デザインの選択は、質問のタイプと利用可能なエビデンスによって異なります。\r
\r
【図】figure_13.jpg（エビデンスの種類と研究デザインスライド）\r
\r
>>>補足【研究デザインの階層】\r
伝統的に、エビデンスには「階層（ヒエラルキー）」があるとされてきました。介入の効果に関する質問では、ランダム化比較試験（RCT）のシステマティックレビューが最も確実性の高いエビデンスとされ、個々のRCT、観察研究、症例報告と続きます。しかし、GRADEアプローチでは、この階層は出発点にすぎません。RCTであってもバイアスのリスクが高ければ確実性が下がり、観察研究であっても大きな効果量がある場合には確実性が上がることがあります。\r
<<<\r
\r
---\r
\r
## パート1完了\r
\r
---\r
\r
# パート2：エビデンスの評価 — GRADEアプローチ\r
\r
【チェックリスト対応】ステップ11：エビデンスの要約と確実性の評価（Summarizing evidence and assessing certainty of the evidence）\r
\r
---\r
\r
## パート2：エビデンスの評価\r
\r
【図】figure_14.jpg（パート2タイトルスライド）\r
\r
---\r
\r
## ガイドラインのためのエビデンスの評価\r
\r
エビデンスが収集されたら、次のステップはその**エビデンスの質（確実性）を評価する**ことです。\r
\r
ガイドラインのためのエビデンスの評価には、体系的なアプローチが必要です。**GRADEアプローチ**は、エビデンスの確実性を評価するための、現在最も広く使用されている枠組みです。\r
\r
GRADEでは、エビデンスの確実性は以下の4段階で評価されます：\r
\r
| 確実性 | 意味 |\r
|--------|------|\r
| **高（High）** | 真の効果が効果推定値に近いという確信が大きい |\r
| **中（Moderate）** | 効果推定値に対する確信が中程度。真の効果は効果推定値に近い可能性があるが、大きく異なる可能性もある |\r
| **低（Low）** | 効果推定値に対する確信は限られている。真の効果は効果推定値と大きく異なる可能性がある |\r
| **非常に低（Very Low）** | 効果推定値に対する確信はほとんどない。真の効果は効果推定値と大きく異なる可能性が高い |\r
\r
【図】figure_15.jpg（GRADEの確実性4段階スライド）\r
\r
>>>補足【GRADEのエビデンスの確実性と従来の「エビデンスレベル」の違い】\r
GRADEのエビデンスの確実性（certainty of evidence）は、従来のエビデンスレベル（Level I, II, IIIなど）とは異なる概念です。従来の分類は主に研究デザインのみに基づいていましたが、GRADEは研究デザインを出発点としながら、バイアスのリスク、非一貫性、非直接性、不精確さ、出版バイアスの5つの要因で確実性を下げ、大きな効果量、用量反応勾配、交絡因子の3つの要因で確実性を上げるという、より包括的な評価を行います。日本のMindsガイドラインでもGRADEアプローチの採用が推奨されています。\r
<<<\r
\r
---\r
\r
## GRADEの出発点\r
\r
GRADEでは、エビデンスの確実性の評価は**研究デザイン**を出発点とします。\r
\r
- **ランダム化比較試験（RCT）**：確実性の出発点は「**高**」\r
- **観察研究**：確実性の出発点は「**低**」\r
\r
この出発点から、いくつかの要因に基づいて確実性が上下します。\r
\r
【図】figure_16.jpg（GRADE出発点スライド）\r
\r
---\r
\r
## エビデンスの確実性を下げる5つの要因\r
\r
GRADEでは、以下の**5つの要因**によってエビデンスの確実性が下がる可能性があります：\r
\r
1. **バイアスのリスク（Risk of bias）** — 研究の内的妥当性に関する限界\r
2. **非一貫性（Inconsistency）** — 研究間で結果が一致しない\r
3. **非直接性（Indirectness）** — 質問に対してエビデンスが直接的でない\r
4. **不精確さ（Imprecision）** — 効果推定値の信頼区間が広い\r
5. **出版バイアス（Publication bias）** — 結果が発表の有無に影響する\r
\r
【図】figure_17.jpg（確実性を下げる5つの要因スライド）\r
\r
>>>補足【5つのグレードダウン要因の覚え方】\r
5つの要因は英語の頭文字をとって「**RIIPO**」や「**ROBIN**」などと記憶する工夫もありますが、日本では「バイアスのリスク・非一貫性・非直接性・不精確さ・出版バイアス」として、それぞれの概念を理解することが重要です。各要因について「深刻（serious）」または「非常に深刻（very serious）」と評価された場合、エビデンスの確実性が1段階または2段階下がります。\r
<<<\r
\r
---\r
\r
## 要因1：バイアスのリスク（Risk of Bias）\r
\r
**バイアスのリスク**とは、研究の計画、実施、分析における**系統的な誤り**のリスクのことです。\r
\r
バイアスのリスクが高い研究では、結果が真の効果から体系的にずれている可能性があります。\r
\r
主なバイアスの種類：\r
\r
- **選択バイアス**：ランダム化の不備、割付の隠蔽の不備\r
- **実行バイアス**：参加者・研究者のマスキング（盲検化）の欠如\r
- **検出バイアス**：アウトカム評価者のマスキングの欠如\r
- **症例減少バイアス**：不完全なデータ、高い脱落率\r
- **報告バイアス**：選択的なアウトカム報告\r
\r
バイアスのリスクの評価には、**Cochrane Risk of Bias ツール**（RoB 2.0）などの標準化されたツールが使用されます。\r
\r
【図】figure_18.jpg（バイアスのリスクスライド）\r
\r
>>>補足【Cochrane Risk of Bias ツール】\r
ランダム化比較試験のバイアスのリスクを評価するための標準的なツールとして、**RoB 2**（revised Cochrane Risk of Bias tool for randomized trials）があります。また、非ランダム化研究のバイアスのリスクを評価するための**ROBINS-I**（Risk Of Bias In Non-randomised Studies of Interventions）もあります。GRADEでは、個々の研究のバイアスのリスク評価を統合して、アウトカムごとの全体的なバイアスのリスクを判断します。\r
<<<\r
\r
---\r
\r
## 要因2：非一貫性（Inconsistency）\r
\r
**非一貫性**とは、複数の研究の結果が**互いに大きく異なる**（異質性が高い）ことを指します。\r
\r
非一貫性を評価する際のポイント：\r
\r
- **効果の方向**が研究間で異なるか\r
- **効果の大きさ**が研究間で大きく異なるか\r
- **統計的な異質性**の検定（I²統計量、カイ二乗検定）\r
- **信頼区間の重なり**が少ないか\r
\r
I²統計量の目安：\r
- 0-40%：重要でない可能性\r
- 30-60%：中程度の異質性\r
- 50-90%：実質的な異質性\r
- 75-100%：かなりの異質性\r
\r
非一貫性が認められた場合、その原因を探ることが重要です（サブグループ分析、感度分析など）。説明可能な異質性であれば、確実性を下げないこともあります。\r
\r
【図】figure_19.jpg（非一貫性スライド）\r
\r
>>>補足【I²統計量について】\r
I²統計量は、研究間の変動のうち、偶然ではなく真の異質性に起因する割合を示す指標です。例えば、I²= 75%であれば、研究間の変動の75%が真の異質性によるものと解釈されます。ただし、I²の値だけで判断するのではなく、臨床的な文脈、効果の方向性の違い、信頼区間の重なりなども考慮して総合的に判断することが重要です。\r
<<<\r
\r
---\r
\r
## 要因3：非直接性（Indirectness）\r
\r
**非直接性**とは、利用可能なエビデンスが、**ガイドラインの質問に対して直接的に該当しない**場合を指します。\r
\r
非直接性には以下の4つの種類があります：\r
\r
1. **対象集団の非直接性**：研究の対象集団がガイドラインの対象集団と異なる\r
2. **介入の非直接性**：研究の介入がガイドラインの質問の介入と異なる\r
3. **比較対照の非直接性**：研究の比較対照がガイドラインの質問の比較対照と異なる\r
4. **アウトカムの非直接性**：研究のアウトカムがガイドラインの質問のアウトカムと異なる（代理アウトカムの使用を含む）\r
\r
さらに、**間接比較**（head-to-head の比較がなく、共通の比較対照を介して間接的に比較する）も非直接性の一種とみなされます。\r
\r
【図】figure_20.jpg（非直接性スライド）\r
\r
>>>補足【代理アウトカム（サロゲートアウトカム）と非直接性】\r
代理アウトカム（surrogate outcome）とは、患者にとって重要なアウトカム（死亡率、QOLなど）の代わりに用いられる中間的なアウトカム（血圧値、HbA1c、腫瘍縮小率など）のことです。代理アウトカムは測定が容易で短期間に得られることが多いですが、真のアウトカムとの関連が不確実な場合があります。GRADEでは代理アウトカムの使用はアウトカムの非直接性としてエビデンスの確実性を下げる要因となります。Module 02でも触れたように、意思決定にとって重要なアウトカムが何かを常に意識することが大切です。\r
<<<\r
\r
---\r
\r
## 要因4：不精確さ（Imprecision）\r
\r
**不精確さ**とは、効果推定値の**信頼区間が広い**ことを指します。\r
\r
不精確さが生じる主な原因：\r
\r
- **サンプルサイズが小さい**\r
- **イベント数が少ない**\r
\r
不精確さの評価方法：\r
\r
- **信頼区間の幅**：信頼区間が臨床的に意味のある閾値をまたぐかどうか\r
- **Optimal Information Size（OIS）**：十分な情報量があるかどうか\r
\r
信頼区間が臨床的な意思決定の閾値をまたぐ場合（例えば、利益と害の両方を含む場合）、不精確さにより確実性が下がります。\r
\r
【図】figure_21.jpg（不精確さスライド）\r
\r
>>>補足【Optimal Information Size (OIS)とは】\r
OIS（最適情報サイズ）とは、効果を検出するために十分な統計的検出力を持つために必要な最小限のサンプルサイズのことです。メタアナリシスに含まれる研究の合計サンプルサイズがOISに達していない場合、不精確さの懸念があると判断されます。これは、個々の研究における検出力の計算と同様の考え方を、メタアナリシス全体に適用するものです。\r
<<<\r
\r
---\r
\r
## 要因5：出版バイアス（Publication Bias）\r
\r
**出版バイアス**とは、研究の結果が**陽性（有意）であるかどうかが、その研究が発表されるかどうかに影響する**ことを指します。\r
\r
陽性の結果を示す研究は、陰性の結果を示す研究よりも出版されやすい傾向があります。これにより、利用可能なエビデンスが系統的に偏る可能性があります。\r
\r
出版バイアスを検出する方法：\r
\r
- **ファンネルプロット**：研究の効果量と精度の関係をプロットし、非対称性を視覚的に評価\r
- **統計的検定**（Egger's test、Begg's test など）\r
- **臨床試験登録との照合**：登録された研究と出版された研究を比較\r
\r
出版バイアスを完全に排除することは困難ですが、その可能性を認識し、エビデンスの確実性の評価に反映させることが重要です。\r
\r
【図】figure_22.jpg（出版バイアススライド）\r
\r
>>>補足【出版バイアスとファンネルプロット】\r
ファンネルプロットは、横軸に各研究の効果量、縦軸に研究の精度（標準誤差やサンプルサイズ）をプロットした図です。出版バイアスがなければ、逆三角形（漏斗型）の対称的なパターンが見られます。小規模で陰性の結果の研究が欠けていると、プロットが非対称になり、出版バイアスの存在が疑われます。ただし、ファンネルプロットの非対称性は出版バイアス以外の原因（研究の質の差、真の異質性など）でも生じうるため、解釈には注意が必要です。\r
<<<\r
\r
---\r
\r
## エビデンスの確実性を上げる3つの要因\r
\r
観察研究を出発点とした場合、以下の**3つの要因**があればエビデンスの確実性を上げることができます：\r
\r
1. **大きな効果量（Large magnitude of effect）**\r
   - 非常に大きな効果が認められる場合（例：相対リスク >2 または <0.5）\r
   - 極めて大きな効果の場合（例：相対リスク >5 または <0.2）は2段階上げることも\r
\r
2. **用量反応勾配（Dose-response gradient）**\r
   - 曝露量や用量と効果の間に勾配関係が認められる場合\r
\r
3. **もっともらしい交絡因子が真の効果を減少させている（Plausible confounders would reduce the effect）**\r
   - 残存する交絡因子が効果を過小評価する方向に働いている場合\r
   - すべての交絡因子を考慮しても効果が維持される場合\r
\r
【図】figure_23.jpg（確実性を上げる3つの要因スライド）\r
\r
>>>補足【グレードアップ要因の適用について】\r
エビデンスの確実性を上げる3つの要因は、主に観察研究に対して適用されます。RCTの確実性が「高」から出発する場合、グレードアップの余地は通常ありません。実際の適用では慎重な判断が求められ、3つの要因すべてが同時に満たされることは稀です。また、グレードダウン要因がある場合には、まずそれらを適用した後にグレードアップの検討を行います。\r
<<<\r
\r
---\r
\r
## GRADEの全体像：まとめ\r
\r
GRADEアプローチによるエビデンスの確実性評価の全体像を以下にまとめます：\r
\r
**ステップ1：出発点の設定**\r
- RCT → 「高」から開始\r
- 観察研究 → 「低」から開始\r
\r
**ステップ2：グレードダウン要因の検討（5つ）**\r
- バイアスのリスク\r
- 非一貫性\r
- 非直接性\r
- 不精確さ\r
- 出版バイアス\r
\r
**ステップ3：グレードアップ要因の検討（3つ）**\r
- 大きな効果量\r
- 用量反応勾配\r
- 交絡因子の影響\r
\r
**ステップ4：確実性の最終判定**\r
- 高・中・低・非常に低の4段階のいずれかに分類\r
\r
このプロセスは、**アウトカムごと**に行われます。同じ質問であっても、アウトカムによってエビデンスの確実性が異なることがあります。\r
\r
【図】figure_24.jpg（GRADE全体像まとめスライド）\r
\r
---\r
\r
## パート2完了\r
\r
---\r
\r
# パート3：エビデンスのプレゼンテーション\r
\r
【チェックリスト対応】ステップ11：エビデンスの要約と確実性の評価（Summarizing evidence and assessing certainty of the evidence）\r
\r
---\r
\r
## パート3：エビデンスのプレゼンテーション\r
\r
【図】figure_25.jpg（パート3タイトルスライド）\r
\r
---\r
\r
## エビデンスプロファイルとSoFテーブル\r
\r
エビデンスの確実性を評価した後、その結果を**構造化された形式で提示する**ことが重要です。\r
\r
GRADEでは、エビデンスの提示のために2つの主要なツールが使用されます：\r
\r
1. **GRADEエビデンスプロファイル（Evidence Profile）**\r
2. **Summary of Findings（SoF）テーブル**\r
\r
これらのテーブルは、ガイドラインパネルがエビデンスを理解し、推奨を策定する際の重要な情報源となります。\r
\r
【図】figure_26.jpg（エビデンスプロファイルとSoFテーブルスライド）\r
\r
>>>補足【GRADEproソフトウェア】\r
GRADEエビデンスプロファイルとSoFテーブルの作成を支援するソフトウェアとして**GRADEpro GDT**（Guideline Development Tool）があります。このオンラインツールは、GRADEアプローチに沿ったエビデンス評価の作業を効率化し、標準化された形式でテーブルを出力することができます。Cochrane レビューでも標準的に使用されています。\r
<<<\r
\r
---\r
\r
## GRADEエビデンスプロファイル\r
\r
**GRADEエビデンスプロファイル**は、特定の質問に対するエビデンスの確実性を**詳細に提示する**テーブルです。\r
\r
エビデンスプロファイルには以下の情報が含まれます：\r
\r
- **質問**（PICO形式）\r
- **研究の数とデザイン**\r
- **各グレードダウン要因の評価**（バイアスのリスク、非一貫性、非直接性、不精確さ、出版バイアス）\r
- **各アウトカムの効果推定値**（相対効果と絶対効果）\r
- **エビデンスの確実性**の全体的な判定\r
- **アウトカムの重要性**のランキング\r
\r
エビデンスプロファイルは、GRADEの評価プロセスの**透明性**を確保するための重要なツールです。\r
\r
【図】figure_27.jpg（GRADEエビデンスプロファイル例スライド）\r
\r
>>>補足【エビデンスプロファイルの読み方】\r
エビデンスプロファイルのテーブルでは、各列がGRADEの評価項目に対応しています。左から順に、研究数・デザイン、5つのグレードダウン要因の評価（深刻/非常に深刻/深刻でない）、研究参加者数、効果推定値（相対効果・絶対効果）、エビデンスの確実性、アウトカムの重要性が示されます。各セルに記号や脚注が付されており、判定の根拠が文書化されています。\r
<<<\r
\r
---\r
\r
## Summary of Findings（SoF）テーブル\r
\r
**Summary of Findings（SoF）テーブル**は、エビデンスプロファイルの情報を**より簡潔に提示する**テーブルです。\r
\r
SoFテーブルは、主に以下の対象者に向けて作成されます：\r
\r
- ガイドラインパネルのメンバー\r
- 臨床医\r
- 患者\r
- 政策決定者\r
\r
SoFテーブルには以下の情報が含まれます：\r
\r
- 各アウトカムの介入群と対照群の効果推定値\r
- 効果の差（絶対差と相対差）\r
- エビデンスの確実性\r
- 簡潔なコメント\r
\r
SoFテーブルは、エビデンスプロファイルよりも簡潔で、非方法論者にも理解しやすい形式です。\r
\r
【図】figure_28.jpg（SoFテーブル例スライド）\r
\r
>>>補足【エビデンスプロファイルとSoFテーブルの違い】\r
エビデンスプロファイルは、GRADEの各評価項目（5つのグレードダウン要因）の詳細な判定を含む「完全版」であり、方法論的な判断の根拠を示します。SoFテーブルは、これらの詳細を省略し、最終的な確実性と効果推定値を簡潔に示す「要約版」です。ガイドライン開発では、両方を作成することが推奨されますが、実際のガイドライン文書には通常SoFテーブルが掲載されます。\r
<<<\r
\r
---\r
\r
## エビデンスから推奨へ\r
\r
エビデンスの評価が完了すると、次のステップは**エビデンスから推奨を策定する**ことです。\r
\r
エビデンスの確実性は、推奨の強さに影響する**重要な要因の一つ**ですが、唯一の要因ではありません。\r
\r
推奨の策定には、以下の要因が考慮されます：\r
\r
- **エビデンスの確実性**\r
- **利益と害のバランス**\r
- **患者の価値観と選好**\r
- **コストとリソースの利用**\r
- **健康の公平性**\r
- **実行可能性**\r
- **受容性**\r
\r
これらの要因をどのように推奨に統合するかは、**Module 4**で詳しく学びます。\r
\r
【図】figure_29.jpg（エビデンスから推奨へスライド）\r
\r
>>>補足【Evidence-to-Decision（EtD）フレームワーク】\r
GRADEグループは、エビデンスから推奨を導くプロセスを構造化するために**Evidence-to-Decision（EtD）フレームワーク**を開発しました。EtDフレームワークでは、上記の要因（利益と害のバランス、エビデンスの確実性、患者の価値観、コスト、公平性、実行可能性、受容性）を体系的に評価し、透明性のある推奨策定を支援します。Module 4ではこのフレームワークについて詳細に学ぶことになります。\r
<<<\r
\r
---\r
\r
## モジュール3のまとめ\r
\r
このモジュールでは、以下の主要な内容を学びました：\r
\r
**パート1：エビデンスの検索と収集**\r
- ガイドライン推奨はシステマティックレビューに基づくべきである\r
- エビデンスの特定には3つのアプローチがある：①新規にSRを実施、②既存のSRを使用、③既存のガイドラインを活用\r
- エビデンスの検索は体系的、包括的、透明、かつ最新であるべき\r
\r
**パート2：エビデンスの評価（GRADEアプローチ）**\r
- GRADEはエビデンスの確実性を4段階（高・中・低・非常に低）で評価する\r
- RCTは「高」、観察研究は「低」から出発する\r
- 5つの要因で確実性が下がる：バイアスのリスク、非一貫性、非直接性、不精確さ、出版バイアス\r
- 3つの要因で確実性が上がる：大きな効果量、用量反応勾配、交絡因子の影響\r
\r
**パート3：エビデンスのプレゼンテーション**\r
- GRADEエビデンスプロファイルとSoFテーブルによる構造化された提示\r
- エビデンスの確実性は推奨策定の重要な基盤だが、唯一の要因ではない\r
\r
【図】figure_30.jpg（モジュール3まとめスライド）\r
\r
---\r
\r
## パート3完了\r
\r
---\r
\r
## 付録：GIN-McMaster チェックリスト対応ステップ\r
\r
### ステップ10：システマティックレビューの決定とエビデンスの検索\r
\r
**ステップ10の主な項目：**\r
\r
- ガイドラインの質問に対応するエビデンスを特定するためのアプローチを決定する\r
- 既存のシステマティックレビューの使用、新規レビューの実施、または既存ガイドラインの活用のいずれかを選択する\r
- 体系的かつ包括的な検索戦略を策定し、実行する\r
- 検索プロセスを透明に文書化する\r
- 情報専門家（ライブラリアン）の協力を得る\r
- 検索結果のスクリーニングと研究選択を体系的に行う\r
\r
### ステップ11：エビデンスの要約と確実性の評価\r
\r
**ステップ11の主な項目：**\r
\r
- GRADEアプローチを使用してエビデンスの確実性を評価する\r
- アウトカムごとにエビデンスの確実性を判定する\r
- 5つのグレードダウン要因と3つのグレードアップ要因を体系的に評価する\r
- GRADEエビデンスプロファイルとSoFテーブルを作成する\r
- 評価の根拠を透明に文書化する\r
- エビデンスの要約をガイドラインパネルに提示し、推奨策定の基盤とする\r
\r
>>>補足【GIN-McMaster チェックリストについて】\r
GIN-McMaster Guideline Development Checklistは、ガイドライン開発の全プロセスをカバーする18ステップのチェックリストです。Guidelines International Network（GIN）とMcMaster大学が共同で開発しました。本モジュールの内容は主にステップ10（エビデンスの検索）とステップ11（エビデンスの評価・要約）に対応しています。チェックリストの全文は添付の参考資料（guidelinechecklistprintable.pdf）を参照してください。\r
<<<\r
\r
---\r
\r
## 参考資料\r
\r
- GRADE Working Group. Grading quality of evidence and strength of recommendations. BMJ 2004;328:1490.\r
- Schünemann HJ, et al. GRADE guidelines: A new series of articles in the Journal of Clinical Epidemiology. J Clin Epidemiol 2011;64:380-382.\r
- GIN-McMaster Guideline Development Checklist（添付資料参照）\r
- Higgins JPT, Thomas J, et al. Cochrane Handbook for Systematic Reviews of Interventions. Version 6.\r
- Minds診療ガイドライン作成マニュアル（日本医療機能評価機構）\r
\r
---\r
\r
**Module 03 完了**`,ne=`\r
\r
# INGUIDE レベル1：モジュール4 — 推奨の作成\r
\r
## ドキュメント概要\r
\r
本ドキュメントは、INGUIDE（International Guideline Development）プログラムのレベル1・モジュール4の学習資料を日本語化したものです。本モジュールは、エビデンスに基づく医療ガイドラインにおいて「推奨（recommendation）」をどのように作成し、その方向性と強さをどのように決定するかを学ぶことを目的としています。\r
\r
>>>補足【INGUIDEプログラムについて】\r
INGUIDEは、Guidelines International Network（GIN）とMcMaster大学が共同で開発した、ガイドライン開発者のための国際的な研修プログラムです。ガイドライン開発の基礎から応用までを体系的に学ぶことができ、GRADEアプローチを中心とした方法論を教育します。レベル1は基礎レベルに相当し、モジュール1〜4で構成されています。\r
<<<\r
\r
**本モジュールの学習目標：**\r
\r
- 推奨の作成プロセスの全体像を理解する\r
- 推奨の方向性（賛成・反対）と強さ（強い・条件付き）を決定する基準を学ぶ\r
- エビデンスから決定へのフレームワーク（Evidence to Decision Framework）の活用方法を理解する\r
- 推奨の種類（強い推奨・条件付き推奨・適正診療声明）を区別できるようになる\r
- 推奨の文言作成における注意点を理解する\r
- ガイドラインの報告・査読・普及・実装・評価・更新のプロセスを把握する\r
\r
**本モジュールの構成：**\r
\r
- パート1：推奨の作成（Developing Recommendations）\r
- パート2：推奨の種類（Types of Recommendations）\r
- パート3：報告と査読（Reporting and Peer Review）\r
\r
---\r
\r
# 目次\r
\r
パート1：推奨の作成\r
\r
- 推奨作成のプロセス ……… 4\r
- 推奨の方向性と強さ — 基準 ………\r
- 推奨の基準と強さ — 基準の説明 ………\r
- 何について決定するか ……… 10\r
- 条件付き推奨 ……… 12\r
- バランスが明確でないのはいつか？ ……… 15\r
- 強い推奨 ……… 18\r
- 強い推奨の意味合い ……… 19\r
- バランスが明確なのはいつか？ ……… 20\r
- 対話型のエビデンスから決定へのフレームワーク ……… 21\r
- エビデンスから決定へのフレームワークの活用 ……… 23\r
- 入院患者における血栓塞栓症予防の例 — パート1 ……… 24\r
- 入院患者における血栓塞栓症予防の例 — パート2 ……… 25\r
- 入院患者における血栓塞栓症予防の例 — パート2 ……… 26\r
- 入院患者における血栓塞栓症予防の例 — パート3 ……… 28\r
- 判定の要約 ……… 29\r
- 結果のバランス ……… 30\r
- 選択肢 ……… 31\r
- パート1完了 ……… 32\r
\r
パート2：推奨の種類\r
\r
- 投票とコンセンサス ……… 34\r
- 投票とコンセンサス — 推奨 ……… 36\r
- 推奨の報告 ……… 37\r
- 低いまたは非常に低い確実性に基づく強い推奨 ……… 38\r
- 「推奨なし」は存在しない ……… 40\r
- 推奨の文言 ……… 41\r
- 推奨の文言 — 重要な考慮事項 ……… 43\r
- いつ適正診療声明を作成できるか？ ……… 44\r
- 適正診療声明の2つの例 ……… 46\r
- パート2完了 ……… 47\r
\r
パート3：報告と査読\r
\r
- GIN-McMasterガイドライン開発チェックリスト ……… 49\r
- 報告と査読 ……… 50\r
- 普及と実装 ……… 51\r
- 普及と実装 — リソース ……… 53\r
- 評価と利用 ……… 54\r
- 更新 ……… 55\r
- パート3完了 ……… 56\r
\r
---\r
\r
# パート1：推奨の作成\r
\r
【チェックリスト対応】ステップ13：推奨の作成とその強さの決定（Developing Recommendations and Determining their Strength）\r
\r
## 推奨作成のプロセス\r
\r
【図】figure_6.jpg（元のファイル名: image11.jpg）\r
\r
推奨の作成プロセスは、ガイドライン作成グループまたはパネルがPICO質問を作成することから始まります。質問が定式化されたら、重要なアウトカムおよび重大なアウトカムに関するエビデンスを統合するため、システマティックレビューや医療技術評価（HTA）などのエビデンス統合が実施されます。重要でないアウトカムはエビデンス統合に含まれません。エビデンスレビューチームは、バイアスのリスクやその他の要因について個々の研究を評価し、エビデンスを統合し、エビデンスプロファイルを作成します。GRADEアプローチを使用する場合は、エビデンスから決定への表（Evidence to Decision Table）を作成します。各アウトカムについて、またエビデンスから決定へのフレームワーク上のその他の基準について、エビデンスの確実性を評価します。これらのフレームワークは本モジュールの一部であり、本モジュールで説明されます。エビデンスレビューチームは、エビデンスの全体的な確実性の評価を提供し、ガイドライン作成グループが検討できるようにします。ガイドライン作成グループは、エビデンスから決定へ（Evidence to Decision）またはエビデンスから推奨へ（Evidence to Recommendation）のフレームワークを使用して、推奨のGRADEを決定します。すなわち、推奨が強いか条件付きか、そしてどの選択肢に対してかを決定します。特定の選択肢や介入に賛成、または反対となり得ますが、これが方向性を決定します。推奨が承認されると、推奨またはガイドラインとして公表されます。なお、このスライドは典型的なGRADEアプローチを示しています。一部の組織はGRADEアプローチを使用しませんが、全体的な概念は類似しています。\r
\r
>>>補足【PICOについて】\r
PICOとは、臨床疑問を構造化するためのフレームワークです。P（Patient/Population：患者・対象集団）、I（Intervention：介入）、C（Comparison/Comparator：比較対照）、O（Outcome：アウトカム）の頭文字をとったものです。例えば、「入院中の急性疾患患者（P）に対して、低分子量ヘパリン（I）をプラセボ（C）と比較した場合、血栓塞栓症の発生（O）を減少させるか」という形で臨床疑問を明確に定式化します。\r
<<<\r
\r
>>>補足【GRADEアプローチについて】\r
GRADE（Grading of Recommendations Assessment, Development and Evaluation）は、エビデンスの確実性を評価し、推奨の強さを決定するための国際的に広く使用されている体系的なアプローチです。世界保健機関（WHO）、Cochrane、多くの国際学会やガイドライン作成組織が採用しています。日本でもMindsガイドラインにおいてGRADEアプローチの考え方が取り入れられています。\r
<<<\r
\r
>>>補足【エビデンスプロファイルについて】\r
エビデンスプロファイル（Evidence Profile）は、GRADEアプローチにおいて、各アウトカムに関するエビデンスの質と効果の大きさを一覧表にまとめたものです。バイアスのリスク、非一貫性、非直接性、不精確さ、出版バイアスなどの評価項目が含まれます。GRADEproというソフトウェアを使用して作成されることが多く、ガイドラインパネルが推奨を作成する際の基礎資料となります。\r
<<<\r
\r
## 推奨の作成とその方向性および強さの決定 — パート1\r
\r
【図】figure_7.jpg（元のファイル名: image12.jpg）\r
\r
推奨の作成とその方向性および強さの決定 — パート1\r
\r
**推奨の種類**\r
\r
| 望ましくない帰結（正味）| ←→ | 望ましい帰結（正味）|\r
\r
- 介入に対する強い推奨（反対）\r
- 介入に対する条件付き推奨（反対）\r
- 介入または比較対照のいずれに対しても条件付き推奨\r
- 介入に対する条件付き推奨（賛成）\r
- 介入に対する強い推奨（賛成）\r
\r
**推奨の種類**\r
\r
- 介入に反対する強い推奨\r
- 介入に反対する条件付き推奨\r
- 介入または比較対照のいずれに対しても条件付き推奨\r
- 介入に賛成する条件付き推奨\r
- 介入に賛成する強い推奨\r
\r
推奨の方向性と強さは、介入の望ましくない帰結と望ましい帰結のバランスによって決定されます。正味の望ましくない帰結がある場合、通常は介入に反対する推奨が行われます。正味の望ましい帰結がある場合は、賛成する推奨が行われます。しかし、バランスは必ずしも明確ではありません。明確な場合は、介入に賛成または反対の強い推奨が行われます。バランスが明確でない場合は、介入に賛成または反対の条件付き推奨（弱い推奨とも呼ばれます）が行われます。まれな状況として、特に2つの積極的な介入を比較する場合、両方の介入に対して条件付きの推奨、つまり介入と比較対照の両方に対する推奨が行われることがあります。\r
\r
>>>補足【推奨の方向性と強さの組み合わせ】\r
GRADEアプローチでは、推奨は「方向性」と「強さ」の2つの軸で表現されます。方向性は「賛成（for）」か「反対（against）」のいずれかです。強さは「強い（strong）」か「条件付き（conditional）／弱い（weak）」のいずれかです。この組み合わせにより、「強く推奨する」「条件付きで推奨する」「条件付きで推奨しない」「強く推奨しない」の4つの基本パターンが生まれます。さらにまれなケースとして、「どちらの介入も条件付きで推奨する」というパターンもあります。\r
<<<\r
\r
## 推奨の方向性と強さ — 基準\r
\r
【図】figure_10.jpg（元のファイル名: image15.jpg）\r
【図】figure_11.jpg（元のファイル名: image16.jpg）\r
\r
### 推奨の方向性と強さ — 基準\r
\r
推奨：特定の状況に対する最善の行動方針の正確な記述\r
\r
推奨には、対象集団、介入、および比較対照の記述を含めるべきです\r
\r
推奨の強さとその根拠となるエビデンスの確実性を含めるべきです\r
\r
- 推奨を定式化するにあたり、エビデンスに基づく2つの主な決定が必要です：\r
  - どの方向に推奨を行うべきか\r
  - 推奨はどの程度強くすべきか\r
- 強い推奨 — すべての基準がその選択肢を推奨する方向を指し示している場合\r
  - 明確な正味の健康上の利益がある\r
  - 価値観の違いが重要でない\r
  - 費用が高くない\r
  - 公平性、受容性、実現可能性に関する懸念がない\r
- 条件付きまたは弱い推奨 — 推奨される行動方針が対象集団において明確な正味の帰結をもたらすという確信が低い場合\r
\r
推奨の方向性と強さを決定する基準がここに記述されています。基準には、問題の重要性または優先度、望ましい健康効果の大きさ、望ましくない健康効果の大きさ、エビデンスの確実性（これらの基準全体にわたる包括的なもの）、根底にある価値観、効果のバランス、必要な資源、必要な資源に関するエビデンスの確実性、費用対効果の考慮、公平性、受容性、実現可能性が含まれます。\r
\r
推奨は、特定の状況に対する最善の行動方針の正確な記述であるべきです。対象集団、介入、および比較対照（それが自明でない場合）の記述と、誰が推奨を行うかを含めるべきです。\r
\r
推奨の強さとその根拠となるエビデンスの確実性も示すべきです。したがって、エビデンスに基づいて推奨を定式化するには、2つの主な決定が必要です：\r
\r
- どの方向に推奨を行うべきか、すなわち介入に賛成か反対か、あるいは比較対照に賛成か？すでに述べたようにまれなシナリオとして、ガイドラインパネルが2つの選択肢が同等であると考える場合があります。\r
- 推奨はどの程度強くすべきか、例えば治療はすべてまたはほとんどの人に使用されるべきか、あるいは推奨に従うために満たされるべき重要な条件があるか？\r
\r
強い推奨は、すべての基準がその選択肢を推奨する方向を指し示している場合に発行されます。例えば、明確な正味の健康上の利益があり、価値観の違いが役割を果たす可能性が低く、選択肢が高額でなく、公平性、受容性、実現可能性に関する懸念がない場合です。条件付き推奨、または一部の組織では弱い推奨と呼ばれるものは、推奨される行動方針が対象集団において明確な正味の帰結をもたらすという確信に関して、すべての要素が揃っていないことを意味します。\r
\r
## 推奨の基準と強さ — 基準の説明\r
\r
【図】figure_12.jpg（元のファイル名: image17.jpg）\r
\r
### 推奨の方向性と強さに対する基準の影響\r
\r
- **問題**：問題に関する判定は、対処される医療課題の重要性と頻度（疾病負荷、有病率、コストまたはベースラインリスク）によって決定されます。問題の重要性が大きい場合、強い推奨がより可能性が高くなります。\r
\r
- **価値観と選好、またはアウトカムの重要性**：これは、影響を受ける人々にとって健康アウトカムがどの程度重要であるか、どの程度ばらつきがあるか、そしてそれに関する不確実性があるかどうかを記述します。\r
\r
- **健康上の利益と害に関するエビデンスの確実性**：エビデンスの確実性が高いほど、強い推奨の可能性が高くなります。\r
\r
- **健康上の利益、害、負担、およびそのバランス**：これには、利益と害の両方の絶対効果とその重要性（価値観に関する判定を含む）の評価が必要です。正味の利益または正味の害が大きいほど、その選択肢に賛成または反対の強い推奨の可能性が高くなります。\r
  - これには、利益と害の両方の絶対効果とその重要性（価値観に関する判定を含む）の評価が必要です。\r
  - 正味の利益または正味の害が大きいほど、その選択肢に賛成または反対の強い推奨の可能性が高くなります。\r
\r
- **資源への影響**：これは、選択肢がどの程度資源集約的であるか、費用対効果があるか、増分的な利益があるかを記述します。これらの資源への影響がより有利であるか、明らかに不利であるほど、強い推奨の可能性が高くなります。\r
\r
- **公平性**：不平等を減少させるか公平性を高める可能性が大きく、選択肢へのアクセスが容易であるほど、強い推奨の可能性が高くなります。\r
\r
- **実現可能性**：すべてまたはほとんどのステークホルダーにとって選択肢の実現可能性が高いほど、強い推奨の可能性が高くなります。\r
\r
- **受容性**：すべてまたはほとんどのステークホルダーにとって選択肢の受容性が高いほど、強い推奨の可能性が高くなります。\r
\r
以上が基準の説明と、どのような考慮事項が強い推奨または条件付き推奨につながり得るかです。各基準が推奨の方向性と強さにどのように影響するかをお読みください。\r
\r
>>>補足【各基準と推奨の強さの関係】\r
GRADEアプローチでは、推奨の強さを決定する際に複数の基準を総合的に検討します。すべての基準が一方向を指し示す場合は強い推奨が適切であり、基準間で矛盾がある場合や不確実性が高い場合は条件付き推奨が適切となります。重要なのは、エビデンスの確実性だけで推奨の強さが決まるわけではなく、利益と害のバランス、価値観、資源、公平性、受容性、実現可能性など複数の要素を総合的に判断するということです。\r
<<<\r
\r
## 何について決定するか\r
\r
【図】figure_13.jpg（元のファイル名: image18.jpg）\r
\r
### 何について決定するか\r
\r
- 期待される健康上の利益は害よりも大きいか、あるいはその逆か？\r
- 介入に関連する資源要件とコストの大きさはどの程度で、費用対効果があるか？\r
- 介入の公平性への影響はどうか？これには社会的影響と環境への影響が含まれます。\r
- 介入はさまざまなステークホルダーにとって受容可能か？\r
- 介入は実現可能か？\r
- 組織は、特定のガイドラインまたはトピックに関連する可能性のある特定の基準を明示できます。\r
\r
推奨を行う際、ガイドライン作成グループは介入または代替案を推奨するか提案するかを決定します。\r
\r
推奨を行う際には、介入の望ましい帰結と望ましくない帰結の程度に関するエビデンスを考慮し、考慮事項や決定を行う必要があります。\r
\r
- 期待される健康上の利益は害よりも大きいか、あるいはその逆か？\r
- 介入に関連する資源要件とコストの大きさはどの程度で、費用対効果があるか？\r
- 介入の公平性への影響はどうか？これには社会的影響と環境への影響が含まれます。\r
- 介入はさまざまなステークホルダーにとって受容可能か？\r
- 介入は実現可能か？\r
- 組織は、特定のガイドラインまたはトピックに関連する可能性のある特定の基準を明示できます。\r
\r
参考文献：Alonso-Coello P, Schünemann HJ, Moberg J, Brignardello-Petersen R, Akl EA, Davoli M, et al. GRADE Evidence to Decision (EtD) frameworks: a systematic and transparent approach to making well informed healthcare choices. 1: Introduction. BMJ.\r
\r
要約すると、推奨を行う際、ガイドライン作成グループは介入または代替案を推奨するか提案するかを決定します。推奨を行う際には、介入の実際の望ましい帰結と望ましくない帰結がどの程度大きいかについてエビデンスを考慮し、考慮事項や決定を行います。例えば：\r
\r
- 期待される健康上の利益は害よりも大きいか、あるいはその逆か？（これは、問題の優先度と重大性、介入効果、人々がアウトカムに置く価値観、および効果の確実性に関する考慮事項を統合するものです。）\r
- 介入に関連する資源要件と関連コストの大きさはどの程度で、費用対効果があるか？\r
- 介入の公平性への影響はどうか？社会的影響や環境への影響を含む場合もあります。\r
- 介入はさまざまなステークホルダーにとって受容可能か？この基準には、倫理的、人権的、およびその他の考慮事項が含まれます。\r
- 介入は実現可能か？この基準には、医療制度、社会的、法的、政治的、およびその他の考慮事項が含まれます。\r
- 組織は、もちろん、特定のガイドラインまたはトピックに関連する可能性のある特定の基準を明示できます。\r
\r
>>>補足【望ましい帰結と望ましくない帰結について】\r
「望ましい帰結（desirable consequences）」と「望ましくない帰結（undesirable consequences）」は、健康上の利益と害だけにとどまりません。望ましい帰結には、健康上の利益に加えて、受容性の高さ、コスト削減なども含まれます。望ましくない帰結には、健康上の害に加えて、高いコスト、不公平性、実現不可能性なども含まれます。推奨の方向性と強さは、これらすべての帰結を総合的にバランスして判断します。\r
<<<\r
\r
## 条件付き推奨\r
\r
【図】figure_14.jpg（元のファイル名: image19.jpg）\r
\r
### ほとんどの推奨\r
\r
「条件付き」= 個別の状況による\r
\r
条件付き推奨は、実装にあたって相当な支援を要することが多い\r
\r
条件を記述すべきである\r
\r
ほとんどの推奨は、しかし、条件付き推奨です。これは、交差点の黄色い信号灯に例えることができます。個別の状況に条件付きであり、行動を実施する（通過する）か、介入を実施しない（通過しない）かを検討するかもしれません。条件付き推奨が提示される場合、実装に相当な支援を必要とすることが多く、条件が記述されるべきです。\r
\r
>>>補足【条件付き推奨の「条件」とは】\r
条件付き推奨における「条件」とは、推奨が適用される際に考慮すべき具体的な状況を指します。例えば、「特定の患者集団にのみ適用される」「特定の資源が利用可能な場合にのみ適用される」「患者の価値観や選好に応じて判断すべき」などです。条件付き推奨を行う場合は、これらの条件を明確に記述することが重要です。\r
<<<\r
\r
## 条件付きまたは弱い推奨の意味合い\r
\r
【図】figure_15.jpg（元のファイル名: image20.jpg）\r
\r
### 条件付きまたは弱い推奨の意味合い\r
\r
**患者：** この状況にあるほとんどの人は推奨される行動方針を希望するが、多くの人は希望しない\r
\r
**臨床家：** 個々の患者にとって異なる選択が適切であり、臨床家は各患者が患者の価値観と選好に一致した管理上の決定に至るよう支援しなければならない。意思決定支援ツールは、個人が個々のリスク、価値観、選好に一致した意思決定を行う際に有用である可能性がある。\r
\r
**政策立案者：** 政策立案にはかなりの議論とさまざまなステークホルダーの参加が必要となる。提案された行動方針に関する業績指標は、適切な意思決定プロセスが適正に文書化されているかどうかに焦点を当てるべきである。\r
\r
**研究者：** 推奨は追加の研究によって強化される可能性が高い。条件付き推奨を決定した条件と基準の評価は、研究のギャップの特定に役立つ。\r
\r
したがって、条件付きまたは弱い推奨の意味合いを理解することが重要です。患者や疾患を持つ人々にとっては、この状況にあるほとんどの人は推奨される行動方針を希望するが、多くの人は希望しないということを意味します。臨床家や医療従事者にとっては、個々の患者にとって異なる選択が適切であり、臨床家は各患者または人が、患者の価値観と選好に一致した管理上の決定に至るよう支援しなければならないことを意味します。意思決定支援ツールは、個人が個々のリスク、価値観、選好に一致した意思決定を行う際に有用である可能性があります。政策立案者にとっては、政策立案にはかなりの議論とさまざまなステークホルダーの参加が必要となることを意味します。提案された行動方針に関する業績指標は、適切な意思決定プロセスが適正に文書化されているかどうかに焦点を当てるべきです。研究者にとっては、推奨は将来の更新や適応のために追加の研究によって強化される可能性が高いことを意味します。条件付き推奨ではなく強い推奨とすることを決定した条件と基準、および関連する判定、研究エビデンス、追加の考慮事項の評価は、研究のギャップの特定に役立ちます。\r
\r
>>>補足【意思決定支援ツール（Decision Aids）について】\r
意思決定支援ツールとは、患者が医療上の選択をする際に、各選択肢の利益とリスクに関する情報を分かりやすく提供し、自身の価値観や選好に基づいた意思決定を支援するためのツールです。パンフレット、ウェブサイト、動画など様々な形式があります。条件付き推奨の場合、「ほとんどの人は推奨される治療を選ぶが、一定数の人は選ばない」ため、共同意思決定（shared decision making）が特に重要となります。\r
<<<\r
\r
## バランスが明確でないのはいつか？\r
\r
【図】figure_16.jpg（元のファイル名: image21.jpg）\r
\r
### バランスが明確でないのはいつか？\r
\r
この推奨を実施することがすべての人にとって良いことであるかどうか、確信を持てないことがある\r
\r
この推奨を実施することがすべての人にとって良いことであるかどうか、確信を持てないことがある\r
\r
- 正味の帰結が不明確である。エビデンスから決定へのフレームワーク上の基準に関する研究エビデンスが決定的でないため（低いまたは非常に低い確実性、あるいは特定の集団に対して効果が大きく異なる）\r
- 効果が非常に拮抗している — 利益の大きさが害と類似している\r
- 人々がアウトカムを異なって評価し、すべての人に適用される推奨が適切でない\r
- コストが管轄地域によって異なる。一部の管轄地域ではコストが高すぎる、または現時点では負担できない\r
- 介入または帰結が公平でない、すべての人に受容されない、または実現可能でない（例：文化的、法的理由）\r
\r
では、望ましい帰結と望ましくない帰結の間のバランスが明確でないのはいつでしょうか？それは、この推奨を実施することがすべての人にとって良いことであるかどうかについて確信を持てなくする何かがある場合です。例えば、正味の帰結が不明確である場合、それはエビデンスから決定へのフレームワーク上の基準に関する研究エビデンスが決定的でないため、例えば確実性が低いまたは非常に低い場合や、より具体的に定義できない特定の集団に対して効果が大きく異なる場合です。言い換えると、効果が非常に拮抗しているかもしれず、利益の大きさが害と類似しているかもしれません。人々がアウトカムを異なって評価し、すべての人に適用される推奨が適切でない場合も、バランスが明確でない理由となります。コストが管轄地域によって異なり、一部の管轄地域ではコストが高すぎるか、おそらく現時点では負担できない場合、あるいは介入または帰結が公平でない、すべての人に受容されない、または実現可能でない場合、例えば文化的または法的理由による場合です。\r
\r
## 条件付き推奨\r
\r
【図】figure_17.jpg（元のファイル名: image22.jpg）\r
\r
### 条件付き推奨\r
\r
世界保健機関の結核に関するガイドラインからの例を見てみましょう。これはeTBガイドラインの推奨マップからのものであり、WHOが作成したアクセスしやすいガイドラインリソースです。推奨は以下のように読みます：「抗レトロウイルス療法を受けているHIV感染者に対して胸部X線撮影を提供してもよく、異常な画像所見がない者に対して予防治療を行う。」これは、エビデンスの確実性が低いことに基づく条件付き推奨です。\r
\r
>>>補足【WHOの結核ガイドラインについて】\r
世界保健機関（WHO）は、結核を含む多くの感染症に関するガイドラインをGRADEアプローチを用いて作成しています。eTBガイドラインは、WHOの結核関連推奨をインタラクティブなオンラインプラットフォームで提供するもので、推奨マップ（recommendation map）という形式で各推奨の内容、強さ、エビデンスの確実性を視覚的に確認できます。\r
<<<\r
\r
## 条件付き推奨 — 例\r
\r
【図】figure_18.jpg（元のファイル名: image23.jpg）\r
\r
### 条件付き推奨 — 例\r
\r
**人々がアウトカムを異なって評価し、すべての人に適用される推奨が適切でない**\r
\r
価値観：異常胸部X線撮影の追加は患者の負担を増加させる。患者はTB疾患を除外する際のより大きな確実性を重視する可能性がある\r
\r
**コストが管轄地域によって異なり、一部の管轄地域ではコストが高すぎるか、現時点では負担できない**\r
\r
大きなコスト：より多くの資源が必要であり、特に胸部X線撮影が利用できない場合。胸部X線撮影は、TBのさらなる検査を受けるHIV陽性者の数を増加させる\r
\r
**介入または帰結が公平でない、すべての人に受容されない、または実現可能でない（文化的、法的理由）**\r
\r
状況、医療制度のインフラストラクチャー、HIV診療所の業務量によって大きく異なる\r
\r
ここに条件付き推奨が行われた理由のいくつかの例があります。異常胸部X線撮影の追加は患者の負担を増加させます。しかし、患者はTB疾患を除外する際のより大きな確実性を重視する可能性があり、一部の患者は他の患者よりもそれを重視するかもしれません。その介入に関連する大きなコストがあります。より多くの資源が必要であり、特に胸部X線撮影がまだ利用できない場合はなおさらです。また、TBのさらなる検査を受けるHIV陽性者の数も増加させます。さらに、受容性と実現可能性は、状況、医療制度のインフラストラクチャー、そしてHIV診療所で働く人々の業務量によって大きく異なる可能性があります。\r
\r
## 強い推奨\r
\r
【図】figure_19.jpg（元のファイル名: image24.jpg）\r
\r
### 強い推奨\r
\r
これは強い推奨の例であり、同じくWHO結核ガイドラインの推奨マップからのものです。推奨は以下のように読みます：「HIVと共に生きるすべての結核患者に対して、CD4細胞数にかかわらず抗レトロウイルス療法を開始すべきである。」CD4細胞数とは、HIV感染者における一定レベルの免疫を指します。この推奨は、エビデンスの確実性が高いことに基づく強い推奨です。\r
\r
## 強い推奨の意味合い\r
\r
【図】figure_20.jpg（元のファイル名: image25.jpg）\r
\r
### 強い推奨の意味合い\r
\r
**患者：** この状況にあるほとんどの人は推奨される行動方針を希望し、希望しない人はごくわずかである\r
\r
**臨床家：** ほとんどの個人は推奨される行動方針に従うべきである。正式な意思決定支援ツールは、個々の患者が自身の価値観と選好に一致した意思決定を行う際に必要となる可能性は低い\r
\r
**政策立案者：** 推奨はほとんどの状況で政策として採用できる。ガイドラインに基づくこの推奨への遵守は、質の基準または業績指標として使用できる\r
\r
**研究者：** 推奨は信頼できる研究またはその他の説得力のある判定によって支持されており、追加の研究が推奨を変更する可能性は低い。まれに、強い推奨が低いまたは非常に低い確実性のエビデンスに基づく場合がある\r
\r
**患者：** この状況にあるほとんどの人は推奨される行動方針を希望し、希望しない人はごくわずかである\r
\r
**臨床家：** ほとんどの個人は推奨される行動方針に従うべきである。正式な意思決定支援ツールは、個々の患者が自身の価値観と選好に一致した意思決定を行う際に必要となる可能性は低い\r
\r
**政策立案者：** 推奨はほとんどの状況で政策として採用できる。ガイドラインに基づくこの推奨への遵守は、質の基準または業績指標として使用できる\r
\r
**研究者：** 推奨は信頼できる研究またはその他の説得力のある判定によって支持されており、追加の研究が推奨を変更する可能性は低い。まれに、強い推奨が低いまたは非常に低い確実性のエビデンスに基づく場合がある\r
\r
ここでも、強い推奨の意味合いを理解することが重要です。患者や疾患を持つ人々にとっては、この状況にあるほとんどの人は推奨される行動方針を希望し、希望しない人はごくわずかであることを意味します。臨床家や医療専門家にとっては、ほとんどの個人は推奨される行動方針に従うべきであることを意味します。正式な意思決定支援ツールは、個々の患者が自身の価値観と選好に一致した意思決定を行う際に必要となる可能性は低いです。政策立案者にとっては、推奨はほとんどの状況で政策として採用できることを意味します。ガイドラインに基づくこの推奨への遵守は、質の基準または業績指標として使用できます。研究者にとっては、推奨は信頼できる研究またはその他の説得力のある判定によって支持されており、追加の研究が推奨を変更する可能性は低いことを意味します。まれに、強い推奨が低いまたは非常に低い確実性のエビデンスに基づく場合があります。そのような場合、さらなる研究が推奨を変更する重要な情報を提供する可能性があります。\r
\r
>>>補足【強い推奨と条件付き推奨の意味合いの比較】\r
強い推奨と条件付き推奨では、各ステークホルダーに対する意味合いが大きく異なります。強い推奨の場合、患者のほとんどが推奨される治療を選択し、臨床家は標準的にその治療を提供し、政策立案者はそれを政策に組み込むことができます。一方、条件付き推奨の場合、患者の選択はより多様であり、臨床家は個々の患者との共同意思決定が必要となり、政策立案者はより多くの議論が必要となります。この違いを理解することは、推奨の臨床現場への適用において極めて重要です。\r
<<<\r
\r
## バランスが明確なのはいつか？\r
\r
【図】figure_21.jpg（元のファイル名: image26.jpg）\r
\r
### バランスが明確なのはいつか？\r
\r
ほぼすべての患者に適用される：選択肢に賛成または反対\r
\r
ほぼすべての患者に適用される：選択肢に賛成または反対\r
\r
- 正味の帰結が明白である。エビデンスから決定へのフレームワーク上の基準に関する研究エビデンスが決定的であるため（中等度または高い確実性）\r
- 効果が明確である — 利益の大きさが害よりもはるかに大きいか、はるかに小さい\r
- 人々がアウトカムを同様に評価し、すべての人に適用される推奨が適切である\r
- コストが各設定において法外でない\r
- 介入または帰結が公平であり、すべての人に受容可能であり、実現可能である（文化的、法的理由）\r
\r
では、帰結のバランスが明確なのはいつでしょうか？再び、ほぼすべての患者に適用され、選択肢に賛成または反対の推奨が行われるという意味でバランスが明確な場合です。例えば、正味の帰結が明白である場合、それはエビデンスから決定へのフレームワーク上の基準に関する研究エビデンスが決定的であるため、すなわち中等度または高い確実性がある場合です。効果が明確で、利益の大きさが害よりもはるかに大きいか、はるかに小さい場合。人々がアウトカムを同様に評価し、すべての人に適用される推奨が適切な場合。コストが各設定において法外でない場合。そして、介入または帰結が公平であり、すべての人に受容可能であり、例えば文化的にも法的理由からも実現可能な場合です。\r
\r
## 対話型のエビデンスから決定へのフレームワーク\r
\r
【図】figure_22.jpg（元のファイル名: image27.jpg）\r
\r
### 対話型のエビデンスから決定へのフレームワーク\r
\r
フレームワーク：\r
\r
- 質問に関する必要な詳細を整理する\r
- 特定の基準に従って評価され、HTA（医療技術評価）やシステマティックレビューで要約されたエビデンスを整理する\r
- 結論の種類（実装、研究を含む）を記述する\r
- これらのプロセスの実施とユーザーツールの開発を支援する\r
\r
**質問**\r
- 詳細 — PICO、サブグループ\r
- 背景と利益相反\r
\r
**評価**\r
- 基準\r
- 判定\r
- 研究エビデンス（HTAおよびシステマティックレビュー）\r
- 追加の考慮事項\r
\r
**結論**\r
- 決定の種類 — 推奨\r
- 正当化の根拠\r
- 実装に関する考慮事項\r
- モニタリングと評価\r
- 研究の優先事項\r
\r
**提示**\r
- ガイドライン作成グループ会議および適用範囲決定への情報提供\r
- 決定フレームワークのデータベース\r
- 対話型意思決定支援ツール（iDeAs）、アプリ\r
\r
GRADEワーキンググループは、過去20年にわたって、これらの決定を透明にし、関連するプロセスにおけるバイアスを減少させるための構造化されたフレームワークを開発してきました。これらのフレームワークをエビデンスから決定へのフレームワーク（Evidence to Decision Frameworks）と呼びます。フレームワークは、質問に関する必要な詳細、特定の基準に従って評価され医療技術評価やシステマティックレビューで要約されたエビデンスを整理し、実装方法や実装中に注意すべき事項を含む結論の種類、および実施されるべき研究を記述します。最後に、対話型意思決定支援ツールなどのユーザーツールの開発とこれらのプロセスの実施を支援します。\r
\r
エビデンスから決定へのフレームワークは、実際の推奨にどのように到達したかに関連しています。質問、すなわちトピックから始まりますが、これはこれまでにかなり詳しく扱ってきました。\r
\r
また、推奨の策定に参加できるかどうかを左右する可能性のある利益相反についても以前に述べました。次に、エビデンスから決定へのフレームワークは、前述のように特定の基準に基づいて提供されたエビデンスの評価に入り、その研究エビデンスについての判定を導きます。すでに述べたように、関連する可能性のある追加の考慮事項も結論の一部となります。\r
\r
結論には、ガイドラインパネルの推奨が含まれ、前のスライドで示したように、推奨を行う理由の正当化を提供すべきです。ガイドラインパネルとして、推奨の実装方法と推奨のモニタリングおよび評価方法についても考えることが多くの場合最適な立場にあります。パネル会議は、将来の研究の優先事項を策定する良い機会でもあります。なぜなら、ガイドラインパネルは必然的にエビデンスのギャップを検出するからです。\r
\r
そして最後に、これらのエビデンスから決定へのフレームワークを通じて、パネルが推奨を策定し、それを前のスライドで示されたようなデータベースに保存し、意思決定支援ツールなどの実装ツールを提供する機会があります。\r
\r
>>>補足【GRADEproGDTについて】\r
GRADEproGDT（Guideline Development Tool）は、GRADEワーキンググループが開発したオンラインソフトウェアです。エビデンスプロファイルの作成、エビデンスから決定へのフレームワークの作成、推奨の策定支援など、ガイドライン開発の各段階をサポートします。ウェブブラウザ上で使用でき、複数のパネルメンバーが共同で作業することも可能です。\r
<<<\r
\r
## エビデンスから決定へのフレームワークの活用\r
\r
【図】figure_23.jpg（元のファイル名: image28.jpg）\r
\r
エビデンスから決定へのフレームワークは、推奨に至るための構造化されたアプローチを提供します。\r
\r
ガイドライン開発の初期の時代には、ガイドラインパネルは、すべての重要な問題が対処されていることを確認するために従うことのできる構造が欠如していたため、結論に至らないことがしばしばありました。\r
\r
このエビデンスから決定へのフレームワークの例は、欧州委員会のイニシアチブである欧州乳がんガイドライン（European Breast Guidelines）からのものです。その仕組みは、研究エビデンスがエビデンスレビューチームによって編纂・統合され、その後パネルと議論されるというものです。\r
\r
ガイドラインパネルがエビデンスを検討する際、ガイドラインパネルメンバーが持つ独自の洞察は、特定の基準に関する判定が行われる前に、追加の考慮事項の欄に追加できます。したがって、ガイドラインと推奨は常に判定に基づいています。例えば、判定は介入の健康上の利益がどの程度大きいか、または介入のその他の望ましい帰結についてのものである可能性があります。この場合の判定は、一定の年齢の女性における乳がんスクリーニングからの健康上の利益が小さいということであったかもしれません。これらの判定は、通常、利益相反のないパネルメンバーによって行われます。ガイドラインパネルは、単純な合意形成プロセスまたはより正式で構造化された合意形成プロセスに基づいて判定を行う場合があります。ガイドラインの責任組織が、投票を含む可能性のある合意に至るために使用される具体的なプロセスを決定します。\r
\r
## 入院患者における血栓塞栓症予防の例 — パート1\r
\r
【図】figure_24.jpg（元のファイル名: image29.jpg）\r
\r
### 入院患者における血栓塞栓症予防の例 — パート1\r
\r
各ボックスを選択して情報を表示\r
\r
- **問題** — 問題は優先事項か？\r
- **望ましい効果** — 望ましい予想される効果はどの程度大きいか？\r
- **望ましくない効果** — 望ましくない予想される効果はどの程度大きいか？\r
- **エビデンスの確実性** — 効果のエビデンスの全体的な確実性はどうか？\r
\r
各ボックスを選択して情報を表示\r
\r
- 問題 — 問題は優先事項か？\r
- 望ましい効果 — 望ましい予想される効果はどの程度大きいか？\r
- 望ましくない効果 — 望ましくない予想される効果はどの程度大きいか？\r
- エビデンスの確実性 — 効果のエビデンスの全体的な確実性はどうか？\r
\r
入院患者における血栓塞栓症予防の例に戻ると、ガイドラインパネルはこの問題を優先事項と判定しました。また、エビデンスを検討した後、介入（低分子量ヘパリンの投与）の望ましい健康効果は小さいと判定しました。\r
\r
望ましくない健康効果を評価した際にも、同様に小さいと判定しました。\r
\r
パネルはその後、エビデンスの確実性を検討しました。すべてのアウトカムにわたって、重大なアウトカムのいずれかの中で最も低い確実性に基づいて、全体的な判定は低い確実性でした。\r
\r
>>>補足【低分子量ヘパリン（LMWH）について】\r
低分子量ヘパリン（Low Molecular Weight Heparin: LMWH）は、静脈血栓塞栓症（VTE）の予防と治療に広く使用される抗凝固薬です。入院中の急性疾患患者は血栓塞栓症のリスクが高まるため、予防的な抗凝固療法の適応が検討されます。LMWHの投与により血栓形成が予防される一方で、出血のリスクが増加するという害もあり、利益と害のバランスを慎重に評価する必要があります。\r
<<<\r
\r
>>>補足【全体的なエビデンスの確実性の決定方法】\r
GRADEアプローチでは、推奨を行う際の「全体的なエビデンスの確実性」は、重大な（critical）アウトカムの中で最も低い確実性によって決定されます。例えば、あるアウトカムのエビデンスの確実性が「高」で、別の重大なアウトカムの確実性が「低」であれば、全体的な確実性は「低」と判定されます。これは、推奨を行う上で最も重要なアウトカムに関する不確実性を反映するためです。\r
<<<\r
\r
## 入院患者における血栓塞栓症予防の例 — パート2\r
\r
【図】figure_25.jpg（元のファイル名: image30.jpg）\r
\r
### 入院患者における血栓塞栓症予防の例 — パート2\r
\r
次に、パネルは患者がアウトカムに置く価値観に関するエビデンスを検討し、重要なばらつきや不確実性はないと判定しました。すなわち、ほとんどの患者がこれらのアウトカムを重大と判断するであろうと確信していました。\r
\r
## 入院患者における血栓塞栓症予防の例 — パート2\r
\r
【図】figure_26.jpg（元のファイル名: image31.jpg）\r
\r
### 入院患者における血栓塞栓症予防の例 — パート2\r
\r
望ましくない健康効果　　　望ましい健康効果\r
\r
- 問題の重要性\r
- 望ましい効果と望ましくない効果\r
- 価値観\r
- エビデンスの確実性\r
\r
パネルは望ましい健康効果が望ましくない健康効果よりも大きいと判定した\r
\r
パネルは通常、明確なバランスを示す判定を行う\r
\r
大きな望ましい健康効果と小さな望ましくない健康効果は、バランスを決定するためのより容易な道筋を提供する\r
\r
パネルはその後、問題の重要性、望ましい効果と望ましくない効果、価値観、およびエビデンスの確実性を考慮して、望ましい健康効果と望ましくない健康効果のバランスを判定しました。この場合、これらの基準を慎重にバランスした後、パネルは望ましい健康効果がおそらく望ましくない健康効果よりも大きいと判定しました。この状況は特定の教育的ポイントを提示します。一般的ではありませんが、望ましい健康効果と望ましくない健康効果が類似している場合でも、パネルはバランスが一方の選択肢を支持するかどうかを判断する努力をすべきです。この場合、望ましい効果と望ましくない効果が小さいという判定にもかかわらず、パネルはバランスとしてやはり望ましい効果の方が望ましくない効果よりも多いと感じました。それを透明にすべきです。他のシナリオでは、パネルは通常、より明確なバランスを示す判定を行います。例えば、大きな望ましい健康効果と小さな望ましくない健康効果であれば、バランスを決定するためのより容易な道筋を提供します。\r
\r
## 入院患者における血栓塞栓症予防の例 — パート3\r
\r
【図】figure_27.jpg（元のファイル名: image32.jpg）\r
\r
ここのスライドには示されていませんが、資源については、パネルは必要な資源はわずかであると感じました。しかし、含まれた研究はなく、これが含まれた研究に基づかない判定であることが明確にされました。\r
\r
パネルは費用対効果に関する判定を、低分子量ヘパリンの使用が費用対効果的であることを示唆する3つの研究に基づいて行いました。\r
\r
ここには示されていませんが、公平性に関する研究エビデンスは特定されず、これも透明にされました。しかし、議論とこれらの考慮事項の追加の後、パネルは公平性への影響はおそらくないと判定しました。研究エビデンスが使用されなかったことを述べることは、透明性を高めます。\r
\r
受容性と実現可能性に関するエビデンスの詳細な記述が提供され、そのエビデンスを検討した後、パネルはここに示されているように、介入は受容可能かつ実現可能であると判定しました。\r
\r
## 判定の要約\r
\r
【図】figure_28.jpg（元のファイル名: image33.jpg）\r
\r
### 判定の要約\r
\r
プロセスの最後に、個々の基準に関するこれらの判定は、推奨が介入に賛成か、または介入に反対（すなわち比較対照に賛成）の方向で作成されるべきかについてのガイダンスを提供します。ここに判定の要約が示されており、ほとんどの基準が全体として、望ましい帰結がおそらく望ましくない帰結を上回ることを示唆していることがわかります。\r
\r
## 帰結のバランス\r
\r
【図】figure_29.jpg（元のファイル名: image34.jpg）\r
\r
### 帰結のバランス\r
\r
望ましい帰結：利益、受容性\r
\r
望ましくない帰結：害、資源、不公平\r
\r
推奨は、健康上の利益と害を超えた望ましい帰結と望ましくない帰結のバランスによって決定されることを強調することが重要であり、したがって健康効果は、より一般的な用語である帰結とは用語上も区別されます。\r
\r
## 選択肢\r
\r
【図】figure_30.jpg（元のファイル名: image35.jpg）\r
\r
### 選択肢\r
\r
- 介入に賛成する強い推奨\r
- 介入に賛成する条件付き推奨\r
- 介入に反対する条件付き推奨\r
- 介入に反対する強い推奨\r
\r
GRADEアプローチに従えば — 本コースの一例として、推奨を定式化するための最も頻繁に使用されるアプローチですが — 推奨を行うための4つの選択肢があります。最初の選択肢は、介入に賛成する強い推奨を行うことです。これは、帰結に関してすべての要素が揃っている場合です。すなわち、望ましい帰結が望ましくない帰結を明らかに上回り、健康効果のエビデンスの確実性が高いまたは中等度であり、その他の基準が正しい方向を指し示している場合です。\r
\r
介入に賛成する条件付き推奨は、望ましい帰結が望ましくない帰結を明らかに上回らない場合、エビデンスの確実性が十分でない場合（例えば低いまたは非常に低い場合）、または大きなコストがある場合や価値観と選好に関して大きなばらつきがある場合に行われます。\r
\r
介入に反対する推奨を行う場合にも、強い推奨と条件付き推奨の同じ2つの選択肢が存在します。介入に反対する強い推奨は、望ましくない帰結が望ましい帰結を明らかに上回る場合に行われ、介入に反対する条件付き推奨は、これがそれほど明確でない場合に行われます。\r
\r
他の組織は異なる用語や追加の段階分けを使用する場合がありますが、原則はここでGRADEアプローチについて示されたものと通常同じです。\r
\r
## パート1の完了\r
\r
パート1を完了しました！\r
\r
パート2では推奨の種類について説明します。\r
\r
パート1を完了しました！\r
\r
パート2では推奨の種類について説明します。\r
\r
**パート1完了**\r
\r
---\r
\r
# パート2：推奨の種類\r
\r
【チェックリスト対応】ステップ13：推奨の作成とその強さの決定（Developing Recommendations and Determining their Strength）\r
【チェックリスト対応】ステップ14：推奨の文言および実装・実現可能性・公平性の考慮事項（Wording of Recommendations and of Considerations of Implementation, Feasibility and Equity）\r
\r
## 投票とコンセンサス\r
\r
【図】figure_31.jpg（元のファイル名: image36.jpg）\r
\r
### 投票とコンセンサス\r
\r
- 結論を導き推奨を作成するためには、パネルがコンセンサスに達する必要がある\r
- コンセンサスはエビデンスの確実性にかかわらず必要である\r
- 基準に関する判定と結論（すなわち推奨）に対して行われ得る\r
- エビデンスから決定へ（EtD）の基準に関する判定について\r
  - 基準に関する判定を求め、一人のメンバーからの提案（明確な場合を除く — 例：問題はどの程度深刻か）\r
  - 反対意見を求める\r
  - コンセンサスが得られない場合は投票できる — EtDの基準には単純多数決\r
\r
- 結論を導き推奨を作成するためには、パネルがコンセンサスに達する必要がある\r
- コンセンサスはエビデンスの確実性にかかわらず必要である\r
- 基準に関する判定と結論（すなわち推奨）に対して行われ得る\r
\r
エビデンスから決定へ（EtD）の基準に関する判定について\r
\r
- 基準に関する判定を求め、一人のメンバーからの提案（明確な場合を除く — 例：問題はどの程度深刻か）\r
- 反対意見を求める\r
- コンセンサスが得られない場合は投票できる — EtDの基準には単純多数決\r
\r
結論を導き推奨を作成するためには、パネルがコンセンサスに達する必要があります。コンセンサスは、エビデンスの確実性が高いか、低いか、非常に低いかにかかわらず、また推奨が明確であるか多くの議論を要するかにかかわらず必要です。しかし、最終的な推奨が発行される前に、すでに議論したように、多くの層の判定が必要です。これにはエビデンスから決定への基準が含まれます。パネルのコンセンサスが議論によって達成できない場合、正式な投票プロセスを使用でき、匿名投票の可能性もあります。コンセンサスに達するための規則と投票の規則は、ガイドライン開発プロセスが開始される前に、責任組織によって指定される必要があります。\r
\r
>>>補足【コンセンサス形成の方法について】\r
ガイドライン開発におけるコンセンサス形成には、いくつかの方法があります。非公式な方法としては、議論による合意形成があります。公式な方法としては、デルファイ法（匿名でのラウンド形式の意見集約）、名目群技法（Nominal Group Technique：構造化された議論と個別投票の組み合わせ）、単純投票（過半数決）などがあります。どの方法を使用するかは事前に決めておくべきであり、その選択は透明に報告されるべきです。\r
<<<\r
\r
## 投票とコンセンサス — EtDの基準\r
\r
【図】figure_32.jpg（元のファイル名: image37.jpg）\r
\r
### 投票とコンセンサス — EtDの基準\r
\r
- 個々のEtD基準について：\r
  - メンバーの一人からの提案を求めるか、提案を行う\r
  - 反対意見を求める\r
  - 反対意見がある場合 — 判定を行うために単純多数決（50%超）の投票を検討できる\r
\r
個々のEtD基準について：\r
\r
- メンバーの一人からの提案を求めるか、提案を行う\r
- 反対意見を求める\r
- 反対意見がある場合 — 判定を行うために単純多数決（50%超）の投票を検討できる\r
\r
判定の重要性に応じて、非公式または投票による合意形成に異なる規則を使用できます。GRADEアプローチでは、一般的な手法として、パネルメンバーに個々のエビデンスから決定への基準に対する判定の提案を求め、パネルの議長が他のパネルメンバーに反対意見がないか確認します。議論の後に提案に対する反対意見がある場合、個々の基準に対する判定を行うために、単純多数決（すなわち50%超）の投票を検討できます。\r
\r
## 投票とコンセンサス — 推奨\r
\r
【図】figure_33.jpg（元のファイル名: image38.jpg）\r
\r
### 投票とコンセンサス — 推奨\r
\r
- 結論を提案し合意または反対意見を求める同じプロセスを、推奨の方向性と強さを決定するために使用できる\r
- 方向性が明確な場合、共同議長や議長が最初に推奨が介入に賛成か反対かを提案する（強さについてはまだ決定が必要）\r
- 強い推奨の発行を検討する場合、パネルの大多数が同意する必要がある\r
- プロセスは組織によって異なる場合がある：\r
  - 投票を使用する組織もあれば、使用しない組織もある\r
  - 異なる多数決の原則を使用する組織もある\r
  - 正式なコンセンサスプロセスを使用する組織もあれば、使用しない組織もある\r
- 使用されたアプローチの透明性が重要\r
\r
結論を提案し合意または反対意見を求める同じプロセスを、推奨の方向性と強さを決定するために使用できます。通常、方向性が最初に決定されます。方向性が明確な場合、議長または共同議長は推奨が介入に賛成か反対かを最初に提案できますが、強さについてはまだ決定が必要です。重要な臨床上の意味合いを持つ強い推奨の発行を検討する場合（前述のとおり）、通常はパネルの大多数（80%や90%など）が強い推奨に同意する必要があります。ここでも、このプロセスは組織によって異なる場合があります。投票を使用する組織もあれば、使用しない組織もあります。異なる多数決の原則を使用する組織もあります。非常に正式なコンセンサスプロセスを使用する組織もあれば、使用しない組織もあります。使用されたアプローチについて透明であることが重要です。\r
\r
## 推奨の報告\r
\r
【図】figure_34.jpg（元のファイル名: image39.jpg）\r
\r
### 推奨の報告\r
\r
合意形成のプロセスはガイドラインパネルによって異なりますが、コンセンサスがほぼ常に必要であると言うことが重要です。\r
\r
この例では、パネルは急性疾患の内科入院患者に対して抗凝固薬の使用を提案する条件付き推奨を行いました。\r
\r
推奨は、読みやすさと文脈の理解を高めるために、類似の推奨とまとめて記載されました。\r
\r
エビデンスに脳卒中患者も含まれていたため — これは潜在的な望ましくない健康効果について懸念があるサブグループですが — 推奨がそのサブグループにも適用されることが具体的に備考として記載されました。\r
\r
## 低いまたは非常に低い確実性に基づく強い推奨\r
\r
【図】figure_35.jpg（元のファイル名: image40.jpg）\r
\r
### 低いまたは非常に低い確実性に基づく強い推奨\r
\r
- 低い確実性のエビデンスが生命を脅かす状況での利益を示唆する場合\r
  害に関するエビデンスの確実性は低いか高い可能性がある\r
\r
- 低い確実性のエビデンスが利益を示唆する場合\r
  高い確実性のエビデンスが害または非常に高いコストを示唆する場合\r
\r
- 低い確実性のエビデンスが2つの代替案の同等性を示唆する場合\r
  高い確実性のエビデンスが競合する代替案の一方にとってより少ない害を示唆する場合\r
\r
- 高い確実性のエビデンスが2つの代替案の同等性を示唆する場合\r
  低い確実性のエビデンスが代替案の一方に害を示唆する場合\r
\r
- 高い確実性のエビデンスが控えめな利益を示唆する場合\r
  低いまたは非常に低い確実性のエビデンスが壊滅的な害の可能性を示唆する場合\r
\r
参考文献：Neumann I, Santesso N, Akl EA, Rind DM, Vandvik PO, Alonso-Coello P, et al. A guide for health professionals to interpret and use recommendations in guidelines developed with the GRADE approach. J Clin Epidemiol.\r
\r
通常、強い推奨は重大なアウトカムについて少なくとも中等度の確実性のエビデンスに基づきます。\r
\r
しかし、低いまたは非常に低い確実性のエビデンスしか利用できないが、強い推奨が正当化される状況がいくつかあります：\r
\r
- 低い確実性のエビデンスが生命を脅かす状況での利益を示唆する場合。この場合、害に関するエビデンスの確実性は低いか高い可能性があります。\r
- 低い確実性のエビデンスが利益を示唆し、高い確実性のエビデンスが害または非常に高いコストを示唆する場合。\r
- 低い確実性のエビデンスが2つの代替案の同等性を示唆するが、高い確実性のエビデンスが競合する代替案の一方にとってより少ない害を示唆する場合。\r
- 高い確実性のエビデンスが2つの代替案の同等性を示唆し、低い確実性のエビデンスが代替案の一方に害を示唆する場合。\r
- 高い確実性のエビデンスが控えめな利益を示唆し、低いまたは非常に低い確実性のエビデンスが壊滅的な害の可能性を示唆する場合。\r
\r
>>>補足【低い確実性のエビデンスに基づく強い推奨について】\r
GRADEアプローチでは、通常、強い推奨は中等度以上の確実性のエビデンスに基づきます。しかし、上記のような特殊な状況では、低い確実性のエビデンスでも強い推奨が正当化されます。例えば、致死的な疾患に対する唯一の治療法があり、エビデンスの確実性は低いが害が軽微な場合などです。このような場合は、推奨がなぜ強いのかの根拠をより丁寧に説明し、将来のエビデンスによって推奨が変わる可能性があることも示す必要があります。これは「5つのパラダイム的状況（5 paradigmatic situations）」と呼ばれることもあります。\r
<<<\r
\r
## 「推奨なし」は存在しない\r
\r
【図】figure_36.jpg（元のファイル名: image41.jpg）\r
\r
### 「推奨なし」は存在しない\r
\r
- 目的は臨床家にガイダンスを与えることである\r
- パネルは推奨を行うのに最も適した立場にある\r
- 単独の医療者はすべてのエビデンスをレビューできない\r
\r
- 目的は臨床家にガイダンスを与えることである\r
- パネルは推奨を行うのに最も適した立場にある\r
- 単独の医療者はすべてのエビデンスをレビューできない\r
\r
参考文献：Neumann I, Alonso-Coello P, Vandvik PO, Agoritsas T, Mas G, Akl EA, et al. Do clinicians want recommendations? A multicenter study comparing evidence summaries with and without GRADE recommendations. J Clin Epidemiol. 2018;99:33-40.\r
\r
ほとんどのガイドライン開発者は、エビデンスが決定的であるかどうかにかかわらず、ガイドラインパネルの目的は推奨を行うことであると考えています。なぜなら、ガイドラインパネルは、ガイダンスを求めている単独の医療者よりも、推奨を行い行動方針を提案するのに適した立場にあるからです。たとえエビデンスがまばらであっても、単独の医療者はすべてのエビデンスをレビューすることはできません。\r
\r
>>>補足【「推奨なし」を避ける理由について】\r
エビデンスが乏しいからといって「推奨なし」とすることは、臨床家を困惑させ、結局は各臨床家が独自にエビデンスを解釈して判断することを余儀なくされます。ガイドラインパネルは多分野の専門家で構成され、系統的にエビデンスを評価しているため、不確実な状況でも最善の行動方針を判断するのにより適しています。Neumannらの研究でも、臨床家はエビデンス要約のみよりも、推奨が付いたエビデンス要約を好むことが示されています。\r
<<<\r
\r
## 推奨の文言\r
\r
【図】figure_37.jpg（元のファイル名: image42.jpg）\r
\r
### 推奨の文言\r
\r
**構造化された文言と具体性**\r
\r
- 「低分子量ヘパリンはプラセボと比較して血栓塞栓症を減少させる」→ これは推奨ではなく事実の記述です。実行可能な記述が使用されるべきです。\r
\r
- 「我々は医療者が低分子量ヘパリンの使用を検討することを提案する」→ 「検討する」は「何をすべきか」を示唆していません。実際、その言及により介入は検討されたことになります — 方向性と強さが示されるべきです。\r
\r
- 「我々はXの使用をYよりも好む」→ この記述には行動が欠けています。\r
\r
- 「入院患者における低分子量ヘパリンの使用は標準的な診療である」→ 推奨は標準的な診療を記述するために行われるのではなく、介入がその状況に最適であるかどうかを示すために行われます。また、対象集団の種類の正確な記述もありません。\r
\r
構造化された文言と具体性\r
\r
- 「低分子量ヘパリンはプラセボと比較して血栓塞栓症を減少させる」→ これは推奨ではなく事実の記述です。実行可能な記述が使用されるべきです。\r
\r
- 「我々は医療者が低分子量ヘパリンの使用を検討することを提案する」→ 「検討する」は「何をすべきか」を示唆していません。実際、その言及により介入は検討されたことになります — 方向性と強さが示されるべきです。\r
\r
- 「我々はXの使用をYよりも好む」→ この記述には行動が欠けています。\r
\r
- 「入院患者における低分子量ヘパリンの使用は標準的な診療である」→ 推奨は標準的な診療を記述するために行われるのではなく、介入がその状況に最適であるかどうかを示すために行われます。また、対象集団の種類の正確な記述もありません。\r
\r
ガイドラインパネルの主な目標は、対象読者にとって具体的で、実行可能で、理解しやすい推奨を作成することです。これを達成するために、構造化された文言を使用すべきであり、スタイルガイドがこれに役立ちます。これにより推奨の実装が最適化されます。構造化された文言の適切な使用の重要性を、実行不可能な記述の4つの例で説明します：\r
\r
- 「低分子量ヘパリンはプラセボと比較して血栓塞栓症を減少させる」— これは推奨ではなく事実の記述です。ここに含まれていない実行可能な記述が使用されるべきです。\r
- 「我々は医療者が低分子量ヘパリンの使用を検討することを提案する。」「検討する」は何をすべきかを示唆していません。実際、その言及により介入は検討されたことになります。ここでは方向性と強さが示されるべきです。\r
- 「我々はXの使用をYよりも好む」— この記述には行動が欠けています。\r
- 「入院患者における低分子量ヘパリンの使用は標準的な診療である。」推奨は標準的な診療を記述するために行われるのではなく、介入がその状況に最適であるかどうかを示すために行われます。また、例えば急性疾患患者か重症患者かなど、対象集団の種類の正確な記述もありません。\r
\r
したがって、これらの記述はすべて不適切です。なぜなら、明確に実行可能ではないからです。\r
\r
>>>補足【実行可能な推奨文とは】\r
実行可能な（actionable）推奨文とは、対象となる臨床家が読んで、具体的に何をすべきかが明確に分かる文です。良い推奨文の例としては、「急性疾患で入院した内科患者に対して、低分子量ヘパリンの予防投与を行うことを提案する（条件付き推奨、低い確実性のエビデンス）」のように、誰に対して（対象集団）、何を（介入）、どの程度の確信で（推奨の強さ）行うべきかが明記されている文です。\r
<<<\r
\r
## 推奨の文言 — 重要な考慮事項\r
\r
【図】figure_38.jpg（元のファイル名: image43.jpg）\r
\r
### 推奨の文言 — 重要な考慮事項\r
\r
推奨には以下を記述すべきである：\r
\r
- 誰が推奨を行っているか\r
- 対象集団\r
- 介入\r
- 推奨の強さ\r
- エビデンスの確実性\r
\r
推奨には備考を含めることができる\r
\r
- 備考はPICOのサブドメインの解釈および/または推奨の条件を支援する\r
\r
参考文献：Lotfi T, Hajizadeh A, Moja L, Akl EA, Piggott T, Kredo T, et al. A taxonomy and framework for identifying and developing actionable statements in guidelines suggests avoiding informal recommendations. J Clin Epidemiol. 2022;141:161-71.\r
\r
では、実行可能な記述を作成するために何をすべきでしょうか。推奨には以下を記述すべきです：\r
\r
- 誰が推奨を行っているか\r
- 必要な具体性を持った対象集団\r
- 必要な詳細を含む介入と比較対照（自明でない場合）\r
- 推奨の強さ\r
- その根拠となるエビデンスの確実性\r
\r
推奨には以下のように定義される備考も含めることができます：\r
\r
備考は、PICOのサブドメイン（例えば対象集団の特性）の解釈および/または1つ以上の特定の推奨を枠付ける条件を支援するものです。\r
\r
## いつ適正診療声明を作成できるか？\r
\r
【図】figure_39.jpg（元のファイル名: image44.jpg）\r
\r
### いつ適正診療声明を作成できるか？\r
\r
パネルが伝えるべきメッセージ：最初から明確\r
\r
- 適正診療声明\r
- 明確かつ明示的な基準に基づく\r
\r
- メッセージは明確かつ実行可能か？\r
- メッセージは実際の医療実践に必要である\r
- 適正診療声明を実施すると、大きな正味のプラスの帰結がもたらされる\r
- エビデンスの収集と要約は、ガイドラインパネルの時間とエネルギーの不適切な使用である\r
- 間接エビデンスをつなぐ十分に文書化された根拠がある\r
\r
参考文献：Dewidar O, Lotfi T, Langendam MW, Parmelli E, Saz Parkinson Z, Solo K, et al. Good or best practice statements: proposal for the operationalisation and implementation of GRADE guidance. BMJ Evid Based Med. 2022.\r
\r
一部のPICO質問に対して、ガイドラインパネルは適正診療声明（Good Practice Statement）を提供します。これは、パネルが伝えるべきメッセージが最初から明確であるため、エビデンスの完全な構造化された評価がパネルの時間とエネルギーの不適切な使用になる場合です。\r
\r
そのような場合、適正診療声明が提供されることがあり、これは正式な推奨とは明確に区別され、明確かつ明示的な基準に基づくべきです。ガイドラインの組織は、適正診療声明を提供すべきかどうかを決定すべきです。そして、それはまれにしか使用すべきではありません。適正診療声明を発行するための5つの条件に従うべきです：\r
\r
- メッセージは明確かつ実行可能か？\r
- メッセージは実際の医療実践に関して必要である。\r
- すべての関連するアウトカムと潜在的な下流への影響を考慮した上で、適正診療声明を実施すると大きな正味のプラスの帰結がもたらされる。\r
- エビデンスの収集と要約は、ガイドラインパネルの限られた時間とエネルギーの不適切な使用である（言い換えると、機会費用が大きい）。\r
- 適正診療声明を支持する間接エビデンスをつなぐ十分に文書化された明確かつ明示的な根拠がある。\r
\r
>>>補足【適正診療声明（Good Practice Statement）について】\r
適正診療声明は、GRADEアプローチにおいて比較的新しい概念です。通常の推奨とは異なり、系統的なエビデンスレビューなしに発行されます。例えば、「すべての患者にアレルギー歴を確認すべきである」のような、エビデンスの確実性を評価するまでもなく明白と考えられる臨床行動に対して使用されます。ただし、適正診療声明の乱用を避けるため、上記の5つの条件が厳格に適用されるべきです。\r
<<<\r
\r
## 適正診療声明の2つの例\r
\r
【図】figure_40.jpg（元のファイル名: image45.jpg）\r
\r
### 適正診療声明の2つの例\r
\r
ここに、実行可能かつ必要な適正診療声明の報告方法の2つの例があります。\r
\r
- パネルは、心不全を呈する患者において、日常生活活動を遂行する患者の能力の初期評価は適正な診療であると考える。\r
- 心不全を呈する患者において、臨床家は日常的な/希望する日常生活活動を遂行する患者の能力の初期評価を行うべきである（格付けなし適正診療声明）。\r
\r
## パート2の完了\r
\r
パート2を完了しました！\r
\r
パート3では報告と査読について説明します。\r
\r
パート2を完了しました！\r
\r
パート3では報告と査読について説明します。\r
\r
**パート2完了**\r
\r
---\r
\r
# パート3：報告と査読\r
\r
【チェックリスト対応】ステップ15：報告と査読（Reporting and Peer Review）\r
【チェックリスト対応】ステップ16：普及と実装（Dissemination and Implementation）\r
【チェックリスト対応】ステップ17：評価と利用（Evaluation and Use）\r
【チェックリスト対応】ステップ18：更新（Updating）\r
\r
## GIN-McMasterガイドライン開発チェックリスト\r
\r
【図】figure_41.jpg（元のファイル名: image46.jpg）\r
\r
本コースはGIN-McMasterチェックリストとガイドライン開発のツールボックスに沿って構成されていることを覚えておいてください。推奨が定式化された後、実装される前に追加のステップが必要です。すなわち、しばしばピア（同僚）、関連組織、およびその他のステークホルダーによるレビューが行われます。このプロセスの後半部分について、以下のスライドで説明します。\r
\r
>>>補足【GIN-McMasterチェックリストについて】\r
GIN-McMasterガイドライン開発チェックリストは、ガイドライン開発の全プロセスをカバーする包括的なチェックリストです。18のステップ（組織・予算・計画・研修、優先順位設定、グループメンバーシップ、グループプロセスの確立、対象読者・トピックの選定、消費者・ステークホルダーの参加、利益相反、PICO質問の作成、アウトカムの重要性・価値観・選好の検討、エビデンスの検索、エビデンスの要約、エビデンスの質の判定、推奨の作成、推奨の文言、報告と査読、普及と実装、評価と利用、更新）で構成されています。本モジュール（モジュール4）は主にステップ13〜18に対応しています。\r
<<<\r
\r
## 報告と査読\r
\r
【図】figure_42.jpg（元のファイル名: image47.jpg）\r
\r
### 報告と査読\r
\r
通常、ガイドライン作成グループの議長または執筆委員会がガイドラインの執筆を担当します。責任者による事前に規定された基準の評価により、他のグループメンバーが共著者となるかどうかが決定され、通常、すべてのパネルメンバーがガイドラインの共著者となります。さらに、エビデンスレビューを実施した者やその他の実質的な貢献者が共著者となる場合もあります。\r
\r
パネルメンバーはガイドライン成果物の執筆に参加する場合がありますが、少なくとも最終草稿をレビューし、フィードバックを提供し、最終文書を承認することが求められます。ガイドライン成果物の執筆、解釈、普及を容易にするために、特定の構造、見出し、内容を含む標準化された形式を使用すべきです。\r
\r
報告は、RIGHTやAGREE IIツールなどで提供されるような特定の基準を満たす必要があります。ガイドライン開発グループを超えたピアレビューは、ガイドライン開発組織内部（内部レビュー）から、または主要なステークホルダーの外部グループ（外部レビュー）から得ることができます。\r
\r
ピアレビューは、より広い読者層および重要な視点からのインプットを確保するものであり、ガイドライン作成グループが含めていなかった可能性のある視点を取り入れ、推奨の正確性、実用性、明確性、構成、有用性を確保します。ピアレビューのプロセスは文書化すべきです。パブリックコンサルテーション、コメント、およびガイドライン作成グループの回答は公表される場合があります。\r
\r
>>>補足【RIGHTとAGREE IIについて】\r
RIGHT（Reporting Items for Practice Guidelines in Healthcare）は、ガイドラインの報告の質を向上させるために開発された報告基準です。一方、AGREE II（Appraisal of Guidelines for Research and Evaluation II）は、ガイドラインの質を評価するためのツールであり、6つの領域（対象と目的、ステークホルダーの参加、作成の厳密さ、提示の明確さ、適用可能性、編集上の独立性）と23の項目で構成されています。日本でもMindsガイドラインの質評価にAGREE IIが使用されています。\r
<<<\r
\r
## 普及と実装\r
\r
【図】figure_43.jpg（元のファイル名: image48.jpg）\r
\r
### 実装の例\r
\r
- 病院または部門のプロトコルの修正\r
- 電子的な意思決定支援ツールへのガイダンスの組み込み\r
- 診療実績の監査とフィードバック\r
- 患者向け意思決定支援ツールの提供\r
\r
普及は認知度を高め、推奨とガイドライン成果物をアクセスしやすくすることを目的とする\r
\r
実装は実行可能な推奨が臨床で採用されることを確保することを目的とする\r
\r
**実装の例**\r
\r
- 病院または部門のプロトコルの修正\r
- 電子的な意思決定支援ツールへのガイダンスの組み込み\r
- 診療実績の監査とフィードバック\r
- 患者向け意思決定支援ツールの提供\r
\r
特定の文脈で受容性と実現可能性を最適化するためにガイドラインを適応させる\r
\r
**適応の例**\r
\r
- 限られた資源を考慮する\r
- 異なる患者の価値観と選好を想定する\r
- 異なる言語への翻訳\r
\r
パネルメンバーは普及と実装において能動的な役割を果たすことができる\r
\r
- 推奨が明確で実行可能であることを確保する\r
- 学術会議や教育的会合でのプレゼンテーション\r
- オピニオンリーダーまたは意思決定者としての影響力の活用\r
- 特定の実践ツールの開発の支援、または地域の実装における障壁と促進要因の特定\r
\r
ガイドライン成果物が最終版となったら、対象読者によって使用されることを確保するために、積極的な普及と実装の計画が必要です。普及は認知度を高め、推奨とガイドライン成果物を対象読者に適した形式でアクセスしやすくすることを目的とします。これらの異なる形式内で、言語の複雑さとテキストの長さは調整される必要があります。例えば、医療者、政策立案者、患者に対して普及する場合、これはかなり異なる可能性があります。\r
\r
実装は実行可能な推奨が臨床で採用されることを確保することを目的とします。そのような介入は、推奨される行動を遂行することをより容易で、より説得力のあるものにすべきです。例としては、病院または部門のプロトコルの修正、電子的な意思決定支援ツールへのガイダンスの組み込み、診療実績の監査とフィードバック、患者向け意思決定支援ツールの提供が含まれます。\r
\r
もう1つの実装戦略は、特定の文脈で受容性と実現可能性を最適化するためにガイドラインを適応させることです。例えば、限られた資源を考慮する、異なる患者の価値観と選好を想定する、または別の言語に翻訳するなどです。実際、そのような適応なしには実装が行われないことが多いです。\r
\r
そのような適応は、ガイドライン開発グループからの具体的な指示に従うことができます。パネルメンバーも普及と実装において能動的な役割を果たすことができます。具体的には：\r
\r
推奨が明確で実行可能であることを確保すること、学術会議や教育的会合でのプレゼンテーション、オピニオンリーダーまたは意思決定者としての影響力の活用、そして時として特定の実践ツールの開発の支援や地域の実装における障壁と促進要因の特定です。\r
\r
## 普及と実装 — リソース\r
\r
【図】figure_44.jpg（元のファイル名: image49.jpg）\r
\r
### 普及と実装のリソース\r
\r
普及と実装のツールを開発することを決定する前に、そのような介入の効果を検証する研究の増加する蓄積やさまざまなオンラインツールがあることを考慮すべきです。\r
\r
特定の目的に適したツールがまだない場合でも、他の医療領域から利用可能なツールを調整できる可能性があります。これらを見つける場所の例には以下が含まれます：\r
\r
**リソース**\r
\r
- GIN実装ワーキンググループ\r
- NICEガイダンスの実装（Implementing NICE Guidance）\r
- Cochrane効果的実践・ケア提供機構（EPOC）グループのツール\r
- 米国医療研究品質局（AHRQ）のツール\r
- カナダ知識翻訳（Knowledge Translation Canada）\r
\r
>>>補足【EPOC、AHRQ、NICEについて】\r
EPOC（Effective Practice and Organisation of Care）は、Cochraneレビューグループの一つで、医療提供の改善に関する介入の効果を評価するシステマティックレビューを行っています。AHRQ（Agency for Healthcare Research and Quality）は米国の医療研究・品質向上を担当する連邦機関です。NICE（National Institute for Health and Care Excellence）は英国の医療技術評価とガイドライン作成を行う独立組織です。これらはいずれもガイドラインの実装に関する豊富なリソースを提供しています。\r
<<<\r
\r
## 評価と利用\r
\r
【図】figure_45.jpg（元のファイル名: image50.jpg）\r
\r
### 評価と利用\r
\r
- パネルメンバーに開発プロセスについてフィードバックを求めることができる\r
- ガイドラインは対象読者のメンバーとともに試験的に運用できる\r
- パネルは実装のモニタリングと監査のための基準とツールを提供できる\r
- 実装後のガイドラインの有効性評価のためのツールと支援を提供する\r
- ガイドライン利用者からフィードバックを収集し、改善すべき領域を特定する\r
\r
- パネルメンバーに開発プロセスについてフィードバックを求めることができる\r
- ガイドラインは対象読者のメンバーとともに試験的に運用できる\r
- パネルは実装のモニタリングと監査のための基準とツールを提供できる\r
- 実装後のガイドラインの有効性評価のためのツールと支援を提供する\r
- ガイドライン利用者からフィードバックを収集し、改善すべき領域を特定する\r
\r
ガイドライン開発プロセスが終了したら、ガイドライン開発プロセス、実装、有効性を評価するために、いくつかのステップを踏むことができます：\r
\r
1. パネルメンバーに、推奨を策定する最終会議を含む開発プロセスについてフィードバックを求めることができます。\r
\r
- ガイドラインは、ガイドライン開発グループの一員であった主要なステークホルダーを含み得る対象読者のメンバーとともに試験的に運用できます。\r
- パネルは推奨の実装のモニタリングと監査のための基準とツールを提供できます。\r
- 実装後のガイドラインの有効性評価のためのツールと支援を提供できます。ガイドラインパネルメンバーもそのような評価に参加できます。\r
- そして、ガイドライン利用者からフィードバックを収集し、ガイドラインの後続バージョンの改善すべき領域を特定できます。\r
\r
## 更新\r
\r
【図】figure_46.jpg（元のファイル名: image51.jpg）\r
\r
### 更新\r
\r
更新のためのガイドライン作成グループメンバーは誰になるか：\r
\r
- 方針\r
- 手順\r
- タイムライン\r
\r
更新のためのガイドライン作成グループメンバーは誰になるか：\r
\r
- 方針\r
- 手順\r
- タイムライン\r
\r
文書化された計画は以下を明記すべきである：\r
\r
- システマティックレビューをどのくらいの頻度で更新するか？\r
- 新しいエビデンスの特定を誰が担当するか？\r
- 更新が必要であるかを判断する基準\r
- 更新のためのガイドライン作成グループメンバーは誰になるか？\r
- 更新はどのように資金調達されるか？\r
- 誰がそれを監督するか？\r
- リビングガイドラインにすべきか？\r
\r
ガイドラインを最新かつ適切に保つために、新しいエビデンスがそれを正当化する場合には更新が必要です。したがって、ガイドライン開発プロセスには、ガイドラインの更新が必要かどうかを定期的にモニタリングし検討するための方針、手順、およびタイムラインを含めるべきです。\r
\r
この文書化された計画は、システマティックレビューをどのくらいの頻度で更新する必要があるか、重要な新しいエビデンスの特定を誰が担当するか、更新が必要であるかを判断する基準、更新のためのガイドライン作成グループメンバーは誰になるか、更新はどのように資金調達され誰が監督するかを明記すべきです。更新の特別なアプローチは、いわゆるリビングガイドライン（living guideline）を作成することです。リビングガイドラインには、ガイドライン内の1つ以上の推奨を継続的に更新するプロセスが含まれます。これが適切であるかどうかは、ガイドラインの責任組織が、時にパネルメンバーからのインプットを得て決定します。\r
\r
>>>補足【リビングガイドラインについて】\r
リビングガイドライン（Living Guideline）とは、従来の定期的な更新ではなく、継続的にエビデンスをモニタリングし、新しい重要なエビデンスが利用可能になった時点で迅速に推奨を更新するアプローチです。COVID-19パンデミック時にWHOやオーストラリアのNational COVID-19 Clinical Evidence Taskforceなどが採用し、注目を集めました。エビデンスが急速に変化する領域や公衆衛生上の緊急事態において特に有用ですが、持続的な資源と組織的なコミットメントが必要です。\r
<<<\r
\r
## パート3の完了\r
\r
パート3を完了しました！\r
\r
これはレベル1・モジュール4の最後です。\r
\r
パート3を完了しました！\r
\r
これはレベル1・モジュール4の最後です。\r
\r
**パート3完了**\r
\r
---\r
\r
# 付録：GIN-McMasterガイドライン開発チェックリスト\r
\r
以下は、本モジュールの参考資料として添付されたGIN-McMasterガイドライン開発チェックリストの全文日本語訳です。\r
\r
>>>補足【本チェックリストについて】\r
GIN-McMasterガイドライン開発チェックリスト（Guideline Development Checklist: GDC）は、2013年12月に公表されたガイドライン開発のための包括的チェックリストです。ガイドライン開発の各ステップに対して、完了すべき項目と参考文献を整理しています。INGUIDEプログラムのカリキュラムはこのチェックリストの18ステップに沿って構成されており、モジュール4は主にステップ13〜18に対応しています。\r
<<<\r
\r
## ガイドライン開発チェックリスト\r
\r
### バージョン：2013年12月16日\r
\r
### ガイドライン開発チェックリスト（GDC）\r
\r
以下のトピック一覧のタイトルをクリックするか、ブックマークを表示して、チェックリスト内の特定のトピックに移動してください。チェックリスト内のトピックタイトルをクリックすると、このページのトピック一覧に戻ります。各項目にはチェックボックスが設けられており、完了した項目や該当しない項目を把握できるほか、ガイドライン開発プロセスを進めながら更新できるメモ欄もあります。\r
\r
GDC全体に登場するガイドライン開発のトピック、用語、略語の定義については、用語集をダウンロードしてください。\r
\r
**ガイドライン開発のトピック：**\r
\r
1. 組織、予算、計画および研修\r
2. 優先順位設定\r
3. ガイドライン作成グループのメンバーシップ\r
4. ガイドライン作成グループのプロセスの確立\r
5. 対象読者の特定とトピック選定\r
6. 消費者およびステークホルダーの参加\r
7. 利益相反への配慮\r
8. （PICO）質問の作成\r
9. アウトカムおよび介入の重要性、価値観、選好、効用の検討\r
10. 含めるエビデンスの決定とエビデンスの検索\r
11. エビデンスの要約と追加情報の検討\r
12. エビデンスの一群（body of evidence）の質、強さ、または確実性の判定\r
13. 推奨の作成とその強さの決定\r
14. 推奨の文言および実装、実現可能性、公平性の考慮事項\r
15. 報告と査読\r
16. 普及と実装\r
17. 評価と利用\r
18. 更新\r
\r
---\r
\r
### 1. 組織、予算、計画および研修\r
\r
1. ガイドライン開発グループの構成を確立し、関与する各種グループ間の役割、タスク、関係を決定する（例：ガイドラインのトピック選定とグループメンバーシップを指揮する監督委員会/組織、エビデンスを統合する専門家と方法論者からなるワーキンググループ、管理支援を提供する事務局、推奨を作成するガイドラインパネル、諮問のためのステークホルダーと消費者）。（トピック3, 4, 6も参照）\r
\r
2. ガイドライン開発グループに関する財務面および実現可能性の問題について、提案されたガイドライン開発プロジェクトの徹底的な評価を行う（例：プロジェクトを完了するための資源の利用可能性、ガイドラインパネルとスタッフからの期待されるコミットメントなど）。ガイドラインプロジェクトの進行について組織的承認を得る。\r
\r
3. ガイドラインの開発に対する予算を準備し、各ステップの推定コストを概説する（例：ワーキンググループとスタッフの報酬、特定のタスクの外部組織やグループへの外注、旅費、出版・普及費用など）。\r
\r
4. ガイドラインパネルメンバーに時間に対する報酬または経費精算が提供されるか、ボランティアとして活動するかを決定する。\r
\r
5. 利益相反への配慮に注意を払いつつ、ガイドライン開発のための資金を取得または確保する。（トピック7も参照）\r
\r
6. ガイドライン開発プロセスを円滑にするために必要な管理支援を概説し手配する（例：利益の申告を組織・取得し、グループミーティングを手配するワーキンググループの事務局など）。\r
\r
7. ガイドライン開発プロセスに関与する人々に必要な研修と支援を計画・準備する（例：ガイドラインパネルメンバーのための利益相反関連の教育または研修、ガイドライン作成グループに参加する患者のための教育セッションなど）。（トピック4, 6も参照）\r
\r
8. ガイドラインの完成のためのタイムラインと、ガイドライン開発プロセスのマイルストーン完了の目標日を設定する。\r
\r
9. 計画されたガイドラインに関連する法的考慮事項があるかどうかを決定する（例：希少疾用医薬品の償還政策など）。\r
\r
10. プロジェクトの進行に伴って完成できるガイドライン全体のプロトコルを準備する。これには、ガイドラインの全体的な目標と目的の概要、タイムライン、タスクの割り当て、決定の文書化が必要なステップ、およびすべてのステップに対する提案された方法論（すなわち、このチェックリストでカバーされるもの、例えばガイドライン作成グループの形成方法、ガイドラインでカバーされるトピックの選定、コンセンサス方法、諮問方法、エビデンスの検索と選定方法など）が含まれる。\r
\r
### 2. 優先順位設定\r
\r
1. ガイドラインのトピックの優先順位設定のプロセスを決定し、プロセスの指揮を誰が担当するかを決定する（例：後援組織の本部の監督委員会が優先順位を設定する、政府の保健省や専門学会が優先順位を紹介するなど）。\r
\r
2. ガイドラインのトピックの提案に際して、優先順位設定のための特定の基準を用いた体系的かつ透明なプロセスを適用する（例：疾患の高い有病率と負荷、回避可能な死亡率と罹患率、高いコスト、新興疾患または新興ケアオプション、臨床実践のばらつき、急速に変化するエビデンスなど）。\r
\r
3. 優先順位設定プロセスとガイドラインのトピック選定に適切なステークホルダーを参加させる（例：臨床家、専門学会、政策立案者、支払者、一般市民）。（トピック6も参照）\r
\r
4. ガイドライン推奨の実装の重要性と必要な資源に関するさまざまな視点をどのように考慮するかを検討し決定する（例：患者、支払者、臨床家、公衆衛生プログラム）。（トピック11も参照）\r
\r
5. 提案されたトピックをカバーする既存の最新ガイドラインを検索し、その信頼性を評価する（例：AGREE II）。既存のガイドラインを適応できるか、完全に新しいガイドラインを開発すべきかを判断する。（トピック10も参照）\r
\r
6. ガイドラインの開発またはその一部に対して協力的な取り組みを行うかどうかを判断するために、ガイドラインを開発する他の組織とのパートナーシップの必要性または機会を議論する。\r
\r
7. 実装の問題と変更への障壁に関して、提案されたガイドラインのトピックのスコーピングエクササイズを行う（例：開発された場合、ガイドラインが健康アウトカムを改善する可能性がある、医療推奨の実装が実現可能である、資源が利用可能であるなど）。\r
\r
8. 設定された優先順位と選定されたガイドラインのトピックに合意するために使用されるコンセンサス方法を選択するか提供する（例：投票、デルファイコンセンサス）。（トピック4も参照）\r
\r
9. 透明性を確保するために、優先順位設定プロセスと選定されたガイドラインのトピックを文書化する。\r
\r
### 3. ガイドライン作成グループのメンバーシップ\r
\r
1. 必要な役割を果たすために、対象読者のメンバー、患者および介護者、第一線の臨床家、コンテンツ専門家、方法論専門家、医療経済学の専門家を含む、ガイドライン開発グループの多分野にわたる代表を求める（例：ワーキンググループ、ガイドラインパネルのため）。（トピック6も参照）\r
\r
2. ガイドライン開発グループのメンバーの募集と登録の方法を決定する（例：ポストの広範な広告、面接による競争的任命など）。\r
\r
3. ガイドラインパネルに対してトピックに適した専門知識のバランスと適切な代表を達成する（例：対象読者を形成する専門医とプライマリケア医、パネルメンバーの性別と地理的分布）。対象読者とガイドライン内のトピックが洗練されるにつれて、追加メンバーが必要な場合は反復的なプロセスとなる可能性がある。（トピック5も参照）\r
\r
4. ガイドライン開発グループ、特にガイドラインパネルの最適なグループ規模を検討する（例：グループが小さすぎると十分な経験、コンテンツの専門知識、幅広い代表が不足する可能性がある。グループが大きすぎると凝集性と効果的なグループ相互作用が欠ける可能性がある）。\r
\r
5. ガイドライン作成グループメンバーの役割と担当するタスクを概説する（例：執筆チームの形成、議事録を取り決定事項を文書化するグループ記録係、方法論コンサルテーションの提供、システマティックレビューの実施とその他のエビデンスの取得、患者の視点の提供、専門臨床家の視点の提供など）。\r
\r
6. グループのファシリテーション、建設的なダイナミクスの維持、対立の特定と解決、中立性と客観性の維持に経験があり、方法論的専門知識とコンテンツの専門知識を持つグループリーダーまたは議長を選出する。\r
\r
7. 透明性を確保するために、ガイドライン作成グループメンバーの選定プロセスと役割を文書化する。\r
\r
### 4. ガイドライン作成グループのプロセスの確立\r
\r
1. ガイドラインパネルメンバーおよびその他のグループとのコミュニケーションの方法と頻度を確立し、手配の担当者を決定し、このアプローチから逸脱するタイミングを検討する。\r
\r
2. ガイドライン開発グループメンバーのための導入、研修、支援を通じて、グループプロセスに対する期待と認識を設定する（例：グループの議論と意思決定のための理想的な条件の設定）。\r
\r
3. ガイドライン開発グループの研修の一環として、グループメンバーがプロセスと提案された方法が何であるか、またそれに従う必要があることを理解していることを確認する（例：使用されるコンセンサス方法、匿名または記名投票、エビデンスの評価、グループ討論とアイデアの貢献）。\r
\r
4. グループメンバーが貢献する平等な機会が提供され、彼らのアイデアと議論が適切に考慮される最適な条件を設定することを目指す（例：グループ討論中、意思決定時、推奨の策定時）。\r
\r
5. グループメンバー間の対立や紛争、およびグループプロセスの機能不全に対処する方法を確立する。\r
\r
6. ガイドライン開発プロジェクト全体を通じて、グループプロセスに関する議論とフィードバックの機会を提供する。\r
\r
7. ガイドライン開発で使用・作成された文書の構造化された適時の配布とアーカイブの方法を確立する。\r
\r
8. 会議の定足数を設定する（例：グループの75%がガイドライン推奨を策定するために出席していなければならない）が、すべてのグループメンバーが可能な限りすべての会議に出席することを期待する。会議の時間と場所（仮想またはオンサイト）を事前に設定または計画し、各会議の範囲と具体的な議題を準備する。\r
\r
9. すべての会議の議事録を保持し、それを公開するかどうか、または内部的に利用可能にするかどうかを決定する（例：誰が出席したか、議題は何であったか、どのような決定が行われたか、次のステップは何か）。\r
\r
### 5. 対象読者の特定とトピック選定\r
\r
1. ガイドラインの主な対象読者（例：プライマリケア医、保健プログラム管理者）と副次的な対象読者（例：病院管理者）を特定し、定義し、および/またはレビューし、ガイドラインで対応できる対象読者の数を決定する。\r
\r
2. 特定された対象読者がガイドラインのトピックに適切であり、関連する対象読者が見落とされていないことを確認するために、適切なステークホルダーに諮問する。（トピック6も参照）\r
\r
3. ガイドライン内で扱われるトピックの候補リストを作成し優先順位を付けるための方法と基準を確立する（例：エビデンスが最も混乱しているか論争がある分野、現在の実践に不確実性や不一致がある分野、スクリーニング、診断、治療に関する質問など）。\r
\r
4. ガイドラインの関連するすべてのトピックが特定され、対象読者のニーズを満たすことを確認するために、適切なステークホルダーに諮問する。（トピック6も参照）\r
\r
5. ガイドライン内で扱われる最終的なトピックに合意するためにグループが使用するコンセンサス形成方法を選択するか提供する（例：デルファイ法、名目群技法）。\r
\r
6. 透明性を確保するために、対象読者の特定プロセスとガイドラインのトピック選定を文書化する。\r
\r
### 6. 消費者およびステークホルダーの参加\r
\r
1. ガイドラインによって影響を受ける可能性のあるすべての人の見解を取り入れるために、ガイドライン開発に参加し諮問すべき適切なステークホルダーを特定する（例：専門職グループ、医療管理者、政策立案者、産業界の代表）。\r
\r
2. ガイドライン開発に参加し諮問すべき適切な消費者を特定する（例：個々の患者、無報酬のケアと支援を患者に提供する介護者、潜在的な患者としてまた税金を通じた医療の資金提供者としての一般市民の構成員、患者の利益を代表するコミュニティ組織、患者と介護者の利益を代表するアドボケート）。\r
\r
3. 消費者およびステークホルダーの参加のための方法を確立し、ガイドラインのステークホルダーの登録を維持する（例：ガイドラインパネルに直接参加する消費者およびステークホルダーメンバーの登録、別の消費者およびステークホルダーの会議またはワークショップの開催案内、文書の電子配布とフィードバック、文書のレビューとフィードバックのための公開期間）。\r
\r
4. ガイドラインパネルに直接参加する消費者およびステークホルダーに対して、役割を明確にし貢献を最大化するための情報（例：研修と導入セッション）を提供する（例：エビデンスの客観的評価、自己利益に基づく推奨の回避）。\r
\r
5. ガイドラインパネルに直接参加しない消費者およびステークホルダーとの諮問の役割、タスク、タイミングを決定する（例：優先順位設定へのコメント、ガイドラインのトピック、対象読者の特定、患者にとって重要なアウトカムの特定、追加エビデンスの特定、パネルが考慮していなかった帰結の指摘、最終ガイドライン草稿のレビューなど、ガイドライン開発プロセス中の特定のマイルストーンでの機会を含む）。\r
\r
6. 効果的なインプットを確保するための明確な指示または研修モジュールを含む、消費者およびステークホルダーのインプットとコメントのための標準テンプレートを開発するか採用する。\r
\r
7. 消費者およびステークホルダーのフィードバックと諮問のための十分な時間を提供する。\r
\r
8. 消費者およびステークホルダーのフィードバックの取り扱いと異なる視点への対処のための方針とプロセスを設定する（例：意思決定において多様な視点が考慮されることを確保する、行われた判定の透明な根拠を提供する、ステークホルダーのための異議申立プロセスを提供する、諮問のコメントとガイドライン開発パネルの回答を公表するなど）。\r
\r
9. ガイドラインパネルのための消費者およびステークホルダーの登録と選定、およびその他のすべての消費者およびステークホルダーとの関与と諮問について、明示的かつ透明な方法を確保するために文書化する。\r
\r
### 7. 利益相反（COI）への配慮\r
\r
1. ガイドラインパネルメンバー候補を含む個人参加者のプロジェクト参加時における利益の申告（DOI）に関する方針を設定する（例：どのような利益を開示すべきか、財務的、知的、学術的/臨床的、専門学会の競争的利益）。\r
\r
2. 利益相反（COI）の判定に関する方針とCOI申告の収集および更新のためのアプローチを設定する（例：どの程度の金銭的利益を開示すべきか、開示がカバーする期間、何が相反を構成するかを誰が判断するか）。\r
\r
3. ガイドライン作成グループメンバー候補に対して、COI開示の記入方法について明確な指示と研修を提供する。COIを申告しなければならないメンバーのリストと、例を含む申告すべき利益の種類を含む。\r
\r
4. COIの管理に関する方針を設定する（例：COIを持つ個人はガイドライン開発から一律に除外されないが、相反分野に関連する特定の推奨への投票からは除外される、議長はCOIを持つべきでない、エビデンス要約は相反のない方法論者が作成するなど）。\r
\r
5. ガイドライン開発活動の資金調達に関してCOIを管理する方針を設定する（例：公的資金の擁護、商業的スポンサーシップなし、ガイドラインのトピックに無関係な団体からの商業的スポンサーシップ、翻訳などの非直接的活動に対する商業的支援、単一スポンサーなし）。\r
\r
6. 資金源を開示・公表し、ガイドライン開発に対するスポンサーの役割と提供された支援を記述する。ガイドライン作成グループメンバーの利益相反を明示的に開示・公表・記述する。特に、相反が特定の推奨に影響する場合。\r
\r
### 8. （PICO）質問の作成\r
\r
1. ガイドラインの質問の作成、質問の優先順位付け、アウトカムの選定とランク付けのための方法を確立する。\r
\r
2. ガイドラインで回答すべき重要な質問（例：臨床的、健康、政策、費用対効果の質問）を標準形式（例：PICO）を用いて作成し文書化し、すべての質問に回答することが実現不可能な場合に作成された質問の優先順位を付ける基準を決定する（例：ガイドラインパネルメンバーの調査、ステークホルダーの調査）。\r
\r
3. ガイドラインが適用される対象集団を明示的に記述する。有病率の高い複数の合併症、地理的設定、公平性の問題（例：不利な集団と有利な集団で異なる相対効果を予測する妥当な理由）など、対象集団の特定の特性を考慮する。\r
\r
4. 介入を検討するにあたって規制当局の承認が要件であるかどうかを判断する（例：国際ガイドラインの場合、すべての対象国で規制上の承認が得られていない可能性があるため、関連がない場合がある）。\r
\r
5. ガイドラインで検討される介入と比較対照を明示的に記述し、介入とアウトカムの関係を描く分析的フレームワークを作成する。複数の（治療）比較を含めるべきかどうかを特定する。\r
\r
6. 重要なアウトカムを特定する（例：臨床経過に沿ったアウトカム、罹患率、生活の質、死亡率）。望ましい効果（例：利益、負担の軽減、節約）と望ましくない効果（例：害、負担、コスト、患者の自律性の低下）の両方を含む。エビデンスが不足している可能性のある重要なアウトカムを無視しない。\r
\r
7. 設定（例：国、病院）を決定するか、対象集団に関する考慮事項に含める（すなわち、三次医療病院でケアを受ける集団）。\r
\r
8. 代理アウトカム、間接アウトカムよりも患者にとって重要なアウトカムへの選好を義務付ける。患者にとって重要なアウトカムのデータが不足している場合、因果経路に沿った代理アウトカムの適切性を検討する。\r
\r
9. 対象集団の価値観と選好を考慮に入れて、アウトカムの相対的重要性を事前にランク付けする。\r
\r
10. 個々のアウトカムに対して、対象集団にとって重要と判定される効果の大きさを決定するか、決定するためのプロセスを開発する。\r
\r
11. すべてのガイドライン作成グループメンバーを参加させ、消費者およびステークホルダーに諮問して、質問の作成と重要なアウトカムの選定・評価において対象集団からの幅広い代表を確保する。\r
\r
12. 質問の作成と優先順位付け、アウトカムの選定とランク付け、ステークホルダーと消費者の諮問の方法を、明示的かつ透明であることを確保するために文書化する。\r
\r
13. ガイドラインのプロトコルが、対象集団、対象疾患、アウトカム、検討された重要な質問を概説し、エビデンスレビューの方向付けに役立つようにする。\r
\r
### 9. アウトカムおよび介入の重要性、価値観、選好、効用の検討\r
\r
1. ガイドライン開発中の決定と審議に情報を提供するために、消費者およびステークホルダー（例：患者と対象読者）のアウトカムおよび介入の相対的重要性、価値観、選好、効用を、間接的に聞き取るか直接的に聞き取るかを決定する（例：公表文献のレビュー vs. 消費者との諮問）。\r
\r
2. アウトカムおよび介入の相対的重要性、価値観、選好、効用に関する情報を得るための消費者およびステークホルダーとの諮問方法を確立する（例：ガイドラインパネルへの消費者の参加、より広い消費者代表による調査やフォーカスグループ）。\r
\r
3. 取得された重要性評価、価値観、選好、効用の確信度を評価するための構造化されたアプローチ（すなわち、それらにおけるエビデンスの質）を使用するかどうかを決定する。\r
\r
4. アウトカムおよび介入の相対的重要性、価値観、選好、効用を統合するためにモデリングを使用するかどうか、またモデリングをどのように行うかを決定する。\r
\r
5. アウトカムおよび介入の相対的重要性、価値観、選好、効用に関する情報を得る際、および決定を行うか推奨を策定する際に、誰の視点を考慮するかを決定する（例：患者、一般市民、社会、臨床家）。\r
\r
6. アウトカムおよび介入の相対的重要性評価、価値観、選好、効用の矛盾に対処するためのアプローチを検討し文書化する（例：患者 vs. 介護者、患者 vs. 一般市民）。\r
\r
7. アウトカムおよび介入の相対的重要性、価値観、選好、効用に関する情報を得る方法を、明示的かつ透明であることを確保するために文書化する。\r
\r
8. 推奨が特定の患者グループや疾患に特別な配慮を与えるべきかどうかなど、倫理的考慮事項を文書化する（例：高齢者、希少疾患、健康格差の影響を受ける者）。\r
\r
9. 医療推奨を行う際に倫理的または道徳的価値観をどのように考慮するかを決定する（例：宗教的、社会的、文化的信念を考慮することにより）。\r
\r
### 10. 含めるエビデンスの決定とエビデンスの検索\r
\r
1. システマティックレビューの方法に従う（トピックと組織のフレームワークに応じて、完全なシステマティックレビューまたは迅速なシステマティックレビューのいずれか）か、これを行わない根拠を提供する。\r
\r
2. エビデンスの位置特定、選定、統合のためのプロトコルを策定し（例：既存のシステマティックレビューの検索、新しいシステマティックレビューと灰色文献の検索）、含めるエビデンスの種類を決定する（例：検索するデータベース、研究の種類、包含基準と除外基準、有害事象に関する特定の研究の検索、または利益に関する研究から有害事象に関する情報を抽出することの決定）。\r
\r
3. 検索戦略の策定とエビデンスの検索・選定を誰が行うかを決定する（例：ガイドライン開発グループのワーキンググループ、外部機関への外注、ガイドライン開発グループと外部機関との関係構築によるガイドライン開発の共同作業）。\r
\r
4. 含めるために選定された既存のシステマティックレビューを、検証されたツール（例：AMSTAR）を使用して批判的に評価し、十分な質であり、ガイドラインでの使用に適切であることを確認する。\r
\r
5. 既存のシステマティックレビューが更新されるか更新が必要な場合、新しいエビデンスをどのように含めるか、またレビューを実施した人にどのように連絡し、更新に関与してもらう可能性があるかを決定する。\r
\r
6. 新しいシステマティックレビューが必要な場合、完全なシステマティックレビューを実施するための十分な資源（例：時間と資金）が利用可能かどうかを判断するための評価を行う。\r
\r
7. 資源が限られている場合、迅速な評価方法論の適用を検討し、方法論を明示的に記述し、重要な限界、不確実性、および完全なシステマティックレビューを実施する必要性と緊急性を指摘する。\r
\r
8. 追加のエビデンスと未公表のデータを特定するための方法を確立する（例：ガイドラインパネルメンバーからの提案、ステークホルダーとの諮問）。\r
\r
9. 専門家のインプットの取り扱いに関する方針を設定する（すなわち、専門家の意見はそれ自体がエビデンスではなく、エビデンスとして使用すべきではない。むしろ、専門家の意見を支持する経験や観察を記述し、特定し、可能であれば体系的かつ透明な方法で評価すべきである、例えば概念的フレームワークにおいて）。\r
\r
10. 方法が明示的かつ透明であることを確保するために、エビデンスの検索と選定、適格性の判断、含まれたエビデンスの範囲、使用された検索戦略を文書化し公表する。\r
\r
### 11. エビデンスの要約と追加情報の検討\r
\r
1. 各重要なアウトカムについて、診断テストの正確性、予想される利益、害、資源（コスト）、エビデンスの質の評価、各アウトカムの相対的および絶対的な結果/効果推定値の要約を含む、利用可能な最善のエビデンスの簡潔な要約（例：エビデンステーブル、エビデンスプロファイル、または所見の要約テーブル）を使用してエビデンスを要約する。\r
\r
2. 推奨に情報を提供するために必要な追加情報の要約（例：質的な記述的要約、エビデンステーブル）を提供する。価値観と選好、予想される効果を変更する可能性のある要因、必要性（有病率、ベースラインリスク、または状態）、公平性への影響、実現可能性、資源の利用可能性を含む。\r
\r
3. 資源使用とコストに関する情報を得るための方法を確立する（例：既存の経済的評価の検索、経済モデルの開発、費用対効果分析の実施）。\r
\r
4. コスト、資源使用、および該当する場合は費用対効果を特定し、コストの性質（患者、コミュニティ、社会）を記述する（例：手頃さの考慮、介入の利益と害のエビデンスに対して直接的に重みづけされる資源使用と取得コストの推定）。\r
\r
5. 追加情報がどのようにして統合されたエビデンスに組み込まれるかの方法を文書化し、透明性を確保する（例：患者の価値観に関する正式なコンセンサス、公平性の問題に関するコンセンサス、正式な経済分析、細分化された資源使用データの質的な方法での検討）。\r
\r
6. エビデンステーブルの使用に関する研修と議論の機会を提供し、ガイドラインパネルのすべてのメンバーがテーブルに精通し、適切な方法で使用することを確保する。\r
\r
7. エビデンス要約に加えて、審議に情報を提供するために、完全なシステマティックレビューと原著研究およびその他のエビデンス源をガイドラインパネルに利用可能にする（例：共同ウェブサイトの設置、および/または会議や電子コミュニケーションを通じての利用可能化）。\r
\r
### 12. エビデンスの一群の質、強さ、または確実性の判定\r
\r
1. エビデンスの質を評価する際に考慮すべき基準を概説するフレームワークを選択する（例：GRADE、USPSTF）。評価ツールの変更を避ける。\r
\r
2. エビデンスの質の評価を誰が担当するかを決定する（例：ワーキンググループに参加する相反のない方法論者）。\r
\r
3. 各重要なアウトカムについてエビデンスの質を評価する。\r
\r
4. エビデンスの全体的な質を評価する（例：最も重要またはクリティカルと評価されたアウトカムの最も低いエビデンスの質、またはすべてのアウトカムが同じ方向を指す場合は最も高いエビデンスの質）。\r
\r
5. アウトカムについて評価されたエビデンスの質とエビデンスの一群について報告する。\r
\r
6. エビデンスの質の評価で行われた判定を、透明かつ明示的であることを確保するために文書化する。\r
\r
### 13. 推奨の作成とその強さの決定\r
\r
1. 推奨に至るために考慮すべき要因を概説するフレームワークを適用する。\r
\r
2. 推奨が策定されるコンセンサス会議のロジスティクスの詳細を参加者と計画し共有する。会議に必要な文書（例：エビデンス要約、エビデンスから推奨への表）の配布、会議の議題の設定、グループが判定に合意するために使用されるコンセンサス形成方法の選定（例：デルファイ法、名目群技法）を含む。\r
\r
3. 推奨に影響するフレームワークの要因を検討する。方向性と強さを含む（例：望ましい帰結と望ましくない帰結のバランスに焦点を当てた分析に関連するエビデンスと情報の種類。エビデンスの質、利益と害の差の大きさ、価値観と選好の確実性またはばらつき、資源使用、公平性、およびその他の要因によって情報提供される）。\r
\r
4. エビデンスが不十分であるか非常に低い質のエビデンスしかない状況で推奨を策定するための規定を必要に応じて設ける（例：判定を透明に提示した条件付き推奨、ガイドラインパネルが決定が誤りである可能性が実質的にあると感じる場合は推奨なし、さらなる研究が利用可能になるまでの最善の管理オプションに関するガイダンスを補完して研究の文脈で介入を使用することを推奨）。\r
\r
5. 研究推奨を策定し、それをどこに報告するかを決定するための規定を設ける（例：ガイドラインの付録に、具体的な研究質問、測定すべき具体的な患者にとって重要なアウトカム、介入の利益および/または望ましくないマイナス面に関する不確実性を減少させるために必要な研究のその他の関連側面を提案する）。\r
\r
6. 推奨を策定し、各推奨の根拠を要約する（例：記述的にまたは表で）。グループが行った判定の詳細と、推奨とそれを支持するエビデンスの間の明示的なリンクを含む。\r
\r
7. 策定された推奨の強さを評価する方法を選択し、ガイドラインの対象読者にその推奨に従うことに関するガイドライン作成グループの確信度について情報を提供する。\r
\r
8. 推奨の強さを評価する際にグループが使用するコンセンサス形成方法を選択する（例：デルファイ法、名目群技法、投票）。\r
\r
9. 推奨が業績指標/質の基準として機能するのに適切かどうかについて提案を提供する（例：高いまたは中等度の質のエビデンスに基づく強い推奨に関連する管理オプションは質の基準の特に良い候補である。推奨が弱い場合、代替管理戦略の相対的なメリットについて患者と議論し、この相互作用の適切な文書化が質の基準になる可能性がある）。\r
\r
10. 推奨の策定とその強さの決定で行われた判定を、透明かつ明示的であることを確保するために文書化する。\r
\r
### 14. 推奨の文言および実装、実現可能性、公平性の考慮事項\r
\r
1. 推奨声明に使用する標準化された文言を決定し、明確さを確保し、ガイドライン全体の一貫性を維持する。曖昧で非特異的な文言を避ける。\r
\r
2. 推奨を、ガイドライン利用者が推奨を理解するために他の資料を参照する必要がないように、十分な情報を含む実行可能な方法で記述する。\r
\r
3. 推奨の強さの意味合いについて、臨床家、患者、政策立案者、およびその他の対象読者グループのための明確な方向性または解釈の助けを提供する。\r
\r
4. 推奨声明において、推奨が意図する対象集団、推奨される介入、および代替アプローチまたは介入を示す。\r
\r
5. 推奨の文脈、実現可能性、適用可能性を記述し、公平性の問題や推奨に適用される可能性のある特定の条件などの重要な考慮事項を強調する備考を含める（例：概説された条件が特定のサブポピュレーション、特定のタイプの介入、特定の価値観と選好、特定の資源が利用可能な場合に適用されるかどうかなど）。\r
\r
6. エビデンスの質と推奨の強さを推奨声明の近くに報告する。\r
\r
7. 推奨声明の最終的な文言に合意するためにグループが使用する方法を確立する（例：レビューと承認、正式なコンセンサス）。\r
\r
8. 推奨を理解しやすく目立つ方法で報告する（例：推奨を長い段落の中に埋もれさせない、要約セクションで推奨をグループ化するなど）。\r
\r
### 15. 報告と査読\r
\r
1. 特定の構造、見出し、内容を含むガイドライン報告の標準化された形式を開発するか採用する。\r
\r
2. ガイドライン成果物のために準備される形式を決定する（例：完全なガイドライン、技術報告/システマティックレビュー付きの完全なガイドライン、臨床家や政策立案者向けの簡潔なガイドライン、患者向けの消費者版）。これらは普及計画に対応する。（トピック16も参照）\r
\r
3. ガイドライン成果物の執筆を誰が担当するかを決定し（例：ガイドラインワーキンググループの小委員会）、著者を決定する（例：個人著者、組織が著者、ワーキンググループが著者）。（トピック1も参照）\r
\r
4. ガイドライン開発グループのすべてのメンバーによるガイドライン報告の最終草稿のレビューを行い、フィードバック、編集、修正のための十分な機会を提供する。\r
\r
5. ガイドライン開発グループのすべてのメンバーから最終文書の承認を得る。\r
\r
6. 組織的（すなわち内部）ピアレビューを開始する。\r
\r
7. 外部ピアレビューの方法を決定する。最終文書の正確性、実用性、明確性、構成、推奨の有用性をレビューし、ガイドライン作成グループが含んでいなかったより広い重要な視点からのインプットを確保する（例：招待ピアレビュー、ガイドライン開発グループからのフィードバックと回答の組み込みによるパブリックコンサルテーション期間、ピアレビューされた出版物への投稿）。\r
\r
8. 内部および外部のピアレビューのプロセスを文書化し、該当する場合は諮問のコメントとガイドライン開発グループの回答を公表する。\r
\r
### 16. 普及と実装\r
\r
1. ガイドラインの採用を強化するためのさまざまなアプローチを含む積極的な普及計画を準備する（例：ガイドラインをオンラインで利用可能にする、ガイドラインの普及と実装を担当する医療システムの関係者との正式な関係を構築しガイドラインの導入を支援する、記者会見、ソーシャルメディア戦略、専門学会会議での普及、対象読者がアクセスするジャーナルへのガイドラインの公表）。\r
\r
2. 推奨を実践にどのように実装できるかについてのガイダンスを提供するツール、支援、派生製品を開発するか適応させる（例：モバイルアプリケーション、臨床意思決定支援システムとの統合、対象読者向けの教育リソースとしてのガイドラインの適応可能化）。\r
\r
3. ガイドラインの適応に関する考慮を行い、他の文脈にガイドラインを適応させたいターゲットエンドユーザーが体系的かつ透明な方法で行うための具体的な指示を提供する（例：地域の資源とベースラインリスクに基づく推奨の修正、ガイドラインパネルが行った判定から逸脱する影響）。\r
\r
4. ガイドラインの他の言語への翻訳に関する規則と規制を設定する（例：ガイドライン作成グループの承認後に第三者組織による翻訳を許可する、翻訳担当スタッフをガイドラインワーキンググループに含めるなど）。\r
\r
### 17. 評価と利用\r
\r
1. 推奨を策定するために開催されたガイドラインパネル会議を含むガイドライン開発プロセスの内部評価（すなわち自己評価）を、ガイドライン作成グループメンバーにフィードバックを求めることにより実施する。\r
\r
2. ターゲットエンドユーザー（例：ガイドライン開発グループに参加した対象読者とステークホルダーのメンバー）とともにガイドラインの試験的運用を検討する。\r
\r
3. ターゲットエンドユーザーがガイドライン推奨の実装と利用をモニタリングし監査するための基準とツールを提供する（例：実装により変化すべきアウトカムを特定し、アウトカムを測定する方法を提案する）。\r
\r
4. 実装後のガイドラインの有効性を判断するための前向き評価のための支援とツールを提供する（例：可能な場合はランダム化評価の使用、実装の効果に関する不確実性のため前後比較の慎重な使用）。\r
\r
5. ガイドラインの前向き評価へのガイドライン開発グループの潜在的な関与を検討する（例：ガイドラインを実装する組織との提携により評価研究を計画する）。\r
\r
6. 推奨の後続バージョンにおいて内在的な実装可能性を改善する方法を特定するために、利用者からフィードバックと評価を収集することを計画する。\r
\r
### 18. 更新\r
\r
1. ガイドラインの更新が必要かどうかを定期的にモニタリングしレビューするための方針、手順、タイムラインを設定する（例：新しいエビデンスが利用可能かどうかを判断するためにシステマティックレビューを3年ごとに更新する）。\r
\r
2. 文献の定期的なモニタリングと新しい重要なエビデンスが利用可能かどうかの評価を誰が担当するかを決定する（例：ガイドラインを定期的にレビューするために、以前のガイドライン開発グループに関与していなかった専門家の関与を検討する）。\r
\r
3. ガイドラインの部分的または完全な更新が必要となる条件を設定する（例：特定の推奨声明のみが更新される必要がある場合、多くの推奨が古くなりガイドライン全体が無効となる場合、新しく利用可能な治療法に対する推奨が必要な場合）。\r
\r
4. ガイドライン完成後のガイドライン作成グループのメンバーシップと参加の手配を行う（例：1〜2年ごとのメンバーのローテーション、更新時の新しいグループの選出、ガイドラインパネル議長の継続的な参加）。\r
\r
5. 将来のガイドライン更新のための資金調達とロジスティクスを計画する（例：継続的な資金の確保、更新プロセスを監督する常設監督委員会）。\r
\r
6. ガイドラインの更新のための計画と提案された方法を、確実に実行されるように文書化する。\r
\r
E – 項目は専門家の諮問により情報提供\r
\r
---\r
\r
### 参考文献\r
\r
1. Fretheim A, Schünemann H, Oxman A. Improving the use of research evidence in guideline development: 3. Group composition and consultation process. Health Research Policy and Systems. 2006;4(1):15.\r
\r
2. Kunz R, Fretheim A, Cluzeau F, et al. Guideline Group Composition and Group Processes: Article 3 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):229-233.\r
\r
3. The ADAPTE Collaboration. The ADAPTE Process: Resource Toolkit for Guideline Adaptation. Version 2.0. 2009.\r
\r
4. World Health Organization. Estonian Handbook for Guidelines Development. 2011.\r
\r
5. National Institute for Health and Clinical Excellence. The guidelines manual. 2012.\r
\r
6. Scottish Intercollegiate Guidelines Network. SIGN 50: A guideline developer's handbook. 2011.\r
\r
7. World Health Organization. WHO Handbook for Guideline Development. 2012.\r
\r
8. American College of Cardiology Foundation and American Heart Association. Methodology Manual and Policies from the ACCF/AHA Task Force on Practice Guidelines. 2010.\r
\r
9. Rosenfeld RM, Shiffman RN, Robertson P. Clinical Practice Guideline Development Manual, Third Edition: A Quality-Driven Approach for Translating Evidence into Action. Otolaryngology -- Head and Neck Surgery. 2013;148(1 suppl):S1-S55.\r
\r
10. Cancer Care Ontario. Program in Evidence-Based Care Handbook. 2012.\r
\r
11. Centers for Disease Control and Prevention. Guidelines and Recommendations: A CDC Primer. Atlanta, Georgia: Office of the Associate Director for Science Centers for Disease Control and Prevention; 2012.\r
\r
12. Davino-Ramaya C, Krause LK, Robbins CW, et al. Transparency matters: Kaiser Permanente's National Guideline Program methodological processes. The Permanente Journal. Winter 2012;16(1):55-62.\r
\r
13. Canadian Task Force on Preventive Health Care. Canadian Task Force on Preventive Health Care Procedure Manual. 2011.\r
\r
14. Gutiérrez GC, Bossert T, Espinosa JQ, et al. Guía Metodológica para la elaboración de Guías de Atención Integral en el Sistema General de Seguridad Social en Salud Colombiano. 2010.\r
\r
15. Ministerio de Sanidad y Consumo. Elaboración de guías de práctica clínica en el sistema nacional de salud: Manual metodológico. 2007.\r
\r
16. Oxman A, Schünemann H, Fretheim A. Improving the use of research evidence in guideline development: 2. Priority setting. Health Research Policy and Systems. 2006;4(1):14.\r
\r
17. American College of Cardiology Foundation and American Heart Association. Manuscript Development Process. 2010.\r
\r
18. New Zealand Guidelines Group. Handbook for the preparation of explicit evidence-based clinical practice guidelines. Wellington: New Zealand Guidelines Group; 2001.\r
\r
19. Agency for Healthcare Research and Quality. U.S. Preventive Services Task Force Procedure Manual. 2008.\r
\r
20. National Health and Medical Research Council. Procedures and requirements for meeting the 2011 NHMRC standard for clinical practice guidelines. 2011.\r
\r
21. Ministerio de Salud. Norma técnica para la elaboración de guías de practica clinica. 2005.\r
\r
22. Qaseem A, Forland F, Macbeth F, Ollenschläger G, Phillips S, van der Wees P. Guidelines International Network: Toward international standards for clinical practice guidelines. Ann Intern Med. 2012;156(7):525-531.\r
\r
23. Institute of Medicine Committee on Standards for Developing Trustworthy Clinical Practice Guidelines. Clinical Practice Guidelines We Can Trust. 2011.\r
\r
24. European Society of Cardiology. Recommendations for Guidelines Production. 2010.\r
\r
25. Boyd EA, Akl EA, Baumann M, et al. Guideline Funding and Conflicts of Interest: Article 4 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):234-242.\r
\r
26. Brouwers MC, Kho ME, Browman GP, et al. AGREE II: Advancing guideline development, reporting and evaluation in health care. Canadian Medical Association Journal. 2010;182(18):E839-E842.\r
\r
27. Schünemann H, Fretheim A, Oxman A. Improving the use of research evidence in guideline development: 1. Guidelines for guidelines. Health Research Policy and Systems. 2006;4(1):13.\r
\r
28. National Institute for Health and Clinical Excellence. How NICE clinical guidelines are developed: An overview for stakeholders, the public and the NHS. 5th Edition. 2012.\r
\r
29. Jacobs AK, Kushner FG, Ettinger SM, et al. ACCF/AHA clinical practice guideline methodology summit report: a report of the American College of Cardiology Foundation/American Heart Association Task Force on Practice Guidelines. J Am Coll Cardiol. 2013;61(2):213-265.\r
\r
30. Oxman A, Schünemann H, Fretheim A. Improving the use of research evidence in guideline development: 12. Incorporating considerations of equity. Health Research Policy and Systems. 2006;4(1):24.\r
\r
31. Cluzeau F, Wedzicha JA, Kelson M, et al. Stakeholder Involvement: How to Do It Right: Article 9 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):269-273.\r
\r
32. Fretheim A, Schünemann H, Oxman A. Improving the use of research evidence in guideline development: 5. Group processes. Health Research Policy and Systems. 2006;4(1):17.\r
\r
33. Wilt TJ, Guyatt G, Kunz R, et al. Deciding What Type of Evidence and Outcomes to Include in Guidelines: Article 5 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):243-250.\r
\r
34. Shiffman RN, Shekelle P, Overhage JM, Slutsky J, Grimshaw J, Deshpande AM. Standardized reporting of clinical practice guidelines: a proposal from the Conference on Guideline Standardization. Ann Intern Med. 2003;139(6):493-498.\r
\r
35. Atkins D, Perez-Padilla R, MacNee W, Buist AS, Cruz AA. Priority Setting in Guideline Development: Article 2 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):225-228.\r
\r
36. Eccles M, Grimshaw J, Shekelle P, Schünemann H, Woolf S. Developing clinical practice guidelines: target audiences, identifying topics for guidelines, guideline group composition and functioning and conflicts of interest. Implementation Science. 2012;7(1):60.\r
\r
37. Burgers JS, Anzueto A, Black PN, et al. Adaptation, Evaluation, and Updating of Guidelines: Article 14 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):304-310.\r
\r
38. Esandi ME, Luca MD, Chapman E, Schapochnik N, Bernztein R, Otheguy L. Guía para la adaptación de Guías de Práctica Clínica. 2008.\r
\r
39. Schünemann HJ, Woodhead M, Anzueto A, et al. A guide to guidelines for professional societies and other developers of recommendations: Introduction to integrating and coordinating efforts in COPD guideline development. An official ATS/ERS workshop report. Proceedings of the American Thoracic Society. 2012;9(5):215-218.\r
\r
40. Shekelle P, Woolf S, Grimshaw J, Schünemann H, Eccles M. Developing clinical practice guidelines: reviewing, reporting, and publishing guidelines; updating guidelines; and the emerging issues of enhancing guideline implementability and accounting for comorbid conditions in guideline development. Implementation Science. 2012;7(1):62.\r
\r
41. Yawn BP, Akl EA, Qaseem A, Black P, Campos-Outcalt D. Identifying Target Audiences: Who Are the Guidelines For?: Article 1 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):219-224.\r
\r
42. Guyatt GH, Norris SL, Schulman S, et al. Methodology for the development of antithrombotic therapy and prevention of thrombosis guidelines: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012;141(2 Suppl):53S-70S.\r
\r
43. National Institute for Health and Clinical Excellence. The guidelines manual: Appendix A – Agreements and advice for Guideline Development Group members. 2012.\r
\r
44. National Health and Medical Research Council. Guideline Development and Conflicts of Interest: Identifying and Managing Conflicts of Interest of Prospective Members and Members of NHMRC Committees and Working Groups Developing Guidelines. 2012.\r
\r
45. Woolf S, Schünemann H, Eccles M, Grimshaw J, Shekelle P. Developing clinical practice guidelines: types of evidence and outcomes; values and economics, synthesis, grading, and presentation and deriving recommendations. Implementation Science. 2012;7(1):61.\r
\r
46. Kelson M, Akl EA, Bastian H, et al. Integrating Values and Consumer Involvement in Guidelines with the Patient at the Center: Article 8 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):262-268.\r
\r
47. Schünemann H, Fretheim A, Oxman A. Improving the use of research evidence in guideline development: 10. Integrating values and consumer involvement. Health Research Policy and Systems. 2006;4(1):22.\r
\r
48. Boyd E, Bero L. Improving the use of research evidence in guideline development: 4. Managing conflicts of interests. Health Research Policy and Systems. 2006;4(1):16.\r
\r
49. Cancer Care Ontario. Program in Evidence-Based Care Conflict of Interest Policy. 2011.\r
\r
50. Oxman A, Schünemann H, Fretheim A. Improving the use of research evidence in guideline development: 14. Reporting guidelines. Health Research Policy and Systems. 2006;4(1):26.\r
\r
51. Schünemann H, Oxman A, Fretheim A. Improving the use of research evidence in guideline development: 6. Determining which outcomes are important. Health Research Policy and Systems. 2006;4(1):18.\r
\r
52. Fabbri LM, Boyd C, Boschetto P, et al. How to Integrate Multiple Comorbidities in Guideline Development: Article 10 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):274-281.\r
\r
53. National Institute for Health and Clinical Excellence. Positively Equal: A guide to addressing equality issues in developing clinical guidelines. 2012.\r
\r
54. Oxman A, Schünemann H, Fretheim A. Improving the use of research evidence in guideline development: 7. Deciding what evidence to include. Health Research Policy and Systems. 2006;4(1):19.\r
\r
55. Hofmann B. Toward a procedure for integrating moral issues in health technology assessment. Int J Technol Assess Health Care. Summer 2005;21(3):312-318.\r
\r
56. Oxman A, Schünemann H, Fretheim A. Improving the use of research evidence in guideline development: 8. Synthesis and presentation of evidence. Health Research Policy and Systems. 2006;4(1):20.\r
\r
57. Guyatt G, Akl EA, Oxman A, et al. Synthesis, Grading, and Presentation of Evidence in Guidelines: Article 7 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):256-261.\r
\r
58. Edejer T. Improving the use of research evidence in guideline development: 11. Incorporating considerations of cost-effectiveness, affordability and resource implications. Health Research Policy and Systems. 2006;4(1):23.\r
\r
59. Schünemann H, Fretheim A, Oxman A. Improving the use of research evidence in guideline development: 13. Applicability, transferability and adaptation. Health Research Policy and Systems. 2006;4(1):25.\r
\r
60. Hill SR, Olson LG, Falck-Ytter Y, et al. Incorporating Considerations of Cost-Effectiveness, Affordability, and Resource Implications in Guideline Development: Article 6 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):251-255.\r
\r
61. Schünemann H, Fretheim A, Oxman A. Improving the use of research evidence in guideline development: 9. Grading evidence and recommendations. Health Research Policy and Systems. 2006;4(1):21.\r
\r
62. Wilson KC, Irwin RS, File TM, Schünemann HJ, Guyatt GH, Rabe KF. Reporting and Publishing Guidelines: Article 12 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):293-297.\r
\r
63. Schünemann HJ, Oxman AD, Akl EA, et al. Moving from Evidence to Developing Recommendations in Guidelines: Article 11 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):282-292.\r
\r
64. Oxman A, Schünemann H, Fretheim A. Improving the use of research evidence in guideline development: 16. Evaluation. Health Research Policy and Systems. 2006;4(1):28.\r
\r
65. Fretheim A, Schünemann H, Oxman A. Improving the use of research evidence in guideline development: 15. Disseminating and implementing guidelines. Health Research Policy and Systems. 2006;4(1):27.\r
\r
66. Grimshaw JM, Schünemann HJ, Burgers J, et al. Disseminating and Implementing Guidelines: Article 13 in Integrating and Coordinating Efforts in COPD Guideline Development. An Official ATS/ERS Workshop Report. Proceedings of the American Thoracic Society. 2012;9(5):298-303.\r
\r
67. Cancer Care Ontario. Program in Evidence-Based Care Document Assessment and Review Protocol. 2012.\r
\r
---\r
\r
以上で、INGUIDE レベル1・モジュール4の全コンテンツの日本語翻訳および補足解説の完成原稿となります。`;function re(e,t){let n=e.split(`
`),r=`Module ${t}`,i=``;for(let e=0;e<Math.min(n.length,30);e++){let t=n[e].trim();if(t.startsWith(`# `)&&!t.startsWith(`# 目次`)&&!t.startsWith(`# 抽出`)){r=t.replace(/^#\s+/,``);break}t.includes(`INGUIDE Level 1: Module`)&&(r=t.replace(/^#+\s*/,``))}let a=e.indexOf(`## ドキュメント概要`);if(a!==-1){let t=e.indexOf(`
---`,a);if(t!==-1){let n=e.substring(a,t).split(`
`).filter(e=>{let t=e.trim();return t&&!t.startsWith(`#`)&&!t.startsWith(`-`)&&!t.startsWith(`*`)});n.length>0&&(i=n[0].trim())}}let o=[],s=-1,c=0;for(let e=0;e<n.length;e++){let t=n[e].trim();if(t.startsWith(`# インストラクター`)||t.startsWith(`# パート`)||t.startsWith(`# PART`)||t.match(/^#\s+(MEET|INSTRUCTOR|PROCESS|DEVELOPING)/)){c=e;break}}for(let e=c;e<n.length;e++){let r=n[e].trim();if(r.match(/^#\s+[^#]/)&&!r.startsWith(`# 抽出された`)&&!r.startsWith(`# 目次`)){let e=r.replace(/^#\s+/,``);o.push({id:`m${t}-section-${o.length}`,title:e,content:[],subSections:[]}),s=o.length-1;continue}if(s<0)continue;let i=o[s];if(r.match(/^##\s+[^#]/)){let e=r.replace(/^##\s+/,``);i.subSections.push({id:`m${t}-sub-${s}-${i.subSections.length}`,title:e,content:[]});continue}ie((i.subSections.length>0?i.subSections[i.subSections.length-1]:i).content,r,n,e)}let l=o.filter(e=>e.content.length>0||e.subSections.length>0).map(e=>({...e,subSections:e.subSections.filter(e=>e.content.length>0)}));return{title:r,description:i,sections:l}}function ie(e,t,n,r){if(t){if(t===`---`){if(e.length>0&&e[e.length-1].type===`divider`)return;e.push({type:`divider`});return}if(t.startsWith(`【図】`)){let n=t.match(/【図】(figure_\d+\.(?:jpg|jpeg|png))(?:（.*?）)?(?:\s*[—–-]\s*(.+))?/);n&&e.push({type:`image`,imageId:n[1],caption:n[2]||``});return}if(t.startsWith(`【チェックリスト対応】`)){e.push({type:`checklist-ref`,text:t.replace(`【チェックリスト対応】`,``).trim()});return}if(t.match(/^###\s+/)){let n=t.replace(/^###\s+/,``);e.push({type:`heading`,level:3,text:n});return}if(t.startsWith(`>>>補足`)){e.push({type:`note-start`,text:t.replace(/^>>>補足【(.+?)】/,`$1`)});return}if(t===`<<<`){e.push({type:`note-end`});return}if(t.match(/^\*\*(.+)\*\*$/)&&!t.includes(`：`)){let n=t.match(/^\*\*(.+)\*\*$/)[1];e.push({type:`bold-heading`,text:n});return}if(t.match(/^\*\*(.+?)\*\*[：:]$/)){let n=t.match(/^\*\*(.+?)\*\*/)[1];e.push({type:`label`,text:n});return}if(t.match(/^\d+\.\s+/)){let n=t.replace(/^\d+\.\s+/,``),r=e[e.length-1];r&&r.type===`ordered-list`?r.items.push(n):e.push({type:`ordered-list`,items:[n]});return}if(t.match(/^[-•]\s+/)){let n=t.replace(/^[-•]\s+/,``),r=e[e.length-1];r&&r.type===`list`?r.items.push(n):e.push({type:`list`,items:[n]});return}if(t.match(/^\s+[-o•]\s+/)){let n=t.replace(/^\s+[-o•]\s+/,``),r=e[e.length-1];r&&r.type===`sub-list`?r.items.push(n):e.push({type:`sub-list`,items:[n]});return}if(t.startsWith(`参考文献：`)||t.startsWith(`表の出典：`)){e.push({type:`reference`,text:t});return}e.push({type:`paragraph`,text:t})}}function C(e){return e.map(e=>({...e,content:ae(e.content),subSections:e.subSections.map(e=>({...e,content:ae(e.content)}))}))}function ae(e){let t=[],n=null,r=[],i=!1;for(let a of e){if(a.type===`note-start`){i=!0,n=a.text,r=[];continue}if(a.type===`note-end`){i=!1,t.push({type:`note`,title:n,blocks:r}),n=null,r=[];continue}i?r.push(a):t.push(a)}return i&&r.length>0&&t.push({type:`note`,title:n,blocks:r}),t}function oe(e,t,n){let r=C(re(e,t).sections),i=[];n.description&&i.push({id:`module-${t}`,title:n.title,icon:n.icon,category:`Module ${t}`,description:n.description,moduleNumber:t,content:[],subSections:[]});for(let e of r)i.push({id:e.id,title:e.title,icon:n.icon,category:`Module ${t}`,description:``,moduleNumber:t,content:e.content,subSections:e.subSections});return i}var se=[{moduleNumber:1,title:`Module 1 確認テスト`,description:`ガイドラインの基礎、パネルメンバーの役割、利益相反に関する21問`,questions:[{question:`患者もまた、エビデンスを解釈するために必要な専門家と考えることができる。`,options:[`正しい`,`誤り`],correctIndex:0,reference:`エキスパートとは何か？`,explanation:`患者は、医療専門家が持っていない疾患を経験することについての専門知識と洞察を持っており、エビデンスを解釈するために必要な専門家に含まれます。`,quote:`エキスパートを、特定の分野について非常に知識が豊富であるか、熟練した人として非常に広く定義しています。これには、医療専門家が持っていない疾患を経験することについての専門知識と洞察を持つ患者および患者代表者が含まれます。これらのエキスパートはエビデンスを解釈するために必要です。`},{question:`多職種によるバランスの取れた代表を維持するために、プロセスの開始時に一旦設定されたパネルメンバーは、決して変更してはならない。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`ガイドライングループメンバーシップ — 選定と関与する人々`,explanation:`パネルメンバーは固定ではありません。ガイドラインの対象読者やトピックが洗練されるにつれて追加メンバーが必要になる場合があり、反復的なプロセスです。`,quote:`ガイドラインの対象読者とトピックが洗練されるにつれて追加メンバーが必要な場合は反復的であり得る。`},{question:`パネルメンバーは、ガイドラインの最終的なトピックを熟知する必要はない。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`対象読者の特定とトピックの理解`,explanation:`パネルメンバーは、ガイドラインのために選定された最終的なトピックに精通しておくべきです。`,quote:`ガイドラインパネルメンバーとして、通常、参加を依頼した組織によって選定された、ガイドラインのための最終的なトピックに精通しておくべきです。`},{question:`ガイドライングループメンバーの選定は`,options:[`主要な利害関係者のすべてのグループのバランスのとれた学際的な代表を目指す`,`スポンサー組織が行う`,`透明性を確保するために文書化する`,`上記すべて`],correctIndex:3,reference:`ガイドライングループメンバーシップ — 選定と関与する人々`,explanation:`3つすべてが正しいです。バランスの取れた多職種構成を持つこと、主導組織が監督委員会と協力して行うこと、選定プロセスを文書化することが求められます。`,quote:`ガイドライングループまたはパネルが、主要なステークホルダーのすべてのグループの代表者を含む、バランスのとれた多職種構成を持つことが極めて重要です…選定プロセス全体と役割の説明は透明性を確保するために文書化されるべきです。`},{question:`ガイドラインとは何ですか？`,options:[`意見に基づく声明`,`体系的に作成されたエビデンスに基づく記述`,`契約上の声明`,`ケアの基準に関する法的記述`],correctIndex:1,reference:`診療ガイドライン`,explanation:`ガイドラインは意見ではなく、系統的に開発されたエビデンスに基づく声明です。`,quote:`ガイドラインとは、医療提供者、受益者、その他のステークホルダーが適切な健康介入について情報に基づいた意思決定を行うことを可能にする、系統的に開発されたエビデンスに基づく声明です。`},{question:`金銭的な利害が直接対立するガイドラインパネルのメンバーは、勧告の方向性や強さについて決定すべきではない。`,options:[`正しい`,`誤り`],correctIndex:0,reference:`利益相反 — GIN原則 パート8`,explanation:`GIN原則8により、直接的な経済的利益相反を持つメンバーは推奨の方向性・強さの決定に参加すべきではありません。`,quote:`推奨の方向性または強さについて決定するガイドライン開発グループのメンバーは、直接的な経済的利益相反を持つべきではありません。これらのメンバーは、ガイドライン開発のこの段階に参加すべきではありません。`},{question:`パネルメンバーは通常、主要なガイドライントピックの優先順位設定に関与する。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`ガイドライン開発の最初のステップ`,explanation:`トピックの優先順位設定は通常、パネルメンバーの役割ではありません。`,quote:`この段階では、ガイドラインパネルメンバーはまだパネルメンバーとしての作業を開始していません。トピックの優先順位を設定するための協議プロセスには参加する場合がありますが、通常はまだパネルメンバーの役割ではありません。`},{question:`ガイドラインが信頼されるために満たすべき基準でないものはどれか？`,options:[`システマティックレビューの手法を用い、入手可能な最良のエビデンスに基づくべきである`,`歪曲、偏見、利益相反を最小化するための明確で透明性のあるプロセスに基づくべきである`,`オープンアクセスジャーナルに掲載されるべきである`,`ガイドラインの影響を受ける人々の価値観や嗜好に焦点を当てるべきである`],correctIndex:2,reference:`信頼性が高く質の高いガイドラインの6原則`,explanation:`「オープンアクセスジャーナルへの掲載」は6原則に含まれていません。`,quote:`ガイドラインが信頼性が高く質の高いものとなるために満たすべき原則は少なくとも6つあります。1.システマティックレビューの方法論を用いた最良のエビデンスに基づいていること…3.ガイドラインの影響を受ける人々にとって重要なことに焦点を当てていること…6.歪み、バイアス、利益相反を最小化するための明示的で透明性のあるプロセスに基づいていること。`},{question:`パネルのメンバーは通常、以下の責任を負わない`,options:[`エビデンスと文脈的要因に関する意見を提供する`,`予算計画`,`質問の優先順位付け`,`最終的なガイドライン報告書のレビューと執筆`],correctIndex:1,reference:`ガイドライングループメンバーシップ — パネルメンバー`,explanation:`予算計画は組織・監督委員会の責任であり、パネルメンバーの責任ではありません。`,quote:`パネルメンバーの責任：ガイドラインのための質問の優先順位付け、グループ会議への参加、エビデンスと文脈的要因に関する意見の提供、エビデンスの要約のレビュー、提示されたエビデンスに基づく判断と推奨の策定、最終ガイドライン報告書のレビューと執筆…（予算計画は含まれない）`},{question:`ガイドラインは5つ以上の推奨文を含むべきではない。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`推奨とは何か？`,explanation:`推奨の数に5つという上限はありません。`,quote:`ガイドラインは1つまたは複数の推奨を含みます。ガイドラインにおける推奨の数は、トピックや優先事項、利用可能な時間やリソースなど、多くの要因によって決定されます。`},{question:`開発プロセスを開始する前に、パネルメンバーは以下を知る必要はない`,options:[`自分たちが提供する推奨事項`,`対立や紛争を管理するためのプロセス`,`コミュニケーションのルール`,`合意に達するためのルール`],correctIndex:0,reference:`グループプロセスの確立`,explanation:`推奨事項はパネルが議論を経て決定するものであり、事前に知っておくものではありません。`,quote:`パネルメンバーとして、開発プロセスが始まる前に、あなたの任務、義務、権利を理解しておくべきです…投票するパネルメンバーは、コンセンサスに達するためのルールは何か、対立や紛争に対処するプロセスは何かについても認識しておく必要があります。`},{question:`利益相反のない委員長を置くことが現実的に避けられない場合：`,options:[`利益相反のない共同議長を任命すべきである`,`テーマについて知識のない委員長を代わりに選ぶべきである`,`パネルのメンバーは、委員長の投票に対する拒否権を持つべきである`,`議長は必要ない`],correctIndex:0,reference:`利益相反 — GIN原則 パート6`,explanation:`GIN原則6に基づき、議長に利益相反が避けられない場合は、利益相反のない共同議長を任命すべきです。`,quote:`議長の直接的または間接的な利益相反が避けられない場合、利益相反のない共同議長がガイドラインパネルを率いるよう任命されるべきである。`},{question:`すべての潜在的な直接的・間接的利益相反は、通常、以下の方法で申告する`,options:[`標準化された申告書`,`パネル会議の議事録`,`パネル委員長からの正式な書簡`,`パネル委員の履歴書の審査`],correctIndex:0,reference:`利益相反 — GIN原則 パート3`,explanation:`GIN原則3により、標準化されたフォーム（申告書）を使用して利害関係を申告すべきです。`,quote:`ガイドライン開発グループは、すべてのメンバーが同じ領域に関連する利害関係を申告し…利害関係の開示に標準化されたフォームを使用すべきです。`},{question:`透明性のある方法で利益相反の申告と管理を標準化するための方針を誰が示すべきか？`,options:[`ガイドライン作成委員会`,`主導団体`,`ガイドライン方法論者`,`上記すべて`],correctIndex:1,reference:`利益相反 — 定義`,explanation:`主導組織が利益相反管理の方針を提供すべきです。`,quote:`主導組織は、利害関係の申告を標準化し、潜在的な利益相反を透明性のある方法で管理するための方針を提供すべきである。`},{question:`利益相反が存在する場合、棄権しなかった場合、ガイドラインの開発プロセスや勧告に偏りが生じる可能性がある。`,options:[`正しい`,`誤り`],correctIndex:0,reference:`利益相反 — 定義`,explanation:`利益相反はガイドライン開発プロセスと推奨にバイアスをもたらす可能性があります。`,quote:`利益相反（COI）は、ガイドライン開発プロセスと推奨にバイアスをもたらす可能性があります。`},{question:`ガイドライン作成のイニシアチブは、以下から得ることができる`,options:[`政府の保健部門`,`医療専門機関`,`非政府保健機関`,`上記すべて`],correctIndex:3,reference:`ガイドライン開発に通常関与する組織`,explanation:`政府の保健部門、専門職団体、非政府系保健組織のいずれからもイニシアチブが生まれ得ます。`,quote:`ガイドライン開発のイニシアチブはどの組織からでも生まれ得ますが、通常は政府の保健部門（例：保健省）、特定の保健分野を代表する専門職団体（例：米国血液学会）、または非政府系保健組織（例：世界保健機関）が関与します。`},{question:`ガイドラインパネルのメンバーは通常、適切な消費者や利害関係者の特定に関与する。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`消費者・ステークホルダーの関与`,explanation:`パネルメンバーは通常、ステークホルダーを特定するための戦略策定には直接関与しません。`,quote:`ガイドラインパネルメンバーは通常、適切なステークホルダーを特定するための戦略の策定プロセスには直接関与しません。`},{question:`GIN-McMasterチェックリストは、ガイドライン開発者が以下の目的で使用することを意図している`,options:[`ガイドライン開発プロセスを計画する`,`ガイドライン開発プロセスを追跡する`,`開発のための重要なリソースを知っておく`,`上記すべて`],correctIndex:3,reference:`GIN-McMasterガイドライン開発チェックリスト`,explanation:`チェックリストは計画・追跡・リソースの認識という3つすべての目的に使用されます。`,quote:`このチェックリストは、ガイドライン開発者がガイドライン開発のプロセスを計画・追跡し、ステップの見落としがないようにするために使用することを意図しています。また、個々のステップとトピックに関する重要なリソースも提供します。`},{question:`ガイドライン監視委員会は、通常、以下のことを行う`,options:[`エビデンスを要約する`,`勧告を作成する`,`ガイドライン開発の提案を承認する`,`上記すべて`],correctIndex:2,reference:`ガイドラインプロセスに関わるその他の人々 — パネル以外`,explanation:`監督委員会はガイドライン開発提案の承認を担当します。`,quote:`監督委員会は通常、ガイドラインプロセス全体に責任を持ち…委員会はガイドライン開発の提案の承認と、最終的には完成したガイドラインの承認を担当する場合もあります。`},{question:`パネルの医療専門家のみが、潜在的な利益相反を申告する必要がある。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`利益相反 — GIN原則 パート2`,explanation:`利益相反の申告はすべてのパネルメンバーに適用されます。`,quote:`利益相反の定義とその管理は、代表する専門分野やステークホルダーに関係なく、ガイドライン開発グループのすべてのパネルメンバーに適用されます。`},{question:`パネルのメンバーは、少なくとも部分的には、以下の責任を負う：`,options:[`エビデンス表の要約のレビュー`,`パブリックレビューで寄せられたコメントのレビュー`,`最終ガイドライン報告書のレビューと執筆`,`上記すべて`],correctIndex:3,reference:`ガイドライングループメンバーシップ — パネルメンバー`,explanation:`パネルメンバーはエビデンスのレビュー、パブリックレビューへの対応、最終報告書の執筆すべてに関与します。`,quote:`通常、パネルメンバーは以下の責任を負います：エビデンスの要約のレビュー…最終ガイドライン報告書のレビューと執筆…ガイドラインの普及の支援。`}]},{moduleNumber:2,title:`Module 2 確認テスト`,description:`ガイドライン開発プロセス、PICO、アウトカムに関する20問`,questions:[{question:`質問に答えるために、私たちは以下を決定する`,options:[`そこから導かれる推奨は、正味で望ましい結果につながる`,`重要なアウトカムは調査研究で測定される`,`推奨はすべての医療従事者にとって直接的に有益である`,`上記すべて`],correctIndex:0,reference:`アウトカム`,explanation:`質問に答える際、健康上の利益と害のバランスが介入に有利かどうかを判断します。推奨が正味で望ましい結果につながるかを決定することが目的です。`,quote:`すべての選定されたアウトカムについて、健康上の利益と害のバランスが関心のある介入に有利かどうかを判断できるべきです。`},{question:`望ましくない健康影響の例は何か？`,options:[`副作用の増加`,`医師の受容性の増加`,`ガイドライン作成コストの増加`,`上記すべて`],correctIndex:0,reference:`利益と害`,explanation:`副作用（有害反応）の増加は望ましくない健康アウトカムの典型例です。医師の受容性やコストは健康アウトカムではありません。`,quote:`望ましくないアウトカム：高い死亡率、有害反応、耐性の発現、生活の質や症状の悪化。`},{question:`アウトカムの重要性は健康影響のバランスに影響しない。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`望ましい健康効果と望ましくない健康効果のバランス`,explanation:`アウトカムの重要性は健康影響のバランスに大きく影響します。アウトカムがより重要であるほど、全体的な効果への影響が大きくなります。`,quote:`望ましい効果と望ましくない効果のバランスは、介入の効果がどの程度大きいか、そしてアウトカムがどの程度重要であるかによって決定されます。`},{question:`重要な結果に対する研究エビデンスがない場合、その問題を議論する際に研究エビデンスを考慮する必要はない。`,options:[`正しい`,`誤り`],correctIndex:1,reference:`クエスチョンの枠組みとアウトカムの選定`,explanation:`エビデンスが不足していても、そのアウトカムを無視してはなりません。エビデンスの欠如を認識した上で議論すべきです。`,quote:`重要なアウトカムについてエビデンスが不足している場合は、そのアウトカムを無視するのではなく、それを認識すべきです。`},{question:`背景となる質問とは対照的に、前景となる質問は次のようなことを導く`,options:[`どのように病気が発生するかのメカニズムの説明`,`病気の治療方法に関するメカニズムの説明`,`行動指向の推奨`,`上記すべて`],correctIndex:2,reference:`クエスチョンの種類`,explanation:`背景質問は疾患の定義やメカニズムを説明するものですが、前景質問は行動指向の推奨（例：スクリーニングを使用すべきか）につながります。`,quote:`行動指向のガイドライン推奨を通じて回答できる前景ガイドラインクエスチョン。前景クエスチョンは、スクリーニングに賛成または反対の推奨につながります。`},{question:`一般的に、推奨のために考慮すべき重要な結果の数は、以下の数を超えてはならない`,options:[`12`,`3`,`10`,`7`],correctIndex:3,reference:`アウトカム評価のアプローチ`,explanation:`意思決定で扱えるアウトカムの数には限りがあり、通常7つ以下が推奨されます。`,quote:`意思決定にとってクリティカルまたは重要なアウトカムに本当に焦点を絞ることを推奨します。これは通常7つ以下のアウトカムです。`},{question:`パネルの時間とリソースには限りがあるため、優先順位付けの際には以下のことを行うべきである`,options:[`最も重要なPICO質問を含む実行可能なリストに焦点を絞る`,`外部機関に支援を求める`,`支援のために学生を雇う`,`質問数を合計3～5個に絞る`],correctIndex:0,reference:`PICOクエスチョン作成 — 落とし穴`,explanation:`限られた時間とリソースの中で、最も重要なPICOクエスチョンの実行可能なリストに焦点を当てることが不可欠です。`,quote:`ガイドラインパネルはしばしば限られた時間とリソースを持っており、最も重要なPICOクエスチョンの実行可能なリストに焦点を当てることが不可欠です。`},{question:`エビデンスを検討する際に陥りやすい落とし穴や課題は次のとおりである`,options:[`検討中のアウトカムの定義を明示しない`,`さまざまな観点から重要と考えられるアウトカムのリストを適切なリストにまで減らすこと`,`コンセンサスが必要であり、プロセスを導く人々によって達成される`,`上記すべて`],correctIndex:3,reference:`アウトカムは意思決定にとって重要であるべき`,explanation:`3つすべてが潜在的な落とし穴です。定義の不明示、リストの適切な絞り込み、コンセンサスの達成方法のすべてが課題となります。`,quote:`このプロセスにおける潜在的な落とし穴と課題：検討中のアウトカムの定義を明示的に提供しないこと。異なる視点から重要と考えられるアウトカムの大きなリストを適切なリストに絞り込むこと。コンセンサスが必要であること。`},{question:`ガイドラインは、以下の質問に答える方法である`,options:[`臨床的介入`,`コミュニケーションへの介入`,`政策的介入`,`上記すべて`],correctIndex:3,reference:`ガイドラインとクエスチョン`,explanation:`ガイドラインは臨床的、コミュニケーション、組織的、政策的介入のすべてに関する質問に答える方法です。`,quote:`ガイドラインは以下に関するクエスチョンに回答する方法である：臨床的介入、コミュニケーション介入、組織的介入、政策的介入。`},{question:`良い質問は何につながるか`,options:[`コスト削減`,`良い推奨`,`さらなる質問`,`上記すべて`],correctIndex:1,reference:`ガイドライン推奨のための適切なクエスチョンの作成`,explanation:`良い質問は良い推奨につながります。これがクエスチョン開発プロセスの重要なメッセージです。`,quote:`重要なメッセージは、良いクエスチョンが良い推奨につながるということです。`},{question:`典型的なガイドラインの質問の例は何ですか？`,options:[`X の患者において、B と比較した介入 A は実施可能か？`,`X の患者において、B と比較した A のアウトカム 1、2、3 への影響は？`,`X患者にはAとBのどちらを用いるべきか？`,`X 患者の治療には A と B のどちらが望ましいか`],correctIndex:2,reference:`典型的なガイドラインクエスチョン`,explanation:`ガイドラインクエスチョンは典型的に「〜すべきか（Should）」という形式です。「AとBのどちらを用いるべきか？」がこの形式に該当します。`,quote:`ガイドラインクエスチョン — 「〜すべきか」という質問 — 集団、介入、比較。典型的なガイドラインクエスチョン：牛乳アレルギーの小児において経口免疫療法を使用すべきか？`},{question:`望ましい健康影響の例は何か？`,options:[`資源使用の削減`,`罹病期間の短縮`,`パネルメンバーの時間的負担の軽減`,`上記すべて`],correctIndex:1,reference:`利益と害`,explanation:`罹病期間（疾患期間）の短縮は望ましい健康アウトカムです。資源使用やパネルの負担は健康アウトカムではありません。`,quote:`望ましいアウトカム：低い死亡率、入院期間の短縮、疾患期間の短縮、生活の質や症状の改善。`},{question:`ガイドラインの設問の母集団を定義する場合、以下のようにしたい`,options:[`できるだけ広い範囲（例：入院患者）`,`介入から利益を得る可能性が最も高い集団に焦点を当てる`,`すべての年齢層を含む`,`できるだけ詳細に（例：インフルエンザに罹患した65歳以上の入院患者）`],correctIndex:3,reference:`ガイドラインとエビデンスレビュークエスチョン`,explanation:`集団は推奨に必要な限り詳細に記述すべきです（年齢、性別、併存疾患、入院中かどうかなど）。`,quote:`集団（Population）：推奨に必要な限り詳細に集団を記述する（例：年齢、性別、併存疾患、入院中かどうかなど）。`},{question:`PICOは以下の略である`,options:[`母集団、介入、比較対象、結果（Population, Intervention, Comparator, Outcomes）`,`問題、相互作用、比較、目的`,`母集団、介入、費用、結果`,`患者、介入、比較対象、外れ値`],correctIndex:0,reference:`ガイドラインとエビデンスレビュークエスチョン`,explanation:`PICOはPopulation（集団）、Intervention（介入）、Comparator（比較対照）、Outcomes（アウトカム）の略です。`,quote:`集団、介入、比較、アウトカム（PICO）。集団（Population）… 介入（Intervention）… 比較対照（Comparator）… アウトカム（Outcomes）。`},{question:`ガイドライン作成者は、アウトカムの優先順位付けを以下に基づかなければならない`,options:[`勧告の影響を受ける人々にとって何が重要か`,`どのアウトカムが公表されている研究で測定されているか`,`既存のシステマティックレビューで報告されているアウトカムはどれか`,`上記すべて`],correctIndex:0,reference:`アウトカムは意思決定にとって重要であるべき`,explanation:`アウトカムは利用可能なエビデンスではなく、影響を受ける人々にとっての重要性に基づいて選択すべきです。`,quote:`アウトカムは、利用可能と予想されるエビデンスによってではなく、重要性によって決定されるべきである。`},{question:`アウトカムを選択する前に、母集団、介入、比較対象を知る必要がある。`,options:[`正しい`,`誤り`],correctIndex:0,reference:`アウトカム`,explanation:`PICOの順序として、アウトカムを選択する前にP（集団）、I（介入）、C（比較対照）を知る必要があります。`,quote:`アウトカムを選定する前に集団、介入、比較対照を知る必要があります。`},{question:`ガイドライン作成委員会の委員は、通常、ガイドラインの質問を選択するために、次のどの段階に関与する`,options:[`他のパネルメンバーから独立して、潜在的な質問の全リストの相対的重要性を決定する`,`他のパネルメンバーから独立して、潜在的重要性のある疑問点の全リストを作成する`,`PICOの枠組みを完成させるために最も重要なアウトカムを選択する`,`上記すべて`],correctIndex:3,reference:`PICOクエスチョン作成 — 落とし穴`,explanation:`パネルメンバーはリスト作成、重要性の評価、アウトカムの選定のすべてのステップに関与します。`,quote:`ガイドラインパネルメンバーは通常、以下のステップに関与します：潜在的に重要なクエスチョンの完全なリストを作成する、相対的重要性を独立して評価する、主要なアウトカムを選定する。`},{question:`ある質問が重要かどうかに影響する6つの広範な分類のうち、どれが該当しないか`,options:[`その質問は迅速なガイドライン出版につながるか？`,`検討すべき新しいエビデンスがあるか？`,`これは実際によくある質問か？`,`資源の使用やコストに影響するか？`],correctIndex:0,reference:`クエスチョンが重要であるかどうかに影響する要因`,explanation:`6カテゴリーには「よくある質問か」「不確実性があるか」「新エビデンスがあるか」「実践にばらつきがあるか」「コストへの影響」「未対処か」が含まれますが、「迅速な出版」は含まれません。`,quote:`6つのカテゴリー：実践で一般的か？不確実性があるか？新しいエビデンスがあるか？実践にばらつきがあるか？リソース/コストへの影響があるか？以前に十分に取り上げられていないか？`},{question:`検査を使用するかどうかに関する質問`,options:[`実現可能性のみを取り上げる`,`検査結果に基づく管理上の決定や結果に対処する必要がある`,`費用対効果を考慮する必要はない`,`アウトカムとして検査の正確さのみを測定する必要がある`],correctIndex:1,reference:`クエスチョンの定式化`,explanation:`検査の質問では、検査のためだけに検査するのではなく、検査結果に基づく治療やその後のアウトカムについて考える必要があります。`,quote:`通常、検査のために検査をするのではなく、ある治療を実施するかどうかを決定するために検査を使用するのであり、検査結果に基づく治療後に起こり得るアウトカムについて考える必要があります。`},{question:`GRADEのアプローチによれば、アウトカムの重要性には3つのカテゴリーがある。そのうちの2つは「意思決定にクリティカル」と「意思決定に重要性が低い」である。3つ目のカテゴリーは何か？`,options:[`重要であるが、意思決定にとってクリティカルではない`,`意思決定にとって重要な代替`,`意思決定とは無関係`,`患者や医療提供者にとって重要ではない`],correctIndex:0,reference:`アウトカム評価のアプローチ`,explanation:`GRADEの3カテゴリーは「クリティカル（7-9）」「重要だがクリティカルではない（4-6）」「重要性が低い（1-3）」です。`,quote:`1〜3：意思決定にとって重要性が低い。4〜6：重要であるが、意思決定にとってクリティカルではない。7〜9：意思決定にとってクリティカル。`}]},{moduleNumber:3,title:`Module 3 確認テスト`,description:`エビデンスの検索と評価、GRADEアプローチに関する19問`,questions:[{question:`GRADEのエビデンスプロファイル（EP）は、推奨のためのエビデンスの要約を提示する`,options:[`正しい`,`誤り`],correctIndex:1,reference:`エビデンスプロファイル`,explanation:`エビデンスプロファイルは推奨のためではなく、特定の質問に対するエビデンスの確実性を詳細に提示するテーブルです。推奨の策定はエビデンスプロファイルに基づいて行われますが、EP自体は推奨ではなくエビデンスの評価を提示するものです。`,quote:`GRADEエビデンスプロファイルは、特定の質問に対するエビデンスの確実性を詳細に提示するテーブルです。`},{question:`エビデンスの確実性は以下によって評価される`,options:[`研究デザイン（ランダム化か観察研究か）`,`研究の数のみ`,`研究者の経験年数`,`出版された雑誌のインパクトファクター`],correctIndex:0,reference:`エビデンスの確実性の格付け`,explanation:`GRADEでは、エビデンスの確実性の評価は研究デザインを出発点とします。ランダム化比較試験は「高」から、観察研究は「低」から開始し、そこから複数の要因で上下させます。`,quote:`GRADEでは、エビデンスの確実性の評価は研究デザインを出発点とします。ランダム化比較試験（RCT）：確実性の出発点は「高」。観察研究：確実性の出発点は「低」。`},{question:`観察研究は、ランダム化試験と同じ初期評価から開始する`,options:[`正しい`,`誤り`],correctIndex:1,reference:`エビデンスの確実性の格付け`,explanation:`GRADEアプローチでは、ランダム化比較試験は「高」から開始し、観察研究は「低」から開始します。両者の出発点は異なります。`,quote:`ランダム化比較試験（RCT）：確実性の出発点は「高」。観察研究：確実性の出発点は「低」。`},{question:`エビデンスの確実性を下げる理由に含まれるものはどれか`,options:[`大きな効果量`,`非直接性`,`用量反応勾配`,`交絡因子の影響`],correctIndex:1,reference:`グレードダウンの基準`,explanation:`非直接性はGRADEにおいてエビデンスの確実性を下げる5つの要因の一つです。大きな効果量、用量反応勾配、交絡因子の影響はいずれも確実性を上げる要因です。`,quote:`GRADEでは、以下の5つの要因によってエビデンスの確実性が下がる可能性があります：バイアスのリスク、非一貫性、非直接性、不精確さ、出版バイアス。`},{question:`パネルが最も重要な結果に優先順位を付ける時、エビデンスの確実性のレベルはどのように決定されるか`,options:[`すべてのアウトカムの平均で決定する`,`最も高い確実性のアウトカムで決定する`,`パネルが最も重要な結果に優先順位をつけることで確実性のレベルを決定する`,`研究デザインのみで決定する`],correctIndex:2,reference:`全体的なエビデンスの確実性`,explanation:`GRADEアプローチでは、全体的なエビデンスの確実性はパネルが重要と判断したアウトカムに基づいて決定されます。重大なアウトカムの中で最も低い確実性が全体の確実性となります。`,quote:`このプロセスは、アウトカムごとに行われます。同じ質問であっても、アウトカムによってエビデンスの確実性が異なることがあります。`},{question:`エビデンスの確実性に影響する要因は何ですか？`,options:[`バイアスのリスク`,`非直接性`,`不精確さ`,`上記すべて`],correctIndex:3,reference:`エビデンスの確実性の格付け`,explanation:`バイアスのリスク、非直接性、不精確さはいずれもGRADEにおいてエビデンスの確実性を下げる要因に含まれます。これに非一貫性と出版バイアスを加えた5つが確実性を下げる要因です。`,quote:`GRADEでは、以下の5つの要因によってエビデンスの確実性が下がる可能性があります：バイアスのリスク（Risk of bias）、非一貫性（Inconsistency）、非直接性（Indirectness）、不精確さ（Imprecision）、出版バイアス（Publication bias）。`},{question:`次のうち、システマティック・レビューの特徴でないものはどれか`,options:[`ランダム効果の最大化`,`包括的な文献検索戦略`,`含まれる研究の質の批判的評価`,`結果の体系的な統合`],correctIndex:0,reference:`システマティック・レビュー`,explanation:`ランダム効果の最大化はシステマティック・レビューの特徴ではありません。SRの特徴には、明確な研究質問、包括的な検索戦略、適格基準に基づく研究選択、質の批判的評価、結果の体系的な統合が含まれます。`,quote:`システマティックレビューの主要な特徴：明確に定義された研究質問、包括的な文献検索戦略、あらかじめ定められた適格基準、特定された研究の体系的な選択、含まれる研究の質の批判的評価、結果の体系的な統合。`},{question:`GRADEの「非直接性」の判断基準に含まれるものは？`,options:[`健康・文脈的要因`,`統計的有意差`,`サンプルサイズ`,`ファンネルプロットの非対称性`],correctIndex:0,reference:`非直接性`,explanation:`非直接性は、エビデンスがガイドラインの質問に対して直接的に該当しない場合を指します。対象集団、介入、比較対照、アウトカムの非直接性が含まれ、健康・文脈的要因（集団特性や医療環境の違い）が判断基準となります。`,quote:`非直接性には以下の4つの種類があります：対象集団の非直接性、介入の非直接性、比較対照の非直接性、アウトカムの非直接性。`},{question:`GRADEで「不精確さ」と評価される状況は？`,options:[`サンプルサイズが小さい`,`イベント数が少ない`,`信頼区間が臨床的閾値をまたぐ`,`上記すべて`],correctIndex:3,reference:`不精確さ`,explanation:`不精確さは効果推定値の信頼区間が広いことを指します。サンプルサイズが小さい、イベント数が少ない、信頼区間が臨床的な意思決定の閾値をまたぐ場合のすべてが不精確さの評価に含まれます。`,quote:`不精確さが生じる主な原因：サンプルサイズが小さい、イベント数が少ない。不精確さの評価方法：信頼区間の幅：信頼区間が臨床的に意味のある閾値をまたぐかどうか。`},{question:`アウトカムの測定方法で最も重要なのは？`,options:[`PICOに直接関連していること`,`測定が容易であること`,`費用が安いこと`,`研究者が慣れていること`],correctIndex:0,reference:`アウトカム測定`,explanation:`アウトカムの測定方法で最も重要なのは、PICOで定義された質問に直接関連していることです。代理アウトカムの使用はアウトカムの非直接性としてエビデンスの確実性を下げる要因となります。`,quote:`代理アウトカムは測定が容易で短期間に得られることが多いですが、真のアウトカムとの関連が不確実な場合があります。GRADEでは代理アウトカムの使用はアウトカムの非直接性としてエビデンスの確実性を下げる要因となります。`},{question:`出版バイアスの要因として挙げられないものは？`,options:[`インパクトファクター`,`研究結果の陽性・陰性`,`ファンネルプロットの非対称性`,`臨床試験登録との不一致`],correctIndex:0,reference:`出版バイアス`,explanation:`インパクトファクターは出版バイアスの直接的な要因ではありません。出版バイアスは主に研究結果が陽性か陰性かによって出版の有無が影響されることを指し、ファンネルプロットや臨床試験登録との照合で検出されます。`,quote:`出版バイアスとは、研究の結果が陽性（有意）であるかどうかが、その研究が発表されるかどうかに影響することを指します。`},{question:`感度分析の主な目的は何か？`,options:[`結果への影響の確認`,`新しい仮説の生成`,`統計的有意差の検出`,`サンプルサイズの計算`],correctIndex:0,reference:`感度分析`,explanation:`感度分析の主な目的は、特定の仮定や方法を変更した場合に結果が変わるかどうか（結果への影響）を確認することです。非一貫性が認められた場合、その原因を探るためにサブグループ分析や感度分析が行われます。`,quote:`非一貫性が認められた場合、その原因を探ることが重要です（サブグループ分析、感度分析など）。説明可能な異質性であれば、確実性を下げないこともあります。`},{question:`GRADE評価でエビデンスの確実性を下げる最も一般的な理由は？`,options:[`出版バイアス`,`非直接性`,`バイアスリスク`,`大きな効果量`],correctIndex:2,reference:`グレードダウンの基準`,explanation:`バイアスのリスクはエビデンスの確実性を下げる最も一般的な理由です。研究の計画、実施、分析における系統的な誤りのリスクが、結果の信頼性に最も頻繁に影響を与えます。`,quote:`バイアスのリスクとは、研究の計画、実施、分析における系統的な誤りのリスクのことです。バイアスのリスクが高い研究では、結果が真の効果から体系的にずれている可能性があります。`},{question:`メタアナリシスは複数の研究結果を統計的に統合する手法である`,options:[`正しい`,`誤り`],correctIndex:0,reference:`メタアナリシス`,explanation:`メタアナリシスは複数の研究結果を統計学的に統合する手法であり、個々の研究の結果を数量的に統合することで、より精度の高い効果推定値を得ることができます。`,quote:`メタアナリシス（Meta-analysis）は、複数の研究結果を統計学的に統合する手法です。個々の研究の結果を数量的に統合することで、より精度の高い効果推定値を得ることができます。`},{question:`メタアナリシスの主な目的は何か？`,options:[`効果の定量的統合`,`新しい仮説の生成`,`個別の研究の質の評価`,`検索戦略の策定`],correctIndex:0,reference:`メタアナリシス`,explanation:`メタアナリシスの主な目的は、複数の研究結果を統計学的に統合（定量的統合）することです。これにより、個々の研究よりも精度の高い効果推定値を得ることができます。`,quote:`メタアナリシス（Meta-analysis）は、複数の研究結果を統計学的に統合する手法です。個々の研究の結果を数量的に統合することで、より精度の高い効果推定値を得ることができます。`},{question:`異質性（heterogeneity）の評価に使用される指標は？`,options:[`I²統計量`,`カイ二乗検定`,`信頼区間の重なり`,`上記すべて`],correctIndex:3,reference:`異質性`,explanation:`異質性の評価にはI²統計量、カイ二乗検定、信頼区間の重なりのすべてが使用されます。これらを総合的に判断して、研究間の異質性の程度を評価します。`,quote:`非一貫性を評価する際のポイント：効果の方向が研究間で異なるか、効果の大きさが研究間で大きく異なるか、統計的な異質性の検定（I²統計量、カイ二乗検定）、信頼区間の重なりが少ないか。`},{question:`フォレストプロットは個々の研究結果と統合結果を視覚的に表示する`,options:[`正しい`,`誤り`],correctIndex:0,reference:`フォレストプロット`,explanation:`フォレストプロットはメタアナリシスにおいて個々の研究の効果推定値と信頼区間、および統合された全体の推定値を視覚的に表示するグラフです。`,quote:`結果の体系的な統合（可能であればメタアナリシスを含む）。`},{question:`フォレストプロットのダイヤモンドは何を示すか？`,options:[`個々の研究の効果推定値`,`信頼区間の幅`,`プール全体の推定値`,`出版バイアスの程度`],correctIndex:2,reference:`フォレストプロット`,explanation:`フォレストプロットにおけるダイヤモンド（ひし形）は、メタアナリシスによるプール全体（統合）の効果推定値とその信頼区間を示します。個々の研究は四角形で表されます。`,quote:`各アウトカムの効果推定値（相対効果と絶対効果）。エビデンスの確実性の全体的な判定。`},{question:`個々の研究の効果推定値と信頼区間を視覚的に示すグラフは？`,options:[`ファンネルプロット`,`バブルプロット`,`ヒストグラム`,`フォレストプロット`],correctIndex:3,reference:`フォレストプロット`,explanation:`フォレストプロットは個々の研究の効果推定値と信頼区間を視覚的に表示するグラフです。ファンネルプロットは出版バイアスの評価に使用される異なるタイプのグラフです。`,quote:`各アウトカムの介入群と対照群の効果推定値。効果の差（絶対差と相対差）。`}]},{moduleNumber:4,title:`Module 4 確認テスト`,description:`推奨の作成、EtDフレームワーク、ガイドラインの報告・実装・更新に関する20問`,questions:[{question:`エビデンスの確実性の格付けに含まれないものは？`,options:[`バイアスのリスク`,`非直接性`,`不精確さ`,`研究数`],correctIndex:3,reference:`エビデンスの確実性`,explanation:`GRADEにおけるエビデンスの確実性を下げる要因は、バイアスのリスク、非一貫性、非直接性、不精確さ、出版バイアスの5つです。研究数そのものは確実性の格付け基準には含まれません。`,quote:`推奨の方向性と強さを決定する基準がここに記述されています。基準には、問題の重要性または優先度、望ましい健康効果の大きさ、望ましくない健康効果の大きさ、エビデンスの確実性（これらの基準全体にわたる包括的なもの）、根底にある価値観、効果のバランス、必要な資源、必要な資源に関するエビデンスの確実性、費用対効果の考慮、公平性、受容性、実現可能性が含まれます。`},{question:`GRADEのEtDフレームワークの主な目的は？`,options:[`エビデンスの検索効率化`,`意思決定の改善点特定`,`研究デザインの評価`,`統計解析の実施`],correctIndex:1,reference:`EtDフレームワーク`,explanation:`EtD（Evidence to Decision）フレームワークは、推奨に至るための構造化されたアプローチを提供し、意思決定プロセスの透明性を高め改善点を特定することを主な目的としています。`,quote:`GRADEワーキンググループは、過去20年にわたって、これらの決定を透明にし、関連するプロセスにおけるバイアスを減少させるための構造化されたフレームワークを開発してきました。これらのフレームワークをエビデンスから決定へのフレームワーク（Evidence to Decision Frameworks）と呼びます。`},{question:`ガイドライン文書の最終的な作成責任者は？`,options:[`議長または執筆委員会`,`エビデンスレビューチーム`,`外部レビュアー`,`患者代表`],correctIndex:0,reference:`ガイドライン作成`,explanation:`ガイドライン作成グループの議長または執筆委員会がガイドラインの執筆を担当します。すべてのパネルメンバーは少なくとも最終草稿をレビューし承認することが求められます。`,quote:`通常、ガイドライン作成グループの議長または執筆委員会がガイドラインの執筆を担当します。`},{question:`エビデンスの確実性が高く、望ましい効果が大きい場合の推奨は？`,options:[`条件付き推奨`,`強い勧告`,`適正診療声明`,`推奨なし`],correctIndex:1,reference:`推奨の強さ`,explanation:`強い推奨は、すべての基準がその選択肢を推奨する方向を指し示している場合に発行されます。エビデンスの確実性が高く、望ましい効果が明確に大きい場合は強い推奨が適切です。`,quote:`強い推奨は、すべての基準がその選択肢を推奨する方向を指し示している場合に発行されます。例えば、明確な正味の健康上の利益があり、価値観の違いが役割を果たす可能性が低く、選択肢が高額でなく、公平性、受容性、実現可能性に関する懸念がない場合です。`},{question:`推奨の作成はいつ行うべきか？`,options:[`PICO作成前`,`文献検索の開始時`,`エビデンスプロファイル完成後`,`ガイドライン出版後`],correctIndex:2,reference:`推奨の作成`,explanation:`推奨の作成は、エビデンスレビューチームがエビデンスプロファイルを作成し、各アウトカムのエビデンスの確実性を評価した後に行われます。これにより科学的根拠に基づいた推奨が可能になります。`,quote:`エビデンスレビューチームは、バイアスのリスクやその他の要因について個々の研究を評価し、エビデンスを統合し、エビデンスプロファイルを作成します。`},{question:`ガイドラインの更新が必要になる状況は？`,options:[`パネルメンバーの交代時`,`毎年の定期更新`,`新しいエビデンスがそれを正当化する場合`,`他の組織がガイドラインを更新した場合`],correctIndex:2,reference:`ガイドライン更新`,explanation:`ガイドラインの更新は、新しいエビデンスがそれを正当化する場合に必要です。定期的なモニタリングと更新基準に基づいて判断されます。`,quote:`ガイドラインを最新かつ適切に保つために、新しいエビデンスがそれを正当化する場合には更新が必要です。`},{question:`GRADEでは、エビデンスの確実性が低い場合、推奨を出すことはできない`,options:[`正しい`,`誤り`],correctIndex:1,reference:`推奨の強さ`,explanation:`GRADEでは、エビデンスの確実性が低い場合でも推奨を出すことができます。エビデンスが低い場合でも、生命を脅かす状況での利益を示唆する場合など、強い推奨が正当化される状況もあります。`,quote:`しかし、低いまたは非常に低い確実性のエビデンスしか利用できないが、強い推奨が正当化される状況がいくつかあります。`},{question:`EtD（Evidence to Decision）フレームワークの特徴は？`,options:[`エビデンスレビューチームのみが使用する`,`統計解析に特化している`,`研究デザインの評価のみに使用される`,`パネル全メンバーが関与可能`],correctIndex:3,reference:`EtDフレームワーク`,explanation:`EtDフレームワークは、ガイドラインパネルの全メンバーがエビデンスを検討し、判定に参加できる構造を提供します。パネルメンバーの独自の洞察も追加の考慮事項として反映できます。`,quote:`ガイドラインパネルがエビデンスを検討する際、ガイドラインパネルメンバーが持つ独自の洞察は、特定の基準に関する判定が行われる前に、追加の考慮事項の欄に追加できます。`},{question:`推奨の透明性を確保するために最も重要なことは？`,options:[`研究数を増やすこと`,`意思決定プロセスの透明化`,`外部レビューを省略すること`,`推奨を簡略化すること`],correctIndex:1,reference:`推奨の透明性`,explanation:`推奨の透明性を確保するためには、意思決定プロセスを透明にすることが最も重要です。EtDフレームワークは判定の根拠を文書化し、推奨に至った理由を明確にします。`,quote:`使用されたアプローチの透明性が重要。`},{question:`良い推奨文の条件として最も重要なのは？`,options:[`具体的・実行可能であること`,`短い文であること`,`専門用語を多く含むこと`,`一般的な表現を使うこと`],correctIndex:0,reference:`推奨文の作成`,explanation:`ガイドラインパネルの主な目標は、対象読者にとって具体的で実行可能かつ理解しやすい推奨を作成することです。構造化された文言を使用し、方向性と強さが明確に示されるべきです。`,quote:`ガイドラインパネルの主な目標は、対象読者にとって具体的で、実行可能で、理解しやすい推奨を作成することです。`},{question:`推奨の強さに影響する要因は？`,options:[`エビデンスの確実性`,`利益と害のバランス`,`費用対効果`,`上記すべて`],correctIndex:3,reference:`推奨の強さ`,explanation:`推奨の強さには、エビデンスの確実性、利益と害のバランス、費用対効果を含む多くの基準が影響します。これらに加え、公平性、受容性、実現可能性なども考慮されます。`,quote:`基準には、問題の重要性または優先度、望ましい健康効果の大きさ、望ましくない健康効果の大きさ、エビデンスの確実性、根底にある価値観、効果のバランス、必要な資源、費用対効果の考慮、公平性、受容性、実現可能性が含まれます。`},{question:`利益相反の管理はいつ行うべきか？`,options:[`プロセス開始前`,`エビデンス評価後`,`推奨策定後`,`ガイドライン出版後`],correctIndex:0,reference:`利益相反`,explanation:`利益相反への配慮は、ガイドライン開発プロセスの早い段階で行うべきです。推奨の策定に参加できるかどうかを左右する可能性のある利益相反は、事前に特定し管理する必要があります。`,quote:`また、推奨の策定に参加できるかどうかを左右する可能性のある利益相反についても以前に述べました。`},{question:`条件付き推奨は、特定の状況下でのみ適用される推奨である`,options:[`正しい`,`誤り`],correctIndex:0,reference:`条件付き推奨`,explanation:`条件付き推奨は個別の状況に依存する推奨です。実装にあたって相当な支援を要することが多く、その適用条件が明確に記述されるべきです。`,quote:`条件付き推奨は、実装にあたって相当な支援を要することが多い。条件を記述すべきである。`},{question:`外部レビューの主な目的は？`,options:[`コスト削減`,`スケジュールの短縮`,`より広い視点からの検証`,`著者数の増加`],correctIndex:2,reference:`外部レビュー`,explanation:`ピアレビューは、より広い読者層および重要な視点からのインプットを確保し、ガイドライン作成グループが含めていなかった可能性のある視点を取り入れることを目的とします。`,quote:`ピアレビューは、より広い読者層および重要な視点からのインプットを確保するものであり、ガイドライン作成グループが含めていなかった可能性のある視点を取り入れ、推奨の正確性、実用性、明確性、構成、有用性を確保します。`},{question:`ガイドラインの普及・実装に必要な要素は？`,options:[`実行可能な推奨の臨床での採用`,`対象読者に適した形式でのアクセス`,`パネルメンバーの能動的な役割`,`上記すべて`],correctIndex:3,reference:`普及と実装`,explanation:`普及と実装には、実行可能な推奨の臨床での採用、対象読者に適した形式でのアクセス、パネルメンバーの能動的な役割のすべてが必要です。認知度の向上とアクセスの容易化が重要です。`,quote:`普及は認知度を高め、推奨とガイドライン成果物をアクセスしやすくすることを目的とする。実装は実行可能な推奨が臨床で採用されることを確保することを目的とする。パネルメンバーは普及と実装において能動的な役割を果たすことができる。`},{question:`GRADEのEtDフレームワークは、エビデンスから推奨への移行を体系化する`,options:[`正しい`,`誤り`],correctIndex:0,reference:`EtDフレームワーク`,explanation:`EtDフレームワークは、エビデンスから推奨への移行を構造化・体系化するためのツールです。質問、評価、結論、提示の段階を経て、透明性のある推奨策定を支援します。`,quote:`フレームワークは、質問に関する必要な詳細、特定の基準に従って評価され医療技術評価やシステマティックレビューで要約されたエビデンスを整理し、実装方法や実装中に注意すべき事項を含む結論の種類、および実施されるべき研究を記述します。`},{question:`推奨の方向性を決定する際に考慮すべき要因は？`,options:[`望ましい帰結と望ましくない帰結のバランス`,`患者の価値観と選好`,`コストと公平性`,`すべて`],correctIndex:3,reference:`推奨の方向性`,explanation:`推奨の方向性の決定には、望ましい帰結と望ましくない帰結のバランス、患者の価値観、コスト、公平性、受容性、実現可能性など、すべての要因を総合的に考慮します。`,quote:`推奨は、健康上の利益と害を超えた望ましい帰結と望ましくない帰結のバランスによって決定されることを強調することが重要であり、したがって健康効果は、より一般的な用語である帰結とは用語上も区別されます。`},{question:`推奨文の表現で最も重要なことは？`,options:[`明確なメッセージ`,`学術的な文体`,`長い説明文`,`統計値の記載`],correctIndex:0,reference:`推奨文の作成`,explanation:`推奨文では、明確で実行可能なメッセージが最も重要です。対象集団、介入、推奨の強さ、エビデンスの確実性を含め、読者が何をすべきか明確に理解できる表現を使用すべきです。`,quote:`推奨には以下を記述すべきである：誰が推奨を行っているか、対象集団、介入、推奨の強さ、エビデンスの確実性。`},{question:`エビデンスの確実性が中程度の場合、通常どのような推奨になるか？`,options:[`強い推奨（賛成）`,`強い推奨（反対）`,`適正診療声明`,`条件付き推奨`],correctIndex:3,reference:`推奨の強さ`,explanation:`エビデンスの確実性が中程度の場合、他の基準の判定によりますが、確実性が十分に高くないため条件付き推奨となることが多いです。強い推奨にはすべての基準が揃う必要があります。`,quote:`条件付き推奨、または一部の組織では弱い推奨と呼ばれるものは、推奨される行動方針が対象集団において明確な正味の帰結をもたらすという確信に関して、すべての要素が揃っていないことを意味します。`},{question:`ガイドライン実装の最初のステップは？`,options:[`実行可能な推奨の採用`,`統計解析の実施`,`新しい研究の開始`,`パネルの解散`],correctIndex:0,reference:`実装`,explanation:`ガイドライン実装の最初のステップは、実行可能な推奨が臨床で採用されることを確保することです。病院プロトコルの修正や意思決定支援ツールへの組み込みなどが具体的な実装方法です。`,quote:`実装は実行可能な推奨が臨床で採用されることを確保することを目的とする。`}]}],ce=[{number:1,title:`Module 1：学習目標と概要・ガイドラインプロセス・利益相反`,icon:`📘`,description:`INGUIDEプログラムの導入。ガイドラインの定義、推奨の構造、信頼性の高いガイドラインの6原則、GIN-McMasterチェックリスト、ガイドラインプロセスに関わる人々、グループメンバーシップ、消費者・ステークホルダーの関与、利益相反の管理について学びます。`,raw:ee},{number:2,title:`Module 2：ガイドライン開発プロセスとアウトカム`,icon:`📗`,description:`ガイドライン開発プロセスの詳細。GIN-McMasterチェックリスト、ガイドラインと質問、適切な質問の生成、PICOフレームワーク、アウトカムの選定と重要度の評価について学びます。`,raw:te},{number:3,title:`Module 3：健康上の利益と害・システマティックレビュー・エビデンスの要約`,icon:`📙`,description:`健康上の利益と害のバランス、GRADEワーキンググループプロセス、システマティックレビューとメタアナリシス、エビデンスの確実性の判定について学びます。`,raw:S},{number:4,title:`Module 4：推奨の作成・推奨の種類・報告とピアレビュー`,icon:`📕`,description:`推奨の作成プロセス、推奨の方向性と強さ、条件付き推奨と強い推奨、Evidence to Decisionフレームワーク、投票とコンセンサス、推奨の文言、グッドプラクティスステートメント、報告・普及・更新について学びます。`,raw:ne}];function le(){let e=[{id:`welcome`,title:`はじめに`,icon:`🏠`,category:`ガイド`,description:`INGUIDE 学習アプリへようこそ。INGUIDE（International Guideline Development）プログラム Level 1の学習資料を日本語で体系的に学習できます。`,moduleNumber:0,content:[{type:`heading`,text:`INGUIDE学習アプリの使い方`},{type:`paragraph`,text:`このアプリでは、INGUIDEプログラム Level 1の4つのモジュールの学習資料を日本語で閲覧できます。各モジュールは複数のパートに分かれており、左側のサイドバーから選択して学習を進めることができます。`},{type:`list`,items:[`左のサイドバーからモジュール・セクションを選択して学習を開始`,`サブセクションをクリックして詳細な内容にジャンプ`,`💡マークの補足情報をクリックして追加の解説を展開`,`モバイルではハンバーガーメニューからナビゲーション`]},{type:`divider`},{type:`heading`,text:`モジュール構成`},{type:`ordered-list`,items:[`**Module 1** — 学習目標と概要・ガイドラインプロセス・利益相反への配慮`,`**Module 2** — ガイドライン開発プロセスとアウトカム`,`**Module 3** — 健康上の利益と害・システマティックレビュー・エビデンスの要約`,`**Module 4** — 推奨の作成・推奨の種類・報告とピアレビュー`]},{type:`divider`},{type:`heading`,text:`INGUIDEプログラムについて`},{type:`paragraph`,text:`INGUIDEプログラムは、Guidelines International Network（GIN）とMcMaster大学GRADEセンター（McGRADE）の共同により開発された、ガイドライン開発の資格認定・認証プログラムです。Level 1は「ガイドラインパネルメンバー（ガイドライン開発グループメンバー）」の役割に焦点を当てたコースです。`}],subSections:[]}];for(let t of ce){let n=oe(t.raw,t.number,t);e.push(...n);let r=se.find(e=>e.moduleNumber===t.number);r&&e.push({id:`quiz-module-${t.number}`,title:r.title,icon:`📝`,category:`Module ${t.number} クイズ`,description:r.description,moduleNumber:t.number,isQuiz:!0,quiz:r,content:[],subSections:[]})}return e}var w=le(),ue=`modulepreload`,T=function(e){return`/INGUIDE/`+e},E={},de=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=T(t,n),t in E)return;E[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ue,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},fe=(0,d.lazy)(()=>de(()=>import(`./ContentPanel--DIu2OyO.js`),[]));function pe(){let[e,t]=(0,d.useState)(w[0]?.id||``),[n,r]=(0,d.useState)(null),[i,a]=(0,d.useState)(!1),[o,s]=(0,d.useState)(``),c=(0,d.useMemo)(()=>{if(!o.trim())return w;let e=o.toLowerCase();return w.filter(t=>{let n=t.title.toLowerCase().includes(e),r=t.description?.toLowerCase().includes(e),i=t.subSections?.some(t=>t.title.toLowerCase().includes(e));return n||r||i})},[o]),l=(0,d.useMemo)(()=>w.findIndex(t=>t.id===e),[e]),u=(0,d.useCallback)((e,n=null)=>{t(e),r(n),a(!1),document.getElementById(`content-panel`)?.scrollTo({top:0,behavior:`smooth`})},[]),f=(0,d.useCallback)(e=>{let n=l+e;n>=0&&n<w.length&&(t(w[n].id),r(null),document.getElementById(`content-panel`)?.scrollTo({top:0,behavior:`smooth`}))},[l]),p=(0,d.useCallback)(()=>{a(e=>!e)},[]),m=(0,d.useCallback)(()=>{sessionStorage.removeItem(`inguide_auth`),window.location.reload()},[]),g=w.find(t=>t.id===e),_=l>0,v=l<w.length-1,y=_?w[l-1]:null,b=v?w[l+1]:null,ee=w.length>0?Math.round((l+1)/w.length*100):0;return(0,h.jsxs)(`div`,{className:`h-screen flex flex-col bg-slate-50`,children:[(0,h.jsxs)(`header`,{className:`bg-white border-b border-slate-200 shrink-0 z-30`,children:[(0,h.jsxs)(`div`,{className:`px-4 py-3 flex items-center justify-between`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(`button`,{onClick:p,className:`lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer`,"aria-label":`メニューを開く`,children:(0,h.jsx)(`svg`,{className:`w-5 h-5 text-slate-600`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:i?(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`}):(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 6h16M4 12h16M4 18h16`})})}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(`div`,{className:`w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center`,children:(0,h.jsx)(`svg`,{className:`w-4 h-4 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253`})})}),(0,h.jsx)(`h1`,{className:`text-lg font-bold text-slate-800`,children:`INGUIDE`})]})]}),(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsxs)(`span`,{className:`hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full`,children:[(0,h.jsx)(`span`,{className:`font-medium text-slate-600`,children:l+1}),(0,h.jsx)(`span`,{children:`/`}),(0,h.jsx)(`span`,{children:w.length})]}),(0,h.jsxs)(`button`,{onClick:m,className:`text-sm text-slate-500 hover:text-slate-700 px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5`,children:[(0,h.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1`})}),(0,h.jsx)(`span`,{className:`hidden sm:inline`,children:`ログアウト`})]})]})]}),(0,h.jsx)(`div`,{className:`h-0.5 bg-slate-100`,children:(0,h.jsx)(`div`,{className:`h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 ease-out`,style:{width:`${ee}%`}})})]}),(0,h.jsxs)(`div`,{className:`flex flex-1 overflow-hidden relative`,children:[i&&(0,h.jsx)(`div`,{className:`lg:hidden fixed inset-0 bg-black/40 z-20 transition-opacity`,onClick:()=>a(!1)}),(0,h.jsxs)(`aside`,{className:`
            fixed lg:static inset-y-0 left-0 z-20
            w-72 bg-white border-r border-slate-200 flex flex-col
            transform transition-transform duration-200 ease-in-out
            lg:transform-none lg:translate-x-0
            ${i?`translate-x-0 top-[53px]`:`-translate-x-full`}
          `,children:[(0,h.jsx)(`div`,{className:`px-3 pt-3 pb-1 shrink-0`,children:(0,h.jsxs)(`div`,{className:`relative`,children:[(0,h.jsx)(`svg`,{className:`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),(0,h.jsx)(`input`,{type:`text`,value:o,onChange:e=>s(e.target.value),placeholder:`セクションを検索...`,className:`w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-300 transition-all`}),o&&(0,h.jsx)(`button`,{onClick:()=>s(``),className:`absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-slate-200 rounded cursor-pointer`,children:(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-400`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]})}),(0,h.jsxs)(`div`,{className:`flex-1 overflow-y-auto`,children:[(0,h.jsx)(x,{sections:c,selectedSection:e,selectedSubSection:n,onSelect:u}),c.length===0&&o&&(0,h.jsx)(`div`,{className:`px-6 py-8 text-center`,children:(0,h.jsxs)(`p`,{className:`text-sm text-slate-400`,children:[`「`,o,`」に一致するセクションがありません`]})})]}),(0,h.jsx)(`div`,{className:`px-4 py-2 border-t border-slate-100 shrink-0`,children:(0,h.jsxs)(`p`,{className:`text-xs text-slate-400 text-center`,children:[w.length,` セクション`]})})]}),(0,h.jsx)(`main`,{id:`content-panel`,className:`flex-1 overflow-y-auto scroll-smooth`,children:(0,h.jsx)(d.Suspense,{fallback:(0,h.jsx)(`div`,{className:`flex items-center justify-center h-full`,children:(0,h.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,h.jsx)(`div`,{className:`animate-spin w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full`}),(0,h.jsx)(`p`,{className:`text-sm text-slate-400`,children:`読み込み中...`})]})}),children:(0,h.jsx)(fe,{section:g,selectedSubSection:n,hasPrev:_,hasNext:v,prevSection:y,nextSection:b,onNavigate:f})})})]})]})}var me=(0,d.memo)(pe);function D(){let[e,t]=(0,d.useState)(()=>sessionStorage.getItem(`inguide_auth`)===`true`),n=(0,d.useCallback)(()=>{sessionStorage.setItem(`inguide_auth`,`true`),t(!0)},[]);return e?(0,h.jsx)(me,{}):(0,h.jsx)(_,{onLogin:n})}(0,f.createRoot)(document.getElementById(`root`)).render((0,h.jsx)(d.StrictMode,{children:(0,h.jsx)(D,{})}));export{i as n,n as r,m as t};