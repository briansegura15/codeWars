function sumOfMinimums(arr) {
  // your code here
  const nestedMins = arr.map(subArrs => Math.min(...subArrs));
  const result = nestedMins.reduce((a, c) => {
    return a + c;
  }, 0);
  return result;
}

// alternate solution

function sumOfMinimums(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += Math.min(...arr[i]);
  }

  return total;
}
