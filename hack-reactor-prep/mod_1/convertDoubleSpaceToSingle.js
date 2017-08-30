/*
Instructions from your teacher:
Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notes:
* In order to do this problem, you should be familiar with "String.split", and "Array.join".

Starter Code :
function convertDoubleSpaceToSingle(str) {
  // your code here
}
*/

/*SOLUTION*/
function convertDoubleSpaceToSingle(str) {
  // your code here
  var myArr = [];
  str = str.split(" ");
  
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > 1) {
      myArr.push(str[i]);
    }
  }
  return myArr.join(" ");
}