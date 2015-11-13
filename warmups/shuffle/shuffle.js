var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var getRandomNumber = function (min, max) {
	return parseInt(Math.random() * (max - min) + min);
};


var randomize = function (anArray) {
	var randomArray = [];
	for (var i = 0; i <= anArray.length; i++) {
		var randomInt = getRandomNumber(0, anArray.length);
		randomArray.push(anArray[randomInt]);
		anArray.splice(randomInt, 1);
		i = 0;
	}
	console.log("with for: " + randomArray);
};


var randomize2 = function (anArray) {
	var anotherrandomArray = [];
	while (anArray.length > 0) {
		for (var item in anArray) {
			var randomInt = getRandomNumber(0, anArray.length - 1);
			anotherrandomArray.push(anArray[randomInt]);
			anArray.splice(randomInt, 1);
			i = 0;
		}
	}
	console.log("with while: " + anotherrandomArray);
};

randomize(array);
randomize2(array);