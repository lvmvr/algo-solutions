/*
Instructions from your teacher:
Write a function called "getProperty".

Given an object and a key, "getProperty" returns the value of the property at the given key. 

Notes:
* If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'

Starter Code :
function getProperty(obj, key) {
  // your code here
}
*/

/*SOLUTION*/
function getProperty(obj, key) {
  // your code here
  if (!obj[key]) {
    return undefined;
  }
  return obj[key];
}