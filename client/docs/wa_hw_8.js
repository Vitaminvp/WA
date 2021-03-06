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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 390);
/******/ })
/************************************************************************/
/******/ ({

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(392);

__webpack_require__(393);

var _lighter = __webpack_require__(394);

(0, _lighter.lighter)();

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lighter = lighter;

__webpack_require__(395);

function lighter() {

    var lighter = document.querySelector(".lighter");
    var lights = lighter.querySelectorAll(".lighter__light");
    var ACTIVE = "lighter__light_active";
    var lightsArray = Array.from(lights);
    var btn = lighter.querySelector(".btn");
    var myswitch = lighter.querySelector(".switch");
    var myinput = myswitch.querySelector("#switch-1");
    // console.log(myinput);
    var index = 0;
    var previndex = 0;
    //let isDisabled = lighter.classList.contains("disabled");
    var isDisabled = !myinput.checked;
    var timer = void 0;

    lightsArray.forEach(function (item, i, lightsArray) {
        item.addEventListener("click", function () {
            if (!isDisabled) {
                turnOn(i);
            }
        });
    });

    lighter.addEventListener("mouseenter", function () {
        stopInterval();
    });
    lighter.addEventListener("mouseleave", function () {
        startInterval();
    });
    myinput.addEventListener("click", function () {
        console.log(isDisabled);
        if (isDisabled) {
            lighter.classList.remove("disabled");
            isDisabled = false;
            startInterval();
        } else {
            isDisabled = true;
            lighter.classList.add("disabled");
            index = 0;
            stopInterval();
            turnOff();
        }
    });
    function turnOn(i) {
        if (!isDisabled) {
            if (index !== undefined) {
                if (lightsArray[i].classList.contains(ACTIVE)) {
                    lightsArray[i].classList.remove(ACTIVE);
                } else {
                    turnOff();
                    lightsArray[i].classList.add(ACTIVE);
                }
            } else {
                lightsArray[i].classList.add(ACTIVE);
            }
            index = i;
            previndex = i;
        }
    }
    function turnOff() {
        if (previndex !== undefined) lightsArray[previndex].classList.remove(ACTIVE);
        previndex = 0;
    }

    function startInterval() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (!isDisabled) {
                if (index < lights.length) {
                    turnOff();
                    turnOn(index);
                    index++;
                } else {
                    index = 0;
                    turnOff();
                    turnOn(index);
                    index++;
                }
            }
        }, 1000);
    }

    function stopInterval() {
        clearInterval(timer);
    }
}

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });