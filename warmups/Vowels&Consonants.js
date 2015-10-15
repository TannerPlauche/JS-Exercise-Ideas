
var testString = 'bcdeaiuo.';
// var vowelArray = ['a', 'e', 'i', 'o', 'u'];
var vowelString ='aeiou'
// var consonantArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
// 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
// var consonantString = 'bcdfghjklmnpqrstvwxyz';

function countVowels (str){
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var numberOfVowels = 0;
  for(i=0; i < str.length; i++){
    if (vowelString.indexOf(str[i]) > -1){
      numberOfVowels ++;
    }
  }
return numberOfVowels;

}

var test = countVowels(testString);
console.log(test);



///////////////////////////////////Return number of consonants
function countConsonants (str){
  var numberOfConsonants = 0;
  var consonantString = 'bcdfghjklmnpqrstvwxyz';

  for (i = 0; i < str.length; i++){
    if (consonantString.indexOf(str[i]) > -1){
      numberOfConsonants++;
    }
  }
  return numberOfConsonants;
};

var testConsonants = countConsonants(testString);
console.log(testConsonants);

console.log('The number of consonants is: ' + testConsonants + '  The number of vowels is : ' + test +'.');
