function fakeBin(x) {
  // split the string into an array of elements
  x = x.split("");
  //   walk through the array
  for (let i = 0; i < x.length; i++) {
    // conditional checking if element is higher than 5
    if (x[i] < 5) {
      x[i] = 0;
      console.log(x[i]);
    } else if (x[i] >= 5) {
      // conditional checking if element is greater than or equal to 5
      x[i] = 1;
      console.log(x[i]);
    }
  }
  //   rejoining the array
  return x.join("");
}

// alternate solution

function fakeBin(x) {
  return x
    .split("")
    .map(n => (n < 5 ? 0 : 1))
    .join("");
}
