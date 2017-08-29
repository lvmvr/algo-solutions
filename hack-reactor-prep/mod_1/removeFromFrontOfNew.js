/*
Instructions from your teacher:
Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

Notes:
* You should be familiar with the 'slice' method.

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

Starter Code :
function removeFromFrontOfNew(arr) {
  // your code here
}
*/

/*SOLUTION*/
function removeFromFrontOfNew(arr) {
  // your code here
  var myArr = [];
  for (var i = 1; i < arr.length; i++) {
    myArr.push(arr[i]);
  }
  return myArr;
}
var myArr = [0, 1, 2, 3, 4];
removeFromFrontOfNew(myArr);