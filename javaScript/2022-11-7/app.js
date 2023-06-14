function findMultiples(int, limit) {
  // create a holder
  let result = [];
  // make i the integer and wwalk through the limit
  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

// alternate solution
function findMultiples(int, limit) {
  return Array.from({length: parseInt(limit / int)}, (_, i) => (i + 1) * int);
}
