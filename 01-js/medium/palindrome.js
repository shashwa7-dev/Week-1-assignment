/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const sanitizedStr = str.toLowerCase().replace(/ /g, "");
  const sanitizedStrArr = sanitizedStr.split("");
  let tmpStr = "";
  for (i = sanitizedStr.length - 1; i >= 0; i--) {
    tmpStr += sanitizedStrArr[i];
  }
  console.log(`${tmpStr} <-> ${sanitizedStr}`);
  return tmpStr === sanitizedStr;
}

module.exports = { isPalindrome };
