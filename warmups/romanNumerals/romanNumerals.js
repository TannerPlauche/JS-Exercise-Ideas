 var num = 7297

 var dictionary = {
     1: 'I',
     2: 'II',
     3: 'III',
     4: 'IV',
     5: 'V',
     6: 'VI',
     7: 'VII',
     8: 'VIII',
     9: 'IX',
     10: 'X'
 }

 function makeRoman(anum) {
     newNum
     var romanNum = ""
     for (i = anum.length; i >= 1; i--) {
         if (i === )
     }
 }

 function romanize(aNum) {
     if (!+num)
         return false;
     var digits = String(+aNum).split(""),
         key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
               "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
               "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
         roman = "",
         i = 3;
     while (i--)
         roman = (key[+digits.pop() + (i * 10)] || "") + roman;
     return Array(+digits.join("") + 1).join("M") + roman;
 }

 function toRoman(n) {
     var r = '',
         decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
         roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
     for (var i = 0; i < decimals.length; i++) {
         while (n >= decimals[i]) {
             r += roman[i];
             n -= decimals[i];
         }
     }
     return r;
 }



 var roman = new Array();
 roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 var decimal = new Array();
 decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 function decimalToRomanSimple(value) {
     if (value <= 0 || value >= 4000) return value;
     var romanNumeral = "";
     for (var i = 0; i < roman.length; i++) {
         while (value >= decimal[i]) {
             value -= decimal[i];
             romanNumeral += roman[i];
         }
     }
     return romanNumeral;
 }

 console.log(romanize(num));
 console.log(toRoman(num));
 console.log(decimalToRomanSimple(num));