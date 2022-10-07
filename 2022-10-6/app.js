function DNAStrand(dna) {
  let dnaArr = dna.split("");
  for (var i = 0; i < dnaArr.length; i++) {
    if (dnaArr[i] === "A") {
      dnaArr[i] = "T";
    } else if (dnaArr[i] === "T") {
      dnaArr[i] = "A";
    } else if (dnaArr[i] === "C") {
      dnaArr[i] = "G";
    } else if (dnaArr[i] === "G") {
      dnaArr[i] = "C";
    }
  }
  var s = dnaArr.join("");
  return s;
}
