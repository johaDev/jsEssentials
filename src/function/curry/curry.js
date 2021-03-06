/**
 * Transforms a function of N arguments in such a way that it can
 * be called as a chain of N functions each with a single argument.
 *
 * @category Function
 * @param {function} func The function to curry.
 * @param {Number} [n] The number of expected arguments in case that the function's arity cannot be automatically determined.
 * @throws {TypeError} If `func` is not function.
 * @return {Function} A new, curried function.
 * @example
 *
 * // Example 1
 * var babyAnimals = function (a1, a2) {
 *   return 'I love ' + a1 + ' and ' + a2 + '.';
 * };
 *
 * var babyKoalas = curry(babyAnimals, 'koalas');
 *
 * babyKoalas('elephants');
 * // -> "I love koalas and elephants."
 *
 * babyKoalas('lions');
 * // ->  "I love koalas and lions."
 *
 * // Example 2
 * var sequence = function (start, end) {
 *   var res = [];
 *
 *   for (var i = start; i <= end; i++) {
 *     res.push(i);
 *   }
 *
 *   return res;
 * };
 *
 * var seq5 = curry(sequence, 1);
 *
 * seq5(5);
 * // -> [1, 2, 3, 4, 5]
 *
 * // Example 3
 * var sum = function (a, b, c) {
 *   return a + b + c;
 * };
 *
 * var mySum = curry(sum, 3),
 *   a = mySum(10),
 *   b = a(20);
 *
 * b(5);
 * // -> 35
 */
function curry(func, n) {
  'use strict';

  var slice, initialArguments, argumentsLength;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  slice = Array.prototype.slice;
  initialArguments = slice.call(arguments, 2);
  argumentsLength = typeof n !== 'number' ? func.length : n;

  function curried(args) {
    if (args.length >= argumentsLength) {
      return func.apply(null, args);
    }

    return function () {
      return curried(args.concat(slice.call(arguments)));
    };
  }

  return curried(initialArguments);
}
