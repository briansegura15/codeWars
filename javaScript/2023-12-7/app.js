function flattenAndSort(array) {
  // Good luck, brave code warrior!
  const flatArr = array.flat();
  const result = flatArr.sort((a, b) => a - b);
  return result;
}

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a, b) => a - b);
}

// alternate solution

const flattenAndSort = array =>
  array.reduce((a, c) => [...a, ...c], []).sort((a, b) => a - b);
