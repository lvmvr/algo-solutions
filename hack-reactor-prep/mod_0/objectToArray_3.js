/*
Instructions from your teacher:
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}



*/

/*SOLUTION*/
function convertObjectToList(obj) {
  // your code here
  var myArr = [];
  for (var key in obj){
    // Push a new array with each key and the key's value
    myArr.push([key, obj[key]]);
  }
  return myArr;
}
