var app = angular.module("PoetryApp")

app.service('PoemService', ['tempDB', '$http', function (tempDB, $http) {


  this.haikuList = [];
  this.datbase = [];

  this.createPoemDatabase = function () {
    return $http.get('http://localhost:9000/poems')
      .then(function (response) {
        this.database = response.data;
        console.log("This is the dataBase" + this.database);
        console.log("This is the data" + response.data);
        return response.data;
      })
  };



  //    this.createHaikus = function(data) {
  //        for (var i = 0; i < this.database.length; i++) {
  //          if (this.database[i].type === "haiku") {
  //            this.haikuList.push(this.database[i])
  //          }
  //        }
  //  };

  //  this.haikuList = function () {
  //      var haikuArray = [];
  //      this.createPoemDatabase().then(function (data) {
  //        for (var i in this.database) {
  //          if (this.database[i].type === "haiku") {
  //            haikuArray.push(this.database[i])
  //          }
  //        }
  //        return haikuArray;
  //      })
  //    }
  //gets an individual poem from this.database

  this.getPoem = function (database, id) {
    var currentPoem = null;
    for (var i in database) {
      if (database[i]._id === id) {
        currentPoem = data[i]
      }
    }
    console.log(currentPoem);
    return currentPoem;
  };

  //  this.getPoem = function (id) {
  //    for (var i in this.database) {
  //      if (this.database[i]._id === id) {
  //        this.currentPoem = this.database[i]
  //      }
  //    }
  //    return this.currentPoem;
  //  };





}]);