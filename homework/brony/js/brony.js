var app = angular.module("BronyApp", []);

app.controller("bronyController", ['$scope', 'modelManager', function ($scope, modelManager) {
    $scope.ponyList = modelManager.ponyList;
    $scope.currentFavoritePony = modelManager.favoritePoniesList[0];
    $scope.currentPonyNumber = modelManager.currentPonyNumber;
    //    $scope.adjustedCurrenPonyNumber = modelManager.currentPonyNumber;
    //    $scope.ponyList = modelManager.ponyList;    
    $scope.currentPony = modelManager.currentPony;

    $scope.updateCurrentPony = function () {
        modelManager.currentPonyNumber = $scope.currentPony;
        $scope.currentPony = modelManager.updateCurrentPony($scope.currentPonyNumber);
    };


    $scope.newPony = modelManager.newPony;
    $scope.addPonyToFavorites = function () {
        modelManager.addPonyToFavorites($scope.newPony.name, $scope.newPony.img, $scope.newPony.userName);
    };



                                           }]);

//
//$('#newPonyInput').keypress(function (event) {
//    if (event.which == 13) {
//        event.preventDefault();
//        $("form").submit();
//    }
//});