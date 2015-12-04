var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    $scope.name = "jim";
    $scope.showDetails = false;

    //URL Components
    $scope.baseUrl = "http://www.carqueryapi.com/api/0.3/?";
    $scope.getYearsUrl = "cmd=getYears";
    $scope.getMakes1 = "cmd=getMakes&year=";
    $scope.getMakes2 = "&sold_in_us=1";
    $scope.getModelsPartial1 = "&cmd=getModels";
    $scope.getModelsUrlPartial2 = "&make=";
    $scope.getParamYear = "&year=";
    $scope.trimsBaseUrl = "http://www.carqueryapi.com/api/0.3/?cmd=getTrims&year=";
    $scope.getTrimsPartial2 = "&model="
    $scope.getSpecificModelUrlBase = " http://www.carqueryapi.com/api/0.3/?cmd=getModel&model=";


    //arrays
    $scope.yearsAvailable = [];
    $scope.makesAvailable = [];
    $scope.modelsAvailable = [];
    $scope.trimsAvailable = [];

    $http.get($scope.baseUrl + $scope.getYearsUrl)
        .then(function (response) {
            $scope.years = response.data.Years;
            for (i = $scope.years.max_year; i >= $scope.years.min_year; i--) {
                $scope.yearsAvailable.push(i.toString())
            };
        }, function (response) {
            alert("Request Failed: Status:" + response.status + " code: " +
                response.statusCode + " text: " + response.statusText);
        })

    $scope.getMakes = function (year) {
        $scope.getMakesUrl = $scope.baseUrl + $scope.getMakes1 + year + $scope.getMakes2;
        $http.get($scope.getMakesUrl)
            .then(function (response) {
                    $scope.makes = response.data.Makes;
                    for (i = 0; i < $scope.makes.length; i++) {
                        $scope.makesAvailable.push($scope.makes[i].make_display);
                    };
                },
                function (response) {
                    alert("Request Failed: Status:" + response.status + " code: " +
                        response.statusCode + " text: " + response.statusText);
                })
    };

    $scope.getModels = function (year, make) {
        $scope.getModelsUrl = ("http://www.carqueryapi.com/api/0.3/?cmd=getModels&year=" + year + "&sold_in_us=1&make=" + make);
        $http.get($scope.getModelsUrl)
            .then(function (response) {
                    $scope.models = response.data.Models;
                    $scope.modelsAvailable = [];
                    for (i = 0; i < $scope.models.length; i++) {
                        $scope.modelsAvailable.push($scope.models[i].model_name);

                    };
                },
                function (response) {
                    alert("Request Failed: Status:" + response.status + " code: " +
                        response.statusCode + " text: " + response.statusText);
                })
    };

    $scope.getTrims = function (year, make, model) {
        $scope.getTrimsUrl = ($scope.trimsBaseUrl + year + $scope.getModelsUrlPartial2 + make + $scope.getTrimsPartial2 + model);
        $http.get($scope.getTrimsUrl)
            .then(function (response) {
                    $scope.trims = response.data.Trims;
                    $scope.trimsAvailable = [];
                    for (i = 0; i < $scope.trims.length; i++) {

                        $scope.trimsAvailable.push({
                            trimID: $scope.trims[i].model_name + " " + $scope.trims[i].model_trim,
                            modelID: $scope.trims[i].model_id
                        });
                    };
                },
                function (response) {
                    alert("Request Failed: Status:" + response.status + " code: " +
                        response.statusCode + " text: " + response.statusText);
                })
    };


    $scope.getSpecificModel = function (modelID) {
        $scope.getSpecificModelUrl = ($scope.getSpecificModelUrlBase + modelID);
        $http.get($scope.getSpecificModelUrl)
            .then(function (response) {
                    $scope.specificModel = response.data[0];
                    $scope.showDetails = true;
                    console.log($scope.showDetails);
                    console.log($scope.specificModel);
                    $scope.specificModelDetails = {
                        ID: $scope.specificModel.model_id,
                        year: $scope.specificModel.model_year,
                        make: $scope.specificModel.model_make_id,
                        model: $scope.specificModel.model_name,
                        trim: $scope.specificModel.model_trim,
                        cylinders: $scope.specificModel.model_engine_cyl,
                        horsePower: $scope.specificModel.model_engine_power_hp,
                        driveType: $scope.specificModel.model_drive,
                        mpgCity: $scope.specificModel.model_mpg_city,
                        mpgHW: $scope.specificModel.model_mpg_hwy,
                        mpgCombined: $scope.specificModel.model_mpg_mixed
                    }
                    console.log($scope.specificModelDetails.trim);
                },
                function (response) {
                    alert("Request Failed: Status:" + response.status + " code: " +
                        response.statusCode + " text: " + response.statusText);
                })

    };

    $scope.getVehicleID = function (trim) {
        for (i = 0; i <= $scope.trimsAvailable.length; i++) {
            if ($scope.trimsAvailable[i].trimID === trim) {
                $scope.IdforSelectedVehicle = $scope.trimsAvailable[i].modelID;
            }
        }
        $scope.getSpecificModel($scope.IdforSelectedVehicle);
    };



    $scope.carsIWant = [];
    $scope.addCartoWantList = function (object) {
        $scope.carsIWant.push(object);
        console.log($scope.carsIWant);

    };

    $scope.removeCar = function (item) {
        var index = $scope.carsIWant.indexOf(item);
        $scope.carsIWant.splice(index, 1);
    };





			}])