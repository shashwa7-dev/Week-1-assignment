/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let _str1 = str1.replace(/ /g, "");
  let _str2 = str2.replace(/ /g, "");
  if (_str1?.length === _str2?.length) {
    _str1 = _str1.toLowerCase().split("").sort().join("");
    _str2 = _str2.toLowerCase().split("").sort().join("");
    if (_str1 === _str2) {
      return true;
    }
  }
  return false;
}

module.exports = {
  isAnagram,
};
