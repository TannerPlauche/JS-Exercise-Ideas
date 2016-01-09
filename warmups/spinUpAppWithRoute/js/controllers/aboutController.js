myApp = angular.module("MyApp", []);

myApp.controller("AboutController", ["$scope", function($scope){
  
  $scope.greeting = "Hello, welcome to the about page!"
}]);