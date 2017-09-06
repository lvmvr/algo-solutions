/*
Instructions from your teacher:
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

Starter Code :
function getAllElementsButNth(array, n) {
  // your code here
}
*/

/*SOLUTION*/
function getAllElementsButNth(array, n) {
  // your code here
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[n]) {
      delete array[i];
    }
  }
  return array.filter(Boolean);
}