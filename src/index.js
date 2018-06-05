/**
 * Objer module, interact with objects
 * @module objer
 */

/**
 * Set value at an object subpath
 * @param {Object} object
 * @param {string|array} path
 * @param {*} value
 */
export function set(object, path, value) {
  let subObject = object;
  const keys = getObjectPath(path || '');
  for (let keydex = 0; keydex < keys.length; keydex += 1) {
    let key = keys[keydex];
    if (key !== '') {
      if (keydex !== keys.length - 1) {
        if (subObject[key] === null || typeof subObject[key] !== 'object') {
          subObject[key] = {};
        }
        subObject = subObject[key];
      } else {
        subObject[key] = value;
      }
    }
  }

  return object;
}

/**
 * Get array of keys in an object
 * @param {Object} object
 */
export function keys(object) {
  if (!object) return [];
  if (typeof Object.keys === 'undefined') return Object.keys(object);
  const keys = [];

  for(let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys;
}

/**
 * Check if an object has a value at a path
 * @param {Object} object
 * @param {string|array} key
 */
export function has(object, key) {
  let subObject = object;
  const keys = getObjectPath(key || '');
  for (let keydex = 0; keydex < keys.length; keydex += 1) {
    let key = keys[keydex];
    if (!hasRoot(subObject, key)) return false;
    subObject = subObject[key];
  }

  return true;
}

/**
 * Check if an object has a top level key, hasRoot({ a: 1 }, 'a'); is true, hasRoot({ a: { b: 1 } }, 'a.b'); is false
 * @param {Object} object
 * @param {string} key
 */
export function hasRoot(object, key) {
  if (object !== null && typeof object === 'object') {
    return (key in object);
  }
  return false;
}

/**
 * Retrieve value from within an object or array
 * @param {Object} object
 * @param {string|array} path
 * @param {*} [defaultValue]
 */
export function get(object, path, defaultValue = undefined) {
  let subObject = object;
  const keys = getObjectPath(path || '');
  for (let keydex = 0; keydex < keys.length; keydex += 1) {
    let key = keys[keydex];
    if (key !== '') {
      if (!hasRoot(subObject, key)) return defaultValue;

      subObject = subObject[key];
    }
  }

  return subObject;
}

/**
 * Resolve a path to a path array 'a.b.c' returns ['a', 'b', 'c']
 * @param {string|array} path
 */
export function getObjectPath(path) {
  const inputType = getTypeString(path);
  if (inputType === 'array') return path;
  if (inputType !== 'string') {
    if (inputType === 'number') return [path];
    return [];
  }
  let inBrackets = false;
  let partBegin = 0;
  let split = false;
  let exitBrackets = false;
  const pathlen = path.length;
  const parts = [];

  for(let dex = 0; dex < pathlen + 1; dex += 1) {
    const char = path[dex];
    if (inBrackets && !exitBrackets) {
      if (char === ']') {
        exitBrackets = true;
      }
    } else if (char === '.') {
      split = true;
    } else if (char === '[') {
      split = true;
      inBrackets = true;
    }

    if (split || dex === pathlen) {
      let nextPart = path.substr(partBegin, dex - partBegin - (exitBrackets ? 1 : 0))
      if (inBrackets) {
        const parsed = parseInt(nextPart, 10);
        if (!isNaN(parsed)) {
          nextPart = parsed;
        }
      }
      parts.push(nextPart);
      partBegin = dex + 1;
      split = false;
      if (exitBrackets) inBrackets = false;
      exitBrackets = false;
    }
  }
  return parts;
}

/**
 * Convert an array into a string path ['a', 'b', 'c'] returns 'a.b.c'
 * @param {array} arrayPath
 */
export function getStringPathForArray(arrayPath) {
  const inputType = getTypeString(arrayPath);
  if (inputType !== 'array') {
    if (inputType === 'string') return arrayPath;
    if (inputType === 'number') return `[${arrayPath}]`;
    return '';
  }

  return arrayPath.reduce((result, item, dex) => {
    if (getTypeString(item) === 'number') {
      return `${result}[${item}]`;
    }
    return result + (dex > 0 ? '.': '') + item;
  }, '');
}

/**
 * If this subkey doesn't exist, initialize it to defaultValue
 * @param {Object} object
 * @param {string|array} path
 * @param {*} defaultValue
 */
export function assurePathExists(object, path, defaultValue = {}) {
  const arrayPath = getObjectPath(path);
  let currentObject = object;
  for (let arraydex = 0; arraydex < arrayPath.length; arraydex += 1) {
    const key = arrayPath[arraydex];
    if (!hasRoot(currentObject, key)) { // TODO: Address problems where key exists already and is not an array or object
      const nextKey = ((arraydex === arrayPath.length - 1) ? null : arrayPath[arraydex + 1]);
      if (nextKey === null) {
        currentObject[key] = defaultValue;
      } else if (getTypeString(nextKey) === 'number') {
        currentObject[key] = [];
      } else {
        currentObject[key] = {};
      }
    }
    currentObject = currentObject[key];
  }
  return currentObject;
}

/**
 * Return simplified type as a string. [] returns 'array' new Date() returns 'date'
 * @param {*} data
 */
export function getTypeString(data) {
  if (typeof data === 'object') {
    if (data === null) return 'null';
    const stringified = toString.apply(data);
    if (stringified.length > 2 && stringified[0] === '[' && stringified[stringified.length - 1] === ']') {
      const splits = stringified.substr(1, stringified.length - 2).split(' ');
      if (splits.length > 1) {
        return splits.slice(1).join(' ').toLowerCase();
      }
    }
    return 'unknown';
  }

  return typeof data;
}

export default {
  assurePathExists,
  get,
  getObjectPath,
  getStringPathForArray,
  getTypeString,
  has,
  hasRoot,
  keys,
  set,
};
