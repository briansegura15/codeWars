function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  const result = numbersArray.filter(num => num % 2 === 0);
  return result;
}

// alternate solution
