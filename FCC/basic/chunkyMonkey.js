/*****************************
* FreeCodeCamp solutions 
******************************

  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

// Will try to golf this later, while loop results less code, but is it more efficient? 🤔

function chunkArrayInGroups(arr, size) {
  // Break it up. 
  var newArr = []; 
  for (var i = 0; i < (arr.length / size); i++) {  
   if (size === 0){ break; } // Prevents infinite loop...try size <=0, still crashes
   newArr.push(arr.slice((i * size), (i * size) + size));
  }   
  return newArr;  
}    


chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups(['0', '1', '2', '3', '4', '5', '6', '7'], 3);