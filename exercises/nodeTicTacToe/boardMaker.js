function createBoard() {
    var squareBoardSize = 3;
    var board = [];
    for (i = 0; i < squareBoardSize; i++) {
        board.push([]);
        for (x = 0; x < squareBoardSize; x++) {
            board[i].push("?");
        }
    }
//    console.log("This is the original" + board);
    return board;
}

module.exports = createBoard;