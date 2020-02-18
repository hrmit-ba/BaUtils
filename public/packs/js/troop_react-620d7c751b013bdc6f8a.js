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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/catalinmarguta/Documents/pers/BAUtilityApp/app/javascript/packs/troop_react.jsx: Unexpected token, expected \";\" (173:26)\n\n  171 |                         </React.Fragment>\n  172 |                       )\n> 173 |                       <tr className=\"table-dark\" key={key}>\n      |                           ^\n  174 |                         <td scope=\"col\">Totals</td>\n  175 |                         <td scope=\"col\">\n  176 |                          -\n    at Object.raise (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:7017:17)\n    at Object.unexpected (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8395:16)\n    at Object.semicolon (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8377:40)\n    at Object.parseReturnStatement (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11058:12)\n    at Object.parseStatementContent (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10738:21)\n    at Object.parseStatement (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10690:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11264:25)\n    at Object.parseBlockBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11251:10)\n    at Object.parseBlock (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11235:10)\n    at Object.parseFunctionBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10252:24)\n    at Object.parseArrowExpression (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10209:10)\n    at Object.parseParenAndDistinguishExpression (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9838:12)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9594:21)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4120:20)\n    at Object.parseExprSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9259:23)\n    at Object.parseMaybeUnary (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9239:21)\n    at Object.parseExprOps (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9109:23)\n    at Object.parseMaybeConditional (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9082:23)\n    at Object.parseMaybeAssign (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9037:21)\n    at Object.parseExprListItem (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10327:18)\n    at Object.parseCallExpressionArguments (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9440:22)\n    at Object.parseSubscript (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9346:31)\n    at Object.parseSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9276:19)\n    at Object.parseExprSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9265:17)\n    at Object.parseMaybeUnary (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9239:21)\n    at Object.parseExprOps (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9109:23)\n    at Object.parseMaybeConditional (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9082:23)\n    at Object.parseMaybeAssign (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9037:21)\n    at Object.parseExpression (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8989:23)\n    at Object.jsxParseExpressionContainer (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:3971:30)");

/***/ })

/******/ });
//# sourceMappingURL=troop_react-620d7c751b013bdc6f8a.js.map