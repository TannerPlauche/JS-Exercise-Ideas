var tannersPortfolio = angular.module("TannersPortfolio");

tannersPortfolio.controller("EducationController", ["$scope", function ($scope) {
	$scope.foo = null;
	$scope.name = "Jim";



	$scope.title = "Education"


	$scope.education = [
		{
			school: "Coding Campus",
			logo: "https://pbs.twimg.com/profile_images/616308233423040512/x8-EsnPx.jpg",
			degree: "MEAN Full Stack Development",
			description: "Web Application Development, JavaScript, AngularJS, Express, NodeJS",
			accomplishments: ["Completed independent development contracts while still in school."]
	},
		{
			school: "Georgia State University",
			logo: "http://lithium.gsu.edu/GSC/Live/SEC/images/GSUlogo.gif",
			degree: "MA, Applied Linguistics",
			description: "I emphasized in corpus linguistics,  computational language analysis, and phonetics. My primary work involved creating new pronunciation models for non-native English speakers. Other courses incuded topics such as ESL education, Intercultural Communication, Grammar, and others.",
			accomplishments: ["Completed research assistantship", "Create a course for teaching English pronunciation based on non-native speaker examples", "Wrote language assessment exams for the Defense Language Institute"]
	},
		{
			school: "Brigham Young University",
			logo: "http://image.listpipe.com/byu-exceptional-living.jpg",
			degree: "BA, Linguistics",
			description: "In my undergraduate studies I minored in French and did languages emphases in Russian and Czech. I focused on phonetics, grammatical structures of Slavic languages, and computational analysis of speech.",
			accomplishments: ["Assisted in natural language processing projects", "Did qualitative reasearch of Slavic verb systems", "Received athletic scholarship", "Athletic Academic Honor Role"]
	}
	];

}])