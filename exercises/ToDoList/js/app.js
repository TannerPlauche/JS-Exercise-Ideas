var app = angular.module("toDoList", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {


    $scope.toDoItem = {
        title: '',
        description: ''
    };

    $scope.addItem = function () {
        var newitem = $scope.toDoItem;

        $scope.toDoList.push(newitem);
        $scope.toDoItem = "";
    };

    $http.get('http://mean.codingcamp.us/todo/tannerplauche')
        .then(function (response) {
                $scope.toDoList = response.data;
                console.log(response.data);
                $scope.toDoItem = {
                    title: '',
                    description: ''
                };
            },
            function (response) {
                alert("Request Failed: Status:" + response.status + " code: " +
                    response.statusCode + " text: " + response.statusText);
            });

    $scope.postData = function () {
        $http.post('http://mean.codingcamp.us/todo/tannerplauche', $scope.toDoItem)
            .then(function (response) {
                $scope.toDoList.push(response.data);
                console.log(response.data);
                $scope.toDoItem = {
                    title: '',
                    description: ''
                };
            });
    };

    $scope.putData = function (item) {
        $http.put('http://mean.codingcamp.us/todo/tannerplauche/' + item._id, item)
            .then(function (response) {

                console.log(response);
            });
    };

    $scope.removeItem = function (item) {
        var index = $scope.toDoList.indexOf(item);
        $scope.toDoList.splice(index, 1);
    };

    $scope.deleteTask = function (item) {
        $http.delete('http://mean.codingcamp.us/todo/tannerplauche/' + item._id)
            .then(function (response) {
                //                alert("object at id: " + response.id + " was deleted")
                $scope.removeItem(item);
            }, function (response) {
                alert("Item failed to delete");
            });
    };




}]);