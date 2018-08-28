(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nexusdk", [], factory);
	else if(typeof exports === 'object')
		exports["nexusdk"] = factory();
	else
		root["nexusdk"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.set = set;\nexports.keys = keys;\nexports.firstKey = firstKey;\nexports.pick = pick;\nexports.assassinate = assassinate;\nexports.clone = clone;\nexports.omit = omit;\nexports.values = values;\nexports.firstValue = firstValue;\nexports.has = has;\nexports.hasRoot = hasRoot;\nexports.get = get;\nexports.yank = yank;\nexports.getObjectPath = getObjectPath;\nexports.getStringPathForArray = getStringPathForArray;\nexports.assurePathExists = assurePathExists;\nexports.getTypeString = getTypeString;\nexports.deepEq = deepEq;\nexports.shallowDiff = shallowDiff;\nexports.default = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Objer module, interact with objects\n * @module objer\n */\n\n/**\n * Set value at an object subpath\n * @param {Object} object\n * @param {string|array} path\n * @param {*} value\n */\nfunction set(object, path, value) {\n  var subObject = object;\n  var keys = getObjectPath(path);\n  if (keys.length === 0) return value; // We cannot modify the original value to be the new value no matter how hard we try\n\n  for (var keydex = 0; keydex < keys.length; keydex += 1) {\n    var key = keys[keydex];\n\n    if (key !== '') {\n      if (keydex !== keys.length - 1) {\n        if (subObject[key] === null || _typeof(subObject[key]) !== 'object') {\n          subObject[key] = {};\n        }\n\n        subObject = subObject[key];\n      } else {\n        subObject[key] = value;\n      }\n    }\n  }\n\n  return object;\n}\n/**\n * Get array of keys in an object\n * @param {Object} object\n */\n\n\nfunction keys(object) {\n  var stringType = getTypeString(object);\n\n  if (stringType === 'object' || stringType === 'array') {\n    if (typeof Object.keys !== 'undefined') return Object.keys(object);\n    var _keys = [];\n\n    for (var key in object) {\n      if (object.hasOwnProperty(key)) {\n        _keys.push(key);\n      }\n    }\n\n    return _keys;\n  }\n\n  return [];\n}\n/**\n * Get the first key in an object or array\n * @param {Object} object\n */\n\n\nfunction firstKey(object) {\n  var stringType = getTypeString(object);\n\n  if (stringType === 'object') {\n    for (var key in object) {\n      if (object.hasOwnProperty(key)) {\n        return key;\n      }\n    }\n  } else if (stringType === 'array') {\n    if (object.length > 0) return 0;\n  }\n\n  return null;\n}\n/**\n * Create an object with selected keys and values from an input object\n * @param {*} object\n * @param {array} whitelistedKeys\n */\n\n\nfunction pick(object, whitelistedKeys) {\n  var result = {};\n  if (!whitelistedKeys) return result;\n  var key = void 0;\n\n  for (var keydex = 0; keydex < whitelistedKeys.length; keydex += 1) {\n    key = whitelistedKeys[keydex];\n\n    if (has(object, key)) {\n      set(result, key, get(object, key));\n    }\n  }\n\n  return result;\n}\n\nfunction assassinate(source, path) {\n  var pathArray = getObjectPath(path);\n\n  if (pathArray.length > 0) {\n    var parentPath = pathArray.slice(0, pathArray.length - 1);\n\n    if (has(source, parentPath) || parentPath.length === 0) {\n      var original = get(source, parentPath);\n      var originalType = getTypeString(original);\n      var pathKey = pathArray[pathArray.length - 1];\n\n      if (originalType === 'object') {\n        delete original[pathKey];\n      } else if (originalType === 'array' && typeof pathKey === 'number') {\n        original.splice(pathKey, 1);\n      }\n    }\n  }\n\n  return source;\n}\n\nfunction clone(source) {\n  var stringType = getTypeString(source);\n\n  if (stringType === 'object') {\n    var sourceKeys = keys(source);\n    var result = {};\n\n    for (var keydex = 0; keydex < sourceKeys.length; keydex += 1) {\n      result[sourceKeys[keydex]] = clone(source[sourceKeys[keydex]]);\n    }\n\n    return result;\n  } else if (stringType === 'array') {\n    var length = source.length;\n    var _result = [];\n\n    for (var dex = 0; dex < length; dex += 1) {\n      _result.push(clone(source[dex]));\n    }\n\n    return _result;\n  }\n\n  return source;\n}\n/**\n * Create an object without selected keys and values from an input object, DEEP CLONES OBJECT\n * @param {*} object\n * @param {array} whitelistedKeys\n */\n\n\nfunction omit(object, blacklistedKeys) {\n  if (!blacklistedKeys) return object;\n  var result = clone(object);\n\n  for (var keydex = 0; keydex < blacklistedKeys.length; keydex += 1) {\n    assassinate(result, blacklistedKeys[keydex]);\n  }\n\n  return result;\n}\n/**\n * Get array of values in an object, passing an array will return the original array, anything else will return a blank array\n * @param {Object} object\n */\n\n\nfunction values(object) {\n  var stringType = getTypeString(object);\n\n  if (stringType === 'object') {\n    var objectKeys = keys(object);\n    var result = [];\n\n    for (var keydex = 0; keydex < objectKeys.length; keydex += 1) {\n      result.push(object[objectKeys[keydex]]);\n    }\n\n    return result;\n  } else if (stringType === 'array') {\n    return object;\n  }\n\n  return [];\n}\n/**\n * Get the first value in an object or array\n * @param {Object} object\n */\n\n\nfunction firstValue(object) {\n  var stringType = getTypeString(object);\n\n  if (stringType === 'object' || stringType === 'array') {\n    return object[firstKey(object)];\n  }\n\n  return undefined;\n}\n/**\n * Check if an object has a value at a path\n * @param {Object} object\n * @param {string|array} path\n */\n\n\nfunction has(object, path) {\n  var subObject = object;\n  var keys = getObjectPath(path);\n  if (keys.length === 0) return false;\n\n  for (var keydex = 0; keydex < keys.length; keydex += 1) {\n    var key = keys[keydex];\n    if (!hasRoot(subObject, key)) return false;\n    subObject = subObject[key];\n  }\n\n  return true;\n}\n/**\n * Check if an object has a top level key, hasRoot({ a: 1 }, 'a'); is true, hasRoot({ a: { b: 1 } }, 'a.b'); is false\n * @param {Object} object\n * @param {string} key\n */\n\n\nfunction hasRoot(object, key) {\n  if (object !== null && _typeof(object) === 'object') {\n    return key in object;\n  }\n\n  return false;\n}\n/**\n * Retrieve value from within an object or array\n * @param {Object} object\n * @param {string|array} path\n * @param {*} [defaultValue]\n */\n\n\nfunction get(object, path) {\n  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  var subObject = object;\n  var keys = getObjectPath(path);\n\n  for (var keydex = 0; keydex < keys.length; keydex += 1) {\n    var key = keys[keydex];\n\n    if (key !== '') {\n      if (!hasRoot(subObject, key)) return defaultValue;\n      subObject = subObject[key];\n    }\n  }\n\n  return subObject;\n}\n/**\n * Retrieve subobject at path, if the key is null or undefined, the default value or undefined will be returned\n * @param {Object} object\n * @param {string|array} path\n * @param {*} [defaultValue]\n */\n\n\nfunction yank(object, path) {\n  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  var stringType = getTypeString(path);\n  if (stringType !== 'string' && stringType !== 'array' && stringType !== 'number') return defaultValue;\n  var subObject = object;\n  var keys = getObjectPath(path);\n\n  for (var keydex = 0; keydex < keys.length; keydex += 1) {\n    var key = keys[keydex];\n\n    if (key !== '') {\n      if (!hasRoot(subObject, key)) return defaultValue;\n      subObject = subObject[key];\n    }\n  }\n\n  return subObject;\n}\n/**\n * Resolve a path to a path array 'a.b.c' returns ['a', 'b', 'c']\n * @param {string|array} path\n */\n\n\nfunction getObjectPath(path) {\n  var inputType = getTypeString(path);\n  if (inputType === 'array') return path;\n\n  if (inputType !== 'string') {\n    if (inputType === 'number') return [path];\n    return [];\n  }\n\n  var inBrackets = false;\n  var partBegin = 0;\n  var split = false;\n  var exitBrackets = false;\n  var pathlen = path.length;\n  var parts = [];\n\n  for (var dex = 0; dex < pathlen + 1; dex += 1) {\n    var char = path[dex];\n\n    if (inBrackets && !exitBrackets) {\n      if (char === ']') {\n        exitBrackets = true;\n      }\n    } else if (char === '.') {\n      split = true;\n    } else if (char === '[') {\n      split = true;\n      inBrackets = true;\n    }\n\n    if (split || dex === pathlen) {\n      var nextPart = path.substr(partBegin, dex - partBegin - (exitBrackets ? 1 : 0));\n\n      if (inBrackets) {\n        var parsed = parseInt(nextPart, 10);\n\n        if (!isNaN(parsed)) {\n          nextPart = parsed;\n        }\n      }\n\n      parts.push(nextPart);\n      partBegin = dex + 1;\n      split = false;\n      if (exitBrackets) inBrackets = false;\n      exitBrackets = false;\n    }\n  }\n\n  return parts;\n}\n/**\n * Convert an array into a string path ['a', 'b', 'c'] returns 'a.b.c'\n * @param {array} arrayPath\n */\n\n\nfunction getStringPathForArray(arrayPath) {\n  var inputType = getTypeString(arrayPath);\n\n  if (inputType !== 'array') {\n    if (inputType === 'string') return arrayPath;\n    if (inputType === 'number') return \"[\".concat(arrayPath, \"]\");\n    return '';\n  }\n\n  return arrayPath.reduce(function (result, item, dex) {\n    if (getTypeString(item) === 'number') {\n      return \"\".concat(result, \"[\").concat(item, \"]\");\n    }\n\n    return result + (dex > 0 ? '.' : '') + item;\n  }, '');\n}\n/**\n * If this subkey doesn't exist, initialize it to defaultValue\n * @param {Object} object\n * @param {string|array} path\n * @param {*} defaultValue\n */\n\n\nfunction assurePathExists(object, path) {\n  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var arrayPath = getObjectPath(path);\n  var currentObject = object;\n\n  for (var arraydex = 0; arraydex < arrayPath.length; arraydex += 1) {\n    var key = arrayPath[arraydex];\n\n    if (!hasRoot(currentObject, key)) {\n      // TODO: Address problems where key exists already and is not an array or object\n      var nextKey = arraydex === arrayPath.length - 1 ? null : arrayPath[arraydex + 1];\n\n      if (nextKey === null) {\n        currentObject[key] = defaultValue;\n      } else if (getTypeString(nextKey) === 'number') {\n        currentObject[key] = [];\n      } else {\n        currentObject[key] = {};\n      }\n    }\n\n    currentObject = currentObject[key];\n  }\n\n  return currentObject;\n}\n/**\n * Return simplified type as a string. [] returns 'array' new Date() returns 'date'\n * @param {*} data\n */\n\n\nfunction getTypeString(data) {\n  var stringType = _typeof(data);\n\n  if (stringType === 'object') {\n    if (data === null) return 'null';\n    var stringified = toString.apply(data);\n\n    if (stringified.length > 2 && stringified[0] === '[' && stringified[stringified.length - 1] === ']') {\n      var splits = stringified.substr(1, stringified.length - 2).split(' ');\n\n      if (splits.length > 1) {\n        return splits.slice(1).join(' ').toLowerCase();\n      }\n    }\n\n    return 'unknown';\n  }\n\n  if (stringType === 'number') {\n    if (isNaN(data)) return 'nan';\n  }\n\n  return stringType;\n}\n/**\n * Check if both parameters are equal, check all nested keys of objects and arrays\n * @param {*} obja\n * @param {*} objb\n */\n\n\nfunction deepEq(left, right) {\n  var leftType = getTypeString(left);\n  var rightType = getTypeString(right);\n  if (leftType !== rightType) return false;\n  if (leftType === 'nan') return true;\n\n  if (leftType === 'object') {\n    if (left === right) return true; // if they are the same thing, don't check children\n\n    var leftKeys = keys(left).sort(); // unsorted could be unequal\n\n    var rightKeys = keys(right).sort();\n    if (!deepEq(leftKeys, rightKeys)) return false;\n\n    for (var keydex = 0; keydex < leftKeys.length; keydex += 1) {\n      if (!deepEq(left[leftKeys[keydex]], right[leftKeys[keydex]])) return false;\n    }\n\n    return true;\n  }\n\n  if (leftType === 'array') {\n    if (left === right) return true; // if they are the same thing, don't check children\n\n    if (left.length !== right.length) return false;\n\n    for (var dex = 0; dex < left.length; dex += 1) {\n      if (!deepEq(left[dex], right[dex])) return false;\n    }\n\n    return true;\n  }\n\n  return left === right;\n}\n/**\n * Detect differences between two things, will indicate changes in type, value, length, etc. Will not diff string values.\n * @param {*} original\n * @param {*} incoming\n */\n\n\nfunction shallowDiff(original, incoming) {\n  var currentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var changes = [];\n  var originalType = getTypeString(original);\n  var incomingType = getTypeString(incoming);\n  if (originalType !== incomingType) return [{\n    change: 'type',\n    path: currentPath,\n    original: original,\n    incoming: incoming\n  }];\n  if (originalType === 'nan') return [];\n\n  if (originalType === 'object') {\n    if (original === incoming) return []; // if they are the same thing, don't check children\n\n    var originalKeys = keys(original).sort(); // unsorted could be unequal\n\n    var incomingKeys = keys(incoming).sort();\n    var sharedKeys = [];\n\n    if (!deepEq(originalKeys, incomingKeys)) {\n      for (var originalDex = originalKeys.length - 1; originalDex >= 0; originalDex -= 1) {\n        var originalKey = originalKeys[originalDex];\n\n        for (var incomingDex = incomingKeys.length - 1; incomingDex >= 0; incomingDex -= 1) {\n          if (originalKey === incomingKeys[incomingDex]) {\n            sharedKeys.push(originalKey);\n            originalKeys.splice(originalDex, 1);\n            incomingKeys.splice(incomingDex, 1);\n            break;\n          }\n        }\n      }\n\n      for (var _originalDex = 0; _originalDex < originalKeys.length; _originalDex += 1) {\n        changes.push({\n          change: 'delete',\n          path: currentPath,\n          key: originalKeys[_originalDex],\n          original: original[originalKeys[_originalDex]]\n        });\n      }\n\n      for (var _incomingDex = 0; _incomingDex < incomingKeys.length; _incomingDex += 1) {\n        changes.push({\n          change: 'add',\n          path: currentPath,\n          key: incomingKeys[_incomingDex],\n          incoming: incoming[incomingKeys[_incomingDex]]\n        });\n      }\n    } else {\n      sharedKeys = originalKeys;\n    }\n\n    for (var keydex = 0; keydex < sharedKeys.length; keydex += 1) {\n      changes = changes.concat(shallowDiff(original[sharedKeys[keydex]], incoming[sharedKeys[keydex]], currentPath.concat(sharedKeys[keydex])));\n    }\n  } else if (originalType === 'array') {\n    if (original === incoming) return []; // if they are the same thing, don't check children\n\n    var sharedLength = original.length;\n\n    if (original.length !== incoming.length) {\n      if (original.length > incoming.length) {\n        sharedLength = incoming.length;\n        changes.push({\n          change: 'shrink',\n          path: currentPath,\n          original: original.slice(incoming.length)\n        });\n      } else {\n        changes.push({\n          change: 'grow',\n          path: currentPath,\n          incoming: incoming.slice(original.length)\n        });\n      }\n    }\n\n    for (var dex = 0; dex < sharedLength; dex += 1) {\n      changes = changes.concat(shallowDiff(original[dex], incoming[dex], currentPath.concat(dex)));\n    }\n  } else if (original === incoming) {\n    return [];\n  } else {\n    return [{\n      change: 'value',\n      path: currentPath,\n      original: original,\n      incoming: incoming\n    }];\n  }\n\n  return changes;\n}\n\nvar _default = {\n  assurePathExists: assurePathExists,\n  deepEq: deepEq,\n  get: get,\n  getObjectPath: getObjectPath,\n  getStringPathForArray: getStringPathForArray,\n  getTypeString: getTypeString,\n  has: has,\n  hasRoot: hasRoot,\n  keys: keys,\n  set: set,\n  yank: yank\n};\nexports.default = _default;\n\n//# sourceURL=webpack://nexusdk/./src/index.js?");

/***/ })

/******/ });
});