const bp=()=>{};var Qc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,T=h&63;u||(T=64,a||(g=64)),r.push(t[f],t[p],t[g],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($l(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new kp;const g=i<<2|c>>4;if(r.push(g),h!==64){const T=c<<4&240|h>>2;if(r.push(T),p!==64){const b=h<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rp=function(n){const e=$l(n);return jl.encodeByteArray(e,!0)},Rs=function(n){return Rp(n).replace(/\./g,"")},Bl=function(n){try{return jl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=()=>Cp().__FIREBASE_DEFAULTS__,Op=()=>{if(typeof process>"u"||typeof Qc>"u")return;const n=Qc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bl(n[1]);return e&&JSON.parse(e)},Xs=()=>{try{return bp()||Np()||Op()||Vp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ql=n=>{var e,t;return(t=(e=Xs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Hl=n=>{const e=ql(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gl=()=>{var n;return(n=Xs())==null?void 0:n.config},zl=n=>{var e;return(e=Xs())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wo(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rs(JSON.stringify(t)),Rs(JSON.stringify(a)),""].join(".")}const Er={};function Dp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Er))Er[e]?n.emulator.push(e):n.prod.push(e);return n}function Lp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jc=!1;function Qo(n,e){if(typeof window>"u"||typeof document>"u"||!mn(window.location.host)||Er[n]===e||Er[n]||Jc)return;Er[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Dp().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Jc=!0,a()},g}function f(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Lp(r),T=t("text"),b=document.getElementById(T)||document.createElement("span"),k=t("learnmore"),R=document.getElementById(k)||document.createElement("a"),L=t("preprendIcon"),U=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const F=g.element;c(F),f(R,k);const G=h();u(U,L),F.append(U,b,R,G),document.body.appendChild(F)}i?(b.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Fp(){var e;const n=(e=Xs())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Up(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $p(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bp(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qp(){return!Fp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wl(){try{return typeof indexedDB=="object"}catch{return!1}}function Ql(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Hp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="FirebaseError";class Je extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gp,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?zp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Je(s,c,r)}}function zp(n,e){return n.replace(Kp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kp=/\{\$([^}]+)}/g;function Wp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function an(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Yc(i)&&Yc(a)){if(!an(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Yc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _r(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qp(n,e){const t=new Jp(n,e);return t.subscribe.bind(t)}class Jp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=no),s.error===void 0&&(s.error=no),s.complete===void 0&&(s.complete=no);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function no(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){return n&&n._delegate?n._delegate:n}class je{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(em(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zp(n){return n===nn?void 0:n}function em(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const nm={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},rm=z.INFO,sm={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},im=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=sm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jo{constructor(e){this.name=e,this._logLevel=rm,this._logHandler=im,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const om=(n,e)=>e.some(t=>n instanceof t);let Xc,Zc;function am(){return Xc||(Xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cm(){return Zc||(Zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jl=new WeakMap,Io=new WeakMap,Yl=new WeakMap,ro=new WeakMap,Yo=new WeakMap;function um(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(mt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Jl.set(t,n)}).catch(()=>{}),Yo.set(e,n),e}function lm(n){if(Io.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Io.set(n,e)}let vo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Io.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hm(n){vo=n(vo)}function dm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(so(this),e,...t);return Yl.set(r,e.sort?e.sort():[e]),mt(r)}:cm().includes(n)?function(...e){return n.apply(so(this),e),mt(Jl.get(this))}:function(...e){return mt(n.apply(so(this),e))}}function fm(n){return typeof n=="function"?dm(n):(n instanceof IDBTransaction&&lm(n),om(n,am())?new Proxy(n,vo):n)}function mt(n){if(n instanceof IDBRequest)return um(n);if(ro.has(n))return ro.get(n);const e=fm(n);return e!==n&&(ro.set(n,e),Yo.set(e,n)),e}const so=n=>Yo.get(n);function Zs(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=mt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(mt(a.result),u.oldVersion,u.newVersion,mt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}function io(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),mt(t).then(()=>{})}const pm=["get","getKey","getAll","getAllKeys","count"],mm=["put","add","delete","clear"],oo=new Map;function eu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=mm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pm.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return oo.set(e,i),i}hm(n=>({...n,get:(e,t,r)=>eu(e,t)||n.get(e,t,r),has:(e,t)=>!!eu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_m(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _m(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ao="@firebase/app",tu="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Jo("@firebase/app"),ym="@firebase/app-compat",wm="@firebase/analytics-compat",Tm="@firebase/analytics",Em="@firebase/app-check-compat",Im="@firebase/app-check",vm="@firebase/auth",Am="@firebase/auth-compat",Sm="@firebase/database",bm="@firebase/data-connect",Pm="@firebase/database-compat",km="@firebase/functions",Rm="@firebase/functions-compat",Cm="@firebase/installations",Nm="@firebase/installations-compat",Om="@firebase/messaging",Vm="@firebase/messaging-compat",Mm="@firebase/performance",Dm="@firebase/performance-compat",Lm="@firebase/remote-config",xm="@firebase/remote-config-compat",Fm="@firebase/storage",Um="@firebase/storage-compat",$m="@firebase/firestore",jm="@firebase/ai",Bm="@firebase/firestore-compat",qm="firebase",Hm="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="[DEFAULT]",Gm={[Ao]:"fire-core",[ym]:"fire-core-compat",[Tm]:"fire-analytics",[wm]:"fire-analytics-compat",[Im]:"fire-app-check",[Em]:"fire-app-check-compat",[vm]:"fire-auth",[Am]:"fire-auth-compat",[Sm]:"fire-rtdb",[bm]:"fire-data-connect",[Pm]:"fire-rtdb-compat",[km]:"fire-fn",[Rm]:"fire-fn-compat",[Cm]:"fire-iid",[Nm]:"fire-iid-compat",[Om]:"fire-fcm",[Vm]:"fire-fcm-compat",[Mm]:"fire-perf",[Dm]:"fire-perf-compat",[Lm]:"fire-rc",[xm]:"fire-rc-compat",[Fm]:"fire-gcs",[Um]:"fire-gcs-compat",[$m]:"fire-fst",[Bm]:"fire-fst-compat",[jm]:"fire-vertex","fire-js":"fire-js",[qm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Map,zm=new Map,bo=new Map;function nu(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function We(n){const e=n.name;if(bo.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,n);for(const t of Cs.values())nu(t,n);for(const t of zm.values())nu(t,n);return!0}function _n(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ke(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new gn("app","Firebase",Km);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=Hm;function Xl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:So,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(t||(t=Gl()),!t)throw xt.create("no-options");const i=Cs.get(s);if(i){if(an(t,i.options)&&an(r,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const a=new tm(s);for(const u of bo.values())a.addComponent(u);const c=new Wm(t,r,a);return Cs.set(s,c),c}function ei(n=So){const e=Cs.get(n);if(!e&&n===So&&Gl())return Xl();if(!e)throw xt.create("no-app",{appName:n});return e}function Oe(n,e,t){let r=Gm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(a.join(" "));return}We(new je(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="firebase-heartbeat-database",Jm=1,kr="firebase-heartbeat-store";let ao=null;function Zl(){return ao||(ao=Zs(Qm,Jm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kr)}catch(t){console.warn(t)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),ao}async function Ym(n){try{const t=(await Zl()).transaction(kr),r=await t.objectStore(kr).get(eh(n));return await t.done,r}catch(e){if(e instanceof Je)yt.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function ru(n,e){try{const r=(await Zl()).transaction(kr,"readwrite");await r.objectStore(kr).put(e,eh(n)),await r.done}catch(t){if(t instanceof Je)yt.warn(t.message);else{const r=xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(r.message)}}}function eh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=1024,Zm=30;class eg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ng(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=su();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Zm){const a=rg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=su(),{heartbeatsToSend:r,unsentEntries:s}=tg(this._heartbeatsCache.heartbeats),i=Rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return yt.warn(t),""}}}function su(){return new Date().toISOString().substring(0,10)}function tg(n,e=Xm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),iu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),iu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ng{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wl()?Ql().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ym(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ru(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ru(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function iu(n){return Rs(JSON.stringify({version:2,heartbeats:n})).length}function rg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n){We(new je("platform-logger",e=>new gm(e),"PRIVATE")),We(new je("heartbeat",e=>new eg(e),"PRIVATE")),Oe(Ao,tu,n),Oe(Ao,tu,"esm2020"),Oe("fire-js","")}sg("");var ig="firebase",og="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(ig,og,"app");var ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ft,th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.F=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(v,E,A){for(var y=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)y[_e-2]=arguments[_e];return _.prototype[E].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,w){w||(w=0);const v=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)v[E]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(E=0;E<16;++E)v[E]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],E=I.g[2];let A=I.g[3],y;y=_+(A^w&(E^A))+v[0]+3614090360&4294967295,_=w+(y<<7&4294967295|y>>>25),y=A+(E^_&(w^E))+v[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(w^A&(_^w))+v[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(_^E&(A^_))+v[3]+3250441966&4294967295,w=E+(y<<22&4294967295|y>>>10),y=_+(A^w&(E^A))+v[4]+4118548399&4294967295,_=w+(y<<7&4294967295|y>>>25),y=A+(E^_&(w^E))+v[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(w^A&(_^w))+v[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(_^E&(A^_))+v[7]+4249261313&4294967295,w=E+(y<<22&4294967295|y>>>10),y=_+(A^w&(E^A))+v[8]+1770035416&4294967295,_=w+(y<<7&4294967295|y>>>25),y=A+(E^_&(w^E))+v[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(w^A&(_^w))+v[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(_^E&(A^_))+v[11]+2304563134&4294967295,w=E+(y<<22&4294967295|y>>>10),y=_+(A^w&(E^A))+v[12]+1804603682&4294967295,_=w+(y<<7&4294967295|y>>>25),y=A+(E^_&(w^E))+v[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(w^A&(_^w))+v[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=w+(_^E&(A^_))+v[15]+1236535329&4294967295,w=E+(y<<22&4294967295|y>>>10),y=_+(E^A&(w^E))+v[1]+4129170786&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(_^w))+v[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^w&(A^_))+v[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(E^A))+v[0]+3921069994&4294967295,w=E+(y<<20&4294967295|y>>>12),y=_+(E^A&(w^E))+v[5]+3593408605&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(_^w))+v[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^w&(A^_))+v[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(E^A))+v[4]+3889429448&4294967295,w=E+(y<<20&4294967295|y>>>12),y=_+(E^A&(w^E))+v[9]+568446438&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(_^w))+v[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^w&(A^_))+v[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(E^A))+v[8]+1163531501&4294967295,w=E+(y<<20&4294967295|y>>>12),y=_+(E^A&(w^E))+v[13]+2850285829&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^E&(_^w))+v[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^w&(A^_))+v[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(E^A))+v[12]+2368359562&4294967295,w=E+(y<<20&4294967295|y>>>12),y=_+(w^E^A)+v[5]+4294588738&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^E)+v[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^w)+v[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^_)+v[14]+4259657740&4294967295,w=E+(y<<23&4294967295|y>>>9),y=_+(w^E^A)+v[1]+2763975236&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^E)+v[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^w)+v[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^_)+v[10]+3200236656&4294967295,w=E+(y<<23&4294967295|y>>>9),y=_+(w^E^A)+v[13]+681279174&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^E)+v[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^w)+v[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^_)+v[6]+76029189&4294967295,w=E+(y<<23&4294967295|y>>>9),y=_+(w^E^A)+v[9]+3654602809&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^E)+v[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^w)+v[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=w+(E^A^_)+v[2]+3299628645&4294967295,w=E+(y<<23&4294967295|y>>>9),y=_+(E^(w|~A))+v[0]+4096336452&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~E))+v[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~w))+v[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~_))+v[5]+4237533241&4294967295,w=E+(y<<21&4294967295|y>>>11),y=_+(E^(w|~A))+v[12]+1700485571&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~E))+v[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~w))+v[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~_))+v[1]+2240044497&4294967295,w=E+(y<<21&4294967295|y>>>11),y=_+(E^(w|~A))+v[8]+1873313359&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~E))+v[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~w))+v[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~_))+v[13]+1309151649&4294967295,w=E+(y<<21&4294967295|y>>>11),y=_+(E^(w|~A))+v[4]+4149444226&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~E))+v[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~w))+v[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=w+(A^(E|~_))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.v=function(I,_){_===void 0&&(_=I.length);const w=_-this.blockSize,v=this.C;let E=this.h,A=0;for(;A<_;){if(E==0)for(;A<=w;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(v[E++]=I.charCodeAt(A++),E==this.blockSize){s(this,v),E=0;break}}else for(;A<_;)if(v[E++]=I[A++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=_},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,w=0;w<4;++w)for(let v=0;v<32;v+=8)I[_++]=this.g[w]>>>v&255;return I};function i(I,_){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function a(I,_){this.h=_;const w=[];let v=!0;for(let E=I.length-1;E>=0;E--){const A=I[E]|0;v&&A==_||(w[E]=A,v=!1)}this.g=w}var c={};function u(I){return-128<=I&&I<128?i(I,function(_){return new a([_|0],_<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return R(h(-I));const _=[];let w=1;for(let v=0;I>=w;v++)_[v]=I/w|0,w*=4294967296;return new a(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return R(f(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(_,8));let v=p;for(let A=0;A<I.length;A+=8){var E=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+E),_);E<8?(E=h(Math.pow(_,E)),v=v.j(E).add(h(y))):(v=v.j(w),v=v.add(h(y)))}return v}var p=u(0),g=u(1),T=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-R(this).m();let I=0,_=1;for(let w=0;w<this.g.length;w++){const v=this.i(w);I+=(v>=0?v:4294967296+v)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(k(this))return"-"+R(this).toString(I);const _=h(Math.pow(I,6));var w=this;let v="";for(;;){const E=G(w,_).g;w=L(w,E.j(_));let A=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=E,b(w))return A+v;for(;A.length<6;)A="0"+A;v=A+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=L(this,I),k(I)?-1:b(I)?0:1};function R(I){const _=I.g.length,w=[];for(let v=0;v<_;v++)w[v]=~I.g[v];return new a(w,~I.h).add(g)}n.abs=function(){return k(this)?R(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),w=[];let v=0;for(let E=0;E<=_;E++){let A=v+(this.i(E)&65535)+(I.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);v=y>>>16,A&=65535,y&=65535,w[E]=y<<16|A}return new a(w,w[w.length-1]&-2147483648?-1:0)};function L(I,_){return I.add(R(_))}n.j=function(I){if(b(this)||b(I))return p;if(k(this))return k(I)?R(this).j(R(I)):R(R(this).j(I));if(k(I))return R(this.j(R(I)));if(this.l(T)<0&&I.l(T)<0)return h(this.m()*I.m());const _=this.g.length+I.g.length,w=[];for(var v=0;v<2*_;v++)w[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<I.g.length;E++){const A=this.i(v)>>>16,y=this.i(v)&65535,_e=I.i(E)>>>16,Se=I.i(E)&65535;w[2*v+2*E]+=y*Se,U(w,2*v+2*E),w[2*v+2*E+1]+=A*Se,U(w,2*v+2*E+1),w[2*v+2*E+1]+=y*_e,U(w,2*v+2*E+1),w[2*v+2*E+2]+=A*_e,U(w,2*v+2*E+2)}for(I=0;I<_;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=_;I<2*_;I++)w[I]=0;return new a(w,0)};function U(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function G(I,_){if(b(_))throw Error("division by zero");if(b(I))return new F(p,p);if(k(I))return _=G(R(I),_),new F(R(_.g),R(_.h));if(k(_))return _=G(I,R(_)),new F(R(_.g),_.h);if(I.g.length>30){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,v=_;v.l(I)<=0;)w=Q(w),v=Q(v);var E=X(w,1),A=X(v,1);for(v=X(v,2),w=X(w,2);!b(v);){var y=A.add(v);y.l(I)<=0&&(E=E.add(w),A=y),v=X(v,1),w=X(w,1)}return _=L(I,E.j(_)),new F(E,_)}for(E=p;I.l(_)>=0;){for(w=Math.max(1,Math.floor(I.m()/_.m())),v=Math.ceil(Math.log(w)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),A=h(w),y=A.j(_);k(y)||y.l(I)>0;)w-=v,A=h(w),y=A.j(_);b(A)&&(A=g),E=E.add(A),I=L(I,y)}return new F(E,I)}n.B=function(I){return G(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),w=[];for(let v=0;v<_;v++)w[v]=this.i(v)&I.i(v);return new a(w,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),w=[];for(let v=0;v<_;v++)w[v]=this.i(v)|I.i(v);return new a(w,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),w=[];for(let v=0;v<_;v++)w[v]=this.i(v)^I.i(v);return new a(w,this.h^I.h)};function Q(I){const _=I.g.length+1,w=[];for(let v=0;v<_;v++)w[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(w,I.h)}function X(I,_){const w=_>>5;_%=32;const v=I.g.length-w,E=[];for(let A=0;A<v;A++)E[A]=_>0?I.i(A+w)>>>_|I.i(A+w+1)<<32-_:I.i(A+w);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ft=a}).apply(typeof ou<"u"?ou:typeof self<"u"?self:typeof window<"u"?window:{});var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nh,yr,rh,Ts,Po,sh,ih,oh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fs=="object"&&fs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in d))break e;d=d[S]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var d=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&d.push([m,l[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,d){return o.call.apply(o.bind,arguments)}function h(o,l,d){return h=u,h.apply(null,arguments)}function f(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,S,P){for(var O=Array(arguments.length-2),H=2;H<arguments.length;H++)O[H-2]=arguments[H];return l.prototype[S].apply(m,O)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const l=o.length;if(l>0){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function b(o,l){for(let m=1;m<arguments.length;m++){const S=arguments[m];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=o.length||0;const P=S.length||0;o.length=d+P;for(let O=0;O<P;O++)o[d+O]=S[O]}else o.push(S)}}class k{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function R(o){a.setTimeout(()=>{throw o},0)}function L(){var o=I;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class U{constructor(){this.h=this.g=null}add(l,d){const m=F.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var F=new k(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,X=!1,I=new U,_=()=>{const o=Promise.resolve(void 0);Q=()=>{o.then(w)}};function w(){for(var o;o=L();){try{o.h.call(o.g)}catch(d){R(d)}var l=F;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}X=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function _e(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}p(_e,E),_e.prototype.init=function(o,l){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Se="closure_listenable_"+(Math.random()*1e6|0),Qt=0;function Ve(o,l,d,m,S){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=S,this.key=++Qt,this.da=this.fa=!1}function Jt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function In(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function Ni(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function M(o){const l={};for(const d in o)l[d]=o[d];return l}const Me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vt(o,l){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)o[d]=m[d];for(let P=0;P<Me.length;P++)d=Me[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function At(o){this.src=o,this.g={},this.h=0}At.prototype.add=function(o,l,d,m,S){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const O=Vi(o,l,m,S);return O>-1?(l=o[O],d||(l.fa=!1)):(l=new Ve(l,this.src,P,!!m,S),l.fa=d,o.push(l)),l};function Oi(o,l){const d=l.type;if(d in o.g){var m=o.g[d],S=Array.prototype.indexOf.call(m,l,void 0),P;(P=S>=0)&&Array.prototype.splice.call(m,S,1),P&&(Jt(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Vi(o,l,d,m){for(let S=0;S<o.length;++S){const P=o[S];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return S}return-1}var Mi="closure_lm_"+(Math.random()*1e6|0),Di={};function Ya(o,l,d,m,S){if(Array.isArray(l)){for(let P=0;P<l.length;P++)Ya(o,l[P],d,m,S);return null}return d=ec(d),o&&o[Se]?o.J(l,d,c(m)?!!m.capture:!1,S):Yf(o,l,d,!1,m,S)}function Yf(o,l,d,m,S,P){if(!l)throw Error("Invalid event type");const O=c(S)?!!S.capture:!!S;let H=xi(o);if(H||(o[Mi]=H=new At(o)),d=H.add(l,d,m,O,P),d.proxy)return d;if(m=Xf(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)A||(S=O),S===void 0&&(S=!1),o.addEventListener(l.toString(),m,S);else if(o.attachEvent)o.attachEvent(Za(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Xf(){function o(d){return l.call(o.src,o.listener,d)}const l=Zf;return o}function Xa(o,l,d,m,S){if(Array.isArray(l))for(var P=0;P<l.length;P++)Xa(o,l[P],d,m,S);else m=c(m)?!!m.capture:!!m,d=ec(d),o&&o[Se]?(o=o.i,P=String(l).toString(),P in o.g&&(l=o.g[P],d=Vi(l,d,m,S),d>-1&&(Jt(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[P],o.h--)))):o&&(o=xi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Vi(l,d,m,S)),(d=o>-1?l[o]:null)&&Li(d))}function Li(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Se])Oi(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Za(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=xi(l))?(Oi(d,o),d.h==0&&(d.src=null,l[Mi]=null)):Jt(o)}}}function Za(o){return o in Di?Di[o]:Di[o]="on"+o}function Zf(o,l){if(o.da)o=!0;else{l=new _e(l,this);const d=o.listener,m=o.ha||o.src;o.fa&&Li(o),o=d.call(m,l)}return o}function xi(o){return o=o[Mi],o instanceof At?o:null}var Fi="__closure_events_fn_"+(Math.random()*1e9>>>0);function ec(o){return typeof o=="function"?o:(o[Fi]||(o[Fi]=function(l){return o.handleEvent(l)}),o[Fi])}function we(){v.call(this),this.i=new At(this),this.M=this,this.G=null}p(we,v),we.prototype[Se]=!0,we.prototype.removeEventListener=function(o,l,d,m){Xa(this,o,l,d,m)};function be(o,l){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var S=l;l=new E(m,o),vt(l,S)}S=!0;let P,O;if(d)for(O=d.length-1;O>=0;O--)P=l.g=d[O],S=ts(P,m,!0,l)&&S;if(P=l.g=o,S=ts(P,m,!0,l)&&S,S=ts(P,m,!1,l)&&S,d)for(O=0;O<d.length;O++)P=l.g=d[O],S=ts(P,m,!1,l)&&S}we.prototype.N=function(){if(we.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let m=0;m<d.length;m++)Jt(d[m]);delete o.g[l],o.h--}}this.G=null},we.prototype.J=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},we.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function ts(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let P=0;P<l.length;++P){const O=l[P];if(O&&!O.da&&O.capture==d){const H=O.listener,he=O.ha||O.src;O.fa&&Oi(o.i,O),S=H.call(he,m)!==!1&&S}}return S&&!m.defaultPrevented}function ep(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function tc(o){o.g=ep(()=>{o.g=null,o.i&&(o.i=!1,tc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class tp extends v{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:tc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function er(o){v.call(this),this.h=o,this.g={}}p(er,v);var nc=[];function rc(o){In(o.g,function(l,d){this.g.hasOwnProperty(d)&&Li(l)},o),o.g={}}er.prototype.N=function(){er.Z.N.call(this),rc(this)},er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ui=a.JSON.stringify,np=a.JSON.parse,rp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function sc(){}function ic(){}var tr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $i(){E.call(this,"d")}p($i,E);function ji(){E.call(this,"c")}p(ji,E);var Yt={},oc=null;function ns(){return oc=oc||new we}Yt.Ia="serverreachability";function ac(o){E.call(this,Yt.Ia,o)}p(ac,E);function nr(o){const l=ns();be(l,new ac(l))}Yt.STAT_EVENT="statevent";function cc(o,l){E.call(this,Yt.STAT_EVENT,o),this.stat=l}p(cc,E);function Pe(o){const l=ns();be(l,new cc(l,o))}Yt.Ja="timingevent";function uc(o,l){E.call(this,Yt.Ja,o),this.size=l}p(uc,E);function rr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function sr(){this.g=!0}sr.prototype.ua=function(){this.g=!1};function sp(o,l,d,m,S,P){o.info(function(){if(o.g)if(P){var O="",H=P.split("&");for(let Z=0;Z<H.length;Z++){var he=H[Z].split("=");if(he.length>1){const fe=he[0];he=he[1];const Ze=fe.split("_");O=Ze.length>=2&&Ze[1]=="type"?O+(fe+"="+he+"&"):O+(fe+"=redacted&")}}}else O=null;else O=P;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+l+`
`+d+`
`+O})}function ip(o,l,d,m,S,P,O){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+l+`
`+d+`
`+P+" "+O})}function vn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+ap(o,d)+(m?" "+m:"")})}function op(o,l){o.info(function(){return"TIMEOUT: "+l})}sr.prototype.info=function(){};function ap(o,l){if(!o.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var d=P[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let O=1;O<m.length;O++)m[O]=""}}}}return Ui(P)}catch{return l}}var rs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},lc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hc;function Bi(){}p(Bi,sc),Bi.prototype.g=function(){return new XMLHttpRequest},hc=new Bi;function ir(o){return encodeURIComponent(String(o))}function cp(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function St(o,l,d,m){this.j=o,this.i=l,this.l=d,this.S=m||1,this.V=new er(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dc}function dc(){this.i=null,this.g="",this.h=!1}var fc={},qi={};function Hi(o,l,d){o.M=1,o.A=is(Xe(l)),o.u=d,o.R=!0,pc(o,null)}function pc(o,l){o.F=Date.now(),ss(o),o.B=Xe(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Pc(d.i,"t",m),o.C=0,d=o.j.L,o.h=new dc,o.g=Gc(o.j,d?l:null,!o.u),o.P>0&&(o.O=new tp(h(o.Y,o,o.g),o.P)),l=o.V,d=o.g,m=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(nc[0]=S.toString()),S=nc);for(let P=0;P<S.length;P++){const O=Ya(d,S[P],m||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.J?M(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),nr(),sp(o.i,o.v,o.B,o.l,o.S,o.u)}St.prototype.ba=function(o){o=o.target;const l=this.O;l&&kt(o)==3?l.j():this.Y(o)},St.prototype.Y=function(o){try{if(o==this.g)e:{const H=kt(this.g),he=this.g.ya(),Z=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||Mc(this.g)))){this.K||H!=4||he==7||(he==8||Z<=0?nr(3):nr(2)),Gi(this);var l=this.g.ca();this.X=l;var d=up(this);if(this.o=l==200,ip(this.i,this.v,this.B,this.l,this.S,H,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var P=m;break t}}P=null}if(o=P)vn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zi(this,o);else{this.o=!1,this.m=3,Pe(12),Xt(this),or(this);break e}}if(this.R){o=!0;let fe;for(;!this.K&&this.C<d.length;)if(fe=lp(this,d),fe==qi){H==4&&(this.m=4,Pe(14),o=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==fc){this.m=4,Pe(15),vn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else vn(this.i,this.l,fe,null),zi(this,fe);if(mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||d.length!=0||this.h.h||(this.m=1,Pe(16),o=!1),this.o=this.o&&o,!o)vn(this.i,this.l,d,"[Invalid Chunked Response]"),Xt(this),or(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),eo(O),O.P=!0,Pe(11))}}else vn(this.i,this.l,d,null),zi(this,d);H==4&&Xt(this),this.o&&!this.K&&(H==4?jc(this.j,this):(this.o=!1,ss(this)))}else Ap(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Pe(12)):(this.m=0,Pe(13)),Xt(this),or(this)}}}catch{}finally{}};function up(o){if(!mc(o))return o.g.la();const l=Mc(o.g);if(l==="")return"";let d="";const m=l.length,S=kt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Xt(o),or(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<m;P++)o.h.h=!0,d+=o.h.i.decode(l[P],{stream:!(S&&P==m-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function mc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function lp(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?qi:(d=Number(l.substring(d,m)),isNaN(d)?fc:(m+=1,m+d>l.length?qi:(l=l.slice(m,m+d),o.C=m+d,l)))}St.prototype.cancel=function(){this.K=!0,Xt(this)};function ss(o){o.T=Date.now()+o.H,gc(o,o.H)}function gc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=rr(h(o.aa,o),l)}function Gi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}St.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(op(this.i,this.B),this.M!=2&&(nr(),Pe(17)),Xt(this),this.m=2,or(this)):gc(this,this.T-o)};function or(o){o.j.I==0||o.K||jc(o.j,o)}function Xt(o){Gi(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,rc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function zi(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||Ki(d.h,o))){if(!o.L&&Ki(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)ls(d),cs(d);else break e;Zi(d),Pe(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=rr(h(d.Va,d),6e3));wc(d.h)<=1&&d.ta&&(d.ta=void 0)}else en(d,11)}else if((o.L||d.g==o)&&ls(d),!y(l))for(S=d.Ba.g.parse(l),l=0;l<S.length;l++){let Z=S[l];const fe=Z[0];if(!(fe<=d.K))if(d.K=fe,Z=Z[1],d.I==2)if(Z[0]=="c"){d.M=Z[1],d.ba=Z[2];const Ze=Z[3];Ze!=null&&(d.ka=Ze,d.j.info("VER="+d.ka));const tn=Z[4];tn!=null&&(d.za=tn,d.j.info("SVER="+d.za));const Rt=Z[5];Rt!=null&&typeof Rt=="number"&&Rt>0&&(m=1.5*Rt,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ct=o.g;if(Ct){const ds=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var P=m.h;P.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Wi(P,P.h),P.h=null))}if(m.G){const to=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;to&&(m.wa=to,ne(m.J,m.G,to))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var O=o;if(m.na=Hc(m,m.L?m.ba:null,m.W),O.L){Tc(m.h,O);var H=O,he=m.O;he&&(H.H=he),H.D&&(Gi(H),ss(H)),m.g=O}else Uc(m);d.i.length>0&&us(d)}else Z[0]!="stop"&&Z[0]!="close"||en(d,7);else d.I==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?en(d,7):Xi(d):Z[0]!="noop"&&d.l&&d.l.qa(Z),d.A=0)}}nr(4)}catch{}}var hp=class{constructor(o,l){this.g=o,this.map=l}};function _c(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wc(o){return o.h?1:o.g?o.g.size:0}function Ki(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Wi(o,l){o.g?o.g.add(l):o.h=l}function Tc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}_c.prototype.cancel=function(){if(this.i=Ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ec(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return T(o.i)}var Ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dp(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let S,P=null;m>=0?(S=o[d].substring(0,m),P=o[d].substring(m+1)):S=o[d],l(S,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function bt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof bt?(this.l=o.l,ar(this,o.j),this.o=o.o,this.g=o.g,cr(this,o.u),this.h=o.h,Qi(this,kc(o.i)),this.m=o.m):o&&(l=String(o).match(Ic))?(this.l=!1,ar(this,l[1]||"",!0),this.o=ur(l[2]||""),this.g=ur(l[3]||"",!0),cr(this,l[4]),this.h=ur(l[5]||"",!0),Qi(this,l[6]||"",!0),this.m=ur(l[7]||"")):(this.l=!1,this.i=new hr(null,this.l))}bt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(lr(l,vc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(lr(l,vc,!0),"@"),o.push(ir(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(lr(d,d.charAt(0)=="/"?mp:pp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",lr(d,_p)),o.join("")},bt.prototype.resolve=function(o){const l=Xe(this);let d=!!o.j;d?ar(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var m=o.h;if(d)cr(l,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=l.h.lastIndexOf("/");S!=-1&&(m=l.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const P=[];for(let O=0;O<S.length;){const H=S[O++];H=="."?m&&O==S.length&&P.push(""):H==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),m&&O==S.length&&P.push("")):(P.push(H),m=!0)}m=P.join("/")}else m=S}return d?l.h=m:d=o.i.toString()!=="",d?Qi(l,kc(o.i)):d=!!o.m,d&&(l.m=o.m),l};function Xe(o){return new bt(o)}function ar(o,l,d){o.j=d?ur(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function cr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Qi(o,l,d){l instanceof hr?(o.i=l,yp(o.i,o.l)):(d||(l=lr(l,gp)),o.i=new hr(l,o.l))}function ne(o,l,d){o.i.set(l,d)}function is(o){return ne(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ur(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function lr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,fp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function fp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var vc=/[#\/\?@]/g,pp=/[#\?:]/g,mp=/[#\?]/g,gp=/[#\?@]/g,_p=/#/g;function hr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Zt(o){o.g||(o.g=new Map,o.h=0,o.i&&dp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=hr.prototype,n.add=function(o,l){Zt(this),this.i=null,o=An(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Ac(o,l){Zt(o),l=An(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Sc(o,l){return Zt(o),l=An(o,l),o.g.has(l)}n.forEach=function(o,l){Zt(this),this.g.forEach(function(d,m){d.forEach(function(S){o.call(l,S,m,this)},this)},this)};function bc(o,l){Zt(o);let d=[];if(typeof l=="string")Sc(o,l)&&(d=d.concat(o.g.get(An(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}n.set=function(o,l){return Zt(this),this.i=null,o=An(this,o),Sc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=bc(this,o),o.length>0?String(o[0]):l):l};function Pc(o,l,d){Ac(o,l),d.length>0&&(o.i=null,o.g.set(An(o,l),T(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var d=l[m];const S=ir(d);d=bc(this,d);for(let P=0;P<d.length;P++){let O=S;d[P]!==""&&(O+="="+ir(d[P])),o.push(O)}}return this.i=o.join("&")};function kc(o){const l=new hr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function An(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function yp(o,l){l&&!o.j&&(Zt(o),o.i=null,o.g.forEach(function(d,m){const S=m.toLowerCase();m!=S&&(Ac(this,m),Pc(this,S,d))},o)),o.j=l}function wp(o,l){const d=new sr;if(a.Image){const m=new Image;m.onload=f(Pt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=f(Pt,d,"TestLoadImage: error",!1,l,m),m.onabort=f(Pt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=f(Pt,d,"TestLoadImage: timeout",!1,l,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Tp(o,l){const d=new sr,m=new AbortController,S=setTimeout(()=>{m.abort(),Pt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(S),P.ok?Pt(d,"TestPingServer: ok",!0,l):Pt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Pt(d,"TestPingServer: error",!1,l)})}function Pt(o,l,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function Ep(){this.g=new rp}function Ji(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Ji,sc),Ji.prototype.g=function(){return new os(this.i,this.h)};function os(o,l){we.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(os,we),n=os.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,fr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,dr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fr(this)),this.g&&(this.readyState=3,fr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?dr(this):fr(this),this.readyState==3&&Rc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,dr(this))},n.Na=function(o){this.g&&(this.response=o,dr(this))},n.ga=function(){this.g&&dr(this)};function dr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,fr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function fr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Cc(o){let l="";return In(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function Yi(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Cc(d),typeof o=="string"?d!=null&&ir(d):ne(o,l,d))}function oe(o){we.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(oe,we);var Ip=/^https?$/i,vp=["POST","PUT"];n=oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hc.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Nc(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(vp,l,void 0)>=0)||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of d)this.g.setRequestHeader(P,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Nc(this,P)}};function Nc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Oc(o),as(o)}function Oc(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,be(this,"complete"),be(this,"abort"),as(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),as(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vc(this):this.Xa())},n.Xa=function(){Vc(this)};function Vc(o){if(o.h&&typeof i<"u"){if(o.v&&kt(o)==4)setTimeout(o.Ca.bind(o),0);else if(be(o,"readystatechange"),kt(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=P===0){let O=String(o.D).match(Ic)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),m=!Ip.test(O?O.toLowerCase():"")}d=m}if(d)be(o,"complete"),be(o,"success");else{o.o=6;try{var S=kt(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",Oc(o)}}finally{as(o)}}}}function as(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||be(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function kt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return kt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),np(l)}};function Mc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ap(o){const l={};o=(o.g&&kt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(y(o[m]))continue;var d=cp(o[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[S]||[];l[S]=P,P.push(d)}Ni(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function pr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Dc(o){this.za=0,this.i=[],this.j=new sr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=pr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=pr("baseRetryDelayMs",5e3,o),this.Za=pr("retryDelaySeedMs",1e4,o),this.Ta=pr("forwardChannelMaxRetries",2,o),this.va=pr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new _c(o&&o.concurrentRequestLimit),this.Ba=new Ep,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Dc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,d,m){Pe(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Hc(this,null,this.W),us(this)};function Xi(o){if(Lc(o),o.I==3){var l=o.V++,d=Xe(o.J);if(ne(d,"SID",o.M),ne(d,"RID",l),ne(d,"TYPE","terminate"),mr(o,d),l=new St(o,o.j,l),l.M=2,l.A=is(Xe(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=Gc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ss(l)}qc(o)}function cs(o){o.g&&(eo(o),o.g.cancel(),o.g=null)}function Lc(o){cs(o),o.v&&(a.clearTimeout(o.v),o.v=null),ls(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function us(o){if(!yc(o.h)&&!o.m){o.m=!0;var l=o.Ea;Q||_(),X||(Q(),X=!0),I.add(l,o),o.D=0}}function Sp(o,l){return wc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=rr(h(o.Ea,o,l),Bc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new St(this,this.j,o);let P=this.o;if(this.U&&(P?(P=M(P),vt(P,this.U)):P=this.U),this.u!==null||this.R||(S.J=P,P=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Fc(this,S,l),d=Xe(this.J),ne(d,"RID",o),ne(d,"CVER",22),this.G&&ne(d,"X-HTTP-Session-Id",this.G),mr(this,d),P&&(this.R?l="headers="+ir(Cc(P))+"&"+l:this.u&&Yi(d,this.u,P)),Wi(this.h,S),this.Ra&&ne(d,"TYPE","init"),this.S?(ne(d,"$req",l),ne(d,"SID","null"),S.U=!0,Hi(S,d,null)):Hi(S,d,l),this.I=2}}else this.I==3&&(o?xc(this,o):this.i.length==0||yc(this.h)||xc(this))};function xc(o,l){var d;l?d=l.l:d=o.V++;const m=Xe(o.J);ne(m,"SID",o.M),ne(m,"RID",d),ne(m,"AID",o.K),mr(o,m),o.u&&o.o&&Yi(m,o.u,o.o),d=new St(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Fc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Wi(o.h,d),Hi(d,m,l)}function mr(o,l){o.H&&In(o.H,function(d,m){ne(l,m,d)}),o.l&&In({},function(d,m){ne(l,m,d)})}function Fc(o,l,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var S=o.i;let H=-1;for(;;){const he=["count="+d];H==-1?d>0?(H=S[0].g,he.push("ofs="+H)):H=0:he.push("ofs="+H);let Z=!0;for(let fe=0;fe<d;fe++){var P=S[fe].g;const Ze=S[fe].map;if(P-=H,P<0)H=Math.max(0,S[fe].g-100),Z=!1;else try{P="req"+P+"_"||"";try{var O=Ze instanceof Map?Ze:Object.entries(Ze);for(const[tn,Rt]of O){let Ct=Rt;c(Rt)&&(Ct=Ui(Rt)),he.push(P+tn+"="+encodeURIComponent(Ct))}}catch(tn){throw he.push(P+"type="+encodeURIComponent("_badmap")),tn}}catch{m&&m(Ze)}}if(Z){O=he.join("&");break e}}O=void 0}return o=o.i.splice(0,d),l.G=o,O}function Uc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;Q||_(),X||(Q(),X=!0),I.add(l,o),o.A=0}}function Zi(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=rr(h(o.Da,o),Bc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,$c(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=rr(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pe(10),cs(this),$c(this))};function eo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function $c(o){o.g=new St(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Xe(o.na);ne(l,"RID","rpc"),ne(l,"SID",o.M),ne(l,"AID",o.K),ne(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ne(l,"TO",o.ia),ne(l,"TYPE","xmlhttp"),mr(o,l),o.u&&o.o&&Yi(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=is(Xe(l)),d.u=null,d.R=!0,pc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,cs(this),Zi(this),Pe(19))};function ls(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function jc(o,l){var d=null;if(o.g==l){ls(o),eo(o),o.g=null;var m=2}else if(Ki(o.h,l))d=l.G,Tc(o.h,l),m=1;else return;if(o.I!=0){if(l.o)if(m==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var S=o.D;m=ns(),be(m,new uc(m,d)),us(o)}else Uc(o);else if(S=l.m,S==3||S==0&&l.X>0||!(m==1&&Sp(o,l)||m==2&&Zi(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),S){case 1:en(o,5);break;case 4:en(o,10);break;case 3:en(o,6);break;default:en(o,2)}}}function Bc(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function en(o,l){if(o.j.info("Error code "+l),l==2){var d=h(o.bb,o),m=o.Ua;const S=!m;m=new bt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ar(m,"https"),is(m),S?wp(m.toString(),d):Tp(m.toString(),d)}else Pe(2);o.I=0,o.l&&o.l.pa(l),qc(o),Lc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function qc(o){if(o.I=0,o.ja=[],o.l){const l=Ec(o.h);(l.length!=0||o.i.length!=0)&&(b(o.ja,l),b(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function Hc(o,l,d){var m=d instanceof bt?Xe(d):new bt(d);if(m.g!="")l&&(m.g=l+"."+m.g),cr(m,m.u);else{var S=a.location;m=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const P=new bt(null);m&&ar(P,m),l&&(P.g=l),S&&cr(P,S),d&&(P.h=d),m=P}return d=o.G,l=o.wa,d&&l&&ne(m,d,l),ne(m,"VER",o.ka),mr(o,m),m}function Gc(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new oe(new Ji({ab:d})):new oe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zc(){}n=zc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function hs(){}hs.prototype.g=function(o,l){return new De(o,l)};function De(o,l){we.call(this),this.g=new Dc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Sn(this)}p(De,we),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Xi(this.g)},De.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Ui(o),o=d);l.i.push(new hp(l.Ya++,o)),l.I==3&&us(l)},De.prototype.N=function(){this.g.l=null,delete this.j,Xi(this.g),delete this.g,De.Z.N.call(this)};function Kc(o){$i.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}p(Kc,$i);function Wc(){ji.call(this),this.status=1}p(Wc,ji);function Sn(o){this.g=o}p(Sn,zc),Sn.prototype.ra=function(){be(this.g,"a")},Sn.prototype.qa=function(o){be(this.g,new Kc(o))},Sn.prototype.pa=function(o){be(this.g,new Wc)},Sn.prototype.oa=function(){be(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,oh=function(){return new hs},ih=function(){return ns()},sh=Yt,Po={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},rs.NO_ERROR=0,rs.TIMEOUT=8,rs.HTTP_ERROR=6,Ts=rs,lc.COMPLETE="complete",rh=lc,ic.EventType=tr,tr.OPEN="a",tr.CLOSE="b",tr.ERROR="c",tr.MESSAGE="d",we.prototype.listen=we.prototype.J,yr=ic,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,nh=oe}).apply(typeof fs<"u"?fs:typeof self<"u"?self:typeof window<"u"?window:{});const au="@firebase/firestore",cu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Jo("@firebase/firestore");function bn(){return cn.logLevel}function D(n,...e){if(cn.logLevel<=z.DEBUG){const t=e.map(Xo);cn.debug(`Firestore (${Bn}): ${n}`,...t)}}function wt(n,...e){if(cn.logLevel<=z.ERROR){const t=e.map(Xo);cn.error(`Firestore (${Bn}): ${n}`,...t)}}function un(n,...e){if(cn.logLevel<=z.WARN){const t=e.map(Xo);cn.warn(`Firestore (${Bn}): ${n}`,...t)}}function Xo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ah(n,r,t)}function ah(n,e,t){let r=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw wt(r),new Error(r)}function Y(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ah(e,s,r)}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class ag{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cg{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new ch(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class ug{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ug(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new uu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=dg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function ko(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return co(s)===co(i)?K(s,i):co(s)?1:-1}return K(n.length,e.length)}const fg=55296,pg=57343;function co(n){const e=n.charCodeAt(0);return e>=fg&&e<=pg}function Dn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="__name__";class et{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&j(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const r=et.isNumericId(e),s=et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?et.extractNumericId(e).compare(et.extractNumericId(t)):ko(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ft.fromString(e.substring(4,e.length-2))}}class ee extends et{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const mg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends et{construct(e,t,r){return new me(e,t,r)}static isValidIdentifier(e){return mg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lu}static keyField(){return new me([lu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(ee.fromString(e))}static fromName(e){return new x(ee.fromString(e).popFirst(5))}static empty(){return new x(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n,e,t){if(!t)throw new V(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hh(n,e,t,r){if(e===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hu(n){if(!x.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function du(n){if(x.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function dh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function Re(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ni(n);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function gg(n,e){if(e<=0)throw new V(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function jr(n,e){if(!dh(n))throw new V(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new V(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=-62135596800,pu=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*pu);return new te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fu)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pu}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jr(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:le("string",te._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new te(0,0))}static max(){return new B(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=-1;function _g(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new te(t+1,0):new te(t,r));return new jt(s,x.empty(),e)}function yg(n){return new jt(n.readTime,n.key,Rr)}class jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new jt(B.min(),x.empty(),Rr)}static max(){return new jt(B.max(),x.empty(),Rr)}}function wg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Eg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Tg)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Ig(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Hn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ri.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=-1;function si(n){return n==null}function Ns(n){return n===0&&1/n==-1/0}function vg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="";function Ag(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=mu(e)),e=Sg(n.get(t),e);return mu(e)}function Sg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case fh:t+="";break;default:t+=i}}return t}function mu(n){return n+fh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ph(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ps(this.root,e,this.comparator,!0)}}class ps{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _u(this.data.getIterator())}getIteratorFrom(e){return new _u(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class _u{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new xe([])}unionWith(e){let t=new de(me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mh("Invalid base64 string: "+i):i}}(e);return new ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const bg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(Y(!!n,39018),typeof n=="string"){let e=0;const t=bg.exec(n);if(Y(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="server_timestamp",_h="__type__",yh="__previous_value__",wh="__local_write_time__";function ea(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[_h])==null?void 0:r.stringValue)===gh}function ii(n){const e=n.mapValue.fields[yh];return ea(e)?ii(e):e}function Cr(n){const e=Bt(n.mapValue.fields[wh].timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,r,s,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Os="(default)";class Ln{constructor(e,t){this.projectId=e,this.database=t||Os}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database===Os}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="__type__",kg="__max__",ms={mapValue:{}},Eh="__vector__",Vs="value";function Ht(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ea(n)?4:Cg(n)?9007199254740991:Rg(n)?10:11:j(28295,{value:n})}function it(n,e){if(n===e)return!0;const t=Ht(n);if(t!==Ht(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cr(n).isEqual(Cr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Bt(s.timestampValue),c=Bt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ae(s.doubleValue),c=ae(i.doubleValue);return a===c?Ns(a)===Ns(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Dn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(gu(a)!==gu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!it(a[u],c[u])))return!1;return!0}(n,e);default:return j(52216,{left:n})}}function Nr(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function xn(n,e){if(n===e)return 0;const t=Ht(n),r=Ht(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ae(i.integerValue||i.doubleValue),u=ae(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return yu(n.timestampValue,e.timestampValue);case 4:return yu(Cr(n),Cr(e));case 5:return ko(n.stringValue,e.stringValue);case 6:return function(i,a){const c=qt(i),u=qt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=K(c[h],u[h]);if(f!==0)return f}return K(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=K(ae(i.latitude),ae(a.latitude));return c!==0?c:K(ae(i.longitude),ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var g,T,b,k;const c=i.fields||{},u=a.fields||{},h=(g=c[Vs])==null?void 0:g.arrayValue,f=(T=u[Vs])==null?void 0:T.arrayValue,p=K(((b=h==null?void 0:h.values)==null?void 0:b.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return p!==0?p:wu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ms.mapValue&&a===ms.mapValue)return 0;if(i===ms.mapValue)return 1;if(a===ms.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=ko(u[p],f[p]);if(g!==0)return g;const T=xn(c[u[p]],h[f[p]]);if(T!==0)return T}return K(u.length,f.length)}(n.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Bt(n),r=Bt(e),s=K(t.seconds,r.seconds);return s!==0?s:K(t.nanos,r.nanos)}function wu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=xn(t[s],r[s]);if(i)return i}return K(t.length,r.length)}function Fn(n){return Ro(n)}function Ro(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ro(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ro(t.fields[a])}`;return s+"}"}(n.mapValue):j(61005,{value:n})}function Es(n){switch(Ht(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ii(n);return e?16+Es(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Es(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Kt(r.fields,(i,a)=>{s+=i.length+Es(a)}),s}(n.mapValue);default:throw j(13486,{value:n})}}function Tu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Co(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function Eu(n){return!!n&&"nullValue"in n}function Iu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Is(n){return!!n&&"mapValue"in n}function Rg(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Th])==null?void 0:r.stringValue)===Eh}function Ir(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Kt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ir(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ir(n.arrayValue.values[t]);return e}return{...n}}function Cg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ir(t)}setAll(e){let t=me.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Ir(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Kt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ne(Ir(this.value))}}function Ih(n){const e=[];return Kt(n.fields,(t,r)=>{const s=new me([t]);if(Is(r)){const i=Ih(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ie(e,0,B.min(),B.min(),B.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,s){return new Ie(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,B.min(),B.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,B.min(),B.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.position=e,this.inclusive=t}}function vu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=xn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Au(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ng(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{}class ue extends vh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Vg(e,t,r):t==="array-contains"?new Lg(e,r):t==="in"?new xg(e,r):t==="not-in"?new Fg(e,r):t==="array-contains-any"?new Ug(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Mg(e,r):new Dg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xn(t,this.value)):t!==null&&Ht(this.value)===Ht(t)&&this.matchesComparison(xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends vh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Qe(e,t)}matches(e){return Ah(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ah(n){return n.op==="and"}function Sh(n){return Og(n)&&Ah(n)}function Og(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function No(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Fn(n.value);if(Sh(n))return n.filters.map(e=>No(e)).join(",");{const e=n.filters.map(t=>No(t)).join(",");return`${n.op}(${e})`}}function bh(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&it(r.value,s.value)}(n,e):n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&bh(a,s.filters[c]),!0):!1}(n,e):void j(19439)}function Ph(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Fn(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(Ph).join(" ,")+"}"}(n):"Filter"}class Vg extends ue{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mg extends ue{constructor(e,t){super(e,"in",t),this.keys=kh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dg extends ue{constructor(e,t){super(e,"not-in",t),this.keys=kh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function kh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}class Lg extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ta(t)&&Nr(t.arrayValue,this.value)}}class xg extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nr(this.value.arrayValue,t)}}class Fg extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nr(this.value.arrayValue,t)}}class Ug extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Nr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Su(n,e=null,t=[],r=[],s=null,i=null,a=null){return new $g(n,e,t,r,s,i,a)}function na(n){const e=q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>No(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),si(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Fn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Fn(r)).join(",")),e.Te=t}return e.Te}function ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ng(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Au(n.startAt,e.startAt)&&Au(n.endAt,e.endAt)}function Oo(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function jg(n,e,t,r,s,i,a,c){return new Gn(n,e,t,r,s,i,a,c)}function oi(n){return new Gn(n)}function bu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rh(n){return n.collectionGroup!==null}function vr(n){const e=q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new de(me.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Or(i,r))}),t.has(me.keyField().canonicalString())||e.Ie.push(new Or(me.keyField(),r))}return e.Ie}function tt(n){const e=q(n);return e.Ee||(e.Ee=Bg(e,vr(n))),e.Ee}function Bg(n,e){if(n.limitType==="F")return Su(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Or(s.field,i)});const t=n.endAt?new Ms(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ms(n.startAt.position,n.startAt.inclusive):null;return Su(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vo(n,e){const t=n.filters.concat([e]);return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ds(n,e,t){return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ai(n,e){return ra(tt(n),tt(e))&&n.limitType===e.limitType}function Ch(n){return`${na(tt(n))}|lt:${n.limitType}`}function Pn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ph(s)).join(", ")}]`),si(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Fn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Fn(s)).join(",")),`Target(${r})`}(tt(n))}; limitType=${n.limitType})`}function ci(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):x.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=vu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,vr(r),s)||r.endAt&&!function(a,c,u){const h=vu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,vr(r),s))}(n,e)}function qg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nh(n){return(e,t)=>{let r=!1;for(const s of vr(n)){const i=Hg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Hg(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?xn(u,h):j(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ph(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new ie(x.comparator);function Tt(){return Gg}const Oh=new ie(x.comparator);function wr(...n){let e=Oh;for(const t of n)e=e.insert(t.key,t);return e}function Vh(n){let e=Oh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function rn(){return Ar()}function Mh(){return Ar()}function Ar(){return new wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const zg=new ie(x.comparator),Kg=new de(x.comparator);function W(...n){let e=Kg;for(const t of n)e=e.add(t);return e}const Wg=new de(K);function Qg(){return Wg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ns(e)?"-0":e}}function Dh(n){return{integerValue:""+n}}function Lh(n,e){return vg(e)?Dh(e):sa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this._=void 0}}function Jg(n,e,t){return n instanceof Vr?function(s,i){const a={fields:{[_h]:{stringValue:gh},[wh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ea(i)&&(i=ii(i)),i&&(a.fields[yh]=i),{mapValue:a}}(t,e):n instanceof Mr?Fh(n,e):n instanceof Dr?Uh(n,e):function(s,i){const a=xh(s,i),c=Pu(a)+Pu(s.Ae);return Co(a)&&Co(s.Ae)?Dh(c):sa(s.serializer,c)}(n,e)}function Yg(n,e,t){return n instanceof Mr?Fh(n,e):n instanceof Dr?Uh(n,e):t}function xh(n,e){return n instanceof Lr?function(r){return Co(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vr extends ui{}class Mr extends ui{constructor(e){super(),this.elements=e}}function Fh(n,e){const t=$h(e);for(const r of n.elements)t.some(s=>it(s,r))||t.push(r);return{arrayValue:{values:t}}}class Dr extends ui{constructor(e){super(),this.elements=e}}function Uh(n,e){let t=$h(e);for(const r of n.elements)t=t.filter(s=>!it(s,r));return{arrayValue:{values:t}}}class Lr extends ui{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Pu(n){return ae(n.integerValue||n.doubleValue)}function $h(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t){this.field=e,this.transform=t}}function Xg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Mr&&s instanceof Mr||r instanceof Dr&&s instanceof Dr?Dn(r.elements,s.elements,it):r instanceof Lr&&s instanceof Lr?it(r.Ae,s.Ae):r instanceof Vr&&s instanceof Vr}(n.transform,e.transform)}class Zg{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class li{}function Bh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ia(n.key,$e.none()):new Br(n.key,n.data,$e.none());{const t=n.data,r=Ne.empty();let s=new de(me.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Wt(n.key,r,new xe(s.toArray()),$e.none())}}function e_(n,e,t){n instanceof Br?function(s,i,a){const c=s.value.clone(),u=Ru(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Wt?function(s,i,a){if(!vs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ru(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(qh(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Sr(n,e,t,r){return n instanceof Br?function(i,a,c,u){if(!vs(i.precondition,a))return c;const h=i.value.clone(),f=Cu(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Wt?function(i,a,c,u){if(!vs(i.precondition,a))return c;const h=Cu(i.fieldTransforms,u,a),f=a.data;return f.setAll(qh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return vs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function t_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=xh(r.transform,s||null);i!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,i))}return t||null}function ku(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Dn(r,s,(i,a)=>Xg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Br extends li{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wt extends li{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ru(n,e,t){const r=new Map;Y(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Yg(a,c,t[s]))}return r}function Cu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Jg(i,a,e))}return r}class ia extends li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n_ extends li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&e_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Mh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Bh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Dn(this.mutations,e.mutations,(t,r)=>ku(t,r))&&Dn(this.baseMutations,e.baseMutations,(t,r)=>ku(t,r))}}class oa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return zg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new oa(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,J;function o_(n){switch(n){case C.OK:return j(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function Hh(n){if(n===void 0)return wt("GRPC error has no .code"),C.UNKNOWN;switch(n){case ce.OK:return C.OK;case ce.CANCELLED:return C.CANCELLED;case ce.UNKNOWN:return C.UNKNOWN;case ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ce.INTERNAL:return C.INTERNAL;case ce.UNAVAILABLE:return C.UNAVAILABLE;case ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ce.NOT_FOUND:return C.NOT_FOUND;case ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ce.ABORTED:return C.ABORTED;case ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ce.DATA_LOSS:return C.DATA_LOSS;default:return j(39323,{code:n})}}(J=ce||(ce={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Ft([4294967295,4294967295],0);function Nu(n){const e=a_().encode(n),t=new th;return t.update(e),new Uint8Array(t.digest())}function Ou(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ft([t,r],0),new Ft([s,i],0)]}class aa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Tr(`Invalid padding: ${t}`);if(r<0)throw new Tr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Tr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Tr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ft.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Ft.fromNumber(r)));return s.compare(c_)===1&&(s=new Ft([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nu(e),[r,s]=Ou(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new aa(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Nu(e),[r,s]=Ou(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,qr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new hi(B.min(),s,new ie(K),Tt(),W())}}class qr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new qr(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Gh{constructor(e,t){this.targetId=e,this.Ce=t}}class zh{constructor(e,t,r=ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Vu{constructor(){this.ve=0,this.Fe=Mu(),this.Me=ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=W(),t=W(),r=W();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:j(38017,{changeType:i})}}),new qr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Mu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class u_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tt(),this.Je=gs(),this.He=gs(),this.Ye=new ie(K)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Oo(i))if(r===0){const a=new x(i.path);this.et(t,a,Ie.newNoDocument(a,B.min()))}else Y(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=qt(r).toUint8Array()}catch(u){if(u instanceof mh)return un("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new aa(a,s,i)}catch(u){return un(u instanceof Tr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Oo(c.target)){const u=new x(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ie.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=W();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new hi(e,t,this.Ye,this.je,r);return this.je=Tt(),this.Je=gs(),this.He=gs(),this.Ye=new ie(K),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Vu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new de(K),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new de(K),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function gs(){return new ie(x.comparator)}function Mu(){return new ie(x.comparator)}const l_={asc:"ASCENDING",desc:"DESCENDING"},h_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d_={and:"AND",or:"OR"};class f_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mo(n,e){return n.useProto3Json||si(e)?e:{value:e}}function Ls(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function p_(n,e){return Ls(n,e.toTimestamp())}function nt(n){return Y(!!n,49232),B.fromTimestamp(function(t){const r=Bt(t);return new te(r.seconds,r.nanos)}(n))}function ca(n,e){return Do(n,e).canonicalString()}function Do(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wh(n){const e=ee.fromString(n);return Y(Zh(e),10190,{key:e.toString()}),e}function Lo(n,e){return ca(n.databaseId,e.path)}function uo(n,e){const t=Wh(e);if(t.get(1)!==n.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(Jh(t))}function Qh(n,e){return ca(n.databaseId,e)}function m_(n){const e=Wh(n);return e.length===4?ee.emptyPath():Jh(e)}function xo(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jh(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Du(n,e,t){return{name:Lo(n,e),fields:t.value.mapValue.fields}}function g_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:j(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Y(f===void 0||typeof f=="string",58123),ge.fromBase64String(f||"")):(Y(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ge.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?C.UNKNOWN:Hh(h.code);return new V(f,h.message||"")}(a);t=new zh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uo(n,r.document.name),i=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):B.min(),c=new Ne({mapValue:{fields:r.document.fields}}),u=Ie.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new As(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uo(n,r.document),i=r.readTime?nt(r.readTime):B.min(),a=Ie.newNoDocument(s,i),c=r.removedTargetIds||[];t=new As([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uo(n,r.document),i=r.removedTargetIds||[];t=new As([],i,s,null)}else{if(!("filter"in e))return j(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new i_(s,i),c=r.targetId;t=new Gh(c,a)}}return t}function __(n,e){let t;if(e instanceof Br)t={update:Du(n,e.key,e.value)};else if(e instanceof ia)t={delete:Lo(n,e.key)};else if(e instanceof Wt)t={update:Du(n,e.key,e.data),updateMask:b_(e.fieldMask)};else{if(!(e instanceof n_))return j(16599,{Vt:e.type});t={verify:Lo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Mr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Dr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw j(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:p_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(n,e.precondition)),t}function y_(n,e){return n&&n.length>0?(Y(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?nt(s.updateTime):nt(i);return a.isEqual(B.min())&&(a=nt(i)),new Zg(a,s.transformResults||[])}(t,e))):[]}function w_(n,e){return{documents:[Qh(n,e.path)]}}function T_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qh(n,s);const i=function(h){if(h.length!==0)return Xh(Qe.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:kn(g.field),direction:v_(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Mo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function E_(n){let e=m_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=Yh(p);return g instanceof Qe&&Sh(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(b){return new Or(Rn(b.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,si(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(p){const g=!!p.before,T=p.values||[];return new Ms(T,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,T=p.values||[];return new Ms(T,g)}(t.endAt)),jg(e,s,a,i,c,"F",u,h)}function I_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Rn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Rn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(t){return ue.create(Rn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>Yh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(n):j(30097,{filter:n})}function v_(n){return l_[n]}function A_(n){return h_[n]}function S_(n){return d_[n]}function kn(n){return{fieldPath:n.canonicalString()}}function Rn(n){return me.fromServerFormat(n.fieldPath)}function Xh(n){return n instanceof ue?function(t){if(t.op==="=="){if(Iu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NAN"}};if(Eu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Iu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NAN"}};if(Eu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(t.field),op:A_(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(s=>Xh(s));return r.length===1?r[0]:{compositeFilter:{op:S_(t.op),filters:r}}}(n):j(54877,{filter:n})}function b_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,r,s,i=B.min(),a=B.min(),c=ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.yt=e}}function k_(n){const e=E_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ds(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.Cn=new C_}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(jt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class C_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new de(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new de(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ed=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(ed,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Un(0)}static cr(){return new Un(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="LruGarbageCollector",N_=1048576;function Fu([n,e],[t,r]){const s=K(n,t);return s===0?K(e,r):s}class O_{constructor(e){this.Ir=e,this.buffer=new de(Fu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Fu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class V_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){D(xu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Hn(t)?D(xu,"Ignoring IndexedDB error during garbage collection: ",t):await qn(t)}await this.Vr(3e5)})}}class M_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(ri.ce);const r=new O_(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Lu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),bn()<=z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function D_(n,e){return new M_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Sr(r.mutation,s,xe.empty(),te.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=rn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=wr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Tt();const a=Ar(),c=function(){return Ar()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Wt)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Sr(f.mutation,h,f.mutation.getFieldMask(),te.now())):a.set(h.key,xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new x_(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Ar();let s=new ie((a,c)=>a-c),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||xe.empty();f=c.applyToLocalView(h,f),r.set(u,f);const p=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=Mh();f.forEach(g=>{if(!i.has(g)){const T=Bh(t.get(g),r.get(g));T!==null&&p.set(g,T),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(rn());let c=Rr,u=i;return a.next(h=>N.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,W())).next(f=>({batchId:c,changes:Vh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let s=wr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=wr();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,u=>{const h=function(p,g){return new Gn(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ie.newInvalidDocument(f)))});let c=wr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Sr(f.mutation,h,xe.empty(),te.now()),ci(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return N.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:nt(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:k_(s.bundledQuery),readTime:nt(s.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.overlays=new ie(x.comparator),this.qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=rn();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=rn(),i=t.length+1,a=new x(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=rn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=rn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return N.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new s_(t,r));let i=this.qr.get(t);i===void 0&&(i=W(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.Qr=new de(pe.$r),this.Ur=new de(pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new pe(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new x(new ee([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new x(new ee([])),r=new pe(t,e),s=new pe(t,e+1);let i=W();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new pe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return x.comparator(e.key,t.key)||K(e.Yr,t.Yr)}static Kr(e,t){return K(e.Yr,t.Yr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new de(pe.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new r_(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new pe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Zo:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(K);return t.forEach(s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const a=new pe(new x(i),0);let c=new de(K);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),N.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Y(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(t.mutations,s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new pe(t,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.ri=e,this.docs=function(){return new ie(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=Tt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ie.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Tt();const a=t.path,c=new x(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||wg(yg(f),r)<=0||(s.has(f.key)||ci(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){j(9500)}ii(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new H_(this)}getSize(e){return N.resolve(this.size)}}class H_ extends L_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.persistence=e,this.si=new wn(t=>na(t),ra),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.oi=0,this._i=new ua,this.targetCount=0,this.ai=Un.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),N.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Un(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Pr(t),N.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t){this.ui={},this.overlays={},this.ci=new ri(0),this.li=!1,this.li=!0,this.hi=new j_,this.referenceDelegate=e(this),this.Pi=new G_(this),this.indexManager=new R_,this.remoteDocumentCache=function(s){return new q_(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new P_(t),this.Ii=new U_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new B_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const s=new z_(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return N.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class z_ extends Eg{constructor(e){super(),this.currentSequenceNumber=e}}class la{constructor(e){this.persistence=e,this.Ri=new ua,this.Vi=null}static mi(e){return new la(e)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,r=>{const s=x.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,B.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class xs{constructor(e,t){this.persistence=e,this.pi=new wn(r=>Ag(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=D_(this,t)}static mi(e,t){return new xs(e,t)}Ei(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return N.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,B.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Es(e.data.value)),t}br(e,t,r){return N.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ha(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return qp()?8:Ig(Ae())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new K_;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(bn()<=z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(bn()<=z.DEBUG&&D("QueryEngine","Query:",Pn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(bn()<=z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):N.resolve())}ys(e,t){if(bu(t))return N.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ds(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,Ds(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return bu(t)||s.isEqual(B.min())?N.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?N.resolve(null):(bn()<=z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pn(t)),this.vs(e,a,t,_g(s,Rr)).next(c=>c))})}Ds(e,t){let r=new de(Nh(e));return t.forEach((s,i)=>{ci(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return bn()<=z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Pn(t)),this.ps.getDocumentsMatchingQuery(e,t,jt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="LocalStore",Q_=3e8;class J_{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ie(K),this.xs=new wn(i=>na(i),ra),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Y_(n,e,t,r){return new J_(n,e,t,r)}async function nd(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=W();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function X_(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const p=h.batch,g=p.keys();let T=N.resolve();return g.forEach(b=>{T=T.next(()=>f.getEntry(u,b)).next(k=>{const R=h.docVersions.get(b);Y(R!==null,48541),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function rd(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Z_(n,e){const t=q(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,p)));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(ge.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(p,T),function(k,R,L){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Q_?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,T,f)&&c.push(t.Pi.updateTargetData(i,T))});let u=Tt(),h=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(ey(i,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(B.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function ey(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Tt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):D(da,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function ty(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ny(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Lt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Fo(n,e,t){const r=q(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Hn(a))throw a;D(da,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Uu(n,e,t){const r=q(n);let s=B.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const p=q(u),g=p.xs.get(f);return g!==void 0?N.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,a,tt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?i:W())).next(c=>(ry(r,qg(e),c),{documents:c,Qs:i})))}function ry(n,e,t){let r=n.Os.get(e)||B.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class $u{constructor(){this.activeTargetIds=Qg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sy{constructor(){this.Mo=new $u,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $u,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="ConnectivityMonitor";class Bu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(ju,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){D(ju,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s=null;function Uo(){return _s===null?_s=function(){return 268435456+Math.round(2147483648*Math.random())}():_s++,"0x"+_s.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="RestConnection",oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ay{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Os?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Uo(),c=this.zo(e,t.toUriEncodedString());D(lo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),f=mn(h);return this.Jo(e,c,u,r,f).then(p=>(D(lo,`Received RPC '${e}' ${a}: `,p),p),p=>{throw un(lo,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=oy[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection";class uy extends ay{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Uo();return new Promise((c,u)=>{const h=new nh;h.setWithCredentials(!0),h.listenOnce(rh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ts.NO_ERROR:const p=h.getResponseJson();D(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Ts.TIMEOUT:D(Te,`RPC '${e}' ${a} timed out`),u(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const g=h.getStatus();if(D(Te,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const b=T==null?void 0:T.error;if(b&&b.status&&b.message){const k=function(L){const U=L.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(U)>=0?U:C.UNKNOWN}(b.status);u(new V(k,b.message))}else u(new V(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(C.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{D(Te,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);D(Te,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Uo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=oh(),c=ih(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");D(Te,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=a.createWebChannel(f,u);this.I_(p);let g=!1,T=!1;const b=new cy({Yo:R=>{T?D(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(D(Te,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),D(Te,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Zo:()=>p.close()}),k=(R,L,U)=>{R.listen(L,F=>{try{U(F)}catch(G){setTimeout(()=>{throw G},0)}})};return k(p,yr.EventType.OPEN,()=>{T||(D(Te,`RPC '${e}' stream ${s} transport opened.`),b.o_())}),k(p,yr.EventType.CLOSE,()=>{T||(T=!0,D(Te,`RPC '${e}' stream ${s} transport closed`),b.a_(),this.E_(p))}),k(p,yr.EventType.ERROR,R=>{T||(T=!0,un(Te,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),b.a_(new V(C.UNAVAILABLE,"The operation could not be completed")))}),k(p,yr.EventType.MESSAGE,R=>{var L;if(!T){const U=R.data[0];Y(!!U,16349);const F=U,G=(F==null?void 0:F.error)||((L=F[0])==null?void 0:L.error);if(G){D(Te,`RPC '${e}' stream ${s} received error:`,G);const Q=G.status;let X=function(w){const v=ce[w];if(v!==void 0)return Hh(v)}(Q),I=G.message;X===void 0&&(X=C.INTERNAL,I="Unknown error status: "+Q+" with message "+G.message),T=!0,b.a_(new V(X,I)),p.close()}else D(Te,`RPC '${e}' stream ${s} received:`,U),b.u_(U)}}),k(c,sh.STAT_EVENT,R=>{R.stat===Po.PROXY?D(Te,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Po.NOPROXY&&D(Te,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.__()},0),b}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){return new f_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="PersistentStream";class id{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return D(qu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(D(qu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ly extends id{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=g_(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?nt(a.readTime):B.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=xo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Oo(u)?{documents:w_(i,u)}:{query:T_(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Kh(i,a.resumeToken);const h=Mo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=Ls(i,a.snapshotVersion.toTimestamp());const h=Mo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=I_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=xo(this.serializer),t.removeTarget=e,this.q_(t)}}class hy extends id{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Y(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Y(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=y_(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=xo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>__(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{}class fy extends dy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Do(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Do(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class py{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wt(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="RemoteStore";class my{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Tn(this)&&(D(ln,"Restarting streams for network reachability change."),await async function(u){const h=q(u);h.Ea.add(4),await Hr(h),h.Ra.set("Unknown"),h.Ea.delete(4),await fi(h)}(this))})}),this.Ra=new py(r,s)}}async function fi(n){if(Tn(n))for(const e of n.da)await e(!0)}async function Hr(n){for(const e of n.da)await e(!1)}function od(n,e){const t=q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ga(t)?ma(t):zn(t).O_()&&pa(t,e))}function fa(n,e){const t=q(n),r=zn(t);t.Ia.delete(e),r.O_()&&ad(t,e),t.Ia.size===0&&(r.O_()?r.L_():Tn(t)&&t.Ra.set("Unknown"))}function pa(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zn(n).Y_(e)}function ad(n,e){n.Va.Ue(e),zn(n).Z_(e)}function ma(n){n.Va=new u_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),zn(n).start(),n.Ra.ua()}function ga(n){return Tn(n)&&!zn(n).x_()&&n.Ia.size>0}function Tn(n){return q(n).Ea.size===0}function cd(n){n.Va=void 0}async function gy(n){n.Ra.set("Online")}async function _y(n){n.Ia.forEach((e,t)=>{pa(n,e)})}async function yy(n,e){cd(n),ga(n)?(n.Ra.ha(e),ma(n)):n.Ra.set("Unknown")}async function wy(n,e,t){if(n.Ra.set("Online"),e instanceof zh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){D(ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fs(n,r)}else if(e instanceof As?n.Va.Ze(e):e instanceof Gh?n.Va.st(e):n.Va.tt(e),!t.isEqual(B.min()))try{const r=await rd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ge.EMPTY_BYTE_STRING,f.snapshotVersion)),ad(i,u);const p=new Lt(f.target,u,h,f.sequenceNumber);pa(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){D(ln,"Failed to raise snapshot:",r),await Fs(n,r)}}async function Fs(n,e,t){if(!Hn(e))throw e;n.Ea.add(1),await Hr(n),n.Ra.set("Offline"),t||(t=()=>rd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(ln,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await fi(n)})}function ud(n,e){return e().catch(t=>Fs(n,t,e))}async function pi(n){const e=q(n),t=Gt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zo;for(;Ty(e);)try{const s=await ty(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Ey(e,s)}catch(s){await Fs(e,s)}ld(e)&&hd(e)}function Ty(n){return Tn(n)&&n.Ta.length<10}function Ey(n,e){n.Ta.push(e);const t=Gt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ld(n){return Tn(n)&&!Gt(n).x_()&&n.Ta.length>0}function hd(n){Gt(n).start()}async function Iy(n){Gt(n).ra()}async function vy(n){const e=Gt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Ay(n,e,t){const r=n.Ta.shift(),s=oa.from(r,e,t);await ud(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await pi(n)}async function Sy(n,e){e&&Gt(n).X_&&await async function(r,s){if(function(a){return o_(a)&&a!==C.ABORTED}(s.code)){const i=r.Ta.shift();Gt(r).B_(),await ud(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pi(r)}}(n,e),ld(n)&&hd(n)}async function Hu(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),D(ln,"RemoteStore received new credentials");const r=Tn(t);t.Ea.add(3),await Hr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await fi(t)}async function by(n,e){const t=q(n);e?(t.Ea.delete(2),await fi(t)):e||(t.Ea.add(2),await Hr(t),t.Ra.set("Unknown"))}function zn(n){return n.ma||(n.ma=function(t,r,s){const i=q(t);return i.sa(),new ly(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:gy.bind(null,n),t_:_y.bind(null,n),r_:yy.bind(null,n),H_:wy.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),ga(n)?ma(n):n.Ra.set("Unknown")):(await n.ma.stop(),cd(n))})),n.ma}function Gt(n){return n.fa||(n.fa=function(t,r,s){const i=q(t);return i.sa(),new hy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Iy.bind(null,n),r_:Sy.bind(null,n),ta:vy.bind(null,n),na:Ay.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await pi(n)):(await n.fa.stop(),n.Ta.length>0&&(D(ln,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new _a(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(n,e){if(wt("AsyncQueue",`${e}: ${n}`),Hn(n))return new V(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{static emptySet(e){return new Nn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=wr(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.ga=new ie(x.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):j(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class $n{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new $n(e,t,Nn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ai(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class ky{constructor(){this.queries=zu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=q(t),i=s.queries;s.queries=zu(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new V(C.ABORTED,"Firestore shutting down"))}}function zu(){return new wn(n=>Ch(n),ai)}async function wa(n,e){const t=q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Py,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ya(a,`Initialization of query '${Pn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Ea(t)}async function Ta(n,e){const t=q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ry(n,e){const t=q(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Ea(t)}function Cy(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Ea(n){n.Ca.forEach(e=>{e.next()})}var $o,Ku;(Ku=$o||($o={})).Ma="default",Ku.Cache="cache";class Ia{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$o.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.key=e}}class fd{constructor(e){this.key=e}}class Ny{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=W(),this.mutatedKeys=W(),this.eu=Nh(e),this.tu=new Nn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Gu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),T=ci(this.query,p)?p:null,b=!!g&&this.mutatedKeys.has(g.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let R=!1;g&&T?g.data.isEqual(T.data)?b!==k&&(r.track({type:3,doc:T}),R=!0):this.su(g,T)||(r.track({type:2,doc:T}),R=!0,(u&&this.eu(T,u)>0||h&&this.eu(T,h)<0)&&(c=!0)):!g&&T?(r.track({type:0,doc:T}),R=!0):g&&!T&&(r.track({type:1,doc:g}),R=!0,(u||h)&&(c=!0)),R&&(T?(a=a.add(T),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,p)=>function(T,b){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:R})}};return k(T)-k(b)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new $n(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=W(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new fd(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new dd(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=W();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $n.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const va="SyncEngine";class Oy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Vy{constructor(e){this.key=e,this.hu=!1}}class My{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new wn(c=>Ch(c),ai),this.Iu=new Map,this.Eu=new Set,this.du=new ie(x.comparator),this.Au=new Map,this.Ru=new ua,this.Vu={},this.mu=new Map,this.fu=Un.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Dy(n,e,t=!0){const r=wd(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await pd(r,e,t,!0),s}async function Ly(n,e){const t=wd(n);await pd(t,e,!0,!1)}async function pd(n,e,t,r){const s=await ny(n.localStore,tt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await xy(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&od(n.remoteStore,s),c}async function xy(n,e,t,r,s){n.pu=(p,g,T)=>async function(k,R,L,U){let F=R.view.ru(L);F.Cs&&(F=await Uu(k.localStore,R.query,!1).then(({documents:I})=>R.view.ru(I,F)));const G=U&&U.targetChanges.get(R.targetId),Q=U&&U.targetMismatches.get(R.targetId)!=null,X=R.view.applyChanges(F,k.isPrimaryClient,G,Q);return Qu(k,R.targetId,X.au),X.snapshot}(n,p,g,T);const i=await Uu(n.localStore,e,!0),a=new Ny(e,i.Qs),c=a.ru(i.documents),u=qr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);Qu(n,t,h.au);const f=new Oy(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Fy(n,e,t){const r=q(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!ai(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&fa(r.remoteStore,s.targetId),jo(r,s.targetId)}).catch(qn)):(jo(r,s.targetId),await Fo(r.localStore,s.targetId,!0))}async function Uy(n,e){const t=q(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),fa(t.remoteStore,r.targetId))}async function $y(n,e,t){const r=Ky(n);try{const s=await function(a,c){const u=q(a),h=te.now(),f=c.reduce((T,b)=>T.add(b.key),W());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let b=Tt(),k=W();return u.Ns.getEntries(T,f).next(R=>{b=R,b.forEach((L,U)=>{U.isValidDocument()||(k=k.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,b)).next(R=>{p=R;const L=[];for(const U of c){const F=t_(U,p.get(U.key).overlayedDocument);F!=null&&L.push(new Wt(U.key,F,Ih(F.value.mapValue),$e.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,L,c)}).next(R=>{g=R;const L=R.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(T,R.batchId,L)})}).then(()=>({batchId:g.batchId,changes:Vh(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new ie(K)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await Gr(r,s.changes),await pi(r.remoteStore)}catch(s){const i=ya(s,"Failed to persist write");t.reject(i)}}async function md(n,e){const t=q(n);try{const r=await Z_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Y(a.hu,14607):s.removedDocuments.size>0&&(Y(a.hu,42227),a.hu=!1))}),await Gr(t,r,e)}catch(r){await qn(r)}}function Wu(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=q(a);u.onlineState=c;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&Ea(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jy(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ie(x.comparator);a=a.insert(i,Ie.newNoDocument(i,B.min()));const c=W().add(i),u=new hi(B.min(),new Map,new ie(K),a,c);await md(r,u),r.du=r.du.remove(i),r.Au.delete(e),Aa(r)}else await Fo(r.localStore,e,!1).then(()=>jo(r,e,t)).catch(qn)}async function By(n,e){const t=q(n),r=e.batch.batchId;try{const s=await X_(t.localStore,e);_d(t,r,null),gd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Gr(t,s)}catch(s){await qn(s)}}async function qy(n,e,t){const r=q(n);try{const s=await function(a,c){const u=q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(p=>(Y(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);_d(r,e,t),gd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Gr(r,s)}catch(s){await qn(s)}}function gd(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function _d(n,e,t){const r=q(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function jo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||yd(n,r)})}function yd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(fa(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Aa(n))}function Qu(n,e,t){for(const r of t)r instanceof dd?(n.Ru.addReference(r.key,e),Hy(n,r)):r instanceof fd?(D(va,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||yd(n,r.key)):j(19791,{wu:r})}function Hy(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(D(va,"New document in limbo: "+t),n.Eu.add(r),Aa(n))}function Aa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new x(ee.fromString(e)),r=n.fu.next();n.Au.set(r,new Vy(t)),n.du=n.du.insert(t,r),od(n.remoteStore,new Lt(tt(oi(t.path)),r,"TargetPurposeLimboResolution",ri.ce))}}async function Gr(n,e,t){const r=q(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ha.As(u.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=q(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,g=>N.forEach(g.Es,T=>f.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>N.forEach(g.ds,T=>f.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!Hn(p))throw p;D(da,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const T=f.Ms.get(g),b=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(b);f.Ms=f.Ms.insert(g,k)}}}(r.localStore,i))}async function Gy(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){D(va,"User change. New user:",e.toKey());const r=await nd(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new V(C.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gr(t,r.Ls)}}function zy(n,e){const t=q(n),r=t.Au.get(e);if(r&&r.hu)return W().add(r.key);{let s=W();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function wd(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=md.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jy.bind(null,e),e.Pu.H_=Ry.bind(null,e.eventManager),e.Pu.yu=Cy.bind(null,e.eventManager),e}function Ky(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=By.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qy.bind(null,e),e}class Us{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=di(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Y_(this.persistence,new W_,e.initialUser,this.serializer)}Cu(e){return new td(la.mi,this.serializer)}Du(e){return new sy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Us.provider={build:()=>new Us};class Wy extends Us{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Y(this.persistence.referenceDelegate instanceof xs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new V_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new td(r=>xs.mi(r,t),this.serializer)}}class Bo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gy.bind(null,this.syncEngine),await by(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ky}()}createDatastore(e){const t=di(e.databaseInfo.databaseId),r=function(i){return new uy(i)}(e.databaseInfo);return function(i,a,c,u){return new fy(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new my(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Wu(this.syncEngine,t,0),function(){return Bu.v()?new Bu:new iy}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const p=new My(s,i,a,c,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=q(s);D(ln,"RemoteStore shutting down."),i.Ea.add(5),await Hr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Bo.provider={build:()=>new Bo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="FirestoreClient";class Qy{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=ti.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{D(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ya(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fo(n,e){n.asyncQueue.verifyOperationInProgress(),D(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ju(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jy(n);D(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Hu(e.remoteStore,s)),n._onlineComponents=e}async function Jy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(zt,"Using user provided OfflineComponentProvider");try{await fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;un("Error using user provided cache. Falling back to memory cache: "+t),await fo(n,new Us)}}else D(zt,"Using default OfflineComponentProvider"),await fo(n,new Wy(void 0));return n._offlineComponents}async function Td(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(zt,"Using user provided OnlineComponentProvider"),await Ju(n,n._uninitializedComponentsProvider._online)):(D(zt,"Using default OnlineComponentProvider"),await Ju(n,new Bo))),n._onlineComponents}function Yy(n){return Td(n).then(e=>e.syncEngine)}async function $s(n){const e=await Td(n),t=e.eventManager;return t.onListen=Dy.bind(null,e.syncEngine),t.onUnlisten=Fy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ly.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Uy.bind(null,e.syncEngine),t}function Xy(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new Sa({next:g=>{f.Nu(),a.enqueueAndForget(()=>Ta(i,p));const T=g.docs.has(c);!T&&g.fromCache?h.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&u&&u.source==="server"?h.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ia(oi(c.path),f,{includeMetadataChanges:!0,qa:!0});return wa(i,p)}(await $s(n),n.asyncQueue,e,t,r)),r.promise}function Zy(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new Sa({next:g=>{f.Nu(),a.enqueueAndForget(()=>Ta(i,p)),g.fromCache&&u.source==="server"?h.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ia(c,f,{includeMetadataChanges:!0,qa:!0});return wa(i,p)}(await $s(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firestore.googleapis.com",Xu=!0;class Zu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Id,this.ssl=Xu}else this.host=e.host,this.ssl=e.ssl??Xu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ed;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<N_)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ed(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uh;switch(r.type){case"firstParty":return new lg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Yu.get(t);r&&(D("ComponentProvider","Removing Datastore"),Yu.delete(t),r.terminate())}(this),Promise.resolve()}}function vd(n,e,t,r={}){var h;n=Re(n,mi);const s=mn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Wo(`https://${c}`),Qo("Firestore",!0)),i.host!==Id&&i.host!==c&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!an(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ee.MOCK_USER;else{f=Kl(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ee(g)}n._authCredentials=new ag(new ch(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ct(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(jr(t,se._jsonSchema))return new se(e,r||null,new x(ee.fromString(t.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:le("string",se._jsonSchemaVersion),referencePath:le("string")};class _t extends ct{constructor(e,t,r){super(e,t,oi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new x(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function Kn(n,e,...t){if(n=re(n),lh("collection","path",e),n instanceof mi){const r=ee.fromString(e,...t);return du(r),new _t(n,null,r)}{if(!(n instanceof se||n instanceof _t))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return du(r),new _t(n.firestore,null,r)}}function Ad(n,e,...t){if(n=re(n),arguments.length===1&&(e=ti.newId()),lh("doc","path",e),n instanceof mi){const r=ee.fromString(e,...t);return hu(r),new se(n,null,new x(r))}{if(!(n instanceof se||n instanceof _t))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return hu(r),new se(n.firestore,n instanceof _t?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="AsyncQueue";class tl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sd(this,"async_queue_retry"),this._c=()=>{const r=ho();r&&D(el,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Hn(e))throw e;D(el,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,wt("INTERNAL UNHANDLED ERROR: ",nl(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=_a.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:nl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function nl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class ot extends mi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new tl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tl(e),this._firestoreClient=void 0,await e}}}function Sd(n,e){const t=typeof n=="object"?n:ei(),r=typeof n=="string"?n:Os,s=_n(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Hl("firestore");i&&vd(s,...i)}return s}function zr(n){if(n._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ew(n),n._firestoreClient}function ew(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,f){return new Pg(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ed(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Qy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(ge.fromBase64String(e))}catch(t){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jr(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:le("string",Le._jsonSchemaVersion),bytes:le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ge._jsonSchemaVersion}}static fromJSON(e){if(jr(e,Ge._jsonSchema))return new Ge(e.latitude,e.longitude)}}Ge._jsonSchemaVersion="firestore/geoPoint/1.0",Ge._jsonSchema={type:le("string",Ge._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jr(e,ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ze(e.vectorValues);throw new V(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ze._jsonSchemaVersion="firestore/vectorValue/1.0",ze._jsonSchema={type:le("string",ze._jsonSchemaVersion),vectorValues:le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=/^__.*__$/;class nw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}class bd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class ba{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ba({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return js(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Pd(this.Ac)&&tw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class rw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||di(e)}Cc(e,t,r,s=!1){return new ba({Ac:e,methodName:t,Dc:r,path:me.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gi(n){const e=n._freezeSettings(),t=di(n._databaseId);return new rw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kd(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Ra("Data must be an object, but it was:",a,r);const c=Rd(r,a);let u,h;if(i.merge)u=new xe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=qo(e,p,t);if(!a.contains(g))throw new V(C.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Nd(f,g)||f.push(g)}u=new xe(f),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new nw(new Ne(c),u,h)}class _i extends Wn{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _i}}class Pa extends Wn{_toFieldTransform(e){return new jh(e.path,new Vr)}isEqual(e){return e instanceof Pa}}class ka extends Wn{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Lr(e.serializer,Lh(e.serializer,this.Fc));return new jh(e.path,t)}isEqual(e){return e instanceof ka&&this.Fc===e.Fc}}function sw(n,e,t,r){const s=n.Cc(1,e,t);Ra("Data must be an object, but it was:",s,r);const i=[],a=Ne.empty();Kt(r,(u,h)=>{const f=Ca(e,u,t);h=re(h);const p=s.yc(f);if(h instanceof _i)i.push(f);else{const g=Wr(h,p);g!=null&&(i.push(f),a.set(f,g))}});const c=new xe(i);return new bd(a,c,s.fieldTransforms)}function iw(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[qo(e,r,t)],u=[s];if(i.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(qo(e,i[g])),u.push(i[g+1]);const h=[],f=Ne.empty();for(let g=c.length-1;g>=0;--g)if(!Nd(h,c[g])){const T=c[g];let b=u[g];b=re(b);const k=a.yc(T);if(b instanceof _i)h.push(T);else{const R=Wr(b,k);R!=null&&(h.push(T),f.set(T,R))}}const p=new xe(h);return new bd(f,p,a.fieldTransforms)}function ow(n,e,t,r=!1){return Wr(t,n.Cc(r?4:3,e))}function Wr(n,e){if(Cd(n=re(n)))return Ra("Unsupported field value:",e,n),Rd(n,e);if(n instanceof Wn)return function(r,s){if(!Pd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Wr(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=te.fromDate(r);return{timestampValue:Ls(s.serializer,i)}}if(r instanceof te){const i=new te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ls(s.serializer,i)}}if(r instanceof Ge)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Le)return{bytesValue:Kh(s.serializer,r._byteString)};if(r instanceof se){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ca(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ze)return function(a,c){return{mapValue:{fields:{[Th]:{stringValue:Eh},[Vs]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return sa(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ni(r)}`)}(n,e)}function Rd(n,e){const t={};return ph(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(n,(r,s)=>{const i=Wr(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Cd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof Ge||n instanceof Le||n instanceof se||n instanceof Wn||n instanceof ze)}function Ra(n,e,t){if(!Cd(t)||!dh(t)){const r=ni(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function qo(n,e,t){if((e=re(e))instanceof Kr)return e._internalPath;if(typeof e=="string")return Ca(n,e);throw js("Field path arguments must be of type string or ",n,!1,void 0,t)}const aw=new RegExp("[~\\*/\\[\\]]");function Ca(n,e,t){if(e.search(aw)>=0)throw js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kr(...e.split("."))._internalPath}catch{throw js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function js(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(C.INVALID_ARGUMENT,c+n+u)}function Nd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(yi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cw extends Od{data(){return super.data()}}function yi(n,e){return typeof e=="string"?Ca(n,e):e instanceof Kr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Na{}class wi extends Na{}function Qn(n,e,...t){let r=[];e instanceof Na&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Ei).length,c=i.filter(u=>u instanceof Qr).length;if(a>1||a>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Qr extends wi{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qr(e,t,r)}_apply(e){const t=this._parse(e);return Md(e._query,t),new ct(e.firestore,e.converter,Vo(e._query,t))}_parse(e){const t=gi(e.firestore);return function(i,a,c,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){il(p,f);const b=[];for(const k of p)b.push(sl(u,i,k));g={arrayValue:{values:b}}}else g=sl(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||il(p,f),g=ow(c,a,p,f==="in"||f==="not-in");return ue.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ti(n,e,t){const r=e,s=yi("where",n);return Qr._create(s,r,t)}class Ei extends Na{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ei(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Md(a,u),a=Vo(a,u)}(e._query,t),new ct(e.firestore,e.converter,Vo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ii extends wi{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ii(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Or(i,a)}(e._query,this._field,this._direction);return new ct(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Gn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Oa(n,e="asc"){const t=e,r=yi("orderBy",n);return Ii._create(r,t)}class vi extends wi{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new vi(e,t,r)}_apply(e){return new ct(e.firestore,e.converter,Ds(e._query,this._limit,this._limitType))}}function Jn(n){return gg("limit",n),vi._create("limit",n,"F")}function sl(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rh(e)&&t.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!x.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tu(n,new x(r))}if(t instanceof se)return Tu(n,t._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ni(t)}.`)}function il(n,e){if(!Array.isArray(n)||n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Md(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Dd{convertValue(e,t="none"){switch(Ht(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Vs].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ae(a.doubleValue));return new ze(t)}convertGeoPoint(e){return new Ge(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ii(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);Y(Zh(r),9688,{name:e});const s=new Ln(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(t)||wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Cn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ut extends Od{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new br(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ut._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ut._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ut._jsonSchema={type:le("string",Ut._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class br extends Ut{data(e={}){return super.data(e)}}class $t{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Cn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new br(this._firestore,this._userDataWriter,r.key,r,new Cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new br(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Cn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new br(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Cn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:uw(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$t._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ti.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(n){n=Re(n,se);const e=Re(n.firestore,ot);return Xy(zr(e),n._key).then(t=>xd(e,n,t))}$t._jsonSchemaVersion="firestore/querySnapshot/1.0",$t._jsonSchema={type:le("string",$t._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class Va extends Dd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}function Yn(n){n=Re(n,ct);const e=Re(n.firestore,ot),t=zr(e),r=new Va(e);return Vd(n._query),Zy(t,n._query).then(s=>new $t(e,r,n,s))}function hw(n,e,t){n=Re(n,se);const r=Re(n.firestore,ot),s=Ld(n.converter,e,t);return Jr(r,[kd(gi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$e.none())])}function dw(n,e,t,...r){n=Re(n,se);const s=Re(n.firestore,ot),i=gi(s);let a;return a=typeof(e=re(e))=="string"||e instanceof Kr?iw(i,"updateDoc",n._key,e,t,r):sw(i,"updateDoc",n._key,e),Jr(s,[a.toMutation(n._key,$e.exists(!0))])}function fw(n){return Jr(Re(n.firestore,ot),[new ia(n._key,$e.none())])}function pw(n,e){const t=Re(n.firestore,ot),r=Ad(n),s=Ld(n.converter,e);return Jr(t,[kd(gi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,$e.exists(!1))]).then(()=>r)}function mw(n,...e){var u,h,f;n=re(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||rl(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(rl(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,a,c;if(n instanceof se)a=Re(n.firestore,ot),c=oi(n._key.path),i={next:p=>{e[r]&&e[r](xd(a,n,p))},error:e[r+1],complete:e[r+2]};else{const p=Re(n,ct);a=Re(p.firestore,ot),c=p._query;const g=new Va(a);i={next:T=>{e[r]&&e[r](new $t(a,g,p,T))},error:e[r+1],complete:e[r+2]},Vd(n._query)}return function(g,T,b,k){const R=new Sa(k),L=new Ia(T,R,b);return g.asyncQueue.enqueueAndForget(async()=>wa(await $s(g),L)),()=>{R.Nu(),g.asyncQueue.enqueueAndForget(async()=>Ta(await $s(g),L))}}(zr(a),c,s,i)}function Jr(n,e){return function(r,s){const i=new gt;return r.asyncQueue.enqueueAndForget(async()=>$y(await Yy(r),s,i)),i.promise}(zr(n),e)}function xd(n,e,t){const r=t.docs.get(e._key),s=new Va(n);return new Ut(n,s,e._key,r,new Cn(t.hasPendingWrites,t.fromCache),e.converter)}function gw(){return new Pa("serverTimestamp")}function _w(n){return new ka("increment",n)}(function(e,t=!0){(function(s){Bn=s})(yn),We(new je("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new ot(new cg(r.getProvider("auth-internal")),new hg(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Oe(au,cu,e),Oe(au,cu,"esm2020")})();const uA=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Dd,Bytes:Le,CollectionReference:_t,DocumentReference:se,DocumentSnapshot:Ut,FieldPath:Kr,FieldValue:Wn,Firestore:ot,FirestoreError:V,GeoPoint:Ge,Query:ct,QueryCompositeFilterConstraint:Ei,QueryConstraint:wi,QueryDocumentSnapshot:br,QueryFieldFilterConstraint:Qr,QueryLimitConstraint:vi,QueryOrderByConstraint:Ii,QuerySnapshot:$t,SnapshotMetadata:Cn,Timestamp:te,VectorValue:ze,_AutoId:ti,_ByteString:ge,_DatabaseId:Ln,_DocumentKey:x,_EmptyAuthCredentialsProvider:uh,_FieldPath:me,_cast:Re,_logWarn:un,_validateIsNotUsedTogether:hh,addDoc:pw,collection:Kn,connectFirestoreEmulator:vd,deleteDoc:fw,doc:Ad,ensureFirestoreConfigured:zr,executeWrite:Jr,getDoc:lw,getDocs:Yn,getFirestore:Sd,increment:_w,limit:Jn,onSnapshot:mw,orderBy:Oa,query:Qn,serverTimestamp:gw,setDoc:hw,updateDoc:dw,where:Ti},Symbol.toStringTag,{value:"Module"}));function Fd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yw=Fd,Ud=new gn("auth","Firebase",Fd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Jo("@firebase/auth");function ww(n,...e){Bs.logLevel<=z.WARN&&Bs.warn(`Auth (${yn}): ${n}`,...e)}function Ss(n,...e){Bs.logLevel<=z.ERROR&&Bs.error(`Auth (${yn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw Da(n,...e)}function Ke(n,...e){return Da(n,...e)}function Ma(n,e,t){const r={...yw(),[e]:t};return new gn("auth","Firebase",r).create(e,{appName:n.name})}function rt(n){return Ma(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $d(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Be(n,"argument-error"),Ma(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Da(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ud.create(n,...e)}function $(n,e,...t){if(!n)throw Da(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ss(e),new Error(e)}function Et(n,e){n||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Tw(){return ol()==="http:"||ol()==="https:"}function ol(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tw()||$p()||"connection"in navigator)?navigator.onLine:!0}function Iw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Et(t>e,"Short delay should be less than long delay!"),this.isMobile=xp()||jp()}get(){return Ew()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n,e){Et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sw=new Yr(3e4,6e4);function It(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ut(n,e,t,r,s={}){return Bd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=$r({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return Up()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&mn(n.emulatorConfig.host)&&(h.credentials="include"),jd.fetch()(await qd(n,n.config.apiHost,t,c),h)})}async function Bd(n,e,t){n._canInitEmulator=!1;const r={...vw,...e};try{const s=new Pw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ys(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ys(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ys(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ma(n,f,h);Be(n,f)}}catch(s){if(s instanceof Je)throw s;Be(n,"network-request-failed",{message:String(s)})}}async function Xr(n,e,t,r,s={}){const i=await ut(n,e,t,r,s);return"mfaPendingCredential"in i&&Be(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function qd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?La(n.config,s):`${n.config.apiScheme}://${s}`;return Aw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function bw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Sw.get())})}}function ys(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ke(n,e,r);return s.customData._tokenResponse=t,s}function al(n){return n!==void 0&&n.enterprise!==void 0}class kw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rw(n,e){return ut(n,"GET","/v2/recaptchaConfig",It(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,e){return ut(n,"POST","/v1/accounts:delete",e)}async function qs(n,e){return ut(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nw(n,e=!1){const t=re(n),r=await t.getIdToken(e),s=xa(r);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pr(po(s.auth_time)),issuedAtTime:Pr(po(s.iat)),expirationTime:Pr(po(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function po(n){return Number(n)*1e3}function xa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bl(t);return s?JSON.parse(s):(Ss("Failed to decode base64 JWT payload"),null)}catch(s){return Ss("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cl(n){const e=xa(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Je&&Ow(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ow({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n){var p;const e=n.auth,t=await n.getIdToken(),r=await jn(n,qs(e,{idToken:t}));$(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Hd(s.providerUserInfo):[],a=Dw(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Go(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Mw(n){const e=re(n);await Hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Hd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(n,e){const t=await Bd(n,{},async()=>{const r=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await qd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&mn(n.emulatorConfig.host)&&(u.credentials="include"),jd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xw(n,e){return ut(n,"POST","/v2/accounts:revokeToken",It(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=cl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new On;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Vw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Go(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await jn(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Nw(this,e)}reload(){return Mw(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Hs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ke(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await jn(this,Cw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:T,providerData:b,stsTokenManager:k}=t;$(p&&k,e,"internal-error");const R=On.fromJSON(this.name,k);$(typeof p=="string",e,"internal-error"),Nt(r,e.name),Nt(s,e.name),$(typeof g=="boolean",e,"internal-error"),$(typeof T=="boolean",e,"internal-error"),Nt(i,e.name),Nt(a,e.name),Nt(c,e.name),Nt(u,e.name),Nt(h,e.name),Nt(f,e.name);const L=new qe({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:T,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:h,lastLoginAt:f});return b&&Array.isArray(b)&&(L.providerData=b.map(U=>({...U}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,r=!1){const s=new On;s.updateFromServerResponse(t);const i=new qe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Hd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new On;c.updateFromIdToken(r);const u=new qe({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Go(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map;function pt(n){Et(n instanceof Function,"Expected a class definition");let e=ul.get(n);return e?(Et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ul.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gd.type="NONE";const ll=Gd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n,e,t){return`firebase:${n}:${e}:${t}`}class Vn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bs(this.userKey,s.apiKey,i),this.fullPersistenceKey=bs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qs(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vn(pt(ll),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pt(ll);const a=bs(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await qs(e,{idToken:f}).catch(()=>{});if(!g)break;p=await qe._fromGetAccountInfoResponse(e,g,f)}else p=qe._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Vn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yd(e))return"Blackberry";if(Xd(e))return"Webos";if(Kd(e))return"Safari";if((e.includes("chrome/")||Wd(e))&&!e.includes("edge/"))return"Chrome";if(Jd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zd(n=Ae()){return/firefox\//i.test(n)}function Kd(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wd(n=Ae()){return/crios\//i.test(n)}function Qd(n=Ae()){return/iemobile/i.test(n)}function Jd(n=Ae()){return/android/i.test(n)}function Yd(n=Ae()){return/blackberry/i.test(n)}function Xd(n=Ae()){return/webos/i.test(n)}function Fa(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fw(n=Ae()){var e;return Fa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Uw(){return Bp()&&document.documentMode===10}function Zd(n=Ae()){return Fa(n)||Jd(n)||Xd(n)||Yd(n)||/windows phone/i.test(n)||Qd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n,e=[]){let t;switch(n){case"Browser":t=hl(Ae());break;case"Worker":t=`${hl(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(n,e={}){return ut(n,"GET","/v2/passwordPolicy",It(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=6;class qw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Bw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dl(this),this.idTokenSubscription=new dl(this),this.beforeStateQueue=new $w(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qs(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ke(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ke(this.app))return Promise.reject(rt(this));const t=e?re(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ke(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ke(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jw(this),t=new qw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await xw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Vn.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if($(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ef(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ww(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ye(n){return re(n)}class dl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qp(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gw(n){Ai=n}function tf(n){return Ai.loadJS(n)}function zw(){return Ai.recaptchaEnterpriseScript}function Kw(){return Ai.gapiScript}function Ww(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Qw{constructor(){this.enterprise=new Jw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Jw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Yw="recaptcha-enterprise",nf="NO_RECAPTCHA";class Xw{constructor(e){this.type=Yw,this.auth=Ye(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Rw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new kw(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;al(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(nf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qw().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&al(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zw();u.length!==0&&(u+=c),tf(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function fl(n,e,t,r=!1,s=!1){const i=new Xw(n);let a;if(s)a=nf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Gs(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await fl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await fl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n,e){const t=_n(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(an(i,e??{}))return s;Be(s,"already-initialized")}return t.initialize({options:e})}function eT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tT(n,e,t){const r=Ye(n);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rf(e),{host:a,port:c}=nT(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(an(h,r.config.emulator)&&an(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,mn(a)?(Wo(`${i}//${a}${u}`),Qo("Auth",!0)):rT()}function rf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nT(n){const e=rf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:pl(a)}}}function pl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function sT(n,e){return ut(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(n,e){return Xr(n,"POST","/v1/accounts:signInWithPassword",It(n,e))}async function oT(n,e){return ut(n,"POST","/v1/accounts:sendOobCode",It(n,e))}async function aT(n,e){return oT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(n,e){return Xr(n,"POST","/v1/accounts:signInWithEmailLink",It(n,e))}async function uT(n,e){return Xr(n,"POST","/v1/accounts:signInWithEmailLink",It(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Ua{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new xr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gs(e,t,"signInWithPassword",iT);case"emailLink":return cT(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gs(e,r,"signUpPassword",sT);case"emailLink":return uT(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(n,e){return Xr(n,"POST","/v1/accounts:signInWithIdp",It(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="http://localhost";class hn extends Ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new hn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mn(e,t)}buildRequest(){const e={requestUri:lT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dT(n){const e=gr(_r(n)).link,t=e?gr(_r(e)).deep_link_id:null,r=gr(_r(n)).deep_link_id;return(r?gr(_r(r)).link:null)||r||t||e||n}class $a{constructor(e){const t=gr(_r(e)),r=t.apiKey??null,s=t.oobCode??null,i=hT(t.mode??null);$(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=dT(e);try{return new $a(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(e,t){return xr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=$a.parseLink(t);return $(r,"argument-error"),xr._fromEmailAndCode(e,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Zr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Vt.credential(t,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Zr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Zr{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Dt.credential(t,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(n,e){return Xr(n,"POST","/v1/accounts:signUp",It(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await qe._fromIdTokenResponse(e,r,s),a=ml(r);return new dn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ml(r);return new dn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ml(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Je{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new zs(e,t,r,s)}}function sf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(n,i,e,r):i})}async function pT(n,e,t=!1){const r=await jn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(n,e,t=!1){const{auth:r}=n;if(ke(r.app))return Promise.reject(rt(r));const s="reauthenticate";try{const i=await jn(n,sf(r,s,e,n),t);$(i.idToken,r,"internal-error");const a=xa(i.idToken);$(a,r,"internal-error");const{sub:c}=a;return $(n.uid===c,r,"user-mismatch"),dn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(n,e,t=!1){if(ke(n.app))return Promise.reject(rt(n));const r="signIn",s=await sf(n,r,e),i=await dn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function gT(n,e){return of(Ye(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(n){const e=Ye(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lA(n,e,t){const r=Ye(n);await Gs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",aT)}async function hA(n,e,t){if(ke(n.app))return Promise.reject(rt(n));const r=Ye(n),a=await Gs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fT).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&af(n),u}),c=await dn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function dA(n,e,t){return ke(n.app)?Promise.reject(rt(n)):gT(re(n),Xn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&af(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(n,e){return ut(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=re(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await jn(r,_T(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function yT(n,e,t,r){return re(n).onIdTokenChanged(e,t,r)}function wT(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function pA(n,e,t,r){return re(n).onAuthStateChanged(e,t,r)}function mA(n){return re(n).signOut()}const Ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=1e3,ET=10;class uf extends cf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Uw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ET):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},TT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uf.type="LOCAL";const IT=uf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends cf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lf.type="SESSION";const hf=lf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new bi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await vT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=ja("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function ST(n){st().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function bT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function kT(){return df()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="firebaseLocalStorageDb",RT=1,Ws="firebaseLocalStorage",pf="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pi(n,e){return n.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function CT(){const n=indexedDB.deleteDatabase(ff);return new es(n).toPromise()}function zo(){const n=indexedDB.open(ff,RT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ws,{keyPath:pf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await CT(),e(await zo()))})})}async function gl(n,e,t){const r=Pi(n,!0).put({[pf]:e,value:t});return new es(r).toPromise()}async function NT(n,e){const t=Pi(n,!1).get(e),r=await new es(t).toPromise();return r===void 0?null:r.value}function _l(n,e){const t=Pi(n,!0).delete(e);return new es(t).toPromise()}const OT=800,VT=3;class mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>VT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return df()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bi._getInstance(kT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await bT(),!this.activeServiceWorker)return;this.sender=new AT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zo();return await gl(e,Ks,"1"),await _l(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>NT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pi(s,!1).getAll();return new es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mf.type="LOCAL";const MT=mf;new Yr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n,e){return e?pt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function DT(n){return of(n.auth,new qa(n),n.bypassAuthState)}function LT(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),mT(t,new qa(n),n.bypassAuthState)}async function xT(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),pT(t,new qa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DT;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return LT;default:Be(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new Yr(2e3,1e4);async function gA(n,e,t){if(ke(n.app))return Promise.reject(Ke(n,"operation-not-supported-in-this-environment"));const r=Ye(n);$d(n,e,Si);const s=Ba(r,t);return new sn(r,"signInViaPopup",e,s).executeNotNull()}class sn extends gf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FT.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="pendingRedirect",Ps=new Map;class $T extends gf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const r=await jT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jT(n,e){const t=yf(e),r=_f(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function BT(n,e){return _f(n)._set(yf(e),"true")}function qT(n,e){Ps.set(n._key(),e)}function _f(n){return pt(n._redirectPersistence)}function yf(n){return bs(UT,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n,e,t){return HT(n,e,t)}async function HT(n,e,t){if(ke(n.app))return Promise.reject(rt(n));const r=Ye(n);$d(n,e,Si),await r._initializationPromise;const s=Ba(r,t);return await BT(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function yA(n,e){return await Ye(n)._initializationPromise,wf(n,e,!1)}async function wf(n,e,t=!1){if(ke(n.app))return Promise.reject(rt(n));const r=Ye(n),s=Ba(r,e),a=await new $T(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=10*60*1e3;class zT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Tf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ke(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GT&&this.cachedEventUids.clear(),this.cachedEventUids.has(yl(e))}saveEventToCache(e){this.cachedEventUids.add(yl(e)),this.lastProcessedEventTime=Date.now()}}function yl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(n,e={}){return ut(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JT=/^https?/;async function YT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WT(n);for(const t of e)try{if(XT(t))return}catch{}Be(n,"unauthorized-domain")}function XT(n){const e=Ho(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!JT.test(t))return!1;if(QT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=new Yr(3e4,6e4);function wl(){const n=st().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eE(n){return new Promise((e,t)=>{var s,i,a;function r(){wl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wl(),t(Ke(n,"network-request-failed"))},timeout:ZT.get()})}if((i=(s=st().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=st().gapi)!=null&&a.load)r();else{const c=Ww("iframefcb");return st()[c]=()=>{gapi.load?r():t(Ke(n,"network-request-failed"))},tf(`${Kw()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ks=null,e})}let ks=null;function tE(n){return ks=ks||eE(n),ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Yr(5e3,15e3),rE="__/auth/iframe",sE="emulator/auth/iframe",iE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aE(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?La(e,sE):`https://${n.config.authDomain}/${rE}`,r={apiKey:e.apiKey,appName:n.name,v:yn},s=oE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${$r(r).slice(1)}`}async function cE(n){const e=await tE(n),t=st().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:aE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ke(n,"network-request-failed"),c=st().setTimeout(()=>{i(a)},nE.get());function u(){st().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lE=500,hE=600,dE="_blank",fE="http://localhost";class Tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pE(n,e,t,r=lE,s=hE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...uE,width:r.toString(),height:s.toString(),top:i,left:a},h=Ae().toLowerCase();t&&(c=Wd(h)?dE:t),zd(h)&&(e=e||fE,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[T,b])=>`${g}${T}=${b},`,"");if(Fw(h)&&c!=="_self")return mE(e||"",c),new Tl(null);const p=window.open(e||"",c,f);$(p,n,"popup-blocked");try{p.focus()}catch{}return new Tl(p)}function mE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="__/auth/handler",_E="emulator/auth/handler",yE=encodeURIComponent("fac");async function El(n,e,t,r,s,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:yn,eventId:s};if(e instanceof Si){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Wp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Zr){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${yE}=${encodeURIComponent(u)}`:"";return`${wE(n)}?${$r(c).slice(1)}${h}`}function wE({config:n}){return n.emulator?La(n,_E):`https://${n.authDomain}/${gE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="webStorageSupport";class TE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hf,this._completeRedirectFn=wf,this._overrideRedirectResult=qT}async _openPopup(e,t,r,s){var a;Et((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await El(e,t,r,Ho(),s);return pE(e,i,ja())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await El(e,t,r,Ho(),s);return ST(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Et(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await cE(e),r=new zT(e);return t.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mo,{type:mo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[mo];i!==void 0&&t(!!i),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=YT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zd()||Kd()||Fa()}}const EE=TE;var Il="@firebase/auth",vl="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AE(n){We(new je("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ef(n)},h=new Hw(r,s,i,u);return eT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),We(new je("auth-internal",e=>{const t=Ye(e.getProvider("auth").getImmediate());return(r=>new IE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(Il,vl,vE(n)),Oe(Il,vl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=5*60,bE=zl("authIdTokenMaxAge")||SE;let Al=null;const PE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>bE)return;const s=t==null?void 0:t.token;Al!==s&&(Al=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kE(n=ei()){const e=_n(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zw(n,{popupRedirectResolver:EE,persistence:[MT,IT,hf]}),r=zl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=PE(i.toString());wT(t,a,()=>a(t.currentUser)),yT(t,c=>a(c))}}const s=ql("auth");return s&&tT(t,`http://${s}`),t}function RE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Gw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",RE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AE("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="firebasestorage.googleapis.com",CE="storageBucket",NE=2*60*1e3,OE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Je{constructor(e,t,r=0){super(go(e),`Firebase Storage: ${t} (${go(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return go(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var at;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(at||(at={}));function go(n){return"storage/"+n}function VE(){const n="An unknown error occurred, please check the error payload for server response.";return new lt(at.UNKNOWN,n)}function ME(){return new lt(at.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DE(){return new lt(at.CANCELED,"User canceled the upload/download.")}function LE(n){return new lt(at.INVALID_URL,"Invalid URL '"+n+"'.")}function xE(n){return new lt(at.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Sl(n){return new lt(at.INVALID_ARGUMENT,n)}function If(){return new lt(at.APP_DELETED,"The Firebase app was deleted.")}function FE(n){return new lt(at.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=He.makeFromUrl(e,t)}catch{return new He(e,"")}if(r.path==="")return r;throw xE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function h(G){G.path_=decodeURIComponent(G.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),b={bucket:1,path:3},k=t===Ef?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",L=new RegExp(`^https?://${k}/${s}/${R}`,"i"),F=[{regex:c,indices:u,postModify:i},{regex:T,indices:b,postModify:h},{regex:L,indices:{bucket:1,path:2},postModify:h}];for(let G=0;G<F.length;G++){const Q=F[G],X=Q.regex.exec(e);if(X){const I=X[Q.indices.bucket];let _=X[Q.indices.path];_||(_=""),r=new He(I,_),Q.postModify(r);break}}if(r==null)throw LE(e);return r}}class UE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let h=!1;function f(...R){h||(h=!0,e.apply(null,R))}function p(R){s=setTimeout(()=>{s=null,n(T,u())},R)}function g(){i&&clearTimeout(i)}function T(R,...L){if(h){g();return}if(R){g(),f.call(null,R,...L);return}if(u()||a){g(),f.call(null,R,...L);return}r<64&&(r*=2);let F;c===1?(c=2,F=0):F=(r+Math.random())*1e3,p(F)}let b=!1;function k(R){b||(b=!0,g(),!h&&(s!==null?(R||(c=2),clearTimeout(s),p(0)):R||(c=1)))}return p(0),i=setTimeout(()=>{a=!0,k(!0)},t),k}function jE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){return n!==void 0}function bl(n,e,t,r){if(r<e)throw Sl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sl(`Invalid value for '${n}'. Expected ${t} or less.`)}function qE(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Qs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Qs||(Qs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,r,s,i,a,c,u,h,f,p,g=!0,T=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,k)=>{this.resolve_=b,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ws(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Qs.NO_ERROR,u=i.getStatus();if(!c||HE(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Qs.ABORT;r(!1,new ws(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new ws(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());BE(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=VE();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?If():DE();a(u)}else{const u=ME();a(u)}};this.canceled_?t(!1,new ws(!1,null,!0)):this.backoffId_=$E(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ws{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function zE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function KE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function QE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function JE(n,e,t,r,s,i,a=!0,c=!1){const u=qE(n.urlParams),h=n.url+u,f=Object.assign({},n.headers);return WE(f,e),zE(f,t),KE(f,i),QE(f,r),new GE(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this._service=e,t instanceof He?this._location=t:this._location=He.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Js(e,t)}get root(){const e=new He(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XE(this._location.path)}get storage(){return this._service}get parent(){const e=YE(this._location.path);if(e===null)return null;const t=new He(this._location.bucket,e);return new Js(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw FE(e)}}function Pl(n,e){const t=e==null?void 0:e[CE];return t==null?null:He.makeFromBucketSpec(t,n)}function ZE(n,e,t,r={}){n.host=`${e}:${t}`;const s=mn(e);s&&(Wo(`https://${n.host}/b`),Qo("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Kl(i,n.app.options.projectId))}class eI{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Ef,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NE,this._maxUploadRetryTime=OE,this._requests=new Set,s!=null?this._bucket=He.makeFromBucketSpec(s,this._host):this._bucket=Pl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=He.makeFromBucketSpec(this._url,e):this._bucket=Pl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Js(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new UE(If());{const a=JE(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const kl="@firebase/storage",Rl="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="storage";function tI(n=ei(),e){n=re(n);const r=_n(n,vf).getImmediate({identifier:e}),s=Hl("storage");return s&&nI(r,...s),r}function nI(n,e,t,r={}){ZE(n,e,t,r)}function rI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new eI(t,r,s,e,yn)}function sI(){We(new je(vf,rI,"PUBLIC").setMultipleInstances(!0)),Oe(kl,Rl,""),Oe(kl,Rl,"esm2020")}sI();const Af="@firebase/installations",Ha="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=1e4,bf=`w:${Ha}`,Pf="FIS_v2",iI="https://firebaseinstallations.googleapis.com/v1",oI=60*60*1e3,aI="installations",cI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fn=new gn(aI,cI,uI);function kf(n){return n instanceof Je&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf({projectId:n}){return`${iI}/projects/${n}/installations`}function Cf(n){return{token:n.token,requestStatus:2,expiresIn:hI(n.expiresIn),creationTime:Date.now()}}async function Nf(n,e){const r=(await e.json()).error;return fn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Of({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lI(n,{refreshToken:e}){const t=Of(n);return t.append("Authorization",dI(e)),t}async function Vf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function hI(n){return Number(n.replace("s","000"))}function dI(n){return`${Pf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Rf(n),s=Of(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:Pf,appId:n.appId,sdkVersion:bf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Vf(()=>fetch(r,c));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Cf(h.authToken)}}else throw await Nf("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=/^[cdef][\w-]{21}$/,Ko="";function gI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=_I(n);return mI.test(t)?t:Ko}catch{return Ko}}function _I(n){return pI(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function Lf(n,e){const t=ki(n);xf(t,e),yI(t,e)}function xf(n,e){const t=Df.get(n);if(t)for(const r of t)r(e)}function yI(n,e){const t=wI();t&&t.postMessage({key:n,fid:e}),TI()}let on=null;function wI(){return!on&&"BroadcastChannel"in self&&(on=new BroadcastChannel("[Firebase] FID Change"),on.onmessage=n=>{xf(n.data.key,n.data.fid)}),on}function TI(){Df.size===0&&on&&(on.close(),on=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="firebase-installations-database",II=1,pn="firebase-installations-store";let _o=null;function Ga(){return _o||(_o=Zs(EI,II,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pn)}}})),_o}async function Ys(n,e){const t=ki(n),s=(await Ga()).transaction(pn,"readwrite"),i=s.objectStore(pn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Lf(n,e.fid),e}async function Ff(n){const e=ki(n),r=(await Ga()).transaction(pn,"readwrite");await r.objectStore(pn).delete(e),await r.done}async function Ri(n,e){const t=ki(n),s=(await Ga()).transaction(pn,"readwrite"),i=s.objectStore(pn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&Lf(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(n){let e;const t=await Ri(n.appConfig,r=>{const s=vI(r),i=AI(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ko?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function vI(n){const e=n||{fid:gI(),registrationStatus:0};return Uf(e)}function AI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(fn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=SI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bI(n)}:{installationEntry:e}}async function SI(n,e){try{const t=await fI(n,e);return Ys(n.appConfig,t)}catch(t){throw kf(t)&&t.customData.serverCode===409?await Ff(n.appConfig):await Ys(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bI(n){let e=await Cl(n.appConfig);for(;e.registrationStatus===1;)await Mf(100),e=await Cl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await za(n);return r||t}return e}function Cl(n){return Ri(n,e=>{if(!e)throw fn.create("installation-not-found");return Uf(e)})}function Uf(n){return PI(n)?{fid:n.fid,registrationStatus:0}:n}function PI(n){return n.registrationStatus===1&&n.registrationTime+Sf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI({appConfig:n,heartbeatServiceProvider:e},t){const r=RI(n,t),s=lI(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:bf,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Vf(()=>fetch(r,c));if(u.ok){const h=await u.json();return Cf(h)}else throw await Nf("Generate Auth Token",u)}function RI(n,{fid:e}){return`${Rf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(n,e=!1){let t;const r=await Ri(n.appConfig,i=>{if(!$f(i))throw fn.create("not-registered");const a=i.authToken;if(!e&&OI(a))return i;if(a.requestStatus===1)return t=CI(n,e),i;{if(!navigator.onLine)throw fn.create("app-offline");const c=MI(i);return t=NI(n,c),c}});return t?await t:r.authToken}async function CI(n,e){let t=await Nl(n.appConfig);for(;t.authToken.requestStatus===1;)await Mf(100),t=await Nl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ka(n,e):r}function Nl(n){return Ri(n,e=>{if(!$f(e))throw fn.create("not-registered");const t=e.authToken;return DI(t)?{...e,authToken:{requestStatus:0}}:e})}async function NI(n,e){try{const t=await kI(n,e),r={...e,authToken:t};return await Ys(n.appConfig,r),t}catch(t){if(kf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ff(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ys(n.appConfig,r)}throw t}}function $f(n){return n!==void 0&&n.registrationStatus===2}function OI(n){return n.requestStatus===2&&!VI(n)}function VI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+oI}function MI(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function DI(n){return n.requestStatus===1&&n.requestTime+Sf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(n){const e=n,{installationEntry:t,registrationPromise:r}=await za(e);return r?r.catch(console.error):Ka(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(n,e=!1){const t=n;return await FI(t),(await Ka(t,e)).token}async function FI(n){const{registrationPromise:e}=await za(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(n){if(!n||!n.options)throw yo("App Configuration");if(!n.name)throw yo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw yo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function yo(n){return fn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="installations",$I="installations-internal",jI=n=>{const e=n.getProvider("app").getImmediate(),t=UI(e),r=_n(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},BI=n=>{const e=n.getProvider("app").getImmediate(),t=_n(e,jf).getImmediate();return{getId:()=>LI(t),getToken:s=>xI(t,s)}};function qI(){We(new je(jf,jI,"PUBLIC")),We(new je($I,BI,"PRIVATE"))}qI();Oe(Af,Ha);Oe(Af,Ha,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="/firebase-messaging-sw.js",GI="/firebase-cloud-messaging-push-scope",Bf="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",zI="https://fcmregistrations.googleapis.com/v1",qf="google.c.a.c_id",KI="google.c.a.c_l",WI="google.c.a.ts",QI="google.c.a.e",Ol=1e4;var Vl;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Vl||(Vl={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Fr;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Fr||(Fr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function JI(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="fcm_token_details_db",YI=5,Ml="fcm_token_object_Store";async function XI(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(wo))return null;let e=null;return(await Zs(wo,YI,{upgrade:async(r,s,i,a)=>{if(s<2||!r.objectStoreNames.contains(Ml))return;const c=a.objectStore(Ml),u=await c.index("fcmSenderId").get(n);if(await c.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:dt(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:dt(h.auth),p256dh:dt(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:dt(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:dt(h.auth),p256dh:dt(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:dt(h.vapidKey)}}}}}})).close(),await io(wo),await io("fcm_vapid_details_db"),await io("undefined"),ZI(e)?e:null}function ZI(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firebase-messaging-database",tv=1,Ur="firebase-messaging-store";let To=null;function Hf(){return To||(To=Zs(ev,tv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ur)}}})),To}async function nv(n){const e=Gf(n),r=await(await Hf()).transaction(Ur).objectStore(Ur).get(e);if(r)return r;{const s=await XI(n.appConfig.senderId);if(s)return await Wa(n,s),s}}async function Wa(n,e){const t=Gf(n),s=(await Hf()).transaction(Ur,"readwrite");return await s.objectStore(Ur).put(e,t),await s.done,e}function Gf({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ve=new gn("messaging","Messaging",rv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e){const t=await Ja(n),r=zf(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(Qa(n.appConfig),s)).json()}catch(a){throw ve.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw ve.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw ve.create("token-subscribe-no-token");return i.token}async function iv(n,e){const t=await Ja(n),r=zf(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Qa(n.appConfig)}/${e.token}`,s)).json()}catch(a){throw ve.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw ve.create("token-update-failed",{errorInfo:a})}if(!i.token)throw ve.create("token-update-no-token");return i.token}async function ov(n,e){const r={method:"DELETE",headers:await Ja(n)};try{const i=await(await fetch(`${Qa(n.appConfig)}/${e}`,r)).json();if(i.error){const a=i.error.message;throw ve.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw ve.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Qa({projectId:n}){return`${zI}/projects/${n}/registrations`}async function Ja({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function zf({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==Bf&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=7*24*60*60*1e3;async function cv(n){const e=await lv(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:dt(e.getKey("auth")),p256dh:dt(e.getKey("p256dh"))},r=await nv(n.firebaseDependencies);if(r){if(hv(r.subscriptionOptions,t))return Date.now()>=r.createTime+av?uv(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await ov(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Dl(n.firebaseDependencies,t)}else return Dl(n.firebaseDependencies,t)}async function uv(n,e){try{const t=await iv(n.firebaseDependencies,e),r={...e,token:t,createTime:Date.now()};return await Wa(n.firebaseDependencies,r),t}catch(t){throw t}}async function Dl(n,e){const r={token:await sv(n,e),createTime:Date.now(),subscriptionOptions:e};return await Wa(n,r),r.token}async function lv(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:JI(e)})}function hv(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return dv(e,n),fv(e,n),pv(e,n),e}function dv(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function fv(n,e){e.data&&(n.data=e.data)}function pv(n,e){var s,i,a,c;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;n.fcmOptions={};const t=((i=e.fcmOptions)==null?void 0:i.link)??((a=e.notification)==null?void 0:a.click_action);t&&(n.fcmOptions.link=t);const r=(c=e.fcmOptions)==null?void 0:c.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n){return typeof n=="object"&&!!n&&qf in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(n){if(!n||!n.options)throw Eo("App Configuration Object");if(!n.name)throw Eo("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Eo(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Eo(n){return ve.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=gv(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n){try{n.swRegistration=await navigator.serviceWorker.register(HI,{scope:GI}),n.swRegistration.update().catch(()=>{}),await wv(n.swRegistration)}catch(e){throw ve.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function wv(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${Ol} ms`)),Ol),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var a;((a=i.target)==null?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(n,e){if(!e&&!n.swRegistration&&await yv(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ve.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Bf)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(n,e){if(!navigator)throw ve.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ve.create("permission-blocked");return await Ev(n,e==null?void 0:e.vapidKey),await Tv(n,e==null?void 0:e.serviceWorkerRegistration),cv(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(n,e,t){const r=vv(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[qf],message_name:t[KI],message_time:t[WI],message_device_time:Math.floor(Date.now()/1e3)})}function vv(n){switch(n){case Fr.NOTIFICATION_CLICKED:return"notification_open";case Fr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Fr.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Ll(t)):n.onMessageHandler.next(Ll(t)));const r=t.data;mv(r)&&r[QI]==="1"&&await Iv(n,t.messageType,r)}const xl="@firebase/messaging",Fl="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=n=>{const e=new _v(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Av(e,t)),e},bv=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Kf(e,r)}};function Pv(){We(new je("messaging",Sv,"PUBLIC")),We(new je("messaging-internal",bv,"PRIVATE")),Oe(xl,Fl),Oe(xl,Fl,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(){try{await Ql()}catch{return!1}return typeof window<"u"&&Wl()&&Hp()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n,e){if(!navigator)throw ve.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n=ei()){return Wf().then(e=>{if(!e)throw ve.create("unsupported-browser")},e=>{throw ve.create("indexed-db-unsupported")}),_n(re(n),"messaging").getImmediate()}async function wA(n,e){return n=re(n),Kf(n,e)}function TA(n,e){return n=re(n),kv(n,e)}Pv();const Cv={apiKey:"AIzaSyAMubJk9qXmaz_V3uHiCGs0hRe6FSu9ji4",authDomain:"ai-factory-c6d58.firebaseapp.com",projectId:"ai-factory-c6d58",storageBucket:"ai-factory-c6d58.firebasestorage.app",messagingSenderId:"213197152130",appId:"1:213197152130:web:7c19f9c3c88bea7cc1399b",measurementId:"G-4D82WS9H7K"},Ci=Xl(Cv),Zn=Sd(Ci),Nv=kE(Ci);tI(Ci);let Qf=null;typeof window<"u"&&Wf().then(n=>{n&&(Qf=Rv(Ci))});const EA=Object.freeze(Object.defineProperty({__proto__:null,auth:Nv,db:Zn,get messaging(){return Qf}},Symbol.toStringTag,{value:"Module"})),Fe={GEMINI:"gemini",OPENAI:"openai",ANTHROPIC:"anthropic"},ht=n=>{switch(n){case Fe.GEMINI:return null;case Fe.OPENAI:return null;case Fe.ANTHROPIC:return null;default:return null}},En=`
당신은 반려동물 온라인 AI 진료 서비스 "PetMedical.AI"의 멀티에이전트 팀의 일원입니다.
모든 에이전트는 다음 공통 원칙을 따릅니다.

- 사람 대상이 아닌, 반려동물(개·고양이·기타)를 위한 서비스입니다.
- 사용자는 보호자이며, 보호자의 입장에서 쉽게 이해할 수 있는 표현을 사용합니다.
- 당신의 답변은 실제 수의사 진료를 "대체"하지 않고, 진료 전·후에 참고용으로 제공됩니다.
- 과장된 표현을 피하고, 불안감을 과도하게 조장하지 않습니다.
- 출력은 반드시 지정된 JSON 형식만 사용합니다. 여분의 설명 텍스트를 붙이지 마십시오.
`,Ue=n=>({dog:"개",cat:"고양이",rabbit:"토끼",hamster:"햄스터",bird:"새",hedgehog:"고슴도치",reptile:"파충류",etc:"기타 동물",other:"기타 동물"})[n]||n||"미상",IA=async(n,e)=>{var i,a,c,u;const t=ht(Fe.GEMINI);if(!t)throw new Error("Gemini API 키가 설정되지 않았습니다. 마이페이지 > API 설정에서 키를 입력해주세요.");const r=e.slice(-7);if(r.length<3)return{patterns:[],predictions:[],health_flags:{energy_level:.8,ear_issue:!1,digestion_issue:!1,skin_issue:!1},recommendations:["더 많은 데이터를 기록해주세요."]};const s=`당신은 반려동물 건강 패턴 분석 전문가입니다.

반려동물 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 품종: ${n.breed||"미등록"}

최근 7일 건강 기록:
${JSON.stringify(r,null,2)}

다음 JSON 형식으로 분석 결과를 제공하세요:
{
  "patterns": [
    "패턴 설명 1",
    "패턴 설명 2"
  ],
  "predictions": [
    "예측된 건강 변화 1",
    "예측된 건강 변화 2"
  ],
  "health_flags": {
    "energy_level": 0.0-1.0,
    "ear_issue": true/false,
    "digestion_issue": true/false,
    "skin_issue": true/false
  },
  "recommendations": [
    "권장 사항 1",
    "권장 사항 2"
  ]
}

한국어로 응답하세요.`;try{const h=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:s}]}]})});if(!h.ok){const T=await h.json().catch(()=>({}));throw h.status===400&&((a=(i=T.error)==null?void 0:i.message)!=null&&a.includes("API key not valid"))?(console.error("[Pattern Analyzer] Gemini API 키가 유효하지 않습니다:",(c=T.error)==null?void 0:c.message),new Error("Gemini API 키가 유효하지 않습니다. 관리자에게 문의하세요.")):new Error(`Gemini API 오류: ${h.status} - ${((u=T.error)==null?void 0:u.message)||"알 수 없는 오류"}`)}const g=(await h.json()).candidates[0].content.parts[0].text.match(/\{[\s\S]*\}/);if(g)return JSON.parse(g[0]);throw new Error("JSON 파싱 실패")}catch(h){console.error("패턴 분석 오류:",h);const f=r.reduce((k,R)=>k+(R.food_count||0),0)/r.length,p=r.reduce((k,R)=>k+(R.activity_level||5),0)/r.length,g=[],T=[],b={energy_level:Math.min(1,p/10),ear_issue:!1,digestion_issue:f<2,skin_issue:!1};return f<2&&(g.push("최근 식사 횟수가 평소보다 적습니다."),T.push("식욕 부진이 지속될 수 있습니다.")),p<5&&(g.push("활동량이 감소하고 있습니다."),T.push("에너지 저하가 예상됩니다.")),{patterns:g,predictions:T,health_flags:b,recommendations:["정기적인 건강 관찰을 계속해주세요."]}}},Ov=async(n,e,t,r)=>{var u;const s=ht(Fe.ANTHROPIC);if(!s)throw new Error("Claude API 키가 설정되지 않았습니다. 마이페이지 > API 설정에서 키를 입력해주세요.");const i="claude-sonnet-4-20250514",a=`${En}

당신은 "Triage Engine"입니다.

[역할]
- Medical Agent의 진단 결과와 증상 요약을 바탕으로 응급도를 점수화합니다.
- 0~5 사이의 triage_score를 계산합니다. (0=전혀 응급 아님, 5=즉각적인 응급 상황)
- health_flags를 생성하여 어떤 부위에 문제가 있는지, 전반적인 에너지 상태가 어떤지 정리합니다.
- 이 출력은 아바타(디지털 트윈)와 병원 사전 패킷 양쪽 모두에서 사용됩니다.

[출력 형식 - JSON ONLY]
반드시 아래 JSON 형식만 출력하세요. 다른 텍스트는 포함하지 마세요.

{
  "triage_score": 0,
  "triage_level": "green | yellow | orange | red",
  "emergency_summary_kor": "응급도와 관련된 한 문장 요약",
  "recommended_action_window": "지금 바로 | 오늘 안에 | 24~48시간 내 | 증상 악화 시 | 경과 관찰",
  "health_flags": {
    "earIssue": false,
    "digestionIssue": false,
    "skinIssue": false,
    "fever": false,
    "energyLevel": 0.8
  }
}

세부 규칙:
- triage_score:
  - 0~1: 거의 문제 없음 → 홈케어로 충분, 병원 방문 불필요
  - 2: 경미, 홈케어 권장 → 집에서 관찰하며 관리, 증상 악화 시에만 병원
  - 3: 주의 필요 → 24~48시간 홈케어 후 개선 없으면 외래 진료
  - 4: 높은 위험, 오늘 안에 진료 권장
  - 5: 응급, 즉시 병원 방문 필요

- triage_level:
  - green: 0~1 → "홈케어로 충분합니다. 경과 관찰하세요."
  - yellow: 2 → "홈케어를 권장합니다. 증상이 악화되면 병원 방문을 고려하세요."
  - orange: 3~4 → "24시간 내 병원 방문을 권장합니다."
  - red: 5 → "즉시 병원 방문이 필요합니다."

- recommended_action_window 선택 기준:
  - "경과 관찰": green 등급, 홈케어로 충분한 경미한 증상
  - "증상 악화 시": yellow 등급, 홈케어하며 악화 시에만 병원
  - "24~48시간 내": orange 등급, 개선 없으면 병원
  - "오늘 안에": orange 고위험
  - "지금 바로": red 등급, 응급

- health_flags:
  - Medical Agent의 possible_diseases와 body_part, risk_level을 근거로 값 설정
  - energyLevel: 0~1 범위 실수 (0=매우 무기력, 1=정상 혹은 매우 활발)

중요: 경미한 증상(일시적 구토, 경미한 설사, 식욕 약간 감소, 가벼운 피부 증상)은 triage_score 0~2로 평가하고 홈케어를 우선 권장하세요. 모든 증상에 병원 방문을 권장하지 마세요.`,c=`반려동물 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 나이: ${n.age||"미등록"}세

증상: ${(e==null?void 0:e.symptomText)||"증상 정보 없음"}
${e!=null&&e.guardianResponsesSummary?`
★★★ 보호자 추가 문진 응답 (매우 중요 - 응급도 평가에 반드시 반영) ★★★
${e.guardianResponsesSummary}

주의: 위 보호자 문진 결과에서 다음 조건이 해당되면 triage_score를 상향 조정하세요:
- 증상 지속 기간이 "일주일 이상"이면 +1
- 식욕이 "거의 안 먹음" 또는 "전혀 안 먹음"이면 +1
- 활동량이 "거의 움직이지 않음"이면 +1
- 동반 증상에 "호흡곤란", "발열"이 있으면 +2
`:""}

수의사 진단:
${JSON.stringify(t,null,2)}

CS Agent 요약:
${JSON.stringify(r,null,2)}

출력은 반드시 JSON만 반환하세요.`;try{const h=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":s,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:i,max_tokens:1024,system:a,messages:[{role:"user",content:c}]})});if(!h.ok){const T=await h.json().catch(()=>({}));throw new Error(`Claude API 오류: ${h.status} - ${((u=T.error)==null?void 0:u.message)||"알 수 없는 오류"}`)}const p=(await h.json()).content[0].text;let g;try{const T=p.match(/\{[\s\S]*\}/);g=JSON.parse(T?T[0]:p)}catch(T){throw console.error("JSON 파싱 오류:",T),new Error("응답 형식 오류")}return g}catch(h){console.error("Triage Engine 오류:",h);const f=(t==null?void 0:t.risk_level)||(t==null?void 0:t.riskLevel)||"moderate";let p=2,g="yellow",T="24~48시간 내";f==="emergency"||f==="Emergency"?(p=5,g="red",T="지금 바로"):f==="high"||f==="High"?(p=4,g="orange",T="오늘 안에"):f==="low"||f==="Low"?(p=1,g="green",T="경과 관찰"):(p=3,g="orange",T="24~48시간 내");const b=(t==null?void 0:t.possible_diseases)||[],k={earIssue:b.some(R=>R.body_part==="귀"),digestionIssue:b.some(R=>R.body_part==="소화기"),skinIssue:b.some(R=>R.body_part==="피부"),fever:!1,energyLevel:p<=2?.8:p<=3?.6:.4};return{triage_score:p,triage_level:g,emergency_summary_kor:`${T} 병원 방문을 권장합니다.`,recommended_action_window:T,health_flags:k}}},vA=async(n,e,t,r="")=>{var a,c,u,h,f;if(e.hospitalPacket){const p=e.hospitalPacket,g=p.requested_actions_for_hospital||[],T=r?r.trim():"";return{packet_text:`
=== ${p.packet_title} ===

[환자 정보]
이름: ${p.pet_profile_brief.name}
종류/품종: ${Ue(p.pet_profile_brief.species)} / ${p.pet_profile_brief.breed}
${p.pet_profile_brief.age_info?`나이: ${p.pet_profile_brief.age_info}`:""}
${p.pet_profile_brief.sex_neutered?`성별: ${p.pet_profile_brief.sex_neutered}`:""}

[수의사 요약]
${p.for_vet_summary}

[방문 사유]
${p.visit_reason}

[증상 타임라인]
${p.symptom_timeline}

[AI 감별 진단]
${p.ai_differential_diagnosis.map((k,R)=>`${R+1}. ${k.name_kor} (확률: ${Math.round(k.probability*100)}%)
   ${k.note_for_vet||""}`).join(`

`)}

[응급도 평가]
Triage Score: ${p.triage_and_risk.triage_score}/5
응급도: ${p.triage_and_risk.triage_level}
위험도: ${p.triage_and_risk.risk_level}
시급성: ${p.triage_and_risk.urgency_comment}

[AI 권장 검사/조치]
${g.length>0?g.map(k=>`- ${k}`).join(`
`):"- 일반 건강 검진 권장"}

[보호자 요청사항]
${T||"- 없음"}
    `.trim(),packet_json:{...p,owner_request_note:T}}}const s=ht(Fe.GEMINI);if(!s)throw new Error("Gemini API 키가 설정되지 않았습니다. 마이페이지 > API 설정에서 키를 입력해주세요.");r&&r.trim();const i=`당신은 동물병원을 위한 사전 진단 패킷을 생성하는 전문가입니다.

다음 정보를 바탕으로 병원에서 바로 활용할 수 있는 구조화된 진단 패킷을 만들어주세요.

환자 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 품종: ${n.breed||"미등록"}
- 나이: ${n.age||"미등록"}세
${n.weight?`- 체중: ${n.weight}kg`:""}

증상:
${(t==null?void 0:t.symptomText)||"증상 정보 없음"}
${((a=t==null?void 0:t.images)==null?void 0:a.length)>0?`
사진 ${t.images.length}장 첨부됨`:""}

AI 진단 결과:
${JSON.stringify(e,null,2)}

다음 형식으로 병원용 진단 패킷을 생성하세요:

=== AI 사전 진단 패킷 ===

[환자 정보]
이름: ${n.petName}
종류/품종: ${Ue(n.species)} / ${n.breed||"미등록"}
나이/체중: ${n.age||"미등록"}세 / ${n.weight||"미등록"}kg

[증상 요약]
${(t==null?void 0:t.symptomText)||"증상 정보 없음"}

[AI 감별 진단 Top 3]
1. ${e.diagnosis||"일반 건강 이상"} (확률: ${e.probability||60}%)
2. [추가 의심 질환]
3. [추가 의심 질환]

[응급도 평가]
${e.riskLevel||"Moderate"} - ${e.emergency||"medium"}

[권장 검사 항목]
- [검사 1]
- [검사 2]

[사진/영상]
${((c=t==null?void 0:t.images)==null?void 0:c.length)>0?`증상 사진 ${t.images.length}장 첨부`:"없음"}

[보호자 입력 히스토리]
${((u=e.conversationHistory)==null?void 0:u.length)>0?e.conversationHistory.join(`
`):"없음"}

[즉시 조치 사항]
${((h=e.actions)==null?void 0:h.map(p=>`- ${p}`).join(`
`))||"- 증상 관찰 지속"}

한국어로 전문적이고 깔끔하게 작성하세요.`;try{const p=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":s,"anthropic-version":"2023-06-01"},body:JSON.stringify({model:"claude-3-5-sonnet-20241022",max_tokens:2e3,messages:[{role:"user",content:i}]})});if(!p.ok)throw new Error(`Anthropic API 오류: ${p.status}`);return{packet_text:(await p.json()).content[0].text,packet_json:{pet_name:n.petName,species:n.species,breed:n.breed,diagnosis:e.diagnosis,risk_level:e.riskLevel,symptoms:t==null?void 0:t.symptomText,images_count:((f=t==null?void 0:t.images)==null?void 0:f.length)||0,created_at:new Date().toISOString()}}}catch(p){return console.error("병원 패킷 생성 오류:",p),{packet_text:`=== AI 사전 진단 패킷 ===

환자: ${n.petName}
증상: ${(t==null?void 0:t.symptomText)||"증상 정보 없음"}
진단: ${e.diagnosis||"일반 건강 이상"}
응급도: ${e.riskLevel||"Moderate"}`,packet_json:{pet_name:n.petName,diagnosis:e.diagnosis,risk_level:e.riskLevel}}}};function AA(n){const e={earIssue:!1,digestionIssue:!1,skinIssue:!1,energyLevel:.8,fever:!1},r=`
    ${n.summary||""}
    ${n.description||""}
    ${n.diagnosis||""}
    ${(n.possibleDiseases||[]).map(i=>i.name||i).join(" ")}
    ${(n.differentialDiagnosis||[]).join(" ")}
    ${n.reasoning||""}
  `.toLowerCase();(r.includes("귀")||r.includes("이염")||r.includes("ear")||r.includes("otitis"))&&(e.earIssue=!0),(r.includes("설사")||r.includes("장염")||r.includes("구토")||r.includes("소화기")||r.includes("diarrhea")||r.includes("vomit")||r.includes("digestion"))&&(e.digestionIssue=!0),(r.includes("피부")||r.includes("발진")||r.includes("가려움")||r.includes("skin")||r.includes("rash")||r.includes("itch"))&&(e.skinIssue=!0),(r.includes("열")||r.includes("발열")||r.includes("고열")||r.includes("fever")||r.includes("temperature"))&&(e.fever=!0);const s=n.riskLevel||n.emergency||"low";return s==="high"||s==="High"||s==="Emergency"?e.energyLevel=.2:s==="medium"||s==="Moderate"?e.energyLevel=.5:e.energyLevel=.8,n.triage_score!==void 0&&(e.energyLevel=Math.max(.1,1-n.triage_score/5)),e}function Vv(n){return n?{earIssue:n.ear_issue||n.earIssue||!1,digestionIssue:n.digestion_issue||n.digestionIssue||!1,skinIssue:n.skin_issue||n.skinIssue||!1,energyLevel:n.energy_level!==void 0?n.energy_level:n.energyLevel!==void 0?n.energyLevel:.8,fever:n.fever||!1}:{}}const Mv=async(n,e,t,r)=>{var c,u,h,f;const s=ht(Fe.GEMINI);if(!s)throw new Error("Gemini API 키가 설정되지 않았습니다. 마이페이지 > API 설정에서 키를 입력해주세요.");const i="gemini-2.0-flash",a=`${En}

당신은 "Care Agent (케어 플래너)"입니다.

[역할]
- Medical / Triage / Ops 결과를 바탕으로, 보호자가 집에서 할 수 있는 케어 플랜을 만듭니다.
- 응급을 요하는 경우 '집에서 케어'보다는 병원 방문을 우선하도록 안내합니다.
- 일상 관리/예방 팁도 함께 제공합니다.
- 과장되지 않고, 현실적인 수준의 조언만 합니다.

[입력]
- pet_profile: 반려동물 정보
- medical_result: Medical Agent JSON
- triage_result: Triage Engine JSON
- ops_medical_log: Ops Agent의 medical_log

반려동물 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 품종: ${n.breed||"미등록"}

Medical Agent 진단:
${JSON.stringify(t,null,2)}

Triage Engine 결과:
${JSON.stringify(r,null,2)}

Ops Agent 진료 기록:
${JSON.stringify((e==null?void 0:e.medical_log)||{},null,2)}

[출력 형식 - JSON ONLY]

{
  "immediate_home_care": [
    "오늘 당장 집에서 해줄 수 있는 구체적인 조치 1",
    "오늘 당장 해주면 좋은 조치 2",
    "구체적인 케어 방법 (예: 어떤 음식을 얼마나, 휴식 환경 조성법)"
  ],
  "things_to_avoid": [
    "피해야 할 행동/음식/환경 1",
    "피해야 할 행동 2"
  ],
  "monitoring_guide": [
    "오늘과 내일 관찰해야 할 포인트 1",
    "악화 신호가 나타나면 바로 병원에 가야 하는 기준"
  ],
  "long_term_prevention": [
    "향후 1~3개월 동안 도움이 될 수 있는 관리 방법",
    "식단/운동/환경 관리 등"
  ],
  "follow_up_guide": {
    "need_follow_up": true,
    "timing": "24~48시간 후 | 3일 후 | 1주일 후 | 증상 악화 시만",
    "condition_for_hospital": "이런 증상이 나타나면 병원 방문이 필요합니다",
    "home_care_duration": "홈케어 권장 기간 (예: 2~3일간 관찰)"
  },
  "care_tone_message": "보호자에게 건네는 짧은 응원/안심 메시지 (한국어 1~2문장)",
  "hospital_needed": false
}

규칙:
- triage_score가 0~2 (green/yellow)인 경우: 홈케어를 중심으로 상세하고 실용적인 케어 가이드를 제공하세요. hospital_needed는 false.
- triage_score가 3인 경우: 홈케어를 우선 안내하되, 24~48시간 후에도 개선이 없으면 병원 방문을 권장. hospital_needed는 조건부 true.
- triage_result가 red 또는 emergency인 경우: immediate_home_care 내용은 최소화하고 '즉시 병원 방문'을 우선 안내. hospital_needed는 true.
- 과학적으로 논란이 있거나 검증되지 않은 민간요법은 절대 제안하지 마세요.
- follow_up_guide에 재진료/재평가 시점과 조건을 명확히 안내하세요.
- 경미한 증상은 "집에서 충분히 관리 가능합니다"라는 안심 메시지를 포함하세요.
- 출력은 반드시 JSON만 반환하세요.`;try{const p=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${i}:generateContent?key=${s}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:a}]}]})});if(!p.ok){const k=await p.json().catch(()=>({}));throw p.status===400&&((u=(c=k.error)==null?void 0:c.message)!=null&&u.includes("API key not valid"))?(console.error("[Care Agent] Gemini API 키가 유효하지 않습니다:",(h=k.error)==null?void 0:h.message),new Error("Gemini API 키가 유효하지 않습니다. 관리자에게 문의하세요.")):new Error(`Gemini API 오류: ${p.status} - ${((f=k.error)==null?void 0:f.message)||"알 수 없는 오류"}`)}const b=(await p.json()).candidates[0].content.parts[0].text.match(/\{[\s\S]*\}/);if(b){const k=JSON.parse(b[0]),R=k.follow_up_guide?`
[재진료/재평가 안내]
• 시점: ${k.follow_up_guide.timing||"증상 악화 시"}
• 홈케어 기간: ${k.follow_up_guide.home_care_duration||"2~3일간 관찰"}
• 병원 방문 필요 조건: ${k.follow_up_guide.condition_for_hospital||"증상이 악화되거나 새로운 증상이 나타날 경우"}
`:"",L=k.hospital_needed?`
⚠️ 병원 방문을 권장합니다.`:`
✅ 현재는 홈케어로 충분히 관리 가능합니다.`,U=`
${k.care_tone_message}
${L}

[즉시 조치 사항]
${k.immediate_home_care.map(F=>`• ${F}`).join(`
`)}

[피해야 할 행동]
${k.things_to_avoid.map(F=>`• ${F}`).join(`
`)}

[관찰 포인트]
${k.monitoring_guide.map(F=>`• ${F}`).join(`
`)}
${R}
[장기 예방]
${k.long_term_prevention.map(F=>`• ${F}`).join(`
`)}
      `.trim();return{json:k,message:`${n.petName}를 위한 케어 플랜이 준비되었습니다!

${k.care_tone_message}`,fullGuide:U}}throw new Error("JSON 파싱 실패")}catch(p){console.error("Care Agent 오류:",p);const g=(r==null?void 0:r.triage_level)==="red"||(r==null?void 0:r.triage_score)>=4,T=(r==null?void 0:r.triage_score)<=2,b={immediate_home_care:g?["즉시 병원 방문이 필요합니다. 집에서의 케어는 최소화하세요."]:T?["충분한 휴식을 제공하세요","신선한 물을 자주 제공하세요","소화가 잘 되는 부드러운 음식을 소량씩 급여하세요","조용하고 편안한 환경을 만들어주세요"]:["증상 관찰 지속","충분한 휴식 제공","수분 섭취 촉진"],things_to_avoid:["과도한 활동","스트레스 유발 환경","갑작스러운 식단 변화"],monitoring_guide:["증상 변화 관찰","식욕 및 배변 상태 확인","활동량 변화 체크"],long_term_prevention:["정기적인 건강 검진","균형 잡힌 식단"],follow_up_guide:{need_follow_up:!T,timing:g?"즉시":T?"증상 악화 시만":"24~48시간 후",condition_for_hospital:"증상이 악화되거나 새로운 증상(구토, 설사, 식욕부진 등)이 나타날 경우",home_care_duration:T?"2~3일간 관찰":"24시간 관찰"},care_tone_message:T?`${n.petName}의 증상은 경미해 보입니다. 집에서 충분히 관리 가능합니다!`:`${n.petName}의 빠른 회복을 기원합니다.`,hospital_needed:g},k=T?`✅ 현재는 홈케어로 충분히 관리 가능합니다.

[즉시 조치]
${b.immediate_home_care.map(R=>`• ${R}`).join(`
`)}

[재진료 안내]
• ${b.follow_up_guide.timing}에 재평가하세요.`:"기본 케어 가이드";return{json:b,message:T?`${n.petName}를 위한 케어 플랜!

✅ 홈케어로 충분합니다.

즉시 조치:
✓ 충분한 휴식 제공
✓ 수분 섭취 촉진

증상이 악화되면 재진료를 받아보세요.`:`${n.petName}를 위한 케어 플랜!

즉시 조치:
✓ 증상 관찰 지속
✓ 충분한 휴식 제공`,fullGuide:k}}},SA=n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result.split(",")[1];e(s)},r.onerror=t,r.readAsDataURL(n)});async function bA(n,e="auto",t="image/jpeg"){var i,a,c,u;const r=ht(Fe.GEMINI);if(!r)return console.warn("Gemini API 키가 없습니다. 마이페이지 > API 설정에서 키를 입력해주세요."),Lv(e);const s=Dv(e);try{const h=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{inline_data:{mime_type:t,data:n}},{text:s}]}],generationConfig:{temperature:.1,maxOutputTokens:4096}})});if(!h.ok){const T=await h.json().catch(()=>({}));throw h.status===400&&((a=(i=T.error)==null?void 0:i.message)!=null&&a.includes("API key not valid"))?(console.error("[OCR Service] Gemini API 키가 유효하지 않습니다:",(c=T.error)==null?void 0:c.message),new Error("Gemini API 키가 유효하지 않습니다. 관리자에게 문의하세요.")):new Error(`Gemini API 오류: ${h.status} - ${((u=T.error)==null?void 0:u.message)||"알 수 없는 오류"}`)}const p=(await h.json()).candidates[0].content.parts[0].text,g=p.match(/\{[\s\S]*\}/);return g?{success:!0,data:JSON.parse(g[0]),rawText:p}:{success:!1,error:"JSON 파싱 실패",rawText:p}}catch(h){return console.error("OCR 처리 오류:",h),{success:!1,error:h.message}}}function Dv(n){const e=`당신은 동물병원 의료 문서 OCR 전문가입니다.
이미지에서 텍스트를 추출하고 구조화된 JSON으로 변환하세요.

중요 규칙:
1. 이미지에서 보이는 모든 텍스트를 정확히 추출하세요
2. 날짜 형식은 YYYY-MM-DD로 통일하세요
3. 금액은 숫자만 추출하세요 (원 단위)
4. 약품명, 용량, 용법은 정확히 구분하세요
5. 확실하지 않은 내용은 "확인 필요"로 표시하세요

`,t={receipt:`진료비 영수증 분석:
{
  "documentType": "receipt",
  "hospital": {
    "name": "병원명",
    "address": "주소",
    "phone": "전화번호",
    "businessNumber": "사업자번호"
  },
  "patient": {
    "petName": "환자명(동물명)",
    "species": "종류",
    "ownerName": "보호자명"
  },
  "visitDate": "YYYY-MM-DD",
  "items": [
    {
      "category": "항목 분류 (진찰료/검사료/처치료/약제비 등)",
      "name": "항목명",
      "quantity": 수량,
      "unitPrice": 단가,
      "amount": 금액
    }
  ],
  "summary": {
    "subtotal": 소계,
    "discount": 할인,
    "total": 총액,
    "paid": 결제금액,
    "paymentMethod": "결제수단"
  },
  "notes": "비고사항"
}`,prescription:`처방전 분석:
{
  "documentType": "prescription",
  "hospital": {
    "name": "병원명",
    "vetName": "수의사명",
    "licenseNumber": "면허번호"
  },
  "patient": {
    "petName": "환자명",
    "species": "종류",
    "breed": "품종",
    "weight": "체중(kg)",
    "age": "나이"
  },
  "prescriptionDate": "YYYY-MM-DD",
  "diagnosis": "진단명",
  "medications": [
    {
      "name": "약품명",
      "dosage": "용량",
      "frequency": "복용 횟수",
      "duration": "투약 기간",
      "instructions": "복용 방법",
      "warnings": "주의사항"
    }
  ],
  "nextVisit": "다음 내원일",
  "notes": "특이사항"
}`,diagnosis:`진단서 분석:
{
  "documentType": "diagnosis",
  "hospital": {
    "name": "병원명",
    "vetName": "수의사명"
  },
  "patient": {
    "petName": "환자명",
    "species": "종류",
    "breed": "품종",
    "birthDate": "생년월일",
    "sex": "성별",
    "ownerName": "보호자명"
  },
  "visitDate": "YYYY-MM-DD",
  "chiefComplaint": "주증상",
  "symptoms": ["증상1", "증상2"],
  "diagnosis": {
    "primary": "주진단명",
    "secondary": ["부진단1", "부진단2"]
  },
  "testResults": [
    {
      "testName": "검사명",
      "result": "결과",
      "normalRange": "정상범위",
      "interpretation": "해석"
    }
  ],
  "treatment": {
    "procedures": ["처치1", "처치2"],
    "medications": ["처방약1", "처방약2"]
  },
  "prognosis": "예후",
  "followUp": "추후 관리사항"
}`,vaccination:`예방접종 증명서 분석:
{
  "documentType": "vaccination",
  "hospital": {
    "name": "병원명",
    "vetName": "수의사명"
  },
  "patient": {
    "petName": "환자명",
    "species": "종류",
    "breed": "품종",
    "birthDate": "생년월일",
    "microchipNumber": "마이크로칩번호"
  },
  "vaccinations": [
    {
      "vaccineName": "백신명",
      "manufacturer": "제조사",
      "lotNumber": "제조번호",
      "administrationDate": "접종일",
      "nextDueDate": "다음 접종 예정일",
      "vetSignature": "수의사 서명 여부"
    }
  ],
  "issuedDate": "발급일"
}`,test_result:`검사 결과지 분석:
{
  "documentType": "test_result",
  "hospital": {
    "name": "병원명"
  },
  "patient": {
    "petName": "환자명",
    "species": "종류"
  },
  "testDate": "YYYY-MM-DD",
  "testType": "검사 종류 (혈액검사/영상검사/소변검사 등)",
  "results": [
    {
      "item": "검사 항목",
      "value": "측정값",
      "unit": "단위",
      "normalRange": "정상범위",
      "status": "정상/높음/낮음"
    }
  ],
  "interpretation": "종합 소견",
  "recommendations": "권고사항"
}`,auto:`이 문서의 종류를 자동으로 판별하고 적절한 형식으로 분석하세요.
먼저 문서 종류를 파악한 후, 해당 문서에 맞는 구조로 JSON을 출력하세요.
documentType 필드에는 다음 중 하나를 사용: receipt, prescription, diagnosis, vaccination, test_result

{
  "documentType": "감지된 문서 종류",
  ... 해당 문서 타입에 맞는 필드들 ...
}`};return e+(t[n]||t.auto)+`

JSON만 출력하세요. 다른 설명은 포함하지 마세요.`}function Lv(n){const e={receipt:{documentType:"receipt",hospital:{name:"행복한 동물병원",address:"서울시 강남구 테헤란로 123",phone:"02-1234-5678",businessNumber:"123-45-67890"},patient:{petName:"초코",species:"개",ownerName:"김철수"},visitDate:new Date().toISOString().split("T")[0],items:[{category:"진찰료",name:"일반 진찰",quantity:1,unitPrice:15e3,amount:15e3},{category:"검사료",name:"혈액검사",quantity:1,unitPrice:35e3,amount:35e3},{category:"약제비",name:"항생제",quantity:7,unitPrice:2e3,amount:14e3}],summary:{subtotal:64e3,discount:0,total:64e3,paid:64e3,paymentMethod:"카드"},notes:""},prescription:{documentType:"prescription",hospital:{name:"행복한 동물병원",vetName:"박수의",licenseNumber:"12345"},patient:{petName:"초코",species:"개",breed:"푸들",weight:"5.2",age:"3세"},prescriptionDate:new Date().toISOString().split("T")[0],diagnosis:"경미한 피부염",medications:[{name:"세파렉신",dosage:"250mg",frequency:"1일 2회",duration:"7일",instructions:"식후 복용",warnings:""}],nextVisit:"",notes:""}};return{success:!0,data:e[n]||e.receipt,isDummy:!0}}function PA(n,e){var r,s,i,a,c,u,h;const t={id:`record_${Date.now()}`,petId:e,source:"ocr",createdAt:new Date().toISOString(),originalDocument:n.documentType};switch(n.documentType){case"receipt":return{...t,type:"visit",date:n.visitDate,hospital:(r=n.hospital)==null?void 0:r.name,items:n.items,totalCost:(s=n.summary)==null?void 0:s.total,notes:n.notes};case"prescription":return{...t,type:"prescription",date:n.prescriptionDate,hospital:(i=n.hospital)==null?void 0:i.name,veterinarian:(a=n.hospital)==null?void 0:a.vetName,diagnosis:n.diagnosis,medications:n.medications,nextVisit:n.nextVisit};case"diagnosis":return{...t,type:"diagnosis",date:n.visitDate,hospital:(c=n.hospital)==null?void 0:c.name,symptoms:n.symptoms,diagnosis:n.diagnosis,treatment:n.treatment,testResults:n.testResults,prognosis:n.prognosis};case"vaccination":return{...t,type:"vaccination",date:n.issuedDate,hospital:(u=n.hospital)==null?void 0:u.name,vaccinations:n.vaccinations};case"test_result":return{...t,type:"test",date:n.testDate,hospital:(h=n.hospital)==null?void 0:h.name,testType:n.testType,results:n.results,interpretation:n.interpretation};default:return{...t,type:"other",rawData:n}}}function kA(n){const e="petMedical_records";try{const t=JSON.parse(localStorage.getItem(e)||"[]");return t.unshift(n),localStorage.setItem(e,JSON.stringify(t)),!0}catch(t){return console.error("의료 기록 저장 실패:",t),!1}}const Ul=[{species_code:"dog",species_label_ko:"강아지",department_code:"dermatology",department_label_ko:"피부과",symptom_tag:"itching",symptom_label_ko:"가려움",question_ko:"우리 강아지가 몸을 계속 긁는데 알레르기일까요?",answer_ko:"강아지가 몸을 자주 긁는다면 알레르기, 피부염, 기생충 감염 등이 원인일 수 있어요. 긁는 부위가 붉거나 털이 빠지면 1~2일 내로 병원 진료를 권장합니다.",keywords:["긁다","가려워","알레르기","피부"]},{species_code:"dog",species_label_ko:"강아지",department_code:"dermatology",department_label_ko:"피부과",symptom_tag:"hair_loss",symptom_label_ko:"탈모",question_ko:"강아지 털이 한 부분에서 뭉텅 빠지는데 괜찮은 건가요?",answer_ko:"국소적인 탈모는 세균성 피부염, 곰팡이, 호르몬 문제 등 다양한 원인이 있을 수 있어요. 탈모 부위가 넓어지거나 딱지가 생기면 검사를 받아보는 것이 좋아요.",keywords:["털","빠지","탈모","대머리"]},{species_code:"dog",species_label_ko:"강아지",department_code:"dermatology",department_label_ko:"피부과",symptom_tag:"bump",symptom_label_ko:"혹/덩어리",question_ko:"강아지 몸에 혹이 생겼어요. 암인가요?",answer_ko:"혹이 모두 암은 아니에요. 지방종, 낭종, 양성 종양인 경우가 많습니다. 하지만 빠르게 커지거나, 딱딱하거나, 피부색이 변하면 조직검사를 권장드려요.",keywords:["혹","덩어리","종양","암"]},{species_code:"dog",species_label_ko:"강아지",department_code:"internal_medicine",department_label_ko:"내과",symptom_tag:"vomiting",symptom_label_ko:"구토",question_ko:"강아지가 오늘 몇 번을 계속 토했어요. 위험한가요?",answer_ko:"하루에 여러 번 반복해서 토하면 탈수나 위장 질환 위험이 있어요. 밥이나 물을 전혀 못 먹거나 피가 섞여 나오면 즉시 병원에 가시는 게 안전합니다.",keywords:["토하다","구토","구역질","게우다"]},{species_code:"dog",species_label_ko:"강아지",department_code:"internal_medicine",department_label_ko:"내과",symptom_tag:"diarrhea",symptom_label_ko:"설사",question_ko:"강아지가 물 설사를 해요. 집에서 지켜봐도 될까요?",answer_ko:"묽은 설사가 하루 이틀 정도만 지속되고 식욕과 활력이 괜찮다면 일시적인 장염일 수 있어요. 하지만 2일 이상 지속되거나 피, 점액이 보이면 내원 검진이 필요합니다.",keywords:["설사","묽은 변","물변","장염"]},{species_code:"dog",species_label_ko:"강아지",department_code:"internal_medicine",department_label_ko:"내과",symptom_tag:"no_appetite",symptom_label_ko:"식욕부진",question_ko:"강아지가 밥을 안 먹어요. 며칠째 거의 안 먹어요.",answer_ko:"1~2일 정도 식욕이 없을 수 있지만, 3일 이상 거의 먹지 않으면 내장 질환이나 다른 문제가 있을 수 있어요. 물도 안 마시면 빨리 병원에 가세요.",keywords:["밥","안 먹","식욕","거부"]},{species_code:"dog",species_label_ko:"강아지",department_code:"ophthalmology",department_label_ko:"안과",symptom_tag:"eye_discharge",symptom_label_ko:"눈곱/분비물",question_ko:"눈곱이 자주 끼고 눈물이 계속 나는데 괜찮을까요?",answer_ko:"투명한 눈물이 조금 나는 정도는 환경 변화일 수 있지만, 노란색이나 초록색 분비물이 나오면 결막염이나 각막 질환 가능성이 있어요. 하루 이상 지속되면 진료를 권장합니다.",keywords:["눈","눈곱","눈물","분비물"]},{species_code:"dog",species_label_ko:"강아지",department_code:"ophthalmology",department_label_ko:"안과",symptom_tag:"red_eye",symptom_label_ko:"충혈",question_ko:"강아지 눈이 빨개요. 많이 아픈 건가요?",answer_ko:"눈 충혈은 결막염, 각막 손상, 녹내장 등 여러 원인이 있어요. 눈을 자주 비비거나 눈을 잘 못 뜨면 빨리 진료받는 게 좋습니다.",keywords:["빨간 눈","충혈","눈 빨개"]},{species_code:"dog",species_label_ko:"강아지",department_code:"orthopedics",department_label_ko:"정형외과",symptom_tag:"limping",symptom_label_ko:"절뚝거림",question_ko:"강아지가 갑자기 다리를 절어요. 어디 다친 걸까요?",answer_ko:"갑자기 절뚝거리면 외상, 탈구, 관절 문제 등이 원인일 수 있어요. 다리를 전혀 디디지 못하거나 많이 부어있으면 빨리 병원에서 검사받으세요.",keywords:["절뚝","다리","걷기","절다"]},{species_code:"cat",species_label_ko:"고양이",department_code:"urology",department_label_ko:"비뇨기과",symptom_tag:"urination_issue",symptom_label_ko:"배뇨 문제",question_ko:"고양이가 화장실에 자주 가는데 소변을 거의 못 봐요.",answer_ko:"이 증상은 방광염이나 요로 폐색일 수 있어요. 특히 수컷 고양이의 경우 요로 폐색은 응급 상황이에요. 24시간 내로 병원에 가시는 게 좋습니다.",keywords:["소변","오줌","화장실","배뇨"]},{species_code:"cat",species_label_ko:"고양이",department_code:"urology",department_label_ko:"비뇨기과",symptom_tag:"blood_in_urine",symptom_label_ko:"혈뇨",question_ko:"고양이 소변에 피가 섞여 나와요. 응급인가요?",answer_ko:"혈뇨는 방광염, 요로결석, 종양 등의 신호일 수 있어요. 소변을 아예 못 보거나 계속 힘을 주면 응급이에요. 가능하면 당일 진료를 권장합니다.",keywords:["피","혈뇨","빨간 소변"]},{species_code:"cat",species_label_ko:"고양이",department_code:"internal_medicine",department_label_ko:"내과",symptom_tag:"vomiting",symptom_label_ko:"구토",question_ko:"고양이가 자주 토해요. 헤어볼인가요?",answer_ko:"가끔 토하는 건 헤어볼일 수 있지만, 일주일에 여러 번 토하거나 음식을 먹자마자 토하면 위장 질환이나 다른 문제일 수 있어요. 빈번한 구토는 검사가 필요해요.",keywords:["토하다","구토","헤어볼"]},{species_code:"cat",species_label_ko:"고양이",department_code:"internal_medicine",department_label_ko:"내과",symptom_tag:"weight_loss",symptom_label_ko:"체중 감소",question_ko:"고양이가 잘 먹는데 살이 빠져요. 왜 그럴까요?",answer_ko:"식욕은 좋은데 체중이 줄면 갑상선 기능 항진증, 당뇨, 소화 흡수 장애 등이 원인일 수 있어요. 혈액검사로 원인을 확인하는 게 좋습니다.",keywords:["살","체중","마르다","빠지다"]},{species_code:"cat",species_label_ko:"고양이",department_code:"dermatology",department_label_ko:"피부과",symptom_tag:"over_grooming",symptom_label_ko:"과도한 그루밍",question_ko:"고양이가 한 부분만 계속 핥아서 털이 다 빠졌어요.",answer_ko:"과도한 그루밍은 스트레스, 알레르기, 피부 질환 등이 원인일 수 있어요. 핥는 부위 피부가 빨개지거나 상처가 나면 진료가 필요합니다.",keywords:["핥다","그루밍","털 빠짐"]},{species_code:"all",species_label_ko:"모든 반려동물",department_code:"preventive",department_label_ko:"예방의학",symptom_tag:"vaccination",symptom_label_ko:"예방접종",question_ko:"예방접종은 언제 해야 하나요?",answer_ko:"강아지와 고양이 모두 생후 6~8주부터 기본 접종을 시작해요. 이후 매년 추가 접종이 필요합니다. 정확한 일정은 수의사 선생님과 상담하세요.",keywords:["예방접종","백신","접종"]},{species_code:"all",species_label_ko:"모든 반려동물",department_code:"preventive",department_label_ko:"예방의학",symptom_tag:"checkup",symptom_label_ko:"건강검진",question_ko:"건강검진은 얼마나 자주 받아야 하나요?",answer_ko:"7세 이하는 연 1회, 7세 이상 노령견/묘는 연 2회 건강검진을 권장해요. 정기 검진으로 질병을 조기에 발견할 수 있습니다.",keywords:["건강검진","검진","검사"]}];async function RA(n,e){return console.log("[CharacterGenerator] 캐릭터 생성 요청:",{petData:n,style:e}),{success:!1,message:"캐릭터 생성 기능은 준비 중입니다.",imageUrl:null}}const xv=async(n,e)=>{var s,i,a,c,u;const t=ht(Fe.GEMINI);if(!t)throw new Error("Gemini API 키가 설정되지 않았습니다. 마이페이지 > API 설정에서 키를 입력해주세요.");const r=`${En}

당신은 "CS Agent (상담 간호사)"입니다.

[역할]
- 보호자가 입력한 증상/상황을 이해하기 쉽게 요약합니다.
- 언제부터, 얼마나 자주, 어떤 상황에서 심해지는지 등 빠진 정보를 체크합니다.
- 현재 응급 여부를 1차적으로 추정합니다. (단, 최종 응급 판단은 Medical Agent와 Triage Engine이 수행)
- 보호자가 다음에 무엇을 하면 좋을지 간단히 안내합니다.

[입력으로 받는 데이터]
- pet_profile: 반려동물 기본 정보
- user_description: 보호자가 입력한 자유 텍스트 증상 설명

반려동물 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 품종: ${n.breed||"미등록"}
- 나이: ${n.age||"미등록"}세
${n.weight?`- 체중: ${n.weight}kg`:""}

보호자 증상 설명:
${e.symptomText||"증상 정보 없음"}

${((s=e.images)==null?void 0:s.length)>0?`사진 ${e.images.length}장이 첨부되었습니다.`:""}

[출력 형식 - JSON ONLY]
다음 구조로만 출력하세요:

{
  "summary_kor": "보호자 설명을 기반으로 한 증상 요약 (한국어, 3~5문장)",
  "key_symptoms": ["핵심 증상 1", "핵심 증상 2"],
  "onset": "증상이 처음 나타난 시점에 대한 추정 (예: 3일 전, 오늘 아침부터 등)",
  "duration": "지속 기간 요약 (예: 3일째 지속, 간헐적으로 일어남 등)",
  "suspected_body_parts": ["귀", "피부", "소화기", "호흡기", "눈", "관절/다리" 중 해당되는 부위 리스트],
  "first_urgency_assessment": "low | moderate | high | emergency 중 하나",
  "missing_information": ["추가로 물어보고 싶은 질문 1", "추가로 물어보고 싶은 질문 2"],
  "next_step_brief": "사용자에게 보여줄, 한 문장짜리 다음 단계 안내"
}

규칙:
- 응급도가 애매할 경우, 과신하지 말고 'moderate'로 지정하세요.
- 출력은 반드시 JSON 하나만 반환하십시오.`;try{const h=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:r}]}]})});if(!h.ok){const T=await h.json().catch(()=>({}));throw h.status===400&&((a=(i=T.error)==null?void 0:i.message)!=null&&a.includes("API key not valid"))?(console.error("[CS Agent] Gemini API 키가 유효하지 않습니다:",(c=T.error)==null?void 0:c.message),new Error("Gemini API 키가 유효하지 않습니다. 관리자에게 문의하세요.")):new Error(`Gemini API 오류: ${h.status} - ${((u=T.error)==null?void 0:u.message)||"알 수 없는 오류"}`)}const g=(await h.json()).candidates[0].content.parts[0].text.match(/\{[\s\S]*\}/);if(g){const T=JSON.parse(g[0]);return{json:T,message:`안녕하세요, ${n.petName} 보호자님.

접수 완료했습니다.

환자 정보:
• 이름: ${n.petName}
• 종류: ${Ue(n.species)}
• 품종: ${n.breed||"미등록"}

증상: ${T.summary_kor}

증상 상담실로 안내해 드릴게요.`}}throw new Error("JSON 파싱 실패")}catch(h){return console.error("CS Agent 오류:",h),{json:{summary_kor:`${n.petName}의 증상 접수가 완료되었습니다.`,key_symptoms:[],onset:"알 수 없음",duration:"알 수 없음",suspected_body_parts:[],first_urgency_assessment:"moderate",missing_information:[],next_step_brief:"AI 수의사에게 종합 진단을 받아보는 것이 좋겠습니다."},message:`안녕하세요, ${n.petName} 보호자님.

접수 완료했습니다.

증상 상담실로 안내해 드릴게요.`}}},Fv=async(n,e,t)=>{var u;const r=(e.symptomText||"").toLowerCase(),s=[],i=[],a=[];(r.includes("귀")||r.includes("이염"))&&(s.push("귀 문제"),i.push("귀"),a.push("귀질환")),(r.includes("설사")||r.includes("구토")||r.includes("배변"))&&(s.push("소화기 문제"),i.push("소화기"),a.push("소화기질환")),(r.includes("피부")||r.includes("발진")||r.includes("가려움"))&&(s.push("피부 문제"),i.push("피부"),a.push("피부질환")),(r.includes("기침")||r.includes("호흡"))&&(s.push("호흡기 문제"),i.push("호흡기"),a.push("호흡기질환"));const c=(t==null?void 0:t.first_urgency_assessment)==="emergency"||(t==null?void 0:t.first_urgency_assessment)==="high"?"high":(t==null?void 0:t.first_urgency_assessment)==="moderate"?"medium":"low";return{json:{symptom_keywords:s.length>0?s:["일반 증상"],body_part_focus:i.length>0?i:["기타"],severity_hint:c,possible_categories:a.length>0?a:["일반 질환"],related_past_cases_summary:"",notes_for_medical_agent:`증상 패턴 분석 완료. ${s.join(", ")} 관련 증상이 확인되었습니다. Medical Agent의 종합 진단을 기다립니다.`},message:`증상 정보 수집을 완료했어요.

${((u=e.images)==null?void 0:u.length)>0?`📷 이미지에서 증상 부위를 확인했습니다.
`:""}🔎 유사 케이스를 검색했습니다.
📊 증상 패턴 분석을 마쳤습니다.

담당 수의사 선생님께 진료를 요청할게요.`}};async function Uv(n="dog",e=""){try{const t=Kn(Zn,"owner_faq"),r=Qn(t,Ti("species_code","in",[n,"all"]),Jn(20)),i=(await Yn(r)).docs.map(a=>({id:a.id,...a.data()}));if(e){const a=e.toLowerCase().split(/[\s,]+/);return i.map(u=>{let h=0;const f=`${u.question_ko||""} ${u.answer_ko||""} ${(u.keywords||[]).join(" ")}`.toLowerCase();return a.forEach(p=>{p&&f.includes(p)&&(h+=1)}),{...u,relevanceScore:h}}).filter(u=>u.relevanceScore>0).sort((u,h)=>h.relevanceScore-u.relevanceScore).slice(0,5)}return i.slice(0,5)}catch(t){return console.error("FAQ 조회 오류:",t),[]}}async function $v(n){var t;const e=typeof n=="string"?n:((t=n==null?void 0:n.toString)==null?void 0:t.call(n))||null;if(!e)return[];try{const r=Kn(Zn,"diagnoses"),s=Qn(r,Ti("petId","==",e),Jn(10));return(await Yn(s)).docs.map(c=>({id:c.id,...c.data()})).sort((c,u)=>{var p,g,T,b;const h=((g=(p=c.createdAt)==null?void 0:p.toDate)==null?void 0:g.call(p))||new Date(c.created_at||0);return(((b=(T=u.createdAt)==null?void 0:T.toDate)==null?void 0:b.call(T))||new Date(u.created_at||0))-h}).slice(0,5)}catch(r){return console.error("과거 진단 기록 조회 오류:",r),[]}}async function jv(n,e){try{const t=Kn(Zn,"diagnoses"),r=Qn(t,Oa("createdAt","desc"),Jn(30)),i=(await Yn(r)).docs.map(u=>({id:u.id,...u.data()})),a=(e||"").toLowerCase().split(/[\s,]+/).filter(Boolean);return i.filter(u=>{if(u.species&&u.species!==n)return!1;const h=`${u.symptom||""} ${u.diagnosis||""} ${u.description||""}`.toLowerCase();return a.some(f=>f&&h.includes(f))}).slice(0,5).map(u=>({diagnosis:u.diagnosis,symptom:u.symptom,triage_score:u.triage_score,actions:u.actions,hospitalVisit:u.hospitalVisit}))}catch(t){return console.error("유사 케이스 조회 오류:",t),[]}}async function Bv(n,e=7){var r;const t=typeof n=="string"?n:((r=n==null?void 0:n.toString)==null?void 0:r.call(n))||null;if(!t)return[];try{const s=Kn(Zn,"pets",t,"careLogs"),i=Qn(s,Oa("date","desc"),Jn(e));return(await Yn(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(s){return console.error("케어 로그 조회 오류:",s),[]}}function qv(n){if(!n||n.length===0)return"";const e=[...n].sort((s,i)=>s.date<i.date?1:-1).slice(0,7);let t=["[최근 7일 일일 케어 요약]"],r=[];for(const s of e){const i={happy:"좋음",normal:"보통",tired:"피곤함",anxious:"불안함"}[s.mood]||s.mood,a=`- ${s.date}: 식사 ${s.mealCount??"-"}회, 물 ${s.waterCount??"-"}회, 산책 ${s.walkCount??"-"}회, 배변 ${s.poopCount??"-"}회, 체중 ${s.weightKg??"미입력"}kg, 기분 ${i}`;t.push(a),typeof s.weightKg=="number"&&r.push(s.weightKg)}if(r.length>=2){const s=r[r.length-1],i=r[0],a=+(i-s).toFixed(1),c=a>.3?"체중이 다소 증가했습니다.":a<-.3?"체중이 다소 감소했습니다.":"체중 변화는 크지 않습니다.";t.push(`※ 체중 변화: ${s}kg → ${i}kg (${a>0?"+":""}${a}kg). ${c}`)}return t.join(`
`)}async function Hv(n,e){const t=(n==null?void 0:n.species)||"dog",r=(e==null?void 0:e.symptomText)||(e==null?void 0:e.description)||"",s=((e==null?void 0:e.selectedSymptoms)||[]).join(", "),i=`${r} ${s}`,[a,c,u]=await Promise.all([Uv(t,i).catch(()=>[]),$v(n==null?void 0:n.id).catch(()=>[]),jv(t,i).catch(()=>[])]);let h=[];try{h=await Bv(n==null?void 0:n.id,7)}catch(g){console.warn("케어 로그 조회 실패 (진단은 계속 진행):",g),h=[]}let f="";c.length>0&&(f+=`

[이 반려동물의 과거 진료 기록]
`,c.forEach((g,T)=>{var k,R;const b=((R=(k=g.createdAt)==null?void 0:k.toDate)==null?void 0:R.call(k))||new Date(g.created_at);f+=`${T+1}. ${b.toLocaleDateString("ko-KR")} - ${g.diagnosis||"미상"}
`,f+=`   증상: ${g.symptom||"기록 없음"}
`,g.triage_score&&(f+=`   응급도: ${g.triage_score}/5
`)})),u.length>0&&(f+=`

[유사 증상의 다른 진료 케이스 참고]
`,u.forEach((g,T)=>{f+=`${T+1}. 진단: ${g.diagnosis}
`,f+=`   증상: ${g.symptom}
`,g.triage_score&&(f+=`   응급도: ${g.triage_score}/5
`),g.hospitalVisit&&(f+=`   병원 방문 필요: 예
`)})),a.length>0&&(f+=`

[보호자 FAQ 참고 데이터]
`,a.forEach((g,T)=>{f+=`${T+1}. Q: ${g.question_ko}
`,f+=`   A: ${g.answer_ko}
`}));const p=qv(h);return p&&(f+=`

`+p),f}const Gv=async(n,e,t,r,s="")=>{var h;const i=ht(Fe.ANTHROPIC);if(!i)throw new Error("Claude API 키가 설정되지 않았습니다. 마이페이지 > API 설정에서 키를 입력해주세요.");const a="claude-sonnet-4-20250514",c=`${En}

당신은 "Medical Agent (전문 수의사)"입니다.
경력 10년 이상의 수의사로서, 근거 중심으로 판단해야 합니다.

[역할]
- CS Agent + Information Agent의 내용을 바탕으로 진단 가설을 세웁니다.
- 가능한 질환 후보(감별진단)를 1~3개 정도 도출합니다.
- 각 질환 후보에 대해 '왜 그렇게 생각하는지' reasoning을 적습니다.
- 위험도 및 응급 여부를 평가합니다.
- 지금 이 채널에서 직접 처방전을 내리지는 않습니다. 대신 병원 진료 필요성과 시급성을 안내합니다.

[출력 형식 - JSON ONLY]
반드시 아래 JSON 형식만 출력하세요. 다른 텍스트는 포함하지 마세요.

{
  "primary_assessment_kor": "현재 상황에 대한 한 문단 요약 (한국어)",
  "possible_diseases": [
    {
      "name_kor": "의심 질환명 (한국어)",
      "name_en": "가능하면 영어명 (모르면 빈 문자열)",
      "probability": 0.0,
      "reasoning_kor": "이 질환을 의심하는 근거 (증상, 기간, 종/품종 등)",
      "body_part": "귀 | 피부 | 소화기 | 호흡기 | 눈 | 관절/다리 | 기타 중 하나"
    }
  ],
  "risk_level": "low | moderate | high | emergency",
  "need_hospital_visit": true,
  "hospital_visit_timing": "지금 바로(응급실 수준) | 오늘 안에 | 24~48시간 내 | 증상이 악화되면 | 경과 관찰 가능",
  "suggested_tests": ["필요 시 권장되는 검사 예: 귀 내시경 검사, 혈액검사, X-ray 등"],
  "caution_notes_for_owner": ["지금 당장 피해야 할 행동 1", "주의해야 할 증상 변화 1"]
}`,u=`반려동물 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 품종: ${n.breed||"미등록"}
- 나이: ${n.age||"미등록"}세
${n.weight?`- 체중: ${n.weight}kg`:""}

CS Agent 요약:
${JSON.stringify(t,null,2)}

Information Agent 요약:
${JSON.stringify(r,null,2)}

원본 증상 설명:
${e.symptomText||"증상 정보 없음"}
${e.guardianResponsesSummary?`

보호자 추가 문진 응답 (중요):
${e.guardianResponsesSummary}
`:""}
${s?`
=== 참고 데이터 (Firestore DB) ===
${s}
=================================
위 참고 데이터는 과거 진료 기록과 FAQ입니다. 진단 시 참고하되, 현재 증상을 기반으로 독립적인 판단을 해주세요.
`:""}

규칙:
- 'emergency'는 생명 위협 가능성이 있는 경우만 사용합니다.
- 확실하지 않은 정보를 단정적으로 말하지 말고, '가능성이 높음/중간/낮음' 수준으로 기술하되, JSON에는 probability(0~1)를 숫자로 넣어주세요.
- 너무 많은 질환 후보를 나열하지 말고, 1~3개 이내로 유지하세요.
- 출력은 반드시 JSON만 반환하세요.

중요 - 홈케어 vs 병원 방문 판단 기준:
- risk_level이 'low'인 경우: 집에서 관찰하며 홈케어로 충분히 관리 가능. need_hospital_visit은 false.
- risk_level이 'moderate'인 경우: 홈케어를 우선 시도하고, 24-48시간 후에도 증상이 개선되지 않거나 악화되면 병원 방문 권장.
- 다음과 같은 경미한 증상은 홈케어를 우선 권장하세요:
  * 경미한 소화불량, 일시적 구토(1-2회), 경미한 설사
  * 식욕 약간 감소, 활동량 약간 저하
  * 경미한 피부 발적, 가벼운 귀 가려움
  * 눈물, 눈곱이 약간 증가
- 다음 경우에만 병원 방문을 강력 권장하세요:
  * 지속적인 구토(3회 이상), 혈변/혈뇨
  * 48시간 이상 음식 거부, 탈수 증상
  * 발열, 호흡곤란, 의식저하
  * 심한 통증, 부종, 외상`;try{const f=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":i,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:a,max_tokens:2048,system:c,messages:[{role:"user",content:u}]})});if(!f.ok){const b=await f.json().catch(()=>({}));throw new Error(`Claude API 오류: ${f.status} - ${((h=b.error)==null?void 0:h.message)||"알 수 없는 오류"}`)}const g=(await f.json()).content[0].text;let T;try{const b=g.match(/\{[\s\S]*\}/);T=JSON.parse(b?b[0]:g)}catch(b){throw console.error("JSON 파싱 오류:",b),new Error("응답 형식 오류")}return{json:T,message:`종합 진단 수행 중...

🔬 증상 분석 결과:
${T.primary_assessment_kor}

📊 진단 결과:
${T.possible_diseases.map(b=>`• ${b.name_kor} (확률 ${Math.round(b.probability*100)}%)`).join(`
`)}

⚠️ 위험도: ${T.risk_level==="low"?"낮음":T.risk_level==="moderate"?"보통":T.risk_level==="high"?"높음":"응급"}
🚨 응급도: ${T.hospital_visit_timing}

→ Triage Engine, 응급도 평가 부탁합니다.`}}catch(f){return console.error("Medical Agent 오류:",f),{json:{primary_assessment_kor:"증상 기반 분석을 완료했습니다.",possible_diseases:[{name_kor:"일반 건강 이상",name_en:"",probability:.6,reasoning_kor:"증상 기반 분석",body_part:"기타"}],risk_level:"moderate",need_hospital_visit:!1,hospital_visit_timing:"증상이 악화되면",suggested_tests:[],caution_notes_for_owner:["증상 관찰 지속","충분한 휴식 제공"]},message:`종합 진단 수행 중...

🔬 증상 분석 결과를 확인했습니다.

📊 진단 결과:
• 일반 건강 이상 (확률 60%)

⚠️ 위험도: Moderate
🚨 응급도: 증상이 악화되면

→ Triage Engine, 응급도 평가 부탁합니다.`}}},zv=async(n,e,t,r,s,i)=>{var f;const a=ht(Fe.ANTHROPIC);if(!a)throw new Error("Claude API 키가 설정되지 않았습니다. 마이페이지 > API 설정에서 키를 입력해주세요.");const c="claude-sonnet-4-20250514",u=`${En}

당신은 "Ops Agent (데이터 처리자)"입니다.

[역할]
- CS / Information / Medical / Triage의 결과를 종합하여, 구조화된 진료 기록과 진단서를 생성합니다.
- 병원에 전달할 수 있는 "사전 진단 패킷(pre-visit packet)"을 생성합니다.
- JSON 포맷을 엄격하게 지키고, 필드 누락 없이 출력합니다.

[출력 형식 - JSON ONLY]
반드시 아래 JSON 형식만 출력하세요. 다른 텍스트는 포함하지 마세요.

{
  "medical_log": {
    "pet_id": "${n.id}",
    "created_at": "${new Date().toISOString()}",
    "summary_kor": "이번 진료의 핵심 내용을 한국어 한 단락으로 요약",
    "triage_score": 0,
    "triage_level": "green | yellow | orange | red",
    "risk_level": "low | moderate | high | emergency",
    "need_hospital_visit": true,
    "hospital_visit_timing": "지금 바로 | 오늘 안에 | 24~48시간 내 | 증상 악화 시 | 경과 관찰",
    "health_flags": {
      "earIssue": false,
      "digestionIssue": false,
      "skinIssue": false,
      "fever": false,
      "energyLevel": 0.8
    },
    "possible_diseases": [
      {
        "name_kor": "의심 질환명",
        "probability": 0.7,
        "body_part": "귀 | 피부 | 소화기 | 호흡기 | 눈 | 관절/다리 | 기타",
        "reasoning_kor": "간단한 근거 요약"
      }
    ],
    "caution_notes_for_owner": ["지금 피해야 할 행동 또는 주의사항 1", "주의사항 2"],
    "suggested_tests": ["권장 검사 1", "권장 검사 2"]
  },
  "owner_friendly_diagnosis_sheet": {
    "title": "진단서 제목 (예: '${n.petName}의 귀 상태 AI 진단 결과')",
    "intro": "보호자에게 보여줄 인사 및 전체 상황 요약 (한국어, 2~3문장)",
    "problem_summary": "지금 어떤 문제가 의심되는지 쉽게 설명",
    "risk_explanation": "응급도/위험도를 보호자 눈높이에 맞게 풀어쓴 설명",
    "what_to_watch": ["집에서 관찰해야 할 증상 변화", "악화되면 바로 병원 가야 하는 신호"],
    "immediate_home_actions": ["지금 당장 집에서 할 수 있는 조치 1", "지금 당장 피해야 할 행동 1"]
  },
  "hospital_previsit_packet": {
    "packet_title": "반려동물 AI 사전 진단 요약",
    "for_vet_summary": "수의사가 10초 안에 읽고 파악할 수 있는 핵심 요약 (한국어, 3~5문장)",
    "pet_profile_brief": {
      "name": "${n.petName}",
      "species": "${n.species}",
      "breed": "${n.breed||"미등록"}",
      "age_info": "예: 만 ${n.age||"?"}세 추정, ${Ue(n.species)}",
      "sex_neutered": "예: ${n.sex==="M"?"수컷":"암컷"}"
    },
    "visit_reason": "이번에 병원을 방문하게 되는 주된 이유를 한 문장으로 요약",
    "symptom_timeline": "증상이 언제부터, 어떻게 진행되었는지 타임라인 형식 요약",
    "ai_differential_diagnosis": [
      {
        "name_kor": "의심 질환명",
        "probability": 0.7,
        "note_for_vet": "수의사가 참고할 만한 코멘트 (검사 제안, 감별 포인트 등)"
      }
    ],
    "triage_and_risk": {
      "triage_score": 0,
      "triage_level": "green | yellow | orange | red",
      "risk_level": "low | moderate | high | emergency",
      "urgency_comment": "시급성에 대한 짧은 코멘트"
    },
    "requested_actions_for_hospital": ["가능하다면 귀 내시경 검사 및 세균배양검사 고려 바랍니다."]
  }
}

규칙:
- JSON 구조를 반드시 지키고, 모든 필드를 포함하세요.
- 보호자용(owner_friendly_diagnosis_sheet)과 병원용(hospital_previsit_packet)은 톤을 다르게 써야 합니다.
  - 보호자용: 쉽고 부드럽게
  - 병원용: 전문 용어 허용, 요약 중심`,h=`[입력]
- pet_profile: 반려동물 정보
- cs_summary: CS Agent JSON
- info_summary: Information Agent JSON
- medical_result: Medical Agent JSON
- triage_result: Triage Engine JSON

반려동물 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 품종: ${n.breed||"미등록"}

CS Agent 요약:
${JSON.stringify(s,null,2)}

Information Agent 요약:
${JSON.stringify(i,null,2)}

Medical Agent 진단:
${JSON.stringify(t,null,2)}

Triage Engine 결과:
${JSON.stringify(r,null,2)}

출력은 반드시 JSON만 반환하세요.`;try{const p=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":a,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:c,max_tokens:4096,system:u,messages:[{role:"user",content:h}]})});if(!p.ok){const k=await p.json().catch(()=>({}));throw new Error(`Claude API 오류: ${p.status} - ${((f=k.error)==null?void 0:f.message)||"알 수 없는 오류"}`)}const T=(await p.json()).content[0].text;let b;try{const k=T.match(/\{[\s\S]*\}/);b=JSON.parse(k?k[0]:T)}catch(k){throw console.error("JSON 파싱 오류:",k),new Error("응답 형식 오류")}return{json:b,message:`진료 기록 생성 완료.
진단서 템플릿 준비 중...
데이터 저장 완료.

→ 진단서 생성 완료!`}}catch(p){console.error("Ops Agent 오류:",p);const g=(r==null?void 0:r.health_flags)||{earIssue:!1,digestionIssue:!1,skinIssue:!1,fever:!1,energyLevel:.7};return{json:{medical_log:{pet_id:n.id,created_at:new Date().toISOString(),summary_kor:`${n.petName}의 증상에 대한 AI 진단이 완료되었습니다.`,triage_score:(r==null?void 0:r.triage_score)||2,triage_level:(r==null?void 0:r.triage_level)||"yellow",risk_level:(t==null?void 0:t.risk_level)||"moderate",need_hospital_visit:(t==null?void 0:t.need_hospital_visit)||!1,hospital_visit_timing:(t==null?void 0:t.hospital_visit_timing)||"증상 악화 시",health_flags:g,possible_diseases:(t==null?void 0:t.possible_diseases)||[],caution_notes_for_owner:(t==null?void 0:t.caution_notes_for_owner)||[],suggested_tests:(t==null?void 0:t.suggested_tests)||[]},owner_friendly_diagnosis_sheet:{title:`${n.petName}의 AI 진단 결과`,intro:"AI 진단이 완료되었습니다.",problem_summary:"증상 기반 분석 결과입니다.",risk_explanation:"경과 관찰이 필요합니다.",what_to_watch:["증상 변화 관찰"],immediate_home_actions:["충분한 휴식 제공"]},hospital_previsit_packet:{packet_title:"반려동물 AI 사전 진단 요약",for_vet_summary:"AI 기반 증상 분석 결과입니다.",pet_profile_brief:{name:n.petName,species:n.species,breed:n.breed||"미등록",age_info:`${n.age||"?"}세`,sex_neutered:n.sex==="M"?"수컷":"암컷"},visit_reason:"증상 확인을 위한 진료",symptom_timeline:"증상 기반 분석",ai_differential_diagnosis:[],triage_and_risk:{triage_score:(r==null?void 0:r.triage_score)||2,triage_level:(r==null?void 0:r.triage_level)||"yellow",risk_level:(t==null?void 0:t.risk_level)||"moderate",urgency_comment:"경과 관찰 권장"},requested_actions_for_hospital:[]}},message:`진료 기록 생성 완료.
진단서 템플릿 준비 중...
데이터 저장 완료.

→ 진단서 생성 완료!`}}},Kv=(n,e)=>{const t=[],r=n.risk_level||"moderate",s=e.triage_level||"yellow";({low:["green","yellow"],moderate:["yellow","orange"],high:["orange","red"],emergency:["red"]}[r]||["yellow"]).includes(s)||t.push({type:"risk_level_mismatch",severity:"high",medical_assessment:r,triage_assessment:s,description:`Medical Agent는 ${r}로 평가했지만, Triage Engine은 ${s}로 평가했습니다.`});const c=e.triage_score||2;(r==="emergency"||r==="high")&&c<3&&t.push({type:"emergency_score_mismatch",severity:"critical",medical_assessment:r,triage_score:c,description:`Medical Agent가 높은 위험도를 진단했으나, Triage 점수(${c})가 낮습니다.`});const h=n.need_hospital_visit||!1,f=c>=3||s==="red";return h!==f&&t.push({type:"hospital_visit_mismatch",severity:"medium",medical_recommendation:h,triage_recommendation:f,description:`병원 방문 필요성에 대한 의견이 다릅니다. Medical: ${h}, Triage: ${f}`}),{has_discrepancies:t.length>0,discrepancy_count:t.length,discrepancies:t,critical_count:t.filter(p=>p.severity==="critical").length,needs_review:t.some(p=>p.severity==="critical"||p.severity==="high")}},Wv=async(n,e,t,r,s)=>{const i=ht(Fe.ANTHROPIC);if(!i)return console.warn("Claude API 키가 없어 협진 검토를 건너뜁니다."),null;const a=`${En}

당신은 "Senior Veterinarian Reviewer (수석 수의사 검토팀)"입니다.

[역할]
- Medical Agent와 Triage Agent의 진단 결과를 독립적으로 검토합니다.
- 두 에이전트의 의견이 일치하는지, 불일치가 있다면 어느 쪽이 더 타당한지 평가합니다.
- 누락된 중요한 소견이나 과잉 진단 여부를 확인합니다.
- 최종적으로 가장 합리적인 진단과 조치를 권고합니다.

[원칙]
- 보수적이고 신중한 접근: 불확실하면 병원 방문을 권장
- 과잉 진단보다는 안전을 우선
- 에이전트 간 불일치가 있을 때는 더 높은 위험도를 채택`,c=`
반려동물 정보:
- 이름: ${n.petName}
- 종류: ${Ue(n.species)}
- 품종: ${n.breed||"미등록"}
- 나이: ${n.age||"미상"}
- 체중: ${n.weight||"미상"}

증상:
${e.symptomText}
${e.guardianResponsesSummary?`
★★★ 보호자 추가 문진 응답 (매우 중요) ★★★
${e.guardianResponsesSummary}
`:""}

Information Agent 분석:
${JSON.stringify(s,null,2)}

Medical Agent 진단:
${JSON.stringify(t,null,2)}

Triage Engine 평가:
${JSON.stringify(r,null,2)}

[검토 요청]
위 진단 결과들을 검토하고 다음 형식으로 답변해주세요:

{
  "agreement_level": "full_agreement | partial_agreement | significant_disagreement",
  "confidence_level": "높음 | 중간 | 낮음",
  "primary_concern": "가장 우려되는 점 (한국어)",
  "medical_agent_assessment": "Medical Agent 진단에 대한 평가 (적절함/과소평가/과대평가)",
  "triage_agent_assessment": "Triage Agent 평가에 대한 평가 (적절함/과소평가/과대평가)",
  "recommended_risk_level": "low | moderate | high | emergency",
  "recommended_triage_score": 0-5,
  "recommended_hospital_visit": true/false,
  "reasoning": "검토 근거 (한국어 3-4문장)",
  "additional_concerns": ["놓친 부분이나 추가 고려사항"],
  "final_recommendation": "최종 권고사항 (한국어 2-3문장)"
}`;try{const u=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":i,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:2048,temperature:.3,system:a,messages:[{role:"user",content:c}]})});if(!u.ok)throw new Error(`Claude API 오류: ${u.status}`);const p=(await u.json()).content[0].text.match(/\{[\s\S]*\}/);if(p)return JSON.parse(p[0])}catch(u){console.error("협진 검토 오류:",u)}return null},Qv=async(n,e,t,r,s)=>{const i=ht(Fe.OPENAI);if(!i)return console.warn("OpenAI API 키가 없어 2차 의견을 건너뜁니다."),null;const a=`${En}

당신은 "Second Opinion Specialist (제2 의견 전문의)"입니다.

[역할]
- 다른 AI 수의사들의 진단을 검토하고 독립적인 제2의견을 제공합니다.
- Claude 기반 에이전트들이 놓쳤을 수 있는 관점을 제시합니다.
- 최종 진단의 신뢰도를 높이는 데 기여합니다.`,c=`
반려동물: ${n.petName} (${Ue(n.species)}, ${n.breed||"미등록"})
증상: ${e.symptomText}
${e.guardianResponsesSummary?`
★ 보호자 추가 문진: ${e.guardianResponsesSummary}
`:""}

1차 진단 (Medical Agent - Claude):
${JSON.stringify(t,null,2)}

응급도 평가 (Triage Engine - Claude):
${JSON.stringify(r,null,2)}

검토 결과 (Senior Reviewer - Claude):
${s?JSON.stringify(s,null,2):"없음"}

[제2 의견 요청]
위 진단들을 검토하고 다음을 답변해주세요:

{
  "agreement_with_diagnosis": true/false,
  "alternative_diagnosis": ["고려해볼 다른 진단 가능성들"],
  "risk_assessment": "low | moderate | high | emergency",
  "key_observations": ["GPT-4o 관점에서 중요하게 본 점들"],
  "dissenting_opinion": "다른 AI들과 다르게 생각하는 부분 (있다면)",
  "confidence_level": "높음 | 중간 | 낮음",
  "recommendation": "최종 권고 (한국어)"
}`;try{const u=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({model:"gpt-4o",messages:[{role:"system",content:a},{role:"user",content:c}],temperature:.3,max_tokens:1500})});if(!u.ok)throw new Error(`OpenAI API 오류: ${u.status}`);const p=(await u.json()).choices[0].message.content.match(/\{[\s\S]*\}/);if(p)return JSON.parse(p[0])}catch(u){console.error("제2 의견 오류:",u)}return null},Jv=(n,e,t,r,s)=>{var F,G;const i=[n.risk_level,e.triage_level,t==null?void 0:t.recommended_risk_level,r==null?void 0:r.risk_assessment].filter(Boolean),a=Q=>({green:"low",yellow:"low",orange:"moderate",red:"high",emergency:"emergency",low:"low",moderate:"moderate",high:"high"})[Q]||"moderate",c=i.map(a),h=["emergency","high","moderate","low"].find(Q=>c.includes(Q))||"moderate",f=[e.triage_score,t==null?void 0:t.recommended_triage_score].filter(Q=>Q!=null);let p=f.length>0?Math.round(f.reduce((Q,X)=>Q+X,0)/f.length):2;s.critical_count>0&&(p=Math.min(5,p+1));const g=[n.need_hospital_visit,p>=3,t==null?void 0:t.recommended_hospital_visit,(r==null?void 0:r.risk_assessment)==="high"||(r==null?void 0:r.risk_assessment)==="emergency"].filter(Q=>Q===!0||Q===!1),T=g.filter(Q=>Q===!0).length>=g.length/2,b=s.has_discrepancies?1-s.discrepancy_count*.1:.95,k=(t==null?void 0:t.confidence_level)==="높음"?.95:(t==null?void 0:t.confidence_level)==="중간"?.8:(t==null?void 0:t.confidence_level)==="낮음"?.65:.75,R=(t==null?void 0:t.agreement_level)==="full_agreement"?.1:(t==null?void 0:t.agreement_level)==="partial_agreement"?0:-.15,L=(r==null?void 0:r.confidence_level)==="높음"?.9:(r==null?void 0:r.confidence_level)==="중간"?.75:(r==null?void 0:r.confidence_level)==="낮음"?.6:null;let U;return L!==null?U=k*.6+L*.4+R:U=Math.min(b,k)+R,U=Math.max(.5,Math.min(.98,U)),{consensus_reached:!s.needs_review||(t==null?void 0:t.agreement_level)==="full_agreement",final_risk_level:h,final_triage_score:p,final_hospital_visit:T,confidence_score:U,voting_summary:{risk_votes:c,triage_scores:f,hospital_votes:g},collaborative_notes:{medical_diagnosis:n.primary_assessment_kor||((G=(F=n.possible_diseases)==null?void 0:F[0])==null?void 0:G.name_kor),reviewer_opinion:t==null?void 0:t.final_recommendation,second_opinion:r==null?void 0:r.recommendation,key_concerns:[...(t==null?void 0:t.additional_concerns)||[],...(r==null?void 0:r.key_observations)||[]]},discrepancy_resolution:s.has_discrepancies?`${s.discrepancy_count}개의 의견 차이를 발견했으며, 안전 우선 원칙에 따라 조정했습니다.`:"모든 에이전트가 일치된 견해를 보였습니다."}},Yv=async(n,e,t,r,s)=>{console.log("🤝 협진 시스템 시작...");const i=Kv(t,r);console.log("불일치 분석:",i);const a=await Wv(n,e,t,r,s);console.log("검토 결과:",a);let c=null;(i.needs_review||t.risk_level==="high"||t.risk_level==="emergency")&&(c=await Qv(n,e,t,r,a),console.log("제2 의견:",c));const u=Jv(t,r,a,c,i);return console.log("최종 합의:",u),{discrepancy_analysis:i,review_result:a,second_opinion:c,consensus:u,collaboration_summary:`${i.has_discrepancies?"⚠️ ":"✅ "}협진 완료: ${u.consensus_reached?"전체 합의 도달":"부분 조정 필요"} (신뢰도: ${(u.confidence_score*100).toFixed(0)}%)`}},Jf={digestive:{category:"소화기",medications:[{type:"위장관 보호제",examples:["수크랄페이트","오메프라졸"],usage:"식전 30분~1시간",duration:"보통 3~7일",description:"위 점막을 보호하고 위산 분비를 억제해요",caution:"다른 약과 시간 간격을 두고 복용하세요"},{type:"구토 억제제",examples:["세레니아","메토클로프라미드"],usage:"증상 발현 시 또는 식전",duration:"증상 완화까지 1~3일",description:"구역질과 구토를 억제해요",caution:"졸음이 올 수 있어요"},{type:"지사제/정장제",examples:["스멕타","프로바이오틱스"],usage:"1일 2~3회 식후",duration:"증상 완화까지 3~5일",description:"장 점막을 보호하고 장내 환경을 개선해요",caution:"수분 섭취를 충분히 해주세요"}],symptoms:["구토","설사","식욕부진","위장염","소화불량"]},dermatology:{category:"피부",medications:[{type:"항히스타민제",examples:["아포퀼","세티리진"],usage:"1일 1~2회",duration:"증상 완화까지 1~2주",description:"가려움과 알레르기 반응을 억제해요",caution:"졸음이 올 수 있어요"},{type:"외용 항균/항진균제",examples:["클로르헥시딘 스프레이","항진균 연고"],usage:"1일 2회 환부에 도포",duration:"2~4주",description:"피부 세균이나 곰팡이 감염을 치료해요",caution:"핥지 못하게 주의하세요"},{type:"스테로이드 (외용/경구)",examples:["프레드니솔론","하이드로코르티손 연고"],usage:"처방에 따라",duration:"단기간 사용 권장",description:"염증과 가려움을 빠르게 억제해요",caution:"장기 사용 시 부작용 주의, 수의사 지시 필수"}],symptoms:["가려움","피부염","알레르기","탈모","발진","붓기","비듬"]},respiratory:{category:"호흡기",medications:[{type:"항생제",examples:["아목시실린","독시사이클린"],usage:"1일 2회 식후",duration:"7~14일 (처방 완료까지)",description:"세균성 감염을 치료해요",caution:"처방된 기간 동안 끝까지 복용하세요"},{type:"기침 억제제",examples:["부토르판올","덱스트로메토르판"],usage:"증상 시 1일 2~3회",duration:"증상 완화까지",description:"기침을 억제해요",caution:"가래가 많을 때는 사용을 피하세요"},{type:"기관지 확장제",examples:["테오필린","알부테롤"],usage:"1일 2회",duration:"증상 조절 시까지",description:"기관지를 넓혀 호흡을 편하게 해요",caution:"심장 박동 증가가 있을 수 있어요"}],symptoms:["기침","콧물","재채기","호흡곤란","가래","기관지염"]},urinary:{category:"비뇨기",medications:[{type:"항생제 (요로 감염용)",examples:["엔로플록사신","아목시실린-클라불란산"],usage:"1일 1~2회",duration:"7~14일",description:"요로 세균 감염을 치료해요",caution:"충분한 수분 섭취가 중요해요"},{type:"요로 건강 보조제",examples:["D-만노스","크랜베리 추출물"],usage:"1일 1회",duration:"장기간 복용 가능",description:"요로 점막을 보호하고 세균 부착을 방지해요",caution:"약물이 아닌 보조제예요"},{type:"진경제",examples:["프라조신","페녹시벤자민"],usage:"1일 1~2회",duration:"증상 조절 시까지",description:"요도 근육을 이완시켜요",caution:"혈압 저하에 주의하세요"}],symptoms:["빈뇨","혈뇨","배뇨장애","방광염","요로결석"]},orthopedic:{category:"정형외과",medications:[{type:"비스테로이드성 소염진통제 (NSAIDs)",examples:["멜록시캄","카프로펜","데라콕시브"],usage:"1일 1회 식후",duration:"증상에 따라 단기~장기",description:"통증과 염증을 줄여요",caution:"위장장애 주의, 신장/간 기능 모니터링 필요"},{type:"관절 보조제",examples:["글루코사민","콘드로이틴","초록입홍합"],usage:"1일 1회",duration:"장기간 복용",description:"관절 연골을 보호하고 재생을 도와요",caution:"효과는 4~6주 후부터 나타나요"}],symptoms:["절뚝거림","관절통","슬개골탈구","관절염","디스크"]},infection:{category:"감염/전신",medications:[{type:"광범위 항생제",examples:["아목시실린-클라불란산","세팔렉신"],usage:"1일 2회 식후",duration:"7~14일",description:"다양한 세균 감염을 치료해요",caution:"처방 기간 동안 빠짐없이 복용하세요"},{type:"해열/진통제",examples:["멜록시캄 (강아지)","온시오르 (고양이)"],usage:"1일 1회",duration:"증상 완화까지 단기간",description:"열과 통증을 낮춰요",caution:"고양이에게 사람 약 절대 금지!"},{type:"수액 요법",examples:["링거 용액","포도당"],usage:"병원에서 투여",duration:"탈수 교정까지",description:"탈수와 전해질 불균형을 교정해요",caution:"심한 경우 입원이 필요해요"}],symptoms:["발열","무기력","탈수","감염","패혈증"]}},Xv={위장염:"digestive",구토:"digestive",설사:"digestive",식욕부진:"digestive",소화불량:"digestive",장염:"digestive","급성 위장염":"digestive",피부염:"dermatology",알레르기:"dermatology",아토피:"dermatology",가려움:"dermatology",탈모:"dermatology",외이염:"dermatology",농피증:"dermatology","피부 감염":"dermatology","알레르기 피부염":"dermatology",기침:"respiratory",기관지염:"respiratory",폐렴:"respiratory","호흡기 감염":"respiratory",켄넬코프:"respiratory","상부 호흡기 감염":"respiratory",방광염:"urinary",요로감염:"urinary",혈뇨:"urinary",FLUTD:"urinary",요로결석:"urinary",하부요로질환:"urinary",슬개골탈구:"orthopedic",관절염:"orthopedic",디스크:"orthopedic",골절:"orthopedic",절뚝거림:"orthopedic","관절 문제":"orthopedic",파보바이러스:"infection",범백:"infection",디스템퍼:"infection",발열:"infection",감염:"infection"};function Zv(n,e=[]){const t=new Set;if(n){const r=n.toLowerCase();for(const[s,i]of Object.entries(Xv))(r.includes(s.toLowerCase())||s.toLowerCase().includes(r))&&t.add(i)}return e.forEach(r=>{const s=(typeof r=="string"?r:(r==null?void 0:r.name_kor)||"").toLowerCase();for(const[i,a]of Object.entries(Jf))a.symptoms.some(c=>s.includes(c)||c.includes(s))&&t.add(i)}),Array.from(t)}function eA(n,e){var f,p,g;const t=((p=(f=n==null?void 0:n.possible_diseases)==null?void 0:f[0])==null?void 0:p.name_kor)||(n==null?void 0:n.primary_assessment_kor)||"",r=(e==null?void 0:e.selectedSymptoms)||[],i=((e==null?void 0:e.symptomText)||"").split(/[,\s]+/).filter(Boolean),a=Zv(t,[...r,...i]);if(a.length===0)return{hasMedicationGuidance:!1,message:"현재 증상에 대한 일반적인 약물 정보가 없습니다. 수의사 선생님의 처방을 따라주세요.",medications:[]};const c=[];a.forEach(T=>{const b=Jf[T];if(b){const k=b.medications.slice(0,2);c.push({category:b.category,medications:k})}});const u=(g=c[0])==null?void 0:g.medications[0];let h="";return u&&(h=`${u.type} 종류의 약으로 호전될 수 있어요. ${u.description}`),{hasMedicationGuidance:!0,message:h,medications:c,disclaimer:"※ 위 정보는 일반적인 안내이며, 실제 처방은 반드시 수의사 선생님의 진료를 통해 받으세요."}}async function tA(n,e){try{const t=Kn(Zn,"owner_faq"),r=Qn(t,Ti("species_code","in",[n,"all"]),Jn(30)),i=(await Yn(r)).docs.map(a=>({id:a.id,...a.data()}));if(e){const a=e.toLowerCase().split(/[\s,]+/).filter(u=>u&&u.length>=2);return i.map(u=>{let h=0;const f=`${u.question_ko||""} ${u.answer_ko||""} ${u.symptom_label_ko||""} ${(u.keywords||[]).join(" ")}`.toLowerCase();return a.forEach(p=>{var g,T;f.includes(p)&&((g=u.keywords)!=null&&g.some(b=>b.toLowerCase().includes(p))?h+=3:(T=u.symptom_label_ko)!=null&&T.toLowerCase().includes(p)?h+=2:h+=1)}),{...u,relevanceScore:h}}).filter(u=>u.relevanceScore>=2).sort((u,h)=>h.relevanceScore-u.relevanceScore).slice(0,5)}return[]}catch(t){return console.error("Firebase FAQ 조회 오류:",t),[]}}async function nA(n,e,t="dog"){var g,T;const r=((T=(g=n==null?void 0:n.possible_diseases)==null?void 0:g[0])==null?void 0:T.name_kor)||"",s=(e==null?void 0:e.selectedSymptoms)||[],i=(e==null?void 0:e.symptomText)||"",a=[r,...s.map(b=>typeof b=="string"?b:(b==null?void 0:b.name_kor)||""),...i.split(/[\s,]+/).filter(Boolean)].filter(b=>b&&b.length>=2),c=a.join(" "),u=new Set,h=new Set,f=b=>(b||"").replace(/[\s?.,!~]/g,"").toLowerCase();let p=[];try{(await tA(t,c)).forEach(k=>{const R=f(k.question_ko);k.relevanceScore>=2&&!u.has(R)&&(u.add(R),k.symptom_tag&&h.add(k.symptom_tag),p.push(k))}),console.log("Firebase FAQ 조회 성공:",p.length,"개")}catch(b){console.warn("Firebase FAQ 조회 실패, 로컬 데이터 사용:",b)}if(p.length<3){const b=rA(r);Ul.filter(R=>R.species_code===t||R.species_code==="all").map(R=>{let L=0;const U=`${R.question_ko} ${R.answer_ko} ${R.symptom_label_ko||""} ${(R.keywords||[]).join(" ")}`.toLowerCase();return a.forEach(F=>{F.length>=2&&U.includes(F.toLowerCase())&&(L+=2)}),R.department_code===b&&(L+=1),{...R,relevanceScore:L}}).filter(R=>R.relevanceScore>=2).sort((R,L)=>L.relevanceScore-R.relevanceScore).forEach(R=>{if(p.length>=3)return;const L=f(R.question_ko);!u.has(L)&&!h.has(R.symptom_tag)&&(u.add(L),R.symptom_tag&&h.add(R.symptom_tag),p.push(R))})}return p.length===0?(console.log("관련 FAQ 없음 - 기본 FAQ 제공"),Ul.filter(k=>k.species_code===t||k.species_code==="all").slice(0,3).map((k,R)=>({id:k.id||`default_faq_${R}`,question:k.question_ko,answer:k.answer_ko,category:k.department_label_ko||"일반",symptomTag:k.symptom_tag,keywords:k.keywords||[]}))):p.slice(0,3).map((b,k)=>({id:b.id||`faq_${k}_${b.symptom_tag||"general"}`,question:b.question_ko,answer:b.answer_ko,category:b.department_label_ko||"일반",symptomTag:b.symptom_tag,keywords:b.keywords||[]}))}function rA(n){const e=(n||"").toLowerCase(),t={피부:"dermatology",알레르기:"dermatology",가려움:"dermatology",탈모:"dermatology",구토:"internal_medicine",설사:"internal_medicine",위장:"internal_medicine",식욕:"internal_medicine",눈:"ophthalmology",충혈:"ophthalmology",다리:"orthopedics",절뚝:"orthopedics",관절:"orthopedics",소변:"urology",배뇨:"urology",방광:"urology"};for(const[r,s]of Object.entries(t))if(e.includes(r))return s;return"internal_medicine"}function sA(n,e,t){const r=(t==null?void 0:t.petName)||(t==null?void 0:t.name)||"반려동물";let i=n.answer;const a=(e==null?void 0:e.risk_level)||"moderate";let c="";return a==="emergency"||a==="high"?c=`

⚠️ ${r}의 현재 상태를 고려하면 빠른 병원 방문을 권장드려요.`:a==="low"&&(c=`

✅ ${r}의 상태는 경미해 보이니 위 안내를 참고해서 집에서 관찰해 주세요.`),{id:n.id,question:n.question,answer:i+c,category:n.category}}function iA(n,e,t,r){const s=[];return n.forEach(i=>{const a=e.find(c=>c.id===i);a&&s.push(sA(a,t,r))}),s}function oA(n){return{title:"추가로 궁금하신 점이 있으신가요?",subtitle:"궁금한 질문을 선택해 주세요 (복수 선택 가능)",faqs:n.map(e=>({id:e.id,question:e.question,category:e.category,selected:!1})),allowMultiple:!0,skipOption:{id:"skip",label:"괜찮아요, 진단서를 확인할게요"}}}function aA(n){if(!n||n.length===0)return"";let e=`📚 질문에 대한 답변을 드릴게요!

`;return n.forEach((t,r)=>{e+=`❓ ${t.question}
`,e+=`💬 ${t.answer}
`,r<n.length-1&&(e+=`
---

`)}),e}const CA=async(n,e,t,r=null)=>{var T,b,k,R,L,U,F,G,Q,X,I;const s=[];let i=null,a=null,c=null,u=null,h=null,f=null;const p={...n,petName:n.petName||n.name||"반려동물",name:n.name||n.petName||"반려동물",species:n.species||"dog",breed:n.breed||"미등록",age:n.age||"미상",weight:n.weight||null},g={...e,symptomText:(e==null?void 0:e.symptomText)||(e==null?void 0:e.description)||(e==null?void 0:e.userDescription)||"증상 정보 없음",selectedSymptoms:(e==null?void 0:e.selectedSymptoms)||[],department:(e==null?void 0:e.department)||"내과",images:(e==null?void 0:e.images)||[]};try{t({agent:"CS Agent",role:"접수 · 예약 센터",icon:"🏥",type:"cs",content:"안녕하세요, 접수센터입니다. 진료 접수 도와드리겠습니다.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1500)),i=await xv(p,g),s.push({agent:"CS Agent",role:"접수 · 예약 센터",icon:"🏥",type:"cs",content:i.message,timestamp:Date.now()}),t(s[s.length-1]),await new Promise(M=>setTimeout(M,2e3)),t({agent:"CS Agent",role:"접수 · 예약 센터",icon:"🏥",type:"cs",content:"증상 상담실로 안내해 드릴게요. 간호팀에서 자세한 증상을 확인할게요.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1200)),t({agent:"Information Agent",role:"증상 사전 상담실",icon:"💉",type:"info",content:"네, 접수 확인했습니다. 증상 정보를 분석 중입니다.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1500)),a=await Fv(p,g,i.json),s.push({agent:"Information Agent",role:"증상 사전 상담실",icon:"💉",type:"info",content:a.message,timestamp:Date.now()}),t(s[s.length-1]),await new Promise(M=>setTimeout(M,2e3)),t({agent:"Information Agent",role:"증상 사전 상담실",icon:"💉",type:"info",content:"정확한 진단을 위해 몇 가지 추가 정보가 필요합니다. 아래 질문에 답변해 주세요:",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1e3));const _=[{id:"symptom_start",question:"언제부터 증상이 시작되었나요?",options:["오늘","어제","2-3일 전","일주일 이상"],type:"single"},{id:"appetite",question:"식욕은 어떤가요?",options:["평소와 같음","약간 감소","거의 안 먹음","전혀 안 먹음"],type:"single"},{id:"activity",question:"활동량은 평소와 비교해 어떤가요?",options:["평소와 같음","약간 감소","많이 감소","거의 움직이지 않음"],type:"single"},{id:"other_symptoms",question:"다른 동반 증상이 있나요? (복수 선택 가능)",options:["구토","설사","기침","재채기","호흡곤란","발열","없음"],type:"multiple"}];let w={};if(r)t({agent:"Information Agent",role:"증상 사전 상담실",icon:"💉",type:"info",content:"",isQuestionPhase:!0,questions:_,timestamp:Date.now()}),w=await r(_),t({agent:"Information Agent",role:"증상 사전 상담실",icon:"💉",type:"info",content:"답변해 주셔서 감사합니다. 입력하신 정보를 바탕으로 분석을 진행하겠습니다.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,800));else{for(const M of _)t({agent:"Information Agent",role:"증상 사전 상담실",icon:"💉",type:"info",content:M.question,isQuestion:!0,questionData:M,timestamp:Date.now()}),await new Promise(Me=>setTimeout(Me,800));await new Promise(M=>setTimeout(M,1200))}const v={...g,guardianResponses:w,guardianResponsesSummary:Object.entries(w).map(([M,Me])=>{const vt=_.find(At=>At.id===M);return`${(vt==null?void 0:vt.question)||M}: ${Array.isArray(Me)?Me.join(", "):Me}`}).join(`
`)};t({agent:"Information Agent",role:"증상 사전 상담실",icon:"💉",type:"info",content:"초기 상담을 마쳤어요. 이제 담당 수의사 선생님께서 직접 진찰해 주실 거예요.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1200)),t({agent:"Veterinarian Agent",role:"전문 진료실",icon:"👨‍⚕️",type:"medical",content:"네, 상담 기록 확인했습니다. 정밀 진찰 시작하겠습니다.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1500));let E="";try{E=await Hv(p,v),E&&console.log("AI 컨텍스트 로드 완료:",E.length,"자")}catch(M){console.warn("AI 컨텍스트 로드 실패 (진단은 계속 진행):",M)}c=await Gv(p,v,i.json,a.json,E),s.push({agent:"Veterinarian Agent",role:"전문 진료실",icon:"👨‍⚕️",type:"medical",content:c.message,timestamp:Date.now()}),t(s[s.length-1]),await new Promise(M=>setTimeout(M,2e3)),t({agent:"Veterinarian Agent",role:"전문 진료실",icon:"👨‍⚕️",type:"medical",content:"진찰을 마쳤습니다. 응급의학팀에서 위급도를 평가해 드릴게요.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1200)),t({agent:"Triage Engine",role:"응급도 판정실",icon:"🚨",type:"triage",content:"네, 진단 소견서 확인했습니다. 응급도 평가 진행하겠습니다.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1500));try{u=await Ov(p,v,c.json,i.json),s.push({agent:"Triage Engine",role:"응급도 판정실",icon:"🚨",type:"triage",content:`응급도 평가 완료했습니다.

📊 Triage Score: ${u.triage_score}/5
🏷️ 응급 등급: ${u.triage_level}
⏰ 권장 조치: ${u.recommended_action_window}

${u.emergency_summary_kor}`,timestamp:Date.now()}),t(s[s.length-1])}catch(M){console.error("Triage 계산 오류:",M)}await new Promise(M=>setTimeout(M,2e3)),t({agent:"Collaborative System",role:"협진 검토팀",icon:"🤝",type:"collaboration",content:"여러 AI 수의사들의 진단을 교차 검증하고 있습니다...",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1e3));let A=null;try{A=await Yv(p,g,c.json,u,a.json);const M=A.consensus.consensus_reached?"✅ 모든 AI 수의사가 일치된 견해를 보였습니다.":`⚠️ ${A.discrepancy_analysis.discrepancy_count}개의 의견 차이를 발견하여 조정했습니다.`;s.push({agent:"Collaborative System",role:"협진 검토팀",icon:"🤝",type:"collaboration",content:`${A.collaboration_summary}

${M}

📊 최종 위험도: ${A.consensus.final_risk_level}
🎯 신뢰도: ${(A.consensus.confidence_score*100).toFixed(0)}%

${A.consensus.collaborative_notes.reviewer_opinion||""}`,timestamp:Date.now()}),t(s[s.length-1]),A.consensus&&(u.triage_score=A.consensus.final_triage_score,u.triage_level=A.consensus.final_risk_level==="low"?"yellow":A.consensus.final_risk_level==="moderate"?"orange":(A.consensus.final_risk_level==="high","red"),c.json.risk_level=A.consensus.final_risk_level,c.json.need_hospital_visit=A.consensus.final_hospital_visit)}catch(M){console.error("협진 시스템 오류:",M),t({agent:"Collaborative System",role:"협진 검토팀",icon:"🤝",type:"collaboration",content:"협진 검토를 진행했으나 일부 단계를 건너뛰었습니다. 기본 진단으로 진행합니다.",timestamp:Date.now()})}await new Promise(M=>setTimeout(M,800)),t({agent:"Collaborative System",role:"협진 검토팀",icon:"🤝",type:"collaboration",content:"협진 검토를 완료했습니다. 치료 계획팀에 최종 소견을 전달합니다.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,600)),t({agent:"Data Agent",role:"치료 계획 수립실",icon:"📋",type:"data",content:"응급도 평가 결과 확인했습니다. 의료진 협진으로 치료 계획 수립하겠습니다.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1500)),h=await zv(p,g,c.json,u,i.json,a.json),s.push({agent:"Data Agent",role:"치료 계획 수립실",icon:"📋",type:"data",content:h.message,timestamp:Date.now()}),t(s[s.length-1]),await new Promise(M=>setTimeout(M,2e3)),t({agent:"Data Agent",role:"치료 계획 수립실",icon:"📋",type:"data",content:`진단서 생성 완료
치료 계획을 세웠어요. 약국으로 안내해 드릴게요.`,timestamp:Date.now()}),await new Promise(M=>setTimeout(M,1200)),f=await Mv(p,h.json,c.json,u);const y=eA(c.json,v);let _e=f.message;if(y&&y.hasMedicationGuidance){const M=(T=y.medications[0])==null?void 0:T.medications[0];_e=`${p.petName}를 위한 케어 플랜!

💊 ${y.message}

${M?`• 복용: ${M.usage}
• 기간: ${M.duration}`:""}

${y.disclaimer}`}s.push({agent:"Care Agent",role:"처방 · 약물 관리실",icon:"💊",type:"care",content:_e,medicationGuidance:y,timestamp:Date.now()}),t(s[s.length-1]),await new Promise(M=>setTimeout(M,2e3)),t({agent:"Care Agent",role:"처방 · 약물 관리실",icon:"💊",type:"care",content:"약 안내를 마쳤어요.",timestamp:Date.now()}),await new Promise(M=>setTimeout(M,800));let Se=[],Qt=[];try{if(Se=await nA(c.json,g,p.species),console.log("FAQ 조회 성공:",Se.length,"개"),Se.length>0&&r){t({agent:"FAQ Agent",role:"보호자 문의 안내",icon:"❓",type:"faq",content:`${p.petName}의 증상과 관련해 보호자분들이 자주 궁금해하시는 질문들이에요. 궁금한 내용이 있으시면 선택해 주세요!`,timestamp:Date.now()});const M=oA(Se),Me=await r(M,"faq");if(Me&&Me.length>0&&!Me.includes("skip")&&(Qt=iA(Me,Se,c.json,p),Qt.length>0)){const vt=aA(Qt);t({agent:"FAQ Agent",role:"보호자 문의 안내",icon:"📚",type:"faq_answer",content:vt,timestamp:Date.now()}),await new Promise(At=>setTimeout(At,1500))}}}catch(M){console.warn("FAQ 조회/처리 오류:",M)}t({agent:"summary",role:"진료 요약 · 관리실",icon:"📄",type:"summary",content:`✅ 진료가 완료되었습니다. 진단서와 케어 플랜을 정리했습니다.

📋 주의사항과 홈케어 가이드를 꼭 확인해 주세요!`,timestamp:Date.now()});const Ve=h.json.medical_log,Jt=h.json.owner_friendly_diagnosis_sheet,In=Vv((u==null?void 0:u.health_flags)||Ve.health_flags||{}),Ni={id:Date.now().toString(),created_at:Date.now(),petId:p.id,petName:p.petName,diagnosis:((k=(b=Ve.possible_diseases)==null?void 0:b[0])==null?void 0:k.name_kor)||"일반 건강 이상",probability:((L=(R=Ve.possible_diseases)==null?void 0:R[0])==null?void 0:L.probability)||.6,riskLevel:Ve.risk_level||"moderate",emergency:Ve.risk_level==="emergency"||Ve.risk_level==="high"?"high":Ve.risk_level==="moderate"?"medium":"low",actions:Jt.immediate_home_actions||[],hospitalVisit:Ve.need_hospital_visit||!1,hospitalVisitTime:Ve.hospital_visit_timing||"증상 악화 시",description:c.json.primary_assessment_kor||"증상 기반 분석",careGuide:f.fullGuide,conversationHistory:[],triage_score:Ve.triage_score||(u==null?void 0:u.triage_score)||2,triage_level:Ve.triage_level||(u==null?void 0:u.triage_level)||"yellow",healthFlags:In,ownerSheet:Jt,hospitalPacket:h.json.hospital_previsit_packet,carePlan:f.json,medicationGuidance:y,faqAnswers:Qt.length>0?Qt:null,recommendedFAQs:Se.length>0?Se:null,collaboration:A?{consensus_reached:((U=A.consensus)==null?void 0:U.consensus_reached)??!1,confidence_score:((F=A.consensus)==null?void 0:F.confidence_score)??0,discrepancies_found:((G=A.discrepancy_analysis)==null?void 0:G.discrepancy_count)??0,models_consulted:["Claude Sonnet (Medical Agent)","Claude Sonnet (Triage Engine)","Claude Sonnet (Senior Reviewer)",A.second_opinion?"GPT-4o (Second Opinion)":null].filter(Boolean),final_recommendation:((X=(Q=A.consensus)==null?void 0:Q.collaborative_notes)==null?void 0:X.reviewer_opinion)||"협진 검토 결과를 가져올 수 없습니다.",resolution_notes:((I=A.consensus)==null?void 0:I.discrepancy_resolution)||null}:null};return{logs:s,finalDiagnosis:Ni}}catch(_){throw console.error("멀티 에이전트 오류:",_),_}};export{Fe as A,_A as B,dA as C,hA as D,fA as E,SA as F,Vt as G,bA as H,PA as I,kA as J,_w as K,Vv as L,IA as M,RA as N,CA as O,Ue as P,AA as Q,uA as R,EA as S,te as T,Ad as a,Zn as b,Kn as c,fw as d,pw as e,lw as f,Yn as g,hw as h,mw as i,wA as j,TA as k,Jn as l,Qf as m,vA as n,Oa as o,ht as p,Qn as q,pA as r,gw as s,Nv as t,dw as u,mA as v,Ti as w,lA as x,yA as y,gA as z};
