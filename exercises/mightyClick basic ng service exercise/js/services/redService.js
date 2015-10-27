var app = angular.module("MightyClick")

app.service("RedService",  function () {
    
    this.redCount = 100;
    
    this.clickLess = function() {
        this.redCount -= 1; 
    }
    
    this.clickMore = function () {
        this.redCount += 1;
    }
    
    
});











//app.factory("RedFactory", function () {
//    var anObject = {};
//    
//    function hello() {
//        return 'hello world';
//    }
//    
//    anObject.redCount  = 100;
//    
//    anObject.clickLess = function() {
//        anObject.redCount -= 1;
//    }
//    
//    anObject.clickMore = function() {
//        anObject.redCount += 1;
//    }
//    
//    if (date == 'tuesday') {
//        return {
//            somethingelse
//            
//        }
//    }
//    
//    return anObject;
//})