function bmi(weight, height) {
  // create the formula
  let result = weight / (height * height);
  //   use conditionals to check which response to return
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25.0) {
    return "Normal";
  } else if (result <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// alternate solution

function bmi(weight, height) {
  let bmi = weight / (height * height);
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25.0:
      return "Normal";
    case bmi <= 30.0:
      return "Overweight";
    case bmi > 30:
      return "Obese";
  }
}
