var readlinesync = require('readline-sync')
var aString = readlinesync.question("I'm the sploderator Gimme a word, aaaaaany word.   ")

var stringSplodeIt = function (word) {
    var arrayToAddIn = [];
    var arrayToConcatenate = [];
    for (i=0; i<word.length; i++){
        arrayToAddIn.push(word[i]);
        for (x=0; x < arrayToAddIn.length; x++) {
            arrayToConcatenate.push(arrayToAddIn[x]);
        }
    }
    var splodedString = arrayToConcatenate.join("");
    return splodedString;
};

console.log("Your word is sploderated:    " + stringSplodeIt(aString));
