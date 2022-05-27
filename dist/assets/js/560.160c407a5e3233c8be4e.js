(self["webpackChunkwebpack_5_docguides"] = self["webpackChunkwebpack_5_docguides"] || []).push([[560],{

/***/ 8441:
/***/ (function() {

var modButtons = document.querySelectorAll("[data-modal]");
var body = document.body;
var mobalClose = document.querySelectorAll(".modal__close");
var modalMask = document.querySelectorAll(".modal");
var header = document.querySelector(".header");
modButtons.forEach(function (item) {
  item.addEventListener("click", function (event) {
    var eTarget = event.currentTarget;
    var modalId = eTarget.getAttribute("data-modal");
    var modal = document.getElementById(modalId);
    var modal__content = modal.querySelector(".modal__content");
    modal__content.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    modal.classList.add("show");
    body.classList.add("modal-show");
    body.style.paddingRight = getScrollWidth() + "px";
    header.style.paddingRight = getScrollWidth() + "px";
  });
});
mobalClose.forEach(function (item) {
  item.addEventListener("click", function (event) {
    var eTarget = event.currentTarget;
    var modal = eTarget.closest(".modal");
    modal.classList.remove("show");
    body.classList.remove("modal-show");
    body.style.paddingRight = "0px";
    header.style.paddingRight = "0px";
  });
});
modalMask.forEach(function (item) {
  item.addEventListener("click", function (event) {
    var eTarget = event.currentTarget;
    var modalId = eTarget.getAttribute("data-modal");
    eTarget.classList.remove("show");
    body.classList.remove("modal-show");
    body.style.paddingRight = "0px";
    header.style.paddingRight = "0px";
    var video = document.querySelector("video");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});

function getScrollWidth() {
  var div = document.createElement("div");
  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";
  document.body.append(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

/***/ }),

/***/ 1991:
/***/ (function() {

var sidebarNavMobile = document.querySelector(".nav-header--mobile-nav");
var sidebarNavItems = sidebarNavMobile.querySelectorAll(".nav-header__item");
var prevTarget;
sidebarNavItems.forEach(function (item) {
  item.setAttribute("data-nohover", true);
  item.addEventListener("click", function (event) {
    var $this = event.currentTarget;

    if (prevTarget && prevTarget != $this) {
      prevTarget.classList.remove("nav--active");
    }

    $this.classList.toggle("nav--active");
    event.stopPropagation();
    document.body.addEventListener("click", function () {
      $this.classList.remove("nav--active");
    }, {
      once: true
    });
    prevTarget = $this;
  });
});

/***/ }),

/***/ 9490:
/***/ (function() {

var burger = document.querySelector(".burger");
var sidebar = document.querySelector(".sidebar");
var body = document.body;
var main = document.querySelector(".main");
burger.addEventListener("click", function () {
  if (body.classList.contains("show-sidebar")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  body.classList.add("show-sidebar");
  setTimeout(function () {
    var mask = document.createElement("div");
    mask.classList.add("mask-sidebar");
    mask.addEventListener("click", closeSidebar);
    main.appendChild(mask);
  }, 100);
}

function closeSidebar() {
  body.classList.remove("show-sidebar");
  document.querySelector(".mask-sidebar").remove();
}

/***/ }),

/***/ 1405:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cheader class=\"header\"\u003E\u003Cnav class=\"nav-header\"\u003E\u003Cul class=\"nav-header__list\"\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Findex.html\"\u003EГлавная\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fsearch-full.html\"\u003EСтатьи\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fworks.html\"\u003EОбо мне\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fpost-full.html\"\u003EРеклама\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cbutton class=\"burger\" type=\"button\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fnav\u003E\u003Cdiv class=\"header__right\"\u003E\u003Ca class=\"nav-header__item nav-header__link header__profile\" href=\".\u002Fprofile.html\"\u003EПрофиль\u003C\u002Fa\u003E\u003Ca class=\"nav-header__item nav-header__link header__profile\" href=\".\u002Fsignin.html\"\u003EВход\u003C\u002Fa\u003E\u003Cform class=\"header__search\" action=\".\u002Fsearch-full.html\" method=\"get\"\u003E \u003Cinput class=\"header__input\" type=\"text\" placeholder=\"Поиск по блогу\" tabindex=\"1\"\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 8627:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + (null == (pug_interp = (__webpack_require__(6603).call)(this, locals)) ? "" : pug_interp);;return pug_html;};
module.exports = template;

/***/ }),

/***/ 4896:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + (null == (pug_interp = (__webpack_require__(5924).call)(this, locals)) ? "" : pug_interp);;return pug_html;};
module.exports = template;

/***/ }),

/***/ 5:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + (null == (pug_interp = (__webpack_require__(1635).call)(this, locals)) ? "" : pug_interp);;return pug_html;};
module.exports = template;

/***/ }),

/***/ 6603:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"modal\" id=\"contact\"\u003E\u003Cdiv class=\"modal__content modal__contact\"\u003E\u003Cform class=\"profile-form__form form\" action=\"\u002F\" method=\"post\"\u003E \u003Cdiv class=\"form__group\"\u003E\u003Cinput class=\"form__control\" type=\"text\" placeholder=\"Ваше имя\"\u003E\u003Cspan class=\"form__line\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form__group\"\u003E\u003Cinput class=\"form__control\" type=\"email\" placeholder=\"Ваше email\"\u003E\u003Cspan class=\"form__line\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form__group\"\u003E\u003Ctextarea class=\"form__control\" placeholder=\"Текст сообщения\" data-autoresize\u003E\u003C\u002Ftextarea\u003E\u003Cspan class=\"form__line\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form__group\"\u003E\u003Cbutton class=\"form__button btn btn--blue\" type=\"submit\"\u003EОтправить\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"form__footer-list\"\u003E\u003Cli\u003E\u003Ca class=\"form__link\" href=\"mailto:info@mywebsite.ru\"\u003Ee-mail: info@mywebsite.ru\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"form__link\" href=\"tel:94323285622\"\u003Eтел: +943-232-856-22\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fform\u003E\u003Cbutton class=\"modal__close\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(7427), true, true)+" alt=\"close\"") + "\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 5924:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"modal\" id=\"social\"\u003E\u003Cdiv class=\"modal__content modal__social\"\u003E\u003Cul class=\"social\"\u003E \u003Cli class=\"social__item\"\u003E\u003Ca class=\"social__link\" href=\"#\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(1806), true, true)+" alt=\"facebook\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"social__item\"\u003E\u003Ca class=\"social__link\" href=\"#\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(5792), true, true)+" alt=\"twitter\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"social__item\"\u003E\u003Ca class=\"social__link\" href=\"#\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(9931), true, true)+" alt=\"vk\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"social__item\"\u003E\u003Ca class=\"social__link\" href=\"#\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(4606), true, true)+" alt=\"copy\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cbutton class=\"modal__close\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(7427), true, true)+" alt=\"close\"") + "\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 1635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"modal\" id=\"stories\"\u003E\u003Cdiv class=\"modal__content modal__stories ibg\"\u003E\u003Cvideo" + (pug.attr("src", __webpack_require__(2895), true, true)+pug.attr("controls", true, true, true)) + "\u003E \u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 1819:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Caside class=\"sidebar\"\u003E\u003Cdiv class=\"sidebar__header\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(5058), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sidebar__content\"\u003E \u003Cdiv class=\"sidebar__profile profile\"\u003E\u003Cdiv class=\"profile__image\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(4962), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"profile__name\"\u003EИван Иванов\u003C\u002Fp\u003E\u003Cp class=\"profile__text\"\u003Eблог front-end разработчика\u003C\u002Fp\u003E\u003Cul class=\"profile__social social\"\u003E \u003Cli class=\"social__item\"\u003E\u003Ca class=\"social__link\" href=\"#\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(2488), true, true)+" alt=\"insta\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"social__item\"\u003E\u003Ca class=\"social__link\" href=\"#\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(5218), true, true)+" alt=\"vk\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"social__item\"\u003E\u003Ca class=\"social__link\" href=\"#\"\u003E \u003Cimg" + (pug.attr("src", __webpack_require__(2852), true, true)+" alt=\"pinterest\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"sidebar__text\"\u003EFront-end разработчик. Практик верстки сайтов.Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.\u003C\u002Fp\u003E\u003Cnav class=\"nav-header nav-header--mobile-nav\"\u003E\u003Cul class=\"nav-header__list\"\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Findex.html\"\u003EГлавная\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fsearch-full.html\"\u003EСтатьи\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fworks.html\"\u003EОбо мне\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fpost-full.html\"\u003EРеклама\u003C\u002Fa\u003E\u003Cul class=\"nav-header-subnav\"\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EСоздание сайтов\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EИнтернет-маркетинг\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header-subnav__item\"\u003E\u003Ca class=\"nav-header-subnav__link\" href=\".\u002Fpost-full.html\"\u003EПродвижение видео\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fprofile.html\"\u003EПрофиль\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-header__item\"\u003E\u003Ca class=\"nav-header__link\" href=\".\u002Fsignin.html\"\u003EВход\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cdiv class=\"sidebar__buttons\"\u003E \u003Ca class=\"sidebar__btn btn btn--red\" href=\".\u002Fworks.html\"\u003EМои работы\u003C\u002Fa\u003E\u003Ca class=\"sidebar__btn btn btn--blue\" href=\"#\" data-modal=\"contact\"\u003EНаписать мне\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Faside\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 7055:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(7835).readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ 7427:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/Vector-sm.dd2f77ac03b881364923.svg";

/***/ }),

/***/ 4606:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/copy 1.19dc27341e48d58e7855.svg";

/***/ }),

/***/ 1806:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/facebook (3) 1.09837d1274c52232e584.svg";

/***/ }),

/***/ 5792:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/twitter (1) 1.254d4eeff7a2efcff87c.svg";

/***/ }),

/***/ 9931:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/vk 2.2c3039ed97534b9e2974.svg";

/***/ }),

/***/ 5058:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/Rectangle.bff53bb693b77fec7ec3.jpg";

/***/ }),

/***/ 4962:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/avatara.41eccb213fbc1d0fcd6f.jpg";

/***/ }),

/***/ 2488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/instagram (1) 1_soc.svg";

/***/ }),

/***/ 2852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/pinterest 1_soc.svg";

/***/ }),

/***/ 5218:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/vk 1_soc.svg";

/***/ }),

/***/ 2895:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/video/Shorts.36c3890602361ce8e282.mp4";

/***/ }),

/***/ 7835:
/***/ (function() {

/* (ignored) */

/***/ })

}]);