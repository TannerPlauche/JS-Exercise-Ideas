var app = angular.module("router", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "partials/home.html",
    controller: "MainController"
  }).when("/enterBounty", {
    templateUrl: "partials/enterBounty.html",
    controller: "MainController"
  }).when("/currentBounties", {
    templateUrl: "partials/currentBounties.html",
    controller: "MainController"
  }).when("/completedBounties", {
    templateUrl: "partials/completedBounties.html",
    controller: "MainController"
  })
})