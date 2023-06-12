function removeSmallest(numbers) {
  //   Find the smallest integer in the array
  let min = Math.min(...numbers);
  //   find the index of min
  const index = numbers.indexOf(min);
  //   use filter method to go through array and filter out elements that do not have the value of the variable index
  return numbers.filter((e, i) => i !== index);
}

// Alternate solution

const removeSmallest = numbers =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
