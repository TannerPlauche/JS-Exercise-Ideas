function convertInt(num, sys) {
    if (sys === "B") {
        return num.toString(2);
    } else if (sys === "H") {
        return num.toString(16);

    } else if (sys === "O") {
        return num.toString(8);;

    } else {
        return "Those are not acceptable parameters"
    }
};

console.log(convertInt(654321, 'B'));
console.log(convertInt(654321, 'H'));
console.log(convertInt(654321, 'O'));
console.log(convertInt(654321, 'F'));