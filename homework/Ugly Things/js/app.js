var app = angular.module("UglyThingsApp", []);

app.controller("MainController", function($scope){

    $scope.uglyThings = [];

    $scope.title = null;
    $scope.input = null;
    $scope.description = null;

    $scope.addNewThing = function () {
        var newuglyThing = {
            title: $scope.title,
            url: $scope.input,
            description: $scope.description,
        }
    $scope.uglyThings.push(newuglyThing);
    }

});

app.controller("secondController", function($scope){

    $scope.newComment = null;

    $scope.commentArray = ["test string"];

    $scope.addNewComment = function (){
        var commentGoingToTheArray = $scope.newComment;
        $scope.commentArray.push(commentGoingToTheArray);
        $scope.newComment = null;
        console.log(commentArray);
    };

    $scope.removeComment = function (comment) {
        var index = $scope.commentArray.indexOf(comment);
        $scope.commentArray.splice(index,1);
    }

});
