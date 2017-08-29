/*
Instructions from your teacher:
Write a function called "computeSquareRoot".

Given a number, "computeSquareRoot" returns its square root.

var output = computeSquareRoot(9);
console.log(output); // --> 3

Starter Code :
function computeSquareRoot(num) {
  // your code here
}
*/

/*SOLUTION*/
function computeSquareRoot(num) {
  // your code here
  for (var i = 0; i < num; i++) {
    if (i * i === num) {
      return i;
    }
  }
}

computeSquareRoot(144);