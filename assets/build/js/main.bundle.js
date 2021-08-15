(self["webpackChunkSpanishALaCarte"] = self["webpackChunkSpanishALaCarte"] || []).push([["main"],{

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
$(window).on('load', function () {
  // Hide preloader once the site has loaded
  $('#site-preloader').addClass('page-loaded');
  $('body').removeClass('overflow-hidden');
  $('#site-preloader.page-loaded').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
    $(this).addClass('d-none');
  });
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
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");







$(window).on('scroll', function () {// var headerOffset = $('#mainHeader').height() /;
  // var header = $('#mainHeader'),
  // scroll = $(window).scrollTop();
  // // Offset greater than 0
  // scroll >= headerOffset ?
  // header.addClass('fixed-top') :
  // header.removeClass('fixed-top');
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./assets/src/sass/main.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./assets/src/sass/main.scss ***!
  \***********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* Folder system based in this article: \n * https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4\n * main.scss: Only contains our imports.\n * Developed by: Frank Ponte for HammerSport Marketing. 2021.\n * This project has a MoFi (Mobile First) Approach. \n * All media queries have been written for '> phone' breakpoints\n*/\n/**  \n * fonts imports file\n */\n.wpadminbar-exists {\n  top: 0 !important;\n}\n\n@media (min-width: 425px) {\n  .wpadminbar-exists {\n    top: 50px !important;\n  }\n}\n.blur-up {\n  -webkit-filter: blur(5px);\n  filter: blur(5px);\n  transition: filter 400ms, -webkit-filter 400ms;\n}\n\n.blur-up.lazyloaded {\n  -webkit-filter: blur(0);\n  filter: blur(0);\n}\n\n.object-fit-cover {\n  object-fit: cover;\n}\n\n.w-fit-content {\n  width: fit-content;\n}\n\n.text-blue {\n  color: #041F4C;\n}\n\n.text-red {\n  color: #FF2243;\n}\n\n.bg-yellow {\n  background-color: #FFD45A;\n}\n\n.bg-dark-blue {\n  background-color: #041A40;\n}\n\n.bg-blue {\n  background-color: #041F4C;\n}\n\n.bg-theme-gradient {\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n}\n\n.shadow-red {\n  box-shadow: 10px 17px #FF2243;\n}\n\n.vertical-separator {\n  top: 50%;\n  width: 1px;\n  background: #1A2430;\n  transform: translate(-50%, -50%);\n}\n.vertical-separator.right {\n  left: 100%;\n}\n\n.title-separator {\n  flex-grow: 100;\n  height: 1px;\n  background-color: #FF2243;\n}\n\n.theme-list {\n  list-style-type: none;\n}\n\n.z-n1 {\n  z-index: -1;\n}\n\n.z-n2 {\n  z-index: -2;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-1 {\n  z-index: 1;\n}\n\n.social-link {\n  display: flex;\n  width: 42px;\n  height: 42px;\n  background: #3D70B1;\n  color: #f6f6f6;\n  font-size: 23px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: 2px solid #3D70B1;\n  transition: 0.4s all ease-in-out;\n}\n.social-link:hover, .social-link:active {\n  background-color: transparent;\n  color: #3D70B1 !important;\n}\n\nbody {\n  color: #041F4C;\n  line-height: normal;\n  margin: 0;\n  font-family: \"Poppins\";\n  position: relative;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: \"Montserrat\" !important;\n  line-height: normal;\n}\n\na {\n  transition: 0.4s all ease-in-out;\n}\na:hover {\n  color: #FF2243 !important;\n}\n\n#site-preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n  z-index: 999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n#site-preloader.page-loaded {\n  animation: fadeOut 0.8s forwards;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 0.6rem;\n  content: \"\";\n  transform: rotate(0);\n  transform-origin: 0.3rem 40%;\n  transition: 0.25s transform ease;\n  border: none;\n}\n.dropdown-toggle.show::after {\n  transform: rotate(180deg);\n}\n\n.dropdown-item {\n  color: #041F4C !important;\n  font-weight: normal;\n  transition: 0.4s all ease-in-out;\n}\n.dropdown-item:hover {\n  color: #041F4C !important;\n  font-weight: bold;\n}\n\n.form-input {\n  border: none;\n  border-bottom: 2px solid #C4C4C4;\n  color: #041F4C;\n  padding: 0.6rem;\n}\n.form-input:focus-visible {\n  outline: transparent;\n}\n\n.form-textarea {\n  border: 2px solid #C4C4C4;\n  color: #041F4C;\n  padding: 0.6rem;\n  resize: none;\n}\n.form-textarea:focus-visible {\n  outline: transparent;\n}\n\nform.theme-form {\n  display: flex;\n  align-items: center;\n}\nform.theme-form input[type=text], form.theme-form input[type=email] {\n  border-top-left-radius: 60px;\n  border-bottom-left-radius: 60px;\n  height: 40px;\n  padding: 0.5rem 0.9rem;\n  border: 2px solid #D8D9D8;\n  flex-grow: 100;\n}\nform.theme-form input[type=text]:focus-visible, form.theme-form input[type=email]:focus-visible {\n  outline: none;\n}\nform.theme-form input[type=text]::placeholder, form.theme-form input[type=email]::placeholder {\n  color: #1a24304b;\n}\nform.theme-form button[type=submit] {\n  border-radius: 60px;\n  color: #f6f6f6;\n  background: #FF2243;\n  border: none;\n  padding: 0.5rem 0.9rem;\n  margin-left: -17px;\n}\n\n@media (max-width: 1439px) {\n  #site-preloader .site-logo {\n    width: 50vw;\n    max-width: 300px;\n    height: auto;\n  }\n\n  .section-shape {\n    object-fit: cover;\n  }\n}\n@media (max-width: 425px) {\n  form.theme-form {\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 0 auto;\n    gap: 1rem;\n  }\n  form.theme-form input[type=text], form.theme-form input[type=email] {\n    border-radius: 60px;\n  }\n}\n/*This is a fade out. */\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  1% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n#footer-newsletter-form {\n  border-bottom: 2px solid #f6f6f6;\n  display: flex;\n}\n#footer-newsletter-form input {\n  border: none;\n  background-color: transparent;\n  color: #d0d4d8;\n  padding: 0.6rem 0;\n  width: -webkit-fill-available;\n}\n#footer-newsletter-form input::placeholder {\n  color: #d0d4d8;\n}\n#footer-newsletter-form input:focus-visible {\n  outline: none;\n}\n#footer-newsletter-form .btn-newsletter-submit {\n  background-color: transparent;\n  border: none;\n  border-radius: 0;\n  color: #f6f6f6;\n  font-size: 1.3rem;\n}\n\n.footer-list {\n  border-radius: 0;\n}\n.footer-list .list-group-item {\n  background: transparent;\n  color: #f6f6f6;\n  display: flex;\n  align-items: center;\n}\n.footer-list .list-group-item .footer-icon {\n  font-size: 1.5rem;\n}\n.footer-list .list-group-item a {\n  color: #FF2243;\n}\n.footer-list .list-group-item:not(:last-child) {\n  border-bottom: 1px solid rgba(246, 246, 246, 0.6);\n}\n.footer-list .list-group-item:first-child {\n  border-top: 1px solid rgba(246, 246, 246, 0.6);\n}\n\n#footer-posts-list li {\n  transition: 0.4s all ease-in-out;\n}\n#footer-posts-list li:hover {\n  background: rgba(126, 140, 164, 0.63);\n}\n#footer-posts-list li a {\n  color: #f6f6f6;\n  text-decoration: none;\n}\n#footer-posts-list li a:hover {\n  color: #f6f6f6 !important;\n}\n#footer-posts-list li a p {\n  margin: 0;\n}\n\n.header-menu {\n  font-weight: 400;\n}\n.header-menu .navbar-nav .nav-item .nav-link {\n  color: #f6f6f6;\n  transition: 0.4s all ease-in-out;\n}\n.header-menu .navbar-nav .nav-item .nav-link:hover, .header-menu .navbar-nav .nav-item .nav-link:active {\n  color: #FF2243;\n}\n.header-menu .navbar-nav .nav-item .nav-link.active {\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 3px;\n  text-underline-offset: 10px;\n}\n\n#mainHeader.fixed-top {\n  animation: smoothScroll 1s forwards;\n}\n\n@keyframes smoothScroll {\n  0% {\n    transform: translateY(-40px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n#mainNavbar {\n  top: 0%;\n  left: 0%;\n  z-index: 1;\n}\n\n.header-navbar-toggler {\n  height: fit-content;\n  padding: 0.7rem 0.7rem;\n  align-self: center;\n  background: white;\n  border: 2px solid white;\n}\n\n.common-nav {\n  background: #f6f6f6;\n}\n.common-nav div.container-lg .menu-container #headerNavbar .header-menu a {\n  color: #041F4C;\n}\n\n@media (max-width: 1023px) {\n  #headerNavbar.show {\n    background: #041F4C;\n  }\n\n  .menu-container {\n    background: #041F4C;\n  }\n\n  #headerNavbar {\n    padding: 1.5rem;\n  }\n  #headerNavbar .header-menu .navbar-nav {\n    gap: 0.7rem;\n  }\n\n  .common-nav div.container-lg .menu-container #headerNavbar .header-menu a {\n    color: #f6f6f6;\n  }\n}\n@media (max-width: 425px) {\n  .navbar-brand img {\n    width: 88%;\n    height: auto;\n  }\n}\n.common-banner {\n  min-height: 400px;\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n  padding-top: 93px;\n}\n.common-banner .banner-img {\n  object-fit: cover;\n  top: 0%;\n  left: 0%;\n  opacity: 0.3;\n}\n.common-banner .wave-shape {\n  top: 0%;\n  right: 0%;\n  height: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./assets/src/sass/main.scss","webpack://./assets/src/sass/utils/_fonts.scss","webpack://./assets/src/sass/utils/_global.scss","webpack://./node_modules/include-media/dist/_include-media.scss","webpack://./assets/src/sass/utils/_colors.scss","webpack://./assets/src/sass/theme/_theme.scss","webpack://./assets/src/sass/utils/_variables.scss","webpack://./assets/src/sass/layout/_footer.scss","webpack://./assets/src/sass/layout/_header.scss","webpack://./assets/src/sass/layout/_common-banner.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;;;;;;CAAA;ACAA;;EAAA;ACAA;EACI,iBAAA;AFaJ;;AG+hBI;EDxiBA;IACI,oBAAA;EFaN;AACF;AEVA;EACA,yBAAA;EACA,iBAAA;EACA,8CAAA;AFYA;;AETA;EACA,uBAAA;EACA,eAAA;AFYA;;AETA;EACI,iBAAA;AFYJ;;AETA;EACI,kBAAA;AFYJ;;AETA;EACI,cEnBY;AJ+BhB;;AETA;EACI,cExBY;AJoChB;;AETA;EACI,yBEjCK;AJ6CT;;AETA;EACI,yBAAA;AFYJ;;AETA;EACI,yBEnCY;AJ+ChB;;AETA;EACI,oEAAA;AFYJ;;AETA;EACI,6BAAA;AFYJ;;AETA;EACI,QAAA;EACA,UAAA;EACA,mBAAA;EACA,gCAAA;AFYJ;AEXI;EACI,UAAA;AFaR;;AETA;EACI,cAAA;EACA,WAAA;EACA,yBE5DY;AJwEhB;;AETA;EACI,qBAAA;AFYJ;;AETA;EACI,WAAA;AFYJ;;AEVA;EACI,WAAA;AFaJ;;AEVA;EACI,UAAA;AFaJ;;AEVA;EACI,UAAA;AFaJ;;AEVA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,cEjGI;EFkGJ,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gCAAA;AFaJ;AEZI;EACI,6BAAA;EACA,yBAAA;AFcR;;AKxHA;EACI,cDUY;ECTZ,mBAAA;EACA,SAAA;EACA,sBCHQ;EDIR,kBAAA;AL2HJ;;AKxHA;;EAEE,oCAAA;EACA,mBAAA;AL2HF;;AKvHA;EACE,gCAAA;AL0HF;AKzHE;EACE,yBAAA;AL2HJ;;AKvHA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oEAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;AL0HF;AKzHE;EACE,gCAAA;AL2HJ;;AKtHE;EACE,qBAAA;EACA,oBAAA;EACA,uBAAA;EACA,kCAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,oBAAA;EACA,4BAAA;EACA,gCAAA;EACA,YAAA;ALyHJ;AKtHI;EACE,yBAAA;ALwHN;;AKnHA;EACE,yBAAA;EACA,mBAAA;EACA,gCAAA;ALsHF;AKrHE;EACE,yBAAA;EACA,iBAAA;ALuHJ;;AKnHA;EACE,YAAA;EACA,gCAAA;EACA,cD9Dc;EC+Dd,eAAA;ALsHF;AKrHE;EACE,oBAAA;ALuHJ;;AKnHA;EACE,yBAAA;EACA,cDvEc;ECwEd,eAAA;EACA,YAAA;ALsHF;AKrHE;EACE,oBAAA;ALuHJ;;AKnHA;EACE,aAAA;EACA,mBAAA;ALsHF;AKrHE;EACI,4BAAA;EACA,+BAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;ALuHN;AKtHM;EACI,aAAA;ALwHV;AKtHM;EACI,gBAAA;ALwHV;AKrHE;EACI,mBAAA;EACA,cD7GE;EC8GF,mBDpGU;ECqGV,YAAA;EACA,sBAAA;EACA,kBAAA;ALuHN;;AGqUI;EEvbF;IACE,WAAA;IACA,gBAAA;IACA,YAAA;ELsHF;;EKpHA;IACE,iBAAA;ELuHF;AACF;AGyTI;EE5aF;IACE,eAAA;IACA,uBAAA;IACA,cAAA;IACA,SAAA;ELsHF;EKrHE;IACE,mBAAA;ELuHJ;AACF;AKnHE,uBAAA;AACA;EACE;IAAI,UAAA;ELsHN;EKrHE;IAAI,UAAA;ELwHN;EKvHE;IAAM,UAAA;EL0HR;AACF;AO3QA;EACI,gCAAA;EACA,aAAA;AP6QJ;AO5QI;EACI,YAAA;EACA,6BAAA;EACA,cHLD;EGMC,iBAAA;EAOA,6BAAA;APwQR;AO9QQ;EACI,cHRL;AJwRP;AO9QQ;EACI,aAAA;APgRZ;AO5QI;EACI,6BAAA;EACA,YAAA;EACA,gBAAA;EACA,cHpBA;EGqBA,iBAAA;AP8QR;;AO1QA;EACI,gBAAA;AP6QJ;AO5QI;EACI,uBAAA;EACA,cH7BA;EG8BA,aAAA;EACA,mBAAA;AP8QR;AO7QQ;EACI,iBAAA;AP+QZ;AO7QQ;EACI,cH1BI;AJyShB;AO7QQ;EACI,iDAAA;AP+QZ;AO7QQ;EACI,8CAAA;AP+QZ;;AOzQI;EACI,gCAAA;AP4QR;AO3QQ;EACI,qCAAA;AP6QZ;AO3QQ;EAII,cHzDJ;EG0DI,qBAAA;AP0QZ;AO9QY;EACI,yBAAA;APgRhB;AO5QY;EACI,SAAA;AP8QhB;;AQ1UA;EACI,gBAAA;AR6UJ;AQ3UQ;EACI,cJJJ;EIKI,gCAAA;AR6UZ;AQ5UY;EACI,cJGA;AJ2UhB;AQ5UY;EACI,iBAAA;EACA,0BAAA;EACA,8BAAA;EACA,2BAAA;AR8UhB;;AQxUA;EACI,mCAAA;AR2UJ;;AQxUA;EACC;IACC,4BAAA;ER2UA;EQzUD;IACC,0BAAA;ER2UA;AACF;AQxUA;EACI,OAAA;EACA,QAAA;EACA,UAAA;AR0UJ;;AQvUA;EACI,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;AR0UJ;;AQvUA;EACI,mBJ/CI;AJyXR;AQzUI;EACI,cJtCQ;AJiXhB;;AGiLI;EKvfA;IACI,mBJ5CQ;EJsXd;;EQxUE;IACI,mBJ/CQ;EJ0Xd;;EQzUE;IACI,eAAA;ER4UN;EQ1UU;IACI,WAAA;ER4Ud;;EQvUM;IACI,cJtEJ;EJgZN;AACF;AG4JI;EKjeA;IACI,UAAA;IACA,YAAA;ERwUN;AACF;ASvZA;EACI,iBAAA;EACA,oEAAA;EACA,iBAAA;ATyZJ;ASxZI;EACI,iBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;AT0ZR;ASxZI;EACI,OAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;AT0ZR","sourcesContent":["@charset \"UTF-8\";\n/* Folder system based in this article: \n * https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4\n * main.scss: Only contains our imports.\n * Developed by: Frank Ponte for HammerSport Marketing. 2021.\n * This project has a MoFi (Mobile First) Approach. \n * All media queries have been written for '> phone' breakpoints\n*/\n/**  \n * fonts imports file\n */\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\");\n.wpadminbar-exists {\n  top: 0 !important;\n}\n\n@media (min-width: 425px) {\n  .wpadminbar-exists {\n    top: 50px !important;\n  }\n}\n.blur-up {\n  -webkit-filter: blur(5px);\n  filter: blur(5px);\n  transition: filter 400ms, -webkit-filter 400ms;\n}\n\n.blur-up.lazyloaded {\n  -webkit-filter: blur(0);\n  filter: blur(0);\n}\n\n.object-fit-cover {\n  object-fit: cover;\n}\n\n.w-fit-content {\n  width: fit-content;\n}\n\n.text-blue {\n  color: #041F4C;\n}\n\n.text-red {\n  color: #FF2243;\n}\n\n.bg-yellow {\n  background-color: #FFD45A;\n}\n\n.bg-dark-blue {\n  background-color: #041A40;\n}\n\n.bg-blue {\n  background-color: #041F4C;\n}\n\n.bg-theme-gradient {\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n}\n\n.shadow-red {\n  box-shadow: 10px 17px #FF2243;\n}\n\n.vertical-separator {\n  top: 50%;\n  width: 1px;\n  background: #1A2430;\n  transform: translate(-50%, -50%);\n}\n.vertical-separator.right {\n  left: 100%;\n}\n\n.title-separator {\n  flex-grow: 100;\n  height: 1px;\n  background-color: #FF2243;\n}\n\n.theme-list {\n  list-style-type: none;\n}\n\n.z-n1 {\n  z-index: -1;\n}\n\n.z-n2 {\n  z-index: -2;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-1 {\n  z-index: 1;\n}\n\n.social-link {\n  display: flex;\n  width: 42px;\n  height: 42px;\n  background: #3D70B1;\n  color: #f6f6f6;\n  font-size: 23px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: 2px solid #3D70B1;\n  transition: 0.4s all ease-in-out;\n}\n.social-link:hover, .social-link:active {\n  background-color: transparent;\n  color: #3D70B1 !important;\n}\n\nbody {\n  color: #041F4C;\n  line-height: normal;\n  margin: 0;\n  font-family: \"Poppins\";\n  position: relative;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: \"Montserrat\" !important;\n  line-height: normal;\n}\n\na {\n  transition: 0.4s all ease-in-out;\n}\na:hover {\n  color: #FF2243 !important;\n}\n\n#site-preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n  z-index: 999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n#site-preloader.page-loaded {\n  animation: fadeOut 0.8s forwards;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  font-size: 0.6rem;\n  content: \"\";\n  transform: rotate(0);\n  transform-origin: 0.3rem 40%;\n  transition: 0.25s transform ease;\n  border: none;\n}\n.dropdown-toggle.show::after {\n  transform: rotate(180deg);\n}\n\n.dropdown-item {\n  color: #041F4C !important;\n  font-weight: normal;\n  transition: 0.4s all ease-in-out;\n}\n.dropdown-item:hover {\n  color: #041F4C !important;\n  font-weight: bold;\n}\n\n.form-input {\n  border: none;\n  border-bottom: 2px solid #C4C4C4;\n  color: #041F4C;\n  padding: 0.6rem;\n}\n.form-input:focus-visible {\n  outline: transparent;\n}\n\n.form-textarea {\n  border: 2px solid #C4C4C4;\n  color: #041F4C;\n  padding: 0.6rem;\n  resize: none;\n}\n.form-textarea:focus-visible {\n  outline: transparent;\n}\n\nform.theme-form {\n  display: flex;\n  align-items: center;\n}\nform.theme-form input[type=text], form.theme-form input[type=email] {\n  border-top-left-radius: 60px;\n  border-bottom-left-radius: 60px;\n  height: 40px;\n  padding: 0.5rem 0.9rem;\n  border: 2px solid #D8D9D8;\n  flex-grow: 100;\n}\nform.theme-form input[type=text]:focus-visible, form.theme-form input[type=email]:focus-visible {\n  outline: none;\n}\nform.theme-form input[type=text]::placeholder, form.theme-form input[type=email]::placeholder {\n  color: #1a24304b;\n}\nform.theme-form button[type=submit] {\n  border-radius: 60px;\n  color: #f6f6f6;\n  background: #FF2243;\n  border: none;\n  padding: 0.5rem 0.9rem;\n  margin-left: -17px;\n}\n\n@media (max-width: 1439px) {\n  #site-preloader .site-logo {\n    width: 50vw;\n    max-width: 300px;\n    height: auto;\n  }\n\n  .section-shape {\n    object-fit: cover;\n  }\n}\n@media (max-width: 425px) {\n  form.theme-form {\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 0 auto;\n    gap: 1rem;\n  }\n  form.theme-form input[type=text], form.theme-form input[type=email] {\n    border-radius: 60px;\n  }\n}\n/*This is a fade out. */\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  1% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n#footer-newsletter-form {\n  border-bottom: 2px solid #f6f6f6;\n  display: flex;\n}\n#footer-newsletter-form input {\n  border: none;\n  background-color: transparent;\n  color: #d0d4d8;\n  padding: 0.6rem 0;\n  width: -webkit-fill-available;\n}\n#footer-newsletter-form input::placeholder {\n  color: #d0d4d8;\n}\n#footer-newsletter-form input:focus-visible {\n  outline: none;\n}\n#footer-newsletter-form .btn-newsletter-submit {\n  background-color: transparent;\n  border: none;\n  border-radius: 0;\n  color: #f6f6f6;\n  font-size: 1.3rem;\n}\n\n.footer-list {\n  border-radius: 0;\n}\n.footer-list .list-group-item {\n  background: transparent;\n  color: #f6f6f6;\n  display: flex;\n  align-items: center;\n}\n.footer-list .list-group-item .footer-icon {\n  font-size: 1.5rem;\n}\n.footer-list .list-group-item a {\n  color: #FF2243;\n}\n.footer-list .list-group-item:not(:last-child) {\n  border-bottom: 1px solid rgba(246, 246, 246, 0.6);\n}\n.footer-list .list-group-item:first-child {\n  border-top: 1px solid rgba(246, 246, 246, 0.6);\n}\n\n#footer-posts-list li {\n  transition: 0.4s all ease-in-out;\n}\n#footer-posts-list li:hover {\n  background: rgba(126, 140, 164, 0.63);\n}\n#footer-posts-list li a {\n  color: #f6f6f6;\n  text-decoration: none;\n}\n#footer-posts-list li a:hover {\n  color: #f6f6f6 !important;\n}\n#footer-posts-list li a p {\n  margin: 0;\n}\n\n.header-menu {\n  font-weight: 400;\n}\n.header-menu .navbar-nav .nav-item .nav-link {\n  color: #f6f6f6;\n  transition: 0.4s all ease-in-out;\n}\n.header-menu .navbar-nav .nav-item .nav-link:hover, .header-menu .navbar-nav .nav-item .nav-link:active {\n  color: #FF2243;\n}\n.header-menu .navbar-nav .nav-item .nav-link.active {\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 3px;\n  text-underline-offset: 10px;\n}\n\n#mainHeader.fixed-top {\n  animation: smoothScroll 1s forwards;\n}\n\n@keyframes smoothScroll {\n  0% {\n    transform: translateY(-40px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n#mainNavbar {\n  top: 0%;\n  left: 0%;\n  z-index: 1;\n}\n\n.header-navbar-toggler {\n  height: fit-content;\n  padding: 0.7rem 0.7rem;\n  align-self: center;\n  background: white;\n  border: 2px solid white;\n}\n\n.common-nav {\n  background: #f6f6f6;\n}\n.common-nav div.container-lg .menu-container #headerNavbar .header-menu a {\n  color: #041F4C;\n}\n\n@media (max-width: 1023px) {\n  #headerNavbar.show {\n    background: #041F4C;\n  }\n\n  .menu-container {\n    background: #041F4C;\n  }\n\n  #headerNavbar {\n    padding: 1.5rem;\n  }\n  #headerNavbar .header-menu .navbar-nav {\n    gap: 0.7rem;\n  }\n\n  .common-nav div.container-lg .menu-container #headerNavbar .header-menu a {\n    color: #f6f6f6;\n  }\n}\n@media (max-width: 425px) {\n  .navbar-brand img {\n    width: 88%;\n    height: auto;\n  }\n}\n.common-banner {\n  min-height: 400px;\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\n  padding-top: 93px;\n}\n.common-banner .banner-img {\n  object-fit: cover;\n  top: 0%;\n  left: 0%;\n  opacity: 0.3;\n}\n.common-banner .wave-shape {\n  top: 0%;\n  right: 0%;\n  height: 100%;\n  object-fit: cover;\n}","/**  \r\n * fonts imports file\r\n */\r\n\r\n @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');",".wpadminbar-exists{\r\n    top: 0 !important;\r\n}\r\n  \r\n@include media(\">=mobile-l\"){\r\n    .wpadminbar-exists{\r\n        top: 50px !important;\r\n    }\r\n}\r\n\r\n.blur-up {\r\n-webkit-filter: blur(5px);\r\nfilter: blur(5px);\r\ntransition: filter 400ms, -webkit-filter 400ms;\r\n}\r\n  \r\n.blur-up.lazyloaded {\r\n-webkit-filter: blur(0);\r\nfilter: blur(0);\r\n}\r\n\r\n.object-fit-cover{\r\n    object-fit: cover;\r\n}\r\n\r\n.w-fit-content{\r\n    width: fit-content;\r\n}\r\n\r\n.text-blue{\r\n    color: $secondary;\r\n}\r\n\r\n.text-red{\r\n    color: $primary;\r\n}\r\n\r\n.bg-yellow{\r\n    background-color: $yellow;\r\n}\r\n\r\n.bg-dark-blue{\r\n    background-color: #041A40;\r\n}\r\n\r\n.bg-blue{\r\n    background-color: $secondary;\r\n}\r\n\r\n.bg-theme-gradient{\r\n    background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\r\n}\r\n\r\n.shadow-red{\r\n    box-shadow: 10px 17px $primary;\r\n}\r\n\r\n.vertical-separator{\r\n    top: 50%;\r\n    width: 1px;\r\n    background: #1A2430;\r\n    transform: translate(-50%,-50%);\r\n    &.right{\r\n        left:100%;\r\n    }\r\n}\r\n\r\n.title-separator{\r\n    flex-grow: 100;\r\n    height: 1px;\r\n    background-color: $primary;\r\n}\r\n\r\n.theme-list{\r\n    list-style-type: none;\r\n}\r\n\r\n.z-n1{\r\n    z-index: -1;\r\n}\r\n.z-n2{\r\n    z-index: -2;\r\n}\r\n\r\n.z-0{\r\n    z-index: 0;\r\n}\r\n\r\n.z-1{\r\n    z-index: 1;\r\n}\r\n\r\n.social-link{\r\n    display: flex;\r\n    width: 42px;\r\n    height: 42px;\r\n    background: #3D70B1;\r\n    color: $white;\r\n    font-size: 23px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n    border: 2px solid #3D70B1;\r\n    transition: .4s all ease-in-out;\r\n    &:hover,&:active{\r\n        background-color: transparent;\r\n        color: #3D70B1 !important;\r\n    }\r\n}","@charset \"UTF-8\";\n\n//     _            _           _                           _ _\n//    (_)          | |         | |                         | (_)\n//     _ _ __   ___| |_   _  __| | ___   _ __ ___   ___  __| |_  __ _\n//    | | '_ \\ / __| | | | |/ _` |/ _ \\ | '_ ` _ \\ / _ \\/ _` | |/ _` |\n//    | | | | | (__| | |_| | (_| |  __/ | | | | | |  __/ (_| | | (_| |\n//    |_|_| |_|\\___|_|\\__,_|\\__,_|\\___| |_| |_| |_|\\___|\\__,_|_|\\__,_|\n//\n//      Simple, elegant and maintainable media queries in Sass\n//                        v1.4.9\n//\n//        https://eduardoboucas.github.io/include-media\n//\n//         Authors: Eduardo Boucas (@eduardoboucas)\n//                  Kitty Giraudel (@kittygiraudel)\n//\n//      This project is licensed under the terms of the MIT license\n////\n/// include-media library public configuration\n/// @author Eduardo Boucas\n/// @access public\n////\n\n\n///\n/// Creates a list of global breakpoints\n///\n/// @example scss - Creates a single breakpoint with the label `phone`\n///  $breakpoints: ('phone': 320px);\n///\n$breakpoints: (\n  'phone': 320px,\n  'tablet': 768px,\n  'desktop': 1024px\n) !default;\n\n\n///\n/// Creates a list of static expressions or media types\n///\n/// @example scss - Creates a single media type (screen)\n///  $media-expressions: ('screen': 'screen');\n///\n/// @example scss - Creates a static expression with logical disjunction (OR operator)\n///  $media-expressions: (\n///    'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'\n///  );\n///\n$media-expressions: (\n  'screen': 'screen',\n  'print': 'print',\n  'handheld': 'handheld',\n  'landscape': '(orientation: landscape)',\n  'portrait': '(orientation: portrait)',\n  'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)',\n  'retina3x': '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 350dpi), (min-resolution: 3dppx)'\n) !default;\n\n\n///\n/// Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals\n///\n/// @example scss - Interval for pixels is defined as `1` by default\n///  @include media('>128px') {}\n///\n///  /* Generates: */\n///  @media (min-width: 129px) {}\n///\n/// @example scss - Interval for ems is defined as `0.01` by default\n///  @include media('>20em') {}\n///\n///  /* Generates: */\n///  @media (min-width: 20.01em) {}\n///\n/// @example scss - Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`\n///  @include media('>2.0rem') {}\n///\n///  /* Generates: */\n///  @media (min-width: 2.1rem) {}\n///\n$unit-intervals: (\n  'px': 1,\n  'em': 0.01,\n  'rem': 0.1,\n  '': 0\n) !default;\n\n///\n/// Defines whether support for media queries is available, useful for creating separate stylesheets\n/// for browsers that don't support media queries.\n///\n/// @example scss - Disables support for media queries\n///  $im-media-support: false;\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n$im-media-support: true !default;\n\n///\n/// Selects which breakpoint to emulate when support for media queries is disabled. Media queries that start at or\n/// intercept the breakpoint will be displayed, any others will be ignored.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n/// @example scss - This media query will NOT show because it does not intercept the desktop breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'tablet';\n///  @include media('>=desktop') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-breakpoint: 'desktop' !default;\n\n///\n/// Selects which media expressions are allowed in an expression for it to be used when media queries\n/// are not supported.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint and contains only accepted media expressions\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'screen') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///   /* Generates: */\n///   .foo {\n///     color: tomato;\n///   }\n///\n/// @example scss - This media query will NOT show because it intercepts the static breakpoint but contains a media expression that is not accepted\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'retina2x') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-expressions: ('screen', 'portrait', 'landscape') !default;\n\n////\n/// Cross-engine logging engine\n/// @author Kitty Giraudel\n/// @access private\n////\n\n\n///\n/// Log a message either with `@error` if supported\n/// else with `@warn`, using `feature-exists('at-error')`\n/// to detect support.\n///\n/// @param {String} $message - Message to log\n///\n@function im-log($message) {\n  @if feature-exists('at-error') {\n    @error $message;\n  } @else {\n    @warn $message;\n    $_: noop();\n  }\n\n  @return $message;\n}\n\n\n///\n/// Wrapper mixin for the log function so it can be used with a more friendly\n/// API than `@if im-log('..') {}` or `$_: im-log('..')`. Basically, use the function\n/// within functions because it is not possible to include a mixin in a function\n/// and use the mixin everywhere else because it's much more elegant.\n///\n/// @param {String} $message - Message to log\n///\n@mixin log($message) {\n  @if im-log($message) {}\n}\n\n\n///\n/// Function with no `@return` called next to `@warn` in Sass 3.3\n/// to trigger a compiling error and stop the process.\n///\n@function noop() {}\n\n///\n/// Determines whether a list of conditions is intercepted by the static breakpoint.\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @return {Boolean} - Returns true if the conditions are intercepted by the static breakpoint\n///\n@function im-intercepts-static-breakpoint($conditions...) {\n  $no-media-breakpoint-value: map-get($breakpoints, $im-no-media-breakpoint);\n\n  @if not $no-media-breakpoint-value {\n    @if im-log('`#{$im-no-media-breakpoint}` is not a valid breakpoint.') {}\n  }\n\n  @each $condition in $conditions {\n    @if not map-has-key($media-expressions, $condition) {\n      $operator: get-expression-operator($condition);\n      $prefix: get-expression-prefix($operator);\n      $value: get-expression-value($condition, $operator);\n\n      @if ($prefix == 'max' and $value <= $no-media-breakpoint-value) or\n          ($prefix == 'min' and $value > $no-media-breakpoint-value) {\n        @return false;\n      }\n    } @else if not index($im-no-media-expressions, $condition) {\n      @return false;\n    }\n  }\n\n  @return true;\n}\n\n////\n/// Parsing engine\n/// @author Kitty Giraudel\n/// @access private\n////\n\n\n///\n/// Get operator of an expression\n///\n/// @param {String} $expression - Expression to extract operator from\n///\n/// @return {String} - Any of `>=`, `>`, `<=`, `<`, `≥`, `≤`\n///\n@function get-expression-operator($expression) {\n  @each $operator in ('>=', '>', '<=', '<', '≥', '≤') {\n    @if str-index($expression, $operator) {\n      @return $operator;\n    }\n  }\n\n  // It is not possible to include a mixin inside a function, so we have to\n  // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n  // functions cannot be called anywhere in Sass, we need to hack the call in\n  // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n  // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n  $_: im-log('No operator found in `#{$expression}`.');\n}\n\n\n///\n/// Get dimension of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract dimension from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {String} - `width` or `height` (or potentially anything else)\n///\n@function get-expression-dimension($expression, $operator) {\n  $operator-index: str-index($expression, $operator);\n  $parsed-dimension: str-slice($expression, 0, $operator-index - 1);\n  $dimension: 'width';\n\n  @if str-length($parsed-dimension) > 0 {\n    $dimension: $parsed-dimension;\n  }\n\n  @return $dimension;\n}\n\n\n///\n/// Get dimension prefix based on an operator\n///\n/// @param {String} $operator - Operator\n///\n/// @return {String} - `min` or `max`\n///\n@function get-expression-prefix($operator) {\n  @return if(index(('<', '<=', '≤'), $operator), 'max', 'min');\n}\n\n\n///\n/// Get value of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract value from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {Number} - A numeric value\n///\n@function get-expression-value($expression, $operator) {\n  $operator-index: str-index($expression, $operator);\n  $value: str-slice($expression, $operator-index + str-length($operator));\n\n  @if map-has-key($breakpoints, $value) {\n    $value: map-get($breakpoints, $value);\n  } @else {\n    $value: to-number($value);\n  }\n\n  $interval: map-get($unit-intervals, unit($value));\n\n  @if not $interval {\n    // It is not possible to include a mixin inside a function, so we have to\n    // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n    // functions cannot be called anywhere in Sass, we need to hack the call in\n    // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n    // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n    $_: im-log('Unknown unit `#{unit($value)}`.');\n  }\n\n  @if $operator == '>' {\n    $value: $value + $interval;\n  } @else if $operator == '<' {\n    $value: $value - $interval;\n  }\n\n  @return $value;\n}\n\n\n///\n/// Parse an expression to return a valid media-query expression\n///\n/// @param {String} $expression - Expression to parse\n///\n/// @return {String} - Valid media query\n///\n@function parse-expression($expression) {\n  // If it is part of $media-expressions, it has no operator\n  // then there is no need to go any further, just return the value\n  @if map-has-key($media-expressions, $expression) {\n    @return map-get($media-expressions, $expression);\n  }\n\n  $operator: get-expression-operator($expression);\n  $dimension: get-expression-dimension($expression, $operator);\n  $prefix: get-expression-prefix($operator);\n  $value: get-expression-value($expression, $operator);\n\n  @return '(#{$prefix}-#{$dimension}: #{$value})';\n}\n\n///\n/// Slice `$list` between `$start` and `$end` indexes\n///\n/// @access private\n///\n/// @param {List} $list - List to slice\n/// @param {Number} $start [1] - Start index\n/// @param {Number} $end [length($list)] - End index\n///\n/// @return {List} Sliced list\n///\n@function slice($list, $start: 1, $end: length($list)) {\n  @if length($list) < 1 or $start > $end {\n    @return ();\n  }\n\n  $result: ();\n\n  @for $i from $start through $end {\n    $result: append($result, nth($list, $i));\n  }\n\n  @return $result;\n}\n\n////\n/// String to number converter\n/// @author Kitty Giraudel\n/// @access private\n////\n\n\n///\n/// Casts a string into a number\n///\n/// @param {String | Number} $value - Value to be parsed\n///\n/// @return {Number}\n///\n@function to-number($value) {\n  @if type-of($value) == 'number' {\n    @return $value;\n  } @else if type-of($value) != 'string' {\n    $_: im-log('Value for `to-number` should be a number or a string.');\n  }\n\n  $first-character: str-slice($value, 1, 1);\n  $result: 0;\n  $digits: 0;\n  $minus: ($first-character == '-');\n  $numbers: ('0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9);\n\n  // Remove +/- sign if present at first character\n  @if ($first-character == '+' or $first-character == '-') {\n    $value: str-slice($value, 2);\n  }\n\n  @for $i from 1 through str-length($value) {\n    $character: str-slice($value, $i, $i);\n\n    @if not (index(map-keys($numbers), $character) or $character == '.') {\n      @return to-length(if($minus, -$result, $result), str-slice($value, $i))\n    }\n\n    @if $character == '.' {\n      $digits: 1;\n    } @else if $digits == 0 {\n      $result: $result * 10 + map-get($numbers, $character);\n    } @else {\n      $digits: $digits * 10;\n      $result: $result + map-get($numbers, $character) / $digits;\n    }\n  }\n\n  @return if($minus, -$result, $result);\n}\n\n\n///\n/// Add `$unit` to `$value`\n///\n/// @param {Number} $value - Value to add unit to\n/// @param {String} $unit - String representation of the unit\n///\n/// @return {Number} - `$value` expressed in `$unit`\n///\n@function to-length($value, $unit) {\n  $units: ('px': 1px, 'cm': 1cm, 'mm': 1mm, '%': 1%, 'ch': 1ch, 'pc': 1pc, 'in': 1in, 'em': 1em, 'rem': 1rem, 'pt': 1pt, 'ex': 1ex, 'vw': 1vw, 'vh': 1vh, 'vmin': 1vmin, 'vmax': 1vmax);\n\n  @if not index(map-keys($units), $unit) {\n    $_: im-log('Invalid unit `#{$unit}`.');\n  }\n\n  @return $value * map-get($units, $unit);\n}\n\n///\n/// This mixin aims at redefining the configuration just for the scope of\n/// the call. It is helpful when having a component needing an extended\n/// configuration such as custom breakpoints (referred to as tweakpoints)\n/// for instance.\n///\n/// @author Kitty Giraudel\n///\n/// @param {Map} $tweakpoints [()] - Map of tweakpoints to be merged with `$breakpoints`\n/// @param {Map} $tweak-media-expressions [()] - Map of tweaked media expressions to be merged with `$media-expression`\n///\n/// @example scss - Extend the global breakpoints with a tweakpoint\n///  @include media-context(('custom': 678px)) {\n///    .foo {\n///      @include media('>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend the global media expressions with a custom one\n///  @include media-context($tweak-media-expressions: ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend both configuration maps\n///  @include media-context(('custom': 678px), ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n@mixin media-context($tweakpoints: (), $tweak-media-expressions: ()) {\n  // Save global configuration\n  $global-breakpoints: $breakpoints;\n  $global-media-expressions: $media-expressions;\n\n  // Update global configuration\n  $breakpoints: map-merge($breakpoints, $tweakpoints) !global;\n  $media-expressions: map-merge($media-expressions, $tweak-media-expressions) !global;\n\n  @content;\n\n  // Restore global configuration\n  $breakpoints: $global-breakpoints !global;\n  $media-expressions: $global-media-expressions !global;\n}\n\n////\n/// include-media public exposed API\n/// @author Eduardo Boucas\n/// @access public\n////\n\n\n///\n/// Generates a media query based on a list of conditions\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @example scss - With a single set breakpoint\n///  @include media('>phone') { }\n///\n/// @example scss - With two set breakpoints\n///  @include media('>phone', '<=tablet') { }\n///\n/// @example scss - With custom values\n///  @include media('>=358px', '<850px') { }\n///\n/// @example scss - With set breakpoints with custom values\n///  @include media('>desktop', '<=1350px') { }\n///\n/// @example scss - With a static expression\n///  @include media('retina2x') { }\n///\n/// @example scss - Mixing everything\n///  @include media('>=350px', '<tablet', 'retina3x') { }\n///\n@mixin media($conditions...) {\n  @if ($im-media-support and length($conditions) == 0) or\n      (not $im-media-support and im-intercepts-static-breakpoint($conditions...)) {\n    @content;\n  } @else if ($im-media-support and length($conditions) > 0) {\n    @media #{unquote(parse-expression(nth($conditions, 1)))} {\n      // Recursive call\n      @include media(slice($conditions, 2)...) {\n        @content;\n      }\n    }\n  }\n}\n","$white: #f6f6f6;\r\n$gray: #d0d4d8;\r\n$light-gray: #c4c4c4;\r\n$black: #000;\r\n$dark: #020202;\r\n$yellow: #FFD45A;\r\n$brown: #B47841;\r\n$red: #FF3E3E;\r\n$primary-color: #f1f1f1;\r\n\r\n$primary:       #FF2243;\r\n$secondary:     #041F4C;\r\n// $success:       $green !default;\r\n// $info:          $cyan !default;\r\n// $warning:       $yellow !default;\r\n// $danger:        $red !default;\r\n// $light:         $gray-100 !default;\r\n// $dark:          $gray-800 !default;\r\n\r\n\r\n","body {\r\n    color: $secondary;\r\n    line-height: normal;\r\n    margin: 0;\r\n    font-family: $body-font;\r\n    position: relative;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6,\r\n.h1,.h2,.h3,.h4,.h5,.h6 {\r\n  font-family: $headings-font !important;\r\n  line-height: normal;\r\n}\r\n\r\n\r\na{\r\n  transition: .4s all ease-in-out;\r\n  &:hover{\r\n    color: $primary !important;\r\n  }\r\n}\r\n\r\n#site-preloader{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\r\n  z-index: 999999;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  &.page-loaded{\r\n    animation: fadeOut .8s forwards;\r\n  }\r\n}\r\n\r\n.dropdown-toggle{\r\n  &::after{\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    font-size: .6rem;\r\n    content: \"\\f107\";\r\n    transform: rotate(0);\r\n    transform-origin: .3rem 40%;\r\n    transition: .25s transform ease;\r\n    border: none;\r\n  }\r\n  &.show{\r\n    &::after{\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n}\r\n\r\n.dropdown-item{\r\n  color: $secondary !important;\r\n  font-weight: normal;\r\n  transition: .4s all ease-in-out;\r\n  &:hover{\r\n    color: $secondary !important;\r\n    font-weight: bold;\r\n  }\r\n}\r\n\r\n.form-input{\r\n  border: none;\r\n  border-bottom: 2px solid #C4C4C4;\r\n  color: $secondary;\r\n  padding: .6rem;\r\n  &:focus-visible{\r\n    outline: transparent;\r\n  }\r\n}\r\n\r\n.form-textarea{\r\n  border: 2px solid #C4C4C4;\r\n  color: $secondary;\r\n  padding: .6rem;\r\n  resize: none;\r\n  &:focus-visible{\r\n    outline: transparent;\r\n  }\r\n}\r\n\r\nform.theme-form{\r\n  display: flex;\r\n  align-items: center;\r\n  input[type=text], input[type=email]{\r\n      border-top-left-radius: 60px;\r\n      border-bottom-left-radius: 60px;\r\n      height: 40px;\r\n      padding: .5rem .9rem;\r\n      border: 2px solid #D8D9D8;\r\n      flex-grow: 100;\r\n      &:focus-visible{\r\n          outline: none;\r\n      }\r\n      &::placeholder{\r\n          color: #1a24304b;\r\n      }\r\n  }\r\n  button[type=submit]{\r\n      border-radius: 60px;\r\n      color: $white;\r\n      background: $primary;\r\n      border: none;\r\n      padding: .5rem .9rem;\r\n      margin-left: -17px;\r\n  }\r\n}\r\n\r\n@include media(\"<laptop-l\"){\r\n  #site-preloader .site-logo{\r\n    width: 50vw;\r\n    max-width: 300px;\r\n    height: auto;\r\n  }\r\n  .section-shape{\r\n    object-fit: cover;\r\n  }\r\n}\r\n\r\n@include media(\"<=mobile-l\"){\r\n  form.theme-form{\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    gap: 1rem;\r\n    input[type=text], input[type=email]{\r\n      border-radius: 60px;\r\n    }\r\n  }\r\n}\r\n\r\n  /*This is a fade out. */\r\n  @keyframes fadeOut {\r\n    0% {opacity:1;}\r\n    1% {opacity:1;}\r\n    100% {opacity:0;}\r\n  }\r\n","$headings-font: 'Montserrat';\r\n$body-font: 'Poppins';","#footer-newsletter-form{\r\n    border-bottom: 2px solid $white;\r\n    display: flex;\r\n    input{\r\n        border: none;\r\n        background-color: transparent;\r\n        color: $gray;\r\n        padding: .6rem 0;\r\n        &::placeholder{\r\n            color: $gray;\r\n        }\r\n        &:focus-visible{\r\n            outline: none;\r\n        }\r\n        width: -webkit-fill-available;\r\n    }\r\n    .btn-newsletter-submit{\r\n        background-color: transparent;\r\n        border: none;\r\n        border-radius: 0;\r\n        color: $white;\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\n.footer-list{\r\n    border-radius: 0;\r\n    .list-group-item{\r\n        background: transparent;\r\n        color: $white;\r\n        display: flex;\r\n        align-items: center;\r\n        .footer-icon{\r\n            font-size: 1.5rem;\r\n        }\r\n        a{\r\n            color: $primary;\r\n        }\r\n        &:not(:last-child){\r\n            border-bottom: 1px solid rgba($white, .6);\r\n        }\r\n        &:first-child{\r\n            border-top: 1px solid rgba($white, .6);\r\n        }\r\n    }\r\n}\r\n\r\n#footer-posts-list{\r\n    li{\r\n        transition: .4s all ease-in-out;\r\n        &:hover{\r\n            background: rgb(126 140 164 / 63%);\r\n        }\r\n        a{\r\n            &:hover{\r\n                color: $white !important;\r\n            }\r\n            color: $white;\r\n            text-decoration: none;\r\n            p{\r\n                margin: 0;\r\n            }\r\n        }\r\n    } \r\n}",".header-menu{\r\n    font-weight: 400;\r\n    .navbar-nav{\r\n        .nav-item .nav-link{\r\n            color: $white;\r\n            transition: .4s all ease-in-out;\r\n            &:hover,&:active{\r\n                color: $primary;\r\n            }\r\n            &.active{\r\n                font-weight: bold;\r\n                text-decoration: underline;\r\n                text-decoration-thickness: 3px;\r\n                text-underline-offset: 10px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n#mainHeader.fixed-top{\r\n    animation: smoothScroll 1s forwards;\r\n}\r\n\r\n@keyframes smoothScroll {\r\n\t0% {\r\n\t\ttransform: translateY(-40px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0px);\r\n\t}\r\n}\r\n\r\n#mainNavbar{\r\n    top: 0%;\r\n    left: 0%;\r\n    z-index: 1;\r\n}\r\n\r\n.header-navbar-toggler{\r\n    height: fit-content;\r\n    padding: .7rem 0.7rem;\r\n    align-self: center;\r\n    background: white;\r\n    border: 2px solid white;\r\n}\r\n\r\n.common-nav{\r\n    background: $white;\r\n    div.container-lg .menu-container #headerNavbar .header-menu a{\r\n        color: $secondary;\r\n    }\r\n}\r\n\r\n@include media(\"<laptop\"){\r\n    #headerNavbar.show{\r\n        background: $secondary;\r\n    }\r\n    .menu-container{\r\n        background: $secondary;\r\n    }\r\n    #headerNavbar{\r\n        padding: 1.5rem;\r\n        .header-menu{\r\n            .navbar-nav{\r\n                gap: .7rem;\r\n            }\r\n        }\r\n    }\r\n    .common-nav{\r\n        div.container-lg .menu-container #headerNavbar .header-menu a{\r\n            color: $white;\r\n        }\r\n    }\r\n}\r\n\r\n@include media(\"<=mobile-l\"){\r\n    .navbar-brand img{\r\n        width: 88%;\r\n        height: auto;\r\n    }\r\n}",".common-banner{\r\n    min-height: 400px;\r\n    background: linear-gradient(91.5deg, #3D70B1 11.77%, #FF2243 136.6%);\r\n    padding-top: 93px;\r\n    .banner-img{\r\n        object-fit: cover;\r\n        top: 0%;\r\n        left: 0%;\r\n        opacity: .3;\r\n    }\r\n    .wave-shape{\r\n        top: 0%;\r\n        right: 0%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./assets/src/sass/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/src/js/main.js"));
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map