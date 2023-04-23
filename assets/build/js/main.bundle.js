(self["webpackChunkSpanishALaCarte"] = self["webpackChunkSpanishALaCarte"] || []).push([["main"],{

/***/ "./node_modules/awesome-notifications/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/awesome-notifications/dist/index.js ***!
  \**********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.r(e),t.d(e,{default:()=>B});var i={maxNotifications:10,animationDuration:300,position:"bottom-right",labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required",confirmOk:"OK",confirmCancel:"Cancel"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"exclamation-triangle",async:"cog fa-spin",confirm:"exclamation-triangle",prefix:"<i class='fa fas fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:null,info:null,success:null,warning:null,alert:null,async:null,"async-block":null,modal:null,confirm:null,general:{"<script>":"","<\/script>":""}},messages:{tip:"",info:"",success:"Action has been succeeded",warning:"",alert:"Action has been failed",confirm:"This action can't be undone. Continue?",async:"Please, wait...","async-block":"Loading"},formatError:function(t){if(t.response){if(!t.response.data)return"500 API Server Error";if(t.response.data.errors)return t.response.data.errors.map((function(t){return t.detail})).join("<br>");if(t.response.statusText)return"".concat(t.response.status," ").concat(t.response.statusText,": ").concat(t.response.data)}return t.message?t.message:t},durations:{global:5e3,success:null,info:null,tip:null,warning:null,alert:null},minDurations:{async:1e3,"async-block":1e3}},a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;o(this,t),Object.assign(this,this.defaultsDeep(n,e))}var e,a;return e=t,a=[{key:"icon",value:function(t){return this.icons.enabled?"".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix):""}},{key:"label",value:function(t){return this.labels[t]}},{key:"duration",value:function(t){var e=this.durations[t];return null===e?this.durations.global:e}},{key:"toSecs",value:function(t){return"".concat(t/1e3,"s")}},{key:"applyReplacements",value:function(t,e){if(!t)return this.messages[e]||"";for(var n=0,o=["general",e];n<o.length;n++){var r=o[n];if(this.replacements[r])for(var i in this.replacements[r])t=t.replace(i,this.replacements[r][i])}return t}},{key:"override",value:function(e){return e?new t(e,this):this}},{key:"defaultsDeep",value:function(t,e){var o={};for(var r in t)e.hasOwnProperty(r)?o[r]="object"===n(t[r])&&null!==t[r]?this.defaultsDeep(t[r],e[r]):e[r]:o[r]=t[r];return o}}],a&&r(e.prototype,a),t}(),c="awn",s={popup:"".concat(c,"-popup"),toast:"".concat(c,"-toast"),btn:"".concat(c,"-btn"),confirm:"".concat(c,"-confirm")},u={prefix:s.toast,klass:{label:"".concat(s.toast,"-label"),content:"".concat(s.toast,"-content"),icon:"".concat(s.toast,"-icon"),progressBar:"".concat(s.toast,"-progress-bar"),progressBarPause:"".concat(s.toast,"-progress-bar-paused")},ids:{container:"".concat(s.toast,"-container")}},l={prefix:s.popup,klass:{buttons:"".concat(c,"-buttons"),button:s.btn,successBtn:"".concat(s.btn,"-success"),cancelBtn:"".concat(s.btn,"-cancel"),title:"".concat(s.popup,"-title"),body:"".concat(s.popup,"-body"),content:"".concat(s.popup,"-content"),dotAnimation:"".concat(s.popup,"-loading-dots")},ids:{wrapper:"".concat(s.popup,"-wrapper"),confirmOk:"".concat(s.confirm,"-ok"),confirmCancel:"".concat(s.confirm,"-cancel")}},f={klass:{hiding:"".concat(c,"-hiding")},lib:c};function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=function(){function t(e,n,o,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.newNode=document.createElement("div"),n&&(this.newNode.id=n),o&&(this.newNode.className=o),r&&(this.newNode.style.cssText=r),this.parent=e,this.options=i}var e,n;return e=t,n=[{key:"beforeInsert",value:function(){}},{key:"afterInsert",value:function(){}},{key:"insert",value:function(){return this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert(),this}},{key:"replace",value:function(t){var e=this;if(this.getElement())return this.beforeDelete().then((function(){return e.updateType(t.type),e.parent.replaceChild(t.newNode,e.el),e.el=e.getElement(t.newNode),e.afterInsert(),e}))}},{key:"beforeDelete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el,n=0;return this.start&&(n=this.options.minDurations[this.type]+this.start-Date.now())<0&&(n=0),new Promise((function(o){setTimeout((function(){e.classList.add(f.klass.hiding),setTimeout(o,t.options.animationDuration)}),n)}))}},{key:"delete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(e)?this.beforeDelete(e).then((function(){e.remove(),t.afterDelete()})):null}},{key:"afterDelete",value:function(){}},{key:"getElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t?document.getElementById(t.id):null}},{key:"addEvent",value:function(t,e){this.el.addEventListener(t,e)}},{key:"toggleClass",value:function(t){this.el.classList.toggle(t)}},{key:"updateType",value:function(t){this.type=t,this.duration=this.options.duration(this.type)}}],n&&p(e.prototype,n),t}();function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=e,this.remaining=n,this.resume()}var e,n;return e=t,(n=[{key:"pause",value:function(){this.paused=!0,window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:"resume",value:function(){var t=this;this.paused=!1,this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout((function(){window.clearTimeout(t.timerId),t.callback()}),this.remaining)}},{key:"toggle",value:function(){this.paused?this.resume():this.pause()}}])&&y(e.prototype,n),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function k(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(o);if(r){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function a(t,e,n,o){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,o,"".concat(u.prefix,"-").concat(Math.floor(Date.now()-100*Math.random())),"".concat(u.prefix," ").concat(u.prefix,"-").concat(e),"animation-duration: ".concat(n.toSecs(n.animationDuration),";"),n)).updateType(e),r.setInnerHtml(t),r}return e=a,n=[{key:"setInnerHtml",value:function(t){"alert"===this.type&&t&&(t=this.options.formatError(t)),t=this.options.applyReplacements(t,this.type),this.newNode.innerHTML='<div class="awn-toast-wrapper">'.concat(this.progressBar).concat(this.label,'<div class="').concat(u.klass.content,'">').concat(t,'</div><span class="').concat(u.klass.icon,'">').concat(this.options.icon(this.type),"</span></div>")}},{key:"beforeInsert",value:function(){var t=this;if(this.parent.childElementCount>=this.options.maxNotifications){var e=Array.from(this.parent.getElementsByClassName(u.prefix));this.delete(e.find((function(e){return!t.isDeleted(e)})))}}},{key:"afterInsert",value:function(){var t=this;if("async"==this.type)return this.start=Date.now();if(this.addEvent("click",(function(){return t.delete()})),!(this.duration<=0)){this.timer=new h((function(){return t.delete()}),this.duration);for(var e=0,n=["mouseenter","mouseleave"];e<n.length;e++){var o=n[e];this.addEvent(o,(function(){t.isDeleted()||(t.toggleClass(u.klass.progressBarPause),t.timer.toggle())}))}}}},{key:"isDeleted",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t.classList.contains(f.klass.hiding)}},{key:"progressBar",get:function(){return this.duration<=0||"async"===this.type?"":"<div class='".concat(u.klass.progressBar,"' style=\"animation-duration:").concat(this.options.toSecs(this.duration),';"></div>')}},{key:"label",get:function(){return'<b class="'.concat(u.klass.label,'">').concat(this.options.label(this.type),"</b>")}}],n&&v(e.prototype,n),a}(d);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e){return _=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_(t,e)}function S(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function a(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"modal",o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,c=arguments.length>4?arguments[4]:void 0;T(this,a);var s="animation-duration: ".concat(o.toSecs(o.animationDuration),";");return(e=i.call(this,document.body,l.ids.wrapper,null,s,o))[l.ids.confirmOk]=r,e[l.ids.confirmCancel]=c,e.className="".concat(l.prefix,"-").concat(n),["confirm","async-block","modal"].includes(n)||(n="modal"),e.updateType(n),e.setInnerHtml(t),e.insert(),e}return e=a,(n=[{key:"setInnerHtml",value:function(t){var e=this.options.applyReplacements(t,this.type);switch(this.type){case"confirm":var n=["<button class='".concat(l.klass.button," ").concat(l.klass.successBtn,"'id='").concat(l.ids.confirmOk,"'>").concat(this.options.labels.confirmOk,"</button>")];!1!==this[l.ids.confirmCancel]&&n.push("<button class='".concat(l.klass.button," ").concat(l.klass.cancelBtn,"'id='").concat(l.ids.confirmCancel,"'>").concat(this.options.labels.confirmCancel,"</button>")),e="".concat(this.options.icon(this.type),"<div class='").concat(l.klass.title,"'>").concat(this.options.label(this.type),'</div><div class="').concat(l.klass.content,'">').concat(e,"</div><div class='").concat(l.klass.buttons," ").concat(l.klass.buttons,"-").concat(n.length,"'>").concat(n.join(""),"</div>");break;case"async-block":e="".concat(e,'<div class="').concat(l.klass.dotAnimation,'"></div>')}this.newNode.innerHTML='<div class="'.concat(l.klass.body," ").concat(this.className,'">').concat(e,"</div>")}},{key:"keyupListener",value:function(t){if("async-block"===this.type)return t.preventDefault();switch(t.code){case"Escape":t.preventDefault(),this.delete();case"Tab":if(t.preventDefault(),"confirm"!==this.type||!1===this[l.ids.confirmCancel])return!0;var e=this.okBtn;t.shiftKey?document.activeElement.id==l.ids.confirmOk&&(e=this.cancelBtn):document.activeElement.id!==l.ids.confirmCancel&&(e=this.cancelBtn),e.focus()}}},{key:"afterInsert",value:function(){var t=this;switch(this.listener=function(e){return t.keyupListener(e)},window.addEventListener("keydown",this.listener),this.type){case"async-block":this.start=Date.now();break;case"confirm":this.okBtn.focus(),this.addEvent("click",(function(e){if("BUTTON"!==e.target.nodeName)return!1;t.delete(),t[e.target.id]&&t[e.target.id]()}));break;default:document.activeElement.blur(),this.addEvent("click",(function(e){e.target.id===t.newNode.id&&t.delete()}))}}},{key:"afterDelete",value:function(){window.removeEventListener("keydown",this.listener)}},{key:"okBtn",get:function(){return document.getElementById(l.ids.confirmOk)}},{key:"cancelBtn",get:function(){return document.getElementById(l.ids.confirmCancel)}}])&&E(e.prototype,n),a}(d);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D(this,t),this.options=new a(e)}var e,n;return e=t,(n=[{key:"tip",value:function(t,e){return this._addToast(t,"tip",e).el}},{key:"info",value:function(t,e){return this._addToast(t,"info",e).el}},{key:"success",value:function(t,e){return this._addToast(t,"success",e).el}},{key:"warning",value:function(t,e){return this._addToast(t,"warning",e).el}},{key:"alert",value:function(t,e){return this._addToast(t,"alert",e).el}},{key:"async",value:function(t,e,n,o,r){var i=this._addToast(o,"async",r);return this._afterAsync(t,e,n,r,i)}},{key:"confirm",value:function(t,e,n,o){return this._addPopup(t,"confirm",o,e,n)}},{key:"asyncBlock",value:function(t,e,n,o,r){var i=this._addPopup(o,"async-block",r);return this._afterAsync(t,e,n,r,i)}},{key:"modal",value:function(t,e,n){return this._addPopup(t,e,n)}},{key:"closeToasts",value:function(){for(var t=this.container;t.firstChild;)t.removeChild(t.firstChild)}},{key:"_addPopup",value:function(t,e,n,o,r){return new P(t,e,this.options.override(n),o,r)}},{key:"_addToast",value:function(t,e,n,o){n=this.options.override(n);var r=new w(t,e,n,this.container);return o?o instanceof P?o.delete().then((function(){return r.insert()})):o.replace(r):r.insert()}},{key:"_afterAsync",value:function(t,e,n,o,r){return t.then(this._responseHandler(e,"success",o,r),this._responseHandler(n,"alert",o,r))}},{key:"_responseHandler",value:function(t,e,n,o){var r=this;return function(i){switch(C(t)){case"undefined":case"string":var a="alert"===e?t||i:t;r._addToast(a,e,n,o);break;default:o.delete().then((function(){t&&t(i)}))}}}},{key:"_createContainer",value:function(){return new d(document.body,u.ids.container,"awn-".concat(this.options.position)).insert().el}},{key:"container",get:function(){return document.getElementById(u.ids.container)||this._createContainer()}}])&&x(e.prototype,n),t}();return e})()}));

