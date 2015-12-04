var readLine = require("readline-sync");


module.exports = {
    placeORow: function () {
        return (readLine.question("select a row (1-3): ")) - 1
    },
    placeOCol: function () {
        return (readLine.question("select a column (1-3): ")) - 1
    }
};