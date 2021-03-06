/**
 * Removes whitespace from both ends of a string.
 * Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)
 * and all the line terminator characters (LF, CR, etc.).
 *
 * @category String
 * @param {String} subjectString The string to trim.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The result string.
 * @example
 *
 * trim('    Lorem ipsum dolor si amet.    ');
 * // -> 'Lorem ipsum dolor si amet.'
 */
function trim(subjectString) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  return String.prototype.trim ?
    subjectString.trim() :
    subjectString.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
