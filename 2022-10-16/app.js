function highAndLow(numbers) {
  // split the string into an array
  numbers = numbers.split(" ");
  // Use the Math.max/min in combination with spread and template literals in order to return the correct string
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
