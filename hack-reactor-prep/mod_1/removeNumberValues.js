/*
Instructions from your teacher:
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

Starter Code :
function removeNumberValues(obj) {
  // your code here
}
*/

/*SOLUTION*/
function removeNumberValues(obj) {
  // your code here
  for (var i in obj) {
    if (typeof obj[i] === 'number') {
      delete obj[i];
    }
  }
}