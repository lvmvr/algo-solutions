/*
Instructions from your teacher:
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3

Starter Code :
function countNumberOfKeys(obj) {
  // your code here
}
*/

/*SOLUTION*/
function countNumberOfKeys(obj) {
  // your code here
  var count = 0;
  for (var i in obj) {
    count++;
  }
  return count;
}