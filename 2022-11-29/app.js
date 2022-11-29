function maskify(cc) {
  // split the string into an array
  let arr = cc.split("");
  //   walk through the array and stop at the last 4 integers
  for (let i = 0; i < arr.length - 4; i++) {
    // turn every element into the hast symbol
    arr[i] = "#";
  }
  //   return the rejoined array string
  return arr.join("");
}

// alternate solution
