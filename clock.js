var secondDegrees = 6;
var minuteDegrees = 1;
var hourDegrees = 1;

var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
// el.style.transform = "rotate(" + degrees + "deg)";

function secondMove() {
 	second.style.transform = "rotate(" + secondDegrees + "deg)";
 	secondDegrees = (secondDegrees +6);
}

function minuteMove() {
	minute.style.transform = "rotate(" + minuteDegrees + "deg)";
	minuteDegrees = minuteDegrees +1;
}

function hourMove() {
	hour.style.transform = "rotate(" + hourDegrees + "deg)";
	hourDegrees = hourDegrees+1;
}

// setInterval(function(){
// 	second.style.transform = "rotate(" + secondDegrees + "deg)";
// 	secondDegrees = (secondDegrees +6);
// }, 1000);

setInterval(secondMove, 1000);
setInterval(minuteMove, 10000);
setInterval(hourMove, 120000);

// setInterval(function(){
// 	console.log("Hello")
// }, 2000);