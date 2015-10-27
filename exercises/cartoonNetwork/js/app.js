var app = angular.module("CartoonNetwork", []);


app.controller("MainController", ['$scope', 'MainService', function ($scope, MainService) {
    $scope.arrayOfShows = MainService.arrayOfShows;
    $scope.newShow = {
        image: null,
        title: null,
        description: null
    }
//pass in function from service here. 
    $scope.addShow = function () {
        MainService.addShow($scope.newShow.image, $scope.newShow.title, $scope.newShow.description);
        //clear intermediate object
        $scope.newShow = {
            image: null,
            title: null,
            description: null
        };
    }

}]);