var app = angular.module("MightyClick", []);

app.controller("MainController", ['$scope', 'RedService', 'BlueService', function($scope, RedService, BlueService){
    
    $scope.counters = {
        redCount: RedService, 
        blueCount: BlueService
    }
    
    $scope.redClick = function () {
        RedService.clickMore();
        BlueService.clickLess();
        
    }
    
    $scope.blueClick = function () {
        BlueService.clickMore();
        RedService.clickLess();
       
    }
    
}]);