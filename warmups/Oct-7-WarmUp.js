//import Math;


///////////////Add function
var addNums = function (x, y) {
    var sum = x + y ;
	return sum;
};

console.log(addNums(2,3))

var findLargestNum = function(x, y, z) {
	Math.max(x, y, z);
	// max returns largest.
}


///////////Is even function
var oddOrEven = function (x){
	if (x % 2 == 0){
        return "Even";
    } else {
	return "Odd";
}
};
console.log(oddOrEven(5))

///////String function warmup
var isStringLong = function (x){
	var len = x.length;
	if (len <= 20){
		return x+x;
	} else {
		return x.substring(0, (len/2) + 1);
	}
}
console.log(isStringLong('This is a string but is it long?'))


//Finbanacci number

var findFibNum = function (x){
    var fibArray= [1];
	var fibNum = 0;
	for (i = 1; i<x; i++){
		fibArray.push(i);
	}
	for (i=0; i <= fibArray.length; i++){
		fibNum += (fibArray[i] + (fibArray[i-1]));
	}
return fibNum;
}
