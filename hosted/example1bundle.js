/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/example1.jsx":
/*!*****************************!*\
  !*** ./client/example1.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const React = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst {\n  createRoot\n} = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-dom/client'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst HelloWorld = () => {\n  return /*#__PURE__*/React.createElement(\"div\", null, \"Hello World!\");\n};\nconst init = () => {\n  const root = createRoot(document.getElementById('app'));\n  root.render(/*#__PURE__*/React.createElement(HelloWorld, null));\n};\nwindow.onload = init;\n\n//# sourceURL=webpack://react-class-components/./client/example1.jsx?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/example1.jsx");
/******/ 	
/******/ })()
;