var tannersPortfolio = angular.module("TannersPortfolio");

tannersPortfolio.controller("SkillsController", ["$scope", function ($scope) {
	$scope.foo = null;
	$scope.title = "Skills & Languages";
	$scope.skillslabel = "Digital Languages"
	$scope.languages = "Spoken Languages";
	$scope.show = true;
	$scope.switchShowTrue = function () {
		$scope.show = true;
	};

	$scope.switchShowFalse = function () {
		$scope.show = false;
	};



	$scope.skills = [
		{
			title: "HTML",
			img: "http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
		},
		{
			title: "CSS",
			img: "http://javascript.tutorialhorizon.com/files/2014/11/css3logo.png"
		},
		{
			title: "JavaScript",
			img: "http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png"
		},
		{
			title: "AngularJS",
			img: "https://www.codementor.io/assets/page_img/learn-angularjs.png"
		},
		{
			title: "Node",
			img: "http://amartam.com/images/nodejs1.png"
		},
		{
			title: "Swift",
			img: "https://pbs.twimg.com/profile_images/473550724433858560/tuHsaI2U.png"
		},
		{
			title: "Python",
			img: "http://www.unixstickers.com/image/cache/data/stickers/python/python.sh-600x600.png"
		},
		{
			title: "Mongo Database",
			img: "https://cdn.rawgit.com/dtgm/chocolatey-packages/8f7101024b11677be45a74b45114000b428a9c9b/icons/mongodb.png"
		},
		{
			title: "Git",
			img: "http://2.bp.blogspot.com/-ip6Kiruk784/UypeS9wRz1I/AAAAAAAADA4/2oXVZcqpHnI/s1600/git-logo.png"
		}
	];



	$scope.languageList = [
		{
			title: "French",
			img: "http://images.noosfere.org/couv/g/gallimard-album58105.jpg"
		},
		{
			title: "Russian",
			img: "http://www.sovietposters.com/poster/motherland.jpg"
		},
		{
			title: "Czech",
			img: "http://41.media.tumblr.com/2a316dc80bc928fa7a8eabcbe3a53f8d/tumblr_mzr4jp3ww91r6ivyno1_500.jpg"
		},
		{
			title: "Slovak",
			img: "http://www.t-antik.com/fotos/trampotybrouka171013.jpg"
		},
		{
			title: "Spanish",
			img: "http://ecx.images-amazon.com/images/I/51HBPVo0CIL._SY344_BO1,204,203,200_.jpg"
		},
		{
			title: "Kyrgyz",
			img: "http://ecx.images-amazon.com/images/I/51KDO8qXW8L._SY344_BO1,204,203,200_.jpg"
		}

		]
}]);



/*Javascript, Swift, Python, AngularJS, HTML, CSS,*/