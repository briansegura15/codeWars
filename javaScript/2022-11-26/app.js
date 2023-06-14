function descendingOrder(n) {
  // make the number a string in order to transform into an array
  let newN = n
    .toString()
    .split("")
    // return the numbers in descending order
    .sort(function (a, b) {
      return b - a;
    })
    // rejoin the array into a single element
    .join("");
  // use unary + to make it a number
  return +newN;
}
