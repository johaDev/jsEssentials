/* global uniq */

(function () {
  'use strict';

  describe('Array/uniq', function () {
    var arr = ['a', 'a', 'b', true, '2', 2, false, true];

    it('removes duplicate primitive values from an array', function () {
      var uArr = uniq(arr),
        count = 0,
        i, len;

      for (i = 0, len = arr.length; i < len; i++) {
        if (uArr[i] === 'a') {
          count += 1;
        }
      }

      expect(count).toEqual(1);

      expect(function () {
        return uniq({});
      }).toThrow();
    });
  });
}());
