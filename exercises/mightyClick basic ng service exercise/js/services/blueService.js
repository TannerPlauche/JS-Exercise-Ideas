var app = angular.module("MightyClick")

app.service("BlueService", function () {
    
    this.blueCount = 100;
    
    this.clickLess = function() {
        this.blueCount -= 1; 
    }
    
    this.clickMore = function () {
        this.blueCount += 1;
    }
    

});