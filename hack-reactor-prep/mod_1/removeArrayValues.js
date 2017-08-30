/*
Instructions from your teacher:
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

Starter Code :
function removeArrayValues(obj) {
  // your code here
}
*/

/*SOLUTION*/
function removeArrayValues(obj) {
  // your code here
  for (var i in obj) {
    if (Array.isArray(obj[i])) {
      delete obj[i];
    }
  }
}