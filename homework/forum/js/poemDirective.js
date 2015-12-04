angular.module('PoetryApp')
  .controller('PoemDirectiveController', ['$scope', "$routeParams", 'PoemService', function ($scope, $routeParams, PoemService) {

    $scope.poem = PoemService.getPoem($routeParams.haikuID);

}])
  .directive('poemEntry', function () {
    return {
      restrict: 'E',
      templateUrl: '/partials/poem-entry.html',
      controller: 'PoemDirectiveController'
    };
  });