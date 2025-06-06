/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which mean
  
   s 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let reversed = str.split("").reverse().join("");

  if (str == reversed) {
    return true;

  } else 
  return false;
}

module.exports = isPalindrome;

