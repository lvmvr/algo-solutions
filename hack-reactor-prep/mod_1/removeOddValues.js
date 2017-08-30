/*
Instructions from your teacher:
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }

Starter Code :
function removeOddValues(obj) {
  // your code here
}
*/

/*SOLUTION*/
function removeOddValues(obj) {
  // your code here
  for (var i in obj) {
    if (obj[i] % 2 !== 0) {
      delete obj[i];
    }
  }
}
