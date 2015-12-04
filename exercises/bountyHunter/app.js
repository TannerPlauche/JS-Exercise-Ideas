var app = angular.module("MyApp", ["router"]);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

  $scope.firstName = null;
  $scope.lastName = null;
  $scope.living = Boolean;
  $scope.amount = 0;
  $scope.type = null;
  $scope.image = '';
  $scope.currentBounties = [];
  $scope.bountyNumber = $scope.currentBounties.length;
  $scope.livingOptions = [{
      title: 'Living',
      value: true
        },
    {
      title: 'Dead',
      value: false
        }]
  $scope.amountOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'More than 10'];
  $scope.typeOptions = ['Sith', 'Jedi', 'Wookie', 'Hutt', 'Ewok', 'Other'];

  $scope.editBountyToggle = true;
  $scope.ToggleBounty = function () {
    if ($scope.editBountyToggle === true) {
      $scope.editBountyToggle = false;
    } else {
      $scope.editBountyToggle = true;
    }
  };


  $http.get("http://localhost:9000/bounty")
    .then(function (response) {
      $scope.currentBounties = response.data;
    }, function (response) {
      alert("Request Failed: Status:" + response.status + " code: " +
        response.statusCode + " text: " + response.statusText);
    })

  $scope.postBounty = function () {

    $scope.bountyInfo = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      image: $scope.image,
      status: $scope.living,
      amount: $scope.amount,
      type: $scope.type,
    }

    $http.post("http://localhost:9000/bounty", $scope.bountyInfo).then(
      function (reponse) {
        console.log("Data Submitted");
        console.log($scope.bountyInfo);
        $scope.updateBounties();
      }
    );
    //    setTimeout($scope.updateBounties, 1000);
  };

  $scope.updateBounties = function () {
    $http.get("http://localhost:9000/bounty")
      .then(function (response) {
        $scope.currentBounties = response.data;
      }, function (response) {
        alert("Request Failed: Status:" + response.status + " code: " +
          response.statusCode + " text: " + response.statusText);
      })
  };


  $scope.delete = function (aBounty) {
    $http.delete("http://localhost:9000/bounty/" + aBounty)
      .then(function (response) {
        console.log("object deleted");
      })
    setTimeout($scope.updateBounties, 1000);
  }


  $scope.editBounty = function (aBounty) {

    $http.put("http://localhost:9000/bounty/" + aBounty._id, aBounty).then(
      function (response) {
        console.log("Put edit request sent");
        $scope.updateBounties();
        $scope.ToggleBounty();

      },
      function (response) {
        console.log("Put request failed to send")
      });



  }







      }])