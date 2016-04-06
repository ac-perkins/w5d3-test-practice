(function() {
  'use strict';

    var assert = chai.assert;

    var fixtureHTML = $('#fixtures').html();

    suite('zoo results', function() {

      setup(function() {
          $('#fixtures').html(fixtureHTML);
      });

      teardown(function() {
          console.log('after each test');
      });

      test('Something other than an existing animal type is passed in', function(doneCallback) {

          assert.strictEqual( $('.animals li').length, 0, 'results are empty to start' );
          window.zoo.listAnimals('emu', function testCallback() {
              var assertError;

              try {
              assert.strictEqual( $('.animals li').length, 0, 'no animals of that type' );
            } catch(err) {
                assertError = err;
            }
            doneCallback(assertError);

          });

      });


      test('proper results show with tiger passed in', function(doneCallback) {

          assert.strictEqual( $('.animals li').length, 0, 'results are empty to start' );
          window.zoo.listAnimals('tiger', function testCallback() {
              var assertError;

              try {
              assert.strictEqual( $('.animals li').length, 2, 'results exist' );
            } catch(err) {
                assertError = err;
            }
            doneCallback(assertError);

          });

      });


      test('proper otter count', function(doneCallback) {

          window.zoo.countAnimalsByType(function testCallback(count) {
              var assertError;

              try {
              assert.strictEqual( count.otter, 2, 'otter count is correct' );
            } catch(err) {
                assertError = err;
            }
            doneCallback(assertError);

          });

      });


      test('count for animal not in data', function(doneCallback) {

          window.zoo.countAnimalsByType(function testCallback(count) {
              var assertError;

              try {
              assert.strictEqual( count.elephant, undefined,  'should be undefined' );
            } catch(err) {
                assertError = err;
            }
            doneCallback(assertError);

          });

      });


      test('count for types of different species in data', function(doneCallback) {

          window.zoo.countAnimalsByType(function testCallback(count) {
              var assertError;

              try {
              assert.strictEqual( Object.keys(count).length, 5,  'Return 5 species' );
            } catch(err) {
                assertError = err;
            }
            doneCallback(assertError);

          });

      });

});



})();
