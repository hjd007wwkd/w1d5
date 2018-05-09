function isPalindrome(s) {
  var stringReverse = s.split(" ").join("").split("").reverse().join("");
  return s.split(" ").join("").split("").join("") == stringReverse;
}

module.exports = isPalindrome;
