function DNAStrand(dna) {
  const arrDNA = [];

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") arrDNA.push("T");
    if (dna[i] === "T") arrDNA.push("A");
    if (dna[i] === "C") arrDNA.push("G");
    if (dna[i] === "G") arrDNA.push("C");
  }
  return arrDNA.join("");
}

// alternate solution

function DNAStrand(dna) {
  //your code here
  var res = "";
  for (var i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        res += "T";
        break;
      case "T":
        res += "A";
        break;
      case "G":
        res += "C";
        break;
      case "C":
        res += "G";
        break;
    }
  }
  return res;
}
