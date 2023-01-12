!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){"use strict";r.r(n);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};function o(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function i(t){return"function"==typeof t}var u=!1,s={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;u=t},get useDeprecatedSynchronousErrorHandling(){return u}};function c(t){setTimeout(function(){throw t},0)}var f={closed:!0,next:function(t){},error:function(t){if(s.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},a=Array.isArray||function(t){return t&&"number"==typeof t.length};function p(t){return null!==t&&"object"==typeof t}function h(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,n){return n+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}h.prototype=Object.create(Error.prototype);var l=h,d=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var n;if(!this.closed){var r=this._parentOrParents,e=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(var u=0;u<r.length;++u){r[u].remove(this)}if(i(e))try{e.call(this)}catch(t){n=t instanceof l?b(t.errors):[t]}if(a(o)){u=-1;for(var s=o.length;++u<s;){var c=o[u];if(p(c))try{c.unsubscribe()}catch(t){n=n||[],t instanceof l?n=n.concat(b(t.errors)):n.push(t)}}}if(n)throw new l(n)}},t.prototype.add=function(n){var r=n;if(!n)return t.EMPTY;switch(typeof n){case"function":r=new t(n);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var e=r;(r=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+n+" added to Subscription.")}var o=r._parentOrParents;if(null===o)r._parentOrParents=this;else if(o instanceof t){if(o===this)return r;r._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return r;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[r]:i.push(r),r},t.prototype.remove=function(t){var n=this._subscriptions;if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function b(t){return t.reduce(function(t,n){return t.concat(n instanceof l?n.errors:n)},[])}var y="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),v=function(t){function n(r,e,o){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=f;break;case 1:if(!r){i.destination=f;break}if("object"==typeof r){r instanceof n?(i.syncErrorThrowable=r.syncErrorThrowable,i.destination=r,r.add(i)):(i.syncErrorThrowable=!0,i.destination=new _(i,r));break}default:i.syncErrorThrowable=!0,i.destination=new _(i,r,e,o)}return i}return o(n,t),n.prototype[y]=function(){return this},n.create=function(t,r,e){var o=new n(t,r,e);return o.syncErrorThrowable=!1,o},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},n.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},n.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},n}(d),_=function(t){function n(n,r,e,o){var u,s=t.call(this)||this;s._parentSubscriber=n;var c=s;return i(r)?u=r:r&&(u=r.next,e=r.error,o=r.complete,r!==f&&(i((c=Object.create(r)).unsubscribe)&&s.add(c.unsubscribe.bind(c)),c.unsubscribe=s.unsubscribe.bind(s))),s._context=c,s._next=u,s._error=e,s._complete=o,s}return o(n,t),n.prototype.next=function(t){if(!this.isStopped&&this._next){var n=this._parentSubscriber;s.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},n.prototype.error=function(t){if(!this.isStopped){var n=this._parentSubscriber,r=s.useDeprecatedSynchronousErrorHandling;if(this._error)r&&n.syncErrorThrowable?(this.__tryOrSetError(n,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(n.syncErrorThrowable)r?(n.syncErrorValue=t,n.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;c(t)}}},n.prototype.complete=function(){var t=this;if(!this.isStopped){var n=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};s.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?(this.__tryOrSetError(n,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},n.prototype.__tryOrUnsub=function(t,n){try{t.call(this._context,n)}catch(t){if(this.unsubscribe(),s.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},n.prototype.__tryOrSetError=function(t,n,r){if(!s.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,r)}catch(n){return s.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(c(n),!0)}return!1},n.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},n}(v);var w="function"==typeof Symbol&&Symbol.observable||"@@observable";function m(){}function S(t){return t?1===t.length?t[0]:function(n){return t.reduce(function(t,n){return n(t)},n)}:m}var x=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(n){var r=new t;return r.source=this,r.operator=n,r},t.prototype.subscribe=function(t,n,r){var e=this.operator,o=function(t,n,r){if(t){if(t instanceof v)return t;if(t[y])return t[y]()}return t||n||r?new v(t,n,r):new v(f)}(t,n,r);if(e?o.add(e.call(o,this.source)):o.add(this.source||s.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),s.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){s.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=n),!function(t){for(;t;){var n=t,r=n.closed,e=n.destination,o=n.isStopped;if(r||o)return!1;t=e&&e instanceof v?e:null}return!0}(t)?console.warn(n):t.error(n)}},t.prototype.forEach=function(t,n){var r=this;return new(n=g(n))(function(n,e){var o;o=r.subscribe(function(n){try{t(n)}catch(t){e(t),o&&o.unsubscribe()}},e,n)})},t.prototype._subscribe=function(t){var n=this.source;return n&&n.subscribe(t)},t.prototype[w]=function(){return this},t.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return 0===t.length?this:S(t)(this)},t.prototype.toPromise=function(t){var n=this;return new(t=g(t))(function(t,r){var e;n.subscribe(function(t){return e=t},function(t){return r(t)},function(){return t(e)})})},t.create=function(n){return new t(n)},t}();function g(t){if(t||(t=s.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function E(t,n){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new O(t,n))}}var O=function(){function t(t,n){this.project=t,this.thisArg=n}return t.prototype.call=function(t,n){return n.subscribe(new T(t,this.project,this.thisArg))},t}(),T=function(t){function n(n,r,e){var o=t.call(this,n)||this;return o.project=r,o.count=0,o.thisArg=e||o,o}return o(n,t),n.prototype._next=function(t){var n;try{n=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(n)},n}(v);Object.prototype.toString;function j(t,n,r,e){return i(r)&&(e=r,r=void 0),e?j(t,n,r).pipe(E(function(t){return a(t)?e.apply(void 0,t):e(t)})):new x(function(e){!function t(n,r,e,o,i){var u;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(n)){var s=n;n.addEventListener(r,e,i),u=function(){return s.removeEventListener(r,e,i)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(n)){var c=n;n.on(r,e),u=function(){return c.off(r,e)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(n)){var f=n;n.addListener(r,e),u=function(){return f.removeListener(r,e)}}else{if(!n||!n.length)throw new TypeError("Invalid event target");for(var a=0,p=n.length;a<p;a++)t(n[a],r,e,o,i)}o.add(u)}(t,n,function(t){arguments.length>1?e.next(Array.prototype.slice.call(arguments)):e.next(t)},e,r)})}function P(t){return t&&"function"==typeof t.schedule}var I=function(t){return function(n){for(var r=0,e=t.length;r<e&&!n.closed;r++)n.next(t[r]);n.complete()}};function N(t,n){return new x(function(r){var e=new d,o=0;return e.add(n.schedule(function(){o!==t.length?(r.next(t[o++]),r.closed||e.add(this.schedule())):r.complete()})),e})}function V(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t[t.length-1];return P(r)?(t.pop(),N(t,r)):function(t,n){return n?N(t,n):new x(I(t))}(t)}var k=function(t){function n(n,r,e){var o=t.call(this)||this;return o.parent=n,o.outerValue=r,o.outerIndex=e,o.index=0,o}return o(n,t),n.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},n.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},n.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},n}(v);function A(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var D=A(),H=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function C(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var Y=function(t){if(t&&"function"==typeof t[w])return e=t,function(t){var n=e[w]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(t)};if(H(t))return I(t);if(C(t))return r=t,function(t){return r.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,c),t};if(t&&"function"==typeof t[D])return n=t,function(t){for(var r=n[D]();;){var e=r.next();if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof r.return&&t.add(function(){r.return&&r.return()}),t};var n,r,e,o=p(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+o+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function L(t,n,r,e,o){if(void 0===o&&(o=new k(t,r,e)),!o.closed)return n instanceof x?n.subscribe(o):Y(n)(o)}var M=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.notifyNext=function(t,n,r,e,o){this.destination.next(n)},n.prototype.notifyError=function(t,n){this.destination.error(t)},n.prototype.notifyComplete=function(t){this.destination.complete()},n}(v);function R(t,n){if(null!=t){if(function(t){return t&&"function"==typeof t[w]}(t))return function(t,n){return new x(function(r){var e=new d;return e.add(n.schedule(function(){var o=t[w]();e.add(o.subscribe({next:function(t){e.add(n.schedule(function(){return r.next(t)}))},error:function(t){e.add(n.schedule(function(){return r.error(t)}))},complete:function(){e.add(n.schedule(function(){return r.complete()}))}}))})),e})}(t,n);if(C(t))return function(t,n){return new x(function(r){var e=new d;return e.add(n.schedule(function(){return t.then(function(t){e.add(n.schedule(function(){r.next(t),e.add(n.schedule(function(){return r.complete()}))}))},function(t){e.add(n.schedule(function(){return r.error(t)}))})})),e})}(t,n);if(H(t))return N(t,n);if(function(t){return t&&"function"==typeof t[D]}(t)||"string"==typeof t)return function(t,n){if(!t)throw new Error("Iterable cannot be null");return new x(function(r){var e,o=new d;return o.add(function(){e&&"function"==typeof e.return&&e.return()}),o.add(n.schedule(function(){e=t[D](),o.add(n.schedule(function(){if(!r.closed){var t,n;try{var o=e.next();t=o.value,n=o.done}catch(t){return void r.error(t)}n?r.complete():(r.next(t),this.schedule())}}))})),o})}(t,n)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function U(t,n){return n?R(t,n):t instanceof x?t:new x(Y(t))}var F=function(){function t(t,n){void 0===n&&(n=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=n}return t.prototype.call=function(t,n){return n.subscribe(new q(t,this.project,this.concurrent))},t}(),q=function(t){function n(n,r,e){void 0===e&&(e=Number.POSITIVE_INFINITY);var o=t.call(this,n)||this;return o.project=r,o.concurrent=e,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return o(n,t),n.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},n.prototype._tryNext=function(t){var n,r=this.index++;try{n=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(n,t,r)},n.prototype._innerSub=function(t,n,r){var e=new k(this,void 0,void 0);this.destination.add(e),L(this,t,n,r,e)},n.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},n.prototype.notifyNext=function(t,n,r,e,o){this.destination.next(n)},n.prototype.notifyComplete=function(t){var n=this.buffer;this.remove(t),this.active--,n.length>0?this._next(n.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},n}(M);function W(t){return t}function z(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(n,r,e){return void 0===e&&(e=Number.POSITIVE_INFINITY),"function"==typeof r?function(o){return o.pipe(t(function(t,e){return U(n(t,e)).pipe(E(function(n,o){return r(t,n,e,o)}))},e))}:("number"==typeof r&&(e=r),function(t){return t.lift(new F(n,e))})}(W,t)}function B(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return z(1)(V.apply(void 0,t))}var X=function(){function t(t,n){this.observables=t,this.project=n}return t.prototype.call=function(t,n){return n.subscribe(new G(t,this.observables,this.project))},t}(),G=function(t){function n(n,r,e){var o=t.call(this,n)||this;o.observables=r,o.project=e,o.toRespond=[];var i=r.length;o.values=new Array(i);for(var u=0;u<i;u++)o.toRespond.push(u);for(u=0;u<i;u++){var s=r[u];o.add(L(o,s,s,u))}return o}return o(n,t),n.prototype.notifyNext=function(t,n,r,e,o){this.values[r]=n;var i=this.toRespond;if(i.length>0){var u=i.indexOf(r);-1!==u&&i.splice(u,1)}},n.prototype.notifyComplete=function(){},n.prototype._next=function(t){if(0===this.toRespond.length){var n=[t].concat(this.values);this.project?this._tryProject(n):this.destination.next(n)}},n.prototype._tryProject=function(t){var n;try{n=this.project.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(n)},n}(M);var J=function(){function t(t){this.project=t}return t.prototype.call=function(t,n){return n.subscribe(new K(t,this.project))},t}(),K=function(t){function n(n,r){var e=t.call(this,n)||this;return e.project=r,e.index=0,e}return o(n,t),n.prototype._next=function(t){var n,r=this.index++;try{n=this.project(t,r)}catch(t){return void this.destination.error(t)}this._innerSub(n,t,r)},n.prototype._innerSub=function(t,n,r){var e=this.innerSubscription;e&&e.unsubscribe();var o=new k(this,void 0,void 0);this.destination.add(o),this.innerSubscription=L(this,t,n,r,o)},n.prototype._complete=function(){var n=this.innerSubscription;n&&!n.closed||t.prototype._complete.call(this),this.unsubscribe()},n.prototype._unsubscribe=function(){this.innerSubscription=null},n.prototype.notifyComplete=function(n){this.destination.remove(n),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},n.prototype.notifyNext=function(t,n,r,e,o){this.destination.next(n)},n}(M);var Q=function(){function t(){}return t.prototype.call=function(t,n){return n.subscribe(new Z(t))},t}(),Z=function(t){function n(n){var r=t.call(this,n)||this;return r.hasPrev=!1,r}return o(n,t),n.prototype._next=function(t){var n;this.hasPrev?n=[this.prev,t]:this.hasPrev=!0,this.prev=t,n&&this.destination.next(n)},n}(v);function $(t){return function(n){return n.lift(new tt(t))}}var tt=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,n){var r=new nt(t),e=L(r,this.notifier);return e&&!r.seenValue?(r.add(e),n.subscribe(r)):r},t}(),nt=function(t){function n(n){var r=t.call(this,n)||this;return r.seenValue=!1,r}return o(n,t),n.prototype.notifyNext=function(t,n,r,e,o){this.seenValue=!0,this.complete()},n.prototype.notifyComplete=function(){},n}(M);const rt=document.querySelector("canvas"),et=document.querySelector("#range"),ot=document.querySelector("#color"),it=rt.getContext("2d"),ut=rt.getBoundingClientRect(),st=window.devicePixelRatio;rt.width=ut.width*st,rt.height=ut.height*st,it.scale(st,st);const ct=j(rt,"mousemove"),ft=j(rt,"mousedown"),at=j(rt,"mouseup"),pt=j(rt,"mouseout");function ht(t){return j(t,"input").pipe(E(t=>t.target.value),function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t[t.length-1];return P(r)?(t.pop(),function(n){return B(t,n,r)}):function(n){return B(t,n)}}(t.value))}const lt=ht(et),dt=ht(ot);ft.pipe(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n){var r;"function"==typeof t[t.length-1]&&(r=t.pop());var e=t;return n.lift(new X(e,r))}}(lt,dt,(t,n,r)=>({lineWidth:n,strokeStyle:r})),function t(n,r){return"function"==typeof r?function(e){return e.pipe(t(function(t,e){return U(n(t,e)).pipe(E(function(n,o){return r(t,n,e,o)}))}))}:function(t){return t.lift(new J(n))}}(t=>ct.pipe(E(n=>({x:n.offsetX,y:n.offsetY,options:t})),function(t){return t.lift(new Q)},$(at),$(pt)))).subscribe(([t,n])=>{const{lineWidth:r,strokeStyle:e}=t.options;it.lineWidth=r,it.strokeStyle=e,it.beginPath(),it.moveTo(t.x,t.y),it.lineTo(n.x,n.y),it.stroke()})}]);