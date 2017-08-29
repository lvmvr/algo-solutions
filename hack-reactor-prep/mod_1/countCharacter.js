/*
Instructions from your teacher:
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

Starter Code :
function countCharacter(str, char) {
  // your code here
}
*/

/*SOLUTION*/
function countCharacter(str, char) {
  // your code here
  var count = 0;
  var arr = str.split("");
  
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === char) {
      count++;
    }
  }
  return count;
}