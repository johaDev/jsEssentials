/**
 * Detects the supported property name for the `transitionend` event.
 *
 * @category DOM
 * @return {String} The supported property name or `undefined` if not supported.
 * @example
 *
 * var transEnd = whichTransitionEnd();
 * // -> eg 'transitionend'
 *
 * element.addEventListener(transEnd, function () {
 *   // Do soething...
 * });
 */
function whichTransitionEnd() {
  'use strict';

  var key,
    el = document.createElement('div'),
    transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

  for (key in transitions) {
    if ({}.hasOwnProperty.call(transitions, key)) {
      if (el.style[key] !== undefined) {
        el = null;
        return transitions[key];
      }
    }
  }
}
