/**
 * Converts a color value (number or hexadecimal string) to RGB(A) format.
 *
 * @category Misc
 * @param {Number|String} color The color value to convert.
 * @param {Number} [alpha=1] Indicates an alpha value, which is a decimal number between 0 and 1.
 * @return {String} The converted value in RGB(A) format.
 * @example
 *
 * colorToRGB(0xFF0000);
 * // -> 'rgb(255, 0, 0)'
 *
 * colorToRGB('0xFF0000');
 * // -> 'rgb(255, 0, 0)'
 *
 * colorToRGB('#ff0000');
 * // -> 'rgb(255, 0, 0)'
 *
 * colorToRGB(16711680);
 * // -> 'rgb(255, 0, 0)'
 *
 * colorToRGB('16711680');
 * // -> 'rgb(255, 0, 0)'
 *
 * colorToRGB('#ff0000', 0.5);
 * // -> 'rgba(255, 0, 0, 0.5)'
 *
 * colorToRGB('#ff0000', '0.5');
 * // -> 'rgb(255, 0, 0)'
 *
 * colorToRGB('#ff0000', null);
 * // -> 'rgb(255, 0, 0)'
 *
 * colorToRGB();
 * // -> 'rgb(0, 0, 0)'
 *
 * colorToRGB(null);
 * // -> 'rgb(0, 0, 0)'
 *
 * colorToRGB('Hello world');
 * // -> 'rgb(0, 0, 0)'
 */
function colorToRGB(color, alpha) {
  'use strict';

  var r, g, b, a;

  if (typeof color === 'string' && color[0] === '#') {
    color = parseInt(color.slice(1), 16);
  }

  alpha = alpha == null ? 1 : alpha;

  r = color >> 16 & 0xff;
  g = color >> 8 & 0xff;
  b = color & 0xff;
  a = alpha < 0 ? 0 : alpha > 1 ? 1 : alpha;

  if (a === 1 || typeof a !== 'number') {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  } else {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  }
}
