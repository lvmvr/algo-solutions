/*
Instructions from your teacher:
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true

Starter Code :
function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
}
*/

/*SOLUTION*/
function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else if (num1 && num2 === 7){
    return true;
  } else {
    return false;
  }
}
