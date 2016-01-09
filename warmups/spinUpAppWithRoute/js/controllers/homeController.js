myApp = angular.module("MyApp", []);

myApp.controller("HomeController", ["$scope", function($scope){
  
  $scope.greeting = "Hello, welcome to the about page!"
}]);