/*
Instructions from your teacher:
Write a function called "doubleSquareRootOf".

Given a number, "doubleSquareRootOf" returns double its square root.

var output = doubleSquareRootOf(121);
console.log(output); // --> 22

Starter Code :
function doubleSquareRootOf(num) {
  // your code here
}
*/

/*SOLUTION*/
function doubleSquareRootOf(num) {
  // your code here
  for (var i = 0; i < num; i++) {
    if (i * i === num) {
      return i * 2;
    }
  }
}

doubleSquareRootOf(9);