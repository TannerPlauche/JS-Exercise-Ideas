var arrayOfNums = [76, 45, 923];

function orderArray(anArray) {
    return anArray.sort(function (a, b) {
        return a - b
    })
};

console.log(orderArray(arrayOfNums));
// console.log(createProduct(arrayOfNums));

function findFactor(anArray) {
    var newArray = orderArray(anArray);
    var divisors = [];
    var lowestCommonDivisor = null;

    for (i = 0; i <= newArray.length; i++) {
        for (x = newArray[0]; x > 0; x--) {
            if ((newArray[i] % x) === 0) {
                divisors.push(x);
            }
        }
    }

    console.log("divisors" + divisors);

    divisors = orderArray(divisors);
    for (i = 0; i <= divisors.length; i++) {
        var isADivisor = [];
        for (x = 0; x <= divisors.length; i++) {
            if (x === divisors[i]) {
                isADivisor.push[x];
            }
        }
        if (isADivisor.length === newArray.length) {
            lowestCommonDivisor = divisors[i];
        }
    }
    console.log(lowestCommonDivisor);
    return lowestCommonDivisor;

};

console.log("factor" + findFactor(arrayOfNums));