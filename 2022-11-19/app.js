function countBy(x, n) {
  // create an empty array holder
  var z = [];
  //   walk through array starting at 1 while element is less than n
  for (i = 1; i <= n; i++) {
    // push x * the element i to the empty array
    z.push(x * i);
  }
  return z;
}
