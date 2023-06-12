function solution(string) {
  // split the original string by character
  // iterate over the elements of the array
  string = string.split("").map(function (el) {
    // use conditional to check if the element that is being iterated over
    // is a capital
    if (el === el.toUpperCase()) {
      // if it is, add a space before said character
      el = " " + el;
    }
    return el;
  });
  //   rejoin array into string
  return string.join("");
}

// alternate solution

const solution = string => {
  return [...string]
    .map(char => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
};
