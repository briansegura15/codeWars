function addLength(str) {
  return str.split(" ").map(word => `${word} ${word.length}`);
}

// alternative solution
function addLength(str) {
  var split = str.split(" ");
  var result = [];

  for (i = 0; i < split.length; ++i) {
    result.push(split[i] + " " + split[i].length);
  }
  return result;
}
