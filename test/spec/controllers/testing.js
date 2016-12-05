'use strict';

describe('Controller: TestingCtrl', function () {

  // load the controller's module
  beforeEach(module('munchApp'));

  var TestingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestingCtrl = $controller('TestingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestingCtrl.awesomeThings.length).toBe(3);
  });
});
