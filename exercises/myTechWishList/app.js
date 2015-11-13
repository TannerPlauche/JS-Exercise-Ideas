var app = angular.module("MyApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/techList", {
			templateUrl: "partials/myTechList.html",
			controller: "MyTechListController"
		})
		.when("/otherList", {
			templateUrl: "partials/otherList.html",
			controller: "OtherController"
		})
});

//app.controller("MainController", ["$scope", function ($scope) {
//}])

app.directive("techItem", function () {
	return {
		restrict: "E",
		templateUrl: "/partials/tech-item.html"
	}
});