var app = angular.module("router", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "partials/home.html",
    controller: "MainController"
  }).when("/about", {
    templateUrl: "partials/about.html",
    controller: "MainController"
  }).when("/mostPopular", {
    templateUrl: "partials/mostPopular.html",
    controller: "MainController"
  }).when("/guidelines", {
    templateUrl: "partials/guidelines.html",
    controller: "MainController"
  }).when("/type/haiku", {
    templateUrl: "partials/haiku.html",
    controller: "MainController"
  }).when("/type/haiku/:haikuID", {
    templateUrl: "partials/individualPoem.html",
    controller: "MainController"
  })
})