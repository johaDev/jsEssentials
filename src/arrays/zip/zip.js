/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @category Array
 * @NOTE To support legacy browsers, use `Array.prototype.map` and `Array.prototype.reduce` polyfills.
 * @param {Array} [args...] The arrays to process.
 * @throws {TypeError} If any of the arguments is not array.
 * @return {Array} Returns the new array of grouped elements.
 * @example
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
 * // -> [ [1, 11, 111], [2, 22, 222], [3, 33, 333] ]
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222]);
 * // -> [ [1, 11, 111], [2, 22, 222], [3, 33, undefined] ]
 *
 * zip([1, 2, 3], [11, 22, 33], [111, 222]);
 * // -> [ [1, 11, 111], [2, 22, undefined], [3, undefined, undefined] ]
 *
 * zip([], []);
 * // -> []
 *
 * zip();
 * // -> []
 */
function zip(/* , args... */) {
  'use strict';

  var slice = Array.prototype.slice,
    args = slice.call(arguments),
    argsLength = args.length,
    longest;

  while (argsLength--) {
    if (Object.prototype.toString.call(args[argsLength]) !== '[object Array]') {
      throw new TypeError('Expected an array');
    }
  }

  // Find the longest of the arrays, to begin mapping from this one.
  longest = args.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  }, []);

  return longest.map(function (item, index) {
    return args.map(function (array) {
      return array[index];
    });
  });
}
