function nameShuffler(str) {
  //Shuffle It
  //   use split method to turn string into an array
  // use reverse method to rearrange order of array
  // use join method to rejoin array into string
  return str.split(" ").reverse().join(" ");
}

// alternate method
function nameSuffle(str) {
  var elem = str.split(" ");
  var res = elem[1] + " " + elem[0];
  return res;
}
