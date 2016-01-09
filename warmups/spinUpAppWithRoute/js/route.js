var myApp = angular.module("MyApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl "partials/home.html",
      controller: "HomeController"
  }).when("/about", {
    templateUrl "partials/home.html",
      controller: "AboutController"
  }).when("/spokenLangs", {
    templateUrl "partials/home.html",
      controller: "SpokenLangsController"
  }).when("/studiedLangs", {
    templateUrl "partials/home.html",
      controller: "StudiedLangsController"
  }).when("/contact", {
    templateUrl "partials/home.html",
      controller: "ContactController"
  })
})