/***/ }),

/***/ "./assets/src/js/functions.js":
/*!************************************!*\
  !*** ./assets/src/js/functions.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWPAdminBar": function() { return /* binding */ checkWPAdminBar; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Functions script
 * 
 * @author FrankPonte
 */
function checkWPAdminBar() {
  // Fix issue between wp admin bar and header overlapping
  if ($("#wpadminbar").length && $(window).width() > 425) {
    if ($("#mainHeader").hasClass("fixed-top")) {
      $("#mainHeader.fixed-top").addClass("wpadminbar-exists");
      return;
    } else {
      $("#mainHeader").removeClass("wpadminbar-exists");
    }
  }
}


/***/ }),

/***/ "./assets/src/js/global.js":
/*!*********************************!*\
  !*** ./assets/src/js/global.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./assets/src/js/functions.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Global script
 * 
 * @author FrankPonte
 */


$(window).on('scroll', function () {
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.checkWPAdminBar)();
});

/***/ }),

/***/ "./assets/src/js/main.js":
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./assets/src/sass/main.scss");
/* harmony import */ var _images_preloader_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/preloader.svg */ "./assets/src/images/preloader.svg");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./assets/src/js/global.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/rias/ls.rias */ "./node_modules/lazysizes/plugins/rias/ls.rias.js");
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes_plugins_blur_up_ls_blur_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes/plugins/blur-up/ls.blur-up */ "./node_modules/lazysizes/plugins/blur-up/ls.blur-up.js");
/* harmony import */ var lazysizes_plugins_blur_up_ls_blur_up__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_blur_up_ls_blur_up__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lazysizes/plugins/unveilhooks/ls.unveilhooks */ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js");
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! awesome-notifications */ "./node_modules/awesome-notifications/dist/index.js");
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");








