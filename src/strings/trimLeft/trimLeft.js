/**
 * Removes whitespace from the left end of a string.
 *
 * @category String
 * @param {String} subjectString The string to left trim.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * trimLeft('    Lorem ipsum dolor si amet.');
 * // -> 'Lorem ipsum dolor si amet.'
 */
function trimLeft(subjectString) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  return subjectString.replace(/^\s+/, '');
}
