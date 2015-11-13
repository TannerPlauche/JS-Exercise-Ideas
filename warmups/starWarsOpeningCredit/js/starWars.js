var app = angular.module("starWarsCrawl", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {


    $http.get("http://swapi.co/api/films/1/")
        .then(function (response) {
            $scope.starwarsFilm = response;
            console.log($scope.starwarsFilm);
        }, function (response) {
            alert("Request Failed: " + response.state + ", " + response.statusText + ".")

        });



}])