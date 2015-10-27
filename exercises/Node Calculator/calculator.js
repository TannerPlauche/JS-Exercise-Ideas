var readlinesync = require('readline-sync')

var firstNum = readlinesync.question('What is your first number?');
console.log('You entered: ' + firstNum);

var secondNum = readlinesync.question('What is your second number?');
console.log('You entered:' + secondNum);

var action = readlinesync.question('What do you want to do? (add, subtract, multiply, divide):')

var firstNum = parseInt(firstNum);     //change prevous string variable to int
var secondNum = parseInt(secondNum);   // So that they can be added


if (action == 'add') {
  var result = firstNum + secondNum;
  console.log(result);
} else if (action == 'subtract'){
    var result = firstNum - secondNum;
    console.log(result);
} else if (action == 'multiply'){
      var result = firstNum * secondNum;
      console.log(result);
} else if (action == 'divide'){
    var result = firstNum / secondNum;
    console.log(result);
} else{
    console.log('That is not a valid choice. Please try again.')
};
