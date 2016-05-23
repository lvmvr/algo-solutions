/* FreeCodeCamp solutions
******************************

	Q: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
	For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
  
*/

function titleCase(str) {
  return str.toLowerCase()
            .split(" ")
            .map(function(item) {return item[0].toUpperCase() + item.slice(1); } )
            .join(" ");
} 

titleCase("I'm a little tea pot");


/*
		Quicker solution - not mines. Look up replace function and regex for future reference:

		**Comment out line below, use for ES6 syntax**
 		jshint esversion: 

    function titleCase(str) {
      return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    }

*/    


