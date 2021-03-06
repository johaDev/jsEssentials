/**
 * Checks if 'value' is a finite number.
 *
 * @category Is
 * @param {*} value The 'value' to check.
 * @return {Boolean} True if value is a finite number, else false.
 * @example
 *
 * isFiniteNum(Infinity);
 * // -> false
 *
 * isFiniteNum(NaN);
 * // -> false
 *
 * isFiniteNum(-Infinity);
 * // -> false
 *
 * isFiniteNum(0);
 * // -> true
 *
 * isFiniteNum(2e64);
 * // -> true
 *
 * isFiniteNum(null);
 * // -> false
 *
 * isFiniteNum(undefined);
 * // -> false
 *
 * isFiniteNum('0');
 * // -> false
 */
function isFiniteNum(value) {
  'use strict';

  if (Number.isFinite) {
    return Number.isFinite(value);
  }

  return value != null && typeof value === 'number' &&
    value !== Infinity && value !== -Infinity &&
    value === value;
}
