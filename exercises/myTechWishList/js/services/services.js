var app = angular.module("MyApp");

app.service("dataService", function () {

	this.myWishList = [
		{
			title: "iPhone 6",
			description: "This is a new iOS phone from Apple. It has a great camera, screen resolution, and massive memory",
			price: "$649.00",
			img: "http://store.storeimages.cdn-apple.com/4774/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6/box/iphone6-box-silver-2014_GEO_US?wid=478&hei=595&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1441818303956"
		},
		{
			title: "iPad Air 2",
			description: "This is a sleak new iPad that has a high resolution screen",
			price: "$479.00",
			img: "http://store.storeimages.cdn-apple.com/4774/as-images.apple.com/is/image/AppleInc/aos/published/images/a/ir/air/scene0/air-scene0-right_GEO_US?wid=739&hei=578&fmt=png-alpha&qlt=95&.v=1413463839565"
		},
	];

	this.otherList = [
		{
			title: "Yamaha - 650W 5.1-Channel 3D Home Theater System",
			description: "This really improves the quality of your home theater",
			price: "$459.99",
			img: "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/6866/6866026_sd.jpg;canvasHeight=500;canvasWidth=500"
		},
		{
			title: " Bose Noise Canceling Head Phones",
			description: "These cancel out noise so that you do not hear spectrum crushing unsunoisidal waves.",
			price: "$274.99",
			img: "http://ecx.images-amazon.com/images/I/51l4L5ObYML._SL1024_.jpg"
		},
	]

});