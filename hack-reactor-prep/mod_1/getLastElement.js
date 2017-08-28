/*
Instructions from your teacher:
Write a function called "getLastElement".

Given an array, "getLastElement" returns the last element of the given array.

Notes:
* If the given array has a length of 0, it should return 'undefined'.

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

Starter Code :
function getLastElement(array) {
  // your code here
}
*/

/*SOLUTION*/
function getLastElement(array) {
  // your code here
  // Using "array[-1]" did not work..why?
  return array[array.length - 1];
}