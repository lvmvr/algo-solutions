/*****************************
* FreeCodeCamp solutions 
******************************

  Q: Repeat a given string (first argument) num times (second argument). 
  Return an empty string if num is a negative number.

*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  //that was easy...and cheating a little. Try using a for loop.
  if (num <= 0){
    return "";
  }
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);