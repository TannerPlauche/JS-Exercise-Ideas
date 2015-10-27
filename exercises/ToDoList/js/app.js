var app = angular.module("toDoList", []);

app.controller("MainController", function ($scope){
   
    $scope.toDoList = [
        "Add something to my to-do list",
        
    ];
    
    $scope.toDoItem = null;
//    $scope.newindex = $scope.toDoList.length;

    
    $scope.addItem = function (){
        var newitem = $scope.toDoItem
//            {
//            task: $scope.toDoItem, 
//            idex: $scope.toDoList.length
//        }
        $scope.toDoList.push(newitem);
        $scope.toDoItem = "";

    }; 
        
    
    $scope.removeItem = function(item){
        var index = $scope.toDoList.indexOf(item);
        $scope.toDoList.splice(index,1);
    }
});