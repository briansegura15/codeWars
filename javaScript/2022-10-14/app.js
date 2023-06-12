function digitize(n) {
  // turn n to a string to apply split method which turns it into an array
  // use map method to iterate over array elements and make them a number
  // reverse the array
  return String(n).split("").map(Number).reverse();
}

//   alternate solution
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
