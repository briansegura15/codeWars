function mouthSize(animal) {
  // use if statement to check if animal is alligator
  if (animal === "alligator") {
    return "small";
  } else {
    return "wide";
  }
}

// alternate solution
function mouthSize(animal) {
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
}
