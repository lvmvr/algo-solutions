/* FreeCodeCamp solutions
******************************

    Q: Reverse the provided string.
  You may need to turn the string into an array before you can reverse it.
  Your result must be a string.
*/

function slasher(arr, howMany) {

  // it doesn't always pay to be first
  return arr.splice(howMany); // REALLY... this took me wayyy to long 😫
}

slasher([1, 2, 3], 2);
