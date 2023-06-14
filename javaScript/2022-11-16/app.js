function sumDigits(number) {
  // grab the absolute value of the number
  return (
    Math.abs(number)
      //   turn number into a string in order to introduce array methods
      .toString()
      // split every element by element
      .split("")
      // add
      .reduce(function (a, b) {
        return +a + +b;
      }, 0)
  );
}

// alternate solution
const sumDigits = number =>
  [...`${Math.abs(number)}`].reduce((pre, val) => pre + +val, 0);
