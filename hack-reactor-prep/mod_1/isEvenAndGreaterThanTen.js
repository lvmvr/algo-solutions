/*
Instructions from your teacher:
Write a function called "isEvenAndGreaterThanTen".

Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false

Starter Code :
function isEvenAndGreaterThanTen(num) {
  // your code here
}
*/

/*SOLUTION*/
function isEvenAndGreaterThanTen(num) {
  // your code here
  return num % 2 === 0 && num > 10 ? true : false;
}