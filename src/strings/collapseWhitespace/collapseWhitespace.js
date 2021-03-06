/**
 * Converts all adjacent whitespace characters to a single space.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @throws {TypeError} If `subjectString` is not string.
 * @return {String} The final string with all adjacent whitespace converted to single space.
 * @example
 *
 * collapseWhitespace('  Lorem   \t ispum dolor sit      \t amet.  ');
 * // -> 'Lorem ispum dolor sit amet.'
 */
function collapseWhitespace(subjectString) {
  'use strict';

  if (typeof subjectString !== 'string') {
    throw new TypeError('Expected a string');
  }

  return subjectString.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
}
