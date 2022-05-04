/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/contentText.js":
/*!***************************************!*\
  !*** ./src/js/modules/contentText.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contentText() {
  class Content {
    constructor(element, text) {
      this.element = element;
      this.text = text;
    }

    createContent() {
      const item = document.querySelector(this.element);
      item.innerText = this.text;
    }
  }

  const textHello = new Content('.title', 'DarkSidr Virtual Keyboard');
  textHello.createContent();

  const textWindow = new Content('.window-text', 'DarkSidr Virtual Keyboard');
  textWindow.createContent();

  const textLang = new Content('.lang-text', 'DarkSidr Virtual Keyboard DarkSidr Virtual Keyboard');
  textLang.createContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentText);


/***/ }),

/***/ "./src/js/modules/createBlock.js":
/*!***************************************!*\
  !*** ./src/js/modules/createBlock.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createBlock() {
  class Create {
    constructor(element, classElement, appendElement) {
      this.element = element;
      this.classElement = classElement;
      this.appendElement = appendElement;
    }

    createItem() {
      const item = document.createElement(this.element);
      item.classList.add(this.classElement);
      document.querySelector(this.appendElement).append(item);
    }
  }

  const mainElement = new Create('section', 'application', 'body');
  mainElement.createItem();

  const mainContainer = new Create('div', 'container', '.application');
  mainContainer.createItem();

  const mainTitle = new Create('h1', 'title', '.container');
  mainTitle.createItem();

  const mainWrapper = new Create('div', 'application__wrapper', '.container');
  mainWrapper.createItem();

  const mainTextArea = new Create('textarea', 'textarea', '.application__wrapper');
  mainTextArea.createItem();

  const mainKeyboard = new Create('div', 'keyboard', '.application__wrapper');
  mainKeyboard.createItem();

  const textWindow = new Create('p', 'window-text', '.application__wrapper');
  textWindow.createItem();

  const textLang = new Create('p', 'lang-text', '.application__wrapper');
  textLang.createItem();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBlock);


/***/ }),

/***/ "./src/js/modules/createKey.js":
/*!*************************************!*\
  !*** ./src/js/modules/createKey.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const oneLine = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8];
const twoLine = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];
const threeLine = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
const fourLine = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16];
const fiveLine = [17, 91, 18, 32, 18, 93, 37, 40, 39, 17];

function createKey() {
  // document.onkeydown = function (event) {
  // console.log(event);
  // fiveLine.push(event.keyCode);
  // console.log(fiveLine);
  // };
  const keyboard = document.querySelector('.keyboard');

  function contentKey(arr) {
    const line = document.createElement('div');
    line.classList.add('line');
    keyboard.append(line);
    arr.forEach((element) => {
      const oneKey = document.createElement('div');
      oneKey.classList.add('key');
      switch (element) {
        case 192:
          oneKey.innerText += '`';
          break;
        case 189:
          oneKey.innerText += '-';
          break;
        case 187:
          oneKey.innerText += '=';
          break;
        case 8:
          oneKey.classList.add('backspace');
          oneKey.innerText += 'Backspace';
          break;
        case 9:
          oneKey.classList.add('tab');
          oneKey.innerText += 'Tab';
          break;
        case 219:
          oneKey.innerText += '[';
          break;
        case 221:
          oneKey.innerText += ']';
          break;
        case 220:
          oneKey.classList.add('slash');
          oneKey.innerText += '\\';
          break;
        case 20:
          oneKey.classList.add('capslock');
          oneKey.innerText += 'Capslock';
          break;
        case 186:
          oneKey.innerText += ';';
          break;
        case 222:
          oneKey.innerText += "'";
          break;
        case 13:
          oneKey.classList.add('enter');
          oneKey.innerText += 'Enter';
          break;
        case 16:
          oneKey.classList.add('shift');
          oneKey.innerText += 'shift';
          break;
        case 188:
          oneKey.innerText += ',';
          break;
        case 190:
          oneKey.innerText += '.';
          break;
        case 191:
          oneKey.innerText += '/';
          break;
        case 17:
          oneKey.classList.add('ctrl');
          oneKey.innerText += 'ctrl';
          break;
        case 91:
          oneKey.classList.add('win');
          oneKey.innerText += 'win';
          break;
        case 18:
          oneKey.classList.add('alt');
          oneKey.innerText += 'alt';
          break;
        case 32:
          oneKey.classList.add('space');
          oneKey.innerText += 'space';
          break;
        case 93:
          oneKey.classList.add('cont');
          oneKey.innerText += 'cont';
          break;
        case 37:
          oneKey.innerText += '◄';
          break;
        case 40:
          oneKey.innerText += '▼';
          break;
        case 39:
          oneKey.innerText += '►';
          break;
        case 38:
          oneKey.innerText += '▲';
          break;
        default:
          oneKey.innerText += String.fromCharCode(element).toLowerCase();
      }
      line.append(oneKey);
    });
  }
  contentKey(oneLine);
  contentKey(twoLine);
  contentKey(threeLine);
  contentKey(fourLine);
  contentKey(fiveLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKey);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createBlock */ "./src/js/modules/createBlock.js");
/* harmony import */ var _modules_contentText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contentText */ "./src/js/modules/contentText.js");
/* harmony import */ var _modules_createKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createKey */ "./src/js/modules/createKey.js");




window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_createBlock__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_contentText__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_createKey__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map