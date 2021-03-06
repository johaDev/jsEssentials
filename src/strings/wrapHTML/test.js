/* global wrapHTML */

(function () {
  'use strict';

  describe('String/wrapHTML', function () {
    it('should wrap a string with a HTML tag with attributes if specified', function () {
      var str = 'Lorem ipsum dolor sit amet.';

      var p = wrapHTML(str, 'p');

      var div = wrapHTML(p, 'div', {
        class: 'myClass',
        id: 'myId',
        dataType: 'myType' // Note that camelized keys are dasherized. Use string format to avoid this action.
      });

      expect(p).toEqual('<p>Lorem ipsum dolor sit amet.</p>');

      expect(div).toEqual('<div class="myClass" id="myId" data-type="myType"><p>Lorem ipsum dolor sit amet.</p></div>');
    });
  });
}());