$(window).on("scroll", function () {
  // var headerOffset = $('#mainHeader').height() /;
  // var header = $('#mainHeader'),
  // scroll = $(window).scrollTop();
  // // Offset greater than 0
  // scroll >= headerOffset ?
  // header.addClass('fixed-top') :
  // header.removeClass('fixed-top');
});
$("#footer-newsletter-form").on("submit", function (e) {
  e.preventDefault();
  var formData = {
    email: $("#footer-newsletter-form").find("input[name='email']").val()
  };
  // Create new promise to handle notifications with awesome-notifications
  var promise = $.ajax({
    url: global_vars.ajaxurl,
    type: "POST",
    data: {
      action: "theme_send_newsletter_form",
      security: global_vars.footer_newsletter_nonce,
      form: JSON.stringify(formData)
    }
  });
  // Handle response behavior with awesome-notifications
  var notifier = new (awesome_notifications__WEBPACK_IMPORTED_MODULE_7___default())();
  notifier.asyncBlock(promise,
  // On success
  function (response) {
    var errors = response.data;
    // Check for errors
    if (errors.length <= 0) {
      // Handle ajax success
      notifier.success(global_vars.AWN_newsletter_success);
    } else {
      notifier.alert(global_vars.AWN_error);
    }
  },
  // On reject
  function (response) {
    notifier.alert(global_vars.AWN_error);
  });
});
$(".header-menu-cart .cart-dropdown").on("click", function () {
  if ($(window).width() < 1024) {
    window.location.replace("".concat(window.location.origin, "/cart"));
    return;
  }
  var cartDropdownMenu = $(".header-menu-cart").find(".cart-dropdown-menu");
  if (cartDropdownMenu.hasClass("d-none")) {
    $(this).addClass("shadow");
    cartDropdownMenu.removeClass("d-none");
  } else {
    $(this).removeClass("shadow");
    cartDropdownMenu.addClass("d-none");
  }
});
$(".cart-dropdown-menu").on("mouseleave", function () {
  $(this).addClass("d-none");
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./assets/src/sass/main.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./assets/src/sass/main.scss ***!
  \***********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Folder system based in this article: \n * https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4\n * main.scss: Only contains our imports.\n * Developed by: Frank Ponte for Spanisch a la carte\n * This project has a MoFi (Mobile First) Approach. \n * All media queries have been written for '> phone' breakpoints\n*/\n/**  \n * fonts imports file\n */\n.wpadminbar-exists {\n  top: 0 !important;\n}\n\n@media (min-width: 425px) {\n  .wpadminbar-exists {\n    top: 50px !important;\n  }\n}\n.blur-up {\n  -webkit-filter: blur(5px);\n  filter: blur(5px);\n  transition: filter 400ms, -webkit-filter 400ms;\n}\n\n.blur-up.lazyloaded {\n  -webkit-filter: blur(0);\n  filter: blur(0);\n}\n\n.object-fit-cover {\n  object-fit: cover;\n}\n\n.w-fit-content {\n  width: fit-content;\n}\n\n.text-blue {\n  color: #041F4C;\n}\n\n.text-red {\n  color: #FF2243;\n}\n\n.bg-primary {\n  background-color: #FF2243 !important;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.bg-yellow {\n  background-color: #FFD45A;\n}\n\n.bg-dark-blue {\n  background-color: #041a40;\n}\n\n.bg-blue {\n  background-color: #041F4C;\n}\n\n.bg-theme-gradient {\n  background: linear-gradient(91.5deg, #3d70b1 11.77%, #ff2243 136.6%);\n}\n\n.bg-gray {\n  background-color: #f6f6f6;\n}\n\n.shadow-red {\n  box-shadow: 10px 17px #FF2243;\n}\n\n.h-separator {\n  height: 1px;\n}\n\n.vertical-separator {\n  top: 50%;\n  width: 1px;\n  background: #1a2430;\n  transform: translate(-50%, -50%);\n}\n.vertical-separator.right {\n  left: 100%;\n}\n\n.text-line-through {\n  text-decoration: line-through;\n  text-decoration-color: rgb(255, 34, 67);\n}\n\n.text-disabled {\n  color: rgba(4, 31, 76, 0.3);\n}\n\n.text-blue {\n  color: #041F4C !important;\n}\n\n.title-separator {\n  flex-grow: 100;\n  height: 1px;\n  background-color: #FF2243;\n}\n\n.theme-list {\n  list-style-type: none;\n}\n\n.z-n1 {\n  z-index: -1;\n}\n\n.z-n2 {\n  z-index: -2;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-1 {\n  z-index: 1;\n}\n\n.social-link {\n  display: flex;\n  width: 42px;\n  height: 42px;\n  background: #3d70b1;\n  color: #f6f6f6;\n  font-size: 23px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: 2px solid #3d70b1;\n  transition: 0.4s all ease-in-out;\n}\n.social-link:hover, .social-link:active {\n  background-color: transparent;\n  color: #3d70b1 !important;\n}\n\n.step .ays-abs-fs {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.product-price {\n  background: rgba(6, 100, 255, 0.15);\n}\n\n.btn-add-to-cart {\n  background: transparent;\n  border: 2px solid #041F4C;\n  color: #041F4C !important;\n  transition: all 0.4s ease-in-out;\n  text-transform: capitalize;\n}\n.btn-add-to-cart:hover, .btn-add-to-cart:active {\n  background: #FF2243;\n  border-color: #FF2243;\n  color: #f6f6f6 !important;\n}\n\n.product-category {\n  text-decoration: none;\n  transition: 0.4s all ease-in-out;\n}\n.product-category:not(:last-child) {\n  margin-right: 0.8rem;\n}\n.product-category:nth-child(2n) {\n  background: rgba(6, 100, 255, 0.15);\n  color: rgb(4, 31, 76);\n}\n.product-category:nth-child(2n):hover {\n  color: rgb(4, 31, 76) !important;\n  background: rgba(6, 100, 255, 0.4);\n}\n.product-category:nth-child(2n+1) {\n  background: rgba(255, 34, 67, 0.2);\n  color: rgb(255, 34, 67);\n}\n.product-category:nth-child(2n+1):hover {\n  color: rgb(255, 34, 67) !important;\n  background: rgba(255, 34, 67, 0.4);\n}\n\nbody {\n  color: #041F4C;\n  line-height: normal;\n  margin: 0;\n  font-family: \"Poppins\";\n  position: relative;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: \"Montserrat\" !important;\n  line-height: normal;\n}\n\na {\n  transition: 0.4s all ease-in-out;\n}\na:hover {\n  color: #FF2243 !important;\n}\n\n.btn-cart-dropdown {\n  background: transparent;\n  border: 2px solid #041F4C;\n  color: #041F4C !important;\n  transition: all 0.4s ease-in-out;\n  text-transform: capitalize;\n}\n.btn-cart-dropdown:hover, .btn-cart-dropdown:active {\n  background: #FF2243 !important;\n  border-color: #FF2243;\n  color: #f6f6f6 !important;\n}\n\n.btn-secondary {\n  border-radius: 60px;\n  background-color: #041F4C;\n  border-color: #041F4C;\n  padding: 0.5rem 2rem;\n  transition: 0.4s all ease-in-out;\n}\n.btn-secondary:hover {\n  border-color: #041F4C;\n  background-color: transparent;\n  color: #041F4C !important;\n}\n\n.dropdown-toggle::after {\n  content: \"\";\n  display: none;\n}\n.dropdown-toggle .arrow-down {\n  margin-left: 0.255em;\n  transform: rotate(0);\n  transform-origin: 0.3rem 40%;\n  transition: 0.25s transform ease;\n}\n.dropdown-toggle.show .arrow-down {\n  transform: rotate(180deg);\n}\n\n.dropdown-item {\n  color: #041F4C !important;\n  font-weight: normal;\n  transition: 0.4s all ease-in-out;\n}\n.dropdown-item:hover {\n  color: #041F4C !important;\n  font-weight: bold;\n}\n\n.form-input {\n  border: none;\n  border-bottom: 2px solid #c4c4c4;\n  color: #041F4C;\n  padding: 0.6rem;\n}\n.form-input:focus-visible {\n  outline: transparent;\n}\n\n.form-textarea {\n  border: 2px solid #c4c4c4;\n  color: #041F4C;\n  padding: 0.6rem;\n  resize: none;\n}\n.form-textarea:focus-visible {\n  outline: transparent;\n}\n\nform.theme-form {\n  display: flex;\n  align-items: center;\n}\nform.theme-form input[type=text],\nform.theme-form input[type=email] {\n  border-top-left-radius: 60px;\n  border-bottom-left-radius: 60px;\n  height: 40px;\n  padding: 0.5rem 0.9rem;\n  border: 2px solid #d8d9d8;\n  flex-grow: 100;\n}\nform.theme-form input[type=text]:focus-visible,\nform.theme-form input[type=email]:focus-visible {\n  outline: none;\n}\nform.theme-form input[type=text]::placeholder,\nform.theme-form input[type=email]::placeholder {\n  color: rgba(26, 36, 48, 0.2941176471);\n}\nform.theme-form button[type=submit] {\n  border-radius: 60px;\n  color: #f6f6f6;\n  background: #FF2243;\n  border: none;\n  padding: 0.5rem 0.9rem;\n  margin-left: -17px;\n}\n\n.header-menu-cart .cart-dropdown {\n  cursor: pointer;\n}\n.header-menu-cart .cart-items-counter {\n  background-color: #FF2243;\n  color: #fff;\n  right: -10%;\n  top: -3%;\n  width: 21px;\n  height: 21px;\n}\n.header-menu-cart .cart-dropdown-menu {\n  width: 400px;\n  left: 50%;\n  bottom: 0%;\n  transform: translate(-90%, 98%);\n}\n.header-menu-cart .cart-dropdown-menu .dropdown-cart-list .dropdown-cart-item:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.page-404 {\n  font-size: 6rem;\n  margin-bottom: 0;\n}\n.page-404.not-found {\n  font-size: 3rem;\n}\n\n@media (max-width: 1439px) {\n  #site-preloader .site-logo {\n    width: 50vw;\n    max-width: 300px;\n    height: auto;\n  }\n  .section-shape {\n    object-fit: cover;\n  }\n}\n@media (max-width: 425px) {\n  form.theme-form {\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 0 auto;\n    gap: 1rem;\n  }\n  form.theme-form input[type=text],\n  form.theme-form input[type=email] {\n    border-radius: 60px;\n  }\n}\n/*This is a fade out. */\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  1% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n#footer-newsletter-form {\n  border-bottom: 2px solid #f6f6f6;\n  display: flex;\n}\n#footer-newsletter-form input {\n  border: none;\n  background-color: transparent;\n  color: #d0d4d8;\n  padding: 0.6rem 0;\n  width: -webkit-fill-available;\n}\n#footer-newsletter-form input::placeholder {\n  color: #d0d4d8;\n}\n#footer-newsletter-form input:focus-visible {\n  outline: none;\n}\n#footer-newsletter-form .btn-newsletter-submit {\n  background-color: transparent;\n  border: none;\n  border-radius: 0;\n  color: #f6f6f6;\n  font-size: 1.3rem;\n}\n\n.footer-list {\n  border-radius: 0;\n}\n.footer-list .list-group-item {\n  background: transparent;\n  color: #f6f6f6;\n  display: flex;\n  align-items: center;\n}\n.footer-list .list-group-item .footer-icon {\n  font-size: 1.5rem;\n}\n.footer-list .list-group-item a {\n  color: #FF2243;\n}\n.footer-list .list-group-item:not(:last-child) {\n  border-bottom: 1px solid rgba(246, 246, 246, 0.6);\n}\n.footer-list .list-group-item:first-child {\n  border-top: 1px solid rgba(246, 246, 246, 0.6);\n}\n\n#footer-posts-list li {\n  transition: 0.4s all ease-in-out;\n}\n#footer-posts-list li:hover {\n  background: rgba(126, 140, 164, 0.63);\n}\n#footer-posts-list li a {\n  color: #f6f6f6;\n  text-decoration: none;\n}\n#footer-posts-list li a:hover {\n  color: #f6f6f6 !important;\n}\n#footer-posts-list li a p {\n  margin: 0;\n}\n\n.header-menu {\n  font-weight: 400;\n}\n.header-menu .navbar-nav .nav-item .nav-link {\n  color: #f6f6f6;\n  transition: 0.4s all ease-in-out;\n}\n.header-menu .navbar-nav .nav-item .nav-link:hover, .header-menu .navbar-nav .nav-item .nav-link:active {\n  color: #FF2243;\n}\n.header-menu .navbar-nav .nav-item .nav-link.active {\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 3px;\n  text-underline-offset: 10px;\n}\n\n#mainHeader.fixed-top {\n  animation: smoothScroll 1s forwards;\n}\n\n@keyframes smoothScroll {\n  0% {\n    transform: translateY(-40px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n#mainNavbar {\n  top: 0%;\n  left: 0%;\n  z-index: 1;\n}\n\n.header-navbar-toggler {\n  height: fit-content;\n  padding: 0.7rem 0.7rem;\n  align-self: center;\n  background: white;\n  border: 2px solid white;\n}\n\n.common-nav {\n  background: #f6f6f6;\n}\n.common-nav div.container-lg .menu-container #headerNavbar .header-menu a {\n  color: #041F4C;\n}\n\n@media (max-width: 1023px) {\n  #headerNavbar.show {\n    background: #041F4C;\n  }\n  .menu-container {\n    background: #041F4C;\n  }\n  #headerNavbar {\n    padding: 1.5rem;\n  }\n  #headerNavbar .header-menu .navbar-nav {\n    gap: 0.7rem;\n  }\n  .common-nav div.container-lg .menu-container #headerNavbar .header-menu a {\n    color: #f6f6f6;\n  }\n}\n@media (max-width: 425px) {\n  .navbar-brand img {\n    width: 88%;\n    height: auto;\n  }\n}\n.common-banner {\n  min-height: 300px;\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n  padding-top: 93px;\n}\n.common-banner .banner-img {\n  object-fit: cover;\n  top: 0%;\n  left: 0%;\n  opacity: 0.3;\n}\n.common-banner .wave-shape {\n  top: 0%;\n  right: 0%;\n  height: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./assets/src/sass/main.scss","webpack://./assets/src/sass/utils/_fonts.scss","webpack://./assets/src/sass/utils/_global.scss","webpack://./node_modules/include-media/dist/_include-media.scss","webpack://./assets/src/sass/utils/_colors.scss","webpack://./assets/src/sass/components/_product-category.scss","webpack://./assets/src/sass/theme/_theme.scss","webpack://./assets/src/sass/utils/_variables.scss","webpack://./assets/src/sass/layout/_footer.scss","webpack://./assets/src/sass/layout/_header.scss","webpack://./assets/src/sass/layout/_common-banner.scss"],"names":[],"mappings":"AAAA;;;;;;CAAA;ACAA;;EAAA;ACAA;EACE,iBAAA;AFYF;;AG0jBI;EDlkBF;IACE,oBAAA;EFYF;AACF;AETA;EACE,yBAAA;EACA,iBAAA;EACA,8CAAA;AFWF;;AERA;EACE,uBAAA;EACA,eAAA;AFWF;;AERA;EACE,iBAAA;AFWF;;AERA;EACE,kBAAA;AFWF;;AERA;EACE,cEnBc;AJ8BhB;;AERA;EACE,cExBc;AJmChB;;AERA;EACE,oCAAA;AFWF;;AERA;EACE,sBAAA;AFWF;;AERA;EACE,yBEzCO;AJoDT;;AERA;EACE,yBAAA;AFWF;;AERA;EACE,yBE3Cc;AJsDhB;;AERA;EACE,oEAAA;AFWF;;AERA;EACE,yBE9DM;AJyER;;AERA;EACE,6BAAA;AFWF;;AERA;EACE,WAAA;AFWF;;AERA;EACE,QAAA;EACA,UAAA;EACA,mBAAA;EACA,gCAAA;AFWF;AEVE;EACE,UAAA;AFYJ;;AERA;EACE,6BAAA;EACA,uCAAA;AFWF;;AERA;EACE,2BAAA;AFWF;;AERA;EACE,yBAAA;AFWF;;AERA;EACE,cAAA;EACA,WAAA;EACA,yBEzFc;AJoGhB;;AERA;EACE,qBAAA;AFWF;;AERA;EACE,WAAA;AFWF;;AETA;EACE,WAAA;AFYF;;AETA;EACE,UAAA;AFYF;;AETA;EACE,UAAA;AFYF;;AETA;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,cE9HM;EF+HN,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gCAAA;AFYF;AEXE;EAEE,6BAAA;EACA,yBAAA;AFYJ;;AEPE;EACE,UAAA;EACA,cAAA;AFUJ;;AENA;EACE,mCAAA;AFSF;;AENA;EACE,uBAAA;EACA,yBAAA;EACA,yBAAA;EACA,gCAAA;EACA,0BAAA;AFSF;AERE;EAEE,mBErJY;EFsJZ,qBEtJY;EFuJZ,yBAAA;AFSJ;;AK1KA;EACE,qBAAA;EACA,gCAAA;AL6KF;AK5KE;EACE,oBAAA;AL8KJ;AK5KE;EACE,mCAAA;EACA,qBAAA;AL8KJ;AK7KI;EACE,gCAAA;EACA,kCAAA;AL+KN;AK5KE;EACE,kCAAA;EACA,uBAAA;AL8KJ;AK7KI;EACE,kCAAA;EACA,kCAAA;AL+KN;;AMhMA;EACE,cFQc;EEPd,mBAAA;EACA,SAAA;EACA,sBCLU;EDMV,kBAAA;ANmMF;;AMhMA;;;;;;;;;;;;EAYE,oCAAA;EACA,mBAAA;ANmMF;;AMhMA;EACE,gCAAA;ANmMF;AMjME;EACE,yBAAA;ANmMJ;;AM/LA;EACE,uBAAA;EACA,yBAAA;EACA,yBAAA;EACA,gCAAA;EACA,0BAAA;ANkMF;AMhME;EAEE,8BAAA;EACA,qBFlCY;EEmCZ,yBAAA;ANiMJ;;AM7LA;EACE,mBAAA;EACA,yBFxCc;EEyCd,qBFzCc;EE0Cd,oBAAA;EACA,gCAAA;ANgMF;AM9LE;EACE,qBF9CY;EE+CZ,6BAAA;EACA,yBAAA;ANgMJ;;AM3LE;EACE,WAAA;EACA,aAAA;AN8LJ;AM3LE;EACE,oBAAA;EACA,oBAAA;EACA,4BAAA;EACA,gCAAA;AN6LJ;AMzLI;EACE,yBAAA;AN2LN;;AMtLA;EACE,yBAAA;EACA,mBAAA;EACA,gCAAA;ANyLF;AMvLE;EACE,yBAAA;EACA,iBAAA;ANyLJ;;AMrLA;EACE,YAAA;EACA,gCAAA;EACA,cFtFc;EEuFd,eAAA;ANwLF;AMtLE;EACE,oBAAA;ANwLJ;;AMpLA;EACE,yBAAA;EACA,cFhGc;EEiGd,eAAA;EACA,YAAA;ANuLF;AMrLE;EACE,oBAAA;ANuLJ;;AMnLA;EACE,aAAA;EACA,mBAAA;ANsLF;AMpLE;;EAEE,4BAAA;EACA,+BAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;ANsLJ;AMpLI;;EACE,aAAA;ANuLN;AMpLI;;EACE,qCAAA;ANuLN;AMnLE;EACE,mBAAA;EACA,cF5II;EE6IJ,mBFnIY;EEoIZ,YAAA;EACA,sBAAA;EACA,kBAAA;ANqLJ;;AMhLE;EACE,eAAA;ANmLJ;AMhLE;EACE,yBFhJY;EEiJZ,WAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;ANkLJ;AM/KE;EACE,YAAA;EACA,SAAA;EACA,UAAA;EACA,+BAAA;ANiLJ;AM7KQ;EACE,mBAAA;AN+KV;;AMxKA;EACE,eAAA;EACA,gBAAA;AN2KF;AM1KE;EACE,eAAA;AN4KJ;;AGqOI;EG5YF;IACE,WAAA;IACA,gBAAA;IACA,YAAA;EN2KF;EMxKA;IACE,iBAAA;EN0KF;AACF;AG0NI;EGhYF;IACE,eAAA;IACA,uBAAA;IACA,cAAA;IACA,SAAA;ENyKF;EMvKE;;IAEE,mBAAA;ENyKJ;AACF;AMrKA,uBAAA;AACA;EACE;IACE,UAAA;ENuKF;EMpKA;IACE,UAAA;ENsKF;EMnKA;IACE,UAAA;ENqKF;AACF;AQrYA;EACI,gCAAA;EACA,aAAA;ARuYJ;AQtYI;EACI,YAAA;EACA,6BAAA;EACA,cJLD;EIMC,iBAAA;EAOA,6BAAA;ARkYR;AQxYQ;EACI,cJRL;AJkZP;AQxYQ;EACI,aAAA;AR0YZ;AQtYI;EACI,6BAAA;EACA,YAAA;EACA,gBAAA;EACA,cJpBA;EIqBA,iBAAA;ARwYR;;AQpYA;EACI,gBAAA;ARuYJ;AQtYI;EACI,uBAAA;EACA,cJ7BA;EI8BA,aAAA;EACA,mBAAA;ARwYR;AQvYQ;EACI,iBAAA;ARyYZ;AQvYQ;EACI,cJ1BI;AJmahB;AQvYQ;EACI,iDAAA;ARyYZ;AQvYQ;EACI,8CAAA;ARyYZ;;AQnYI;EACI,gCAAA;ARsYR;AQrYQ;EACI,qCAAA;ARuYZ;AQrYQ;EAII,cJzDJ;EI0DI,qBAAA;ARoYZ;AQxYY;EACI,yBAAA;AR0YhB;AQtYY;EACI,SAAA;ARwYhB;;ASpcA;EACI,gBAAA;ATucJ;ASrcQ;EACI,cLJJ;EKKI,gCAAA;ATucZ;AStcY;EACI,cLGA;AJqchB;AStcY;EACI,iBAAA;EACA,0BAAA;EACA,8BAAA;EACA,2BAAA;ATwchB;;ASlcA;EACI,mCAAA;ATqcJ;;ASlcA;EACC;IACC,4BAAA;ETqcA;ESncD;IACC,0BAAA;ETqcA;AACF;ASlcA;EACI,OAAA;EACA,QAAA;EACA,UAAA;ATocJ;;ASjcA;EACI,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;ATocJ;;ASjcA;EACI,mBL/CI;AJmfR;ASncI;EACI,cLtCQ;AJ2ehB;;AGiFI;EMjhBA;IACI,mBL5CQ;EJgfd;ESlcE;IACI,mBL/CQ;EJmfd;ESlcE;IACI,eAAA;ETocN;ESlcU;IACI,WAAA;ETocd;ES/bM;IACI,cLtEJ;EJugBN;AACF;AG+DI;EM3fA;IACI,UAAA;IACA,YAAA;ET+bN;AACF;AU9gBA;EACI,iBAAA;EACA,oEAAA;EACA,iBAAA;AVghBJ;AU/gBI;EACI,iBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;AVihBR;AU/gBI;EACI,OAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;AVihBR","sourcesContent":["/* Folder system based in this article: \n * https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4\n * main.scss: Only contains our imports.\n * Developed by: Frank Ponte for Spanisch a la carte\n * This project has a MoFi (Mobile First) Approach. \n * All media queries have been written for '> phone' breakpoints\n*/\n\n// Vendors-extensions\n// Vendor Imports\n// Library to easily handle media queries \n// https://github.com/eduardoboucas/include-media\n\n// Vendors-extensions\n@import \"/node_modules/include-media/dist/include-media\";\n// Library to easily handle media queries \n// https://github.com/eduardoboucas/include-media\n\n// Application imports\n@import \"./vendors-extensions/include-media\";\n@import \"./utils/imports\";\n@import \"./theme/imports\";\n@import \"./layout/imports\";","/**  \n * fonts imports file\n */\n\n @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');",".wpadminbar-exists {\n  top: 0 !important;\n}\n\n@include media(\">=mobile-l\") {\n  .wpadminbar-exists {\n    top: 50px !important;\n  }\n}\n\n.blur-up {\n  -webkit-filter: blur(5px);\n  filter: blur(5px);\n  transition: filter 400ms, -webkit-filter 400ms;\n}\n\n.blur-up.lazyloaded {\n  -webkit-filter: blur(0);\n  filter: blur(0);\n}\n\n.object-fit-cover {\n  object-fit: cover;\n}\n\n.w-fit-content {\n  width: fit-content;\n}\n\n.text-blue {\n  color: $secondary;\n}\n\n.text-red {\n  color: $primary;\n}\n\n.bg-primary {\n  background-color: $primary !important;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.bg-yellow {\n  background-color: $yellow;\n}\n\n.bg-dark-blue {\n  background-color: #041a40;\n}\n\n.bg-blue {\n  background-color: $secondary;\n}\n\n.bg-theme-gradient {\n  background: linear-gradient(91.5deg, #3d70b1 11.77%, #ff2243 136.6%);\n}\n\n.bg-gray {\n  background-color: $white;\n}\n\n.shadow-red {\n  box-shadow: 10px 17px $primary;\n}\n\n.h-separator {\n  height: 1px;\n}\n\n.vertical-separator {\n  top: 50%;\n  width: 1px;\n  background: #1a2430;\n  transform: translate(-50%, -50%);\n  &.right {\n    left: 100%;\n  }\n}\n\n.text-line-through {\n  text-decoration: line-through;\n  text-decoration-color: rgba(255, 34, 67, 1);\n}\n\n.text-disabled {\n  color: rgba($secondary, 0.3);\n}\n\n.text-blue {\n  color: $secondary !important;\n}\n\n.title-separator {\n  flex-grow: 100;\n  height: 1px;\n  background-color: $primary;\n}\n\n.theme-list {\n  list-style-type: none;\n}\n\n.z-n1 {\n  z-index: -1;\n}\n.z-n2 {\n  z-index: -2;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-1 {\n  z-index: 1;\n}\n\n.social-link {\n  display: flex;\n  width: 42px;\n  height: 42px;\n  background: #3d70b1;\n  color: $white;\n  font-size: 23px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: 2px solid #3d70b1;\n  transition: 0.4s all ease-in-out;\n  &:hover,\n  &:active {\n    background-color: transparent;\n    color: #3d70b1 !important;\n  }\n}\n\n.step {\n  .ays-abs-fs {\n    width: 80%;\n    margin: 0 auto;\n  }\n}\n\n.product-price {\n  background: rgba(6, 100, 255, 0.15);\n}\n\n.btn-add-to-cart {\n  background: transparent;\n  border: 2px solid $secondary;\n  color: $secondary !important;\n  transition: all 0.4s ease-in-out;\n  text-transform: capitalize;\n  &:hover,\n  &:active {\n    background: $primary;\n    border-color: $primary;\n    color: $white !important;\n  }\n}\n","//     _            _           _                           _ _\n//    (_)          | |         | |                         | (_)\n//     _ _ __   ___| |_   _  __| | ___   _ __ ___   ___  __| |_  __ _\n//    | | '_ \\ / __| | | | |/ _` |/ _ \\ | '_ ` _ \\ / _ \\/ _` | |/ _` |\n//    | | | | | (__| | |_| | (_| |  __/ | | | | | |  __/ (_| | | (_| |\n//    |_|_| |_|\\___|_|\\__,_|\\__,_|\\___| |_| |_| |_|\\___|\\__,_|_|\\__,_|\n//\n//      Simple, elegant and maintainable media queries in Sass\n//                        v2.0.0\n//\n//        https://eduardoboucas.github.io/include-media\n//\n//         Authors: Eduardo Boucas (@eduardoboucas)\n//                  Kitty Giraudel (@kittygiraudel)\n//\n//      This project is licensed under the terms of the MIT license\n@charset \"UTF-8\";\n\n////\n/// include-media library public configuration\n/// @author Eduardo Boucas\n/// @access public\n////\n@use 'sass:math';\n@use 'sass:map';\n@use 'sass:list';\n@use 'sass:string';\n@use 'sass:meta';\n\n///\n/// Creates a list of global breakpoints\n///\n/// @example scss - Creates a single breakpoint with the label `phone`\n///  $breakpoints: ('phone': 320px);\n///\n$breakpoints: (\n  'phone': 320px,\n  'tablet': 768px,\n  'desktop': 1024px,\n) !default;\n\n///\n/// Creates a list of static expressions or media types\n///\n/// @example scss - Creates a single media type (screen)\n///  $media-expressions: ('screen': 'screen');\n///\n/// @example scss - Creates a static expression with logical disjunction (OR operator)\n///  $media-expressions: (\n///    'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'\n///  );\n///\n$media-expressions: (\n  'screen': 'screen',\n  'print': 'print',\n  'handheld': 'handheld',\n  'landscape': '(orientation: landscape)',\n  'portrait': '(orientation: portrait)',\n  'retina2x':\n    '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)',\n  'retina3x':\n    '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 350dpi), (min-resolution: 3dppx)',\n) !default;\n\n///\n/// Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals\n///\n/// @example scss - Interval for pixels is defined as `1` by default\n///  @include media('>128px') {}\n///\n///  /* Generates: */\n///  @media (min-width: 129px) {}\n///\n/// @example scss - Interval for ems is defined as `0.01` by default\n///  @include media('>20em') {}\n///\n///  /* Generates: */\n///  @media (min-width: 20.01em) {}\n///\n/// @example scss - Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`\n///  @include media('>2.0rem') {}\n///\n///  /* Generates: */\n///  @media (min-width: 2.1rem) {}\n///\n$unit-intervals: (\n  'px': 1,\n  'em': 0.01,\n  'rem': 0.1,\n  '': 0,\n) !default;\n\n///\n/// Defines whether support for media queries is available, useful for creating separate stylesheets\n/// for browsers that don't support media queries.\n///\n/// @example scss - Disables support for media queries\n///  $im-media-support: false;\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n$im-media-support: true !default;\n\n///\n/// Selects which breakpoint to emulate when support for media queries is disabled. Media queries that start at or\n/// intercept the breakpoint will be displayed, any others will be ignored.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n/// @example scss - This media query will NOT show because it does not intercept the desktop breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'tablet';\n///  @include media('>=desktop') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-breakpoint: 'desktop' !default;\n\n///\n/// Selects which media expressions are allowed in an expression for it to be used when media queries\n/// are not supported.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint and contains only accepted media expressions\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'screen') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///   /* Generates: */\n///   .foo {\n///     color: tomato;\n///   }\n///\n/// @example scss - This media query will NOT show because it intercepts the static breakpoint but contains a media expression that is not accepted\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'retina2x') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-expressions: ('screen', 'portrait', 'landscape') !default;\n\n////\n/// Cross-engine logging engine\n/// @author Kitty Giraudel\n/// @access private\n////\n\n///\n/// Log a message either with `@error` if supported\n/// else with `@warn`, using `feature-exists('at-error')`\n/// to detect support.\n///\n/// @param {String} $message - Message to log\n///\n@function im-log($message) {\n  @if meta.feature-exists('at-error') {\n    @error $message;\n  } @else {\n    @warn $message;\n    $_: noop();\n  }\n\n  @return $message;\n}\n\n///\n/// Wrapper mixin for the log function so it can be used with a more friendly\n/// API than `@if im-log('..') {}` or `$_: im-log('..')`. Basically, use the function\n/// within functions because it is not possible to include a mixin in a function\n/// and use the mixin everywhere else because it's much more elegant.\n///\n/// @param {String} $message - Message to log\n///\n@mixin log($message) {\n  @if im-log($message) {\n  }\n}\n\n///\n/// Function with no `@return` called next to `@warn` in Sass 3.3\n/// to trigger a compiling error and stop the process.\n///\n@function noop() {\n}\n\n///\n/// Determines whether a list of conditions is intercepted by the static breakpoint.\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @return {Boolean} - Returns true if the conditions are intercepted by the static breakpoint\n///\n@function im-intercepts-static-breakpoint($conditions...) {\n  $no-media-breakpoint-value: map.get($breakpoints, $im-no-media-breakpoint);\n\n  @if not $no-media-breakpoint-value {\n    @if im-log('`#{$im-no-media-breakpoint}` is not a valid breakpoint.') {\n    }\n  }\n\n  @each $condition in $conditions {\n    @if not map.has-key($media-expressions, $condition) {\n      $operator: get-expression-operator($condition);\n      $prefix: get-expression-prefix($operator);\n      $value: get-expression-value($condition, $operator);\n\n      @if ($prefix == 'max' and $value <= $no-media-breakpoint-value) or\n        ($prefix == 'min' and $value > $no-media-breakpoint-value)\n      {\n        @return false;\n      }\n    } @else if not list.index($im-no-media-expressions, $condition) {\n      @return false;\n    }\n  }\n\n  @return true;\n}\n\n////\n/// Parsing engine\n/// @author Kitty Giraudel\n/// @access private\n////\n\n///\n/// Get operator of an expression\n///\n/// @param {String} $expression - Expression to extract operator from\n///\n/// @return {String} - Any of `>=`, `>`, `<=`, `<`, `≥`, `≤`\n///\n@function get-expression-operator($expression) {\n  @each $operator in ('>=', '>', '<=', '<', '≥', '≤') {\n    @if string.index($expression, $operator) {\n      @return $operator;\n    }\n  }\n\n  // It is not possible to include a mixin inside a function, so we have to\n  // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n  // functions cannot be called anywhere in Sass, we need to hack the call in\n  // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n  // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n  $_: im-log('No operator found in `#{$expression}`.');\n}\n\n///\n/// Get dimension of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract dimension from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {String} - `width` or `height` (or potentially anything else)\n///\n@function get-expression-dimension($expression, $operator) {\n  $operator-index: string.index($expression, $operator);\n  $parsed-dimension: string.slice($expression, 0, $operator-index - 1);\n  $dimension: 'width';\n\n  @if string.length($parsed-dimension) > 0 {\n    $dimension: $parsed-dimension;\n  }\n\n  @return $dimension;\n}\n\n///\n/// Get dimension prefix based on an operator\n///\n/// @param {String} $operator - Operator\n///\n/// @return {String} - `min` or `max`\n///\n@function get-expression-prefix($operator) {\n  @return if(list.index(('<', '<=', '≤'), $operator), 'max', 'min');\n}\n\n///\n/// Get value of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract value from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {Number} - A numeric value\n///\n@function get-expression-value($expression, $operator) {\n  $operator-index: string.index($expression, $operator);\n  $value: string.slice($expression, $operator-index + string.length($operator));\n\n  @if map.has-key($breakpoints, $value) {\n    $value: map.get($breakpoints, $value);\n  } @else {\n    $value: to-number($value);\n  }\n\n  $interval: map.get($unit-intervals, math.unit($value));\n\n  @if not $interval {\n    // It is not possible to include a mixin inside a function, so we have to\n    // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n    // functions cannot be called anywhere in Sass, we need to hack the call in\n    // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n    // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n    $_: im-log('Unknown unit `#{math.unit($value)}`.');\n  }\n\n  @if $operator == '>' {\n    $value: $value + $interval;\n  } @else if $operator == '<' {\n    $value: $value - $interval;\n  }\n\n  @return $value;\n}\n\n///\n/// Parse an expression to return a valid media-query expression\n///\n/// @param {String} $expression - Expression to parse\n///\n/// @return {String} - Valid media query\n///\n@function parse-expression($expression) {\n  // If it is part of $media-expressions, it has no operator\n  // then there is no need to go any further, just return the value\n  @if map.has-key($media-expressions, $expression) {\n    @return map.get($media-expressions, $expression);\n  }\n\n  $operator: get-expression-operator($expression);\n  $dimension: get-expression-dimension($expression, $operator);\n  $prefix: get-expression-prefix($operator);\n  $value: get-expression-value($expression, $operator);\n\n  @return '(#{$prefix}-#{$dimension}: #{$value})';\n}\n\n///\n/// Slice `$list` between `$start` and `$end` indexes\n///\n/// @access private\n///\n/// @param {List} $list - List to slice\n/// @param {Number} $start [1] - Start index\n/// @param {Number} $end [length($list)] - End index\n///\n/// @return {List} Sliced list\n///\n@function slice($list, $start: 1, $end: list.length($list)) {\n  @if list.length($list) < 1 or $start > $end {\n    @return ();\n  }\n\n  $result: ();\n\n  @for $i from $start through $end {\n    $result: list.append($result, list.nth($list, $i), comma);\n  }\n\n  @return $result;\n}\n\n////\n/// String to number converter\n/// @author Kitty Giraudel\n/// @access private\n////\n\n///\n/// Casts a string into a number\n///\n/// @param {String | Number} $value - Value to be parsed\n///\n/// @return {Number}\n///\n\n@function to-number($value) {\n  @if meta.type-of($value) == 'number' {\n    @return $value;\n  } @else if meta.type-of($value) != 'string' {\n    $_: im-log('Value for `to-number` should be a number or a string.');\n  }\n\n  $first-character: string.slice($value, 1, 1);\n  $result: 0;\n  $digits: 0;\n  $minus: ($first-character == '-');\n  $numbers: (\n    '0': 0,\n    '1': 1,\n    '2': 2,\n    '3': 3,\n    '4': 4,\n    '5': 5,\n    '6': 6,\n    '7': 7,\n    '8': 8,\n    '9': 9,\n  );\n\n  // Remove +/- sign if present at first character\n  @if ($first-character == '+' or $first-character == '-') {\n    $value: string.slice($value, 2);\n  }\n\n  @for $i from 1 through string.length($value) {\n    $character: string.slice($value, $i, $i);\n\n    @if not(list.index(map.keys($numbers), $character) or $character == '.') {\n      @return to-length(if($minus, -$result, $result), string.slice($value, $i));\n    }\n\n    @if $character == '.' {\n      $digits: 1;\n    } @else if $digits == 0 {\n      $result: $result * 10 + map.get($numbers, $character);\n    } @else {\n      $digits: $digits * 10;\n      $result: $result + math.div(map.get($numbers, $character), $digits);\n    }\n  }\n\n  @return if($minus, -$result, $result);\n}\n\n///\n/// Add `$unit` to `$value`\n///\n/// @param {Number} $value - Value to add unit to\n/// @param {String} $unit - String representation of the unit\n///\n/// @return {Number} - `$value` expressed in `$unit`\n///\n@function to-length($value, $unit) {\n  $units: (\n    'px': 1px,\n    'cm': 1cm,\n    'mm': 1mm,\n    '%': 1%,\n    'ch': 1ch,\n    'pc': 1pc,\n    'in': 1in,\n    'em': 1em,\n    'rem': 1rem,\n    'pt': 1pt,\n    'ex': 1ex,\n    'vw': 1vw,\n    'vh': 1vh,\n    'vmin': 1vmin,\n    'vmax': 1vmax,\n  );\n\n  @if not list.index(map.keys($units), $unit) {\n    $_: im-log('Invalid unit `#{$unit}`.');\n  }\n\n  @return $value * map.get($units, $unit);\n}\n\n///\n/// This mixin aims at redefining the configuration just for the scope of\n/// the call. It is helpful when having a component needing an extended\n/// configuration such as custom breakpoints (referred to as tweakpoints)\n/// for instance.\n///\n/// @author Kitty Giraudel\n///\n/// @param {Map} $tweakpoints [()] - Map of tweakpoints to be merged with `$breakpoints`\n/// @param {Map} $tweak-media-expressions [()] - Map of tweaked media expressions to be merged with `$media-expression`\n///\n/// @example scss - Extend the global breakpoints with a tweakpoint\n///  @include media-context(('custom': 678px)) {\n///    .foo {\n///      @include media('>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend the global media expressions with a custom one\n///  @include media-context($tweak-media-expressions: ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend both configuration maps\n///  @include media-context(('custom': 678px), ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n@mixin media-context($tweakpoints: (), $tweak-media-expressions: ()) {\n  // Save global configuration\n  $global-breakpoints: $breakpoints;\n  $global-media-expressions: $media-expressions;\n\n  // Update global configuration\n  $breakpoints: map.merge($breakpoints, $tweakpoints) !global;\n  $media-expressions: map.merge($media-expressions, $tweak-media-expressions) !global;\n\n  @content;\n\n  // Restore global configuration\n  $breakpoints: $global-breakpoints !global;\n  $media-expressions: $global-media-expressions !global;\n}\n\n////\n/// include-media public exposed API\n/// @author Eduardo Boucas\n/// @access public\n////\n\n///\n/// Generates a media query based on a list of conditions\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @example scss - With a single set breakpoint\n///  @include media('>phone') { }\n///\n/// @example scss - With two set breakpoints\n///  @include media('>phone', '<=tablet') { }\n///\n/// @example scss - With custom values\n///  @include media('>=358px', '<850px') { }\n///\n/// @example scss - With set breakpoints with custom values\n///  @include media('>desktop', '<=1350px') { }\n///\n/// @example scss - With a static expression\n///  @include media('retina2x') { }\n///\n/// @example scss - Mixing everything\n///  @include media('>=350px', '<tablet', 'retina3x') { }\n///\n@mixin media($conditions...) {\n  @if ($im-media-support and list.length($conditions) == 0) or\n    (not $im-media-support and im-intercepts-static-breakpoint($conditions...))\n  {\n    @content;\n  } @else if ($im-media-support and list.length($conditions) > 0) {\n    @media #{string.unquote(parse-expression(list.nth($conditions, 1)))} {\n      // Recursive call\n      @include media(slice($conditions, 2)...) {\n        @content;\n      }\n    }\n  }\n}\n","$white: #f6f6f6;\n$gray: #d0d4d8;\n$light-gray: #c4c4c4;\n$black: #000;\n$dark: #020202;\n$yellow: #FFD45A;\n$brown: #B47841;\n$red: #FF3E3E;\n$primary-color: #f1f1f1;\n\n$primary:       #FF2243;\n$secondary:     #041F4C;\n// $success:       $green !default;\n// $info:          $cyan !default;\n// $warning:       $yellow !default;\n// $danger:        $red !default;\n// $light:         $gray-100 !default;\n// $dark:          $gray-800 !default;\n\n\n",".product-category {\n  text-decoration: none;\n  transition: 0.4s all ease-in-out;\n  &:not(:last-child) {\n    margin-right: 0.8rem;\n  }\n  &:nth-child(2n) {\n    background: rgba(6, 100, 255, 0.15);\n    color: rgba(4, 31, 76, 1);\n    &:hover {\n      color: rgba(4, 31, 76, 1) !important;\n      background: rgba(6, 100, 255, 0.4);\n    }\n  }\n  &:nth-child(2n + 1) {\n    background: rgba(255, 34, 67, 0.2);\n    color: rgba(255, 34, 67, 1);\n    &:hover {\n      color: rgba(255, 34, 67, 1) !important;\n      background: rgba(255, 34, 67, 0.4);\n    }\n  }\n}\n\n","@import \"../components/product-category\";\n\nbody {\n  color: $secondary;\n  line-height: normal;\n  margin: 0;\n  font-family: $body-font;\n  position: relative;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: $headings-font !important;\n  line-height: normal;\n}\n\na {\n  transition: 0.4s all ease-in-out;\n\n  &:hover {\n    color: $primary !important;\n  }\n}\n\n.btn-cart-dropdown {\n  background: transparent;\n  border: 2px solid $secondary;\n  color: $secondary !important;\n  transition: all 0.4s ease-in-out;\n  text-transform: capitalize;\n\n  &:hover,\n  &:active {\n    background: $primary !important;\n    border-color: $primary;\n    color: $white !important;\n  }\n}\n\n.btn-secondary {\n  border-radius: 60px;\n  background-color: $secondary;\n  border-color: $secondary;\n  padding: .5rem 2rem;\n  transition: .4s all ease-in-out;\n\n  &:hover {\n    border-color: $secondary;\n    background-color: transparent;\n    color: $secondary !important;\n  }\n}\n\n.dropdown-toggle {\n  &::after {\n    content: \"\";\n    display: none;\n  }\n\n  .arrow-down {\n    margin-left: 0.255em;\n    transform: rotate(0);\n    transform-origin: 0.3rem 40%;\n    transition: 0.25s transform ease;\n  }\n\n  &.show {\n    .arrow-down {\n      transform: rotate(180deg);\n    }\n  }\n}\n\n.dropdown-item {\n  color: $secondary !important;\n  font-weight: normal;\n  transition: 0.4s all ease-in-out;\n\n  &:hover {\n    color: $secondary !important;\n    font-weight: bold;\n  }\n}\n\n.form-input {\n  border: none;\n  border-bottom: 2px solid #c4c4c4;\n  color: $secondary;\n  padding: 0.6rem;\n\n  &:focus-visible {\n    outline: transparent;\n  }\n}\n\n.form-textarea {\n  border: 2px solid #c4c4c4;\n  color: $secondary;\n  padding: 0.6rem;\n  resize: none;\n\n  &:focus-visible {\n    outline: transparent;\n  }\n}\n\nform.theme-form {\n  display: flex;\n  align-items: center;\n\n  input[type=\"text\"],\n  input[type=\"email\"] {\n    border-top-left-radius: 60px;\n    border-bottom-left-radius: 60px;\n    height: 40px;\n    padding: 0.5rem 0.9rem;\n    border: 2px solid #d8d9d8;\n    flex-grow: 100;\n\n    &:focus-visible {\n      outline: none;\n    }\n\n    &::placeholder {\n      color: #1a24304b;\n    }\n  }\n\n  button[type=\"submit\"] {\n    border-radius: 60px;\n    color: $white;\n    background: $primary;\n    border: none;\n    padding: 0.5rem 0.9rem;\n    margin-left: -17px;\n  }\n}\n\n.header-menu-cart {\n  .cart-dropdown {\n    cursor: pointer;\n  }\n\n  .cart-items-counter {\n    background-color: $primary;\n    color: #fff;\n    right: -10%;\n    top: -3%;\n    width: 21px;\n    height: 21px;\n  }\n\n  .cart-dropdown-menu {\n    width: 400px;\n    left: 50%;\n    bottom: 0%;\n    transform: translate(-90%, 98%);\n\n    .dropdown-cart-list {\n      .dropdown-cart-item {\n        &:not(:last-child) {\n          margin-bottom: 1rem;\n        }\n      }\n    }\n  }\n}\n\n.page-404 {\n  font-size: 6rem;\n  margin-bottom: 0;\n  &.not-found {\n    font-size: 3rem;\n  }\n}\n\n@include media(\"<laptop-l\") {\n  #site-preloader .site-logo {\n    width: 50vw;\n    max-width: 300px;\n    height: auto;\n  }\n\n  .section-shape {\n    object-fit: cover;\n  }\n}\n\n@include media(\"<=mobile-l\") {\n  form.theme-form {\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 0 auto;\n    gap: 1rem;\n\n    input[type=\"text\"],\n    input[type=\"email\"] {\n      border-radius: 60px;\n    }\n  }\n}\n\n/*This is a fade out. */\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  1% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}","$headings-font: 'Montserrat';\n$body-font: 'Poppins';","#footer-newsletter-form{\n    border-bottom: 2px solid $white;\n    display: flex;\n    input{\n        border: none;\n        background-color: transparent;\n        color: $gray;\n        padding: .6rem 0;\n        &::placeholder{\n            color: $gray;\n        }\n        &:focus-visible{\n            outline: none;\n        }\n        width: -webkit-fill-available;\n    }\n    .btn-newsletter-submit{\n        background-color: transparent;\n        border: none;\n        border-radius: 0;\n        color: $white;\n        font-size: 1.3rem;\n    }\n}\n\n.footer-list{\n    border-radius: 0;\n    .list-group-item{\n        background: transparent;\n        color: $white;\n        display: flex;\n        align-items: center;\n        .footer-icon{\n            font-size: 1.5rem;\n        }\n        a{\n            color: $primary;\n        }\n        &:not(:last-child){\n            border-bottom: 1px solid rgba($white, .6);\n        }\n        &:first-child{\n            border-top: 1px solid rgba($white, .6);\n        }\n    }\n}\n\n#footer-posts-list{\n    li{\n        transition: .4s all ease-in-out;\n        &:hover{\n            background: rgb(126 140 164 / 63%);\n        }\n        a{\n            &:hover{\n                color: $white !important;\n            }\n            color: $white;\n            text-decoration: none;\n            p{\n                margin: 0;\n            }\n        }\n    } \n}",".header-menu{\n    font-weight: 400;\n    .navbar-nav{\n        .nav-item .nav-link{\n            color: $white;\n            transition: .4s all ease-in-out;\n            &:hover,&:active{\n                color: $primary;\n            }\n            &.active{\n                font-weight: bold;\n                text-decoration: underline;\n                text-decoration-thickness: 3px;\n                text-underline-offset: 10px;\n            }\n        }\n    }\n}\n\n#mainHeader.fixed-top{\n    animation: smoothScroll 1s forwards;\n}\n\n@keyframes smoothScroll {\n\t0% {\n\t\ttransform: translateY(-40px);\n\t}\n\t100% {\n\t\ttransform: translateY(0px);\n\t}\n}\n\n#mainNavbar{\n    top: 0%;\n    left: 0%;\n    z-index: 1;\n}\n\n.header-navbar-toggler{\n    height: fit-content;\n    padding: .7rem 0.7rem;\n    align-self: center;\n    background: white;\n    border: 2px solid white;\n}\n\n.common-nav{\n    background: $white;\n    div.container-lg .menu-container #headerNavbar .header-menu a{\n        color: $secondary;\n    }\n}\n\n@include media(\"<laptop\"){\n    #headerNavbar.show{\n        background: $secondary;\n    }\n    .menu-container{\n        background: $secondary;\n    }\n    #headerNavbar{\n        padding: 1.5rem;\n        .header-menu{\n            .navbar-nav{\n                gap: .7rem;\n            }\n        }\n    }\n    .common-nav{\n        div.container-lg .menu-container #headerNavbar .header-menu a{\n            color: $white;\n        }\n    }\n}\n\n@include media(\"<=mobile-l\"){\n    .navbar-brand img{\n        width: 88%;\n        height: auto;\n    }\n}",".common-banner{\n    min-height: 300px;\n    background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n    padding-top: 93px;\n    .banner-img{\n        object-fit: cover;\n        top: 0%;\n        left: 0%;\n        opacity: .3;\n    }\n    .wave-shape{\n        top: 0%;\n        right: 0%;\n        height: 100%;\n        object-fit: cover;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./assets/src/images/preloader.svg":
/*!*****************************************!*\
  !*** ./assets/src/images/preloader.svg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f8509727965860f633271d8a0c495cd2.svg");

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/ (function(module) {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, 
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes,
		/**
		 * @type { LazySizesConfigPartial }
		 */
		lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			fastLoadedClass: 'ls-is-cached',
			iframeLoadMode: 0,
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			/**
			 * @type { LazySizesConfigPartial }
			 */
			cfg: lazySizesCfg,
			/**
			 * @type { true }
			 */
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	/**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */
	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	/**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */
	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;

			// loadMode can be also a string!
			if (loadMode == 0) {
				elem.contentWindow.location.replace(src);
			} else if (loadMode == 1) {
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, lazySizesCfg.fastLoadedClass);
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		/**
		 *
		 * @param elem { Element }
		 */
		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		/**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		/**
		 * @type { LazySizesConfigPartial }
		 */
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./node_modules/lazysizes/plugins/blur-up/ls.blur-up.js":
/*!**************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/blur-up/ls.blur-up.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(window, factory) {
	if(!window) {return;}
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if( true && module.exports){
		factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(typeof window != 'undefined' ?
	window : 0, function(window, document, lazySizes) {
	'use strict';

	var lazySizesCfg;

	(function(){
		var prop;

		var blurUpDefaults = {
			blurUpClass: 'ls-blur-up-img',
			blurUpLoadingClass: 'ls-blur-up-is-loading',
			blurUpInviewClass: 'ls-inview',
			blurUpLoadedClass: 'ls-blur-up-loaded',
			blurUpLoadedOriginalClass: 'ls-original-loaded'
		};

		lazySizesCfg = lazySizes.cfg || {};

		for(prop in blurUpDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = blurUpDefaults[prop];
			}
		}
	})();

	var slice = [].slice;
	var regBlurUp = /blur-up["']*\s*:\s*["']*(always|auto)/;
	var regType = /image\/(jpeg|png|gif|svg\+xml)/;
	var transSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

	var matchesMedia = function (source) {
		var media = source.getAttribute('data-media') || source.getAttribute('media');
		var type = source.getAttribute('type');

		return (!type || regType.test(type)) && (!media || window.matchMedia(lazySizes.cfg.customMedia[media] || media).matches);
	};

	var getLowSrc = function (picture, img) {
		var matchingLowSrc;
		var sources = picture ? slice.call(picture.querySelectorAll('source, img')) : [img];

		sources.forEach(function (src) {
			if (matchingLowSrc) {return;}
			var lowSrc = src.getAttribute('data-lowsrc');

			if (lowSrc && matchesMedia(src)) {
				matchingLowSrc = lowSrc;
			}
		});

		return matchingLowSrc;
	};

	var createBlurup = function(picture, img, src, blurUp){
		var blurImg;
		var isBlurUpLoaded = false;
		var isForced = false;
		var start = blurUp == 'always' ? 0 : Date.now();
		var isState = 0;
		var parent = (picture || img).parentNode;

		var createBlurUpImg = function () {

			if(!src){return;}

			var onloadBlurUp = function(e){
				isBlurUpLoaded = true;

				if (!blurImg) {
					blurImg = e.target;
				}

				lazySizes.rAF(function () {
					lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
					if(blurImg) {
						lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedClass);
					}
				});

				if(blurImg){
					blurImg.removeEventListener('load', onloadBlurUp);
					blurImg.removeEventListener('error', onloadBlurUp);
				}
			};

			blurImg = document.createElement('img');

			blurImg.addEventListener('load', onloadBlurUp);
			blurImg.addEventListener('error', onloadBlurUp);

			blurImg.className = lazySizes.cfg.blurUpClass;
			blurImg.cssText = img.cssText;
			blurImg.src = src;
			blurImg.alt = '';
			blurImg.setAttribute('aria-hidden', 'true');

			parent.insertBefore(blurImg, (picture || img).nextSibling);

			if(blurUp != 'always'){
				blurImg.style.visibility = 'hidden';

				lazySizes.rAF(function () {
					if (blurImg) {
						setTimeout(function(){
							if (blurImg) {
								lazySizes.rAF(function () {
									if(!isForced && blurImg){
										blurImg.style.visibility = '';
									}
								});
							}
						}, lazySizes.cfg.blurupCacheDelay || 33);
					}
				});
			}
		};

		var remove = function () {
			if(blurImg){
				lazySizes.rAF(function() {
					lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
					try {
						blurImg.parentNode.removeChild(blurImg);
					} catch(er){}
					blurImg = null;
				});
			}
		};

		var setStateUp = function(force){
			isState++;

			isForced = force || isForced;

			if(force){
				remove();
			} else if(isState > 1) {
				setTimeout(remove, 5000);
			}
		};

		var onload = function() {
			img.removeEventListener('load', onload);
			img.removeEventListener('error', onload);

			if(blurImg){
				lazySizes.rAF(function(){
					if(blurImg) {
						lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedOriginalClass);
					}
				});
			}

			lazySizes.fire(img, 'blurUpLoaded');

			if(blurUp != 'always' && (!isBlurUpLoaded || Date.now() - start < 66)){
				setStateUp(true);
			} else {
				setStateUp();
			}
		};

		createBlurUpImg();

		img.addEventListener('load', onload);
		img.addEventListener('error', onload);

		lazySizes.aC(img, lazySizes.cfg.blurUpLoadingClass);

		var parentUnveil = function (e) {
			if(parent != e.target){
				return;
			}

			lazySizes.aC(blurImg || img, lazySizes.cfg.blurUpInviewClass);

			setStateUp();

			parent.removeEventListener('lazybeforeunveil', parentUnveil);
		};

		if(!parent.getAttribute('data-expand')){
			parent.setAttribute('data-expand', -1);
		}

		parent.addEventListener('lazybeforeunveil', parentUnveil);

		lazySizes.aC(parent, lazySizes.cfg.lazyClass);

	};

	window.addEventListener('lazybeforeunveil', function (e) {
		var detail = e.detail;

		if(detail.instance != lazySizes || !detail.blurUp){return;}

		var img = e.target;
		var picture = img.parentNode;

		if(picture.nodeName != 'PICTURE'){
			picture = null;
		}

		createBlurup(picture, img, getLowSrc(picture, img) || transSrc, detail.blurUp);
	});

	window.addEventListener('lazyunveilread', function (e) {
		var detail = e.detail;

		if(detail.instance != lazySizes){return;}

		var img = e.target;
		var match = (getComputedStyle(img, null) || {fontFamily: ''}).fontFamily.match(regBlurUp);

		if(!match && !img.getAttribute('data-lowsrc')){return;}

		detail.blurUp = match && match[1] || lazySizes.cfg.blurupMode || 'always';
	});
}));


/***/ }),

/***/ "./node_modules/lazysizes/plugins/rias/ls.rias.js":
/*!********************************************************!*\
  !*** ./node_modules/lazysizes/plugins/rias/ls.rias.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if( true && module.exports){
		factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(window, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';

	var config, riasCfg;
	var lazySizesCfg = lazySizes.cfg;
	var replaceTypes = {string: 1, number: 1};
	var regNumber = /^\-*\+*\d+\.*\d*$/;
	var regPicture = /^picture$/i;
	var regWidth = /\s*\{\s*width\s*\}\s*/i;
	var regHeight = /\s*\{\s*height\s*\}\s*/i;
	var regPlaceholder = /\s*\{\s*([a-z0-9]+)\s*\}\s*/ig;
	var regObj = /^\[.*\]|\{.*\}$/;
	var regAllowedSizes = /^(?:auto|\d+(px)?)$/;
	var anchor = document.createElement('a');
	var img = document.createElement('img');
	var buggySizes = ('srcset' in img) && !('sizes' in img);
	var supportPicture = !!window.HTMLPictureElement && !buggySizes;

	(function(){
		var prop;
		var noop = function(){};
		var riasDefaults = {
			prefix: '',
			postfix: '',
			srcAttr: 'data-src',
			absUrl: false,
			modifyOptions: noop,
			widthmap: {},
			ratio: false,
			traditionalRatio: false,
			aspectratio: false,
		};

		config = lazySizes && lazySizes.cfg;

		if(!config.supportsType){
			config.supportsType = function(type/*, elem*/){
				return !type;
			};
		}

		if(!config.rias){
			config.rias = {};
		}
		riasCfg = config.rias;

		if(!('widths' in riasCfg)){
			riasCfg.widths = [];
			(function (widths){
				var width;
				var i = 0;
				while(!width || width < 3000){
					i += 5;
					if(i > 30){
						i += 1;
					}
					width = (36 * i);
					widths.push(width);
				}
			})(riasCfg.widths);
		}

		for(prop in riasDefaults){
			if(!(prop in riasCfg)){
				riasCfg[prop] = riasDefaults[prop];
			}
		}
	})();

	function getElementOptions(elem, src, options){
		var attr, parent, setOption, prop, opts;
		var elemStyles = window.getComputedStyle(elem);

		if (!options) {
			parent = elem.parentNode;

			options = {
				isPicture: !!(parent && regPicture.test(parent.nodeName || ''))
			};
		} else {
			opts = {};

			for (prop in options) {
				opts[prop] = options[prop];
			}

			options = opts;
		}

		setOption = function(attr, run){
			var attrVal = elem.getAttribute('data-'+ attr);

			if (!attrVal) {
				// no data- attr, get value from the CSS
				var styles = elemStyles.getPropertyValue('--ls-' + attr);
				// at least Safari 9 returns null rather than
				// an empty string for getPropertyValue causing
				// .trim() to fail
				if (styles) {
					attrVal = styles.trim();
				}
			}

			if (attrVal) {
				if(attrVal == 'true'){
					attrVal = true;
				} else if(attrVal == 'false'){
					attrVal = false;
				} else if(regNumber.test(attrVal)){
					attrVal = parseFloat(attrVal);
				} else if(typeof riasCfg[attr] == 'function'){
					attrVal = riasCfg[attr](elem, attrVal);
				} else if(regObj.test(attrVal)){
					try {
						attrVal = JSON.parse(attrVal);
					} catch(e){}
				}
				options[attr] = attrVal;
			} else if((attr in riasCfg) && typeof riasCfg[attr] != 'function' && !options[attr]){
				options[attr] = riasCfg[attr];
			} else if(run && typeof riasCfg[attr] == 'function'){
				options[attr] = riasCfg[attr](elem, attrVal);
			}
		};

		for(attr in riasCfg){
			setOption(attr);
		}
		src.replace(regPlaceholder, function(full, match){
			if(!(match in options)){
				setOption(match, true);
			}
		});

		return options;
	}

	function replaceUrlProps(url, options){
		var candidates = [];
		var replaceFn = function(full, match){
			return (replaceTypes[typeof options[match]]) ? options[match] : full;
		};
		candidates.srcset = [];

		if(options.absUrl){
			anchor.setAttribute('href', url);
			url = anchor.href;
		}

		url = ((options.prefix || '') + url + (options.postfix || '')).replace(regPlaceholder, replaceFn);

		options.widths.forEach(function(width){
			var widthAlias = options.widthmap[width] || width;
			var ratio = options.aspectratio || options.ratio;
			var traditionalRatio = !options.aspectratio && riasCfg.traditionalRatio;
			var candidate = {
				u: url.replace(regWidth, widthAlias)
						.replace(regHeight, ratio ?
							traditionalRatio ?
								Math.round(width * ratio) :
								Math.round(width / ratio)
							: ''),
				w: width
			};

			candidates.push(candidate);
			candidates.srcset.push( (candidate.c = candidate.u + ' ' + width + 'w') );
		});
		return candidates;
	}

	function setSrc(src, opts, elem){
		var elemW = 0;
		var elemH = 0;
		var sizeElement = elem;

		if(!src){return;}

		if (opts.ratio === 'container') {
			// calculate image or parent ratio
			elemW = sizeElement.scrollWidth;
			elemH = sizeElement.scrollHeight;

			while ((!elemW || !elemH) && sizeElement !== document) {
				sizeElement = sizeElement.parentNode;
				elemW = sizeElement.scrollWidth;
				elemH = sizeElement.scrollHeight;
			}
			if (elemW && elemH) {
				opts.ratio = opts.traditionalRatio ? elemH / elemW : elemW / elemH;
			}
		}

		src = replaceUrlProps(src, opts);

		src.isPicture = opts.isPicture;

		if(buggySizes && elem.nodeName.toUpperCase() == 'IMG'){
			elem.removeAttribute(config.srcsetAttr);
		} else {
			elem.setAttribute(config.srcsetAttr, src.srcset.join(', '));
		}

		Object.defineProperty(elem, '_lazyrias', {
			value: src,
			writable: true
		});
	}

	function createAttrObject(elem, src){
		var opts = getElementOptions(elem, src);

		riasCfg.modifyOptions.call(elem, {target: elem, details: opts, detail: opts});

		lazySizes.fire(elem, 'lazyriasmodifyoptions', opts);
		return opts;
	}

	function getSrc(elem){
		return elem.getAttribute( elem.getAttribute('data-srcattr') || riasCfg.srcAttr ) || elem.getAttribute(config.srcsetAttr) || elem.getAttribute(config.srcAttr) || elem.getAttribute('data-pfsrcset') || '';
	}

	addEventListener('lazybeforesizes', function(e){
		if(e.detail.instance != lazySizes){return;}

		var elem, src, elemOpts, sourceOpts, parent, sources, i, len, sourceSrc, sizes, detail, hasPlaceholder, modified, emptyList;
		elem = e.target;

		if(!e.detail.dataAttr || e.defaultPrevented || riasCfg.disabled || !((sizes = elem.getAttribute(config.sizesAttr) || elem.getAttribute('sizes')) && regAllowedSizes.test(sizes))){return;}

		src = getSrc(elem);

		elemOpts = createAttrObject(elem, src);

		hasPlaceholder = regWidth.test(elemOpts.prefix) || regWidth.test(elemOpts.postfix);

		if(elemOpts.isPicture && (parent = elem.parentNode)){
			sources = parent.getElementsByTagName('source');
			for(i = 0, len = sources.length; i < len; i++){
				if ( hasPlaceholder || regWidth.test(sourceSrc = getSrc(sources[i])) ){
					sourceOpts = getElementOptions(sources[i], sourceSrc, elemOpts);
					setSrc(sourceSrc, sourceOpts, sources[i]);
					modified = true;
				}
			}
		}

		if ( hasPlaceholder || regWidth.test(src) ){
			setSrc(src, elemOpts, elem);
			modified = true;
		} else if (modified) {
			emptyList = [];
			emptyList.srcset = [];
			emptyList.isPicture = true;
			Object.defineProperty(elem, '_lazyrias', {
				value: emptyList,
				writable: true
			});
		}

		if(modified){
			if(supportPicture){
				elem.removeAttribute(config.srcAttr);
			} else if(sizes != 'auto') {
				detail = {
					width: parseInt(sizes, 10)
				};
				polyfill({
					target: elem,
					detail: detail
				});
			}
		}
	}, true);
	// partial polyfill
	var polyfill = (function(){
		var ascendingSort = function( a, b ) {
			return a.w - b.w;
		};

		var reduceCandidate = function (srces) {
			var lowerCandidate, bonusFactor;
			var len = srces.length;
			var candidate = srces[len -1];
			var i = 0;

			for(i; i < len;i++){
				candidate = srces[i];
				candidate.d = candidate.w / srces.w;
				if(candidate.d >= srces.d){
					if(!candidate.cached && (lowerCandidate = srces[i - 1]) &&
						lowerCandidate.d > srces.d - (0.13 * Math.pow(srces.d, 2.2))){

						bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

						if(lowerCandidate.cached) {
							lowerCandidate.d += 0.15 * bonusFactor;
						}

						if(lowerCandidate.d + ((candidate.d - srces.d) * bonusFactor) > srces.d){
							candidate = lowerCandidate;
						}
					}
					break;
				}
			}
			return candidate;
		};

		var getWSet = function(elem, testPicture){
			var src;
			if(!elem._lazyrias && lazySizes.pWS && (src = lazySizes.pWS(elem.getAttribute(config.srcsetAttr || ''))).length){
				Object.defineProperty(elem, '_lazyrias', {
					value: src,
					writable: true
				});
				if(testPicture && elem.parentNode){
					src.isPicture = elem.parentNode.nodeName.toUpperCase() == 'PICTURE';
				}
			}
			return elem._lazyrias;
		};

		var getX = function(elem){
			var dpr = window.devicePixelRatio || 1;
			var optimum = lazySizes.getX && lazySizes.getX(elem);
			return Math.min(optimum || dpr, 2.4, dpr);
		};

		var getCandidate = function(elem, width){
			var sources, i, len, media, srces, src;

			srces = elem._lazyrias;

			if(srces.isPicture && window.matchMedia){
				for(i = 0, sources = elem.parentNode.getElementsByTagName('source'), len = sources.length; i < len; i++){
					if(getWSet(sources[i]) && !sources[i].getAttribute('type') && ( !(media = sources[i].getAttribute('media')) || ((matchMedia(media) || {}).matches))){
						srces = sources[i]._lazyrias;
						break;
					}
				}
			}

			if(!srces.w || srces.w < width){
				srces.w = width;
				srces.d = getX(elem);
				src = reduceCandidate(srces.sort(ascendingSort));
			}

			return src;
		};

		var polyfill = function(e){
			if(e.detail.instance != lazySizes){return;}

			var candidate;
			var elem = e.target;

			if(!buggySizes && (window.respimage || window.picturefill || lazySizesCfg.pf)){
				document.removeEventListener('lazybeforesizes', polyfill);
				return;
			}

			if(!('_lazyrias' in elem) && (!e.detail.dataAttr || !getWSet(elem, true))){
				return;
			}

			candidate = getCandidate(elem, e.detail.width);

			if(candidate && candidate.u && elem._lazyrias.cur != candidate.u){
				elem._lazyrias.cur = candidate.u;
				candidate.cached = true;
				lazySizes.rAF(function(){
					elem.setAttribute(config.srcAttr, candidate.u);
					elem.setAttribute('src', candidate.u);
				});
			}
		};

		if(!supportPicture){
			addEventListener('lazybeforesizes', polyfill);
		} else {
			polyfill = function(){};
		}

		return polyfill;

	})();

}));


