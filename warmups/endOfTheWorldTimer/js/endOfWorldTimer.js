var secondsToEndOfTheWorld = 3.00;
var timerDisplay = document.getElementById("timerDisplay");
var start = document.getElementById('start');
var stop = document.getElementById('stop');

//var start = document.getElementById('start').addEventListener('click', function() {
//    decrementTime();
//});



//                                                              
//var countDown = function (num){
//    num -= 1
//}

var isTimerRunning = false;

var updateTimer = function () {
    document.getElementById("timerDisplay").innerHTML = secondsToEndOfTheWorld.toFixed();
}

var intervalHandler = null;

var decrementTime = function () {
    if (isTimerRunning === false) {
//                isTimerRunning = true;
        secondsToEndOfTheWorld -= .01;
        updateTimer();
    } else {
        return;
    }
}

//intervalHandler = setInterval(decrementTime, 10);



start.addEventListener('click', function () {
    intervalHandler = setInterval(function () {
        decrementTime();
        if (secondsToEndOfTheWorld < 0) {
            clearTime();
        }
    }, 10)

});


var clearTime = function () {
    isTimerRunning = false;
    timerDisplay.innerHTML = "KABOOM! The world is over. Have a nice day.";
    clearInterval(intervalHandler);
    secondsToEndOfTheWorld = 0;
    updateTimer;
};

stop.addEventListener('click', clearTime);
//
//if (secondsToEndOfTheWorld < .000000001) {
//    timerDisplay.innerHTML = "KABOOM! The world is over. Have a nice day.";
//    clearTime();
//    clearInterval(intervalHandler);
//    isTimerRunning = false;
//    secondsToEndOfTheWorld = 0;
//    updateTimer;
//};