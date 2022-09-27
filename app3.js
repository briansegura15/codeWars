function expandedForm(num) {
  // turns the parameter into a string and splits each number into a substring
  let numStr = num.toString().split("");
  //       iterates through the parameter
  for (let i = 0; i < numStr.length; i++) {
    //
    for (let y = numStr.length - i; y > 1; y--) {
      numStr[i] += "0";
    }
  }

  numStr = numStr.filter(value => !value.startsWith(0));
  //   Joins the returned values with + in between
  return numStr.join(" + ");
}

// Alternate solution

const expandedForm = n =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");
