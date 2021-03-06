/**
 * Creates an array with the lines of a a string.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {Array} An array or strings containing the lines of the string.
 * @example
 *
 * var str = 'You can\'t make\nan omelet without\r\nbreaking a few eggs.';
 * var str2 = `You can\'t make
 *   an omelet without
 *   breaking a few eggs.`;
 *
 * lines(str);
 * // -> ['You can't make', 'an omelet without', 'breaking a few eggs.']
 *
 * lines(str2);
 * // -> ['You can't make', 'an omelet without', 'breaking a few eggs.']
 */
function lines(subjectString) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  return subjectString.replace(/\r\n/g, '\n').split('\n');
}
