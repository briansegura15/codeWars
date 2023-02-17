function chromosomeCheck(sperm) {
  if (sperm === "XY") {
    return "Congratulations! You're going to have a son.";
  } else {
    return "Congratulations! You're going to have a daughter.";
  }
}

// alternate solution

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}

// much more elegant
