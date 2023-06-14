var summation = function (num) {
  // create a holder
  let result = 0;
  //   walk through the array by starting at one and ending at num
  for (let i = 1; i <= num; i++) {
    // add to the holder
    result += i;
  }

  return result;
};

// alternate solution
const summation = n => (n * (n + 1)) / 2;
