/* FreeCodeCamp solutions
******************************

	Q: Return the length of the longest word in the provided sentence.
	Your response should be a number.
  
*/

function findLongestWord(str) {
  var arr = str.split(" ") // split into array via space
               .sort(function(a, b){  
                 return b.length - a.length; // sort el by length, larges-smallest
               });
  return arr[0].length; // return length of first el, since largest-smallest.
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// NEW SOLUTION, NOT MUCH HAS CHANGED, BUT I GOLFED THIS MF'ER 🙊 ...STILL ON BASIC SHIT BUT YEAH 😒
return str.split(" ")
          .sort(function(a, b) {
            return b.length - a.length;
          })
          .shift() // Removes the first el of an arr and returns that val
          .length; // Gimme them numbas baby!!...nah? Ok then. 😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒

