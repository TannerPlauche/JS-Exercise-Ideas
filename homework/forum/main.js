var app = angular.module("PoetryApp", ["router"]);

app.controller("MainController", ["$scope", '$routeParams', "PoemService", function ($scope, $routeParams, PoemService) {

  $scope.database = PoemService.database;
  $scope.getPoem = PoemService.getPoem;
  $scope.haikuList = PoemService.haikuList();
  $scope.enterPoemForm = true;

  //poem items
  $scope.newPoemTitle = '';
  $scope.newPoemAuthor = '';
  $scope.newPoemBody = '';
}]);