function isTriangle(a, b, c) {
  // 2 sides of a triangle added together must be greater than the longest
  return a + b > c && a + c > b && b + c > a;
}

// Alternate solution

function isTriangle(a, b, c) {
  let [shortest, shorter, longest] = [a, b, c].sort();

  return longest < shorter + shortest;
}
