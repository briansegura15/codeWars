function addLength(str) {
  //start-here
  str = str.split(" ");
  const result = [];
  str.forEach(word => result.push(`${word} ${word.length}`));
  return result;
}

// alternate solution

function addLength(str) {
  return str.split(" ").map(s => `${s} ${s.length}`);
}

function addLength(str) {
  var split = str.split(" ");
  var result = [];

  for (i = 0; i < split.length; ++i) {
    result.push(split[i] + " " + split[i].length);
  }
  return result;
}
