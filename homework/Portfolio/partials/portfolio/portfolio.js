var tannersPortfolio = angular.module("TannersPortfolio");

tannersPortfolio.controller("PortfolioController", ["$scope", function ($scope) {
	$scope.foo = null;
	$scope.title = "Projects & Products";

	$scope.portfolioItems = [
		{
			title: "VowelViz",
			img: "https://pbs.twimg.com/media/CK8mKzlVEAE_b6r.png",
			description: ["     VowelViz is an innovative speech mapping tool that displays vowel production in real-time. With applications in speech therapy, accent reduction/second language learning, and home practice, VowelViz is a versatile and easy to use tool for practicing vowels and the English 'R' sound.",
			"     VowelViz provides a fun and engaging foundation to practice clear and consistent vowels,without guessing,in order to develop and strengthen muscle memory effectively.The app’ s display is designed around the vowel quadrilateral and existing research on average vowel formants.When voicing is detected, an orange ball plots the position of the sound on the screen,presenting an easy to understand visual representation of the vowel.By tracking the movement and position of speech over time, learners can better visualize the movements needed for clear and distinct vowels.This understanding provides the framework to practice making those distinctions clear and precise."],
			link: "http://completespeech.com/vowel-viz/vowelviz-versions/vowelviz-pro/"
	},
		{
			title: "SpeechRacer",
			img: "http://a4.mzstatic.com/us/r30/Purple1/v4/a0/4d/13/a04d13e8-8390-a11f-7d5b-a0f590ebf130/screen322x572.jpeg",
			description: ["    Designed as a reinforcement tool for children and youth who struggle to say R consistently, Speech Racer and Speech Racer Lite are the first and only articulation grading apps in speech therapy!",
"    Speech Racer listens to a user’s actual speech, breaks down the spoken word(s), analyzes the quality of the R sound in the sample, and provides a visual score on 1 of 4 racing meters. Using the built-in scoring feature, users can quickly discover which of the 35 R combinations, blends and positions they need to improve on, select word lists, and practice targeted selections. Users can record their scores for individual words, receive comprehensive scoring percentages for all words practiced, and review trouble words quickly. Speech Racer is the perfect drilling tool for therapy sessions and home practice because it provides immediate, self-monitored feedback that reinforces proper R productions as well as feedback for approximate attempts. By self-monitoring this feedback, students can solidify their understanding of proper speech patterns and develop consistent speech habits that will carry over into their everyday speech."],
			link: "http://completespeech.com/speechracer/"
	},
		{
			title: "VowelViz Online",
			img: "/images/VowelVizOnline.png",
			description: ["    VowelViz Online is a current project that undertaking the challenge of making real-time speech processing and analysis function in the web browser. VowelViz Online is a collaboration between CompleteSpeech and Brigham Young University's Office of Digital Humanities. The project's ojective is to create a tool that can be widely available that will provide visual feedback and reinforcement of vowel quality in order to teach and improve pronunciation."],
			link: "https://github.com/BYU-ODH/apeworm"

	}
	];

}])