/*
Instructions from your teacher:
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

Starter Code : 
function countWords(str) {
  // your code here
}
*/

/*SOLUTION*/
function countWords(str) {
  // your code here
  if (str === "") return {};
  
  var myArr = str.split(" ");
  var myObj = myArr.reduce(function (obj, word) { 
    if (word in obj) {
      obj[word]++;
    }
    else {
      obj[word] = 1;
    }
    return obj;
  }, {});
  return myObj;
}