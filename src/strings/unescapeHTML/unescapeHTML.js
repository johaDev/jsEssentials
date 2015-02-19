/**
 * Unescapes a HTML string.
 * @param   {String} str The HTML string to unescape.
 * @returns {String} The unescaped string.
 */
function unescapeHTML(str) {
    'use strict';

    return str.
        replace(/&lt;/g, '<').
        replace(/&gt;/g, '>').
        replace(/&quot;/g, '"').
        replace(/&#034;/g, '"').
        replace(/&#039;/g, "'").
        replace(/&amp;/g, '&');
}