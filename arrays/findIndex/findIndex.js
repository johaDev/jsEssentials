/**
 * Returns the index of the first element that passes the callback check.
 * If no element passes the callback check, returns -1.
 * @param   {Array}    array    The array to check.
 * @param   {Function} callback The function called per iteration.
 * @returns {Number}   The index of the first element that matches the callabck check.
 */
function findIndex(array, callback) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
        if (callback(array[index], index, array) === true) {
            return index;
        }
    }

    return -1;
}