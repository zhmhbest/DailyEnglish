!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=document.querySelector("#menu"),a=document.querySelector("#progressTitle"),i=document.querySelector("#progressBar"),u=document.querySelector("#messageTips"),s=document.querySelector("#messageResult");let c,l,f,d;function p(e,t){a.innerText=`${e}/${t}`}function v(){p(l,f),i.value=l,i.max=f}function h(e){u.innerText=e}function y(e){s.innerText=e}r.ajax.get("assets/manifest.json","json").then(e=>{r.form.setSelectOptions(o,e)}),window.onload=function(){h("--- None ---"),p("NaN","NaN"),window.onMenuChange=function(){var e,t;y(""),d=void 0,o.value.length>0?r.ajax.get(o.value,"text").then(e=>{const t=e.split("\n").sort((e,t)=>Math.random()>.5?-1:1);h("--- Start ---"),l=0,f=t.length,c=t,v()}):(h("--- None ---"),e=-1,t=-1,i.value=e,i.max=t,p("NaN","NaN"))},window.onButtonPre=function(){if(void 0!==c&&l>1){y(""),l--;d=c[l-1].split(","),h(d[0]),v()}},window.onButtonNxt=function(){if(void 0!==c&&l<f){y("");const e=l;l++,d=c[e].split(","),h(d[0]),v()}},window.onHintNeed=function(){void 0!==d&&y(d[1])}}},function(e,t){!function(e,t){for(var n in t)e[n]=t[n]}(t,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.setData=t.getData=t.getHash=t.pushOnHashChange=t.parse=t.stringify=void 0;var a=n(1);t.stringify=function(e,t,n){t=t||"&",n=n||"=";for(var r=[],o=0,a=Object.keys(e);o<a.length;o++){var i=a[o],u=e[i];r.push([i,encodeURIComponent(JSON.stringify(u))].join(n))}return r.join(t)},t.parse=function(e,t,n){var o={};if(0===(e=e.trim()).length)return o;t=t||"&",n=n||"=";var a,i=r(e.split(t));try{for(i.s();!(a=i.n()).done;){var u=a.value.split(n);Object.defineProperty(o,u[0],{value:JSON.parse(decodeURIComponent(u[1]))})}}catch(e){i.e(e)}finally{i.f()}return o},t.pushOnHashChange=function(e){var t=window.onhashchange;window.onhashchange=null==t?e:function(n){t.call(this,n),e.call(this,n)}},t.getHash=function(){var e=window.location.hash.toString();return e.substr(1,e.length-1)},t.getData=function(){var e=a.splitFirstString(t.getHash(),"?");return t.parse(e[1])},t.setData=function(e){var n=a.splitFirstString(t.getHash(),"?");window.location.hash="".concat(n[0],"?").concat(t.stringify(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.splitFirstString=void 0,t.splitFirstString=function(e,t){var n=e.indexOf(t);return-1===n?[e,""]:[e.substr(0,n),e.substr(n+1,e.length-n-1)]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.file=t.form=t.cookie=t.date=t.ajax=t.arr=t.str=t.hash=t.screen=void 0;var r=n(3);t.screen=r;var o=n(0);t.hash=o;var a=n(1);t.str=a;var i=n(4);t.arr=i;var u=n(5);t.ajax=u;var s=n(6);t.date=s;var c=n(7);t.cookie=c;var l=n(8);t.form=l;var f=n(9);t.file=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pushOnScreenResize=t.getClientRect=void 0,t.getClientRect=function(){var e=document.documentElement;return{top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}},t.pushOnScreenResize=function(e){var t=window.onresize;window.onresize=null==t?e:function(n){t.call(this,n),e.call(this,n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Requester=t.post=t.get=void 0;var o=n(0),a=function(e,t,n,r,o){return new Promise((function(a,i){!function(e,t,n,r){var o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");o.onreadystatechange=function(e){r(this.readyState,this,e)},o.open(e,t),o.send(n)}(e,t,void 0===r?null:r,(function(e,t,r){switch(e){case XMLHttpRequest.OPENED:if(t.responseType=n||"text",null==o)break;for(var u=0,s=Object.keys(o);u<s.length;u++){var c=s[u];t.setRequestHeader(c,o[c])}break;case XMLHttpRequest.DONE:t.status>=200&&t.status<300||304===t.status?a(t.response):i(new Error(t.statusText))}}))}))};t.get=function(e,t,n,r){return null!=n&&(e="".concat(e,"?").concat(o.stringify(n))),a("GET",e,t,null,r)},t.post=function(e,t,n,r){var o=null;if(null!=n)if(n instanceof FormData)o=n;else{o=new FormData;for(var i=0,u=Object.keys(n);i<u.length;i++){var s=u[i];o.append(s,n[s])}}return a("POST",e,t,o,r)};var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._prefix=null==t?"":t,this._data=null==n?{}:n,this._headers=null==r?{}:r}var n,o;return n=e,(o=[{key:"get",value:function(e,n,r,o){return r=r||{},o=o||{},t.get(this._prefix+e,n,Object.assign(Object.assign({},this._data),r),Object.assign(Object.assign({},this._headers),o))}},{key:"post",value:function(e,n,r,o){return r=r||{},o=o||{},t.post(this._prefix+e,n,Object.assign(Object.assign({},this._data),r),Object.assign(Object.assign({},this._headers),o))}},{key:"getJson",value:function(e,n,r){return t.get(e,"json",n,r)}},{key:"postJson",value:function(e,n,r){return t.post(e,"json",n,r)}},{key:"getBlob",value:function(e,n,r){return t.get(e,"blob",n,r)}},{key:"postBlob",value:function(e,n,r){return t.post(e,"blob",n,r)}},{key:"prefix",get:function(){return this._prefix},set:function(e){this._prefix=e}},{key:"data",get:function(){return this._data},set:function(e){this._data=e}},{key:"headers",get:function(){return this._headers},set:function(e){this._headers=e}}])&&r(n.prototype,o),e}();t.Requester=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0,t.format=function(e,t){e=void 0===e?new Date:e instanceof Date?e:new Date(e),t=t||"y-M-d h:m:s";for(var n=[],r=0;r<t.length;r++){var o=t.substr(r,1);switch(o){case"y":n.push(e.getFullYear());break;case"M":n.push(e.getMonth()+1);break;case"d":n.push(e.getDate());break;case"h":n.push(e.getHours());break;case"m":n.push(e.getMinutes());break;case"s":n.push(e.getSeconds());break;case"S":n.push(e.getMilliseconds());break;default:n.push(o)}}return n.join("")}},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.get=t.del=t.set=void 0,t.set=function(e,t,n,r){n=function(e){if(e instanceof Date)return e;if("string"==typeof e)return new Date(e);if("number"==typeof e){var t=new Date;return t.setTime(t.getTime()+1e3*e),t}}(n);var a=[];a.push(e.trim()),a.push("="),a.push(encodeURIComponent(JSON.stringify(t))),void 0!==n&&(a.push(";expires="),a.push(n.toUTCString())),void 0!==r&&(a.push(";path="),a.push(r)),document.cookie=a.join(""),o=void 0},t.del=function(e,t){var n=[];n.push(e.trim()),n.push("="),n.push(";expires="),n.push((new Date).toUTCString()),void 0!==t&&(n.push(";path="),n.push(t)),document.cookie=n.join(""),o=void 0};var o=void 0;t.get=function(e,t){return void 0!==o&&!0!==t||function(){o={};var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}(document.cookie.split(";"));try{for(t.s();!(e=t.n()).done;){var n=e.value.trim().split("=");Object.defineProperty(o,n[0],{value:JSON.parse(decodeURIComponent(n[1]))})}}catch(e){t.e(e)}finally{t.f()}}(),o[e]}},function(e,t,n){"use strict";function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.setSelectOptions=t.setFormValues=t.getFormValues=void 0,t.getFormValues=function(e){var t=e instanceof HTMLFormElement?e:document.querySelector(e);if("FORM"!==t.tagName.toUpperCase())return null;var n,o={},a=r(t.elements);try{for(a.s();!(n=a.n()).done;){var i=n.value;if(null!==i.name&&null!==i.type)switch(i.type){case"radio":if(!i.checked)break;Object.defineProperty(o,i.name,{value:i.value});break;case"checkbox":o.hasOwnProperty(i.name)||Object.defineProperty(o,i.name,{value:[]}),i.checked&&o[i.name].push(i.value);break;case"file":i.files.length>0&&Object.defineProperty(o,i.name,{value:i.files[0]});break;case"select-one":case"text":case"password":case"number":case"email":case"range":case"date":case"time":case"datetime":case"datetime-local":case"week":case"month":case"year":case"color":case"textarea":if(o.hasOwnProperty(i.name))break;Object.defineProperty(o,i.name,{value:i.value})}}}catch(e){a.e(e)}finally{a.f()}return o},t.setFormValues=function(e,t){var n=e instanceof HTMLFormElement?e:document.querySelector(e);if("FORM"===n.tagName.toUpperCase())for(var o=0,a=Object.keys(t);o<a.length;o++){var i=a[o],u=t[i],s=n.querySelectorAll("input[name='".concat(i,"'],select[name='").concat(i,"'],textarea[name='").concat(i,"']"));if(0!==s.length)switch(s[0].type){case"radio":var c,l=r(s);try{for(l.s();!(c=l.n()).done;){var f=c.value;"radio"===f.type&&(f.checked=u==f.value)}}catch(e){l.e(e)}finally{l.f()}break;case"checkbox":var d,p=r(s);try{var v=function(){var e=d.value;"checkbox"===e.type&&(e.checked=u.some((function(t){return t==e.value})))};for(p.s();!(d=p.n()).done;)v()}catch(e){p.e(e)}finally{p.f()}break;case"file":s[0].click();default:s[0].value=u}}},t.setSelectOptions=function(e,t){var n=e instanceof HTMLSelectElement?e:document.querySelector(e);"SELECT"===n.tagName.toUpperCase()&&(n.options.length=0,t.forEach((function(e){n.add(new Option(e.title,e.value))})))}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.readFileBinary=t.readFileBase64=t.readFileText=t.downloadText=t.downloadBlob=t.FileLoader=void 0;var o=window.URL||window.webkitURL,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=document.createElement("input"),this.input.type="file"}var t,n;return t=e,(n=[{key:"set",value:function(e,t){this.input.setAttribute(e,t)}},{key:"bind",value:function(e){var t=this.input;t.onchange=function(n){e(t.files)}}},{key:"load",value:function(){this.input.value="",this.input.click()}},{key:"bindLoad",value:function(e){this.bind(e),this.load()}}])&&r(t.prototype,n),e}();t.FileLoader=a,t.downloadBlob=function(e,t){t=t||"file"+(new Date).getTime();var n=document.createElement("a");n.href=o.createObjectURL(e),n.download=t,n.click(),n.remove()},t.downloadText=function(e,n){var r=new Blob([JSON.stringify(e,void 0,"    ")]);t.downloadBlob(r,n)},t.readFileText=function(e,t){var n=new FileReader;n.readAsText(e),n.onload=function(e){t(this.result)}},t.readFileBase64=function(e,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(e){t(this.result)}},t.readFileBinary=function(e,t){var n=new FileReader;n.readAsBinaryString(e),n.onload=function(e){t(this.result)}}}]))}]);