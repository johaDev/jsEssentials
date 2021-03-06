/**
 * Checks if value is classified as a WeakSet object.
 *
 * @category Is
 * @param {*} value The value to check.
 * @return {Boolean} True if `value` is classified as a WeakSet object, else false.
 * @example
 *
 * isWeakSet(new WeakSet());
 * // -> true
 *
 * isWeakSet(new Set());
 * // -> false
 */
function isWeakSet(value) {
  'use strict';

  return typeof value === 'object' &&
    Object.prototype.toString.call(value) === '[object WeakSet]';
}
