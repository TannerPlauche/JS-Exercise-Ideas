var start = document.getElementById('start').addEventListener("click");
var stop = document.getElementById('stop').addEventListener('click');
var clear = document.getElementById('clear').addEventListener('click');

var timer= document.getElementById('timer')

	var currentTime = 0
	var isTimerRunning = false

		var updateTime = function () {
		    document.getElementById('current-time').innerHTML = currentTime.toFixed(2);

		}

	var incrementTime = function () {
		if (isTimerRunning == false) {
			isTimerRunning = true;
			intervalHandler = setInterval(function (){
					currentTime += .01;
					updateTime();
			}, 10)
		} else{
			return ;
		};


	}

	var stopTime = function () {
		clearInterval(intervalHandler);
		isTimerRunning = false;
	};

var clearTime = function(){
	clearInterval(intervalHandler);
	isTimerRunning = false;
	currentTime = 0;
};
//start.onClick("incrementTime");

//start.addEventListener("onClick",incrementTime)

	document.getElementById('start').addEventListener('click', function (){
	   incrementTime()
	})

	document.getElementById('stop').addEventListener('click', function (){
		 stopTime()
	})

	document.getElementById('clear').addEventListener('click', function (){
		 clearTime();
		 updateTime();
	})
