/*
Instructions from your teacher:
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true

Starter Code :
function addProperty(obj, key) {
  // your code here
}
*/

/*SOLUTION*/
function addProperty(obj, key) {
  // your code here
  obj[key] = true;
}