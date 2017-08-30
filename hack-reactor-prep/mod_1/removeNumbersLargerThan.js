/*
Instructions from your teacher:
Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

Starter Code :
function removeNumbersLargerThan(num, obj) {
  // your code here
}
*/

/*SOLUTION*/
function removeNumbersLargerThan(num, obj) {
  // your code here
  for (var i in obj) {
    if (obj[i] > num){
      delete obj[i];
    }
  }
}