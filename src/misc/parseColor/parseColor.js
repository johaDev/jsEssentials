/**
 * Converts a color number value to a hexadecimal formatted string,
 * or a hexadecimal formatted string to a number.
 *
 * @category Misc
 * @param {Number|String} color The color value to convert.
 * @param {Boolean} [toNumber] If set to true, a numeric color value is returned.
 * @throws {TypeError} If `color` is not number or string.
 * @return {Number|String} The converted color value.
 * @example
 *
 * parseColor('#ff0000', true);
 * // -> 16711680
 *
 * parseColor('ff0000', true);
 * // -> 16711680
 *
 * parseColor('#ff0000');
 * // -> '#ff0000'
 *
 * parseColor('ff0000');
 * // -> 'ff0000'
 *
 * parseColor(16711680);
 * // -> '#ff0000'
 *
 * parseColor(16711680, true);
 * // -> 16711680
 *
 * parseColor(0xff0000);
 * // -> '#ff0000'
 *
 * parseColor(0xff0000, true);
 * // -> 16711680
 *
 */
function parseColor(color, toNumber) {
  'use strict';

  if (typeof color !== 'number' && typeof color !== 'string') {
    throw new TypeError('"parseColor" expects a number or string for color');
  }

  if (toNumber === true) {
    if (typeof color === 'number') {
      return color | 0;
    }

    if (typeof color === 'string' && color.charAt(0) === '#') {
      color = color.slice(1);
    }

    return parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('000000' + (color | 0).toString(16)).substr(-6);
    }

    return color;
  }
}
