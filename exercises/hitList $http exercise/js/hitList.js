var app = angular.module("HitListApp", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    $http.get('http://mean.codingcamp.us:6543/hitlist.json')
        .then(function (response) {
            $scope.hitList = response.data;
            console.log($scope.hitList);
        }, function (response) {
            alert("There was an error: " + response.status + " " + response.statusText);
        })



}]);