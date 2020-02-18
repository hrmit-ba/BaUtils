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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/catalinmarguta/Documents/pers/BAUtilityApp/app/javascript/packs/troop_react.jsx: Unexpected token, expected \",\" (38:8)\n\n  36 |           }\n  37 |         }\n> 38 |         oracles: {\n     |         ^\n  39 |           total_time: \"00:00:00\",\n  40 |           total_rss: {\n  41 |             wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0\n    at Object.raise (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:7017:17)\n    at Object.unexpected (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8395:16)\n    at Object.expect (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8381:28)\n    at Object.parseObj (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9982:14)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9616:28)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4120:20)\n    at Object.parseExprSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9259:23)\n    at Object.parseMaybeUnary (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9239:21)\n    at Object.parseExprOps (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9109:23)\n    at Object.parseMaybeConditional (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9082:23)\n    at Object.parseMaybeAssign (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9037:21)\n    at Object.parseObjectProperty (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10121:101)\n    at Object.parseObjPropValue (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10146:101)\n    at Object.parseObjectMember (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10070:10)\n    at Object.parseObj (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9991:25)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9616:28)\n    at Object.parseExprAtom (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:4120:20)\n    at Object.parseExprSubscripts (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9259:23)\n    at Object.parseMaybeUnary (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9239:21)\n    at Object.parseExprOps (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9109:23)\n    at Object.parseMaybeConditional (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9082:23)\n    at Object.parseMaybeAssign (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9037:21)\n    at Object.parseMaybeAssign (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:9069:25)\n    at Object.parseExpression (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8989:23)\n    at Object.parseStatementContent (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10819:23)\n    at Object.parseStatement (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10690:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11264:25)\n    at Object.parseBlockBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11251:10)\n    at Object.parseBlock (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11235:10)\n    at Object.parseFunctionBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10252:24)");

/***/ })

/******/ });
//# sourceMappingURL=troop_react-10c567cde36b90ee7172.js.map