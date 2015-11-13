var app = angular.module("etsyApp");

app.service("decorService", ["$http", function ($http) {
	//Array where listingData and corresponding images will be pushed. 
	var baseUrl = "https://openapi.etsy.com/v2/";
	var shopUrl = "shops/Plauche/"
	var listingsUrl = "listings/";
	var apiKey = "api_key=87yw7tt8c9cnwmqx70gpmyaq"

	this.listings = []; + images

	$http.get("https://openapi.etsy.com/v2/shops/Plauche/listings/active?api_key=87yw7tt8c9cnwmqx70gpmyaq").then(function (response) {
		////what to do with data
		this.listingsData = response.data;
		for
		get(https: openapi.etsy.com / v2 / listings / +
			var +/images?api_key=87yw7tt8c9cnwmqx70gpmyaq )

		}, {
			////insert error response here
			function (response) {
				alert("Request Failed: Status:" + response.status + " code: " +
					response.statusCode + " text: " + response.statusText);
			}
		}

	});

}]);



//Gets shop 's info
//https: //openapi.etsy.com/v2/shops/Plauche?api_key=87yw7tt8c9cnwmqx70gpmyaq

//Gets shop's listings
//https: //openapi.etsy.com/v2/shops/Plauche/listings/active?api_key=87yw7tt8c9cnwmqx70gpmyaq

//https://openapi.etsy.com/v2/listings/listingid/images?api_key=87yw7tt8c9cnwmqx70gpmyaq
//Gets listing's images