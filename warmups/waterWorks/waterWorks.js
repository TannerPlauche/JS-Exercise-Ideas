var runSprinklers = function (currentDayofWeek, currentHour) {
	var day = null;
	switch (currentDayofWeek) {
	case "monday":
		day = 'weekday'
		break;
	case "tuesday":
		day = 'weekday'
		break;
	case "wednesday":
		day = 'weekday'
		break;
	case "thursday":
		day = 'thursday'
		break;
	case "friday":
		day = 'weekday'
		break;
	case "saturday":
		day = 'weekend'
		break;
	case "sunday":
		day = 'weekend'
		break;
	};
	if (day === 'weekday' && currentHour >= 6 && currentHour < 8) {
		console.log(true);
	} else if (day === 'thursday') {
		console.log(false);
	} else if (day = "weekend" && currentHour >= 9 && currentHour < 11) {
		console.log(true);
	}
};

runSprinklers('friday', 6); //true
runSprinklers('monday', 7); //true
runSprinklers('thursday', 8); //false
runSprinklers('saturday', 9); //true
runSprinklers('wednesday', 5); //false
runSprinklers('tuesday', 9); //false
runSprinklers('friday', 7); // true
runSprinklers('sunday', 6); // false
runSprinklers('thursday', 9); //false
runSprinklers('saturday', 10); //true
runSprinklers('thursday', 11); //false
runSprinklers('friday', 9); //false
runSprinklers('wednesday', 7); // true