/***/ }),

/***/ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js":
/*!**********************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
This plugin extends lazySizes to lazyLoad:
background images, videos/posters and scripts

Background-Image:
For background images, use data-bg attribute:
<div class="lazyload" data-bg="bg-img.jpg"></div>

 Video:
 For video/audio use data-poster and preload="none":
 <video class="lazyload" preload="none" data-poster="poster.jpg" src="src.mp4">
 <!-- sources -->
 </video>

 For video that plays automatically if in view:
 <video
	class="lazyload"
	preload="none"
	muted=""
	data-autoplay=""
	data-poster="poster.jpg"
	src="src.mp4">
</video>

 Scripts:
 For scripts use data-script:
 <div class="lazyload" data-script="module-name.js"></div>


 Script modules using require:
 For modules using require use data-require:
 <div class="lazyload" data-require="module-name"></div>
*/

(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if( true && module.exports){
		factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(window, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';
	var bgLoad, regBgUrlEscape;
	var uniqueUrls = {};

	if(document.addEventListener){
		regBgUrlEscape = /\(|\)|\s|'/;

		bgLoad = function (url, cb){
			var img = document.createElement('img');
			img.onload = function(){
				img.onload = null;
				img.onerror = null;
				img = null;
				cb();
			};
			img.onerror = img.onload;

			img.src = url;

			if(img && img.complete && img.onload){
				img.onload();
			}
		};

		addEventListener('lazybeforeunveil', function(e){
			if(e.detail.instance != lazySizes){return;}

			var tmp, load, bg, poster;
			if(!e.defaultPrevented) {

				var target = e.target;

				if(target.preload == 'none'){
					target.preload = target.getAttribute('data-preload') || 'auto';
				}

				if (target.getAttribute('data-autoplay') != null) {
					if (target.getAttribute('data-expand') && !target.autoplay) {
						try {
							target.play();
						} catch (er) {}
					} else {
						requestAnimationFrame(function () {
							target.setAttribute('data-expand', '-10');
							lazySizes.aC(target, lazySizes.cfg.lazyClass);
						});
					}
				}

				tmp = target.getAttribute('data-link');
				if(tmp){
					addStyleScript(tmp, true);
				}

				// handle data-script
				tmp = target.getAttribute('data-script');
				if(tmp){
					e.detail.firesLoad = true;
					load = function(){
						e.detail.firesLoad = false;
						lazySizes.fire(target, '_lazyloaded', {}, true, true);
					};
					addStyleScript(tmp, null, load);
				}

				// handle data-require
				tmp = target.getAttribute('data-require');
				if(tmp){
					if(lazySizes.cfg.requireJs){
						lazySizes.cfg.requireJs([tmp]);
					} else {
						addStyleScript(tmp);
					}
				}

				// handle data-bg
				bg = target.getAttribute('data-bg');
				if (bg) {
					e.detail.firesLoad = true;
					load = function(){
						target.style.backgroundImage = 'url(' + (regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg ) + ')';
						e.detail.firesLoad = false;
						lazySizes.fire(target, '_lazyloaded', {}, true, true);
					};

					bgLoad(bg, load);
				}

				// handle data-poster
				poster = target.getAttribute('data-poster');
				if(poster){
					e.detail.firesLoad = true;
					load = function(){
						target.poster = poster;
						e.detail.firesLoad = false;
						lazySizes.fire(target, '_lazyloaded', {}, true, true);
					};

					bgLoad(poster, load);

				}
			}
		}, false);

	}

	function addStyleScript(src, style, cb){
		if(uniqueUrls[src]){
			return;
		}
		var elem = document.createElement(style ? 'link' : 'script');
		var insertElem = document.getElementsByTagName('script')[0];

		if(style){
			elem.rel = 'stylesheet';
			elem.href = src;
		} else {
			elem.onload = function(){
				elem.onerror = null;
				elem.onload = null;
				cb();
			};
			elem.onerror = elem.onload;

			elem.src = src;
		}
		uniqueUrls[src] = true;
		uniqueUrls[elem.src || elem.href] = true;
		insertElem.parentNode.insertBefore(elem, insertElem);
	}
}));


/***/ }),

/***/ "./assets/src/sass/main.scss":
/*!***********************************!*\
  !*** ./assets/src/sass/main.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./assets/src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = jQuery;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/src/js/main.js"));
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map