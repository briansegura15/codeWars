function getMiddle(s) {
  // create a holder for the position
  let position;
  //   create a holder for the amount of characters
  let amount;

  //   if string is odd
  if (s.length % 2 == 1) {
    position = s.length / 2;
    amount = 1;
    // else if string is even
  } else {
    position = s.length / 2 - 1;
    amount = 2;
  }
  return s.substring(position, position + amount);
}
