var tannersPortfolio = angular.module("TannersPortfolio", ['ngRoute', 'pendolytics']);

//Routing
tannersPortfolio.config(function ($routeProvider) {
	$routeProvider
		.when("/skills", {
			templateUrl: "/partials/skills/skills.html",
			controller: "SkillsController"
		})
		.when("/portfolio", {
			templateUrl: "/partials/portfolio/portfolio.html",
			controller: "PortfolioController"
		})
		.when("/experience", {
			templateUrl: "/partials/experience/experience.html",
			controller: "ExperienceController"
		})
		.when("/education", {
			templateUrl: "/partials/education/education.html",
			controller: "EducationController"
		})
		.when("/research", {
			templateUrl: "/partials/research/research.html",
			controller: "ResearchController"
		})
		.when("/aboutMe", {
			templateUrl: "/partials/aboutMe/aboutMe.html",
			controller: "AboutMeController"
		})
		.when("/contact", {
			templateUrl: "/partials/contact/contact.html",
			controller: "ContactController"
		}).when("/home", {
			templateUrl: "/partials/home/home.html",
			controller: "HomeController"
		})
		.otherwise({
			redirectTo: '/home'
		});
})