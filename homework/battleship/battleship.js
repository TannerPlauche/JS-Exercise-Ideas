var readLineSync = require("readline-sync");

var rows = 10;
var cols = 10;
var grid = [];
var dotGrid = [];
var numberOfBoats = 20;


var createGrid = function () {
    for (var i = 0; i < rows; i++) {
        grid.push([]);
        for (var x = 0; x < cols; x++) {
            grid[i].push({
                row: i,
                col: x,
                mark: '🌊',
                ship: false,
            });
        }
    }
};

//create the grid of objects HERE::::::
createGrid();

//Prints the board as a grid so people can see how they are interacting with it. 
function printBoard(anArray) {
    var displayArray = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var x = 0; x < cols; x++) {
            row.push(grid[i][x].mark);
        }
        var newRow = row.join(" ");
        displayArray.push(newRow);
    }
    console.log(displayArray.join("\n"));
}

//////////////////////////////////////////////////
//
//Randomly generates ships in the grid.         //
//
//////////////////////////////////////////////////  


//gets a random number between 0 and 10
//var randomCoord = getRandomNumInRange(0, numberOfBoats);
function getRandomNumInRange(min, max) {
    return (Math.random() * (max - min) + min);
}

//creates coordinates for boats and makes sure that 20%
//of the coordinates are boats.
function getBoats() {
    var boatCoords = [];
    for (var i = 0; i < numberOfBoats; i++) {
        var locationX = parseInt(getRandomNumInRange(0, rows));
        var locationY = parseInt(getRandomNumInRange(0, cols));
        boatCoords.push({
            xCoord: locationX,
            yCoord: locationY
        });
        if (boatCoords.indexOf({
                xCoord: locationX,
                yCoord: locationY
            }) > -1) {
            numberOfBoats += 1;
        }
        grid[locationX][locationY].ship = true;
    }
}

getBoats();

//////////////////////////////////////////////////
//
//Tells me the number of ships in the sea            //
//
////////////////////////////////////////////////// 
var getNumberOfShips = function () {
    var numberOfShips = 0;
    for (var i = 0; i < rows; i++) {
        for (var x = 0; x < cols; x++) {
            if (grid[i][x].ship === true) {
                numberOfShips += 1;
            }
        }
    }
    return numberOfShips;
};


var numberOfShipsinGrid = getNumberOfShips();

//////////////////////////////////////////////////
//Set up board in display before player guese coordinates
printBoard();
//////////////////////////////////////////////////
//Takes a guess from the user
//Updates the board after a guess.              //
//Tells the user if guess was a hit
//displays hit
////////////////////////////////////////////////// 
var updateBoard = function (x, y) {
    console.log("There are " + numberOfShipsinGrid + " ships out there. Guess coordinates to fire at a ship.")
    var coordRow = parseInt(readLineSync.question("Guess a row (1-10): ") - 1);
    if (coordRow > 10 || coordRow < 0 || isNaN(coordRow)) {
        coordRow = parseInt(readLineSync.question("Your coordinate was not a number between 1 and 10. Guess a row (1-10): ") - 1);
    }
    var coorCol = parseInt(readLineSync.question("Guess a column)1-10): ") - 1);
    if (coorCol > 10 || coordRow < 0 || isNaN(coorCol)) {
        coorCol = parseInt(readLineSync.question("Your coordinate was not a number between 1 and 10. Guess a column (1-10): ") - 1);
    }
    if (grid[coordRow][coorCol].ship === true) {
        grid[coordRow][coorCol].mark = '💥';
        numberOfShipsinGrid -= 1;
        setTimeout( printBoard(),1000);

        setTimeout(console.log("A hit, a hit!. You sunk a ship!"), 1000);
    } else {
        grid[coordRow][coorCol].mark = '💦';
        setTimeout(printBoard(), 1000);
        setTimeout(console.log("You missed! No ship there. "), 1000);
    }
};

while (numberOfBoats > 0) {
    updateBoard();
};