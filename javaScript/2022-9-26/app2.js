function even_or_odd(number) {
  // Ternary used to check if parameter is divisible by 2
  return number % 2 === 0 ? "Even" : "Odd";
  //   if (number % 2 === 0) {
  //     return "Even";
  //   } else {
  //     return "Odd";
  //   }
}

// alternate solution #2
const even_or_odd = n => (n % 2 ? "Odd" : "Even");
