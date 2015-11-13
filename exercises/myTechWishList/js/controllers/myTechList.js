var app = angular.module("MyApp");

app.controller("MyTechListController", ["$scope", "dataService", function ($scope, dataService) {
	$scope.myWishList = dataService.myWishList;


}]);