function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

// Alternate solution

function century(year) {
  var century = 0;

  for (var i = 0; i < year; i++) {
    if (i % 100 == 0) {
      century++;
    }
  }
  return century;
}
