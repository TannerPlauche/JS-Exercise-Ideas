var tannersPortfolio = angular.module("TannersPortfolio");

tannersPortfolio.controller("ExperienceController", ["$scope", function ($scope) {

	$scope.foo = null;
	$scope.name = "Jim";

	$scope.title = "Experience"


	$scope.workExperience = [{
			company: "Family Connect",
			logo: "",
			title: "Junior Developer",
			description: "I created social media tools using Angular directives.",
			accomplishments: "Did it. "
	},
		{
			company: "CompleteSpeech",
			logo: "http://completespeech.com/wp-content/uploads/logo-speech2.png",
			title: "Lead Researcher and Developer",
			description: "I made cool things",
			accomplishments: "I created phonetics tools, programs, and guides. I created phonetics tools, programs, and guides. I created phonetics tools, programs, and guides. "
	}, {
			company: "Avant Assessment",
			logo: "http://avantassessment.com/images/logo_no_desc_small.png",
			title: "Item Writer",
			description: "Wrote items and collected passages",
			accomplishments: "Had successful projects"
	}, {
			company: "Georgia State University",
			logo: "http://carmaux.cs.gsu.edu/~mweeks/gsulogo.gif",
			title: "Graduate Research Assistant",
			description: "Helped in research",
			accomplishments: "Got scholarship",
	},
		{
			company: "Zamandash Press",
			logo: "http://zamandash.kg/uploads/images/b3/51/photo_8d0b322ab1~.jpg",
			title: "Russian Translator",
			description: "I translated",
			accomplishments: "Selected material for public release",
		}, {
			company: "Western Standard",
			logo: "https://www.westernstandard.com/Images/wsLogo.png",
			title: "Slavic Language Manager",
			description: "I translated",
			accomplishments: "Selected material for public release"
			}
	];


}]);