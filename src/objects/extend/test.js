/* global extend */

(function () {
  'use strict';

  describe('Object/extend', function () {
    it('Merge two objects, modifying the first.', function () {
      var object1 = {
        apple: 0,
        banana: {weight: 52, price: 100},
        cherry: 97
      };

      var object2 = {
        banana: {price: 200},
        durian: 100
      };

      extend(object1, object2);

      expect(object1).toEqual({apple: 0, banana: {price: 200}, cherry: 97, durian: 100});
    });

    it('Merge two objects recursively, modifying the first.', function () {
      var object1 = {
        apple: 0,
        banana: {weight: 52, price: 100},
        cherry: 97
      };

      var object2 = {
        banana: {price: 200},
        durian: 100
      };

      extend(true, object1, object2);

      expect(object1)
        .toEqual({apple: 0, banana: {weight: 52, price: 200}, cherry: 97, durian: 100});
    });

    it('Merge defaults and options, without modifying the defaults.', function () {
      var defaults = {
        validate: false,
        limit: 5,
        name: 'foo'
      };

      var options = {
        validate: true,
        name: 'bar'
      };

      var settings = extend({}, defaults, options);

      expect(defaults).toEqual({validate: false, limit: 5, name: 'foo'});

      expect(options).toEqual({validate: true, name: 'bar'});

      expect(settings).toEqual({validate: true, limit: 5, name: 'bar'});
    });
  });
}());
