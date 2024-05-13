/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function Edit({
  attributes,
  setAttributes
}) {
  const {
    quote
  } = attributes;
  const onChangeQuote = newQuote => {
    setAttributes({
      quote: newQuote
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your favorite movie quote'),
    value: quote,
    onChange: onChangeQuote
  }));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/favorite-movie-quote","version":"0.1.0","title":"Favorite Movie Quote","category":"widgets","description":"Block where you can add your Favorite Movie Quote.","example":{},"supports":{"html":false},"attributes":{"quote":{"type":"string"}},"textdomain":"favorite-movie-quote","editorScript":"file:./index.js","render":"file:./render.php"}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");




const qIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "70",
  height: "70",
  viewBox: "0 0 70 70",
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39.5349 6.17222L39.2526 6.0142C36.5024 4.53938 33.1741 4.59205 30.4653 6.17222L12.0798 16.8971L11.8305 17.0485C9.4517 18.5513 8 21.1728 8 24C8 26.9247 9.55354 29.6293 12.0798 31.103L42.9257 49.0958C43.4173 49.3826 43.6631 49.526 43.9335 49.526C44.2038 49.5259 44.4496 49.3825 44.9412 49.0957L48.4059 47.0745C49.0648 46.6901 49.3942 46.4979 49.3942 46.2107C49.3942 45.9235 49.0647 45.7313 48.4058 45.3469L15.103 25.9203L14.9608 25.8299C14.3622 25.4171 14.0001 24.7342 14.0001 24C14.0001 23.2093 14.4201 22.4781 15.103 22.0797L33.4885 11.3549L33.6781 11.2532C34.5756 10.8124 35.6399 10.8463 36.5117 11.3549L54.5117 21.8549L54.6803 21.9609C55.502 22.5162 56.0001 23.4459 56.0001 24.4462V45.5538L55.9935 45.7528C55.9279 46.7424 55.3758 47.6411 54.5117 48.1451L36.5117 58.6451L36.3221 58.7468C35.4246 59.1876 34.3603 59.1537 33.4885 58.6451L15.4885 48.1451L15.3199 48.0391C14.4982 47.4838 14.0001 46.5541 14.0001 45.5538L14 38.002C14 37.4412 14 37.1608 13.8671 36.9295C13.7343 36.6982 13.4921 36.557 13.0078 36.2744L9.50387 34.2305C8.83592 33.8408 8.50194 33.646 8.25097 33.7902C8 33.9343 8 34.321 8 35.0943V45.5538L8.00506 45.8531C8.1074 48.9385 9.7867 51.7653 12.4653 53.3278L30.4653 63.8278L30.7476 63.9858C33.4978 65.4606 36.8261 65.408 39.5349 63.8278L57.5349 53.3278L57.791 53.1727C60.4045 51.5297 62.0001 48.6548 62.0001 45.5538V24.4462L61.9951 24.1469C61.8928 21.0615 60.2135 18.2347 57.5349 16.6722L39.5349 6.17222ZM63.7795 54.4724C63.5091 54.4724 63.2633 54.6158 62.7717 54.9026L59.3071 56.9239C58.6482 57.3083 58.3187 57.5005 58.3187 57.7877C58.3187 58.0748 58.6482 58.267 59.3071 58.6514L68.4961 64.0119C69.1641 64.4016 69.4981 64.5964 69.749 64.4523C70 64.3081 70 63.9215 70 63.1482V59.092C70 58.5312 70 58.2509 69.8671 58.0195C69.7343 57.7882 69.4921 57.647 69.0077 57.3644L64.7873 54.9025C64.2957 54.6158 64.0499 54.4724 63.7795 54.4724Z",
  fill: "url(#paint0_linear_29_2579)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
  id: "paint0_linear_29_2579",
  x1: "8.00012",
  y1: "5",
  x2: "70.0001",
  y2: "65",
  gradientUnits: "userSpaceOnUse"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#00FF15"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#00FFFF"
}))));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: qIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map