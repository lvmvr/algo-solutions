/*
**************************

 Regex Notes
 *Use regular expressions (regex for short) to find patterns or certain words inside a string.
**************************
*/

// EXAMPLE 0: Basic Expression
var sampleString0 = "The yellow cow jumped over the other cattle to get to the purple cow."

// g = global, find all instances/ matches. 
// i = ignore all cases, upper or lower while searching.
// String below should have saved/ returned an integer of "3".
var findSecretWord = /the/gi;

/************************************************/

// EXAMPLE 1: Regex Selectors
var sampleString1 = "I told you to buy 1 apple and you brought 1 for Jim and 19 for Tim!"

// \d is a selector for a single digit, 0 - 9. 
// Adding a '+' next to the digit selector [ /\d+/g ] selects more than one digit in a string. 
// String below should saved the integer '3'.
var findNums = /\d+/g; 

/************************************************/

// EXAMPLE 2: Whitespace Characters [ Space " ", Carriage return (\r), Newline (\n), Tab (\t), and Form Feed (\f) ].
var sampleString2 = "Are there a lot of spaces in this string?";

// \s is used to select all whitespace characters in a string. 
// The FCC example uses \s+/g...what exactly does the '+' do? Returns the same integer. 
// String below should save the integer '8'.
var findSpaces = /\s+/g;

/************************************************/

// EXAMPLE 3: Inverted Regex
var sampleString3 = "Are there a lot of letters in this sting?";

// Selecting the capitalized version of each example used above selects the inverse of it's normal function.
// For example, "/\S+/g" selects all non-whitespace characters. 
// String below should save the integer '33'. Try adding a '+' in there, what happens? 
var findChars = /\S/g;
