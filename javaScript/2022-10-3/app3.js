function solution(str) {
  return str.split("").reverse().join("");
}

// Alternate solution

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString("hello");
