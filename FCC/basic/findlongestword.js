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