function sumEvenNumbers(input) {
  return input.filter(e => e % 2 == 0).reduce((x, y) => x + y, 0);
}
