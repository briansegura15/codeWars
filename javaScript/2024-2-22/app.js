function position(letter) {
  //Write your own Code!
  return letter.charCodeAt() - 96;
}

console.log(position("b"));

// alternate solution

function position(letter) {
  //Write your own Code!
  let result = letter.toLowerCase();
  return "Position of alphabet: " + (result.charCodeAt(0) - 96);
}
