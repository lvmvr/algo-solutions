/*****************************
* FreeCodeCamp solutions 
******************************

  Q: Return an array consisting of the largest number from each provided sub-array.
  For simplicity, the provided array will contain exactly 4 sub-arrays.
  
*/

function largestOfFour(arr) {
  // You can do this!
  //my solution is fuego🔥
  var newArr = [];
  for(var i in arr){
    arr[i].sort(function(a, b){
        return b - a;
    });
    newArr = newArr.concat(arr[i].shift());
  }
  return newArr;         
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);