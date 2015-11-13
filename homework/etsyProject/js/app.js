var app = angular.module("etsyApp", ["ngRoute"]);


app.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
		$httpProvider.defaults.headers.common["Accept"] = "application/json";
		$httpProvider.defaults.headers.common["Content-Type"] = "application/json";

    }
]);

app.controller("decorController", ["$scope", "$http", function ($scope, $http) {

	var baseUrl = "https://openapi.etsy.com/v2/";
	var shopUrl = "shops/Plauche/"
	var imagesUrl = "listings/";
	var imagesUrl2ndPart = "/images?"
	var apiKey = "api_key=87yw7tt8c9cnwmqx70gpmyaq"
	var tempListingId = "";
	var tempListingObj = {};

	$scope.listings = [];

	$http.get("https://openapi.etsy.com/v2/shops/Plauche/listings/active?api_key=87yw7tt8c9cnwmqx70gpmyaq")
		.then(function (response) {
			////what to do with data
			$scope.rawListingsData = response.data.results;
			//loop through data and construct object
			for (i = 0; i <= $scope.rawListingsData.length; i++) {
				tempListingObj = $scope.rawListingsData[i].listing_id;
				tempListingObj.id = $scope.rawListingsData[i].listing_id;
				tempListingObj.title = $scope.rawListingsData[i].title;
				tempListingObj.description = $scope.rawListingsData[i].description;
				tempListingObj.images = [];
				//get images
				$http.get(baseUrl + imagesUrl + tempListingId + imagesUrl2ndPart + apiKey)
					.then(function (imgResponse) {
						$scope.listingImages = imgResponse.data.results;
						for (x = 0; x <= $scope.listingImages.length; x++) {
							tempListingObj.images.push($scope.listingImages[x]);
						};
						$scope.listings.push(tempListingObj);

					}, {
						////insert error response here
						function (response) {
							alert("Image Get Request Failed: Status:" + response.status + " code: " + response.statusCode + " text: " + response.statusText);
						}

					}), {
						////insert error response here
						function (response) {
							alert("Request Failed: Status:" + response.status + " code: " +
								response.statusCode + " text: " + response.statusText);
						}
					}
			}
		});


}]);
//End of controller//////////


//Gets shop 's info
//https: //openapi.etsy.com/v2/shops/Plauche?api_key=87yw7tt8c9cnwmqx70gpmyaq

//Gets shop's listings
//https: //openapi.etsy.com/v2/shops/Plauche/listings/active?api_key=87yw7tt8c9cnwmqx70gpmyaq

//Gets listing's images
//https://openapi.etsy.com/v2/listings/listingid/images?api_key=87yw7tt8c9cnwmqx70gpmyaq