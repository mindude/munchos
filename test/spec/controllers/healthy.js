'use strict';

describe('Controller: HealthyCtrl', function () {

  // load the controller's module
  beforeEach(module('munchApp'));

  var HealthyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealthyCtrl = $controller('HealthyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HealthyCtrl.awesomeThings.length).toBe(3);
  });
});
