(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'running-paces', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('running-paces'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'running-paces-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'running-paces-test'.");
    }if (typeof this['running-paces'] === 'undefined') {
      throw new Error("Error loading module 'running-paces-test'. Its dependency 'running-paces' was not found. Please, check whether 'running-paces' is loaded prior to 'running-paces-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'running-paces-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'running-paces-test'.");
    }root['running-paces-test'] = factory(typeof this['running-paces-test'] === 'undefined' ? {} : this['running-paces-test'], kotlin, this['running-paces'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$running_paces, $module$kotlin_test) {
  'use strict';
  var PaceMeasurement = $module$running_paces.PaceMeasurement;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function PaceMeasurementTest() {
  }
  PaceMeasurementTest.prototype.convertKmSecondsToStringRepresentation = function () {
    assertEquals('4:30', PaceMeasurement.KM.stringRepresentation_za3lpa$(270));
  };
  PaceMeasurementTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaceMeasurementTest',
    interfaces: []
  };
  _.PaceMeasurementTest = PaceMeasurementTest;
  suite('', false, function () {
    suite('PaceMeasurementTest', false, function () {
      test('convertKmSecondsToStringRepresentation', false, function () {
        return (new PaceMeasurementTest()).convertKmSecondsToStringRepresentation();
      });
    });
  });
  Kotlin.defineModule('running-paces-test', _);
  return _;
}));

//# sourceMappingURL=running-paces-test.js.map
