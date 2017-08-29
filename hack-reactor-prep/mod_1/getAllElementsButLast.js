/*
Instructions from your teacher:
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

Starter Code :
function getAllElementsButLast(array) {
  // your code here
}
*/

/*SOLUTION*/
function getAllElementsButLast(array) {
  // your code here
  array.pop();
  return array;
}