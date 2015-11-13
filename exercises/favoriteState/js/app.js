var app = angular.module("MyStatesApp", ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/Home", {
			templateUrl: "templates/home.html",
			controller: "HomeController"
		})
		.when("/AboutGeorgia", {
			templateUrl: "templates/aboutGeorgia.html",
			controller: "AboutController"
		})
		.when("/WhyILoveGeorgia", {
	templateUrl: "templates/whyILoveGeorgia.html",
	controller: "WhyController"
})
}); //end of config