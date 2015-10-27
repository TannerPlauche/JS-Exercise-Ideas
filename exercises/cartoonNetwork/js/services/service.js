var app = angular.module("CartoonNetwork")

app.service("MainService", function () {

    this.arrayOfShows = JSON.parse(localStorage.getItem("networkShows")) || [];

    this.addShow = function (image, title, description) {  //Create new object here
        var newShow = {
            image: image,
            title: title,
            description: description
        }
        //push the new object to the array
        this.arrayOfShows.push(newShow);
        localStorage.setItem("networkShows", JSON.stringify(this.arrayOfShows));
    }


});