/*****************************
* FreeCodeCamp solutions 
******************************

  Q: Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
*/

// Need to golf this shit later, but need to move on 💩

function truncateString(str, num) {
  // Clear out that junk in your trunk... 👀
  
  var cont = '...';
  
  if (num >= str.length) {
    return str
  } else if (num <= 3) {
    return str.split('')
              .slice(0, num)
              .concat(cont)
              .join('');
  } else { 
    return str.split('')
              .slice(0, num - cont.length)
              .concat(cont)
              .join('');
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);