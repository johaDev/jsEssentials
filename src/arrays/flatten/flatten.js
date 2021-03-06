/**
 * Flattens array a single level deep.
 *
 * @category Array
 * @param {Array} array The array to flatten.
 * @throws {TypeError} If `array` is not array.
 * @return {Array} The new flattened array.
 * @example
 *
 * flatten([[1, 2], [3, 4], [5], 6]);
 * // -> [1, 2, 3, 4, 5, 6]
 *
 * flatten([1, [2, [3, [4]], 5], [10]]);
 * // -> [1, 2, [3, [4]], 5, 10]
 *
 * function dummy() {
 *   var arr = [1, [2, [3, [4]], 5]];
 *   arr.push(arguments);
 *   arr.push({foo: 'bar', length: 23});
 *   return arr;
 * }
 *
 * flatten(dummy('a', 'b'));
 * // -> [1, 2, [3, [4]], 5, 'a', 'b', {foo: 'bar', length: 23}]
 */
function flatten(array) {
  'use strict';

  var index, length, value, result;

  function isArray(val) {
    var toString = Object.prototype.toString,
      arrayTag = '[object Array]';

    return toString.call(val) === arrayTag;
  }

  function isArguments(val) {
    var toString = Object.prototype.toString,
      argsTag = '[object Arguments]';

    // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
    return hasOwnProperty.call(val, 'callee') &&
      (!propertyIsEnumerable.call(val, 'callee') || toString.call(val) === argsTag);
  }

  function arrayPush(arr, values) {
    var idx = -1,
      len = values.length,
      offset = arr.length;

    while (++idx < len) {
      arr[offset + idx] = values[idx];
    }

    return array;
  }

  if (!isArray(array)) {
    throw new TypeError('Expected an array');
  }

  index = -1;
  length = array.length;
  result = [];

  while (++index < length) {
    value = array[index];

    if (isArray(value) || isArguments(value)) {
      arrayPush(result, value);
    } else {
      result[result.length] = value;
    }
  }

  return result;
}
