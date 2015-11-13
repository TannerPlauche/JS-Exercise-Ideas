var getRandomNumber = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};

console.log(getRandomNumber(0,25));
function passwordGenerator (len) {
    var charSet = "abcdefghijklmnopqrstuvwxyz";
    var numSet = [0,1,2,3,4,5,6,7,8,9];
    var symbolSet = ["!", "@", "#", "$", "%", "&", "*"];
    var randomPassword = "";
    for (i=0;i<=len;i++){
        var charSelectorInt = parseInt(getRandomNumber(1,50));
        switch (charSelectorInt) {
            case 1:
                randomPassword += charSet[getRandomNumber(0,25)].toUpperCase();
                break;
            case 2:
                randomPassword += charSet[getRandomNumber(0,25)];
                break;
            case 3:
                randomPassword += numSet[getRandomNumber(0,9)];
                break;
            case 4:
                randomPassword += symbolSet[getRandomNumber(0,6)];
                break;
            default:
                console.log('ThisDidntWorkThisTime');
                break;
            }
    // console.log(charSelectorInt);
    }
console.log("Random Password: " + randomPassword);
};

passwordGenerator(12);
