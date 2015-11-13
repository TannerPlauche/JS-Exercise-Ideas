var app = angular.module("BronyApp");

app.service("modelManager", ["modelService", function (modelService) {


    //Do I really need these two this properties?  They can be declated and used in the get functions, right?


    this.ponyList = modelService.ponyList;
    //list of the favorite ponies
    this.favoritePoniesList = modelService.favoritePoniesList;
    this.currentPonyNumber = 2;
    this.adjustedCurrenPonyNumber = this.currentPonyNumber -= 1;
    this.currentPony = modelService.ponyList[this.adjustedCurrenPonyNumber];


    this.updateCurrentPony = function (index) {
        console.log(this.adjustedCurrenPonyNumber);
        this.currentPony = modelService.ponyList[index -= 1];
        console.log(this.currentPony);
        return this.currentPony;
    }


    // removes a pony from the ponies list
    this.deletePony = function (name) {
        var removePonyIndex = modelService.favoritePoniesList.indexOf(name);
        if (removePonyIndex > -1) {
            modelService.favoritePoniesList.splice(removePonyIndex, 1);
        };
    };


    // adds a pony to the favorites list
    this.newPony = {
        name: null,
        img: null,
        userName: null
    };
    this.addPonyToFavorites = function (name, img, userName) {
        this.newPony = {
            name: name,
            img: img,
            userName: userName
        };
        console.log(this.newPony);
        modelService.favoritePoniesList.push(this.newPony);
        this.newPony = {
            name: null,
            img: null,
            userName: null
        };
    };

    //retrieves pre-populated list of ponies
    this.getListOfPonies = function () {
        this.ponyList = modelService.ponyList;
    };

    this.getFavoritePonies = function () {
        this.favoritePoniesList = modelService.favoritePoniesList;
    };

    //    this.ponyValidator = function (){};
    this.ponyValidator = function (anObject) {
        var isValid = true;
        if (anObject.name === null || anObject.img === null || anObject.userName === null) {
            isValid = false;
        };
        for (var i in anobject.name) {
            if (typeof i === "number") {
                isValid = false;
            }
        };
        if (anObject.name.length < 4) {
            isValid = false;
        };
        return isValid;
    };

}]);



//Have a function to delete a specified pony from the favorites list
//Have a function to add a new pony to the favorites list
//Will have access to modelservice.js
//Have a function to get the pre-populated pony list
//Have a function to get the favorites list
//Must have a ponyValidator() function that: 
//Prevents pony objects that don't have a name, user or img url from being added
//Prevents pony object names from having any numbers in them (text only)
//Ensures that pony name has more than 3 characters