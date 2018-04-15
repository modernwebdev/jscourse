/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/bundle/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/bundle/script.js":
/*!*****************************!*\
  !*** ./js/bundle/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function() {\r\n\r\n\tlet tab = __webpack_require__(/*! ../parts/tab.js */ \"./js/parts/tab.js\");\r\n\tlet ajax = __webpack_require__(/*! ../parts/ajax.js */ \"./js/parts/ajax.js\");\r\n\tlet slider = __webpack_require__(/*! ../parts/slider.js */ \"./js/parts/slider.js\");\r\n\tlet calc = __webpack_require__(/*! ../parts/calc.js */ \"./js/parts/calc.js\");\r\n\tlet timer = __webpack_require__(/*! ../parts/timer.js */ \"./js/parts/timer.js\");\r\n\r\n\ttab();\r\n\tajax();\r\n\tslider();\r\n\tcalc();\r\n\ttimer();\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./js/bundle/script.js?");

/***/ }),

/***/ "./js/parts/ajax.js":
/*!**************************!*\
  !*** ./js/parts/ajax.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ajax() {\r\n\tlet descrBtn = document.querySelectorAll('.description-btn'),\r\n\t\t\toverlay = document.querySelector('.overlay'),\r\n\t\t\tclose = document.querySelector('.popup-close');\r\n\r\n\t\t\tconsole.log(descrBtn);\r\n\r\n\t\t\tfor (let i = 0; i < descrBtn.length; i++) {\r\n\t\t\t\tdescrBtn[i].addEventListener('click', function() {\r\n\r\n\t\t\t\t\toverlay.style.display = 'block';\r\n\t\t\t\t\tdocument.body.style.overflow = 'hidden';\r\n\t\t\t\t});\r\n\r\n\t\t\t\tclose.addEventListener('click', function() {\r\n\t\t\t\t\toverlay.style.display = 'none';\r\n\t\t\t\t\tdocument.body.style.overflow = '';\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\tlet message = new Object();\r\n\t\t\tmessage.loading = \"Загрузка...\";\r\n\t\t\tmessage.success = \"Спасибо, мы с Вами скоро свяжемся!\";\r\n\t\t\tmessage.fail = \"Что-то пошло не так\";\r\n\r\n\t\t\tlet form = document.getElementsByClassName('main-form')[0],\r\n\t\t\t    contactForm = document.getElementById('form');\r\n\t\t\t    input = form.getElementsByTagName('input'),\r\n\t\t\t    inputContactForm = contactForm.getElementsByTagName('input'),\r\n\t\t\t    statusMessage = document.createElement('div');\r\n\r\n\t\t\t    form.addEventListener('submit', function(event) {\r\n\t\t\t        event.preventDefault();\r\n\t\t\t        form.appendChild(statusMessage);\r\n\r\n\t\t\t        let request = new XMLHttpRequest();\r\n\t\t\t        request.open(\"POST\", \"server.php\");\r\n\r\n\t\t\t        request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\r\n\r\n\t\t\t        let formData = new FormData(form);\r\n\t\t\t        request.send(formData);\r\n\r\n\t\t\t        request.onreadystatechange = function() {\r\n\t\t\t            if (request.readyState < 4) {\r\n\t\t\t                statusMessage.innerHTML = message.loading;\r\n\t\t\t            } else if (request.readyState === 4) {\r\n\t\t\t                if (request.status == 200 && request.status < 300) {\r\n\t\t\t                    statusMessage.innerHTML = message.success;\r\n\t\t\t                }\r\n\t\t\t                else {\r\n\t\t\t                    statusMessage.innerHTML = message.fail;\r\n\t\t\t                }\r\n\t\t\t            }\r\n\t\t\t        }\r\n\t\t\t        for (let i = 0; i < input.length; i++) {\r\n\t\t\t            input[i].value = '';\r\n\t\t\t            //Чистим инпуты\r\n\t\t\t        }    \r\n\t\t\t    });\r\n\r\n\t\t\t    contactForm.addEventListener('submit', function(event) {\r\n\t\t\t        event.preventDefault();\r\n\t\t\t        contactForm.appendChild(statusMessage);\r\n\r\n\t\t\t        let request = new XMLHttpRequest();\r\n\t\t\t        request.open(\"POST\", \"server.php\");\r\n\r\n\t\t\t        request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\r\n\r\n\t\t\t        let formData = new FormData(contactForm);\r\n\t\t\t        request.send(formData);\r\n\r\n\t\t\t        request.onreadystatechange = function() {\r\n\t\t\t            if (request.readyState < 4) {\r\n\t\t\t                statusMessage.innerHTML = '<img src=\"icons/loading.gif\" style=\"width: 55px; height: 30px; float: right;\">';\r\n\t\t\t            } else if (request.readyState === 4) {\r\n\t\t\t                if (request.status == 200 && request.status < 300) {\r\n\t\t\t                    statusMessage.innerHTML = '<img src=\"icons/success.svg\" style=\"width: 30px; height: 30px; float: right;\">';\r\n\t\t\t                }\r\n\t\t\t                else {\r\n\t\t\t                    statusMessage.innerHTML = '<img src=\"icons/error.svg\" style=\"width: 30px; height: 30px; float: right;\">';\r\n\t\t\t                }\r\n\t\t\t            }\r\n\t\t\t        } \r\n\t\t\t        for (let i = 0; i < inputContactForm.length; i++) {\r\n\t\t\t            inputContactForm[i].value = '';\r\n\t\t\t            //Чистим инпуты\r\n\t\t\t        }   \r\n\t\t\t    });\r\n}\r\n\r\nmodule.exports = ajax;\n\n//# sourceURL=webpack:///./js/parts/ajax.js?");

/***/ }),

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\r\n\r\n\tlet persons = document.getElementsByClassName('counter-block-input')[0],\r\n\t\t\trestDays = document.getElementsByClassName('counter-block-input')[1],\r\n\t\t\tplace = document.getElementById('select'),\r\n\t\t\ttotalValue = document.getElementById('total'),\r\n\t\t\tpersonsSum = 0,\r\n\t\t\tdaysSum = 0,\r\n\t\t\ttotal = 0;\r\n\r\n\t\t\ttotalValue.innerHTML = 0;\r\n\r\n\t\t\tpersons.addEventListener('change', function() {\r\n\t\t\t\tpersonsSum = +this.value;\r\n\t\t\t\ttotal = (daysSum + personsSum) * 4000;\r\n\t\t\t\tif (restDays.value == '' || persons.value == '') {\r\n\t\t\t\t\ttotalValue.innerHTML = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\ttotalValue.innerHTML = total;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\trestDays.addEventListener('change', function() {\r\n\t\t\t\tdaysSum = +this.value;\r\n\t\t\t\ttotal = (daysSum + personsSum) * 4000;\r\n\t\t\t\tif (persons.value == '') {\r\n\t\t\t\t\ttotalValue.innerHTML = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\ttotalValue.innerHTML = total;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tplace.addEventListener('change', function() {\r\n\t\t\t\tif (restDays.value == '' || persons.value == '') {\r\n\t\t\t\t\ttotalValue.innerHTML = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tlet a = total;\r\n\t\t\t\t\ttotalValue.innerHTML = a * this.options[this.selectedIndex].value;\r\n\t\t\t\t}\r\n\t\t\t});\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./js/parts/calc.js?");

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\r\n\r\n\tlet slideIndex = 1,\r\n\t\t\tslides = document.getElementsByClassName('slider-item'),\r\n\t\t\tprev = document.querySelector('.prev'),\r\n\t\t\tnext = document.querySelector('.next'),\r\n\t\t\tdotsWrap = document.querySelector('.slider-dots'),\r\n\t\t\tdots = document.getElementsByClassName('dot');\r\n\r\n\r\n\t\t\tshowSlides(slideIndex);\r\n\r\n\t\t\tfunction showSlides(n) {\r\n\r\n\t\t\t\tif (n > slides.length) {\r\n\t\t\t\t\tslideIndex = 1;\r\n\t\t\t\t}\r\n\t\t\t\tif (n < 1) {\r\n\t\t\t\t\tslideIndex = slides.length;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfor (let i = 0; i < slides.length; i++) {\r\n\t\t\t\t\tslides[i].style.display = 'none';\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfor (let i = 0; i < dots.length; i++) {\r\n\t\t\t\t\tdots[i].classList.remove('dot-active');\r\n\t\t\t\t}\r\n\r\n\t\t\t\tslides[slideIndex-1].style.display = 'block';\r\n\t\t\t\tdots[slideIndex - 1].classList.add('dot-active')\r\n\t\t\t}\r\n\r\n\t\t\tfunction plusSlides (n) {\r\n\t\t\t\tshowSlides(slideIndex += n);\r\n\t\t\t}\r\n\r\n\t\t\tfunction currentSlide (n) {\r\n\t\t\t\tshowSlides(slideIndex = n);\r\n\t\t\t}\r\n\r\n\t\t\tprev.addEventListener('click', function() {\r\n\t\t\t\tplusSlides(-1);\r\n\t\t\t});\r\n\t\t\tnext.addEventListener('click', function() {\r\n\t\t\t\tplusSlides(1);\r\n\t\t\t});\r\n\r\n\t\t\tdotsWrap.addEventListener('click', function(event) {\r\n\t\t\t\tfor (let i = 0; i < dots.length + 1; i++) {\r\n\t\t\t\t\tif (event.target.classList.contains('dot') && event.target == dots[i-1]) {\r\n\t\t\t\t\t\tcurrentSlide(i);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t});\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./js/parts/slider.js?");

/***/ }),

/***/ "./js/parts/tab.js":
/*!*************************!*\
  !*** ./js/parts/tab.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tab() {\r\n\t\tlet tab = document.getElementsByClassName('info-header-tab'),\r\n\t\t\ttabContent = document.getElementsByClassName('info-tabcontent'),\r\n\t\t\tinfo = document.getElementsByClassName('info-header')[0];\r\n\r\n\t\t\tfunction hideTabContent(a) {\r\n\t\t\t\tfor (let i = a; i < tabContent.length; i++) {\r\n\t\t\t\t\ttabContent[i].classList.remove('show');\r\n\t\t\t\t\ttabContent[i].classList.add('hide');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\thideTabContent(1);\r\n\r\n\t\t\tfunction showTabContent(b) {\r\n\t\t\t\tif (tabContent[b].classList.contains('hide')) {\r\n\t\t\t\t\thideTabContent(0);\r\n\t\t\t\t\ttabContent[b].classList.remove('hide');\r\n\t\t\t\t\ttabContent[b].classList.add('show');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tinfo.addEventListener('click', function(event) {\r\n\t\t\t\tlet target = event.target;\r\n\t\t\t\tif (target.className == 'info-header-tab') {\r\n\t\t\t\t\tfor (let i = 0; i < tab.length; i++) {\r\n\t\t\t\t\t\tif (target == tab[i]) {\r\n\t\t\t\t\t\t\tshowTabContent(i);\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n}\r\n\r\n\r\nmodule.exports = tab;\n\n//# sourceURL=webpack:///./js/parts/tab.js?");

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\r\n\tlet deadline = '2018-04-20';\r\n\r\n\tfunction getTimeRemaining(endtime) {\r\n\t\tlet t = Date.parse(endtime) - Date.parse(new Date()),\r\n\t\tseconds = Math.floor((t / 1000) % 60),\r\n\t\tminutes = Math.floor((t / 1000 / 60) % 60),\r\n\t\thours = Math.floor((t / (1000 * 60 * 60)));\r\n\r\n\t\treturn {\r\n\t\t\t'total': t,\r\n\t\t\t'hours': hours,\r\n\t\t\t'minutes': minutes,\r\n\t\t\t'seconds': seconds\r\n\t\t};\r\n\t}\r\n\t \t\r\n\t \tfunction setClock(id, endtime) {\r\n\r\n\t \t\tlet timer = document.getElementById(id),\r\n\t \t\t\t\thours = timer.querySelector('.hours'),\r\n\t \t\t\t\tminutes = timer.querySelector('.minutes'),\r\n\t \t\t\t\tseconds = timer.querySelector('.seconds');\r\n\r\n\t \t\t\t\tfunction updateClock() {\r\n\t \t\t\t\t\tlet t = getTimeRemaining(endtime);\r\n\t \t\t\t\t\thours.innerHTML = t.hours;\r\n\t \t\t\t\t\tminutes.innerHTML = t.minutes;\r\n\t \t\t\t\t\tseconds.innerHTML = t.seconds;\r\n\r\n\t \t\t\t\t\tif (t.total < 0) {\r\n\t \t\t\t\t\t\tclearInterval(timeInterval);\r\n\t \t\t\t\t\t}\r\n\t \t\t\t\t}\r\n\r\n\t \t\t\t\tupdateClock();\r\n\t \t\t\t\tlet timeInterval = setInterval(updateClock, 1000);\r\n\t \t}\r\n\r\n\t \tsetClock('timer', deadline);\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./js/parts/timer.js?");

/***/ })

/******/ });