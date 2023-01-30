function litres(time) {
  let drank = time * 0.5;
  return Math.floor(drank);
}

// Alternate solution

const litres = time => Math.floor(time / 2);
