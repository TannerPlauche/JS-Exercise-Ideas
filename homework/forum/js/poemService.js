var app = angular.module("PoetryApp")

app.service('PoemService', ['tempDB', function (tempDB) {

  this.database = tempDB.database

  this.haikuList = function () {
    var haikuArray = [];
    for (var i in this.database) {
      if (this.database[i].type === "haiku"){
        haikuArray.push(this.database[i])
      }
    }
    return haikuArray;
  }
  
  this.getPoem = function (id) {
    for (var i in this.database) {
      if (this.database[i]._id === id) {
        this.currentPoem = this.database[i]
      }
    }
    return this.currentPoem;
  };

  this.newPoem
  
}]);