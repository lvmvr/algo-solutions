/*
Instructions from your teacher:
Write a function called "computePower".

Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 

var output = computePower(2, 3);
console.log(output); // --> 8

Starter Code :
function computePower(num, exponent) {
  // your code here
}
*/

/*SOLUTION*/
function computePower(num, exponent) {
  // your code here
  var myNum = num;
  var count = 1;
  
  if (exponent === 0) return 1;
  while (count < exponent) {
    num *= myNum;
    count++;
  }
  return num;
}
computePower(2, 0);