var readLine = require("readline-sync");


module.exports = {
    getLetter: function () {
        return readLine.question("X or O?")
    },
    getRow: function () {
        return (readLine.question("select a row (1-3): ")) - 1
    },
    getCol: function () {
        return (readLine.question("select a column (1-3): ")) - 1
    }
};