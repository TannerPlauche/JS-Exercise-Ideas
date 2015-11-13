var myArray = [1, 2, 23, 45, 435, 456, 2345, 456, 345, 87,54 ,653 ,453,200, 40000, 50000, 55, 4, 4345, 9493, 56, 12, 46, 20, 48, 29];
var isFactorofBillion = function (someItem){
        if (1000000000 % someItem === 0){
            return true;
        } else {
            return false;
        }
    };


Array.prototype.myFilter = function (callback) {
    var array = this;
    var newArray = [];
    for (i=0;i<=array.length;i++){
        if (callback(array[i]) === true) {
        newArray.push(array[i]);
    }
   }
 return newArray;
};

var newFactoredArray = myArray.myFilter(isFactorofBillion);


//////////////This works
// var newFactoredArray = myArray.filter(function (element) {
//     if (1000000000 % element === 0){
//         return true;
//     } else {
//         return false;
//     }
// });


console.log(newFactoredArray);
