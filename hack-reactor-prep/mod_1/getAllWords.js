/*
Instructions from your teacher:
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in the sentence. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

Starter Code :
function getAllWords(str) {
  // your code here
}
*/

/*SOLUTION*/
function getAllWords(str) {
  // your code here
  if (str === "") return [];
  return str.split(" ");
}