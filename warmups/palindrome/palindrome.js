function isPalindrome(word) {
  word = word.toLowerCase();
  var reversed = word.toLowerCase().split("").reverse().join('');
  if (reversed === word) {
    console.log(true);
  } else {
    console.log(false);
  }
};


isPalindrome("Tanner"); //false
isPalindrome("Bob"); //true
isPalindrome("Racecar"); //true
isPalindrome("abuttuba"); //true
isPalindrome("horse"); //false
isPalindrome("Berry"); //false
isPalindrome("abababababa"); //true
isPalindrome("Ana"); //true