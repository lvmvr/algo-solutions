/*
Instructions from your teacher:
Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }

Starter Code :
function removeStringValues(obj) {
  // your code here
}
*/

/*SOLUTION*/
function removeStringValues(obj) {
  // your code here
  for (var i in obj) {
    if (typeof obj[i] === 'string') {
      delete obj[i];
    }
  }
}