/**
 * Chains together functions to create a new function following the mathematical model of function composition.
 * In mathematics f ∘ g (pronounced "f composed with g") is the function that given x, returns f(g(x)).
 * Following the mathematical model `compose(f, g)(x)` should equal `f(g(x))`.
 * Thus it is made clear that function passed as arguments should be read from right to left.
 *
 * @category Function
 * @param {function} [args...] One or more functions to compose.
 * @throws {TypeError} If any of the arguments is not function.
 * @return {function} A new function as the result of the composition.
 * @example
 *
 * function capitalize(item) {
 *   return item.toUpperCase();
 * }
 *
 * function head(item) {
 *   return item[0];
 * }
 *
 * function reverse(item) {
 *   return item.split('').reverse().join('');
 * }
 *
 * // Example 1: First reverse then capitalize
 * var convert = compose(capitalize, reverse);
 * convert('hello');
 * // -> "OLLEH"
 *
 * // Example 2:  First reverse, then get the first character and finally capitalize
 * var convert = compose(capitalize, head, reverse);
 * convert('hello');
 * // -> "O"
 *
 * // Example 3:  Same as above but combining compositions
 * var reverseAndHead = compose(head, reverse);
 * var reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);
 * reverseHeadAndCapitalize('hello');
 * // -> "O"
 */
function compose(/* args... */) {
  'use strict';

  var funcs = arguments,
    slice = Array.prototype.slice,
    initialArguments = slice.call(arguments, 0),
    argsLength = initialArguments.length;

  while (argsLength--) {
    if (typeof initialArguments[argsLength] !== 'function') {
      throw new TypeError('Expected a function');
    }
  }

  return function () {
    var args = arguments, i;
    for (i = funcs.length; i--;) {
      args = [funcs[i].apply(this, args)];
    }
    return args[0];
  };
}
