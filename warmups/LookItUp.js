var readlinesync = require('readline-sync')

var programRunning = true;

var dictionary = [];

function DictionaryEntry (word, definition){
    this.word = word,
    this.definition = definition;
}

function addNewWordToDictionary(word, definition) {
    var newEntry = new DictionaryEntry(word, definition);
    dictionary.push(newEntry);
}

function displayWordDefinition(word) {
    for (i=0; i< dictionary.length; i++) {
        if (word === diction[i]) {
            console.log("Word: " + dictionary[i].word) + " Definition: " + dictionary[i].defintion

        } else {
            console.log("Sorry, that word is not in the dictionary.")
        }
    }
}




    while (programRunning) {
        console.log("What would you like to do? ");
        console.log("");
        console.log("[1]: Lookup a word");
        console.log("[2]: Add a new word");
        console.log("[3]: Quit the program (and loose all the words you added!)");
        var choice = readlinesync.question('Enter a number to select what you would like to do:  ');
        return choice
    }

    var usersChoice = getDirecttion();



    function runUsersChoice (choice){
        if (choice === '1'){
            var wordSearch = readlinesync.question("What word would you like to look up?");
            displayWordDefinition(wordSearch);
        } else if ( choice === '2') {
            var newWord = readlinesync.question("What word would you like to add? :  ");
            var newDef = readlinesync.question("What is the definition of the word" + newWord + "? :  " );
            addNewWordToDictionary(newWord, newDef);
        } else if (choice === '3'){
            programRunning = false;
        }
    }

    //runUsersChoice(usersChoice);


    //end function
// Bob's code solution
//     var readline = require("readline-sync");
// var dictionary = {};
// var dictionaryIsRunning = true;
//
// function addNewWordToDictionary(word, definition) {
//     dictionary[word] = definition;
//     console.log("Your word has been added to the dictionary!");
// }
//
// function getNewWordAndDefinition() {
//     var newWord = readline.question("What word would you like to add?: ");
//     var definition = readline.question("What is the definition of '" + newWord + "'?: ");
//     addNewWordToDictionary(newWord, definition)
// }
//
// function wordLookup() {
//     var word = readline.question("What word do you want to look up?: ");
//     var definition = dictionary[word];
//     console.log(word + " means: " + definition);
// }
//
//
// function runUsersChoice(choice) {
//
//     switch (choice) {
//         case "1":
//             wordLookup();
//             break;
//
//         case "2":
//             getNewWordAndDefinition();
//             break;
//
//         case "3":
//             console.log("Thanks for using the dictionary!")
//             dictionaryIsRunning = false;
//             break;
//
//         default:
//             console.log("You must choose either 1, 2, or 3!");
//             break;
//     }
//
//
//     console.log(""); // Print a blank line to separate things a bit
// }
//
// console.log("**********************************");
// console.log("*   Welcome to the dictionary!   *");
// console.log("**********************************");
// console.log("");
//
// while (dictionaryIsRunning) {
//     console.log("What would you like to do? ");
//     console.log("");
//     console.log("[1]: Lookup a word");
//     console.log("[2]: Add a new word");
//     console.log("[3]: Quit the program (and loose all the words you added!)");
//     var choice = readline.question("Please type 1, 2, or 3: ");
//     runUsersChoice(choice);
// }
