/*
========================
		*** CODEWARS ***
========================
*/

// Q: Correct this code, so that the greet function returns the expected value.
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + name;
}

// A: Add 'this' keyword within extended prototype...challenge-much.
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}