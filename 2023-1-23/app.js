function abbrevName(name) {
  name = name.split(" ");
  let firstAbr = name[0][0];
  let secondAbr = name[1][0];

  return firstAbr.toUpperCase() + "." + secondAbr.toUpperCase();
}
