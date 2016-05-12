/**
 * Converts a string to camel case, removing any non alphanumeric characters.
 * @param {String} subjectString The string to convert.
 */
function camelCase(subjectString) {
    'use strict';

    if (typeof subjectString !== 'string') {
        throw new TypeError('Expected a string');
    }

    return subjectString
        .toLowerCase()                      // Lower case string.
        .replace(/[-_]+/g, ' ')             // Replace any `-` or `_` characters with a space.
        .replace(/[^\w\s]/g, ' ')           // Replace any non alphanumeric characters with a space.
        .replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase();
        })                                  // Uppercase the first character in each group immediately following a space.
        .replace(/\s/g, '')                 // Remove all spaces.
        .replace(/^(.)/, function ($1) {
            return $1.toLowerCase();
        });                                 // Lowercase the first character of the string.
}
