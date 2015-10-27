var app = angular.module("angularNameBadge", []);

app.controller("MainController", function($scope){

    $scope.person = {
        firstName: null,
        lastName: null,
        email: null,
        placeOfBirth: null,
        phone: null,
        favoriteFood: null,
        aboutMe: null
    };

    
    $scope.test = "Testing";
    
    $scope.badge = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        placeOfBirth: "Place of Birth",
        phone: "Phone",
        favoriteFood: "Favorite Food",
        aboutMe: "All about you!",
    }

    $scope.updateBadge = function (){
        $scope.badge.firstName = $scope.person.firstName;
        $scope.badge.lastName = $scope.person.lastName;
        $scope.badge.email = $scope.person.email;
        $scope.badge.placeOfBirth = $scope.person.placeOfBirth;
        $scope.badge.phone = $scope.person.phone;
        $scope.badge.favoriteFood = $scope.person.favoriteFood;
        $scope.badge.aboutMe = $scope.person.aboutMe;

    }


});
