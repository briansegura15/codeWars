function feast(beast, dish) {
  let firstBeastLetter = beast[0];
  let firstDishLetter = dish[0];
  let lastBeastLetter = beast.slice(-1);
  let lastDishLetter = dish.slice(-1);

  if (
    firstBeastLetter == firstDishLetter &&
    lastBeastLetter == lastDishLetter
  ) {
    return true;
  } else {
    return false;
  }
}

// alternate solution

const feast = (b, d) => d.startsWith(b[0]) && d.endsWith(b[b.length - 1]);
