function isCaps(letter) {  
  return letter === letter.toUpperCase();
}


console.log(isCaps("b"));

var aString ="My name is Tanner Plauché."

function invertCaps(someString){
  var invertedString = ""
  for (i=0; i<someString.length; i++){
      if (isCaps(someString[i]) === true){
          invertedString += someString[i].toLowerCase();
      } else {
            invertedString += someString[i].toUpperCase();      }
  }  
  return invertedString;  
};

console.log(invertCaps(aString));

