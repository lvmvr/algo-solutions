/*
Instructions from your teacher:
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
function transformEmployeeData(array) {
  // your code here
}
*/

/*SOLUTION*/
function transformEmployeeData(array) {
  // your code here
  var myList = {}, 
      myArr = [];
      
  
  for (var i = 0; i < array.length; i++) {
    // First push object into array
    myArr.push(myList);
    for (var j = 0; j < array[i].length; j++){
      // Assign key/value pairs for each el in each nested array
      myList[array[i][j][0]] = array[i][j][array[i][j].length - 1];
    }
    // Reset the value of the object
    myList = {};
    // ...Took a while to realize cannot attach the prev. object 😒
  }
  return myArr;
}