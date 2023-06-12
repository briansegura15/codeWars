function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  let high = Math.max(n, m);
  let low = Math.min(n, m);
  return high % low;
}
