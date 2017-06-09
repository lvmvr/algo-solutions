/* FreeCodeCamp solutions
******************************

    Q: Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  
*/



function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(i){
    return i !== false && i !== null && i !== 0 && i !== "" && i !== undefined && (isNaN(i) === false || i.length >= 0);
  });
}

bouncer([NaN, "ate", "", false, 9]);
