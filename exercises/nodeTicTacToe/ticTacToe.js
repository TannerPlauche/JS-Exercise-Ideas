//dependencies
var boardMaker = require("./boardMaker");
var printBoard = require("./printBoard");
var placeLetter = require("./placeLetter");
var placeO = require("./placeO");
var updateBoard = require("./updateBoard");
//variables

//create the board array
var gameBoard = boardMaker(); //This is an array of arrays of objects with the key/value pair "shape:?" [  [{shape:?}],[],[]  ]
//console.log("This is the GAME BOARD" + gameBoard);

//create the pretty board as a variable
var printedBoard = printBoard(gameBoard);
console.log(printedBoard);

var counter = 0
while (counter < 9) {
    if (counter % 2 === 0) {
        currentLetter = "X"
    } else {
        currentLetter = "0"
    }
    //    var currentLetter = placeLetter.getLetter();
    var currentRow = placeLetter.getRow();
    var currentCol = placeLetter.getCol();
    var updatedBoard = updateBoard(gameBoard, currentRow, currentCol, currentLetter);
    console.log(printBoard(updatedBoard));
    counter++;

    if (counter === 9) {
        console.log("Good game!");
    }
};