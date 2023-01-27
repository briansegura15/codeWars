function addLength(str) {
  return str.split(" ").map(word => `${word} ${word.length}`);
}

// Alternate Solution
function addLength(str) {
  let split = str.split(" ");
  let result = [];

  for (i = 0; i < split.length; i++) {
    result.push(split[i] + " " + split[i].length);
  }
  return result;
}
