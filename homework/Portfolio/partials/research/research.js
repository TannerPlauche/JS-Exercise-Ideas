var tannersPortfolio = angular.module("TannersPortfolio");

tannersPortfolio.controller("ResearchController", ["$scope", function ($scope) {
	$scope.foo = null;
	$scope.title = "Research";

	$scope.research = [
		{
			title: "Phoneme Recognition Using Vowel Formants",
			img: "https://pbs.twimg.com/media/CK8mKzlVEAE_b6r.png",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam x ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			link: "http://completespeech.com/vowel-viz/vowelviz-versions/vowelviz-pro/"
	},
		{
			title: "MFCC Data as a foundation for Vowel Recogntion",
			img: "http://a4.mzstatic.com/us/r30/Purple1/v4/a0/4d/13/a04d13e8-8390-a11f-7d5b-a0f590ebf130/screen322x572.jpeg",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatesi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			link: "http://completespeech.com/speechracer/"
	},
		{
			title: "North American English Vowel Quality",
			img: "/images/VowelVizOnline.png",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatia veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			link: "https://github.com/BYU-ODH/apeworm"

	},
		{
			title: "Visual Feedback in Teaching English Pronunciation",
			img: "/images/VowelVizOnline.png",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatia veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			link: "https://github.com/BYU-ODH/apeworm"

	},
		{
			title: "Derivation in Czech Verb Prefixes",
			img: "/images/VowelVizOnline.png",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatia veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			link: "https://github.com/BYU-ODH/apeworm"

	},
		{
			title: "Formant Extraction using JavaScript",
			img: "/images/VowelVizOnline.png",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatia veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			link: "https://github.com/BYU-ODH/apeworm"

	}
	];

}])