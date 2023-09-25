function accum(inputString) {
  const letters = inputString.split(""); // Split the string into an array of letters

  const result = letters.map((letter, index) => {
    const capitalizedLetter = letter.toUpperCase();
    const repeatedLetter = letter.toLowerCase().repeat(index);
    return `${capitalizedLetter}${repeatedLetter}`;
  });

  return result.join("-"); // Join the array elements with hyphens
}
