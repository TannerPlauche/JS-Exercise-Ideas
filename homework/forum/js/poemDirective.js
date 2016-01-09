

angular.module('PoetryApp')
  .controller('PoemDirectiveController', ['$scope', "$routeParams", 'PoemService', function ($scope, $routeParams, PoemService) {

    $scope.database = PoemService.createPoemDatabase();
    $scope.currentPoemID = $routeParams.poemId;
    $scope.poem = PoemService.getPoem($scope.database, $scope.currentPoemID);
    //    $scope.poem = function (currentPoemID) {
    //      for (var i in $scope.database) {
    //        var currentPoemt = null;
    //        if ($scope.database[i]._id === id) {
    //          $scope.poem = $scope.database[i];
    //        }
    //      }
    //      console.log(currentPoem);
    //      return currentPoem;
    //    };

    $scope.poem = PoemService.getPoem($routeParams.haikuID);

}])
  .directive('poemEntry', function () {
    return {
      restrict: 'E',
      templateUrl: '/partials/poem-entry.html',
      controller: 'PoemDirectiveController'
    };
  });
