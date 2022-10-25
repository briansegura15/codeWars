function filter_list(l) {
  // Return a new array with the strings filtered out
  //   using the filter method to return an array that meets the criteria of being a typeof number
  return l.filter(e => typeof e == "number");
}

// alternate solution

function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
