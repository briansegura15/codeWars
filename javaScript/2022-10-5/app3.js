function sumTwoSmallestNumbers(numbers) {
  //Code here
  let a = numbers.sort((a, b) => a - b).slice(0, 1);
  let b = numbers.sort((a, b) => a - b).slice(1, 2);

  let trueA = parseInt(a);
  let trueB = parseInt(b);
  return trueA + trueB;
}

// Alternate solution, did way too much up there and didnt follow DRY principles

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
