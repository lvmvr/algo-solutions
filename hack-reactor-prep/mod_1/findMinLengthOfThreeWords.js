/*
Instructions from your teacher:
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

Starter Code :
function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
}
*/

/*SOLUTION*/
function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var myArr = [];
  myArr.push(word1, word2, word3);
  myArr.sort(function(a, b) {
    return a.length - b.length;
  });
  console.log(myArr);
  return myArr[0].length;
}