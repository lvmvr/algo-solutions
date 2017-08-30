/*
Instructions from your teacher:
Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.

Notes:
* Do not use the || operator.
* Use ! and && operators instead.

var output = or(true, false);
console.log(output); // --> true;

Starter Code :
function or(expression1, expression2) {
  // your code here
}
*/

/*SOLUTION*/
function or(expression1, expression2) {
  // your code here
  if (expression1) return true;
  if (expression1 && expression2) return true;
  if ((!expression1 && expression2) && !(expression1 && expression2)) {
    return true;
  } else {
    return false;
  }
}

or(true, false);