var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function ($scope) {
    
    $scope.countryChanged = function () {
        alert("You changed the country to " + $scope.chosenCountry.name);
    }
    
    $scope.countries = [
        {
            name: "USA",
            population: 318900000
        },
        {
            name: "Canada",
            population: 35160000
        },
        {
            name: "Portugal",
            population: 10460000
        }
    ]
    


}]);