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

// Other solution, not mines, using a for-loop
/*
		function repeatStringNumTimes(str, num) {
		var newstr = [];
		for (var i = 0; i < num; i++) {
		  newstr.push(str);
		}
		return newstr.join('');
		}

		repeatStringNumTimes("abc", 3);
*/