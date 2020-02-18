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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/troop_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/troop_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/troop_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/catalinmarguta/Documents/pers/BAUtilityApp/app/javascript/packs/troop_react.jsx: Unterminated JSX contents (115:1)\n\n  113 |     document.body.appendChild(document.createElement('div')),\n  114 |   )\n> 115 | })\n      |  ^\n  116 | \n    at Object.raise (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:7017:17)\n    at Object.jsxReadToken (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:3747:20)\n    at Object.getTokenFromCode (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4129:19)\n    at Object.nextToken (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:7241:12)\n    at Object.next (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:7170:10)\n    at Object.eat (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:7175:12)\n    at Object.expect (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8381:10)\n    at Object.jsxParseExpressionContainer (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:3974:10)\n    at Object.jsxParseElementAt (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4065:36)\n    at Object.jsxParseElement (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4108:17)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4115:19)\n    at Object.parseExprSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9259:23)\n    at Object.parseMaybeUnary (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9239:21)\n    at Object.parseExprOps (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9109:23)\n    at Object.parseMaybeConditional (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9082:23)\n    at Object.parseMaybeAssign (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9037:21)\n    at Object.parseParenAndDistinguishExpression (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9814:28)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9594:21)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4120:20)\n    at Object.parseExprSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9259:23)\n    at Object.parseMaybeUnary (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9239:21)\n    at Object.parseExprOps (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9109:23)\n    at Object.parseMaybeConditional (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9082:23)\n    at Object.parseMaybeAssign (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9037:21)\n    at Object.parseFunctionBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10234:24)\n    at Object.parseArrowExpression (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10209:10)\n    at Object.parseParenAndDistinguishExpression (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9838:12)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9594:21)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4120:20)\n    at Object.parseExprSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9259:23)");

/***/ })

/******/ });
//# sourceMappingURL=troop_react-8832f3d72254cde1dbb9.js.map