function digitize(n) {
  // console.log(typeof n)
  n = n.toString();
  //   console.log(typeof n)
  let result = n.split("").reverse();
  result = result.map(Number);
  return result;
}

// Alternate solution

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
