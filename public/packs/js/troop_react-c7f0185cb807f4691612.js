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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/catalinmarguta/Documents/pers/BAUtilityApp/app/javascript/packs/troop_react.jsx: Unexpected token, expected \"{\" (11:2)\n\n   9 | class Troops extends Component\n  10 | \n> 11 |   constructor(props) {\n     |   ^\n  12 |     super(props)\n  13 | \n  14 |     this.warriors = [{\n    at Object.raise (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:7017:17)\n    at Object.unexpected (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8395:16)\n    at Object.expect (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:8381:28)\n    at Object.parseClassBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11458:10)\n    at Object.parseClass (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11433:22)\n    at Object.parseStatementContent (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10732:21)\n    at Object.parseStatement (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10690:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11264:25)\n    at Object.parseBlockBody (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:11251:10)\n    at Object.parseTopLevel (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:10621:10)\n    at Object.parse (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:12222:10)\n    at parse (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/parser/lib/index.js:12273:38)\n    at parser (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:254:32)\n    at /Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:216:11)\n    at /Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:184:28\n    at /Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/@babel/core/lib/gensync-utils/async.js:72:7\n    at /Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:108:33\n    at step (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:280:14)\n    at /Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/Users/catalinmarguta/Documents/pers/BAUtilityApp/node_modules/gensync/index.js:216:11)");

/***/ })

/******/ });
//# sourceMappingURL=troop_react-c7f0185cb807f4691612.js.map