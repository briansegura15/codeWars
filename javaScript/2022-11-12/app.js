function isPalindrome(x) {
  // turn all input to lowercase
  x = x.toLowerCase();
  //   make a reversed copy of the string
  const reversedStr = x.split("").reverse().join("");
  //   use conditional to check if the string reversed is equal to the original string
  if (x === reversedStr) {
    return true;
  } else {
    return false;
  }
}
