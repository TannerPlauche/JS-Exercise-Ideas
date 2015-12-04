function printBoard(aBoardArray) {
    var printedBoard = [];
    var rows = 3; //aBoardArray.length;

    for (z = 0; z < rows; z++) {
        var row = [];
        //        printedBoard.push(row);
        for (q = 0; q < rows; q++) {
            row.push(aBoardArray[z][q])
        }
        var newRow = row.join(" ")
        printedBoard.push(newRow);
    }
    return printedBoard.join("\n");

};

module.exports = printBoard;