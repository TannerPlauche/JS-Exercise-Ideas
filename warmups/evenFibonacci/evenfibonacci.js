var arrayOfFibNumbers = [0, 1];
var bigFibNum = null;

for (i = 2; i <= 10; i++) {
    currentFibNumber = arrayOfFibNumbers[i - 1] + arrayOfFibNumbers[i - 2];
    arrayOfFibNumbers.push(currentFibNumber);
            console.log(arrayOfFibNumbers);};

for (var i in arrayOfFibNumbers) {
    if ((arrayOfFibNumbers[i] % 2) === 0) {
        bigFibNum += arrayOfFibNumbers[i];
    };
};
console.log(bigFibNum);