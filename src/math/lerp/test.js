/* global lerp */

(function () {
  'use strict';

  describe('Math/lerp', function () {
    it('converts a normalized value to the value that the normalized value points to', function () {
      expect(lerp(0.75, 0, 365)).toEqual(273.75);

      expect(lerp(0.33, 100, 500)).toEqual(232);

      expect(lerp(0, 100, 500)).toEqual(100);

      expect(lerp(1, 100, 500)).toEqual(500);

      expect(lerp(-0.5, 0, 500)).toEqual(-250);
    });
  });
}());
