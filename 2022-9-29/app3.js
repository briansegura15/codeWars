function inversion(array) {
  return array.map(e => {
    e * -1;
  });
}

// Alternate solution

const invert = array => array.map(num => -num);
