function sum(numbers) {
  return numbers.reduce((prev, cur) => prev + cur, 0);
}

// alternate solution

sum = function (numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};
