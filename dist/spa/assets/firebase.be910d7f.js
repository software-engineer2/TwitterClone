var ld=Object.defineProperty,dd=Object.defineProperties;var fd=Object.getOwnPropertyDescriptors;var ga=Object.getOwnPropertySymbols;var md=Object.prototype.hasOwnProperty,gd=Object.prototype.propertyIsEnumerable;var pa=(n,e,t)=>e in n?ld(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ya=(n,e)=>{for(var t in e||(e={}))md.call(e,t)&&pa(n,t,e[t]);if(ga)for(var t of ga(e))gd.call(e,t)&&pa(n,t,e[t]);return n},wa=(n,e)=>dd(n,fd(e));/**
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
 */const Yc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},pd=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(t[h],t[l],t[d],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const l=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const p=u<<6&192|l;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},wd=function(n){const e=Yc(n);return yd.encodeByteArray(e,!0)},Hs=function(n){return wd(n).replace(/\./g,"")};function Qs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vd(t)||(n[t]=Qs(n[t],e[t]));return n}function vd(n){return n!=="__proto__"}/**
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
 */class Id{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function bd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Hs(JSON.stringify(t)),Hs(JSON.stringify(o)),a].join(".")}/**
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
 */function bt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Td(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sd(){return typeof self=="object"&&self.self===self}function _d(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ad(){return bt().indexOf("Electron/")>=0}function Cd(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nd(){return bt().indexOf("MSAppHost/")>=0}function xd(){return!Td()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xc(){return typeof indexedDB=="object"}function kd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Md="FirebaseError";class cs extends Error{constructor(e,t,s){super(t);this.code=e,this.customData=s,this.name=Md,Object.setPrototypeOf(this,cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Rd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new cs(r,a,s)}}function Rd(n,e){return n.replace(Ld,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ld=/\{\$([^}]+)}/g;/**
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
 */function va(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ui(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Ia(i)&&Ia(o)){if(!ui(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Ia(n){return n!==null&&typeof n=="object"}function Od(n,e){const t=new Pd(n,e);return t.subscribe.bind(t)}class Pd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Vd(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Gr),r.error===void 0&&(r.error=Gr),r.complete===void 0&&(r.complete=Gr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gr(){}/**
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
 */function H(n){return n&&n._delegate?n._delegate:n}class Et{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lt="[DEFAULT]";/**
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
 */class Fd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Id;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ud(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lt){return this.instances.has(e)}getOptions(e=lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=lt){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bd(n){return n===lt?void 0:n}function Ud(n){return n.instantiationMode==="EAGER"}/**
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
 */class $d{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const $i=[];var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const Jc={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},qd=M.INFO,jd={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Kd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=jd[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qi{constructor(e){this.name=e,this._logLevel=qd,this._logHandler=Kd,this._userLogHandler=null,$i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}function Gd(n){$i.forEach(e=>{e.setLogLevel(n)})}function zd(n,e){for(const t of $i){let s=null;e&&e.level&&(s=Jc[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s!=null?s:r.logLevel)&&n({level:M[i].toLowerCase(),message:a,args:o,type:r.name})}}}const Wd=(n,e)=>e.some(t=>n instanceof t);let ba,Ea;function Hd(){return ba||(ba=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qd(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zc=new WeakMap,hi=new WeakMap,eu=new WeakMap,zr=new WeakMap,ji=new WeakMap;function Yd(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(We(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zc.set(t,n)}).catch(()=>{}),ji.set(e,n),e}function Xd(n){if(hi.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});hi.set(n,e)}let li={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||eu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return We(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jd(n){li=n(li)}function Zd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Wr(this),e,...t);return eu.set(s,e.sort?e.sort():[e]),We(s)}:Qd().includes(n)?function(...e){return n.apply(Wr(this),e),We(Zc.get(this))}:function(...e){return We(n.apply(Wr(this),e))}}function ef(n){return typeof n=="function"?Zd(n):(n instanceof IDBTransaction&&Xd(n),Wd(n,Hd())?new Proxy(n,li):n)}function We(n){if(n instanceof IDBRequest)return Yd(n);if(zr.has(n))return zr.get(n);const e=ef(n);return e!==n&&(zr.set(n,e),ji.set(e,n)),e}const Wr=n=>ji.get(n);function tf(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=We(o);return s&&o.addEventListener("upgradeneeded",c=>{s(We(o.result),c.oldVersion,c.newVersion,We(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const nf=["get","getKey","getAll","getAllKeys","count"],sf=["put","add","delete","clear"],Hr=new Map;function Ta(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hr.get(e))return Hr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=sf.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nf.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return Hr.set(e,i),i}Jd(n=>wa(ya({},n),{get:(e,t,s)=>Ta(e,t)||n.get(e,t,s),has:(e,t)=>!!Ta(e,t)||n.has(e,t)}));/**
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
 */class rf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(of(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function of(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",Sa="0.7.24";/**
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
 */const Ki=new qi("@firebase/app"),af="@firebase/app-compat",cf="@firebase/analytics-compat",uf="@firebase/analytics",hf="@firebase/app-check-compat",lf="@firebase/app-check",df="@firebase/auth",ff="@firebase/auth-compat",mf="@firebase/database",gf="@firebase/database-compat",pf="@firebase/functions",yf="@firebase/functions-compat",wf="@firebase/installations",vf="@firebase/installations-compat",If="@firebase/messaging",bf="@firebase/messaging-compat",Ef="@firebase/performance",Tf="@firebase/performance-compat",Sf="@firebase/remote-config",_f="@firebase/remote-config-compat",Df="@firebase/storage",Af="@firebase/storage-compat",Cf="@firebase/firestore",Nf="@firebase/firestore-compat",xf="firebase",kf="9.8.1";/**
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
 */const Tt="[DEFAULT]",Mf={[di]:"fire-core",[af]:"fire-core-compat",[uf]:"fire-analytics",[cf]:"fire-analytics-compat",[lf]:"fire-app-check",[hf]:"fire-app-check-compat",[df]:"fire-auth",[ff]:"fire-auth-compat",[mf]:"fire-rtdb",[gf]:"fire-rtdb-compat",[pf]:"fire-fn",[yf]:"fire-fn-compat",[wf]:"fire-iid",[vf]:"fire-iid-compat",[If]:"fire-fcm",[bf]:"fire-fcm-compat",[Ef]:"fire-perf",[Tf]:"fire-perf-compat",[Sf]:"fire-rc",[_f]:"fire-rc-compat",[Df]:"fire-gcs",[Af]:"fire-gcs-compat",[Cf]:"fire-fst",[Nf]:"fire-fst-compat","fire-js":"fire-js",[xf]:"fire-js-all"};/**
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
 */const Ye=new Map,Un=new Map;function Ys(n,e){try{n.container.addComponent(e)}catch(t){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tu(n,e){n.container.addOrOverwriteComponent(e)}function tn(n){const e=n.name;if(Un.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;Un.set(e,n);for(const t of Ye.values())Ys(t,n);return!0}function nu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Rf(n,e,t=Tt){nu(n,e).clearInstance(t)}function Lf(){Un.clear()}/**
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
 */const Of={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Xe=new yr("app","Firebase",Of);/**
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
 */class Pf{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xe.create("app-deleted",{appName:this._name})}}/**
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
 */const Gi=kf;function su(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},e),s=t.name;if(typeof s!="string"||!s)throw Xe.create("bad-app-name",{appName:String(s)});const r=Ye.get(s);if(r){if(ui(n,r.options)&&ui(t,r.config))return r;throw Xe.create("duplicate-app",{appName:s})}const i=new $d(s);for(const a of Un.values())i.addComponent(a);const o=new Pf(n,t,i);return Ye.set(s,o),o}function Vf(n=Tt){const e=Ye.get(n);if(!e)throw Xe.create("no-app",{appName:n});return e}function Ff(){return Array.from(Ye.values())}async function ru(n){const e=n.name;Ye.has(e)&&(Ye.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function He(n,e,t){var s;let r=(s=Mf[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ki.warn(a.join(" "));return}tn(new Et(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function iu(n,e){if(n!==null&&typeof n!="function")throw Xe.create("invalid-log-argument");zd(n,e)}function ou(n){Gd(n)}/**
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
 */const Bf="firebase-heartbeat-database",Uf=1,$n="firebase-heartbeat-store";let Qr=null;function au(){return Qr||(Qr=tf(Bf,Uf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($n)}}}).catch(n=>{throw Xe.create("storage-open",{originalErrorMessage:n.message})})),Qr}async function $f(n){try{return(await au()).transaction($n).objectStore($n).get(cu(n))}catch(e){throw Xe.create("storage-get",{originalErrorMessage:e.message})}}async function _a(n,e){try{const s=(await au()).transaction($n,"readwrite");return await s.objectStore($n).put(e,cu(n)),s.done}catch(t){throw Xe.create("storage-set",{originalErrorMessage:t.message})}}function cu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qf=1024,jf=30*24*60*60*1e3;class Kf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Da();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=jf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Da(),{heartbeatsToSend:t,unsentEntries:s}=Gf(this._heartbeatsCache.heartbeats),r=Hs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Da(){return new Date().toISOString().substring(0,10)}function Gf(n,e=qf){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Aa(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Aa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xc()?kd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $f(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return _a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return _a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Aa(n){return Hs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Wf(n){tn(new Et("platform-logger",e=>new rf(e),"PRIVATE")),tn(new Et("heartbeat",e=>new Kf(e),"PRIVATE")),He(di,Sa,n),He(di,Sa,"esm2017"),He("fire-js","")}Wf("");var Hf=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Gi,_DEFAULT_ENTRY_NAME:Tt,_addComponent:Ys,_addOrOverwriteComponent:tu,_apps:Ye,_clearComponents:Lf,_components:Un,_getProvider:nu,_registerComponent:tn,_removeServiceInstance:Rf,deleteApp:ru,getApp:Vf,getApps:Ff,initializeApp:su,onLog:iu,registerVersion:He,setLogLevel:ou,FirebaseError:cs},Symbol.toStringTag,{value:"Module"})),Qf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b,zi=zi||{},D=Qf||self;function Xs(){}function fi(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function us(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Yf(n){return Object.prototype.hasOwnProperty.call(n,Yr)&&n[Yr]||(n[Yr]=++Xf)}var Yr="closure_uid_"+(1e9*Math.random()>>>0),Xf=0;function Jf(n,e,t){return n.call.apply(n.bind,arguments)}function Zf(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function ue(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ue=Jf:ue=Zf,ue.apply(null,arguments)}function Ms(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function le(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function it(){this.s=this.s,this.o=this.o}var em=0;it.prototype.s=!1;it.prototype.na=function(){!this.s&&(this.s=!0,this.M(),em!=0)&&Yf(this)};it.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},hu=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const s=n.length,r=typeof n=="string"?n.split(""):n;for(let i=0;i<s;i++)i in r&&e.call(t,r[i],i,n)};function tm(n){e:{var e=zm;const t=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<t;r++)if(r in s&&e.call(void 0,s[r],r,n)){e=r;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Ca(n){return Array.prototype.concat.apply([],arguments)}function Wi(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Js(n){return/^[\s\xa0]*$/.test(n)}var Na=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function we(n,e){return n.indexOf(e)!=-1}function Xr(n,e){return n<e?-1:n>e?1:0}var ve;e:{var xa=D.navigator;if(xa){var ka=xa.userAgent;if(ka){ve=ka;break e}}ve=""}function Hi(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function lu(n){const e={};for(const t in n)e[t]=n[t];return e}var Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function du(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<Ma.length;i++)t=Ma[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Qi(n){return Qi[" "](n),n}Qi[" "]=Xs;function nm(n){var e=im;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var sm=we(ve,"Opera"),nn=we(ve,"Trident")||we(ve,"MSIE"),fu=we(ve,"Edge"),mi=fu||nn,mu=we(ve,"Gecko")&&!(we(ve.toLowerCase(),"webkit")&&!we(ve,"Edge"))&&!(we(ve,"Trident")||we(ve,"MSIE"))&&!we(ve,"Edge"),rm=we(ve.toLowerCase(),"webkit")&&!we(ve,"Edge");function gu(){var n=D.document;return n?n.documentMode:void 0}var Zs;e:{var Jr="",Zr=function(){var n=ve;if(mu)return/rv:([^\);]+)(\)|;)/.exec(n);if(fu)return/Edge\/([\d\.]+)/.exec(n);if(nn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(rm)return/WebKit\/(\S+)/.exec(n);if(sm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Zr&&(Jr=Zr?Zr[1]:""),nn){var ei=gu();if(ei!=null&&ei>parseFloat(Jr)){Zs=String(ei);break e}}Zs=Jr}var im={};function om(){return nm(function(){let n=0;const e=Na(String(Zs)).split("."),t=Na("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=Xr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Xr(r[2].length==0,i[2].length==0)||Xr(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var gi;if(D.document&&nn){var Ra=gu();gi=Ra||parseInt(Zs,10)||void 0}else gi=void 0;var am=gi,cm=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{D.addEventListener("test",Xs,e),D.removeEventListener("test",Xs,e)}catch{}return n}();function fe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};function qn(n,e){if(fe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(mu){e:{try{Qi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:um[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&qn.Z.h.call(this)}}le(qn,fe);var um={2:"touch",3:"pen",4:"mouse"};qn.prototype.h=function(){qn.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var hs="closure_listenable_"+(1e6*Math.random()|0),hm=0;function lm(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ia=r,this.key=++hm,this.ca=this.fa=!1}function wr(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function vr(n){this.src=n,this.g={},this.h=0}vr.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=yi(n,e,s,r);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new lm(e,this.src,i,!!s,r),e.fa=t,n.push(e)),e};function pi(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=uu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(wr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function yi(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==s)return r}return-1}var Yi="closure_lm_"+(1e6*Math.random()|0),ti={};function pu(n,e,t,s,r){if(s&&s.once)return wu(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pu(n,e[i],t,s,r);return null}return t=Zi(t),n&&n[hs]?n.N(e,t,us(s)?!!s.capture:!!s,r):yu(n,e,t,!1,s,r)}function yu(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=us(r)?!!r.capture:!!r,a=Ji(n);if(a||(n[Yi]=a=new vr(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=dm(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)cm||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(Iu(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function dm(){function n(t){return e.call(n.src,n.listener,t)}var e=fm;return n}function wu(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wu(n,e[i],t,s,r);return null}return t=Zi(t),n&&n[hs]?n.O(e,t,us(s)?!!s.capture:!!s,r):yu(n,e,t,!0,s,r)}function vu(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)vu(n,e[i],t,s,r);else s=us(s)?!!s.capture:!!s,t=Zi(t),n&&n[hs]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=yi(i,t,s,r),-1<t&&(wr(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Ji(n))&&(e=n.g[e.toString()],n=-1,e&&(n=yi(e,t,s,r)),(t=-1<n?e[n]:null)&&Xi(t))}function Xi(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[hs])pi(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Iu(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Ji(e))?(pi(t,n),t.h==0&&(t.src=null,e[Yi]=null)):wr(n)}}}function Iu(n){return n in ti?ti[n]:ti[n]="on"+n}function fm(n,e){if(n.ca)n=!0;else{e=new qn(e,this);var t=n.listener,s=n.ia||n.src;n.fa&&Xi(n),n=t.call(s,e)}return n}function Ji(n){return n=n[Yi],n instanceof vr?n:null}var ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zi(n){return typeof n=="function"?n:(n[ni]||(n[ni]=function(e){return n.handleEvent(e)}),n[ni])}function te(){it.call(this),this.i=new vr(this),this.P=this,this.I=null}le(te,it);te.prototype[hs]=!0;te.prototype.removeEventListener=function(n,e,t,s){vu(this,n,e,t,s)};function he(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new fe(e,n);else if(e instanceof fe)e.target=e.target||n;else{var r=e;e=new fe(s,n),du(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=Rs(o,s,!0,e)&&r}if(o=e.g=n,r=Rs(o,s,!0,e)&&r,r=Rs(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=Rs(o,s,!1,e)&&r}te.prototype.M=function(){if(te.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)wr(t[s]);delete n.g[e],n.h--}}this.I=null};te.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};te.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Rs(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&pi(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var eo=D.JSON.stringify;function mm(){var n=Eu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class gm{constructor(){this.h=this.g=null}add(e,t){const s=bu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var bu=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new pm,n=>n.reset());class pm{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ym(n){D.setTimeout(()=>{throw n},0)}function to(n,e){wi||wm(),vi||(wi(),vi=!0),Eu.add(n,e)}var wi;function wm(){var n=D.Promise.resolve(void 0);wi=function(){n.then(vm)}}var vi=!1,Eu=new gm;function vm(){for(var n;n=mm();){try{n.h.call(n.g)}catch(t){ym(t)}var e=bu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}vi=!1}function Ir(n,e){te.call(this),this.h=n||1,this.g=e||D,this.j=ue(this.kb,this),this.l=Date.now()}le(Ir,te);b=Ir.prototype;b.da=!1;b.S=null;b.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),he(this,"tick"),this.da&&(no(this),this.start()))}};b.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function no(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}b.M=function(){Ir.Z.M.call(this),no(this),delete this.g};function so(n,e,t){if(typeof n=="function")t&&(n=ue(n,t));else if(n&&typeof n.handleEvent=="function")n=ue(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:D.setTimeout(n,e||0)}function Tu(n){n.g=so(()=>{n.g=null,n.i&&(n.i=!1,Tu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Im extends it{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tu(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jn(n){it.call(this),this.h=n,this.g={}}le(jn,it);var La=[];function Su(n,e,t,s){Array.isArray(t)||(t&&(La[0]=t.toString()),t=La);for(var r=0;r<t.length;r++){var i=pu(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function _u(n){Hi(n.g,function(e,t){this.g.hasOwnProperty(t)&&Xi(e)},n),n.g={}}jn.prototype.M=function(){jn.Z.M.call(this),_u(this)};jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function br(){this.g=!0}br.prototype.Aa=function(){this.g=!1};function bm(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function Em(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function Yt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sm(n,t)+(s?" "+s:"")})}function Tm(n,e){n.info(function(){return"TIMEOUT: "+e})}br.prototype.info=function(){};function Sm(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return eo(t)}catch{return e}}var Pt={},Oa=null;function Er(){return Oa=Oa||new te}Pt.Ma="serverreachability";function Du(n){fe.call(this,Pt.Ma,n)}le(Du,fe);function Kn(n){const e=Er();he(e,new Du(e,n))}Pt.STAT_EVENT="statevent";function Au(n,e){fe.call(this,Pt.STAT_EVENT,n),this.stat=e}le(Au,fe);function Ie(n){const e=Er();he(e,new Au(e,n))}Pt.Na="timingevent";function Cu(n,e){fe.call(this,Pt.Na,n),this.size=e}le(Cu,fe);function ls(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},e)}var Tr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Nu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ro(){}ro.prototype.h=null;function Pa(n){return n.h||(n.h=n.i())}function xu(){}var ds={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function io(){fe.call(this,"d")}le(io,fe);function oo(){fe.call(this,"c")}le(oo,fe);var Ii;function Sr(){}le(Sr,ro);Sr.prototype.g=function(){return new XMLHttpRequest};Sr.prototype.i=function(){return{}};Ii=new Sr;function fs(n,e,t,s){this.l=n,this.j=e,this.m=t,this.X=s||1,this.V=new jn(this),this.P=_m,n=mi?125:void 0,this.W=new Ir(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ku}function ku(){this.i=null,this.g="",this.h=!1}var _m=45e3,bi={},er={};b=fs.prototype;b.setTimeout=function(n){this.P=n};function Ei(n,e,t){n.K=1,n.v=Dr(Ve(e)),n.s=t,n.U=!0,Mu(n,null)}function Mu(n,e){n.F=Date.now(),ms(n),n.A=Ve(n.v);var t=n.A,s=n.X;Array.isArray(s)||(s=[String(s)]),Bu(t.h,"t",s),n.C=0,t=n.l.H,n.h=new ku,n.g=ih(n.l,t?e:null,!n.s),0<n.O&&(n.L=new Im(ue(n.Ia,n,n.g),n.O)),Su(n.V,n.g,"readystatechange",n.gb),e=n.H?lu(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Kn(1),bm(n.j,n.u,n.A,n.m,n.X,n.s)}b.gb=function(n){n=n.target;const e=this.L;e&&Pe(n)==3?e.l():this.Ia(n)};b.Ia=function(n){try{if(n==this.g)e:{const h=Pe(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||mi||this.g&&(this.h.h||this.g.ga()||Ua(this.g)))){this.I||h!=4||e==7||(e==8||0>=l?Kn(3):Kn(2)),_r(this);var t=this.g.ba();this.N=t;t:if(Ru(this)){var s=Ua(this.g);n="";var r=s.length,i=Pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){yt(this),Rn(this);var o="";break t}this.h.i=new D.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,Em(this.j,this.u,this.A,this.m,this.X,h,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Js(a)){var u=a;break t}}u=null}if(t=u)Yt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ti(this,t);else{this.i=!1,this.o=3,Ie(12),yt(this),Rn(this);break e}}this.U?(Lu(this,h,o),mi&&this.i&&h==3&&(Su(this.V,this.W,"tick",this.fb),this.W.start())):(Yt(this.j,this.m,o,null),Ti(this,o)),h==4&&yt(this),this.i&&!this.I&&(h==4?th(this.l,this):(this.i=!1,ms(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ie(12)):(this.o=0,Ie(13)),yt(this),Rn(this)}}}catch{}finally{}};function Ru(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function Lu(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=Dm(n,t),r==er){e==4&&(n.o=4,Ie(14),s=!1),Yt(n.j,n.m,null,"[Incomplete Response]");break}else if(r==bi){n.o=4,Ie(15),Yt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Yt(n.j,n.m,r,null),Ti(n,r);Ru(n)&&r!=er&&r!=bi&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ie(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),po(e),e.L=!0,Ie(11))):(Yt(n.j,n.m,t,"[Invalid Chunked Response]"),yt(n),Rn(n))}b.fb=function(){if(this.g){var n=Pe(this.g),e=this.g.ga();this.C<e.length&&(_r(this),Lu(this,n,e),this.i&&n!=4&&ms(this))}};function Dm(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?er:(t=Number(e.substring(t,s)),isNaN(t)?bi:(s+=1,s+t>e.length?er:(e=e.substr(s,t),n.C=s+t,e)))}b.cancel=function(){this.I=!0,yt(this)};function ms(n){n.Y=Date.now()+n.P,Ou(n,n.P)}function Ou(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ls(ue(n.eb,n),e)}function _r(n){n.B&&(D.clearTimeout(n.B),n.B=null)}b.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Tm(this.j,this.A),this.K!=2&&(Kn(3),Ie(17)),yt(this),this.o=2,Rn(this)):Ou(this,this.Y-n)};function Rn(n){n.l.G==0||n.I||th(n.l,n)}function yt(n){_r(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,no(n.W),_u(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Ti(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Si(t.i,n))){if(t.I=n.N,!n.J&&Si(t.i,n)&&t.G==3){try{var s=t.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)rr(t),Nr(t);else break e;go(t),Ie(18)}}else t.ta=r[1],0<t.ta-t.U&&37500>r[2]&&t.N&&t.A==0&&!t.v&&(t.v=ls(ue(t.ab,t),6e3));if(1>=qu(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else wt(t,11)}else if((n.J||t.g==n)&&rr(t),!Js(e))for(r=t.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const h=u[3];h!=null&&(t.ma=h,t.h.info("VER="+t.ma));const l=u[4];l!=null&&(t.za=l,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.K=s,t.h.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.i;!i.g&&(we(p,"spdy")||we(p,"quic")||we(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(uo(i,i.h),i.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.sa=T,B(s.F,s.D,T))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),s=t;var o=n;if(s.oa=rh(s,s.H?s.la:null,s.W),o.J){ju(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(_r(a),ms(a)),s.g=o}else Zu(s);0<t.l.length&&xr(t)}else u[0]!="stop"&&u[0]!="close"||wt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?wt(t,7):mo(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}Kn(4)}catch{}}function Am(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(fi(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function ao(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(fi(n)||typeof n=="string")hu(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(fi(n)||typeof n=="string"){t=[];for(var s=n.length,r=0;r<s;r++)t.push(r)}else for(r in t=[],s=0,n)t[s++]=r;s=Am(n),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}}function gn(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var s=0;s<t;s+=2)this.set(arguments[s],arguments[s+1])}else if(n)if(n instanceof gn)for(t=n.T(),s=0;s<t.length;s++)this.set(t[s],n.get(t[s]));else for(s in n)this.set(s,n[s])}b=gn.prototype;b.R=function(){co(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};b.T=function(){return co(this),this.g.concat()};function co(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var s=n.g[e];St(n.h,s)&&(n.g[t++]=s),e++}n.g.length=t}if(n.i!=n.g.length){var r={};for(t=e=0;e<n.g.length;)s=n.g[e],St(r,s)||(n.g[t++]=s,r[s]=1),e++;n.g.length=t}}b.get=function(n,e){return St(this.h,n)?this.h[n]:e};b.set=function(n,e){St(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};b.forEach=function(n,e){for(var t=this.T(),s=0;s<t.length;s++){var r=t[s],i=this.get(r);n.call(e,i,r,this)}};function St(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var Pu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Cm(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function _t(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof _t){this.g=e!==void 0?e:n.g,tr(this,n.j),this.s=n.s,nr(this,n.i),sr(this,n.m),this.l=n.l,e=n.h;var t=new Gn;t.i=e.i,e.g&&(t.g=new gn(e.g),t.h=e.h),Va(this,t),this.o=n.o}else n&&(t=String(n).match(Pu))?(this.g=!!e,tr(this,t[1]||"",!0),this.s=Ln(t[2]||""),nr(this,t[3]||"",!0),sr(this,t[4]),this.l=Ln(t[5]||"",!0),Va(this,t[6]||"",!0),this.o=Ln(t[7]||"")):(this.g=!!e,this.h=new Gn(null,this.g))}_t.prototype.toString=function(){var n=[],e=this.j;e&&n.push(kn(e,Fa,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(kn(e,Fa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(kn(t,t.charAt(0)=="/"?Rm:Mm,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",kn(t,Om)),n.join("")};function Ve(n){return new _t(n)}function tr(n,e,t){n.j=t?Ln(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function nr(n,e,t){n.i=t?Ln(e,!0):e}function sr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Va(n,e,t){e instanceof Gn?(n.h=e,Pm(n.h,n.g)):(t||(e=kn(e,Lm)),n.h=new Gn(e,n.g))}function B(n,e,t){n.h.set(e,t)}function Dr(n){return B(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Nm(n){return n instanceof _t?Ve(n):new _t(n,void 0)}function xm(n,e,t,s){var r=new _t(null,void 0);return n&&tr(r,n),e&&nr(r,e),t&&sr(r,t),s&&(r.l=s),r}function Ln(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function kn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,km),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function km(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Fa=/[#\/\?@]/g,Mm=/[#\?:]/g,Rm=/[#\?]/g,Lm=/[#\?@]/g,Om=/#/g;function Gn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function ot(n){n.g||(n.g=new gn,n.h=0,n.i&&Cm(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}b=Gn.prototype;b.add=function(n,e){ot(this),this.i=null,n=pn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Vu(n,e){ot(n),e=pn(n,e),St(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,St(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&co(n)))}function Fu(n,e){return ot(n),e=pn(n,e),St(n.g.h,e)}b.forEach=function(n,e){ot(this),this.g.forEach(function(t,s){hu(t,function(r){n.call(e,r,s,this)},this)},this)};b.T=function(){ot(this);for(var n=this.g.R(),e=this.g.T(),t=[],s=0;s<e.length;s++)for(var r=n[s],i=0;i<r.length;i++)t.push(e[s]);return t};b.R=function(n){ot(this);var e=[];if(typeof n=="string")Fu(this,n)&&(e=Ca(e,this.g.get(pn(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Ca(e,n[t])}return e};b.set=function(n,e){return ot(this),this.i=null,n=pn(this,n),Fu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};b.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function Bu(n,e,t){Vu(n,e),0<t.length&&(n.i=null,n.g.set(pn(n,e),Wi(t)),n.h+=t.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var s=e[t],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),n.push(o)}}return this.i=n.join("&")};function pn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Pm(n,e){e&&!n.j&&(ot(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(Vu(this,s),Bu(this,r,t))},n)),n.j=e}var Vm=class{constructor(n,e){this.h=n,this.g=e}};function Uu(n){this.l=n||Fm,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ea&&D.g.Ea()&&D.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fm=10;function $u(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function qu(n){return n.h?1:n.g?n.g.size:0}function Si(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function uo(n,e){n.g?n.g.add(e):n.h=e}function ju(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Uu.prototype.cancel=function(){if(this.i=Ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ku(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Wi(n.i)}function ho(){}ho.prototype.stringify=function(n){return D.JSON.stringify(n,void 0)};ho.prototype.parse=function(n){return D.JSON.parse(n,void 0)};function Bm(){this.g=new ho}function Um(n,e,t){const s=t||"";try{ao(n,function(r,i){let o=r;us(r)&&(o=eo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function $m(n,e){const t=new br;if(D.Image){const s=new Image;s.onload=Ms(Ls,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Ms(Ls,t,s,"TestLoadImage: error",!1,e),s.onabort=Ms(Ls,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ms(Ls,t,s,"TestLoadImage: timeout",!1,e),D.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Ls(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function gs(n){this.l=n.$b||null,this.j=n.ib||!1}le(gs,ro);gs.prototype.g=function(){return new Ar(this.l,this.j)};gs.prototype.i=function(n){return function(){return n}}({});function Ar(n,e){te.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}le(Ar,te);var lo=0;b=Ar.prototype;b.open=function(n,e){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,zn(this)};b.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||D).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=lo};b.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof D.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gu(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Gu(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}b.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ps(this):zn(this),this.readyState==3&&Gu(this)}};b.Ua=function(n){this.g&&(this.response=this.responseText=n,ps(this))};b.Ta=function(n){this.g&&(this.response=n,ps(this))};b.ha=function(){this.g&&ps(this)};function ps(n){n.readyState=4,n.l=null,n.j=null,n.A=null,zn(n)}b.setRequestHeader=function(n,e){this.v.append(n,e)};b.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function zn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qm=D.JSON.parse;function Q(n){te.call(this),this.headers=new gn,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=zu,this.K=this.L=!1}le(Q,te);var zu="",jm=/^https?$/i,Km=["POST","PUT"];b=Q.prototype;b.ea=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ii.g(),this.C=this.u?Pa(this.u):Pa(Ii),this.g.onreadystatechange=ue(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Ba(this,i);return}n=t||"";const r=new gn(this.headers);s&&ao(s,function(i,o){r.set(o,i)}),s=tm(r.T()),t=D.FormData&&n instanceof D.FormData,!(0<=uu(Km,e))||s||t||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qu(this),0<this.B&&((this.K=Gm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ue(this.pa,this)):this.A=so(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Ba(this,i)}};function Gm(n){return nn&&om()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function zm(n){return n.toLowerCase()=="content-type"}b.pa=function(){typeof zi!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function Ba(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Wu(n),Cr(n)}function Wu(n){n.D||(n.D=!0,he(n,"complete"),he(n,"error"))}b.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,he(this,"complete"),he(this,"abort"),Cr(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cr(this,!0)),Q.Z.M.call(this)};b.Fa=function(){this.s||(this.F||this.v||this.l?Hu(this):this.cb())};b.cb=function(){Hu(this)};function Hu(n){if(n.h&&typeof zi!="undefined"&&(!n.C[1]||Pe(n)!=4||n.ba()!=2)){if(n.v&&Pe(n)==4)so(n.Fa,0,n);else if(he(n,"readystatechange"),Pe(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(Pu)[1]||null;if(!r&&D.self&&D.self.location){var i=D.self.location.protocol;r=i.substr(0,i.length-1)}s=!jm.test(r?r.toLowerCase():"")}t=s}if(t)he(n,"complete"),he(n,"success");else{n.m=6;try{var o=2<Pe(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",Wu(n)}}finally{Cr(n)}}}}function Cr(n,e){if(n.g){Qu(n);const t=n.g,s=n.C[0]?Xs:null;n.g=null,n.C=null,e||he(n,"ready");try{t.onreadystatechange=s}catch{}}}function Qu(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}function Pe(n){return n.g?n.g.readyState:0}b.ba=function(){try{return 2<Pe(this)?this.g.status:-1}catch{return-1}};b.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),qm(e)}};function Ua(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case zu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}b.Da=function(){return this.m};b.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wm(n){let e="";return Hi(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function fo(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Wm(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):B(n,e,t))}function _n(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Yu(n){this.za=0,this.l=[],this.h=new br,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=_n("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=_n("baseRetryDelayMs",5e3,n),this.$a=_n("retryDelaySeedMs",1e4,n),this.Ya=_n("forwardChannelMaxRetries",2,n),this.ra=_n("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new Uu(n&&n.concurrentRequestLimit),this.Ca=new Bm,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}b=Yu.prototype;b.ma=8;b.G=1;function mo(n){if(Xu(n),n.G==3){var e=n.V++,t=Ve(n.F);B(t,"SID",n.J),B(t,"RID",e),B(t,"TYPE","terminate"),ys(n,t),e=new fs(n,n.h,e,void 0),e.K=2,e.v=Dr(Ve(t)),t=!1,D.navigator&&D.navigator.sendBeacon&&(t=D.navigator.sendBeacon(e.v.toString(),"")),!t&&D.Image&&(new Image().src=e.v,t=!0),t||(e.g=ih(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ms(e)}sh(n)}b.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Nr(n){n.g&&(po(n),n.g.cancel(),n.g=null)}function Xu(n){Nr(n),n.u&&(D.clearTimeout(n.u),n.u=null),rr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function si(n,e){n.l.push(new Vm(n.Za++,e)),n.G==3&&xr(n)}function xr(n){$u(n.i)||n.m||(n.m=!0,to(n.Ha,n),n.C=0)}function Hm(n,e){return qu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=ls(ue(n.Ha,n,e),nh(n,n.C)),n.C++,!0)}b.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const r=new fs(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=lu(i),du(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var s=this.l[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Ju(this,r,e),t=Ve(this.F),B(t,"RID",n),B(t,"CVER",22),this.D&&B(t,"X-HTTP-Session-Id",this.D),ys(this,t),this.o&&i&&fo(t,this.o,i),uo(this.i,r),this.Ra&&B(t,"TYPE","init"),this.ja?(B(t,"$req",e),B(t,"SID","null"),r.$=!0,Ei(r,t,null)):Ei(r,t,e),this.G=2}}else this.G==3&&(n?$a(this,n):this.l.length==0||$u(this.i)||$a(this))};function $a(n,e){var t;e?t=e.m:t=n.V++;const s=Ve(n.F);B(s,"SID",n.J),B(s,"RID",t),B(s,"AID",n.U),ys(n,s),n.o&&n.s&&fo(s,n.o,n.s),t=new fs(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Ju(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),uo(n.i,t),Ei(t,s,e)}function ys(n,e){n.j&&ao({},function(t,s){B(e,s,t)})}function Ju(n,e,t){t=Math.min(n.l.length,t);var s=n.j?ue(n.j.Oa,n.j,n):null;e:{var r=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Um(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,s}function Zu(n){n.g||n.u||(n.Y=1,to(n.Ga,n),n.A=0)}function go(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=ls(ue(n.Ga,n),nh(n,n.A)),n.A++,!0)}b.Ga=function(){if(this.u=null,eh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=ls(ue(this.bb,this),n)}};b.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ie(10),Nr(this),eh(this))};function po(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function eh(n){n.g=new fs(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=Ve(n.oa);B(e,"RID","rpc"),B(e,"SID",n.J),B(e,"CI",n.N?"0":"1"),B(e,"AID",n.U),ys(n,e),B(e,"TYPE","xmlhttp"),n.o&&n.s&&fo(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Dr(Ve(e)),t.s=null,t.U=!0,Mu(t,n)}b.ab=function(){this.v!=null&&(this.v=null,Nr(this),go(this),Ie(19))};function rr(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function th(n,e){var t=null;if(n.g==e){rr(n),po(n),n.g=null;var s=2}else if(Si(n.i,e))t=e.D,ju(n.i,e),s=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=Er(),he(s,new Cu(s,t,e,r)),xr(n)}else Zu(n);else if(r=e.o,r==3||r==0&&0<n.I||!(s==1&&Hm(n,e)||s==2&&go(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:wt(n,5);break;case 4:wt(n,10);break;case 3:wt(n,6);break;default:wt(n,2)}}}function nh(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function wt(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var s=ue(n.jb,n);t||(t=new _t("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||tr(t,"https"),Dr(t)),$m(t.toString(),s)}else Ie(2);n.G=0,n.j&&n.j.va(e),sh(n),Xu(n)}b.jb=function(n){n?(this.h.info("Successfully pinged google.com"),Ie(2)):(this.h.info("Failed to ping google.com"),Ie(1))};function sh(n){n.G=0,n.I=-1,n.j&&((Ku(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Wi(n.l),n.l.length=0),n.j.ua())}function rh(n,e,t){let s=Nm(t);if(s.i!="")e&&nr(s,e+"."+s.i),sr(s,s.m);else{const r=D.location;s=xm(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,t)}return n.aa&&Hi(n.aa,function(r,i){B(s,i,r)}),e=n.D,t=n.sa,e&&t&&B(s,e,t),B(s,"VER",n.ma),ys(n,s),s}function ih(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new Q(new gs({ib:!0})):new Q(n.qa),e.L=n.H,e}function oh(){}b=oh.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Oa=function(){};function ir(){if(nn&&!(10<=Number(am)))throw Error("Environmental error: no available transport.")}ir.prototype.g=function(n,e){return new _e(n,e)};function _e(n,e){te.call(this),this.g=new Yu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Js(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Js(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new yn(this)}le(_e,te);_e.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),to(ue(n.hb,n,e))),Ie(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=rh(n,null,n.W),xr(n)};_e.prototype.close=function(){mo(this.g)};_e.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,si(this.g,e)}else this.v?(e={},e.__data__=eo(n),si(this.g,e)):si(this.g,n)};_e.prototype.M=function(){this.g.j=null,delete this.j,mo(this.g),delete this.g,_e.Z.M.call(this)};function ah(n){io.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}le(ah,io);function ch(){oo.call(this),this.status=1}le(ch,oo);function yn(n){this.g=n}le(yn,oh);yn.prototype.xa=function(){he(this.g,"a")};yn.prototype.wa=function(n){he(this.g,new ah(n))};yn.prototype.va=function(n){he(this.g,new ch(n))};yn.prototype.ua=function(){he(this.g,"b")};ir.prototype.createWebChannel=ir.prototype.g;_e.prototype.send=_e.prototype.u;_e.prototype.open=_e.prototype.m;_e.prototype.close=_e.prototype.close;Tr.NO_ERROR=0;Tr.TIMEOUT=8;Tr.HTTP_ERROR=6;Nu.COMPLETE="complete";xu.EventType=ds;ds.OPEN="a";ds.CLOSE="b";ds.ERROR="c";ds.MESSAGE="d";te.prototype.listen=te.prototype.N;Q.prototype.listenOnce=Q.prototype.O;Q.prototype.getLastError=Q.prototype.La;Q.prototype.getLastErrorCode=Q.prototype.Da;Q.prototype.getStatus=Q.prototype.ba;Q.prototype.getResponseJson=Q.prototype.Qa;Q.prototype.getResponseText=Q.prototype.ga;Q.prototype.send=Q.prototype.ea;var Qm=function(){return new ir},Ym=function(){return Er()},ri=Tr,Xm=Nu,Jm=Pt,qa={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Zm=gs,Os=xu,eg=Q;const ja="@firebase/firestore";/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */let wn="9.8.0";/**
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
 */const Je=new qi("@firebase/firestore");function _i(){return Je.logLevel}function tg(n){Je.setLogLevel(n)}function w(n,...e){if(Je.logLevel<=M.DEBUG){const t=e.map(yo);Je.debug(`Firestore (${wn}): ${n}`,...t)}}function z(n,...e){if(Je.logLevel<=M.ERROR){const t=e.map(yo);Je.error(`Firestore (${wn}): ${n}`,...t)}}function Wn(n,...e){if(Je.logLevel<=M.WARN){const t=e.map(yo);Je.warn(`Firestore (${wn}): ${n}`,...t)}}function yo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function E(n="Unexpected state"){const e=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: `+n;throw z(e),new Error(e)}function _(n,e){n||E()}function ng(n,e){n||E()}function I(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends cs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Z{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class uh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oe.UNAUTHENTICATED))}shutdown(){}}class rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ig{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new Z;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Z,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Z)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_(typeof s.accessToken=="string"),new uh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _(e===null||typeof e=="string"),new oe(e)}}class og{constructor(e,t,s){this.type="FirstParty",this.user=oe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class ag{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new og(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ug{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(_(typeof t.token=="string"),this.p=t.token,new cg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Se{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.I(s),this.T=s=>t.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function hg(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */Se.A=-1;class hh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=hg(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function A(n,e){return n<e?-1:n>e?1:0}function sn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function lh(n){return n+"\0"}/**
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
 */class j{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return j.fromMillis(Date.now())}static fromDate(e){return j.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new j(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?A(this.nanoseconds,e.nanoseconds):A(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new j(0,0))}static max(){return new S(new j(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ka(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Hn{constructor(e,t,s){t===void 0?t=0:t>e.length&&E(),s===void 0?s=e.length-t:s>e.length-t&&E(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class x extends Hn{construct(e,t,s){return new x(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new x(t)}static emptyPath(){return new x([])}}const lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends Hn{construct(e,t,s){return new Y(e,t,s)}static isValidIdentifier(e){return lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Y(t)}static emptyPath(){return new Y([])}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(Y.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */function dg(){return typeof atob!="undefined"}/**
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
 */class X{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new X(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new X(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return A(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}X.EMPTY_BYTE_STRING=new X("");const fg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(n){if(_(!!n),typeof n=="string"){let e=0;const t=fg.exec(n);if(_(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:U(n.seconds),nanos:U(n.nanos)}}function U(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dt(n){return typeof n=="string"?X.fromBase64String(n):X.fromUint8Array(n)}/**
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
 */function wo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function fh(n){const e=n.mapValue.fields.__previous_value__;return wo(e)?fh(e):e}function Qn(n){const e=Ze(n.mapValue.fields.__local_write_time__.timestampValue);return new j(e.seconds,e.nanos)}/**
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
 */class mg{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Fe{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fe&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ws(n){return n==null}function Yn(n){return n===0&&1/n==-1/0}function mh(n){return typeof n=="number"&&Number.isInteger(n)&&!Yn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(x.fromString(e))}static fromName(e){return new v(x.fromString(e).popFirst(5))}static empty(){return new v(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return x.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new x(e.slice()))}}/**
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
 */const ze={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},qs={nullValue:"NULL_VALUE"};function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wo(n)?4:gh(n)?9007199254740991:10:E()}function Le(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qn(n).isEqual(Qn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ze(s.timestampValue),o=Ze(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Dt(s.bytesValue).isEqual(Dt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return U(s.geoPointValue.latitude)===U(r.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return U(s.integerValue)===U(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=U(s.doubleValue),o=U(r.doubleValue);return i===o?Yn(i)===Yn(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return sn(n.arrayValue.values||[],e.arrayValue.values||[],Le);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ka(i)!==Ka(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Le(i[a],o[a])))return!1;return!0}(n,e);default:return E()}}function Xn(n,e){return(n.values||[]).find(t=>Le(t,e))!==void 0}function et(n,e){if(n===e)return 0;const t=At(n),s=At(e);if(t!==s)return A(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return A(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=U(r.integerValue||r.doubleValue),a=U(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ga(n.timestampValue,e.timestampValue);case 4:return Ga(Qn(n),Qn(e));case 5:return A(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Dt(r),a=Dt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=A(o[c],a[c]);if(u!==0)return u}return A(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=A(U(r.latitude),U(i.latitude));return o!==0?o:A(U(r.longitude),U(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=et(o[c],a[c]);if(u)return u}return A(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ze.mapValue&&i===ze.mapValue)return 0;if(r===ze.mapValue)return 1;if(i===ze.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=A(a[h],u[h]);if(l!==0)return l;const d=et(o[a[h]],c[u[h]]);if(d!==0)return d}return A(a.length,u.length)}(n.mapValue,e.mapValue);default:throw E()}}function Ga(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return A(n,e);const t=Ze(n),s=Ze(e),r=A(t.seconds,s.seconds);return r!==0?r:A(t.nanos,s.nanos)}function Jt(n){return Di(n)}function Di(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Ze(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Dt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Di(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Di(s.fields[a])}`;return i+"}"}(n.mapValue):E();var e,t}function Ct(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ai(n){return!!n&&"integerValue"in n}function Jn(n){return!!n&&"arrayValue"in n}function za(n){return!!n&&"nullValue"in n}function Wa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function js(n){return!!n&&"mapValue"in n}function On(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Vt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=On(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=On(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function gg(n){return"nullValue"in n?qs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ct(Fe.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:E()}function pg(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ct(Fe.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?ze:E()}function Ha(n,e){const t=et(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Qa(n,e){const t=et(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class de{constructor(e){this.value=e}static empty(){return new de({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!js(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=On(t)}setAll(e){let t=Y.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=On(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());js(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Le(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];js(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Vt(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new de(On(this.value))}}function ph(n){const e=[];return Vt(n.fields,(t,s)=>{const r=new Y([t]);if(js(s)){const i=ph(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rn(e)}/**
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
 */class O{constructor(e,t,s,r,i,o){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new O(e,0,S.min(),S.min(),de.empty(),0)}static newFoundDocument(e,t,s){return new O(e,1,t,S.min(),s,0)}static newNoDocument(e,t){return new O(e,2,t,S.min(),de.empty(),0)}static newUnknownDocument(e,t){return new O(e,3,t,S.min(),de.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof O&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new O(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class yh{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function Ci(n){return n.fields.find(e=>e.kind===2)}function dt(n){return n.fields.filter(e=>e.kind!==2)}yh.UNKNOWN_ID=-1;class yg{constructor(e,t){this.fieldPath=e,this.kind=t}}class or{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new or(0,xe.min())}}function wh(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=S.fromTimestamp(s===1e9?new j(t+1,0):new j(t,s));return new xe(r,v.empty(),e)}function wg(n){return new xe(n.readTime,n.key,-1)}class xe{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new xe(S.min(),v.empty(),-1)}static max(){return new xe(S.max(),v.empty(),-1)}}function vh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:A(n.largestBatchId,e.largestBatchId))}/**
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
 */class K{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new K(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new K(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ps(this.root,e,this.comparator,!0)}}class Ps{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:ae.RED,this.left=r!=null?r:ae.EMPTY,this.right=i!=null?i:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ae(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ae.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(n,e,t,s,r){return this}insert(n,e,t){return new ae(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class L{constructor(e){this.comparator=e,this.data=new K(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ya(this.data.getIterator())}getIteratorFrom(e){return new Ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof L)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new L(this.comparator);return t.data=e,t}}class Ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gt(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class vg{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Xa(n,e=null,t=[],s=[],r=null,i=null,o=null){return new vg(n,e,t,s,r,i,o)}function Nt(n){const e=I(n);if(e.P===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Jt(r.value);var r}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ws(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Jt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Jt(s)).join(",")),e.P=t}return e.P}function Ig(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${Jt(s.value)}`;var s}).join(", ")}]`),ws(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>Jt(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>Jt(t)).join(",")),`Target(${e})`}function vs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!Cg(n.orderBy[r],e.orderBy[r]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(t=n.filters[r],s=e.filters[r],t.op!==s.op||!t.field.isEqual(s.field)||!Le(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tc(n.startAt,e.startAt)&&tc(n.endAt,e.endAt)}function ar(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function cr(n,e){return n.filters.filter(t=>t instanceof ce&&t.field.isEqual(e))}function Ja(n,e,t){let s=qs,r=!0;for(const i of cr(n,e)){let o=qs,a=!0;switch(i.op){case"<":case"<=":o=gg(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=qs}Ha({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ha({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function Za(n,e,t){let s=ze,r=!0;for(const i of cr(n,e)){let o=ze,a=!0;switch(i.op){case">=":case">":o=pg(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=ze}Qa({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Qa({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}class ce extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,s):new bg(e,t,s):t==="array-contains"?new Sg(e,s):t==="in"?new _g(e,s):t==="not-in"?new Dg(e,s):t==="array-contains-any"?new Ag(e,s):new ce(e,t,s)}static V(e,t,s){return t==="in"?new Eg(e,s):new Tg(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.v(et(t,this.value)):t!==null&&At(this.value)===At(t)&&this.v(et(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bg extends ce{constructor(e,t,s){super(e,t,s),this.key=v.fromName(s.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.v(t)}}class Eg extends ce{constructor(e,t){super(e,"in",t),this.keys=Ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tg extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ih(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>v.fromName(s.referenceValue))}class Sg extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jn(t)&&Xn(t.arrayValue,this.value)}}class _g extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xn(this.value.arrayValue,t)}}class Dg extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Xn(this.value.arrayValue,t)}}class Ag extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Xn(this.value.arrayValue,s))}}class tt{constructor(e,t){this.position=e,this.inclusive=t}}class Zt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Cg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function ec(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),t.key):s=et(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function tc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Le(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ue{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function bh(n,e,t,s,r,i,o,a){return new Ue(n,e,t,s,r,i,o,a)}function vn(n){return new Ue(n)}function Ng(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vo(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Io(n){for(const e of n.filters)if(e.S())return e.field;return null}function bo(n){return n.collectionGroup!==null}function on(n){const e=I(n);if(e.D===null){e.D=[];const t=Io(e),s=vo(e);if(t!==null&&s===null)t.isKeyField()||e.D.push(new Zt(t)),e.D.push(new Zt(Y.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Zt(Y.keyField(),i))}}}return e.D}function Ce(n){const e=I(n);if(!e.C)if(e.limitType==="F")e.C=Xa(e.path,e.collectionGroup,on(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of on(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Zt(i.field,o))}const s=e.endAt?new tt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tt(e.startAt.position,e.startAt.inclusive):null;e.C=Xa(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.C}function Eh(n,e,t){return new Ue(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Is(n,e){return vs(Ce(n),Ce(e))&&n.limitType===e.limitType}function Th(n){return`${Nt(Ce(n))}|lt:${n.limitType}`}function Ni(n){return`Query(target=${Ig(Ce(n))}; limitType=${n.limitType})`}function Eo(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):v.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of t.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=ec(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,on(t),s)||t.endAt&&!function(r,i,o){const a=ec(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,on(t),s))}(n,e)}function Sh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _h(n){return(e,t)=>{let s=!1;for(const r of on(n)){const i=xg(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function xg(n,e,t){const s=n.field.isKeyField()?v.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?et(a,c):E()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
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
 */function Dh(n,e){if(n.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(e)?"-0":e}}function Ah(n){return{integerValue:""+n}}function Ch(n,e){return mh(e)?Ah(e):Dh(n,e)}/**
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
 */class kr{constructor(){this._=void 0}}function kg(n,e,t){return n instanceof an?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof xt?xh(n,e):n instanceof kt?kh(n,e):function(s,r){const i=Nh(s,r),o=nc(i)+nc(s.k);return Ai(i)&&Ai(s.k)?Ah(o):Dh(s.M,o)}(n,e)}function Mg(n,e,t){return n instanceof xt?xh(n,e):n instanceof kt?kh(n,e):t}function Nh(n,e){return n instanceof cn?Ai(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class an extends kr{}class xt extends kr{constructor(e){super(),this.elements=e}}function xh(n,e){const t=Mh(e);for(const s of n.elements)t.some(r=>Le(r,s))||t.push(s);return{arrayValue:{values:t}}}class kt extends kr{constructor(e){super(),this.elements=e}}function kh(n,e){let t=Mh(e);for(const s of n.elements)t=t.filter(r=>!Le(r,s));return{arrayValue:{values:t}}}class cn extends kr{constructor(e,t){super(),this.M=e,this.k=t}}function nc(n){return U(n.integerValue||n.doubleValue)}function Mh(n){return Jn(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class bs{constructor(e,t){this.field=e,this.transform=t}}function Rg(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof xt&&s instanceof xt||t instanceof kt&&s instanceof kt?sn(t.elements,s.elements,Le):t instanceof cn&&s instanceof cn?Le(t.k,s.k):t instanceof an&&s instanceof an}(n.transform,e.transform)}class Lg{constructor(e,t){this.version=e,this.transformResults=t}}class W{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new W}static exists(e){return new W(void 0,e)}static updateTime(e){return new W(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ks(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mr{}function Og(n,e,t){n instanceof Es?function(s,r,i){const o=s.value.clone(),a=ic(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ft?function(s,r,i){if(!Ks(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ic(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Rh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function xi(n,e,t){n instanceof Es?function(s,r,i){if(!Ks(s.precondition,r))return;const o=s.value.clone(),a=oc(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(rc(r),o).setHasLocalMutations()}(n,e,t):n instanceof Ft?function(s,r,i){if(!Ks(s.precondition,r))return;const o=oc(s.fieldTransforms,i,r),a=r.data;a.setAll(Rh(s)),a.setAll(o),r.convertToFoundDocument(rc(r),a).setHasLocalMutations()}(n,e,t):function(s,r){Ks(s.precondition,r)&&r.convertToNoDocument(S.min())}(n,e)}function Pg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Nh(s.transform,r||null);i!=null&&(t==null&&(t=de.empty()),t.set(s.field,i))}return t||null}function sc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&sn(t,s,(r,i)=>Rg(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function rc(n){return n.isFoundDocument()?n.version:S.min()}class Es extends Mr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Ft extends Mr{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Rh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ic(n,e,t){const s=new Map;_(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Mg(o,a,t[r]))}return s}function oc(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,kg(i,o,e))}return s}class Ts extends Mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class To extends Mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Vg{constructor(e){this.count=e}}/**
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
 */var G,N;function Lh(n){switch(n){default:return E();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Oh(n){if(n===void 0)return z("GRPC error has no .code"),m.UNKNOWN;switch(n){case G.OK:return m.OK;case G.CANCELLED:return m.CANCELLED;case G.UNKNOWN:return m.UNKNOWN;case G.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case G.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case G.INTERNAL:return m.INTERNAL;case G.UNAVAILABLE:return m.UNAVAILABLE;case G.UNAUTHENTICATED:return m.UNAUTHENTICATED;case G.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case G.NOT_FOUND:return m.NOT_FOUND;case G.ALREADY_EXISTS:return m.ALREADY_EXISTS;case G.PERMISSION_DENIED:return m.PERMISSION_DENIED;case G.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case G.ABORTED:return m.ABORTED;case G.OUT_OF_RANGE:return m.OUT_OF_RANGE;case G.UNIMPLEMENTED:return m.UNIMPLEMENTED;case G.DATA_LOSS:return m.DATA_LOSS;default:return E()}}(N=G||(G={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class at{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Vt(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return dh(this.inner)}size(){return this.innerSize}}/**
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
 */const Fg=new K(v.comparator);function De(){return Fg}const Bg=new K(v.comparator);function ki(...n){let e=Bg;for(const t of n)e=e.insert(t.key,t);return e}function Pn(){return new at(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ug=new K(v.comparator),$g=new L(v.comparator);function R(...n){let e=$g;for(const t of n)e=e.add(t);return e}const qg=new L(A);function Rr(){return qg}/**
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
 */class Ss{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const s=new Map;return s.set(e,_s.createSynthesizedTargetChangeForCurrentChange(e,t)),new Ss(S.min(),s,Rr(),De(),R())}}class _s{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new _s(X.EMPTY_BYTE_STRING,t,R(),R(),R())}}/**
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
 */class Gs{constructor(e,t,s,r){this.O=e,this.removedTargetIds=t,this.key=s,this.F=r}}class Ph{constructor(e,t){this.targetId=e,this.$=t}}class Vh{constructor(e,t,s=X.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class ac{constructor(){this.B=0,this.L=uc(),this.U=X.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=R(),t=R(),s=R();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:E()}}),new _s(this.U,this.q,e,t,s)}J(){this.K=!1,this.L=uc()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class jg{constructor(e){this.nt=e,this.st=new Map,this.it=De(),this.rt=cc(),this.ot=new L(A)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const s=this.lt(t);switch(e.state){case 0:this.ft(t)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(t);break;case 3:this.ft(t)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),s.W(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((s,r)=>{this.ft(r)&&t(r)})}_t(e){const t=e.targetId,s=e.$.count,r=this.wt(t);if(r){const i=r.target;if(ar(i))if(s===0){const o=new v(i.path);this.ct(t,o,O.newNoDocument(o,S.min()))}else _(s===1);else this.gt(t)!==s&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ar(a.target)){const c=new v(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,O.newNoDocument(c,e))}i.j&&(t.set(o,i.H()),i.J())}});let s=R();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new Ss(e,t,this.ot,this.it,s);return this.it=De(),this.rt=cc(),this.ot=new L(A),r}at(e,t){if(!this.ft(e))return;const s=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,s),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),s&&(this.it=this.it.insert(t,s))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new ac,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new L(A),this.rt=this.rt.insert(e,t)),t}ft(e){const t=this.wt(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ac),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function cc(){return new K(v.comparator)}function uc(){return new K(v.comparator)}/**
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
 */const Kg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class zg{constructor(e,t){this.databaseId=e,this.N=t}}function Zn(n,e){return n.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fh(n,e){return n.N?e.toBase64():e.toUint8Array()}function Wg(n,e){return Zn(n,e.toTimestamp())}function ee(n){return _(!!n),S.fromTimestamp(function(e){const t=Ze(e);return new j(t.seconds,t.nanos)}(n))}function So(n,e){return function(t){return new x(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Bh(n){const e=x.fromString(n);return _(Wh(e)),e}function es(n,e){return So(n.databaseId,e.path)}function Me(n,e){const t=Bh(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v($h(t))}function Mi(n,e){return So(n.databaseId,e)}function Uh(n){const e=Bh(n);return e.length===4?x.emptyPath():$h(e)}function ts(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $h(n){return _(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function hc(n,e,t){return{name:es(n,e),fields:t.value.mapValue.fields}}function qh(n,e,t){const s=Me(n,e.name),r=ee(e.updateTime),i=new de({mapValue:{fields:e.fields}}),o=O.newFoundDocument(s,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function Hg(n,e){return"found"in e?function(t,s){_(!!s.found),s.found.name,s.found.updateTime;const r=Me(t,s.found.name),i=ee(s.found.updateTime),o=new de({mapValue:{fields:s.found.fields}});return O.newFoundDocument(r,i,o)}(n,e):"missing"in e?function(t,s){_(!!s.missing),_(!!s.readTime);const r=Me(t,s.missing),i=ee(s.readTime);return O.newNoDocument(r,i)}(n,e):E()}function Qg(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.N?(_(u===void 0||typeof u=="string"),X.fromBase64String(u||"")):(_(u===void 0||u instanceof Uint8Array),X.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Oh(c.code);return new y(u,c.message||"")}(o);t=new Vh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Me(n,s.document.name),i=ee(s.document.updateTime),o=new de({mapValue:{fields:s.document.fields}}),a=O.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];t=new Gs(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Me(n,s.document),i=s.readTime?ee(s.readTime):S.min(),o=O.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Gs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Me(n,s.document),i=s.removedTargetIds||[];t=new Gs([],i,r,null)}else{if(!("filter"in e))return E();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Vg(r),o=s.targetId;t=new Ph(o,i)}}return t}function ns(n,e){let t;if(e instanceof Es)t={update:hc(n,e.key,e.value)};else if(e instanceof Ts)t={delete:es(n,e.key)};else if(e instanceof Ft)t={update:hc(n,e.key,e.data),updateMask:np(e.fieldMask)};else{if(!(e instanceof To))return E();t={verify:es(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof an)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof kt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof cn)return{fieldPath:i.field.canonicalString(),increment:o.k};throw E()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Wg(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:E()}(n,e.precondition)),t}function Ri(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?W.updateTime(ee(r.updateTime)):r.exists!==void 0?W.exists(r.exists):W.none()}(e.currentDocument):W.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)_(o.setToServerValue==="REQUEST_TIME"),a=new an;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new xt(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new kt(u)}else"increment"in o?a=new cn(i,o.increment):E();const c=Y.fromServerFormat(o.fieldPath);return new bs(c,a)}(n,r)):[];if(e.update){e.update.name;const r=Me(n,e.update.name),i=new de({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new rn(c.map(u=>Y.fromServerFormat(u)))}(e.updateMask);return new Ft(r,i,o,t,s)}return new Es(r,i,t,s)}if(e.delete){const r=Me(n,e.delete);return new Ts(r,t)}if(e.verify){const r=Me(n,e.verify);return new To(r,t)}return E()}function Yg(n,e){return n&&n.length>0?(_(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?ee(s.updateTime):ee(r);return i.isEqual(S.min())&&(i=ee(r)),new Lg(i,s.transformResults||[])}(t,e))):[]}function jh(n,e){return{documents:[Mi(n,e.path)]}}function Kh(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Mi(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Mi(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(Wa(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NAN"}};if(za(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Wa(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NOT_NAN"}};if(za(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(l.field),op:Zg(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:zt(h.field),direction:Jg(h.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.N||ws(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Gh(n){let e=Uh(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){_(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=zh(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(l){return new Zt(Xt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;t.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,ws(l)?null:l}(t.limit));let c=null;t.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new tt(d,l)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new tt(d,l)}(t.endAt)),bh(e,r,o,i,a,"F",c,u)}function Xg(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function zh(n){return n?n.unaryFilter!==void 0?[tp(n)]:n.fieldFilter!==void 0?[ep(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>zh(e)).reduce((e,t)=>e.concat(t)):E():[]}function Jg(n){return Kg[n]}function Zg(n){return Gg[n]}function zt(n){return{fieldPath:n.canonicalString()}}function Xt(n){return Y.fromServerFormat(n.fieldPath)}function ep(n){return ce.create(Xt(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(n.fieldFilter.op),n.fieldFilter.value)}function tp(n){switch(n.unaryFilter.op){case"IS_NAN":const e=Xt(n.unaryFilter.field);return ce.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Xt(n.unaryFilter.field);return ce.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xt(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Xt(n.unaryFilter.field);return ce.create(r,"!=",{nullValue:"NULL_VALUE"});default:return E()}}function np(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function be(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lc(e)),e=sp(n.get(t),e);return lc(e)}function sp(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function lc(n){return n+""}function ke(n){const e=n.length;if(_(e>=2),e===2)return _(n.charAt(0)===""&&n.charAt(1)===""),x.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&E(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:E()}i=o+2}return new x(s)}/**
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
 */const dc=["userId","batchId"];/**
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
 */function zs(n,e){return[n,be(e)]}function Hh(n,e,t){return[n,be(e),t]}const rp={},ip=["prefixPath","collectionGroup","readTime","documentId"],op=["prefixPath","collectionGroup","documentId"],ap=["collectionGroup","readTime","prefixPath","documentId"],cp=["canonicalId","targetId"],up=["targetId","path"],hp=["path","targetId"],lp=["collectionId","parent"],dp=["indexId","uid"],fp=["uid","sequenceNumber"],mp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],gp=["indexId","uid","orderedDocumentKey"],pp=["userId","collectionPath","documentId"],yp=["userId","collectionPath","largestBatchId"],wp=["userId","collectionGroup","largestBatchId"],Qh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vp=[...Qh,"documentOverlays"],Yh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ip=[...Yh,"indexConfiguration","indexState","indexEntries"];/**
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
 */const Xh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,s)=>{t(e)})}static reject(e){return new f((t,s)=>{s(e)})}static waitFor(e){return new f((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=f.resolve(!1);for(const s of e)t=t.next(r=>r?f.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}}/**
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
 */class Lr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new Z,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Vn(e,t.error)):this.At.resolve()},this.transaction.onerror=s=>{const r=_o(s.target.error);this.At.reject(new Vn(e,r))}}static open(e,t,s,r){try{return new Lr(t,e.transaction(r,s))}catch(i){throw new Vn(t,i)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(w("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ep(t)}}class Ne{constructor(e,t,s){this.name=e,this.version=t,this.Pt=s,Ne.Vt(bt())===12.2&&z("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return w("SimpleDb","Removing database:",e),ft(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!Xc())return!1;if(Ne.St())return!0;const e=bt(),t=Ne.Vt(e),s=0<t&&t<10,r=Ne.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async Nt(e){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new Vn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Vn(e,o))},r.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Pt.kt(o,r.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Nt(e);const a=Lr.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(u=>(a.bt(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class bp{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return ft(this.Ft.delete())}}class Vn extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Bt(n){return n.name==="IndexedDbTransactionError"}class Ep{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(w("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),ft(s)}add(e){return w("SimpleDb","ADD",this.store.name,e,e),ft(this.store.add(e))}get(e){return ft(this.store.get(e)).next(t=>(t===void 0&&(t=null),w("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return w("SimpleDb","DELETE",this.store.name,e),ft(this.store.delete(e))}count(){return w("SimpleDb","COUNT",this.store.name),ft(this.store.count())}qt(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.Kt(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new f((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}Gt(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new f((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Qt(e,t){w("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.jt=!1;const r=this.cursor(s);return this.Kt(r,(i,o,a)=>a.delete())}Wt(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.Kt(r,t)}zt(e){const t=this.cursor({});return new f((s,r)=>{t.onerror=i=>{const o=_o(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}Kt(e,t){const s=[];return new f((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new bp(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const h=u.catch(l=>(c.done(),f.reject(l)));s.push(h)}c.isDone?r():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>f.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.jt?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ft(n){return new f((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=_o(s.target.error);t(r)}})}let fc=!1;function _o(n){const e=Ne.Vt(bt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fc||(fc=!0,setTimeout(()=>{throw s},0)),s}}return n}/**
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
 */class mc extends Jh{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function ne(n,e){const t=I(n);return Ne.xt(t.Ht,e)}/**
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
 */class Do{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Og(i,e,s[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&xi(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&xi(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const s=e.get(t.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(S.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),R())}isEqual(e){return this.batchId===e.batchId&&sn(this.mutations,e.mutations,(t,s)=>sc(t,s))&&sn(this.baseMutations,e.baseMutations,(t,s)=>sc(t,s))}}class Ao{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){_(e.mutations.length===s.length);let r=Ug;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ao(e,t,s,r)}}/**
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
 */class Co{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qe{constructor(e,t,s,r,i=S.min(),o=S.min(),a=X.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Qe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Zh{constructor(e){this.Jt=e}}function Tp(n,e){let t;if(e.document)t=qh(n.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=v.fromSegments(e.noDocument.path),r=Rt(e.noDocument.readTime);t=O.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return E();{const s=v.fromSegments(e.unknownDocument.path),r=Rt(e.unknownDocument.version);t=O.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new j(s[0],s[1]);return S.fromTimestamp(r)}(e.readTime)),t}function gc(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ur(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:es(r,i.key),fields:i.data.value.mapValue.fields,updateTime:Zn(r,i.version.toTimestamp())}}(n.Jt,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:Mt(e.version)};else{if(!e.isUnknownDocument())return E();s.unknownDocument={path:t.path.toArray(),version:Mt(e.version)}}return s}function ur(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Rt(n){const e=new j(n.seconds,n.nanoseconds);return S.fromTimestamp(e)}function Ht(n,e){const t=(e.baseMutations||[]).map(i=>Ri(n.Jt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Ri(n.Jt,i)),r=j.fromMillis(e.localWriteTimeMs);return new Do(e.batchId,r,t,s)}function Mn(n){const e=Rt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Rt(n.lastLimboFreeSnapshotVersion):S.min();let s;var r;return n.query.documents!==void 0?(_((r=n.query).documents.length===1),s=Ce(vn(Uh(r.documents[0])))):s=function(i){return Ce(Gh(i))}(n.query),new Qe(s,n.targetId,0,n.lastListenSequenceNumber,e,t,X.fromBase64String(n.resumeToken))}function el(n,e){const t=Mt(e.snapshotVersion),s=Mt(e.lastLimboFreeSnapshotVersion);let r;r=ar(e.target)?jh(n.Jt,e.target):Kh(n.Jt,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Nt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function No(n){const e=Gh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Eh(e,e.limit,"L"):e}function ii(n,e){return new Co(e.largestBatchId,Ri(n.Jt,e.overlayMutation))}function pc(n,e){const t=e.path.lastSegment();return[n,be(e.path.popLast()),t]}/**
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
 */class Sp{getBundleMetadata(e,t){return yc(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:Rt(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return yc(e).put({bundleId:(s=t).id,createTime:Mt(ee(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return wc(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:No(r.bundledQuery),readTime:Rt(r.readTime)};var r})}saveNamedQuery(e,t){return wc(e).put(function(s){return{name:s.name,readTime:Mt(ee(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function yc(n){return ne(n,"bundles")}function wc(n){return ne(n,"namedQueries")}/**
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
 */class xo{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const s=t.uid||"";return new xo(e,s)}getOverlay(e,t){return Dn(e).get(pc(this.userId,t)).next(s=>s?ii(this.M,s):null)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new Co(t,o);r.push(this.Xt(e,a))}),f.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(be(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(Dn(e).Qt("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,s){const r=Pn(),i=be(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Dn(e).qt("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=ii(this.M,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=Pn();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Dn(e).Wt({index:"collectionGroupOverlayIndex",range:a},(c,u,h)=>{const l=ii(this.M,u);i.size()<r||l.largestBatchId===o?(i.set(l.getKey(),l),o=l.largestBatchId):h.done()}).next(()=>i)}Xt(e,t){return Dn(e).put(function(s,r,i){const[o,a,c]=pc(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:ns(s.Jt,i.mutation)}}(this.M,this.userId,t))}}function Dn(n){return ne(n,"documentOverlays")}/**
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
 */class mt{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(U(e.integerValue));else if("doubleValue"in e){const s=U(e.doubleValue);isNaN(s)?this.ne(t,13):(this.ne(t,15),Yn(s)?t.se(0):t.se(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ne(t,20),typeof s=="string"?t.ie(s):(t.ie(`${s.seconds||""}`),t.se(s.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Dt(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.ne(t,45),t.se(s.latitude||0),t.se(s.longitude||0)}else"mapValue"in e?gh(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):E()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const s=e.fields||{};this.ne(t,55);for(const r of Object.keys(s))this.re(r,t),this.te(s[r],t)}he(e,t){const s=e.values||[];this.ne(t,50);for(const r of s)this.te(r,t)}ae(e,t){this.ne(t,37),v.fromName(e).path.forEach(s=>{this.ne(t,60),this.le(s,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}mt.fe=new mt;function _p(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function vc(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=_p(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class Dp{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this._e(s.value),s=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.ge(s.value),s=t.next();this.ye()}pe(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this._e(s);else if(s<2048)this._e(960|s>>>6),this._e(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this._e(480|s>>>12),this._e(128|63&s>>>6),this._e(128|63&s);else{const r=t.codePointAt(0);this._e(240|r>>>18),this._e(128|63&r>>>12),this._e(128|63&r>>>6),this._e(128|63&r)}}this.we()}Ie(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.ge(s);else if(s<2048)this.ge(960|s>>>6),this.ge(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.ge(480|s>>>12),this.ge(128|63&s>>>6),this.ge(128|63&s);else{const r=t.codePointAt(0);this.ge(240|r>>>18),this.ge(128|63&r>>>12),this.ge(128|63&r>>>6),this.ge(128|63&r)}}this.ye()}Te(e){const t=this.Ee(e),s=vc(t);this.Ae(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),s=vc(t);this.Ae(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}_e(e){const t=255&e;t===0?(this.Pe(0),this.Pe(255)):t===255?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;t===0?(this.ve(0),this.ve(255)):t===255?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class Ap{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class Cp{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class An{constructor(){this.De=new Dp,this.Ce=new Ap(this.De),this.xe=new Cp(this.De)}seed(e){this.De.seed(e)}Ne(e){return e===0?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}/**
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
 */class gt{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new gt(this.indexId,this.documentKey,this.arrayValue,s)}}function ut(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Ic(n.arrayValue,e.arrayValue),t!==0?t:(t=Ic(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function Ic(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class Np{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const s=t;s.S()?this.Fe=s:this.Oe.push(s)}}$e(e){const t=Ci(e);if(t!==void 0&&!this.Be(t))return!1;const s=dt(e);let r=0,i=0;for(;r<s.length&&this.Be(s[r]);++r);if(r===s.length)return!0;if(this.Fe!==void 0){const o=s[r];if(!this.Le(this.Fe,o)||!this.Ue(this.Me[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Me.length||!this.Ue(this.Me[i++],o))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */class xp{constructor(){this.qe=new ko}addToCollectionParentIndex(e,t){return this.qe.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(xe.min())}updateCollectionGroup(e,t,s){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class ko{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new L(x.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new L(x.comparator)).toArray()}}/**
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
 */const Vs=new Uint8Array(0);class kp{constructor(e,t){this.user=e,this.databaseId=t,this.Ke=new ko,this.Ge=new at(s=>Nt(s),(s,r)=>vs(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ke.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ke.add(t)});const i={collectionId:s,parent:be(r)};return bc(e).put(i)}return f.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[lh(t),""],!1,!0);return bc(e).qt(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(ke(o.parent))}return s})}addFieldIndex(e,t){const s=Fs(e),r=function(i){return{indexId:i.indexId,collectionGroup:i.collectionGroup,fields:i.fields.map(o=>[o.fieldPath.canonicalString(),o.kind])}}(t);return delete r.indexId,s.add(r).next()}deleteFieldIndex(e,t){const s=Fs(e),r=Bs(e),i=Cn(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=Cn(e);let r=!0;const i=new Map;return f.forEach(this.Qe(t),o=>this.je(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=R();const a=[];return f.forEach(i,(c,u)=>{var h;w("IndexedDbIndexManager",`Using index ${h=c,`id=${h.indexId}|cg=${h.collectionGroup}|f=${h.fields.map(F=>`${F.fieldPath}:${F.kind}`).join(",")}`} to execute ${Nt(t)}`);const l=function(F,ge){const ie=Ci(ge);if(ie===void 0)return null;for(const q of cr(F,ie.fieldPath))switch(q.op){case"array-contains-any":return q.value.arrayValue.values||[];case"array-contains":return[q.value]}return null}(u,c),d=function(F,ge){const ie=new Map;for(const q of dt(ge))for(const Ee of cr(F,q.fieldPath))switch(Ee.op){case"==":case"in":ie.set(q.fieldPath.canonicalString(),Ee.value);break;case"not-in":case"!=":return ie.set(q.fieldPath.canonicalString(),Ee.value),Array.from(ie.values())}return null}(u,c),g=function(F,ge){const ie=[];let q=!0;for(const Ee of dt(ge)){const Sn=Ee.kind===0?Ja(F,Ee.fieldPath,F.startAt):Za(F,Ee.fieldPath,F.startAt);ie.push(Sn.value),q&&(q=Sn.inclusive)}return new tt(ie,q)}(u,c),p=function(F,ge){const ie=[];let q=!0;for(const Ee of dt(ge)){const Sn=Ee.kind===0?Za(F,Ee.fieldPath,F.endAt):Ja(F,Ee.fieldPath,F.endAt);ie.push(Sn.value),q&&(q=Sn.inclusive)}return new tt(ie,q)}(u,c),T=this.We(c,u,g),C=this.We(c,u,p),V=this.ze(c,u,d),re=this.He(c.indexId,l,T,g.inclusive,C,p.inclusive,V);return f.forEach(re,F=>s.Gt(F,t.limit).next(ge=>{ge.forEach(ie=>{const q=v.fromSegments(ie.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return f.resolve(null)})}Qe(e){let t=this.Ge.get(e);return t||(t=[e],this.Ge.set(e,t),t)}He(e,t,s,r,i,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,i.length),u=c/(t!=null?t.length:1),h=[];for(let l=0;l<c;++l){const d=t?this.Je(t[l/u]):Vs,g=this.Ye(e,d,s[l%u],r),p=this.Xe(e,d,i[l%u],o),T=a.map(C=>this.Ye(e,d,C,!0));h.push(...this.createRange(g,p,T))}return h}Ye(e,t,s,r){const i=new gt(e,v.empty(),t,s);return r?i:i.ke()}Xe(e,t,s,r){const i=new gt(e,v.empty(),t,s);return r?i.ke():i}je(e,t){const s=new Np(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.$e(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;return f.forEach(this.Qe(t),r=>this.je(e,r).next(i=>{i?s!==0&&i.fields.length<function(o){let a=new L(Y.comparator),c=!1;for(const u of o.filters){const h=u;h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:a=a.add(h.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(r)&&(s=1):s=0})).next(()=>s)}Ze(e,t){const s=new An;for(const r of dt(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.Ne(r.kind);mt.fe.Zt(i,o)}return s.Se()}Je(e){const t=new An;return mt.fe.Zt(e,t.Ne(0)),t.Se()}tn(e,t){const s=new An;return mt.fe.Zt(Ct(this.databaseId,t),s.Ne(function(r){const i=dt(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Se()}ze(e,t,s){if(s===null)return[];let r=[];r.push(new An);let i=0;for(const o of dt(e)){const a=s[i++];for(const c of r)if(this.en(t,o.fieldPath)&&Jn(a))r=this.nn(r,o,a);else{const u=c.Ne(o.kind);mt.fe.Zt(a,u)}}return this.sn(r)}We(e,t,s){return this.ze(e,t,s.position)}sn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Se();return t}nn(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new An;c.seed(a.Se()),mt.fe.Zt(o,c.Ne(t.kind)),i.push(c)}return i}en(e,t){return!!e.filters.find(s=>s instanceof ce&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Fs(e),r=Bs(e);return(t?s.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.qt()).next(i=>{const o=[];return f.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,h){const l=h?new or(h.sequenceNumber,new xe(Rt(h.readTime),new v(ke(h.documentKey)),h.largestBatchId)):or.empty(),d=u.fields.map(([g,p])=>new yg(Y.fromServerFormat(g),p));return new yh(u.indexId,u.collectionGroup,d,l)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:A(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=Fs(e),i=Bs(e);return this.rn(e).next(o=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>i.put(function(u,h,l,d){return{indexId:u,uid:h.uid||"",sequenceNumber:l,readTime:Mt(d.readTime),documentKey:be(d.documentKey.path),largestBatchId:d.largestBatchId}}(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return f.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),f.forEach(a,c=>this.on(e,r,c).next(u=>{const h=this.un(i,c);return u.isEqual(h)?f.resolve():this.an(e,i,c,u,h)}))))})}cn(e,t,s,r){return Cn(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.tn(s,t.key),documentKey:t.key.path.toArray()})}hn(e,t,s,r){return Cn(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.tn(s,t.key),t.key.path.toArray()])}on(e,t,s){const r=Cn(e);let i=new L(ut);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.tn(s,t)])},(o,a)=>{i=i.add(new gt(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}un(e,t){let s=new L(ut);const r=this.Ze(t,e);if(r==null)return s;const i=Ci(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Jn(o))for(const a of o.arrayValue.values||[])s=s.add(new gt(t.indexId,e.key,this.Je(a),r))}else s=s.add(new gt(t.indexId,e.key,Vs,r));return s}an(e,t,s,r,i){w("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,h,l){const d=a.getIterator(),g=c.getIterator();let p=Gt(d),T=Gt(g);for(;p||T;){let C=!1,V=!1;if(p&&T){const re=u(p,T);re<0?V=!0:re>0&&(C=!0)}else p!=null?V=!0:C=!0;C?(h(T),T=Gt(g)):V?(l(p),p=Gt(d)):(p=Gt(d),T=Gt(g))}}(r,i,ut,a=>{o.push(this.cn(e,t,s,a))},a=>{o.push(this.hn(e,t,s,a))}),f.waitFor(o)}rn(e){let t=1;return Bs(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>ut(o,a)).filter((o,a,c)=>!a||ut(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=ut(o,e),c=ut(o,t);if(a===0)r[0]=e.ke();else if(a>0&&c<0)r.push(o),r.push(o.ke());else if(c>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2)i.push(IDBKeyRange.bound([r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,Vs,[]],[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,Vs,[]]));return i}getMinOffset(e,t){let s;return f.forEach(this.Qe(t),r=>this.je(e,r).next(i=>{i?(!s||vh(i.indexState.offset,s)<0)&&(s=i.indexState.offset):s=xe.min()})).next(()=>s)}}function bc(n){return ne(n,"collectionParents")}function Cn(n){return ne(n,"indexEntries")}function Fs(n){return ne(n,"indexConfiguration")}function Bs(n){return ne(n,"indexState")}/**
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
 */const Ec={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Te{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Te(e,Te.DEFAULT_COLLECTION_PERCENTILE,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function tl(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Wt({range:o},(h,l,d)=>(a++,d.delete()));i.push(c.next(()=>{_(a===1)}));const u=[];for(const h of t.mutations){const l=Hh(e,h.key.path,t.batchId);i.push(r.delete(l)),u.push(h.key)}return f.waitFor(i).next(()=>u)}function hr(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw E();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Te.DEFAULT_COLLECTION_PERCENTILE=10,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Te.DEFAULT=new Te(41943040,Te.DEFAULT_COLLECTION_PERCENTILE,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Te.DISABLED=new Te(-1,0,0);class Mo{constructor(e,t,s,r){this.userId=e,this.M=t,this.indexManager=s,this.referenceDelegate=r,this.ln={}}static Yt(e,t,s,r){_(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Mo(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return qe(e).Wt({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=Qt(e),o=qe(e);return o.add({}).next(a=>{_(typeof a=="number");const c=new Do(a,t,s,r),u=function(d,g,p){const T=p.baseMutations.map(V=>ns(d.Jt,V)),C=p.mutations.map(V=>ns(d.Jt,V));return{userId:g,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:T,mutations:C}}(this.M,this.userId,c),h=[];let l=new L((d,g)=>A(d.canonicalString(),g.canonicalString()));for(const d of r){const g=Hh(this.userId,d.key.path,a);l=l.add(d.key.path.popLast()),h.push(o.put(u)),h.push(i.put(g,rp))}return l.forEach(d=>{h.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.ln[a]=c.keys()}),f.waitFor(h).next(()=>c)})}lookupMutationBatch(e,t){return qe(e).get(t).next(s=>s?(_(s.userId===this.userId),Ht(this.M,s)):null)}fn(e,t){return this.ln[t]?f.resolve(this.ln[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.ln[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return qe(e).Wt({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(_(a.batchId>=s),i=Ht(this.M,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return qe(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return qe(e).qt("userMutationsIndex",t).next(s=>s.map(r=>Ht(this.M,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=zs(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return Qt(e).Wt({range:r},(o,a,c)=>{const[u,h,l]=o,d=ke(h);if(u===this.userId&&t.path.isEqual(d))return qe(e).get(l).next(g=>{if(!g)throw E();_(g.userId===this.userId),i.push(Ht(this.M,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new L(A);const r=[];return t.forEach(i=>{const o=zs(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Qt(e).Wt({range:a},(u,h,l)=>{const[d,g,p]=u,T=ke(g);d===this.userId&&i.path.isEqual(T)?s=s.add(p):l.done()});r.push(c)}),f.waitFor(r).next(()=>this.dn(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=zs(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new L(A);return Qt(e).Wt({range:o},(c,u,h)=>{const[l,d,g]=c,p=ke(d);l===this.userId&&s.isPrefixOf(p)?p.length===r&&(a=a.add(g)):h.done()}).next(()=>this.dn(e,a))}dn(e,t){const s=[],r=[];return t.forEach(i=>{r.push(qe(e).get(i).next(o=>{if(o===null)throw E();_(o.userId===this.userId),s.push(Ht(this.M,o))}))}),f.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return tl(e.Ht,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this._n(t.batchId)}),f.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}_n(e){delete this.ln[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Qt(e).Wt({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=ke(i[1]);r.push(c)}else a.done()}).next(()=>{_(r.length===0)})})}containsKey(e,t){return nl(e,this.userId,t)}wn(e){return sl(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function nl(n,e,t){const s=zs(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Qt(n).Wt({range:i,jt:!0},(a,c,u)=>{const[h,l,d]=a;h===e&&l===r&&(o=!0),u.done()}).next(()=>o)}function qe(n){return ne(n,"mutations")}function Qt(n){return ne(n,"documentMutations")}function sl(n){return ne(n,"mutationQueues")}/**
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
 */class Lt{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Lt(0)}static yn(){return new Lt(-1)}}/**
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
 */class Mp{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.pn(e).next(t=>{const s=new Lt(t.highestTargetId);return t.highestTargetId=s.next(),this.In(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.pn(e).next(t=>S.fromTimestamp(new j(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.pn(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.In(e,r)))}addTargetData(e,t){return this.Tn(e,t).next(()=>this.pn(e).next(s=>(s.targetCount+=1,this.En(t,s),this.In(e,s))))}updateTargetData(e,t){return this.Tn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Wt(e).delete(t.targetId)).next(()=>this.pn(e)).next(s=>(_(s.targetCount>0),s.targetCount-=1,this.In(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return Wt(e).Wt((o,a)=>{const c=Mn(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Wt(e).Wt((s,r)=>{const i=Mn(r);t(i)})}pn(e){return Tc(e).get("targetGlobalKey").next(t=>(_(t!==null),t))}In(e,t){return Tc(e).put("targetGlobalKey",t)}Tn(e,t){return Wt(e).put(el(this.M,t))}En(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.pn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Nt(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return Wt(e).Wt({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const u=Mn(a);vs(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=Ke(e);return t.forEach(o=>{const a=be(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),f.waitFor(r)}removeMatchingKeys(e,t,s){const r=Ke(e);return f.forEach(t,i=>{const o=be(i.path);return f.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=Ke(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ke(e);let i=R();return r.Wt({range:s,jt:!0},(o,a,c)=>{const u=ke(o[1]),h=new v(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const s=be(t.path),r=IDBKeyRange.bound([s],[lh(s)],!1,!0);let i=0;return Ke(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Et(e,t){return Wt(e).get(t).next(s=>s?Mn(s):null)}}function Wt(n){return ne(n,"targets")}function Tc(n){return ne(n,"targetGlobal")}function Ke(n){return ne(n,"targetDocuments")}/**
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
 */async function Ut(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Xh)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */function Sc([n,e],[t,s]){const r=A(n,t);return r===0?A(e,s):r}class Rp{constructor(e){this.An=e,this.buffer=new L(Sc),this.Rn=0}bn(){return++this.Rn}Pn(e){const t=[e,this.bn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Sc(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Lp{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return this.vn!==null}Sn(e){const t=this.Vn?3e5:6e4;w("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.vn=null,this.Vn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(s){Bt(s)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",s):await Ut(s)}await this.Sn(e)})}}class Op{constructor(e,t){this.Dn=e,this.params=t}calculateTargetCount(e,t){return this.Dn.Cn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Se.A);const s=new Rp(t);return this.Dn.forEachTarget(e,r=>s.Pn(r.sequenceNumber)).next(()=>this.Dn.xn(e,r=>s.Pn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Dn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Dn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Ec)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ec):this.Nn(e,t))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),r=this.params.maximumSequenceNumbersToCollect):r=l,o=Date.now(),this.nthSequenceNumber(e,r))).next(l=>(s=l,a=Date.now(),this.removeTargets(e,s,t))).next(l=>(i=l,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(l=>(u=Date.now(),_i()<=M.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${l} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:l})))}}/**
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
 */class Pp{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new Op(s,r)}(this,t)}Cn(e){const t=this.kn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}kn(e){let t=0;return this.xn(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}xn(e,t){return this.Mn(e,(s,r)=>t(r))}addReference(e,t,s){return Us(e,s)}removeReference(e,t,s){return Us(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Us(e,t)}On(e,t){return function(s,r){let i=!1;return sl(s).zt(o=>nl(s,o,r).next(a=>(a&&(i=!0),f.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Mn(e,(o,a)=>{if(a<=t){const c=this.On(e,o).next(u=>{if(!u)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,S.min()),Ke(e).delete([0,be(o.path)])))});r.push(c)}}).next(()=>f.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Us(e,t)}Mn(e,t){const s=Ke(e);let r,i=Se.A;return s.Wt({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Se.A&&t(new v(ke(r)),i),i=u,r=c):i=Se.A}).next(()=>{i!==Se.A&&t(new v(ke(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Us(n,e){return Ke(n).put(function(t,s){return{targetId:0,path:be(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class rl{constructor(){this.changes=new at(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,O.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?f.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Vp{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return ht(e).put(s)}removeEntry(e,t,s){return ht(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],ur(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Fn(e,s)))}getEntry(e,t){let s=O.newInvalidDocument(t);return ht(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Nn(t))},(r,i)=>{s=this.$n(t,i)}).next(()=>s)}Bn(e,t){let s={size:0,document:O.newInvalidDocument(t)};return ht(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Nn(t))},(r,i)=>{s={document:this.$n(t,i),size:hr(i)}}).next(()=>s)}getEntries(e,t){let s=De();return this.Ln(e,t,(r,i)=>{const o=this.$n(r,i);s=s.insert(r,o)}).next(()=>s)}Un(e,t){let s=De(),r=new K(v.comparator);return this.Ln(e,t,(i,o)=>{const a=this.$n(i,o);s=s.insert(i,a),r=r.insert(i,hr(o))}).next(()=>({documents:s,qn:r}))}Ln(e,t,s){if(t.isEmpty())return f.resolve();let r=new L(Ac);t.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(Nn(r.first()),Nn(r.last())),o=r.getIterator();let a=o.getNext();return ht(e).Wt({index:"documentKeyIndex",range:i},(c,u,h)=>{const l=v.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Ac(a,l)<0;)s(a,null),a=o.getNext();a&&a.isEqual(l)&&(s(a,u),a=o.hasNext()?o.getNext():null),a?h.Ut(Nn(a)):h.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const r=[t.popLast().toArray(),t.lastSegment(),ur(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ht(e).qt(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=De();for(const c of o){const u=this.$n(v.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,t,s,r){let i=De();const o=Dc(t,s),a=Dc(t,xe.max());return ht(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,h)=>{const l=this.$n(v.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(l.key,l),i.size===r&&h.done()}).next(()=>i)}newChangeBuffer(e){return new Fp(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return _c(e).get("remoteDocumentGlobalKey").next(t=>(_(!!t),t))}Fn(e,t){return _c(e).put("remoteDocumentGlobalKey",t)}$n(e,t){if(t){const s=Tp(this.M,t);if(!(s.isNoDocument()&&s.version.isEqual(S.min())))return s}return O.newInvalidDocument(e)}}class Fp extends rl{constructor(e,t){super(),this.Kn=e,this.trackRemovals=t,this.Gn=new at(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new L((i,o)=>A(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Gn.get(i);if(t.push(this.Kn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=gc(this.Kn.M,o);r=r.add(i.path.popLast()),s+=hr(c)-a.size,t.push(this.Kn.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=gc(this.Kn.M,o.convertToNoDocument(S.min()));t.push(this.Kn.addEntry(e,i,c))}}),r.forEach(i=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Kn.updateMetadata(e,s)),f.waitFor(t)}getFromCache(e,t){return this.Kn.Bn(e,t).next(s=>(this.Gn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Kn.Un(e,t).next(({documents:s,qn:r})=>(r.forEach((i,o)=>{this.Gn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function _c(n){return ne(n,"remoteDocumentGlobal")}function ht(n){return ne(n,"remoteDocumentsV14")}function Nn(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Dc(n,e){const t=e.documentKey.path.toArray();return[n,ur(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Ac(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=A(t[i],s[i]),r)return r;return r=A(t.length,s.length),r||(r=A(t[t.length-2],s[s.length-2]),r||A(t[t.length-1],s[s.length-1]))}/**
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
 */class Bp{constructor(e){this.M=e}kt(e,t,s,r){const i=new Lr("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",dc,{unique:!0}),a.createObjectStore("documentMutations")}(e),Cc(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Cc(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:S.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").qt().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",dc,{unique:!0});const h=c.store("mutations"),l=u.map(d=>h.put(d));return f.waitFor(l)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Qn(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.jn(i)))),s<7&&r>=7&&(o=o.next(()=>this.Wn(i))),s<8&&r>=8&&(o=o.next(()=>this.zn(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.Hn(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:pp});c.createIndex("collectionPathOverlayIndex",yp,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",wp,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:ip});c.createIndex("documentKeyIndex",op),c.createIndex("collectionGroupIndex",ap)}(e)).next(()=>this.Jn(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>{(function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:dp}).createIndex("sequenceNumberIndex",fp,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:mp}).createIndex("documentKeyIndex",gp,{unique:!1})})(e)})),o}jn(e){let t=0;return e.store("remoteDocuments").Wt((s,r)=>{t+=hr(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Qn(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.qt().next(r=>f.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.qt("userMutationsIndex",o).next(a=>f.forEach(a,c=>{_(c.userId===i.userId);const u=Ht(this.M,c);return tl(e,i.userId,u).next(()=>{})}))}))}Wn(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.Wt((o,a)=>{const c=new x(o),u=function(h){return[0,be(h)]}(c);i.push(t.get(u).next(h=>h?f.resolve():(l=>t.put({targetId:0,path:be(l),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(i))})}zn(e,t){e.createObjectStore("collectionParents",{keyPath:lp});const s=t.store("collectionParents"),r=new ko,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:be(c)})}};return t.store("remoteDocuments").Wt({jt:!0},(o,a)=>{const c=new x(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([o,a,c],u)=>{const h=ke(a);return i(h.popLast())}))}Hn(e){const t=e.store("targets");return t.Wt((s,r)=>{const i=Mn(r),o=el(this.M,i);return t.put(o)})}Jn(e,t){const s=t.store("remoteDocuments"),r=[];return s.Wt((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new v(x.fromString(u.document.name).popFirst(5)):u.noDocument?v.fromSegments(u.noDocument.path):u.unknownDocument?v.fromSegments(u.unknownDocument.path):E()).path.toArray();var u;/**
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
*/const h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(h))}).next(()=>f.waitFor(r))}}function Cc(n){n.createObjectStore("targetDocuments",{keyPath:up}).createIndex("documentTargetsIndex",hp,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",cp,{unique:!0}),n.createObjectStore("targetGlobal")}const oi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ro{constructor(e,t,s,r,i,o,a,c,u,h,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Yn=i,this.window=o,this.document=a,this.Xn=u,this.Zn=h,this.ts=l,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=d=>Promise.resolve(),!Ro.vt())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Pp(this,r),this.hs=t+"main",this.M=new Zh(c),this.ls=new Ne(this.hs,this.ts,new Bp(this.M)),this.fs=new Mp(this.referenceDelegate,this.M),this.ds=function(d){return new Vp(d)}(this.M),this._s=new Sp,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,h===!1&&z("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,oi);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.fs.getHighestSequenceNumber(e))}).then(e=>{this.es=new Se(e,this.Xn)}).then(()=>{this.ns=!0}).catch(e=>(this.ls&&this.ls.close(),Promise.reject(e)))}Ts(e){return this.cs=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ls.Ot(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget(async()=>{this.started&&await this.gs()}))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$s(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Es(e).next(t=>{t||(this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)))})}).next(()=>this.As(e)).next(t=>this.isPrimary&&!t?this.Rs(e).next(()=>!1):!!t&&this.bs(e).next(()=>!0))).catch(e=>{if(Bt(e))return w("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Yn.enqueueRetryable(()=>this.cs(e)),this.isPrimary=e})}Es(e){return xn(e).get("owner").next(t=>f.resolve(this.Ps(t)))}Vs(e){return $s(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=ne(t,"clientMetadata");return s.qt().next(r=>{const i=this.Ds(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ws)for(const t of e)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gs().then(()=>this.vs()).then(()=>this.Is()))}Ps(e){return!!e&&e.ownerId===this.clientId}As(e){return this.Zn?f.resolve(!0):xn(e).get("owner").next(t=>{if(t!==null&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.Ps(t)&&this.networkEnabled)return!0;if(!this.Ps(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,oi);return!1}}return!(!this.networkEnabled||!this.inForeground)||$s(e).qt().next(s=>this.Ds(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&w("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new mc(e,Se.A);return this.Rs(t).next(()=>this.Vs(t))}),this.ls.close(),this.Os()}Ds(e,t){return e.filter(s=>this.Ss(s.updateTimeMs,t)&&!this.xs(s.clientId))}Fs(){return this.runTransaction("getActiveClients","readonly",e=>$s(e).qt().next(t=>this.Ds(t,18e5).map(s=>s.clientId)))}get started(){return this.ns}getMutationQueue(e,t){return Mo.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new kp(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return xo.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(e,t,s){w("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.ts)===14?Ip:o===13?Yh:o===12?vp:o===11?Qh:void E();var o;let a;return this.ls.runTransaction(e,r,i,c=>(a=new mc(c,this.es?this.es.next():Se.A),t==="readwrite-primary"?this.Es(a).next(u=>!!u||this.As(a)).next(u=>{if(!u)throw z(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)),new y(m.FAILED_PRECONDITION,Xh);return s(a)}).next(u=>this.bs(a).next(()=>u)):this.$s(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}$s(e){return xn(e).get("owner").next(t=>{if(t!==null&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)&&!this.Ps(t)&&!(this.Zn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,oi)})}bs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xn(e).put("owner",t)}static vt(){return Ne.vt()}Rs(e){const t=xn(e);return t.get("owner").next(s=>this.Ps(s)?(w("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}Ss(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(z(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ys(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.rs=()=>{this.Yn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gs()))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground=this.document.visibilityState==="visible")}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ss=()=>{this.Ns(),xd()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(e){var t;try{const s=((t=this.ws)===null||t===void 0?void 0:t.getItem(this.Cs(e)))!==null;return w("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return z("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(e){z("Failed to set zombie client id.",e)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch{}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xn(n){return ne(n,"owner")}function $s(n){return ne(n,"clientMetadata")}function Lo(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Up{constructor(e,t,s){this.ds=e,this.Bs=t,this.indexManager=s}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next(s=>this.Us(e,t,s))}Us(e,t,s){return this.ds.getEntry(e,t).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,t){e.forEach((s,r)=>{for(const i of t)i.applyToLocalView(r)})}Ks(e,t){return this.ds.getEntries(e,t).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(s=>this.qs(t,s))}Qs(e,t,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.js(e,t.path):bo(t)?this.Ws(e,t,s):this.zs(e,t,s)}js(e,t){return this.Ls(e,new v(t)).next(s=>{let r=ki();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,t,s){const r=t.collectionGroup;let i=ki();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const c=function(u,h){return new Ue(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.zs(e,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}zs(e,t,s){let r;return this.ds.getAllFromCollection(e,t.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,t))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=r.get(c);u==null&&(u=O.newInvalidDocument(c),r=r.insert(c,u)),xi(a,u,o.localWriteTime),u.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Eo(t,o)||(r=r.remove(i))}),r))}}/**
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
 */class Oo{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Hs=s,this.Js=r}static Ys(e,t){let s=R(),r=R();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Oo(e,t.fromCache,s,r)}}/**
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
 */class il{constructor(){this.Xs=!1}initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,s,r){return this.ti(e,t).next(i=>i||this.ei(e,t,r,s)).next(i=>i||this.ni(e,t))}ti(e,t){return f.resolve(null)}ei(e,t,s,r){return Ng(t)||r.isEqual(S.min())?this.ni(e,t):this.Zs.Ks(e,s).next(i=>{const o=this.si(t,i);return this.ii(t,o,s,r)?this.ni(e,t):(_i()<=M.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ni(t)),this.ri(e,o,t,wh(r,-1)))})}si(e,t){let s=new L(_h(e));return t.forEach((r,i)=>{Eo(e,i)&&(s=s.add(i))}),s}ii(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,t){return _i()<=M.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Ni(t)),this.Zs.Qs(e,t,xe.min())}ri(e,t,s,r){return this.Zs.Qs(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class $p{constructor(e,t,s,r){this.persistence=e,this.oi=t,this.M=r,this.ui=new K(A),this.ai=new at(i=>Nt(i),vs),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new Up(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ui))}}function ol(n,e,t,s){return new $p(n,e,t,s)}async function al(n,e){const t=I(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.Bs.getAllMutationBatches(s).next(i=>(r=i,t.li(e),t.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=R();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.fi.Ks(s,c).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function qp(n,e){const t=I(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=f.resolve();return l.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(p=>{const T=c.docVersions.get(g);_(T!==null),p.version.compareTo(T)<0&&(h.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>o.Bs.removeMutationBatch(a,h))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.Bs.performConsistencyCheck(s)).next(()=>t.fi.Ks(s,r))})}function cl(n){const e=I(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.fs.getLastRemoteSnapshotVersion(t))}function jp(n,e){const t=I(n),s=e.snapshotVersion;let r=t.ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hi.newChangeBuffer({trackRemovals:!0});r=t.ui;const a=[];e.targetChanges.forEach((u,h)=>{const l=r.get(h);if(!l)return;a.push(t.fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.fs.addMatchingKeys(i,u.addedDocuments,h)));let d=l.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(X.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(g,p,T){return g.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(l,d,u)&&a.push(t.fs.updateTargetData(i,d))});let c=De();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ul(i,o,e.documentUpdates).next(u=>{c=u})),!s.isEqual(S.min())){const u=t.fs.getLastRemoteSnapshotVersion(i).next(h=>t.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.fi.Gs(i,c)).next(()=>c)}).then(i=>(t.ui=r,i))}function ul(n,e,t){let s=R();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let i=De();return t.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(S.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Kp(n,e){const t=I(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.Bs.getNextMutationBatchAfterBatchId(s,e)))}function un(n,e){const t=I(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.fs.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):t.fs.allocateTargetId(s).next(o=>(r=new Qe(e,o,0,s.currentSequenceNumber),t.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.ui=t.ui.insert(s.targetId,s),t.ai.set(e,s.targetId)),s})}async function hn(n,e,t){const s=I(n),r=s.ui.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Bt(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ui=s.ui.remove(e),s.ai.delete(r.target)}function lr(n,e,t){const s=I(n);let r=S.min(),i=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=I(a),l=h.ai.get(u);return l!==void 0?f.resolve(h.ui.get(l)):h.fs.getTargetData(c,u)}(s,o,Ce(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.oi.Qs(o,e,t?r:S.min(),t?i:R())).next(a=>(dl(s,Sh(e),a),{documents:a,_i:i})))}function hl(n,e){const t=I(n),s=I(t.fs),r=t.ui.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.Et(i,e).next(o=>o?o.target:null))}function ll(n,e){const t=I(n),s=t.ci.get(e)||S.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.hi.getAllFromCollectionGroup(r,e,wh(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(dl(t,e,r),r))}function dl(n,e,t){let s=S.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.ci.set(e,s)}async function Gp(n,e,t,s){const r=I(n);let i=R(),o=De();for(const u of t){const h=e.wi(u.metadata.name);u.document&&(i=i.add(h));const l=e.mi(u);l.setReadTime(e.gi(u.metadata.readTime)),o=o.insert(h,l)}const a=r.hi.newChangeBuffer({trackRemovals:!0}),c=await un(r,function(u){return Ce(vn(x.fromString(`__bundle__/docs/${u}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",u=>ul(u,a,o).next(h=>(a.apply(u),h)).next(h=>r.fs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>r.fs.addMatchingKeys(u,i,c.targetId)).next(()=>r.fi.Gs(u,h)).next(()=>h)))}async function zp(n,e,t=R()){const s=await un(n,Ce(No(e.bundledQuery))),r=I(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=ee(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r._s.saveNamedQuery(i,e);const a=s.withResumeToken(X.EMPTY_BYTE_STRING,o);return r.ui=r.ui.insert(a.targetId,a),r.fs.updateTargetData(i,a).next(()=>r.fs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.fs.addMatchingKeys(i,t,s.targetId)).next(()=>r._s.saveNamedQuery(i,e))})}/**
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
 */class Wp{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,t){return f.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var s;return this.yi.set(t.id,{id:(s=t).id,version:s.version,createTime:ee(s.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,function(s){return{name:s.name,query:No(s.bundledQuery),readTime:ee(s.readTime)}}(t)),f.resolve()}}/**
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
 */class Hp{constructor(){this.overlays=new K(v.comparator),this.Ii=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.Xt(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Ii.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(s)),f.resolve()}getOverlaysForCollection(e,t,s){const r=Pn(),i=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new K((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Pn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Pn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return f.resolve(a)}Xt(e,t,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.Ii.get(r.largestBatchId).delete(s.key);this.Ii.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Co(t,s));let i=this.Ii.get(t);i===void 0&&(i=R(),this.Ii.set(t,i)),this.Ii.set(t,i.add(s.key))}}/**
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
 */class Po{constructor(){this.Ti=new L(J.Ei),this.Ai=new L(J.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const s=new J(e,t);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Pi(new J(e,t))}Vi(e,t){e.forEach(s=>this.removeReference(s,t))}vi(e){const t=new v(new x([])),s=new J(t,e),r=new J(t,e+1),i=[];return this.Ai.forEachInRange([s,r],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new v(new x([])),s=new J(t,e),r=new J(t,e+1);let i=R();return this.Ai.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new J(e,0),s=this.Ti.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class J{constructor(e,t){this.key=e,this.Ci=t}static Ei(e,t){return v.comparator(e.key,t.key)||A(e.Ci,t.Ci)}static Ri(e,t){return A(e.Ci,t.Ci)||v.comparator(e.key,t.key)}}/**
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
 */class Qp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new L(J.Ei)}checkEmpty(e){return f.resolve(this.Bs.length===0)}addMutationBatch(e,t,s,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Do(i,t,s,r);this.Bs.push(o);for(const a of r)this.Ni=this.Ni.add(new J(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Mi(s),i=r<0?0:r;return f.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return f.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new J(t,0),r=new J(t,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([s,r],o=>{const a=this.ki(o.Ci);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new L(A);return t.forEach(r=>{const i=new J(r,0),o=new J(r,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{s=s.add(a.Ci)})}),f.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new J(new v(i),0);let a=new L(A);return this.Ni.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Ci)),!0)},o),f.resolve(this.Oi(a))}Oi(e){const t=[];return e.forEach(s=>{const r=this.ki(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){_(this.Fi(t.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return f.forEach(t.mutations,r=>{const i=new J(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,t){const s=new J(t,0),r=this.Ni.firstAfterOrEqual(s);return f.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,f.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}/**
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
 */class Yp{constructor(e){this.$i=e,this.docs=new K(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.$i(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return f.resolve(s?s.document.mutableCopy():O.newInvalidDocument(t))}getEntries(e,t){let s=De();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():O.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(e,t,s){let r=De();const i=new v(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||vh(wg(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(e,t,s,r){E()}Bi(e,t){return f.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Xp(this)}getSize(e){return f.resolve(this.size)}}class Xp extends rl{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),f.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}/**
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
 */class Jp{constructor(e){this.persistence=e,this.Li=new at(t=>Nt(t),vs),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Po,this.targetCount=0,this.Ki=Lt.gn()}forEachTarget(e,t){return this.Li.forEach((s,r)=>t(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ui&&(this.Ui=t),f.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new Lt(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Tn(t),f.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const s=this.Li.get(t)||null;return f.resolve(s)}addMatchingKeys(e,t,s){return this.qi.bi(t,s),f.resolve()}removeMatchingKeys(e,t,s){this.qi.Vi(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),f.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qi.Di(t);return f.resolve(s)}containsKey(e,t){return f.resolve(this.qi.containsKey(t))}}/**
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
 */class Zp{constructor(e,t){this.Gi={},this.overlays={},this.es=new Se(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Jp(this),this.indexManager=new xp,this.ds=function(s){return new Yp(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new Zh(t),this._s=new Wp(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Gi[e.toKey()];return s||(s=new Qp(t,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,s){w("MemoryPersistence","Starting transaction:",e);const r=new ey(this.es.next());return this.referenceDelegate.ji(),s(r).next(i=>this.referenceDelegate.Wi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zi(e,t){return f.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,t)))}}class ey extends Jh{constructor(e){super(),this.currentSequenceNumber=e}}class Vo{constructor(e){this.persistence=e,this.Hi=new Po,this.Ji=null}static Yi(e){return new Vo(e)}get Xi(){if(this.Ji)return this.Ji;throw E()}addReference(e,t,s){return this.Hi.addReference(s,t),this.Xi.delete(s.toString()),f.resolve()}removeReference(e,t,s){return this.Hi.removeReference(s,t),this.Xi.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),f.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach(r=>this.Xi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Xi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Xi,s=>{const r=v.fromPath(s);return this.Zi(e,r).next(i=>{i||t.removeEntry(r,S.min())})}).next(()=>(this.Ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zi(e,t).next(s=>{s?this.Xi.delete(t.toString()):this.Xi.add(t.toString())})}Qi(e){return 0}Zi(e,t){return f.or([()=>f.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}}/**
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
 */function Nc(n,e){return`firestore_clients_${n}_${e}`}function xc(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function ai(n,e){return`firestore_targets_${n}_${e}`}class dr{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static tr(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new y(r.error.code,r.error.message))),o?new dr(e,t,r.state,i):(z("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fn{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static tr(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new y(s.error.code,s.error.message))),i?new Fn(e,s.state,r):(z("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fr{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static tr(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=Rr();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=mh(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new fr(e,i):(z("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Fo{constructor(e,t){this.clientId=e,this.onlineState=t}static tr(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Fo(t.clientId,t.onlineState):(z("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Li{constructor(){this.activeTargetIds=Rr()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ci{constructor(e,t,s,r,i){this.window=e,this.Yn=t,this.persistenceKey=s,this.ir=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.rr=this.ur.bind(this),this.ar=new K(A),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.hr=Nc(this.persistenceKey,this.ir),this.lr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ar=this.ar.insert(this.ir,new Li),this.dr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this._r=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.wr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.mr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.gr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.rr)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Fs();for(const s of e){if(s===this.ir)continue;const r=this.getItem(Nc(this.persistenceKey,s));if(r){const i=fr.tr(s,r);i&&(this.ar=this.ar.insert(i.clientId,i))}}this.yr();const t=this.storage.getItem(this.mr);if(t){const s=this.pr(t);s&&this.Ir(s)}for(const s of this.cr)this.ur(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.lr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Tr(this.ar)}isActiveQueryTarget(e){let t=!1;return this.ar.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Er(e,"pending")}updateMutationState(e,t,s){this.Er(e,t,s),this.Ar(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ai(this.persistenceKey,e));if(s){const r=Fn.tr(e,s);r&&(t=r.state)}}return this.Rr.nr(e),this.yr(),t}removeLocalQueryTarget(e){this.Rr.sr(e),this.yr()}isLocalQueryTarget(e){return this.Rr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ai(this.persistenceKey,e))}updateQueryState(e,t,s){this.br(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Ar(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Pr(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.rr),this.removeItem(this.hr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w("SharedClientState","READ",e,t),t}setItem(e,t){w("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){w("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ur(e){const t=e;if(t.storageArea===this.storage){if(w("SharedClientState","EVENT",t.key,t.newValue),t.key===this.hr)return void z("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.dr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Sr(s,null)}{const s=this.Dr(t.key,t.newValue);if(s)return this.Sr(s.clientId,s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Cr(t.key,t.newValue);if(s)return this.Nr(s)}}else if(this.wr.test(t.key)){if(t.newValue!==null){const s=this.kr(t.key,t.newValue);if(s)return this.Mr(s)}}else if(t.key===this.mr){if(t.newValue!==null){const s=this.pr(t.newValue);if(s)return this.Ir(s)}}else if(t.key===this.lr){const s=function(r){let i=Se.A;if(r!=null)try{const o=JSON.parse(r);_(typeof o=="number"),i=o}catch(o){z("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==Se.A&&this.sequenceNumberHandler(s)}else if(t.key===this.gr){const s=this.Or(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Fr(r)))}}}else this.cr.push(t)})}}get Rr(){return this.ar.get(this.ir)}yr(){this.setItem(this.hr,this.Rr.er())}Er(e,t,s){const r=new dr(this.currentUser,e,t,s),i=xc(this.persistenceKey,this.currentUser,e);this.setItem(i,r.er())}Ar(e){const t=xc(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Pr(e){const t={clientId:this.ir,onlineState:e};this.storage.setItem(this.mr,JSON.stringify(t))}br(e,t,s){const r=ai(this.persistenceKey,e),i=new Fn(e,t,s);this.setItem(r,i.er())}Vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.gr,t)}vr(e){const t=this.dr.exec(e);return t?t[1]:null}Dr(e,t){const s=this.vr(e);return fr.tr(s,t)}Cr(e,t){const s=this._r.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return dr.tr(new oe(i),r,t)}kr(e,t){const s=this.wr.exec(e),r=Number(s[1]);return Fn.tr(r,t)}pr(e){return Fo.tr(e)}Or(e){return JSON.parse(e)}async Nr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);w("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Mr(e){return this.syncEngine.Br(e.targetId,e.state,e.error)}Sr(e,t){const s=t?this.ar.insert(e,t):this.ar.remove(e),r=this.Tr(this.ar),i=this.Tr(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Lr(o,a).then(()=>{this.ar=s})}Ir(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Tr(e){let t=Rr();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class fl{constructor(){this.Ur=new Li,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Li,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ty{Kr(e){}shutdown(){}}/**
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
 */class kc{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class sy{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
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
 */class ry extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,s,r,i){const o=this.ho(e,t);w("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw Wn("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,r,i){return this.co(e,t,s,r,i)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+wn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,t){const s=ny[e];return`${this.uo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,r){return new Promise((i,o)=>{const a=new eg;a.listenOnce(Xm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ri.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ri.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case ri.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(p)>=0?p:m.UNKNOWN}(l.status);o(new y(d,l.message))}else o(new y(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(m.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}wo(e,t,s){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Qm(),o=Ym(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Zm({})),this.lo(a.initMessageHeaders,t,s),Ed()||Dd()||Ad()||Cd()||Nd()||_d()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");w("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const d=new sy({Jr:p=>{l?w("Connection","Not sending because WebChannel is closed:",p):(h||(w("Connection","Opening WebChannel transport."),u.open(),h=!0),w("Connection","WebChannel sending:",p),u.send(p))},Yr:()=>u.close()}),g=(p,T,C)=>{p.listen(T,V=>{try{C(V)}catch(re){setTimeout(()=>{throw re},0)}})};return g(u,Os.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),g(u,Os.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),d.ro())}),g(u,Os.EventType.ERROR,p=>{l||(l=!0,Wn("Connection","WebChannel transport errored:",p),d.ro(new y(m.UNAVAILABLE,"The operation could not be completed")))}),g(u,Os.EventType.MESSAGE,p=>{var T;if(!l){const C=p.data[0];_(!!C);const V=C,re=V.error||((T=V[0])===null||T===void 0?void 0:T.error);if(re){w("Connection","WebChannel received error:",re);const F=re.status;let ge=function(q){const Ee=G[q];if(Ee!==void 0)return Oh(Ee)}(F),ie=re.message;ge===void 0&&(ge=m.INTERNAL,ie="Unknown error status: "+F+" with message "+re.message),l=!0,d.ro(new y(ge,ie)),u.close()}else w("Connection","WebChannel received:",C),d.oo(C)}}),g(o,Jm.STAT_EVENT,p=>{p.stat===qa.PROXY?w("Connection","Detected buffering proxy"):p.stat===qa.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}/**
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
 */function ml(){return typeof window!="undefined"?window:null}function Ws(){return typeof document!="undefined"?document:null}/**
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
 */function Ds(n){return new zg(n,!0)}class Bo{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class gl{constructor(e,t,s,r,i,o,a,c){this.Yn=e,this.Vo=s,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Bo(e,t)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(z(t.toString()),z("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===t&&this.Qo(s,r)},s=>{e(()=>{const r=new y(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,t){const s=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget(()=>this.Do===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iy extends gl{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.M=i}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=Qg(this.M,e),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?ee(i.readTime):S.min()}(e);return this.listener.zo(t,s)}Ho(e){const t={};t.database=ts(this.M),t.addTarget=function(r,i){let o;const a=i.target;return o=ar(a)?{documents:jh(r,a)}:{query:Kh(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Fh(r,i.resumeToken):i.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Zn(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=Xg(this.M,e);s&&(t.labels=s),this.Lo(t)}Jo(e){const t={};t.database=ts(this.M),t.removeTarget=e,this.Lo(t)}}class oy extends gl{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(_(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const t=Yg(e.writeResults,e.commitTime),s=ee(e.commitTime);return this.listener.tu(s,t)}return _(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=ts(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>ns(this.M,s))};this.Lo(t)}}/**
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
 */class ay extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=s,this.M=r,this.su=!1}iu(){if(this.su)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(m.UNKNOWN,r.toString())})}_o(e,t,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(m.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class cy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(z(t),this.uu=!1):w("OnlineStateTracker",t)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class uy{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{ct(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=I(a);c.wu.add(4),await In(c),c.yu.set("Unknown"),c.wu.delete(4),await As(c)}(this))})}),this.yu=new cy(s,r)}}async function As(n){if(ct(n))for(const e of n.mu)await e(!0)}async function In(n){for(const e of n.mu)await e(!1)}function Or(n,e){const t=I(n);t._u.has(e.targetId)||(t._u.set(e.targetId,e),qo(t)?$o(t):En(t).Mo()&&Uo(t,e))}function ss(n,e){const t=I(n),s=En(t);t._u.delete(e),s.Mo()&&pl(t,e),t._u.size===0&&(s.Mo()?s.$o():ct(t)&&t.yu.set("Unknown"))}function Uo(n,e){n.pu.Z(e.targetId),En(n).Ho(e)}function pl(n,e){n.pu.Z(e),En(n).Jo(e)}function $o(n){n.pu=new jg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n._u.get(e)||null}),En(n).start(),n.yu.au()}function qo(n){return ct(n)&&!En(n).ko()&&n._u.size>0}function ct(n){return I(n).wu.size===0}function yl(n){n.pu=void 0}async function hy(n){n._u.forEach((e,t)=>{Uo(n,e)})}async function ly(n,e){yl(n),qo(n)?(n.yu.lu(e),$o(n)):n.yu.set("Unknown")}async function dy(n,e,t){if(n.yu.set("Online"),e instanceof Vh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(n,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mr(n,s)}else if(e instanceof Gs?n.pu.ut(e):e instanceof Ph?n.pu._t(e):n.pu.ht(e),!t.isEqual(S.min()))try{const s=await cl(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r._u.get(c);u&&r._u.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(X.EMPTY_BYTE_STRING,c.snapshotVersion)),pl(r,a);const u=new Qe(c.target,a,1,c.sequenceNumber);Uo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await mr(n,s)}}async function mr(n,e,t){if(!Bt(e))throw e;n.wu.add(1),await In(n),n.yu.set("Offline"),t||(t=()=>cl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n.wu.delete(1),await As(n)})}function wl(n,e){return e().catch(t=>mr(n,t,e))}async function bn(n){const e=I(n),t=nt(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;fy(e);)try{const r=await Kp(e.localStore,s);if(r===null){e.du.length===0&&t.$o();break}s=r.batchId,my(e,r)}catch(r){await mr(e,r)}vl(e)&&Il(e)}function fy(n){return ct(n)&&n.du.length<10}function my(n,e){n.du.push(e);const t=nt(n);t.Mo()&&t.Xo&&t.Zo(e.mutations)}function vl(n){return ct(n)&&!nt(n).ko()&&n.du.length>0}function Il(n){nt(n).start()}async function gy(n){nt(n).nu()}async function py(n){const e=nt(n);for(const t of n.du)e.Zo(t.mutations)}async function yy(n,e,t){const s=n.du.shift(),r=Ao.from(s,e,t);await wl(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await bn(n)}async function wy(n,e){e&&nt(n).Xo&&await async function(t,s){if(r=s.code,Lh(r)&&r!==m.ABORTED){const i=t.du.shift();nt(t).Fo(),await wl(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bn(t)}var r}(n,e),vl(n)&&Il(n)}async function Mc(n,e){const t=I(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=ct(t);t.wu.add(3),await In(t),s&&t.yu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.wu.delete(3),await As(t)}async function Oi(n,e){const t=I(n);e?(t.wu.delete(2),await As(t)):e||(t.wu.add(2),await In(t),t.yu.set("Unknown"))}function En(n){return n.Iu||(n.Iu=function(e,t,s){const r=I(e);return r.iu(),new iy(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(n.datastore,n.asyncQueue,{Xr:hy.bind(null,n),eo:ly.bind(null,n),zo:dy.bind(null,n)}),n.mu.push(async e=>{e?(n.Iu.Fo(),qo(n)?$o(n):n.yu.set("Unknown")):(await n.Iu.stop(),yl(n))})),n.Iu}function nt(n){return n.Tu||(n.Tu=function(e,t,s){const r=I(e);return r.iu(),new oy(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(n.datastore,n.asyncQueue,{Xr:gy.bind(null,n),eo:wy.bind(null,n),eu:py.bind(null,n),tu:yy.bind(null,n)}),n.mu.push(async e=>{e?(n.Tu.Fo(),await bn(n)):(await n.Tu.stop(),n.du.length>0&&(w("RemoteStore",`Stopping write stream with ${n.du.length} pending writes`),n.du=[]))})),n.Tu}/**
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
 */class jo{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Z,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new jo(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tn(n,e){if(z("AsyncQueue",`${e}: ${n}`),Bt(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class en{constructor(e){this.comparator=e?(t,s)=>e(t,s)||v.comparator(t.key,s.key):(t,s)=>v.comparator(t.key,s.key),this.keyedMap=ki(),this.sortedSet=new K(this.comparator)}static emptySet(e){return new en(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new en;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Rc{constructor(){this.Eu=new K(v.comparator)}track(e){const t=e.doc.key,s=this.Eu.get(t);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(t,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(t):e.type===1&&s.type===2?this.Eu=this.Eu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):E():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal((t,s)=>{e.push(s)}),e}}class ln{constructor(e,t,s,r,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,s,r){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new ln(e,t,en.emptySet(t),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Is(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class vy{constructor(){this.Ru=void 0,this.listeners=[]}}class Iy{constructor(){this.queries=new at(e=>Th(e),Is),this.onlineState="Unknown",this.bu=new Set}}async function Ko(n,e){const t=I(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new vy),r)try{i.Ru=await t.onListen(s)}catch(o){const a=Tn(o,`Initialization of query '${Ni(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.Pu(t.onlineState),i.Ru&&e.Vu(i.Ru)&&zo(t)}async function Go(n,e){const t=I(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function by(n,e){const t=I(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Ru=r}}s&&zo(t)}function Ey(n,e,t){const s=I(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function zo(n){n.bu.forEach(e=>{e.next()})}class Wo{constructor(e,t,s){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ln(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||t==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Nu(e){e=ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
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
 */class Ty{constructor(e,t){this.payload=e,this.byteLength=t}Mu(){return"metadata"in this.payload}}/**
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
 */class Lc{constructor(e){this.M=e}wi(e){return Me(this.M,e)}mi(e){return e.metadata.exists?qh(this.M,e.document,!1):O.newNoDocument(this.wi(e.metadata.name),this.gi(e.metadata.readTime))}gi(e){return ee(e)}}class Sy{constructor(e,t,s){this.Ou=e,this.localStore=t,this.M=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=bl(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const s=x.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new Lc(this.M);for(const r of e)if(r.metadata.queries){const i=s.wi(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||R()).add(i);t.set(o,a)}}return t}async complete(){const e=await Gp(this.localStore,new Lc(this.M),this.documents,this.Ou.id),t=this.$u(this.documents);for(const s of this.queries)await zp(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function bl(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class El{constructor(e){this.key=e}}class Tl{constructor(e){this.key=e}}class Sl{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=R(),this.mutatedKeys=R(),this.Gu=_h(e),this.Qu=new en(this.Gu)}get ju(){return this.Uu}Wu(e,t){const s=t?t.zu:new Rc,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,l)=>{const d=r.get(h),g=Eo(this.query,l)?l:null,p=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;d&&g?d.data.isEqual(g.data)?p!==T&&(s.track({type:3,doc:g}),C=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),C=!0):d&&!g&&(s.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(g?(o=o.add(g),i=T?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,ii:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((u,h)=>function(l,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return g(l)-g(d)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new ln(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Rc,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=R(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new Tl(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new El(s))}),t}ta(e){this.Uu=e._i,this.Ku=R();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return ln.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class _y{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Dy{constructor(e){this.key=e,this.na=!1}}class Ay{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new at(a=>Th(a),Is),this.ra=new Map,this.oa=new Set,this.ua=new K(v.comparator),this.aa=new Map,this.ca=new Po,this.ha={},this.la=new Map,this.fa=Lt.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function Cy(n,e){const t=Jo(n);let s,r;const i=t.ia.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.ea();else{const o=await un(t.localStore,Ce(e));t.isPrimaryClient&&Or(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Ho(t,e,s,a==="current")}return r}async function Ho(n,e,t,s){n._a=(h,l,d)=>async function(g,p,T,C){let V=p.view.Wu(T);V.ii&&(V=await lr(g.localStore,p.query,!1).then(({documents:ge})=>p.view.Wu(ge,V)));const re=C&&C.targetChanges.get(p.targetId),F=p.view.applyChanges(V,g.isPrimaryClient,re);return Pi(g,p.targetId,F.Xu),F.snapshot}(n,h,l,d);const r=await lr(n.localStore,e,!0),i=new Sl(e,r._i),o=i.Wu(r.documents),a=_s.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline"),c=i.applyChanges(o,n.isPrimaryClient,a);Pi(n,t,c.Xu);const u=new _y(e,t,i);return n.ia.set(e,u),n.ra.has(t)?n.ra.get(t).push(e):n.ra.set(t,[e]),c.snapshot}async function Ny(n,e){const t=I(n),s=t.ia.get(e),r=t.ra.get(s.targetId);if(r.length>1)return t.ra.set(s.targetId,r.filter(i=>!Is(i,e))),void t.ia.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await hn(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),ss(t.remoteStore,s.targetId),dn(t,s.targetId)}).catch(Ut)):(dn(t,s.targetId),await hn(t.localStore,s.targetId,!0))}async function xy(n,e,t){const s=Zo(n);try{const r=await function(i,o){const a=I(i),c=j.now(),u=o.reduce((l,d)=>l.add(d.key),R());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.fi.Ks(l,u).next(d=>{h=d;const g=[];for(const p of o){const T=Pg(p,h.get(p.key));T!=null&&g.push(new Ft(p.key,T,ph(T.value.mapValue),W.exists(!0)))}return a.Bs.addMutationBatch(l,c,g,o)})).then(l=>(l.applyToLocalDocumentSet(h),{batchId:l.batchId,changes:h}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new K(A)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(s,r.batchId,t),await $e(s,r.changes),await bn(s.remoteStore)}catch(r){const i=Tn(r,"Failed to persist write");t.reject(i)}}async function _l(n,e){const t=I(n);try{const s=await jp(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.aa.get(i);o&&(_(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.na=!0:r.modifiedDocuments.size>0?_(o.na):r.removedDocuments.size>0&&(_(o.na),o.na=!1))}),await $e(t,s,e)}catch(s){await Ut(s)}}function Oc(n,e,t){const s=I(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Pu(o)&&(c=!0)}),c&&zo(a)}(s.eventManager,e),r.length&&s.sa.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ky(n,e,t){const s=I(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.aa.get(e),i=r&&r.key;if(i){let o=new K(v.comparator);o=o.insert(i,O.newNoDocument(i,S.min()));const a=R().add(i),c=new Ss(S.min(),new Map,new L(A),o,a);await _l(s,c),s.ua=s.ua.remove(i),s.aa.delete(e),Xo(s)}else await hn(s.localStore,e,!1).then(()=>dn(s,e,t)).catch(Ut)}async function My(n,e){const t=I(n),s=e.batch.batchId;try{const r=await qp(t.localStore,e);Yo(t,s,null),Qo(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await $e(t,r)}catch(r){await Ut(r)}}async function Ry(n,e,t){const s=I(n);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Bs.lookupMutationBatch(c,o).next(h=>(_(h!==null),u=h.keys(),a.Bs.removeMutationBatch(c,h))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,u))})}(s.localStore,e);Yo(s,e,t),Qo(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await $e(s,r)}catch(r){await Ut(r)}}async function Ly(n,e){const t=I(n);ct(t.remoteStore)||w("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=I(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.Bs.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.la.get(s)||[];r.push(e),t.la.set(s,r)}catch(s){const r=Tn(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function Qo(n,e){(n.la.get(e)||[]).forEach(t=>{t.resolve()}),n.la.delete(e)}function Yo(n,e,t){const s=I(n);let r=s.ha[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.ha[s.currentUser.toKey()]=r}}function dn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.ra.get(e))n.ia.delete(s),t&&n.sa.wa(s,t);n.ra.delete(e),n.isPrimaryClient&&n.ca.vi(e).forEach(s=>{n.ca.containsKey(s)||Dl(n,s)})}function Dl(n,e){n.oa.delete(e.path.canonicalString());const t=n.ua.get(e);t!==null&&(ss(n.remoteStore,t),n.ua=n.ua.remove(e),n.aa.delete(t),Xo(n))}function Pi(n,e,t){for(const s of t)s instanceof El?(n.ca.addReference(s.key,e),Oy(n,s)):s instanceof Tl?(w("SyncEngine","Document no longer in limbo: "+s.key),n.ca.removeReference(s.key,e),n.ca.containsKey(s.key)||Dl(n,s.key)):E()}function Oy(n,e){const t=e.key,s=t.path.canonicalString();n.ua.get(t)||n.oa.has(s)||(w("SyncEngine","New document in limbo: "+t),n.oa.add(s),Xo(n))}function Xo(n){for(;n.oa.size>0&&n.ua.size<n.maxConcurrentLimboResolutions;){const e=n.oa.values().next().value;n.oa.delete(e);const t=new v(x.fromString(e)),s=n.fa.next();n.aa.set(s,new Dy(t)),n.ua=n.ua.insert(t,s),Or(n.remoteStore,new Qe(Ce(vn(t.path)),s,2,Se.A))}}async function $e(n,e,t){const s=I(n),r=[],i=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,e,t).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const h=Oo.Ys(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.sa.zo(r),await async function(a,c){const u=I(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,l=>f.forEach(l.Hs,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>f.forEach(l.Js,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Bt(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.ui.get(l),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);u.ui=u.ui.insert(l,p)}}}(s.localStore,i))}async function Py(n,e){const t=I(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await al(t.localStore,e);t.currentUser=e,function(r,i){r.la.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,i))})}),r.la.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $e(t,s.di)}}function Vy(n,e){const t=I(n),s=t.aa.get(e);if(s&&s.na)return R().add(s.key);{let r=R();const i=t.ra.get(e);if(!i)return r;for(const o of i){const a=t.ia.get(o);r=r.unionWith(a.view.ju)}return r}}async function Fy(n,e){const t=I(n),s=await lr(t.localStore,e.query,!0),r=e.view.ta(s);return t.isPrimaryClient&&Pi(t,e.targetId,r.Xu),r}async function By(n,e){const t=I(n);return ll(t.localStore,e).then(s=>$e(t,s))}async function Uy(n,e,t,s){const r=I(n),i=await function(o,a){const c=I(o),u=I(c.Bs);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>u.fn(h,a).next(l=>l?c.fi.Ks(h,l):f.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await bn(r.remoteStore):t==="acknowledged"||t==="rejected"?(Yo(r,e,s||null),Qo(r,e),function(o,a){I(I(o).Bs)._n(a)}(r.localStore,e)):E(),await $e(r,i)):w("SyncEngine","Cannot apply mutation batch with id: "+e)}async function $y(n,e){const t=I(n);if(Jo(t),Zo(t),e===!0&&t.da!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await Pc(t,s.toArray());t.da=!0,await Oi(t.remoteStore,!0);for(const i of r)Or(t.remoteStore,i)}else if(e===!1&&t.da!==!1){const s=[];let r=Promise.resolve();t.ra.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(dn(t,o),hn(t.localStore,o,!0))),ss(t.remoteStore,o)}),await r,await Pc(t,s),function(i){const o=I(i);o.aa.forEach((a,c)=>{ss(o.remoteStore,c)}),o.ca.Si(),o.aa=new Map,o.ua=new K(v.comparator)}(t),t.da=!1,await Oi(t.remoteStore,!1)}}async function Pc(n,e,t){const s=I(n),r=[],i=[];for(const o of e){let a;const c=s.ra.get(o);if(c&&c.length!==0){a=await un(s.localStore,Ce(c[0]));for(const u of c){const h=s.ia.get(u),l=await Fy(s,h);l.snapshot&&i.push(l.snapshot)}}else{const u=await hl(s.localStore,o);a=await un(s.localStore,u),await Ho(s,Al(u),o,!1)}r.push(a)}return s.sa.zo(i),r}function Al(n){return bh(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function qy(n){const e=I(n);return I(I(e.localStore).persistence).Fs()}async function jy(n,e,t,s){const r=I(n);if(r.da)return void w("SyncEngine","Ignoring unexpected query state notification.");const i=r.ra.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await ll(r.localStore,Sh(i[0])),a=Ss.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await $e(r,o,a);break}case"rejected":await hn(r.localStore,e,!0),dn(r,e,s);break;default:E()}}async function Ky(n,e,t){const s=Jo(n);if(s.da){for(const r of e){if(s.ra.has(r)){w("SyncEngine","Adding an already active target "+r);continue}const i=await hl(s.localStore,r),o=await un(s.localStore,i);await Ho(s,Al(i),o.targetId,!1),Or(s.remoteStore,o)}for(const r of t)s.ra.has(r)&&await hn(s.localStore,r,!1).then(()=>{ss(s.remoteStore,r),dn(s,r)}).catch(Ut)}}function Jo(n){const e=I(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_l.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ky.bind(null,e),e.sa.zo=by.bind(null,e.eventManager),e.sa.wa=Ey.bind(null,e.eventManager),e}function Zo(n){const e=I(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=My.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ry.bind(null,e),e}function Gy(n,e,t){const s=I(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(l,d){const g=I(l),p=ee(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",T=>g._s.getBundleMetadata(T,d.id)).then(T=>!!T&&T.createTime.compareTo(p)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(l){return{taskState:"Success",documentsLoaded:l.totalDocuments,bytesLoaded:l.totalBytes,totalDocuments:l.totalDocuments,totalBytes:l.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(bl(a));const c=new Sy(a,r.localStore,i.M);let u=await i.ma();for(;u;){const l=await c.Fu(u);l&&o._updateProgress(l),u=await i.ma()}const h=await c.complete();return await $e(r,h.Lu,void 0),await function(l,d){const g=I(l);return g.persistence.runTransaction("Save bundle","readwrite",p=>g._s.saveBundleMetadata(p,d))}(r.localStore,a),o._completeWith(h.progress),Promise.resolve(h.Bu)}catch(a){return Wn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class Cl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ds(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return ol(this.persistence,new il,e.initialUser,this.M)}ya(e){return new Zp(Vo.Yi,this.M)}ga(e){return new fl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nl extends Cl{constructor(e,t,s){super(),this.Ta=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ta.initialize(this,e),await Zo(this.Ta.syncEngine),await bn(this.Ta.remoteStore),await this.persistence.Ts(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ia(e){return ol(this.persistence,new il,e.initialUser,this.M)}pa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Lp(t,e.asyncQueue)}ya(e){const t=Lo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Te.withCacheSize(this.cacheSizeBytes):Te.DEFAULT;return new Ro(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,ml(),Ws(),this.M,this.sharedClientState,!!this.forceOwnership)}ga(e){return new fl}}class zy extends Nl{constructor(e,t){super(e,t,!1),this.Ta=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ta.syncEngine;this.sharedClientState instanceof ci&&(this.sharedClientState.syncEngine={$r:Uy.bind(null,t),Br:jy.bind(null,t),Lr:Ky.bind(null,t),Fs:qy.bind(null,t),Fr:By.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts(async s=>{await $y(this.Ta.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):s||this.gcScheduler.stop())})}ga(e){const t=ml();if(!ci.vt(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Lo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ci(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class ea{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Oc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Py.bind(null,this.syncEngine),await Oi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Iy}createDatastore(e){const t=Ds(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new ry(r));var r;return function(i,o,a,c){return new ay(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Oc(this.syncEngine,a,0),o=kc.vt()?new kc:new ty,new uy(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,u){const h=new Ay(s,r,i,o,a,c);return u&&(h.da=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=I(e);w("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await In(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Vc(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Pr{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Wy{constructor(e,t){this.Ra=e,this.M=t,this.metadata=new Z,this.buffer=new Uint8Array,this.ba=new TextDecoder("utf-8"),this.Pa().then(s=>{s&&s.Mu()?this.metadata.resolve(s.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.payload)}`))},s=>this.metadata.reject(s))}close(){return this.Ra.cancel()}async getMetadata(){return this.metadata.promise}async ma(){return await this.getMetadata(),this.Pa()}async Pa(){const e=await this.Va();if(e===null)return null;const t=this.ba.decode(e),s=Number(t);isNaN(s)&&this.va(`length string (${t}) is not valid number`);const r=await this.Sa(s);return new Ty(JSON.parse(r),e.length+s)}Da(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Va(){for(;this.Da()<0&&!await this.Ca(););if(this.buffer.length===0)return null;const e=this.Da();e<0&&this.va("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Sa(e){for(;this.buffer.length<e;)await this.Ca()&&this.va("Reached the end of bundle when more is expected.");const t=this.ba.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}va(e){throw this.Ra.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ca(){const e=await this.Ra.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class Hy{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=I(s),o=ts(i.M)+"/documents",a={documents:r.map(l=>es(i.M,l))},c=await i._o("BatchGetDocuments",o,a),u=new Map;c.forEach(l=>{const d=Hg(i.M,l);u.set(d.key.toString(),d)});const h=[];return r.forEach(l=>{const d=u.get(l.toString());_(!!d),h.push(d)}),h}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ts(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=v.fromPath(s);this.mutations.push(new To(r,this.precondition(r)))}),await async function(t,s){const r=I(t),i=ts(r.M)+"/documents",o={writes:s.map(a=>ns(r.M,a))};await r.co("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw E();t=S.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?W.updateTime(t):W.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(S.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return W.updateTime(t)}return W.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Qy{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.xa=s.maxAttempts,this.No=new Bo(this.asyncQueue,"transaction_retry")}run(){this.xa-=1,this.Na()}Na(){this.No.Ro(async()=>{const e=new Hy(this.datastore),t=this.ka(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Ma(r)}))}).catch(s=>{this.Ma(s)})})}ka(e){try{const t=this.updateFunction(e);return!ws(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ma(e){this.xa>0&&this.Oa(e)?(this.xa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Na(),Promise.resolve()))):this.deferred.reject(e)}Oa(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!Lh(t)}return!1}}/**
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
 */class Yy{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=oe.UNAUTHENTICATED,this.clientId=hh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Z;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tn(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xl(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await al(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function kl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ta(n);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>Mc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Mc(e.remoteStore,i)),n.onlineComponents=e}async function ta(n){return n.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await xl(n,new Cl)),n.offlineComponents}async function Vr(n){return n.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await kl(n,new ea)),n.onlineComponents}function Ml(n){return ta(n).then(e=>e.persistence)}function na(n){return ta(n).then(e=>e.localStore)}function Rl(n){return Vr(n).then(e=>e.remoteStore)}function sa(n){return Vr(n).then(e=>e.syncEngine)}async function fn(n){const e=await Vr(n),t=e.eventManager;return t.onListen=Cy.bind(null,e.syncEngine),t.onUnlisten=Ny.bind(null,e.syncEngine),t}function Xy(n){return n.asyncQueue.enqueue(async()=>{const e=await Ml(n),t=await Rl(n);return e.setNetworkEnabled(!0),function(s){const r=I(s);return r.wu.delete(0),As(r)}(t)})}function Jy(n){return n.asyncQueue.enqueue(async()=>{const e=await Ml(n),t=await Rl(n);return e.setNetworkEnabled(!1),async function(s){const r=I(s);r.wu.add(0),await In(r),r.yu.set("Offline")}(t)})}function Zy(n,e){const t=new Z;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const u=I(a);return u.persistence.runTransaction("read document","readonly",h=>u.fi.Ls(h,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Tn(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await na(n),e,t)),t.promise}function Ll(n,e,t={}){const s=new Z;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Pr({next:l=>{i.enqueueAndForget(()=>Go(r,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Wo(vn(o.path),u,{includeMetadataChanges:!0,ku:!0});return Ko(r,h)}(await fn(n),n.asyncQueue,e,t,s)),s.promise}function ew(n,e){const t=new Z;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await lr(s,r,!0),a=new Sl(r,o._i),c=a.Wu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=Tn(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await na(n),e,t)),t.promise}function Ol(n,e,t={}){const s=new Z;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Pr({next:l=>{i.enqueueAndForget(()=>Go(r,h)),l.fromCache&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Wo(o,u,{includeMetadataChanges:!0,ku:!0});return Ko(r,h)}(await fn(n),n.asyncQueue,e,t,s)),s.promise}function tw(n,e){const t=new Pr(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).bu.add(r),r.next()}(await fn(n),t)),()=>{t.Aa(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).bu.delete(r)}(await fn(n),t))}}function nw(n,e,t){const s=new Z;return n.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return Vr(i).then(o=>o.datastore)}(n);new Qy(n.asyncQueue,r,t,e,s).run()}),s.promise}function sw(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new Wy(c,u)}(function(c,u){if(c instanceof Uint8Array)return Vc(c,u);if(c instanceof ArrayBuffer)return Vc(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Ds(e));n.asyncQueue.enqueueAndForget(async()=>{Gy(await sa(n),r,s)})}function rw(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=I(t);return r.persistence.runTransaction("Get named query","readonly",i=>r._s.getNamedQuery(i,s))}(await na(n),e))}const Fc=new Map;/**
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
 */function ra(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Pl(n,e,t,s){if(e===!0&&s===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bc(n){if(!v.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uc(n){if(v.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":E()}function k(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fr(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Vl(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class $c{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Pl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Cs{constructor(e,t,s){this._authCredentials=t,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $c({}),this._settingsFrozen=!1,e instanceof Fe?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fe(r.options.projectId)}(e))}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $c(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new sg;switch(t.type){case"gapi":const s=t.client;return _(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new ag(s,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Fc.get(e);t&&(w("ComponentProvider","Removing Datastore"),Fc.delete(e),t.terminate())}(this),Promise.resolve()}}function iw(n,e,t,s={}){var r;const i=(n=k(n,Cs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Wn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=oe.MOCK_USER;else{o=bd(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new oe(c)}n._authCredentials=new rg(new uh(o,a))}}/**
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
 */class P{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new P(this.firestore,e,this._key)}}class me{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new me(this.firestore,e,this._query)}}class Re extends me{constructor(e,t,s){super(e,t,vn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new P(this.firestore,null,new v(e))}withConverter(e){return new Re(this.firestore,e,this._path)}}function Fl(n,e,...t){if(n=H(n),ra("collection","path",e),n instanceof Cs){const s=x.fromString(e,...t);return Uc(s),new Re(n,null,s)}{if(!(n instanceof P||n instanceof Re))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(x.fromString(e,...t));return Uc(s),new Re(n.firestore,null,s)}}function ow(n,e){if(n=k(n,Cs),ra("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new me(n,null,function(t){return new Ue(x.emptyPath(),t)}(e))}function gr(n,e,...t){if(n=H(n),arguments.length===1&&(e=hh.R()),ra("doc","path",e),n instanceof Cs){const s=x.fromString(e,...t);return Bc(s),new P(n,null,new v(s))}{if(!(n instanceof P||n instanceof Re))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(x.fromString(e,...t));return Bc(s),new P(n.firestore,n instanceof Re?n.converter:null,new v(s))}}function Bl(n,e){return n=H(n),e=H(e),(n instanceof P||n instanceof Re)&&(e instanceof P||e instanceof Re)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Ul(n,e){return n=H(n),e=H(e),n instanceof me&&e instanceof me&&n.firestore===e.firestore&&Is(n._query,e._query)&&n.converter===e.converter}/**
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
 */class aw{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Bo(this,"async_queue_retry"),this.Qa=()=>{const t=Ws();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const e=Ws();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=Ws();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const t=new Z;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!Bt(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const t=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw z("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.qa=!1,s))));return this.Fa=t,t}enqueueAfterDelay(e,t,s){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const r=jo.createAndSchedule(this,e,t,s,i=>this.Ha(i));return this.La.push(r),r}ja(){this.Ua&&E()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.La)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}}function Vi(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class cw{constructor(){this._progressObserver={},this._taskCompletionResolver=new Z,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const uw=-1;class $ extends Cs{constructor(e,t,s){super(e,t,s),this.type="firestore",this._queue=new aw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||$l(this),this._firestoreClient.terminate()}}function se(n){return n._firestoreClient||$l(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function $l(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new mg(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Yy(n._authCredentials,n._appCheckCredentials,n._queue,s)}function hw(n,e){jl(n=k(n,$));const t=se(n),s=n._freezeSettings(),r=new ea;return ql(t,r,new Nl(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function lw(n){jl(n=k(n,$));const e=se(n),t=n._freezeSettings(),s=new ea;return ql(e,s,new zy(s,t.cacheSizeBytes))}function ql(n,e,t){const s=new Z;return n.asyncQueue.enqueue(async()=>{try{await xl(n,t),await kl(n,e),s.resolve()}catch(r){if(!function(i){return i.name==="FirebaseError"?i.code===m.FAILED_PRECONDITION||i.code===m.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(r))throw r;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function dw(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Z;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ne.vt())return Promise.resolve();const s=t+"main";await Ne.delete(s)}(Lo(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function fw(n){return function(e){const t=new Z;return e.asyncQueue.enqueueAndForget(async()=>Ly(await sa(e),t)),t.promise}(se(n=k(n,$)))}function mw(n){return Xy(se(n=k(n,$)))}function gw(n){return Jy(se(n=k(n,$)))}function pw(n,e){const t=se(n=k(n,$)),s=new cw;return sw(t,n._databaseId,e,s),s}function yw(n,e){return rw(se(n=k(n,$)),e).then(t=>t?new me(n,null,t.query):null)}function jl(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class st{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Oe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oe(X.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oe(X.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $t{constructor(e){this._methodName=e}}/**
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
 */class Br{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return A(this._lat,e._lat)||A(this._long,e._long)}}/**
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
 */const ww=/^__.*__$/;class vw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new Es(e,this.data,t,this.fieldTransforms)}}class Kl{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Ur{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Ur(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.nc({path:s,ic:!1});return r.rc(e),r}oc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.nc({path:s,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return pr(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Gl(this.ec)&&ww.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class Iw{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=s||Ds(e)}lc(e,t,s,r=!1){return new Ur({ec:e,methodName:t,hc:s,path:Y.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function qt(n){const e=n._freezeSettings(),t=Ds(n._databaseId);return new Iw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $r(n,e,t,s,r,i={}){const o=n.lc(i.merge||i.mergeFields?2:0,e,t,r);ca("Data must be an object, but it was:",o,s);const a=Hl(s,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=Fi(e,l,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Yl(h,d)||h.push(d)}c=new rn(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new vw(new de(a),c,u)}class Ns extends $t{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ns}}function zl(n,e,t){return new Ur({ec:3,hc:e.settings.hc,methodName:n._methodName,ic:t},e.databaseId,e.M,e.ignoreUndefinedProperties)}class ia extends $t{_toFieldTransform(e){return new bs(e.path,new an)}isEqual(e){return e instanceof ia}}class bw extends $t{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=zl(this,e,!0),s=this.fc.map(i=>jt(i,t)),r=new xt(s);return new bs(e.path,r)}isEqual(e){return this===e}}class Ew extends $t{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=zl(this,e,!0),s=this.fc.map(i=>jt(i,t)),r=new kt(s);return new bs(e.path,r)}isEqual(e){return this===e}}class Tw extends $t{constructor(e,t){super(e),this.dc=t}_toFieldTransform(e){const t=new cn(e.M,Ch(e.M,this.dc));return new bs(e.path,t)}isEqual(e){return this===e}}function oa(n,e,t,s){const r=n.lc(1,e,t);ca("Data must be an object, but it was:",r,s);const i=[],o=de.empty();Vt(s,(c,u)=>{const h=ua(e,c,t);u=H(u);const l=r.oc(h);if(u instanceof Ns)i.push(h);else{const d=jt(u,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new rn(i);return new Kl(o,a,r.fieldTransforms)}function aa(n,e,t,s,r,i){const o=n.lc(1,e,t),a=[Fi(e,s,t)],c=[r];if(i.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Fi(e,i[d])),c.push(i[d+1]);const u=[],h=de.empty();for(let d=a.length-1;d>=0;--d)if(!Yl(u,a[d])){const g=a[d];let p=c[d];p=H(p);const T=o.oc(g);if(p instanceof Ns)u.push(g);else{const C=jt(p,T);C!=null&&(u.push(g),h.set(g,C))}}const l=new rn(u);return new Kl(h,l,o.fieldTransforms)}function Wl(n,e,t,s=!1){return jt(t,n.lc(s?4:3,e))}function jt(n,e){if(Ql(n=H(n)))return ca("Unsupported field value:",e,n),Hl(n,e);if(n instanceof $t)return function(t,s){if(!Gl(s.ec))throw s.ac(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=jt(o,s.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=H(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Ch(s.M,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=j.fromDate(t);return{timestampValue:Zn(s.M,r)}}if(t instanceof j){const r=new j(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Zn(s.M,r)}}if(t instanceof Br)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Oe)return{bytesValue:Fh(s.M,t._byteString)};if(t instanceof P){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:So(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ac(`Unsupported field value: ${Fr(t)}`)}(n,e)}function Hl(n,e){const t={};return dh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vt(n,(s,r)=>{const i=jt(r,e.sc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Ql(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof j||n instanceof Br||n instanceof Oe||n instanceof P||n instanceof $t)}function ca(n,e,t){if(!Ql(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Fr(t);throw s==="an object"?e.ac(n+" a custom object"):e.ac(n+" "+s)}}function Fi(n,e,t){if((e=H(e))instanceof st)return e._internalPath;if(typeof e=="string")return ua(n,e);throw pr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sw=new RegExp("[~\\*/\\[\\]]");function ua(n,e,t){if(e.search(Sw)>=0)throw pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new st(...e.split("."))._internalPath}catch{throw pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pr(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new y(m.INVALID_ARGUMENT,a+n+c)}function Yl(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class rs{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new P(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _w(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _w extends rs{data(){return super.data()}}function qr(n,e){return typeof e=="string"?ua(n,e):e instanceof st?e._internalPath:e._delegate._internalPath}/**
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
 */class vt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Be extends rs{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Bn extends Be{data(e={}){return super.data(e)}}class rt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new vt(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Bn(this._firestore,this._userDataWriter,s.key,s,new vt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Bn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Dw(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Dw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}function Xl(n,e){return n instanceof Be&&e instanceof Be?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof rt&&e instanceof rt&&n._firestore===e._firestore&&Ul(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function Jl(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xs{}function je(n,...e){for(const t of e)n=t._apply(n);return n}class Aw extends xs{constructor(e,t,s){super(),this._c=e,this.wc=t,this.mc=s,this.type="where"}_apply(e){const t=qt(e.firestore),s=function(r,i,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){jc(h,u);const g=[];for(const p of h)g.push(qc(a,r,p));l={arrayValue:{values:g}}}else l=qc(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||jc(h,u),l=Wl(o,i,h,u==="in"||u==="not-in");const d=ce.create(c,u,l);return function(g,p){if(p.S()){const C=Io(g);if(C!==null&&!C.isEqual(p.field))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${p.field.toString()}'`);const V=vo(g);V!==null&&sd(g,p.field,V)}const T=function(C,V){for(const re of C.filters)if(V.indexOf(re.op)>=0)return re.op;return null}(g,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(T!==null)throw T===p.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${T.toString()}' filters.`)}(r,d),d}(e._query,"where",t,e.firestore._databaseId,this._c,this.wc,this.mc);return new me(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Ue(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function Cw(n,e,t){const s=e,r=qr("where",n);return new Aw(r,s,t)}class Nw extends xs{constructor(e,t){super(),this._c=e,this.gc=t,this.type="orderBy"}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Zt(r,i);return function(a,c){if(vo(a)===null){const u=Io(a);u!==null&&sd(a,u,c.field)}}(s,o),o}(e._query,this._c,this.gc);return new me(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ue(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function xw(n,e="asc"){const t=e,s=qr("orderBy",n);return new Nw(s,t)}class Zl extends xs{constructor(e,t,s){super(),this.type=e,this.yc=t,this.Ic=s}_apply(e){return new me(e.firestore,e.converter,Eh(e._query,this.yc,this.Ic))}}function kw(n){return Vl("limit",n),new Zl("limit",n,"F")}function Mw(n){return Vl("limitToLast",n),new Zl("limitToLast",n,"L")}class ed extends xs{constructor(e,t,s){super(),this.type=e,this.Tc=t,this.Ec=s}_apply(e){const t=nd(e,this.type,this.Tc,this.Ec);return new me(e.firestore,e.converter,function(s,r){return new Ue(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function Rw(...n){return new ed("startAt",n,!0)}function Lw(...n){return new ed("startAfter",n,!1)}class td extends xs{constructor(e,t,s){super(),this.type=e,this.Tc=t,this.Ec=s}_apply(e){const t=nd(e,this.type,this.Tc,this.Ec);return new me(e.firestore,e.converter,function(s,r){return new Ue(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function Ow(...n){return new td("endBefore",n,!1)}function Pw(...n){return new td("endAt",n,!0)}function nd(n,e,t,s){if(t[0]=H(t[0]),t[0]instanceof rs)return function(r,i,o,a,c){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const h of on(r))if(h.field.isKeyField())u.push(Ct(i,a.key));else{const l=a.data.field(h.field);if(wo(l))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(l===null){const d=h.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(l)}return new tt(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=qt(n.firestore);return function(i,o,a,c,u,h){const l=i.explicitOrderBy;if(u.length>l.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<u.length;g++){const p=u[g];if(l[g].field.isKeyField()){if(typeof p!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!bo(i)&&p.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const T=i.path.child(x.fromString(p));if(!v.isDocumentKey(T))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const C=new v(T);d.push(Ct(o,C))}else{const T=Wl(a,c,p);d.push(T)}}return new tt(d,h)}(n._query,n.firestore._databaseId,r,e,t,s)}}function qc(n,e,t){if(typeof(t=H(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bo(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(x.fromString(t));if(!v.isDocumentKey(s))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ct(n,new v(s))}if(t instanceof P)return Ct(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(t)}.`)}function jc(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function sd(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */const Vw={maxAttempts:5};/**
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
 */class ha{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return U(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){const s={};return Vt(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new Br(U(e.latitude),U(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=fh(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Qn(e));default:return null}}convertTimestamp(e){const t=Ze(e);return new j(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=x.fromString(e);_(Wh(s));const r=new Fe(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(t)||z(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function jr(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Fw extends ha{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new P(this.firestore,null,t)}}/**
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
 */class Bw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=qt(e)}set(e,t,s){this._verifyNotCommitted();const r=Ge(e,this._firestore),i=jr(r.converter,t,s),o=$r(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,W.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=Ge(e,this._firestore);let o;return o=typeof(t=H(t))=="string"||t instanceof st?aa(this._dataReader,"WriteBatch.update",i._key,t,s,r):oa(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,W.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ge(e,this._firestore);return this._mutations=this._mutations.concat(new Ts(t._key,W.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ge(n,e){if((n=H(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Uw(n){n=k(n,P);const e=k(n.firestore,$);return Ll(se(e),n._key).then(t=>la(e,n,t))}class Kt extends ha{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new P(this.firestore,null,t)}}function $w(n){n=k(n,P);const e=k(n.firestore,$),t=se(e),s=new Kt(e);return Zy(t,n._key).then(r=>new Be(e,s,n._key,r,new vt(r!==null&&r.hasLocalMutations,!0),n.converter))}function qw(n){n=k(n,P);const e=k(n.firestore,$);return Ll(se(e),n._key,{source:"server"}).then(t=>la(e,n,t))}function jw(n){n=k(n,me);const e=k(n.firestore,$),t=se(e),s=new Kt(e);return Jl(n._query),Ol(t,n._query).then(r=>new rt(e,s,n,r))}function Kw(n){n=k(n,me);const e=k(n.firestore,$),t=se(e),s=new Kt(e);return ew(t,n._query).then(r=>new rt(e,s,n,r))}function Gw(n){n=k(n,me);const e=k(n.firestore,$),t=se(e),s=new Kt(e);return Ol(t,n._query,{source:"server"}).then(r=>new rt(e,s,n,r))}function Kc(n,e,t){n=k(n,P);const s=k(n.firestore,$),r=jr(n.converter,e,t);return ks(s,[$r(qt(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,W.none())])}function Gc(n,e,t,...s){n=k(n,P);const r=k(n.firestore,$),i=qt(r);let o;return o=typeof(e=H(e))=="string"||e instanceof st?aa(i,"updateDoc",n._key,e,t,s):oa(i,"updateDoc",n._key,e),ks(r,[o.toMutation(n._key,W.exists(!0))])}function zw(n){return ks(k(n.firestore,$),[new Ts(n._key,W.none())])}function Ww(n,e){const t=k(n.firestore,$),s=gr(n),r=jr(n.converter,e);return ks(t,[$r(qt(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,W.exists(!1))]).then(()=>s)}function rd(n,...e){var t,s,r;n=H(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vi(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Vi(e[o])){const l=e[o];e[o]=(t=l.next)===null||t===void 0?void 0:t.bind(l),e[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),e[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(n instanceof P)u=k(n.firestore,$),h=vn(n._key.path),c={next:l=>{e[o]&&e[o](la(u,n,l))},error:e[o+1],complete:e[o+2]};else{const l=k(n,me);u=k(l.firestore,$),h=l._query;const d=new Kt(u);c={next:g=>{e[o]&&e[o](new rt(u,d,l,g))},error:e[o+1],complete:e[o+2]},Jl(n._query)}return function(l,d,g,p){const T=new Pr(p),C=new Wo(d,T,g);return l.asyncQueue.enqueueAndForget(async()=>Ko(await fn(l),C)),()=>{T.Aa(),l.asyncQueue.enqueueAndForget(async()=>Go(await fn(l),C))}}(se(u),h,a,c)}function Hw(n,e){return tw(se(n=k(n,$)),Vi(e)?e:{next:e})}function ks(n,e){return function(t,s){const r=new Z;return t.asyncQueue.enqueueAndForget(async()=>xy(await sa(t),s,r)),r.promise}(se(n),e)}function la(n,e,t){const s=t.docs.get(e._key),r=new Kt(n);return new Be(n,r,e._key,s,new vt(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Qw extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=qt(e)}get(e){const t=Ge(e,this._firestore),s=new Fw(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return E();const i=r[0];if(i.isFoundDocument())return new rs(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new rs(this._firestore,s,t._key,null,t.converter);throw E()})}set(e,t,s){const r=Ge(e,this._firestore),i=jr(r.converter,t,s),o=$r(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=Ge(e,this._firestore);let o;return o=typeof(t=H(t))=="string"||t instanceof st?aa(this._dataReader,"Transaction.update",i._key,t,s,r):oa(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Ge(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ge(e,this._firestore),s=new Kt(this._firestore);return super.get(e).then(r=>new Be(this._firestore,s,t._key,r._document,new vt(!1,!1),t.converter))}}function Yw(n,e,t){n=k(n,$);const s=Object.assign(Object.assign({},Vw),t);return function(r){if(r.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),nw(se(n),r=>e(new Qw(n,r)),s)}/**
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
 */function Xw(){return new Ns("deleteField")}function Jw(){return new ia("serverTimestamp")}function Zw(...n){return new bw("arrayUnion",n)}function ev(...n){return new Ew("arrayRemove",n)}function tv(n){return new Tw("increment",n)}(function(n,e=!0){(function(t){wn=t})(Gi),tn(new Et("firestore",(t,{options:s})=>{const r=t.getProvider("app").getImmediate(),i=new $(r,new ig(t.getProvider("auth-internal")),new ug(t.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),He(ja,"3.4.9",n),He(ja,"3.4.9","esm2017")})();/**
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
 */class nv{constructor(e,t){this._delegate=e,this.firebase=t,Ys(e,new Et("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ru(this._delegate)))}_getService(e,t=Tt){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Tt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ys(this._delegate,e)}_addOrOverwriteComponent(e){tu(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const sv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},zc=new yr("app-compat","Firebase",sv);/**
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
 */function rv(n){const e={},t={__esModule:!0,initializeApp:i,app:r,registerVersion:He,setLogLevel:ou,onLog:iu,apps:null,SDK_VERSION:Gi,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:Hf}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(u){delete e[u]}function r(u){if(u=u||Tt,!va(e,u))throw zc.create("no-app",{appName:u});return e[u]}r.App=n;function i(u,h={}){const l=su(u,h);if(va(e,l.name))return e[l.name];const d=new n(l,t);return e[l.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const h=u.name,l=h.replace("-compat","");if(tn(u)&&u.type==="PUBLIC"){const d=(g=r())=>{if(typeof g[l]!="function")throw zc.create("invalid-app-argument",{appName:h});return g[l]()};u.serviceProps!==void 0&&Qs(d,u.serviceProps),t[l]=d,n.prototype[l]=function(...g){return this._getService.bind(this,h).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?t[l]:null}function c(u,h){return h==="serverAuth"?null:h}return t}/**
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
 */function id(){const n=rv(nv);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:id,extendNamespace:e,createSubscribe:Od,ErrorFactory:yr,deepExtend:Qs});function e(t){Qs(n,t)}return n}const iv=id();/**
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
 */const Wc=new qi("@firebase/app-compat"),ov="@firebase/app-compat",av="0.1.25";/**
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
 */function cv(n){He(ov,av,n)}/**
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
 */if(Sd()&&self.firebase!==void 0){Wc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Wc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const da=iv;cv();var uv="firebase",hv="9.8.1";/**
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
 */da.registerVersion(uv,hv,"app-compat");const lv="@firebase/firestore-compat",dv="0.1.18";/**
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
 */function fa(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Hc(){if(typeof Uint8Array=="undefined")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function Qc(){if(!dg())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class is{constructor(e){this._delegate=e}static fromBase64String(e){return Qc(),new is(Oe.fromBase64String(e))}static fromUint8Array(e){return Hc(),new is(Oe.fromUint8Array(e))}toBase64(){return Qc(),this._delegate.toBase64()}toUint8Array(){return Hc(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Bi(n){return fv(n,["next","error","complete"])}function fv(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
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
 */class mv{enableIndexedDbPersistence(e,t){return hw(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return lw(e._delegate)}clearIndexedDbPersistence(e){return dw(e._delegate)}}class od{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fe||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Wn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){iw(this._delegate,e,t,s)}enableNetwork(){return mw(this._delegate)}disableNetwork(){return gw(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,Pl("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return fw(this._delegate)}onSnapshotsInSync(e){return Hw(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new mn(this,Fl(this._delegate,e))}catch(t){throw ye(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ae(this,gr(this._delegate,e))}catch(t){throw ye(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new pe(this,ow(this._delegate,e))}catch(t){throw ye(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Yw(this._delegate,t=>e(new ad(this,t)))}batch(){return se(this._delegate),new cd(new Bw(this._delegate,e=>ks(this._delegate,e)))}loadBundle(e){return pw(this._delegate,e)}namedQuery(e){return yw(this._delegate,e).then(t=>t?new pe(this,t):null)}}class Kr extends ha{constructor(e){super();this.firestore=e}convertBytes(e){return new is(new Oe(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ae.forKey(t,this.firestore,null)}}function gv(n){tg(n)}class ad{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Kr(e)}get(e){const t=It(e);return this._delegate.get(t).then(s=>new os(this._firestore,new Be(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const r=It(e);return s?(fa("Transaction.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=It(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=It(e);return this._delegate.delete(t),this}}class cd{constructor(e){this._delegate=e}set(e,t,s){const r=It(e);return s?(fa("WriteBatch.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=It(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=It(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ot{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new Bn(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new as(this._firestore,s),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=Ot.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(t);return i||(i=new Ot(e,new Kr(e),t),r.set(t,i)),i}}Ot.INSTANCES=new WeakMap;class Ae{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Kr(e)}static forPath(e,t,s){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ae(t,new P(t._delegate,s,new v(e)))}static forKey(e,t,s){return new Ae(t,new P(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new mn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new mn(this.firestore,Fl(this._delegate,e))}catch(t){throw ye(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof P?Bl(this._delegate,e):!1}set(e,t){t=fa("DocumentReference.set",t);try{return t?Kc(this._delegate,e,t):Kc(this._delegate,e)}catch(s){throw ye(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?Gc(this._delegate,e):Gc(this._delegate,e,t,...s)}catch(r){throw ye(r,"updateDoc()","DocumentReference.update()")}}delete(){return zw(this._delegate)}onSnapshot(...e){const t=ud(e),s=hd(e,r=>new os(this.firestore,new Be(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return rd(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=$w(this._delegate):(e==null?void 0:e.source)==="server"?t=qw(this._delegate):t=Uw(this._delegate),t.then(s=>new os(this.firestore,new Be(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new Ae(this.firestore,e?this._delegate.withConverter(Ot.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ye(n,e,t){return n.message=n.message.replace(e,t),n}function ud(n){for(const e of n)if(typeof e=="object"&&!Bi(e))return e;return{}}function hd(n,e){var t,s;let r;return Bi(n[0])?r=n[0]:Bi(n[1])?r=n[1]:typeof n[0]=="function"?r={next:n[0],error:n[1],complete:n[2]}:r={next:n[1],error:n[2],complete:n[3]},{next:i=>{r.next&&r.next(e(i))},error:(t=r.error)===null||t===void 0?void 0:t.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class os{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ae(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Xl(this._delegate,e._delegate)}}class as extends os{data(e){const t=this._delegate.data(e);return ng(t!==void 0),t}}class pe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Kr(e)}where(e,t,s){try{return new pe(this.firestore,je(this._delegate,Cw(e,t,s)))}catch(r){throw ye(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new pe(this.firestore,je(this._delegate,xw(e,t)))}catch(s){throw ye(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new pe(this.firestore,je(this._delegate,kw(e)))}catch(t){throw ye(t,"limit()","Query.limit()")}}limitToLast(e){try{return new pe(this.firestore,je(this._delegate,Mw(e)))}catch(t){throw ye(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new pe(this.firestore,je(this._delegate,Rw(...e)))}catch(t){throw ye(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new pe(this.firestore,je(this._delegate,Lw(...e)))}catch(t){throw ye(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new pe(this.firestore,je(this._delegate,Ow(...e)))}catch(t){throw ye(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new pe(this.firestore,je(this._delegate,Pw(...e)))}catch(t){throw ye(t,"endAt()","Query.endAt()")}}isEqual(e){return Ul(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Kw(this._delegate):(e==null?void 0:e.source)==="server"?t=Gw(this._delegate):t=jw(this._delegate),t.then(s=>new Ui(this.firestore,new rt(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=ud(e),s=hd(e,r=>new Ui(this.firestore,new rt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return rd(this._delegate,t,s)}withConverter(e){return new pe(this.firestore,e?this._delegate.withConverter(Ot.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class pv{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new as(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ui{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new pe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new as(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new pv(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new as(this._firestore,s))})}isEqual(e){return Xl(this._delegate,e._delegate)}}class mn extends pe{constructor(e,t){super(e,t);this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ae(this.firestore,e):null}doc(e){try{return e===void 0?new Ae(this.firestore,gr(this._delegate)):new Ae(this.firestore,gr(this._delegate,e))}catch(t){throw ye(t,"doc()","CollectionReference.doc()")}}add(e){return Ww(this._delegate,e).then(t=>new Ae(this.firestore,t))}isEqual(e){return Bl(this._delegate,e._delegate)}withConverter(e){return new mn(this.firestore,e?this._delegate.withConverter(Ot.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function It(n){return k(n,P)}/**
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
 */class ma{constructor(...e){this._delegate=new st(...e)}static documentId(){return new ma(Y.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof st?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class pt{constructor(e){this._delegate=e}static serverTimestamp(){const e=Jw();return e._methodName="FieldValue.serverTimestamp",new pt(e)}static delete(){const e=Xw();return e._methodName="FieldValue.delete",new pt(e)}static arrayUnion(...e){const t=Zw(...e);return t._methodName="FieldValue.arrayUnion",new pt(t)}static arrayRemove(...e){const t=ev(...e);return t._methodName="FieldValue.arrayRemove",new pt(t)}static increment(e){const t=tv(e);return t._methodName="FieldValue.increment",new pt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const yv={Firestore:od,GeoPoint:Br,Timestamp:j,Blob:is,Transaction:ad,WriteBatch:cd,DocumentReference:Ae,DocumentSnapshot:os,Query:pe,QueryDocumentSnapshot:as,QuerySnapshot:Ui,CollectionReference:mn,FieldPath:ma,FieldValue:pt,setLogLevel:gv,CACHE_SIZE_UNLIMITED:uw};function wv(n,e){n.INTERNAL.registerComponent(new Et("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},yv)))}/**
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
 */function vv(n){wv(n,(e,t)=>new od(e,t,new mv)),n.registerVersion(lv,dv)}vv(da);const Iv={apiKey:"AIzaSyC2vg15ei7MtOBuz99fEquTP2PFOBXQ6Mg",authDomain:"twitter-clone-ea00d.firebaseapp.com",projectId:"twitter-clone-ea00d",storageBucket:"twitter-clone-ea00d.appspot.com",messagingSenderId:"1049984733918",appId:"1:1049984733918:web:1c50c4e6c6dc04f9d6a84f"},bv=da.initializeApp(Iv),Ev=bv.firestore();var Sv=Object.freeze(Object.defineProperty({__proto__:null,db:Ev},Symbol.toStringTag,{value:"Module"}));export{je as C,gr as I,xw as M,Sv as a,Gc as c,Ev as d,rd as f,zw as h,Ww as l,Fl as y};
