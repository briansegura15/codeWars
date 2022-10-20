function correct(string) {
  // split string into an array
  string = string.split("");
  //   iterate over every element of the string array
  for (letter in string) {
    // use conditionals to check for problematic elements
    if (string[letter] === "1") {
      string[letter] = "I";
    } else if (string[letter] === "0") {
      string[letter] = "O";
    } else if (string[letter] === "5") {
      string[letter] = "S";
    }
  }
  //   rejoin and return correct string
  return string.join("");
}

// alternate solution

function correct(string) {
  const map = {
    0: "O",
    1: "I",
    5: "S",
  };

  return string
    .split("")
    .map(c => (map.hasOwnProperty(c) ? map[c] : c))
    .join("");
}
