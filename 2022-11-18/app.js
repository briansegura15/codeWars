function highAndLow(numbers) {
  // create an empty array holder
  let answer = [];
  //   split the string of numbers into an array of numbers
  numbers = numbers.split(" ");
  //   walk through the array and use the Math method / spread method to find the max and mins
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  //   push the resulting high and low to the emtpy array holder
  answer.push(max, min);
  //   rejoin the array into a string
  answer = answer.join(" ");
  //   and bammmm baby
  return answer;
}

// alternate solution

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
