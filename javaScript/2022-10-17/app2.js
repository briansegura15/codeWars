function makeNegative(num) {
  // Code?
  //   Check to see if given number is positive
  if (Math.sign(num) == 1) {
    // if it is multiply by -1
    return num * -1;
    // if its negative multiply by 1
  } else {
    return num * 1;
  }
}
