
var name = "John Jacob Jingle Heimer Schmidt";
var nameArray = name.split(" ");

console.log(nameArray);

var alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var newAlphabet = alphabet.split(" ");


console.log(newAlphabet);
var stringArray = [];

//
//Take array
//add in contents of another array
//
//
//for (i=0; i<nameArray.length; i++){
//    stringArray.push()
//}



for (var i in nameArray) {
    stringArray.push(nameArray[i] + ": " );
    for (var x in newAlphabet){
        stringArray.push(newAlphabet[x]);
    }
    }

stringArray.join(" ");

console.log(stringArray);

