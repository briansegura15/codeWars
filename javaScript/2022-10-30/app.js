function squareSum(numbers) {
  // console.log(numbers)
  //   use map method to iterate over every element and square it
  // use reduce method to add every number squared
  return numbers.map(x => x * x).reduce((total, value) => total + value, 0);
}

// alternate solution

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
