/**
 * Sorts an array of primitive values.
 * @NOTE: For legacy browsers use the `Array.prototype.map polyfill`.
 * @param {Array} array The array to sort.
 * @param {Boolean} [ascending=true] Defines the sort order. Default is true (ascending).
 * @return {Array} The new sorted array.
 */
function sort(array, ascending) {
    'use strict';
    return array.
        map(function (el, i) {
            return {
                index: i,
                value: el != null && (Object.prototype.toString.call(el) === '[object String]' ? el.toLowerCase() : el)
            };
        }).
        sort(function (a, b) {
            // NOTE: Using non strict equality to check for null or undefined.
            if (ascending == null) {
                ascending = true;
            }
            return (a.value < b.value ? -1 : a.value > b.value ? 1 : 0) * [-1, 1][+!!ascending];
        }).
        map(function (el) {
            return array[el.index];
        });
}
