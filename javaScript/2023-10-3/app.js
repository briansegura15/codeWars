function oddOrEven(array) {
  //enter code here

  const result = array.reduce((acc, cur) => acc + cur, 0);
  if (result % 2 === 0) {
    return "even";
  } else if (result.length === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//  alternate solution
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}
