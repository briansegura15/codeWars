function countPositivesSumNegatives(input) {
  // check for incorrect input
  if (input == null || input.length == 0) return [];
  // create holders
  let positive = 0;
  let negative = 0;
  // loop through the array
  for (let i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}
