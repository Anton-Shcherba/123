/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={940:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(81),r=n.n(i),o=n(645),s=n.n(o)()(r());s.push([t.id,".glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows{-webkit-touch-callout:none;user-select:none}.glide__bullets{-webkit-touch-callout:none;user-select:none}.glide--rtl{direction:rtl}\n",""]);const a=s},556:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(81),r=n.n(i),o=n(645),s=n.n(o)()(r());s.push([t.id,".glide__arrow{position:absolute;display:block;top:50%;z-index:2;color:#fff;text-transform:uppercase;padding:9px 12px;background-color:transparent;border:2px solid rgba(255,255,255,.5);border-radius:4px;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity 150ms ease,border 300ms ease-in-out;transform:translateY(-50%);line-height:1}.glide__arrow:focus{outline:none}.glide__arrow:hover{border-color:#fff}.glide__arrow--left{left:2em}.glide__arrow--right{right:2em}.glide__arrow--disabled{opacity:.33}.glide__bullets{position:absolute;z-index:2;bottom:2em;left:50%;display:inline-flex;list-style:none;transform:translateX(-50%)}.glide__bullet{background-color:rgba(255,255,255,.5);width:9px;height:9px;padding:0;border-radius:50%;border:2px solid transparent;transition:all 300ms ease-in-out;cursor:pointer;line-height:0;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);margin:0 .25em}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:2px solid #fff;background-color:rgba(255,255,255,.5)}.glide__bullet--active{background-color:#fff}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}\n",""]);const a=s},144:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(81),r=n.n(i),o=n(645),s=n.n(o),a=n(940),u=n(556),c=s()(r());c.i(a.Z),c.i(u.Z),c.push([t.id,'.product-card{position:relative;display:flex;flex-direction:column;align-items:center;background-color:#83796f;border-radius:16px;overflow:hidden;box-shadow:0px 4px 8px rgba(0,0,0,0.25);width:280px;height:280px;padding:16px;margin:16px auto;z-index:1}.product-card__image{width:100%;height:100%;object-fit:cover;border-radius:8px}.product-card__price{background-color:#83796f;position:absolute;color:white;font-size:24px;margin:0;bottom:0;padding:8px;border-top-left-radius:8px;border-top-right-radius:8px}*,*::before,*::after{box-sizing:border-box;font-family:"Lobster",cursive;margin:0;padding:0;user-select:none}a{text-decoration:none}body{min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;margin:0;background:linear-gradient(45deg, #8b6e54, #c2b5a9)}header{display:flex;justify-content:center;background-color:#83796f;position:sticky;top:0;background:rgba(0,0,0,0.3);backdrop-filter:blur(10px);box-shadow:0px 4px 8px rgba(0,0,0,0.25);z-index:2;margin-bottom:16px;padding:1rem}header .logo{display:flex;align-items:center;gap:1rem}header .logo h1{color:#f5f5f5;font-size:2rem;margin:0}@media (max-width: 768px){header .logo h1{font-size:2.8rem}}header .logo img{width:2rem;height:2rem}@media (max-width: 768px){header .logo img{width:2.7rem;height:2.7rem}}main{max-width:1100px;display:flex;flex-direction:column;width:100%;margin:0 auto}footer{padding:1rem;display:flex;justify-content:center;align-items:center;background-color:#83796f;color:#f5f5f5;font-family:"Lobster",cursive;background:rgba(0,0,0,0.3);backdrop-filter:blur(10px);box-shadow:0px 4px 8px rgba(0,0,0,0.25)}.about-us{width:80%;margin:10px auto;text-align:center;color:#f5f5f5;font-family:"Lobster",cursive}.about-us p{font-size:18px;line-height:1.5;margin-bottom:16px;text-align:justify}.shine-button{text-decoration:none;display:inline-block;padding:10px 30px;margin:16px auto;position:relative;overflow:hidden;border-radius:8px;font-family:"Lobster",cursive;background:#e4405f;color:#f5f5f5;font-size:1.8rem;box-shadow:0px 4px 8px rgba(0,0,0,0.25)}.shine-button::before{content:"";background:linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5));height:70px;width:50px;position:absolute;top:-8px;left:-75px;transform:skewX(-45deg);animation:downUp 3s infinite ease-in-out}@keyframes downUp{from{left:-75px}20%{left:250px}to{left:250px}}.popup{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background-color:#83796f;background:rgba(0,0,0,0.3);backdrop-filter:blur(10px);z-index:9999}.popup-content{background-color:#f5f5f5;position:absolute;display:flex;flex-direction:column;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;min-width:300px;max-width:1100px;border-radius:5px;box-shadow:0px 4px 8px rgba(0,0,0,0.25)}@media (min-width: 1350px){.popup-content{flex-direction:row}}.popup-content img{align-self:center;width:100%;height:100%;object-fit:cover;border-radius:8px;margin-bottom:1rem}@media (min-width: 1350px){.popup-content img{margin-bottom:0;margin-right:1rem}}.popup-content .wrapper{display:flex;flex-direction:column}.popup-content .wrapper p{text-align:justify}.popup-content .wrapper .shine-button{margin-bottom:0}.close-popup{position:absolute;top:-1rem;right:-1rem;font-size:2.8rem;line-height:2.8rem;text-align:center;width:3rem;height:3rem;border-radius:1.5rem;font-weight:bold;cursor:pointer;background-color:#e4405f}.popup.show{display:block}\n',""]);const l=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(s[u]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);i&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},545:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var i=n(379),r=n.n(i),o=n(795),s=n.n(o),a=n(569),u=n.n(a),c=n(565),l=n.n(c),d=n(216),f=n.n(d),p=n(589),h=n.n(p),g=n(144),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=u().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=f(),r()(g.Z,m);const v=g.Z&&g.Z.locals?g.Z.locals:void 0},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},s=[],a=0;a<t.length;a++){var u=t[a],c=i.base?u[0]+i.base:u[0],l=o[c]||0,d="".concat(c," ").concat(l);o[c]=l+1;var f=n(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=r(p,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=n(o[s]);e[a].references--}for(var u=i(t,r),c=0;c<o.length;c++){var l=n(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=u}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},607:function(t,e,n){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),n(545);const r=i(n(214)),o={type:"carousel",focusAt:"center",perView:3,gap:16,autoplay:5e3,hoverpause:!0,breakpoints:{886:{perView:2,focusAt:1},600:{perView:1}}},s=new r.default("#glide-1",o),a=new r.default("#glide-2",o),u=document.querySelector(".close-popup"),c=document.getElementById("popup"),l=document.getElementById("glides-wrap");null==l||l.addEventListener("click",(t=>{t.target.closest(".product-card")&&(null==c||c.classList.add("show"),document.body.style.overflow="hidden",s.pause(),a.pause())})),null==u||u.addEventListener("click",(()=>{null==c||c.classList.remove("show"),document.body.style.overflow="",s.play(),a.play()})),window.addEventListener("click",(t=>{t.target===c&&(null==c||c.classList.remove("show"),document.body.style.overflow="",s.play(),a.play())})),s.mount(),a.mount()},214:(t,e,n)=>{function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=a(t);if(e){var r=a(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},l.apply(this,arguments)}n.r(e),n.d(e,{default:()=>J});var d={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function f(t){console.error("[Glide warn]: ".concat(t))}function p(t){return parseInt(t)}function h(t){return"string"==typeof t}function g(t){var e=i(t);return"function"===e||"object"===e&&!!t}function m(t){return"function"==typeof t}function v(t){return void 0===t}function b(t){return t.constructor===Array}function y(t,e,n){Object.defineProperty(t,e,n)}function w(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var x=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.events=e,this.hop=e.hasOwnProperty}return s(t,[{key:"on",value:function(t,e){if(!b(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][n]}}}for(var i=0;i<t.length;i++)this.on(t[i],e)}},{key:"emit",value:function(t,e){if(b(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),_=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this._c={},this._t=[],this._e=new x,this.disabled=!1,this.selector=e,this.settings=w(d,n),this.index=this.settings.startAt}return s(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),g(t)?this._c=function(t,e,n){var i={};for(var r in e)m(e[r])?i[r]=e[r](t,i,n):f("Extension must be a function");for(var o in i)m(i[o].mount)&&i[o].mount();return i}(this,t,this._e):f("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return b(t)?this._t=t:f("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=w(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){g(t)?this._o=t:f("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=p(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function k(){return(new Date).getTime()}function S(t,e,n){var i,r,o,s,a=0;n||(n={});var u=function(){a=!1===n.leading?0:k(),i=null,s=t.apply(r,o),i||(r=o=null)},c=function(){var c=k();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,o=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),a=c,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(u,l)),s};return c.cancel=function(){clearTimeout(i),a=0,i=r=o=null},c}var T={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function O(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function H(t){return!!(t&&t instanceof window.HTMLElement)}function j(t){return Array.prototype.slice.call(t)}var A='[data-glide-el="track"]',z=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.listeners=e}return s(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];h(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),L=["ltr","rtl"],M={">":"<","<":">","=":"="};function E(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function P(t,e){return{modify:function(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}function R(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function C(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return g(i)?n-i.before:n-i}return n}}}function D(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var B=!1;try{var I=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("testPassive",null,I),window.removeEventListener("testPassive",null,I)}catch(t){}var W=B,V=["touchstart","mousedown"],q=["touchmove","mousemove"],Z=["touchend","touchcancel","mouseup","mouseleave"],F=["mousedown","mousemove","mouseup","mouseleave"],N='[data-glide-el^="controls"]',G="".concat(N,' [data-glide-dir*="<"]'),Y="".concat(N,' [data-glide-dir*=">"]');function X(t){return g(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(f("Breakpoints option must be an object"),{});var e}var U={Html:function(t,e,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(A),this.collectSlides()},collectSlides:function(){this.slides=j(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};return y(i,"root",{get:function(){return i._r},set:function(t){h(t)&&(t=document.querySelector(t)),H(t)?i._r=t:f("Root element must be a existing Html node")}}),y(i,"track",{get:function(){return i._t},set:function(t){H(t)?i._t=t:f("Could not find track element. Please use ".concat(A," attribute."))}}),y(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[P,R,C,D].concat(t._t,[E]);return{mutate:function(n){for(var r=0;r<i.length;r++){var o=i[r];m(o)&&m(o().modify)?n=o(t,e,undefined).modify(n):f("Transformer should be a function that returns an object with `modify()` method")}return n}}}(t,e).mutate(n),r="translate3d(".concat(-1*i,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=r,e.Html.wrapper.style.webkitTransform=r,e.Html.wrapper.style.transform=r},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var n=e.Sizes.length,i=t.index,r=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(r){if(!t.isType("carousel")||!e.Run.isOffset())return i.set(r.movement);e.Transition.after((function(){n.emit("translate.jump"),i.set(e.Sizes.slideWidth*t.index)}));var o=e.Sizes.slideWidth*e.Translate.getStartIndex();return i.set(o-e.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return y(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(M[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return y(i,"value",{get:function(){return i._v},set:function(t){L.indexOf(t)>-1?i._v=t:f("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return y(i,"value",{get:function(){return i._v},set:function(t){g(t)?(t.before=p(t.before),t.after=p(t.after)):t=p(t),i._v=t}}),y(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return g(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return y(i,"length",{get:function(){return e.Html.slides.length}}),y(i,"width",{get:function(){return e.Html.track.offsetWidth}}),y(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),y(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[T[o][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==t.length-1?r[T[o][1]]="".concat(this.value/2,"px"):r[T[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return y(i,"value",{get:function(){return p(t.settings.gap)}}),y(i,"grow",{get:function(){return i.value*e.Sizes.length}}),y(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],S((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return y(i,"offset",{get:function(){return i._o},set:function(t){i._o=v(t)?0:p(t)}}),y(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),y(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=r.cloningRatio;if(0!==i.length)for(var u=o+ +!!t.settings.peek+Math.round(o/2),c=i.slice(0,u).reverse(),l=i.slice(-1*u),d=0;d<Math.max(a,Math.floor(o/i.length));d++){for(var f=0;f<c.length;f++){var p=c[f].cloneNode(!0);p.classList.add(s.slide.clone),n.push(p)}for(var h=0;h<l.length;h++){var g=l[h].cloneNode(!0);g.classList.add(s.slide.clone),n.unshift(g)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(-1*o).reverse(),u="".concat(e.Sizes.slideWidth,"px"),c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var d=0;d<t.length;d++)t[d].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return y(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new z,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,S((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.slide.active),O(i).forEach((function(t){t.classList.remove(n.slide.active)})))},removeClasses:function(){var n=t.settings.classes,i=n.type,r=n.slide;e.Html.root.classList.remove(i[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(r.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),r.isOffset()&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,r=e.steps,o=e.direction,s=1;if("="===o)return t.settings.bound&&p(r)>n?void(t.index=n):void(t.index=r);if(">"!==o||">"!==r)if("<"!==o||"<"!==r){if("|"===o&&(s=t.settings.perView||1),">"===o||"|"===o&&">"===r){var a=function(e){var n=t.index;return t.isType("carousel")?n+e:n+(e-n%e)}(s);return a>n&&(this._o=!0),void(t.index=function(e,n){var r=i.length;return e<=r?e:t.isType("carousel")?e-(r+1):t.settings.rewind?i.isBound()&&!i.isEnd()?r:0:i.isBound()?r:Math.floor(r/n)*n}(a,s))}if("<"===o||"|"===o&&"<"===r){var u=function(e){var n=t.index;return t.isType("carousel")?n-e:(Math.ceil(n/e)-1)*e}(s);return u<0&&(this._o=!0),void(t.index=function(e,n){var r=i.length;return e>=0?e:t.isType("carousel")?e+(r+1):t.settings.rewind?i.isBound()&&i.isStart()?r:Math.floor(r/n)*n:0}(u,s))}f("Invalid direction pattern [".concat(o).concat(r,"] has been used"))}else t.index=0;else t.index=n},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return y(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?p(e)?p(e):e:0}}}),y(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return this.isBound()?i-1-(p(n.perView)-1)+p(n.focusAt):i-1}}),y(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new z,r=0,o=0,s=0,a=!1,u=!!W&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=p(i.pageX),s=p(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,c=a.touchRatio,l=a.classes,d=this.touches(i),f=p(d.pageX)-o,h=p(d.pageY)-s,g=Math.abs(f<<2),m=Math.abs(h<<2),v=Math.sqrt(g+m),b=Math.sqrt(m);if(!(180*(r=Math.asin(b/v))/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(f*parseFloat(c)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=s.perSwipe,u=s.touchAngle,c=s.classes,l=this.touches(i),d=this.threshold(i),f=l.pageX-o,p=180*r/Math.PI;this.enable(),f>d&&p<u?e.Run.make(e.Direction.resolve("".concat(a,"<"))):f<-d&&p<u?e.Run.make(e.Direction.resolve("".concat(a,">"))):e.Move.make(),e.Html.root.classList.remove(c.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings,o=r.swipeThreshold,s=r.dragThreshold;o&&i.on(V[0],e.Html.wrapper,(function(t){n.start(t)}),u),s&&i.on(V[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(V[0],e.Html.wrapper,u),i.off(V[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(q,e.Html.wrapper,S((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(q,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(Z,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(Z,e.Html.wrapper)},touches:function(t){return F.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return F.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()})),c},Images:function(t,e,n){var i=new z,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new z,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;r=!1}return this}};return y(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(t,e,n){var i=new z,r=!!W&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll(N),this._arrowControls={previous:e.Html.root.querySelectorAll(G),next:e.Html.root.querySelectorAll(Y)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&i&&(i.classList.add(n.classes.nav.active),O(i).forEach((function(t){t.classList.remove(n.classes.nav.active)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var n=o._arrowControls.next,i=o._arrowControls.previous;this.resetArrowState(n,i),0===t.index&&this.disableArrow(i),t.index===e.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){j(t).forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},disableArrow:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){j(t).forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){W||"touchstart"!==t.type||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};return y(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on(["mount.after","run"],(function(){o.setArrowState()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(t,e,n){var i=new z,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(n){var i=t.settings.perSwipe;"ArrowRight"===n.code&&e.Run.make(e.Direction.resolve("".concat(i,">"))),"ArrowLeft"===n.code&&e.Run.make(e.Direction.resolve("".concat(i,"<")))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new z,r={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var i=this;this._e&&(this.enable(),t.settings.autoplay&&v(this._i)&&(this._i=setInterval((function(){i.stop(),e.Run.make(">"),i.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t._e&&t.stop()})),i.on("mouseout",e.Html.root,(function(){t._e&&t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return y(r,"time",{get:function(){return p(e.Html.slides[t.index].getAttribute("data-glide-autoplay")||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","swipe.start","update"],(function(){r.stop()})),n.on(["pause","destroy"],(function(){r.disable(),r.stop()})),n.on(["run.after","swipe.end"],(function(){r.start()})),n.on(["play"],(function(){r.enable(),r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new z,r=t.settings,o=X(r.breakpoints),s=Object.assign({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return s}};return Object.assign(r,a.match(o)),i.on("resize",window,S((function(){t.settings=w(r,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=X(o),s=Object.assign({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,t);var e=c(n);function n(){return r(this,n),e.apply(this,arguments)}return s(n,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(a(n.prototype),"mount",this).call(this,Object.assign({},U,t))}}]),n}(_)}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,n(607)})();