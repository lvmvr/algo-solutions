                                                     /****   FREE CODE CAMP: NOTES ****/

/*
**************************

 Object Oriented JS Notes

**************************
*/

// First example uses a constructor to build upon objects in JS. No parameters given. 

var Students = function(){
  this.grade = 100;
  this.course = "COMP SCI 201";
  this.gpa = 3.5;
};

var tim = new Students();
// console.log(tim.grade);

// The next example fills in the parameters for inputs with different values. 
var Automobile = function (wheels, engine){
  this.wheels = wheels;
  this.engine = engine; // this.engine, a property, is now equal to the param 'engine' to later be given a val.
  var model = "Mercedes"; // A private property, same for any automobile.
  this.getModel = function(){ // 'Methods' of the object
    return model;
  };
  this.setModel = function(val){ // Used so that other users can explicitly change code outside of method.
    model = val;
    return val;
  };
};
var myCar = new Automobile(4, 1);
var bmw = myCar.setModel("BMW");
console.log(bmw);

/* 
The code above basically returns an object that looks like this: 

{
  "wheels": 4.
  "engine": 1.
  "model": "Mercedes"
}

And we can change these values for any new Automobile objects we want to create
*/


                                                      
                                                   /*  COMMON BUILT-IN METHODS: JS */
                                                     

// .map() method iterates through arr and callback option with args to reference arr item or index
var arr = [4, 6, 8, 10, 12];
var halfMe = arr.map(function(i){
  return i / 2;
});
console.log(halfMe);

// .reduce() method takes callback with two args (prevVal and currVal) and optional accumulator/ delimiter 
var myArr = [5, 5, 5];
var singleVal = myArr.reduce(function(previous, current){
  return previous + current;
}, 5); // Returns 20
console.log(singleVal);

// .filter() method takes callback with arg and test whether the arg will return true or false, all false filtered out.
var myScores = [99, 100, 98, 43, 89];
var finalGrade = myScores.filter(function(val){
  return val > 80;
});
console.log(finalGrade); // removes '43' from my scores

// .sort() method takes an optional callback and sorts the elements in an array numerically or alphabetically and returns it. 
var testScores = [55, 86, 93, 67, 92];
var rankings = testScores.sort(function(a, b) {
  return b - a; // Largest to smallest scores
});
console.log(rankings);

// .reverse() method simply reverses the order of an array and returns a reference of the reversed array.
var countdown = ["Liftoff!", 1,  2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countdown.reverse());
console.log(countdown); // Same values returned.

// .concat() method is used to concatenate two arrays into one. 
var oldArr = [1, 2, 3];
var newArr = [4, 5, 6];

var singleArr = oldArr.concat(newArr);
console.log(singleArr);

// .split() method splits the items of a string into an array, takes an arg that acts as the delimeter to split str at given option.
var fullName = "Lamar Rasheen Glenn";
var credentials = fullName.split(" "); // Split the arr by space. Try using "a" to see what happens.
console.log(credentials);

// .join() method joins elements into an array into a string. Takes an arg as delimiter to join elements by choice.
var myName = credentials.join(" ");
console.log(myName); // Joins my name by adding space in between each element in the array.

















