function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a, b) => a - b);
}

// alternate solution
function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}
