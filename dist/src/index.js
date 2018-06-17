(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nexusdk", [], factory);
	else if(typeof exports === 'object')
		exports["nexusdk"] = factory();
	else
		root["nexusdk"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: set, keys, values, has, hasRoot, get, yank, getObjectPath, getStringPathForArray, assurePathExists, getTypeString, deepEq, shallowDiff, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keys\", function() { return keys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"values\", function() { return values; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return has; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasRoot\", function() { return hasRoot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yank\", function() { return yank; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getObjectPath\", function() { return getObjectPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStringPathForArray\", function() { return getStringPathForArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assurePathExists\", function() { return assurePathExists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTypeString\", function() { return getTypeString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepEq\", function() { return deepEq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shallowDiff\", function() { return shallowDiff; });\n/**\n * Objer module, interact with objects\n * @module objer\n */\n\n/**\n * Set value at an object subpath\n * @param {Object} object\n * @param {string|array} path\n * @param {*} value\n */\nfunction set(object, path, value) {\n  let subObject = object;\n  const keys = getObjectPath(path);\n  for (let keydex = 0; keydex < keys.length; keydex += 1) {\n    let key = keys[keydex];\n    if (key !== '') {\n      if (keydex !== keys.length - 1) {\n        if (subObject[key] === null || typeof subObject[key] !== 'object') {\n          subObject[key] = {};\n        }\n        subObject = subObject[key];\n      } else {\n        subObject[key] = value;\n      }\n    }\n  }\n\n  return object;\n}\n\n/**\n * Get array of keys in an object\n * @param {Object} object\n */\nfunction keys(object) {\n  const stringType = getTypeString(object);\n  if (stringType === 'object' || stringType === 'array') {\n    if (typeof Object.keys !== 'undefined') return Object.keys(object);\n    const keys = [];\n\n    for(let key in object) {\n      if (object.hasOwnProperty(key)) {\n        keys.push(key);\n      }\n    }\n\n    return keys;\n  }\n  return [];\n}\n\n/**\n * Get array of values in an object, passing an array will return the original array, anything else will return a blank array\n * @param {Object} object\n */\nfunction values(object) {\n  const stringType = getTypeString(object);\n  if (stringType === 'object') {\n    const objectKeys = keys(object);\n    const result = [];\n    for (let keydex = 0; keydex < objectKeys.length; keydex += 1) {\n      result.push(object[objectKeys[keydex]]);\n    }\n    return result;\n  } else if (stringType === 'array') {\n    return object;\n  }\n  return [];\n}\n\n/**\n * Check if an object has a value at a path\n * @param {Object} object\n * @param {string|array} path\n */\nfunction has(object, path) {\n  let subObject = object;\n  const keys = getObjectPath(path);\n  if (keys.length === 0) return false;\n  for (let keydex = 0; keydex < keys.length; keydex += 1) {\n    let key = keys[keydex];\n    if (!hasRoot(subObject, key)) return false;\n    subObject = subObject[key];\n  }\n\n  return true;\n}\n\n/**\n * Check if an object has a top level key, hasRoot({ a: 1 }, 'a'); is true, hasRoot({ a: { b: 1 } }, 'a.b'); is false\n * @param {Object} object\n * @param {string} key\n */\nfunction hasRoot(object, key) {\n  if (object !== null && typeof object === 'object') {\n    return (key in object);\n  }\n  return false;\n}\n\n/**\n * Retrieve value from within an object or array\n * @param {Object} object\n * @param {string|array} path\n * @param {*} [defaultValue]\n */\nfunction get(object, path, defaultValue = undefined) {\n  let subObject = object;\n  const keys = getObjectPath(path);\n  for (let keydex = 0; keydex < keys.length; keydex += 1) {\n    let key = keys[keydex];\n    if (key !== '') {\n      if (!hasRoot(subObject, key)) return defaultValue;\n\n      subObject = subObject[key];\n    }\n  }\n\n  return subObject;\n}\n\n/**\n * Retrieve subobject at path, if the key is null or undefined, the default value or undefined will be returned\n * @param {Object} object\n * @param {string|array} path\n * @param {*} [defaultValue]\n */\nfunction yank(object, path, defaultValue = undefined) {\n  const stringType = getTypeString(path);\n  if (stringType !== 'string' && stringType !== 'array' && stringType !== 'number') return defaultValue;\n  let subObject = object;\n  const keys = getObjectPath(path);\n  for (let keydex = 0; keydex < keys.length; keydex += 1) {\n    let key = keys[keydex];\n    if (key !== '') {\n      if (!hasRoot(subObject, key)) return defaultValue;\n\n      subObject = subObject[key];\n    }\n  }\n\n  return subObject;\n}\n\n/**\n * Resolve a path to a path array 'a.b.c' returns ['a', 'b', 'c']\n * @param {string|array} path\n */\nfunction getObjectPath(path) {\n  const inputType = getTypeString(path);\n  if (inputType === 'array') return path;\n  if (inputType !== 'string') {\n    if (inputType === 'number') return [path];\n    return [];\n  }\n  let inBrackets = false;\n  let partBegin = 0;\n  let split = false;\n  let exitBrackets = false;\n  const pathlen = path.length;\n  const parts = [];\n\n  for(let dex = 0; dex < pathlen + 1; dex += 1) {\n    const char = path[dex];\n    if (inBrackets && !exitBrackets) {\n      if (char === ']') {\n        exitBrackets = true;\n      }\n    } else if (char === '.') {\n      split = true;\n    } else if (char === '[') {\n      split = true;\n      inBrackets = true;\n    }\n\n    if (split || dex === pathlen) {\n      let nextPart = path.substr(partBegin, dex - partBegin - (exitBrackets ? 1 : 0))\n      if (inBrackets) {\n        const parsed = parseInt(nextPart, 10);\n        if (!isNaN(parsed)) {\n          nextPart = parsed;\n        }\n      }\n      parts.push(nextPart);\n      partBegin = dex + 1;\n      split = false;\n      if (exitBrackets) inBrackets = false;\n      exitBrackets = false;\n    }\n  }\n  return parts;\n}\n\n/**\n * Convert an array into a string path ['a', 'b', 'c'] returns 'a.b.c'\n * @param {array} arrayPath\n */\nfunction getStringPathForArray(arrayPath) {\n  const inputType = getTypeString(arrayPath);\n  if (inputType !== 'array') {\n    if (inputType === 'string') return arrayPath;\n    if (inputType === 'number') return `[${arrayPath}]`;\n    return '';\n  }\n\n  return arrayPath.reduce((result, item, dex) => {\n    if (getTypeString(item) === 'number') {\n      return `${result}[${item}]`;\n    }\n    return result + (dex > 0 ? '.': '') + item;\n  }, '');\n}\n\n/**\n * If this subkey doesn't exist, initialize it to defaultValue\n * @param {Object} object\n * @param {string|array} path\n * @param {*} defaultValue\n */\nfunction assurePathExists(object, path, defaultValue = {}) {\n  const arrayPath = getObjectPath(path);\n  let currentObject = object;\n  for (let arraydex = 0; arraydex < arrayPath.length; arraydex += 1) {\n    const key = arrayPath[arraydex];\n    if (!hasRoot(currentObject, key)) { // TODO: Address problems where key exists already and is not an array or object\n      const nextKey = ((arraydex === arrayPath.length - 1) ? null : arrayPath[arraydex + 1]);\n      if (nextKey === null) {\n        currentObject[key] = defaultValue;\n      } else if (getTypeString(nextKey) === 'number') {\n        currentObject[key] = [];\n      } else {\n        currentObject[key] = {};\n      }\n    }\n    currentObject = currentObject[key];\n  }\n  return currentObject;\n}\n\n/**\n * Return simplified type as a string. [] returns 'array' new Date() returns 'date'\n * @param {*} data\n */\nfunction getTypeString(data) {\n  const stringType = typeof data;\n  if (stringType === 'object') {\n    if (data === null) return 'null';\n    const stringified = toString.apply(data);\n    if (stringified.length > 2 && stringified[0] === '[' && stringified[stringified.length - 1] === ']') {\n      const splits = stringified.substr(1, stringified.length - 2).split(' ');\n      if (splits.length > 1) {\n        return splits.slice(1).join(' ').toLowerCase();\n      }\n    }\n    return 'unknown';\n  }\n\n  if (stringType === 'number') {\n    if (isNaN(data)) return 'nan';\n  }\n\n  return stringType;\n}\n\n/**\n * Check if both parameters are equal, check all nested keys of objects and arrays\n * @param {*} obja\n * @param {*} objb\n */\nfunction deepEq(left, right) {\n  const leftType = getTypeString(left);\n  const rightType = getTypeString(right);\n\n  if (leftType !== rightType) return false;\n\n  if (leftType === 'nan') return true;\n\n  if (leftType === 'object') {\n    if (left === right) return true; // if they are the same thing, don't check children\n    const leftKeys = keys(left).sort(); // unsorted could be unequal\n    const rightKeys = keys(right).sort();\n    if (!deepEq(leftKeys, rightKeys)) return false;\n    for (let keydex = 0; keydex < leftKeys.length; keydex += 1) {\n      if (!deepEq(left[leftKeys[keydex]], right[leftKeys[keydex]])) return false;\n    }\n    return true;\n  }\n  if (leftType === 'array') {\n    if (left === right) return true; // if they are the same thing, don't check children\n    if (left.length !== right.length) return false;\n    for (let dex = 0; dex < left.length; dex += 1) {\n      if (!deepEq(left[dex], right[dex])) return false;\n    }\n    return true;\n  }\n\n  return left === right;\n}\n\n/**\n * Detect differences between two things, will indicate changes in type, value, length, etc. Will not diff string values.\n * @param {*} original\n * @param {*} incoming\n */\nfunction shallowDiff(original, incoming, currentPath = []) {\n  let changes = [];\n  const originalType = getTypeString(original);\n  const incomingType = getTypeString(incoming);\n\n  if (originalType !== incomingType) return [{ change: 'type', path: currentPath, original: original, incoming: incoming }];\n\n  if (originalType === 'nan') return [];\n\n  if (originalType === 'object') {\n    if (original === incoming) return []; // if they are the same thing, don't check children\n    let originalKeys = keys(original).sort(); // unsorted could be unequal\n    let incomingKeys = keys(incoming).sort();\n    let sharedKeys = [];\n    if (!deepEq(originalKeys, incomingKeys)) {\n      for (let originalDex = originalKeys.length - 1; originalDex >= 0; originalDex -= 1) {\n        const originalKey = originalKeys[originalDex];\n        for (let incomingDex = incomingKeys.length - 1; incomingDex >= 0; incomingDex -= 1) {\n          if (originalKey === incomingKeys[incomingDex]) {\n            sharedKeys.push(originalKey);\n            originalKeys.splice(originalDex, 1);\n            incomingKeys.splice(incomingDex, 1);\n            break;\n          }\n        }\n      }\n      for (let originalDex = 0; originalDex < originalKeys.length; originalDex += 1) {\n        changes.push({ change: 'delete', path: currentPath, key: originalKeys[originalDex], original: original[originalKeys[originalDex]] });\n      }\n      for (let incomingDex = 0; incomingDex < incomingKeys.length; incomingDex += 1) {\n        changes.push({ change: 'add', path: currentPath, key: incomingKeys[incomingDex], incoming: incoming[incomingKeys[incomingDex]] });\n      }\n    } else {\n      sharedKeys = originalKeys;\n    }\n    for (let keydex = 0; keydex < sharedKeys.length; keydex += 1) {\n      changes = changes.concat(shallowDiff(original[sharedKeys[keydex]], incoming[sharedKeys[keydex]], currentPath.concat(sharedKeys[keydex])));\n    }\n  } else if (originalType === 'array') {\n    if (original === incoming) return []; // if they are the same thing, don't check children\n    let sharedLength = original.length;\n    if (original.length !== incoming.length) {\n      if (original.length > incoming.length) {\n        sharedLength = incoming.length;\n        changes.push({ change: 'shrink', path: currentPath, original: original.slice(incoming.length) });\n      } else {\n        changes.push({ change: 'grow', path: currentPath, incoming: incoming.slice(original.length) });\n      }\n    }\n    for (let dex = 0; dex < sharedLength; dex += 1) {\n      changes = changes.concat(shallowDiff(original[dex], incoming[dex], currentPath.concat(dex)));\n    }\n  } else if (original === incoming) {\n    return [];\n  } else {\n    return [{ change: 'value', path: currentPath, original, incoming }]\n  }\n\n  return changes;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  assurePathExists,\n  deepEq,\n  get,\n  getObjectPath,\n  getStringPathForArray,\n  getTypeString,\n  has,\n  hasRoot,\n  keys,\n  set,\n  yank,\n});\n\n\n//# sourceURL=webpack://nexusdk/./src/index.js?");

/***/ })

/******/ });
});