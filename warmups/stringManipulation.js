var readlinesync = require('readline-sync')
console.log('Hi, my name is Chlum');

var userName = readlinesync.question('What is your first name?');
userName = userName.toUpperCase();
console.log('Nice to meet you ' + userName + "!");
console.log('I know I\'m just a terminal but I really enjoy art.');
var favColor = readlinesync.question('What is your favorite color?');

var favAnimal = readlinesync.question('What about animals? What\'s you favorite animal?');

console.log('I bet you would love a ' + favColor + ' ' + favAnimal + ' huh?' );
console.log('I\'ve never seen one though.');
console.log('But, I haven\'t seen anything ever really.');
console.log('You know, I have never dreamt either');
var dreamString = readlinesync.question("Tell me about one of your dreams. ");
var dreamLength= dreamString.length;
console.log('Sorry, I fell asleep. Dreams, ya\' know? All I caught was \n \"' + dreamString.substring(dreamLength/2, dreamLength) + '\".');
var dreamString = readlinesync.question("Tell me about one of your dreams. ");

console.log('You said, \"' + dreamString + '.\" That is a beautiful story.');
