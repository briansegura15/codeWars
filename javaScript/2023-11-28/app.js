// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  const sortedArray = ages.sort((a, b) => a - b);

  const twoHighestValues = sortedArray.slice(-2);

  return twoHighestValues;
}

// alternate solution

function twoOldestAges(ages) {
  let s = ages.sort((a, b) => b - a);
  return [s[1], s[0]];
}
