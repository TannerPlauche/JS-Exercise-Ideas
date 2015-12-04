function updateBoard(board, row, col, letter) {
    board[row][col] = letter;
    return board;
}

module.exports = updateBoard