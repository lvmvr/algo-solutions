/*
Instructions from your teacher:
Write a function called "isEitherEven".

Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

var output = isEitherEven(1, 4);
console.log(output); // --> true

Starter Code :
function isEitherEven(num1, num2) {
  // your code here
}
*/

/*SOLUTION*/
function isEitherEven(num1, num2) {
  // your code here
  return num1 % 2 === 0 || num2 % 2 === 0 ? true : false;
}