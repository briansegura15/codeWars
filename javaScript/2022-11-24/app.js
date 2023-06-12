function XO(str) {
  // create holders for x and os
  let x = 0,
    o = 0;

  // push to x and o holders
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }

  //   compare xs and os
  return x === o;
}
