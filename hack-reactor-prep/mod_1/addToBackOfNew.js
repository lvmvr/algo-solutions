/*
Instructions from your teacher:
Write a function called "addToBackNew".

Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

Starter Code :
function addToBackOfNew(arr, element) {
  // your code here
}
*/

/*SOLUTION*/
function addToBackOfNew(arr, element) {
  // your code here
  var myArr = [];
  return myArr.concat(arr, element);
}

var input = [1, 2];

addToBackOfNew(input, 3); 