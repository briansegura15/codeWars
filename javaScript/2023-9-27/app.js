function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  // your code here
  //   array of empty negatives
  const negatives = [];
  //   pushing negatives to empty array
  input.forEach(item => {
    if (item < 0) {
      negatives.push(item);
    }
  });
  //   adding negatives together
  let negResult = negatives.reduce((sum, current) => sum + current, 0);

  const posNums = input.filter(number => number > 0);

  // Check if the input array is empty or null

  // Return an array containing the count of positive numbers and the sum of negative numbers
  return [posNums.length, negResult];
}
