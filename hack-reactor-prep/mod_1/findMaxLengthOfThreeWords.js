/*

Instructions from your teacher:
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

Starter Code :
function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
}

*/

/* SOLUTION */
function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var myArr = [];
  myArr.push(word1, word2, word3);
  myArr.sort(function(a, b) {
    return b.length - a.length;
  });
  return myArr[0].length;
}







