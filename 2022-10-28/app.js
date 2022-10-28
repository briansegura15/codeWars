function hoopCount(n) {
  //your code goes here
  //   ternary used to check if n is greater than or equal to 10.
  return n >= 10
    ? //   return correct statement
      "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// alternate solution

function hoopCount(n) {
  if (Number.isInteger(n)) {
    if (n >= 10) {
      return "Great, now move on to tricks";
    } else {
      return "Keep at it until you get it";
    }
  }
}
