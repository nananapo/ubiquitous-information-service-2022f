(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"1fd5":function(e,t,n){"use strict";(function(e,i){n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return G})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return B})),n.d(t,"k",(function(){return P})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return V})),n.d(t,"n",(function(){return Q})),n.d(t,"o",(function(){return x})),n.d(t,"p",(function(){return O})),n.d(t,"q",(function(){return Z})),n.d(t,"r",(function(){return U})),n.d(t,"s",(function(){return H})),n.d(t,"t",(function(){return b})),n.d(t,"u",(function(){return v})),n.d(t,"v",(function(){return y})),n.d(t,"w",(function(){return g})),n.d(t,"x",(function(){return q})),n.d(t,"y",(function(){return M})),n.d(t,"z",(function(){return z})),n.d(t,"A",(function(){return K})),n.d(t,"B",(function(){return W})),n.d(t,"C",(function(){return X})),n.d(t,"D",(function(){return J})),n.d(t,"E",(function(){return F})),n.d(t,"F",(function(){return C}));
/**
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
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},c=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const l=r<e.length,u=l?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==u){const e=c<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=a(e);return l.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&_(n)&&(e[n]=p(e[n],t[n]));return e}function _(e){return"__proto__"!==e}
/**
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
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function b(){try{return"object"===typeof indexedDB}catch(e){return!1}}function C(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function w(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof e)return e;throw new Error("Unable to locate global object.")}
/**
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
 */const E=()=>w().__FIREBASE_DEFAULTS__,I=()=>{if("undefined"===typeof i)return;const e=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},k=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},T=()=>{try{return E()||I()||k()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},S=e=>{var t,n;return null===(n=null===(t=T())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},O=e=>{const t=S(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},x=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config};
/**
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
 */
class N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */function P(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
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
 */const D="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?j(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new R(i,o,n);return a}}function j(e,t){return e.replace(L,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const L=/\{\$([^}]+)}/g;
/**
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
 */function M(e){return JSON.parse(e)}function F(e){return JSON.stringify(e)}
/**
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
 */const $=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=M(d(s[0])||""),n=M(d(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},q=function(e){const t=$(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},U=function(e){const t=$(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function H(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function V(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Y(n)&&Y(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Y(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function K(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
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
 */
class G{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function Q(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const J=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,s(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;r=65536+(t<<10)+n}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function Z(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"),n("4362"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n("1fd5");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},2877:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},"2b0e":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Qi}));
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({}),r=Array.isArray;function s(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function l(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function _(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function m(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function g(e){var t=parseFloat(e);return isNaN(t)?e:t}function y(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}y("slot,component",!0);var b=y("key,ref,slot,slot-scope,is");function C(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var i=e.indexOf(t);if(i>-1)return e.splice(i,1)}}var w=Object.prototype.hasOwnProperty;function E(e,t){return w.call(e,t)}function I(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var k=/-(\w)/g,T=I((function(e){return e.replace(k,(function(e,t){return t?t.toUpperCase():""}))})),S=I((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),O=/\B([A-Z])/g,x=I((function(e){return e.replace(O,"-$1").toLowerCase()}));function N(e,t){function n(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function P(e,t){return e.bind(t)}var D=Function.prototype.bind?P:N;function R(e,t){t=t||0;var n=e.length-t,i=new Array(n);while(n--)i[n]=e[n+t];return i}function A(e,t){for(var n in t)e[n]=t[n];return e}function j(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function L(e,t,n){}var M=function(e,t,n){return!1},F=function(e){return e};function $(e,t){if(e===t)return!0;var n=h(e),i=h(t);if(!n||!i)return!n&&!i&&String(e)===String(t);try{var r=Array.isArray(e),s=Array.isArray(t);if(r&&s)return e.length===t.length&&e.every((function(e,n){return $(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return $(e[n],t[n])}))}catch(c){return!1}}function q(e,t){for(var n=0;n<e.length;n++)if($(e[n],t))return n;return-1}function U(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function B(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var W="data-server-rendered",H=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:L,parsePlatformTagName:F,mustUseProp:M,async:!0,_lifecycleHooks:z},Y=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function G(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var Q=new RegExp("[^".concat(Y.source,".$_\\d]"));function J(e){if(!Q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var X="__proto__"in{},Z="undefined"!==typeof window,ee=Z&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,ie=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var re=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var se,oe=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(Z)try{var le={};Object.defineProperty(le,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,le)}catch(Jo){}var ue=function(){return void 0===se&&(se=!Z&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),se},he=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var _e=null;function me(e){void 0===e&&(e=null),e||_e&&_e._scope.off(),_e=e,e&&e._scope.on()}var ve=function(){function e(e,t,n,i,r,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),ge=function(e){void 0===e&&(e="");var t=new ve;return t.text=e,t.isComment=!0,t};function ye(e){return new ve(void 0,void 0,void 0,String(e))}function be(e){var t=new ve(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ce=0,we=[],Ee=function(){for(var e=0;e<we.length;e++){var t=we[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}we.length=0},Ie=function(){function e(){this._pending=!1,this.id=Ce++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,we.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,i=t.length;n<i;n++){var r=t[n];0,r.update()}},e}();Ie.target=null;var ke=[];function Te(e){ke.push(e),Ie.target=e}function Se(){ke.pop(),Ie.target=ke[ke.length-1]}var Oe=Array.prototype,xe=Object.create(Oe),Ne=["push","pop","shift","unshift","splice","sort","reverse"];Ne.forEach((function(e){var t=Oe[e];G(xe,e,(function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Pe=Object.getOwnPropertyNames(xe),De={},Re=!0;function Ae(e){Re=e}var je={notify:L,depend:L,addSub:L,removeSub:L},Le=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?je:new Ie,this.vmCount=0,G(e,"__ob__",this),r(e)){if(!n)if(X)e.__proto__=xe;else for(var i=0,s=Pe.length;i<s;i++){var o=Pe[i];G(e,o,xe[o])}t||this.observeArray(e)}else{var a=Object.keys(e);for(i=0;i<a.length;i++){o=a[i];Fe(e,o,De,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Me(e[t],!1,this.mock)},e}();function Me(e,t,n){return e&&E(e,"__ob__")&&e.__ob__ instanceof Le?e.__ob__:!Re||!n&&ue()||!r(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||ze(e)||e instanceof ve?void 0:new Le(e,t,n)}function Fe(e,t,n,i,s,o){var a=new Ie,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var l=c&&c.get,u=c&&c.set;l&&!u||n!==De&&2!==arguments.length||(n=e[t]);var h=!s&&Me(n,!1,o);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=l?l.call(e):n;return Ie.target&&(a.depend(),h&&(h.dep.depend(),r(t)&&Ue(t))),ze(t)&&!s?t.value:t},set:function(t){var i=l?l.call(e):n;if(B(i,t)){if(u)u.call(e,t);else{if(l)return;if(!s&&ze(i)&&!ze(t))return void(i.value=t);n=t}h=!s&&Me(t,!1,o),a.notify()}}}),a}}function $e(e,t,n){if(!He(e)){var i=e.__ob__;return r(e)&&_(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),i&&!i.shallow&&i.mock&&Me(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||i&&i.vmCount?n:i?(Fe(i.value,t,n,void 0,i.shallow,i.mock),i.dep.notify(),n):(e[t]=n,n)}}function qe(e,t){if(r(e)&&_(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||He(e)||E(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ue(e){for(var t=void 0,n=0,i=e.length;n<i;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),r(t)&&Ue(t)}function Be(e){return We(e,!0),G(e,"__v_isShallow",!0),e}function We(e,t){if(!He(e)){Me(e,t,ue());0}}function He(e){return!(!e||!e.__v_isReadonly)}function ze(e){return!(!e||!0!==e.__v_isRef)}function Ve(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(ze(e))return e.value;var i=e&&e.__ob__;return i&&i.dep.depend(),e},set:function(e){var i=t[n];ze(i)&&!ze(e)?i.value=e:t[n]=e}})}var Ye="watcher";"".concat(Ye," callback"),"".concat(Ye," getter"),"".concat(Ye," cleanup");var Ke;var Ge=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Ke;try{return Ke=this,e()}finally{Ke=t}}else 0},e.prototype.on=function(){Ke=this},e.prototype.off=function(){Ke=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Qe(e,t){void 0===t&&(t=Ke),t&&t.active&&t.effects.push(e)}function Je(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Xe=I((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var i="!"===e.charAt(0);return e=i?e.slice(1):e,{name:e,once:n,capture:i,passive:t}}));function Ze(e,t){function n(){var e=n.fns;if(!r(e))return Gt(e,null,arguments,t,"v-on handler");for(var i=e.slice(),s=0;s<i.length;s++)Gt(i[s],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,i,r,o){var c,l,u,h;for(c in e)l=e[c],u=t[c],h=Xe(c),s(l)||(s(u)?(s(l.fns)&&(l=e[c]=Ze(l,o)),a(h.once)&&(l=e[c]=r(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,e[c]=u));for(c in t)s(e[c])&&(h=Xe(c),i(h.name,t[c],h.capture))}function tt(e,t,n){var i;e instanceof ve&&(e=e.data.hook||(e.data.hook={}));var r=e[t];function c(){n.apply(this,arguments),C(i.fns,c)}s(r)?i=Ze([c]):o(r.fns)&&a(r.merged)?(i=r,i.fns.push(c)):i=Ze([r,c]),i.merged=!0,e[t]=i}function nt(e,t,n){var i=t.options.props;if(!s(i)){var r={},a=e.attrs,c=e.props;if(o(a)||o(c))for(var l in i){var u=x(l);it(r,c,l,u,!0)||it(r,a,l,u,!1)}return r}}function it(e,t,n,i,r){if(o(t)){if(E(t,n))return e[n]=t[n],r||delete t[n],!0;if(E(t,i))return e[n]=t[i],r||delete t[i],!0}return!1}function rt(e){for(var t=0;t<e.length;t++)if(r(e[t]))return Array.prototype.concat.apply([],e);return e}function st(e){return l(e)?[ye(e)]:r(e)?at(e):void 0}function ot(e){return o(e)&&o(e.text)&&c(e.isComment)}function at(e,t){var n,i,c,u,h=[];for(n=0;n<e.length;n++)i=e[n],s(i)||"boolean"===typeof i||(c=h.length-1,u=h[c],r(i)?i.length>0&&(i=at(i,"".concat(t||"","_").concat(n)),ot(i[0])&&ot(u)&&(h[c]=ye(u.text+i[0].text),i.shift()),h.push.apply(h,i)):l(i)?ot(u)?h[c]=ye(u.text+i):""!==i&&h.push(ye(i)):ot(i)&&ot(u)?h[c]=ye(u.text+i.text):(a(e._isVList)&&o(i.tag)&&s(i.key)&&o(t)&&(i.key="__vlist".concat(t,"_").concat(n,"__")),h.push(i)));return h}function ct(e,t){var n,i,s,a,c=null;if(r(e)||"string"===typeof e)for(c=new Array(e.length),n=0,i=e.length;n<i;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var l=e[Symbol.iterator](),u=l.next();while(!u.done)c.push(t(u.value,c.length)),u=l.next()}else for(s=Object.keys(e),c=new Array(s.length),n=0,i=s.length;n<i;n++)a=s[n],c[n]=t(e[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function lt(e,t,n,i){var r,s=this.$scopedSlots[e];s?(n=n||{},i&&(n=A(A({},i),n)),r=s(n)||(u(t)?t():t)):r=this.$slots[e]||(u(t)?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function ut(e){return Ei(this.$options,"filters",e,!0)||F}function ht(e,t){return r(e)?-1===e.indexOf(t):e!==t}function dt(e,t,n,i,r){var s=V.keyCodes[t]||n;return r&&i&&!V.keyCodes[t]?ht(r,i):s?ht(s,e):i?x(i)!==t:void 0===e}function ft(e,t,n,i,s){if(n)if(h(n)){r(n)&&(n=j(n));var o=void 0,a=function(r){if("class"===r||"style"===r||b(r))o=e;else{var a=e.attrs&&e.attrs.type;o=i||V.mustUseProp(t,a,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=T(r),l=x(r);if(!(c in o)&&!(l in o)&&(o[r]=n[r],s)){var u=e.on||(e.on={});u["update:".concat(r)]=function(e){n[r]=e}}};for(var c in n)a(c)}else;return e}function pt(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),mt(i,"__static__".concat(e),!1)),i}function _t(e,t,n){return mt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function mt(e,t,n){if(r(e))for(var i=0;i<e.length;i++)e[i]&&"string"!==typeof e[i]&&vt(e[i],"".concat(t,"_").concat(i),n);else vt(e,t,n)}function vt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function gt(e,t){if(t)if(f(t)){var n=e.on=e.on?A({},e.on):{};for(var i in t){var r=n[i],s=t[i];n[i]=r?[].concat(r,s):s}}else;return e}function yt(e,t,n,i){t=t||{$stable:!n};for(var s=0;s<e.length;s++){var o=e[s];r(o)?yt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return i&&(t.$key=i),t}function bt(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"===typeof i&&i&&(e[t[n]]=t[n+1])}return e}function Ct(e,t){return"string"===typeof e?t+e:e}function wt(e){e._o=_t,e._n=g,e._s=v,e._l=ct,e._t=lt,e._q=$,e._i=q,e._m=pt,e._f=ut,e._k=dt,e._b=ft,e._v=ye,e._e=ge,e._u=yt,e._g=gt,e._d=bt,e._p=Ct}function Et(e,t){if(!e||!e.length)return{};for(var n={},i=0,r=e.length;i<r;i++){var s=e[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in n)n[l].every(It)&&delete n[l];return n}function It(e){return e.isComment&&!e.asyncFactory||" "===e.text}function kt(e){return e.isComment&&e.asyncFactory}function Tt(e,t,n,r){var s,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==i&&c===r.$key&&!o&&!r.$hasNormal)return r;for(var l in s={},t)t[l]&&"$"!==l[0]&&(s[l]=St(e,n,l,t[l]))}else s={};for(var u in n)u in s||(s[u]=Ot(n,u));return t&&Object.isExtensible(t)&&(t._normalized=s),G(s,"$stable",a),G(s,"$key",c),G(s,"$hasNormal",o),s}function St(e,t,n,i){var s=function(){var t=_e;me(e);var n=arguments.length?i.apply(null,arguments):i({});n=n&&"object"===typeof n&&!r(n)?[n]:st(n);var s=n&&n[0];return me(t),n&&(!s||1===n.length&&s.isComment&&!kt(s))?void 0:n};return i.proxy&&Object.defineProperty(t,n,{get:s,enumerable:!0,configurable:!0}),s}function Ot(e,t){return function(){return e[t]}}function xt(e){var t=e.$options,n=t.setup;if(n){var i=e._setupContext=Nt(e);me(e),Te();var r=Gt(n,null,[e._props||Be({}),i],e,"setup");if(Se(),me(),u(r))t.render=r;else if(h(r))if(e._setupState=r,r.__sfc){var s=e._setupProxy={};for(var o in r)"__sfc"!==o&&Ve(s,r,o)}else for(var o in r)K(o)||Ve(e,r,o);else 0}}function Nt(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};G(t,"_v_attr_proxy",!0),Pt(t,e.$attrs,i,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Pt(t,e.$listeners,i,e,"$listeners")}return e._listenersProxy},get slots(){return Rt(e)},emit:D(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return Ve(e,t,n)}))}}}function Pt(e,t,n,i,r){var s=!1;for(var o in t)o in e?t[o]!==n[o]&&(s=!0):(s=!0,Dt(e,o,i,r));for(var o in e)o in t||(s=!0,delete e[o]);return s}function Dt(e,t,n,i){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[i][t]}})}function Rt(e){return e._slotsProxy||At(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function At(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function jt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=Et(t._renderChildren,r),e.$scopedSlots=n?Tt(e.$parent,n.data.scopedSlots,e.$slots):i,e._c=function(t,n,i,r){return Ht(e,t,n,i,r,!1)},e.$createElement=function(t,n,i,r){return Ht(e,t,n,i,r,!0)};var s=n&&n.data;Fe(e,"$attrs",s&&s.attrs||i,null,!0),Fe(e,"$listeners",t._parentListeners||i,null,!0)}var Lt=null;function Mt(e){wt(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,s=n._parentVnode;s&&t._isMounted&&(t.$scopedSlots=Tt(t.$parent,s.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&At(t._slotsProxy,t.$scopedSlots)),t.$vnode=s;try{me(t),Lt=t,e=i.call(t._renderProxy,t.$createElement)}catch(Jo){Kt(Jo,t,"render"),e=t._vnode}finally{Lt=null,me()}return r(e)&&1===e.length&&(e=e[0]),e instanceof ve||(e=ge()),e.parent=s,e}}function Ft(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function $t(e,t,n,i,r){var s=ge();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:i,tag:r},s}function qt(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=Lt;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var i=e.owners=[n],r=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return C(i,n)}));var u=function(e){for(var t=0,n=i.length;t<n;t++)i[t].$forceUpdate();e&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=U((function(n){e.resolved=Ft(n,t),r?i.length=0:u(!0)})),f=U((function(t){o(e.errorComp)&&(e.error=!0,u(!0))})),p=e(d,f);return h(p)&&(m(p)?s(e.resolved)&&p.then(d,f):m(p.component)&&(p.component.then(d,f),o(p.error)&&(e.errorComp=Ft(p.error,t)),o(p.loading)&&(e.loadingComp=Ft(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,s(e.resolved)&&s(e.error)&&(e.loading=!0,u(!1))}),p.delay||200)),o(p.timeout)&&(l=setTimeout((function(){l=null,s(e.resolved)&&f(null)}),p.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function Ut(e){if(r(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||kt(n)))return n}}var Bt=1,Wt=2;function Ht(e,t,n,i,s,o){return(r(n)||l(n))&&(s=i,i=n,n=void 0),a(o)&&(s=Wt),zt(e,t,n,i,s)}function zt(e,t,n,i,s){if(o(n)&&o(n.__ob__))return ge();if(o(n)&&o(n.is)&&(t=n.is),!t)return ge();var a,c;if(r(i)&&u(i[0])&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===Wt?i=st(i):s===Bt&&(i=rt(i)),"string"===typeof t){var l=void 0;c=e.$vnode&&e.$vnode.ns||V.getTagNamespace(t),a=V.isReservedTag(t)?new ve(V.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!o(l=Ei(e.$options,"components",t))?new ve(t,n,i,void 0,void 0,e):oi(l,n,e,i,t)}else a=oi(t,n,e,i);return r(a)?a:o(a)?(o(c)&&Vt(a,c),o(n)&&Yt(n),a):ge()}function Vt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var i=0,r=e.children.length;i<r;i++){var c=e.children[i];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Vt(c,t,n)}}function Yt(e){h(e.style)&&fn(e.style),h(e.class)&&fn(e.class)}function Kt(e,t,n){Te();try{if(t){var i=t;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,e,t,n);if(o)return}catch(Jo){Qt(Jo,i,"errorCaptured hook")}}}Qt(e,t,n)}finally{Se()}}function Gt(e,t,n,i,r){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&m(s)&&!s._handled&&(s.catch((function(e){return Kt(e,i,r+" (Promise/async)")})),s._handled=!0)}catch(Jo){Kt(Jo,i,r)}return s}function Qt(e,t,n){if(V.errorHandler)try{return V.errorHandler.call(null,e,t,n)}catch(Jo){Jo!==e&&Jt(Jo,null,"config.errorHandler")}Jt(e,t,n)}function Jt(e,t,n){if(!Z||"undefined"===typeof console)throw e;console.error(e)}var Xt,Zt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var rn=Promise.resolve();Xt=function(){rn.then(nn),re&&setTimeout(L)},Zt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Xt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var sn=1,on=new MutationObserver(nn),an=document.createTextNode(String(sn));on.observe(an,{characterData:!0}),Xt=function(){sn=(sn+1)%2,an.data=String(sn)},Zt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Jo){Kt(Jo,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Xt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function ln(e){return function(t,n){if(void 0===n&&(n=_e),n)return un(n,e,t)}}function un(e,t,n){var i=e.$options;i[t]=_i(i[t],n)}ln("beforeMount"),ln("mounted"),ln("beforeUpdate"),ln("updated"),ln("beforeDestroy"),ln("destroyed"),ln("activated"),ln("deactivated"),ln("serverPrefetch"),ln("renderTracked"),ln("renderTriggered"),ln("errorCaptured");var hn="2.7.14";var dn=new fe;function fn(e){return pn(e,dn),dn.clear(),e}function pn(e,t){var n,i,s=r(e);if(!(!s&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ve)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(s){n=e.length;while(n--)pn(e[n],t)}else if(ze(e))pn(e.value,t);else{i=Object.keys(e),n=i.length;while(n--)pn(e[i[n]],t)}}}var _n,mn=0,vn=function(){function e(e,t,n,i,r){Qe(this,Ke&&!Ke._vm?Ke:e?e._scope:void 0),(this.vm=e)&&r&&(e._watcher=this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",u(t)?this.getter=t:(this.getter=J(t),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Te(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Jo){if(!this.user)throw Jo;Kt(Jo,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&fn(e),Se(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Gt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&C(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function gn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&wn(e,t)}function yn(e,t){_n.$on(e,t)}function bn(e,t){_n.$off(e,t)}function Cn(e,t){var n=_n;return function i(){var r=t.apply(null,arguments);null!==r&&n.$off(e,i)}}function wn(e,t,n){_n=e,et(t,n||{},yn,bn,Cn,e),_n=void 0}function En(e){var t=/^hook:/;e.prototype.$on=function(e,n){var i=this;if(r(e))for(var s=0,o=e.length;s<o;s++)i.$on(e[s],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(r(e)){for(var i=0,s=e.length;i<s;i++)n.$off(e[i],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(o=a[c],o===t||o.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?R(n):n;for(var i=R(arguments,1),r='event handler for "'.concat(e,'"'),s=0,o=n.length;s<o;s++)Gt(n[s],t,i,t,r)}return t}}var In=null;function kn(e){var t=In;return In=e,function(){In=t}}function Tn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Sn(e){e.prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,s=kn(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Rn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||C(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Rn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function On(e,t,n){var i;e.$el=t,e.$options.render||(e.$options.render=ge),Rn(e,"beforeMount"),i=function(){e._update(e._render(),n)};var r={before:function(){e._isMounted&&!e._isDestroyed&&Rn(e,"beforeUpdate")}};new vn(e,i,L,r,!0),n=!1;var s=e._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==e.$vnode&&(e._isMounted=!0,Rn(e,"mounted")),e}function xn(e,t,n,r,s){var o=r.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),l=!!(s||e.$options._renderChildren||c),u=e.$vnode;e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=s;var h=r.data.attrs||i;e._attrsProxy&&Pt(e._attrsProxy,h,u.data&&u.data.attrs||i,e,"$attrs")&&(l=!0),e.$attrs=h,n=n||i;var d=e.$options._parentListeners;if(e._listenersProxy&&Pt(e._listenersProxy,n,d||i,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,wn(e,n,d),t&&e.$options.props){Ae(!1);for(var f=e._props,p=e.$options._propKeys||[],_=0;_<p.length;_++){var m=p[_],v=e.$options.props;f[m]=Ii(m,v,t,e)}Ae(!0),e.$options.propsData=t}l&&(e.$slots=Et(s,r.context),e.$forceUpdate())}function Nn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pn(e,t){if(t){if(e._directInactive=!1,Nn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Pn(e.$children[n]);Rn(e,"activated")}}function Dn(e,t){if((!t||(e._directInactive=!0,!Nn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Dn(e.$children[n]);Rn(e,"deactivated")}}function Rn(e,t,n,i){void 0===i&&(i=!0),Te();var r=_e;i&&me(e);var s=e.$options[t],o="".concat(t," hook");if(s)for(var a=0,c=s.length;a<c;a++)Gt(s[a],e,n||null,e,o);e._hasHookEvent&&e.$emit("hook:"+t),i&&me(r),Se()}var An=[],jn=[],Ln={},Mn=!1,Fn=!1,$n=0;function qn(){$n=An.length=jn.length=0,Ln={},Mn=Fn=!1}var Un=0,Bn=Date.now;if(Z&&!te){var Wn=window.performance;Wn&&"function"===typeof Wn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Wn.now()})}var Hn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function zn(){var e,t;for(Un=Bn(),Fn=!0,An.sort(Hn),$n=0;$n<An.length;$n++)e=An[$n],e.before&&e.before(),t=e.id,Ln[t]=null,e.run();var n=jn.slice(),i=An.slice();qn(),Kn(n),Vn(i),Ee(),he&&V.devtools&&he.emit("flush")}function Vn(e){var t=e.length;while(t--){var n=e[t],i=n.vm;i&&i._watcher===n&&i._isMounted&&!i._isDestroyed&&Rn(i,"updated")}}function Yn(e){e._inactive=!1,jn.push(e)}function Kn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Pn(e[t],!0)}function Gn(e){var t=e.id;if(null==Ln[t]&&(e!==Ie.target||!e.noRecurse)){if(Ln[t]=!0,Fn){var n=An.length-1;while(n>$n&&An[n].id>e.id)n--;An.splice(n+1,0,e)}else An.push(e);Mn||(Mn=!0,cn(zn))}}function Qn(e){var t=e.$options.provide;if(t){var n=u(t)?t.call(e):t;if(!h(n))return;for(var i=Je(e),r=pe?Reflect.ownKeys(n):Object.keys(n),s=0;s<r.length;s++){var o=r[s];Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(n,o))}}}function Jn(e){var t=Xn(e.$options.inject,e);t&&(Ae(!1),Object.keys(t).forEach((function(n){Fe(e,n,t[n])})),Ae(!0))}function Xn(e,t){if(e){for(var n=Object.create(null),i=pe?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=e[s].from;if(o in t._provided)n[s]=t._provided[o];else if("default"in e[s]){var a=e[s].default;n[s]=u(a)?a.call(t):a}else 0}}return n}}function Zn(e,t,n,s,o){var c,l=this,u=o.options;E(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(u._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=s,this.listeners=e.on||i,this.injections=Xn(u.inject,s),this.slots=function(){return l.$slots||Tt(s,e.scopedSlots,l.$slots=Et(n,s)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Tt(s,e.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Tt(s,e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,i){var o=Ht(c,e,t,n,i,d);return o&&!r(o)&&(o.fnScopeId=u._scopeId,o.fnContext=s),o}:this._c=function(e,t,n,i){return Ht(c,e,t,n,i,d)}}function ei(e,t,n,s,a){var c=e.options,l={},u=c.props;if(o(u))for(var h in u)l[h]=Ii(h,u,t||i);else o(n.attrs)&&ni(l,n.attrs),o(n.props)&&ni(l,n.props);var d=new Zn(n,l,a,s,e),f=c.render.call(null,d._c,d);if(f instanceof ve)return ti(f,n,d.parent,c,d);if(r(f)){for(var p=st(f)||[],_=new Array(p.length),m=0;m<p.length;m++)_[m]=ti(p[m],n,d.parent,c,d);return _}}function ti(e,t,n,i,r){var s=be(e);return s.fnContext=n,s.fnOptions=i,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function ni(e,t){for(var n in t)e[T(n)]=t[n]}function ii(e){return e.name||e.__name||e._componentTag}wt(Zn.prototype);var ri={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ri.prepatch(n,n)}else{var i=e.componentInstance=ai(e,In);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,i=t.componentInstance=e.componentInstance;xn(i,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Yn(n):Pn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Dn(t,!0):t.$destroy())}},si=Object.keys(ri);function oi(e,t,n,i,r){if(!s(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var l;if(s(e.cid)&&(l=e,e=qt(l,c),void 0===e))return $t(l,t,n,i,r);t=t||{},Ki(e),o(t.model)&&ui(e.options,t);var u=nt(t,e,r);if(a(e.options.functional))return ei(e,u,t,n,i);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}ci(t);var p=ii(e.options)||r,_=new ve("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:u,listeners:d,tag:r,children:i},l);return _}}}function ai(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return o(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(n)}function ci(e){for(var t=e.hook||(e.hook={}),n=0;n<si.length;n++){var i=si[n],r=t[i],s=ri[i];r===s||r&&r._merged||(t[i]=r?li(s,r):s)}}function li(e,t){var n=function(n,i){e(n,i),t(n,i)};return n._merged=!0,n}function ui(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),a=s[i],c=t.model.callback;o(a)?(r(a)?-1===a.indexOf(c):a!==c)&&(s[i]=[c].concat(a)):s[i]=c}var hi=L,di=V.optionMergeStrategies;function fi(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var i,r,s,o=pe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)i=o[a],"__ob__"!==i&&(r=e[i],s=t[i],n&&E(e,i)?r!==s&&f(r)&&f(s)&&fi(r,s):$e(e,i,s));return e}function pi(e,t,n){return n?function(){var i=u(t)?t.call(n,n):t,r=u(e)?e.call(n,n):e;return i?fi(i,r):r}:t?e?function(){return fi(u(t)?t.call(this,this):t,u(e)?e.call(this,this):e)}:t:e}function _i(e,t){var n=t?e?e.concat(t):r(t)?t:[t]:e;return n?mi(n):n}function mi(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function vi(e,t,n,i){var r=Object.create(e||null);return t?A(r,t):r}di.data=function(e,t,n){return n?pi(e,t,n):t&&"function"!==typeof t?e:pi(e,t)},z.forEach((function(e){di[e]=_i})),H.forEach((function(e){di[e+"s"]=vi})),di.watch=function(e,t,n,i){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var s={};for(var o in A(s,e),t){var a=s[o],c=t[o];a&&!r(a)&&(a=[a]),s[o]=a?a.concat(c):r(c)?c:[c]}return s},di.props=di.methods=di.inject=di.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return A(r,e),t&&A(r,t),r},di.provide=function(e,t){return e?function(){var n=Object.create(null);return fi(n,u(e)?e.call(this):e),t&&fi(n,u(t)?t.call(this):t,!1),n}:t};var gi=function(e,t){return void 0===t?e:t};function yi(e,t){var n=e.props;if(n){var i,s,o,a={};if(r(n)){i=n.length;while(i--)s=n[i],"string"===typeof s&&(o=T(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=T(c),a[o]=f(s)?s:{type:s};else 0;e.props=a}}function bi(e,t){var n=e.inject;if(n){var i=e.inject={};if(r(n))for(var s=0;s<n.length;s++)i[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];i[o]=f(a)?A({from:o},a):{from:a}}else 0}}function Ci(e){var t=e.directives;if(t)for(var n in t){var i=t[n];u(i)&&(t[n]={bind:i,update:i})}}function wi(e,t,n){if(u(t)&&(t=t.options),yi(t,n),bi(t,n),Ci(t),!t._base&&(t.extends&&(e=wi(e,t.extends,n)),t.mixins))for(var i=0,r=t.mixins.length;i<r;i++)e=wi(e,t.mixins[i],n);var s,o={};for(s in e)a(s);for(s in t)E(e,s)||a(s);function a(i){var r=di[i]||gi;o[i]=r(e[i],t[i],n,i)}return o}function Ei(e,t,n,i){if("string"===typeof n){var r=e[t];if(E(r,n))return r[n];var s=T(n);if(E(r,s))return r[s];var o=S(s);if(E(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Ii(e,t,n,i){var r=t[e],s=!E(n,e),o=n[e],a=xi(Boolean,r.type);if(a>-1)if(s&&!E(r,"default"))o=!1;else if(""===o||o===x(e)){var c=xi(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=ki(i,r,e);var l=Re;Ae(!0),Me(o),Ae(l)}return o}function ki(e,t,n){if(E(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:u(i)&&"Function"!==Si(t.type)?i.call(e):i}}var Ti=/^\s*function (\w+)/;function Si(e){var t=e&&e.toString().match(Ti);return t?t[1]:""}function Oi(e,t){return Si(e)===Si(t)}function xi(e,t){if(!r(t))return Oi(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(Oi(t[n],e))return n;return-1}var Ni={enumerable:!0,configurable:!0,get:L,set:L};function Pi(e,t,n){Ni.get=function(){return this[t][n]},Ni.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Ni)}function Di(e){var t=e.$options;if(t.props&&Ri(e,t.props),xt(e),t.methods&&Ui(e,t.methods),t.data)Ai(e);else{var n=Me(e._data={});n&&n.vmCount++}t.computed&&Mi(e,t.computed),t.watch&&t.watch!==ae&&Bi(e,t.watch)}function Ri(e,t){var n=e.$options.propsData||{},i=e._props=Be({}),r=e.$options._propKeys=[],s=!e.$parent;s||Ae(!1);var o=function(s){r.push(s);var o=Ii(s,t,n,e);Fe(i,s,o),s in e||Pi(e,"_props",s)};for(var a in t)o(a);Ae(!0)}function Ai(e){var t=e.$options.data;t=e._data=u(t)?ji(t,e):t||{},f(t)||(t={});var n=Object.keys(t),i=e.$options.props,r=(e.$options.methods,n.length);while(r--){var s=n[r];0,i&&E(i,s)||K(s)||Pi(e,"_data",s)}var o=Me(t);o&&o.vmCount++}function ji(e,t){Te();try{return e.call(t,t)}catch(Jo){return Kt(Jo,t,"data()"),{}}finally{Se()}}var Li={lazy:!0};function Mi(e,t){var n=e._computedWatchers=Object.create(null),i=ue();for(var r in t){var s=t[r],o=u(s)?s:s.get;0,i||(n[r]=new vn(e,o||L,L,Li)),r in e||Fi(e,r,s)}}function Fi(e,t,n){var i=!ue();u(n)?(Ni.get=i?$i(t):qi(n),Ni.set=L):(Ni.get=n.get?i&&!1!==n.cache?$i(t):qi(n.get):L,Ni.set=n.set||L),Object.defineProperty(e,t,Ni)}function $i(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Ie.target&&t.depend(),t.value}}function qi(e){return function(){return e.call(this,this)}}function Ui(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?L:D(t[n],e)}function Bi(e,t){for(var n in t){var i=t[n];if(r(i))for(var s=0;s<i.length;s++)Wi(e,n,i[s]);else Wi(e,n,i)}}function Wi(e,t,n,i){return f(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,i)}function Hi(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=$e,e.prototype.$delete=qe,e.prototype.$watch=function(e,t,n){var i=this;if(f(t))return Wi(i,e,t,n);n=n||{},n.user=!0;var r=new vn(i,e,t,n);if(n.immediate){var s='callback for immediate watcher "'.concat(r.expression,'"');Te(),Gt(t,i,[r.value],i,s),Se()}return function(){r.teardown()}}}var zi=0;function Vi(e){e.prototype._init=function(e){var t=this;t._uid=zi++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ge(!0),t._scope._vm=!0,e&&e._isComponent?Yi(t,e):t.$options=wi(Ki(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Tn(t),gn(t),jt(t),Rn(t,"beforeCreate",void 0,!1),Jn(t),Di(t),Qn(t),Rn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Yi(e,t){var n=e.$options=Object.create(e.constructor.options),i=t._parentVnode;n.parent=t.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ki(e){var t=e.options;if(e.super){var n=Ki(e.super),i=e.superOptions;if(n!==i){e.superOptions=n;var r=Gi(e);r&&A(e.extendOptions,r),t=e.options=wi(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Gi(e){var t,n=e.options,i=e.sealedOptions;for(var r in n)n[r]!==i[r]&&(t||(t={}),t[r]=n[r]);return t}function Qi(e){this._init(e)}function Ji(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=R(arguments,1);return n.unshift(this),u(e.install)?e.install.apply(e,n):u(e)&&e.apply(null,n),t.push(e),this}}function Xi(e){e.mixin=function(e){return this.options=wi(this.options,e),this}}function Zi(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,i=n.cid,r=e._Ctor||(e._Ctor={});if(r[i])return r[i];var s=ii(e)||ii(n.options);var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=wi(n.options,e),o["super"]=n,o.options.props&&er(o),o.options.computed&&tr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,H.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=A({},o.options),r[i]=o,o}}function er(e){var t=e.options.props;for(var n in t)Pi(e.prototype,"_props",n)}function tr(e){var t=e.options.computed;for(var n in t)Fi(e.prototype,n,t[n])}function nr(e){H.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&u(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ir(e){return e&&(ii(e.Ctor.options)||e.tag)}function rr(e,t){return r(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function sr(e,t){var n=e.cache,i=e.keys,r=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&or(n,s,i,r)}}}function or(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,C(n,t)}Vi(Qi),Hi(Qi),En(Qi),Sn(Qi),Mt(Qi);var ar=[String,RegExp,Array],cr={name:"keep-alive",abstract:!0,props:{include:ar,exclude:ar,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,i=e.vnodeToCache,r=e.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;t[r]={name:ir(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&or(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)or(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){sr(e,(function(e){return rr(t,e)}))})),this.$watch("exclude",(function(t){sr(e,(function(e){return!rr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Ut(e),n=t&&t.componentOptions;if(n){var i=ir(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!rr(s,i))||o&&i&&rr(o,i))return t;var a=this,c=a.cache,l=a.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[u]?(t.componentInstance=c[u].componentInstance,C(l,u),l.push(u)):(this.vnodeToCache=t,this.keyToCache=u),t.data.keepAlive=!0}return t||e&&e[0]}},lr={KeepAlive:cr};function ur(e){var t={get:function(){return V}};Object.defineProperty(e,"config",t),e.util={warn:hi,extend:A,mergeOptions:wi,defineReactive:Fe},e.set=$e,e.delete=qe,e.nextTick=cn,e.observable=function(e){return Me(e),e},e.options=Object.create(null),H.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,A(e.options.components,lr),Ji(e),Xi(e),Zi(e),nr(e)}ur(Qi),Object.defineProperty(Qi.prototype,"$isServer",{get:ue}),Object.defineProperty(Qi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Qi,"FunctionalRenderContext",{value:Zn}),Qi.version=hn;var hr=y("style,class"),dr=y("input,textarea,option,select,progress"),fr=function(e,t,n){return"value"===n&&dr(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},pr=y("contenteditable,draggable,spellcheck"),_r=y("events,caret,typing,plaintext-only"),mr=function(e,t){return Cr(t)||"false"===t?"false":"contenteditable"===e&&_r(t)?t:"true"},vr=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),gr="http://www.w3.org/1999/xlink",yr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},br=function(e){return yr(e)?e.slice(6,e.length):""},Cr=function(e){return null==e||!1===e};function wr(e){var t=e.data,n=e,i=e;while(o(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(t=Er(i.data,t));while(o(n=n.parent))n&&n.data&&(t=Er(t,n.data));return Ir(t.staticClass,t.class)}function Er(e,t){return{staticClass:kr(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Ir(e,t){return o(e)||o(t)?kr(e,Tr(t)):""}function kr(e,t){return e?t?e+" "+t:e:t||""}function Tr(e){return Array.isArray(e)?Sr(e):h(e)?Or(e):"string"===typeof e?e:""}function Sr(e){for(var t,n="",i=0,r=e.length;i<r;i++)o(t=Tr(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Or(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var xr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Nr=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Pr=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Dr=function(e){return Nr(e)||Pr(e)};function Rr(e){return Pr(e)?"svg":"math"===e?"math":void 0}var Ar=Object.create(null);function jr(e){if(!Z)return!0;if(Dr(e))return!1;if(e=e.toLowerCase(),null!=Ar[e])return Ar[e];var t=document.createElement(e);return e.indexOf("-")>-1?Ar[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Ar[e]=/HTMLUnknownElement/.test(t.toString())}var Lr=y("text,number,password,search,email,tel,url");function Mr(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Fr(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $r(e,t){return document.createElementNS(xr[e],t)}function qr(e){return document.createTextNode(e)}function Ur(e){return document.createComment(e)}function Br(e,t,n){e.insertBefore(t,n)}function Wr(e,t){e.removeChild(t)}function Hr(e,t){e.appendChild(t)}function zr(e){return e.parentNode}function Vr(e){return e.nextSibling}function Yr(e){return e.tagName}function Kr(e,t){e.textContent=t}function Gr(e,t){e.setAttribute(t,"")}var Qr=Object.freeze({__proto__:null,createElement:Fr,createElementNS:$r,createTextNode:qr,createComment:Ur,insertBefore:Br,removeChild:Wr,appendChild:Hr,parentNode:zr,nextSibling:Vr,tagName:Yr,setTextContent:Kr,setStyleScope:Gr}),Jr={create:function(e,t){Xr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Xr(e,!0),Xr(t))},destroy:function(e){Xr(e,!0)}};function Xr(e,t){var n=e.data.ref;if(o(n)){var i=e.context,s=e.componentInstance||e.elm,a=t?null:s,c=t?void 0:s;if(u(n))Gt(n,i,[a],i,"template ref function");else{var l=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=ze(n),f=i.$refs;if(h||d)if(l){var p=h?f[n]:n.value;t?r(p)&&C(p,s):r(p)?p.includes(s)||p.push(s):h?(f[n]=[s],Zr(i,n,f[n])):n.value=[s]}else if(h){if(t&&f[n]!==s)return;f[n]=c,Zr(i,n,a)}else if(d){if(t&&n.value!==s)return;n.value=a}else 0}}}function Zr(e,t,n){var i=e._setupState;i&&E(i,t)&&(ze(i[t])?i[t].value=n:i[t]=n)}var es=new ve("",{},[]),ts=["create","activate","update","remove","destroy"];function ns(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&is(e,t)||a(e.isAsyncPlaceholder)&&s(t.asyncFactory.error))}function is(e,t){if("input"!==e.tag)return!0;var n,i=o(n=e.data)&&o(n=n.attrs)&&n.type,r=o(n=t.data)&&o(n=n.attrs)&&n.type;return i===r||Lr(i)&&Lr(r)}function rs(e,t,n){var i,r,s={};for(i=t;i<=n;++i)r=e[i].key,o(r)&&(s[r]=i);return s}function ss(e){var t,n,i={},c=e.modules,u=e.nodeOps;for(t=0;t<ts.length;++t)for(i[ts[t]]=[],n=0;n<c.length;++n)o(c[n][ts[t]])&&i[ts[t]].push(c[n][ts[t]]);function h(e){return new ve(u.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=u.parentNode(e);o(t)&&u.removeChild(t,e)}function p(e,t,n,i,r,s,c){if(o(e.elm)&&o(s)&&(e=s[c]=be(e)),e.isRootInsert=!r,!_(e,t,n,i)){var l=e.data,h=e.children,d=e.tag;o(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),E(e),b(e,h,t),o(l)&&w(e,t),g(n,e.elm,i)):a(e.isComment)?(e.elm=u.createComment(e.text),g(n,e.elm,i)):(e.elm=u.createTextNode(e.text),g(n,e.elm,i))}}function _(e,t,n,i){var r=e.data;if(o(r)){var s=o(e.componentInstance)&&r.keepAlive;if(o(r=r.hook)&&o(r=r.init)&&r(e,!1),o(e.componentInstance))return m(e,t),g(n,e.elm,i),a(s)&&v(e,t,n,i),!0}}function m(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,C(e)?(w(e,t),E(e)):(Xr(e),t.push(e))}function v(e,t,n,r){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<i.activate.length;++s)i.activate[s](es,a);t.push(a);break}g(n,e.elm,r)}function g(e,t,n){o(e)&&(o(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function b(e,t,n){if(r(t)){0;for(var i=0;i<t.length;++i)p(t[i],n,e.elm,null,!0,t,i)}else l(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function C(e){while(e.componentInstance)e=e.componentInstance._vnode;return o(e.tag)}function w(e,n){for(var r=0;r<i.create.length;++r)i.create[r](es,e);t=e.data.hook,o(t)&&(o(t.create)&&t.create(es,e),o(t.insert)&&n.push(e))}function E(e){var t;if(o(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)o(t=n.context)&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}o(t=In)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function I(e,t,n,i,r,s){for(;i<=r;++i)p(n[i],s,e,t,!1,n,i)}function k(e){var t,n,r=e.data;if(o(r))for(o(t=r.hook)&&o(t=t.destroy)&&t(e),t=0;t<i.destroy.length;++t)i.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)k(e.children[n])}function T(e,t,n){for(;t<=n;++t){var i=e[t];o(i)&&(o(i.tag)?(S(i),k(i)):f(i.elm))}}function S(e,t){if(o(t)||o(e.data)){var n,r=i.remove.length+1;for(o(t)?t.listeners+=r:t=d(e.elm,r),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&S(n,t),n=0;n<i.remove.length;++n)i.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else f(e.elm)}function O(e,t,n,i,r){var a,c,l,h,d=0,f=0,_=t.length-1,m=t[0],v=t[_],g=n.length-1,y=n[0],b=n[g],C=!r;while(d<=_&&f<=g)s(m)?m=t[++d]:s(v)?v=t[--_]:ns(m,y)?(N(m,y,i,n,f),m=t[++d],y=n[++f]):ns(v,b)?(N(v,b,i,n,g),v=t[--_],b=n[--g]):ns(m,b)?(N(m,b,i,n,g),C&&u.insertBefore(e,m.elm,u.nextSibling(v.elm)),m=t[++d],b=n[--g]):ns(v,y)?(N(v,y,i,n,f),C&&u.insertBefore(e,v.elm,m.elm),v=t[--_],y=n[++f]):(s(a)&&(a=rs(t,d,_)),c=o(y.key)?a[y.key]:x(y,t,d,_),s(c)?p(y,i,e,m.elm,!1,n,f):(l=t[c],ns(l,y)?(N(l,y,i,n,f),t[c]=void 0,C&&u.insertBefore(e,l.elm,m.elm)):p(y,i,e,m.elm,!1,n,f)),y=n[++f]);d>_?(h=s(n[g+1])?null:n[g+1].elm,I(e,h,n,f,g,i)):f>g&&T(t,d,_)}function x(e,t,n,i){for(var r=n;r<i;r++){var s=t[r];if(o(s)&&ns(e,s))return r}}function N(e,t,n,r,c,l){if(e!==t){o(t.elm)&&o(r)&&(t=r[c]=be(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?R(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(e,t);var p=e.children,_=t.children;if(o(f)&&C(t)){for(d=0;d<i.update.length;++d)i.update[d](e,t);o(d=f.hook)&&o(d=d.update)&&d(e,t)}s(t.text)?o(p)&&o(_)?p!==_&&O(h,p,_,n,l):o(_)?(o(e.text)&&u.setTextContent(h,""),I(h,null,_,0,_.length-1,n)):o(p)?T(p,0,p.length-1):o(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(e,t)}}}function P(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var D=y("attrs,class,staticClass,staticStyle,key");function R(e,t,n,i){var r,s=t.tag,c=t.data,l=t.children;if(i=i||c&&c.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(r=c.hook)&&o(r=r.init)&&r(t,!0),o(r=t.componentInstance)))return m(t,n),!0;if(o(s)){if(o(l))if(e.hasChildNodes())if(o(r=c)&&o(r=r.domProps)&&o(r=r.innerHTML)){if(r!==e.innerHTML)return!1}else{for(var u=!0,h=e.firstChild,d=0;d<l.length;d++){if(!h||!R(h,l[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else b(t,l,n);if(o(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,w(t,n);break}!f&&c["class"]&&fn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,r){if(!s(t)){var c=!1,l=[];if(s(e))c=!0,p(t,l);else{var d=o(e.nodeType);if(!d&&ns(e,t))N(e,t,l,null,null,r);else{if(d){if(1===e.nodeType&&e.hasAttribute(W)&&(e.removeAttribute(W),n=!0),a(n)&&R(e,t,l))return P(t,l,!0),e;e=h(e)}var f=e.elm,_=u.parentNode(f);if(p(t,l,f._leaveCb?null:_,u.nextSibling(f)),o(t.parent)){var m=t.parent,v=C(t);while(m){for(var g=0;g<i.destroy.length;++g)i.destroy[g](m);if(m.elm=t.elm,v){for(var y=0;y<i.create.length;++y)i.create[y](es,m);var b=m.data.hook.insert;if(b.merged)for(var w=1;w<b.fns.length;w++)b.fns[w]()}else Xr(m);m=m.parent}}o(_)?T([e],0,0):o(e.tag)&&k(e)}}return P(t,l,c),t.elm}o(e)&&k(e)}}var os={create:as,update:as,destroy:function(e){as(e,es)}};function as(e,t){(e.data.directives||t.data.directives)&&cs(e,t)}function cs(e,t){var n,i,r,s=e===es,o=t===es,a=us(e.data.directives,e.context),c=us(t.data.directives,t.context),l=[],u=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,ds(r,"update",t,e),r.def&&r.def.componentUpdated&&u.push(r)):(ds(r,"bind",t,e),r.def&&r.def.inserted&&l.push(r));if(l.length){var h=function(){for(var n=0;n<l.length;n++)ds(l[n],"inserted",t,e)};s?tt(t,"insert",h):h()}if(u.length&&tt(t,"postpatch",(function(){for(var n=0;n<u.length;n++)ds(u[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||ds(a[n],"unbind",e,e,o)}var ls=Object.create(null);function us(e,t){var n,i,r=Object.create(null);if(!e)return r;for(n=0;n<e.length;n++){if(i=e[n],i.modifiers||(i.modifiers=ls),r[hs(i)]=i,t._setupState&&t._setupState.__sfc){var s=i.def||Ei(t,"_setupState","v-"+i.name);i.def="function"===typeof s?{bind:s,update:s}:s}i.def=i.def||Ei(t.$options,"directives",i.name,!0)}return r}function hs(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function ds(e,t,n,i,r){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,i,r)}catch(Jo){Kt(Jo,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var fs=[Jr,os];function ps(e,t){var n=t.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(e.data.attrs)||!s(t.data.attrs))){var i,r,c,l=t.elm,u=e.data.attrs||{},h=t.data.attrs||{};for(i in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=A({},h)),h)r=h[i],c=u[i],c!==r&&_s(l,i,r,t.data.pre);for(i in(te||ie)&&h.value!==u.value&&_s(l,"value",h.value),u)s(h[i])&&(yr(i)?l.removeAttributeNS(gr,br(i)):pr(i)||l.removeAttribute(i))}}function _s(e,t,n,i){i||e.tagName.indexOf("-")>-1?ms(e,t,n):vr(t)?Cr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):pr(t)?e.setAttribute(t,mr(t,n)):yr(t)?Cr(n)?e.removeAttributeNS(gr,br(t)):e.setAttributeNS(gr,t,n):ms(e,t,n)}function ms(e,t,n){if(Cr(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var i=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,n)}}var vs={create:ps,update:ps};function gs(e,t){var n=t.elm,i=t.data,r=e.data;if(!(s(i.staticClass)&&s(i.class)&&(s(r)||s(r.staticClass)&&s(r.class)))){var a=wr(t),c=n._transitionClasses;o(c)&&(a=kr(a,Tr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var ys,bs={create:gs,update:gs},Cs="__r",ws="__c";function Es(e){if(o(e[Cs])){var t=te?"change":"input";e[t]=[].concat(e[Cs],e[t]||[]),delete e[Cs]}o(e[ws])&&(e.change=[].concat(e[ws],e.change||[]),delete e[ws])}function Is(e,t,n){var i=ys;return function r(){var s=t.apply(null,arguments);null!==s&&Ss(e,r,n,i)}}var ks=Zt&&!(oe&&Number(oe[1])<=53);function Ts(e,t,n,i){if(ks){var r=Un,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}ys.addEventListener(e,t,ce?{capture:n,passive:i}:n)}function Ss(e,t,n,i){(i||ys).removeEventListener(e,t._wrapper||t,n)}function Os(e,t){if(!s(e.data.on)||!s(t.data.on)){var n=t.data.on||{},i=e.data.on||{};ys=t.elm||e.elm,Es(n),et(n,i,Ts,Ss,Is,t.context),ys=void 0}}var xs,Ns={create:Os,update:Os,destroy:function(e){return Os(e,es)}};function Ps(e,t){if(!s(e.data.domProps)||!s(t.data.domProps)){var n,i,r=t.elm,c=e.data.domProps||{},l=t.data.domProps||{};for(n in(o(l.__ob__)||a(l._v_attr_proxy))&&(l=t.data.domProps=A({},l)),c)n in l||(r[n]="");for(n in l){if(i=l[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),i===c[n])continue;1===r.childNodes.length&&r.removeChild(r.childNodes[0])}if("value"===n&&"PROGRESS"!==r.tagName){r._value=i;var u=s(i)?"":String(i);Ds(r,u)&&(r.value=u)}else if("innerHTML"===n&&Pr(r.tagName)&&s(r.innerHTML)){xs=xs||document.createElement("div"),xs.innerHTML="<svg>".concat(i,"</svg>");var h=xs.firstChild;while(r.firstChild)r.removeChild(r.firstChild);while(h.firstChild)r.appendChild(h.firstChild)}else if(i!==c[n])try{r[n]=i}catch(Jo){}}}}function Ds(e,t){return!e.composing&&("OPTION"===e.tagName||Rs(e,t)||As(e,t))}function Rs(e,t){var n=!0;try{n=document.activeElement!==e}catch(Jo){}return n&&e.value!==t}function As(e,t){var n=e.value,i=e._vModifiers;if(o(i)){if(i.number)return g(n)!==g(t);if(i.trim)return n.trim()!==t.trim()}return n!==t}var js={create:Ps,update:Ps},Ls=I((function(e){var t={},n=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function Ms(e){var t=Fs(e.style);return e.staticStyle?A(e.staticStyle,t):t}function Fs(e){return Array.isArray(e)?j(e):"string"===typeof e?Ls(e):e}function $s(e,t){var n,i={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=Ms(r.data))&&A(i,n)}(n=Ms(e.data))&&A(i,n);var s=e;while(s=s.parent)s.data&&(n=Ms(s.data))&&A(i,n);return i}var qs,Us=/^--/,Bs=/\s*!important$/,Ws=function(e,t,n){if(Us.test(t))e.style.setProperty(t,n);else if(Bs.test(n))e.style.setProperty(x(t),n.replace(Bs,""),"important");else{var i=zs(t);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)e.style[i]=n[r];else e.style[i]=n}},Hs=["Webkit","Moz","ms"],zs=I((function(e){if(qs=qs||document.createElement("div").style,e=T(e),"filter"!==e&&e in qs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Hs.length;n++){var i=Hs[n]+t;if(i in qs)return i}}));function Vs(e,t){var n=t.data,i=e.data;if(!(s(n.staticStyle)&&s(n.style)&&s(i.staticStyle)&&s(i.style))){var r,a,c=t.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},h=l||u,d=Fs(t.data.style)||{};t.data.normalizedStyle=o(d.__ob__)?A({},d):d;var f=$s(t,!0);for(a in h)s(f[a])&&Ws(c,a,"");for(a in f)r=f[a],r!==h[a]&&Ws(c,a,null==r?"":r)}}var Ys={create:Vs,update:Vs},Ks=/\s+/;function Gs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ks).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Qs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ks).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),i=" "+t+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Js(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&A(t,Xs(e.name||"v")),A(t,e),t}return"string"===typeof e?Xs(e):void 0}}var Xs=I((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),Zs=Z&&!ne,eo="transition",to="animation",no="transition",io="transitionend",ro="animation",so="animationend";Zs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(no="WebkitTransition",io="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ro="WebkitAnimation",so="webkitAnimationEnd"));var oo=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ao(e){oo((function(){oo(e)}))}function co(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Gs(e,t))}function lo(e,t){e._transitionClasses&&C(e._transitionClasses,t),Qs(e,t)}function uo(e,t,n){var i=fo(e,t),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===eo?io:so,c=0,l=function(){e.removeEventListener(a,u),n()},u=function(t){t.target===e&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),s+1),e.addEventListener(a,u)}var ho=/\b(transform|all)(,|$)/;function fo(e,t){var n,i=window.getComputedStyle(e),r=(i[no+"Delay"]||"").split(", "),s=(i[no+"Duration"]||"").split(", "),o=po(r,s),a=(i[ro+"Delay"]||"").split(", "),c=(i[ro+"Duration"]||"").split(", "),l=po(a,c),u=0,h=0;t===eo?o>0&&(n=eo,u=o,h=s.length):t===to?l>0&&(n=to,u=l,h=c.length):(u=Math.max(o,l),n=u>0?o>l?eo:to:null,h=n?n===eo?s.length:c.length:0);var d=n===eo&&ho.test(i[no+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function po(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return _o(t)+_o(e[n])})))}function _o(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function mo(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Js(e.data.transition);if(!s(i)&&!o(n._enterCb)&&1===n.nodeType){var r=i.css,a=i.type,c=i.enterClass,l=i.enterToClass,d=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,_=i.appearActiveClass,m=i.beforeEnter,v=i.enter,y=i.afterEnter,b=i.enterCancelled,C=i.beforeAppear,w=i.appear,E=i.afterAppear,I=i.appearCancelled,k=i.duration,T=In,S=In.$vnode;while(S&&S.parent)T=S.context,S=S.parent;var O=!T._isMounted||!e.isRootInsert;if(!O||w||""===w){var x=O&&f?f:c,N=O&&_?_:d,P=O&&p?p:l,D=O&&C||m,R=O&&u(w)?w:v,A=O&&E||y,j=O&&I||b,L=g(h(k)?k.enter:k);0;var M=!1!==r&&!ne,F=yo(R),$=n._enterCb=U((function(){M&&(lo(n,P),lo(n,N)),$.cancelled?(M&&lo(n,x),j&&j(n)):A&&A(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,i=t&&t._pending&&t._pending[e.key];i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),R&&R(n,$)})),D&&D(n),M&&(co(n,x),co(n,N),ao((function(){lo(n,x),$.cancelled||(co(n,P),F||(go(L)?setTimeout($,L):uo(n,a,$)))}))),e.data.show&&(t&&t(),R&&R(n,$)),M||F||$()}}}function vo(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Js(e.data.transition);if(s(i)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var r=i.css,a=i.type,c=i.leaveClass,l=i.leaveToClass,u=i.leaveActiveClass,d=i.beforeLeave,f=i.leave,p=i.afterLeave,_=i.leaveCancelled,m=i.delayLeave,v=i.duration,y=!1!==r&&!ne,b=yo(f),C=g(h(v)?v.leave:v);0;var w=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(lo(n,l),lo(n,u)),w.cancelled?(y&&lo(n,c),_&&_(n)):(t(),p&&p(n)),n._leaveCb=null}));m?m(E):E()}function E(){w.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(co(n,c),co(n,u),ao((function(){lo(n,c),w.cancelled||(co(n,l),b||(go(C)?setTimeout(w,C):uo(n,a,w)))}))),f&&f(n,w),y||b||w())}}function go(e){return"number"===typeof e&&!isNaN(e)}function yo(e){if(s(e))return!1;var t=e.fns;return o(t)?yo(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function bo(e,t){!0!==t.data.show&&mo(t)}var Co=Z?{create:bo,activate:bo,remove:function(e,t){!0!==e.data.show?vo(e,t):t()}}:{},wo=[vs,bs,Ns,js,Ys,Co],Eo=wo.concat(fs),Io=ss({nodeOps:Qr,modules:Eo});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Do(e,"input")}));var ko={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?tt(n,"postpatch",(function(){ko.componentUpdated(e,t,n)})):To(e,t,n.context),e._vOptions=[].map.call(e.options,xo)):("textarea"===n.tag||Lr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",No),e.addEventListener("compositionend",Po),e.addEventListener("change",Po),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){To(e,t,n.context);var i=e._vOptions,r=e._vOptions=[].map.call(e.options,xo);if(r.some((function(e,t){return!$(e,i[t])}))){var s=e.multiple?t.value.some((function(e){return Oo(e,r)})):t.value!==t.oldValue&&Oo(t.value,r);s&&Do(e,"change")}}}};function To(e,t,n){So(e,t,n),(te||ie)&&setTimeout((function(){So(e,t,n)}),0)}function So(e,t,n){var i=t.value,r=e.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],r)s=q(i,xo(o))>-1,o.selected!==s&&(o.selected=s);else if($(xo(o),i))return void(e.selectedIndex!==a&&(e.selectedIndex=a));r||(e.selectedIndex=-1)}}function Oo(e,t){return t.every((function(t){return!$(t,e)}))}function xo(e){return"_value"in e?e._value:e.value}function No(e){e.target.composing=!0}function Po(e){e.target.composing&&(e.target.composing=!1,Do(e.target,"input"))}function Do(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Ro(e){return!e.componentInstance||e.data&&e.data.transition?e:Ro(e.componentInstance._vnode)}var Ao={bind:function(e,t,n){var i=t.value;n=Ro(n);var r=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&r?(n.data.show=!0,mo(n,(function(){e.style.display=s}))):e.style.display=i?s:"none"},update:function(e,t,n){var i=t.value,r=t.oldValue;if(!i!==!r){n=Ro(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?mo(n,(function(){e.style.display=e.__vOriginalDisplay})):vo(n,(function(){e.style.display="none"}))):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}},jo={model:ko,show:Ao},Lo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Mo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Mo(Ut(t.children)):e}function Fo(e){var t={},n=e.$options;for(var i in n.propsData)t[i]=e[i];var r=n._parentListeners;for(var i in r)t[T(i)]=r[i];return t}function $o(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function qo(e){while(e=e.parent)if(e.data.transition)return!0}function Uo(e,t){return t.key===e.key&&t.tag===e.tag}var Bo=function(e){return e.tag||kt(e)},Wo=function(e){return"show"===e.name},Ho={name:"transition",props:Lo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Bo),n.length)){0;var i=this.mode;0;var r=n[0];if(qo(this.$vnode))return r;var s=Mo(r);if(!s)return r;if(this._leaving)return $o(e,r);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:l(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Fo(this),c=this._vnode,u=Mo(c);if(s.data.directives&&s.data.directives.some(Wo)&&(s.data.show=!0),u&&u.data&&!Uo(s,u)&&!kt(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=A({},a);if("out-in"===i)return this._leaving=!0,tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),$o(e,r);if("in-out"===i){if(kt(s))return c;var d,f=function(){d()};tt(a,"afterEnter",f),tt(a,"enterCancelled",f),tt(h,"delayLeave",(function(e){d=e}))}}return r}}},zo=A({tag:String,moveClass:String},Lo);delete zo.mode;var Vo={props:zo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,i){var r=kn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,n,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=Fo(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){var l=[],u=[];for(a=0;a<i.length;a++){c=i[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?l.push(c):u.push(c)}this.kept=e(t,null,l),this.removed=u}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Yo),e.forEach(Ko),e.forEach(Go),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,i=n.style;co(n,t),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(io,n._moveCb=function e(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(io,e),n._moveCb=null,lo(n,t))})}})))},methods:{hasMove:function(e,t){if(!Zs)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Qs(n,e)})),Gs(n,t),n.style.display="none",this.$el.appendChild(n);var i=fo(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function Yo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ko(e){e.data.newPos=e.elm.getBoundingClientRect()}function Go(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,r=t.top-n.top;if(i||r){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate(".concat(i,"px,").concat(r,"px)"),s.transitionDuration="0s"}}var Qo={Transition:Ho,TransitionGroup:Vo};Qi.config.mustUseProp=fr,Qi.config.isReservedTag=Dr,Qi.config.isReservedAttr=hr,Qi.config.getTagNamespace=Rr,Qi.config.isUnknownElement=jr,A(Qi.options.directives,jo),A(Qi.options.components,Qo),Qi.prototype.__patch__=Z?Io:L,Qi.prototype.$mount=function(e,t){return e=e&&Z?Mr(e):void 0,On(this,e,t)},Z&&setTimeout((function(){V.devtools&&he&&he.emit("init",Qi)}),0)}).call(this,n("c8ba"))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Xo})),n.d(t,"b",(function(){return Wo})),n.d(t,"c",(function(){return Mo})),n.d(t,"d",(function(){return $o}));var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.14.0";
/**
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
 */
let l="";function u(e){l=e}
/**
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["E"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["y"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),_=f("sessionStorage"),m=new o["b"]("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),g=function(e){const t=Object(s["D"])(e),n=new s["d"];n.update(t);const i=n.digest();return s["g"].encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?Object(s["E"])(i):i,t+=" "}return t};let b=null,C=!0;const w=function(e,t){Object(s["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=o["a"].VERBOSE,b=m.log.bind(m),t&&_.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,_.remove("logging_enabled"))},E=function(...e){if(!0===C&&(C=!1,null===b&&!0===_.get("logging_enabled")&&w(!0)),b){const t=y.apply(null,e);b(t)}},I=function(e){return function(...t){E(e,...t)}},k=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);m.error(t)},T=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw m.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+y(...e);m.warn(t)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N=function(e){if(Object(s["v"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},P="[MIN_NAME]",D="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===P||t===D)return-1;if(t===P||e===D)return 1;{const n=V(e),i=V(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},j=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["E"])(t))},L=function(e){if("object"!==typeof e||null===e)return Object(s["E"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(s["E"])(t[i]),n+=":",n+=L(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){Object(s["e"])(!x(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function B(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const W=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,z=2147483647,V=function(e){if(W.test(e)){const t=Number(e);if(t>=H&&t<=z)return t}return null},Y=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
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
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
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
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if(Object(s["e"])("string"===typeof t,"typeof type must == string"),Object(s["e"])("object"===typeof n,"typeof params must == object"),t===ce)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return F(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
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
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["l"])(this.counters_)}}
/**
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
 */const pe={},_e={};function me(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ve(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
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
 */class ge{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Y(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const ye="start",be="close",Ce="pLPCommand",we="pRTLPCB",Ee="id",Ie="pw",ke="ser",Te="cb",Se="seg",Oe="ts",xe="d",Ne="dframe",Pe=1870,De=30,Re=Pe-De,Ae=25e3,je=3e4;class Le{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ge(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(je)),N(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Me((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[ke]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!Object(s["v"])()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["E"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["h"])(t),i=M(n,Re);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["v"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[Ee]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["E"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Me{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["v"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[Ce+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Me.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){E("frame writing exception"),r.stack&&E(r.stack),E(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Ie]=this.myPW,e[ke]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+De+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+i+"="+e.seg+"&"+Oe+i+"="+e.ts+"&"+xe+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Ae)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){Object(s["v"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
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
 */const Fe=16384,$e=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class Ue{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=me(t),this.connURL=Ue.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o[ee]=Z,!Object(s["v"])()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(o[ne]=ie),t&&(o[te]=t),n&&(o[se]=n),i&&(o[ae]=i),r&&(o[oe]=r),de(e,ce,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let t;if(Object(s["v"])()){const n=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${Z}/${l}/${e.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:"/"}),r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(t["proxy"]={origin:r})}this.mySock=new qe(this.connURL,[],t)}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!Ue.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["y"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["E"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2,Ue.healthyTimeout=3e4;
/**
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
 */
class Be{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ue&&Ue["isAvailable"]();let n=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ue];else{const e=this.transports_=[];for(const t of Be.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Be.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Be.globalTransportInitialized_=!1;
/**
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
 */
const We=6e4,He=5e3,ze=10240,Ve=102400,Ye="t",Ke="d",Ge="s",Qe="r",Je="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new Be(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ve?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ye in e){const t=e[Ye];t===Ze?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=j("t",e),n=j("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=j("t",e),n=j("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=j(Ye,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Je?k("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(We))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){Object(s["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
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
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["u"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(s["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function gt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function wt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Et{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["C"])(this.parts_[n]);Tt(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["C"])(t),Tt(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=Object(s["C"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class Ot extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Ot}getInitialEvent(e){return Object(s["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const xt=1e3,Nt=3e5,Pt=3e4,Dt=1.3,Rt=3e4,At="server_kill",jt=3;class Lt extends rt{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xt,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["v"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ot.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Object(s["E"])(r)),Object(s["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["e"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,r=>{const s=r["d"],o=r["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["j"])(e,"w")){const n=Object(s["B"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["r"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["x"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["E"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):k("Unrecognized action received from server: "+Object(s["E"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Rt&&(this.reconnectDelay_=xt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(At)},r))}catch(k){this.log_("Failed to get token: "+k),o||(this.repoInfo_.nodeAdmin&&S(k),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["s"])(this.interruptReasons_)&&(this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>L(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jt&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["v"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(s["u"])()?e["framework.cordova"]=1:Object(s["w"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(s["s"])(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
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
 */
class Mt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Mt(e,t)}}
/**
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
 */class Ft{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Mt(P,e),i=new Mt(P,t);return 0!==this.compare(n,i)}minPost(){return Mt.MIN}}
/**
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
 */let $t;class qt extends Ft{static get __EMPTY_NODE(){return $t}static set __EMPTY_NODE(e){$t=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw Object(s["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Mt.MIN}maxPost(){return new Mt(D,$t)}makePost(e,t){return Object(s["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Mt(e,$t)}toString(){return".key"}}const Ut=new qt;
/**
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
 */class Bt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Wt.RED,this.left=null!=i?i:zt.EMPTY_NODE,this.right=null!=r?r:zt.EMPTY_NODE}copy(e,t,n,i,r){return new Wt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0,Wt.BLACK=!1;class Ht{copy(e,t,n,i,r){return this}insert(e,t,n){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Vt(e,t){return R(e.name,t.name)}function Yt(e,t){return R(e,t)}
/**
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
 */let Kt;function Gt(e){Kt=e}zt.EMPTY_NODE=new Ht;const Qt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Jt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["j"])(t,".sv"),"Priority must be a string or number.")}else Object(s["e"])(e===Kt||e.isEmpty(),"priority of unexpected type.");Object(s["e"])(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Xt,Zt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jt(this.priorityNode_)}static set __childrenNodeConstructor(e){Xt=e}static get __childrenNodeConstructor(){return Xt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:(Object(s["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=tn.VALUE_TYPE_ORDER.indexOf(t),r=tn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["e"])(i>=0,"Unknown leaf type: "+t),Object(s["e"])(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Zt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ft{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?R(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Mt.MIN}maxPost(){return new Mt(D,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Zt(e);return new Mt(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
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
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Wt(a,o.node,Wt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Wt(a,o.node,Wt.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Wt(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Wt.BLACK):(a(i,Wt.BLACK),a(i,Wt.RED))}return s},o=new cn(e.length),a=s(o);return new zt(i||t,a)};
/**
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
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["e"])(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(e){const t=Object(s["B"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return Object(s["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["e"])(e!==Ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Mt.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?ln(n,e.getCompare()):hn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new dn(u,l)}addToIndexes(e,t){const n=Object(s["z"])(this.indexes_,(n,i)=>{const r=Object(s["B"])(this.indexSet_,i);if(Object(s["e"])(r,"Missing index implementation for "+i),n===hn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Mt.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ln(n,r.getCompare())}return hn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Mt(e.name,i))),r.insert(e,e.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["z"])(this.indexes_,n=>{if(n===hn)return n;{const i=t.get(e.name);return i?n.remove(new Mt(e.name,i)):n}});return new dn(n,this.indexSet_)}}
/**
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
 */let fn;class pn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Jt(this.priorityNode_),this.children_.isEmpty()&&Object(s["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new zt(Yt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new pn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Mt(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?fn:this.priorityNode_;return new pn(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(s["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(on,(s,o)=>{t[s]=o.val(e),n++,r&&pn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(on,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":g(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Mt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Mt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Mt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===Ut||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ut||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ut?null:this.indexMap_.get(e.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends pn{constructor(){super(new zt(Yt),pn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pn.EMPTY_NODE}isEmpty(){return!1}}const mn=new _n;Object.defineProperties(Mt,{MIN:{value:new Mt(P,pn.EMPTY_NODE)},MAX:{value:new Mt(D,mn)}}),qt.__EMPTY_NODE=pn.EMPTY_NODE,tn.__childrenNodeConstructor=pn,Gt(mn),rn(mn);
/**
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
 */
const vn=!0;function gn(e,t=null){if(null===e)return pn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,gn(t))}if(e instanceof Array||!vn){let n=pn.EMPTY_NODE;return F(e,(t,i)=>{if(Object(s["j"])(e,t)&&"."!==t.substring(0,1)){const e=gn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(gn(t))}{const n=[];let i=!1;const r=e;if(F(r,(e,t)=>{if("."!==e.substring(0,1)){const r=gn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Mt(e,r)))}}),0===n.length)return pn.EMPTY_NODE;const s=ln(n,Vt,e=>e.name,Yt);if(i){const e=ln(n,on.getCompare());return new pn(s,gn(t),new dn({".priority":e},{".priority":on}))}return new pn(s,gn(t),dn.Default)}}nn(gn);
/**
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
 */
class yn extends Ft{constructor(e){super(),this.indexPath_=e,Object(s["e"])(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?R(e.name,t.name):r}makePost(e,t){const n=gn(e),i=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Mt(t,i)}maxPost(){const e=pn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Mt(D,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
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
 */class bn extends Ft{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Mt.MIN}maxPost(){return Mt.MAX}makePost(e,t){const n=gn(e);return new Mt(t,n)}toString(){return".value"}}const Cn=new bn;
/**
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
 */function wn(e){return{type:"value",snapshotNode:e}}function En(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function In(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Tn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class Sn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){Object(s["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(In(t,a)):Object(s["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(En(t,n)):o.trackChildChange(kn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,(e,i)=>{t.hasChild(e)||n.trackChildChange(In(e,i))}),t.isLeafNode()||t.forEachChild(on,(t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(kn(t,i,r))}else n.trackChildChange(En(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class On{constructor(e){this.indexedFilter_=new Sn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=On.getStartPost_(e),this.endPost_=On.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Mt(t,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(pn.EMPTY_NODE);const r=this;return t.forEachChild(on,(e,t)=>{r.matches(new Mt(e,t))||(i=i.updateImmediateChild(e,pn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class xn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new On(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Mt(t,n))||(n=pn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=pn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(pn.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),r=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);r?n++:i=i.updateImmediateChild(t.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["e"])(a.numChildren()===this.limit_,"");const c=new Mt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(kn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(In(t,e));const n=a.updateImmediateChild(t,pn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(En(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=r&&(r.trackChildChange(In(l.name,l.node)),r.trackChildChange(En(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,pn.EMPTY_NODE)):e}}
/**
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
 */class Nn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:D}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new Nn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pn(e){return e.loadsAllData()?new Sn(e.getIndex()):e.hasLimit()?new xn(e):new On(e)}function Dn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===on?n="$priority":e.index_===Cn?n="$value":e.index_===Ut?n="$key":(Object(s["e"])(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["E"])(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Object(s["E"])(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Object(s["E"])(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Object(s["E"])(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Object(s["E"])(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Rn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
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
 */class An extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=An.getListenId_(e,n),a={};this.listens_[o]=a;const c=Dn(e._queryParams);this.restRequest_(r+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),Object(s["B"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=An.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Dn(e._queryParams),n=e._path.toString(),i=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["A"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["y"])(a.responseText)}catch(e){S("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
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
 */class jn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Ln(){return{value:null,children:new Map}}function Mn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Ln());const r=e.children.get(i);t=ft(t),Mn(r,t,n)}}function Fn(e,t,n){null!==e.value?n(t,e.value):$n(e,(e,i)=>{const r=new lt(t.toString()+"/"+e);Fn(i,r,n)})}function $n(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
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
 */class qn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
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
 */const Un=1e4,Bn=3e4,Wn=3e5;class Hn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qn(e);const n=Un+(Bn-Un)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,i)=>{i>0&&Object(s["j"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*Wn))}}
/**
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
 */var zn;function Vn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(zn||(zn={}));class Gn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=zn.ACK_USER_WRITE,this.source=Vn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return Object(s["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Gn(ut(),t,this.revert)}}return Object(s["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Gn(ft(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Qn{constructor(e,t){this.source=e,this.path=t,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Qn(this.source,ut()):new Qn(this.source,ft(this.path))}}
/**
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
 */class Jn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=zn.OVERWRITE}operationForChild(e){return yt(this.path)?new Jn(this.source,ut(),this.snap.getImmediateChild(e)):new Jn(this.source,ft(this.path),this.snap)}}
/**
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
 */class Xn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=zn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Jn(this.source,ut(),t.value):new Xn(this.source,ut(),t)}return Object(s["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xn(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Zn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class ei{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ti(e,t,n,i){const r=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Tn(t.childName,t.snapshotNode))}),ni(e,r,"child_removed",t,i,n),ni(e,r,"child_added",t,i,n),ni(e,r,"child_moved",s,i,n),ni(e,r,"child_changed",t,i,n),ni(e,r,"value",t,i,n),r}function ni(e,t,n,i,r,s){const o=i.filter(e=>e.type===n);o.sort((t,n)=>ri(e,t,n)),o.forEach(n=>{const i=ii(e,n,s);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}function ii(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ri(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["f"])("Should only compare child_ events.");const i=new Mt(t.childName,t.snapshotNode),r=new Mt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
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
 */function si(e,t){return{eventCache:e,serverCache:t}}function oi(e,t,n,i){return si(new Zn(t,n,i),e.serverCache)}function ai(e,t,n,i){return si(e.eventCache,new Zn(t,n,i))}function ci(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function li(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let ui;const hi=()=>(ui||(ui=new zt(A)),ui);class di{constructor(e,t=hi()){this.value=e,this.children=t}static fromObject(e){let t=new di(null);return F(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ft(e),t);if(null!=r){const e=gt(new lt(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new di(null)}}set(e,t){if(yt(e))return new di(t,this.children);{const n=ht(e),i=this.children.get(n)||new di(null),r=i.set(ft(e),t),s=this.children.insert(n,r);return new di(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new di(null):new di(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(ft(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new di(null):new di(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),i=this.children.get(n)||new di(null),r=i.setTree(ft(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new di(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(gt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(ft(e),gt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(ft(e),gt(t,i),n):new di(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(gt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
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
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new di(null))}}function pi(e,t,n){if(yt(t))return new fi(new di(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bt(r,t);return s=s.updateChild(o,n),new fi(e.writeTree_.set(r,s))}{const i=new di(n),r=e.writeTree_.setTree(t,i);return new fi(r)}}}function _i(e,t,n){let i=e;return F(n,(e,n)=>{i=pi(i,gt(t,e),n)}),i}function mi(e,t){if(yt(t))return fi.empty();{const n=e.writeTree_.setTree(t,new di(null));return new fi(n)}}function vi(e,t){return null!=gi(e,t)}function gi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function yi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,(e,n)=>{t.push(new Mt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Mt(e,n.value))}),t}function bi(e,t){if(yt(t))return e;{const n=gi(e,t);return new fi(null!=n?new di(n):e.writeTree_.subtree(t))}}function Ci(e){return e.writeTree_.isEmpty()}function wi(e,t){return Ei(ut(),e.writeTree_,t)}function Ei(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,r)=>{".priority"===t?(Object(s["e"])(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ei(gt(e,t),r,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(gt(e,".priority"),i)),n}}
/**
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
 */function Ii(e,t){return Vi(t,e)}function ki(e,t,n,i,r){Object(s["e"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=pi(e.visibleWrites,t,n)),e.lastWriteId=i}function Ti(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Si(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["e"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Oi(t,i.path)?r=!1:wt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return xi(e),!0;if(i.snap)e.visibleWrites=mi(e.visibleWrites,i.path);else{const t=i.children;F(t,t=>{e.visibleWrites=mi(e.visibleWrites,gt(i.path,t))})}return!0}return!1}function Oi(e,t){if(e.snap)return wt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&wt(gt(e.path,n),t))return!0;return!1}function xi(e){e.visibleWrites=Pi(e.allWrites,Ni,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ni(e){return e.visible}function Pi(e,t,n){let i=fi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)wt(n,e)?(t=bt(n,e),i=pi(i,t,o.snap)):wt(e,n)&&(t=bt(e,n),i=pi(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["f"])("WriteRecord should have .snap or .children");if(wt(n,e))t=bt(n,e),i=_i(i,t,o.children);else if(wt(e,n))if(t=bt(e,n),yt(t))i=_i(i,ut(),o.children);else{const e=Object(s["B"])(o.children,ht(t));if(e){const n=e.getChild(ft(t));i=pi(i,ut(),n)}}}}}return i}function Di(e,t,n,i,r){if(i||r){const s=bi(e.visibleWrites,t);if(!r&&Ci(s))return n;if(r||null!=n||vi(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=Pi(e.allWrites,s,t),a=n||pn.EMPTY_NODE;return wi(o,a)}return null}{const i=gi(e.visibleWrites,t);if(null!=i)return i;{const i=bi(e.visibleWrites,t);if(Ci(i))return n;if(null!=n||vi(i,ut())){const e=n||pn.EMPTY_NODE;return wi(i,e)}return null}}}function Ri(e,t,n){let i=pn.EMPTY_NODE;const r=gi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(on,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const r=bi(e.visibleWrites,t);return n.forEachChild(on,(e,t)=>{const n=wi(bi(r,new lt(e)),t);i=i.updateImmediateChild(e,n)}),yi(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=bi(e.visibleWrites,t);return yi(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Ai(e,t,n,i,r){Object(s["e"])(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=gt(t,n);if(vi(e.visibleWrites,o))return null;{const t=bi(e.visibleWrites,o);return Ci(t)?r.getChild(n):wi(t,r.getChild(n))}}function ji(e,t,n,i){const r=gt(t,n),s=gi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=bi(e.visibleWrites,r);return wi(t,i.getNode().getImmediateChild(n))}return null}function Li(e,t){return gi(e.visibleWrites,t)}function Mi(e,t,n,i,r,s,o){let a;const c=bi(e.visibleWrites,t),l=gi(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=wi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function Fi(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function $i(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function qi(e,t){return Ri(e.writeTree,e.treePath,t)}function Ui(e,t,n,i){return Ai(e.writeTree,e.treePath,t,n,i)}function Bi(e,t){return Li(e.writeTree,gt(e.treePath,t))}function Wi(e,t,n,i,r,s){return Mi(e.writeTree,e.treePath,t,n,i,r,s)}function Hi(e,t,n){return ji(e.writeTree,e.treePath,t,n)}function zi(e,t){return Vi(gt(e.treePath,t),e.writeTree)}function Vi(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Yi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,kn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,In(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,En(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(s["f"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,kn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Ki{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Gi=new Ki;class Qi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:li(this.viewCache_),r=Wi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
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
 */function Ji(e){return{filter:e}}function Xi(e,t){Object(s["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Zi(e,t,n,i,r){const o=new Yi;let a,c;if(n.type===zn.OVERWRITE){const l=n;l.source.fromUser?a=ir(e,t,l.path,l.snap,i,r,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=nr(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===zn.MERGE){const l=n;l.source.fromUser?a=sr(e,t,l.path,l.children,i,r,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=ar(e,t,l.path,l.children,i,r,c,o))}else if(n.type===zn.ACK_USER_WRITE){const s=n;a=s.revert?ur(e,t,s.path,i,r,o):cr(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==zn.LISTEN_COMPLETE)throw Object(s["f"])("Unknown operation type: "+n.type);a=lr(e,t,n.path,i,o)}const l=o.getChanges();return er(t,a,l),{viewCache:a,changes:l}}function er(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ci(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(wn(ci(t)))}}function tr(e,t,n,i,r,o){const a=t.eventCache;if(null!=Bi(i,n))return t;{let c,l;if(yt(n))if(Object(s["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=li(t),r=n instanceof pn?n:pn.EMPTY_NODE,s=qi(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=$i(i,li(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){Object(s["e"])(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=Ui(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Ui(i,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Hi(i,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return oi(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function nr(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const r=ft(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,Gi,null)}const h=ai(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Qi(r,h,s);return tr(e,h,n,r,d,a)}function ir(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Qi(r,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=oi(t,l,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=oi(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ft(n),l=a.getNode().getImmediateChild(r);let h;if(yt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===pt(s)&&e.getChild(vt(s)).isEmpty()?e:e.updateChild(s,i):pn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=oi(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function rr(e,t){return e.eventCache.isCompleteForChild(t)}function sr(e,t,n,i,r,s,o){let a=t;return i.foreach((i,c)=>{const l=gt(n,i);rr(t,ht(l))&&(a=ir(e,a,l,c,r,s,o))}),i.foreach((i,c)=>{const l=gt(n,i);rr(t,ht(l))||(a=ir(e,a,l,c,r,s,o))}),a}function or(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ar(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?i:new di(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=or(e,c,i);l=nr(e,l,new lt(n),u,r,s,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=or(e,c,i);l=nr(e,l,new lt(n),u,r,s,o,a)}}),l}function cr(e,t,n,i,r,s,o){if(null!=Bi(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return nr(e,t,n,c.getNode().getChild(n),r,s,a,o);if(yt(n)){let i=new di(null);return c.getNode().forEachChild(Ut,(e,t)=>{i=i.set(new lt(e),t)}),ar(e,t,n,i,r,s,a,o)}return t}{let l=new di(null);return i.foreach((e,t)=>{const i=gt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))}),ar(e,t,n,l,r,s,a,o)}}function lr(e,t,n,i,r){const s=t.serverCache,o=ai(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return tr(e,o,n,i,Gi,r)}function ur(e,t,n,i,r,o){let a;if(null!=Bi(i,n))return t;{const c=new Qi(i,t,r),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=$i(i,li(t));else{const e=t.serverCache.getNode();Object(s["e"])(e instanceof pn,"serverChildren would be complete if leaf node"),n=qi(i,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const r=ht(n);let s=Hi(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?e.filter.updateChild(l,r,s,ft(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,pn.EMPTY_NODE,ft(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=$i(i,li(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Bi(i,ut()),oi(t,u,a,e.filter.filtersNodes())}}
/**
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
 */class hr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Sn(n.getIndex()),r=Pn(n);this.processor_=Ji(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),l=new Zn(a,s.isFullyInitialized(),i.filtersNodes()),u=new Zn(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=si(u,l),this.eventGenerator_=new ei(this.query_)}get query(){return this.query_}}function dr(e){return e.viewCache_.serverCache.getNode()}function fr(e,t){const n=li(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function pr(e){return 0===e.eventRegistrations_.length}function _r(e,t){e.eventRegistrations_.push(t)}function mr(e,t,n){const i=[];if(n){Object(s["e"])(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function vr(e,t,n,i){t.type===zn.MERGE&&null!==t.source.queryId&&(Object(s["e"])(li(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["e"])(ci(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Zi(e.processor_,r,t,n,i);return Xi(e.processor_,o.viewCache),Object(s["e"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,yr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function gr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(on,(e,t)=>{i.push(En(e,t))})}return n.isFullyInitialized()&&i.push(wn(n.getNode())),yr(e,i,n.getNode(),t)}function yr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return ti(e.eventGenerator_,t,n,r)}
/**
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
 */let br,Cr;class wr{constructor(){this.views=new Map}}function Er(e){Object(s["e"])(!br,"__referenceConstructor has already been defined"),br=e}function Ir(){return Object(s["e"])(br,"Reference.ts has not been loaded"),br}function kr(e){return 0===e.views.size}function Tr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(s["e"])(null!=o,"SyncTree gave us an op for an invalid query."),vr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(vr(s,t,n,i));return r}}function Sr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=$i(n,r?i:null),s=!1;e?s=!0:i instanceof pn?(e=qi(n,i),s=!1):(e=pn.EMPTY_NODE,s=!1);const o=si(new Zn(e,s,!1),new Zn(i,r,!1));return new hr(t,o)}return o}function Or(e,t,n,i,r,s){const o=Sr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),_r(o,n),gr(o,n)}function xr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Ar(e);if("default"===r)for(const[c,l]of e.views.entries())o=o.concat(mr(l,n,i)),pr(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(r);t&&(o=o.concat(mr(t,n,i)),pr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Ar(e)&&s.push(new(Ir())(t._repo,t._path)),{removed:s,events:o}}function Nr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Pr(e,t){let n=null;for(const i of e.views.values())n=n||fr(i,t);return n}function Dr(e,t){const n=t._queryParams;if(n.loadsAllData())return jr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Rr(e,t){return null!=Dr(e,t)}function Ar(e){return null!=jr(e)}function jr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */function Lr(e){Object(s["e"])(!Cr,"__referenceConstructor has already been defined"),Cr=e}function Mr(){return Object(s["e"])(Cr,"Reference.ts has not been loaded"),Cr}let Fr=1;class $r{constructor(e){this.listenProvider_=e,this.syncPointTree_=new di(null),this.pendingWriteTree_=Fi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qr(e,t,n,i,r){return ki(e.pendingWriteTree_,t,n,i,r),r?Jr(e,new Jn(Vn(),t,n)):[]}function Ur(e,t,n=!1){const i=Ti(e.pendingWriteTree_,t),r=Si(e.pendingWriteTree_,t);if(r){let t=new di(null);return null!=i.snap?t=t.set(ut(),!0):F(i.children,e=>{t=t.set(new lt(e),!0)}),Jr(e,new Gn(i.path,t,n))}return[]}function Br(e,t,n){return Jr(e,new Jn(Yn(),t,n))}function Wr(e,t,n){const i=di.fromObject(n);return Jr(e,new Xn(Yn(),t,i))}function Hr(e,t){return Jr(e,new Qn(Yn(),t))}function zr(e,t,n){const i=is(e,n);if(i){const n=rs(i),r=n.path,s=n.queryId,o=bt(r,t),a=new Qn(Kn(s),o);return ss(e,r,a)}return[]}function Vr(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Rr(o,t))){const c=xr(o,t,n,i);kr(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const n=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>Ar(t));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=os(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=es(e,i);e.listenProvider_.startListening(as(r),ts(e,r),s.hashFn,s.onComplete)}}}if(!r&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(as(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(ns(t));e.listenProvider_.stopListening(as(t),n)})}cs(e,l)}return a}function Yr(e,t,n,i){const r=is(e,i);if(null!=r){const i=rs(r),s=i.path,o=i.queryId,a=bt(s,t),c=new Jn(Kn(o),a,n);return ss(e,s,c)}return[]}function Kr(e,t,n,i){const r=is(e,i);if(r){const i=rs(r),s=i.path,o=i.queryId,a=bt(s,t),c=di.fromObject(n),l=new Xn(Kn(o),a,c);return ss(e,s,l)}return[]}function Gr(e,t,n,i=!1){const r=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=bt(e,r);o=o||Pr(t,n),a=a||Ar(t)});let c,l=e.syncPointTree_.get(r);if(l?(a=a||Ar(l),o=o||Pr(l,ut())):(l=new wr,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=o)c=!0;else{c=!1,o=pn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild((e,t)=>{const n=Pr(t,ut());n&&(o=o.updateImmediateChild(e,n))})}const u=Rr(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=ns(t);Object(s["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ls();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Ii(e.pendingWriteTree_,r);let d=Or(l,t,n,h,o,c);if(!u&&!a&&!i){const n=Dr(l,t);d=d.concat(us(e,t,n))}return d}function Qr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=bt(e,t),r=Pr(n,i);if(r)return r});return Di(r,t,s,n,i)}function Jr(e,t){return Xr(t,e.syncPointTree_,null,Ii(e.pendingWriteTree_,ut()))}function Xr(e,t,n,i){if(yt(e.path))return Zr(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Pr(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=zi(i,o);s=s.concat(Xr(a,c,e,t))}return r&&(s=s.concat(Tr(r,e,i,n))),s}}function Zr(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Pr(r,ut()));let s=[];return t.children.inorderTraversal((t,r)=>{const o=n?n.getImmediateChild(t):null,a=zi(i,t),c=e.operationForChild(t);c&&(s=s.concat(Zr(c,r,o,a)))}),r&&(s=s.concat(Tr(r,e,i,n))),s}function es(e,t){const n=t.query,i=ts(e,n);return{hashFn:()=>{const e=dr(t)||pn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?zr(e,n._path,i):Hr(e,n._path);{const i=B(t,n);return Vr(e,n,null,i)}}}}function ts(e,t){const n=ns(t);return e.queryToTagMap.get(n)}function ns(e){return e._path.toString()+"$"+e._queryIdentifier}function is(e,t){return e.tagToQueryMap.get(t)}function rs(e){const t=e.indexOf("$");return Object(s["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function ss(e,t,n){const i=e.syncPointTree_.get(t);Object(s["e"])(i,"Missing sync point for query tag that we're tracking");const r=Ii(e.pendingWriteTree_,t);return Tr(i,n,r,null)}function os(e){return e.fold((e,t,n)=>{if(t&&Ar(t)){const e=jr(t);return[e]}{let e=[];return t&&(e=Nr(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function as(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Mr())(e._repo,e._path):e}function cs(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ns(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ls(){return Fr++}function us(e,t,n){const i=t._path,r=ts(e,t),o=es(e,n),a=e.listenProvider_.startListening(as(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(r)Object(s["e"])(!Ar(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!yt(e)&&t&&Ar(t))return[jr(t).query];{let e=[];return t&&(e=e.concat(Nr(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(as(i),ts(e,i))}}return a}
/**
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
 */class hs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hs(t)}node(){return this.node_}}class ds{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=gt(this.path_,e);return new ds(this.syncTree_,t)}node(){return Qr(this.syncTree_,this.path_)}}const fs=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},ps=function(e,t,n){return e&&"object"===typeof e?(Object(s["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?_s(e[".sv"],t,n):"object"===typeof e[".sv"]?ms(e[".sv"],t):void Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_s=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["e"])(!1,"Unexpected server value: "+e)}},ms=function(e,t,n){e.hasOwnProperty("increment")||Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(s["e"])(!1,"Unexpected increment value: "+i);const r=t.node();if(Object(s["e"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},vs=function(e,t,n,i){return ys(t,new ds(n,e),i)},gs=function(e,t,n){return ys(e,new hs(t),n)};function ys(e,t,n){const i=e.getPriority().val(),r=ps(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ps(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new tn(s,gn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new tn(r))),i.forEachChild(on,(e,i)=>{const r=ys(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s}}
/**
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
 */class bs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Cs(e,t){let n=t instanceof lt?t:new lt(t),i=e,r=ht(n);while(null!==r){const e=Object(s["B"])(i.node.children,r)||{children:{},childCount:0};i=new bs(r,i,e),n=ft(n),r=ht(n)}return i}function ws(e){return e.node.value}function Es(e,t){e.node.value=t,Ns(e)}function Is(e){return e.node.childCount>0}function ks(e){return void 0===ws(e)&&!Is(e)}function Ts(e,t){F(e.node.children,(n,i)=>{t(new bs(n,e,i))})}function Ss(e,t,n,i){n&&!i&&t(e),Ts(e,e=>{Ss(e,t,!0,i)}),n&&i&&t(e)}function Os(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function xs(e){return new lt(null===e.parent?e.name:xs(e.parent)+"/"+e.name)}function Ns(e){null!==e.parent&&Ps(e.parent,e.name,e)}function Ps(e,t,n){const i=ks(n),r=Object(s["j"])(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ns(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ns(e))}
/**
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
 */const Ds=/[\[\].#$\/\u0000-\u001F\u007F]/,Rs=/[\[\].#$\u0000-\u001F\u007F]/,As=10485760,js=function(e){return"string"===typeof e&&0!==e.length&&!Ds.test(e)},Ls=function(e){return"string"===typeof e&&0!==e.length&&!Rs.test(e)},Ms=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ls(e)},Fs=function(e,t,n,i){i&&void 0===t||$s(Object(s["n"])(e,"value"),t,n)},$s=function(e,t,n){const i=n instanceof lt?new Et(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(i));if("function"===typeof t)throw new Error(e+"contains a function "+St(i)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+St(i));if("string"===typeof t&&t.length>As/3&&Object(s["C"])(t)>As)throw new Error(e+"contains a string greater than "+As+" utf8 bytes "+St(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(F(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!js(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(i,t),$s(e,s,i),kt(i)}),n&&r)throw new Error(e+' contains ".value" child '+St(i)+" in addition to actual children.")}},qs=function(e,t,n,i){if((!i||void 0!==n)&&!Ls(n))throw new Error(Object(s["n"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Us=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qs(e,t,n,i)},Bs=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ws=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!js(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Ms(n))throw new Error(Object(s["n"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Hs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zs(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Vs(e,t,n){zs(e,n),Ks(e,e=>Ct(e,t))}function Ys(e,t,n){zs(e,n),Ks(e,e=>wt(e,t)||wt(t,e))}function Ks(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Gs(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Gs(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&E("event: "+n.toString()),Y(i)}}}
/**
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
 */const Qs="repo_interrupt",Js=25;class Xs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ln(),this.transactionQueueTree_=new bs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zs(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||K())e.server_=new An(e.repoInfo_,(t,n,i,r)=>{no(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>io(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["E"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,(t,n,i,r)=>{no(e,t,n,i,r)},t=>{io(e,t)},t=>{ro(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ve(e.repoInfo_,()=>new Hn(e.stats_,e.server_)),e.infoData_=new jn,e.infoSyncTree_=new $r({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Br(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),so(e,"connected",!1),e.serverSyncTree_=new $r({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{const s=r(n,i);Ys(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function eo(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function to(e){return fs({timestamp:eo(e)})}function no(e,t,n,i,r){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=Object(s["z"])(n,e=>gn(e));a=Kr(e.serverSyncTree_,o,t,r)}else{const t=gn(n);a=Yr(e.serverSyncTree_,o,t,r)}else if(i){const t=Object(s["z"])(n,e=>gn(e));a=Wr(e.serverSyncTree_,o,t)}else{const t=gn(n);a=Br(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=go(e,o)),Ys(e.eventQueue_,c,a)}function io(e,t){so(e,"connected",t),!1===t&&co(e)}function ro(e,t){F(t,(t,n)=>{so(e,t,n)})}function so(e,t,n){const i=new lt("/.info/"+t),r=gn(n);e.infoData_.updateSnapshot(i,r);const s=Br(e.infoSyncTree_,i,r);Ys(e.eventQueue_,i,s)}function oo(e){return e.nextWriteId_++}function ao(e,t,n,i,r){fo(e,"set",{path:t.toString(),value:n,priority:i});const s=to(e),o=gn(n,i),a=Qr(e.serverSyncTree_,t),c=gs(o,a,s),l=oo(e),u=qr(e.serverSyncTree_,t,c,l,!0);zs(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,i)=>{const s="ok"===n;s||S("set at "+t+" failed: "+n);const o=Ur(e.serverSyncTree_,l,!s);Ys(e.eventQueue_,t,o),po(e,r,n,i)});const h=Io(e,t);go(e,h),Ys(e.eventQueue_,h,[])}function co(e){fo(e,"onDisconnectEvents");const t=to(e),n=Ln();Fn(e.onDisconnect_,ut(),(i,r)=>{const s=vs(i,r,e.serverSyncTree_,t);Mn(n,i,s)});let i=[];Fn(n,ut(),(t,n)=>{i=i.concat(Br(e.serverSyncTree_,t,n));const r=Io(e,t);go(e,r)}),e.onDisconnect_=Ln(),Ys(e.eventQueue_,ut(),i)}function lo(e,t,n){let i;i=".info"===ht(t._path)?Gr(e.infoSyncTree_,t,n):Gr(e.serverSyncTree_,t,n),Vs(e.eventQueue_,t._path,i)}function uo(e,t,n){let i;i=".info"===ht(t._path)?Vr(e.infoSyncTree_,t,n):Vr(e.serverSyncTree_,t,n),Vs(e.eventQueue_,t._path,i)}function ho(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Qs)}function fo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function po(e,t,n,i){t&&Y(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}})}function _o(e,t,n){return Qr(e.serverSyncTree_,t,n)||pn.EMPTY_NODE}function mo(e,t=e.transactionQueueTree_){if(t||Eo(e,t),ws(t)){const n=Co(e,t);Object(s["e"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&vo(e,xs(t),n)}else Is(t)&&Ts(t,t=>{mo(e,t)})}function vo(e,t,n){const i=n.map(e=>e.currentWriteId),r=_o(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(s["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=bt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,i=>{fo(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Ur(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Eo(e,Cs(e.transactionQueueTree_,t)),mo(e,e.transactionQueueTree_),Ys(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Y(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}go(e,t)}},a)}function go(e,t){const n=bo(e,t),i=xs(n),r=Co(e,n);return yo(e,r,i),i}function yo(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=bt(n,o.path);let u,h=!1;if(Object(s["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(Ur(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Js)h=!0,u="maxretry",r=r.concat(Ur(e.serverSyncTree_,o.currentWriteId,!0));else{const n=_o(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){$s("transaction failed: Data returned ",i,o.path);let t=gn(i);const c="object"===typeof i&&null!=i&&Object(s["j"])(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=to(e),h=gs(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=oo(e),a.splice(a.indexOf(l),1),r=r.concat(qr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(Ur(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(Ur(e.serverSyncTree_,o.currentWriteId,!0))}Ys(e.eventQueue_,n,r),r=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?i.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):i.push(()=>t[c].onComplete(new Error(u),!1,null))))}Eo(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)Y(i[s]);mo(e,e.transactionQueueTree_)}function bo(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===ws(i))i=Cs(i,n),t=ft(t),n=ht(t);return i}function Co(e,t){const n=[];return wo(e,t,n),n.sort((e,t)=>e.order-t.order),n}function wo(e,t,n){const i=ws(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ts(t,t=>{wo(e,t,n)})}function Eo(e,t){const n=ws(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Es(t,n.length>0?n:void 0)}Ts(t,t=>{Eo(e,t)})}function Io(e,t){const n=xs(bo(e,t)),i=Cs(e.transactionQueueTree_,t);return Os(i,t=>{ko(e,t)}),ko(e,i),Ss(i,t=>{ko(e,t)}),n}function ko(e,t){const n=ws(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Ur(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Es(t,void 0):n.length=o+1,Ys(e.eventQueue_,xs(t),r);for(let e=0;e<i.length;e++)Y(i[e])}}
/**
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
 */function To(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function So(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Oo=function(e,t){const n=xo(e),i=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new lt(n.pathString)}},xo=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=To(e.substring(u,h)));const d=So(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},No="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
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
 */
class Po{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["E"])(this.snapshot.exportVal())}}class Do{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Ro{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Ao{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new jo(this._repo,this._path)}get _queryIdentifier(){const e=Rn(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return Rn(this._queryParams)}isEqual(e){if(e=Object(s["q"])(e),!(e instanceof Ao))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class jo extends Ao{constructor(e,t){super(e,t,new Nn,!1)}get parent(){const e=vt(this._path);return null===e?null:new jo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Lo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Fo(this.ref,e);return new Lo(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new Lo(n,Fo(this.ref,t),on)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mo(e,t){return e=Object(s["q"])(e),e._checkNotDeleted("ref"),void 0!==t?Fo(e._root,t):e._root}function Fo(e,t){return e=Object(s["q"])(e),null===ht(e._path)?Us("child","path",t,!1):qs("child","path",t,!1),new jo(e._repo,gt(e._path,t))}function $o(e,t){e=Object(s["q"])(e),Bs("set",e._path),Fs("set",t,e._path,!1);const n=new s["a"];return ao(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class qo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Po("value",this,new Lo(e.snapshotNode,new jo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Do(this,e,t):null}matches(e){return e instanceof qo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Uo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Do(this,e,t):null}createEvent(e,t){Object(s["e"])(null!=e.childName,"Child events should have a childName.");const n=Fo(new jo(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Po(e.type,this,new Lo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Uo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Bo(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{uo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Ro(n,s||void 0),a="value"===t?new qo(o):new Uo(t,o);return lo(e._repo,e,a),()=>uo(e._repo,e,a)}function Wo(e,t,n,i){return Bo(e,"value",t,n,i)}Er(jo),Lr(jo);
/**
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
 */
const Ho="FIREBASE_DATABASE_EMULATOR_HOST",zo={};let Vo=!1;function Yo(e,t,n,i){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}function Ko(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Oo(o,s),l=c.repoInfo,u=void 0;"undefined"!==typeof e&&Object({NODE_ENV:"production",BASE_URL:"/"})&&(u=Object({NODE_ENV:"production",BASE_URL:"/"})[Ho]),u?(a=!0,o=`http://${u}?ns=${l.namespace}`,c=Oo(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new X(X.OWNER):new J(t.name,t.options,n);Ws("Invalid Firebase Database URL",c),yt(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Qo(l,t,h,new Q(t.name,i));return new Jo(d,t)}function Go(e,t){const n=zo[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ho(e),delete n[e.key]}function Qo(e,t,n,i){let r=zo[t.name];r||(r={},zo[t.name]=r);let s=r[e.toURLString()];return s&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Xs(e,Vo,n,i),r[e.toURLString()]=s,s}class Jo{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Go(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function Xo(e=Object(i["d"])(),t){const n=Object(i["b"])(e,"database").getImmediate({identifier:t}),r=Object(s["p"])("database");return r&&Zo(n,...r),n}function Zo(e,t,n,i={}){e=Object(s["q"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o=void 0;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:Object(s["k"])(i.mockUserToken,e.app.options.projectId);o=new X(t)}Yo(r,t,n,o)}
/**
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
 */
function ea(e){u(i["a"]),Object(i["c"])(new r["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ko(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(a,c,e),Object(i["f"])(a,c,"esm2017")}
/**
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
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ea()}).call(this,n("4362"))},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return _e})),n.d(t,"b",(function(){return he})),n.d(t,"c",(function(){return ue})),n.d(t,"d",(function(){return ve})),n.d(t,"e",(function(){return me})),n.d(t,"f",(function(){return ge}));var i=n("22e5"),r=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,_=new WeakMap;function m(e){const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(w(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),_.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){g=e(g)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),w(h.get(this))}:function(...t){return w(e.apply(E(this),t))}:function(t,...n){const i=e.call(E(this),t,...n);return f.set(i,t.sort?t.sort():[t]),w(i)}}function C(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,l())?new Proxy(e,g):e)}function w(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=C(e);return t!==e&&(p.set(e,t),_.set(t,e)),t}const E=e=>_.get(e);function I(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=w(o);return i&&o.addEventListener("upgradeneeded",e=>{i(w(o.result),e.oldVersion,e.newVersion,w(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const k=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],S=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=T.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!k.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return S.set(t,s),s}y(e=>({...e,get:(t,n,i)=>O(t,n)||e.get(t,n,i),has:(t,n)=>!!O(t,n)||e.has(t,n)}));
/**
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
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",D="0.9.0",R=new r["b"]("@firebase/app"),A="@firebase/app-compat",j="@firebase/analytics-compat",L="@firebase/analytics",M="@firebase/app-check-compat",F="@firebase/app-check",$="@firebase/auth",q="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",W="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",V="@firebase/installations-compat",Y="@firebase/messaging",K="@firebase/messaging-compat",G="@firebase/performance",Q="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.15.0",se="[DEFAULT]",oe={[P]:"fire-core",[A]:"fire-core-compat",[L]:"fire-analytics",[j]:"fire-analytics-compat",[F]:"fire-app-check",[M]:"fire-app-check-compat",[$]:"fire-auth",[q]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[W]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[V]:"fire-iid-compat",[Y]:"fire-fcm",[K]:"fire-fcm-compat",[G]:"fire-perf",[Q]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s["b"]("app","Firebase",de);
/**
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
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
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
 */const _e=re;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s["o"])()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if(Object(s["m"])(n,a.options)&&Object(s["m"])(r,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new i["b"](o);for(const i of ce.values())c.addComponent(i);const l=new pe(n,r,c);return ae.set(o,l),l}function ve(e=se){const t=ae.get(e);if(!t&&e===se)return me();if(!t)throw fe.create("no-app",{appName:e});return t}function ge(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}ue(new i["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
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
 */
const ye="firebase-heartbeat-database",be=1,Ce="firebase-heartbeat-store";let we=null;function Ee(){return we||(we=I(ye,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch(e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})})),we}async function Ie(e){try{const t=await Ee();return t.transaction(Ce).objectStore(Ce).get(Te(e))}catch(t){if(t instanceof s["c"])R.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function ke(e,t){try{const n=await Ee(),i=n.transaction(Ce,"readwrite"),r=i.objectStore(Ce);return await r.put(t,Te(e)),i.done}catch(n){if(n instanceof s["c"])R.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Te(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Se=1024,Oe=2592e6;class xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Oe}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),i=Object(s["i"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Se){const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),Re(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Re(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["t"])()&&Object(s["F"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Re(e){return Object(s["i"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Ae(e){ue(new i["a"]("platform-logger",e=>new x(e),"PRIVATE")),ue(new i["a"]("heartbeat",e=>new xe(e),"PRIVATE")),ge(P,D,e),ge(P,D,"esm2017"),ge("fire-js","")}Ae("")},"7c01":function(e,t,n){"use strict";var i=n("51b0");n.d(t,"a",(function(){return i["a"]})),n.d(t,"b",(function(){return i["b"]})),n.d(t,"c",(function(){return i["c"]})),n.d(t,"d",(function(){return i["d"]}))},bc7b:function(e,t,n){"use strict";var i=n("589b");n.d(t,"a",(function(){return i["e"]}));var r="firebase",s="9.15.0";
/**
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
 */
Object(i["f"])(r,s,"app")},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(r(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===s(e,-1);return e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,c=0;c<o;c++)if(r[c]!==s[c]){a=c;break}var l=[];for(c=a;c<r.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
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
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function u(e){i.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.a4eabcd2.js.map