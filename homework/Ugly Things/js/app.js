var app = angular.module("UglyThingsApp", []);

app.controller("MainController", function( $scope){

    $scope.uglyThings = [
        {
            title: 'title',
            url: 'http://cdn.toonvectors.com/images/2/5914/toonvectors-5914-940.jpg',
            description: 'description'
        },
        {
            title: 'Ugly Rabbit',
            url: 'http://cdn.toonvectors.com/images/2/5914/toonvectors-5914-940.jpg',
            description: 'This is a picture of a funky looking rabbit.'
        }
    ];
});
