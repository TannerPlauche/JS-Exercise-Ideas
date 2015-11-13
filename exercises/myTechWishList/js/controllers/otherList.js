var app = angular.module("MyApp");
app.controller("OtherController", ["$scope", "dataService", function ($scope, dataService) {
	$scope.otherList = dataService.otherList;

}]);