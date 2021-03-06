/* FreeCodeCamp solutions
******************************

  Q: Return true if the given string is a palindrome. Otherwise, return false.
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case.
  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

// ORIGINAL SOLUTION
function palindrome(str) {
  
  //This replaces all non-alphaneumeric characters with an empty string...could just use ' \[/W_]\g ' instead.
  var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  //replaces all whitespace characters it finds in string.
  var finalString = punctuationless.replace(/\s+/g,"").toLowerCase();
  //test if finalstring equal to a reversed version of itself.
  if (finalString === finalString.split("").reverse().join("")) return true;
  else return false;
  
}
palindrome("eye");

//QUICKER SOLUTION >> GOLFED AF... NOT OF MY OWN
 return str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');

// ANOTHER SOLUTION >> THIS IS MY OWN, FEW MONTHS LATER... I TRIED THO 💩
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return str == str.split("")
                   .reverse()
                   .join("") ? true : false;
