function twoSort(s) {
  s = s.sort();
  return s[0].split("").join("***");
}

// alternate solution

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
