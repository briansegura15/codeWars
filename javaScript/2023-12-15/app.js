function DNAtoRNA(dna) {
  dna = dna.split("");
  let result = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      result.push("U");
    } else result.push(dna[i]);
  }
  return result.join("");
}

// alternate solution

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}
