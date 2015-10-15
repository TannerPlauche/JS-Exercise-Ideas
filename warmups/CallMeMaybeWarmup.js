
var namesArray = ["Tanner", "Sarah", "Nikolai", "Simon", "Ana", "Tom", "Kendra", "Karen", "Winnie", "Laura"];



var dontCall =function (name){
        if (name[i].length % 2 === 1){
            console.log("Don't call" + name +". Their name has an odd amount of numbers");
        }
}

var call = function (name){
    if (name.length % 2 === 0){
    console.log("Calling " + name + ".");
    }
}

var sendText = function (name){
    var numberOfA = [];
    for (i=0; name.length; i++){
        if (name[i] === 'a') {
            numberOfA.push(name[i]);
        }
    if (numberOfA.length > 1){

    console.log("Calling " + name +".");
    }
    }
}



function attemptCall(myArray){
    for (i=0; i < myArray.length; i++){
    dontCall(myArray[i]);
    call(myArray[i]);
    sendText(myArray[i]);
    }
};

attemptCall(namesArray);


// Solution
// var names = ["Paula", "Bill", "Jane", "Joe", "Fred", "Bob", "Dallin", "James", "Andy", "Don"]
//
// var dontCall = function(name) {
//     console.log("You did not call " + name);
// }
//
// var call = function(name) {
//     console.log("You talked to " + name);
// }
//
// var sendText = function(name) {
//     console.log("You texted " + name);
// }
//
// var attemptCall = function(name, dontCall, call, sendText) {
//
//     var aCount = 0;
//
//     for(var i = 0; i < name.length; i++) {
//         if (name[i].toLowerCase() === 'a') {
//             aCount++;
//         }
//     }
//
//     console.log("Contacting " + name + '...');
//
//     setTimeout(function(){
//         if (aCount > 1) {
//             sendText(name);
//         } else {
//             if (name.length % 2 === 1) {
//                 dontCall(name);
//             } else {
//                 call(name);
//             }
//         }
//     }, 2000);
//
// }
//
// for (var i = 0; i < names.length; i++) {
//     attemptCall(names[i], dontCall, call, sendText);
// }
