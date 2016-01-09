var app = angular.module("PoetryApp", ["router"]);

app.controller("MainController", ["$scope", '$routeParams', "PoemService", function ($scope, $routeParams, PoemService) {

  $scope.database = PoemService.createPoemDatabase();
  $scope.haikuList = PoemService.haikuList;
  $scope.enterPoemForm = PoemService.enterPoemForm;
  $scope.showForm = false;



  PoemService.createPoemDatabase().then(function (data) {
    $scope.database = data;
  });

  //poem items
  $scope.newPoemTitle = '';
  $scope.newPoemAuthor = '';
  $scope.newPoemBody = '';

  $scope.newPoemEntry = {
    title: $scope.newPoemTitle,
    author: $scope.newPoemAuthor,
    body: $scope.newPoemBody,
  }




}]);