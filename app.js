(function () {
  'use strict';

  .angular.module('NarrowItDownDirectiveApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .factory('NarrowItDownFactory', NarrowItDownDirective);

  NarrowItDownController.$inject = ['$scope'];
  function NarrowItDownController() {

  }
})();
