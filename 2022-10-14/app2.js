function doubleChar(str) {
  // Your code here
  return str
    .split("")
    .map(c => c + c)
    .join("");
}

// Alternate solution
function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}
