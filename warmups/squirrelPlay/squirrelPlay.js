var temp = 92;
var season = "spring";

var squirrelPlay = function (aTemp, aSeason) {
    if (60 <= aTemp && aTemp <= 100 && aSeason) {
        console.log(true);
    } else if (60 <= aTemp && aTemp <= 90 && aSeason === false) {
        console.log(true);
    } else {
        console.log(false)
    }
};

//var doThey = doTheSquirrelsPlays(temp, season);
//console.log(doThey);
squirrelPlay(50, true); // false
squirrelPlay(50, false); // false
squirrelPlay(60, true); // true
squirrelPlay(60, false); // true
squirrelPlay(75, true); // true
squirrelPlay(75, false); // true
squirrelPlay(90, true); // true
squirrelPlay(90, false); // true
squirrelPlay(95, true); // true
squirrelPlay(95, false); // false
squirrelPlay(100, true); // true
squirrelPlay(100, false); // false
squirrelPlay(110, true); // false
squirrelPlay(110, false); // false